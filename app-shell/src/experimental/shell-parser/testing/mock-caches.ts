function findIndex(array: any[], matcher: Function): number {
  for (var i = 0; i < array.length; i++) {
    if (matcher(array[i])) {
      return i;
    }
  }
  return -1;
}

export class MockCacheStorage implements CacheStorage {
  caches: {[key: string]: MockCache} = {};
  constructor() {}

  delete(cacheName: string): Promise<boolean> {
    if (this.caches.hasOwnProperty(cacheName)) {
      delete (<any>this).caches[cacheName];
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }

  has(cacheName: string): Promise<boolean> {
    return Promise.resolve(this.caches.hasOwnProperty(cacheName));
  }

  keys(): Promise<string[]> {
    var keys: any[] = [];
    for (var cacheName in this.caches) {
      keys.push(cacheName);
    }
    return Promise.resolve(keys);
  }

  match(request: Request, options?: CacheOptions): Promise<Response> {
    if (options !== undefined && options !== null) {
      throw 'CacheOptions are unsupported';
    }
    var promises: any[] = [];
    for (var cacheName in this.caches) {
      promises.push((<any>this).caches[cacheName].match(request));
    }
    promises.push(Promise.resolve(undefined));

    var valueOrNextPromiseFn: Function = (value: any) => {
      if (value !== undefined || promises.length === 0) {
        return value;
      }
      return promises.shift().then(valueOrNextPromiseFn);
    };

    return promises.shift().then(valueOrNextPromiseFn);
  }

  open(cacheName: string): Promise<MockCache> {
    if (!this.caches.hasOwnProperty(cacheName)) {
      (<any>this).caches[cacheName] = new MockCache();
    }
    return Promise.resolve((<any>this).caches[cacheName]);
  }
}

export class MockCache implements Cache {

  entries: MockCacheEntry[] = [];

  add(request: Request): Promise<void> {
    throw 'Unimplemented';
  }

  addAll(requests: Request[]): Promise<void> {
    return Promise
      .all(requests.map((req) => this.add(req)))
      .then(() => undefined);
  }

  delete(request: Request, options?: CacheOptions): Promise<void> {
    if (options !== undefined) {
      throw 'CacheOptions are unsupported';
    }
    var idx = findIndex(this.entries, (entry: any) => entry.match(request));
    if (idx !== -1) {
      this.entries.splice(idx, 1);
    }
    return Promise.resolve(undefined);
  }

  keys(request?: Request, options?: CacheOptions): Promise<Request[]> {
    throw 'Unimplemented';
  }

  match(request: Request, options?: CacheOptions): Promise<Response> {
    if (options !== undefined) {
      throw 'CacheOptions are unsupported';
    }
    var idx = findIndex(this.entries, (entry: any) => entry.match(request));
    if (idx === -1) {
      return Promise.resolve(undefined);
    }
    return Promise.resolve(this.entries[idx].response.clone());
  }

  matchAll(request: Request, options?: CacheOptions): Promise<Response[]> {
    if (options !== undefined) {
      throw 'CacheOptions are unsupported';
    }
    return Promise.resolve(this
      .entries
      .filter((entry) => entry.match(request))
      .map((entry) => entry.response.clone()));
  }

  put(request: Request, response: Response): Promise<void> {
    this.entries.unshift(new MockCacheEntry(request, response));
    return Promise.resolve(undefined);
  }
}

export class MockCacheEntry {
  constructor(public request: Request, public response: Response) {}

  match(req: Request): boolean {
    return req.url === this.request.url && req.method === this.request.method;
  }
}

