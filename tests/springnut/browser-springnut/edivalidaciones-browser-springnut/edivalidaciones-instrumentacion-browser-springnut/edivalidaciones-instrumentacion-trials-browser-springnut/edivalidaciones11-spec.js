// edivalidaciones11-spec.js

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




    var aTitle = 'Springnut - 11';
    describe( aTitle, function() {


        var VALIDACIONES_NAME           = "ListaValidaciones";
        var CRITERIOS_NAME              = "ListaCriterios";
        var LISTASCODIGOS_NAME          = "ListaListasCodigos";
        var SIMBOLOSPERMITIDOS_NAME     = "SimbolosPermitidos";

        var VALIDACION_NAME              = "Validacion";
        var CRITERIO_NAME                = "Criterio";
        var LISTACODIGOS_NAME            = "ListaCodigos";
        var SIMBOLOPERMITIDO_NAME        = "SimboloPermitido";





        var MASTERGRIDNAMES = [
            VALIDACIONES_NAME,
            CRITERIOS_NAME,
            LISTASCODIGOS_NAME,
            SIMBOLOSPERMITIDOS_NAME
        ];


        var MASTERGRID_EDITORS= {};
        MASTERGRID_EDITORS[ VALIDACIONES_NAME] = VALIDACION_NAME;
        MASTERGRID_EDITORS[ CRITERIOS_NAME] = CRITERIO_NAME;
        MASTERGRID_EDITORS[ LISTASCODIGOS_NAME] = LISTACODIGOS_NAME;
        MASTERGRID_EDITORS[ SIMBOLOSPERMITIDOS_NAME] = SIMBOLOPERMITIDO_NAME;





        beforeEach(function() {

        });


        it( aTitle + ' login page and logged in', function() {
            browser.ignoreSynchronization = true;
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            browser.driver.findElement(by.css('input[name="j_username"]')).sendKeys('pordefecto');
            browser.driver.findElement(by.css('input[name="j_password"]')).sendKeys('pordefectopswd2');

            browser.driver.findElement(by.css('button[name="login"]')).click( );

            expect(browser.getTitle()).toEqual('Comienzo - Ejemplo de instrumentación SpringNut');
        });



        var aSubtitle = 'master tabs y seleccion';
        it( aSubtitle, function() {


            browser.ignoreSynchronization = false;
            var aLastPromise = browser
                .get( aPROTRACTOR_HITPOINT + '/app/edivalidaciones.html#/edivalidacionesInstrumentacion?theInitialLoadGrids=NONE&theAutoEditors=NONE&theTabsFixed=NONE&theAutoSelect=-1')
                .then( function() {
                    return fDoPtr_RunningTest( aTitle, aSubtitle);
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
                                return fDoPtr_RunningTest( [ aTitle, aSubtitle], aMasterGridName_here);
                            })
                            .then( function() {

                                expect( element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here + "_Link")).isPresent()).toBe( true);

                                element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here + "_Link")).click();

                                expect( element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here)).isPresent()).toBe( true);

                                expect( element( by.id( "didSpringnut_Edivalidaciones_TopTabs_Tab_" + aMasterGridName_here)).isDisplayed()).toBe( true);

                                element( by.id( "didSpringnut_Edivalidaciones_Grid_" + aMasterGridName_here + "_Button_Refresh")).click();


                                expect( element( by.id( "didSpringnut_Edivalidaciones_Grid_" + aMasterGridName_here + "_Row_0_Col_0")).isPresent()).toBe( true);

                                expect( element( by.id( "didSpringnut_Edivalidaciones_Grid_" + aMasterGridName_here + "_Row_0_Col_0")).isDisplayed()).toBe( true);

                                element( by.id( "didSpringnut_Edivalidaciones_Grid_" + aMasterGridName_here + "_Row_0_Col_0")).click();

                                return browser.waitForAngular();
                            });
                    })();
                }
            }

        });

    });
});
