declare class ServiceWorkerContext {
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

declare var caches: CacheStorage;
