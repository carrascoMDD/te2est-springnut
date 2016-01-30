'use strict';

/*
 edivalidaciones-cambiarcondiciondevalidacion-springnut-test.js
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

        var ModuleName     = "edivalidaciones-cambiarcondiciondevalidacion-springnut-test";
        var ModulePackages = "springnut-test/edivalidaciones-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.PARM_SESSIONTEST = "sessiontest";
            theToInit.PARM_IDCONDICION = "idcondicion";
            theToInit.PARM_IDLISTA     = "idlista";

            theToInit.IDLISTA_DEFAULT =  0;
            theToInit.IDLISTA_NONE    = -1;


            theToInit.PARMSPREFIX_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION = "edivalidaciones_cambiarcondiciondevalidacion_springnut";

            theToInit.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_URLPATH = theToInit.PARMSPREFIX_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION + ".URLpath";

            theToInit.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_IDCONDICION = theToInit.PARMSPREFIX_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION + ".idcondicion";
            theToInit.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_CONDICION   = theToInit.PARMSPREFIX_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION + ".condicion";
            theToInit.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_IDLISTA     = theToInit.PARMSPREFIX_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION + ".idlista";



            theToInit.PARMS_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION = [
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_IDCONDICION,
                theToInit.PARM_IDLISTA,
                theToInit.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_URLPATH,
                theToInit.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_IDCONDICION,
                theToInit.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_CONDICION
            ];



            theToInit.URLPATH_DEFAULT = "/edicionValidaciones/cambiarCondicionDeValidacionJSON";


            theToInit.TIPO_CAMBIADOCONDICIONVALIDACION = "CambiadoCondicionDeValidacion";

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










        var aEdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "EdivalidacionesCambiarCondicionDeValidacionSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session      = null;

            aPrototype._v_IdCondicion  = null;
            aPrototype._v_Condicion    = null;
            aPrototype._v_IdLista      = null;


            aPrototype._v_CambiadoCondicionDeValidacion               = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_EdivalidacionesCambiarCondicionDeValidacionSpringnut(
                    theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_EdivalidacionesCambiarCondicionDeValidacionSpringnut = function(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session            = theSession;

                this._v_IdCondicion = null;
                this._v_Condicion   = null;
                this._v_IdLista     = null;

                this._v_CambiadoCondicionDeValidacion               = null;
                if( this._v_CambiadoCondicionDeValidacion){}/* CQT */

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_EdivalidacionesCambiarCondicionDeValidacionSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_EdivalidacionesCambiarCondicionDeValidacionSpringnut){}/* CQT */
            aPrototype._pInit_EdivalidacionesCambiarCondicionDeValidacionSpringnut = _pInit_EdivalidacionesCambiarCondicionDeValidacionSpringnut;











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
                        aThis.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_URLPATH,
                        aThis.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_IDCONDICION,
                        aThis.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_CONDICION,
                        aThis.PARM_IDCONDICION,
                        aThis.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_IDLISTA,
                        aThis.PARM_IDLISTA
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



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }


                    if( !aThis._v_IdCondicion) {
                        var aIdCondicionResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_IDCONDICION];
                        if( aIdCondicionResolution && aIdCondicionResolution._v_Success && aIdCondicionResolution._v_ParmValue) {
                            aThis._v_IdCondicion = aIdCondicionResolution._v_ParmValue;
                        }
                        else {
                            aIdCondicionResolution = aParmResolutionsDict[ aThis.PARM_IDCONDICION];
                            if( aIdCondicionResolution && aIdCondicionResolution._v_Success && aIdCondicionResolution._v_ParmValue) {
                                aThis._v_IdCondicion = aIdCondicionResolution._v_ParmValue;
                            }
                        }

                        if( !aThis._v_IdCondicion) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdCondicion", null));
                            return  false;
                        }
                    }



                    if( !aThis._v_Condicion) {
                        var aCondicionResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_CONDICION];
                        if( aCondicionResolution && aCondicionResolution._v_Success && aCondicionResolution._v_ParmValue) {
                            aThis._v_Condicion = aCondicionResolution._v_ParmValue;
                        }
                    }



                    if( aThis._v_IdLista == null) {
                        var aIdListaResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_CAMBIARCONDICIONDEVALIDACION_IDLISTA];
                        if( aIdListaResolution && aIdListaResolution._v_Success && aIdListaResolution._v_ParmValue) {
                            aThis._v_IdLista = aIdListaResolution._v_ParmValue;
                        }
                        else {
                            aIdListaResolution = aParmResolutionsDict[ aThis.PARM_IDLISTA];
                            if( aIdListaResolution && aIdListaResolution._v_Success) {
                                aThis._v_IdLista = aIdListaResolution._v_ParmValue;
                            }
                        }

                        if( aThis._v_IdLista == null) {
                            aThis._v_IdLista = aThis.IDLISTA_DEFAULT;
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

                    var aURL = aThis._v_BaseURL + aURLpath;


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

                    if( !aThis._v_IdCondicion) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdCondicion", null));
                        return null;
                    }


                    var aFormData = {
                        "theIdCondicion":  aThis._v_IdCondicion,
                        "theCondicion":    aThis._v_Condicion,
                        "theIdLista":      aThis._v_IdLista
                    };

                    /* ACV OJO TODO Anadir ala http requests de tests end2end JSON API el header "User-Agent"
                     *   (non-Javadoc)
                     * @see org.springframework.security.web.authentication.AuthenticationSuccessHandler#onAuthenticationSuccess(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, org.springframework.security.core.Authentication)
                     */
                    return {
                        "form": aFormData,

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

                    var aCambiarCondicionDeValidacion = theResponse.body;
                    if( !aCambiarCondicionDeValidacion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesCambiarCondicionDeValidacion) theResponse.body", null));
                        return false;
                    }


                    var aTipoCambiarCondicionDeValidacion = aCambiarCondicionDeValidacion[ "vTipo"];
                    if( !aTipoCambiarCondicionDeValidacion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesCambiarCondicionDeValidacion) theResponse.body['vTipo']", null));
                        return false;
                    }


                    if( !( aTipoCambiarCondicionDeValidacion == this.TIPO_CAMBIADOCONDICIONVALIDACION)) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesCambiarCondicionDeValidacion) ( theResponse.body['vTipo'] == " + this.TIPO_CONDICIONVALIDACION + ")", null));
                        return false;
                    }

                    var aSuccessCambiarCondicionDeValidacion = aCambiarCondicionDeValidacion[ "vSuccess"];
                    if( !aSuccessCambiarCondicionDeValidacion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesCambiarCondicionDeValidacion) theResponse.body.vSuccess", null));
                        return false;
                    }


                    var aCambiadoCondicionDeValidacion = theResponse.body;


                    var aCondicionDeValidacionDespues = aCambiadoCondicionDeValidacion[ "vCondicionDeValidacionDespues"];
                    if( !aCondicionDeValidacionDespues) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCondicionDeValidacionDespues", null));
                        return false;
                    }


                    if( aThis._v_IdCondicion) {
                        var aIdCondicion = aCondicionDeValidacionDespues[ "idcondicion"];
                        if( !aIdCondicion) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCondicionDeValidacionDespues..iderror", null));
                            return false;
                        }

                        if( !( aIdCondicion == aThis._v_IdCondicion)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCondicionDeValidacionDespues.iderror == aThis._v_IdCondicion " + aThis._v_IdCondicion, null));
                            return false;
                        }
                    }



                    if( aThis._v_Condicion) {
                        var aCondicion = aCondicionDeValidacionDespues[ "condicion"];
                        if( !aCondicion) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCondicionDeValidacionDespues.condicion", null));
                            return false;
                        }

                        if( !( aCondicion.toUpperCase() == aThis._v_Condicion.toUpperCase())) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCondicionDeValidacionDespues.condicion == aThis._v_Condicion " + aThis._v_Condicion, null));
                            return false;
                        }
                    }



                    if( !( aThis._v_IdLista == null) && !( aThis._v_IdLista == aThis.IDLISTA_DEFAULT)) {
                        var aIdLista = aCondicionDeValidacionDespues[ "idlista"];
                        if( typeof aIdLista == "undefined") {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "typeof aIdLista == 'undefined')", null));
                            return false;
                        }

                        if( aThis._v_IdLista == aThis.IDLISTA_NONE) {
                            if ( !( aIdLista == null)) {
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! ( theResponse.body.idlista == null)" + aThis._v_IdLista, null));
                                return false;
                            }
                        }
                        else {
                            if( !( aIdLista == aThis._v_IdLista)) {
                                theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! ( theResponse.body.idlista == aThis._v_Lista)" + aThis._v_IdLista, null));
                                return false;
                            }
                        }
                    }

                    aThis._v_CambiadoCondicionDeValidacion = aCambiadoCondicionDeValidacion;

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aCambiadoCondicionDeValidacion, "(CambiadoCondicionDeValidacion) theResponse.body", null);


                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_EdivalidacionesCambiarCondicionDeValidacion = function( theCallback) {

                var aMethodName = "pS_EdivalidacionesCambiarCondicionDeValidacion";

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
            if( pS_EdivalidacionesCambiarCondicionDeValidacion){}/* CQT */
            aPrototype.pS_EdivalidacionesCambiarCondicionDeValidacion = pS_EdivalidacionesCambiarCondicionDeValidacion;








            var pF_EdivalidacionesCambiarCondicionDeValidacionSpringnut = function( theCallback) {
                var aMethodName = "pF_EdivalidacionesCambiarCondicionDeValidacionSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_EdivalidacionesCambiarCondicionDeValidacionSpringnut){}/* CQT */
            aPrototype.pF_EdivalidacionesCambiarCondicionDeValidacionSpringnut = pF_EdivalidacionesCambiarCondicionDeValidacionSpringnut;







            var fOwnTestMethodToRun = function() {
                return this.pSS_EdivalidacionesCambiarCondicionDeValidacionSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_EdivalidacionesCambiarCondicionDeValidacionSpringnut = function( theCallback) {
                var aMethodName = "pSS_EdivalidacionesCambiarCondicionDeValidacionSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_EdivalidacionesCambiarCondicionDeValidacion.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_EdivalidacionesCambiarCondicionDeValidacionSpringnut){}/* CQT */
            aPrototype.pSS_EdivalidacionesCambiarCondicionDeValidacionSpringnut = pSS_EdivalidacionesCambiarCondicionDeValidacionSpringnut;







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




        var EdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session      = null;

            this._v_IdCondicion = null;
            this._v_Condicion   = null;
            this._v_IdLista     = null;

            this._v_CambiadoCondicionDeValidacion = null;


            this._pInit_EdivalidacionesCambiarCondicionDeValidacionSpringnut(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        EdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Constructor.prototype = aEdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Prototype;





        var EdivalidacionesCambiarCondicionDeValidacionSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aEdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_IdCondicion = null;
            this._v_Condicion   = null;
            this._v_IdLista     = null;

            this._v_CambiadoCondicionDeValidacion = null;
        };
        EdivalidacionesCambiarCondicionDeValidacionSpringnutTest_SuperPrototypeConstructor.prototype = aEdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Prototype;



        var aModule = {
            "EdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Prototype": aEdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Prototype,
            "EdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Constructor": EdivalidacionesCambiarCondicionDeValidacionSpringnutTest_Constructor,
            "EdivalidacionesCambiarCondicionDeValidacionSpringnutTest_SuperPrototypeConstructor": EdivalidacionesCambiarCondicionDeValidacionSpringnutTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);


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


