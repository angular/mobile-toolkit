import {MockRequest, MockResponse} from './mock-requests';
import {MockCacheStorage} from './mock-caches';
import {WorkerScope} from '../context';

export class MockWorkerScope {
  mockResponses: {[key: string]: Response} = {};
  currentCaches: MockCacheStorage;

  fetch(url: string | Request): Promise<Response> {
    const requestUrl: string = <string>url;
    if (this.mockResponses[requestUrl]) {
      return Promise.resolve(this.mockResponses[requestUrl]);
    }
    const resp = new MockResponse('');
    resp.ok = false;
    resp.status = 404;
    resp.statusText = 'File Not Found';
    return Promise.resolve(resp);
  }

  get caches(): CacheStorage {
    return this.currentCaches;
  }

  newRequest(input: string | Request, init?: RequestInit): Request {
    return new MockRequest(input, init);
  }

  newResponse(body?: BodyInit, init?: ResponseInit) {
    return new MockResponse(body, init);
  }
}

