import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';

import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

export class LiteSubject<T> {

  observable: Observable<T>;
  private subscribers: Observer<T>[] = [];

  constructor() {
    this.observable = Observable.create((obs: Observer<T>) => {
      this.subscribers.push(obs);
      return () => {
        let index = this.subscribers.indexOf(obs);
        if (index >= 0) {
          this.subscribers.splice(index, 1);
        }
      };
    });
  }

  next(value: T): void {
    this.subscribers.forEach(obs => obs.next(value));
  }

  complete(): void {
    this.subscribers.forEach(obs => obs.complete());
  }

  get hasSubscribers(): boolean {
    return this.subscribers.length > 0;
  }
}

export function doAsync<T>(fn: (T) => Observable<any>): any {
  return (obs: Observable<T>) => obs
    .do(v => console.log('doAsync before', v))
    .concatMap(value => fn(value)
      .reduce(() => value, value))
    .do(v => console.log('doAsync after', v));
}
