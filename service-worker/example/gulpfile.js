// Set up ts-node to enable loading of TypeScript files.
require('ts-node').register({
  noProject: true,
});

// Trampoline into gulpfile.ts.
require('./gulpfile.ts');