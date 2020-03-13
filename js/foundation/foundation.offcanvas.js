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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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
         * @module foundation.offCanvas
         * @requires foundation.util.keyboard
         * @requires foundation.util.mediaQuery
         * @requires foundation.util.triggers
         */


        var OffCanvas = /*#__PURE__*/function (_Plugin) {
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
              this.nested = !!this.options.nested;
              this.$sticky = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
              this.isInCanvas = false; // Defines the CSS transition/position classes of the off-canvas content container.

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


              var revealOnRegExp = new RegExp(Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["RegExpEscape"])(this.options.revealClass) + '([^\\s]+)', 'g');
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
              } // Find fixed elements that should stay fixed while off-canvas is opened


              this.$sticky = this.$content.find('[data-off-canvas-sticky]');

              if (this.$sticky.length > 0 && this.options.transition === 'push') {
                // If there's at least one match force contentScroll:false because the absolute top value doesn't get recalculated on scroll
                // Limit to push transition since there's no transform scope for overlap
                this.options.contentScroll = false;
              }

              var inCanvasFor = this.$element.attr('class').match(/\bin-canvas-for-(\w+)/);

              if (inCanvasFor && inCanvasFor.length === 2) {
                // Set `inCanvasOn` option if found in-canvas-for-[BREAKPONT] CSS class
                this.options.inCanvasOn = inCanvasFor[1];
              } else if (this.options.inCanvasOn) {
                // Ensure the CSS class is set
                this.$element.addClass("in-canvas-for-".concat(this.options.inCanvasOn));
              }

              if (this.options.inCanvasOn) {
                this._checkInCanvas();
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
              var _this3 = this;

              this.$element.off('.zf.trigger .zf.offCanvas').on({
                'open.zf.trigger': this.open.bind(this),
                'close.zf.trigger': this.close.bind(this),
                'toggle.zf.trigger': this.toggle.bind(this),
                'keydown.zf.offCanvas': this._handleKeyboard.bind(this)
              });

              if (this.options.closeOnClick === true) {
                var $target = this.options.contentOverlay ? this.$overlay : this.$content;
                $target.on({
                  'click.zf.offCanvas': this.close.bind(this)
                });
              }

              if (this.options.inCanvasOn) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
                  _this3._checkInCanvas();
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

              this.onLoadListener = Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
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
             * Checks if InCanvas on current breakpoint and adjust off-canvas accordingly
             * @private
             */

          }, {
            key: "_checkInCanvas",
            value: function _checkInCanvas() {
              this.isInCanvas = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(this.options.inCanvasOn);

              if (this.isInCanvas === true) {
                this.close();
              }
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
             * Preserves the fixed behavior of sticky elements on opening an off-canvas with push transition.
             * Since the off-canvas container has got a transform scope in such a case, it is done by calculating position absolute values.
             * @private
             */

          }, {
            key: "_fixStickyElements",
            value: function _fixStickyElements() {
              this.$sticky.each(function (_, el) {
                var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el); // If sticky element is currently fixed, adjust its top value to match absolute position due to transform scope
                // Limit to push transition because postion:fixed works without problems for overlap (no transform scope)

                if ($el.css('position') === 'fixed') {
                  // Save current inline styling to restore it if undoing the absolute fixing
                  var topVal = parseInt($el.css('top'), 10);
                  $el.data('offCanvasSticky', {
                    top: topVal
                  });
                  var absoluteTopVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop() + topVal;
                  $el.css({
                    top: "".concat(absoluteTopVal, "px"),
                    width: '100%',
                    transition: 'none'
                  });
                }
              });
            }
            /**
             * Restores the original fixed styling of sticky elements after having closed an off-canvas that got pseudo fixed beforehand.
             * This reverts the changes of _fixStickyElements()
             * @private
             */

          }, {
            key: "_unfixStickyElements",
            value: function _unfixStickyElements() {
              this.$sticky.each(function (_, el) {
                var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
                var stickyData = $el.data('offCanvasSticky'); // If sticky element has got data object with prior values (meaning it was originally fixed) restore these values once off-canvas is closed

                if (_typeof(stickyData) === 'object') {
                  $el.css({
                    top: "".concat(stickyData.top, "px"),
                    width: '',
                    transition: ''
                  });
                  $el.data('offCanvasSticky', '');
                }
              });
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
             * Stops scrolling of the body when OffCanvas is open on mobile Safari and other troublesome browsers.
             * @function
             * @private
             */

          }, {
            key: "_stopScrolling",
            value: function _stopScrolling(event) {
              return false;
            }
            /**
             * Tag the element given as context whether it can be scrolled up and down.
             * Used to allow or prevent it to scroll. See `_stopScrollPropagation`.
             *
             * Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
             * Only really works for y, not sure how to extend to x or if we need to.
             *
             * @function
             * @private
             */

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
            /**
             * Prevent the given event propagation if the element given as context can scroll.
             * Used to preserve the element scrolling on mobile (`touchmove`) when the document
             * scrolling is prevented. See https://git.io/zf-9707.
             * @function
             * @private
             */

          }, {
            key: "_stopScrollPropagation",
            value: function _stopScrollPropagation(event) {
              var elem = this; // called from event handler context with this as elem

              var parent; // off-canvas elem if called from inner scrollbox

              var up = event.pageY < elem.lastY;
              var down = !up;
              elem.lastY = event.pageY;

              if (up && elem.allowUp || down && elem.allowDown) {
                // It is not recommended to stop event propagation (the user cannot watch it),
                // but in this case this is the only solution we have.
                event.stopPropagation(); // If elem is inner scrollbox we are scrolling the outer off-canvas down/up once the box end has been reached
                // This lets the user continue to touch move the off-canvas without the need to place the finger outside the scrollbox

                if (elem.hasAttribute('data-off-canvas-scrollbox')) {
                  parent = elem.closest('[data-off-canvas], [data-off-canvas-scrollbox-outer]');

                  if (elem.scrollTop <= 1 && parent.scrollTop > 0) {
                    parent.scrollTop--;
                  } else if (elem.scrollTop >= elem.scrollHeight - elem.clientHeight - 1 && parent.scrollTop < parent.scrollHeight - parent.clientHeight) {
                    parent.scrollTop++;
                  }
                }
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
              var _this4 = this;

              if (this.$element.hasClass('is-open') || this.isRevealed || this.isInCanvas) {
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
                this.$element.on('touchstart', '[data-off-canvas-scrollbox]', this._recordScrollable);
                this.$element.on('touchmove', '[data-off-canvas-scrollbox]', this._stopScrollPropagation);
              }

              if (this.options.contentOverlay === true) {
                this.$overlay.addClass('is-visible');
              }

              if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
                this.$overlay.addClass('is-closable');
              }

              if (this.options.autoFocus === true) {
                this.$element.one(Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function () {
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

              if (this.options.transition === 'push') {
                this._fixStickyElements();
              }

              this._addContentClasses();
              /**
               * Fires when the off-canvas menu opens.
               * @event OffCanvas#opened
               */


              this.$element.trigger('opened.zf.offCanvas');
              /**
               * Fires when the off-canvas menu open transition is done.
               * @event OffCanvas#openedEnd
               */

              this.$element.one(Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function () {
                _this4.$element.trigger('openedEnd.zf.offCanvas');
              });
            }
            /**
             * Closes the off-canvas menu.
             * @function
             * @param {Function} cb - optional cb to fire after closure.
             * @fires OffCanvas#close
             * @fires OffCanvas#closed
             */

          }, {
            key: "close",
            value: function close(cb) {
              var _this5 = this;

              if (!this.$element.hasClass('is-open') || this.isRevealed) {
                return;
              }
              /**
               * Fires when the off-canvas menu closes.
               * @event OffCanvas#close
               */


              this.$element.trigger('close.zf.offCanvas');

              var _this = this;

              this.$element.removeClass('is-open');
              this.$element.attr('aria-hidden', 'true');
              this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom');

              if (this.options.contentOverlay === true) {
                this.$overlay.removeClass('is-visible');
              }

              if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
                this.$overlay.removeClass('is-closable');
              }

              this.$triggers.attr('aria-expanded', 'false'); // Listen to transitionEnd: add class, re-enable scrolling and release focus when done.

              this.$element.one(Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function (e) {
                _this5.$element.addClass('is-closed');

                _this5._removeContentClasses();

                if (_this5.options.transition === 'push') {
                  _this5._unfixStickyElements();
                } // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.


                if (_this5.options.contentScroll === false) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', _this5._stopScrolling);

                  _this5.$element.off('touchstart', _this5._recordScrollable);

                  _this5.$element.off('touchmove', _this5._stopScrollPropagation);

                  _this5.$element.off('touchstart', '[data-off-canvas-scrollbox]', _this5._recordScrollable);

                  _this5.$element.off('touchmove', '[data-off-canvas-scrollbox]', _this5._stopScrollPropagation);
                }

                if (_this5.options.trapFocus === true) {
                  _this5.$content.removeAttr('tabindex');

                  _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(_this5.$element);
                }
                /**
                 * Fires when the off-canvas menu close transition is done.
                 * @event OffCanvas#closed
                 */


                _this5.$element.trigger('closed.zf.offCanvas');
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
              var _this6 = this;

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'OffCanvas', {
                close: function close() {
                  _this6.close();

                  _this6.$lastTrigger.focus();

                  return true;
                },
                handled: function handled() {
                  e.preventDefault();
                }
              });
            }
            /**
             * Destroys the OffCanvas plugin.
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.close();
              this.$element.off('.zf.trigger .zf.offCanvas');
              this.$overlay.off('.zf.offCanvas');
              if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
            }
          }]);

          return OffCanvas;
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

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
           * Amount of time the open and close transition requires, including the appropriate milliseconds (`ms`) or seconds (`s`) unit (e.g. `500ms`, `.75s`) If none selected, pulls from body style.
           * @option
           * @type {string}
           * @default null
           */
          transitionTime: null,

          /**
           * Type of transition for the OffCanvas menu. Options are 'push', 'detached' or 'slide'.
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
           * Allow the OffCanvas to remain open for certain breakpoints.
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
           * Breakpoint at which the off-canvas gets moved into canvas content and acts as regular page element.
           * @option
           * @type {?string}
           * @default null
           */
          inCanvasOn: null,

          /**
           * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
           * @option
           * @type {boolean}
           * @default true
           */
          autoFocus: true,

          /**
           * Class used to force an OffCanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
           * @option
           * @type {string}
           * @default reveal-for-
           * @todo improve the regex testing for this.
           */
          revealClass: 'reveal-for-',

          /**
           * Triggers optional focus trapping when opening an OffCanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
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
      9:
      /*!**********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.offcanvas.js ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.offcanvas.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ub2ZmY2FudmFzLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIk9mZkNhbnZhcyIsImVsZW1lbnQiLCJvcHRpb25zIiwiJCIsImJhc2UiLCJyZXZlYWwiLCJUcmlnZ2VycyIsIk1lZGlhUXVlcnkiLCJLZXlib2FyZCIsImlkIiwiY29uc29sZSIsIm92ZXJsYXkiLCJkb2N1bWVudCIsIm92ZXJsYXlQb3NpdGlvbiIsInJldmVhbE9uUmVnRXhwIiwiUmVnRXhwRXNjYXBlIiwicmV2ZWFsT25DbGFzcyIsImluQ2FudmFzRm9yIiwiJHRhcmdldCIsIl90aGlzIiwib25Mb2FkIiwiaGFzUmV2ZWFsIiwiJGVsIiwidG9wVmFsIiwicGFyc2VJbnQiLCJ0b3AiLCJhYnNvbHV0ZVRvcFZhbCIsIndpZHRoIiwidHJhbnNpdGlvbiIsInN0aWNreURhdGEiLCJpc1JldmVhbGVkIiwiZXZlbnQiLCJlbGVtIiwidXAiLCJkb3duIiwicGFyZW50IiwidHJpZ2dlciIsIndpbmRvdyIsInRyYW5zaXRpb25lbmQiLCJjYW52YXNGb2N1cyIsImNiIiwiZSIsImNsb3NlIiwiaGFuZGxlZCIsIlBsdWdpbiIsImNsb3NlT25DbGljayIsImNvbnRlbnRPdmVybGF5IiwiY29udGVudElkIiwibmVzdGVkIiwiY29udGVudFNjcm9sbCIsInRyYW5zaXRpb25UaW1lIiwiZm9yY2VUbyIsInJldmVhbE9uIiwiaW5DYW52YXNPbiIsImF1dG9Gb2N1cyIsInJldmVhbENsYXNzIiwidHJhcEZvY3VzIiwiTXV0YXRpb25PYnNlcnZlciIsInByZWZpeGVzIiwiaSIsInRyaWdnZXJzIiwiZWwiLCJ0eXBlIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwidG9nZ2xlTGlzdGVuZXIiLCJjbG9zZWFibGVMaXN0ZW5lciIsImFuaW1hdGlvbiIsIk1vdGlvbiIsInRvZ2dsZUZvY3VzTGlzdGVuZXIiLCIkZWxlbSIsInJlc2l6ZUxpc3RlbmVyIiwiJG5vZGVzIiwic2Nyb2xsTGlzdGVuZXIiLCJjbG9zZU1lTGlzdGVuZXIiLCJwbHVnaW4iLCJwbHVnaW5zIiwieWV0aUJveGVzIiwicGx1Z05hbWVzIiwicGx1Z2luTmFtZSIsImxpc3RlbmVycyIsImFyZ3MiLCJBcnJheSIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dCIsImxpc3RlbmVyIiwiZGVib3VuY2UiLCJkZWJvdW5jZUdsb2JhbExpc3RlbmVyIiwibGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiIsIm11dGF0aW9uUmVjb3Jkc0xpc3QiLCJlbGVtZW50T2JzZXJ2ZXIiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCIkZG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw4QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSw0QkFBQSxFQUFBLDhCQUFBLEVBQUEsMEJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxzQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsOEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHNCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxxREFBQSxFQUFBLHVEQUFBLEVBQUEsbURBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxH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Q0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTlVBO0NBVkEiLCJmaWxlIjoiZm91bmRhdGlvbi9mb3VuZGF0aW9uLm9mZmNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24ub2ZmY2FudmFzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLm9mZmNhbnZhc1wiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubW90aW9uXCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9rZXlib2FyZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbWVkaWFRdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbW90aW9uX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IE9mZkNhbnZhcyB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24ub2ZmY2FudmFzJztcbkZvdW5kYXRpb24ucGx1Z2luKE9mZkNhbnZhcywgJ09mZkNhbnZhcycpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBPZmZDYW52YXMgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBvbkxvYWQsIHRyYW5zaXRpb25lbmQsIFJlZ0V4cEVzY2FwZSB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnknO1xuXG5pbXBvcnQgeyBUcmlnZ2VycyB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzJztcblxuLyoqXG4gKiBPZmZDYW52YXMgbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLm9mZkNhbnZhc1xuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzXG4gKi9cblxuY2xhc3MgT2ZmQ2FudmFzIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYW4gb2ZmLWNhbnZhcyB3cmFwcGVyLlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgT2ZmQ2FudmFzXG4gICAqIEBmaXJlcyBPZmZDYW52YXMjaW5pdFxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gaW5pdGlhbGl6ZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdPZmZDYW52YXMnOyAvLyBpZTkgYmFjayBjb21wYXRcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgT2ZmQ2FudmFzLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jb250ZW50Q2xhc3NlcyA9IHsgYmFzZTogW10sIHJldmVhbDogW10gfTtcbiAgICB0aGlzLiRsYXN0VHJpZ2dlciA9ICQoKTtcbiAgICB0aGlzLiR0cmlnZ2VycyA9ICQoKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2xlZnQnO1xuICAgIHRoaXMuJGNvbnRlbnQgPSAkKCk7XG4gICAgdGhpcy5uZXN0ZWQgPSAhISh0aGlzLm9wdGlvbnMubmVzdGVkKTtcbiAgICB0aGlzLiRzdGlja3kgPSAkKCk7XG4gICAgdGhpcy5pc0luQ2FudmFzID0gZmFsc2U7XG5cbiAgICAvLyBEZWZpbmVzIHRoZSBDU1MgdHJhbnNpdGlvbi9wb3NpdGlvbiBjbGFzc2VzIG9mIHRoZSBvZmYtY2FudmFzIGNvbnRlbnQgY29udGFpbmVyLlxuICAgICQoWydwdXNoJywgJ292ZXJsYXAnXSkuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgdGhpcy5jb250ZW50Q2xhc3Nlcy5iYXNlLnB1c2goJ2hhcy10cmFuc2l0aW9uLScrdmFsKTtcbiAgICB9KTtcbiAgICAkKFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10pLmVhY2goKGluZGV4LCB2YWwpID0+IHtcbiAgICAgIHRoaXMuY29udGVudENsYXNzZXMuYmFzZS5wdXNoKCdoYXMtcG9zaXRpb24tJyt2YWwpO1xuICAgICAgdGhpcy5jb250ZW50Q2xhc3Nlcy5yZXZlYWwucHVzaCgnaGFzLXJldmVhbC0nK3ZhbCk7XG4gICAgfSk7XG5cbiAgICAvLyBUcmlnZ2VycyBpbml0IGlzIGlkZW1wb3RlbnQsIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgaXQgaXMgaW5pdGlhbGl6ZWRcbiAgICBUcmlnZ2Vycy5pbml0KCQpO1xuICAgIE1lZGlhUXVlcnkuX2luaXQoKTtcblxuICAgIHRoaXMuX2luaXQoKTtcbiAgICB0aGlzLl9ldmVudHMoKTtcblxuICAgIEtleWJvYXJkLnJlZ2lzdGVyKCdPZmZDYW52YXMnLCB7XG4gICAgICAnRVNDQVBFJzogJ2Nsb3NlJ1xuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG9mZi1jYW52YXMgd3JhcHBlciBieSBhZGRpbmcgdGhlIGV4aXQgb3ZlcmxheSAoaWYgbmVlZGVkKS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB2YXIgaWQgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJyk7XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIC8vIEZpbmQgb2ZmLWNhbnZhcyBjb250ZW50LCBlaXRoZXIgYnkgSUQgKGlmIHNwZWNpZmllZCksIGJ5IHNpYmxpbmdzIG9yIGJ5IGNsb3Nlc3Qgc2VsZWN0b3IgKGZhbGxiYWNrKVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudElkKSB7XG4gICAgICB0aGlzLiRjb250ZW50ID0gJCgnIycrdGhpcy5vcHRpb25zLmNvbnRlbnRJZCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50LnNpYmxpbmdzKCdbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLiRjb250ZW50ID0gdGhpcy4kZWxlbWVudC5zaWJsaW5ncygnW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XScpLmZpcnN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQgPSB0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5maXJzdCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRpb25zLmNvbnRlbnRJZCkge1xuICAgICAgLy8gQXNzdW1lIHRoYXQgdGhlIG9mZi1jYW52YXMgZWxlbWVudCBpcyBuZXN0ZWQgaWYgaXQgaXNuJ3QgYSBzaWJsaW5nIG9mIHRoZSBjb250ZW50XG4gICAgICB0aGlzLm5lc3RlZCA9IHRoaXMuJGVsZW1lbnQuc2libGluZ3MoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5sZW5ndGggPT09IDA7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50SWQgJiYgdGhpcy5vcHRpb25zLm5lc3RlZCA9PT0gbnVsbCkge1xuICAgICAgLy8gV2FybmluZyBpZiB1c2luZyBjb250ZW50IElEIHdpdGhvdXQgc2V0dGluZyB0aGUgbmVzdGVkIG9wdGlvblxuICAgICAgLy8gT25jZSB0aGUgZWxlbWVudCBpcyBuZXN0ZWQgaXQgaXMgcmVxdWlyZWQgdG8gd29yayBwcm9wZXJseSBpbiB0aGlzIGNhc2VcbiAgICAgIGNvbnNvbGUud2FybignUmVtZW1iZXIgdG8gdXNlIHRoZSBuZXN0ZWQgb3B0aW9uIGlmIHVzaW5nIHRoZSBjb250ZW50IElEIG9wdGlvbiEnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZXN0ZWQgPT09IHRydWUpIHtcbiAgICAgIC8vIEZvcmNlIHRyYW5zaXRpb24gb3ZlcmxhcCBpZiBuZXN0ZWRcbiAgICAgIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uID0gJ292ZXJsYXAnO1xuICAgICAgLy8gUmVtb3ZlIGFwcHJvcHJpYXRlIGNsYXNzZXMgaWYgYWxyZWFkeSBhc3NpZ25lZCBpbiBtYXJrdXBcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lzLXRyYW5zaXRpb24tcHVzaCcpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoYGlzLXRyYW5zaXRpb24tJHt0aGlzLm9wdGlvbnMudHJhbnNpdGlvbn0gaXMtY2xvc2VkYCk7XG5cbiAgICAvLyBGaW5kIHRyaWdnZXJzIHRoYXQgYWZmZWN0IHRoaXMgZWxlbWVudCBhbmQgYWRkIGFyaWEtZXhwYW5kZWQgdG8gdGhlbVxuICAgIHRoaXMuJHRyaWdnZXJzID0gJChkb2N1bWVudClcbiAgICAgIC5maW5kKCdbZGF0YS1vcGVuPVwiJytpZCsnXCJdLCBbZGF0YS1jbG9zZT1cIicraWQrJ1wiXSwgW2RhdGEtdG9nZ2xlPVwiJytpZCsnXCJdJylcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgIC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgaWQpO1xuXG4gICAgLy8gR2V0IHBvc2l0aW9uIGJ5IGNoZWNraW5nIGZvciByZWxhdGVkIENTUyBjbGFzc1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLiRlbGVtZW50LmlzKCcucG9zaXRpb24tbGVmdCwgLnBvc2l0aW9uLXRvcCwgLnBvc2l0aW9uLXJpZ2h0LCAucG9zaXRpb24tYm90dG9tJykgPyB0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJykubWF0Y2goL3Bvc2l0aW9uXFwtKGxlZnR8dG9wfHJpZ2h0fGJvdHRvbSkvKVsxXSA6IHRoaXMucG9zaXRpb247XG5cbiAgICAvLyBBZGQgYW4gb3ZlcmxheSBvdmVyIHRoZSBjb250ZW50IGlmIG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPT09IHRydWUpIHtcbiAgICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB2YXIgb3ZlcmxheVBvc2l0aW9uID0gJCh0aGlzLiRlbGVtZW50KS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gJ2ZpeGVkJyA/ICdpcy1vdmVybGF5LWZpeGVkJyA6ICdpcy1vdmVybGF5LWFic29sdXRlJztcbiAgICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdqcy1vZmYtY2FudmFzLW92ZXJsYXkgJyArIG92ZXJsYXlQb3NpdGlvbik7XG4gICAgICB0aGlzLiRvdmVybGF5ID0gJChvdmVybGF5KTtcbiAgICAgIGlmKG92ZXJsYXlQb3NpdGlvbiA9PT0gJ2lzLW92ZXJsYXktZml4ZWQnKSB7XG4gICAgICAgICQodGhpcy4kb3ZlcmxheSkuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRjb250ZW50LmFwcGVuZCh0aGlzLiRvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIHJldmVhbE9uIG9wdGlvbiBmcm9tIHRoZSBjbGFzcy5cbiAgICB2YXIgcmV2ZWFsT25SZWdFeHAgPSBuZXcgUmVnRXhwKFJlZ0V4cEVzY2FwZSh0aGlzLm9wdGlvbnMucmV2ZWFsQ2xhc3MpICsgJyhbXlxcXFxzXSspJywgJ2cnKTtcbiAgICB2YXIgcmV2ZWFsT25DbGFzcyA9IHJldmVhbE9uUmVnRXhwLmV4ZWModGhpcy4kZWxlbWVudFswXS5jbGFzc05hbWUpO1xuICAgIGlmIChyZXZlYWxPbkNsYXNzKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaXNSZXZlYWxlZCA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMucmV2ZWFsT24gPSB0aGlzLm9wdGlvbnMucmV2ZWFsT24gfHwgcmV2ZWFsT25DbGFzc1sxXTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgdGhlIGByZXZlYWwtb24tKmAgY2xhc3MgaXMgc2V0LlxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSZXZlYWxlZCA9PT0gdHJ1ZSAmJiB0aGlzLm9wdGlvbnMucmV2ZWFsT24pIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZmlyc3QoKS5hZGRDbGFzcyhgJHt0aGlzLm9wdGlvbnMucmV2ZWFsQ2xhc3N9JHt0aGlzLm9wdGlvbnMucmV2ZWFsT259YCk7XG4gICAgICB0aGlzLl9zZXRNUUNoZWNrZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYW5zaXRpb25UaW1lKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuXG4gICAgLy8gRmluZCBmaXhlZCBlbGVtZW50cyB0aGF0IHNob3VsZCBzdGF5IGZpeGVkIHdoaWxlIG9mZi1jYW52YXMgaXMgb3BlbmVkXG4gICAgdGhpcy4kc3RpY2t5ID0gdGhpcy4kY29udGVudC5maW5kKCdbZGF0YS1vZmYtY2FudmFzLXN0aWNreV0nKTtcbiAgICBpZiAodGhpcy4kc3RpY2t5Lmxlbmd0aCA+IDAgJiYgdGhpcy5vcHRpb25zLnRyYW5zaXRpb24gPT09ICdwdXNoJykge1xuICAgICAgLy8gSWYgdGhlcmUncyBhdCBsZWFzdCBvbmUgbWF0Y2ggZm9yY2UgY29udGVudFNjcm9sbDpmYWxzZSBiZWNhdXNlIHRoZSBhYnNvbHV0ZSB0b3AgdmFsdWUgZG9lc24ndCBnZXQgcmVjYWxjdWxhdGVkIG9uIHNjcm9sbFxuICAgICAgLy8gTGltaXQgdG8gcHVzaCB0cmFuc2l0aW9uIHNpbmNlIHRoZXJlJ3Mgbm8gdHJhbnNmb3JtIHNjb3BlIGZvciBvdmVybGFwXG4gICAgICB0aGlzLm9wdGlvbnMuY29udGVudFNjcm9sbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBpbkNhbnZhc0ZvciA9IHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnKS5tYXRjaCgvXFxiaW4tY2FudmFzLWZvci0oXFx3KykvKTtcbiAgICBpZiAoaW5DYW52YXNGb3IgJiYgaW5DYW52YXNGb3IubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyBTZXQgYGluQ2FudmFzT25gIG9wdGlvbiBpZiBmb3VuZCBpbi1jYW52YXMtZm9yLVtCUkVBS1BPTlRdIENTUyBjbGFzc1xuICAgICAgdGhpcy5vcHRpb25zLmluQ2FudmFzT24gPSBpbkNhbnZhc0ZvclsxXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5pbkNhbnZhc09uKSB7XG4gICAgICAvLyBFbnN1cmUgdGhlIENTUyBjbGFzcyBpcyBzZXRcbiAgICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoYGluLWNhbnZhcy1mb3ItJHt0aGlzLm9wdGlvbnMuaW5DYW52YXNPbn1gKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmluQ2FudmFzT24pIHtcbiAgICAgIHRoaXMuX2NoZWNrSW5DYW52YXMoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0YWxseSByZW1vdmUgYWxsIHRyYW5zaXRpb24vcG9zaXRpb24gQ1NTIGNsYXNzZXMgZnJvbSBvZmYtY2FudmFzIGNvbnRlbnQgY29udGFpbmVyLlxuICAgIHRoaXMuX3JlbW92ZUNvbnRlbnRDbGFzc2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBoYW5kbGVycyB0byB0aGUgb2ZmLWNhbnZhcyB3cmFwcGVyIGFuZCB0aGUgZXhpdCBvdmVybGF5LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ldmVudHMoKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJy56Zi50cmlnZ2VyIC56Zi5vZmZDYW52YXMnKS5vbih7XG4gICAgICAnb3Blbi56Zi50cmlnZ2VyJzogdGhpcy5vcGVuLmJpbmQodGhpcyksXG4gICAgICAnY2xvc2UuemYudHJpZ2dlcic6IHRoaXMuY2xvc2UuYmluZCh0aGlzKSxcbiAgICAgICd0b2dnbGUuemYudHJpZ2dlcic6IHRoaXMudG9nZ2xlLmJpbmQodGhpcyksXG4gICAgICAna2V5ZG93bi56Zi5vZmZDYW52YXMnOiB0aGlzLl9oYW5kbGVLZXlib2FyZC5iaW5kKHRoaXMpXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgdmFyICR0YXJnZXQgPSB0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPyB0aGlzLiRvdmVybGF5IDogdGhpcy4kY29udGVudDtcbiAgICAgICR0YXJnZXQub24oeydjbGljay56Zi5vZmZDYW52YXMnOiB0aGlzLmNsb3NlLmJpbmQodGhpcyl9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmluQ2FudmFzT24pIHtcbiAgICAgICQod2luZG93KS5vbignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0luQ2FudmFzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGV2ZW50IGxpc3RlbmVyIGZvciBlbGVtZW50cyB0aGF0IHdpbGwgcmV2ZWFsIGF0IGNlcnRhaW4gYnJlYWtwb2ludHMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0TVFDaGVja2VyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLm9uTG9hZExpc3RlbmVyID0gb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKE1lZGlhUXVlcnkuYXRMZWFzdChfdGhpcy5vcHRpb25zLnJldmVhbE9uKSkge1xuICAgICAgICBfdGhpcy5yZXZlYWwodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ2NoYW5nZWQuemYubWVkaWFxdWVyeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChNZWRpYVF1ZXJ5LmF0TGVhc3QoX3RoaXMub3B0aW9ucy5yZXZlYWxPbikpIHtcbiAgICAgICAgX3RoaXMucmV2ZWFsKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMucmV2ZWFsKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgSW5DYW52YXMgb24gY3VycmVudCBicmVha3BvaW50IGFuZCBhZGp1c3Qgb2ZmLWNhbnZhcyBhY2NvcmRpbmdseVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NoZWNrSW5DYW52YXMoKSB7XG4gICAgdGhpcy5pc0luQ2FudmFzID0gTWVkaWFRdWVyeS5hdExlYXN0KHRoaXMub3B0aW9ucy5pbkNhbnZhc09uKTtcbiAgICBpZiAodGhpcy5pc0luQ2FudmFzID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIENTUyB0cmFuc2l0aW9uL3Bvc2l0aW9uIGNsYXNzZXMgb2YgdGhlIG9mZi1jYW52YXMgY29udGVudCBjb250YWluZXIuXG4gICAqIFJlbW92aW5nIHRoZSBjbGFzc2VzIGlzIGltcG9ydGFudCB3aGVuIGFub3RoZXIgb2ZmLWNhbnZhcyBnZXRzIG9wZW5lZCB0aGF0IHVzZXMgdGhlIHNhbWUgY29udGVudCBjb250YWluZXIuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaGFzUmV2ZWFsIC0gdHJ1ZSBpZiByZWxhdGVkIG9mZi1jYW52YXMgZWxlbWVudCBpcyByZXZlYWxlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW1vdmVDb250ZW50Q2xhc3NlcyhoYXNSZXZlYWwpIHtcbiAgICBpZiAodHlwZW9mIGhhc1JldmVhbCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLiRjb250ZW50LnJlbW92ZUNsYXNzKHRoaXMuY29udGVudENsYXNzZXMuYmFzZS5qb2luKCcgJykpO1xuICAgIH0gZWxzZSBpZiAoaGFzUmV2ZWFsID09PSBmYWxzZSkge1xuICAgICAgdGhpcy4kY29udGVudC5yZW1vdmVDbGFzcyhgaGFzLXJldmVhbC0ke3RoaXMucG9zaXRpb259YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIENTUyB0cmFuc2l0aW9uL3Bvc2l0aW9uIGNsYXNzZXMgb2YgdGhlIG9mZi1jYW52YXMgY29udGVudCBjb250YWluZXIsIGJhc2VkIG9uIHRoZSBvcGVuaW5nIG9mZi1jYW52YXMgZWxlbWVudC5cbiAgICogQmVmb3JlaGFuZCBhbnkgdHJhbnNpdGlvbi9wb3NpdGlvbiBjbGFzcyBnZXRzIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaGFzUmV2ZWFsIC0gdHJ1ZSBpZiByZWxhdGVkIG9mZi1jYW52YXMgZWxlbWVudCBpcyByZXZlYWxlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hZGRDb250ZW50Q2xhc3NlcyhoYXNSZXZlYWwpIHtcbiAgICB0aGlzLl9yZW1vdmVDb250ZW50Q2xhc3NlcyhoYXNSZXZlYWwpO1xuICAgIGlmICh0eXBlb2YgaGFzUmV2ZWFsICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQuYWRkQ2xhc3MoYGhhcy10cmFuc2l0aW9uLSR7dGhpcy5vcHRpb25zLnRyYW5zaXRpb259IGhhcy1wb3NpdGlvbi0ke3RoaXMucG9zaXRpb259YCk7XG4gICAgfSBlbHNlIGlmIChoYXNSZXZlYWwgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQuYWRkQ2xhc3MoYGhhcy1yZXZlYWwtJHt0aGlzLnBvc2l0aW9ufWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVzZXJ2ZXMgdGhlIGZpeGVkIGJlaGF2aW9yIG9mIHN0aWNreSBlbGVtZW50cyBvbiBvcGVuaW5nIGFuIG9mZi1jYW52YXMgd2l0aCBwdXNoIHRyYW5zaXRpb24uXG4gICAqIFNpbmNlIHRoZSBvZmYtY2FudmFzIGNvbnRhaW5lciBoYXMgZ290IGEgdHJhbnNmb3JtIHNjb3BlIGluIHN1Y2ggYSBjYXNlLCBpdCBpcyBkb25lIGJ5IGNhbGN1bGF0aW5nIHBvc2l0aW9uIGFic29sdXRlIHZhbHVlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9maXhTdGlja3lFbGVtZW50cygpIHtcbiAgICB0aGlzLiRzdGlja3kuZWFjaCgoXywgZWwpID0+IHtcbiAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuXG4gICAgICAvLyBJZiBzdGlja3kgZWxlbWVudCBpcyBjdXJyZW50bHkgZml4ZWQsIGFkanVzdCBpdHMgdG9wIHZhbHVlIHRvIG1hdGNoIGFic29sdXRlIHBvc2l0aW9uIGR1ZSB0byB0cmFuc2Zvcm0gc2NvcGVcbiAgICAgIC8vIExpbWl0IHRvIHB1c2ggdHJhbnNpdGlvbiBiZWNhdXNlIHBvc3Rpb246Zml4ZWQgd29ya3Mgd2l0aG91dCBwcm9ibGVtcyBmb3Igb3ZlcmxhcCAobm8gdHJhbnNmb3JtIHNjb3BlKVxuICAgICAgaWYgKCRlbC5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcblxuICAgICAgICAvLyBTYXZlIGN1cnJlbnQgaW5saW5lIHN0eWxpbmcgdG8gcmVzdG9yZSBpdCBpZiB1bmRvaW5nIHRoZSBhYnNvbHV0ZSBmaXhpbmdcbiAgICAgICAgbGV0IHRvcFZhbCA9IHBhcnNlSW50KCRlbC5jc3MoJ3RvcCcpLCAxMCk7XG4gICAgICAgICRlbC5kYXRhKCdvZmZDYW52YXNTdGlja3knLCB7IHRvcDogdG9wVmFsIH0pO1xuXG4gICAgICAgIGxldCBhYnNvbHV0ZVRvcFZhbCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgdG9wVmFsO1xuICAgICAgICAkZWwuY3NzKHsgdG9wOiBgJHthYnNvbHV0ZVRvcFZhbH1weGAsIHdpZHRoOiAnMTAwJScsIHRyYW5zaXRpb246ICdub25lJyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0b3JlcyB0aGUgb3JpZ2luYWwgZml4ZWQgc3R5bGluZyBvZiBzdGlja3kgZWxlbWVudHMgYWZ0ZXIgaGF2aW5nIGNsb3NlZCBhbiBvZmYtY2FudmFzIHRoYXQgZ290IHBzZXVkbyBmaXhlZCBiZWZvcmVoYW5kLlxuICAgKiBUaGlzIHJldmVydHMgdGhlIGNoYW5nZXMgb2YgX2ZpeFN0aWNreUVsZW1lbnRzKClcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91bmZpeFN0aWNreUVsZW1lbnRzKCkge1xuICAgIHRoaXMuJHN0aWNreS5lYWNoKChfLCBlbCkgPT4ge1xuICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICBsZXQgc3RpY2t5RGF0YSA9ICRlbC5kYXRhKCdvZmZDYW52YXNTdGlja3knKTtcblxuICAgICAgLy8gSWYgc3RpY2t5IGVsZW1lbnQgaGFzIGdvdCBkYXRhIG9iamVjdCB3aXRoIHByaW9yIHZhbHVlcyAobWVhbmluZyBpdCB3YXMgb3JpZ2luYWxseSBmaXhlZCkgcmVzdG9yZSB0aGVzZSB2YWx1ZXMgb25jZSBvZmYtY2FudmFzIGlzIGNsb3NlZFxuICAgICAgaWYgKHR5cGVvZiBzdGlja3lEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAkZWwuY3NzKHsgdG9wOiBgJHtzdGlja3lEYXRhLnRvcH1weGAsIHdpZHRoOiAnJywgdHJhbnNpdGlvbjogJycgfSlcbiAgICAgICAgJGVsLmRhdGEoJ29mZkNhbnZhc1N0aWNreScsICcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSByZXZlYWxpbmcvaGlkaW5nIHRoZSBvZmYtY2FudmFzIGF0IGJyZWFrcG9pbnRzLCBub3QgdGhlIHNhbWUgYXMgb3Blbi5cbiAgICogQHBhcmFtIHtCb29sZWFufSBpc1JldmVhbGVkIC0gdHJ1ZSBpZiBlbGVtZW50IHNob3VsZCBiZSByZXZlYWxlZC5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICByZXZlYWwoaXNSZXZlYWxlZCkge1xuICAgIGlmIChpc1JldmVhbGVkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB0aGlzLmlzUmV2ZWFsZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ29wZW4uemYudHJpZ2dlciB0b2dnbGUuemYudHJpZ2dlcicpO1xuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXZlYWxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9mZignb3Blbi56Zi50cmlnZ2VyIHRvZ2dsZS56Zi50cmlnZ2VyJykub24oe1xuICAgICAgICAnb3Blbi56Zi50cmlnZ2VyJzogdGhpcy5vcGVuLmJpbmQodGhpcyksXG4gICAgICAgICd0b2dnbGUuemYudHJpZ2dlcic6IHRoaXMudG9nZ2xlLmJpbmQodGhpcylcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgfVxuICAgIHRoaXMuX2FkZENvbnRlbnRDbGFzc2VzKGlzUmV2ZWFsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHNjcm9sbGluZyBvZiB0aGUgYm9keSB3aGVuIE9mZkNhbnZhcyBpcyBvcGVuIG9uIG1vYmlsZSBTYWZhcmkgYW5kIG90aGVyIHRyb3VibGVzb21lIGJyb3dzZXJzLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zdG9wU2Nyb2xsaW5nKGV2ZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRhZyB0aGUgZWxlbWVudCBnaXZlbiBhcyBjb250ZXh0IHdoZXRoZXIgaXQgY2FuIGJlIHNjcm9sbGVkIHVwIGFuZCBkb3duLlxuICAgKiBVc2VkIHRvIGFsbG93IG9yIHByZXZlbnQgaXQgdG8gc2Nyb2xsLiBTZWUgYF9zdG9wU2Nyb2xsUHJvcGFnYXRpb25gLlxuICAgKlxuICAgKiBUYWtlbiBhbmQgYWRhcHRlZCBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTY4ODk0NDcvcHJldmVudC1mdWxsLXBhZ2Utc2Nyb2xsaW5nLWlvc1xuICAgKiBPbmx5IHJlYWxseSB3b3JrcyBmb3IgeSwgbm90IHN1cmUgaG93IHRvIGV4dGVuZCB0byB4IG9yIGlmIHdlIG5lZWQgdG8uXG4gICAqXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlY29yZFNjcm9sbGFibGUoZXZlbnQpIHtcbiAgICBsZXQgZWxlbSA9IHRoaXM7IC8vIGNhbGxlZCBmcm9tIGV2ZW50IGhhbmRsZXIgY29udGV4dCB3aXRoIHRoaXMgYXMgZWxlbVxuXG4gICAgIC8vIElmIHRoZSBlbGVtZW50IGlzIHNjcm9sbGFibGUgKGNvbnRlbnQgb3ZlcmZsb3dzKSwgdGhlbi4uLlxuICAgIGlmIChlbGVtLnNjcm9sbEhlaWdodCAhPT0gZWxlbS5jbGllbnRIZWlnaHQpIHtcbiAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSB0b3AsIHNjcm9sbCBkb3duIG9uZSBwaXhlbCB0byBhbGxvdyBzY3JvbGxpbmcgdXBcbiAgICAgIGlmIChlbGVtLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICBlbGVtLnNjcm9sbFRvcCA9IDE7XG4gICAgICB9XG4gICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgYm90dG9tLCBzY3JvbGwgdXAgb25lIHBpeGVsIHRvIGFsbG93IHNjcm9sbGluZyBkb3duXG4gICAgICBpZiAoZWxlbS5zY3JvbGxUb3AgPT09IGVsZW0uc2Nyb2xsSGVpZ2h0IC0gZWxlbS5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgZWxlbS5zY3JvbGxUb3AgPSBlbGVtLnNjcm9sbEhlaWdodCAtIGVsZW0uY2xpZW50SGVpZ2h0IC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbS5hbGxvd1VwID0gZWxlbS5zY3JvbGxUb3AgPiAwO1xuICAgIGVsZW0uYWxsb3dEb3duID0gZWxlbS5zY3JvbGxUb3AgPCAoZWxlbS5zY3JvbGxIZWlnaHQgLSBlbGVtLmNsaWVudEhlaWdodCk7XG4gICAgZWxlbS5sYXN0WSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQucGFnZVk7XG4gIH1cblxuICAvKipcbiAgICogUHJldmVudCB0aGUgZ2l2ZW4gZXZlbnQgcHJvcGFnYXRpb24gaWYgdGhlIGVsZW1lbnQgZ2l2ZW4gYXMgY29udGV4dCBjYW4gc2Nyb2xsLlxuICAgKiBVc2VkIHRvIHByZXNlcnZlIHRoZSBlbGVtZW50IHNjcm9sbGluZyBvbiBtb2JpbGUgKGB0b3VjaG1vdmVgKSB3aGVuIHRoZSBkb2N1bWVudFxuICAgKiBzY3JvbGxpbmcgaXMgcHJldmVudGVkLiBTZWUgaHR0cHM6Ly9naXQuaW8vemYtOTcwNy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc3RvcFNjcm9sbFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgbGV0IGVsZW0gPSB0aGlzOyAvLyBjYWxsZWQgZnJvbSBldmVudCBoYW5kbGVyIGNvbnRleHQgd2l0aCB0aGlzIGFzIGVsZW1cbiAgICBsZXQgcGFyZW50OyAvLyBvZmYtY2FudmFzIGVsZW0gaWYgY2FsbGVkIGZyb20gaW5uZXIgc2Nyb2xsYm94XG4gICAgbGV0IHVwID0gZXZlbnQucGFnZVkgPCBlbGVtLmxhc3RZO1xuICAgIGxldCBkb3duID0gIXVwO1xuICAgIGVsZW0ubGFzdFkgPSBldmVudC5wYWdlWTtcblxuICAgIGlmKCh1cCAmJiBlbGVtLmFsbG93VXApIHx8IChkb3duICYmIGVsZW0uYWxsb3dEb3duKSkge1xuICAgICAgLy8gSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIHN0b3AgZXZlbnQgcHJvcGFnYXRpb24gKHRoZSB1c2VyIGNhbm5vdCB3YXRjaCBpdCksXG4gICAgICAvLyBidXQgaW4gdGhpcyBjYXNlIHRoaXMgaXMgdGhlIG9ubHkgc29sdXRpb24gd2UgaGF2ZS5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAvLyBJZiBlbGVtIGlzIGlubmVyIHNjcm9sbGJveCB3ZSBhcmUgc2Nyb2xsaW5nIHRoZSBvdXRlciBvZmYtY2FudmFzIGRvd24vdXAgb25jZSB0aGUgYm94IGVuZCBoYXMgYmVlbiByZWFjaGVkXG4gICAgICAvLyBUaGlzIGxldHMgdGhlIHVzZXIgY29udGludWUgdG8gdG91Y2ggbW92ZSB0aGUgb2ZmLWNhbnZhcyB3aXRob3V0IHRoZSBuZWVkIHRvIHBsYWNlIHRoZSBmaW5nZXIgb3V0c2lkZSB0aGUgc2Nyb2xsYm94XG4gICAgICBpZiAoZWxlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2ZmLWNhbnZhcy1zY3JvbGxib3gnKSkge1xuICAgICAgICBwYXJlbnQgPSBlbGVtLmNsb3Nlc3QoJ1tkYXRhLW9mZi1jYW52YXNdLCBbZGF0YS1vZmYtY2FudmFzLXNjcm9sbGJveC1vdXRlcl0nKTtcbiAgICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wIDw9IDEgJiYgcGFyZW50LnNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICBwYXJlbnQuc2Nyb2xsVG9wLS07XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbS5zY3JvbGxUb3AgPj0gZWxlbS5zY3JvbGxIZWlnaHQgLSBlbGVtLmNsaWVudEhlaWdodCAtIDEgJiYgcGFyZW50LnNjcm9sbFRvcCA8IHBhcmVudC5zY3JvbGxIZWlnaHQgLSBwYXJlbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgcGFyZW50LnNjcm9sbFRvcCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIG9mZi1jYW52YXMgbWVudS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtqUXVlcnl9IHRyaWdnZXIgLSBlbGVtZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSBvZmYtY2FudmFzIHRvIG9wZW4uXG4gICAqIEBmaXJlcyBPZmZDYW52YXMjb3BlbmVkXG4gICAqIEB0b2RvIGFsc28gdHJpZ2dlciAnb3BlbicgZXZlbnQ/XG4gICAqL1xuICBvcGVuKGV2ZW50LCB0cmlnZ2VyKSB7XG4gICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSB8fCB0aGlzLmlzUmV2ZWFsZWQgfHwgdGhpcy5pc0luQ2FudmFzKSB7IHJldHVybjsgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodHJpZ2dlcikge1xuICAgICAgdGhpcy4kbGFzdFRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9yY2VUbyA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5mb3JjZVRvID09PSAnYm90dG9tJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhbnNpdGlvblRpbWUgJiYgdGhpcy5vcHRpb25zLnRyYW5zaXRpb24gIT09ICdvdmVybGFwJykge1xuICAgICAgdGhpcy4kZWxlbWVudC5zaWJsaW5ncygnW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XScpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uVGltZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuc2libGluZ3MoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCAnJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaXMtb3BlbicpLnJlbW92ZUNsYXNzKCdpcy1jbG9zZWQnKTtcblxuICAgIHRoaXMuJHRyaWdnZXJzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgIHRoaXMuJGNvbnRlbnQuYWRkQ2xhc3MoJ2lzLW9wZW4tJyArIHRoaXMucG9zaXRpb24pO1xuXG4gICAgLy8gSWYgYGNvbnRlbnRTY3JvbGxgIGlzIHNldCB0byBmYWxzZSwgYWRkIGNsYXNzIGFuZCBkaXNhYmxlIHNjcm9sbGluZyBvbiB0b3VjaCBkZXZpY2VzLlxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudFNjcm9sbCA9PT0gZmFsc2UpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtb2ZmLWNhbnZhcy1vcGVuJykub24oJ3RvdWNobW92ZScsIHRoaXMuX3N0b3BTY3JvbGxpbmcpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vbigndG91Y2hzdGFydCcsIHRoaXMuX3JlY29yZFNjcm9sbGFibGUpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vbigndG91Y2htb3ZlJywgdGhpcy5fc3RvcFNjcm9sbFByb3BhZ2F0aW9uKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ3RvdWNoc3RhcnQnLCAnW2RhdGEtb2ZmLWNhbnZhcy1zY3JvbGxib3hdJywgdGhpcy5fcmVjb3JkU2Nyb2xsYWJsZSk7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCd0b3VjaG1vdmUnLCAnW2RhdGEtb2ZmLWNhbnZhcy1zY3JvbGxib3hdJywgdGhpcy5fc3RvcFNjcm9sbFByb3BhZ2F0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2sgPT09IHRydWUgJiYgdGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpcy1jbG9zYWJsZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0ZvY3VzID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uZSh0cmFuc2l0aW9uZW5kKHRoaXMuJGVsZW1lbnQpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFfdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgcmV0dXJuOyAvLyBleGl0IGlmIHByZW1hdHVyZWx5IGNsb3NlZFxuICAgICAgICB9XG4gICAgICAgIHZhciBjYW52YXNGb2N1cyA9IF90aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWF1dG9mb2N1c10nKTtcbiAgICAgICAgaWYgKGNhbnZhc0ZvY3VzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FudmFzRm9jdXMuZXEoMCkuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLiRlbGVtZW50LmZpbmQoJ2EsIGJ1dHRvbicpLmVxKDApLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhcEZvY3VzID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRjb250ZW50LmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBLZXlib2FyZC50cmFwRm9jdXModGhpcy4kZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmFuc2l0aW9uID09PSAncHVzaCcpIHtcbiAgICAgIHRoaXMuX2ZpeFN0aWNreUVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYWRkQ29udGVudENsYXNzZXMoKTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIG9mZi1jYW52YXMgbWVudSBvcGVucy5cbiAgICAgKiBAZXZlbnQgT2ZmQ2FudmFzI29wZW5lZFxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignb3BlbmVkLnpmLm9mZkNhbnZhcycpO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgb2ZmLWNhbnZhcyBtZW51IG9wZW4gdHJhbnNpdGlvbiBpcyBkb25lLlxuICAgICAqIEBldmVudCBPZmZDYW52YXMjb3BlbmVkRW5kXG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC5vbmUodHJhbnNpdGlvbmVuZCh0aGlzLiRlbGVtZW50KSwgKCkgPT4ge1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdvcGVuZWRFbmQuemYub2ZmQ2FudmFzJyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBvZmYtY2FudmFzIG1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIG9wdGlvbmFsIGNiIHRvIGZpcmUgYWZ0ZXIgY2xvc3VyZS5cbiAgICogQGZpcmVzIE9mZkNhbnZhcyNjbG9zZVxuICAgKiBAZmlyZXMgT2ZmQ2FudmFzI2Nsb3NlZFxuICAgKi9cbiAgY2xvc2UoY2IpIHtcbiAgICBpZiAoIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSB8fCB0aGlzLmlzUmV2ZWFsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBvZmYtY2FudmFzIG1lbnUgY2xvc2VzLlxuICAgICAqIEBldmVudCBPZmZDYW52YXMjY2xvc2VcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2Nsb3NlLnpmLm9mZkNhbnZhcycpO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcblxuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgdGhpcy4kY29udGVudC5yZW1vdmVDbGFzcygnaXMtb3Blbi1sZWZ0IGlzLW9wZW4tdG9wIGlzLW9wZW4tcmlnaHQgaXMtb3Blbi1ib3R0b20nKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25DbGljayA9PT0gdHJ1ZSAmJiB0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NhYmxlJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kdHJpZ2dlcnMuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG5cbiAgICAvLyBMaXN0ZW4gdG8gdHJhbnNpdGlvbkVuZDogYWRkIGNsYXNzLCByZS1lbmFibGUgc2Nyb2xsaW5nIGFuZCByZWxlYXNlIGZvY3VzIHdoZW4gZG9uZS5cbiAgICB0aGlzLiRlbGVtZW50Lm9uZSh0cmFuc2l0aW9uZW5kKHRoaXMuJGVsZW1lbnQpLCAoZSkgPT4ge1xuXG4gICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdpcy1jbG9zZWQnKTtcbiAgICAgIHRoaXMuX3JlbW92ZUNvbnRlbnRDbGFzc2VzKCk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudHJhbnNpdGlvbiA9PT0gJ3B1c2gnKSB7XG4gICAgICAgIHRoaXMuX3VuZml4U3RpY2t5RWxlbWVudHMoKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYGNvbnRlbnRTY3JvbGxgIGlzIHNldCB0byBmYWxzZSwgcmVtb3ZlIGNsYXNzIGFuZCByZS1lbmFibGUgc2Nyb2xsaW5nIG9uIHRvdWNoIGRldmljZXMuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRTY3JvbGwgPT09IGZhbHNlKSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtb2ZmLWNhbnZhcy1vcGVuJykub2ZmKCd0b3VjaG1vdmUnLCB0aGlzLl9zdG9wU2Nyb2xsaW5nKTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9yZWNvcmRTY3JvbGxhYmxlKTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ3RvdWNobW92ZScsIHRoaXMuX3N0b3BTY3JvbGxQcm9wYWdhdGlvbik7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCd0b3VjaHN0YXJ0JywgJ1tkYXRhLW9mZi1jYW52YXMtc2Nyb2xsYm94XScsIHRoaXMuX3JlY29yZFNjcm9sbGFibGUpO1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZigndG91Y2htb3ZlJywgJ1tkYXRhLW9mZi1jYW52YXMtc2Nyb2xsYm94XScsIHRoaXMuX3N0b3BTY3JvbGxQcm9wYWdhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudHJhcEZvY3VzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgS2V5Ym9hcmQucmVsZWFzZUZvY3VzKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIHdoZW4gdGhlIG9mZi1jYW52YXMgbWVudSBjbG9zZSB0cmFuc2l0aW9uIGlzIGRvbmUuXG4gICAgICAgKiBAZXZlbnQgT2ZmQ2FudmFzI2Nsb3NlZFxuICAgICAgICovXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2Nsb3NlZC56Zi5vZmZDYW52YXMnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBvZmYtY2FudmFzIG1lbnUgb3BlbiBvciBjbG9zZWQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXIuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSB0cmlnZ2VyIC0gZWxlbWVudCB0aGF0IHRyaWdnZXJlZCB0aGUgb2ZmLWNhbnZhcyB0byBvcGVuLlxuICAgKi9cbiAgdG9nZ2xlKGV2ZW50LCB0cmlnZ2VyKSB7XG4gICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgdGhpcy5jbG9zZShldmVudCwgdHJpZ2dlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKGV2ZW50LCB0cmlnZ2VyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBrZXlib2FyZCBpbnB1dCB3aGVuIGRldGVjdGVkLiBXaGVuIHRoZSBlc2NhcGUga2V5IGlzIHByZXNzZWQsIHRoZSBvZmYtY2FudmFzIG1lbnUgY2xvc2VzLCBhbmQgZm9jdXMgaXMgcmVzdG9yZWQgdG8gdGhlIGVsZW1lbnQgdGhhdCBvcGVuZWQgdGhlIG1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZUtleWJvYXJkKGUpIHtcbiAgICBLZXlib2FyZC5oYW5kbGVLZXkoZSwgJ09mZkNhbnZhcycsIHtcbiAgICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdGhpcy4kbGFzdFRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgaGFuZGxlZDogKCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIE9mZkNhbnZhcyBwbHVnaW4uXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuemYudHJpZ2dlciAuemYub2ZmQ2FudmFzJyk7XG4gICAgdGhpcy4kb3ZlcmxheS5vZmYoJy56Zi5vZmZDYW52YXMnKTtcbiAgICBpZiAodGhpcy5vbkxvYWRMaXN0ZW5lcikgJCh3aW5kb3cpLm9mZih0aGlzLm9uTG9hZExpc3RlbmVyKTtcbiAgfVxufVxuXG5PZmZDYW52YXMuZGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBBbGxvdyB0aGUgdXNlciB0byBjbGljayBvdXRzaWRlIG9mIHRoZSBtZW51IHRvIGNsb3NlIGl0LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjbG9zZU9uQ2xpY2s6IHRydWUsXG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gb3ZlcmxheSBvbiB0b3Agb2YgYFtkYXRhLW9mZi1jYW52YXMtY29udGVudF1gLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjb250ZW50T3ZlcmxheTogdHJ1ZSxcblxuICAvKipcbiAgICogVGFyZ2V0IGFuIG9mZi1jYW52YXMgY29udGVudCBjb250YWluZXIgYnkgSUQgdGhhdCBtYXkgYmUgcGxhY2VkIGFueXdoZXJlLiBJZiBudWxsIHRoZSBjbG9zZXN0IGNvbnRlbnQgY29udGFpbmVyIHdpbGwgYmUgdGFrZW4uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUgez9zdHJpbmd9XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIGNvbnRlbnRJZDogbnVsbCxcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBvZmYtY2FudmFzIGVsZW1lbnQgaXMgbmVzdGVkIGluIGFuIG9mZi1jYW52YXMgY29udGVudC4gVGhpcyBpcyByZXF1aXJlZCB3aGVuIHVzaW5nIHRoZSBjb250ZW50SWQgb3B0aW9uIGZvciBhIG5lc3RlZCBlbGVtZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBuZXN0ZWQ6IG51bGwsXG5cbiAgLyoqXG4gICAqIEVuYWJsZS9kaXNhYmxlIHNjcm9sbGluZyBvZiB0aGUgbWFpbiBjb250ZW50IHdoZW4gYW4gb2ZmIGNhbnZhcyBwYW5lbCBpcyBvcGVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjb250ZW50U2Nyb2xsOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdGltZSB0aGUgb3BlbiBhbmQgY2xvc2UgdHJhbnNpdGlvbiByZXF1aXJlcywgaW5jbHVkaW5nIHRoZSBhcHByb3ByaWF0ZSBtaWxsaXNlY29uZHMgKGBtc2ApIG9yIHNlY29uZHMgKGBzYCkgdW5pdCAoZS5nLiBgNTAwbXNgLCBgLjc1c2ApIElmIG5vbmUgc2VsZWN0ZWQsIHB1bGxzIGZyb20gYm9keSBzdHlsZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICB0cmFuc2l0aW9uVGltZTogbnVsbCxcblxuICAvKipcbiAgICogVHlwZSBvZiB0cmFuc2l0aW9uIGZvciB0aGUgT2ZmQ2FudmFzIG1lbnUuIE9wdGlvbnMgYXJlICdwdXNoJywgJ2RldGFjaGVkJyBvciAnc2xpZGUnLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IHB1c2hcbiAgICovXG4gIHRyYW5zaXRpb246ICdwdXNoJyxcblxuICAvKipcbiAgICogRm9yY2UgdGhlIHBhZ2UgdG8gc2Nyb2xsIHRvIHRvcCBvciBib3R0b20gb24gb3Blbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgZm9yY2VUbzogbnVsbCxcblxuICAvKipcbiAgICogQWxsb3cgdGhlIE9mZkNhbnZhcyB0byByZW1haW4gb3BlbiBmb3IgY2VydGFpbiBicmVha3BvaW50cy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGlzUmV2ZWFsZWQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBCcmVha3BvaW50IGF0IHdoaWNoIHRvIHJldmVhbC4gSlMgd2lsbCB1c2UgYSBSZWdFeHAgdG8gdGFyZ2V0IHN0YW5kYXJkIGNsYXNzZXMsIGlmIGNoYW5naW5nIGNsYXNzbmFtZXMsIHBhc3MgeW91ciBjbGFzcyB3aXRoIHRoZSBgcmV2ZWFsQ2xhc3NgIG9wdGlvbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgcmV2ZWFsT246IG51bGwsXG5cbiAgLyoqXG4gICAqIEJyZWFrcG9pbnQgYXQgd2hpY2ggdGhlIG9mZi1jYW52YXMgZ2V0cyBtb3ZlZCBpbnRvIGNhbnZhcyBjb250ZW50IGFuZCBhY3RzIGFzIHJlZ3VsYXIgcGFnZSBlbGVtZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHs/c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBpbkNhbnZhc09uOiBudWxsLFxuXG4gIC8qKlxuICAgKiBGb3JjZSBmb2N1cyB0byB0aGUgb2ZmY2FudmFzIG9uIG9wZW4uIElmIHRydWUsIHdpbGwgZm9jdXMgdGhlIG9wZW5pbmcgdHJpZ2dlciBvbiBjbG9zZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYXV0b0ZvY3VzOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBDbGFzcyB1c2VkIHRvIGZvcmNlIGFuIE9mZkNhbnZhcyB0byByZW1haW4gb3Blbi4gRm91bmRhdGlvbiBkZWZhdWx0cyBmb3IgdGhpcyBhcmUgYHJldmVhbC1mb3ItbGFyZ2VgICYgYHJldmVhbC1mb3ItbWVkaXVtYC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCByZXZlYWwtZm9yLVxuICAgKiBAdG9kbyBpbXByb3ZlIHRoZSByZWdleCB0ZXN0aW5nIGZvciB0aGlzLlxuICAgKi9cbiAgcmV2ZWFsQ2xhc3M6ICdyZXZlYWwtZm9yLScsXG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIG9wdGlvbmFsIGZvY3VzIHRyYXBwaW5nIHdoZW4gb3BlbmluZyBhbiBPZmZDYW52YXMuIFNldHMgdGFiaW5kZXggb2YgW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XSB0byAtMSBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHRyYXBGb2N1czogZmFsc2Vcbn1cblxuZXhwb3J0IHtPZmZDYW52YXN9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgTW90aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uJztcblxuY29uc3QgTXV0YXRpb25PYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVmaXhlcyA9IFsnV2ViS2l0JywgJ01veicsICdPJywgJ01zJywgJyddO1xuICBmb3IgKHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYCBpbiB3aW5kb3cpIHtcbiAgICAgIHJldHVybiB3aW5kb3dbYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KCkpO1xuXG5jb25zdCB0cmlnZ2VycyA9IChlbCwgdHlwZSkgPT4ge1xuICBlbC5kYXRhKHR5cGUpLnNwbGl0KCcgJykuZm9yRWFjaChpZCA9PiB7XG4gICAgJChgIyR7aWR9YClbIHR5cGUgPT09ICdjbG9zZScgPyAndHJpZ2dlcicgOiAndHJpZ2dlckhhbmRsZXInXShgJHt0eXBlfS56Zi50cmlnZ2VyYCwgW2VsXSk7XG4gIH0pO1xufTtcblxudmFyIFRyaWdnZXJzID0ge1xuICBMaXN0ZW5lcnM6IHtcbiAgICBCYXNpYzoge30sXG4gICAgR2xvYmFsOiB7fVxuICB9LFxuICBJbml0aWFsaXplcnM6IHt9XG59XG5cblRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYyAgPSB7XG4gIG9wZW5MaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ29wZW4nKTtcbiAgfSxcbiAgY2xvc2VMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdjbG9zZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ2Nsb3NlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICd0b2dnbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCd0b2dnbGUuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSxcbiAgY2xvc2VhYmxlTGlzdGVuZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgYW5pbWF0aW9uID0gJCh0aGlzKS5kYXRhKCdjbG9zYWJsZScpO1xuXG4gICAgLy8gT25seSBjbG9zZSB0aGUgZmlyc3QgY2xvc2FibGUgZWxlbWVudC4gU2VlIGh0dHBzOi8vZ2l0LmlvL3pmLTc4MzNcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYoYW5pbWF0aW9uICE9PSAnJyl7XG4gICAgICBNb3Rpb24uYW5pbWF0ZU91dCgkKHRoaXMpLCBhbmltYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICAkKHRoaXMpLmZhZGVPdXQoKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZvY3VzTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlLWZvY3VzJyk7XG4gICAgJChgIyR7aWR9YCkudHJpZ2dlckhhbmRsZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJywgWyQodGhpcyldKTtcbiAgfVxufTtcblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1vcGVuXSB3aWxsIHJldmVhbCBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLW9wZW5dJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2VdIHdpbGwgY2xvc2UgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4vLyBJZiB1c2VkIHdpdGhvdXQgYSB2YWx1ZSBvbiBbZGF0YS1jbG9zZV0sIHRoZSBldmVudCB3aWxsIGJ1YmJsZSwgYWxsb3dpbmcgaXQgdG8gY2xvc2UgYSBwYXJlbnQgY29tcG9uZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlXSB3aWxsIHRvZ2dsZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zYWJsZV0gd2lsbCByZXNwb25kIHRvIGNsb3NlLnpmLnRyaWdnZXIgZXZlbnRzLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xvc2UuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbG9zZS56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlYWJsZV0sIFtkYXRhLWNsb3NhYmxlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlLWZvY3VzXSB3aWxsIHJlc3BvbmQgdG8gY29taW5nIGluIGFuZCBvdXQgb2YgZm9jdXNcblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGUtZm9jdXNdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xufVxuXG5cblxuLy8gTW9yZSBHbG9iYWwvY29tcGxleCBsaXN0ZW5lcnMgYW5kIHRyaWdnZXJzXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsICA9IHtcbiAgcmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHJlc2l6ZSBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwicmVzaXplXCIpO1xuICB9LFxuICBzY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgc2Nyb2xsIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJzY3JvbGxcIik7XG4gIH0sXG4gIGNsb3NlTWVMaXN0ZW5lcjogZnVuY3Rpb24oZSwgcGx1Z2luSWQpe1xuICAgIGxldCBwbHVnaW4gPSBlLm5hbWVzcGFjZS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBwbHVnaW5zID0gJChgW2RhdGEtJHtwbHVnaW59XWApLm5vdChgW2RhdGEteWV0aS1ib3g9XCIke3BsdWdpbklkfVwiXWApO1xuXG4gICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgX3RoaXMgPSAkKHRoaXMpO1xuICAgICAgX3RoaXMudHJpZ2dlckhhbmRsZXIoJ2Nsb3NlLnpmLnRyaWdnZXInLCBbX3RoaXNdKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBHbG9iYWwsIHBhcnNlcyB3aG9sZSBkb2N1bWVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIgPSBmdW5jdGlvbihwbHVnaW5OYW1lKSB7XG4gIHZhciB5ZXRpQm94ZXMgPSAkKCdbZGF0YS15ZXRpLWJveF0nKSxcbiAgICAgIHBsdWdOYW1lcyA9IFsnZHJvcGRvd24nLCAndG9vbHRpcCcsICdyZXZlYWwnXTtcblxuICBpZihwbHVnaW5OYW1lKXtcbiAgICBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzLnB1c2gocGx1Z2luTmFtZSk7XG4gICAgfWVsc2UgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwbHVnaW5OYW1lWzBdID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMgPSBwbHVnTmFtZXMuY29uY2F0KHBsdWdpbk5hbWUpO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5lcnJvcignUGx1Z2luIG5hbWVzIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgfVxuICBpZih5ZXRpQm94ZXMubGVuZ3RoKXtcbiAgICBsZXQgbGlzdGVuZXJzID0gcGx1Z05hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGBjbG9zZW1lLnpmLiR7bmFtZX1gO1xuICAgIH0pLmpvaW4oJyAnKTtcblxuICAgICQod2luZG93KS5vZmYobGlzdGVuZXJzKS5vbihsaXN0ZW5lcnMsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuY2xvc2VNZUxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCB0cmlnZ2VyLCBsaXN0ZW5lcikge1xuICBsZXQgdGltZXIsIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuICAkKHdpbmRvdykub2ZmKHRyaWdnZXIpLm9uKHRyaWdnZXIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGltZXIpIHsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgbGlzdGVuZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgZGVib3VuY2UgfHwgMTApOy8vZGVmYXVsdCB0aW1lIHRvIGVtaXQgc2Nyb2xsIGV2ZW50XG4gIH0pO1xufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1yZXNpemVdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdyZXNpemUuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwucmVzaXplTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtc2Nyb2xsXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAnc2Nyb2xsLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnNjcm9sbExpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyID0gZnVuY3Rpb24oJGVsZW0pIHtcbiAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpeyByZXR1cm4gZmFsc2U7IH1cbiAgbGV0ICRub2RlcyA9ICRlbGVtLmZpbmQoJ1tkYXRhLXJlc2l6ZV0sIFtkYXRhLXNjcm9sbF0sIFtkYXRhLW11dGF0ZV0nKTtcblxuICAvL2VsZW1lbnQgY2FsbGJhY2tcbiAgdmFyIGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25SZWNvcmRzTGlzdCkge1xuICAgIHZhciAkdGFyZ2V0ID0gJChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnRhcmdldCk7XG5cbiAgICAvL3RyaWdnZXIgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50IGRlcGVuZGluZyBvbiB0eXBlXG4gICAgc3dpdGNoIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhdHRyaWJ1dGVzXCI6XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJzY3JvbGxcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInLCBbJHRhcmdldCwgd2luZG93LnBhZ2VZT2Zmc2V0XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInJlc2l6ZVwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0XSk7XG4gICAgICAgICB9XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJjaGlsZExpc3RcIjpcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvL25vdGhpbmdcbiAgICB9XG4gIH07XG5cbiAgaWYgKCRub2Rlcy5sZW5ndGgpIHtcbiAgICAvL2ZvciBlYWNoIGVsZW1lbnQgdGhhdCBuZWVkcyB0byBsaXN0ZW4gZm9yIHJlc2l6aW5nLCBzY3JvbGxpbmcsIG9yIG11dGF0aW9uIGFkZCBhIHNpbmdsZSBvYnNlcnZlclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9ICRub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHZhciBlbGVtZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uKTtcbiAgICAgIGVsZW1lbnRPYnNlcnZlci5vYnNlcnZlKCRub2Rlc1tpXSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFtcImRhdGEtZXZlbnRzXCIsIFwic3R5bGVcIl0gfSk7XG4gICAgfVxuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuXG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIoKTtcbn1cblxuXG5UcmlnZ2Vycy5pbml0ID0gZnVuY3Rpb24gKCQsIEZvdW5kYXRpb24pIHtcbiAgb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgIT09IHRydWUpIHtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMoKTtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgICQudHJpZ2dlcnNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZihGb3VuZGF0aW9uKSB7XG4gICAgRm91bmRhdGlvbi5UcmlnZ2VycyA9IFRyaWdnZXJzO1xuICAgIC8vIExlZ2FjeSBpbmNsdWRlZCB0byBiZSBiYWNrd2FyZHMgY29tcGF0aWJsZSBmb3Igbm93LlxuICAgIEZvdW5kYXRpb24uSUhlYXJZb3UgPSBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzXG4gIH1cbn1cblxuZXhwb3J0IHtUcmlnZ2Vyc307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
