/// edivalidaciones01-spec.js

module.exports = (function() {
    var aPROTRACTOR_HITPOINT = "http://localhost:8080/springnut";
    if( browser.params && browser.params.protractorTestConstants) {
        aPROTRACTOR_HITPOINT = browser.params.protractorTestConstants.PROTRACTOR_HITPOINT;
    }

    var aTitle = 'Springnut - 01 - titulo pagina de login';
    describe( aTitle, function() {

        beforeEach(function() {
            return browser.ignoreSynchronization = true;
        });

        it('should have a title', function() {
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            expect(browser.getTitle()).toEqual('SpringNut ejemplo de instrumentacion - Identificación');
        });
    });
});



