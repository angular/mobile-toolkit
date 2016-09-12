import {Observable} from 'rxjs/Observable';

import {NgSwAdapter} from './adapter';

export class NgSwCache {
  constructor(private caches: CacheStorage, private adapter: NgSwAdapter) {}

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
