(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.mediaQuery", "./foundation.util.motion", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.sticky"] = factory(require("./foundation.core"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.sticky"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.mediaQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 17);
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
      "./js/entries/plugins/foundation.sticky.js":
      /*!*************************************************!*\
        !*** ./js/entries/plugins/foundation.sticky.js ***!
        \*************************************************/

      /*! exports provided: Foundation, Sticky */

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


        var _foundation_sticky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.sticky */
        "./js/foundation.sticky.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Sticky", function () {
          return _foundation_sticky__WEBPACK_IMPORTED_MODULE_1__["Sticky"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_sticky__WEBPACK_IMPORTED_MODULE_1__["Sticky"], 'Sticky');
        /***/

      },

      /***/
      "./js/foundation.sticky.js":
      /*!*********************************!*\
        !*** ./js/foundation.sticky.js ***!
        \*********************************/

      /*! exports provided: Sticky */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Sticky", function () {
          return Sticky;
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
         * Sticky module.
         * @module foundation.sticky
         * @requires foundation.util.triggers
         * @requires foundation.util.mediaQuery
         */


        var Sticky =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(Sticky, _Plugin);

          function Sticky() {
            _classCallCheck(this, Sticky);

            return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).apply(this, arguments));
          }

          _createClass(Sticky, [{
            key: "_setup",

            /**
             * Creates a new instance of a sticky thing.
             * @class
             * @name Sticky
             * @param {jQuery} element - jQuery object to make sticky.
             * @param {Object} options - options object passed when creating the element programmatically.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Sticky.defaults, this.$element.data(), options);
              this.className = 'Sticky'; // ie9 back compat
              // Triggers init is idempotent, just need to make sure it is initialized

              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              this._init();
            }
            /**
             * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
             * @function
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

              var $parent = this.$element.parent('[data-sticky-container]'),
                  id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'sticky'),
                  _this = this;

              if ($parent.length) {
                this.$container = $parent;
              } else {
                this.wasWrapped = true;
                this.$element.wrap(this.options.container);
                this.$container = this.$element.parent();
              }

              this.$container.addClass(this.options.containerClass);
              this.$element.addClass(this.options.stickyClass).attr({
                'data-resize': id,
                'data-mutate': id
              });

              if (this.options.anchor !== '') {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor).attr({
                  'data-mutate': id
                });
              }

              this.scrollCount = this.options.checkEvery;
              this.isStuck = false;
              this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
                //We calculate the container height to have correct values for anchor points offset calculation.
                _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;

                _this.$container.css('height', _this.containerHeight);

                _this.elemHeight = _this.containerHeight;

                if (_this.options.anchor !== '') {
                  _this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor);
                } else {
                  _this._parsePoints();
                }

                _this._setSizes(function () {
                  var scroll = window.pageYOffset;

                  _this._calc(false, scroll); //Unstick the element will ensure that proper classes are set.


                  if (!_this.isStuck) {
                    _this._removeSticky(scroll >= _this.topPoint ? false : true);
                  }
                });

                _this._events(id.split('-').reverse().join('-'));
              });
            }
            /**
             * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
             * @function
             * @private
             */

          }, {
            key: "_parsePoints",
            value: function _parsePoints() {
              var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor,
                  btm = this.options.btmAnchor == "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
                  pts = [top, btm],
                  breaks = {};

              for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
                var pt;

                if (typeof pts[i] === 'number') {
                  pt = pts[i];
                } else {
                  var place = pts[i].split(':'),
                      anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(place[0]));
                  pt = anchor.offset().top;

                  if (place[1] && place[1].toLowerCase() === 'bottom') {
                    pt += anchor[0].getBoundingClientRect().height;
                  }
                }

                breaks[i] = pt;
              }

              this.points = breaks;
              return;
            }
            /**
             * Adds event handlers for the scrolling element.
             * @private
             * @param {String} id - pseudo-random id for unique scroll event listener.
             */

          }, {
            key: "_events",
            value: function _events(id) {
              var _this = this,
                  scrollListener = this.scrollListener = "scroll.zf.".concat(id);

              if (this.isOn) {
                return;
              }

              if (this.canStick) {
                this.isOn = true;
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener, function (e) {
                  if (_this.scrollCount === 0) {
                    _this.scrollCount = _this.options.checkEvery;

                    _this._setSizes(function () {
                      _this._calc(false, window.pageYOffset);
                    });
                  } else {
                    _this.scrollCount--;

                    _this._calc(false, window.pageYOffset);
                  }
                });
              }

              this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function (e, el) {
                _this._eventsHandler(id);
              });
              this.$element.on('mutateme.zf.trigger', function (e, el) {
                _this._eventsHandler(id);
              });

              if (this.$anchor) {
                this.$anchor.on('mutateme.zf.trigger', function (e, el) {
                  _this._eventsHandler(id);
                });
              }
            }
            /**
             * Handler for events.
             * @private
             * @param {String} id - pseudo-random id for unique scroll event listener.
             */

          }, {
            key: "_eventsHandler",
            value: function _eventsHandler(id) {
              var _this = this,
                  scrollListener = this.scrollListener = "scroll.zf.".concat(id);

              _this._setSizes(function () {
                _this._calc(false);

                if (_this.canStick) {
                  if (!_this.isOn) {
                    _this._events(id);
                  }
                } else if (_this.isOn) {
                  _this._pauseListeners(scrollListener);
                }
              });
            }
            /**
             * Removes event handlers for scroll and change events on anchor.
             * @fires Sticky#pause
             * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
             */

          }, {
            key: "_pauseListeners",
            value: function _pauseListeners(scrollListener) {
              this.isOn = false;
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);
              /**
               * Fires when the plugin is paused due to resize event shrinking the view.
               * @event Sticky#pause
               * @private
               */

              this.$element.trigger('pause.zf.sticky');
            }
            /**
             * Called on every `scroll` event and on `_init`
             * fires functions based on booleans and cached values
             * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
             * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
             */

          }, {
            key: "_calc",
            value: function _calc(checkSizes, scroll) {
              if (checkSizes) {
                this._setSizes();
              }

              if (!this.canStick) {
                if (this.isStuck) {
                  this._removeSticky(true);
                }

                return false;
              }

              if (!scroll) {
                scroll = window.pageYOffset;
              }

              if (scroll >= this.topPoint) {
                if (scroll <= this.bottomPoint) {
                  if (!this.isStuck) {
                    this._setSticky();
                  }
                } else {
                  if (this.isStuck) {
                    this._removeSticky(false);
                  }
                }
              } else {
                if (this.isStuck) {
                  this._removeSticky(true);
                }
              }
            }
            /**
             * Causes the $element to become stuck.
             * Adds `position: fixed;`, and helper classes.
             * @fires Sticky#stuckto
             * @function
             * @private
             */

          }, {
            key: "_setSticky",
            value: function _setSticky() {
              var _this = this,
                  stickTo = this.options.stickTo,
                  mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
                  notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
                  css = {};

              css[mrgn] = "".concat(this.options[mrgn], "em");
              css[stickTo] = 0;
              css[notStuckTo] = 'auto';
              this.isStuck = true;
              this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css)
              /**
               * Fires when the $element has become `position: fixed;`
               * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
               * @event Sticky#stuckto
               */
              .trigger("sticky.zf.stuckto:".concat(stickTo));
              this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
                _this._setSizes();
              });
            }
            /**
             * Causes the $element to become unstuck.
             * Removes `position: fixed;`, and helper classes.
             * Adds other helper classes.
             * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
             * @fires Sticky#unstuckfrom
             * @private
             */

          }, {
            key: "_removeSticky",
            value: function _removeSticky(isTop) {
              var stickTo = this.options.stickTo,
                  stickToTop = stickTo === 'top',
                  css = {},
                  anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                  mrgn = stickToTop ? 'marginTop' : 'marginBottom',
                  notStuckTo = stickToTop ? 'bottom' : 'top',
                  topOrBottom = isTop ? 'top' : 'bottom';
              css[mrgn] = 0;
              css['bottom'] = 'auto';

              if (isTop) {
                css['top'] = 0;
              } else {
                css['top'] = anchorPt;
              }

              this.isStuck = false;
              this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css)
              /**
               * Fires when the $element has become anchored.
               * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
               * @event Sticky#unstuckfrom
               */
              .trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));
            }
            /**
             * Sets the $element and $container sizes for plugin.
             * Calls `_setBreakPoints`.
             * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
             * @private
             */

          }, {
            key: "_setSizes",
            value: function _setSizes(cb) {
              this.canStick = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"].is(this.options.stickyOn);

              if (!this.canStick) {
                if (cb && typeof cb === 'function') {
                  cb();
                }
              }

              var _this = this,
                  newElemWidth = this.$container[0].getBoundingClientRect().width,
                  comp = window.getComputedStyle(this.$container[0]),
                  pdngl = parseInt(comp['padding-left'], 10),
                  pdngr = parseInt(comp['padding-right'], 10);

              if (this.$anchor && this.$anchor.length) {
                this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
              } else {
                this._parsePoints();
              }

              this.$element.css({
                'max-width': "".concat(newElemWidth - pdngl - pdngr, "px")
              });
              var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;

              if (this.$element.css("display") == "none") {
                newContainerHeight = 0;
              }

              this.containerHeight = newContainerHeight;
              this.$container.css({
                height: newContainerHeight
              });
              this.elemHeight = newContainerHeight;

              if (!this.isStuck) {
                if (this.$element.hasClass('is-at-bottom')) {
                  var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                  this.$element.css('top', anchorPt);
                }
              }

              this._setBreakPoints(newContainerHeight, function () {
                if (cb && typeof cb === 'function') {
                  cb();
                }
              });
            }
            /**
             * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
             * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
             * @param {Function} cb - optional callback function to be called on completion.
             * @private
             */

          }, {
            key: "_setBreakPoints",
            value: function _setBreakPoints(elemHeight, cb) {
              if (!this.canStick) {
                if (cb && typeof cb === 'function') {
                  cb();
                } else {
                  return false;
                }
              }

              var mTop = emCalc(this.options.marginTop),
                  mBtm = emCalc(this.options.marginBottom),
                  topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
                  bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
                  // topPoint = this.$anchor.offset().top || this.points[0],
              // bottomPoint = topPoint + this.anchorHeight || this.points[1],
              winHeight = window.innerHeight;

              if (this.options.stickTo === 'top') {
                topPoint -= mTop;
                bottomPoint -= elemHeight + mTop;
              } else if (this.options.stickTo === 'bottom') {
                topPoint -= winHeight - (elemHeight + mBtm);
                bottomPoint -= winHeight - mBtm;
              } else {//this would be the stickTo: both option... tricky
              }

              this.topPoint = topPoint;
              this.bottomPoint = bottomPoint;

              if (cb && typeof cb === 'function') {
                cb();
              }
            }
            /**
             * Destroys the current sticky element.
             * Resets the element to the top position first.
             * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this._removeSticky(true);

              this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
                height: '',
                top: '',
                bottom: '',
                'max-width': ''
              }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');

              if (this.$anchor && this.$anchor.length) {
                this.$anchor.off('change.zf.sticky');
              }

              if (this.scrollListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);
              if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);

              if (this.wasWrapped) {
                this.$element.unwrap();
              } else {
                this.$container.removeClass(this.options.containerClass).css({
                  height: ''
                });
              }
            }
          }]);

          return Sticky;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

        Sticky.defaults = {
          /**
           * Customizable container template. Add your own classes for styling and sizing.
           * @option
           * @type {string}
           * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
           */
          container: '<div data-sticky-container></div>',

          /**
           * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
           * @option
           * @type {string}
           * @default 'top'
           */
          stickTo: 'top',

          /**
           * If anchored to a single element, the id of that element.
           * @option
           * @type {string}
           * @default ''
           */
          anchor: '',

          /**
           * If using more than one element as anchor points, the id of the top anchor.
           * @option
           * @type {string}
           * @default ''
           */
          topAnchor: '',

          /**
           * If using more than one element as anchor points, the id of the bottom anchor.
           * @option
           * @type {string}
           * @default ''
           */
          btmAnchor: '',

          /**
           * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
           * @option
           * @type {number}
           * @default 1
           */
          marginTop: 1,

          /**
           * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
           * @option
           * @type {number}
           * @default 1
           */
          marginBottom: 1,

          /**
           * Breakpoint string that is the minimum screen size an element should become sticky.
           * @option
           * @type {string}
           * @default 'medium'
           */
          stickyOn: 'medium',

          /**
           * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
           * @option
           * @type {string}
           * @default 'sticky'
           */
          stickyClass: 'sticky',

          /**
           * Class applied to sticky container. Foundation defaults to `sticky-container`.
           * @option
           * @type {string}
           * @default 'sticky-container'
           */
          containerClass: 'sticky-container',

          /**
           * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
           * @option
           * @type {number}
           * @default -1
           */
          checkEvery: -1
        };
        /**
         * Helper function to calculate em values
         * @param Number {em} - number of em's to calculate into pixels
         */

        function emCalc(em) {
          return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
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
      17:
      /*!*******************************************************!*\
        !*** multi ./js/entries/plugins/foundation.sticky.js ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.sticky.js */
        "./js/entries/plugins/foundation.sticky.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uc3RpY2t5LmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnN0aWNreS5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlN0aWNreSIsImVsZW1lbnQiLCJvcHRpb25zIiwiJCIsIlRyaWdnZXJzIiwiTWVkaWFRdWVyeSIsIiRwYXJlbnQiLCJpZCIsIkdldFlvRGlnaXRzIiwiX3RoaXMiLCJvbkxvYWQiLCJzY3JvbGwiLCJ3aW5kb3ciLCJ0b3AiLCJidG0iLCJkb2N1bWVudCIsInB0cyIsImJyZWFrcyIsImkiLCJsZW4iLCJwdCIsInBsYWNlIiwiYW5jaG9yIiwic2Nyb2xsTGlzdGVuZXIiLCJjaGVja1NpemVzIiwic3RpY2tUbyIsIm1yZ24iLCJub3RTdHVja1RvIiwiY3NzIiwiaXNUb3AiLCJzdGlja1RvVG9wIiwiYW5jaG9yUHQiLCJ0b3BPckJvdHRvbSIsImNiIiwibmV3RWxlbVdpZHRoIiwiY29tcCIsInBkbmdsIiwicGFyc2VJbnQiLCJwZG5nciIsIm5ld0NvbnRhaW5lckhlaWdodCIsImhlaWdodCIsImVsZW1IZWlnaHQiLCJtVG9wIiwiZW1DYWxjIiwibUJ0bSIsInRvcFBvaW50IiwiYm90dG9tUG9pbnQiLCJ3aW5IZWlnaHQiLCJib3R0b20iLCJQbHVnaW4iLCJjb250YWluZXIiLCJ0b3BBbmNob3IiLCJidG1BbmNob3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJzdGlja3lPbiIsInN0aWNreUNsYXNzIiwiY29udGFpbmVyQ2xhc3MiLCJjaGVja0V2ZXJ5IiwiTXV0YXRpb25PYnNlcnZlciIsInByZWZpeGVzIiwidHJpZ2dlcnMiLCJlbCIsInR5cGUiLCJMaXN0ZW5lcnMiLCJCYXNpYyIsIkdsb2JhbCIsIkluaXRpYWxpemVycyIsIm9wZW5MaXN0ZW5lciIsImNsb3NlTGlzdGVuZXIiLCJ0b2dnbGVMaXN0ZW5lciIsImNsb3NlYWJsZUxpc3RlbmVyIiwiZSIsImFuaW1hdGlvbiIsIk1vdGlvbiIsInRvZ2dsZUZvY3VzTGlzdGVuZXIiLCIkZWxlbSIsInJlc2l6ZUxpc3RlbmVyIiwiJG5vZGVzIiwiY2xvc2VNZUxpc3RlbmVyIiwicGx1Z2luIiwicGx1Z2lucyIsInlldGlCb3hlcyIsInBsdWdOYW1lcyIsInBsdWdpbk5hbWUiLCJjb25zb2xlIiwibGlzdGVuZXJzIiwiYXJncyIsIkFycmF5IiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwibGlzdGVuZXIiLCJkZWJvdW5jZSIsImRlYm91bmNlR2xvYmFsTGlzdGVuZXIiLCJsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uIiwiJHRhcmdldCIsIm11dGF0aW9uUmVjb3Jkc0xpc3QiLCJlbGVtZW50T2JzZXJ2ZXIiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCIkZG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsOEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsOEJBQUEsRUFBQSwwQkFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLG1CQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsOEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLG1CQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSx1REFBQSxFQUFBLG1EQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FB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QkEsQ0FBaEI7QUFDQUMsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSx5QkFBQUEsQ0FBQUEsU0FBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxpQkFBQUE7QUFDQUEsVUFBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFMRkEsU0FBQUE7O0FBU0FBLFFBQUFBLFFBQVEsQ0FBUkEsSUFBQUEsR0FBZ0IsVUFBQSxDQUFBLEVBQUEsVUFBQSxFQUF5QjtBQUN2Q00sVUFBQUEsTUFBQUEsQ0FBQUEsbURBQUFBLENBQUFBLFFBQUFBLENBQUFBLENBQUFBLENBQU9QLENBQUMsQ0FBRixNQUFFLENBQVJPLEVBQWtCLFlBQVk7QUFDNUIsZ0JBQUlQLENBQUMsQ0FBREEsbUJBQUFBLEtBQUosSUFBQSxFQUFvQztBQUNsQ0MsY0FBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFDQUEsY0FBQUEsUUFBUSxDQUFSQSxZQUFBQSxDQUFBQSxrQkFBQUE7QUFDQUQsY0FBQUEsQ0FBQyxDQUFEQSxtQkFBQUEsR0FBQUEsSUFBQUE7QUFDRDtBQUxITyxXQUFBQTs7QUFRQSxjQUFBLFVBQUEsRUFBZTtBQUNiWCxZQUFBQSxVQUFVLENBQVZBLFFBQUFBLEdBRGEsUUFDYkEsQ0FEYSxDQUViOztBQUNBQSxZQUFBQSxVQUFVLENBQVZBLFFBQUFBLEdBQXNCSyxRQUFRLENBQVJBLFlBQUFBLENBQXRCTCxrQkFBQUE7QUFDRDtBQWJISyxTQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25QQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTlVBO0NBVkEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3VuZGF0aW9uLXN0aWNreS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5zdGlja3lcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnN0aWNreVwiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm1vdGlvblwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbWVkaWFRdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbW90aW9uX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXzsiLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuXG5pbXBvcnQgeyBTdGlja3kgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLnN0aWNreSc7XG5Gb3VuZGF0aW9uLnBsdWdpbihTdGlja3ksICdTdGlja3knKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgU3RpY2t5IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQsIEdldFlvRGlnaXRzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnknO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuXG4vKipcbiAqIFN0aWNreSBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24uc3RpY2t5XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcbiAqL1xuXG5jbGFzcyBTdGlja3kgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhIHN0aWNreSB0aGluZy5cbiAgICogQGNsYXNzXG4gICAqIEBuYW1lIFN0aWNreVxuICAgKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gbWFrZSBzdGlja3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyBvYmplY3QgcGFzc2VkIHdoZW4gY3JlYXRpbmcgdGhlIGVsZW1lbnQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIF9zZXR1cChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIFN0aWNreS5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ1N0aWNreSc7IC8vIGllOSBiYWNrIGNvbXBhdFxuXG4gICAgLy8gVHJpZ2dlcnMgaW5pdCBpcyBpZGVtcG90ZW50LCBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIGl0IGlzIGluaXRpYWxpemVkXG4gICAgVHJpZ2dlcnMuaW5pdCgkKTtcblxuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgc3RpY2t5IGVsZW1lbnQgYnkgYWRkaW5nIGNsYXNzZXMsIGdldHRpbmcvc2V0dGluZyBkaW1lbnNpb25zLCBicmVha3BvaW50cyBhbmQgYXR0cmlidXRlc1xuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIE1lZGlhUXVlcnkuX2luaXQoKTtcblxuICAgIHZhciAkcGFyZW50ID0gdGhpcy4kZWxlbWVudC5wYXJlbnQoJ1tkYXRhLXN0aWNreS1jb250YWluZXJdJyksXG4gICAgICAgIGlkID0gdGhpcy4kZWxlbWVudFswXS5pZCB8fCBHZXRZb0RpZ2l0cyg2LCAnc3RpY2t5JyksXG4gICAgICAgIF90aGlzID0gdGhpcztcblxuICAgIGlmKCRwYXJlbnQubGVuZ3RoKXtcbiAgICAgIHRoaXMuJGNvbnRhaW5lciA9ICRwYXJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2FzV3JhcHBlZCA9IHRydWU7XG4gICAgICB0aGlzLiRlbGVtZW50LndyYXAodGhpcy5vcHRpb25zLmNvbnRhaW5lcik7XG4gICAgICB0aGlzLiRjb250YWluZXIgPSB0aGlzLiRlbGVtZW50LnBhcmVudCgpO1xuICAgIH1cbiAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmNvbnRhaW5lckNsYXNzKTtcblxuICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnN0aWNreUNsYXNzKS5hdHRyKHsgJ2RhdGEtcmVzaXplJzogaWQsICdkYXRhLW11dGF0ZSc6IGlkIH0pO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYW5jaG9yICE9PSAnJykge1xuICAgICAgICAkKCcjJyArIF90aGlzLm9wdGlvbnMuYW5jaG9yKS5hdHRyKHsgJ2RhdGEtbXV0YXRlJzogaWQgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxDb3VudCA9IHRoaXMub3B0aW9ucy5jaGVja0V2ZXJ5O1xuICAgIHRoaXMuaXNTdHVjayA9IGZhbHNlO1xuICAgIHRoaXMub25Mb2FkTGlzdGVuZXIgPSBvbkxvYWQoJCh3aW5kb3cpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvL1dlIGNhbGN1bGF0ZSB0aGUgY29udGFpbmVyIGhlaWdodCB0byBoYXZlIGNvcnJlY3QgdmFsdWVzIGZvciBhbmNob3IgcG9pbnRzIG9mZnNldCBjYWxjdWxhdGlvbi5cbiAgICAgIF90aGlzLmNvbnRhaW5lckhlaWdodCA9IF90aGlzLiRlbGVtZW50LmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIgPyAwIDogX3RoaXMuJGVsZW1lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgX3RoaXMuJGNvbnRhaW5lci5jc3MoJ2hlaWdodCcsIF90aGlzLmNvbnRhaW5lckhlaWdodCk7XG4gICAgICBfdGhpcy5lbGVtSGVpZ2h0ID0gX3RoaXMuY29udGFpbmVySGVpZ2h0O1xuICAgICAgaWYgKF90aGlzLm9wdGlvbnMuYW5jaG9yICE9PSAnJykge1xuICAgICAgICBfdGhpcy4kYW5jaG9yID0gJCgnIycgKyBfdGhpcy5vcHRpb25zLmFuY2hvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5fcGFyc2VQb2ludHMoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuX3NldFNpemVzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgX3RoaXMuX2NhbGMoZmFsc2UsIHNjcm9sbCk7XG4gICAgICAgIC8vVW5zdGljayB0aGUgZWxlbWVudCB3aWxsIGVuc3VyZSB0aGF0IHByb3BlciBjbGFzc2VzIGFyZSBzZXQuXG4gICAgICAgIGlmICghX3RoaXMuaXNTdHVjaykge1xuICAgICAgICAgIF90aGlzLl9yZW1vdmVTdGlja3koKHNjcm9sbCA+PSBfdGhpcy50b3BQb2ludCkgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIF90aGlzLl9ldmVudHMoaWQuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLScpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB1c2luZyBtdWx0aXBsZSBlbGVtZW50cyBhcyBhbmNob3JzLCBjYWxjdWxhdGVzIHRoZSB0b3AgYW5kIGJvdHRvbSBwaXhlbCB2YWx1ZXMgdGhlIHN0aWNreSB0aGluZyBzaG91bGQgc3RpY2sgYW5kIHVuc3RpY2sgb24uXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3BhcnNlUG9pbnRzKCkge1xuICAgIHZhciB0b3AgPSB0aGlzLm9wdGlvbnMudG9wQW5jaG9yID09IFwiXCIgPyAxIDogdGhpcy5vcHRpb25zLnRvcEFuY2hvcixcbiAgICAgICAgYnRtID0gdGhpcy5vcHRpb25zLmJ0bUFuY2hvcj09IFwiXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IDogdGhpcy5vcHRpb25zLmJ0bUFuY2hvcixcbiAgICAgICAgcHRzID0gW3RvcCwgYnRtXSxcbiAgICAgICAgYnJlYWtzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHB0cy5sZW5ndGg7IGkgPCBsZW4gJiYgcHRzW2ldOyBpKyspIHtcbiAgICAgIHZhciBwdDtcbiAgICAgIGlmICh0eXBlb2YgcHRzW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICBwdCA9IHB0c1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwbGFjZSA9IHB0c1tpXS5zcGxpdCgnOicpLFxuICAgICAgICAgICAgYW5jaG9yID0gJChgIyR7cGxhY2VbMF19YCk7XG5cbiAgICAgICAgcHQgPSBhbmNob3Iub2Zmc2V0KCkudG9wO1xuICAgICAgICBpZiAocGxhY2VbMV0gJiYgcGxhY2VbMV0udG9Mb3dlckNhc2UoKSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICBwdCArPSBhbmNob3JbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVha3NbaV0gPSBwdDtcbiAgICB9XG5cblxuICAgIHRoaXMucG9pbnRzID0gYnJlYWtzO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQuXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIHBzZXVkby1yYW5kb20gaWQgZm9yIHVuaXF1ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIuXG4gICAqL1xuICBfZXZlbnRzKGlkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgc2Nyb2xsTGlzdGVuZXIgPSB0aGlzLnNjcm9sbExpc3RlbmVyID0gYHNjcm9sbC56Zi4ke2lkfWA7XG4gICAgaWYgKHRoaXMuaXNPbikgeyByZXR1cm47IH1cbiAgICBpZiAodGhpcy5jYW5TdGljaykge1xuICAgICAgdGhpcy5pc09uID0gdHJ1ZTtcbiAgICAgICQod2luZG93KS5vZmYoc2Nyb2xsTGlzdGVuZXIpXG4gICAgICAgICAgICAgICAub24oc2Nyb2xsTGlzdGVuZXIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnNjcm9sbENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsQ291bnQgPSBfdGhpcy5vcHRpb25zLmNoZWNrRXZlcnk7XG4gICAgICAgICAgICAgICAgICAgX3RoaXMuX3NldFNpemVzKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2NhbGMoZmFsc2UsIHdpbmRvdy5wYWdlWU9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICBfdGhpcy5fY2FsYyhmYWxzZSwgd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9mZigncmVzaXplbWUuemYudHJpZ2dlcicpXG4gICAgICAgICAgICAgICAgIC5vbigncmVzaXplbWUuemYudHJpZ2dlcicsIGZ1bmN0aW9uKGUsIGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9ldmVudHNIYW5kbGVyKGlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBmdW5jdGlvbiAoZSwgZWwpIHtcbiAgICAgICAgX3RoaXMuX2V2ZW50c0hhbmRsZXIoaWQpO1xuICAgIH0pO1xuXG4gICAgaWYodGhpcy4kYW5jaG9yKSB7XG4gICAgICB0aGlzLiRhbmNob3Iub24oJ211dGF0ZW1lLnpmLnRyaWdnZXInLCBmdW5jdGlvbiAoZSwgZWwpIHtcbiAgICAgICAgICBfdGhpcy5fZXZlbnRzSGFuZGxlcihpZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgZXZlbnRzLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSBwc2V1ZG8tcmFuZG9tIGlkIGZvciB1bmlxdWUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgKi9cbiAgX2V2ZW50c0hhbmRsZXIoaWQpIHtcbiAgICAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBzY3JvbGxMaXN0ZW5lciA9IHRoaXMuc2Nyb2xsTGlzdGVuZXIgPSBgc2Nyb2xsLnpmLiR7aWR9YDtcblxuICAgICAgIF90aGlzLl9zZXRTaXplcyhmdW5jdGlvbigpIHtcbiAgICAgICBfdGhpcy5fY2FsYyhmYWxzZSk7XG4gICAgICAgaWYgKF90aGlzLmNhblN0aWNrKSB7XG4gICAgICAgICBpZiAoIV90aGlzLmlzT24pIHtcbiAgICAgICAgICAgX3RoaXMuX2V2ZW50cyhpZCk7XG4gICAgICAgICB9XG4gICAgICAgfSBlbHNlIGlmIChfdGhpcy5pc09uKSB7XG4gICAgICAgICBfdGhpcy5fcGF1c2VMaXN0ZW5lcnMoc2Nyb2xsTGlzdGVuZXIpO1xuICAgICAgIH1cbiAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBldmVudCBoYW5kbGVycyBmb3Igc2Nyb2xsIGFuZCBjaGFuZ2UgZXZlbnRzIG9uIGFuY2hvci5cbiAgICogQGZpcmVzIFN0aWNreSNwYXVzZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2Nyb2xsTGlzdGVuZXIgLSB1bmlxdWUsIG5hbWVzcGFjZWQgc2Nyb2xsIGxpc3RlbmVyIGF0dGFjaGVkIHRvIGB3aW5kb3dgXG4gICAqL1xuICBfcGF1c2VMaXN0ZW5lcnMoc2Nyb2xsTGlzdGVuZXIpIHtcbiAgICB0aGlzLmlzT24gPSBmYWxzZTtcbiAgICAkKHdpbmRvdykub2ZmKHNjcm9sbExpc3RlbmVyKTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBpcyBwYXVzZWQgZHVlIHRvIHJlc2l6ZSBldmVudCBzaHJpbmtpbmcgdGhlIHZpZXcuXG4gICAgICogQGV2ZW50IFN0aWNreSNwYXVzZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcigncGF1c2UuemYuc3RpY2t5Jyk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGV2ZXJ5IGBzY3JvbGxgIGV2ZW50IGFuZCBvbiBgX2luaXRgXG4gICAqIGZpcmVzIGZ1bmN0aW9ucyBiYXNlZCBvbiBib29sZWFucyBhbmQgY2FjaGVkIHZhbHVlc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNoZWNrU2l6ZXMgLSB0cnVlIGlmIHBsdWdpbiBzaG91bGQgcmVjYWxjdWxhdGUgc2l6ZXMgYW5kIGJyZWFrcG9pbnRzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2Nyb2xsIC0gY3VycmVudCBzY3JvbGwgcG9zaXRpb24gcGFzc2VkIGZyb20gc2Nyb2xsIGV2ZW50IGNiIGZ1bmN0aW9uLiBJZiBub3QgcGFzc2VkLCBkZWZhdWx0cyB0byBgd2luZG93LnBhZ2VZT2Zmc2V0YC5cbiAgICovXG4gIF9jYWxjKGNoZWNrU2l6ZXMsIHNjcm9sbCkge1xuICAgIGlmIChjaGVja1NpemVzKSB7IHRoaXMuX3NldFNpemVzKCk7IH1cblxuICAgIGlmICghdGhpcy5jYW5TdGljaykge1xuICAgICAgaWYgKHRoaXMuaXNTdHVjaykge1xuICAgICAgICB0aGlzLl9yZW1vdmVTdGlja3kodHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFzY3JvbGwpIHsgc2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0OyB9XG5cbiAgICBpZiAoc2Nyb2xsID49IHRoaXMudG9wUG9pbnQpIHtcbiAgICAgIGlmIChzY3JvbGwgPD0gdGhpcy5ib3R0b21Qb2ludCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdHVjaykge1xuICAgICAgICAgIHRoaXMuX3NldFN0aWNreSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc1N0dWNrKSB7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlU3RpY2t5KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc1N0dWNrKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZVN0aWNreSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2F1c2VzIHRoZSAkZWxlbWVudCB0byBiZWNvbWUgc3R1Y2suXG4gICAqIEFkZHMgYHBvc2l0aW9uOiBmaXhlZDtgLCBhbmQgaGVscGVyIGNsYXNzZXMuXG4gICAqIEBmaXJlcyBTdGlja3kjc3R1Y2t0b1xuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRTdGlja3koKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgc3RpY2tUbyA9IHRoaXMub3B0aW9ucy5zdGlja1RvLFxuICAgICAgICBtcmduID0gc3RpY2tUbyA9PT0gJ3RvcCcgPyAnbWFyZ2luVG9wJyA6ICdtYXJnaW5Cb3R0b20nLFxuICAgICAgICBub3RTdHVja1RvID0gc3RpY2tUbyA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnLFxuICAgICAgICBjc3MgPSB7fTtcblxuICAgIGNzc1ttcmduXSA9IGAke3RoaXMub3B0aW9uc1ttcmduXX1lbWA7XG4gICAgY3NzW3N0aWNrVG9dID0gMDtcbiAgICBjc3Nbbm90U3R1Y2tUb10gPSAnYXV0byc7XG4gICAgdGhpcy5pc1N0dWNrID0gdHJ1ZTtcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGBpcy1hbmNob3JlZCBpcy1hdC0ke25vdFN0dWNrVG99YClcbiAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGBpcy1zdHVjayBpcy1hdC0ke3N0aWNrVG99YClcbiAgICAgICAgICAgICAgICAgLmNzcyhjc3MpXG4gICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSAkZWxlbWVudCBoYXMgYmVjb21lIGBwb3NpdGlvbjogZml4ZWQ7YFxuICAgICAgICAgICAgICAgICAgKiBOYW1lc3BhY2VkIHRvIGB0b3BgIG9yIGBib3R0b21gLCBlLmcuIGBzdGlja3kuemYuc3R1Y2t0bzp0b3BgXG4gICAgICAgICAgICAgICAgICAqIEBldmVudCBTdGlja3kjc3R1Y2t0b1xuICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgLnRyaWdnZXIoYHN0aWNreS56Zi5zdHVja3RvOiR7c3RpY2tUb31gKTtcbiAgICB0aGlzLiRlbGVtZW50Lm9uKFwidHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kIE1TVHJhbnNpdGlvbkVuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLl9zZXRTaXplcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhdXNlcyB0aGUgJGVsZW1lbnQgdG8gYmVjb21lIHVuc3R1Y2suXG4gICAqIFJlbW92ZXMgYHBvc2l0aW9uOiBmaXhlZDtgLCBhbmQgaGVscGVyIGNsYXNzZXMuXG4gICAqIEFkZHMgb3RoZXIgaGVscGVyIGNsYXNzZXMuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNUb3AgLSB0ZWxscyB0aGUgZnVuY3Rpb24gaWYgdGhlICRlbGVtZW50IHNob3VsZCBhbmNob3IgdG8gdGhlIHRvcCBvciBib3R0b20gb2YgaXRzICRhbmNob3IgZWxlbWVudC5cbiAgICogQGZpcmVzIFN0aWNreSN1bnN0dWNrZnJvbVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlbW92ZVN0aWNreShpc1RvcCkge1xuICAgIHZhciBzdGlja1RvID0gdGhpcy5vcHRpb25zLnN0aWNrVG8sXG4gICAgICAgIHN0aWNrVG9Ub3AgPSBzdGlja1RvID09PSAndG9wJyxcbiAgICAgICAgY3NzID0ge30sXG4gICAgICAgIGFuY2hvclB0ID0gKHRoaXMucG9pbnRzID8gdGhpcy5wb2ludHNbMV0gLSB0aGlzLnBvaW50c1swXSA6IHRoaXMuYW5jaG9ySGVpZ2h0KSAtIHRoaXMuZWxlbUhlaWdodCxcbiAgICAgICAgbXJnbiA9IHN0aWNrVG9Ub3AgPyAnbWFyZ2luVG9wJyA6ICdtYXJnaW5Cb3R0b20nLFxuICAgICAgICBub3RTdHVja1RvID0gc3RpY2tUb1RvcCA/ICdib3R0b20nIDogJ3RvcCcsXG4gICAgICAgIHRvcE9yQm90dG9tID0gaXNUb3AgPyAndG9wJyA6ICdib3R0b20nO1xuXG4gICAgY3NzW21yZ25dID0gMDtcblxuICAgIGNzc1snYm90dG9tJ10gPSAnYXV0byc7XG4gICAgaWYoaXNUb3ApIHtcbiAgICAgIGNzc1sndG9wJ10gPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3NbJ3RvcCddID0gYW5jaG9yUHQ7XG4gICAgfVxuXG4gICAgdGhpcy5pc1N0dWNrID0gZmFsc2U7XG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhgaXMtc3R1Y2sgaXMtYXQtJHtzdGlja1RvfWApXG4gICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhgaXMtYW5jaG9yZWQgaXMtYXQtJHt0b3BPckJvdHRvbX1gKVxuICAgICAgICAgICAgICAgICAuY3NzKGNzcylcbiAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAqIEZpcmVzIHdoZW4gdGhlICRlbGVtZW50IGhhcyBiZWNvbWUgYW5jaG9yZWQuXG4gICAgICAgICAgICAgICAgICAqIE5hbWVzcGFjZWQgdG8gYHRvcGAgb3IgYGJvdHRvbWAsIGUuZy4gYHN0aWNreS56Zi51bnN0dWNrZnJvbTpib3R0b21gXG4gICAgICAgICAgICAgICAgICAqIEBldmVudCBTdGlja3kjdW5zdHVja2Zyb21cbiAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgIC50cmlnZ2VyKGBzdGlja3kuemYudW5zdHVja2Zyb206JHt0b3BPckJvdHRvbX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSAkZWxlbWVudCBhbmQgJGNvbnRhaW5lciBzaXplcyBmb3IgcGx1Z2luLlxuICAgKiBDYWxscyBgX3NldEJyZWFrUG9pbnRzYC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgLSBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBmaXJlIG9uIGNvbXBsZXRpb24gb2YgYF9zZXRCcmVha1BvaW50c2AuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0U2l6ZXMoY2IpIHtcbiAgICB0aGlzLmNhblN0aWNrID0gTWVkaWFRdWVyeS5pcyh0aGlzLm9wdGlvbnMuc3RpY2t5T24pO1xuICAgIGlmICghdGhpcy5jYW5TdGljaykge1xuICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgeyBjYigpOyB9XG4gICAgfVxuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIG5ld0VsZW1XaWR0aCA9IHRoaXMuJGNvbnRhaW5lclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgICAgY29tcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJGNvbnRhaW5lclswXSksXG4gICAgICAgIHBkbmdsID0gcGFyc2VJbnQoY29tcFsncGFkZGluZy1sZWZ0J10sIDEwKSxcbiAgICAgICAgcGRuZ3IgPSBwYXJzZUludChjb21wWydwYWRkaW5nLXJpZ2h0J10sIDEwKTtcblxuICAgIGlmICh0aGlzLiRhbmNob3IgJiYgdGhpcy4kYW5jaG9yLmxlbmd0aCkge1xuICAgICAgdGhpcy5hbmNob3JIZWlnaHQgPSB0aGlzLiRhbmNob3JbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wYXJzZVBvaW50cygpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQuY3NzKHtcbiAgICAgICdtYXgtd2lkdGgnOiBgJHtuZXdFbGVtV2lkdGggLSBwZG5nbCAtIHBkbmdyfXB4YFxuICAgIH0pO1xuXG4gICAgdmFyIG5ld0NvbnRhaW5lckhlaWdodCA9IHRoaXMuJGVsZW1lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuICAgIGlmICh0aGlzLiRlbGVtZW50LmNzcyhcImRpc3BsYXlcIikgPT0gXCJub25lXCIpIHtcbiAgICAgIG5ld0NvbnRhaW5lckhlaWdodCA9IDA7XG4gICAgfVxuICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gbmV3Q29udGFpbmVySGVpZ2h0O1xuICAgIHRoaXMuJGNvbnRhaW5lci5jc3Moe1xuICAgICAgaGVpZ2h0OiBuZXdDb250YWluZXJIZWlnaHRcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1IZWlnaHQgPSBuZXdDb250YWluZXJIZWlnaHQ7XG5cbiAgICBpZiAoIXRoaXMuaXNTdHVjaykge1xuICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLWF0LWJvdHRvbScpKSB7XG4gICAgICAgIHZhciBhbmNob3JQdCA9ICh0aGlzLnBvaW50cyA/IHRoaXMucG9pbnRzWzFdIC0gdGhpcy4kY29udGFpbmVyLm9mZnNldCgpLnRvcCA6IHRoaXMuYW5jaG9ySGVpZ2h0KSAtIHRoaXMuZWxlbUhlaWdodDtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jc3MoJ3RvcCcsIGFuY2hvclB0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zZXRCcmVha1BvaW50cyhuZXdDb250YWluZXJIZWlnaHQsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgeyBjYigpOyB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXBwZXIgYW5kIGxvd2VyIGJyZWFrcG9pbnRzIGZvciB0aGUgZWxlbWVudCB0byBiZWNvbWUgc3RpY2t5L3Vuc3RpY2t5LlxuICAgKiBAcGFyYW0ge051bWJlcn0gZWxlbUhlaWdodCAtIHB4IHZhbHVlIGZvciBzdGlja3kuJGVsZW1lbnQgaGVpZ2h0LCBjYWxjdWxhdGVkIGJ5IGBfc2V0U2l6ZXNgLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBjb21wbGV0aW9uLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldEJyZWFrUG9pbnRzKGVsZW1IZWlnaHQsIGNiKSB7XG4gICAgaWYgKCF0aGlzLmNhblN0aWNrKSB7XG4gICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7IGNiKCk7IH1cbiAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9XG4gICAgdmFyIG1Ub3AgPSBlbUNhbGModGhpcy5vcHRpb25zLm1hcmdpblRvcCksXG4gICAgICAgIG1CdG0gPSBlbUNhbGModGhpcy5vcHRpb25zLm1hcmdpbkJvdHRvbSksXG4gICAgICAgIHRvcFBvaW50ID0gdGhpcy5wb2ludHMgPyB0aGlzLnBvaW50c1swXSA6IHRoaXMuJGFuY2hvci5vZmZzZXQoKS50b3AsXG4gICAgICAgIGJvdHRvbVBvaW50ID0gdGhpcy5wb2ludHMgPyB0aGlzLnBvaW50c1sxXSA6IHRvcFBvaW50ICsgdGhpcy5hbmNob3JIZWlnaHQsXG4gICAgICAgIC8vIHRvcFBvaW50ID0gdGhpcy4kYW5jaG9yLm9mZnNldCgpLnRvcCB8fCB0aGlzLnBvaW50c1swXSxcbiAgICAgICAgLy8gYm90dG9tUG9pbnQgPSB0b3BQb2ludCArIHRoaXMuYW5jaG9ySGVpZ2h0IHx8IHRoaXMucG9pbnRzWzFdLFxuICAgICAgICB3aW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0aWNrVG8gPT09ICd0b3AnKSB7XG4gICAgICB0b3BQb2ludCAtPSBtVG9wO1xuICAgICAgYm90dG9tUG9pbnQgLT0gKGVsZW1IZWlnaHQgKyBtVG9wKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zdGlja1RvID09PSAnYm90dG9tJykge1xuICAgICAgdG9wUG9pbnQgLT0gKHdpbkhlaWdodCAtIChlbGVtSGVpZ2h0ICsgbUJ0bSkpO1xuICAgICAgYm90dG9tUG9pbnQgLT0gKHdpbkhlaWdodCAtIG1CdG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3RoaXMgd291bGQgYmUgdGhlIHN0aWNrVG86IGJvdGggb3B0aW9uLi4uIHRyaWNreVxuICAgIH1cblxuICAgIHRoaXMudG9wUG9pbnQgPSB0b3BQb2ludDtcbiAgICB0aGlzLmJvdHRvbVBvaW50ID0gYm90dG9tUG9pbnQ7XG5cbiAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7IGNiKCk7IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgY3VycmVudCBzdGlja3kgZWxlbWVudC5cbiAgICogUmVzZXRzIHRoZSBlbGVtZW50IHRvIHRoZSB0b3AgcG9zaXRpb24gZmlyc3QuXG4gICAqIFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzLCBKUy1hZGRlZCBjc3MgcHJvcGVydGllcyBhbmQgY2xhc3NlcywgYW5kIHVud3JhcHMgdGhlICRlbGVtZW50IGlmIHRoZSBKUyBhZGRlZCB0aGUgJGNvbnRhaW5lci5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVTdGlja3kodHJ1ZSk7XG5cbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGAke3RoaXMub3B0aW9ucy5zdGlja3lDbGFzc30gaXMtYW5jaG9yZWQgaXMtYXQtdG9wYClcbiAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJycsXG4gICAgICAgICAgICAgICAgICAgJ21heC13aWR0aCc6ICcnXG4gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgIC5vZmYoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInKVxuICAgICAgICAgICAgICAgICAub2ZmKCdtdXRhdGVtZS56Zi50cmlnZ2VyJyk7XG4gICAgaWYgKHRoaXMuJGFuY2hvciAmJiB0aGlzLiRhbmNob3IubGVuZ3RoKSB7XG4gICAgICB0aGlzLiRhbmNob3Iub2ZmKCdjaGFuZ2UuemYuc3RpY2t5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjcm9sbExpc3RlbmVyKSAkKHdpbmRvdykub2ZmKHRoaXMuc2Nyb2xsTGlzdGVuZXIpXG4gICAgaWYgKHRoaXMub25Mb2FkTGlzdGVuZXIpICQod2luZG93KS5vZmYodGhpcy5vbkxvYWRMaXN0ZW5lcilcblxuICAgIGlmICh0aGlzLndhc1dyYXBwZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudW53cmFwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuY29udGFpbmVyQ2xhc3MpXG4gICAgICAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnJ1xuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cblN0aWNreS5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIEN1c3RvbWl6YWJsZSBjb250YWluZXIgdGVtcGxhdGUuIEFkZCB5b3VyIG93biBjbGFzc2VzIGZvciBzdHlsaW5nIGFuZCBzaXppbmcuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJyZsdDtkaXYgZGF0YS1zdGlja3ktY29udGFpbmVyJmd0OyZsdDsvZGl2Jmd0OydcbiAgICovXG4gIGNvbnRhaW5lcjogJzxkaXYgZGF0YS1zdGlja3ktY29udGFpbmVyPjwvZGl2PicsXG4gIC8qKlxuICAgKiBMb2NhdGlvbiBpbiB0aGUgdmlldyB0aGUgZWxlbWVudCBzdGlja3MgdG8uIENhbiBiZSBgJ3RvcCdgIG9yIGAnYm90dG9tJ2AuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ3RvcCdcbiAgICovXG4gIHN0aWNrVG86ICd0b3AnLFxuICAvKipcbiAgICogSWYgYW5jaG9yZWQgdG8gYSBzaW5nbGUgZWxlbWVudCwgdGhlIGlkIG9mIHRoYXQgZWxlbWVudC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKi9cbiAgYW5jaG9yOiAnJyxcbiAgLyoqXG4gICAqIElmIHVzaW5nIG1vcmUgdGhhbiBvbmUgZWxlbWVudCBhcyBhbmNob3IgcG9pbnRzLCB0aGUgaWQgb2YgdGhlIHRvcCBhbmNob3IuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJydcbiAgICovXG4gIHRvcEFuY2hvcjogJycsXG4gIC8qKlxuICAgKiBJZiB1c2luZyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgYXMgYW5jaG9yIHBvaW50cywgdGhlIGlkIG9mIHRoZSBib3R0b20gYW5jaG9yLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICBidG1BbmNob3I6ICcnLFxuICAvKipcbiAgICogTWFyZ2luLCBpbiBgZW1gJ3MgdG8gYXBwbHkgdG8gdGhlIHRvcCBvZiB0aGUgZWxlbWVudCB3aGVuIGl0IGJlY29tZXMgc3RpY2t5LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIG1hcmdpblRvcDogMSxcbiAgLyoqXG4gICAqIE1hcmdpbiwgaW4gYGVtYCdzIHRvIGFwcGx5IHRvIHRoZSBib3R0b20gb2YgdGhlIGVsZW1lbnQgd2hlbiBpdCBiZWNvbWVzIHN0aWNreS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAxXG4gICAqL1xuICBtYXJnaW5Cb3R0b206IDEsXG4gIC8qKlxuICAgKiBCcmVha3BvaW50IHN0cmluZyB0aGF0IGlzIHRoZSBtaW5pbXVtIHNjcmVlbiBzaXplIGFuIGVsZW1lbnQgc2hvdWxkIGJlY29tZSBzdGlja3kuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ21lZGl1bSdcbiAgICovXG4gIHN0aWNreU9uOiAnbWVkaXVtJyxcbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gc3RpY2t5IGVsZW1lbnQsIGFuZCByZW1vdmVkIG9uIGRlc3RydWN0aW9uLiBGb3VuZGF0aW9uIGRlZmF1bHRzIHRvIGBzdGlja3lgLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdzdGlja3knXG4gICAqL1xuICBzdGlja3lDbGFzczogJ3N0aWNreScsXG4gIC8qKlxuICAgKiBDbGFzcyBhcHBsaWVkIHRvIHN0aWNreSBjb250YWluZXIuIEZvdW5kYXRpb24gZGVmYXVsdHMgdG8gYHN0aWNreS1jb250YWluZXJgLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdzdGlja3ktY29udGFpbmVyJ1xuICAgKi9cbiAgY29udGFpbmVyQ2xhc3M6ICdzdGlja3ktY29udGFpbmVyJyxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzY3JvbGwgZXZlbnRzIGJldHdlZW4gdGhlIHBsdWdpbidzIHJlY2FsY3VsYXRpbmcgc3RpY2t5IHBvaW50cy4gU2V0dGluZyBpdCB0byBgMGAgd2lsbCBjYXVzZSBpdCB0byByZWNhbGMgZXZlcnkgc2Nyb2xsIGV2ZW50LCBzZXR0aW5nIGl0IHRvIGAtMWAgd2lsbCBwcmV2ZW50IHJlY2FsYyBvbiBzY3JvbGwuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgLTFcbiAgICovXG4gIGNoZWNrRXZlcnk6IC0xXG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjYWxjdWxhdGUgZW0gdmFsdWVzXG4gKiBAcGFyYW0gTnVtYmVyIHtlbX0gLSBudW1iZXIgb2YgZW0ncyB0byBjYWxjdWxhdGUgaW50byBwaXhlbHNcbiAqL1xuZnVuY3Rpb24gZW1DYWxjKGVtKSB7XG4gIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5LCBudWxsKS5mb250U2l6ZSwgMTApICogZW07XG59XG5cbmV4cG9ydCB7U3RpY2t5fTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IE1vdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1vdGlvbic7XG5cbmNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlZml4ZXMgPSBbJ1dlYktpdCcsICdNb3onLCAnTycsICdNcycsICcnXTtcbiAgZm9yICh2YXIgaT0wOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmAgaW4gd2luZG93KSB7XG4gICAgICByZXR1cm4gd2luZG93W2Ake3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSgpKTtcblxuY29uc3QgdHJpZ2dlcnMgPSAoZWwsIHR5cGUpID0+IHtcbiAgZWwuZGF0YSh0eXBlKS5zcGxpdCgnICcpLmZvckVhY2goaWQgPT4ge1xuICAgICQoYCMke2lkfWApWyB0eXBlID09PSAnY2xvc2UnID8gJ3RyaWdnZXInIDogJ3RyaWdnZXJIYW5kbGVyJ10oYCR7dHlwZX0uemYudHJpZ2dlcmAsIFtlbF0pO1xuICB9KTtcbn07XG5cbnZhciBUcmlnZ2VycyA9IHtcbiAgTGlzdGVuZXJzOiB7XG4gICAgQmFzaWM6IHt9LFxuICAgIEdsb2JhbDoge31cbiAgfSxcbiAgSW5pdGlhbGl6ZXJzOiB7fVxufVxuXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMgID0ge1xuICBvcGVuTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRyaWdnZXJzKCQodGhpcyksICdvcGVuJyk7XG4gIH0sXG4gIGNsb3NlTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgnY2xvc2UnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICdjbG9zZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAndG9nZ2xlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykudHJpZ2dlcigndG9nZ2xlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIGNsb3NlYWJsZUxpc3RlbmVyOiBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgYW5pbWF0aW9uID0gJCh0aGlzKS5kYXRhKCdjbG9zYWJsZScpO1xuXG4gICAgaWYoYW5pbWF0aW9uICE9PSAnJyl7XG4gICAgICBNb3Rpb24uYW5pbWF0ZU91dCgkKHRoaXMpLCBhbmltYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICAkKHRoaXMpLmZhZGVPdXQoKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZvY3VzTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlLWZvY3VzJyk7XG4gICAgJChgIyR7aWR9YCkudHJpZ2dlckhhbmRsZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJywgWyQodGhpcyldKTtcbiAgfVxufTtcblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1vcGVuXSB3aWxsIHJldmVhbCBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLW9wZW5dJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2VdIHdpbGwgY2xvc2UgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4vLyBJZiB1c2VkIHdpdGhvdXQgYSB2YWx1ZSBvbiBbZGF0YS1jbG9zZV0sIHRoZSBldmVudCB3aWxsIGJ1YmJsZSwgYWxsb3dpbmcgaXQgdG8gY2xvc2UgYSBwYXJlbnQgY29tcG9uZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlXSB3aWxsIHRvZ2dsZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zYWJsZV0gd2lsbCByZXNwb25kIHRvIGNsb3NlLnpmLnRyaWdnZXIgZXZlbnRzLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xvc2UuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbG9zZS56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlYWJsZV0sIFtkYXRhLWNsb3NhYmxlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlLWZvY3VzXSB3aWxsIHJlc3BvbmQgdG8gY29taW5nIGluIGFuZCBvdXQgb2YgZm9jdXNcblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGUtZm9jdXNdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xufVxuXG5cblxuLy8gTW9yZSBHbG9iYWwvY29tcGxleCBsaXN0ZW5lcnMgYW5kIHRyaWdnZXJzXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsICA9IHtcbiAgcmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHJlc2l6ZSBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwicmVzaXplXCIpO1xuICB9LFxuICBzY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgc2Nyb2xsIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJzY3JvbGxcIik7XG4gIH0sXG4gIGNsb3NlTWVMaXN0ZW5lcjogZnVuY3Rpb24oZSwgcGx1Z2luSWQpe1xuICAgIGxldCBwbHVnaW4gPSBlLm5hbWVzcGFjZS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBwbHVnaW5zID0gJChgW2RhdGEtJHtwbHVnaW59XWApLm5vdChgW2RhdGEteWV0aS1ib3g9XCIke3BsdWdpbklkfVwiXWApO1xuXG4gICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgX3RoaXMgPSAkKHRoaXMpO1xuICAgICAgX3RoaXMudHJpZ2dlckhhbmRsZXIoJ2Nsb3NlLnpmLnRyaWdnZXInLCBbX3RoaXNdKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBHbG9iYWwsIHBhcnNlcyB3aG9sZSBkb2N1bWVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIgPSBmdW5jdGlvbihwbHVnaW5OYW1lKSB7XG4gIHZhciB5ZXRpQm94ZXMgPSAkKCdbZGF0YS15ZXRpLWJveF0nKSxcbiAgICAgIHBsdWdOYW1lcyA9IFsnZHJvcGRvd24nLCAndG9vbHRpcCcsICdyZXZlYWwnXTtcblxuICBpZihwbHVnaW5OYW1lKXtcbiAgICBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzLnB1c2gocGx1Z2luTmFtZSk7XG4gICAgfWVsc2UgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwbHVnaW5OYW1lWzBdID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMgPSBwbHVnTmFtZXMuY29uY2F0KHBsdWdpbk5hbWUpO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5lcnJvcignUGx1Z2luIG5hbWVzIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgfVxuICBpZih5ZXRpQm94ZXMubGVuZ3RoKXtcbiAgICBsZXQgbGlzdGVuZXJzID0gcGx1Z05hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGBjbG9zZW1lLnpmLiR7bmFtZX1gO1xuICAgIH0pLmpvaW4oJyAnKTtcblxuICAgICQod2luZG93KS5vZmYobGlzdGVuZXJzKS5vbihsaXN0ZW5lcnMsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuY2xvc2VNZUxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCB0cmlnZ2VyLCBsaXN0ZW5lcikge1xuICBsZXQgdGltZXIsIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuICAkKHdpbmRvdykub2ZmKHRyaWdnZXIpLm9uKHRyaWdnZXIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGltZXIpIHsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgbGlzdGVuZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgZGVib3VuY2UgfHwgMTApOy8vZGVmYXVsdCB0aW1lIHRvIGVtaXQgc2Nyb2xsIGV2ZW50XG4gIH0pO1xufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1yZXNpemVdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdyZXNpemUuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwucmVzaXplTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtc2Nyb2xsXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAnc2Nyb2xsLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnNjcm9sbExpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyID0gZnVuY3Rpb24oJGVsZW0pIHtcbiAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpeyByZXR1cm4gZmFsc2U7IH1cbiAgbGV0ICRub2RlcyA9ICRlbGVtLmZpbmQoJ1tkYXRhLXJlc2l6ZV0sIFtkYXRhLXNjcm9sbF0sIFtkYXRhLW11dGF0ZV0nKTtcblxuICAvL2VsZW1lbnQgY2FsbGJhY2tcbiAgdmFyIGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25SZWNvcmRzTGlzdCkge1xuICAgIHZhciAkdGFyZ2V0ID0gJChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnRhcmdldCk7XG5cbiAgICAvL3RyaWdnZXIgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50IGRlcGVuZGluZyBvbiB0eXBlXG4gICAgc3dpdGNoIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhdHRyaWJ1dGVzXCI6XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJzY3JvbGxcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInLCBbJHRhcmdldCwgd2luZG93LnBhZ2VZT2Zmc2V0XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInJlc2l6ZVwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0XSk7XG4gICAgICAgICB9XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJjaGlsZExpc3RcIjpcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvL25vdGhpbmdcbiAgICB9XG4gIH07XG5cbiAgaWYgKCRub2Rlcy5sZW5ndGgpIHtcbiAgICAvL2ZvciBlYWNoIGVsZW1lbnQgdGhhdCBuZWVkcyB0byBsaXN0ZW4gZm9yIHJlc2l6aW5nLCBzY3JvbGxpbmcsIG9yIG11dGF0aW9uIGFkZCBhIHNpbmdsZSBvYnNlcnZlclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9ICRub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHZhciBlbGVtZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uKTtcbiAgICAgIGVsZW1lbnRPYnNlcnZlci5vYnNlcnZlKCRub2Rlc1tpXSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFtcImRhdGEtZXZlbnRzXCIsIFwic3R5bGVcIl0gfSk7XG4gICAgfVxuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuXG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIoKTtcbn1cblxuXG5UcmlnZ2Vycy5pbml0ID0gZnVuY3Rpb24gKCQsIEZvdW5kYXRpb24pIHtcbiAgb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgIT09IHRydWUpIHtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMoKTtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgICQudHJpZ2dlcnNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZihGb3VuZGF0aW9uKSB7XG4gICAgRm91bmRhdGlvbi5UcmlnZ2VycyA9IFRyaWdnZXJzO1xuICAgIC8vIExlZ2FjeSBpbmNsdWRlZCB0byBiZSBiYWNrd2FyZHMgY29tcGF0aWJsZSBmb3Igbm93LlxuICAgIEZvdW5kYXRpb24uSUhlYXJZb3UgPSBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzXG4gIH1cbn1cblxuZXhwb3J0IHtUcmlnZ2Vyc307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
