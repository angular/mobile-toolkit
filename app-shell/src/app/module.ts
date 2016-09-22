import {ModuleWithProviders, NgModule} from '@angular/core';
import {IS_PRERENDER} from './prerender';
import {ShellNoRender, ShellRender} from './shell';

@NgModule({
  declarations: [
    ShellNoRender,
    ShellRender,
  ],
  exports: [
    ShellNoRender,
    ShellRender,
  ],
})
export class AppShellModule {
  static prerender(): ModuleWithProviders {
    return {
      ngModule: AppShellModule,
      providers: [{provide: IS_PRERENDER, useValue: true}]
    }
  }

  static runtime(): ModuleWithProviders {
    return {
      ngModule: AppShellModule,
      providers: [{provide: IS_PRERENDER, useValue: false}],
    };
  }
}
