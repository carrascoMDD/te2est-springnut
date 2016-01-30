// edivalidaciones18-forinlineconf-spec.js

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

        var aTop = someTitles[ 0];
        return browser.driver.executeScript( "return RunningTest( " + JSON.stringify( { "top": aTop, "full": someTitles, "current": theSubTitle, "extra": null}) + ");")
            .then( function( theScriptResult) {
                console.log( "RunningTest=" + JSON.stringify( theScriptResult));

                var aPromise = protractor.promise.defer();
                aPromise.fulfill( theScriptResult);
                return aPromise;
            });
    };





    var aTitle = 'Springnut - 18';
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




        var SLEEPATEMPTYSTEP = 1;

        var SLEEPATSTEPEND   = 1;

        var SLEEPATMISSINGPARM = 1;


        var VALIDACIONES_NAME           = "ListaValidaciones";
        var CONDICIONES_NAME            = "ListaCondicionesDeValidacion";
        var CODIGOSDECONDICION_NAME     = "ListaCodigosDeCondicion";
        var CRITERIOS_NAME              = "ListaCriterios";
        var VALIDACIONESDECRITERIO_NAME = "ListaValidacionesDeCriterio";
        var LISTASCODIGOS_NAME          = "ListaListasCodigos";
        var CODIGOSDELISTA_NAME         = "ListaCodigosDeLista";
        var SIMBOLOSPERMITIDOS_NAME     = "SimbolosPermitidos";




        var VALIDACION_NAME              = "Validacion";
        var CONDICION_NAME               = "CondicionDeValidacion";
        var CRITERIO_NAME                = "Criterio";
        var VALIDACIONDECRITERIO_NAME    = "ValidacionDeCriterio";
        var LISTACODIGOS_NAME            = "ListaCodigos";
        var CODIGODELISTA_NAME           = "CodigoDeLista";
        var SIMBOLOPERMITIDO_NAME        = "SimboloPermitido";




        var COMPOSITESPECS = [
            {
                "inGridNamed": VALIDACIONES_NAME,
                "selections": [
                    {
                        "finder":  { "columnIndex": 2, "spanIndex":  0, "value":  "A17"},
                        "editorName": VALIDACION_NAME,
                        "fieldEdits": [
                            {
                                "fieldName": "descripcion",
                                "type":      "Text",
                                "value":     "Causa de muerte rara en mayores de 65 años protractorspec18 $timestamp"
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
                        ],
                        "inSubGrids": [
                            {
                                "inGridNamed": CONDICIONES_NAME,
                                "selections": [
                                    {
                                        "finder":   { "columnIndex":  2, "spanIndex":  0, "value":  "*edad>65 AND causabasica IN LISTA"},
                                        "editorName": CONDICION_NAME,
                                        "fieldEdits": [
                                            {
                                                "fieldName": "condicion",
                                                "type":      "Text",
                                                "value":     "edad>65 AND causabasica IN LISTA protractorspec18 $timestamp"
                                            }
                                        ],
                                        "inSubGrids": [
                                            {
                                                "inGridNamed": CODIGOSDECONDICION_NAME,
                                                "selections": [
                                                    {
                                                        "finder":   { "columnIndex":  0, "spanIndex":  0, "valueIndex":  0}
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }

                        ]
                    }
                ]
            },


            {
                "inGridNamed": CRITERIOS_NAME,
                "selections": [
                    {
                        "finder":  { "columnIndex": 1, "spanIndex":  0, "value":  "*Demográfica Grave"},
                        "editorName": CRITERIO_NAME,
                        "fieldEdits": [
                            {
                                "fieldName": "crNombre",
                                "type":      "String",
                                "value":     "Demográfica Grave protractorspec18 $timestamp"
                            },
                            {
                                "fieldName": "crDescripcion",
                                "type":      "Text",
                                "value":     "descripcion Demográfica Grave protractorspec18 $timestamp"
                            }
                        ],
                        "inSubGrids": [
                            {
                                "inGridNamed": VALIDACIONESDECRITERIO_NAME,
                                "selections": [
                                    {
                                        "finder":   { "columnIndex": 2, "spanIndex":  0, "value":  "DG02a"},
                                        "editorName": VALIDACIONDECRITERIO_NAME,
                                        "fieldEdits": [
                                            {
                                                "fieldName": "descripcion",
                                                "type":      "Text",
                                                "value":     "Causa de muerte rara en mayores de 65 años de criterio Demográfica Grave protractorspec18 $timestamp"
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
                                        ]
                                    }
                                ]
                            }

                        ]
                    }
                ]
            },


            {
                "inGridNamed": LISTASCODIGOS_NAME,
                "selections": [
                    {
                        "finder":  { "columnIndex": 1, "spanIndex":  0, "value":  "*Causa rara en menores 75 años"},
                        "editorName": LISTACODIGOS_NAME,
                        "fieldEdits": [
                            {
                                "fieldName": "descripcion",
                                "type":      "Text",
                                "value":     "Causa rara en menores 75 años protractorspec18 $timestamp"
                            }
                        ],
                        "inSubGrids": [
                            {
                                "inGridNamed": CODIGOSDELISTA_NAME,
                                "selections": [
                                    {
                                        "finder":   { "columnIndex":  0, "spanIndex":  0, "valueIndex":  0},
                                        "editorName": CODIGODELISTA_NAME,
                                        "fieldEdits": [
                                            {
                                                "fieldName": "idcie10",
                                                "type":      "String",
                                                "value":     "$millis"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },


            {
                "inGridNamed": SIMBOLOSPERMITIDOS_NAME,
                "selections": [
                    {
                        "finder":  { "columnIndex":  1, "spanIndex":  0, "value":  "accidente"},
                        "editorName": SIMBOLOPERMITIDO_NAME
                    }
                ]
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





        var fPtrEl_PinnedTabImg = function( theTabName) {

            var aTabPinnedId =  "didSpringnut_Edivalidaciones_TopTabs_Tab_" + theTabName + "_Img_Pinned";

            var aTabPinnedElement = element( by.id( aTabPinnedId));
            if( aTabPinnedElement){}/* CQT */

            return aTabPinnedElement;
        };




        var fPtrEl_UnpinnedTabImg = function( theTabName) {

            var aTabUnpinnedId =  "didSpringnut_Edivalidaciones_TopTabs_Tab_" + theTabName + "_Img_Unpinned";

            var aTabUnpinnedElement = element( by.id( aTabUnpinnedId));
            if( aTabUnpinnedElement){}/* CQT */
            return aTabUnpinnedElement;
        };





        var pPtrDo_PinTab = function( theTabName) {

            var aPtrEl_UnpinnedTabImg = fPtrEl_UnpinnedTabImg( theTabName);

            aPtrEl_UnpinnedTabImg.click();

            var aPtrEl_PinnedTabImg   = fPtrEl_PinnedTabImg(   theTabName);

            expect( aPtrEl_PinnedTabImg.isDisplayed()).toBe( true);

            return browser.waitForAngular();
        };




        var pPtrDo_UnpinTab = function( theTabName) {

            var aPtrEl_PinnedTabImg   = fPtrEl_PinnedTabImg(   theTabName);

            aPtrEl_PinnedTabImg.click();

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











        var pPtrDo_SelectRowCellWithFinder = function( theGridName, theRowIndexFinderSpec) {

            if( !theRowIndexFinderSpec) {
                return browser.sleep( SLEEPATMISSINGPARM)
            }


            var aValueIndex = theRowIndexFinderSpec[ "valueIndex"];
            if( !( typeof aValueIndex == "undefined") && ( aValueIndex >= 0)) {

                var aPtrEl_GridCell = fPtrEl_GridCell( theGridName, aValueIndex, 0);

                aPtrEl_GridCell.click();

                return browser.waitForAngular();
            }

            var aFindCriteria = {
                "tableId":     "didSpringnut_Edivalidaciones_Grid_" + theGridName + '_Table'
            };

            Object.keys( theRowIndexFinderSpec).forEach(function(athKey) {
                aFindCriteria[ athKey] = theRowIndexFinderSpec[ athKey];
            });

            var aScriptWithParms ="return RowIndexFinder( " + JSON.stringify( aFindCriteria) + ");";

            pLog( "pPtrDo_SelectRowCellWithFinder executeScript aScriptWithParms=" + aScriptWithParms);

            return browser.driver.executeScript( aScriptWithParms).then( function( athRowIndex) {
                var aPtrEl_GridCell = fPtrEl_GridCell( theGridName, athRowIndex, 0);

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






        var fPtrEl_EditorRefreshButton = function( theEditorName) {

            var anEditorRefreshButtonId =  "didSpringnut_Edivalidaciones_Editor_" + theEditorName + "_Button_Refresh";

            var anEditorRefreshButtonElement = element( by.id( anEditorRefreshButtonId));

            expect( anEditorRefreshButtonElement.isPresent()).toBe( true);
            expect( anEditorRefreshButtonElement.isDisplayed()).toBe( true);

            return anEditorRefreshButtonElement;
        };






        var pPtrDo_EditorRefresh = function( theEditorName) {

            var aPtrEl_EditorRefreshButton = fPtrEl_EditorRefreshButton( theEditorName);

            aPtrEl_EditorRefreshButton.click();

            return browser.waitForAngular();
        };






        var pPtrDo_ChangeFields = function( theComposite, theSelection, theFieldEdits) {

            if( !theComposite) {
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            if( !theSelection) {
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            if( typeof theFieldEdits == "undefined") {
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            var aGridName = theComposite[ "inGridNamed"];
            if( !aGridName) {
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            pLog( "pPtrDo_ChangeFields BEGIN aGridName=" + aGridName);


            var anEditorName = theSelection[ "editorName"];
            if( !anEditorName) {
                return browser.sleep( SLEEPATMISSINGPARM)
            }
            pLog( "pPtrDo_ChangeFields BEGIN theEditorName=" + anEditorName);

            if( !theFieldEdits || !theFieldEdits.length) {
                return  browser.sleep( SLEEPATEMPTYSTEP);
            }
            pLog( "pPtrDo_ChangeFields theFieldEdits=" + JSON.stringify( theFieldEdits));


            var aLastPromise  = null;

            var aNumFieldChangeSpecs = theFieldEdits.length;
            if( aNumFieldChangeSpecs) {

                for( var aFieldChangeSpecIdx=0; aFieldChangeSpecIdx < aNumFieldChangeSpecs; aFieldChangeSpecIdx++) {

                    var aFieldChangeSpec = theFieldEdits[ aFieldChangeSpecIdx];
                    if( aFieldChangeSpec) {

                        pLog( "pPtrDo_ChangeFields aFieldChangeSpec=" + JSON.stringify( aFieldChangeSpec));

                        var aFieldName = aFieldChangeSpec[ "fieldName"];
                        if( aFieldName) {

                            var aFieldType = aFieldChangeSpec[ "type"];
                            if( aFieldType) {

                                var anInputElementId = "didSpringnut_Edivalidaciones_Editor_" + anEditorName + "_Field_" + aFieldName + "_Edit_" + aFieldType + "_Input";

                                var anInputElement = element( by.id( anInputElementId));

                                var anInputElementDirtyId = "didSpringnut_Edivalidaciones_Editor_" + anEditorName + "_Field_" + aFieldName + "_Edit_Mark_Dirty_Span";
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
                                            var aDate = new Date();
                                            var aTimestamp = aDate.toISOString();
                                            var aMillis = "" + aDate.getTime();
                                            aMillis = aMillis.substring( aMillis.length - 4);

                                            var aValueChars = aValue.replace(  "$timestamp", aTimestamp);
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

            return aLastPromise;
        };










        var pPtrDo_Edition = function( theComposite, theSelection) {

            var aMethodName = "pPtrDo_Edition";

            pLog( aMethodName);


            if( !theComposite) {
                pLog( aMethodName + " !theComposite");
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            if( !theSelection) {
                pLog( aMethodName + " !theSelection");
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            var aGridName = theComposite[ "inGridNamed"];
            if( !aGridName) {
                pLog( aMethodName + " !aGridName");
                return browser.sleep( SLEEPATMISSINGPARM)
            }
            pLog( aMethodName + " aGridName=" + aGridName);

            var anEditorName = theSelection[ "editorName"];
            if( !anEditorName) {
                pLog( aMethodName + " !anEditorName");
                return browser.sleep( SLEEPATMISSINGPARM)
            }
            pLog( aMethodName + " anEditorName=" + anEditorName);

            var someFieldEdits = theSelection[ "fieldEdits"];


            if( !someFieldEdits || !someFieldEdits.length) {
                pLog( aMethodName + " !someFieldEdits || !someFieldEdits.length");
                return  pPtrDo_EditorOpen( anEditorName)
                    .then( function() {
                        pLog( aMethodName + " EMPTY");
                        return  browser.sleep( SLEEPATEMPTYSTEP);
                    })
                    .then( function() {
                        return pPtrDo_EditorClose( anEditorName);
                    });
            }
            pLog( aMethodName + " someFieldEdits=" + JSON.stringify( someFieldEdits));


            return pPtrDo_EditorOpen( anEditorName)
                .then( function() {
                    return pPtrDo_ChangeFields( theComposite, theSelection, someFieldEdits);
                })
                .then( function() {
                    return pPtrDo_EditorCancel( anEditorName);
                })
                .then( function() {
                    return pPtrDo_EditorOpen( anEditorName);
                })
                .then( function() {
                    return pPtrDo_ChangeFields( theComposite, theSelection, someFieldEdits);
                })
                .then( function() {
                    return pPtrDo_EditorSave( anEditorName);
                })
                .then( function() {
                    return pPtrDo_EditorRefresh( anEditorName);
                })
                .then( function() {
                    pLog( aMethodName + " DONE");
                    return browser.sleep( SLEEPATSTEPEND)
                });
        };








        var pPtrDo_Selection = function( theComposite, theSelection, theFullTitles) {

            var aMethodName = "pPtrDo_Selection";

            pLog( aMethodName);


            if( !theComposite) {
                pLog( aMethodName + " !theComposite");
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            if( !theSelection) {
                pLog( aMethodName + " !theSelection");
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            var aGridName = theComposite[ "inGridNamed"];
            if( !aGridName) {
                pLog( aMethodName + " !aGridName");
                return browser.sleep( SLEEPATMISSINGPARM)
            }
            pLog( aMethodName + " aGridName=" + aGridName);

            var aRowSelectedPromise = null;

            var aFinder = theSelection[ "finder"];
            if( aFinder) {
                aRowSelectedPromise = pPtrDo_SelectRowCellWithFinder( aGridName, aFinder);
            }
            else {
                var aSelectionIndex = theSelection[ "selectionIndex"];
                if( !( typeof aSelectionIndex == "undefined")) {

                    aRowSelectedPromise = pPtrDo_SelectRowCell( aGridName, aSelectionIndex, 0);
                }
            }

            if( !aRowSelectedPromise) {
                pLog( aMethodName + " !aRowSelectedPromise");
                return browser.sleep( SLEEPATEMPTYSTEP)
            }


            return aRowSelectedPromise
                .then( function() {
                    return pPtrDo_Edition( theComposite, theSelection);
                })
                .then( function() {
                    return pPtrDo_UnpinTab( aGridName);
                })
                .then( function() {
                    return pPtrDo_SubGrids( theComposite, theSelection, theFullTitles);
                })
                .then( function() {
                    pLog( aMethodName + " DONE");
                    return browser.sleep( SLEEPATSTEPEND)
                });
        };








        var pPtrDo_SubGrids = function( theComposite, theSelection, theFullTitles) {

            var aMethodName = "pPtrDo_SubGrids";

            pLog( aMethodName);


            if( !theComposite) {
                pLog( aMethodName + " !theComposite");
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            if( !theSelection) {
                pLog( aMethodName + " !theSelection");
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            var aGridName = theComposite[ "inGridNamed"];
            if( !aGridName) {
                pLog( aMethodName + " !aGridName");
                return browser.sleep( SLEEPATMISSINGPARM)
            }
            pLog( aMethodName + " aGridName=" + aGridName);

            var someInSubGrids = theSelection[ "inSubGrids"];
            if( !someInSubGrids || !someInSubGrids.length) {
                pLog( aMethodName + " EMPTY");
                return browser.sleep( SLEEPATEMPTYSTEP)
            }



            var someTitles = null;
            if( theFullTitles) {
                someTitles = theFullTitles.slice();
            }
            else {
                someTitles = [ ];
            }

            someTitles.push( aGridName);




            var aFirstInSubGrid = someInSubGrids[ 0];

            var anAllInSubGridsPromise = fDoPtr_RunningTest( someTitles, aFirstInSubGrid[ "inGridNamed"])
                .then( function() {
                    return pPtrDo_Composite( aFirstInSubGrid, someTitles);
                });

            var aNumInSubGrids = someInSubGrids.length;
            for( var aInSubGridIdx=1; aInSubGridIdx < aNumInSubGrids; aInSubGridIdx++) {

                var aInSubGrid = someInSubGrids[ aInSubGridIdx];
                if( aInSubGrid) {

                    var aOneInSubGridPromiseFunction = (function() {

                        var aInSubGrid_here = aInSubGrid;
                        return function() {
                            return fDoPtr_RunningTest( someTitles, aInSubGrid_here[ "inGridNamed"])
                                .then( function() {
                                    return pPtrDo_Composite( aInSubGrid_here, someTitles);
                                });
                        }
                    })();

                    anAllInSubGridsPromise = anAllInSubGridsPromise.then( aOneInSubGridPromiseFunction);
                }
            }

            return anAllInSubGridsPromise.then( function() {
                pLog( aMethodName + " DONE");
                return browser.sleep( SLEEPATSTEPEND)
            });
        };











        var pPtrDo_Composite = function( theComposite, theFullTitles) {

            var aMethodName = "pPtrDo_Composite";

            pLog( aMethodName);


            if( !theComposite) {
                pLog( aMethodName + " !theComposite");
                return browser.sleep( SLEEPATMISSINGPARM)
            }

            var aGridName = theComposite[ "inGridNamed"];
            if( !aGridName) {
                pLog( aMethodName + " !aGridName");
                return browser.sleep( SLEEPATMISSINGPARM)
            }



            var aGridRefreshedPromise =
                pPtrDo_SelectTab( aGridName)
                    .then( function() {
                        return pPtrDo_PinTab( aGridName);
                    })
                    .then( function() {
                        return pPtrDo_RefreshGrid( aGridName);
                    });





            var someSelections = theComposite[ "selections"];
            if( !someSelections || !someSelections.length) {
                return aGridRefreshedPromise
                    .then( function() {
                        return browser.sleep( SLEEPATEMPTYSTEP)
                    })
                    .then( function() {
                        return pPtrDo_UnpinTab( aGridName);
                    });
            }





            var aComposite = theComposite;

            var aFirstSelection = someSelections[ 0];

            var anAllSelectionsPromise =
                aGridRefreshedPromise
                    .then( function() {
                        return pPtrDo_Selection( aComposite, aFirstSelection, theFullTitles);
                    });


            var aNumSelections = someSelections.length;
            for( var aSelectionIdx=1; aSelectionIdx < aNumSelections; aSelectionIdx++) {

                var aSelection = someSelections[ aSelectionIdx];
                if( aSelection) {

                    var aOneSelectionPromiseFunction = (function() {

                        var aComposite_here = aComposite;
                        var aSelection_here = aSelection;
                        return function() {
                            return pPtrDo_Selection( aComposite_here, aSelection_here, theFullTitles);
                        }
                    })();

                    anAllSelectionsPromise = anAllSelectionsPromise.then( aOneSelectionPromiseFunction);
                }
            }

            return anAllSelectionsPromise.then( function() {
                pLog( aMethodName + " DONE");
                return browser.sleep( SLEEPATSTEPEND)
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




        var aSubTitle2 = "grids, editores, grids subordinadas, editor, grids sub-subordinadas, editor"
        describe(  aTitle + " " + aSubTitle2, function() {

            var aNumCompositeSpecs = COMPOSITESPECS.length;

            for( var aCompositeSpecIdx=0; aCompositeSpecIdx < aNumCompositeSpecs; aCompositeSpecIdx++) {

                var aCompositeSpec = COMPOSITESPECS[ aCompositeSpecIdx];
                if( aCompositeSpec) {

                    var aDoTabFunction = (function() {

                        var aCompositeSpec_here = aCompositeSpec;
                        return function() {
                            return fDoPtr_RunningTest( [ aTitle, aSubTitle2], aCompositeSpec_here[ "inGridNamed"])
                                .then( function() {
                                    return pPtrDo_Composite( aCompositeSpec_here, [ aTitle, aSubTitle2]);
                                });
                        }
                    })();

                    it( aTitle + " tab " + aCompositeSpec[ "inGridNamed"], aDoTabFunction);
                }
            }

        });



    });
});
