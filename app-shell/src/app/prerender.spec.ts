import {inject, TestBed} from '@angular/core/testing';
import {IS_PRERENDER} from './prerender';
import {AppShellModule} from './module';

export default function () {
  describe('IS_PRERENDER', () => {
    it('should be true at prerender time', () => {
      const prerender = TestBed
        .configureTestingModule({imports: [AppShellModule.prerender()]})
        .get(IS_PRERENDER);
      expect(prerender).toBeTruthy();
    });
    it('should be false at runtime', () => {
      const prerender = TestBed
        .configureTestingModule({imports: [AppShellModule.runtime()]})
        .get(IS_PRERENDER);
      expect(prerender).toBeFalsy();
    });
  });
}
