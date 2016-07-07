import {
  beforeEach,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';

import {ASTNode} from '../ast';
import {cssNodeMatcherFactory} from '../node-matcher';
import {MockWorkerScope, MockResponse} from '../testing';
import {TemplateStripVisitor} from './';

describe('TemplateStripVisitor', () => {

  let astRoot: ASTNode;

  beforeEach(() => {
    astRoot = {
      nodeName: 'div',
      attrs: [],
      childNodes: []
    };
    const div1: ASTNode = { nodeName: 'div', attrs: [{ name: 'class', value: 'foo' }] };
    const section: ASTNode = {
      nodeName: 'section',
      attrs: [],
      parentNode: astRoot,
      childNodes: [
        div1
      ]
    };
    div1.parentNode = section;
    const span1: ASTNode = { nodeName: 'span', childNodes: [], attrs: [], parentNode: astRoot };
    const div2: ASTNode = {
      nodeName: 'div',
      parentNode: span1,
      attrs: [{ name: 'class', value: 'foo' }]
    };
    span1.childNodes.push(div2);
    const span2: ASTNode = { nodeName: 'span', attrs: [], parentNode: astRoot }
    astRoot.childNodes.push(section);
    astRoot.childNodes.push(span1);
    astRoot.childNodes.push(span2);
  });

  it('should strip the root when match', (done: any) => {
    let stripper = new TemplateStripVisitor(cssNodeMatcherFactory('div'));
    stripper.visit(astRoot)
      .then((astNode: ASTNode) => {
        expect(astNode).toBe(null);
      });
    done();
  });

  it('should strip all nodes matching a selector', (done: any) => {
    let stripper = new TemplateStripVisitor(cssNodeMatcherFactory('span'));
    stripper.visit(astRoot)
      .then((astNode: ASTNode) => {
        expect(astNode.childNodes.length).toBe(1);
        done();
      });
  });

  it('should strip nodes in different areas of the tree', (done: any) => {
    let stripper = new TemplateStripVisitor(cssNodeMatcherFactory('.foo'));
    stripper.visit(astRoot)
      .then((astNode: ASTNode) => {
        // div > section > div.foo to be removed
        expect(astNode.childNodes[0].childNodes.length).toBe(0);
        // div > span > div.foo to be removed
        expect(astNode.childNodes[1].childNodes.length).toBe(0);
        done();
      });
  });

});

