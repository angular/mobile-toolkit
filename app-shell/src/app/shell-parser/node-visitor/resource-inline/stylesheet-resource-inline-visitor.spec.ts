import {
  beforeEach,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';

import {ASTNode} from '../../ast';
import {MockWorkerScope, MockResponse} from '../../testing';
import {StylesheetResourceInlineVisitor} from './';

const createResponseHelper = (body: string, contentType: string) => {
  const response = new MockResponse(body);
  response.headers = {
    get(name: string) {
      if (name === 'content-type') {
        return contentType;
      }
    }
  };
  return response;
};

describe('ResourceInlineVisitor', () => {

  let astRoot: ASTNode;
  let nestedAst: ASTNode;
  let simpleNode: ASTNode;
  let jpgInlineVisitor: StylesheetResourceInlineVisitor;
  let pngJpgInlineVisitor: StylesheetResourceInlineVisitor;
  let scope: MockWorkerScope;

  beforeEach(() => {
    scope = new MockWorkerScope();
    jpgInlineVisitor = new StylesheetResourceInlineVisitor(scope, ['jpg']);
    pngJpgInlineVisitor = new StylesheetResourceInlineVisitor(scope, ['png', 'jpg']);
    simpleNode = {
      attrs: null,
      nodeName: 'style',
      childNodes: [
        {
          nodeName: '#text',
          attrs: null,
          value: `
            .bar {
              background-image: url(bar.jpg);
            }
          `
        }
      ]
    };

    astRoot = {
      attrs: null,
      nodeName: 'style',
      childNodes: [
        {
          nodeName: '#text',
          attrs: null,
          value: `
            .bar {
              background-image: url('bar.jpg');
              background-color: #ccc;
            }
            .baz {
              background-image: url(bar.jpg);
            }
            .baz {
              background-image: url("foo.png");
            }
          `
        }
      ]
    };

    nestedAst = {
      nodeName: 'body',
      attrs: null,
      childNodes: [
        {
          nodeName: 'div',
          attrs: null,
          childNodes: [
            {
              nodeName: 'style',
              attrs: null,
              childNodes: [
                {
                  nodeName: '#text',
                  attrs: null,
                  value: `
                    bar {
                      background-image: url('bar.jpg');
                    }
                  `
                }
              ]
            }
          ]
        },
        {
          nodeName: 'style',
          attrs: null,
          childNodes: [
            {
              nodeName: '#text',
              attrs: null,
              value: `
                baz {
                  background-image: url(bar.jpg);
                }
                foo {
                  background-image: url('bar.svg');
                }
              `
            }
          ]
        }
      ]
    };
  });

  it('should replace image with base64 representation', (done: any) => {
    scope.mockResponses['bar.jpg'] = createResponseHelper('image', 'image/jpg');
    jpgInlineVisitor.visit(simpleNode)
      .then(() => {
        expect(simpleNode.childNodes[0]).not.toBeFalsy();
        expect(simpleNode.childNodes[0].value).toBe(
               `
            .bar {
              background-image: url(data:image/jpg;base64,aQBtAGEAZwBlAA==);
            }
          `);
        done();
      });
  });

  it('should replace images in multiple styles', (done: any) => {
    scope.mockResponses['foo.png'] = createResponseHelper('foo', 'image/png');
    scope.mockResponses['bar.jpg'] = createResponseHelper('bar', 'image/jpg');
    pngJpgInlineVisitor.visit(astRoot)
      .then(() => {
        const styles = astRoot.childNodes[0].value;
        expect(styles).not.toBeFalsy();
        expect(styles).toBe(`
            .bar {
              background-image: url('data:image/jpg;base64,YgBhAHIA');
              background-color: #ccc;
            }
            .baz {
              background-image: url(data:image/jpg;base64,YgBhAHIA);
            }
            .baz {
              background-image: url("data:image/png;base64,ZgBvAG8A");
            }
          `
        );
        done();
      });
  });

  it('should handle invalid requests', (done: any) => {
    jpgInlineVisitor.visit(simpleNode)
      .then(() => {
        expect(simpleNode.childNodes[0].value).toBe(
               `
            .bar {
              background-image: url(bar.jpg);
            }
          `);
        done();
      });
  });

  it('should work with nested elements', (done: any) => {
    scope.mockResponses['bar.jpg'] = createResponseHelper('bar', 'image/jpg');
    pngJpgInlineVisitor.visit(nestedAst)
      .then(() => {
        let s1 = nestedAst.childNodes[0].childNodes[0].childNodes[0].value;
        let s2 = nestedAst.childNodes[1].childNodes[0].value;
        expect(s1).toBe(`
                    bar {
                      background-image: url('data:image/jpg;base64,YgBhAHIA');
                    }
                  `);
        expect(s2).toBe(`
                baz {
                  background-image: url(data:image/jpg;base64,YgBhAHIA);
                }
                foo {
                  background-image: url('bar.svg');
                }
              `);
        done();
      });
  });

});

