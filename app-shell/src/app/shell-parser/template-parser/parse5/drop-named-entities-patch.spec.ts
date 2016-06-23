declare var require: any;
import {
  beforeEach,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';

import { Parse5TemplateParser } from './parse5-template-parser';

describe('dropped named entities patch', () => {

  let parser: Parse5TemplateParser;
  beforeEach(() => {
    parser = new Parse5TemplateParser();
  });

  describe('parse', () => {

    it('should not modify character references', () => {
      const tree = parser.parse('<body>&nbsp;</div>');
      const body = <any>(tree.childNodes[0].childNodes[1]);
      expect(body.childNodes[0].value).toBe('&nbsp;');
    });

    it('should not modify character references in attribute values', () => {
      const tree = parser.parse('<body style="&quote;"></body>');
      const body = <any>(tree.childNodes[0].childNodes[1]);
      expect(body.attrs[0].value).toBe('&quote;');
    });

  });

  describe('serialize', () => {

    it('should serialize named entities properly', () => {
      const template = parser.serialize(parser.parse('<body>&nbsp;</div>'));
      expect(template).toBe('<html><head></head><body>&nbsp;</body></html>');
    });

    it('should serialize named entities in attributes properly', () => {
      const template = parser.serialize(parser.parse('<body style="&quote;">&nbsp;</div>'));
      expect(template).toBe('<html><head></head><body style="&quote;">&nbsp;</body></html>');
    });

  });

});
