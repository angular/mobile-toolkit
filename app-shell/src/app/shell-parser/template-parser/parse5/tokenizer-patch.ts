var Tokenizer = require('../../../../vendor/parse5/lib/tokenizer');

// Monkey patching the lexer in order to establish
// case sensitive parsing of the input templates.
// This way we'll be able to use case sensitive attribute
// and element selectors for stripping the content that
// is not required for the App Shell.
//
// Since we're patching module's internals we cannot
// use parse5 as dependency of the App Shell since we
// won't have access to the tokenizer in order to patch
// it runtime. Because of that we distribute the entire
// Runtime Parser as a single bundle which includes parse5.
Tokenizer.prototype.getNextToken = function () {
  function replaceLastWithUppercase(token: any, prop: string, cp: number) {
    if (token) {
      let char = String.fromCharCode(cp);
      let val = token[prop];
      let last = val[val.length - 1];
      if (last && last !== char) {
        token[prop] = val.substring(0, val.length - 1) + last.toUpperCase();
      }
    }
  }
  while (!this.tokenQueue.length && this.active) {
    this._hibernationSnapshot();
    const cp = this._consume();
    if (!this._ensureHibernation()) {
      this[this.state](cp);
    }
    switch (this.state) {
      case 'TAG_NAME_STATE':
        replaceLastWithUppercase(this.currentToken, 'tagName', cp);
      break;
      case 'ATTRIBUTE_NAME_STATE':
        replaceLastWithUppercase(this.currentAttr, 'name', cp);
      break;
    }
  }
  return this.tokenQueue.shift();
};

