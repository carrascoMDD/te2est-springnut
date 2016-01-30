'use strict';

/*
 isauthenticated-springnut-test.js
 Creado 201408082324
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
    var aMod_definer = function( theM_isauthenticated_test) {

        var ModuleName     = "isauthenticated-springnut-test";
        var ModulePackages = "springnut-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}






        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }

            theToInit.URLPATH_DEFAULT =   "/securityCheck/isAuthenticatedJSON";

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






        var aIsAuthenticatedSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_isauthenticated_test.IsAuthenticatedTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);

            aPrototype._v_SuperPrototype = theM_isauthenticated_test.IsAuthenticatedTest_Prototype;

            aPrototype._v_Type = "IsAuthenticatedSpringnutTest";




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest) {

                this._pInit_IsAuthenticatedSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_IsAuthenticatedSpringnut = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_IsAuthenticated.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_IsAuthenticatedSpringnut", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_IsAuthenticatedSpringnut){}/* CQT */
            aPrototype._pInit_IsAuthenticatedSpringnut = _pInit_IsAuthenticatedSpringnut;





            var fUrlPathDefault = function() {
                return this.URLPATH_DEFAULT;
            };
            if( fUrlPathDefault){}/* CQT */
            aPrototype.fUrlPathDefault = fUrlPathDefault;







            return aPrototype;

        })();




        var IsAuthenticatedSpringnutTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_isauthenticated_test.IsAuthenticatedTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_IsAuthenticatedSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest);

        };
        IsAuthenticatedSpringnutTest_Constructor.prototype = aIsAuthenticatedSpringnutTest_Prototype;





        var IsAuthenticatedSpringnutTest_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_isauthenticated_test.IsAuthenticatedTest_Prototype;

            this._v_Prototype = aIsAuthenticatedSpringnutTest_Prototype;
            this._v_Type = null;
        };
        IsAuthenticatedSpringnutTest_SuperPrototypeConstructor.prototype = aIsAuthenticatedSpringnutTest_Prototype;



        var aModule = {
            "IsAuthenticatedSpringnutTest_Prototype": aIsAuthenticatedSpringnutTest_Prototype,
            "IsAuthenticatedSpringnutTest_Constructor": IsAuthenticatedSpringnutTest_Constructor,
            "IsAuthenticatedSpringnutTest_SuperPrototypeConstructor": IsAuthenticatedSpringnutTest_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;
    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_isauthenticated_test  = require('asyncshell/lib/general-test/security-test/isauthenticated-test');

            return aMod_definer( aM_isauthenticated_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "asyncshell/lib/general-test/security-test/isauthenticated-test"
        ], function (
            theM_isauthenticated_test
            ) {
            return aMod_definer( theM_isauthenticated_test);
        });
    }


}());

