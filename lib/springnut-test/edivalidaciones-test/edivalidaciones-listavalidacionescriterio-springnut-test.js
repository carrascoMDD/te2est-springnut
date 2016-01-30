'use strict';

/*
 edivalidaciones-listavalidacionescriterio-springnut-test.js
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

    var aMod_definer = function( theM_runsubs_test,
                                 theM_parms_general) {

        var ModuleName     = "edivalidaciones-listavalidacionescriterio-springnut-test";
        var ModulePackages = "springnut-test/edivalidaciones-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }
            theToInit.EDIVALIDACIONES_LISTAVALIDACIONESCRITERIOLAZY_DEFAULT = false;



            theToInit.PARM_SESSIONTEST       = "sessiontest";

            theToInit.PARM_IDCRITERIO        = "idcriterio";

            theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO = "edivalidaciones_listavalidacionescriterio_springnut";

            theToInit.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_URLPATH   = theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO + ".URLpath";
            theToInit.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_LAZY      = theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO + ".lazy";

            theToInit.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_PRIMERO   = theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO + ".primero";
            theToInit.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_CUANTOS   = theToInit.PARMSPREFIX_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO + ".cuantos";


            theToInit.PARMS_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO = [
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_IDCRITERIO,
                theToInit.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_URLPATH,
                theToInit.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_LAZY,
                theToInit.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_PRIMERO,
                theToInit.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_CUANTOS
            ];



            theToInit.URLPATH_DEFAULT = "/edicionValidaciones/listaValidacionesDeCriterioJSON/";


            theToInit.TIPO_LISTAVALIDACIONESCRITERIO = "ListaValidacionesDeCriterio";

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










        var aEdivalidacionesListaValidacionesCriterioSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "EdivalidacionesListaValidacionesCriterioSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session      = null;

            aPrototype._v_EdivalidacionesListaValidacionesCriterioLazy = null;
            aPrototype._v_EdivalidacionesListaValidacionesCriterioRetrieved = null;

            aPrototype._v_IdCriterio               = null;

            aPrototype._v_Primero = null;
            aPrototype._v_Cuantos = null;

            aPrototype._v_ValidacionesCriterio = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_EdivalidacionesListaValidacionesCriterioSpringnut(
                    theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_EdivalidacionesListaValidacionesCriterioSpringnut = function(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session            = theSession;

                this._v_EdivalidacionesListaValidacionesCriterioLazy = null;
                this._v_EdivalidacionesListaValidacionesCriterioRetrieved = false;

                this._v_Primero = null;
                this._v_Cuantos = null;

                this._v_ValidacionesCriterio = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_EdivalidacionesListaValidacionesCriterioSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_EdivalidacionesListaValidacionesCriterioSpringnut){}/* CQT */
            aPrototype._pInit_EdivalidacionesListaValidacionesCriterioSpringnut = _pInit_EdivalidacionesListaValidacionesCriterioSpringnut;












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

                if( !( this._v_EdivalidacionesListaValidacionesCriterioLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_EdivalidacionesListaValidacionesCriterioLazy = this.fResolvedParmValue(  this.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_LAZY);
                if( this._v_EdivalidacionesListaValidacionesCriterioLazy == null) {
                    this._v_EdivalidacionesListaValidacionesCriterioLazy = this.EDIVALIDACIONES_LISTAVALIDACIONESCRITERIOLAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;










            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */



                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {


                    if( ( aThis._v_EdivalidacionesListaValidacionesCriterioLazy == true) && aThis._v_EdivalidacionesListaValidacionesCriterioRetrieved) {
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
                        aThis.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_URLPATH,
                        aThis.PARM_IDCRITERIO,
                        aThis.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_PRIMERO,
                        aThis.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_CUANTOS
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



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }



                    if( !aThis._v_IdCriterio) {

                        var aIdCriterioResolution = aParmResolutionsDict[ aThis.PARM_IDCRITERIO];
                        if( aIdCriterioResolution && aIdCriterioResolution._v_Success && aIdCriterioResolution._v_ParmValue) {
                            aThis._v_IdCriterio = aIdCriterioResolution._v_ParmValue;
                        }

                        if( !aThis._v_IdCriterio) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdCriterio", null));
                            return  false;
                        }
                    }


                    if( this._v_Primero == null) {
                        var aPrimeroResolution = aParmResolutionsDict[ this.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_PRIMERO];
                        if( aPrimeroResolution && aPrimeroResolution._v_Success) {

                            var aPrimero = aPrimeroResolution._v_ParmValue;
                            if( ( typeof aPrimero == "number") && ( aPrimero >= 0)) {
                                this._v_Primero = aPrimero;
                            }
                        }
                    }



                    if( this._v_Cuantos == null) {
                        var aCuantosResolution = aParmResolutionsDict[ this.PARM_EDIVALIDACIONES_LISTAVALIDACIONESCRITERIO_CUANTOS];
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


                    if( !aThis._v_IdCriterio) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdCriterio", null));
                        return null;
                    }


                    var aURL = aThis._v_BaseURL + aURLpath + aThis._v_IdCriterio;


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

                    var aListaValidacionesCriterio = theResponse.body;
                    if( !aListaValidacionesCriterio) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaValidacionesCriterio) theResponse.body", null));
                        return false;
                    }


                    var aTipoListaValidacionesCriterio = aListaValidacionesCriterio[ "vTipo"];
                    if( !aTipoListaValidacionesCriterio) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaValidacionesCriterio) theResponse.body['vTipo']", null));
                        return false;
                    }


                    if( !( aTipoListaValidacionesCriterio == this.TIPO_LISTAVALIDACIONESCRITERIO)) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaValidacionesCriterio) ( theResponse.body['vTipo'] == " + this.TIPO_LISTAVALIDACIONESCRITERIO + ")", null));
                        return false;
                    }

                    var aSuccessListaValidacionesCriterio = aListaValidacionesCriterio[ "vSuccess"];
                    if( !aSuccessListaValidacionesCriterio) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaValidacionesCriterio) theResponse.body.vSuccess", null));
                        return false;
                    }


                    var someValidaciones = aListaValidacionesCriterio[ "vValidaciones"];
                    if( !someValidaciones) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesListaValidacionesCriterio) theResponse.body.vValidaciones", null));
                        return false;
                    }


                    if( !someValidaciones.length) {
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_INFO, null, "!(EdivalidacionesListaValidacionesCriterio) theResponse.body.vValidaciones.length", null);
                    }


                    aThis._v_ValidacionesCriterio = someValidaciones;

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, someValidaciones.length, "(EdivalidacionesListaValidacionesCriterio) theResponse.body.vValidaciones", null);


                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_EdivalidacionesListaValidacionesCriterio = function( theCallback) {

                var aMethodName = "pS_EdivalidacionesListaValidacionesCriterio";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( ( this._v_EdivalidacionesListaValidacionesCriterioLazy == true) &&
                    !this._v_EdivalidacionesListaValidacionesCriterioRetrieved &&
                    !( this._v_ValidacionesCriterio == null)) {
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
            if( pS_EdivalidacionesListaValidacionesCriterio){}/* CQT */
            aPrototype.pS_EdivalidacionesListaValidacionesCriterio = pS_EdivalidacionesListaValidacionesCriterio;








            var pF_EdivalidacionesListaValidacionesCriterioSpringnut = function( theCallback) {
                var aMethodName = "pF_EdivalidacionesListaValidacionesCriterioSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_EdivalidacionesListaValidacionesCriterioSpringnut){}/* CQT */
            aPrototype.pF_EdivalidacionesListaValidacionesCriterioSpringnut = pF_EdivalidacionesListaValidacionesCriterioSpringnut;







            var fOwnTestMethodToRun = function() {
                return this.pSS_EdivalidacionesListaValidacionesCriterioSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_EdivalidacionesListaValidacionesCriterioSpringnut = function( theCallback) {
                var aMethodName = "pSS_EdivalidacionesListaValidacionesCriterioSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_EdivalidacionesListaValidacionesCriterio.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_EdivalidacionesListaValidacionesCriterioSpringnut){}/* CQT */
            aPrototype.pSS_EdivalidacionesListaValidacionesCriterioSpringnut = pSS_EdivalidacionesListaValidacionesCriterioSpringnut;







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




        var EdivalidacionesListaValidacionesCriterioSpringnutTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session      = null;

            this._v_EdivalidacionesListaValidacionesCriterioLazy = null;
            this._v_EdivalidacionesListaValidacionesCriterioRetrieved = null;

            this._v_IdCriterio               = null;

            this._v_Primero = null;
            this._v_Cuantos = null;

            this._v_ValidacionesCriterio = null;

            this._pInit_EdivalidacionesListaValidacionesCriterioSpringnut(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        EdivalidacionesListaValidacionesCriterioSpringnutTest_Constructor.prototype = aEdivalidacionesListaValidacionesCriterioSpringnutTest_Prototype;





        var EdivalidacionesListaValidacionesCriterioSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aEdivalidacionesListaValidacionesCriterioSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_EdivalidacionesListaValidacionesCriterioLazy = null;
            this._v_EdivalidacionesListaValidacionesCriterioRetrieved = null;

            this._v_IdCriterio               = null;

            this._v_Primero = null;
            this._v_Cuantos = null;

            this._v_ValidacionesCriterio = null;
        };
        EdivalidacionesListaValidacionesCriterioSpringnutTest_SuperPrototypeConstructor.prototype = aEdivalidacionesListaValidacionesCriterioSpringnutTest_Prototype;



        var aModule = {
            "EdivalidacionesListaValidacionesCriterioSpringnutTest_Prototype": aEdivalidacionesListaValidacionesCriterioSpringnutTest_Prototype,
            "EdivalidacionesListaValidacionesCriterioSpringnutTest_Constructor": EdivalidacionesListaValidacionesCriterioSpringnutTest_Constructor,
            "EdivalidacionesListaValidacionesCriterioSpringnutTest_SuperPrototypeConstructor": EdivalidacionesListaValidacionesCriterioSpringnutTest_SuperPrototypeConstructor
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
            "asyncshell/lib/general-test/parms-general"
        ], function (
                theM_runsubs_test,
                theM_parms_general
            ) {
            return aMod_definer(
                theM_runsubs_test,
                theM_parms_general
            );
        });
    }


}());


