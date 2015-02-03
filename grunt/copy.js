module.exports = {
	
    assets: {
		files: [
			{expand: true, cwd: 'assets/', src: ['**'], dest: 'build/'}
	    ],
    },

    templates: {
		files: [
			{expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'build/'}
	    ],
    }
};