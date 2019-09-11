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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.plugin */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__);

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

        var Positionable =
        /*#__PURE__*/
        function (_Plugin) {
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

              var $eleDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetDimensions($element),
                  $anchorDims = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetDimensions($anchor);

              if (!this.options.allowOverlap) {
                // restore original position & alignment before checking overlap
                this.position = this.originalPosition;
                this.alignment = this.originalAlignment;
              }

              $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__["Box"].GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));

              if (!this.options.allowOverlap) {
                var overlaps = {};
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


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.mediaQuery */
        "./foundation.util.mediaQuery");
        /* harmony import */


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__);
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


        var Tooltip =
        /*#__PURE__*/
        function (_Positionable) {
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
              return position ? position[0] : 'top';
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

              var $template = this.template;
              var isFocus = false;

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

              if (this.options.clickOpen) {
                this.$element.on('mousedown.zf.tooltip', function (e) {
                  e.stopImmediatePropagation();

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
                  e.stopImmediatePropagation();
                  _this.isClick = true;
                });
              }

              if (!this.options.disableForTouch) {
                this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function (e) {
                  _this.isActive ? _this.hide() : _this.show();
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
          disableForTouch: false,

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
      20:
      /*!********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.tooltip.js ***!
        \********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.tooltip.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi5wb3NpdGlvbmFibGUuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlRvb2x0aXAiLCJQT1NJVElPTlMiLCJWRVJUSUNBTF9BTElHTk1FTlRTIiwiSE9SSVpPTlRBTF9BTElHTk1FTlRTIiwiQUxJR05NRU5UUyIsImN1cnJlbnRJZHgiLCJhcnJheSIsIlBvc2l0aW9uYWJsZSIsIlJ0bCIsIm5leHRJdGVtIiwicG9zaXRpb24iLCJhbGlnbm1lbnQiLCJpc0V4aGF1c3RlZCIsImkiLCIkYW5jaG9yIiwiJGVsZW1lbnQiLCIkcGFyZW50IiwiJGVsZURpbXMiLCJCb3giLCIkYW5jaG9yRGltcyIsIm92ZXJsYXBzIiwibWluT3ZlcmxhcCIsIm1pbkNvb3JkaW5hdGVzIiwib3ZlcmxhcCIsIlBsdWdpbiIsImFsbG93T3ZlcmxhcCIsImFsbG93Qm90dG9tT3ZlcmxhcCIsInZPZmZzZXQiLCJoT2Zmc2V0IiwiZWxlbWVudCIsIm9wdGlvbnMiLCIkIiwiVHJpZ2dlcnMiLCJNZWRpYVF1ZXJ5IiwiZWxlbUlkIiwiR2V0WW9EaWdpdHMiLCJkb2N1bWVudCIsImlkIiwidGVtcGxhdGVDbGFzc2VzIiwiJHRlbXBsYXRlIiwiX3RoaXMiLCJpc0ZvY3VzIiwic2V0VGltZW91dCIsImlnbm9yZU1vdXNlZGlzYXBwZWFyIiwiY2xlYXJUaW1lb3V0IiwiZSIsImRpc2FibGVGb3JUb3VjaCIsImhvdmVyRGVsYXkiLCJmYWRlSW5EdXJhdGlvbiIsImZhZGVPdXREdXJhdGlvbiIsImRpc2FibGVIb3ZlciIsInRvb2x0aXBDbGFzcyIsInRyaWdnZXJDbGFzcyIsInNob3dPbiIsInRlbXBsYXRlIiwidGlwVGV4dCIsInRvdWNoQ2xvc2VUZXh0IiwiY2xpY2tPcGVuIiwidG9vbHRpcEhlaWdodCIsInRvb2x0aXBXaWR0aCIsImFsbG93SHRtbCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJwcmVmaXhlcyIsIndpbmRvdyIsInRyaWdnZXJzIiwiZWwiLCJ0eXBlIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwidG9nZ2xlTGlzdGVuZXIiLCJjbG9zZWFibGVMaXN0ZW5lciIsImFuaW1hdGlvbiIsIk1vdGlvbiIsInRvZ2dsZUZvY3VzTGlzdGVuZXIiLCIkZWxlbSIsInJlc2l6ZUxpc3RlbmVyIiwiJG5vZGVzIiwic2Nyb2xsTGlzdGVuZXIiLCJjbG9zZU1lTGlzdGVuZXIiLCJwbHVnaW4iLCJwbHVnaW5zIiwieWV0aUJveGVzIiwicGx1Z05hbWVzIiwicGx1Z2luTmFtZSIsImNvbnNvbGUiLCJsaXN0ZW5lcnMiLCJhcmdzIiwiQXJyYXkiLCJ0aW1lciIsImxpc3RlbmVyIiwiZGVib3VuY2UiLCJkZWJvdW5jZUdsb2JhbExpc3RlbmVyIiwibGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiIsIiR0YXJnZXQiLCJtdXRhdGlvblJlY29yZHNMaXN0IiwiZWxlbWVudE9ic2VydmVyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwiYXR0cmlidXRlRmlsdGVyIiwiJGRvY3VtZW50Iiwib25Mb2FkIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFNBQUEsZ0NBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsOEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsdUJBQUEsRUFBQSw4QkFBQSxFQUFBLDBCQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsb0JBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDhCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxvQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsUUFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLDRDQUFBLEVBQUEsZ0RBQUEsRUFBQSx1REFBQSxFQUFBLG1EQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtBQUFpRCxVQUFBLEtBQUEsRUFBQTtBQUFqRCxTQUFBO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxRQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUE7QUFBeUMsVUFBQSxVQUFBLEVBQUEsSUFBekM7QUFBeUMsVUFBQSxLQUFBLEVBQUE7QUFBekMsU0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsSUFBQSxRQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEdBQUEsRUFBQTtBQUFnSCxpQkFBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJLENBQUE7QUFDQTs7QUFBQSxlQUFBLEVBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7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OztBUFVBO0NBVkEiLCJmaWxlIjoiZm91bmRhdGlvbi9mb3VuZGF0aW9uLnRvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmJveFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiLi9mb3VuZGF0aW9uLmNvcmVcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24udG9vbHRpcFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwuYm94XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udG9vbHRpcFwiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwuYm94XCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm1vdGlvblwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfYm94X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9tZWRpYVF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9tb3Rpb25fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLnRvb2x0aXAnO1xuRm91bmRhdGlvbi5wbHVnaW4oVG9vbHRpcCwgJ1Rvb2x0aXAnKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgVG9vbHRpcCB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5ib3gnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcbmltcG9ydCB7IHJ0bCBhcyBSdGwgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5cbmNvbnN0IFBPU0lUSU9OUyA9IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ107XG5jb25zdCBWRVJUSUNBTF9BTElHTk1FTlRTID0gWyd0b3AnLCAnYm90dG9tJywgJ2NlbnRlciddO1xuY29uc3QgSE9SSVpPTlRBTF9BTElHTk1FTlRTID0gWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddO1xuXG5jb25zdCBBTElHTk1FTlRTID0ge1xuICAnbGVmdCc6IFZFUlRJQ0FMX0FMSUdOTUVOVFMsXG4gICdyaWdodCc6IFZFUlRJQ0FMX0FMSUdOTUVOVFMsXG4gICd0b3AnOiBIT1JJWk9OVEFMX0FMSUdOTUVOVFMsXG4gICdib3R0b20nOiBIT1JJWk9OVEFMX0FMSUdOTUVOVFNcbn1cblxuZnVuY3Rpb24gbmV4dEl0ZW0oaXRlbSwgYXJyYXkpIHtcbiAgdmFyIGN1cnJlbnRJZHggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICBpZihjdXJyZW50SWR4ID09PSBhcnJheS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhcnJheVtjdXJyZW50SWR4ICsgMV07XG4gIH1cbn1cblxuXG5jbGFzcyBQb3NpdGlvbmFibGUgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQWJzdHJhY3QgY2xhc3MgZW5jYXBzdWxhdGluZyB0aGUgdGV0aGVyLWxpa2UgZXhwbGljaXQgcG9zaXRpb25pbmcgbG9naWNcbiAgICogaW5jbHVkaW5nIHJlcG9zaXRpb25pbmcgYmFzZWQgb24gb3ZlcmxhcC5cbiAgICogRXhwZWN0cyBjbGFzc2VzIHRvIGRlZmluZSBkZWZhdWx0cyBmb3Igdk9mZnNldCwgaE9mZnNldCwgcG9zaXRpb24sXG4gICAqIGFsaWdubWVudCwgYWxsb3dPdmVybGFwLCBhbmQgYWxsb3dCb3R0b21PdmVybGFwLiBUaGV5IGNhbiBkbyB0aGlzIGJ5XG4gICAqIGV4dGVuZGluZyB0aGUgZGVmYXVsdHMsIG9yIChmb3Igbm93IHJlY29tbWVuZGVkIGR1ZSB0byB0aGUgd2F5IGRvY3MgYXJlXG4gICAqIGdlbmVyYXRlZCkgYnkgZXhwbGljaXRseSBkZWNsYXJpbmcgdGhlbS5cbiAgICpcbiAgICoqL1xuXG4gIF9pbml0KCkge1xuICAgIHRoaXMudHJpZWRQb3NpdGlvbnMgPSB7fTtcbiAgICB0aGlzLnBvc2l0aW9uICA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PT0gJ2F1dG8nID8gdGhpcy5fZ2V0RGVmYXVsdFBvc2l0aW9uKCkgOiB0aGlzLm9wdGlvbnMucG9zaXRpb247XG4gICAgdGhpcy5hbGlnbm1lbnQgPSB0aGlzLm9wdGlvbnMuYWxpZ25tZW50ID09PSAnYXV0bycgPyB0aGlzLl9nZXREZWZhdWx0QWxpZ25tZW50KCkgOiB0aGlzLm9wdGlvbnMuYWxpZ25tZW50O1xuICAgIHRoaXMub3JpZ2luYWxQb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgdGhpcy5vcmlnaW5hbEFsaWdubWVudCA9IHRoaXMuYWxpZ25tZW50O1xuICB9XG5cbiAgX2dldERlZmF1bHRQb3NpdGlvbiAoKSB7XG4gICAgcmV0dXJuICdib3R0b20nO1xuICB9XG5cbiAgX2dldERlZmF1bHRBbGlnbm1lbnQoKSB7XG4gICAgc3dpdGNoKHRoaXMucG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICByZXR1cm4gUnRsKCkgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0cyB0aGUgcG9zaXRpb25hYmxlIHBvc3NpYmxlIHBvc2l0aW9ucyBieSBpdGVyYXRpbmcgdGhyb3VnaCBhbGlnbm1lbnRzXG4gICAqIGFuZCBwb3NpdGlvbnMuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlcG9zaXRpb24oKSB7XG4gICAgaWYodGhpcy5fYWxpZ25tZW50c0V4aGF1c3RlZCh0aGlzLnBvc2l0aW9uKSkge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IG5leHRJdGVtKHRoaXMucG9zaXRpb24sIFBPU0lUSU9OUyk7XG4gICAgICB0aGlzLmFsaWdubWVudCA9IEFMSUdOTUVOVFNbdGhpcy5wb3NpdGlvbl1bMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlYWxpZ24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0cyB0aGUgZHJvcGRvd24gcGFuZSBwb3NzaWJsZSBwb3NpdGlvbnMgYnkgaXRlcmF0aW5nIHRocm91Z2ggYWxpZ25tZW50c1xuICAgKiBvbiB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVhbGlnbigpIHtcbiAgICB0aGlzLl9hZGRUcmllZFBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHRoaXMuYWxpZ25tZW50KVxuICAgIHRoaXMuYWxpZ25tZW50ID0gbmV4dEl0ZW0odGhpcy5hbGlnbm1lbnQsIEFMSUdOTUVOVFNbdGhpcy5wb3NpdGlvbl0pXG4gIH1cblxuICBfYWRkVHJpZWRQb3NpdGlvbihwb3NpdGlvbiwgYWxpZ25tZW50KSB7XG4gICAgdGhpcy50cmllZFBvc2l0aW9uc1twb3NpdGlvbl0gPSB0aGlzLnRyaWVkUG9zaXRpb25zW3Bvc2l0aW9uXSB8fCBbXVxuICAgIHRoaXMudHJpZWRQb3NpdGlvbnNbcG9zaXRpb25dLnB1c2goYWxpZ25tZW50KTtcbiAgfVxuXG4gIF9wb3NpdGlvbnNFeGhhdXN0ZWQoKSB7XG4gICAgdmFyIGlzRXhoYXVzdGVkID0gdHJ1ZTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgUE9TSVRJT05TLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpc0V4aGF1c3RlZCA9IGlzRXhoYXVzdGVkICYmIHRoaXMuX2FsaWdubWVudHNFeGhhdXN0ZWQoUE9TSVRJT05TW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRXhoYXVzdGVkO1xuICB9XG5cbiAgX2FsaWdubWVudHNFeGhhdXN0ZWQocG9zaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy50cmllZFBvc2l0aW9uc1twb3NpdGlvbl0gJiYgdGhpcy50cmllZFBvc2l0aW9uc1twb3NpdGlvbl0ubGVuZ3RoID09IEFMSUdOTUVOVFNbcG9zaXRpb25dLmxlbmd0aDtcbiAgfVxuXG5cbiAgLy8gV2hlbiB3ZSdyZSB0cnlpbmcgdG8gY2VudGVyLCB3ZSBkb24ndCB3YW50IHRvIGFwcGx5IG9mZnNldCB0aGF0J3MgZ29pbmcgdG9cbiAgLy8gdGFrZSB1cyBqdXN0IG9mZiBjZW50ZXIsIHNvIHdyYXAgYXJvdW5kIHRvIHJldHVybiAwIGZvciB0aGUgYXBwcm9wcmlhdGVcbiAgLy8gb2Zmc2V0IGluIHRob3NlIGFsaWdubWVudHMuICBUT0RPOiBGaWd1cmUgb3V0IGlmIHdlIHdhbnQgdG8gbWFrZSB0aGlzXG4gIC8vIGNvbmZpZ3VyYWJsZSBiZWhhdmlvci4uLiBpdCBmZWVscyBtb3JlIGludHVpdGl2ZSwgZXNwZWNpYWxseSBmb3IgdG9vbHRpcHMsIGJ1dFxuICAvLyBpdCdzIHBvc3NpYmxlIHNvbWVvbmUgbWlnaHQgYWN0dWFsbHkgd2FudCB0byBzdGFydCBmcm9tIGNlbnRlciBhbmQgdGhlbiBudWRnZVxuICAvLyBzbGlnaHRseSBvZmYuXG4gIF9nZXRWT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudk9mZnNldDtcbiAgfVxuXG4gIF9nZXRIT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaE9mZnNldDtcbiAgfVxuXG5cbiAgX3NldFBvc2l0aW9uKCRhbmNob3IsICRlbGVtZW50LCAkcGFyZW50KSB7XG4gICAgaWYoJGFuY2hvci5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpeyByZXR1cm4gZmFsc2U7IH1cbiAgICB2YXIgJGVsZURpbXMgPSBCb3guR2V0RGltZW5zaW9ucygkZWxlbWVudCksXG4gICAgICAgICRhbmNob3JEaW1zID0gQm94LkdldERpbWVuc2lvbnMoJGFuY2hvcik7XG5cblxuICAgIGlmICghdGhpcy5vcHRpb25zLmFsbG93T3ZlcmxhcCkge1xuICAgICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBwb3NpdGlvbiAmIGFsaWdubWVudCBiZWZvcmUgY2hlY2tpbmcgb3ZlcmxhcFxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub3JpZ2luYWxQb3NpdGlvbjtcbiAgICAgIHRoaXMuYWxpZ25tZW50ID0gdGhpcy5vcmlnaW5hbEFsaWdubWVudDtcbiAgICB9XG5cbiAgICAkZWxlbWVudC5vZmZzZXQoQm94LkdldEV4cGxpY2l0T2Zmc2V0cygkZWxlbWVudCwgJGFuY2hvciwgdGhpcy5wb3NpdGlvbiwgdGhpcy5hbGlnbm1lbnQsIHRoaXMuX2dldFZPZmZzZXQoKSwgdGhpcy5fZ2V0SE9mZnNldCgpKSk7XG5cbiAgICBpZighdGhpcy5vcHRpb25zLmFsbG93T3ZlcmxhcCkge1xuICAgICAgdmFyIG92ZXJsYXBzID0ge307XG4gICAgICB2YXIgbWluT3ZlcmxhcCA9IDEwMDAwMDAwMDtcbiAgICAgIC8vIGRlZmF1bHQgY29vcmRpbmF0ZXMgdG8gaG93IHdlIHN0YXJ0LCBpbiBjYXNlIHdlIGNhbid0IGZpZ3VyZSBvdXQgYmV0dGVyXG4gICAgICB2YXIgbWluQ29vcmRpbmF0ZXMgPSB7cG9zaXRpb246IHRoaXMucG9zaXRpb24sIGFsaWdubWVudDogdGhpcy5hbGlnbm1lbnR9O1xuICAgICAgd2hpbGUoIXRoaXMuX3Bvc2l0aW9uc0V4aGF1c3RlZCgpKSB7XG4gICAgICAgIGxldCBvdmVybGFwID0gQm94Lk92ZXJsYXBBcmVhKCRlbGVtZW50LCAkcGFyZW50LCBmYWxzZSwgZmFsc2UsIHRoaXMub3B0aW9ucy5hbGxvd0JvdHRvbU92ZXJsYXApO1xuICAgICAgICBpZihvdmVybGFwID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYob3ZlcmxhcCA8IG1pbk92ZXJsYXApIHtcbiAgICAgICAgICBtaW5PdmVybGFwID0gb3ZlcmxhcDtcbiAgICAgICAgICBtaW5Db29yZGluYXRlcyA9IHtwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgYWxpZ25tZW50OiB0aGlzLmFsaWdubWVudH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXBvc2l0aW9uKCk7XG5cbiAgICAgICAgJGVsZW1lbnQub2Zmc2V0KEJveC5HZXRFeHBsaWNpdE9mZnNldHMoJGVsZW1lbnQsICRhbmNob3IsIHRoaXMucG9zaXRpb24sIHRoaXMuYWxpZ25tZW50LCB0aGlzLl9nZXRWT2Zmc2V0KCksIHRoaXMuX2dldEhPZmZzZXQoKSkpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgZ2V0IHRocm91Z2ggdGhlIGVudGlyZSBsb29wLCB0aGVyZSB3YXMgbm8gbm9uLW92ZXJsYXBwaW5nXG4gICAgICAvLyBwb3NpdGlvbiBhdmFpbGFibGUuIFBpY2sgdGhlIHZlcnNpb24gd2l0aCBsZWFzdCBvdmVybGFwLlxuICAgICAgdGhpcy5wb3NpdGlvbiA9IG1pbkNvb3JkaW5hdGVzLnBvc2l0aW9uO1xuICAgICAgdGhpcy5hbGlnbm1lbnQgPSBtaW5Db29yZGluYXRlcy5hbGlnbm1lbnQ7XG4gICAgICAkZWxlbWVudC5vZmZzZXQoQm94LkdldEV4cGxpY2l0T2Zmc2V0cygkZWxlbWVudCwgJGFuY2hvciwgdGhpcy5wb3NpdGlvbiwgdGhpcy5hbGlnbm1lbnQsIHRoaXMuX2dldFZPZmZzZXQoKSwgdGhpcy5fZ2V0SE9mZnNldCgpKSk7XG4gICAgfVxuICB9XG5cbn1cblxuUG9zaXRpb25hYmxlLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogUG9zaXRpb24gb2YgcG9zaXRpb25hYmxlIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgb3IgYXV0by5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnYXV0bydcbiAgICovXG4gIHBvc2l0aW9uOiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGlnbm1lbnQgb2YgcG9zaXRpb25hYmxlIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgY2VudGVyLCBvciBhdXRvLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgYWxpZ25tZW50OiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIGNvbnRhaW5lci93aW5kb3cuIElmIGZhbHNlLCBkcm9wZG93biBwb3NpdGlvbmFibGUgZmlyc3RcbiAgICogdHJ5IHRvIHBvc2l0aW9uIGFzIGRlZmluZWQgYnkgZGF0YS1wb3NpdGlvbiBhbmQgZGF0YS1hbGlnbm1lbnQsIGJ1dFxuICAgKiByZXBvc2l0aW9uIGlmIGl0IHdvdWxkIGNhdXNlIGFuIG92ZXJmbG93LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYWxsb3dPdmVybGFwOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93IG92ZXJsYXAgb2Ygb25seSB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXIuIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uXG4gICAqIGJlaGF2aW9yIGZvciBkcm9wZG93bnMsIGFsbG93aW5nIHRoZSBkcm9wZG93biB0byBleHRlbmQgdGhlIGJvdHRvbSBvZiB0aGVcbiAgICogc2NyZWVuIGJ1dCBub3Qgb3RoZXJ3aXNlIGluZmx1ZW5jZSBvciBicmVhayBvdXQgb2YgdGhlIGNvbnRhaW5lci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYWxsb3dCb3R0b21PdmVybGFwOiB0cnVlLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyB0aGUgcG9zaXRpb25hYmxlIHNob3VsZCBiZSBzZXBhcmF0ZWQgdmVydGljYWxseSBmcm9tIGFuY2hvclxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIHZPZmZzZXQ6IDAsXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcGl4ZWxzIHRoZSBwb3NpdGlvbmFibGUgc2hvdWxkIGJlIHNlcGFyYXRlZCBob3Jpem9udGFsbHkgZnJvbSBhbmNob3JcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBoT2Zmc2V0OiAwLFxufVxuXG5leHBvcnQge1Bvc2l0aW9uYWJsZX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCB7IEdldFlvRGlnaXRzLCBpZ25vcmVNb3VzZWRpc2FwcGVhciB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IE1lZGlhUXVlcnkgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5JztcbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuaW1wb3J0IHsgUG9zaXRpb25hYmxlIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnBvc2l0aW9uYWJsZSc7XG5cbi8qKlxuICogVG9vbHRpcCBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24udG9vbHRpcFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5ib3hcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50cmlnZ2Vyc1xuICovXG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBQb3NpdGlvbmFibGUge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhIFRvb2x0aXAuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBUb29sdGlwXG4gICAqIEBmaXJlcyBUb29sdGlwI2luaXRcbiAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIGF0dGFjaCBhIHRvb2x0aXAgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb2JqZWN0IHRvIGV4dGVuZCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVG9vbHRpcC5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ1Rvb2x0aXAnOyAvLyBpZTkgYmFjayBjb21wYXRcblxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcblxuICAgIC8vIFRyaWdnZXJzIGluaXQgaXMgaWRlbXBvdGVudCwganVzdCBuZWVkIHRvIG1ha2Ugc3VyZSBpdCBpcyBpbml0aWFsaXplZFxuICAgIFRyaWdnZXJzLmluaXQoJCk7XG5cbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHRvb2x0aXAgYnkgc2V0dGluZyB0aGUgY3JlYXRpbmcgdGhlIHRpcCBlbGVtZW50LCBhZGRpbmcgaXQncyB0ZXh0LCBzZXR0aW5nIHByaXZhdGUgdmFyaWFibGVzIGFuZCBzZXR0aW5nIGF0dHJpYnV0ZXMgb24gdGhlIGFuY2hvci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIE1lZGlhUXVlcnkuX2luaXQoKTtcbiAgICB2YXIgZWxlbUlkID0gdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JykgfHwgR2V0WW9EaWdpdHMoNiwgJ3Rvb2x0aXAnKTtcblxuICAgIHRoaXMub3B0aW9ucy50aXBUZXh0ID0gdGhpcy5vcHRpb25zLnRpcFRleHQgfHwgdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGUgPyAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSkgOiB0aGlzLl9idWlsZFRlbXBsYXRlKGVsZW1JZCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93SHRtbCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgICAgICAuaHRtbCh0aGlzLm9wdGlvbnMudGlwVGV4dClcbiAgICAgICAgLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgICAgICAudGV4dCh0aGlzLm9wdGlvbnMudGlwVGV4dClcbiAgICAgICAgLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgJ3RpdGxlJzogJycsXG4gICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGVsZW1JZCxcbiAgICAgICdkYXRhLXlldGktYm94JzogZWxlbUlkLFxuICAgICAgJ2RhdGEtdG9nZ2xlJzogZWxlbUlkLFxuICAgICAgJ2RhdGEtcmVzaXplJzogZWxlbUlkXG4gICAgfSkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnRyaWdnZXJDbGFzcyk7XG5cbiAgICBzdXBlci5faW5pdCgpO1xuICAgIHRoaXMuX2V2ZW50cygpO1xuICB9XG5cbiAgX2dldERlZmF1bHRQb3NpdGlvbigpIHtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IGNsYXNzbmFtZXNcbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLiRlbGVtZW50WzBdLmNsYXNzTmFtZS5tYXRjaCgvXFxiKHRvcHxsZWZ0fHJpZ2h0fGJvdHRvbSlcXGIvZyk7XG4gICAgcmV0dXJuIHBvc2l0aW9uID8gcG9zaXRpb25bMF0gOiAndG9wJztcbiAgfVxuXG4gIF9nZXREZWZhdWx0QWxpZ25tZW50KCkge1xuICAgIHJldHVybiAnY2VudGVyJztcbiAgfVxuXG4gIF9nZXRIT2Zmc2V0KCkge1xuICAgIGlmKHRoaXMucG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhPZmZzZXQgKyB0aGlzLm9wdGlvbnMudG9vbHRpcFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhPZmZzZXRcbiAgICB9XG4gIH1cblxuICBfZ2V0Vk9mZnNldCgpIHtcbiAgICBpZih0aGlzLnBvc2l0aW9uID09PSAndG9wJyB8fCB0aGlzLnBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52T2Zmc2V0ICsgdGhpcy5vcHRpb25zLnRvb2x0aXBIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudk9mZnNldFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBidWlsZHMgdGhlIHRvb2x0aXAgZWxlbWVudCwgYWRkcyBhdHRyaWJ1dGVzLCBhbmQgcmV0dXJucyB0aGUgdGVtcGxhdGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRUZW1wbGF0ZShpZCkge1xuICAgIHZhciB0ZW1wbGF0ZUNsYXNzZXMgPSAoYCR7dGhpcy5vcHRpb25zLnRvb2x0aXBDbGFzc30gJHt0aGlzLm9wdGlvbnMudGVtcGxhdGVDbGFzc2VzfWApLnRyaW0oKTtcbiAgICB2YXIgJHRlbXBsYXRlID0gICQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3ModGVtcGxhdGVDbGFzc2VzKS5hdHRyKHtcbiAgICAgICdyb2xlJzogJ3Rvb2x0aXAnLFxuICAgICAgJ2FyaWEtaGlkZGVuJzogdHJ1ZSxcbiAgICAgICdkYXRhLWlzLWFjdGl2ZSc6IGZhbHNlLFxuICAgICAgJ2RhdGEtaXMtZm9jdXMnOiBmYWxzZSxcbiAgICAgICdpZCc6IGlkXG4gICAgfSk7XG4gICAgcmV0dXJuICR0ZW1wbGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRzIHRoZSBwb3NpdGlvbiBjbGFzcyBvZiBhbiBlbGVtZW50IGFuZCByZWN1cnNpdmVseSBjYWxscyBpdHNlbGYgdW50aWwgdGhlcmUgYXJlIG5vIG1vcmUgcG9zc2libGUgcG9zaXRpb25zIHRvIGF0dGVtcHQsIG9yIHRoZSB0b29sdGlwIGVsZW1lbnQgaXMgbm8gbG9uZ2VyIGNvbGxpZGluZy5cbiAgICogaWYgdGhlIHRvb2x0aXAgaXMgbGFyZ2VyIHRoYW4gdGhlIHNjcmVlbiB3aWR0aCwgZGVmYXVsdCB0byBmdWxsIHdpZHRoIC0gYW55IHVzZXIgc2VsZWN0ZWQgbWFyZ2luXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0UG9zaXRpb24oKSB7XG4gICAgc3VwZXIuX3NldFBvc2l0aW9uKHRoaXMuJGVsZW1lbnQsIHRoaXMudGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldmVhbHMgdGhlIHRvb2x0aXAsIGFuZCBmaXJlcyBhbiBldmVudCB0byBjbG9zZSBhbnkgb3RoZXIgb3BlbiB0b29sdGlwcyBvbiB0aGUgcGFnZVxuICAgKiBAZmlyZXMgVG9vbHRpcCNjbG9zZW1lXG4gICAqIEBmaXJlcyBUb29sdGlwI3Nob3dcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBzaG93KCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd09uICE9PSAnYWxsJyAmJiAhTWVkaWFRdWVyeS5pcyh0aGlzLm9wdGlvbnMuc2hvd09uKSkge1xuICAgICAgLy8gY29uc29sZS5lcnJvcignVGhlIHNjcmVlbiBpcyB0b28gc21hbGwgdG8gZGlzcGxheSB0aGlzIHRvb2x0aXAnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMudGVtcGxhdGUuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpLnNob3coKTtcbiAgICB0aGlzLl9zZXRQb3NpdGlvbigpO1xuICAgIHRoaXMudGVtcGxhdGUucmVtb3ZlQ2xhc3MoJ3RvcCBib3R0b20gbGVmdCByaWdodCcpLmFkZENsYXNzKHRoaXMucG9zaXRpb24pXG4gICAgdGhpcy50ZW1wbGF0ZS5yZW1vdmVDbGFzcygnYWxpZ24tdG9wIGFsaWduLWJvdHRvbSBhbGlnbi1sZWZ0IGFsaWduLXJpZ2h0IGFsaWduLWNlbnRlcicpLmFkZENsYXNzKCdhbGlnbi0nICsgdGhpcy5hbGlnbm1lbnQpO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgdG8gY2xvc2UgYWxsIG90aGVyIG9wZW4gdG9vbHRpcHMgb24gdGhlIHBhZ2VcbiAgICAgKiBAZXZlbnQgQ2xvc2VtZSN0b29sdGlwXG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjbG9zZW1lLnpmLnRvb2x0aXAnLCB0aGlzLnRlbXBsYXRlLmF0dHIoJ2lkJykpO1xuXG5cbiAgICB0aGlzLnRlbXBsYXRlLmF0dHIoe1xuICAgICAgJ2RhdGEtaXMtYWN0aXZlJzogdHJ1ZSxcbiAgICAgICdhcmlhLWhpZGRlbic6IGZhbHNlXG4gICAgfSk7XG4gICAgX3RoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGVtcGxhdGUpO1xuICAgIHRoaXMudGVtcGxhdGUuc3RvcCgpLmhpZGUoKS5jc3MoJ3Zpc2liaWxpdHknLCAnJykuZmFkZUluKHRoaXMub3B0aW9ucy5mYWRlSW5EdXJhdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICAvL21heWJlIGRvIHN0dWZmP1xuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHRvb2x0aXAgaXMgc2hvd25cbiAgICAgKiBAZXZlbnQgVG9vbHRpcCNzaG93XG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdzaG93LnpmLnRvb2x0aXAnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgY3VycmVudCB0b29sdGlwLCBhbmQgcmVzZXRzIHRoZSBwb3NpdGlvbmluZyBjbGFzcyBpZiBpdCB3YXMgY2hhbmdlZCBkdWUgdG8gY29sbGlzaW9uXG4gICAqIEBmaXJlcyBUb29sdGlwI2hpZGVcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBoaWRlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdoaWRpbmcnLCB0aGlzLiRlbGVtZW50LmRhdGEoJ3lldGktYm94JykpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy50ZW1wbGF0ZS5zdG9wKCkuYXR0cih7XG4gICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgJ2RhdGEtaXMtYWN0aXZlJzogZmFsc2VcbiAgICB9KS5mYWRlT3V0KHRoaXMub3B0aW9ucy5mYWRlT3V0RHVyYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIF90aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBmaXJlcyB3aGVuIHRoZSB0b29sdGlwIGlzIGhpZGRlblxuICAgICAqIEBldmVudCBUb29sdGlwI2hpZGVcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2hpZGUuemYudG9vbHRpcCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZHMgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgdG9vbHRpcCBhbmQgaXRzIGFuY2hvclxuICAgKiBUT0RPIGNvbWJpbmUgc29tZSBvZiB0aGUgbGlzdGVuZXJzIGxpa2UgZm9jdXMgYW5kIG1vdXNlZW50ZXIsIGV0Yy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ldmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgJHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZTtcbiAgICB2YXIgaXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZUhvdmVyKSB7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5vbignbW91c2VlbnRlci56Zi50b29sdGlwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIV90aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5zaG93KCk7XG4gICAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5ob3ZlckRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZS56Zi50b29sdGlwJywgaWdub3JlTW91c2VkaXNhcHBlYXIoZnVuY3Rpb24oZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMudGltZW91dCk7XG4gICAgICAgIGlmICghaXNGb2N1cyB8fCAoX3RoaXMuaXNDbGljayAmJiAhX3RoaXMub3B0aW9ucy5jbGlja09wZW4pKSB7XG4gICAgICAgICAgX3RoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbGlja09wZW4pIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ21vdXNlZG93bi56Zi50b29sdGlwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoX3RoaXMuaXNDbGljaykge1xuICAgICAgICAgIC8vX3RoaXMuaGlkZSgpO1xuICAgICAgICAgIC8vIF90aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoKF90aGlzLm9wdGlvbnMuZGlzYWJsZUhvdmVyIHx8ICFfdGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpKSAmJiAhX3RoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF90aGlzLnNob3coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZWRvd24uemYudG9vbHRpcCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgX3RoaXMuaXNDbGljayA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlRm9yVG91Y2gpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5vbigndGFwLnpmLnRvb2x0aXAgdG91Y2hlbmQuemYudG9vbHRpcCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgX3RoaXMuaXNBY3RpdmUgPyBfdGhpcy5oaWRlKCkgOiBfdGhpcy5zaG93KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKHtcbiAgICAgIC8vICd0b2dnbGUuemYudHJpZ2dlcic6IHRoaXMudG9nZ2xlLmJpbmQodGhpcyksXG4gICAgICAvLyAnY2xvc2UuemYudHJpZ2dlcic6IHRoaXMuaGlkZS5iaW5kKHRoaXMpXG4gICAgICAnY2xvc2UuemYudHJpZ2dlcic6IHRoaXMuaGlkZS5iaW5kKHRoaXMpXG4gICAgfSk7XG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAub24oJ2ZvY3VzLnpmLnRvb2x0aXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlzRm9jdXMgPSB0cnVlO1xuICAgICAgICBpZiAoX3RoaXMuaXNDbGljaykge1xuICAgICAgICAgIC8vIElmIHdlJ3JlIG5vdCBzaG93aW5nIG9wZW4gb24gY2xpY2tzLCB3ZSBuZWVkIHRvIHByZXRlbmQgYSBjbGljay1sYXVuY2hlZCBmb2N1cyBpc24ndFxuICAgICAgICAgIC8vIGEgcmVhbCBmb2N1cywgb3RoZXJ3aXNlIG9uIGhvdmVyIGFuZCBjb21lIGJhY2sgd2UgZ2V0IGJhZCBiZWhhdmlvclxuICAgICAgICAgIGlmKCFfdGhpcy5vcHRpb25zLmNsaWNrT3BlbikgeyBpc0ZvY3VzID0gZmFsc2U7IH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAub24oJ2ZvY3Vzb3V0LnpmLnRvb2x0aXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5oaWRlKCk7XG4gICAgICB9KVxuXG4gICAgICAub24oJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF90aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMuX3NldFBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZHMgYSB0b2dnbGUgbWV0aG9kLCBpbiBhZGRpdGlvbiB0byB0aGUgc3RhdGljIHNob3coKSAmIGhpZGUoKSBmdW5jdGlvbnNcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgYW4gaW5zdGFuY2Ugb2YgdG9vbHRpcCwgcmVtb3ZlcyB0ZW1wbGF0ZSBlbGVtZW50IGZyb20gdGhlIHZpZXcuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScsIHRoaXMudGVtcGxhdGUudGV4dCgpKVxuICAgICAgICAgICAgICAgICAub2ZmKCcuemYudHJpZ2dlciAuemYudG9vbHRpcCcpXG4gICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMudHJpZ2dlckNsYXNzKVxuICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3RvcCByaWdodCBsZWZ0IGJvdHRvbScpXG4gICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWRlc2NyaWJlZGJ5IGRhdGEtZGlzYWJsZS1ob3ZlciBkYXRhLXJlc2l6ZSBkYXRhLXRvZ2dsZSBkYXRhLXRvb2x0aXAgZGF0YS15ZXRpLWJveCcpO1xuXG4gICAgdGhpcy50ZW1wbGF0ZS5yZW1vdmUoKTtcbiAgfVxufVxuXG5Ub29sdGlwLmRlZmF1bHRzID0ge1xuICBkaXNhYmxlRm9yVG91Y2g6IGZhbHNlLFxuICAvKipcbiAgICogVGltZSwgaW4gbXMsIGJlZm9yZSBhIHRvb2x0aXAgc2hvdWxkIG9wZW4gb24gaG92ZXIuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMjAwXG4gICAqL1xuICBob3ZlckRlbGF5OiAyMDAsXG4gIC8qKlxuICAgKiBUaW1lLCBpbiBtcywgYSB0b29sdGlwIHNob3VsZCB0YWtlIHRvIGZhZGUgaW50byB2aWV3LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDE1MFxuICAgKi9cbiAgZmFkZUluRHVyYXRpb246IDE1MCxcbiAgLyoqXG4gICAqIFRpbWUsIGluIG1zLCBhIHRvb2x0aXAgc2hvdWxkIHRha2UgdG8gZmFkZSBvdXQgb2Ygdmlldy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAxNTBcbiAgICovXG4gIGZhZGVPdXREdXJhdGlvbjogMTUwLFxuICAvKipcbiAgICogRGlzYWJsZXMgaG92ZXIgZXZlbnRzIGZyb20gb3BlbmluZyB0aGUgdG9vbHRpcCBpZiBzZXQgdG8gdHJ1ZVxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZUhvdmVyOiBmYWxzZSxcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGFkZHRpb25hbCBjbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSB0b29sdGlwIHRlbXBsYXRlIG9uIGluaXQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJydcbiAgICovXG4gIHRlbXBsYXRlQ2xhc3NlczogJycsXG4gIC8qKlxuICAgKiBOb24tb3B0aW9uYWwgY2xhc3MgYWRkZWQgdG8gdG9vbHRpcCB0ZW1wbGF0ZXMuIEZvdW5kYXRpb24gZGVmYXVsdCBpcyAndG9vbHRpcCcuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ3Rvb2x0aXAnXG4gICAqL1xuICB0b29sdGlwQ2xhc3M6ICd0b29sdGlwJyxcbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gdGhlIHRvb2x0aXAgYW5jaG9yIGVsZW1lbnQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2hhcy10aXAnXG4gICAqL1xuICB0cmlnZ2VyQ2xhc3M6ICdoYXMtdGlwJyxcbiAgLyoqXG4gICAqIE1pbmltdW0gYnJlYWtwb2ludCBzaXplIGF0IHdoaWNoIHRvIG9wZW4gdGhlIHRvb2x0aXAuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ3NtYWxsJ1xuICAgKi9cbiAgc2hvd09uOiAnc21hbGwnLFxuICAvKipcbiAgICogQ3VzdG9tIHRlbXBsYXRlIHRvIGJlIHVzZWQgdG8gZ2VuZXJhdGUgbWFya3VwIGZvciB0b29sdGlwLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICB0ZW1wbGF0ZTogJycsXG4gIC8qKlxuICAgKiBUZXh0IGRpc3BsYXllZCBpbiB0aGUgdG9vbHRpcCB0ZW1wbGF0ZSBvbiBvcGVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICB0aXBUZXh0OiAnJyxcbiAgdG91Y2hDbG9zZVRleHQ6ICdUYXAgdG8gY2xvc2UuJyxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgdG9vbHRpcCB0byByZW1haW4gb3BlbiBpZiB0cmlnZ2VyZWQgd2l0aCBhIGNsaWNrIG9yIHRvdWNoIGV2ZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjbGlja09wZW46IHRydWUsXG4gIC8qKlxuICAgKiBQb3NpdGlvbiBvZiB0b29sdGlwLiBDYW4gYmUgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBvciBhdXRvLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgcG9zaXRpb246ICdhdXRvJyxcbiAgLyoqXG4gICAqIEFsaWdubWVudCBvZiB0b29sdGlwIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgY2VudGVyLCBvciBhdXRvLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgYWxpZ25tZW50OiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIGNvbnRhaW5lci93aW5kb3cuIElmIGZhbHNlLCB0b29sdGlwIHdpbGwgZmlyc3QgdHJ5IHRvXG4gICAqIHBvc2l0aW9uIGFzIGRlZmluZWQgYnkgZGF0YS1wb3NpdGlvbiBhbmQgZGF0YS1hbGlnbm1lbnQsIGJ1dCByZXBvc2l0aW9uIGlmXG4gICAqIGl0IHdvdWxkIGNhdXNlIGFuIG92ZXJmbG93LiAgQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGFsbG93T3ZlcmxhcDogZmFsc2UsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIG9ubHkgdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyLiBUaGlzIGlzIHRoZSBtb3N0IGNvbW1vblxuICAgKiBiZWhhdmlvciBmb3IgZHJvcGRvd25zLCBhbGxvd2luZyB0aGUgZHJvcGRvd24gdG8gZXh0ZW5kIHRoZSBib3R0b20gb2YgdGhlXG4gICAqIHNjcmVlbiBidXQgbm90IG90aGVyd2lzZSBpbmZsdWVuY2Ugb3IgYnJlYWsgb3V0IG9mIHRoZSBjb250YWluZXIuXG4gICAqIExlc3MgY29tbW9uIGZvciB0b29sdGlwcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGFsbG93Qm90dG9tT3ZlcmxhcDogZmFsc2UsXG4gIC8qKlxuICAgKiBEaXN0YW5jZSwgaW4gcGl4ZWxzLCB0aGUgdGVtcGxhdGUgc2hvdWxkIHB1c2ggYXdheSBmcm9tIHRoZSBhbmNob3Igb24gdGhlIFkgYXhpcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICB2T2Zmc2V0OiAwLFxuICAvKipcbiAgICogRGlzdGFuY2UsIGluIHBpeGVscywgdGhlIHRlbXBsYXRlIHNob3VsZCBwdXNoIGF3YXkgZnJvbSB0aGUgYW5jaG9yIG9uIHRoZSBYIGF4aXNcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBoT2Zmc2V0OiAwLFxuICAvKipcbiAgICogRGlzdGFuY2UsIGluIHBpeGVscywgdGhlIHRlbXBsYXRlIHNwYWNpbmcgYXV0by1hZGp1c3QgZm9yIGEgdmVydGljYWwgdG9vbHRpcFxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDE0XG4gICAqL1xuICB0b29sdGlwSGVpZ2h0OiAxNCxcbiAgLyoqXG4gICAqIERpc3RhbmNlLCBpbiBwaXhlbHMsIHRoZSB0ZW1wbGF0ZSBzcGFjaW5nIGF1dG8tYWRqdXN0IGZvciBhIGhvcml6b250YWwgdG9vbHRpcFxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDEyXG4gICAqL1xuICB0b29sdGlwV2lkdGg6IDEyLFxuICAgIC8qKlxuICAgKiBBbGxvdyBIVE1MIGluIHRvb2x0aXAuIFdhcm5pbmc6IElmIHlvdSBhcmUgbG9hZGluZyB1c2VyLWdlbmVyYXRlZCBjb250ZW50IGludG8gdG9vbHRpcHMsXG4gICAqIGFsbG93aW5nIEhUTUwgbWF5IG9wZW4geW91cnNlbGYgdXAgdG8gWFNTIGF0dGFja3MuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBhbGxvd0h0bWw6IGZhbHNlXG59O1xuXG4vKipcbiAqIFRPRE8gdXRpbGl6ZSByZXNpemUgZXZlbnQgdHJpZ2dlclxuICovXG5cbmV4cG9ydCB7VG9vbHRpcH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNb3Rpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24nO1xuXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4gIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGAke3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykge1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0oKSk7XG5cbmNvbnN0IHRyaWdnZXJzID0gKGVsLCB0eXBlKSA9PiB7XG4gIGVsLmRhdGEodHlwZSkuc3BsaXQoJyAnKS5mb3JFYWNoKGlkID0+IHtcbiAgICAkKGAjJHtpZH1gKVsgdHlwZSA9PT0gJ2Nsb3NlJyA/ICd0cmlnZ2VyJyA6ICd0cmlnZ2VySGFuZGxlciddKGAke3R5cGV9LnpmLnRyaWdnZXJgLCBbZWxdKTtcbiAgfSk7XG59O1xuXG52YXIgVHJpZ2dlcnMgPSB7XG4gIExpc3RlbmVyczoge1xuICAgIEJhc2ljOiB7fSxcbiAgICBHbG9iYWw6IHt9XG4gIH0sXG4gIEluaXRpYWxpemVyczoge31cbn1cblxuVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljICA9IHtcbiAgb3Blbkxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICB0cmlnZ2VycygkKHRoaXMpLCAnb3BlbicpO1xuICB9LFxuICBjbG9zZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICBjbG9zZWFibGVMaXN0ZW5lcjogZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGFuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnY2xvc2FibGUnKTtcblxuICAgIGlmKGFuaW1hdGlvbiAhPT0gJycpe1xuICAgICAgTW90aW9uLmFuaW1hdGVPdXQoJCh0aGlzKSwgYW5pbWF0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgJCh0aGlzKS5mYWRlT3V0KCkudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVGb2N1c0xpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZS1mb2N1cycpO1xuICAgICQoYCMke2lkfWApLnRyaWdnZXJIYW5kbGVyKCd0b2dnbGUuemYudHJpZ2dlcicsIFskKHRoaXMpXSk7XG4gIH1cbn07XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtb3Blbl0gd2lsbCByZXZlYWwgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1vcGVuXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NlXSB3aWxsIGNsb3NlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuLy8gSWYgdXNlZCB3aXRob3V0IGEgdmFsdWUgb24gW2RhdGEtY2xvc2VdLCB0aGUgZXZlbnQgd2lsbCBidWJibGUsIGFsbG93aW5nIGl0IHRvIGNsb3NlIGEgcGFyZW50IGNvbXBvbmVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZV0gd2lsbCB0b2dnbGUgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2FibGVdIHdpbGwgcmVzcG9uZCB0byBjbG9zZS56Zi50cmlnZ2VyIGV2ZW50cy5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2Nsb3NlLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xvc2UuemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZWFibGVdLCBbZGF0YS1jbG9zYWJsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZS1mb2N1c10gd2lsbCByZXNwb25kIHRvIGNvbWluZyBpbiBhbmQgb3V0IG9mIGZvY3VzXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xuICAkZWxlbS5vbignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlLWZvY3VzXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbn1cblxuXG5cbi8vIE1vcmUgR2xvYmFsL2NvbXBsZXggbGlzdGVuZXJzIGFuZCB0cmlnZ2Vyc1xuVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbCAgPSB7XG4gIHJlc2l6ZUxpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSByZXNpemUgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInJlc2l6ZVwiKTtcbiAgfSxcbiAgc2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHNjcm9sbCBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwic2Nyb2xsXCIpO1xuICB9LFxuICBjbG9zZU1lTGlzdGVuZXI6IGZ1bmN0aW9uKGUsIHBsdWdpbklkKXtcbiAgICBsZXQgcGx1Z2luID0gZS5uYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgcGx1Z2lucyA9ICQoYFtkYXRhLSR7cGx1Z2lufV1gKS5ub3QoYFtkYXRhLXlldGktYm94PVwiJHtwbHVnaW5JZH1cIl1gKTtcblxuICAgIHBsdWdpbnMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgbGV0IF90aGlzID0gJCh0aGlzKTtcbiAgICAgIF90aGlzLnRyaWdnZXJIYW5kbGVyKCdjbG9zZS56Zi50cmlnZ2VyJywgW190aGlzXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gR2xvYmFsLCBwYXJzZXMgd2hvbGUgZG9jdW1lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyID0gZnVuY3Rpb24ocGx1Z2luTmFtZSkge1xuICB2YXIgeWV0aUJveGVzID0gJCgnW2RhdGEteWV0aS1ib3hdJyksXG4gICAgICBwbHVnTmFtZXMgPSBbJ2Ryb3Bkb3duJywgJ3Rvb2x0aXAnLCAncmV2ZWFsJ107XG5cbiAgaWYocGx1Z2luTmFtZSl7XG4gICAgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcy5wdXNoKHBsdWdpbk5hbWUpO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGx1Z2luTmFtZVswXSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzID0gcGx1Z05hbWVzLmNvbmNhdChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsdWdpbiBuYW1lcyBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gIH1cbiAgaWYoeWV0aUJveGVzLmxlbmd0aCl7XG4gICAgbGV0IGxpc3RlbmVycyA9IHBsdWdOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiBgY2xvc2VtZS56Zi4ke25hbWV9YDtcbiAgICB9KS5qb2luKCcgJyk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGxpc3RlbmVycykub24obGlzdGVuZXJzLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLmNsb3NlTWVMaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgdHJpZ2dlciwgbGlzdGVuZXIpIHtcbiAgbGV0IHRpbWVyLCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKTtcbiAgJCh3aW5kb3cpLm9mZih0cmlnZ2VyKS5vbih0cmlnZ2VyLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRpbWVyKSB7IGNsZWFyVGltZW91dCh0aW1lcik7IH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIGRlYm91bmNlIHx8IDEwKTsvL2RlZmF1bHQgdGltZSB0byBlbWl0IHNjcm9sbCBldmVudFxuICB9KTtcbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtcmVzaXplXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAncmVzaXplLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnJlc2l6ZUxpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXNjcm9sbF0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Njcm9sbC56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5zY3JvbGxMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lciA9IGZ1bmN0aW9uKCRlbGVtKSB7XG4gIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsgcmV0dXJuIGZhbHNlOyB9XG4gIGxldCAkbm9kZXMgPSAkZWxlbS5maW5kKCdbZGF0YS1yZXNpemVdLCBbZGF0YS1zY3JvbGxdLCBbZGF0YS1tdXRhdGVdJyk7XG5cbiAgLy9lbGVtZW50IGNhbGxiYWNrXG4gIHZhciBsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uUmVjb3Jkc0xpc3QpIHtcbiAgICB2YXIgJHRhcmdldCA9ICQobXV0YXRpb25SZWNvcmRzTGlzdFswXS50YXJnZXQpO1xuXG4gICAgLy90cmlnZ2VyIHRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgZWxlbWVudCBkZXBlbmRpbmcgb24gdHlwZVxuICAgIHN3aXRjaCAobXV0YXRpb25SZWNvcmRzTGlzdFswXS50eXBlKSB7XG4gICAgICBjYXNlIFwiYXR0cmlidXRlc1wiOlxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwic2Nyb2xsXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQsIHdpbmRvdy5wYWdlWU9mZnNldF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJyZXNpemVcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldF0pO1xuICAgICAgICAgfVxuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiY2hpbGRMaXN0XCI6XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICB9O1xuXG4gIGlmICgkbm9kZXMubGVuZ3RoKSB7XG4gICAgLy9mb3IgZWFjaCBlbGVtZW50IHRoYXQgbmVlZHMgdG8gbGlzdGVuIGZvciByZXNpemluZywgc2Nyb2xsaW5nLCBvciBtdXRhdGlvbiBhZGQgYSBzaW5nbGUgb2JzZXJ2ZXJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAkbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbik7XG4gICAgICBlbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZSgkbm9kZXNbaV0sIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbXCJkYXRhLWV2ZW50c1wiLCBcInN0eWxlXCJdIH0pO1xuICAgIH1cbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIoJGRvY3VtZW50KTtcblxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyKCk7XG59XG5cblxuVHJpZ2dlcnMuaW5pdCA9IGZ1bmN0aW9uICgkLCBGb3VuZGF0aW9uKSB7XG4gIG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJC50cmlnZ2Vyc0luaXRpYWxpemVkICE9PSB0cnVlKSB7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzKCk7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICAkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoRm91bmRhdGlvbikge1xuICAgIEZvdW5kYXRpb24uVHJpZ2dlcnMgPSBUcmlnZ2VycztcbiAgICAvLyBMZWdhY3kgaW5jbHVkZWQgdG8gYmUgYmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIG5vdy5cbiAgICBGb3VuZGF0aW9uLklIZWFyWW91ID0gVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVyc1xuICB9XG59XG5cbmV4cG9ydCB7VHJpZ2dlcnN9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
