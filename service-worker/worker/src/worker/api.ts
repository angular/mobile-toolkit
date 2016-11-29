import {Observable} from 'rxjs/Observable';

import {NgSwAdapter, NgSwCache} from './facade';
import {Manifest} from './manifest';

export interface CustomOperator<T> {
  (obs: Observable<T>): Observable<T>;
}

export interface FetchInstruction {
  (): Observable<Response>;
  desc?: Object;
}

export interface Operation {
  (): Observable<any>;
  desc?: Object;
}

export interface VersionWorker {
  readonly manifest: Manifest;
  readonly cache: NgSwCache;
  readonly adapter: NgSwAdapter;

  refresh(req: Request): Observable<Response>;
  fetch(req: Request): [Observable<Response>, Observable<any>];
  showNotification(title: string, options?: Object): void;
}

export interface Plugin<T extends Plugin<T>> {
  setup(operations: Operation[]): void;
  update?(operations: Operation[], previous: T): void;
  fetch?(req: Request, instructions: FetchInstruction[], carryOnOperations?: Operation[]): void;
  cleanup?(operations: Operation[]): void;
  message?(message: any, operations: Operation[]): void;
  push?(data: any): void;
}

export interface PluginFactory<T extends Plugin<T>> {
  (worker: VersionWorker): Plugin<T>;
}
