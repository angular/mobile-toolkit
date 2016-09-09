import { Type, NgModule, ModuleWithProviders } from '@angular/core';
import { ShellRender } from './shell-render.directive';
import { ShellNoRender } from './shell-no-render.directive';
import { IS_PRERENDER } from './is-prerender.service';
import { APP_SHELL_RUNTIME_PROVIDERS, APP_SHELL_BUILD_PROVIDERS } from './is-prerender.service';

export * from './is-prerender.service';
export * from './shell-no-render.directive';
export * from './shell-render.directive';

const APP_SHELL_DIRECTIVES: Type<any>[] = [
  ShellRender,
  ShellNoRender
];

@NgModule({
  exports: APP_SHELL_DIRECTIVES,
  declarations: APP_SHELL_DIRECTIVES
})
export class AppShellModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppShellModule,
      providers: [APP_SHELL_RUNTIME_PROVIDERS, APP_SHELL_BUILD_PROVIDERS]
    };
  }
}

