import {ASTNode} from '../ast';

export abstract class NodeVisitor {

  abstract process(node: ASTNode): Promise<ASTNode>;

  visit(currentNode: ASTNode): Promise<ASTNode> {
    return this.process(currentNode)
      .then((node: ASTNode) => {
        if (node) {
          return Promise
            .all((node.childNodes || [])
              .slice()
              .map(this.visit.bind(this)))
            .then(() => node);
        } else {
          return null;
        }
      })
  }

}

