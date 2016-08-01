import { Type, NgModule } from '@angular/core';
import { ShellRender } from './shell-render.directive';
import { ShellNoRender } from './shell-no-render.directive';
import {IS_PRERENDER} from './is-prerender.service';

export * from './is-prerender.service';
export * from './shell-no-render.directive';
export * from './shell-render.directive';
export * from './shell-parser';

@NgModule({
  declarations: [ShellRender, ShellNoRender],
  exports: [ShellRender, ShellNoRender],
  providers: [
    {provide: IS_PRERENDER, useValue: true}
  ]
})
export class AppShellBuildModule {}

@NgModule({
  declarations: [ShellRender, ShellNoRender],
  exports: [ShellRender, ShellNoRender],
  providers: [
    {provide: IS_PRERENDER, useValue: false}
  ]
})
export class AppShellRuntimeModule {}

/**
 * Deprecated in favor of AppShellModule.
 *
 * @deprecated
 */
export const APP_SHELL_DIRECTIVES: Type[] = [
  ShellRender,
  ShellNoRender
];
