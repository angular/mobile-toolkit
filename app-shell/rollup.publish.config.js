export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/appShell.umd.js',
  format: 'umd',
  moduleName: 'ng.appShell',
  globals: {
    '@angular/core': 'ng.core'
  }
}
