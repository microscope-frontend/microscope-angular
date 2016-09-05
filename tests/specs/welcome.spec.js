var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

/**
 * Welcome page testing
 */
describe('Testing welcome page', function () {

    /**
     * before running test hook
     */
    before(function(done){
        browser.get('http://localhost:3000/#/welcome');
        done();
    });
    
    it('Title should be equal to "Angular"', function () {
        expect(browser.getTitle()).to.eventually.equal("Angular");
    });

    it('Submit form should display concatenated firstname & lastname', function () {
        element(by.model('vm.firstname')).sendKeys('Hello');
        element(by.model('vm.lastname')).sendKeys('world');
        element(by.css('button[type="submit"]')).click();

        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).to.eventually.equal("welcome Hello world !!!");
    });
});