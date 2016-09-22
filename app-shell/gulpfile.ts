declare var require;

const childProcess = require('child_process');
const commonjs = require('rollup-plugin-commonjs');
const gulp = require('gulp');
const jsmn = require('gulp-jasmine');
const rimraf = require('rimraf');
const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const runSequence = require('run-sequence');


gulp.task('clean', done => {
  rimraf('./tmp', () => {
    rimraf('./dist', done);
  });
});

gulp.task('build', done => runSequence(
  'clean',
  'task:build',
  'task:deploy',
  done));

gulp.task('test', done => runSequence(
  'clean',
  'task:test',
  done));

gulp.task('task:build', done => runSequence(
  'task:app:compile_esm',
  'task:app:bundle',
  done));

gulp.task('task:test', done => runSequence(
  'task:app:compile_es5',
  'task:app:test',
  done))

gulp.task('task:deploy', done => runSequence(
  [
    'task:app:deploy',
    'task:bundles:deploy',
    'task:package:deploy',
  ],
  done));

gulp.task('task:app:compile_es5', () => {
  childProcess.execSync('node_modules/.bin/tsc -p tsconfig.es5.json');
});

gulp.task('task:app:compile_esm', () => {
  childProcess.execSync('node_modules/.bin/ngc -p tsconfig.esm.json');
});

gulp.task('task:app:bundle', done => rollup
  .rollup({
    entry: 'tmp/esm/src/index.js',
    plugins: [
      nodeResolve({jsnext: true, main: true}),
      commonjs({
        include: 'node_modules/**',
      }),
    ],
    external: [
      '@angular/core',
    ]
  })
  .then(bundle => bundle.write({
    format: 'umd',
    moduleName: 'ng.appShell',
    dest: 'tmp/es5/bundles/app-shell.umd.js',
    globals: {
      '@angular/core': 'ng.core',
    },
  })));

gulp.task('task:app:deploy', () => gulp
  .src([
    'tmp/esm/src/index.d.ts',
    'tmp/esm/src/index.js',
    'tmp/esm/src/index.js.map',
    'tmp/esm/src/index.metadata.json',
    'tmp/esm/src/app/**/*.d.ts',
    'tmp/esm/src/app/**/*.js',
    'tmp/esm/src/app/**/*.js.map',
    'tmp/esm/src/app/**/*.metadata.json',
  ], {base: 'tmp/esm/src'})
  .pipe(gulp.dest('dist')));

gulp.task('task:app:test', () => gulp
  .src([
    'tmp/es5/src/unit_tests.js',
  ], {base: '.'})
  .pipe(jsmn({
    verbose: true,
  })));

gulp.task('task:bundles:deploy', () => gulp
  .src([
    'tmp/es5/bundles/**/*.js',
    'tmp/es5/bundles/**/*.js.map',
  ], {base: 'tmp/es5'})
  .pipe(gulp.dest('dist')));

gulp.task('task:package:deploy', () => gulp
  .src([
    'package.json'
  ])
  .pipe(gulp.dest('dist')));
