declare var require;
let SHA1 = require('jshashes').SHA1;
let stream = require('stream');
let File = require('vinyl');

let sha1 = new SHA1();

declare class Promise<T> {
  constructor(fn: Function);
  static all<T>(promises: Promise<T>[]): Promise<T[]>;
  then<V>(fn: (T) => V | Promise<V>): Promise<V>;
}

declare class Buffer {
  constructor(data: string);
}

export interface Manifest {
  group: Group[];
}

export interface Routing {
  index: string;
  routes: string[];
}

export interface Group {
  name: string;
  sources: any;
  routing: Routing;
}

export interface SourceResolver {
  resolve(sources: any): Promise<Object>;
}

export function gulpGenManifest(manifest: Manifest): any {
  let out = new stream.Readable({read: function() {}, objectMode: true});
  (new ManifestWriter(new GulpSourceResolver()))
    .generate(manifest)
    .then(contents => {
      out.push(new File({
        cwd: '/',
        base: '/',
        path: '/manifest.appcache',
        contents: new Buffer(contents)
      }));
      out.push(null);
    });
  return out;
}

export class ManifestWriter {
  
  constructor(private resolver: SourceResolver) {}
  
  writeGroup(group: Group): Promise<string[]> {
    return this
      .resolver
      .resolve(group.sources)
      .then(map => {
        let lines: string[] = [];
        lines.push(`# sw.group: ${group.name}`);
        Object.keys(map).forEach(path => {
          let hash = sha1.hex(map[path]);
          lines.push(`# sw.hash: ${hash}`);
          lines.push(path);
        });
        return lines;
      });
  }
  
  generate(manifest: Manifest): Promise<string> {
    let lines: string[] = [
      'CACHE MANIFEST',
      'CACHE:'
    ];
    
    let linesPerGroup = Promise.all(
      manifest.group.map(group => this.writeGroup(group)));
    
    return linesPerGroup.then(groups => {
      groups.forEach(group => lines.push(...group));
    }).then(() => {
      lines.push(...[
        'NETWORK:',
        '*',
        ''
      ]);
      return lines.join('\n');
    });
  }
}

export class GulpSourceResolver implements SourceResolver {
  resolve(sources: any): Promise<Object> {
    return new Promise((resolve, reject) => {
      var map = {};
      sources.on('data', file => {
        map[`/${file.relative}`] = file.contents.toString();
      });
      sources.on('end', () => resolve(map));
    });
  }
}
