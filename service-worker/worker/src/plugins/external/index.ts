import {
  FetchInstruction,
  Operation,
  Plugin,
  PluginFactory,
  VersionWorker,
  VersionWorkerImpl,
  cacheFromNetworkOp,
  fetchFromCacheInstruction,
} from '@angular/service-worker/worker';

interface UrlConfig {
  url: string;
}

interface ExternalManifest {
  urls: UrlConfig[];
}

export interface ExternalContentCacheOptions {
  manifestKey?: string;
}

export function ExternalContentCache(options?: ExternalContentCacheOptions): PluginFactory<ExternalPlugin> {
  const manifestKey = (options && options.manifestKey) || 'external';
  return (worker: VersionWorker) => new ExternalPlugin(worker as VersionWorkerImpl, manifestKey);
}

export class ExternalPlugin implements Plugin<ExternalPlugin> {
  private cacheKey: string;

  constructor(public worker: VersionWorkerImpl, public key: string) {
    this.cacheKey = key === 'external' ? key : `external:${key}`;
  }

  private get externalManifest(): ExternalManifest {
    return this.worker.manifest[this.key];
  }

  setup(operations: Operation[]) {
    if (!this.externalManifest || !this.externalManifest.urls) {
      return;
    }
    operations.push(...this
      .externalManifest
      .urls
      .map(url => cacheFromNetworkOp(this.worker, url.url, this.cacheKey)));
  }

  fetch(req: Request): FetchInstruction {
    return fetchFromCacheInstruction(this.worker, req, this.cacheKey);
  }
}
