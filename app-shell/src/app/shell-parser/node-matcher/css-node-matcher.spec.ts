import {
  beforeEach,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ASTNode } from '../ast';
import { CssSelector } from './css-selector';
import { CssNodeMatcher } from './css-node-matcher';

describe('CssNodeMatcher', () => {

  var node: ASTNode;
  beforeEach(() => {
    node = {
      attrs: [
        { name: 'foo', value: 'bar' },
        { name: 'class', value: 'dialog modal--drop' },
        { name: 'id', value: 'dialog-id' }
      ],
      nodeName: 'div',
      parentNode: null
    };
  });

  describe('successful match', () => {

    it('should match any node with empty selector', () => {
      const emptySelector = CssSelector.parse('');
      const selector = new CssNodeMatcher(emptySelector);
      expect(selector.match(node)).toBe(true);
    });

    it('should match basic element selector', () => {
      const elementSelector = CssSelector.parse('div');
      const selector = new CssNodeMatcher(elementSelector);
      expect(selector.match(node)).toBe(true);
    });

    it('should match attribute selector', () => {
      const attrSelector = CssSelector.parse('[foo=bar]');
      const selector = new CssNodeMatcher(attrSelector);
      expect(selector.match(node)).toBe(true);
    });

    it('should match attribute selector when no value is provided', () => {
      const attrSelector = CssSelector.parse('[foo]');
      const selector = new CssNodeMatcher(attrSelector);
      expect(selector.match(node)).toBe(true);
    });

    it('should match class selector', () => {
      const classSelector = CssSelector.parse('.dialog');
      const selector = new CssNodeMatcher(classSelector);
      expect(selector.match(node)).toBe(true);
      const complexClassSelector = CssSelector.parse('.dialog.modal--drop');
      const complexSelector = new CssNodeMatcher(complexClassSelector);
      expect(complexSelector.match(node)).toBe(true);
    });

    it('should match case insensitive class selector', () => {
      const classSelector = CssSelector.parse('.DIALOG');
      const selector = new CssNodeMatcher(classSelector);
      expect(selector.match(node)).toBe(true);
      const complexClassSelector = CssSelector.parse('.dialog.modal--drop');
      const complexSelector = new CssNodeMatcher(complexClassSelector);
      expect(complexSelector.match(node)).toBe(true);
    });

    it('should match element by id', () => {
      const idSelector = CssSelector.parse('#dialog-id');
      const selector = new CssNodeMatcher(idSelector);
      expect(selector.match(node)).toBe(true);
    });

  });

  describe('unsuccessful match', () => {

    it('should fail when different element is used', () => {
      const elementSelector = CssSelector.parse('span');
      const selector = new CssNodeMatcher(elementSelector);
      expect(selector.match(node)).toBe(false);
    });

    it('should fail when different attribute selector is provided', () => {
      const attrSelector = CssSelector.parse('[foo=qux]');
      const selector = new CssNodeMatcher(attrSelector);
      expect(selector.match(node)).toBe(false);
    });

    it('should fail when non-matching class selector is used', () => {
      const classSelector = CssSelector.parse('.modal');
      const selector = new CssNodeMatcher(classSelector);
      expect(selector.match(node)).toBe(false);
      const complexClassSelector = CssSelector.parse('.dialog.modal-drop');
      const complexSelector = new CssNodeMatcher(complexClassSelector);
      expect(complexSelector.match(node)).toBe(false);
    });

    it('should fail when superset of attributes is used in selector', () => {
      const cssSelector = CssSelector.parse('[foo=bar][baz=bar]');
      const selector = new CssNodeMatcher(cssSelector);
      expect(selector.match(node)).toBe(false);
    });

    it('should fail when superset of attributes is used in selector', () => {
      const cssSelector = CssSelector.parse('[no-render]');
      const selector = new CssNodeMatcher(cssSelector);
      expect(selector.match(node)).toBe(false);
    })

    it('should fail match by id when element has no id', () => {
      const cssSelector = CssSelector.parse('#foo');
      const selector = new CssNodeMatcher(cssSelector);
      const node1: ASTNode = {
        nodeName: 'div',
        parentNode: null,
        attrs: []
      };
      const node2: ASTNode = {
        attrs: [
          { name: 'not-id', value: '' }
        ],
        nodeName: 'div',
        parentNode: null
      };
      expect(selector.match(node1)).toBe(false);
      expect(selector.match(node2)).toBe(false);
    });

  });
});

