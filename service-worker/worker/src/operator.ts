import {Observable} from 'rxjs/Rx';

export function extractBody(obs: Observable<Response>): Observable<string> {
  return obs.flatMap(resp =>
    resp != undefined ?
      resp.text() :
      Observable.of<string>(undefined));
}

export function doAsync<T>(fn: (T) => Observable<void>): any {
  return (obs: Observable<T>) => obs
    .concatMap(value => fn(value)
      .reduce(() => value, value));
}

export function concatLet(...operators: Function[]): any {
  return (obs: Observable<any>) => obs
    .concatMap(value =>
      operators
      .map((op: any) => Observable
        .of(value)
        .let(op)))
    .concatMap(v => v);
}