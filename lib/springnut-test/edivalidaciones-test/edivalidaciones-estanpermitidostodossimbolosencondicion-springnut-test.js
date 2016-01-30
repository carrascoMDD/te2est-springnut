'use strict';

/*
 edivalidaciones-estanpermitidostodossimbolosencondicion-springnut-test.js
 Creado 201409162002
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

    var aMod_definer = function( theM_runsubs_test, theM_parms_general) {

        var ModuleName     = "divalidaciones-estanpermitidostodossimbolosencondicion-springnut-test";
        var ModulePackages = "springnut-test/edivalidaciones-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }
            theToInit.EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICIONLAZY_DEFAULT = false;



            theToInit.PARM_SESSIONTEST = "sessiontest";

            theToInit.PARMSPREFIX_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION = "edivalidaciones_estanpermitidostodossimbolosencondicion_springnut";

            theToInit.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_URLPATH     = theToInit.PARMSPREFIX_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION + ".URLpath";
            theToInit.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_LAZY        = theToInit.PARMSPREFIX_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION + ".lazy";

            theToInit.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_CONDICION = theToInit.PARMSPREFIX_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION + ".condicion";


            theToInit.PARMS_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION = [
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_URLPATH,
                theToInit.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_LAZY,
                theToInit.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_CONDICION
            ];


            theToInit.URLPATH_DEFAULT = "/edicionValidaciones/estanPermitidosTodosSimbolosEnCondicionJSON";


            theToInit.TIPO_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION = "EstanPermitidosTodosSimbolosEnCondicion";

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










        var aEdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session      = null;

            aPrototype._v_Condicion  = null;

            aPrototype._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy = null;
            aPrototype._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionRetrieved = null;

            aPrototype._v_SimbolosPermitidosEnCondicion = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut(
                    theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut = function(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session            = theSession;

                this._v_Condicion  = null;

                this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy = null;
                this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionRetrieved = false;

                this._v_SimbolosPermitidosEnCondicion  = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut){}/* CQT */
            aPrototype._pInit_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut = _pInit_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_Edivalidaciones_CustomTestComponent( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_Edivalidaciones_CustomTestComponent = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_Edivalidaciones_CustomTestComponent){}/* CQT */
            aPrototype._pRelease_Edivalidaciones_CustomTestComponent = _pRelease_Edivalidaciones_CustomTestComponent;











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

                this.pCleanUpTest_Edivalidaciones_CustomTestComponent( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_Edivalidaciones_CustomTestComponent = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_Edivalidaciones_CustomTestComponent){}/* CQT */
            aPrototype.pCleanUpTest_Edivalidaciones_CustomTestComponent = pCleanUpTest_Edivalidaciones_CustomTestComponent;












            var pS_CheckLazy = function( theCallback) {

                var aMethodName = "pS_CheckLazy";

                if( !( this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy = this.fResolvedParmValue(  this.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_LAZY);
                if( this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy == null) {
                    this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy = this.EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICIONLAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;










            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */



                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {


                    if( ( aThis._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy == true) && aThis._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionRetrieved) {
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
                        aThis.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_URLPATH,
                        aThis.PARM_IDCONDICION,
                        aThis.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_CONDICION
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



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }



                    if( !aThis._v_Condicion) {
                        var aIdCondicionResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION_CONDICION];
                        if( aIdCondicionResolution && aIdCondicionResolution._v_Success && aIdCondicionResolution._v_ParmValue) {
                            aThis._v_Condicion = aIdCondicionResolution._v_ParmValue;
                        }

                        if( !aThis._v_Condicion || ( aThis._v_Condicion.length < 1)) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Condicion || ( aThis._v_Condicion.length < 1", null));
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


                    if( !aThis._v_Condicion) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_Condicion", null));
                        return null;
                    }

                    var aURL = aThis._v_BaseURL + aURLpath;

                    var aCondicionEncoded = encodeURIComponent( aThis._v_Condicion);
                    aURL += "?theCondicion=";
                    aURL += aCondicionEncoded;


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

                    var aSimbolosPermitidosEnCondicion = theResponse.body;
                    if( !aSimbolosPermitidosEnCondicion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion) theResponse.body", null));
                        return false;
                    }


                    var aTipoSimbolosPermitidosEnCondicion = aSimbolosPermitidosEnCondicion[ "vTipo"];
                    if( !aTipoSimbolosPermitidosEnCondicion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion) theResponse.body['vTipo']", null));
                        return false;
                    }


                    if( !( aTipoSimbolosPermitidosEnCondicion == this.TIPO_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION)) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion) ( theResponse.body['vTipo'] == " + this.TIPO_ESTANPERMITIDOSTODOSSIMBOLOSENCONDICION + ")", null));
                        return false;
                    }

                    var aSuccessSimbolosPermitidosEnCondicion = aSimbolosPermitidosEnCondicion[ "vSuccess"];
                    if( !aSuccessSimbolosPermitidosEnCondicion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion) theResponse.body.vSuccess", null));
                        return false;
                    }

                    aThis._v_SimbolosPermitidosEnCondicion = aSimbolosPermitidosEnCondicion;

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aSimbolosPermitidosEnCondicion, "(EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion) theResponse.body", null);


                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion = function( theCallback) {

                var aMethodName = "pS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( ( this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy == true) &&
                    !this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionRetrieved &&
                    !( this._v_SimbolosPermitidosEnCondicion == null)) {
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
            if( pS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion){}/* CQT */
            aPrototype.pS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion = pS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion;








            var pF_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut = function( theCallback) {
                var aMethodName = "pF_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut){}/* CQT */
            aPrototype.pF_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut = pF_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut;







            var fOwnTestMethodToRun = function() {
                return this.pSS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut = function( theCallback) {
                var aMethodName = "pSS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicion.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut){}/* CQT */
            aPrototype.pSS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut = pSS_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut;







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




        var EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session      = null;

            this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy = null;
            this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionRetrieved = null;

            this._v_Condicion  = null;

            this._v_SimbolosPermitidosEnCondicion  = null;

            this._pInit_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnut(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Constructor.prototype = aEdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Prototype;





        var EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aEdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionLazy = null;
            this._v_EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionRetrieved = null;

            this._v_Condicion  = null;

            this._v_SimbolosPermitidosEnCondicion  = null;
        };
        EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_SuperPrototypeConstructor.prototype = aEdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Prototype;



        var aModule = {
            "EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Prototype": aEdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Prototype,
            "EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Constructor": EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_Constructor,
            "EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_SuperPrototypeConstructor": EdivalidacionesEstanPermitidosTodosSimbolosEnCondicionSpringnutTest_SuperPrototypeConstructor
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

            var aM_runsubs_test  = require('asyncshell/lib/common-test/runsubs-test');
            var aM_parms_general = require('asyncshell/lib/general-test/parms-general');

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


