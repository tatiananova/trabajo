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
gulp.task('build-html', function () {
  return gulp.src(['*.html','pa*/*.html'])
      .pipe(useref())
      .pipe(gulpif('j*/*.js', uglify()))
      .pipe(gulpif('cs*/*.css', minifyCss()))
      .pipe(gulp.dest('build'));
});
gulp.task('build-assets', function(){
  return gulp.src('im*/**').
  pipe(gulp.dest('build'))
})
gulp.task('build',['build-html','build-assets'])