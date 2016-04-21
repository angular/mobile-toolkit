import {Observable} from 'rxjs/Observable';
import {Events, InstallEvent, FetchEvent, WorkerAdapter} from './context';
import {SwManifest, CacheEntry, CacheGroup, ManifestDelta, Route} from './manifest';
import {diffManifests, parseManifest} from './manifest-parser';
import {Fetch} from './fetch';
import {CacheManager} from './cache';
import {buildCaches, cleanupCaches, cacheFor} from './setup';

import {extractBody, doAsync, concatLet} from './operator';

export const MANIFEST_URL = '/ngsw-manifest.json';
export const CACHE_ACTIVE = 'ngsw.active';
export const CACHE_INSTALLING = 'ngsw.installing';

function diffManifestsObs(obs: Observable<string[]>): Observable<ManifestDelta> {
  return obs
    .map((contents: string[]) => diffManifests(contents[0], contents[1]));
}

export enum ManifestSource {
  NETWORK,
  INSTALLING,
  ACTIVE
}

export interface FetchInstruction {
  execute(sw: ServiceWorker): Observable<Response>;
  describe(): string;
}

export class FetchFromCacheInstruction implements FetchInstruction {
  constructor(private cache: string, private request: Request) {}

  execute(sw: ServiceWorker): Observable<Response> {
    return sw.cache.load(this.cache, this.request);
  }

  describe(): string {
    return `fetchFromCache(${this.cache}, ${this.request.url})`;
  }
}

export class FetchFromNetworkInstruction implements FetchInstruction {
  constructor(private request: Request, private useHttpCache: boolean = true, private timeout: number = null) {}

  execute(sw: ServiceWorker): Observable<Response> {
    var result: Observable<Response> = sw.fetch.request(this.request);
    if (!this.useHttpCache) {
      result = sw.fetch.refresh(this.request);
    }
    if (this.timeout !== null) {
      result = Observable
        .merge(
          result,
          Observable
            .timer(this.timeout, 1)
            .map(v => undefined)
        )
        .first();
    }
    return result;
  }

  describe(): string {
    return `fetchFromNetwork(${this.request.url})`;
  }
}

export class FallbackInstruction implements FetchInstruction {
  constructor(private request: Request, private manifest: SwManifest) {}

  execute(sw: ServiceWorker): Observable<Response> {
    return Observable
      // Look at all the fallback URLs in this group
      .from(Object.keys(this.manifest.routing.route))
      // Select the ones that match this request
      .filter((url: string) => {
        let route: Route = this.manifest.routing.route[url];
        if (route.prefix && this.request.url.indexOf(url) === 0) {
          return true;
        }
        return this.request.url === url;
      })
      // Grab the entry for it
      .map((url: string) => this.manifest.routing.route[url] as Route)
      // Craft a Request for the fallback destination
      .map(entry => sw.adapter.newRequest(this.request, {url: this.manifest.routing.index}))
      // Jump back into processing
      .concatMap(req => sw.handleFetch(req, {}));
  }

  describe(): string {
    return `fallback(${this.request.url})`;
  }
}

export class IndexInstruction implements FetchInstruction {
  constructor(private request: Request, private manifest: SwManifest) {}

  execute(sw: ServiceWorker): Observable<Response> {
    if (this.request.url !== '/' || !this.manifest.routing.index) {
      return Observable.empty<Response>();
    }
    return sw.handleFetch(sw.adapter.newRequest(this.request, {url: this.manifest.routing.index}), {});
  }

  describe(): string {
    return `index(${this.request.url}, ${this.manifest.routing.index})`;
  }
}

function _cacheInstruction(request: Request, group: CacheGroup): FetchInstruction {
  return new FetchFromCacheInstruction(cacheFor(group), request);
}

function _devMode(request: Request, manifest: SwManifest): any {
  if (!manifest.dev) {
    return Observable.empty();
  }
  return Observable.of(new FetchFromNetworkInstruction(request));
}

function _handleRequest(request: Request, options: Object): any {
  return (obs: Observable<SwManifest>) => {
    return obs
      .flatMap(manifest => {
        let groups: Observable<CacheGroup> = Observable
          .from<string>(Object.keys(manifest.group))
          .map(key => manifest.group[key])
          .cache();
        return Observable.concat(
          // Dev mode.
          _devMode(request, manifest),
          Observable.of(new IndexInstruction(request, manifest)),
          // Firstly, fall back if needed.
          Observable.of(new FallbackInstruction(request, manifest)),
          // Then serve requests from cache.
          groups.map(group => _cacheInstruction(request, group)),
          // Then from network.
          groups.map(group => new FetchFromNetworkInstruction(request, undefined, options['timeout']))
        );
      });
  }
}

export class ServiceWorker {
  _manifest: SwManifest = null;

  get init(): Observable<SwManifest> {
    if (this._manifest != null) {
      return Observable.of(this._manifest);
    }
    return this.normalInit();
  }

  manifestReq: Request;

  constructor(
    private events: Events,
    public fetch: Fetch,
    public cache: CacheManager,
    public adapter: WorkerAdapter) {
    this.manifestReq = adapter.newRequest(MANIFEST_URL);

    events.install.subscribe((ev: InstallEvent) => {
      console.log('ngsw: Event - install');
      let init = this
        .checkDiffs(ManifestSource.NETWORK)
        .let(buildCaches(cache, fetch))
        .let(doAsync((delta: ManifestDelta) => cache.store(CACHE_INSTALLING, MANIFEST_URL, adapter.newResponse(delta.currentStr))))
        .map((delta: ManifestDelta) => delta.current)
        .do(manifest => this._manifest = manifest)
        .do(() => console.log('ngsw: Event - install complete'))
      ev.waitUntil(init.toPromise());
    });

    events.activate.subscribe((ev: InstallEvent) => {
      console.log('ngsw: Event - activate');
      let init = this
        .checkDiffs(ManifestSource.INSTALLING)
        .let(cleanupCaches(cache))
        .let(doAsync((delta: ManifestDelta) => cache.store(CACHE_ACTIVE, MANIFEST_URL, adapter.newResponse(delta.currentStr))))
        .map((delta: ManifestDelta) => delta.current)
        .do(manifest => this._manifest = manifest);
      ev.waitUntil(init.toPromise());
    });

    events.fetch.subscribe((ev: FetchEvent) => {
      let request = ev.request;
      ev.respondWith(this.handleFetch(request, {}).toPromise());
    });
  }

  handleFetch(request: Request, options: Object): Observable<Response> {
    return this
      .init
      .let<FetchInstruction>(_handleRequest(request, options))
      .do(instruction => console.log(`ngsw: executing ${instruction.describe()}`))
      .concatMap(instruction => instruction.execute(this))
      .filter(resp => resp !== undefined)
      .first();
  }

  normalInit(): Observable<SwManifest> {
    return this
      .loadFreshManifest(ManifestSource.ACTIVE)
      .do(data => {
        if (!data) {
          throw 'Unable to load manifest!';
        }
      })
      .map(data => parseManifest(data))
      .do(manifest => this._manifest = manifest);
  }

  checkDiffs(source: ManifestSource): Observable<ManifestDelta> {
    return Observable
      .combineLatest(this.loadFreshManifest(source), this.loadCachedManifest())
      .let(diffManifestsObs)
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

