'use strict';

/*
 edivalidaciones-listacondicionesvalidacion-springnut-test.js
 Creado 201409102326
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

        var ModuleName     = "edivalidaciones-listacondicionesvalidacion-springnut-test";
        var ModulePackages = "springnut-test/edivalidaciones-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }
            theToInit.EDIVALIDACIONES_LISTACONDICIONESVALIDACIONLAZY_DEFAULT = false;



            theToInit.PARM_SESSIONTEST       = "sessiontest";

            theToInit.PARM_IDERROR           = "iderror";

            theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTACONDICIONESVALIDACION = "edivalidaciones_listacondicionesvalidacion_springnut";

            theToInit.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_URLPATH = theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTACONDICIONESVALIDACION + ".URLpath";
            theToInit.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_LAZY    = theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTACONDICIONESVALIDACION + ".lazy";

            theToInit.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_PRIMERO   = theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTACONDICIONESVALIDACION + ".primero";
            theToInit.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_CUANTOS   = theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTACONDICIONESVALIDACION + ".cuantos";

            theToInit.PARMS_EDIVALIDACIONES_LISTACONDICIONESVALIDACION = [
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_IDERROR,
                theToInit.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_URLPATH,
                theToInit.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_LAZY,
                theToInit.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_PRIMERO,
                theToInit.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_CUANTOS
            ];



            theToInit.URLPATH_DEFAULT = "/edicionValidaciones/listaCondicionesDeValidacionJSON/";


            theToInit.TIPO_LISTACONDICIONESVALIDACION = "ListaCondicionesDeValidacion";

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










        var aEdivalidacionesListaCondicionesValidacionSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "EdivalidacionesListaCondicionesValidacionSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session      = null;

            aPrototype._v_EdivalidacionesListaCondicionesValidacionLazy = null;
            aPrototype._v_EdivalidacionesListaCondicionesValidacionRetrieved = null;

            aPrototype._v_Primero = null;
            aPrototype._v_Cuantos = null;

            aPrototype._v_IdError  = null;

            aPrototype._v_CondicionesValidacion               = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_EdivalidacionesListaCondicionesValidacionSpringnut(
                    theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_EdivalidacionesListaCondicionesValidacionSpringnut = function(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session            = theSession;

                this._v_EdivalidacionesListaCondicionesValidacionLazy = null;
                this._v_EdivalidacionesListaCondicionesValidacionRetrieved = false;

                this._v_Primero = null;
                this._v_Cuantos = null;

                this._v_IdError  = null;

                this._v_CondicionesValidacion               = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_EdivalidacionesListaCondicionesValidacionSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_EdivalidacionesListaCondicionesValidacionSpringnut){}/* CQT */
            aPrototype._pInit_EdivalidacionesListaCondicionesValidacionSpringnut = _pInit_EdivalidacionesListaCondicionesValidacionSpringnut;













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

                if( !( this._v_EdivalidacionesListaCondicionesValidacionLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_EdivalidacionesListaCondicionesValidacionLazy = this.fResolvedParmValue(  this.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_LAZY);
                if( this._v_EdivalidacionesListaCondicionesValidacionLazy == null) {
                    this._v_EdivalidacionesListaCondicionesValidacionLazy = this.EDIVALIDACIONES_LISTACONDICIONESVALIDACIONLAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;










            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */



                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {


                    if( ( aThis._v_EdivalidacionesListaCondicionesValidacionLazy == true) && aThis._v_EdivalidacionesListaCondicionesValidacionRetrieved) {
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
                        aThis.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_URLPATH,
                        aThis.PARM_IDERROR,
                        aThis.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_PRIMERO,
                        aThis.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_CUANTOS
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



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }



                    if( !aThis._v_IdError) {

                        var aIdErrorResolution = aParmResolutionsDict[ aThis.PARM_IDERROR];
                        if( aIdErrorResolution && aIdErrorResolution._v_Success && aIdErrorResolution._v_ParmValue) {
                            aThis._v_IdError = aIdErrorResolution._v_ParmValue;
                        }

                        if( !aThis._v_IdError) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdError", null));
                            return  false;
                        }
                    }


                    if( this._v_Primero == null) {
                        var aPrimeroResolution = aParmResolutionsDict[ this.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_PRIMERO];
                        if( aPrimeroResolution && aPrimeroResolution._v_Success) {

                            var aPrimero = aPrimeroResolution._v_ParmValue;
                            if( ( typeof aPrimero == "number") && ( aPrimero >= 0)) {
                                this._v_Primero = aPrimero;
                            }
                        }
                    }



                    if( this._v_Cuantos == null) {
                        var aCuantosResolution = aParmResolutionsDict[ this.PARM_EDIVALIDACIONES_LISTACONDICIONESVALIDACION_CUANTOS];
                        if( aCuantosResolution && aCuantosResolution._v_Success) {

                            var aCuantos = aCuantosResolution._v_ParmValue;
                            if( ( typeof aCuantos == "number") && ( aCuantos >= 0)) {
                                this._v_Cuantos = aCuantos;
                            }
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


                    if( !aThis._v_IdError) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdError", null));
                        return null;
                    }


                    var aURL = aThis._v_BaseURL + aURLpath + aThis._v_IdError;


                    var aPrimeroEncoded = "";
                    if( !( this._v_Primero == null)) {
                        aPrimeroEncoded = encodeURIComponent( aThis._v_Primero);
                    }
                    aURL += "?thePrimero=";
                    aURL += aPrimeroEncoded;


                    var aCuantosEncoded = "";
                    if( !( this._v_Cuantos == null)) {
                        aCuantosEncoded = encodeURIComponent( aThis._v_Cuantos);
                    }
                    aURL += "&theCuantos=";
                    aURL += aCuantosEncoded;


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

                    var aListaCondicionesValidacion = theResponse.body;
                    if( !aListaCondicionesValidacion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaCondicionesValidacion) theResponse.body", null));
                        return false;
                    }


                    var aTipoListaCondicionesValidacion = aListaCondicionesValidacion[ "vTipo"];
                    if( !aTipoListaCondicionesValidacion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaCondicionesValidacion) theResponse.body['vTipo']", null));
                        return false;
                    }


                    if( !( aTipoListaCondicionesValidacion == this.TIPO_LISTACONDICIONESVALIDACION)) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaCondicionesValidacion) ( theResponse.body['vTipo'] == " + this.TIPO_LISTACONDICIONESVALIDACION + ")", null));
                        return false;
                    }

                    var aSuccessListaCondicionesValidacion = aListaCondicionesValidacion[ "vSuccess"];
                    if( !aSuccessListaCondicionesValidacion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaCondicionesValidacion) theResponse.body.vSuccess", null));
                        return false;
                    }


                    var someCondiciones = aListaCondicionesValidacion[ "vCondiciones"];
                    if( !someCondiciones) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaCondicionesValidacion) theResponse.body.vCondiciones", null));
                        return false;
                    }


                    if( !someCondiciones.length) {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_INFO, null, "!(EdivalidacionesListaCondicionesValidacion) theResponse.body.vCondiciones.length", null);
                    }


                    aThis._v_CondicionesValidacion = someCondiciones;

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, someCondiciones.length, "(EdivalidacionesListaCondicionesValidacion) theResponse.body.vCondiciones", null);


                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_EdivalidacionesListaCondicionesValidacion = function( theCallback) {

                var aMethodName = "pS_EdivalidacionesListaCondicionesValidacion";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( ( this._v_EdivalidacionesListaCondicionesValidacionLazy == true) &&
                    !this._v_EdivalidacionesListaCondicionesValidacionRetrieved &&
                    !( this._v_CondicionesValidacion == null)) {
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
            if( pS_EdivalidacionesListaCondicionesValidacion){}/* CQT */
            aPrototype.pS_EdivalidacionesListaCondicionesValidacion = pS_EdivalidacionesListaCondicionesValidacion;








            var pF_EdivalidacionesListaCondicionesValidacionSpringnut = function( theCallback) {
                var aMethodName = "pF_EdivalidacionesListaCondicionesValidacionSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_EdivalidacionesListaCondicionesValidacionSpringnut){}/* CQT */
            aPrototype.pF_EdivalidacionesListaCondicionesValidacionSpringnut = pF_EdivalidacionesListaCondicionesValidacionSpringnut;







            var fOwnTestMethodToRun = function() {
                return this.pSS_EdivalidacionesListaCondicionesValidacionSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_EdivalidacionesListaCondicionesValidacionSpringnut = function( theCallback) {
                var aMethodName = "pSS_EdivalidacionesListaCondicionesValidacionSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_EdivalidacionesListaCondicionesValidacion.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_EdivalidacionesListaCondicionesValidacionSpringnut){}/* CQT */
            aPrototype.pSS_EdivalidacionesListaCondicionesValidacionSpringnut = pSS_EdivalidacionesListaCondicionesValidacionSpringnut;







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




        var EdivalidacionesListaCondicionesValidacionSpringnutTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session      = null;

            this._v_EdivalidacionesListaCondicionesValidacionLazy = null;
            this._v_EdivalidacionesListaCondicionesValidacionRetrieved = null;

            this._v_Primero = null;
            this._v_Cuantos = null;

            this._v_IdError  = null;

            this._v_CondicionesValidacion               = null;

            this._pInit_EdivalidacionesListaCondicionesValidacionSpringnut(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        EdivalidacionesListaCondicionesValidacionSpringnutTest_Constructor.prototype = aEdivalidacionesListaCondicionesValidacionSpringnutTest_Prototype;





        var EdivalidacionesListaCondicionesValidacionSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aEdivalidacionesListaCondicionesValidacionSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_EdivalidacionesListaCondicionesValidacionLazy = null;
            this._v_EdivalidacionesListaCondicionesValidacionRetrieved = null;

            this._v_Primero = null;
            this._v_Cuantos = null;

            this._v_IdError  = null;

            this._v_CondicionesValidacion               = null;
        };
        EdivalidacionesListaCondicionesValidacionSpringnutTest_SuperPrototypeConstructor.prototype = aEdivalidacionesListaCondicionesValidacionSpringnutTest_Prototype;



        var aModule = {
            "EdivalidacionesListaCondicionesValidacionSpringnutTest_Prototype": aEdivalidacionesListaCondicionesValidacionSpringnutTest_Prototype,
            "EdivalidacionesListaCondicionesValidacionSpringnutTest_Constructor": EdivalidacionesListaCondicionesValidacionSpringnutTest_Constructor,
            "EdivalidacionesListaCondicionesValidacionSpringnutTest_SuperPrototypeConstructor": EdivalidacionesListaCondicionesValidacionSpringnutTest_SuperPrototypeConstructor
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


