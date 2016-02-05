import {MockCache, MockCacheStorage, MockRequest, MockResponse} from '../src/test/mock_cache';

describe('mock response', () => {
  it('provides text exactly once', (done) => {
    var resp = new MockResponse('response text');
    resp
      .text()
      .then((text) => expect(text).toBe('response text'))
      .then(() => resp.text())
      .catch(() => 'threw error')
      .then((text) => expect(text).toBe('threw error'))
      .then(() => done());
  });
});
describe('mock cache', () => {
  it('caches a single request', (done) => {
    var mc = new MockCache();
    var mockResponse = new MockResponse('test response');
    mc
      .put(new MockRequest('/some/url'), mockResponse)
      .then(() => mc.match(new MockRequest('/some/url')))
      .then((resp) => {
        expect(resp).not.toBeUndefined();
        expect(resp).not.toBe(mockResponse);
        return resp.text();
      })
      .then((text) => expect(text).toBe('test response'))
      .then(() => done());
  });
  it('differentiates between requests in the cache', (done) => {
    var mc = new MockCache();
    Promise
      .all([
        mc.put(new MockRequest('/request/a'), new MockResponse('response A')),
        mc.put(new MockRequest('/request/b'), new MockResponse('response B'))
      ])
      .then(() => Promise.all([
        mc.match(new MockRequest('/request/b')),
        mc.match(new MockRequest('/request/a'))
      ]))
      .then((responses) => Promise.all(
        responses.map((resp) => resp !== undefined ? resp.text() : Promise.resolve(null))
      ))
      .then((text) => {
        expect(text[0]).toBe('response B');
        expect(text[1]).toBe('response A');
      })
      .then(() => done());
  });
  it('deletes requests from the cache', (done) => {
    var mc = new MockCache();
    mc
      .put(new MockRequest('/request'), new MockResponse('/response'))
      .then(() => mc.match(new MockRequest('/request')))
      .then((resp) => expect(resp).not.toBeUndefined())
      .then(() => mc.delete(new MockRequest('/request')))
      .then(() => mc.match(new MockRequest('/request')))
      .then((resp) => expect(resp).toBeUndefined())
      .then(() => done());
  });
});
describe('mock cachestorage', () => {
  it('can open a cache', (done) => {
    var cs = new MockCacheStorage();
    cs
      .open('test')
      .then((cache) => expect(cache instanceof MockCache))
      .then(() => done());
  });
  it('opens the same cache repeatedly', (done) => {
    var cs = new MockCacheStorage();
    Promise
      .all([
        cs.open('test'),
        cs.open('test')
      ])
      .then((caches) => expect(caches[0] === caches[1]).toBeTruthy())
      .then(() => done());
  });
  it('returns distinct caches', (done) => {
    var cs = new MockCacheStorage();
    Promise.all([
        cs.open('test_a'),
        cs.open('test_b')
      ])
      .then((caches) => expect(caches[0] === caches[1]).toBeFalsy())
      .then(() => done());
  });
  it('matches requests from multiple caches', (done) => {
    var cs = new MockCacheStorage();
    Promise
      .all([
        cs.open('test_a'),
        cs.open('test_b')
      ])
      .then((caches) => Promise.all([
        caches[0].put(new MockRequest('/request/a'), new MockResponse('response A')),
        caches[1].put(new MockRequest('/request/b'), new MockResponse('response B'))
      ]))
      .then(() => Promise.all([
        cs.match(new MockRequest('/request/a')),
        cs.match(new MockRequest('/request/b'))    
      ]))
      .then((responses) => {
        expect(responses[0]).not.toBeUndefined();
        expect(responses[1]).not.toBeUndefined();
        return Promise.all(responses.map((response) => response.text()));
      })
      .then((text) => {
        expect(text[0]).toBe('response A');
        expect(text[1]).toBe('response B');
      })
      .then(() => done());
  });
});
