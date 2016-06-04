import {NodeMatcher} from './node-matcher';
import {ASTNode, ASTAttribute} from '../ast';
import {CssSelector} from './css-selector';

export const cssNodeMatcherFactory = (selector: string) => {
  return new CssNodeMatcher(CssSelector.parse(selector));
};

export class CssNodeMatcher extends NodeMatcher {
  constructor(private selector: CssSelector) {
    super();
  }

  match(node: ASTNode): boolean {
    return this.matchElement(node) && this.matchAttributes(node) &&
      this.matchId(node) && this.matchClassNames(node);
  }

  private matchElement(node: ASTNode) {
    return !this.selector.element || this.selector.element === node.nodeName;
  }

  private matchAttributes(node: ASTNode) {
    const selectorAttrs = this.selector.attrs;
    const nodeAttrs = (node.attrs || []).reduce((accum: any, attr: ASTAttribute) => {
      accum[attr.name] = attr.value;
      return accum;
    }, {});
    const selectorAttrNames = Object.keys(selectorAttrs);
    if (!selectorAttrNames.length) {
      return true;
    }
    return selectorAttrNames.reduce((accum: boolean, name: string) => {
      return accum && (selectorAttrs[name] === nodeAttrs[name] ||
          // nodeAttrs[name] cannot be undefined after parsing
          // since it'll be normalized to name="" if empty
          (nodeAttrs[name] !== undefined && selectorAttrs[name] === ''));
    }, true);
  }

  private matchClassNames(node: ASTNode) {
    const selectorClasses = this.selector.classNames;
    if (!selectorClasses.length) {
      return true;
    }
    const classAttr = this.getAttribute(node, 'class');
    // We have selector by class but we don't have class attribute of the node
    if (!classAttr) {
      return false;
    }
    const classMap = classAttr.value.split(' ')
      .reduce((accum: any, val: string) => {
        accum[val] = true;
        return accum;
      }, {});
    return selectorClasses.reduce((accum: boolean, val: string) => {
      return accum && !!classMap[val];
    }, true);
  }

  private matchId(node: ASTNode) {
    const id = this.selector.elementId;
    if (!id) {
      return true;
    }
    const idAttr = this.getAttribute(node, 'id');
    if (idAttr && idAttr.value === this.selector.elementId) {
      return true;
    } else {
      return false;
    }
  }

  private getAttribute(node: ASTNode, attrName: string) {
    return (node.attrs || [])
      .filter((attr: ASTAttribute) =>
          attr.name === attrName).pop();
  }
}

