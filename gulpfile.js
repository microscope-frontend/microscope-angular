var gulp         = require('gulp');
var WorkflowForm = require('./gulp/form/WorkflowForm');
require('./gulp/build');
require('./gulp/serve');
require('./gulp/test');
require('./gulp/docs');

// default task => instanciate GulpForm
gulp.task('default', function (cb) {
	var g = new WorkflowForm(cb);
});