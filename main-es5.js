function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _azure_speech_to_text_azure_speech_to_text_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./azure-speech-to-text/azure-speech-to-text.component */
    "./src/app/azure-speech-to-text/azure-speech-to-text.component.ts");

    var routes = [{
      path: 'azure',
      component: _azure_speech_to_text_azure_speech_to_text_component__WEBPACK_IMPORTED_MODULE_2__["AzureSpeechToTextComponent"]
    },
    /*{
      path: 'google',
      component: GoogleSpeechToTextComponent
    },*/
    {
      path: '',
      redirectTo: 'azure',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/", "azure"];
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 2,
      consts: [[1, "nav"], [1, "left"], [1, "middle"], [1, "item", 3, "routerLink"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Azure Speech Services ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AZURE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".nav[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 56px;\n  background: #4c96d3;\n  align-items: center;\n}\n\n.left[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  flex-basis: 40%;\n  padding: 10px;\n}\n\n.middle[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #bbdefb;\n}\n\n.item[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 16px;\n  display: inline-block;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSTpcXEtyaXNoIFByb2plY3RzXFxTcGVlY2hUb1RleHQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENFO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDRU47O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQ0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGM5NmQzO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5sZWZ0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmbGV4LWJhc2lzOiA0MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAubWlkZGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkZWZiO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH0iLCIubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNTZweDtcbiAgYmFja2dyb3VuZDogIzRjOTZkMztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxlZnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZsZXgtYmFzaXM6IDQwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1pZGRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGVmYjtcbn1cblxuLml0ZW0ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _azure_speech_to_text_azure_speech_to_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./azure-speech-to-text/azure-speech-to-text.component */
    "./src/app/azure-speech-to-text/azure-speech-to-text.component.ts");
    /* harmony import */


    var _google_speech_to_text_google_speech_to_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./google-speech-to-text/google-speech-to-text.component */
    "./src/app/google-speech-to-text/google-speech-to-text.component.ts");

    var AppModule = function AppModule(library) {
      _classCallCheck(this, AppModule);

      library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__["fab"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["far"]);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"]));
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _azure_speech_to_text_azure_speech_to_text_component__WEBPACK_IMPORTED_MODULE_9__["AzureSpeechToTextComponent"], _google_speech_to_text_google_speech_to_text_component__WEBPACK_IMPORTED_MODULE_10__["GoogleSpeechToTextComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _azure_speech_to_text_azure_speech_to_text_component__WEBPACK_IMPORTED_MODULE_9__["AzureSpeechToTextComponent"], _google_speech_to_text_google_speech_to_text_component__WEBPACK_IMPORTED_MODULE_10__["GoogleSpeechToTextComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], function () {
        return [{
          type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/azure-speech-to-text/azure-speech-to-text.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/azure-speech-to-text/azure-speech-to-text.component.ts ***!
    \************************************************************************/

  /*! exports provided: AzureSpeechToTextComponent */

  /***/
  function srcAppAzureSpeechToTextAzureSpeechToTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AzureSpeechToTextComponent", function () {
      return AzureSpeechToTextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! microsoft-cognitiveservices-speech-sdk */
    "./node_modules/microsoft-cognitiveservices-speech-sdk/distrib/es2015/microsoft.cognitiveservices.speech.sdk.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AzureSpeechToTextComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
      }
    }

    var AzureSpeechToTextComponent = /*#__PURE__*/function () {
      function AzureSpeechToTextComponent() {
        _classCallCheck(this, AzureSpeechToTextComponent);

        this.lastRecognized = '';
        this.recognizing = false;
        this.tooltip = "Start speech";
      }

      _createClass(AzureSpeechToTextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.speechConfig = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_1__["SpeechConfig"].fromSubscription("f7fbe62e52ef44cfb6d665fe4803196f", "westus");

          try {
            var AudioContext = window.AudioContext || false;

            if (AudioContext) {
              this.soundContext = new AudioContext();
            } else {
              alert("AudioContext not supported");
            }
          } catch (e) {
            console.log("no sound context found, no audio output. " + e);
          }
        }
      }, {
        key: "speechToText",
        value: function speechToText(event) {
          if (this.recognizing) {
            this.tooltip = "Start speech";
            this.stop();
            this.recognizing = false;
          } else {
            this.recognizing = true;
            this.tooltip = "Stop speech";
            console.log("recording");
            var audioConfig = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_1__["AudioConfig"].fromDefaultMicrophoneInput();
            this.speechConfig.speechRecognitionLanguage = 'en-US';
            this.speechConfig.enableDictation();
            this.recognizer = new microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_1__["SpeechRecognizer"](this.speechConfig, audioConfig);
            this.recognizer.recognizing = this.recognizer.recognized = this.recognizerCallback.bind(this);
            this.recognizer.startContinuousRecognitionAsync();
          }
        }
      }, {
        key: "recognizerCallback",
        value: function recognizerCallback(s, e) {
          console.log("Response ::    " + e.result.text);
          var reason = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_1__["ResultReason"][e.result.reason];
          console.log("Reason :: " + reason);

          if (reason == "RecognizingSpeech" && e.result.text) {
            this.text = this.lastRecognized + e.result.text;
          }

          if (reason == "RecognizedSpeech" && e.result.text) {
            this.lastRecognized += e.result.text;
            this.text = this.lastRecognized;
          }
        }
      }, {
        key: "stop",
        value: function stop() {
          this.recognizer.stopContinuousRecognitionAsync(stopRecognizer.bind(this), function (err) {
            stopRecognizer.bind(this);
            console.error(err);
          }.bind(this));

          function stopRecognizer() {
            this.recognizer.close();
            this.recognizer = undefined;
            console.log('stopped');
          }
        }
      }, {
        key: "textToSpeech",
        value: function textToSpeech() {
          var _this = this;

          this.speechConfig.speechSynthesisOutputFormat = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_1__["SpeechSynthesisOutputFormat"].Audio16Khz32KBitRateMonoMp3;
          this.synthesizer = new microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_1__["SpeechSynthesizer"](this.speechConfig, microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_1__["AudioConfig"].fromSpeakerOutput());
          this.synthesizer.speakTextAsync(this.text, function (result) {
            _this.synthesizer.close();
          }, function (error) {
            _this.synthesizer.close();

            window.alert(error);
          });
        }
      }]);

      return AzureSpeechToTextComponent;
    }();

    AzureSpeechToTextComponent.ɵfac = function AzureSpeechToTextComponent_Factory(t) {
      return new (t || AzureSpeechToTextComponent)();
    };

    AzureSpeechToTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AzureSpeechToTextComponent,
      selectors: [["app-azure-speech-to-text"]],
      decls: 12,
      vars: 5,
      consts: [[2, "text-align", "center"], [1, "main"], ["rows", "6", "placeholder", "Start speaking by clicking on the mic icon or Enter text and click Speak to listen to it", 1, "textarea", 3, "ngModel", "ngModelChange"], [1, "action-btns"], [1, "mic-icon"], ["icon", "microphone", 3, "title", "click"], ["class", "pulse-ring", 4, "ngIf"], [1, "speak"], [3, "click"], [1, "pulse-ring"]],
      template: function AzureSpeechToTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Azure speech to text and text to speech using Azure NPM module ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AzureSpeechToTextComponent_Template_textarea_ngModelChange_4_listener($event) {
            return ctx.text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AzureSpeechToTextComponent_Template_fa_icon_click_7_listener($event) {
            return ctx.speechToText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AzureSpeechToTextComponent_div_8_Template, 1, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AzureSpeechToTextComponent_Template_button_click_10_listener() {
            return ctx.textToSpeech();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Speak");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("icon-listening", ctx.recognizing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.tooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recognizing);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".main[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 50%;\n}\n\n.textarea[_ngcontent-%COMP%] {\n  padding: 13px 15px;\n  border-radius: 8px;\n  border: 2px solid #1a73e8;\n  outline: 0;\n  width: 100%;\n}\n\n.mic-icon[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n\n.mic-icon[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding: 10px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.icon-listening[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.speak[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.pulse-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  content: \"\";\n  width: 50px;\n  height: 50px;\n  border: 5px solid #d4d4ff;\n  border-radius: 50%;\n  -webkit-animation: pulsate infinite 2s;\n          animation: pulsate infinite 2s;\n}\n\n@-webkit-keyframes pulsate {\n  0% {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.2, 1.2);\n    opacity: 0;\n  }\n}\n\n@keyframes pulsate {\n  0% {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.2, 1.2);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXp1cmUtc3BlZWNoLXRvLXRleHQvSTpcXEtyaXNoIFByb2plY3RzXFxTcGVlY2hUb1RleHQvc3JjXFxhcHBcXGF6dXJlLXNwZWVjaC10by10ZXh0XFxhenVyZS1zcGVlY2gtdG8tdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXp1cmUtc3BlZWNoLXRvLXRleHQvYXp1cmUtc3BlZWNoLXRvLXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ0VKOztBRENBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLFVBQUE7RUNFTjtFREFFO0lBQ0ksMEJBQUE7SUFDQSxVQUFBO0VDRU47QUFDRjs7QURWQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxVQUFBO0VDRU47RURBRTtJQUNJLDBCQUFBO0lBQ0EsVUFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9henVyZS1zcGVlY2gtdG8tdGV4dC9henVyZS1zcGVlY2gtdG8tdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDEzcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYTczZTg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5taWMtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXHJcbn1cclxuXHJcbi5taWMtaWNvbiBmYS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaWNvbi1saXN0ZW5pbmcge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmFjdGlvbi1idG5zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnNwZWFrIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLnB1bHNlLXJpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZDRkNGZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzYXRlIGluZmluaXRlIDJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLm1haW4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnRleHRhcmVhIHtcbiAgcGFkZGluZzogMTNweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxYTczZTg7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWljLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWljLWljb24gZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaWNvbi1saXN0ZW5pbmcge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYWN0aW9uLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnNwZWFrIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnB1bHNlLXJpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjZDRkNGZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogcHVsc2F0ZSBpbmZpbml0ZSAycztcbn1cblxuQGtleWZyYW1lcyBwdWxzYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AzureSpeechToTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-azure-speech-to-text',
          templateUrl: './azure-speech-to-text.component.html',
          styleUrls: ['./azure-speech-to-text.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/google-speech-to-text/google-speech-to-text.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/google-speech-to-text/google-speech-to-text.component.ts ***!
    \**************************************************************************/

  /*! exports provided: GoogleSpeechToTextComponent */

  /***/
  function srcAppGoogleSpeechToTextGoogleSpeechToTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleSpeechToTextComponent", function () {
      return GoogleSpeechToTextComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var recorder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! recorder-js */
    "./node_modules/recorder-js/index.js");
    /* harmony import */


    var recorder_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recorder_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GoogleSpeechToTextComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
      }
    }

    var GoogleSpeechToTextComponent = /*#__PURE__*/function () {
      function GoogleSpeechToTextComponent(zone) {
        _classCallCheck(this, GoogleSpeechToTextComponent);

        this.zone = zone;
        this.title = 'Speech To Text';
        this.lastRecognized = '';
        this.recognizing = false;
        this.tooltip = "Start speech";
      }

      _createClass(GoogleSpeechToTextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return gapi.load("client", this.loadClient);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * Load the GAPI first
         */

      }, {
        key: "loadClient",
        value: function loadClient() {
          console.log("Loaded client googke");
          gapi.client.setApiKey('AIzaSyBfDbvjN4PWkVc8p5qGNlI7m1qntrxDTOI');
          return gapi.client.load("https://speech.googleapis.com/$discovery/rest?version=v1", "v1").then(function () {
            console.log("GAPI client loaded for API");
          }, function (err) {
            console.error("Error loading GAPI client for API", err);
          });
        }
        /**
         * Statrts the recording and auto stops after 10 secs
         */

      }, {
        key: "startRecording",
        value: function startRecording() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var stream;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.recognizing) {
                      _context2.next = 4;
                      break;
                    }

                    this.stopRecording();
                    _context2.next = 19;
                    break;

                  case 4:
                    try {
                      window.AudioContext = window.AudioContext;
                      navigator.getUserMedia = navigator.getUserMedia;
                      window.URL = window.URL || window.webkitURL; // Store the instance of AudioContext globally

                      this.audio_context = new AudioContext();
                      this.recorder = new recorder_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.audio_context, {
                        numChannels: 1
                      });
                      console.log('Audio context is ready !');
                    } catch (e) {
                      alert('No web audio support in this browser!');
                    } // Access the Microphone using the navigator.getUserMedia method to obtain a stream


                    _context2.prev = 5;
                    _context2.next = 8;
                    return navigator.mediaDevices.getUserMedia({
                      audio: true
                    });

                  case 8:
                    stream = _context2.sent;
                    this.recorder.init(stream);
                    this.audio_stream = stream;
                    this.recognizing = true;
                    _context2.next = 17;
                    break;

                  case 14:
                    _context2.prev = 14;
                    _context2.t0 = _context2["catch"](5);
                    console.log('Uh oh... unable to get stream...', _context2.t0);

                  case 17:
                    this.recorder.start().then(function () {
                      return console.log("Recording started");
                    })["catch"](function (err) {
                      return console.log('Not able to start recording', err);
                    });
                    this.timeOut = setTimeout(function () {
                      _this2.stopRecording();
                    }, 10000);

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[5, 14]]);
          }));
        }
        /**
         * Stops the recording and calls convertToBase64
         */

      }, {
        key: "stopRecording",
        value: function stopRecording() {
          var _this3 = this;

          console.log("Recording stoped"); // Clear timeouts if any

          clearTimeout(this.timeOut);
          this.recognizing = false;
          this.audio_stream.getAudioTracks()[0].stop();
          this.recorder.stop().then(function (_ref) {
            var blob = _ref.blob,
                buffer = _ref.buffer;

            _this3.convertToBase64(blob);
          });
        }
        /**
         * Converts the audio to Base64 encoded and
         * Calls the execute method
         * @param blob
         */

      }, {
        key: "convertToBase64",
        value: function convertToBase64(blob) {
          var _this4 = this;

          var reader = new FileReader();
          reader.readAsDataURL(blob);

          reader.onloadend = function () {
            var base64data = reader.result.split(',')[1];
            _this4.base64AudioFormat = base64data;

            _this4.execute();
          };
        }
        /**
         * Calls the google speech to text API
         */

      }, {
        key: "execute",
        value: function execute() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return gapi.client.speech.speech.recognize({
                      "resource": {
                        "audio": {
                          "content": this.base64AudioFormat
                        },
                        "config": {
                          "enableAutomaticPunctuation": true,
                          "encoding": "LINEAR16",
                          "languageCode": "en-US",
                          "sampleRateHertz": 44100,
                          "audioChannelCount": 2
                        }
                      }
                    });

                  case 2:
                    response = _context3.sent;
                    this.zone.run(function () {
                      var _a, _b, _c;

                      if (response && response.result && response.result.results && response.result.results[0] && response.result.results[0].alternatives[0].transcript) _this5.textOutput = (_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.result) === null || _a === void 0 ? void 0 : _a.results[0]) === null || _b === void 0 ? void 0 : _b.alternatives[0]) === null || _c === void 0 ? void 0 : _c.transcript;else alert("Sorry. Please try again");
                    });

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return GoogleSpeechToTextComponent;
    }();

    GoogleSpeechToTextComponent.ɵfac = function GoogleSpeechToTextComponent_Factory(t) {
      return new (t || GoogleSpeechToTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    GoogleSpeechToTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GoogleSpeechToTextComponent,
      selectors: [["app-google-speech-to-text"]],
      decls: 8,
      vars: 5,
      consts: [[2, "text-align", "center"], [1, "main"], ["rows", "6", "placeholder", "Start speaking by clicking on the mic icon", 1, "textarea", 3, "ngModel", "ngModelChange"], [1, "mic-icon"], ["icon", "microphone", 3, "title", "click"], ["class", "pulse-ring", 4, "ngIf"], [1, "pulse-ring"]],
      template: function GoogleSpeechToTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Google speech to text using Angular ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GoogleSpeechToTextComponent_Template_textarea_ngModelChange_4_listener($event) {
            return ctx.textOutput = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GoogleSpeechToTextComponent_Template_fa_icon_click_6_listener() {
            return ctx.startRecording();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GoogleSpeechToTextComponent_div_7_Template, 1, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.textOutput);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("icon-listening", ctx.recognizing);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx.tooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recognizing);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".main[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 50%;\n}\n\n.textarea[_ngcontent-%COMP%] {\n  padding: 13px 15px;\n  border-radius: 8px;\n  border: 2px solid #1a73e8;\n  outline: 0;\n  width: 100%;\n}\n\n.mic-icon[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n}\n\n.mic-icon[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding: 10px;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.icon-listening[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pulse-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  content: \"\";\n  width: 50px;\n  height: 50px;\n  border: 5px solid #d4d4ff;\n  border-radius: 50%;\n  -webkit-animation: pulsate infinite 2s;\n          animation: pulsate infinite 2s;\n}\n\n@-webkit-keyframes pulsate {\n  0% {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.2, 1.2);\n    opacity: 0;\n  }\n}\n\n@keyframes pulsate {\n  0% {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.2, 1.2);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlLXNwZWVjaC10by10ZXh0L0k6XFxLcmlzaCBQcm9qZWN0c1xcU3BlZWNoVG9UZXh0L3NyY1xcYXBwXFxnb29nbGUtc3BlZWNoLXRvLXRleHRcXGdvb2dsZS1zcGVlY2gtdG8tdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ29vZ2xlLXNwZWVjaC10by10ZXh0L2dvb2dsZS1zcGVlY2gtdG8tdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtBQ0FKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNMSjs7QURRQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxVQUFBO0VDTE47RURPRTtJQUNJLDBCQUFBO0lBQ0EsVUFBQTtFQ0xOO0FBQ0Y7O0FESEE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsVUFBQTtFQ0xOO0VET0U7SUFDSSwwQkFBQTtJQUNBLFVBQUE7RUNMTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ29vZ2xlLXNwZWVjaC10by10ZXh0L2dvb2dsZS1zcGVlY2gtdG8tdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDEzcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYTczZTg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5taWMtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5taWMtaWNvbiBmYS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaWNvbi1saXN0ZW5pbmcge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLy8gLm1pYy1pY29uIGZhLWljb246aG92ZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRmZjtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG5cclxuLnB1bHNlLXJpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZDRkNGZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzYXRlIGluZmluaXRlIDJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLm1haW4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnRleHRhcmVhIHtcbiAgcGFkZGluZzogMTNweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxYTczZTg7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWljLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubWljLWljb24gZmEtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaWNvbi1saXN0ZW5pbmcge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucHVsc2UtcmluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNkNGQ0ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBwdWxzYXRlIGluZmluaXRlIDJzO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleSpeechToTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-google-speech-to-text',
          templateUrl: './google-speech-to-text.component.html',
          styleUrls: ['./google-speech-to-text.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! I:\Krish Projects\SpeechToText\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!***********************************!*\
    !*** https-proxy-agent (ignored) ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!******************************************!*\
    !*** ../../external/ocsp/ocsp (ignored) ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map