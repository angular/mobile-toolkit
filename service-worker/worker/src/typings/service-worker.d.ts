declare class ServiceWorkerContext {
}

declare interface ServiceWorkerContainer extends EventTarget {
  register(script: string): Promise<ServiceWorkerRegistration>;
  controller: ServiceWorker;
  getRegistration(): Promise<ServiceWorkerRegistration>;
  getRegistrations(): Promise<ServiceWorkerRegistration[]>;
}

declare interface ServiceWorker {
  postMessage(message, transferList?);
}

declare interface ServiceWorkerRegistration {
  pushManager: PushManager;
  active: ServiceWorker;
  showNotification(title: string, options?: any): Promise<any>
}

declare interface Cache {
  add(request: Request): Promise<void>;
  addAll(requests: Request[]): Promise<void>;
  delete(request: Request, options?: CacheOptions): Promise<void>;
  keys(request?: Request, options?: CacheOptions): Promise<Request[]>;
  match(request: Request, options?: CacheOptions): Promise<Response>;
  matchAll(request: Request, options?: CacheOptions): Promise<Response[]>;
  put(request: Request, response: Response): Promise<void>;
}

declare interface CacheStorage {
  delete(cacheName: string): Promise<boolean>;
  has(cacheName: string): Promise<boolean>;
  keys(): Promise<string[]>;
  match(request: Request, options?: CacheOptions): Promise<Response>;
  open(cacheName: string): Promise<Cache>;
}

declare interface CacheOptions {
  ignoreSearch?: boolean;
  ignoreMethod?: boolean;
  ignoreVary?: boolean;
  cacheName?: string;
}

declare interface PushSubscription {
  id: string;
  endpoint: string;
  getKey(method: string): ArrayBuffer;
  toJSON(): Object;
  unsubscribe(): Promise<boolean>;
}

declare interface PushSubscribeOptions {
  userVisibleOnly?: boolean;
}

declare interface PushManager {
  getSubscription(): Promise<PushSubscription>;
  subscribe(options: PushSubscribeOptions): Promise<PushSubscription>;
}

declare var caches: CacheStorage;

declare function importScripts(file: string);
