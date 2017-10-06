var gulp = require('gulp'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-clean-css');
var server = require('gulp-server-livereload');
 
gulp.task('server', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
gulp.task('Build', function () {
  return gulp.src(['*.html','pa*/*.html','im*/*.jpg'])
      .pipe(useref())
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', minifyCss()))
      .pipe(gulp.dest('dist'));
});