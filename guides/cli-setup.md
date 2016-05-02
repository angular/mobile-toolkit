# Create a Mobile Web App with [Angular CLI](https://cli.angular.io)

Start by installing [Angular CLI](https://cli.angular.io).

```
$ npm install -g angular-cli
```

(Note: this recipe is based on version 0.0.35 of Angular CLI.)

Then create a new project:

```
$ ng new hello-mobile --mobile
$ cd hello-mobile
```

Then serve the app:

```
$ ng serve
```

Navigate to [localhost:4200](http://localhost:4200) in your browser, and you should see a simple page that says “hello-mobile works!”.

## App Manifest

Passing the `--mobile` flag when creating a new app will create an App Manifest with metadata about the app that browsers can use to make the
app installable to home screens on mobile devices. The file is stored in src/manifest.webapp. See [this article](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android?hl=en) for more information about Web App Manifest, and how you can make use of it.

Next, let's add an [App Shell](./app-shell.md) to our app.
