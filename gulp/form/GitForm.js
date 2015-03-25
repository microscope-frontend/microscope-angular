var Form = require('microscope-console').Form;
var gulp = require('gulp');
var exec = require('child_process').exec;

var GitForm = Form.extend({

    initialize: function (gulpCallback) {
        this.cb = gulpCallback;

        this.model = [{
            type: 'list',
            name: 'command',
            message: 'Please select git command',
            choices: [
                'add all files',
                'commit all and message',
                'push to master',
                'pull from master'
            ]
        }];

        this.render();
    },

    response: function (answer) {
        console.log('\n');
        var command = 'git status';
        
        switch(answer.command){
            case 'add all files':
                command = 'git add .';
            break;

            case 'commit all':
                command = 'git commit -a';
            break;

            case 'push to master':
                command = 'git push origin master';
            break;

            case 'pull from master':
                command = 'git pull origin master';
            break;
        }

        var child = exec(command, this.handleExecError.bind(this));
        child.stdout.on('data', this.output);
        child.stderr.on('data', this.output);
        child.on('exit', this.cb);
        
    },

    output: function (data) {
        console.log(data);
    },

    handleExecError: function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ', error);
        }
    }
});



module.exports = GitForm;