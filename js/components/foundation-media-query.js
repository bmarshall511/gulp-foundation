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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

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
        } // Default set of media queries


        var defaultQueries = {
          'default': 'only screen',
          landscape: 'only screen and (orientation: landscape)',
          portrait: 'only screen and (orientation: portrait)',
          retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
        }; // matchMedia() polyfill - Test a CSS media type/query in JS.
        // Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license

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
            var self = this;
            var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');

            if (!$meta.length) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class="foundation-mq">').appendTo(document.head);
            }

            var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');
            var namedQueries;
            namedQueries = parseStyleToObject(extractedStyles);

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
           * Checks if the screen matches to a breakpoint.
           * @function
           * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
           * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
           */
          is: function is(size) {
            size = size.trim().split(' ');

            if (size.length > 1 && size[1] === 'only') {
              if (size[0] === this._getCurrentSize()) return true;
            } else {
              return this.atLeast(size[0]);
            }

            return false;
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

            if (_typeof(matched) === 'object') {
              return matched.name;
            } else {
              return matched;
            }
          },

          /**
           * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
           * @function
           * @private
           */
          _watcher: function _watcher() {
            var _this = this;

            jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
              var newSize = _this._getCurrentSize(),
                  currentSize = _this.current;

              if (newSize !== currentSize) {
                // Change the current media query
                _this.current = newSize; // Broadcast the media query change on the window

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
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.util.mediaQuery.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5LmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wialF1ZXJ5XCJdLFwiYW1kXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbImRlZmF1bHRRdWVyaWVzIiwibGFuZHNjYXBlIiwicG9ydHJhaXQiLCJyZXRpbmEiLCJ3aW5kb3ciLCJzdHlsZU1lZGlhIiwic3R5bGUiLCJkb2N1bWVudCIsInNjcmlwdCIsImluZm8iLCJtYXRjaE1lZGl1bSIsInRleHQiLCJtYXRjaGVzIiwibWVkaWEiLCJNZWRpYVF1ZXJ5IiwicXVlcmllcyIsImN1cnJlbnQiLCJfaW5pdCIsInNlbGYiLCIkbWV0YSIsIiQiLCJleHRyYWN0ZWRTdHlsZXMiLCJuYW1lZFF1ZXJpZXMiLCJwYXJzZVN0eWxlVG9PYmplY3QiLCJuYW1lIiwidmFsdWUiLCJhdExlYXN0IiwicXVlcnkiLCJpcyIsInNpemUiLCJnZXQiLCJfZ2V0Q3VycmVudFNpemUiLCJpIiwibWF0Y2hlZCIsIl93YXRjaGVyIiwibmV3U2l6ZSIsImN1cnJlbnRTaXplIiwic3R5bGVPYmplY3QiLCJzdHIiLCJwYXJ0cyIsInBhcmFtIiwia2V5IiwidmFsIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmV0IiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLDRCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxD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Ozs7O0FMVUE7Q0FWQSIsImZpbGUiOiJjb21wb25lbnRzL2ZvdW5kYXRpb24tbWVkaWEtcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSA9IHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSB8fCB7fSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnlcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcbmltcG9ydCB7IE1lZGlhUXVlcnkgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeSc7XG5cbkZvdW5kYXRpb24uTWVkaWFRdWVyeSA9IE1lZGlhUXVlcnk7XG5Gb3VuZGF0aW9uLk1lZGlhUXVlcnkuX2luaXQoKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgTWVkaWFRdWVyeSB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vLyBEZWZhdWx0IHNldCBvZiBtZWRpYSBxdWVyaWVzXG5jb25zdCBkZWZhdWx0UXVlcmllcyA9IHtcbiAgJ2RlZmF1bHQnIDogJ29ubHkgc2NyZWVuJyxcbiAgbGFuZHNjYXBlIDogJ29ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBwb3J0cmFpdCA6ICdvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICByZXRpbmEgOiAnb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJ1xuICB9O1xuXG5cbi8vIG1hdGNoTWVkaWEoKSBwb2x5ZmlsbCAtIFRlc3QgYSBDU1MgbWVkaWEgdHlwZS9xdWVyeSBpbiBKUy5cbi8vIEF1dGhvcnMgJiBjb3B5cmlnaHQoYykgMjAxMjogU2NvdHQgSmVobCwgUGF1bCBJcmlzaCwgTmljaG9sYXMgWmFrYXMsIERhdmlkIEtuaWdodC4gTUlUIGxpY2Vuc2Vcbi8qIGVzbGludC1kaXNhYmxlICovXG53aW5kb3cubWF0Y2hNZWRpYSB8fCAod2luZG93Lm1hdGNoTWVkaWEgPSAoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IG1hdGNoTWVkaXVtIGFwaSBzdWNoIGFzIElFIDkgYW5kIHdlYmtpdFxuICB2YXIgc3R5bGVNZWRpYSA9ICh3aW5kb3cuc3R5bGVNZWRpYSB8fCB3aW5kb3cubWVkaWEpO1xuXG4gIC8vIEZvciB0aG9zZSB0aGF0IGRvbid0IHN1cHBvcnQgbWF0Y2hNZWRpdW1cbiAgaWYgKCFzdHlsZU1lZGlhKSB7XG4gICAgdmFyIHN0eWxlICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpLFxuICAgIHNjcmlwdCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdLFxuICAgIGluZm8gICAgICAgID0gbnVsbDtcblxuICAgIHN0eWxlLnR5cGUgID0gJ3RleHQvY3NzJztcbiAgICBzdHlsZS5pZCAgICA9ICdtYXRjaG1lZGlhanMtdGVzdCc7XG5cbiAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgc2NyaXB0KTtcbiAgICB9XG5cbiAgICAvLyAnc3R5bGUuY3VycmVudFN0eWxlJyBpcyB1c2VkIGJ5IElFIDw9IDggYW5kICd3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZScgZm9yIGFsbCBvdGhlciBicm93c2Vyc1xuICAgIGluZm8gPSAoJ2dldENvbXB1dGVkU3R5bGUnIGluIHdpbmRvdykgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3R5bGUsIG51bGwpIHx8IHN0eWxlLmN1cnJlbnRTdHlsZTtcblxuICAgIHN0eWxlTWVkaWEgPSB7XG4gICAgICBtYXRjaE1lZGl1bTogZnVuY3Rpb24gKG1lZGlhKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gJ0BtZWRpYSAnICsgbWVkaWEgKyAneyAjbWF0Y2htZWRpYWpzLXRlc3QgeyB3aWR0aDogMXB4OyB9IH0nO1xuXG4gICAgICAgIC8vICdzdHlsZS5zdHlsZVNoZWV0JyBpcyB1c2VkIGJ5IElFIDw9IDggYW5kICdzdHlsZS50ZXh0Q29udGVudCcgZm9yIGFsbCBvdGhlciBicm93c2Vyc1xuICAgICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGVzdCBpZiBtZWRpYSBxdWVyeSBpcyB0cnVlIG9yIGZhbHNlXG4gICAgICAgIHJldHVybiBpbmZvLndpZHRoID09PSAnMXB4JztcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG1lZGlhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hdGNoZXM6IHN0eWxlTWVkaWEubWF0Y2hNZWRpdW0obWVkaWEgfHwgJ2FsbCcpLFxuICAgICAgbWVkaWE6IG1lZGlhIHx8ICdhbGwnXG4gICAgfTtcbiAgfTtcbn0pKCkpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG52YXIgTWVkaWFRdWVyeSA9IHtcbiAgcXVlcmllczogW10sXG5cbiAgY3VycmVudDogJycsXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBtZWRpYSBxdWVyeSBoZWxwZXIsIGJ5IGV4dHJhY3RpbmcgdGhlIGJyZWFrcG9pbnQgbGlzdCBmcm9tIHRoZSBDU1MgYW5kIGFjdGl2YXRpbmcgdGhlIGJyZWFrcG9pbnQgd2F0Y2hlci5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyICRtZXRhID0gJCgnbWV0YS5mb3VuZGF0aW9uLW1xJyk7XG4gICAgaWYoISRtZXRhLmxlbmd0aCl7XG4gICAgICAkKCc8bWV0YSBjbGFzcz1cImZvdW5kYXRpb24tbXFcIj4nKS5hcHBlbmRUbyhkb2N1bWVudC5oZWFkKTtcbiAgICB9XG5cbiAgICB2YXIgZXh0cmFjdGVkU3R5bGVzID0gJCgnLmZvdW5kYXRpb24tbXEnKS5jc3MoJ2ZvbnQtZmFtaWx5Jyk7XG4gICAgdmFyIG5hbWVkUXVlcmllcztcblxuICAgIG5hbWVkUXVlcmllcyA9IHBhcnNlU3R5bGVUb09iamVjdChleHRyYWN0ZWRTdHlsZXMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG5hbWVkUXVlcmllcykge1xuICAgICAgaWYobmFtZWRRdWVyaWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc2VsZi5xdWVyaWVzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICB2YWx1ZTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke25hbWVkUXVlcmllc1trZXldfSlgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuX2dldEN1cnJlbnRTaXplKCk7XG5cbiAgICB0aGlzLl93YXRjaGVyKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2NyZWVuIGlzIGF0IGxlYXN0IGFzIHdpZGUgYXMgYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBicmVha3BvaW50IG1hdGNoZXMsIGBmYWxzZWAgaWYgaXQncyBzbWFsbGVyLlxuICAgKi9cbiAgYXRMZWFzdChzaXplKSB7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5nZXQoc2l6ZSk7XG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2NyZWVuIG1hdGNoZXMgdG8gYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLCBlaXRoZXIgJ3NtYWxsIG9ubHknIG9yICdzbWFsbCcuIE9taXR0aW5nICdvbmx5JyBmYWxscyBiYWNrIHRvIHVzaW5nIGF0TGVhc3QoKSBtZXRob2QuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGJyZWFrcG9pbnQgbWF0Y2hlcywgYGZhbHNlYCBpZiBpdCBkb2VzIG5vdC5cbiAgICovXG4gIGlzKHNpemUpIHtcbiAgICBzaXplID0gc2l6ZS50cmltKCkuc3BsaXQoJyAnKTtcbiAgICBpZihzaXplLmxlbmd0aCA+IDEgJiYgc2l6ZVsxXSA9PT0gJ29ubHknKSB7XG4gICAgICBpZihzaXplWzBdID09PSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpKSByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuYXRMZWFzdChzaXplWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBtZWRpYSBxdWVyeSBvZiBhIGJyZWFrcG9pbnQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIE5hbWUgb2YgdGhlIGJyZWFrcG9pbnQgdG8gZ2V0LlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IC0gVGhlIG1lZGlhIHF1ZXJ5IG9mIHRoZSBicmVha3BvaW50LCBvciBgbnVsbGAgaWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdC5cbiAgICovXG4gIGdldChzaXplKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnF1ZXJpZXMpIHtcbiAgICAgIGlmKHRoaXMucXVlcmllcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbaV07XG4gICAgICAgIGlmIChzaXplID09PSBxdWVyeS5uYW1lKSByZXR1cm4gcXVlcnkudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBuYW1lIGJ5IHRlc3RpbmcgZXZlcnkgYnJlYWtwb2ludCBhbmQgcmV0dXJuaW5nIHRoZSBsYXN0IG9uZSB0byBtYXRjaCAodGhlIGJpZ2dlc3Qgb25lKS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IE5hbWUgb2YgdGhlIGN1cnJlbnQgYnJlYWtwb2ludC5cbiAgICovXG4gIF9nZXRDdXJyZW50U2l6ZSgpIHtcbiAgICB2YXIgbWF0Y2hlZDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbaV07XG5cbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeS52YWx1ZSkubWF0Y2hlcykge1xuICAgICAgICBtYXRjaGVkID0gcXVlcnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBtYXRjaGVkID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG1hdGNoZWQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGJyZWFrcG9pbnQgd2F0Y2hlciwgd2hpY2ggZmlyZXMgYW4gZXZlbnQgb24gdGhlIHdpbmRvdyB3aGVuZXZlciB0aGUgYnJlYWtwb2ludCBjaGFuZ2VzLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF93YXRjaGVyKCkge1xuICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS56Zi5tZWRpYXF1ZXJ5Jykub24oJ3Jlc2l6ZS56Zi5tZWRpYXF1ZXJ5JywgKCkgPT4ge1xuICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpLCBjdXJyZW50U2l6ZSA9IHRoaXMuY3VycmVudDtcblxuICAgICAgaWYgKG5ld1NpemUgIT09IGN1cnJlbnRTaXplKSB7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgY3VycmVudCBtZWRpYSBxdWVyeVxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXdTaXplO1xuXG4gICAgICAgIC8vIEJyb2FkY2FzdCB0aGUgbWVkaWEgcXVlcnkgY2hhbmdlIG9uIHRoZSB3aW5kb3dcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ2NoYW5nZWQuemYubWVkaWFxdWVyeScsIFtuZXdTaXplLCBjdXJyZW50U2l6ZV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLy8gVGhhbmsgeW91OiBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZ1xuZnVuY3Rpb24gcGFyc2VTdHlsZVRvT2JqZWN0KHN0cikge1xuICB2YXIgc3R5bGVPYmplY3QgPSB7fTtcblxuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gIH1cblxuICBzdHIgPSBzdHIudHJpbSgpLnNsaWNlKDEsIC0xKTsgLy8gYnJvd3NlcnMgcmUtcXVvdGUgc3RyaW5nIHN0eWxlIHZhbHVlc1xuXG4gIGlmICghc3RyKSB7XG4gICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICB9XG5cbiAgc3R5bGVPYmplY3QgPSBzdHIuc3BsaXQoJyYnKS5yZWR1Y2UoZnVuY3Rpb24ocmV0LCBwYXJhbSkge1xuICAgIHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG4gICAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICAgIHZhciB2YWwgPSBwYXJ0c1sxXTtcbiAgICBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcblxuICAgIC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG4gICAgLy8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuICAgIHZhbCA9IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuXG4gICAgaWYgKCFyZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0W2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldFtrZXldKSkge1xuICAgICAgcmV0W2tleV0ucHVzaCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXRba2V5XSA9IFtyZXRba2V5XSwgdmFsXTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSwge30pO1xuXG4gIHJldHVybiBzdHlsZU9iamVjdDtcbn1cblxuZXhwb3J0IHtNZWRpYVF1ZXJ5fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
