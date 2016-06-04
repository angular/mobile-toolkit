import {ASTNode} from '../ast';
import {TemplateParser} from './template-parser';
import * as Parse5 from 'parse5';

export class Parse5TemplateParser extends TemplateParser {
  parse(template: string): ASTNode {
    return Parse5.parse(template);
  }

  serialize(node: ASTNode): string {
    return Parse5.serialize(<any>node);
  }
}

