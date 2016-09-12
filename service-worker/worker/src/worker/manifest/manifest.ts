import {stringStartsWith} from './builtins';
import {SHA1} from 'jshashes';

function _mergeKeys(...objs: Object[]): string[] {
  let keys = {};
  objs
    .forEach(obj => Object
    .keys(obj)
    .forEach(key => keys[key] = true));
  return Object.keys(keys);
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

function _groupOrEmpty(manifest: SwManifest, name: string): CacheGroup {
  if (!manifest.group.hasOwnProperty(name)) {
    return EMPTY_CACHE_GROUP;
  }
  return manifest.group[name];
}

export var EMPTY_CACHE_GROUP = <CacheGroup>{
  url: <CacheEntryMap>{}
}

export interface SwManifest {
  dev?: boolean;
  group: CacheGroupMap;
  routing?: Routing;
  push?: Push;
}

export interface Push {
  showNotifications?: boolean;
  backgroundOnly?: boolean;
}

export interface CacheGroupMap {
  [name: string]: CacheGroup;
}

export interface CacheGroup {
  name: string;
  url: CacheEntryMap;
  version?: string
}

export interface CacheEntryMap {
  [url: string]: CacheEntry;
}

export interface CacheEntry {
  url: string;
  group: CacheGroup;

  hash?: string;
}

export interface Routing {
  index: string;
  route?: RouteMap;
}

export interface RouteMap {
  [url: string]: Route;
}

export interface Route {
  url: string;
  prefix?: boolean;
}

export class ManifestDelta {
  current: SwManifest;
  currentStr: string;
  previous: SwManifest;
  changed: boolean = true;
  delta: CacheGroupDeltaMap = {};
}

export interface CacheGroupDeltaMap {
  [url: string]: CacheGroupDelta;
}

export class CacheGroupDelta {
  added: string[] = [];
  removed: string[] = [];
}
