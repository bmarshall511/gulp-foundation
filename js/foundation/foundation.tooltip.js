(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.box"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.box", "./foundation.util.mediaQuery", "./foundation.util.motion", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.tooltip"] = factory(require("./foundation.core"), require("./foundation.util.box"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.tooltip"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.box"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.mediaQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_box__, __WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 20);
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
      "./foundation.util.box":
      /*!********************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.box"],"amd":"./foundation.util.box","commonjs":"./foundation.util.box","commonjs2":"./foundation.util.box"} ***!
        \********************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_box__;
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
      "./js/entries/plugins/foundation.tooltip.js":
      /*!**************************************************!*\
        !*** ./js/entries/plugins/foundation.tooltip.js ***!
        \**************************************************/

      /*! exports provided: Foundation, Tooltip */

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


        var _foundation_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.tooltip */
        "./js/foundation.tooltip.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Tooltip", function () {
          return _foundation_tooltip__WEBPACK_IMPORTED_MODULE_1__["Tooltip"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_tooltip__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], 'Tooltip');
        /***/

      },

      /***/
      "./js/foundation.positionable.js":
      /*!***************************************!*\
        !*** ./js/foundation.positionable.js ***!
        \***************************************/

      /*! exports provided: Positionable */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Positionable", function () {
          return Positionable;
        });
        /* harmony import */


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./foundation.util.box */
        "./foundation.util.box");
        /* harmony import */


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.plugin */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__);

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

        var POSITIONS = ['left', 'right', 'top', 'bottom'];
        var VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
        var HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
        var ALIGNMENTS = {
          'left': VERTICAL_ALIGNMENTS,
          'right': VERTICAL_ALIGNMENTS,
          'top': HORIZONTAL_ALIGNMENTS,
          'bottom': HORIZONTAL_ALIGNMENTS
        };

        function nextItem(item, array) {
          var currentIdx = array.indexOf(item);

          if (currentIdx === array.length - 1) {
            return array[0];
          } else {
            return array[currentIdx + 1];
          }
        }

        var Positionable = /*#__PURE__*/function (_Plugin) {
          _inherits(Positionable, _Plugin);

          function Positionable() {
            _classCallCheck(this, Positionable);

            return _possibleConstructorReturn(this, _getPrototypeOf(Positionable).apply(this, arguments));
          }

          _createClass(Positionable, [{
            key: "_init",

            /**
             * Abstract class encapsulating the tether-like explicit positioning logic
             * including repositioning based on overlap.
             * Expects classes to define defaults for vOffset, hOffset, position,
             * alignment, allowOverlap, and allowBottomOverlap. They can do this by
             * extending the defaults, or (for now recommended due to the way docs are
             * generated) by explicitly declaring them.
             *
             **/
            value: function _init() {
              this.triedPositions = {};
              this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
              this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
              this.originalPosition = this.position;
              this.originalAlignment = this.alignment;
            }
          }, {
            key: "_getDefaultPosition",
            value: function _getDefaultPosition() {
              return 'bottom';
            }
          }, {
            key: "_getDefaultAlignment",
            value: function _getDefaultAlignment() {
              switch (this.position) {
                case 'bottom':
                case 'top':
                  return Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["rtl"])() ? 'right' : 'left';

                case 'left':
                case 'right':
                  return 'bottom';
              }
            }
            /**
             * Adjusts the positionable possible positions by iterating through alignments
             * and positions.
             * @function
             * @private
             */

          }, {
            key: "_reposition",
            value: function _reposition() {
              if (this._alignmentsExhausted(this.position)) {
                this.position = nextItem(this.position, POSITIONS);
                this.alignment = ALIGNMENTS[this.position][0];
              } else {
                this._realign();
              }
            }
            /**
             * Adjusts the dropdown pane possible positions by iterating through alignments
             * on the current position.
             * @function
             * @private
             */

          }, {
            key: "_realign",
            value: function _realign() {
              this._addTriedPosition(this.position, this.alignment);

              this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
            }
          }, {
            key: "_addTriedPosition",
            value: function _addTriedPosition(position, alignment) {
              this.triedPositions[position] = this.triedPositions[position] || [];
              this.triedPositions[position].push(alignment);
            }
          }, {
            key: "_positionsExhausted",
            value: function _positionsExhausted() {
              var isExhausted = true;

              for (var i = 0; i < POSITIONS.length; i++) {
                isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
              }

              return isExhausted;
            }
          }, {
            key: "_alignmentsExhausted",
            value: function _alignmentsExhausted(position) {
              return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;
            } // When we're trying to center, we don't want to apply offset that's going to
            // take us just off center, so wrap around to return 0 for the appropriate
            // offset in those alignments.  TODO: Figure out if we want to make this
            // configurable behavior... it feels more intuitive, especially for tooltips, but
            // it's possible someone might actually want to start from center and then nudge
            // slightly off.

          }, {
            key: "_getVOffset",
            value: function _getVOffset() {
              return this.options.vOffset;
            }
          }, {
            key: "_getHOffset",
            value: function _getHOffset() {
              return this.options.hOffset;
            }
          }, {
            key: "_setPosition",
            value: function _setPosition($anchor, $element, $parent) {
              if ($anchor.attr('aria-expanded') === 'false') {
                return false;
              }

              if (!this.options.allowOverlap) {
                // restore original position & alignment before checking overlap
                this.position = this.originalPosition;
                this.alignment = this.originalAlignment;
              }

              $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));

              if (!this.options.allowOverlap) {
                var minOverlap = 100000000; // default coordinates to how we start, in case we can't figure out better

                var minCoordinates = {
                  position: this.position,
                  alignment: this.alignment
                };

                while (!this._positionsExhausted()) {
                  var overlap = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);

                  if (overlap === 0) {
                    return;
                  }

                  if (overlap < minOverlap) {
                    minOverlap = overlap;
                    minCoordinates = {
                      position: this.position,
                      alignment: this.alignment
                    };
                  }

                  this._reposition();

                  $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
                } // If we get through the entire loop, there was no non-overlapping
                // position available. Pick the version with least overlap.


                this.position = minCoordinates.position;
                this.alignment = minCoordinates.alignment;
                $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
              }
            }
          }]);

          return Positionable;
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

        Positionable.defaults = {
          /**
           * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
           * @option
           * @type {string}
           * @default 'auto'
           */
          position: 'auto',

          /**
           * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
           * @option
           * @type {string}
           * @default 'auto'
           */
          alignment: 'auto',

          /**
           * Allow overlap of container/window. If false, dropdown positionable first
           * try to position as defined by data-position and data-alignment, but
           * reposition if it would cause an overflow.
           * @option
           * @type {boolean}
           * @default false
           */
          allowOverlap: false,

          /**
           * Allow overlap of only the bottom of the container. This is the most common
           * behavior for dropdowns, allowing the dropdown to extend the bottom of the
           * screen but not otherwise influence or break out of the container.
           * @option
           * @type {boolean}
           * @default true
           */
          allowBottomOverlap: true,

          /**
           * Number of pixels the positionable should be separated vertically from anchor
           * @option
           * @type {number}
           * @default 0
           */
          vOffset: 0,

          /**
           * Number of pixels the positionable should be separated horizontally from anchor
           * @option
           * @type {number}
           * @default 0
           */
          hOffset: 0
        };
        /***/
      },

      /***/
      "./js/foundation.tooltip.js":
      /*!**********************************!*\
        !*** ./js/foundation.tooltip.js ***!
        \**********************************/

      /*! exports provided: Tooltip */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Tooltip", function () {
          return Tooltip;
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


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.mediaQuery */
        "./foundation.util.mediaQuery");
        /* harmony import */


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.util.triggers */
        "./js/foundation.util.triggers.js");
        /* harmony import */


        var _foundation_positionable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.positionable */
        "./js/foundation.positionable.js");

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

        function _get(target, property, receiver) {
          if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get;
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);

              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);

              if (desc.get) {
                return desc.get.call(receiver);
              }

              return desc.value;
            };
          }

          return _get(target, property, receiver || target);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }

          return object;
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
         * Tooltip module.
         * @module foundation.tooltip
         * @requires foundation.util.box
         * @requires foundation.util.mediaQuery
         * @requires foundation.util.triggers
         */


        var Tooltip = /*#__PURE__*/function (_Positionable) {
          _inherits(Tooltip, _Positionable);

          function Tooltip() {
            _classCallCheck(this, Tooltip);

            return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
          }

          _createClass(Tooltip, [{
            key: "_setup",

            /**
             * Creates a new instance of a Tooltip.
             * @class
             * @name Tooltip
             * @fires Tooltip#init
             * @param {jQuery} element - jQuery object to attach a tooltip to.
             * @param {Object} options - object to extend the default configuration.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tooltip.defaults, this.$element.data(), options);
              this.className = 'Tooltip'; // ie9 back compat

              this.isActive = false;
              this.isClick = false; // Triggers init is idempotent, just need to make sure it is initialized

              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              this._init();
            }
            /**
             * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

              var elemId = this.$element.attr('aria-describedby') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'tooltip');
              this.options.tipText = this.options.tipText || this.$element.attr('title');
              this.template = this.options.template ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.template) : this._buildTemplate(elemId);

              if (this.options.allowHtml) {
                this.template.appendTo(document.body).html(this.options.tipText).hide();
              } else {
                this.template.appendTo(document.body).text(this.options.tipText).hide();
              }

              this.$element.attr({
                'title': '',
                'aria-describedby': elemId,
                'data-yeti-box': elemId,
                'data-toggle': elemId,
                'data-resize': elemId
              }).addClass(this.options.triggerClass);

              _get(_getPrototypeOf(Tooltip.prototype), "_init", this).call(this);

              this._events();
            }
          }, {
            key: "_getDefaultPosition",
            value: function _getDefaultPosition() {
              // handle legacy classnames
              var position = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
              var elementClassName = this.$element[0].className;

              if (this.$element[0] instanceof SVGElement) {
                elementClassName = elementClassName.baseVal;
              }

              return position ? position[0] : 'top';
              var position = elementClassName.match(/\b(top|left|right)\b/g);
              position = position ? position[0] : 'tp';
            }
          }, {
            key: "_getDefaultAlignment",
            value: function _getDefaultAlignment() {
              return 'center';
            }
          }, {
            key: "_getHOffset",
            value: function _getHOffset() {
              if (this.position === 'left' || this.position === 'right') {
                return this.options.hOffset + this.options.tooltipWidth;
              } else {
                return this.options.hOffset;
              }
            }
          }, {
            key: "_getVOffset",
            value: function _getVOffset() {
              if (this.position === 'top' || this.position === 'bottom') {
                return this.options.vOffset + this.options.tooltipHeight;
              } else {
                return this.options.vOffset;
              }
            }
            /**
             * builds the tooltip element, adds attributes, and returns the template.
             * @private
             */

          }, {
            key: "_buildTemplate",
            value: function _buildTemplate(id) {
              var templateClasses = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
              var $template = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass(templateClasses).attr({
                'role': 'tooltip',
                'aria-hidden': true,
                'data-is-active': false,
                'data-is-focus': false,
                'id': id
              });
              return $template;
            }
            /**
             * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
             * if the tooltip is larger than the screen width, default to full width - any user selected margin
             * @private
             */

          }, {
            key: "_setPosition",
            value: function _setPosition() {
              _get(_getPrototypeOf(Tooltip.prototype), "_setPosition", this).call(this, this.$element, this.template);
            }
            /**
             * reveals the tooltip, and fires an event to close any other open tooltips on the page
             * @fires Tooltip#closeme
             * @fires Tooltip#show
             * @function
             */

          }, {
            key: "show",
            value: function show() {
              if (this.options.showOn !== 'all' && !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"].is(this.options.showOn)) {
                // console.error('The screen is too small to display this tooltip');
                return false;
              }

              var _this = this;

              this.template.css('visibility', 'hidden').show();

              this._setPosition();

              this.template.removeClass('top bottom left right').addClass(this.position);
              this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);
              /**
               * Fires to close all other open tooltips on the page
               * @event Closeme#tooltip
               */

              this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));
              this.template.attr({
                'data-is-active': true,
                'aria-hidden': false
              });
              _this.isActive = true; // console.log(this.template);

              this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {//maybe do stuff?
              });
              /**
               * Fires when the tooltip is shown
               * @event Tooltip#show
               */

              this.$element.trigger('show.zf.tooltip');
            }
            /**
             * Hides the current tooltip, and resets the positioning class if it was changed due to collision
             * @fires Tooltip#hide
             * @function
             */

          }, {
            key: "hide",
            value: function hide() {
              // console.log('hiding', this.$element.data('yeti-box'));
              var _this = this;

              this.template.stop().attr({
                'aria-hidden': true,
                'data-is-active': false
              }).fadeOut(this.options.fadeOutDuration, function () {
                _this.isActive = false;
                _this.isClick = false;
              });
              /**
               * fires when the tooltip is hidden
               * @event Tooltip#hide
               */

              this.$element.trigger('hide.zf.tooltip');
            }
            /**
             * adds event listeners for the tooltip and its anchor
             * TODO combine some of the listeners like focus and mouseenter, etc.
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              var _this = this;

              var hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined';
              var $template = this.template;
              var isFocus = false; // `disableForTouch: Fully disable the tooltip on touch devices

              if (hasTouch && this.options.disableForTouch) return;

              if (!this.options.disableHover) {
                this.$element.on('mouseenter.zf.tooltip', function (e) {
                  if (!_this.isActive) {
                    _this.timeout = setTimeout(function () {
                      _this.show();
                    }, _this.options.hoverDelay);
                  }
                }).on('mouseleave.zf.tooltip', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["ignoreMousedisappear"])(function (e) {
                  clearTimeout(_this.timeout);

                  if (!isFocus || _this.isClick && !_this.options.clickOpen) {
                    _this.hide();
                  }
                }));
              }

              if (hasTouch) {
                this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function (e) {
                  _this.isActive ? _this.hide() : _this.show();
                });
              }

              if (this.options.clickOpen) {
                this.$element.on('mousedown.zf.tooltip', function (e) {
                  if (_this.isClick) {//_this.hide();
                    // _this.isClick = false;
                  } else {
                    _this.isClick = true;

                    if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
                      _this.show();
                    }
                  }
                });
              } else {
                this.$element.on('mousedown.zf.tooltip', function (e) {
                  _this.isClick = true;
                });
              }

              this.$element.on({
                // 'toggle.zf.trigger': this.toggle.bind(this),
                // 'close.zf.trigger': this.hide.bind(this)
                'close.zf.trigger': this.hide.bind(this)
              });
              this.$element.on('focus.zf.tooltip', function (e) {
                isFocus = true;

                if (_this.isClick) {
                  // If we're not showing open on clicks, we need to pretend a click-launched focus isn't
                  // a real focus, otherwise on hover and come back we get bad behavior
                  if (!_this.options.clickOpen) {
                    isFocus = false;
                  }

                  return false;
                } else {
                  _this.show();
                }
              }).on('focusout.zf.tooltip', function (e) {
                isFocus = false;
                _this.isClick = false;

                _this.hide();
              }).on('resizeme.zf.trigger', function () {
                if (_this.isActive) {
                  _this._setPosition();
                }
              });
            }
            /**
             * adds a toggle method, in addition to the static show() & hide() functions
             * @function
             */

          }, {
            key: "toggle",
            value: function toggle() {
              if (this.isActive) {
                this.hide();
              } else {
                this.show();
              }
            }
            /**
             * Destroys an instance of tooltip, removes template element from the view.
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');
              this.template.remove();
            }
          }]);

          return Tooltip;
        }(_foundation_positionable__WEBPACK_IMPORTED_MODULE_4__["Positionable"]);

        Tooltip.defaults = {
          /**
           * Time, in ms, before a tooltip should open on hover.
           * @option
           * @type {number}
           * @default 200
           */
          hoverDelay: 200,

          /**
           * Time, in ms, a tooltip should take to fade into view.
           * @option
           * @type {number}
           * @default 150
           */
          fadeInDuration: 150,

          /**
           * Time, in ms, a tooltip should take to fade out of view.
           * @option
           * @type {number}
           * @default 150
           */
          fadeOutDuration: 150,

          /**
           * Disables hover events from opening the tooltip if set to true
           * @option
           * @type {boolean}
           * @default false
           */
          disableHover: false,

          /**
           * Disable the tooltip for touch devices.
           * This can be useful to make elements with a tooltip on it trigger their
           * action on the first tap instead of displaying the tooltip.
           * @option
           * @type {booelan}
           * @default false
           */
          disableForTouch: false,

          /**
           * Optional addtional classes to apply to the tooltip template on init.
           * @option
           * @type {string}
           * @default ''
           */
          templateClasses: '',

          /**
           * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
           * @option
           * @type {string}
           * @default 'tooltip'
           */
          tooltipClass: 'tooltip',

          /**
           * Class applied to the tooltip anchor element.
           * @option
           * @type {string}
           * @default 'has-tip'
           */
          triggerClass: 'has-tip',

          /**
           * Minimum breakpoint size at which to open the tooltip.
           * @option
           * @type {string}
           * @default 'small'
           */
          showOn: 'small',

          /**
           * Custom template to be used to generate markup for tooltip.
           * @option
           * @type {string}
           * @default ''
           */
          template: '',

          /**
           * Text displayed in the tooltip template on open.
           * @option
           * @type {string}
           * @default ''
           */
          tipText: '',
          touchCloseText: 'Tap to close.',

          /**
           * Allows the tooltip to remain open if triggered with a click or touch event.
           * @option
           * @type {boolean}
           * @default true
           */
          clickOpen: true,

          /**
           * Position of tooltip. Can be left, right, bottom, top, or auto.
           * @option
           * @type {string}
           * @default 'auto'
           */
          position: 'auto',

          /**
           * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
           * @option
           * @type {string}
           * @default 'auto'
           */
          alignment: 'auto',

          /**
           * Allow overlap of container/window. If false, tooltip will first try to
           * position as defined by data-position and data-alignment, but reposition if
           * it would cause an overflow.  @option
           * @type {boolean}
           * @default false
           */
          allowOverlap: false,

          /**
           * Allow overlap of only the bottom of the container. This is the most common
           * behavior for dropdowns, allowing the dropdown to extend the bottom of the
           * screen but not otherwise influence or break out of the container.
           * Less common for tooltips.
           * @option
           * @type {boolean}
           * @default false
           */
          allowBottomOverlap: false,

          /**
           * Distance, in pixels, the template should push away from the anchor on the Y axis.
           * @option
           * @type {number}
           * @default 0
           */
          vOffset: 0,

          /**
           * Distance, in pixels, the template should push away from the anchor on the X axis
           * @option
           * @type {number}
           * @default 0
           */
          hOffset: 0,

          /**
           * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
           * @option
           * @type {number}
           * @default 14
           */
          tooltipHeight: 14,

          /**
           * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
           * @option
           * @type {number}
           * @default 12
           */
          tooltipWidth: 12,

          /**
          * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
          * allowing HTML may open yourself up to XSS attacks.
          * @option
          * @type {boolean}
          * @default false
          */
          allowHtml: false
        };
        /**
         * TODO utilize resize event trigger
         */

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
      20:
      /*!********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.tooltip.js ***!
        \********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.tooltip.js */
        "./js/entries/plugins/foundation.tooltip.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi5wb3NpdGlvbmFibGUuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlRvb2x0aXAiLCJQT1NJVElPTlMiLCJWRVJUSUNBTF9BTElHTk1FTlRTIiwiSE9SSVpPTlRBTF9BTElHTk1FTlRTIiwiQUxJR05NRU5UUyIsImN1cnJlbnRJZHgiLCJhcnJheSIsIlBvc2l0aW9uYWJsZSIsIlJ0bCIsIm5leHRJdGVtIiwicG9zaXRpb24iLCJhbGlnbm1lbnQiLCJpc0V4aGF1c3RlZCIsImkiLCIkYW5jaG9yIiwiJGVsZW1lbnQiLCIkcGFyZW50IiwiQm94IiwibWluT3ZlcmxhcCIsIm1pbkNvb3JkaW5hdGVzIiwib3ZlcmxhcCIsIlBsdWdpbiIsImFsbG93T3ZlcmxhcCIsImFsbG93Qm90dG9tT3ZlcmxhcCIsInZPZmZzZXQiLCJoT2Zmc2V0IiwiZWxlbWVudCIsIm9wdGlvbnMiLCIkIiwiVHJpZ2dlcnMiLCJNZWRpYVF1ZXJ5IiwiZWxlbUlkIiwiR2V0WW9EaWdpdHMiLCJkb2N1bWVudCIsImVsZW1lbnRDbGFzc05hbWUiLCJpZCIsInRlbXBsYXRlQ2xhc3NlcyIsIiR0ZW1wbGF0ZSIsIl90aGlzIiwiaGFzVG91Y2giLCJ3aW5kb3ciLCJpc0ZvY3VzIiwic2V0VGltZW91dCIsImlnbm9yZU1vdXNlZGlzYXBwZWFyIiwiY2xlYXJUaW1lb3V0IiwiaG92ZXJEZWxheSIsImZhZGVJbkR1cmF0aW9uIiwiZmFkZU91dER1cmF0aW9uIiwiZGlzYWJsZUhvdmVyIiwiZGlzYWJsZUZvclRvdWNoIiwidG9vbHRpcENsYXNzIiwidHJpZ2dlckNsYXNzIiwic2hvd09uIiwidGVtcGxhdGUiLCJ0aXBUZXh0IiwidG91Y2hDbG9zZVRleHQiLCJjbGlja09wZW4iLCJ0b29sdGlwSGVpZ2h0IiwidG9vbHRpcFdpZHRoIiwiYWxsb3dIdG1sIiwiTXV0YXRpb25PYnNlcnZlciIsInByZWZpeGVzIiwidHJpZ2dlcnMiLCJlbCIsInR5cGUiLCJMaXN0ZW5lcnMiLCJCYXNpYyIsIkdsb2JhbCIsIkluaXRpYWxpemVycyIsIm9wZW5MaXN0ZW5lciIsImNsb3NlTGlzdGVuZXIiLCJ0b2dnbGVMaXN0ZW5lciIsImNsb3NlYWJsZUxpc3RlbmVyIiwiYW5pbWF0aW9uIiwiZSIsIk1vdGlvbiIsInRvZ2dsZUZvY3VzTGlzdGVuZXIiLCIkZWxlbSIsInJlc2l6ZUxpc3RlbmVyIiwiJG5vZGVzIiwic2Nyb2xsTGlzdGVuZXIiLCJjbG9zZU1lTGlzdGVuZXIiLCJwbHVnaW4iLCJwbHVnaW5zIiwieWV0aUJveGVzIiwicGx1Z05hbWVzIiwicGx1Z2luTmFtZSIsImNvbnNvbGUiLCJsaXN0ZW5lcnMiLCJhcmdzIiwiQXJyYXkiLCJ0aW1lciIsImxpc3RlbmVyIiwiZGVib3VuY2UiLCJkZWJvdW5jZUdsb2JhbExpc3RlbmVyIiwibGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiIsIiR0YXJnZXQiLCJtdXRhdGlvblJlY29yZHNMaXN0IiwiZWxlbWVudE9ic2VydmVyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwiYXR0cmlidXRlRmlsdGVyIiwiJGRvY3VtZW50Iiwib25Mb2FkIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFNBQUEsZ0NBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsOEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsdUJBQUEsRUFBQSw4QkFBQSxFQUFBLDBCQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsb0JBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDhCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxvQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsUUFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLDRDQUFBLEVBQUEsZ0RBQUEsRUFBQSx1REFBQSxFQUFBLG1EQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtBQUFpRCxVQUFBLEtBQUEsRUFBQTtBQUFqRCxTQUFBO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxRQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUE7QUFBeUMsVUFBQSxVQUFBLEVBQUEsSUFBekM7QUFBeUMsVUFBQSxLQUFBLEVBQUE7QUFBekMsU0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsSUFBQSxRQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEdBQUEsRUFBQTtBQUFnSCxpQkFBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJLENBQUE7QUFDQTs7QUFBQSxlQUFBLEVBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7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QUFBQSxFQUFBQSxhQUFBQSxFQUE0Q2hELFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBNUNnRCxZQUFBQTtBQUZGaEQsU0FBQUEsQyxDQUtBO0FBQ0E7OztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGdCQUFBQSxHQUF5QyxVQUFBLEtBQUEsRUFBVztBQUNsRGdELFVBQUFBLEtBQUssQ0FBTEEsR0FBQUEsQ0FBQUEsa0JBQUFBLEVBQThCaEQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE5QmdELGFBQUFBO0FBQ0FBLFVBQUFBLEtBQUssQ0FBTEEsRUFBQUEsQ0FBQUEsa0JBQUFBLEVBQUFBLGNBQUFBLEVBQTZDaEQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE3Q2dELGFBQUFBO0FBRkZoRCxTQUFBQSxDLENBS0E7OztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGlCQUFBQSxHQUEwQyxVQUFBLEtBQUEsRUFBVztBQUNuRGdELFVBQUFBLEtBQUssQ0FBTEEsR0FBQUEsQ0FBQUEsa0JBQUFBLEVBQThCaEQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE5QmdELGNBQUFBO0FBQ0FBLFVBQUFBLEtBQUssQ0FBTEEsRUFBQUEsQ0FBQUEsa0JBQUFBLEVBQUFBLGVBQUFBLEVBQThDaEQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE5Q2dELGNBQUFBO0FBRkZoRCxTQUFBQSxDLENBS0E7OztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLG9CQUFBQSxHQUE2QyxVQUFBLEtBQUEsRUFBVztBQUN0RGdELFVBQUFBLEtBQUssQ0FBTEEsR0FBQUEsQ0FBQUEsa0JBQUFBLEVBQThCaEQsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUE5QmdELGlCQUFBQTtBQUNBQSxVQUFBQSxLQUFLLENBQUxBLEVBQUFBLENBQUFBLGtCQUFBQSxFQUFBQSxtQ0FBQUEsRUFBa0VoRCxRQUFRLENBQVJBLFNB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QVEsQ0FBUkEsWUFBQUEsQ0FBdEI5QixrQkFBQUE7QUFDRDtBQWJIOEIsU0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUEEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtDQUFBOzs7Ozs7QVBVQTtDQVZBIiwiZmlsZSI6ImZvdW5kYXRpb24vZm91bmRhdGlvbi50b29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwuYm94XCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3VuZGF0aW9uLnRvb2x0aXBcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmJveFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnRvb2x0aXBcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLmJveFwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5tb3Rpb25cIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2JveF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbWVkaWFRdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbW90aW9uX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXzsiLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi50b29sdGlwJztcbkZvdW5kYXRpb24ucGx1Z2luKFRvb2x0aXAsICdUb29sdGlwJyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIFRvb2x0aXAgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwuYm94JztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBydGwgYXMgUnRsIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuXG5jb25zdCBQT1NJVElPTlMgPSBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddO1xuY29uc3QgVkVSVElDQUxfQUxJR05NRU5UUyA9IFsndG9wJywgJ2JvdHRvbScsICdjZW50ZXInXTtcbmNvbnN0IEhPUklaT05UQUxfQUxJR05NRU5UUyA9IFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXTtcblxuY29uc3QgQUxJR05NRU5UUyA9IHtcbiAgJ2xlZnQnOiBWRVJUSUNBTF9BTElHTk1FTlRTLFxuICAncmlnaHQnOiBWRVJUSUNBTF9BTElHTk1FTlRTLFxuICAndG9wJzogSE9SSVpPTlRBTF9BTElHTk1FTlRTLFxuICAnYm90dG9tJzogSE9SSVpPTlRBTF9BTElHTk1FTlRTXG59XG5cbmZ1bmN0aW9uIG5leHRJdGVtKGl0ZW0sIGFycmF5KSB7XG4gIHZhciBjdXJyZW50SWR4ID0gYXJyYXkuaW5kZXhPZihpdGVtKTtcbiAgaWYoY3VycmVudElkeCA9PT0gYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJyYXlbY3VycmVudElkeCArIDFdO1xuICB9XG59XG5cblxuY2xhc3MgUG9zaXRpb25hYmxlIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IGNsYXNzIGVuY2Fwc3VsYXRpbmcgdGhlIHRldGhlci1saWtlIGV4cGxpY2l0IHBvc2l0aW9uaW5nIGxvZ2ljXG4gICAqIGluY2x1ZGluZyByZXBvc2l0aW9uaW5nIGJhc2VkIG9uIG92ZXJsYXAuXG4gICAqIEV4cGVjdHMgY2xhc3NlcyB0byBkZWZpbmUgZGVmYXVsdHMgZm9yIHZPZmZzZXQsIGhPZmZzZXQsIHBvc2l0aW9uLFxuICAgKiBhbGlnbm1lbnQsIGFsbG93T3ZlcmxhcCwgYW5kIGFsbG93Qm90dG9tT3ZlcmxhcC4gVGhleSBjYW4gZG8gdGhpcyBieVxuICAgKiBleHRlbmRpbmcgdGhlIGRlZmF1bHRzLCBvciAoZm9yIG5vdyByZWNvbW1lbmRlZCBkdWUgdG8gdGhlIHdheSBkb2NzIGFyZVxuICAgKiBnZW5lcmF0ZWQpIGJ5IGV4cGxpY2l0bHkgZGVjbGFyaW5nIHRoZW0uXG4gICAqXG4gICAqKi9cblxuICBfaW5pdCgpIHtcbiAgICB0aGlzLnRyaWVkUG9zaXRpb25zID0ge307XG4gICAgdGhpcy5wb3NpdGlvbiAgPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gPT09ICdhdXRvJyA/IHRoaXMuX2dldERlZmF1bHRQb3NpdGlvbigpIDogdGhpcy5vcHRpb25zLnBvc2l0aW9uO1xuICAgIHRoaXMuYWxpZ25tZW50ID0gdGhpcy5vcHRpb25zLmFsaWdubWVudCA9PT0gJ2F1dG8nID8gdGhpcy5fZ2V0RGVmYXVsdEFsaWdubWVudCgpIDogdGhpcy5vcHRpb25zLmFsaWdubWVudDtcbiAgICB0aGlzLm9yaWdpbmFsUG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIHRoaXMub3JpZ2luYWxBbGlnbm1lbnQgPSB0aGlzLmFsaWdubWVudDtcbiAgfVxuXG4gIF9nZXREZWZhdWx0UG9zaXRpb24gKCkge1xuICAgIHJldHVybiAnYm90dG9tJztcbiAgfVxuXG4gIF9nZXREZWZhdWx0QWxpZ25tZW50KCkge1xuICAgIHN3aXRjaCh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgcmV0dXJuIFJ0bCgpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHBvc2l0aW9uYWJsZSBwb3NzaWJsZSBwb3NpdGlvbnMgYnkgaXRlcmF0aW5nIHRocm91Z2ggYWxpZ25tZW50c1xuICAgKiBhbmQgcG9zaXRpb25zLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZXBvc2l0aW9uKCkge1xuICAgIGlmKHRoaXMuX2FsaWdubWVudHNFeGhhdXN0ZWQodGhpcy5wb3NpdGlvbikpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBuZXh0SXRlbSh0aGlzLnBvc2l0aW9uLCBQT1NJVElPTlMpO1xuICAgICAgdGhpcy5hbGlnbm1lbnQgPSBBTElHTk1FTlRTW3RoaXMucG9zaXRpb25dWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZWFsaWduKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGRyb3Bkb3duIHBhbmUgcG9zc2libGUgcG9zaXRpb25zIGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGFsaWdubWVudHNcbiAgICogb24gdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlYWxpZ24oKSB7XG4gICAgdGhpcy5fYWRkVHJpZWRQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCB0aGlzLmFsaWdubWVudClcbiAgICB0aGlzLmFsaWdubWVudCA9IG5leHRJdGVtKHRoaXMuYWxpZ25tZW50LCBBTElHTk1FTlRTW3RoaXMucG9zaXRpb25dKVxuICB9XG5cbiAgX2FkZFRyaWVkUG9zaXRpb24ocG9zaXRpb24sIGFsaWdubWVudCkge1xuICAgIHRoaXMudHJpZWRQb3NpdGlvbnNbcG9zaXRpb25dID0gdGhpcy50cmllZFBvc2l0aW9uc1twb3NpdGlvbl0gfHwgW11cbiAgICB0aGlzLnRyaWVkUG9zaXRpb25zW3Bvc2l0aW9uXS5wdXNoKGFsaWdubWVudCk7XG4gIH1cblxuICBfcG9zaXRpb25zRXhoYXVzdGVkKCkge1xuICAgIHZhciBpc0V4aGF1c3RlZCA9IHRydWU7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IFBPU0lUSU9OUy5sZW5ndGg7IGkrKykge1xuICAgICAgaXNFeGhhdXN0ZWQgPSBpc0V4aGF1c3RlZCAmJiB0aGlzLl9hbGlnbm1lbnRzRXhoYXVzdGVkKFBPU0lUSU9OU1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBpc0V4aGF1c3RlZDtcbiAgfVxuXG4gIF9hbGlnbm1lbnRzRXhoYXVzdGVkKHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpZWRQb3NpdGlvbnNbcG9zaXRpb25dICYmIHRoaXMudHJpZWRQb3NpdGlvbnNbcG9zaXRpb25dLmxlbmd0aCA9PSBBTElHTk1FTlRTW3Bvc2l0aW9uXS5sZW5ndGg7XG4gIH1cblxuXG4gIC8vIFdoZW4gd2UncmUgdHJ5aW5nIHRvIGNlbnRlciwgd2UgZG9uJ3Qgd2FudCB0byBhcHBseSBvZmZzZXQgdGhhdCdzIGdvaW5nIHRvXG4gIC8vIHRha2UgdXMganVzdCBvZmYgY2VudGVyLCBzbyB3cmFwIGFyb3VuZCB0byByZXR1cm4gMCBmb3IgdGhlIGFwcHJvcHJpYXRlXG4gIC8vIG9mZnNldCBpbiB0aG9zZSBhbGlnbm1lbnRzLiAgVE9ETzogRmlndXJlIG91dCBpZiB3ZSB3YW50IHRvIG1ha2UgdGhpc1xuICAvLyBjb25maWd1cmFibGUgYmVoYXZpb3IuLi4gaXQgZmVlbHMgbW9yZSBpbnR1aXRpdmUsIGVzcGVjaWFsbHkgZm9yIHRvb2x0aXBzLCBidXRcbiAgLy8gaXQncyBwb3NzaWJsZSBzb21lb25lIG1pZ2h0IGFjdHVhbGx5IHdhbnQgdG8gc3RhcnQgZnJvbSBjZW50ZXIgYW5kIHRoZW4gbnVkZ2VcbiAgLy8gc2xpZ2h0bHkgb2ZmLlxuICBfZ2V0Vk9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZPZmZzZXQ7XG4gIH1cblxuICBfZ2V0SE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhPZmZzZXQ7XG4gIH1cblxuICBfc2V0UG9zaXRpb24oJGFuY2hvciwgJGVsZW1lbnQsICRwYXJlbnQpIHtcbiAgICBpZigkYW5jaG9yLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJyl7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYWxsb3dPdmVybGFwKSB7XG4gICAgICAvLyByZXN0b3JlIG9yaWdpbmFsIHBvc2l0aW9uICYgYWxpZ25tZW50IGJlZm9yZSBjaGVja2luZyBvdmVybGFwXG4gICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vcmlnaW5hbFBvc2l0aW9uO1xuICAgICAgdGhpcy5hbGlnbm1lbnQgPSB0aGlzLm9yaWdpbmFsQWxpZ25tZW50O1xuICAgIH1cblxuICAgICRlbGVtZW50Lm9mZnNldChCb3guR2V0RXhwbGljaXRPZmZzZXRzKCRlbGVtZW50LCAkYW5jaG9yLCB0aGlzLnBvc2l0aW9uLCB0aGlzLmFsaWdubWVudCwgdGhpcy5fZ2V0Vk9mZnNldCgpLCB0aGlzLl9nZXRIT2Zmc2V0KCkpKTtcblxuICAgIGlmKCF0aGlzLm9wdGlvbnMuYWxsb3dPdmVybGFwKSB7XG4gICAgICB2YXIgbWluT3ZlcmxhcCA9IDEwMDAwMDAwMDtcbiAgICAgIC8vIGRlZmF1bHQgY29vcmRpbmF0ZXMgdG8gaG93IHdlIHN0YXJ0LCBpbiBjYXNlIHdlIGNhbid0IGZpZ3VyZSBvdXQgYmV0dGVyXG4gICAgICB2YXIgbWluQ29vcmRpbmF0ZXMgPSB7cG9zaXRpb246IHRoaXMucG9zaXRpb24sIGFsaWdubWVudDogdGhpcy5hbGlnbm1lbnR9O1xuICAgICAgd2hpbGUoIXRoaXMuX3Bvc2l0aW9uc0V4aGF1c3RlZCgpKSB7XG4gICAgICAgIGxldCBvdmVybGFwID0gQm94Lk92ZXJsYXBBcmVhKCRlbGVtZW50LCAkcGFyZW50LCBmYWxzZSwgZmFsc2UsIHRoaXMub3B0aW9ucy5hbGxvd0JvdHRvbU92ZXJsYXApO1xuICAgICAgICBpZihvdmVybGFwID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYob3ZlcmxhcCA8IG1pbk92ZXJsYXApIHtcbiAgICAgICAgICBtaW5PdmVybGFwID0gb3ZlcmxhcDtcbiAgICAgICAgICBtaW5Db29yZGluYXRlcyA9IHtwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgYWxpZ25tZW50OiB0aGlzLmFsaWdubWVudH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXBvc2l0aW9uKCk7XG5cbiAgICAgICAgJGVsZW1lbnQub2Zmc2V0KEJveC5HZXRFeHBsaWNpdE9mZnNldHMoJGVsZW1lbnQsICRhbmNob3IsIHRoaXMucG9zaXRpb24sIHRoaXMuYWxpZ25tZW50LCB0aGlzLl9nZXRWT2Zmc2V0KCksIHRoaXMuX2dldEhPZmZzZXQoKSkpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgZ2V0IHRocm91Z2ggdGhlIGVudGlyZSBsb29wLCB0aGVyZSB3YXMgbm8gbm9uLW92ZXJsYXBwaW5nXG4gICAgICAvLyBwb3NpdGlvbiBhdmFpbGFibGUuIFBpY2sgdGhlIHZlcnNpb24gd2l0aCBsZWFzdCBvdmVybGFwLlxuICAgICAgdGhpcy5wb3NpdGlvbiA9IG1pbkNvb3JkaW5hdGVzLnBvc2l0aW9uO1xuICAgICAgdGhpcy5hbGlnbm1lbnQgPSBtaW5Db29yZGluYXRlcy5hbGlnbm1lbnQ7XG4gICAgICAkZWxlbWVudC5vZmZzZXQoQm94LkdldEV4cGxpY2l0T2Zmc2V0cygkZWxlbWVudCwgJGFuY2hvciwgdGhpcy5wb3NpdGlvbiwgdGhpcy5hbGlnbm1lbnQsIHRoaXMuX2dldFZPZmZzZXQoKSwgdGhpcy5fZ2V0SE9mZnNldCgpKSk7XG4gICAgfVxuICB9XG5cbn1cblxuUG9zaXRpb25hYmxlLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogUG9zaXRpb24gb2YgcG9zaXRpb25hYmxlIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgb3IgYXV0by5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnYXV0bydcbiAgICovXG4gIHBvc2l0aW9uOiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGlnbm1lbnQgb2YgcG9zaXRpb25hYmxlIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgY2VudGVyLCBvciBhdXRvLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgYWxpZ25tZW50OiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIGNvbnRhaW5lci93aW5kb3cuIElmIGZhbHNlLCBkcm9wZG93biBwb3NpdGlvbmFibGUgZmlyc3RcbiAgICogdHJ5IHRvIHBvc2l0aW9uIGFzIGRlZmluZWQgYnkgZGF0YS1wb3NpdGlvbiBhbmQgZGF0YS1hbGlnbm1lbnQsIGJ1dFxuICAgKiByZXBvc2l0aW9uIGlmIGl0IHdvdWxkIGNhdXNlIGFuIG92ZXJmbG93LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYWxsb3dPdmVybGFwOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93IG92ZXJsYXAgb2Ygb25seSB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXIuIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uXG4gICAqIGJlaGF2aW9yIGZvciBkcm9wZG93bnMsIGFsbG93aW5nIHRoZSBkcm9wZG93biB0byBleHRlbmQgdGhlIGJvdHRvbSBvZiB0aGVcbiAgICogc2NyZWVuIGJ1dCBub3Qgb3RoZXJ3aXNlIGluZmx1ZW5jZSBvciBicmVhayBvdXQgb2YgdGhlIGNvbnRhaW5lci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYWxsb3dCb3R0b21PdmVybGFwOiB0cnVlLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyB0aGUgcG9zaXRpb25hYmxlIHNob3VsZCBiZSBzZXBhcmF0ZWQgdmVydGljYWxseSBmcm9tIGFuY2hvclxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIHZPZmZzZXQ6IDAsXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcGl4ZWxzIHRoZSBwb3NpdGlvbmFibGUgc2hvdWxkIGJlIHNlcGFyYXRlZCBob3Jpem9udGFsbHkgZnJvbSBhbmNob3JcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBoT2Zmc2V0OiAwLFxufVxuXG5leHBvcnQge1Bvc2l0aW9uYWJsZX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCB7IEdldFlvRGlnaXRzLCBpZ25vcmVNb3VzZWRpc2FwcGVhciB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IE1lZGlhUXVlcnkgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5JztcbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuaW1wb3J0IHsgUG9zaXRpb25hYmxlIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnBvc2l0aW9uYWJsZSc7XG5cbi8qKlxuICogVG9vbHRpcCBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24udG9vbHRpcFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5ib3hcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50cmlnZ2Vyc1xuICovXG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBQb3NpdGlvbmFibGUge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhIFRvb2x0aXAuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBUb29sdGlwXG4gICAqIEBmaXJlcyBUb29sdGlwI2luaXRcbiAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIGF0dGFjaCBhIHRvb2x0aXAgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb2JqZWN0IHRvIGV4dGVuZCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVG9vbHRpcC5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ1Rvb2x0aXAnOyAvLyBpZTkgYmFjayBjb21wYXRcblxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcblxuICAgIC8vIFRyaWdnZXJzIGluaXQgaXMgaWRlbXBvdGVudCwganVzdCBuZWVkIHRvIG1ha2Ugc3VyZSBpdCBpcyBpbml0aWFsaXplZFxuICAgIFRyaWdnZXJzLmluaXQoJCk7XG5cbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHRvb2x0aXAgYnkgc2V0dGluZyB0aGUgY3JlYXRpbmcgdGhlIHRpcCBlbGVtZW50LCBhZGRpbmcgaXQncyB0ZXh0LCBzZXR0aW5nIHByaXZhdGUgdmFyaWFibGVzIGFuZCBzZXR0aW5nIGF0dHJpYnV0ZXMgb24gdGhlIGFuY2hvci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIE1lZGlhUXVlcnkuX2luaXQoKTtcbiAgICB2YXIgZWxlbUlkID0gdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JykgfHwgR2V0WW9EaWdpdHMoNiwgJ3Rvb2x0aXAnKTtcblxuICAgIHRoaXMub3B0aW9ucy50aXBUZXh0ID0gdGhpcy5vcHRpb25zLnRpcFRleHQgfHwgdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGUgPyAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSkgOiB0aGlzLl9idWlsZFRlbXBsYXRlKGVsZW1JZCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93SHRtbCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgICAgICAuaHRtbCh0aGlzLm9wdGlvbnMudGlwVGV4dClcbiAgICAgICAgLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgICAgICAudGV4dCh0aGlzLm9wdGlvbnMudGlwVGV4dClcbiAgICAgICAgLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgJ3RpdGxlJzogJycsXG4gICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGVsZW1JZCxcbiAgICAgICdkYXRhLXlldGktYm94JzogZWxlbUlkLFxuICAgICAgJ2RhdGEtdG9nZ2xlJzogZWxlbUlkLFxuICAgICAgJ2RhdGEtcmVzaXplJzogZWxlbUlkXG4gICAgfSkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnRyaWdnZXJDbGFzcyk7XG5cbiAgICBzdXBlci5faW5pdCgpO1xuICAgIHRoaXMuX2V2ZW50cygpO1xuICB9XG5cbiAgX2dldERlZmF1bHRQb3NpdGlvbigpIHtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IGNsYXNzbmFtZXNcbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLiRlbGVtZW50WzBdLmNsYXNzTmFtZS5tYXRjaCgvXFxiKHRvcHxsZWZ0fHJpZ2h0fGJvdHRvbSlcXGIvZyk7XG4gICAgdmFyIGVsZW1lbnRDbGFzc05hbWUgPSB0aGlzLiRlbGVtZW50WzBdLmNsYXNzTmFtZTtcbiAgICBpZiAodGhpcy4kZWxlbWVudFswXSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudENsYXNzTmFtZSA9IGVsZW1lbnRDbGFzc05hbWUuYmFzZVZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHBvc2l0aW9uID8gcG9zaXRpb25bMF0gOiAndG9wJztcbiAgICB2YXIgcG9zaXRpb24gPSBlbGVtZW50Q2xhc3NOYW1lLm1hdGNoKC9cXGIodG9wfGxlZnR8cmlnaHQpXFxiL2cpO1xuICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID8gcG9zaXRpb25bMF0gOiAndHAnO1xuICB9XG5cbiAgX2dldERlZmF1bHRBbGlnbm1lbnQoKSB7XG4gICAgcmV0dXJuICdjZW50ZXInO1xuICB9XG5cbiAgX2dldEhPZmZzZXQoKSB7XG4gICAgaWYodGhpcy5wb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaE9mZnNldCArIHRoaXMub3B0aW9ucy50b29sdGlwV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaE9mZnNldFxuICAgIH1cbiAgfVxuXG4gIF9nZXRWT2Zmc2V0KCkge1xuICAgIGlmKHRoaXMucG9zaXRpb24gPT09ICd0b3AnIHx8IHRoaXMucG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZPZmZzZXQgKyB0aGlzLm9wdGlvbnMudG9vbHRpcEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52T2Zmc2V0XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJ1aWxkcyB0aGUgdG9vbHRpcCBlbGVtZW50LCBhZGRzIGF0dHJpYnV0ZXMsIGFuZCByZXR1cm5zIHRoZSB0ZW1wbGF0ZS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZFRlbXBsYXRlKGlkKSB7XG4gICAgdmFyIHRlbXBsYXRlQ2xhc3NlcyA9IChgJHt0aGlzLm9wdGlvbnMudG9vbHRpcENsYXNzfSAke3RoaXMub3B0aW9ucy50ZW1wbGF0ZUNsYXNzZXN9YCkudHJpbSgpO1xuICAgIHZhciAkdGVtcGxhdGUgPSAgJCgnPGRpdj48L2Rpdj4nKS5hZGRDbGFzcyh0ZW1wbGF0ZUNsYXNzZXMpLmF0dHIoe1xuICAgICAgJ3JvbGUnOiAndG9vbHRpcCcsXG4gICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgJ2RhdGEtaXMtYWN0aXZlJzogZmFsc2UsXG4gICAgICAnZGF0YS1pcy1mb2N1cyc6IGZhbHNlLFxuICAgICAgJ2lkJzogaWRcbiAgICB9KTtcbiAgICByZXR1cm4gJHRlbXBsYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHMgdGhlIHBvc2l0aW9uIGNsYXNzIG9mIGFuIGVsZW1lbnQgYW5kIHJlY3Vyc2l2ZWx5IGNhbGxzIGl0c2VsZiB1bnRpbCB0aGVyZSBhcmUgbm8gbW9yZSBwb3NzaWJsZSBwb3NpdGlvbnMgdG8gYXR0ZW1wdCwgb3IgdGhlIHRvb2x0aXAgZWxlbWVudCBpcyBubyBsb25nZXIgY29sbGlkaW5nLlxuICAgKiBpZiB0aGUgdG9vbHRpcCBpcyBsYXJnZXIgdGhhbiB0aGUgc2NyZWVuIHdpZHRoLCBkZWZhdWx0IHRvIGZ1bGwgd2lkdGggLSBhbnkgdXNlciBzZWxlY3RlZCBtYXJnaW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRQb3NpdGlvbigpIHtcbiAgICBzdXBlci5fc2V0UG9zaXRpb24odGhpcy4kZWxlbWVudCwgdGhpcy50ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogcmV2ZWFscyB0aGUgdG9vbHRpcCwgYW5kIGZpcmVzIGFuIGV2ZW50IHRvIGNsb3NlIGFueSBvdGhlciBvcGVuIHRvb2x0aXBzIG9uIHRoZSBwYWdlXG4gICAqIEBmaXJlcyBUb29sdGlwI2Nsb3NlbWVcbiAgICogQGZpcmVzIFRvb2x0aXAjc2hvd1xuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zaG93T24gIT09ICdhbGwnICYmICFNZWRpYVF1ZXJ5LmlzKHRoaXMub3B0aW9ucy5zaG93T24pKSB7XG4gICAgICAvLyBjb25zb2xlLmVycm9yKCdUaGUgc2NyZWVuIGlzIHRvbyBzbWFsbCB0byBkaXNwbGF5IHRoaXMgdG9vbHRpcCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy50ZW1wbGF0ZS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJykuc2hvdygpO1xuICAgIHRoaXMuX3NldFBvc2l0aW9uKCk7XG4gICAgdGhpcy50ZW1wbGF0ZS5yZW1vdmVDbGFzcygndG9wIGJvdHRvbSBsZWZ0IHJpZ2h0JykuYWRkQ2xhc3ModGhpcy5wb3NpdGlvbilcbiAgICB0aGlzLnRlbXBsYXRlLnJlbW92ZUNsYXNzKCdhbGlnbi10b3AgYWxpZ24tYm90dG9tIGFsaWduLWxlZnQgYWxpZ24tcmlnaHQgYWxpZ24tY2VudGVyJykuYWRkQ2xhc3MoJ2FsaWduLScgKyB0aGlzLmFsaWdubWVudCk7XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB0byBjbG9zZSBhbGwgb3RoZXIgb3BlbiB0b29sdGlwcyBvbiB0aGUgcGFnZVxuICAgICAqIEBldmVudCBDbG9zZW1lI3Rvb2x0aXBcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2Nsb3NlbWUuemYudG9vbHRpcCcsIHRoaXMudGVtcGxhdGUuYXR0cignaWQnKSk7XG5cblxuICAgIHRoaXMudGVtcGxhdGUuYXR0cih7XG4gICAgICAnZGF0YS1pcy1hY3RpdmUnOiB0cnVlLFxuICAgICAgJ2FyaWEtaGlkZGVuJzogZmFsc2VcbiAgICB9KTtcbiAgICBfdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy50ZW1wbGF0ZSk7XG4gICAgdGhpcy50ZW1wbGF0ZS5zdG9wKCkuaGlkZSgpLmNzcygndmlzaWJpbGl0eScsICcnKS5mYWRlSW4odGhpcy5vcHRpb25zLmZhZGVJbkR1cmF0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vbWF5YmUgZG8gc3R1ZmY/XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxuICAgICAqIEBldmVudCBUb29sdGlwI3Nob3dcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3Nob3cuemYudG9vbHRpcCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBjdXJyZW50IHRvb2x0aXAsIGFuZCByZXNldHMgdGhlIHBvc2l0aW9uaW5nIGNsYXNzIGlmIGl0IHdhcyBjaGFuZ2VkIGR1ZSB0byBjb2xsaXNpb25cbiAgICogQGZpcmVzIFRvb2x0aXAjaGlkZVxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIGhpZGUoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2hpZGluZycsIHRoaXMuJGVsZW1lbnQuZGF0YSgneWV0aS1ib3gnKSk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLnRlbXBsYXRlLnN0b3AoKS5hdHRyKHtcbiAgICAgICdhcmlhLWhpZGRlbic6IHRydWUsXG4gICAgICAnZGF0YS1pcy1hY3RpdmUnOiBmYWxzZVxuICAgIH0pLmZhZGVPdXQodGhpcy5vcHRpb25zLmZhZGVPdXREdXJhdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgX3RoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIGZpcmVzIHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuXG4gICAgICogQGV2ZW50IFRvb2x0aXAjaGlkZVxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaGlkZS56Zi50b29sdGlwJyk7XG4gIH1cblxuICAvKipcbiAgICogYWRkcyBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSB0b29sdGlwIGFuZCBpdHMgYW5jaG9yXG4gICAqIFRPRE8gY29tYmluZSBzb21lIG9mIHRoZSBsaXN0ZW5lcnMgbGlrZSBmb2N1cyBhbmQgbW91c2VlbnRlciwgZXRjLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2V2ZW50cygpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgaGFzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ICE9PSAndW5kZWZpbmVkJyk7XG4gICAgY29uc3QgJHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICB2YXIgaXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgLy8gYGRpc2FibGVGb3JUb3VjaDogRnVsbHkgZGlzYWJsZSB0aGUgdG9vbHRpcCBvbiB0b3VjaCBkZXZpY2VzXG4gICAgaWYgKGhhc1RvdWNoICYmIHRoaXMub3B0aW9ucy5kaXNhYmxlRm9yVG91Y2gpIHJldHVybjtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVIb3Zlcikge1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgLm9uKCdtb3VzZWVudGVyLnpmLnRvb2x0aXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICghX3RoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLnNob3coKTtcbiAgICAgICAgICB9LCBfdGhpcy5vcHRpb25zLmhvdmVyRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlLnpmLnRvb2x0aXAnLCBpZ25vcmVNb3VzZWRpc2FwcGVhcihmdW5jdGlvbihlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy50aW1lb3V0KTtcbiAgICAgICAgaWYgKCFpc0ZvY3VzIHx8IChfdGhpcy5pc0NsaWNrICYmICFfdGhpcy5vcHRpb25zLmNsaWNrT3BlbikpIHtcbiAgICAgICAgICBfdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVG91Y2gpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5vbigndGFwLnpmLnRvb2x0aXAgdG91Y2hlbmQuemYudG9vbHRpcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmlzQWN0aXZlID8gX3RoaXMuaGlkZSgpIDogX3RoaXMuc2hvdygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbGlja09wZW4pIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ21vdXNlZG93bi56Zi50b29sdGlwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoX3RoaXMuaXNDbGljaykge1xuICAgICAgICAgIC8vX3RoaXMuaGlkZSgpO1xuICAgICAgICAgIC8vIF90aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoKF90aGlzLm9wdGlvbnMuZGlzYWJsZUhvdmVyIHx8ICFfdGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpKSAmJiAhX3RoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF90aGlzLnNob3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWRvd24uemYudG9vbHRpcCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgX3RoaXMuaXNDbGljayA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKHtcbiAgICAgIC8vICd0b2dnbGUuemYudHJpZ2dlcic6IHRoaXMudG9nZ2xlLmJpbmQodGhpcyksXG4gICAgICAvLyAnY2xvc2UuemYudHJpZ2dlcic6IHRoaXMuaGlkZS5iaW5kKHRoaXMpXG4gICAgICAnY2xvc2UuemYudHJpZ2dlcic6IHRoaXMuaGlkZS5iaW5kKHRoaXMpXG4gICAgfSk7XG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAub24oJ2ZvY3VzLnpmLnRvb2x0aXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlzRm9jdXMgPSB0cnVlO1xuICAgICAgICBpZiAoX3RoaXMuaXNDbGljaykge1xuICAgICAgICAgIC8vIElmIHdlJ3JlIG5vdCBzaG93aW5nIG9wZW4gb24gY2xpY2tzLCB3ZSBuZWVkIHRvIHByZXRlbmQgYSBjbGljay1sYXVuY2hlZCBmb2N1cyBpc24ndFxuICAgICAgICAgIC8vIGEgcmVhbCBmb2N1cywgb3RoZXJ3aXNlIG9uIGhvdmVyIGFuZCBjb21lIGJhY2sgd2UgZ2V0IGJhZCBiZWhhdmlvclxuICAgICAgICAgIGlmKCFfdGhpcy5vcHRpb25zLmNsaWNrT3BlbikgeyBpc0ZvY3VzID0gZmFsc2U7IH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAub24oJ2ZvY3Vzb3V0LnpmLnRvb2x0aXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oaWRlKCk7XG4gICAgICB9KVxuXG4gICAgICAub24oJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF90aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMuX3NldFBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZHMgYSB0b2dnbGUgbWV0aG9kLCBpbiBhZGRpdGlvbiB0byB0aGUgc3RhdGljIHNob3coKSAmIGhpZGUoKSBmdW5jdGlvbnNcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgYW4gaW5zdGFuY2Ugb2YgdG9vbHRpcCwgcmVtb3ZlcyB0ZW1wbGF0ZSBlbGVtZW50IGZyb20gdGhlIHZpZXcuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScsIHRoaXMudGVtcGxhdGUudGV4dCgpKVxuICAgICAgICAgICAgICAgICAub2ZmKCcuemYudHJpZ2dlciAuemYudG9vbHRpcCcpXG4gICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudHJpZ2dlckNsYXNzKVxuICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3RvcCByaWdodCBsZWZ0IGJvdHRvbScpXG4gICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWRlc2NyaWJlZGJ5IGRhdGEtZGlzYWJsZS1ob3ZlciBkYXRhLXJlc2l6ZSBkYXRhLXRvZ2dsZSBkYXRhLXRvb2x0aXAgZGF0YS15ZXRpLWJveCcpO1xuXG4gICAgdGhpcy50ZW1wbGF0ZS5yZW1vdmUoKTtcbiAgfVxufVxuXG5Ub29sdGlwLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogVGltZSwgaW4gbXMsIGJlZm9yZSBhIHRvb2x0aXAgc2hvdWxkIG9wZW4gb24gaG92ZXIuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMjAwXG4gICAqL1xuICBob3ZlckRlbGF5OiAyMDAsXG4gIC8qKlxuICAgKiBUaW1lLCBpbiBtcywgYSB0b29sdGlwIHNob3VsZCB0YWtlIHRvIGZhZGUgaW50byB2aWV3LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDE1MFxuICAgKi9cbiAgZmFkZUluRHVyYXRpb246IDE1MCxcbiAgLyoqXG4gICAqIFRpbWUsIGluIG1zLCBhIHRvb2x0aXAgc2hvdWxkIHRha2UgdG8gZmFkZSBvdXQgb2Ygdmlldy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAxNTBcbiAgICovXG4gIGZhZGVPdXREdXJhdGlvbjogMTUwLFxuICAvKipcbiAgICogRGlzYWJsZXMgaG92ZXIgZXZlbnRzIGZyb20gb3BlbmluZyB0aGUgdG9vbHRpcCBpZiBzZXQgdG8gdHJ1ZVxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZUhvdmVyOiBmYWxzZSxcbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHRvb2x0aXAgZm9yIHRvdWNoIGRldmljZXMuXG4gICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCB0byBtYWtlIGVsZW1lbnRzIHdpdGggYSB0b29sdGlwIG9uIGl0IHRyaWdnZXIgdGhlaXJcbiAgICogYWN0aW9uIG9uIHRoZSBmaXJzdCB0YXAgaW5zdGVhZCBvZiBkaXNwbGF5aW5nIHRoZSB0b29sdGlwLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29lbGFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZUZvclRvdWNoOiBmYWxzZSxcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGFkZHRpb25hbCBjbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSB0b29sdGlwIHRlbXBsYXRlIG9uIGluaXQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJydcbiAgICovXG4gIHRlbXBsYXRlQ2xhc3NlczogJycsXG4gIC8qKlxuICAgKiBOb24tb3B0aW9uYWwgY2xhc3MgYWRkZWQgdG8gdG9vbHRpcCB0ZW1wbGF0ZXMuIEZvdW5kYXRpb24gZGVmYXVsdCBpcyAndG9vbHRpcCcuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ3Rvb2x0aXAnXG4gICAqL1xuICB0b29sdGlwQ2xhc3M6ICd0b29sdGlwJyxcbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gdGhlIHRvb2x0aXAgYW5jaG9yIGVsZW1lbnQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2hhcy10aXAnXG4gICAqL1xuICB0cmlnZ2VyQ2xhc3M6ICdoYXMtdGlwJyxcbiAgLyoqXG4gICAqIE1pbmltdW0gYnJlYWtwb2ludCBzaXplIGF0IHdoaWNoIHRvIG9wZW4gdGhlIHRvb2x0aXAuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ3NtYWxsJ1xuICAgKi9cbiAgc2hvd09uOiAnc21hbGwnLFxuICAvKipcbiAgICogQ3VzdG9tIHRlbXBsYXRlIHRvIGJlIHVzZWQgdG8gZ2VuZXJhdGUgbWFya3VwIGZvciB0b29sdGlwLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICB0ZW1wbGF0ZTogJycsXG4gIC8qKlxuICAgKiBUZXh0IGRpc3BsYXllZCBpbiB0aGUgdG9vbHRpcCB0ZW1wbGF0ZSBvbiBvcGVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICB0aXBUZXh0OiAnJyxcbiAgdG91Y2hDbG9zZVRleHQ6ICdUYXAgdG8gY2xvc2UuJyxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgdG9vbHRpcCB0byByZW1haW4gb3BlbiBpZiB0cmlnZ2VyZWQgd2l0aCBhIGNsaWNrIG9yIHRvdWNoIGV2ZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjbGlja09wZW46IHRydWUsXG4gIC8qKlxuICAgKiBQb3NpdGlvbiBvZiB0b29sdGlwLiBDYW4gYmUgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBvciBhdXRvLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgcG9zaXRpb246ICdhdXRvJyxcbiAgLyoqXG4gICAqIEFsaWdubWVudCBvZiB0b29sdGlwIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgY2VudGVyLCBvciBhdXRvLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgYWxpZ25tZW50OiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIGNvbnRhaW5lci93aW5kb3cuIElmIGZhbHNlLCB0b29sdGlwIHdpbGwgZmlyc3QgdHJ5IHRvXG4gICAqIHBvc2l0aW9uIGFzIGRlZmluZWQgYnkgZGF0YS1wb3NpdGlvbiBhbmQgZGF0YS1hbGlnbm1lbnQsIGJ1dCByZXBvc2l0aW9uIGlmXG4gICAqIGl0IHdvdWxkIGNhdXNlIGFuIG92ZXJmbG93LiAgQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGFsbG93T3ZlcmxhcDogZmFsc2UsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIG9ubHkgdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyLiBUaGlzIGlzIHRoZSBtb3N0IGNvbW1vblxuICAgKiBiZWhhdmlvciBmb3IgZHJvcGRvd25zLCBhbGxvd2luZyB0aGUgZHJvcGRvd24gdG8gZXh0ZW5kIHRoZSBib3R0b20gb2YgdGhlXG4gICAqIHNjcmVlbiBidXQgbm90IG90aGVyd2lzZSBpbmZsdWVuY2Ugb3IgYnJlYWsgb3V0IG9mIHRoZSBjb250YWluZXIuXG4gICAqIExlc3MgY29tbW9uIGZvciB0b29sdGlwcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGFsbG93Qm90dG9tT3ZlcmxhcDogZmFsc2UsXG4gIC8qKlxuICAgKiBEaXN0YW5jZSwgaW4gcGl4ZWxzLCB0aGUgdGVtcGxhdGUgc2hvdWxkIHB1c2ggYXdheSBmcm9tIHRoZSBhbmNob3Igb24gdGhlIFkgYXhpcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICB2T2Zmc2V0OiAwLFxuICAvKipcbiAgICogRGlzdGFuY2UsIGluIHBpeGVscywgdGhlIHRlbXBsYXRlIHNob3VsZCBwdXNoIGF3YXkgZnJvbSB0aGUgYW5jaG9yIG9uIHRoZSBYIGF4aXNcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBoT2Zmc2V0OiAwLFxuICAvKipcbiAgICogRGlzdGFuY2UsIGluIHBpeGVscywgdGhlIHRlbXBsYXRlIHNwYWNpbmcgYXV0by1hZGp1c3QgZm9yIGEgdmVydGljYWwgdG9vbHRpcFxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDE0XG4gICAqL1xuICB0b29sdGlwSGVpZ2h0OiAxNCxcbiAgLyoqXG4gICAqIERpc3RhbmNlLCBpbiBwaXhlbHMsIHRoZSB0ZW1wbGF0ZSBzcGFjaW5nIGF1dG8tYWRqdXN0IGZvciBhIGhvcml6b250YWwgdG9vbHRpcFxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDEyXG4gICAqL1xuICB0b29sdGlwV2lkdGg6IDEyLFxuICAgIC8qKlxuICAgKiBBbGxvdyBIVE1MIGluIHRvb2x0aXAuIFdhcm5pbmc6IElmIHlvdSBhcmUgbG9hZGluZyB1c2VyLWdlbmVyYXRlZCBjb250ZW50IGludG8gdG9vbHRpcHMsXG4gICAqIGFsbG93aW5nIEhUTUwgbWF5IG9wZW4geW91cnNlbGYgdXAgdG8gWFNTIGF0dGFja3MuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBhbGxvd0h0bWw6IGZhbHNlXG59O1xuXG4vKipcbiAqIFRPRE8gdXRpbGl6ZSByZXNpemUgZXZlbnQgdHJpZ2dlclxuICovXG5cbmV4cG9ydCB7VG9vbHRpcH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNb3Rpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24nO1xuXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4gIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGAke3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykge1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0oKSk7XG5cbmNvbnN0IHRyaWdnZXJzID0gKGVsLCB0eXBlKSA9PiB7XG4gIGVsLmRhdGEodHlwZSkuc3BsaXQoJyAnKS5mb3JFYWNoKGlkID0+IHtcbiAgICAkKGAjJHtpZH1gKVsgdHlwZSA9PT0gJ2Nsb3NlJyA/ICd0cmlnZ2VyJyA6ICd0cmlnZ2VySGFuZGxlciddKGAke3R5cGV9LnpmLnRyaWdnZXJgLCBbZWxdKTtcbiAgfSk7XG59O1xuXG52YXIgVHJpZ2dlcnMgPSB7XG4gIExpc3RlbmVyczoge1xuICAgIEJhc2ljOiB7fSxcbiAgICBHbG9iYWw6IHt9XG4gIH0sXG4gIEluaXRpYWxpemVyczoge31cbn1cblxuVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljICA9IHtcbiAgb3Blbkxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICB0cmlnZ2VycygkKHRoaXMpLCAnb3BlbicpO1xuICB9LFxuICBjbG9zZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICBjbG9zZWFibGVMaXN0ZW5lcjogZnVuY3Rpb24oZSkge1xuICAgIGxldCBhbmltYXRpb24gPSAkKHRoaXMpLmRhdGEoJ2Nsb3NhYmxlJyk7XG5cbiAgICAvLyBPbmx5IGNsb3NlIHRoZSBmaXJzdCBjbG9zYWJsZSBlbGVtZW50LiBTZWUgaHR0cHM6Ly9naXQuaW8vemYtNzgzM1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZihhbmltYXRpb24gIT09ICcnKXtcbiAgICAgIE1vdGlvbi5hbmltYXRlT3V0KCQodGhpcyksIGFuaW1hdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgICQodGhpcykuZmFkZU91dCgpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRm9jdXNMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUtZm9jdXMnKTtcbiAgICAkKGAjJHtpZH1gKS50cmlnZ2VySGFuZGxlcigndG9nZ2xlLnpmLnRyaWdnZXInLCBbJCh0aGlzKV0pO1xuICB9XG59O1xuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLW9wZW5dIHdpbGwgcmV2ZWFsIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtb3Blbl0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zZV0gd2lsbCBjbG9zZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cbi8vIElmIHVzZWQgd2l0aG91dCBhIHZhbHVlIG9uIFtkYXRhLWNsb3NlXSwgdGhlIGV2ZW50IHdpbGwgYnViYmxlLCBhbGxvd2luZyBpdCB0byBjbG9zZSBhIHBhcmVudCBjb21wb25lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGVdIHdpbGwgdG9nZ2xlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NhYmxlXSB3aWxsIHJlc3BvbmQgdG8gY2xvc2UuemYudHJpZ2dlciBldmVudHMuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbG9zZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2Nsb3NlLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VhYmxlXSwgW2RhdGEtY2xvc2FibGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGUtZm9jdXNdIHdpbGwgcmVzcG9uZCB0byBjb21pbmcgaW4gYW5kIG91dCBvZiBmb2N1c1xuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZS1mb2N1c10nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG59XG5cblxuXG4vLyBNb3JlIEdsb2JhbC9jb21wbGV4IGxpc3RlbmVycyBhbmQgdHJpZ2dlcnNcblRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwgID0ge1xuICByZXNpemVMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgcmVzaXplIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJyZXNpemVcIik7XG4gIH0sXG4gIHNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSBzY3JvbGwgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInNjcm9sbFwiKTtcbiAgfSxcbiAgY2xvc2VNZUxpc3RlbmVyOiBmdW5jdGlvbihlLCBwbHVnaW5JZCl7XG4gICAgbGV0IHBsdWdpbiA9IGUubmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XG4gICAgbGV0IHBsdWdpbnMgPSAkKGBbZGF0YS0ke3BsdWdpbn1dYCkubm90KGBbZGF0YS15ZXRpLWJveD1cIiR7cGx1Z2luSWR9XCJdYCk7XG5cbiAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIGxldCBfdGhpcyA9ICQodGhpcyk7XG4gICAgICBfdGhpcy50cmlnZ2VySGFuZGxlcignY2xvc2UuemYudHJpZ2dlcicsIFtfdGhpc10pO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIEdsb2JhbCwgcGFyc2VzIHdob2xlIGRvY3VtZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lciA9IGZ1bmN0aW9uKHBsdWdpbk5hbWUpIHtcbiAgdmFyIHlldGlCb3hlcyA9ICQoJ1tkYXRhLXlldGktYm94XScpLFxuICAgICAgcGx1Z05hbWVzID0gWydkcm9wZG93bicsICd0b29sdGlwJywgJ3JldmVhbCddO1xuXG4gIGlmKHBsdWdpbk5hbWUpe1xuICAgIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMucHVzaChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBsdWdpbk5hbWVbMF0gPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcyA9IHBsdWdOYW1lcy5jb25jYXQocGx1Z2luTmFtZSk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmVycm9yKCdQbHVnaW4gbmFtZXMgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICB9XG4gIGlmKHlldGlCb3hlcy5sZW5ndGgpe1xuICAgIGxldCBsaXN0ZW5lcnMgPSBwbHVnTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYGNsb3NlbWUuemYuJHtuYW1lfWA7XG4gICAgfSkuam9pbignICcpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihsaXN0ZW5lcnMpLm9uKGxpc3RlbmVycywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5jbG9zZU1lTGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsIHRyaWdnZXIsIGxpc3RlbmVyKSB7XG4gIGxldCB0aW1lciwgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMyk7XG4gICQod2luZG93KS5vZmYodHJpZ2dlcikub24odHJpZ2dlciwgZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aW1lcikgeyBjbGVhclRpbWVvdXQodGltZXIpOyB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsaXN0ZW5lci5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCBkZWJvdW5jZSB8fCAxMCk7Ly9kZWZhdWx0IHRpbWUgdG8gZW1pdCBzY3JvbGwgZXZlbnRcbiAgfSk7XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXJlc2l6ZV0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Jlc2l6ZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5yZXNpemVMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1zY3JvbGxdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdzY3JvbGwuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuc2Nyb2xsTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIgPSBmdW5jdGlvbigkZWxlbSkge1xuICBpZighTXV0YXRpb25PYnNlcnZlcil7IHJldHVybiBmYWxzZTsgfVxuICBsZXQgJG5vZGVzID0gJGVsZW0uZmluZCgnW2RhdGEtcmVzaXplXSwgW2RhdGEtc2Nyb2xsXSwgW2RhdGEtbXV0YXRlXScpO1xuXG4gIC8vZWxlbWVudCBjYWxsYmFja1xuICB2YXIgbGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZHNMaXN0KSB7XG4gICAgdmFyICR0YXJnZXQgPSAkKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udGFyZ2V0KTtcblxuICAgIC8vdHJpZ2dlciB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnQgZGVwZW5kaW5nIG9uIHR5cGVcbiAgICBzd2l0Y2ggKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udHlwZSkge1xuICAgICAgY2FzZSBcImF0dHJpYnV0ZXNcIjpcbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInNjcm9sbFwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LCB3aW5kb3cucGFnZVlPZmZzZXRdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwicmVzaXplXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXRdKTtcbiAgICAgICAgIH1cbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImNoaWxkTGlzdFwiOlxuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vbm90aGluZ1xuICAgIH1cbiAgfTtcblxuICBpZiAoJG5vZGVzLmxlbmd0aCkge1xuICAgIC8vZm9yIGVhY2ggZWxlbWVudCB0aGF0IG5lZWRzIHRvIGxpc3RlbiBmb3IgcmVzaXppbmcsIHNjcm9sbGluZywgb3IgbXV0YXRpb24gYWRkIGEgc2luZ2xlIG9ic2VydmVyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gJG5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgdmFyIGVsZW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24pO1xuICAgICAgZWxlbWVudE9ic2VydmVyLm9ic2VydmUoJG5vZGVzW2ldLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogW1wiZGF0YS1ldmVudHNcIiwgXCJzdHlsZVwiXSB9KTtcbiAgICB9XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyKCRkb2N1bWVudCk7XG5cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lcigpO1xufVxuXG5cblRyaWdnZXJzLmluaXQgPSBmdW5jdGlvbiAoJCwgRm91bmRhdGlvbikge1xuICBvbkxvYWQoJCh3aW5kb3cpLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQudHJpZ2dlcnNJbml0aWFsaXplZCAhPT0gdHJ1ZSkge1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycygpO1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgJC50cmlnZ2Vyc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmKEZvdW5kYXRpb24pIHtcbiAgICBGb3VuZGF0aW9uLlRyaWdnZXJzID0gVHJpZ2dlcnM7XG4gICAgLy8gTGVnYWN5IGluY2x1ZGVkIHRvIGJlIGJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciBub3cuXG4gICAgRm91bmRhdGlvbi5JSGVhcllvdSA9IFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnNcbiAgfVxufVxuXG5leHBvcnQge1RyaWdnZXJzfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
