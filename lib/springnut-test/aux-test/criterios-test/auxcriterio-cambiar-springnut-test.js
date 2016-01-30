'use strict';

/*
 auxcriterio-cambiar-springnut-test.js
 Creado 201409121109
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

        var ModuleName     = "auxcriterio-cambiar-springnut-test";
        var ModulePackages = "springnut-test/aux-test/criterios-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.PARM_SESSIONTEST = "sessiontest";
            theToInit.PARM_IDCRITERIO = "idcriterio";


            theToInit.PARMSPREFIX_CRITERIO_CAMBIAR = "auxcriterio_cambiar_springnut";

            theToInit.PARM_CRITERIO_CAMBIAR_URLPATH = theToInit.PARMSPREFIX_CRITERIO_CAMBIAR + ".URLpath";

            theToInit.PARM_CRITERIO_CAMBIAR_CRID        = theToInit.PARMSPREFIX_CRITERIO_CAMBIAR + ".crId";
            theToInit.PARM_CRITERIO_CAMBIAR_NOMBRE      = theToInit.PARMSPREFIX_CRITERIO_CAMBIAR + ".crNombre";
            theToInit.PARM_CRITERIO_CAMBIAR_DESCRIPCION = theToInit.PARMSPREFIX_CRITERIO_CAMBIAR + ".crDescripcion";


            theToInit.PARMS_CRITERIO_CAMBIAR = [
                theToInit.PARM_CRITERIO_CAMBIAR_URLPATH,
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_CRITERIO_CAMBIAR_NOMBRE,
                theToInit.PARM_CRITERIO_CAMBIAR_DESCRIPCION
            ];



            theToInit.URLPATH_DEFAULT = "/aux/criterios/auxCriterioCambiarAlgunosDatosJSON";

            theToInit.TIPO_CAMBIADOCRITERIO = "CambiadoCriterio";

            theToInit.IDCRITERIOREPLACEMENT = "${idcriterio}";

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










        var aAuxCriterioCambiarSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "AuxCriterioCambiarSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session  = null;

            aPrototype._v_crId = null;
            aPrototype._v_crNombre = null;
            aPrototype._v_crDescripcion = null;

            aPrototype._v_CambiadoCriterio = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_AuxCriterioCambiarSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_AuxCriterioCambiarSpringnut = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session  = theSession;

                this._v_crId = null;
                this._v_crNombre = null;
                this._v_crDescripcion = null;

                this._v_CambiadoCriterio = null;
                if( this._v_CambiadoCriterio){}/* CQT */

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_AuxCriterioCambiarSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_AuxCriterioCambiarSpringnut){}/* CQT */
            aPrototype._pInit_AuxCriterioCambiarSpringnut = _pInit_AuxCriterioCambiarSpringnut;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_AuxCriterioCambiarSpringnut( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_AuxCriterioCambiarSpringnut = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_AuxCriterioCambiarSpringnut){}/* CQT */
            aPrototype._pRelease_AuxCriterioCambiarSpringnut = _pRelease_AuxCriterioCambiarSpringnut;











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

                this.pCleanUpTest_AuxCriterioCambiarSpringnut( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_AuxCriterioCambiarSpringnut = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_AuxCriterioCambiarSpringnut){}/* CQT */
            aPrototype.pCleanUpTest_AuxCriterioCambiarSpringnut = pCleanUpTest_AuxCriterioCambiarSpringnut;














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
                        aThis.PARM_CRITERIO_CAMBIAR_URLPATH,
                        aThis.PARM_CRITERIO_CAMBIAR_CRID,
                        aThis.PARM_IDCRITERIO,
                        aThis.PARM_CRITERIO_CAMBIAR_NOMBRE,
                        aThis.PARM_CRITERIO_CAMBIAR_DESCRIPCION

                    ];

                    var aParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                    if( !aParmResolutionsDict) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                        return  false;
                    }



                    var aBaseURLResolution = aParmResolutionsDict[ theM_parms_general.PARM_HITPOINT_BASEURL];
                    if( !aBaseURLResolution || !aBaseURLResolution._v_Success || !aBaseURLResolution._v_ParmValue) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + theM_parms_general.PARM_HITPOINT_BASEURL + ")", null));
                        return  false;
                    }
                    aThis._v_BaseURL = aBaseURLResolution._v_ParmValue;



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_CRITERIO_CAMBIAR_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }




                    if( !aThis._v_crId) {
                        var aCrIdResolution = aParmResolutionsDict[ aThis.PARM_CRITERIO_CAMBIAR_CRID];
                        if( aCrIdResolution && aCrIdResolution._v_Success && aCrIdResolution._v_ParmValue) {
                            aThis._v_crId = aCrIdResolution._v_ParmValue;
                        }
                        else {
                            var aIdCriterioResolution = aParmResolutionsDict[ aThis.PARM_IDCRITERIO];
                            if( aIdCriterioResolution && aIdCriterioResolution._v_Success && aIdCriterioResolution._v_ParmValue) {
                                aThis._v_crId = aIdCriterioResolution._v_ParmValue;
                            }
                        }
                        if( !aThis._v_crId) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_crId && !aThis._v_Configuration.fParmResolutions( '" + this.PARM_CRITERIO_CAMBIAR_CRID + "')", null));
                            return  false;
                        }
                    }





                    if( !aThis._v_crNombre) {
                        var aCrNombreResolution = aParmResolutionsDict[ this.PARM_CRITERIO_CAMBIAR_NOMBRE];
                        if( aCrNombreResolution && aCrNombreResolution._v_Success && aCrNombreResolution._v_ParmValue && aCrNombreResolution._v_ParmValue.length) {
                            aThis._v_crNombre = aCrNombreResolution._v_ParmValue;
                        }
                    }



                    if( !aThis._v_crDescripcion) {
                        var aCrDescripcionResolution = aParmResolutionsDict[ this.PARM_CRITERIO_CAMBIAR_DESCRIPCION];
                        if( aCrDescripcionResolution && aCrDescripcionResolution._v_Success && aCrDescripcionResolution._v_ParmValue && aCrDescripcionResolution._v_ParmValue.length) {
                            aThis._v_crDescripcion = aCrDescripcionResolution._v_ParmValue;
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
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aURLpath", null));
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


                    if( !aThis._v_Configuration) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration", null));
                        return  false;
                    }


                    if( !aThis._v_crId) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_crId", null));
                        return  false;
                    }

                    var aFormData = {
                        "theIdCriterio": aThis._v_crId
                    };

                    if( aThis._v_crNombre) {
                        aFormData[ "theNombre_cambiar"] =  true;
                        aFormData[ "theNombre"] =  aThis._v_crNombre;
                    }

                    if( aThis._v_crDescripcion) {
                        aFormData[ "theDescripcion_cambiar"] =  true;
                        aFormData[ "theDescripcion"] =  aThis._v_crDescripcion;
                    }


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


                    aThis._v_BoletinObjeto = null;


                    if( !theResponse) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                        return false;
                    }

                    if( !theResponse.body) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse.body", null));
                        return false;
                    }


                    // {"vTipo":"BoletinINEObjeto","vSuccess":true,"vBoletinObjeto":

                    var aTipo = theResponse.body[ "vTipo"];
                    if( !aTipo || !( aTipo == this.TIPO_CAMBIADOCRITERIO)) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body['vTipo'] || !( theResponse.body['vTipo'] == '" +  this.TIPO_CAMBIADOCRITERIO + "')", null));
                        return false;
                    }


                    var aSuccess = theResponse.body[ "vSuccess"];
                    if( !aSuccess) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vSuccess", null));
                        return false;
                    }


                    var aCambiadoCriterio = theResponse.body;

                    var aCriterioDatosDespues = aCambiadoCriterio[ "vCriterioDespues"];
                    if( !aCriterioDatosDespues) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCriterioDespues", null));
                        return false;
                    }

                    if( aThis._v_crId) {
                        var aCrId = aCriterioDatosDespues[ "crId"];
                        if( !aCrId) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCriterioDespues.crId", null));
                            return false;
                        }

                        if( !( aCrId == aThis._v_crId)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCriterioDespues.crId == aThis._v_crId " + aThis._v_crId, null));
                            return false;
                        }
                    }



                    if( aThis._v_crNombre) {
                        var aCrNombre = aCriterioDatosDespues[ "crNombre"];
                        if( !aCrNombre) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCriterioDespues.crNombre", null));
                            return false;
                        }

                        var aNombre = aThis._v_crNombre;
                        if( aNombre.indexOf( aThis.IDCRITERIOREPLACEMENT) >= 0) {
                            aNombre = aNombre.replace(  aThis.IDCRITERIOREPLACEMENT, aThis._v_crId);
                        }

                        if( !( aCrNombre == aNombre)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCriterioDespues.crNombre == aThis._v_crNombre " + aThis._v_crNombre, null));
                            return false;
                        }
                    }




                    if( aThis._v_crDescripcion) {
                        var aCrDescripcion = aCriterioDatosDespues[ "crDescripcion"];
                        if( !aCrDescripcion) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCriterioDespues.crDescripcion", null));
                            return false;
                        }


                        var aDescripcion = aThis._v_crDescripcion;
                        if( aDescripcion.indexOf( aThis.IDCRITERIOREPLACEMENT) >= 0) {
                            aDescripcion = aDescripcion.replace(  aThis.IDCRITERIOREPLACEMENT, aThis._v_crId);
                        }
                        if( !( aCrDescripcion == aDescripcion)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vCriterioDespues.crDescripcion == aThis._v_crDescripcion " + aThis._v_crDescripcion, null));
                            return false;
                        }
                    }



                    aThis._v_CambiadoCriterio =  aCambiadoCriterio;

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aCambiadoCriterio, " (CriterioDatos) theResponse.body", null);

                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_AuxCriterioCambiar = function( theCallback) {

                var aMethodName = "pS_AuxCriterioCambiar";

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
            if( pS_AuxCriterioCambiar){}/* CQT */
            aPrototype.pS_AuxCriterioCambiar = pS_AuxCriterioCambiar;








            var pF_AuxCriterioCambiarSpringnut = function( theCallback) {
                var aMethodName = "pF_AuxCriterioCambiarSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_AuxCriterioCambiarSpringnut){}/* CQT */
            aPrototype.pF_AuxCriterioCambiarSpringnut = pF_AuxCriterioCambiarSpringnut;






            var pS_RunRequireds = function( theCallback) {

                aPrototype._v_SuperPrototype.pS_RunRequireds.bind( this)( theCallback);
            };
            if( pS_RunRequireds){}/* CQT */
            aPrototype.pS_RunRequireds = pS_RunRequireds;




            var fOwnTestMethodToRun = function() {
                return this.pSS_AuxCriterioCambiarSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;








            var pSS_AuxCriterioCambiarSpringnut = function( theCallback) {
                var aMethodName = "pSS_AuxCriterioCambiarSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_RunRequireds.bind( this),
                    this.pS_AuxCriterioCambiar.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_AuxCriterioCambiarSpringnut){}/* CQT */
            aPrototype.pSS_AuxCriterioCambiarSpringnut = pSS_AuxCriterioCambiarSpringnut;







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




        var AuxCriterioCambiarSpringnutTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_crId = null;
            this._v_crNombre = null;
            this._v_crDescripcion = null;

            this._v_CambiadoCriterio = null;

            this._pInit_AuxCriterioCambiarSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        AuxCriterioCambiarSpringnutTest_Constructor.prototype = aAuxCriterioCambiarSpringnutTest_Prototype;





        var AuxCriterioCambiarSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aAuxCriterioCambiarSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_crId = null;
            this._v_crNombre = null;
            this._v_crDescripcion = null;

            this._v_CambiadoCriterio = null;
        };
        AuxCriterioCambiarSpringnutTest_SuperPrototypeConstructor.prototype = aAuxCriterioCambiarSpringnutTest_Prototype;



        var aModule = {
            "AuxCriterioCambiarSpringnutTest_Prototype": aAuxCriterioCambiarSpringnutTest_Prototype,
            "AuxCriterioCambiarSpringnutTest_Constructor": AuxCriterioCambiarSpringnutTest_Constructor,
            "AuxCriterioCambiarSpringnutTest_SuperPrototypeConstructor": AuxCriterioCambiarSpringnutTest_SuperPrototypeConstructor
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


