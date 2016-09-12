declare var require;

let fs = require('fs');
let SHA1 = require('jshashes').SHA1;

/**
 * Webpack plugin that generates a basic Angular service worker manifest.
 */
export default class AngularServiceWorkerPlugin {

  constructor(public manifestFile = 'ngsw-manifest.json') {}

  apply(compiler) {
    // Determine the destination directory and the URL prefix for the app.
    let outputPath = compiler.options.output.path;
    let publicPrefix = compiler.options.output.publicPath || '';
    if (!outputPath) {
      throw 'Must have output path set.';
    }

    // Used to compute version hashes.
    let sha1 = new SHA1();

    // Wait until webpack builds the whole output directory. Every file being
    // deployed to the server needs to be included in the manifest.
    compiler.plugin('done', stats => {
      // Manifest into which assets to be fetched will be recorded. This will either
      // be read from the existing template or created fresh.
      let manifest: any = {};

      // Look for an existing manifest. If there is one, parse it.
      let manifestPath = `${outputPath}/${this.manifestFile}`;
      if (fs.existsSync(manifestPath)) {
        manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')) || {};
      }

      if (!manifest.static) {
        manifest.static = {};
      }
      if (!manifest.static.urls) {
        manifest.static.urls = {};
      }

      // Go through every asset in the compilation and include it in the manifest,
      // computing a hash for proper versioning.
      Object
        .keys(stats.compilation.assets)
        .forEach(asset => {
          let url = `${publicPrefix}/${asset}`;
          // TODO(alxhub): use webpack cached version if available.
          manifest.static.urls[url] = sha1.hex(fs.readFileSync(`${outputPath}/${asset}`, 'utf8'));
        });
      
      // Write the merged manifest to disk.
      fs.writeFileSync(manifestPath, JSON.stringify(manifest));
    });
  }
}
