import 'reflect-metadata';
import {AppCacheManifestReader, SWManifest, SWManifestBundle, SWManifestDelta, SWManifestFile} from './manifest';
import {SWAdapter, ServiceWorker} from './driver';
import {Injectable} from 'angular2/src/core/di';

/**
 * The actual service worker.
 */
@Injectable()
export class NgServiceWorker implements ServiceWorker {

	constructor(private _adapter: SWAdapter) {
    this._adapter.worker = this;
	}

  /**
   * Load the AppCache manifest from the named cache.
   */
  loadManifestFromCache(cache: string): Promise<Response> {
    return this
      ._adapter
      .caches
      .open(`manifest.${cache}`)
      .then((cache) => cache.match(this._adapter.newRequest('/manifest.appcache')))
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
    return this.fetchFresh(this._adapter.newRequest('/manifest.appcache'));
  }

  /**
   * Set the manifest in the named cache.
   */
  setManifest(cache: string, resp: Response): Promise<any> {
    return this
      ._adapter
      .caches
      .open(`manifest.${cache}`)
      .then((cache) => cache.put(this._adapter.newRequest('/manifest.appcache'), resp));
  }

  /**
   * Process a fetch event.
   */
	fetch(request: Request) {
    return this
      .readManifest()
      .then((manifest: SWManifest) => {
        // If no manifest exists, fall through to fetch().
        if (manifest === null || manifest === undefined) {
          console.log('Warning: no manifest so falling through to fetch()');
          return this._adapter.fetch(request);
        }
        
        var origin = this._adapter.origin;
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
            request = this._adapter.newRequest(targetUrl);
            break;
          }
        }
        
        // Now attempt to match the request against the various bundle caches.
        var promises = [];
        for (var name in manifest.bundles) {
          var bundle: SWManifestBundle = manifest.bundles[name];
          promises.push(this
            ._adapter
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
            console.log('fall through', request.url);
            return this._adapter.fetch(request);
          });
      });
	}

  /**
   * Process an install event.
   */
	install(): Promise<void> {
    // Fetch the current manifest.
    return Promise
      .all([
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
          .then(() => this.setManifest('latest', this._adapter.newResponse(newManifestText)));
      });
  }

  /**
   * Process an activation event.
   */
	activate(): Promise<void> {
    // Promote the latest manifest to be active.
    return Promise
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
            // Promote the latest manifest to be active.
            return this.setManifest('active', this._adapter.newResponse(texts[0]));
          });
      });
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
        
        console.log('NEW MANIFEST', manifests[0]);
        console.log('OLD MANIFEST', manifests[1]);
        
        console.log('parsing new');
        var manifest = this._parseManifest(manifests[0]);
        console.log('parsing old');
        var oldManifest = this._parseManifest(manifests[1]);
        console.log("new", manifest);
        console.log("old", oldManifest);
        var delta = this.diffManifest(oldManifest, manifest);
        console.log('diff done', delta);
        return this
          .primeManifest(manifest, delta)
          .then(() => this.setManifest('active', this._adapter.newResponse(manifests[0])))

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
      console.log('diffing bundle', name);
      var bundle = newVer.bundles[name];
      
      // For each new file, determine if A) it's cached and B) it's changed since the last version.
      bundle.files.forEach((newFile) => {
        console.log(`processing file ${newFile.url}`);
        var old = this._findFileInManifest(oldVer, newFile.url);
        
        if (old === null) {
          console.log(`file not present in old manifest ${newFile.url}`);
          return;
        }
        
        console.log(`old bundle: ${old['bundle']}, old version: '${old['file'].version}', new version: '${newFile.version}'`);
        // If there is an old cached version, both versions have hashes, and the hashes match, it's safe
        // to use the old version instead of fetching from the network.
        if (newFile.version !== null && old['file'].version !== null && newFile.version === old['file'].version) {
            console.log(`Marking ${newFile.url} as unchanged due to hash versioning`);
          delta.unchanged.push(newFile);
        } else if (name === old['bundle'] && bundle.version === oldVer.bundles[name].version) {
          console.log(`Marking ${newFile.url} as unchanged due to bundle versioning`);
          delta.unchanged.push(newFile);
        } else {
          console.log(`Must fetch ${newFile.url}`);
        }
        
        
      });
    }
    return delta;
  }
  
  primeManifest(manifest: SWManifest, delta: SWManifestDelta = null): Promise<void> {
    if (delta !== null) {
      console.log(`priming manifest with delta`, delta);
    } else {
      console.log(`priming manifest without delta`)
    }
    var promises = [];
    // Prime each bundle.
    for (var name in manifest.bundles) {
      var bundle = manifest.bundles[name];
      promises.push(bundle.files.map((file) => {
        console.log(`priming ${file.url} in ${name}`);
        return this
          ._adapter
          .caches
          .open(bundle.cache)
          .then((cache) => {
            // Need a promise to begin with. The first step is to check the delta for an old version
            // to pull forward.
            return Promise.resolve(null)
              .then(() => {
                if (delta === null) {
                  return null;
                }
                // Check if this file is listed as unchanged.
                var oldFile = delta.unchanged.find((old) => old.url === file.url);
                if (oldFile === undefined || oldFile === null) {
                  // No, so proceed with fetching from the server.
                  return null;
                }
                
                // Find oldFile in the old manifest to determine the bundle.
                for (var oldName in delta.oldManifest.bundles) {
                  var oldBundle = delta.oldManifest.bundles[oldName];
                  if (oldBundle.files.find((old) => old.url === file.url) !== undefined) {
                    return this
                      ._adapter
                      .caches
                      .open(oldBundle.cache)
                      .then((oldCache) => oldCache.match(this._adapter.newRequest(oldFile.url)))
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
                console.log('fetching from net', file.url);
                // Fetch from the network.
                return this.fetchFresh(this._adapter.newRequest(file.url));
              })
              .then((resp) => {
                if (resp === null || resp === undefined) {
                  // TODO: better error handling.
                  throw `Failed to update/fetch: ${file.url}`;
                }
                return cache.put(this._adapter.newRequest(file.url), resp);
              });
          });
      }));
    }
    return Promise
      .all(promises)
      .then(() => undefined);
  }
  
  _findFileInManifest(manifest: SWManifest, url: string): any {
    for (var name in manifest.bundles) {
      var bundle = manifest.bundles[name];
      var file = bundle.files.find((file) => file.url === url);
      if (file !== undefined) {
        return {
          "file": file,
          "bundle": name
        };
      }
    }
    return null;
  }

  /**
   * Fetch a request without using the built in HTTP cache.
   */
  fetchFresh(req: Request): Promise<Response> {
    var noCacheReq = this._adapter.newRequest(req.url, {
      method: req.method,
      mode: req.mode,
      credentials: req.credentials,
      cache: 'no-cache'
    });
    return this._adapter.fetch(noCacheReq);
  }
}