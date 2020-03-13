(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.util.mediaQuery"] = factory(require("./foundation.core"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.util.mediaQuery"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 24);
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
      "./js/entries/plugins/foundation.util.mediaQuery.js":
      /*!**********************************************************!*\
        !*** ./js/entries/plugins/foundation.util.mediaQuery.js ***!
        \**********************************************************/

      /*! exports provided: Foundation, MediaQuery */

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


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.util.mediaQuery */
        "./js/foundation.util.mediaQuery.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "MediaQuery", function () {
          return _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].MediaQuery = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__["MediaQuery"];

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].MediaQuery._init();
        /***/

      },

      /***/
      "./js/foundation.util.mediaQuery.js":
      /*!******************************************!*\
        !*** ./js/foundation.util.mediaQuery.js ***!
        \******************************************/

      /*! exports provided: MediaQuery */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "MediaQuery", function () {
          return MediaQuery;
        });
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! jquery */
        "jquery");
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

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

        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
        }

        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }

        function _iterableToArrayLimit(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        } // Default set of media queries


        var defaultQueries = {
          'default': 'only screen',
          landscape: 'only screen and (orientation: landscape)',
          portrait: 'only screen and (orientation: portrait)',
          retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
        }; // matchMedia() polyfill - Test a CSS media type/query in JS.
        // Authors & copyright © 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license

        /* eslint-disable */

        window.matchMedia || (window.matchMedia = function () {
          "use strict"; // For browsers that support matchMedium api such as IE 9 and webkit

          var styleMedia = window.styleMedia || window.media; // For those that don't support matchMedium

          if (!styleMedia) {
            var style = document.createElement('style'),
                script = document.getElementsByTagName('script')[0],
                info = null;
            style.type = 'text/css';
            style.id = 'matchmediajs-test';

            if (!script) {
              document.head.appendChild(style);
            } else {
              script.parentNode.insertBefore(style, script);
            } // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers


            info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
            styleMedia = {
              matchMedium: function matchMedium(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'; // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers

                if (style.styleSheet) {
                  style.styleSheet.cssText = text;
                } else {
                  style.textContent = text;
                } // Test if media query is true or false


                return info.width === '1px';
              }
            };
          }

          return function (media) {
            return {
              matches: styleMedia.matchMedium(media || 'all'),
              media: media || 'all'
            };
          };
        }());
        /* eslint-enable */

        var MediaQuery = {
          queries: [],
          current: '',

          /**
           * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
           * @function
           * @private
           */
          _init: function _init() {
            // make sure the initialization is only done once when calling _init() several times
            if (this.isInitialized === true) {
              return;
            } else {
              this.isInitialized = true;
            }

            var self = this;
            var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');

            if (!$meta.length) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class="foundation-mq">').appendTo(document.head);
            }

            var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');
            var namedQueries;
            namedQueries = parseStyleToObject(extractedStyles);
            self.queries = []; // reset

            for (var key in namedQueries) {
              if (namedQueries.hasOwnProperty(key)) {
                self.queries.push({
                  name: key,
                  value: "only screen and (min-width: ".concat(namedQueries[key], ")")
                });
              }
            }

            this.current = this._getCurrentSize();

            this._watcher();
          },

          /**
           * Reinitializes the media query helper.
           * Useful if your CSS breakpoint configuration has just been loaded or has changed since the initialization.
           * @function
           * @private
           */
          _reInit: function _reInit() {
            this.isInitialized = false;

            this._init();
          },

          /**
           * Checks if the screen is at least as wide as a breakpoint.
           * @function
           * @param {String} size - Name of the breakpoint to check.
           * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
           */
          atLeast: function atLeast(size) {
            var query = this.get(size);

            if (query) {
              return window.matchMedia(query).matches;
            }

            return false;
          },

          /**
           * Checks if the screen is within the given breakpoint.
           * If smaller than the breakpoint of larger than its upper limit it returns false.
           * @function
           * @param {String} size - Name of the breakpoint to check.
           * @returns {Boolean} `true` if the breakpoint matches, `false` otherwise.
           */
          only: function only(size) {
            return size === this._getCurrentSize();
          },

          /**
           * Checks if the screen is within a breakpoint or smaller.
           * @function
           * @param {String} size - Name of the breakpoint to check.
           * @returns {Boolean} `true` if the breakpoint matches, `false` if it's larger.
           */
          upTo: function upTo(size) {
            var nextSize = this.next(size); // If the next breakpoint does not match, the screen is smaller than
            // the upper limit of this breakpoint.

            if (nextSize) {
              return !this.atLeast(nextSize);
            } // If there is no next breakpoint, the "size" breakpoint does not have
            // an upper limit and the screen will always be within it or smaller.


            return true;
          },

          /**
           * Checks if the screen matches to a breakpoint.
           * @function
           * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
           * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
           */
          is: function is(size) {
            var parts = size.trim().split(' ').filter(function (p) {
              return !!p.length;
            });

            var _parts = _slicedToArray(parts, 2),
                bpSize = _parts[0],
                _parts$ = _parts[1],
                bpModifier = _parts$ === void 0 ? '' : _parts$; // Only the breakpont


            if (bpModifier === 'only') {
              return this.only(bpSize);
            } // At least the breakpoint (included)


            if (!bpModifier || bpModifier === 'up') {
              return this.atLeast(bpSize);
            } // Up to the breakpoint (included)


            if (bpModifier === 'down') {
              return this.upTo(bpSize);
            }

            throw new Error("\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like \"<size> <modifier>\", got \"".concat(size, "\".\n    "));
          },

          /**
           * Gets the media query of a breakpoint.
           * @function
           * @param {String} size - Name of the breakpoint to get.
           * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
           */
          get: function get(size) {
            for (var i in this.queries) {
              if (this.queries.hasOwnProperty(i)) {
                var query = this.queries[i];
                if (size === query.name) return query.value;
              }
            }

            return null;
          },

          /**
           * Get the breakpoint following the given breakpoint.
           * @function
           * @param {String} size - Name of the breakpoint.
           * @returns {String|null} - The name of the following breakpoint, or `null` if the passed breakpoint was the last one.
           */
          next: function next(size) {
            var _this = this;

            var queryIndex = this.queries.findIndex(function (q) {
              return _this._getQueryName(q) === size;
            });

            if (queryIndex === -1) {
              throw new Error("\n        Unknown breakpoint \"".concat(size, "\" passed to MediaQuery.next().\n        Ensure it is present in your Sass \"$breakpoints\" setting.\n      "));
            }

            var nextQuery = this.queries[queryIndex + 1];
            return nextQuery ? nextQuery.name : null;
          },

          /**
           * Returns the name of the breakpoint related to the given value.
           * @function
           * @private
           * @param {String|Object} value - Breakpoint name or query object.
           * @returns {String} Name of the breakpoint.
           */
          _getQueryName: function _getQueryName(value) {
            if (typeof value === 'string') return value;
            if (_typeof(value) === 'object') return value.name;
            throw new TypeError("\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got \"".concat(value, "\" (").concat(_typeof(value), ")\n    "));
          },

          /**
           * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
           * @function
           * @private
           * @returns {String} Name of the current breakpoint.
           */
          _getCurrentSize: function _getCurrentSize() {
            var matched;

            for (var i = 0; i < this.queries.length; i++) {
              var query = this.queries[i];

              if (window.matchMedia(query.value).matches) {
                matched = query;
              }
            }

            return matched && this._getQueryName(matched);
          },

          /**
           * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
           * @function
           * @private
           */
          _watcher: function _watcher() {
            var _this2 = this;

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
              var newSize = _this2._getCurrentSize(),
                  currentSize = _this2.current;

              if (newSize !== currentSize) {
                // Change the current media query
                _this2.current = newSize; // Broadcast the media query change on the window

                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
              }
            });
          }
        }; // Thank you: https://github.com/sindresorhus/query-string

        function parseStyleToObject(str) {
          var styleObject = {};

          if (typeof str !== 'string') {
            return styleObject;
          }

          str = str.trim().slice(1, -1); // browsers re-quote string style values

          if (!str) {
            return styleObject;
          }

          styleObject = str.split('&').reduce(function (ret, param) {
            var parts = param.replace(/\+/g, ' ').split('=');
            var key = parts[0];
            var val = parts[1];
            key = decodeURIComponent(key); // missing `=` should be `null`:
            // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

            val = typeof val === 'undefined' ? null : decodeURIComponent(val);

            if (!ret.hasOwnProperty(key)) {
              ret[key] = val;
            } else if (Array.isArray(ret[key])) {
              ret[key].push(val);
            } else {
              ret[key] = [ret[key], val];
            }

            return ret;
          }, {});
          return styleObject;
        }
        /***/

      },

      /***/
      24:
      /*!****************************************************************!*\
        !*** multi ./js/entries/plugins/foundation.util.mediaQuery.js ***!
        \****************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.util.mediaQuery.js */
        "./js/entries/plugins/foundation.util.mediaQuery.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5LmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wialF1ZXJ5XCJdLFwiYW1kXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbIkZvdW5kYXRpb24iLCJNZWRpYVF1ZXJ5IiwiZGVmYXVsdFF1ZXJpZXMiLCJsYW5kc2NhcGUiLCJwb3J0cmFpdCIsInJldGluYSIsIndpbmRvdyIsInN0eWxlTWVkaWEiLCJzdHlsZSIsImRvY3VtZW50Iiwic2NyaXB0IiwiaW5mbyIsIm1hdGNoTWVkaXVtIiwidGV4dCIsIm1hdGNoZXMiLCJtZWRpYSIsInF1ZXJpZXMiLCJjdXJyZW50IiwiX2luaXQiLCJzZWxmIiwiJG1ldGEiLCIkIiwiZXh0cmFjdGVkU3R5bGVzIiwibmFtZWRRdWVyaWVzIiwicGFyc2VTdHlsZVRvT2JqZWN0IiwibmFtZSIsInZhbHVlIiwiX3JlSW5pdCIsImF0TGVhc3QiLCJxdWVyeSIsIm9ubHkiLCJzaXplIiwidXBUbyIsIm5leHRTaXplIiwiaXMiLCJwYXJ0cyIsInAiLCJicFNpemUiLCJicE1vZGlmaWVyIiwiZ2V0IiwibmV4dCIsInF1ZXJ5SW5kZXgiLCJuZXh0UXVlcnkiLCJfZ2V0UXVlcnlOYW1lIiwiX2dldEN1cnJlbnRTaXplIiwiaSIsIm1hdGNoZWQiLCJfd2F0Y2hlciIsIm5ld1NpemUiLCJjdXJyZW50U2l6ZSIsInN0eWxlT2JqZWN0Iiwic3RyIiwicGFyYW0iLCJrZXkiLCJ2YWwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXQiLCJBcnJheSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLDRCQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsNEJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtB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Ozs7Ozs7Ozs7OztBQy9VRCxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTFVBO0NBVkEiLCJmaWxlIjoiZm91bmRhdGlvbi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjQpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXzsiLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuaW1wb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5JztcblxuRm91bmRhdGlvbi5NZWRpYVF1ZXJ5ID0gTWVkaWFRdWVyeTtcbkZvdW5kYXRpb24uTWVkaWFRdWVyeS5faW5pdCgpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBNZWRpYVF1ZXJ5IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIERlZmF1bHQgc2V0IG9mIG1lZGlhIHF1ZXJpZXNcbmNvbnN0IGRlZmF1bHRRdWVyaWVzID0ge1xuICAnZGVmYXVsdCcgOiAnb25seSBzY3JlZW4nLFxuICBsYW5kc2NhcGUgOiAnb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIHBvcnRyYWl0IDogJ29ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIHJldGluYSA6ICdvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknXG4gIH07XG5cblxuLy8gbWF0Y2hNZWRpYSgpIHBvbHlmaWxsIC0gVGVzdCBhIENTUyBtZWRpYSB0eXBlL3F1ZXJ5IGluIEpTLlxuLy8gQXV0aG9ycyAmIGNvcHlyaWdodCDCqSAyMDEyOiBTY290dCBKZWhsLCBQYXVsIElyaXNoLCBOaWNob2xhcyBaYWthcywgRGF2aWQgS25pZ2h0LiBNSVQgbGljZW5zZVxuLyogZXNsaW50LWRpc2FibGUgKi9cbndpbmRvdy5tYXRjaE1lZGlhIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSA9IChmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIEZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgbWF0Y2hNZWRpdW0gYXBpIHN1Y2ggYXMgSUUgOSBhbmQgd2Via2l0XG4gIHZhciBzdHlsZU1lZGlhID0gKHdpbmRvdy5zdHlsZU1lZGlhIHx8IHdpbmRvdy5tZWRpYSk7XG5cbiAgLy8gRm9yIHRob3NlIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtYXRjaE1lZGl1bVxuICBpZiAoIXN0eWxlTWVkaWEpIHtcbiAgICB2YXIgc3R5bGUgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyksXG4gICAgc2NyaXB0ICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0sXG4gICAgaW5mbyAgICAgICAgPSBudWxsO1xuXG4gICAgc3R5bGUudHlwZSAgPSAndGV4dC9jc3MnO1xuICAgIHN0eWxlLmlkICAgID0gJ21hdGNobWVkaWFqcy10ZXN0JztcblxuICAgIGlmICghc2NyaXB0KSB7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlLCBzY3JpcHQpO1xuICAgIH1cblxuICAgIC8vICdzdHlsZS5jdXJyZW50U3R5bGUnIGlzIHVzZWQgYnkgSUUgPD0gOCBhbmQgJ3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlJyBmb3IgYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgaW5mbyA9ICgnZ2V0Q29tcHV0ZWRTdHlsZScgaW4gd2luZG93KSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdHlsZSwgbnVsbCkgfHwgc3R5bGUuY3VycmVudFN0eWxlO1xuXG4gICAgc3R5bGVNZWRpYSA9IHtcbiAgICAgIG1hdGNoTWVkaXVtOiBmdW5jdGlvbiAobWVkaWEpIHtcbiAgICAgICAgdmFyIHRleHQgPSAnQG1lZGlhICcgKyBtZWRpYSArICd7ICNtYXRjaG1lZGlhanMtdGVzdCB7IHdpZHRoOiAxcHg7IH0gfSc7XG5cbiAgICAgICAgLy8gJ3N0eWxlLnN0eWxlU2hlZXQnIGlzIHVzZWQgYnkgSUUgPD0gOCBhbmQgJ3N0eWxlLnRleHRDb250ZW50JyBmb3IgYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gdGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXN0IGlmIG1lZGlhIHF1ZXJ5IGlzIHRydWUgb3IgZmFsc2VcbiAgICAgICAgcmV0dXJuIGluZm8ud2lkdGggPT09ICcxcHgnO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24obWVkaWEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hlczogc3R5bGVNZWRpYS5tYXRjaE1lZGl1bShtZWRpYSB8fCAnYWxsJyksXG4gICAgICBtZWRpYTogbWVkaWEgfHwgJ2FsbCdcbiAgICB9O1xuICB9O1xufSkoKSk7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbnZhciBNZWRpYVF1ZXJ5ID0ge1xuICBxdWVyaWVzOiBbXSxcblxuICBjdXJyZW50OiAnJyxcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG1lZGlhIHF1ZXJ5IGhlbHBlciwgYnkgZXh0cmFjdGluZyB0aGUgYnJlYWtwb2ludCBsaXN0IGZyb20gdGhlIENTUyBhbmQgYWN0aXZhdGluZyB0aGUgYnJlYWtwb2ludCB3YXRjaGVyLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuXG4gICAgLy8gbWFrZSBzdXJlIHRoZSBpbml0aWFsaXphdGlvbiBpcyBvbmx5IGRvbmUgb25jZSB3aGVuIGNhbGxpbmcgX2luaXQoKSBzZXZlcmFsIHRpbWVzXG4gICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgJG1ldGEgPSAkKCdtZXRhLmZvdW5kYXRpb24tbXEnKTtcbiAgICBpZighJG1ldGEubGVuZ3RoKXtcbiAgICAgICQoJzxtZXRhIGNsYXNzPVwiZm91bmRhdGlvbi1tcVwiPicpLmFwcGVuZFRvKGRvY3VtZW50LmhlYWQpO1xuICAgIH1cblxuICAgIHZhciBleHRyYWN0ZWRTdHlsZXMgPSAkKCcuZm91bmRhdGlvbi1tcScpLmNzcygnZm9udC1mYW1pbHknKTtcbiAgICB2YXIgbmFtZWRRdWVyaWVzO1xuXG4gICAgbmFtZWRRdWVyaWVzID0gcGFyc2VTdHlsZVRvT2JqZWN0KGV4dHJhY3RlZFN0eWxlcyk7XG5cbiAgICBzZWxmLnF1ZXJpZXMgPSBbXTsgLy8gcmVzZXRcblxuICAgIGZvciAodmFyIGtleSBpbiBuYW1lZFF1ZXJpZXMpIHtcbiAgICAgIGlmKG5hbWVkUXVlcmllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNlbGYucXVlcmllcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgdmFsdWU6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtuYW1lZFF1ZXJpZXNba2V5XX0pYFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpO1xuXG4gICAgdGhpcy5fd2F0Y2hlcigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZWluaXRpYWxpemVzIHRoZSBtZWRpYSBxdWVyeSBoZWxwZXIuXG4gICAqIFVzZWZ1bCBpZiB5b3VyIENTUyBicmVha3BvaW50IGNvbmZpZ3VyYXRpb24gaGFzIGp1c3QgYmVlbiBsb2FkZWQgb3IgaGFzIGNoYW5nZWQgc2luY2UgdGhlIGluaXRpYWxpemF0aW9uLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZUluaXQoKSB7XG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNjcmVlbiBpcyBhdCBsZWFzdCBhcyB3aWRlIGFzIGEgYnJlYWtwb2ludC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBjaGVjay5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYnJlYWtwb2ludCBtYXRjaGVzLCBgZmFsc2VgIGlmIGl0J3Mgc21hbGxlci5cbiAgICovXG4gIGF0TGVhc3Qoc2l6ZSkge1xuICAgIHZhciBxdWVyeSA9IHRoaXMuZ2V0KHNpemUpO1xuXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNjcmVlbiBpcyB3aXRoaW4gdGhlIGdpdmVuIGJyZWFrcG9pbnQuXG4gICAqIElmIHNtYWxsZXIgdGhhbiB0aGUgYnJlYWtwb2ludCBvZiBsYXJnZXIgdGhhbiBpdHMgdXBwZXIgbGltaXQgaXQgcmV0dXJucyBmYWxzZS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBjaGVjay5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYnJlYWtwb2ludCBtYXRjaGVzLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICovXG4gIG9ubHkoc2l6ZSkge1xuICAgIHJldHVybiBzaXplID09PSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNjcmVlbiBpcyB3aXRoaW4gYSBicmVha3BvaW50IG9yIHNtYWxsZXIuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIE5hbWUgb2YgdGhlIGJyZWFrcG9pbnQgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGJyZWFrcG9pbnQgbWF0Y2hlcywgYGZhbHNlYCBpZiBpdCdzIGxhcmdlci5cbiAgICovXG4gIHVwVG8oc2l6ZSkge1xuICAgIGNvbnN0IG5leHRTaXplID0gdGhpcy5uZXh0KHNpemUpO1xuXG4gICAgLy8gSWYgdGhlIG5leHQgYnJlYWtwb2ludCBkb2VzIG5vdCBtYXRjaCwgdGhlIHNjcmVlbiBpcyBzbWFsbGVyIHRoYW5cbiAgICAvLyB0aGUgdXBwZXIgbGltaXQgb2YgdGhpcyBicmVha3BvaW50LlxuICAgIGlmIChuZXh0U2l6ZSkge1xuICAgICAgcmV0dXJuICF0aGlzLmF0TGVhc3QobmV4dFNpemUpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIG5vIG5leHQgYnJlYWtwb2ludCwgdGhlIFwic2l6ZVwiIGJyZWFrcG9pbnQgZG9lcyBub3QgaGF2ZVxuICAgIC8vIGFuIHVwcGVyIGxpbWl0IGFuZCB0aGUgc2NyZWVuIHdpbGwgYWx3YXlzIGJlIHdpdGhpbiBpdCBvciBzbWFsbGVyLlxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNjcmVlbiBtYXRjaGVzIHRvIGEgYnJlYWtwb2ludC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBjaGVjaywgZWl0aGVyICdzbWFsbCBvbmx5JyBvciAnc21hbGwnLiBPbWl0dGluZyAnb25seScgZmFsbHMgYmFjayB0byB1c2luZyBhdExlYXN0KCkgbWV0aG9kLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBicmVha3BvaW50IG1hdGNoZXMsIGBmYWxzZWAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBpcyhzaXplKSB7XG4gICAgY29uc3QgcGFydHMgPSBzaXplLnRyaW0oKS5zcGxpdCgnICcpLmZpbHRlcihwID0+ICEhcC5sZW5ndGgpO1xuICAgIGNvbnN0IFticFNpemUsIGJwTW9kaWZpZXIgPSAnJ10gPSBwYXJ0cztcblxuICAgIC8vIE9ubHkgdGhlIGJyZWFrcG9udFxuICAgIGlmIChicE1vZGlmaWVyID09PSAnb25seScpIHtcbiAgICAgIHJldHVybiB0aGlzLm9ubHkoYnBTaXplKTtcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgdGhlIGJyZWFrcG9pbnQgKGluY2x1ZGVkKVxuICAgIGlmICghYnBNb2RpZmllciB8fCBicE1vZGlmaWVyID09PSAndXAnKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdExlYXN0KGJwU2l6ZSk7XG4gICAgfVxuICAgIC8vIFVwIHRvIHRoZSBicmVha3BvaW50IChpbmNsdWRlZClcbiAgICBpZiAoYnBNb2RpZmllciA9PT0gJ2Rvd24nKSB7XG4gICAgICByZXR1cm4gdGhpcy51cFRvKGJwU2l6ZSk7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICAgIEludmFsaWQgYnJlYWtwb2ludCBwYXNzZWQgdG8gTWVkaWFRdWVyeS5pcygpLlxuICAgICAgRXhwZWN0ZWQgYSBicmVha3BvaW50IG5hbWUgZm9ybWF0dGVkIGxpa2UgXCI8c2l6ZT4gPG1vZGlmaWVyPlwiLCBnb3QgXCIke3NpemV9XCIuXG4gICAgYCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG1lZGlhIHF1ZXJ5IG9mIGEgYnJlYWtwb2ludC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBnZXQuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gLSBUaGUgbWVkaWEgcXVlcnkgb2YgdGhlIGJyZWFrcG9pbnQsIG9yIGBudWxsYCBpZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0LlxuICAgKi9cbiAgZ2V0KHNpemUpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucXVlcmllcykge1xuICAgICAgaWYodGhpcy5xdWVyaWVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1tpXTtcbiAgICAgICAgaWYgKHNpemUgPT09IHF1ZXJ5Lm5hbWUpIHJldHVybiBxdWVyeS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRoZSBicmVha3BvaW50IGZvbGxvd2luZyB0aGUgZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludC5cbiAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSAtIFRoZSBuYW1lIG9mIHRoZSBmb2xsb3dpbmcgYnJlYWtwb2ludCwgb3IgYG51bGxgIGlmIHRoZSBwYXNzZWQgYnJlYWtwb2ludCB3YXMgdGhlIGxhc3Qgb25lLlxuICAgKi9cbiAgbmV4dChzaXplKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHRoaXMucXVlcmllcy5maW5kSW5kZXgoKHEpID0+IHRoaXMuX2dldFF1ZXJ5TmFtZShxKSA9PT0gc2l6ZSk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICBVbmtub3duIGJyZWFrcG9pbnQgXCIke3NpemV9XCIgcGFzc2VkIHRvIE1lZGlhUXVlcnkubmV4dCgpLlxuICAgICAgICBFbnN1cmUgaXQgaXMgcHJlc2VudCBpbiB5b3VyIFNhc3MgXCIkYnJlYWtwb2ludHNcIiBzZXR0aW5nLlxuICAgICAgYCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFF1ZXJ5ID0gdGhpcy5xdWVyaWVzW3F1ZXJ5SW5kZXggKyAxXTtcbiAgICByZXR1cm4gbmV4dFF1ZXJ5ID8gbmV4dFF1ZXJ5Lm5hbWUgOiBudWxsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBicmVha3BvaW50IHJlbGF0ZWQgdG8gdGhlIGdpdmVuIHZhbHVlLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZSAtIEJyZWFrcG9pbnQgbmFtZSBvciBxdWVyeSBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IE5hbWUgb2YgdGhlIGJyZWFrcG9pbnQuXG4gICAqL1xuICBfZ2V0UXVlcnlOYW1lKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICByZXR1cm4gdmFsdWUubmFtZTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBcbiAgICAgIEludmFsaWQgdmFsdWUgcGFzc2VkIHRvIE1lZGlhUXVlcnkuX2dldFF1ZXJ5TmFtZSgpLlxuICAgICAgRXhwZWN0ZWQgYSBicmVha3BvaW50IG5hbWUgKFN0cmluZykgb3IgYSBicmVha3BvaW50IHF1ZXJ5IChPYmplY3QpLCBnb3QgXCIke3ZhbHVlfVwiICgke3R5cGVvZiB2YWx1ZX0pXG4gICAgYCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBuYW1lIGJ5IHRlc3RpbmcgZXZlcnkgYnJlYWtwb2ludCBhbmQgcmV0dXJuaW5nIHRoZSBsYXN0IG9uZSB0byBtYXRjaCAodGhlIGJpZ2dlc3Qgb25lKS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IE5hbWUgb2YgdGhlIGN1cnJlbnQgYnJlYWtwb2ludC5cbiAgICovXG4gIF9nZXRDdXJyZW50U2l6ZSgpIHtcbiAgICB2YXIgbWF0Y2hlZDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbaV07XG5cbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeS52YWx1ZSkubWF0Y2hlcykge1xuICAgICAgICBtYXRjaGVkID0gcXVlcnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZWQgJiYgdGhpcy5fZ2V0UXVlcnlOYW1lKG1hdGNoZWQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGJyZWFrcG9pbnQgd2F0Y2hlciwgd2hpY2ggZmlyZXMgYW4gZXZlbnQgb24gdGhlIHdpbmRvdyB3aGVuZXZlciB0aGUgYnJlYWtwb2ludCBjaGFuZ2VzLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF93YXRjaGVyKCkge1xuICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS56Zi5tZWRpYXF1ZXJ5Jykub24oJ3Jlc2l6ZS56Zi5tZWRpYXF1ZXJ5JywgKCkgPT4ge1xuICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpLCBjdXJyZW50U2l6ZSA9IHRoaXMuY3VycmVudDtcblxuICAgICAgaWYgKG5ld1NpemUgIT09IGN1cnJlbnRTaXplKSB7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgY3VycmVudCBtZWRpYSBxdWVyeVxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXdTaXplO1xuXG4gICAgICAgIC8vIEJyb2FkY2FzdCB0aGUgbWVkaWEgcXVlcnkgY2hhbmdlIG9uIHRoZSB3aW5kb3dcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ2NoYW5nZWQuemYubWVkaWFxdWVyeScsIFtuZXdTaXplLCBjdXJyZW50U2l6ZV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLy8gVGhhbmsgeW91OiBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZ1xuZnVuY3Rpb24gcGFyc2VTdHlsZVRvT2JqZWN0KHN0cikge1xuICB2YXIgc3R5bGVPYmplY3QgPSB7fTtcblxuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gIH1cblxuICBzdHIgPSBzdHIudHJpbSgpLnNsaWNlKDEsIC0xKTsgLy8gYnJvd3NlcnMgcmUtcXVvdGUgc3RyaW5nIHN0eWxlIHZhbHVlc1xuXG4gIGlmICghc3RyKSB7XG4gICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICB9XG5cbiAgc3R5bGVPYmplY3QgPSBzdHIuc3BsaXQoJyYnKS5yZWR1Y2UoZnVuY3Rpb24ocmV0LCBwYXJhbSkge1xuICAgIHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG4gICAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICAgIHZhciB2YWwgPSBwYXJ0c1sxXTtcbiAgICBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcblxuICAgIC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG4gICAgLy8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuICAgIHZhbCA9IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuXG4gICAgaWYgKCFyZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0W2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldFtrZXldKSkge1xuICAgICAgcmV0W2tleV0ucHVzaCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXRba2V5XSA9IFtyZXRba2V5XSwgdmFsXTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSwge30pO1xuXG4gIHJldHVybiBzdHlsZU9iamVjdDtcbn1cblxuZXhwb3J0IHtNZWRpYVF1ZXJ5fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
