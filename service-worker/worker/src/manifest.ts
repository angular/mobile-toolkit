import {Injectable} from 'angular2/core';
import {stringStartsWith} from './builtins';
import {SHA1} from 'jshashes';

const SW_CONTROL_PREFIX = '# sw.';

enum ParserState {
  START,
  GLOBAL,
  CACHE,
  NETWORK,
  FALLBACK
}

export interface ManifestEntry {
  url: string;
  metadata: Object;
  group: ManifestGroup;
}

export interface ManifestEntryMap {
  [url: string]: ManifestEntry;
}

export interface FallbackManifestEntry extends ManifestEntry {
  fallbackTo: string;
}

export interface FallbackEntryMap {
  [url: string]: FallbackManifestEntry;
}

export class ManifestGroup {
  name: string;
  version: string;
  metadata: Object;
  cache: ManifestEntryMap = {};
  network: ManifestEntryMap = {};
  fallback: FallbackEntryMap = {};
}

export interface ManifestGroupMap {
  [name: string]: ManifestGroup;
}

export interface GroupDelta {
  cacheAdded: string[];
  cacheRemoved: string[];
  networkAdded: string[];
  networkRemoved: string[];
  fallbackAdded: string[];
  fallbackRemoved: string[];
}

export interface GroupDeltaMap {
  [name: string]: GroupDelta;
}

export class Manifest {
  metadata: Object = {};
  group: ManifestGroupMap = {}
}

export class ManifestDelta {
  
  constructor(public currentStr: string) {}
  
  changed: boolean;
  current: Manifest;
  previous: Manifest;
  delta: GroupDeltaMap = {};
}

function _entryVersion(entry: ManifestEntry): string {
  let version = entry.url;
  if (entry.metadata.hasOwnProperty('hash')) {
    version = `${version}:${entry['hash']}`;
  }
  return version;
}

function _computeAndSetVersion(group: ManifestGroup): void {
  let files: string[] = [];
  
  let allFilesHaveHash = Object
    .keys(group.cache)
    .map(key => group.cache[key].metadata.hasOwnProperty('hash'))
    .reduce((state, hasHash) => state && hasHash, true);
    
  // If the group has a version already set, use that.
  if (group.metadata.hasOwnProperty('version')) {
    group.version = group.metadata['version'];
    return;
  } else if (!allFilesHaveHash) {
    // Construct a random version.
    group.version = (new SHA1().hex(`${Math.random()}`));
    return;
  }
  
  files.push(...Object
    .keys(group.cache)
    .map(key => group.cache[key])
    .map(entry => _entryVersion(entry)));
    
  // Since the order of the array is determined by the enumeration
  // order of group.cache, sort the array to ensure consistent hashing.
  files.sort();
  
  group.version = (new SHA1()).hex(files.join('::'));
}

@Injectable()
export class ManifestParser {
  
  _processComment(manifest: Manifest, state: ParserState, entryMetadata: Object, groupMetadata: Object, line: string): Object {
    let assign = line.split(': ', 2);
    if (assign.length !== 2) {
      throw `Invalid SW comment directive: '${line}', missing value. Expected format 'sw.key: value'`;
    }
    
    let value = assign[1];
    switch (assign[0].toLowerCase()) {
      case 'dev':
        manifest.metadata['dev'] = value.toLowerCase() == 'true';
      case 'group':
        return {
          name: value
        };
      case 'group.version':
        groupMetadata['version'] = value;
        break;
      case 'hash':
        entryMetadata['hash'] = value;
        break;
      default:
        throw `Unrecognized SW comment directive: '${assign[0]}'`
    }
    return groupMetadata;
  }
  
  _parseFallbackEntry(entry: ManifestEntry): FallbackManifestEntry {
    var split = entry.url.split(' ', 2);
    if (split.length !== 2) {
      throw `Invalid FALLBACK entry: ${entry.url}`;
    }
    return <FallbackManifestEntry>{
      url: split[0],
      metadata: entry.metadata,
      fallbackTo: split[1],
      group: entry.group,
    };
  }
  
  _throwIfDefinedMetadata(metadata: Object): void {
    if (Object.keys(metadata).length !== 0) {
      throw 'Orphan metadata!';
    }
  }
  
  _group(manifest: Manifest, name: string, metadata: Object): ManifestGroup {
    if (!manifest.group.hasOwnProperty(name)) {
      let group = new ManifestGroup();
      group.name = name;
      group.metadata = metadata;
      manifest.group[name] = group;
    }
    return manifest.group[name];
  }
  
  parse(manifest: string): Manifest {
    let parsed = new Manifest();
    if (manifest === undefined) {
      return parsed;
    }
    let state = ParserState.START;
    let entryMetadata = {};
    let groupMetadata = {};
    manifest
      .split('\n')
      .map(line => line.trim())
      .forEach(line => {
        if (state == ParserState.START && line != 'CACHE MANIFEST') {
          throw `Expected "CACHE MANIFEST" magic token, got '${line}'`;
        }
        switch (line) {
          case 'CACHE MANIFEST':
            if (state != ParserState.START) {
              throw 'Unexpected "CACHE MANIFEST" magic token';
            }
            state = ParserState.GLOBAL;
            break;
          case 'CACHE:':
            state = ParserState.CACHE;
            this._throwIfDefinedMetadata(entryMetadata);
            entryMetadata = {};
            groupMetadata = {};
            break;
          case 'NETWORK:':
            state = ParserState.NETWORK;
            this._throwIfDefinedMetadata(entryMetadata);
            entryMetadata = {};
            groupMetadata = {};
            break;
          case 'FALLBACK:':
            state = ParserState.FALLBACK;
            this._throwIfDefinedMetadata(entryMetadata);
            entryMetadata = {};
            groupMetadata = {};
            break;
          case '':
            // Skip empty lines.
            break;
          default:
            if (stringStartsWith(line, SW_CONTROL_PREFIX)) {
              // groupMetadata is replaced because _processComment controls when a new group is started.
              groupMetadata = this._processComment(parsed, state, entryMetadata, groupMetadata, line.substring(SW_CONTROL_PREFIX.length).trim());
            } else if (stringStartsWith(line, '#')) {
              // This is a comment.
              break;
            } else {
              // Entry.
              let entry: ManifestEntry = {
                url: line,
                metadata: entryMetadata,
                group: null
              };
              entryMetadata = {};
              let groupName = groupMetadata.hasOwnProperty('name') ? groupMetadata['name'] : 'default';
              let group = this._group(parsed, groupName, groupMetadata);
              entry.group = group;
              switch (state) {
                case ParserState.CACHE:
                case ParserState.GLOBAL:
                  if (group.cache.hasOwnProperty(entry.url)) {
                    throw `Duplicate CACHE entry: ${entry.url}`;
                  }
                  group.cache[entry.url] = entry;
                  break;
                case ParserState.NETWORK:
                  if (group.network.hasOwnProperty(entry.url)) {
                    throw `Duplicate NETWORK entry: ${entry.url}`;
                  }
                  group.network[entry.url] = entry;
                  break;
                case ParserState.FALLBACK:
                  let fallbackEntry = this._parseFallbackEntry(entry);
                  if (group.cache.hasOwnProperty(fallbackEntry.url)) {
                    throw `Duplicate FALLBACK entry: ${fallbackEntry.url}`;
                  }
                  group.fallback[fallbackEntry.url] = fallbackEntry;
                  break;
              }
            }
          break;
        }
      });
    Object
      .keys(parsed.group)
      .map(name => parsed.group[name])
      .forEach(_computeAndSetVersion);
    parsed.group
    return parsed;
  }
}