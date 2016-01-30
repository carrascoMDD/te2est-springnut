// edivalidaciones03-spec.js

module.exports = (function() {

    var aPROTRACTOR_HITPOINT = "http://localhost:8080/springnut";
    if( browser.params && browser.params.protractorTestConstants) {
        aPROTRACTOR_HITPOINT = browser.params.protractorTestConstants.PROTRACTOR_HITPOINT;
    }



    var fDoPtr_RunningTest = function( theTitle, theSubTitle) {

        var someTitles = [ ];
        if( typeof theTitle == "string") {
            someTitles = [ theTitle];
        }
        else {
            someTitles = theTitle.slice();
        }
        if( someTitles.indexOf( theSubTitle) < 0) {
            someTitles.push( theSubTitle);
        }
        return browser.driver.executeScript( "return RunningTest( " + JSON.stringify( { "top": theSubTitle, "full": someTitles, "current": theSubTitle, "extra": null}) + ");")
            .then( function( theScriptResult) {
                console.log( "RunningTest=" + JSON.stringify( theScriptResult));

                var aPromise = protractor.promise.defer();
                aPromise.fulfill( theScriptResult);
                return aPromise;
            });
    };



    var aTitle = 'Springnut - 03 - login y pagina edicion validaciones';
    describe( aTitle, function() {

        beforeEach(function() {

        });

        it('should have a title', function() {
            browser.ignoreSynchronization = true;

            browser.get( aPROTRACTOR_HITPOINT + '/login');

            expect(browser.getTitle()).toEqual('SpringNut ejemplo de instrumentacion - Identificación');
        });

        it('should login', function() {
            browser.ignoreSynchronization = true;
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            browser.driver.findElement(by.css('input[name="j_username"]')).sendKeys('pordefecto');
            browser.driver.findElement(by.css('input[name="j_password"]')).sendKeys('pordefectopswd2');

            browser.driver.findElement(by.css('button[name="login"]')).click( );

            expect(browser.getTitle()).toEqual('Comienzo - Ejemplo de instrumentación SpringNut');
        });


        var aSubTitle = aTitle + ' should load angular';
        it( aSubTitle, function() {
            browser.ignoreSynchronization = true;
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            browser.ignoreSynchronization = false;
            browser
                .get( aPROTRACTOR_HITPOINT + '/app/edivalidaciones.html#/edivalidacionesInstrumentacion?theInitialLoadGrids=NONE&theAutoEditors=NONE&theTabsFixed=NONE&theAutoSelect=-1')
                .then( function() {
                    return fDoPtr_RunningTest( aTitle, aSubTitle);
                })
                .then( function() {
                    expect(browser.getTitle()).toEqual('Ejemplo de instrumentación SpringNut - Edición de Validaciones');
                })
                .then( function() {
                    browser.sleep( 1);
                });
        });


    });
});
