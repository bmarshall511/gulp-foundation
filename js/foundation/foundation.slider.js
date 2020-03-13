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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.motion */
        "./foundation.util.motion");
        /* harmony import */


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.util.touch */
        "./foundation.util.touch");
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_touch__WEBPACK_IMPORTED_MODULE_4__);
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


        var Slider = /*#__PURE__*/function (_Plugin) {
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
                this._setHandlePos(this.$handle, this.inputs.eq(0).val(), function () {
                  _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val());
                });
              } else {
                this._setHandlePos(this.$handle, this.inputs.eq(0).val());
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

              var value;

              if (this.options.vertical) {
                // linear interpolation which is working with negative values for start
                // https://math.stackexchange.com/a/1019084
                value = parseFloat(this.options.end) + pctOfBar * (this.options.start - this.options.end);
              } else {
                value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);
              }

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
            value: function _setHandlePos($hndl, location, cb) {
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

              var isDbl = this.options.doubleSided;

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

              this._setHandlePos($handle, value);
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

                    _this._setHandlePos(_$handle, newValue);
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
      15:
      /*!*******************************************************!*\
        !*** multi ./js/entries/plugins/foundation.slider.js ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.slider.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uc2xpZGVyLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnNsaWRlci5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlNsaWRlciIsImVsZW1lbnQiLCJvcHRpb25zIiwiJCIsIlRvdWNoIiwiVHJpZ2dlcnMiLCJLZXlib2FyZCIsImlzRGJsIiwiX3RoaXMiLCJ2YWx1ZSIsInBjdE9mQmFyIiwicGVyY2VudCIsInBhcnNlRmxvYXQiLCJiYXNlTG9nIiwiTWF0aCIsIiRobmRsIiwibG9jYXRpb24iLCJjYiIsImgyVmFsIiwiaDFWYWwiLCJ2ZXJ0IiwiaE9yVyIsImxPclQiLCJoYW5kbGVEaW0iLCJlbGVtRGltIiwicHhUb01vdmUiLCJtb3ZlbWVudCIsImNzcyIsImlzTGVmdEhuZGwiLCJoYW5kbGVQY3QiLCJkaW0iLCJoYW5kbGVQb3MiLCJpc05hTiIsIm1vdmVUaW1lIiwiTW92ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJpZHgiLCJpbml0VmFsIiwiaWQiLCJHZXRZb0RpZ2l0cyIsInN0ZXAiLCIkaGFuZGxlIiwidmFsIiwiZSIsInZlcnRpY2FsIiwicGFyYW0iLCJkaXJlY3Rpb24iLCJldmVudE9mZnNldCIsImhhbGZPZkhhbmRsZSIsImJhckRpbSIsIndpbmRvd1Njcm9sbCIsImVsZW1PZmZzZXQiLCJldmVudEZyb21CYXIiLCJiYXJYWSIsIm9mZnNldFBjdCIsIlJ0bCIsImhhc1ZhbCIsImZpcnN0SG5kbFBvcyIsImFic1Bvc2l0aW9uIiwic2VjbmRIbmRsUG9zIiwiZGl2IiwibGVmdCIsInByZXZfdmFsIiwibmV4dF92YWwiLCJoYW5kbGVDaGFuZ2VFdmVudCIsIiRib2R5IiwiY3VySGFuZGxlIiwiXyRoYW5kbGUiLCJvbGRWYWx1ZSIsImRlY3JlYXNlIiwibmV3VmFsdWUiLCJpbmNyZWFzZSIsImRlY3JlYXNlX2Zhc3QiLCJpbmNyZWFzZV9mYXN0IiwibWluIiwibWF4IiwiaGFuZGxlZCIsIlBsdWdpbiIsInN0YXJ0IiwiZW5kIiwiaW5pdGlhbFN0YXJ0IiwiaW5pdGlhbEVuZCIsImJpbmRpbmciLCJjbGlja1NlbGVjdCIsImRyYWdnYWJsZSIsImRpc2FibGVkIiwiZG91YmxlU2lkZWQiLCJkZWNpbWFsIiwiZGlzYWJsZWRDbGFzcyIsImludmVydFZlcnRpY2FsIiwiY2hhbmdlZERlbGF5Iiwibm9uTGluZWFyQmFzZSIsInBvc2l0aW9uVmFsdWVGdW5jdGlvbiIsImZyYWMiLCJNdXRhdGlvbk9ic2VydmVyIiwicHJlZml4ZXMiLCJpIiwid2luZG93IiwidHJpZ2dlcnMiLCJlbCIsInR5cGUiLCJMaXN0ZW5lcnMiLCJCYXNpYyIsIkdsb2JhbCIsIkluaXRpYWxpemVycyIsIm9wZW5MaXN0ZW5lciIsImNsb3NlTGlzdGVuZXIiLCJ0b2dnbGVMaXN0ZW5lciIsImNsb3NlYWJsZUxpc3RlbmVyIiwiYW5pbWF0aW9uIiwiTW90aW9uIiwidG9nZ2xlRm9jdXNMaXN0ZW5lciIsIiRlbGVtIiwicmVzaXplTGlzdGVuZXIiLCIkbm9kZXMiLCJzY3JvbGxMaXN0ZW5lciIsImNsb3NlTWVMaXN0ZW5lciIsInBsdWdpbiIsInBsdWdpbnMiLCJ5ZXRpQm94ZXMiLCJwbHVnTmFtZXMiLCJwbHVnaW5OYW1lIiwiY29uc29sZSIsImxpc3RlbmVycyIsImFyZ3MiLCJBcnJheSIsInRpbWVyIiwibGlzdGVuZXIiLCJkZWJvdW5jZSIsImRlYm91bmNlR2xvYmFsTGlzdGVuZXIiLCJsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uIiwiJHRhcmdldCIsIm11dGF0aW9uUmVjb3Jkc0xpc3QiLCJlbGVtZW50T2JzZXJ2ZXIiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCIkZG9jdW1lbnQiLCJvbkxvYWQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHlCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSw0QkFBQSxFQUFBLDBCQUFBLEVBQUEseUJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLG1CQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsdUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxxREFBQSxFQUFBLG1EQUFBLEVBQUEsa0RBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUF5QyxVQUFBLFVBQUEsRUFBQSxJQUF6QztBQUF5QyxVQUFBLEtBQUEsRUFBQTtBQUF6QyxTQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEs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U0FBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFMRkEsU0FBQUE7O0FBU0FBLFFBQUFBLFFBQVEsQ0FBUkEsSUFBQUEsR0FBZ0IsVUFBQSxDQUFBLEVBQUEsVUFBQSxFQUF5QjtBQUN2Q3dJLFVBQUFBLE1BQUFBLENBQUFBLG1EQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxDQUFBQSxDQUFPMUksQ0FBQyxDQUFGLE1BQUUsQ0FBUjBJLEVBQWtCLFlBQVk7QUFDNUIsZ0JBQUkxSSxDQUFDLENBQURBLG1CQUFBQSxLQUFKLElBQUEsRUFBb0M7QUFDbENFLGNBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBO0FBQ0FBLGNBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBO0FBQ0FGLGNBQUFBLENBQUMsQ0FBREEsbUJBQUFBLEdBQUFBLElBQUFBO0FBQ0Q7QUFMSDBJLFdBQUFBOztBQVFBLGNBQUEsVUFBQSxFQUFlO0FBQ2I5SSxZQUFBQSxVQUFVLENBQVZBLFFBQUFBLEdBRGEsUUFDYkEsQ0FEYSxDQUViOztBQUNBQSxZQUFBQSxVQUFVLENBQVZBLFFBQUFBLEdBQXNCTSxRQUFRLENBQVJBLFlBQUFBLENBQXRCTixrQkFBQUE7QUFDRDtBQWJITSxTQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JQQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTlVBO0NBVkEiLCJmaWxlIjoiZm91bmRhdGlvbi9mb3VuZGF0aW9uLnNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC50b3VjaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwudG91Y2hcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5zbGlkZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwudG91Y2hcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnNsaWRlclwiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5tb3Rpb25cIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC50b3VjaFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX21vdGlvbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfdG91Y2hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uc2xpZGVyJztcbkZvdW5kYXRpb24ucGx1Z2luKFNsaWRlciwgJ1NsaWRlcicpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBTbGlkZXIgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgTW92ZSB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1vdGlvbic7XG5pbXBvcnQgeyBHZXRZb0RpZ2l0cywgcnRsIGFzIFJ0bCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcblxuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcblxuaW1wb3J0IHsgVG91Y2ggfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC50b3VjaCc7XG5cbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuLyoqXG4gKiBTbGlkZXIgbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLnNsaWRlclxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5tb3Rpb25cbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnNcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwudG91Y2hcbiAqL1xuXG5jbGFzcyBTbGlkZXIgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhIHNsaWRlciBjb250cm9sLlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgU2xpZGVyXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBtYWtlIGludG8gYSBzbGlkZXIgY29udHJvbC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgU2xpZGVyLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnU2xpZGVyJzsgLy8gaWU5IGJhY2sgY29tcGF0XG5cbiAgLy8gVG91Y2ggYW5kIFRyaWdnZXJzIGluaXRzIGFyZSBpZGVtcG90ZW50LCB3ZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIGl0J3MgaW5pdGlhbGllZC5cbiAgICBUb3VjaC5pbml0KCQpO1xuICAgIFRyaWdnZXJzLmluaXQoJCk7XG5cbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignU2xpZGVyJywge1xuICAgICAgJ2x0cic6IHtcbiAgICAgICAgJ0FSUk9XX1JJR0hUJzogJ2luY3JlYXNlJyxcbiAgICAgICAgJ0FSUk9XX1VQJzogJ2luY3JlYXNlJyxcbiAgICAgICAgJ0FSUk9XX0RPV04nOiAnZGVjcmVhc2UnLFxuICAgICAgICAnQVJST1dfTEVGVCc6ICdkZWNyZWFzZScsXG4gICAgICAgICdTSElGVF9BUlJPV19SSUdIVCc6ICdpbmNyZWFzZV9mYXN0JyxcbiAgICAgICAgJ1NISUZUX0FSUk9XX1VQJzogJ2luY3JlYXNlX2Zhc3QnLFxuICAgICAgICAnU0hJRlRfQVJST1dfRE9XTic6ICdkZWNyZWFzZV9mYXN0JyxcbiAgICAgICAgJ1NISUZUX0FSUk9XX0xFRlQnOiAnZGVjcmVhc2VfZmFzdCcsXG4gICAgICAgICdIT01FJzogJ21pbicsXG4gICAgICAgICdFTkQnOiAnbWF4J1xuICAgICAgfSxcbiAgICAgICdydGwnOiB7XG4gICAgICAgICdBUlJPV19MRUZUJzogJ2luY3JlYXNlJyxcbiAgICAgICAgJ0FSUk9XX1JJR0hUJzogJ2RlY3JlYXNlJyxcbiAgICAgICAgJ1NISUZUX0FSUk9XX0xFRlQnOiAnaW5jcmVhc2VfZmFzdCcsXG4gICAgICAgICdTSElGVF9BUlJPV19SSUdIVCc6ICdkZWNyZWFzZV9mYXN0J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpbGl6ZXMgdGhlIHBsdWdpbiBieSByZWFkaW5nL3NldHRpbmcgYXR0cmlidXRlcywgY3JlYXRpbmcgY29sbGVjdGlvbnMgYW5kIHNldHRpbmcgdGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIGhhbmRsZShzKS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB0aGlzLmlucHV0cyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXQnKTtcbiAgICB0aGlzLmhhbmRsZXMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXNsaWRlci1oYW5kbGVdJyk7XG5cbiAgICB0aGlzLiRoYW5kbGUgPSB0aGlzLmhhbmRsZXMuZXEoMCk7XG4gICAgdGhpcy4kaW5wdXQgPSB0aGlzLmlucHV0cy5sZW5ndGggPyB0aGlzLmlucHV0cy5lcSgwKSA6ICQoYCMke3RoaXMuJGhhbmRsZS5hdHRyKCdhcmlhLWNvbnRyb2xzJyl9YCk7XG4gICAgdGhpcy4kZmlsbCA9IHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtc2xpZGVyLWZpbGxdJykuY3NzKHRoaXMub3B0aW9ucy52ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJywgMCk7XG5cbiAgICB2YXIgaXNEYmwgPSBmYWxzZSxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgdGhpcy4kZWxlbWVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMuZGlzYWJsZWRDbGFzcykpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5kaXNhYmxlZENsYXNzKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlucHV0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5wdXRzID0gJCgpLmFkZCh0aGlzLiRpbnB1dCk7XG4gICAgICB0aGlzLm9wdGlvbnMuYmluZGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0SW5pdEF0dHIoMCk7XG5cbiAgICBpZiAodGhpcy5oYW5kbGVzWzFdKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZG91YmxlU2lkZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kaGFuZGxlMiA9IHRoaXMuaGFuZGxlcy5lcSgxKTtcbiAgICAgIHRoaXMuJGlucHV0MiA9IHRoaXMuaW5wdXRzLmxlbmd0aCA+IDEgPyB0aGlzLmlucHV0cy5lcSgxKSA6ICQoYCMke3RoaXMuJGhhbmRsZTIuYXR0cignYXJpYS1jb250cm9scycpfWApO1xuXG4gICAgICBpZiAoIXRoaXMuaW5wdXRzWzFdKSB7XG4gICAgICAgIHRoaXMuaW5wdXRzID0gdGhpcy5pbnB1dHMuYWRkKHRoaXMuJGlucHV0Mik7XG4gICAgICB9XG4gICAgICBpc0RibCA9IHRydWU7XG5cbiAgICAgIC8vIHRoaXMuJGhhbmRsZS50cmlnZ2VySGFuZGxlcignY2xpY2suemYuc2xpZGVyJyk7XG4gICAgICB0aGlzLl9zZXRJbml0QXR0cigxKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaGFuZGxlIHBvc2l0aW9uc1xuICAgIHRoaXMuc2V0SGFuZGxlcygpO1xuXG4gICAgdGhpcy5fZXZlbnRzKCk7XG4gIH1cblxuICBzZXRIYW5kbGVzKCkge1xuICAgIGlmKHRoaXMuaGFuZGxlc1sxXSkge1xuICAgICAgdGhpcy5fc2V0SGFuZGxlUG9zKHRoaXMuJGhhbmRsZSwgdGhpcy5pbnB1dHMuZXEoMCkudmFsKCksICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0SGFuZGxlUG9zKHRoaXMuJGhhbmRsZTIsIHRoaXMuaW5wdXRzLmVxKDEpLnZhbCgpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRIYW5kbGVQb3ModGhpcy4kaGFuZGxlLCB0aGlzLmlucHV0cy5lcSgwKS52YWwoKSk7XG4gICAgfVxuICB9XG5cbiAgX3JlZmxvdygpIHtcbiAgICB0aGlzLnNldEhhbmRsZXMoKTtcbiAgfVxuICAvKipcbiAgKiBAZnVuY3Rpb25cbiAgKiBAcHJpdmF0ZVxuICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAtIGZsb2F0aW5nIHBvaW50ICh0aGUgdmFsdWUpIHRvIGJlIHRyYW5zZm9ybWVkIHVzaW5nIHRvIGEgcmVsYXRpdmUgcG9zaXRpb24gb24gdGhlIHNsaWRlciAodGhlIGludmVyc2Ugb2YgX3ZhbHVlKVxuICAqL1xuICBfcGN0T2ZCYXIodmFsdWUpIHtcbiAgICB2YXIgcGN0T2ZCYXIgPSBwZXJjZW50KHZhbHVlIC0gdGhpcy5vcHRpb25zLnN0YXJ0LCB0aGlzLm9wdGlvbnMuZW5kIC0gdGhpcy5vcHRpb25zLnN0YXJ0KVxuXG4gICAgc3dpdGNoKHRoaXMub3B0aW9ucy5wb3NpdGlvblZhbHVlRnVuY3Rpb24pIHtcbiAgICBjYXNlIFwicG93XCI6XG4gICAgICBwY3RPZkJhciA9IHRoaXMuX2xvZ1RyYW5zZm9ybShwY3RPZkJhcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibG9nXCI6XG4gICAgICBwY3RPZkJhciA9IHRoaXMuX3Bvd1RyYW5zZm9ybShwY3RPZkJhcik7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcGN0T2ZCYXIudG9GaXhlZCgyKVxuICB9XG5cbiAgLyoqXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKiBAcGFyYW0ge051bWJlcn0gcGN0T2ZCYXIgLSBmbG9hdGluZyBwb2ludCwgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBzbGlkZXIgKHR5cGljYWxseSBiZXR3ZWVuIDAtMSkgdG8gYmUgdHJhbnNmb3JtZWQgdG8gYSB2YWx1ZVxuICAqL1xuICBfdmFsdWUocGN0T2ZCYXIpIHtcbiAgICBzd2l0Y2godGhpcy5vcHRpb25zLnBvc2l0aW9uVmFsdWVGdW5jdGlvbikge1xuICAgIGNhc2UgXCJwb3dcIjpcbiAgICAgIHBjdE9mQmFyID0gdGhpcy5fcG93VHJhbnNmb3JtKHBjdE9mQmFyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJsb2dcIjpcbiAgICAgIHBjdE9mQmFyID0gdGhpcy5fbG9nVHJhbnNmb3JtKHBjdE9mQmFyKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZVxuICAgIGlmICh0aGlzLm9wdGlvbnMudmVydGljYWwpIHtcbiAgICAgIC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uIHdoaWNoIGlzIHdvcmtpbmcgd2l0aCBuZWdhdGl2ZSB2YWx1ZXMgZm9yIHN0YXJ0XG4gICAgICAvLyBodHRwczovL21hdGguc3RhY2tleGNoYW5nZS5jb20vYS8xMDE5MDg0XG4gICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5vcHRpb25zLmVuZCkgKyBwY3RPZkJhciAqICh0aGlzLm9wdGlvbnMuc3RhcnQgLSB0aGlzLm9wdGlvbnMuZW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9ICh0aGlzLm9wdGlvbnMuZW5kIC0gdGhpcy5vcHRpb25zLnN0YXJ0KSAqIHBjdE9mQmFyICsgcGFyc2VGbG9hdCh0aGlzLm9wdGlvbnMuc3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLyoqXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSBmbG9hdGluZyBwb2ludCAodHlwaWNhbGx5IGJldHdlZW4gMC0xKSB0byBiZSB0cmFuc2Zvcm1lZCB1c2luZyB0aGUgbG9nIGZ1bmN0aW9uXG4gICovXG4gIF9sb2dUcmFuc2Zvcm0odmFsdWUpIHtcbiAgICByZXR1cm4gYmFzZUxvZyh0aGlzLm9wdGlvbnMubm9uTGluZWFyQmFzZSwgKCh2YWx1ZSoodGhpcy5vcHRpb25zLm5vbkxpbmVhckJhc2UtMSkpKzEpKVxuICB9XG5cbiAgLyoqXG4gICogQGZ1bmN0aW9uXG4gICogQHByaXZhdGVcbiAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgLSBmbG9hdGluZyBwb2ludCAodHlwaWNhbGx5IGJldHdlZW4gMC0xKSB0byBiZSB0cmFuc2Zvcm1lZCB1c2luZyB0aGUgcG93ZXIgZnVuY3Rpb25cbiAgKi9cbiAgX3Bvd1RyYW5zZm9ybSh2YWx1ZSkge1xuICAgIHJldHVybiAoTWF0aC5wb3codGhpcy5vcHRpb25zLm5vbkxpbmVhckJhc2UsIHZhbHVlKSAtIDEpIC8gKHRoaXMub3B0aW9ucy5ub25MaW5lYXJCYXNlIC0gMSlcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwb3NpdGlvbiBvZiB0aGUgc2VsZWN0ZWQgaGFuZGxlIGFuZCBmaWxsIGJhci5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkaG5kbCAtIHRoZSBzZWxlY3RlZCBoYW5kbGUgdG8gbW92ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxvY2F0aW9uIC0gZmxvYXRpbmcgcG9pbnQgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCB2YWx1ZXMgb2YgdGhlIHNsaWRlciBiYXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZmlyZSBvbiBjb21wbGV0aW9uLlxuICAgKiBAZmlyZXMgU2xpZGVyI21vdmVkXG4gICAqIEBmaXJlcyBTbGlkZXIjY2hhbmdlZFxuICAgKi9cbiAgX3NldEhhbmRsZVBvcygkaG5kbCwgbG9jYXRpb24sIGNiKSB7XG4gICAgLy8gZG9uJ3QgbW92ZSBpZiB0aGUgc2xpZGVyIGhhcyBiZWVuIGRpc2FibGVkIHNpbmNlIGl0cyBpbml0aWFsaXphdGlvblxuICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5kaXNhYmxlZENsYXNzKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL21pZ2h0IG5lZWQgdG8gYWx0ZXIgdGhhdCBzbGlnaHRseSBmb3IgYmFycyB0aGF0IHdpbGwgaGF2ZSBvZGQgbnVtYmVyIHNlbGVjdGlvbnMuXG4gICAgbG9jYXRpb24gPSBwYXJzZUZsb2F0KGxvY2F0aW9uKTsvL29uIGlucHV0IGNoYW5nZSBldmVudHMsIGNvbnZlcnQgc3RyaW5nIHRvIG51bWJlci4uLmdydW1ibGUuXG5cbiAgICAvLyBwcmV2ZW50IHNsaWRlciBmcm9tIHJ1bm5pbmcgb3V0IG9mIGJvdW5kcywgaWYgdmFsdWUgZXhjZWVkcyB0aGUgbGltaXRzIHNldCB0aHJvdWdoIG9wdGlvbnMsIG92ZXJyaWRlIHRoZSB2YWx1ZSB0byBtaW4vbWF4XG4gICAgaWYgKGxvY2F0aW9uIDwgdGhpcy5vcHRpb25zLnN0YXJ0KSB7IGxvY2F0aW9uID0gdGhpcy5vcHRpb25zLnN0YXJ0OyB9XG4gICAgZWxzZSBpZiAobG9jYXRpb24gPiB0aGlzLm9wdGlvbnMuZW5kKSB7IGxvY2F0aW9uID0gdGhpcy5vcHRpb25zLmVuZDsgfVxuXG4gICAgdmFyIGlzRGJsID0gdGhpcy5vcHRpb25zLmRvdWJsZVNpZGVkO1xuXG4gICAgaWYgKGlzRGJsKSB7IC8vdGhpcyBibG9jayBpcyB0byBwcmV2ZW50IDIgaGFuZGxlcyBmcm9tIGNyb3NzaW5nIGVhY2hvdGhlci4gQ291bGQvc2hvdWxkIGJlIGltcHJvdmVkLlxuICAgICAgaWYgKHRoaXMuaGFuZGxlcy5pbmRleCgkaG5kbCkgPT09IDApIHtcbiAgICAgICAgdmFyIGgyVmFsID0gcGFyc2VGbG9hdCh0aGlzLiRoYW5kbGUyLmF0dHIoJ2FyaWEtdmFsdWVub3cnKSk7XG4gICAgICAgIGxvY2F0aW9uID0gbG9jYXRpb24gPj0gaDJWYWwgPyBoMlZhbCAtIHRoaXMub3B0aW9ucy5zdGVwIDogbG9jYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaDFWYWwgPSBwYXJzZUZsb2F0KHRoaXMuJGhhbmRsZS5hdHRyKCdhcmlhLXZhbHVlbm93JykpO1xuICAgICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uIDw9IGgxVmFsID8gaDFWYWwgKyB0aGlzLm9wdGlvbnMuc3RlcCA6IGxvY2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIHZlcnQgPSB0aGlzLm9wdGlvbnMudmVydGljYWwsXG4gICAgICAgIGhPclcgPSB2ZXJ0ID8gJ2hlaWdodCcgOiAnd2lkdGgnLFxuICAgICAgICBsT3JUID0gdmVydCA/ICd0b3AnIDogJ2xlZnQnLFxuICAgICAgICBoYW5kbGVEaW0gPSAkaG5kbFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtoT3JXXSxcbiAgICAgICAgZWxlbURpbSA9IHRoaXMuJGVsZW1lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbaE9yV10sXG4gICAgICAgIC8vcGVyY2VudGFnZSBvZiBiYXIgbWluL21heCB2YWx1ZSBiYXNlZCBvbiBjbGljayBvciBkcmFnIHBvaW50XG4gICAgICAgIHBjdE9mQmFyID0gdGhpcy5fcGN0T2ZCYXIobG9jYXRpb24pLFxuICAgICAgICAvL251bWJlciBvZiBhY3R1YWwgcGl4ZWxzIHRvIHNoaWZ0IHRoZSBoYW5kbGUsIGJhc2VkIG9uIHRoZSBwZXJjZW50YWdlIG9idGFpbmVkIGFib3ZlXG4gICAgICAgIHB4VG9Nb3ZlID0gKGVsZW1EaW0gLSBoYW5kbGVEaW0pICogcGN0T2ZCYXIsXG4gICAgICAgIC8vcGVyY2VudGFnZSBvZiBiYXIgdG8gc2hpZnQgdGhlIGhhbmRsZVxuICAgICAgICBtb3ZlbWVudCA9IChwZXJjZW50KHB4VG9Nb3ZlLCBlbGVtRGltKSAqIDEwMCkudG9GaXhlZCh0aGlzLm9wdGlvbnMuZGVjaW1hbCk7XG4gICAgICAgIC8vZml4aW5nIHRoZSBkZWNpbWFsIHZhbHVlIGZvciB0aGUgbG9jYXRpb24gbnVtYmVyLCBpcyBwYXNzZWQgdG8gb3RoZXIgbWV0aG9kcyBhcyBhIGZpeGVkIGZsb2F0aW5nLXBvaW50IHZhbHVlXG4gICAgICAgIGxvY2F0aW9uID0gcGFyc2VGbG9hdChsb2NhdGlvbi50b0ZpeGVkKHRoaXMub3B0aW9ucy5kZWNpbWFsKSk7XG4gICAgICAgIC8vIGRlY2xhcmUgZW1wdHkgb2JqZWN0IGZvciBjc3MgYWRqdXN0bWVudHMsIG9ubHkgdXNlZCB3aXRoIDIgaGFuZGxlZC1zbGlkZXJzXG4gICAgdmFyIGNzcyA9IHt9O1xuXG4gICAgdGhpcy5fc2V0VmFsdWVzKCRobmRsLCBsb2NhdGlvbik7XG5cbiAgICAvLyBUT0RPIHVwZGF0ZSB0byBjYWxjdWxhdGUgYmFzZWQgb24gdmFsdWVzIHNldCB0byByZXNwZWN0aXZlIGlucHV0cz8/XG4gICAgaWYgKGlzRGJsKSB7XG4gICAgICB2YXIgaXNMZWZ0SG5kbCA9IHRoaXMuaGFuZGxlcy5pbmRleCgkaG5kbCkgPT09IDAsXG4gICAgICAgICAgLy9lbXB0eSB2YXJpYWJsZSwgd2lsbCBiZSB1c2VkIGZvciBtaW4taGVpZ2h0L3dpZHRoIGZvciBmaWxsIGJhclxuICAgICAgICAgIGRpbSxcbiAgICAgICAgICAvL3BlcmNlbnRhZ2Ugdy9oIG9mIHRoZSBoYW5kbGUgY29tcGFyZWQgdG8gdGhlIHNsaWRlciBiYXJcbiAgICAgICAgICBoYW5kbGVQY3QgPSAgfn4ocGVyY2VudChoYW5kbGVEaW0sIGVsZW1EaW0pICogMTAwKTtcbiAgICAgIC8vaWYgbGVmdCBoYW5kbGUsIHRoZSBtYXRoIGlzIHNsaWdodGx5IGRpZmZlcmVudCB0aGFuIGlmIGl0J3MgdGhlIHJpZ2h0IGhhbmRsZSwgYW5kIHRoZSBsZWZ0L3RvcCBwcm9wZXJ0eSBuZWVkcyB0byBiZSBjaGFuZ2VkIGZvciB0aGUgZmlsbCBiYXJcbiAgICAgIGlmIChpc0xlZnRIbmRsKSB7XG4gICAgICAgIC8vbGVmdCBvciB0b3AgcGVyY2VudGFnZSB2YWx1ZSB0byBhcHBseSB0byB0aGUgZmlsbCBiYXIuXG4gICAgICAgIGNzc1tsT3JUXSA9IGAke21vdmVtZW50fSVgO1xuICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgbmV3IG1pbi1oZWlnaHQvd2lkdGggZm9yIHRoZSBmaWxsIGJhci5cbiAgICAgICAgZGltID0gcGFyc2VGbG9hdCh0aGlzLiRoYW5kbGUyWzBdLnN0eWxlW2xPclRdKSAtIG1vdmVtZW50ICsgaGFuZGxlUGN0O1xuICAgICAgICAvL3RoaXMgY2FsbGJhY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgZXJyb3JzIGFuZCBhbGxvdyB0aGUgcHJvcGVyIHBsYWNlbWVudCBhbmQgaW5pdGlhbGl6YXRpb24gb2YgYSAyLWhhbmRsZWQgc2xpZGVyXG4gICAgICAgIC8vcGx1cywgaXQgbWVhbnMgd2UgZG9uJ3QgY2FyZSBpZiAnZGltJyBpc05hTiBvbiBpbml0LCBpdCB3b24ndCBiZSBpbiB0aGUgZnV0dXJlLlxuICAgICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7IGNiKCk7IH0vL3RoaXMgaXMgb25seSBuZWVkZWQgZm9yIHRoZSBpbml0aWFsaXphdGlvbiBvZiAyIGhhbmRsZWQgc2xpZGVyc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9qdXN0IGNhY2hpbmcgdGhlIHZhbHVlIG9mIHRoZSBsZWZ0L2JvdHRvbSBoYW5kbGUncyBsZWZ0L3RvcCBwcm9wZXJ0eVxuICAgICAgICB2YXIgaGFuZGxlUG9zID0gcGFyc2VGbG9hdCh0aGlzLiRoYW5kbGVbMF0uc3R5bGVbbE9yVF0pO1xuICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgbmV3IG1pbi1oZWlnaHQvd2lkdGggZm9yIHRoZSBmaWxsIGJhci4gVXNlIGlzTmFOIHRvIHByZXZlbnQgZmFsc2UgcG9zaXRpdmVzIGZvciBudW1iZXJzIDw9IDBcbiAgICAgICAgLy9iYXNlZCBvbiB0aGUgcGVyY2VudGFnZSBvZiBtb3ZlbWVudCBvZiB0aGUgaGFuZGxlIGJlaW5nIG1hbmlwdWxhdGVkLCBsZXNzIHRoZSBvcHBvc2luZyBoYW5kbGUncyBsZWZ0L3RvcCBwb3NpdGlvbiwgcGx1cyB0aGUgcGVyY2VudGFnZSB3L2ggb2YgdGhlIGhhbmRsZSBpdHNlbGZcbiAgICAgICAgZGltID0gbW92ZW1lbnQgLSAoaXNOYU4oaGFuZGxlUG9zKSA/ICh0aGlzLm9wdGlvbnMuaW5pdGlhbFN0YXJ0IC0gdGhpcy5vcHRpb25zLnN0YXJ0KS8oKHRoaXMub3B0aW9ucy5lbmQtdGhpcy5vcHRpb25zLnN0YXJ0KS8xMDApIDogaGFuZGxlUG9zKSArIGhhbmRsZVBjdDtcbiAgICAgIH1cbiAgICAgIC8vIGFzc2lnbiB0aGUgbWluLWhlaWdodC93aWR0aCB0byBvdXIgY3NzIG9iamVjdFxuICAgICAgY3NzW2BtaW4tJHtoT3JXfWBdID0gYCR7ZGltfSVgO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQub25lKCdmaW5pc2hlZC56Zi5hbmltYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBoYW5kbGUgaXMgZG9uZSBtb3ZpbmcuXG4gICAgICAgICAgICAgICAgICAgICAqIEBldmVudCBTbGlkZXIjbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbGVtZW50LnRyaWdnZXIoJ21vdmVkLnpmLnNsaWRlcicsIFskaG5kbF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgLy9iZWNhdXNlIHdlIGRvbid0IGtub3cgZXhhY3RseSBob3cgdGhlIGhhbmRsZSB3aWxsIGJlIG1vdmVkLCBjaGVjayB0aGUgYW1vdW50IG9mIHRpbWUgaXQgc2hvdWxkIHRha2UgdG8gbW92ZS5cbiAgICB2YXIgbW92ZVRpbWUgPSB0aGlzLiRlbGVtZW50LmRhdGEoJ2RyYWdnaW5nJykgPyAxMDAwLzYwIDogdGhpcy5vcHRpb25zLm1vdmVUaW1lO1xuXG4gICAgTW92ZShtb3ZlVGltZSwgJGhuZGwsIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYWRqdXN0aW5nIHRoZSBsZWZ0L3RvcCBwcm9wZXJ0eSBvZiB0aGUgaGFuZGxlLCBiYXNlZCBvbiB0aGUgcGVyY2VudGFnZSBjYWxjdWxhdGVkIGFib3ZlXG4gICAgICAvLyBpZiBtb3ZlbWVudCBpc05hTiwgdGhhdCBpcyBiZWNhdXNlIHRoZSBzbGlkZXIgaXMgaGlkZGVuIGFuZCB3ZSBjYW5ub3QgZGV0ZXJtaW5lIGhhbmRsZSB3aWR0aCxcbiAgICAgIC8vIGZhbGwgYmFjayB0byBuZXh0IGJlc3QgZ3Vlc3MuXG4gICAgICBpZiAoaXNOYU4obW92ZW1lbnQpKSB7XG4gICAgICAgICRobmRsLmNzcyhsT3JULCBgJHtwY3RPZkJhciAqIDEwMH0lYCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJGhuZGwuY3NzKGxPclQsIGAke21vdmVtZW50fSVgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLmRvdWJsZVNpZGVkKSB7XG4gICAgICAgIC8vaWYgc2luZ2xlLWhhbmRsZWQsIGEgc2ltcGxlIG1ldGhvZCB0byBleHBhbmQgdGhlIGZpbGwgYmFyXG4gICAgICAgIF90aGlzLiRmaWxsLmNzcyhoT3JXLCBgJHtwY3RPZkJhciAqIDEwMH0lYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL290aGVyd2lzZSwgdXNlIHRoZSBjc3Mgb2JqZWN0IHdlIGNyZWF0ZWQgYWJvdmVcbiAgICAgICAgX3RoaXMuJGZpbGwuY3NzKGNzcyk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHZhbHVlIGhhcyBub3QgYmVlbiBjaGFuZ2UgZm9yIGEgZ2l2ZW4gdGltZS5cbiAgICAgKiBAZXZlbnQgU2xpZGVyI2NoYW5nZWRcbiAgICAgKi9cbiAgICBjbGVhclRpbWVvdXQoX3RoaXMudGltZW91dCk7XG4gICAgX3RoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIF90aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2NoYW5nZWQuemYuc2xpZGVyJywgWyRobmRsXSk7XG4gICAgfSwgX3RoaXMub3B0aW9ucy5jaGFuZ2VkRGVsYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluaXRpYWwgYXR0cmlidXRlIGZvciB0aGUgc2xpZGVyIGVsZW1lbnQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge051bWJlcn0gaWR4IC0gaW5kZXggb2YgdGhlIGN1cnJlbnQgaGFuZGxlL2lucHV0IHRvIHVzZS5cbiAgICovXG4gIF9zZXRJbml0QXR0cihpZHgpIHtcbiAgICB2YXIgaW5pdFZhbCA9IChpZHggPT09IDAgPyB0aGlzLm9wdGlvbnMuaW5pdGlhbFN0YXJ0IDogdGhpcy5vcHRpb25zLmluaXRpYWxFbmQpXG4gICAgdmFyIGlkID0gdGhpcy5pbnB1dHMuZXEoaWR4KS5hdHRyKCdpZCcpIHx8IEdldFlvRGlnaXRzKDYsICdzbGlkZXInKTtcbiAgICB0aGlzLmlucHV0cy5lcShpZHgpLmF0dHIoe1xuICAgICAgJ2lkJzogaWQsXG4gICAgICAnbWF4JzogdGhpcy5vcHRpb25zLmVuZCxcbiAgICAgICdtaW4nOiB0aGlzLm9wdGlvbnMuc3RhcnQsXG4gICAgICAnc3RlcCc6IHRoaXMub3B0aW9ucy5zdGVwXG4gICAgfSk7XG4gICAgdGhpcy5pbnB1dHMuZXEoaWR4KS52YWwoaW5pdFZhbCk7XG4gICAgdGhpcy5oYW5kbGVzLmVxKGlkeCkuYXR0cih7XG4gICAgICAncm9sZSc6ICdzbGlkZXInLFxuICAgICAgJ2FyaWEtY29udHJvbHMnOiBpZCxcbiAgICAgICdhcmlhLXZhbHVlbWF4JzogdGhpcy5vcHRpb25zLmVuZCxcbiAgICAgICdhcmlhLXZhbHVlbWluJzogdGhpcy5vcHRpb25zLnN0YXJ0LFxuICAgICAgJ2FyaWEtdmFsdWVub3cnOiBpbml0VmFsLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiB0aGlzLm9wdGlvbnMudmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgJ3RhYmluZGV4JzogMFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGlucHV0IGFuZCBgYXJpYS12YWx1ZW5vd2AgdmFsdWVzIGZvciB0aGUgc2xpZGVyIGVsZW1lbnQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGhhbmRsZSAtIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaGFuZGxlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsIC0gZmxvYXRpbmcgcG9pbnQgb2YgdGhlIG5ldyB2YWx1ZS5cbiAgICovXG4gIF9zZXRWYWx1ZXMoJGhhbmRsZSwgdmFsKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMub3B0aW9ucy5kb3VibGVTaWRlZCA/IHRoaXMuaGFuZGxlcy5pbmRleCgkaGFuZGxlKSA6IDA7XG4gICAgdGhpcy5pbnB1dHMuZXEoaWR4KS52YWwodmFsKTtcbiAgICAkaGFuZGxlLmF0dHIoJ2FyaWEtdmFsdWVub3cnLCB2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZXZlbnRzIG9uIHRoZSBzbGlkZXIgZWxlbWVudC5cbiAgICogQ2FsY3VsYXRlcyB0aGUgbmV3IGxvY2F0aW9uIG9mIHRoZSBjdXJyZW50IGhhbmRsZS5cbiAgICogSWYgdGhlcmUgYXJlIHR3byBoYW5kbGVzIGFuZCB0aGUgYmFyIHdhcyBjbGlja2VkLCBpdCBkZXRlcm1pbmVzIHdoaWNoIGhhbmRsZSB0byBtb3ZlLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGUgLSB0aGUgYGV2ZW50YCBvYmplY3QgcGFzc2VkIGZyb20gdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGhhbmRsZSAtIHRoZSBjdXJyZW50IGhhbmRsZSB0byBjYWxjdWxhdGUgZm9yLCBpZiBzZWxlY3RlZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbCAtIGZsb2F0aW5nIHBvaW50IG51bWJlciBmb3IgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgc2xpZGVyLlxuICAgKiBUT0RPIGNsZWFuIHRoaXMgdXAsIHRoZXJlJ3MgYSBsb3Qgb2YgcmVwZWF0ZWQgY29kZSBiZXR3ZWVuIHRoaXMgYW5kIHRoZSBfc2V0SGFuZGxlUG9zIGZuLlxuICAgKi9cbiAgX2hhbmRsZUV2ZW50KGUsICRoYW5kbGUsIHZhbCkge1xuICAgIHZhciB2YWx1ZSwgaGFzVmFsO1xuICAgIGlmICghdmFsKSB7Ly9jbGljayBvciBkcmFnIGV2ZW50c1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IHRoaXMub3B0aW9ucy52ZXJ0aWNhbCxcbiAgICAgICAgICBwYXJhbSA9IHZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IHZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsXG4gICAgICAgICAgZXZlbnRPZmZzZXQgPSB2ZXJ0aWNhbCA/IGUucGFnZVkgOiBlLnBhZ2VYLFxuICAgICAgICAgIGhhbGZPZkhhbmRsZSA9IHRoaXMuJGhhbmRsZVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtwYXJhbV0gLyAyLFxuICAgICAgICAgIGJhckRpbSA9IHRoaXMuJGVsZW1lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbcGFyYW1dLFxuICAgICAgICAgIHdpbmRvd1Njcm9sbCA9IHZlcnRpY2FsID8gJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDogJCh3aW5kb3cpLnNjcm9sbExlZnQoKTtcblxuXG4gICAgICB2YXIgZWxlbU9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KClbZGlyZWN0aW9uXTtcblxuICAgICAgLy8gdG91Y2ggZXZlbnRzIGVtdWxhdGVkIGJ5IHRoZSB0b3VjaCB1dGlsIGdpdmUgcG9zaXRpb24gcmVsYXRpdmUgdG8gc2NyZWVuLCBhZGQgd2luZG93LnNjcm9sbCB0byBldmVudCBjb29yZGluYXRlcy4uLlxuICAgICAgLy8gYmVzdCB3YXkgdG8gZ3Vlc3MgdGhpcyBpcyBzaW11bGF0ZWQgaXMgaWYgY2xpZW50WSA9PSBwYWdlWVxuICAgICAgaWYgKGUuY2xpZW50WSA9PT0gZS5wYWdlWSkgeyBldmVudE9mZnNldCA9IGV2ZW50T2Zmc2V0ICsgd2luZG93U2Nyb2xsOyB9XG4gICAgICB2YXIgZXZlbnRGcm9tQmFyID0gZXZlbnRPZmZzZXQgLSBlbGVtT2Zmc2V0O1xuICAgICAgdmFyIGJhclhZO1xuICAgICAgaWYgKGV2ZW50RnJvbUJhciA8IDApIHtcbiAgICAgICAgYmFyWFkgPSAwO1xuICAgICAgfSBlbHNlIGlmIChldmVudEZyb21CYXIgPiBiYXJEaW0pIHtcbiAgICAgICAgYmFyWFkgPSBiYXJEaW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYXJYWSA9IGV2ZW50RnJvbUJhcjtcbiAgICAgIH1cbiAgICAgIHZhciBvZmZzZXRQY3QgPSBwZXJjZW50KGJhclhZLCBiYXJEaW0pO1xuXG4gICAgICB2YWx1ZSA9IHRoaXMuX3ZhbHVlKG9mZnNldFBjdCk7XG5cbiAgICAgIC8vIHR1cm4gZXZlcnl0aGluZyBhcm91bmQgZm9yIFJUTCwgeWF5IG1hdGghXG4gICAgICBpZiAoUnRsKCkgJiYgIXRoaXMub3B0aW9ucy52ZXJ0aWNhbCkge3ZhbHVlID0gdGhpcy5vcHRpb25zLmVuZCAtIHZhbHVlO31cblxuICAgICAgdmFsdWUgPSBfdGhpcy5fYWRqdXN0VmFsdWUobnVsbCwgdmFsdWUpO1xuICAgICAgLy9ib29sZWFuIGZsYWcgZm9yIHRoZSBzZXRIYW5kbGVQb3MgZm4sIHNwZWNpZmljYWxseSBmb3IgdmVydGljYWwgc2xpZGVyc1xuICAgICAgaGFzVmFsID0gZmFsc2U7XG5cbiAgICAgIGlmICghJGhhbmRsZSkgey8vZmlndXJlIG91dCB3aGljaCBoYW5kbGUgaXQgaXMsIHBhc3MgaXQgdG8gdGhlIG5leHQgZnVuY3Rpb24uXG4gICAgICAgIHZhciBmaXJzdEhuZGxQb3MgPSBhYnNQb3NpdGlvbih0aGlzLiRoYW5kbGUsIGRpcmVjdGlvbiwgYmFyWFksIHBhcmFtKSxcbiAgICAgICAgICAgIHNlY25kSG5kbFBvcyA9IGFic1Bvc2l0aW9uKHRoaXMuJGhhbmRsZTIsIGRpcmVjdGlvbiwgYmFyWFksIHBhcmFtKTtcbiAgICAgICAgICAgICRoYW5kbGUgPSBmaXJzdEhuZGxQb3MgPD0gc2VjbmRIbmRsUG9zID8gdGhpcy4kaGFuZGxlIDogdGhpcy4kaGFuZGxlMjtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7Ly9jaGFuZ2UgZXZlbnQgb24gaW5wdXRcbiAgICAgIHZhbHVlID0gdGhpcy5fYWRqdXN0VmFsdWUobnVsbCwgdmFsKTtcbiAgICAgIGhhc1ZhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0SGFuZGxlUG9zKCRoYW5kbGUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3RlcyB2YWx1ZSBmb3IgaGFuZGxlIGluIHJlZ2FyZCB0byBzdGVwIHZhbHVlLiByZXR1cm5zIGFkanVzdGVkIHZhbHVlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGhhbmRsZSAtIHRoZSBzZWxlY3RlZCBoYW5kbGUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIGFkanVzdC4gdXNlZCBpZiAkaGFuZGxlIGlzIGZhbHN5XG4gICAqL1xuICBfYWRqdXN0VmFsdWUoJGhhbmRsZSwgdmFsdWUpIHtcbiAgICB2YXIgdmFsLFxuICAgICAgc3RlcCA9IHRoaXMub3B0aW9ucy5zdGVwLFxuICAgICAgZGl2ID0gcGFyc2VGbG9hdChzdGVwLzIpLFxuICAgICAgbGVmdCwgcHJldl92YWwsIG5leHRfdmFsO1xuICAgIGlmICghISRoYW5kbGUpIHtcbiAgICAgIHZhbCA9IHBhcnNlRmxvYXQoJGhhbmRsZS5hdHRyKCdhcmlhLXZhbHVlbm93JykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsID49IDApIHtcbiAgICAgIGxlZnQgPSB2YWwgJSBzdGVwO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gc3RlcCArICh2YWwgJSBzdGVwKTtcbiAgICB9XG4gICAgcHJldl92YWwgPSB2YWwgLSBsZWZ0O1xuICAgIG5leHRfdmFsID0gcHJldl92YWwgKyBzdGVwO1xuICAgIGlmIChsZWZ0ID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICB2YWwgPSB2YWwgPj0gcHJldl92YWwgKyBkaXYgPyBuZXh0X3ZhbCA6IHByZXZfdmFsO1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNsaWRlciBlbGVtZW50cy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuX2V2ZW50c0ZvckhhbmRsZSh0aGlzLiRoYW5kbGUpO1xuICAgIGlmKHRoaXMuaGFuZGxlc1sxXSkge1xuICAgICAgdGhpcy5fZXZlbnRzRm9ySGFuZGxlKHRoaXMuJGhhbmRsZTIpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIGEgcGFydGljdWxhciBoYW5kbGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkaGFuZGxlIC0gdGhlIGN1cnJlbnQgaGFuZGxlIHRvIGFwcGx5IGxpc3RlbmVycyB0by5cbiAgICovXG4gIF9ldmVudHNGb3JIYW5kbGUoJGhhbmRsZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIGN1ckhhbmRsZSxcbiAgICAgICAgdGltZXI7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZUV2ZW50ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBpZHggPSBfdGhpcy5pbnB1dHMuaW5kZXgoJCh0aGlzKSk7XG4gICAgICAgIF90aGlzLl9oYW5kbGVFdmVudChlLCBfdGhpcy5oYW5kbGVzLmVxKGlkeCksICQodGhpcykudmFsKCkpO1xuICAgICAgfTtcblxuICAgICAgLy8gSUUgb25seSB0cmlnZ2VycyB0aGUgY2hhbmdlIGV2ZW50IHdoZW4gdGhlIGlucHV0IGxvc2VzIGZvY3VzIHdoaWNoIHN0cmljdGx5IGZvbGxvd3MgdGhlIEhUTUwgc3BlY2lmaWNhdGlvblxuICAgICAgLy8gbGlzdGVuIGZvciB0aGUgZW50ZXIga2V5IGFuZCB0cmlnZ2VyIGEgY2hhbmdlXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2lucHV0Lmh0bWwjY29tbW9uLWlucHV0LWVsZW1lbnQtZXZlbnRzXG4gICAgICB0aGlzLmlucHV0cy5vZmYoJ2tleXVwLnpmLnNsaWRlcicpLm9uKCdrZXl1cC56Zi5zbGlkZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZihlLmtleUNvZGUgPT0gMTMpIGhhbmRsZUNoYW5nZUV2ZW50LmNhbGwodGhpcywgZSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pbnB1dHMub2ZmKCdjaGFuZ2UuemYuc2xpZGVyJykub24oJ2NoYW5nZS56Zi5zbGlkZXInLCBoYW5kbGVDaGFuZ2VFdmVudCk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xpY2tTZWxlY3QpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ2NsaWNrLnpmLnNsaWRlcicpLm9uKCdjbGljay56Zi5zbGlkZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKF90aGlzLiRlbGVtZW50LmRhdGEoJ2RyYWdnaW5nJykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgICAgICBpZiAoISQoZS50YXJnZXQpLmlzKCdbZGF0YS1zbGlkZXItaGFuZGxlXScpKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5kb3VibGVTaWRlZCkge1xuICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlRXZlbnQoZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpcy5faGFuZGxlRXZlbnQoZSwgX3RoaXMuJGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKSB7XG4gICAgICB0aGlzLmhhbmRsZXMuYWRkVG91Y2goKTtcblxuICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgJGhhbmRsZVxuICAgICAgICAub2ZmKCdtb3VzZWRvd24uemYuc2xpZGVyJylcbiAgICAgICAgLm9uKCdtb3VzZWRvd24uemYuc2xpZGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICRoYW5kbGUuYWRkQ2xhc3MoJ2lzLWRyYWdnaW5nJyk7XG4gICAgICAgICAgX3RoaXMuJGZpbGwuYWRkQ2xhc3MoJ2lzLWRyYWdnaW5nJyk7Ly9cbiAgICAgICAgICBfdGhpcy4kZWxlbWVudC5kYXRhKCdkcmFnZ2luZycsIHRydWUpO1xuXG4gICAgICAgICAgY3VySGFuZGxlID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgJGJvZHkub24oJ21vdXNlbW92ZS56Zi5zbGlkZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBfdGhpcy5faGFuZGxlRXZlbnQoZSwgY3VySGFuZGxlKTtcblxuICAgICAgICAgIH0pLm9uKCdtb3VzZXVwLnpmLnNsaWRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIF90aGlzLl9oYW5kbGVFdmVudChlLCBjdXJIYW5kbGUpO1xuXG4gICAgICAgICAgICAkaGFuZGxlLnJlbW92ZUNsYXNzKCdpcy1kcmFnZ2luZycpO1xuICAgICAgICAgICAgX3RoaXMuJGZpbGwucmVtb3ZlQ2xhc3MoJ2lzLWRyYWdnaW5nJyk7XG4gICAgICAgICAgICBfdGhpcy4kZWxlbWVudC5kYXRhKCdkcmFnZ2luZycsIGZhbHNlKTtcblxuICAgICAgICAgICAgJGJvZHkub2ZmKCdtb3VzZW1vdmUuemYuc2xpZGVyIG1vdXNldXAuemYuc2xpZGVyJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLy8gcHJldmVudCBldmVudHMgdHJpZ2dlcmVkIGJ5IHRvdWNoXG4gICAgICAub24oJ3NlbGVjdHN0YXJ0LnpmLnNsaWRlciB0b3VjaG1vdmUuemYuc2xpZGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkaGFuZGxlLm9mZigna2V5ZG93bi56Zi5zbGlkZXInKS5vbigna2V5ZG93bi56Zi5zbGlkZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgXyRoYW5kbGUgPSAkKHRoaXMpLFxuICAgICAgICAgIGlkeCA9IF90aGlzLm9wdGlvbnMuZG91YmxlU2lkZWQgPyBfdGhpcy5oYW5kbGVzLmluZGV4KF8kaGFuZGxlKSA6IDAsXG4gICAgICAgICAgb2xkVmFsdWUgPSBwYXJzZUZsb2F0KF90aGlzLmlucHV0cy5lcShpZHgpLnZhbCgpKSxcbiAgICAgICAgICBuZXdWYWx1ZTtcblxuICAgICAgLy8gaGFuZGxlIGtleWJvYXJkIGV2ZW50IHdpdGgga2V5Ym9hcmQgdXRpbFxuICAgICAgS2V5Ym9hcmQuaGFuZGxlS2V5KGUsICdTbGlkZXInLCB7XG4gICAgICAgIGRlY3JlYXNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IG9sZFZhbHVlIC0gX3RoaXMub3B0aW9ucy5zdGVwO1xuICAgICAgICB9LFxuICAgICAgICBpbmNyZWFzZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBvbGRWYWx1ZSArIF90aGlzLm9wdGlvbnMuc3RlcDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVjcmVhc2VfZmFzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBvbGRWYWx1ZSAtIF90aGlzLm9wdGlvbnMuc3RlcCAqIDEwO1xuICAgICAgICB9LFxuICAgICAgICBpbmNyZWFzZV9mYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IG9sZFZhbHVlICsgX3RoaXMub3B0aW9ucy5zdGVwICogMTA7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBfdGhpcy5vcHRpb25zLnN0YXJ0O1xuICAgICAgICB9LFxuICAgICAgICBtYXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gX3RoaXMub3B0aW9ucy5lbmQ7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZWQ6IGZ1bmN0aW9uKCkgeyAvLyBvbmx5IHNldCBoYW5kbGUgcG9zIHdoZW4gZXZlbnQgd2FzIGhhbmRsZWQgc3BlY2lhbGx5XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF90aGlzLl9zZXRIYW5kbGVQb3MoXyRoYW5kbGUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvKmlmIChuZXdWYWx1ZSkgeyAvLyBpZiBwcmVzc2VkIGtleSBoYXMgc3BlY2lhbCBmdW5jdGlvbiwgdXBkYXRlIHZhbHVlXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3RoaXMuX3NldEhhbmRsZVBvcyhfJGhhbmRsZSwgbmV3VmFsdWUpO1xuICAgICAgfSovXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIHNsaWRlciBwbHVnaW4uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXMub2ZmKCcuemYuc2xpZGVyJyk7XG4gICAgdGhpcy5pbnB1dHMub2ZmKCcuemYuc2xpZGVyJyk7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJy56Zi5zbGlkZXInKTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG59XG5cblNsaWRlci5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIE1pbmltdW0gdmFsdWUgZm9yIHRoZSBzbGlkZXIgc2NhbGUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgc3RhcnQ6IDAsXG4gIC8qKlxuICAgKiBNYXhpbXVtIHZhbHVlIGZvciB0aGUgc2xpZGVyIHNjYWxlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDEwMFxuICAgKi9cbiAgZW5kOiAxMDAsXG4gIC8qKlxuICAgKiBNaW5pbXVtIHZhbHVlIGNoYW5nZSBwZXIgY2hhbmdlIGV2ZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIHN0ZXA6IDEsXG4gIC8qKlxuICAgKiBWYWx1ZSBhdCB3aGljaCB0aGUgaGFuZGxlL2lucHV0ICoobGVmdCBoYW5kbGUvZmlyc3QgaW5wdXQpKiBzaG91bGQgYmUgc2V0IHRvIG9uIGluaXRpYWxpemF0aW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIGluaXRpYWxTdGFydDogMCxcbiAgLyoqXG4gICAqIFZhbHVlIGF0IHdoaWNoIHRoZSByaWdodCBoYW5kbGUvc2Vjb25kIGlucHV0IHNob3VsZCBiZSBzZXQgdG8gb24gaW5pdGlhbGl6YXRpb24uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMTAwXG4gICAqL1xuICBpbml0aWFsRW5kOiAxMDAsXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIGlucHV0IHRvIGJlIGxvY2F0ZWQgb3V0c2lkZSB0aGUgY29udGFpbmVyIGFuZCB2aXNpYmxlLiBTZXQgdG8gYnkgdGhlIEpTXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBiaW5kaW5nOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgdXNlciB0byBjbGljay90YXAgb24gdGhlIHNsaWRlciBiYXIgdG8gc2VsZWN0IGEgdmFsdWUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGNsaWNrU2VsZWN0OiB0cnVlLFxuICAvKipcbiAgICogU2V0IHRvIHRydWUgYW5kIHVzZSB0aGUgYHZlcnRpY2FsYCBjbGFzcyB0byBjaGFuZ2UgYWxpZ25tZW50IHRvIHZlcnRpY2FsLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdmVydGljYWw6IGZhbHNlLFxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGRyYWcgdGhlIHNsaWRlciBoYW5kbGUocykgdG8gc2VsZWN0IGEgdmFsdWUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBzbGlkZXIgYW5kIHByZXZlbnRzIGV2ZW50IGxpc3RlbmVycyBmcm9tIGJlaW5nIGFwcGxpZWQuIERvdWJsZSBjaGVja2VkIGJ5IEpTIHdpdGggYGRpc2FibGVkQ2xhc3NgLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2Ugb2YgdHdvIGhhbmRsZXMuIERvdWJsZSBjaGVja2VkIGJ5IHRoZSBKUy4gQ2hhbmdlcyBzb21lIGxvZ2ljIGhhbmRsaW5nLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZG91YmxlU2lkZWQ6IGZhbHNlLFxuICAvKipcbiAgICogUG90ZW50aWFsIGZ1dHVyZSBmZWF0dXJlLlxuICAgKi9cbiAgLy8gc3RlcHM6IDEwMCxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0aGUgcGx1Z2luIHNob3VsZCBnbyB0byBmb3IgZmxvYXRpbmcgcG9pbnQgcHJlY2lzaW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDJcbiAgICovXG4gIGRlY2ltYWw6IDIsXG4gIC8qKlxuICAgKiBUaW1lIGRlbGF5IGZvciBkcmFnZ2VkIGVsZW1lbnRzLlxuICAgKi9cbiAgLy8gZHJhZ0RlbGF5OiAwLFxuICAvKipcbiAgICogVGltZSwgaW4gbXMsIHRvIGFuaW1hdGUgdGhlIG1vdmVtZW50IG9mIGEgc2xpZGVyIGhhbmRsZSBpZiB1c2VyIGNsaWNrcy90YXBzIG9uIHRoZSBiYXIuIE5lZWRzIHRvIGJlIG1hbnVhbGx5IHNldCBpZiB1cGRhdGluZyB0aGUgdHJhbnNpdGlvbiB0aW1lIGluIHRoZSBTYXNzIHNldHRpbmdzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDIwMFxuICAgKi9cbiAgbW92ZVRpbWU6IDIwMCwvL3VwZGF0ZSB0aGlzIGlmIGNoYW5naW5nIHRoZSB0cmFuc2l0aW9uIHRpbWUgaW4gdGhlIHNhc3NcbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gZGlzYWJsZWQgc2xpZGVycy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnZGlzYWJsZWQnXG4gICAqL1xuICBkaXNhYmxlZENsYXNzOiAnZGlzYWJsZWQnLFxuICAvKipcbiAgICogV2lsbCBpbnZlcnQgdGhlIGRlZmF1bHQgbGF5b3V0IGZvciBhIHZlcnRpY2FsPHNwYW4gZGF0YS10b29sdGlwIHRpdGxlPVwid2hvIHdvdWxkIGRvIHRoaXM/Pz9cIj4gPC9zcGFuPnNsaWRlci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGludmVydFZlcnRpY2FsOiBmYWxzZSxcbiAgLyoqXG4gICAqIE1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIGBjaGFuZ2VkLnpmLXNsaWRlcmAgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHZhbHVlIGNoYW5nZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCA1MDBcbiAgICovXG4gIGNoYW5nZWREZWxheTogNTAwLFxuICAvKipcbiAgKiBCYXNldmFsdWUgZm9yIG5vbi1saW5lYXIgc2xpZGVyc1xuICAqIEBvcHRpb25cbiAgKiBAdHlwZSB7bnVtYmVyfVxuICAqIEBkZWZhdWx0IDVcbiAgKi9cbiAgbm9uTGluZWFyQmFzZTogNSxcbiAgLyoqXG4gICogQmFzZXZhbHVlIGZvciBub24tbGluZWFyIHNsaWRlcnMsIHBvc3NpYmxlIHZhbHVlcyBhcmU6IGAnbGluZWFyJ2AsIGAncG93J2AgJiBgJ2xvZydgLiBQb3cgYW5kIExvZyB1c2UgdGhlIG5vbkxpbmVhckJhc2Ugc2V0dGluZy5cbiAgKiBAb3B0aW9uXG4gICogQHR5cGUge3N0cmluZ31cbiAgKiBAZGVmYXVsdCAnbGluZWFyJ1xuICAqL1xuICBwb3NpdGlvblZhbHVlRnVuY3Rpb246ICdsaW5lYXInLFxufTtcblxuZnVuY3Rpb24gcGVyY2VudChmcmFjLCBudW0pIHtcbiAgcmV0dXJuIChmcmFjIC8gbnVtKTtcbn1cbmZ1bmN0aW9uIGFic1Bvc2l0aW9uKCRoYW5kbGUsIGRpciwgY2xpY2tQb3MsIHBhcmFtKSB7XG4gIHJldHVybiBNYXRoLmFicygoJGhhbmRsZS5wb3NpdGlvbigpW2Rpcl0gKyAoJGhhbmRsZVtwYXJhbV0oKSAvIDIpKSAtIGNsaWNrUG9zKTtcbn1cbmZ1bmN0aW9uIGJhc2VMb2coYmFzZSwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubG9nKHZhbHVlKS9NYXRoLmxvZyhiYXNlKVxufVxuXG5leHBvcnQge1NsaWRlcn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNb3Rpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24nO1xuXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4gIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGAke3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykge1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0oKSk7XG5cbmNvbnN0IHRyaWdnZXJzID0gKGVsLCB0eXBlKSA9PiB7XG4gIGVsLmRhdGEodHlwZSkuc3BsaXQoJyAnKS5mb3JFYWNoKGlkID0+IHtcbiAgICAkKGAjJHtpZH1gKVsgdHlwZSA9PT0gJ2Nsb3NlJyA/ICd0cmlnZ2VyJyA6ICd0cmlnZ2VySGFuZGxlciddKGAke3R5cGV9LnpmLnRyaWdnZXJgLCBbZWxdKTtcbiAgfSk7XG59O1xuXG52YXIgVHJpZ2dlcnMgPSB7XG4gIExpc3RlbmVyczoge1xuICAgIEJhc2ljOiB7fSxcbiAgICBHbG9iYWw6IHt9XG4gIH0sXG4gIEluaXRpYWxpemVyczoge31cbn1cblxuVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljICA9IHtcbiAgb3Blbkxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICB0cmlnZ2VycygkKHRoaXMpLCAnb3BlbicpO1xuICB9LFxuICBjbG9zZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICBjbG9zZWFibGVMaXN0ZW5lcjogZnVuY3Rpb24oZSkge1xuICAgIGxldCBhbmltYXRpb24gPSAkKHRoaXMpLmRhdGEoJ2Nsb3NhYmxlJyk7XG5cbiAgICAvLyBPbmx5IGNsb3NlIHRoZSBmaXJzdCBjbG9zYWJsZSBlbGVtZW50LiBTZWUgaHR0cHM6Ly9naXQuaW8vemYtNzgzM1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZihhbmltYXRpb24gIT09ICcnKXtcbiAgICAgIE1vdGlvbi5hbmltYXRlT3V0KCQodGhpcyksIGFuaW1hdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgICQodGhpcykuZmFkZU91dCgpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRm9jdXNMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUtZm9jdXMnKTtcbiAgICAkKGAjJHtpZH1gKS50cmlnZ2VySGFuZGxlcigndG9nZ2xlLnpmLnRyaWdnZXInLCBbJCh0aGlzKV0pO1xuICB9XG59O1xuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLW9wZW5dIHdpbGwgcmV2ZWFsIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtb3Blbl0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zZV0gd2lsbCBjbG9zZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cbi8vIElmIHVzZWQgd2l0aG91dCBhIHZhbHVlIG9uIFtkYXRhLWNsb3NlXSwgdGhlIGV2ZW50IHdpbGwgYnViYmxlLCBhbGxvd2luZyBpdCB0byBjbG9zZSBhIHBhcmVudCBjb21wb25lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGVdIHdpbGwgdG9nZ2xlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NhYmxlXSB3aWxsIHJlc3BvbmQgdG8gY2xvc2UuemYudHJpZ2dlciBldmVudHMuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbG9zZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2Nsb3NlLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VhYmxlXSwgW2RhdGEtY2xvc2FibGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGUtZm9jdXNdIHdpbGwgcmVzcG9uZCB0byBjb21pbmcgaW4gYW5kIG91dCBvZiBmb2N1c1xuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZS1mb2N1c10nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG59XG5cblxuXG4vLyBNb3JlIEdsb2JhbC9jb21wbGV4IGxpc3RlbmVycyBhbmQgdHJpZ2dlcnNcblRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwgID0ge1xuICByZXNpemVMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgcmVzaXplIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJyZXNpemVcIik7XG4gIH0sXG4gIHNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSBzY3JvbGwgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInNjcm9sbFwiKTtcbiAgfSxcbiAgY2xvc2VNZUxpc3RlbmVyOiBmdW5jdGlvbihlLCBwbHVnaW5JZCl7XG4gICAgbGV0IHBsdWdpbiA9IGUubmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XG4gICAgbGV0IHBsdWdpbnMgPSAkKGBbZGF0YS0ke3BsdWdpbn1dYCkubm90KGBbZGF0YS15ZXRpLWJveD1cIiR7cGx1Z2luSWR9XCJdYCk7XG5cbiAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIGxldCBfdGhpcyA9ICQodGhpcyk7XG4gICAgICBfdGhpcy50cmlnZ2VySGFuZGxlcignY2xvc2UuemYudHJpZ2dlcicsIFtfdGhpc10pO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIEdsb2JhbCwgcGFyc2VzIHdob2xlIGRvY3VtZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lciA9IGZ1bmN0aW9uKHBsdWdpbk5hbWUpIHtcbiAgdmFyIHlldGlCb3hlcyA9ICQoJ1tkYXRhLXlldGktYm94XScpLFxuICAgICAgcGx1Z05hbWVzID0gWydkcm9wZG93bicsICd0b29sdGlwJywgJ3JldmVhbCddO1xuXG4gIGlmKHBsdWdpbk5hbWUpe1xuICAgIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMucHVzaChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBsdWdpbk5hbWVbMF0gPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcyA9IHBsdWdOYW1lcy5jb25jYXQocGx1Z2luTmFtZSk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmVycm9yKCdQbHVnaW4gbmFtZXMgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICB9XG4gIGlmKHlldGlCb3hlcy5sZW5ndGgpe1xuICAgIGxldCBsaXN0ZW5lcnMgPSBwbHVnTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYGNsb3NlbWUuemYuJHtuYW1lfWA7XG4gICAgfSkuam9pbignICcpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihsaXN0ZW5lcnMpLm9uKGxpc3RlbmVycywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5jbG9zZU1lTGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsIHRyaWdnZXIsIGxpc3RlbmVyKSB7XG4gIGxldCB0aW1lciwgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMyk7XG4gICQod2luZG93KS5vZmYodHJpZ2dlcikub24odHJpZ2dlciwgZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aW1lcikgeyBjbGVhclRpbWVvdXQodGltZXIpOyB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsaXN0ZW5lci5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCBkZWJvdW5jZSB8fCAxMCk7Ly9kZWZhdWx0IHRpbWUgdG8gZW1pdCBzY3JvbGwgZXZlbnRcbiAgfSk7XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXJlc2l6ZV0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Jlc2l6ZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5yZXNpemVMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1zY3JvbGxdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdzY3JvbGwuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuc2Nyb2xsTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIgPSBmdW5jdGlvbigkZWxlbSkge1xuICBpZighTXV0YXRpb25PYnNlcnZlcil7IHJldHVybiBmYWxzZTsgfVxuICBsZXQgJG5vZGVzID0gJGVsZW0uZmluZCgnW2RhdGEtcmVzaXplXSwgW2RhdGEtc2Nyb2xsXSwgW2RhdGEtbXV0YXRlXScpO1xuXG4gIC8vZWxlbWVudCBjYWxsYmFja1xuICB2YXIgbGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZHNMaXN0KSB7XG4gICAgdmFyICR0YXJnZXQgPSAkKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udGFyZ2V0KTtcblxuICAgIC8vdHJpZ2dlciB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnQgZGVwZW5kaW5nIG9uIHR5cGVcbiAgICBzd2l0Y2ggKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udHlwZSkge1xuICAgICAgY2FzZSBcImF0dHJpYnV0ZXNcIjpcbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInNjcm9sbFwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LCB3aW5kb3cucGFnZVlPZmZzZXRdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwicmVzaXplXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXRdKTtcbiAgICAgICAgIH1cbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImNoaWxkTGlzdFwiOlxuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vbm90aGluZ1xuICAgIH1cbiAgfTtcblxuICBpZiAoJG5vZGVzLmxlbmd0aCkge1xuICAgIC8vZm9yIGVhY2ggZWxlbWVudCB0aGF0IG5lZWRzIHRvIGxpc3RlbiBmb3IgcmVzaXppbmcsIHNjcm9sbGluZywgb3IgbXV0YXRpb24gYWRkIGEgc2luZ2xlIG9ic2VydmVyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gJG5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgdmFyIGVsZW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24pO1xuICAgICAgZWxlbWVudE9ic2VydmVyLm9ic2VydmUoJG5vZGVzW2ldLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogW1wiZGF0YS1ldmVudHNcIiwgXCJzdHlsZVwiXSB9KTtcbiAgICB9XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyKCRkb2N1bWVudCk7XG5cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lcigpO1xufVxuXG5cblRyaWdnZXJzLmluaXQgPSBmdW5jdGlvbiAoJCwgRm91bmRhdGlvbikge1xuICBvbkxvYWQoJCh3aW5kb3cpLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQudHJpZ2dlcnNJbml0aWFsaXplZCAhPT0gdHJ1ZSkge1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycygpO1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgJC50cmlnZ2Vyc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmKEZvdW5kYXRpb24pIHtcbiAgICBGb3VuZGF0aW9uLlRyaWdnZXJzID0gVHJpZ2dlcnM7XG4gICAgLy8gTGVnYWN5IGluY2x1ZGVkIHRvIGJlIGJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciBub3cuXG4gICAgRm91bmRhdGlvbi5JSGVhcllvdSA9IFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnNcbiAgfVxufVxuXG5leHBvcnQge1RyaWdnZXJzfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
