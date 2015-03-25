var gulp = require('gulp');
require('./gulp/build');
require('./gulp/serve');
require('./gulp/test');
require('./gulp/docs');
var GulpForm = require('./gulp/form/GulpForm');

// default task => instanciate GulpForm
gulp.task('default', function (cb) {
	var g = new GulpForm(cb);
});