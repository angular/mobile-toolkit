import {ASTNode} from '../ast';

export abstract class TemplateParser {
  abstract parse(template: string): ASTNode;
  abstract serialize(node: ASTNode): string;
}

