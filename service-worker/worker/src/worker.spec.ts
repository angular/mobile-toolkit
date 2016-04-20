import {ServiceWorker, CACHE_INSTALLING, CACHE_ACTIVE, MANIFEST_URL} from './worker';
import {TestWorkerDriver} from './testing/mock';
import {Observable} from 'rxjs/Rx';
import {MockRequest} from './testing/mock_cache';

const SIMPLE_MANIFEST = `CACHE MANIFEST
# sw.group.version: test
/hello.txt
# sw.group: secondary
# sw.group.version: other
/goodbye.txt
/solong.txt
`;

const FALLBACK_MANIFEST = `CACHE MANIFEST
CACHE:
# sw.group.version: test
/hello.txt

FALLBACK:
/goodbye.txt /hello.txt
`;

const HASHED_MANIFEST_1 = `CACHE MANIFEST
# sw.hash: 12345
/hello.txt
# sw.hash: 67890
/goodbye.txt
`;

const HASHED_MANIFEST_2 = `CACHE MANIFEST
# sw.hash: abcde
/hello.txt
# sw.hash: 67890
/goodbye.txt
`;

const DEV_MANIFEST = `CACHE MANIFEST
# sw.dev: true
# sw.group.version: test
/hello.txt
`;

const BUNDLE_MANIFEST_1 = `CACHE MANIFEST
# sw.group: hello
# sw.group.version: 12345
/hello.txt
# sw.group: goodbye
# sw.group.version: 67890
/goodbye.txt
`;

const BUNDLE_MANIFEST_2 = `CACHE MANIFEST
# sw.group: hello
# sw.group.version: 54321
/hello.txt
# sw.group: goodbye
# sw.group.version: 67890
/goodbye.txt
`;

function errored(err, done) {
  fail(err);
  done();
}

function expectOkResponse(value: Response): Response {
  expect(value).not.toBeUndefined();
  expect(value.ok).toBeTruthy();
  return value;
}

function expectCached(driver: TestWorkerDriver, cache: string, url: string, text: string): Promise<void> {
  return driver
    .caches
    .open(cache)
    .then(cache => cache.match(new MockRequest(url)))
    .then(expectOkResponse)
    .then(resp => resp.text())
    .then(body => expect(body).toBe(text))
    .then(() => null);
}

function expectServed(driver: TestWorkerDriver, url: string, contents: string): Promise<void> {
  return driver
    .triggerFetch(new MockRequest(url))
    .then(expectOkResponse)
    .then(resp => resp.text())
    .then(body => expect(body).toBe(contents))
    .then(() => null);
}

function then(desc, fn) {
  return it(`then, ${desc}`, fn);
}

let sequence = describe;
let fsequence = fdescribe;

describe('ngsw', () => {
  let driver: TestWorkerDriver = new TestWorkerDriver(ServiceWorker);
  beforeEach(() => {
    driver = new TestWorkerDriver(ServiceWorker);
  });
  describe('initial load', () => {
    beforeEach(() => {
      driver.refresh();
      driver.emptyCaches();
      driver.mockUrl(MANIFEST_URL, SIMPLE_MANIFEST);
      driver.mockUrl('/hello.txt', 'Hello world!');
      driver.mockUrl('/goodbye.txt', 'Goodbye world!');
      driver.mockUrl('/solong.txt', 'So long world!');
    })
    it('caches a single file', (done) => driver
      .triggerInstall()
      .then(() => expectCached(driver, 'default:test', '/hello.txt', 'Hello world!'))
      .then(done, err => errored(err, done)))
    it('caches grouped files', (done) => driver
      .triggerInstall()
      .then(() => driver.caches.open('secondary:other'))
      .then(() => expectCached(driver, 'secondary:other', '/goodbye.txt', 'Goodbye world!'))
      .then(() => expectCached(driver, 'secondary:other', '/solong.txt', 'So long world!'))
      .then(done, err => errored(err, done)))
    it('saves the manifest as the currently installed manifest', (done) => driver
      .triggerInstall()
      .then(() => expectCached(driver, CACHE_INSTALLING, MANIFEST_URL, SIMPLE_MANIFEST))
      .then(done, err => errored(err, done)))
    it('promotes the manifest to active when activated', (done) => driver
      .triggerInstall()
      .then(() => driver.unmockUrl(MANIFEST_URL))
      .then(() => driver.triggerActivate())
      .then(() => expectCached(driver, CACHE_ACTIVE, MANIFEST_URL, SIMPLE_MANIFEST))
      .then(done, err => errored(err, done)));
    it('serves files from cache after activation', (done) => driver
      .triggerInstall()
      .then(() => driver.unmockAll())
      .then(() => driver.triggerActivate())
      .then(() => expectServed(driver, '/hello.txt', 'Hello world!'))
      .then(() => expectServed(driver, '/goodbye.txt', 'Goodbye world!'))
      .then(() => expectServed(driver, '/solong.txt', 'So long world!'))
      .then(done, err => errored(err, done)));
  });
  sequence('upgrade load', () => {
    let driver: TestWorkerDriver = new TestWorkerDriver(ServiceWorker);
    beforeAll(done => {
      driver.mockUrl(MANIFEST_URL, HASHED_MANIFEST_1);
      driver.mockUrl('/hello.txt', 'Hello world!');
      driver.mockUrl('/goodbye.txt', 'Goodbye world!');
      driver
        .triggerInstall()
        .then(() => driver.unmockAll())
        .then(() => driver.triggerActivate())
        .then(done, err => errored(err, done));
    });
    it('successfully activates', done => Promise
      .resolve(null)
      .then(() => expectServed(driver, '/hello.txt', 'Hello world!'))
      .then(() => expectServed(driver, '/goodbye.txt', 'Goodbye world!'))
      .then(done, err => errored(err, done)));
    then('upgrades to new manifest', done => {
      driver.refresh();
      driver.mockUrl(MANIFEST_URL, HASHED_MANIFEST_2);
      driver.mockUrl('/hello.txt', 'Hola mundo!');
      driver.mockUrl('/goodbye.txt', 'Should not be reloaded from the server');
      driver
        .triggerInstall()
        .then(() => driver.unmockAll())
        .then(() => driver.triggerActivate())
        .then(done, err => errored(err, done));
    });
    then('refreshes only the hello page', done => Promise
      .resolve(null)
      .then(() => expectServed(driver, '/hello.txt', 'Hola mundo!'))
      .then(() => expectServed(driver, '/goodbye.txt', 'Goodbye world!'))
      .then(done, err => errored(err, done)));
    then('deletes old caches', done => Promise
      .resolve(null)
      .then(() => driver.caches.keys())
      .then(keys => expect(keys.length).toBe(3))
      .then(done, err => errored(err, done)));
  });
  sequence('upgrade without hashes', () => {
    let driver: TestWorkerDriver = new TestWorkerDriver(ServiceWorker);
    beforeAll(done => {
      driver.mockUrl(MANIFEST_URL, BUNDLE_MANIFEST_1);
      driver.mockUrl('/hello.txt', 'Hello world!');
      driver.mockUrl('/goodbye.txt', 'Goodbye world!');
      driver
        .triggerInstall()
        .then(() => driver.unmockAll())
        .then(() => driver.triggerActivate())
        .then(done, err => errored(err, done));
    });
    it('successfully activates', done => Promise
      .resolve(null)
      .then(() => expectServed(driver, '/hello.txt', 'Hello world!'))
      .then(() => expectServed(driver, '/goodbye.txt', 'Goodbye world!'))
      .then(done, err => errored(err, done)));
    then('upgrades to new manifest', done => {
      driver.refresh();
      driver.mockUrl(MANIFEST_URL, BUNDLE_MANIFEST_2);
      driver.mockUrl('/hello.txt', 'Hola mundo!');
      driver.mockUrl('/goodbye.txt', 'Should not be reloaded from the server');
      driver
        .triggerInstall()
        .then(() => driver.unmockAll())
        .then(() => driver.triggerActivate())
        .then(done, err => errored(err, done));
    });
    then('refreshes only the hello page', done => Promise
      .resolve(null)
      .then(() => expectServed(driver, '/hello.txt', 'Hola mundo!'))
      .then(() => expectServed(driver, '/goodbye.txt', 'Goodbye world!'))
      .then(done, err => errored(err, done)));
    then('deletes old caches', done => Promise
      .resolve(null)
      .then(() => driver.caches.keys())
      .then(keys => expect(keys.length).toBe(4))
      .then(done, err => errored(err, done)));
  })
  sequence('dev mode', () => {
    let driver: TestWorkerDriver = new TestWorkerDriver(ServiceWorker);
    beforeAll(done => {
      driver.mockUrl(MANIFEST_URL, DEV_MANIFEST);
      driver.mockUrl('/hello.txt', 'Hello world!');
      driver
        .triggerInstall()
        .then(() => driver.unmockAll())
        .then(() => driver.triggerActivate())
        .then(() => driver.unmockAll())
        .then(done, err => errored(err, done));
    });
    it('fetches from network the first time', done => Promise
      .resolve(null)
      .then(() => driver.mockUrl('/hello.txt', 'Hola mundo!'))
      .then(() => expectServed(driver, '/hello.txt', 'Hola mundo!'))
      .then(done, err => errored(err, done)));
    then('fetches from network again', done => Promise
      .resolve(null)
      .then(() => driver.mockUrl('/hello.txt', 'Ciao mondo!'))
      .then(() => expectServed(driver, '/hello.txt', 'Ciao mondo!'))
      .then(done, err => errored(err, done)));
  });
  sequence('fallback', () => {
    let driver: TestWorkerDriver = new TestWorkerDriver(ServiceWorker);
    beforeAll(done => {
      driver.mockUrl(MANIFEST_URL, FALLBACK_MANIFEST);
      driver.mockUrl('/hello.txt', 'Hello world!');
      driver.mockUrl('/goodbye.txt', 'Should never be fetched!');
      driver
        .triggerInstall()
        .then(() => driver.unmockAll())
        .then(() => driver.triggerActivate())
        .then(done, err => errored(err, done));
    });
    it('successfully falls back', done => Promise
      .resolve(null)
      .then(() => expectServed(driver, '/hello.txt', 'Hello world!'))
      .then(() => expectServed(driver, '/goodbye.txt', 'Hello world!'))
      .then(done, err => errored(err, done)))
  });;
});