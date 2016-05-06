import {
  async,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { ShellNoRender } from './shell-no-render.directive';
import {
  APP_SHELL_BUILD_PROVIDERS,
  APP_SHELL_RUNTIME_PROVIDERS
} from './is-prerender.service';

@Component({
  selector: 'test-component',
  template: `<div *shellNoRender>Rendered</div>`,
  directives: [ShellNoRender]
})
class TestComponent {}

describe('ShellNoRender Directive', () => {
  describe('prerender', () => {
    beforeEachProviders((): any[] => [APP_SHELL_BUILD_PROVIDERS]);

    it('should NOT render the element', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        expect(fixture.debugElement.childNodes.length).toBe(1);
        expect(fixture.debugElement.childNodes[0].nativeNode.textContent).toBe('template bindings={}');
      });
    })));
  });


  describe('runtime', () => {
    beforeEachProviders((): any[] => [APP_SHELL_RUNTIME_PROVIDERS]);

    it('should render the element', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
      return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) => {
        fixture.detectChanges();
        expect(fixture.debugElement.childNodes.length).toBe(2);
        expect(fixture.debugElement.childNodes[0].nativeNode.textContent).toBe('template bindings={}');
        expect(fixture.debugElement.childNodes[1].nativeNode.textContent).toBe('Rendered');
      });
    })));
  });
});
