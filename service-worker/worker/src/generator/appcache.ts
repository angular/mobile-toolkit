import {Manifest, Group, Route, Routing, SourceResolver, GulpSourceResolver, ManifestWriter} from './generator';
import {SwManifest} from '../manifest';
declare var require;
let stream = require('stream');
let SHA1 = require('jshashes').SHA1;
let File = require('vinyl');

declare class Promise<T> {
  constructor(fn: Function);
  static all<T>(promises: Promise<T>[]): Promise<T[]>;
  then<V>(fn: (T) => V | Promise<V>, errFn?: any): Promise<V>;
}

declare class Buffer {
  constructor(data: string);
}

export function gulpGenAppCacheManifest(manifest: Manifest, base?: string): any {
  let out = new stream.Readable({read: function() {}, objectMode: true});
  (new AppCacheManifestWriter(new GulpSourceResolver()))
    .generate(manifest, base)
    .then(contents => {
      out.push(new File({
        cwd: '/',
        base: '/',
        path: '/manifest.appcache',
        contents: new Buffer(contents)
      }));
      out.push(null);
    }, err => console.error(err));
  return out;
}

export class AppCacheManifestWriter extends ManifestWriter {
  
  generate(manifest: Manifest, base?: string): Promise<string> {
    return this
      .process(manifest, base)
      .then((mfest: SwManifest) => {
        console.log(mfest);
        let cacheMap = {};
        let fallbackMap = {};
        let index = (mfest.routing || <any>{}).index || '/index.html';
        Object
          .keys(mfest.group)
          .map(name => mfest.group[name])
          .forEach(group => {
            Object
              .keys(group.url)
              .forEach(url => {
                let entry = group.url[url];
                cacheMap[url] = entry.hash || group.version;
              });
          });
        Object
          .keys((mfest.routing || <any>{}).route || {})
          .forEach(url => {
            let route = mfest.routing.route[url];
            if (route.prefix) {
              fallbackMap[url] = true;
            } else {
              cacheMap[url] = `server serves ${index}`;
            }
          });
        return this._toAppCache(cacheMap, fallbackMap, index);
      });
  }
  
  _toAppCache(cache: Object, fallback: Object, index: string): string {
    let lines = [
      'CACHE MANIFEST',
      'CACHE:'
    ];
    
    let cacheKeys = Object.keys(cache);
    cacheKeys.sort();
    cacheKeys.forEach(key => {
      lines.push(`# hash: ${cache[key]}`);
      lines.push(key);
    });
    
    lines.push('NETWORK:');
    lines.push('*');
    
    let fallbackKeys = Object.keys(fallback);
    fallbackKeys.sort();
    
    if (fallbackKeys.length) {
      lines.push('FALLBACK:');
      lines.push('*');

      fallbackKeys.forEach(key => {
        lines.push(`${key} ${index}`);
      });
    }
    return lines.join('\n');
  }
}