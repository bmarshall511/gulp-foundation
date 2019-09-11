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
        "./foundation.core");
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


        var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./foundation.util.triggers */
        "./js/foundation.util.triggers.js");
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./foundation.util.touch */
        "./foundation.util.touch");
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__);

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
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

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
        "./foundation.core");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ucmV2ZWFsLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnJldmVhbC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlJldmVhbCIsImVsZW1lbnQiLCJvcHRpb25zIiwiJCIsIlRyaWdnZXJzIiwiS2V5Ym9hcmQiLCJNZWRpYVF1ZXJ5IiwibXEiLCJjdXJyZW50IiwiaWQiLCJ3aW5kb3ciLCJvbkxvYWQiLCJhZGRpdGlvbmFsT3ZlcmxheUNsYXNzZXMiLCJ3aWR0aCIsIm91dGVyV2lkdGgiLCJoZWlnaHQiLCJvdXRlckhlaWdodCIsInRvcCIsImxlZnQiLCJwYXJzZUludCIsIk1hdGgiLCJtYXJnaW4iLCJfdGhpcyIsImV2ZW50IiwiZSIsInNjcm9sbFRvcCIsImhhc2giLCJkb2N1bWVudCIsImFmdGVyQW5pbWF0aW9uIiwiTW90aW9uIiwidXBkYXRlU2Nyb2xsYmFyQ2xhc3MiLCJjbG9zZSIsImZpbmlzaFVwIiwidXJsV2l0aG91dEhhc2giLCJQbHVnaW4iLCJhbmltYXRpb25JbiIsImFuaW1hdGlvbk91dCIsInNob3dEZWxheSIsImhpZGVEZWxheSIsImNsb3NlT25DbGljayIsImNsb3NlT25Fc2MiLCJtdWx0aXBsZU9wZW5lZCIsInZPZmZzZXQiLCJoT2Zmc2V0IiwiZnVsbFNjcmVlbiIsIm92ZXJsYXkiLCJyZXNldE9uQ2xvc2UiLCJkZWVwTGluayIsInVwZGF0ZUhpc3RvcnkiLCJhcHBlbmRUbyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJwcmVmaXhlcyIsImkiLCJ0cmlnZ2VycyIsImVsIiwidHlwZSIsIkxpc3RlbmVycyIsIkJhc2ljIiwiR2xvYmFsIiwiSW5pdGlhbGl6ZXJzIiwib3Blbkxpc3RlbmVyIiwiY2xvc2VMaXN0ZW5lciIsInRvZ2dsZUxpc3RlbmVyIiwiY2xvc2VhYmxlTGlzdGVuZXIiLCJhbmltYXRpb24iLCJ0b2dnbGVGb2N1c0xpc3RlbmVyIiwiJGVsZW0iLCJyZXNpemVMaXN0ZW5lciIsIiRub2RlcyIsInNjcm9sbExpc3RlbmVyIiwiY2xvc2VNZUxpc3RlbmVyIiwicGx1Z2luIiwicGx1Z2lucyIsInlldGlCb3hlcyIsInBsdWdOYW1lcyIsInBsdWdpbk5hbWUiLCJjb25zb2xlIiwibGlzdGVuZXJzIiwiYXJncyIsIkFycmF5IiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwibGlzdGVuZXIiLCJkZWJvdW5jZSIsImRlYm91bmNlR2xvYmFsTGlzdGVuZXIiLCJsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uIiwiJHRhcmdldCIsIm11dGF0aW9uUmVjb3Jkc0xpc3QiLCJlbGVtZW50T2JzZXJ2ZXIiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCIkZG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw4QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEseUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLDRCQUFBLEVBQUEsOEJBQUEsRUFBQSwwQkFBQSxFQUFBLHlCQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDhCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLG1CQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsdUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxxREFBQSxFQUFBLHVEQUFBLEVBQUEsbURBQUEsRUFBQSxrREFBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVBQUEsR0FBQTtBQUEyQixpQkFBQSxNQUFBLENBQUEsU0FBQSxDQUFBO0FBQTRCLFNBRHZEO0FBRUE7QUFBQSxpQkFBQSxnQkFBQSxHQUFBO0FBQWlDLGlCQUFBLE1BQUE7QUFBZSxTQUZoRDtBQUdBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBO0FBQ0E7OztBQUFBLGVBQUEsTUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7QUFBc0QsZUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsQ0FBQTtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUEsYUFBQSxtQkFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLDRDQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxxREFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsdURBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLG1EQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrREFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUE7QUFBQTs7O0FBQUEsWUFBQSw2Q0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSwyQkFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEscURBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsNkNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSwrQ0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLCtDQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQTs7QUNHQUEsUUFBQUEsNkNBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE1BQUFBLENBQWtCQywrQ0FBQUEsQ0FBbEJELFFBQWtCQyxDQUFsQkQsRUFBQUEsUUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsUUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxNQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsbURBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1EQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxzREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxvQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsOERBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsc0RBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHdEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLHNDQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxnRUFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSx3REFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsb0RBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsa0NBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDREQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG9EQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxzREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSwwQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsbURBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsaUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1EQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O1lBU01DLE07Ozs7Ozs7Ozs7Ozs7O0FBQ0o7Ozs7Ozs7bUNBT09DLE8sRUFBU0MsTyxFQUFTO0FBQ3ZCLG1CQUFBLFFBQUEsR0FBQSxPQUFBO0FBQ0EsbUJBQUEsT0FBQSxHQUFlQywyQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsRUFBQUEsRUFBYUgsTUFBTSxDQUFuQkcsUUFBQUEsRUFBOEIsS0FBQSxRQUFBLENBQTlCQSxJQUE4QixFQUE5QkEsRUFBZixPQUFlQSxDQUFmO0FBQ0EsbUJBQUEsU0FBQSxHQUh1QixRQUd2QixDQUh1QixDQUdJOztBQUMzQixtQkFKdUIsS0FJdkIsR0FKdUIsQ0FNdkI7OztBQUNBQyxjQUFBQSxzREFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsQ0FBQUEsSUFBQUEsQ0FBY0QsMkNBQUFBLENBQWRDLENBQUFBOztBQUVBQyxjQUFBQSxzREFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsUUFBQUEsRUFBNEI7QUFDMUIsMEJBQVU7QUFEZ0IsZUFBNUJBO0FBR0Q7QUFFRDs7Ozs7OztvQ0FJUTtBQUFBLGtCQUFBLE1BQUEsR0FBQSxJQUFBOztBQUNOQyxjQUFBQSx3REFBQUEsQ0FBQUEsWUFBQUEsQ0FBQUEsQ0FBQUEsS0FBQUE7O0FBQ0EsbUJBQUEsRUFBQSxHQUFVLEtBQUEsUUFBQSxDQUFBLElBQUEsQ0FBVixJQUFVLENBQVY7QUFDQSxtQkFBQSxRQUFBLEdBQUEsS0FBQTtBQUNBLG1CQUFBLE1BQUEsR0FBYztBQUFDQyxnQkFBQUEsRUFBRSxFQUFFRCx3REFBQUEsQ0FBQUEsWUFBQUEsQ0FBQUEsQ0FBV0U7QUFBaEIsZUFBZDtBQUVBLG1CQUFBLE9BQUEsR0FBZUwsMkNBQUFBLEdBQUMsZ0JBQUEsTUFBQSxDQUFnQixLQUFoQixFQUFBLEVBQURBLEtBQUMsQ0FBREEsQ0FBQUEsQ0FBQUEsTUFBQUEsR0FBdUNBLDJDQUFBQSxHQUFDLGdCQUFBLE1BQUEsQ0FBZ0IsS0FBaEIsRUFBQSxFQUF4Q0EsS0FBd0MsQ0FBREEsQ0FBdkNBLEdBQXVFQSwyQ0FBQUEsR0FBQyxrQkFBQSxNQUFBLENBQWtCLEtBQWxCLEVBQUEsRUFBdkYsS0FBdUYsQ0FBREEsQ0FBdEY7QUFDQSxtQkFBQSxPQUFBLENBQUEsSUFBQSxDQUFrQjtBQUNoQixpQ0FBaUIsS0FERCxFQUFBO0FBRWhCLGlDQUZnQixJQUFBO0FBR2hCLDRCQUFZO0FBSEksZUFBbEI7O0FBTUEsa0JBQUksS0FBQSxPQUFBLENBQUEsVUFBQSxJQUEyQixLQUFBLFFBQUEsQ0FBQSxRQUFBLENBQS9CLE1BQStCLENBQS9CLEVBQStEO0FBQzdELHFCQUFBLE9BQUEsQ0FBQSxVQUFBLEdBQUEsSUFBQTtBQUNBLHFCQUFBLE9BQUEsQ0FBQSxPQUFBLEdBQUEsS0FBQTtBQUNEOztBQUNELGtCQUFJLEtBQUEsT0FBQSxDQUFBLE9BQUEsSUFBd0IsQ0FBQyxLQUE3QixRQUFBLEVBQTRDO0FBQzFDLHFCQUFBLFFBQUEsR0FBZ0IsS0FBQSxZQUFBLENBQWtCLEtBQWxDLEVBQWdCLENBQWhCO0FBQ0Q7O0FBRUQsbUJBQUEsUUFBQSxDQUFBLElBQUEsQ0FBbUI7QUFDZix3QkFEZSxRQUFBO0FBRWYsK0JBRmUsSUFBQTtBQUdmLGlDQUFpQixLQUhGLEVBQUE7QUFJZiwrQkFBZSxLQUFLTTtBQUpMLGVBQW5COztBQU9BLGtCQUFHLEtBQUgsUUFBQSxFQUFrQjtBQUNoQixxQkFBQSxRQUFBLENBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBZ0MsS0FBaEMsUUFBQTtBQURGLGVBQUEsTUFFTztBQUNMLHFCQUFBLFFBQUEsQ0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFnQ04sMkNBQUFBLEdBQUUsS0FBQSxPQUFBLENBQWxDLFFBQWdDQSxDQUFoQztBQUNBLHFCQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsaUJBQUE7QUFDRDs7QUFDRCxtQkFBQSxPQUFBOztBQUNBLGtCQUFJLEtBQUEsT0FBQSxDQUFBLFFBQUEsSUFBeUJPLE1BQU0sQ0FBTkEsUUFBQUEsQ0FBQUEsSUFBQUEsS0FBQUEsSUFBQUEsTUFBQUEsQ0FBK0IsS0FBNUQsRUFBNkJBLENBQTdCLEVBQXdFO0FBQ3RFLHFCQUFBLGNBQUEsR0FBc0JDLE1BQUFBLENBQUFBLG1EQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxDQUFBQSxDQUFPUiwyQ0FBQUEsR0FBRCxNQUFDQSxDQUFQUSxFQUFrQixZQUFBO0FBQUEseUJBQU0sTUFBSSxDQUFWLElBQU0sRUFBTjtBQUF4QyxpQkFBc0JBLENBQXRCO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7OzJDQUllO0FBQ2Isa0JBQUlDLHdCQUF3QixHQUE1QixFQUFBOztBQUVBLGtCQUFJLEtBQUEsT0FBQSxDQUFKLHdCQUFBLEVBQTJDO0FBQ3pDQSxnQkFBQUEsd0JBQXdCLEdBQUcsTUFBTSxLQUFBLE9BQUEsQ0FBakNBLHdCQUFBQTtBQUNEOztBQUVELHFCQUFPVCwyQ0FBQUEsR0FBQUEsYUFBQUEsQ0FBQUEsQ0FBQUEsUUFBQUEsQ0FDSyxtQkFETEEsd0JBQUFBLEVBQUFBLFFBQUFBLENBRUssS0FBQSxPQUFBLENBRlosUUFBT0EsQ0FBUDtBQUdEO0FBRUQ7Ozs7Ozs7OzhDQUtrQjtBQUNoQixrQkFBSVUsS0FBSyxHQUFHLEtBQUEsUUFBQSxDQUFaLFVBQVksRUFBWjtBQUNBLGtCQUFJQyxVQUFVLEdBQUdYLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFqQixLQUFpQkEsRUFBakI7QUFDQSxrQkFBSVksTUFBTSxHQUFHLEtBQUEsUUFBQSxDQUFiLFdBQWEsRUFBYjtBQUNBLGtCQUFJQyxXQUFXLEdBQUdiLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFsQixNQUFrQkEsRUFBbEI7QUFDQSxrQkFBQSxJQUFBO0FBQUEsa0JBQVVjLEdBQUcsR0FBYixJQUFBOztBQUNBLGtCQUFJLEtBQUEsT0FBQSxDQUFBLE9BQUEsS0FBSixNQUFBLEVBQXFDO0FBQ25DQyxnQkFBQUEsSUFBSSxHQUFHQyxRQUFRLENBQUMsQ0FBQ0wsVUFBVSxHQUFYLEtBQUEsSUFBRCxDQUFBLEVBQWZJLEVBQWUsQ0FBZkE7QUFERixlQUFBLE1BRU87QUFDTEEsZ0JBQUFBLElBQUksR0FBR0MsUUFBUSxDQUFDLEtBQUEsT0FBQSxDQUFELE9BQUEsRUFBZkQsRUFBZSxDQUFmQTtBQUNEOztBQUNELGtCQUFJLEtBQUEsT0FBQSxDQUFBLE9BQUEsS0FBSixNQUFBLEVBQXFDO0FBQ25DLG9CQUFJSCxNQUFNLEdBQVYsV0FBQSxFQUEwQjtBQUN4QkUsa0JBQUFBLEdBQUcsR0FBR0UsUUFBUSxDQUFDQyxJQUFJLENBQUpBLEdBQUFBLENBQUFBLEdBQUFBLEVBQWNKLFdBQVcsR0FBMUIsRUFBQ0ksQ0FBRCxFQUFkSCxFQUFjLENBQWRBO0FBREYsaUJBQUEsTUFFTztBQUNMQSxrQkFBQUEsR0FBRyxHQUFHRSxRQUFRLENBQUMsQ0FBQ0gsV0FBVyxHQUFaLE1BQUEsSUFBRCxDQUFBLEVBQWRDLEVBQWMsQ0FBZEE7QUFDRDtBQUxILGVBQUEsTUFNTyxJQUFJLEtBQUEsT0FBQSxDQUFBLE9BQUEsS0FBSixJQUFBLEVBQW1DO0FBQ3hDQSxnQkFBQUEsR0FBRyxHQUFHRSxRQUFRLENBQUMsS0FBQSxPQUFBLENBQUQsT0FBQSxFQUFkRixFQUFjLENBQWRBO0FBQ0Q7O0FBRUQsa0JBQUlBLEdBQUcsS0FBUCxJQUFBLEVBQWtCO0FBQ2hCLHFCQUFBLFFBQUEsQ0FBQSxHQUFBLENBQWtCO0FBQUNBLGtCQUFBQSxHQUFHLEVBQUVBLEdBQUcsR0FBRztBQUFaLGlCQUFsQjtBQXRCYyxlQUFBLENBeUJoQjtBQUNBOzs7QUFDQSxrQkFBSSxDQUFDLEtBQUQsUUFBQSxJQUFtQixLQUFBLE9BQUEsQ0FBQSxPQUFBLEtBQXZCLE1BQUEsRUFBeUQ7QUFDdkQscUJBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBa0I7QUFBQ0Msa0JBQUFBLElBQUksRUFBRUEsSUFBSSxHQUFHO0FBQWQsaUJBQWxCO0FBQ0EscUJBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBa0I7QUFBQ0csa0JBQUFBLE1BQU0sRUFBRTtBQUFULGlCQUFsQjtBQUNEO0FBRUY7QUFFRDs7Ozs7OztzQ0FJVTtBQUFBLGtCQUFBLE1BQUEsR0FBQSxJQUFBOztBQUNSLGtCQUFJQyxLQUFLLEdBQVQsSUFBQTs7QUFFQSxtQkFBQSxRQUFBLENBQUEsRUFBQSxDQUFpQjtBQUNmLG1DQUFtQixLQUFBLElBQUEsQ0FBQSxJQUFBLENBREosSUFDSSxDQURKO0FBRWYsb0NBQW9CLFNBQUEsY0FBQSxDQUFBLEtBQUEsRUFBQSxRQUFBLEVBQXFCO0FBQ3ZDLHNCQUFLQyxLQUFLLENBQUxBLE1BQUFBLEtBQWlCRCxLQUFLLENBQUxBLFFBQUFBLENBQWxCLENBQWtCQSxDQUFqQkMsSUFDQXBCLDJDQUFBQSxHQUFFb0IsS0FBSyxDQUFQcEIsTUFBQUEsQ0FBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsaUJBQUFBLEVBQUFBLENBQUFBLE1BREwsUUFBQSxFQUNrRTtBQUFFO0FBQ2xFLDJCQUFPLE1BQUksQ0FBSixLQUFBLENBQUEsS0FBQSxDQUFQLE1BQU8sQ0FBUDtBQUNEO0FBTlksaUJBQUE7QUFRZixxQ0FBcUIsS0FBQSxNQUFBLENBQUEsSUFBQSxDQVJOLElBUU0sQ0FSTjtBQVNmLHVDQUF1QixTQUFBLGlCQUFBLEdBQVc7QUFDaENtQixrQkFBQUEsS0FBSyxDQUFMQSxlQUFBQTtBQUNEO0FBWGMsZUFBakI7O0FBY0Esa0JBQUksS0FBQSxPQUFBLENBQUEsWUFBQSxJQUE2QixLQUFBLE9BQUEsQ0FBakMsT0FBQSxFQUF1RDtBQUNyRCxxQkFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLFlBQUEsRUFBQSxFQUFBLENBQUEsaUJBQUEsRUFBc0QsVUFBQSxDQUFBLEVBQVk7QUFDaEUsc0JBQUlFLENBQUMsQ0FBREEsTUFBQUEsS0FBYUYsS0FBSyxDQUFMQSxRQUFBQSxDQUFiRSxDQUFhRixDQUFiRSxJQUNGckIsMkNBQUFBLENBQUFBLENBQUFBLENBQUFBLFFBQUFBLENBQVdtQixLQUFLLENBQUxBLFFBQUFBLENBQVhuQixDQUFXbUIsQ0FBWG5CLEVBQThCcUIsQ0FBQyxDQUQ3QkEsTUFDRnJCLENBREVxQixJQUVBLENBQUNyQiwyQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsUUFBQUEsRUFBcUJxQixDQUFDLENBRjNCLE1BRUtyQixDQUZMLEVBRXFDO0FBQy9CO0FBQ0w7O0FBQ0RtQixrQkFBQUEsS0FBSyxDQUFMQSxLQUFBQTtBQU5GLGlCQUFBO0FBUUQ7O0FBQ0Qsa0JBQUksS0FBQSxPQUFBLENBQUosUUFBQSxFQUEyQjtBQUN6Qm5CLGdCQUFBQSwyQ0FBQUEsR0FBQUEsTUFBQUEsQ0FBQUEsQ0FBQUEsRUFBQUEsQ0FBQUEsd0JBQUFBLE1BQUFBLENBQXFDLEtBQXJDQSxFQUFBQSxDQUFBQSxFQUFnRCxLQUFBLFlBQUEsQ0FBQSxJQUFBLENBQWhEQSxJQUFnRCxDQUFoREE7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7eUNBSWFxQixDLEVBQUc7QUFDZCxrQkFBR2QsTUFBTSxDQUFOQSxRQUFBQSxDQUFBQSxJQUFBQSxLQUEyQixNQUFNLEtBQWpDQSxFQUFBQSxJQUE2QyxDQUFDLEtBQWpELFFBQUEsRUFBK0Q7QUFBRSxxQkFBQSxJQUFBO0FBQWpFLGVBQUEsTUFDSTtBQUFFLHFCQUFBLEtBQUE7QUFBZTtBQUN0QjtBQUVEOzs7Ozs7OzJDQUllZSxTLEVBQVc7QUFDeEJBLGNBQUFBLFNBQVMsR0FBR0EsU0FBUyxJQUFJdEIsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQXpCc0IsU0FBeUJ0QixFQUF6QnNCOztBQUNBLGtCQUFJdEIsMkNBQUFBLEdBQUFBLFFBQUFBLENBQUFBLENBQUFBLE1BQUFBLEtBQXVCQSwyQ0FBQUEsR0FBQUEsTUFBQUEsQ0FBQUEsQ0FBM0IsTUFBMkJBLEVBQTNCLEVBQStDO0FBQzdDQSxnQkFBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLEtBQUFBLEVBQ2MsQ0FEZEEsU0FBQUE7QUFFRDtBQUNGO0FBRUQ7Ozs7Ozs7MENBSWNzQixTLEVBQVc7QUFDdkJBLGNBQUFBLFNBQVMsR0FBR0EsU0FBUyxJQUFJTixRQUFRLENBQUNoQiwyQ0FBQUEsR0FBQUEsTUFBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBbENzQixLQUFrQ3RCLENBQUQsQ0FBakNzQjs7QUFDQSxrQkFBSXRCLDJDQUFBQSxHQUFBQSxRQUFBQSxDQUFBQSxDQUFBQSxNQUFBQSxLQUF1QkEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQTNCLE1BQTJCQSxFQUEzQixFQUErQztBQUM3Q0EsZ0JBQUFBLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxLQUFBQSxFQUFBQSxFQUFBQTtBQUVBQSxnQkFBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLFNBQUFBLENBQW9CLENBQXBCQSxTQUFBQTtBQUNEO0FBQ0Y7QUFHRDs7Ozs7Ozs7O21DQU1PO0FBQUEsa0JBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQSxDQUNMOzs7QUFDQSxrQkFBTXVCLElBQUksR0FBQSxJQUFBLE1BQUEsQ0FBTyxLQUFqQixFQUFVLENBQVY7O0FBQ0Esa0JBQUksS0FBQSxPQUFBLENBQUEsUUFBQSxJQUF5QmhCLE1BQU0sQ0FBTkEsUUFBQUEsQ0FBQUEsSUFBQUEsS0FBN0IsSUFBQSxFQUE0RDtBQUUxRCxvQkFBSUEsTUFBTSxDQUFOQSxPQUFBQSxDQUFKLFNBQUEsRUFBOEI7QUFDNUIsc0JBQUksS0FBQSxPQUFBLENBQUosYUFBQSxFQUFnQztBQUM5QkEsb0JBQUFBLE1BQU0sQ0FBTkEsT0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsRUFBQUEsRUFBQUEsRUFBQUEsRUFBQUEsSUFBQUE7QUFERixtQkFBQSxNQUVPO0FBQ0xBLG9CQUFBQSxNQUFNLENBQU5BLE9BQUFBLENBQUFBLFlBQUFBLENBQUFBLEVBQUFBLEVBQUFBLEVBQUFBLEVBQUFBLElBQUFBO0FBQ0Q7QUFMSCxpQkFBQSxNQU1PO0FBQ0xBLGtCQUFBQSxNQUFNLENBQU5BLFFBQUFBLENBQUFBLElBQUFBLEdBQUFBLElBQUFBO0FBQ0Q7QUFiRSxlQUFBLENBZ0JMOzs7QUFDQSxtQkFBQSxhQUFBLEdBQXFCUCwyQ0FBQUEsR0FBRXdCLFFBQVEsQ0FBVnhCLGFBQUFBLENBQUFBLENBQUFBLEVBQUFBLENBQTZCLEtBQTdCQSxPQUFBQSxJQUE2Q0EsMkNBQUFBLEdBQUV3QixRQUFRLENBQXZEeEIsYUFBNkNBLENBQTdDQSxHQUF5RSxLQUE5RixPQUFBO0FBRUEsbUJBQUEsUUFBQSxHQW5CSyxJQW1CTCxDQW5CSyxDQXFCTDs7QUFDQSxtQkFBQSxRQUFBLENBQUEsR0FBQSxDQUNTO0FBQUUsOEJBQWM7QUFBaEIsZUFEVCxFQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQTs7QUFJQSxrQkFBSSxLQUFBLE9BQUEsQ0FBSixPQUFBLEVBQTBCO0FBQ3hCLHFCQUFBLFFBQUEsQ0FBQSxHQUFBLENBQWtCO0FBQUMsZ0NBQWM7QUFBZixpQkFBbEIsRUFBQSxJQUFBO0FBQ0Q7O0FBRUQsbUJBQUEsZUFBQTs7QUFFQSxtQkFBQSxRQUFBLENBQUEsSUFBQSxHQUFBLEdBQUEsQ0FFTztBQUFFLDhCQUFjO0FBQWhCLGVBRlA7O0FBSUEsa0JBQUcsS0FBSCxRQUFBLEVBQWtCO0FBQ2hCLHFCQUFBLFFBQUEsQ0FBQSxHQUFBLENBQWtCO0FBQUMsZ0NBQWM7QUFBZixpQkFBbEIsRUFBQSxJQUFBOztBQUNBLG9CQUFHLEtBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBSCxNQUFHLENBQUgsRUFBbUM7QUFDakMsdUJBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxNQUFBO0FBREYsaUJBQUEsTUFFTyxJQUFJLEtBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBSixNQUFJLENBQUosRUFBb0M7QUFDekMsdUJBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxNQUFBO0FBQ0Q7QUFDRjs7QUFHRCxrQkFBSSxDQUFDLEtBQUEsT0FBQSxDQUFMLGNBQUEsRUFBa0M7QUFDaEM7Ozs7O0FBS0EscUJBQUEsUUFBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxFQUEyQyxLQUEzQyxFQUFBO0FBQ0Q7O0FBRUQsbUJBQUEsY0FBQTs7QUFFQSxrQkFBSW1CLEtBQUssR0F6REosSUF5REwsQ0F6REssQ0EyREw7OztBQUNBLGtCQUFJLEtBQUEsT0FBQSxDQUFKLFdBQUEsRUFBOEI7QUFBQSxvQkFDbkJNLGNBRG1CLEdBQzVCLFNBQUEsY0FBQSxHQUF5QjtBQUN2Qk4sa0JBQUFBLEtBQUssQ0FBTEEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FDUTtBQUNKLG1DQURJLEtBQUE7QUFFSixnQ0FBWSxDQUFDO0FBRlQsbUJBRFJBLEVBQUFBLEtBQUFBOztBQU1BQSxrQkFBQUEsS0FBSyxDQUFMQSxpQkFBQUE7O0FBQ0FqQixrQkFBQUEsc0RBQUFBLENBQUFBLFVBQUFBLENBQUFBLENBQUFBLFNBQUFBLENBQW1CaUIsS0FBSyxDQUF4QmpCLFFBQUFBO0FBVDBCLGlCQUFBOztBQVc1QixvQkFBSSxLQUFBLE9BQUEsQ0FBSixPQUFBLEVBQTBCO0FBQ3hCd0Isa0JBQUFBLG9EQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxDQUFBQSxTQUFBQSxDQUFpQixLQUFqQkEsUUFBQUEsRUFBQUEsU0FBQUE7QUFDRDs7QUFDREEsZ0JBQUFBLG9EQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxDQUFBQSxTQUFBQSxDQUFpQixLQUFqQkEsUUFBQUEsRUFBZ0MsS0FBQSxPQUFBLENBQWhDQSxXQUFBQSxFQUEwRCxZQUFNO0FBQzlELHNCQUFHLE1BQUksQ0FBUCxRQUFBLEVBQWtCO0FBQUU7QUFDbEIsb0JBQUEsTUFBSSxDQUFKLGlCQUFBLEdBQXlCeEIsc0RBQUFBLENBQUFBLFVBQUFBLENBQUFBLENBQUFBLGFBQUFBLENBQXVCLE1BQUksQ0FBcEQsUUFBeUJBLENBQXpCO0FBQ0F1QixvQkFBQUEsY0FBYztBQUNmO0FBSkhDLGlCQUFBQTtBQWRGLGVBQUEsQ0FxQkE7QUFyQkEsbUJBc0JLO0FBQ0gsc0JBQUksS0FBQSxPQUFBLENBQUosT0FBQSxFQUEwQjtBQUN4Qix5QkFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7QUFDRDs7QUFDRCx1QkFBQSxRQUFBLENBQUEsSUFBQSxDQUFtQixLQUFBLE9BQUEsQ0FBbkIsU0FBQTtBQXRGRyxpQkFBQSxDQXlGTDs7O0FBQ0EsbUJBQUEsUUFBQSxDQUFBLElBQUEsQ0FDUTtBQUNKLCtCQURJLEtBQUE7QUFFSiw0QkFBWSxDQUFDO0FBRlQsZUFEUixFQUFBLEtBQUE7O0FBTUF4QixjQUFBQSxzREFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsQ0FBQUEsU0FBQUEsQ0FBbUIsS0FBbkJBLFFBQUFBOztBQUVBLG1CQUFBLGlCQUFBOztBQUVBLG1CQUFBLG1CQUFBO0FBRUE7Ozs7OztBQUlBLG1CQUFBLFFBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUE7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OztnREFXb0I7QUFDbEIsa0JBQU15QixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMzQixnQkFBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLFdBQUFBLENBQUFBLGVBQUFBLEVBQXVDLENBQUMsRUFBRUEsMkNBQUFBLEdBQUFBLFFBQUFBLENBQUFBLENBQUFBLE1BQUFBLEtBQXVCQSwyQ0FBQUEsR0FBQUEsTUFBQUEsQ0FBQUEsQ0FBakVBLE1BQWlFQSxFQUF6QixDQUF4Q0E7QUFERixlQUFBOztBQUlBLG1CQUFBLFFBQUEsQ0FBQSxFQUFBLENBQUEsNkNBQUEsRUFBZ0UsWUFBQTtBQUFBLHVCQUFNMkIsb0JBQU4sRUFBQTtBQUFoRSxlQUFBO0FBQ0FBLGNBQUFBLG9CQUFvQjtBQUNwQjNCLGNBQUFBLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxnQkFBQUE7QUFDRDtBQUVEOzs7Ozs7O21EQUl1QjtBQUNyQixtQkFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLDZDQUFBO0FBQ0FBLGNBQUFBLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxXQUFBQSxDQUFBQSxnQkFBQUE7QUFDQUEsY0FBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLFdBQUFBLENBQUFBLGVBQUFBO0FBQ0Q7QUFFRDs7Ozs7OztrREFJc0I7QUFDcEIsa0JBQUltQixLQUFLLEdBQVQsSUFBQTs7QUFDQSxrQkFBRyxDQUFDLEtBQUosUUFBQSxFQUFtQjtBQUFFO0FBRkQsZUFBQSxDQUVXOzs7QUFDL0IsbUJBQUEsaUJBQUEsR0FBeUJqQixzREFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsQ0FBQUEsYUFBQUEsQ0FBdUIsS0FBaEQsUUFBeUJBLENBQXpCOztBQUVBLGtCQUFJLENBQUMsS0FBQSxPQUFBLENBQUQsT0FBQSxJQUF5QixLQUFBLE9BQUEsQ0FBekIsWUFBQSxJQUFzRCxDQUFDLEtBQUEsT0FBQSxDQUEzRCxVQUFBLEVBQW9GO0FBQ2xGRixnQkFBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLEVBQUFBLENBQUFBLGlCQUFBQSxFQUFnQyxVQUFBLENBQUEsRUFBWTtBQUMxQyxzQkFBSXFCLENBQUMsQ0FBREEsTUFBQUEsS0FBYUYsS0FBSyxDQUFMQSxRQUFBQSxDQUFiRSxDQUFhRixDQUFiRSxJQUNGckIsMkNBQUFBLENBQUFBLENBQUFBLENBQUFBLFFBQUFBLENBQVdtQixLQUFLLENBQUxBLFFBQUFBLENBQVhuQixDQUFXbUIsQ0FBWG5CLEVBQThCcUIsQ0FBQyxDQUQ3QkEsTUFDRnJCLENBREVxQixJQUVBLENBQUNyQiwyQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsUUFBQUEsRUFBcUJxQixDQUFDLENBRjNCLE1BRUtyQixDQUZMLEVBRXFDO0FBQUU7QUFBUzs7QUFDaERtQixrQkFBQUEsS0FBSyxDQUFMQSxLQUFBQTtBQUpGbkIsaUJBQUFBO0FBTUQ7O0FBRUQsa0JBQUksS0FBQSxPQUFBLENBQUosVUFBQSxFQUE2QjtBQUMzQkEsZ0JBQUFBLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxFQUFBQSxDQUFBQSxtQkFBQUEsRUFBa0MsVUFBQSxDQUFBLEVBQVk7QUFDNUNFLGtCQUFBQSxzREFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsQ0FBQUEsRUFBQUEsUUFBQUEsRUFBZ0M7QUFDOUIwQixvQkFBQUEsS0FBSyxFQUFFLFNBQUEsS0FBQSxHQUFXO0FBQ2hCLDBCQUFJVCxLQUFLLENBQUxBLE9BQUFBLENBQUosVUFBQSxFQUE4QjtBQUM1QkEsd0JBQUFBLEtBQUssQ0FBTEEsS0FBQUE7QUFDRDtBQUNGO0FBTDZCLG1CQUFoQ2pCO0FBREZGLGlCQUFBQTtBQVNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7b0NBS1E7QUFDTixrQkFBSSxDQUFDLEtBQUQsUUFBQSxJQUFrQixDQUFDLEtBQUEsUUFBQSxDQUFBLEVBQUEsQ0FBdkIsVUFBdUIsQ0FBdkIsRUFBcUQ7QUFDbkQsdUJBQUEsS0FBQTtBQUNEOztBQUNELGtCQUFJbUIsS0FBSyxHQUpILElBSU4sQ0FKTSxDQU1OOzs7QUFDQSxrQkFBSSxLQUFBLE9BQUEsQ0FBSixZQUFBLEVBQStCO0FBQzdCLG9CQUFJLEtBQUEsT0FBQSxDQUFKLE9BQUEsRUFBMEI7QUFDeEJPLGtCQUFBQSxvREFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsQ0FBQUEsVUFBQUEsQ0FBa0IsS0FBbEJBLFFBQUFBLEVBQUFBLFVBQUFBO0FBQ0Q7O0FBRURBLGdCQUFBQSxvREFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsQ0FBQUEsVUFBQUEsQ0FBa0IsS0FBbEJBLFFBQUFBLEVBQWlDLEtBQUEsT0FBQSxDQUFqQ0EsWUFBQUEsRUFBQUEsUUFBQUE7QUFMRixlQUFBLENBT0E7QUFQQSxtQkFRSztBQUNILHVCQUFBLFFBQUEsQ0FBQSxJQUFBLENBQW1CLEtBQUEsT0FBQSxDQUFuQixTQUFBOztBQUVBLHNCQUFJLEtBQUEsT0FBQSxDQUFKLE9BQUEsRUFBMEI7QUFDeEIseUJBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsUUFBQTtBQURGLG1CQUFBLE1BR0s7QUFDSEcsb0JBQUFBLFFBQVE7QUFDVDtBQXZCRyxpQkFBQSxDQTBCTjs7O0FBQ0Esa0JBQUksS0FBQSxPQUFBLENBQUosVUFBQSxFQUE2QjtBQUMzQjdCLGdCQUFBQSwyQ0FBQUEsR0FBQUEsTUFBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsbUJBQUFBO0FBQ0Q7O0FBRUQsa0JBQUksQ0FBQyxLQUFBLE9BQUEsQ0FBRCxPQUFBLElBQXlCLEtBQUEsT0FBQSxDQUE3QixZQUFBLEVBQXdEO0FBQ3REQSxnQkFBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLGlCQUFBQTtBQUNEOztBQUVELG1CQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsbUJBQUE7O0FBRUEsdUJBQUEsUUFBQSxHQUFvQjtBQUVsQjtBQUNBO0FBQ0E7QUFDQSxvQkFBSXNCLFNBQVMsR0FBR04sUUFBUSxDQUFDaEIsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQXpCLEtBQXlCQSxDQUFELENBQXhCOztBQUVBLG9CQUFJQSwyQ0FBQUEsR0FBQUEsaUJBQUFBLENBQUFBLENBQUFBLE1BQUFBLEtBQUosQ0FBQSxFQUF3QztBQUN0Q21CLGtCQUFBQSxLQUFLLENBRGlDLG9CQUN0Q0EsR0FEc0MsQ0FDUjs7QUFDL0I7O0FBRURqQixnQkFBQUEsc0RBQUFBLENBQUFBLFVBQUFBLENBQUFBLENBQUFBLFlBQUFBLENBQXNCaUIsS0FBSyxDQUEzQmpCLFFBQUFBOztBQUVBaUIsZ0JBQUFBLEtBQUssQ0FBTEEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsRUFBQUEsSUFBQUE7O0FBRUFBLGdCQUFBQSxLQUFLLENBQUxBLGFBQUFBLENBQUFBLFNBQUFBO0FBRUE7Ozs7OztBQUlBQSxnQkFBQUEsS0FBSyxDQUFMQSxRQUFBQSxDQUFBQSxPQUFBQSxDQUFBQSxrQkFBQUE7QUFDRDtBQUVEOzs7Ozs7QUFJQSxrQkFBSSxLQUFBLE9BQUEsQ0FBSixZQUFBLEVBQStCO0FBQzdCLHFCQUFBLFFBQUEsQ0FBQSxJQUFBLENBQW1CLEtBQUEsUUFBQSxDQUFuQixJQUFtQixFQUFuQjtBQUNEOztBQUVELG1CQUFBLFFBQUEsR0FyRU0sS0FxRU4sQ0FyRU0sQ0FzRU47O0FBQ0Esa0JBQUlBLEtBQUssQ0FBTEEsT0FBQUEsQ0FBQUEsUUFBQUEsSUFBMEJaLE1BQU0sQ0FBTkEsUUFBQUEsQ0FBQUEsSUFBQUEsS0FBQUEsSUFBQUEsTUFBQUEsQ0FBNkIsS0FBM0QsRUFBOEJBLENBQTlCLEVBQXNFO0FBQ3BFO0FBQ0Esb0JBQUlBLE1BQU0sQ0FBTkEsT0FBQUEsQ0FBSixZQUFBLEVBQWlDO0FBQy9CLHNCQUFNdUIsY0FBYyxHQUFHdkIsTUFBTSxDQUFOQSxRQUFBQSxDQUFBQSxRQUFBQSxHQUEyQkEsTUFBTSxDQUFOQSxRQUFBQSxDQUFsRCxNQUFBOztBQUNBLHNCQUFJLEtBQUEsT0FBQSxDQUFKLGFBQUEsRUFBZ0M7QUFDOUJBLG9CQUFBQSxNQUFNLENBQU5BLE9BQUFBLENBQUFBLFNBQUFBLENBQUFBLEVBQUFBLEVBQUFBLEVBQUFBLEVBRDhCLGNBQzlCQSxFQUQ4QixDQUNvQjtBQURwRCxtQkFBQSxNQUVPO0FBQ0xBLG9CQUFBQSxNQUFNLENBQU5BLE9BQUFBLENBQUFBLFlBQUFBLENBQUFBLEVBQUFBLEVBQWdDaUIsUUFBUSxDQUF4Q2pCLEtBQUFBLEVBQUFBLGNBQUFBO0FBQ0Q7QUFOSCxpQkFBQSxNQU9PO0FBQ0xBLGtCQUFBQSxNQUFNLENBQU5BLFFBQUFBLENBQUFBLElBQUFBLEdBQUFBLEVBQUFBO0FBQ0Q7QUFDRjs7QUFFRCxtQkFBQSxhQUFBLENBQUEsS0FBQTtBQUNEO0FBRUQ7Ozs7Ozs7cUNBSVM7QUFDUCxrQkFBSSxLQUFKLFFBQUEsRUFBbUI7QUFDakIscUJBQUEsS0FBQTtBQURGLGVBQUEsTUFFTztBQUNMLHFCQUFBLElBQUE7QUFDRDtBQUNGOzs7O0FBRUQ7Ozs7dUNBSVc7QUFDVCxrQkFBSSxLQUFBLE9BQUEsQ0FBSixPQUFBLEVBQTBCO0FBQ3hCLHFCQUFBLFFBQUEsQ0FBQSxRQUFBLENBQXVCUCwyQ0FBQUEsR0FBRSxLQUFBLE9BQUEsQ0FERCxRQUNEQSxDQUF2QixFQUR3QixDQUMwQjs7QUFDbEQscUJBQUEsUUFBQSxDQUFBLElBQUEsR0FBQSxHQUFBLEdBQUEsTUFBQTtBQUNEOztBQUNELG1CQUFBLFFBQUEsQ0FBQSxJQUFBLEdBQUEsR0FBQTtBQUNBLG1CQUFBLE9BQUEsQ0FBQSxHQUFBLENBQUEsS0FBQTtBQUNBQSxjQUFBQSwyQ0FBQUEsR0FBQUEsTUFBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsY0FBQUEsTUFBQUEsQ0FBNEIsS0FBNUJBLEVBQUFBLENBQUFBO0FBQ0Esa0JBQUksS0FBSixjQUFBLEVBQXlCQSwyQ0FBQUEsR0FBQUEsTUFBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBYyxLQUFkQSxjQUFBQTs7QUFFekIsa0JBQUlBLDJDQUFBQSxHQUFBQSxpQkFBQUEsQ0FBQUEsQ0FBQUEsTUFBQUEsS0FBSixDQUFBLEVBQXdDO0FBQ3RDLHFCQURzQyxvQkFDdEMsR0FEc0MsQ0FDVDs7QUFDOUI7QUFDRjs7OztVQTNla0IrQixtREFBQUEsQ0FBQUEsUUFBQUEsQzs7QUE4ZXJCbEMsUUFBQUEsTUFBTSxDQUFOQSxRQUFBQSxHQUFrQjtBQUNoQjs7Ozs7O0FBTUFtQyxVQUFBQSxXQUFXLEVBUEssRUFBQTs7QUFRaEI7Ozs7OztBQU1BQyxVQUFBQSxZQUFZLEVBZEksRUFBQTs7QUFlaEI7Ozs7OztBQU1BQyxVQUFBQSxTQUFTLEVBckJPLENBQUE7O0FBc0JoQjs7Ozs7O0FBTUFDLFVBQUFBLFNBQVMsRUE1Qk8sQ0FBQTs7QUE2QmhCOzs7Ozs7QUFNQUMsVUFBQUEsWUFBWSxFQW5DSSxJQUFBOztBQW9DaEI7Ozs7OztBQU1BQyxVQUFBQSxVQUFVLEVBMUNNLElBQUE7O0FBMkNoQjs7Ozs7O0FBTUFDLFVBQUFBLGNBQWMsRUFqREUsS0FBQTs7QUFrRGhCOzs7Ozs7QUFNQUMsVUFBQUEsT0FBTyxFQXhEUyxNQUFBOztBQXlEaEI7Ozs7OztBQU1BQyxVQUFBQSxPQUFPLEVBL0RTLE1BQUE7O0FBZ0VoQjs7Ozs7O0FBTUFDLFVBQUFBLFVBQVUsRUF0RU0sS0FBQTs7QUF1RWhCOzs7Ozs7QUFNQUMsVUFBQUEsT0FBTyxFQTdFUyxJQUFBOztBQThFaEI7Ozs7OztBQU1BQyxVQUFBQSxZQUFZLEVBcEZJLEtBQUE7O0FBcUZoQjs7Ozs7OztBQU9BQyxVQUFBQSxRQUFRLEVBNUZRLEtBQUE7O0FBNkZoQjs7Ozs7QUFLQUMsVUFBQUEsYUFBYSxFQWxHRyxLQUFBOztBQW1HZDs7Ozs7O0FBTUZDLFVBQUFBLFFBQVEsRUF6R1EsTUFBQTs7QUEwR2hCOzs7Ozs7QUFNQXJDLFVBQUFBLHdCQUF3QixFQUFFO0FBaEhWLFNBQWxCWjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xnQkEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsVUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxRQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsbURBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1EQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxvREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxrQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsNERBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsb0RBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLFlBQU1rRCxnQkFBZ0IsR0FBSSxZQUFZO0FBQ3BDLGNBQUlDLFFBQVEsR0FBRyxDQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBZixFQUFlLENBQWY7O0FBQ0EsZUFBSyxJQUFJQyxDQUFDLEdBQVYsQ0FBQSxFQUFjQSxDQUFDLEdBQUdELFFBQVEsQ0FBMUIsTUFBQSxFQUFtQ0MsQ0FBbkMsRUFBQSxFQUF3QztBQUN0QyxnQkFBSSxHQUFBLE1BQUEsQ0FBR0QsUUFBUSxDQUFYLENBQVcsQ0FBWCxFQUFBLGtCQUFBLEtBQUosTUFBQSxFQUFnRDtBQUM5QyxxQkFBT3pDLE1BQU0sQ0FBQSxHQUFBLE1BQUEsQ0FBSXlDLFFBQVEsQ0FBWixDQUFZLENBQVosRUFBYixrQkFBYSxDQUFBLENBQWI7QUFDRDtBQUNGOztBQUNELGlCQUFBLEtBQUE7QUFQRixTQUEwQixFQUExQjs7QUFVQSxZQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBLEVBQUEsRUFBQSxJQUFBLEVBQWM7QUFDN0JDLFVBQUFBLEVBQUUsQ0FBRkEsSUFBQUEsQ0FBQUEsSUFBQUEsRUFBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsT0FBQUEsQ0FBaUMsVUFBQSxFQUFBLEVBQU07QUFDckNuRCxZQUFBQSwyQ0FBQUEsR0FBQyxJQUFBLE1BQUEsQ0FBREEsRUFBQyxDQUFEQSxDQUFBQSxDQUFhb0QsSUFBSSxLQUFKQSxPQUFBQSxHQUFBQSxTQUFBQSxHQUFicEQsZ0JBQUFBLEVBQUFBLEdBQUFBLE1BQUFBLENBQUFBLElBQUFBLEVBQUFBLGFBQUFBLENBQUFBLEVBQW9GLENBQXBGQSxFQUFvRixDQUFwRkE7QUFERm1ELFdBQUFBO0FBREYsU0FBQTs7QUFNQSxZQUFJbEQsUUFBUSxHQUFHO0FBQ2JvRCxVQUFBQSxTQUFTLEVBQUU7QUFDVEMsWUFBQUEsS0FBSyxFQURJLEVBQUE7QUFFVEMsWUFBQUEsTUFBTSxFQUFFO0FBRkMsV0FERTtBQUtiQyxVQUFBQSxZQUFZLEVBQUU7QUFMRCxTQUFmO0FBUUF2RCxRQUFBQSxRQUFRLENBQVJBLFNBQUFBLENBQUFBLEtBQUFBLEdBQTRCO0FBQzFCd0QsVUFBQUEsWUFBWSxFQUFFLFNBQUEsWUFBQSxHQUFXO0FBQ3ZCUCxZQUFBQSxRQUFRLENBQUNsRCwyQ0FBQUEsR0FBRCxJQUFDQSxDQUFELEVBQVJrRCxNQUFRLENBQVJBO0FBRndCLFdBQUE7QUFJMUJRLFVBQUFBLGFBQWEsRUFBRSxTQUFBLGFBQUEsR0FBVztBQUN4QixnQkFBSXBELEVBQUUsR0FBR04sMkNBQUFBLEdBQUFBLElBQUFBLENBQUFBLENBQUFBLElBQUFBLENBQVQsT0FBU0EsQ0FBVDs7QUFDQSxnQkFBQSxFQUFBLEVBQVE7QUFDTmtELGNBQUFBLFFBQVEsQ0FBQ2xELDJDQUFBQSxHQUFELElBQUNBLENBQUQsRUFBUmtELE9BQVEsQ0FBUkE7QUFERixhQUFBLE1BR0s7QUFDSGxELGNBQUFBLDJDQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxDQUFBQSxPQUFBQSxDQUFBQSxrQkFBQUE7QUFDRDtBQVh1QixXQUFBO0FBYTFCMkQsVUFBQUEsY0FBYyxFQUFFLFNBQUEsY0FBQSxHQUFXO0FBQ3pCLGdCQUFJckQsRUFBRSxHQUFHTiwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsSUFBQUEsQ0FBVCxRQUFTQSxDQUFUOztBQUNBLGdCQUFBLEVBQUEsRUFBUTtBQUNOa0QsY0FBQUEsUUFBUSxDQUFDbEQsMkNBQUFBLEdBQUQsSUFBQ0EsQ0FBRCxFQUFSa0QsUUFBUSxDQUFSQTtBQURGLGFBQUEsTUFFTztBQUNMbEQsY0FBQUEsMkNBQUFBLEdBQUFBLElBQUFBLENBQUFBLENBQUFBLE9BQUFBLENBQUFBLG1CQUFBQTtBQUNEO0FBbkJ1QixXQUFBO0FBcUIxQjRELFVBQUFBLGlCQUFpQixFQUFFLFNBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQVk7QUFDN0J2QyxZQUFBQSxDQUFDLENBQURBLGVBQUFBO0FBQ0EsZ0JBQUl3QyxTQUFTLEdBQUc3RCwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsSUFBQUEsQ0FBaEIsVUFBZ0JBLENBQWhCOztBQUVBLGdCQUFHNkQsU0FBUyxLQUFaLEVBQUEsRUFBb0I7QUFDbEJuQyxjQUFBQSxvREFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsQ0FBQUEsVUFBQUEsQ0FBa0IxQiwyQ0FBQUEsR0FBbEIwQixJQUFrQjFCLENBQWxCMEIsRUFBQUEsU0FBQUEsRUFBc0MsWUFBVztBQUMvQzFCLGdCQUFBQSwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsV0FBQUE7QUFERjBCLGVBQUFBO0FBREYsYUFBQSxNQUlLO0FBQ0gxQixjQUFBQSwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsT0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsV0FBQUE7QUFDRDtBQS9CdUIsV0FBQTtBQWlDMUI4RCxVQUFBQSxtQkFBbUIsRUFBRSxTQUFBLG1CQUFBLEdBQVc7QUFDOUIsZ0JBQUl4RCxFQUFFLEdBQUdOLDJDQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxDQUFBQSxJQUFBQSxDQUFULGNBQVNBLENBQVQ7QUFDQUEsWUFBQUEsMkNBQUFBLEdBQUMsSUFBQSxNQUFBLENBQURBLEVBQUMsQ0FBREEsQ0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsbUJBQUFBLEVBQWdELENBQUNBLDJDQUFBQSxHQUFqREEsSUFBaURBLENBQUQsQ0FBaERBO0FBQ0Q7QUFwQ3lCLFNBQTVCQyxDLENBdUNBOztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGVBQUFBLEdBQXdDLFVBQUEsS0FBQSxFQUFXO0FBQ2pEOEQsVUFBQUEsS0FBSyxDQUFMQSxHQUFBQSxDQUFBQSxrQkFBQUEsRUFBOEI5RCxRQUFRLENBQVJBLFNBQUFBLENBQUFBLEtBQUFBLENBQTlCOEQsWUFBQUE7QUFDQUEsVUFBQUEsS0FBSyxDQUFMQSxFQUFBQSxDQUFBQSxrQkFBQUEsRUFBQUEsYUFBQUEsRUFBNEM5RCxRQUFRLENBQVJBLFNBQUFBLENBQUFBLEtBQUFBLENBQTVDOEQsWUFBQUE7QUFGRjlELFNBQUFBLEMsQ0FLQTtBQUNBOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUMsVUFBQSxLQUFBLEVBQVc7QUFDbEQ4RCxVQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLGtCQUFBQSxFQUE4QjlELFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUI4RCxhQUFBQTtBQUNBQSxVQUFBQSxLQUFLLENBQUxBLEVBQUFBLENBQUFBLGtCQUFBQSxFQUFBQSxjQUFBQSxFQUE2QzlELFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBN0M4RCxhQUFBQTtBQUZGOUQsU0FBQUEsQyxDQUtBOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUEsR0FBMEMsVUFBQSxLQUFBLEVBQVc7QUFDbkQ4RCxVQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLGtCQUFBQSxFQUE4QjlELFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUI4RCxjQUFBQTtBQUNBQSxVQUFBQSxLQUFLLENBQUxBLEVBQUFBLENBQUFBLGtCQUFBQSxFQUFBQSxlQUFBQSxFQUE4QzlELFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUM4RCxjQUFBQTtBQUZGOUQsU0FBQUEsQyxDQUtBOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxvQkFBQUEsR0FBNkMsVUFBQSxLQUFBLEVBQVc7QUFDdEQ4RCxVQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLGtCQUFBQSxFQUE4QjlELFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUI4RCxpQkFBQUE7QUFDQUEsVUFBQUEsS0FBSyxDQUFMQSxFQUFBQSxDQUFBQSxrQkFBQUEsRUFBQUEsbUNBQUFBLEVBQWtFOUQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUFsRThELGlCQUFBQTtBQUZGOUQsU0FBQUEsQyxDQUtBOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxzQkFBQUEsR0FBK0MsVUFBQSxLQUFBLEVBQVc7QUFDeEQ4RCxVQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLGtDQUFBQSxFQUE4QzlELFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUM4RCxtQkFBQUE7QUFDQUEsVUFBQUEsS0FBSyxDQUFMQSxFQUFBQSxDQUFBQSxrQ0FBQUEsRUFBQUEscUJBQUFBLEVBQW9FOUQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUFwRThELG1CQUFBQTtBQUZGOUQsU0FBQUEsQyxDQU9BOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxNQUFBQSxHQUE2QjtBQUMzQitELFVBQUFBLGNBQWMsRUFBRSxTQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQWlCO0FBQy9CLGdCQUFHLENBQUgsZ0JBQUEsRUFBcUI7QUFBQztBQUNwQkMsY0FBQUEsTUFBTSxDQUFOQSxJQUFBQSxDQUFZLFlBQVU7QUFDcEJqRSxnQkFBQUEsMkNBQUFBLEdBQUFBLElBQUFBLENBQUFBLENBQUFBLGNBQUFBLENBQUFBLHFCQUFBQTtBQURGaUUsZUFBQUE7QUFGNkIsYUFBQSxDQU0vQjs7O0FBQ0FBLFlBQUFBLE1BQU0sQ0FBTkEsSUFBQUEsQ0FBQUEsYUFBQUEsRUFBQUEsUUFBQUE7QUFSeUIsV0FBQTtBQVUzQkMsVUFBQUEsY0FBYyxFQUFFLFNBQUEsY0FBQSxDQUFBLE1BQUEsRUFBaUI7QUFDL0IsZ0JBQUcsQ0FBSCxnQkFBQSxFQUFxQjtBQUFDO0FBQ3BCRCxjQUFBQSxNQUFNLENBQU5BLElBQUFBLENBQVksWUFBVTtBQUNwQmpFLGdCQUFBQSwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEscUJBQUFBO0FBREZpRSxlQUFBQTtBQUY2QixhQUFBLENBTS9COzs7QUFDQUEsWUFBQUEsTUFBTSxDQUFOQSxJQUFBQSxDQUFBQSxhQUFBQSxFQUFBQSxRQUFBQTtBQWpCeUIsV0FBQTtBQW1CM0JFLFVBQUFBLGVBQWUsRUFBRSxTQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsUUFBQSxFQUFxQjtBQUNwQyxnQkFBSUMsTUFBTSxHQUFHL0MsQ0FBQyxDQUFEQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUFBQSxHQUFBQSxFQUFiLENBQWFBLENBQWI7QUFDQSxnQkFBSWdELE9BQU8sR0FBR3JFLDJDQUFBQSxHQUFDLFNBQUEsTUFBQSxDQUFBLE1BQUEsRUFBREEsR0FBQyxDQUFEQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxvQkFBQUEsTUFBQUEsQ0FBQUEsUUFBQUEsRUFBZCxLQUFjQSxDQUFBQSxDQUFkO0FBRUFxRSxZQUFBQSxPQUFPLENBQVBBLElBQUFBLENBQWEsWUFBVTtBQUNyQixrQkFBSWxELEtBQUssR0FBR25CLDJDQUFBQSxHQUFaLElBQVlBLENBQVo7O0FBQ0FtQixjQUFBQSxLQUFLLENBQUxBLGNBQUFBLENBQUFBLGtCQUFBQSxFQUF5QyxDQUF6Q0EsS0FBeUMsQ0FBekNBO0FBRkZrRCxhQUFBQTtBQXZCeUIsV0FBQSxDQThCN0I7O0FBOUI2QixTQUE3QnBFOztBQStCQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUEsR0FBMkMsVUFBQSxVQUFBLEVBQXFCO0FBQzlELGNBQUlxRSxTQUFTLEdBQUd0RSwyQ0FBQUEsR0FBaEIsaUJBQWdCQSxDQUFoQjtBQUFBLGNBQ0l1RSxTQUFTLEdBQUcsQ0FBQSxVQUFBLEVBQUEsU0FBQSxFQURoQixRQUNnQixDQURoQjs7QUFHQSxjQUFBLFVBQUEsRUFBYztBQUNaLGdCQUFHLE9BQUEsVUFBQSxLQUFILFFBQUEsRUFBa0M7QUFDaENBLGNBQUFBLFNBQVMsQ0FBVEEsSUFBQUEsQ0FBQUEsVUFBQUE7QUFERixhQUFBLE1BRU0sSUFBRyxPQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsUUFBQSxJQUFrQyxPQUFPQyxVQUFVLENBQWpCLENBQWlCLENBQWpCLEtBQXJDLFFBQUEsRUFBdUU7QUFDM0VELGNBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFUQSxNQUFBQSxDQUFaQSxVQUFZQSxDQUFaQTtBQURJLGFBQUEsTUFFRDtBQUNIRSxjQUFBQSxPQUFPLENBQVBBLEtBQUFBLENBQUFBLDhCQUFBQTtBQUNEO0FBQ0Y7O0FBQ0QsY0FBR0gsU0FBUyxDQUFaLE1BQUEsRUFBb0I7QUFDbEIsZ0JBQUlJLFNBQVMsR0FBRyxTQUFTLENBQVQsR0FBQSxDQUFjLFVBQUEsSUFBQSxFQUFVO0FBQ3RDLHFCQUFBLGNBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQURjLGFBQUEsRUFBQSxJQUFBLENBQWhCLEdBQWdCLENBQWhCO0FBSUExRSxZQUFBQSwyQ0FBQUEsR0FBQUEsTUFBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsU0FBQUEsRUFBQUEsRUFBQUEsQ0FBQUEsU0FBQUEsRUFBdUNDLFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsTUFBQUEsQ0FBdkNELGVBQUFBO0FBQ0Q7QUFuQkhDLFNBQUFBOztBQXNCQSxpQkFBQSxzQkFBQSxDQUFBLFFBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQSxFQUE2RDtBQUMzRCxjQUFBLEtBQUE7QUFBQSxjQUFXMEUsSUFBSSxHQUFHQyxLQUFLLENBQUxBLFNBQUFBLENBQUFBLEtBQUFBLENBQUFBLElBQUFBLENBQUFBLFNBQUFBLEVBQWxCLENBQWtCQSxDQUFsQjtBQUNBNUUsVUFBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLE9BQUFBLEVBQUFBLEVBQUFBLENBQUFBLE9BQUFBLEVBQW1DLFVBQUEsQ0FBQSxFQUFZO0FBQzdDLGdCQUFBLEtBQUEsRUFBVztBQUFFNkUsY0FBQUEsWUFBWSxDQUFaQSxLQUFZLENBQVpBO0FBQXNCOztBQUNuQ0MsWUFBQUEsS0FBSyxHQUFHQyxVQUFVLENBQUMsWUFBVTtBQUMzQkMsY0FBQUEsUUFBUSxDQUFSQSxLQUFBQSxDQUFBQSxJQUFBQSxFQUFBQSxJQUFBQTtBQURnQixhQUFBLEVBRWZDLFFBQVEsSUFKa0MsRUFFM0IsQ0FBbEJILENBRjZDLENBSTFCO0FBSnJCOUUsV0FBQUE7QUFNRDs7QUFFREMsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUEsR0FBMEMsVUFBQSxRQUFBLEVBQWtCO0FBQzFELGNBQUlnRSxNQUFNLEdBQUdqRSwyQ0FBQUEsR0FBYixlQUFhQSxDQUFiOztBQUNBLGNBQUdpRSxNQUFNLENBQVQsTUFBQSxFQUFpQjtBQUNmaUIsWUFBQUEsc0JBQXNCLENBQUEsUUFBQSxFQUFBLG1CQUFBLEVBQWdDakYsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxNQUFBQSxDQUFoQyxjQUFBLEVBQXRCaUYsTUFBc0IsQ0FBdEJBO0FBQ0Q7QUFKSGpGLFNBQUFBOztBQU9BQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGlCQUFBQSxHQUEwQyxVQUFBLFFBQUEsRUFBa0I7QUFDMUQsY0FBSWdFLE1BQU0sR0FBR2pFLDJDQUFBQSxHQUFiLGVBQWFBLENBQWI7O0FBQ0EsY0FBR2lFLE1BQU0sQ0FBVCxNQUFBLEVBQWlCO0FBQ2ZpQixZQUFBQSxzQkFBc0IsQ0FBQSxRQUFBLEVBQUEsbUJBQUEsRUFBZ0NqRixRQUFRLENBQVJBLFNBQUFBLENBQUFBLE1BQUFBLENBQWhDLGNBQUEsRUFBdEJpRixNQUFzQixDQUF0QkE7QUFDRDtBQUpIakYsU0FBQUE7O0FBT0FBLFFBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEseUJBQUFBLEdBQWtELFVBQUEsS0FBQSxFQUFnQjtBQUNoRSxjQUFHLENBQUgsZ0JBQUEsRUFBcUI7QUFBRSxtQkFBQSxLQUFBO0FBQWU7O0FBQ3RDLGNBQUlnRSxNQUFNLEdBQUdGLEtBQUssQ0FBTEEsSUFBQUEsQ0FGbUQsNkNBRW5EQSxDQUFiLENBRmdFLENBSWhFOztBQUNBLGNBQUlvQix5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUEsbUJBQUEsRUFBK0I7QUFDN0QsZ0JBQUlDLE9BQU8sR0FBR3BGLDJDQUFBQSxHQUFFcUYsbUJBQW1CLENBQW5CQSxDQUFtQixDQUFuQkEsQ0FENkMsTUFDL0NyRixDQUFkLENBRDZELENBRzdEOztBQUNBLG9CQUFRcUYsbUJBQW1CLENBQW5CQSxDQUFtQixDQUFuQkEsQ0FBUixJQUFBO0FBQ0UsbUJBQUEsWUFBQTtBQUNFLG9CQUFJRCxPQUFPLENBQVBBLElBQUFBLENBQUFBLGFBQUFBLE1BQUFBLFFBQUFBLElBQTRDQyxtQkFBbUIsQ0FBbkJBLENBQW1CLENBQW5CQSxDQUFBQSxhQUFBQSxLQUFoRCxhQUFBLEVBQXdHO0FBQ3RHRCxrQkFBQUEsT0FBTyxDQUFQQSxjQUFBQSxDQUFBQSxxQkFBQUEsRUFBOEMsQ0FBQSxPQUFBLEVBQVU3RSxNQUFNLENBQTlENkUsV0FBOEMsQ0FBOUNBO0FBQ0Q7O0FBQ0Qsb0JBQUlBLE9BQU8sQ0FBUEEsSUFBQUEsQ0FBQUEsYUFBQUEsTUFBQUEsUUFBQUEsSUFBNENDLG1CQUFtQixDQUFuQkEsQ0FBbUIsQ0FBbkJBLENBQUFBLGFBQUFBLEtBQWhELGFBQUEsRUFBd0c7QUFDdEdELGtCQUFBQSxPQUFPLENBQVBBLGNBQUFBLENBQUFBLHFCQUFBQSxFQUE4QyxDQUE5Q0EsT0FBOEMsQ0FBOUNBO0FBQ0E7O0FBQ0Ysb0JBQUlDLG1CQUFtQixDQUFuQkEsQ0FBbUIsQ0FBbkJBLENBQUFBLGFBQUFBLEtBQUosT0FBQSxFQUFzRDtBQUNwREQsa0JBQUFBLE9BQU8sQ0FBUEEsT0FBQUEsQ0FBQUEsZUFBQUEsRUFBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsRUFBQUEsUUFBQUE7QUFDQUEsa0JBQUFBLE9BQU8sQ0FBUEEsT0FBQUEsQ0FBQUEsZUFBQUEsRUFBQUEsY0FBQUEsQ0FBQUEscUJBQUFBLEVBQXVFLENBQUNBLE9BQU8sQ0FBUEEsT0FBQUEsQ0FBeEVBLGVBQXdFQSxDQUFELENBQXZFQTtBQUNEOztBQUNEOztBQUVGLG1CQUFBLFdBQUE7QUFDRUEsZ0JBQUFBLE9BQU8sQ0FBUEEsT0FBQUEsQ0FBQUEsZUFBQUEsRUFBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsRUFBQUEsUUFBQUE7QUFDQUEsZ0JBQUFBLE9BQU8sQ0FBUEEsT0FBQUEsQ0FBQUEsZUFBQUEsRUFBQUEsY0FBQUEsQ0FBQUEscUJBQUFBLEVBQXVFLENBQUNBLE9BQU8sQ0FBUEEsT0FBQUEsQ0FBeEVBLGVBQXdFQSxDQUFELENBQXZFQTtBQUNBOztBQUVGO0FBQ0UsdUJBQUEsS0FBQTtBQUNGO0FBckJGO0FBSkYsV0FBQTs7QUE2QkEsY0FBSW5CLE1BQU0sQ0FBVixNQUFBLEVBQW1CO0FBQ2pCO0FBQ0EsaUJBQUssSUFBSWhCLENBQUMsR0FBVixDQUFBLEVBQWdCQSxDQUFDLElBQUlnQixNQUFNLENBQU5BLE1BQUFBLEdBQXJCLENBQUEsRUFBd0NoQixDQUF4QyxFQUFBLEVBQTZDO0FBQzNDLGtCQUFJcUMsZUFBZSxHQUFHLElBQUEsZ0JBQUEsQ0FBdEIseUJBQXNCLENBQXRCO0FBQ0FBLGNBQUFBLGVBQWUsQ0FBZkEsT0FBQUEsQ0FBd0JyQixNQUFNLENBQTlCcUIsQ0FBOEIsQ0FBOUJBLEVBQW1DO0FBQUVDLGdCQUFBQSxVQUFVLEVBQVosSUFBQTtBQUFvQkMsZ0JBQUFBLFNBQVMsRUFBN0IsSUFBQTtBQUFxQ0MsZ0JBQUFBLGFBQWEsRUFBbEQsS0FBQTtBQUEyREMsZ0JBQUFBLE9BQU8sRUFBbEUsSUFBQTtBQUEwRUMsZ0JBQUFBLGVBQWUsRUFBRSxDQUFBLGFBQUEsRUFBQSxPQUFBO0FBQTNGLGVBQW5DTDtBQUNEO0FBQ0Y7QUF4Q0hyRixTQUFBQTs7QUEyQ0FBLFFBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBLEdBQTJDLFlBQVc7QUFDcEQsY0FBSTJGLFNBQVMsR0FBRzVGLDJDQUFBQSxHQUFoQixRQUFnQkEsQ0FBaEI7QUFFQUMsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxlQUFBQSxDQUFBQSxTQUFBQTtBQUNBQSxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGdCQUFBQSxDQUFBQSxTQUFBQTtBQUNBQSxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGlCQUFBQSxDQUFBQSxTQUFBQTtBQUNBQSxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLG9CQUFBQSxDQUFBQSxTQUFBQTtBQUNBQSxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLHNCQUFBQSxDQUFBQSxTQUFBQTtBQVBGQSxTQUFBQTs7QUFXQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUEsR0FBMkMsWUFBVztBQUNwRCxjQUFJMkYsU0FBUyxHQUFHNUYsMkNBQUFBLEdBQWhCLFFBQWdCQSxDQUFoQjtBQUNBQyxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLHlCQUFBQSxDQUFBQSxTQUFBQTtBQUNBQSxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGlCQUFBQTtBQUNBQSxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGlCQUFBQTtBQUNBQSxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQTtBQUxGQSxTQUFBQTs7QUFTQUEsUUFBQUEsUUFBUSxDQUFSQSxJQUFBQSxHQUFnQixVQUFBLENBQUEsRUFBQSxVQUFBLEVBQXlCO0FBQ3ZDTyxVQUFBQSxNQUFBQSxDQUFBQSxtREFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBT1IsQ0FBQyxDQUFGLE1BQUUsQ0FBUlEsRUFBa0IsWUFBWTtBQUM1QixnQkFBSVIsQ0FBQyxDQUFEQSxtQkFBQUEsS0FBSixJQUFBLEVBQW9DO0FBQ2xDQyxjQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQTtBQUNBQSxjQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQTtBQUNBRCxjQUFBQSxDQUFDLENBQURBLG1CQUFBQSxHQUFBQSxJQUFBQTtBQUNEO0FBTEhRLFdBQUFBOztBQVFBLGNBQUEsVUFBQSxFQUFlO0FBQ2JaLFlBQUFBLFVBQVUsQ0FBVkEsUUFBQUEsR0FEYSxRQUNiQSxDQURhLENBRWI7O0FBQ0FBLFlBQUFBLFVBQVUsQ0FBVkEsUUFBQUEsR0FBc0JLLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBdEJMLGtCQUFBQTtBQUNEO0FBYkhLLFNBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblBBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FOVUE7Q0FWQSIsImZpbGUiOiJmb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC50b3VjaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiLCBcIi4vZm91bmRhdGlvbi51dGlsLnRvdWNoXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24ucmV2ZWFsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC50b3VjaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24ucmV2ZWFsXCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5tb3Rpb25cIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC50b3VjaFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX21lZGlhUXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX21vdGlvbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfdG91Y2hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IFJldmVhbCB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbkZvdW5kYXRpb24ucGx1Z2luKFJldmVhbCwgJ1JldmVhbCcpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBSZXZlYWwgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnknO1xuaW1wb3J0IHsgTW90aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uJztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBUcmlnZ2VycyB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzJztcbmltcG9ydCB7IFRvdWNoIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudG91Y2gnXG5cbi8qKlxuICogUmV2ZWFsIG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5yZXZlYWxcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnNcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5tb3Rpb24gaWYgdXNpbmcgYW5pbWF0aW9uc1xuICovXG5cbmNsYXNzIFJldmVhbCBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJldmVhbC5cbiAgICogQGNsYXNzXG4gICAqIEBuYW1lIFJldmVhbFxuICAgKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gdXNlIGZvciB0aGUgbW9kYWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9uYWwgcGFyYW1ldGVycy5cbiAgICovXG4gIF9zZXR1cChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIFJldmVhbC5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ1JldmVhbCc7IC8vIGllOSBiYWNrIGNvbXBhdFxuICAgIHRoaXMuX2luaXQoKTtcblxuICAgIC8vIFRyaWdnZXJzIGluaXQgaXMgaWRlbXBvdGVudCwganVzdCBuZWVkIHRvIG1ha2Ugc3VyZSBpdCBpcyBpbml0aWFsaXplZFxuICAgIFRyaWdnZXJzLmluaXQoJCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignUmV2ZWFsJywge1xuICAgICAgJ0VTQ0FQRSc6ICdjbG9zZScsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZGFsIGJ5IGFkZGluZyB0aGUgb3ZlcmxheSBhbmQgY2xvc2UgYnV0dG9ucywgKGlmIHNlbGVjdGVkKS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIE1lZGlhUXVlcnkuX2luaXQoKTtcbiAgICB0aGlzLmlkID0gdGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpO1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNhY2hlZCA9IHttcTogTWVkaWFRdWVyeS5jdXJyZW50fTtcblxuICAgIHRoaXMuJGFuY2hvciA9ICQoYFtkYXRhLW9wZW49XCIke3RoaXMuaWR9XCJdYCkubGVuZ3RoID8gJChgW2RhdGEtb3Blbj1cIiR7dGhpcy5pZH1cIl1gKSA6ICQoYFtkYXRhLXRvZ2dsZT1cIiR7dGhpcy5pZH1cIl1gKTtcbiAgICB0aGlzLiRhbmNob3IuYXR0cih7XG4gICAgICAnYXJpYS1jb250cm9scyc6IHRoaXMuaWQsXG4gICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAndGFiaW5kZXgnOiAwXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmZ1bGxTY3JlZW4gfHwgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZnVsbCcpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZnVsbFNjcmVlbiA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMub3ZlcmxheSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJsYXkgJiYgIXRoaXMuJG92ZXJsYXkpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkgPSB0aGlzLl9tYWtlT3ZlcmxheSh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgICAncm9sZSc6ICdkaWFsb2cnLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICAnZGF0YS15ZXRpLWJveCc6IHRoaXMuaWQsXG4gICAgICAgICdkYXRhLXJlc2l6ZSc6IHRoaXMuaWRcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuJG92ZXJsYXkpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZGV0YWNoKCkuYXBwZW5kVG8odGhpcy4kb3ZlcmxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZGV0YWNoKCkuYXBwZW5kVG8oJCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ3dpdGhvdXQtb3ZlcmxheScpO1xuICAgIH1cbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmRlZXBMaW5rICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAoIGAjJHt0aGlzLmlkfWApKSB7XG4gICAgICB0aGlzLm9uTG9hZExpc3RlbmVyID0gb25Mb2FkKCQod2luZG93KSwgKCkgPT4gdGhpcy5vcGVuKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG92ZXJsYXkgZGl2IHRvIGRpc3BsYXkgYmVoaW5kIHRoZSBtb2RhbC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9tYWtlT3ZlcmxheSgpIHtcbiAgICB2YXIgYWRkaXRpb25hbE92ZXJsYXlDbGFzc2VzID0gJyc7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFkZGl0aW9uYWxPdmVybGF5Q2xhc3Nlcykge1xuICAgICAgYWRkaXRpb25hbE92ZXJsYXlDbGFzc2VzID0gJyAnICsgdGhpcy5vcHRpb25zLmFkZGl0aW9uYWxPdmVybGF5Q2xhc3NlcztcbiAgICB9XG5cbiAgICByZXR1cm4gJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgLmFkZENsYXNzKCdyZXZlYWwtb3ZlcmxheScgKyBhZGRpdGlvbmFsT3ZlcmxheUNsYXNzZXMpXG4gICAgICAuYXBwZW5kVG8odGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHBvc2l0aW9uIG9mIG1vZGFsXG4gICAqIFRPRE86ICBGaWd1cmUgb3V0IGlmIHdlIGFjdHVhbGx5IG5lZWQgdG8gY2FjaGUgdGhlc2UgdmFsdWVzIG9yIGlmIGl0IGRvZXNuJ3QgbWF0dGVyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy4kZWxlbWVudC5vdXRlcldpZHRoKCk7XG4gICAgdmFyIG91dGVyV2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy4kZWxlbWVudC5vdXRlckhlaWdodCgpO1xuICAgIHZhciBvdXRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICB2YXIgbGVmdCwgdG9wID0gbnVsbDtcbiAgICBpZiAodGhpcy5vcHRpb25zLmhPZmZzZXQgPT09ICdhdXRvJykge1xuICAgICAgbGVmdCA9IHBhcnNlSW50KChvdXRlcldpZHRoIC0gd2lkdGgpIC8gMiwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLmhPZmZzZXQsIDEwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy52T2Zmc2V0ID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChoZWlnaHQgPiBvdXRlckhlaWdodCkge1xuICAgICAgICB0b3AgPSBwYXJzZUludChNYXRoLm1pbigxMDAsIG91dGVySGVpZ2h0IC8gMTApLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3AgPSBwYXJzZUludCgob3V0ZXJIZWlnaHQgLSBoZWlnaHQpIC8gNCwgMTApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnZPZmZzZXQgIT09IG51bGwpIHtcbiAgICAgIHRvcCA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy52T2Zmc2V0LCAxMCk7XG4gICAgfVxuXG4gICAgaWYgKHRvcCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3Moe3RvcDogdG9wICsgJ3B4J30pO1xuICAgIH1cblxuICAgIC8vIG9ubHkgd29ycnkgYWJvdXQgbGVmdCBpZiB3ZSBkb24ndCBoYXZlIGFuIG92ZXJsYXkgb3Igd2UgaGF2ZSBhIGhvcml6b250YWwgb2Zmc2V0LFxuICAgIC8vIG90aGVyd2lzZSB3ZSdyZSBwZXJmZWN0bHkgaW4gdGhlIG1pZGRsZVxuICAgIGlmICghdGhpcy4kb3ZlcmxheSB8fCAodGhpcy5vcHRpb25zLmhPZmZzZXQgIT09ICdhdXRvJykpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKHtsZWZ0OiBsZWZ0ICsgJ3B4J30pO1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3Moe21hcmdpbjogJzBweCd9KTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgbW9kYWwuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKHtcbiAgICAgICdvcGVuLnpmLnRyaWdnZXInOiB0aGlzLm9wZW4uYmluZCh0aGlzKSxcbiAgICAgICdjbG9zZS56Zi50cmlnZ2VyJzogKGV2ZW50LCAkZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoKGV2ZW50LnRhcmdldCA9PT0gX3RoaXMuJGVsZW1lbnRbMF0pIHx8XG4gICAgICAgICAgICAoJChldmVudC50YXJnZXQpLnBhcmVudHMoJ1tkYXRhLWNsb3NhYmxlXScpWzBdID09PSAkZWxlbWVudCkpIHsgLy8gb25seSBjbG9zZSByZXZlYWwgd2hlbiBpdCdzIGV4cGxpY2l0bHkgY2FsbGVkXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UuYXBwbHkodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAndG9nZ2xlLnpmLnRyaWdnZXInOiB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpLFxuICAgICAgJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInOiBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25DbGljayAmJiB0aGlzLm9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgdGhpcy4kb3ZlcmxheS5vZmYoJy56Zi5yZXZlYWwnKS5vbignY2xpY2suemYucmV2ZWFsJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IF90aGlzLiRlbGVtZW50WzBdIHx8XG4gICAgICAgICAgJC5jb250YWlucyhfdGhpcy4kZWxlbWVudFswXSwgZS50YXJnZXQpIHx8XG4gICAgICAgICAgICAhJC5jb250YWlucyhkb2N1bWVudCwgZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVlcExpbmspIHtcbiAgICAgICQod2luZG93KS5vbihgaGFzaGNoYW5nZS56Zi5yZXZlYWw6JHt0aGlzLmlkfWAsIHRoaXMuX2hhbmRsZVN0YXRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIG1vZGFsIG1ldGhvZHMgb24gYmFjay9mb3J3YXJkIGJ1dHRvbiBjbGlja3Mgb3IgYW55IG90aGVyIGV2ZW50IHRoYXQgdHJpZ2dlcnMgaGFzaGNoYW5nZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oYW5kbGVTdGF0ZShlKSB7XG4gICAgaWYod2luZG93LmxvY2F0aW9uLmhhc2ggPT09ICggJyMnICsgdGhpcy5pZCkgJiYgIXRoaXMuaXNBY3RpdmUpeyB0aGlzLm9wZW4oKTsgfVxuICAgIGVsc2V7IHRoaXMuY2xvc2UoKTsgfVxuICB9XG5cbiAgLyoqXG4gICogRGlzYWJsZXMgdGhlIHNjcm9sbCB3aGVuIFJldmVhbCBpcyBzaG93biB0byBwcmV2ZW50IHRoZSBiYWNrZ3JvdW5kIGZyb20gc2hpZnRpbmdcbiAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsVG9wIC0gU2Nyb2xsIHRvIHZpc3VhbGx5IGFwcGx5LCB3aW5kb3cgY3VycmVudCBzY3JvbGwgYnkgZGVmYXVsdFxuICAqL1xuICBfZGlzYWJsZVNjcm9sbChzY3JvbGxUb3ApIHtcbiAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgfHwgJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIGlmICgkKGRvY3VtZW50KS5oZWlnaHQoKSA+ICQod2luZG93KS5oZWlnaHQoKSkge1xuICAgICAgJChcImh0bWxcIilcbiAgICAgICAgLmNzcyhcInRvcFwiLCAtc2Nyb2xsVG9wKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgKiBSZWVuYWJsZXMgdGhlIHNjcm9sbCB3aGVuIFJldmVhbCBjbG9zZXNcbiAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsVG9wIC0gU2Nyb2xsIHRvIHJlc3RvcmUsIGh0bWwgXCJ0b3BcIiBwcm9wZXJ0eSBieSBkZWZhdWx0IChhcyBzZXQgYnkgYF9kaXNhYmxlU2Nyb2xsYClcbiAgKi9cbiAgX2VuYWJsZVNjcm9sbChzY3JvbGxUb3ApIHtcbiAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgfHwgcGFyc2VJbnQoJChcImh0bWxcIikuY3NzKFwidG9wXCIpKTtcbiAgICBpZiAoJChkb2N1bWVudCkuaGVpZ2h0KCkgPiAkKHdpbmRvdykuaGVpZ2h0KCkpIHtcbiAgICAgICQoXCJodG1sXCIpXG4gICAgICAgIC5jc3MoXCJ0b3BcIiwgXCJcIik7XG4gICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKC1zY3JvbGxUb3ApO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBtb2RhbCBjb250cm9sbGVkIGJ5IGB0aGlzLiRhbmNob3JgLCBhbmQgY2xvc2VzIGFsbCBvdGhlcnMgYnkgZGVmYXVsdC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBmaXJlcyBSZXZlYWwjY2xvc2VtZVxuICAgKiBAZmlyZXMgUmV2ZWFsI29wZW5cbiAgICovXG4gIG9wZW4oKSB7XG4gICAgLy8gZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGJyb3dzZXIgaGlzdG9yeVxuICAgIGNvbnN0IGhhc2ggPSBgIyR7dGhpcy5pZH1gO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVlcExpbmsgJiYgd2luZG93LmxvY2F0aW9uLmhhc2ggIT09IGhhc2gpIHtcblxuICAgICAgaWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVwZGF0ZUhpc3RvcnkpIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBoYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCBoYXNoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbWVtYmVyIGFuY2hvciB0aGF0IG9wZW5lZCBpdCB0byBzZXQgZm9jdXMgYmFjayBsYXRlciwgaGF2ZSBnZW5lcmFsIGFuY2hvcnMgYXMgZmFsbGJhY2tcbiAgICB0aGlzLiRhY3RpdmVBbmNob3IgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKHRoaXMuJGFuY2hvcikgPyAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIDogdGhpcy4kYW5jaG9yO1xuXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG5cbiAgICAvLyBNYWtlIGVsZW1lbnRzIGludmlzaWJsZSwgYnV0IHJlbW92ZSBkaXNwbGF5OiBub25lIHNvIHdlIGNhbiBnZXQgc2l6ZSBhbmQgcG9zaXRpb25pbmdcbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5jc3MoeyAndmlzaWJpbGl0eSc6ICdoaWRkZW4nIH0pXG4gICAgICAgIC5zaG93KClcbiAgICAgICAgLnNjcm9sbFRvcCgwKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkuY3NzKHsndmlzaWJpbGl0eSc6ICdoaWRkZW4nfSkuc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAuaGlkZSgpXG4gICAgICAuY3NzKHsgJ3Zpc2liaWxpdHknOiAnJyB9KTtcblxuICAgIGlmKHRoaXMuJG92ZXJsYXkpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkuY3NzKHsndmlzaWJpbGl0eSc6ICcnfSkuaGlkZSgpO1xuICAgICAgaWYodGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZmFzdCcpKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ2Zhc3QnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4kZWxlbWVudC5oYXNDbGFzcygnc2xvdycpKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ3Nsb3cnKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICghdGhpcy5vcHRpb25zLm11bHRpcGxlT3BlbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgbW9kYWwgb3BlbnMuXG4gICAgICAgKiBDbG9zZXMgYW55IG90aGVyIG1vZGFscyB0aGF0IGFyZSBjdXJyZW50bHkgb3BlblxuICAgICAgICogQGV2ZW50IFJldmVhbCNjbG9zZW1lXG4gICAgICAgKi9cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignY2xvc2VtZS56Zi5yZXZlYWwnLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNhYmxlU2Nyb2xsKCk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gTW90aW9uIFVJIG1ldGhvZCBvZiByZXZlYWxcbiAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGlvbkluKSB7XG4gICAgICBmdW5jdGlvbiBhZnRlckFuaW1hdGlvbigpe1xuICAgICAgICBfdGhpcy4kZWxlbWVudFxuICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6IGZhbHNlLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mb2N1cygpO1xuICAgICAgICBfdGhpcy5fYWRkR2xvYmFsQ2xhc3NlcygpO1xuICAgICAgICBLZXlib2FyZC50cmFwRm9jdXMoX3RoaXMuJGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICAgIE1vdGlvbi5hbmltYXRlSW4odGhpcy4kb3ZlcmxheSwgJ2ZhZGUtaW4nKTtcbiAgICAgIH1cbiAgICAgIE1vdGlvbi5hbmltYXRlSW4odGhpcy4kZWxlbWVudCwgdGhpcy5vcHRpb25zLmFuaW1hdGlvbkluLCAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuJGVsZW1lbnQpIHsgLy8gcHJvdGVjdCBhZ2FpbnN0IG9iamVjdCBoYXZpbmcgYmVlbiByZW1vdmVkXG4gICAgICAgICAgdGhpcy5mb2N1c2FibGVFbGVtZW50cyA9IEtleWJvYXJkLmZpbmRGb2N1c2FibGUodGhpcy4kZWxlbWVudCk7XG4gICAgICAgICAgYWZ0ZXJBbmltYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGpRdWVyeSBtZXRob2Qgb2YgcmV2ZWFsXG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KDApO1xuICAgICAgfVxuICAgICAgdGhpcy4kZWxlbWVudC5zaG93KHRoaXMub3B0aW9ucy5zaG93RGVsYXkpO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBhY2Nlc3NpYmlsaXR5XG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLmF0dHIoe1xuICAgICAgICAnYXJpYS1oaWRkZW4nOiBmYWxzZSxcbiAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgIH0pXG4gICAgICAuZm9jdXMoKTtcbiAgICBLZXlib2FyZC50cmFwRm9jdXModGhpcy4kZWxlbWVudCk7XG5cbiAgICB0aGlzLl9hZGRHbG9iYWxDbGFzc2VzKCk7XG5cbiAgICB0aGlzLl9hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIG1vZGFsIGhhcyBzdWNjZXNzZnVsbHkgb3BlbmVkLlxuICAgICAqIEBldmVudCBSZXZlYWwjb3BlblxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignb3Blbi56Zi5yZXZlYWwnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGNsYXNzZXMgYW5kIGxpc3RlbmVycyBvbiBkb2N1bWVudCByZXF1aXJlZCBieSBvcGVuIG1vZGFscy5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSBhZGRlZCBhbmQgdXBkYXRlZDpcbiAgICogLSBgLmlzLXJldmVhbC1vcGVuYCAtIFByZXZlbnRzIHRoZSBzY3JvbGwgb24gZG9jdW1lbnRcbiAgICogLSBgLnpmLWhhcy1zY3JvbGxgICAtIERpc3BsYXlzIGEgZGlzYWJsZWQgc2Nyb2xsYmFyIG9uIGRvY3VtZW50IGlmIHJlcXVpcmVkIGxpa2UgaWYgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGwgd2FzIG5vdCBkaXNhYmxlZC4gVGhpcyBwcmV2ZW50IGEgXCJzaGlmdFwiIG9mIHRoZSBwYWdlIGNvbnRlbnQgZHVlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICB0aGUgc2Nyb2xsYmFyIGRpc2FwcGVhcmluZyB3aGVuIHRoZSBtb2RhbCBvcGVucy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hZGRHbG9iYWxDbGFzc2VzKCkge1xuICAgIGNvbnN0IHVwZGF0ZVNjcm9sbGJhckNsYXNzID0gKCkgPT4ge1xuICAgICAgJCgnaHRtbCcpLnRvZ2dsZUNsYXNzKCd6Zi1oYXMtc2Nyb2xsJywgISEoJChkb2N1bWVudCkuaGVpZ2h0KCkgPiAkKHdpbmRvdykuaGVpZ2h0KCkpKTtcbiAgICB9O1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbigncmVzaXplbWUuemYudHJpZ2dlci5yZXZlYWxTY3JvbGxiYXJMaXN0ZW5lcicsICgpID0+IHVwZGF0ZVNjcm9sbGJhckNsYXNzKCkpO1xuICAgIHVwZGF0ZVNjcm9sbGJhckNsYXNzKCk7XG4gICAgJCgnaHRtbCcpLmFkZENsYXNzKCdpcy1yZXZlYWwtb3BlbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgY2xhc3NlcyBhbmQgbGlzdGVuZXJzIG9uIGRvY3VtZW50IHRoYXQgd2VyZSByZXF1aXJlZCBieSBvcGVuIG1vZGFscy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW1vdmVHbG9iYWxDbGFzc2VzKCkge1xuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdyZXNpemVtZS56Zi50cmlnZ2VyLnJldmVhbFNjcm9sbGJhckxpc3RlbmVyJyk7XG4gICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdpcy1yZXZlYWwtb3BlbicpO1xuICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnemYtaGFzLXNjcm9sbCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXh0cmEgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBib2R5IGFuZCB3aW5kb3cgaWYgbmVjZXNzYXJ5LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FkZEdsb2JhbExpc3RlbmVycygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmKCF0aGlzLiRlbGVtZW50KSB7IHJldHVybjsgfSAvLyBJZiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGNsZWFudXAsIGRvbid0IGZyZWFrIG91dFxuICAgIHRoaXMuZm9jdXNhYmxlRWxlbWVudHMgPSBLZXlib2FyZC5maW5kRm9jdXNhYmxlKHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMub3ZlcmxheSAmJiB0aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrICYmICF0aGlzLm9wdGlvbnMuZnVsbFNjcmVlbikge1xuICAgICAgJCgnYm9keScpLm9uKCdjbGljay56Zi5yZXZlYWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gX3RoaXMuJGVsZW1lbnRbMF0gfHxcbiAgICAgICAgICAkLmNvbnRhaW5zKF90aGlzLiRlbGVtZW50WzBdLCBlLnRhcmdldCkgfHxcbiAgICAgICAgICAgICEkLmNvbnRhaW5zKGRvY3VtZW50LCBlLnRhcmdldCkpIHsgcmV0dXJuOyB9XG4gICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25Fc2MpIHtcbiAgICAgICQod2luZG93KS5vbigna2V5ZG93bi56Zi5yZXZlYWwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIEtleWJvYXJkLmhhbmRsZUtleShlLCAnUmV2ZWFsJywge1xuICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmNsb3NlT25Fc2MpIHtcbiAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAZmlyZXMgUmV2ZWFsI2Nsb3NlZFxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlIHx8ICF0aGlzLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBNb3Rpb24gVUkgbWV0aG9kIG9mIGhpZGluZ1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uT3V0KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgICAgTW90aW9uLmFuaW1hdGVPdXQodGhpcy4kb3ZlcmxheSwgJ2ZhZGUtb3V0Jyk7XG4gICAgICB9XG5cbiAgICAgIE1vdGlvbi5hbmltYXRlT3V0KHRoaXMuJGVsZW1lbnQsIHRoaXMub3B0aW9ucy5hbmltYXRpb25PdXQsIGZpbmlzaFVwKTtcbiAgICB9XG4gICAgLy8galF1ZXJ5IG1ldGhvZCBvZiBoaWRpbmdcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaGlkZSh0aGlzLm9wdGlvbnMuaGlkZURlbGF5KTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgwLCBmaW5pc2hVcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZmluaXNoVXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb25kaXRpb25hbHMgdG8gcmVtb3ZlIGV4dHJhIGV2ZW50IGxpc3RlbmVycyBhZGRlZCBvbiBvcGVuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uRXNjKSB7XG4gICAgICAkKHdpbmRvdykub2ZmKCdrZXlkb3duLnpmLnJldmVhbCcpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRpb25zLm92ZXJsYXkgJiYgdGhpcy5vcHRpb25zLmNsb3NlT25DbGljaykge1xuICAgICAgJCgnYm9keScpLm9mZignY2xpY2suemYucmV2ZWFsJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJ2tleWRvd24uemYucmV2ZWFsJyk7XG5cbiAgICBmdW5jdGlvbiBmaW5pc2hVcCgpIHtcblxuICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHRvcCBiZWZvcmUgdGhlIG1vZGFsIGlzIGNsb3NlZCBhbmQgcmVzdG9yZSB0aGUgc2Nyb2xsIGFmdGVyLlxuICAgICAgLy8gVE9ETzogdXNlIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGluc3RlYWQgb2YgSFRNTCBwcm9wZXJ0aWVzXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3p1cmIvZm91bmRhdGlvbi1zaXRlcy9wdWxsLzEwNzg2XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gcGFyc2VJbnQoJChcImh0bWxcIikuY3NzKFwidG9wXCIpKTtcblxuICAgICAgaWYgKCQoJy5yZXZlYWw6dmlzaWJsZScpLmxlbmd0aCAgPT09IDApIHtcbiAgICAgICAgX3RoaXMuX3JlbW92ZUdsb2JhbENsYXNzZXMoKTsgLy8gYWxzbyByZW1vdmUgLmlzLXJldmVhbC1vcGVuIGZyb20gdGhlIGh0bWwgZWxlbWVudCB3aGVuIHRoZXJlIGlzIG5vIG9wZW5lZCByZXZlYWxcbiAgICAgIH1cblxuICAgICAgS2V5Ym9hcmQucmVsZWFzZUZvY3VzKF90aGlzLiRlbGVtZW50KTtcblxuICAgICAgX3RoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgICAgX3RoaXMuX2VuYWJsZVNjcm9sbChzY3JvbGxUb3ApO1xuXG4gICAgICAvKipcbiAgICAgICogRmlyZXMgd2hlbiB0aGUgbW9kYWwgaXMgZG9uZSBjbG9zaW5nLlxuICAgICAgKiBAZXZlbnQgUmV2ZWFsI2Nsb3NlZFxuICAgICAgKi9cbiAgICAgIF90aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2Nsb3NlZC56Zi5yZXZlYWwnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlc2V0cyB0aGUgbW9kYWwgY29udGVudFxuICAgICogVGhpcyBwcmV2ZW50cyBhIHJ1bm5pbmcgdmlkZW8gdG8ga2VlcCBnb2luZyBpbiB0aGUgYmFja2dyb3VuZFxuICAgICovXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXNldE9uQ2xvc2UpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuaHRtbCh0aGlzLiRlbGVtZW50Lmh0bWwoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIC8vIElmIGRlZXBMaW5rIGFuZCB3ZSBkaWQgbm90IHN3aXRjaGVkIHRvIGFuIG90aGVyIG1vZGFsLi4uXG4gICAgaWYgKF90aGlzLm9wdGlvbnMuZGVlcExpbmsgJiYgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IGAjJHt0aGlzLmlkfWApIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgaGlzdG9yeSBoYXNoXG4gICAgICBpZiAod2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHVybFdpdGhvdXRIYXNoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGRhdGVIaXN0b3J5KSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsV2l0aG91dEhhc2gpOyAvLyByZW1vdmUgdGhlIGhhc2hcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoJycsIGRvY3VtZW50LnRpdGxlLCB1cmxXaXRob3V0SGFzaCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kYWN0aXZlQW5jaG9yLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgb3Blbi9jbG9zZWQgc3RhdGUgb2YgYSBtb2RhbC5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBhbiBpbnN0YW5jZSBvZiBhIG1vZGFsLlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmRUbygkKHRoaXMub3B0aW9ucy5hcHBlbmRUbykpOyAvLyBtb3ZlICRlbGVtZW50IG91dHNpZGUgb2YgJG92ZXJsYXkgdG8gcHJldmVudCBlcnJvciB1bnJlZ2lzdGVyUGx1Z2luKClcbiAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpLm9mZigpLnJlbW92ZSgpO1xuICAgIH1cbiAgICB0aGlzLiRlbGVtZW50LmhpZGUoKS5vZmYoKTtcbiAgICB0aGlzLiRhbmNob3Iub2ZmKCcuemYnKTtcbiAgICAkKHdpbmRvdykub2ZmKGAuemYucmV2ZWFsOiR7dGhpcy5pZH1gKVxuICAgIGlmICh0aGlzLm9uTG9hZExpc3RlbmVyKSAkKHdpbmRvdykub2ZmKHRoaXMub25Mb2FkTGlzdGVuZXIpO1xuXG4gICAgaWYgKCQoJy5yZXZlYWw6dmlzaWJsZScpLmxlbmd0aCAgPT09IDApIHtcbiAgICAgIHRoaXMuX3JlbW92ZUdsb2JhbENsYXNzZXMoKTsgLy8gYWxzbyByZW1vdmUgLmlzLXJldmVhbC1vcGVuIGZyb20gdGhlIGh0bWwgZWxlbWVudCB3aGVuIHRoZXJlIGlzIG5vIG9wZW5lZCByZXZlYWxcbiAgICB9XG4gIH07XG59XG5cblJldmVhbC5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIE1vdGlvbi1VSSBjbGFzcyB0byB1c2UgZm9yIGFuaW1hdGVkIGVsZW1lbnRzLiBJZiBub25lIHVzZWQsIGRlZmF1bHRzIHRvIHNpbXBsZSBzaG93L2hpZGUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJydcbiAgICovXG4gIGFuaW1hdGlvbkluOiAnJyxcbiAgLyoqXG4gICAqIE1vdGlvbi1VSSBjbGFzcyB0byB1c2UgZm9yIGFuaW1hdGVkIGVsZW1lbnRzLiBJZiBub25lIHVzZWQsIGRlZmF1bHRzIHRvIHNpbXBsZSBzaG93L2hpZGUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJydcbiAgICovXG4gIGFuaW1hdGlvbk91dDogJycsXG4gIC8qKlxuICAgKiBUaW1lLCBpbiBtcywgdG8gZGVsYXkgdGhlIG9wZW5pbmcgb2YgYSBtb2RhbCBhZnRlciBhIGNsaWNrIGlmIG5vIGFuaW1hdGlvbiB1c2VkLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIHNob3dEZWxheTogMCxcbiAgLyoqXG4gICAqIFRpbWUsIGluIG1zLCB0byBkZWxheSB0aGUgY2xvc2luZyBvZiBhIG1vZGFsIGFmdGVyIGEgY2xpY2sgaWYgbm8gYW5pbWF0aW9uIHVzZWQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgaGlkZURlbGF5OiAwLFxuICAvKipcbiAgICogQWxsb3dzIGEgY2xpY2sgb24gdGhlIGJvZHkvb3ZlcmxheSB0byBjbG9zZSB0aGUgbW9kYWwuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgbW9kYWwgdG8gY2xvc2UgaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYEVTQ0FQRWAga2V5LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjbG9zZU9uRXNjOiB0cnVlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgYWxsb3dzIG11bHRpcGxlIG1vZGFscyB0byBiZSBkaXNwbGF5ZWQgYXQgb25jZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIG11bHRpcGxlT3BlbmVkOiBmYWxzZSxcbiAgLyoqXG4gICAqIERpc3RhbmNlLCBpbiBwaXhlbHMsIHRoZSBtb2RhbCBzaG91bGQgcHVzaCBkb3duIGZyb20gdGhlIHRvcCBvZiB0aGUgc2NyZWVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBhdXRvXG4gICAqL1xuICB2T2Zmc2V0OiAnYXV0bycsXG4gIC8qKlxuICAgKiBEaXN0YW5jZSwgaW4gcGl4ZWxzLCB0aGUgbW9kYWwgc2hvdWxkIHB1c2ggaW4gZnJvbSB0aGUgc2lkZSBvZiB0aGUgc2NyZWVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBhdXRvXG4gICAqL1xuICBoT2Zmc2V0OiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIG1vZGFsIHRvIGJlIGZ1bGxzY3JlZW4sIGNvbXBsZXRlbHkgYmxvY2tpbmcgb3V0IHRoZSByZXN0IG9mIHRoZSB2aWV3LiBKUyBjaGVja3MgZm9yIHRoaXMgYXMgd2VsbC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGZ1bGxTY3JlZW46IGZhbHNlLFxuICAvKipcbiAgICogQWxsb3dzIHRoZSBtb2RhbCB0byBnZW5lcmF0ZSBhbiBvdmVybGF5IGRpdiwgd2hpY2ggd2lsbCBjb3ZlciB0aGUgdmlldyB3aGVuIG1vZGFsIG9wZW5zLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBvdmVybGF5OiB0cnVlLFxuICAvKipcbiAgICogQWxsb3dzIHRoZSBtb2RhbCB0byByZW1vdmUgYW5kIHJlaW5qZWN0IG1hcmt1cCBvbiBjbG9zZS4gU2hvdWxkIGJlIHRydWUgaWYgdXNpbmcgdmlkZW8gZWxlbWVudHMgdy9vIHVzaW5nIHByb3ZpZGVyJ3MgYXBpLCBvdGhlcndpc2UsIHZpZGVvcyB3aWxsIGNvbnRpbnVlIHRvIHBsYXkgaW4gdGhlIGJhY2tncm91bmQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZXNldE9uQ2xvc2U6IGZhbHNlLFxuICAvKipcbiAgICogTGluayB0aGUgbG9jYXRpb24gaGFzaCB0byB0aGUgbW9kYWwuXG4gICAqIFNldCB0aGUgbG9jYXRpb24gaGFzaCB3aGVuIHRoZSBtb2RhbCBpcyBvcGVuZWQvY2xvc2VkLCBhbmQgb3Blbi9jbG9zZSB0aGUgbW9kYWwgd2hlbiB0aGUgbG9jYXRpb24gY2hhbmdlcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRlZXBMaW5rOiBmYWxzZSxcbiAgLyoqXG4gICAqIElmIGBkZWVwTGlua2AgaXMgZW5hYmxlZCwgdXBkYXRlIHRoZSBicm93c2VyIGhpc3Rvcnkgd2l0aCB0aGUgb3BlbiBtb2RhbFxuICAgKiBAb3B0aW9uXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICB1cGRhdGVIaXN0b3J5OiBmYWxzZSxcbiAgICAvKipcbiAgICogQWxsb3dzIHRoZSBtb2RhbCB0byBhcHBlbmQgdG8gY3VzdG9tIGRpdi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBcImJvZHlcIlxuICAgKi9cbiAgYXBwZW5kVG86IFwiYm9keVwiLFxuICAvKipcbiAgICogQWxsb3dzIGFkZGluZyBhZGRpdGlvbmFsIGNsYXNzIG5hbWVzIHRvIHRoZSByZXZlYWwgb3ZlcmxheS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKi9cbiAgYWRkaXRpb25hbE92ZXJsYXlDbGFzc2VzOiAnJ1xufTtcblxuZXhwb3J0IHtSZXZlYWx9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgTW90aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uJztcblxuY29uc3QgTXV0YXRpb25PYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVmaXhlcyA9IFsnV2ViS2l0JywgJ01veicsICdPJywgJ01zJywgJyddO1xuICBmb3IgKHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYCBpbiB3aW5kb3cpIHtcbiAgICAgIHJldHVybiB3aW5kb3dbYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KCkpO1xuXG5jb25zdCB0cmlnZ2VycyA9IChlbCwgdHlwZSkgPT4ge1xuICBlbC5kYXRhKHR5cGUpLnNwbGl0KCcgJykuZm9yRWFjaChpZCA9PiB7XG4gICAgJChgIyR7aWR9YClbIHR5cGUgPT09ICdjbG9zZScgPyAndHJpZ2dlcicgOiAndHJpZ2dlckhhbmRsZXInXShgJHt0eXBlfS56Zi50cmlnZ2VyYCwgW2VsXSk7XG4gIH0pO1xufTtcblxudmFyIFRyaWdnZXJzID0ge1xuICBMaXN0ZW5lcnM6IHtcbiAgICBCYXNpYzoge30sXG4gICAgR2xvYmFsOiB7fVxuICB9LFxuICBJbml0aWFsaXplcnM6IHt9XG59XG5cblRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYyAgPSB7XG4gIG9wZW5MaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ29wZW4nKTtcbiAgfSxcbiAgY2xvc2VMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdjbG9zZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ2Nsb3NlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICd0b2dnbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCd0b2dnbGUuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSxcbiAgY2xvc2VhYmxlTGlzdGVuZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBhbmltYXRpb24gPSAkKHRoaXMpLmRhdGEoJ2Nsb3NhYmxlJyk7XG5cbiAgICBpZihhbmltYXRpb24gIT09ICcnKXtcbiAgICAgIE1vdGlvbi5hbmltYXRlT3V0KCQodGhpcyksIGFuaW1hdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgICQodGhpcykuZmFkZU91dCgpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRm9jdXNMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUtZm9jdXMnKTtcbiAgICAkKGAjJHtpZH1gKS50cmlnZ2VySGFuZGxlcigndG9nZ2xlLnpmLnRyaWdnZXInLCBbJCh0aGlzKV0pO1xuICB9XG59O1xuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLW9wZW5dIHdpbGwgcmV2ZWFsIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtb3Blbl0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zZV0gd2lsbCBjbG9zZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cbi8vIElmIHVzZWQgd2l0aG91dCBhIHZhbHVlIG9uIFtkYXRhLWNsb3NlXSwgdGhlIGV2ZW50IHdpbGwgYnViYmxlLCBhbGxvd2luZyBpdCB0byBjbG9zZSBhIHBhcmVudCBjb21wb25lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGVdIHdpbGwgdG9nZ2xlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NhYmxlXSB3aWxsIHJlc3BvbmQgdG8gY2xvc2UuemYudHJpZ2dlciBldmVudHMuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbG9zZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2Nsb3NlLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VhYmxlXSwgW2RhdGEtY2xvc2FibGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGUtZm9jdXNdIHdpbGwgcmVzcG9uZCB0byBjb21pbmcgaW4gYW5kIG91dCBvZiBmb2N1c1xuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZS1mb2N1c10nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG59XG5cblxuXG4vLyBNb3JlIEdsb2JhbC9jb21wbGV4IGxpc3RlbmVycyBhbmQgdHJpZ2dlcnNcblRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwgID0ge1xuICByZXNpemVMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgcmVzaXplIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJyZXNpemVcIik7XG4gIH0sXG4gIHNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSBzY3JvbGwgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInNjcm9sbFwiKTtcbiAgfSxcbiAgY2xvc2VNZUxpc3RlbmVyOiBmdW5jdGlvbihlLCBwbHVnaW5JZCl7XG4gICAgbGV0IHBsdWdpbiA9IGUubmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XG4gICAgbGV0IHBsdWdpbnMgPSAkKGBbZGF0YS0ke3BsdWdpbn1dYCkubm90KGBbZGF0YS15ZXRpLWJveD1cIiR7cGx1Z2luSWR9XCJdYCk7XG5cbiAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIGxldCBfdGhpcyA9ICQodGhpcyk7XG4gICAgICBfdGhpcy50cmlnZ2VySGFuZGxlcignY2xvc2UuemYudHJpZ2dlcicsIFtfdGhpc10pO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIEdsb2JhbCwgcGFyc2VzIHdob2xlIGRvY3VtZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lciA9IGZ1bmN0aW9uKHBsdWdpbk5hbWUpIHtcbiAgdmFyIHlldGlCb3hlcyA9ICQoJ1tkYXRhLXlldGktYm94XScpLFxuICAgICAgcGx1Z05hbWVzID0gWydkcm9wZG93bicsICd0b29sdGlwJywgJ3JldmVhbCddO1xuXG4gIGlmKHBsdWdpbk5hbWUpe1xuICAgIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMucHVzaChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBsdWdpbk5hbWVbMF0gPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcyA9IHBsdWdOYW1lcy5jb25jYXQocGx1Z2luTmFtZSk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmVycm9yKCdQbHVnaW4gbmFtZXMgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICB9XG4gIGlmKHlldGlCb3hlcy5sZW5ndGgpe1xuICAgIGxldCBsaXN0ZW5lcnMgPSBwbHVnTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYGNsb3NlbWUuemYuJHtuYW1lfWA7XG4gICAgfSkuam9pbignICcpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihsaXN0ZW5lcnMpLm9uKGxpc3RlbmVycywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5jbG9zZU1lTGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsIHRyaWdnZXIsIGxpc3RlbmVyKSB7XG4gIGxldCB0aW1lciwgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMyk7XG4gICQod2luZG93KS5vZmYodHJpZ2dlcikub24odHJpZ2dlciwgZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aW1lcikgeyBjbGVhclRpbWVvdXQodGltZXIpOyB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsaXN0ZW5lci5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCBkZWJvdW5jZSB8fCAxMCk7Ly9kZWZhdWx0IHRpbWUgdG8gZW1pdCBzY3JvbGwgZXZlbnRcbiAgfSk7XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXJlc2l6ZV0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Jlc2l6ZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5yZXNpemVMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1zY3JvbGxdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdzY3JvbGwuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuc2Nyb2xsTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIgPSBmdW5jdGlvbigkZWxlbSkge1xuICBpZighTXV0YXRpb25PYnNlcnZlcil7IHJldHVybiBmYWxzZTsgfVxuICBsZXQgJG5vZGVzID0gJGVsZW0uZmluZCgnW2RhdGEtcmVzaXplXSwgW2RhdGEtc2Nyb2xsXSwgW2RhdGEtbXV0YXRlXScpO1xuXG4gIC8vZWxlbWVudCBjYWxsYmFja1xuICB2YXIgbGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZHNMaXN0KSB7XG4gICAgdmFyICR0YXJnZXQgPSAkKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udGFyZ2V0KTtcblxuICAgIC8vdHJpZ2dlciB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnQgZGVwZW5kaW5nIG9uIHR5cGVcbiAgICBzd2l0Y2ggKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udHlwZSkge1xuICAgICAgY2FzZSBcImF0dHJpYnV0ZXNcIjpcbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInNjcm9sbFwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LCB3aW5kb3cucGFnZVlPZmZzZXRdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwicmVzaXplXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXRdKTtcbiAgICAgICAgIH1cbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImNoaWxkTGlzdFwiOlxuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vbm90aGluZ1xuICAgIH1cbiAgfTtcblxuICBpZiAoJG5vZGVzLmxlbmd0aCkge1xuICAgIC8vZm9yIGVhY2ggZWxlbWVudCB0aGF0IG5lZWRzIHRvIGxpc3RlbiBmb3IgcmVzaXppbmcsIHNjcm9sbGluZywgb3IgbXV0YXRpb24gYWRkIGEgc2luZ2xlIG9ic2VydmVyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gJG5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgdmFyIGVsZW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24pO1xuICAgICAgZWxlbWVudE9ic2VydmVyLm9ic2VydmUoJG5vZGVzW2ldLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogW1wiZGF0YS1ldmVudHNcIiwgXCJzdHlsZVwiXSB9KTtcbiAgICB9XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyKCRkb2N1bWVudCk7XG5cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lcigpO1xufVxuXG5cblRyaWdnZXJzLmluaXQgPSBmdW5jdGlvbiAoJCwgRm91bmRhdGlvbikge1xuICBvbkxvYWQoJCh3aW5kb3cpLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQudHJpZ2dlcnNJbml0aWFsaXplZCAhPT0gdHJ1ZSkge1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycygpO1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgJC50cmlnZ2Vyc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmKEZvdW5kYXRpb24pIHtcbiAgICBGb3VuZGF0aW9uLlRyaWdnZXJzID0gVHJpZ2dlcnM7XG4gICAgLy8gTGVnYWN5IGluY2x1ZGVkIHRvIGJlIGJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciBub3cuXG4gICAgRm91bmRhdGlvbi5JSGVhcllvdSA9IFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnNcbiAgfVxufVxuXG5leHBvcnQge1RyaWdnZXJzfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
