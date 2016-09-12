import {Observable} from 'rxjs/Observable';

export function doAsync<T>(fn: (T) => Observable<any>): any {
  return (obs: Observable<T>) => obs
    .concatMap(value => fn(value)
      .reduce(() => value, value));
}
