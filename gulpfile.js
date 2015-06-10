var gulp         = require('gulp');
var WorkflowForm = require('./tasks/form/WorkflowForm');
require('./tasks/build');
require('./tasks/serve');
require('./tasks/test');
require('./tasks/docs');

// default task => instanciate GulpForm
gulp.task('default', function (cb) {
	var g = new WorkflowForm(cb);
});