import {
  TestBed
} from '@angular/core/testing';
import { provide, Component } from '@angular/core';

import { ShellRender } from './shell-render.directive';
import {
  AppShellBuildModule,
  AppShellRuntimeModule
} from './index';

@Component({
  selector: 'test-component',
  template: `<div *shellRender>Rendered</div>`,
  directives: [ShellRender]
})
class TestComponent {}

describe('ShellRender Directive', () => {
  describe('prerender', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [AppShellBuildModule]
      })
    });

    it('should render the element', () => {
      let fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.childNodes.length).toBe(2);
      expect(fixture.debugElement.childNodes[0].nativeNode.textContent).toBe('template bindings={}');
      expect(fixture.debugElement.childNodes[1].nativeNode.textContent).toBe('Rendered');
    });
  });


  describe('runtime', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [AppShellRuntimeModule]
      })
    });

    it('should NOT render the element', () => {
      let fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.childNodes.length).toBe(1);
      expect(fixture.debugElement.childNodes[0].nativeNode.textContent).toBe('template bindings={}');
    });
  });
});


