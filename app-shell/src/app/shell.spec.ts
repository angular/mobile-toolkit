import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {AppShellModule} from './module';
import {ShellNoRender, ShellRender} from './shell';

export default function () {
  describe('ShellNoRender Directive', () => {
    @Component({
      selector: 'test-component',
      template: `<div *shellNoRender>Rendered</div>`,
    })
    class NoRenderTestComponent {}

    it('should NOT render the element at prerender time', () => {
      const fixture = TestBed
        .configureTestingModule({
          declarations: [NoRenderTestComponent],
          imports: [AppShellModule.prerender()]
        })
        .createComponent(NoRenderTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.childNodes.length).toBe(1);
      expect(fixture.debugElement.childNodes[0].nativeNode.data).toBe('template bindings={}');
    });
    it('should render the element at runtime', () => {
      const fixture = TestBed
        .configureTestingModule({
          declarations: [NoRenderTestComponent],
          imports: [AppShellModule.runtime()]
        })
        .createComponent(NoRenderTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.childNodes.length).toBe(2);
      expect(fixture.debugElement.childNodes[0].nativeNode.data).toBe('template bindings={}');
      expect(fixture.debugElement.childNodes[1].nativeNode.name).toBe('div');
    });
  });

  describe('ShellRender Directive', () => {
    @Component({
      selector: 'test-component',
      template: `<div *shellRender>Rendered</div>`,
    })
    class RenderTestComponent {}

    it('should render the element at prerender time', () => {
      const fixture = TestBed
        .configureTestingModule({
          declarations: [RenderTestComponent],
          imports: [AppShellModule.prerender()],
        })
        .createComponent(RenderTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.childNodes.length).toBe(2);
      expect(fixture.debugElement.childNodes[0].nativeNode.data).toBe('template bindings={}');
      expect(fixture.debugElement.childNodes[1].nativeNode.name).toBe('div');
    });
    it('should NOT render the element at runtime', () => {
      const fixture = TestBed
        .configureTestingModule({
          declarations: [RenderTestComponent],
          imports: [AppShellModule.runtime()],
        })
        .createComponent(RenderTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.childNodes.length).toBe(1);
      expect(fixture.debugElement.childNodes[0].nativeNode.data).toBe('template bindings={}');
    });
  });
}
