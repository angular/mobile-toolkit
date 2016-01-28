declare var require;

var gulp = require('gulp');
var util = require('gulp-util');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
var Builder = require('systemjs-builder');

gulp.task('default', ['build:worker'], () => {});

gulp.task('bundle:worker', () => {
	var builder = new Builder();
	return builder
	  .loadConfig('system.config.js')
	  .then(() => {
		 return builder.buildStatic('app/index', 'dist/worker.js', {"minify": util.env.production}) 
	  });
});

gulp.task('build:worker', () => {
	
})

gulp.task('build:tests', () => {
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