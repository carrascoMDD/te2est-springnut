// edivalidaciones10-spec.js

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




    var aTitle = 'Springnut - 10';
    describe( aTitle, function() {



        var VALIDACIONES_NAME           = "ListaValidaciones";
        var CRITERIOS_NAME              = "ListaCriterios";
        var LISTASCODIGOS_NAME          = "ListaListasCodigos";
        var SIMBOLOSPERMITIDOS_NAME     = "SimbolosPermitidos";

        var MASTERGRIDNAMES = [
            VALIDACIONES_NAME,
            CRITERIOS_NAME,
            LISTASCODIGOS_NAME,
            SIMBOLOSPERMITIDOS_NAME
        ];





        beforeEach(function() {

        });

        it( aTitle + ' login page', function() {
            browser.ignoreSynchronization = true;
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            expect(browser.getTitle()).toEqual('SpringNut ejemplo de instrumentacion - Identificación');
        });


        it( aTitle + ' login page and logged in', function() {
            browser.ignoreSynchronization = true;
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            browser.driver.findElement(by.css('input[name="j_username"]')).sendKeys('pordefecto');
            browser.driver.findElement(by.css('input[name="j_password"]')).sendKeys('pordefectopswd2');

            browser.driver.findElement(by.css('button[name="login"]')).click( );

            expect(browser.getTitle()).toEqual('Comienzo - Ejemplo de instrumentación SpringNut');
        });





        var aSubTitle = 'edivalidaciones';
        it( aSubTitle, function() {

            browser.ignoreSynchronization = false;
            browser
                .get( aPROTRACTOR_HITPOINT + '/app/edivalidaciones.html#/edivalidacionesInstrumentacion?theInitialLoadGrids=NONE&theAutoEditors=NONE&theTabsFixed=NONE&theAutoSelect=-1')
                .then( function() {
                    return fDoPtr_RunningTest( aTitle, aSubTitle);
                })
                .then( function() {
                    return browser.waitForAngular();
                })
                .then( function() {
                    expect(browser.getTitle()).toEqual('Ejemplo de instrumentación SpringNut - Edición de Validaciones');

                    var aPromise = protractor.promise.defer();
                    aPromise.fulfill();
                    return aPromise;
                })
                .then( function() {
                    return browser.sleep( 1);
                });
        });






        var aSubTitle2 = 'tabs Master Grids';
        it( aSubTitle2, function() {

            browser.ignoreSynchronization = false;
            var aLastPromise = browser
                .get( aPROTRACTOR_HITPOINT + '/app/edivalidaciones.html#/edivalidacionesInstrumentacion?theInitialLoadGrids=NONE&theAutoEditors=NONE&theTabsFixed=NONE&theAutoSelect=-1')
                .then( function() {
                    return fDoPtr_RunningTest( aTitle, aSubTitle2);
                })
                .then( function() {
                    return browser.waitForAngular();
                })
                .then( function() {
                    expect(browser.getTitle()).toEqual('Ejemplo de instrumentación SpringNut - Edición de Validaciones');

                    var aPromise = protractor.promise.defer();
                    aPromise.fulfill();
                    return aPromise;
                });


            var aNumMasterGridNames = MASTERGRIDNAMES.length;
            for( var aMasterGridNameIdx=0; aMasterGridNameIdx < aNumMasterGridNames; aMasterGridNameIdx++) {
                var aMasterGridName = MASTERGRIDNAMES[ aMasterGridNameIdx];
                if( aMasterGridName) {

                    aLastPromise = (function() {
                        var aMasterGridName_here = aMasterGridName;
                        return aLastPromise
                            .then( function() {
                                return fDoPtr_RunningTest( [ aTitle, aSubTitle2], aMasterGridName_here);
                            })
                            .then( function() {
                                expect( element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here + "_Link")).isPresent()).toBe( true);

                                element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here + "_Link")).click();

                                expect( element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here)).isPresent()).toBe( true);

                                expect( element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here)).isDisplayed()).toBe( true);

                                return browser.waitForAngular();
                            });
                    })();
                }
            }
        });




        var aSubTitle3 = 'refrescar Master Grids';
        it( aSubTitle3, function() {

            browser.ignoreSynchronization = false;
            var aLastPromise = browser
                .get( aPROTRACTOR_HITPOINT + '/app/edivalidaciones.html#/edivalidacionesInstrumentacion?theInitialLoadGrids=NONE&theAutoEditors=NONE&theTabsFixed=NONE&theAutoSelect=-1')
                .then( function() {
                    return fDoPtr_RunningTest( aTitle, aSubTitle3);
                })
                .then( function() {
                    return browser.waitForAngular();
                })
                .then( function() {
                    expect(browser.getTitle()).toEqual('Ejemplo de instrumentación SpringNut - Edición de Validaciones');

                    var aPromise = protractor.promise.defer();
                    aPromise.fulfill();
                    return aPromise;
                });


            var aNumMasterGridNames = MASTERGRIDNAMES.length;
            for( var aMasterGridNameIdx=0; aMasterGridNameIdx < aNumMasterGridNames; aMasterGridNameIdx++) {
                var aMasterGridName = MASTERGRIDNAMES[ aMasterGridNameIdx];
                if( aMasterGridName) {

                    aLastPromise = (function() {
                        var aMasterGridName_here = aMasterGridName;
                        return aLastPromise
                            .then( function() {
                                return fDoPtr_RunningTest( [ aTitle, aSubTitle3], aMasterGridName_here);
                            })
                            .then( function() {
                                expect( element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here + "_Link")).isPresent()).toBe( true);

                                element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here + "_Link")).click();

                                expect( element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here)).isPresent()).toBe( true);

                                expect( element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here)).isDisplayed()).toBe( true);

                                element( by.id( "didSpringnut_Edivalidaciones_Grid_" + aMasterGridName_here + "_Button_Refresh")).click();

                                return browser.waitForAngular();
                            });
                    })();
                }
            }
        });

    });
});
