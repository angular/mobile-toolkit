## Any Promise

[![Build Status](https://secure.travis-ci.org/kevinbeaty/any-promise.svg)](http://travis-ci.org/kevinbeaty/any-promise)

Let your library support any ES 2015 (ES6) compatible `Promise` and leave the choice to application authors. The application can register its preferred `Promise` implementation and it will be exported when requiring `any-promise` from library code.

If no preference is registered, defaults to the global `Promise` for newer Node.js versions. The browser version will always export the global `Promise`, so polyfill as necessary.

### Application Registration

As an application author, you can optionally register a preferred `Promise` implementation on application startup (before any call to `require('any-promise')`:

```javascript
require('any-promise/register')('bluebird')
// -or- require('any-promise/register')('es6-promise')
// -or- require('any-promise/register')('native-promise-only')
// -or- require('any-promise/register')('rsvp')
// -or- require('any-promise/register')('when')
// -or- require('any-promise/register')('q')
// -or- require('any-promise/register')('any other ES6 compatible library')
```

You must register your preference before any call to `require('any-promise')` (by you or required packages), and only one implementation can be registered. Typically, this registration would occur at the top of the application entry point.

Registration is not required for Node.js version >= 0.12 as a native `Promise` implementation is included. If no preference is registered, the global `Promise` will be used.

#### Example:

Assuming `when` is the desired Promise implementation:

```bash
# Install preferred promise library
$ npm install when
# Install any-promise to allow registration
$ npm install any-promise
# Install any libraries you would like to use depending on any-promise
$ npm install mz
# Remove potentially duplicated `any-promise` packages
$ npm dedupe
```
Register your preference in the application entry point before any other `require` of packages that load `any-promise`:

```javascript
// top of application index.js or other entry point
require('any-promise/register')('when')
```

Now that the implementation is registered, you can use any package depending on `any-promise`:

```javascript
var fsp = require('fs-promise') // fs-promise will use `when` for promise implementations
var Promise = require('any-promise')  // the registered `when.Promise`
```

It is safe to call `register` multiple times, but it must always be with the same implementation.

Again, registration is not required. It should only be called by the application user if overriding the default implementation is desired.


### Library Usage

Libraries using `any-promise` should only use [documented](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) functions as there is no guarantee which implementation will be chosen by the end user.

```javascript
var Promise = require('any-promise');

return Promise
  .all([xf, f, init, coll])
  .then(fn);


return new Promise(function(resolve, reject){
  try {
    resolve(item);
  } catch(e){
    reject(e);
  }
});

```

Libraries should never call `register`, only the application user should call if desired.

If your library needs to branch code based on the registered implementation, you can retrieve it using `var impl = require('any-promise/implementation')`, where `impl` will be the package name (`"bluebird"`, `"when"`, etc.) if registered, `"global.Promise"` if using the global version on Node.js, or `"window.Promise"` if using the browser version. You should always include a default case, as there is no guarantee what package may be registered.

### Support for old Node.js versions

Node.js versions prior to `v0.12` may have contained buggy versions of the global `Promise`. For this reason, the global `Promise` is not loaded automatically for these old versions.  If using `any-promise` in Node.js versions versions `<= v0.12`, the user should register a desired implementation.

If an implementation is not registered, `any-promise` will attempt to discover an installed `Promise` implementation.  If no implementation can be found, an error will be thrown on `require('any-promise')`.  While the auto-discovery usually avoids errors, it is non-deterministic. It is recommended that the user always register a preferred implementation for older Node.js versions.

This auto-discovery is only available for Node.jS versions prior to `v0.12`. Any newer versions will always default to the global `Promise` implementation.
