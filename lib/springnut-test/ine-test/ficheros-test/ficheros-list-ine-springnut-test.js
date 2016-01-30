'use strict';

/*
 ficheros-list-ine-springnut-test.js
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

        var ModuleName     = "ficheros-list-ine-springnut-test";
        var ModulePackages = "springnut-test/ine-test/ficheros-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.PARM_SESSIONTEST = "sessiontest";


            theToInit.FICHEROSLISTLAZY_DEFAULT = false;


            theToInit.PARMSPREFIX_FICHEROSLIST = "ficheroslist_ine_springnut";


            theToInit.PARM_FICHEROSLIST_URLPATH = theToInit.PARMSPREFIX_FICHEROSLIST + ".URLpath";
            theToInit.PARM_FICHEROSLIST_LAZY = theToInit.PARMSPREFIX_FICHEROSLIST + ".lazy";

            theToInit.PARM_FICHEROSLIST_MINRETRIEVED = theToInit.PARMSPREFIX_FICHEROSLIST + ".minretrieved";
            theToInit.PARM_FICHEROSLIST_MAXRETRIEVED = theToInit.PARMSPREFIX_FICHEROSLIST + ".maxretrieved";

            theToInit.PARM_FICHEROSLIST_PAGINADODESDE = theToInit.PARMSPREFIX_FICHEROSLIST + ".paginado_desde";
            theToInit.PARM_FICHEROSLIST_PAGINADOCUANTOS = theToInit.PARMSPREFIX_FICHEROSLIST + ".paginado_cuantos";

            theToInit.PARM_FICHEROSLIST_FILTER_ANOSEARCH = theToInit.PARMSPREFIX_FICHEROSLIST + ".filter_ano_search";
            theToInit.PARM_FICHEROSLIST_FILTER_ANOREGEX  = theToInit.PARMSPREFIX_FICHEROSLIST + ".filter_ano_regex";
            theToInit.PARM_FICHEROSLIST_FILTER_MESSEARCH = theToInit.PARMSPREFIX_FICHEROSLIST + ".filter_mes_search";
            theToInit.PARM_FICHEROSLIST_FILTER_MESREGEX  = theToInit.PARMSPREFIX_FICHEROSLIST + ".filter_mes_regex";
            theToInit.PARM_FICHEROSLIST_FILTER_PROVINCIASEARCH = theToInit.PARMSPREFIX_FICHEROSLIST + ".filter_provincia_search";
            theToInit.PARM_FICHEROSLIST_FILTER_PROVINCIAREGEX  = theToInit.PARMSPREFIX_FICHEROSLIST + ".filter_provincia_regex";

            theToInit.PARMS_FICHEROSLIST_FILTER = [
                theToInit.PARM_FICHEROSLIST_FILTER_ANOSEARCH,
                theToInit.PARM_FICHEROSLIST_FILTER_ANOREGEX,
                theToInit.PARM_FICHEROSLIST_FILTER_MESSEARCH,
                theToInit.PARM_FICHEROSLIST_FILTER_MESREGEX,
                theToInit.PARM_FICHEROSLIST_FILTER_PROVINCIASEARCH,
                theToInit.PARM_FICHEROSLIST_FILTER_PROVINCIAREGEX
            ];



            theToInit.PARMS_FICHEROSLIST = [
                theToInit.PARM_FICHEROSLIST_URLPATH,
                theToInit.PARM_FICHEROSLIST_LAZY,
                theToInit.PARM_SESSIONTEST,
                theToInit.PARM_FICHEROSLIST_MINRETRIEVED,
                theToInit.PARM_FICHEROSLIST_MAXRETRIEVED,
                theToInit.PARM_FICHEROSLIST_PAGINADODESDE,
                theToInit.PARM_FICHEROSLIST_PAGINADOCUANTOS
            ];

            Array.prototype.push.apply( theToInit.PARMS_FICHEROSLIST, theToInit.PARMS_FICHEROSLIST_FILTER);



            theToInit.FICHEROSLIST_CAMPO_ANO       = "ano";
            theToInit.FICHEROSLIST_CAMPO_MES       = "mes";
            theToInit.FICHEROSLIST_CAMPO_PROVINCIA = "provincia";

            theToInit.FICHEROSLIST_CAMPOS = [
                theToInit.FICHEROSLIST_CAMPO_ANO,
                theToInit.FICHEROSLIST_CAMPO_MES,
                theToInit.FICHEROSLIST_CAMPO_PROVINCIA
            ];



            theToInit.URLPATH_DEFAULT = "/selectDialog/select_ficheron_errores_y_avisos";

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










        var aFicherosListIneSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_runsubs_test.RunSubsTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);



            aPrototype._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            aPrototype._v_Type = "FicherosListIneSpringnutTest";

            aPrototype._v_BaseURL  = null;
            aPrototype._v_URLpath  = null;

            aPrototype._v_FicherosListLazy = null;

            aPrototype._v_FicherosListRetrieved = null;

            aPrototype._v_Session  = null;

            aPrototype._v_Ficheros = null;



            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                this._pInit_FicherosListIneSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_FicherosListIneSpringnut = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_RunSubs.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_BaseURL  = null;
                this._v_URLpath  = null;

                this._v_Session            = theSession;

                this._v_FicherosListLazy = null;

                this._v_FicherosListRetrieved = false;

                this._v_Ficheros = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_FicherosListIneSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_FicherosListIneSpringnut){}/* CQT */
            aPrototype._pInit_FicherosListIneSpringnut = _pInit_FicherosListIneSpringnut;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_FicherosListIneSpringnut( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;





            var _pRelease_FicherosListIneSpringnut = function( theReleaseParms, theReleaseDone) {

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_RunSubs.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_FicherosListIneSpringnut){}/* CQT */
            aPrototype._pRelease_FicherosListIneSpringnut = _pRelease_FicherosListIneSpringnut;











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

                this.pCleanUpTest_FicherosListIneSpringnut( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_FicherosListIneSpringnut = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_RunSubs.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_FicherosListIneSpringnut){}/* CQT */
            aPrototype.pCleanUpTest_FicherosListIneSpringnut = pCleanUpTest_FicherosListIneSpringnut;








            var pS_CheckLazy = function( theCallback) {

                var aMethodName = "pS_CheckLazy";

                if( !( this._v_FicherosListLazy == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

                this._v_FicherosListLazy = this.fResolvedParmValue(  this.PARM_FICHEROSLIST_LAZY);
                if( this._v_FicherosListLazy == null) {
                    this._v_FicherosListLazy = this.FICHEROSLISTLAZY_DEFAULT;
                }

                theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, null, null, null));
            };
            if( pS_CheckLazy){}/* CQT */
            aPrototype.pS_CheckLazy = pS_CheckLazy;












            var fLazyInitializer = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */


                var aThis = this;

                var aLazyInitializerFunction = (function( theOtherCallback) {


                    if( ( aThis._v_FicherosListLazy == true) && aThis._v_FicherosListRetrieved) {
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



                    var otherParmsToResolve = [
                        theM_parms_general.PARM_HITPOINT_BASEURL,
                        aThis.PARM_FICHEROSLIST_URLPATH

                    ];

                    var otherParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( otherParmsToResolve);

                    if( !otherParmResolutionsDict) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + otherParmsToResolve.join( ",") + "))", null));
                        return  false;
                    }



                    var aBaseURLResolution = otherParmResolutionsDict[ theM_parms_general.PARM_HITPOINT_BASEURL];
                    if( !aBaseURLResolution || !aBaseURLResolution._v_Success || !aBaseURLResolution._v_ParmValue) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( 'hitpoint.baseURL')", null));
                        return  false;
                    }
                    aThis._v_BaseURL = aBaseURLResolution._v_ParmValue;



                    var aURLpathResolution = otherParmResolutionsDict[ aThis.PARM_FICHEROSLIST_URLPATH];
                    if( aURLpathResolution && aURLpathResolution._v_Success && aURLpathResolution._v_ParmValue) {
                        aThis._v_URLpath = aURLpathResolution._v_ParmValue;
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




                    var aFormData = {
                        sEcho:1,
                        iColumns:4,
                        sColumns: "",
                        iDisplayStart:0,
                        iDisplayLength:10000,
                        mDataProp_0: "ano",
                        mDataProp_1: "mes",
                        mDataProp_2: "provincia",
                        mDataProp_3: "nombrefichero",
                        sSearch: "",
                        bRegex:false,
                        sSearch_0: "",
                        bRegex_0:false,
                        bSearchable_0:true,
                        sSearch_1: "",
                        bRegex_1:false,
                        bSearchable_1:true,
                        sSearch_2: "",
                        bRegex_2:false,
                        bSearchable_2:true,
                        sSearch_3:"",
                        bRegex_3:false,
                        bSearchable_3:true,
                        iSortCol_0:0,
                        sSortDir_0: "asc",
                        iSortingCols:1,
                        bSortable_0:true,
                        bSortable_1:true,
                        bSortable_2:true,
                        bSortable_3:true,
                        sRangeSeparator: "~"
                    };



                    if( !aThis._v_Configuration) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration", null));
                        return  false;
                    }



                    var someParmsToResolve = [
                        aThis.PARM_FICHEROSLIST_PAGINADODESDE,
                        aThis.PARM_FICHEROSLIST_PAGINADOCUANTOS
                    ];

                    Array.prototype.push.apply( someParmsToResolve, aThis.PARMS_FICHEROSLIST_FILTER);


                    var aParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                    if( !aParmResolutionsDict) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + someParmsToResolve.join( ",") + "))", null));
                        return  false;
                    }



                    var aPaginadoDesdeResolution = aParmResolutionsDict[ aThis.PARM_FICHEROSLIST_PAGINADODESDE];
                    if( aPaginadoDesdeResolution && aPaginadoDesdeResolution._v_Success && aPaginadoDesdeResolution._v_ParmValue) {
                        aFormData.iDisplayStart = aPaginadoDesdeResolution._v_ParmValue;
                    }


                    var aPaginadoCuantosResolution = aParmResolutionsDict[ aThis.PARM_FICHEROSLIST_PAGINADOCUANTOS];
                    if( aPaginadoCuantosResolution && aPaginadoCuantosResolution._v_Success && aPaginadoCuantosResolution._v_ParmValue) {
                        aFormData.iDisplayLength = aPaginadoCuantosResolution._v_ParmValue;
                    }


                    var aFilterAnoSearchResolution = aParmResolutionsDict[ aThis.PARM_FICHEROSLIST_FILTER_ANOSEARCH];
                    if( aFilterAnoSearchResolution && aFilterAnoSearchResolution._v_Success && aFilterAnoSearchResolution._v_ParmValue) {
                        aFormData.sSearch_0 = aFilterAnoSearchResolution._v_ParmValue;
                    }

                    var aFilterAnoRegexResolution = aParmResolutionsDict[ aThis.PARM_FICHEROSLIST_FILTER_ANOREGEX];
                    if( aFilterAnoRegexResolution && aFilterAnoRegexResolution._v_Success && aFilterAnoRegexResolution._v_ParmValue) {
                        aFormData.bRegex_0 = aFilterAnoRegexResolution._v_ParmValue;
                    }

                    
                    var aFilterMesSearchResolution = aParmResolutionsDict[ aThis.PARM_FICHEROSLIST_FILTER_MESSEARCH];
                    if( aFilterMesSearchResolution && aFilterMesSearchResolution._v_Success && aFilterMesSearchResolution._v_ParmValue) {
                        aFormData.sSearch_1 = aFilterMesSearchResolution._v_ParmValue;
                    }

                    var aFilterMesRegexResolution = aParmResolutionsDict[ aThis.PARM_FICHEROSLIST_FILTER_MESREGEX];
                    if( aFilterMesRegexResolution && aFilterMesRegexResolution._v_Success && aFilterMesRegexResolution._v_ParmValue) {
                        aFormData.bRegex_1 = aFilterMesRegexResolution._v_ParmValue;
                    }


                    var aFilterProvinciaSearchResolution = aParmResolutionsDict[ aThis.PARM_FICHEROSLIST_FILTER_PROVINCIASEARCH];
                    if( aFilterProvinciaSearchResolution && aFilterProvinciaSearchResolution._v_Success && aFilterProvinciaSearchResolution._v_ParmValue) {
                        aFormData.sSearch_2 = aFilterProvinciaSearchResolution._v_ParmValue;
                    }

                    var aFilterProvinciaRegexResolution = aParmResolutionsDict[ aThis.PARM_FICHEROSLIST_FILTER_PROVINCIAREGEX];
                    if( aFilterProvinciaRegexResolution && aFilterProvinciaRegexResolution._v_Success && aFilterProvinciaRegexResolution._v_ParmValue) {
                        aFormData.bRegex_2 = aFilterProvinciaRegexResolution._v_ParmValue;
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


                    if( !theResponse) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse", null));
                        return false;
                    }

                    if( !theResponse.body) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "!theResponse.body", null));
                        return false;
                    }

                    aThis._v_FicherosListRetrieved = true;

                    var someFicheros = theResponse.body.aaData;
                    if( !someFicheros || !someFicheros.length) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "! (Ficheros) theResponse.body.aaData", null));
                        return false;
                    }

                    aThis._v_Ficheros = someFicheros.slice();

                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, null, " (Ficheros) theResponse.body.aaData.length: " + someFicheros.length, null);



                    if( !aThis._v_Configuration) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration", null));
                        return  false;
                    }



                    var someParmsToResolve = [
                        this.PARM_FICHEROSLIST_MINRETRIEVED,
                        this.PARM_FICHEROSLIST_MAXRETRIEVED
                    ];


                    var aParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                    if( !aParmResolutionsDict) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Configuration.fParmResolutions( " + someParmsToResolve.joins( ",") + ")", null));
                        return  false;
                    }

                    var aNumFicheros = aThis._v_Ficheros.length;



                    var aMinRetrieved = null;
                    var aMinRetrievedResolution = aParmResolutionsDict[ this.PARM_FICHEROSLIST_MINRETRIEVED];
                    if( aMinRetrievedResolution && aMinRetrievedResolution._v_Success) {
                        aMinRetrieved = aMinRetrievedResolution._v_ParmValue;
                    }
                    if( !( aMinRetrieved == null) && !( aMinRetrieved == -1)) {
                        if( !( aNumFicheros >= aMinRetrieved)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_DIDNOTWORK, null, "!(Ficheros) theResponse.body.aaData.length >= " + aMinRetrieved, null));
                            return false;
                        }
                    }


                    var aMaxRetrieved = null;
                    var aMaxRetrievedResolution = aParmResolutionsDict[ this.PARM_FICHEROSLIST_MAXRETRIEVED];
                    if( aMaxRetrievedResolution && aMaxRetrievedResolution._v_Success) {
                        aMaxRetrieved = aMaxRetrievedResolution._v_ParmValue;
                    }
                    if( !( aMaxRetrieved == null) && !( aMaxRetrieved == -1)) {
                        if( !( aNumFicheros <= aMaxRetrieved)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_DIDNOTWORK, null, "!(Ficheros) theResponse.body.aaData.length <= " + aMaxRetrieved, null));
                            return false;
                        }
                    }


                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;









            var pS_FicherosList = function( theCallback) {

                var aMethodName = "pS_FicherosList";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                if( ( this._v_FicherosListLazy == true) && !( this._v_Ficheros == null)) {
                    var aRecord = this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_ALREADY, null, null, null);
                    theCallback( null, this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_OK, aRecord, null, null));
                    return;
                }

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
            if( pS_FicherosList){}/* CQT */
            aPrototype.pS_FicherosList = pS_FicherosList;








            var pF_FicherosListIneSpringnut = function( theCallback) {
                var aMethodName = "pF_FicherosListIneSpringnut";

                this.pNowStarted();

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this.pF_Runnable( theCallback, aMethodName);
            };
            if( pF_FicherosListIneSpringnut){}/* CQT */
            aPrototype.pF_FicherosListIneSpringnut = pF_FicherosListIneSpringnut;






            var pS_RunRequireds = function( theCallback) {

                aPrototype._v_SuperPrototype.pS_RunRequireds.bind( this)( theCallback);
            };
            if( pS_RunRequireds){}/* CQT */
            aPrototype.pS_RunRequireds = pS_RunRequireds;




            var fOwnTestMethodToRun = function() {
                return this.pSS_FicherosListIneSpringnut.bind( this);
            };
            if( fOwnTestMethodToRun){}/* CQT */
            aPrototype.fOwnTestMethodToRun = fOwnTestMethodToRun;








            var pSS_FicherosListIneSpringnut = function( theCallback) {
                var aMethodName = "pSS_FicherosListIneSpringnut";

                this.fRecord( this._v_Type, this._v_Id, this, aMethodName, this.EVENTKIND_STEP_BEGIN, null, null, null);

                this.pReceivedTestCallbackArg( theCallback, aMethodName);


                this._v_StepsToRun = [
                    this.pS_CheckLazy.bind( this),
                    this.pS_RunRequireds.bind( this),
                    this.pS_FicherosList.bind( this),
                    this.pS_RunSubs.bind( this)
                ];


                this.pS_RunSteps( theCallback);

            };
            if( pSS_FicherosListIneSpringnut){}/* CQT */
            aPrototype.pSS_FicherosListIneSpringnut = pSS_FicherosListIneSpringnut;







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
                aResultJSON.lazy = this._v_FicherosListLazy ? true : false;

                aResultJSON.session           = aSessionResultJSON;

                aResultJSON.ficheros           = this._v_Ficheros;

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;






            return aPrototype;

        })();




        var FicherosListIneSpringnutTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theSession) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_FicherosListLazy = null;

            this._v_FicherosListRetrieved = null;

            this._v_Ficheros = null;

            this._pInit_FicherosListIneSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theSession);
        };
        FicherosListIneSpringnutTest_Constructor.prototype = aFicherosListIneSpringnutTest_Prototype;





        var FicherosListIneSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_runsubs_test.RunSubsTest_Prototype;

            this._v_Prototype = aFicherosListIneSpringnutTest_Prototype;
            this._v_Type = null;

            this._v_BaseURL  = null;
            this._v_URLpath  = null;

            this._v_Session            = null;

            this._v_FicherosListLazy = null;

            this._v_FicherosListRetrieved = null;

            this._v_Ficheros = null;
        };
        FicherosListIneSpringnutTest_SuperPrototypeConstructor.prototype = aFicherosListIneSpringnutTest_Prototype;



        var aModule = {
            "FicherosListIneSpringnutTest_Prototype": aFicherosListIneSpringnutTest_Prototype,
            "FicherosListIneSpringnutTest_Constructor": FicherosListIneSpringnutTest_Constructor,
            "FicherosListIneSpringnutTest_SuperPrototypeConstructor": FicherosListIneSpringnutTest_SuperPrototypeConstructor
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

            var aM_runsubs_test           = require('asyncshell/lib/common-test/runsubs-test');

            var aM_parms_general       = require('asyncshell/lib/general-test/parms-general');

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


