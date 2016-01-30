'use strict';

/*
 ficheros-list-filter-ine-springnut-test.js
 Creado 201408050911
 */

/*
 ***************************************************************************

 Desarrollado por ADEC Sistemas Informaticos sl Valencia Spain.  Copyright 2014 2015 Generalidad Valenciana
 Utilizando el te2est asyncshell escrito en Javascript por Antonio Carrasco Valero y licenciado bajo EUPL  http://www.te2est.org http://www.asyncshell.org

 {{LicenseProprietary1}}
 {{LicenseProprietary2}}

 {{LicensedProprietary1}}
 {{LicensedProprietary2}}

 ***************************************************************************
 */



(function () {

    var aMod_definer = function( theM_runsubs_test,
                                 theM_parms_general,
                                 theM_ficheroslist_inespringnut_test) {

        var ModuleName     = " ficheros-list-filter-ine-springnut-test";
        var ModulePackages = "springnut-test/ine-test/ficheros-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.PARMSPREFIX_FICHEROSLISTFILTER = "ficheroslistfilter_ine_springnut";


            theToInit.PARM_SESSIONTEST       = "sessiontest";
            theToInit.PARM_FICHEROSLISTTEST  = "ficheroslisttest";


            theToInit.PARM_FICHEROSLISTFILTER_PORANOS       = theToInit.PARMSPREFIX_FICHEROSLISTFILTER + ".poranos";
            theToInit.PARM_FICHEROSLISTFILTER_PORMESES      = theToInit.PARMSPREFIX_FICHEROSLISTFILTER + ".pormeses";
            theToInit.PARM_FICHEROSLISTFILTER_PORPROVINCIAS = theToInit.PARMSPREFIX_FICHEROSLISTFILTER + ".porprovincias";


            theToInit.PARMS_FICHEROSLISTFILTER = [
                theToInit.PARM_FICHEROSLISTFILTER_PORANOS,
                theToInit.PARM_FICHEROSLISTFILTER_PORMESES,
                theToInit.PARM_FICHEROSLISTFILTER_PORPROVINCIAS
            ];


            theToInit.PARMS_FICHEROSLIST = [
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_FICHEROSLISTTEST,
                theToInit.PARM_FICHEROSLISTFILTER_PORANOS,
                theToInit.PARM_FICHEROSLISTFILTER_PORMESES,
                theToInit.PARM_FICHEROSLISTFILTER_PORPROVINCIAS
            ];





            theToInit.FICHEROSLIST_SEARCHPARMS_PORCAMPOS = {};
            theToInit.FICHEROSLIST_SEARCHPARMS_PORCAMPOS[ theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_ANO]       = theM_ficheroslist_inespringnut_test.PARM_FICHEROSLIST_FILTER_ANOSEARCH;
            theToInit.FICHEROSLIST_SEARCHPARMS_PORCAMPOS[ theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_MES]       = theM_ficheroslist_inespringnut_test.PARM_FICHEROSLIST_FILTER_MESSEARCH;
            theToInit.FICHEROSLIST_SEARCHPARMS_PORCAMPOS[ theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_PROVINCIA] = theM_ficheroslist_inespringnut_test.PARM_FICHEROSLIST_FILTER_PROVINCIASEARCH;

            theToInit.FICHEROSLIST_SEARCHREGEXS_PORCAMPOS = {};
            theToInit.FICHEROSLIST_SEARCHREGEXS_PORCAMPOS[ theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_ANO]       = theM_ficheroslist_inespringnut_test.PARM_FICHEROSLIST_FILTER_ANOREGEX;
            theToInit.FICHEROSLIST_SEARCHREGEXS_PORCAMPOS[ theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_MES]       = theM_ficheroslist_inespringnut_test.PARM_FICHEROSLIST_FILTER_MESREGEX;
            theToInit.FICHEROSLIST_SEARCHREGEXS_PORCAMPOS[ theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_PROVINCIA] = theM_ficheroslist_inespringnut_test.PARM_FICHEROSLIST_FILTER_PROVINCIAREGEX;

        };




        var ModuleConstants = {};
        pgInitWithModuleConstants( ModuleConstants);




        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };










        var aFicherosListFilterIneSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "FicherosListFilterIneSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session  = null;

            aPrototype._v_FicherosList = null;



            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theFicherosList) {

                this._pInit_FicherosListFilterIneSpringnut(
                    theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theFicherosList);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_FicherosListFilterIneSpringnut = function(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theFicherosList) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session            = theSession;

                this._v_FicherosList = theFicherosList;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_FicherosListFilterIneSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_FicherosListFilterIneSpringnut){}/* CQT */
            aPrototype._pInit_FicherosListFilterIneSpringnut = _pInit_FicherosListFilterIneSpringnut;












            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_FicherosListFilterIneSpringnut( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_FicherosListFilterIneSpringnut = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_FicherosListFilterIneSpringnut){}/* CQT */
            aPrototype._pRelease_FicherosListFilterIneSpringnut = _pRelease_FicherosListFilterIneSpringnut;











            var pCleanUpTest = function( theWhatToClean, theReleaseParms, theReleaseDone) {

                if( !theWhatToClean) {
                    return;
                }

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }

                if( !this.HOUSEKEEPUTILS.fgWhatToCleanIncludesAtLeastOne( theWhatToClean, this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_IN_TESTS)) {
                    return;
                }

                if( ( theWhatToClean.indexOf( this.HOUSEKEEPCONSTANTS.WHATTOCLEAN_TESTS) >= 0)) {

                    this._pRelease( theReleaseParms, theReleaseDone);
                    return;
                }

                if( this.HOUSEKEEPUTILS.fgCleanedUpIncludesAll( this._v_CleanedUp, theWhatToClean)) {
                    return;
                }

                this._pRegisterCleanUpIdentifyingAndRecordCleanUp( theWhatToClean, theReleaseParms, theReleaseDone);

                this.pCleanUpTest_FicherosListFilterIneSpringnut( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_FicherosListFilterIneSpringnut = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_FicherosListFilterIneSpringnut){}/* CQT */
            aPrototype.pCleanUpTest_FicherosListFilterIneSpringnut = pCleanUpTest_FicherosListFilterIneSpringnut;








            var pS_PrepareFilterSubs = function( theCallback) {

                var aMethodName = "pS_PrepareFilterSubs";



                if( !this._v_Session) {
                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_INFO, null, "!this._v_Session", null);

                    this._v_Session = this.fResolvedParmValue(  this.PARM_SESSIONTEST);
                }
                if( !this._v_Session) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null,  "!this._v_Session", null));
                    return;
                }
                if( !this._v_Session._v_IsInSession) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null,  "!this._v_Session._v_IsInSession", null));
                    return;
                }





                if( !this._v_FicherosList) {
                    this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_INFO, null, "!this._v_FicherosList", null);

                    this._v_FicherosList = this.fResolvedParmValue(  this.PARM_FICHEROSLISTTEST);
                }
                if( !this._v_FicherosList) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null,  "!this._v_FicherosList", null));
                    return;
                }
                if( !this._v_FicherosList._v_FicherosListRetrieved) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null,  "!this._v_FicherosList._v_FicherosListRetrieved", null));
                    return;
                }
                if( !this._v_FicherosList._v_Ficheros || !this._v_FicherosList._v_Ficheros.length) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, "!this._v_FicherosList._v_Ficheros || !this._v_FicherosList._v_Ficheros.length", null, null));
                    return;
                }





                if( !this._v_Configuration) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration", null));
                    return;
                }


                var someParmsToResolve = [
                    this.PARM_FICHEROSLISTFILTER_PORANOS,
                    this.PARM_FICHEROSLISTFILTER_PORMESES,
                    this.PARM_FICHEROSLISTFILTER_PORPROVINCIAS
                ];

                var aParmResolutionsDict = this._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                if( !aParmResolutionsDict) {
                    theCallback( this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_FAIL, null, "!this._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                    return;
                }


                var aPorAnos = false;
                var aPorAnosResolution = aParmResolutionsDict[ this.PARM_FICHEROSLISTFILTER_PORANOS];
                if( aPorAnosResolution && aPorAnosResolution._v_Success) {
                    aPorAnos = aPorAnosResolution._v_ParmValue;
                }

                var aPorMeses = false;
                var aPorMesesResolution = aParmResolutionsDict[ this.PARM_FICHEROSLISTFILTER_PORMESES];
                if( aPorMesesResolution && aPorMesesResolution._v_Success) {
                    aPorMeses = aPorMesesResolution._v_ParmValue;
                }


                var aPorProvincias = false;
                var aPorProvinciasResolution = aParmResolutionsDict[ this.PARM_FICHEROSLISTFILTER_PORANOS];
                if( aPorProvinciasResolution && aPorProvinciasResolution._v_Success) {
                    aPorProvincias = aPorProvinciasResolution._v_ParmValue;
                }


                var aPreparedSubsForStr = "";

                if( aPorAnos) {
                    this.pPrepareFilterSubs_porcampo( this._v_FicherosList._v_Ficheros, theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_ANO);
                    aPreparedSubsForStr = "Por " + theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_ANO;
                }

                if( aPorMeses) {
                    this.pPrepareFilterSubs_porcampo( this._v_FicherosList._v_Ficheros, theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_MES);
                    if( aPreparedSubsForStr) {
                        aPreparedSubsForStr += " y ";
                    }
                    aPreparedSubsForStr += ( "Por " + theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_MES);
                }

                if( aPorProvincias) {
                    this.pPrepareFilterSubs_porcampo( this._v_FicherosList._v_Ficheros, theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_PROVINCIA);
                    if( aPreparedSubsForStr) {
                        aPreparedSubsForStr += " y ";
                    }
                    aPreparedSubsForStr += ( "Por " + theM_ficheroslist_inespringnut_test.FICHEROSLIST_CAMPO_PROVINCIA);
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_SUBS_INJECTEDDYNAMICSUBS, aPreparedSubsForStr, null, null));
            };
            if( pS_PrepareFilterSubs){}/* CQT */
            aPrototype.pS_PrepareFilterSubs = pS_PrepareFilterSubs;







            var pPrepareFilterSubs_porcampo = function( theDatos, theAttribute) {

                if( !theDatos) {
                    return;
                }

                if( !theAttribute) {
                    return;
                }

                var aSummaries = this.fSummaryDatos( theDatos, theAttribute);

                var someKeys = Object.keys( aSummaries);
                someKeys.sort();

                var aNumKeys = someKeys.length;
                for( var aKeyIdx= 0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = someKeys[ aKeyIdx];
                    if( ( aKey == "1") || ( aKey == "2")) {
                        /* ACV OJO 201408200831 Do not filter by i.e. months with a single digit, as the match is not exact,
                        and for example month 1 shall match 1, 10, 11, 12,
                        month 2 shall match 2, 12
                         */
                        continue;
                    }
                    var aNumDatosKey = aSummaries[ aKey];
                    if( aNumDatosKey) {

                        var aConfiguration_Synthethic = this._v_Configuration.fNewSyntheticConfiguration(
                            "FilterBy-" + theAttribute,
                                {
                                "_v_Runnable" :     true,
                                "_v_ExpectSuccess": true,
                                "_v_ForceError":    false,
                                "_v_ScheduleSubs":  false,
                                "_v_ConstructorModuleName": "@cmppath/springnut-test/ine-test/ficheros-test/ficheros-list-ine-springnut-test",
                                "_v_ConstructorName":       "FicherosListIneSpringnutTest_Constructor",
                                "_v_MethodName":           "pF_FicherosListIneSpringnut"
                            },
                            [
                                {
                                    "checkWhen": "AFTER",
                                    "checkNegate": false,
                                    "checkKind": "EQ",
                                    "checkOrigin": "TEST",
                                    "checkSource": "_v_Ficheros.length",
                                    "checkValue": aNumDatosKey
                                }
                            ]
                        );


                        aConfiguration_Synthethic.pInjectConfigParm( theM_ficheroslist_inespringnut_test.PARM_SESSIONTEST, this._v_Session);

                        aConfiguration_Synthethic.pInjectConfigParm( this.FICHEROSLIST_SEARCHPARMS_PORCAMPOS[ theAttribute], aKey);
                        aConfiguration_Synthethic.pInjectConfigParm( this.FICHEROSLIST_SEARCHREGEXS_PORCAMPOS[ theAttribute], false);

                        aConfiguration_Synthethic.pInjectConfigParm( theM_ficheroslist_inespringnut_test.PARM_FICHEROSLIST_MINRETRIEVED, aNumDatosKey);
                        aConfiguration_Synthethic.pInjectConfigParm( theM_ficheroslist_inespringnut_test.PARM_FICHEROSLIST_MAXRETRIEVED, aNumDatosKey);

                        this._v_Configuration.pAddSubConfiguration( aConfiguration_Synthethic)
                    }
                }
            };
            if( pPrepareFilterSubs_porcampo){}/* CQT */
            aPrototype.pPrepareFilterSubs_porcampo = pPrepareFilterSubs_porcampo;







            var fSummaryDatos = function( theDatos, theAttribute) {

                if( !theDatos) {
                    return null;
                }

                if( !theAttribute) {
                    return null;
                }

                var aNumDatos = theDatos.length;
                if( !aNumDatos) {
                    return null;
                }

                var aCountersDict = {};
                for( var aDatoIdx=0; aDatoIdx < aNumDatos; aDatoIdx++) {
                    var aDato = theDatos[ aDatoIdx];
                    var aDato_value = aDato[ theAttribute];
                    if( aDato_value) {
                        var aCounter = aCountersDict[ aDato_value];
                        if( !aCounter) {
                            aCounter = 1;
                        }
                        else {
                            aCounter += 1;
                        }
                        aCountersDict[ aDato_value] = aCounter;
                    }
                }

                return aCountersDict
            };
            if( fSummaryDatos){}/* CQT */
            aPrototype.fSummaryDatos = fSummaryDatos;







            var pF_FicherosListFilterIneSpringnut = function( theCallback) {
                var aMethodName = "pF_FicherosListFilterIneSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_FicherosListFilterIneSpringnut){}/* CQT */
            aPrototype.pF_FicherosListFilterIneSpringnut = pF_FicherosListFilterIneSpringnut;







            var pS_RunRequireds = function( theCallback) {

                aPrototype._v_SuperPrototype.pS_RunRequireds.bind( this)( theCallback);
            };
            if( pS_RunRequireds){}/* CQT */
            aPrototype.pS_RunRequireds = pS_RunRequireds;




            var fOwnTestMethodToRun = function() {
                return this.pSS_FicherosListFilterIneSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;








            var pSS_FicherosListFilterIneSpringnut = function( theCallback) {
                var aMethodName = "pSS_FicherosListFilterIneSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_PrepareFilterSubs.bind( this),
                    this.pS_RunSubs.bind( this)
                ];



                this.pS_RunSteps( theCallback);

            };
            if( pSS_FicherosListFilterIneSpringnut){}/* CQT */
            aPrototype.pSS_FicherosListFilterIneSpringnut = pSS_FicherosListFilterIneSpringnut;
















            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);
                if( aResultJSON){}/* CQT */


                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();




        var FicherosListFilterIneSpringnutTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theFicherosList) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_FicherosList = null;

            this._pInit_FicherosListFilterIneSpringnut(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theFicherosList);
        };
        FicherosListFilterIneSpringnutTest_Constructor.prototype = aFicherosListFilterIneSpringnutTest_Prototype;





        var FicherosListFilterIneSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aFicherosListFilterIneSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_FicherosList = null;
        };
        FicherosListFilterIneSpringnutTest_SuperPrototypeConstructor.prototype = aFicherosListFilterIneSpringnutTest_Prototype;



        var aModule = {
            "FicherosListFilterIneSpringnutTest_Prototype": aFicherosListFilterIneSpringnutTest_Prototype,
            "FicherosListFilterIneSpringnutTest_Constructor": FicherosListFilterIneSpringnutTest_Constructor,
            "FicherosListFilterIneSpringnutTest_SuperPrototypeConstructor": FicherosListFilterIneSpringnutTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_runsubs_test                = require('asyncshell/lib/common-test/runsubs-test');

            var aM_parms_general               = require('asyncshell/lib/general-test/parms-general');

            var aM_ficheroslist_inespringnut_test   = require('./ficheros-list-ine-springnut-test' );

            return aMod_definer( aM_runsubs_test, aM_parms_general, aM_ficheroslist_inespringnut_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "asyncshell/lib/common-test/runsubs-test",
            "asyncshell/lib/general-test/parms-general",
            "./ficheros-list-ine-springnut-test"], function (
            theM_runsubs_test, theM_parms_general, theM_ficheroslist_inespringnut_test) {
            return aMod_definer( theM_runsubs_test, theM_parms_general, theM_ficheroslist_inespringnut_test);
        });
    }


}());


