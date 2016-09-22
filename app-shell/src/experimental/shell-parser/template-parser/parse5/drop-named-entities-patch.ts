var Tokenizer = require('../../../../vendor/parse5/lib/tokenizer');
var Serializer = require('../../../../vendor/parse5/lib/serializer');
var CP = require('../../../../vendor/parse5/lib/common/unicode').CODE_POINTS;
var STATES_MAP: {[key: string]: string} = {
  CHARACTER_REFERENCE_IN_DATA_STATE: 'DATA_STATE',
  CHARACTER_REFERENCE_IN_RCDATA_STATE: 'RCDATA_STATE',
  CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE: 'DATA_STATE'
};

function isAsciiDigit(cp: number) {
  return cp >= CP.DIGIT_0 && cp <= CP.DIGIT_9;
}

function isWhitespace(cp: number) {
  return cp === CP.SPACE || cp === CP.LINE_FEED || cp === CP.TABULATION || cp === CP.FORM_FEED;
}

function isAsciiUpper(cp: number) {
  return cp >= CP.LATIN_CAPITAL_A && cp <= CP.LATIN_CAPITAL_Z;
}

function isAsciiLower(cp: number) {
  return cp >= CP.LATIN_SMALL_A && cp <= CP.LATIN_SMALL_Z;
}

function isAsciiAlphaNumeric(cp: number) {
  return isAsciiDigit(cp) || isAsciiUpper(cp) || isAsciiLower(cp);
}

function isDigit(cp: number, isHex: boolean) {
  return isAsciiDigit(cp) || isHex && (cp >= CP.LATIN_CAPITAL_A && cp <= CP.LATIN_CAPITAL_F ||
				       cp >= CP.LATIN_SMALL_A && cp <= CP.LATIN_SMALL_F);
}

Serializer.escapeString = function (str: string) {
  return str;
};

// Monkey patching this method intents to decrease the bundle size
// of the runtime parser by allowing us to drop the "named_entity_trie".
Tokenizer.prototype._consumeCharacterReference = function (startCp: number, inAttr: boolean) {
  if (isWhitespace(startCp) || startCp === CP.GREATER_THAN_SIGN ||
    startCp === CP.AMPERSAND || startCp === this.additionalAllowedCp || startCp === CP.EOF) {
    this._unconsume();
    return null;
  }
  if (startCp === CP.NUMBER_SIGN) {
    var isHex = false;
    var nextCp = this._lookahead();

    if (nextCp === CP.LATIN_SMALL_X || nextCp === CP.LATIN_CAPITAL_X) {
      this._consume();
      isHex = true;
    }
    nextCp = this._lookahead();
    if (nextCp !== CP.EOF && isDigit(nextCp, isHex))
      return [this._consumeNumericEntity(isHex)];
    this._unconsumeSeveral(isHex ? 2 : 1);
    return null;
  }
  return this._reconsumeInState(STATES_MAP[this.state]);
};
