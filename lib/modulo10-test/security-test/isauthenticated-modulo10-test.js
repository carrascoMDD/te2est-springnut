'use strict';

/*
 isauthenticated-modulo10-test.js
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
    var aMod_definer = function( theM_isauthenticated_test) {

        var ModuleName     = "isauthenticated-modulo10-test";
        var ModulePackages = "modulo10-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }


            theToInit.URLPATH_DEFAULT =   "/modulesJSON/conexion/conectadoJSON.jsp";

            /*
            Request URL:http://www.modulo10.es/modulesJSON/conexion/conectadoJSON.jsp?

            var aSampleResult = {
                "exito":true,
                "informe":"",
                "usuarioConectado": {
                    "usuario":"",
                    "consultasAgotadas":true,
                    "expediente":null,
                    "mostrarDetalles":true,
                    "soyAdmin":false,
                    "mostrarAvanzado":true,
                    "verResult":false,
                    "verInforme":false,
                    "empresa":"",
                    "conectado":false,
                    "menosDeDiez":false,
                    "modulo":null,
                    "correo":"",
                    "mostrarExpediente":false
                }
            };
            */

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








        var aIsAuthenticatedModulo10Test_Prototype = (function() {


            var aPrototype = new theM_isauthenticated_test.IsAuthenticatedTest_SuperPrototypeConstructor();


            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_isauthenticated_test.IsAuthenticatedTest_Prototype;

            aPrototype._v_Type = "IsAuthenticatedModulo10Test";

            aPrototype._v_UsuarioConectado = null;



            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest) {

                this._pInit_IsAuthenticatedModulo10( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_IsAuthenticatedModulo10 = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_IsAuthenticated.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_UsuarioConectado = null;

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_IsAuthenticatedModulo10", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_IsAuthenticatedModulo10){}/* CQT */
            aPrototype._pInit_IsAuthenticatedModulo10 = _pInit_IsAuthenticatedModulo10;








            var fUrlPathDefault = function() {
                return this.URLPATH_DEFAULT;
            };
            if( fUrlPathDefault){}/* CQT */
            aPrototype.fUrlPathDefault = fUrlPathDefault;







            var fResultParser = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */

                var aThis = this;

                var aResultParserFunction = (function( theCallback, theError, theResponse, theBody) {
                    if( theBody){}/* CQT */

                    if( theResponse.body == null) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_STEP_FAIL, null, "theResponse.body == null", null));
                        return false;
                    }


                    var aResponseBody = theResponse.body;
                    if( !aResponseBody) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!theResponse.body", null));
                        return false;
                    }


                    var aBodyObject = aResponseBody;

                    if( !( typeof aResponseBody == "object")) {
                        if( !typeof aResponseBody == "string") {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!theResponse.body", null));
                            return false;
                        }

                        try {
                            aBodyObject = JSON.parse( aResponseBody);
                        }
                        catch( anException) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "Exception while JSON.parse( theResponse.body)", anException));
                            return false;
                        }
                    }

                    if( !aBodyObject) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!object theResponse.body", null));
                        return false;
                    }


                    if( !aBodyObject[ "exito"]) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "! theResponse.body.exito", null));
                        return false;
                    }



                    var aUsuarioConectado = aBodyObject[ "usuarioConectado"];
                    if( !aUsuarioConectado) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "! theResponse.body.usuarioConectado", null));
                        return false;
                    }

                    aThis._v_UsuarioConectado = aUsuarioConectado;


                    aThis._v_IsAuthenticated = aUsuarioConectado[ "conectado"];

                    if( !aThis._v_IsAuthenticated) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_DIDNOTWORK, null, "!theResponse.body.usuarioConectado.conectado", null));
                        return  false;
                    }



                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aUsuarioConectado, "theResponse.body.usuarioConectado", null);


                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;






            return aPrototype;

        })();




        var IsAuthenticatedModulo10Test_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_isauthenticated_test.IsAuthenticatedTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_UsuarioConectado = null;

            this._pInit_IsAuthenticatedModulo10( theTitle, theConfiguration, theIdentifier, theRecorder, theLoginTest);
        };
        IsAuthenticatedModulo10Test_Constructor.prototype = aIsAuthenticatedModulo10Test_Prototype;





        var IsAuthenticatedModulo10Test_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_isauthenticated_test.IsAuthenticatedTest_Prototype;

            this._v_Prototype = aIsAuthenticatedModulo10Test_Prototype;
            this._v_Type = null;

            this._v_UsuarioConectado = null;
        };
        IsAuthenticatedModulo10Test_SuperPrototypeConstructor.prototype = aIsAuthenticatedModulo10Test_Prototype;



        var aModule = {
            "IsAuthenticatedModulo10Test_Prototype": aIsAuthenticatedModulo10Test_Prototype,
            "IsAuthenticatedModulo10Test_Constructor": IsAuthenticatedModulo10Test_Constructor,
            "IsAuthenticatedModulo10Test_SuperPrototypeConstructor": IsAuthenticatedModulo10Test_SuperPrototypeConstructor
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



