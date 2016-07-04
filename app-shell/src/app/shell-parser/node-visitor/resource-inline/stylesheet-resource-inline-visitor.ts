import {ASTNode} from '../../ast';
import {ResourceInlineVisitor} from './resource-inline-visitor';
import {WorkerScope} from '../../context';

const URL_REGEXP = /:\s+url\(['"]?(.*?)['"]?\)/gmi;

export class StylesheetResourceInlineVisitor extends ResourceInlineVisitor {

  process(node: ASTNode): Promise<ASTNode> {
    if (node.nodeName.toLowerCase() === 'style') {
      const styleNode = node.childNodes[0];
      return this.inlineAssets(styleNode.value)
        .then((content: string) => {
          styleNode.value = content;
          return node;
        });
    }
    return Promise.resolve(node);
  }

}

