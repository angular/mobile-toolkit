import './tokenizer-case-sensitivity-patch';

import {
  beforeEach,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';

var Tokenizer = require('../../../../vendor/parse5/lib/tokenizer');

describe('tokenizer\'s patch', () => {

  let lexer: any;
  beforeEach(() => {
    lexer = new Tokenizer();
  });

  it('should keep case sensntivity of elements', () => {
    lexer.write('<DiV></DiV>');
    const openDiv = lexer.getNextToken();
    expect(openDiv.type).toBe('START_TAG_TOKEN');
    expect(openDiv.tagName).toBe('DiV');
    expect(openDiv.selfClosing).toBe(false);

    const closeDiv = lexer.getNextToken();
    expect(closeDiv.type).toBe('END_TAG_TOKEN');
    expect(closeDiv.tagName).toBe('DiV');
  });

  it('should preserve case sensitivity of complex elements', () => {
    lexer.write('<mY-ApP></mY-ApP>');
    const open = lexer.getNextToken();
    expect(open.tagName).toBe('mY-ApP');
    const close = lexer.getNextToken();
    expect(close.tagName).toBe('mY-ApP');
  });

  it('should keep case sensitivity of attrs', () => {
    lexer.write('<dIV StYlE="color: red;"></dIV>');
    const div = lexer.getNextToken();
    expect(div.tagName).toBe('dIV');
    expect(div.attrs[0].name).toBe('StYlE');
    expect(div.attrs[0].value).toBe('color: red;');
  });

});

