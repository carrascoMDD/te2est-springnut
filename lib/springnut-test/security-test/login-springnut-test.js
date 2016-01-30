'use strict';

/*
 login-springnut-test.js
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
    var aMod_definer = function( theM_login_test) {

        var ModuleName     = "login-springnut-test";
        var ModulePackages = "springnut-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.URLPATH_DEFAULT =  "/resources/j_spring_security_check";

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






        var aLoginSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_login_test.LoginTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_login_test.LoginTest_Prototype;

            aPrototype._v_Type = "LoginSpringnutTest";




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_LoginSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_LoginSpringnut = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Login.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_LoginSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_LoginSpringnut){}/* CQT */
            aPrototype._pInit_LoginSpringnut = _pInit_LoginSpringnut;





            var fUrlPathDefault = function() {
                return this.URLPATH_DEFAULT;
            };
            if( fUrlPathDefault){}/* CQT */
            aPrototype.fUrlPathDefault = fUrlPathDefault;







            return aPrototype;

        })();




        var LoginSpringnutTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_login_test.LoginTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_LoginSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        LoginSpringnutTest_Constructor.prototype = aLoginSpringnutTest_Prototype;





        var LoginSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_login_test.LoginTest_Prototype;

            this._v_Prototype = aLoginSpringnutTest_Prototype;
            this._v_Type = null;
        };
        LoginSpringnutTest_SuperPrototypeConstructor.prototype = aLoginSpringnutTest_Prototype;



        var aModule = {
            "LoginSpringnutTest_Prototype": aLoginSpringnutTest_Prototype,
            "LoginSpringnutTest_Constructor": LoginSpringnutTest_Constructor,
            "LoginSpringnutTest_SuperPrototypeConstructor": LoginSpringnutTest_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;
    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_login_test  = require('asyncshell/lib/general-test/security-test/login-test');

            return aMod_definer( aM_login_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "asyncshell/lib/general-test/security-test/login-test"
        ], function (
            theM_login_test
            ) {
            return aMod_definer( theM_login_test);
        });
    }


}());


