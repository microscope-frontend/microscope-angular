// Imports
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

// scss preprocessor 
gulp.task('sass', function (done) {
  gulp.src('./scss/app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({keepSpecialComments: 0}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});