import {
  cacheFromNetworkOp,
  copyExistingOrFetchOp,
  deleteCacheOp,
  fetchFromCacheInstruction,
  FetchInstruction,
  Operation,
  Plugin,
  PluginFactory,
  VersionWorker
} from '@angular/service-worker/worker';

interface UrlToHashMap {
  [url: string]: string;
}

interface StaticManifest {
  urls: UrlToHashMap;
}

export interface StaticContentCacheOptions {
  manifestKey?: string;
}

export function StaticContentCache(options?: StaticContentCacheOptions): PluginFactory<StaticContentCacheImpl> {
  const manifestKey = (options && options.manifestKey) || 'static';
  return (worker: VersionWorker) => new StaticContentCacheImpl(worker, manifestKey);
}

export class StaticContentCacheImpl implements Plugin<StaticContentCacheImpl> {

  private cacheKey: string;

  constructor(public worker: VersionWorker, public key: string) {
    this.cacheKey = key === 'static' ? key : `static:${key}`;
  }

  private get staticManifest(): StaticManifest {
    return this.worker.manifest[this.key];
  }

  setup(operations: Operation[]): void {
    operations.push(...Object
      .keys(this.staticManifest.urls)
      .map(url => cacheFromNetworkOp(this.worker, url, this.cacheKey))
    );
  }

  update(operations: Operation[], previous: StaticContentCacheImpl): void {
    operations.push(...Object
      .keys(this.staticManifest.urls)
      .map(url => {
        const hash = this.staticManifest.urls[url];
        const previousHash = previous.staticManifest.urls[url];
        if (previousHash === hash) {
          return copyExistingOrFetchOp(previous.worker, this.worker, url, this.cacheKey);
        } else {
          return cacheFromNetworkOp(this.worker, url, this.cacheKey);
        }
      })
    );
  }

  fetch(req: Request, instructions: FetchInstruction[]): void {
    instructions.unshift(fetchFromCacheInstruction(this.worker, req, this.cacheKey));
  }

  cleanup(operations: Operation[]): void {
    operations.push(deleteCacheOp(this.worker, this.cacheKey));
  }
}