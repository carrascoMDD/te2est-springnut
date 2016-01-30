// edivalidaciones14-spec.js

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






    var aTitle = 'Springnut - 14';
    describe( aTitle, function() {


        var LOGMESSAGES = false;

        var pLog = function( theMessage) {
            if( !LOGMESSAGES) {
                return;
            }

            if( browser.params && browser.params.terminalReporterPrintFunction && ( typeof browser.params.terminalReporterPrintFunction == "function")) {
                browser.params.terminalReporterPrintFunction( theMessage);
            }
        };
        if( pLog){}/* CQT */







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
        MASTERGRID_EDITORS[ VALIDACIONES_NAME]       = VALIDACION_NAME;
        MASTERGRID_EDITORS[ CRITERIOS_NAME]          = CRITERIO_NAME;
        MASTERGRID_EDITORS[ LISTASCODIGOS_NAME]      = LISTACODIGOS_NAME;
        MASTERGRID_EDITORS[ SIMBOLOSPERMITIDOS_NAME] = SIMBOLOPERMITIDO_NAME;



        var MASTERGRIDS_SELECTIONSBYCONTENT = {};
        MASTERGRIDS_SELECTIONSBYCONTENT[ VALIDACIONES_NAME]       = { "columnIndex": 2, "spanIndex":  0, "value":  "A17"};
        MASTERGRIDS_SELECTIONSBYCONTENT[ CRITERIOS_NAME]          = { "columnIndex": 1, "spanIndex":  0, "value":  "*Demográfica Grave"};
        MASTERGRIDS_SELECTIONSBYCONTENT[ LISTASCODIGOS_NAME]      = { "columnIndex": 1, "spanIndex":  0, "value":  "*Causa rara en menores 75 años"};
        MASTERGRIDS_SELECTIONSBYCONTENT[ SIMBOLOSPERMITIDOS_NAME] = { "columnIndex":  1, "spanIndex":  0, "value":  "accidente"};


        var SLEEPATSTEPEND = 100;


        var aTimestamp = new Date().toISOString();

        var EDITORS_FIELDCHANGES = {};
        EDITORS_FIELDCHANGES[ VALIDACION_NAME] = [
            {
                "fieldName": "descripcion",
                "type":      "Text",
                "value":     aTimestamp + " protractorspec14 Causa de muerte rara en mayores de 65 años"
            },
            {
                "fieldName": "severidad",
                "type":      "IntYesNo",
                "value":     0
            },
            {
                "fieldName": "activa",
                "type":      "BoolYesNo",
                "value":     false
            }
        ];

        EDITORS_FIELDCHANGES[ CRITERIO_NAME] = [
            {
                "fieldName": "crNombre",
                "type":      "String",
                "value":     aTimestamp + " protractorspec14 Demográfica Grave"
            },
            {
                "fieldName": "crDescripcion",
                "type":      "Text",
                "value":     aTimestamp + " protractorspec14 Demográfica Grave descripcion Demográfica Grave"
            }
        ];

        EDITORS_FIELDCHANGES[ LISTACODIGOS_NAME] = [
            {
                "fieldName": "descripcion",
                "type":      "Text",
                "value":     aTimestamp + " protractorspec14 Causa rara en menores 75 años"
            }
        ];






        var pPtrDo_Login = function( theUserName, thePassword) {
            browser.ignoreSynchronization = true;
            browser.get( aPROTRACTOR_HITPOINT + '/login');

            browser.driver.findElement(by.css('input[name="j_username"]')).sendKeys( theUserName);
            browser.driver.findElement(by.css('input[name="j_password"]')).sendKeys( thePassword);

            browser.driver.findElement(by.css('button[name="login"]')).click( );

            expect( browser.getTitle()).toEqual('Comienzo - Ejemplo de instrumentación SpringNut');
        };










        var fPtrEl_Tab = function( theTabName) {

            var aTabId =  "didSpringnut_Edivalidaciones_TopTabs_Tab_" + theTabName;

            var aTabElement = element( by.id( aTabId));

            expect( aTabElement.isPresent()).toBe( true);

            return aTabElement;
        };



        var fPtrEl_TabLink = function( theTabName) {

            var aTabLinkId =  "didSpringnut_Edivalidaciones_TopTabs_Tab_" + theTabName + "_Link";

            var aTabLinkElement = element( by.id( aTabLinkId));

            expect( aTabLinkElement.isPresent()).toBe( true);
            expect( aTabLinkElement.isDisplayed()).toBe( true);

            return aTabLinkElement;
        };



        var pPtrDo_SelectTab = function( theTabName) {

            var aPtrEl_Tab = fPtrEl_Tab( theTabName);

            var aPtrEl_TabLink = fPtrEl_TabLink( theTabName);

            aPtrEl_TabLink.click();

            expect( aPtrEl_Tab.isDisplayed()).toBe( true);

            return browser.waitForAngular();
        };










        var fPtrEl_GridButtonRefresh = function( theTabName) {

            var aRefreshButtonId =  "didSpringnut_Edivalidaciones_Grid_" + theTabName + "_Button_Refresh";

            var aRefreshButtonElement = element( by.id( aRefreshButtonId));

            expect( aRefreshButtonElement.isPresent()).toBe( true);
            expect( aRefreshButtonElement.isDisplayed()).toBe( true);

            return aRefreshButtonElement;
        };



        var pPtrDo_RefreshGrid = function( theTabName) {

            var aPtrEl_GridButtonRefresh = fPtrEl_GridButtonRefresh( theTabName);

            aPtrEl_GridButtonRefresh.click();

            return browser.waitForAngular();
        };









        var fPtrEl_GridCell = function( theTabName, theRowIndex, theCellIndex) {

            var aGridCellId =  "didSpringnut_Edivalidaciones_Grid_" + theTabName + "_Row_" + theRowIndex + "_Col_" + theCellIndex;

            var aGridCellElement = element( by.id( aGridCellId));

            expect( aGridCellElement.isPresent()).toBe( true);
            expect( aGridCellElement.isDisplayed()).toBe( true);

            return aGridCellElement;
        };




        var pPtrDo_SelectRowCell = function( theTabName, theRowIndex, theCellIndex) {

            var aPtrEl_GridCell = fPtrEl_GridCell( theTabName, theRowIndex, theCellIndex);

            aPtrEl_GridCell.click();

            return browser.waitForAngular();
        };
        if( pPtrDo_SelectRowCell){}/* CQT */








        var pPtrDo_SelectRowCellByContent = function( theTabName) {

            var aRowIndexFinderSpec = MASTERGRIDS_SELECTIONSBYCONTENT[ theTabName];

            var aValueIndex = aRowIndexFinderSpec[ "valueIndex"];
            if( !( typeof aValueIndex == "undefined") && ( aValueIndex >= 0)) {

                var aPtrEl_GridCell = fPtrEl_GridCell( theTabName, aValueIndex, 0);

                aPtrEl_GridCell.click();

                return browser.waitForAngular();
            }

            var aFindCriteria = {
                "tableId":     "didSpringnut_Edivalidaciones_Grid_" + theTabName + '_Table'
            };

            Object.keys( aRowIndexFinderSpec).forEach(function(athKey) {
                aFindCriteria[ athKey] = aRowIndexFinderSpec[ athKey];
            });

            var aScriptWithParms ="return RowIndexFinder( " + JSON.stringify( aFindCriteria) + ");";


            pLog( "pPtrDo_SelectRowCellByContent executeScript aScriptWithParms=" + aScriptWithParms);


            return browser.driver.executeScript( aScriptWithParms).then( function( athRowIndex) {
                var aPtrEl_GridCell = fPtrEl_GridCell( theTabName, athRowIndex, 0);

                aPtrEl_GridCell.click();

                return browser.waitForAngular();
            });
        };








        var fPtrEl_EditorOpenButton = function( theEditorName) {

            var anEditorOpenButtonId =  "didSpringnut_Edivalidaciones_Editor_" + theEditorName + "_Button_Open";

            var anEditorOpenButtonElement = element( by.id( anEditorOpenButtonId));

            expect( anEditorOpenButtonElement.isPresent()).toBe( true);
            expect( anEditorOpenButtonElement.isDisplayed()).toBe( true);

            return anEditorOpenButtonElement;
        };




        var pPtrDo_EditorOpen = function( theEditorName) {

            var aPtrEl_EditorOpenButton = fPtrEl_EditorOpenButton( theEditorName);

            aPtrEl_EditorOpenButton.click();

            return browser.waitForAngular();
        };







        var fPtrEl_EditorCancelButton = function( theEditorName) {

            var anEditorCancelButtonId =  "didSpringnut_Edivalidaciones_Editor_" + theEditorName + "_Button_Cancel";

            var anEditorCancelButtonElement = element( by.id( anEditorCancelButtonId));

            expect( anEditorCancelButtonElement.isPresent()).toBe( true);
            expect( anEditorCancelButtonElement.isDisplayed()).toBe( true);

            return anEditorCancelButtonElement;
        };






        var pPtrDo_EditorCancel = function( theEditorName) {

            var aPtrEl_EditorCancelButton = fPtrEl_EditorCancelButton( theEditorName);

            aPtrEl_EditorCancelButton.click();

            return browser.waitForAngular();
        };









        var fPtrEl_EditorCloseButton = function( theEditorName) {

            var anEditorCloseButtonId =  "didSpringnut_Edivalidaciones_Editor_" + theEditorName + "_Button_Close";

            var anEditorCloseButtonElement = element( by.id( anEditorCloseButtonId));

            expect( anEditorCloseButtonElement.isPresent()).toBe( true);
            expect( anEditorCloseButtonElement.isDisplayed()).toBe( true);

            return anEditorCloseButtonElement;
        };






        var pPtrDo_EditorClose = function( theEditorName) {

            var aPtrEl_EditorCloseButton = fPtrEl_EditorCloseButton( theEditorName);

            aPtrEl_EditorCloseButton.click();

            return browser.waitForAngular();
        };







        var fPtrEl_EditorSaveButton = function( theEditorName) {

            var anEditorSaveButtonId =  "didSpringnut_Edivalidaciones_Editor_" + theEditorName + "_Button_Save";

            var anEditorSaveButtonElement = element( by.id( anEditorSaveButtonId));

            expect( anEditorSaveButtonElement.isPresent()).toBe( true);
            expect( anEditorSaveButtonElement.isDisplayed()).toBe( true);

            return anEditorSaveButtonElement;
        };






        var pPtrDo_EditorSave = function( theEditorName) {

            var aPtrEl_EditorSaveButton = fPtrEl_EditorSaveButton( theEditorName);

            aPtrEl_EditorSaveButton.click();

            return browser.waitForAngular();
        };







        var pPtrDo_ChangeFields = function( theEditorName) {

            pLog( "pPtrDo_ChangeFields BEGIN theEditorName=" + theEditorName);

            var someFieldChangeSpecs = EDITORS_FIELDCHANGES[ theEditorName];
            if( someFieldChangeSpecs) {

                pLog( "pPtrDo_ChangeFields someFieldChangeSpecs=" + JSON.stringify( someFieldChangeSpecs));


                var aLastPromise  = null;

                var aNumFieldChangeSpecs = someFieldChangeSpecs.length;
                if( aNumFieldChangeSpecs) {

                    for( var aFieldChangeSpecIdx=0; aFieldChangeSpecIdx < aNumFieldChangeSpecs; aFieldChangeSpecIdx++) {

                        var aFieldChangeSpec = someFieldChangeSpecs[ aFieldChangeSpecIdx];
                        if( aFieldChangeSpec) {

                            pLog( "pPtrDo_ChangeFields aFieldChangeSpec=" + JSON.stringify( aFieldChangeSpec));

                            var aFieldName = aFieldChangeSpec[ "fieldName"];
                            if( aFieldName) {

                                var aFieldType = aFieldChangeSpec[ "type"];
                                if( aFieldType) {

                                    var anInputElementId = "didSpringnut_Edivalidaciones_Editor_" + theEditorName + "_Field_" + aFieldName + "_Edit_" + aFieldType + "_Input";

                                    var anInputElement = element( by.id( anInputElementId));

                                    var anInputElementDirtyId = "didSpringnut_Edivalidaciones_Editor_" + theEditorName + "_Field_" + aFieldName + "_Edit_Mark_Dirty_Span";
                                    var anInputElementDirty = null;

                                    var aValue = aFieldChangeSpec[ "value"];

                                    switch( aFieldType) {

                                        case "String":
                                            pLog( "pPtrDo_ChangeFields String");

                                            pLog( "pPtrDo_ChangeFields sending ctrlabackspace");

                                            anInputElement.sendKeys( protractor.Key.chord(protractor.Key.CONTROL, "a"));
                                            anInputElement.sendKeys( protractor.Key.BACK_SPACE);

                                            aLastPromise = anInputElement.clear();

                                            if( aValue) {
                                                var aValueChars = "" + aValue;

                                                var aDate = new Date();
                                                var aTimestamp = aDate.toISOString();
                                                var aMillis = "" + aDate.getTime();
                                                aMillis = aMillis.substring( aMillis.length - 4);

                                                aValueChars = aValueChars.replace(  "$timestamp", aTimestamp);
                                                aValueChars = aValueChars.replace( "$millis", aMillis);



                                                pLog( "pPtrDo_ChangeFields sending aValueChars=" + aValueChars);

                                                anInputElement.sendKeys( aValueChars);

                                                anInputElementDirty = element( by.id( anInputElementDirtyId));

                                                expect( anInputElementDirty.isPresent()).toBe( true);
                                                expect( anInputElementDirty.isDisplayed()).toBe( true);

                                                aLastPromise = anInputElementDirty;
                                            }
                                            break;


                                        case "IntYesNo":
                                            pLog( "pPtrDo_ChangeFields IntYesNo");

                                            anInputElement.click();

                                            anInputElementDirty = element( by.id( anInputElementDirtyId));
                                            expect( anInputElementDirty.isPresent()).toBe( true);
                                            expect( anInputElementDirty.isDisplayed()).toBe( true);

                                            aLastPromise = anInputElementDirty;

                                            break;


                                        case "BoolYesNo":
                                            pLog( "pPtrDo_ChangeFields BoolYesNo");

                                            anInputElement.click();

                                            anInputElementDirty = element( by.id( anInputElementDirtyId));
                                            expect( anInputElementDirty.isPresent()).toBe( true);
                                            expect( anInputElementDirty.isDisplayed()).toBe( true);

                                            aLastPromise = anInputElementDirty;

                                            break;

                                        default:
                                    }
                                }
                            }
                        }
                    }

                }
            }

            return aLastPromise;
        };






        var pPtrDo_TopTab = function( theTabName) {

            var aRowSelectedPromise =
                pPtrDo_SelectTab( theTabName)
                    .then( function() {
                        return pPtrDo_RefreshGrid( theTabName);
                    })
                    .then( function() {
                        return pPtrDo_SelectRowCellByContent( theTabName);
                    });

            var anEditorName = MASTERGRID_EDITORS[ theTabName];

            var someFieldChangeSpecs = EDITORS_FIELDCHANGES[ anEditorName];
            if( !someFieldChangeSpecs || !someFieldChangeSpecs.length) {
                return  aRowSelectedPromise
                    .then( function() {
                        return pPtrDo_EditorOpen( anEditorName)
                    }).then( function() {
                        return browser.sleep( SLEEPATSTEPEND);
                    })
                    .then( function() {
                        return pPtrDo_EditorClose( anEditorName);
                    })
                    .then( function() {
                        return browser.sleep( SLEEPATSTEPEND);
                    });
            }


            return aRowSelectedPromise
                .then( function() {
                    return pPtrDo_EditorOpen( anEditorName)
                })
                .then( function() {
                    return pPtrDo_ChangeFields( anEditorName);
                })
                .then( function() {
                    return pPtrDo_EditorCancel( anEditorName);
                })
                .then( function() {
                    return browser.sleep( SLEEPATSTEPEND);
                });
        };











        it( aTitle + ' login page and logged in', function() {
            pPtrDo_Login( "pordefecto", "pordefectopswd2");
        });





        var aSubtitle = 'Edivalidaciones';
        it( aTitle + " " + aSubtitle, function() {

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





        var aSubtitle2 = 'master tabs: select tab, select row, open editor, change fields, cancel';
        describe( aTitle + " " + aSubtitle2, function() {

            var aNumMasterGridNames = MASTERGRIDNAMES.length;
            for( var aMasterGridNameIdx=0; aMasterGridNameIdx < aNumMasterGridNames; aMasterGridNameIdx++) {
                var aMasterGridName = MASTERGRIDNAMES[ aMasterGridNameIdx];
                if( aMasterGridName) {

                    var aDoTabFunction = (function() {

                        var aMasterGridName_here = aMasterGridName;
                        return function() {
                            return fDoPtr_RunningTest( [ aTitle, aSubtitle2], aMasterGridName_here)
                                .then( function() {
                                    return pPtrDo_TopTab( aMasterGridName_here);
                                });
                        }
                    })();

                    it( aTitle + " " + aSubtitle2 + ' -> tab ' + aMasterGridName, aDoTabFunction);
                }
            }

        });

    });
});
