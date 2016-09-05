var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var runSequence = require('run-sequence');

// build src
gulp.task('browserify', function () {
    return browserify('./src/app.js', {
        debug: true
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./www/'));
});

// build in release mode
gulp.task('browserify:release', function () {
    return browserify('./src/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./www/'));
});

// assets tasks
gulp.task('assets', function () {
    return gulp.src('./assets/**')
        .pipe(gulp.dest('./www'));
});

gulp.task('fonts', function () {
    return gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
        .pipe(gulp.dest('./www/fonts'));
});

// templates tasks
gulp.task('templates', function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./www/'));
});

// clean build folder task
gulp.task('clean', function (cb) {
    del(['./www/']).then(function () {
        cb();
    });
});