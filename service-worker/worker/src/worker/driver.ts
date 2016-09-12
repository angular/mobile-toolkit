import {VersionWorker, Plugin, PluginFactory, Operation} from './api';
import {VersionWorkerImpl} from './worker';
import {ScopedCache} from './cache';
import {NgSwAdapter, NgSwCache, NgSwEvents, NgSwFetch} from './facade';
import {readLog, Verbosity} from './logging';
import {Manifest, parseManifest} from './manifest';
import {doAsync} from './rxjs';

import {Observable} from 'rxjs/Observable';

export class Driver {

  cacheActive: ScopedCache;
  cacheInstalled: ScopedCache;

  active: Promise<VersionWorkerImpl> = Promise.resolve(null);
  installing: Promise<VersionWorkerImpl> = Promise.resolve(null);

  constructor(
      private manifestUrl: string,
      private plugins: PluginFactory<any>[],
      private scope: ServiceWorkerGlobalScope,
      private adapter: NgSwAdapter,
      private cache: NgSwCache,
      private events: NgSwEvents,
      public fetcher: NgSwFetch) {
    this.cacheActive = new ScopedCache(cache, 'meta:active:');
    this.cacheInstalled = new ScopedCache(cache, 'meta:installed:');
    this.active = this.maybeCreateWorker(this.fetchManifestFromCache(this.cacheActive));
    this.installing = this.maybeCreateWorker(this.fetchManifestFromCache(this.cacheInstalled));

    events.install.subscribe(event => {
      const worker = this.maybeCreateWorker(this.fetchManifestFromNetwork());
      this.installing = Promise
        .all([worker, this.active])
        .then(results => {
          const [worker, active] = results;
          const setup = worker
            .setup(active)
            .ignoreElements();
          return Observable
            .concat(
              setup,
              Observable.of(worker)
            )
            .let(doAsync((worker: VersionWorkerImpl) =>
                this.cacheInstalled.store('ngsw', this.manifestUrl, this.adapter.newResponse(worker.manifest._json))))
            .toPromise();
        });
      event.waitUntil(this.installing);
    });

    events.activate.subscribe(event => {
      this.active = this
        .active
        .then(worker => {
          const cleanupOps = [];
          if (worker) {
            cleanupOps.push(...worker.cleanup());
          }
          return Observable
            .from(cleanupOps)
            .concatMap(op => op())
            .ignoreElements()
            .concat(this.installing)
            .toPromise() as Promise<VersionWorkerImpl>;
        })
        .then(worker => {
          if (!worker) {
            throw 'Activate without a worker in installed state?';
          }
          return this.cacheActive.store('ngsw', this.manifestUrl, this.adapter.newResponse(worker.manifest._json))
            .toPromise()
            .then(() => worker);
        });
      event.waitUntil(this.active);
    });

    events.fetch.subscribe(event => {
      const result = this
        .active
        .then(worker => {
          if (worker === null) {
            return this
              .fetcher
              .request(event.request)
              .toPromise();
          }
          return worker
            .fetch(event.request)
            .toPromise();
        });
      event.respondWith(result);
    });


    events
      .message
      .filter(event =>
        event.ports.length === 1 &&
        event.data &&
        event.data.hasOwnProperty('$ngsw')
      )
      .do(event => console.log('GOT EVENT', event.data))
      .flatMap(event => {
        let respond: MessagePort = event.ports[0];
        return this
          .handleMessage(event.data)
          .do(resp => console.log('EVENT RESP', resp), err => console.log('ERROR', err), () => console.log('EVENT DONE'))
          .do(
            response => respond.postMessage(response),
            undefined,
            () => respond.postMessage(null)
          )
          .ignoreElements()
      })
      .subscribe();

    events
      .push
      .filter(event => !!event.data)
      .map(event => event.data.json())
      .subscribe(data => {
        this
          .active
          .then(worker => worker && worker.push(data));
      })
  }

  private fetchManifestFromNetwork(): Observable<Manifest> {
    return this
      .fetcher
      .refresh(this.manifestUrl)
      .map(v => v && v.status === 200 ? v : null)
      .switchMap(v => v ? v.text() : Observable.of(null))
      .map(v => v ? parseManifest(v) : null);
  }

  private fetchManifestFromCache(cache: NgSwCache): Observable<Manifest> {
    return cache
      .load('ngsw', this.manifestUrl)
      .switchMap(v => v ? v.text() : Observable.of(null))
      .map(v => v ? parseManifest(v) : null);
  }

  private fetchStartupManifest(): Observable<Manifest> {
    return Observable
      .concat(
        this.fetchManifestFromCache(this.cacheActive),
        this.fetchManifestFromNetwork()
      )
      .first();
  }

  private maybeCreateWorker(manifest: Observable<Manifest>): Promise<VersionWorkerImpl> {
    return manifest
      .map(manifest => {
        if (!manifest) {
          return null;
        }
        const cache = new ScopedCache(this.cache, `version:${manifest._hash}:`);
        const plugins = [];
        const worker = new VersionWorkerImpl(this.scope, manifest, this.adapter, cache, this.fetcher, plugins);
        plugins.push(...this
          .plugins
          .map(factory => factory(worker)));
        return worker;
      })
      .toPromise();
  }

  private handleMessage(message: Object): Observable<Object> {
    switch (message['cmd']) {
      case 'ping':
        return Observable.empty();
      case 'log':
        let level = Verbosity.DETAIL;
        return readLog(level);
      default:
        return Observable
          .fromPromise(this.active)
          .switchMap(active => active
            ? active.message(message)
            : Observable.empty<Operation>())
          .switchMap(op => op());
    }
  }
}
