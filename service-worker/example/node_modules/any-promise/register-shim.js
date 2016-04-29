"use strict"
var registered = {
  Promise: window.Promise,
  implementation: 'window.Promise'
}

/**
 * any-promise in browser is always global
 * polyfill as necessary
 */
module.exports = register
function register(){
  return registered
}
