module.exports = {

	sources: {
		files: [ "src/**/*"],
		tasks: [ 'copy:templates', 'browserify' ],
		options: {
			livereload: 35729
		}
	},

	assets: {
		files: [ "assets/**/*"],
		tasks: [ 'copy:assets' ],
	}
};