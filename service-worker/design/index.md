# Angular Mobile - Service Worker

## Introduction

### About service Workers
Service Workers are a form of background worker in the browser. Once an origin installs a service worker, that worker proxies network requests made by any tab from that origin and can handle those requests locally if desired. Service Worker installation is permanent. Workers are managed by the browser and started when a tab with a URL from their origin is opened.

### Angular Mobile Motivation

One of Angular Mobile team's goals is to streamline development of fully functional offline applications. These types of applications (Progressive Web Apps) deliver a user experience approaching that of an installed native application. Service Worker is an essential part of our strategy for achieving this.

### Caveats

One major issue with Service Workers is that they are not supported in all major browsers yet. Internet Explorer and Safari both are pending implementation, but there are other mobile browsers that have high usage in specific markets which also don't support the API.

## High-level Design

Our main goal is to enable offline access to application static content. Secondary goals include notifications to the application when a new version has been deployed, efficient downloading of deltas between versions, and support for push notifications of new updates from the server.

To ensure the primary goal of offline access to static content is achieved, Angular Mobile's offline strategy will be to utilize Service Worker where available but fall back on the AppCache API if needed. AppCache uses a static manifest file to declare to the browser which resources should be cached at startup to ensure offline operation.

<a name="benefit-from-design"></a>
By supporting either AppCache OR ServiceWorker, an estimated 91.8% of users will be able to benefit from this design<sup>[1](#can-i-use-sw) [2](#can-i-use-ac)</sup>.

If Service Workers are installed for an origin, AppCache is completely disabled for it, so there are no unexpected consequences of using both APIs together.

### Manifest

Like AppCache, a Service Worker needs to know which files to cache in advance in order to serve an application offline. Since applications will already need an AppCache manifest to fall back on, we elected to utilize the same manifest for the Service Worker. Additional metadata about files to be cached will be specified in AppCache manifest comments.

There is precedent for this design. AppCache manifest comments are routinely used to include a file hash for each URL listed. This is necessary because the browser will only check for updates if the manifest itself changes.

Here is an example of a simple AppCache manifest:

    CACHE MANIFEST
    /resource/A
    /resource/B
    # Hash for resource C: ab04e314
    /resource/C

#### Extension comments

The Angular Service Worker will look for comments in the manifest that begin with a `sw.` prefix, followed by a property, `:`, and then the value. For example, `# sw.bundle: app` specifies that `bundle` is `app`.

Service Worker properties declared this way will apply to the files listed after they appear. For example, the following sets the hash used for resources C and D:

    # sw.file.hash: ab04e314
    /resource/C
    # sw.file.hash: df3a1242
    /resource/D

#### Bundling

Resources to be cached are grouped into versioned *bundles*, which can be updated independently. In this way, application code can be updated separately from vendor code such as Angular.

    # sw.bundle: angular
    # sw.version: beta-3
    /polyfills.js
    /RX.js
    /angular.js
    # sw.bundle: answers-app
    # sw.version: 0.01
    /index.html
    /core.css
    /app.js

There is no ordering requirement for versions, all that matters is the value changes.

Additionally, a manifest can declare routes, or URLs which should be redirected to another resource. For example:

    /index.html
    # sw.route: /home /index.html

tells the Service Worker to serve the contents of `index.html` everytime a request is made for `/home`. With this feature, applications that use synthetic URLs to track state can ensure those URLs can be loaded offline.

#### File hashes

As shown above, individual files can have hashes listed. In this case, even if the bundle version changes the file should not be re-downloaded unless its hash also changes.

### Architecture

#### High-level overview

The Service Worker consists of several major components. A **Driver** is instantiated at worker startup which subscribes to browser events and maps them to the Service Worker's API. There is an **Adapter** in the other direction which connects Service Worker operations to browser APIs, allowing these operations to be mocked in unit tests. The **Worker** itself handles caching of resources and proxying of requests from the application, and uses a **Manifest Parser** to understand the extended AppCache manifest.

#### Driver

The driver will take incoming browser events and route them appropriately. Currently this is a simple operation as there is one worker to handle all events.

In the future, there may be a need for additional workers running concurrently, and the driver will be responsible for coordinating their operations.

Currently, the driver handles the `install`, `activate`, and `fetch` events.

#### Adapter

The adapter provides a mockable interface for the worker to consume browser APIs. It provides access to:

* The `fetch` API to make HTTP calls
* The `CacheStorage` API to read and write cached requests
* Creation of new `Request` and `Response` instances for the above APIs
* The document origin
* The global scope (for debugging purposes)

#### Worker

The worker actually handles requests from the application. It manages cached data in accordance with the Service Worker lifecycle.

##### Lifecycle

Service workers receive two lifecycle events: **install** and **activate**.

The **install** event signals that a new version of the worker has been downloaded and instantiated, but is not yet handling traffic in the application. This is typically where content is fetched and cached.

The **activate** event will then be called when the worker becomes the primary for its origin and will be called upon to serve application requests. This is typically where old versions of resources in the caches are cleaned up.

###### Install

On an **install** event, the Angular worker downloads a fresh copy of the application's manifest and primes its caches. The worker looks at the manifest and fetches all the listed resource, storing them in caches. Once resources are cached and ready, the worker records the new manifest as being the **latest** version of the application which is ready to serve.

###### Activation

On the **activate** event, the worker checks for a new **latest** manifest. If there is one, it's promoted to the **active** manifest. This manifest will be used to actually serve application requests. If the **latest** and **active** manifests are the same, then no application version upgrade has taken place.

The worker [ab]uses the caching API to store its manifests. Two named caches, `manifest.active` and `manifest.latest`, are used to cache the application manifest.

##### Bundle Caching

Each bundle listed in the manifest is cached in a separate cache, named according to the pattern: `bundle.{name}.{version}`. For example, if the manifest declared:

    # sw.bundle: angular
    # sw.version: beta-3
    /polyfills.js
    /RX.js
    /angular.js
    # sw.bundle: app
    # sw.version: 0.01
    /index.html
    /core.css
    /app.js

The worker would download `/polyfills.js`, `/RX.js` and `/angular.js` and store them in a cache named `bundle.angular.beta-3`, and would cache `/index.html`, `/core.css`, and `/app.js` in a cache named `bundle.app.0.01`. Versioning the cached bundles this way ensures that no resources from new bundle versions will be served by any existing workers until the **activate** event.


##### Serving

When a request is received from the application, it's first normalized according to the worker's origin. For example, `http://www.awesomeapp.com/index.html` is normalized to `/index.html` for an app with the origin `http://www.awesomeapp.com`.

Then, the URL of the request is compared against the routes declared in the manifest. If there's a match, the request is rewritten with the URL of the route's target resource.

Finally, the worker checks each cached bundle for matches against the request. If a match is found, the response is served from cache, otherwise the worker falls back on the network via the `fetch` API.

Requests made to the network via the fallback mechanism are **not** saved to cache.

##### Updating

Periodically, Chrome will download the Service Worker script again and, if anything has changed, install it. This is the primary avenue by which applications will notify browsers of updated versions. A hash of the manifest in a comment at the end of the service worker script should be enough to achieve this.

On an update, the worker in the **install** event will notice that an **active** manifest is already in place, and perform a diffing operation. The diff shows which files can be safely re-used from the previously cached bundle. A file is safe to reuse if either of the two criteria are met:

* Both the old and new manifests show the file in the same named bundle with an unchanged bundle version
* Both the old and new manifests show the file with the same file hash

If either condition is met, the file will be fetched from the previously cached bundle and stored in the new bundle's cache, instead of being fetched from network. In this way, only changed bundles or changed files will be redownloaded.

<hr>

 1. <a name="can-i-use-sw"><a> http://caniuse.com/#feat=serviceworkers [&#x21A9;](#benefit-from-design)
 2. <a name="can-i-use-ac"></a> http://caniuse.com/#feat=offline-apps [&#x21A9;](#benefit-from-design)
