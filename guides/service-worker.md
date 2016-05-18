# Service Worker

This guide assumes you've already completed the [Setup](./cli-setup.md) guide.

The `hello-mobile` app by default comes with a fully-functional
[ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) script, which is automatically installed when the
app is built in production mode (`ng build --prod` or `ng serve --prod`).

Service Worker is a relatively new addition to the Web Platform,
and is a critical component to building true Progressive Web Apps.
Not only does Service Worker make it possible to make apps load without an internet connection, it also makes it possible to push notifications and updates to a user's device while the app isn't even running.

The Angular Mobile Toolkit comes with support for generating a service worker that will automatically pre-fetch and cache all
static assets for an application, making it possible for the app
to work without an internet connection. Even if an internet connection is available, the app will load more quickly because
all of its assets are available in cache next time the app loads.

At this point in time, there aren't any additional configuration options to control how the worker script works.

To see the files that the Service Worker will be pre-fetching and caching to make
available offline, run a prod build of the `hello-mobile` app:

`$ ng build --prod`

Then open dist/ngsw-manifest.json:

`dist/ngsw-manifest.json`:

```json
"{
  "group": {
    "app": {
      "url": {
        "/app-concat.js": {
          "hash": "2431d95f572a2a23ee6df7d619d2b68ad65f1084"
        },
        "/favicon.ico": {
          "hash": "164f9754ba7b676197a4974992da8fc3d3606dbf"
        },
        "/icons/android-chrome-144x144.png": {
          "hash": "2eb2986d6c5050612d99e6a0fb93815942c63b02"
        },


        "and-many": "more-icons",


        "/index.html": {
          "hash": "c536103ca1836310c60f7cc94b6fa14debcf2ddf"
        },
        "/manifest.webapp": {
          "hash": "a020306797abb92fe29c90bb2832b6f5783e2487"
        }
      }
    }
  },
  "routing": {
    "index": "/index.html"
  }
}"
```

The `group.app.url` objects are the configuration the Service Worker script uses to pre-fetch
and cache assets when the application is loaded. If a file's hash ever changes, the Service Worker
knows it needs to fetch the latest version of that file.

The `routing` config tells the service worker which URLs map to application routes, and should be
served with index.html.

Now to check that the Service Worker is installed correctly, open Chrome Developer Tools, click the Resources tab, and then click Service Workers. You should see our installed Service Worker! Now to really test that it works, go to the Network tab in Chrome Developer Tools, and change the Throttling dropdown to select Offline. Now refresh the page, and it should still load.

## The End

This is the end of the guides for now. Our work is in an alpha state, and we'd love feedback.
Please open issues on [angular/mobile-toolkit](https://github.com/angular/mobile-toolkit),
and tweet at the Angular Mobile Team [@jeffbcross](https://twitter.com/jeffbcross),
[@robwormald](https://twitter.com/robwormald), [@synalx](https://twitter.com/synalx).

And to dive deeper into Progresive Web Apps, check out [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/?hl=en)
on Google Developers.