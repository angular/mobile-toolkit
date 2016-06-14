/** Only use System here. */
declare var System: any;

const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

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
  'app/shell-parser/node-matcher',
  'app/shell-parser/node-matcher/css-selector',
  'app/shell-parser/ast',
  'app/shell-parser/testing',
  /** @cli-barrel */
];

// Angular CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'parse5': 'vendor/parse5/lib',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
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
