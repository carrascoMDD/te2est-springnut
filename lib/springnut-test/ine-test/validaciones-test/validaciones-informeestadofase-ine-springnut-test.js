'use strict';

/*
 validaciones-informeestadofase-ine-springnut-test.js
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

        var ModuleName     = "validaciones-informeestadofase-ine-springnut-test";
        var ModulePackages = "springnut-test/ine-test/validaciones";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.INFORMEESTADOFASELAZY_DEFAULT = false;



            theToInit.PARM_SESSIONTEST    = "sessiontest";
            theToInit.PARM_IDFASE         = "idfase";

            theToInit.PARMSPREFIX_INFORMEESTADOFASE = "informeestadofase_ine_springnut";

            theToInit.PARM_INFORMEESTADOFASE_URLPATH = theToInit.PARMSPREFIX_INFORMEESTADOFASE + ".URLpath";
            theToInit.PARM_INFORMEESTADOFASE_LAZY    = theToInit.PARMSPREFIX_INFORMEESTADOFASE + ".lazy";


            theToInit.PARMS_INFORMEESTADOFASE = [
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_IDFASE,
                theToInit.PARM_INFORMEESTADOFASE_URLPATH,
                theToInit.PARM_INFORMEESTADOFASE_LAZY
            ];


            theToInit.URLPATH_DEFAULT = "/ine/validaciones/estadoValidacionAvisosYerroresINEjson/ine/${_v_IdFase}";


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










        var aInformeEstadoFaseIneSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "InformeEstadoFaseIneSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_Session      = null;

            aPrototype._v_IdFase       = null;


            aPrototype._v_InformeEstadoFaseLazy = null;
            aPrototype._v_InformeEstadoFaseRetrieved = null;


            aPrototype._v_InformeEstadoValidaciones   = null;







            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession,
                                   theIdFase) {

                this._pInit_InformeEstadoFaseIneSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theSession,
                    theIdFase);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_InformeEstadoFaseIneSpringnut = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession,
                                                               theIdFase) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session      = theSession;

                this._v_IdFase       = theIdFase;

                this._v_InformeEstadoFaseLazy = null;
                this._v_InformeEstadoFaseRetrieved = false;

                this._v_InformeEstadoValidaciones   = null;
                if( this._v_InformeEstadoValidaciones){}/* CQT */

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_InformeEstadoFaseIneSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_InformeEstadoFaseIneSpringnut){}/* CQT */
            aPrototype._pInit_InformeEstadoFaseIneSpringnut = _pInit_InformeEstadoFaseIneSpringnut;












            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_InformeEstadoFaseIneSpringnut( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_InformeEstadoFaseIneSpringnut = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_InformeEstadoFaseIneSpringnut){}/* CQT */
            aPrototype._pRelease_InformeEstadoFaseIneSpringnut = _pRelease_InformeEstadoFaseIneSpringnut;











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

                this.pCleanUpTest_InformeEstadoFaseIneSpringnut( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_InformeEstadoFaseIneSpringnut = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_InformeEstadoFaseIneSpringnut){}/* CQT */
            aPrototype.pCleanUpTest_InformeEstadoFaseIneSpringnut = pCleanUpTest_InformeEstadoFaseIneSpringnut;









            var pS_CheckLazy = function( theCallback) {

                var aMethodName = "pS_CheckLazy";

                if( !( this._v_InformeEstadoFaseLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_InformeEstadoFaseLazy = this.fResolvedParmValue(  this.PARM_INFORMEESTADOFASE_LAZY);
                if( this._v_InformeEstadoFaseLazy == null) {
                    this._v_InformeEstadoFaseLazy = this.INFORMEESTADOFASELAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;




            









            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */



                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {


                    if( ( aThis._v_InformeEstadoFaseLazy == true) && aThis._v_InformeEstadoFaseRetrieved) {
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
                        aThis.PARM_INFORMEESTADOFASE_URLPATH,
                        aThis.PARM_IDFASE
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



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_INFORMEESTADOFASE_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }



                    if( !aThis._v_IdFase) {

                        var aIdFaseResolution = aParmResolutionsDict[ this.PARM_IDFASE];
                        if( aIdFaseResolution && aIdFaseResolution._v_Success && aIdFaseResolution._v_ParmValue) {
                            aThis._v_IdFase = aIdFaseResolution._v_ParmValue;
                        }

                        if( !aThis._v_IdFase) {
                            theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdFase", null));
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
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aURLpath", null));
                        return null;
                    }

                    if( !aThis._v_IdFase) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aThis._v_IdFase", null));
                        return null;
                    }

                    var aURLpathWithParameters = aURLpath.replace( "${_v_IdFase}", aThis._v_IdFase);

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

                    var aRespuestaInformeEstado = theResponse.body;
                    if( !aRespuestaInformeEstado) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse.body", null));
                        return false;
                    }

                    if( !( aRespuestaInformeEstado[ "vTipo"] == "InformeEstadoValidaciones")) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_DIDNOTWORK, null, "!(theResponse.body['vTipo'] == 'InformeEstadoValidaciones')", null));
                        return false;
                    }


                    aThis._v_InformeEstadoValidaciones = aRespuestaInformeEstado;
                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aRespuestaInformeEstado, "(InformeEstadoValidaciones) theResponse.body", null);

                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_InformeEstadoFase = function( theCallback) {

                var aMethodName = "pS_InformeEstadoFase";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


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
            if( pS_InformeEstadoFase){}/* CQT */
            aPrototype.pS_InformeEstadoFase = pS_InformeEstadoFase;






            var pF_InformeEstadoFaseIneSpringnut = function( theCallback) {
                var aMethodName = "pF_InformeEstadoFaseIneSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);

                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_InformeEstadoFaseIneSpringnut){}/* CQT */
            aPrototype.pF_InformeEstadoFaseIneSpringnut = pF_InformeEstadoFaseIneSpringnut;







            var fOwnTestMethodToRun = function() {
                return this.pSS_InformeEstadoFaseIneSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;









            var pSS_InformeEstadoFaseIneSpringnut = function( theCallback) {
                var aMethodName = "pSS_InformeEstadoFaseIneSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_InformeEstadoFase.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_InformeEstadoFaseIneSpringnut){}/* CQT */
            aPrototype.pSS_InformeEstadoFaseIneSpringnut = pSS_InformeEstadoFaseIneSpringnut;







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




        var InformeEstadoFaseIneSpringnutTest_Constructor = function(
            theTitle, theConfiguration, theIdentifier, theRecorder,
            theSession, theIdFichero, theFicherosList, theIdFase) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_IdFase     = null;

            this._v_InformeEstadoFaseLazy = null;
            this._v_InformeEstadoFaseRetrieved = false;

            this._v_InformeEstadoValidaciones   = null;

            this._pInit_InformeEstadoFaseIneSpringnut(
                theTitle, theConfiguration, theIdentifier, theRecorder,
                theSession, theIdFichero, theFicherosList, theIdFase);
        };
        InformeEstadoFaseIneSpringnutTest_Constructor.prototype = aInformeEstadoFaseIneSpringnutTest_Prototype;





        var InformeEstadoFaseIneSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aInformeEstadoFaseIneSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_IdFase     = null;

            this._v_InformeEstadoFaseLazy = null;
            this._v_InformeEstadoFaseRetrieved = false;

            this._v_InformeEstadoValidaciones   = null;
        };
        InformeEstadoFaseIneSpringnutTest_SuperPrototypeConstructor.prototype = aInformeEstadoFaseIneSpringnutTest_Prototype;



        var aModule = {
            "InformeEstadoFaseIneSpringnutTest_Prototype": aInformeEstadoFaseIneSpringnutTest_Prototype,
            "InformeEstadoFaseIneSpringnutTest_Constructor": InformeEstadoFaseIneSpringnutTest_Constructor,
            "InformeEstadoFaseIneSpringnutTest_SuperPrototypeConstructor": InformeEstadoFaseIneSpringnutTest_SuperPrototypeConstructor
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

