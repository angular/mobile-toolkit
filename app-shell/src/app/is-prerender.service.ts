import {OpaqueToken, provide, Provider} from '@angular/core';

export const IS_PRERENDER = new OpaqueToken('IsPrerender');

export const APP_SHELL_RUNTIME_PROVIDERS: Provider[] = [
  provide(IS_PRERENDER, {
    useValue: false
  })
];

export const APP_SHELL_BUILD_PROVIDERS: Provider[] = [
  provide(IS_PRERENDER, {
    useValue: true
  })
];