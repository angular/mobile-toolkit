# The Angular Service Worker

## What is a service worker?

A [service worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) is a special script which runs in the background in the browser and manages network requests to a given origin. It's originally installed by an app and stays resident on the user's machine/device. It's activated by the browser when a page from its origin is loaded, and has the option to respond to HTTP requests during the page loading, including the initial navigation request (for `/index.html`). This makes service workers very useful for true offline support in applications.

Additionally, service workers are the client-side endpoint for push notifications on the web. 

## Features

At a high level, the Angular service worker currently provides support for:

* Initial static content caching
* Route redirection to `index.html`
* Push notifications

## The `ngsw-manifest.json` file

The worker always has a current manifest saved, and uses it when determining how to process requests.

### Example
Here is a basic example of a manifest file:

    {
      "static": {
        "urls": {
          "/index.html": "ba83d37f",
          "/app.js": "9ce1a84a"
        }
      },
      "routing": {
        "index": "/index.html",
        "routes": {
          "/": {
            "prefix": false
          },
          "/route": {
            "prefix": true
          }
        }
      },
      "push": {
        "showNotifications": true,
        "backgroundOnly": true
      }
    }
    
Each top-level key here configures a particular feature (plugin) of the service worker.

## Feature: Static content cache

The first section configures support for _static content caching_, the process by which the service worker downloads and stores copies of known resources that are needed to run your application.

### Loading without the network

This ensures that the next time the user loads your application, or navigates to a new lazy route, those files are available even if the device has no network connection. Even when the device is connected, the service worker will still serve these files from the local copies, and not go to the network at all. This decouples application loading from the network completely, improving performance.

An obvious consequence is that if changes to any of the static files are pushed to the web server, applications running with the service worker will not "see" those changes. This is intentional - you should think of the static content cache as an installed copy of a particular version of an app. Just like any Android or iOS app, the version that runs when you open the app is the version that was installed on the device, regardless of available updates.

Updating the static content cache is a separate process.

### First load

The first time the service worker starts up, it doesn't intercept requests at all. It downloads `ngsw-manifest.json` and performs an installation process.

For the static content cache, this involves downloading all the static files listed in the manifest. Currently this process happens immediately after the service worker's installation, but in the future it might be delayable until the application signals its own first load is complete.

Once this download is complete (and other plugins complete their own initializations), the worker transitions to a serving state where it begins answering requests from its caches.

### Updates

On every startup (which happens when a first tab for the app is opened in the browser), the service worker will re-download the manifest file from the network, and compare it with the manifest it has saved for the application. If the two are different, the worker will initiate an _update_.

It will continue serving the old version of the application and in the background, download the files for the new version of the app. This is where the hashes in the manifest come into play. If the hash of a particular file has not changed from the old manifest to the new one, the worker knows it can reuse the existing cached version and does not need to re-fetch the file. Thus, only changed files will be downloaded.

Once these changed files are ready in the cache, the worker then enters a waiting state where it continues to serve the old version of the app (even if new tabs are opened). Once all tabs are closed, the next time a tab for the application is opened, the worker will use the new manifest and serve the new version of the app.

### Generation

Clearly, hand-writing the static section of the manifest and manually configuring resource hashes isn't ideal. A much better approach is to generate this section from your compiled/packaged application. The `@angular/service-worker` package includes several utilities that make this easier - see the `Manifest Generation` section further down.

## Feature: Route redirection to `index.html`

The static content cache only serves files listed in the manifest. For example, if the manifest declares a URL of `/index.html`, requests to `/index.html` will be answered by the cache, but a request to `/` or `/some/route` will go to the network.

That's where the route redirection plugin comes in. It reads a routing config from the manifest and redirects configured routes to a specified index route.

Currently, this section of configuration must be hand-written. Eventually, it will be generated from the route configuration present in the application source.

### Manifest format

The `"routing"` section of the manifest has two required keys. `"index"` specifies the URL which should be used to satisfy requests for all routes.

The `"routes"` key is a map of URLs to route configs. Currently the only property that can be set for a route config is `"prefix"`. If `"prefix"` is `false`, the route path will be matched exactly. If it's `true`, any URL with that prefix will match and will cause the service worker to serve the configured `"index"`.

The URL specified for `"index"` will be requested through the service worker itself, so if for example it is present in the static content cache, it will be served from there.

## Feature: Push notifications

Service workers play an important role in the way push notifications work on the web. When a server sends a push message, there is no guarantee an application tab will be open on the client's device to handle it. So push notifications are first delivered to an installed service worker, which is woken up in the background to handle it.

What happens then depends on whether an application tab is in fact open.

If one is, the service worker can handle the notification in whatever way it chooses, including ignoring it.

If a tab is _not_ open, the worker **must** display a notification message letting the user know that _something_ happened in the background.

### Push in the Angular Service Worker

The Angular service worker listens for incoming push messages and is capable of reacting to them in two different ways:

* Examining the push message and showing a notification based on the contents
* Sending the push message to any open application tab(s)

Just as with static content caching and route redirection, the manifest controls which strategy the service worker uses.

The `"push"` section of the manifest accepts two optional keys to control this behavior. The first is `"showNotifications"` - if this key is not `true`, the worker will not show any notifications at all. An additional key `"backgroundOnly"` controls whether visible notifications are shown even if an application tab is open and listening to incoming push notifications. If this key is `true`, notifications displayed by the worker will be disabled when the tab is open (with the expectation that the tab will handle the notification itself).

### Push message format for notifications

Rather than bundling app-specific logic in the service worker script, the Angular service worker allows configuration of the visible notification directly from the server via the message payload.

Push messages are JSON objects. If a push message has a `"notification"` key, its value will control the notification the Angular service worker will show (presuming the manifest is configured to do so).

The properties allowed in the `"notification"` config are:

* `"actions"`
* `"body"`
* `"dir"`
* `"icon"`
* `"lang"`
* `"renotify"`
* `"requireInteraction"`
* `"tag"`
* `"title"`
* `"vibrate"`
* `"data"`

These are all options accepted by the [showNotification()](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification) API in the browser.

### The companion library

Push notifications are delivered to the service worker, but frequently applications want to take action beyond just displaying a pop-up notification. To do this, they need access to push messages.

The Angular service worker supports notifying application tabs whenever push messages arrive. This is accomplished by installing `ServiceWorkerModule` in your application. This module allows injection of the `NgServiceWorker` class, which interfaces with the Angular worker.

The API is as follows:

    interface NgServiceWorker {
      push: Observable<any>;
      registerForPush(): Observable<NgPushRegistration>;
      // some other methods for talking to the worker.
    }
    
    interface NgPushRegistration {
      auth(): string;
      key(method: string = 'p256dh'): string;
      url: string;
      unsubscribe(): Observable<boolean>;
      toJSON();
    }

To register for push notifications, call `registerForPush()` and subscribe to the result. The `NgPushRegistration` that comes back will contain the keys and other required information that identifies this client, and that should be sent to your application server to allow later delivery of messages to this client.

To monitor current push notifications, subscribe to `NgServiceWorker.push`.

## Updating the Service Worker itself

When a new version of the Angular service worker itself is published on a server, browsers will notice and download the new script before following the [Service Worker Update Process](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Updating_your_service_worker).

The Angular service worker, on update, will clear its caches, deleting all saved data. The new version will then proceed to start up as if it was the first install. This protects against from bugs in the service worker causing updates to fail against incompatible old caches, leaving users in a broken state.

## Build integrations

The `@angular/service-worker` package includes several integrations with common build systems.

### Gulp

For projects which use Gulp to orchestrate build-related tasks, it's possible to generate or augment a `ngsw-manifest.json` file using utilities bundled with the service worker package.

#### New manifest

This example uses the helper function `gulpGenerateManifest()` to start a new stream with an empty `ngsw-manifest.json` file, then `gulpAddStaticFiles()` to add a `"static"` section with the hashes of all `.html`, `.css`, and `.js` files in `dist/`.

    import {gulpGenerateManifest, gulpAddStaticFiles} from '@angular/service-worker/build/gulp';
    
    gulp.task('sw-manifest', () => gulpGenerateManifest()
      .pipe(gulpAddStaticFiles(gulp.src([
          'dist/**/*.html',
          'dist/**/*.css',
          'dist/**/*.js',
        ], {base: 'dist'}])))
      .pipe(gulp.dest('dist')));

#### Augmenting existing manifest

If, like many projects, you have other configuration to give the service worker besides `"static"`, you can create a `ngsw-manifest.json` in your project directory to store this configuration, and use `gulpAddStaticFiles()` to add the `"static"` section of the configuration:

    import {gulpAddStaticFiles} from '@angular/service-worker/build/gulp';
    
    gulp.task('sw-manifest', () => gulp
      .src(['src/ngsw-manifest.json'])
      .pipe(gulpAddStaticFiles(gulp.src([
          'dist/**/*.html',
          'dist/**/*.css',
          'dist/**/*.js',
        ], {base: 'dist'}])))
      .pipe(gulp.dest('dist')));

### Webpack

If instead of Gulp, you use Webpack to build your project, the service worker also ships with a Webpack plugin to generate (or augment) a `ngsw-manifest.json` file using the compilation assets from a webpack build. The `AngularServiceWorkerPlugin` should be the last plugin in your configuration, so it can pick up assets added by all the plugins before it.

    import {AngularServiceWorkerPlugin} from '@angular/service-worker/build/webpack';
    // or
    const AngularServiceWorkerPlugin = require('@angular/service-worker/webpack');
    
    webpack({
      entry: 'index.js',
      output: {
        path: 'dist/',
        filename: 'index.js',
      },
      plugins: [
        // This pulls an existing ngsw-manifest.json into the build.
        // The static configuration will be merged in.
        new CopyWebpackPlugin([
          {from: 'ngsw-manifest.json'},
        ]),
        new AngularServiceWorkerPlugin(),
      ],
    }, () => { /* done */ });
