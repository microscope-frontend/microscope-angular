module.exports = {
    dev: {
        src: ['src/**/*.js'],
        options: {
            output: 'build/docs/'
        }
    },
	release: {
        src: ['src/**/*.js'],
        options: {
            output: 'docs/'
        }
    }
};