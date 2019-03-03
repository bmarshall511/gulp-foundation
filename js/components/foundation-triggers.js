(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.motion"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.motion", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.util.triggers"] = factory(require("./foundation.core"), require("./foundation.util.motion"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.util.triggers"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 29);
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
      "./js/entries/plugins/foundation.util.triggers.js":
      /*!********************************************************!*\
        !*** ./js/entries/plugins/foundation.util.triggers.js ***!
        \********************************************************/

      /*! exports provided: Foundation, Triggers */

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


        var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! jquery */
        "jquery");
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../foundation.util.triggers */
        "./js/foundation.util.triggers.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Triggers", function () {
          return _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_2__["Triggers"];
        });

        _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_2__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_1___default.a, _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"]);
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
      29:
      /*!**************************************************************!*\
        !*** multi ./js/entries/plugins/foundation.util.triggers.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.util.triggers.js */
        "./js/entries/plugins/foundation.util.triggers.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udXRpbC50cmlnZ2Vycy5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiVHJpZ2dlcnMiLCIkIiwiRm91bmRhdGlvbiIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJwcmVmaXhlcyIsImkiLCJ3aW5kb3ciLCJ0cmlnZ2VycyIsImVsIiwidHlwZSIsIkxpc3RlbmVycyIsIkJhc2ljIiwiR2xvYmFsIiwiSW5pdGlhbGl6ZXJzIiwib3Blbkxpc3RlbmVyIiwiY2xvc2VMaXN0ZW5lciIsImlkIiwidG9nZ2xlTGlzdGVuZXIiLCJjbG9zZWFibGVMaXN0ZW5lciIsImUiLCJhbmltYXRpb24iLCJNb3Rpb24iLCJ0b2dnbGVGb2N1c0xpc3RlbmVyIiwiJGVsZW0iLCJyZXNpemVMaXN0ZW5lciIsIiRub2RlcyIsInNjcm9sbExpc3RlbmVyIiwiY2xvc2VNZUxpc3RlbmVyIiwicGx1Z2luIiwicGx1Z2lucyIsIl90aGlzIiwieWV0aUJveGVzIiwicGx1Z05hbWVzIiwicGx1Z2luTmFtZSIsImNvbnNvbGUiLCJsaXN0ZW5lcnMiLCJhcmdzIiwiQXJyYXkiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJsaXN0ZW5lciIsImRlYm91bmNlIiwiZGVib3VuY2VHbG9iYWxMaXN0ZW5lciIsImxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24iLCIkdGFyZ2V0IiwibXV0YXRpb25SZWNvcmRzTGlzdCIsImVsZW1lbnRPYnNlcnZlciIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsImF0dHJpYnV0ZUZpbHRlciIsIiRkb2N1bWVudCIsIm9uTG9hZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsMEJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSx3QkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLG1EQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtBQUFpRCxVQUFBLEtBQUEsRUFBQTtBQUFqRCxTQUFBO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxRQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUE7QUFBeUMsVUFBQSxVQUFBLEVBQUEsSUFBekM7QUFBeUMsVUFBQSxLQUFBLEVBQUE7QUFBekMsU0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsSUFBQSxRQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEdBQUEsRUFBQTtBQUFnSCxpQkFBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJLENBQUE7QUFDQTs7QUFBQSxlQUFBLEVBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsTUFBQSxHQUFBLE1BQUEsSUFBQSxNQUFBLENBQUEsVUFBQTtBQUNBO0FBQUEsaUJBQUEsVUFBQSxHQUFBO0FBQTJCLGlCQUFBLE1BQUEsQ0FBQSxTQUFBLENB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IjoiY29tcG9uZW50cy9mb3VuZGF0aW9uLXRyaWdnZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiLi9mb3VuZGF0aW9uLmNvcmVcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi51dGlsLnRyaWdnZXJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5tb3Rpb25cIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnNcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm1vdGlvblwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbW90aW9uX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXzsiLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IHsgVHJpZ2dlcnMgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuVHJpZ2dlcnMuaW5pdCgkLCBGb3VuZGF0aW9uKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgVHJpZ2dlcnMgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IE1vdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1vdGlvbic7XG5cbmNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlZml4ZXMgPSBbJ1dlYktpdCcsICdNb3onLCAnTycsICdNcycsICcnXTtcbiAgZm9yICh2YXIgaT0wOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmAgaW4gd2luZG93KSB7XG4gICAgICByZXR1cm4gd2luZG93W2Ake3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSgpKTtcblxuY29uc3QgdHJpZ2dlcnMgPSAoZWwsIHR5cGUpID0+IHtcbiAgZWwuZGF0YSh0eXBlKS5zcGxpdCgnICcpLmZvckVhY2goaWQgPT4ge1xuICAgICQoYCMke2lkfWApWyB0eXBlID09PSAnY2xvc2UnID8gJ3RyaWdnZXInIDogJ3RyaWdnZXJIYW5kbGVyJ10oYCR7dHlwZX0uemYudHJpZ2dlcmAsIFtlbF0pO1xuICB9KTtcbn07XG5cbnZhciBUcmlnZ2VycyA9IHtcbiAgTGlzdGVuZXJzOiB7XG4gICAgQmFzaWM6IHt9LFxuICAgIEdsb2JhbDoge31cbiAgfSxcbiAgSW5pdGlhbGl6ZXJzOiB7fVxufVxuXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMgID0ge1xuICBvcGVuTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRyaWdnZXJzKCQodGhpcyksICdvcGVuJyk7XG4gIH0sXG4gIGNsb3NlTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgnY2xvc2UnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICdjbG9zZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAndG9nZ2xlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykudHJpZ2dlcigndG9nZ2xlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIGNsb3NlYWJsZUxpc3RlbmVyOiBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgYW5pbWF0aW9uID0gJCh0aGlzKS5kYXRhKCdjbG9zYWJsZScpO1xuXG4gICAgaWYoYW5pbWF0aW9uICE9PSAnJyl7XG4gICAgICBNb3Rpb24uYW5pbWF0ZU91dCgkKHRoaXMpLCBhbmltYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICAkKHRoaXMpLmZhZGVPdXQoKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZvY3VzTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlLWZvY3VzJyk7XG4gICAgJChgIyR7aWR9YCkudHJpZ2dlckhhbmRsZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJywgWyQodGhpcyldKTtcbiAgfVxufTtcblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1vcGVuXSB3aWxsIHJldmVhbCBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLW9wZW5dJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2VdIHdpbGwgY2xvc2UgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4vLyBJZiB1c2VkIHdpdGhvdXQgYSB2YWx1ZSBvbiBbZGF0YS1jbG9zZV0sIHRoZSBldmVudCB3aWxsIGJ1YmJsZSwgYWxsb3dpbmcgaXQgdG8gY2xvc2UgYSBwYXJlbnQgY29tcG9uZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlXSB3aWxsIHRvZ2dsZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zYWJsZV0gd2lsbCByZXNwb25kIHRvIGNsb3NlLnpmLnRyaWdnZXIgZXZlbnRzLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xvc2UuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbG9zZS56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlYWJsZV0sIFtkYXRhLWNsb3NhYmxlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlLWZvY3VzXSB3aWxsIHJlc3BvbmQgdG8gY29taW5nIGluIGFuZCBvdXQgb2YgZm9jdXNcblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGUtZm9jdXNdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xufVxuXG5cblxuLy8gTW9yZSBHbG9iYWwvY29tcGxleCBsaXN0ZW5lcnMgYW5kIHRyaWdnZXJzXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsICA9IHtcbiAgcmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHJlc2l6ZSBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwicmVzaXplXCIpO1xuICB9LFxuICBzY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgc2Nyb2xsIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJzY3JvbGxcIik7XG4gIH0sXG4gIGNsb3NlTWVMaXN0ZW5lcjogZnVuY3Rpb24oZSwgcGx1Z2luSWQpe1xuICAgIGxldCBwbHVnaW4gPSBlLm5hbWVzcGFjZS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBwbHVnaW5zID0gJChgW2RhdGEtJHtwbHVnaW59XWApLm5vdChgW2RhdGEteWV0aS1ib3g9XCIke3BsdWdpbklkfVwiXWApO1xuXG4gICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgX3RoaXMgPSAkKHRoaXMpO1xuICAgICAgX3RoaXMudHJpZ2dlckhhbmRsZXIoJ2Nsb3NlLnpmLnRyaWdnZXInLCBbX3RoaXNdKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBHbG9iYWwsIHBhcnNlcyB3aG9sZSBkb2N1bWVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIgPSBmdW5jdGlvbihwbHVnaW5OYW1lKSB7XG4gIHZhciB5ZXRpQm94ZXMgPSAkKCdbZGF0YS15ZXRpLWJveF0nKSxcbiAgICAgIHBsdWdOYW1lcyA9IFsnZHJvcGRvd24nLCAndG9vbHRpcCcsICdyZXZlYWwnXTtcblxuICBpZihwbHVnaW5OYW1lKXtcbiAgICBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzLnB1c2gocGx1Z2luTmFtZSk7XG4gICAgfWVsc2UgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwbHVnaW5OYW1lWzBdID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMgPSBwbHVnTmFtZXMuY29uY2F0KHBsdWdpbk5hbWUpO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5lcnJvcignUGx1Z2luIG5hbWVzIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgfVxuICBpZih5ZXRpQm94ZXMubGVuZ3RoKXtcbiAgICBsZXQgbGlzdGVuZXJzID0gcGx1Z05hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGBjbG9zZW1lLnpmLiR7bmFtZX1gO1xuICAgIH0pLmpvaW4oJyAnKTtcblxuICAgICQod2luZG93KS5vZmYobGlzdGVuZXJzKS5vbihsaXN0ZW5lcnMsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuY2xvc2VNZUxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCB0cmlnZ2VyLCBsaXN0ZW5lcikge1xuICBsZXQgdGltZXIsIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuICAkKHdpbmRvdykub2ZmKHRyaWdnZXIpLm9uKHRyaWdnZXIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGltZXIpIHsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgbGlzdGVuZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgZGVib3VuY2UgfHwgMTApOy8vZGVmYXVsdCB0aW1lIHRvIGVtaXQgc2Nyb2xsIGV2ZW50XG4gIH0pO1xufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1yZXNpemVdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdyZXNpemUuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwucmVzaXplTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtc2Nyb2xsXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAnc2Nyb2xsLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnNjcm9sbExpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyID0gZnVuY3Rpb24oJGVsZW0pIHtcbiAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpeyByZXR1cm4gZmFsc2U7IH1cbiAgbGV0ICRub2RlcyA9ICRlbGVtLmZpbmQoJ1tkYXRhLXJlc2l6ZV0sIFtkYXRhLXNjcm9sbF0sIFtkYXRhLW11dGF0ZV0nKTtcblxuICAvL2VsZW1lbnQgY2FsbGJhY2tcbiAgdmFyIGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25SZWNvcmRzTGlzdCkge1xuICAgIHZhciAkdGFyZ2V0ID0gJChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnRhcmdldCk7XG5cbiAgICAvL3RyaWdnZXIgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50IGRlcGVuZGluZyBvbiB0eXBlXG4gICAgc3dpdGNoIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhdHRyaWJ1dGVzXCI6XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJzY3JvbGxcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInLCBbJHRhcmdldCwgd2luZG93LnBhZ2VZT2Zmc2V0XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInJlc2l6ZVwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0XSk7XG4gICAgICAgICB9XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJjaGlsZExpc3RcIjpcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvL25vdGhpbmdcbiAgICB9XG4gIH07XG5cbiAgaWYgKCRub2Rlcy5sZW5ndGgpIHtcbiAgICAvL2ZvciBlYWNoIGVsZW1lbnQgdGhhdCBuZWVkcyB0byBsaXN0ZW4gZm9yIHJlc2l6aW5nLCBzY3JvbGxpbmcsIG9yIG11dGF0aW9uIGFkZCBhIHNpbmdsZSBvYnNlcnZlclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9ICRub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHZhciBlbGVtZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uKTtcbiAgICAgIGVsZW1lbnRPYnNlcnZlci5vYnNlcnZlKCRub2Rlc1tpXSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFtcImRhdGEtZXZlbnRzXCIsIFwic3R5bGVcIl0gfSk7XG4gICAgfVxuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuXG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIoKTtcbn1cblxuXG5UcmlnZ2Vycy5pbml0ID0gZnVuY3Rpb24gKCQsIEZvdW5kYXRpb24pIHtcbiAgb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgIT09IHRydWUpIHtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMoKTtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgICQudHJpZ2dlcnNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZihGb3VuZGF0aW9uKSB7XG4gICAgRm91bmRhdGlvbi5UcmlnZ2VycyA9IFRyaWdnZXJzO1xuICAgIC8vIExlZ2FjeSBpbmNsdWRlZCB0byBiZSBiYWNrd2FyZHMgY29tcGF0aWJsZSBmb3Igbm93LlxuICAgIEZvdW5kYXRpb24uSUhlYXJZb3UgPSBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzXG4gIH1cbn1cblxuZXhwb3J0IHtUcmlnZ2Vyc307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
