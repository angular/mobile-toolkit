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
var logger = require('gulp-logger');
var process = require('process');

var systemCompilerConfig = JSON.parse(fs.readFileSync('./tsconfig.json')).compilerOptions;
var commonCompilerConfig = JSON.parse(fs.readFileSync('./tsconfig.cjs.json')).compilerOptions;

gulp.task('default', ['build']);

gulp.task('clean', (done) => {
  rimraf('./dist', done);
});

gulp.task('build', (done) => runSequence(
  'clean',
  '!build:system',
  done));

gulp.task('!build:system', () => gulp
  .src([
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    'typings/browser/**/*.d.ts'
  ])
  .pipe(ts(systemCompilerConfig))
  .pipe(gulp.dest('dist/src')));
  
gulp.task('!build:commonjs', () => gulp
  .src([
    'src/**/*.ts',
    'typings/browser/**/*.d.ts'
  ])
  .pipe(ts(commonCompilerConfig))
  .pipe(gulp.dest('dist/src')));
  
gulp.task('build:test', (done) => runSequence(
  'clean',
  '!build:commonjs',
  done
));

gulp.task('test', ['build:test'], () => gulp
  .src([
    'dist/src/**/*.spec.js'
  ], {base: '.'})
  .pipe(jsmn({
    verbose: true,
  })));

gulp.task('bundle', ['build'], () => {
  var builder = new Builder();
  builder.config({
    map: {
      'worker': 'dist/src',
      'angular2': 'node_modules/angular2',
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
      'angular2': {
        defaultExtension: 'js'
      },
      'reflect-metadata': {
        format: 'global'
      }
    }
  });
  builder.buildStatic('worker/browser_entry', 'dist/worker.js');
});
