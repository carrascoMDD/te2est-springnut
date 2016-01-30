'use strict';

/*
 boletinascii-ine-blanco-objeto-springnut-test.js
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
                                 theM_parms_general) {

        var ModuleName     = "boletinascii-ine-blanco-objeto-springnut-test";
        var ModulePackages = "springnut-test/aux-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.PARM_SESSIONTEST = "sessiontest";
            theToInit.PARM_NBOL ="nbol";


            theToInit.BOLETINASCII_INE_BLANCO_OBJETOLAZY_DEFAULT = false;


            theToInit.PARMSPREFIX_BOLETINASCII_INE_BLANCO_OBJETO = "boletinascii_ine_blanco_objeto_springnut";


            theToInit.PARM_BOLETINASCII_INE_BLANCO_OBJETO_URLPATH = theToInit.PARMSPREFIX_BOLETINASCII_INE_BLANCO_OBJETO + ".URLpath";
            theToInit.PARM_BOLETINASCII_INE_BLANCO_OBJETO_LAZY    = theToInit.PARMSPREFIX_BOLETINASCII_INE_BLANCO_OBJETO + ".lazy";

            theToInit.PARM_BOLETINASCII_INE_BLANCO_OBJETO_NBOL    = theToInit.PARMSPREFIX_BOLETINASCII_INE_BLANCO_OBJETO + ".nbol";



            theToInit.PARMS_BOLETINASCII_INE_BLANCO_OBJETO = [
                theToInit.PARM_BOLETINASCII_INE_BLANCO_OBJETO_URLPATH,
                theToInit.PARM_BOLETINASCII_INE_BLANCO_OBJETO_LAZY,
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_BOLETINASCII_INE_BLANCO_OBJETO_NBOL
            ];



            theToInit.URLPATH_DEFAULT = "/aux/ascii/boletinINEBlancoObjetoJSON?theNbol=${_v_NBOL}";

            theToInit.TIPO_BOLETININEOBJETO = "BoletinINEObjeto";


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










        var aBoletinAsciiIneBlancoObjetoIneSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "BoletinAsciiIneBlancoObjetoIneSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_BoletinAsciiIneBlancoObjetoLazy = null;

            aPrototype._v_BoletinAsciiIneBlancoObjetoRetrieved = null;

            aPrototype._v_Session  = null;

            aPrototype._v_NBOL = null;

            aPrototype._v_BoletinObjeto = null;





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_BoletinAsciiIneBlancoObjetoIneSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_BoletinAsciiIneBlancoObjetoIneSpringnut = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session            = theSession;

                this._v_BoletinAsciiIneBlancoObjetoLazy = null;

                this._v_BoletinAsciiIneBlancoObjetoRetrieved = false;

                this._v_NBOL = null;

                this._v_BoletinObjeto = null;
                if( this._v_BoletinObjeto){}/* CQT */

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_BoletinAsciiIneBlancoObjetoIneSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_BoletinAsciiIneBlancoObjetoIneSpringnut){}/* CQT */
            aPrototype._pInit_BoletinAsciiIneBlancoObjetoIneSpringnut = _pInit_BoletinAsciiIneBlancoObjetoIneSpringnut;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_BoletinAsciiIneBlancoObjetoIneSpringnut( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_BoletinAsciiIneBlancoObjetoIneSpringnut = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_BoletinAsciiIneBlancoObjetoIneSpringnut){}/* CQT */
            aPrototype._pRelease_BoletinAsciiIneBlancoObjetoIneSpringnut = _pRelease_BoletinAsciiIneBlancoObjetoIneSpringnut;











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

                this.pCleanUpTest_BoletinAsciiIneBlancoObjetoIneSpringnut( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_BoletinAsciiIneBlancoObjetoIneSpringnut = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_BoletinAsciiIneBlancoObjetoIneSpringnut){}/* CQT */
            aPrototype.pCleanUpTest_BoletinAsciiIneBlancoObjetoIneSpringnut = pCleanUpTest_BoletinAsciiIneBlancoObjetoIneSpringnut;











            var pS_CheckLazy = function( theCallback) {

                var aMethodName = "pS_CheckLazy";

                if( !( this._v_BoletinAsciiIneBlancoObjetoLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_BoletinAsciiIneBlancoObjetoLazy = this.fResolvedParmValue(  this.PARM_BOLETINASCII_INE_BLANCO_OBJETO_LAZY);
                if( this._v_BoletinAsciiIneBlancoObjetoLazy == null) {
                    this._v_BoletinAsciiIneBlancoObjetoLazy = this.BOLETINASCII_INE_BLANCO_OBJETOLAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;












            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */


                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {


                    if( ( aThis._v_BoletinAsciiIneBlancoObjetoLazy == true) && aThis._v_BoletinAsciiIneBlancoObjetoRetrieved) {
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
                        aThis.PARM_BOLETINASCII_INE_BLANCO_OBJETO_URLPATH,
                        aThis.PARM_BOLETINASCII_INE_BLANCO_OBJETO_NBOL

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



                    var aURLpathResolution = aParmResolutionsDict[ aThis.PARM_BOLETINASCII_INE_BLANCO_OBJETO_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
                    }




                    if( !aThis._v_NBOL) {

                        var aNBOLResolution = aParmResolutionsDict[ this.PARM_BOLETINASCII_INE_BLANCO_OBJETO_NBOL];
                        if( aNBOLResolution && aNBOLResolution._v_Success && aNBOLResolution._v_ParmValue) {
                            aThis._v_NBOL = aNBOLResolution._v_ParmValue;
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

                    var aURLpathWithParameters = aURLpath.replace( "${_v_NBOL}", aThis._v_NBOL);

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


                    if( !aThis._v_Configuration) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration", null));
                        return  false;
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


                    aThis._v_BoletinObjeto = null;


                    if( !theResponse) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                        return false;
                    }

                    if( !theResponse.body) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse.body", null));
                        return false;
                    }

                    aThis._v_BoletinAsciiIneBlancoObjetoRetrieved = true;

                    // {"vTipo":"BoletinINEObjeto","vSuccess":true,"vBoletinObjeto":

                    var aTipo = theResponse.body[ "vTipo"];
                    if( !aTipo || !( aTipo == this.TIPO_BOLETININEOBJETO)) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body['vTipo'] || !( theResponse.body['vTipo'] == '" +  this.TIPO_BOLETININEOBJETO + "')", null));
                        return false;
                    }


                    var aSuccess = theResponse.body[ "vSuccess"];
                    if( !aSuccess) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vSuccess", null));
                        return false;
                    }


                    var aBoletinObjeto = theResponse.body.vBoletinObjeto;
                    if( !aBoletinObjeto) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vBoletinObjeto", null));
                        return false;
                    }


                    if( this._v_NBOL) {
                        var aNBOL = aBoletinObjeto.nbol;
                        if( !aNBOL) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vBoletinObjeto.nbol", null));
                            return false;
                        }

                        if( !( aNBOL == this._v_NBOL)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! theResponse.body.vBoletinObjeto.nbol == this._v_NBOL " + this._v_NBOL, null));
                            return false;
                        }
                    }



                    aThis._v_BoletinObjeto =  aBoletinObjeto;

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aBoletinObjeto, " (BoletinINEObjeto) theResponse.body.vBoletinObjeto", null);

                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_BoletinAsciiIneBlancoObjeto = function( theCallback) {

                var aMethodName = "pS_BoletinAsciiIneBlancoObjeto";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( ( this._v_BoletinAsciiIneBlancoObjetoLazy == true) && !( this._v_Ficheros == null)) {
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
            if( pS_BoletinAsciiIneBlancoObjeto){}/* CQT */
            aPrototype.pS_BoletinAsciiIneBlancoObjeto = pS_BoletinAsciiIneBlancoObjeto;








            var pF_BoletinAsciiIneBlancoObjetoIneSpringnut = function( theCallback) {
                var aMethodName = "pF_BoletinAsciiIneBlancoObjetoIneSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_BoletinAsciiIneBlancoObjetoIneSpringnut){}/* CQT */
            aPrototype.pF_BoletinAsciiIneBlancoObjetoIneSpringnut = pF_BoletinAsciiIneBlancoObjetoIneSpringnut;






            var pS_RunRequireds = function( theCallback) {

                aPrototype._v_SuperPrototype.pS_RunRequireds.bind( this)( theCallback);
            };
            if( pS_RunRequireds){}/* CQT */
            aPrototype.pS_RunRequireds = pS_RunRequireds;




            var fOwnTestMethodToRun = function() {
                return this.pSS_BoletinAsciiIneBlancoObjetoIneSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;








            var pSS_BoletinAsciiIneBlancoObjetoIneSpringnut = function( theCallback) {
                var aMethodName = "pSS_BoletinAsciiIneBlancoObjetoIneSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_BoletinAsciiIneBlancoObjeto.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_BoletinAsciiIneBlancoObjetoIneSpringnut){}/* CQT */
            aPrototype.pSS_BoletinAsciiIneBlancoObjetoIneSpringnut = pSS_BoletinAsciiIneBlancoObjetoIneSpringnut;







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
                aResultJSON.lazy = this._v_BoletinAsciiIneBlancoObjetoLazy ? true : false;

                aResultJSON.session           = aSessionResultJSON;

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();




        var BoletinAsciiIneBlancoObjetoIneSpringnutTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_BoletinAsciiIneBlancoObjetoLazy = null;

            this._v_BoletinAsciiIneBlancoObjetoRetrieved = null;

            this._v_NBOL = null;

            this._v_BoletinObjeto = null;

            this._pInit_BoletinAsciiIneBlancoObjetoIneSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        BoletinAsciiIneBlancoObjetoIneSpringnutTest_Constructor.prototype = aBoletinAsciiIneBlancoObjetoIneSpringnutTest_Prototype;





        var BoletinAsciiIneBlancoObjetoIneSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aBoletinAsciiIneBlancoObjetoIneSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_BoletinAsciiIneBlancoObjetoLazy = null;

            this._v_BoletinAsciiIneBlancoObjetoRetrieved = null;

            this._v_NBOL = null;

            this._v_BoletinObjeto = null;
        };
        BoletinAsciiIneBlancoObjetoIneSpringnutTest_SuperPrototypeConstructor.prototype = aBoletinAsciiIneBlancoObjetoIneSpringnutTest_Prototype;



        var aModule = {
            "BoletinAsciiIneBlancoObjetoIneSpringnutTest_Prototype": aBoletinAsciiIneBlancoObjetoIneSpringnutTest_Prototype,
            "BoletinAsciiIneBlancoObjetoIneSpringnutTest_Constructor": BoletinAsciiIneBlancoObjetoIneSpringnutTest_Constructor,
            "BoletinAsciiIneBlancoObjetoIneSpringnutTest_SuperPrototypeConstructor": BoletinAsciiIneBlancoObjetoIneSpringnutTest_SuperPrototypeConstructor
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


