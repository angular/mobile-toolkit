import {Observable} from 'rxjs/Observable';

export class NgSwEvents {
  install: Observable<InstallEvent>;
  activate: Observable<ActivateEvent>;
  fetch: Observable<FetchEvent>;
  message: Observable<MessageEvent>;
  push: Observable<PushEvent>;

  constructor(scope: ServiceWorkerGlobalScope) {
    var req: FetchEvent;

    this.install = Observable.fromEvent<InstallEvent>(<any>scope, 'install');
    this.activate = Observable.fromEvent<ActivateEvent>(<any>scope, 'activate');
    this.fetch = Observable.fromEvent<FetchEvent>(<any>scope, 'fetch');
    this.message = Observable.fromEvent<MessageEvent>(<any>scope, 'message');
    this.push = Observable.fromEvent<PushEvent>(<any>scope, 'push');
  }
}
