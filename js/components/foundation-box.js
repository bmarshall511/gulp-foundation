(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"));else if (typeof define === 'function' && define.amd) define(["./foundation.core"], factory);else if (typeof exports === 'object') exports["foundation.util.box"] = factory(require("./foundation.core"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.util.box"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__) {
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

      return __webpack_require__(__webpack_require__.s = 21);
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
      "./js/entries/plugins/foundation.util.box.js":
      /*!***************************************************!*\
        !*** ./js/entries/plugins/foundation.util.box.js ***!
        \***************************************************/

      /*! exports provided: Foundation, Box */

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


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.util.box */
        "./js/foundation.util.box.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Box", function () {
          return _foundation_util_box__WEBPACK_IMPORTED_MODULE_1__["Box"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].Box = _foundation_util_box__WEBPACK_IMPORTED_MODULE_1__["Box"];
        /***/
      },

      /***/
      "./js/foundation.util.box.js":
      /*!***********************************!*\
        !*** ./js/foundation.util.box.js ***!
        \***********************************/

      /*! exports provided: Box */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Box", function () {
          return Box;
        });
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__);

        var Box = {
          ImNotTouchingYou: ImNotTouchingYou,
          OverlapArea: OverlapArea,
          GetDimensions: GetDimensions,
          GetOffsets: GetOffsets,
          GetExplicitOffsets: GetExplicitOffsets
          /**
           * Compares the dimensions of an element to a container and determines collision events with container.
           * @function
           * @param {jQuery} element - jQuery object to test for collisions.
           * @param {jQuery} parent - jQuery object to use as bounding container.
           * @param {Boolean} lrOnly - set to true to check left and right values only.
           * @param {Boolean} tbOnly - set to true to check top and bottom values only.
           * @default if no parent object passed, detects collisions with `window`.
           * @returns {Boolean} - true if collision free, false if a collision in any direction.
           */

        };

        function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
          return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
        }

        ;

        function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
          var eleDims = GetDimensions(element),
              topOver,
              bottomOver,
              leftOver,
              rightOver;

          if (parent) {
            var parDims = GetDimensions(parent);
            bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
            topOver = eleDims.offset.top - parDims.offset.top;
            leftOver = eleDims.offset.left - parDims.offset.left;
            rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
          } else {
            bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
            topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
            leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
            rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
          }

          bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
          topOver = Math.min(topOver, 0);
          leftOver = Math.min(leftOver, 0);
          rightOver = Math.min(rightOver, 0);

          if (lrOnly) {
            return leftOver + rightOver;
          }

          if (tbOnly) {
            return topOver + bottomOver;
          } // use sum of squares b/c we care about overlap area.


          return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
        }
        /**
         * Uses native methods to return an object of dimension values.
         * @function
         * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
         * @returns {Object} - nested object of integer pixel values
         * TODO - if element is window, return only those values.
         */


        function GetDimensions(elem) {
          elem = elem.length ? elem[0] : elem;

          if (elem === window || elem === document) {
            throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
          }

          var rect = elem.getBoundingClientRect(),
              parRect = elem.parentNode.getBoundingClientRect(),
              winRect = document.body.getBoundingClientRect(),
              winY = window.pageYOffset,
              winX = window.pageXOffset;
          return {
            width: rect.width,
            height: rect.height,
            offset: {
              top: rect.top + winY,
              left: rect.left + winX
            },
            parentDims: {
              width: parRect.width,
              height: parRect.height,
              offset: {
                top: parRect.top + winY,
                left: parRect.left + winX
              }
            },
            windowDims: {
              width: winRect.width,
              height: winRect.height,
              offset: {
                top: winY,
                left: winX
              }
            }
          };
        }
        /**
         * Returns an object of top and left integer pixel values for dynamically rendered elements,
         * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
         * you don't know alignment, but generally from
         * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
         * @function
         * @param {jQuery} element - jQuery object for the element being positioned.
         * @param {jQuery} anchor - jQuery object for the element's anchor point.
         * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
         * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
         * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
         * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
         * TODO alter/rewrite to work with `em` values as well/instead of pixels
         */


        function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
          console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5");

          switch (position) {
            case 'top':
              return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? GetExplicitOffsets(element, anchor, 'top', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'top', 'right', vOffset, hOffset, isOverflow);

            case 'bottom':
              return Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);

            case 'center top':
              return GetExplicitOffsets(element, anchor, 'top', 'center', vOffset, hOffset, isOverflow);

            case 'center bottom':
              return GetExplicitOffsets(element, anchor, 'bottom', 'center', vOffset, hOffset, isOverflow);

            case 'center left':
              return GetExplicitOffsets(element, anchor, 'left', 'center', vOffset, hOffset, isOverflow);

            case 'center right':
              return GetExplicitOffsets(element, anchor, 'right', 'center', vOffset, hOffset, isOverflow);

            case 'left bottom':
              return GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow);

            case 'right bottom':
              return GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);
            // Backwards compatibility... this along with the reveal and reveal full
            // classes are the only ones that didn't reference anchor

            case 'center':
              return {
                left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + hOffset,
                top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + vOffset)
              };

            case 'reveal':
              return {
                left: ($eleDims.windowDims.width - $eleDims.width) / 2 + hOffset,
                top: $eleDims.windowDims.offset.top + vOffset
              };

            case 'reveal full':
              return {
                left: $eleDims.windowDims.offset.left,
                top: $eleDims.windowDims.offset.top
              };
              break;

            default:
              return {
                left: Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__["rtl"])() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset : $anchorDims.offset.left + hOffset,
                top: $anchorDims.offset.top + $anchorDims.height + vOffset
              };
          }
        }

        function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
          var $eleDims = GetDimensions(element),
              $anchorDims = anchor ? GetDimensions(anchor) : null;
          var topVal, leftVal; // set position related attribute

          switch (position) {
            case 'top':
              topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
              break;

            case 'bottom':
              topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
              break;

            case 'left':
              leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
              break;

            case 'right':
              leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
              break;
          } // set alignment related attribute


          switch (position) {
            case 'top':
            case 'bottom':
              switch (alignment) {
                case 'left':
                  leftVal = $anchorDims.offset.left + hOffset;
                  break;

                case 'right':
                  leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
                  break;

                case 'center':
                  leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
                  break;
              }

              break;

            case 'right':
            case 'left':
              switch (alignment) {
                case 'bottom':
                  topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
                  break;

                case 'top':
                  topVal = $anchorDims.offset.top + vOffset;
                  break;

                case 'center':
                  topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
                  break;
              }

              break;
          }

          return {
            top: topVal,
            left: leftVal
          };
        }
        /***/

      },

      /***/
      21:
      /*!*********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.util.box.js ***!
        \*********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.util.box.js */
        "./js/entries/plugins/foundation.util.box.js");
        /***/
      }
      /******/

    })
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udXRpbC5ib3guanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC5ib3guanMiXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIkJveCIsIkltTm90VG91Y2hpbmdZb3UiLCJPdmVybGFwQXJlYSIsIkdldERpbWVuc2lvbnMiLCJHZXRPZmZzZXRzIiwiR2V0RXhwbGljaXRPZmZzZXRzIiwiZWxlRGltcyIsInBhckRpbXMiLCJib3R0b21PdmVyIiwidG9wT3ZlciIsImxlZnRPdmVyIiwicmlnaHRPdmVyIiwiaWdub3JlQm90dG9tIiwiTWF0aCIsImVsZW0iLCJyZWN0IiwicGFyUmVjdCIsIndpblJlY3QiLCJkb2N1bWVudCIsIndpblkiLCJ3aW5kb3ciLCJ3aW5YIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJsZWZ0IiwicGFyZW50RGltcyIsIndpbmRvd0RpbXMiLCJjb25zb2xlIiwiUnRsIiwiJGVsZURpbXMiLCJ2T2Zmc2V0IiwiJGFuY2hvckRpbXMiLCJhbmNob3IiLCJ0b3BWYWwiLCJsZWZ0VmFsIiwiaXNPdmVyZmxvdyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxxQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLDRDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFB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UDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBSjFORDtDQVZBIiwiZmlsZSI6ImNvbXBvbmVudHMvZm91bmRhdGlvbi1ib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3VuZGF0aW9uLnV0aWwuYm94XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwuYm94XCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLnV0aWwuYm94JztcblxuRm91bmRhdGlvbi5Cb3ggPSBCb3g7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIEJveCB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCB7IHJ0bCBhcyBSdGwgfSBmcm9tIFwiLi9mb3VuZGF0aW9uLmNvcmUudXRpbHNcIjtcblxudmFyIEJveCA9IHtcbiAgSW1Ob3RUb3VjaGluZ1lvdTogSW1Ob3RUb3VjaGluZ1lvdSxcbiAgT3ZlcmxhcEFyZWE6IE92ZXJsYXBBcmVhLFxuICBHZXREaW1lbnNpb25zOiBHZXREaW1lbnNpb25zLFxuICBHZXRPZmZzZXRzOiBHZXRPZmZzZXRzLFxuICBHZXRFeHBsaWNpdE9mZnNldHM6IEdldEV4cGxpY2l0T2Zmc2V0c1xufVxuXG4vKipcbiAqIENvbXBhcmVzIHRoZSBkaW1lbnNpb25zIG9mIGFuIGVsZW1lbnQgdG8gYSBjb250YWluZXIgYW5kIGRldGVybWluZXMgY29sbGlzaW9uIGV2ZW50cyB3aXRoIGNvbnRhaW5lci5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIHRlc3QgZm9yIGNvbGxpc2lvbnMuXG4gKiBAcGFyYW0ge2pRdWVyeX0gcGFyZW50IC0galF1ZXJ5IG9iamVjdCB0byB1c2UgYXMgYm91bmRpbmcgY29udGFpbmVyLlxuICogQHBhcmFtIHtCb29sZWFufSBsck9ubHkgLSBzZXQgdG8gdHJ1ZSB0byBjaGVjayBsZWZ0IGFuZCByaWdodCB2YWx1ZXMgb25seS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGJPbmx5IC0gc2V0IHRvIHRydWUgdG8gY2hlY2sgdG9wIGFuZCBib3R0b20gdmFsdWVzIG9ubHkuXG4gKiBAZGVmYXVsdCBpZiBubyBwYXJlbnQgb2JqZWN0IHBhc3NlZCwgZGV0ZWN0cyBjb2xsaXNpb25zIHdpdGggYHdpbmRvd2AuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSB0cnVlIGlmIGNvbGxpc2lvbiBmcmVlLCBmYWxzZSBpZiBhIGNvbGxpc2lvbiBpbiBhbnkgZGlyZWN0aW9uLlxuICovXG5mdW5jdGlvbiBJbU5vdFRvdWNoaW5nWW91KGVsZW1lbnQsIHBhcmVudCwgbHJPbmx5LCB0Yk9ubHksIGlnbm9yZUJvdHRvbSkge1xuICByZXR1cm4gT3ZlcmxhcEFyZWEoZWxlbWVudCwgcGFyZW50LCBsck9ubHksIHRiT25seSwgaWdub3JlQm90dG9tKSA9PT0gMDtcbn07XG5cbmZ1bmN0aW9uIE92ZXJsYXBBcmVhKGVsZW1lbnQsIHBhcmVudCwgbHJPbmx5LCB0Yk9ubHksIGlnbm9yZUJvdHRvbSkge1xuICB2YXIgZWxlRGltcyA9IEdldERpbWVuc2lvbnMoZWxlbWVudCksXG4gIHRvcE92ZXIsIGJvdHRvbU92ZXIsIGxlZnRPdmVyLCByaWdodE92ZXI7XG4gIGlmIChwYXJlbnQpIHtcbiAgICB2YXIgcGFyRGltcyA9IEdldERpbWVuc2lvbnMocGFyZW50KTtcblxuICAgIGJvdHRvbU92ZXIgPSAocGFyRGltcy5oZWlnaHQgKyBwYXJEaW1zLm9mZnNldC50b3ApIC0gKGVsZURpbXMub2Zmc2V0LnRvcCArIGVsZURpbXMuaGVpZ2h0KTtcbiAgICB0b3BPdmVyICAgID0gZWxlRGltcy5vZmZzZXQudG9wIC0gcGFyRGltcy5vZmZzZXQudG9wO1xuICAgIGxlZnRPdmVyICAgPSBlbGVEaW1zLm9mZnNldC5sZWZ0IC0gcGFyRGltcy5vZmZzZXQubGVmdDtcbiAgICByaWdodE92ZXIgID0gKHBhckRpbXMud2lkdGggKyBwYXJEaW1zLm9mZnNldC5sZWZ0KSAtIChlbGVEaW1zLm9mZnNldC5sZWZ0ICsgZWxlRGltcy53aWR0aCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgYm90dG9tT3ZlciA9IChlbGVEaW1zLndpbmRvd0RpbXMuaGVpZ2h0ICsgZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC50b3ApIC0gKGVsZURpbXMub2Zmc2V0LnRvcCArIGVsZURpbXMuaGVpZ2h0KTtcbiAgICB0b3BPdmVyICAgID0gZWxlRGltcy5vZmZzZXQudG9wIC0gZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC50b3A7XG4gICAgbGVmdE92ZXIgICA9IGVsZURpbXMub2Zmc2V0LmxlZnQgLSBlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LmxlZnQ7XG4gICAgcmlnaHRPdmVyICA9IGVsZURpbXMud2luZG93RGltcy53aWR0aCAtIChlbGVEaW1zLm9mZnNldC5sZWZ0ICsgZWxlRGltcy53aWR0aCk7XG4gIH1cblxuICBib3R0b21PdmVyID0gaWdub3JlQm90dG9tID8gMCA6IE1hdGgubWluKGJvdHRvbU92ZXIsIDApO1xuICB0b3BPdmVyICAgID0gTWF0aC5taW4odG9wT3ZlciwgMCk7XG4gIGxlZnRPdmVyICAgPSBNYXRoLm1pbihsZWZ0T3ZlciwgMCk7XG4gIHJpZ2h0T3ZlciAgPSBNYXRoLm1pbihyaWdodE92ZXIsIDApO1xuXG4gIGlmIChsck9ubHkpIHtcbiAgICByZXR1cm4gbGVmdE92ZXIgKyByaWdodE92ZXI7XG4gIH1cbiAgaWYgKHRiT25seSkge1xuICAgIHJldHVybiB0b3BPdmVyICsgYm90dG9tT3ZlcjtcbiAgfVxuXG4gIC8vIHVzZSBzdW0gb2Ygc3F1YXJlcyBiL2Mgd2UgY2FyZSBhYm91dCBvdmVybGFwIGFyZWEuXG4gIHJldHVybiBNYXRoLnNxcnQoKHRvcE92ZXIgKiB0b3BPdmVyKSArIChib3R0b21PdmVyICogYm90dG9tT3ZlcikgKyAobGVmdE92ZXIgKiBsZWZ0T3ZlcikgKyAocmlnaHRPdmVyICogcmlnaHRPdmVyKSk7XG59XG5cbi8qKlxuICogVXNlcyBuYXRpdmUgbWV0aG9kcyB0byByZXR1cm4gYW4gb2JqZWN0IG9mIGRpbWVuc2lvbiB2YWx1ZXMuXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7alF1ZXJ5IHx8IEhUTUx9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IG9yIERPTSBlbGVtZW50IGZvciB3aGljaCB0byBnZXQgdGhlIGRpbWVuc2lvbnMuIENhbiBiZSBhbnkgZWxlbWVudCBvdGhlciB0aGF0IGRvY3VtZW50IG9yIHdpbmRvdy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gbmVzdGVkIG9iamVjdCBvZiBpbnRlZ2VyIHBpeGVsIHZhbHVlc1xuICogVE9ETyAtIGlmIGVsZW1lbnQgaXMgd2luZG93LCByZXR1cm4gb25seSB0aG9zZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIEdldERpbWVuc2lvbnMoZWxlbSl7XG4gIGVsZW0gPSBlbGVtLmxlbmd0aCA/IGVsZW1bMF0gOiBlbGVtO1xuXG4gIGlmIChlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJJ20gc29ycnksIERhdmUuIEknbSBhZnJhaWQgSSBjYW4ndCBkbyB0aGF0LlwiKTtcbiAgfVxuXG4gIHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHBhclJlY3QgPSBlbGVtLnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICB3aW5SZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHdpblkgPSB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICB3aW5YID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICBvZmZzZXQ6IHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5ZLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luWFxuICAgIH0sXG4gICAgcGFyZW50RGltczoge1xuICAgICAgd2lkdGg6IHBhclJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IHBhclJlY3QuaGVpZ2h0LFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIHRvcDogcGFyUmVjdC50b3AgKyB3aW5ZLFxuICAgICAgICBsZWZ0OiBwYXJSZWN0LmxlZnQgKyB3aW5YXG4gICAgICB9XG4gICAgfSxcbiAgICB3aW5kb3dEaW1zOiB7XG4gICAgICB3aWR0aDogd2luUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogd2luUmVjdC5oZWlnaHQsXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgdG9wOiB3aW5ZLFxuICAgICAgICBsZWZ0OiB3aW5YXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgb2YgdG9wIGFuZCBsZWZ0IGludGVnZXIgcGl4ZWwgdmFsdWVzIGZvciBkeW5hbWljYWxseSByZW5kZXJlZCBlbGVtZW50cyxcbiAqIHN1Y2ggYXM6IFRvb2x0aXAsIFJldmVhbCwgYW5kIERyb3Bkb3duLiBNYWludGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgYW5kIHdoZXJlXG4gKiB5b3UgZG9uJ3Qga25vdyBhbGlnbm1lbnQsIGJ1dCBnZW5lcmFsbHkgZnJvbVxuICogNi40IGZvcndhcmQgeW91IHNob3VsZCB1c2UgR2V0RXhwbGljaXRPZmZzZXRzLCBhcyBHZXRPZmZzZXRzIGNvbmZsYXRlcyBwb3NpdGlvbiBhbmQgYWxpZ25tZW50LlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgZm9yIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gKiBAcGFyYW0ge2pRdWVyeX0gYW5jaG9yIC0galF1ZXJ5IG9iamVjdCBmb3IgdGhlIGVsZW1lbnQncyBhbmNob3IgcG9pbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gcG9zaXRpb24gLSBhIHN0cmluZyByZWxhdGluZyB0byB0aGUgZGVzaXJlZCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCwgcmVsYXRpdmUgdG8gaXQncyBhbmNob3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB2T2Zmc2V0IC0gaW50ZWdlciBwaXhlbCB2YWx1ZSBvZiBkZXNpcmVkIHZlcnRpY2FsIHNlcGFyYXRpb24gYmV0d2VlbiBhbmNob3IgYW5kIGVsZW1lbnQuXG4gKiBAcGFyYW0ge051bWJlcn0gaE9mZnNldCAtIGludGVnZXIgcGl4ZWwgdmFsdWUgb2YgZGVzaXJlZCBob3Jpem9udGFsIHNlcGFyYXRpb24gYmV0d2VlbiBhbmNob3IgYW5kIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzT3ZlcmZsb3cgLSBpZiBhIGNvbGxpc2lvbiBldmVudCBpcyBkZXRlY3RlZCwgc2V0cyB0byB0cnVlIHRvIGRlZmF1bHQgdGhlIGVsZW1lbnQgdG8gZnVsbCB3aWR0aCAtIGFueSBkZXNpcmVkIG9mZnNldC5cbiAqIFRPRE8gYWx0ZXIvcmV3cml0ZSB0byB3b3JrIHdpdGggYGVtYCB2YWx1ZXMgYXMgd2VsbC9pbnN0ZWFkIG9mIHBpeGVsc1xuICovXG5mdW5jdGlvbiBHZXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgcG9zaXRpb24sIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpIHtcbiAgY29uc29sZS5sb2coXCJOT1RFOiBHZXRPZmZzZXRzIGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgR2V0RXhwbGljaXRPZmZzZXRzIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gNi41XCIpO1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHJldHVybiBSdGwoKSA/XG4gICAgICAgIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICd0b3AnLCAnbGVmdCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpIDpcbiAgICAgICAgR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ3RvcCcsICdyaWdodCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICByZXR1cm4gUnRsKCkgP1xuICAgICAgICBHZXRFeHBsaWNpdE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCAnYm90dG9tJywgJ2xlZnQnLCB2T2Zmc2V0LCBoT2Zmc2V0LCBpc092ZXJmbG93KSA6XG4gICAgICAgIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICdib3R0b20nLCAncmlnaHQnLCB2T2Zmc2V0LCBoT2Zmc2V0LCBpc092ZXJmbG93KTtcbiAgICBjYXNlICdjZW50ZXIgdG9wJzpcbiAgICAgIHJldHVybiBHZXRFeHBsaWNpdE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCAndG9wJywgJ2NlbnRlcicsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIGNhc2UgJ2NlbnRlciBib3R0b20nOlxuICAgICAgcmV0dXJuIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICdib3R0b20nLCAnY2VudGVyJywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdyk7XG4gICAgY2FzZSAnY2VudGVyIGxlZnQnOlxuICAgICAgcmV0dXJuIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICdsZWZ0JywgJ2NlbnRlcicsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIGNhc2UgJ2NlbnRlciByaWdodCc6XG4gICAgICByZXR1cm4gR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ3JpZ2h0JywgJ2NlbnRlcicsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIGNhc2UgJ2xlZnQgYm90dG9tJzpcbiAgICAgIHJldHVybiBHZXRFeHBsaWNpdE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCAnYm90dG9tJywgJ2xlZnQnLCB2T2Zmc2V0LCBoT2Zmc2V0LCBpc092ZXJmbG93KTtcbiAgICBjYXNlICdyaWdodCBib3R0b20nOlxuICAgICAgcmV0dXJuIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICdib3R0b20nLCAncmlnaHQnLCB2T2Zmc2V0LCBoT2Zmc2V0LCBpc092ZXJmbG93KTtcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4uLiB0aGlzIGFsb25nIHdpdGggdGhlIHJldmVhbCBhbmQgcmV2ZWFsIGZ1bGxcbiAgICAvLyBjbGFzc2VzIGFyZSB0aGUgb25seSBvbmVzIHRoYXQgZGlkbid0IHJlZmVyZW5jZSBhbmNob3JcbiAgICBjYXNlICdjZW50ZXInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKCRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LmxlZnQgKyAoJGVsZURpbXMud2luZG93RGltcy53aWR0aCAvIDIpKSAtICgkZWxlRGltcy53aWR0aCAvIDIpICsgaE9mZnNldCxcbiAgICAgICAgdG9wOiAoJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wICsgKCRlbGVEaW1zLndpbmRvd0RpbXMuaGVpZ2h0IC8gMikpIC0gKCRlbGVEaW1zLmhlaWdodCAvIDIgKyB2T2Zmc2V0KVxuICAgICAgfVxuICAgIGNhc2UgJ3JldmVhbCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoJGVsZURpbXMud2luZG93RGltcy53aWR0aCAtICRlbGVEaW1zLndpZHRoKSAvIDIgKyBoT2Zmc2V0LFxuICAgICAgICB0b3A6ICRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcCArIHZPZmZzZXRcbiAgICAgIH1cbiAgICBjYXNlICdyZXZlYWwgZnVsbCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAkZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC5sZWZ0LFxuICAgICAgICB0b3A6ICRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcFxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IChSdGwoKSA/ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0IC0gJGVsZURpbXMud2lkdGggKyAkYW5jaG9yRGltcy53aWR0aCAtIGhPZmZzZXQ6ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0ICsgaE9mZnNldCksXG4gICAgICAgIHRvcDogJGFuY2hvckRpbXMub2Zmc2V0LnRvcCArICRhbmNob3JEaW1zLmhlaWdodCArIHZPZmZzZXRcbiAgICAgIH1cblxuICB9XG5cbn1cblxuZnVuY3Rpb24gR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgcG9zaXRpb24sIGFsaWdubWVudCwgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdykge1xuICB2YXIgJGVsZURpbXMgPSBHZXREaW1lbnNpb25zKGVsZW1lbnQpLFxuICAgICAgJGFuY2hvckRpbXMgPSBhbmNob3IgPyBHZXREaW1lbnNpb25zKGFuY2hvcikgOiBudWxsO1xuXG4gICAgICB2YXIgdG9wVmFsLCBsZWZ0VmFsO1xuXG4gIC8vIHNldCBwb3NpdGlvbiByZWxhdGVkIGF0dHJpYnV0ZVxuXG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgdG9wVmFsID0gJGFuY2hvckRpbXMub2Zmc2V0LnRvcCAtICgkZWxlRGltcy5oZWlnaHQgKyB2T2Zmc2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICB0b3BWYWwgPSAkYW5jaG9yRGltcy5vZmZzZXQudG9wICsgJGFuY2hvckRpbXMuaGVpZ2h0ICsgdk9mZnNldDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgbGVmdFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0IC0gKCRlbGVEaW1zLndpZHRoICsgaE9mZnNldCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICBsZWZ0VmFsID0gJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyAkYW5jaG9yRGltcy53aWR0aCArIGhPZmZzZXQ7XG4gICAgICBicmVhaztcbiAgfVxuXG5cbiAgLy8gc2V0IGFsaWdubWVudCByZWxhdGVkIGF0dHJpYnV0ZVxuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgbGVmdFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0ICsgaE9mZnNldDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIGxlZnRWYWwgPSAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCAtICRlbGVEaW1zLndpZHRoICsgJGFuY2hvckRpbXMud2lkdGggLSBoT2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAgIGxlZnRWYWwgPSBpc092ZXJmbG93ID8gaE9mZnNldCA6ICgoJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyAoJGFuY2hvckRpbXMud2lkdGggLyAyKSkgLSAoJGVsZURpbXMud2lkdGggLyAyKSkgKyBoT2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICB0b3BWYWwgPSAkYW5jaG9yRGltcy5vZmZzZXQudG9wIC0gdk9mZnNldCArICRhbmNob3JEaW1zLmhlaWdodCAtICRlbGVEaW1zLmhlaWdodDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICB0b3BWYWwgPSAkYW5jaG9yRGltcy5vZmZzZXQudG9wICsgdk9mZnNldFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAgIHRvcFZhbCA9ICgkYW5jaG9yRGltcy5vZmZzZXQudG9wICsgdk9mZnNldCArICgkYW5jaG9yRGltcy5oZWlnaHQgLyAyKSkgLSAoJGVsZURpbXMuaGVpZ2h0IC8gMilcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB7dG9wOiB0b3BWYWwsIGxlZnQ6IGxlZnRWYWx9O1xufVxuXG5leHBvcnQge0JveH07XG4iXX0=
