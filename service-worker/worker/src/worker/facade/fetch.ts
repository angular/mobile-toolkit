import {Observable} from 'rxjs/Observable';
import {NgSwAdapter} from './adapter';
import {timeoutTo} from '../rxjs';

export class NgSwFetch {

  constructor(private scope: ServiceWorkerGlobalScope, private adapter: NgSwAdapter) {}

  request(req: Request, timeout: number = null): Observable<Response> {
    let result: Observable<Response> = Observable.defer(() => Observable
      .fromPromise<Response>(this
        .scope
        .fetch(req)));
    if (timeout !== null) {
      result = result.let<Response>(timeoutTo(timeout, undefined));
    }
    return result;
  }

  refresh(req: string | Request, timeout: number = null): Observable<Response> {
    let request: Request;
    if (typeof req == 'string') {
      request = this.adapter.newRequest(this._cacheBust(<string>req));
    } else {
      request = this.adapter.newRequest(this._cacheBust((<Request>req).url), <Request>req);
    }
    return this.request(request, timeout);
  }

  private _cacheBust(url: string): string {
    var bust = Math.random();
    if (url.indexOf('?') == -1) {
      return `${url}?ngsw-cache-bust=${bust}`;
    }
    return `${url}&ngsw-cache-bust=${bust}`;
  }
}
