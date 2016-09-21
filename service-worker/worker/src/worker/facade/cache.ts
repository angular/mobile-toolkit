import {Observable} from 'rxjs/Observable';

import {NgSwAdapter} from './adapter';

export interface NgSwCache {

  load(cache: string, req: string | Request): Observable<Response>;
  store(cache: string, req: string | Request, resp: Response): Observable<any>;
  remove(cache: string): Observable<any>;
  invalidate(cache: string, req: string | Request): Observable<void>;
  list(cache: string): Observable<Request[]>;
}

export class NgSwCacheImpl implements NgSwCache {
  constructor(private caches: CacheStorage, private adapter: NgSwAdapter) {}

  private normalize(req: string | Request): Request {
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

  invalidate(cache: string, req: string | Request): Observable<void> {
    return Observable.defer(() => Observable.fromPromise(this
      .caches
      .open(cache)
      .then(cache => cache.delete(this.normalize(req)))));
  }

  remove(cache: string): Observable<any> {
    return Observable.defer(() => Observable.fromPromise(this
      .caches
      .delete(cache)));
  }

  list(cache: string): Observable<Request[]> {
    return Observable.defer(() => Observable.fromPromise(this
      .caches
      .open(cache)
      .then(cache => cache.keys())));
  }
}
