var gulp = require('gulp');
var babel = require('gulp-babel')
var less = require('gulp-less')
var browserSync = require('browser-sync');

gulp.task('default', ['watch', 'browserSync', 'babel', 'less'])

gulp.task('watch', function() {
  gulp.watch('app/*.html', browserSync.reload)
  //gulp.watch('app/js/*.js', browserSync.reload)
  gulp.watch('app/es6/*.es6', ['babel', browserSync.reload])
  gulp.watch('app/less/*.less', ['less', browserSync.reload])
});

gulp.task('babel', function() {
  return gulp.src('app/es6/*.es6')
      .pipe(babel())
      .pipe(gulp.dest('app/js'))
})

gulp.task('less', function() {
  return gulp.src('app/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('app/css'))
})

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})