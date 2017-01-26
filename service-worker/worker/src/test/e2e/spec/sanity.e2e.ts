import {create, Server} from '../harness/server/server';
import {sendPush, setGCMAPIKey} from '../harness/server/push';
import {HarnessPageObject} from '../harness/server/page-object';

import fs = require('fs');

let server: Server;
let po: HarnessPageObject;

const SIMPLE_MANIFEST = {
  static: {
    urls: {
      '/hello.txt': 'test',
      '/goodbye.txt': 'same',
    }
  },
  push: {
    showNotifications: true
  }
};

const UPDATE_MANIFEST = {
  static: {
    urls: {
      '/hello.txt': 'changed',
      '/goodbye.txt': 'same'
    }
  },
  push: {
    showNotifications: true
  }
};

beforeAll(done => {
  create(8080, 'tmp/es5/src/test/e2e/harness/client').then(s => {
    server = s;
    done();
  });
});

beforeEach(() => {
  server.clearResponses();
  po = new HarnessPageObject();
});


afterAll(done => {
/*  po
    .ping()
    .then(() => po.log())
    .then(entries => setTimeout(() => entries.forEach(entry => console.log(entry)), 0))
    .then(() => server.shutdown())
    .then(done); */ server.shutdown(); done();
});

function expectNoServiceWorker(): Promise<void> {
  return po
    .hasServiceWorker()
    .then(workerPresent => {
      expect(workerPresent).toBeFalsy();
    });
}

beforeAll(done => {
  fs.exists('./ngsw-config.json', exists => {
    if (!exists) {
      throw 'Must have a ngsw-config.json file with a gcm_key property';
    }
    fs.readFile('./ngsw-config.json', 'utf8', (err, data) => {
      let config = JSON.parse(data);
      if (!config.hasOwnProperty('gcm_key')) {
        throw 'Must have a ngsw-config.json file with a gcm_key property';
      }
      setGCMAPIKey(config['gcm_key']);
      return done();
    });
  });
});

describe('world sanity', () => {
  it('starts without a service worker', done => {
    browser.get('/index.html');
    po
      .hasActiveWorker()
      .then(hasWorker => {
        expect(hasWorker).toBeFalsy();
      })
      .then(done);
  });
  it('starts without cache keys', done => {
    po
      .cacheKeys()
      .then(keys => {
        expect(keys).toEqual([]);
      })
      .then(done);
  })
  it('able to mock a request', done => {
    server.addResponse('/hello.txt', 'Hello world!');
    po
      .request('/hello.txt')
      .then(result => {
        expect(result).toBe('Hello world!');
      })
      .then(done);
  });
  it('can install a service worker', done => {
    server.addResponse('/ngsw-manifest.json.js', '/* mocked */');
    server.addResponse('/ngsw-manifest.json', JSON.stringify(SIMPLE_MANIFEST));
    server.addResponse('/hello.txt', 'Hello world!');
    server.addResponse('/goodbye.txt', 'Goodbye world!');
    po.installServiceWorker('/worker-test.js');
    po
      .hasActiveWorker()
      .then(hasWorker => {
        expect(hasWorker).toBeTruthy();
      })
      .then(done);
  });
  it('after reload, worker serves cached /hello.txt', done => {
    browser.get('/index.html');
    server.addResponse('/hello.txt', 'Goodbye world?');
    setTimeout(() => po
      .request('/hello.txt')
      .then(result => expect(result).toBe('Hello world!'))
      .then(done), 2000);
  });
  it('worker responds to ping', done => {
    po
      .ping()
      .then(result => {
        expect(result).toBe('pong');
      })
      .then(done);
  });
  it('sends push notifications', done => {
    po
      .registerForPush()
      .then(result => JSON.parse(result))
      .then(reg => po
        .waitForPush()
        .then(() => sendPush(reg, {
          notification: {
            title: 'push notification test',
            body: 'this is a test of push notifications',
            requireInteraction: true
          },
          message: 'hello from the server'
        }))
      )
      .then(() => po.asyncResult)
      .then(result => JSON.parse(result))
      .then(result => {
        expect(result['message']).toBe('hello from the server');
      })
      .then(done);
  });
  it('updates the page', done => {
    server.addResponse('/ngsw-manifest.json', JSON.stringify(UPDATE_MANIFEST));
    server.addResponse('/hello.txt', 'Hola mundo!');
    server.addResponse('/goodbye.txt', 'Should not be re-fetched.');
    po
      .checkForUpdate()
      .then(updated => expect(updated).toBeTruthy())
      .then(() => browser.refresh())
      .then(() => server.addResponse('/hello.txt', 'Should not be re-fetched either.'))
      .then(() => po.request('/hello.txt'))
      .then(result => expect(result).toBe('Hola mundo!'))
      .then(() => po.request('/goodbye.txt'))
      .then(result => expect(result).toBe('Goodbye world!'))
      .then(() => done());
  });
});