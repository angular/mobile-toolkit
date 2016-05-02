import 'reflect-metadata';
import {Injectable, ReflectiveInjector, provide} from '@angular/core';
import {SW_PROVIDERS, WorkerScope, WorkerAdapter} from './index';
import {ServiceWorker} from './worker';
import './rxjs';

importScripts('ngsw-manifest.json');

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

ReflectiveInjector.resolveAndCreate([
  SW_PROVIDERS,
  provide(WorkerAdapter, {useClass: BrowserAdapter}),
  provide(WorkerScope, {useValue: (typeof self !== 'undefined') ? self : global})
]).get(ServiceWorker);