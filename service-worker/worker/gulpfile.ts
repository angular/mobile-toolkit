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

var systemCompilerConfig = JSON.parse(fs.readFileSync('./tsconfig.json')).compilerOptions;
var commonCompilerConfig = JSON.parse(fs.readFileSync('./tsconfig.cjs.json')).compilerOptions;

commonCompilerConfig.typescript = require('typescript');
systemCompilerConfig.typescript = require('typescript');

gulp.task('default', ['prepublish']);

gulp.task('clean', (done) => {
  rimraf('./dist', done);
});

gulp.task('build', (done) => runSequence(
  'clean',
  '!build:system',
  done));

gulp.task('prepublish', done => runSequence(
  'clean',
  ['!bundle', 'copy:generator'],
  done));

gulp.task('!build:system', () => {
  const stream = gulp
    .src([
      'src/**/*.ts',
      '!src/**/*.spec.ts',
      'typings/globals/**/*.d.ts'
    ])
    .pipe(ts(systemCompilerConfig));
  return merge([
    stream.js.pipe(gulp.dest(systemCompilerConfig.outDir)),
    stream.dts.pipe(gulp.dest(systemCompilerConfig.outDir))
  ]);
});

gulp.task('!build:commonjs', () => {
  const stream = gulp
    .src([
      'src/**/*.ts',
      'typings/globals/**/*.d.ts'
    ])
    .pipe(ts(commonCompilerConfig));
  return merge([
    stream.js.pipe(gulp.dest(commonCompilerConfig.outDir)),
    stream.dts.pipe(gulp.dest(commonCompilerConfig.outDir))
  ]);
});

gulp.task('build:generator', () => gulp
  .src([
    'src/generator/**.ts',
    'typings/globals/**/*.d.ts'
  ])
  .pipe(ts(commonCompilerConfig))
  .pipe(gulp.dest('dist/src/generator')));

gulp.task('build:test_harness', done => runSequence(
  'clean',
  [
    '!build:test_harness:client',
    '!build:test_harness:tests'
  ],
  done));
  
gulp.task('!build:test_harness:client', done => runSequence(
  [
    '!bundle',
    '!build:test_harness:client:compile',
    'copy:test_harness:client:local',
    'copy:test_harness:client:modules'
  ],
  'copy:test_harness:client:worker',
  done
));

gulp.task('!build:test_harness:client:compile', () => gulp
  .src([
    'typings/globals/**/*.d.ts',
    'src/testing/harness/client/**/*.ts'
  ])
  .pipe(ts(systemCompilerConfig))
  .pipe(gulp.dest('dist/harness/client')));

gulp.task('copy:test_harness:client:local', () => gulp
  .src([
    'src/testing/harness/client/index.html'
  ], {base: 'src/testing/harness/client'})
  .pipe(gulp.dest('dist/harness/client')));

gulp.task('copy:test_harness:client:modules', () => gulp
  .src([
    'node_modules/@angular/**/*.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/rxjs/**/*.js'
  ], {base: '.'})
  .pipe(gulp.dest('dist/harness/client')))
  
gulp.task('copy:test_harness:client:worker', () => gulp
  .src([
    'dist/worker.js'
  ])
  .pipe(gulp.dest('dist/harness/client')));
  
gulp.task('!build:test_harness:tests', [
  '!copy:test_harness:tests:protractor',
  '!build:test_harness:tests:compile'
]);
  
gulp.task('!build:test_harness:tests:compile', () => gulp
  .src([
    'typings/globals/**/*.d.ts',
    'src/typings/*.d.ts',
    'src/e2e/**/*.ts',
    'src/testing/harness/server/**/*.ts',
  ], {base: '.'})
  .pipe(ts(commonCompilerConfig))
  .pipe(gulp.dest('dist/e2e')));

gulp.task('!copy:test_harness:tests:protractor', () => gulp
  .src([
    'src/e2e/**/protractor.config.js'
  ], {base: '.'})
  .pipe(gulp.dest('dist/e2e')));

gulp.task('copy:generator', ['build:generator'], () => gulp
  .src([
    'dist/src/generator/**/*.js'
  ])
  .pipe(gulp.dest('dist/generator')));

gulp.task('build:test', (done) => runSequence(
  'clean',
  '!build:commonjs',
  done
));

gulp.task('test', ['build:test'], () => gulp
  .src([
    'dist/**/*.spec.js'
  ], {base: '.'})
  .pipe(jsmn({
    verbose: true,
  })));

gulp.task('!bundle', ['!build:system'], () => {
  var builder = new Builder();
  builder.config({
    map: {
      'worker': 'dist/src',
      '@angular': 'node_modules/@angular',
      'rxjs': 'node_modules/rxjs',
      'reflect-metadata': 'node_modules/reflect-metadata/temp/Reflect.js',
      'jshashes': 'node_modules/jshashes/hashes.js'
    },
    packages: {
      'worker': {
        defaultExtension: 'js'
      },
      'rxjs': {
        defaultExtension: 'js'
      },
      '@angular/core': {
        defaultExtension: 'js',
        main: 'index.js'
      },
      'reflect-metadata': {
        format: 'global'
      }
    }
  });
  builder.buildStatic('worker/browser_entry', 'dist/worker.js');
});

