import {NgServiceWorker} from '../src/worker';
import {MockSWAdapter} from '../src/test/mock_adapter';
import {MockRequest, MockResponse} from '../src/test/mock_cache';

describe('service worker update', () => {
  var worker;
  var adapter;
  beforeEach(() => {
    adapter = new MockSWAdapter();
    adapter.mock(new MockRequest('/manifest.appcache'), new MockResponse(`
CACHE MANIFEST
# sw.bundle: unhashed
# sw.version: 1
/resource/A
/resource/B
# sw.bundle: hashed
# sw.version: 1
# sw.file.hash: C1
/resource/C
# sw.file.hash: D1
/resource/D
`));
    adapter.mock(new MockRequest('/resource/A'), new MockResponse('test resource A'));
    adapter.mock(new MockRequest('/resource/B'), new MockResponse('test resource B'));
    adapter.mock(new MockRequest('/resource/C'), new MockResponse('test resource C'));
    adapter.mock(new MockRequest('/resource/D'), new MockResponse('test resource D'));
    worker = new NgServiceWorker(adapter);
  });
  it('updates unhashed resources together', (done) => {
    Promise.resolve()
      .then(() => worker.install())
      .then(() => worker.activate())
      .then(() => {
        adapter.mock(new MockRequest('/resource/A'), new MockResponse('updated resource A'));
        adapter.mock(new MockRequest('/resource/B'), new MockResponse('updated resource B'));
        adapter.mock(new MockRequest('/resource/C'), new MockResponse('updated resource C'));
        adapter.mock(new MockRequest('/resource/D'), new MockResponse('updated resource D'));
        adapter.mock(new MockRequest('/manifest.appcache'), new MockResponse(`
CACHE MANIFEST
# sw.bundle: unhashed
# sw.version: 2
/resource/A
/resource/B
# sw.bundle: hashed
# sw.version: 1
# sw.file.hash: C1
/resource/C
# sw.file.hash: D1
/resource/D
`));
        console.log('updating...');
      })
      .then(() => worker.checkForUpdate())
      .then((updated) => expect(updated).toBeTruthy())
      .then(() => Promise.all([
        worker.fetch(new MockRequest('/resource/A')),
        worker.fetch(new MockRequest('/resource/B')),
        worker.fetch(new MockRequest('/resource/C')),
        worker.fetch(new MockRequest('/resource/D'))
      ]))
      .then((responses) => Promise.all(
        responses.map((resp) => resp.text())
      ))
      .then((text) => {
        expect(text[0]).toBe('updated resource A');
        expect(text[1]).toBe('updated resource B');
        expect(text[2]).toBe('test resource C');
        expect(text[3]).toBe('test resource D');
        return null;
      })
      .then(() => done());
  });
  it('updates hashed resources only on hash changed', (done) => {
    Promise.resolve()
      .then(() => worker.install())
      .then(() => worker.activate())
      .then(() => {
        adapter.mock(new MockRequest('/resource/A'), new MockResponse('updated resource A'));
        adapter.mock(new MockRequest('/resource/B'), new MockResponse('updated resource B'));
        adapter.mock(new MockRequest('/resource/C'), new MockResponse('updated resource C'));
        adapter.mock(new MockRequest('/resource/D'), new MockResponse('updated resource D'));
        adapter.mock(new MockRequest('/manifest.appcache'), new MockResponse(`
CACHE MANIFEST
# sw.bundle: unhashed
# sw.version: 1
/resource/A
/resource/B
# sw.bundle: hashed
# sw.version: 2
# sw.file.hash: C2
/resource/C
# sw.file.hash: D1
/resource/D
`));
        console.log('updating...');
      })
      .then(() => worker.checkForUpdate())
      .then((updated) => expect(updated).toBeTruthy())
      .then(() => Promise.all([
        worker.fetch(new MockRequest('/resource/A')),
        worker.fetch(new MockRequest('/resource/B')),
        worker.fetch(new MockRequest('/resource/C')),
        worker.fetch(new MockRequest('/resource/D'))
      ]))
      .then((responses) => Promise.all(
        responses.map((resp) => resp.text())
      ))
      .then((text) => {
        expect(text[0]).toBe('test resource A');
        expect(text[1]).toBe('test resource B');
        expect(text[2]).toBe('updated resource C');
        expect(text[3]).toBe('test resource D');
        return null;
      })
      .then(() => done());
  });
});