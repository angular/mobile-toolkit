import {Observable} from 'rxjs/Observable';

/**
 * Not actually inherited or instantiated, but used to provide typed injection of the global
 * scope context.
 */
export abstract class WorkerScope {
  abstract fetch(url: string | Request);
  caches: CacheStorage;
  abstract addEventListener(type: string, listener: Function, useCapture?: boolean): void;
  abstract removeEventListener(type: string, listener: Function, last?: any): void;
}

export abstract class WorkerAdapter {
  abstract newRequest(req: string | Request, init?: Object): Request;
  abstract newResponse(body: string | Blob): Response;
}

export interface ExtendableEvent {
  waitUntil(promise: Promise<any>);
}

export interface InstallEvent extends ExtendableEvent {}

export interface ActivateEvent extends ExtendableEvent {}

export interface FetchEvent extends ExtendableEvent {
  request: Request;
  isReload: boolean;
  respondWith(response: Promise<Response>);
}

export class Events {
  install: Observable<InstallEvent>;
  activate: Observable<ActivateEvent>;
  fetch: Observable<FetchEvent>;
  message: Observable<MessageEvent>;

  constructor(scope: WorkerScope) {
    var req: FetchEvent;

    this.install = Observable.fromEvent<InstallEvent>(<any>scope, 'install');
    this.activate = Observable.fromEvent<ActivateEvent>(<any>scope, 'activate');
    this.fetch = Observable.fromEvent<FetchEvent>(<any>scope, 'fetch');
    this.message = Observable.fromEvent<MessageEvent>(<any>scope, 'message');
  }
}
