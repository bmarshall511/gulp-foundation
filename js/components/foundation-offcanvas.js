(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core.utils"), require("./foundation.core"), require("jquery"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.core.plugin"), require("./foundation.util.motion"));else if (typeof define === 'function' && define.amd) define(["./foundation.core.utils", "./foundation.core", "jquery", "./foundation.util.keyboard", "./foundation.util.mediaQuery", "./foundation.core.plugin", "./foundation.util.motion"], factory);else if (typeof exports === 'object') exports["foundation.offcanvas"] = factory(require("./foundation.core.utils"), require("./foundation.core"), require("jquery"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.core.plugin"), require("./foundation.util.motion"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.offcanvas"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.mediaQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core_utils__, __WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__, __WEBPACK_EXTERNAL_MODULE__foundation_core_plugin__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__) {
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


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.core.plugin */
        "./foundation.core.plugin");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */


        var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

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
             * @fires OffCanvas#opened
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
               * @event OffCanvas#opened
               */


              this.$element.trigger('opened.zf.offcanvas');
            }
            /**
             * Closes the off-canvas menu.
             * @function
             * @param {Function} cb - optional cb to fire after closure.
             * @fires OffCanvas#closed
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
               * @event OffCanvas#closed
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
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__["Plugin"]);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ub2ZmY2FudmFzLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiT2ZmQ2FudmFzIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJiYXNlIiwicmV2ZWFsIiwiJCIsIlRyaWdnZXJzIiwiTWVkaWFRdWVyeSIsIktleWJvYXJkIiwiaWQiLCJjb25zb2xlIiwib3ZlcmxheSIsImRvY3VtZW50Iiwib3ZlcmxheVBvc2l0aW9uIiwicmV2ZWFsT25SZWdFeHAiLCJyZXZlYWxPbkNsYXNzIiwiJHRhcmdldCIsIl90aGlzIiwiaGFzUmV2ZWFsIiwiaXNSZXZlYWxlZCIsImV2ZW50IiwiZWxlbSIsInVwIiwiZG93biIsInRyaWdnZXIiLCJ3aW5kb3ciLCJjYW52YXNGb2N1cyIsImNiIiwiZSIsImNsb3NlIiwiaGFuZGxlZCIsImNsb3NlT25DbGljayIsImNvbnRlbnRPdmVybGF5IiwiY29udGVudElkIiwibmVzdGVkIiwiY29udGVudFNjcm9sbCIsInRyYW5zaXRpb25UaW1lIiwidHJhbnNpdGlvbiIsImZvcmNlVG8iLCJyZXZlYWxPbiIsImF1dG9Gb2N1cyIsInJldmVhbENsYXNzIiwidHJhcEZvY3VzIiwiTXV0YXRpb25PYnNlcnZlciIsInByZWZpeGVzIiwiaSIsInRyaWdnZXJzIiwiZWwiLCJ0eXBlIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwidG9nZ2xlTGlzdGVuZXIiLCJjbG9zZWFibGVMaXN0ZW5lciIsImFuaW1hdGlvbiIsIk1vdGlvbiIsInRvZ2dsZUZvY3VzTGlzdGVuZXIiLCIkZWxlbSIsInJlc2l6ZUxpc3RlbmVyIiwiJG5vZGVzIiwic2Nyb2xsTGlzdGVuZXIiLCJjbG9zZU1lTGlzdGVuZXIiLCJwbHVnaW4iLCJwbHVnaW5zIiwieWV0aUJveGVzIiwicGx1Z05hbWVzIiwicGx1Z2luTmFtZSIsImxpc3RlbmVycyIsImFyZ3MiLCJBcnJheSIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dCIsImxpc3RlbmVyIiwiZGVib3VuY2UiLCJkZWJvdW5jZUdsb2JhbExpc3RlbmVyIiwibGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiIsIm11dGF0aW9uUmVjb3Jkc0xpc3QiLCJlbGVtZW50T2JzZXJ2ZXIiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJhdHRyaWJ1dGVGaWx0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QTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVBQUEsR0FB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RWI7O0FBQ0FBLFlBQUFBLFVBQVUsQ0FBVkEsUUFBQUEsR0FBc0JuRixRQUFRLENBQVJBLFlBQUFBLENBQXRCbUYsa0JBQUFBO0FBQ0Q7QUFiSG5GLFNBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblBBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FOVUE7Q0FWQSIsImZpbGUiOiJjb21wb25lbnRzL2ZvdW5kYXRpb24tb2ZmY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmUudXRpbHNcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlLnBsdWdpblwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZS51dGlsc1wiLCBcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwianF1ZXJ5XCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCIsIFwiLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24ub2ZmY2FudmFzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmUudXRpbHNcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlLnBsdWdpblwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24ub2ZmY2FudmFzXCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubW90aW9uXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX3V0aWxzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX21lZGlhUXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX3BsdWdpbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbW90aW9uX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IE9mZkNhbnZhcyB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24ub2ZmY2FudmFzJztcbkZvdW5kYXRpb24ucGx1Z2luKE9mZkNhbnZhcywgJ09mZkNhbnZhcycpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBPZmZDYW52YXMgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IG9uTG9hZCwgdHJhbnNpdGlvbmVuZCwgUmVnRXhwRXNjYXBlIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZCc7XG5pbXBvcnQgeyBNZWRpYVF1ZXJ5IH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeSc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuXG5pbXBvcnQgeyBUcmlnZ2VycyB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzJztcblxuLyoqXG4gKiBPZmZDYW52YXMgbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLm9mZmNhbnZhc1xuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzXG4gKi9cblxuY2xhc3MgT2ZmQ2FudmFzIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYW4gb2ZmLWNhbnZhcyB3cmFwcGVyLlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgT2ZmQ2FudmFzXG4gICAqIEBmaXJlcyBPZmZDYW52YXMjaW5pdFxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gaW5pdGlhbGl6ZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdPZmZDYW52YXMnOyAvLyBpZTkgYmFjayBjb21wYXRcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgT2ZmQ2FudmFzLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jb250ZW50Q2xhc3NlcyA9IHsgYmFzZTogW10sIHJldmVhbDogW10gfTtcbiAgICB0aGlzLiRsYXN0VHJpZ2dlciA9ICQoKTtcbiAgICB0aGlzLiR0cmlnZ2VycyA9ICQoKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2xlZnQnO1xuICAgIHRoaXMuJGNvbnRlbnQgPSAkKCk7XG4gICAgdGhpcy5uZXN0ZWQgPSAhISh0aGlzLm9wdGlvbnMubmVzdGVkKTtcblxuICAgIC8vIERlZmluZXMgdGhlIENTUyB0cmFuc2l0aW9uL3Bvc2l0aW9uIGNsYXNzZXMgb2YgdGhlIG9mZi1jYW52YXMgY29udGVudCBjb250YWluZXIuXG4gICAgJChbJ3B1c2gnLCAnb3ZlcmxhcCddKS5lYWNoKChpbmRleCwgdmFsKSA9PiB7XG4gICAgICB0aGlzLmNvbnRlbnRDbGFzc2VzLmJhc2UucHVzaCgnaGFzLXRyYW5zaXRpb24tJyt2YWwpO1xuICAgIH0pO1xuICAgICQoWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXSkuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgdGhpcy5jb250ZW50Q2xhc3Nlcy5iYXNlLnB1c2goJ2hhcy1wb3NpdGlvbi0nK3ZhbCk7XG4gICAgICB0aGlzLmNvbnRlbnRDbGFzc2VzLnJldmVhbC5wdXNoKCdoYXMtcmV2ZWFsLScrdmFsKTtcbiAgICB9KTtcblxuICAgIC8vIFRyaWdnZXJzIGluaXQgaXMgaWRlbXBvdGVudCwganVzdCBuZWVkIHRvIG1ha2Ugc3VyZSBpdCBpcyBpbml0aWFsaXplZFxuICAgIFRyaWdnZXJzLmluaXQoJCk7XG4gICAgTWVkaWFRdWVyeS5faW5pdCgpO1xuXG4gICAgdGhpcy5faW5pdCgpO1xuICAgIHRoaXMuX2V2ZW50cygpO1xuXG4gICAgS2V5Ym9hcmQucmVnaXN0ZXIoJ09mZkNhbnZhcycsIHtcbiAgICAgICdFU0NBUEUnOiAnY2xvc2UnXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgb2ZmLWNhbnZhcyB3cmFwcGVyIGJ5IGFkZGluZyB0aGUgZXhpdCBvdmVybGF5IChpZiBuZWVkZWQpLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIHZhciBpZCA9IHRoaXMuJGVsZW1lbnQuYXR0cignaWQnKTtcblxuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgLy8gRmluZCBvZmYtY2FudmFzIGNvbnRlbnQsIGVpdGhlciBieSBJRCAoaWYgc3BlY2lmaWVkKSwgYnkgc2libGluZ3Mgb3IgYnkgY2xvc2VzdCBzZWxlY3RvciAoZmFsbGJhY2spXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50SWQpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQgPSAkKCcjJyt0aGlzLm9wdGlvbnMuY29udGVudElkKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnQuc2libGluZ3MoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQgPSB0aGlzLiRlbGVtZW50LnNpYmxpbmdzKCdbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdJykuZmlyc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kY29udGVudCA9IHRoaXMuJGVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XScpLmZpcnN0KCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY29udGVudElkKSB7XG4gICAgICAvLyBBc3N1bWUgdGhhdCB0aGUgb2ZmLWNhbnZhcyBlbGVtZW50IGlzIG5lc3RlZCBpZiBpdCBpc24ndCBhIHNpYmxpbmcgb2YgdGhlIGNvbnRlbnRcbiAgICAgIHRoaXMubmVzdGVkID0gdGhpcy4kZWxlbWVudC5zaWJsaW5ncygnW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XScpLmxlbmd0aCA9PT0gMDtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRJZCAmJiB0aGlzLm9wdGlvbnMubmVzdGVkID09PSBudWxsKSB7XG4gICAgICAvLyBXYXJuaW5nIGlmIHVzaW5nIGNvbnRlbnQgSUQgd2l0aG91dCBzZXR0aW5nIHRoZSBuZXN0ZWQgb3B0aW9uXG4gICAgICAvLyBPbmNlIHRoZSBlbGVtZW50IGlzIG5lc3RlZCBpdCBpcyByZXF1aXJlZCB0byB3b3JrIHByb3Blcmx5IGluIHRoaXMgY2FzZVxuICAgICAgY29uc29sZS53YXJuKCdSZW1lbWJlciB0byB1c2UgdGhlIG5lc3RlZCBvcHRpb24gaWYgdXNpbmcgdGhlIGNvbnRlbnQgSUQgb3B0aW9uIScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5lc3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gRm9yY2UgdHJhbnNpdGlvbiBvdmVybGFwIGlmIG5lc3RlZFxuICAgICAgdGhpcy5vcHRpb25zLnRyYW5zaXRpb24gPSAnb3ZlcmxhcCc7XG4gICAgICAvLyBSZW1vdmUgYXBwcm9wcmlhdGUgY2xhc3NlcyBpZiBhbHJlYWR5IGFzc2lnbmVkIGluIG1hcmt1cFxuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtdHJhbnNpdGlvbi1wdXNoJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhgaXMtdHJhbnNpdGlvbi0ke3RoaXMub3B0aW9ucy50cmFuc2l0aW9ufSBpcy1jbG9zZWRgKTtcblxuICAgIC8vIEZpbmQgdHJpZ2dlcnMgdGhhdCBhZmZlY3QgdGhpcyBlbGVtZW50IGFuZCBhZGQgYXJpYS1leHBhbmRlZCB0byB0aGVtXG4gICAgdGhpcy4kdHJpZ2dlcnMgPSAkKGRvY3VtZW50KVxuICAgICAgLmZpbmQoJ1tkYXRhLW9wZW49XCInK2lkKydcIl0sIFtkYXRhLWNsb3NlPVwiJytpZCsnXCJdLCBbZGF0YS10b2dnbGU9XCInK2lkKydcIl0nKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgICAgLmF0dHIoJ2FyaWEtY29udHJvbHMnLCBpZCk7XG5cbiAgICAvLyBHZXQgcG9zaXRpb24gYnkgY2hlY2tpbmcgZm9yIHJlbGF0ZWQgQ1NTIGNsYXNzXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuJGVsZW1lbnQuaXMoJy5wb3NpdGlvbi1sZWZ0LCAucG9zaXRpb24tdG9wLCAucG9zaXRpb24tcmlnaHQsIC5wb3NpdGlvbi1ib3R0b20nKSA/IHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnKS5tYXRjaCgvcG9zaXRpb25cXC0obGVmdHx0b3B8cmlnaHR8Ym90dG9tKS8pWzFdIDogdGhpcy5wb3NpdGlvbjtcblxuICAgIC8vIEFkZCBhbiBvdmVybGF5IG92ZXIgdGhlIGNvbnRlbnQgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50T3ZlcmxheSA9PT0gdHJ1ZSkge1xuICAgICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHZhciBvdmVybGF5UG9zaXRpb24gPSAkKHRoaXMuJGVsZW1lbnQpLmNzcyhcInBvc2l0aW9uXCIpID09PSAnZml4ZWQnID8gJ2lzLW92ZXJsYXktZml4ZWQnIDogJ2lzLW92ZXJsYXktYWJzb2x1dGUnO1xuICAgICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2pzLW9mZi1jYW52YXMtb3ZlcmxheSAnICsgb3ZlcmxheVBvc2l0aW9uKTtcbiAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKG92ZXJsYXkpO1xuICAgICAgaWYob3ZlcmxheVBvc2l0aW9uID09PSAnaXMtb3ZlcmxheS1maXhlZCcpIHtcbiAgICAgICAgJCh0aGlzLiRvdmVybGF5KS5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQuYXBwZW5kKHRoaXMuJG92ZXJsYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcmV2ZWFsT24gb3B0aW9uIGZyb20gdGhlIGNsYXNzLlxuICAgIHZhciByZXZlYWxPblJlZ0V4cCA9IG5ldyBSZWdFeHAoUmVnRXhwRXNjYXBlKHRoaXMub3B0aW9ucy5yZXZlYWxDbGFzcykgKyAnKFteXFxcXHNdKyknLCAnZycpO1xuICAgIHZhciByZXZlYWxPbkNsYXNzID0gcmV2ZWFsT25SZWdFeHAuZXhlYyh0aGlzLiRlbGVtZW50WzBdLmNsYXNzTmFtZSk7XG4gICAgaWYgKHJldmVhbE9uQ2xhc3MpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5pc1JldmVhbGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMub3B0aW9ucy5yZXZlYWxPbiA9IHRoaXMub3B0aW9ucy5yZXZlYWxPbiB8fCByZXZlYWxPbkNsYXNzWzFdO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSB0aGUgYHJldmVhbC1vbi0qYCBjbGFzcyBpcyBzZXQuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc1JldmVhbGVkID09PSB0cnVlICYmIHRoaXMub3B0aW9ucy5yZXZlYWxPbikge1xuICAgICAgdGhpcy4kZWxlbWVudC5maXJzdCgpLmFkZENsYXNzKGAke3RoaXMub3B0aW9ucy5yZXZlYWxDbGFzc30ke3RoaXMub3B0aW9ucy5yZXZlYWxPbn1gKTtcbiAgICAgIHRoaXMuX3NldE1RQ2hlY2tlcigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhbnNpdGlvblRpbWUpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5vcHRpb25zLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG5cbiAgICAvLyBJbml0YWxseSByZW1vdmUgYWxsIHRyYW5zaXRpb24vcG9zaXRpb24gQ1NTIGNsYXNzZXMgZnJvbSBvZmYtY2FudmFzIGNvbnRlbnQgY29udGFpbmVyLlxuICAgIHRoaXMuX3JlbW92ZUNvbnRlbnRDbGFzc2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBoYW5kbGVycyB0byB0aGUgb2ZmLWNhbnZhcyB3cmFwcGVyIGFuZCB0aGUgZXhpdCBvdmVybGF5LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJy56Zi50cmlnZ2VyIC56Zi5vZmZjYW52YXMnKS5vbih7XG4gICAgICAnb3Blbi56Zi50cmlnZ2VyJzogdGhpcy5vcGVuLmJpbmQodGhpcyksXG4gICAgICAnY2xvc2UuemYudHJpZ2dlcic6IHRoaXMuY2xvc2UuYmluZCh0aGlzKSxcbiAgICAgICd0b2dnbGUuemYudHJpZ2dlcic6IHRoaXMudG9nZ2xlLmJpbmQodGhpcyksXG4gICAgICAna2V5ZG93bi56Zi5vZmZjYW52YXMnOiB0aGlzLl9oYW5kbGVLZXlib2FyZC5iaW5kKHRoaXMpXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgdmFyICR0YXJnZXQgPSB0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPyB0aGlzLiRvdmVybGF5IDogdGhpcy4kY29udGVudDtcbiAgICAgICR0YXJnZXQub24oeydjbGljay56Zi5vZmZjYW52YXMnOiB0aGlzLmNsb3NlLmJpbmQodGhpcyl9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBldmVudCBsaXN0ZW5lciBmb3IgZWxlbWVudHMgdGhhdCB3aWxsIHJldmVhbCBhdCBjZXJ0YWluIGJyZWFrcG9pbnRzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldE1RQ2hlY2tlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5vbkxvYWRMaXN0ZW5lciA9IG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChNZWRpYVF1ZXJ5LmF0TGVhc3QoX3RoaXMub3B0aW9ucy5yZXZlYWxPbikpIHtcbiAgICAgICAgX3RoaXMucmV2ZWFsKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdjaGFuZ2VkLnpmLm1lZGlhcXVlcnknLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoTWVkaWFRdWVyeS5hdExlYXN0KF90aGlzLm9wdGlvbnMucmV2ZWFsT24pKSB7XG4gICAgICAgIF90aGlzLnJldmVhbCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnJldmVhbChmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgQ1NTIHRyYW5zaXRpb24vcG9zaXRpb24gY2xhc3NlcyBvZiB0aGUgb2ZmLWNhbnZhcyBjb250ZW50IGNvbnRhaW5lci5cbiAgICogUmVtb3ZpbmcgdGhlIGNsYXNzZXMgaXMgaW1wb3J0YW50IHdoZW4gYW5vdGhlciBvZmYtY2FudmFzIGdldHMgb3BlbmVkIHRoYXQgdXNlcyB0aGUgc2FtZSBjb250ZW50IGNvbnRhaW5lci5cbiAgICogQHBhcmFtIHtCb29sZWFufSBoYXNSZXZlYWwgLSB0cnVlIGlmIHJlbGF0ZWQgb2ZmLWNhbnZhcyBlbGVtZW50IGlzIHJldmVhbGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlbW92ZUNvbnRlbnRDbGFzc2VzKGhhc1JldmVhbCkge1xuICAgIGlmICh0eXBlb2YgaGFzUmV2ZWFsICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQucmVtb3ZlQ2xhc3ModGhpcy5jb250ZW50Q2xhc3Nlcy5iYXNlLmpvaW4oJyAnKSk7XG4gICAgfSBlbHNlIGlmIChoYXNSZXZlYWwgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLiRjb250ZW50LnJlbW92ZUNsYXNzKGBoYXMtcmV2ZWFsLSR7dGhpcy5wb3NpdGlvbn1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgQ1NTIHRyYW5zaXRpb24vcG9zaXRpb24gY2xhc3NlcyBvZiB0aGUgb2ZmLWNhbnZhcyBjb250ZW50IGNvbnRhaW5lciwgYmFzZWQgb24gdGhlIG9wZW5pbmcgb2ZmLWNhbnZhcyBlbGVtZW50LlxuICAgKiBCZWZvcmVoYW5kIGFueSB0cmFuc2l0aW9uL3Bvc2l0aW9uIGNsYXNzIGdldHMgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBoYXNSZXZlYWwgLSB0cnVlIGlmIHJlbGF0ZWQgb2ZmLWNhbnZhcyBlbGVtZW50IGlzIHJldmVhbGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FkZENvbnRlbnRDbGFzc2VzKGhhc1JldmVhbCkge1xuICAgIHRoaXMuX3JlbW92ZUNvbnRlbnRDbGFzc2VzKGhhc1JldmVhbCk7XG4gICAgaWYgKHR5cGVvZiBoYXNSZXZlYWwgIT09ICdib29sZWFuJykge1xuICAgICAgdGhpcy4kY29udGVudC5hZGRDbGFzcyhgaGFzLXRyYW5zaXRpb24tJHt0aGlzLm9wdGlvbnMudHJhbnNpdGlvbn0gaGFzLXBvc2l0aW9uLSR7dGhpcy5wb3NpdGlvbn1gKTtcbiAgICB9IGVsc2UgaWYgKGhhc1JldmVhbCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4kY29udGVudC5hZGRDbGFzcyhgaGFzLXJldmVhbC0ke3RoaXMucG9zaXRpb259YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIHJldmVhbGluZy9oaWRpbmcgdGhlIG9mZi1jYW52YXMgYXQgYnJlYWtwb2ludHMsIG5vdCB0aGUgc2FtZSBhcyBvcGVuLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzUmV2ZWFsZWQgLSB0cnVlIGlmIGVsZW1lbnQgc2hvdWxkIGJlIHJldmVhbGVkLlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIHJldmVhbChpc1JldmVhbGVkKSB7XG4gICAgaWYgKGlzUmV2ZWFsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHRoaXMuaXNSZXZlYWxlZCA9IHRydWU7XG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9mZignb3Blbi56Zi50cmlnZ2VyIHRvZ2dsZS56Zi50cmlnZ2VyJyk7XG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdpcy1jbG9zZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1JldmVhbGVkID0gZmFsc2U7XG4gICAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdvcGVuLnpmLnRyaWdnZXIgdG9nZ2xlLnpmLnRyaWdnZXInKS5vbih7XG4gICAgICAgICdvcGVuLnpmLnRyaWdnZXInOiB0aGlzLm9wZW4uYmluZCh0aGlzKSxcbiAgICAgICAgJ3RvZ2dsZS56Zi50cmlnZ2VyJzogdGhpcy50b2dnbGUuYmluZCh0aGlzKVxuICAgICAgfSk7XG4gICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdpcy1jbG9zZWQnKTtcbiAgICB9XG4gICAgdGhpcy5fYWRkQ29udGVudENsYXNzZXMoaXNSZXZlYWxlZCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgc2Nyb2xsaW5nIG9mIHRoZSBib2R5IHdoZW4gb2ZmY2FudmFzIGlzIG9wZW4gb24gbW9iaWxlIFNhZmFyaSBhbmQgb3RoZXIgdHJvdWJsZXNvbWUgYnJvd3NlcnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc3RvcFNjcm9sbGluZyhldmVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRha2VuIGFuZCBhZGFwdGVkIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjg4OTQ0Ny9wcmV2ZW50LWZ1bGwtcGFnZS1zY3JvbGxpbmctaW9zXG4gIC8vIE9ubHkgcmVhbGx5IHdvcmtzIGZvciB5LCBub3Qgc3VyZSBob3cgdG8gZXh0ZW5kIHRvIHggb3IgaWYgd2UgbmVlZCB0by5cbiAgX3JlY29yZFNjcm9sbGFibGUoZXZlbnQpIHtcbiAgICBsZXQgZWxlbSA9IHRoaXM7IC8vIGNhbGxlZCBmcm9tIGV2ZW50IGhhbmRsZXIgY29udGV4dCB3aXRoIHRoaXMgYXMgZWxlbVxuXG4gICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHNjcm9sbGFibGUgKGNvbnRlbnQgb3ZlcmZsb3dzKSwgdGhlbi4uLlxuICAgIGlmIChlbGVtLnNjcm9sbEhlaWdodCAhPT0gZWxlbS5jbGllbnRIZWlnaHQpIHtcbiAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSB0b3AsIHNjcm9sbCBkb3duIG9uZSBwaXhlbCB0byBhbGxvdyBzY3JvbGxpbmcgdXBcbiAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICBlbGVtLnNjcm9sbFRvcCA9IDE7XG4gICAgICB9XG4gICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgYm90dG9tLCBzY3JvbGwgdXAgb25lIHBpeGVsIHRvIGFsbG93IHNjcm9sbGluZyBkb3duXG4gICAgICBpZiAoZWxlbS5zY3JvbGxUb3AgPT09IGVsZW0uc2Nyb2xsSGVpZ2h0IC0gZWxlbS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgZWxlbS5zY3JvbGxUb3AgPSBlbGVtLnNjcm9sbEhlaWdodCAtIGVsZW0uY2xpZW50SGVpZ2h0IC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbS5hbGxvd1VwID0gZWxlbS5zY3JvbGxUb3AgPiAwO1xuICAgIGVsZW0uYWxsb3dEb3duID0gZWxlbS5zY3JvbGxUb3AgPCAoZWxlbS5zY3JvbGxIZWlnaHQgLSBlbGVtLmNsaWVudEhlaWdodCk7XG4gICAgZWxlbS5sYXN0WSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQucGFnZVk7XG4gIH1cblxuICBfc3RvcFNjcm9sbFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgbGV0IGVsZW0gPSB0aGlzOyAvLyBjYWxsZWQgZnJvbSBldmVudCBoYW5kbGVyIGNvbnRleHQgd2l0aCB0aGlzIGFzIGVsZW1cbiAgICBsZXQgdXAgPSBldmVudC5wYWdlWSA8IGVsZW0ubGFzdFk7XG4gICAgbGV0IGRvd24gPSAhdXA7XG4gICAgZWxlbS5sYXN0WSA9IGV2ZW50LnBhZ2VZO1xuXG4gICAgaWYoKHVwICYmIGVsZW0uYWxsb3dVcCkgfHwgKGRvd24gJiYgZWxlbS5hbGxvd0Rvd24pKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIG9mZi1jYW52YXMgbWVudS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtqUXVlcnl9IHRyaWdnZXIgLSBlbGVtZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSBvZmYtY2FudmFzIHRvIG9wZW4uXG4gICAqIEBmaXJlcyBPZmZDYW52YXMjb3BlbmVkXG4gICAqIEB0b2RvIGFsc28gdHJpZ2dlciAnb3BlbicgZXZlbnQ/XG4gICAqL1xuICBvcGVuKGV2ZW50LCB0cmlnZ2VyKSB7XG4gICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSB8fCB0aGlzLmlzUmV2ZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICB0aGlzLiRsYXN0VHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5mb3JjZVRvID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmZvcmNlVG8gPT09ICdib3R0b20nKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCxkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmFuc2l0aW9uVGltZSAmJiB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbiAhPT0gJ292ZXJsYXAnKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LnNpYmxpbmdzKCdbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdJykuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5vcHRpb25zLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWxlbWVudC5zaWJsaW5ncygnW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XScpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsICcnKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdpcy1vcGVuJykucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuXG4gICAgdGhpcy4kdHJpZ2dlcnMuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgdGhpcy4kY29udGVudC5hZGRDbGFzcygnaXMtb3Blbi0nICsgdGhpcy5wb3NpdGlvbik7XG5cbiAgICAvLyBJZiBgY29udGVudFNjcm9sbGAgaXMgc2V0IHRvIGZhbHNlLCBhZGQgY2xhc3MgYW5kIGRpc2FibGUgc2Nyb2xsaW5nIG9uIHRvdWNoIGRldmljZXMuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50U2Nyb2xsID09PSBmYWxzZSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy1vZmYtY2FudmFzLW9wZW4nKS5vbigndG91Y2htb3ZlJywgdGhpcy5fc3RvcFNjcm9sbGluZyk7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5fcmVjb3JkU2Nyb2xsYWJsZSk7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCd0b3VjaG1vdmUnLCB0aGlzLl9zdG9wU2Nyb2xsUHJvcGFnYXRpb24pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25DbGljayA9PT0gdHJ1ZSAmJiB0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ2lzLWNsb3NhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvRm9jdXMgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub25lKHRyYW5zaXRpb25lbmQodGhpcy4kZWxlbWVudCksIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIV90aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICByZXR1cm47IC8vIGV4aXQgaWYgcHJlbWF0dXJlbHkgY2xvc2VkXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbnZhc0ZvY3VzID0gX3RoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtYXV0b2ZvY3VzXScpO1xuICAgICAgICBpZiAoY2FudmFzRm9jdXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYW52YXNGb2N1cy5lcSgwKS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuJGVsZW1lbnQuZmluZCgnYSwgYnV0dG9uJykuZXEoMCkuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmFwRm9jdXMgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIEtleWJvYXJkLnRyYXBGb2N1cyh0aGlzLiRlbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9hZGRDb250ZW50Q2xhc3NlcygpO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgb2ZmLWNhbnZhcyBtZW51IG9wZW5zLlxuICAgICAqIEBldmVudCBPZmZDYW52YXMjb3BlbmVkXG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdvcGVuZWQuemYub2ZmY2FudmFzJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBvZmYtY2FudmFzIG1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIG9wdGlvbmFsIGNiIHRvIGZpcmUgYWZ0ZXIgY2xvc3VyZS5cbiAgICogQGZpcmVzIE9mZkNhbnZhcyNjbG9zZWRcbiAgICovXG4gIGNsb3NlKGNiKSB7XG4gICAgaWYgKCF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykgfHwgdGhpcy5pc1JldmVhbGVkKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcblxuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIHdoZW4gdGhlIG9mZi1jYW52YXMgbWVudSBvcGVucy5cbiAgICAgICAqIEBldmVudCBPZmZDYW52YXMjY2xvc2VkXG4gICAgICAgKi9cbiAgICAgICAgLnRyaWdnZXIoJ2Nsb3NlZC56Zi5vZmZjYW52YXMnKTtcblxuICAgIHRoaXMuJGNvbnRlbnQucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4tbGVmdCBpcy1vcGVuLXRvcCBpcy1vcGVuLXJpZ2h0IGlzLW9wZW4tYm90dG9tJyk7XG5cbiAgICAvLyBJZiBgY29udGVudFNjcm9sbGAgaXMgc2V0IHRvIGZhbHNlLCByZW1vdmUgY2xhc3MgYW5kIHJlLWVuYWJsZSBzY3JvbGxpbmcgb24gdG91Y2ggZGV2aWNlcy5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRTY3JvbGwgPT09IGZhbHNlKSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLW9mZi1jYW52YXMtb3BlbicpLm9mZigndG91Y2htb3ZlJywgdGhpcy5fc3RvcFNjcm9sbGluZyk7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9mZigndG91Y2hzdGFydCcsIHRoaXMuX3JlY29yZFNjcm9sbGFibGUpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ3RvdWNobW92ZScsIHRoaXMuX3N0b3BTY3JvbGxQcm9wYWdhdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50T3ZlcmxheSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrID09PSB0cnVlICYmIHRoaXMub3B0aW9ucy5jb250ZW50T3ZlcmxheSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnaXMtY2xvc2FibGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLiR0cmlnZ2Vycy5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYXBGb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4kY29udGVudC5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgS2V5Ym9hcmQucmVsZWFzZUZvY3VzKHRoaXMuJGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiB0byB0cmFuc2l0aW9uRW5kIGFuZCBhZGQgY2xhc3Mgd2hlbiBkb25lLlxuICAgIHRoaXMuJGVsZW1lbnQub25lKHRyYW5zaXRpb25lbmQodGhpcy4kZWxlbWVudCksIGZ1bmN0aW9uKGUpIHtcbiAgICAgIF90aGlzLiRlbGVtZW50LmFkZENsYXNzKCdpcy1jbG9zZWQnKTtcbiAgICAgIF90aGlzLl9yZW1vdmVDb250ZW50Q2xhc3NlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIG9mZi1jYW52YXMgbWVudSBvcGVuIG9yIGNsb3NlZC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtqUXVlcnl9IHRyaWdnZXIgLSBlbGVtZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSBvZmYtY2FudmFzIHRvIG9wZW4uXG4gICAqL1xuICB0b2dnbGUoZXZlbnQsIHRyaWdnZXIpIHtcbiAgICBpZiAodGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICB0aGlzLmNsb3NlKGV2ZW50LCB0cmlnZ2VyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oZXZlbnQsIHRyaWdnZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGtleWJvYXJkIGlucHV0IHdoZW4gZGV0ZWN0ZWQuIFdoZW4gdGhlIGVzY2FwZSBrZXkgaXMgcHJlc3NlZCwgdGhlIG9mZi1jYW52YXMgbWVudSBjbG9zZXMsIGFuZCBmb2N1cyBpcyByZXN0b3JlZCB0byB0aGUgZWxlbWVudCB0aGF0IG9wZW5lZCB0aGUgbWVudS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGFuZGxlS2V5Ym9hcmQoZSkge1xuICAgIEtleWJvYXJkLmhhbmRsZUtleShlLCAnT2ZmQ2FudmFzJywge1xuICAgICAgY2xvc2U6ICgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB0aGlzLiRsYXN0VHJpZ2dlci5mb2N1cygpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVkOiAoKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgb2ZmY2FudmFzIHBsdWdpbi5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJy56Zi50cmlnZ2VyIC56Zi5vZmZjYW52YXMnKTtcbiAgICB0aGlzLiRvdmVybGF5Lm9mZignLnpmLm9mZmNhbnZhcycpO1xuICAgIGlmICh0aGlzLm9uTG9hZExpc3RlbmVyKSAkKHdpbmRvdykub2ZmKHRoaXMub25Mb2FkTGlzdGVuZXIpO1xuICB9XG59XG5cbk9mZkNhbnZhcy5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIEFsbG93IHRoZSB1c2VyIHRvIGNsaWNrIG91dHNpZGUgb2YgdGhlIG1lbnUgdG8gY2xvc2UgaXQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGNsb3NlT25DbGljazogdHJ1ZSxcblxuICAvKipcbiAgICogQWRkcyBhbiBvdmVybGF5IG9uIHRvcCBvZiBgW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XWAuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGNvbnRlbnRPdmVybGF5OiB0cnVlLFxuXG4gIC8qKlxuICAgKiBUYXJnZXQgYW4gb2ZmLWNhbnZhcyBjb250ZW50IGNvbnRhaW5lciBieSBJRCB0aGF0IG1heSBiZSBwbGFjZWQgYW55d2hlcmUuIElmIG51bGwgdGhlIGNsb3Nlc3QgY29udGVudCBjb250YWluZXIgd2lsbCBiZSB0YWtlbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgY29udGVudElkOiBudWxsLFxuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIG9mZi1jYW52YXMgZWxlbWVudCBpcyBuZXN0ZWQgaW4gYW4gb2ZmLWNhbnZhcyBjb250ZW50LiBUaGlzIGlzIHJlcXVpcmVkIHdoZW4gdXNpbmcgdGhlIGNvbnRlbnRJZCBvcHRpb24gZm9yIGEgbmVzdGVkIGVsZW1lbnQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIG5lc3RlZDogbnVsbCxcblxuICAvKipcbiAgICogRW5hYmxlL2Rpc2FibGUgc2Nyb2xsaW5nIG9mIHRoZSBtYWluIGNvbnRlbnQgd2hlbiBhbiBvZmYgY2FudmFzIHBhbmVsIGlzIG9wZW4uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGNvbnRlbnRTY3JvbGw6IHRydWUsXG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lIGluIG1zIHRoZSBvcGVuIGFuZCBjbG9zZSB0cmFuc2l0aW9uIHJlcXVpcmVzLiBJZiBub25lIHNlbGVjdGVkLCBwdWxscyBmcm9tIGJvZHkgc3R5bGUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgdHJhbnNpdGlvblRpbWU6IG51bGwsXG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdHJhbnNpdGlvbiBmb3IgdGhlIG9mZmNhbnZhcyBtZW51LiBPcHRpb25zIGFyZSAncHVzaCcsICdkZXRhY2hlZCcgb3IgJ3NsaWRlJy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBwdXNoXG4gICAqL1xuICB0cmFuc2l0aW9uOiAncHVzaCcsXG5cbiAgLyoqXG4gICAqIEZvcmNlIHRoZSBwYWdlIHRvIHNjcm9sbCB0byB0b3Agb3IgYm90dG9tIG9uIG9wZW4uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUgez9zdHJpbmd9XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIGZvcmNlVG86IG51bGwsXG5cbiAgLyoqXG4gICAqIEFsbG93IHRoZSBvZmZjYW52YXMgdG8gcmVtYWluIG9wZW4gZm9yIGNlcnRhaW4gYnJlYWtwb2ludHMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBpc1JldmVhbGVkOiBmYWxzZSxcblxuICAvKipcbiAgICogQnJlYWtwb2ludCBhdCB3aGljaCB0byByZXZlYWwuIEpTIHdpbGwgdXNlIGEgUmVnRXhwIHRvIHRhcmdldCBzdGFuZGFyZCBjbGFzc2VzLCBpZiBjaGFuZ2luZyBjbGFzc25hbWVzLCBwYXNzIHlvdXIgY2xhc3Mgd2l0aCB0aGUgYHJldmVhbENsYXNzYCBvcHRpb24uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUgez9zdHJpbmd9XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIHJldmVhbE9uOiBudWxsLFxuXG4gIC8qKlxuICAgKiBGb3JjZSBmb2N1cyB0byB0aGUgb2ZmY2FudmFzIG9uIG9wZW4uIElmIHRydWUsIHdpbGwgZm9jdXMgdGhlIG9wZW5pbmcgdHJpZ2dlciBvbiBjbG9zZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYXV0b0ZvY3VzOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBDbGFzcyB1c2VkIHRvIGZvcmNlIGFuIG9mZmNhbnZhcyB0byByZW1haW4gb3Blbi4gRm91bmRhdGlvbiBkZWZhdWx0cyBmb3IgdGhpcyBhcmUgYHJldmVhbC1mb3ItbGFyZ2VgICYgYHJldmVhbC1mb3ItbWVkaXVtYC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCByZXZlYWwtZm9yLVxuICAgKiBAdG9kbyBpbXByb3ZlIHRoZSByZWdleCB0ZXN0aW5nIGZvciB0aGlzLlxuICAgKi9cbiAgcmV2ZWFsQ2xhc3M6ICdyZXZlYWwtZm9yLScsXG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIG9wdGlvbmFsIGZvY3VzIHRyYXBwaW5nIHdoZW4gb3BlbmluZyBhbiBvZmZjYW52YXMuIFNldHMgdGFiaW5kZXggb2YgW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XSB0byAtMSBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHRyYXBGb2N1czogZmFsc2Vcbn1cblxuZXhwb3J0IHtPZmZDYW52YXN9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgTW90aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uJztcblxuY29uc3QgTXV0YXRpb25PYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVmaXhlcyA9IFsnV2ViS2l0JywgJ01veicsICdPJywgJ01zJywgJyddO1xuICBmb3IgKHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYCBpbiB3aW5kb3cpIHtcbiAgICAgIHJldHVybiB3aW5kb3dbYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KCkpO1xuXG5jb25zdCB0cmlnZ2VycyA9IChlbCwgdHlwZSkgPT4ge1xuICBlbC5kYXRhKHR5cGUpLnNwbGl0KCcgJykuZm9yRWFjaChpZCA9PiB7XG4gICAgJChgIyR7aWR9YClbIHR5cGUgPT09ICdjbG9zZScgPyAndHJpZ2dlcicgOiAndHJpZ2dlckhhbmRsZXInXShgJHt0eXBlfS56Zi50cmlnZ2VyYCwgW2VsXSk7XG4gIH0pO1xufTtcblxudmFyIFRyaWdnZXJzID0ge1xuICBMaXN0ZW5lcnM6IHtcbiAgICBCYXNpYzoge30sXG4gICAgR2xvYmFsOiB7fVxuICB9LFxuICBJbml0aWFsaXplcnM6IHt9XG59XG5cblRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYyAgPSB7XG4gIG9wZW5MaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ29wZW4nKTtcbiAgfSxcbiAgY2xvc2VMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdjbG9zZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ2Nsb3NlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICd0b2dnbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCd0b2dnbGUuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSxcbiAgY2xvc2VhYmxlTGlzdGVuZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBhbmltYXRpb24gPSAkKHRoaXMpLmRhdGEoJ2Nsb3NhYmxlJyk7XG5cbiAgICBpZihhbmltYXRpb24gIT09ICcnKXtcbiAgICAgIE1vdGlvbi5hbmltYXRlT3V0KCQodGhpcyksIGFuaW1hdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgICQodGhpcykuZmFkZU91dCgpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRm9jdXNMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUtZm9jdXMnKTtcbiAgICAkKGAjJHtpZH1gKS50cmlnZ2VySGFuZGxlcigndG9nZ2xlLnpmLnRyaWdnZXInLCBbJCh0aGlzKV0pO1xuICB9XG59O1xuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLW9wZW5dIHdpbGwgcmV2ZWFsIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtb3Blbl0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zZV0gd2lsbCBjbG9zZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cbi8vIElmIHVzZWQgd2l0aG91dCBhIHZhbHVlIG9uIFtkYXRhLWNsb3NlXSwgdGhlIGV2ZW50IHdpbGwgYnViYmxlLCBhbGxvd2luZyBpdCB0byBjbG9zZSBhIHBhcmVudCBjb21wb25lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGVdIHdpbGwgdG9nZ2xlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NhYmxlXSB3aWxsIHJlc3BvbmQgdG8gY2xvc2UuemYudHJpZ2dlciBldmVudHMuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbG9zZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2Nsb3NlLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VhYmxlXSwgW2RhdGEtY2xvc2FibGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGUtZm9jdXNdIHdpbGwgcmVzcG9uZCB0byBjb21pbmcgaW4gYW5kIG91dCBvZiBmb2N1c1xuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZS1mb2N1c10nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG59XG5cblxuXG4vLyBNb3JlIEdsb2JhbC9jb21wbGV4IGxpc3RlbmVycyBhbmQgdHJpZ2dlcnNcblRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwgID0ge1xuICByZXNpemVMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgcmVzaXplIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJyZXNpemVcIik7XG4gIH0sXG4gIHNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSBzY3JvbGwgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInNjcm9sbFwiKTtcbiAgfSxcbiAgY2xvc2VNZUxpc3RlbmVyOiBmdW5jdGlvbihlLCBwbHVnaW5JZCl7XG4gICAgbGV0IHBsdWdpbiA9IGUubmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XG4gICAgbGV0IHBsdWdpbnMgPSAkKGBbZGF0YS0ke3BsdWdpbn1dYCkubm90KGBbZGF0YS15ZXRpLWJveD1cIiR7cGx1Z2luSWR9XCJdYCk7XG5cbiAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIGxldCBfdGhpcyA9ICQodGhpcyk7XG4gICAgICBfdGhpcy50cmlnZ2VySGFuZGxlcignY2xvc2UuemYudHJpZ2dlcicsIFtfdGhpc10pO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIEdsb2JhbCwgcGFyc2VzIHdob2xlIGRvY3VtZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lciA9IGZ1bmN0aW9uKHBsdWdpbk5hbWUpIHtcbiAgdmFyIHlldGlCb3hlcyA9ICQoJ1tkYXRhLXlldGktYm94XScpLFxuICAgICAgcGx1Z05hbWVzID0gWydkcm9wZG93bicsICd0b29sdGlwJywgJ3JldmVhbCddO1xuXG4gIGlmKHBsdWdpbk5hbWUpe1xuICAgIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMucHVzaChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBsdWdpbk5hbWVbMF0gPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcy5jb25jYXQocGx1Z2luTmFtZSk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmVycm9yKCdQbHVnaW4gbmFtZXMgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICB9XG4gIGlmKHlldGlCb3hlcy5sZW5ndGgpe1xuICAgIGxldCBsaXN0ZW5lcnMgPSBwbHVnTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYGNsb3NlbWUuemYuJHtuYW1lfWA7XG4gICAgfSkuam9pbignICcpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihsaXN0ZW5lcnMpLm9uKGxpc3RlbmVycywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5jbG9zZU1lTGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsIHRyaWdnZXIsIGxpc3RlbmVyKSB7XG4gIGxldCB0aW1lciwgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMyk7XG4gICQod2luZG93KS5vZmYodHJpZ2dlcikub24odHJpZ2dlciwgZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aW1lcikgeyBjbGVhclRpbWVvdXQodGltZXIpOyB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsaXN0ZW5lci5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCBkZWJvdW5jZSB8fCAxMCk7Ly9kZWZhdWx0IHRpbWUgdG8gZW1pdCBzY3JvbGwgZXZlbnRcbiAgfSk7XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXJlc2l6ZV0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Jlc2l6ZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5yZXNpemVMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1zY3JvbGxdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdzY3JvbGwuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuc2Nyb2xsTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIgPSBmdW5jdGlvbigkZWxlbSkge1xuICBpZighTXV0YXRpb25PYnNlcnZlcil7IHJldHVybiBmYWxzZTsgfVxuICBsZXQgJG5vZGVzID0gJGVsZW0uZmluZCgnW2RhdGEtcmVzaXplXSwgW2RhdGEtc2Nyb2xsXSwgW2RhdGEtbXV0YXRlXScpO1xuXG4gIC8vZWxlbWVudCBjYWxsYmFja1xuICB2YXIgbGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZHNMaXN0KSB7XG4gICAgdmFyICR0YXJnZXQgPSAkKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udGFyZ2V0KTtcblxuICAgIC8vdHJpZ2dlciB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnQgZGVwZW5kaW5nIG9uIHR5cGVcbiAgICBzd2l0Y2ggKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udHlwZSkge1xuICAgICAgY2FzZSBcImF0dHJpYnV0ZXNcIjpcbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInNjcm9sbFwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LCB3aW5kb3cucGFnZVlPZmZzZXRdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwicmVzaXplXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXRdKTtcbiAgICAgICAgIH1cbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImNoaWxkTGlzdFwiOlxuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vbm90aGluZ1xuICAgIH1cbiAgfTtcblxuICBpZiAoJG5vZGVzLmxlbmd0aCkge1xuICAgIC8vZm9yIGVhY2ggZWxlbWVudCB0aGF0IG5lZWRzIHRvIGxpc3RlbiBmb3IgcmVzaXppbmcsIHNjcm9sbGluZywgb3IgbXV0YXRpb24gYWRkIGEgc2luZ2xlIG9ic2VydmVyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gJG5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgdmFyIGVsZW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24pO1xuICAgICAgZWxlbWVudE9ic2VydmVyLm9ic2VydmUoJG5vZGVzW2ldLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogW1wiZGF0YS1ldmVudHNcIiwgXCJzdHlsZVwiXSB9KTtcbiAgICB9XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyKCRkb2N1bWVudCk7XG5cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lcigpO1xufVxuXG5cblRyaWdnZXJzLmluaXQgPSBmdW5jdGlvbiAoJCwgRm91bmRhdGlvbikge1xuICBvbkxvYWQoJCh3aW5kb3cpLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQudHJpZ2dlcnNJbml0aWFsaXplZCAhPT0gdHJ1ZSkge1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycygpO1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgJC50cmlnZ2Vyc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmKEZvdW5kYXRpb24pIHtcbiAgICBGb3VuZGF0aW9uLlRyaWdnZXJzID0gVHJpZ2dlcnM7XG4gICAgLy8gTGVnYWN5IGluY2x1ZGVkIHRvIGJlIGJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciBub3cuXG4gICAgRm91bmRhdGlvbi5JSGVhcllvdSA9IFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnNcbiAgfVxufVxuXG5leHBvcnQge1RyaWdnZXJzfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
