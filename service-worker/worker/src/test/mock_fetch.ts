/*
import {MockRequest, MockResponse} from './mock_cache';

class MockEntry {
  constructor(public request: MockRequest, public response: MockResponse) {}
}

export class MockFetchBackend {
  
  entries: MockEntry[] = [];
  
  mock(req: MockRequest, resp: MockResponse) {
    // Overwrite existing request.
    for (var i = 0; i < this.entries.length; i++) {
      if (this.entries[i].request.matches(req)) {
        this.entries[i] = new MockEntry(req, resp);
        return;
      }
    }
    this.entries.push(new MockEntry(req, resp));
  }
  
  fetch(req: Request): Promise<MockResponse> {
    var entry = this.entries.find((entry) => entry.request.matches(req));
    if (entry === undefined) {
      return Promise.resolve(undefined);
    }
    return Promise.resolve(entry.response);
  }
}
*/