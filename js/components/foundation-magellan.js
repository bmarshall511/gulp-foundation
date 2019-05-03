(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.smoothScroll"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.smoothScroll", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.magellan"] = factory(require("./foundation.core"), require("./foundation.smoothScroll"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.magellan"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.smoothScroll"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_smoothScroll__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.smoothScroll */
        "./foundation.smoothScroll");
        /* harmony import */


        var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_2__);

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
         */


        var Magellan =
        /*#__PURE__*/
        function (_Plugin) {
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
              var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'magellan');

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
              _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
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
                  window.history.pushState(null, null, url);
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
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
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
      8:
      /*!*********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.magellan.js ***!
        \*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.magellan.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ubWFnZWxsYW4uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24ubWFnZWxsYW4uanMiLCJ3ZWJwYWNrOi9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOltcImpRdWVyeVwiXSxcImFtZFwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwifSJdLCJuYW1lcyI6WyJGb3VuZGF0aW9uIiwiTWFnZWxsYW4iLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJpZCIsIkdldFlvRGlnaXRzIiwiX3RoaXMiLCJwYXJzZUludCIsIndpbmRvdyIsImJvZHkiLCJkb2N1bWVudCIsImh0bWwiLCJNYXRoIiwiJHRhciIsInB0IiwiJGJvZHkiLCJvcHRzIiwiZHVyYXRpb24iLCJlYXNpbmciLCJhbmltYXRpb25FYXNpbmciLCJsb2NhdGlvbiIsIm9uTG9hZCIsImUiLCJhcnJpdmFsIiwibG9jIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aHJlc2hvbGQiLCJvZmZzZXQiLCJTbW9vdGhTY3JvbGwiLCJuZXdTY3JvbGxQb3MiLCJpc1Njcm9sbGluZ1VwIiwiYWN0aXZlSWR4IiwidmlzaWJsZUxpbmtzIiwicCIsIiRvbGRBY3RpdmUiLCJhY3RpdmVIYXNoIiwiaXNOZXdBY3RpdmUiLCJpc05ld0hhc2giLCJ1cmwiLCJoYXNoIiwiUGx1Z2luIiwiYWN0aXZlQ2xhc3MiLCJkZWVwTGlua2luZyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwyQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsMkJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxxQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDJCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSx5QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLG9EQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtBQUFpRCxVQUFBLEtBQUEsRUFBQTtBQUFqRCxTQUFBO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxRQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUE7QUFBeUMsVUFBQSxVQUFBLEVBQUEsSUFBekM7QUFBeUMsVUFBQSxLQUFBLEVBQUE7QUFBekMsU0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsSUFBQSxRQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEdBQUEsRUFBQTtBQUFnSCxpQkFBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJLENBQUE7QUFDQTs7QUFBQSxlQUFBLEVBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsTUFBQSxHQUFBLE1BQUEsSUFBQSxNQUFBLENBQUEsVUFBQTtBQUNBO0FBQUEsaUJBQUEsVUFBQSxHQUFBO0FBQTJCLGlCQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUE7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBLGlCQUFBLGdCQUFBLEdBQUE7QUFBaUMsaUJBQUEsTUFBQTtBQUFlLFNBRmhEO0FBR0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUE7QUFDQTs7O0FBQUEsZUFBQSxNQUFBO0FBQ0E7QUFBQSxPQU5BOzs7QUFRQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQTtBQUFzRCxlQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxDQUFBO0FBQStELE9BQXJIOzs7QUFFQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7QUFBQSxhQUFBLG1CQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsNENBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLG9EQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSw2Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLDZDQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLGlEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLHFDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFVBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsaURBQUEsQ0FBQSxVQUFBLENBQUE7QUFBQSxTQUFBOztBQ0dBQSxRQUFBQSw2Q0FBQUEsQ0FBQUEsWUFBQUEsQ0FBQUEsQ0FBQUEsTUFBQUEsQ0FBa0JDLGlEQUFBQSxDQUFsQkQsVUFBa0JDLENBQWxCRCxFQUFBQSxVQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxRQUFBLG1CQUFBLENBQUEs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QUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxZQUFBQSxFQUE0QixLQUE1QkEsZUFBQUE7QUFDQSxrQkFBSSxLQUFKLGNBQUEsRUFBeUJBLDJDQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFjLEtBQWRBLGNBQUFBO0FBQzFCOzs7O1VBck5vQnFDLG1EQUFBQSxDQUFBQSxRQUFBQSxDO0FBd052Qjs7Ozs7QUFHQXhDLFFBQUFBLFFBQVEsQ0FBUkEsUUFBQUEsR0FBb0I7QUFDbEI7Ozs7OztBQU1BeUIsVUFBQUEsaUJBQWlCLEVBUEMsR0FBQTs7QUFRbEI7Ozs7Ozs7QUFPQU4sVUFBQUEsZUFBZSxFQWZHLFFBQUE7O0FBZ0JsQjs7Ozs7O0FBTUFPLFVBQUFBLFNBQVMsRUF0QlMsRUFBQTs7QUF1QmxCOzs7Ozs7QUFNQWUsVUFBQUEsV0FBVyxFQTdCTyxXQUFBOztBQThCbEI7Ozs7OztBQU1BQyxVQUFBQSxXQUFXLEVBcENPLEtBQUE7O0FBcUNsQjs7Ozs7O0FBTUFmLFVBQUFBLE1BQU0sRUFBRTtBQTNDVSxTQUFwQjNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6T0EsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtDQUFBOzs7Ozs7QUxVQTtDQVZBIiwiZmlsZSI6ImNvbXBvbmVudHMvZm91bmRhdGlvbi1tYWdlbGxhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnNtb290aFNjcm9sbFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcIi4vZm91bmRhdGlvbi5zbW9vdGhTY3JvbGxcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5tYWdlbGxhblwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnNtb290aFNjcm9sbFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24ubWFnZWxsYW5cIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5zbW9vdGhTY3JvbGxcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9zbW9vdGhTY3JvbGxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgTWFnZWxsYW4gfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLm1hZ2VsbGFuJztcbkZvdW5kYXRpb24ucGx1Z2luKE1hZ2VsbGFuLCAnTWFnZWxsYW4nKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgTWFnZWxsYW4gfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgb25Mb2FkLCBHZXRZb0RpZ2l0cyB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBTbW9vdGhTY3JvbGwgfSBmcm9tICcuL2ZvdW5kYXRpb24uc21vb3RoU2Nyb2xsJztcblxuLyoqXG4gKiBNYWdlbGxhbiBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24ubWFnZWxsYW5cbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnNtb290aFNjcm9sbFxuICovXG5cbmNsYXNzIE1hZ2VsbGFuIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgTWFnZWxsYW4uXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBNYWdlbGxhblxuICAgKiBAZmlyZXMgTWFnZWxsYW4jaW5pdFxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gYWRkIHRoZSB0cmlnZ2VyIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyAgPSAkLmV4dGVuZCh7fSwgTWFnZWxsYW4uZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdNYWdlbGxhbic7IC8vIGllOSBiYWNrIGNvbXBhdFxuXG4gICAgdGhpcy5faW5pdCgpO1xuICAgIHRoaXMuY2FsY1BvaW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBNYWdlbGxhbiBwbHVnaW4gYW5kIGNhbGxzIGZ1bmN0aW9ucyB0byBnZXQgZXF1YWxpemVyIGZ1bmN0aW9uaW5nIG9uIGxvYWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB2YXIgaWQgPSB0aGlzLiRlbGVtZW50WzBdLmlkIHx8IEdldFlvRGlnaXRzKDYsICdtYWdlbGxhbicpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy4kdGFyZ2V0cyA9ICQoJ1tkYXRhLW1hZ2VsbGFuLXRhcmdldF0nKTtcbiAgICB0aGlzLiRsaW5rcyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnYScpO1xuICAgIHRoaXMuJGVsZW1lbnQuYXR0cih7XG4gICAgICAnZGF0YS1yZXNpemUnOiBpZCxcbiAgICAgICdkYXRhLXNjcm9sbCc6IGlkLFxuICAgICAgJ2lkJzogaWRcbiAgICB9KTtcbiAgICB0aGlzLiRhY3RpdmUgPSAkKCk7XG4gICAgdGhpcy5zY3JvbGxQb3MgPSBwYXJzZUludCh3aW5kb3cucGFnZVlPZmZzZXQsIDEwKTtcblxuICAgIHRoaXMuX2V2ZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgYW4gYXJyYXkgb2YgcGl4ZWwgdmFsdWVzIHRoYXQgYXJlIHRoZSBkZW1hcmNhdGlvbiBsaW5lcyBiZXR3ZWVuIGxvY2F0aW9ucyBvbiB0aGUgcGFnZS5cbiAgICogQ2FuIGJlIGludm9rZWQgaWYgbmV3IGVsZW1lbnRzIGFyZSBhZGRlZCBvciB0aGUgc2l6ZSBvZiBhIGxvY2F0aW9uIGNoYW5nZXMuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgY2FsY1BvaW50cygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy53aW5IZWlnaHQgPSBNYXRoLnJvdW5kKE1hdGgubWF4KHdpbmRvdy5pbm5lckhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQpKTtcbiAgICB0aGlzLmRvY0hlaWdodCA9IE1hdGgucm91bmQoTWF0aC5tYXgoYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwub2Zmc2V0SGVpZ2h0KSk7XG5cbiAgICB0aGlzLiR0YXJnZXRzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciAkdGFyID0gJCh0aGlzKSxcbiAgICAgICAgICBwdCA9IE1hdGgucm91bmQoJHRhci5vZmZzZXQoKS50b3AgLSBfdGhpcy5vcHRpb25zLnRocmVzaG9sZCk7XG4gICAgICAkdGFyLnRhcmdldFBvaW50ID0gcHQ7XG4gICAgICBfdGhpcy5wb2ludHMucHVzaChwdCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgZXZlbnRzIGZvciBNYWdlbGxhbi5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ldmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgJGJvZHkgPSAkKCdodG1sLCBib2R5JyksXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgZHVyYXRpb246IF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAgIF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uRWFzaW5nXG4gICAgICAgIH07XG5cbiAgICAkKHdpbmRvdykub25lKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIGlmKF90aGlzLm9wdGlvbnMuZGVlcExpbmtpbmcpe1xuICAgICAgICBpZihsb2NhdGlvbi5oYXNoKXtcbiAgICAgICAgICBfdGhpcy5zY3JvbGxUb0xvYyhsb2NhdGlvbi5oYXNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX3RoaXMuY2FsY1BvaW50cygpO1xuICAgICAgX3RoaXMuX3VwZGF0ZUFjdGl2ZSgpO1xuICAgIH0pO1xuXG4gICAgX3RoaXMub25Mb2FkTGlzdGVuZXIgPSBvbkxvYWQoJCh3aW5kb3cpLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy4kZWxlbWVudFxuICAgICAgICAub24oe1xuICAgICAgICAgICdyZXNpemVtZS56Zi50cmlnZ2VyJzogX3RoaXMucmVmbG93LmJpbmQoX3RoaXMpLFxuICAgICAgICAgICdzY3JvbGxtZS56Zi50cmlnZ2VyJzogX3RoaXMuX3VwZGF0ZUFjdGl2ZS5iaW5kKF90aGlzKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrLnpmLm1hZ2VsbGFuJywgJ2FbaHJlZl49XCIjXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIGFycml2YWwgICA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsVG9Mb2MoYXJyaXZhbCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZGVlcExpbmtTY3JvbGwgPSBmdW5jdGlvbihlKSB7XG4gICAgICBpZihfdGhpcy5vcHRpb25zLmRlZXBMaW5raW5nKSB7XG4gICAgICAgIF90aGlzLnNjcm9sbFRvTG9jKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywgdGhpcy5fZGVlcExpbmtTY3JvbGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIHNjcm9sbCB0byBhIGdpdmVuIGxvY2F0aW9uIG9uIHRoZSBwYWdlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbG9jIC0gYSBwcm9wZXJseSBmb3JtYXR0ZWQgalF1ZXJ5IGlkIHNlbGVjdG9yLiBFeGFtcGxlOiAnI2ZvbydcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBzY3JvbGxUb0xvYyhsb2MpIHtcbiAgICB0aGlzLl9pblRyYW5zaXRpb24gPSB0cnVlO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIGFuaW1hdGlvbkVhc2luZzogdGhpcy5vcHRpb25zLmFuaW1hdGlvbkVhc2luZyxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMub3B0aW9ucy50aHJlc2hvbGQsXG4gICAgICBvZmZzZXQ6IHRoaXMub3B0aW9ucy5vZmZzZXRcbiAgICB9O1xuXG4gICAgU21vb3RoU2Nyb2xsLnNjcm9sbFRvTG9jKGxvYywgb3B0aW9ucywgZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5faW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyBuZWNlc3NhcnkgZnVuY3Rpb25zIHRvIHVwZGF0ZSBNYWdlbGxhbiB1cG9uIERPTSBjaGFuZ2VcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICByZWZsb3coKSB7XG4gICAgdGhpcy5jYWxjUG9pbnRzKCk7XG4gICAgdGhpcy5fdXBkYXRlQWN0aXZlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdmlzaWJpbGl0eSBvZiBhbiBhY3RpdmUgbG9jYXRpb24gbGluaywgYW5kIHVwZGF0ZXMgdGhlIHVybCBoYXNoIGZvciB0aGUgcGFnZSwgaWYgZGVlcExpbmtpbmcgZW5hYmxlZC5cbiAgICogQHByaXZhdGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBmaXJlcyBNYWdlbGxhbiN1cGRhdGVcbiAgICovXG4gIF91cGRhdGVBY3RpdmUoLypldnQsIGVsZW0sIHNjcm9sbFBvcyovKSB7XG4gICAgaWYodGhpcy5faW5UcmFuc2l0aW9uKSByZXR1cm47XG5cbiAgICBjb25zdCBuZXdTY3JvbGxQb3MgPSBwYXJzZUludCh3aW5kb3cucGFnZVlPZmZzZXQsIDEwKTtcbiAgICBjb25zdCBpc1Njcm9sbGluZ1VwID0gdGhpcy5zY3JvbGxQb3MgPiBuZXdTY3JvbGxQb3M7XG4gICAgdGhpcy5zY3JvbGxQb3MgPSBuZXdTY3JvbGxQb3M7XG5cbiAgICBsZXQgYWN0aXZlSWR4O1xuICAgIC8vIEJlZm9yZSB0aGUgZmlyc3QgcG9pbnQ6IG5vIGxpbmtcbiAgICBpZihuZXdTY3JvbGxQb3MgPCB0aGlzLnBvaW50c1swXSl7IC8qIGRvIG5vdGhpbmcgKi8gfVxuICAgIC8vIEF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2U6IGxhc3QgbGlua1xuICAgIGVsc2UgaWYobmV3U2Nyb2xsUG9zICsgdGhpcy53aW5IZWlnaHQgPT09IHRoaXMuZG9jSGVpZ2h0KXsgYWN0aXZlSWR4ID0gdGhpcy5wb2ludHMubGVuZ3RoIC0gMTsgfVxuICAgIC8vIE90aGVyd2hpc2UsIHVzZSB0aGUgbGFzdCB2aXNpYmxlIGxpbmtcbiAgICBlbHNle1xuICAgICAgY29uc3QgdmlzaWJsZUxpbmtzID0gdGhpcy5wb2ludHMuZmlsdGVyKChwLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAocCAtIHRoaXMub3B0aW9ucy5vZmZzZXQgLSAoaXNTY3JvbGxpbmdVcCA/IHRoaXMub3B0aW9ucy50aHJlc2hvbGQgOiAwKSkgPD0gbmV3U2Nyb2xsUG9zO1xuICAgICAgfSk7XG4gICAgICBhY3RpdmVJZHggPSB2aXNpYmxlTGlua3MubGVuZ3RoID8gdmlzaWJsZUxpbmtzLmxlbmd0aCAtIDEgOiAwO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbmV3IGFjdGl2ZSBsaW5rXG4gICAgY29uc3QgJG9sZEFjdGl2ZSA9IHRoaXMuJGFjdGl2ZTtcbiAgICBsZXQgYWN0aXZlSGFzaCA9ICcnO1xuICAgIGlmKHR5cGVvZiBhY3RpdmVJZHggIT09ICd1bmRlZmluZWQnKXtcbiAgICAgIHRoaXMuJGFjdGl2ZSA9IHRoaXMuJGxpbmtzLmZpbHRlcignW2hyZWY9XCIjJyArIHRoaXMuJHRhcmdldHMuZXEoYWN0aXZlSWR4KS5kYXRhKCdtYWdlbGxhbi10YXJnZXQnKSArICdcIl0nKTtcbiAgICAgIGlmICh0aGlzLiRhY3RpdmUubGVuZ3RoKSBhY3RpdmVIYXNoID0gdGhpcy4kYWN0aXZlWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy4kYWN0aXZlID0gJCgpO1xuICAgIH1cbiAgICBjb25zdCBpc05ld0FjdGl2ZSA9ICEoIXRoaXMuJGFjdGl2ZS5sZW5ndGggJiYgISRvbGRBY3RpdmUubGVuZ3RoKSAmJiAhdGhpcy4kYWN0aXZlLmlzKCRvbGRBY3RpdmUpO1xuICAgIGNvbnN0IGlzTmV3SGFzaCA9IGFjdGl2ZUhhc2ggIT09IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBhY3RpdmUgbGluayBlbGVtZW50XG4gICAgaWYoaXNOZXdBY3RpdmUpIHtcbiAgICAgICRvbGRBY3RpdmUucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIHRoaXMuJGFjdGl2ZS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgaGFzaCAoaXQgbWF5IGhhdmUgY2hhbmdlZCB3aXRoIHRoZSBzYW1lIGFjdGl2ZSBsaW5rKVxuICAgIGlmKHRoaXMub3B0aW9ucy5kZWVwTGlua2luZyAmJiBpc05ld0hhc2gpe1xuICAgICAgaWYod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKXtcbiAgICAgICAgLy8gU2V0IG9yIHJlbW92ZSB0aGUgaGFzaCAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTI5ODY4NC80MzE3Mzg0XG4gICAgICAgIGNvbnN0IHVybCA9IGFjdGl2ZUhhc2ggPyBhY3RpdmVIYXNoIDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBhY3RpdmVIYXNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc05ld0FjdGl2ZSkge1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlcyB3aGVuIG1hZ2VsbGFuIGlzIGZpbmlzaGVkIHVwZGF0aW5nIHRvIHRoZSBuZXcgYWN0aXZlIGVsZW1lbnQuXG4gICAgICAgKiBAZXZlbnQgTWFnZWxsYW4jdXBkYXRlXG4gICAgICAgKi9cbiAgICBcdHRoaXMuJGVsZW1lbnQudHJpZ2dlcigndXBkYXRlLnpmLm1hZ2VsbGFuJywgW3RoaXMuJGFjdGl2ZV0pO1xuXHQgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBhbiBpbnN0YW5jZSBvZiBNYWdlbGxhbiBhbmQgcmVzZXRzIHRoZSB1cmwgb2YgdGhlIHdpbmRvdy5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnpmLnRyaWdnZXIgLnpmLm1hZ2VsbGFuJylcbiAgICAgICAgLmZpbmQoYC4ke3RoaXMub3B0aW9ucy5hY3RpdmVDbGFzc31gKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuXG4gICAgaWYodGhpcy5vcHRpb25zLmRlZXBMaW5raW5nKXtcbiAgICAgIHZhciBoYXNoID0gdGhpcy4kYWN0aXZlWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShoYXNoLCAnJyk7XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLm9mZignaGFzaGNoYW5nZScsIHRoaXMuX2RlZXBMaW5rU2Nyb2xsKVxuICAgIGlmICh0aGlzLm9uTG9hZExpc3RlbmVyKSAkKHdpbmRvdykub2ZmKHRoaXMub25Mb2FkTGlzdGVuZXIpO1xuICB9XG59XG5cbi8qKlxuICogRGVmYXVsdCBzZXR0aW5ncyBmb3IgcGx1Z2luXG4gKi9cbk1hZ2VsbGFuLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogQW1vdW50IG9mIHRpbWUsIGluIG1zLCB0aGUgYW5pbWF0ZWQgc2Nyb2xsaW5nIHNob3VsZCB0YWtlIGJldHdlZW4gbG9jYXRpb25zLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDUwMFxuICAgKi9cbiAgYW5pbWF0aW9uRHVyYXRpb246IDUwMCxcbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBzdHlsZSB0byB1c2Ugd2hlbiBzY3JvbGxpbmcgYmV0d2VlbiBsb2NhdGlvbnMuIENhbiBiZSBgJ3N3aW5nJ2Agb3IgYCdsaW5lYXInYC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnbGluZWFyJ1xuICAgKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2FuaW1hdGV8SnF1ZXJ5IGFuaW1hdGV9XG4gICAqL1xuICBhbmltYXRpb25FYXNpbmc6ICdsaW5lYXInLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyB0byB1c2UgYXMgYSBtYXJrZXIgZm9yIGxvY2F0aW9uIGNoYW5nZXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgNTBcbiAgICovXG4gIHRocmVzaG9sZDogNTAsXG4gIC8qKlxuICAgKiBDbGFzcyBhcHBsaWVkIHRvIHRoZSBhY3RpdmUgbG9jYXRpb25zIGxpbmsgb24gdGhlIG1hZ2VsbGFuIGNvbnRhaW5lci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnaXMtYWN0aXZlJ1xuICAgKi9cbiAgYWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnLFxuICAvKipcbiAgICogQWxsb3dzIHRoZSBzY3JpcHQgdG8gbWFuaXB1bGF0ZSB0aGUgdXJsIG9mIHRoZSBjdXJyZW50IHBhZ2UsIGFuZCBpZiBzdXBwb3J0ZWQsIGFsdGVyIHRoZSBoaXN0b3J5LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGVlcExpbmtpbmc6IGZhbHNlLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyB0byBvZmZzZXQgdGhlIHNjcm9sbCBvZiB0aGUgcGFnZSBvbiBpdGVtIGNsaWNrIGlmIHVzaW5nIGEgc3RpY2t5IG5hdiBiYXIuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgb2Zmc2V0OiAwXG59XG5cbmV4cG9ydCB7TWFnZWxsYW59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
