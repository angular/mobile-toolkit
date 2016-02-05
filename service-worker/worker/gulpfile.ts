declare var require;

var gulp = require('gulp');
var util = require('gulp-util');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
var Builder = require('systemjs-builder');
var clean = require('gulp-clean');

gulp.task('default', ['bundle:worker'], () => {});

gulp.task('clean', () => {
  return gulp
    .src('dist/', {read: false})
    .pipe(clean());
});

gulp.task('bundle:worker', ['clean'], () => {
	var builder = new Builder();
	return builder
	  .loadConfig('system.config.js')
	  .then(() => {
		 return builder.buildStatic('app/index', 'dist/worker.js', {"minify": util.env.production}) 
	  });
});

gulp.task('install:worker', ['bundle:worker'], () => {
  return gulp
    .src(['dist/worker.js'])
    .pipe(gulp.dest('../../../answers-app/dist'));
});

gulp.task('build:tests', ['clean'], () => {
	return gulp
		.src([
			'src/**/*.ts',
			'spec/**/*.ts',
			'typings/**/*.d.ts',
			'!typings/tsd.d.ts'
		])
		.pipe(ts({
			"module": "commonjs",
			"target": "es5",
			"noImplicitAny": false,
			"outDir": "dist",
			"sourceMap": false,
			"emitDecoratorMetadata": true,
			"experimentalDecorators": true,
			"moduleResolution": "node",
			"noResolve": false
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('test', ['build:tests'], () => {
	return gulp
	  .src(['dist/**/*_spec.js'])
	  .pipe(jasmine());
});