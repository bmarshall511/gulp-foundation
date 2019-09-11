(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.motion"), require("./foundation.util.touch"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.keyboard", "./foundation.util.motion", "./foundation.util.touch", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.slider"] = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.motion"), require("./foundation.util.touch"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.slider"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.touch"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE__foundation_util_touch__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 15);
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
      "./js/entries/plugins/foundation.slider.js":
      /*!*************************************************!*\
        !*** ./js/entries/plugins/foundation.slider.js ***!
        \*************************************************/

      /*! exports provided: Foundation, Slider */

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


        var _foundation_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.slider */
        "./js/foundation.slider.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Slider", function () {
          return _foundation_slider__WEBPACK_IMPORTED_MODULE_1__["Slider"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_slider__WEBPACK_IMPORTED_MODULE_1__["Slider"], 'Slider');
        /***/

      },

      /***/
      "./js/foundation.slider.js":
      /*!*********************************!*\
        !*** ./js/foundation.slider.js ***!
        \*********************************/

      /*! exports provided: Slider */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Slider", function () {
          return Slider;
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


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.motion */
        "./foundation.util.motion");
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.util.touch */
        "./foundation.util.touch");
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_touch__WEBPACK_IMPORTED_MODULE_4__);
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
         * Slider module.
         * @module foundation.slider
         * @requires foundation.util.motion
         * @requires foundation.util.triggers
         * @requires foundation.util.keyboard
         * @requires foundation.util.touch
         */


        var Slider =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(Slider, _Plugin);

          function Slider() {
            _classCallCheck(this, Slider);

            return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
          }

          _createClass(Slider, [{
            key: "_setup",

            /**
             * Creates a new instance of a slider control.
             * @class
             * @name Slider
             * @param {jQuery} element - jQuery object to make into a slider control.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Slider.defaults, this.$element.data(), options);
              this.className = 'Slider'; // ie9 back compat
              // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.

              _foundation_util_touch__WEBPACK_IMPORTED_MODULE_4__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              this._init();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Slider', {
                'ltr': {
                  'ARROW_RIGHT': 'increase',
                  'ARROW_UP': 'increase',
                  'ARROW_DOWN': 'decrease',
                  'ARROW_LEFT': 'decrease',
                  'SHIFT_ARROW_RIGHT': 'increase_fast',
                  'SHIFT_ARROW_UP': 'increase_fast',
                  'SHIFT_ARROW_DOWN': 'decrease_fast',
                  'SHIFT_ARROW_LEFT': 'decrease_fast',
                  'HOME': 'min',
                  'END': 'max'
                },
                'rtl': {
                  'ARROW_LEFT': 'increase',
                  'ARROW_RIGHT': 'decrease',
                  'SHIFT_ARROW_LEFT': 'increase_fast',
                  'SHIFT_ARROW_RIGHT': 'decrease_fast'
                }
              });
            }
            /**
             * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
             * @function
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              this.inputs = this.$element.find('input');
              this.handles = this.$element.find('[data-slider-handle]');
              this.$handle = this.handles.eq(0);
              this.$input = this.inputs.length ? this.inputs.eq(0) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle.attr('aria-controls')));
              this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

              var isDbl = false,
                  _this = this;

              if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
                this.options.disabled = true;
                this.$element.addClass(this.options.disabledClass);
              }

              if (!this.inputs.length) {
                this.inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()().add(this.$input);
                this.options.binding = true;
              }

              this._setInitAttr(0);

              if (this.handles[1]) {
                this.options.doubleSided = true;
                this.$handle2 = this.handles.eq(1);
                this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(this.$handle2.attr('aria-controls')));

                if (!this.inputs[1]) {
                  this.inputs = this.inputs.add(this.$input2);
                }

                isDbl = true; // this.$handle.triggerHandler('click.zf.slider');

                this._setInitAttr(1);
              } // Set handle positions


              this.setHandles();

              this._events();
            }
          }, {
            key: "setHandles",
            value: function setHandles() {
              var _this2 = this;

              if (this.handles[1]) {
                this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function () {
                  _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val(), true);
                });
              } else {
                this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
              }
            }
          }, {
            key: "_reflow",
            value: function _reflow() {
              this.setHandles();
            }
            /**
            * @function
            * @private
            * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
            */

          }, {
            key: "_pctOfBar",
            value: function _pctOfBar(value) {
              var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);

              switch (this.options.positionValueFunction) {
                case "pow":
                  pctOfBar = this._logTransform(pctOfBar);
                  break;

                case "log":
                  pctOfBar = this._powTransform(pctOfBar);
                  break;
              }

              return pctOfBar.toFixed(2);
            }
            /**
            * @function
            * @private
            * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
            */

          }, {
            key: "_value",
            value: function _value(pctOfBar) {
              switch (this.options.positionValueFunction) {
                case "pow":
                  pctOfBar = this._powTransform(pctOfBar);
                  break;

                case "log":
                  pctOfBar = this._logTransform(pctOfBar);
                  break;
              }

              var value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);
              return value;
            }
            /**
            * @function
            * @private
            * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
            */

          }, {
            key: "_logTransform",
            value: function _logTransform(value) {
              return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
            }
            /**
            * @function
            * @private
            * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
            */

          }, {
            key: "_powTransform",
            value: function _powTransform(value) {
              return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
            }
            /**
             * Sets the position of the selected handle and fill bar.
             * @function
             * @private
             * @param {jQuery} $hndl - the selected handle to move.
             * @param {Number} location - floating point between the start and end values of the slider bar.
             * @param {Function} cb - callback function to fire on completion.
             * @fires Slider#moved
             * @fires Slider#changed
             */

          }, {
            key: "_setHandlePos",
            value: function _setHandlePos($hndl, location, noInvert, cb) {
              // don't move if the slider has been disabled since its initialization
              if (this.$element.hasClass(this.options.disabledClass)) {
                return;
              } //might need to alter that slightly for bars that will have odd number selections.


              location = parseFloat(location); //on input change events, convert string to number...grumble.
              // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max

              if (location < this.options.start) {
                location = this.options.start;
              } else if (location > this.options.end) {
                location = this.options.end;
              }

              var isDbl = this.options.doubleSided; //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
              //for click and drag events, it's weird due to the scale(-1, 1) css property

              if (this.options.vertical && !noInvert) {
                location = this.options.end - location;
              }

              if (isDbl) {
                //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
                if (this.handles.index($hndl) === 0) {
                  var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
                  location = location >= h2Val ? h2Val - this.options.step : location;
                } else {
                  var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
                  location = location <= h1Val ? h1Val + this.options.step : location;
                }
              }

              var _this = this,
                  vert = this.options.vertical,
                  hOrW = vert ? 'height' : 'width',
                  lOrT = vert ? 'top' : 'left',
                  handleDim = $hndl[0].getBoundingClientRect()[hOrW],
                  elemDim = this.$element[0].getBoundingClientRect()[hOrW],
                  //percentage of bar min/max value based on click or drag point
              pctOfBar = this._pctOfBar(location),
                  //number of actual pixels to shift the handle, based on the percentage obtained above
              pxToMove = (elemDim - handleDim) * pctOfBar,
                  //percentage of bar to shift the handle
              movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal); //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value


              location = parseFloat(location.toFixed(this.options.decimal)); // declare empty object for css adjustments, only used with 2 handled-sliders

              var css = {};

              this._setValues($hndl, location); // TODO update to calculate based on values set to respective inputs??


              if (isDbl) {
                var isLeftHndl = this.handles.index($hndl) === 0,
                    //empty variable, will be used for min-height/width for fill bar
                dim,
                    //percentage w/h of the handle compared to the slider bar
                handlePct = ~~(percent(handleDim, elemDim) * 100); //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar

                if (isLeftHndl) {
                  //left or top percentage value to apply to the fill bar.
                  css[lOrT] = "".concat(movement, "%"); //calculate the new min-height/width for the fill bar.

                  dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct; //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
                  //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.

                  if (cb && typeof cb === 'function') {
                    cb();
                  } //this is only needed for the initialization of 2 handled sliders

                } else {
                  //just caching the value of the left/bottom handle's left/top property
                  var handlePos = parseFloat(this.$handle[0].style[lOrT]); //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
                  //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself

                  dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
                } // assign the min-height/width to our css object


                css["min-".concat(hOrW)] = "".concat(dim, "%");
              }

              this.$element.one('finished.zf.animate', function () {
                /**
                 * Fires when the handle is done moving.
                 * @event Slider#moved
                 */
                _this.$element.trigger('moved.zf.slider', [$hndl]);
              }); //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.

              var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;
              Object(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__["Move"])(moveTime, $hndl, function () {
                // adjusting the left/top property of the handle, based on the percentage calculated above
                // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
                // fall back to next best guess.
                if (isNaN(movement)) {
                  $hndl.css(lOrT, "".concat(pctOfBar * 100, "%"));
                } else {
                  $hndl.css(lOrT, "".concat(movement, "%"));
                }

                if (!_this.options.doubleSided) {
                  //if single-handled, a simple method to expand the fill bar
                  _this.$fill.css(hOrW, "".concat(pctOfBar * 100, "%"));
                } else {
                  //otherwise, use the css object we created above
                  _this.$fill.css(css);
                }
              });
              /**
               * Fires when the value has not been change for a given time.
               * @event Slider#changed
               */

              clearTimeout(_this.timeout);
              _this.timeout = setTimeout(function () {
                _this.$element.trigger('changed.zf.slider', [$hndl]);
              }, _this.options.changedDelay);
            }
            /**
             * Sets the initial attribute for the slider element.
             * @function
             * @private
             * @param {Number} idx - index of the current handle/input to use.
             */

          }, {
            key: "_setInitAttr",
            value: function _setInitAttr(idx) {
              var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
              var id = this.inputs.eq(idx).attr('id') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'slider');
              this.inputs.eq(idx).attr({
                'id': id,
                'max': this.options.end,
                'min': this.options.start,
                'step': this.options.step
              });
              this.inputs.eq(idx).val(initVal);
              this.handles.eq(idx).attr({
                'role': 'slider',
                'aria-controls': id,
                'aria-valuemax': this.options.end,
                'aria-valuemin': this.options.start,
                'aria-valuenow': initVal,
                'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
                'tabindex': 0
              });
            }
            /**
             * Sets the input and `aria-valuenow` values for the slider element.
             * @function
             * @private
             * @param {jQuery} $handle - the currently selected handle.
             * @param {Number} val - floating point of the new value.
             */

          }, {
            key: "_setValues",
            value: function _setValues($handle, val) {
              var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
              this.inputs.eq(idx).val(val);
              $handle.attr('aria-valuenow', val);
            }
            /**
             * Handles events on the slider element.
             * Calculates the new location of the current handle.
             * If there are two handles and the bar was clicked, it determines which handle to move.
             * @function
             * @private
             * @param {Object} e - the `event` object passed from the listener.
             * @param {jQuery} $handle - the current handle to calculate for, if selected.
             * @param {Number} val - floating point number for the new value of the slider.
             * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
             */

          }, {
            key: "_handleEvent",
            value: function _handleEvent(e, $handle, val) {
              var value, hasVal;

              if (!val) {
                //click or drag events
                e.preventDefault();

                var _this = this,
                    vertical = this.options.vertical,
                    param = vertical ? 'height' : 'width',
                    direction = vertical ? 'top' : 'left',
                    eventOffset = vertical ? e.pageY : e.pageX,
                    halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
                    barDim = this.$element[0].getBoundingClientRect()[param],
                    windowScroll = vertical ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft();

                var elemOffset = this.$element.offset()[direction]; // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
                // best way to guess this is simulated is if clientY == pageY

                if (e.clientY === e.pageY) {
                  eventOffset = eventOffset + windowScroll;
                }

                var eventFromBar = eventOffset - elemOffset;
                var barXY;

                if (eventFromBar < 0) {
                  barXY = 0;
                } else if (eventFromBar > barDim) {
                  barXY = barDim;
                } else {
                  barXY = eventFromBar;
                }

                var offsetPct = percent(barXY, barDim);
                value = this._value(offsetPct); // turn everything around for RTL, yay math!

                if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["rtl"])() && !this.options.vertical) {
                  value = this.options.end - value;
                }

                value = _this._adjustValue(null, value); //boolean flag for the setHandlePos fn, specifically for vertical sliders

                hasVal = false;

                if (!$handle) {
                  //figure out which handle it is, pass it to the next function.
                  var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
                      secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
                  $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
                }
              } else {
                //change event on input
                value = this._adjustValue(null, val);
                hasVal = true;
              }

              this._setHandlePos($handle, value, hasVal);
            }
            /**
             * Adjustes value for handle in regard to step value. returns adjusted value
             * @function
             * @private
             * @param {jQuery} $handle - the selected handle.
             * @param {Number} value - value to adjust. used if $handle is falsy
             */

          }, {
            key: "_adjustValue",
            value: function _adjustValue($handle, value) {
              var val,
                  step = this.options.step,
                  div = parseFloat(step / 2),
                  left,
                  prev_val,
                  next_val;

              if (!!$handle) {
                val = parseFloat($handle.attr('aria-valuenow'));
              } else {
                val = value;
              }

              if (val >= 0) {
                left = val % step;
              } else {
                left = step + val % step;
              }

              prev_val = val - left;
              next_val = prev_val + step;

              if (left === 0) {
                return val;
              }

              val = val >= prev_val + div ? next_val : prev_val;
              return val;
            }
            /**
             * Adds event listeners to the slider elements.
             * @function
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              this._eventsForHandle(this.$handle);

              if (this.handles[1]) {
                this._eventsForHandle(this.$handle2);
              }
            }
            /**
             * Adds event listeners a particular handle
             * @function
             * @private
             * @param {jQuery} $handle - the current handle to apply listeners to.
             */

          }, {
            key: "_eventsForHandle",
            value: function _eventsForHandle($handle) {
              var _this = this,
                  curHandle,
                  timer;

              var handleChangeEvent = function handleChangeEvent(e) {
                var idx = _this.inputs.index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));

                _this._handleEvent(e, _this.handles.eq(idx), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
              }; // IE only triggers the change event when the input loses focus which strictly follows the HTML specification
              // listen for the enter key and trigger a change
              // @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events


              this.inputs.off('keyup.zf.slider').on('keyup.zf.slider', function (e) {
                if (e.keyCode == 13) handleChangeEvent.call(this, e);
              });
              this.inputs.off('change.zf.slider').on('change.zf.slider', handleChangeEvent);

              if (this.options.clickSelect) {
                this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {
                  if (_this.$element.data('dragging')) {
                    return false;
                  }

                  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('[data-slider-handle]')) {
                    if (_this.options.doubleSided) {
                      _this._handleEvent(e);
                    } else {
                      _this._handleEvent(e, _this.$handle);
                    }
                  }
                });
              }

              if (this.options.draggable) {
                this.handles.addTouch();
                var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
                $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {
                  $handle.addClass('is-dragging');

                  _this.$fill.addClass('is-dragging'); //


                  _this.$element.data('dragging', true);

                  curHandle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
                  $body.on('mousemove.zf.slider', function (e) {
                    e.preventDefault();

                    _this._handleEvent(e, curHandle);
                  }).on('mouseup.zf.slider', function (e) {
                    _this._handleEvent(e, curHandle);

                    $handle.removeClass('is-dragging');

                    _this.$fill.removeClass('is-dragging');

                    _this.$element.data('dragging', false);

                    $body.off('mousemove.zf.slider mouseup.zf.slider');
                  });
                }) // prevent events triggered by touch
                .on('selectstart.zf.slider touchmove.zf.slider', function (e) {
                  e.preventDefault();
                });
              }

              $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {
                var _$handle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
                    oldValue = parseFloat(_this.inputs.eq(idx).val()),
                    newValue; // handle keyboard event with keyboard util


                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Slider', {
                  decrease: function decrease() {
                    newValue = oldValue - _this.options.step;
                  },
                  increase: function increase() {
                    newValue = oldValue + _this.options.step;
                  },
                  decrease_fast: function decrease_fast() {
                    newValue = oldValue - _this.options.step * 10;
                  },
                  increase_fast: function increase_fast() {
                    newValue = oldValue + _this.options.step * 10;
                  },
                  min: function min() {
                    newValue = _this.options.start;
                  },
                  max: function max() {
                    newValue = _this.options.end;
                  },
                  handled: function handled() {
                    // only set handle pos when event was handled specially
                    e.preventDefault();

                    _this._setHandlePos(_$handle, newValue, true);
                  }
                });
                /*if (newValue) { // if pressed key has special function, update value
                  e.preventDefault();
                  _this._setHandlePos(_$handle, newValue);
                }*/

              });
            }
            /**
             * Destroys the slider plugin.
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.handles.off('.zf.slider');
              this.inputs.off('.zf.slider');
              this.$element.off('.zf.slider');
              clearTimeout(this.timeout);
            }
          }]);

          return Slider;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

        Slider.defaults = {
          /**
           * Minimum value for the slider scale.
           * @option
           * @type {number}
           * @default 0
           */
          start: 0,

          /**
           * Maximum value for the slider scale.
           * @option
           * @type {number}
           * @default 100
           */
          end: 100,

          /**
           * Minimum value change per change event.
           * @option
           * @type {number}
           * @default 1
           */
          step: 1,

          /**
           * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
           * @option
           * @type {number}
           * @default 0
           */
          initialStart: 0,

          /**
           * Value at which the right handle/second input should be set to on initialization.
           * @option
           * @type {number}
           * @default 100
           */
          initialEnd: 100,

          /**
           * Allows the input to be located outside the container and visible. Set to by the JS
           * @option
           * @type {boolean}
           * @default false
           */
          binding: false,

          /**
           * Allows the user to click/tap on the slider bar to select a value.
           * @option
           * @type {boolean}
           * @default true
           */
          clickSelect: true,

          /**
           * Set to true and use the `vertical` class to change alignment to vertical.
           * @option
           * @type {boolean}
           * @default false
           */
          vertical: false,

          /**
           * Allows the user to drag the slider handle(s) to select a value.
           * @option
           * @type {boolean}
           * @default true
           */
          draggable: true,

          /**
           * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
           * @option
           * @type {boolean}
           * @default false
           */
          disabled: false,

          /**
           * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
           * @option
           * @type {boolean}
           * @default false
           */
          doubleSided: false,

          /**
           * Potential future feature.
           */
          // steps: 100,

          /**
           * Number of decimal places the plugin should go to for floating point precision.
           * @option
           * @type {number}
           * @default 2
           */
          decimal: 2,

          /**
           * Time delay for dragged elements.
           */
          // dragDelay: 0,

          /**
           * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
           * @option
           * @type {number}
           * @default 200
           */
          moveTime: 200,
          //update this if changing the transition time in the sass

          /**
           * Class applied to disabled sliders.
           * @option
           * @type {string}
           * @default 'disabled'
           */
          disabledClass: 'disabled',

          /**
           * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
           * @option
           * @type {boolean}
           * @default false
           */
          invertVertical: false,

          /**
           * Milliseconds before the `changed.zf-slider` event is triggered after value change.
           * @option
           * @type {number}
           * @default 500
           */
          changedDelay: 500,

          /**
          * Basevalue for non-linear sliders
          * @option
          * @type {number}
          * @default 5
          */
          nonLinearBase: 5,

          /**
          * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
          * @option
          * @type {string}
          * @default 'linear'
          */
          positionValueFunction: 'linear'
        };

        function percent(frac, num) {
          return frac / num;
        }

        function absPosition($handle, dir, clickPos, param) {
          return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
        }

        function baseLog(base, value) {
          return Math.log(value) / Math.log(base);
        }
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
      15:
      /*!*******************************************************!*\
        !*** multi ./js/entries/plugins/foundation.slider.js ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.slider.js */
        "./js/entries/plugins/foundation.slider.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uc2xpZGVyLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnNsaWRlci5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlNsaWRlciIsImVsZW1lbnQiLCJvcHRpb25zIiwiJCIsIlRvdWNoIiwiVHJpZ2dlcnMiLCJLZXlib2FyZCIsImlzRGJsIiwiX3RoaXMiLCJ2YWx1ZSIsInBjdE9mQmFyIiwicGVyY2VudCIsInBhcnNlRmxvYXQiLCJiYXNlTG9nIiwiTWF0aCIsIiRobmRsIiwibG9jYXRpb24iLCJub0ludmVydCIsImNiIiwiaDJWYWwiLCJoMVZhbCIsInZlcnQiLCJoT3JXIiwibE9yVCIsImhhbmRsZURpbSIsImVsZW1EaW0iLCJweFRvTW92ZSIsIm1vdmVtZW50IiwiY3NzIiwiaXNMZWZ0SG5kbCIsImhhbmRsZVBjdCIsImRpbSIsImhhbmRsZVBvcyIsImlzTmFOIiwibW92ZVRpbWUiLCJNb3ZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImlkeCIsImluaXRWYWwiLCJpZCIsIkdldFlvRGlnaXRzIiwic3RlcCIsIiRoYW5kbGUiLCJ2YWwiLCJlIiwidmVydGljYWwiLCJwYXJhbSIsImRpcmVjdGlvbiIsImV2ZW50T2Zmc2V0IiwiaGFsZk9mSGFuZGxlIiwiYmFyRGltIiwid2luZG93U2Nyb2xsIiwiZWxlbU9mZnNldCIsImV2ZW50RnJvbUJhciIsImJhclhZIiwib2Zmc2V0UGN0IiwiUnRsIiwiaGFzVmFsIiwiZmlyc3RIbmRsUG9zIiwiYWJzUG9zaXRpb24iLCJzZWNuZEhuZGxQb3MiLCJkaXYiLCJsZWZ0IiwicHJldl92YWwiLCJuZXh0X3ZhbCIsImhhbmRsZUNoYW5nZUV2ZW50IiwiJGJvZHkiLCJjdXJIYW5kbGUiLCJfJGhhbmRsZSIsIm9sZFZhbHVlIiwiZGVjcmVhc2UiLCJuZXdWYWx1ZSIsImluY3JlYXNlIiwiZGVjcmVhc2VfZmFzdCIsImluY3JlYXNlX2Zhc3QiLCJtaW4iLCJtYXgiLCJoYW5kbGVkIiwiUGx1Z2luIiwic3RhcnQiLCJlbmQiLCJpbml0aWFsU3RhcnQiLCJpbml0aWFsRW5kIiwiYmluZGluZyIsImNsaWNrU2VsZWN0IiwiZHJhZ2dhYmxlIiwiZGlzYWJsZWQiLCJkb3VibGVTaWRlZCIsImRlY2ltYWwiLCJkaXNhYmxlZENsYXNzIiwiaW52ZXJ0VmVydGljYWwiLCJjaGFuZ2VkRGVsYXkiLCJub25MaW5lYXJCYXNlIiwicG9zaXRpb25WYWx1ZUZ1bmN0aW9uIiwiZnJhYyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJwcmVmaXhlcyIsImkiLCJ3aW5kb3ciLCJ0cmlnZ2VycyIsImVsIiwidHlwZSIsIkxpc3RlbmVycyIsIkJhc2ljIiwiR2xvYmFsIiwiSW5pdGlhbGl6ZXJzIiwib3Blbkxpc3RlbmVyIiwiY2xvc2VMaXN0ZW5lciIsInRvZ2dsZUxpc3RlbmVyIiwiY2xvc2VhYmxlTGlzdGVuZXIiLCJhbmltYXRpb24iLCJNb3Rpb24iLCJ0b2dnbGVGb2N1c0xpc3RlbmVyIiwiJGVsZW0iLCJyZXNpemVMaXN0ZW5lciIsIiRub2RlcyIsInNjcm9sbExpc3RlbmVyIiwiY2xvc2VNZUxpc3RlbmVyIiwicGx1Z2luIiwicGx1Z2lucyIsInlldGlCb3hlcyIsInBsdWdOYW1lcyIsInBsdWdpbk5hbWUiLCJjb25zb2xlIiwibGlzdGVuZXJzIiwiYXJncyIsIkFycmF5IiwidGltZXIiLCJsaXN0ZW5lciIsImRlYm91bmNlIiwiZGVib3VuY2VHbG9iYWxMaXN0ZW5lciIsImxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24iLCIkdGFyZ2V0IiwibXV0YXRpb25SZWNvcmRzTGlzdCIsImVsZW1lbnRPYnNlcnZlciIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsImF0dHJpYnV0ZUZpbHRlciIsIiRkb2N1bWVudCIsIm9uTG9hZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEseUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLDRCQUFBLEVBQUEsMEJBQUEsRUFBQSx5QkFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLG1CQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHlCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsbUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSx3QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSx1QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLHFEQUFBLEVBQUEsbURBQUEsRUFBQSxrREFBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVBQUEsR0FBQTtBQUEyQixpQkFBQSxNQUFBLENBQUEsU0FBQSxDQUFBO0FBQTRCLFNBRHZEO0FBRUE7QUFBQSxpQkFBQSxnQkFBQSxHQUFBO0FBQWlDLGlCQUFBLE1BQUE7QUFBZSxTQUZoRDtBQUdBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBO0FBQ0E7OztBQUFBLGVBQUEsTUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7QUFBc0QsZUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsQ0FBQTtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUEsYUFBQSxtQkFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLDRDQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxxREFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsbURBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtEQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSw2Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLDZDQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLCtDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLG1DQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFFBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsK0NBQUEsQ0FBQSxRQUFBLENBQUE7QUFBQSxTQUFBOztBQ0dBQSxRQUFBQSw2Q0FBQUEsQ0FBQUEsWUFBQUEsQ0FBQUEsQ0FBQUEsTUFBQUEsQ0FBa0JDLCtDQUFBQSxDQUFsQkQsUUFBa0JDLENBQWxCRCxFQUFBQSxRQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLE1BQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFlBQUEsbUNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsZ0JBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJDQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1D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QUFBQSxDQUFBQSx5QkFBQUEsQ0FBQUEsU0FBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFMRkEsU0FBQUE7O0FBU0FBLFFBQUFBLFFBQVEsQ0FBUkEsSUFBQUEsR0FBZ0IsVUFBQSxDQUFBLEVBQUEsVUFBQSxFQUF5QjtBQUN2Q3lJLFVBQUFBLE1BQUFBLENBQUFBLG1EQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxDQUFBQSxDQUFPM0ksQ0FBQyxDQUFGLE1BQUUsQ0FBUjJJLEVBQWtCLFlBQVk7QUFDNUIsZ0JBQUkzSSxDQUFDLENBQURBLG1CQUFBQSxLQUFKLElBQUEsRUFBb0M7QUFDbENFLGNBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBO0FBQ0FBLGNBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBO0FBQ0FGLGNBQUFBLENBQUMsQ0FBREEsbUJBQUFBLEdBQUFBLElBQUFBO0FBQ0Q7QUFMSDJJLFdBQUFBOztBQVFBLGNBQUEsVUFBQSxFQUFlO0FBQ2IvSSxZQUFBQSxVQUFVLENBQVZBLFFBQUFBLEdBRGEsUUFDYkEsQ0FEYSxDQUViOztBQUNBQSxZQUFBQSxVQUFVLENBQVZBLFFBQUFBLEdBQXNCTSxRQUFRLENBQVJBLFlBQUFBLENBQXRCTixrQkFBQUE7QUFDRDtBQWJITSxTQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25QQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTlVBO0NBVkEiLCJmaWxlIjoiZm91bmRhdGlvbi9mb3VuZGF0aW9uLnNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC50b3VjaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwudG91Y2hcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5zbGlkZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwudG91Y2hcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnNsaWRlclwiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5tb3Rpb25cIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC50b3VjaFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX21vdGlvbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfdG91Y2hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uc2xpZGVyJztcbkZvdW5kYXRpb24ucGx1Z2luKFNsaWRlciwgJ1NsaWRlcicpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBTbGlkZXIgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgTW92ZSB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1vdGlvbic7XG5pbXBvcnQgeyBHZXRZb0RpZ2l0cywgcnRsIGFzIFJ0bCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcblxuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcblxuaW1wb3J0IHsgVG91Y2ggfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC50b3VjaCc7XG5cbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuLyoqXG4gKiBTbGlkZXIgbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLnNsaWRlclxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5tb3Rpb25cbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnNcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwudG91Y2hcbiAqL1xuXG5jbGFzcyBTbGlkZXIgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhIHNsaWRlciBjb250cm9sLlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgU2xpZGVyXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBtYWtlIGludG8gYSBzbGlkZXIgY29udHJvbC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgU2xpZGVyLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnU2xpZGVyJzsgLy8gaWU5IGJhY2sgY29tcGF0XG5cbiAgLy8gVG91Y2ggYW5kIFRyaWdnZXJzIGluaXRzIGFyZSBpZGVtcG90ZW50LCB3ZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIGl0J3MgaW5pdGlhbGllZC5cbiAgICBUb3VjaC5pbml0KCQpO1xuICAgIFRyaWdnZXJzLmluaXQoJCk7XG5cbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignU2xpZGVyJywge1xuICAgICAgJ2x0cic6IHtcbiAgICAgICAgJ0FSUk9XX1JJR0hUJzogJ2luY3JlYXNlJyxcbiAgICAgICAgJ0FSUk9XX1VQJzogJ2luY3JlYXNlJyxcbiAgICAgICAgJ0FSUk9XX0RPV04nOiAnZGVjcmVhc2UnLFxuICAgICAgICAnQVJST1dfTEVGVCc6ICdkZWNyZWFzZScsXG4gICAgICAgICdTSElGVF9BUlJPV19SSUdIVCc6ICdpbmNyZWFzZV9mYXN0JyxcbiAgICAgICAgJ1NISUZUX0FSUk9XX1VQJzogJ2luY3JlYXNlX2Zhc3QnLFxuICAgICAgICAnU0hJRlRfQVJST1dfRE9XTic6ICdkZWNyZWFzZV9mYXN0JyxcbiAgICAgICAgJ1NISUZUX0FSUk9XX0xFRlQnOiAnZGVjcmVhc2VfZmFzdCcsXG4gICAgICAgICdIT01FJzogJ21pbicsXG4gICAgICAgICdFTkQnOiAnbWF4J1xuICAgICAgfSxcbiAgICAgICdydGwnOiB7XG4gICAgICAgICdBUlJPV19MRUZUJzogJ2luY3JlYXNlJyxcbiAgICAgICAgJ0FSUk9XX1JJR0hUJzogJ2RlY3JlYXNlJyxcbiAgICAgICAgJ1NISUZUX0FSUk9XX0xFRlQnOiAnaW5jcmVhc2VfZmFzdCcsXG4gICAgICAgICdTSElGVF9BUlJPV19SSUdIVCc6ICdkZWNyZWFzZV9mYXN0J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpbGl6ZXMgdGhlIHBsdWdpbiBieSByZWFkaW5nL3NldHRpbmcgYXR0cmlidXRlcywgY3JlYXRpbmcgY29sbGVjdGlvbnMgYW5kIHNldHRpbmcgdGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIGhhbmRsZShzKS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB0aGlzLmlucHV0cyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXQnKTtcbiAgICB0aGlzLmhhbmRsZXMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXNsaWRlci1oYW5kbGVdJyk7XG5cbiAgICB0aGlzLiRoYW5kbGUgPSB0aGlzLmhhbmRsZXMuZXEoMCk7XG4gICAgdGhpcy4kaW5wdXQgPSB0aGlzLmlucHV0cy5sZW5ndGggPyB0aGlzLmlucHV0cy5lcSgwKSA6ICQoYCMke3RoaXMuJGhhbmRsZS5hdHRyKCdhcmlhLWNvbnRyb2xzJyl9YCk7XG4gICAgdGhpcy4kZmlsbCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtc2xpZGVyLWZpbGxdJykuY3NzKHRoaXMub3B0aW9ucy52ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJywgMCk7XG5cbiAgICB2YXIgaXNEYmwgPSBmYWxzZSxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgdGhpcy4kZWxlbWVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcykpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5kaXNhYmxlZENsYXNzKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlucHV0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5wdXRzID0gJCgpLmFkZCh0aGlzLiRpbnB1dCk7XG4gICAgICB0aGlzLm9wdGlvbnMuYmluZGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0SW5pdEF0dHIoMCk7XG5cbiAgICBpZiAodGhpcy5oYW5kbGVzWzFdKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZG91YmxlU2lkZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kaGFuZGxlMiA9IHRoaXMuaGFuZGxlcy5lcSgxKTtcbiAgICAgIHRoaXMuJGlucHV0MiA9IHRoaXMuaW5wdXRzLmxlbmd0aCA+IDEgPyB0aGlzLmlucHV0cy5lcSgxKSA6ICQoYCMke3RoaXMuJGhhbmRsZTIuYXR0cignYXJpYS1jb250cm9scycpfWApO1xuXG4gICAgICBpZiAoIXRoaXMuaW5wdXRzWzFdKSB7XG4gICAgICAgIHRoaXMuaW5wdXRzID0gdGhpcy5pbnB1dHMuYWRkKHRoaXMuJGlucHV0Mik7XG4gICAgICB9XG4gICAgICBpc0RibCA9IHRydWU7XG5cbiAgICAgIC8vIHRoaXMuJGhhbmRsZS50cmlnZ2VySGFuZGxlcignY2xpY2suemYuc2xpZGVyJyk7XG4gICAgICB0aGlzLl9zZXRJbml0QXR0cigxKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaGFuZGxlIHBvc2l0aW9uc1xuICAgIHRoaXMuc2V0SGFuZGxlcygpO1xuXG4gICAgdGhpcy5fZXZlbnRzKCk7XG4gIH1cblxuICBzZXRIYW5kbGVzKCkge1xuICAgIGlmKHRoaXMuaGFuZGxlc1sxXSkge1xuICAgICAgdGhpcy5fc2V0SGFuZGxlUG9zKHRoaXMuJGhhbmRsZSwgdGhpcy5pbnB1dHMuZXEoMCkudmFsKCksIHRydWUsICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0SGFuZGxlUG9zKHRoaXMuJGhhbmRsZTIsIHRoaXMuaW5wdXRzLmVxKDEpLnZhbCgpLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRIYW5kbGVQb3ModGhpcy4kaGFuZGxlLCB0aGlzLmlucHV0cy5lcSgwKS52YWwoKSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgX3JlZmxvdygpIHtcbiAgICB0aGlzLnNldEhhbmRsZXMoKTtcbiAgfVxuICAvKipcbiAgKiBAZnVuY3Rpb25cbiAgKiBAcHJpdmF0ZVxuICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAtIGZsb2F0aW5nIHBvaW50ICh0aGUgdmFsdWUpIHRvIGJlIHRyYW5zZm9ybWVkIHVzaW5nIHRvIGEgcmVsYXRpdmUgcG9zaXRpb24gb24gdGhlIHNsaWRlciAodGhlIGludmVyc2Ugb2YgX3ZhbHVlKVxuICAqL1xuICBfcGN0T2ZCYXIodmFsdWUpIHtcbiAgICB2YXIgcGN0T2ZCYXIgPSBwZXJjZW50KHZhbHVlIC0gdGhpcy5vcHRpb25zLnN0YXJ0LCB0aGlzLm9wdGlvbnMuZW5kIC0gdGhpcy5vcHRpb25zLnN0YXJ0KVxuXG4gICAgc3dpdGNoKHRoaXMub3B0aW9ucy5wb3NpdGlvblZhbHVlRnVuY3Rpb24pIHtcbiAgICBjYXNlIFwicG93XCI6XG4gICAgICBwY3RPZkJhciA9IHRoaXMuX2xvZ1RyYW5zZm9ybShwY3RPZkJhcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibG9nXCI6XG4gICAgICBwY3RPZkJhciA9IHRoaXMuX3Bvd1RyYW5zZm9ybShwY3RPZkJhcik7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcGN0T2ZCYXIudG9GaXhlZCgyKVxuICB9XG5cbiAgLyoqXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKiBAcGFyYW0ge051bWJlcn0gcGN0T2ZCYXIgLSBmbG9hdGluZyBwb2ludCwgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBzbGlkZXIgKHR5cGljYWxseSBiZXR3ZWVuIDAtMSkgdG8gYmUgdHJhbnNmb3JtZWQgdG8gYSB2YWx1ZVxuICAqL1xuICBfdmFsdWUocGN0T2ZCYXIpIHtcbiAgICBzd2l0Y2godGhpcy5vcHRpb25zLnBvc2l0aW9uVmFsdWVGdW5jdGlvbikge1xuICAgIGNhc2UgXCJwb3dcIjpcbiAgICAgIHBjdE9mQmFyID0gdGhpcy5fcG93VHJhbnNmb3JtKHBjdE9mQmFyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsb2dcIjpcbiAgICAgIHBjdE9mQmFyID0gdGhpcy5fbG9nVHJhbnNmb3JtKHBjdE9mQmFyKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSAodGhpcy5vcHRpb25zLmVuZCAtIHRoaXMub3B0aW9ucy5zdGFydCkgKiBwY3RPZkJhciArIHBhcnNlRmxvYXQodGhpcy5vcHRpb25zLnN0YXJ0KTtcblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSBmbG9hdGluZyBwb2ludCAodHlwaWNhbGx5IGJldHdlZW4gMC0xKSB0byBiZSB0cmFuc2Zvcm1lZCB1c2luZyB0aGUgbG9nIGZ1bmN0aW9uXG4gICovXG4gIF9sb2dUcmFuc2Zvcm0odmFsdWUpIHtcbiAgICByZXR1cm4gYmFzZUxvZyh0aGlzLm9wdGlvbnMubm9uTGluZWFyQmFzZSwgKCh2YWx1ZSoodGhpcy5vcHRpb25zLm5vbkxpbmVhckJhc2UtMSkpKzEpKVxuICB9XG5cbiAgLyoqXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSBmbG9hdGluZyBwb2ludCAodHlwaWNhbGx5IGJldHdlZW4gMC0xKSB0byBiZSB0cmFuc2Zvcm1lZCB1c2luZyB0aGUgcG93ZXIgZnVuY3Rpb25cbiAgKi9cbiAgX3Bvd1RyYW5zZm9ybSh2YWx1ZSkge1xuICAgIHJldHVybiAoTWF0aC5wb3codGhpcy5vcHRpb25zLm5vbkxpbmVhckJhc2UsIHZhbHVlKSAtIDEpIC8gKHRoaXMub3B0aW9ucy5ub25MaW5lYXJCYXNlIC0gMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgc2VsZWN0ZWQgaGFuZGxlIGFuZCBmaWxsIGJhci5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkaG5kbCAtIHRoZSBzZWxlY3RlZCBoYW5kbGUgdG8gbW92ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxvY2F0aW9uIC0gZmxvYXRpbmcgcG9pbnQgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCB2YWx1ZXMgb2YgdGhlIHNsaWRlciBiYXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZmlyZSBvbiBjb21wbGV0aW9uLlxuICAgKiBAZmlyZXMgU2xpZGVyI21vdmVkXG4gICAqIEBmaXJlcyBTbGlkZXIjY2hhbmdlZFxuICAgKi9cbiAgX3NldEhhbmRsZVBvcygkaG5kbCwgbG9jYXRpb24sIG5vSW52ZXJ0LCBjYikge1xuICAgIC8vIGRvbid0IG1vdmUgaWYgdGhlIHNsaWRlciBoYXMgYmVlbiBkaXNhYmxlZCBzaW5jZSBpdHMgaW5pdGlhbGl6YXRpb25cbiAgICBpZiAodGhpcy4kZWxlbWVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9taWdodCBuZWVkIHRvIGFsdGVyIHRoYXQgc2xpZ2h0bHkgZm9yIGJhcnMgdGhhdCB3aWxsIGhhdmUgb2RkIG51bWJlciBzZWxlY3Rpb25zLlxuICAgIGxvY2F0aW9uID0gcGFyc2VGbG9hdChsb2NhdGlvbik7Ly9vbiBpbnB1dCBjaGFuZ2UgZXZlbnRzLCBjb252ZXJ0IHN0cmluZyB0byBudW1iZXIuLi5ncnVtYmxlLlxuXG4gICAgLy8gcHJldmVudCBzbGlkZXIgZnJvbSBydW5uaW5nIG91dCBvZiBib3VuZHMsIGlmIHZhbHVlIGV4Y2VlZHMgdGhlIGxpbWl0cyBzZXQgdGhyb3VnaCBvcHRpb25zLCBvdmVycmlkZSB0aGUgdmFsdWUgdG8gbWluL21heFxuICAgIGlmIChsb2NhdGlvbiA8IHRoaXMub3B0aW9ucy5zdGFydCkgeyBsb2NhdGlvbiA9IHRoaXMub3B0aW9ucy5zdGFydDsgfVxuICAgIGVsc2UgaWYgKGxvY2F0aW9uID4gdGhpcy5vcHRpb25zLmVuZCkgeyBsb2NhdGlvbiA9IHRoaXMub3B0aW9ucy5lbmQ7IH1cblxuICAgIHZhciBpc0RibCA9IHRoaXMub3B0aW9ucy5kb3VibGVTaWRlZDtcblxuICAgIC8vdGhpcyBpcyBmb3Igc2luZ2xlLWhhbmRsZWQgdmVydGljYWwgc2xpZGVycywgaXQgYWRqdXN0cyB0aGUgdmFsdWUgdG8gYWNjb3VudCBmb3IgdGhlIHNsaWRlciBiZWluZyBcInVwc2lkZS1kb3duXCJcbiAgICAvL2ZvciBjbGljayBhbmQgZHJhZyBldmVudHMsIGl0J3Mgd2VpcmQgZHVlIHRvIHRoZSBzY2FsZSgtMSwgMSkgY3NzIHByb3BlcnR5XG4gICAgaWYgKHRoaXMub3B0aW9ucy52ZXJ0aWNhbCAmJiAhbm9JbnZlcnQpIHtcbiAgICAgIGxvY2F0aW9uID0gdGhpcy5vcHRpb25zLmVuZCAtIGxvY2F0aW9uO1xuICAgIH1cblxuICAgIGlmIChpc0RibCkgeyAvL3RoaXMgYmxvY2sgaXMgdG8gcHJldmVudCAyIGhhbmRsZXMgZnJvbSBjcm9zc2luZyBlYWNob3RoZXIuIENvdWxkL3Nob3VsZCBiZSBpbXByb3ZlZC5cbiAgICAgIGlmICh0aGlzLmhhbmRsZXMuaW5kZXgoJGhuZGwpID09PSAwKSB7XG4gICAgICAgIHZhciBoMlZhbCA9IHBhcnNlRmxvYXQodGhpcy4kaGFuZGxlMi5hdHRyKCdhcmlhLXZhbHVlbm93JykpO1xuICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uID49IGgyVmFsID8gaDJWYWwgLSB0aGlzLm9wdGlvbnMuc3RlcCA6IGxvY2F0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGgxVmFsID0gcGFyc2VGbG9hdCh0aGlzLiRoYW5kbGUuYXR0cignYXJpYS12YWx1ZW5vdycpKTtcbiAgICAgICAgbG9jYXRpb24gPSBsb2NhdGlvbiA8PSBoMVZhbCA/IGgxVmFsICsgdGhpcy5vcHRpb25zLnN0ZXAgOiBsb2NhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICB2ZXJ0ID0gdGhpcy5vcHRpb25zLnZlcnRpY2FsLFxuICAgICAgICBoT3JXID0gdmVydCA/ICdoZWlnaHQnIDogJ3dpZHRoJyxcbiAgICAgICAgbE9yVCA9IHZlcnQgPyAndG9wJyA6ICdsZWZ0JyxcbiAgICAgICAgaGFuZGxlRGltID0gJGhuZGxbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbaE9yV10sXG4gICAgICAgIGVsZW1EaW0gPSB0aGlzLiRlbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2hPclddLFxuICAgICAgICAvL3BlcmNlbnRhZ2Ugb2YgYmFyIG1pbi9tYXggdmFsdWUgYmFzZWQgb24gY2xpY2sgb3IgZHJhZyBwb2ludFxuICAgICAgICBwY3RPZkJhciA9IHRoaXMuX3BjdE9mQmFyKGxvY2F0aW9uKSxcbiAgICAgICAgLy9udW1iZXIgb2YgYWN0dWFsIHBpeGVscyB0byBzaGlmdCB0aGUgaGFuZGxlLCBiYXNlZCBvbiB0aGUgcGVyY2VudGFnZSBvYnRhaW5lZCBhYm92ZVxuICAgICAgICBweFRvTW92ZSA9IChlbGVtRGltIC0gaGFuZGxlRGltKSAqIHBjdE9mQmFyLFxuICAgICAgICAvL3BlcmNlbnRhZ2Ugb2YgYmFyIHRvIHNoaWZ0IHRoZSBoYW5kbGVcbiAgICAgICAgbW92ZW1lbnQgPSAocGVyY2VudChweFRvTW92ZSwgZWxlbURpbSkgKiAxMDApLnRvRml4ZWQodGhpcy5vcHRpb25zLmRlY2ltYWwpO1xuICAgICAgICAvL2ZpeGluZyB0aGUgZGVjaW1hbCB2YWx1ZSBmb3IgdGhlIGxvY2F0aW9uIG51bWJlciwgaXMgcGFzc2VkIHRvIG90aGVyIG1ldGhvZHMgYXMgYSBmaXhlZCBmbG9hdGluZy1wb2ludCB2YWx1ZVxuICAgICAgICBsb2NhdGlvbiA9IHBhcnNlRmxvYXQobG9jYXRpb24udG9GaXhlZCh0aGlzLm9wdGlvbnMuZGVjaW1hbCkpO1xuICAgICAgICAvLyBkZWNsYXJlIGVtcHR5IG9iamVjdCBmb3IgY3NzIGFkanVzdG1lbnRzLCBvbmx5IHVzZWQgd2l0aCAyIGhhbmRsZWQtc2xpZGVyc1xuICAgIHZhciBjc3MgPSB7fTtcblxuICAgIHRoaXMuX3NldFZhbHVlcygkaG5kbCwgbG9jYXRpb24pO1xuXG4gICAgLy8gVE9ETyB1cGRhdGUgdG8gY2FsY3VsYXRlIGJhc2VkIG9uIHZhbHVlcyBzZXQgdG8gcmVzcGVjdGl2ZSBpbnB1dHM/P1xuICAgIGlmIChpc0RibCkge1xuICAgICAgdmFyIGlzTGVmdEhuZGwgPSB0aGlzLmhhbmRsZXMuaW5kZXgoJGhuZGwpID09PSAwLFxuICAgICAgICAgIC8vZW1wdHkgdmFyaWFibGUsIHdpbGwgYmUgdXNlZCBmb3IgbWluLWhlaWdodC93aWR0aCBmb3IgZmlsbCBiYXJcbiAgICAgICAgICBkaW0sXG4gICAgICAgICAgLy9wZXJjZW50YWdlIHcvaCBvZiB0aGUgaGFuZGxlIGNvbXBhcmVkIHRvIHRoZSBzbGlkZXIgYmFyXG4gICAgICAgICAgaGFuZGxlUGN0ID0gIH5+KHBlcmNlbnQoaGFuZGxlRGltLCBlbGVtRGltKSAqIDEwMCk7XG4gICAgICAvL2lmIGxlZnQgaGFuZGxlLCB0aGUgbWF0aCBpcyBzbGlnaHRseSBkaWZmZXJlbnQgdGhhbiBpZiBpdCdzIHRoZSByaWdodCBoYW5kbGUsIGFuZCB0aGUgbGVmdC90b3AgcHJvcGVydHkgbmVlZHMgdG8gYmUgY2hhbmdlZCBmb3IgdGhlIGZpbGwgYmFyXG4gICAgICBpZiAoaXNMZWZ0SG5kbCkge1xuICAgICAgICAvL2xlZnQgb3IgdG9wIHBlcmNlbnRhZ2UgdmFsdWUgdG8gYXBwbHkgdG8gdGhlIGZpbGwgYmFyLlxuICAgICAgICBjc3NbbE9yVF0gPSBgJHttb3ZlbWVudH0lYDtcbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIG5ldyBtaW4taGVpZ2h0L3dpZHRoIGZvciB0aGUgZmlsbCBiYXIuXG4gICAgICAgIGRpbSA9IHBhcnNlRmxvYXQodGhpcy4kaGFuZGxlMlswXS5zdHlsZVtsT3JUXSkgLSBtb3ZlbWVudCArIGhhbmRsZVBjdDtcbiAgICAgICAgLy90aGlzIGNhbGxiYWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IGVycm9ycyBhbmQgYWxsb3cgdGhlIHByb3BlciBwbGFjZW1lbnQgYW5kIGluaXRpYWxpemF0aW9uIG9mIGEgMi1oYW5kbGVkIHNsaWRlclxuICAgICAgICAvL3BsdXMsIGl0IG1lYW5zIHdlIGRvbid0IGNhcmUgaWYgJ2RpbScgaXNOYU4gb24gaW5pdCwgaXQgd29uJ3QgYmUgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgeyBjYigpOyB9Ly90aGlzIGlzIG9ubHkgbmVlZGVkIGZvciB0aGUgaW5pdGlhbGl6YXRpb24gb2YgMiBoYW5kbGVkIHNsaWRlcnNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vanVzdCBjYWNoaW5nIHRoZSB2YWx1ZSBvZiB0aGUgbGVmdC9ib3R0b20gaGFuZGxlJ3MgbGVmdC90b3AgcHJvcGVydHlcbiAgICAgICAgdmFyIGhhbmRsZVBvcyA9IHBhcnNlRmxvYXQodGhpcy4kaGFuZGxlWzBdLnN0eWxlW2xPclRdKTtcbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIG5ldyBtaW4taGVpZ2h0L3dpZHRoIGZvciB0aGUgZmlsbCBiYXIuIFVzZSBpc05hTiB0byBwcmV2ZW50IGZhbHNlIHBvc2l0aXZlcyBmb3IgbnVtYmVycyA8PSAwXG4gICAgICAgIC8vYmFzZWQgb24gdGhlIHBlcmNlbnRhZ2Ugb2YgbW92ZW1lbnQgb2YgdGhlIGhhbmRsZSBiZWluZyBtYW5pcHVsYXRlZCwgbGVzcyB0aGUgb3Bwb3NpbmcgaGFuZGxlJ3MgbGVmdC90b3AgcG9zaXRpb24sIHBsdXMgdGhlIHBlcmNlbnRhZ2Ugdy9oIG9mIHRoZSBoYW5kbGUgaXRzZWxmXG4gICAgICAgIGRpbSA9IG1vdmVtZW50IC0gKGlzTmFOKGhhbmRsZVBvcykgPyAodGhpcy5vcHRpb25zLmluaXRpYWxTdGFydCAtIHRoaXMub3B0aW9ucy5zdGFydCkvKCh0aGlzLm9wdGlvbnMuZW5kLXRoaXMub3B0aW9ucy5zdGFydCkvMTAwKSA6IGhhbmRsZVBvcykgKyBoYW5kbGVQY3Q7XG4gICAgICB9XG4gICAgICAvLyBhc3NpZ24gdGhlIG1pbi1oZWlnaHQvd2lkdGggdG8gb3VyIGNzcyBvYmplY3RcbiAgICAgIGNzc1tgbWluLSR7aE9yV31gXSA9IGAke2RpbX0lYDtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uZSgnZmluaXNoZWQuemYuYW5pbWF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgaGFuZGxlIGlzIGRvbmUgbW92aW5nLlxuICAgICAgICAgICAgICAgICAgICAgKiBAZXZlbnQgU2xpZGVyI21vdmVkXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdtb3ZlZC56Zi5zbGlkZXInLCBbJGhuZGxdKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgIC8vYmVjYXVzZSB3ZSBkb24ndCBrbm93IGV4YWN0bHkgaG93IHRoZSBoYW5kbGUgd2lsbCBiZSBtb3ZlZCwgY2hlY2sgdGhlIGFtb3VudCBvZiB0aW1lIGl0IHNob3VsZCB0YWtlIHRvIG1vdmUuXG4gICAgdmFyIG1vdmVUaW1lID0gdGhpcy4kZWxlbWVudC5kYXRhKCdkcmFnZ2luZycpID8gMTAwMC82MCA6IHRoaXMub3B0aW9ucy5tb3ZlVGltZTtcblxuICAgIE1vdmUobW92ZVRpbWUsICRobmRsLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGFkanVzdGluZyB0aGUgbGVmdC90b3AgcHJvcGVydHkgb2YgdGhlIGhhbmRsZSwgYmFzZWQgb24gdGhlIHBlcmNlbnRhZ2UgY2FsY3VsYXRlZCBhYm92ZVxuICAgICAgLy8gaWYgbW92ZW1lbnQgaXNOYU4sIHRoYXQgaXMgYmVjYXVzZSB0aGUgc2xpZGVyIGlzIGhpZGRlbiBhbmQgd2UgY2Fubm90IGRldGVybWluZSBoYW5kbGUgd2lkdGgsXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gbmV4dCBiZXN0IGd1ZXNzLlxuICAgICAgaWYgKGlzTmFOKG1vdmVtZW50KSkge1xuICAgICAgICAkaG5kbC5jc3MobE9yVCwgYCR7cGN0T2ZCYXIgKiAxMDB9JWApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICRobmRsLmNzcyhsT3JULCBgJHttb3ZlbWVudH0lYCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghX3RoaXMub3B0aW9ucy5kb3VibGVTaWRlZCkge1xuICAgICAgICAvL2lmIHNpbmdsZS1oYW5kbGVkLCBhIHNpbXBsZSBtZXRob2QgdG8gZXhwYW5kIHRoZSBmaWxsIGJhclxuICAgICAgICBfdGhpcy4kZmlsbC5jc3MoaE9yVywgYCR7cGN0T2ZCYXIgKiAxMDB9JWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9vdGhlcndpc2UsIHVzZSB0aGUgY3NzIG9iamVjdCB3ZSBjcmVhdGVkIGFib3ZlXG4gICAgICAgIF90aGlzLiRmaWxsLmNzcyhjc3MpO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSB2YWx1ZSBoYXMgbm90IGJlZW4gY2hhbmdlIGZvciBhIGdpdmVuIHRpbWUuXG4gICAgICogQGV2ZW50IFNsaWRlciNjaGFuZ2VkXG4gICAgICovXG4gICAgY2xlYXJUaW1lb3V0KF90aGlzLnRpbWVvdXQpO1xuICAgIF90aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBfdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2VkLnpmLnNsaWRlcicsIFskaG5kbF0pO1xuICAgIH0sIF90aGlzLm9wdGlvbnMuY2hhbmdlZERlbGF5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbml0aWFsIGF0dHJpYnV0ZSBmb3IgdGhlIHNsaWRlciBlbGVtZW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtIGluZGV4IG9mIHRoZSBjdXJyZW50IGhhbmRsZS9pbnB1dCB0byB1c2UuXG4gICAqL1xuICBfc2V0SW5pdEF0dHIoaWR4KSB7XG4gICAgdmFyIGluaXRWYWwgPSAoaWR4ID09PSAwID8gdGhpcy5vcHRpb25zLmluaXRpYWxTdGFydCA6IHRoaXMub3B0aW9ucy5pbml0aWFsRW5kKVxuICAgIHZhciBpZCA9IHRoaXMuaW5wdXRzLmVxKGlkeCkuYXR0cignaWQnKSB8fCBHZXRZb0RpZ2l0cyg2LCAnc2xpZGVyJyk7XG4gICAgdGhpcy5pbnB1dHMuZXEoaWR4KS5hdHRyKHtcbiAgICAgICdpZCc6IGlkLFxuICAgICAgJ21heCc6IHRoaXMub3B0aW9ucy5lbmQsXG4gICAgICAnbWluJzogdGhpcy5vcHRpb25zLnN0YXJ0LFxuICAgICAgJ3N0ZXAnOiB0aGlzLm9wdGlvbnMuc3RlcFxuICAgIH0pO1xuICAgIHRoaXMuaW5wdXRzLmVxKGlkeCkudmFsKGluaXRWYWwpO1xuICAgIHRoaXMuaGFuZGxlcy5lcShpZHgpLmF0dHIoe1xuICAgICAgJ3JvbGUnOiAnc2xpZGVyJyxcbiAgICAgICdhcmlhLWNvbnRyb2xzJzogaWQsXG4gICAgICAnYXJpYS12YWx1ZW1heCc6IHRoaXMub3B0aW9ucy5lbmQsXG4gICAgICAnYXJpYS12YWx1ZW1pbic6IHRoaXMub3B0aW9ucy5zdGFydCxcbiAgICAgICdhcmlhLXZhbHVlbm93JzogaW5pdFZhbCxcbiAgICAgICdhcmlhLW9yaWVudGF0aW9uJzogdGhpcy5vcHRpb25zLnZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgICd0YWJpbmRleCc6IDBcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBpbnB1dCBhbmQgYGFyaWEtdmFsdWVub3dgIHZhbHVlcyBmb3IgdGhlIHNsaWRlciBlbGVtZW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtqUXVlcnl9ICRoYW5kbGUgLSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGhhbmRsZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbCAtIGZsb2F0aW5nIHBvaW50IG9mIHRoZSBuZXcgdmFsdWUuXG4gICAqL1xuICBfc2V0VmFsdWVzKCRoYW5kbGUsIHZhbCkge1xuICAgIHZhciBpZHggPSB0aGlzLm9wdGlvbnMuZG91YmxlU2lkZWQgPyB0aGlzLmhhbmRsZXMuaW5kZXgoJGhhbmRsZSkgOiAwO1xuICAgIHRoaXMuaW5wdXRzLmVxKGlkeCkudmFsKHZhbCk7XG4gICAgJGhhbmRsZS5hdHRyKCdhcmlhLXZhbHVlbm93JywgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGV2ZW50cyBvbiB0aGUgc2xpZGVyIGVsZW1lbnQuXG4gICAqIENhbGN1bGF0ZXMgdGhlIG5ldyBsb2NhdGlvbiBvZiB0aGUgY3VycmVudCBoYW5kbGUuXG4gICAqIElmIHRoZXJlIGFyZSB0d28gaGFuZGxlcyBhbmQgdGhlIGJhciB3YXMgY2xpY2tlZCwgaXQgZGV0ZXJtaW5lcyB3aGljaCBoYW5kbGUgdG8gbW92ZS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlIC0gdGhlIGBldmVudGAgb2JqZWN0IHBhc3NlZCBmcm9tIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtIHtqUXVlcnl9ICRoYW5kbGUgLSB0aGUgY3VycmVudCBoYW5kbGUgdG8gY2FsY3VsYXRlIGZvciwgaWYgc2VsZWN0ZWQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWwgLSBmbG9hdGluZyBwb2ludCBudW1iZXIgZm9yIHRoZSBuZXcgdmFsdWUgb2YgdGhlIHNsaWRlci5cbiAgICogVE9ETyBjbGVhbiB0aGlzIHVwLCB0aGVyZSdzIGEgbG90IG9mIHJlcGVhdGVkIGNvZGUgYmV0d2VlbiB0aGlzIGFuZCB0aGUgX3NldEhhbmRsZVBvcyBmbi5cbiAgICovXG4gIF9oYW5kbGVFdmVudChlLCAkaGFuZGxlLCB2YWwpIHtcbiAgICB2YXIgdmFsdWUsIGhhc1ZhbDtcbiAgICBpZiAoIXZhbCkgey8vY2xpY2sgb3IgZHJhZyBldmVudHNcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgICAgdmVydGljYWwgPSB0aGlzLm9wdGlvbnMudmVydGljYWwsXG4gICAgICAgICAgcGFyYW0gPSB2ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCA/ICd0b3AnIDogJ2xlZnQnLFxuICAgICAgICAgIGV2ZW50T2Zmc2V0ID0gdmVydGljYWwgPyBlLnBhZ2VZIDogZS5wYWdlWCxcbiAgICAgICAgICBoYWxmT2ZIYW5kbGUgPSB0aGlzLiRoYW5kbGVbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbcGFyYW1dIC8gMixcbiAgICAgICAgICBiYXJEaW0gPSB0aGlzLiRlbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW3BhcmFtXSxcbiAgICAgICAgICB3aW5kb3dTY3JvbGwgPSB2ZXJ0aWNhbCA/ICQod2luZG93KS5zY3JvbGxUb3AoKSA6ICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XG5cblxuICAgICAgdmFyIGVsZW1PZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpW2RpcmVjdGlvbl07XG5cbiAgICAgIC8vIHRvdWNoIGV2ZW50cyBlbXVsYXRlZCBieSB0aGUgdG91Y2ggdXRpbCBnaXZlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHNjcmVlbiwgYWRkIHdpbmRvdy5zY3JvbGwgdG8gZXZlbnQgY29vcmRpbmF0ZXMuLi5cbiAgICAgIC8vIGJlc3Qgd2F5IHRvIGd1ZXNzIHRoaXMgaXMgc2ltdWxhdGVkIGlzIGlmIGNsaWVudFkgPT0gcGFnZVlcbiAgICAgIGlmIChlLmNsaWVudFkgPT09IGUucGFnZVkpIHsgZXZlbnRPZmZzZXQgPSBldmVudE9mZnNldCArIHdpbmRvd1Njcm9sbDsgfVxuICAgICAgdmFyIGV2ZW50RnJvbUJhciA9IGV2ZW50T2Zmc2V0IC0gZWxlbU9mZnNldDtcbiAgICAgIHZhciBiYXJYWTtcbiAgICAgIGlmIChldmVudEZyb21CYXIgPCAwKSB7XG4gICAgICAgIGJhclhZID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnRGcm9tQmFyID4gYmFyRGltKSB7XG4gICAgICAgIGJhclhZID0gYmFyRGltO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFyWFkgPSBldmVudEZyb21CYXI7XG4gICAgICB9XG4gICAgICB2YXIgb2Zmc2V0UGN0ID0gcGVyY2VudChiYXJYWSwgYmFyRGltKTtcblxuICAgICAgdmFsdWUgPSB0aGlzLl92YWx1ZShvZmZzZXRQY3QpO1xuXG4gICAgICAvLyB0dXJuIGV2ZXJ5dGhpbmcgYXJvdW5kIGZvciBSVEwsIHlheSBtYXRoIVxuICAgICAgaWYgKFJ0bCgpICYmICF0aGlzLm9wdGlvbnMudmVydGljYWwpIHt2YWx1ZSA9IHRoaXMub3B0aW9ucy5lbmQgLSB2YWx1ZTt9XG5cbiAgICAgIHZhbHVlID0gX3RoaXMuX2FkanVzdFZhbHVlKG51bGwsIHZhbHVlKTtcbiAgICAgIC8vYm9vbGVhbiBmbGFnIGZvciB0aGUgc2V0SGFuZGxlUG9zIGZuLCBzcGVjaWZpY2FsbHkgZm9yIHZlcnRpY2FsIHNsaWRlcnNcbiAgICAgIGhhc1ZhbCA9IGZhbHNlO1xuXG4gICAgICBpZiAoISRoYW5kbGUpIHsvL2ZpZ3VyZSBvdXQgd2hpY2ggaGFuZGxlIGl0IGlzLCBwYXNzIGl0IHRvIHRoZSBuZXh0IGZ1bmN0aW9uLlxuICAgICAgICB2YXIgZmlyc3RIbmRsUG9zID0gYWJzUG9zaXRpb24odGhpcy4kaGFuZGxlLCBkaXJlY3Rpb24sIGJhclhZLCBwYXJhbSksXG4gICAgICAgICAgICBzZWNuZEhuZGxQb3MgPSBhYnNQb3NpdGlvbih0aGlzLiRoYW5kbGUyLCBkaXJlY3Rpb24sIGJhclhZLCBwYXJhbSk7XG4gICAgICAgICAgICAkaGFuZGxlID0gZmlyc3RIbmRsUG9zIDw9IHNlY25kSG5kbFBvcyA/IHRoaXMuJGhhbmRsZSA6IHRoaXMuJGhhbmRsZTI7XG4gICAgICB9XG5cbiAgICB9IGVsc2Ugey8vY2hhbmdlIGV2ZW50IG9uIGlucHV0XG4gICAgICB2YWx1ZSA9IHRoaXMuX2FkanVzdFZhbHVlKG51bGwsIHZhbCk7XG4gICAgICBoYXNWYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX3NldEhhbmRsZVBvcygkaGFuZGxlLCB2YWx1ZSwgaGFzVmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RlcyB2YWx1ZSBmb3IgaGFuZGxlIGluIHJlZ2FyZCB0byBzdGVwIHZhbHVlLiByZXR1cm5zIGFkanVzdGVkIHZhbHVlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGhhbmRsZSAtIHRoZSBzZWxlY3RlZCBoYW5kbGUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIGFkanVzdC4gdXNlZCBpZiAkaGFuZGxlIGlzIGZhbHN5XG4gICAqL1xuICBfYWRqdXN0VmFsdWUoJGhhbmRsZSwgdmFsdWUpIHtcbiAgICB2YXIgdmFsLFxuICAgICAgc3RlcCA9IHRoaXMub3B0aW9ucy5zdGVwLFxuICAgICAgZGl2ID0gcGFyc2VGbG9hdChzdGVwLzIpLFxuICAgICAgbGVmdCwgcHJldl92YWwsIG5leHRfdmFsO1xuICAgIGlmICghISRoYW5kbGUpIHtcbiAgICAgIHZhbCA9IHBhcnNlRmxvYXQoJGhhbmRsZS5hdHRyKCdhcmlhLXZhbHVlbm93JykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsID49IDApIHtcbiAgICAgIGxlZnQgPSB2YWwgJSBzdGVwO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gc3RlcCArICh2YWwgJSBzdGVwKTtcbiAgICB9XG4gICAgcHJldl92YWwgPSB2YWwgLSBsZWZ0O1xuICAgIG5leHRfdmFsID0gcHJldl92YWwgKyBzdGVwO1xuICAgIGlmIChsZWZ0ID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICB2YWwgPSB2YWwgPj0gcHJldl92YWwgKyBkaXYgPyBuZXh0X3ZhbCA6IHByZXZfdmFsO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNsaWRlciBlbGVtZW50cy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuX2V2ZW50c0ZvckhhbmRsZSh0aGlzLiRoYW5kbGUpO1xuICAgIGlmKHRoaXMuaGFuZGxlc1sxXSkge1xuICAgICAgdGhpcy5fZXZlbnRzRm9ySGFuZGxlKHRoaXMuJGhhbmRsZTIpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIGEgcGFydGljdWxhciBoYW5kbGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkaGFuZGxlIC0gdGhlIGN1cnJlbnQgaGFuZGxlIHRvIGFwcGx5IGxpc3RlbmVycyB0by5cbiAgICovXG4gIF9ldmVudHNGb3JIYW5kbGUoJGhhbmRsZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIGN1ckhhbmRsZSxcbiAgICAgICAgdGltZXI7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBpZHggPSBfdGhpcy5pbnB1dHMuaW5kZXgoJCh0aGlzKSk7XG4gICAgICAgIF90aGlzLl9oYW5kbGVFdmVudChlLCBfdGhpcy5oYW5kbGVzLmVxKGlkeCksICQodGhpcykudmFsKCkpO1xuICAgICAgfTtcblxuICAgICAgLy8gSUUgb25seSB0cmlnZ2VycyB0aGUgY2hhbmdlIGV2ZW50IHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzIHdoaWNoIHN0cmljdGx5IGZvbGxvd3MgdGhlIEhUTUwgc3BlY2lmaWNhdGlvblxuICAgICAgLy8gbGlzdGVuIGZvciB0aGUgZW50ZXIga2V5IGFuZCB0cmlnZ2VyIGEgY2hhbmdlXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2lucHV0Lmh0bWwjY29tbW9uLWlucHV0LWVsZW1lbnQtZXZlbnRzXG4gICAgICB0aGlzLmlucHV0cy5vZmYoJ2tleXVwLnpmLnNsaWRlcicpLm9uKCdrZXl1cC56Zi5zbGlkZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZihlLmtleUNvZGUgPT0gMTMpIGhhbmRsZUNoYW5nZUV2ZW50LmNhbGwodGhpcywgZSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbnB1dHMub2ZmKCdjaGFuZ2UuemYuc2xpZGVyJykub24oJ2NoYW5nZS56Zi5zbGlkZXInLCBoYW5kbGVDaGFuZ2VFdmVudCk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xpY2tTZWxlY3QpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ2NsaWNrLnpmLnNsaWRlcicpLm9uKCdjbGljay56Zi5zbGlkZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKF90aGlzLiRlbGVtZW50LmRhdGEoJ2RyYWdnaW5nJykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgICAgICBpZiAoISQoZS50YXJnZXQpLmlzKCdbZGF0YS1zbGlkZXItaGFuZGxlXScpKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5kb3VibGVTaWRlZCkge1xuICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlRXZlbnQoZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlRXZlbnQoZSwgX3RoaXMuJGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKSB7XG4gICAgICB0aGlzLmhhbmRsZXMuYWRkVG91Y2goKTtcblxuICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgJGhhbmRsZVxuICAgICAgICAub2ZmKCdtb3VzZWRvd24uemYuc2xpZGVyJylcbiAgICAgICAgLm9uKCdtb3VzZWRvd24uemYuc2xpZGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICRoYW5kbGUuYWRkQ2xhc3MoJ2lzLWRyYWdnaW5nJyk7XG4gICAgICAgICAgX3RoaXMuJGZpbGwuYWRkQ2xhc3MoJ2lzLWRyYWdnaW5nJyk7Ly9cbiAgICAgICAgICBfdGhpcy4kZWxlbWVudC5kYXRhKCdkcmFnZ2luZycsIHRydWUpO1xuXG4gICAgICAgICAgY3VySGFuZGxlID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgJGJvZHkub24oJ21vdXNlbW92ZS56Zi5zbGlkZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBfdGhpcy5faGFuZGxlRXZlbnQoZSwgY3VySGFuZGxlKTtcblxuICAgICAgICAgIH0pLm9uKCdtb3VzZXVwLnpmLnNsaWRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIF90aGlzLl9oYW5kbGVFdmVudChlLCBjdXJIYW5kbGUpO1xuXG4gICAgICAgICAgICAkaGFuZGxlLnJlbW92ZUNsYXNzKCdpcy1kcmFnZ2luZycpO1xuICAgICAgICAgICAgX3RoaXMuJGZpbGwucmVtb3ZlQ2xhc3MoJ2lzLWRyYWdnaW5nJyk7XG4gICAgICAgICAgICBfdGhpcy4kZWxlbWVudC5kYXRhKCdkcmFnZ2luZycsIGZhbHNlKTtcblxuICAgICAgICAgICAgJGJvZHkub2ZmKCdtb3VzZW1vdmUuemYuc2xpZGVyIG1vdXNldXAuemYuc2xpZGVyJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLy8gcHJldmVudCBldmVudHMgdHJpZ2dlcmVkIGJ5IHRvdWNoXG4gICAgICAub24oJ3NlbGVjdHN0YXJ0LnpmLnNsaWRlciB0b3VjaG1vdmUuemYuc2xpZGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkaGFuZGxlLm9mZigna2V5ZG93bi56Zi5zbGlkZXInKS5vbigna2V5ZG93bi56Zi5zbGlkZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgXyRoYW5kbGUgPSAkKHRoaXMpLFxuICAgICAgICAgIGlkeCA9IF90aGlzLm9wdGlvbnMuZG91YmxlU2lkZWQgPyBfdGhpcy5oYW5kbGVzLmluZGV4KF8kaGFuZGxlKSA6IDAsXG4gICAgICAgICAgb2xkVmFsdWUgPSBwYXJzZUZsb2F0KF90aGlzLmlucHV0cy5lcShpZHgpLnZhbCgpKSxcbiAgICAgICAgICBuZXdWYWx1ZTtcblxuICAgICAgLy8gaGFuZGxlIGtleWJvYXJkIGV2ZW50IHdpdGgga2V5Ym9hcmQgdXRpbFxuICAgICAgS2V5Ym9hcmQuaGFuZGxlS2V5KGUsICdTbGlkZXInLCB7XG4gICAgICAgIGRlY3JlYXNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IG9sZFZhbHVlIC0gX3RoaXMub3B0aW9ucy5zdGVwO1xuICAgICAgICB9LFxuICAgICAgICBpbmNyZWFzZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBvbGRWYWx1ZSArIF90aGlzLm9wdGlvbnMuc3RlcDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVjcmVhc2VfZmFzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBvbGRWYWx1ZSAtIF90aGlzLm9wdGlvbnMuc3RlcCAqIDEwO1xuICAgICAgICB9LFxuICAgICAgICBpbmNyZWFzZV9mYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IG9sZFZhbHVlICsgX3RoaXMub3B0aW9ucy5zdGVwICogMTA7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBfdGhpcy5vcHRpb25zLnN0YXJ0O1xuICAgICAgICB9LFxuICAgICAgICBtYXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gX3RoaXMub3B0aW9ucy5lbmQ7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZWQ6IGZ1bmN0aW9uKCkgeyAvLyBvbmx5IHNldCBoYW5kbGUgcG9zIHdoZW4gZXZlbnQgd2FzIGhhbmRsZWQgc3BlY2lhbGx5XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF90aGlzLl9zZXRIYW5kbGVQb3MoXyRoYW5kbGUsIG5ld1ZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvKmlmIChuZXdWYWx1ZSkgeyAvLyBpZiBwcmVzc2VkIGtleSBoYXMgc3BlY2lhbCBmdW5jdGlvbiwgdXBkYXRlIHZhbHVlXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3RoaXMuX3NldEhhbmRsZVBvcyhfJGhhbmRsZSwgbmV3VmFsdWUpO1xuICAgICAgfSovXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIHNsaWRlciBwbHVnaW4uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXMub2ZmKCcuemYuc2xpZGVyJyk7XG4gICAgdGhpcy5pbnB1dHMub2ZmKCcuemYuc2xpZGVyJyk7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJy56Zi5zbGlkZXInKTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG59XG5cblNsaWRlci5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIE1pbmltdW0gdmFsdWUgZm9yIHRoZSBzbGlkZXIgc2NhbGUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgc3RhcnQ6IDAsXG4gIC8qKlxuICAgKiBNYXhpbXVtIHZhbHVlIGZvciB0aGUgc2xpZGVyIHNjYWxlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDEwMFxuICAgKi9cbiAgZW5kOiAxMDAsXG4gIC8qKlxuICAgKiBNaW5pbXVtIHZhbHVlIGNoYW5nZSBwZXIgY2hhbmdlIGV2ZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIHN0ZXA6IDEsXG4gIC8qKlxuICAgKiBWYWx1ZSBhdCB3aGljaCB0aGUgaGFuZGxlL2lucHV0ICoobGVmdCBoYW5kbGUvZmlyc3QgaW5wdXQpKiBzaG91bGQgYmUgc2V0IHRvIG9uIGluaXRpYWxpemF0aW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIGluaXRpYWxTdGFydDogMCxcbiAgLyoqXG4gICAqIFZhbHVlIGF0IHdoaWNoIHRoZSByaWdodCBoYW5kbGUvc2Vjb25kIGlucHV0IHNob3VsZCBiZSBzZXQgdG8gb24gaW5pdGlhbGl6YXRpb24uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMTAwXG4gICAqL1xuICBpbml0aWFsRW5kOiAxMDAsXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIGlucHV0IHRvIGJlIGxvY2F0ZWQgb3V0c2lkZSB0aGUgY29udGFpbmVyIGFuZCB2aXNpYmxlLiBTZXQgdG8gYnkgdGhlIEpTXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBiaW5kaW5nOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgdXNlciB0byBjbGljay90YXAgb24gdGhlIHNsaWRlciBiYXIgdG8gc2VsZWN0IGEgdmFsdWUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGNsaWNrU2VsZWN0OiB0cnVlLFxuICAvKipcbiAgICogU2V0IHRvIHRydWUgYW5kIHVzZSB0aGUgYHZlcnRpY2FsYCBjbGFzcyB0byBjaGFuZ2UgYWxpZ25tZW50IHRvIHZlcnRpY2FsLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdmVydGljYWw6IGZhbHNlLFxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGRyYWcgdGhlIHNsaWRlciBoYW5kbGUocykgdG8gc2VsZWN0IGEgdmFsdWUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBzbGlkZXIgYW5kIHByZXZlbnRzIGV2ZW50IGxpc3RlbmVycyBmcm9tIGJlaW5nIGFwcGxpZWQuIERvdWJsZSBjaGVja2VkIGJ5IEpTIHdpdGggYGRpc2FibGVkQ2xhc3NgLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2Ugb2YgdHdvIGhhbmRsZXMuIERvdWJsZSBjaGVja2VkIGJ5IHRoZSBKUy4gQ2hhbmdlcyBzb21lIGxvZ2ljIGhhbmRsaW5nLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZG91YmxlU2lkZWQ6IGZhbHNlLFxuICAvKipcbiAgICogUG90ZW50aWFsIGZ1dHVyZSBmZWF0dXJlLlxuICAgKi9cbiAgLy8gc3RlcHM6IDEwMCxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0aGUgcGx1Z2luIHNob3VsZCBnbyB0byBmb3IgZmxvYXRpbmcgcG9pbnQgcHJlY2lzaW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDJcbiAgICovXG4gIGRlY2ltYWw6IDIsXG4gIC8qKlxuICAgKiBUaW1lIGRlbGF5IGZvciBkcmFnZ2VkIGVsZW1lbnRzLlxuICAgKi9cbiAgLy8gZHJhZ0RlbGF5OiAwLFxuICAvKipcbiAgICogVGltZSwgaW4gbXMsIHRvIGFuaW1hdGUgdGhlIG1vdmVtZW50IG9mIGEgc2xpZGVyIGhhbmRsZSBpZiB1c2VyIGNsaWNrcy90YXBzIG9uIHRoZSBiYXIuIE5lZWRzIHRvIGJlIG1hbnVhbGx5IHNldCBpZiB1cGRhdGluZyB0aGUgdHJhbnNpdGlvbiB0aW1lIGluIHRoZSBTYXNzIHNldHRpbmdzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDIwMFxuICAgKi9cbiAgbW92ZVRpbWU6IDIwMCwvL3VwZGF0ZSB0aGlzIGlmIGNoYW5naW5nIHRoZSB0cmFuc2l0aW9uIHRpbWUgaW4gdGhlIHNhc3NcbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gZGlzYWJsZWQgc2xpZGVycy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnZGlzYWJsZWQnXG4gICAqL1xuICBkaXNhYmxlZENsYXNzOiAnZGlzYWJsZWQnLFxuICAvKipcbiAgICogV2lsbCBpbnZlcnQgdGhlIGRlZmF1bHQgbGF5b3V0IGZvciBhIHZlcnRpY2FsPHNwYW4gZGF0YS10b29sdGlwIHRpdGxlPVwid2hvIHdvdWxkIGRvIHRoaXM/Pz9cIj4gPC9zcGFuPnNsaWRlci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGludmVydFZlcnRpY2FsOiBmYWxzZSxcbiAgLyoqXG4gICAqIE1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIGBjaGFuZ2VkLnpmLXNsaWRlcmAgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHZhbHVlIGNoYW5nZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCA1MDBcbiAgICovXG4gIGNoYW5nZWREZWxheTogNTAwLFxuICAvKipcbiAgKiBCYXNldmFsdWUgZm9yIG5vbi1saW5lYXIgc2xpZGVyc1xuICAqIEBvcHRpb25cbiAgKiBAdHlwZSB7bnVtYmVyfVxuICAqIEBkZWZhdWx0IDVcbiAgKi9cbiAgbm9uTGluZWFyQmFzZTogNSxcbiAgLyoqXG4gICogQmFzZXZhbHVlIGZvciBub24tbGluZWFyIHNsaWRlcnMsIHBvc3NpYmxlIHZhbHVlcyBhcmU6IGAnbGluZWFyJ2AsIGAncG93J2AgJiBgJ2xvZydgLiBQb3cgYW5kIExvZyB1c2UgdGhlIG5vbkxpbmVhckJhc2Ugc2V0dGluZy5cbiAgKiBAb3B0aW9uXG4gICogQHR5cGUge3N0cmluZ31cbiAgKiBAZGVmYXVsdCAnbGluZWFyJ1xuICAqL1xuICBwb3NpdGlvblZhbHVlRnVuY3Rpb246ICdsaW5lYXInLFxufTtcblxuZnVuY3Rpb24gcGVyY2VudChmcmFjLCBudW0pIHtcbiAgcmV0dXJuIChmcmFjIC8gbnVtKTtcbn1cbmZ1bmN0aW9uIGFic1Bvc2l0aW9uKCRoYW5kbGUsIGRpciwgY2xpY2tQb3MsIHBhcmFtKSB7XG4gIHJldHVybiBNYXRoLmFicygoJGhhbmRsZS5wb3NpdGlvbigpW2Rpcl0gKyAoJGhhbmRsZVtwYXJhbV0oKSAvIDIpKSAtIGNsaWNrUG9zKTtcbn1cbmZ1bmN0aW9uIGJhc2VMb2coYmFzZSwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubG9nKHZhbHVlKS9NYXRoLmxvZyhiYXNlKVxufVxuXG5leHBvcnQge1NsaWRlcn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNb3Rpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24nO1xuXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4gIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGAke3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykge1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0oKSk7XG5cbmNvbnN0IHRyaWdnZXJzID0gKGVsLCB0eXBlKSA9PiB7XG4gIGVsLmRhdGEodHlwZSkuc3BsaXQoJyAnKS5mb3JFYWNoKGlkID0+IHtcbiAgICAkKGAjJHtpZH1gKVsgdHlwZSA9PT0gJ2Nsb3NlJyA/ICd0cmlnZ2VyJyA6ICd0cmlnZ2VySGFuZGxlciddKGAke3R5cGV9LnpmLnRyaWdnZXJgLCBbZWxdKTtcbiAgfSk7XG59O1xuXG52YXIgVHJpZ2dlcnMgPSB7XG4gIExpc3RlbmVyczoge1xuICAgIEJhc2ljOiB7fSxcbiAgICBHbG9iYWw6IHt9XG4gIH0sXG4gIEluaXRpYWxpemVyczoge31cbn1cblxuVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljICA9IHtcbiAgb3Blbkxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICB0cmlnZ2VycygkKHRoaXMpLCAnb3BlbicpO1xuICB9LFxuICBjbG9zZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICBjbG9zZWFibGVMaXN0ZW5lcjogZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGFuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnY2xvc2FibGUnKTtcblxuICAgIGlmKGFuaW1hdGlvbiAhPT0gJycpe1xuICAgICAgTW90aW9uLmFuaW1hdGVPdXQoJCh0aGlzKSwgYW5pbWF0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgJCh0aGlzKS5mYWRlT3V0KCkudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVGb2N1c0xpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZS1mb2N1cycpO1xuICAgICQoYCMke2lkfWApLnRyaWdnZXJIYW5kbGVyKCd0b2dnbGUuemYudHJpZ2dlcicsIFskKHRoaXMpXSk7XG4gIH1cbn07XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtb3Blbl0gd2lsbCByZXZlYWwgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1vcGVuXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NlXSB3aWxsIGNsb3NlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuLy8gSWYgdXNlZCB3aXRob3V0IGEgdmFsdWUgb24gW2RhdGEtY2xvc2VdLCB0aGUgZXZlbnQgd2lsbCBidWJibGUsIGFsbG93aW5nIGl0IHRvIGNsb3NlIGEgcGFyZW50IGNvbXBvbmVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZV0gd2lsbCB0b2dnbGUgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2FibGVdIHdpbGwgcmVzcG9uZCB0byBjbG9zZS56Zi50cmlnZ2VyIGV2ZW50cy5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2Nsb3NlLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xvc2UuemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZWFibGVdLCBbZGF0YS1jbG9zYWJsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZS1mb2N1c10gd2lsbCByZXNwb25kIHRvIGNvbWluZyBpbiBhbmQgb3V0IG9mIGZvY3VzXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xuICAkZWxlbS5vbignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlLWZvY3VzXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbn1cblxuXG5cbi8vIE1vcmUgR2xvYmFsL2NvbXBsZXggbGlzdGVuZXJzIGFuZCB0cmlnZ2Vyc1xuVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbCAgPSB7XG4gIHJlc2l6ZUxpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSByZXNpemUgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInJlc2l6ZVwiKTtcbiAgfSxcbiAgc2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHNjcm9sbCBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwic2Nyb2xsXCIpO1xuICB9LFxuICBjbG9zZU1lTGlzdGVuZXI6IGZ1bmN0aW9uKGUsIHBsdWdpbklkKXtcbiAgICBsZXQgcGx1Z2luID0gZS5uYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgcGx1Z2lucyA9ICQoYFtkYXRhLSR7cGx1Z2lufV1gKS5ub3QoYFtkYXRhLXlldGktYm94PVwiJHtwbHVnaW5JZH1cIl1gKTtcblxuICAgIHBsdWdpbnMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgbGV0IF90aGlzID0gJCh0aGlzKTtcbiAgICAgIF90aGlzLnRyaWdnZXJIYW5kbGVyKCdjbG9zZS56Zi50cmlnZ2VyJywgW190aGlzXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gR2xvYmFsLCBwYXJzZXMgd2hvbGUgZG9jdW1lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyID0gZnVuY3Rpb24ocGx1Z2luTmFtZSkge1xuICB2YXIgeWV0aUJveGVzID0gJCgnW2RhdGEteWV0aS1ib3hdJyksXG4gICAgICBwbHVnTmFtZXMgPSBbJ2Ryb3Bkb3duJywgJ3Rvb2x0aXAnLCAncmV2ZWFsJ107XG5cbiAgaWYocGx1Z2luTmFtZSl7XG4gICAgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcy5wdXNoKHBsdWdpbk5hbWUpO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGx1Z2luTmFtZVswXSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzID0gcGx1Z05hbWVzLmNvbmNhdChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsdWdpbiBuYW1lcyBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gIH1cbiAgaWYoeWV0aUJveGVzLmxlbmd0aCl7XG4gICAgbGV0IGxpc3RlbmVycyA9IHBsdWdOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiBgY2xvc2VtZS56Zi4ke25hbWV9YDtcbiAgICB9KS5qb2luKCcgJyk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGxpc3RlbmVycykub24obGlzdGVuZXJzLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLmNsb3NlTWVMaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgdHJpZ2dlciwgbGlzdGVuZXIpIHtcbiAgbGV0IHRpbWVyLCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKTtcbiAgJCh3aW5kb3cpLm9mZih0cmlnZ2VyKS5vbih0cmlnZ2VyLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRpbWVyKSB7IGNsZWFyVGltZW91dCh0aW1lcik7IH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIGRlYm91bmNlIHx8IDEwKTsvL2RlZmF1bHQgdGltZSB0byBlbWl0IHNjcm9sbCBldmVudFxuICB9KTtcbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtcmVzaXplXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAncmVzaXplLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnJlc2l6ZUxpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXNjcm9sbF0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Njcm9sbC56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5zY3JvbGxMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lciA9IGZ1bmN0aW9uKCRlbGVtKSB7XG4gIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsgcmV0dXJuIGZhbHNlOyB9XG4gIGxldCAkbm9kZXMgPSAkZWxlbS5maW5kKCdbZGF0YS1yZXNpemVdLCBbZGF0YS1zY3JvbGxdLCBbZGF0YS1tdXRhdGVdJyk7XG5cbiAgLy9lbGVtZW50IGNhbGxiYWNrXG4gIHZhciBsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uUmVjb3Jkc0xpc3QpIHtcbiAgICB2YXIgJHRhcmdldCA9ICQobXV0YXRpb25SZWNvcmRzTGlzdFswXS50YXJnZXQpO1xuXG4gICAgLy90cmlnZ2VyIHRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgZWxlbWVudCBkZXBlbmRpbmcgb24gdHlwZVxuICAgIHN3aXRjaCAobXV0YXRpb25SZWNvcmRzTGlzdFswXS50eXBlKSB7XG4gICAgICBjYXNlIFwiYXR0cmlidXRlc1wiOlxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwic2Nyb2xsXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQsIHdpbmRvdy5wYWdlWU9mZnNldF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJyZXNpemVcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldF0pO1xuICAgICAgICAgfVxuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiY2hpbGRMaXN0XCI6XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICB9O1xuXG4gIGlmICgkbm9kZXMubGVuZ3RoKSB7XG4gICAgLy9mb3IgZWFjaCBlbGVtZW50IHRoYXQgbmVlZHMgdG8gbGlzdGVuIGZvciByZXNpemluZywgc2Nyb2xsaW5nLCBvciBtdXRhdGlvbiBhZGQgYSBzaW5nbGUgb2JzZXJ2ZXJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAkbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbik7XG4gICAgICBlbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZSgkbm9kZXNbaV0sIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbXCJkYXRhLWV2ZW50c1wiLCBcInN0eWxlXCJdIH0pO1xuICAgIH1cbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIoJGRvY3VtZW50KTtcblxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyKCk7XG59XG5cblxuVHJpZ2dlcnMuaW5pdCA9IGZ1bmN0aW9uICgkLCBGb3VuZGF0aW9uKSB7XG4gIG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJC50cmlnZ2Vyc0luaXRpYWxpemVkICE9PSB0cnVlKSB7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzKCk7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICAkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoRm91bmRhdGlvbikge1xuICAgIEZvdW5kYXRpb24uVHJpZ2dlcnMgPSBUcmlnZ2VycztcbiAgICAvLyBMZWdhY3kgaW5jbHVkZWQgdG8gYmUgYmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIG5vdy5cbiAgICBGb3VuZGF0aW9uLklIZWFyWW91ID0gVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVyc1xuICB9XG59XG5cbmV4cG9ydCB7VHJpZ2dlcnN9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
