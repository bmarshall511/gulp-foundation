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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.plugin */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__);
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


        var Sticky = /*#__PURE__*/function (_Plugin) {
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
                  id = this.$element[0].id || Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'sticky'),
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
              this.onLoadListener = Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
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
              }); // Recalculate the height only if it is "dynamic"

              if (this.options.dynamicHeight || !this.containerHeight) {
                // Get the sticked element height and apply it to the container to "hold the place"
                var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                newContainerHeight = this.$element.css("display") == "none" ? 0 : newContainerHeight;
                this.$container.css('height', newContainerHeight);
                this.containerHeight = newContainerHeight;
              }

              this.elemHeight = this.containerHeight;

              if (!this.isStuck) {
                if (this.$element.hasClass('is-at-bottom')) {
                  var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                  this.$element.css('top', anchorPt);
                }
              }

              this._setBreakPoints(this.containerHeight, function () {
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
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

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
           * If true (by default), keep the sticky container the same height as the element. Otherwise, the container height is set once and does not change.
           * @option
           * @type {boolean}
           * @default true
           */
          dynamicHeight: true,

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
      17:
      /*!*******************************************************!*\
        !*** multi ./js/entries/plugins/foundation.sticky.js ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.sticky.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uc3RpY2t5LmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnN0aWNreS5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlN0aWNreSIsImVsZW1lbnQiLCJvcHRpb25zIiwiJCIsIlRyaWdnZXJzIiwiTWVkaWFRdWVyeSIsIiRwYXJlbnQiLCJpZCIsIkdldFlvRGlnaXRzIiwiX3RoaXMiLCJvbkxvYWQiLCJzY3JvbGwiLCJ3aW5kb3ciLCJ0b3AiLCJidG0iLCJkb2N1bWVudCIsInB0cyIsImJyZWFrcyIsImkiLCJsZW4iLCJwdCIsInBsYWNlIiwiYW5jaG9yIiwic2Nyb2xsTGlzdGVuZXIiLCJjaGVja1NpemVzIiwic3RpY2tUbyIsIm1yZ24iLCJub3RTdHVja1RvIiwiY3NzIiwiaXNUb3AiLCJzdGlja1RvVG9wIiwiYW5jaG9yUHQiLCJ0b3BPckJvdHRvbSIsImNiIiwibmV3RWxlbVdpZHRoIiwiY29tcCIsInBkbmdsIiwicGFyc2VJbnQiLCJwZG5nciIsIm5ld0NvbnRhaW5lckhlaWdodCIsImVsZW1IZWlnaHQiLCJtVG9wIiwiZW1DYWxjIiwibUJ0bSIsInRvcFBvaW50IiwiYm90dG9tUG9pbnQiLCJ3aW5IZWlnaHQiLCJoZWlnaHQiLCJib3R0b20iLCJQbHVnaW4iLCJjb250YWluZXIiLCJ0b3BBbmNob3IiLCJidG1BbmNob3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJzdGlja3lPbiIsInN0aWNreUNsYXNzIiwiY29udGFpbmVyQ2xhc3MiLCJkeW5hbWljSGVpZ2h0IiwiY2hlY2tFdmVyeSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJwcmVmaXhlcyIsInRyaWdnZXJzIiwiZWwiLCJ0eXBlIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwidG9nZ2xlTGlzdGVuZXIiLCJjbG9zZWFibGVMaXN0ZW5lciIsImFuaW1hdGlvbiIsImUiLCJNb3Rpb24iLCJ0b2dnbGVGb2N1c0xpc3RlbmVyIiwiJGVsZW0iLCJyZXNpemVMaXN0ZW5lciIsIiRub2RlcyIsImNsb3NlTWVMaXN0ZW5lciIsInBsdWdpbiIsInBsdWdpbnMiLCJ5ZXRpQm94ZXMiLCJwbHVnTmFtZXMiLCJwbHVnaW5OYW1lIiwiY29uc29sZSIsImxpc3RlbmVycyIsImFyZ3MiLCJBcnJheSIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dCIsImxpc3RlbmVyIiwiZGVib3VuY2UiLCJkZWJvdW5jZUdsb2JhbExpc3RlbmVyIiwibGlzdGVuaW5nRWxlbWVudHNNdXRhdGlvbiIsIiR0YXJnZXQiLCJtdXRhdGlvblJlY29yZHNMaXN0IiwiZWxlbWVudE9ic2VydmVyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwiYXR0cmlidXRlRmlsdGVyIiwiJGRvY3VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFNBQUEsZ0NBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDhCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLDhCQUFBLEVBQUEsMEJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDhCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxtQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsUUFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLDRDQUFBLEVBQUEsdURBQUEsRUFBQSxtREFBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElB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aW9uL2ZvdW5kYXRpb24uc3RpY2t5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3VuZGF0aW9uLnN0aWNreVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uc3RpY2t5XCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubW90aW9uXCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9tZWRpYVF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9tb3Rpb25fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IFN0aWNreSB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uc3RpY2t5JztcbkZvdW5kYXRpb24ucGx1Z2luKFN0aWNreSwgJ1N0aWNreScpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBTdGlja3kgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBvbkxvYWQsIEdldFlvRGlnaXRzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnknO1xuaW1wb3J0IHsgVHJpZ2dlcnMgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC50cmlnZ2Vycyc7XG5cbi8qKlxuICogU3RpY2t5IG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5zdGlja3lcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnNcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVxuICovXG5cbmNsYXNzIFN0aWNreSBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIGEgc3RpY2t5IHRoaW5nLlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgU3RpY2t5XG4gICAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBtYWtlIHN0aWNreS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIG9iamVjdCBwYXNzZWQgd2hlbiBjcmVhdGluZyB0aGUgZWxlbWVudCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgU3RpY2t5LmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnU3RpY2t5JzsgLy8gaWU5IGJhY2sgY29tcGF0XG5cbiAgICAvLyBUcmlnZ2VycyBpbml0IGlzIGlkZW1wb3RlbnQsIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgaXQgaXMgaW5pdGlhbGl6ZWRcbiAgICBUcmlnZ2Vycy5pbml0KCQpO1xuXG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBzdGlja3kgZWxlbWVudCBieSBhZGRpbmcgY2xhc3NlcywgZ2V0dGluZy9zZXR0aW5nIGRpbWVuc2lvbnMsIGJyZWFrcG9pbnRzIGFuZCBhdHRyaWJ1dGVzXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgTWVkaWFRdWVyeS5faW5pdCgpO1xuXG4gICAgdmFyICRwYXJlbnQgPSB0aGlzLiRlbGVtZW50LnBhcmVudCgnW2RhdGEtc3RpY2t5LWNvbnRhaW5lcl0nKSxcbiAgICAgICAgaWQgPSB0aGlzLiRlbGVtZW50WzBdLmlkIHx8IEdldFlvRGlnaXRzKDYsICdzdGlja3knKSxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYoJHBhcmVudC5sZW5ndGgpe1xuICAgICAgdGhpcy4kY29udGFpbmVyID0gJHBhcmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53YXNXcmFwcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJGVsZW1lbnQud3JhcCh0aGlzLm9wdGlvbnMuY29udGFpbmVyKTtcbiAgICAgIHRoaXMuJGNvbnRhaW5lciA9IHRoaXMuJGVsZW1lbnQucGFyZW50KCk7XG4gICAgfVxuICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuY29udGFpbmVyQ2xhc3MpO1xuXG4gICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuc3RpY2t5Q2xhc3MpLmF0dHIoeyAnZGF0YS1yZXNpemUnOiBpZCwgJ2RhdGEtbXV0YXRlJzogaWQgfSk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5hbmNob3IgIT09ICcnKSB7XG4gICAgICAgICQoJyMnICsgX3RoaXMub3B0aW9ucy5hbmNob3IpLmF0dHIoeyAnZGF0YS1tdXRhdGUnOiBpZCB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbENvdW50ID0gdGhpcy5vcHRpb25zLmNoZWNrRXZlcnk7XG4gICAgdGhpcy5pc1N0dWNrID0gZmFsc2U7XG4gICAgdGhpcy5vbkxvYWRMaXN0ZW5lciA9IG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vV2UgY2FsY3VsYXRlIHRoZSBjb250YWluZXIgaGVpZ2h0IHRvIGhhdmUgY29ycmVjdCB2YWx1ZXMgZm9yIGFuY2hvciBwb2ludHMgb2Zmc2V0IGNhbGN1bGF0aW9uLlxuICAgICAgX3RoaXMuY29udGFpbmVySGVpZ2h0ID0gX3RoaXMuJGVsZW1lbnQuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIiA/IDAgOiBfdGhpcy4kZWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICBfdGhpcy4kY29udGFpbmVyLmNzcygnaGVpZ2h0JywgX3RoaXMuY29udGFpbmVySGVpZ2h0KTtcbiAgICAgIF90aGlzLmVsZW1IZWlnaHQgPSBfdGhpcy5jb250YWluZXJIZWlnaHQ7XG4gICAgICBpZiAoX3RoaXMub3B0aW9ucy5hbmNob3IgIT09ICcnKSB7XG4gICAgICAgIF90aGlzLiRhbmNob3IgPSAkKCcjJyArIF90aGlzLm9wdGlvbnMuYW5jaG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9wYXJzZVBvaW50cygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5fc2V0U2l6ZXMoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBfdGhpcy5fY2FsYyhmYWxzZSwgc2Nyb2xsKTtcbiAgICAgICAgLy9VbnN0aWNrIHRoZSBlbGVtZW50IHdpbGwgZW5zdXJlIHRoYXQgcHJvcGVyIGNsYXNzZXMgYXJlIHNldC5cbiAgICAgICAgaWYgKCFfdGhpcy5pc1N0dWNrKSB7XG4gICAgICAgICAgX3RoaXMuX3JlbW92ZVN0aWNreSgoc2Nyb2xsID49IF90aGlzLnRvcFBvaW50KSA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgX3RoaXMuX2V2ZW50cyhpZC5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCctJykpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHVzaW5nIG11bHRpcGxlIGVsZW1lbnRzIGFzIGFuY2hvcnMsIGNhbGN1bGF0ZXMgdGhlIHRvcCBhbmQgYm90dG9tIHBpeGVsIHZhbHVlcyB0aGUgc3RpY2t5IHRoaW5nIHNob3VsZCBzdGljayBhbmQgdW5zdGljayBvbi5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcGFyc2VQb2ludHMoKSB7XG4gICAgdmFyIHRvcCA9IHRoaXMub3B0aW9ucy50b3BBbmNob3IgPT0gXCJcIiA/IDEgOiB0aGlzLm9wdGlvbnMudG9wQW5jaG9yLFxuICAgICAgICBidG0gPSB0aGlzLm9wdGlvbnMuYnRtQW5jaG9yPT0gXCJcIiA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgOiB0aGlzLm9wdGlvbnMuYnRtQW5jaG9yLFxuICAgICAgICBwdHMgPSBbdG9wLCBidG1dLFxuICAgICAgICBicmVha3MgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcHRzLmxlbmd0aDsgaSA8IGxlbiAmJiBwdHNbaV07IGkrKykge1xuICAgICAgdmFyIHB0O1xuICAgICAgaWYgKHR5cGVvZiBwdHNbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHB0ID0gcHRzW2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBsYWNlID0gcHRzW2ldLnNwbGl0KCc6JyksXG4gICAgICAgICAgICBhbmNob3IgPSAkKGAjJHtwbGFjZVswXX1gKTtcblxuICAgICAgICBwdCA9IGFuY2hvci5vZmZzZXQoKS50b3A7XG4gICAgICAgIGlmIChwbGFjZVsxXSAmJiBwbGFjZVsxXS50b0xvd2VyQ2FzZSgpID09PSAnYm90dG9tJykge1xuICAgICAgICAgIHB0ICs9IGFuY2hvclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrc1tpXSA9IHB0O1xuICAgIH1cblxuXG4gICAgdGhpcy5wb2ludHMgPSBicmVha3M7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBzY3JvbGxpbmcgZWxlbWVudC5cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gcHNldWRvLXJhbmRvbSBpZCBmb3IgdW5pcXVlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICovXG4gIF9ldmVudHMoaWQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBzY3JvbGxMaXN0ZW5lciA9IHRoaXMuc2Nyb2xsTGlzdGVuZXIgPSBgc2Nyb2xsLnpmLiR7aWR9YDtcbiAgICBpZiAodGhpcy5pc09uKSB7IHJldHVybjsgfVxuICAgIGlmICh0aGlzLmNhblN0aWNrKSB7XG4gICAgICB0aGlzLmlzT24gPSB0cnVlO1xuICAgICAgJCh3aW5kb3cpLm9mZihzY3JvbGxMaXN0ZW5lcilcbiAgICAgICAgICAgICAgIC5vbihzY3JvbGxMaXN0ZW5lciwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc2Nyb2xsQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGxDb3VudCA9IF90aGlzLm9wdGlvbnMuY2hlY2tFdmVyeTtcbiAgICAgICAgICAgICAgICAgICBfdGhpcy5fc2V0U2l6ZXMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICBfdGhpcy5fY2FsYyhmYWxzZSwgd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGxDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgIF90aGlzLl9jYWxjKGZhbHNlLCB3aW5kb3cucGFnZVlPZmZzZXQpO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdyZXNpemVtZS56Zi50cmlnZ2VyJylcbiAgICAgICAgICAgICAgICAgLm9uKCdyZXNpemVtZS56Zi50cmlnZ2VyJywgZnVuY3Rpb24oZSwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2V2ZW50c0hhbmRsZXIoaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignbXV0YXRlbWUuemYudHJpZ2dlcicsIGZ1bmN0aW9uIChlLCBlbCkge1xuICAgICAgICBfdGhpcy5fZXZlbnRzSGFuZGxlcihpZCk7XG4gICAgfSk7XG5cbiAgICBpZih0aGlzLiRhbmNob3IpIHtcbiAgICAgIHRoaXMuJGFuY2hvci5vbignbXV0YXRlbWUuemYudHJpZ2dlcicsIGZ1bmN0aW9uIChlLCBlbCkge1xuICAgICAgICAgIF90aGlzLl9ldmVudHNIYW5kbGVyKGlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBldmVudHMuXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIHBzZXVkby1yYW5kb20gaWQgZm9yIHVuaXF1ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIuXG4gICAqL1xuICBfZXZlbnRzSGFuZGxlcihpZCkge1xuICAgICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIHNjcm9sbExpc3RlbmVyID0gdGhpcy5zY3JvbGxMaXN0ZW5lciA9IGBzY3JvbGwuemYuJHtpZH1gO1xuXG4gICAgICAgX3RoaXMuX3NldFNpemVzKGZ1bmN0aW9uKCkge1xuICAgICAgIF90aGlzLl9jYWxjKGZhbHNlKTtcbiAgICAgICBpZiAoX3RoaXMuY2FuU3RpY2spIHtcbiAgICAgICAgIGlmICghX3RoaXMuaXNPbikge1xuICAgICAgICAgICBfdGhpcy5fZXZlbnRzKGlkKTtcbiAgICAgICAgIH1cbiAgICAgICB9IGVsc2UgaWYgKF90aGlzLmlzT24pIHtcbiAgICAgICAgIF90aGlzLl9wYXVzZUxpc3RlbmVycyhzY3JvbGxMaXN0ZW5lcik7XG4gICAgICAgfVxuICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGV2ZW50IGhhbmRsZXJzIGZvciBzY3JvbGwgYW5kIGNoYW5nZSBldmVudHMgb24gYW5jaG9yLlxuICAgKiBAZmlyZXMgU3RpY2t5I3BhdXNlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzY3JvbGxMaXN0ZW5lciAtIHVuaXF1ZSwgbmFtZXNwYWNlZCBzY3JvbGwgbGlzdGVuZXIgYXR0YWNoZWQgdG8gYHdpbmRvd2BcbiAgICovXG4gIF9wYXVzZUxpc3RlbmVycyhzY3JvbGxMaXN0ZW5lcikge1xuICAgIHRoaXMuaXNPbiA9IGZhbHNlO1xuICAgICQod2luZG93KS5vZmYoc2Nyb2xsTGlzdGVuZXIpO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGlzIHBhdXNlZCBkdWUgdG8gcmVzaXplIGV2ZW50IHNocmlua2luZyB0aGUgdmlldy5cbiAgICAgKiBAZXZlbnQgU3RpY2t5I3BhdXNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdwYXVzZS56Zi5zdGlja3knKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gZXZlcnkgYHNjcm9sbGAgZXZlbnQgYW5kIG9uIGBfaW5pdGBcbiAgICogZmlyZXMgZnVuY3Rpb25zIGJhc2VkIG9uIGJvb2xlYW5zIGFuZCBjYWNoZWQgdmFsdWVzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gY2hlY2tTaXplcyAtIHRydWUgaWYgcGx1Z2luIHNob3VsZCByZWNhbGN1bGF0ZSBzaXplcyBhbmQgYnJlYWtwb2ludHMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzY3JvbGwgLSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBwYXNzZWQgZnJvbSBzY3JvbGwgZXZlbnQgY2IgZnVuY3Rpb24uIElmIG5vdCBwYXNzZWQsIGRlZmF1bHRzIHRvIGB3aW5kb3cucGFnZVlPZmZzZXRgLlxuICAgKi9cbiAgX2NhbGMoY2hlY2tTaXplcywgc2Nyb2xsKSB7XG4gICAgaWYgKGNoZWNrU2l6ZXMpIHsgdGhpcy5fc2V0U2l6ZXMoKTsgfVxuXG4gICAgaWYgKCF0aGlzLmNhblN0aWNrKSB7XG4gICAgICBpZiAodGhpcy5pc1N0dWNrKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZVN0aWNreSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXNjcm9sbCkgeyBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7IH1cblxuICAgIGlmIChzY3JvbGwgPj0gdGhpcy50b3BQb2ludCkge1xuICAgICAgaWYgKHNjcm9sbCA8PSB0aGlzLmJvdHRvbVBvaW50KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0dWNrKSB7XG4gICAgICAgICAgdGhpcy5fc2V0U3RpY2t5KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3R1Y2spIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVTdGlja3koZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmlzU3R1Y2spIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlU3RpY2t5KHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYXVzZXMgdGhlICRlbGVtZW50IHRvIGJlY29tZSBzdHVjay5cbiAgICogQWRkcyBgcG9zaXRpb246IGZpeGVkO2AsIGFuZCBoZWxwZXIgY2xhc3Nlcy5cbiAgICogQGZpcmVzIFN0aWNreSNzdHVja3RvXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldFN0aWNreSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBzdGlja1RvID0gdGhpcy5vcHRpb25zLnN0aWNrVG8sXG4gICAgICAgIG1yZ24gPSBzdGlja1RvID09PSAndG9wJyA/ICdtYXJnaW5Ub3AnIDogJ21hcmdpbkJvdHRvbScsXG4gICAgICAgIG5vdFN0dWNrVG8gPSBzdGlja1RvID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCcsXG4gICAgICAgIGNzcyA9IHt9O1xuXG4gICAgY3NzW21yZ25dID0gYCR7dGhpcy5vcHRpb25zW21yZ25dfWVtYDtcbiAgICBjc3Nbc3RpY2tUb10gPSAwO1xuICAgIGNzc1tub3RTdHVja1RvXSA9ICdhdXRvJztcbiAgICB0aGlzLmlzU3R1Y2sgPSB0cnVlO1xuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoYGlzLWFuY2hvcmVkIGlzLWF0LSR7bm90U3R1Y2tUb31gKVxuICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYGlzLXN0dWNrIGlzLWF0LSR7c3RpY2tUb31gKVxuICAgICAgICAgICAgICAgICAuY3NzKGNzcylcbiAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAqIEZpcmVzIHdoZW4gdGhlICRlbGVtZW50IGhhcyBiZWNvbWUgYHBvc2l0aW9uOiBmaXhlZDtgXG4gICAgICAgICAgICAgICAgICAqIE5hbWVzcGFjZWQgdG8gYHRvcGAgb3IgYGJvdHRvbWAsIGUuZy4gYHN0aWNreS56Zi5zdHVja3RvOnRvcGBcbiAgICAgICAgICAgICAgICAgICogQGV2ZW50IFN0aWNreSNzdHVja3RvXG4gICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAudHJpZ2dlcihgc3RpY2t5LnpmLnN0dWNrdG86JHtzdGlja1RvfWApO1xuICAgIHRoaXMuJGVsZW1lbnQub24oXCJ0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgTVNUcmFuc2l0aW9uRW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMuX3NldFNpemVzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2F1c2VzIHRoZSAkZWxlbWVudCB0byBiZWNvbWUgdW5zdHVjay5cbiAgICogUmVtb3ZlcyBgcG9zaXRpb246IGZpeGVkO2AsIGFuZCBoZWxwZXIgY2xhc3Nlcy5cbiAgICogQWRkcyBvdGhlciBoZWxwZXIgY2xhc3Nlcy5cbiAgICogQHBhcmFtIHtCb29sZWFufSBpc1RvcCAtIHRlbGxzIHRoZSBmdW5jdGlvbiBpZiB0aGUgJGVsZW1lbnQgc2hvdWxkIGFuY2hvciB0byB0aGUgdG9wIG9yIGJvdHRvbSBvZiBpdHMgJGFuY2hvciBlbGVtZW50LlxuICAgKiBAZmlyZXMgU3RpY2t5I3Vuc3R1Y2tmcm9tXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVtb3ZlU3RpY2t5KGlzVG9wKSB7XG4gICAgdmFyIHN0aWNrVG8gPSB0aGlzLm9wdGlvbnMuc3RpY2tUbyxcbiAgICAgICAgc3RpY2tUb1RvcCA9IHN0aWNrVG8gPT09ICd0b3AnLFxuICAgICAgICBjc3MgPSB7fSxcbiAgICAgICAgYW5jaG9yUHQgPSAodGhpcy5wb2ludHMgPyB0aGlzLnBvaW50c1sxXSAtIHRoaXMucG9pbnRzWzBdIDogdGhpcy5hbmNob3JIZWlnaHQpIC0gdGhpcy5lbGVtSGVpZ2h0LFxuICAgICAgICBtcmduID0gc3RpY2tUb1RvcCA/ICdtYXJnaW5Ub3AnIDogJ21hcmdpbkJvdHRvbScsXG4gICAgICAgIG5vdFN0dWNrVG8gPSBzdGlja1RvVG9wID8gJ2JvdHRvbScgOiAndG9wJyxcbiAgICAgICAgdG9wT3JCb3R0b20gPSBpc1RvcCA/ICd0b3AnIDogJ2JvdHRvbSc7XG5cbiAgICBjc3NbbXJnbl0gPSAwO1xuXG4gICAgY3NzWydib3R0b20nXSA9ICdhdXRvJztcbiAgICBpZihpc1RvcCkge1xuICAgICAgY3NzWyd0b3AnXSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNzc1sndG9wJ10gPSBhbmNob3JQdDtcbiAgICB9XG5cbiAgICB0aGlzLmlzU3R1Y2sgPSBmYWxzZTtcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGBpcy1zdHVjayBpcy1hdC0ke3N0aWNrVG99YClcbiAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGBpcy1hbmNob3JlZCBpcy1hdC0ke3RvcE9yQm90dG9tfWApXG4gICAgICAgICAgICAgICAgIC5jc3MoY3NzKVxuICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgJGVsZW1lbnQgaGFzIGJlY29tZSBhbmNob3JlZC5cbiAgICAgICAgICAgICAgICAgICogTmFtZXNwYWNlZCB0byBgdG9wYCBvciBgYm90dG9tYCwgZS5nLiBgc3RpY2t5LnpmLnVuc3R1Y2tmcm9tOmJvdHRvbWBcbiAgICAgICAgICAgICAgICAgICogQGV2ZW50IFN0aWNreSN1bnN0dWNrZnJvbVxuICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgLnRyaWdnZXIoYHN0aWNreS56Zi51bnN0dWNrZnJvbToke3RvcE9yQm90dG9tfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlICRlbGVtZW50IGFuZCAkY29udGFpbmVyIHNpemVzIGZvciBwbHVnaW4uXG4gICAqIENhbGxzIGBfc2V0QnJlYWtQb2ludHNgLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGZpcmUgb24gY29tcGxldGlvbiBvZiBgX3NldEJyZWFrUG9pbnRzYC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRTaXplcyhjYikge1xuICAgIHRoaXMuY2FuU3RpY2sgPSBNZWRpYVF1ZXJ5LmlzKHRoaXMub3B0aW9ucy5zdGlja3lPbik7XG4gICAgaWYgKCF0aGlzLmNhblN0aWNrKSB7XG4gICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7IGNiKCk7IH1cbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBuZXdFbGVtV2lkdGggPSB0aGlzLiRjb250YWluZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICAgIGNvbXAgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRjb250YWluZXJbMF0pLFxuICAgICAgICBwZG5nbCA9IHBhcnNlSW50KGNvbXBbJ3BhZGRpbmctbGVmdCddLCAxMCksXG4gICAgICAgIHBkbmdyID0gcGFyc2VJbnQoY29tcFsncGFkZGluZy1yaWdodCddLCAxMCk7XG5cbiAgICBpZiAodGhpcy4kYW5jaG9yICYmIHRoaXMuJGFuY2hvci5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYW5jaG9ySGVpZ2h0ID0gdGhpcy4kYW5jaG9yWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyc2VQb2ludHMoKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmNzcyh7XG4gICAgICAnbWF4LXdpZHRoJzogYCR7bmV3RWxlbVdpZHRoIC0gcGRuZ2wgLSBwZG5ncn1weGBcbiAgICB9KTtcblxuICAgIC8vIFJlY2FsY3VsYXRlIHRoZSBoZWlnaHQgb25seSBpZiBpdCBpcyBcImR5bmFtaWNcIlxuICAgIGlmICh0aGlzLm9wdGlvbnMuZHluYW1pY0hlaWdodCB8fCAhdGhpcy5jb250YWluZXJIZWlnaHQpIHtcbiAgICAgIC8vIEdldCB0aGUgc3RpY2tlZCBlbGVtZW50IGhlaWdodCBhbmQgYXBwbHkgaXQgdG8gdGhlIGNvbnRhaW5lciB0byBcImhvbGQgdGhlIHBsYWNlXCJcbiAgICAgIHZhciBuZXdDb250YWluZXJIZWlnaHQgPSB0aGlzLiRlbGVtZW50WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCB0aGlzLmNvbnRhaW5lckhlaWdodDtcbiAgICAgIG5ld0NvbnRhaW5lckhlaWdodCA9IHRoaXMuJGVsZW1lbnQuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIiA/IDAgOiBuZXdDb250YWluZXJIZWlnaHQ7XG4gICAgICB0aGlzLiRjb250YWluZXIuY3NzKCdoZWlnaHQnLCBuZXdDb250YWluZXJIZWlnaHQpO1xuICAgICAgdGhpcy5jb250YWluZXJIZWlnaHQgPSBuZXdDb250YWluZXJIZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMuZWxlbUhlaWdodCA9IHRoaXMuY29udGFpbmVySGVpZ2h0O1xuXG4gICAgaWYgKCF0aGlzLmlzU3R1Y2spIHtcbiAgICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpcy1hdC1ib3R0b20nKSkge1xuICAgICAgICB2YXIgYW5jaG9yUHQgPSAodGhpcy5wb2ludHMgPyB0aGlzLnBvaW50c1sxXSAtIHRoaXMuJGNvbnRhaW5lci5vZmZzZXQoKS50b3AgOiB0aGlzLmFuY2hvckhlaWdodCkgLSB0aGlzLmVsZW1IZWlnaHQ7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKCd0b3AnLCBhbmNob3JQdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QnJlYWtQb2ludHModGhpcy5jb250YWluZXJIZWlnaHQsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGNiICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgeyBjYigpOyB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdXBwZXIgYW5kIGxvd2VyIGJyZWFrcG9pbnRzIGZvciB0aGUgZWxlbWVudCB0byBiZWNvbWUgc3RpY2t5L3Vuc3RpY2t5LlxuICAgKiBAcGFyYW0ge051bWJlcn0gZWxlbUhlaWdodCAtIHB4IHZhbHVlIGZvciBzdGlja3kuJGVsZW1lbnQgaGVpZ2h0LCBjYWxjdWxhdGVkIGJ5IGBfc2V0U2l6ZXNgLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiAtIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBjb21wbGV0aW9uLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldEJyZWFrUG9pbnRzKGVsZW1IZWlnaHQsIGNiKSB7XG4gICAgaWYgKCF0aGlzLmNhblN0aWNrKSB7XG4gICAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7IGNiKCk7IH1cbiAgICAgIGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9XG4gICAgdmFyIG1Ub3AgPSBlbUNhbGModGhpcy5vcHRpb25zLm1hcmdpblRvcCksXG4gICAgICAgIG1CdG0gPSBlbUNhbGModGhpcy5vcHRpb25zLm1hcmdpbkJvdHRvbSksXG4gICAgICAgIHRvcFBvaW50ID0gdGhpcy5wb2ludHMgPyB0aGlzLnBvaW50c1swXSA6IHRoaXMuJGFuY2hvci5vZmZzZXQoKS50b3AsXG4gICAgICAgIGJvdHRvbVBvaW50ID0gdGhpcy5wb2ludHMgPyB0aGlzLnBvaW50c1sxXSA6IHRvcFBvaW50ICsgdGhpcy5hbmNob3JIZWlnaHQsXG4gICAgICAgIC8vIHRvcFBvaW50ID0gdGhpcy4kYW5jaG9yLm9mZnNldCgpLnRvcCB8fCB0aGlzLnBvaW50c1swXSxcbiAgICAgICAgLy8gYm90dG9tUG9pbnQgPSB0b3BQb2ludCArIHRoaXMuYW5jaG9ySGVpZ2h0IHx8IHRoaXMucG9pbnRzWzFdLFxuICAgICAgICB3aW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnN0aWNrVG8gPT09ICd0b3AnKSB7XG4gICAgICB0b3BQb2ludCAtPSBtVG9wO1xuICAgICAgYm90dG9tUG9pbnQgLT0gKGVsZW1IZWlnaHQgKyBtVG9wKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zdGlja1RvID09PSAnYm90dG9tJykge1xuICAgICAgdG9wUG9pbnQgLT0gKHdpbkhlaWdodCAtIChlbGVtSGVpZ2h0ICsgbUJ0bSkpO1xuICAgICAgYm90dG9tUG9pbnQgLT0gKHdpbkhlaWdodCAtIG1CdG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3RoaXMgd291bGQgYmUgdGhlIHN0aWNrVG86IGJvdGggb3B0aW9uLi4uIHRyaWNreVxuICAgIH1cblxuICAgIHRoaXMudG9wUG9pbnQgPSB0b3BQb2ludDtcbiAgICB0aGlzLmJvdHRvbVBvaW50ID0gYm90dG9tUG9pbnQ7XG5cbiAgICBpZiAoY2IgJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7IGNiKCk7IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgY3VycmVudCBzdGlja3kgZWxlbWVudC5cbiAgICogUmVzZXRzIHRoZSBlbGVtZW50IHRvIHRoZSB0b3AgcG9zaXRpb24gZmlyc3QuXG4gICAqIFJlbW92ZXMgZXZlbnQgbGlzdGVuZXJzLCBKUy1hZGRlZCBjc3MgcHJvcGVydGllcyBhbmQgY2xhc3NlcywgYW5kIHVud3JhcHMgdGhlICRlbGVtZW50IGlmIHRoZSBKUyBhZGRlZCB0aGUgJGNvbnRhaW5lci5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVTdGlja3kodHJ1ZSk7XG5cbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGAke3RoaXMub3B0aW9ucy5zdGlja3lDbGFzc30gaXMtYW5jaG9yZWQgaXMtYXQtdG9wYClcbiAgICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJycsXG4gICAgICAgICAgICAgICAgICAgJ21heC13aWR0aCc6ICcnXG4gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgIC5vZmYoJ3Jlc2l6ZW1lLnpmLnRyaWdnZXInKVxuICAgICAgICAgICAgICAgICAub2ZmKCdtdXRhdGVtZS56Zi50cmlnZ2VyJyk7XG4gICAgaWYgKHRoaXMuJGFuY2hvciAmJiB0aGlzLiRhbmNob3IubGVuZ3RoKSB7XG4gICAgICB0aGlzLiRhbmNob3Iub2ZmKCdjaGFuZ2UuemYuc3RpY2t5Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjcm9sbExpc3RlbmVyKSAkKHdpbmRvdykub2ZmKHRoaXMuc2Nyb2xsTGlzdGVuZXIpXG4gICAgaWYgKHRoaXMub25Mb2FkTGlzdGVuZXIpICQod2luZG93KS5vZmYodGhpcy5vbkxvYWRMaXN0ZW5lcilcblxuICAgIGlmICh0aGlzLndhc1dyYXBwZWQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudW53cmFwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuY29udGFpbmVyQ2xhc3MpXG4gICAgICAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnJ1xuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cblN0aWNreS5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIEN1c3RvbWl6YWJsZSBjb250YWluZXIgdGVtcGxhdGUuIEFkZCB5b3VyIG93biBjbGFzc2VzIGZvciBzdHlsaW5nIGFuZCBzaXppbmcuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJyZsdDtkaXYgZGF0YS1zdGlja3ktY29udGFpbmVyJmd0OyZsdDsvZGl2Jmd0OydcbiAgICovXG4gIGNvbnRhaW5lcjogJzxkaXYgZGF0YS1zdGlja3ktY29udGFpbmVyPjwvZGl2PicsXG4gIC8qKlxuICAgKiBMb2NhdGlvbiBpbiB0aGUgdmlldyB0aGUgZWxlbWVudCBzdGlja3MgdG8uIENhbiBiZSBgJ3RvcCdgIG9yIGAnYm90dG9tJ2AuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ3RvcCdcbiAgICovXG4gIHN0aWNrVG86ICd0b3AnLFxuICAvKipcbiAgICogSWYgYW5jaG9yZWQgdG8gYSBzaW5nbGUgZWxlbWVudCwgdGhlIGlkIG9mIHRoYXQgZWxlbWVudC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKi9cbiAgYW5jaG9yOiAnJyxcbiAgLyoqXG4gICAqIElmIHVzaW5nIG1vcmUgdGhhbiBvbmUgZWxlbWVudCBhcyBhbmNob3IgcG9pbnRzLCB0aGUgaWQgb2YgdGhlIHRvcCBhbmNob3IuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJydcbiAgICovXG4gIHRvcEFuY2hvcjogJycsXG4gIC8qKlxuICAgKiBJZiB1c2luZyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgYXMgYW5jaG9yIHBvaW50cywgdGhlIGlkIG9mIHRoZSBib3R0b20gYW5jaG9yLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICBidG1BbmNob3I6ICcnLFxuICAvKipcbiAgICogTWFyZ2luLCBpbiBgZW1gJ3MgdG8gYXBwbHkgdG8gdGhlIHRvcCBvZiB0aGUgZWxlbWVudCB3aGVuIGl0IGJlY29tZXMgc3RpY2t5LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIG1hcmdpblRvcDogMSxcbiAgLyoqXG4gICAqIE1hcmdpbiwgaW4gYGVtYCdzIHRvIGFwcGx5IHRvIHRoZSBib3R0b20gb2YgdGhlIGVsZW1lbnQgd2hlbiBpdCBiZWNvbWVzIHN0aWNreS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAxXG4gICAqL1xuICBtYXJnaW5Cb3R0b206IDEsXG4gIC8qKlxuICAgKiBCcmVha3BvaW50IHN0cmluZyB0aGF0IGlzIHRoZSBtaW5pbXVtIHNjcmVlbiBzaXplIGFuIGVsZW1lbnQgc2hvdWxkIGJlY29tZSBzdGlja3kuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ21lZGl1bSdcbiAgICovXG4gIHN0aWNreU9uOiAnbWVkaXVtJyxcbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gc3RpY2t5IGVsZW1lbnQsIGFuZCByZW1vdmVkIG9uIGRlc3RydWN0aW9uLiBGb3VuZGF0aW9uIGRlZmF1bHRzIHRvIGBzdGlja3lgLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdzdGlja3knXG4gICAqL1xuICBzdGlja3lDbGFzczogJ3N0aWNreScsXG4gIC8qKlxuICAgKiBDbGFzcyBhcHBsaWVkIHRvIHN0aWNreSBjb250YWluZXIuIEZvdW5kYXRpb24gZGVmYXVsdHMgdG8gYHN0aWNreS1jb250YWluZXJgLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdzdGlja3ktY29udGFpbmVyJ1xuICAgKi9cbiAgY29udGFpbmVyQ2xhc3M6ICdzdGlja3ktY29udGFpbmVyJyxcbiAgLyoqXG4gICAqIElmIHRydWUgKGJ5IGRlZmF1bHQpLCBrZWVwIHRoZSBzdGlja3kgY29udGFpbmVyIHRoZSBzYW1lIGhlaWdodCBhcyB0aGUgZWxlbWVudC4gT3RoZXJ3aXNlLCB0aGUgY29udGFpbmVyIGhlaWdodCBpcyBzZXQgb25jZSBhbmQgZG9lcyBub3QgY2hhbmdlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBkeW5hbWljSGVpZ2h0OiB0cnVlLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHNjcm9sbCBldmVudHMgYmV0d2VlbiB0aGUgcGx1Z2luJ3MgcmVjYWxjdWxhdGluZyBzdGlja3kgcG9pbnRzLiBTZXR0aW5nIGl0IHRvIGAwYCB3aWxsIGNhdXNlIGl0IHRvIHJlY2FsYyBldmVyeSBzY3JvbGwgZXZlbnQsIHNldHRpbmcgaXQgdG8gYC0xYCB3aWxsIHByZXZlbnQgcmVjYWxjIG9uIHNjcm9sbC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAtMVxuICAgKi9cbiAgY2hlY2tFdmVyeTogLTFcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBlbSB2YWx1ZXNcbiAqIEBwYXJhbSBOdW1iZXIge2VtfSAtIG51bWJlciBvZiBlbSdzIHRvIGNhbGN1bGF0ZSBpbnRvIHBpeGVsc1xuICovXG5mdW5jdGlvbiBlbUNhbGMoZW0pIHtcbiAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHksIG51bGwpLmZvbnRTaXplLCAxMCkgKiBlbTtcbn1cblxuZXhwb3J0IHtTdGlja3l9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgTW90aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uJztcblxuY29uc3QgTXV0YXRpb25PYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVmaXhlcyA9IFsnV2ViS2l0JywgJ01veicsICdPJywgJ01zJywgJyddO1xuICBmb3IgKHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYCBpbiB3aW5kb3cpIHtcbiAgICAgIHJldHVybiB3aW5kb3dbYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KCkpO1xuXG5jb25zdCB0cmlnZ2VycyA9IChlbCwgdHlwZSkgPT4ge1xuICBlbC5kYXRhKHR5cGUpLnNwbGl0KCcgJykuZm9yRWFjaChpZCA9PiB7XG4gICAgJChgIyR7aWR9YClbIHR5cGUgPT09ICdjbG9zZScgPyAndHJpZ2dlcicgOiAndHJpZ2dlckhhbmRsZXInXShgJHt0eXBlfS56Zi50cmlnZ2VyYCwgW2VsXSk7XG4gIH0pO1xufTtcblxudmFyIFRyaWdnZXJzID0ge1xuICBMaXN0ZW5lcnM6IHtcbiAgICBCYXNpYzoge30sXG4gICAgR2xvYmFsOiB7fVxuICB9LFxuICBJbml0aWFsaXplcnM6IHt9XG59XG5cblRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYyAgPSB7XG4gIG9wZW5MaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ29wZW4nKTtcbiAgfSxcbiAgY2xvc2VMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdjbG9zZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ2Nsb3NlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICd0b2dnbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCd0b2dnbGUuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSxcbiAgY2xvc2VhYmxlTGlzdGVuZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgYW5pbWF0aW9uID0gJCh0aGlzKS5kYXRhKCdjbG9zYWJsZScpO1xuXG4gICAgLy8gT25seSBjbG9zZSB0aGUgZmlyc3QgY2xvc2FibGUgZWxlbWVudC4gU2VlIGh0dHBzOi8vZ2l0LmlvL3pmLTc4MzNcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYoYW5pbWF0aW9uICE9PSAnJyl7XG4gICAgICBNb3Rpb24uYW5pbWF0ZU91dCgkKHRoaXMpLCBhbmltYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICAkKHRoaXMpLmZhZGVPdXQoKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZvY3VzTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlLWZvY3VzJyk7XG4gICAgJChgIyR7aWR9YCkudHJpZ2dlckhhbmRsZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJywgWyQodGhpcyldKTtcbiAgfVxufTtcblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1vcGVuXSB3aWxsIHJldmVhbCBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLW9wZW5dJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2VdIHdpbGwgY2xvc2UgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4vLyBJZiB1c2VkIHdpdGhvdXQgYSB2YWx1ZSBvbiBbZGF0YS1jbG9zZV0sIHRoZSBldmVudCB3aWxsIGJ1YmJsZSwgYWxsb3dpbmcgaXQgdG8gY2xvc2UgYSBwYXJlbnQgY29tcG9uZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlXSB3aWxsIHRvZ2dsZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zYWJsZV0gd2lsbCByZXNwb25kIHRvIGNsb3NlLnpmLnRyaWdnZXIgZXZlbnRzLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xvc2UuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbG9zZS56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlYWJsZV0sIFtkYXRhLWNsb3NhYmxlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlLWZvY3VzXSB3aWxsIHJlc3BvbmQgdG8gY29taW5nIGluIGFuZCBvdXQgb2YgZm9jdXNcblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGUtZm9jdXNdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xufVxuXG5cblxuLy8gTW9yZSBHbG9iYWwvY29tcGxleCBsaXN0ZW5lcnMgYW5kIHRyaWdnZXJzXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsICA9IHtcbiAgcmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHJlc2l6ZSBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwicmVzaXplXCIpO1xuICB9LFxuICBzY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgc2Nyb2xsIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJzY3JvbGxcIik7XG4gIH0sXG4gIGNsb3NlTWVMaXN0ZW5lcjogZnVuY3Rpb24oZSwgcGx1Z2luSWQpe1xuICAgIGxldCBwbHVnaW4gPSBlLm5hbWVzcGFjZS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBwbHVnaW5zID0gJChgW2RhdGEtJHtwbHVnaW59XWApLm5vdChgW2RhdGEteWV0aS1ib3g9XCIke3BsdWdpbklkfVwiXWApO1xuXG4gICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgX3RoaXMgPSAkKHRoaXMpO1xuICAgICAgX3RoaXMudHJpZ2dlckhhbmRsZXIoJ2Nsb3NlLnpmLnRyaWdnZXInLCBbX3RoaXNdKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBHbG9iYWwsIHBhcnNlcyB3aG9sZSBkb2N1bWVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIgPSBmdW5jdGlvbihwbHVnaW5OYW1lKSB7XG4gIHZhciB5ZXRpQm94ZXMgPSAkKCdbZGF0YS15ZXRpLWJveF0nKSxcbiAgICAgIHBsdWdOYW1lcyA9IFsnZHJvcGRvd24nLCAndG9vbHRpcCcsICdyZXZlYWwnXTtcblxuICBpZihwbHVnaW5OYW1lKXtcbiAgICBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzLnB1c2gocGx1Z2luTmFtZSk7XG4gICAgfWVsc2UgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwbHVnaW5OYW1lWzBdID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMgPSBwbHVnTmFtZXMuY29uY2F0KHBsdWdpbk5hbWUpO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5lcnJvcignUGx1Z2luIG5hbWVzIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgfVxuICBpZih5ZXRpQm94ZXMubGVuZ3RoKXtcbiAgICBsZXQgbGlzdGVuZXJzID0gcGx1Z05hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGBjbG9zZW1lLnpmLiR7bmFtZX1gO1xuICAgIH0pLmpvaW4oJyAnKTtcblxuICAgICQod2luZG93KS5vZmYobGlzdGVuZXJzKS5vbihsaXN0ZW5lcnMsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuY2xvc2VNZUxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCB0cmlnZ2VyLCBsaXN0ZW5lcikge1xuICBsZXQgdGltZXIsIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuICAkKHdpbmRvdykub2ZmKHRyaWdnZXIpLm9uKHRyaWdnZXIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGltZXIpIHsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgbGlzdGVuZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgZGVib3VuY2UgfHwgMTApOy8vZGVmYXVsdCB0aW1lIHRvIGVtaXQgc2Nyb2xsIGV2ZW50XG4gIH0pO1xufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1yZXNpemVdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdyZXNpemUuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwucmVzaXplTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtc2Nyb2xsXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAnc2Nyb2xsLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnNjcm9sbExpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyID0gZnVuY3Rpb24oJGVsZW0pIHtcbiAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpeyByZXR1cm4gZmFsc2U7IH1cbiAgbGV0ICRub2RlcyA9ICRlbGVtLmZpbmQoJ1tkYXRhLXJlc2l6ZV0sIFtkYXRhLXNjcm9sbF0sIFtkYXRhLW11dGF0ZV0nKTtcblxuICAvL2VsZW1lbnQgY2FsbGJhY2tcbiAgdmFyIGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25SZWNvcmRzTGlzdCkge1xuICAgIHZhciAkdGFyZ2V0ID0gJChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnRhcmdldCk7XG5cbiAgICAvL3RyaWdnZXIgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50IGRlcGVuZGluZyBvbiB0eXBlXG4gICAgc3dpdGNoIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhdHRyaWJ1dGVzXCI6XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJzY3JvbGxcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInLCBbJHRhcmdldCwgd2luZG93LnBhZ2VZT2Zmc2V0XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInJlc2l6ZVwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0XSk7XG4gICAgICAgICB9XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJjaGlsZExpc3RcIjpcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvL25vdGhpbmdcbiAgICB9XG4gIH07XG5cbiAgaWYgKCRub2Rlcy5sZW5ndGgpIHtcbiAgICAvL2ZvciBlYWNoIGVsZW1lbnQgdGhhdCBuZWVkcyB0byBsaXN0ZW4gZm9yIHJlc2l6aW5nLCBzY3JvbGxpbmcsIG9yIG11dGF0aW9uIGFkZCBhIHNpbmdsZSBvYnNlcnZlclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9ICRub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHZhciBlbGVtZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uKTtcbiAgICAgIGVsZW1lbnRPYnNlcnZlci5vYnNlcnZlKCRub2Rlc1tpXSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFtcImRhdGEtZXZlbnRzXCIsIFwic3R5bGVcIl0gfSk7XG4gICAgfVxuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuXG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIoKTtcbn1cblxuXG5UcmlnZ2Vycy5pbml0ID0gZnVuY3Rpb24gKCQsIEZvdW5kYXRpb24pIHtcbiAgb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgIT09IHRydWUpIHtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMoKTtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgICQudHJpZ2dlcnNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZihGb3VuZGF0aW9uKSB7XG4gICAgRm91bmRhdGlvbi5UcmlnZ2VycyA9IFRyaWdnZXJzO1xuICAgIC8vIExlZ2FjeSBpbmNsdWRlZCB0byBiZSBiYWNrd2FyZHMgY29tcGF0aWJsZSBmb3Igbm93LlxuICAgIEZvdW5kYXRpb24uSUhlYXJZb3UgPSBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzXG4gIH1cbn1cblxuZXhwb3J0IHtUcmlnZ2Vyc307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
