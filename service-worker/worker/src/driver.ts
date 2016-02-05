import 'reflect-metadata';
import {Injectable} from 'angular2/src/core/di';

export abstract class ServiceWorker {
  abstract install(): Promise<void>;
  abstract activate(): Promise<void>;
  abstract fetch(req: Request): Promise<Response>;
}

export abstract class SWAdapter {
  get origin(): string {
    throw 'abstract';
  }
  
  abstract newRequest(url: string, options?: any): Request;
  
  abstract newResponse(text: string): Response;
  
  abstract fetch(req: Request): Promise<Response>;
  
  get caches(): CacheStorage {
    throw 'abstract';
  }
  
  worker: any;
}

@Injectable()
export class BrowserSWAdapter implements SWAdapter {
  constructor(public context: SWContext) {}
  
  get origin(): string {
    return this.context.location.origin;
  }
  
  newRequest(url: string, options?: any): Request {
    if (options !== undefined) {
      return new Request(url, options);
    }
    return new Request(url);
  }
  
  newResponse(text: string): Response {
    return new Response(text);
  }
  
  fetch(req: Request): Promise<Response> {
    return this.context.fetch(req);
  }
  
  get caches(): CacheStorage {
    return this.context.caches;
  }
  
  get worker(): any {
    return this.context.worker;
  }
  
  set worker(value: any) {
    this.context.worker = value;
  }
}

/**
 * Binding token for access to the ServiceWorker context.
 */
export abstract class SWContext {
  worker: any;
  addEventListener: typeof addEventListener;
  location: Location;
  fetch: typeof fetch;
  caches: CacheStorage;
}

const SW_EVENTS = {
	INSTALL: 'install',
	FETCH: 'fetch',
	ACTIVATE: 'activate'
}

@Injectable()
export class ServiceWorkerDriver {
  constructor(context: SWContext, worker: ServiceWorker) {
    context.addEventListener(SW_EVENTS.INSTALL,
        (ev: any) => ev.waitUntil(worker.install()));
    context.addEventListener(SW_EVENTS.ACTIVATE,
        (ev: any) => ev.waitUntil(worker.activate()));
    context.addEventListener(SW_EVENTS.FETCH,
        (ev: any) => ev.respondWith(worker.fetch(ev.request)));
  }
}