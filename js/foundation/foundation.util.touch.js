(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.util.touch"] = factory(require("./foundation.core"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.util.touch"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"]);
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

      return __webpack_require__(__webpack_require__.s = 28);
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
      "./js/entries/plugins/foundation.util.touch.js":
      /*!*****************************************************!*\
        !*** ./js/entries/plugins/foundation.util.touch.js ***!
        \*****************************************************/

      /*! exports provided: Foundation, Touch */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! jquery */
        "jquery");
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.util.touch */
        "./js/foundation.util.touch.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Touch", function () {
          return _foundation_util_touch__WEBPACK_IMPORTED_MODULE_1__["Touch"];
        });
        /* harmony import */


        var _foundation_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.core */
        "./foundation.core");
        /* harmony import */


        var _foundation_core__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Foundation", function () {
          return _foundation_core__WEBPACK_IMPORTED_MODULE_2__["Foundation"];
        });

        _foundation_util_touch__WEBPACK_IMPORTED_MODULE_1__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

        window.Foundation.Touch = _foundation_util_touch__WEBPACK_IMPORTED_MODULE_1__["Touch"];
        /***/
      },

      /***/
      "./js/foundation.util.touch.js":
      /*!*************************************!*\
        !*** ./js/foundation.util.touch.js ***!
        \*************************************/

      /*! exports provided: Touch */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Touch", function () {
          return Touch;
        });
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! jquery */
        "jquery");
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

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
        } //**************************************************
        //**Work inspired by multiple jquery swipe plugins**
        //**Done by Yohai Ararat ***************************
        //**************************************************


        var Touch = {};
        var startPosX,
            startPosY,
            startTime,
            elapsedTime,
            startEvent,
            isMoving = false,
            didMoved = false;

        function onTouchEnd(e) {
          this.removeEventListener('touchmove', onTouchMove);
          this.removeEventListener('touchend', onTouchEnd); // If the touch did not move, consider it as a "tap"

          if (!didMoved) {
            var tapEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('tap', startEvent || e);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);
          }

          startEvent = null;
          isMoving = false;
          didMoved = false;
        }

        function onTouchMove(e) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.preventDefault) {
            e.preventDefault();
          }

          if (isMoving) {
            var x = e.touches[0].pageX;
            var y = e.touches[0].pageY;
            var dx = startPosX - x;
            var dy = startPosY - y;
            var dir;
            didMoved = true;
            elapsedTime = new Date().getTime() - startTime;

            if (Math.abs(dx) >= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.moveThreshold && elapsedTime <= jquery__WEBPACK_IMPORTED_MODULE_0___default.a.spotSwipe.timeThreshold) {
              dir = dx > 0 ? 'left' : 'right';
            } // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
            //   dir = dy > 0 ? 'down' : 'up';
            // }


            if (dir) {
              e.preventDefault();
              onTouchEnd.apply(this, arguments);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event('swipe', e), dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event("swipe".concat(dir), e));
            }
          }
        }

        function onTouchStart(e) {
          if (e.touches.length == 1) {
            startPosX = e.touches[0].pageX;
            startPosY = e.touches[0].pageY;
            startEvent = e;
            isMoving = true;
            didMoved = false;
            startTime = new Date().getTime();
            this.addEventListener('touchmove', onTouchMove, false);
            this.addEventListener('touchend', onTouchEnd, false);
          }
        }

        function init() {
          this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
        }

        function teardown() {
          this.removeEventListener('touchstart', onTouchStart);
        }

        var SpotSwipe =
        /*#__PURE__*/
        function () {
          function SpotSwipe($) {
            _classCallCheck(this, SpotSwipe);

            this.version = '1.0.0';
            this.enabled = 'ontouchstart' in document.documentElement;
            this.preventDefault = false;
            this.moveThreshold = 75;
            this.timeThreshold = 200;
            this.$ = $;

            this._init();
          }

          _createClass(SpotSwipe, [{
            key: "_init",
            value: function _init() {
              var $ = this.$;
              $.event.special.swipe = {
                setup: init
              };
              $.event.special.tap = {
                setup: init
              };
              $.each(['left', 'up', 'down', 'right'], function () {
                $.event.special["swipe".concat(this)] = {
                  setup: function setup() {
                    $(this).on('swipe', $.noop);
                  }
                };
              });
            }
          }]);

          return SpotSwipe;
        }();
        /****************************************************
         * As far as I can tell, both setupSpotSwipe and    *
         * setupTouchHandler should be idempotent,          *
         * because they directly replace functions &        *
         * values, and do not add event handlers directly.  *
         ****************************************************/


        Touch.setupSpotSwipe = function ($) {
          $.spotSwipe = new SpotSwipe($);
        };
        /****************************************************
         * Method for adding pseudo drag events to elements *
         ***************************************************/


        Touch.setupTouchHandler = function ($) {
          $.fn.addTouch = function () {
            this.each(function (i, el) {
              $(el).bind('touchstart touchmove touchend touchcancel', function (event) {
                //we pass the original event object because the jQuery event
                //object is normalized to w3c specs and does not provide the TouchList
                handleTouch(event);
              });
            });

            var handleTouch = function handleTouch(event) {
              var touches = event.changedTouches,
                  first = touches[0],
                  eventTypes = {
                touchstart: 'mousedown',
                touchmove: 'mousemove',
                touchend: 'mouseup'
              },
                  type = eventTypes[event.type],
                  simulatedEvent;

              if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
                simulatedEvent = new window.MouseEvent(type, {
                  'bubbles': true,
                  'cancelable': true,
                  'screenX': first.screenX,
                  'screenY': first.screenY,
                  'clientX': first.clientX,
                  'clientY': first.clientY
                });
              } else {
                simulatedEvent = document.createEvent('MouseEvent');
                simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0
                /*left*/
                , null);
              }

              first.target.dispatchEvent(simulatedEvent);
            };
          };
        };

        Touch.init = function ($) {
          if (typeof $.spotSwipe === 'undefined') {
            Touch.setupSpotSwipe($);
            Touch.setupTouchHandler($);
          }
        };
        /***/

      },

      /***/
      28:
      /*!***********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.util.touch.js ***!
        \***********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.util.touch.js */
        "./js/entries/plugins/foundation.util.touch.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udXRpbC50b3VjaC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRvdWNoLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiVG91Y2giLCIkIiwid2luZG93IiwiaXNNb3ZpbmciLCJkaWRNb3ZlZCIsInRhcEV2ZW50Iiwic3RhcnRFdmVudCIsImUiLCJ4IiwieSIsImR4Iiwic3RhcnRQb3NYIiwiZHkiLCJzdGFydFBvc1kiLCJlbGFwc2VkVGltZSIsIk1hdGgiLCJkaXIiLCJvblRvdWNoRW5kIiwic3RhcnRUaW1lIiwiU3BvdFN3aXBlIiwiZG9jdW1lbnQiLCJzZXR1cCIsImluaXQiLCJoYW5kbGVUb3VjaCIsInRvdWNoZXMiLCJldmVudCIsImZpcnN0IiwiZXZlbnRUeXBlcyIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInR5cGUiLCJzaW11bGF0ZWRFdmVudCIsImNsaWVudFkiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHVCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUF5QyxVQUFBLFVBQUEsRUFBQSxJQUF6QztBQUF5QyxVQUFBLEtBQUEsRUFBQTtBQUF6QyxTQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQWdILGlCQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckksQ0FBQTtBQUNBOztBQUFBLGVBQUEsRUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxNQUFBLEdBQUEsTUFBQSxJQUFBLE1BQUEsQ0FBQSxVQUFBO0FBQ0E7QUFBQSxpQkFBQSxVQUFBLEdBQUE7QUFBMkIsaUJBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQTtBQUE0QixTQUR2RDtBQUVBO0FBQUEsaUJBQUEsZ0JBQUEsR0FBQTtBQUFpQyxpQkFBQSxNQUFBO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQTtBQUNBOzs7QUFBQSxlQUFBLE1BQUE7QUFDQTtBQUFBLE9BTkE7OztBQVFBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBO0FBQXNELGVBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLENBQUE7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOztBQUFBLGFBQUEsbUJBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSw0Q0FBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUE7QUFBQTs7O0FBQUEsWUFBQSxtQ0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxnQkFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsMkNBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1EQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLHVDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLE9BQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsbURBQUEsQ0FBQSxPQUFBLENBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFlBQUEsNkNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHFEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLDZDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFlBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsNkNBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxTQUFBOztBQ0lBQSxRQUFBQSxtREFBQUEsQ0FBQUEsT0FBQUEsQ0FBQUEsQ0FBQUEsSUFBQUEsQ0FBV0MsMkNBQUFBLENBQVhELENBQUFBOztBQUVBRSxRQUFBQSxNQUFNLENBQU5BLFVBQUFBLENBQUFBLEtBQUFBLEdBQTBCRixtREFBQUEsQ0FBMUJFLE9BQTBCRixDQUExQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTkE7QUFDQTtBQUNBO0FBQ0E7OztBQUlBLFlBQUlGLEtBQUssR0FBVCxFQUFBO0FBRUEsWUFBQSxTQUFBO0FBQUEsWUFBQSxTQUFBO0FBQUEsWUFBQSxT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O0FBVEZ6QixXQUFBQTtBQURGRCxTQUFBQTs7QUF3Q0FBLFFBQUFBLEtBQUssQ0FBTEEsSUFBQUEsR0FBYSxVQUFBLENBQUEsRUFBYTtBQUV4QixjQUFHLE9BQU9DLENBQUMsQ0FBUixTQUFBLEtBQUgsV0FBQSxFQUF3QztBQUN0Q0QsWUFBQUEsS0FBSyxDQUFMQSxjQUFBQSxDQUFBQSxDQUFBQTtBQUNBQSxZQUFBQSxLQUFLLENBQUxBLGlCQUFBQSxDQUFBQSxDQUFBQTtBQUNEO0FBTEhBLFNBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FMVUE7Q0FWQSIsImZpbGUiOiJmb3VuZGF0aW9uL2ZvdW5kYXRpb24udXRpbC50b3VjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24udXRpbC50b3VjaFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSA9IHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSB8fCB7fSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLnRvdWNoXCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCB7IFRvdWNoIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi51dGlsLnRvdWNoJztcblxuVG91Y2guaW5pdCgkKTtcblxud2luZG93LkZvdW5kYXRpb24uVG91Y2ggPSBUb3VjaDtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcbmV4cG9ydCB7IFRvdWNoIH07XG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyoqV29yayBpbnNwaXJlZCBieSBtdWx0aXBsZSBqcXVlcnkgc3dpcGUgcGx1Z2lucyoqXG4vLyoqRG9uZSBieSBZb2hhaSBBcmFyYXQgKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbnZhciBUb3VjaCA9IHt9O1xuXG52YXIgc3RhcnRQb3NYLFxuICAgIHN0YXJ0UG9zWSxcbiAgICBzdGFydFRpbWUsXG4gICAgZWxhcHNlZFRpbWUsXG4gICAgc3RhcnRFdmVudCxcbiAgICBpc01vdmluZyA9IGZhbHNlLFxuICAgIGRpZE1vdmVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuXG4gIC8vIElmIHRoZSB0b3VjaCBkaWQgbm90IG1vdmUsIGNvbnNpZGVyIGl0IGFzIGEgXCJ0YXBcIlxuICBpZiAoIWRpZE1vdmVkKSB7XG4gICAgdmFyIHRhcEV2ZW50ID0gJC5FdmVudCgndGFwJywgc3RhcnRFdmVudCB8fCBlKTtcbiAgICAkKHRoaXMpLnRyaWdnZXIodGFwRXZlbnQpO1xuICB9XG5cbiAgc3RhcnRFdmVudCA9IG51bGw7XG4gIGlzTW92aW5nID0gZmFsc2U7XG4gIGRpZE1vdmVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgaWYgKCQuc3BvdFN3aXBlLnByZXZlbnREZWZhdWx0KSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxuXG4gIGlmKGlzTW92aW5nKSB7XG4gICAgdmFyIHggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgdmFyIHkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgdmFyIGR4ID0gc3RhcnRQb3NYIC0geDtcbiAgICB2YXIgZHkgPSBzdGFydFBvc1kgLSB5O1xuICAgIHZhciBkaXI7XG4gICAgZGlkTW92ZWQgPSB0cnVlO1xuICAgIGVsYXBzZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWU7XG4gICAgaWYoTWF0aC5hYnMoZHgpID49ICQuc3BvdFN3aXBlLm1vdmVUaHJlc2hvbGQgJiYgZWxhcHNlZFRpbWUgPD0gJC5zcG90U3dpcGUudGltZVRocmVzaG9sZCkge1xuICAgICAgZGlyID0gZHggPiAwID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICB9XG4gICAgLy8gZWxzZSBpZihNYXRoLmFicyhkeSkgPj0gJC5zcG90U3dpcGUubW92ZVRocmVzaG9sZCAmJiBlbGFwc2VkVGltZSA8PSAkLnNwb3RTd2lwZS50aW1lVGhyZXNob2xkKSB7XG4gICAgLy8gICBkaXIgPSBkeSA+IDAgPyAnZG93bicgOiAndXAnO1xuICAgIC8vIH1cbiAgICBpZihkaXIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uVG91Y2hFbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICQodGhpcylcbiAgICAgICAgLnRyaWdnZXIoJC5FdmVudCgnc3dpcGUnLCBlKSwgZGlyKVxuICAgICAgICAudHJpZ2dlcigkLkV2ZW50KGBzd2lwZSR7ZGlyfWAsIGUpKTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuXG4gIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICBzdGFydFBvc1ggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgc3RhcnRQb3NZID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgIHN0YXJ0RXZlbnQgPSBlO1xuICAgIGlzTW92aW5nID0gdHJ1ZTtcbiAgICBkaWRNb3ZlZCA9IGZhbHNlO1xuICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciAmJiB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdGVhcmRvd24oKSB7XG4gIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG59XG5cbmNsYXNzIFNwb3RTd2lwZSB7XG4gIGNvbnN0cnVjdG9yKCQpIHtcbiAgICB0aGlzLnZlcnNpb24gPSAnMS4wLjAnO1xuICAgIHRoaXMuZW5hYmxlZCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB0aGlzLnByZXZlbnREZWZhdWx0ID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZlVGhyZXNob2xkID0gNzU7XG4gICAgdGhpcy50aW1lVGhyZXNob2xkID0gMjAwO1xuICAgIHRoaXMuJCA9ICQ7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgX2luaXQoKSB7XG4gICAgdmFyICQgPSB0aGlzLiQ7XG4gICAgJC5ldmVudC5zcGVjaWFsLnN3aXBlID0geyBzZXR1cDogaW5pdCB9O1xuICAgICQuZXZlbnQuc3BlY2lhbC50YXAgPSB7IHNldHVwOiBpbml0IH07XG5cbiAgICAkLmVhY2goWydsZWZ0JywgJ3VwJywgJ2Rvd24nLCAncmlnaHQnXSwgZnVuY3Rpb24gKCkge1xuICAgICAgJC5ldmVudC5zcGVjaWFsW2Bzd2lwZSR7dGhpc31gXSA9IHsgc2V0dXA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykub24oJ3N3aXBlJywgJC5ub29wKTtcbiAgICAgIH0gfTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQXMgZmFyIGFzIEkgY2FuIHRlbGwsIGJvdGggc2V0dXBTcG90U3dpcGUgYW5kICAgICpcbiAqIHNldHVwVG91Y2hIYW5kbGVyIHNob3VsZCBiZSBpZGVtcG90ZW50LCAgICAgICAgICAqXG4gKiBiZWNhdXNlIHRoZXkgZGlyZWN0bHkgcmVwbGFjZSBmdW5jdGlvbnMgJiAgICAgICAgKlxuICogdmFsdWVzLCBhbmQgZG8gbm90IGFkZCBldmVudCBoYW5kbGVycyBkaXJlY3RseS4gICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5Ub3VjaC5zZXR1cFNwb3RTd2lwZSA9IGZ1bmN0aW9uKCQpIHtcbiAgJC5zcG90U3dpcGUgPSBuZXcgU3BvdFN3aXBlKCQpO1xufTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1ldGhvZCBmb3IgYWRkaW5nIHBzZXVkbyBkcmFnIGV2ZW50cyB0byBlbGVtZW50cyAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuVG91Y2guc2V0dXBUb3VjaEhhbmRsZXIgPSBmdW5jdGlvbigkKSB7XG4gICQuZm4uYWRkVG91Y2ggPSBmdW5jdGlvbigpe1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbihpLGVsKXtcbiAgICAgICQoZWwpLmJpbmQoJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsJywgZnVuY3Rpb24oZXZlbnQpICB7XG4gICAgICAgIC8vd2UgcGFzcyB0aGUgb3JpZ2luYWwgZXZlbnQgb2JqZWN0IGJlY2F1c2UgdGhlIGpRdWVyeSBldmVudFxuICAgICAgICAvL29iamVjdCBpcyBub3JtYWxpemVkIHRvIHczYyBzcGVjcyBhbmQgZG9lcyBub3QgcHJvdmlkZSB0aGUgVG91Y2hMaXN0XG4gICAgICAgIGhhbmRsZVRvdWNoKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIGhhbmRsZVRvdWNoID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgICBmaXJzdCA9IHRvdWNoZXNbMF0sXG4gICAgICAgICAgZXZlbnRUeXBlcyA9IHtcbiAgICAgICAgICAgIHRvdWNoc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgdG91Y2htb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICAgICAgICAgIHRvdWNoZW5kOiAnbW91c2V1cCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGUgPSBldmVudFR5cGVzW2V2ZW50LnR5cGVdLFxuICAgICAgICAgIHNpbXVsYXRlZEV2ZW50XG4gICAgICAgIDtcblxuICAgICAgaWYoJ01vdXNlRXZlbnQnIGluIHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93Lk1vdXNlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2ltdWxhdGVkRXZlbnQgPSBuZXcgd2luZG93Lk1vdXNlRXZlbnQodHlwZSwge1xuICAgICAgICAgICdidWJibGVzJzogdHJ1ZSxcbiAgICAgICAgICAnY2FuY2VsYWJsZSc6IHRydWUsXG4gICAgICAgICAgJ3NjcmVlblgnOiBmaXJzdC5zY3JlZW5YLFxuICAgICAgICAgICdzY3JlZW5ZJzogZmlyc3Quc2NyZWVuWSxcbiAgICAgICAgICAnY2xpZW50WCc6IGZpcnN0LmNsaWVudFgsXG4gICAgICAgICAgJ2NsaWVudFknOiBmaXJzdC5jbGllbnRZXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2ltdWxhdGVkRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudCcpO1xuICAgICAgICBzaW11bGF0ZWRFdmVudC5pbml0TW91c2VFdmVudCh0eXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDEsIGZpcnN0LnNjcmVlblgsIGZpcnN0LnNjcmVlblksIGZpcnN0LmNsaWVudFgsIGZpcnN0LmNsaWVudFksIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLypsZWZ0Ki8sIG51bGwpO1xuICAgICAgfVxuICAgICAgZmlyc3QudGFyZ2V0LmRpc3BhdGNoRXZlbnQoc2ltdWxhdGVkRXZlbnQpO1xuICAgIH07XG4gIH07XG59O1xuXG5Ub3VjaC5pbml0ID0gZnVuY3Rpb24gKCQpIHtcblxuICBpZih0eXBlb2YoJC5zcG90U3dpcGUpID09PSAndW5kZWZpbmVkJykge1xuICAgIFRvdWNoLnNldHVwU3BvdFN3aXBlKCQpO1xuICAgIFRvdWNoLnNldHVwVG91Y2hIYW5kbGVyKCQpO1xuICB9XG59O1xuXG5leHBvcnQge1RvdWNofTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=