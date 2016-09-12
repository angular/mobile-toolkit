import {NgSwAdapter, NgSwCache, NgSwEvents, NgSwFetch, ServiceWorker} from '../index';

declare var global;

class NgSwBrowserAdapter implements NgSwAdapter {
  newRequest(req: string | Request, init?: Object): Request {
    return new Request(req, init);
  }

  newResponse(body: string | Blob): Response {
    return new Response(body);
  }
}

// The scope is the global object.
let workerScope: ServiceWorkerGlobalScope = ((typeof self !== 'undefined') ? self : global) as ServiceWorkerGlobalScope;

workerScope.importScripts('ngsw-manifest.json.js');

// Use the browser adapter, of course.
let workerAdapter = new NgSwBrowserAdapter();

// Construct API wrappers using adapter and scope.
let events = new NgSwEvents(workerScope);
let fetch = new NgSwFetch(workerScope, workerAdapter);
let cacheManager = new NgSwCache(workerScope.caches, workerAdapter);

// Finally, construct the service worker. The side effects of the constructor will
// wire up events.
let worker = new ServiceWorker(workerScope, events, fetch, cacheManager, workerAdapter);
