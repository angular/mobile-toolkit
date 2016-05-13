declare var require;

let gulp = require('gulp');
let ngsw = require('@angular/service-worker');

gulp.task('default', ['copy:static', 'copy:sw', 'build:manifest'])

gulp.task('copy:sw/dev', () => gulp
  .src([
    '../worker/dist/worker.js'
  ])
  .pipe(gulp.dest('webroot')));

gulp.task('copy:static', () => gulp
  .src([
    'src/**/*.html'
  ])
  .pipe(gulp.dest('webroot')));

gulp.task('copy:sw', () => gulp
  .src([
    'node_modules/@angular/service-worker/dist/worker.js'
  ])
  .pipe(gulp.dest('webroot')));

gulp.task('build:manifest', () => ngsw
  .gulpGenManifest({
    group: [
      {
        name: 'html',
        sources: gulp.src('src/**/*.html')
      }
    ]
  })
  .pipe(gulp.dest('webroot')));