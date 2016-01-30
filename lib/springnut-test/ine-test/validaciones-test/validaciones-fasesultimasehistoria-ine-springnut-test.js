'use strict';

/*
 validaciones-fasesultimasehistoria-ine-springnut-test.js
 Creado 201408190827
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
                                 theM_parms_general) {

        var ModuleName     = "validaciones-fasesultimasehistoria-ine-springnut-test";
        var ModulePackages = "springnut-test/ine-test/validaciones-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }
            theToInit.FASESULTIMASEHISTORIALAZY_DEFAULT = false;



            theToInit.PARM_SESSIONTEST       = "sessiontest";
            theToInit.PARM_IDFICHERO         = "idfichero";

            theToInit.PARMSPREFIX_FASESULTIMASEHISTORIA = "fasesultimasehistoria_ine_springnut";

            theToInit.PARM_FASESULTIMASEHISTORIA_URLPATH = theToInit.PARMSPREFIX_FASESULTIMASEHISTORIA + ".URLpath";
            theToInit.PARM_FASESULTIMASEHISTORIA_LAZY    = theToInit.PARMSPREFIX_FASESULTIMASEHISTORIA + ".lazy";


            theToInit.PARMS_FASESULTIMASEHISTORIA = [
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_IDFICHERO,
                theToInit.PARM_FASESULTIMASEHISTORIA_URLPATH,
                theToInit.PARM_FASESULTIMASEHISTORIA_LAZY
            ];



            theToInit.URLPATH_DEFAULT = "/ine/validaciones/fasesRealizadasValidacionAvisosYerroresINEjson/";


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










        var aFasesUltimasEHistoriaIneSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "FasesUltimasEHistoriaIneSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session      = null;

            aPrototype._v_IdFichero    = null;

            aPrototype._v_FasesUltimasEHistoriaLazy = null;
            aPrototype._v_FasesUltimasEHistoriaRetrieved = null;

            aPrototype._v_FicheroYFasesrealizadas = null;
            aPrototype._v_Criterios               = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theIdFichero) {

                this._pInit_FasesUltimasEHistoriaIneSpringnut(
                    theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theIdFichero);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_FasesUltimasEHistoriaIneSpringnut = function(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theIdFichero) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session            = theSession;

                this._v_IdFichero    = theIdFichero;

                this._v_FasesUltimasEHistoriaLazy = null;
                this._v_FasesUltimasEHistoriaRetrieved = false;

                this._v_FicheroYFasesrealizadas = null;
                this._v_Criterios               = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_FasesUltimasEHistoriaIneSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_FasesUltimasEHistoriaIneSpringnut){}/* CQT */
            aPrototype._pInit_FasesUltimasEHistoriaIneSpringnut = _pInit_FasesUltimasEHistoriaIneSpringnut;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_FasesUltimasEHistoriaIneSpringnut( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_FasesUltimasEHistoriaIneSpringnut = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_FasesUltimasEHistoriaIneSpringnut){}/* CQT */
            aPrototype._pRelease_FasesUltimasEHistoriaIneSpringnut = _pRelease_FasesUltimasEHistoriaIneSpringnut;











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

                this.pCleanUpTest_FasesUltimasEHistoriaIneSpringnut( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_FasesUltimasEHistoriaIneSpringnut = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_FasesUltimasEHistoriaIneSpringnut){}/* CQT */
            aPrototype.pCleanUpTest_FasesUltimasEHistoriaIneSpringnut = pCleanUpTest_FasesUltimasEHistoriaIneSpringnut;







            var pS_CheckLazy = function( theCallback) {

                var aMethodName = "pS_CheckLazy";

                if( !( this._v_FasesUltimasEHistoriaLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_FasesUltimasEHistoriaLazy = this.fResolvedParmValue(  this.PARM_FASESULTIMASEHISTORIA_LAZY);
                if( this._v_FasesUltimasEHistoriaLazy == null) {
                    this._v_FasesUltimasEHistoriaLazy = this.FASESULTIMASEHISTORIALAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;










            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */



                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {


                    if( ( aThis._v_FasesUltimasEHistoriaLazy == true) && aThis._v_FasesUltimasEHistoriaRetrieved) {
                        var aRecord = aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_ALREADY, null, null, null);
                        theOtherCallback( null, aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_OK, aRecord, null, null));
                        return true;
                    }


                    if( !aThis._v_Session) {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_INFO, null, "!aThis._v_Session", null);

                        aThis._v_Session = aThis.fResolvedParmValue(  aThis.PARM_SESSIONTEST);
                    }
                    if( !aThis._v_Session) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null,  "!aThis._v_Session", null));
                        return false;
                    }
                    if( !aThis._v_Session._v_IsInSession) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null,  "!aThis._v_Session._v_IsInSession", null));
                        return false;
                    }


                    



                    if( !aThis._v_Configuration) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration", null));
                        return  false;
                    }


                    var someParmsToResolve = [
                        theM_parms_general.PARM_HITPOINT_BASEURL,
                        aThis.PARM_FASESULTIMASEHISTORIA_URLPATH,
                        aThis.PARM_IDFICHERO
                    ];

                    var aParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                    if( !aParmResolutionsDict) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                        return  false;
                    }


                    var aBaseURLResolution = aParmResolutionsDict[ theM_parms_general.PARM_HITPOINT_BASEURL];
                    if( !aBaseURLResolution || !aBaseURLResolution._v_Success || !aBaseURLResolution._v_ParmValue) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " +  theM_parms_general.PARM_HITPOINT_BASEURL + ")", null));
                        return  false;
                    }
                    aThis._v_BaseURL = aBaseURLResolution._v_ParmValue;



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_FASESULTIMASEHISTORIA_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }



                    if( !aThis._v_IdFichero) {

                        var aIdFicheroResolution = aParmResolutionsDict[ this.PARM_IDFICHERO];
                        if( aIdFicheroResolution && aIdFicheroResolution._v_Success && aIdFicheroResolution._v_ParmValue) {
                            aThis._v_IdFichero = aIdFicheroResolution._v_ParmValue;
                        }

                        if( !aThis._v_IdFichero) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdFichero", null));
                            return  false;
                        }
                    }

                    return true;


                }).bind( this);
                if( aLazyInitializerFunction){}/* CQT */

                return aLazyInitializerFunction;
            };
            if( fLazyInitializer){}/* CQT */
            aPrototype.fLazyInitializer = fLazyInitializer;







            var fURLpath = function( theCallback) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    if( !aThis._v_BaseURL) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_BaseURL", null));
                        return null;
                    }

                    var aURLpath = aThis._v_URLpath;
                    if( !aURLpath) {
                        aURLpath = aThis.URLPATH_DEFAULT;
                    }
                    if( !aURLpath) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_URLpath && !aThis.URLPATH_DEFAULT", null));
                        return null;
                    }

                    if( !aThis._v_IdFichero) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdFichero", null));
                        return null;
                    }


                    var aURL = aThis._v_BaseURL + aURLpath + aThis._v_IdFichero;


                    if( aURL){}/* CQT */
                    return aURL;
                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fURLpath){}/* CQT */
            aPrototype.fURLpath = fURLpath;






            var fRequestData = function( theCallback, theMethodName) {
                var aThis = this;

                var aFunction = (function( theOtherCallback) {

                    if( !aThis._v_Session || !aThis._v_Session._v_IsInSession) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Session || !aThis._v_Session._v_IsInSession", null));
                        return null;
                    }


                    if( !aThis._v_Session._v_Login || !aThis._v_Session._v_Login._v_Cookies || !aThis._v_Session._v_Login._v_Cookies.length) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Session._v_Login || !aThis._v_Session._v_Login._v_Cookies || !aThis._v_Session._v_Login._v_Cookies.length", null));
                        return null;
                    }

                    if( !aThis._v_Session._v_IsAuthenticated || !aThis._v_Session._v_IsAuthenticated._v_IsAuthenticated) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Session._v_IsAuthenticated || !aThis._v_Session._v_IsAuthenticated._v_IsAuthenticated", null));
                        return null;
                    }


                    /* ACV OJO TODO Anadir ala http requests de tests end2end JSON API el header "User-Agent"
                     *   (non-Javadoc)
                     * @see org.springframework.security.web.authentication.AuthenticationSuccessHandler#onAuthenticationSuccess(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, org.springframework.security.core.Authentication)
                     */
                    return {
                        "headers": {
                            cookie: aThis._v_Session._v_Login._v_Cookies[ 0]
                        },
                        "json": true
                    };
                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fRequestData){}/* CQT */
            aPrototype.fRequestData = fRequestData;







            var fRequiredStatusCode = function( theCallback) {
                if( theCallback){}/* CQT */
                return 200;
            };
            if( fRequiredStatusCode){}/* CQT */
            aPrototype.fRequiredStatusCode = fRequiredStatusCode;






            var fResultParser = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aResultParserFunction = (function( theCallback, theError, theResponse, theBody) {
                    if( theBody){}/* CQT */


                    if( !theResponse) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                        return false;
                    }

                    var aFasesUltimasEHistoria = theResponse.body;
                    if( !aFasesUltimasEHistoria) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(FasesUltimasEHistoria) theResponse.body", null));
                        return false;
                    }

                    aThis._v_FicheroYFasesrealizadas = aFasesUltimasEHistoria;

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aFasesUltimasEHistoria, "(FasesUltimasEHistoria) theResponse.body", null);


                    var  someCriterios = aThis._v_FicheroYFasesrealizadas.criteriosYUltimaFaserealizada;
                    if( !someCriterios || !someCriterios.length) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis, aMethodName, aThis.EVENTKIND_FAIL, null, "!(Criterios) theResponse.body.criteriosYUltimaFaserealizada", null));
                        return false;
                    }

                    aThis._v_Criterios = someCriterios.slice();

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, null, "(Criterios) theResponse.body.criteriosYUltimaFaserealizada.length: " + someCriterios.length, null);


                    if( !aThis._v_Criterios.length) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_DIDNOTWORK, null, "!(Criterios) theResponse.body.criteriosYUltimaFaserealizada.length", null));
                        return false;
                    }

                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_FasesUltimasEHistoria = function( theCallback) {

                var aMethodName = "pS_FasesUltimasEHistoria";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( ( this._v_FasesUltimasEHistoriaLazy == true) &&
                    !this._v_FasesUltimasEHistoriaRetrieved &&
                    !( this._v_Criterios == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                var aLazyInitializer    = this.fLazyInitializer( theCallback, aMethodName);
                var aURLpath            = this.fURLpath( theCallback);
                var aRequestData        = this.fRequestData( theCallback, aMethodName);
                var aRequiredStatusCode = this.fRequiredStatusCode( theCallback);
                var aResultParser       = this.fResultParser( theCallback, aMethodName);

                this.pS_AsyncRequestGet(
                    theCallback,
                    aMethodName,
                    aLazyInitializer,
                    aURLpath,
                    aRequestData,
                    aRequiredStatusCode,
                    aResultParser
                );
            };
            if( pS_FasesUltimasEHistoria){}/* CQT */
            aPrototype.pS_FasesUltimasEHistoria = pS_FasesUltimasEHistoria;








            var pF_FasesUltimasEHistoriaIneSpringnut = function( theCallback) {
                var aMethodName = "pF_FasesUltimasEHistoriaIneSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_FasesUltimasEHistoriaIneSpringnut){}/* CQT */
            aPrototype.pF_FasesUltimasEHistoriaIneSpringnut = pF_FasesUltimasEHistoriaIneSpringnut;







            var fOwnTestMethodToRun = function() {
                return this.pSS_FasesUltimasEHistoriaIneSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_FasesUltimasEHistoriaIneSpringnut = function( theCallback) {
                var aMethodName = "pSS_FasesUltimasEHistoriaIneSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_FasesUltimasEHistoria.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_FasesUltimasEHistoriaIneSpringnut){}/* CQT */
            aPrototype.pSS_FasesUltimasEHistoriaIneSpringnut = pSS_FasesUltimasEHistoriaIneSpringnut;







            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = aPrototype._v_SuperPrototype.fToResultJSON.apply( this, [ theCommonObjects, theAlready]);


                var aSessionResultJSON = null;
                if( this._v_Session) {
                    aSessionResultJSON = this._v_Session.fToResultJSON( theCommonObjects, theAlready)
                }


                aResultJSON.session           = aSessionResultJSON;


                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();




        var FasesUltimasEHistoriaIneSpringnutTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theIdFichero) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session      = null;

            this._v_IdFichero    = null;

            this._v_FasesUltimasEHistoriaLazy = null;
            this._v_FasesUltimasEHistoriaRetrieved = null;

            this._v_FicheroYFasesrealizadas = null;
            this._v_Criterios               = null;

            this._pInit_FasesUltimasEHistoriaIneSpringnut(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession, theIdFichero);
        };
        FasesUltimasEHistoriaIneSpringnutTest_Constructor.prototype = aFasesUltimasEHistoriaIneSpringnutTest_Prototype;





        var FasesUltimasEHistoriaIneSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aFasesUltimasEHistoriaIneSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_IdFichero    = null;

            this._v_FasesUltimasEHistoriaLazy = null;
            this._v_FasesUltimasEHistoriaRetrieved = null;

            this._v_FicheroYFasesrealizadas = null;
            this._v_Criterios               = null;
        };
        FasesUltimasEHistoriaIneSpringnutTest_SuperPrototypeConstructor.prototype = aFasesUltimasEHistoriaIneSpringnutTest_Prototype;



        var aModule = {
            "FasesUltimasEHistoriaIneSpringnutTest_Prototype": aFasesUltimasEHistoriaIneSpringnutTest_Prototype,
            "FasesUltimasEHistoriaIneSpringnutTest_Constructor": FasesUltimasEHistoriaIneSpringnutTest_Constructor,
            "FasesUltimasEHistoriaIneSpringnutTest_SuperPrototypeConstructor": FasesUltimasEHistoriaIneSpringnutTest_SuperPrototypeConstructor
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

            var aM_runsubs_test               = require('asyncshell/lib/common-test/runsubs-test');
            var aM_parms_general              = require('asyncshell/lib/general-test/parms-general');

            return aMod_definer( aM_runsubs_test, aM_parms_general);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "asyncshell/lib/common-test/runsubs-test",
            "asyncshell/lib/general-test/parms-general"], function (
            theM_runsubs_test, theM_parms_general) {
            return aMod_definer( theM_runsubs_test, theM_parms_general);
        });
    }


}());


