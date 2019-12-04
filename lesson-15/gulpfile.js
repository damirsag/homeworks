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