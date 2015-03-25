var gulp     = require('gulp');
var Form     = require('microscope-console').Form;
var GulpForm = require('./GulpForm');
var GitForm  = require('./GitForm');

var WorkflowForm = Form.extend({

    initialize: function (cb) {
        this.cb = cb;

        this.model = [{
            type: 'list',
            name: 'tool',
            message: 'What would you like to use ?',
            choices: [ 'Gulp', 'Git' ]
        }];

        this.render();
    },

    response: function (answer) {
        if(answer.tool == 'Gulp'){
            new GulpForm(this.cb);
        }else {
            new GitForm(this.cb);
        }
    }
});

module.exports = WorkflowForm;