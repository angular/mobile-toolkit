declare var require;

var gulp = require('gulp');
var util = require('gulp-util');
var Builder = require('systemjs-builder');

gulp.task('default', ['build'], () => {});

gulp.task('build', () => {
	var builder = new Builder();
	return builder
	  .loadConfig('system.config.js')
	  .then(() => {
		 return builder.buildStatic('app/index', 'dist/worker.js', {"minify": util.env.production}) 
	  });
});