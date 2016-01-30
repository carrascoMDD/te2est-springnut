// edivalidaciones02-spec.js

module.exports = (function() {
    var aPROTRACTOR_HITPOINT = "http://localhost:8080/springnut";
    if( browser.params && browser.params.protractorTestConstants) {
        aPROTRACTOR_HITPOINT = browser.params.protractorTestConstants.PROTRACTOR_HITPOINT;
    }

    var aTitle = 'Springnut - 02 - autenticar user en pagina de login';
    describe( aTitle, function() {

        beforeEach(function() {
            return  browser.ignoreSynchronization = true;
        });

        it('should have a title', function() {
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            expect(browser.getTitle()).toEqual('SpringNut ejemplo de instrumentacion - Identificación');
        });

        it('should login', function() {
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            browser.driver.findElement(by.css('input[name="j_username"]')).sendKeys('pordefecto');
            browser.driver.findElement(by.css('input[name="j_password"]')).sendKeys('pordefectopswd2');

            browser.driver.findElement(by.css('button[name="login"]')).click( );

            expect(browser.getTitle()).toEqual('Comienzo - Ejemplo de instrumentación SpringNut');
        });

    });

});
