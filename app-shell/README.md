# @angular/app-shell

This is a simple library to make it easy to show/hide certain elements
in a pre-rendered component. See the [App Shell Guide](../guides/app-shell.md)
for more information about how it's used to build App Shell components.

# Install

`$ npm install @angular/app-shell`

# Usage

In the providers setup for the prerender environment, import and add
the `APP_SHELL_BUILD_PROVIDERS`. For now, this provides a single `boolean`
provider, `IS_PRERENDER`, which can be injected anywhere in the application
to change JavaScript logic depending on the execution context.

`main-app-shell.ts` (or other entry point):
```typescript
// In pre-render context, such as main-app-shell.ts
import { APP_SHELL_BUILD_PROVIDERS } from '@angular/app-shell';
// ...
providers: [
  APP_SHELL_BUILD_PROVIDERS,
  //...
]
```

There's a similar set of providers for the runtime environment, which
should be added to your providers in main.ts: `APP_SHELL_RUNTIME_PROVIDERS`.

`main.ts`:
```typescript
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';
//...
bootstrap(AppComponent, APP_SHELL_RUNTIME_PROVIDERS);
```

Then in the component(s) that will be shared between pre-render and runtime,
add the `APP_SHELL_DIRECTIVES` and `IS_PRERENDER`. `APP_SHELL_DIRECTIVES`
comes with two structural directives:

 * `*shellRender` designates a component that should **only** be rendered in the App Shell,
  and **not** rendered at runtime.
 * `*shellNoRender` designates a component that should **not** be rendered in the App Shell,
  and **only** rendered at runtime.

The directives could be thought of as `*ngIf="isPrerender"` and `*ngIf="!isPrerender"`.

`app.component.ts`:
```typescript
import { Inject, Component } from '@angular/core';
import { Routes } from '@angular/router';
import { APP_SHELL_DIRECTIVES, IS_PRERENDER } from '@angular/app-shell';
//...
@Component({
  selector: 'app-component',
  template: `
    <md-toolbar>
      Hello
    </md-toolbar>
    <loading-indicator *shellRender></loading-indicator>
    <router-outlet *shellNoRender></router-outlet>
  `,
  directives: [ APP_SHELL_DIRECTIVES, ROUTER_DIRECTIVES]
})
@Routes([{
  // ...
}])
class AppComponent {
  constructor(@Inject(IS_PRERENDER) isPrerender:boolean) {
    if (!isPrerender) {
      // fetch some data
    }
  }
}
```

Kudos to @mgechev for pairing on this library, and letting @jeffbcross get the git commit credit.
