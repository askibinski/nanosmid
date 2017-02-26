var gulp = require("gulp");

var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


var babelify = require('babelify');

gulp.task('default', function () {
  browserify({
    entries: './source/app.js',
    debug: true,
    transform: ['babelify']
  })
  .bundle()
  .pipe(source('./app.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest("scripts"));
});

