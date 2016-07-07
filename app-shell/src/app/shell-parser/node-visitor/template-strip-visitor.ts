import {ASTNode} from '../ast';
import {NodeVisitor} from './node-visitor';
import {WorkerScope} from '../context';
import {CssNodeMatcher} from '../node-matcher';

export class TemplateStripVisitor extends NodeVisitor {

  constructor(private matcher: CssNodeMatcher) {
    super();
  }

  process(node: ASTNode) {
    if (this.matcher.match(node)) {
      if (node.parentNode) {
        const c = node.parentNode.childNodes;
        c.splice(c.indexOf(node), 1);
      }
      return Promise.resolve(null);
    }
    return Promise.resolve(node);
  }

}

