/**
 * A parsed AppCache manifest, including interpretation of the service worker
 * specific instructions inside the manifest comments.
 */
export class SWManifest {
  bundles: Object = {};
  
  toString(): string {
    var bundles = [];
    for (var bundle in this.bundles) {
      bundles.push(this.bundles[bundle].toString());
    }
    return bundles.join('\n');
  }
}

/**
 * A single bundle from the manifest.
 */
export class SWManifestBundle {
  files: SWManifestFile[] = [];
  version: string = '0';
  routes: Object = {};
  constructor(public name: string) {}
  
  toString(): string {
    var routes: string = this._serializeRoutes();
    return `bundle ${this.name} {
  version: ${this.version},
  files:
    ${this.files.join('\n    ')}
  routes:
    ${routes}
}`;
  }

  get cache(): string {
    return `bundle.${this.name}.${this.version}`;
  }

  _serializeRoutes(): string {
    var routes = [];
    for (var route in this.routes) {
      routes.push(`${route}: ${this.routes[route]}`);
    }
    return routes.join('\n    ');
  }
}

export class SWManifestFile {
  version: string = null;
  
  constructor(public url: string) {}
}

export class SWManifestDelta {
  unchanged: SWManifestFile[] = [];
  
  constructor(public oldManifest: SWManifest) {}
}

/**
 * Reads AppCache manifests and parses them into a `SWManifest` structure.
 */
export class AppCacheManifestReader {
  swManifest: SWManifest = new SWManifest();
  bundle: SWManifestBundle = new SWManifestBundle('default');

  lastFileVersion: string = null;

  read(acManifest: string): void {
    acManifest
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line !== 'CACHE MANIFEST' && line !== '')
      .forEach((line) => {
        if (line.indexOf('#') === 0) {
          this._parseComment(line);
        } else if (line.length > 0) {
          var file = new SWManifestFile(line);
          if (this.lastFileVersion !== null) {
            file.version = this.lastFileVersion;
            console.log(`version of ${line} is ${file.version}`);
            this.lastFileVersion = null;
          }
          this.bundle.files.push(file);
        }
      });
    if (this.bundle.files.length > 0) {
      this.swManifest.bundles[this.bundle.name] = this.bundle;
    }
  }

  _parseComment(line: string) {
    var comment = line.substring(1).trim();
    if (comment.indexOf('sw.') !== 0) {
      return;
    }
    comment = comment.substring(3);
    var colon = comment.indexOf(':');
    if (colon === -1) {
      return;
    }
    var key = comment.substring(0, colon).trim();
    var value = comment.substring(colon + 1).trim();
    switch (key) {
      case 'bundle':
        if (this.bundle.files.length > 0) {
          this.swManifest.bundles[this.bundle.name] = this.bundle;
        }
        this.bundle = new SWManifestBundle(value);
      case 'version':
        this.bundle.version = value;
      case 'route':
        this._parseRoute(value);
      case 'file.hash':
        this.lastFileVersion = value;
    }
  }

  _parseRoute(route: string) {
    var space = route.indexOf(' ');
    if (space === -1) {
      return;
    }
    var from = route.substring(0, space).trim();
    var serve = route.substring(space + 1).trim();
    this.bundle.routes[from] = serve;
  }
}