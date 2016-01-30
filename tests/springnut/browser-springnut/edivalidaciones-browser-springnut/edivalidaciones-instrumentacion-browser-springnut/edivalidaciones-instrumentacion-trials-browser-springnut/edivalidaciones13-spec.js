// edivalidaciones13-spec.js

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




    var aTitle = 'Springnut - 13';
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





        var pPtrDo_Login = function( theUserName, thePassword) {
            browser.ignoreSynchronization = true;
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            browser.driver.findElement(by.css('input[name="j_username"]')).sendKeys( theUserName);
            browser.driver.findElement(by.css('input[name="j_password"]')).sendKeys( thePassword);

            browser.driver.findElement(by.css('button[name="login"]')).click( );

            expect( browser.getTitle()).toEqual('Comienzo - Ejemplo de instrumentación SpringNut');
        };










        var fPtrLoc_Tab = function( theTabName) {

            var aTabId =  "didSpringnut_Edivalidaciones_TopTabs_Tab_" + theTabName;

            var aTabElement = element( by.id( aTabId));

            expect( aTabElement.isPresent()).toBe( true);

            return aTabElement;
        };



        var fPtrLoc_TabLink = function( theTabName) {

            var aTabLinkId =  "didSpringnut_Edivalidaciones_TopTabs_Tab_" + theTabName + "_Link";

            var aTabLinkElement = element( by.id( aTabLinkId));

            expect( aTabLinkElement.isPresent()).toBe( true);
            expect( aTabLinkElement.isDisplayed()).toBe( true);

            return aTabLinkElement;
        };



        var pPtrDo_SelectTab = function( theTabName) {

            var aLoc_Tab = fPtrLoc_Tab( theTabName);

            var aLoc_TabLink = fPtrLoc_TabLink( theTabName);

            aLoc_TabLink.click();

            expect( aLoc_Tab.isDisplayed()).toBe( true);

            browser.waitForAngular();
        };










        var fPtrLoc_GridButtonRefresh = function( theTabName) {

            var aRefreshButtonId =  "didSpringnut_Edivalidaciones_Grid_" + theTabName + "_Button_Refresh";

            var aRefreshButtonElement = element( by.id( aRefreshButtonId));

            expect( aRefreshButtonElement.isPresent()).toBe( true);
            expect( aRefreshButtonElement.isDisplayed()).toBe( true);

            return aRefreshButtonElement;
        };



        var pPtrDo_RefreshGrid = function( theTabName) {

            var aLoc_GridButtonRefresh = fPtrLoc_GridButtonRefresh( theTabName);

            aLoc_GridButtonRefresh.click();

            browser.waitForAngular();
        };









        var fPtrLoc_GridCell = function( theTabName, theRowIndex, theCellIndex) {

            var aGridCellId =  "didSpringnut_Edivalidaciones_Grid_" + theTabName + "_Row_" + theRowIndex + "_Col_" + theCellIndex;

            var aGridCellElement = element( by.id( aGridCellId));

            expect( aGridCellElement.isPresent()).toBe( true);
            expect( aGridCellElement.isDisplayed()).toBe( true);

            return aGridCellElement;
        };




        var pPtrDo_SelectRowCell = function( theTabName, theRowIndex, theCellIndex) {

            var aLoc_GridCell = fPtrLoc_GridCell( theTabName, theRowIndex, theCellIndex);

            aLoc_GridCell.click();

            browser.waitForAngular();
        };









        var fPtrLoc_EditorOpenButton = function( theEditorName) {

            var anEditorOpenButtonId =  "didSpringnut_Edivalidaciones_Editor_" + theEditorName + "_Button_Open";

            var anEditorOpenButtonElement = element( by.id( anEditorOpenButtonId));

            expect( anEditorOpenButtonElement.isPresent()).toBe( true);
            expect( anEditorOpenButtonElement.isDisplayed()).toBe( true);

            return anEditorOpenButtonElement;
        };




        var pPtrDo_EditorOpen = function( theEditorName) {

            var aLoc_EditorOpenButton = fPtrLoc_EditorOpenButton( theEditorName);

            aLoc_EditorOpenButton.click();

            browser.waitForAngular();
        };




        var pPtrDo_Tab = function( theTabName) {
            pPtrDo_SelectTab( theTabName);

            pPtrDo_RefreshGrid( theTabName);

            pPtrDo_SelectRowCell( theTabName, 0, 0);

            var anEditorName = MASTERGRID_EDITORS[ theTabName];

            pPtrDo_EditorOpen( anEditorName);
        };















        it( aTitle + ' login page and logged in', function() {
            pPtrDo_Login( "pordefecto", "pordefectopswd2");
        });





        var aSubtitle = 'Edivalidaciones';
        it( aTitle + " " +  aSubtitle, function() {

            browser.ignoreSynchronization = false;

            browser
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

        });





        var aSubtitle2 = 'master tabs : select tab, select row, open editor';

        var aNumMasterGridNames = MASTERGRIDNAMES.length;
        for( var aMasterGridNameIdx=0; aMasterGridNameIdx < aNumMasterGridNames; aMasterGridNameIdx++) {
            var aMasterGridName = MASTERGRIDNAMES[ aMasterGridNameIdx];
            if( aMasterGridName) {

                var aDoTabFunction = (function() {

                    var aMasterGridName_here = aMasterGridName;
                    return function() {
                        return fDoPtr_RunningTest( [ aTitle, aSubtitle2], aMasterGridName_here)
                            .then( function() {
                                return pPtrDo_Tab( aMasterGridName_here);
                            });
                    }
                })();

                it( aTitle + " " + aSubtitle2 + ' -> tab ' + aMasterGridName, aDoTabFunction);
            }
        }

    });

});
