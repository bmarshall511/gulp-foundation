(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.util.keyboard"), require("./foundation.core"), require("jquery"), require("./foundation.util.box"), require("./foundation.util.motion"), require("./foundation.util.touch"));else if (typeof define === 'function' && define.amd) define(["./foundation.util.keyboard", "./foundation.core", "jquery", "./foundation.util.box", "./foundation.util.motion", "./foundation.util.touch"], factory);else if (typeof exports === 'object') exports["foundation.dropdown"] = factory(require("./foundation.util.keyboard"), require("./foundation.core"), require("jquery"), require("./foundation.util.box"), require("./foundation.util.motion"), require("./foundation.util.touch"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.dropdown"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.box"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.touch"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE__foundation_util_box__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE__foundation_util_touch__) {
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

      return __webpack_require__(__webpack_require__.s = 4);
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
      "./js/entries/plugins/foundation.dropdown.js":
      /*!***************************************************!*\
        !*** ./js/entries/plugins/foundation.dropdown.js ***!
        \***************************************************/

      /*! exports provided: Foundation, Dropdown */

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


        var _foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.dropdown */
        "./js/foundation.dropdown.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Dropdown", function () {
          return _foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__["Dropdown"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], 'Dropdown');
        /***/

      },

      /***/
      "./js/foundation.dropdown.js":
      /*!***********************************!*\
        !*** ./js/foundation.dropdown.js ***!
        \***********************************/

      /*! exports provided: Dropdown */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Dropdown", function () {
          return Dropdown;
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


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.positionable */
        "./js/foundation.positionable.js");
        /* harmony import */


        var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.util.triggers */
        "./js/foundation.util.triggers.js");
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./foundation.util.touch */
        "./foundation.util.touch");
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__);

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
         * Dropdown module.
         * @module foundation.dropdown
         * @requires foundation.util.keyboard
         * @requires foundation.util.box
         * @requires foundation.util.triggers
         */


        var Dropdown =
        /*#__PURE__*/
        function (_Positionable) {
          _inherits(Dropdown, _Positionable);

          function Dropdown() {
            _classCallCheck(this, Dropdown);

            return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
          }

          _createClass(Dropdown, [{
            key: "_setup",

            /**
             * Creates a new instance of a dropdown.
             * @class
             * @name Dropdown
             * @param {jQuery} element - jQuery object to make into a dropdown.
             *        Object should be of the dropdown panel, rather than its anchor.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Dropdown.defaults, this.$element.data(), options);
              this.className = 'Dropdown'; // ie9 back compat
              // Triggers init is idempotent, just need to make sure it is initialized

              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              this._init();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Dropdown', {
                'ENTER': 'toggle',
                'SPACE': 'toggle',
                'ESCAPE': 'close'
              });
            }
            /**
             * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
             * @function
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              var $id = this.$element.attr('id');
              this.$anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-toggle=\"".concat($id, "\"]")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-open=\"".concat($id, "\"]"));
              this.$anchors.attr({
                'aria-controls': $id,
                'data-is-focus': false,
                'data-yeti-box': $id,
                'aria-haspopup': true,
                'aria-expanded': false
              });

              this._setCurrentAnchor(this.$anchors.first());

              if (this.options.parentClass) {
                this.$parent = this.$element.parents('.' + this.options.parentClass);
              } else {
                this.$parent = null;
              } // Set [aria-labelledby] on the Dropdown if it is not set


              if (typeof this.$element.attr('aria-labelledby') === 'undefined') {
                // Get the anchor ID or create one
                if (typeof this.$currentAnchor.attr('id') === 'undefined') {
                  this.$currentAnchor.attr('id', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'dd-anchor'));
                }

                ;
                this.$element.attr('aria-labelledby', this.$currentAnchor.attr('id'));
              }

              this.$element.attr({
                'aria-hidden': 'true',
                'data-yeti-box': $id,
                'data-resize': $id
              });

              _get(_getPrototypeOf(Dropdown.prototype), "_init", this).call(this);

              this._events();
            }
          }, {
            key: "_getDefaultPosition",
            value: function _getDefaultPosition() {
              // handle legacy classnames
              var position = this.$element[0].className.match(/(top|left|right|bottom)/g);

              if (position) {
                return position[0];
              } else {
                return 'bottom';
              }
            }
          }, {
            key: "_getDefaultAlignment",
            value: function _getDefaultAlignment() {
              // handle legacy float approach
              var horizontalPosition = /float-(\S+)/.exec(this.$currentAnchor.attr('class'));

              if (horizontalPosition) {
                return horizontalPosition[1];
              }

              return _get(_getPrototypeOf(Dropdown.prototype), "_getDefaultAlignment", this).call(this);
            }
            /**
             * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
             * Recursively calls itself if a collision is detected, with a new position class.
             * @function
             * @private
             */

          }, {
            key: "_setPosition",
            value: function _setPosition() {
              this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));

              _get(_getPrototypeOf(Dropdown.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent);

              this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
            }
            /**
             * Make it a current anchor.
             * Current anchor as the reference for the position of Dropdown panes.
             * @param {HTML} el - DOM element of the anchor.
             * @function
             * @private
             */

          }, {
            key: "_setCurrentAnchor",
            value: function _setCurrentAnchor(el) {
              this.$currentAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
            }
            /**
             * Adds event listeners to the element utilizing the triggers utility library.
             * @function
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              var _this = this;

              this.$element.on({
                'open.zf.trigger': this.open.bind(this),
                'close.zf.trigger': this.close.bind(this),
                'toggle.zf.trigger': this.toggle.bind(this),
                'resizeme.zf.trigger': this._setPosition.bind(this)
              });
              this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function () {
                _this._setCurrentAnchor(this);
              });

              if (this.options.hover) {
                this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
                  _this._setCurrentAnchor(this);

                  var bodyData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();

                  if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
                    clearTimeout(_this.timeout);
                    _this.timeout = setTimeout(function () {
                      _this.open();

                      _this.$anchors.data('hover', true);
                    }, _this.options.hoverDelay);
                  }
                }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function () {
                  clearTimeout(_this.timeout);
                  _this.timeout = setTimeout(function () {
                    _this.close();

                    _this.$anchors.data('hover', false);
                  }, _this.options.hoverDelay);
                }));

                if (this.options.hoverPane) {
                  this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
                    clearTimeout(_this.timeout);
                  }).on('mouseleave.zf.dropdown', Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["ignoreMousedisappear"])(function () {
                    clearTimeout(_this.timeout);
                    _this.timeout = setTimeout(function () {
                      _this.close();

                      _this.$anchors.data('hover', false);
                    }, _this.options.hoverDelay);
                  }));
                }
              }

              this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {
                var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    visibleFocusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(_this.$element);

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Dropdown', {
                  open: function open() {
                    if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {
                      _this.open();

                      _this.$element.attr('tabindex', -1).focus();

                      e.preventDefault();
                    }
                  },
                  close: function close() {
                    _this.close();

                    _this.$anchors.focus();
                  }
                });
              });
            }
            /**
             * Adds an event handler to the body to close any dropdowns on a click.
             * @function
             * @private
             */

          }, {
            key: "_addBodyHandler",
            value: function _addBodyHandler() {
              var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),
                  _this = this;

              $body.off('click.zf.dropdown').on('click.zf.dropdown', function (e) {
                if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
                  return;
                }

                if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
                  return;
                }

                _this.close();

                $body.off('click.zf.dropdown');
              });
            }
            /**
             * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
             * @function
             * @fires Dropdown#closeme
             * @fires Dropdown#show
             */

          }, {
            key: "open",
            value: function open() {
              // var _this = this;

              /**
               * Fires to close other open dropdowns, typically when dropdown is opening
               * @event Dropdown#closeme
               */
              this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
              this.$anchors.addClass('hover').attr({
                'aria-expanded': true
              }); // this.$element/*.show()*/;

              this.$element.addClass('is-opening');

              this._setPosition();

              this.$element.removeClass('is-opening').addClass('is-open').attr({
                'aria-hidden': false
              });

              if (this.options.autoFocus) {
                var $focusable = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].findFocusable(this.$element);

                if ($focusable.length) {
                  $focusable.eq(0).focus();
                }
              }

              if (this.options.closeOnClick) {
                this._addBodyHandler();
              }

              if (this.options.trapFocus) {
                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].trapFocus(this.$element);
              }
              /**
               * Fires once the dropdown is visible.
               * @event Dropdown#show
               */


              this.$element.trigger('show.zf.dropdown', [this.$element]);
            }
            /**
             * Closes the open dropdown pane.
             * @function
             * @fires Dropdown#hide
             */

          }, {
            key: "close",
            value: function close() {
              if (!this.$element.hasClass('is-open')) {
                return false;
              }

              this.$element.removeClass('is-open').attr({
                'aria-hidden': true
              });
              this.$anchors.removeClass('hover').attr('aria-expanded', false);
              /**
               * Fires once the dropdown is no longer visible.
               * @event Dropdown#hide
               */

              this.$element.trigger('hide.zf.dropdown', [this.$element]);

              if (this.options.trapFocus) {
                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].releaseFocus(this.$element);
              }
            }
            /**
             * Toggles the dropdown pane's visibility.
             * @function
             */

          }, {
            key: "toggle",
            value: function toggle() {
              if (this.$element.hasClass('is-open')) {
                if (this.$anchors.data('hover')) return;
                this.close();
              } else {
                this.open();
              }
            }
            /**
             * Destroys the dropdown.
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.$element.off('.zf.trigger').hide();
              this.$anchors.off('.zf.dropdown');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown');
            }
          }]);

          return Dropdown;
        }(_foundation_positionable__WEBPACK_IMPORTED_MODULE_3__["Positionable"]);

        Dropdown.defaults = {
          /**
           * Class that designates bounding container of Dropdown (default: window)
           * @option
           * @type {?string}
           * @default null
           */
          parentClass: null,

          /**
           * Amount of time to delay opening a submenu on hover event.
           * @option
           * @type {number}
           * @default 250
           */
          hoverDelay: 250,

          /**
           * Allow submenus to open on hover events
           * @option
           * @type {boolean}
           * @default false
           */
          hover: false,

          /**
           * Don't close dropdown when hovering over dropdown pane
           * @option
           * @type {boolean}
           * @default false
           */
          hoverPane: false,

          /**
           * Number of pixels between the dropdown pane and the triggering element on open.
           * @option
           * @type {number}
           * @default 0
           */
          vOffset: 0,

          /**
           * Number of pixels between the dropdown pane and the triggering element on open.
           * @option
           * @type {number}
           * @default 0
           */
          hOffset: 0,

          /**
           * Position of dropdown. Can be left, right, bottom, top, or auto.
           * @option
           * @type {string}
           * @default 'auto'
           */
          position: 'auto',

          /**
           * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
           * @option
           * @type {string}
           * @default 'auto'
           */
          alignment: 'auto',

          /**
           * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
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
           * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
           * @option
           * @type {boolean}
           * @default false
           */
          trapFocus: false,

          /**
           * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
           * @option
           * @type {boolean}
           * @default false
           */
          autoFocus: false,

          /**
           * Allows a click on the body to close the dropdown.
           * @option
           * @type {boolean}
           * @default false
           */
          closeOnClick: false
        };
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
      4:
      /*!*********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.dropdown.js ***!
        \*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.dropdown.js */
        "./js/entries/plugins/foundation.dropdown.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24uZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24ucG9zaXRpb25hYmxlLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMuanMiLCJ3ZWJwYWNrOi9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOltcImpRdWVyeVwiXSxcImFtZFwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwifSJdLCJuYW1lcyI6WyJGb3VuZGF0aW9uIiwiRHJvcGRvd24iLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJUcmlnZ2VycyIsIktleWJvYXJkIiwiJGlkIiwiR2V0WW9EaWdpdHMiLCJwb3NpdGlvbiIsImhvcml6b250YWxQb3NpdGlvbiIsImVsIiwiX3RoaXMiLCJib2R5RGF0YSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJpZ25vcmVNb3VzZWRpc2FwcGVhciIsIiR0YXJnZXQiLCJ2aXNpYmxlRm9jdXNhYmxlRWxlbWVudHMiLCJvcGVuIiwiZSIsImNsb3NlIiwiJGJvZHkiLCJkb2N1bWVudCIsIiRmb2N1c2FibGUiLCJQb3NpdGlvbmFibGUiLCJwYXJlbnRDbGFzcyIsImhvdmVyRGVsYXkiLCJob3ZlciIsImhvdmVyUGFuZSIsInZPZmZzZXQiLCJoT2Zmc2V0IiwiYWxpZ25tZW50IiwiYWxsb3dPdmVybGFwIiwiYWxsb3dCb3R0b21PdmVybGFwIiwidHJhcEZvY3VzIiwiYXV0b0ZvY3VzIiwiY2xvc2VPbkNsaWNrIiwiUE9TSVRJT05TIiwiVkVSVElDQUxfQUxJR05NRU5UUyIsIkhPUklaT05UQUxfQUxJR05NRU5UUyIsIkFMSUdOTUVOVFMiLCJjdXJyZW50SWR4IiwiYXJyYXkiLCJSdGwiLCJuZXh0SXRlbSIsImlzRXhoYXVzdGVkIiwiaSIsIiRhbmNob3IiLCIkZWxlbWVudCIsIiRwYXJlbnQiLCIkZWxlRGltcyIsIkJveCIsIiRhbmNob3JEaW1zIiwib3ZlcmxhcHMiLCJtaW5PdmVybGFwIiwibWluQ29vcmRpbmF0ZXMiLCJvdmVybGFwIiwiUGx1Z2luIiwiTXV0YXRpb25PYnNlcnZlciIsInByZWZpeGVzIiwid2luZG93IiwidHJpZ2dlcnMiLCJ0eXBlIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwiaWQiLCJ0b2dnbGVMaXN0ZW5lciIsImNsb3NlYWJsZUxpc3RlbmVyIiwiYW5pbWF0aW9uIiwiTW90aW9uIiwidG9nZ2xlRm9jdXNMaXN0ZW5lciIsIiRlbGVtIiwicmVzaXplTGlzdGVuZXIiLCIkbm9kZXMiLCJzY3JvbGxMaXN0ZW5lciIsImNsb3NlTWVMaXN0ZW5lciIsInBsdWdpbiIsInBsdWdpbnMiLCJ5ZXRpQm94ZXMiLCJwbHVnTmFtZXMiLCJwbHVnaW5OYW1lIiwiY29uc29sZSIsImxpc3RlbmVycyIsImFyZ3MiLCJBcnJheSIsInRpbWVyIiwibGlzdGVuZXIiLCJkZWJvdW5jZSIsImRlYm91bmNlR2xvYmFsTGlzdGVuZXIiLCJsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uIiwibXV0YXRpb25SZWNvcmRzTGlzdCIsImVsZW1lbnRPYnNlcnZlciIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsImF0dHJpYnV0ZUZpbHRlciIsIiRkb2N1bWVudCIsIm9uTG9hZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLDRCQUFBLEVBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsdUJBQUEsRUFBQSwwQkFBQSxFQUFBLHlCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxxQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsdUJBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSxxREFBQSxFQUFBLDRDQUFBLEVBQUEsa0NBQUEsRUFBQSxnREFBQSxFQUFBLG1EQUFBLEVBQUEsa0RBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFB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LGtEQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSw2Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLDZDQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLGlEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLHFDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFVBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsaURBQUEsQ0FBQSxVQUFBLENBQUE7QUFBQSxTQUFBOztBQ0dBQSxRQUFBQSw2Q0FBQUEsQ0FBQUEsWUFBQUEsQ0FBQUEsQ0FBQUEsTUFBQUEsQ0FBa0JDLGlEQUFBQSxDQUFsQkQsVUFBa0JDLENBQWxCRCxFQUFBQSxVQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxVQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLFFBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFlBQUEsbUNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsZ0JBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJDQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1DQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxzREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxvQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsOERBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsc0RBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1EQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyREFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtREFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEscURBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEseUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHNEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDBDQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxtREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxpQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsMkRBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbURBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7OztZQU9NQyxROzs7Ozs7Ozs7Ozs7OztBQUNKOzs7Ozs7OzttQ0FRT0MsTyxFQUFTQyxPLEVBQVM7QUFDdkIsbUJBQUEsUUFBQSxHQUFBLE9BQUE7QUFDQSxtQkFBQSxPQUFBLEdBQWVDLDJDQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxNQUFBQSxDQUFBQSxFQUFBQSxFQUFhSCxRQUFRLENBQXJCRyxRQUFBQSxFQUFnQyxLQUFBLFFBQUEsQ0FBaENBLElBQWdDLEVBQWhDQSxFQUFmLE9BQWVBLENBQWY7QUFDQSxtQkFBQSxTQUFBLEdBSHVCLFVBR3ZCLENBSHVCLENBR007QUFFN0I7O0FBQ0FDLGNBQUFBLHNEQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxDQUFBQSxJQUFBQSxDQUFjRCwyQ0FBQUEsQ0FBZEMsQ0FBQUE7O0FBRUEsbUJBQUEsS0FBQTs7QUFFQUMsY0FBQUEsc0RBQUFBLENBQUFBLFVBQUFBLENBQUFBLENBQUFBLFFBQUFBLENBQUFBLFVBQUFBLEVBQThCO0FBQzVCLHlCQUQ0QixRQUFBO0FBRTVCLHlCQUY0QixRQUFBO0FBRzVCLDBCQUFVO0FBSGtCLGVBQTlCQTtBQUtEO0FBRUQ7Ozs7Ozs7O29DQUtRO0FBQ04sa0JBQUlDLEdBQUcsR0FBRyxLQUFBLFFBQUEsQ0FBQSxJQUFBLENBQVYsSUFBVSxDQUFWO0FBRUEsbUJBQUEsUUFBQSxHQUFnQkgsMkNBQUFBLEdBQUMsa0JBQUEsTUFBQSxDQUFBLEdBQUEsRUFBREEsS0FBQyxDQUFEQSxDQUFBQSxDQUFBQSxNQUFBQSxHQUFxQ0EsMkNBQUFBLEdBQUMsa0JBQUEsTUFBQSxDQUFBLEdBQUEsRUFBdENBLEtBQXNDLENBQURBLENBQXJDQSxHQUFtRUEsMkNBQUFBLEdBQUMsZ0JBQUEsTUFBQSxDQUFBLEdBQUEsRUFBcEYsS0FBb0YsQ0FBREEsQ0FBbkY7QUFDQSxtQkFBQSxRQUFBLENBQUEsSUFBQSxDQUFtQjtBQUNqQixpQ0FEaUIsR0FBQTtBQUVqQixpQ0FGaUIsS0FBQTtBQUdqQixpQ0FIaUIsR0FBQTtBQUlqQixpQ0FKaUIsSUFBQTtBQUtqQixpQ0FBaUI7QUFMQSxlQUFuQjs7QUFRQSxtQkFBQSxpQkFBQSxDQUF1QixLQUFBLFFBQUEsQ0FBdkIsS0FBdUIsRUFBdkI7O0FBRUEsa0JBQUcsS0FBQSxPQUFBLENBQUgsV0FBQSxFQUE0QjtBQUMxQixxQkFBQSxPQUFBLEdBQWUsS0FBQSxRQUFBLENBQUEsT0FBQSxDQUFzQixNQUFNLEtBQUEsT0FBQSxDQUEzQyxXQUFlLENBQWY7QUFERixlQUFBLE1BRUs7QUFDSCxxQkFBQSxPQUFBLEdBQUEsSUFBQTtBQWpCSSxlQUFBLENBb0JOOzs7QUFDQSxrQkFBSSxPQUFPLEtBQUEsUUFBQSxDQUFBLElBQUEsQ0FBUCxpQkFBTyxDQUFQLEtBQUosV0FBQSxFQUFrRTtBQUNoRTtBQUNBLG9CQUFJLE9BQU8sS0FBQSxjQUFBLENBQUEsSUFBQSxDQUFQLElBQU8sQ0FBUCxLQUFKLFdBQUEsRUFBMkQ7QUFDekQsdUJBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLEVBQStCSSxNQUFBQSxDQUFBQSxtREFBQUEsQ0FBQUEsYUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBVyxDQUFYQSxFQUEvQixXQUErQkEsQ0FBL0I7QUFDRDs7QUFBQTtBQUVELHFCQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsaUJBQUEsRUFBc0MsS0FBQSxjQUFBLENBQUEsSUFBQSxDQUF0QyxJQUFzQyxDQUF0QztBQUNEOztBQUVELG1CQUFBLFFBQUEsQ0FBQSxJQUFBLENBQW1CO0FBQ2pCLCtCQURpQixNQUFBO0FBRWpCLGlDQUZpQixHQUFBO0FBR2pCLCtCQUFlRDtBQUhFLGVBQW5COztBQU1BLGNBQUEsSUFBQSxDQUFBLGVBQUEsQ0FBQSxRQUFBLENBQUEsU0FBQSxDQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBOztBQUNBLG1CQUFBLE9BQUE7QUFDRDs7O2tEQUVxQjtBQUNwQjtBQUNBLGtCQUFJRSxRQUFRLEdBQUcsS0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLFNBQUEsQ0FBQSxLQUFBLENBQWYsMEJBQWUsQ0FBZjs7QUFDQSxrQkFBQSxRQUFBLEVBQWE7QUFDWCx1QkFBT0EsUUFBUSxDQUFmLENBQWUsQ0FBZjtBQURGLGVBQUEsTUFFTztBQUNMLHVCQUFBLFFBQUE7QUFDRDtBQUNGOzs7bURBRXNCO0FBQ3JCO0FBQ0Esa0JBQUlDLGtCQUFrQixHQUFHLGNBQUEsSUFBQSxDQUFtQixLQUFBLGNBQUEsQ0FBQSxJQUFBLENBQTVDLE9BQTRDLENBQW5CLENBQXpCOztBQUNBLGtCQUFBLGtCQUFBLEVBQXVCO0FBQ3JCLHVCQUFPQSxrQkFBa0IsQ0FBekIsQ0FBeUIsQ0FBekI7QUFDRDs7QUFFRCxxQkFBQSxJQUFBLENBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQSxzQkFBQSxFQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUE7QUFDRDtBQUlEOzs7Ozs7Ozs7MkNBTWU7QUFDYixtQkFBQSxRQUFBLENBQUEsV0FBQSxDQUFBLGdCQUFBLE1BQUEsQ0FBMEMsS0FBMUMsUUFBQSxFQUFBLGlCQUFBLEVBQUEsTUFBQSxDQUF5RSxLQUF6RSxTQUFBLENBQUE7O0FBQ0EsY0FBQSxJQUFBLENBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQSxjQUFBLEVBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBbUIsS0FBbkIsY0FBQSxFQUF3QyxLQUF4QyxRQUFBLEVBQXVELEtBQXZELE9BQUE7O0FBQ0EsbUJBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxnQkFBQSxNQUFBLENBQXVDLEtBQXZDLFFBQUEsRUFBQSxpQkFBQSxFQUFBLE1BQUEsQ0FBc0UsS0FBdEUsU0FBQSxDQUFBO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs4Q0FPa0JDLEUsRUFBSTtBQUNwQixtQkFBQSxjQUFBLEdBQXNCUCwyQ0FBQUEsR0FBdEIsRUFBc0JBLENBQXRCO0FBQ0Q7QUFFRDs7Ozs7Ozs7c0NBS1U7QUFDUixrQkFBSVEsS0FBSyxHQUFULElBQUE7O0FBQ0EsbUJBQUEsUUFBQSxDQUFBLEVBQUEsQ0FBaUI7QUFDZixtQ0FBbUIsS0FBQSxJQUFBLENBQUEsSUFBQSxDQURKLElBQ0ksQ0FESjtBQUVmLG9DQUFvQixLQUFBLEtBQUEsQ0FBQSxJQUFBLENBRkwsSUFFSyxDQUZMO0FBR2YscUNBQXFCLEtBQUEsTUFBQSxDQUFBLElBQUEsQ0FITixJQUdNLENBSE47QUFJZix1Q0FBdUIsS0FBQSxZQUFBLENBQUEsSUFBQSxDQUFBLElBQUE7QUFKUixlQUFqQjtBQU9BLG1CQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsa0JBQUEsRUFBQSxFQUFBLENBQUEsa0JBQUEsRUFDMEIsWUFBVztBQUFFQSxnQkFBQUEsS0FBSyxDQUFMQSxpQkFBQUEsQ0FBQUEsSUFBQUE7QUFEdkMsZUFBQTs7QUFHQSxrQkFBRyxLQUFBLE9BQUEsQ0FBSCxLQUFBLEVBQXNCO0FBQ3BCLHFCQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsK0NBQUEsRUFBQSxFQUFBLENBQUEsd0JBQUEsRUFDOEIsWUFBVTtBQUN0Q0Esa0JBQUFBLEtBQUssQ0FBTEEsaUJBQUFBLENBQUFBLElBQUFBOztBQUVBLHNCQUFJQyxRQUFRLEdBQUdULDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFmLElBQWVBLEVBQWY7O0FBQ0Esc0JBQUcsT0FBT1MsUUFBUSxDQUFmLFNBQUEsS0FBQSxXQUFBLElBQThDQSxRQUFRLENBQVJBLFNBQUFBLEtBQWpELE9BQUEsRUFBaUY7QUFDL0VDLG9CQUFBQSxZQUFZLENBQUNGLEtBQUssQ0FBbEJFLE9BQVksQ0FBWkE7QUFDQUYsb0JBQUFBLEtBQUssQ0FBTEEsT0FBQUEsR0FBZ0JHLFVBQVUsQ0FBQyxZQUFVO0FBQ25DSCxzQkFBQUEsS0FBSyxDQUFMQSxJQUFBQTs7QUFDQUEsc0JBQUFBLEtBQUssQ0FBTEEsUUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsT0FBQUEsRUFBQUEsSUFBQUE7QUFGd0IscUJBQUEsRUFHdkJBLEtBQUssQ0FBTEEsT0FBQUEsQ0FISEEsVUFBMEIsQ0FBMUJBO0FBSUQ7QUFYSCxpQkFBQSxFQUFBLEVBQUEsQ0FBQSx3QkFBQSxFQVlnQ0ksTUFBQUEsQ0FBQUEsbURBQUFBLENBQUFBLHNCQUFBQSxDQUFBQSxDQUFBQSxDQUFxQixZQUFVO0FBQzdERixrQkFBQUEsWUFBWSxDQUFDRixLQUFLLENBQWxCRSxPQUFZLENBQVpBO0FBQ0FGLGtCQUFBQSxLQUFLLENBQUxBLE9BQUFBLEdBQWdCRyxVQUFVLENBQUMsWUFBVTtBQUNuQ0gsb0JBQUFBLEtBQUssQ0FBTEEsS0FBQUE7O0FBQ0FBLG9CQUFBQSxLQUFLLENBQUxBLFFBQUFBLENBQUFBLElBQUFBLENBQUFBLE9BQUFBLEVBQUFBLEtBQUFBO0FBRndCLG1CQUFBLEVBR3ZCQSxLQUFLLENBQUxBLE9BQUFBLENBSEhBLFVBQTBCLENBQTFCQTtBQWRGLGlCQVlnQ0ksQ0FaaEM7O0FBbUJBLG9CQUFHLEtBQUEsT0FBQSxDQUFILFNBQUEsRUFBMEI7QUFDeEIsdUJBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSwrQ0FBQSxFQUFBLEVBQUEsQ0FBQSx3QkFBQSxFQUNrQyxZQUFVO0FBQ3RDRixvQkFBQUEsWUFBWSxDQUFDRixLQUFLLENBQWxCRSxPQUFZLENBQVpBO0FBRk4sbUJBQUEsRUFBQSxFQUFBLENBQUEsd0JBQUEsRUFHb0NFLE1BQUFBLENBQUFBLG1EQUFBQSxDQUFBQSxzQkFBQUEsQ0FBQUEsQ0FBQUEsQ0FBcUIsWUFBVTtBQUM3REYsb0JBQUFBLFlBQVksQ0FBQ0YsS0FBSyxDQUFsQkUsT0FBWSxDQUFaQTtBQUNBRixvQkFBQUEsS0FBSyxDQUFMQSxPQUFBQSxHQUFnQkcsVUFBVSxDQUFDLFlBQVU7QUFDbkNILHNCQUFBQSxLQUFLLENBQUxBLEtBQUFBOztBQUNBQSxzQkFBQUEsS0FBSyxDQUFMQSxRQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxPQUFBQSxFQUFBQSxLQUFBQTtBQUZ3QixxQkFBQSxFQUd2QkEsS0FBSyxDQUFMQSxPQUFBQSxDQUhIQSxVQUEwQixDQUExQkE7QUFMTixtQkFHb0NJLENBSHBDO0FBVUQ7QUFDRjs7QUFDRCxtQkFBQSxRQUFBLENBQUEsR0FBQSxDQUFrQixLQUFsQixRQUFBLEVBQUEsRUFBQSxDQUFBLHFCQUFBLEVBQTJELFVBQUEsQ0FBQSxFQUFZO0FBRXJFLG9CQUFJQyxPQUFPLEdBQUdiLDJDQUFBQSxHQUFkLElBQWNBLENBQWQ7QUFBQSxvQkFDRWMsd0JBQXdCLEdBQUdaLHNEQUFBQSxDQUFBQSxVQUFBQSxDQUFBQSxDQUFBQSxhQUFBQSxDQUF1Qk0sS0FBSyxDQUR6RCxRQUM2Qk4sQ0FEN0I7O0FBR0FBLGdCQUFBQSxzREFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQUEsQ0FBQUEsRUFBQUEsVUFBQUEsRUFBa0M7QUFDaENhLGtCQUFBQSxJQUFJLEVBQUUsU0FBQSxJQUFBLEdBQVc7QUFDZix3QkFBSUYsT0FBTyxDQUFQQSxFQUFBQSxDQUFXTCxLQUFLLENBQWhCSyxRQUFBQSxLQUE4QixDQUFDQSxPQUFPLENBQVBBLEVBQUFBLENBQW5DLGlCQUFtQ0EsQ0FBbkMsRUFBa0U7QUFDaEVMLHNCQUFBQSxLQUFLLENBQUxBLElBQUFBOztBQUNBQSxzQkFBQUEsS0FBSyxDQUFMQSxRQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxVQUFBQSxFQUFnQyxDQUFoQ0EsQ0FBQUEsRUFBQUEsS0FBQUE7O0FBQ0FRLHNCQUFBQSxDQUFDLENBQURBLGNBQUFBO0FBQ0Q7QUFONkIsbUJBQUE7QUFRaENDLGtCQUFBQSxLQUFLLEVBQUUsU0FBQSxLQUFBLEdBQVc7QUFDaEJULG9CQUFBQSxLQUFLLENBQUxBLEtBQUFBOztBQUNBQSxvQkFBQUEsS0FBSyxDQUFMQSxRQUFBQSxDQUFBQSxLQUFBQTtBQUNEO0FBWCtCLGlCQUFsQ047QUFMRixlQUFBO0FBbUJEO0FBRUQ7Ozs7Ozs7OzhDQUtrQjtBQUNmLGtCQUFJZ0IsS0FBSyxHQUFHbEIsMkNBQUFBLEdBQUVtQixRQUFRLENBQVZuQixJQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFxQixLQUFqQyxRQUFZQSxDQUFaO0FBQUEsa0JBQ0lRLEtBQUssR0FEVCxJQUFBOztBQUVBVSxjQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLG1CQUFBQSxFQUFBQSxFQUFBQSxDQUFBQSxtQkFBQUEsRUFDOEIsVUFBQSxDQUFBLEVBQVc7QUFDbEMsb0JBQUdWLEtBQUssQ0FBTEEsUUFBQUEsQ0FBQUEsRUFBQUEsQ0FBa0JRLENBQUMsQ0FBbkJSLE1BQUFBLEtBQStCQSxLQUFLLENBQUxBLFFBQUFBLENBQUFBLElBQUFBLENBQW9CUSxDQUFDLENBQXJCUixNQUFBQSxFQUFsQyxNQUFBLEVBQXdFO0FBQ3RFO0FBQ0Q7O0FBQ0Qsb0JBQUdBLEtBQUssQ0FBTEEsUUFBQUEsQ0FBQUEsRUFBQUEsQ0FBa0JRLENBQUMsQ0FBbkJSLE1BQUFBLEtBQStCQSxLQUFLLENBQUxBLFFBQUFBLENBQUFBLElBQUFBLENBQW9CUSxDQUFDLENBQXJCUixNQUFBQSxFQUFsQyxNQUFBLEVBQXdFO0FBQ3RFO0FBQ0Q7O0FBQ0RBLGdCQUFBQSxLQUFLLENBQUxBLEtBQUFBOztBQUNBVSxnQkFBQUEsS0FBSyxDQUFMQSxHQUFBQSxDQUFBQSxtQkFBQUE7QUFUUEEsZUFBQUE7QUFXRjtBQUVEOzs7Ozs7Ozs7bUNBTU87QUFDTDs7QUFDQTs7OztBQUlBLG1CQUFBLFFBQUEsQ0FBQSxPQUFBLENBQUEscUJBQUEsRUFBNkMsS0FBQSxRQUFBLENBQUEsSUFBQSxDQUE3QyxJQUE2QyxDQUE3QztBQUNBLG1CQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FDVTtBQUFDLGlDQUFpQjtBQUFsQixlQURWLEVBUEssQ0FTTDs7QUFFQSxtQkFBQSxRQUFBLENBQUEsUUFBQSxDQUFBLFlBQUE7O0FBQ0EsbUJBQUEsWUFBQTs7QUFDQSxtQkFBQSxRQUFBLENBQUEsV0FBQSxDQUFBLFlBQUEsRUFBQSxRQUFBLENBQUEsU0FBQSxFQUFBLElBQUEsQ0FDVTtBQUFDLCtCQUFlO0FBQWhCLGVBRFY7O0FBR0Esa0JBQUcsS0FBQSxPQUFBLENBQUgsU0FBQSxFQUEwQjtBQUN4QixvQkFBSUUsVUFBVSxHQUFHbEIsc0RBQUFBLENBQUFBLFVBQUFBLENBQUFBLENBQUFBLGFBQUFBLENBQXVCLEtBQXhDLFFBQWlCQSxDQUFqQjs7QUFDQSxvQkFBR2tCLFVBQVUsQ0FBYixNQUFBLEVBQXFCO0FBQ25CQSxrQkFBQUEsVUFBVSxDQUFWQSxFQUFBQSxDQUFBQSxDQUFBQSxFQUFBQSxLQUFBQTtBQUNEO0FBQ0Y7O0FBRUQsa0JBQUcsS0FBQSxPQUFBLENBQUgsWUFBQSxFQUE2QjtBQUFFLHFCQUFBLGVBQUE7QUFBeUI7O0FBRXhELGtCQUFJLEtBQUEsT0FBQSxDQUFKLFNBQUEsRUFBNEI7QUFDMUJsQixnQkFBQUEsc0RBQUFBLENBQUFBLFVBQUFBLENBQUFBLENBQUFBLFNBQUFBLENBQW1CLEtBQW5CQSxRQUFBQTtBQUNEO0FBRUQ7Ozs7OztBQUlBLG1CQUFBLFFBQUEsQ0FBQSxPQUFBLENBQUEsa0JBQUEsRUFBMEMsQ0FBQyxLQUEzQyxRQUEwQyxDQUExQztBQUNEO0FBRUQ7Ozs7Ozs7O29DQUtRO0FBQ04sa0JBQUcsQ0FBQyxLQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUosU0FBSSxDQUFKLEVBQXNDO0FBQ3BDLHVCQUFBLEtBQUE7QUFDRDs7QUFDRCxtQkFBQSxRQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxJQUFBLENBQ1U7QUFBQywrQkFBZTtBQUFoQixlQURWO0FBR0EsbUJBQUEsUUFBQSxDQUFBLFdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLGVBQUEsRUFBQSxLQUFBO0FBR0E7Ozs7O0FBSUEsbUJBQUEsUUFBQSxDQUFBLE9BQUEsQ0FBQSxrQkFBQSxFQUEwQyxDQUFDLEtBQTNDLFFBQTBDLENBQTFDOztBQUVBLGtCQUFJLEtBQUEsT0FBQSxDQUFKLFNBQUEsRUFBNEI7QUFDMUJBLGdCQUFBQSxzREFBQUEsQ0FBQUEsVUFBQUEsQ0FBQUEsQ0FBQUEsWUFBQUEsQ0FBc0IsS0FBdEJBLFFBQUFBO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3FDQUlTO0FBQ1Asa0JBQUcsS0FBQSxRQUFBLENBQUEsUUFBQSxDQUFILFNBQUcsQ0FBSCxFQUFxQztBQUNuQyxvQkFBRyxLQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUgsT0FBRyxDQUFILEVBQWdDO0FBQ2hDLHFCQUFBLEtBQUE7QUFGRixlQUFBLE1BR0s7QUFDSCxxQkFBQSxJQUFBO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7O3VDQUlXO0FBQ1QsbUJBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxhQUFBLEVBQUEsSUFBQTtBQUNBLG1CQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsY0FBQTtBQUNBRixjQUFBQSwyQ0FBQUEsR0FBRW1CLFFBQVEsQ0FBVm5CLElBQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLG1CQUFBQTtBQUVEOzs7O1VBMVNvQnFCLHFEQUFBQSxDQUFBQSxjQUFBQSxDOztBQTZTdkJ4QixRQUFBQSxRQUFRLENBQVJBLFFBQUFBLEdBQW9CO0FBQ2xCOzs7Ozs7QUFNQXlCLFVBQUFBLFdBQVcsRUFQTyxJQUFBOztBQVFsQjs7Ozs7O0FBTUFDLFVBQUFBLFVBQVUsRUFkUSxHQUFBOztBQWVsQjs7Ozs7O0FBTUFDLFVBQUFBLEtBQUssRUFyQmEsS0FBQTs7QUFzQmxCOzs7Ozs7QUFNQUMsVUFBQUEsU0FBUyxFQTVCUyxLQUFBOztBQTZCbEI7Ozs7OztBQU1BQyxVQUFBQSxPQUFPLEVBbkNXLENBQUE7O0FBb0NsQjs7Ozs7O0FBTUFDLFVBQUFBLE9BQU8sRUExQ1csQ0FBQTs7QUEyQ2xCOzs7Ozs7QUFNQXRCLFVBQUFBLFFBQVEsRUFqRFUsTUFBQTs7QUFrRGxCOzs7Ozs7QUFNQXVCLFVBQUFBLFNBQVMsRUF4RFMsTUFBQTs7QUF5RGxCOzs7Ozs7QUFNQUMsVUFBQUEsWUFBWSxFQS9ETSxLQUFBOztBQWdFbEI7Ozs7Ozs7O0FBUUFDLFVBQUFBLGtCQUFrQixFQXhFQSxJQUFBOztBQXlFbEI7Ozs7OztBQU1BQyxVQUFBQSxTQUFTLEVBL0VTLEtBQUE7O0FBZ0ZsQjs7Ozs7O0FBTUFDLFVBQUFBLFNBQVMsRUF0RlMsS0FBQTs7QUF1RmxCOzs7Ozs7QUFNQUMsVUFBQUEsWUFBWSxFQUFFO0FBN0ZJLFNBQXBCcEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsY0FBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxZQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLGlEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLCtCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSx5REFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxpREFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsb0RBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDREQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG9EQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxZQUFNcUMsU0FBUyxHQUFHLENBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQWxCLFFBQWtCLENBQWxCO0FBQ0EsWUFBTUMsbUJBQW1CLEdBQUcsQ0FBQSxLQUFBLEVBQUEsUUFBQSxFQUE1QixRQUE0QixDQUE1QjtBQUNBLFlBQU1DLHFCQUFxQixHQUFHLENBQUEsTUFBQSxFQUFBLE9BQUEsRUFBOUIsUUFBOEIsQ0FBOUI7QUFFQSxZQUFNQyxVQUFVLEdBQUc7QUFDakIsa0JBRGlCLG1CQUFBO0FBRWpCLG1CQUZpQixtQkFBQTtBQUdqQixpQkFIaUIscUJBQUE7QUFJakIsb0JBQVVEO0FBSk8sU0FBbkI7O0FBT0EsaUJBQUEsUUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBLEVBQStCO0FBQzdCLGNBQUlFLFVBQVUsR0FBR0MsS0FBSyxDQUFMQSxPQUFBQSxDQUFqQixJQUFpQkEsQ0FBakI7O0FBQ0EsY0FBR0QsVUFBVSxLQUFLQyxLQUFLLENBQUxBLE1BQUFBLEdBQWxCLENBQUEsRUFBb0M7QUFDbEMsbUJBQU9BLEtBQUssQ0FBWixDQUFZLENBQVo7QUFERixXQUFBLE1BRU87QUFDTCxtQkFBT0EsS0FBSyxDQUFDRCxVQUFVLEdBQXZCLENBQVksQ0FBWjtBQUNEO0FBQ0Y7O1lBR0tqQixZOzs7Ozs7Ozs7Ozs7OztBQUNKOzs7Ozs7Ozs7b0NBVVE7QUFDTixtQkFBQSxjQUFBLEdBQUEsRUFBQTtBQUNBLG1CQUFBLFFBQUEsR0FBaUIsS0FBQSxPQUFBLENBQUEsUUFBQSxLQUFBLE1BQUEsR0FBbUMsS0FBbkMsbUJBQW1DLEVBQW5DLEdBQWdFLEtBQUEsT0FBQSxDQUFqRixRQUFBO0FBQ0EsbUJBQUEsU0FBQSxHQUFpQixLQUFBLE9BQUEsQ0FBQSxTQUFBLEtBQUEsTUFBQSxHQUFvQyxLQUFwQyxvQkFBb0MsRUFBcEMsR0FBa0UsS0FBQSxPQUFBLENBQW5GLFNBQUE7QUFDQSxtQkFBQSxnQkFBQSxHQUF3QixLQUF4QixRQUFBO0FBQ0EsbUJBQUEsaUJBQUEsR0FBeUIsS0FBekIsU0FBQTtBQUNEOzs7a0RBRXNCO0FBQ3JCLHFCQUFBLFFBQUE7QUFDRDs7O21EQUVzQjtBQUNyQixzQkFBTyxLQUFQLFFBQUE7QUFDRSxxQkFBQSxRQUFBO0FBQ0EscUJBQUEsS0FBQTtBQUNFLHlCQUFPbUIsTUFBQUEsQ0FBQUEsb0RBQUFBLENBQUFBLEtBQUFBLENBQUFBLENBQUFBLEtBQUcsT0FBSEEsR0FBUCxNQUFBOztBQUNGLHFCQUFBLE1BQUE7QUFDQSxxQkFBQSxPQUFBO0FBQ0UseUJBQUEsUUFBQTtBQU5KO0FBUUQ7QUFFRDs7Ozs7Ozs7OzBDQU1jO0FBQ1osa0JBQUcsS0FBQSxvQkFBQSxDQUEwQixLQUE3QixRQUFHLENBQUgsRUFBNkM7QUFDM0MscUJBQUEsUUFBQSxHQUFnQkMsUUFBUSxDQUFDLEtBQUQsUUFBQSxFQUF4QixTQUF3QixDQUF4QjtBQUNBLHFCQUFBLFNBQUEsR0FBaUJKLFVBQVUsQ0FBQyxLQUFYQSxRQUFVLENBQVZBLENBQWpCLENBQWlCQSxDQUFqQjtBQUZGLGVBQUEsTUFHTztBQUNMLHFCQUFBLFFBQUE7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozt1Q0FNVztBQUNULG1CQUFBLGlCQUFBLENBQXVCLEtBQXZCLFFBQUEsRUFBc0MsS0FBdEMsU0FBQTs7QUFDQSxtQkFBQSxTQUFBLEdBQWlCSSxRQUFRLENBQUMsS0FBRCxTQUFBLEVBQWlCSixVQUFVLENBQUMsS0FBckQsUUFBb0QsQ0FBM0IsQ0FBekI7QUFDRDs7OzhDQUVpQmhDLFEsRUFBVXVCLFMsRUFBVztBQUNyQyxtQkFBQSxjQUFBLENBQUEsUUFBQSxJQUFnQyxLQUFBLGNBQUEsQ0FBQSxRQUFBLEtBQWhDLEVBQUE7QUFDQSxtQkFBQSxjQUFBLENBQUEsUUFBQSxFQUFBLElBQUEsQ0FBQSxTQUFBO0FBQ0Q7OztrREFFcUI7QUFDcEIsa0JBQUljLFdBQVcsR0FBZixJQUFBOztBQUNBLG1CQUFJLElBQUlDLENBQUMsR0FBVCxDQUFBLEVBQWVBLENBQUMsR0FBR1QsU0FBUyxDQUE1QixNQUFBLEVBQXFDUyxDQUFyQyxFQUFBLEVBQTBDO0FBQ3hDRCxnQkFBQUEsV0FBVyxHQUFHQSxXQUFXLElBQUksS0FBQSxvQkFBQSxDQUEwQlIsU0FBUyxDQUFoRVEsQ0FBZ0UsQ0FBbkMsQ0FBN0JBO0FBQ0Q7O0FBQ0QscUJBQUEsV0FBQTtBQUNEOzs7aURBRW9CckMsUSxFQUFVO0FBQzdCLHFCQUFPLEtBQUEsY0FBQSxDQUFBLFFBQUEsS0FBaUMsS0FBQSxjQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsSUFBd0NnQyxVQUFVLENBQVZBLFFBQVUsQ0FBVkEsQ0FBaEYsTUFBQTtjQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzswQ0FDYztBQUNaLHFCQUFPLEtBQUEsT0FBQSxDQUFQLE9BQUE7QUFDRDs7OzBDQUVhO0FBQ1oscUJBQU8sS0FBQSxPQUFBLENBQVAsT0FBQTtBQUNEOzs7eUNBR1lPLE8sRUFBU0MsUSxFQUFVQyxPLEVBQVM7QUFDdkMsa0JBQUdGLE9BQU8sQ0FBUEEsSUFBQUEsQ0FBQUEsZUFBQUEsTUFBSCxPQUFBLEVBQTZDO0FBQUUsdUJBQUEsS0FBQTtBQUFlOztBQUM5RCxrQkFBSUcsUUFBUSxHQUFHQyxpREFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsQ0FBQUEsYUFBQUEsQ0FBZixRQUFlQSxDQUFmO0FBQUEsa0JBQ0lDLFdBQVcsR0FBR0QsaURBQUFBLENBQUFBLEtBQUFBLENBQUFBLENBQUFBLGFBQUFBLENBRGxCLE9BQ2tCQSxDQURsQjs7QUFJQSxrQkFBSSxDQUFDLEtBQUEsT0FBQSxDQUFMLFlBQUEsRUFBZ0M7QUFDOUI7QUFDQSxxQkFBQSxRQUFBLEdBQWdCLEtBQWhCLGdCQUFBO0FBQ0EscUJBQUEsU0FBQSxHQUFpQixLQUFqQixpQkFBQTtBQUNEOztBQUVESCxjQUFBQSxRQUFRLENBQVJBLE1BQUFBLENBQWdCRyxpREFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsQ0FBQUEsa0JBQUFBLENBQUFBLFFBQUFBLEVBQUFBLE9BQUFBLEVBQTBDLEtBQTFDQSxRQUFBQSxFQUF5RCxLQUF6REEsU0FBQUEsRUFBeUUsS0FBekVBLFdBQXlFLEVBQXpFQSxFQUE2RixLQUE3R0gsV0FBNkcsRUFBN0ZHLENBQWhCSDs7QUFFQSxrQkFBRyxDQUFDLEtBQUEsT0FBQSxDQUFKLFlBQUEsRUFBK0I7QUFDN0Isb0JBQUlLLFFBQVEsR0FBWixFQUFBO0FBQ0Esb0JBQUlDLFVBQVUsR0FGZSxTQUU3QixDQUY2QixDQUc3Qjs7QUFDQSxvQkFBSUMsY0FBYyxHQUFHO0FBQUMvQyxrQkFBQUEsUUFBUSxFQUFFLEtBQVgsUUFBQTtBQUEwQnVCLGtCQUFBQSxTQUFTLEVBQUUsS0FBS0E7QUFBMUMsaUJBQXJCOztBQUNBLHVCQUFNLENBQUMsS0FBUCxtQkFBTyxFQUFQLEVBQW1DO0FBQ2pDLHNCQUFJeUIsT0FBTyxHQUFHTCxpREFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsQ0FBQUEsV0FBQUEsQ0FBQUEsUUFBQUEsRUFBQUEsT0FBQUEsRUFBQUEsS0FBQUEsRUFBQUEsS0FBQUEsRUFBaUQsS0FBQSxPQUFBLENBQS9ELGtCQUFjQSxDQUFkOztBQUNBLHNCQUFHSyxPQUFPLEtBQVYsQ0FBQSxFQUFrQjtBQUNoQjtBQUNEOztBQUVELHNCQUFHQSxPQUFPLEdBQVYsVUFBQSxFQUF5QjtBQUN2QkYsb0JBQUFBLFVBQVUsR0FBVkEsT0FBQUE7QUFDQUMsb0JBQUFBLGNBQWMsR0FBRztBQUFDL0Msc0JBQUFBLFFBQVEsRUFBRSxLQUFYLFFBQUE7QUFBMEJ1QixzQkFBQUEsU0FBUyxFQUFFLEtBQUtBO0FBQTFDLHFCQUFqQndCO0FBQ0Q7O0FBRUQsdUJBQUEsV0FBQTs7QUFFQVAsa0JBQUFBLFFBQVEsQ0FBUkEsTUFBQUEsQ0FBZ0JHLGlEQUFBQSxDQUFBQSxLQUFBQSxDQUFBQSxDQUFBQSxrQkFBQUEsQ0FBQUEsUUFBQUEsRUFBQUEsT0FBQUEsRUFBMEMsS0FBMUNBLFFBQUFBLEVBQXlELEtBQXpEQSxTQUFBQSxFQUF5RSxLQUF6RUEsV0FBeUUsRUFBekVBLEVBQTZGLEtBQTdHSCxXQUE2RyxFQUE3RkcsQ0FBaEJIO0FBbEIyQixpQkFBQSxDQW9CN0I7QUFDQTs7O0FBQ0EscUJBQUEsUUFBQSxHQUFnQk8sY0FBYyxDQUE5QixRQUFBO0FBQ0EscUJBQUEsU0FBQSxHQUFpQkEsY0FBYyxDQUEvQixTQUFBO0FBQ0FQLGdCQUFBQSxRQUFRLENBQVJBLE1BQUFBLENBQWdCRyxpREFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsQ0FBQUEsa0JBQUFBLENBQUFBLFFBQUFBLEVBQUFBLE9BQUFBLEVBQTBDLEtBQTFDQSxRQUFBQSxFQUF5RCxLQUF6REEsU0FBQUEsRUFBeUUsS0FBekVBLFdBQXlFLEVBQXpFQSxFQUE2RixLQUE3R0gsV0FBNkcsRUFBN0ZHLENBQWhCSDtBQUNEO0FBQ0Y7Ozs7VUFySXdCUyxvREFBQUEsQ0FBQUEsUUFBQUEsQzs7QUF5STNCakMsUUFBQUEsWUFBWSxDQUFaQSxRQUFBQSxHQUF3QjtBQUN0Qjs7Ozs7O0FBTUFoQixVQUFBQSxRQUFRLEVBUGMsTUFBQTs7QUFRdEI7Ozs7OztBQU1BdUIsVUFBQUEsU0FBUyxFQWRhLE1BQUE7O0FBZXRCOzs7Ozs7OztBQVFBQyxVQUFBQSxZQUFZLEVBdkJVLEtBQUE7O0FBd0J0Qjs7Ozs7Ozs7QUFRQUMsVUFBQUEsa0JBQWtCLEVBaENJLElBQUE7O0FBaUN0Qjs7Ozs7O0FBTUFKLFVBQUFBLE9BQU8sRUF2Q2UsQ0FBQTs7QUF3Q3RCOzs7Ozs7QUFNQUMsVUFBQUEsT0FBTyxFQUFFO0FBOUNhLFNBQXhCTjs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxVQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLFFBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFlBQUEsbUNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsZ0JBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJDQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1DQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxtREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSwyQkFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsMkRBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbURBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLG9EQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGtDQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSw0REFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxvREFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsWUFBTWtDLGdCQUFnQixHQUFJLFlBQVk7QUFDcEMsY0FBSUMsUUFBUSxHQUFHLENBQUEsUUFBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFmLEVBQWUsQ0FBZjs7QUFDQSxlQUFLLElBQUliLENBQUMsR0FBVixDQUFBLEVBQWNBLENBQUMsR0FBR2EsUUFBUSxDQUExQixNQUFBLEVBQW1DYixDQUFuQyxFQUFBLEVBQXdDO0FBQ3RDLGdCQUFJLEdBQUEsTUFBQSxDQUFHYSxRQUFRLENBQVgsQ0FBVyxDQUFYLEVBQUEsa0JBQUEsS0FBSixNQUFBLEVBQWdEO0FBQzlDLHFCQUFPQyxNQUFNLENBQUEsR0FBQSxNQUFBLENBQUlELFFBQVEsQ0FBWixDQUFZLENBQVosRUFBYixrQkFBYSxDQUFBLENBQWI7QUFDRDtBQUNGOztBQUNELGlCQUFBLEtBQUE7QUFQRixTQUEwQixFQUExQjs7QUFVQSxZQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBLEVBQUEsRUFBQSxJQUFBLEVBQWM7QUFDN0JuRCxVQUFBQSxFQUFFLENBQUZBLElBQUFBLENBQUFBLElBQUFBLEVBQUFBLEtBQUFBLENBQUFBLEdBQUFBLEVBQUFBLE9BQUFBLENBQWlDLFVBQUEsRUFBQSxFQUFNO0FBQ3JDUCxZQUFBQSwyQ0FBQUEsR0FBQyxJQUFBLE1BQUEsQ0FBREEsRUFBQyxDQUFEQSxDQUFBQSxDQUFhMkQsSUFBSSxLQUFKQSxPQUFBQSxHQUFBQSxTQUFBQSxHQUFiM0QsZ0JBQUFBLEVBQUFBLEdBQUFBLE1BQUFBLENBQUFBLElBQUFBLEVBQUFBLGFBQUFBLENBQUFBLEVBQW9GLENBQXBGQSxFQUFvRixDQUFwRkE7QUFERk8sV0FBQUE7QUFERixTQUFBOztBQU1BLFlBQUlOLFFBQVEsR0FBRztBQUNiMkQsVUFBQUEsU0FBUyxFQUFFO0FBQ1RDLFlBQUFBLEtBQUssRUFESSxFQUFBO0FBRVRDLFlBQUFBLE1BQU0sRUFBRTtBQUZDLFdBREU7QUFLYkMsVUFBQUEsWUFBWSxFQUFFO0FBTEQsU0FBZjtBQVFBOUQsUUFBQUEsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxHQUE0QjtBQUMxQitELFVBQUFBLFlBQVksRUFBRSxTQUFBLFlBQUEsR0FBVztBQUN2Qk4sWUFBQUEsUUFBUSxDQUFDMUQsMkNBQUFBLEdBQUQsSUFBQ0EsQ0FBRCxFQUFSMEQsTUFBUSxDQUFSQTtBQUZ3QixXQUFBO0FBSTFCTyxVQUFBQSxhQUFhLEVBQUUsU0FBQSxhQUFBLEdBQVc7QUFDeEIsZ0JBQUlDLEVBQUUsR0FBR2xFLDJDQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxDQUFBQSxJQUFBQSxDQUFULE9BQVNBLENBQVQ7O0FBQ0EsZ0JBQUEsRUFBQSxFQUFRO0FBQ04wRCxjQUFBQSxRQUFRLENBQUMxRCwyQ0FBQUEsR0FBRCxJQUFDQSxDQUFELEVBQVIwRCxPQUFRLENBQVJBO0FBREYsYUFBQSxNQUdLO0FBQ0gxRCxjQUFBQSwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsa0JBQUFBO0FBQ0Q7QUFYdUIsV0FBQTtBQWExQm1FLFVBQUFBLGNBQWMsRUFBRSxTQUFBLGNBQUEsR0FBVztBQUN6QixnQkFBSUQsRUFBRSxHQUFHbEUsMkNBQUFBLEdBQUFBLElBQUFBLENBQUFBLENBQUFBLElBQUFBLENBQVQsUUFBU0EsQ0FBVDs7QUFDQSxnQkFBQSxFQUFBLEVBQVE7QUFDTjBELGNBQUFBLFFBQVEsQ0FBQzFELDJDQUFBQSxHQUFELElBQUNBLENBQUQsRUFBUjBELFFBQVEsQ0FBUkE7QUFERixhQUFBLE1BRU87QUFDTDFELGNBQUFBLDJDQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxDQUFBQSxPQUFBQSxDQUFBQSxtQkFBQUE7QUFDRDtBQW5CdUIsV0FBQTtBQXFCMUJvRSxVQUFBQSxpQkFBaUIsRUFBRSxTQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFZO0FBQzdCcEQsWUFBQUEsQ0FBQyxDQUFEQSxlQUFBQTtBQUNBLGdCQUFJcUQsU0FBUyxHQUFHckUsMkNBQUFBLEdBQUFBLElBQUFBLENBQUFBLENBQUFBLElBQUFBLENBQWhCLFVBQWdCQSxDQUFoQjs7QUFFQSxnQkFBR3FFLFNBQVMsS0FBWixFQUFBLEVBQW9CO0FBQ2xCQyxjQUFBQSxvREFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsQ0FBQUEsVUFBQUEsQ0FBa0J0RSwyQ0FBQUEsR0FBbEJzRSxJQUFrQnRFLENBQWxCc0UsRUFBQUEsU0FBQUEsRUFBc0MsWUFBVztBQUMvQ3RFLGdCQUFBQSwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsV0FBQUE7QUFERnNFLGVBQUFBO0FBREYsYUFBQSxNQUlLO0FBQ0h0RSxjQUFBQSwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsT0FBQUEsR0FBQUEsT0FBQUEsQ0FBQUEsV0FBQUE7QUFDRDtBQS9CdUIsV0FBQTtBQWlDMUJ1RSxVQUFBQSxtQkFBbUIsRUFBRSxTQUFBLG1CQUFBLEdBQVc7QUFDOUIsZ0JBQUlMLEVBQUUsR0FBR2xFLDJDQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxDQUFBQSxJQUFBQSxDQUFULGNBQVNBLENBQVQ7QUFDQUEsWUFBQUEsMkNBQUFBLEdBQUMsSUFBQSxNQUFBLENBQURBLEVBQUMsQ0FBREEsQ0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEsbUJBQUFBLEVBQWdELENBQUNBLDJDQUFBQSxHQUFqREEsSUFBaURBLENBQUQsQ0FBaERBO0FBQ0Q7QUFwQ3lCLFNBQTVCQyxDLENBdUNBOztBQUNBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGVBQUFBLEdBQXdDLFVBQUEsS0FBQSxFQUFXO0FBQ2pEdUUsVUFBQUEsS0FBSyxDQUFMQSxHQUFBQSxDQUFBQSxrQkFBQUEsRUFBOEJ2RSxRQUFRLENBQVJBLFNBQUFBLENBQUFBLEtBQUFBLENBQTlCdUUsWUFBQUE7QUFDQUEsVUFBQUEsS0FBSyxDQUFMQSxFQUFBQSxDQUFBQSxrQkFBQUEsRUFBQUEsYUFBQUEsRUFBNEN2RSxRQUFRLENBQVJBLFNBQUFBLENBQUFBLEtBQUFBLENBQTVDdUUsWUFBQUE7QUFGRnZFLFNBQUFBLEMsQ0FLQTtBQUNBOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxnQkFBQUEsR0FBeUMsVUFBQSxLQUFBLEVBQVc7QUFDbER1RSxVQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLGtCQUFBQSxFQUE4QnZFLFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUJ1RSxhQUFBQTtBQUNBQSxVQUFBQSxLQUFLLENBQUxBLEVBQUFBLENBQUFBLGtCQUFBQSxFQUFBQSxjQUFBQSxFQUE2Q3ZFLFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBN0N1RSxhQUFBQTtBQUZGdkUsU0FBQUEsQyxDQUtBOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUEsR0FBMEMsVUFBQSxLQUFBLEVBQVc7QUFDbkR1RSxVQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLGtCQUFBQSxFQUE4QnZFLFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUJ1RSxjQUFBQTtBQUNBQSxVQUFBQSxLQUFLLENBQUxBLEVBQUFBLENBQUFBLGtCQUFBQSxFQUFBQSxlQUFBQSxFQUE4Q3ZFLFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUN1RSxjQUFBQTtBQUZGdkUsU0FBQUEsQyxDQUtBOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxvQkFBQUEsR0FBNkMsVUFBQSxLQUFBLEVBQVc7QUFDdER1RSxVQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLGtCQUFBQSxFQUE4QnZFLFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUJ1RSxpQkFBQUE7QUFDQUEsVUFBQUEsS0FBSyxDQUFMQSxFQUFBQSxDQUFBQSxrQkFBQUEsRUFBQUEsbUNBQUFBLEVBQWtFdkUsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUFsRXVFLGlCQUFBQTtBQUZGdkUsU0FBQUEsQyxDQUtBOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxzQkFBQUEsR0FBK0MsVUFBQSxLQUFBLEVBQVc7QUFDeER1RSxVQUFBQSxLQUFLLENBQUxBLEdBQUFBLENBQUFBLGtDQUFBQSxFQUE4Q3ZFLFFBQVEsQ0FBUkEsU0FBQUEsQ0FBQUEsS0FBQUEsQ0FBOUN1RSxtQkFBQUE7QUFDQUEsVUFBQUEsS0FBSyxDQUFMQSxFQUFBQSxDQUFBQSxrQ0FBQUEsRUFBQUEscUJBQUFBLEVBQW9FdkUsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUFwRXVFLG1CQUFBQTtBQUZGdkUsU0FBQUEsQyxDQU9BOzs7QUFDQUEsUUFBQUEsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxNQUFBQSxHQUE2QjtBQUMzQndFLFVBQUFBLGNBQWMsRUFBRSxTQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQWlCO0FBQy9CLGdCQUFHLENBQUgsZ0JBQUEsRUFBcUI7QUFBQztBQUNwQkMsY0FBQUEsTUFBTSxDQUFOQSxJQUFBQSxDQUFZLFlBQVU7QUFDcEIxRSxnQkFBQUEsMkNBQUFBLEdBQUFBLElBQUFBLENBQUFBLENBQUFBLGNBQUFBLENBQUFBLHFCQUFBQTtBQURGMEUsZUFBQUE7QUFGNkIsYUFBQSxDQU0vQjs7O0FBQ0FBLFlBQUFBLE1BQU0sQ0FBTkEsSUFBQUEsQ0FBQUEsYUFBQUEsRUFBQUEsUUFBQUE7QUFSeUIsV0FBQTtBQVUzQkMsVUFBQUEsY0FBYyxFQUFFLFNBQUEsY0FBQSxDQUFBLE1BQUEsRUFBaUI7QUFDL0IsZ0JBQUcsQ0FBSCxnQkFBQSxFQUFxQjtBQUFDO0FBQ3BCRCxjQUFBQSxNQUFNLENBQU5BLElBQUFBLENBQVksWUFBVTtBQUNwQjFFLGdCQUFBQSwyQ0FBQUEsR0FBQUEsSUFBQUEsQ0FBQUEsQ0FBQUEsY0FBQUEsQ0FBQUEscUJBQUFBO0FBREYwRSxlQUFBQTtBQUY2QixhQUFBLENBTS9COzs7QUFDQUEsWUFBQUEsTUFBTSxDQUFOQSxJQUFBQSxDQUFBQSxhQUFBQSxFQUFBQSxRQUFBQTtBQWpCeUIsV0FBQTtBQW1CM0JFLFVBQUFBLGVBQWUsRUFBRSxTQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsUUFBQSxFQUFxQjtBQUNwQyxnQkFBSUMsTUFBTSxHQUFHN0QsQ0FBQyxDQUFEQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUFBQSxHQUFBQSxFQUFiLENBQWFBLENBQWI7QUFDQSxnQkFBSThELE9BQU8sR0FBRzlFLDJDQUFBQSxHQUFDLFNBQUEsTUFBQSxDQUFBLE1BQUEsRUFBREEsR0FBQyxDQUFEQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxvQkFBQUEsTUFBQUEsQ0FBQUEsUUFBQUEsRUFBZCxLQUFjQSxDQUFBQSxDQUFkO0FBRUE4RSxZQUFBQSxPQUFPLENBQVBBLElBQUFBLENBQWEsWUFBVTtBQUNyQixrQkFBSXRFLEtBQUssR0FBR1IsMkNBQUFBLEdBQVosSUFBWUEsQ0FBWjs7QUFDQVEsY0FBQUEsS0FBSyxDQUFMQSxjQUFBQSxDQUFBQSxrQkFBQUEsRUFBeUMsQ0FBekNBLEtBQXlDLENBQXpDQTtBQUZGc0UsYUFBQUE7QUF2QnlCLFdBQUEsQ0E4QjdCOztBQTlCNkIsU0FBN0I3RTs7QUErQkFBLFFBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBLEdBQTJDLFVBQUEsVUFBQSxFQUFxQjtBQUM5RCxjQUFJOEUsU0FBUyxHQUFHL0UsMkNBQUFBLEdBQWhCLGlCQUFnQkEsQ0FBaEI7QUFBQSxjQUNJZ0YsU0FBUyxHQUFHLENBQUEsVUFBQSxFQUFBLFNBQUEsRUFEaEIsUUFDZ0IsQ0FEaEI7O0FBR0EsY0FBQSxVQUFBLEVBQWM7QUFDWixnQkFBRyxPQUFBLFVBQUEsS0FBSCxRQUFBLEVBQWtDO0FBQ2hDQSxjQUFBQSxTQUFTLENBQVRBLElBQUFBLENBQUFBLFVBQUFBO0FBREYsYUFBQSxNQUVNLElBQUcsT0FBQSxDQUFBLFVBQUEsQ0FBQSxLQUFBLFFBQUEsSUFBa0MsT0FBT0MsVUFBVSxDQUFqQixDQUFpQixDQUFqQixLQUFyQyxRQUFBLEVBQXVFO0FBQzNFRCxjQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBVEEsTUFBQUEsQ0FBWkEsVUFBWUEsQ0FBWkE7QUFESSxhQUFBLE1BRUQ7QUFDSEUsY0FBQUEsT0FBTyxDQUFQQSxLQUFBQSxDQUFBQSw4QkFBQUE7QUFDRDtBQUNGOztBQUNELGNBQUdILFNBQVMsQ0FBWixNQUFBLEVBQW9CO0FBQ2xCLGdCQUFJSSxTQUFTLEdBQUcsU0FBUyxDQUFULEdBQUEsQ0FBYyxVQUFBLElBQUEsRUFBVTtBQUN0QyxxQkFBQSxjQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFEYyxhQUFBLEVBQUEsSUFBQSxDQUFoQixHQUFnQixDQUFoQjtBQUlBbkYsWUFBQUEsMkNBQUFBLEdBQUFBLE1BQUFBLENBQUFBLENBQUFBLEdBQUFBLENBQUFBLFNBQUFBLEVBQUFBLEVBQUFBLENBQUFBLFNBQUFBLEVBQXVDQyxRQUFRLENBQVJBLFNBQUFBLENBQUFBLE1BQUFBLENBQXZDRCxlQUFBQTtBQUNEO0FBbkJIQyxTQUFBQTs7QUFzQkEsaUJBQUEsc0JBQUEsQ0FBQSxRQUFBLEVBQUEsT0FBQSxFQUFBLFFBQUEsRUFBNkQ7QUFDM0QsY0FBQSxLQUFBO0FBQUEsY0FBV21GLElBQUksR0FBR0MsS0FBSyxDQUFMQSxTQUFBQSxDQUFBQSxLQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxTQUFBQSxFQUFsQixDQUFrQkEsQ0FBbEI7QUFDQXJGLFVBQUFBLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxPQUFBQSxFQUFBQSxFQUFBQSxDQUFBQSxPQUFBQSxFQUFtQyxVQUFBLENBQUEsRUFBWTtBQUM3QyxnQkFBQSxLQUFBLEVBQVc7QUFBRVUsY0FBQUEsWUFBWSxDQUFaQSxLQUFZLENBQVpBO0FBQXNCOztBQUNuQzRFLFlBQUFBLEtBQUssR0FBRzNFLFVBQVUsQ0FBQyxZQUFVO0FBQzNCNEUsY0FBQUEsUUFBUSxDQUFSQSxLQUFBQSxDQUFBQSxJQUFBQSxFQUFBQSxJQUFBQTtBQURnQixhQUFBLEVBRWZDLFFBQVEsSUFKa0MsRUFFM0IsQ0FBbEJGLENBRjZDLENBSTFCO0FBSnJCdEYsV0FBQUE7QUFNRDs7QUFFREMsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUEsR0FBMEMsVUFBQSxRQUFBLEVBQWtCO0FBQzFELGNBQUl5RSxNQUFNLEdBQUcxRSwyQ0FBQUEsR0FBYixlQUFhQSxDQUFiOztBQUNBLGNBQUcwRSxNQUFNLENBQVQsTUFBQSxFQUFpQjtBQUNmZSxZQUFBQSxzQkFBc0IsQ0FBQSxRQUFBLEVBQUEsbUJBQUEsRUFBZ0N4RixRQUFRLENBQVJBLFNBQUFBLENBQUFBLE1BQUFBLENBQWhDLGNBQUEsRUFBdEJ3RixNQUFzQixDQUF0QkE7QUFDRDtBQUpIeEYsU0FBQUE7O0FBT0FBLFFBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsaUJBQUFBLEdBQTBDLFVBQUEsUUFBQSxFQUFrQjtBQUMxRCxjQUFJeUUsTUFBTSxHQUFHMUUsMkNBQUFBLEdBQWIsZUFBYUEsQ0FBYjs7QUFDQSxjQUFHMEUsTUFBTSxDQUFULE1BQUEsRUFBaUI7QUFDZmUsWUFBQUEsc0JBQXNCLENBQUEsUUFBQSxFQUFBLG1CQUFBLEVBQWdDeEYsUUFBUSxDQUFSQSxTQUFBQSxDQUFBQSxNQUFBQSxDQUFoQyxjQUFBLEVBQXRCd0YsTUFBc0IsQ0FBdEJBO0FBQ0Q7QUFKSHhGLFNBQUFBOztBQU9BQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLHlCQUFBQSxHQUFrRCxVQUFBLEtBQUEsRUFBZ0I7QUFDaEUsY0FBRyxDQUFILGdCQUFBLEVBQXFCO0FBQUUsbUJBQUEsS0FBQTtBQUFlOztBQUN0QyxjQUFJeUUsTUFBTSxHQUFHRixLQUFLLENBQUxBLElBQUFBLENBRm1ELDZDQUVuREEsQ0FBYixDQUZnRSxDQUloRTs7QUFDQSxjQUFJa0IseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFBLG1CQUFBLEVBQStCO0FBQzdELGdCQUFJN0UsT0FBTyxHQUFHYiwyQ0FBQUEsR0FBRTJGLG1CQUFtQixDQUFuQkEsQ0FBbUIsQ0FBbkJBLENBRDZDLE1BQy9DM0YsQ0FBZCxDQUQ2RCxDQUc3RDs7QUFDQSxvQkFBUTJGLG1CQUFtQixDQUFuQkEsQ0FBbUIsQ0FBbkJBLENBQVIsSUFBQTtBQUNFLG1CQUFBLFlBQUE7QUFDRSxvQkFBSTlFLE9BQU8sQ0FBUEEsSUFBQUEsQ0FBQUEsYUFBQUEsTUFBQUEsUUFBQUEsSUFBNEM4RSxtQkFBbUIsQ0FBbkJBLENBQW1CLENBQW5CQSxDQUFBQSxhQUFBQSxLQUFoRCxhQUFBLEVBQXdHO0FBQ3RHOUUsa0JBQUFBLE9BQU8sQ0FBUEEsY0FBQUEsQ0FBQUEscUJBQUFBLEVBQThDLENBQUEsT0FBQSxFQUFVNEMsTUFBTSxDQUE5RDVDLFdBQThDLENBQTlDQTtBQUNEOztBQUNELG9CQUFJQSxPQUFPLENBQVBBLElBQUFBLENBQUFBLGFBQUFBLE1BQUFBLFFBQUFBLElBQTRDOEUsbUJBQW1CLENBQW5CQSxDQUFtQixDQUFuQkEsQ0FBQUEsYUFBQUEsS0FBaEQsYUFBQSxFQUF3RztBQUN0RzlFLGtCQUFBQSxPQUFPLENBQVBBLGNBQUFBLENBQUFBLHFCQUFBQSxFQUE4QyxDQUE5Q0EsT0FBOEMsQ0FBOUNBO0FBQ0E7O0FBQ0Ysb0JBQUk4RSxtQkFBbUIsQ0FBbkJBLENBQW1CLENBQW5CQSxDQUFBQSxhQUFBQSxLQUFKLE9BQUEsRUFBc0Q7QUFDcEQ5RSxrQkFBQUEsT0FBTyxDQUFQQSxPQUFBQSxDQUFBQSxlQUFBQSxFQUFBQSxJQUFBQSxDQUFBQSxhQUFBQSxFQUFBQSxRQUFBQTtBQUNBQSxrQkFBQUEsT0FBTyxDQUFQQSxPQUFBQSxDQUFBQSxlQUFBQSxFQUFBQSxjQUFBQSxDQUFBQSxxQkFBQUEsRUFBdUUsQ0FBQ0EsT0FBTyxDQUFQQSxPQUFBQSxDQUF4RUEsZUFBd0VBLENBQUQsQ0FBdkVBO0FBQ0Q7O0FBQ0Q7O0FBRUYsbUJBQUEsV0FBQTtBQUNFQSxnQkFBQUEsT0FBTyxDQUFQQSxPQUFBQSxDQUFBQSxlQUFBQSxFQUFBQSxJQUFBQSxDQUFBQSxhQUFBQSxFQUFBQSxRQUFBQTtBQUNBQSxnQkFBQUEsT0FBTyxDQUFQQSxPQUFBQSxDQUFBQSxlQUFBQSxFQUFBQSxjQUFBQSxDQUFBQSxxQkFBQUEsRUFBdUUsQ0FBQ0EsT0FBTyxDQUFQQSxPQUFBQSxDQUF4RUEsZUFBd0VBLENBQUQsQ0FBdkVBO0FBQ0E7O0FBRUY7QUFDRSx1QkFBQSxLQUFBO0FBQ0Y7QUFyQkY7QUFKRixXQUFBOztBQTZCQSxjQUFJNkQsTUFBTSxDQUFWLE1BQUEsRUFBbUI7QUFDakI7QUFDQSxpQkFBSyxJQUFJL0IsQ0FBQyxHQUFWLENBQUEsRUFBZ0JBLENBQUMsSUFBSStCLE1BQU0sQ0FBTkEsTUFBQUEsR0FBckIsQ0FBQSxFQUF3Qy9CLENBQXhDLEVBQUEsRUFBNkM7QUFDM0Msa0JBQUlpRCxlQUFlLEdBQUcsSUFBQSxnQkFBQSxDQUF0Qix5QkFBc0IsQ0FBdEI7QUFDQUEsY0FBQUEsZUFBZSxDQUFmQSxPQUFBQSxDQUF3QmxCLE1BQU0sQ0FBOUJrQixDQUE4QixDQUE5QkEsRUFBbUM7QUFBRUMsZ0JBQUFBLFVBQVUsRUFBWixJQUFBO0FBQW9CQyxnQkFBQUEsU0FBUyxFQUE3QixJQUFBO0FBQXFDQyxnQkFBQUEsYUFBYSxFQUFsRCxLQUFBO0FBQTJEQyxnQkFBQUEsT0FBTyxFQUFsRSxJQUFBO0FBQTBFQyxnQkFBQUEsZUFBZSxFQUFFLENBQUEsYUFBQSxFQUFBLE9BQUE7QUFBM0YsZUFBbkNMO0FBQ0Q7QUFDRjtBQXhDSDNGLFNBQUFBOztBQTJDQUEsUUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUEsR0FBMkMsWUFBVztBQUNwRCxjQUFJaUcsU0FBUyxHQUFHbEcsMkNBQUFBLEdBQWhCLFFBQWdCQSxDQUFoQjtBQUVBQyxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGVBQUFBLENBQUFBLFNBQUFBO0FBQ0FBLFVBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsZ0JBQUFBLENBQUFBLFNBQUFBO0FBQ0FBLFVBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsaUJBQUFBLENBQUFBLFNBQUFBO0FBQ0FBLFVBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsb0JBQUFBLENBQUFBLFNBQUFBO0FBQ0FBLFVBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsc0JBQUFBLENBQUFBLFNBQUFBO0FBUEZBLFNBQUFBOztBQVdBQSxRQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQSxHQUEyQyxZQUFXO0FBQ3BELGNBQUlpRyxTQUFTLEdBQUdsRywyQ0FBQUEsR0FBaEIsUUFBZ0JBLENBQWhCO0FBQ0FDLFVBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEseUJBQUFBLENBQUFBLFNBQUFBO0FBQ0FBLFVBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsaUJBQUFBO0FBQ0FBLFVBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsaUJBQUFBO0FBQ0FBLFVBQUFBLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBQUEsa0JBQUFBO0FBTEZBLFNBQUFBOztBQVNBQSxRQUFBQSxRQUFRLENBQVJBLElBQUFBLEdBQWdCLFVBQUEsQ0FBQSxFQUFBLFVBQUEsRUFBeUI7QUFDdkNrRyxVQUFBQSxNQUFBQSxDQUFBQSxtREFBQUEsQ0FBQUEsUUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBT25HLENBQUMsQ0FBRixNQUFFLENBQVJtRyxFQUFrQixZQUFZO0FBQzVCLGdCQUFJbkcsQ0FBQyxDQUFEQSxtQkFBQUEsS0FBSixJQUFBLEVBQW9DO0FBQ2xDQyxjQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQTtBQUNBQSxjQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQTtBQUNBRCxjQUFBQSxDQUFDLENBQURBLG1CQUFBQSxHQUFBQSxJQUFBQTtBQUNEO0FBTEhtRyxXQUFBQTs7QUFRQSxjQUFBLFVBQUEsRUFBZTtBQUNidkcsWUFBQUEsVUFBVSxDQUFWQSxRQUFBQSxHQURhLFFBQ2JBLENBRGEsQ0FFYjs7QUFDQUEsWUFBQUEsVUFBVSxDQUFWQSxRQUFBQSxHQUFzQkssUUFBUSxDQUFSQSxZQUFBQSxDQUF0Qkwsa0JBQUFBO0FBQ0Q7QUFiSEssU0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUEEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtDQUFBOzs7Ozs7QVBVQTtDQVZBIiwiZmlsZSI6ImZvdW5kYXRpb24vZm91bmRhdGlvbi5kcm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC50b3VjaFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiLCBcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwianF1ZXJ5XCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwuYm94XCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwudG91Y2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5kcm9wZG93blwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCJqcXVlcnlcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC50b3VjaFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uZHJvcGRvd25cIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wialF1ZXJ5XCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwuYm94XCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubW90aW9uXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwudG91Y2hcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9ib3hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX21vdGlvbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfdG91Y2hfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLmRyb3Bkb3duJztcbkZvdW5kYXRpb24ucGx1Z2luKERyb3Bkb3duLCAnRHJvcGRvd24nKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgRHJvcGRvd24gfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMsIGlnbm9yZU1vdXNlZGlzYXBwZWFyIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgUG9zaXRpb25hYmxlIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnBvc2l0aW9uYWJsZSc7XG5cbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuaW1wb3J0IHsgVG91Y2ggfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC50b3VjaCdcblxuLyoqXG4gKiBEcm9wZG93biBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24uZHJvcGRvd25cbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwuYm94XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzXG4gKi9cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgUG9zaXRpb25hYmxlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYSBkcm9wZG93bi5cbiAgICogQGNsYXNzXG4gICAqIEBuYW1lIERyb3Bkb3duXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBtYWtlIGludG8gYSBkcm9wZG93bi5cbiAgICogICAgICAgIE9iamVjdCBzaG91bGQgYmUgb2YgdGhlIGRyb3Bkb3duIHBhbmVsLCByYXRoZXIgdGhhbiBpdHMgYW5jaG9yLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEcm9wZG93bi5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ0Ryb3Bkb3duJzsgLy8gaWU5IGJhY2sgY29tcGF0XG5cbiAgICAvLyBUcmlnZ2VycyBpbml0IGlzIGlkZW1wb3RlbnQsIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgaXQgaXMgaW5pdGlhbGl6ZWRcbiAgICBUcmlnZ2Vycy5pbml0KCQpO1xuXG4gICAgdGhpcy5faW5pdCgpO1xuXG4gICAgS2V5Ym9hcmQucmVnaXN0ZXIoJ0Ryb3Bkb3duJywge1xuICAgICAgJ0VOVEVSJzogJ3RvZ2dsZScsXG4gICAgICAnU1BBQ0UnOiAndG9nZ2xlJyxcbiAgICAgICdFU0NBUEUnOiAnY2xvc2UnXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHBsdWdpbiBieSBzZXR0aW5nL2NoZWNraW5nIG9wdGlvbnMgYW5kIGF0dHJpYnV0ZXMsIGFkZGluZyBoZWxwZXIgdmFyaWFibGVzLCBhbmQgc2F2aW5nIHRoZSBhbmNob3IuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgdmFyICRpZCA9IHRoaXMuJGVsZW1lbnQuYXR0cignaWQnKTtcblxuICAgIHRoaXMuJGFuY2hvcnMgPSAkKGBbZGF0YS10b2dnbGU9XCIkeyRpZH1cIl1gKS5sZW5ndGggPyAkKGBbZGF0YS10b2dnbGU9XCIkeyRpZH1cIl1gKSA6ICQoYFtkYXRhLW9wZW49XCIkeyRpZH1cIl1gKTtcbiAgICB0aGlzLiRhbmNob3JzLmF0dHIoe1xuICAgICAgJ2FyaWEtY29udHJvbHMnOiAkaWQsXG4gICAgICAnZGF0YS1pcy1mb2N1cyc6IGZhbHNlLFxuICAgICAgJ2RhdGEteWV0aS1ib3gnOiAkaWQsXG4gICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAnYXJpYS1leHBhbmRlZCc6IGZhbHNlXG4gICAgfSk7XG5cbiAgICB0aGlzLl9zZXRDdXJyZW50QW5jaG9yKHRoaXMuJGFuY2hvcnMuZmlyc3QoKSk7XG5cbiAgICBpZih0aGlzLm9wdGlvbnMucGFyZW50Q2xhc3Mpe1xuICAgICAgdGhpcy4kcGFyZW50ID0gdGhpcy4kZWxlbWVudC5wYXJlbnRzKCcuJyArIHRoaXMub3B0aW9ucy5wYXJlbnRDbGFzcyk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLiRwYXJlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNldCBbYXJpYS1sYWJlbGxlZGJ5XSBvbiB0aGUgRHJvcGRvd24gaWYgaXQgaXMgbm90IHNldFxuICAgIGlmICh0eXBlb2YgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIEdldCB0aGUgYW5jaG9yIElEIG9yIGNyZWF0ZSBvbmVcbiAgICAgIGlmICh0eXBlb2YgdGhpcy4kY3VycmVudEFuY2hvci5hdHRyKCdpZCcpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLiRjdXJyZW50QW5jaG9yLmF0dHIoJ2lkJywgR2V0WW9EaWdpdHMoNiwgJ2RkLWFuY2hvcicpKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy4kY3VycmVudEFuY2hvci5hdHRyKCdpZCcpKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgJ2RhdGEteWV0aS1ib3gnOiAkaWQsXG4gICAgICAnZGF0YS1yZXNpemUnOiAkaWQsXG4gICAgfSk7XG5cbiAgICBzdXBlci5faW5pdCgpO1xuICAgIHRoaXMuX2V2ZW50cygpO1xuICB9XG5cbiAgX2dldERlZmF1bHRQb3NpdGlvbigpIHtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IGNsYXNzbmFtZXNcbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLiRlbGVtZW50WzBdLmNsYXNzTmFtZS5tYXRjaCgvKHRvcHxsZWZ0fHJpZ2h0fGJvdHRvbSkvZyk7XG4gICAgaWYocG9zaXRpb24pIHtcbiAgICAgIHJldHVybiBwb3NpdGlvblswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdib3R0b20nXG4gICAgfVxuICB9XG5cbiAgX2dldERlZmF1bHRBbGlnbm1lbnQoKSB7XG4gICAgLy8gaGFuZGxlIGxlZ2FjeSBmbG9hdCBhcHByb2FjaFxuICAgIHZhciBob3Jpem9udGFsUG9zaXRpb24gPSAvZmxvYXQtKFxcUyspLy5leGVjKHRoaXMuJGN1cnJlbnRBbmNob3IuYXR0cignY2xhc3MnKSk7XG4gICAgaWYoaG9yaXpvbnRhbFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gaG9yaXpvbnRhbFBvc2l0aW9uWzFdO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5fZ2V0RGVmYXVsdEFsaWdubWVudCgpO1xuICB9XG5cblxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwb3NpdGlvbiBhbmQgb3JpZW50YXRpb24gb2YgdGhlIGRyb3Bkb3duIHBhbmUsIGNoZWNrcyBmb3IgY29sbGlzaW9ucyBpZiBhbGxvdy1vdmVybGFwIGlzIG5vdCB0cnVlLlxuICAgKiBSZWN1cnNpdmVseSBjYWxscyBpdHNlbGYgaWYgYSBjb2xsaXNpb24gaXMgZGV0ZWN0ZWQsIHdpdGggYSBuZXcgcG9zaXRpb24gY2xhc3MuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldFBvc2l0aW9uKCkge1xuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoYGhhcy1wb3NpdGlvbi0ke3RoaXMucG9zaXRpb259IGhhcy1hbGlnbm1lbnQtJHt0aGlzLmFsaWdubWVudH1gKTtcbiAgICBzdXBlci5fc2V0UG9zaXRpb24odGhpcy4kY3VycmVudEFuY2hvciwgdGhpcy4kZWxlbWVudCwgdGhpcy4kcGFyZW50KTtcbiAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKGBoYXMtcG9zaXRpb24tJHt0aGlzLnBvc2l0aW9ufSBoYXMtYWxpZ25tZW50LSR7dGhpcy5hbGlnbm1lbnR9YCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBpdCBhIGN1cnJlbnQgYW5jaG9yLlxuICAgKiBDdXJyZW50IGFuY2hvciBhcyB0aGUgcmVmZXJlbmNlIGZvciB0aGUgcG9zaXRpb24gb2YgRHJvcGRvd24gcGFuZXMuXG4gICAqIEBwYXJhbSB7SFRNTH0gZWwgLSBET00gZWxlbWVudCBvZiB0aGUgYW5jaG9yLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRDdXJyZW50QW5jaG9yKGVsKSB7XG4gICAgdGhpcy4kY3VycmVudEFuY2hvciA9ICQoZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBlbGVtZW50IHV0aWxpemluZyB0aGUgdHJpZ2dlcnMgdXRpbGl0eSBsaWJyYXJ5LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ldmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLiRlbGVtZW50Lm9uKHtcbiAgICAgICdvcGVuLnpmLnRyaWdnZXInOiB0aGlzLm9wZW4uYmluZCh0aGlzKSxcbiAgICAgICdjbG9zZS56Zi50cmlnZ2VyJzogdGhpcy5jbG9zZS5iaW5kKHRoaXMpLFxuICAgICAgJ3RvZ2dsZS56Zi50cmlnZ2VyJzogdGhpcy50b2dnbGUuYmluZCh0aGlzKSxcbiAgICAgICdyZXNpemVtZS56Zi50cmlnZ2VyJzogdGhpcy5fc2V0UG9zaXRpb24uYmluZCh0aGlzKVxuICAgIH0pO1xuXG4gICAgdGhpcy4kYW5jaG9ycy5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInKVxuICAgICAgLm9uKCdjbGljay56Zi50cmlnZ2VyJywgZnVuY3Rpb24oKSB7IF90aGlzLl9zZXRDdXJyZW50QW5jaG9yKHRoaXMpOyB9KTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5ob3Zlcil7XG4gICAgICB0aGlzLiRhbmNob3JzLm9mZignbW91c2VlbnRlci56Zi5kcm9wZG93biBtb3VzZWxlYXZlLnpmLmRyb3Bkb3duJylcbiAgICAgIC5vbignbW91c2VlbnRlci56Zi5kcm9wZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgICAgIF90aGlzLl9zZXRDdXJyZW50QW5jaG9yKHRoaXMpO1xuXG4gICAgICAgIHZhciBib2R5RGF0YSA9ICQoJ2JvZHknKS5kYXRhKCk7XG4gICAgICAgIGlmKHR5cGVvZihib2R5RGF0YS53aGF0aW5wdXQpID09PSAndW5kZWZpbmVkJyB8fCBib2R5RGF0YS53aGF0aW5wdXQgPT09ICdtb3VzZScpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMudGltZW91dCk7XG4gICAgICAgICAgX3RoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIF90aGlzLm9wZW4oKTtcbiAgICAgICAgICAgIF90aGlzLiRhbmNob3JzLmRhdGEoJ2hvdmVyJywgdHJ1ZSk7XG4gICAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5ob3ZlckRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgfSkub24oJ21vdXNlbGVhdmUuemYuZHJvcGRvd24nLCBpZ25vcmVNb3VzZWRpc2FwcGVhcihmdW5jdGlvbigpe1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMudGltZW91dCk7XG4gICAgICAgIF90aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICBfdGhpcy4kYW5jaG9ycy5kYXRhKCdob3ZlcicsIGZhbHNlKTtcbiAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5ob3ZlckRlbGF5KTtcbiAgICAgIH0pKTtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5ob3ZlclBhbmUpe1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZignbW91c2VlbnRlci56Zi5kcm9wZG93biBtb3VzZWxlYXZlLnpmLmRyb3Bkb3duJylcbiAgICAgICAgICAgIC5vbignbW91c2VlbnRlci56Zi5kcm9wZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIH0pLm9uKCdtb3VzZWxlYXZlLnpmLmRyb3Bkb3duJywgaWdub3JlTW91c2VkaXNhcHBlYXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgICBfdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGFuY2hvcnMuZGF0YSgnaG92ZXInLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH0sIF90aGlzLm9wdGlvbnMuaG92ZXJEZWxheSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuJGFuY2hvcnMuYWRkKHRoaXMuJGVsZW1lbnQpLm9uKCdrZXlkb3duLnpmLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICB2YXIgJHRhcmdldCA9ICQodGhpcyksXG4gICAgICAgIHZpc2libGVGb2N1c2FibGVFbGVtZW50cyA9IEtleWJvYXJkLmZpbmRGb2N1c2FibGUoX3RoaXMuJGVsZW1lbnQpO1xuXG4gICAgICBLZXlib2FyZC5oYW5kbGVLZXkoZSwgJ0Ryb3Bkb3duJywge1xuICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJHRhcmdldC5pcyhfdGhpcy4kYW5jaG9ycykgJiYgISR0YXJnZXQuaXMoJ2lucHV0LCB0ZXh0YXJlYScpKSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuKCk7XG4gICAgICAgICAgICBfdGhpcy4kZWxlbWVudC5hdHRyKCd0YWJpbmRleCcsIC0xKS5mb2N1cygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgICAgX3RoaXMuJGFuY2hvcnMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBoYW5kbGVyIHRvIHRoZSBib2R5IHRvIGNsb3NlIGFueSBkcm9wZG93bnMgb24gYSBjbGljay5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkQm9keUhhbmRsZXIoKSB7XG4gICAgIHZhciAkYm9keSA9ICQoZG9jdW1lbnQuYm9keSkubm90KHRoaXMuJGVsZW1lbnQpLFxuICAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAkYm9keS5vZmYoJ2NsaWNrLnpmLmRyb3Bkb3duJylcbiAgICAgICAgICAub24oJ2NsaWNrLnpmLmRyb3Bkb3duJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZihfdGhpcy4kYW5jaG9ycy5pcyhlLnRhcmdldCkgfHwgX3RoaXMuJGFuY2hvcnMuZmluZChlLnRhcmdldCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKF90aGlzLiRlbGVtZW50LmlzKGUudGFyZ2V0KSB8fCBfdGhpcy4kZWxlbWVudC5maW5kKGUudGFyZ2V0KS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICRib2R5Lm9mZignY2xpY2suemYuZHJvcGRvd24nKTtcbiAgICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgZHJvcGRvd24gcGFuZSwgYW5kIGZpcmVzIGEgYnViYmxpbmcgZXZlbnQgdG8gY2xvc2Ugb3RoZXIgZHJvcGRvd25zLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQGZpcmVzIERyb3Bkb3duI2Nsb3NlbWVcbiAgICogQGZpcmVzIERyb3Bkb3duI3Nob3dcbiAgICovXG4gIG9wZW4oKSB7XG4gICAgLy8gdmFyIF90aGlzID0gdGhpcztcbiAgICAvKipcbiAgICAgKiBGaXJlcyB0byBjbG9zZSBvdGhlciBvcGVuIGRyb3Bkb3ducywgdHlwaWNhbGx5IHdoZW4gZHJvcGRvd24gaXMgb3BlbmluZ1xuICAgICAqIEBldmVudCBEcm9wZG93biNjbG9zZW1lXG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjbG9zZW1lLnpmLmRyb3Bkb3duJywgdGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpKTtcbiAgICB0aGlzLiRhbmNob3JzLmFkZENsYXNzKCdob3ZlcicpXG4gICAgICAgIC5hdHRyKHsnYXJpYS1leHBhbmRlZCc6IHRydWV9KTtcbiAgICAvLyB0aGlzLiRlbGVtZW50Lyouc2hvdygpKi87XG5cbiAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdpcy1vcGVuaW5nJyk7XG4gICAgdGhpcy5fc2V0UG9zaXRpb24oKTtcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdpcy1vcGVuaW5nJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAuYXR0cih7J2FyaWEtaGlkZGVuJzogZmFsc2V9KTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5hdXRvRm9jdXMpe1xuICAgICAgdmFyICRmb2N1c2FibGUgPSBLZXlib2FyZC5maW5kRm9jdXNhYmxlKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgaWYoJGZvY3VzYWJsZS5sZW5ndGgpe1xuICAgICAgICAkZm9jdXNhYmxlLmVxKDApLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5vcHRpb25zLmNsb3NlT25DbGljayl7IHRoaXMuX2FkZEJvZHlIYW5kbGVyKCk7IH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhcEZvY3VzKSB7XG4gICAgICBLZXlib2FyZC50cmFwRm9jdXModGhpcy4kZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgb25jZSB0aGUgZHJvcGRvd24gaXMgdmlzaWJsZS5cbiAgICAgKiBAZXZlbnQgRHJvcGRvd24jc2hvd1xuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignc2hvdy56Zi5kcm9wZG93bicsIFt0aGlzLiRlbGVtZW50XSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBvcGVuIGRyb3Bkb3duIHBhbmUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAZmlyZXMgRHJvcGRvd24jaGlkZVxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgaWYoIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAuYXR0cih7J2FyaWEtaGlkZGVuJzogdHJ1ZX0pO1xuXG4gICAgdGhpcy4kYW5jaG9ycy5yZW1vdmVDbGFzcygnaG92ZXInKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIG9uY2UgdGhlIGRyb3Bkb3duIGlzIG5vIGxvbmdlciB2aXNpYmxlLlxuICAgICAqIEBldmVudCBEcm9wZG93biNoaWRlXG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdoaWRlLnpmLmRyb3Bkb3duJywgW3RoaXMuJGVsZW1lbnRdKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhcEZvY3VzKSB7XG4gICAgICBLZXlib2FyZC5yZWxlYXNlRm9jdXModGhpcy4kZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGRyb3Bkb3duIHBhbmUncyB2aXNpYmlsaXR5LlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIHRvZ2dsZSgpIHtcbiAgICBpZih0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpe1xuICAgICAgaWYodGhpcy4kYW5jaG9ycy5kYXRhKCdob3ZlcicpKSByZXR1cm47XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGRyb3Bkb3duLlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuemYudHJpZ2dlcicpLmhpZGUoKTtcbiAgICB0aGlzLiRhbmNob3JzLm9mZignLnpmLmRyb3Bkb3duJyk7XG4gICAgJChkb2N1bWVudC5ib2R5KS5vZmYoJ2NsaWNrLnpmLmRyb3Bkb3duJyk7XG5cbiAgfVxufVxuXG5Ecm9wZG93bi5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIENsYXNzIHRoYXQgZGVzaWduYXRlcyBib3VuZGluZyBjb250YWluZXIgb2YgRHJvcGRvd24gKGRlZmF1bHQ6IHdpbmRvdylcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKi9cbiAgcGFyZW50Q2xhc3M6IG51bGwsXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdGltZSB0byBkZWxheSBvcGVuaW5nIGEgc3VibWVudSBvbiBob3ZlciBldmVudC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAyNTBcbiAgICovXG4gIGhvdmVyRGVsYXk6IDI1MCxcbiAgLyoqXG4gICAqIEFsbG93IHN1Ym1lbnVzIHRvIG9wZW4gb24gaG92ZXIgZXZlbnRzXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBob3ZlcjogZmFsc2UsXG4gIC8qKlxuICAgKiBEb24ndCBjbG9zZSBkcm9wZG93biB3aGVuIGhvdmVyaW5nIG92ZXIgZHJvcGRvd24gcGFuZVxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaG92ZXJQYW5lOiBmYWxzZSxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBwaXhlbHMgYmV0d2VlbiB0aGUgZHJvcGRvd24gcGFuZSBhbmQgdGhlIHRyaWdnZXJpbmcgZWxlbWVudCBvbiBvcGVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIHZPZmZzZXQ6IDAsXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcGl4ZWxzIGJldHdlZW4gdGhlIGRyb3Bkb3duIHBhbmUgYW5kIHRoZSB0cmlnZ2VyaW5nIGVsZW1lbnQgb24gb3Blbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBoT2Zmc2V0OiAwLFxuICAvKipcbiAgICogUG9zaXRpb24gb2YgZHJvcGRvd24uIENhbiBiZSBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG9yIGF1dG8uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2F1dG8nXG4gICAqL1xuICBwb3NpdGlvbjogJ2F1dG8nLFxuICAvKipcbiAgICogQWxpZ25tZW50IG9mIGRyb3Bkb3duIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgY2VudGVyLCBvciBhdXRvLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgYWxpZ25tZW50OiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIGNvbnRhaW5lci93aW5kb3cuIElmIGZhbHNlLCBkcm9wZG93biB3aWxsIGZpcnN0IHRyeSB0byBwb3NpdGlvbiBhcyBkZWZpbmVkIGJ5IGRhdGEtcG9zaXRpb24gYW5kIGRhdGEtYWxpZ25tZW50LCBidXQgcmVwb3NpdGlvbiBpZiBpdCB3b3VsZCBjYXVzZSBhbiBvdmVyZmxvdy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGFsbG93T3ZlcmxhcDogZmFsc2UsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIG9ubHkgdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyLiBUaGlzIGlzIHRoZSBtb3N0IGNvbW1vblxuICAgKiBiZWhhdmlvciBmb3IgZHJvcGRvd25zLCBhbGxvd2luZyB0aGUgZHJvcGRvd24gdG8gZXh0ZW5kIHRoZSBib3R0b20gb2YgdGhlXG4gICAqIHNjcmVlbiBidXQgbm90IG90aGVyd2lzZSBpbmZsdWVuY2Ugb3IgYnJlYWsgb3V0IG9mIHRoZSBjb250YWluZXIuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGFsbG93Qm90dG9tT3ZlcmxhcDogdHJ1ZSxcbiAgLyoqXG4gICAqIEFsbG93IHRoZSBwbHVnaW4gdG8gdHJhcCBmb2N1cyB0byB0aGUgZHJvcGRvd24gcGFuZSBpZiBvcGVuZWQgd2l0aCBrZXlib2FyZCBjb21tYW5kcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHRyYXBGb2N1czogZmFsc2UsXG4gIC8qKlxuICAgKiBBbGxvdyB0aGUgcGx1Z2luIHRvIHNldCBmb2N1cyB0byB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgd2l0aGluIHRoZSBwYW5lLCByZWdhcmRsZXNzIG9mIG1ldGhvZCBvZiBvcGVuaW5nLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93cyBhIGNsaWNrIG9uIHRoZSBib2R5IHRvIGNsb3NlIHRoZSBkcm9wZG93bi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNsb3NlT25DbGljazogZmFsc2Vcbn07XG5cbmV4cG9ydCB7RHJvcGRvd259O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5ib3gnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcbmltcG9ydCB7IHJ0bCBhcyBSdGwgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5cbmNvbnN0IFBPU0lUSU9OUyA9IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ107XG5jb25zdCBWRVJUSUNBTF9BTElHTk1FTlRTID0gWyd0b3AnLCAnYm90dG9tJywgJ2NlbnRlciddO1xuY29uc3QgSE9SSVpPTlRBTF9BTElHTk1FTlRTID0gWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddO1xuXG5jb25zdCBBTElHTk1FTlRTID0ge1xuICAnbGVmdCc6IFZFUlRJQ0FMX0FMSUdOTUVOVFMsXG4gICdyaWdodCc6IFZFUlRJQ0FMX0FMSUdOTUVOVFMsXG4gICd0b3AnOiBIT1JJWk9OVEFMX0FMSUdOTUVOVFMsXG4gICdib3R0b20nOiBIT1JJWk9OVEFMX0FMSUdOTUVOVFNcbn1cblxuZnVuY3Rpb24gbmV4dEl0ZW0oaXRlbSwgYXJyYXkpIHtcbiAgdmFyIGN1cnJlbnRJZHggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICBpZihjdXJyZW50SWR4ID09PSBhcnJheS5sZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuIGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhcnJheVtjdXJyZW50SWR4ICsgMV07XG4gIH1cbn1cblxuXG5jbGFzcyBQb3NpdGlvbmFibGUgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQWJzdHJhY3QgY2xhc3MgZW5jYXBzdWxhdGluZyB0aGUgdGV0aGVyLWxpa2UgZXhwbGljaXQgcG9zaXRpb25pbmcgbG9naWNcbiAgICogaW5jbHVkaW5nIHJlcG9zaXRpb25pbmcgYmFzZWQgb24gb3ZlcmxhcC5cbiAgICogRXhwZWN0cyBjbGFzc2VzIHRvIGRlZmluZSBkZWZhdWx0cyBmb3Igdk9mZnNldCwgaE9mZnNldCwgcG9zaXRpb24sXG4gICAqIGFsaWdubWVudCwgYWxsb3dPdmVybGFwLCBhbmQgYWxsb3dCb3R0b21PdmVybGFwLiBUaGV5IGNhbiBkbyB0aGlzIGJ5XG4gICAqIGV4dGVuZGluZyB0aGUgZGVmYXVsdHMsIG9yIChmb3Igbm93IHJlY29tbWVuZGVkIGR1ZSB0byB0aGUgd2F5IGRvY3MgYXJlXG4gICAqIGdlbmVyYXRlZCkgYnkgZXhwbGljaXRseSBkZWNsYXJpbmcgdGhlbS5cbiAgICpcbiAgICoqL1xuXG4gIF9pbml0KCkge1xuICAgIHRoaXMudHJpZWRQb3NpdGlvbnMgPSB7fTtcbiAgICB0aGlzLnBvc2l0aW9uICA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PT0gJ2F1dG8nID8gdGhpcy5fZ2V0RGVmYXVsdFBvc2l0aW9uKCkgOiB0aGlzLm9wdGlvbnMucG9zaXRpb247XG4gICAgdGhpcy5hbGlnbm1lbnQgPSB0aGlzLm9wdGlvbnMuYWxpZ25tZW50ID09PSAnYXV0bycgPyB0aGlzLl9nZXREZWZhdWx0QWxpZ25tZW50KCkgOiB0aGlzLm9wdGlvbnMuYWxpZ25tZW50O1xuICAgIHRoaXMub3JpZ2luYWxQb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgdGhpcy5vcmlnaW5hbEFsaWdubWVudCA9IHRoaXMuYWxpZ25tZW50O1xuICB9XG5cbiAgX2dldERlZmF1bHRQb3NpdGlvbiAoKSB7XG4gICAgcmV0dXJuICdib3R0b20nO1xuICB9XG5cbiAgX2dldERlZmF1bHRBbGlnbm1lbnQoKSB7XG4gICAgc3dpdGNoKHRoaXMucG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICByZXR1cm4gUnRsKCkgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0cyB0aGUgcG9zaXRpb25hYmxlIHBvc3NpYmxlIHBvc2l0aW9ucyBieSBpdGVyYXRpbmcgdGhyb3VnaCBhbGlnbm1lbnRzXG4gICAqIGFuZCBwb3NpdGlvbnMuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlcG9zaXRpb24oKSB7XG4gICAgaWYodGhpcy5fYWxpZ25tZW50c0V4aGF1c3RlZCh0aGlzLnBvc2l0aW9uKSkge1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IG5leHRJdGVtKHRoaXMucG9zaXRpb24sIFBPU0lUSU9OUyk7XG4gICAgICB0aGlzLmFsaWdubWVudCA9IEFMSUdOTUVOVFNbdGhpcy5wb3NpdGlvbl1bMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlYWxpZ24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0cyB0aGUgZHJvcGRvd24gcGFuZSBwb3NzaWJsZSBwb3NpdGlvbnMgYnkgaXRlcmF0aW5nIHRocm91Z2ggYWxpZ25tZW50c1xuICAgKiBvbiB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVhbGlnbigpIHtcbiAgICB0aGlzLl9hZGRUcmllZFBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHRoaXMuYWxpZ25tZW50KVxuICAgIHRoaXMuYWxpZ25tZW50ID0gbmV4dEl0ZW0odGhpcy5hbGlnbm1lbnQsIEFMSUdOTUVOVFNbdGhpcy5wb3NpdGlvbl0pXG4gIH1cblxuICBfYWRkVHJpZWRQb3NpdGlvbihwb3NpdGlvbiwgYWxpZ25tZW50KSB7XG4gICAgdGhpcy50cmllZFBvc2l0aW9uc1twb3NpdGlvbl0gPSB0aGlzLnRyaWVkUG9zaXRpb25zW3Bvc2l0aW9uXSB8fCBbXVxuICAgIHRoaXMudHJpZWRQb3NpdGlvbnNbcG9zaXRpb25dLnB1c2goYWxpZ25tZW50KTtcbiAgfVxuXG4gIF9wb3NpdGlvbnNFeGhhdXN0ZWQoKSB7XG4gICAgdmFyIGlzRXhoYXVzdGVkID0gdHJ1ZTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgUE9TSVRJT05TLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpc0V4aGF1c3RlZCA9IGlzRXhoYXVzdGVkICYmIHRoaXMuX2FsaWdubWVudHNFeGhhdXN0ZWQoUE9TSVRJT05TW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzRXhoYXVzdGVkO1xuICB9XG5cbiAgX2FsaWdubWVudHNFeGhhdXN0ZWQocG9zaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy50cmllZFBvc2l0aW9uc1twb3NpdGlvbl0gJiYgdGhpcy50cmllZFBvc2l0aW9uc1twb3NpdGlvbl0ubGVuZ3RoID09IEFMSUdOTUVOVFNbcG9zaXRpb25dLmxlbmd0aDtcbiAgfVxuXG5cbiAgLy8gV2hlbiB3ZSdyZSB0cnlpbmcgdG8gY2VudGVyLCB3ZSBkb24ndCB3YW50IHRvIGFwcGx5IG9mZnNldCB0aGF0J3MgZ29pbmcgdG9cbiAgLy8gdGFrZSB1cyBqdXN0IG9mZiBjZW50ZXIsIHNvIHdyYXAgYXJvdW5kIHRvIHJldHVybiAwIGZvciB0aGUgYXBwcm9wcmlhdGVcbiAgLy8gb2Zmc2V0IGluIHRob3NlIGFsaWdubWVudHMuICBUT0RPOiBGaWd1cmUgb3V0IGlmIHdlIHdhbnQgdG8gbWFrZSB0aGlzXG4gIC8vIGNvbmZpZ3VyYWJsZSBiZWhhdmlvci4uLiBpdCBmZWVscyBtb3JlIGludHVpdGl2ZSwgZXNwZWNpYWxseSBmb3IgdG9vbHRpcHMsIGJ1dFxuICAvLyBpdCdzIHBvc3NpYmxlIHNvbWVvbmUgbWlnaHQgYWN0dWFsbHkgd2FudCB0byBzdGFydCBmcm9tIGNlbnRlciBhbmQgdGhlbiBudWRnZVxuICAvLyBzbGlnaHRseSBvZmYuXG4gIF9nZXRWT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudk9mZnNldDtcbiAgfVxuXG4gIF9nZXRIT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaE9mZnNldDtcbiAgfVxuXG5cbiAgX3NldFBvc2l0aW9uKCRhbmNob3IsICRlbGVtZW50LCAkcGFyZW50KSB7XG4gICAgaWYoJGFuY2hvci5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpeyByZXR1cm4gZmFsc2U7IH1cbiAgICB2YXIgJGVsZURpbXMgPSBCb3guR2V0RGltZW5zaW9ucygkZWxlbWVudCksXG4gICAgICAgICRhbmNob3JEaW1zID0gQm94LkdldERpbWVuc2lvbnMoJGFuY2hvcik7XG5cblxuICAgIGlmICghdGhpcy5vcHRpb25zLmFsbG93T3ZlcmxhcCkge1xuICAgICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBwb3NpdGlvbiAmIGFsaWdubWVudCBiZWZvcmUgY2hlY2tpbmcgb3ZlcmxhcFxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub3JpZ2luYWxQb3NpdGlvbjtcbiAgICAgIHRoaXMuYWxpZ25tZW50ID0gdGhpcy5vcmlnaW5hbEFsaWdubWVudDtcbiAgICB9XG5cbiAgICAkZWxlbWVudC5vZmZzZXQoQm94LkdldEV4cGxpY2l0T2Zmc2V0cygkZWxlbWVudCwgJGFuY2hvciwgdGhpcy5wb3NpdGlvbiwgdGhpcy5hbGlnbm1lbnQsIHRoaXMuX2dldFZPZmZzZXQoKSwgdGhpcy5fZ2V0SE9mZnNldCgpKSk7XG5cbiAgICBpZighdGhpcy5vcHRpb25zLmFsbG93T3ZlcmxhcCkge1xuICAgICAgdmFyIG92ZXJsYXBzID0ge307XG4gICAgICB2YXIgbWluT3ZlcmxhcCA9IDEwMDAwMDAwMDtcbiAgICAgIC8vIGRlZmF1bHQgY29vcmRpbmF0ZXMgdG8gaG93IHdlIHN0YXJ0LCBpbiBjYXNlIHdlIGNhbid0IGZpZ3VyZSBvdXQgYmV0dGVyXG4gICAgICB2YXIgbWluQ29vcmRpbmF0ZXMgPSB7cG9zaXRpb246IHRoaXMucG9zaXRpb24sIGFsaWdubWVudDogdGhpcy5hbGlnbm1lbnR9O1xuICAgICAgd2hpbGUoIXRoaXMuX3Bvc2l0aW9uc0V4aGF1c3RlZCgpKSB7XG4gICAgICAgIGxldCBvdmVybGFwID0gQm94Lk92ZXJsYXBBcmVhKCRlbGVtZW50LCAkcGFyZW50LCBmYWxzZSwgZmFsc2UsIHRoaXMub3B0aW9ucy5hbGxvd0JvdHRvbU92ZXJsYXApO1xuICAgICAgICBpZihvdmVybGFwID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYob3ZlcmxhcCA8IG1pbk92ZXJsYXApIHtcbiAgICAgICAgICBtaW5PdmVybGFwID0gb3ZlcmxhcDtcbiAgICAgICAgICBtaW5Db29yZGluYXRlcyA9IHtwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgYWxpZ25tZW50OiB0aGlzLmFsaWdubWVudH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXBvc2l0aW9uKCk7XG5cbiAgICAgICAgJGVsZW1lbnQub2Zmc2V0KEJveC5HZXRFeHBsaWNpdE9mZnNldHMoJGVsZW1lbnQsICRhbmNob3IsIHRoaXMucG9zaXRpb24sIHRoaXMuYWxpZ25tZW50LCB0aGlzLl9nZXRWT2Zmc2V0KCksIHRoaXMuX2dldEhPZmZzZXQoKSkpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgZ2V0IHRocm91Z2ggdGhlIGVudGlyZSBsb29wLCB0aGVyZSB3YXMgbm8gbm9uLW92ZXJsYXBwaW5nXG4gICAgICAvLyBwb3NpdGlvbiBhdmFpbGFibGUuIFBpY2sgdGhlIHZlcnNpb24gd2l0aCBsZWFzdCBvdmVybGFwLlxuICAgICAgdGhpcy5wb3NpdGlvbiA9IG1pbkNvb3JkaW5hdGVzLnBvc2l0aW9uO1xuICAgICAgdGhpcy5hbGlnbm1lbnQgPSBtaW5Db29yZGluYXRlcy5hbGlnbm1lbnQ7XG4gICAgICAkZWxlbWVudC5vZmZzZXQoQm94LkdldEV4cGxpY2l0T2Zmc2V0cygkZWxlbWVudCwgJGFuY2hvciwgdGhpcy5wb3NpdGlvbiwgdGhpcy5hbGlnbm1lbnQsIHRoaXMuX2dldFZPZmZzZXQoKSwgdGhpcy5fZ2V0SE9mZnNldCgpKSk7XG4gICAgfVxuICB9XG5cbn1cblxuUG9zaXRpb25hYmxlLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogUG9zaXRpb24gb2YgcG9zaXRpb25hYmxlIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgb3IgYXV0by5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnYXV0bydcbiAgICovXG4gIHBvc2l0aW9uOiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGlnbm1lbnQgb2YgcG9zaXRpb25hYmxlIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgY2VudGVyLCBvciBhdXRvLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgYWxpZ25tZW50OiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIGNvbnRhaW5lci93aW5kb3cuIElmIGZhbHNlLCBkcm9wZG93biBwb3NpdGlvbmFibGUgZmlyc3RcbiAgICogdHJ5IHRvIHBvc2l0aW9uIGFzIGRlZmluZWQgYnkgZGF0YS1wb3NpdGlvbiBhbmQgZGF0YS1hbGlnbm1lbnQsIGJ1dFxuICAgKiByZXBvc2l0aW9uIGlmIGl0IHdvdWxkIGNhdXNlIGFuIG92ZXJmbG93LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYWxsb3dPdmVybGFwOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93IG92ZXJsYXAgb2Ygb25seSB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXIuIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uXG4gICAqIGJlaGF2aW9yIGZvciBkcm9wZG93bnMsIGFsbG93aW5nIHRoZSBkcm9wZG93biB0byBleHRlbmQgdGhlIGJvdHRvbSBvZiB0aGVcbiAgICogc2NyZWVuIGJ1dCBub3Qgb3RoZXJ3aXNlIGluZmx1ZW5jZSBvciBicmVhayBvdXQgb2YgdGhlIGNvbnRhaW5lci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYWxsb3dCb3R0b21PdmVybGFwOiB0cnVlLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyB0aGUgcG9zaXRpb25hYmxlIHNob3VsZCBiZSBzZXBhcmF0ZWQgdmVydGljYWxseSBmcm9tIGFuY2hvclxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIHZPZmZzZXQ6IDAsXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcGl4ZWxzIHRoZSBwb3NpdGlvbmFibGUgc2hvdWxkIGJlIHNlcGFyYXRlZCBob3Jpem9udGFsbHkgZnJvbSBhbmNob3JcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBoT2Zmc2V0OiAwLFxufVxuXG5leHBvcnQge1Bvc2l0aW9uYWJsZX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNb3Rpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24nO1xuXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4gIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGAke3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykge1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0oKSk7XG5cbmNvbnN0IHRyaWdnZXJzID0gKGVsLCB0eXBlKSA9PiB7XG4gIGVsLmRhdGEodHlwZSkuc3BsaXQoJyAnKS5mb3JFYWNoKGlkID0+IHtcbiAgICAkKGAjJHtpZH1gKVsgdHlwZSA9PT0gJ2Nsb3NlJyA/ICd0cmlnZ2VyJyA6ICd0cmlnZ2VySGFuZGxlciddKGAke3R5cGV9LnpmLnRyaWdnZXJgLCBbZWxdKTtcbiAgfSk7XG59O1xuXG52YXIgVHJpZ2dlcnMgPSB7XG4gIExpc3RlbmVyczoge1xuICAgIEJhc2ljOiB7fSxcbiAgICBHbG9iYWw6IHt9XG4gIH0sXG4gIEluaXRpYWxpemVyczoge31cbn1cblxuVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljICA9IHtcbiAgb3Blbkxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICB0cmlnZ2VycygkKHRoaXMpLCAnb3BlbicpO1xuICB9LFxuICBjbG9zZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICBjbG9zZWFibGVMaXN0ZW5lcjogZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGFuaW1hdGlvbiA9ICQodGhpcykuZGF0YSgnY2xvc2FibGUnKTtcblxuICAgIGlmKGFuaW1hdGlvbiAhPT0gJycpe1xuICAgICAgTW90aW9uLmFuaW1hdGVPdXQoJCh0aGlzKSwgYW5pbWF0aW9uLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgJCh0aGlzKS5mYWRlT3V0KCkudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVGb2N1c0xpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZS1mb2N1cycpO1xuICAgICQoYCMke2lkfWApLnRyaWdnZXJIYW5kbGVyKCd0b2dnbGUuemYudHJpZ2dlcicsIFskKHRoaXMpXSk7XG4gIH1cbn07XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtb3Blbl0gd2lsbCByZXZlYWwgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1vcGVuXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5vcGVuTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NlXSB3aWxsIGNsb3NlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuLy8gSWYgdXNlZCB3aXRob3V0IGEgdmFsdWUgb24gW2RhdGEtY2xvc2VdLCB0aGUgZXZlbnQgd2lsbCBidWJibGUsIGFsbG93aW5nIGl0IHRvIGNsb3NlIGEgcGFyZW50IGNvbXBvbmVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZV0gd2lsbCB0b2dnbGUgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2FibGVdIHdpbGwgcmVzcG9uZCB0byBjbG9zZS56Zi50cmlnZ2VyIGV2ZW50cy5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2Nsb3NlLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xvc2UuemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZWFibGVdLCBbZGF0YS1jbG9zYWJsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VhYmxlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLXRvZ2dsZS1mb2N1c10gd2lsbCByZXNwb25kIHRvIGNvbWluZyBpbiBhbmQgb3V0IG9mIGZvY3VzXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xuICAkZWxlbS5vbignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCAnW2RhdGEtdG9nZ2xlLWZvY3VzXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbn1cblxuXG5cbi8vIE1vcmUgR2xvYmFsL2NvbXBsZXggbGlzdGVuZXJzIGFuZCB0cmlnZ2Vyc1xuVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbCAgPSB7XG4gIHJlc2l6ZUxpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSByZXNpemUgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInJlc2l6ZVwiKTtcbiAgfSxcbiAgc2Nyb2xsTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHNjcm9sbCBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwic2Nyb2xsXCIpO1xuICB9LFxuICBjbG9zZU1lTGlzdGVuZXI6IGZ1bmN0aW9uKGUsIHBsdWdpbklkKXtcbiAgICBsZXQgcGx1Z2luID0gZS5uYW1lc3BhY2Uuc3BsaXQoJy4nKVswXTtcbiAgICBsZXQgcGx1Z2lucyA9ICQoYFtkYXRhLSR7cGx1Z2lufV1gKS5ub3QoYFtkYXRhLXlldGktYm94PVwiJHtwbHVnaW5JZH1cIl1gKTtcblxuICAgIHBsdWdpbnMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgbGV0IF90aGlzID0gJCh0aGlzKTtcbiAgICAgIF90aGlzLnRyaWdnZXJIYW5kbGVyKCdjbG9zZS56Zi50cmlnZ2VyJywgW190aGlzXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gR2xvYmFsLCBwYXJzZXMgd2hvbGUgZG9jdW1lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyID0gZnVuY3Rpb24ocGx1Z2luTmFtZSkge1xuICB2YXIgeWV0aUJveGVzID0gJCgnW2RhdGEteWV0aS1ib3hdJyksXG4gICAgICBwbHVnTmFtZXMgPSBbJ2Ryb3Bkb3duJywgJ3Rvb2x0aXAnLCAncmV2ZWFsJ107XG5cbiAgaWYocGx1Z2luTmFtZSl7XG4gICAgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcy5wdXNoKHBsdWdpbk5hbWUpO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGx1Z2luTmFtZVswXSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzID0gcGx1Z05hbWVzLmNvbmNhdChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsdWdpbiBuYW1lcyBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gIH1cbiAgaWYoeWV0aUJveGVzLmxlbmd0aCl7XG4gICAgbGV0IGxpc3RlbmVycyA9IHBsdWdOYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiBgY2xvc2VtZS56Zi4ke25hbWV9YDtcbiAgICB9KS5qb2luKCcgJyk7XG5cbiAgICAkKHdpbmRvdykub2ZmKGxpc3RlbmVycykub24obGlzdGVuZXJzLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLmNsb3NlTWVMaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgdHJpZ2dlciwgbGlzdGVuZXIpIHtcbiAgbGV0IHRpbWVyLCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKTtcbiAgJCh3aW5kb3cpLm9mZih0cmlnZ2VyKS5vbih0cmlnZ2VyLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRpbWVyKSB7IGNsZWFyVGltZW91dCh0aW1lcik7IH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0sIGRlYm91bmNlIHx8IDEwKTsvL2RlZmF1bHQgdGltZSB0byBlbWl0IHNjcm9sbCBldmVudFxuICB9KTtcbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtcmVzaXplXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAncmVzaXplLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnJlc2l6ZUxpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXNjcm9sbF0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Njcm9sbC56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5zY3JvbGxMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lciA9IGZ1bmN0aW9uKCRlbGVtKSB7XG4gIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsgcmV0dXJuIGZhbHNlOyB9XG4gIGxldCAkbm9kZXMgPSAkZWxlbS5maW5kKCdbZGF0YS1yZXNpemVdLCBbZGF0YS1zY3JvbGxdLCBbZGF0YS1tdXRhdGVdJyk7XG5cbiAgLy9lbGVtZW50IGNhbGxiYWNrXG4gIHZhciBsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uID0gZnVuY3Rpb24gKG11dGF0aW9uUmVjb3Jkc0xpc3QpIHtcbiAgICB2YXIgJHRhcmdldCA9ICQobXV0YXRpb25SZWNvcmRzTGlzdFswXS50YXJnZXQpO1xuXG4gICAgLy90cmlnZ2VyIHRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgZWxlbWVudCBkZXBlbmRpbmcgb24gdHlwZVxuICAgIHN3aXRjaCAobXV0YXRpb25SZWNvcmRzTGlzdFswXS50eXBlKSB7XG4gICAgICBjYXNlIFwiYXR0cmlidXRlc1wiOlxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwic2Nyb2xsXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdzY3JvbGxtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQsIHdpbmRvdy5wYWdlWU9mZnNldF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJyZXNpemVcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldF0pO1xuICAgICAgICAgfVxuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiY2hpbGRMaXN0XCI6XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlckhhbmRsZXIoJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBbJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKV0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICB9O1xuXG4gIGlmICgkbm9kZXMubGVuZ3RoKSB7XG4gICAgLy9mb3IgZWFjaCBlbGVtZW50IHRoYXQgbmVlZHMgdG8gbGlzdGVuIGZvciByZXNpemluZywgc2Nyb2xsaW5nLCBvciBtdXRhdGlvbiBhZGQgYSBzaW5nbGUgb2JzZXJ2ZXJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAkbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB2YXIgZWxlbWVudE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbik7XG4gICAgICBlbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZSgkbm9kZXNbaV0sIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiBmYWxzZSwgc3VidHJlZTogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbXCJkYXRhLWV2ZW50c1wiLCBcInN0eWxlXCJdIH0pO1xuICAgIH1cbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkT3Blbkxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIoJGRvY3VtZW50KTtcblxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIGxldCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFJlc2l6ZUxpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VtZUxpc3RlbmVyKCk7XG59XG5cblxuVHJpZ2dlcnMuaW5pdCA9IGZ1bmN0aW9uICgkLCBGb3VuZGF0aW9uKSB7XG4gIG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJC50cmlnZ2Vyc0luaXRpYWxpemVkICE9PSB0cnVlKSB7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2ltcGxlTGlzdGVuZXJzKCk7XG4gICAgICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICAkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoRm91bmRhdGlvbikge1xuICAgIEZvdW5kYXRpb24uVHJpZ2dlcnMgPSBUcmlnZ2VycztcbiAgICAvLyBMZWdhY3kgaW5jbHVkZWQgdG8gYmUgYmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIG5vdy5cbiAgICBGb3VuZGF0aW9uLklIZWFyWW91ID0gVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVyc1xuICB9XG59XG5cbmV4cG9ydCB7VHJpZ2dlcnN9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
