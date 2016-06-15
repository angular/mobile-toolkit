import {WorkerScope, WorkerAdapter} from './index';
import {ServiceWorker} from './worker';
import {Events} from './context';
import {Fetch} from './fetch';
import {CacheManager} from './cache';

import './rxjs';

importScripts('ngsw-manifest.json.js');

declare var global;

class BrowserAdapter extends WorkerAdapter {
  newRequest(req: string | Request, init?: Object): Request {
    return new Request(req, init);
  }

  newResponse(body: string | Blob): Response {
    return new Response(body);
  }
}

// The scope is the global object.
let workerScope: WorkerScope = ((typeof self !== 'undefined') ? self : global) as WorkerScope;

// Use the browser adapter, of course.
let workerAdapter = new BrowserAdapter();

// Construct API wrappers using adapter and scope.
let events = new Events(workerScope);
let fetch = new Fetch(workerScope, workerAdapter);
let cacheManager = new CacheManager(workerScope, workerAdapter);

// Finally, construct the service worker. The side effects of the constructor will
// wire up events.
let worker = new ServiceWorker(events, fetch, cacheManager, workerAdapter);
