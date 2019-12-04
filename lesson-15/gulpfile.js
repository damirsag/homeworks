const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');


// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.css", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};


function serveSass() {
  return src("./sass/*.sass")
    .pipe(sass())
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

exports.serve = bs;

//clean CSS task
function mincss() {

  return src(['./css/*.css', '!./css/*.min.css'])
  .pipe(cleanCSS({ level: 2 }))
  .pipe(rename({ suffix: '.min'}))  
  .pipe(gulp.dest('./css'));
};
