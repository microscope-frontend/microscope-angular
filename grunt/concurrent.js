module.exports = {
    debug: {
    	tasks: ['watch:assets', 'watch:sources', 'connect:build'],
		options: {
			logConcurrentOutput: true
		}
    }
};