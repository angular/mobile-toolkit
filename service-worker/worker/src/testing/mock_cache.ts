
function findIndex(array: any[], matcher: Function): number {
  for (var i = 0; i < array.length; i++) {
    if (matcher(array[i])) {
      return i;
    }
  }
  return -1;
}

export class MockCacheStorage implements CacheStorage {

  caches: Object = {};

  constructor() {}

  delete(cacheName: string): Promise<boolean> {
    if (this.caches.hasOwnProperty(cacheName)) {
      delete this.caches[cacheName];
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }

  has(cacheName: string): Promise<boolean> {
    return Promise.resolve(this.caches.hasOwnProperty(cacheName));
  }

  keys(): Promise<string[]> {
    var keys = [];
    for (var cacheName in this.caches) {
      keys.push(cacheName);
    }
    return Promise.resolve(keys);
  }

  match(request: Request, options?: CacheOptions): Promise<Response> {
    if (options !== undefined && options !== null) {
      throw 'CacheOptions are unsupported';
    }
    var promises = [];
    for (var cacheName in this.caches) {
      promises.push(this.caches[cacheName].match(request));
    }
    promises.push(Promise.resolve(undefined));

    var valueOrNextPromiseFn: Function = (value) => {
      if (value !== undefined || promises.length === 0) {
        return value;
      }
      return promises.shift().then(valueOrNextPromiseFn);
    };

    return promises.shift().then(valueOrNextPromiseFn);
  }

  open(cacheName: string): Promise<MockCache> {
    if (!this.caches.hasOwnProperty(cacheName)) {
      this.caches[cacheName] = new MockCache();
    }
    return Promise.resolve(this.caches[cacheName]);
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
    var idx = findIndex(this.entries, (entry) => entry.match(request));
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
    var idx = findIndex(this.entries, (entry) => entry.match(request));
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

export class MockBody {
  bodyUsed: boolean = false;

  constructor(private _body: string) {}

  arrayBuffer(): Promise<any> {
    throw 'Unimplemented';
  }

  blob(): Promise<any> {
    throw 'Unimplemented';
  }

  formData(): Promise<any> {
    throw 'Unimplemented';
  }

  json(): Promise<any> {
    throw 'Unimplemented';
  }

  text(): Promise<string> {
    if (this.bodyUsed) {
      return Promise.reject('Body already consumed.');
    }
    this.bodyUsed = true;
    return Promise.resolve(this._body);
  }

  get _mockBody(): string {
    return this._body;
  }
}

export class MockRequest extends MockBody implements Request {
  url: string;
  method: string = "GET";
  cache: RequestCache = "default";

  headers: any;
  redirect: any;
  get body(): any {
    return this;
  }

  mode: RequestMode;
  context: RequestContext;
  referrer: string;
  credentials: RequestCredentials;

  constructor(req: string | Request, init?: Object) {
    super(null);
    if (typeof req == 'string') {
      this.url = <string>req;
    } else {
      let other = <Request>req;
      this.url = init['url'] || other.url;
      this.method = other.method;
      this.cache = other.cache;
      this.headers = other.headers;
      //this.body = other.body;
      this.mode = other.mode;
      this.context = other.context;
      this.referrer = other.referrer;
      this.credentials = other.credentials;
    }
    ['method', 'cache', 'headers', 'mode', 'context', 'referrer', 'credentials']
      .forEach(prop => this._copyProperty(prop, init));
  }

  _copyProperty(prop: string, from: Object) {
    if (from && from.hasOwnProperty(prop)) {
      this[prop] = from[prop];
    }
  }

  matches(req: Request): boolean {
    return req.url === this.url && req.method === this.method;
  }
}

export class MockResponse extends MockBody implements Response {
  ok: boolean = true;
  statusText: string = 'OK';
  status: number = 200;
  url: string;
  headers: any;
  type: ResponseType = "default";

  constructor(body: string | Blob) {
    super(<string>body);
  }

  clone(): MockResponse {
    if (this.bodyUsed) {
      throw 'Body already consumed.';
    }
    var resp = new MockResponse(this._mockBody);
    resp.ok = this.ok;
    resp.statusText = this.statusText;
    resp.status = this.status;
    resp.headers = this.headers;
    resp.url = this.url;
    return resp;
  }

  error(): Response {
    throw 'Unimplemented';
  }

  redirect(url: string, status: number): Response {
    throw 'Unimplemented';
  }
}
