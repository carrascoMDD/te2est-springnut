
'use strict';

/*
 browserlogin-springnut-testhelper.js
 Creado 201410191958
 */


/*
 ***************************************************************************

 Copyright 2014 2015 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 */


(function () {
    var aMod_definer = function( theM_common_testhelper,
                                 theM_forcedexception,
                                 theM_parms_general,
                                 theM_parms_credentials,
                                 theM_overrider) {

        var ModuleName     = "browserlogin-springnut-testhelper";
        var ModulePackages = "browser-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleVariations = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.SLEEPATLOGIN = 1;

        };





        var pgInitFromModuleVariations = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleVariations) {
                if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                }
            }
        };


        var ModuleVariations = { };
        pgInitWithModuleVariations( ModuleVariations);
        theM_overrider.pgOverrideModuleVariations( ModuleFullName, ModuleVariations);






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }



            theToInit.PARM_LOGIN = "login";

            theToInit.PARM_LOGIN_NAME                     = "name";
            theToInit.PARM_LOGIN_FULLURL                  = "loginFullURL";
            theToInit.PARM_LOGIN_URL                      = "loginURL";
            theToInit.PARM_LOGIN_ISANGULAR                = "isAngular";
            theToInit.PARM_LOGIN_USERNAME_LOCATORKIND     = "userNameLocatorKind";
            theToInit.PARM_LOGIN_USERNAME_LOCATOR         = "userNameLocator";
            theToInit.PARM_LOGIN_PASSWORD_LOCATORKIND     = "passwordLocatorKind";
            theToInit.PARM_LOGIN_PASSWORD_LOCATOR         = "passwordLocator";
            theToInit.PARM_LOGIN_BUTTON_LOCATORKIND       = "loginButtonLocatorKind";
            theToInit.PARM_LOGIN_BUTTON_LOCATOR           = "loginButtonLocator";
            theToInit.PARM_LOGIN_USERNAME                 = "userName";
            theToInit.PARM_LOGIN_PASSWORD                 = "password";
            theToInit.PARM_LOGIN_EXPECTEDLOGINPAGETITLE   = "expectedLoginPageTitle";
            theToInit.PARM_LOGIN_EXPECTEDLOGGGEDPAGETITLE = "expectedLoggedPageTitle";


            theToInit.PARMS_LOGIN = [
                theToInit.PARM_LOGIN_NAME,
                theToInit.PARM_LOGIN_FULLURL,
                theToInit.PARM_LOGIN_URL,
                theToInit.PARM_LOGIN_ISANGULAR,
                theToInit.PARM_LOGIN_USERNAME_LOCATORKIND,
                theToInit.PARM_LOGIN_USERNAME_LOCATOR,
                theToInit.PARM_LOGIN_PASSWORD_LOCATORKIND,
                theToInit.PARM_LOGIN_PASSWORD_LOCATOR,
                theToInit.PARM_LOGIN_BUTTON_LOCATORKIND,
                theToInit.PARM_LOGIN_BUTTON_LOCATOR,
                theToInit.PARM_LOGIN_USERNAME,
                theToInit.PARM_LOGIN_PASSWORD,
                theToInit.PARM_LOGIN_EXPECTEDLOGINPAGETITLE,
                theToInit.PARM_LOGIN_EXPECTEDLOGGGEDPAGETITLE
            ];

            

        };


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


        var ModuleConstants = {};
        pgInitFromModuleVariations( ModuleConstants);
        pgInitWithModuleConstants( ModuleConstants);













        var aBrowserLoginSpringnutTestHelper_Prototype = (function() {


            var aPrototype = new theM_common_testhelper.CommonTestHelper_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);




            aPrototype._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            aPrototype._v_Type = "BrowserLoginSpringnutTestHelper";

            aPrototype._v_Module = null;

            aPrototype._v_ProtractorTest = null;


            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest) {

                this._pInit_BrowserLoginSpringnutTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_BrowserLoginSpringnutTestHelper = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_CommonTestHelper.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_ProtractorTest = theProtractorTest;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_BrowserLoginSpringnutTestHelper", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_BrowserLoginSpringnutTestHelper){}/* CQT */
            aPrototype._pInit_BrowserLoginSpringnutTestHelper = _pInit_BrowserLoginSpringnutTestHelper;














            var _pRelease = function( theReleaseParms, theReleaseDone) {

                if( this._v_Released === this.HASBEENRELEASED_SINGLETONSENTINEL) {
                    return;
                }
                this._v_Released = this.HASBEENRELEASED_SINGLETONSENTINEL;

                this._pRegisterReleasedIdentifyingAndRecordRelease( theReleaseParms, theReleaseDone);

                this._pRelease_BrowserLoginSpringnutTestHelper( theReleaseParms, theReleaseDone);
            };
            if( _pRelease){}/* CQT */
            aPrototype._pRelease = _pRelease;








            var _pRelease_BrowserLoginSpringnutTestHelper = function( theReleaseParms, theReleaseDone) {

                if( this._v_ProtractorTest) {
                    if( typeof this._v_ProtractorTest._pRelease == "function") {
                        this._v_ProtractorTest._pRelease( theReleaseParms, theReleaseDone);
                    }
                }

                this._v_ProtractorTest = undefined;

                /* Delegate on super prototype release */
                this._v_SuperPrototype._pRelease_CommonTestHelper.apply( this, [ theReleaseParms, theReleaseDone]);

            };
            if( _pRelease_BrowserLoginSpringnutTestHelper){}/* CQT */
            aPrototype._pRelease_BrowserLoginSpringnutTestHelper = _pRelease_BrowserLoginSpringnutTestHelper;

















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

                this.pCleanUpTest_BrowserLoginSpringnutTestHelper( theWhatToClean, theReleaseParms, theReleaseDone);
            };
            if( pCleanUpTest){}/* CQT */
            aPrototype.pCleanUpTest = pCleanUpTest;






            var pCleanUpTest_BrowserLoginSpringnutTestHelper = function( theWhatToClean, theReleaseParms, theReleaseDone) {


                /* Delegate on super prototype CleanUp */
                this._v_SuperPrototype.pCleanUpTest_CommonTestHelper.apply( this, [ theWhatToClean, theReleaseParms, theReleaseDone]);

            };
            if( pCleanUpTest_BrowserLoginSpringnutTestHelper){}/* CQT */
            aPrototype.pCleanUpTest_BrowserLoginSpringnutTestHelper = pCleanUpTest_BrowserLoginSpringnutTestHelper;











            var fAtPtr_AtLogin= function() {
                return browser.sleep( this.SLEEPATLOGIN);
            };
            if( fAtPtr_AtLogin){}/* CQT */
            aPrototype.fAtPtr_AtLogin = fAtPtr_AtLogin;






            var fAtPtr_MissingParm = function() {
                return browser.sleep( this.SLEEPATMISSINGPARM);
            };
            if( fAtPtr_MissingParm){}/* CQT */
            aPrototype.fAtPtr_MissingParm = fAtPtr_MissingParm;










            var fItPtrFunction_SpringnutLogin = function( theHelperParms) {

                var someHelperParms = theHelperParms;

                var aThis = this;
                var aDoPtrFunction_SpringnutLogin = (function() {

                    var someHelperParms_here = someHelperParms;
                    var aThis_here = aThis;

                    return (function() {

                        var someParmsLogin = someHelperParms_here[ aThis_here.PARM_LOGIN];
                        if( !someParmsLogin) {
                            return aThis_here.fAtPtr_MissingParm();
                        }

                        var aFullLoginURL            = someParmsLogin[ aThis_here.PARM_LOGIN_FULLURL];
                        var aLoginURL                = someParmsLogin[ aThis_here.PARM_LOGIN_URL];
                        var aIsAngular               = someParmsLogin[ aThis_here.PARM_LOGIN_ISANGULAR];
                        var aUserNameLocatorKind     = someParmsLogin[ aThis_here.PARM_LOGIN_USERNAME_LOCATORKIND];
                        var aUserNameLocatorStr      = someParmsLogin[ aThis_here.PARM_LOGIN_USERNAME_LOCATOR];
                        var aPasswordLocatorKind     = someParmsLogin[ aThis_here.PARM_LOGIN_PASSWORD_LOCATORKIND];
                        var aPasswordLocatorStr      = someParmsLogin[ aThis_here.PARM_LOGIN_PASSWORD_LOCATOR];
                        var aLoginButtonLocatorKind  = someParmsLogin[ aThis_here.PARM_LOGIN_BUTTON_LOCATORKIND];
                        var aLoginButtonLocatorStr   = someParmsLogin[ aThis_here.PARM_LOGIN_BUTTON_LOCATOR];
                        var aUserName                = someParmsLogin[ aThis_here.PARM_LOGIN_USERNAME];
                        var aPassword                = someParmsLogin[ aThis_here.PARM_LOGIN_PASSWORD];
                        var aExpectedLoginPageTitle  = someParmsLogin[ aThis_here.PARM_LOGIN_EXPECTEDLOGINPAGETITLE];
                        var aExpectedLoggedPageTitle = someParmsLogin[ aThis_here.PARM_LOGIN_EXPECTEDLOGGGEDPAGETITLE];


                        var aURL = aFullLoginURL;
                        if( !aURL) {
                            var aBaseURL = null;
                            if( aThis_here._v_ProtractorTest) {
                                aBaseURL = aThis_here._v_ProtractorTest.PROTRACTOR_HITPOINT;
                            }
                            if( !aBaseURL) {
                                aBaseURL = aThis_here.fResolvedParmValue( theM_parms_general.PARM_HITPOINT_BASEURL);
                            }
                            if( !aBaseURL) {
                                aBaseURL = "";
                            }

                            aURL = aBaseURL + aLoginURL;
                        }


                        if( !aUserName || !aPassword) {
                            var someParmsToResolve = [
                                theM_parms_credentials.PARM_CREDENTIALS_USERNAME,
                                theM_parms_credentials.PARM_CREDENTIALS_PASSWORD
                            ];
                            var aParmResolutionsDict = aThis._v_Configuration.fParmResolutionsByName( someParmsToResolve);

                            if( aParmResolutionsDict) {

                                var aUsernameResolution = aParmResolutionsDict[ theM_parms_credentials.PARM_CREDENTIALS_USERNAME];
                                if( aUsernameResolution && aUsernameResolution._v_Success  && aUsernameResolution._v_ParmValue) {
                                    aUserName = aUsernameResolution._v_ParmValue;
                                }

                                var aPasswordResolution = aParmResolutionsDict[ theM_parms_credentials.PARM_CREDENTIALS_PASSWORD];
                                if( aPasswordResolution && aPasswordResolution._v_Success && aPasswordResolution._v_ParmValue) {
                                    aPassword = aPasswordResolution._v_ParmValue;
                                }
                            }
                        }



                        var aUserNameLocator    = aThis_here.fPtr_Locator( aUserNameLocatorKind,    aUserNameLocatorStr);
                        var aPasswordLocator    = aThis_here.fPtr_Locator( aPasswordLocatorKind,    aPasswordLocatorStr);
                        var aLoginButtonLocator = aThis_here.fPtr_Locator( aLoginButtonLocatorKind, aLoginButtonLocatorStr);




                        browser.ignoreSynchronization = aIsAngular ? false : true;



                        var aBrowserGetPromise = browser.get( aURL);

                        var anAfterBrowserGetPromise = aBrowserGetPromise;

                        if( aIsAngular) {
                            anAfterBrowserGetPromise =
                                aBrowserGetPromise
                                .then( function() {
                                    return browser.waitForAngular();
                                });
                        }



                        /*
                        var aLoginButtonClickPromise = anAfterBrowserGetPromise
                            .then( function() {
                                return expect( browser.getTitle()).toEqual( aExpectedLoginPageTitle);
                            })
                            .then( function() {
                                return browser.driver.findElement( aUserNameLocator).sendKeys( aUserName);
                            })
                            .then( function() {
                                return browser.driver.findElement( aPasswordLocator).sendKeys( aPassword);
                            })
                            .then( function() {
                                return browser.driver.findElement( aLoginButtonLocator).click();
                            });
                        */



                        var aLoginButtonClickPromise = anAfterBrowserGetPromise
                            .then( function() {
                                expect( browser.getTitle()).toEqual( aExpectedLoginPageTitle);
                                browser.driver.findElement( aUserNameLocator).sendKeys( aUserName);
                                browser.driver.findElement( aPasswordLocator).sendKeys( aPassword);
                                return browser.driver.findElement( aLoginButtonLocator).click();
                            });


                        var anAfterLoginButtonClickPromise = aLoginButtonClickPromise;
                        if( aIsAngular) {
                            anAfterLoginButtonClickPromise =
                                aLoginButtonClickPromise
                                .then( function() {
                                    return browser.waitForAngular();
                                });
                        }


                        var aThis_here_here = aThis_here;

                        return anAfterLoginButtonClickPromise
                            .then( function() {
                                expect( browser.getTitle()).toEqual( aExpectedLoggedPageTitle);
                                return aThis_here_here.fAtPtr_AtLogin();
                            });

                    });

                })();


                return aDoPtrFunction_SpringnutLogin;
            };
            if( fItPtrFunction_SpringnutLogin){}/* CQT */
            aPrototype.fItPtrFunction_SpringnutLogin = fItPtrFunction_SpringnutLogin;










            var pDoPtr_SpringnutLogin = function( theHelperParms) {

                if( !theHelperParms) {
                    return;
                }

                var aItPtrFunction_SpringnutLogin = this.fItPtrFunction_SpringnutLogin( theHelperParms);
                if( !aItPtrFunction_SpringnutLogin) {
                    return;
                }

                var aHelperName = null;
                var someParmsLogin = theHelperParms[ this.PARM_LOGIN];
                if( someParmsLogin) {
                    aHelperName = someParmsLogin[ this.PARM_LOGIN_NAME];
                }
                if( !aHelperName) {
                    aHelperName = "UnnamedHelper";
                }


                /* ******************************************
                 Submit a protractor/jasmine "it"

                 Shall schedule tests when ItPtrFunction is executed
                */

                it( aHelperName, aItPtrFunction_SpringnutLogin);


            };
            if( pDoPtr_SpringnutLogin){}/* CQT */
            aPrototype.pDoPtr_SpringnutLogin = pDoPtr_SpringnutLogin;







            return aPrototype;

        })();




        var BrowserLoginSpringnutTestHelper_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ProtractorTest = null;

            this._pInit_BrowserLoginSpringnutTestHelper( theTitle, theConfiguration, theIdentifier, theRecorder, theProtractorTest);

        };
        BrowserLoginSpringnutTestHelper_Constructor.prototype = aBrowserLoginSpringnutTestHelper_Prototype;





        var BrowserLoginSpringnutTestHelper_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_common_testhelper.CommonTestHelper_Prototype;

            this._v_Prototype = aBrowserLoginSpringnutTestHelper_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_ProtractorTest = null;
        };
        BrowserLoginSpringnutTestHelper_SuperPrototypeConstructor.prototype = aBrowserLoginSpringnutTestHelper_Prototype;



        var aModule = {
            "BrowserLoginSpringnutTestHelper_Prototype": aBrowserLoginSpringnutTestHelper_Prototype,
            "BrowserLoginSpringnutTestHelper_Constructor": BrowserLoginSpringnutTestHelper_Constructor,
            "BrowserLoginSpringnutTestHelper_SuperPrototypeConstructor": BrowserLoginSpringnutTestHelper_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aBrowserLoginSpringnutTestHelper_Prototype._v_Module = aModule;

        return aModule;

    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_common_testhelper   = require('../../browser-test/common-testhelper');
            var aM_forcedexception     = require('asyncshell/lib/common-test/forcedexception');
            var aM_parms_general       = require('asyncshell/lib/general-test/parms-general');
            var aM_parms_credentials   = require('asyncshell/lib/general-test/security-test/parms-credentials');
            var aM_overrider           = require('asyncshell/lib/common-test/overrider');

            return aMod_definer(
                aM_common_testhelper,
                aM_forcedexception,
                aM_parms_general,
                aM_parms_credentials,
                aM_overrider
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "../../browser-test/common-testhelper",
            "asyncshell/lib/common-test/forcedexception",
            "asyncshell/lib/general-test/parms-general",
            "asyncshell/lib/general-test/security-test/parms-credentials",
            "asyncshell/lib/common-test/overrider"
        ], function (
                theM_common_testhelper,
                theM_forcedexception,
                theM_parms_general,
                theM_parms_credentials,
                theM_overrider
            ) {
            return aMod_definer(
                theM_common_testhelper,
                theM_forcedexception,
                theM_parms_general,
                theM_parms_credentials,
                theM_overrider
            );
        });
    }


}());


































