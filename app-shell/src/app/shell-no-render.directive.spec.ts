import {
  async,
  TestBed,
  inject
} from '@angular/core/testing';
//import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import {AppShellBuildModule, AppShellRuntimeModule} from './index';
import { ShellNoRender } from './shell-no-render.directive';

@Component({
  selector: 'test-component',
  template: `<div *shellNoRender>Rendered</div>`,
  directives: [ShellNoRender]
})
class TestComponent {}

describe('ShellNoRender Directive', () => {
  describe('prerender', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [AppShellBuildModule]
      });
    });

    it('should NOT render the element', () => {
      let fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.childNodes.length).toBe(1);
      expect(fixture.debugElement.childNodes[0].nativeNode.textContent).toBe('template bindings={}');
    });
  });


  describe('runtime', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [AppShellRuntimeModule]
      });
    });

    it('should render the element', () => {
      let fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.childNodes.length).toBe(2);
      expect(fixture.debugElement.childNodes[0].nativeNode.textContent).toBe('template bindings={}');
      expect(fixture.debugElement.childNodes[1].nativeNode.textContent).toBe('Rendered');
    });
  });
});
