declare var require;

var gulp = require('gulp');
var util = require('gulp-util');
var ts = require('gulp-typescript');
var Builder = require('systemjs-builder');
var fs = require('fs');
var rimraf = require('rimraf');
var concat = require('gulp-concat');
let jsmn = require('gulp-jasmine');
var runSequence = require('run-sequence');
var process = require('process');
var merge = require('merge-stream');
var exec = require('child_process').exec;
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('webpack');
const childProcess = require('child_process');
const rollup = require('rollup');

import AngularServiceWorkerPlugin from './src/webpack';

let assign = (dest, ...sources) => {
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      dest[key] = source[key];
    });
  });
  return dest;
}

var systemCompilerConfig = assign({}, 
  JSON.parse(fs.readFileSync('./tsconfig.json')).compilerOptions,
  {
    typescript: require('typescript')
  }
);

var commonCompilerConfig = assign({},
  systemCompilerConfig,
  {
    "module": "commonjs"
  }
);

var umdCompilerConfig = assign({},
  systemCompilerConfig,
  {
    "module": "umd"
  }
);

gulp.task('default', ['worker:build']);

gulp.task('clean', (done) => {
  rimraf('./tmp', () => {
    rimraf('./dist', done);
  });
});

gulp.task('prepublish', done => runSequence(
  'build',
  done
));

gulp.task('build', done => runSequence(
  'clean',
  [
    'task:companion:build',
    'task:webpack:build',
    'task:worker:build',
    'task:package:copy_deploy',
  ],
  done
));

gulp.task('worker:build', done => runSequence(
  'clean',
  'task:worker:build',
  done));

gulp.task('companion:build', done => runSequence(
  'clean',
  'task:companion:build',
  done));

gulp.task('task:webpack_test:pack', done => {
  console.log(process.cwd());
  webpack({
    context: `${process.cwd()}/src/test/webpack`,
    entry: './index.js',
    output: {
      path: `${process.cwd()}/tmp/src/test/webpack`,
      filename: 'index.js'
    },
    plugins: [
      new AngularServiceWorkerPlugin()
    ]
  }, () => done())
});

gulp.task('task:webpack:build', done => runSequence(
  'task:webpack:compile',
  'task:webpack:copy_deploy',
  done
));

gulp.task('task:webpack:compile', done => {
  childProcess.execSync('node_modules/.bin/tsc -p tsconfig.webpack.json');
  done();
});

gulp.task('task:webpack:copy_deploy', () => gulp
  .src([
    'tmp/es5/src/webpack/**/*.d.ts',
    'tmp/es5/src/webpack/**/*.js',
    'tmp/es5/src/webpack/**/*.js.map',
  ], {
    base: 'tmp/es5/src/webpack'
  })
  .pipe(gulp.dest('dist/webpack')));

gulp.task('task:companion:build', done => runSequence(
  'task:companion:compile_esm',
  'task:companion:bundle',
  'task:companion:minify',
  'task:companion:copy_deploy',
  done));

gulp.task('task:companion:compile_esm', done => {
  childProcess.execSync('node_modules/.bin/ngc -p tsconfig.companion.json');
  done();
});

gulp.task('task:companion:bundle', done => {
  rollup.rollup({
    entry: 'tmp/esm/src/companion/index.js',
  }).then(bundle => bundle.write({
    format: 'umd',
    moduleName: 'ng.serviceWorker',
    dest: 'tmp/es5/src/companion/bundles/service-worker.umd.js',
    globals: {
      '@angular/core': 'ng.core',
      'base64-js': 'Base64Js',
      'rxjs/add/observable/concat': 'Rx',
      'rxjs/add/observable/defer': 'Rx',
      'rxjs/add/observable/empty': 'Rx',
      'rxjs/add/observable/from': 'Rx',
      'rxjs/add/observable/fromEvent': 'Rx',
      'rxjs/add/observable/merge': 'Rx',
      'rxjs/add/observable/of': 'Rx',
      'rxjs/add/observable/timer': 'Rx',
      'rxjs/add/operator/cache': 'Rx',
      'rxjs/add/operator/concatMap': 'Rx',
      'rxjs/add/operator/do': 'Rx',
      'rxjs/add/operator/expand': 'Rx',
      'rxjs/add/operator/filter': 'Rx',
      'rxjs/add/operator/first': 'Rx',
      'rxjs/add/operator/let': 'Rx',
      'rxjs/add/operator/mergeMap': 'Rx',
      'rxjs/add/operator/map': 'Rx',
      'rxjs/add/operator/reduce': 'Rx',
      'rxjs/add/operator/switchMap': 'Rx',
      'rxjs/add/operator/publishReplay': 'Rx',
      'rxjs/add/operator/share': 'Rx',
      'rxjs/add/operator/take': 'Rx',
      'rxjs/add/operator/takeWhile': 'Rx',
      'rxjs/Observable': 'Rx'
    }
  }))
  .catch(err => console.log(err))
  .then(() => done());
});

gulp.task('task:companion:minify', () => gulp
  .src([
    'tmp/es5/src/companion/bundles/service-worker.umd.js'
  ], {base: 'tmp'})
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('tmp')));

gulp.task('task:worker:build', done => 
  runSequence(
    'task:worker:compile_system',
    'task:worker:bundle',
    'task:worker:minify',
    'task:worker:copy_deploy',
    done
  ));

gulp.task('task:worker:compile_system', () => {
  const stream = gulp
    .src([
      'src/worker/**/*.ts',
      'src/typings/**/*.d.ts',
      'typings/globals/**/*.d.ts',
      'typings/modules/**/*.d.ts'
    ])
    .pipe(ts(systemCompilerConfig));
  return merge([
    stream.js.pipe(gulp.dest(systemCompilerConfig.outDir)),
    stream.dts.pipe(gulp.dest(systemCompilerConfig.outDir))
  ]);
});

gulp.task('task:worker:compile_common', () => {
  const stream = gulp
    .src([
      'src/worker/**/*.ts',
      'src/typings/**/*.d.ts',
      'typings/globals/**/*.d.ts', 
      'typings/modules/**/*.d.ts'
    ])
    .pipe(ts(commonCompilerConfig));
  return merge([
    stream.js.pipe(gulp.dest(commonCompilerConfig.outDir)),
    stream.dts.pipe(gulp.dest(commonCompilerConfig.outDir))
  ]);
});

gulp.task('task:companion:copy_deploy', () => gulp
  .src([
    'tmp/es5/src/companion/**/*.js',
    'tmp/esm/src/companion/**/*.d.ts',
    'tmp/esm/src/companion/**/*.js',
    'tmp/esm/src/companion/**/*.js.map',
    'tmp/esm/src/companion/**/*.metadata.json',
  ])
  .pipe(gulp.dest('dist')));

gulp.task('task:worker:bundle', done => {
  var builder = new Builder();
  builder.config({
    map: {
      'worker': 'tmp/es5/src/worker',
      'rxjs': 'node_modules/rxjs',
      'jshashes': 'node_modules/jshashes/hashes.js'
    },
    packages: {
      'worker': {
        defaultExtension: 'js'
      },
      'rxjs': {
        defaultExtension: 'js'
      }
    }
  });
  builder
    .buildStatic('worker/browser_entry', 'tmp/es5/worker.js')
    .then(() => done());
});

gulp.task('task:worker:minify', () => gulp
  .src([
    'tmp/es5/worker.js'
  ], {base: 'tmp/es5'})
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('tmp/es5')));

gulp.task('task:worker:copy_deploy', () => gulp
  .src([
    'tmp/es5/worker.js',
    'tmp/es5/worker.min.js',
  ], {base: 'tmp/es5'})
  .pipe(gulp.dest('dist/worker')));

gulp.task('e2e_harness:build', done => runSequence(
  'clean',
  'task:e2e_harness:build',
  done));

gulp.task('e2e_harness:debug', done => runSequence(
  'clean',
  'task:e2e_harness:debug',
  done));

gulp.task('task:e2e_harness:build', done => runSequence([
  'task:e2e_harness:build_worker',
  'task:e2e_harness:copy_modules',
  'task:e2e_harness:copy_index',
  'task:e2e_harness:build_primary'
], done));

gulp.task('task:e2e_harness:debug', done => runSequence([
  'task:e2e_harness:build',
  'task:e2e_harness:copy_debug'
]));

gulp.task('task:e2e_harness:build_primary', done => runSequence(
  'task:companion:build',
  [
    'task:e2e_harness:compile',
    'task:e2e_harness:copy_companion'
  ],
  done));

gulp.task('task:e2e_harness:build_worker', done => runSequence(
  'task:worker:build',
  'task:e2e_harness:copy_worker',
  done));

gulp.task('task:e2e_harness:compile', () => gulp
  .src([,
    'src/test/e2e/harness/client/**/*.ts',
    'typings/globals/**/*.d.ts',
    'typings/modules/**/*.d.ts'
  ], {base: '.'})
  .pipe(ts(systemCompilerConfig))
  .pipe(gulp.dest('tmp/es5')));
  
gulp.task('task:e2e_harness:copy_modules', () => gulp
  .src([
    'node_modules/@angular/**/*.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/rxjs/**/*.js',
    'node_modules/base64-js/base64js.min.js'
  ], {base: '.'})
  .pipe(gulp.dest('tmp/es5/src/test/e2e/harness/client')));

gulp.task('task:e2e_harness:copy_debug', () => gulp
  .src([
    'src/test/e2e/harness/client/debug/**/*.*'
  ], {base: 'src/test/e2e/harness/client/debug'})
  .pipe(gulp.dest('tmp/es5/src/test/e2e/harness/client')));

gulp.task('task:e2e_harness:copy_companion', () => gulp
  .src([
    'tmp/es5/src/companion/**/*.d.ts',
    'tmp/es5/src/companion/**/*.js',
    'tmp/es5/src/companion/**/*.metadata.json',
    'tmp/es5/src/companion/**/*.js.map'
  ], {base: 'tmp/es5/src/companion'})
  .pipe(gulp.dest('tmp/es5/src/test/e2e/harness/client/node_modules/@angular/service-worker')));

gulp.task('task:e2e_harness:copy_worker', () => gulp
  .src([
    'tmp/es5/worker.js',
  ], {base: 'tmp/es5'})
  .pipe(gulp.dest('tmp/es5/src/test/e2e/harness/client')));
  
gulp.task('task:e2e_harness:copy_index', () => gulp
  .src([
    'src/test/e2e/harness/client/index.html',
    'src/test/e2e/harness/client/manifest.webapp'
  ], {base: '.'})
  .pipe(gulp.dest('tmp/es5')));

gulp.task('task:e2e_tests:build', done => runSequence([
  'task:e2e_tests:compile',
  'task:e2e_tests:copy_protractor',
], done));

gulp.task('task:e2e_tests:compile', () => gulp
  .src([
    'src/test/e2e/spec/**/*.ts',
    'src/test/e2e/harness/server/**/*.ts',
    'src/typings/**/*.d.ts',
    'typings/globals/**/*.d.ts',
    'typings/modules/**/*.d.ts'
  ], {base: '.'})
  .pipe(ts(commonCompilerConfig))
  .pipe(gulp.dest('tmp/es5')));

gulp.task('task:e2e_tests:copy_protractor', () => gulp
  .src([
    'src/test/e2e/spec/protractor.config.js'
  ], {base: '.'})
  .pipe(gulp.dest('tmp/es5')));

gulp.task('task:unit_tests:compile', () => gulp
  .src([
    'src/test/unit/**/*.ts',
    'src/testing/**/*.ts',
    'src/typings/**/*.d.ts',
    'typings/globals/**/*.d.ts',
    'typings/modules/**/*.d.ts'
  ], {base: '.'})
  .pipe(ts(commonCompilerConfig))
  .pipe(gulp.dest('tmp/es5')));

gulp.task('test', done => runSequence(
  'test:unit',
  'test:e2e',
  done
));

gulp.task('test:unit', done => runSequence(
  'clean',
  [
    'task:unit_tests:compile',
    'task:worker:compile_common'
  ],
  'task:unit_tests:run',
  done
));

gulp.task('task:unit_tests:run', () => gulp
  .src([
    'tmp/**/*.spec.js'
  ], {base: '.'})
  .pipe(jsmn({
    verbose: true,
  })));

gulp.task('test:e2e', done => runSequence(
  'clean',
  'task:e2e_tests:config_check',
  [
    'task:e2e_tests:build',
    'task:e2e_harness:build',
  ],
  'task:e2e_tests:run',
  done
));

gulp.task('task:e2e_tests:config_check', done => {
  fs.exists('./ngsw-config.json', (exists) => {
    if (!exists) {
      throw `ERROR: can't run e2e tests without a ngsw-config.json file`;
    }
    done();
  });
});

gulp.task('task:e2e_tests:run', done => {
  exec('protractor tmp/es5/src/test/e2e/spec/protractor.config.js', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    done();
  });
});

gulp.task('task:package:copy_deploy', () => gulp
  .src([
    'package.json'
  ])
  .pipe(gulp.dest('dist')));