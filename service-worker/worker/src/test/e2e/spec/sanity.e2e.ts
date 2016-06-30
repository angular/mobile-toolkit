import {create, Server} from '../harness/server/server';
import {sendPush, setGCMAPIKey} from '../harness/server/push';
import {HarnessPageObject} from '../harness/server/page-object';

import fs = require('fs');

declare var browser;
declare var element;
declare var by;


let server: Server;
let po: HarnessPageObject;

const SIMPLE_MANIFEST = {
  group: {
    default: {
      version: 'test',
      url: {
        '/hello.txt': {}
      }
    }
  }
};

beforeAll(done => {
  create(8080, 'dist/src/test/e2e/harness/client').then(s => {
    server = s;
    done();
  });
});

beforeEach(() => {
  server.clearResponses();
  po = new HarnessPageObject();
});

afterEach(done => {
  po
    .log()
    .then(entries => {
      entries.forEach(entry => console.log(entry));
    })
    .then(done);
});

function expectNoServiceWorker(): Promise<void> {
  return po
    .hasServiceWorker()
    .then(workerPresent => {
      expect(workerPresent).toBeFalsy();
      console.log('expectation', workerPresent);
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
    po.installServiceWorker('/worker.js');
    po
      .hasActiveWorker()
      .then(hasWorker => {
        expect(hasWorker).toBeTruthy();
      })
      .then(done);
  });
  it('worker is not yet controlling the page', done => {
    server.addResponse('/hello.txt', 'Still from the server');
    po
      .request('/hello.txt')
      .then(response => {
        expect(response).toBe('Still from the server');
      })
      .then(done);
  });
  it('after reload, worker serves cached /hello.txt', done => {
    browser.get('/index.html');
    server.addResponse('/hello.txt', 'Goodbye world?');
    po
      .request('/hello.txt')
      .then(result => {
        expect(result).toBe('Hello world!');
      })
      .then(done);
  });
  it('worker responds to ping', done => {
    console.log('running ping test');
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
        .then(() => sendPush(reg))
      )
      .then(res => console.log('sendPush', res))
      .then(() => po.asyncResult)
      .then(value => console.log('waitForPush', `x${value}x`))
      .then(done);
  });
});

afterAll(done => {
  server.shutdown();
  done();
});
