import { Directive, Inject, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';
import {IS_PRERENDER} from './prerender';

@Directive({
  selector: '[shellNoRender]'
})
export class ShellNoRender implements OnInit {

  constructor(
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<Object>,
    @Inject(IS_PRERENDER) private _isPrerender: boolean) {}

  ngOnInit() {
    if (this._isPrerender) {
      this._viewContainer.clear();
    } else {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }
}

@Directive({
  selector: '[shellRender]'
})
export class ShellRender implements OnInit {
  constructor(
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<Object>,
    @Inject(IS_PRERENDER) private _isPrerender: boolean) {}

  ngOnInit() {
    if (this._isPrerender) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
