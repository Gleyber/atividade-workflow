var gulp = require("gulp");
var cleanCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');


var origemScss = "./source/scss/*.scss";
var destinoScss = "./dist/css";
var origemHtml = "./source/*.html";
var destinoHtml = "./dist"


gulp.task("compila-sass", function() {
  return gulp.src(origemScss)
    .pipe(cleanCss({compatibility: '*'}))
    .pipe(sass().on("error",sass.logError));
    .pipe(gulp.dest(destinoScss));
});

gulp.task('minimiza-html', function() {
  return gulp.src(origemHtml)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destinoHtml));
});

gulp.task('monitora',function(){
   return watch(origemHtml, { ignoreInitial: false })
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destinoHtml));

   return watch(origemScss, { ignoreInitial: false })
    .pipe(compile().on("error",compile.logError))
    .pipe(zip({compatibility: '*'}))
    .pipe(gulp.dest(destinoScss));
});