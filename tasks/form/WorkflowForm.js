var gulp         = require('gulp');
var Form         = require('microscope-console').Form;
var GulpTaskForm = require('./GulpTaskForm');

var WorkflowForm = Form.extend({

    banner: 'WORKFLOW',

    initialize: function (cb) {
        this.cb = cb;

        this.model = [{
            type: 'list',
            name: 'tool',
            message: 'What would you like to use ?',
            choices: [ 'Gulp', 'exit' ]
        }];

        this.render();
    },

    response: function (answer) {
        if(answer.tool == 'Gulp'){
            new GulpTaskForm(this.cb);
        }else {
            this.cb();
        }
    }
});

module.exports = WorkflowForm;