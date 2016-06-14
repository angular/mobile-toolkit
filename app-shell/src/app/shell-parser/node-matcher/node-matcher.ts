import {ASTNode} from '../ast';

export abstract class NodeMatcher {
  abstract match(node: ASTNode): boolean;
}

