declare var require;
let SHA1 = require('jshashes').SHA1;
let stream = require('stream');
let File = require('vinyl');

let sha1 = new SHA1();

declare class Buffer {
  constructor(data: string);
}

export interface Routing {
  index: string;
  routes: Route[];
}

export interface Route {
  prefix: boolean;
  url: string;
}

export interface Manifest {
  routing?: Routing;
  group: Group[];
}

export interface Group {
  name: string;
  sources: any;
}

export interface SourceResolver {
  resolve(sources: any): Promise<Object>;
}

function _mergeObjects(fromObj, toObj) {
  Object.keys(fromObj).forEach(key => {
    if (typeof fromObj[key] === 'object' && fromObj[key] != null && toObj.hasOwnProperty(key)) {
      _mergeObjects(fromObj[key], toObj[key]);
    } else {
      toObj[key] = fromObj[key];
    }
  });
}

export function gulpGenManifest(manifest: Manifest, base?: string): any {
  let out = new stream.Readable({read: function() {}, objectMode: true});
  (new ManifestWriter(new GulpSourceResolver()))
    .generate(manifest, base)
    .then(contents => {
      out.push(new File({
        cwd: '/',
        base: '/',
        path: '/ngsw-manifest.json',
        contents: new Buffer(contents)
      }));
      out.push(new File({
        cwd: '/',
        base: '/',
        path: '/ngsw-manifest.json.js',
        contents: new Buffer(`/* ${contents} */`)
      }));
      out.push(null);
    }, err => console.error(err));
  return out;
}

export class ManifestWriter {

  constructor(private resolver: SourceResolver) {}

  processRoute(out: any, route: Route): void {
    if (!out.routing.hasOwnPropert('route')) {
      out.routing.route = {};
    }
    out.routing.route[route.url] = {
      prefix: route.prefix
    };
  }

  processGroup(out: any, group: Group): Promise<any> {
    if (!out.group.hasOwnProperty(group.name)) {
      out.group[group.name] = {
        url: {}
      };
    }
    let outGroup = out.group[group.name];
    return this
      .resolver
      .resolve(group.sources)
      .then(map => Object
        .keys(map)
        .forEach(path => {
          let hash = sha1.hex(map[path]);
          outGroup.url[path] = {
            'hash': hash
          };
        })
      );
  }

  process(manifest: Manifest, base?: string): Promise<string> {
    let baseObj = base ? JSON.parse(base) : '';
    let out = <any>{
      group: {},
      routing: {
        index: '/index.html'
      }
    };

    if (!!manifest.routing && !!manifest.routing.index) {
      out.routing.index = manifest.routing.index;
    }

    if (!!manifest.routing && !!manifest.routing.routes) {
      manifest.routing.routes.forEach(route => this.processRoute(out, route));
    }
    return Promise
      .all(manifest
        .group
        .map(group => this.processGroup(out, group)))
      .then(() => _mergeObjects(baseObj, out))
      .then(() => out);
  }

  generate(manifest: Manifest, base?: string): Promise<string> {
    return this
      .process(manifest, base)
      .then(out => JSON.stringify(out));
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
