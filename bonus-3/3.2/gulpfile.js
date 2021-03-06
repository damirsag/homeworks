const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');


// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./css/*.css").on('change', browserSync.reload);
});

//clean CSS task
gulp.task('minify-css', () => {

  return gulp.src(['./css/*.css', '!./css/*.min.css'])
  .pipe(cleanCSS({ level: 2 }))
  .pipe(rename({ suffix: '.min'}))  
  .pipe(gulp.dest('./css'));
});
