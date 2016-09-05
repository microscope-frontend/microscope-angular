// imports
var gulp = require('gulp');

// watchers tasks
gulp.task('watch', function () {
    gulp.watch(['./scss/**/*.scss'], ['sass']);
    gulp.watch(['./src/**/*.js'], ['browserify']);
    gulp.watch(['./assets/**'], ['assets']);
    gulp.watch(['./src/**/*.html'], ['templates']);
});