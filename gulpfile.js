var gulp = require("gulp");
var zip = require('gulp-clean-css');
var compile = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');


var origemScss = "./source/scss/*.scss";
var destinoScss = "./dist/css";
var origemHtml = "./source/*.html";
var destinoHtml = "./dist"


gulp.task("compila", function() {
  return gulp.src(origemScss)
    .pipe(compile().on("error",compile.logError));
});

gulp.task("zipa", function() {
  return gulp.src(origemScss)
    .pipe(zip({compatibility: '*'}))
    .pipe(gulp.dest(destinoScss));
});

gulp.task('minimiza', function() {
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