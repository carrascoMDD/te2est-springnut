'use strict';

/*
 logout-springnut-test.js
 Creado 201501210357
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
    var aMod_definer = function( theM_logout_test) {

        var ModuleName     = "logout-springnut-test";
        var ModulePackages = "springnut-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.URLPATH_DEFAULT =  "/resources/j_spring_security_logout";

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






        var aLogoutSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_logout_test.LogoutTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_logout_test.LogoutTest_Prototype;

            aPrototype._v_Type = "LogoutSpringnutTest";




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_LogoutSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_LogoutSpringnut = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Logout.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_LogoutSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_LogoutSpringnut){}/* CQT */
            aPrototype._pInit_LogoutSpringnut = _pInit_LogoutSpringnut;





            var fUrlPathDefault = function() {
                return this.URLPATH_DEFAULT;
            };
            if( fUrlPathDefault){}/* CQT */
            aPrototype.fUrlPathDefault = fUrlPathDefault;







            return aPrototype;

        })();




        var LogoutSpringnutTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_logout_test.LogoutTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_LogoutSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        LogoutSpringnutTest_Constructor.prototype = aLogoutSpringnutTest_Prototype;





        var LogoutSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_logout_test.LogoutTest_Prototype;

            this._v_Prototype = aLogoutSpringnutTest_Prototype;
            this._v_Type = null;
        };
        LogoutSpringnutTest_SuperPrototypeConstructor.prototype = aLogoutSpringnutTest_Prototype;



        var aModule = {
            "LogoutSpringnutTest_Prototype": aLogoutSpringnutTest_Prototype,
            "LogoutSpringnutTest_Constructor": LogoutSpringnutTest_Constructor,
            "LogoutSpringnutTest_SuperPrototypeConstructor": LogoutSpringnutTest_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;
    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_logout_test  = require('asyncshell/lib/general-test/security-test/logout-test');

            return aMod_definer( aM_logout_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "asyncshell/lib/general-test/security-test/logout-test"
        ], function (
            theM_logout_test
            ) {
            return aMod_definer( theM_logout_test);
        });
    }


}());


