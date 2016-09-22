import {ASTNode} from '../../ast';
import {TemplateParser} from '../template-parser';

import './tokenizer-case-sensitivity-patch';
import './drop-named-entities-patch';

var Parser = require('../../../../vendor/parse5/lib/parser');
var Serializer = require('../../../../vendor/parse5/lib/serializer');

export class Parse5TemplateParser extends TemplateParser {
  parse(template: string): ASTNode {
    var parser = new Parser();
    return parser.parse(template);
  }

  serialize(node: ASTNode): string {
    var serializer = new Serializer(node);
    return serializer.serialize();
  }
}

