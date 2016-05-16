import {ManifestDelta, SwManifest, CacheGroup, CacheGroupMap, CacheEntryMap} from './manifest';
import {SHA1} from 'jshashes';

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

function _groupOrEmpty(manifest: SwManifest, name: string): CacheGroup {
  if (!manifest.group.hasOwnProperty(name)) {
    return EMPTY_CACHE_GROUP;
  }
  return manifest.group[name];
}

export var EMPTY_CACHE_GROUP = <CacheGroup>{
  url: <CacheEntryMap>{}
}


function _mergeKeys(...objs: Object[]): string[] {
  let keys = {};
  objs
    .forEach(obj => Object
    .keys(obj)
    .forEach(key => keys[key] = true));
  return Object.keys(keys);
}

export function diffManifests(current: string, previous: string): ManifestDelta {
  let delta = new ManifestDelta();
  delta.current = parseManifest(current);
  delta.currentStr = current;
  if (!previous || previous === current) {
    delta.changed = false;
    return delta;
  }
  delta.previous = parseManifest(previous);
  
  let groups = _mergeKeys(
    delta.current.group,
    delta.previous.group
  );
  
  groups.forEach(name => {
    let prevGroup = _groupOrEmpty(delta.previous, name);
    let currGroup = _groupOrEmpty(delta.current, name);
    let prevKeys = Object.keys(prevGroup.url);
    let currKeys = Object.keys(currGroup.url);
    let diff = _diffArray(
      prevKeys,
      currKeys
    );
    delta.delta[name] = {
      added: diff.added,
      removed: diff.removed
    };
  });
  return delta;
}

export function parseManifest(data: string): SwManifest {
  let parsed = JSON.parse(data) as SwManifest;
  postProcessManifest(parsed);
  return parsed;
}

function postProcessManifest(manifest: SwManifest) {
  if (!manifest.routing) {
    manifest.routing = {
      index: '/index.html'
    };
  }
  if (!manifest.routing.index) {
    manifest.routing.index = '/index.html';
  }
  if (!manifest.routing.route) {
    manifest.routing.route = {};
  }
  Object
    .keys(manifest.group)
    .map(name => {
      let group = manifest.group[name];
      group.name = name;
      return group;
    })
    .forEach(postProcessGroup);
  Object
    .keys(manifest.routing.route)
    .forEach(url => {
      let route = manifest.routing.route[url];
      route.url = url;
    });
}

function postProcessGroup(group: CacheGroup) {
  let entries = Object
    .keys(group.url)
    .map(url => {
      let entry = group.url[url];
      entry.url = url;
      entry.group = group;
      return entry;
    });
  entries.sort();
  if (group.version === undefined) {
    entries.forEach(entry => {
      if (entry.hash === undefined) {
        throw 'Missing hash in manifest under ' + group.name + ' url: ' + entry.url;
      }
    });
    group.version = (new SHA1()).hex(entries
      .map(entry => entry.hash)
      .join(':'));
  }
}