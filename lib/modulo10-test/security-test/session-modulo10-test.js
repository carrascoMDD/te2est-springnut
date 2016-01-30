'use strict';

/*
 session-modulo10-test.js
 Creado 20140809172000
 */


/*
 ***************************************************************************

 {{CopyrightNoticeProprietary3}}
 {{CopyrightNoticeProprietary4}}

 {{LicenseProprietary3}}
 {{LicenseProprietary4}}

 {{LicensedProprietary3}}
 {{LicensedProprietary4}}

 ***************************************************************************
 */



(function () {

    var aMod_definer = function( theM_session_test) {


        var ModuleName     = "session-modulo10-test";
        var ModulePackages = "modulo10-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var aSessionModulo10Test_Prototype = (function() {


            var aPrototype = new theM_session_test.SessionTest_SuperPrototypeConstructor();



            aPrototype._v_SuperPrototype = theM_session_test.SessionTest_Prototype;

            aPrototype._v_Type = "SessionModulo10Test";





            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated) {

                this._pInit_SessionModulo10( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_SessionModulo10 = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Session.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_Session", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_SessionModulo10){}/* CQT */
            aPrototype._pInit_SessionModulo10 = _pInit_SessionModulo10;







            return aPrototype;

        })();




        var SessionModulo10Test_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_session_test.SessionTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._pInit_SessionModulo10( theTitle, theConfiguration, theIdentifier, theRecorder, theLogin, theIsAuthenticated);

        };
        SessionModulo10Test_Constructor.prototype = aSessionModulo10Test_Prototype;





        var SessionModulo10Test_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_session_test.SessionTest_Prototype;

            this._v_Prototype = aSessionModulo10Test_Prototype;
            this._v_Type = null;
        };
        SessionModulo10Test_SuperPrototypeConstructor.prototype = aSessionModulo10Test_Prototype;



        var aModule = {
            "SessionModulo10Test_Prototype": aSessionModulo10Test_Prototype,
            "SessionModulo10Test_Constructor": SessionModulo10Test_Constructor,
            "SessionModulo10Test_SuperPrototypeConstructor": SessionModulo10Test_SuperPrototypeConstructor
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


