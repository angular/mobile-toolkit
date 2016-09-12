import {PluginFactory} from './api';
import {NgSwAdapter, NgSwCacheImpl, NgSwEvents, NgSwFetch} from './facade';
import {Driver} from './driver';

declare var global;

// The scope is the global object.
const scope: ServiceWorkerGlobalScope = ((typeof self !== 'undefined') ? self : global as any) as ServiceWorkerGlobalScope;

function copyRequest(req: Request): Object {
  let copy = {
    method: req.method,
    headers: req.headers,
    credentials: req.credentials,
    cache: req.cache,
    redirect: req.redirect,
    referrer: req.referrer,
  };
  if (req.mode.toString() !== 'navigate') {
    copy['mode'] = req.mode;
  }
  return copy;
}

class NgSwBrowserAdapter implements NgSwAdapter {
  newRequest(req: string | Request, init?: Object): Request {
    if (init && init instanceof Request) {
      init = copyRequest(init);
    }
    return new Request(req, init);
  }

  newResponse(body: string | Blob): Response {
    return new Response(body);
  }
}

export interface BootstrapOptions {
  manifestUrl?: string;
  plugins?: PluginFactory<any>[];
}

export function bootstrapServiceWorker(options?: BootstrapOptions): Driver {
  const manifestUrl = (options && options.manifestUrl) || '/ngsw-manifest.json';
  const plugins = (options && options.plugins) || [];

  const adapter = new NgSwBrowserAdapter();
  const cache = new NgSwCacheImpl(scope.caches, adapter);
  const events = new NgSwEvents(scope);
  const fetch = new NgSwFetch(scope, adapter);
  return new Driver(manifestUrl, plugins, scope, adapter, cache, events, fetch);
}
