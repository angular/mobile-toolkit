import {ASTNode} from '../ast';
import {TemplateParser} from '../template-parser';
import {NodeVisitor} from './node-visitor';

export class TemplateRecoverVisitor extends NodeVisitor {

  constructor(private marker: string, private parser: TemplateParser) {
    super();
  }

  process(node: ASTNode) {
    const regexp = new RegExp(`^${this.marker}\\(\\s*([\\s\\S]*)\\)$`);
    if (node.nodeName === '#comment' && regexp.test(node.data)) {
      const template = node.data.match(regexp)[1];
      // Returns a #document-fragment node with multiple childs.
      // The regular expression above should strip all the whitespace before
      // the HTML fragment so once the parser parses the HTML fragment,
      // the first should should be our target node.
      const replacement = this.parser.parseFragment(template).childNodes.shift();
      if (node.parentNode) {
        const commentIdx = node.parentNode.childNodes.indexOf(node);
        node.parentNode.childNodes[commentIdx] = replacement;
      }
      return Promise.resolve(replacement);
    }
    return Promise.resolve(node);
  }

}
