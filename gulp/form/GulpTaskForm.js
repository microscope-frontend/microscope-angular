var Form = require('microscope-console').Form;
var gulp = require('gulp');

// Gulp tasks form
var GulpTaskForm = Form.extend({

    banner: 'GULP TASKS',

    initialize: function (gulpCallback) {
        this.cb = gulpCallback;

        this.model = [{
            type: 'list',
            name: 'task',
            message: 'What would you like to do ?',
            choices: [
                'serve',
                'build',
                'release',
                'test',
                'docs'
            ]
        }];

        this.render();
    },

    response: function (answer) {
        console.log('\n');
        gulp.start(answer.task, function () {
            this.cb();
        });
    }
});

module.exports = GulpTaskForm;