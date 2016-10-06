import {NgSwCache} from './facade';

import {Observable} from 'rxjs/Observable';

export class ScopedCache implements NgSwCache {

  constructor(private delegate: NgSwCache, private prefix: string) {}

  load(cache: string, req: string | Request) {
    return this.delegate.load(this.prefix + cache, req);
  }

  store(cache: string, req: string | Request, resp: Response): Observable<any> {
    return this.delegate.store(this.prefix + cache, req, resp);
  }

  remove(cache: string): Observable<any> {
    return this.delegate.remove(this.prefix + cache);
  }

  invalidate(cache: string, req: string | Request): Observable<void> {
    return this.delegate.invalidate(this.prefix + cache, req);
  }
}
