(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core.utils"), require("./foundation.core"), require("jquery"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("./foundation.core.plugin"));else if (typeof define === 'function' && define.amd) define(["./foundation.core.utils", "./foundation.core", "jquery", "./foundation.util.keyboard", "./foundation.util.mediaQuery", "./foundation.util.motion", "./foundation.core.plugin"], factory);else if (typeof exports === 'object') exports["foundation.reveal"] = factory(require("./foundation.core.utils"), require("./foundation.core"), require("jquery"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("./foundation.core.plugin"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.reveal"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.mediaQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core_utils__, __WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE__foundation_core_plugin__) {
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
      "./foundation.core.plugin":
      /*!*************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core.plugin","commonjs":"./foundation.core.plugin","commonjs2":"./foundation.core.plugin"} ***!
        \*************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core_plugin__;
        /***/
      },

      /***/
      "./foundation.core.utils":
      /*!**********************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core.utils","commonjs":"./foundation.core.utils","commonjs2":"./foundation.core.utils"} ***!
        \**********************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core_utils__;
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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core.utils");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.util.mediaQuery */
        "./foundation.util.mediaQuery");
        /* harmony import */


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.util.motion */
        "./foundation.util.motion");
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./foundation.core.plugin */
        "./foundation.core.plugin");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */


        var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./foundation.util.triggers */
        "./js/foundation.util.triggers.js");

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
         * @requires foundation.util.triggers
         * @requires foundation.util.mediaQuery
         * @requires foundation.util.motion if using animations
         */


        var Reveal =
        /*#__PURE__*/
        function (_Plugin) {
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

              this._init(); // Triggers init is idempotent, just need to make sure it is initialized


              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

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
                this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
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
                this.$overlay.off('.zf.reveal').on('click.zf.reveal', function (e) {
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

              this._disableScroll();

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
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.reveal', function (e) {
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
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.reveal');
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

                _this._enableScroll(scrollTop);
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
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__["Plugin"]);

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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core.utils");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.motion */
        "./foundation.util.motion");
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__);

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
            e.stopPropagation();
            var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');

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
              plugNames.concat(pluginName);
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
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.reveal.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ucmV2ZWFsLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnJldmVhbC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiUmV2ZWFsIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJUcmlnZ2VycyIsIktleWJvYXJkIiwiTWVkaWFRdWVyeSIsIm1xIiwiY3VycmVudCIsImlkIiwid2luZG93IiwiYWRkaXRpb25hbE92ZXJsYXlDbGFzc2VzIiwid2lkdGgiLCJvdXRlcldpZHRoIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJ0b3AiLCJsZWZ0IiwicGFyc2VJbnQiLCJNYXRoIiwibWFyZ2luIiwiX3RoaXMiLCJldmVudCIsImUiLCIkIiwic2Nyb2xsVG9wIiwiaGFzaCIsImRvY3VtZW50IiwiYWZ0ZXJBbmltYXRpb24iLCJNb3Rpb24iLCJ1cGRhdGVTY3JvbGxiYXJDbGFzcyIsImNsb3NlIiwiZmluaXNoVXAiLCJ1cmxXaXRob3V0SGFzaCIsImFuaW1hdGlvbkluIiwiYW5pbWF0aW9uT3V0Iiwic2hvd0RlbGF5IiwiaGlkZURlbGF5IiwiY2xvc2VPbkNsaWNrIiwiY2xvc2VPbkVzYyIsIm11bHRpcGxlT3BlbmVkIiwidk9mZnNldCIsImhPZmZzZXQiLCJmdWxsU2NyZWVuIiwib3ZlcmxheSIsInJlc2V0T25DbG9zZSIsImRlZXBMaW5rIiwidXBkYXRlSGlzdG9yeSIsImFwcGVuZFRvIiwiTXV0YXRpb25PYnNlcnZlciIsInByZWZpeGVzIiwiaSIsInRyaWdnZXJzIiwiZWwiLCJ0eXBlIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwidG9nZ2xlTGlzdGVuZXIiLCJjbG9zZWFibGVMaXN0ZW5lciIsImFuaW1hdGlvbiIsInRvZ2dsZUZvY3VzTGlzdGVuZXIiLCIkZWxlbSIsInJlc2l6ZUxpc3RlbmVyIiwiJG5vZGVzIiwic2Nyb2xsTGlzdGVuZXIiLCJjbG9zZU1lTGlzdGVuZXIiLCJwbHVnaW4iLCJwbHVnaW5zIiwieWV0aUJveGVzIiwicGx1Z05hbWVzIiwicGx1Z2luTmFtZSIsImNvbnNvbGUiLCJsaXN0ZW5lcnMiLCJhcmdzIiwiQXJyYXkiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJsaXN0ZW5lciIsImRlYm91bmNlIiwiZGVib3VuY2VHbG9iYWxMaXN0ZW5lciIsImxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24iLCIkdGFyZ2V0IiwibXV0YXRpb25SZWNvcmRzTGlzdCIsImVsZW1lbnRPYnNlcnZlciIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsImF0dHJpYnV0ZUZpbHRlciIsIiRkb2N1bWVudCIsIm9uTG9hZCIsIkZvdW5kYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLHlCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw4QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLHlCQUFBLEVBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsNEJBQUEsRUFBQSw4QkFBQSxFQUFBLDBCQUFBLEVBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLG1CQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLHlCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw4QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLG1CQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsa0RBQUEsRUFBQSw0Q0FBQSxFQUFBLGtDQUFBLEVBQUEscURBQUEsRUFBQSx1REFBQSxFQUFBLG1EQUFBLEVBQUEsbURBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtBQUFpRCxVQUFBLEtBQUEsRUFBQTtBQUFqRCxTQUFBO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxRQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUE7QUFBeUMsVUFBQSxVQUFBLEVBQUEsSUFBekM7QUFBeUMsVUFBQSxLQUFBLEVBQUE7QUFBekMsU0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsSUFBQSxRQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEdBQUEsRUFBQTtBQUFnSCxpQkFBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJLENBQUE7QUFDQTs7QUFBQSxlQUFBLEVBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsTUFBQSxHQUFBLE1BQUEsSUFBQSxNQUFBLENBQUEsVUFBQTtBQUNBO0FBQUEsaUJBQUEsVUFBQSxHQUFBO0FBQTJCLGlCQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUE7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBLGlCQUFBLGdCQUFBLEdBQUE7QUFBaUMsaUJBQUEsTUFBQTtBQUFlLFNBRmhEO0FBR0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUE7QUFDQTs7O0FBQUEsZUFBQSxNQUFBO0FBQ0E7QUFBQSxPQU5BOzs7QUFRQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQTtBQUFzRCxlQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxDQUFBO0FBQStELE9BQXJIOzs7QUFFQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7QUFBQSxhQUFBLG1CQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsNENBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLG1EQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrREFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEscURBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLHVEQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxtREFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUE7QUFBQTs7O0FBQUEsWUFBQSw2Q0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSwyQkFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEscURBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsNkNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSwrQ0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLCtDQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQTs7QUNHQSxRQUFBLDZDQUFBLENBQUEsWUFBQSxDQUFBLENBQUEsTUFBQSxDQUFrQiwrQ0FBQSxDQUFsQixRQUFrQixDQUFsQixFQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsUUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxNQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsbURBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsaUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1EQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFB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QSxNQUFBLENBQUEsT0FBQSxHQUFBLGtDQUFBOzs7Ozs7QU5VQTtDQVZBIiwiZmlsZSI6ImNvbXBvbmVudHMvZm91bmRhdGlvbi1yZXZlYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZS51dGlsc1wiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlLnV0aWxzXCIsIFwiLi9mb3VuZGF0aW9uLmNvcmVcIiwgXCJqcXVlcnlcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiwgXCIuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW5cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5yZXZlYWxcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZS51dGlsc1wiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSA9IHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSB8fCB7fSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5yZXZlYWxcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wialF1ZXJ5XCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubW90aW9uXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9rZXlib2FyZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbWVkaWFRdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbW90aW9uX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9wbHVnaW5fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IFJldmVhbCB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbkZvdW5kYXRpb24ucGx1Z2luKFJldmVhbCwgJ1JldmVhbCcpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBSZXZlYWwgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnknO1xuaW1wb3J0IHsgTW90aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uJztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBUcmlnZ2VycyB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzJztcblxuLyoqXG4gKiBSZXZlYWwgbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLnJldmVhbFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50cmlnZ2Vyc1xuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm1vdGlvbiBpZiB1c2luZyBhbmltYXRpb25zXG4gKi9cblxuY2xhc3MgUmV2ZWFsIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmV2ZWFsLlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgUmV2ZWFsXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byB1c2UgZm9yIHRoZSBtb2RhbC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25hbCBwYXJhbWV0ZXJzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgUmV2ZWFsLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnUmV2ZWFsJzsgLy8gaWU5IGJhY2sgY29tcGF0XG4gICAgdGhpcy5faW5pdCgpO1xuXG4gICAgLy8gVHJpZ2dlcnMgaW5pdCBpcyBpZGVtcG90ZW50LCBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIGl0IGlzIGluaXRpYWxpemVkXG4gICAgVHJpZ2dlcnMuaW5pdCgkKTtcblxuICAgIEtleWJvYXJkLnJlZ2lzdGVyKCdSZXZlYWwnLCB7XG4gICAgICAnRVNDQVBFJzogJ2Nsb3NlJyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgbW9kYWwgYnkgYWRkaW5nIHRoZSBvdmVybGF5IGFuZCBjbG9zZSBidXR0b25zLCAoaWYgc2VsZWN0ZWQpLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgTWVkaWFRdWVyeS5faW5pdCgpO1xuICAgIHRoaXMuaWQgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJyk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY2FjaGVkID0ge21xOiBNZWRpYVF1ZXJ5LmN1cnJlbnR9O1xuXG4gICAgdGhpcy4kYW5jaG9yID0gJChgW2RhdGEtb3Blbj1cIiR7dGhpcy5pZH1cIl1gKS5sZW5ndGggPyAkKGBbZGF0YS1vcGVuPVwiJHt0aGlzLmlkfVwiXWApIDogJChgW2RhdGEtdG9nZ2xlPVwiJHt0aGlzLmlkfVwiXWApO1xuICAgIHRoaXMuJGFuY2hvci5hdHRyKHtcbiAgICAgICdhcmlhLWNvbnRyb2xzJzogdGhpcy5pZCxcbiAgICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSxcbiAgICAgICd0YWJpbmRleCc6IDBcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZnVsbFNjcmVlbiB8fCB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmdWxsJykpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5mdWxsU2NyZWVuID0gdHJ1ZTtcbiAgICAgIHRoaXMub3B0aW9ucy5vdmVybGF5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlcmxheSAmJiAhdGhpcy4kb3ZlcmxheSkge1xuICAgICAgdGhpcy4kb3ZlcmxheSA9IHRoaXMuX21ha2VPdmVybGF5KHRoaXMuaWQpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICdyb2xlJzogJ2RpYWxvZycsXG4gICAgICAgICdhcmlhLWhpZGRlbic6IHRydWUsXG4gICAgICAgICdkYXRhLXlldGktYm94JzogdGhpcy5pZCxcbiAgICAgICAgJ2RhdGEtcmVzaXplJzogdGhpcy5pZFxuICAgIH0pO1xuXG4gICAgaWYodGhpcy4kb3ZlcmxheSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5kZXRhY2goKS5hcHBlbmRUbyh0aGlzLiRvdmVybGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5kZXRhY2goKS5hcHBlbmRUbygkKHRoaXMub3B0aW9ucy5hcHBlbmRUbykpO1xuICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnd2l0aG91dC1vdmVybGF5Jyk7XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cygpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVlcExpbmsgJiYgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICggYCMke3RoaXMuaWR9YCkpIHtcbiAgICAgIHRoaXMub25Mb2FkTGlzdGVuZXIgPSBvbkxvYWQoJCh3aW5kb3cpLCAoKSA9PiB0aGlzLm9wZW4oKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb3ZlcmxheSBkaXYgdG8gZGlzcGxheSBiZWhpbmQgdGhlIG1vZGFsLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX21ha2VPdmVybGF5KCkge1xuICAgIHZhciBhZGRpdGlvbmFsT3ZlcmxheUNsYXNzZXMgPSAnJztcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYWRkaXRpb25hbE92ZXJsYXlDbGFzc2VzKSB7XG4gICAgICBhZGRpdGlvbmFsT3ZlcmxheUNsYXNzZXMgPSAnICcgKyB0aGlzLm9wdGlvbnMuYWRkaXRpb25hbE92ZXJsYXlDbGFzc2VzO1xuICAgIH1cblxuICAgIHJldHVybiAkKCc8ZGl2PjwvZGl2PicpXG4gICAgICAuYWRkQ2xhc3MoJ3JldmVhbC1vdmVybGF5JyArIGFkZGl0aW9uYWxPdmVybGF5Q2xhc3NlcylcbiAgICAgIC5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgcG9zaXRpb24gb2YgbW9kYWxcbiAgICogVE9ETzogIEZpZ3VyZSBvdXQgaWYgd2UgYWN0dWFsbHkgbmVlZCB0byBjYWNoZSB0aGVzZSB2YWx1ZXMgb3IgaWYgaXQgZG9lc24ndCBtYXR0ZXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGVQb3NpdGlvbigpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLiRlbGVtZW50Lm91dGVyV2lkdGgoKTtcbiAgICB2YXIgb3V0ZXJXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLiRlbGVtZW50Lm91dGVySGVpZ2h0KCk7XG4gICAgdmFyIG91dGVySGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgIHZhciBsZWZ0LCB0b3AgPSBudWxsO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaE9mZnNldCA9PT0gJ2F1dG8nKSB7XG4gICAgICBsZWZ0ID0gcGFyc2VJbnQoKG91dGVyV2lkdGggLSB3aWR0aCkgLyAyLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBwYXJzZUludCh0aGlzLm9wdGlvbnMuaE9mZnNldCwgMTApO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnZPZmZzZXQgPT09ICdhdXRvJykge1xuICAgICAgaWYgKGhlaWdodCA+IG91dGVySGVpZ2h0KSB7XG4gICAgICAgIHRvcCA9IHBhcnNlSW50KE1hdGgubWluKDEwMCwgb3V0ZXJIZWlnaHQgLyAxMCksIDEwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcCA9IHBhcnNlSW50KChvdXRlckhlaWdodCAtIGhlaWdodCkgLyA0LCAxMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMudk9mZnNldCAhPT0gbnVsbCkge1xuICAgICAgdG9wID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLnZPZmZzZXQsIDEwKTtcbiAgICB9XG5cbiAgICBpZiAodG9wICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyh7dG9wOiB0b3AgKyAncHgnfSk7XG4gICAgfVxuXG4gICAgLy8gb25seSB3b3JyeSBhYm91dCBsZWZ0IGlmIHdlIGRvbid0IGhhdmUgYW4gb3ZlcmxheSBvciB3ZSBoYXZlIGEgaG9yaXpvbnRhbCBvZmZzZXQsXG4gICAgLy8gb3RoZXJ3aXNlIHdlJ3JlIHBlcmZlY3RseSBpbiB0aGUgbWlkZGxlXG4gICAgaWYgKCF0aGlzLiRvdmVybGF5IHx8ICh0aGlzLm9wdGlvbnMuaE9mZnNldCAhPT0gJ2F1dG8nKSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3Moe2xlZnQ6IGxlZnQgKyAncHgnfSk7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyh7bWFyZ2luOiAnMHB4J30pO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBtb2RhbC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ldmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQub24oe1xuICAgICAgJ29wZW4uemYudHJpZ2dlcic6IHRoaXMub3Blbi5iaW5kKHRoaXMpLFxuICAgICAgJ2Nsb3NlLnpmLnRyaWdnZXInOiAoZXZlbnQsICRlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICgoZXZlbnQudGFyZ2V0ID09PSBfdGhpcy4kZWxlbWVudFswXSkgfHxcbiAgICAgICAgICAgICgkKGV2ZW50LnRhcmdldCkucGFyZW50cygnW2RhdGEtY2xvc2FibGVdJylbMF0gPT09ICRlbGVtZW50KSkgeyAvLyBvbmx5IGNsb3NlIHJldmVhbCB3aGVuIGl0J3MgZXhwbGljaXRseSBjYWxsZWRcbiAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZS5hcHBseSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICd0b2dnbGUuemYudHJpZ2dlcic6IHRoaXMudG9nZ2xlLmJpbmQodGhpcyksXG4gICAgICAncmVzaXplbWUuemYudHJpZ2dlcic6IGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrICYmIHRoaXMub3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICB0aGlzLiRvdmVybGF5Lm9mZignLnpmLnJldmVhbCcpLm9uKCdjbGljay56Zi5yZXZlYWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gX3RoaXMuJGVsZW1lbnRbMF0gfHxcbiAgICAgICAgICAkLmNvbnRhaW5zKF90aGlzLiRlbGVtZW50WzBdLCBlLnRhcmdldCkgfHxcbiAgICAgICAgICAgICEkLmNvbnRhaW5zKGRvY3VtZW50LCBlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGluaykge1xuICAgICAgJCh3aW5kb3cpLm9uKGBoYXNoY2hhbmdlLnpmLnJldmVhbDoke3RoaXMuaWR9YCwgdGhpcy5faGFuZGxlU3RhdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgbW9kYWwgbWV0aG9kcyBvbiBiYWNrL2ZvcndhcmQgYnV0dG9uIGNsaWNrcyBvciBhbnkgb3RoZXIgZXZlbnQgdGhhdCB0cmlnZ2VycyBoYXNoY2hhbmdlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZVN0YXRlKGUpIHtcbiAgICBpZih3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gKCAnIycgKyB0aGlzLmlkKSAmJiAhdGhpcy5pc0FjdGl2ZSl7IHRoaXMub3BlbigpOyB9XG4gICAgZWxzZXsgdGhpcy5jbG9zZSgpOyB9XG4gIH1cblxuICAvKipcbiAgKiBEaXNhYmxlcyB0aGUgc2Nyb2xsIHdoZW4gUmV2ZWFsIGlzIHNob3duIHRvIHByZXZlbnQgdGhlIGJhY2tncm91bmQgZnJvbSBzaGlmdGluZ1xuICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxUb3AgLSBTY3JvbGwgdG8gdmlzdWFsbHkgYXBwbHksIHdpbmRvdyBjdXJyZW50IHNjcm9sbCBieSBkZWZhdWx0XG4gICovXG4gIF9kaXNhYmxlU2Nyb2xsKHNjcm9sbFRvcCkge1xuICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCB8fCAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgaWYgKCQoZG9jdW1lbnQpLmhlaWdodCgpID4gJCh3aW5kb3cpLmhlaWdodCgpKSB7XG4gICAgICAkKFwiaHRtbFwiKVxuICAgICAgICAuY3NzKFwidG9wXCIsIC1zY3JvbGxUb3ApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIFJlZW5hYmxlcyB0aGUgc2Nyb2xsIHdoZW4gUmV2ZWFsIGNsb3Nlc1xuICAqIEBwYXJhbSB7bnVtYmVyfSBzY3JvbGxUb3AgLSBTY3JvbGwgdG8gcmVzdG9yZSwgaHRtbCBcInRvcFwiIHByb3BlcnR5IGJ5IGRlZmF1bHQgKGFzIHNldCBieSBgX2Rpc2FibGVTY3JvbGxgKVxuICAqL1xuICBfZW5hYmxlU2Nyb2xsKHNjcm9sbFRvcCkge1xuICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCB8fCBwYXJzZUludCgkKFwiaHRtbFwiKS5jc3MoXCJ0b3BcIikpO1xuICAgIGlmICgkKGRvY3VtZW50KS5oZWlnaHQoKSA+ICQod2luZG93KS5oZWlnaHQoKSkge1xuICAgICAgJChcImh0bWxcIilcbiAgICAgICAgLmNzcyhcInRvcFwiLCBcIlwiKTtcbiAgICAgICQod2luZG93KS5zY3JvbGxUb3AoLXNjcm9sbFRvcCk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogT3BlbnMgdGhlIG1vZGFsIGNvbnRyb2xsZWQgYnkgYHRoaXMuJGFuY2hvcmAsIGFuZCBjbG9zZXMgYWxsIG90aGVycyBieSBkZWZhdWx0LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQGZpcmVzIFJldmVhbCNjbG9zZW1lXG4gICAqIEBmaXJlcyBSZXZlYWwjb3BlblxuICAgKi9cbiAgb3BlbigpIHtcbiAgICAvLyBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2UgYnJvd3NlciBoaXN0b3J5XG4gICAgY29uc3QgaGFzaCA9IGAjJHt0aGlzLmlkfWA7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGluayAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCAhPT0gaGFzaCkge1xuXG4gICAgICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBkYXRlSGlzdG9yeSkge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGhhc2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIGhhc2gpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtZW1iZXIgYW5jaG9yIHRoYXQgb3BlbmVkIGl0IHRvIHNldCBmb2N1cyBiYWNrIGxhdGVyLCBoYXZlIGdlbmVyYWwgYW5jaG9ycyBhcyBmYWxsYmFja1xuICAgIHRoaXMuJGFjdGl2ZUFuY2hvciA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaXModGhpcy4kYW5jaG9yKSA/ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgOiB0aGlzLiRhbmNob3I7XG5cbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcblxuICAgIC8vIE1ha2UgZWxlbWVudHMgaW52aXNpYmxlLCBidXQgcmVtb3ZlIGRpc3BsYXk6IG5vbmUgc28gd2UgY2FuIGdldCBzaXplIGFuZCBwb3NpdGlvbmluZ1xuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLmNzcyh7ICd2aXNpYmlsaXR5JzogJ2hpZGRlbicgfSlcbiAgICAgICAgLnNob3coKVxuICAgICAgICAuc2Nyb2xsVG9wKDApO1xuICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgdGhpcy4kb3ZlcmxheS5jc3Moeyd2aXNpYmlsaXR5JzogJ2hpZGRlbid9KS5zaG93KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5oaWRlKClcbiAgICAgIC5jc3MoeyAndmlzaWJpbGl0eSc6ICcnIH0pO1xuXG4gICAgaWYodGhpcy4kb3ZlcmxheSkge1xuICAgICAgdGhpcy4kb3ZlcmxheS5jc3Moeyd2aXNpYmlsaXR5JzogJyd9KS5oaWRlKCk7XG4gICAgICBpZih0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYXN0JykpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5hZGRDbGFzcygnZmFzdCcpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdzbG93JykpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5hZGRDbGFzcygnc2xvdycpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubXVsdGlwbGVPcGVuZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZXMgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBtb2RhbCBvcGVucy5cbiAgICAgICAqIENsb3NlcyBhbnkgb3RoZXIgbW9kYWxzIHRoYXQgYXJlIGN1cnJlbnRseSBvcGVuXG4gICAgICAgKiBAZXZlbnQgUmV2ZWFsI2Nsb3NlbWVcbiAgICAgICAqL1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjbG9zZW1lLnpmLnJldmVhbCcsIHRoaXMuaWQpO1xuICAgIH1cblxuICAgIHRoaXMuX2Rpc2FibGVTY3JvbGwoKTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBNb3Rpb24gVUkgbWV0aG9kIG9mIHJldmVhbFxuICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uSW4pIHtcbiAgICAgIGZ1bmN0aW9uIGFmdGVyQW5pbWF0aW9uKCl7XG4gICAgICAgIF90aGlzLiRlbGVtZW50XG4gICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogZmFsc2UsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAtMVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZvY3VzKCk7XG4gICAgICAgIF90aGlzLl9hZGRHbG9iYWxDbGFzc2VzKCk7XG4gICAgICAgIEtleWJvYXJkLnRyYXBGb2N1cyhfdGhpcy4kZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgICAgTW90aW9uLmFuaW1hdGVJbih0aGlzLiRvdmVybGF5LCAnZmFkZS1pbicpO1xuICAgICAgfVxuICAgICAgTW90aW9uLmFuaW1hdGVJbih0aGlzLiRlbGVtZW50LCB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uSW4sICgpID0+IHtcbiAgICAgICAgaWYodGhpcy4kZWxlbWVudCkgeyAvLyBwcm90ZWN0IGFnYWluc3Qgb2JqZWN0IGhhdmluZyBiZWVuIHJlbW92ZWRcbiAgICAgICAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnRzID0gS2V5Ym9hcmQuZmluZEZvY3VzYWJsZSh0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgICBhZnRlckFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8galF1ZXJ5IG1ldGhvZCBvZiByZXZlYWxcbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coMCk7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbGVtZW50LnNob3codGhpcy5vcHRpb25zLnNob3dEZWxheSk7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIGFjY2Vzc2liaWxpdHlcbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAuYXR0cih7XG4gICAgICAgICdhcmlhLWhpZGRlbic6IGZhbHNlLFxuICAgICAgICAndGFiaW5kZXgnOiAtMVxuICAgICAgfSlcbiAgICAgIC5mb2N1cygpO1xuICAgIEtleWJvYXJkLnRyYXBGb2N1cyh0aGlzLiRlbGVtZW50KTtcblxuICAgIHRoaXMuX2FkZEdsb2JhbENsYXNzZXMoKTtcblxuICAgIHRoaXMuX2FkZEdsb2JhbExpc3RlbmVycygpO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgbW9kYWwgaGFzIHN1Y2Nlc3NmdWxseSBvcGVuZWQuXG4gICAgICogQGV2ZW50IFJldmVhbCNvcGVuXG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdvcGVuLnpmLnJldmVhbCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY2xhc3NlcyBhbmQgbGlzdGVuZXJzIG9uIGRvY3VtZW50IHJlcXVpcmVkIGJ5IG9wZW4gbW9kYWxzLlxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIGFkZGVkIGFuZCB1cGRhdGVkOlxuICAgKiAtIGAuaXMtcmV2ZWFsLW9wZW5gIC0gUHJldmVudHMgdGhlIHNjcm9sbCBvbiBkb2N1bWVudFxuICAgKiAtIGAuemYtaGFzLXNjcm9sbGAgIC0gRGlzcGxheXMgYSBkaXNhYmxlZCBzY3JvbGxiYXIgb24gZG9jdW1lbnQgaWYgcmVxdWlyZWQgbGlrZSBpZiB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbCB3YXMgbm90IGRpc2FibGVkLiBUaGlzIHByZXZlbnQgYSBcInNoaWZ0XCIgb2YgdGhlIHBhZ2UgY29udGVudCBkdWVcbiAgICogICAgICAgICAgICAgICAgICAgICAgIHRoZSBzY3JvbGxiYXIgZGlzYXBwZWFyaW5nIHdoZW4gdGhlIG1vZGFsIG9wZW5zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FkZEdsb2JhbENsYXNzZXMoKSB7XG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsYmFyQ2xhc3MgPSAoKSA9PiB7XG4gICAgICAkKCdodG1sJykudG9nZ2xlQ2xhc3MoJ3pmLWhhcy1zY3JvbGwnLCAhISgkKGRvY3VtZW50KS5oZWlnaHQoKSA+ICQod2luZG93KS5oZWlnaHQoKSkpO1xuICAgIH07XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdyZXNpemVtZS56Zi50cmlnZ2VyLnJldmVhbFNjcm9sbGJhckxpc3RlbmVyJywgKCkgPT4gdXBkYXRlU2Nyb2xsYmFyQ2xhc3MoKSk7XG4gICAgdXBkYXRlU2Nyb2xsYmFyQ2xhc3MoKTtcbiAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ2lzLXJldmVhbC1vcGVuJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBjbGFzc2VzIGFuZCBsaXN0ZW5lcnMgb24gZG9jdW1lbnQgdGhhdCB3ZXJlIHJlcXVpcmVkIGJ5IG9wZW4gbW9kYWxzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlbW92ZUdsb2JhbENsYXNzZXMoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXIucmV2ZWFsU2Nyb2xsYmFyTGlzdGVuZXInKTtcbiAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ2lzLXJldmVhbC1vcGVuJyk7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCd6Zi1oYXMtc2Nyb2xsJyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBleHRyYSBldmVudCBoYW5kbGVycyBmb3IgdGhlIGJvZHkgYW5kIHdpbmRvdyBpZiBuZWNlc3NhcnkuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYoIXRoaXMuJGVsZW1lbnQpIHsgcmV0dXJuOyB9IC8vIElmIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgY2xlYW51cCwgZG9uJ3QgZnJlYWsgb3V0XG4gICAgdGhpcy5mb2N1c2FibGVFbGVtZW50cyA9IEtleWJvYXJkLmZpbmRGb2N1c2FibGUodGhpcy4kZWxlbWVudCk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5vdmVybGF5ICYmIHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2sgJiYgIXRoaXMub3B0aW9ucy5mdWxsU2NyZWVuKSB7XG4gICAgICAkKCdib2R5Jykub24oJ2NsaWNrLnpmLnJldmVhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBfdGhpcy4kZWxlbWVudFswXSB8fFxuICAgICAgICAgICQuY29udGFpbnMoX3RoaXMuJGVsZW1lbnRbMF0sIGUudGFyZ2V0KSB8fFxuICAgICAgICAgICAgISQuY29udGFpbnMoZG9jdW1lbnQsIGUudGFyZ2V0KSkgeyByZXR1cm47IH1cbiAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkVzYykge1xuICAgICAgJCh3aW5kb3cpLm9uKCdrZXlkb3duLnpmLnJldmVhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgS2V5Ym9hcmQuaGFuZGxlS2V5KGUsICdSZXZlYWwnLCB7XG4gICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuY2xvc2VPbkVzYykge1xuICAgICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtb2RhbC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBmaXJlcyBSZXZlYWwjY2xvc2VkXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgIXRoaXMuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIE1vdGlvbiBVSSBtZXRob2Qgb2YgaGlkaW5nXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb25PdXQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgICBNb3Rpb24uYW5pbWF0ZU91dCh0aGlzLiRvdmVybGF5LCAnZmFkZS1vdXQnKTtcbiAgICAgIH1cblxuICAgICAgTW90aW9uLmFuaW1hdGVPdXQodGhpcy4kZWxlbWVudCwgdGhpcy5vcHRpb25zLmFuaW1hdGlvbk91dCwgZmluaXNoVXApO1xuICAgIH1cbiAgICAvLyBqUXVlcnkgbWV0aG9kIG9mIGhpZGluZ1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5oaWRlKHRoaXMub3B0aW9ucy5oaWRlRGVsYXkpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKDAsIGZpbmlzaFVwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmaW5pc2hVcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENvbmRpdGlvbmFscyB0byByZW1vdmUgZXh0cmEgZXZlbnQgbGlzdGVuZXJzIGFkZGVkIG9uIG9wZW5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25Fc2MpIHtcbiAgICAgICQod2luZG93KS5vZmYoJ2tleWRvd24uemYucmV2ZWFsJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMub3ZlcmxheSAmJiB0aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrKSB7XG4gICAgICAkKCdib2R5Jykub2ZmKCdjbGljay56Zi5yZXZlYWwnKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9mZigna2V5ZG93bi56Zi5yZXZlYWwnKTtcblxuICAgIGZ1bmN0aW9uIGZpbmlzaFVwKCkge1xuXG4gICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgdG9wIGJlZm9yZSB0aGUgbW9kYWwgaXMgY2xvc2VkIGFuZCByZXN0b3JlIHRoZSBzY3JvbGwgYWZ0ZXIuXG4gICAgICAvLyBUT0RPOiB1c2UgY29tcG9uZW50IHByb3BlcnRpZXMgaW5zdGVhZCBvZiBIVE1MIHByb3BlcnRpZXNcbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20venVyYi9mb3VuZGF0aW9uLXNpdGVzL3B1bGwvMTA3ODZcbiAgICAgIHZhciBzY3JvbGxUb3AgPSBwYXJzZUludCgkKFwiaHRtbFwiKS5jc3MoXCJ0b3BcIikpO1xuXG4gICAgICBpZiAoJCgnLnJldmVhbDp2aXNpYmxlJykubGVuZ3RoICA9PT0gMCkge1xuICAgICAgICBfdGhpcy5fcmVtb3ZlR2xvYmFsQ2xhc3NlcygpOyAvLyBhbHNvIHJlbW92ZSAuaXMtcmV2ZWFsLW9wZW4gZnJvbSB0aGUgaHRtbCBlbGVtZW50IHdoZW4gdGhlcmUgaXMgbm8gb3BlbmVkIHJldmVhbFxuICAgICAgfVxuXG4gICAgICBLZXlib2FyZC5yZWxlYXNlRm9jdXMoX3RoaXMuJGVsZW1lbnQpO1xuXG4gICAgICBfdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gICAgICBfdGhpcy5fZW5hYmxlU2Nyb2xsKHNjcm9sbFRvcCk7XG5cbiAgICAgIC8qKlxuICAgICAgKiBGaXJlcyB3aGVuIHRoZSBtb2RhbCBpcyBkb25lIGNsb3NpbmcuXG4gICAgICAqIEBldmVudCBSZXZlYWwjY2xvc2VkXG4gICAgICAqL1xuICAgICAgX3RoaXMuJGVsZW1lbnQudHJpZ2dlcignY2xvc2VkLnpmLnJldmVhbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmVzZXRzIHRoZSBtb2RhbCBjb250ZW50XG4gICAgKiBUaGlzIHByZXZlbnRzIGEgcnVubmluZyB2aWRlbyB0byBrZWVwIGdvaW5nIGluIHRoZSBiYWNrZ3JvdW5kXG4gICAgKi9cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlc2V0T25DbG9zZSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5odG1sKHRoaXMuJGVsZW1lbnQuaHRtbCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgLy8gSWYgZGVlcExpbmsgYW5kIHdlIGRpZCBub3Qgc3dpdGNoZWQgdG8gYW4gb3RoZXIgbW9kYWwuLi5cbiAgICBpZiAoX3RoaXMub3B0aW9ucy5kZWVwTGluayAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gYCMke3RoaXMuaWR9YCkge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBoaXN0b3J5IGhhc2hcbiAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgICAgY29uc3QgdXJsV2l0aG91dEhhc2ggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVwZGF0ZUhpc3RvcnkpIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmxXaXRob3V0SGFzaCk7IC8vIHJlbW92ZSB0aGUgaGFzaFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSgnJywgZG9jdW1lbnQudGl0bGUsIHVybFdpdGhvdXRIYXNoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiRhY3RpdmVBbmNob3IuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBvcGVuL2Nsb3NlZCBzdGF0ZSBvZiBhIG1vZGFsLlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGFuIGluc3RhbmNlIG9mIGEgbW9kYWwuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZFRvKCQodGhpcy5vcHRpb25zLmFwcGVuZFRvKSk7IC8vIG1vdmUgJGVsZW1lbnQgb3V0c2lkZSBvZiAkb3ZlcmxheSB0byBwcmV2ZW50IGVycm9yIHVucmVnaXN0ZXJQbHVnaW4oKVxuICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCkub2ZmKCkucmVtb3ZlKCk7XG4gICAgfVxuICAgIHRoaXMuJGVsZW1lbnQuaGlkZSgpLm9mZigpO1xuICAgIHRoaXMuJGFuY2hvci5vZmYoJy56ZicpO1xuICAgICQod2luZG93KS5vZmYoYC56Zi5yZXZlYWw6JHt0aGlzLmlkfWApXG4gICAgaWYgKHRoaXMub25Mb2FkTGlzdGVuZXIpICQod2luZG93KS5vZmYodGhpcy5vbkxvYWRMaXN0ZW5lcik7XG5cbiAgICBpZiAoJCgnLnJldmVhbDp2aXNpYmxlJykubGVuZ3RoICA9PT0gMCkge1xuICAgICAgdGhpcy5fcmVtb3ZlR2xvYmFsQ2xhc3NlcygpOyAvLyBhbHNvIHJlbW92ZSAuaXMtcmV2ZWFsLW9wZW4gZnJvbSB0aGUgaHRtbCBlbGVtZW50IHdoZW4gdGhlcmUgaXMgbm8gb3BlbmVkIHJldmVhbFxuICAgIH1cbiAgfTtcbn1cblxuUmV2ZWFsLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogTW90aW9uLVVJIGNsYXNzIHRvIHVzZSBmb3IgYW5pbWF0ZWQgZWxlbWVudHMuIElmIG5vbmUgdXNlZCwgZGVmYXVsdHMgdG8gc2ltcGxlIHNob3cvaGlkZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKi9cbiAgYW5pbWF0aW9uSW46ICcnLFxuICAvKipcbiAgICogTW90aW9uLVVJIGNsYXNzIHRvIHVzZSBmb3IgYW5pbWF0ZWQgZWxlbWVudHMuIElmIG5vbmUgdXNlZCwgZGVmYXVsdHMgdG8gc2ltcGxlIHNob3cvaGlkZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKi9cbiAgYW5pbWF0aW9uT3V0OiAnJyxcbiAgLyoqXG4gICAqIFRpbWUsIGluIG1zLCB0byBkZWxheSB0aGUgb3BlbmluZyBvZiBhIG1vZGFsIGFmdGVyIGEgY2xpY2sgaWYgbm8gYW5pbWF0aW9uIHVzZWQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgc2hvd0RlbGF5OiAwLFxuICAvKipcbiAgICogVGltZSwgaW4gbXMsIHRvIGRlbGF5IHRoZSBjbG9zaW5nIG9mIGEgbW9kYWwgYWZ0ZXIgYSBjbGljayBpZiBubyBhbmltYXRpb24gdXNlZC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBoaWRlRGVsYXk6IDAsXG4gIC8qKlxuICAgKiBBbGxvd3MgYSBjbGljayBvbiB0aGUgYm9keS9vdmVybGF5IHRvIGNsb3NlIHRoZSBtb2RhbC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAvKipcbiAgICogQWxsb3dzIHRoZSBtb2RhbCB0byBjbG9zZSBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBgRVNDQVBFYCBrZXkuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGNsb3NlT25Fc2M6IHRydWUsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBhbGxvd3MgbXVsdGlwbGUgbW9kYWxzIHRvIGJlIGRpc3BsYXllZCBhdCBvbmNlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgbXVsdGlwbGVPcGVuZWQ6IGZhbHNlLFxuICAvKipcbiAgICogRGlzdGFuY2UsIGluIHBpeGVscywgdGhlIG1vZGFsIHNob3VsZCBwdXNoIGRvd24gZnJvbSB0aGUgdG9wIG9mIHRoZSBzY3JlZW4uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XG4gICAqIEBkZWZhdWx0IGF1dG9cbiAgICovXG4gIHZPZmZzZXQ6ICdhdXRvJyxcbiAgLyoqXG4gICAqIERpc3RhbmNlLCBpbiBwaXhlbHMsIHRoZSBtb2RhbCBzaG91bGQgcHVzaCBpbiBmcm9tIHRoZSBzaWRlIG9mIHRoZSBzY3JlZW4uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcnxzdHJpbmd9XG4gICAqIEBkZWZhdWx0IGF1dG9cbiAgICovXG4gIGhPZmZzZXQ6ICdhdXRvJyxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgbW9kYWwgdG8gYmUgZnVsbHNjcmVlbiwgY29tcGxldGVseSBibG9ja2luZyBvdXQgdGhlIHJlc3Qgb2YgdGhlIHZpZXcuIEpTIGNoZWNrcyBmb3IgdGhpcyBhcyB3ZWxsLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZnVsbFNjcmVlbjogZmFsc2UsXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIG1vZGFsIHRvIGdlbmVyYXRlIGFuIG92ZXJsYXkgZGl2LCB3aGljaCB3aWxsIGNvdmVyIHRoZSB2aWV3IHdoZW4gbW9kYWwgb3BlbnMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIG92ZXJsYXk6IHRydWUsXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIG1vZGFsIHRvIHJlbW92ZSBhbmQgcmVpbmplY3QgbWFya3VwIG9uIGNsb3NlLiBTaG91bGQgYmUgdHJ1ZSBpZiB1c2luZyB2aWRlbyBlbGVtZW50cyB3L28gdXNpbmcgcHJvdmlkZXIncyBhcGksIG90aGVyd2lzZSwgdmlkZW9zIHdpbGwgY29udGludWUgdG8gcGxheSBpbiB0aGUgYmFja2dyb3VuZC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHJlc2V0T25DbG9zZTogZmFsc2UsXG4gIC8qKlxuICAgKiBMaW5rIHRoZSBsb2NhdGlvbiBoYXNoIHRvIHRoZSBtb2RhbC5cbiAgICogU2V0IHRoZSBsb2NhdGlvbiBoYXNoIHdoZW4gdGhlIG1vZGFsIGlzIG9wZW5lZC9jbG9zZWQsIGFuZCBvcGVuL2Nsb3NlIHRoZSBtb2RhbCB3aGVuIHRoZSBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGVlcExpbms6IGZhbHNlLFxuICAvKipcbiAgICogSWYgYGRlZXBMaW5rYCBpcyBlbmFibGVkLCB1cGRhdGUgdGhlIGJyb3dzZXIgaGlzdG9yeSB3aXRoIHRoZSBvcGVuIG1vZGFsXG4gICAqIEBvcHRpb25cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHVwZGF0ZUhpc3Rvcnk6IGZhbHNlLFxuICAgIC8qKlxuICAgKiBBbGxvd3MgdGhlIG1vZGFsIHRvIGFwcGVuZCB0byBjdXN0b20gZGl2LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IFwiYm9keVwiXG4gICAqL1xuICBhcHBlbmRUbzogXCJib2R5XCIsXG4gIC8qKlxuICAgKiBBbGxvd3MgYWRkaW5nIGFkZGl0aW9uYWwgY2xhc3MgbmFtZXMgdG8gdGhlIHJldmVhbCBvdmVybGF5LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICBhZGRpdGlvbmFsT3ZlcmxheUNsYXNzZXM6ICcnXG59O1xuXG5leHBvcnQge1JldmVhbH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNb3Rpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24nO1xuXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4gIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGAke3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykge1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0oKSk7XG5cbmNvbnN0IHRyaWdnZXJzID0gKGVsLCB0eXBlKSA9PiB7XG4gIGVsLmRhdGEodHlwZSkuc3BsaXQoJyAnKS5mb3JFYWNoKGlkID0+IHtcbiAgICAkKGAjJHtpZH1gKVsgdHlwZSA9PT0gJ2Nsb3NlJyA/ICd0cmlnZ2VyJyA6ICd0cmlnZ2VySGFuZGxlciddKGAke3R5cGV9LnpmLnRyaWdnZXJgLCBbZWxdKTtcbiAgfSk7XG59O1xuXG52YXIgVHJpZ2dlcnMgPSB7XG4gIExpc3RlbmVyczoge1xuICAgIEJhc2ljOiB7fSxcbiAgICBHbG9iYWw6IHt9XG4gIH0sXG4gIEluaXRpYWxpemVyczoge31cbn1cblxuVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljICA9IHtcbiAgb3Blbkxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICB0cmlnZ2VycygkKHRoaXMpLCAnb3BlbicpO1xuICB9LFxuICBjbG9zZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICBjbG9zZWFibGVMaXN0ZW5lcjogZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGFuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnY2xvc2FibGUnKTtcblxuICAgIGlmKGFuaW1hdGlvbiAhPT0gJycpe1xuICAgICAgTW90aW9uLmFuaW1hdGVPdXQoJCh0aGlzKSwgYW5pbWF0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgJCh0aGlzKS5mYWRlT3V0KCkudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVGb2N1c0xpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZS1mb2N1cycpO1xuICAgICQoYCMke2lkfWApLnRyaWdnZXJIYW5kbGVyKCd0b2dnbGUuemYudHJpZ2dlcicsIFskKHRoaXMpXSk7XG4gIH1cbn07XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtb3Blbl0gd2lsbCByZXZlYWwgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1vcGVuXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NlXSB3aWxsIGNsb3NlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuLy8gSWYgdXNlZCB3aXRob3V0IGEgdmFsdWUgb24gW2RhdGEtY2xvc2VdLCB0aGUgZXZlbnQgd2lsbCBidWJibGUsIGFsbG93aW5nIGl0IHRvIGNsb3NlIGEgcGFyZW50IGNvbXBvbmVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZV0gd2lsbCB0b2dnbGUgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2FibGVdIHdpbGwgcmVzcG9uZCB0byBjbG9zZS56Zi50cmlnZ2VyIGV2ZW50cy5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2Nsb3NlLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xvc2UuemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZWFibGVdLCBbZGF0YS1jbG9zYWJsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZS1mb2N1c10gd2lsbCByZXNwb25kIHRvIGNvbWluZyBpbiBhbmQgb3V0IG9mIGZvY3VzXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xuICAkZWxlbS5vbignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlLWZvY3VzXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbn1cblxuXG5cbi8vIE1vcmUgR2xvYmFsL2NvbXBsZXggbGlzdGVuZXJzIGFuZCB0cmlnZ2Vyc1xuVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbCAgPSB7XG4gIHJlc2l6ZUxpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSByZXNpemUgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInJlc2l6ZVwiKTtcbiAgfSxcbiAgc2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHNjcm9sbCBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwic2Nyb2xsXCIpO1xuICB9LFxuICBjbG9zZU1lTGlzdGVuZXI6IGZ1bmN0aW9uKGUsIHBsdWdpbklkKXtcbiAgICBsZXQgcGx1Z2luID0gZS5uYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgcGx1Z2lucyA9ICQoYFtkYXRhLSR7cGx1Z2lufV1gKS5ub3QoYFtkYXRhLXlldGktYm94PVwiJHtwbHVnaW5JZH1cIl1gKTtcblxuICAgIHBsdWdpbnMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgbGV0IF90aGlzID0gJCh0aGlzKTtcbiAgICAgIF90aGlzLnRyaWdnZXJIYW5kbGVyKCdjbG9zZS56Zi50cmlnZ2VyJywgW190aGlzXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gR2xvYmFsLCBwYXJzZXMgd2hvbGUgZG9jdW1lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyID0gZnVuY3Rpb24ocGx1Z2luTmFtZSkge1xuICB2YXIgeWV0aUJveGVzID0gJCgnW2RhdGEteWV0aS1ib3hdJyksXG4gICAgICBwbHVnTmFtZXMgPSBbJ2Ryb3Bkb3duJywgJ3Rvb2x0aXAnLCAncmV2ZWFsJ107XG5cbiAgaWYocGx1Z2luTmFtZSl7XG4gICAgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcy5wdXNoKHBsdWdpbk5hbWUpO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGx1Z2luTmFtZVswXSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzLmNvbmNhdChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsdWdpbiBuYW1lcyBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gIH1cbiAgaWYoeWV0aUJveGVzLmxlbmd0aCl7XG4gICAgbGV0IGxpc3RlbmVycyA9IHBsdWdOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiBgY2xvc2VtZS56Zi4ke25hbWV9YDtcbiAgICB9KS5qb2luKCcgJyk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGxpc3RlbmVycykub24obGlzdGVuZXJzLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLmNsb3NlTWVMaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgdHJpZ2dlciwgbGlzdGVuZXIpIHtcbiAgbGV0IHRpbWVyLCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKTtcbiAgJCh3aW5kb3cpLm9mZih0cmlnZ2VyKS5vbih0cmlnZ2VyLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRpbWVyKSB7IGNsZWFyVGltZW91dCh0aW1lcik7IH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIGRlYm91bmNlIHx8IDEwKTsvL2RlZmF1bHQgdGltZSB0byBlbWl0IHNjcm9sbCBldmVudFxuICB9KTtcbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtcmVzaXplXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAncmVzaXplLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnJlc2l6ZUxpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXNjcm9sbF0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Njcm9sbC56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5zY3JvbGxMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lciA9IGZ1bmN0aW9uKCRlbGVtKSB7XG4gIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsgcmV0dXJuIGZhbHNlOyB9XG4gIGxldCAkbm9kZXMgPSAkZWxlbS5maW5kKCdbZGF0YS1yZXNpemVdLCBbZGF0YS1zY3JvbGxdLCBbZGF0YS1tdXRhdGVdJyk7XG5cbiAgLy9lbGVtZW50IGNhbGxiYWNrXG4gIHZhciBsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uUmVjb3Jkc0xpc3QpIHtcbiAgICB2YXIgJHRhcmdldCA9ICQobXV0YXRpb25SZWNvcmRzTGlzdFswXS50YXJnZXQpO1xuXG4gICAgLy90cmlnZ2VyIHRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgZWxlbWVudCBkZXBlbmRpbmcgb24gdHlwZVxuICAgIHN3aXRjaCAobXV0YXRpb25SZWNvcmRzTGlzdFswXS50eXBlKSB7XG4gICAgICBjYXNlIFwiYXR0cmlidXRlc1wiOlxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwic2Nyb2xsXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQsIHdpbmRvdy5wYWdlWU9mZnNldF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJyZXNpemVcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldF0pO1xuICAgICAgICAgfVxuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiY2hpbGRMaXN0XCI6XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICB9O1xuXG4gIGlmICgkbm9kZXMubGVuZ3RoKSB7XG4gICAgLy9mb3IgZWFjaCBlbGVtZW50IHRoYXQgbmVlZHMgdG8gbGlzdGVuIGZvciByZXNpemluZywgc2Nyb2xsaW5nLCBvciBtdXRhdGlvbiBhZGQgYSBzaW5nbGUgb2JzZXJ2ZXJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAkbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbik7XG4gICAgICBlbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZSgkbm9kZXNbaV0sIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbXCJkYXRhLWV2ZW50c1wiLCBcInN0eWxlXCJdIH0pO1xuICAgIH1cbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIoJGRvY3VtZW50KTtcblxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyKCk7XG59XG5cblxuVHJpZ2dlcnMuaW5pdCA9IGZ1bmN0aW9uICgkLCBGb3VuZGF0aW9uKSB7XG4gIG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJC50cmlnZ2Vyc0luaXRpYWxpemVkICE9PSB0cnVlKSB7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzKCk7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICAkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoRm91bmRhdGlvbikge1xuICAgIEZvdW5kYXRpb24uVHJpZ2dlcnMgPSBUcmlnZ2VycztcbiAgICAvLyBMZWdhY3kgaW5jbHVkZWQgdG8gYmUgYmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIG5vdy5cbiAgICBGb3VuZGF0aW9uLklIZWFyWW91ID0gVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVyc1xuICB9XG59XG5cbmV4cG9ydCB7VHJpZ2dlcnN9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
