/// <reference path="../typings/tsd.d.ts" />
import 'reflect-metadata';
import {SWManifest, SWManifestBundle, SWManifestDelta, SWManifestFile} from '';
import {Injector, Injectable, provide} from 'angular2/src/core/di';

/**
 * Binding token for access to the ServiceWorker context.
 */
abstract class SWContext {
  [key: string]: any;
  addEventListener: typeof addEventListener;
  location: Location;
  fetch: typeof fetch;
  caches: CacheStorage;
}

const SW_EVENTS = {
	INSTALL: 'install',
	FETCH: 'fetch',
	ACTIVATE: 'activate'
}

/**
 * The actual service worker.
 */
@Injectable()
class NgServiceWorker {
  context: SWContext;

	constructor(serviceWorkerContext: SWContext) {
    this.context = serviceWorkerContext;
    this.context['sw'] = this;

		serviceWorkerContext.addEventListener(SW_EVENTS.ACTIVATE, (ev) => this.onActivate(ev));
		serviceWorkerContext.addEventListener(SW_EVENTS.INSTALL, (ev) => this.onInstall(ev));
		serviceWorkerContext.addEventListener(SW_EVENTS.FETCH, (ev) => this.onFetch(ev));
	}

  /**
   * Load the AppCache manifest from the named cache.
   */
  loadManifestFromCache(cache: string): Promise<Response> {
    return this
      .context
      .caches
      .open(`manifest.${cache}`)
      .then((cache) => cache.match(new Request('/manifest.appcache')))
      .then((resp) => {
        // If no manifest is currently cached, return null.
        if (resp === undefined) {
          return null;
        }
        return resp;
      });
  }

  /**
   * Fetch the AppCache manifest from the server.
   */
  fetchManifest(): Promise<Response> {
    return this.fetchFresh(new Request('/manifest.appcache'));
  }

  /**
   * Set the manifest in the named cache.
   */
  setManifest(cache: string, resp: Response): Promise<any> {
    return this
      .context
      .caches
      .open(`manifest.${cache}`)
      .then((cache) => cache.put(new Request('/manifest.appcache'), resp));
  }

  /**
   * Process a fetch event.
   */
	onFetch(fetchEvent) {
    var request: Request = fetchEvent.request;
    fetchEvent.respondWith(this
      .readManifest()
      .then((manifest: SWManifest) => {
        // If no manifest exists, fall through to fetch().
        if (manifest === null || manifest === undefined) {
          console.log('Warning: no manifest so falling through to fetch()');
          return this.context.fetch(request);
        }
        
        var origin = this.context.location.origin;
        var requestUrl = request.url;
        if (requestUrl.startsWith(origin)) {
          requestUrl = requestUrl.substring(origin.length);
        }
        
        // First attempt to match against routes. If there's a matching route, use that instead.
        for (var name in manifest.bundles) {
          var bundle: SWManifestBundle = manifest.bundles[name];
          
          
          // If this bundle has a matching route, make a request for it instead.
          if (bundle.routes.hasOwnProperty(requestUrl)) {
            var targetUrl = bundle.routes[requestUrl];
            request = new Request(targetUrl);
            break;
          }
        }
        
        // Now attempt to match the request against the various bundle caches.
        var promises = [];
        for (var name in manifest.bundles) {
          var bundle: SWManifestBundle = manifest.bundles[name];
          promises.push(this
            .context
            .caches
            .open(bundle.cache)
            .then((cache) => cache.match(request))
            .then((resp) => resp !== undefined ? resp : null));
        }
        // Pick the first non-null response if there is one, and fall back on fetch if it's not found.
        return Promise
          .all(promises)
          .then((responses) => responses.reduce((prev, resp) => prev !== null ? prev : resp), null)
          .then((resp) => {
            if (resp !== null) {
              return resp;
            }
            return this.context.fetch(request);
          });
      })
    );
	}

  /**
   * Process an install event.
   */
	onInstall(installEvent) {
    console.log('installing...');
    // Fetch the current manifest.
    installEvent.waitUntil(
      Promise.all([
        this.fetchManifest().then((resp) => resp !== undefined ? resp.text() : null),
        this.loadManifestFromCache('active').then((resp) => resp !== null ? resp.text() : null)
      ])
      .then((manifests) => {
        var newManifestText = manifests[0];
        if (newManifestText === null) {
          throw 'Error fetching manifest from server.';
        }
        var newManifest = this._parseManifest(newManifestText);
        var oldManifestText = manifests[1];
        var prime = null;
        if (oldManifestText === null) {
          prime = this.primeManifest(newManifest);
        } else {
          var oldManifest = this._parseManifest(oldManifestText);
          var delta = this.diffManifest(oldManifest, newManifest);
          prime = this.primeManifest(newManifest, delta);
        }
        return prime
          .then(() => this.setManifest('latest', new Response(text)))
          .then(() => console.log('install complete'));
      });
  }

  /**
   * Process an activation event.
   */
	onActivate(activateEvent) {
    console.log('activating...');
    // Promote the latest manifest to be active.
    activateEvent.waitUntil(Promise
      .all([this.loadManifestFromCache('latest'), this.loadManifestFromCache('active')])
      .then((manifests) => {
        var latest = manifests[0];
        var active = manifests[1];
        if (latest === null) {
          throw 'activation event but no manifest from installation?';
        }
        
        var latestText = latest !== null ? latest.text() : Promise.resolve('');
        var activeText = active !== null ? active.text() : Promise.resolve('');
        
        return Promise
          .all([latestText, activeText])
          .then((texts) => {
            if (texts[0] === texts[1]) {
              return;
            }
            console.log('application has been updated!');
            // Promote the latest manifest to be active.
            return this.setManifest('active', new Response(texts[0]));
          });
      }));
	}

  /**
   * Read and parse the active manifest.
   */
  readManifest(): Promise<SWManifest> {
    return this
      .loadManifestFromCache('active')
      .then((resp) => {
        if (resp === null) {
          console.log("Null response from active cache - no manifest");
          return null;
        }
        return resp.text().then((text) => this._parseManifest(text));
      });
  }

  /**
   * Check for any updates to the manifest.
   */
  checkForUpdate(): Promise<boolean> {
    return Promise.all([
        this
          .fetchManifest()
          .then((resp) => resp.text()),
        this.loadManifestFromCache('active')
          .then((resp) => resp !== null ? resp.text() : Promise.resolve(''))
      ])
      .then((manifests) => {
        if (manifests[0] === manifests[1]) {
          console.log('No update available.');
          return false;
        }
        
        var manifest = this._parseManifest(manifests[0]);
        return this
          .primeManifest(manifest)
          .then(() => this.setManifest('active', new Response(manifests[0])))
          .then(() => console.log('Updated!'))
          .then(() => true);
      });
  }

  /**
   * Parse the given manifest text with the `AppCacheManifestReader`.
   */
  _parseManifest(manifest:string): SWManifest {
    if (manifest === undefined) {
      return null;
    }
    var reader = new AppCacheManifestReader();
    reader.read(manifest);
    return reader.swManifest;
  }
  
  diffManifest(oldVer: SWManifest, newVer: SWManifest): SWManifestDelta {
    var delta = new SWManifestDelta(oldVer);
    for (var name in newVer.bundles) {
      var bundle = newVer.bundles[bundle];
      
      // For each new file, determine if A) it's cached and B) it's changed since the last version.
      bundle.files.forEach((newFile) => {
        var oldFile = this._findFileInManifest(oldVer, newFile.url);
        // If there is an old cached version, both versions have hashes, and the hashes match, it's safe
        // to use the old version instead of fetching from the network.
        if (oldFile !== null && newFile.version !== null && oldFile.version !== null && newFile.version === oldFile.version) {
          delta.unchanged.push(newFile);
        }
      });
    }
  }
  
  primeManifest(manifest: SWManifest, delta?: SWManifestDelta = null): Promise<void> {
    var promises = [];
    // Prime each bundle.
    for (var name in manifest.bundles) {
      var bundle = manifest.bundles[name];
      promises.add(bundle.files.map((file) => {
        return this
          .context
          .caches
          .open(bundle.cache)
          .then((cache) => {
            // Need a promise to begin with. The first step is to check the delta for an old version
            // to pull forward.
            return Promise.resolve(null)
              .then(() => {
                // If no delta was passed, skip this step.
                if (delta !== null) {
                  return null;
                }
                
                // Check if this file is listed as unchanged.
                var oldFile = delta.unchanged.find((old) => old.url === file.url);
                if (oldFile === undefined)) {
                  // No, so proceed with fetching from the server.
                  return null;
                }
                
                // Find oldFile in the old manifest to determine the bundle.
                for (var name in delta.oldManifest.bundles) {
                  var oldBundle = delta.oldManifest.bundles[name];
                  if (oldBundle.files.indexOf(oldFile) !== -1) {
                    return this
                      .context
                      .caches
                      .open(oldBundle.cache)
                      .then((oldCache) => oldCache.match(new Requests(oldFile.url)))
                      .then((res) => res !== undefined ? res : null);
                  }
                }
                
                // The cached version was unexpectedly missing, so fall back on fetching from the server.
                return null;
              })
              .then((cachedResponse) => {
                // If a cached response is ready, just use it.
                if (cachedResponse !== null) {
                  return cachedResponse;
                }
                // Fetch from the network.
                return this.context.fetch(new Request(file.url));
              })
              .then((resp) => {
                if (resp === null || resp === undefined) {
                  // TODO: better error handling.
                  throw `Failed to update/fetch: ${file.url}`;
                }
                return cache.put(new Request(file.url), resp);
              });
          });
      });
    }
    return Promise.all(promises);
  }
  
  _findFileInManifest(manifest: SWManifest, url: string): SWManifestFile {
    for (var name in manifest.bundles) {
      var bundle = manifest.bundles[name];
      var file = bundle.files.find((file) => file.url === url));
      if (file !== undefined) {
        return file;
      }
    }
    return null;
  }

  /**
   * Fetch a request without using the built in HTTP cache.
   */
  fetchFresh(req: Request): Promise<Response> {
    return this.context.fetch(new Request(req.url, {
      method: req.method,
      mode: req.mode,
      credentials: req.credentials,
      referrer: req.referrer,
      cache: 'no-cache'
    }));
  }
}

Injector
	.resolveAndCreate([
		provide(SWContext, { useValue: self }),
		NgServiceWorker])
	.get(NgServiceWorker);
