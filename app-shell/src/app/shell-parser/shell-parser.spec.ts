import {
  beforeEach,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import {BrowserWorkerScope, WorkerScope} from './context';
import {ShellParserConfig, SHELL_PARSER_DEFAULT_CONFIG} from './config';
import {cssNodeMatcherFactory} from './node-matcher';
import {Parse5TemplateParser} from './template-parser';
import {normalizeConfig} from './shell-parser-factory';
import {ShellParserImpl} from './shell-parser';
import {
  MockWorkerScope,
  MockResponse,
  MockRequest,
  MockCacheStorage
} from './testing';

const prerenderedTemplate = `
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <header>
    <h1>Hey I'm appshell!</h1>
  </header>
  <content shellNoRender>
    <p>Hello world</p>
  </content>
  <div shellNoRender class="bar baz">
  </div>
</body>
</html>
`;

const strippedWithDefaultSelector = `
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <header>
    <h1>Hey I'm appshell!</h1>
  </header>
</body>
</html>
`;

const strippedContent = `
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <header>
    <h1>Hey I'm appshell!</h1>
  </header>
  <div shellNoRender="" class="bar baz">
  </div>
</body>
</html>
`;

const strippedWithComposedSelector = `
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <header>
    <h1>Hey I'm appshell!</h1>
  </header>
  <content shellNoRender="">
    <p>Hello world</p>
  </content>
</body>
</html>
`;

const normalize = (template: string) =>
  template
    .replace(/^\s+/gm, '')
    .replace(/\s+$/gm, '')
    .replace(/\n/gm, '');

const createMockedWorker = (mockScope: MockWorkerScope, config: ShellParserConfig = {}) => {
  config = normalizeConfig(config);
  return new ShellParserImpl(
      config,
      new Parse5TemplateParser(),
      cssNodeMatcherFactory(config.NO_RENDER_CSS_SELECTOR),
      mockScope);
};

describe('ShellParserImpl', () => {

  describe('fetch', () => {

    it('should use the default url by default', (done: any) => {
      const mockScope = new MockWorkerScope();
      const parser = createMockedWorker(mockScope);
      mockScope.mockResponses[SHELL_PARSER_DEFAULT_CONFIG.APP_SHELL_URL] = new MockResponse('foo');
      parser.fetchDoc()
        .then((res: MockResponse) => res.text())
        .then((data: string) => {
          expect(data).toBe('foo');
          done();
        });
    });

    it('should use the configured url when set', (done: any) => {
      const url = './view-for-app-shell.html';
      const mockScope = new MockWorkerScope();
      const parser = createMockedWorker(mockScope, {
        APP_SHELL_URL: url
      });
      mockScope.mockResponses[url] = new MockResponse('bar');
      parser.fetchDoc()
        .then((res: MockResponse) => res.text())
        .then((data: string) => {
          expect(data).toBe('bar');
          done();
        });
    });
  });

  describe('parseDoc', () => {

    it('should strip with default selector', (done: any) => {
      const mockScope = new MockWorkerScope();
      const parser = createMockedWorker(mockScope);
      const response = new MockResponse(prerenderedTemplate);
      parser.parseDoc(response)
        .then((response: any) => response.text())
        .then((template: string) => {
          expect(normalize(template)).toBe(normalize(strippedWithDefaultSelector));
          done();
        });
    });

    it('should strip with nested selector', (done: any) => {
      const mockScope = new MockWorkerScope();
      const parser = createMockedWorker(mockScope, {
        NO_RENDER_CSS_SELECTOR: 'content[shellNoRender]'
      });
      const response = new MockResponse(prerenderedTemplate);
      parser.parseDoc(response)
        .then((response: any) => response.text())
        .then((template: string) => {
          expect(normalize(template)).toBe(normalize(strippedContent));
          done();
        });
    });

    it('should strip with nested selector', (done: any) => {
      const mockScope = new MockWorkerScope();
      const parser = createMockedWorker(mockScope, {
        NO_RENDER_CSS_SELECTOR: '[shellNoRender].bar'
      });
      const response = new MockResponse(prerenderedTemplate);
      parser.parseDoc(response)
        .then((response: any) => response.text())
        .then((template: string) => {
          expect(normalize(template)).toBe(normalize(strippedWithComposedSelector));
          done();
        });
    });

    it('should return content type "text/html" with status 200', (done: any) => {
      const mockScope = new MockWorkerScope();
      const parser = createMockedWorker(mockScope, {
        NO_RENDER_CSS_SELECTOR: '[shellNoRender].bar'
      });
      const response = new MockResponse(prerenderedTemplate);
      parser.parseDoc(response)
        .then((response: any) => {
          expect(response.status).toBe(200);
          expect(response.headers['content-type']).toBe('text/html');
        })
        .then(done);
    });

    describe('match', () => {

      it('should match routes added to the config', (done: any) => {
        const mockScope = new MockWorkerScope();
        const SHELL_PARSER_CACHE_NAME = 'mock';
        const APP_SHELL_URL = './shell.html';
        mockScope.currentCaches = new MockCacheStorage();
        mockScope.caches
          .open(SHELL_PARSER_CACHE_NAME)
          .then((cache: any) => {
            cache.put(new MockRequest(APP_SHELL_URL), new MockResponse('foo'));
            const parser = createMockedWorker(mockScope, {
              SHELL_PARSER_CACHE_NAME,
              APP_SHELL_URL,
              ROUTE_DEFINITIONS: ['/home', '/about/new']
            });
            Promise.all([
              parser.match(new MockRequest('/home'))
                .then((response: MockResponse) => response.text())
                .then((data: string) => {
                  expect(data).toBe('foo');
                  return data;
                }),
              parser.match(new MockRequest('/about/new'))
                .then((response: MockResponse) => response.text())
                .then((data: string) => {
                  expect(data).toBe('foo');
                  return data;
                })
              ])
              .then(done);
          });
      });

      it('should match routes with parameters added to the config', (done: any) => {
        const mockScope = new MockWorkerScope();
        const SHELL_PARSER_CACHE_NAME = 'mock';
        const APP_SHELL_URL = './shell.html';
        mockScope.currentCaches = new MockCacheStorage();
        mockScope.caches
          .open(SHELL_PARSER_CACHE_NAME)
          .then((cache: any) => {
            cache.put(new MockRequest(APP_SHELL_URL), new MockResponse('foo'));
            const parser = createMockedWorker(mockScope, {
              SHELL_PARSER_CACHE_NAME,
              APP_SHELL_URL,
              ROUTE_DEFINITIONS: ['/home/:id', '/about/:bar/:foo/new/:baz']
            });
            Promise.all([
              parser.match(new MockRequest('/home/312'))
                .then((response: MockResponse) => response.text())
                .then((data: string) => {
                  expect(data).toBe('foo');
                  return data;
                }),
              parser.match(new MockRequest('/about/42/12/new/foo'))
                .then((response: MockResponse) => response.text())
                .then((data: string) => {
                  expect(data).toBe('foo');
                  return data;
                })
              ])
              .then(done);
          });
      });

      it('should return falsy value for non-matching route', (done: any) => {
        const mockScope = new MockWorkerScope();
        const SHELL_PARSER_CACHE_NAME = 'mock';
        const APP_SHELL_URL = './shell.html';
        mockScope.currentCaches = new MockCacheStorage();
        mockScope.caches
          .open(SHELL_PARSER_CACHE_NAME)
          .then((cache: any) => {
            cache.put(new MockRequest(APP_SHELL_URL), new MockResponse('foo'));
            const parser = createMockedWorker(mockScope, {
              SHELL_PARSER_CACHE_NAME,
              APP_SHELL_URL,
              ROUTE_DEFINITIONS: ['/about/:bar/:foo/new/:another']
            });
            parser.match(new MockRequest('/home'))
              .then((data: any) => {
                expect(data).toBe(null);
                done();
              })
          });
      });

    });
  });
});

