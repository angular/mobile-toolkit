import { Injectable } from '@angular/core';
import { __platform_browser_private__ as _ } from '@angular/platform-browser';

import { TemplateVisibilityStrategy } from './template-visibility-strategy';

@Injectable()
export class TemplateCommentStrategy extends TemplateVisibilityStrategy {
  private _hidden: any[] = [];
  private _shown: any[] = [];

  show(marker: string) {
    (this._rootNodes[marker] || [])
      .filter((node: any) => this._shown.indexOf(node) < 0)
      .forEach((node: any) => {
        _.getDOM().setAttribute(node, marker, '');
        this._shown.push(node);
      });
  }

  hide(marker: string) {
    const DOM = _.getDOM();
    (this._rootNodes[marker] || [])
      .filter((node: any) => this._hidden.indexOf(node) < 0)
      .forEach((node: any) => {
        const comment = DOM.createComment(`${marker}(${DOM.getOuterHTML(node)})`);
        const parentNode = DOM.parentElement(node);
        DOM.replaceChild(parentNode, comment, node);
        this._hidden.push(node);
      });
  }
}
