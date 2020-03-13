(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("./foundation.util.touch"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.keyboard", "./foundation.util.mediaQuery", "./foundation.util.motion", "./foundation.util.touch", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.reveal"] = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("./foundation.util.touch"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.reveal"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.mediaQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.touch"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE__foundation_util_touch__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 14);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./foundation.core":
      /*!****************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core","commonjs":"./foundation.core","commonjs2":"./foundation.core"} ***!
        \****************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core__;
        /***/
      },

      /***/
      "./foundation.util.keyboard":
      /*!****************************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.keyboard"],"amd":"./foundation.util.keyboard","commonjs":"./foundation.util.keyboard","commonjs2":"./foundation.util.keyboard"} ***!
        \****************************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__;
        /***/
      },

      /***/
      "./foundation.util.mediaQuery":
      /*!************************************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.mediaQuery"],"amd":"./foundation.util.mediaQuery","commonjs":"./foundation.util.mediaQuery","commonjs2":"./foundation.util.mediaQuery"} ***!
        \************************************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__;
        /***/
      },

      /***/
      "./foundation.util.motion":
      /*!********************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.motion"],"amd":"./foundation.util.motion","commonjs":"./foundation.util.motion","commonjs2":"./foundation.util.motion"} ***!
        \********************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__;
        /***/
      },

      /***/
      "./foundation.util.touch":
      /*!****************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.touch"],"amd":"./foundation.util.touch","commonjs":"./foundation.util.touch","commonjs2":"./foundation.util.touch"} ***!
        \****************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_touch__;
        /***/
      },

      /***/
      "./js/entries/plugins/foundation.reveal.js":
      /*!*************************************************!*\
        !*** ./js/entries/plugins/foundation.reveal.js ***!
        \*************************************************/

      /*! exports provided: Foundation, Reveal */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./foundation.core */
        "./foundation.core");
        /* harmony import */


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Foundation", function () {
          return _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"];
        });
        /* harmony import */


        var _foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.reveal */
        "./js/foundation.reveal.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Reveal", function () {
          return _foundation_reveal__WEBPACK_IMPORTED_MODULE_1__["Reveal"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__["Reveal"], 'Reveal');
        /***/

      },

      /***/
      "./js/foundation.reveal.js":
      /*!*********************************!*\
        !*** ./js/foundation.reveal.js ***!
        \*********************************/

      /*! exports provided: Reveal */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Reveal", function () {
          return Reveal;
        });
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! jquery */
        "jquery");
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.plugin */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.util.mediaQuery */
        "./foundation.util.mediaQuery");
        /* harmony import */


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.util.motion */
        "./foundation.util.motion");
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */


        var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./foundation.util.triggers */
        "./js/foundation.util.triggers.js");
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./foundation.util.touch */
        "./foundation.util.touch");
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__);

        function _typeof(obj) {
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          }

          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }

          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }

          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

          return _setPrototypeOf(o, p);
        }
        /**
         * Reveal module.
         * @module foundation.reveal
         * @requires foundation.util.keyboard
         * @requires foundation.util.touch
         * @requires foundation.util.triggers
         * @requires foundation.util.mediaQuery
         * @requires foundation.util.motion if using animations
         */


        var Reveal = /*#__PURE__*/function (_Plugin) {
          _inherits(Reveal, _Plugin);

          function Reveal() {
            _classCallCheck(this, Reveal);

            return _possibleConstructorReturn(this, _getPrototypeOf(Reveal).apply(this, arguments));
          }

          _createClass(Reveal, [{
            key: "_setup",

            /**
             * Creates a new instance of Reveal.
             * @class
             * @name Reveal
             * @param {jQuery} element - jQuery object to use for the modal.
             * @param {Object} options - optional parameters.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Reveal.defaults, this.$element.data(), options);
              this.className = 'Reveal'; // ie9 back compat

              this._init(); // Touch and Triggers init are idempotent, just need to make sure they are initialized


              _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Reveal', {
                'ESCAPE': 'close'
              });
            }
            /**
             * Initializes the modal by adding the overlay and close buttons, (if selected).
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              var _this2 = this;

              _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

              this.id = this.$element.attr('id');
              this.isActive = false;
              this.cached = {
                mq: _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].current
              };
              this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id, "\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat(this.id, "\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat(this.id, "\"]"));
              this.$anchor.attr({
                'aria-controls': this.id,
                'aria-haspopup': true,
                'tabindex': 0
              });

              if (this.options.fullScreen || this.$element.hasClass('full')) {
                this.options.fullScreen = true;
                this.options.overlay = false;
              }

              if (this.options.overlay && !this.$overlay) {
                this.$overlay = this._makeOverlay(this.id);
              }

              this.$element.attr({
                'role': 'dialog',
                'aria-hidden': true,
                'data-yeti-box': this.id,
                'data-resize': this.id
              });

              if (this.$overlay) {
                this.$element.detach().appendTo(this.$overlay);
              } else {
                this.$element.detach().appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));
                this.$element.addClass('without-overlay');
              }

              this._events();

              if (this.options.deepLink && window.location.hash === "#".concat(this.id)) {
                this.onLoadListener = Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
                  return _this2.open();
                });
              }
            }
            /**
             * Creates an overlay div to display behind the modal.
             * @private
             */

          }, {
            key: "_makeOverlay",
            value: function _makeOverlay() {
              var additionalOverlayClasses = '';

              if (this.options.additionalOverlayClasses) {
                additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
              }

              return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
            }
            /**
             * Updates position of modal
             * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
             * @private
             */

          }, {
            key: "_updatePosition",
            value: function _updatePosition() {
              var width = this.$element.outerWidth();
              var outerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
              var height = this.$element.outerHeight();
              var outerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
              var left,
                  top = null;

              if (this.options.hOffset === 'auto') {
                left = parseInt((outerWidth - width) / 2, 10);
              } else {
                left = parseInt(this.options.hOffset, 10);
              }

              if (this.options.vOffset === 'auto') {
                if (height > outerHeight) {
                  top = parseInt(Math.min(100, outerHeight / 10), 10);
                } else {
                  top = parseInt((outerHeight - height) / 4, 10);
                }
              } else if (this.options.vOffset !== null) {
                top = parseInt(this.options.vOffset, 10);
              }

              if (top !== null) {
                this.$element.css({
                  top: top + 'px'
                });
              } // only worry about left if we don't have an overlay or we have a horizontal offset,
              // otherwise we're perfectly in the middle


              if (!this.$overlay || this.options.hOffset !== 'auto') {
                this.$element.css({
                  left: left + 'px'
                });
                this.$element.css({
                  margin: '0px'
                });
              }
            }
            /**
             * Adds event handlers for the modal.
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              var _this3 = this;

              var _this = this;

              this.$element.on({
                'open.zf.trigger': this.open.bind(this),
                'close.zf.trigger': function closeZfTrigger(event, $element) {
                  if (event.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('[data-closable]')[0] === $element) {
                    // only close reveal when it's explicitly called
                    return _this3.close.apply(_this3);
                  }
                },
                'toggle.zf.trigger': this.toggle.bind(this),
                'resizeme.zf.trigger': function resizemeZfTrigger() {
                  _this._updatePosition();
                }
              });

              if (this.options.closeOnClick && this.options.overlay) {
                this.$overlay.off('.zf.reveal').on('click.zf.dropdown tap.zf.dropdown', function (e) {
                  if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {
                    return;
                  }

                  _this.close();
                });
              }

              if (this.options.deepLink) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this));
              }
            }
            /**
             * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
             * @private
             */

          }, {
            key: "_handleState",
            value: function _handleState(e) {
              if (window.location.hash === '#' + this.id && !this.isActive) {
                this.open();
              } else {
                this.close();
              }
            }
            /**
            * Disables the scroll when Reveal is shown to prevent the background from shifting
            * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
            */

          }, {
            key: "_disableScroll",
            value: function _disableScroll(scrollTop) {
              scrollTop = scrollTop || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();

              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", -scrollTop);
              }
            }
            /**
            * Reenables the scroll when Reveal closes
            * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
            */

          }, {
            key: "_enableScroll",
            value: function _enableScroll(scrollTop) {
              scrollTop = scrollTop || parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"));

              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top", "");
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(-scrollTop);
              }
            }
            /**
             * Opens the modal controlled by `this.$anchor`, and closes all others by default.
             * @function
             * @fires Reveal#closeme
             * @fires Reveal#open
             */

          }, {
            key: "open",
            value: function open() {
              var _this4 = this; // either update or replace browser history


              var hash = "#".concat(this.id);

              if (this.options.deepLink && window.location.hash !== hash) {
                if (window.history.pushState) {
                  if (this.options.updateHistory) {
                    window.history.pushState({}, '', hash);
                  } else {
                    window.history.replaceState({}, '', hash);
                  }
                } else {
                  window.location.hash = hash;
                }
              } // Remember anchor that opened it to set focus back later, have general anchors as fallback


              this.$activeAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement).is(this.$anchor) ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement) : this.$anchor;
              this.isActive = true; // Make elements invisible, but remove display: none so we can get size and positioning

              this.$element.css({
                'visibility': 'hidden'
              }).show().scrollTop(0);

              if (this.options.overlay) {
                this.$overlay.css({
                  'visibility': 'hidden'
                }).show();
              }

              this._updatePosition();

              this.$element.hide().css({
                'visibility': ''
              });

              if (this.$overlay) {
                this.$overlay.css({
                  'visibility': ''
                }).hide();

                if (this.$element.hasClass('fast')) {
                  this.$overlay.addClass('fast');
                } else if (this.$element.hasClass('slow')) {
                  this.$overlay.addClass('slow');
                }
              }

              if (!this.options.multipleOpened) {
                /**
                 * Fires immediately before the modal opens.
                 * Closes any other modals that are currently open
                 * @event Reveal#closeme
                 */
                this.$element.trigger('closeme.zf.reveal', this.id);
              }

              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
                this._disableScroll();
              }

              var _this = this; // Motion UI method of reveal


              if (this.options.animationIn) {
                var afterAnimation = function afterAnimation() {
                  _this.$element.attr({
                    'aria-hidden': false,
                    'tabindex': -1
                  }).focus();

                  _this._addGlobalClasses();

                  _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(_this.$element);
                };

                if (this.options.overlay) {
                  _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateIn(this.$overlay, 'fade-in');
                }

                _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateIn(this.$element, this.options.animationIn, function () {
                  if (_this4.$element) {
                    // protect against object having been removed
                    _this4.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].findFocusable(_this4.$element);
                    afterAnimation();
                  }
                });
              } // jQuery method of reveal
              else {
                  if (this.options.overlay) {
                    this.$overlay.show(0);
                  }

                  this.$element.show(this.options.showDelay);
                } // handle accessibility


              this.$element.attr({
                'aria-hidden': false,
                'tabindex': -1
              }).focus();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(this.$element);

              this._addGlobalClasses();

              this._addGlobalListeners();
              /**
               * Fires when the modal has successfully opened.
               * @event Reveal#open
               */


              this.$element.trigger('open.zf.reveal');
            }
            /**
             * Adds classes and listeners on document required by open modals.
             *
             * The following classes are added and updated:
             * - `.is-reveal-open` - Prevents the scroll on document
             * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
             *                       scroll was not disabled. This prevent a "shift" of the page content due
             *                       the scrollbar disappearing when the modal opens.
             *
             * @private
             */

          }, {
            key: "_addGlobalClasses",
            value: function _addGlobalClasses() {
              var updateScrollbarClass = function updateScrollbarClass() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('zf-has-scroll', !!(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()));
              };

              this.$element.on('resizeme.zf.trigger.revealScrollbarListener', function () {
                return updateScrollbarClass();
              });
              updateScrollbarClass();
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('is-reveal-open');
            }
            /**
             * Removes classes and listeners on document that were required by open modals.
             * @private
             */

          }, {
            key: "_removeGlobalClasses",
            value: function _removeGlobalClasses() {
              this.$element.off('resizeme.zf.trigger.revealScrollbarListener');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('is-reveal-open');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zf-has-scroll');
            }
            /**
             * Adds extra event handlers for the body and window if necessary.
             * @private
             */

          }, {
            key: "_addGlobalListeners",
            value: function _addGlobalListeners() {
              var _this = this;

              if (!this.$element) {
                return;
              } // If we're in the middle of cleanup, don't freak out


              this.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].findFocusable(this.$element);

              if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.dropdown tap.zf.dropdown', function (e) {
                  if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(document, e.target)) {
                    return;
                  }

                  _this.close();
                });
              }

              if (this.options.closeOnEsc) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown.zf.reveal', function (e) {
                  _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Reveal', {
                    close: function close() {
                      if (_this.options.closeOnEsc) {
                        _this.close();
                      }
                    }
                  });
                });
              }
            }
            /**
             * Closes the modal.
             * @function
             * @fires Reveal#closed
             */

          }, {
            key: "close",
            value: function close() {
              if (!this.isActive || !this.$element.is(':visible')) {
                return false;
              }

              var _this = this; // Motion UI method of hiding


              if (this.options.animationOut) {
                if (this.options.overlay) {
                  _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateOut(this.$overlay, 'fade-out');
                }

                _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__["Motion"].animateOut(this.$element, this.options.animationOut, finishUp);
              } // jQuery method of hiding
              else {
                  this.$element.hide(this.options.hideDelay);

                  if (this.options.overlay) {
                    this.$overlay.hide(0, finishUp);
                  } else {
                    finishUp();
                  }
                } // Conditionals to remove extra event listeners added on open


              if (this.options.closeOnEsc) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('keydown.zf.reveal');
              }

              if (!this.options.overlay && this.options.closeOnClick) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.dropdown tap.zf.dropdown');
              }

              this.$element.off('keydown.zf.reveal');

              function finishUp() {
                // Get the current top before the modal is closed and restore the scroll after.
                // TODO: use component properties instead of HTML properties
                // See https://github.com/zurb/foundation-sites/pull/10786
                var scrollTop = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").css("top"));

                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
                  _this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

                }

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(_this.$element);

                _this.$element.attr('aria-hidden', true);

                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
                  _this._enableScroll(scrollTop);
                }
                /**
                * Fires when the modal is done closing.
                * @event Reveal#closed
                */


                _this.$element.trigger('closed.zf.reveal');
              }
              /**
              * Resets the modal content
              * This prevents a running video to keep going in the background
              */


              if (this.options.resetOnClose) {
                this.$element.html(this.$element.html());
              }

              this.isActive = false; // If deepLink and we did not switched to an other modal...

              if (_this.options.deepLink && window.location.hash === "#".concat(this.id)) {
                // Remove the history hash
                if (window.history.replaceState) {
                  var urlWithoutHash = window.location.pathname + window.location.search;

                  if (this.options.updateHistory) {
                    window.history.pushState({}, '', urlWithoutHash); // remove the hash
                  } else {
                    window.history.replaceState('', document.title, urlWithoutHash);
                  }
                } else {
                  window.location.hash = '';
                }
              }

              this.$activeAnchor.focus();
            }
            /**
             * Toggles the open/closed state of a modal.
             * @function
             */

          }, {
            key: "toggle",
            value: function toggle() {
              if (this.isActive) {
                this.close();
              } else {
                this.open();
              }
            }
          }, {
            key: "_destroy",

            /**
             * Destroys an instance of a modal.
             * @function
             */
            value: function _destroy() {
              if (this.options.overlay) {
                this.$element.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()

                this.$overlay.hide().off().remove();
              }

              this.$element.hide().off();
              this.$anchor.off('.zf');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(".zf.reveal:".concat(this.id));
              if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);

              if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
                this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

              }
            }
          }]);

          return Reveal;
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

        Reveal.defaults = {
          /**
           * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
           * @option
           * @type {string}
           * @default ''
           */
          animationIn: '',

          /**
           * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
           * @option
           * @type {string}
           * @default ''
           */
          animationOut: '',

          /**
           * Time, in ms, to delay the opening of a modal after a click if no animation used.
           * @option
           * @type {number}
           * @default 0
           */
          showDelay: 0,

          /**
           * Time, in ms, to delay the closing of a modal after a click if no animation used.
           * @option
           * @type {number}
           * @default 0
           */
          hideDelay: 0,

          /**
           * Allows a click on the body/overlay to close the modal.
           * @option
           * @type {boolean}
           * @default true
           */
          closeOnClick: true,

          /**
           * Allows the modal to close if the user presses the `ESCAPE` key.
           * @option
           * @type {boolean}
           * @default true
           */
          closeOnEsc: true,

          /**
           * If true, allows multiple modals to be displayed at once.
           * @option
           * @type {boolean}
           * @default false
           */
          multipleOpened: false,

          /**
           * Distance, in pixels, the modal should push down from the top of the screen.
           * @option
           * @type {number|string}
           * @default auto
           */
          vOffset: 'auto',

          /**
           * Distance, in pixels, the modal should push in from the side of the screen.
           * @option
           * @type {number|string}
           * @default auto
           */
          hOffset: 'auto',

          /**
           * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
           * @option
           * @type {boolean}
           * @default false
           */
          fullScreen: false,

          /**
           * Allows the modal to generate an overlay div, which will cover the view when modal opens.
           * @option
           * @type {boolean}
           * @default true
           */
          overlay: true,

          /**
           * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
           * @option
           * @type {boolean}
           * @default false
           */
          resetOnClose: false,

          /**
           * Link the location hash to the modal.
           * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
           * @option
           * @type {boolean}
           * @default false
           */
          deepLink: false,

          /**
           * If `deepLink` is enabled, update the browser history with the open modal
           * @option
           * @default false
           */
          updateHistory: false,

          /**
          * Allows the modal to append to custom div.
          * @option
          * @type {string}
          * @default "body"
          */
          appendTo: "body",

          /**
           * Allows adding additional class names to the reveal overlay.
           * @option
           * @type {string}
           * @default ''
           */
          additionalOverlayClasses: ''
        };
        /***/
      },

      /***/
      "./js/foundation.util.triggers.js":
      /*!****************************************!*\
        !*** ./js/foundation.util.triggers.js ***!
        \****************************************/

      /*! exports provided: Triggers */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Triggers", function () {
          return Triggers;
        });
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! jquery */
        "jquery");
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.motion */
        "./foundation.util.motion");
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__);

        function _typeof(obj) {
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        var MutationObserver = function () {
          var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];

          for (var i = 0; i < prefixes.length; i++) {
            if ("".concat(prefixes[i], "MutationObserver") in window) {
              return window["".concat(prefixes[i], "MutationObserver")];
            }
          }

          return false;
        }();

        var triggers = function triggers(el, type) {
          el.data(type).split(' ').forEach(function (id) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler']("".concat(type, ".zf.trigger"), [el]);
          });
        };

        var Triggers = {
          Listeners: {
            Basic: {},
            Global: {}
          },
          Initializers: {}
        };
        Triggers.Listeners.Basic = {
          openListener: function openListener() {
            triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');
          },
          closeListener: function closeListener() {
            var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');

            if (id) {
              triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');
            }
          },
          toggleListener: function toggleListener() {
            var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');

            if (id) {
              triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');
            }
          },
          closeableListener: function closeableListener(e) {
            var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable'); // Only close the first closable element. See https://git.io/zf-7833

            e.stopPropagation();

            if (animation !== '') {
              _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Motion"].animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');
              });
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');
            }
          },
          toggleFocusListener: function toggleFocusListener() {
            var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);
          }
        }; // Elements with [data-open] will reveal a plugin that supports it when clicked.

        Triggers.Initializers.addOpenListener = function ($elem) {
          $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
          $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
        }; // Elements with [data-close] will close a plugin that supports it when clicked.
        // If used without a value on [data-close], the event will bubble, allowing it to close a parent component.


        Triggers.Initializers.addCloseListener = function ($elem) {
          $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
          $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
        }; // Elements with [data-toggle] will toggle a plugin that supports it when clicked.


        Triggers.Initializers.addToggleListener = function ($elem) {
          $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
          $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
        }; // Elements with [data-closable] will respond to close.zf.trigger events.


        Triggers.Initializers.addCloseableListener = function ($elem) {
          $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
          $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
        }; // Elements with [data-toggle-focus] will respond to coming in and out of focus


        Triggers.Initializers.addToggleFocusListener = function ($elem) {
          $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
          $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
        }; // More Global/complex listeners and triggers


        Triggers.Listeners.Global = {
          resizeListener: function resizeListener($nodes) {
            if (!MutationObserver) {
              //fallback for IE 9
              $nodes.each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');
              });
            } //trigger all listening elements and signal a resize event


            $nodes.attr('data-events', "resize");
          },
          scrollListener: function scrollListener($nodes) {
            if (!MutationObserver) {
              //fallback for IE 9
              $nodes.each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');
              });
            } //trigger all listening elements and signal a scroll event


            $nodes.attr('data-events', "scroll");
          },
          closeMeListener: function closeMeListener(e, pluginId) {
            var plugin = e.namespace.split('.')[0];
            var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-".concat(plugin, "]")).not("[data-yeti-box=\"".concat(pluginId, "\"]"));
            plugins.each(function () {
              var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

              _this.triggerHandler('close.zf.trigger', [_this]);
            });
          } // Global, parses whole document.

        };

        Triggers.Initializers.addClosemeListener = function (pluginName) {
          var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),
              plugNames = ['dropdown', 'tooltip', 'reveal'];

          if (pluginName) {
            if (typeof pluginName === 'string') {
              plugNames.push(pluginName);
            } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {
              plugNames = plugNames.concat(pluginName);
            } else {
              console.error('Plugin names must be strings');
            }
          }

          if (yetiBoxes.length) {
            var listeners = plugNames.map(function (name) {
              return "closeme.zf.".concat(name);
            }).join(' ');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
          }
        };

        function debounceGlobalListener(debounce, trigger, listener) {
          var timer,
              args = Array.prototype.slice.call(arguments, 3);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(trigger).on(trigger, function (e) {
            if (timer) {
              clearTimeout(timer);
            }

            timer = setTimeout(function () {
              listener.apply(null, args);
            }, debounce || 10); //default time to emit scroll event
          });
        }

        Triggers.Initializers.addResizeListener = function (debounce) {
          var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');

          if ($nodes.length) {
            debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
          }
        };

        Triggers.Initializers.addScrollListener = function (debounce) {
          var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');

          if ($nodes.length) {
            debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
          }
        };

        Triggers.Initializers.addMutationEventsListener = function ($elem) {
          if (!MutationObserver) {
            return false;
          }

          var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]'); //element callback

          var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
            var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target); //trigger the event handler for the element depending on type

            switch (mutationRecordsList[0].type) {
              case "attributes":
                if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
                  $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
                }

                if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
                  $target.triggerHandler('resizeme.zf.trigger', [$target]);
                }

                if (mutationRecordsList[0].attributeName === "style") {
                  $target.closest("[data-mutate]").attr("data-events", "mutate");
                  $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
                }

                break;

              case "childList":
                $target.closest("[data-mutate]").attr("data-events", "mutate");
                $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
                break;

              default:
                return false;
              //nothing
            }
          };

          if ($nodes.length) {
            //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
            for (var i = 0; i <= $nodes.length - 1; i++) {
              var elementObserver = new MutationObserver(listeningElementsMutation);
              elementObserver.observe($nodes[i], {
                attributes: true,
                childList: true,
                characterData: false,
                subtree: true,
                attributeFilter: ["data-events", "style"]
              });
            }
          }
        };

        Triggers.Initializers.addSimpleListeners = function () {
          var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
          Triggers.Initializers.addOpenListener($document);
          Triggers.Initializers.addCloseListener($document);
          Triggers.Initializers.addToggleListener($document);
          Triggers.Initializers.addCloseableListener($document);
          Triggers.Initializers.addToggleFocusListener($document);
        };

        Triggers.Initializers.addGlobalListeners = function () {
          var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
          Triggers.Initializers.addMutationEventsListener($document);
          Triggers.Initializers.addResizeListener();
          Triggers.Initializers.addScrollListener();
          Triggers.Initializers.addClosemeListener();
        };

        Triggers.init = function ($, Foundation) {
          Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])($(window), function () {
            if ($.triggersInitialized !== true) {
              Triggers.Initializers.addSimpleListeners();
              Triggers.Initializers.addGlobalListeners();
              $.triggersInitialized = true;
            }
          });

          if (Foundation) {
            Foundation.Triggers = Triggers; // Legacy included to be backwards compatible for now.

            Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
          }
        };
        /***/

      },

      /***/
      14:
      /*!*******************************************************!*\
        !*** multi ./js/entries/plugins/foundation.reveal.js ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.reveal.js */
        "./js/entries/plugins/foundation.reveal.js");
        /***/
      },

      /***/
      "jquery":
      /*!********************************************************************************************!*\
        !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
        \********************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;
        /***/
      }
      /******/

    })
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ucmV2ZWFsLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnJldmVhbC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlJldmVhbCIsImVsZW1lbnQiLCJvcHRpb25zIiwiJCIsIlRvdWNoIiwiVHJpZ2dlcnMiLCJLZXlib2FyZCIsIk1lZGlhUXVlcnkiLCJtcSIsImN1cnJlbnQiLCJpZCIsIndpbmRvdyIsIm9uTG9hZCIsImFkZGl0aW9uYWxPdmVybGF5Q2xhc3NlcyIsIndpZHRoIiwib3V0ZXJXaWR0aCIsImhlaWdodCIsIm91dGVySGVpZ2h0IiwidG9wIiwibGVmdCIsInBhcnNlSW50IiwiTWF0aCIsIm1hcmdpbiIsIl90aGlzIiwiZXZlbnQiLCJlIiwic2Nyb2xsVG9wIiwiaGFzaCIsImRvY3VtZW50IiwiYWZ0ZXJBbmltYXRpb24iLCJNb3Rpb24iLCJ1cGRhdGVTY3JvbGxiYXJDbGFzcyIsImNsb3NlIiwiZmluaXNoVXAiLCJ1cmxXaXRob3V0SGFzaCIsIlBsdWdpbiIsImFuaW1hdGlvbkluIiwiYW5pbWF0aW9uT3V0Iiwic2hvd0RlbGF5IiwiaGlkZURlbGF5IiwiY2xvc2VPbkNsaWNrIiwiY2xvc2VPbkVzYyIsIm11bHRpcGxlT3BlbmVkIiwidk9mZnNldCIsImhPZmZzZXQiLCJmdWxsU2NyZWVuIiwib3ZlcmxheSIsInJlc2V0T25DbG9zZSIsImRlZXBMaW5rIiwidXBkYXRlSGlzdG9yeSIsImFwcGVuZFRvIiwiTXV0YXRpb25PYnNlcnZlciIsInByZWZpeGVzIiwiaSIsInRyaWdnZXJzIiwiZWwiLCJ0eXBlIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwidG9nZ2xlTGlzdGVuZXIiLCJjbG9zZWFibGVMaXN0ZW5lciIsImFuaW1hdGlvbiIsInRvZ2dsZUZvY3VzTGlzdGVuZXIiLCIkZWxlbSIsInJlc2l6ZUxpc3RlbmVyIiwiJG5vZGVzIiwic2Nyb2xsTGlzdGVuZXIiLCJjbG9zZU1lTGlzdGVuZXIiLCJwbHVnaW4iLCJwbHVnaW5zIiwieWV0aUJveGVzIiwicGx1Z05hbWVzIiwicGx1Z2luTmFtZSIsImNvbnNvbGUiLCJsaXN0ZW5lcnMiLCJhcmdzIiwiQXJyYXkiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJsaXN0ZW5lciIsImRlYm91bmNlIiwiZGVib3VuY2VHbG9iYWxMaXN0ZW5lciIsImxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24iLCIkdGFyZ2V0IiwibXV0YXRpb25SZWNvcmRzTGlzdCIsImVsZW1lbnRPYnNlcnZlciIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsImF0dHJpYnV0ZUZpbHRlciIsIiRkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDhCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsNEJBQUEsRUFBQSw4QkFBQSxFQUFBLDBCQUFBLEVBQUEseUJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsOEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHlCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsbUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSx3QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSx1QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLHFEQUFBLEVBQUEsdURBQUEsRUFBQSxtREFBQSxFQUFBLGtEQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtBQUFpRCxVQUFBLEtBQUEsRUFBQTtBQUFqRCxTQUFBO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxRQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUE7QUFBeUMsVUFBQSxVQUFBLEVBQUEsSUFBekM7QUFBeUMsVUFBQSxLQUFBLEVBQUE7QUFBekMsU0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsSUFBQSxRQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEdBQUEsRUFBQTtBQUFnSCxpQkFBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJLENBQUE7QUFDQTs7QUFBQSxlQUFBLEVBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsTUFBQSxHQUFBLE1BQUEsSUFBQSxNQUFBLENBQUEsVUFBQTtBQUNBO0FBQUEsaUJBQUEsVUFBQSxHQUFBO0FBQTJCLGlCQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUE7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBLGlCQUFBLGdCQUFBLEdBQUE7QUFBaUMsaUJBQUEsTUFBQTtBQUFlLFNBRmhEO0FBR0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUE7QUFDQTs7O0FBQUEsZUFBQSxNQUFBO0FBQ0E7QUFBQSxPQU5BOzs7QUFRQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQTtBQUFzRCxlQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxDQUFBO0FBQStELE9BQXJIOzs7QUFFQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7QUFBQSxhQUFBLG1CQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsNENBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLHFEQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSx1REFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsbURBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtEQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsNkNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSwrQ0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLCtDQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQTs7QUNHQUEsUUFBQUEsNkNBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE1BQUFBLENBQWtCQywrQ0FBQUEsQ0FBbEJELFFBQWtCQyxDQUFsQkQsRUFBQUEsUUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsUUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxNQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLG9EQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSw0REFBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsb0RBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHNEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLG9DQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSw4REFBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsc0RBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHdEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFB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LENBQUFBLG1EQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxDQUFBQSxDQUFPVCxDQUFDLENBQUYsTUFBRSxDQUFSUyxFQUFrQixZQUFZO0FBQzVCLGdCQUFJVCxDQUFDLENBQURBLG1CQUFBQSxLQUFKLElBQUEsRUFBb0M7QUFDbENFLGNBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBO0FBQ0FBLGNBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBO0FBQ0FGLGNBQUFBLENBQUMsQ0FBREEsbUJBQUFBLEdBQUFBLElBQUFBO0FBQ0Q7QUFMSFMsV0FBQUE7O0FBUUEsY0FBQSxVQUFBLEVBQWU7QUFDYmIsWUFBQUEsVUFBVSxDQUFWQSxRQUFBQSxHQURhLFFBQ2JBLENBRGEsQ0FFYjs7QUFDQUEsWUFBQUEsVUFBVSxDQUFWQSxRQUFBQSxHQUFzQk0sUUFBUSxDQUFSQSxZQUFBQSxDQUF0Qk4sa0JBQUFBO0FBQ0Q7QUFiSE0sU0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUEEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtDQUFBOzs7Ozs7QU5VQTtDQVZBIiwiZmlsZSI6ImZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLnRvdWNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwudG91Y2hcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5yZXZlYWxcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLnRvdWNoXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSA9IHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSB8fCB7fSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5yZXZlYWxcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm1vdGlvblwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLnRvdWNoXCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9rZXlib2FyZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbWVkaWFRdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbW90aW9uX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF90b3VjaF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgUmV2ZWFsIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5yZXZlYWwnO1xuRm91bmRhdGlvbi5wbHVnaW4oUmV2ZWFsLCAnUmV2ZWFsJyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIFJldmVhbCB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnknO1xuaW1wb3J0IHsgTW90aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uJztcbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuaW1wb3J0IHsgVG91Y2ggfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC50b3VjaCdcblxuLyoqXG4gKiBSZXZlYWwgbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLnJldmVhbFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50b3VjaFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50cmlnZ2Vyc1xuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm1vdGlvbiBpZiB1c2luZyBhbmltYXRpb25zXG4gKi9cblxuY2xhc3MgUmV2ZWFsIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmV2ZWFsLlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgUmV2ZWFsXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byB1c2UgZm9yIHRoZSBtb2RhbC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25hbCBwYXJhbWV0ZXJzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgUmV2ZWFsLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnUmV2ZWFsJzsgLy8gaWU5IGJhY2sgY29tcGF0XG4gICAgdGhpcy5faW5pdCgpO1xuXG4gICAgLy8gVG91Y2ggYW5kIFRyaWdnZXJzIGluaXQgYXJlIGlkZW1wb3RlbnQsIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgdGhleSBhcmUgaW5pdGlhbGl6ZWRcbiAgICBUb3VjaC5pbml0KCQpO1xuICAgIFRyaWdnZXJzLmluaXQoJCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignUmV2ZWFsJywge1xuICAgICAgJ0VTQ0FQRSc6ICdjbG9zZScsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZGFsIGJ5IGFkZGluZyB0aGUgb3ZlcmxheSBhbmQgY2xvc2UgYnV0dG9ucywgKGlmIHNlbGVjdGVkKS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIE1lZGlhUXVlcnkuX2luaXQoKTtcbiAgICB0aGlzLmlkID0gdGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpO1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNhY2hlZCA9IHttcTogTWVkaWFRdWVyeS5jdXJyZW50fTtcblxuICAgIHRoaXMuJGFuY2hvciA9ICQoYFtkYXRhLW9wZW49XCIke3RoaXMuaWR9XCJdYCkubGVuZ3RoID8gJChgW2RhdGEtb3Blbj1cIiR7dGhpcy5pZH1cIl1gKSA6ICQoYFtkYXRhLXRvZ2dsZT1cIiR7dGhpcy5pZH1cIl1gKTtcbiAgICB0aGlzLiRhbmNob3IuYXR0cih7XG4gICAgICAnYXJpYS1jb250cm9scyc6IHRoaXMuaWQsXG4gICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAndGFiaW5kZXgnOiAwXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmZ1bGxTY3JlZW4gfHwgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZnVsbCcpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZnVsbFNjcmVlbiA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMub3ZlcmxheSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJsYXkgJiYgIXRoaXMuJG92ZXJsYXkpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkgPSB0aGlzLl9tYWtlT3ZlcmxheSh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgICAncm9sZSc6ICdkaWFsb2cnLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICAnZGF0YS15ZXRpLWJveCc6IHRoaXMuaWQsXG4gICAgICAgICdkYXRhLXJlc2l6ZSc6IHRoaXMuaWRcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuJG92ZXJsYXkpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZGV0YWNoKCkuYXBwZW5kVG8odGhpcy4kb3ZlcmxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZGV0YWNoKCkuYXBwZW5kVG8oJCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ3dpdGhvdXQtb3ZlcmxheScpO1xuICAgIH1cbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRlZXBMaW5rICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAoIGAjJHt0aGlzLmlkfWApKSB7XG4gICAgICB0aGlzLm9uTG9hZExpc3RlbmVyID0gb25Mb2FkKCQod2luZG93KSwgKCkgPT4gdGhpcy5vcGVuKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG92ZXJsYXkgZGl2IHRvIGRpc3BsYXkgYmVoaW5kIHRoZSBtb2RhbC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9tYWtlT3ZlcmxheSgpIHtcbiAgICB2YXIgYWRkaXRpb25hbE92ZXJsYXlDbGFzc2VzID0gJyc7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFkZGl0aW9uYWxPdmVybGF5Q2xhc3Nlcykge1xuICAgICAgYWRkaXRpb25hbE92ZXJsYXlDbGFzc2VzID0gJyAnICsgdGhpcy5vcHRpb25zLmFkZGl0aW9uYWxPdmVybGF5Q2xhc3NlcztcbiAgICB9XG5cbiAgICByZXR1cm4gJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgLmFkZENsYXNzKCdyZXZlYWwtb3ZlcmxheScgKyBhZGRpdGlvbmFsT3ZlcmxheUNsYXNzZXMpXG4gICAgICAuYXBwZW5kVG8odGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHBvc2l0aW9uIG9mIG1vZGFsXG4gICAqIFRPRE86ICBGaWd1cmUgb3V0IGlmIHdlIGFjdHVhbGx5IG5lZWQgdG8gY2FjaGUgdGhlc2UgdmFsdWVzIG9yIGlmIGl0IGRvZXNuJ3QgbWF0dGVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy4kZWxlbWVudC5vdXRlcldpZHRoKCk7XG4gICAgdmFyIG91dGVyV2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy4kZWxlbWVudC5vdXRlckhlaWdodCgpO1xuICAgIHZhciBvdXRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICB2YXIgbGVmdCwgdG9wID0gbnVsbDtcbiAgICBpZiAodGhpcy5vcHRpb25zLmhPZmZzZXQgPT09ICdhdXRvJykge1xuICAgICAgbGVmdCA9IHBhcnNlSW50KChvdXRlcldpZHRoIC0gd2lkdGgpIC8gMiwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLmhPZmZzZXQsIDEwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy52T2Zmc2V0ID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChoZWlnaHQgPiBvdXRlckhlaWdodCkge1xuICAgICAgICB0b3AgPSBwYXJzZUludChNYXRoLm1pbigxMDAsIG91dGVySGVpZ2h0IC8gMTApLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3AgPSBwYXJzZUludCgob3V0ZXJIZWlnaHQgLSBoZWlnaHQpIC8gNCwgMTApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnZPZmZzZXQgIT09IG51bGwpIHtcbiAgICAgIHRvcCA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy52T2Zmc2V0LCAxMCk7XG4gICAgfVxuXG4gICAgaWYgKHRvcCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3Moe3RvcDogdG9wICsgJ3B4J30pO1xuICAgIH1cblxuICAgIC8vIG9ubHkgd29ycnkgYWJvdXQgbGVmdCBpZiB3ZSBkb24ndCBoYXZlIGFuIG92ZXJsYXkgb3Igd2UgaGF2ZSBhIGhvcml6b250YWwgb2Zmc2V0LFxuICAgIC8vIG90aGVyd2lzZSB3ZSdyZSBwZXJmZWN0bHkgaW4gdGhlIG1pZGRsZVxuICAgIGlmICghdGhpcy4kb3ZlcmxheSB8fCAodGhpcy5vcHRpb25zLmhPZmZzZXQgIT09ICdhdXRvJykpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKHtsZWZ0OiBsZWZ0ICsgJ3B4J30pO1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3Moe21hcmdpbjogJzBweCd9KTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgbW9kYWwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKHtcbiAgICAgICdvcGVuLnpmLnRyaWdnZXInOiB0aGlzLm9wZW4uYmluZCh0aGlzKSxcbiAgICAgICdjbG9zZS56Zi50cmlnZ2VyJzogKGV2ZW50LCAkZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoKGV2ZW50LnRhcmdldCA9PT0gX3RoaXMuJGVsZW1lbnRbMF0pIHx8XG4gICAgICAgICAgICAoJChldmVudC50YXJnZXQpLnBhcmVudHMoJ1tkYXRhLWNsb3NhYmxlXScpWzBdID09PSAkZWxlbWVudCkpIHsgLy8gb25seSBjbG9zZSByZXZlYWwgd2hlbiBpdCdzIGV4cGxpY2l0bHkgY2FsbGVkXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UuYXBwbHkodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAndG9nZ2xlLnpmLnRyaWdnZXInOiB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpLFxuICAgICAgJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInOiBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25DbGljayAmJiB0aGlzLm9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgdGhpcy4kb3ZlcmxheS5vZmYoJy56Zi5yZXZlYWwnKS5vbignY2xpY2suemYuZHJvcGRvd24gdGFwLnpmLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IF90aGlzLiRlbGVtZW50WzBdIHx8XG4gICAgICAgICAgJC5jb250YWlucyhfdGhpcy4kZWxlbWVudFswXSwgZS50YXJnZXQpIHx8XG4gICAgICAgICAgICAhJC5jb250YWlucyhkb2N1bWVudCwgZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVlcExpbmspIHtcbiAgICAgICQod2luZG93KS5vbihgaGFzaGNoYW5nZS56Zi5yZXZlYWw6JHt0aGlzLmlkfWAsIHRoaXMuX2hhbmRsZVN0YXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vZGFsIG1ldGhvZHMgb24gYmFjay9mb3J3YXJkIGJ1dHRvbiBjbGlja3Mgb3IgYW55IG90aGVyIGV2ZW50IHRoYXQgdHJpZ2dlcnMgaGFzaGNoYW5nZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oYW5kbGVTdGF0ZShlKSB7XG4gICAgaWYod2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICggJyMnICsgdGhpcy5pZCkgJiYgIXRoaXMuaXNBY3RpdmUpeyB0aGlzLm9wZW4oKTsgfVxuICAgIGVsc2V7IHRoaXMuY2xvc2UoKTsgfVxuICB9XG5cbiAgLyoqXG4gICogRGlzYWJsZXMgdGhlIHNjcm9sbCB3aGVuIFJldmVhbCBpcyBzaG93biB0byBwcmV2ZW50IHRoZSBiYWNrZ3JvdW5kIGZyb20gc2hpZnRpbmdcbiAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsVG9wIC0gU2Nyb2xsIHRvIHZpc3VhbGx5IGFwcGx5LCB3aW5kb3cgY3VycmVudCBzY3JvbGwgYnkgZGVmYXVsdFxuICAqL1xuICBfZGlzYWJsZVNjcm9sbChzY3JvbGxUb3ApIHtcbiAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgfHwgJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIGlmICgkKGRvY3VtZW50KS5oZWlnaHQoKSA+ICQod2luZG93KS5oZWlnaHQoKSkge1xuICAgICAgJChcImh0bWxcIilcbiAgICAgICAgLmNzcyhcInRvcFwiLCAtc2Nyb2xsVG9wKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgKiBSZWVuYWJsZXMgdGhlIHNjcm9sbCB3aGVuIFJldmVhbCBjbG9zZXNcbiAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsVG9wIC0gU2Nyb2xsIHRvIHJlc3RvcmUsIGh0bWwgXCJ0b3BcIiBwcm9wZXJ0eSBieSBkZWZhdWx0IChhcyBzZXQgYnkgYF9kaXNhYmxlU2Nyb2xsYClcbiAgKi9cbiAgX2VuYWJsZVNjcm9sbChzY3JvbGxUb3ApIHtcbiAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgfHwgcGFyc2VJbnQoJChcImh0bWxcIikuY3NzKFwidG9wXCIpKTtcbiAgICBpZiAoJChkb2N1bWVudCkuaGVpZ2h0KCkgPiAkKHdpbmRvdykuaGVpZ2h0KCkpIHtcbiAgICAgICQoXCJodG1sXCIpXG4gICAgICAgIC5jc3MoXCJ0b3BcIiwgXCJcIik7XG4gICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKC1zY3JvbGxUb3ApO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBtb2RhbCBjb250cm9sbGVkIGJ5IGB0aGlzLiRhbmNob3JgLCBhbmQgY2xvc2VzIGFsbCBvdGhlcnMgYnkgZGVmYXVsdC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBmaXJlcyBSZXZlYWwjY2xvc2VtZVxuICAgKiBAZmlyZXMgUmV2ZWFsI29wZW5cbiAgICovXG4gIG9wZW4oKSB7XG4gICAgLy8gZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGJyb3dzZXIgaGlzdG9yeVxuICAgIGNvbnN0IGhhc2ggPSBgIyR7dGhpcy5pZH1gO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVlcExpbmsgJiYgd2luZG93LmxvY2F0aW9uLmhhc2ggIT09IGhhc2gpIHtcblxuICAgICAgaWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVwZGF0ZUhpc3RvcnkpIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCBoYXNoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbWVtYmVyIGFuY2hvciB0aGF0IG9wZW5lZCBpdCB0byBzZXQgZm9jdXMgYmFjayBsYXRlciwgaGF2ZSBnZW5lcmFsIGFuY2hvcnMgYXMgZmFsbGJhY2tcbiAgICB0aGlzLiRhY3RpdmVBbmNob3IgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKHRoaXMuJGFuY2hvcikgPyAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIDogdGhpcy4kYW5jaG9yO1xuXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICAvLyBNYWtlIGVsZW1lbnRzIGludmlzaWJsZSwgYnV0IHJlbW92ZSBkaXNwbGF5OiBub25lIHNvIHdlIGNhbiBnZXQgc2l6ZSBhbmQgcG9zaXRpb25pbmdcbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5jc3MoeyAndmlzaWJpbGl0eSc6ICdoaWRkZW4nIH0pXG4gICAgICAgIC5zaG93KClcbiAgICAgICAgLnNjcm9sbFRvcCgwKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkuY3NzKHsndmlzaWJpbGl0eSc6ICdoaWRkZW4nfSkuc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAuaGlkZSgpXG4gICAgICAuY3NzKHsgJ3Zpc2liaWxpdHknOiAnJyB9KTtcblxuICAgIGlmKHRoaXMuJG92ZXJsYXkpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkuY3NzKHsndmlzaWJpbGl0eSc6ICcnfSkuaGlkZSgpO1xuICAgICAgaWYodGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZmFzdCcpKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ2Zhc3QnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4kZWxlbWVudC5oYXNDbGFzcygnc2xvdycpKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ3Nsb3cnKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICghdGhpcy5vcHRpb25zLm11bHRpcGxlT3BlbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgbW9kYWwgb3BlbnMuXG4gICAgICAgKiBDbG9zZXMgYW55IG90aGVyIG1vZGFscyB0aGF0IGFyZSBjdXJyZW50bHkgb3BlblxuICAgICAgICogQGV2ZW50IFJldmVhbCNjbG9zZW1lXG4gICAgICAgKi9cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignY2xvc2VtZS56Zi5yZXZlYWwnLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBpZiAoJCgnLnJldmVhbDp2aXNpYmxlJykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlU2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIE1vdGlvbiBVSSBtZXRob2Qgb2YgcmV2ZWFsXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb25Jbikge1xuICAgICAgZnVuY3Rpb24gYWZ0ZXJBbmltYXRpb24oKXtcbiAgICAgICAgX3RoaXMuJGVsZW1lbnRcbiAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiBmYWxzZSxcbiAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZm9jdXMoKTtcbiAgICAgICAgX3RoaXMuX2FkZEdsb2JhbENsYXNzZXMoKTtcbiAgICAgICAgS2V5Ym9hcmQudHJhcEZvY3VzKF90aGlzLiRlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgICBNb3Rpb24uYW5pbWF0ZUluKHRoaXMuJG92ZXJsYXksICdmYWRlLWluJyk7XG4gICAgICB9XG4gICAgICBNb3Rpb24uYW5pbWF0ZUluKHRoaXMuJGVsZW1lbnQsIHRoaXMub3B0aW9ucy5hbmltYXRpb25JbiwgKCkgPT4ge1xuICAgICAgICBpZih0aGlzLiRlbGVtZW50KSB7IC8vIHByb3RlY3QgYWdhaW5zdCBvYmplY3QgaGF2aW5nIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgIHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSBLZXlib2FyZC5maW5kRm9jdXNhYmxlKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICAgIGFmdGVyQW5pbWF0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBqUXVlcnkgbWV0aG9kIG9mIHJldmVhbFxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGVsZW1lbnQuc2hvdyh0aGlzLm9wdGlvbnMuc2hvd0RlbGF5KTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgYWNjZXNzaWJpbGl0eVxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5hdHRyKHtcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogZmFsc2UsXG4gICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICB9KVxuICAgICAgLmZvY3VzKCk7XG4gICAgS2V5Ym9hcmQudHJhcEZvY3VzKHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgdGhpcy5fYWRkR2xvYmFsQ2xhc3NlcygpO1xuXG4gICAgdGhpcy5fYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBtb2RhbCBoYXMgc3VjY2Vzc2Z1bGx5IG9wZW5lZC5cbiAgICAgKiBAZXZlbnQgUmV2ZWFsI29wZW5cbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ29wZW4uemYucmV2ZWFsJyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjbGFzc2VzIGFuZCBsaXN0ZW5lcnMgb24gZG9jdW1lbnQgcmVxdWlyZWQgYnkgb3BlbiBtb2RhbHMuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgYWRkZWQgYW5kIHVwZGF0ZWQ6XG4gICAqIC0gYC5pcy1yZXZlYWwtb3BlbmAgLSBQcmV2ZW50cyB0aGUgc2Nyb2xsIG9uIGRvY3VtZW50XG4gICAqIC0gYC56Zi1oYXMtc2Nyb2xsYCAgLSBEaXNwbGF5cyBhIGRpc2FibGVkIHNjcm9sbGJhciBvbiBkb2N1bWVudCBpZiByZXF1aXJlZCBsaWtlIGlmIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsIHdhcyBub3QgZGlzYWJsZWQuIFRoaXMgcHJldmVudCBhIFwic2hpZnRcIiBvZiB0aGUgcGFnZSBjb250ZW50IGR1ZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgdGhlIHNjcm9sbGJhciBkaXNhcHBlYXJpbmcgd2hlbiB0aGUgbW9kYWwgb3BlbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkR2xvYmFsQ2xhc3NlcygpIHtcbiAgICBjb25zdCB1cGRhdGVTY3JvbGxiYXJDbGFzcyA9ICgpID0+IHtcbiAgICAgICQoJ2h0bWwnKS50b2dnbGVDbGFzcygnemYtaGFzLXNjcm9sbCcsICEhKCQoZG9jdW1lbnQpLmhlaWdodCgpID4gJCh3aW5kb3cpLmhlaWdodCgpKSk7XG4gICAgfTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ3Jlc2l6ZW1lLnpmLnRyaWdnZXIucmV2ZWFsU2Nyb2xsYmFyTGlzdGVuZXInLCAoKSA9PiB1cGRhdGVTY3JvbGxiYXJDbGFzcygpKTtcbiAgICB1cGRhdGVTY3JvbGxiYXJDbGFzcygpO1xuICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnaXMtcmV2ZWFsLW9wZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGNsYXNzZXMgYW5kIGxpc3RlbmVycyBvbiBkb2N1bWVudCB0aGF0IHdlcmUgcmVxdWlyZWQgYnkgb3BlbiBtb2RhbHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVtb3ZlR2xvYmFsQ2xhc3NlcygpIHtcbiAgICB0aGlzLiRlbGVtZW50Lm9mZigncmVzaXplbWUuemYudHJpZ2dlci5yZXZlYWxTY3JvbGxiYXJMaXN0ZW5lcicpO1xuICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnaXMtcmV2ZWFsLW9wZW4nKTtcbiAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ3pmLWhhcy1zY3JvbGwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV4dHJhIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgYm9keSBhbmQgd2luZG93IGlmIG5lY2Vzc2FyeS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hZGRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZighdGhpcy4kZWxlbWVudCkgeyByZXR1cm47IH0gLy8gSWYgd2UncmUgaW4gdGhlIG1pZGRsZSBvZiBjbGVhbnVwLCBkb24ndCBmcmVhayBvdXRcbiAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzID0gS2V5Ym9hcmQuZmluZEZvY3VzYWJsZSh0aGlzLiRlbGVtZW50KTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLm92ZXJsYXkgJiYgdGhpcy5vcHRpb25zLmNsb3NlT25DbGljayAmJiAhdGhpcy5vcHRpb25zLmZ1bGxTY3JlZW4pIHtcbiAgICAgICQoJ2JvZHknKS5vbignY2xpY2suemYuZHJvcGRvd24gdGFwLnpmLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IF90aGlzLiRlbGVtZW50WzBdIHx8XG4gICAgICAgICAgJC5jb250YWlucyhfdGhpcy4kZWxlbWVudFswXSwgZS50YXJnZXQpIHx8XG4gICAgICAgICAgICAhJC5jb250YWlucyhkb2N1bWVudCwgZS50YXJnZXQpKSB7IHJldHVybjsgfVxuICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uRXNjKSB7XG4gICAgICAkKHdpbmRvdykub24oJ2tleWRvd24uemYucmV2ZWFsJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBLZXlib2FyZC5oYW5kbGVLZXkoZSwgJ1JldmVhbCcsIHtcbiAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5jbG9zZU9uRXNjKSB7XG4gICAgICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1vZGFsLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQGZpcmVzIFJldmVhbCNjbG9zZWRcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCAhdGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gTW90aW9uIFVJIG1ldGhvZCBvZiBoaWRpbmdcbiAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbk91dCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICAgIE1vdGlvbi5hbmltYXRlT3V0KHRoaXMuJG92ZXJsYXksICdmYWRlLW91dCcpO1xuICAgICAgfVxuXG4gICAgICBNb3Rpb24uYW5pbWF0ZU91dCh0aGlzLiRlbGVtZW50LCB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uT3V0LCBmaW5pc2hVcCk7XG4gICAgfVxuICAgIC8vIGpRdWVyeSBtZXRob2Qgb2YgaGlkaW5nXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmhpZGUodGhpcy5vcHRpb25zLmhpZGVEZWxheSk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoMCwgZmluaXNoVXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGZpbmlzaFVwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29uZGl0aW9uYWxzIHRvIHJlbW92ZSBleHRyYSBldmVudCBsaXN0ZW5lcnMgYWRkZWQgb24gb3BlblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkVzYykge1xuICAgICAgJCh3aW5kb3cpLm9mZigna2V5ZG93bi56Zi5yZXZlYWwnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5vdmVybGF5ICYmIHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2spIHtcbiAgICAgICQoJ2JvZHknKS5vZmYoJ2NsaWNrLnpmLmRyb3Bkb3duIHRhcC56Zi5kcm9wZG93bicpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdrZXlkb3duLnpmLnJldmVhbCcpO1xuXG4gICAgZnVuY3Rpb24gZmluaXNoVXAoKSB7XG5cbiAgICAgIC8vIEdldCB0aGUgY3VycmVudCB0b3AgYmVmb3JlIHRoZSBtb2RhbCBpcyBjbG9zZWQgYW5kIHJlc3RvcmUgdGhlIHNjcm9sbCBhZnRlci5cbiAgICAgIC8vIFRPRE86IHVzZSBjb21wb25lbnQgcHJvcGVydGllcyBpbnN0ZWFkIG9mIEhUTUwgcHJvcGVydGllc1xuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS96dXJiL2ZvdW5kYXRpb24tc2l0ZXMvcHVsbC8xMDc4NlxuICAgICAgdmFyIHNjcm9sbFRvcCA9IHBhcnNlSW50KCQoXCJodG1sXCIpLmNzcyhcInRvcFwiKSk7XG5cbiAgICAgIGlmICgkKCcucmV2ZWFsOnZpc2libGUnKS5sZW5ndGggID09PSAwKSB7XG4gICAgICAgIF90aGlzLl9yZW1vdmVHbG9iYWxDbGFzc2VzKCk7IC8vIGFsc28gcmVtb3ZlIC5pcy1yZXZlYWwtb3BlbiBmcm9tIHRoZSBodG1sIGVsZW1lbnQgd2hlbiB0aGVyZSBpcyBubyBvcGVuZWQgcmV2ZWFsXG4gICAgICB9XG5cbiAgICAgIEtleWJvYXJkLnJlbGVhc2VGb2N1cyhfdGhpcy4kZWxlbWVudCk7XG5cbiAgICAgIF90aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICAgIGlmICgkKCcucmV2ZWFsOnZpc2libGUnKS5sZW5ndGggID09PSAwKSB7XG4gICAgICAgIF90aGlzLl9lbmFibGVTY3JvbGwoc2Nyb2xsVG9wKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAqIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGlzIGRvbmUgY2xvc2luZy5cbiAgICAgICogQGV2ZW50IFJldmVhbCNjbG9zZWRcbiAgICAgICovXG4gICAgICBfdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjbG9zZWQuemYucmV2ZWFsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZXNldHMgdGhlIG1vZGFsIGNvbnRlbnRcbiAgICAqIFRoaXMgcHJldmVudHMgYSBydW5uaW5nIHZpZGVvIHRvIGtlZXAgZ29pbmcgaW4gdGhlIGJhY2tncm91bmRcbiAgICAqL1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVzZXRPbkNsb3NlKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwodGhpcy4kZWxlbWVudC5odG1sKCkpO1xuICAgIH1cblxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAvLyBJZiBkZWVwTGluayBhbmQgd2UgZGlkIG5vdCBzd2l0Y2hlZCB0byBhbiBvdGhlciBtb2RhbC4uLlxuICAgIGlmIChfdGhpcy5vcHRpb25zLmRlZXBMaW5rICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBgIyR7dGhpcy5pZH1gKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIGhpc3RvcnkgaGFzaFxuICAgICAgaWYgKHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgICBjb25zdCB1cmxXaXRob3V0SGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBkYXRlSGlzdG9yeSkge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybFdpdGhvdXRIYXNoKTsgLy8gcmVtb3ZlIHRoZSBoYXNoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKCcnLCBkb2N1bWVudC50aXRsZSwgdXJsV2l0aG91dEhhc2gpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJGFjdGl2ZUFuY2hvci5mb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIG9wZW4vY2xvc2VkIHN0YXRlIG9mIGEgbW9kYWwuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveXMgYW4gaW5zdGFuY2Ugb2YgYSBtb2RhbC5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kVG8oJCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pKTsgLy8gbW92ZSAkZWxlbWVudCBvdXRzaWRlIG9mICRvdmVybGF5IHRvIHByZXZlbnQgZXJyb3IgdW5yZWdpc3RlclBsdWdpbigpXG4gICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKS5vZmYoKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGhpcy4kZWxlbWVudC5oaWRlKCkub2ZmKCk7XG4gICAgdGhpcy4kYW5jaG9yLm9mZignLnpmJyk7XG4gICAgJCh3aW5kb3cpLm9mZihgLnpmLnJldmVhbDoke3RoaXMuaWR9YClcbiAgICBpZiAodGhpcy5vbkxvYWRMaXN0ZW5lcikgJCh3aW5kb3cpLm9mZih0aGlzLm9uTG9hZExpc3RlbmVyKTtcblxuICAgIGlmICgkKCcucmV2ZWFsOnZpc2libGUnKS5sZW5ndGggID09PSAwKSB7XG4gICAgICB0aGlzLl9yZW1vdmVHbG9iYWxDbGFzc2VzKCk7IC8vIGFsc28gcmVtb3ZlIC5pcy1yZXZlYWwtb3BlbiBmcm9tIHRoZSBodG1sIGVsZW1lbnQgd2hlbiB0aGVyZSBpcyBubyBvcGVuZWQgcmV2ZWFsXG4gICAgfVxuICB9O1xufVxuXG5SZXZlYWwuZGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBNb3Rpb24tVUkgY2xhc3MgdG8gdXNlIGZvciBhbmltYXRlZCBlbGVtZW50cy4gSWYgbm9uZSB1c2VkLCBkZWZhdWx0cyB0byBzaW1wbGUgc2hvdy9oaWRlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICBhbmltYXRpb25JbjogJycsXG4gIC8qKlxuICAgKiBNb3Rpb24tVUkgY2xhc3MgdG8gdXNlIGZvciBhbmltYXRlZCBlbGVtZW50cy4gSWYgbm9uZSB1c2VkLCBkZWZhdWx0cyB0byBzaW1wbGUgc2hvdy9oaWRlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICBhbmltYXRpb25PdXQ6ICcnLFxuICAvKipcbiAgICogVGltZSwgaW4gbXMsIHRvIGRlbGF5IHRoZSBvcGVuaW5nIG9mIGEgbW9kYWwgYWZ0ZXIgYSBjbGljayBpZiBubyBhbmltYXRpb24gdXNlZC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBzaG93RGVsYXk6IDAsXG4gIC8qKlxuICAgKiBUaW1lLCBpbiBtcywgdG8gZGVsYXkgdGhlIGNsb3Npbmcgb2YgYSBtb2RhbCBhZnRlciBhIGNsaWNrIGlmIG5vIGFuaW1hdGlvbiB1c2VkLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIGhpZGVEZWxheTogMCxcbiAgLyoqXG4gICAqIEFsbG93cyBhIGNsaWNrIG9uIHRoZSBib2R5L292ZXJsYXkgdG8gY2xvc2UgdGhlIG1vZGFsLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIG1vZGFsIHRvIGNsb3NlIGlmIHRoZSB1c2VyIHByZXNzZXMgdGhlIGBFU0NBUEVgIGtleS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgY2xvc2VPbkVzYzogdHJ1ZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIGFsbG93cyBtdWx0aXBsZSBtb2RhbHMgdG8gYmUgZGlzcGxheWVkIGF0IG9uY2UuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBtdWx0aXBsZU9wZW5lZDogZmFsc2UsXG4gIC8qKlxuICAgKiBEaXN0YW5jZSwgaW4gcGl4ZWxzLCB0aGUgbW9kYWwgc2hvdWxkIHB1c2ggZG93biBmcm9tIHRoZSB0b3Agb2YgdGhlIHNjcmVlbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfHN0cmluZ31cbiAgICogQGRlZmF1bHQgYXV0b1xuICAgKi9cbiAgdk9mZnNldDogJ2F1dG8nLFxuICAvKipcbiAgICogRGlzdGFuY2UsIGluIHBpeGVscywgdGhlIG1vZGFsIHNob3VsZCBwdXNoIGluIGZyb20gdGhlIHNpZGUgb2YgdGhlIHNjcmVlbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfHN0cmluZ31cbiAgICogQGRlZmF1bHQgYXV0b1xuICAgKi9cbiAgaE9mZnNldDogJ2F1dG8nLFxuICAvKipcbiAgICogQWxsb3dzIHRoZSBtb2RhbCB0byBiZSBmdWxsc2NyZWVuLCBjb21wbGV0ZWx5IGJsb2NraW5nIG91dCB0aGUgcmVzdCBvZiB0aGUgdmlldy4gSlMgY2hlY2tzIGZvciB0aGlzIGFzIHdlbGwuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBmdWxsU2NyZWVuOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgbW9kYWwgdG8gZ2VuZXJhdGUgYW4gb3ZlcmxheSBkaXYsIHdoaWNoIHdpbGwgY292ZXIgdGhlIHZpZXcgd2hlbiBtb2RhbCBvcGVucy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgb3ZlcmxheTogdHJ1ZSxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgbW9kYWwgdG8gcmVtb3ZlIGFuZCByZWluamVjdCBtYXJrdXAgb24gY2xvc2UuIFNob3VsZCBiZSB0cnVlIGlmIHVzaW5nIHZpZGVvIGVsZW1lbnRzIHcvbyB1c2luZyBwcm92aWRlcidzIGFwaSwgb3RoZXJ3aXNlLCB2aWRlb3Mgd2lsbCBjb250aW51ZSB0byBwbGF5IGluIHRoZSBiYWNrZ3JvdW5kLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcmVzZXRPbkNsb3NlOiBmYWxzZSxcbiAgLyoqXG4gICAqIExpbmsgdGhlIGxvY2F0aW9uIGhhc2ggdG8gdGhlIG1vZGFsLlxuICAgKiBTZXQgdGhlIGxvY2F0aW9uIGhhc2ggd2hlbiB0aGUgbW9kYWwgaXMgb3BlbmVkL2Nsb3NlZCwgYW5kIG9wZW4vY2xvc2UgdGhlIG1vZGFsIHdoZW4gdGhlIGxvY2F0aW9uIGNoYW5nZXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBkZWVwTGluazogZmFsc2UsXG4gIC8qKlxuICAgKiBJZiBgZGVlcExpbmtgIGlzIGVuYWJsZWQsIHVwZGF0ZSB0aGUgYnJvd3NlciBoaXN0b3J5IHdpdGggdGhlIG9wZW4gbW9kYWxcbiAgICogQG9wdGlvblxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdXBkYXRlSGlzdG9yeTogZmFsc2UsXG4gICAgLyoqXG4gICAqIEFsbG93cyB0aGUgbW9kYWwgdG8gYXBwZW5kIHRvIGN1c3RvbSBkaXYuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgXCJib2R5XCJcbiAgICovXG4gIGFwcGVuZFRvOiBcImJvZHlcIixcbiAgLyoqXG4gICAqIEFsbG93cyBhZGRpbmcgYWRkaXRpb25hbCBjbGFzcyBuYW1lcyB0byB0aGUgcmV2ZWFsIG92ZXJsYXkuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJydcbiAgICovXG4gIGFkZGl0aW9uYWxPdmVybGF5Q2xhc3NlczogJydcbn07XG5cbmV4cG9ydCB7UmV2ZWFsfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IE1vdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1vdGlvbic7XG5cbmNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlZml4ZXMgPSBbJ1dlYktpdCcsICdNb3onLCAnTycsICdNcycsICcnXTtcbiAgZm9yICh2YXIgaT0wOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmAgaW4gd2luZG93KSB7XG4gICAgICByZXR1cm4gd2luZG93W2Ake3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSgpKTtcblxuY29uc3QgdHJpZ2dlcnMgPSAoZWwsIHR5cGUpID0+IHtcbiAgZWwuZGF0YSh0eXBlKS5zcGxpdCgnICcpLmZvckVhY2goaWQgPT4ge1xuICAgICQoYCMke2lkfWApWyB0eXBlID09PSAnY2xvc2UnID8gJ3RyaWdnZXInIDogJ3RyaWdnZXJIYW5kbGVyJ10oYCR7dHlwZX0uemYudHJpZ2dlcmAsIFtlbF0pO1xuICB9KTtcbn07XG5cbnZhciBUcmlnZ2VycyA9IHtcbiAgTGlzdGVuZXJzOiB7XG4gICAgQmFzaWM6IHt9LFxuICAgIEdsb2JhbDoge31cbiAgfSxcbiAgSW5pdGlhbGl6ZXJzOiB7fVxufVxuXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMgID0ge1xuICBvcGVuTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRyaWdnZXJzKCQodGhpcyksICdvcGVuJyk7XG4gIH0sXG4gIGNsb3NlTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgnY2xvc2UnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICdjbG9zZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAndG9nZ2xlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykudHJpZ2dlcigndG9nZ2xlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIGNsb3NlYWJsZUxpc3RlbmVyOiBmdW5jdGlvbihlKSB7XG4gICAgbGV0IGFuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnY2xvc2FibGUnKTtcblxuICAgIC8vIE9ubHkgY2xvc2UgdGhlIGZpcnN0IGNsb3NhYmxlIGVsZW1lbnQuIFNlZSBodHRwczovL2dpdC5pby96Zi03ODMzXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmKGFuaW1hdGlvbiAhPT0gJycpe1xuICAgICAgTW90aW9uLmFuaW1hdGVPdXQoJCh0aGlzKSwgYW5pbWF0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgJCh0aGlzKS5mYWRlT3V0KCkudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVGb2N1c0xpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZS1mb2N1cycpO1xuICAgICQoYCMke2lkfWApLnRyaWdnZXJIYW5kbGVyKCd0b2dnbGUuemYudHJpZ2dlcicsIFskKHRoaXMpXSk7XG4gIH1cbn07XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtb3Blbl0gd2lsbCByZXZlYWwgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1vcGVuXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NlXSB3aWxsIGNsb3NlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuLy8gSWYgdXNlZCB3aXRob3V0IGEgdmFsdWUgb24gW2RhdGEtY2xvc2VdLCB0aGUgZXZlbnQgd2lsbCBidWJibGUsIGFsbG93aW5nIGl0IHRvIGNsb3NlIGEgcGFyZW50IGNvbXBvbmVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZV0gd2lsbCB0b2dnbGUgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2FibGVdIHdpbGwgcmVzcG9uZCB0byBjbG9zZS56Zi50cmlnZ2VyIGV2ZW50cy5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2Nsb3NlLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xvc2UuemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZWFibGVdLCBbZGF0YS1jbG9zYWJsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZS1mb2N1c10gd2lsbCByZXNwb25kIHRvIGNvbWluZyBpbiBhbmQgb3V0IG9mIGZvY3VzXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xuICAkZWxlbS5vbignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlLWZvY3VzXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbn1cblxuXG5cbi8vIE1vcmUgR2xvYmFsL2NvbXBsZXggbGlzdGVuZXJzIGFuZCB0cmlnZ2Vyc1xuVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbCAgPSB7XG4gIHJlc2l6ZUxpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSByZXNpemUgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInJlc2l6ZVwiKTtcbiAgfSxcbiAgc2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHNjcm9sbCBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwic2Nyb2xsXCIpO1xuICB9LFxuICBjbG9zZU1lTGlzdGVuZXI6IGZ1bmN0aW9uKGUsIHBsdWdpbklkKXtcbiAgICBsZXQgcGx1Z2luID0gZS5uYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgcGx1Z2lucyA9ICQoYFtkYXRhLSR7cGx1Z2lufV1gKS5ub3QoYFtkYXRhLXlldGktYm94PVwiJHtwbHVnaW5JZH1cIl1gKTtcblxuICAgIHBsdWdpbnMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgbGV0IF90aGlzID0gJCh0aGlzKTtcbiAgICAgIF90aGlzLnRyaWdnZXJIYW5kbGVyKCdjbG9zZS56Zi50cmlnZ2VyJywgW190aGlzXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gR2xvYmFsLCBwYXJzZXMgd2hvbGUgZG9jdW1lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyID0gZnVuY3Rpb24ocGx1Z2luTmFtZSkge1xuICB2YXIgeWV0aUJveGVzID0gJCgnW2RhdGEteWV0aS1ib3hdJyksXG4gICAgICBwbHVnTmFtZXMgPSBbJ2Ryb3Bkb3duJywgJ3Rvb2x0aXAnLCAncmV2ZWFsJ107XG5cbiAgaWYocGx1Z2luTmFtZSl7XG4gICAgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcy5wdXNoKHBsdWdpbk5hbWUpO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGx1Z2luTmFtZVswXSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzID0gcGx1Z05hbWVzLmNvbmNhdChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsdWdpbiBuYW1lcyBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gIH1cbiAgaWYoeWV0aUJveGVzLmxlbmd0aCl7XG4gICAgbGV0IGxpc3RlbmVycyA9IHBsdWdOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiBgY2xvc2VtZS56Zi4ke25hbWV9YDtcbiAgICB9KS5qb2luKCcgJyk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGxpc3RlbmVycykub24obGlzdGVuZXJzLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLmNsb3NlTWVMaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgdHJpZ2dlciwgbGlzdGVuZXIpIHtcbiAgbGV0IHRpbWVyLCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKTtcbiAgJCh3aW5kb3cpLm9mZih0cmlnZ2VyKS5vbih0cmlnZ2VyLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRpbWVyKSB7IGNsZWFyVGltZW91dCh0aW1lcik7IH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIGRlYm91bmNlIHx8IDEwKTsvL2RlZmF1bHQgdGltZSB0byBlbWl0IHNjcm9sbCBldmVudFxuICB9KTtcbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtcmVzaXplXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAncmVzaXplLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnJlc2l6ZUxpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXNjcm9sbF0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Njcm9sbC56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5zY3JvbGxMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lciA9IGZ1bmN0aW9uKCRlbGVtKSB7XG4gIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsgcmV0dXJuIGZhbHNlOyB9XG4gIGxldCAkbm9kZXMgPSAkZWxlbS5maW5kKCdbZGF0YS1yZXNpemVdLCBbZGF0YS1zY3JvbGxdLCBbZGF0YS1tdXRhdGVdJyk7XG5cbiAgLy9lbGVtZW50IGNhbGxiYWNrXG4gIHZhciBsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uUmVjb3Jkc0xpc3QpIHtcbiAgICB2YXIgJHRhcmdldCA9ICQobXV0YXRpb25SZWNvcmRzTGlzdFswXS50YXJnZXQpO1xuXG4gICAgLy90cmlnZ2VyIHRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgZWxlbWVudCBkZXBlbmRpbmcgb24gdHlwZVxuICAgIHN3aXRjaCAobXV0YXRpb25SZWNvcmRzTGlzdFswXS50eXBlKSB7XG4gICAgICBjYXNlIFwiYXR0cmlidXRlc1wiOlxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwic2Nyb2xsXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQsIHdpbmRvdy5wYWdlWU9mZnNldF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJyZXNpemVcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldF0pO1xuICAgICAgICAgfVxuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiY2hpbGRMaXN0XCI6XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICB9O1xuXG4gIGlmICgkbm9kZXMubGVuZ3RoKSB7XG4gICAgLy9mb3IgZWFjaCBlbGVtZW50IHRoYXQgbmVlZHMgdG8gbGlzdGVuIGZvciByZXNpemluZywgc2Nyb2xsaW5nLCBvciBtdXRhdGlvbiBhZGQgYSBzaW5nbGUgb2JzZXJ2ZXJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAkbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbik7XG4gICAgICBlbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZSgkbm9kZXNbaV0sIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbXCJkYXRhLWV2ZW50c1wiLCBcInN0eWxlXCJdIH0pO1xuICAgIH1cbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIoJGRvY3VtZW50KTtcblxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyKCk7XG59XG5cblxuVHJpZ2dlcnMuaW5pdCA9IGZ1bmN0aW9uICgkLCBGb3VuZGF0aW9uKSB7XG4gIG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJC50cmlnZ2Vyc0luaXRpYWxpemVkICE9PSB0cnVlKSB7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzKCk7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICAkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoRm91bmRhdGlvbikge1xuICAgIEZvdW5kYXRpb24uVHJpZ2dlcnMgPSBUcmlnZ2VycztcbiAgICAvLyBMZWdhY3kgaW5jbHVkZWQgdG8gYmUgYmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIG5vdy5cbiAgICBGb3VuZGF0aW9uLklIZWFyWW91ID0gVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVyc1xuICB9XG59XG5cbmV4cG9ydCB7VHJpZ2dlcnN9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
