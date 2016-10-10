declare var require, Buffer;

const stream = require('stream');
const Vinyl = require('vinyl');
const crypto = require('crypto');

export interface GulpAddStaticFileOptions {
  manifestKey?: string;
}

export function gulpGenerateManifest() {
  let readable = new stream.Readable({objectMode: true});
  readable._read = () => {
    readable.push(new Vinyl({
      cwd: '/',
      base: '/',
      path: '/ngsw-manifest.json',
      contents: new Buffer('{}'),
    }));
    readable.push(null);
  };
  return readable;
}

export function gulpAddStaticFiles(files: any, options?: GulpAddStaticFileOptions) {
  let manifestTransform = new stream.Transform({objectMode: true});
  let singleFile = true;

  manifestTransform._transform = (manifestFile, _, callback) => {
    if (!singleFile) {
      throw new Error('Only one manifest allowed.');
    }
    let manifest = JSON.parse(manifestFile.contents.toString('utf8'));
    let staticConfig = {
      urls: {}
    };
    let property = options.manifestKey || 'static';
    manifest[property] = property;

    files.on('data', file => {
      staticConfig.urls['/' + file.relative] = sha1(file.contents);
    });
    files.on('end', () => {
      manifestFile.contents = new Buffer(JSON.stringify(manifest, null, 2));
      callback(null, manifestFile);
    });

    singleFile = false;
  };

  return manifestTransform;
}

function sha1(buffer): string {
  const hash = crypto.createHash('sha1');
  hash.update(buffer);
  return hash.digest('hex');
}