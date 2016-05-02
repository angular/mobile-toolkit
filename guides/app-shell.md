# Add an App Shell to an [Angular CLI](https://cli.angular.io) App

This guide assumes that the [CLI setup guide](./cli-setup.md) has been completed.

Let's add an App Shell to our app. App Shell is an architecture that focuses on
providing an instant-loading experience to users by rendering a "shell" of an
application immediately when the first document is returned from the server, before
any other assets have loaded. Read more about it
on [developers.google.com](https://developers.google.com/web/updates/2015/11/app-shell?hl=en).

In this guide, we'll use the main app component that Angular CLI created for us to
easily generate an App Shell. Our app shell will just have an Angular Material toolbar
with the name of our app.

Let's install the Angular Material toolbar and Angular Material core packages from npm.

```
$ npm install --save @angular2-material/toolbar @angular2-material/core
```

(Note: this recipe was written as of Angular Material 2 alpha.3)

There are a couple of steps to let the CLI know how to serve the Angular Material toolbar assets. First, open src/system-config.ts, and add a SystemJS config entry for the toolbar in the existing config object:

```typescript
// Add your custom SystemJS configuration here.
export const config: any = {
  map: {
    '@angular2-material': 'vendor/@angular2-material'
  },
  packages: Object.assign({
    '@angular2-material/toolbar': {
      defaultExtension: 'js',
      main: 'toolbar.js'
    }
  }, createPackageConfig(barrels))
};
```

This tells the SystemJS JavaScript loader how to load assets when a module imports ‘@angular2-material/toolbar'.

The second step to make the package available is to open angular-cli-build.js in the project's root directory, and add an entry to the “vendorNpmFiles” array:

```typescript
return new Angular2App(defaults, {
    vendorNpmFiles: [
      '@angular2-material/**/*.js'
    ]
  });
```

This will cause the CLI to copy the toolbar, and any other Angular Material components added later, into a “vendor” directory at build time.

Now let's add the toolbar to our component.
Open src/app/hello-mobile.component.ts in your editor.
We first need to import the directives from the toolbar package like so:

```typescript
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MdToolbar} from '@angular2-material/toolbar';

And then we need to register the directive with our component so it can be available in the component's view. While we're at it we'll delete the moduleId, templateUrl and styleUrls properties to instead use inline template and styles. Here is what the Component decorator should look like before we add the template:

@Component({
  selector: 'hello-mobile-app',
  providers: [ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, MdToolbar],
})
```

Now let's add the toolbar to our template, and while we're at it, we'll remove the RouterOutlet directive and other router dependencies, since this guide won't yet incorporate the router. So our final component decorator should look like this:

```typescript
@Component({
  selector: 'hello-mobile-app',
  template: `
    <md-toolbar>
      App Shell Demo
    </md-toolbar>
  `,
  directives: [MdToolbar]
})
```

Now serve the app again with ng serve, and you should see something like this:


Now that we have a basic shell in place, we'll create a separate entry point for our app, to configure directives and providers for our App Shell plugin. Create a new file at src/main-app-shell.ts, and export a configuration object like so:

```typescript
import {provide} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';
import {HelloMobileAppComponent} from './app/hello-mobile.component';
import {REQUEST_URL, NODE_LOCATION_PROVIDERS, NODE_HTTP_PROVIDERS} from 'angular2-universal';


export const options = {
  directives: [
    // The component that will become the main App Shell
    HelloMobileAppComponent
  ],
  providers: [
    // What URL should Angular be treating the app as if navigating
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(REQUEST_URL, {useValue: '/'}),
    ROUTER_PROVIDERS,
    // Providers from universal to make routing and http work in node
    NODE_LOCATION_PROVIDERS,
    NODE_HTTP_PROVIDERS
  ],
  preboot: false
};
```

Now that we've got the options set up for the Broccoli Prerender Plugin, let's take the next step of having Angular CLI automatically compile this component into a single, completely-inlined html page.

Angular CLI uses a tool called BroccoliJS to build our app, and we're going to use a Broccoli plugin to pre-render our App Shell. Let's install the plugin from npm, angular2-broccoli-prerender, and let's also install another broccoli plugin we'll need, broccoli-merge-trees.

```
npm install --save-dev angular2-broccoli-prerender broccoli-merge-trees
```

Before we start modifying the build process, we need to update our TypeScript configuration to output commonjs modules instead of the default System.register format modules that Angular CLI produces. This is so that our nodejs-based plugins can more easily consume our transpiled app. Open src/tsconfig.json and edit the “module” field to be “commonjs”

```
    "mapRoot": "",
    "module": "commonjs",
    "moduleResolution": "node",
```

We also need to update our System loader config to load files as commonjs instead of System register format. Open 	src/system-config.ts, and in the barrelList reducer function, modify the configuration object to say format: ‘cjs' like so:

```typescript
barrelConfig[barrelName] = {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'index'
    };
```

Now let's add the plugin to our build pipeline. Open angular-cli-build.js in your editor. This file is the CLI's entry point to modify the build process. By default, the module just exports an instance of Angular CLI's default Angular2App class, which is a broccoli tree. We want to modify our process to return a merged tree, which will overwrite the index.html of the Angular2App tree with the app shell tree.  First, we'll import the 2 broccoli plugins we just installed:

```typescript
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var AppShellPlugin = require('angular2-broccoli-prerender').AppShellPlugin;
var mergeTrees = require('broccoli-merge-trees');

Now let's use the AppShellPlugin to create a new tree with our completely-inlined index.html.

module.exports = function(defaults) {
  var ngTree = new Angular2App(defaults, {
    vendorNpmFiles: [
      '@angular2-material/**/*.js'
    ]
  });
  var appShell = new AppShellPlugin(ngTree, 'index.html', 'main-app-shell');
  return mergeTrees([ngTree, appShell], {
    overwrite: true
  });
};
```


Now if we run ng serve, and browse to localhost:4200, we should still see the basic component with a toolbar. But when we open dist/index.html, we should see our app component and all styles for the toolbar completely inlined in the document.

But we have a problem. There are still several script tags at the bottom of our page, which will load synchronously, and block our app shell from rendering until all of the scripts have been loaded and parsed. Let's combine all of these scripts into a single script that can be loaded asynchronously. First, let's move the System.import call to its own file in src/auto-start.ts.

```typescript
declare var System;
System.import('system-config.js').then(function(systemConfig) {
  System.config(systemConfig.config);
}).then(function () {
  System.import('main.js')
}).catch(console.error.bind(console));
```

Now we just have the remaining bundles being loaded in index.html. Let's use another broccoli plugin to concatenate those scripts, and our new auto-start script, into a single file, and load them with an async script tag.

```
$ npm install --save-dev broccoli-concat
```

Import it in angular-cli-build.js:

```js
var concat = require('broccoli-concat');
```

Now let's add a step to concatenate all the scripts in angular-cli-build.js:

```js
var appShell = new AppShellPlugin(ngTree, 'index.html', 'main-app-shell');

var jsBundleTree = concat(ngTree, {
      headerFiles: [
        'vendor/es6-shim/es6-shim.js',
        'vendor/systemjs/dist/system-polyfills.js',
        'vendor/angular2/bundles/angular2-polyfills.js',
        'vendor/systemjs/dist/system.src.js',
        'vendor/rxjs/bundles/Rx.js',
        'vendor/angular2/bundles/angular2.dev.js',
        'vendor/angular2/bundles/router.dev.js'
      ],
      inputFiles: [
        'auto-start.js'
      ],
      header: ';(function() {',
      footer: '}());',
      sourceMapConfig: { enabled: true },
      allowNone: false,
      outputFile: '/app-concat.js'
    });


  return mergeTrees([ngTree, jsBundleTree, appShell], {
    overwrite: true
  });
```


And finally, let's edit src/index.html to load the new concatenated script.

```html
<body>
  <hello-mobile-app></hello-mobile-app>

  <script async src="/app-concat.js"></script>
</body>
```

Now our shell will render immediately, without being blocked by any network requests.

Next, let's make the app offline-ready by [adding a Service Worker](./service-worker.md).
