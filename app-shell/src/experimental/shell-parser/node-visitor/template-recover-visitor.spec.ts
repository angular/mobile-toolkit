import {ASTNode} from '../ast';
import {TemplateRecoverVisitor} from './';
import {Parse5TemplateParser} from '../template-parser';

describe('TemplateRecoverVisitor', () => {

  let astRoot: ASTNode;
  let nestedNode: ASTNode;
  let differentComments: ASTNode;

  beforeEach(() => {
    astRoot = {
      nodeName: '#comment',
      attrs: null,
      data: 'shellRender(<div>Hello world!</div>)'
    };
    const comment2: ASTNode = {
      nodeName: '#comment',
      attrs: null,
      data: 'shellRender(<div>)<span>Test</span></div>)'
    };
    const span: ASTNode = {
      nodeName: 'span',
      attrs: null,
      childNodes: [comment2]
    };
    comment2.parentNode = span;
    const section: ASTNode = {
      nodeName: 'section',
      attrs: null
    };
    const comment1: ASTNode = {
      nodeName: '#comment',
      attrs: null,
      data: 'shellRender(bar)'
    };
    nestedNode = {
      childNodes: [span, section, comment1],
      attrs: null,
      nodeName: 'div'
    };
    span.parentNode = nestedNode;
    comment1.parentNode = nestedNode;
    section.parentNode = nestedNode;

    const nonMatchingComment1: ASTNode = {
      nodeName: '#comment',
      attrs: null,
      data: 'bindings {}'
    };
    const nonMatchingComment2: ASTNode = {
      nodeName: '#comment',
      attrs: null,
      data: 'shellRender(test)'
    };
    const matchingComment: ASTNode = {
      nodeName: '#comment',
      attrs: null,
      data: 'shellNoRender(<div></div>)'
    };
    differentComments = {
      nodeName: 'div',
      attrs: null,
      childNodes: [nonMatchingComment1, matchingComment, nonMatchingComment2]
    };
    nonMatchingComment1.parentNode = differentComments;
    nonMatchingComment2.parentNode = differentComments;
    matchingComment.parentNode = differentComments;
  });

  it('should process top-level comments', (done: any) => {
    const visitor = new TemplateRecoverVisitor('shellRender', new Parse5TemplateParser());
    visitor.visit(astRoot)
      .then((node: ASTNode) => {
        expect(node.nodeName).toBe('div');
        expect(node.childNodes.length).toBe(1);
        expect(node.childNodes[0].value).toBe('Hello world!');
        done();
      });
  });

  it('should process nested nodes', (done: any) => {
    const visitor = new TemplateRecoverVisitor('shellRender', new Parse5TemplateParser());
    visitor.visit(nestedNode)
      .then((node: ASTNode) => {
        const span = nestedNode.childNodes[0];
        expect(span.childNodes.length).toBe(1);
        expect(span.childNodes[0].nodeName).toBe('div');
        expect(span.childNodes[0].childNodes.length).toBe(2);
        expect(span.childNodes[0].childNodes[0].value).toBe(')');
        expect(span.childNodes[0].childNodes[1].nodeName).toBe('span');
        expect(node.childNodes[2].nodeName).toBe('#text');
        expect(node.childNodes[2].value).toBe('bar');
        done();
      });
  });

  it('should process only nodes with appropriate marker', (done: any) => {
    const visitor = new TemplateRecoverVisitor('shellNoRender', new Parse5TemplateParser());
    visitor.visit(differentComments)
      .then((node: ASTNode) => {
        expect(node.childNodes[0].nodeName).toBe('#comment');
        expect(node.childNodes[0].data).toBe('bindings {}');
        expect(node.childNodes[1].nodeName).toBe('div');
        expect(node.childNodes[2].nodeName).toBe('#comment');
        expect(node.childNodes[2].data).toBe('shellRender(test)');
        done();
      });
  });

});
