declare var require, Buffer;
const crypto = require('crypto');

/**
 * Webpack plugin that generates a basic Angular service worker manifest.
 */
export class AngularServiceWorkerPlugin {

  constructor(public manifestFile = 'ngsw-manifest.json', public manifestKey = 'static') {}

  apply(compiler) {
    // Determine the URL prefix under which all files will be served.
    let publicPrefix = compiler.options.output.publicPath || '';
    compiler.plugin('emit', (compilation, callback) => {
      // Manifest into which assets to be fetched will be recorded. This will either
      // be read from the existing template or created fresh.
      let manifest: any = {};

      // Look for an existing manifest. If there is one, parse it.
      try {
        if (compilation.assets.hasOwnProperty(this.manifestFile)) {
          manifest = JSON.parse(compilation.assets[this.manifestFile].source().toString());
        }
      } catch (err) {
        throw new Error(`Error reading existing service worker manifest: ${err}`);
      }

      // Throw if the manifest already has this particular key.
      if (manifest.hasOwnProperty(this.manifestKey) &&
        !manifest[this.manifestKey].hasOwnProperty('_generatedFromWebpack')) {
          throw new Error(`Manifest already contains key: ${this.manifestKey}`);
      }

      // Map of urls to hashes.
      let urls = {};
      manifest[this.manifestKey] = {urls, _generatedFromWebpack: true};
      // Go through every asset in the compilation and include it in the manifest,
      // computing a hash for proper versioning.
      Object
        .keys(compilation.assets)
        .filter(key => key !== this.manifestFile)
        .forEach(key => {
          let url = `${publicPrefix}/${key}`;
          urls[url] = sha1(compilation.assets[key].source());
        });
      
      // Serialize the manifest to a buffer, and include (or overwrite) it in the assets.
      let serialized = new Buffer(JSON.stringify(manifest, null, 2));
      compilation.assets[this.manifestFile] = {
        source: () => serialized,
        size: () => serialized.length,
      };
      
      callback();
    });
  }
}

function sha1(buffer: any): string {
  let hash = crypto.createHash('sha1');
  hash.update(buffer);
  return hash.digest('hex');
}
