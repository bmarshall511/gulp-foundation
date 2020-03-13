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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__);
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


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__);

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
         * @requires foundation.util.touch
         * @requires foundation.util.triggers
         */


        var Dropdown = /*#__PURE__*/function (_Positionable) {
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
              // Touch and Triggers init are idempotent, just need to make sure they are initialized

              _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

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
              var _this = this,
                  hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined';

              this.$element.on({
                'open.zf.trigger': this.open.bind(this),
                'close.zf.trigger': this.close.bind(this),
                'toggle.zf.trigger': this.toggle.bind(this),
                'resizeme.zf.trigger': this._setPosition.bind(this)
              });
              this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function (e) {
                _this._setCurrentAnchor(this);

                if (_this.options.forceFollow === false) {
                  // if forceFollow false, always prevent default action
                  e.preventDefault();
                } else if (hasTouch && _this.options.hover && _this.$element.hasClass('is-open') === false) {
                  // if forceFollow true and hover option true, only prevent default action on 1st click
                  // on 2nd click (dropown opened) the default action (e.g. follow a href) gets executed
                  e.preventDefault();
                }
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

              $body.off('click.zf.dropdown tap.zf.dropdown').on('click.zf.dropdown tap.zf.dropdown', function (e) {
                if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
                  return;
                }

                if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
                  return;
                }

                _this.close();

                $body.off('click.zf.dropdown tap.zf.dropdown');
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
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown tap.zf.dropdown');
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
          closeOnClick: false,

          /**
           * If true the default action of the toggle (e.g. follow a link with href) gets executed on click. If hover option is also true the default action gets prevented on first click for mobile / touch devices and executed on second click.
           * @option
           * @type {boolean}
           * @default true
           */
          forceFollow: true
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
      4:
      /*!*********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.dropdown.js ***!
        \*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.dropdown.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24uZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24ucG9zaXRpb25hYmxlLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMuanMiLCJ3ZWJwYWNrOi9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOltcImpRdWVyeVwiXSxcImFtZFwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwifSJdLCJuYW1lcyI6WyJGb3VuZGF0aW9uIiwiRHJvcGRvd24iLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJUb3VjaCIsIlRyaWdnZXJzIiwiS2V5Ym9hcmQiLCIkaWQiLCJHZXRZb0RpZ2l0cyIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbFBvc2l0aW9uIiwiZWwiLCJfdGhpcyIsImhhc1RvdWNoIiwid2luZG93IiwiZSIsImJvZHlEYXRhIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImlnbm9yZU1vdXNlZGlzYXBwZWFyIiwiJHRhcmdldCIsInZpc2libGVGb2N1c2FibGVFbGVtZW50cyIsIm9wZW4iLCJjbG9zZSIsIiRib2R5IiwiZG9jdW1lbnQiLCIkZm9jdXNhYmxlIiwiUG9zaXRpb25hYmxlIiwicGFyZW50Q2xhc3MiLCJob3ZlckRlbGF5IiwiaG92ZXIiLCJob3ZlclBhbmUiLCJ2T2Zmc2V0IiwiaE9mZnNldCIsImFsaWdubWVudCIsImFsbG93T3ZlcmxhcCIsImFsbG93Qm90dG9tT3ZlcmxhcCIsInRyYXBGb2N1cyIsImF1dG9Gb2N1cyIsImNsb3NlT25DbGljayIsImZvcmNlRm9sbG93IiwiUE9TSVRJT05TIiwiVkVSVElDQUxfQUxJR05NRU5UUyIsIkhPUklaT05UQUxfQUxJR05NRU5UUyIsIkFMSUdOTUVOVFMiLCJjdXJyZW50SWR4IiwiYXJyYXkiLCJSdGwiLCJuZXh0SXRlbSIsImlzRXhoYXVzdGVkIiwiaSIsIiRhbmNob3IiLCIkZWxlbWVudCIsIiRwYXJlbnQiLCJCb3giLCJtaW5PdmVybGFwIiwibWluQ29vcmRpbmF0ZXMiLCJvdmVybGFwIiwiUGx1Z2luIiwiTXV0YXRpb25PYnNlcnZlciIsInByZWZpeGVzIiwidHJpZ2dlcnMiLCJ0eXBlIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwiaWQiLCJ0b2dnbGVMaXN0ZW5lciIsImNsb3NlYWJsZUxpc3RlbmVyIiwiYW5pbWF0aW9uIiwiTW90aW9uIiwidG9nZ2xlRm9jdXNMaXN0ZW5lciIsIiRlbGVtIiwicmVzaXplTGlzdGVuZXIiLCIkbm9kZXMiLCJzY3JvbGxMaXN0ZW5lciIsImNsb3NlTWVMaXN0ZW5lciIsInBsdWdpbiIsInBsdWdpbnMiLCJ5ZXRpQm94ZXMiLCJwbHVnTmFtZXMiLCJwbHVnaW5OYW1lIiwiY29uc29sZSIsImxpc3RlbmVycyIsImFyZ3MiLCJBcnJheSIsInRpbWVyIiwibGlzdGVuZXIiLCJkZWJvdW5jZSIsImRlYm91bmNlR2xvYmFsTGlzdGVuZXIiLCJsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uIiwibXV0YXRpb25SZWNvcmRzTGlzdCIsImVsZW1lbnRPYnNlcnZlciIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsImF0dHJpYnV0ZUZpbHRlciIsIiRkb2N1bWVudCIsIm9uTG9hZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLDRCQUFBLEVBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsdUJBQUEsRUFBQSwwQkFBQSxFQUFBLHlCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxxQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsdUJBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSxxREFBQSxFQUFBLDRDQUFBLEVBQUEsa0NBQUEsRUFBQSxnREFBQSxFQUFBLG1EQUFBLEVBQUEsa0RBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FB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QUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsNkNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSxpREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxxQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxVQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLGlEQUFBLENBQUEsVUFBQSxDQUFBO0FBQUEsU0FBQTs7QUNHQUEsUUFBQUEsNkNBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE1BQUFBLENBQWtCQyxpREFBQUEsQ0FBbEJELFVBQWtCQyxDQUFsQkQsRUFBQUEsVUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsVUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxRQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHNEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLG9DQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSw4REFBQSxHQUFBLGFBQUEsbUJBQUEsQ0FB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QUFBLENBQUFBLGlCQUFBQTtBQUNBQSxVQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQTtBQUxGQSxTQUFBQTs7QUFTQUEsUUFBQUEsUUFBUSxDQUFSQSxJQUFBQSxHQUFnQixVQUFBLENBQUEsRUFBQSxVQUFBLEVBQXlCO0FBQ3ZDaUcsVUFBQUEsTUFBQUEsQ0FBQUEsbURBQUFBLENBQUFBLFFBQUFBLENBQUFBLENBQUFBLENBQU9uRyxDQUFDLENBQUYsTUFBRSxDQUFSbUcsRUFBa0IsWUFBWTtBQUM1QixnQkFBSW5HLENBQUMsQ0FBREEsbUJBQUFBLEtBQUosSUFBQSxFQUFvQztBQUNsQ0UsY0FBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFDQUEsY0FBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFDQUYsY0FBQUEsQ0FBQyxDQUFEQSxtQkFBQUEsR0FBQUEsSUFBQUE7QUFDRDtBQUxIbUcsV0FBQUE7O0FBUUEsY0FBQSxVQUFBLEVBQWU7QUFDYnZHLFlBQUFBLFVBQVUsQ0FBVkEsUUFBQUEsR0FEYSxRQUNiQSxDQURhLENBRWI7O0FBQ0FBLFlBQUFBLFVBQVUsQ0FBVkEsUUFBQUEsR0FBc0JNLFFBQVEsQ0FBUkEsWUFBQUEsQ0FBdEJOLGtCQUFBQTtBQUNEO0FBYkhNLFNBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclBBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FQVUE7Q0FWQSIsImZpbGUiOiJmb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwuYm94XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwudG91Y2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiwgXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcImpxdWVyeVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLmJveFwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiLCBcIi4vZm91bmRhdGlvbi51dGlsLnRvdWNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24uZHJvcGRvd25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwuYm94XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwudG91Y2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmRyb3Bkb3duXCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLmJveFwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm1vdGlvblwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLnRvdWNoXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2tleWJvYXJkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfYm94X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9tb3Rpb25fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX3RvdWNoX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5kcm9wZG93bic7XG5Gb3VuZGF0aW9uLnBsdWdpbihEcm9wZG93biwgJ0Ryb3Bkb3duJyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIERyb3Bkb3duIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkJztcbmltcG9ydCB7IEdldFlvRGlnaXRzLCBpZ25vcmVNb3VzZWRpc2FwcGVhciB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IFBvc2l0aW9uYWJsZSB9IGZyb20gJy4vZm91bmRhdGlvbi5wb3NpdGlvbmFibGUnO1xuXG5pbXBvcnQgeyBUcmlnZ2VycyB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzJztcbmltcG9ydCB7IFRvdWNoIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudG91Y2gnXG5cbi8qKlxuICogRHJvcGRvd24gbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLmRyb3Bkb3duXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLmJveFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50b3VjaFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50cmlnZ2Vyc1xuICovXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIFBvc2l0aW9uYWJsZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIGEgZHJvcGRvd24uXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBEcm9wZG93blxuICAgKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gbWFrZSBpbnRvIGEgZHJvcGRvd24uXG4gICAqICAgICAgICBPYmplY3Qgc2hvdWxkIGJlIG9mIHRoZSBkcm9wZG93biBwYW5lbCwgcmF0aGVyIHRoYW4gaXRzIGFuY2hvci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRHJvcGRvd24uZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdEcm9wZG93bic7IC8vIGllOSBiYWNrIGNvbXBhdFxuXG4gICAgLy8gVG91Y2ggYW5kIFRyaWdnZXJzIGluaXQgYXJlIGlkZW1wb3RlbnQsIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgdGhleSBhcmUgaW5pdGlhbGl6ZWRcbiAgICBUb3VjaC5pbml0KCQpO1xuICAgIFRyaWdnZXJzLmluaXQoJCk7XG5cbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignRHJvcGRvd24nLCB7XG4gICAgICAnRU5URVInOiAndG9nZ2xlJyxcbiAgICAgICdTUEFDRSc6ICd0b2dnbGUnLFxuICAgICAgJ0VTQ0FQRSc6ICdjbG9zZSdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcGx1Z2luIGJ5IHNldHRpbmcvY2hlY2tpbmcgb3B0aW9ucyBhbmQgYXR0cmlidXRlcywgYWRkaW5nIGhlbHBlciB2YXJpYWJsZXMsIGFuZCBzYXZpbmcgdGhlIGFuY2hvci5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB2YXIgJGlkID0gdGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpO1xuXG4gICAgdGhpcy4kYW5jaG9ycyA9ICQoYFtkYXRhLXRvZ2dsZT1cIiR7JGlkfVwiXWApLmxlbmd0aCA/ICQoYFtkYXRhLXRvZ2dsZT1cIiR7JGlkfVwiXWApIDogJChgW2RhdGEtb3Blbj1cIiR7JGlkfVwiXWApO1xuICAgIHRoaXMuJGFuY2hvcnMuYXR0cih7XG4gICAgICAnYXJpYS1jb250cm9scyc6ICRpZCxcbiAgICAgICdkYXRhLWlzLWZvY3VzJzogZmFsc2UsXG4gICAgICAnZGF0YS15ZXRpLWJveCc6ICRpZCxcbiAgICAgICdhcmlhLWhhc3BvcHVwJzogdHJ1ZSxcbiAgICAgICdhcmlhLWV4cGFuZGVkJzogZmFsc2VcbiAgICB9KTtcblxuICAgIHRoaXMuX3NldEN1cnJlbnRBbmNob3IodGhpcy4kYW5jaG9ycy5maXJzdCgpKTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5wYXJlbnRDbGFzcyl7XG4gICAgICB0aGlzLiRwYXJlbnQgPSB0aGlzLiRlbGVtZW50LnBhcmVudHMoJy4nICsgdGhpcy5vcHRpb25zLnBhcmVudENsYXNzKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuJHBhcmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2V0IFthcmlhLWxhYmVsbGVkYnldIG9uIHRoZSBEcm9wZG93biBpZiBpdCBpcyBub3Qgc2V0XG4gICAgaWYgKHR5cGVvZiB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gR2V0IHRoZSBhbmNob3IgSUQgb3IgY3JlYXRlIG9uZVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLiRjdXJyZW50QW5jaG9yLmF0dHIoJ2lkJykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuJGN1cnJlbnRBbmNob3IuYXR0cignaWQnLCBHZXRZb0RpZ2l0cyg2LCAnZGQtYW5jaG9yJykpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLiRjdXJyZW50QW5jaG9yLmF0dHIoJ2lkJykpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQuYXR0cih7XG4gICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAnZGF0YS15ZXRpLWJveCc6ICRpZCxcbiAgICAgICdkYXRhLXJlc2l6ZSc6ICRpZCxcbiAgICB9KTtcblxuICAgIHN1cGVyLl9pbml0KCk7XG4gICAgdGhpcy5fZXZlbnRzKCk7XG4gIH1cblxuICBfZ2V0RGVmYXVsdFBvc2l0aW9uKCkge1xuICAgIC8vIGhhbmRsZSBsZWdhY3kgY2xhc3NuYW1lc1xuICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuJGVsZW1lbnRbMF0uY2xhc3NOYW1lLm1hdGNoKC8odG9wfGxlZnR8cmlnaHR8Ym90dG9tKS9nKTtcbiAgICBpZihwb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHBvc2l0aW9uWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2JvdHRvbSdcbiAgICB9XG4gIH1cblxuICBfZ2V0RGVmYXVsdEFsaWdubWVudCgpIHtcbiAgICAvLyBoYW5kbGUgbGVnYWN5IGZsb2F0IGFwcHJvYWNoXG4gICAgdmFyIGhvcml6b250YWxQb3NpdGlvbiA9IC9mbG9hdC0oXFxTKykvLmV4ZWModGhpcy4kY3VycmVudEFuY2hvci5hdHRyKCdjbGFzcycpKTtcbiAgICBpZihob3Jpem9udGFsUG9zaXRpb24pIHtcbiAgICAgIHJldHVybiBob3Jpem9udGFsUG9zaXRpb25bMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLl9nZXREZWZhdWx0QWxpZ25tZW50KCk7XG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHBvc2l0aW9uIGFuZCBvcmllbnRhdGlvbiBvZiB0aGUgZHJvcGRvd24gcGFuZSwgY2hlY2tzIGZvciBjb2xsaXNpb25zIGlmIGFsbG93LW92ZXJsYXAgaXMgbm90IHRydWUuXG4gICAqIFJlY3Vyc2l2ZWx5IGNhbGxzIGl0c2VsZiBpZiBhIGNvbGxpc2lvbiBpcyBkZXRlY3RlZCwgd2l0aCBhIG5ldyBwb3NpdGlvbiBjbGFzcy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhgaGFzLXBvc2l0aW9uLSR7dGhpcy5wb3NpdGlvbn0gaGFzLWFsaWdubWVudC0ke3RoaXMuYWxpZ25tZW50fWApO1xuICAgIHN1cGVyLl9zZXRQb3NpdGlvbih0aGlzLiRjdXJyZW50QW5jaG9yLCB0aGlzLiRlbGVtZW50LCB0aGlzLiRwYXJlbnQpO1xuICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoYGhhcy1wb3NpdGlvbi0ke3RoaXMucG9zaXRpb259IGhhcy1hbGlnbm1lbnQtJHt0aGlzLmFsaWdubWVudH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGl0IGEgY3VycmVudCBhbmNob3IuXG4gICAqIEN1cnJlbnQgYW5jaG9yIGFzIHRoZSByZWZlcmVuY2UgZm9yIHRoZSBwb3NpdGlvbiBvZiBEcm9wZG93biBwYW5lcy5cbiAgICogQHBhcmFtIHtIVE1MfSBlbCAtIERPTSBlbGVtZW50IG9mIHRoZSBhbmNob3IuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldEN1cnJlbnRBbmNob3IoZWwpIHtcbiAgICB0aGlzLiRjdXJyZW50QW5jaG9yID0gJChlbCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGVsZW1lbnQgdXRpbGl6aW5nIHRoZSB0cmlnZ2VycyB1dGlsaXR5IGxpYnJhcnkuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2V2ZW50cygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBoYXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09ICd1bmRlZmluZWQnKTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oe1xuICAgICAgJ29wZW4uemYudHJpZ2dlcic6IHRoaXMub3Blbi5iaW5kKHRoaXMpLFxuICAgICAgJ2Nsb3NlLnpmLnRyaWdnZXInOiB0aGlzLmNsb3NlLmJpbmQodGhpcyksXG4gICAgICAndG9nZ2xlLnpmLnRyaWdnZXInOiB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpLFxuICAgICAgJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInOiB0aGlzLl9zZXRQb3NpdGlvbi5iaW5kKHRoaXMpXG4gICAgfSk7XG5cbiAgICB0aGlzLiRhbmNob3JzLm9mZignY2xpY2suemYudHJpZ2dlcicpXG4gICAgICAub24oJ2NsaWNrLnpmLnRyaWdnZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIF90aGlzLl9zZXRDdXJyZW50QW5jaG9yKHRoaXMpO1xuXG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmZvcmNlRm9sbG93ID09PSBmYWxzZSkge1xuICAgICAgICAgIC8vIGlmIGZvcmNlRm9sbG93IGZhbHNlLCBhbHdheXMgcHJldmVudCBkZWZhdWx0IGFjdGlvblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNUb3VjaCAmJiBfdGhpcy5vcHRpb25zLmhvdmVyICYmIF90aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gaWYgZm9yY2VGb2xsb3cgdHJ1ZSBhbmQgaG92ZXIgb3B0aW9uIHRydWUsIG9ubHkgcHJldmVudCBkZWZhdWx0IGFjdGlvbiBvbiAxc3QgY2xpY2tcbiAgICAgICAgICAvLyBvbiAybmQgY2xpY2sgKGRyb3Bvd24gb3BlbmVkKSB0aGUgZGVmYXVsdCBhY3Rpb24gKGUuZy4gZm9sbG93IGEgaHJlZikgZ2V0cyBleGVjdXRlZFxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYodGhpcy5vcHRpb25zLmhvdmVyKXtcbiAgICAgIHRoaXMuJGFuY2hvcnMub2ZmKCdtb3VzZWVudGVyLnpmLmRyb3Bkb3duIG1vdXNlbGVhdmUuemYuZHJvcGRvd24nKVxuICAgICAgLm9uKCdtb3VzZWVudGVyLnpmLmRyb3Bkb3duJywgZnVuY3Rpb24oKXtcbiAgICAgICAgX3RoaXMuX3NldEN1cnJlbnRBbmNob3IodGhpcyk7XG5cbiAgICAgICAgdmFyIGJvZHlEYXRhID0gJCgnYm9keScpLmRhdGEoKTtcbiAgICAgICAgaWYodHlwZW9mKGJvZHlEYXRhLndoYXRpbnB1dCkgPT09ICd1bmRlZmluZWQnIHx8IGJvZHlEYXRhLndoYXRpbnB1dCA9PT0gJ21vdXNlJykge1xuICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy50aW1lb3V0KTtcbiAgICAgICAgICBfdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgX3RoaXMub3BlbigpO1xuICAgICAgICAgICAgX3RoaXMuJGFuY2hvcnMuZGF0YSgnaG92ZXInLCB0cnVlKTtcbiAgICAgICAgICB9LCBfdGhpcy5vcHRpb25zLmhvdmVyRGVsYXkpO1xuICAgICAgICB9XG4gICAgICB9KS5vbignbW91c2VsZWF2ZS56Zi5kcm9wZG93bicsIGlnbm9yZU1vdXNlZGlzYXBwZWFyKGZ1bmN0aW9uKCl7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy50aW1lb3V0KTtcbiAgICAgICAgX3RoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIF90aGlzLiRhbmNob3JzLmRhdGEoJ2hvdmVyJywgZmFsc2UpO1xuICAgICAgICB9LCBfdGhpcy5vcHRpb25zLmhvdmVyRGVsYXkpO1xuICAgICAgfSkpO1xuICAgICAgaWYodGhpcy5vcHRpb25zLmhvdmVyUGFuZSl7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdtb3VzZWVudGVyLnpmLmRyb3Bkb3duIG1vdXNlbGVhdmUuemYuZHJvcGRvd24nKVxuICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnpmLmRyb3Bkb3duJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgfSkub24oJ21vdXNlbGVhdmUuemYuZHJvcGRvd24nLCBpZ25vcmVNb3VzZWRpc2FwcGVhcihmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMudGltZW91dCk7XG4gICAgICAgICAgICAgIF90aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kYW5jaG9ycy5kYXRhKCdob3ZlcicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5ob3ZlckRlbGF5KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy4kYW5jaG9ycy5hZGQodGhpcy4kZWxlbWVudCkub24oJ2tleWRvd24uemYuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIHZhciAkdGFyZ2V0ID0gJCh0aGlzKSxcbiAgICAgICAgdmlzaWJsZUZvY3VzYWJsZUVsZW1lbnRzID0gS2V5Ym9hcmQuZmluZEZvY3VzYWJsZShfdGhpcy4kZWxlbWVudCk7XG5cbiAgICAgIEtleWJvYXJkLmhhbmRsZUtleShlLCAnRHJvcGRvd24nLCB7XG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICgkdGFyZ2V0LmlzKF90aGlzLiRhbmNob3JzKSAmJiAhJHRhcmdldC5pcygnaW5wdXQsIHRleHRhcmVhJykpIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW4oKTtcbiAgICAgICAgICAgIF90aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgLTEpLmZvY3VzKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICBfdGhpcy4kYW5jaG9ycy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGhhbmRsZXIgdG8gdGhlIGJvZHkgdG8gY2xvc2UgYW55IGRyb3Bkb3ducyBvbiBhIGNsaWNrLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hZGRCb2R5SGFuZGxlcigpIHtcbiAgICAgdmFyICRib2R5ID0gJChkb2N1bWVudC5ib2R5KS5ub3QodGhpcy4kZWxlbWVudCksXG4gICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICRib2R5Lm9mZignY2xpY2suemYuZHJvcGRvd24gdGFwLnpmLmRyb3Bkb3duJylcbiAgICAgICAgICAub24oJ2NsaWNrLnpmLmRyb3Bkb3duIHRhcC56Zi5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZihfdGhpcy4kYW5jaG9ycy5pcyhlLnRhcmdldCkgfHwgX3RoaXMuJGFuY2hvcnMuZmluZChlLnRhcmdldCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKF90aGlzLiRlbGVtZW50LmlzKGUudGFyZ2V0KSB8fCBfdGhpcy4kZWxlbWVudC5maW5kKGUudGFyZ2V0KS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICRib2R5Lm9mZignY2xpY2suemYuZHJvcGRvd24gdGFwLnpmLmRyb3Bkb3duJyk7XG4gICAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIGRyb3Bkb3duIHBhbmUsIGFuZCBmaXJlcyBhIGJ1YmJsaW5nIGV2ZW50IHRvIGNsb3NlIG90aGVyIGRyb3Bkb3ducy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBmaXJlcyBEcm9wZG93biNjbG9zZW1lXG4gICAqIEBmaXJlcyBEcm9wZG93biNzaG93XG4gICAqL1xuICBvcGVuKCkge1xuICAgIC8vIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogRmlyZXMgdG8gY2xvc2Ugb3RoZXIgb3BlbiBkcm9wZG93bnMsIHR5cGljYWxseSB3aGVuIGRyb3Bkb3duIGlzIG9wZW5pbmdcbiAgICAgKiBAZXZlbnQgRHJvcGRvd24jY2xvc2VtZVxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignY2xvc2VtZS56Zi5kcm9wZG93bicsIHRoaXMuJGVsZW1lbnQuYXR0cignaWQnKSk7XG4gICAgdGhpcy4kYW5jaG9ycy5hZGRDbGFzcygnaG92ZXInKVxuICAgICAgICAuYXR0cih7J2FyaWEtZXhwYW5kZWQnOiB0cnVlfSk7XG4gICAgLy8gdGhpcy4kZWxlbWVudC8qLnNob3coKSovO1xuXG4gICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaXMtb3BlbmluZycpO1xuICAgIHRoaXMuX3NldFBvc2l0aW9uKCk7XG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtb3BlbmluZycpLmFkZENsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgLmF0dHIoeydhcmlhLWhpZGRlbic6IGZhbHNlfSk7XG5cbiAgICBpZih0aGlzLm9wdGlvbnMuYXV0b0ZvY3VzKXtcbiAgICAgIHZhciAkZm9jdXNhYmxlID0gS2V5Ym9hcmQuZmluZEZvY3VzYWJsZSh0aGlzLiRlbGVtZW50KTtcbiAgICAgIGlmKCRmb2N1c2FibGUubGVuZ3RoKXtcbiAgICAgICAgJGZvY3VzYWJsZS5lcSgwKS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2speyB0aGlzLl9hZGRCb2R5SGFuZGxlcigpOyB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYXBGb2N1cykge1xuICAgICAgS2V5Ym9hcmQudHJhcEZvY3VzKHRoaXMuJGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIG9uY2UgdGhlIGRyb3Bkb3duIGlzIHZpc2libGUuXG4gICAgICogQGV2ZW50IERyb3Bkb3duI3Nob3dcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3Nob3cuemYuZHJvcGRvd24nLCBbdGhpcy4kZWxlbWVudF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgb3BlbiBkcm9wZG93biBwYW5lLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQGZpcmVzIERyb3Bkb3duI2hpZGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmKCF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgLmF0dHIoeydhcmlhLWhpZGRlbic6IHRydWV9KTtcblxuICAgIHRoaXMuJGFuY2hvcnMucmVtb3ZlQ2xhc3MoJ2hvdmVyJylcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBvbmNlIHRoZSBkcm9wZG93biBpcyBubyBsb25nZXIgdmlzaWJsZS5cbiAgICAgKiBAZXZlbnQgRHJvcGRvd24jaGlkZVxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaGlkZS56Zi5kcm9wZG93bicsIFt0aGlzLiRlbGVtZW50XSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYXBGb2N1cykge1xuICAgICAgS2V5Ym9hcmQucmVsZWFzZUZvY3VzKHRoaXMuJGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBkcm9wZG93biBwYW5lJ3MgdmlzaWJpbGl0eS5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICB0b2dnbGUoKSB7XG4gICAgaWYodGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaXMtb3BlbicpKXtcbiAgICAgIGlmKHRoaXMuJGFuY2hvcnMuZGF0YSgnaG92ZXInKSkgcmV0dXJuO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBkcm9wZG93bi5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnpmLnRyaWdnZXInKS5oaWRlKCk7XG4gICAgdGhpcy4kYW5jaG9ycy5vZmYoJy56Zi5kcm9wZG93bicpO1xuICAgICQoZG9jdW1lbnQuYm9keSkub2ZmKCdjbGljay56Zi5kcm9wZG93biB0YXAuemYuZHJvcGRvd24nKTtcblxuICB9XG59XG5cbkRyb3Bkb3duLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogQ2xhc3MgdGhhdCBkZXNpZ25hdGVzIGJvdW5kaW5nIGNvbnRhaW5lciBvZiBEcm9wZG93biAoZGVmYXVsdDogd2luZG93KVxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHs/c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBwYXJlbnRDbGFzczogbnVsbCxcbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lIHRvIGRlbGF5IG9wZW5pbmcgYSBzdWJtZW51IG9uIGhvdmVyIGV2ZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDI1MFxuICAgKi9cbiAgaG92ZXJEZWxheTogMjUwLFxuICAvKipcbiAgICogQWxsb3cgc3VibWVudXMgdG8gb3BlbiBvbiBob3ZlciBldmVudHNcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGhvdmVyOiBmYWxzZSxcbiAgLyoqXG4gICAqIERvbid0IGNsb3NlIGRyb3Bkb3duIHdoZW4gaG92ZXJpbmcgb3ZlciBkcm9wZG93biBwYW5lXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBob3ZlclBhbmU6IGZhbHNlLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyBiZXR3ZWVuIHRoZSBkcm9wZG93biBwYW5lIGFuZCB0aGUgdHJpZ2dlcmluZyBlbGVtZW50IG9uIG9wZW4uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgdk9mZnNldDogMCxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBwaXhlbHMgYmV0d2VlbiB0aGUgZHJvcGRvd24gcGFuZSBhbmQgdGhlIHRyaWdnZXJpbmcgZWxlbWVudCBvbiBvcGVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIGhPZmZzZXQ6IDAsXG4gIC8qKlxuICAgKiBQb3NpdGlvbiBvZiBkcm9wZG93bi4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgb3IgYXV0by5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnYXV0bydcbiAgICovXG4gIHBvc2l0aW9uOiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGlnbm1lbnQgb2YgZHJvcGRvd24gcmVsYXRpdmUgdG8gYW5jaG9yLiBDYW4gYmUgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBjZW50ZXIsIG9yIGF1dG8uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2F1dG8nXG4gICAqL1xuICBhbGlnbm1lbnQ6ICdhdXRvJyxcbiAgLyoqXG4gICAqIEFsbG93IG92ZXJsYXAgb2YgY29udGFpbmVyL3dpbmRvdy4gSWYgZmFsc2UsIGRyb3Bkb3duIHdpbGwgZmlyc3QgdHJ5IHRvIHBvc2l0aW9uIGFzIGRlZmluZWQgYnkgZGF0YS1wb3NpdGlvbiBhbmQgZGF0YS1hbGlnbm1lbnQsIGJ1dCByZXBvc2l0aW9uIGlmIGl0IHdvdWxkIGNhdXNlIGFuIG92ZXJmbG93LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYWxsb3dPdmVybGFwOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93IG92ZXJsYXAgb2Ygb25seSB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXIuIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uXG4gICAqIGJlaGF2aW9yIGZvciBkcm9wZG93bnMsIGFsbG93aW5nIHRoZSBkcm9wZG93biB0byBleHRlbmQgdGhlIGJvdHRvbSBvZiB0aGVcbiAgICogc2NyZWVuIGJ1dCBub3Qgb3RoZXJ3aXNlIGluZmx1ZW5jZSBvciBicmVhayBvdXQgb2YgdGhlIGNvbnRhaW5lci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYWxsb3dCb3R0b21PdmVybGFwOiB0cnVlLFxuICAvKipcbiAgICogQWxsb3cgdGhlIHBsdWdpbiB0byB0cmFwIGZvY3VzIHRvIHRoZSBkcm9wZG93biBwYW5lIGlmIG9wZW5lZCB3aXRoIGtleWJvYXJkIGNvbW1hbmRzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdHJhcEZvY3VzOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93IHRoZSBwbHVnaW4gdG8gc2V0IGZvY3VzIHRvIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCB3aXRoaW4gdGhlIHBhbmUsIHJlZ2FyZGxlc3Mgb2YgbWV0aG9kIG9mIG9wZW5pbmcuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBhdXRvRm9jdXM6IGZhbHNlLFxuICAvKipcbiAgICogQWxsb3dzIGEgY2xpY2sgb24gdGhlIGJvZHkgdG8gY2xvc2UgdGhlIGRyb3Bkb3duLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgLyoqXG4gICAqIElmIHRydWUgdGhlIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSB0b2dnbGUgKGUuZy4gZm9sbG93IGEgbGluayB3aXRoIGhyZWYpIGdldHMgZXhlY3V0ZWQgb24gY2xpY2suIElmIGhvdmVyIG9wdGlvbiBpcyBhbHNvIHRydWUgdGhlIGRlZmF1bHQgYWN0aW9uIGdldHMgcHJldmVudGVkIG9uIGZpcnN0IGNsaWNrIGZvciBtb2JpbGUgLyB0b3VjaCBkZXZpY2VzIGFuZCBleGVjdXRlZCBvbiBzZWNvbmQgY2xpY2suXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGZvcmNlRm9sbG93OiB0cnVlXG59O1xuXG5leHBvcnQge0Ryb3Bkb3dufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwuYm94JztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBydGwgYXMgUnRsIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuXG5jb25zdCBQT1NJVElPTlMgPSBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddO1xuY29uc3QgVkVSVElDQUxfQUxJR05NRU5UUyA9IFsndG9wJywgJ2JvdHRvbScsICdjZW50ZXInXTtcbmNvbnN0IEhPUklaT05UQUxfQUxJR05NRU5UUyA9IFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXTtcblxuY29uc3QgQUxJR05NRU5UUyA9IHtcbiAgJ2xlZnQnOiBWRVJUSUNBTF9BTElHTk1FTlRTLFxuICAncmlnaHQnOiBWRVJUSUNBTF9BTElHTk1FTlRTLFxuICAndG9wJzogSE9SSVpPTlRBTF9BTElHTk1FTlRTLFxuICAnYm90dG9tJzogSE9SSVpPTlRBTF9BTElHTk1FTlRTXG59XG5cbmZ1bmN0aW9uIG5leHRJdGVtKGl0ZW0sIGFycmF5KSB7XG4gIHZhciBjdXJyZW50SWR4ID0gYXJyYXkuaW5kZXhPZihpdGVtKTtcbiAgaWYoY3VycmVudElkeCA9PT0gYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJyYXlbY3VycmVudElkeCArIDFdO1xuICB9XG59XG5cblxuY2xhc3MgUG9zaXRpb25hYmxlIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIEFic3RyYWN0IGNsYXNzIGVuY2Fwc3VsYXRpbmcgdGhlIHRldGhlci1saWtlIGV4cGxpY2l0IHBvc2l0aW9uaW5nIGxvZ2ljXG4gICAqIGluY2x1ZGluZyByZXBvc2l0aW9uaW5nIGJhc2VkIG9uIG92ZXJsYXAuXG4gICAqIEV4cGVjdHMgY2xhc3NlcyB0byBkZWZpbmUgZGVmYXVsdHMgZm9yIHZPZmZzZXQsIGhPZmZzZXQsIHBvc2l0aW9uLFxuICAgKiBhbGlnbm1lbnQsIGFsbG93T3ZlcmxhcCwgYW5kIGFsbG93Qm90dG9tT3ZlcmxhcC4gVGhleSBjYW4gZG8gdGhpcyBieVxuICAgKiBleHRlbmRpbmcgdGhlIGRlZmF1bHRzLCBvciAoZm9yIG5vdyByZWNvbW1lbmRlZCBkdWUgdG8gdGhlIHdheSBkb2NzIGFyZVxuICAgKiBnZW5lcmF0ZWQpIGJ5IGV4cGxpY2l0bHkgZGVjbGFyaW5nIHRoZW0uXG4gICAqXG4gICAqKi9cblxuICBfaW5pdCgpIHtcbiAgICB0aGlzLnRyaWVkUG9zaXRpb25zID0ge307XG4gICAgdGhpcy5wb3NpdGlvbiAgPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gPT09ICdhdXRvJyA/IHRoaXMuX2dldERlZmF1bHRQb3NpdGlvbigpIDogdGhpcy5vcHRpb25zLnBvc2l0aW9uO1xuICAgIHRoaXMuYWxpZ25tZW50ID0gdGhpcy5vcHRpb25zLmFsaWdubWVudCA9PT0gJ2F1dG8nID8gdGhpcy5fZ2V0RGVmYXVsdEFsaWdubWVudCgpIDogdGhpcy5vcHRpb25zLmFsaWdubWVudDtcbiAgICB0aGlzLm9yaWdpbmFsUG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xuICAgIHRoaXMub3JpZ2luYWxBbGlnbm1lbnQgPSB0aGlzLmFsaWdubWVudDtcbiAgfVxuXG4gIF9nZXREZWZhdWx0UG9zaXRpb24gKCkge1xuICAgIHJldHVybiAnYm90dG9tJztcbiAgfVxuXG4gIF9nZXREZWZhdWx0QWxpZ25tZW50KCkge1xuICAgIHN3aXRjaCh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgcmV0dXJuIFJ0bCgpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHBvc2l0aW9uYWJsZSBwb3NzaWJsZSBwb3NpdGlvbnMgYnkgaXRlcmF0aW5nIHRocm91Z2ggYWxpZ25tZW50c1xuICAgKiBhbmQgcG9zaXRpb25zLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZXBvc2l0aW9uKCkge1xuICAgIGlmKHRoaXMuX2FsaWdubWVudHNFeGhhdXN0ZWQodGhpcy5wb3NpdGlvbikpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBuZXh0SXRlbSh0aGlzLnBvc2l0aW9uLCBQT1NJVElPTlMpO1xuICAgICAgdGhpcy5hbGlnbm1lbnQgPSBBTElHTk1FTlRTW3RoaXMucG9zaXRpb25dWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZWFsaWduKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIGRyb3Bkb3duIHBhbmUgcG9zc2libGUgcG9zaXRpb25zIGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGFsaWdubWVudHNcbiAgICogb24gdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlYWxpZ24oKSB7XG4gICAgdGhpcy5fYWRkVHJpZWRQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCB0aGlzLmFsaWdubWVudClcbiAgICB0aGlzLmFsaWdubWVudCA9IG5leHRJdGVtKHRoaXMuYWxpZ25tZW50LCBBTElHTk1FTlRTW3RoaXMucG9zaXRpb25dKVxuICB9XG5cbiAgX2FkZFRyaWVkUG9zaXRpb24ocG9zaXRpb24sIGFsaWdubWVudCkge1xuICAgIHRoaXMudHJpZWRQb3NpdGlvbnNbcG9zaXRpb25dID0gdGhpcy50cmllZFBvc2l0aW9uc1twb3NpdGlvbl0gfHwgW11cbiAgICB0aGlzLnRyaWVkUG9zaXRpb25zW3Bvc2l0aW9uXS5wdXNoKGFsaWdubWVudCk7XG4gIH1cblxuICBfcG9zaXRpb25zRXhoYXVzdGVkKCkge1xuICAgIHZhciBpc0V4aGF1c3RlZCA9IHRydWU7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IFBPU0lUSU9OUy5sZW5ndGg7IGkrKykge1xuICAgICAgaXNFeGhhdXN0ZWQgPSBpc0V4aGF1c3RlZCAmJiB0aGlzLl9hbGlnbm1lbnRzRXhoYXVzdGVkKFBPU0lUSU9OU1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBpc0V4aGF1c3RlZDtcbiAgfVxuXG4gIF9hbGlnbm1lbnRzRXhoYXVzdGVkKHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpZWRQb3NpdGlvbnNbcG9zaXRpb25dICYmIHRoaXMudHJpZWRQb3NpdGlvbnNbcG9zaXRpb25dLmxlbmd0aCA9PSBBTElHTk1FTlRTW3Bvc2l0aW9uXS5sZW5ndGg7XG4gIH1cblxuXG4gIC8vIFdoZW4gd2UncmUgdHJ5aW5nIHRvIGNlbnRlciwgd2UgZG9uJ3Qgd2FudCB0byBhcHBseSBvZmZzZXQgdGhhdCdzIGdvaW5nIHRvXG4gIC8vIHRha2UgdXMganVzdCBvZmYgY2VudGVyLCBzbyB3cmFwIGFyb3VuZCB0byByZXR1cm4gMCBmb3IgdGhlIGFwcHJvcHJpYXRlXG4gIC8vIG9mZnNldCBpbiB0aG9zZSBhbGlnbm1lbnRzLiAgVE9ETzogRmlndXJlIG91dCBpZiB3ZSB3YW50IHRvIG1ha2UgdGhpc1xuICAvLyBjb25maWd1cmFibGUgYmVoYXZpb3IuLi4gaXQgZmVlbHMgbW9yZSBpbnR1aXRpdmUsIGVzcGVjaWFsbHkgZm9yIHRvb2x0aXBzLCBidXRcbiAgLy8gaXQncyBwb3NzaWJsZSBzb21lb25lIG1pZ2h0IGFjdHVhbGx5IHdhbnQgdG8gc3RhcnQgZnJvbSBjZW50ZXIgYW5kIHRoZW4gbnVkZ2VcbiAgLy8gc2xpZ2h0bHkgb2ZmLlxuICBfZ2V0Vk9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZPZmZzZXQ7XG4gIH1cblxuICBfZ2V0SE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhPZmZzZXQ7XG4gIH1cblxuICBfc2V0UG9zaXRpb24oJGFuY2hvciwgJGVsZW1lbnQsICRwYXJlbnQpIHtcbiAgICBpZigkYW5jaG9yLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJyl7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYWxsb3dPdmVybGFwKSB7XG4gICAgICAvLyByZXN0b3JlIG9yaWdpbmFsIHBvc2l0aW9uICYgYWxpZ25tZW50IGJlZm9yZSBjaGVja2luZyBvdmVybGFwXG4gICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vcmlnaW5hbFBvc2l0aW9uO1xuICAgICAgdGhpcy5hbGlnbm1lbnQgPSB0aGlzLm9yaWdpbmFsQWxpZ25tZW50O1xuICAgIH1cblxuICAgICRlbGVtZW50Lm9mZnNldChCb3guR2V0RXhwbGljaXRPZmZzZXRzKCRlbGVtZW50LCAkYW5jaG9yLCB0aGlzLnBvc2l0aW9uLCB0aGlzLmFsaWdubWVudCwgdGhpcy5fZ2V0Vk9mZnNldCgpLCB0aGlzLl9nZXRIT2Zmc2V0KCkpKTtcblxuICAgIGlmKCF0aGlzLm9wdGlvbnMuYWxsb3dPdmVybGFwKSB7XG4gICAgICB2YXIgbWluT3ZlcmxhcCA9IDEwMDAwMDAwMDtcbiAgICAgIC8vIGRlZmF1bHQgY29vcmRpbmF0ZXMgdG8gaG93IHdlIHN0YXJ0LCBpbiBjYXNlIHdlIGNhbid0IGZpZ3VyZSBvdXQgYmV0dGVyXG4gICAgICB2YXIgbWluQ29vcmRpbmF0ZXMgPSB7cG9zaXRpb246IHRoaXMucG9zaXRpb24sIGFsaWdubWVudDogdGhpcy5hbGlnbm1lbnR9O1xuICAgICAgd2hpbGUoIXRoaXMuX3Bvc2l0aW9uc0V4aGF1c3RlZCgpKSB7XG4gICAgICAgIGxldCBvdmVybGFwID0gQm94Lk92ZXJsYXBBcmVhKCRlbGVtZW50LCAkcGFyZW50LCBmYWxzZSwgZmFsc2UsIHRoaXMub3B0aW9ucy5hbGxvd0JvdHRvbU92ZXJsYXApO1xuICAgICAgICBpZihvdmVybGFwID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYob3ZlcmxhcCA8IG1pbk92ZXJsYXApIHtcbiAgICAgICAgICBtaW5PdmVybGFwID0gb3ZlcmxhcDtcbiAgICAgICAgICBtaW5Db29yZGluYXRlcyA9IHtwb3NpdGlvbjogdGhpcy5wb3NpdGlvbiwgYWxpZ25tZW50OiB0aGlzLmFsaWdubWVudH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXBvc2l0aW9uKCk7XG5cbiAgICAgICAgJGVsZW1lbnQub2Zmc2V0KEJveC5HZXRFeHBsaWNpdE9mZnNldHMoJGVsZW1lbnQsICRhbmNob3IsIHRoaXMucG9zaXRpb24sIHRoaXMuYWxpZ25tZW50LCB0aGlzLl9nZXRWT2Zmc2V0KCksIHRoaXMuX2dldEhPZmZzZXQoKSkpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgZ2V0IHRocm91Z2ggdGhlIGVudGlyZSBsb29wLCB0aGVyZSB3YXMgbm8gbm9uLW92ZXJsYXBwaW5nXG4gICAgICAvLyBwb3NpdGlvbiBhdmFpbGFibGUuIFBpY2sgdGhlIHZlcnNpb24gd2l0aCBsZWFzdCBvdmVybGFwLlxuICAgICAgdGhpcy5wb3NpdGlvbiA9IG1pbkNvb3JkaW5hdGVzLnBvc2l0aW9uO1xuICAgICAgdGhpcy5hbGlnbm1lbnQgPSBtaW5Db29yZGluYXRlcy5hbGlnbm1lbnQ7XG4gICAgICAkZWxlbWVudC5vZmZzZXQoQm94LkdldEV4cGxpY2l0T2Zmc2V0cygkZWxlbWVudCwgJGFuY2hvciwgdGhpcy5wb3NpdGlvbiwgdGhpcy5hbGlnbm1lbnQsIHRoaXMuX2dldFZPZmZzZXQoKSwgdGhpcy5fZ2V0SE9mZnNldCgpKSk7XG4gICAgfVxuICB9XG5cbn1cblxuUG9zaXRpb25hYmxlLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogUG9zaXRpb24gb2YgcG9zaXRpb25hYmxlIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgb3IgYXV0by5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnYXV0bydcbiAgICovXG4gIHBvc2l0aW9uOiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGlnbm1lbnQgb2YgcG9zaXRpb25hYmxlIHJlbGF0aXZlIHRvIGFuY2hvci4gQ2FuIGJlIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgY2VudGVyLCBvciBhdXRvLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgYWxpZ25tZW50OiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGxvdyBvdmVybGFwIG9mIGNvbnRhaW5lci93aW5kb3cuIElmIGZhbHNlLCBkcm9wZG93biBwb3NpdGlvbmFibGUgZmlyc3RcbiAgICogdHJ5IHRvIHBvc2l0aW9uIGFzIGRlZmluZWQgYnkgZGF0YS1wb3NpdGlvbiBhbmQgZGF0YS1hbGlnbm1lbnQsIGJ1dFxuICAgKiByZXBvc2l0aW9uIGlmIGl0IHdvdWxkIGNhdXNlIGFuIG92ZXJmbG93LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYWxsb3dPdmVybGFwOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93IG92ZXJsYXAgb2Ygb25seSB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXIuIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uXG4gICAqIGJlaGF2aW9yIGZvciBkcm9wZG93bnMsIGFsbG93aW5nIHRoZSBkcm9wZG93biB0byBleHRlbmQgdGhlIGJvdHRvbSBvZiB0aGVcbiAgICogc2NyZWVuIGJ1dCBub3Qgb3RoZXJ3aXNlIGluZmx1ZW5jZSBvciBicmVhayBvdXQgb2YgdGhlIGNvbnRhaW5lci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYWxsb3dCb3R0b21PdmVybGFwOiB0cnVlLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyB0aGUgcG9zaXRpb25hYmxlIHNob3VsZCBiZSBzZXBhcmF0ZWQgdmVydGljYWxseSBmcm9tIGFuY2hvclxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIHZPZmZzZXQ6IDAsXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcGl4ZWxzIHRoZSBwb3NpdGlvbmFibGUgc2hvdWxkIGJlIHNlcGFyYXRlZCBob3Jpem9udGFsbHkgZnJvbSBhbmNob3JcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBoT2Zmc2V0OiAwLFxufVxuXG5leHBvcnQge1Bvc2l0aW9uYWJsZX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNb3Rpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24nO1xuXG5jb25zdCBNdXRhdGlvbk9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeGVzID0gWydXZWJLaXQnLCAnTW96JywgJ08nLCAnTXMnLCAnJ107XG4gIGZvciAodmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGAke3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgIGluIHdpbmRvdykge1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0oKSk7XG5cbmNvbnN0IHRyaWdnZXJzID0gKGVsLCB0eXBlKSA9PiB7XG4gIGVsLmRhdGEodHlwZSkuc3BsaXQoJyAnKS5mb3JFYWNoKGlkID0+IHtcbiAgICAkKGAjJHtpZH1gKVsgdHlwZSA9PT0gJ2Nsb3NlJyA/ICd0cmlnZ2VyJyA6ICd0cmlnZ2VySGFuZGxlciddKGAke3R5cGV9LnpmLnRyaWdnZXJgLCBbZWxdKTtcbiAgfSk7XG59O1xuXG52YXIgVHJpZ2dlcnMgPSB7XG4gIExpc3RlbmVyczoge1xuICAgIEJhc2ljOiB7fSxcbiAgICBHbG9iYWw6IHt9XG4gIH0sXG4gIEluaXRpYWxpemVyczoge31cbn1cblxuVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljICA9IHtcbiAgb3Blbkxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICB0cmlnZ2VycygkKHRoaXMpLCAnb3BlbicpO1xuICB9LFxuICBjbG9zZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2Nsb3NlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAnY2xvc2UnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ3RvZ2dsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICBjbG9zZWFibGVMaXN0ZW5lcjogZnVuY3Rpb24oZSkge1xuICAgIGxldCBhbmltYXRpb24gPSAkKHRoaXMpLmRhdGEoJ2Nsb3NhYmxlJyk7XG5cbiAgICAvLyBPbmx5IGNsb3NlIHRoZSBmaXJzdCBjbG9zYWJsZSBlbGVtZW50LiBTZWUgaHR0cHM6Ly9naXQuaW8vemYtNzgzM1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZihhbmltYXRpb24gIT09ICcnKXtcbiAgICAgIE1vdGlvbi5hbmltYXRlT3V0KCQodGhpcyksIGFuaW1hdGlvbiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2VkLnpmJyk7XG4gICAgICB9KTtcbiAgICB9ZWxzZXtcbiAgICAgICQodGhpcykuZmFkZU91dCgpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlRm9jdXNMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUtZm9jdXMnKTtcbiAgICAkKGAjJHtpZH1gKS50cmlnZ2VySGFuZGxlcigndG9nZ2xlLnpmLnRyaWdnZXInLCBbJCh0aGlzKV0pO1xuICB9XG59O1xuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLW9wZW5dIHdpbGwgcmV2ZWFsIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2NsaWNrLnpmLnRyaWdnZXInLCAnW2RhdGEtb3Blbl0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMub3Blbkxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zZV0gd2lsbCBjbG9zZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cbi8vIElmIHVzZWQgd2l0aG91dCBhIHZhbHVlIG9uIFtkYXRhLWNsb3NlXSwgdGhlIGV2ZW50IHdpbGwgYnViYmxlLCBhbGxvd2luZyBpdCB0byBjbG9zZSBhIHBhcmVudCBjb21wb25lbnQuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGVdIHdpbGwgdG9nZ2xlIGEgcGx1Z2luIHRoYXQgc3VwcG9ydHMgaXQgd2hlbiBjbGlja2VkLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xpY2suemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xufVxuXG4vLyBFbGVtZW50cyB3aXRoIFtkYXRhLWNsb3NhYmxlXSB3aWxsIHJlc3BvbmQgdG8gY2xvc2UuemYudHJpZ2dlciBldmVudHMuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VhYmxlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbG9zZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2Nsb3NlLnpmLnRyaWdnZXInLCAnW2RhdGEtY2xvc2VhYmxlXSwgW2RhdGEtY2xvc2FibGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlYWJsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS10b2dnbGUtZm9jdXNdIHdpbGwgcmVzcG9uZCB0byBjb21pbmcgaW4gYW5kIG91dCBvZiBmb2N1c1xuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUZvY3VzTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy50b2dnbGVGb2N1c0xpc3RlbmVyKTtcbiAgJGVsZW0ub24oJ2ZvY3VzLnpmLnRyaWdnZXIgYmx1ci56Zi50cmlnZ2VyJywgJ1tkYXRhLXRvZ2dsZS1mb2N1c10nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG59XG5cblxuXG4vLyBNb3JlIEdsb2JhbC9jb21wbGV4IGxpc3RlbmVycyBhbmQgdHJpZ2dlcnNcblRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwgID0ge1xuICByZXNpemVMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgcmVzaXplIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJyZXNpemVcIik7XG4gIH0sXG4gIHNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbigkbm9kZXMpIHtcbiAgICBpZighTXV0YXRpb25PYnNlcnZlcil7Ly9mYWxsYmFjayBmb3IgSUUgOVxuICAgICAgJG5vZGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vdHJpZ2dlciBhbGwgbGlzdGVuaW5nIGVsZW1lbnRzIGFuZCBzaWduYWwgYSBzY3JvbGwgZXZlbnRcbiAgICAkbm9kZXMuYXR0cignZGF0YS1ldmVudHMnLCBcInNjcm9sbFwiKTtcbiAgfSxcbiAgY2xvc2VNZUxpc3RlbmVyOiBmdW5jdGlvbihlLCBwbHVnaW5JZCl7XG4gICAgbGV0IHBsdWdpbiA9IGUubmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XG4gICAgbGV0IHBsdWdpbnMgPSAkKGBbZGF0YS0ke3BsdWdpbn1dYCkubm90KGBbZGF0YS15ZXRpLWJveD1cIiR7cGx1Z2luSWR9XCJdYCk7XG5cbiAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIGxldCBfdGhpcyA9ICQodGhpcyk7XG4gICAgICBfdGhpcy50cmlnZ2VySGFuZGxlcignY2xvc2UuemYudHJpZ2dlcicsIFtfdGhpc10pO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIEdsb2JhbCwgcGFyc2VzIHdob2xlIGRvY3VtZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lciA9IGZ1bmN0aW9uKHBsdWdpbk5hbWUpIHtcbiAgdmFyIHlldGlCb3hlcyA9ICQoJ1tkYXRhLXlldGktYm94XScpLFxuICAgICAgcGx1Z05hbWVzID0gWydkcm9wZG93bicsICd0b29sdGlwJywgJ3JldmVhbCddO1xuXG4gIGlmKHBsdWdpbk5hbWUpe1xuICAgIGlmKHR5cGVvZiBwbHVnaW5OYW1lID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMucHVzaChwbHVnaW5OYW1lKTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBsdWdpbk5hbWVbMF0gPT09ICdzdHJpbmcnKXtcbiAgICAgIHBsdWdOYW1lcyA9IHBsdWdOYW1lcy5jb25jYXQocGx1Z2luTmFtZSk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmVycm9yKCdQbHVnaW4gbmFtZXMgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICB9XG4gIGlmKHlldGlCb3hlcy5sZW5ndGgpe1xuICAgIGxldCBsaXN0ZW5lcnMgPSBwbHVnTmFtZXMubWFwKChuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYGNsb3NlbWUuemYuJHtuYW1lfWA7XG4gICAgfSkuam9pbignICcpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihsaXN0ZW5lcnMpLm9uKGxpc3RlbmVycywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5jbG9zZU1lTGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsIHRyaWdnZXIsIGxpc3RlbmVyKSB7XG4gIGxldCB0aW1lciwgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMyk7XG4gICQod2luZG93KS5vZmYodHJpZ2dlcikub24odHJpZ2dlciwgZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aW1lcikgeyBjbGVhclRpbWVvdXQodGltZXIpOyB9XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsaXN0ZW5lci5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9LCBkZWJvdW5jZSB8fCAxMCk7Ly9kZWZhdWx0IHRpbWUgdG8gZW1pdCBzY3JvbGwgZXZlbnRcbiAgfSk7XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uKGRlYm91bmNlKXtcbiAgbGV0ICRub2RlcyA9ICQoJ1tkYXRhLXJlc2l6ZV0nKTtcbiAgaWYoJG5vZGVzLmxlbmd0aCl7XG4gICAgZGVib3VuY2VHbG9iYWxMaXN0ZW5lcihkZWJvdW5jZSwgJ3Jlc2l6ZS56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkdsb2JhbC5yZXNpemVMaXN0ZW5lciwgJG5vZGVzKTtcbiAgfVxufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1zY3JvbGxdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdzY3JvbGwuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuc2Nyb2xsTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE11dGF0aW9uRXZlbnRzTGlzdGVuZXIgPSBmdW5jdGlvbigkZWxlbSkge1xuICBpZighTXV0YXRpb25PYnNlcnZlcil7IHJldHVybiBmYWxzZTsgfVxuICBsZXQgJG5vZGVzID0gJGVsZW0uZmluZCgnW2RhdGEtcmVzaXplXSwgW2RhdGEtc2Nyb2xsXSwgW2RhdGEtbXV0YXRlXScpO1xuXG4gIC8vZWxlbWVudCBjYWxsYmFja1xuICB2YXIgbGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZHNMaXN0KSB7XG4gICAgdmFyICR0YXJnZXQgPSAkKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udGFyZ2V0KTtcblxuICAgIC8vdHJpZ2dlciB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGVsZW1lbnQgZGVwZW5kaW5nIG9uIHR5cGVcbiAgICBzd2l0Y2ggKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0udHlwZSkge1xuICAgICAgY2FzZSBcImF0dHJpYnV0ZXNcIjpcbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInNjcm9sbFwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcignc2Nyb2xsbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LCB3aW5kb3cucGFnZVlPZmZzZXRdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJHRhcmdldC5hdHRyKFwiZGF0YS1ldmVudHNcIikgPT09IFwicmVzaXplXCIgJiYgbXV0YXRpb25SZWNvcmRzTGlzdFswXS5hdHRyaWJ1dGVOYW1lID09PSBcImRhdGEtZXZlbnRzXCIpIHtcbiAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXRdKTtcbiAgICAgICAgIH1cbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImNoaWxkTGlzdFwiOlxuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLmF0dHIoXCJkYXRhLWV2ZW50c1wiLFwibXV0YXRlXCIpO1xuICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpLnRyaWdnZXJIYW5kbGVyKCdtdXRhdGVtZS56Zi50cmlnZ2VyJywgWyR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIildKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vbm90aGluZ1xuICAgIH1cbiAgfTtcblxuICBpZiAoJG5vZGVzLmxlbmd0aCkge1xuICAgIC8vZm9yIGVhY2ggZWxlbWVudCB0aGF0IG5lZWRzIHRvIGxpc3RlbiBmb3IgcmVzaXppbmcsIHNjcm9sbGluZywgb3IgbXV0YXRpb24gYWRkIGEgc2luZ2xlIG9ic2VydmVyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gJG5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgdmFyIGVsZW1lbnRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24pO1xuICAgICAgZWxlbWVudE9ic2VydmVyLm9ic2VydmUoJG5vZGVzW2ldLCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogZmFsc2UsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZUZpbHRlcjogW1wiZGF0YS1ldmVudHNcIiwgXCJzdHlsZVwiXSB9KTtcbiAgICB9XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZE9wZW5MaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkQ2xvc2VMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyKCRkb2N1bWVudCk7XG5cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRSZXNpemVMaXN0ZW5lcigpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlbWVMaXN0ZW5lcigpO1xufVxuXG5cblRyaWdnZXJzLmluaXQgPSBmdW5jdGlvbiAoJCwgRm91bmRhdGlvbikge1xuICBvbkxvYWQoJCh3aW5kb3cpLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQudHJpZ2dlcnNJbml0aWFsaXplZCAhPT0gdHJ1ZSkge1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNpbXBsZUxpc3RlbmVycygpO1xuICAgICAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgJC50cmlnZ2Vyc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmKEZvdW5kYXRpb24pIHtcbiAgICBGb3VuZGF0aW9uLlRyaWdnZXJzID0gVHJpZ2dlcnM7XG4gICAgLy8gTGVnYWN5IGluY2x1ZGVkIHRvIGJlIGJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciBub3cuXG4gICAgRm91bmRhdGlvbi5JSGVhcllvdSA9IFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnNcbiAgfVxufVxuXG5leHBvcnQge1RyaWdnZXJzfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
