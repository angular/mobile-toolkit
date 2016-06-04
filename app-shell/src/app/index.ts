import { Type } from '@angular/core';
import { ShellRender } from './shell-render.directive';
import { ShellNoRender } from './shell-no-render.directive';

export * from './is-prerender.service';
export * from './shell-no-render.directive';
export * from './shell-render.directive';
export * from './shell-parser';

export const APP_SHELL_DIRECTIVES: Type[] = [
  ShellRender,
  ShellNoRender
];
