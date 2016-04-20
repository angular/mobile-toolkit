import 'reflect-metadata';
import {Injectable, Injector, provide} from 'angular2/src/core/di';
import {SW_PROVIDERS, WorkerScope, WorkerAdapter} from './index';
import {ServiceWorker} from './worker';
import './rxjs';


//importScripts('worker.version.js');

declare var global;

@Injectable()
class BrowserAdapter extends WorkerAdapter {
  newRequest(req: string | Request, init?: Object): Request {
    return new Request(req, init);
  }
  
  newResponse(body: string | Blob): Response {
    return new Response(body);
  }
}

Injector.resolveAndCreate([
  SW_PROVIDERS,
  provide(WorkerAdapter, {useClass: BrowserAdapter}),
  provide(WorkerScope, {useValue: (typeof self !== 'undefined') ? self : global})
]).get(ServiceWorker);