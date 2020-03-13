(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.smoothScroll"), require("./foundation.util.motion"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.smoothScroll", "./foundation.util.motion", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.magellan"] = factory(require("./foundation.core"), require("./foundation.smoothScroll"), require("./foundation.util.motion"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.magellan"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.smoothScroll"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_smoothScroll__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 8);
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
      "./foundation.smoothScroll":
      /*!************************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.smoothScroll"],"amd":"./foundation.smoothScroll","commonjs":"./foundation.smoothScroll","commonjs2":"./foundation.smoothScroll"} ***!
        \************************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_smoothScroll__;
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
      "./js/entries/plugins/foundation.magellan.js":
      /*!***************************************************!*\
        !*** ./js/entries/plugins/foundation.magellan.js ***!
        \***************************************************/

      /*! exports provided: Foundation, Magellan */

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


        var _foundation_magellan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.magellan */
        "./js/foundation.magellan.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Magellan", function () {
          return _foundation_magellan__WEBPACK_IMPORTED_MODULE_1__["Magellan"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_magellan__WEBPACK_IMPORTED_MODULE_1__["Magellan"], 'Magellan');
        /***/

      },

      /***/
      "./js/foundation.magellan.js":
      /*!***********************************!*\
        !*** ./js/foundation.magellan.js ***!
        \***********************************/

      /*! exports provided: Magellan */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Magellan", function () {
          return Magellan;
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


        var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.smoothScroll */
        "./foundation.smoothScroll");
        /* harmony import */


        var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_2__);
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
         * Magellan module.
         * @module foundation.magellan
         * @requires foundation.smoothScroll
         * @requires foundation.util.triggers
         */


        var Magellan = /*#__PURE__*/function (_Plugin) {
          _inherits(Magellan, _Plugin);

          function Magellan() {
            _classCallCheck(this, Magellan);

            return _possibleConstructorReturn(this, _getPrototypeOf(Magellan).apply(this, arguments));
          }

          _createClass(Magellan, [{
            key: "_setup",

            /**
             * Creates a new instance of Magellan.
             * @class
             * @name Magellan
             * @fires Magellan#init
             * @param {Object} element - jQuery object to add the trigger to.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Magellan.defaults, this.$element.data(), options);
              this.className = 'Magellan'; // ie9 back compat
              // Triggers init is idempotent, just need to make sure it is initialized

              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              this._init();

              this.calcPoints();
            }
            /**
             * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              var id = this.$element[0].id || Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'magellan');

              var _this = this;

              this.$targets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');
              this.$links = this.$element.find('a');
              this.$element.attr({
                'data-resize': id,
                'data-scroll': id,
                'id': id
              });
              this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
              this.scrollPos = parseInt(window.pageYOffset, 10);

              this._events();
            }
            /**
             * Calculates an array of pixel values that are the demarcation lines between locations on the page.
             * Can be invoked if new elements are added or the size of a location changes.
             * @function
             */

          }, {
            key: "calcPoints",
            value: function calcPoints() {
              var _this = this,
                  body = document.body,
                  html = document.documentElement;

              this.points = [];
              this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
              this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
              this.$targets.each(function () {
                var $tar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    pt = Math.round($tar.offset().top - _this.options.threshold);
                $tar.targetPoint = pt;

                _this.points.push(pt);
              });
            }
            /**
             * Initializes events for Magellan.
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              var _this = this,
                  $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body'),
                  opts = {
                duration: _this.options.animationDuration,
                easing: _this.options.animationEasing
              };

              jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', function () {
                if (_this.options.deepLinking) {
                  if (location.hash) {
                    _this.scrollToLoc(location.hash);
                  }
                }

                _this.calcPoints();

                _this._updateActive();
              });
              _this.onLoadListener = Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
                _this.$element.on({
                  'resizeme.zf.trigger': _this.reflow.bind(_this),
                  'scrollme.zf.trigger': _this._updateActive.bind(_this)
                }).on('click.zf.magellan', 'a[href^="#"]', function (e) {
                  e.preventDefault();
                  var arrival = this.getAttribute('href');

                  _this.scrollToLoc(arrival);
                });
              });

              this._deepLinkScroll = function (e) {
                if (_this.options.deepLinking) {
                  _this.scrollToLoc(window.location.hash);
                }
              };

              jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._deepLinkScroll);
            }
            /**
             * Function to scroll to a given location on the page.
             * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
             * @function
             */

          }, {
            key: "scrollToLoc",
            value: function scrollToLoc(loc) {
              this._inTransition = true;

              var _this = this;

              var options = {
                animationEasing: this.options.animationEasing,
                animationDuration: this.options.animationDuration,
                threshold: this.options.threshold,
                offset: this.options.offset
              };

              _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_2__["SmoothScroll"].scrollToLoc(loc, options, function () {
                _this._inTransition = false;
              });
            }
            /**
             * Calls necessary functions to update Magellan upon DOM change
             * @function
             */

          }, {
            key: "reflow",
            value: function reflow() {
              this.calcPoints();

              this._updateActive();
            }
            /**
             * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
             * @private
             * @function
             * @fires Magellan#update
             */

          }, {
            key: "_updateActive",
            value: function _updateActive()
            /*evt, elem, scrollPos*/
            {
              var _this2 = this;

              if (this._inTransition) return;
              var newScrollPos = parseInt(window.pageYOffset, 10);
              var isScrollingUp = this.scrollPos > newScrollPos;
              this.scrollPos = newScrollPos;
              var activeIdx; // Before the first point: no link

              if (newScrollPos < this.points[0]) {}
              /* do nothing */
              // At the bottom of the page: last link
              else if (newScrollPos + this.winHeight === this.docHeight) {
                  activeIdx = this.points.length - 1;
                } // Otherwhise, use the last visible link
                else {
                    var visibleLinks = this.points.filter(function (p, i) {
                      return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
                    });
                    activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
                  } // Get the new active link


              var $oldActive = this.$active;
              var activeHash = '';

              if (typeof activeIdx !== 'undefined') {
                this.$active = this.$links.filter('[href="#' + this.$targets.eq(activeIdx).data('magellan-target') + '"]');
                if (this.$active.length) activeHash = this.$active[0].getAttribute('href');
              } else {
                this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
              }

              var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
              var isNewHash = activeHash !== window.location.hash; // Update the active link element

              if (isNewActive) {
                $oldActive.removeClass(this.options.activeClass);
                this.$active.addClass(this.options.activeClass);
              } // Update the hash (it may have changed with the same active link)


              if (this.options.deepLinking && isNewHash) {
                if (window.history.pushState) {
                  // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
                  var url = activeHash ? activeHash : window.location.pathname + window.location.search;

                  if (this.options.updateHistory) {
                    window.history.pushState({}, '', url);
                  } else {
                    window.history.replaceState({}, '', url);
                  }
                } else {
                  window.location.hash = activeHash;
                }
              }

              if (isNewActive) {
                /**
                 * Fires when magellan is finished updating to the new active element.
                 * @event Magellan#update
                 */
                this.$element.trigger('update.zf.magellan', [this.$active]);
              }
            }
            /**
             * Destroys an instance of Magellan and resets the url of the window.
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.$element.off('.zf.trigger .zf.magellan').find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);

              if (this.options.deepLinking) {
                var hash = this.$active[0].getAttribute('href');
                window.location.hash.replace(hash, '');
              }

              jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._deepLinkScroll);
              if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
            }
          }]);

          return Magellan;
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
        /**
         * Default settings for plugin
         */


        Magellan.defaults = {
          /**
           * Amount of time, in ms, the animated scrolling should take between locations.
           * @option
           * @type {number}
           * @default 500
           */
          animationDuration: 500,

          /**
           * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
           * @option
           * @type {string}
           * @default 'linear'
           * @see {@link https://api.jquery.com/animate|Jquery animate}
           */
          animationEasing: 'linear',

          /**
           * Number of pixels to use as a marker for location changes.
           * @option
           * @type {number}
           * @default 50
           */
          threshold: 50,

          /**
           * Class applied to the active locations link on the magellan container.
           * @option
           * @type {string}
           * @default 'is-active'
           */
          activeClass: 'is-active',

          /**
           * Allows the script to manipulate the url of the current page, and if supported, alter the history.
           * @option
           * @type {boolean}
           * @default false
           */
          deepLinking: false,

          /**
           * Update the browser history with the active link, if deep linking is enabled.
           * @option
           * @type {boolean}
           * @default false
           */
          updateHistory: false,

          /**
           * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
           * @option
           * @type {number}
           * @default 0
           */
          offset: 0
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
      8:
      /*!*********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.magellan.js ***!
        \*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.magellan.js */
        "./js/entries/plugins/foundation.magellan.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ubWFnZWxsYW4uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24ubWFnZWxsYW4uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC50cmlnZ2Vycy5qcyIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wialF1ZXJ5XCJdLFwiYW1kXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbIkZvdW5kYXRpb24iLCJNYWdlbGxhbiIsImVsZW1lbnQiLCJvcHRpb25zIiwiJCIsIlRyaWdnZXJzIiwiaWQiLCJHZXRZb0RpZ2l0cyIsIl90aGlzIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJib2R5IiwiZG9jdW1lbnQiLCJodG1sIiwiTWF0aCIsIiR0YXIiLCJwdCIsIiRib2R5Iiwib3B0cyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiYW5pbWF0aW9uRWFzaW5nIiwibG9jYXRpb24iLCJvbkxvYWQiLCJlIiwiYXJyaXZhbCIsImxvYyIsImFuaW1hdGlvbkR1cmF0aW9uIiwidGhyZXNob2xkIiwib2Zmc2V0IiwiU21vb3RoU2Nyb2xsIiwibmV3U2Nyb2xsUG9zIiwiaXNTY3JvbGxpbmdVcCIsImFjdGl2ZUlkeCIsInZpc2libGVMaW5rcyIsInAiLCIkb2xkQWN0aXZlIiwiYWN0aXZlSGFzaCIsImlzTmV3QWN0aXZlIiwiaXNOZXdIYXNoIiwidXJsIiwiaGFzaCIsIlBsdWdpbiIsImFjdGl2ZUNsYXNzIiwiZGVlcExpbmtpbmciLCJ1cGRhdGVIaXN0b3J5IiwiTXV0YXRpb25PYnNlcnZlciIsInByZWZpeGVzIiwiaSIsInRyaWdnZXJzIiwiZWwiLCJ0eXBlIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwidG9nZ2xlTGlzdGVuZXIiLCJjbG9zZWFibGVMaXN0ZW5lciIsImFuaW1hdGlvbiIsIk1vdGlvbiIsInRvZ2dsZUZvY3VzTGlzdGVuZXIiLCIkZWxlbSIsInJlc2l6ZUxpc3RlbmVyIiwiJG5vZGVzIiwic2Nyb2xsTGlzdGVuZXIiLCJjbG9zZU1lTGlzdGVuZXIiLCJwbHVnaW4iLCJwbHVnaW5zIiwieWV0aUJveGVzIiwicGx1Z05hbWVzIiwicGx1Z2luTmFtZSIsImNvbnNvbGUiLCJsaXN0ZW5lcnMiLCJhcmdzIiwiQXJyYXkiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJsaXN0ZW5lciIsImRlYm91bmNlIiwiZGVib3VuY2VHbG9iYWxMaXN0ZW5lciIsImxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24iLCIkdGFyZ2V0IiwibXV0YXRpb25SZWNvcmRzTGlzdCIsImVsZW1lbnRPYnNlcnZlciIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsImF0dHJpYnV0ZUZpbHRlciIsIiRkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwyQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSwyQkFBQSxFQUFBLDBCQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEscUJBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwyQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSx5QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSx3QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLG9EQUFBLEVBQUEsbURBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUF5QyxVQUFBLFVBQUEsRUFBQSxJQUF6QztBQUF5QyxVQUFBLEtBQUEsRUFBQTtBQUF6QyxTQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQWdILGlCQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckksQ0FBQTtBQUNBOztBQUFBLGVBQUEsRUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxNQUFBLEdBQUEsTUFBQSxJQUFBLE1BQUEsQ0FBQSxVQUFBO0FBQ0E7QUFBQSxpQkFBQSxVQUFBLEdBQUE7QUFBMkIsaUJBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQTtBQUE0QixTQUR2RDtBQUVBO0FBQUEsaUJBQUEsZ0JBQUEsR0FBQTtBQUFpQyxpQkFBQSxNQUFBO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQTtBQUNBOzs7QUFBQSxlQUFBLE1BQUE7QUFDQTtBQUFBLE9BTkE7OztBQVFBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBO0FBQXNELGVBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLENBQUE7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOztBQUFBLGFBQUEsbUJBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSw0Q0FBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsb0RBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLG1EQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsNkNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSxpREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxxQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxVQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLGlEQUFBLENBQUEsVUFBQSxDQUFBO0FBQUEsU0FBQTs7QUNHQUEsUUFBQUEsNkNBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE1BQUFBLENBQWtCQyxpREFBQUEsQ0FBbEJELFVBQWtCQyxDQUFsQkQsRUFBQUEsVUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7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LGdCQUFJbkIsQ0FBQyxDQUFEQSxtQkFBQUEsS0FBSixJQUFBLEVBQW9DO0FBQ2xDQyxjQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQTtBQUNBQSxjQUFBQSxRQUFRLENBQVJBLFlBQUFBLENBQUFBLGtCQUFBQTtBQUNBRCxjQUFBQSxDQUFDLENBQURBLG1CQUFBQSxHQUFBQSxJQUFBQTtBQUNEO0FBTEhtQixXQUFBQTs7QUFRQSxjQUFBLFVBQUEsRUFBZTtBQUNidkIsWUFBQUEsVUFBVSxDQUFWQSxRQUFBQSxHQURhLFFBQ2JBLENBRGEsQ0FFYjs7QUFDQUEsWUFBQUEsVUFBVSxDQUFWQSxRQUFBQSxHQUFzQkssUUFBUSxDQUFSQSxZQUFBQSxDQUF0Qkwsa0JBQUFBO0FBQ0Q7QUFiSEssU0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUEEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtDQUFBOzs7Ozs7QU5VQTtDQVZBIiwiZmlsZSI6ImZvdW5kYXRpb24vZm91bmRhdGlvbi5tYWdlbGxhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnNtb290aFNjcm9sbFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcIi4vZm91bmRhdGlvbi5zbW9vdGhTY3JvbGxcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5tYWdlbGxhblwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnNtb290aFNjcm9sbFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm1vdGlvblwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24ubWFnZWxsYW5cIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5zbW9vdGhTY3JvbGxcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5tb3Rpb25cIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9zbW9vdGhTY3JvbGxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX21vdGlvbl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXzsiLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuXG5pbXBvcnQgeyBNYWdlbGxhbiB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24ubWFnZWxsYW4nO1xuRm91bmRhdGlvbi5wbHVnaW4oTWFnZWxsYW4sICdNYWdlbGxhbicpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBNYWdlbGxhbiB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuaW1wb3J0IHsgb25Mb2FkLCBHZXRZb0RpZ2l0cyB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IFNtb290aFNjcm9sbCB9IGZyb20gJy4vZm91bmRhdGlvbi5zbW9vdGhTY3JvbGwnO1xuXG5pbXBvcnQgeyBUcmlnZ2VycyB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzJztcblxuLyoqXG4gKiBNYWdlbGxhbiBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24ubWFnZWxsYW5cbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnNtb290aFNjcm9sbFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50cmlnZ2Vyc1xuICovXG5cbmNsYXNzIE1hZ2VsbGFuIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgTWFnZWxsYW4uXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBNYWdlbGxhblxuICAgKiBAZmlyZXMgTWFnZWxsYW4jaW5pdFxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gYWRkIHRoZSB0cmlnZ2VyIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyAgPSAkLmV4dGVuZCh7fSwgTWFnZWxsYW4uZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdNYWdlbGxhbic7IC8vIGllOSBiYWNrIGNvbXBhdFxuXG4gICAgLy8gVHJpZ2dlcnMgaW5pdCBpcyBpZGVtcG90ZW50LCBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIGl0IGlzIGluaXRpYWxpemVkXG4gICAgVHJpZ2dlcnMuaW5pdCgkKTtcblxuICAgIHRoaXMuX2luaXQoKTtcbiAgICB0aGlzLmNhbGNQb2ludHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgTWFnZWxsYW4gcGx1Z2luIGFuZCBjYWxscyBmdW5jdGlvbnMgdG8gZ2V0IGVxdWFsaXplciBmdW5jdGlvbmluZyBvbiBsb2FkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgdmFyIGlkID0gdGhpcy4kZWxlbWVudFswXS5pZCB8fCBHZXRZb0RpZ2l0cyg2LCAnbWFnZWxsYW4nKTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuJHRhcmdldHMgPSAkKCdbZGF0YS1tYWdlbGxhbi10YXJnZXRdJyk7XG4gICAgdGhpcy4kbGlua3MgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2EnKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgJ2RhdGEtcmVzaXplJzogaWQsXG4gICAgICAnZGF0YS1zY3JvbGwnOiBpZCxcbiAgICAgICdpZCc6IGlkXG4gICAgfSk7XG4gICAgdGhpcy4kYWN0aXZlID0gJCgpO1xuICAgIHRoaXMuc2Nyb2xsUG9zID0gcGFyc2VJbnQod2luZG93LnBhZ2VZT2Zmc2V0LCAxMCk7XG5cbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIGFuIGFycmF5IG9mIHBpeGVsIHZhbHVlcyB0aGF0IGFyZSB0aGUgZGVtYXJjYXRpb24gbGluZXMgYmV0d2VlbiBsb2NhdGlvbnMgb24gdGhlIHBhZ2UuXG4gICAqIENhbiBiZSBpbnZva2VkIGlmIG5ldyBlbGVtZW50cyBhcmUgYWRkZWQgb3IgdGhlIHNpemUgb2YgYSBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIGNhbGNQb2ludHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICAgIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMud2luSGVpZ2h0ID0gTWF0aC5yb3VuZChNYXRoLm1heCh3aW5kb3cuaW5uZXJIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0KSk7XG4gICAgdGhpcy5kb2NIZWlnaHQgPSBNYXRoLnJvdW5kKE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCkpO1xuXG4gICAgdGhpcy4kdGFyZ2V0cy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgJHRhciA9ICQodGhpcyksXG4gICAgICAgICAgcHQgPSBNYXRoLnJvdW5kKCR0YXIub2Zmc2V0KCkudG9wIC0gX3RoaXMub3B0aW9ucy50aHJlc2hvbGQpO1xuICAgICAgJHRhci50YXJnZXRQb2ludCA9IHB0O1xuICAgICAgX3RoaXMucG9pbnRzLnB1c2gocHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGV2ZW50cyBmb3IgTWFnZWxsYW4uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgICRib2R5ID0gJCgnaHRtbCwgYm9keScpLFxuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogICBfdGhpcy5vcHRpb25zLmFuaW1hdGlvbkVhc2luZ1xuICAgICAgICB9O1xuXG4gICAgJCh3aW5kb3cpLm9uZSgnbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBpZihfdGhpcy5vcHRpb25zLmRlZXBMaW5raW5nKXtcbiAgICAgICAgaWYobG9jYXRpb24uaGFzaCl7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsVG9Mb2MobG9jYXRpb24uaGFzaCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF90aGlzLmNhbGNQb2ludHMoKTtcbiAgICAgIF90aGlzLl91cGRhdGVBY3RpdmUoKTtcbiAgICB9KTtcblxuICAgIF90aGlzLm9uTG9hZExpc3RlbmVyID0gb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuJGVsZW1lbnRcbiAgICAgICAgLm9uKHtcbiAgICAgICAgICAncmVzaXplbWUuemYudHJpZ2dlcic6IF90aGlzLnJlZmxvdy5iaW5kKF90aGlzKSxcbiAgICAgICAgICAnc2Nyb2xsbWUuemYudHJpZ2dlcic6IF90aGlzLl91cGRhdGVBY3RpdmUuYmluZChfdGhpcylcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljay56Zi5tYWdlbGxhbicsICdhW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHZhciBhcnJpdmFsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICBfdGhpcy5zY3JvbGxUb0xvYyhhcnJpdmFsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9kZWVwTGlua1Njcm9sbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmKF90aGlzLm9wdGlvbnMuZGVlcExpbmtpbmcpIHtcbiAgICAgICAgX3RoaXMuc2Nyb2xsVG9Mb2Mod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCB0aGlzLl9kZWVwTGlua1Njcm9sbCk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gc2Nyb2xsIHRvIGEgZ2l2ZW4gbG9jYXRpb24gb24gdGhlIHBhZ2UuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsb2MgLSBhIHByb3Blcmx5IGZvcm1hdHRlZCBqUXVlcnkgaWQgc2VsZWN0b3IuIEV4YW1wbGU6ICcjZm9vJ1xuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIHNjcm9sbFRvTG9jKGxvYykge1xuICAgIHRoaXMuX2luVHJhbnNpdGlvbiA9IHRydWU7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgYW5pbWF0aW9uRWFzaW5nOiB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRWFzaW5nLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbixcbiAgICAgIHRocmVzaG9sZDogdGhpcy5vcHRpb25zLnRocmVzaG9sZCxcbiAgICAgIG9mZnNldDogdGhpcy5vcHRpb25zLm9mZnNldFxuICAgIH07XG5cbiAgICBTbW9vdGhTY3JvbGwuc2Nyb2xsVG9Mb2MobG9jLCBvcHRpb25zLCBmdW5jdGlvbigpIHtcbiAgICAgIF90aGlzLl9pblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIG5lY2Vzc2FyeSBmdW5jdGlvbnMgdG8gdXBkYXRlIE1hZ2VsbGFuIHVwb24gRE9NIGNoYW5nZVxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIHJlZmxvdygpIHtcbiAgICB0aGlzLmNhbGNQb2ludHMoKTtcbiAgICB0aGlzLl91cGRhdGVBY3RpdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB2aXNpYmlsaXR5IG9mIGFuIGFjdGl2ZSBsb2NhdGlvbiBsaW5rLCBhbmQgdXBkYXRlcyB0aGUgdXJsIGhhc2ggZm9yIHRoZSBwYWdlLCBpZiBkZWVwTGlua2luZyBlbmFibGVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb25cbiAgICogQGZpcmVzIE1hZ2VsbGFuI3VwZGF0ZVxuICAgKi9cbiAgX3VwZGF0ZUFjdGl2ZSgvKmV2dCwgZWxlbSwgc2Nyb2xsUG9zKi8pIHtcbiAgICBpZih0aGlzLl9pblRyYW5zaXRpb24pIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Njcm9sbFBvcyA9IHBhcnNlSW50KHdpbmRvdy5wYWdlWU9mZnNldCwgMTApO1xuICAgIGNvbnN0IGlzU2Nyb2xsaW5nVXAgPSB0aGlzLnNjcm9sbFBvcyA+IG5ld1Njcm9sbFBvcztcbiAgICB0aGlzLnNjcm9sbFBvcyA9IG5ld1Njcm9sbFBvcztcblxuICAgIGxldCBhY3RpdmVJZHg7XG4gICAgLy8gQmVmb3JlIHRoZSBmaXJzdCBwb2ludDogbm8gbGlua1xuICAgIGlmKG5ld1Njcm9sbFBvcyA8IHRoaXMucG9pbnRzWzBdKXsgLyogZG8gbm90aGluZyAqLyB9XG4gICAgLy8gQXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZTogbGFzdCBsaW5rXG4gICAgZWxzZSBpZihuZXdTY3JvbGxQb3MgKyB0aGlzLndpbkhlaWdodCA9PT0gdGhpcy5kb2NIZWlnaHQpeyBhY3RpdmVJZHggPSB0aGlzLnBvaW50cy5sZW5ndGggLSAxOyB9XG4gICAgLy8gT3RoZXJ3aGlzZSwgdXNlIHRoZSBsYXN0IHZpc2libGUgbGlua1xuICAgIGVsc2V7XG4gICAgICBjb25zdCB2aXNpYmxlTGlua3MgPSB0aGlzLnBvaW50cy5maWx0ZXIoKHAsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChwIC0gdGhpcy5vcHRpb25zLm9mZnNldCAtIChpc1Njcm9sbGluZ1VwID8gdGhpcy5vcHRpb25zLnRocmVzaG9sZCA6IDApKSA8PSBuZXdTY3JvbGxQb3M7XG4gICAgICB9KTtcbiAgICAgIGFjdGl2ZUlkeCA9IHZpc2libGVMaW5rcy5sZW5ndGggPyB2aXNpYmxlTGlua3MubGVuZ3RoIC0gMSA6IDA7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBuZXcgYWN0aXZlIGxpbmtcbiAgICBjb25zdCAkb2xkQWN0aXZlID0gdGhpcy4kYWN0aXZlO1xuICAgIGxldCBhY3RpdmVIYXNoID0gJyc7XG4gICAgaWYodHlwZW9mIGFjdGl2ZUlkeCAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgdGhpcy4kYWN0aXZlID0gdGhpcy4kbGlua3MuZmlsdGVyKCdbaHJlZj1cIiMnICsgdGhpcy4kdGFyZ2V0cy5lcShhY3RpdmVJZHgpLmRhdGEoJ21hZ2VsbGFuLXRhcmdldCcpICsgJ1wiXScpO1xuICAgICAgaWYgKHRoaXMuJGFjdGl2ZS5sZW5ndGgpIGFjdGl2ZUhhc2ggPSB0aGlzLiRhY3RpdmVbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLiRhY3RpdmUgPSAkKCk7XG4gICAgfVxuICAgIGNvbnN0IGlzTmV3QWN0aXZlID0gISghdGhpcy4kYWN0aXZlLmxlbmd0aCAmJiAhJG9sZEFjdGl2ZS5sZW5ndGgpICYmICF0aGlzLiRhY3RpdmUuaXMoJG9sZEFjdGl2ZSk7XG4gICAgY29uc3QgaXNOZXdIYXNoID0gYWN0aXZlSGFzaCAhPT0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGFjdGl2ZSBsaW5rIGVsZW1lbnRcbiAgICBpZihpc05ld0FjdGl2ZSkge1xuICAgICAgJG9sZEFjdGl2ZS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgdGhpcy4kYWN0aXZlLmFkZENsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBoYXNoIChpdCBtYXkgaGF2ZSBjaGFuZ2VkIHdpdGggdGhlIHNhbWUgYWN0aXZlIGxpbmspXG4gICAgaWYodGhpcy5vcHRpb25zLmRlZXBMaW5raW5nICYmIGlzTmV3SGFzaCl7XG4gICAgICBpZih3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpe1xuICAgICAgICAvLyBTZXQgb3IgcmVtb3ZlIHRoZSBoYXNoIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81Mjk4Njg0LzQzMTczODRcbiAgICAgICAgY29uc3QgdXJsID0gYWN0aXZlSGFzaCA/IGFjdGl2ZUhhc2ggOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMudXBkYXRlSGlzdG9yeSl7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgdXJsKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYWN0aXZlSGFzaDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNOZXdBY3RpdmUpIHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZXMgd2hlbiBtYWdlbGxhbiBpcyBmaW5pc2hlZCB1cGRhdGluZyB0byB0aGUgbmV3IGFjdGl2ZSBlbGVtZW50LlxuICAgICAgICogQGV2ZW50IE1hZ2VsbGFuI3VwZGF0ZVxuICAgICAgICovXG4gICAgXHR0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3VwZGF0ZS56Zi5tYWdlbGxhbicsIFt0aGlzLiRhY3RpdmVdKTtcblx0ICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgYW4gaW5zdGFuY2Ugb2YgTWFnZWxsYW4gYW5kIHJlc2V0cyB0aGUgdXJsIG9mIHRoZSB3aW5kb3cuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJy56Zi50cmlnZ2VyIC56Zi5tYWdlbGxhbicpXG4gICAgICAgIC5maW5kKGAuJHt0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3N9YCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5kZWVwTGlua2luZyl7XG4gICAgICB2YXIgaGFzaCA9IHRoaXMuJGFjdGl2ZVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoaGFzaCwgJycpO1xuICAgIH1cblxuICAgICQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2UnLCB0aGlzLl9kZWVwTGlua1Njcm9sbClcbiAgICBpZiAodGhpcy5vbkxvYWRMaXN0ZW5lcikgJCh3aW5kb3cpLm9mZih0aGlzLm9uTG9hZExpc3RlbmVyKTtcbiAgfVxufVxuXG4vKipcbiAqIERlZmF1bHQgc2V0dGluZ3MgZm9yIHBsdWdpblxuICovXG5NYWdlbGxhbi5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lLCBpbiBtcywgdGhlIGFuaW1hdGVkIHNjcm9sbGluZyBzaG91bGQgdGFrZSBiZXR3ZWVuIGxvY2F0aW9ucy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCA1MDBcbiAgICovXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiA1MDAsXG4gIC8qKlxuICAgKiBBbmltYXRpb24gc3R5bGUgdG8gdXNlIHdoZW4gc2Nyb2xsaW5nIGJldHdlZW4gbG9jYXRpb25zLiBDYW4gYmUgYCdzd2luZydgIG9yIGAnbGluZWFyJ2AuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2xpbmVhcidcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9hbmltYXRlfEpxdWVyeSBhbmltYXRlfVxuICAgKi9cbiAgYW5pbWF0aW9uRWFzaW5nOiAnbGluZWFyJyxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBwaXhlbHMgdG8gdXNlIGFzIGEgbWFya2VyIGZvciBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDUwXG4gICAqL1xuICB0aHJlc2hvbGQ6IDUwLFxuICAvKipcbiAgICogQ2xhc3MgYXBwbGllZCB0byB0aGUgYWN0aXZlIGxvY2F0aW9ucyBsaW5rIG9uIHRoZSBtYWdlbGxhbiBjb250YWluZXIuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2lzLWFjdGl2ZSdcbiAgICovXG4gIGFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJyxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgc2NyaXB0IHRvIG1hbmlwdWxhdGUgdGhlIHVybCBvZiB0aGUgY3VycmVudCBwYWdlLCBhbmQgaWYgc3VwcG9ydGVkLCBhbHRlciB0aGUgaGlzdG9yeS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRlZXBMaW5raW5nOiBmYWxzZSxcbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgYnJvd3NlciBoaXN0b3J5IHdpdGggdGhlIGFjdGl2ZSBsaW5rLCBpZiBkZWVwIGxpbmtpbmcgaXMgZW5hYmxlZC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHVwZGF0ZUhpc3Rvcnk6IGZhbHNlLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyB0byBvZmZzZXQgdGhlIHNjcm9sbCBvZiB0aGUgcGFnZSBvbiBpdGVtIGNsaWNrIGlmIHVzaW5nIGEgc3RpY2t5IG5hdiBiYXIuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgb2Zmc2V0OiAwXG59XG5cbmV4cG9ydCB7TWFnZWxsYW59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgTW90aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uJztcblxuY29uc3QgTXV0YXRpb25PYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVmaXhlcyA9IFsnV2ViS2l0JywgJ01veicsICdPJywgJ01zJywgJyddO1xuICBmb3IgKHZhciBpPTA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChgJHtwcmVmaXhlc1tpXX1NdXRhdGlvbk9ic2VydmVyYCBpbiB3aW5kb3cpIHtcbiAgICAgIHJldHVybiB3aW5kb3dbYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KCkpO1xuXG5jb25zdCB0cmlnZ2VycyA9IChlbCwgdHlwZSkgPT4ge1xuICBlbC5kYXRhKHR5cGUpLnNwbGl0KCcgJykuZm9yRWFjaChpZCA9PiB7XG4gICAgJChgIyR7aWR9YClbIHR5cGUgPT09ICdjbG9zZScgPyAndHJpZ2dlcicgOiAndHJpZ2dlckhhbmRsZXInXShgJHt0eXBlfS56Zi50cmlnZ2VyYCwgW2VsXSk7XG4gIH0pO1xufTtcblxudmFyIFRyaWdnZXJzID0ge1xuICBMaXN0ZW5lcnM6IHtcbiAgICBCYXNpYzoge30sXG4gICAgR2xvYmFsOiB7fVxuICB9LFxuICBJbml0aWFsaXplcnM6IHt9XG59XG5cblRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYyAgPSB7XG4gIG9wZW5MaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ29wZW4nKTtcbiAgfSxcbiAgY2xvc2VMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdjbG9zZScpO1xuICAgIGlmIChpZCkge1xuICAgICAgdHJpZ2dlcnMoJCh0aGlzKSwgJ2Nsb3NlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZS56Zi50cmlnZ2VyJyk7XG4gICAgfVxuICB9LFxuICB0b2dnbGVMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCd0b2dnbGUnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICd0b2dnbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCd0b2dnbGUuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSxcbiAgY2xvc2VhYmxlTGlzdGVuZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgYW5pbWF0aW9uID0gJCh0aGlzKS5kYXRhKCdjbG9zYWJsZScpO1xuXG4gICAgLy8gT25seSBjbG9zZSB0aGUgZmlyc3QgY2xvc2FibGUgZWxlbWVudC4gU2VlIGh0dHBzOi8vZ2l0LmlvL3pmLTc4MzNcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYoYW5pbWF0aW9uICE9PSAnJyl7XG4gICAgICBNb3Rpb24uYW5pbWF0ZU91dCgkKHRoaXMpLCBhbmltYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICAkKHRoaXMpLmZhZGVPdXQoKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZvY3VzTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlLWZvY3VzJyk7XG4gICAgJChgIyR7aWR9YCkudHJpZ2dlckhhbmRsZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJywgWyQodGhpcyldKTtcbiAgfVxufTtcblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1vcGVuXSB3aWxsIHJldmVhbCBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLW9wZW5dJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2VdIHdpbGwgY2xvc2UgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4vLyBJZiB1c2VkIHdpdGhvdXQgYSB2YWx1ZSBvbiBbZGF0YS1jbG9zZV0sIHRoZSBldmVudCB3aWxsIGJ1YmJsZSwgYWxsb3dpbmcgaXQgdG8gY2xvc2UgYSBwYXJlbnQgY29tcG9uZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlXSB3aWxsIHRvZ2dsZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zYWJsZV0gd2lsbCByZXNwb25kIHRvIGNsb3NlLnpmLnRyaWdnZXIgZXZlbnRzLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xvc2UuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbG9zZS56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlYWJsZV0sIFtkYXRhLWNsb3NhYmxlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlLWZvY3VzXSB3aWxsIHJlc3BvbmQgdG8gY29taW5nIGluIGFuZCBvdXQgb2YgZm9jdXNcblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGUtZm9jdXNdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xufVxuXG5cblxuLy8gTW9yZSBHbG9iYWwvY29tcGxleCBsaXN0ZW5lcnMgYW5kIHRyaWdnZXJzXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsICA9IHtcbiAgcmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHJlc2l6ZSBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwicmVzaXplXCIpO1xuICB9LFxuICBzY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgc2Nyb2xsIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJzY3JvbGxcIik7XG4gIH0sXG4gIGNsb3NlTWVMaXN0ZW5lcjogZnVuY3Rpb24oZSwgcGx1Z2luSWQpe1xuICAgIGxldCBwbHVnaW4gPSBlLm5hbWVzcGFjZS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBwbHVnaW5zID0gJChgW2RhdGEtJHtwbHVnaW59XWApLm5vdChgW2RhdGEteWV0aS1ib3g9XCIke3BsdWdpbklkfVwiXWApO1xuXG4gICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgX3RoaXMgPSAkKHRoaXMpO1xuICAgICAgX3RoaXMudHJpZ2dlckhhbmRsZXIoJ2Nsb3NlLnpmLnRyaWdnZXInLCBbX3RoaXNdKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBHbG9iYWwsIHBhcnNlcyB3aG9sZSBkb2N1bWVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIgPSBmdW5jdGlvbihwbHVnaW5OYW1lKSB7XG4gIHZhciB5ZXRpQm94ZXMgPSAkKCdbZGF0YS15ZXRpLWJveF0nKSxcbiAgICAgIHBsdWdOYW1lcyA9IFsnZHJvcGRvd24nLCAndG9vbHRpcCcsICdyZXZlYWwnXTtcblxuICBpZihwbHVnaW5OYW1lKXtcbiAgICBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzLnB1c2gocGx1Z2luTmFtZSk7XG4gICAgfWVsc2UgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwbHVnaW5OYW1lWzBdID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMgPSBwbHVnTmFtZXMuY29uY2F0KHBsdWdpbk5hbWUpO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5lcnJvcignUGx1Z2luIG5hbWVzIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgfVxuICBpZih5ZXRpQm94ZXMubGVuZ3RoKXtcbiAgICBsZXQgbGlzdGVuZXJzID0gcGx1Z05hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGBjbG9zZW1lLnpmLiR7bmFtZX1gO1xuICAgIH0pLmpvaW4oJyAnKTtcblxuICAgICQod2luZG93KS5vZmYobGlzdGVuZXJzKS5vbihsaXN0ZW5lcnMsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuY2xvc2VNZUxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCB0cmlnZ2VyLCBsaXN0ZW5lcikge1xuICBsZXQgdGltZXIsIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuICAkKHdpbmRvdykub2ZmKHRyaWdnZXIpLm9uKHRyaWdnZXIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGltZXIpIHsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgbGlzdGVuZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgZGVib3VuY2UgfHwgMTApOy8vZGVmYXVsdCB0aW1lIHRvIGVtaXQgc2Nyb2xsIGV2ZW50XG4gIH0pO1xufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1yZXNpemVdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdyZXNpemUuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwucmVzaXplTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtc2Nyb2xsXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAnc2Nyb2xsLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnNjcm9sbExpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyID0gZnVuY3Rpb24oJGVsZW0pIHtcbiAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpeyByZXR1cm4gZmFsc2U7IH1cbiAgbGV0ICRub2RlcyA9ICRlbGVtLmZpbmQoJ1tkYXRhLXJlc2l6ZV0sIFtkYXRhLXNjcm9sbF0sIFtkYXRhLW11dGF0ZV0nKTtcblxuICAvL2VsZW1lbnQgY2FsbGJhY2tcbiAgdmFyIGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25SZWNvcmRzTGlzdCkge1xuICAgIHZhciAkdGFyZ2V0ID0gJChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnRhcmdldCk7XG5cbiAgICAvL3RyaWdnZXIgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50IGRlcGVuZGluZyBvbiB0eXBlXG4gICAgc3dpdGNoIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhdHRyaWJ1dGVzXCI6XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJzY3JvbGxcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInLCBbJHRhcmdldCwgd2luZG93LnBhZ2VZT2Zmc2V0XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInJlc2l6ZVwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0XSk7XG4gICAgICAgICB9XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJjaGlsZExpc3RcIjpcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvL25vdGhpbmdcbiAgICB9XG4gIH07XG5cbiAgaWYgKCRub2Rlcy5sZW5ndGgpIHtcbiAgICAvL2ZvciBlYWNoIGVsZW1lbnQgdGhhdCBuZWVkcyB0byBsaXN0ZW4gZm9yIHJlc2l6aW5nLCBzY3JvbGxpbmcsIG9yIG11dGF0aW9uIGFkZCBhIHNpbmdsZSBvYnNlcnZlclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9ICRub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHZhciBlbGVtZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uKTtcbiAgICAgIGVsZW1lbnRPYnNlcnZlci5vYnNlcnZlKCRub2Rlc1tpXSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFtcImRhdGEtZXZlbnRzXCIsIFwic3R5bGVcIl0gfSk7XG4gICAgfVxuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuXG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIoKTtcbn1cblxuXG5UcmlnZ2Vycy5pbml0ID0gZnVuY3Rpb24gKCQsIEZvdW5kYXRpb24pIHtcbiAgb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgIT09IHRydWUpIHtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMoKTtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgICQudHJpZ2dlcnNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZihGb3VuZGF0aW9uKSB7XG4gICAgRm91bmRhdGlvbi5UcmlnZ2VycyA9IFRyaWdnZXJzO1xuICAgIC8vIExlZ2FjeSBpbmNsdWRlZCB0byBiZSBiYWNrd2FyZHMgY29tcGF0aWJsZSBmb3Igbm93LlxuICAgIEZvdW5kYXRpb24uSUhlYXJZb3UgPSBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzXG4gIH1cbn1cblxuZXhwb3J0IHtUcmlnZ2Vyc307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
