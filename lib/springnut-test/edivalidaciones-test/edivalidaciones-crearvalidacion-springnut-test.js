'use strict';

/*
 edivalidaciones-crearvalidacion-springnut-test.js
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

        var ModuleName     = "edivalidaciones-crearvalidacion-springnut-test";
        var ModulePackages = "springnut-test/edivalidaciones-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.PARM_SESSIONTEST       = "sessiontest";

            theToInit.PARM_IDCRITERIO        = "idcriterio";

            theToInit.PARMSPREFIX_EDIVALIDACIONES_CREARVALIDACION = "edivalidaciones_crearvalidacion_springnut";

            theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_URLPATH = theToInit.PARMSPREFIX_EDIVALIDACIONES_CREARVALIDACION + ".URLpath";

            theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_IDERROR     = theToInit.PARMSPREFIX_EDIVALIDACIONES_CREARVALIDACION + ".iderror";
            theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_DESCRIPCION = theToInit.PARMSPREFIX_EDIVALIDACIONES_CREARVALIDACION + ".descripcion";
            theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_SEVERIDAD   = theToInit.PARMSPREFIX_EDIVALIDACIONES_CREARVALIDACION + ".severidad";
            theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_ACTIVA      = theToInit.PARMSPREFIX_EDIVALIDACIONES_CREARVALIDACION + ".activa";

            theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_STATUSCODE  = theToInit.PARMSPREFIX_EDIVALIDACIONES_CREARVALIDACION + ".statuscode";



            theToInit.PARMS_EDIVALIDACIONES_CREARVALIDACION = [
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_URLPATH,
                theToInit.PARM_IDCRITERIO,
                theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_IDERROR,
                theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_DESCRIPCION,
                theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_SEVERIDAD,
                theToInit.PARM_EDIVALIDACIONES_CREARVALIDACION_ACTIVA
            ];



            theToInit.URLPATH_DEFAULT = "/edicionValidaciones/crearValidacionJSON";

            theToInit.EDIVALIDACIONES_CREARVALIDACION_SEVERIDAD_DEFAULT = 0;


            theToInit.TIPO_VALIDACIONDATOS = "ValidacionDatos";

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










        var aEdivalidacionesCrearValidacionSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "EdivalidacionesCrearValidacionSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session      = null;

            aPrototype._v_IdCriterio     = null;
            aPrototype._v_IdError        = null;
            aPrototype._v_Descripcion    = null;
            aPrototype._v_Severidad      = null;
            aPrototype._v_Activa         = null;


            aPrototype._v_ValidacionDatos               = null;






            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_EdivalidacionesCrearValidacionSpringnut(
                    theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_EdivalidacionesCrearValidacionSpringnut = function(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session            = theSession;

                this._v_IdCriterio     = null;
                this._v_IdError        = null;
                this._v_Descripcion    = null;
                this._v_Severidad      = null;
                this._v_Activa         = null;

                this._v_ValidacionDatos               = null;
                if( this._v_ValidacionDatos){}/* CQT */

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_EdivalidacionesCrearValidacionSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_EdivalidacionesCrearValidacionSpringnut){}/* CQT */
            aPrototype._pInit_EdivalidacionesCrearValidacionSpringnut = _pInit_EdivalidacionesCrearValidacionSpringnut;













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
                        aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_URLPATH,
                        aThis.PARM_IDCRITERIO,
                        aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_IDERROR,
                        aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_DESCRIPCION,
                        aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_SEVERIDAD,
                        aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_ACTIVA
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



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }


                    if( !aThis._v_IdError) {
                        var aIdErrorResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_IDERROR];
                        if( aIdErrorResolution && aIdErrorResolution._v_Success && aIdErrorResolution._v_ParmValue) {
                            aThis._v_IdError = aIdErrorResolution._v_ParmValue;
                        }

                        if( !aThis._v_IdError) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdError", null));
                            return  false;
                        }
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



                    if( !aThis._v_Descripcion) {
                        var aDescripcionResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_DESCRIPCION];
                        if( aDescripcionResolution && aDescripcionResolution._v_Success && aDescripcionResolution._v_ParmValue) {
                            aThis._v_Descripcion = aDescripcionResolution._v_ParmValue;
                        }

                        if( !aThis._v_Descripcion) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Descripcion", null));
                            return  false;
                        }
                    }



                    if( aThis._v_Severidad == null) {
                        var aSeveridadResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_SEVERIDAD];
                        if( !aSeveridadResolution || !aSeveridadResolution._v_Success) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Severidad", null));
                            return  false;
                        }

                        var aParsedSeveridad = null;
                        try {
                            aParsedSeveridad = parseInt( aSeveridadResolution._v_ParmValue)
                        }
                        catch( anException) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "Exception in parseInt( aThis._v_Severidad)", null));
                            return  false;
                        }
                        if( aParsedSeveridad == null) {
                            aParsedSeveridad = aThis.EDIVALIDACIONES_CREARVALIDACION_SEVERIDAD_DEFAULT;
                        }
                        aThis._v_Severidad = aParsedSeveridad;
                    }



                    if( aThis._v_Activa == null) {
                        var aActivaResolution = aParmResolutionsDict[ aThis.PARM_EDIVALIDACIONES_CREARVALIDACION_ACTIVA];
                        if( !aActivaResolution || !aActivaResolution._v_Success) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Activa", null));
                            return  false;
                        }

                        aThis._v_Activa = aActivaResolution._v_ParmValue ? true : false;
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

                    var aFormData = {
                        "theIdCriterio":  aThis._v_IdCriterio,
                        "theIdError":     aThis._v_IdError,
                        "theDescripcion": aThis._v_Descripcion,
                        "theSeveridad":   aThis._v_Severidad,
                        "theActiva":      aThis._v_Activa
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

                    var aCrearValidacion = theResponse.body;
                    if( !aCrearValidacion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesCrearValidacion) theResponse.body", null));
                        return false;
                    }


                    var aTipoCrearValidacion = aCrearValidacion[ "vTipo"];
                    if( !aTipoCrearValidacion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesCrearValidacion) theResponse.body['vTipo']", null));
                        return false;
                    }


                    if( !( aTipoCrearValidacion == this.TIPO_VALIDACIONDATOS)) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesCrearValidacion) ( theResponse.body['vTipo'] == " + this.TIPO_VALIDACIONDATOS + ")", null));
                        return false;
                    }

                    var aSuccessCrearValidacion = aCrearValidacion[ "vSuccess"];
                    if( !aSuccessCrearValidacion) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!(EdivalidacionesCrearValidacion) theResponse.body.vSuccess", null));
                        return false;
                    }


                    var aValidacionDatos = theResponse.body;


                    if( this._v_IdCriterio) {
                        var aIdCriterio = aValidacionDatos[ "fase"];
                        if( !aIdCriterio) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.fase", null));
                            return false;
                        }

                        if( !( aIdCriterio == this._v_IdCriterio)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.fase == this._v_IdCriterio " + this._v_IdCriterio, null));
                            return false;
                        }
                    }


                    if( this._v_IdError) {
                        var aIdError = aValidacionDatos[ "iderror"];
                        if( !aIdError) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.iderror", null));
                            return false;
                        }

                        if( !( aIdError == this._v_IdError)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.iderror == this._v_IdError " + this._v_IdError, null));
                            return false;
                        }
                    }



                    if( this._v_Descripcion) {
                        var aDescripcion = aValidacionDatos[ "descripcion"];
                        if( !aDescripcion) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.descripcion", null));
                            return false;
                        }

                        if( !( aDescripcion == this._v_Descripcion)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.descripcion == this._v_Descripcion " + this._v_Descripcion, null));
                            return false;
                        }
                    }



                    if( this._v_Severidad) {
                        var aSeveridad = aValidacionDatos[ "severidad"];
                        if( !aSeveridad) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.severidad", null));
                            return false;
                        }

                        if( !( aSeveridad == this._v_Severidad)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.severidad == this._v_Severidad " + this._v_Severidad, null));
                            return false;
                        }
                    }



                    if( this._v_Activa) {
                        var aActiva = aValidacionDatos[ "activa"];
                        if( !aActiva) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.activa", null));
                            return false;
                        }

                        if( !( aActiva == this._v_Activa)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.activa == this._v_Activa " + this._v_Activa, null));
                            return false;
                        }
                    }

                    this._v_ValidacionDatos = aValidacionDatos;

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aValidacionDatos, "(EdivalidacionesCrearValidacion) theResponse.body.vValidaciones", null);


                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_EdivalidacionesCrearValidacion = function( theCallback) {

                var aMethodName = "pS_EdivalidacionesCrearValidacion";

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
            if( pS_EdivalidacionesCrearValidacion){}/* CQT */
            aPrototype.pS_EdivalidacionesCrearValidacion = pS_EdivalidacionesCrearValidacion;








            var pF_EdivalidacionesCrearValidacionSpringnut = function( theCallback) {
                var aMethodName = "pF_EdivalidacionesCrearValidacionSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_EdivalidacionesCrearValidacionSpringnut){}/* CQT */
            aPrototype.pF_EdivalidacionesCrearValidacionSpringnut = pF_EdivalidacionesCrearValidacionSpringnut;







            var fOwnTestMethodToRun = function() {
                return this.pSS_EdivalidacionesCrearValidacionSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_EdivalidacionesCrearValidacionSpringnut = function( theCallback) {
                var aMethodName = "pSS_EdivalidacionesCrearValidacionSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_EdivalidacionesCrearValidacion.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);
            };
            if( pSS_EdivalidacionesCrearValidacionSpringnut){}/* CQT */
            aPrototype.pSS_EdivalidacionesCrearValidacionSpringnut = pSS_EdivalidacionesCrearValidacionSpringnut;







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




        var EdivalidacionesCrearValidacionSpringnutTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session      = null;


            this._v_IdCriterio     = null;
            this._v_IdError        = null;
            this._v_Descripcion    = null;
            this._v_Severidad      = null;
            this._v_Activa         = null;

            this._v_ValidacionDatos = null;


            this._pInit_EdivalidacionesCrearValidacionSpringnut(
                theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        EdivalidacionesCrearValidacionSpringnutTest_Constructor.prototype = aEdivalidacionesCrearValidacionSpringnutTest_Prototype;





        var EdivalidacionesCrearValidacionSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aEdivalidacionesCrearValidacionSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_IdCriterio     = null;
            this._v_IdError        = null;
            this._v_Descripcion    = null;
            this._v_Severidad      = null;
            this._v_Activa         = null;

            this._v_ValidacionDatos = null;
        };
        EdivalidacionesCrearValidacionSpringnutTest_SuperPrototypeConstructor.prototype = aEdivalidacionesCrearValidacionSpringnutTest_Prototype;



        var aModule = {
            "EdivalidacionesCrearValidacionSpringnutTest_Prototype": aEdivalidacionesCrearValidacionSpringnutTest_Prototype,
            "EdivalidacionesCrearValidacionSpringnutTest_Constructor": EdivalidacionesCrearValidacionSpringnutTest_Constructor,
            "EdivalidacionesCrearValidacionSpringnutTest_SuperPrototypeConstructor": EdivalidacionesCrearValidacionSpringnutTest_SuperPrototypeConstructor
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


