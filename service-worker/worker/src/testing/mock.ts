import {
  WorkerScope,
  ExtendableEvent,
  InstallEvent,
  ActivateEvent,
  FetchEvent,
  ServiceWorker,
  WorkerAdapter,
  CacheManager,
  Fetch,
  Events
} from '../worker/index';
import {
  MockCacheStorage,
  MockRequest,
  MockResponse
} from './mock_cache';

class TestAdapter extends WorkerAdapter {
  newRequest(req: string | Request, options = {}): Request {
    return new MockRequest(req, options);
  }

  newResponse(body: string | Blob): Response {
    return new MockResponse(body);
  }
}

export class TestWorkerScope extends WorkerScope {

  constructor(caches: CacheStorage) {
    super();
    this.caches = caches;
  }

  installListener: Function = () => null;
  activateListener: Function = () => null;
  fetchListener: Function = () => null;

  mockResponses: Object = {};

  mockFetch(url: string, response: string | MockResponse) {
    if (typeof response == 'string') {
      response = new MockResponse(<string>response);
    }
    this.mockResponses[url] = <MockResponse>response;
  }

  unmockFetch(url: string): void {
    delete this.mockResponses[url];
  }

  unmockAll(): void {
    this.mockResponses = {};
  }

  fetch(req: string | Request): Promise<Response> {
    let url: string = (typeof req == 'string') ? <string>req : (<Request>req).url;
    url = url.split('?')[0];
    if (this.mockResponses.hasOwnProperty(url)) {
      return Promise.resolve(this.mockResponses[url]) ;
    }
    var resp = new MockResponse('');
    resp.ok = false;
    resp.status = 404;
    resp.statusText = 'File Not Found';
    return Promise.resolve(resp);
  }

  addEventListener(type: string, listener: Function): void {
    switch (type) {
      case 'install':
        this.installListener = listener;
        break;
      case 'activate':
        this.activateListener = listener;
        break;
      case 'fetch':
        this.fetchListener = listener;
        break;
      default:
        throw `Registering listener for unknown event: ${type}`;
    }
  }

  removeEventListener(type: string, listener: Function): void {
    throw 'Remove unsupported!';
  }
}

interface TestExtendableEvent extends ExtendableEvent {
  done: Promise<any>;
}

interface TestInstallEvent extends TestExtendableEvent, InstallEvent {}
interface TestActivateEvent extends TestExtendableEvent, ActivateEvent {}
interface TestFetchEvent extends TestExtendableEvent, FetchEvent {}

export interface TestWorkerCreationFn {
  (scope: WorkerScope, adapter: WorkerAdapter, cache: CacheManager, fetch: Fetch, events: Events): any;
}

export class TestWorkerDriver {
  instance: any;
  scope: TestWorkerScope;
  caches: MockCacheStorage = new MockCacheStorage();
  lifecycle: Promise<any> = Promise.resolve(null);

  constructor(private createWorker: TestWorkerCreationFn) {
    this.refresh();
  }

  emptyCaches(): void {
    this.caches.caches = {};
  }

  mockUrl(url: string, response: string | MockResponse): void {
    this.scope.mockFetch(url, response);
  }

  unmockUrl(url: string): void {
    this.scope.unmockFetch(url);
  }

  unmockAll(): void {
    this.scope.unmockAll();
  }

  refresh(): void {
    this.scope = new TestWorkerScope(this.caches);

    let workerAdapter = new TestAdapter();
    let cache = new CacheManager(this.scope, workerAdapter);
    let fetch = new Fetch(this.scope, workerAdapter);
    let events = new Events(this.scope);

    this.instance = this.createWorker(this.scope, workerAdapter, cache, fetch, events);
  }

  triggerInstall(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.lifecycle = this
        .lifecycle
        .then(() => {
          let event: TestInstallEvent = this._makeExtendableEvent();
          this.scope.installListener(event);
          return event
            .done
            .then(resolve, reject);
        });
    });
  }

  triggerActivate(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.lifecycle = this
        .lifecycle
        .then(() => {
          let event: TestActivateEvent = this._makeExtendableEvent();
          this.scope.activateListener(event);
          return event
            .done
            .then(resolve, reject);
        });
    });
  }

  triggerFetch(req: MockRequest, isReload: boolean = false): Promise<MockResponse> {
    return new Promise((resolve, reject) => {
      this.lifecycle = this
        .lifecycle
        .then(() => {
          let event: TestFetchEvent = <TestFetchEvent>this._makeExtendableEvent();
          event.request = req;
          event.isReload = isReload;
          event.respondWith = (p: Promise<any>) => p.then(resolve, reject);
          this.scope.fetchListener(event);
        });
    });
  }

  private _makeExtendableEvent(): TestExtendableEvent {
    let event: TestExtendableEvent;
    event = {
      waitUntil: (p: Promise<any>) => {
        event.done = p;
      },
      done: Promise.resolve(null)
    };
    return event;
  }
}