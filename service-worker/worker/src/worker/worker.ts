
import {Operation, Plugin, VersionWorker, FetchInstruction} from './api';
import {fetchFromNetworkInstruction} from './common';
import {ScopedCache} from './cache';
import {NgSwAdapter, NgSwFetch} from './facade';
import {Manifest} from './manifest';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

export class VersionWorkerImpl implements VersionWorker {

  constructor(
      public scope: ServiceWorkerGlobalScope,
      public manifest: Manifest,
      public adapter: NgSwAdapter,
      public cache: ScopedCache,
      private fetcher: NgSwFetch,
      private plugins: Plugin<any>[]) {}

  refresh(req: Request): Observable<Response> {
    return this.fetcher.refresh(req);
  }

  fetch(req: Request): Observable<Response> {
    const instructions: FetchInstruction[] = [
      fetchFromNetworkInstruction(this, req),
    ];
    this
      .plugins
      .filter(plugin => !!plugin.fetch)
      .forEach(plugin => plugin.fetch(req, instructions));
    return Observable
      .from(instructions)
      .concatMap(op => op())
      .filter(resp => resp !== null)
      .first();
  }

  setup(previous: VersionWorkerImpl): Observable<any> {
    let operations: Operation[] = [];
    for (let i = 0; i < this.plugins.length; i++) {
      const plugin: Plugin<any> = this.plugins[i];
      if (plugin.update && previous) {
        plugin.update(operations, previous.plugins[i]);
      } else {
        plugin.setup(operations);
      }
    }
    return Observable
      .from(operations)
      .concatMap(op => op());
  }

  cleanup(): Operation[] {
    return this.plugins.reduce((ops, plugin) => {
      if (plugin.cleanup) {
        plugin.cleanup(ops);
      }
      return ops;
    }, []);
  }

  message(message: any): Operation[] {
    return this.plugins.reduce((ops, plugin) => {
      if (plugin.message) {
        plugin.message(message, ops);
      }
      return ops;
    }, []);
  }

  push(data: any): void {
    this
      .plugins
      .filter(plugin => !!plugin.push)
      .forEach(plugin => plugin.push(data));
  }

  showNotification(title: string, options?: Object): void {
    this.scope.registration.showNotification(title, options);
  }
}
