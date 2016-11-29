import {VersionWorker, Plugin, PluginFactory, Operation} from './api';
import {VersionWorkerImpl} from './worker';
import {ScopedCache} from './cache';
import {NgSwAdapter, NgSwCache, NgSwEvents, NgSwFetch} from './facade';
import {LOG, LOGGER, Verbosity} from './logging';
import {Manifest, parseManifest} from './manifest';
import {doAsync} from './rxjs';

import {Observable} from 'rxjs/Observable';

let driverId: number = 0;

export class Driver {
  
  private id: number;
  private activeWorker: Promise<VersionWorker> = null;
  private scopedCache: ScopedCache;

  private stagedManifest: Promise<any>;

  private seenClientIds: Object = {};

  // Public for testing
  updateCheck: Promise<boolean>;

  constructor(
      private manifestUrl: string,
      private plugins: PluginFactory<any>[],
      private scope: ServiceWorkerGlobalScope,
      private adapter: NgSwAdapter,
      private cache: NgSwCache,
      private events: NgSwEvents,
      public fetcher: NgSwFetch) {
        this.id = driverId++;
        this.scopedCache = new ScopedCache(this.cache, 'ngsw:');

        this.updateCheck = this.checkForUpdates();

        // On installation, load the worker as if a fetch event happened.
        // This will prime the caches.
        events.install.subscribe(event => {
          LOG.info('INSTALL EVENT');
          event.waitUntil(this.workerFromActiveOrFreshManifest());
        });

        events.activate.subscribe(() => {
          LOG.info('ACTIVATE EVENT');
        });

        events.fetch.subscribe(event => {
          let req = event.request;
          const [response, carryOn] = this.onFetch(event);
          event.respondWith(response);
          event.waitUntil(carryOn);
        });

        events
          .message
          .filter(event => event.ports.length === 1 && event.data && event.data.hasOwnProperty('$ngsw'))
          .mergeMap(event => {
            const respond: MessagePort = event.ports[0];
            return this
            .handleMessage(event.data)
            .do(
              response => respond.postMessage(response),
              undefined,
              () => respond.postMessage(null)
            )
            .ignoreElements();
          })
          .subscribe();

        events
          .push
          .filter(event => !!event.data)
          .map(event => event.data.json())
          .subscribe(data => {
            if (!this.activeWorker) {
              return;
            }
            this
              .activeWorker
              .then(worker => (worker as VersionWorkerImpl).push(data));
          });
      }

  private onFetch(event: FetchEvent): [Promise<Response>, Promise<any>] {
    let start = this
      .maybeUpdate(event)
      .then(worker => {
        if (worker) {
          this.activeWorker = Promise.resolve(worker);
          return worker;
        } else if (!!this.activeWorker) {
          return this.activeWorker;
        } else {
          this.activeWorker = this.workerFromActiveOrFreshManifest();
          return this.activeWorker;
        }
      })
      .then(worker => worker.fetch(event.request));
    return [
      start.then(v => v[0].toPromise()),
      start.then(v => v[1].toPromise()),
    ];
  }

  private maybeUpdate(event: FetchEvent): Promise<VersionWorker> {
    const clientId = event.clientId;
    return this
      .scope
      .clients
      .matchAll()
      .then(clients => {
        if (clients.length !== 0) {
          return null;
        }
        return this
          .fetchManifestFromCache('staged')
          .then(manifest => {
            if (!manifest) {
              return null;
            }
            return this.updateWorker(manifest);
          });
      });
  }

  private workerFromActiveOrFreshManifest(): Promise<VersionWorker> {
    let manifestLoadedFromNetwork = false;
    return this
      .fetchManifestFromCache('active')
      .then(manifest => {
        // If the manifest already exists, just use it.
        if (manifest) {
          return manifest;
        }
        // Load the manifest from the network.
        manifestLoadedFromNetwork = true;
        return this.fetchManifestFromNetwork();
      })
      .then(manifest => {
        if (!manifest) {
          throw new Error("Service worker unable to start: no manifest file available");
        }
        return manifest;
      })
      .then(manifest => this.manifestToWorker(manifest))
      .then(worker => {
        if (!manifestLoadedFromNetwork) {
          return worker;
        }
        return this
          .setManifestInCache(worker.manifest, 'active')
          .then(() => worker);
      });
  }

  private manifestToWorker(manifest: Manifest, existing: VersionWorker = null): Promise<VersionWorker> {
    const plugins: Plugin<any>[] = [];
    const worker = new VersionWorkerImpl(this.scope, manifest, this.adapter, new ScopedCache(this.cache, `manifest:${manifest._hash}:`), this.fetcher, plugins);
    plugins.push(...this.plugins.map(factory => factory(worker)));
    return worker
      .setup(existing as VersionWorkerImpl)
      .toPromise()
      .then(() => worker);
  }

  private fetchManifestFromCache(cache: string): Promise<Manifest> {
    return this
      .scopedCache
      .load(cache, this.manifestUrl)
      .toPromise()
      .then(resp => this.manifestFromResponse(resp));
  }

  private fetchManifestFromNetwork(): Promise<Manifest> {
    return this
      .fetcher
      .refresh(this.manifestUrl)
      .toPromise()
      .then(resp => this.manifestFromResponse(resp));
  }

  private manifestFromResponse(resp: Response): Promise<Manifest> {
    if (!resp || resp.status !== 200) {
      return null;
    }
    return resp.text().then(body => parseManifest(body));
  }

  private setManifestInCache(manifest: Manifest, cache: string): Promise<void> {
    return this.scopedCache.store(cache, this.manifestUrl, this.adapter.newResponse(manifest._json)).toPromise();
  }

  private deleteManifestInCache(cache: string): Promise<void> {
    return this.scopedCache.invalidate(cache, this.manifestUrl).toPromise();
  }

  private checkForUpdates(): Promise<boolean> {
    return Promise.all([
      this.fetchManifestFromNetwork(),
      this.fetchManifestFromCache('active')
    ]).then(manifests => {
      let [network, active] = manifests;
      if (!active || !network || network._json === active._json) {
        return false;
      }
      return this.manifestToWorker(active)
        .then(active => this.manifestToWorker(network, active))
        .then(() => this.setManifestInCache(network, 'staged'))
        .then(() => true);
    });
  }

  private updateWorker(staged: Manifest): Promise<VersionWorker> {
    return Promise.all([
        this
          .fetchManifestFromCache('active')
          .then(manifest => manifest ? this.manifestToWorker(manifest) : null),
        this
          .manifestToWorker(staged)
      ])
      .then(results => {
        const [activeWorker, stagedWorker] = results;
        return this
          .setManifestInCache(staged, 'active')
          .then(() => this.deleteManifestInCache('staged'))
          .then(() => Observable
            .from((activeWorker as VersionWorkerImpl).cleanup())
            .concatMap(op => op())
            .ignoreElements()
            .toPromise()
          )
          .then(() => stagedWorker)
      });
  }

  private handleMessage(message: Object): Observable<Object> {
    if (!this.activeWorker) {
      return Observable.empty();
    }

    switch (message['cmd']) {
      case 'ping':
        return Observable.empty();
      case 'checkUpdate':
        return Observable.fromPromise(this.checkForUpdates());
      case 'log':
        return LOGGER.messages;
      default:
        return Observable
          .fromPromise(this.activeWorker)
          .switchMap(active => active
            ? (active as VersionWorkerImpl).message(message)
            : Observable.empty<Operation>())
          .switchMap(op => op());
    }
  }
}
