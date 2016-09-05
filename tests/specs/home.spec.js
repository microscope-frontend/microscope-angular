var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

/**
 * Home page testing
 */
describe('Testing home page', function () {

    /**
     * before running test hook
     */
    before(function(done){
        browser.get('http://localhost:3000/');
        done();
    });

    it('Title should be equal to "Angular"', function () {
        expect(browser.getTitle()).to.eventually.equal("Angular");
    });
});