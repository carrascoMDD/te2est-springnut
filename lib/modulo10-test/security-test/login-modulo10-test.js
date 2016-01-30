'use strict';

/*
 login-modulo10-test.js
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

    var aMod_definer = function( theM_login_test) {

        var ModuleName     = "login-modulo10-test";
        var ModulePackages = "modulo10-test/security-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function") && gfLOGMODULELOADS()) { gfLOGMODULELOADS(ModuleFullName);}









        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
                return;
            }



            theToInit.URLPATH_DEFAULT =  "/modulesJSON/conexion/entrarJSON.jsp?passwordX=Encriptaoo";

            /*
             Request URL:http://www.modulo10.es/modulesJSON/conexion/entrarJSON.jsp?login_user=xxxuser&password=passwordenbase64&passwordX=Encriptaoo

            var aSampleResult = {
                "exito":true,
                "informe":"",
                "usuarioConectado": {
                    "usuario":"testtest",
                    "consultasAgotadas":false,
                    "expediente":null,
                    "mostrarDetalles":true,
                    "soyAdmin":false,
                    "mostrarAvanzado":true,
                    "verResult":true,
                    "verInforme":false,
                    "empresa":"TEST",
                    "conectado":true,
                    "menosDeDiez":false,
                    "modulo":null,
                    "correo":"soporteTEST@modulo10.es",
                    "mostrarExpediente":false}
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




        var aLoginModulo10Test_Prototype = (function() {


            var aPrototype = new theM_login_test.LoginTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_login_test.LoginTest_Prototype;

            aPrototype._v_Type = "LoginModulo10Test";

            aPrototype._v_UsuarioConectado = null;


            // Request URL:http://www.modulo10.es/modulesJSON/conexion/entrarJSON.jsp?login_user=testtest&password=341fd4d043f72dc1fdc0502c842e440f&passwordX=Encriptaoo




            var _pInit = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                this._pInit_LoginModulo10( theTitle, theConfiguration, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;




            var _pInit_LoginModulo10 = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                this._v_SuperPrototype._pInit_Login.apply( this, [ theTitle, theConfiguration, theIdentifier, theRecorder]);

                this._v_Prototype = aPrototype;
                this._v_Type = aPrototype._v_Type;

                this._v_UsuarioConectado = null;
                if( this._v_UsuarioConectado){}/* CQT */

                if( this.RECORDINITS) { this.fRecord( this._v_Type, this._v_Id, this, "_pInit_LoginModulo10", this.EVENTKIND_INIT, null, null, null);}
            };
            if( _pInit_LoginModulo10){}/* CQT */
            aPrototype._pInit_LoginModulo10 = _pInit_LoginModulo10;







            var fUrlPathDefault = function() {
                return this.URLPATH_DEFAULT;
            };
            if( fUrlPathDefault){}/* CQT */
            aPrototype.fUrlPathDefault = fUrlPathDefault;







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
                        aURLpath = aThis.fUrlPathDefault();
                    }
                    if( !aURLpath) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, null, aThis.EVENTKIND_FAIL, null, "!aURLpath", null));
                        return null;
                    }


                    if( !aThis._v_Username) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Username", null));
                        return null;
                    }

                    if( !aThis._v_Password) {
                        theOtherCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!aThis._v_Password", null));
                        return null;
                    }


                    var aURL = aThis._v_BaseURL + aURLpath;



                    /*
                     Request URL:http://www.modulo10.es/modulesJSON/conexion/entrarJSON.jsp?login_user=xxxuser&password=passwordenbase64&passwordX=Encriptaoo
                     Request URL:http://www.modulo10.es/modulesJSON/conexion/entrarJSON.jsp?login_user=testtest&password=341fd4d043f72dc1fdc0502c842e440f&passwordX=Encriptaoo
                                 http://www.modulo10.es/modulesJSON/conexion/entrarJSON.jsp?passwordX=Encriptaoo&login_user=testtest&password=341fd4d043f72dc1fdc0502c842e440
                     */

                    var aUserEncoded = "";
                    if( !( this._v_Username == null)) {
                        aUserEncoded = encodeURIComponent( aThis._v_Username);
                    }
                    aURL += "&login_user=";
                    aURL += aUserEncoded;



                    var aPasswordEncoded = "";
                    if( !( this._v_Password == null)) {
                        aPasswordEncoded = encodeURIComponent( aThis._v_Password);
                    }
                    aURL += "&password=";
                    aURL += aPasswordEncoded;


                    return aURL;
                }).bind( this);
                if( aFunction){}/* CQT */
                return aFunction;
            };
            if( fURLpath){}/* CQT */
            aPrototype.fURLpath = fURLpath;







            var fRequestData = function( theCallback, theMethodName) {
                if( theCallback){}/* CQT */
                if( theMethodName){}/* CQT */
                var aThis = this;

                var aFunction = (function( theOtherCallback) {
                    if( theOtherCallback){}/* CQT */
                    if( aThis){}/* CQT */

                    return {
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


                    var aSetCookie = theResponse.headers[ "set-cookie"];
                    if( !aSetCookie) {
                        theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!theResponse.headers[ 'set-cookie']", null));
                        return false;
                    }

                    aThis._v_Cookies = aSetCookie;




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


                    if( !( aThis._v_Username == null)) {
                        var aUserName = aUsuarioConectado[ "usuario"];
                        if( !aUserName) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!theResponse.body.usuarioConectado.usuario", null));
                            return false;
                        }

                        if( !( aUserName == this._v_Username)) {
                            theCallback( aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_FAIL, null, "!( theResponse.body.usuarioConectado.usuario == this._v_Username)", null));
                            return false;
                        }
                    }




                    aThis.fRecord( aThis._v_Type, aThis._v_Id, aThis, theMethodName, aThis.EVENTKIND_RETRIEVEDDATA, aUsuarioConectado, "(LoginModulo10) theResponse.body.usuarioConectado", null);


                    aThis._v_UsuarioConectado = aUsuarioConectado;

                    return true;

                }).bind( this);
                if( aResultParserFunction){}/* CQT */

                return aResultParserFunction;
            };
            if( fResultParser){}/* CQT */
            aPrototype.fResultParser = fResultParser;







            var pS_login = function( theCallback) {

                var aMethodName = "pS_login";

                this.pReceivedTestCallbackArg( theCallback, aMethodName);



                if( ( this._v_LoginLazy == true) && this._v_Cookies && this._v_Cookies.length) {
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
            if( pS_login){}/* CQT */
            aPrototype.pS_login = pS_login;








            return aPrototype;

        })();




        var LoginModulo10Test_Constructor = function( theTitle, theConfiguration, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_login_test.LoginTest_Prototype;

            this._v_Prototype = null;
            this._v_Type = null;

            this._v_UsuarioConectado = null;

            this._pInit_LoginModulo10( theTitle, theConfiguration, theIdentifier, theRecorder);
        };
        LoginModulo10Test_Constructor.prototype = aLoginModulo10Test_Prototype;





        var LoginModulo10Test_SuperPrototypeConstructor = function( ) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_login_test.LoginTest_Prototype;

            this._v_Prototype = aLoginModulo10Test_Prototype;
            this._v_Type = null;

            this._v_UsuarioConectado = null;
        };
        LoginModulo10Test_SuperPrototypeConstructor.prototype = aLoginModulo10Test_Prototype;



        var aModule = {
            "LoginModulo10Test_Prototype": aLoginModulo10Test_Prototype,
            "LoginModulo10Test_Constructor": LoginModulo10Test_Constructor,
            "LoginModulo10Test_SuperPrototypeConstructor": LoginModulo10Test_SuperPrototypeConstructor
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


