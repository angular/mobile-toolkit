import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CssSelector } from './css-selector';

describe('CssSelector', () => {

  it('should support id selectors', () => {
    const result = CssSelector.parse('#elemId');
    expect(result.elementId).toBe('elemId');
  });

  it('should support element selectors', () => {
    const result = CssSelector.parse('div');
    expect(result.element).toBe('div');
  });

  it('should support class selectors', () => {
    const result = CssSelector.parse('.foo');
    expect(result.classNames).toBeTruthy();
    expect(result.classNames.length).toBe(1);
    expect(result.classNames[0]).toBe('foo');
  });

  describe('attribute selectors', () => {

    it('should support attributes with no values', () => {
      const result = CssSelector.parse('[title]');
      expect(result.attrs['title']).toBe('');
    });

    it('should support attributes with values', () => {
      const result = CssSelector.parse('[title=random title]');
      expect(result.attrs['title']).toBe('random title');
    });

  });

  describe('complex selectors', () => {

    it('should support complex selectors', () => {
      const result = CssSelector.parse('div.foo[attr]');
      expect(result.element).toBe('div');
      expect(result.classNames[0]).toBe('foo');
      expect(result.attrs['attr']).toBe('');
    });

    it('should support complex selectors with terminals in random order', () => {
      const result = CssSelector.parse('.foo[attr=bar].qux#baz');
      expect(result.element).toBe(null);
      expect(result.attrs['attr']).toBe('bar');
      expect(result.elementId).toBe('baz');
      expect(result.classNames).toEqual(['foo', 'qux']);
    });

  });
});

