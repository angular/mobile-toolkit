
import {Operation, Plugin, VersionWorker, FetchInstruction, StreamController} from './api';
import {fetchFromNetworkInstruction} from './common';
import {ScopedCache} from './cache';
import {NgSwAdapter, NgSwFetch} from './facade';
import {Manifest} from './manifest';

export class VersionWorkerImpl implements VersionWorker {

  constructor(
      public streamController: StreamController,
      public scope: ServiceWorkerGlobalScope,
      public manifest: Manifest,
      public adapter: NgSwAdapter,
      public cache: ScopedCache,
      private fetcher: NgSwFetch,
      private plugins: Plugin<any>[]) {}

  refresh(req: Request): Promise<Response> {
    return this.fetcher.refresh(req);
  }

  fetch(req: Request): Promise<Response> {
    const instructions: FetchInstruction[] = [
      fetchFromNetworkInstruction(this, req, false),
    ];
    this
      .plugins
      .filter(plugin => !!plugin.fetch)
      .forEach(plugin => plugin.fetch(req, instructions));
    return instructions.reduce<Promise<Response>>(
      (prev, curr) => prev.then(resp => resp ? resp : curr()),
      Promise.resolve(null),
    );
  }

  validate(): Promise<boolean> {
    return Promise
      .all(this
        .plugins
        .filter(plugin => !!plugin.validate)
        .map(plugin => plugin.validate())
      )
      .then(results => results.every(v => v));
  }

  setup(previous: VersionWorkerImpl): Promise<any> {
    let operations: Operation[] = [];
    for (let i = 0; i < this.plugins.length; i++) {
      const plugin: Plugin<any> = this.plugins[i];
      if (plugin.update && previous) {
        plugin.update(operations, previous.plugins[i]);
      } else {
        plugin.setup(operations);
      }
    }
    return operations.reduce<Promise<any>>(
      (prev, curr) => prev.then(() => curr()),
      Promise.resolve(null),
    );
  }

  cleanup(): Operation[] {
    return this.plugins.reduce((ops, plugin) => {
      if (plugin.cleanup) {
        plugin.cleanup(ops);
      }
      return ops;
    }, []);
  }

  message(message: any, id: number): void {
    this
      .plugins
      .filter(plugin => !!plugin.message)
      .forEach(plugin => plugin.message(message, id));
  }

  messageClosed(id: number): void {
    this
      .plugins
      .filter(plugin => !!plugin.messageClosed)
      .forEach(plugin => plugin.messageClosed(id));
  }

  sendToStream(id: number, message: Object): void {
    this.streamController.sendToStream(id, message);
  }

  closeStream(id: number): void {
    this.streamController.closeStream(id);
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
