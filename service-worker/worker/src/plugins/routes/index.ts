import {
  rewriteUrlInstruction,
  FetchInstruction,
  Operation,
  Plugin,
  PluginFactory,
  VersionWorker
} from '@angular/service-worker/worker';

interface RouteMap {
  [url: string]: RouteConfig;
}

interface RouteConfig {
  prefix?: boolean;
}

interface RouteRedirectionManifest {
  index: string;
  routes?: RouteMap;
}

export function RouteRedirection(): PluginFactory<RouteRedirectionImpl> {
  return (worker: VersionWorker) => new RouteRedirectionImpl(worker);
}

export class RouteRedirectionImpl implements Plugin<RouteRedirectionImpl> {
  constructor(public worker: VersionWorker) {}

  private get routeManifest(): RouteRedirectionManifest {
    return this.worker.manifest['routing'] as RouteRedirectionManifest;
  }

  setup(operations: Operation[]): void {
    // No setup needed.
  }

  fetch(req: Request, ops: FetchInstruction[]): void {
    const manifest = this.routeManifest;
    if (!manifest || !manifest.routes) {
      return;
    }
    if (req.url === '/') {
      // TODO(alxhub): configurable base url
      ops.unshift(rewriteUrlInstruction(this.worker, req, manifest.index));
    }
    const matchesRoutingTable = Object.keys(manifest.routes).some(route => {
      const config = manifest.routes[route];
      return config.prefix
        ? req.url.indexOf(route) === 0
        : req.url === route;
    });
    if (matchesRoutingTable) {
      ops.unshift(rewriteUrlInstruction(this.worker, req, manifest.index));
    }
  }
}
