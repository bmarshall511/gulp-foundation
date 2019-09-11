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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udXRpbC5ib3guanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC5ib3guanMiXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIkJveCIsIkltTm90VG91Y2hpbmdZb3UiLCJPdmVybGFwQXJlYSIsIkdldERpbWVuc2lvbnMiLCJHZXRPZmZzZXRzIiwiR2V0RXhwbGljaXRPZmZzZXRzIiwiZWxlRGltcyIsInBhckRpbXMiLCJib3R0b21PdmVyIiwidG9wT3ZlciIsImxlZnRPdmVyIiwicmlnaHRPdmVyIiwiaWdub3JlQm90dG9tIiwiTWF0aCIsImVsZW0iLCJyZWN0IiwicGFyUmVjdCIsIndpblJlY3QiLCJkb2N1bWVudCIsIndpblkiLCJ3aW5kb3ciLCJ3aW5YIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJsZWZ0IiwicGFyZW50RGltcyIsIndpbmRvd0RpbXMiLCJjb25zb2xlIiwiUnRsIiwiJGVsZURpbXMiLCJ2T2Zmc2V0IiwiJGFuY2hvckRpbXMiLCJhbmNob3IiLCJ0b3BWYWwiLCJsZWZ0VmFsIiwiaXNPdmVyZmxvdyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxxQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLDRDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFB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UDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBSjFORDtDQVZBIiwiZmlsZSI6ImZvdW5kYXRpb24vZm91bmRhdGlvbi51dGlsLmJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24udXRpbC5ib3hcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5ib3hcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24udXRpbC5ib3gnO1xuXG5Gb3VuZGF0aW9uLkJveCA9IEJveDtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgQm94IH07XG4iLCIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IHsgcnRsIGFzIFJ0bCB9IGZyb20gXCIuL2ZvdW5kYXRpb24uY29yZS51dGlsc1wiO1xuXG52YXIgQm94ID0ge1xuICBJbU5vdFRvdWNoaW5nWW91OiBJbU5vdFRvdWNoaW5nWW91LFxuICBPdmVybGFwQXJlYTogT3ZlcmxhcEFyZWEsXG4gIEdldERpbWVuc2lvbnM6IEdldERpbWVuc2lvbnMsXG4gIEdldE9mZnNldHM6IEdldE9mZnNldHMsXG4gIEdldEV4cGxpY2l0T2Zmc2V0czogR2V0RXhwbGljaXRPZmZzZXRzXG59XG5cbi8qKlxuICogQ29tcGFyZXMgdGhlIGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudCB0byBhIGNvbnRhaW5lciBhbmQgZGV0ZXJtaW5lcyBjb2xsaXNpb24gZXZlbnRzIHdpdGggY29udGFpbmVyLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gdGVzdCBmb3IgY29sbGlzaW9ucy5cbiAqIEBwYXJhbSB7alF1ZXJ5fSBwYXJlbnQgLSBqUXVlcnkgb2JqZWN0IHRvIHVzZSBhcyBib3VuZGluZyBjb250YWluZXIuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGxyT25seSAtIHNldCB0byB0cnVlIHRvIGNoZWNrIGxlZnQgYW5kIHJpZ2h0IHZhbHVlcyBvbmx5LlxuICogQHBhcmFtIHtCb29sZWFufSB0Yk9ubHkgLSBzZXQgdG8gdHJ1ZSB0byBjaGVjayB0b3AgYW5kIGJvdHRvbSB2YWx1ZXMgb25seS5cbiAqIEBkZWZhdWx0IGlmIG5vIHBhcmVudCBvYmplY3QgcGFzc2VkLCBkZXRlY3RzIGNvbGxpc2lvbnMgd2l0aCBgd2luZG93YC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSAtIHRydWUgaWYgY29sbGlzaW9uIGZyZWUsIGZhbHNlIGlmIGEgY29sbGlzaW9uIGluIGFueSBkaXJlY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIEltTm90VG91Y2hpbmdZb3UoZWxlbWVudCwgcGFyZW50LCBsck9ubHksIHRiT25seSwgaWdub3JlQm90dG9tKSB7XG4gIHJldHVybiBPdmVybGFwQXJlYShlbGVtZW50LCBwYXJlbnQsIGxyT25seSwgdGJPbmx5LCBpZ25vcmVCb3R0b20pID09PSAwO1xufTtcblxuZnVuY3Rpb24gT3ZlcmxhcEFyZWEoZWxlbWVudCwgcGFyZW50LCBsck9ubHksIHRiT25seSwgaWdub3JlQm90dG9tKSB7XG4gIHZhciBlbGVEaW1zID0gR2V0RGltZW5zaW9ucyhlbGVtZW50KSxcbiAgdG9wT3ZlciwgYm90dG9tT3ZlciwgbGVmdE92ZXIsIHJpZ2h0T3ZlcjtcbiAgaWYgKHBhcmVudCkge1xuICAgIHZhciBwYXJEaW1zID0gR2V0RGltZW5zaW9ucyhwYXJlbnQpO1xuXG4gICAgYm90dG9tT3ZlciA9IChwYXJEaW1zLmhlaWdodCArIHBhckRpbXMub2Zmc2V0LnRvcCkgLSAoZWxlRGltcy5vZmZzZXQudG9wICsgZWxlRGltcy5oZWlnaHQpO1xuICAgIHRvcE92ZXIgICAgPSBlbGVEaW1zLm9mZnNldC50b3AgLSBwYXJEaW1zLm9mZnNldC50b3A7XG4gICAgbGVmdE92ZXIgICA9IGVsZURpbXMub2Zmc2V0LmxlZnQgLSBwYXJEaW1zLm9mZnNldC5sZWZ0O1xuICAgIHJpZ2h0T3ZlciAgPSAocGFyRGltcy53aWR0aCArIHBhckRpbXMub2Zmc2V0LmxlZnQpIC0gKGVsZURpbXMub2Zmc2V0LmxlZnQgKyBlbGVEaW1zLndpZHRoKTtcbiAgfVxuICBlbHNlIHtcbiAgICBib3R0b21PdmVyID0gKGVsZURpbXMud2luZG93RGltcy5oZWlnaHQgKyBlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcCkgLSAoZWxlRGltcy5vZmZzZXQudG9wICsgZWxlRGltcy5oZWlnaHQpO1xuICAgIHRvcE92ZXIgICAgPSBlbGVEaW1zLm9mZnNldC50b3AgLSBlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcDtcbiAgICBsZWZ0T3ZlciAgID0gZWxlRGltcy5vZmZzZXQubGVmdCAtIGVsZURpbXMud2luZG93RGltcy5vZmZzZXQubGVmdDtcbiAgICByaWdodE92ZXIgID0gZWxlRGltcy53aW5kb3dEaW1zLndpZHRoIC0gKGVsZURpbXMub2Zmc2V0LmxlZnQgKyBlbGVEaW1zLndpZHRoKTtcbiAgfVxuXG4gIGJvdHRvbU92ZXIgPSBpZ25vcmVCb3R0b20gPyAwIDogTWF0aC5taW4oYm90dG9tT3ZlciwgMCk7XG4gIHRvcE92ZXIgICAgPSBNYXRoLm1pbih0b3BPdmVyLCAwKTtcbiAgbGVmdE92ZXIgICA9IE1hdGgubWluKGxlZnRPdmVyLCAwKTtcbiAgcmlnaHRPdmVyICA9IE1hdGgubWluKHJpZ2h0T3ZlciwgMCk7XG5cbiAgaWYgKGxyT25seSkge1xuICAgIHJldHVybiBsZWZ0T3ZlciArIHJpZ2h0T3ZlcjtcbiAgfVxuICBpZiAodGJPbmx5KSB7XG4gICAgcmV0dXJuIHRvcE92ZXIgKyBib3R0b21PdmVyO1xuICB9XG5cbiAgLy8gdXNlIHN1bSBvZiBzcXVhcmVzIGIvYyB3ZSBjYXJlIGFib3V0IG92ZXJsYXAgYXJlYS5cbiAgcmV0dXJuIE1hdGguc3FydCgodG9wT3ZlciAqIHRvcE92ZXIpICsgKGJvdHRvbU92ZXIgKiBib3R0b21PdmVyKSArIChsZWZ0T3ZlciAqIGxlZnRPdmVyKSArIChyaWdodE92ZXIgKiByaWdodE92ZXIpKTtcbn1cblxuLyoqXG4gKiBVc2VzIG5hdGl2ZSBtZXRob2RzIHRvIHJldHVybiBhbiBvYmplY3Qgb2YgZGltZW5zaW9uIHZhbHVlcy5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtqUXVlcnkgfHwgSFRNTH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3Qgb3IgRE9NIGVsZW1lbnQgZm9yIHdoaWNoIHRvIGdldCB0aGUgZGltZW5zaW9ucy4gQ2FuIGJlIGFueSBlbGVtZW50IG90aGVyIHRoYXQgZG9jdW1lbnQgb3Igd2luZG93LlxuICogQHJldHVybnMge09iamVjdH0gLSBuZXN0ZWQgb2JqZWN0IG9mIGludGVnZXIgcGl4ZWwgdmFsdWVzXG4gKiBUT0RPIC0gaWYgZWxlbWVudCBpcyB3aW5kb3csIHJldHVybiBvbmx5IHRob3NlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gR2V0RGltZW5zaW9ucyhlbGVtKXtcbiAgZWxlbSA9IGVsZW0ubGVuZ3RoID8gZWxlbVswXSA6IGVsZW07XG5cbiAgaWYgKGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkknbSBzb3JyeSwgRGF2ZS4gSSdtIGFmcmFpZCBJIGNhbid0IGRvIHRoYXQuXCIpO1xuICB9XG5cbiAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgcGFyUmVjdCA9IGVsZW0ucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHdpblJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgd2luWSA9IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgIHdpblggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIG9mZnNldDoge1xuICAgICAgdG9wOiByZWN0LnRvcCArIHdpblksXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5YXG4gICAgfSxcbiAgICBwYXJlbnREaW1zOiB7XG4gICAgICB3aWR0aDogcGFyUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcGFyUmVjdC5oZWlnaHQsXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgdG9wOiBwYXJSZWN0LnRvcCArIHdpblksXG4gICAgICAgIGxlZnQ6IHBhclJlY3QubGVmdCArIHdpblhcbiAgICAgIH1cbiAgICB9LFxuICAgIHdpbmRvd0RpbXM6IHtcbiAgICAgIHdpZHRoOiB3aW5SZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5SZWN0LmhlaWdodCxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB0b3A6IHdpblksXG4gICAgICAgIGxlZnQ6IHdpblhcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0b3AgYW5kIGxlZnQgaW50ZWdlciBwaXhlbCB2YWx1ZXMgZm9yIGR5bmFtaWNhbGx5IHJlbmRlcmVkIGVsZW1lbnRzLFxuICogc3VjaCBhczogVG9vbHRpcCwgUmV2ZWFsLCBhbmQgRHJvcGRvd24uIE1haW50YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBhbmQgd2hlcmVcbiAqIHlvdSBkb24ndCBrbm93IGFsaWdubWVudCwgYnV0IGdlbmVyYWxseSBmcm9tXG4gKiA2LjQgZm9yd2FyZCB5b3Ugc2hvdWxkIHVzZSBHZXRFeHBsaWNpdE9mZnNldHMsIGFzIEdldE9mZnNldHMgY29uZmxhdGVzIHBvc2l0aW9uIGFuZCBhbGlnbm1lbnQuXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCBmb3IgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAqIEBwYXJhbSB7alF1ZXJ5fSBhbmNob3IgLSBqUXVlcnkgb2JqZWN0IGZvciB0aGUgZWxlbWVudCdzIGFuY2hvciBwb2ludC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwb3NpdGlvbiAtIGEgc3RyaW5nIHJlbGF0aW5nIHRvIHRoZSBkZXNpcmVkIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50LCByZWxhdGl2ZSB0byBpdCdzIGFuY2hvclxuICogQHBhcmFtIHtOdW1iZXJ9IHZPZmZzZXQgLSBpbnRlZ2VyIHBpeGVsIHZhbHVlIG9mIGRlc2lyZWQgdmVydGljYWwgc2VwYXJhdGlvbiBiZXR3ZWVuIGFuY2hvciBhbmQgZWxlbWVudC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBoT2Zmc2V0IC0gaW50ZWdlciBwaXhlbCB2YWx1ZSBvZiBkZXNpcmVkIGhvcml6b250YWwgc2VwYXJhdGlvbiBiZXR3ZWVuIGFuY2hvciBhbmQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNPdmVyZmxvdyAtIGlmIGEgY29sbGlzaW9uIGV2ZW50IGlzIGRldGVjdGVkLCBzZXRzIHRvIHRydWUgdG8gZGVmYXVsdCB0aGUgZWxlbWVudCB0byBmdWxsIHdpZHRoIC0gYW55IGRlc2lyZWQgb2Zmc2V0LlxuICogVE9ETyBhbHRlci9yZXdyaXRlIHRvIHdvcmsgd2l0aCBgZW1gIHZhbHVlcyBhcyB3ZWxsL2luc3RlYWQgb2YgcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIEdldE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCBwb3NpdGlvbiwgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdykge1xuICBjb25zb2xlLmxvZyhcIk5PVEU6IEdldE9mZnNldHMgaXMgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBHZXRFeHBsaWNpdE9mZnNldHMgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA2LjVcIik7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIFJ0bCgpID9cbiAgICAgICAgR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ3RvcCcsICdsZWZ0Jywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdykgOlxuICAgICAgICBHZXRFeHBsaWNpdE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCAndG9wJywgJ3JpZ2h0Jywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdyk7XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHJldHVybiBSdGwoKSA/XG4gICAgICAgIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICdib3R0b20nLCAnbGVmdCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpIDpcbiAgICAgICAgR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ2JvdHRvbScsICdyaWdodCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIGNhc2UgJ2NlbnRlciB0b3AnOlxuICAgICAgcmV0dXJuIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICd0b3AnLCAnY2VudGVyJywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdyk7XG4gICAgY2FzZSAnY2VudGVyIGJvdHRvbSc6XG4gICAgICByZXR1cm4gR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ2JvdHRvbScsICdjZW50ZXInLCB2T2Zmc2V0LCBoT2Zmc2V0LCBpc092ZXJmbG93KTtcbiAgICBjYXNlICdjZW50ZXIgbGVmdCc6XG4gICAgICByZXR1cm4gR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ2xlZnQnLCAnY2VudGVyJywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdyk7XG4gICAgY2FzZSAnY2VudGVyIHJpZ2h0JzpcbiAgICAgIHJldHVybiBHZXRFeHBsaWNpdE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCAncmlnaHQnLCAnY2VudGVyJywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdyk7XG4gICAgY2FzZSAnbGVmdCBib3R0b20nOlxuICAgICAgcmV0dXJuIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICdib3R0b20nLCAnbGVmdCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIGNhc2UgJ3JpZ2h0IGJvdHRvbSc6XG4gICAgICByZXR1cm4gR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ2JvdHRvbScsICdyaWdodCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5Li4uIHRoaXMgYWxvbmcgd2l0aCB0aGUgcmV2ZWFsIGFuZCByZXZlYWwgZnVsbFxuICAgIC8vIGNsYXNzZXMgYXJlIHRoZSBvbmx5IG9uZXMgdGhhdCBkaWRuJ3QgcmVmZXJlbmNlIGFuY2hvclxuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQubGVmdCArICgkZWxlRGltcy53aW5kb3dEaW1zLndpZHRoIC8gMikpIC0gKCRlbGVEaW1zLndpZHRoIC8gMikgKyBoT2Zmc2V0LFxuICAgICAgICB0b3A6ICgkZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC50b3AgKyAoJGVsZURpbXMud2luZG93RGltcy5oZWlnaHQgLyAyKSkgLSAoJGVsZURpbXMuaGVpZ2h0IC8gMiArIHZPZmZzZXQpXG4gICAgICB9XG4gICAgY2FzZSAncmV2ZWFsJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICgkZWxlRGltcy53aW5kb3dEaW1zLndpZHRoIC0gJGVsZURpbXMud2lkdGgpIC8gMiArIGhPZmZzZXQsXG4gICAgICAgIHRvcDogJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wICsgdk9mZnNldFxuICAgICAgfVxuICAgIGNhc2UgJ3JldmVhbCBmdWxsJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LmxlZnQsXG4gICAgICAgIHRvcDogJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKFJ0bCgpID8gJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgLSAkZWxlRGltcy53aWR0aCArICRhbmNob3JEaW1zLndpZHRoIC0gaE9mZnNldDogJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyBoT2Zmc2V0KSxcbiAgICAgICAgdG9wOiAkYW5jaG9yRGltcy5vZmZzZXQudG9wICsgJGFuY2hvckRpbXMuaGVpZ2h0ICsgdk9mZnNldFxuICAgICAgfVxuXG4gIH1cblxufVxuXG5mdW5jdGlvbiBHZXRFeHBsaWNpdE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCBwb3NpdGlvbiwgYWxpZ25tZW50LCB2T2Zmc2V0LCBoT2Zmc2V0LCBpc092ZXJmbG93KSB7XG4gIHZhciAkZWxlRGltcyA9IEdldERpbWVuc2lvbnMoZWxlbWVudCksXG4gICAgICAkYW5jaG9yRGltcyA9IGFuY2hvciA/IEdldERpbWVuc2lvbnMoYW5jaG9yKSA6IG51bGw7XG5cbiAgICAgIHZhciB0b3BWYWwsIGxlZnRWYWw7XG5cbiAgLy8gc2V0IHBvc2l0aW9uIHJlbGF0ZWQgYXR0cmlidXRlXG5cbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICB0b3BWYWwgPSAkYW5jaG9yRGltcy5vZmZzZXQudG9wIC0gKCRlbGVEaW1zLmhlaWdodCArIHZPZmZzZXQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHRvcFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC50b3AgKyAkYW5jaG9yRGltcy5oZWlnaHQgKyB2T2Zmc2V0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBsZWZ0VmFsID0gJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgLSAoJGVsZURpbXMud2lkdGggKyBoT2Zmc2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIGxlZnRWYWwgPSAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCArICRhbmNob3JEaW1zLndpZHRoICsgaE9mZnNldDtcbiAgICAgIGJyZWFrO1xuICB9XG5cblxuICAvLyBzZXQgYWxpZ25tZW50IHJlbGF0ZWQgYXR0cmlidXRlXG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBsZWZ0VmFsID0gJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyBoT2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgbGVmdFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0IC0gJGVsZURpbXMud2lkdGggKyAkYW5jaG9yRGltcy53aWR0aCAtIGhPZmZzZXQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgbGVmdFZhbCA9IGlzT3ZlcmZsb3cgPyBoT2Zmc2V0IDogKCgkYW5jaG9yRGltcy5vZmZzZXQubGVmdCArICgkYW5jaG9yRGltcy53aWR0aCAvIDIpKSAtICgkZWxlRGltcy53aWR0aCAvIDIpKSArIGhPZmZzZXQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgIHRvcFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC50b3AgLSB2T2Zmc2V0ICsgJGFuY2hvckRpbXMuaGVpZ2h0IC0gJGVsZURpbXMuaGVpZ2h0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgIHRvcFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC50b3AgKyB2T2Zmc2V0XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgdG9wVmFsID0gKCRhbmNob3JEaW1zLm9mZnNldC50b3AgKyB2T2Zmc2V0ICsgKCRhbmNob3JEaW1zLmhlaWdodCAvIDIpKSAtICgkZWxlRGltcy5oZWlnaHQgLyAyKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHt0b3A6IHRvcFZhbCwgbGVmdDogbGVmdFZhbH07XG59XG5cbmV4cG9ydCB7Qm94fTtcbiJdfQ==
