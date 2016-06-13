declare var require;
declare var module;

import {ManifestWriter, SourceResolver} from './generator';

const fse           = require('fs-extra');
const path          = require('path');
const MANIFEST_NAME = 'ngsw-manifest.json';
const WORKER_NAME   = 'worker.js';

export interface BroccoliPluginConstructor {
  new(inputNodes: any[], options?: any): BroccoliPluginConstructor;
  inputPaths: string[];
  outputPath: string;
}

export type BroccoliPlugin = BroccoliPluginConstructor;
export const BroccoliPlugin: BroccoliPluginConstructor = require('broccoli-caching-writer');

class BroccoliSourceResolver implements SourceResolver {
  constructor(public inputPaths:string[]) {}
  resolve(sources:string[]): Promise<Object> {
    return Promise.resolve(sources.reduce((prev, curr) => {
      prev[`/${path.relative(this.inputPaths[0], curr)}`] = fse.readFileSync(curr, 'utf-8');
      return prev;
    }, {}));
  }
}

export class ServiceWorkerPlugin extends BroccoliPlugin {
  constructor(inputNodes: any, options?: any) {
    super([inputNodes]);
  }

  build() {
    var sourceResolver = new BroccoliSourceResolver(this.inputPaths);
    var manifestWriter = new ManifestWriter(sourceResolver);
    // TODO(jeffbcross): plugin assumes single input path right now.
    return manifestWriter.generate({
      group: [{
        name: 'app',
        sources: this.inputPaths
          .map(p => recursiveReaddirSync(p))
          .reduce((prev, curr) => prev.concat(curr), [])
          .filter(p => {
            var relativePath = path.relative(this.inputPaths[0], p);
            // TODO(alxhub): better detection of worker script.
            return relativePath !== MANIFEST_NAME && relativePath !== 'vendor/@angular/service-worker/dist/worker.js';
          })
        }]
      })
      .then(manifest => {
        fse.writeFileSync(path.join(this.outputPath, MANIFEST_NAME), manifest);
        fse.writeFileSync(path.join(this.outputPath, `${MANIFEST_NAME}.js`), `/* ${manifest} */`);
      })
      .then(() => {
        fse.writeFileSync(path.resolve(this.outputPath, WORKER_NAME), fse.readFileSync(path.resolve(this.inputPaths[0], 'vendor/@angular/service-worker/dist/worker.js')));
      });
  }
}

function recursiveReaddirSync(src) {
  var files = [];
  fse.readdirSync(src).forEach(function(res) {
    var child = path.join(src, res);
    var stat = fse.statSync(child);
    if (stat.isFile()) {
      files.push(child);
    } else if (stat.isDirectory()) {
      files = files.concat(recursiveReaddirSync(child));
    }
  })
  return files;
}

