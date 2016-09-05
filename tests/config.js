exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/**/*.js'],
    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        reporter: 'spec',
        timeout: 30000,
        bail: true
    },
    
    capabilities: {
        'browserName': 'firefox'
    }
};