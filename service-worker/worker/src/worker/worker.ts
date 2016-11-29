
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
    console.log('actually fetching', req.url);
    return this.fetcher.refresh(req).do(resp =>console.log('and the response is', resp));
  }

  fetch(req: Request): [Observable<Response>, Observable<any>] {
    const instructions: FetchInstruction[] = [
      fetchFromNetworkInstruction(this, req),
    ];
    const carryOnInstructions: FetchInstruction[] = [];

    this
      .plugins
      .filter(plugin => !!plugin.fetch)
      .forEach(plugin => plugin.fetch(req, instructions, carryOnInstructions));
    console.log('fetch for', req.url, instructions.map(i => i.desc));
    const fetchResponse = Observable
      .from(instructions)
      .do(instruction => console.log('processing', instruction.desc))
      .concatMap(op => op()
        .do(resp => console.log('resp', op.desc['type'], (resp && resp.status))))
      .filter(resp => resp !== null)
      .first();
    const carryOnResponse = Observable
      .from(carryOnInstructions)
      .concatMap(op => op())
      .ignoreElements();
    return [fetchResponse, carryOnResponse];
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
