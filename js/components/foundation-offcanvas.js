(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.keyboard", "./foundation.util.mediaQuery", "./foundation.util.motion", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.offcanvas"] = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.offcanvas"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.mediaQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 9);
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
      "./js/entries/plugins/foundation.offcanvas.js":
      /*!****************************************************!*\
        !*** ./js/entries/plugins/foundation.offcanvas.js ***!
        \****************************************************/

      /*! exports provided: Foundation, OffCanvas */

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


        var _foundation_offcanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.offcanvas */
        "./js/foundation.offcanvas.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "OffCanvas", function () {
          return _foundation_offcanvas__WEBPACK_IMPORTED_MODULE_1__["OffCanvas"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_1__["OffCanvas"], 'OffCanvas');
        /***/

      },

      /***/
      "./js/foundation.offcanvas.js":
      /*!************************************!*\
        !*** ./js/foundation.offcanvas.js ***!
        \************************************/

      /*! exports provided: OffCanvas */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "OffCanvas", function () {
          return OffCanvas;
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


        var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
         * OffCanvas module.
         * @module foundation.offcanvas
         * @requires foundation.util.keyboard
         * @requires foundation.util.mediaQuery
         * @requires foundation.util.triggers
         */


        var OffCanvas =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(OffCanvas, _Plugin);

          function OffCanvas() {
            _classCallCheck(this, OffCanvas);

            return _possibleConstructorReturn(this, _getPrototypeOf(OffCanvas).apply(this, arguments));
          }

          _createClass(OffCanvas, [{
            key: "_setup",

            /**
             * Creates a new instance of an off-canvas wrapper.
             * @class
             * @name OffCanvas
             * @fires OffCanvas#init
             * @param {Object} element - jQuery object to initialize.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              var _this2 = this;

              this.className = 'OffCanvas'; // ie9 back compat

              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, OffCanvas.defaults, this.$element.data(), options);
              this.contentClasses = {
                base: [],
                reveal: []
              };
              this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
              this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
              this.position = 'left';
              this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
              this.nested = !!this.options.nested; // Defines the CSS transition/position classes of the off-canvas content container.

              jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {
                _this2.contentClasses.base.push('has-transition-' + val);
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {
                _this2.contentClasses.base.push('has-position-' + val);

                _this2.contentClasses.reveal.push('has-reveal-' + val);
              }); // Triggers init is idempotent, just need to make sure it is initialized

              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

              this._init();

              this._events();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('OffCanvas', {
                'ESCAPE': 'close'
              });
            }
            /**
             * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
             * @function
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              var id = this.$element.attr('id');
              this.$element.attr('aria-hidden', 'true'); // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)

              if (this.options.contentId) {
                this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);
              } else if (this.$element.siblings('[data-off-canvas-content]').length) {
                this.$content = this.$element.siblings('[data-off-canvas-content]').first();
              } else {
                this.$content = this.$element.closest('[data-off-canvas-content]').first();
              }

              if (!this.options.contentId) {
                // Assume that the off-canvas element is nested if it isn't a sibling of the content
                this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
              } else if (this.options.contentId && this.options.nested === null) {
                // Warning if using content ID without setting the nested option
                // Once the element is nested it is required to work properly in this case
                console.warn('Remember to use the nested option if using the content ID option!');
              }

              if (this.nested === true) {
                // Force transition overlap if nested
                this.options.transition = 'overlap'; // Remove appropriate classes if already assigned in markup

                this.$element.removeClass('is-transition-push');
              }

              this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")); // Find triggers that affect this element and add aria-expanded to them

              this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id); // Get position by checking for related CSS class

              this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\-(left|top|right|bottom)/)[1] : this.position; // Add an overlay over the content if necessary

              if (this.options.contentOverlay === true) {
                var overlay = document.createElement('div');
                var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
                overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
                this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);

                if (overlayPosition === 'is-overlay-fixed') {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);
                } else {
                  this.$content.append(this.$overlay);
                }
              } // Get the revealOn option from the class.


              var revealOnRegExp = new RegExp(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["RegExpEscape"])(this.options.revealClass) + '([^\\s]+)', 'g');
              var revealOnClass = revealOnRegExp.exec(this.$element[0].className);

              if (revealOnClass) {
                this.options.isRevealed = true;
                this.options.revealOn = this.options.revealOn || revealOnClass[1];
              } // Ensure the `reveal-on-*` class is set.


              if (this.options.isRevealed === true && this.options.revealOn) {
                this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));

                this._setMQChecker();
              }

              if (this.options.transitionTime) {
                this.$element.css('transition-duration', this.options.transitionTime);
              } // Initally remove all transition/position CSS classes from off-canvas content container.


              this._removeContentClasses();
            }
            /**
             * Adds event handlers to the off-canvas wrapper and the exit overlay.
             * @function
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              this.$element.off('.zf.trigger .zf.offcanvas').on({
                'open.zf.trigger': this.open.bind(this),
                'close.zf.trigger': this.close.bind(this),
                'toggle.zf.trigger': this.toggle.bind(this),
                'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
              });

              if (this.options.closeOnClick === true) {
                var $target = this.options.contentOverlay ? this.$overlay : this.$content;
                $target.on({
                  'click.zf.offcanvas': this.close.bind(this)
                });
              }
            }
            /**
             * Applies event listener for elements that will reveal at certain breakpoints.
             * @private
             */

          }, {
            key: "_setMQChecker",
            value: function _setMQChecker() {
              var _this = this;

              this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
                if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
                  _this.reveal(true);
                }
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
                if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
                  _this.reveal(true);
                } else {
                  _this.reveal(false);
                }
              });
            }
            /**
             * Removes the CSS transition/position classes of the off-canvas content container.
             * Removing the classes is important when another off-canvas gets opened that uses the same content container.
             * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
             * @private
             */

          }, {
            key: "_removeContentClasses",
            value: function _removeContentClasses(hasReveal) {
              if (typeof hasReveal !== 'boolean') {
                this.$content.removeClass(this.contentClasses.base.join(' '));
              } else if (hasReveal === false) {
                this.$content.removeClass("has-reveal-".concat(this.position));
              }
            }
            /**
             * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
             * Beforehand any transition/position class gets removed.
             * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
             * @private
             */

          }, {
            key: "_addContentClasses",
            value: function _addContentClasses(hasReveal) {
              this._removeContentClasses(hasReveal);

              if (typeof hasReveal !== 'boolean') {
                this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position));
              } else if (hasReveal === true) {
                this.$content.addClass("has-reveal-".concat(this.position));
              }
            }
            /**
             * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
             * @param {Boolean} isRevealed - true if element should be revealed.
             * @function
             */

          }, {
            key: "reveal",
            value: function reveal(isRevealed) {
              if (isRevealed) {
                this.close();
                this.isRevealed = true;
                this.$element.attr('aria-hidden', 'false');
                this.$element.off('open.zf.trigger toggle.zf.trigger');
                this.$element.removeClass('is-closed');
              } else {
                this.isRevealed = false;
                this.$element.attr('aria-hidden', 'true');
                this.$element.off('open.zf.trigger toggle.zf.trigger').on({
                  'open.zf.trigger': this.open.bind(this),
                  'toggle.zf.trigger': this.toggle.bind(this)
                });
                this.$element.addClass('is-closed');
              }

              this._addContentClasses(isRevealed);
            }
            /**
             * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
             * @private
             */

          }, {
            key: "_stopScrolling",
            value: function _stopScrolling(event) {
              return false;
            } // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
            // Only really works for y, not sure how to extend to x or if we need to.

          }, {
            key: "_recordScrollable",
            value: function _recordScrollable(event) {
              var elem = this; // called from event handler context with this as elem
              // If the element is scrollable (content overflows), then...

              if (elem.scrollHeight !== elem.clientHeight) {
                // If we're at the top, scroll down one pixel to allow scrolling up
                if (elem.scrollTop === 0) {
                  elem.scrollTop = 1;
                } // If we're at the bottom, scroll up one pixel to allow scrolling down


                if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
                  elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
                }
              }

              elem.allowUp = elem.scrollTop > 0;
              elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
              elem.lastY = event.originalEvent.pageY;
            }
          }, {
            key: "_stopScrollPropagation",
            value: function _stopScrollPropagation(event) {
              var elem = this; // called from event handler context with this as elem

              var up = event.pageY < elem.lastY;
              var down = !up;
              elem.lastY = event.pageY;

              if (up && elem.allowUp || down && elem.allowDown) {
                event.stopPropagation();
              } else {
                event.preventDefault();
              }
            }
            /**
             * Opens the off-canvas menu.
             * @function
             * @param {Object} event - Event object passed from listener.
             * @param {jQuery} trigger - element that triggered the off-canvas to open.
             * @fires Offcanvas#opened
             * @todo also trigger 'open' event?
             */

          }, {
            key: "open",
            value: function open(event, trigger) {
              if (this.$element.hasClass('is-open') || this.isRevealed) {
                return;
              }

              var _this = this;

              if (trigger) {
                this.$lastTrigger = trigger;
              }

              if (this.options.forceTo === 'top') {
                window.scrollTo(0, 0);
              } else if (this.options.forceTo === 'bottom') {
                window.scrollTo(0, document.body.scrollHeight);
              }

              if (this.options.transitionTime && this.options.transition !== 'overlap') {
                this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
              } else {
                this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
              }

              this.$element.addClass('is-open').removeClass('is-closed');
              this.$triggers.attr('aria-expanded', 'true');
              this.$element.attr('aria-hidden', 'false');
              this.$content.addClass('is-open-' + this.position); // If `contentScroll` is set to false, add class and disable scrolling on touch devices.

              if (this.options.contentScroll === false) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
                this.$element.on('touchstart', this._recordScrollable);
                this.$element.on('touchmove', this._stopScrollPropagation);
              }

              if (this.options.contentOverlay === true) {
                this.$overlay.addClass('is-visible');
              }

              if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
                this.$overlay.addClass('is-closable');
              }

              if (this.options.autoFocus === true) {
                this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function () {
                  if (!_this.$element.hasClass('is-open')) {
                    return; // exit if prematurely closed
                  }

                  var canvasFocus = _this.$element.find('[data-autofocus]');

                  if (canvasFocus.length) {
                    canvasFocus.eq(0).focus();
                  } else {
                    _this.$element.find('a, button').eq(0).focus();
                  }
                });
              }

              if (this.options.trapFocus === true) {
                this.$content.attr('tabindex', '-1');

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(this.$element);
              }

              this._addContentClasses();
              /**
               * Fires when the off-canvas menu opens.
               * @event Offcanvas#opened
               */


              this.$element.trigger('opened.zf.offcanvas');
            }
            /**
             * Closes the off-canvas menu.
             * @function
             * @param {Function} cb - optional cb to fire after closure.
             * @fires Offcanvas#closed
             */

          }, {
            key: "close",
            value: function close(cb) {
              if (!this.$element.hasClass('is-open') || this.isRevealed) {
                return;
              }

              var _this = this;

              this.$element.removeClass('is-open');
              this.$element.attr('aria-hidden', 'true')
              /**
               * Fires when the off-canvas menu opens.
               * @event Offcanvas#closed
               */
              .trigger('closed.zf.offcanvas');
              this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom'); // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.

              if (this.options.contentScroll === false) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);
                this.$element.off('touchstart', this._recordScrollable);
                this.$element.off('touchmove', this._stopScrollPropagation);
              }

              if (this.options.contentOverlay === true) {
                this.$overlay.removeClass('is-visible');
              }

              if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
                this.$overlay.removeClass('is-closable');
              }

              this.$triggers.attr('aria-expanded', 'false');

              if (this.options.trapFocus === true) {
                this.$content.removeAttr('tabindex');

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(this.$element);
              } // Listen to transitionEnd and add class when done.


              this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function (e) {
                _this.$element.addClass('is-closed');

                _this._removeContentClasses();
              });
            }
            /**
             * Toggles the off-canvas menu open or closed.
             * @function
             * @param {Object} event - Event object passed from listener.
             * @param {jQuery} trigger - element that triggered the off-canvas to open.
             */

          }, {
            key: "toggle",
            value: function toggle(event, trigger) {
              if (this.$element.hasClass('is-open')) {
                this.close(event, trigger);
              } else {
                this.open(event, trigger);
              }
            }
            /**
             * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
             * @function
             * @private
             */

          }, {
            key: "_handleKeyboard",
            value: function _handleKeyboard(e) {
              var _this3 = this;

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'OffCanvas', {
                close: function close() {
                  _this3.close();

                  _this3.$lastTrigger.focus();

                  return true;
                },
                handled: function handled() {
                  e.stopPropagation();
                  e.preventDefault();
                }
              });
            }
            /**
             * Destroys the offcanvas plugin.
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.close();
              this.$element.off('.zf.trigger .zf.offcanvas');
              this.$overlay.off('.zf.offcanvas');
              if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
            }
          }]);

          return OffCanvas;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

        OffCanvas.defaults = {
          /**
           * Allow the user to click outside of the menu to close it.
           * @option
           * @type {boolean}
           * @default true
           */
          closeOnClick: true,

          /**
           * Adds an overlay on top of `[data-off-canvas-content]`.
           * @option
           * @type {boolean}
           * @default true
           */
          contentOverlay: true,

          /**
           * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
           * @option
           * @type {?string}
           * @default null
           */
          contentId: null,

          /**
           * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
           * @option
           * @type {boolean}
           * @default null
           */
          nested: null,

          /**
           * Enable/disable scrolling of the main content when an off canvas panel is open.
           * @option
           * @type {boolean}
           * @default true
           */
          contentScroll: true,

          /**
           * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
           * @option
           * @type {number}
           * @default null
           */
          transitionTime: null,

          /**
           * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
           * @option
           * @type {string}
           * @default push
           */
          transition: 'push',

          /**
           * Force the page to scroll to top or bottom on open.
           * @option
           * @type {?string}
           * @default null
           */
          forceTo: null,

          /**
           * Allow the offcanvas to remain open for certain breakpoints.
           * @option
           * @type {boolean}
           * @default false
           */
          isRevealed: false,

          /**
           * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
           * @option
           * @type {?string}
           * @default null
           */
          revealOn: null,

          /**
           * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
           * @option
           * @type {boolean}
           * @default true
           */
          autoFocus: true,

          /**
           * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
           * @option
           * @type {string}
           * @default reveal-for-
           * @todo improve the regex testing for this.
           */
          revealClass: 'reveal-for-',

          /**
           * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
           * @option
           * @type {boolean}
           * @default false
           */
          trapFocus: false
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
      9:
      /*!**********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.offcanvas.js ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.offcanvas.js */
        "./js/entries/plugins/foundation.offcanvas.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ub2ZmY2FudmFzLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIk9mZkNhbnZhcyIsImVsZW1lbnQiLCJvcHRpb25zIiwiJCIsImJhc2UiLCJyZXZlYWwiLCJUcmlnZ2VycyIsIk1lZGlhUXVlcnkiLCJLZXlib2FyZCIsImlkIiwiY29uc29sZSIsIm92ZXJsYXkiLCJkb2N1bWVudCIsIm92ZXJsYXlQb3NpdGlvbiIsInJldmVhbE9uUmVnRXhwIiwiUmVnRXhwRXNjYXBlIiwicmV2ZWFsT25DbGFzcyIsIiR0YXJnZXQiLCJfdGhpcyIsIm9uTG9hZCIsImhhc1JldmVhbCIsImlzUmV2ZWFsZWQiLCJldmVudCIsImVsZW0iLCJ1cCIsImRvd24iLCJ0cmlnZ2VyIiwid2luZG93IiwidHJhbnNpdGlvbmVuZCIsImNhbnZhc0ZvY3VzIiwiY2IiLCJlIiwiY2xvc2UiLCJoYW5kbGVkIiwiUGx1Z2luIiwiY2xvc2VPbkNsaWNrIiwiY29udGVudE92ZXJsYXkiLCJjb250ZW50SWQiLCJuZXN0ZWQiLCJjb250ZW50U2Nyb2xsIiwidHJhbnNpdGlvblRpbWUiLCJ0cmFuc2l0aW9uIiwiZm9yY2VUbyIsInJldmVhbE9uIiwiYXV0b0ZvY3VzIiwicmV2ZWFsQ2xhc3MiLCJ0cmFwRm9jdXMiLCJNdXRhdGlvbk9ic2VydmVyIiwicHJlZml4ZXMiLCJpIiwidHJpZ2dlcnMiLCJlbCIsInR5cGUiLCJMaXN0ZW5lcnMiLCJCYXNpYyIsIkdsb2JhbCIsIkluaXRpYWxpemVycyIsIm9wZW5MaXN0ZW5lciIsImNsb3NlTGlzdGVuZXIiLCJ0b2dnbGVMaXN0ZW5lciIsImNsb3NlYWJsZUxpc3RlbmVyIiwiYW5pbWF0aW9uIiwiTW90aW9uIiwidG9nZ2xlRm9jdXNMaXN0ZW5lciIsIiRlbGVtIiwicmVzaXplTGlzdGVuZXIiLCIkbm9kZXMiLCJzY3JvbGxMaXN0ZW5lciIsImNsb3NlTWVMaXN0ZW5lciIsInBsdWdpbiIsInBsdWdpbnMiLCJ5ZXRpQm94ZXMiLCJwbHVnTmFtZXMiLCJwbHVnaW5OYW1lIiwibGlzdGVuZXJzIiwiYXJncyIsIkFycmF5IiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwibGlzdGVuZXIiLCJkZWJvdW5jZSIsImRlYm91bmNlR2xvYmFsTGlzdGVuZXIiLCJsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uIiwibXV0YXRpb25SZWNvcmRzTGlzdCIsImVsZW1lbnRPYnNlcnZlciIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsImF0dHJpYnV0ZUZpbHRlciIsIiRkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDhCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLDRCQUFBLEVBQUEsOEJBQUEsRUFBQSwwQkFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLHNCQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw4QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsc0JBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSx3QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLHFEQUFBLEVBQUEsdURBQUEsRUFBQSxtREFBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVBQUEsR0FBQTtBQUEyQixpQkFBQSxNQUFBLENBQUEsU0FBQSxDQUFBO0FBQTRCLFNBRHZEO0FBRUE7QUFBQSxpQkFBQSxnQkFBQSxHQUFBO0FBQWlDLGlCQUFBLE1BQUE7QUFBZSxTQUZoRDtBQUdBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBO0FBQ0E7OztBQUFBLGVBQUEsTUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7QUFBc0QsZUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsQ0FBQTtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUEsYUFBQSxtQkFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLDRDQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxxREFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsdURBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLG1EQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSw2Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLDZDQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLGtEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLHNDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFdBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsa0RBQUEsQ0FBQSxXQUFBLENBQUE7QUFBQSxTQUFBOztBQ0dBQSxRQUFBQSw2Q0FBQUEsQ0FBQUEsWUFBQUEsQ0FBQUEsQ0FBQUEsTUFBQUEsQ0FBa0JDLGtEQUFBQSxDQUFsQkQsV0FBa0JDLENBQWxCRCxFQUFBQSxXQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxXQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLFNBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFlBQUEsbUNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsZ0JBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJDQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1DQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxtREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSwyQkFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsMkRBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbURBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHNEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLG9DQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSw4REFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxzREFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsd0RBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsc0NBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLGdFQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLHdEQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxzREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSwwQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7O1lBUU1DLFM7Ozs7Ozs7Ozs7Ozs7O0FBQ0o7Ozs7Ozs7O21DQVFPQyxPLEVBQVNDLE8sRUFBUztBQUFBLGtCQUFBLE1BQUEsR0FBQSxJQUFBOztBQUN2QixtQkFBQSxTQUFBLEdBRHVCLFdBQ3ZCLENBRHVCLENBQ087O0FBQzlCLG1CQUFBLFFBQUEsR0FBQSxPQUFBO0FBQ0EsbUJBQUEsT0FBQSxHQUFlQywyQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsRUFBQUEsRUFBYUgsU0FBUyxDQUF0QkcsUUFBQUEsRUFBaUMsS0FBQSxRQUFBLENBQWpDQSxJQUFpQyxFQUFqQ0EsRUFBZixPQUFlQSxDQUFmO0FBQ0EsbUJBQUEsY0FBQSxHQUFzQjtBQUFFQyxnQkFBQUEsSUFBSSxFQUFOLEVBQUE7QUFBWUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUFwQixlQUF0QjtBQUNBLG1CQUFBLFlBQUEsR0FBb0JGLDJDQUFwQixJQUFBO0FBQ0EsbUJBQUEsU0FBQSxHQUFpQkEsMkNBQWpCLElBQUE7QUFDQSxtQkFBQSxRQUFBLEdBQUEsTUFBQTtBQUNBLG1CQUFBLFFBQUEsR0FBZ0JBLDJDQUFoQixJQUFBO0FBQ0EsbUJBQUEsTUFBQSxHQUFjLENBQUMsQ0FBRSxLQUFBLE9BQUEsQ0FUTSxNQVN2QixDQVR1QixDQVd2Qjs7QUFDQUEsY0FBQUEsMkNBQUFBLEdBQUUsQ0FBQSxNQUFBLEVBQUZBLFNBQUUsQ0FBRkEsQ0FBQUEsQ0FBQUEsSUFBQUEsQ0FBNEIsVUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFnQjtBQUMxQyxnQkFBQSxNQUFJLENBQUosY0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQThCLG9CQUE5QixHQUFBO0FBREZBLGVBQUFBO0FBR0FBLGNBQUFBLDJDQUFBQSxHQUFFLENBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUZBLFFBQUUsQ0FBRkEsQ0FBQUEsQ0FBQUEsSUFBQUEsQ0FBMkMsVUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFnQjtBQUN6RCxnQkFBQSxNQUFJLENBQUosY0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQThCLGtCQUE5QixHQUFBOztBQUNBLGdCQUFBLE1BQUksQ0FBSixjQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBZ0MsZ0JBQWhDLEdBQUE7QUFqQnFCLGVBZXZCQSxFQWZ1QixDQW9CdkI7O0FBQ0FHLGNBQUFBLHNEQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxDQUFBQSxJQUFBQSxDQUFjSCwyQ0FBQUEsQ0FBZEcsQ0FBQUE7O0FBQ0FDLGNBQUFBLHdEQUFBQSxDQUFBQSxZQUFBQSxDQUFBQSxDQUFBQSxLQUFBQTs7QUFFQSxtQkFBQSxLQUFBOztBQUNBLG1CQUFBLE9BQUE7O0FBRUFDLGNBQUFBLHNEQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxXQUFBQSxFQUErQjtBQUM3QiwwQkFBVTtBQURtQixlQUEvQkE7QUFJRDtBQUVEOzs7Ozs7OztvQ0FLUTtBQUNOLGtCQUFJQyxFQUFFLEdBQUcsS0FBQSxRQUFBLENBQUEsSUFBQSxDQUFULElBQVMsQ0FBVDtBQUVBLG1CQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsYUFBQSxFQUhNLE1BR04sRUFITSxDQUtOOztBQUNBLGtCQUFJLEtBQUEsT0FBQSxDQUFKLFNBQUEsRUFBNEI7QUFDMUIscUJBQUEsUUFBQSxHQUFnQk4sMkNBQUFBLEdBQUUsTUFBSSxLQUFBLE9BQUEsQ0FBdEIsU0FBZ0JBLENBQWhCO0FBREYsZUFBQSxNQUVPLElBQUksS0FBQSxRQUFBLENBQUEsUUFBQSxDQUFBLDJCQUFBLEVBQUosTUFBQSxFQUFnRTtBQUNyRSxxQkFBQSxRQUFBLEdBQWdCLEtBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSwyQkFBQSxFQUFoQixLQUFnQixFQUFoQjtBQURLLGVBQUEsTUFFQTtBQUNMLHFCQUFBLFFBQUEsR0FBZ0IsS0FBQSxRQUFBLENBQUEsT0FBQSxDQUFBLDJCQUFBLEVBQWhCLEtBQWdCLEVBQWhCO0FBQ0Q7O0FBRUQsa0JBQUksQ0FBQyxLQUFBLE9BQUEsQ0FBTCxTQUFBLEVBQTZCO0FBQzNCO0FBQ0EscUJBQUEsTUFBQSxHQUFjLEtBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSwyQkFBQSxFQUFBLE1BQUEsS0FBZCxDQUFBO0FBRkYsZUFBQSxNQUlPLElBQUksS0FBQSxPQUFBLENBQUEsU0FBQSxJQUEwQixLQUFBLE9BQUEsQ0FBQSxNQUFBLEtBQTlCLElBQUEsRUFBNEQ7QUFDakU7QUFDQTtBQUNBTyxnQkFBQUEsT0FBTyxDQUFQQSxJQUFBQSxDQUFBQSxtRUFBQUE7QUFDRDs7QUFFRCxrQkFBSSxLQUFBLE1BQUEsS0FBSixJQUFBLEVBQTBCO0FBQ3hCO0FBQ0EscUJBQUEsT0FBQSxDQUFBLFVBQUEsR0FGd0IsU0FFeEIsQ0FGd0IsQ0FHeEI7O0FBQ0EscUJBQUEsUUFBQSxDQUFBLFdBQUEsQ0FBQSxvQkFBQTtBQUNEOztBQUVELG1CQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsaUJBQUEsTUFBQSxDQUF3QyxLQUFBLE9BQUEsQ0FBeEMsVUFBQSxFQS9CTSxZQStCTixDQUFBLEVBL0JNLENBaUNOOztBQUNBLG1CQUFBLFNBQUEsR0FBaUJQLDJDQUFBQSxHQUFBQSxRQUFBQSxDQUFBQSxDQUFBQSxJQUFBQSxDQUNULGlCQUFBLEVBQUEsR0FBQSxtQkFBQSxHQUFBLEVBQUEsR0FBQSxvQkFBQSxHQUFBLEVBQUEsR0FEU0EsSUFBQUEsRUFBQUEsSUFBQUEsQ0FBQUEsZUFBQUEsRUFBQUEsT0FBQUEsRUFBQUEsSUFBQUEsQ0FBQUEsZUFBQUEsRUFsQ1gsRUFrQ1dBLENBQWpCLENBbENNLENBdUNOOztBQUNBLG1CQUFBLFFBQUEsR0FBZ0IsS0FBQSxRQUFBLENBQUEsRUFBQSxDQUFBLGtFQUFBLElBQXVGLEtBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLEVBQUEsS0FBQSxDQUFBLG1DQUFBLEVBQXZGLENBQXVGLENBQXZGLEdBQW1LLEtBeEM3SyxRQXdDTixDQXhDTSxDQTBDTjs7QUFDQSxrQkFBSSxLQUFBLE9BQUEsQ0FBQSxjQUFBLEtBQUosSUFBQSxFQUEwQztBQUN4QyxvQkFBSVEsT0FBTyxHQUFHQyxRQUFRLENBQVJBLGFBQUFBLENBQWQsS0FBY0EsQ0FBZDtBQUNBLG9CQUFJQyxlQUFlLEdBQUdWLDJDQUFBQSxHQUFFLEtBQUZBLFFBQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLFVBQUFBLE1BQUFBLE9BQUFBLEdBQUFBLGtCQUFBQSxHQUF0QixxQkFBQTtBQUNBUSxnQkFBQUEsT0FBTyxDQUFQQSxZQUFBQSxDQUFBQSxPQUFBQSxFQUE4QiwyQkFBOUJBLGVBQUFBO0FBQ0EscUJBQUEsUUFBQSxHQUFnQlIsMkNBQUFBLEdBQWhCLE9BQWdCQSxDQUFoQjs7QUFDQSxvQkFBR1UsZUFBZSxLQUFsQixrQkFBQSxFQUEyQztBQUN6Q1Ysa0JBQUFBLDJDQUFBQSxHQUFFLEtBQUZBLFFBQUFBLENBQUFBLENBQUFBLFdBQUFBLENBQTZCLEtBQTdCQSxRQUFBQTtBQURGLGlCQUFBLE1BRU87QUFDTCx1QkFBQSxRQUFBLENBQUEsTUFBQSxDQUFxQixLQUFyQixRQUFBO0FBQ0Q7QUFwREcsZUFBQSxDQXVETjs7O0FBQ0Esa0JBQUlXLGNBQWMsR0FBRyxJQUFBLE1BQUEsQ0FBV0MsTUFBQUEsQ0FBQUEsbURBQUFBLENBQUFBLGNBQUFBLENBQUFBLENBQUFBLENBQWEsS0FBQSxPQUFBLENBQWJBLFdBQUFBLElBQVgsV0FBQSxFQUFyQixHQUFxQixDQUFyQjtBQUNBLGtCQUFJQyxhQUFhLEdBQUdGLGNBQWMsQ0FBZEEsSUFBQUEsQ0FBb0IsS0FBQSxRQUFBLENBQUEsQ0FBQSxFQUF4QyxTQUFvQkEsQ0FBcEI7O0FBQ0Esa0JBQUEsYUFBQSxFQUFtQjtBQUNqQixxQkFBQSxPQUFBLENBQUEsVUFBQSxHQUFBLElBQUE7QUFDQSxxQkFBQSxPQUFBLENBQUEsUUFBQSxHQUF3QixLQUFBLE9BQUEsQ0FBQSxRQUFBLElBQXlCRSxhQUFhLENBQTlELENBQThELENBQTlEO0FBNURJLGVBQUEsQ0ErRE47OztBQUNBLGtCQUFJLEtBQUEsT0FBQSxDQUFBLFVBQUEsS0FBQSxJQUFBLElBQW9DLEtBQUEsT0FBQSxDQUF4QyxRQUFBLEVBQStEO0FBQzdELHFCQUFBLFFBQUEsQ0FBQSxLQUFBLEdBQUEsUUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFrQyxLQUFBLE9BQUEsQ0FBbEMsV0FBQSxFQUFBLE1BQUEsQ0FBNkQsS0FBQSxPQUFBLENBQTdELFFBQUEsQ0FBQTs7QUFDQSxxQkFBQSxhQUFBO0FBQ0Q7O0FBRUQsa0JBQUksS0FBQSxPQUFBLENBQUosY0FBQSxFQUFpQztBQUMvQixxQkFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLHFCQUFBLEVBQXlDLEtBQUEsT0FBQSxDQUF6QyxjQUFBO0FBdEVJLGVBQUEsQ0F5RU47OztBQUNBLG1CQUFBLHFCQUFBO0FBQ0Q7QUFFRDs7Ozs7Ozs7c0NBS1U7QUFDUixtQkFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLDJCQUFBLEVBQUEsRUFBQSxDQUFrRDtBQUNoRCxtQ0FBbUIsS0FBQSxJQUFBLENBQUEsSUFBQSxDQUQ2QixJQUM3QixDQUQ2QjtBQUVoRCxvQ0FBb0IsS0FBQSxLQUFBLENBQUEsSUFBQSxDQUY0QixJQUU1QixDQUY0QjtBQUdoRCxxQ0FBcUIsS0FBQSxNQUFBLENBQUEsSUFBQSxDQUgyQixJQUczQixDQUgyQjtBQUloRCx3Q0FBd0IsS0FBQSxlQUFBLENBQUEsSUFBQSxDQUFBLElBQUE7QUFKd0IsZUFBbEQ7O0FBT0Esa0JBQUksS0FBQSxPQUFBLENBQUEsWUFBQSxLQUFKLElBQUEsRUFBd0M7QUFDdEMsb0JBQUlDLE9BQU8sR0FBRyxLQUFBLE9BQUEsQ0FBQSxjQUFBLEdBQThCLEtBQTlCLFFBQUEsR0FBOEMsS0FBNUQsUUFBQTtBQUNBQSxnQkFBQUEsT0FBTyxDQUFQQSxFQUFBQSxDQUFXO0FBQUMsd0NBQXNCLEtBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBO0FBQXZCLGlCQUFYQTtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs0Q0FJZ0I7QUFDZCxrQkFBSUMsS0FBSyxHQUFULElBQUE7O0FBRUEsbUJBQUEsY0FBQSxHQUFzQkMsTUFBQUEsQ0FBQUEsbURBQUFBLENBQUFBLFFBQUFBLENBQUFBLENBQUFBLENBQU9oQiwyQ0FBQUEsR0FBRCxNQUFDQSxDQUFQZ0IsRUFBa0IsWUFBWTtBQUNsRCxvQkFBSVosd0RBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE9BQUFBLENBQW1CVyxLQUFLLENBQUxBLE9BQUFBLENBQXZCLFFBQUlYLENBQUosRUFBZ0Q7QUFDOUNXLGtCQUFBQSxLQUFLLENBQUxBLE1BQUFBLENBQUFBLElBQUFBO0FBQ0Q7QUFISCxlQUFzQkMsQ0FBdEI7QUFNQWhCLGNBQUFBLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxFQUFBQSxDQUFBQSx1QkFBQUEsRUFBc0MsWUFBWTtBQUNoRCxvQkFBSUksd0RBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE9BQUFBLENBQW1CVyxLQUFLLENBQUxBLE9BQUFBLENBQXZCLFFBQUlYLENBQUosRUFBZ0Q7QUFDOUNXLGtCQUFBQSxLQUFLLENBQUxBLE1BQUFBLENBQUFBLElBQUFBO0FBREYsaUJBQUEsTUFFTztBQUNMQSxrQkFBQUEsS0FBSyxDQUFMQSxNQUFBQSxDQUFBQSxLQUFBQTtBQUNEO0FBTEhmLGVBQUFBO0FBT0Q7QUFFRDs7Ozs7Ozs7O2tEQU1zQmlCLFMsRUFBVztBQUMvQixrQkFBSSxPQUFBLFNBQUEsS0FBSixTQUFBLEVBQW9DO0FBQ2xDLHFCQUFBLFFBQUEsQ0FBQSxXQUFBLENBQTBCLEtBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQTFCLEdBQTBCLENBQTFCO0FBREYsZUFBQSxNQUVPLElBQUlBLFNBQVMsS0FBYixLQUFBLEVBQXlCO0FBQzlCLHFCQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsY0FBQSxNQUFBLENBQXdDLEtBQXhDLFFBQUEsQ0FBQTtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7OytDQU1tQkEsUyxFQUFXO0FBQzVCLG1CQUFBLHFCQUFBLENBQUEsU0FBQTs7QUFDQSxrQkFBSSxPQUFBLFNBQUEsS0FBSixTQUFBLEVBQW9DO0FBQ2xDLHFCQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsa0JBQUEsTUFBQSxDQUF5QyxLQUFBLE9BQUEsQ0FBekMsVUFBQSxFQUFBLGdCQUFBLEVBQUEsTUFBQSxDQUFpRixLQUFqRixRQUFBLENBQUE7QUFERixlQUFBLE1BRU8sSUFBSUEsU0FBUyxLQUFiLElBQUEsRUFBd0I7QUFDN0IscUJBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxjQUFBLE1BQUEsQ0FBcUMsS0FBckMsUUFBQSxDQUFBO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7OzttQ0FLT0MsVSxFQUFZO0FBQ2pCLGtCQUFBLFVBQUEsRUFBZ0I7QUFDZCxxQkFBQSxLQUFBO0FBQ0EscUJBQUEsVUFBQSxHQUFBLElBQUE7QUFDQSxxQkFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsRUFBQSxPQUFBO0FBQ0EscUJBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxtQ0FBQTtBQUNBLHFCQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsV0FBQTtBQUxGLGVBQUEsTUFNTztBQUNMLHFCQUFBLFVBQUEsR0FBQSxLQUFBO0FBQ0EscUJBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxhQUFBLEVBQUEsTUFBQTtBQUNBLHFCQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsbUNBQUEsRUFBQSxFQUFBLENBQTBEO0FBQ3hELHFDQUFtQixLQUFBLElBQUEsQ0FBQSxJQUFBLENBRHFDLElBQ3JDLENBRHFDO0FBRXhELHVDQUFxQixLQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQTtBQUZtQyxpQkFBMUQ7QUFJQSxxQkFBQSxRQUFBLENBQUEsUUFBQSxDQUFBLFdBQUE7QUFDRDs7QUFDRCxtQkFBQSxrQkFBQSxDQUFBLFVBQUE7QUFDRDtBQUVEOzs7Ozs7OzJDQUllQyxLLEVBQU87QUFDcEIscUJBQUEsS0FBQTtjQUdGO0FBQ0E7Ozs7OENBQ2tCQSxLLEVBQU87QUFDdkIsa0JBQUlDLElBQUksR0FEZSxJQUN2QixDQUR1QixDQUNOO0FBRWhCOztBQUNELGtCQUFJQSxJQUFJLENBQUpBLFlBQUFBLEtBQXNCQSxJQUFJLENBQTlCLFlBQUEsRUFBNkM7QUFDM0M7QUFDQSxvQkFBSUEsSUFBSSxDQUFKQSxTQUFBQSxLQUFKLENBQUEsRUFBMEI7QUFDeEJBLGtCQUFBQSxJQUFJLENBQUpBLFNBQUFBLEdBQUFBLENBQUFBO0FBSHlDLGlCQUFBLENBSzNDOzs7QUFDQSxvQkFBSUEsSUFBSSxDQUFKQSxTQUFBQSxLQUFtQkEsSUFBSSxDQUFKQSxZQUFBQSxHQUFvQkEsSUFBSSxDQUEvQyxZQUFBLEVBQThEO0FBQzVEQSxrQkFBQUEsSUFBSSxDQUFKQSxTQUFBQSxHQUFpQkEsSUFBSSxDQUFKQSxZQUFBQSxHQUFvQkEsSUFBSSxDQUF4QkEsWUFBQUEsR0FBakJBLENBQUFBO0FBQ0Q7QUFDRjs7QUFDREEsY0FBQUEsSUFBSSxDQUFKQSxPQUFBQSxHQUFlQSxJQUFJLENBQUpBLFNBQUFBLEdBQWZBLENBQUFBO0FBQ0FBLGNBQUFBLElBQUksQ0FBSkEsU0FBQUEsR0FBaUJBLElBQUksQ0FBSkEsU0FBQUEsR0FBa0JBLElBQUksQ0FBSkEsWUFBQUEsR0FBb0JBLElBQUksQ0FBM0RBLFlBQUFBO0FBQ0FBLGNBQUFBLElBQUksQ0FBSkEsS0FBQUEsR0FBYUQsS0FBSyxDQUFMQSxhQUFBQSxDQUFiQyxLQUFBQTtBQUNEOzs7bURBRXNCRCxLLEVBQU87QUFDNUIsa0JBQUlDLElBQUksR0FEb0IsSUFDNUIsQ0FENEIsQ0FDWDs7QUFDakIsa0JBQUlDLEVBQUUsR0FBR0YsS0FBSyxDQUFMQSxLQUFBQSxHQUFjQyxJQUFJLENBQTNCLEtBQUE7QUFDQSxrQkFBSUUsSUFBSSxHQUFHLENBQVgsRUFBQTtBQUNBRixjQUFBQSxJQUFJLENBQUpBLEtBQUFBLEdBQWFELEtBQUssQ0FBbEJDLEtBQUFBOztBQUVBLGtCQUFJQyxFQUFFLElBQUlELElBQUksQ0FBWCxPQUFDQyxJQUF3QkMsSUFBSSxJQUFJRixJQUFJLENBQXhDLFNBQUEsRUFBcUQ7QUFDbkRELGdCQUFBQSxLQUFLLENBQUxBLGVBQUFBO0FBREYsZUFBQSxNQUVPO0FBQ0xBLGdCQUFBQSxLQUFLLENBQUxBLGNBQUFBO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7Ozs7OztpQ0FRS0EsSyxFQUFPSSxPLEVBQVM7QUFDbkIsa0JBQUksS0FBQSxRQUFBLENBQUEsUUFBQSxDQUFBLFNBQUEsS0FBcUMsS0FBekMsVUFBQSxFQUEwRDtBQUFFO0FBQVM7O0FBQ3JFLGtCQUFJUixLQUFLLEdBQVQsSUFBQTs7QUFFQSxrQkFBQSxPQUFBLEVBQWE7QUFDWCxxQkFBQSxZQUFBLEdBQUEsT0FBQTtBQUNEOztBQUVELGtCQUFJLEtBQUEsT0FBQSxDQUFBLE9BQUEsS0FBSixLQUFBLEVBQW9DO0FBQ2xDUyxnQkFBQUEsTUFBTSxDQUFOQSxRQUFBQSxDQUFBQSxDQUFBQSxFQUFBQSxDQUFBQTtBQURGLGVBQUEsTUFFTyxJQUFJLEtBQUEsT0FBQSxDQUFBLE9BQUEsS0FBSixRQUFBLEVBQXVDO0FBQzVDQSxnQkFBQUEsTUFBTSxDQUFOQSxRQUFBQSxDQUFBQSxDQUFBQSxFQUFrQmYsUUFBUSxDQUFSQSxJQUFBQSxDQUFsQmUsWUFBQUE7QUFDRDs7QUFFRCxrQkFBSSxLQUFBLE9BQUEsQ0FBQSxjQUFBLElBQStCLEtBQUEsT0FBQSxDQUFBLFVBQUEsS0FBbkMsU0FBQSxFQUEwRTtBQUN4RSxxQkFBQSxRQUFBLENBQUEsUUFBQSxDQUFBLDJCQUFBLEVBQUEsR0FBQSxDQUFBLHFCQUFBLEVBQStFLEtBQUEsT0FBQSxDQUEvRSxjQUFBO0FBREYsZUFBQSxNQUVPO0FBQ0wscUJBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSwyQkFBQSxFQUFBLEdBQUEsQ0FBQSxxQkFBQSxFQUFBLEVBQUE7QUFDRDs7QUFFRCxtQkFBQSxRQUFBLENBQUEsUUFBQSxDQUFBLFNBQUEsRUFBQSxXQUFBLENBQUEsV0FBQTtBQUVBLG1CQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsZUFBQSxFQUFBLE1BQUE7QUFDQSxtQkFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsRUFBQSxPQUFBO0FBRUEsbUJBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBdUIsYUFBYSxLQXpCakIsUUF5Qm5CLEVBekJtQixDQTJCbkI7O0FBQ0Esa0JBQUksS0FBQSxPQUFBLENBQUEsYUFBQSxLQUFKLEtBQUEsRUFBMEM7QUFDeEN4QixnQkFBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLFFBQUFBLENBQUFBLG9CQUFBQSxFQUFBQSxFQUFBQSxDQUFBQSxXQUFBQSxFQUF5RCxLQUF6REEsY0FBQUE7QUFDQSxxQkFBQSxRQUFBLENBQUEsRUFBQSxDQUFBLFlBQUEsRUFBK0IsS0FBL0IsaUJBQUE7QUFDQSxxQkFBQSxRQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsRUFBOEIsS0FBOUIsc0JBQUE7QUFDRDs7QUFFRCxrQkFBSSxLQUFBLE9BQUEsQ0FBQSxjQUFBLEtBQUosSUFBQSxFQUEwQztBQUN4QyxxQkFBQSxRQUFBLENBQUEsUUFBQSxDQUFBLFlBQUE7QUFDRDs7QUFFRCxrQkFBSSxLQUFBLE9BQUEsQ0FBQSxZQUFBLEtBQUEsSUFBQSxJQUFzQyxLQUFBLE9BQUEsQ0FBQSxjQUFBLEtBQTFDLElBQUEsRUFBZ0Y7QUFDOUUscUJBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxhQUFBO0FBQ0Q7O0FBRUQsa0JBQUksS0FBQSxPQUFBLENBQUEsU0FBQSxLQUFKLElBQUEsRUFBcUM7QUFDbkMscUJBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBa0J5QixNQUFBQSxDQUFBQSxtREFBQUEsQ0FBQUEsZUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBYyxLQUFoQyxRQUFrQkEsQ0FBbEIsRUFBZ0QsWUFBVztBQUN6RCxzQkFBSSxDQUFDVixLQUFLLENBQUxBLFFBQUFBLENBQUFBLFFBQUFBLENBQUwsU0FBS0EsQ0FBTCxFQUF5QztBQUFBLDJCQUFBLENBQy9CO0FBQ1Q7O0FBQ0Qsc0JBQUlXLFdBQVcsR0FBR1gsS0FBSyxDQUFMQSxRQUFBQSxDQUFBQSxJQUFBQSxDQUFsQixrQkFBa0JBLENBQWxCOztBQUNBLHNCQUFJVyxXQUFXLENBQWYsTUFBQSxFQUF3QjtBQUNwQkEsb0JBQUFBLFdBQVcsQ0FBWEEsRUFBQUEsQ0FBQUEsQ0FBQUEsRUFBQUEsS0FBQUE7QUFESixtQkFBQSxNQUVPO0FBQ0hYLG9CQUFBQSxLQUFLLENBQUxBLFFBQUFBLENBQUFBLElBQUFBLENBQUFBLFdBQUFBLEVBQUFBLEVBQUFBLENBQUFBLENBQUFBLEVBQUFBLEtBQUFBO0FBQ0g7QUFUSCxpQkFBQTtBQVdEOztBQUVELGtCQUFJLEtBQUEsT0FBQSxDQUFBLFNBQUEsS0FBSixJQUFBLEVBQXFDO0FBQ25DLHFCQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsVUFBQSxFQUFBLElBQUE7O0FBQ0FWLGdCQUFBQSxzREFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsQ0FBQUEsU0FBQUEsQ0FBbUIsS0FBbkJBLFFBQUFBO0FBQ0Q7O0FBRUQsbUJBQUEsa0JBQUE7QUFFQTs7Ozs7O0FBSUEsbUJBQUEsUUFBQSxDQUFBLE9BQUEsQ0FBQSxxQkFBQTtBQUNEO0FBRUQ7Ozs7Ozs7OztrQ0FNTXNCLEUsRUFBSTtBQUNSLGtCQUFJLENBQUMsS0FBQSxRQUFBLENBQUEsUUFBQSxDQUFELFNBQUMsQ0FBRCxJQUFzQyxLQUExQyxVQUFBLEVBQTJEO0FBQUU7QUFBUzs7QUFFdEUsa0JBQUlaLEtBQUssR0FBVCxJQUFBOztBQUVBLG1CQUFBLFFBQUEsQ0FBQSxXQUFBLENBQUEsU0FBQTtBQUVBLG1CQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsYUFBQSxFQUFBLE1BQUE7QUFDRTs7OztBQURGLGVBQUEsT0FBQSxDQUFBLHFCQUFBO0FBT0EsbUJBQUEsUUFBQSxDQUFBLFdBQUEsQ0FkUSx1REFjUixFQWRRLENBZ0JSOztBQUNBLGtCQUFJLEtBQUEsT0FBQSxDQUFBLGFBQUEsS0FBSixLQUFBLEVBQTBDO0FBQ3hDZixnQkFBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLFdBQUFBLENBQUFBLG9CQUFBQSxFQUFBQSxHQUFBQSxDQUFBQSxXQUFBQSxFQUE2RCxLQUE3REEsY0FBQUE7QUFDQSxxQkFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLFlBQUEsRUFBZ0MsS0FBaEMsaUJBQUE7QUFDQSxxQkFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLFdBQUEsRUFBK0IsS0FBL0Isc0JBQUE7QUFDRDs7QUFFRCxrQkFBSSxLQUFBLE9BQUEsQ0FBQSxjQUFBLEtBQUosSUFBQSxFQUEwQztBQUN4QyxxQkFBQSxRQUFBLENBQUEsV0FBQSxDQUFBLFlBQUE7QUFDRDs7QUFFRCxrQkFBSSxLQUFBLE9BQUEsQ0FBQSxZQUFBLEtBQUEsSUFBQSxJQUFzQyxLQUFBLE9BQUEsQ0FBQSxjQUFBLEtBQTFDLElBQUEsRUFBZ0Y7QUFDOUUscUJBQUEsUUFBQSxDQUFBLFdBQUEsQ0FBQSxhQUFBO0FBQ0Q7O0FBRUQsbUJBQUEsU0FBQSxDQUFBLElBQUEsQ0FBQSxlQUFBLEVBQUEsT0FBQTs7QUFFQSxrQkFBSSxLQUFBLE9BQUEsQ0FBQSxTQUFBLEtBQUosSUFBQSxFQUFxQztBQUNuQyxxQkFBQSxRQUFBLENBQUEsVUFBQSxDQUFBLFVBQUE7O0FBQ0FLLGdCQUFBQSxzREFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsQ0FBQUEsWUFBQUEsQ0FBc0IsS0FBdEJBLFFBQUFBO0FBbkNNLGVBQUEsQ0FzQ1I7OztBQUNBLG1CQUFBLFFBQUEsQ0FBQSxHQUFBLENBQWtCb0IsTUFBQUEsQ0FBQUEsbURBQUFBLENBQUFBLGVBQUFBLENBQUFBLENBQUFBLENBQWMsS0FBaEMsUUFBa0JBLENBQWxCLEVBQWdELFVBQUEsQ0FBQSxFQUFZO0FBQzFEVixnQkFBQUEsS0FBSyxDQUFMQSxRQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxXQUFBQTs7QUFDQUEsZ0JBQUFBLEtBQUssQ0FBTEEscUJBQUFBO0FBRkYsZUFBQTtBQUlEO0FBRUQ7Ozs7Ozs7OzttQ0FNT0ksSyxFQUFPSSxPLEVBQVM7QUFDckIsa0JBQUksS0FBQSxRQUFBLENBQUEsUUFBQSxDQUFKLFNBQUksQ0FBSixFQUF1QztBQUNyQyxxQkFBQSxLQUFBLENBQUEsS0FBQSxFQUFBLE9BQUE7QUFERixlQUFBLE1BR0s7QUFDSCxxQkFBQSxJQUFBLENBQUEsS0FBQSxFQUFBLE9BQUE7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7OzRDQUtnQkssQyxFQUFHO0FBQUEsa0JBQUEsTUFBQSxHQUFBLElBQUE7O0FBQ2pCdkIsY0FBQUEsc0RBQUFBLENBQUFBLFVBQUFBLENBQUFBLENBQUFBLFNBQUFBLENBQUFBLENBQUFBLEVBQUFBLFdBQUFBLEVBQW1DO0FBQ2pDd0IsZ0JBQUFBLEtBQUssRUFBRSxTQUFBLEtBQUEsR0FBTTtBQUNYLGtCQUFBLE1BQUksQ0FBSixLQUFBOztBQUNBLGtCQUFBLE1BQUksQ0FBSixZQUFBLENBQUEsS0FBQTs7QUFDQSx5QkFBQSxJQUFBO0FBSitCLGlCQUFBO0FBTWpDQyxnQkFBQUEsT0FBTyxFQUFFLFNBQUEsT0FBQSxHQUFNO0FBQ2JGLGtCQUFBQSxDQUFDLENBQURBLGVBQUFBO0FBQ0FBLGtCQUFBQSxDQUFDLENBQURBLGNBQUFBO0FBQ0Q7QUFUZ0MsZUFBbkN2QjtBQVdEO0FBRUQ7Ozs7Ozs7dUNBSVc7QUFDVCxtQkFBQSxLQUFBO0FBQ0EsbUJBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSwyQkFBQTtBQUNBLG1CQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsZUFBQTtBQUNBLGtCQUFJLEtBQUosY0FBQSxFQUF5QkwsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQWMsS0FBZEEsY0FBQUE7QUFDMUI7Ozs7VUFoYnFCK0IsbURBQUFBLENBQUFBLFFBQUFBLEM7O0FBbWJ4QmxDLFFBQUFBLFNBQVMsQ0FBVEEsUUFBQUEsR0FBcUI7QUFDbkI7Ozs7OztBQU1BbUMsVUFBQUEsWUFBWSxFQVBPLElBQUE7O0FBU25COzs7Ozs7QUFNQUMsVUFBQUEsY0FBYyxFQWZLLElBQUE7O0FBaUJuQjs7Ozs7O0FBTUFDLFVBQUFBLFNBQVMsRUF2QlUsSUFBQTs7QUF5Qm5COzs7Ozs7QUFNQUMsVUFBQUEsTUFBTSxFQS9CYSxJQUFBOztBQWlDbkI7Ozs7OztBQU1BQyxVQUFBQSxhQUFhLEVBdkNNLElBQUE7O0FBeUNuQjs7Ozs7O0FBTUFDLFVBQUFBLGNBQWMsRUEvQ0ssSUFBQTs7QUFpRG5COzs7Ozs7QUFNQUMsVUFBQUEsVUFBVSxFQXZEUyxNQUFBOztBQXlEbkI7Ozs7OztBQU1BQyxVQUFBQSxPQUFPLEVBL0RZLElBQUE7O0FBaUVuQjs7Ozs7O0FBTUFyQixVQUFBQSxVQUFVLEVBdkVTLEtBQUE7O0FBeUVuQjs7Ozs7O0FBTUFzQixVQUFBQSxRQUFRLEVBL0VXLElBQUE7O0FBaUZuQjs7Ozs7O0FBTUFDLFVBQUFBLFNBQVMsRUF2RlUsSUFBQTs7QUF5Rm5COzs7Ozs7O0FBT0FDLFVBQUFBLFdBQVcsRUFoR1EsYUFBQTs7QUFrR25COzs7Ozs7QUFNQUMsVUFBQUEsU0FBUyxFQUFFO0FBeEdRLFNBQXJCOUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyY0EsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsVUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxRQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsbURBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1EQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxvREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxrQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsNERBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsb0RBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLFlBQU0rQyxnQkFBZ0IsR0FBSSxZQUFZO0FBQ3BDLGNBQUlDLFFBQVEsR0FBRyxDQUFBLFFBQUEsRUFBQSxLQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBZixFQUFlLENBQWY7O0FBQ0EsZUFBSyxJQUFJQyxDQUFDLEdBQVYsQ0FBQSxFQUFjQSxDQUFDLEdBQUdELFFBQVEsQ0FBMUIsTUFBQSxFQUFtQ0MsQ0FBbkMsRUFBQSxFQUF3QztBQUN0QyxnQkFBSSxHQUFBLE1BQUEsQ0FBR0QsUUFBUSxDQUFYLENBQVcsQ0FBWCxFQUFBLGtCQUFBLEtBQUosTUFBQSxFQUFnRDtBQUM5QyxxQkFBT3JCLE1BQU0sQ0FBQSxHQUFBLE1BQUEsQ0FBSXFCLFFBQVEsQ0FBWixDQUFZLENBQVosRUFBYixrQkFBYSxDQUFBLENBQWI7QUFDRDtBQUNGOztBQUNELGlCQUFBLEtBQUE7QUFQRixTQUEwQixFQUExQjs7QUFVQSxZQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBLEVBQUEsRUFBQSxJQUFBLEVBQWM7QUFDN0JDLFVBQUFBLEVBQUUsQ0FBRkEsSUFBQUEsQ0FBQUEsSUFBQUEsRUFBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsT0FBQUEsQ0FBaUMsVUFBQSxFQUFBLEVBQU07QUFDckNoRCxZQUFBQSwyQ0FBQUEsR0FBQyxJQUFBLE1BQUEsQ0FBREEsRUFBQyxDQUFEQSxDQUFBQSxDQUFhaUQsSUFBSSxLQUFKQSxPQUFBQSxHQUFBQSxTQUFBQSxHQUFiakQsZ0JBQUFBLEVBQUFBLEdBQUFBLE1BQUFBLENBQUFBLElBQUFBLEVBQUFBLGFBQUFBLENBQUFBLEVBQW9GLENBQXBGQSxFQUFvRixDQUFwRkE7QUFERmdELFdBQUFBO0FBREYsU0FBQTs7QUFNQSxZQUFJN0MsUUFBUSxHQUFHO0FBQ2IrQyxVQUFBQSxTQUFTLEVBQUU7QUFDVEMsWUFBQUEsS0FBSyxFQURJLEVBQUE7QUFFVEMsWUFBQUEsTUFBTSxFQUFFO0FBRkMsV0FERTtBQUtiQyxVQUFBQSxZQUFZLEVBQUU7QUFMRCxTQUFmO0FBUUFsRCxRQUFBQSxRQUFRLENBQVJBLFNBQUFBLENBQUFBLEtBQUFBLEdBQTRCO0FBQzFCbUQsVUFBQUEsWUFBWSxFQUFFLFNBQUEsWUFBQSxHQUFXO0FBQ3ZCUCxZQUFBQSxRQUFRLENBQUMvQywyQ0FBQUEsR0FBRCxJQUFDQSxDQUFELEVBQVIrQyxNQUFRLENBQVJBO0FBRndCLFdBQUE7QUFJMUJRLFVBQUFBLGFBQWEsRUFBRSxTQUFBLGFBQUEsR0FBVztBQUN4QixnQkFBSWpELEVBQUUsR0FBR04sMkNBQUFBLEdBQUFBLElBQUFBLENBQUFBLENBQUFBLElBQUFBLENBQVQsT0FBU0EsQ0FBVDs7QUFDQSxnQkFBQSxFQUFBLEVBQVE7QUFDTitDLGNBQUFBLFFBQVEsQ0FBQy9DLDJDQUFBQSxHQUFELElBQUNBLENBQUQsRUFBUitDLE9BQVEsQ0FBUkE7QUFERixhQUFBLE1BR0s7QUFDSC9DLGNBQUFBLDJDQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxDQUFBQSxPQUFBQSxDQUFBQSxrQkFBQUE7QUFDRDtBQVh1QixXQUFBO0FBYTFCd0QsVUFBQUEsY0FBYyxFQUFFLFNBQUEsY0FBQSxHQUFXO0FBQ3pCLGdCQUFJbEQsRUFBRSxHQUFHTiwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsSUFBQUEsQ0FBVCxRQUFTQSxDQUFUOztBQUNBLGdCQUFBLEVBQUEsRUFBUTtBQUNOK0MsY0FBQUEsUUFBUSxDQUFDL0MsMkNBQUFBLEdBQUQsSUFBQ0EsQ0FBRCxFQUFSK0MsUUFBUSxDQUFSQTtBQURGLGFBQUEsTUFFTztBQUNML0MsY0FBQUEsMkNBQUFBLEdBQUFBLElBQUFBLENBQUFBLENBQUFBLE9BQUFBLENBQUFBLG1CQUFBQTtBQUNEO0FBbkJ1QixXQUFBO0FBcUIxQnlELFVBQUFBLGlCQUFpQixFQUFFLFNBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQVk7QUFDN0I3QixZQUFBQSxDQUFDLENBQURBLGVBQUFBO0FBQ0EsZ0JBQUk4QixTQUFTLEdBQUcxRCwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsSUFBQUEsQ0FBaEIsVUFBZ0JBLENBQWhCOztBQUVBLGdCQUFHMEQsU0FBUyxLQUFaLEVBQUEsRUFBb0I7QUFDbEJDLGNBQUFBLG9EQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxDQUFBQSxVQUFBQSxDQUFrQjNELDJDQUFBQSxHQUFsQjJELElBQWtCM0QsQ0FBbEIyRCxFQUFBQSxTQUFBQSxFQUFzQyxZQUFXO0FBQy9DM0QsZ0JBQUFBLDJDQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxDQUFBQSxPQUFBQSxDQUFBQSxXQUFBQTtBQURGMkQsZUFBQUE7QUFERixhQUFBLE1BSUs7QUFDSDNELGNBQUFBLDJDQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxDQUFBQSxPQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxXQUFBQTtBQUNEO0FBL0J1QixXQUFBO0FBaUMxQjRELFVBQUFBLG1CQUFtQixFQUFFLFNBQUEsbUJBQUEsR0FBVztBQUM5QixnQkFBSXRELEVBQUUsR0FBR04sMkNBQUFBLEdBQUFBLElBQUFBLENBQUFBLENBQUFBLElBQUFBLENBQVQsY0FBU0EsQ0FBVDtBQUNBQSxZQUFBQSwyQ0FBQUEsR0FBQyxJQUFBLE1BQUEsQ0FBREEsRUFBQyxDQUFEQSxDQUFBQSxDQUFBQSxjQUFBQSxDQUFBQSxtQkFBQUEsRUFBZ0QsQ0FBQ0EsMkNBQUFBLEdBQWpEQSxJQUFpREEsQ0FBRCxDQUFoREE7QUFDRDtBQXBDeUIsU0FBNUJHLEMsQ0F1Q0E7O0FBQ0FBLFFBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsZUFBQUEsR0FBd0MsVUFBQSxLQUFBLEVBQVc7QUFDakQwRCxVQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLGtCQUFBQSxFQUE4QjFELFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUIwRCxZQUFBQTtBQUNBQSxVQUFBQSxLQUFLLENBQUxBLEVBQUFBLENBQUFBLGtCQUFBQSxFQUFBQSxhQUFBQSxFQUE0QzFELFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBNUMwRCxZQUFBQTtBQUZGMUQsU0FBQUEsQyxDQUtBO0FBQ0E7OztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGdCQUFBQSxHQUF5QyxVQUFBLEtBQUEsRUFBVztBQUNsRDBELFVBQUFBLEtBQUssQ0FBTEEsR0FBQUEsQ0FBQUEsa0JBQUFBLEVBQThCMUQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE5QjBELGFBQUFBO0FBQ0FBLFVBQUFBLEtBQUssQ0FBTEEsRUFBQUEsQ0FBQUEsa0JBQUFBLEVBQUFBLGNBQUFBLEVBQTZDMUQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE3QzBELGFBQUFBO0FBRkYxRCxTQUFBQSxDLENBS0E7OztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGlCQUFBQSxHQUEwQyxVQUFBLEtBQUEsRUFBVztBQUNuRDBELFVBQUFBLEtBQUssQ0FBTEEsR0FBQUEsQ0FBQUEsa0JBQUFBLEVBQThCMUQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE5QjBELGNBQUFBO0FBQ0FBLFVBQUFBLEtBQUssQ0FBTEEsRUFBQUEsQ0FBQUEsa0JBQUFBLEVBQUFBLGVBQUFBLEVBQThDMUQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE5QzBELGNBQUFBO0FBRkYxRCxTQUFBQSxDLENBS0E7OztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLG9CQUFBQSxHQUE2QyxVQUFBLEtBQUEsRUFBVztBQUN0RDBELFVBQUFBLEtBQUssQ0FBTEEsR0FBQUEsQ0FBQUEsa0JBQUFBLEVBQThCMUQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE5QjBELGlCQUFBQTtBQUNBQSxVQUFBQSxLQUFLLENBQUxBLEVBQUFBLENBQUFBLGtCQUFBQSxFQUFBQSxtQ0FBQUEsRUFBa0UxRCxRQUFRLENBQVJBLFNBQUFBLENBQUFBLEtBQUFBLENBQWxFMEQsaUJBQUFBO0FBRkYxRCxTQUFBQSxDLENBS0E7OztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLHNCQUFBQSxHQUErQyxVQUFBLEtBQUEsRUFBVztBQUN4RDBELFVBQUFBLEtBQUssQ0FBTEEsR0FBQUEsQ0FBQUEsa0NBQUFBLEVBQThDMUQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE5QzBELG1CQUFBQTtBQUNBQSxVQUFBQSxLQUFLLENBQUxBLEVBQUFBLENBQUFBLGtDQUFBQSxFQUFBQSxxQkFBQUEsRUFBb0UxRCxRQUFRLENBQVJBLFNBQUFBLENBQUFBLEtBQUFBLENBQXBFMEQsbUJBQUFBO0FBRkYxRCxTQUFBQSxDLENBT0E7OztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFNBQUFBLENBQUFBLE1BQUFBLEdBQTZCO0FBQzNCMkQsVUFBQUEsY0FBYyxFQUFFLFNBQUEsY0FBQSxDQUFBLE1BQUEsRUFBaUI7QUFDL0IsZ0JBQUcsQ0FBSCxnQkFBQSxFQUFxQjtBQUFDO0FBQ3BCQyxjQUFBQSxNQUFNLENBQU5BLElBQUFBLENBQVksWUFBVTtBQUNwQi9ELGdCQUFBQSwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEscUJBQUFBO0FBREYrRCxlQUFBQTtBQUY2QixhQUFBLENBTS9COzs7QUFDQUEsWUFBQUEsTUFBTSxDQUFOQSxJQUFBQSxDQUFBQSxhQUFBQSxFQUFBQSxRQUFBQTtBQVJ5QixXQUFBO0FBVTNCQyxVQUFBQSxjQUFjLEVBQUUsU0FBQSxjQUFBLENBQUEsTUFBQSxFQUFpQjtBQUMvQixnQkFBRyxDQUFILGdCQUFBLEVBQXFCO0FBQUM7QUFDcEJELGNBQUFBLE1BQU0sQ0FBTkEsSUFBQUEsQ0FBWSxZQUFVO0FBQ3BCL0QsZ0JBQUFBLDJDQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxDQUFBQSxjQUFBQSxDQUFBQSxxQkFBQUE7QUFERitELGVBQUFBO0FBRjZCLGFBQUEsQ0FNL0I7OztBQUNBQSxZQUFBQSxNQUFNLENBQU5BLElBQUFBLENBQUFBLGFBQUFBLEVBQUFBLFFBQUFBO0FBakJ5QixXQUFBO0FBbUIzQkUsVUFBQUEsZUFBZSxFQUFFLFNBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxRQUFBLEVBQXFCO0FBQ3BDLGdCQUFJQyxNQUFNLEdBQUd0QyxDQUFDLENBQURBLFNBQUFBLENBQUFBLEtBQUFBLENBQUFBLEdBQUFBLEVBQWIsQ0FBYUEsQ0FBYjtBQUNBLGdCQUFJdUMsT0FBTyxHQUFHbkUsMkNBQUFBLEdBQUMsU0FBQSxNQUFBLENBQUEsTUFBQSxFQUFEQSxHQUFDLENBQURBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLG9CQUFBQSxNQUFBQSxDQUFBQSxRQUFBQSxFQUFkLEtBQWNBLENBQUFBLENBQWQ7QUFFQW1FLFlBQUFBLE9BQU8sQ0FBUEEsSUFBQUEsQ0FBYSxZQUFVO0FBQ3JCLGtCQUFJcEQsS0FBSyxHQUFHZiwyQ0FBQUEsR0FBWixJQUFZQSxDQUFaOztBQUNBZSxjQUFBQSxLQUFLLENBQUxBLGNBQUFBLENBQUFBLGtCQUFBQSxFQUF5QyxDQUF6Q0EsS0FBeUMsQ0FBekNBO0FBRkZvRCxhQUFBQTtBQXZCeUIsV0FBQSxDQThCN0I7O0FBOUI2QixTQUE3QmhFOztBQStCQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUEsR0FBMkMsVUFBQSxVQUFBLEVBQXFCO0FBQzlELGNBQUlpRSxTQUFTLEdBQUdwRSwyQ0FBQUEsR0FBaEIsaUJBQWdCQSxDQUFoQjtBQUFBLGNBQ0lxRSxTQUFTLEdBQUcsQ0FBQSxVQUFBLEVBQUEsU0FBQSxFQURoQixRQUNnQixDQURoQjs7QUFHQSxjQUFBLFVBQUEsRUFBYztBQUNaLGdCQUFHLE9BQUEsVUFBQSxLQUFILFFBQUEsRUFBa0M7QUFDaENBLGNBQUFBLFNBQVMsQ0FBVEEsSUFBQUEsQ0FBQUEsVUFBQUE7QUFERixhQUFBLE1BRU0sSUFBRyxPQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsUUFBQSxJQUFrQyxPQUFPQyxVQUFVLENBQWpCLENBQWlCLENBQWpCLEtBQXJDLFFBQUEsRUFBdUU7QUFDM0VELGNBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFUQSxNQUFBQSxDQUFaQSxVQUFZQSxDQUFaQTtBQURJLGFBQUEsTUFFRDtBQUNIOUQsY0FBQUEsT0FBTyxDQUFQQSxLQUFBQSxDQUFBQSw4QkFBQUE7QUFDRDtBQUNGOztBQUNELGNBQUc2RCxTQUFTLENBQVosTUFBQSxFQUFvQjtBQUNsQixnQkFBSUcsU0FBUyxHQUFHLFNBQVMsQ0FBVCxHQUFBLENBQWMsVUFBQSxJQUFBLEVBQVU7QUFDdEMscUJBQUEsY0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBRGMsYUFBQSxFQUFBLElBQUEsQ0FBaEIsR0FBZ0IsQ0FBaEI7QUFJQXZFLFlBQUFBLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxTQUFBQSxFQUFBQSxFQUFBQSxDQUFBQSxTQUFBQSxFQUF1Q0csUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxNQUFBQSxDQUF2Q0gsZUFBQUE7QUFDRDtBQW5CSEcsU0FBQUE7O0FBc0JBLGlCQUFBLHNCQUFBLENBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxRQUFBLEVBQTZEO0FBQzNELGNBQUEsS0FBQTtBQUFBLGNBQVdxRSxJQUFJLEdBQUdDLEtBQUssQ0FBTEEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsU0FBQUEsRUFBbEIsQ0FBa0JBLENBQWxCO0FBQ0F6RSxVQUFBQSwyQ0FBQUEsR0FBQUEsTUFBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsT0FBQUEsRUFBQUEsRUFBQUEsQ0FBQUEsT0FBQUEsRUFBbUMsVUFBQSxDQUFBLEVBQVk7QUFDN0MsZ0JBQUEsS0FBQSxFQUFXO0FBQUUwRSxjQUFBQSxZQUFZLENBQVpBLEtBQVksQ0FBWkE7QUFBc0I7O0FBQ25DQyxZQUFBQSxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFVO0FBQzNCQyxjQUFBQSxRQUFRLENBQVJBLEtBQUFBLENBQUFBLElBQUFBLEVBQUFBLElBQUFBO0FBRGdCLGFBQUEsRUFFZkMsUUFBUSxJQUprQyxFQUUzQixDQUFsQkgsQ0FGNkMsQ0FJMUI7QUFKckIzRSxXQUFBQTtBQU1EOztBQUVERyxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGlCQUFBQSxHQUEwQyxVQUFBLFFBQUEsRUFBa0I7QUFDMUQsY0FBSTRELE1BQU0sR0FBRy9ELDJDQUFBQSxHQUFiLGVBQWFBLENBQWI7O0FBQ0EsY0FBRytELE1BQU0sQ0FBVCxNQUFBLEVBQWlCO0FBQ2ZnQixZQUFBQSxzQkFBc0IsQ0FBQSxRQUFBLEVBQUEsbUJBQUEsRUFBZ0M1RSxRQUFRLENBQVJBLFNBQUFBLENBQUFBLE1BQUFBLENBQWhDLGNBQUEsRUFBdEI0RSxNQUFzQixDQUF0QkE7QUFDRDtBQUpINUUsU0FBQUE7O0FBT0FBLFFBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsaUJBQUFBLEdBQTBDLFVBQUEsUUFBQSxFQUFrQjtBQUMxRCxjQUFJNEQsTUFBTSxHQUFHL0QsMkNBQUFBLEdBQWIsZUFBYUEsQ0FBYjs7QUFDQSxjQUFHK0QsTUFBTSxDQUFULE1BQUEsRUFBaUI7QUFDZmdCLFlBQUFBLHNCQUFzQixDQUFBLFFBQUEsRUFBQSxtQkFBQSxFQUFnQzVFLFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsTUFBQUEsQ0FBaEMsY0FBQSxFQUF0QjRFLE1BQXNCLENBQXRCQTtBQUNEO0FBSkg1RSxTQUFBQTs7QUFPQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSx5QkFBQUEsR0FBa0QsVUFBQSxLQUFBLEVBQWdCO0FBQ2hFLGNBQUcsQ0FBSCxnQkFBQSxFQUFxQjtBQUFFLG1CQUFBLEtBQUE7QUFBZTs7QUFDdEMsY0FBSTRELE1BQU0sR0FBR0YsS0FBSyxDQUFMQSxJQUFBQSxDQUZtRCw2Q0FFbkRBLENBQWIsQ0FGZ0UsQ0FJaEU7O0FBQ0EsY0FBSW1CLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBQSxtQkFBQSxFQUErQjtBQUM3RCxnQkFBSWxFLE9BQU8sR0FBR2QsMkNBQUFBLEdBQUVpRixtQkFBbUIsQ0FBbkJBLENBQW1CLENBQW5CQSxDQUQ2QyxNQUMvQ2pGLENBQWQsQ0FENkQsQ0FHN0Q7O0FBQ0Esb0JBQVFpRixtQkFBbUIsQ0FBbkJBLENBQW1CLENBQW5CQSxDQUFSLElBQUE7QUFDRSxtQkFBQSxZQUFBO0FBQ0Usb0JBQUluRSxPQUFPLENBQVBBLElBQUFBLENBQUFBLGFBQUFBLE1BQUFBLFFBQUFBLElBQTRDbUUsbUJBQW1CLENBQW5CQSxDQUFtQixDQUFuQkEsQ0FBQUEsYUFBQUEsS0FBaEQsYUFBQSxFQUF3RztBQUN0R25FLGtCQUFBQSxPQUFPLENBQVBBLGNBQUFBLENBQUFBLHFCQUFBQSxFQUE4QyxDQUFBLE9BQUEsRUFBVVUsTUFBTSxDQUE5RFYsV0FBOEMsQ0FBOUNBO0FBQ0Q7O0FBQ0Qsb0JBQUlBLE9BQU8sQ0FBUEEsSUFBQUEsQ0FBQUEsYUFBQUEsTUFBQUEsUUFBQUEsSUFBNENtRSxtQkFBbUIsQ0FBbkJBLENBQW1CLENBQW5CQSxDQUFBQSxhQUFBQSxLQUFoRCxhQUFBLEVBQXdHO0FBQ3RHbkUsa0JBQUFBLE9BQU8sQ0FBUEEsY0FBQUEsQ0FBQUEscUJBQUFBLEVBQThDLENBQTlDQSxPQUE4QyxDQUE5Q0E7QUFDQTs7QUFDRixvQkFBSW1FLG1CQUFtQixDQUFuQkEsQ0FBbUIsQ0FBbkJBLENBQUFBLGFBQUFBLEtBQUosT0FBQSxFQUFzRDtBQUNwRG5FLGtCQUFBQSxPQUFPLENBQVBBLE9BQUFBLENBQUFBLGVBQUFBLEVBQUFBLElBQUFBLENBQUFBLGFBQUFBLEVBQUFBLFFBQUFBO0FBQ0FBLGtCQUFBQSxPQUFPLENBQVBBLE9BQUFBLENBQUFBLGVBQUFBLEVBQUFBLGNBQUFBLENBQUFBLHFCQUFBQSxFQUF1RSxDQUFDQSxPQUFPLENBQVBBLE9BQUFBLENBQXhFQSxlQUF3RUEsQ0FBRCxDQUF2RUE7QUFDRDs7QUFDRDs7QUFFRixtQkFBQSxXQUFBO0FBQ0VBLGdCQUFBQSxPQUFPLENBQVBBLE9BQUFBLENBQUFBLGVBQUFBLEVBQUFBLElBQUFBLENBQUFBLGFBQUFBLEVBQUFBLFFBQUFBO0FBQ0FBLGdCQUFBQSxPQUFPLENBQVBBLE9BQUFBLENBQUFBLGVBQUFBLEVBQUFBLGNBQUFBLENBQUFBLHFCQUFBQSxFQUF1RSxDQUFDQSxPQUFPLENBQVBBLE9BQUFBLENBQXhFQSxlQUF3RUEsQ0FBRCxDQUF2RUE7QUFDQTs7QUFFRjtBQUNFLHVCQUFBLEtBQUE7QUFDRjtBQXJCRjtBQUpGLFdBQUE7O0FBNkJBLGNBQUlpRCxNQUFNLENBQVYsTUFBQSxFQUFtQjtBQUNqQjtBQUNBLGlCQUFLLElBQUlqQixDQUFDLEdBQVYsQ0FBQSxFQUFnQkEsQ0FBQyxJQUFJaUIsTUFBTSxDQUFOQSxNQUFBQSxHQUFyQixDQUFBLEVBQXdDakIsQ0FBeEMsRUFBQSxFQUE2QztBQUMzQyxrQkFBSW9DLGVBQWUsR0FBRyxJQUFBLGdCQUFBLENBQXRCLHlCQUFzQixDQUF0QjtBQUNBQSxjQUFBQSxlQUFlLENBQWZBLE9BQUFBLENBQXdCbkIsTUFBTSxDQUE5Qm1CLENBQThCLENBQTlCQSxFQUFtQztBQUFFQyxnQkFBQUEsVUFBVSxFQUFaLElBQUE7QUFBb0JDLGdCQUFBQSxTQUFTLEVBQTdCLElBQUE7QUFBcUNDLGdCQUFBQSxhQUFhLEVBQWxELEtBQUE7QUFBMkRDLGdCQUFBQSxPQUFPLEVBQWxFLElBQUE7QUFBMEVDLGdCQUFBQSxlQUFlLEVBQUUsQ0FBQSxhQUFBLEVBQUEsT0FBQTtBQUEzRixlQUFuQ0w7QUFDRDtBQUNGO0FBeENIL0UsU0FBQUE7O0FBMkNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQSxHQUEyQyxZQUFXO0FBQ3BELGNBQUlxRixTQUFTLEdBQUd4RiwyQ0FBQUEsR0FBaEIsUUFBZ0JBLENBQWhCO0FBRUFHLFVBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsZUFBQUEsQ0FBQUEsU0FBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxnQkFBQUEsQ0FBQUEsU0FBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUEsQ0FBQUEsU0FBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxvQkFBQUEsQ0FBQUEsU0FBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxzQkFBQUEsQ0FBQUEsU0FBQUE7QUFQRkEsU0FBQUE7O0FBV0FBLFFBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBLEdBQTJDLFlBQVc7QUFDcEQsY0FBSXFGLFNBQVMsR0FBR3hGLDJDQUFBQSxHQUFoQixRQUFnQkEsQ0FBaEI7QUFDQUcsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSx5QkFBQUEsQ0FBQUEsU0FBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFMRkEsU0FBQUE7O0FBU0FBLFFBQUFBLFFBQVEsQ0FBUkEsSUFBQUEsR0FBZ0IsVUFBQSxDQUFBLEVBQUEsVUFBQSxFQUF5QjtBQUN2Q2EsVUFBQUEsTUFBQUEsQ0FBQUEsbURBQUFBLENBQUFBLFFBQUFBLENBQUFBLENBQUFBLENBQU9oQixDQUFDLENBQUYsTUFBRSxDQUFSZ0IsRUFBa0IsWUFBWTtBQUM1QixnQkFBSWhCLENBQUMsQ0FBREEsbUJBQUFBLEtBQUosSUFBQSxFQUFvQztBQUNsQ0csY0FBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFDQUEsY0FBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFDQUgsY0FBQUEsQ0FBQyxDQUFEQSxtQkFBQUEsR0FBQUEsSUFBQUE7QUFDRDtBQUxIZ0IsV0FBQUE7O0FBUUEsY0FBQSxVQUFBLEVBQWU7QUFDYnBCLFlBQUFBLFVBQVUsQ0FBVkEsUUFBQUEsR0FEYSxRQUNiQSxDQURhLENBRWI7O0FBQ0FBLFlBQUFBLFVBQVUsQ0FBVkEsUUFBQUEsR0FBc0JPLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBdEJQLGtCQUFBQTtBQUNEO0FBYkhPLFNBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblBBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FOVUE7Q0FWQSIsImZpbGUiOiJjb21wb25lbnRzL2ZvdW5kYXRpb24tb2ZmY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiLi9mb3VuZGF0aW9uLmNvcmVcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5vZmZjYW52YXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24ub2ZmY2FudmFzXCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5tb3Rpb25cIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2tleWJvYXJkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9tZWRpYVF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9tb3Rpb25fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgT2ZmQ2FudmFzIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5vZmZjYW52YXMnO1xuRm91bmRhdGlvbi5wbHVnaW4oT2ZmQ2FudmFzLCAnT2ZmQ2FudmFzJyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIE9mZkNhbnZhcyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgb25Mb2FkLCB0cmFuc2l0aW9uZW5kLCBSZWdFeHBFc2NhcGUgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkJztcbmltcG9ydCB7IE1lZGlhUXVlcnkgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5JztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5cbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuXG4vKipcbiAqIE9mZkNhbnZhcyBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24ub2ZmY2FudmFzXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnNcbiAqL1xuXG5jbGFzcyBPZmZDYW52YXMgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhbiBvZmYtY2FudmFzIHdyYXBwZXIuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBPZmZDYW52YXNcbiAgICogQGZpcmVzIE9mZkNhbnZhcyNpbml0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBpbml0aWFsaXplLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ09mZkNhbnZhcyc7IC8vIGllOSBiYWNrIGNvbXBhdFxuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBPZmZDYW52YXMuZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICB0aGlzLmNvbnRlbnRDbGFzc2VzID0geyBiYXNlOiBbXSwgcmV2ZWFsOiBbXSB9O1xuICAgIHRoaXMuJGxhc3RUcmlnZ2VyID0gJCgpO1xuICAgIHRoaXMuJHRyaWdnZXJzID0gJCgpO1xuICAgIHRoaXMucG9zaXRpb24gPSAnbGVmdCc7XG4gICAgdGhpcy4kY29udGVudCA9ICQoKTtcbiAgICB0aGlzLm5lc3RlZCA9ICEhKHRoaXMub3B0aW9ucy5uZXN0ZWQpO1xuXG4gICAgLy8gRGVmaW5lcyB0aGUgQ1NTIHRyYW5zaXRpb24vcG9zaXRpb24gY2xhc3NlcyBvZiB0aGUgb2ZmLWNhbnZhcyBjb250ZW50IGNvbnRhaW5lci5cbiAgICAkKFsncHVzaCcsICdvdmVybGFwJ10pLmVhY2goKGluZGV4LCB2YWwpID0+IHtcbiAgICAgIHRoaXMuY29udGVudENsYXNzZXMuYmFzZS5wdXNoKCdoYXMtdHJhbnNpdGlvbi0nK3ZhbCk7XG4gICAgfSk7XG4gICAgJChbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddKS5lYWNoKChpbmRleCwgdmFsKSA9PiB7XG4gICAgICB0aGlzLmNvbnRlbnRDbGFzc2VzLmJhc2UucHVzaCgnaGFzLXBvc2l0aW9uLScrdmFsKTtcbiAgICAgIHRoaXMuY29udGVudENsYXNzZXMucmV2ZWFsLnB1c2goJ2hhcy1yZXZlYWwtJyt2YWwpO1xuICAgIH0pO1xuXG4gICAgLy8gVHJpZ2dlcnMgaW5pdCBpcyBpZGVtcG90ZW50LCBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIGl0IGlzIGluaXRpYWxpemVkXG4gICAgVHJpZ2dlcnMuaW5pdCgkKTtcbiAgICBNZWRpYVF1ZXJ5Ll9pbml0KCk7XG5cbiAgICB0aGlzLl9pbml0KCk7XG4gICAgdGhpcy5fZXZlbnRzKCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignT2ZmQ2FudmFzJywge1xuICAgICAgJ0VTQ0FQRSc6ICdjbG9zZSdcbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBvZmYtY2FudmFzIHdyYXBwZXIgYnkgYWRkaW5nIHRoZSBleGl0IG92ZXJsYXkgKGlmIG5lZWRlZCkuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgdmFyIGlkID0gdGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpO1xuXG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAvLyBGaW5kIG9mZi1jYW52YXMgY29udGVudCwgZWl0aGVyIGJ5IElEIChpZiBzcGVjaWZpZWQpLCBieSBzaWJsaW5ncyBvciBieSBjbG9zZXN0IHNlbGVjdG9yIChmYWxsYmFjaylcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRJZCkge1xuICAgICAgdGhpcy4kY29udGVudCA9ICQoJyMnK3RoaXMub3B0aW9ucy5jb250ZW50SWQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy4kZWxlbWVudC5zaWJsaW5ncygnW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XScpLmxlbmd0aCkge1xuICAgICAgdGhpcy4kY29udGVudCA9IHRoaXMuJGVsZW1lbnQuc2libGluZ3MoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5maXJzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRjb250ZW50ID0gdGhpcy4kZWxlbWVudC5jbG9zZXN0KCdbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdJykuZmlyc3QoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jb250ZW50SWQpIHtcbiAgICAgIC8vIEFzc3VtZSB0aGF0IHRoZSBvZmYtY2FudmFzIGVsZW1lbnQgaXMgbmVzdGVkIGlmIGl0IGlzbid0IGEgc2libGluZyBvZiB0aGUgY29udGVudFxuICAgICAgdGhpcy5uZXN0ZWQgPSB0aGlzLiRlbGVtZW50LnNpYmxpbmdzKCdbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdJykubGVuZ3RoID09PSAwO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY29udGVudElkICYmIHRoaXMub3B0aW9ucy5uZXN0ZWQgPT09IG51bGwpIHtcbiAgICAgIC8vIFdhcm5pbmcgaWYgdXNpbmcgY29udGVudCBJRCB3aXRob3V0IHNldHRpbmcgdGhlIG5lc3RlZCBvcHRpb25cbiAgICAgIC8vIE9uY2UgdGhlIGVsZW1lbnQgaXMgbmVzdGVkIGl0IGlzIHJlcXVpcmVkIHRvIHdvcmsgcHJvcGVybHkgaW4gdGhpcyBjYXNlXG4gICAgICBjb25zb2xlLndhcm4oJ1JlbWVtYmVyIHRvIHVzZSB0aGUgbmVzdGVkIG9wdGlvbiBpZiB1c2luZyB0aGUgY29udGVudCBJRCBvcHRpb24hJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmVzdGVkID09PSB0cnVlKSB7XG4gICAgICAvLyBGb3JjZSB0cmFuc2l0aW9uIG92ZXJsYXAgaWYgbmVzdGVkXG4gICAgICB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbiA9ICdvdmVybGFwJztcbiAgICAgIC8vIFJlbW92ZSBhcHByb3ByaWF0ZSBjbGFzc2VzIGlmIGFscmVhZHkgYXNzaWduZWQgaW4gbWFya3VwXG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdpcy10cmFuc2l0aW9uLXB1c2gnKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGBpcy10cmFuc2l0aW9uLSR7dGhpcy5vcHRpb25zLnRyYW5zaXRpb259IGlzLWNsb3NlZGApO1xuXG4gICAgLy8gRmluZCB0cmlnZ2VycyB0aGF0IGFmZmVjdCB0aGlzIGVsZW1lbnQgYW5kIGFkZCBhcmlhLWV4cGFuZGVkIHRvIHRoZW1cbiAgICB0aGlzLiR0cmlnZ2VycyA9ICQoZG9jdW1lbnQpXG4gICAgICAuZmluZCgnW2RhdGEtb3Blbj1cIicraWQrJ1wiXSwgW2RhdGEtY2xvc2U9XCInK2lkKydcIl0sIFtkYXRhLXRvZ2dsZT1cIicraWQrJ1wiXScpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgICAuYXR0cignYXJpYS1jb250cm9scycsIGlkKTtcblxuICAgIC8vIEdldCBwb3NpdGlvbiBieSBjaGVja2luZyBmb3IgcmVsYXRlZCBDU1MgY2xhc3NcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy4kZWxlbWVudC5pcygnLnBvc2l0aW9uLWxlZnQsIC5wb3NpdGlvbi10b3AsIC5wb3NpdGlvbi1yaWdodCwgLnBvc2l0aW9uLWJvdHRvbScpID8gdGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLm1hdGNoKC9wb3NpdGlvblxcLShsZWZ0fHRvcHxyaWdodHxib3R0b20pLylbMV0gOiB0aGlzLnBvc2l0aW9uO1xuXG4gICAgLy8gQWRkIGFuIG92ZXJsYXkgb3ZlciB0aGUgY29udGVudCBpZiBuZWNlc3NhcnlcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdmFyIG92ZXJsYXlQb3NpdGlvbiA9ICQodGhpcy4kZWxlbWVudCkuY3NzKFwicG9zaXRpb25cIikgPT09ICdmaXhlZCcgPyAnaXMtb3ZlcmxheS1maXhlZCcgOiAnaXMtb3ZlcmxheS1hYnNvbHV0ZSc7XG4gICAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnanMtb2ZmLWNhbnZhcy1vdmVybGF5ICcgKyBvdmVybGF5UG9zaXRpb24pO1xuICAgICAgdGhpcy4kb3ZlcmxheSA9ICQob3ZlcmxheSk7XG4gICAgICBpZihvdmVybGF5UG9zaXRpb24gPT09ICdpcy1vdmVybGF5LWZpeGVkJykge1xuICAgICAgICAkKHRoaXMuJG92ZXJsYXkpLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kY29udGVudC5hcHBlbmQodGhpcy4kb3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSByZXZlYWxPbiBvcHRpb24gZnJvbSB0aGUgY2xhc3MuXG4gICAgdmFyIHJldmVhbE9uUmVnRXhwID0gbmV3IFJlZ0V4cChSZWdFeHBFc2NhcGUodGhpcy5vcHRpb25zLnJldmVhbENsYXNzKSArICcoW15cXFxcc10rKScsICdnJyk7XG4gICAgdmFyIHJldmVhbE9uQ2xhc3MgPSByZXZlYWxPblJlZ0V4cC5leGVjKHRoaXMuJGVsZW1lbnRbMF0uY2xhc3NOYW1lKTtcbiAgICBpZiAocmV2ZWFsT25DbGFzcykge1xuICAgICAgdGhpcy5vcHRpb25zLmlzUmV2ZWFsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zLnJldmVhbE9uID0gdGhpcy5vcHRpb25zLnJldmVhbE9uIHx8IHJldmVhbE9uQ2xhc3NbMV07XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHRoZSBgcmV2ZWFsLW9uLSpgIGNsYXNzIGlzIHNldC5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzUmV2ZWFsZWQgPT09IHRydWUgJiYgdGhpcy5vcHRpb25zLnJldmVhbE9uKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmZpcnN0KCkuYWRkQ2xhc3MoYCR7dGhpcy5vcHRpb25zLnJldmVhbENsYXNzfSR7dGhpcy5vcHRpb25zLnJldmVhbE9ufWApO1xuICAgICAgdGhpcy5fc2V0TVFDaGVja2VyKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmFuc2l0aW9uVGltZSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCB0aGlzLm9wdGlvbnMudHJhbnNpdGlvblRpbWUpO1xuICAgIH1cblxuICAgIC8vIEluaXRhbGx5IHJlbW92ZSBhbGwgdHJhbnNpdGlvbi9wb3NpdGlvbiBDU1MgY2xhc3NlcyBmcm9tIG9mZi1jYW52YXMgY29udGVudCBjb250YWluZXIuXG4gICAgdGhpcy5fcmVtb3ZlQ29udGVudENsYXNzZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIHRvIHRoZSBvZmYtY2FudmFzIHdyYXBwZXIgYW5kIHRoZSBleGl0IG92ZXJsYXkuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnpmLnRyaWdnZXIgLnpmLm9mZmNhbnZhcycpLm9uKHtcbiAgICAgICdvcGVuLnpmLnRyaWdnZXInOiB0aGlzLm9wZW4uYmluZCh0aGlzKSxcbiAgICAgICdjbG9zZS56Zi50cmlnZ2VyJzogdGhpcy5jbG9zZS5iaW5kKHRoaXMpLFxuICAgICAgJ3RvZ2dsZS56Zi50cmlnZ2VyJzogdGhpcy50b2dnbGUuYmluZCh0aGlzKSxcbiAgICAgICdrZXlkb3duLnpmLm9mZmNhbnZhcyc6IHRoaXMuX2hhbmRsZUtleWJvYXJkLmJpbmQodGhpcylcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrID09PSB0cnVlKSB7XG4gICAgICB2YXIgJHRhcmdldCA9IHRoaXMub3B0aW9ucy5jb250ZW50T3ZlcmxheSA/IHRoaXMuJG92ZXJsYXkgOiB0aGlzLiRjb250ZW50O1xuICAgICAgJHRhcmdldC5vbih7J2NsaWNrLnpmLm9mZmNhbnZhcyc6IHRoaXMuY2xvc2UuYmluZCh0aGlzKX0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGV2ZW50IGxpc3RlbmVyIGZvciBlbGVtZW50cyB0aGF0IHdpbGwgcmV2ZWFsIGF0IGNlcnRhaW4gYnJlYWtwb2ludHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0TVFDaGVja2VyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLm9uTG9hZExpc3RlbmVyID0gb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKE1lZGlhUXVlcnkuYXRMZWFzdChfdGhpcy5vcHRpb25zLnJldmVhbE9uKSkge1xuICAgICAgICBfdGhpcy5yZXZlYWwodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ2NoYW5nZWQuemYubWVkaWFxdWVyeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChNZWRpYVF1ZXJ5LmF0TGVhc3QoX3RoaXMub3B0aW9ucy5yZXZlYWxPbikpIHtcbiAgICAgICAgX3RoaXMucmV2ZWFsKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMucmV2ZWFsKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBDU1MgdHJhbnNpdGlvbi9wb3NpdGlvbiBjbGFzc2VzIG9mIHRoZSBvZmYtY2FudmFzIGNvbnRlbnQgY29udGFpbmVyLlxuICAgKiBSZW1vdmluZyB0aGUgY2xhc3NlcyBpcyBpbXBvcnRhbnQgd2hlbiBhbm90aGVyIG9mZi1jYW52YXMgZ2V0cyBvcGVuZWQgdGhhdCB1c2VzIHRoZSBzYW1lIGNvbnRlbnQgY29udGFpbmVyLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGhhc1JldmVhbCAtIHRydWUgaWYgcmVsYXRlZCBvZmYtY2FudmFzIGVsZW1lbnQgaXMgcmV2ZWFsZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVtb3ZlQ29udGVudENsYXNzZXMoaGFzUmV2ZWFsKSB7XG4gICAgaWYgKHR5cGVvZiBoYXNSZXZlYWwgIT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy4kY29udGVudC5yZW1vdmVDbGFzcyh0aGlzLmNvbnRlbnRDbGFzc2VzLmJhc2Uuam9pbignICcpKTtcbiAgICB9IGVsc2UgaWYgKGhhc1JldmVhbCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQucmVtb3ZlQ2xhc3MoYGhhcy1yZXZlYWwtJHt0aGlzLnBvc2l0aW9ufWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBDU1MgdHJhbnNpdGlvbi9wb3NpdGlvbiBjbGFzc2VzIG9mIHRoZSBvZmYtY2FudmFzIGNvbnRlbnQgY29udGFpbmVyLCBiYXNlZCBvbiB0aGUgb3BlbmluZyBvZmYtY2FudmFzIGVsZW1lbnQuXG4gICAqIEJlZm9yZWhhbmQgYW55IHRyYW5zaXRpb24vcG9zaXRpb24gY2xhc3MgZ2V0cyByZW1vdmVkLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGhhc1JldmVhbCAtIHRydWUgaWYgcmVsYXRlZCBvZmYtY2FudmFzIGVsZW1lbnQgaXMgcmV2ZWFsZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkQ29udGVudENsYXNzZXMoaGFzUmV2ZWFsKSB7XG4gICAgdGhpcy5fcmVtb3ZlQ29udGVudENsYXNzZXMoaGFzUmV2ZWFsKTtcbiAgICBpZiAodHlwZW9mIGhhc1JldmVhbCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLiRjb250ZW50LmFkZENsYXNzKGBoYXMtdHJhbnNpdGlvbi0ke3RoaXMub3B0aW9ucy50cmFuc2l0aW9ufSBoYXMtcG9zaXRpb24tJHt0aGlzLnBvc2l0aW9ufWApO1xuICAgIH0gZWxzZSBpZiAoaGFzUmV2ZWFsID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRjb250ZW50LmFkZENsYXNzKGBoYXMtcmV2ZWFsLSR7dGhpcy5wb3NpdGlvbn1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgcmV2ZWFsaW5nL2hpZGluZyB0aGUgb2ZmLWNhbnZhcyBhdCBicmVha3BvaW50cywgbm90IHRoZSBzYW1lIGFzIG9wZW4uXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNSZXZlYWxlZCAtIHRydWUgaWYgZWxlbWVudCBzaG91bGQgYmUgcmV2ZWFsZWQuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgcmV2ZWFsKGlzUmV2ZWFsZWQpIHtcbiAgICBpZiAoaXNSZXZlYWxlZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5pc1JldmVhbGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdvcGVuLnpmLnRyaWdnZXIgdG9nZ2xlLnpmLnRyaWdnZXInKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUmV2ZWFsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ29wZW4uemYudHJpZ2dlciB0b2dnbGUuemYudHJpZ2dlcicpLm9uKHtcbiAgICAgICAgJ29wZW4uemYudHJpZ2dlcic6IHRoaXMub3Blbi5iaW5kKHRoaXMpLFxuICAgICAgICAndG9nZ2xlLnpmLnRyaWdnZXInOiB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgIH1cbiAgICB0aGlzLl9hZGRDb250ZW50Q2xhc3Nlcyhpc1JldmVhbGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBzY3JvbGxpbmcgb2YgdGhlIGJvZHkgd2hlbiBvZmZjYW52YXMgaXMgb3BlbiBvbiBtb2JpbGUgU2FmYXJpIGFuZCBvdGhlciB0cm91Ymxlc29tZSBicm93c2Vycy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zdG9wU2Nyb2xsaW5nKGV2ZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGFrZW4gYW5kIGFkYXB0ZWQgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2ODg5NDQ3L3ByZXZlbnQtZnVsbC1wYWdlLXNjcm9sbGluZy1pb3NcbiAgLy8gT25seSByZWFsbHkgd29ya3MgZm9yIHksIG5vdCBzdXJlIGhvdyB0byBleHRlbmQgdG8geCBvciBpZiB3ZSBuZWVkIHRvLlxuICBfcmVjb3JkU2Nyb2xsYWJsZShldmVudCkge1xuICAgIGxldCBlbGVtID0gdGhpczsgLy8gY2FsbGVkIGZyb20gZXZlbnQgaGFuZGxlciBjb250ZXh0IHdpdGggdGhpcyBhcyBlbGVtXG5cbiAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSAoY29udGVudCBvdmVyZmxvd3MpLCB0aGVuLi4uXG4gICAgaWYgKGVsZW0uc2Nyb2xsSGVpZ2h0ICE9PSBlbGVtLmNsaWVudEhlaWdodCkge1xuICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHRvcCwgc2Nyb2xsIGRvd24gb25lIHBpeGVsIHRvIGFsbG93IHNjcm9sbGluZyB1cFxuICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgIGVsZW0uc2Nyb2xsVG9wID0gMTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBib3R0b20sIHNjcm9sbCB1cCBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIGRvd25cbiAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCA9PT0gZWxlbS5zY3JvbGxIZWlnaHQgLSBlbGVtLmNsaWVudEhlaWdodCkge1xuICAgICAgICBlbGVtLnNjcm9sbFRvcCA9IGVsZW0uc2Nyb2xsSGVpZ2h0IC0gZWxlbS5jbGllbnRIZWlnaHQgLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBlbGVtLmFsbG93VXAgPSBlbGVtLnNjcm9sbFRvcCA+IDA7XG4gICAgZWxlbS5hbGxvd0Rvd24gPSBlbGVtLnNjcm9sbFRvcCA8IChlbGVtLnNjcm9sbEhlaWdodCAtIGVsZW0uY2xpZW50SGVpZ2h0KTtcbiAgICBlbGVtLmxhc3RZID0gZXZlbnQub3JpZ2luYWxFdmVudC5wYWdlWTtcbiAgfVxuXG4gIF9zdG9wU2Nyb2xsUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgICBsZXQgZWxlbSA9IHRoaXM7IC8vIGNhbGxlZCBmcm9tIGV2ZW50IGhhbmRsZXIgY29udGV4dCB3aXRoIHRoaXMgYXMgZWxlbVxuICAgIGxldCB1cCA9IGV2ZW50LnBhZ2VZIDwgZWxlbS5sYXN0WTtcbiAgICBsZXQgZG93biA9ICF1cDtcbiAgICBlbGVtLmxhc3RZID0gZXZlbnQucGFnZVk7XG5cbiAgICBpZigodXAgJiYgZWxlbS5hbGxvd1VwKSB8fCAoZG93biAmJiBlbGVtLmFsbG93RG93bikpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgb2ZmLWNhbnZhcyBtZW51LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gRXZlbnQgb2JqZWN0IHBhc3NlZCBmcm9tIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gdHJpZ2dlciAtIGVsZW1lbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIG9mZi1jYW52YXMgdG8gb3Blbi5cbiAgICogQGZpcmVzIE9mZmNhbnZhcyNvcGVuZWRcbiAgICogQHRvZG8gYWxzbyB0cmlnZ2VyICdvcGVuJyBldmVudD9cbiAgICovXG4gIG9wZW4oZXZlbnQsIHRyaWdnZXIpIHtcbiAgICBpZiAodGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaXMtb3BlbicpIHx8IHRoaXMuaXNSZXZlYWxlZCkgeyByZXR1cm47IH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIHRoaXMuJGxhc3RUcmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmZvcmNlVG8gPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZm9yY2VUbyA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYW5zaXRpb25UaW1lICYmIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uICE9PSAnb3ZlcmxhcCcpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuc2libGluZ3MoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCB0aGlzLm9wdGlvbnMudHJhbnNpdGlvblRpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnNpYmxpbmdzKCdbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdJykuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgJycpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ2lzLW9wZW4nKS5yZW1vdmVDbGFzcygnaXMtY2xvc2VkJyk7XG5cbiAgICB0aGlzLiR0cmlnZ2Vycy5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICB0aGlzLiRjb250ZW50LmFkZENsYXNzKCdpcy1vcGVuLScgKyB0aGlzLnBvc2l0aW9uKTtcblxuICAgIC8vIElmIGBjb250ZW50U2Nyb2xsYCBpcyBzZXQgdG8gZmFsc2UsIGFkZCBjbGFzcyBhbmQgZGlzYWJsZSBzY3JvbGxpbmcgb24gdG91Y2ggZGV2aWNlcy5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRTY3JvbGwgPT09IGZhbHNlKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLW9mZi1jYW52YXMtb3BlbicpLm9uKCd0b3VjaG1vdmUnLCB0aGlzLl9zdG9wU2Nyb2xsaW5nKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCB0aGlzLl9yZWNvcmRTY3JvbGxhYmxlKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ3RvdWNobW92ZScsIHRoaXMuX3N0b3BTY3JvbGxQcm9wYWdhdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50T3ZlcmxheSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4kb3ZlcmxheS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrID09PSB0cnVlICYmIHRoaXMub3B0aW9ucy5jb250ZW50T3ZlcmxheSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4kb3ZlcmxheS5hZGRDbGFzcygnaXMtY2xvc2FibGUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9Gb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5vbmUodHJhbnNpdGlvbmVuZCh0aGlzLiRlbGVtZW50KSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghX3RoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgIHJldHVybjsgLy8gZXhpdCBpZiBwcmVtYXR1cmVseSBjbG9zZWRcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FudmFzRm9jdXMgPSBfdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1hdXRvZm9jdXNdJyk7XG4gICAgICAgIGlmIChjYW52YXNGb2N1cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhbnZhc0ZvY3VzLmVxKDApLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy4kZWxlbWVudC5maW5kKCdhLCBidXR0b24nKS5lcSgwKS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYXBGb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4kY29udGVudC5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgS2V5Ym9hcmQudHJhcEZvY3VzKHRoaXMuJGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX2FkZENvbnRlbnRDbGFzc2VzKCk7XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBvZmYtY2FudmFzIG1lbnUgb3BlbnMuXG4gICAgICogQGV2ZW50IE9mZmNhbnZhcyNvcGVuZWRcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ29wZW5lZC56Zi5vZmZjYW52YXMnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG9mZi1jYW52YXMgbWVudS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gb3B0aW9uYWwgY2IgdG8gZmlyZSBhZnRlciBjbG9zdXJlLlxuICAgKiBAZmlyZXMgT2ZmY2FudmFzI2Nsb3NlZFxuICAgKi9cbiAgY2xvc2UoY2IpIHtcbiAgICBpZiAoIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSB8fCB0aGlzLmlzUmV2ZWFsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuXG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICAgIC8qKlxuICAgICAgICogRmlyZXMgd2hlbiB0aGUgb2ZmLWNhbnZhcyBtZW51IG9wZW5zLlxuICAgICAgICogQGV2ZW50IE9mZmNhbnZhcyNjbG9zZWRcbiAgICAgICAqL1xuICAgICAgICAudHJpZ2dlcignY2xvc2VkLnpmLm9mZmNhbnZhcycpO1xuXG4gICAgdGhpcy4kY29udGVudC5yZW1vdmVDbGFzcygnaXMtb3Blbi1sZWZ0IGlzLW9wZW4tdG9wIGlzLW9wZW4tcmlnaHQgaXMtb3Blbi1ib3R0b20nKTtcblxuICAgIC8vIElmIGBjb250ZW50U2Nyb2xsYCBpcyBzZXQgdG8gZmFsc2UsIHJlbW92ZSBjbGFzcyBhbmQgcmUtZW5hYmxlIHNjcm9sbGluZyBvbiB0b3VjaCBkZXZpY2VzLlxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudFNjcm9sbCA9PT0gZmFsc2UpIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtb2ZmLWNhbnZhcy1vcGVuJykub2ZmKCd0b3VjaG1vdmUnLCB0aGlzLl9zdG9wU2Nyb2xsaW5nKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCd0b3VjaHN0YXJ0JywgdGhpcy5fcmVjb3JkU2Nyb2xsYWJsZSk7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9mZigndG91Y2htb3ZlJywgdGhpcy5fc3RvcFNjcm9sbFByb3BhZ2F0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRvdmVybGF5LnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2sgPT09IHRydWUgJiYgdGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRvdmVybGF5LnJlbW92ZUNsYXNzKCdpcy1jbG9zYWJsZScpO1xuICAgIH1cblxuICAgIHRoaXMuJHRyaWdnZXJzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhcEZvY3VzID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRjb250ZW50LnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICBLZXlib2FyZC5yZWxlYXNlRm9jdXModGhpcy4kZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gTGlzdGVuIHRvIHRyYW5zaXRpb25FbmQgYW5kIGFkZCBjbGFzcyB3aGVuIGRvbmUuXG4gICAgdGhpcy4kZWxlbWVudC5vbmUodHJhbnNpdGlvbmVuZCh0aGlzLiRlbGVtZW50KSwgZnVuY3Rpb24oZSkge1xuICAgICAgX3RoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgX3RoaXMuX3JlbW92ZUNvbnRlbnRDbGFzc2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgb2ZmLWNhbnZhcyBtZW51IG9wZW4gb3IgY2xvc2VkLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gRXZlbnQgb2JqZWN0IHBhc3NlZCBmcm9tIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gdHJpZ2dlciAtIGVsZW1lbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIG9mZi1jYW52YXMgdG8gb3Blbi5cbiAgICovXG4gIHRvZ2dsZShldmVudCwgdHJpZ2dlcikge1xuICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgIHRoaXMuY2xvc2UoZXZlbnQsIHRyaWdnZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMub3BlbihldmVudCwgdHJpZ2dlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMga2V5Ym9hcmQgaW5wdXQgd2hlbiBkZXRlY3RlZC4gV2hlbiB0aGUgZXNjYXBlIGtleSBpcyBwcmVzc2VkLCB0aGUgb2ZmLWNhbnZhcyBtZW51IGNsb3NlcywgYW5kIGZvY3VzIGlzIHJlc3RvcmVkIHRvIHRoZSBlbGVtZW50IHRoYXQgb3BlbmVkIHRoZSBtZW51LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oYW5kbGVLZXlib2FyZChlKSB7XG4gICAgS2V5Ym9hcmQuaGFuZGxlS2V5KGUsICdPZmZDYW52YXMnLCB7XG4gICAgICBjbG9zZTogKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuJGxhc3RUcmlnZ2VyLmZvY3VzKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZWQ6ICgpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBvZmZjYW52YXMgcGx1Z2luLlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnpmLnRyaWdnZXIgLnpmLm9mZmNhbnZhcycpO1xuICAgIHRoaXMuJG92ZXJsYXkub2ZmKCcuemYub2ZmY2FudmFzJyk7XG4gICAgaWYgKHRoaXMub25Mb2FkTGlzdGVuZXIpICQod2luZG93KS5vZmYodGhpcy5vbkxvYWRMaXN0ZW5lcik7XG4gIH1cbn1cblxuT2ZmQ2FudmFzLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogQWxsb3cgdGhlIHVzZXIgdG8gY2xpY2sgb3V0c2lkZSBvZiB0aGUgbWVudSB0byBjbG9zZSBpdC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIG92ZXJsYXkgb24gdG9wIG9mIGBbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdYC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgY29udGVudE92ZXJsYXk6IHRydWUsXG5cbiAgLyoqXG4gICAqIFRhcmdldCBhbiBvZmYtY2FudmFzIGNvbnRlbnQgY29udGFpbmVyIGJ5IElEIHRoYXQgbWF5IGJlIHBsYWNlZCBhbnl3aGVyZS4gSWYgbnVsbCB0aGUgY2xvc2VzdCBjb250ZW50IGNvbnRhaW5lciB3aWxsIGJlIHRha2VuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHs/c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBjb250ZW50SWQ6IG51bGwsXG5cbiAgLyoqXG4gICAqIERlZmluZSB0aGUgb2ZmLWNhbnZhcyBlbGVtZW50IGlzIG5lc3RlZCBpbiBhbiBvZmYtY2FudmFzIGNvbnRlbnQuIFRoaXMgaXMgcmVxdWlyZWQgd2hlbiB1c2luZyB0aGUgY29udGVudElkIG9wdGlvbiBmb3IgYSBuZXN0ZWQgZWxlbWVudC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgbmVzdGVkOiBudWxsLFxuXG4gIC8qKlxuICAgKiBFbmFibGUvZGlzYWJsZSBzY3JvbGxpbmcgb2YgdGhlIG1haW4gY29udGVudCB3aGVuIGFuIG9mZiBjYW52YXMgcGFuZWwgaXMgb3Blbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgY29udGVudFNjcm9sbDogdHJ1ZSxcblxuICAvKipcbiAgICogQW1vdW50IG9mIHRpbWUgaW4gbXMgdGhlIG9wZW4gYW5kIGNsb3NlIHRyYW5zaXRpb24gcmVxdWlyZXMuIElmIG5vbmUgc2VsZWN0ZWQsIHB1bGxzIGZyb20gYm9keSBzdHlsZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICB0cmFuc2l0aW9uVGltZTogbnVsbCxcblxuICAvKipcbiAgICogVHlwZSBvZiB0cmFuc2l0aW9uIGZvciB0aGUgb2ZmY2FudmFzIG1lbnUuIE9wdGlvbnMgYXJlICdwdXNoJywgJ2RldGFjaGVkJyBvciAnc2xpZGUnLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IHB1c2hcbiAgICovXG4gIHRyYW5zaXRpb246ICdwdXNoJyxcblxuICAvKipcbiAgICogRm9yY2UgdGhlIHBhZ2UgdG8gc2Nyb2xsIHRvIHRvcCBvciBib3R0b20gb24gb3Blbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgZm9yY2VUbzogbnVsbCxcblxuICAvKipcbiAgICogQWxsb3cgdGhlIG9mZmNhbnZhcyB0byByZW1haW4gb3BlbiBmb3IgY2VydGFpbiBicmVha3BvaW50cy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGlzUmV2ZWFsZWQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBCcmVha3BvaW50IGF0IHdoaWNoIHRvIHJldmVhbC4gSlMgd2lsbCB1c2UgYSBSZWdFeHAgdG8gdGFyZ2V0IHN0YW5kYXJkIGNsYXNzZXMsIGlmIGNoYW5naW5nIGNsYXNzbmFtZXMsIHBhc3MgeW91ciBjbGFzcyB3aXRoIHRoZSBgcmV2ZWFsQ2xhc3NgIG9wdGlvbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgcmV2ZWFsT246IG51bGwsXG5cbiAgLyoqXG4gICAqIEZvcmNlIGZvY3VzIHRvIHRoZSBvZmZjYW52YXMgb24gb3Blbi4gSWYgdHJ1ZSwgd2lsbCBmb2N1cyB0aGUgb3BlbmluZyB0cmlnZ2VyIG9uIGNsb3NlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBhdXRvRm9jdXM6IHRydWUsXG5cbiAgLyoqXG4gICAqIENsYXNzIHVzZWQgdG8gZm9yY2UgYW4gb2ZmY2FudmFzIHRvIHJlbWFpbiBvcGVuLiBGb3VuZGF0aW9uIGRlZmF1bHRzIGZvciB0aGlzIGFyZSBgcmV2ZWFsLWZvci1sYXJnZWAgJiBgcmV2ZWFsLWZvci1tZWRpdW1gLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IHJldmVhbC1mb3ItXG4gICAqIEB0b2RvIGltcHJvdmUgdGhlIHJlZ2V4IHRlc3RpbmcgZm9yIHRoaXMuXG4gICAqL1xuICByZXZlYWxDbGFzczogJ3JldmVhbC1mb3ItJyxcblxuICAvKipcbiAgICogVHJpZ2dlcnMgb3B0aW9uYWwgZm9jdXMgdHJhcHBpbmcgd2hlbiBvcGVuaW5nIGFuIG9mZmNhbnZhcy4gU2V0cyB0YWJpbmRleCBvZiBbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdIHRvIC0xIGZvciBhY2Nlc3NpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdHJhcEZvY3VzOiBmYWxzZVxufVxuXG5leHBvcnQge09mZkNhbnZhc307XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNb3Rpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24nO1xuXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4gIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGAke3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykge1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0oKSk7XG5cbmNvbnN0IHRyaWdnZXJzID0gKGVsLCB0eXBlKSA9PiB7XG4gIGVsLmRhdGEodHlwZSkuc3BsaXQoJyAnKS5mb3JFYWNoKGlkID0+IHtcbiAgICAkKGAjJHtpZH1gKVsgdHlwZSA9PT0gJ2Nsb3NlJyA/ICd0cmlnZ2VyJyA6ICd0cmlnZ2VySGFuZGxlciddKGAke3R5cGV9LnpmLnRyaWdnZXJgLCBbZWxdKTtcbiAgfSk7XG59O1xuXG52YXIgVHJpZ2dlcnMgPSB7XG4gIExpc3RlbmVyczoge1xuICAgIEJhc2ljOiB7fSxcbiAgICBHbG9iYWw6IHt9XG4gIH0sXG4gIEluaXRpYWxpemVyczoge31cbn1cblxuVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljICA9IHtcbiAgb3Blbkxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICB0cmlnZ2VycygkKHRoaXMpLCAnb3BlbicpO1xuICB9LFxuICBjbG9zZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICBjbG9zZWFibGVMaXN0ZW5lcjogZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGFuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnY2xvc2FibGUnKTtcblxuICAgIGlmKGFuaW1hdGlvbiAhPT0gJycpe1xuICAgICAgTW90aW9uLmFuaW1hdGVPdXQoJCh0aGlzKSwgYW5pbWF0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgJCh0aGlzKS5mYWRlT3V0KCkudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVGb2N1c0xpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZS1mb2N1cycpO1xuICAgICQoYCMke2lkfWApLnRyaWdnZXJIYW5kbGVyKCd0b2dnbGUuemYudHJpZ2dlcicsIFskKHRoaXMpXSk7XG4gIH1cbn07XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtb3Blbl0gd2lsbCByZXZlYWwgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1vcGVuXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NlXSB3aWxsIGNsb3NlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuLy8gSWYgdXNlZCB3aXRob3V0IGEgdmFsdWUgb24gW2RhdGEtY2xvc2VdLCB0aGUgZXZlbnQgd2lsbCBidWJibGUsIGFsbG93aW5nIGl0IHRvIGNsb3NlIGEgcGFyZW50IGNvbXBvbmVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZV0gd2lsbCB0b2dnbGUgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2FibGVdIHdpbGwgcmVzcG9uZCB0byBjbG9zZS56Zi50cmlnZ2VyIGV2ZW50cy5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2Nsb3NlLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xvc2UuemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZWFibGVdLCBbZGF0YS1jbG9zYWJsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZS1mb2N1c10gd2lsbCByZXNwb25kIHRvIGNvbWluZyBpbiBhbmQgb3V0IG9mIGZvY3VzXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xuICAkZWxlbS5vbignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlLWZvY3VzXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbn1cblxuXG5cbi8vIE1vcmUgR2xvYmFsL2NvbXBsZXggbGlzdGVuZXJzIGFuZCB0cmlnZ2Vyc1xuVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbCAgPSB7XG4gIHJlc2l6ZUxpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSByZXNpemUgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInJlc2l6ZVwiKTtcbiAgfSxcbiAgc2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHNjcm9sbCBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwic2Nyb2xsXCIpO1xuICB9LFxuICBjbG9zZU1lTGlzdGVuZXI6IGZ1bmN0aW9uKGUsIHBsdWdpbklkKXtcbiAgICBsZXQgcGx1Z2luID0gZS5uYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgcGx1Z2lucyA9ICQoYFtkYXRhLSR7cGx1Z2lufV1gKS5ub3QoYFtkYXRhLXlldGktYm94PVwiJHtwbHVnaW5JZH1cIl1gKTtcblxuICAgIHBsdWdpbnMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgbGV0IF90aGlzID0gJCh0aGlzKTtcbiAgICAgIF90aGlzLnRyaWdnZXJIYW5kbGVyKCdjbG9zZS56Zi50cmlnZ2VyJywgW190aGlzXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gR2xvYmFsLCBwYXJzZXMgd2hvbGUgZG9jdW1lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyID0gZnVuY3Rpb24ocGx1Z2luTmFtZSkge1xuICB2YXIgeWV0aUJveGVzID0gJCgnW2RhdGEteWV0aS1ib3hdJyksXG4gICAgICBwbHVnTmFtZXMgPSBbJ2Ryb3Bkb3duJywgJ3Rvb2x0aXAnLCAncmV2ZWFsJ107XG5cbiAgaWYocGx1Z2luTmFtZSl7XG4gICAgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcy5wdXNoKHBsdWdpbk5hbWUpO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGx1Z2luTmFtZVswXSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzID0gcGx1Z05hbWVzLmNvbmNhdChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsdWdpbiBuYW1lcyBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gIH1cbiAgaWYoeWV0aUJveGVzLmxlbmd0aCl7XG4gICAgbGV0IGxpc3RlbmVycyA9IHBsdWdOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiBgY2xvc2VtZS56Zi4ke25hbWV9YDtcbiAgICB9KS5qb2luKCcgJyk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGxpc3RlbmVycykub24obGlzdGVuZXJzLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLmNsb3NlTWVMaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgdHJpZ2dlciwgbGlzdGVuZXIpIHtcbiAgbGV0IHRpbWVyLCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKTtcbiAgJCh3aW5kb3cpLm9mZih0cmlnZ2VyKS5vbih0cmlnZ2VyLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRpbWVyKSB7IGNsZWFyVGltZW91dCh0aW1lcik7IH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIGRlYm91bmNlIHx8IDEwKTsvL2RlZmF1bHQgdGltZSB0byBlbWl0IHNjcm9sbCBldmVudFxuICB9KTtcbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtcmVzaXplXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAncmVzaXplLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnJlc2l6ZUxpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXNjcm9sbF0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Njcm9sbC56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5zY3JvbGxMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lciA9IGZ1bmN0aW9uKCRlbGVtKSB7XG4gIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsgcmV0dXJuIGZhbHNlOyB9XG4gIGxldCAkbm9kZXMgPSAkZWxlbS5maW5kKCdbZGF0YS1yZXNpemVdLCBbZGF0YS1zY3JvbGxdLCBbZGF0YS1tdXRhdGVdJyk7XG5cbiAgLy9lbGVtZW50IGNhbGxiYWNrXG4gIHZhciBsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uUmVjb3Jkc0xpc3QpIHtcbiAgICB2YXIgJHRhcmdldCA9ICQobXV0YXRpb25SZWNvcmRzTGlzdFswXS50YXJnZXQpO1xuXG4gICAgLy90cmlnZ2VyIHRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgZWxlbWVudCBkZXBlbmRpbmcgb24gdHlwZVxuICAgIHN3aXRjaCAobXV0YXRpb25SZWNvcmRzTGlzdFswXS50eXBlKSB7XG4gICAgICBjYXNlIFwiYXR0cmlidXRlc1wiOlxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwic2Nyb2xsXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQsIHdpbmRvdy5wYWdlWU9mZnNldF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJyZXNpemVcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldF0pO1xuICAgICAgICAgfVxuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiY2hpbGRMaXN0XCI6XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICB9O1xuXG4gIGlmICgkbm9kZXMubGVuZ3RoKSB7XG4gICAgLy9mb3IgZWFjaCBlbGVtZW50IHRoYXQgbmVlZHMgdG8gbGlzdGVuIGZvciByZXNpemluZywgc2Nyb2xsaW5nLCBvciBtdXRhdGlvbiBhZGQgYSBzaW5nbGUgb2JzZXJ2ZXJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAkbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbik7XG4gICAgICBlbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZSgkbm9kZXNbaV0sIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbXCJkYXRhLWV2ZW50c1wiLCBcInN0eWxlXCJdIH0pO1xuICAgIH1cbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIoJGRvY3VtZW50KTtcblxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyKCk7XG59XG5cblxuVHJpZ2dlcnMuaW5pdCA9IGZ1bmN0aW9uICgkLCBGb3VuZGF0aW9uKSB7XG4gIG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJC50cmlnZ2Vyc0luaXRpYWxpemVkICE9PSB0cnVlKSB7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzKCk7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICAkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoRm91bmRhdGlvbikge1xuICAgIEZvdW5kYXRpb24uVHJpZ2dlcnMgPSBUcmlnZ2VycztcbiAgICAvLyBMZWdhY3kgaW5jbHVkZWQgdG8gYmUgYmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIG5vdy5cbiAgICBGb3VuZGF0aW9uLklIZWFyWW91ID0gVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVyc1xuICB9XG59XG5cbmV4cG9ydCB7VHJpZ2dlcnN9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
