import {Observable} from 'rxjs/Rx';

import {Manifest, ManifestEntry, ManifestParser, ManifestDelta, GroupDelta, ManifestGroup} from './manifest';
import {CacheManager} from './cache';
import {Fetch} from './fetch';
import {doAsync} from './operator';

let EMPTY_GROUP = new ManifestGroup();

interface SetupInstruction {
  execute(cache: CacheManager, fetch: Fetch): Observable<any>;
}

class FetchFromCacheInstruction implements SetupInstruction {
  
  constructor(private url: string, private fromCache: string, private toCache: string) {}
  
  execute(cache: CacheManager, fetch: Fetch): Observable<any> {
    return cache
      .load(this.fromCache, this.url)
      .flatMap(resp => cache.store(this.toCache, this.url, resp));
  }
}

class FetchFromNetworkInstruction implements SetupInstruction {
 
  constructor(private url: string, private toCache: string) {}
  
  execute(cache: CacheManager, fetch: Fetch): Observable<any> {
    return fetch
      .refresh(this.url)
      .flatMap(resp => cache.store(this.toCache, this.url, resp));
  }
}

function _keys(...objs: Object[]): string[] {
  let keys = {};
  objs.forEach(obj => Object
    .keys(obj)
    .forEach(key => keys[key] = true));
  return Object.keys(keys);
}

function _groupOrEmpty(manifest: Manifest, name: string): ManifestGroup {
  if (!manifest.group.hasOwnProperty(name)) {
    return EMPTY_GROUP
  }
  return manifest.group[name];
}

interface DiffArrayResult {
  added: string[];
  removed: string[];
}

function _diffArray(prev: string[], curr: string[]): DiffArrayResult {
  return <DiffArrayResult>{
    added: curr.filter(value => prev.indexOf(value) == -1),
    removed: prev.filter(value => curr.indexOf(value) == -1)
  };
}

function _diffGroups(prev: ManifestGroup, curr: ManifestGroup): GroupDelta {
  let cacheDiff = _diffArray(_keys(prev.cache), _keys(curr.cache));
  let networkDiff = _diffArray(_keys(prev.network), _keys(curr.network));
  let fallbackDiff = _diffArray(_keys(prev.fallback), _keys(curr.fallback));
  return <GroupDelta> {
    cacheAdded: cacheDiff.added,
    cacheRemoved: cacheDiff.removed,
    networkAdded: networkDiff.added,
    networkRemoved: networkDiff.removed,
    fallbackAdded: fallbackDiff.added,
    fallbackRemoved: fallbackDiff.removed
  };
}

export function diffManifests(obs: Observable<string[]>): Observable<any> {
  let parser = new ManifestParser();
  return obs
    .map(manifests => {
      let [liveManifestData, cachedManifestData] = manifests;
      let delta = new ManifestDelta(liveManifestData);
      let current = parser.parse(liveManifestData);
      delta.current = current;
      // Fast path for identical manifests.
      if (cachedManifestData && cachedManifestData == liveManifestData) {
        delta.changed = false;
        return delta;
      }
      delta.changed = true;

      let previous = parser.parse(cachedManifestData);
      delta.previous = previous;
      
      let groups = _keys(current.group, previous.group);
      groups.forEach(name => {
        let prevGroup = _groupOrEmpty(previous, name);
        let currGroup = _groupOrEmpty(current, name);
        delta.delta[name] = _diffGroups(prevGroup, currGroup);
      });
      return delta;
    });
}

export function cacheFor(group: ManifestGroup): string {
  return `${group.name}:${group.version}`;
}

function _presentAndEqual(prop: string, a: Object, b: Object): boolean {
  return a.hasOwnProperty(prop) && b.hasOwnProperty(prop) && a[prop] == b[prop];
}

function _entryHasNotChanged(previous: ManifestEntry, current: ManifestEntry): boolean {
  let sameHash = _presentAndEqual('hash', previous.metadata, current.metadata);
  let sameVersion = _presentAndEqual('version', previous.group.metadata, current.group.metadata);
  return sameHash || sameVersion;
}

export function buildCaches(cache: CacheManager, fetch: Fetch): any {
  // Building caches is a side-effect, so use doAsync.
  return ((obs: Observable<ManifestDelta>): Observable<ManifestDelta> => obs
    .let<ManifestDelta>(doAsync((delta: ManifestDelta) => Observable
      .from(Object.keys(delta.current.group))
      .map((key: string) => delta.current.group[key])
      .flatMap<any>((group: ManifestGroup) => {
        // Process groups individually, in parallel.
        // Check whether this specific group has an entry in the previous manifest.
        let prevGroup: ManifestGroup = EMPTY_GROUP;
        if (delta.changed && delta.previous.group.hasOwnProperty(group.name)) {
          prevGroup = delta.previous.group[group.name];
        }
        return Observable
          .from(Object.keys(group.cache))
          .map((key: string) => group.cache[key])
          .flatMap<SetupInstruction>(entry => {
            // Default is to fetch from the network.
            let action: SetupInstruction = new FetchFromNetworkInstruction(entry.url, cacheFor(group));
            // Check whether the entry was in the previous cache.
            if (prevGroup.cache.hasOwnProperty(entry.url)) {
              // It was, see if it's valid to use (no change).
              let prevEntry: ManifestEntry = prevGroup.cache[entry.url];
              if (_entryHasNotChanged(prevEntry, entry)) {
                // This entry hasn't changed - can use the previous cached value.
                action = new FetchFromCacheInstruction(entry.url, cacheFor(prevGroup), cacheFor(group));
              }
            }
            // Return instructions, which will be flatMap'd and executed.
            return Observable.of<SetupInstruction>(action);
          })
        .flatMap<any>(action => action.execute(cache, fetch));
      })
    ))
  );
};