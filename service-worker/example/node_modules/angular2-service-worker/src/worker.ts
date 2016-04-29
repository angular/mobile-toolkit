import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Events, InstallEvent, FetchEvent, WorkerAdapter} from './context';
import {Manifest, ManifestEntry, ManifestGroup, ManifestParser, ManifestDelta} from './manifest';
import {Fetch} from './fetch';
import {CacheManager} from './cache';
import {diffManifests, buildCaches, cacheFor} from './setup';

import {extractBody, doAsync, concatLet} from './operator';

export const MANIFEST_URL = '/manifest.appcache';
export const CACHE_ACTIVE = 'ngsw.active';
export const CACHE_INSTALLING = 'ngsw.installing';

enum ManifestSource {
  NETWORK,
  INSTALLING,
  ACTIVE
}

export interface FetchInstruction {
  execute(sw: ServiceWorker): Observable<Response>;
}

export class FetchFromCacheInstruction implements FetchInstruction {
  constructor(private cache: string, private request: Request) {}
  
  execute(sw: ServiceWorker): Observable<Response> {
    return sw.cache.load(this.cache, this.request);
  }
}

export class FetchFromNetworkInstruction implements FetchInstruction {
  constructor(private request: Request, private useHttpCache: boolean = true) {}
  
  execute(sw: ServiceWorker): Observable<Response> {
    if (this.useHttpCache) {
      return sw.fetch.request(this.request);
    }
    return sw.fetch.refresh(this.request);
  }
}

export class FallbackInstruction implements FetchInstruction {
  constructor(private request: Request) {}
  
  execute(sw: ServiceWorker): Observable<Response> {
    throw 'Fallback not yet implemented.';
  }
}

function _cacheInstruction(request: Request, group: ManifestGroup): FetchInstruction {
  return new FetchFromCacheInstruction(cacheFor(group), request);
}

function _devMode(request: Request): any {
  return (obs: Observable<Manifest>) => {
    return obs
      .flatMap(manifest => {
        if (!manifest.metadata.hasOwnProperty('dev') || !manifest.metadata['dev']) {
          return Observable.empty();
        }
        return Observable.of(new FetchFromNetworkInstruction(request))
      });
  };
}

function _handleRequest(request: Request): any {
  return (obs: Observable<Manifest>) => {
    return obs
      .flatMap(manifest => {
        let groups: Observable<ManifestGroup> = Observable
          .from<string>(Object.keys(manifest.group))
          .map(key => manifest.group[key])
          .cache();
        return Observable.concat(
          // Firstly, serve requests from cache, if present.
          groups.map(group => _cacheInstruction(request, group))
          // Then from network.
        );
      });
  }
}

@Injectable()
export class ServiceWorker {
  
  init: Observable<Manifest>;
  
  
  manifestReq: Request;
  
  constructor(
    private events: Events,
    public fetch: Fetch,
    public cache: CacheManager,
    public adapter: WorkerAdapter) {
    this.manifestReq = adapter.newRequest(MANIFEST_URL);
    this.init = this.normalInit();

    events.install.subscribe((ev: InstallEvent) => {
      this.init = this
        .checkDiffs(ManifestSource.NETWORK)
        .let(buildCaches(cache, fetch))
        .let(doAsync((delta: ManifestDelta) => cache.store(CACHE_INSTALLING, MANIFEST_URL, adapter.newResponse(delta.currentStr))))
        .map((delta: ManifestDelta) => delta.current)
        .cache();
      ev.waitUntil(this.init.toPromise());
    });
    
    events.activate.subscribe((ev: InstallEvent) => {
      this.init = this
        .checkDiffs(ManifestSource.INSTALLING)
        .let(doAsync((delta: ManifestDelta) => cache.store(CACHE_ACTIVE, MANIFEST_URL, adapter.newResponse(delta.currentStr))))
        .map((delta: ManifestDelta) => delta.current);
      ev.waitUntil(this.init.toPromise());
    });
    
    events.fetch.subscribe((ev: FetchEvent) => {
      let request = ev.request;
      ev.respondWith(this
        .init
        .let<FetchInstruction>(concatLet(_devMode(request), _handleRequest(request)))
        .concat(Observable.of(new FetchFromNetworkInstruction(request, true)))
        .concatMap(instruction => instruction.execute(this))
        .filter(resp => resp !== undefined)
        .first()
        .toPromise());
    });
  }
  
  normalInit(): Observable<Manifest> {
    return this
      .loadFreshManifest(ManifestSource.ACTIVE)
      .do(data => {
        if (!data) {
          throw 'Unable to load manifest!';
        }
      })
      .map(data => (new ManifestParser()).parse(data))
      .cache();
  }
  
  checkDiffs(source: ManifestSource): Observable<ManifestDelta> {
    return Observable
      .combineLatest(this.loadFreshManifest(source), this.loadCachedManifest())
      .let(diffManifests)
      .cache();
  }
  
  loadFreshManifest(source: ManifestSource): Observable<string> {
    let respSource: Observable<Response>;
    switch (source) {
      case ManifestSource.NETWORK:
        respSource = this
          .fetch
          .refresh(this.manifestReq);
        break;
      case ManifestSource.INSTALLING:
        respSource = this
          .cache
          .load(CACHE_INSTALLING, MANIFEST_URL);
        break;
      case ManifestSource.ACTIVE:
        respSource = this
          .cache
          .load(CACHE_ACTIVE, MANIFEST_URL);
        break;
      default:
        throw `Unknown diff source: ${source}`;
    }
    return respSource
      .do(resp => {
        if (resp && !resp.ok) {
          throw 'Failed to load fresh manifest.';
        }
      })
      .let(extractBody);
  }
  
  loadCachedManifest(): Observable<string> {
    return this
      .cache
      .load(CACHE_ACTIVE, MANIFEST_URL)
      .let(extractBody);
  }
  
  bodyFn(obs: Observable<Response>): Observable<string> {
    return obs.flatMap(resp =>
      resp != undefined ?
        resp.text() :
        Observable.from<string>(undefined));
  }
}
