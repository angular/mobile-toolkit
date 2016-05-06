import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import {
  APP_SHELL_BUILD_PROVIDERS,
  APP_SHELL_RUNTIME_PROVIDERS,
  IS_PRERENDER
} from './is-prerender.service';

describe('IsPrerender Service', () => {
  describe('prerender', () => {
    beforeEachProviders(() => [APP_SHELL_BUILD_PROVIDERS]);

    it('should be true at build time',
      inject([IS_PRERENDER], (service: boolean) => {
      expect(service).toBeTruthy();
    }));
  });


  describe('runtime', () => {
    beforeEachProviders(() => [APP_SHELL_RUNTIME_PROVIDERS]);

    it('should be false at runtime',
      inject([IS_PRERENDER], (service: boolean) => {
      expect(service).toBeFalsy();
    }));
  });



});
