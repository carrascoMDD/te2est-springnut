'use strict';

/*
 session-springnut-test.js
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
    var aMod_definer = function( theM_session_test) {

        var ModuleName     = "session-springnut-test";
        var ModulePackages = "springnut-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}







        var aSessionSpringnutTest_Prototype = (function() {


            var aPrototype = new theM_session_test.SessionTest_SuperPrototypeConstructor();



            aPrototype._v_SuperPrototype = theM_session_test.SessionTest_Prototype;

            aPrototype._v_Type = "SessionSpringnutTest";



            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated) {

                this._pInit_SessionSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_SessionSpringnut = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Session.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Session", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_SessionSpringnut){}/* CQT */
            aPrototype._pInit_SessionSpringnut = _pInit_SessionSpringnut;







            return aPrototype;

        })();




        var SessionSpringnutTest_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_session_test.SessionTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_SessionSpringnut( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated);

        };
        SessionSpringnutTest_Constructor.prototype = aSessionSpringnutTest_Prototype;





        var SessionSpringnutTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_session_test.SessionTest_Prototype;

            this._v_Prototype = aSessionSpringnutTest_Prototype;
            this._v_Type = null;
        };
        SessionSpringnutTest_SuperPrototypeConstructor.prototype = aSessionSpringnutTest_Prototype;



        var aModule = {
            "SessionSpringnutTest_Prototype": aSessionSpringnutTest_Prototype,
            "SessionSpringnutTest_Constructor": SessionSpringnutTest_Constructor,
            "SessionSpringnutTest_SuperPrototypeConstructor": SessionSpringnutTest_SuperPrototypeConstructor
        };
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;


        return aModule;

    };






    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_session_test                  = require('asyncshell/lib/general-test/security-test/session-test');

            return aMod_definer( aM_session_test);
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "asyncshell/lib/general-test/security-test/session-test"
        ], function (
            theM_session_test
            ) {
            return aMod_definer(
                theM_session_test
            );
        });
    }


}());


