import {ASTNode, ASTAttribute} from '../../ast';
import {ResourceInlineVisitor} from './resource-inline-visitor';
import {WorkerScope} from '../../context';

const URL_REGEXP = /:\s+url\(['"]?(.*?)['"]?\)/gmi;

export class InlineStyleResourceInlineVisitor extends ResourceInlineVisitor {

  process(node: ASTNode): Promise<ASTNode> {
    const styleAttr = (node.attrs || [])
      .filter((a: ASTAttribute) => a.name === 'style')
      .pop();
    if (styleAttr) {
      return this.inlineAssets(styleAttr.value)
        .then((content: string) => {
          styleAttr.value = content;
          return node;
        });
    }
    return Promise.resolve(node);
  }

}

