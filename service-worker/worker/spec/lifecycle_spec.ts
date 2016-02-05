import {NgServiceWorker} from '../src/worker';
import {MockSWAdapter} from '../src/test/mock_adapter';
import {MockRequest, MockResponse} from '../src/test/mock_cache';

describe('service worker lifecycle', () => {
  var worker;
  var adapter;
  beforeEach(() => {
    adapter = new MockSWAdapter();
    adapter.mock(new MockRequest('/manifest.appcache'), new MockResponse(`
CACHE MANIFEST
/resource/A
/resource/B
`));
    adapter.mock(new MockRequest('/resource/A'), new MockResponse('test resource A'));
    adapter.mock(new MockRequest('/resource/B'), new MockResponse('test resource B'));
    worker = new NgServiceWorker(adapter);
  });
  it('sets up service worker on install', (done) => {
    worker
      .install()
      .then(() => done());
  });
  it('prefetches resources on install', (done) => {
    worker
      .install()
      .then(() => Promise.all([
        adapter.caches.match(new MockRequest('/resource/A')),
        adapter.caches.match(new MockRequest('/resource/B'))
      ]))
      .then((resps) => Promise.all(
        resps.map((resp) => resp.text())
      ))
      .then((text) => {
        expect(text[0]).toBe('test resource A');
        expect(text[1]).toBe('test resource B');
      })
      .then(() => done());
  });
  it('waits until activate to set the active manifest', (done) => {
    adapter
      .caches
      .open('manifest.active')
      .then((cache) => worker
        .install()
        .then(() => cache.match(new MockRequest('/manifest.appcache')))
        .then((manifest) => expect(manifest).toBeUndefined())
        .then(() => worker.activate())
        .then(() => cache.match(new MockRequest('/manifest.appcache')))
        .then((manifest) => expect(manifest).not.toBeUndefined())
      )
      .then(() => done());
  });
});