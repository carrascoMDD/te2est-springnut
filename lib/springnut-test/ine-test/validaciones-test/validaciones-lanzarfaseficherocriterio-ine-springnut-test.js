'use strict';

/*
 validaciones-lanzarfaseficherocriterio-ine-springnut-test.js
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

    var aMod_definer = function( theM_runsubs_test, theM_parms_general) {

        var ModuleName     = "validaciones-lanzarfaseficherocriterio-ine-springnut-test";
        var ModulePackages = "springnut-test/ine-test/validaciones";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }



            theToInit.LANZARFASEFICHEROCRITERIOLAZY_DEFAULT = false;


            theToInit.PARM_SESSIONTEST       = "sessiontest";
            theToInit.PARM_IDFICHERO         = "idfichero";
            theToInit.PARM_CRITERIO          = "criterio";

            theToInit.PARMSPREFIX_LANZARFASEFICHEROCRITERIO = "lanzarfaseficherocriterio_ine_springnut";

            theToInit.PARM_LANZARFASEFICHEROCRITERIO_URLPATH = theToInit.PARMSPREFIX_LANZARFASEFICHEROCRITERIO + ".URLpath";
            theToInit.PARM_LANZARFASEFICHEROCRITERIO_LAZY    = theToInit.PARMSPREFIX_LANZARFASEFICHEROCRITERIO + ".lazy";

            theToInit.PARM_LANZARFASEFICHEROCRITERIO_FORZAR   = theToInit.PARMSPREFIX_LANZARFASEFICHEROCRITERIO + ".forzar";
            theToInit.LANZARFASEFICHEROCRITERIOFORZAR_DEFAULT = false;


            theToInit.PARMS_LANZARFASEFICHEROCRITERIO = [
                theToInit.PARM_LANZARFASEFICHEROCRITERIO_URLPATH,
                theToInit.PARM_LANZARFASEFICHEROCRITERIO_LAZY,
                theToInit.PARM_LANZARFASEFICHEROCRITERIO_FORZAR,
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_IDFICHERO,
                theToInit.PARM_CRITERIO
            ];


            theToInit.URLPATH_DEFAULT = "/ine/validaciones/lanzarValidacionAvisosYerroresINEjson?idFichero=${_v_IdFichero}&criterio=${_v_Criterio}&forzar=${_v_Forzar}";
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










        var aLanzarFaseFicheroCriterioIneSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "LanzarFaseFicheroCriterioIneSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session      = null;

            aPrototype._v_IdFichero    = null;
            aPrototype._v_Criterio     = null;
            aPrototype._v_Forzar = null;

            aPrototype._v_FasesUltimasEHistoria = null;

            aPrototype._v_RespuestaLanzar   = null;
            aPrototype._v_RespuestaLanzar_InformeEstadoValidaciones   = null;
            aPrototype._v_RespuestaLanzar_FicheroYFasesrealizadas     = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                theSession, theIdFichero, theCriterio, theForzar) {

                this._pInit_LanzarFaseFicheroCriterioIneSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder,
                    theSession, theIdFichero, theCriterio, theForzar);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_LanzarFaseFicheroCriterioIneSpringnut = function( theTitle, theConfiguration, theIdentifier, theRecorder,
                theSession, theIdFichero, theCriterio, theForzar, theFasesUltimasEHistoria) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session      = theSession;

                this._v_IdFichero    = theIdFichero;
                this._v_Criterio     = theCriterio;
                this._v_Forzar       = theForzar;

                this._v_FasesUltimasEHistoria = theFasesUltimasEHistoria;

                this._v_RespuestaLanzar   = null;
                this._v_RespuestaLanzar_InformeEstadoValidaciones   = null;
                this._v_RespuestaLanzar_FicheroYFasesrealizadas     = null;

                if( this._v_RespuestaLanzar_FicheroYFasesrealizadas){}/* CQT */
                if( this._v_FasesUltimasEHistoria){}/* CQT */

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_LanzarFaseFicheroCriterioIneSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_LanzarFaseFicheroCriterioIneSpringnut){}/* CQT */
            aPrototype._pInit_LanzarFaseFicheroCriterioIneSpringnut = _pInit_LanzarFaseFicheroCriterioIneSpringnut;















            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_LanzarFaseFicheroCriterioIneSpringnut( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_LanzarFaseFicheroCriterioIneSpringnut = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_LanzarFaseFicheroCriterioIneSpringnut){}/* CQT */
            aPrototype._pRelease_LanzarFaseFicheroCriterioIneSpringnut = _pRelease_LanzarFaseFicheroCriterioIneSpringnut;











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

                this.pCleanUpTest_LanzarFaseFicheroCriterioIneSpringnut( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_LanzarFaseFicheroCriterioIneSpringnut = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_LanzarFaseFicheroCriterioIneSpringnut){}/* CQT */
            aPrototype.pCleanUpTest_LanzarFaseFicheroCriterioIneSpringnut = pCleanUpTest_LanzarFaseFicheroCriterioIneSpringnut;









            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */



                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {


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
                        aThis.PARM_LANZARFASEFICHEROCRITERIO_URLPATH,
                        aThis.PARM_LANZARFASEFICHEROCRITERIO_FORZAR,
                        aThis.PARM_IDFICHERO,
                        aThis.PARM_CRITERIO
                    ];

                    var aParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                    if( !aParmResolutionsDict) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                        return  false;
                    }


                    var aBaseURLResolution = aParmResolutionsDict[ theM_parms_general.PARM_HITPOINT_BASEURL];
                    if( !aBaseURLResolution || !aBaseURLResolution._v_Success || !aBaseURLResolution._v_ParmValue) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( 'hitpoint.baseURL')", null));
                        return  false;
                    }
                    aThis._v_BaseURL = aBaseURLResolution._v_ParmValue;



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_LANZARFASEFICHEROCRITERIO_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }




                    if( ( typeof aThis._v_Forzar == "undefined") || ( aThis._v_Forzar == null)) {

                        var aForzarResolution = aParmResolutionsDict[ aThis.PARM_LANZARFASEFICHEROCRITERIO_FORZAR];
                        if( aForzarResolution && aForzarResolution._v_Success) {
                            aThis._v_Forzar = aForzarResolution._v_ParmValue;
                        }
                        else {
                            aThis._v_Forzar = aThis.LANZARFASEFICHEROCRITERIOFORZAR_DEFAULT;
                        }
                    }




                    if( !aThis._v_IdFichero) {
                        var aIdFicheroResolution = aParmResolutionsDict[ this.PARM_IDFICHERO];
                        if( aIdFicheroResolution && aIdFicheroResolution._v_Success && aIdFicheroResolution._v_ParmValue) {
                            aThis._v_IdFichero = aIdFicheroResolution._v_ParmValue;
                        }
                    }

                    if( !aThis._v_IdFichero ) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdFichero", null));
                        return  false;
                    }






                    if( !aThis._v_Criterio) {
                        var aCriterioResolution = aParmResolutionsDict[ this.PARM_CRITERIO];
                        if( aCriterioResolution && aCriterioResolution._v_Success && aCriterioResolution._v_ParmValue) {
                            aThis._v_Criterio = aCriterioResolution._v_ParmValue;
                        }
                    }

                    if( !aThis._v_Criterio) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Criterio", null));
                        return  false;
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
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aURLpath", null));
                        return null;
                    }

                    if( !aThis._v_IdFichero) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdFichero", null));
                        return null;
                    }

                    if( !aThis._v_Criterio) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_Criterio", null));
                        return null;
                    }




                    var aURLpathWithParameters = aURLpath.replace( "${_v_IdFichero}", aThis._v_IdFichero).replace( "${_v_Criterio}", aThis._v_Criterio);

                    if( this._v_Forzar) {
                        aURLpathWithParameters = aURLpathWithParameters.replace( "${_v_Forzar}", aThis._v_Forzar);
                    }
                    else {
                        aURLpathWithParameters = aURLpathWithParameters.replace( "${_v_Forzar}", "");
                    }


                    var aURL = aThis._v_BaseURL + aURLpathWithParameters;


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

                    var aRespuestaLanzar = theResponse.body;
                    if( !aRespuestaLanzar) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse.body", null));
                        return false;
                    }

                    if( aRespuestaLanzar[ "vTipo"] == "InformeEstadoValidaciones") {
                        aThis._v_RespuestaLanzar = aRespuestaLanzar;
                        aThis._v_RespuestaLanzar_InformeEstadoValidaciones = aRespuestaLanzar;
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aRespuestaLanzar, "(InformeEstadoValidaciones) theResponse.body", null);
                    }

                    if( aRespuestaLanzar[ "vTipo"] == "FicheroYFasesrealizadas") {
                        aThis._v_RespuestaLanzar = aRespuestaLanzar;
                        aThis._v_RespuestaLanzar_FicheroYFasesrealizadas = aRespuestaLanzar;
                        aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aRespuestaLanzar, "(FicheroYFasesrealizadas) theResponse.body", null);
                    }


                    if( !aThis._v_RespuestaLanzar_InformeEstadoValidaciones) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_DIDNOTWORK, null, "!aThis._v_RespuestaLanzar", null));
                        return false;
                    }

                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_LanzarFaseFicheroCriterio = function( theCallback) {

                var aMethodName = "pS_fasesultimasehistoria";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                var aLazyInitializer    = this.fLazyInitializer( theCallback, aMethodName);
                var aURLpath            = this.fURLpath( theCallback);
                var aRequestData        = this.fRequestData( theCallback, aMethodName);
                var aRequiredStatusCode = this.fRequiredStatusCode( theCallback);
                var aResultParser       = this.fResultParser( theCallback, aMethodName);

                this.pS_AsyncRequestPost(
                    theCallback,
                    aMethodName,
                    aLazyInitializer,
                    aURLpath,
                    aRequestData,
                    aRequiredStatusCode,
                    aResultParser
                );
            };
            if( pS_LanzarFaseFicheroCriterio){}/* CQT */
            aPrototype.pS_LanzarFaseFicheroCriterio = pS_LanzarFaseFicheroCriterio;






            var pF_LanzarFaseFicheroCriterioIneSpringnut = function( theCallback) {
                var aMethodName = "pF_LanzarFaseFicheroCriterioIneSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_LanzarFaseFicheroCriterioIneSpringnut){}/* CQT */
            aPrototype.pF_LanzarFaseFicheroCriterioIneSpringnut = pF_LanzarFaseFicheroCriterioIneSpringnut;







            var fOwnTestMethodToRun = function() {
                return this.pSS_LanzarFaseFicheroCriterioIneSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_LanzarFaseFicheroCriterioIneSpringnut = function( theCallback) {
                var aMethodName = "pSS_LanzarFaseFicheroCriterioIneSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_LanzarFaseFicheroCriterio.bind( this),
                    this.pS_RunSubs.bind( this)
                ];

                this.pS_RunSteps( theCallback);

            };
            if( pSS_LanzarFaseFicheroCriterioIneSpringnut){}/* CQT */
            aPrototype.pSS_LanzarFaseFicheroCriterioIneSpringnut = pSS_LanzarFaseFicheroCriterioIneSpringnut;







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




        var LanzarFaseFicheroCriterioIneSpringnutTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder,
            theSession, theIdFichero, theCriterio, theForzar, theFasesUltimasEHistoria) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_FasesUltimasEHistoria = null;

            this._v_IdFichero    = null;
            this._v_Criterio     = null;
            this._v_Forzar       = null;

            this._v_RespuestaLanzar   = null;
            this._v_RespuestaLanzar_InformeEstadoValidaciones   = null;
            this._v_RespuestaLanzar_FicheroYFasesrealizadas     = null;

            this._pInit_LanzarFaseFicheroCriterioIneSpringnut(
                theTitle, theConfiguration, theIdentifier, theRecorder,
                theSession, theIdFichero, theCriterio, theForzar, theFasesUltimasEHistoria);
        };
        LanzarFaseFicheroCriterioIneSpringnutTest_Constructor.prototype = aLanzarFaseFicheroCriterioIneSpringnutTest_Prototype;





        var LanzarFaseFicheroCriterioIneSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aLanzarFaseFicheroCriterioIneSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_FasesUltimasEHistoria = null;

            this._v_IdFichero    = null;
            this._v_Criterio     = null;
            this._v_Forzar       = null;

            this._v_RespuestaLanzar   = null;
            this._v_RespuestaLanzar_InformeEstadoValidaciones   = null;
            this._v_RespuestaLanzar_FicheroYFasesrealizadas     = null;
        };
        LanzarFaseFicheroCriterioIneSpringnutTest_SuperPrototypeConstructor.prototype = aLanzarFaseFicheroCriterioIneSpringnutTest_Prototype;



        var aModule = {
            "LanzarFaseFicheroCriterioIneSpringnutTest_Prototype": aLanzarFaseFicheroCriterioIneSpringnutTest_Prototype,
            "LanzarFaseFicheroCriterioIneSpringnutTest_Constructor": LanzarFaseFicheroCriterioIneSpringnutTest_Constructor,
            "LanzarFaseFicheroCriterioIneSpringnutTest_SuperPrototypeConstructor": LanzarFaseFicheroCriterioIneSpringnutTest_SuperPrototypeConstructor
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

            var aM_runsubs_test                        = require('asyncshell/lib/common-test/runsubs-test');
            var aM_parms_general                       = require('asyncshell/lib/general-test/parms-general');

            return aMod_definer(  aM_runsubs_test, aM_parms_general);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "'asyncshell/lib/common-test/runsubs-test'",
            "asyncshell/lib/general-test/parms-general"], function (
            theM_runsubs_test, theM_parms_general) {
            return aMod_definer( theM_runsubs_test, theM_parms_general);
        });
    }


}());

