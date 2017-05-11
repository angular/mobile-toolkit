const childProcess = require('child_process');
const fs = require('fs');
const process = require('process');

const gulp = require('gulp');
const jsmn = require('gulp-jasmine');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify');
const rimraf = require('rimraf');
const runSequence = require('run-sequence');

const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
import AngularServiceWorkerPlugin from './src/webpack';

declare var __dirname;

class SwRewriter {
  resolveId(id, from) {
    const prefix = '@angular/service-worker';
    if (id.startsWith(prefix)) {
      return `${__dirname}/tmp/esm/src/${id.split(prefix).pop()}/index.js`;
    }
  }
}

gulp.task('default', ['build']);

gulp.task('clean', (done) => {
  rimraf('./tmp', () => {
    rimraf('./dist', done);
  });
});

gulp.task('prepublish', done => runSequence(
  'clean',
  'task:prepublish',
  done));

gulp.task('task:prepublish', done => runSequence(
  'task:build',
  'task:deploy',
  done));

gulp.task('build', done => runSequence(
  'clean',
  'task:build',
  done));

gulp.task('task:build', done => runSequence(
  [
    'task:commonjs:compile',
    'task:esm:compile',
  ],
  [
    'task:companion:bundle',
    'task:worker:basic:bundle',
  ],
  'task:bundles:minify',
  done));

gulp.task('task:deploy', done => runSequence(
  'task:assets:deploy',
  'task:bundles:deploy',
  'task:commonjs:deploy',
  'task:esm:deploy',
  'task:esm:deploy_metadata',
  'task:package:deploy',
  done));

gulp.task('task:assets:deploy', () => gulp
  .src([
    'src/build/assets/**.js',
  ], {base: 'src'})
  .pipe(gulp.dest('dist')));

gulp.task('task:commonjs:compile', () => {
  childProcess.execSync('node_modules/.bin/tsc -p tsconfig.es5.json');
});

gulp.task('task:commonjs:rewrite_plugins', () => gulp
  .src([
    'tmp/es5/src/plugins/**/*.js'
  ])
  .pipe(replace(/'@angular\/service-worker\/worker'/, "'../../worker'"))
  .pipe(replace(/"@angular\/service-worker\/worker"/g, "'../../worker'"))
  .pipe(gulp.dest('tmp/es5/src/plugins')));

gulp.task('task:commonjs:deploy', () => gulp
  .src([
    'tmp/es5/src/webpack.d.ts',
    'tmp/es5/src/webpack.js',
    'tmp/es5/src/webpack.js.map',
    'tmp/es5/src/build/**/*.d.ts',
    'tmp/es5/src/build/**/*.js',
    'tmp/es5/src/build/**/*.js.map',
  ], {base: 'tmp/es5/src'})
  .pipe(gulp.dest('dist')));

gulp.task('task:esm:compile', () => {
  childProcess.execSync('node_modules/.bin/ngc -p tsconfig.esm.json');
});

gulp.task('task:esm:deploy', () => gulp
  .src([
    'tmp/esm/src/**/*.d.ts',
    'tmp/esm/src/**/*.js',
    'tmp/esm/src/**/*.js.map',
  ])
  .pipe(gulp.dest('dist')));

gulp.task('task:esm:deploy_metadata', () => gulp
  .src([
    'tmp/esm/src/index.metadata.json',
    'tmp/esm/src/companion/**/*.metadata.json'
  ], {base: 'tmp/esm/src'})
  .pipe(gulp.dest('dist')))

gulp.task('task:webpack_test:pack', done => {
  webpack({
    context: `${process.cwd()}/src/test/webpack`,
    entry: './index.js',
    output: {
      path: `${process.cwd()}/tmp/es5/src/test/webpack`,
      filename: 'index.js'
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: 'other.js'},
        {from: 'ignored.js'},
        {from: 'ngsw-manifest.json'},
      ]),
      new AngularServiceWorkerPlugin({baseHref: '/test'}),
    ]
  }, () => done())
});

gulp.task('task:companion:bundle', done => {
  rollup.rollup({
    entry: 'tmp/esm/src/companion/index.js',
  }).then(bundle => bundle.write({
    format: 'umd',
    moduleName: 'ng.serviceWorker',
    dest: 'tmp/es5/bundles/service-worker.umd.js',
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
      'rxjs/BehaviorSubject': 'Rx',
      'rxjs/Observable': 'Rx',
    }
  }))
  .catch(err => console.log(err))
  .then(() => done());
});

gulp.task('task:worker:basic:bundle', done => rollup
  .rollup({
    entry: 'tmp/esm/src/worker/builds/basic.js',
    plugins: [
      new SwRewriter(),
      nodeResolve({jsnext: true, main: true}),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/jshashes/hashes.js': ['SHA1']
        }
      })
    ]
  })
  .then(bundle => bundle.write({
    format: 'iife',
    dest: 'tmp/es5/bundles/worker-basic.js',
  })));

gulp.task('task:worker:test:bundle', done => rollup
  .rollup({
    entry: 'tmp/esm/src/worker/builds/test.js',
    plugins: [
      new SwRewriter(),
      nodeResolve({jsnext: true, main: true}),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/jshashes/hashes.js': ['SHA1']
        }
      })
    ]
  })
  .then(bundle => bundle.write({
    format: 'iife',
    dest: 'tmp/es5/bundles/worker-test.js',
  })));

gulp.task('task:bundles:minify', () => gulp
  .src([
    'tmp/es5/bundles/**/*.js'
  ])
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('tmp/es5/bundles')));
  
gulp.task('task:companion:deploy', () => gulp
  .src([
    'tmp/esm/src/companion/**/*.d.ts',
    'tmp/esm/src/companion/**/*.js',
    'tmp/esm/src/companion/**/*.js.map',
    'tmp/esm/src/companion/**/*.metadata.json',
  ])
  .pipe(gulp.dest('dist')));

gulp.task('task:worker:deploy', () => gulp
  .src([
    'tmp/esm/src/worker/**/*.d.ts',
    'tmp/esm/src/worker/**/*.js',
    'tmp/esm/src/worker/**/*.js.map',
    'tmp/esm/src/worker/**/*.metadata.json',
  ])
  .pipe(gulp.dest('dist/worker')));

gulp.task('task:bundles:deploy', () => gulp
  .src('tmp/es5/bundles/**/*.js')
  .pipe(gulp.dest('dist/bundles')));

gulp.task('test', done => runSequence(
  'test:unit',
  'test:e2e',
  done
));

gulp.task('test:unit', done => runSequence(
  'clean',
  'task:test:unit',
  done));

gulp.task('task:test:unit', done => runSequence(
  'task:commonjs:compile',
  'task:commonjs:rewrite_plugins',
  'task:unit_tests:run',
  done
));

gulp.task('task:unit_tests:run', () => gulp
  .src([
    'tmp/es5/**/*.spec.js'
  ], {base: '.'})
  .pipe(jsmn({
    verbose: true,
  })));

gulp.task('test:e2e', done => runSequence(
  'clean',
  'task:test:e2e',
  done));

gulp.task('task:test:e2e', done => runSequence(
  'task:e2e_tests:prep',
  'task:e2e_tests:run',
  done));

gulp.task('task:e2e_tests:debug', done => runSequence(
  'task:e2e_tests:prep',
  'task:e2e_tests:copy_debug',
  done));

gulp.task('task:e2e_tests:prep', done => runSequence(
  [
    'task:commonjs:compile',
    'task:esm:compile',
    'task:e2e_tests:setup_chromedriver'
  ],
  [
    'task:companion:bundle',
    'task:worker:basic:bundle',
    'task:worker:test:bundle',
  ],
  'task:bundles:minify',
  [
    'task:e2e_tests:copy_static',
    'task:e2e_tests:copy_modules',
    'task:e2e_tests:copy_sw_bundle',
    'task:e2e_tests:copy_worker_bundle',
    'task:e2e_tests:copy_protractor',
  ],
  done));

gulp.task('task:e2e_tests:copy_modules', () => gulp
  .src([
    'node_modules/@angular/**/*.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/rxjs/**/*.js',
    'node_modules/base64-js/base64js.min.js'
  ], {base: '.'})
  .pipe(gulp.dest('tmp/es5/src/test/e2e/harness/client')));

gulp.task('task:e2e_tests:copy_sw_bundle', () => gulp
  .src([
    'tmp/es5/bundles/service-worker.umd.js',
  ], {base: 'tmp/es5/bundles'})
  .pipe(gulp.dest('tmp/es5/src/test/e2e/harness/client/node_modules/@angular/service-worker/bundles')));

gulp.task('task:e2e_tests:copy_worker_bundle', () => gulp
  .src([
    'tmp/es5/bundles/worker-basic.js',
    'tmp/es5/bundles/worker-basic.min.js',
    'tmp/es5/bundles/worker-test.js',
    'tmp/es5/bundles/worker-test.min.js',
  ], {base: 'tmp/es5/bundles'})
  .pipe(gulp.dest('tmp/es5/src/test/e2e/harness/client')));
  
gulp.task('task:e2e_tests:copy_static', () => gulp
  .src([
    'src/test/e2e/harness/client/index.html',
    'src/test/e2e/harness/client/manifest.webapp',
  ], {base: '.'})
  .pipe(gulp.dest('tmp/es5')));

gulp.task('task:e2e_tests:copy_protractor', () => gulp
  .src([
    'src/test/e2e/spec/protractor.config.js'
  ], {base: '.'})
  .pipe(gulp.dest('tmp/es5')));

gulp.task('task:e2e_tests:copy_debug', () => gulp
  .src([
    'src/test/e2e/harness/client/debug/**/*.*'
  ], {base: 'src/test/e2e/harness/client/debug'})
  .pipe(gulp.dest('tmp/es5/src/test/e2e/harness/client')));

gulp.task('task:e2e_tests:setup_chromedriver', () => {
  childProcess.execSync('node_modules/.bin/webdriver-manager update --chrome');
})

gulp.task('task:e2e_tests:run', done => {
  childProcess.exec('node_modules/.bin/protractor tmp/es5/src/test/e2e/spec/protractor.config.js', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    done();
  });
});

gulp.task('task:package:deploy', () => gulp
  .src([
    'package.json'
  ])
  .pipe(gulp.dest('dist')));
