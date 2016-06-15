import {Observable} from 'rxjs/Observable';

import {SwManifest, CacheGroup, CacheEntry, ManifestDelta} from './manifest';
import {EMPTY_CACHE_GROUP} from './manifest-parser';
import {CacheManager} from './cache';
import {Fetch} from './fetch';
import {doAsync} from './operator';


interface SetupInstruction {
  execute(cache: CacheManager, fetch: Fetch): Observable<any>;
  describe(): string;
}

class FetchFromCacheInstruction implements SetupInstruction {
  
  constructor(private url: string, private fromCache: string, private toCache: string) {}
  
  execute(cache: CacheManager, fetch: Fetch): Observable<any> {
    return cache
      .load(this.fromCache, this.url)
      .flatMap(resp => cache.store(this.toCache, this.url, resp));
  }
  
  describe(): string {
    return `fetchFromCache(${this.url}, ${this.fromCache}, ${this.toCache})`;
  }
}

class FetchFromNetworkInstruction implements SetupInstruction {
 
  constructor(private url: string, private toCache: string) {}
  
  execute(cache: CacheManager, fetch: Fetch): Observable<any> {
    return fetch
      .refresh(this.url)
      .flatMap(resp => cache.store(this.toCache, this.url, resp));
  }
  
  describe(): string {
    return `fetchFromNetwork(${this.url}, ${this.toCache})`;
  }
}

function _keys(...objs: Object[]): string[] {
  let keys = {};
  objs.forEach(obj => Object
    .keys(obj)
    .forEach(key => keys[key] = true));
  return Object.keys(keys);
}

export function cacheFor(group: CacheGroup): string {
  return `${group.name}:${group.version}`;
}

function _presentAndEqual(a: string, b: string): boolean {
  return a && b && a === b;
}

function _entryHasNotChanged(previous: CacheEntry, current: CacheEntry): boolean {
  let sameHash = _presentAndEqual(previous.hash, current.hash);
  let sameVersion = _presentAndEqual(previous.group.version, current.group.version);
  return sameHash || sameVersion;
}

export function buildCaches(cache: CacheManager, fetch: Fetch): any {
  // Building caches is a side-effect, so use doAsync.
  return ((obs: Observable<ManifestDelta>): Observable<ManifestDelta> => obs
    .let<ManifestDelta>(doAsync((delta: ManifestDelta) => Observable
      .from(Object.keys(delta.current.group))
      .map((key: string) => delta.current.group[key])
      .mergeMap<any>((group: CacheGroup) => {
        // Process groups individually, in parallel.
        // Check whether this specific group has an entry in the previous manifest.
        let prevGroup: CacheGroup = EMPTY_CACHE_GROUP;
        if (delta.changed && delta.previous.group.hasOwnProperty(group.name)) {
          prevGroup = delta.previous.group[group.name];
        }
        return Observable
          .from(Object.keys(group.url))
          .map((key: string) => group.url[key])
          .mergeMap<SetupInstruction>(entry => {
            // Default is to fetch from the network.
            let action: SetupInstruction = new FetchFromNetworkInstruction(entry.url, cacheFor(group));
            // Check whether the entry was in the previous cache.
            if (prevGroup.url.hasOwnProperty(entry.url)) {
              // It was, see if it's valid to use (no change).
              let prevEntry: CacheEntry = prevGroup.url[entry.url];
              if (_entryHasNotChanged(prevEntry, entry)) {
                // This entry hasn't changed - can use the previous cached value.
                action = new FetchFromCacheInstruction(entry.url, cacheFor(prevGroup), cacheFor(group));
              }
            }
            // Return instructions, which will be mergeMap'd and executed.
            return Observable.of<SetupInstruction>(action);
          })
        .do(action => console.log('ngsw: setup', action.describe()))
        .mergeMap<any>(action => action.execute(cache, fetch));
      })
    ))
  );
};

export function cleanupCaches(cache: CacheManager): any {
  return ((obs: Observable<ManifestDelta>): Observable<ManifestDelta> => obs
    .let<ManifestDelta>(doAsync((delta: ManifestDelta) => !!delta.previous ? Observable
      .from(Object.keys(delta.previous.group))
      .mergeMap((name: string) => {
        let prevCache = cacheFor(delta.previous.group[name]);
        let currCache = '';
        if (delta.current.group.hasOwnProperty(name)) {
          currCache = cacheFor(delta.current.group[name]);
        }
        if (currCache != prevCache) {
          return cache.remove(prevCache);
        }
        return Observable.empty();
      })
      .ignoreElements()
    : Observable.empty())));
}
