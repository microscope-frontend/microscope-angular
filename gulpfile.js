var gulp = require('gulp');

require('./tasks/build');
require('./tasks/sass');
require('./tasks/serve');
require('./tasks/test');
require('./tasks/watch');

gulp.task('build', ['browserify', 'sass', 'fonts', 'assets','templates']);
gulp.task('release', ['browserify:release', 'sass', 'fonts', 'assets','templates']);
gulp.task('default', ['build']);