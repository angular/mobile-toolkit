declare interface ServiceWorkerGlobalScope {
  fetch(url: string | Request);
  caches: CacheStorage;
  clients: Clients;
  addEventListener(type: string, listener: Function, useCapture?: boolean): void;
  removeEventListener(type: string, listener: Function, last?: any): void;
  registration: ServiceWorkerRegistration;
  importScripts(scripts: string): void;
  skipWaiting(): Promise<void>;
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

declare interface InstallEvent extends ExtendableEvent {}

declare interface ActivateEvent extends ExtendableEvent {}

declare interface FetchEvent extends ExtendableEvent {
  request: Request;
  isReload: boolean;
  clientId: string;
  respondWith(response: Promise<Response>);
}

declare interface PushMessageData {
  arrayBuffer(): ArrayBuffer;
  blob(): Blob;
  json(): Object;
  text(): string;
}

declare interface PushEvent extends ExtendableEvent {
    data: PushMessageData;
}

declare interface CacheOptions {
  ignoreSearch?: boolean;
  ignoreMethod?: boolean;
  ignoreVary?: boolean;
  cacheName?: string;
}

declare interface ExtendableEvent {
  waitUntil(promise: Promise<any>);
}

declare interface PushSubscription {
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

declare interface Client {
  postMessage(message: any, transfer?: any[]): void;
  readonly id: string;
  readonly url: string;
  readonly frameType: "auxiliary" | "top-level" | "nested" | "none";
}

declare interface Clients {
  get(id: string): Promise<Client>;
  matchAll(options?: ClientsMatchAllOptions): Promise<Client[]>;
  openWindow(url: string): Promise<Client>;
  claim(): Promise<void>;
}

declare interface ClientsMatchAllOptions {
  includeUncontrolled?: boolean;
  type?: "window" | "worker" | "sharedworker" | "all";
}
