var postcss = require('gulp-postcss');
var gulp = require('gulp');

gulp.task('serve', ['css'], function () {
  gulp.watch("./styles/*.css", ['css']);
});

gulp.task('css', function () {
  var plugins = [

  ];
  return gulp.src('./styles/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['serve'])
