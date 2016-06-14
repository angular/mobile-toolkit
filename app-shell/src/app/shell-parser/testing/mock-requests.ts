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
  redirect: RequestRedirect;
  get body(): any {
    return this;
  }

  mode: RequestMode;
  context: RequestContext;
  referrer: string;
  credentials: RequestCredentials;

  constructor(req: string | Request, init?: {[key: string]: any}) {
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
      (<any>this)[prop] = (<any>from)[prop];
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

  constructor(body: string | Blob | BodyInit, init?: ResponseInit) {
    super(<string>body);
    if ((init || { headers: null }).headers) {
      this.headers = init.headers;
    }
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

