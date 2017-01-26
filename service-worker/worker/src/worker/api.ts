import {NgSwAdapter, NgSwCache} from './facade';
import {Manifest} from './manifest';

export interface FetchInstruction {
  (): Promise<Response>;
  desc?: Object;
}

export interface Operation {
  (): Promise<any>;
  desc?: Object;
}

export interface VersionWorker extends StreamController {
  readonly manifest: Manifest;
  readonly cache: NgSwCache;
  readonly adapter: NgSwAdapter;

  refresh(req: Request): Promise<Response>;
  fetch(req: Request): Promise<Response>;
  showNotification(title: string, options?: Object): void;
  sendToStream(id: number, message: Object): void;
  closeStream(id: number): void;
}

export interface StreamController {
  sendToStream(id: number, message: Object): void;
  closeStream(id: number): void;
}

export interface Plugin<T extends Plugin<T>> {
  setup(operations: Operation[]): void;
  update?(operations: Operation[], previous: T): void;
  fetch?(req: Request, instructions: FetchInstruction[]): void;
  cleanup?(operations: Operation[]): void;
  message?(message: any, id: number): void;
  messageClosed?(id: number);
  push?(data: any): void;
  validate?(): Promise<boolean>;
}

export interface PluginFactory<T extends Plugin<T>> {
  (worker: VersionWorker): Plugin<T>;
}
