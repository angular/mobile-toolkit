import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {WorkerScope, WorkerAdapter} from './context';

@Injectable()
export class Fetch {
  
  constructor(private scope: WorkerScope, private adapter: WorkerAdapter) {}
  
  request(req: Request): Observable<Response> {
    return Observable.defer(() => Observable
      .fromPromise<Response>(this
        .scope
        .fetch(req)));
  }
  
  refresh(req: string | Request): Observable<Response> {
    let request: Request;
    if (typeof req == 'string') {
      request = this.adapter.newRequest(this._cacheBust(<string>req));
    } else {
      request = this.adapter.newRequest(this._cacheBust((<Request>req).url), <Request>req);
    }
    return this.request(request);
  }
  
  private _cacheBust(url: string): string {
    var bust = Math.random();
    if (url.indexOf('?') == -1) {
      return `${url}?ngsw-cache-bust=${bust}`;
    }
    return `${url}&ngsw-cache-bust=${bust}`;
  }
}
