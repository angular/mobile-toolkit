# Create a Progressive Web App with [Angular CLI](https://cli.angular.io)

Progressive Web Apps are web apps that combine the benefits of the Web
with the capabilities and performance of native Apps. Angular makes it
easy to get started building progressive Web apps with our Angular Mobile
Toolkit, which is integrated with [Angular CLI](https://cli.angular.io).

These guides will help get started on the right foot building Progressive
Web Apps, so you can focus more on building a great user experience, and
less on getting the underlying tooling and technology set up.

To get started, install Angular CLI from [npm](https://www.npmjs.com/).

```
$ npm install -g angular-cli
```

(Note: this recipe is based on version 1.0.0-beta.4 of Angular CLI.)

Then create a new project:

```
$ ng new hello-mobile --mobile
$ cd hello-mobile
```

Then serve the app:

```
$ ng serve
```

Navigate to [localhost:4200](http://localhost:4200) in your browser, and you should see a simple page that says "hello-mobile works!".

## --mobile

Passing the `--mobile` flag when creating a new app will set up a few extra things
to help get your [Progressive Web App](https://developers.google.com/web/progressive-web-apps?hl=en)
started on the right foot:
 * A **Web Application Manifest** to give browsers information to properly install your app
 to the home screen.
 * A build step to generate an **App Shell** from your app's root component.
 * A **Service Worker** script to automatically cache your app for fast loading,
   with or without an internet connection. Note: the Service Worker is only installed in production mode, i.e. via `ng serve --prod` or `ng build --prod`.

We'll go deeper into these concepts in subsequent guides.

For reference, see the example app created by Angular CLI in this repository at [/hello-mobile](../hello-mobile)

---

## [Next, let's learn how to take advantage of the Web App Manifest.](./web-app-manifest.md)
