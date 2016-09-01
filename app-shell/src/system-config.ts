/** Only use System here. */
declare var System: any;

const barrels: string[] = [
  // Parse5 barrels
  'parse5',
  'parse5/parser',
  'parse5/serializer',
  'parse5/common',
  'parse5/tokenizer',
  'parse5/tree_adapter',
  'parse5/location_info',

  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/shell-parser',
  'app/shell-parser/template-parser',
  'app/shell-parser/node-visitor',
  'app/shell-parser/node-visitor/resource-inline',
  'app/shell-parser/node-matcher',
  'app/shell-parser/node-matcher/css-selector',
  'app/shell-parser/ast',
  'app/shell-parser/testing',
  /** @cli-barrel */
];

// Angular CLI SystemJS configuration.
System.config({
  map: {
    'parse5': 'vendor/parse5/lib',
    'rxjs': 'vendor/rxjs',
    'traceur': 'vendor/traceur/bin/traceur.js',
    'main': 'main.js'
  },
  paths: {
    '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
    '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
    '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    '@angular/common/testing': 'vendor/@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'vendor/@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/core/testing': 'vendor/@angular/core/bundles/core-testing.umd.js',
    '@angular/platform-browser/testing': 'vendor/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',

  },
  packages: barrels.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      main: 'index'
    };
    return barrelConfig;
  }, {})
});


// Add your custom SystemJS configuration here.
System.config({
  packages: {
    // Add your custom SystemJS packages here.
  }
});
