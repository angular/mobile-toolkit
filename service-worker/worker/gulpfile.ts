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

gulp.task('default', ['worker:build']);

gulp.task('clean', (done) => {
  rimraf('./dist', done);
});

gulp.task('prepublish', ['build']);

gulp.task('build', done => runSequence(
  'clean',
  [
    'task:generator:build',
    'task:worker:build'
  ],
  done
));

gulp.task('worker:build', done => runSequence(
  'clean',
  'task:worker:build',
  done));
  
gulp.task('generator:build', done => runSequence(
  'clean',
  'task:generator:build',
  done
));


gulp.task('task:worker:build', done => 
  runSequence(
    'task:worker:compile_system',
    'task:worker:bundle',
    done
  ));

gulp.task('task:worker:compile_system', () => {
  const stream = gulp
    .src([
      'src/worker/**/*.ts',
      'src/typings/**/*.d.ts',
      'typings/globals/**/*.d.ts'
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
      'typings/globals/**/*.d.ts'
    ])
    .pipe(ts(commonCompilerConfig));
  return merge([
    stream.js.pipe(gulp.dest(commonCompilerConfig.outDir)),
    stream.dts.pipe(gulp.dest(commonCompilerConfig.outDir))
  ]);
});

gulp.task('task:worker:bundle', done => {
  var builder = new Builder();
  builder.config({
    map: {
      'worker': 'dist/src/worker',
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
    .buildStatic('worker/browser_entry', 'dist/worker.js')
    .then(() => done());
});

gulp.task('task:worker:minify', () => gulp
  .src([
    'dist/worker.js'
  ], {base: 'dist'})
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('dist')));

gulp.task('task:generator:build', done => runSequence(
  'task:generator:compile',
  'task:generator:copy_deploy',
  done));

gulp.task('task:generator:compile', () => gulp
  .src([
    'src/generator/**.ts',
    'typings/globals/**/*.d.ts'
  ])
  .pipe(ts(commonCompilerConfig))
  .pipe(gulp.dest('dist')));

gulp.task('task:generator:copy_deploy', () => gulp
  .src([
    'dist/src/generator/**/*.js'
  ])
  .pipe(gulp.dest('dist/generator')));

gulp.task('e2e_harness:build', done => runSequence(
  'clean',
  'task:e2e_harness:build',
  done
));

gulp.task('task:e2e_harness:build', done => runSequence([
  'task:e2e_harness:build_worker',
  'task:e2e_harness:compile',
  'task:e2e_harness:copy_modules',
  'task:e2e_harness:copy_index'
], done));

gulp.task('task:e2e_harness:build_worker', done => runSequence(
  'task:worker:build',
  'task:e2e_harness:copy_worker',
  done
));

gulp.task('task:e2e_harness:compile', () => gulp
  .src([,
    'src/test/e2e/harness/client/**/*.ts',
    'typings/globals/**/*.d.ts'
  ], {base: '.'})
  .pipe(ts(systemCompilerConfig))
  .pipe(gulp.dest('dist')));
  
gulp.task('task:e2e_harness:copy_modules', () => gulp
  .src([
    'node_modules/@angular/**/*.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/rxjs/**/*.js'
  ], {base: '.'})
  .pipe(gulp.dest('dist/src/test/e2e/harness/client')));

  
gulp.task('task:e2e_harness:copy_worker', () => gulp
  .src([
    'dist/worker.js',
  ], {base: 'dist'})
  .pipe(gulp.dest('dist/src/test/e2e/harness/client')));
  
gulp.task('task:e2e_harness:copy_index', () => gulp
  .src([
    'src/test/e2e/harness/client/index.html'
  ], {base: '.'})
  .pipe(gulp.dest('dist')));

gulp.task('task:e2e_tests:build', done => runSequence([
  'task:e2e_tests:compile',
  'task:e2e_tests:copy_protractor',
], done));

gulp.task('task:e2e_tests:compile', () => gulp
  .src([
    'src/test/e2e/spec/**/*.ts',
    'src/test/e2e/harness/server/**/*.ts',
    'src/typings/**/*.d.ts',
    'typings/globals/**/*.d.ts'
  ], {base: '.'})
  .pipe(ts(commonCompilerConfig))
  .pipe(gulp.dest('dist')));

gulp.task('task:e2e_tests:copy_protractor', () => gulp
  .src([
    'src/test/e2e/spec/protractor.config.js'
  ], {base: '.'})
  .pipe(gulp.dest('dist')));

gulp.task('task:unit_tests:compile', () => gulp
  .src([
    'src/test/unit/**/*.ts',
    'src/testing/**/*.ts',
    'src/typings/**/*.d.ts',
    'typings/globals/**/*.d.ts'
  ], {base: '.'})
  .pipe(ts(commonCompilerConfig))
  .pipe(gulp.dest('dist')));

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
    'dist/**/*.spec.js'
  ], {base: '.'})
  .pipe(jsmn({
    verbose: true,
  })));

gulp.task('test:e2e', done => runSequence(
  'clean',
  [
    'task:e2e_tests:build',
    'task:e2e_harness:build',
  ],
  'task:e2e_tests:run',
  done
));

gulp.task('task:e2e_tests:run', done => {
  exec('protractor dist/src/test/e2e/spec/protractor.config.js', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    done();
  });
});
