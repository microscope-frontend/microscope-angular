module.exports = {
    default: {
		files: [
	      {expand: true, cwd: 'assets/', src: ['**'], dest: 'build/'},
	      {expand: true, cwd: 'src/templates', src: ['**'], dest: 'build/templates'}
	    ],
    }
};