# Add a Service Worker to an [Angular CLI](https://cli.angular.io) App

This guide assumes you've already completed the [Setup](./cli-setup.md)
and [App Shell](./app-shell.md) guides.

The first step is to install the Service Worker from the Angular Mobile Toolkit.

```
npm install --save-dev @angular/service-worker
```

This package contains two important pieces, which we'll use later:

 1. The Service Worker script itself, located at `node_modules/@angular/service-worker/dist/worker.js`

 2. The CLI plugin that will generate a manifest - the list of all files that should be cached in your app - automatically.

So next, we need to configure the CLI to generate the manifest at build time.

Open up `angular-cli-build.js`. We'll make three changes here:

 * Add the Service Worker script to the `vendorNpmFiles` section of the `Angular2App`.
 * Create an instance of the Service Worker plugin at the very end of the build flow (we want to capture all the files).
 * Merge the Service Worker [Broccoli](http://broccolijs.com/) tree with the rest of the app.

First, find the section creating `Angular2App` and add `@angular/service-worker/dist/worker.js` to the `vendorNpmFiles` section:

```js
var ngTree = new Angular2App(defaults, {
  vendorNpmFiles: [
    // ...
    '@angular/service-worker/dist/worker.js',
    // ...
  ]
});
```

Great! This ensures the Service Worker is available for the rest of the pipeline.

Next, we need to capture the rest of the tree for the Service Worker to read.

Change:

```js
  return mergeTrees([ngTree, appShell, jsBundleTree], { overwrite: true })
```

To:

```js
  var mergedTree = mergeTrees([ngTree, appShell, jsBundleTree], { overwrite: true });
  var swTree = new ServiceWorkerPlugin(mergedTree);
  return mergeTrees([mergedTree, swTree], { overwrite: true });
```

Before this can run, we'll need to add the import for `ServiceWorkerPlugin` to the top of the file:

```js
const ServiceWorkerPlugin = require('@angular/service-worker').ServiceWorkerPlugin;
```

Great! Now run ng build, and there should be a `dist/manifest.appcache` file generated with your manifest. This is the file that the Service Worker script parses to know what files it should cache. It also can be included in index.html to act as a fallback to add some basic offline functionality for browsers that don't yet support Service Worker. Browsers that support Service Worker will automatically ignore the App Cache Manifest if a Service Worker is installed.

```html
<html manifest="manifest.appcache">
```

The last step is to uncomment the `<script>` tag that’s already included in `index.html` to enable the Service Worker:

<script type="text/javascript">
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/worker.js').catch(function(err) {
        console.log('Error installing service worker: ', err);
      });
    }
</script>

Now to check that the Service Worker is installed correctly, open Chrome Developer Tools, click the Resources tab, and then click Service Workers. You should see our installed Service Worker! Now to really test that it works, go to the Network tab in Chrome Developer Tools, and change the Throttling dropdown to select Offline. Now refresh the page, and it should still load.
