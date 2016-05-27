import {Observable} from 'rxjs/Observable';

import {WorkerScope, WorkerAdapter} from './context';

export class CacheManager {
  private caches: CacheStorage;

  constructor(scope: WorkerScope, private adapter: WorkerAdapter) {
    this.caches = scope.caches;
  }

  normalize(req: string | Request): Request {
    if (typeof req == 'string') {
      return this.adapter.newRequest(req);
    }
    return <Request>req;
  }

  load(cache: string, req: string | Request): Observable<Response> {
    return <Observable<Response>>Observable.defer(() => Observable.fromPromise(this
      .caches
      .open(cache)
      .then(cache => cache.match(this.normalize(req)))));
  }

  store(cache: string, req: string | Request, resp: Response): Observable<any> {
    return Observable.defer(() => Observable.fromPromise(this
      .caches
      .open(cache)
      .then(cache => cache.put(this.normalize(req), resp))));
  }

  remove(cache: string): Observable<any> {
    return Observable.defer(() => Observable.fromPromise(this
      .caches
      .delete(cache)));
  }
}