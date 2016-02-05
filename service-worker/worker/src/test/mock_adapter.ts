import {MockCacheStorage, MockRequest, MockResponse} from './mock_cache';
import {MockFetchBackend} from './mock_fetch';
import {SWAdapter} from '../driver';

export class MockSWAdapter implements SWAdapter {
  
  constructor() {}
  
  _backend: MockFetchBackend = new MockFetchBackend();
  caches: MockCacheStorage = new MockCacheStorage();
  
  origin: string = 'http://localhost/';
  worker: any;
  fetch(req: Request): Promise<Response> {
    return this._backend.fetch(req);
  }
  
  newRequest(url: string, options?: any): Request {
    return new MockRequest(url);
  }
  
  newResponse(text: string): Response {
    return new MockResponse(text);
  }
  
  mock(req: MockRequest, resp: MockResponse) {
    this._backend.mock(req, resp);
  }
}