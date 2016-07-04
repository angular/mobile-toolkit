import {
  beforeEach,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';

import {ASTNode} from '../../ast';
import {MockWorkerScope, MockResponse} from '../../testing';
import {InlineStyleResourceInlineVisitor} from './';

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

  let simpleNode: ASTNode;
  let nestedAst: ASTNode;
  let multiStyles: ASTNode;
  let jpgInlineVisitor: InlineStyleResourceInlineVisitor;
  let pngJpgInlineVisitor: InlineStyleResourceInlineVisitor;
  let scope: MockWorkerScope;

  beforeEach(() => {
    scope = new MockWorkerScope();
    jpgInlineVisitor = new InlineStyleResourceInlineVisitor(scope, ['jpg']);
    pngJpgInlineVisitor = new InlineStyleResourceInlineVisitor(scope, ['png', 'jpg']);
    simpleNode = {
      attrs: [{
        name: 'style',
        value: 'color: #fff; background-image: url(bar.jpg);'
      }],
      nodeName: 'div',
    };
    multiStyles = {
      attrs: [{
        name: 'style',
        value: 'color: #fff; background-image: url(bar.jpg);'
      }, {
        name: 'style',
        value: 'color: #fff; background-image: url(baz.jpg);'
      }],
      nodeName: 'div',
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
              nodeName: 'p',
              attrs: null,
              childNodes: [
                {
                  nodeName: 'span',
                  attrs: [{
                    name: 'style',
                    value: 'color: #fff; background-image: url(bar.jpg);'
                  }],
                }
              ]
            }
          ]
        },
        {
          nodeName: 'section',
          attrs: null,
          childNodes: [
            {
              nodeName: 'span',
              attrs: [{
                name: 'style',
                value: 'font-size: 42px; background-image: url(bar.png);'
              }]
            }
          ]
        }
      ]
    };
  });

  it('should inline assets in style attribute', (done: any) => {
    scope.mockResponses['bar.jpg'] = createResponseHelper('bar', 'image/jpg');
    jpgInlineVisitor.visit(simpleNode)
      .then(() => {
        expect(simpleNode.attrs[0].value).toBe('color: #fff; background-image: url(data:image/jpg;base64,YgBhAHIA);');
        done();
      });
  });

  it('should work with nested elements', (done: any) => {
    scope.mockResponses['bar.jpg'] = createResponseHelper('bar', 'image/jpg');
    scope.mockResponses['bar.png'] = createResponseHelper('bar', 'image/png');
    pngJpgInlineVisitor.visit(nestedAst)
      .then(() => {
        expect(nestedAst.childNodes[0].childNodes[0].childNodes[0].attrs[0].value).toBe('color: #fff; background-image: url(data:image/jpg;base64,YgBhAHIA);');
        expect(nestedAst.childNodes[1].childNodes[0].attrs[0].value).toBe('font-size: 42px; background-image: url(data:image/png;base64,YgBhAHIA);');
        done();
      });
  });

  it('should always pick the last occurence of the style attribute', (done: any) => {
    scope.mockResponses['bar.jpg'] = createResponseHelper('bar', 'image/jpg');
    scope.mockResponses['baz.jpg'] = createResponseHelper('baz', 'image/jpg');
    jpgInlineVisitor.visit(multiStyles)
      .then(() => {
        expect(multiStyles.attrs[0].value).toBe('color: #fff; background-image: url(bar.jpg);');
        expect(multiStyles.attrs[1].value).toBe('color: #fff; background-image: url(data:image/jpg;base64,YgBhAHoA);');
        done();
      });
  });

});

