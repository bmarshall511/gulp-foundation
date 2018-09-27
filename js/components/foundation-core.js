(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("jquery"));else if (typeof define === 'function' && define.amd) define(["jquery"], factory);else if (typeof exports === 'object') exports["foundation.core"] = factory(require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.core"] = factory(root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./js/entries/plugins/foundation.core.js":
      /*!***********************************************!*\
        !*** ./js/entries/plugins/foundation.core.js ***!
        \***********************************************/

      /*! exports provided: Foundation, Plugin, rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, onLeaveElement */

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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.core */
        "./js/foundation.core.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Foundation", function () {
          return _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"];
        });
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../foundation.core.plugin */
        "./js/foundation.core.plugin.js");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../foundation.core.utils */
        "./js/foundation.core.utils.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Plugin", function () {
          return _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "rtl", function () {
          return _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["rtl"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "GetYoDigits", function () {
          return _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "RegExpEscape", function () {
          return _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["RegExpEscape"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "transitionend", function () {
          return _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "onLoad", function () {
          return _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["onLoad"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "onLeaveElement", function () {
          return _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["onLeaveElement"];
        }); // --- Foundation Core API ---
        // Initialize Foundation and add some utilities to its public API for backward compatibility.
        // Please note that every utility do not have to be added to the core API.


        _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Every plugin depends on plugin now, we can include that on the core for the
        // script inclusion path.


        _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].Plugin = _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__["Plugin"]; // These are now separated out, but historically were a part of this module,
        // and since this is here for backwards compatibility we include them in
        // this entry.

        _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].rtl = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["rtl"];
        _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].GetYoDigits = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"];
        _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].transitionend = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"];
        _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].RegExpEscape = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["RegExpEscape"];
        _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"].onLoad = _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["onLoad"];
        window.Foundation = _foundation_core__WEBPACK_IMPORTED_MODULE_1__["Foundation"]; // --- Foundation Core exports ---
        // Export "Plugin" and all core utilities, since the `foundation.core` entry plays the role of
        // all core source files.

        /***/
      },

      /***/
      "./js/foundation.core.js":
      /*!*******************************!*\
        !*** ./js/foundation.core.js ***!
        \*******************************/

      /*! exports provided: Foundation */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Foundation", function () {
          return Foundation;
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
        "./js/foundation.core.utils.js");
        /* harmony import */


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.mediaQuery */
        "./js/foundation.util.mediaQuery.js");

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

        var FOUNDATION_VERSION = '6.5.0-rc.3'; // Global Foundation object
        // This is attached to the window, or used as a module for AMD/Browserify

        var Foundation = {
          version: FOUNDATION_VERSION,

          /**
           * Stores initialized plugins.
           */
          _plugins: {},

          /**
           * Stores generated unique ids for plugin instances
           */
          _uuids: [],

          /**
           * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
           * @param {Object} plugin - The constructor of the plugin.
           */
          plugin: function plugin(_plugin, name) {
            // Object key to use when adding to global Foundation object
            // Examples: Foundation.Reveal, Foundation.OffCanvas
            var className = name || functionName(_plugin); // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
            // Examples: data-reveal, data-off-canvas

            var attrName = hyphenate(className); // Add to the Foundation object and the plugins list (for reflowing)

            this._plugins[attrName] = this[className] = _plugin;
          },

          /**
           * @function
           * Populates the _uuids array with pointers to each individual plugin instance.
           * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
           * Also fires the initialization event for each plugin, consolidating repetitive code.
           * @param {Object} plugin - an instance of a plugin, usually `this` in context.
           * @param {String} name - the name of the plugin, passed as a camelCased string.
           * @fires Plugin#init
           */
          registerPlugin: function registerPlugin(plugin, name) {
            var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
            plugin.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

            if (!plugin.$element.attr("data-".concat(pluginName))) {
              plugin.$element.attr("data-".concat(pluginName), plugin.uuid);
            }

            if (!plugin.$element.data('zfPlugin')) {
              plugin.$element.data('zfPlugin', plugin);
            }
            /**
             * Fires when the plugin has initialized.
             * @event Plugin#init
             */


            plugin.$element.trigger("init.zf.".concat(pluginName));

            this._uuids.push(plugin.uuid);

            return;
          },

          /**
           * @function
           * Removes the plugins uuid from the _uuids array.
           * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
           * Also fires the destroyed event for the plugin, consolidating repetitive code.
           * @param {Object} plugin - an instance of a plugin, usually `this` in context.
           * @fires Plugin#destroyed
           */
          unregisterPlugin: function unregisterPlugin(plugin) {
            var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

            this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);

            plugin.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
            /**
             * Fires when the plugin has been destroyed.
             * @event Plugin#destroyed
             */
            .trigger("destroyed.zf.".concat(pluginName));

            for (var prop in plugin) {
              plugin[prop] = null; //clean up script to prep for garbage collection.
            }

            return;
          },

          /**
           * @function
           * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
           * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
           * @default If no argument is passed, reflow all currently active plugins.
           */
          reInit: function reInit(plugins) {
            var isJQ = plugins instanceof jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

            try {
              if (isJQ) {
                plugins.each(function () {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();
                });
              } else {
                var type = _typeof(plugins),
                    _this = this,
                    fns = {
                  'object': function object(plgs) {
                    plgs.forEach(function (p) {
                      p = hyphenate(p);
                      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').foundation('_init');
                    });
                  },
                  'string': function string() {
                    plugins = hyphenate(plugins);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').foundation('_init');
                  },
                  'undefined': function undefined() {
                    this['object'](Object.keys(_this._plugins));
                  }
                };

                fns[type](plugins);
              }
            } catch (err) {
              console.error(err);
            } finally {
              return plugins;
            }
          },

          /**
           * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
           * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
           * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
           */
          reflow: function reflow(elem, plugins) {
            // If plugins is undefined, just grab everything
            if (typeof plugins === 'undefined') {
              plugins = Object.keys(this._plugins);
            } // If plugins is a string, convert it to an array with one item
            else if (typeof plugins === 'string') {
                plugins = [plugins];
              }

            var _this = this; // Iterate through each plugin


            jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(plugins, function (i, name) {
              // Get the current plugin
              var plugin = _this._plugins[name]; // Localize the search to all elements inside elem, as well as elem itself, unless elem === document

              var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']'); // For each plugin found, initialize it

              $elem.each(function () {
                var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    opts = {}; // Don't double-dip on plugins

                if ($el.data('zfPlugin')) {
                  console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
                  return;
                }

                if ($el.attr('data-options')) {
                  var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
                    var opt = e.split(':').map(function (el) {
                      return el.trim();
                    });
                    if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
                  });
                }

                try {
                  $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));
                } catch (er) {
                  console.error(er);
                } finally {
                  return;
                }
              });
            });
          },
          getFnName: functionName,
          addToJquery: function addToJquery($) {
            // TODO: consider not making this a jQuery function
            // TODO: need way to reflow vs. re-initialize

            /**
             * The Foundation jQuery method.
             * @param {String|Array} method - An action to perform on the current jQuery object.
             */
            var foundation = function foundation(method) {
              var type = _typeof(method),
                  $noJS = $('.no-js');

              if ($noJS.length) {
                $noJS.removeClass('no-js');
              }

              if (type === 'undefined') {
                //needs to initialize the Foundation object, or an individual plugin.
                _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__["MediaQuery"]._init();

                Foundation.reflow(this);
              } else if (type === 'string') {
                //an individual method to invoke on a plugin or group of plugins
                var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary

                var plugClass = this.data('zfPlugin'); //determine the class of plugin

                if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {
                  //make sure both the class and method exist
                  if (this.length === 1) {
                    //if there's only one, call it directly.
                    plugClass[method].apply(plugClass, args);
                  } else {
                    this.each(function (i, el) {
                      //otherwise loop through the jQuery collection and invoke the method on each
                      plugClass[method].apply($(el).data('zfPlugin'), args);
                    });
                  }
                } else {
                  //error for no class or no method
                  throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
                }
              } else {
                //error for invalid argument type
                throw new TypeError("We're sorry, ".concat(type, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
              }

              return this;
            };

            $.fn.foundation = foundation;
            return $;
          }
        };
        Foundation.util = {
          /**
           * Function for applying a debounce effect to a function call.
           * @function
           * @param {Function} func - Function to be called at end of timeout.
           * @param {Number} delay - Time in ms to delay the call of `func`.
           * @returns function
           */
          throttle: function throttle(func, delay) {
            var timer = null;
            return function () {
              var context = this,
                  args = arguments;

              if (timer === null) {
                timer = setTimeout(function () {
                  func.apply(context, args);
                  timer = null;
                }, delay);
              }
            };
          }
        };
        window.Foundation = Foundation; // Polyfill for requestAnimationFrame

        (function () {
          if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
            return new Date().getTime();
          };
          var vendors = ['webkit', 'moz'];

          for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
          }

          if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;

            window.requestAnimationFrame = function (callback) {
              var now = Date.now();
              var nextTime = Math.max(lastTime + 16, now);
              return setTimeout(function () {
                callback(lastTime = nextTime);
              }, nextTime - now);
            };

            window.cancelAnimationFrame = clearTimeout;
          }
          /**
           * Polyfill for performance.now, required by rAF
           */


          if (!window.performance || !window.performance.now) {
            window.performance = {
              start: Date.now(),
              now: function now() {
                return Date.now() - this.start;
              }
            };
          }
        })();

        if (!Function.prototype.bind) {
          Function.prototype.bind = function (oThis) {
            if (typeof this !== 'function') {
              // closest thing possible to the ECMAScript 5
              // internal IsCallable function
              throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
            }

            var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function fNOP() {},
                fBound = function fBound() {
              return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
            };

            if (this.prototype) {
              // native functions don't have a prototype
              fNOP.prototype = this.prototype;
            }

            fBound.prototype = new fNOP();
            return fBound;
          };
        } // Polyfill to get the name of a function in IE9


        function functionName(fn) {
          if (typeof Function.prototype.name === 'undefined') {
            var funcNameRegex = /function\s([^(]{1,})\(/;
            var results = funcNameRegex.exec(fn.toString());
            return results && results.length > 1 ? results[1].trim() : "";
          } else if (typeof fn.prototype === 'undefined') {
            return fn.constructor.name;
          } else {
            return fn.prototype.constructor.name;
          }
        }

        function parseValue(str) {
          if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
          return str;
        } // Convert PascalCase to kebab-case
        // Thank you: http://stackoverflow.com/a/8955580


        function hyphenate(str) {
          return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        }
        /***/

      },

      /***/
      "./js/foundation.core.plugin.js":
      /*!**************************************!*\
        !*** ./js/foundation.core.plugin.js ***!
        \**************************************/

      /*! exports provided: Plugin */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Plugin", function () {
          return Plugin;
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
        "./js/foundation.core.utils.js");

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
        } // Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
        // {function} _setup (replaces previous constructor),
        // {function} _destroy (replaces previous destroy)


        var Plugin =
        /*#__PURE__*/
        function () {
          function Plugin(element, options) {
            _classCallCheck(this, Plugin);

            this._setup(element, options);

            var pluginName = getPluginName(this);
            this.uuid = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, pluginName);

            if (!this.$element.attr("data-".concat(pluginName))) {
              this.$element.attr("data-".concat(pluginName), this.uuid);
            }

            if (!this.$element.data('zfPlugin')) {
              this.$element.data('zfPlugin', this);
            }
            /**
             * Fires when the plugin has initialized.
             * @event Plugin#init
             */


            this.$element.trigger("init.zf.".concat(pluginName));
          }

          _createClass(Plugin, [{
            key: "destroy",
            value: function destroy() {
              this._destroy();

              var pluginName = getPluginName(this);
              this.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
              /**
               * Fires when the plugin has been destroyed.
               * @event Plugin#destroyed
               */
              .trigger("destroyed.zf.".concat(pluginName));

              for (var prop in this) {
                this[prop] = null; //clean up script to prep for garbage collection.
              }
            }
          }]);

          return Plugin;
        }(); // Convert PascalCase to kebab-case
        // Thank you: http://stackoverflow.com/a/8955580


        function hyphenate(str) {
          return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        }

        function getPluginName(obj) {
          if (typeof obj.constructor.name !== 'undefined') {
            return hyphenate(obj.constructor.name);
          } else {
            return hyphenate(obj.className);
          }
        }
        /***/

      },

      /***/
      "./js/foundation.core.utils.js":
      /*!*************************************!*\
        !*** ./js/foundation.core.utils.js ***!
        \*************************************/

      /*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, onLeaveElement */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "rtl", function () {
          return rtl;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "GetYoDigits", function () {
          return GetYoDigits;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "RegExpEscape", function () {
          return RegExpEscape;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "transitionend", function () {
          return transitionend;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "onLoad", function () {
          return onLoad;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "onLeaveElement", function () {
          return onLeaveElement;
        });
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! jquery */
        "jquery");
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__); // Core Foundation Utilities, utilized in a number of places.

        /**
         * Returns a boolean for RTL support
         */


        function rtl() {
          return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl';
        }
        /**
         * returns a random base-36 uid with namespacing
         * @function
         * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
         * @param {String} namespace - name of plugin to be incorporated in uid, optional.
         * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
         * @returns {String} - unique id
         */


        function GetYoDigits(length, namespace) {
          length = length || 6;
          return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-".concat(namespace) : '');
        }
        /**
         * Escape a string so it can be used as a regexp pattern
         * @function
         * @see https://stackoverflow.com/a/9310752/4317384
         *
         * @param {String} str - string to escape.
         * @returns {String} - escaped string
         */


        function RegExpEscape(str) {
          return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }

        function transitionend($elem) {
          var transitions = {
            'transition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'otransitionend'
          };
          var elem = document.createElement('div'),
              end;

          for (var t in transitions) {
            if (typeof elem.style[t] !== 'undefined') {
              end = transitions[t];
            }
          }

          if (end) {
            return end;
          } else {
            end = setTimeout(function () {
              $elem.triggerHandler('transitionend', [$elem]);
            }, 1);
            return 'transitionend';
          }
        }
        /**
         * Return an event type to listen for window load.
         *
         * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
         * If `handler` is passed, attach it to the event on `$elem`.
         * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
         * @function
         *
         * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
         * @param {Function} [] handler - function to attach to the event.
         * @returns {String} - event type that should or will be triggered.
         */


        function onLoad($elem, handler) {
          var didLoad = document.readyState === 'complete';
          var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';

          var cb = function cb() {
            return $elem.triggerHandler(eventType);
          };

          if ($elem) {
            if (handler) $elem.one(eventType, handler);
            if (didLoad) setTimeout(cb);else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);
          }

          return eventType;
        }

        function onLeaveElement($elem, handler) {
          var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
              _ref$leaveWindow = _ref.leaveWindow,
              leaveWindow = _ref$leaveWindow === void 0 ? true : _ref$leaveWindow;

          var eventType = 'mouseleave.zf.util.onLeaveElement';

          if ($elem && handler) {
            $elem.on(eventType, function leaveHandler(e) {
              for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                rest[_key - 1] = arguments[_key];
              }

              var _this = this;

              setTimeout(function leaveEventDebouncer() {
                if (e.relatedTarget === null && leaveWindow && document.hasFocus && document.hasFocus()) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterHandler(reeenterE) {
                    if ($elem.has(reeenterE.target).length) {
                      return false;
                    }

                    ;
                    e.relatedTarget = reeenterE.target;
                    handler.call.apply(handler, [_this, e].concat(rest));
                  });
                  return false;
                }

                handler.call.apply(handler, [_this, e].concat(rest));
              });
            });
          }

          return eventType;
        }
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
      0:
      /*!*****************************************************!*\
        !*** multi ./js/entries/plugins/foundation.core.js ***!
        \*****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.core.js */
        "./js/entries/plugins/foundation.core.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uY29yZS5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi5jb3JlLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmNvcmUucGx1Z2luLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmNvcmUudXRpbHMuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5LmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsid2luZG93IiwiRk9VTkRBVElPTl9WRVJTSU9OIiwiRm91bmRhdGlvbiIsInZlcnNpb24iLCJfcGx1Z2lucyIsIl91dWlkcyIsInBsdWdpbiIsImNsYXNzTmFtZSIsIm5hbWUiLCJmdW5jdGlvbk5hbWUiLCJhdHRyTmFtZSIsImh5cGhlbmF0ZSIsInJlZ2lzdGVyUGx1Z2luIiwicGx1Z2luTmFtZSIsInVucmVnaXN0ZXJQbHVnaW4iLCJyZUluaXQiLCJpc0pRIiwicGx1Z2lucyIsIiQiLCJ0eXBlIiwiX3RoaXMiLCJmbnMiLCJwbGdzIiwicCIsIk9iamVjdCIsImNvbnNvbGUiLCJyZWZsb3ciLCIkZWxlbSIsIiRlbCIsIm9wdHMiLCJ0aGluZyIsIm9wdCIsImVsIiwicGFyc2VWYWx1ZSIsImdldEZuTmFtZSIsImFkZFRvSnF1ZXJ5IiwiZm91bmRhdGlvbiIsIiRub0pTIiwiTWVkaWFRdWVyeSIsImFyZ3MiLCJBcnJheSIsInBsdWdDbGFzcyIsInRocm90dGxlIiwidGltZXIiLCJjb250ZXh0Iiwic2V0VGltZW91dCIsImZ1bmMiLCJEYXRlIiwidmVuZG9ycyIsImkiLCJ2cCIsImxhc3RUaW1lIiwibm93IiwibmV4dFRpbWUiLCJNYXRoIiwiY2FsbGJhY2siLCJzdGFydCIsIkZ1bmN0aW9uIiwiYUFyZ3MiLCJmVG9CaW5kIiwiZk5PUCIsImZCb3VuZCIsImZ1bmNOYW1lUmVnZXgiLCJyZXN1bHRzIiwiZm4iLCJpc05hTiIsInN0ciIsInBhcnNlRmxvYXQiLCJQbHVnaW4iLCJnZXRQbHVnaW5OYW1lIiwib2JqIiwibGVuZ3RoIiwibmFtZXNwYWNlIiwidHJhbnNpdGlvbnMiLCJlbGVtIiwiZG9jdW1lbnQiLCJlbmQiLCJkaWRMb2FkIiwiZXZlbnRUeXBlIiwiY2IiLCJsZWF2ZVdpbmRvdyIsInJlc3QiLCJlIiwicmVlZW50ZXJFIiwiaGFuZGxlciIsImRlZmF1bHRRdWVyaWVzIiwibGFuZHNjYXBlIiwicG9ydHJhaXQiLCJyZXRpbmEiLCJzdHlsZU1lZGlhIiwic3R5bGUiLCJzY3JpcHQiLCJpbmZvIiwibWF0Y2hNZWRpdW0iLCJ0ZXh0IiwibWF0Y2hlcyIsIm1lZGlhIiwicXVlcmllcyIsImN1cnJlbnQiLCJfaW5pdCIsInNlbGYiLCIkbWV0YSIsImV4dHJhY3RlZFN0eWxlcyIsIm5hbWVkUXVlcmllcyIsInBhcnNlU3R5bGVUb09iamVjdCIsInZhbHVlIiwiYXRMZWFzdCIsInF1ZXJ5IiwiaXMiLCJzaXplIiwiZ2V0IiwiX2dldEN1cnJlbnRTaXplIiwibWF0Y2hlZCIsIl93YXRjaGVyIiwibmV3U2l6ZSIsImN1cnJlbnRTaXplIiwic3R5bGVPYmplY3QiLCJwYXJ0cyIsInBhcmFtIiwia2V5IiwidmFsIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmV0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFNBQUEsZ0NBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxpQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsUUFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVBQUEsR0FBQTtBQUEyQixpQkFBQSxNQUFBLENBQUEsU0FBQSxDQUFBO0FBQTRCLFNBRHZEO0FBRUE7QUFBQSxpQkFBQSxnQkFBQSxHQUFBO0FBQWlDLGlCQUFBLE1BQUE7QUFBZSxTQUZoRDtBQUdBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBO0FBQ0E7OztBQUFBLGVBQUEsTUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7QUFBc0QsZUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsQ0FBQTtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUEsYUFBQSxtQkFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBO0FBQUE7OztBQUFBLFlBQUEsbUNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsZ0JBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJDQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1DQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSw2Q0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxpQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLDZDQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG9EQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLHdDQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxtREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLG9EQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsS0FBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxtREFBQSxDQUFBLEtBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLGFBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsbURBQUEsQ0FBQSxhQUFBLENBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxjQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLG1EQUFBLENBQUEsY0FBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsZUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxtREFBQSxDQUFBLGVBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFFBQUEsRUFBQSxZQUFBO0FBQUEsaUJB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Q0FBWixHQUFZQSxDQUFaO0FBQ0EsZ0JBQUlDLEdBQUcsR0FBR0YsS0FBSyxDQUFmLENBQWUsQ0FBZjtBQUNBLGdCQUFJRyxHQUFHLEdBQUdILEtBQUssQ0FBZixDQUFlLENBQWY7QUFDQUUsWUFBQUEsR0FBRyxHQUFHRSxrQkFBa0IsQ0FKK0IsR0FJL0IsQ0FBeEJGLENBSnVELENBTXZEO0FBQ0E7O0FBQ0FDLFlBQUFBLEdBQUcsR0FBRyxPQUFBLEdBQUEsS0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFvQ0Msa0JBQWtCLENBQTVERCxHQUE0RCxDQUE1REE7O0FBRUEsZ0JBQUksQ0FBQ0UsR0FBRyxDQUFIQSxjQUFBQSxDQUFMLEdBQUtBLENBQUwsRUFBOEI7QUFDNUJBLGNBQUFBLEdBQUcsQ0FBSEEsR0FBRyxDQUFIQSxHQUFBQSxHQUFBQTtBQURGLGFBQUEsTUFFTyxJQUFJbEYsS0FBSyxDQUFMQSxPQUFBQSxDQUFja0YsR0FBRyxDQUFyQixHQUFxQixDQUFqQmxGLENBQUosRUFBNkI7QUFDbENrRixjQUFBQSxHQUFHLENBQUhBLEdBQUcsQ0FBSEEsQ0FBQUEsSUFBQUEsQ0FBQUEsR0FBQUE7QUFESyxhQUFBLE1BRUE7QUFDTEEsY0FBQUEsR0FBRyxDQUFIQSxHQUFHLENBQUhBLEdBQVcsQ0FBQ0EsR0FBRyxDQUFKLEdBQUksQ0FBSixFQUFYQSxHQUFXLENBQVhBO0FBQ0Q7O0FBQ0QsbUJBQUEsR0FBQTtBQWpCWSxXQUFBLEVBQWROLEVBQWMsQ0FBZEE7QUFvQkEsaUJBQUEsV0FBQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN09ELFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FQVUE7Q0FWQSIsImZpbGUiOiJjb21wb25lbnRzL2ZvdW5kYXRpb24tY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5jb3JlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSA9IHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSB8fCB7fSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIC0tLSBGb3VuZGF0aW9uIENvcmUgQVBJIC0tLVxuLy8gSW5pdGlhbGl6ZSBGb3VuZGF0aW9uIGFuZCBhZGQgc29tZSB1dGlsaXRpZXMgdG8gaXRzIHB1YmxpYyBBUEkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4vLyBQbGVhc2Ugbm90ZSB0aGF0IGV2ZXJ5IHV0aWxpdHkgZG8gbm90IGhhdmUgdG8gYmUgYWRkZWQgdG8gdGhlIGNvcmUgQVBJLlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLmNvcmUnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBydGwsIEdldFlvRGlnaXRzLCB0cmFuc2l0aW9uZW5kLCBSZWdFeHBFc2NhcGUsIG9uTG9hZCB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5cbkZvdW5kYXRpb24uYWRkVG9KcXVlcnkoJCk7XG5cbi8vIEV2ZXJ5IHBsdWdpbiBkZXBlbmRzIG9uIHBsdWdpbiBub3csIHdlIGNhbiBpbmNsdWRlIHRoYXQgb24gdGhlIGNvcmUgZm9yIHRoZVxuLy8gc2NyaXB0IGluY2x1c2lvbiBwYXRoLlxuRm91bmRhdGlvbi5QbHVnaW4gPSBQbHVnaW47XG5cbi8vIFRoZXNlIGFyZSBub3cgc2VwYXJhdGVkIG91dCwgYnV0IGhpc3RvcmljYWxseSB3ZXJlIGEgcGFydCBvZiB0aGlzIG1vZHVsZSxcbi8vIGFuZCBzaW5jZSB0aGlzIGlzIGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdlIGluY2x1ZGUgdGhlbSBpblxuLy8gdGhpcyBlbnRyeS5cbkZvdW5kYXRpb24ucnRsID0gcnRsO1xuRm91bmRhdGlvbi5HZXRZb0RpZ2l0cyA9IEdldFlvRGlnaXRzO1xuRm91bmRhdGlvbi50cmFuc2l0aW9uZW5kID0gdHJhbnNpdGlvbmVuZDtcbkZvdW5kYXRpb24uUmVnRXhwRXNjYXBlID0gUmVnRXhwRXNjYXBlO1xuRm91bmRhdGlvbi5vbkxvYWQgPSBvbkxvYWQ7XG5cbndpbmRvdy5Gb3VuZGF0aW9uID0gRm91bmRhdGlvbjtcblxuLy8gLS0tIEZvdW5kYXRpb24gQ29yZSBleHBvcnRzIC0tLVxuLy8gRXhwb3J0IFwiUGx1Z2luXCIgYW5kIGFsbCBjb3JlIHV0aWxpdGllcywgc2luY2UgdGhlIGBmb3VuZGF0aW9uLmNvcmVgIGVudHJ5IHBsYXlzIHRoZSByb2xlIG9mXG4vLyBhbGwgY29yZSBzb3VyY2UgZmlsZXMuXG5cbmV4cG9ydCB7IEZvdW5kYXRpb24gfTtcbmV4cG9ydCAqIGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuZXhwb3J0ICogZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNZWRpYVF1ZXJ5IH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeSc7XG5cbnZhciBGT1VOREFUSU9OX1ZFUlNJT04gPSAnNi41LjAtcmMuMyc7XG5cbi8vIEdsb2JhbCBGb3VuZGF0aW9uIG9iamVjdFxuLy8gVGhpcyBpcyBhdHRhY2hlZCB0byB0aGUgd2luZG93LCBvciB1c2VkIGFzIGEgbW9kdWxlIGZvciBBTUQvQnJvd3NlcmlmeVxudmFyIEZvdW5kYXRpb24gPSB7XG4gIHZlcnNpb246IEZPVU5EQVRJT05fVkVSU0lPTixcblxuICAvKipcbiAgICogU3RvcmVzIGluaXRpYWxpemVkIHBsdWdpbnMuXG4gICAqL1xuICBfcGx1Z2luczoge30sXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBnZW5lcmF0ZWQgdW5pcXVlIGlkcyBmb3IgcGx1Z2luIGluc3RhbmNlc1xuICAgKi9cbiAgX3V1aWRzOiBbXSxcblxuICAvKipcbiAgICogRGVmaW5lcyBhIEZvdW5kYXRpb24gcGx1Z2luLCBhZGRpbmcgaXQgdG8gdGhlIGBGb3VuZGF0aW9uYCBuYW1lc3BhY2UgYW5kIHRoZSBsaXN0IG9mIHBsdWdpbnMgdG8gaW5pdGlhbGl6ZSB3aGVuIHJlZmxvd2luZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBsdWdpbiAtIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgcGx1Z2luLlxuICAgKi9cbiAgcGx1Z2luOiBmdW5jdGlvbihwbHVnaW4sIG5hbWUpIHtcbiAgICAvLyBPYmplY3Qga2V5IHRvIHVzZSB3aGVuIGFkZGluZyB0byBnbG9iYWwgRm91bmRhdGlvbiBvYmplY3RcbiAgICAvLyBFeGFtcGxlczogRm91bmRhdGlvbi5SZXZlYWwsIEZvdW5kYXRpb24uT2ZmQ2FudmFzXG4gICAgdmFyIGNsYXNzTmFtZSA9IChuYW1lIHx8IGZ1bmN0aW9uTmFtZShwbHVnaW4pKTtcbiAgICAvLyBPYmplY3Qga2V5IHRvIHVzZSB3aGVuIHN0b3JpbmcgdGhlIHBsdWdpbiwgYWxzbyB1c2VkIHRvIGNyZWF0ZSB0aGUgaWRlbnRpZnlpbmcgZGF0YSBhdHRyaWJ1dGUgZm9yIHRoZSBwbHVnaW5cbiAgICAvLyBFeGFtcGxlczogZGF0YS1yZXZlYWwsIGRhdGEtb2ZmLWNhbnZhc1xuICAgIHZhciBhdHRyTmFtZSAgPSBoeXBoZW5hdGUoY2xhc3NOYW1lKTtcblxuICAgIC8vIEFkZCB0byB0aGUgRm91bmRhdGlvbiBvYmplY3QgYW5kIHRoZSBwbHVnaW5zIGxpc3QgKGZvciByZWZsb3dpbmcpXG4gICAgdGhpcy5fcGx1Z2luc1thdHRyTmFtZV0gPSB0aGlzW2NsYXNzTmFtZV0gPSBwbHVnaW47XG4gIH0sXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogUG9wdWxhdGVzIHRoZSBfdXVpZHMgYXJyYXkgd2l0aCBwb2ludGVycyB0byBlYWNoIGluZGl2aWR1YWwgcGx1Z2luIGluc3RhbmNlLlxuICAgKiBBZGRzIHRoZSBgemZQbHVnaW5gIGRhdGEtYXR0cmlidXRlIHRvIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlZCBwbHVnaW5zIHRvIGFsbG93IHVzZSBvZiAkKHNlbGVjdG9yKS5mb3VuZGF0aW9uKG1ldGhvZCkgY2FsbHMuXG4gICAqIEFsc28gZmlyZXMgdGhlIGluaXRpYWxpemF0aW9uIGV2ZW50IGZvciBlYWNoIHBsdWdpbiwgY29uc29saWRhdGluZyByZXBldGl0aXZlIGNvZGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW4gLSBhbiBpbnN0YW5jZSBvZiBhIHBsdWdpbiwgdXN1YWxseSBgdGhpc2AgaW4gY29udGV4dC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgcGx1Z2luLCBwYXNzZWQgYXMgYSBjYW1lbENhc2VkIHN0cmluZy5cbiAgICogQGZpcmVzIFBsdWdpbiNpbml0XG4gICAqL1xuICByZWdpc3RlclBsdWdpbjogZnVuY3Rpb24ocGx1Z2luLCBuYW1lKXtcbiAgICB2YXIgcGx1Z2luTmFtZSA9IG5hbWUgPyBoeXBoZW5hdGUobmFtZSkgOiBmdW5jdGlvbk5hbWUocGx1Z2luLmNvbnN0cnVjdG9yKS50b0xvd2VyQ2FzZSgpO1xuICAgIHBsdWdpbi51dWlkID0gR2V0WW9EaWdpdHMoNiwgcGx1Z2luTmFtZSk7XG5cbiAgICBpZighcGx1Z2luLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApKXsgcGx1Z2luLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWAsIHBsdWdpbi51dWlkKTsgfVxuICAgIGlmKCFwbHVnaW4uJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nKSl7IHBsdWdpbi4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicsIHBsdWdpbik7IH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIGluaXRpYWxpemVkLlxuICAgICAgICAgICAqIEBldmVudCBQbHVnaW4jaW5pdFxuICAgICAgICAgICAqL1xuICAgIHBsdWdpbi4kZWxlbWVudC50cmlnZ2VyKGBpbml0LnpmLiR7cGx1Z2luTmFtZX1gKTtcblxuICAgIHRoaXMuX3V1aWRzLnB1c2gocGx1Z2luLnV1aWQpO1xuXG4gICAgcmV0dXJuO1xuICB9LFxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIFJlbW92ZXMgdGhlIHBsdWdpbnMgdXVpZCBmcm9tIHRoZSBfdXVpZHMgYXJyYXkuXG4gICAqIFJlbW92ZXMgdGhlIHpmUGx1Z2luIGRhdGEgYXR0cmlidXRlLCBhcyB3ZWxsIGFzIHRoZSBkYXRhLXBsdWdpbi1uYW1lIGF0dHJpYnV0ZS5cbiAgICogQWxzbyBmaXJlcyB0aGUgZGVzdHJveWVkIGV2ZW50IGZvciB0aGUgcGx1Z2luLCBjb25zb2xpZGF0aW5nIHJlcGV0aXRpdmUgY29kZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBsdWdpbiAtIGFuIGluc3RhbmNlIG9mIGEgcGx1Z2luLCB1c3VhbGx5IGB0aGlzYCBpbiBjb250ZXh0LlxuICAgKiBAZmlyZXMgUGx1Z2luI2Rlc3Ryb3llZFxuICAgKi9cbiAgdW5yZWdpc3RlclBsdWdpbjogZnVuY3Rpb24ocGx1Z2luKXtcbiAgICB2YXIgcGx1Z2luTmFtZSA9IGh5cGhlbmF0ZShmdW5jdGlvbk5hbWUocGx1Z2luLiRlbGVtZW50LmRhdGEoJ3pmUGx1Z2luJykuY29uc3RydWN0b3IpKTtcblxuICAgIHRoaXMuX3V1aWRzLnNwbGljZSh0aGlzLl91dWlkcy5pbmRleE9mKHBsdWdpbi51dWlkKSwgMSk7XG4gICAgcGx1Z2luLiRlbGVtZW50LnJlbW92ZUF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApLnJlbW92ZURhdGEoJ3pmUGx1Z2luJylcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIGJlZW4gZGVzdHJveWVkLlxuICAgICAgICAgICAqIEBldmVudCBQbHVnaW4jZGVzdHJveWVkXG4gICAgICAgICAgICovXG4gICAgICAgICAgLnRyaWdnZXIoYGRlc3Ryb3llZC56Zi4ke3BsdWdpbk5hbWV9YCk7XG4gICAgZm9yKHZhciBwcm9wIGluIHBsdWdpbil7XG4gICAgICBwbHVnaW5bcHJvcF0gPSBudWxsOy8vY2xlYW4gdXAgc2NyaXB0IHRvIHByZXAgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQ2F1c2VzIG9uZSBvciBtb3JlIGFjdGl2ZSBwbHVnaW5zIHRvIHJlLWluaXRpYWxpemUsIHJlc2V0dGluZyBldmVudCBsaXN0ZW5lcnMsIHJlY2FsY3VsYXRpbmcgcG9zaXRpb25zLCBldGMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwbHVnaW5zIC0gb3B0aW9uYWwgc3RyaW5nIG9mIGFuIGluZGl2aWR1YWwgcGx1Z2luIGtleSwgYXR0YWluZWQgYnkgY2FsbGluZyBgJChlbGVtZW50KS5kYXRhKCdwbHVnaW5OYW1lJylgLCBvciBzdHJpbmcgb2YgYSBwbHVnaW4gY2xhc3MgaS5lLiBgJ2Ryb3Bkb3duJ2BcbiAgICogQGRlZmF1bHQgSWYgbm8gYXJndW1lbnQgaXMgcGFzc2VkLCByZWZsb3cgYWxsIGN1cnJlbnRseSBhY3RpdmUgcGx1Z2lucy5cbiAgICovXG4gICByZUluaXQ6IGZ1bmN0aW9uKHBsdWdpbnMpe1xuICAgICB2YXIgaXNKUSA9IHBsdWdpbnMgaW5zdGFuY2VvZiAkO1xuICAgICB0cnl7XG4gICAgICAgaWYoaXNKUSl7XG4gICAgICAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgJCh0aGlzKS5kYXRhKCd6ZlBsdWdpbicpLl9pbml0KCk7XG4gICAgICAgICB9KTtcbiAgICAgICB9ZWxzZXtcbiAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHBsdWdpbnMsXG4gICAgICAgICBfdGhpcyA9IHRoaXMsXG4gICAgICAgICBmbnMgPSB7XG4gICAgICAgICAgICdvYmplY3QnOiBmdW5jdGlvbihwbGdzKXtcbiAgICAgICAgICAgICBwbGdzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgICAgICAgICAgICBwID0gaHlwaGVuYXRlKHApO1xuICAgICAgICAgICAgICAgJCgnW2RhdGEtJysgcCArJ10nKS5mb3VuZGF0aW9uKCdfaW5pdCcpO1xuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICAnc3RyaW5nJzogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBwbHVnaW5zID0gaHlwaGVuYXRlKHBsdWdpbnMpO1xuICAgICAgICAgICAgICQoJ1tkYXRhLScrIHBsdWdpbnMgKyddJykuZm91bmRhdGlvbignX2luaXQnKTtcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgJ3VuZGVmaW5lZCc6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgdGhpc1snb2JqZWN0J10oT2JqZWN0LmtleXMoX3RoaXMuX3BsdWdpbnMpKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgfTtcbiAgICAgICAgIGZuc1t0eXBlXShwbHVnaW5zKTtcbiAgICAgICB9XG4gICAgIH1jYXRjaChlcnIpe1xuICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgfWZpbmFsbHl7XG4gICAgICAgcmV0dXJuIHBsdWdpbnM7XG4gICAgIH1cbiAgIH0sXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGx1Z2lucyBvbiBhbnkgZWxlbWVudHMgd2l0aGluIGBlbGVtYCAoYW5kIGBlbGVtYCBpdHNlbGYpIHRoYXQgYXJlbid0IGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0galF1ZXJ5IG9iamVjdCBjb250YWluaW5nIHRoZSBlbGVtZW50IHRvIGNoZWNrIGluc2lkZS4gQWxzbyBjaGVja3MgdGhlIGVsZW1lbnQgaXRzZWxmLCB1bmxlc3MgaXQncyB0aGUgYGRvY3VtZW50YCBvYmplY3QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBwbHVnaW5zIC0gQSBsaXN0IG9mIHBsdWdpbnMgdG8gaW5pdGlhbGl6ZS4gTGVhdmUgdGhpcyBvdXQgdG8gaW5pdGlhbGl6ZSBldmVyeXRoaW5nLlxuICAgKi9cbiAgcmVmbG93OiBmdW5jdGlvbihlbGVtLCBwbHVnaW5zKSB7XG5cbiAgICAvLyBJZiBwbHVnaW5zIGlzIHVuZGVmaW5lZCwganVzdCBncmFiIGV2ZXJ5dGhpbmdcbiAgICBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwbHVnaW5zID0gT2JqZWN0LmtleXModGhpcy5fcGx1Z2lucyk7XG4gICAgfVxuICAgIC8vIElmIHBsdWdpbnMgaXMgYSBzdHJpbmcsIGNvbnZlcnQgaXQgdG8gYW4gYXJyYXkgd2l0aCBvbmUgaXRlbVxuICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAnc3RyaW5nJykge1xuICAgICAgcGx1Z2lucyA9IFtwbHVnaW5zXTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggcGx1Z2luXG4gICAgJC5lYWNoKHBsdWdpbnMsIGZ1bmN0aW9uKGksIG5hbWUpIHtcbiAgICAgIC8vIEdldCB0aGUgY3VycmVudCBwbHVnaW5cbiAgICAgIHZhciBwbHVnaW4gPSBfdGhpcy5fcGx1Z2luc1tuYW1lXTtcblxuICAgICAgLy8gTG9jYWxpemUgdGhlIHNlYXJjaCB0byBhbGwgZWxlbWVudHMgaW5zaWRlIGVsZW0sIGFzIHdlbGwgYXMgZWxlbSBpdHNlbGYsIHVubGVzcyBlbGVtID09PSBkb2N1bWVudFxuICAgICAgdmFyICRlbGVtID0gJChlbGVtKS5maW5kKCdbZGF0YS0nK25hbWUrJ10nKS5hZGRCYWNrKCdbZGF0YS0nK25hbWUrJ10nKTtcblxuICAgICAgLy8gRm9yIGVhY2ggcGx1Z2luIGZvdW5kLCBpbml0aWFsaXplIGl0XG4gICAgICAkZWxlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgJGVsID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgLy8gRG9uJ3QgZG91YmxlLWRpcCBvbiBwbHVnaW5zXG4gICAgICAgIGlmICgkZWwuZGF0YSgnemZQbHVnaW4nKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlRyaWVkIHRvIGluaXRpYWxpemUgXCIrbmFtZStcIiBvbiBhbiBlbGVtZW50IHRoYXQgYWxyZWFkeSBoYXMgYSBGb3VuZGF0aW9uIHBsdWdpbi5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoJGVsLmF0dHIoJ2RhdGEtb3B0aW9ucycpKXtcbiAgICAgICAgICB2YXIgdGhpbmcgPSAkZWwuYXR0cignZGF0YS1vcHRpb25zJykuc3BsaXQoJzsnKS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpe1xuICAgICAgICAgICAgdmFyIG9wdCA9IGUuc3BsaXQoJzonKS5tYXAoZnVuY3Rpb24oZWwpeyByZXR1cm4gZWwudHJpbSgpOyB9KTtcbiAgICAgICAgICAgIGlmKG9wdFswXSkgb3B0c1tvcHRbMF1dID0gcGFyc2VWYWx1ZShvcHRbMV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAkZWwuZGF0YSgnemZQbHVnaW4nLCBuZXcgcGx1Z2luKCQodGhpcyksIG9wdHMpKTtcbiAgICAgICAgfWNhdGNoKGVyKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVyKTtcbiAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0Rm5OYW1lOiBmdW5jdGlvbk5hbWUsXG5cbiAgYWRkVG9KcXVlcnk6IGZ1bmN0aW9uKCQpIHtcbiAgICAvLyBUT0RPOiBjb25zaWRlciBub3QgbWFraW5nIHRoaXMgYSBqUXVlcnkgZnVuY3Rpb25cbiAgICAvLyBUT0RPOiBuZWVkIHdheSB0byByZWZsb3cgdnMuIHJlLWluaXRpYWxpemVcbiAgICAvKipcbiAgICAgKiBUaGUgRm91bmRhdGlvbiBqUXVlcnkgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBtZXRob2QgLSBBbiBhY3Rpb24gdG8gcGVyZm9ybSBvbiB0aGUgY3VycmVudCBqUXVlcnkgb2JqZWN0LlxuICAgICAqL1xuICAgIHZhciBmb3VuZGF0aW9uID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICB2YXIgdHlwZSA9IHR5cGVvZiBtZXRob2QsXG4gICAgICAgICAgJG5vSlMgPSAkKCcubm8tanMnKTtcblxuICAgICAgaWYoJG5vSlMubGVuZ3RoKXtcbiAgICAgICAgJG5vSlMucmVtb3ZlQ2xhc3MoJ25vLWpzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGUgPT09ICd1bmRlZmluZWQnKXsvL25lZWRzIHRvIGluaXRpYWxpemUgdGhlIEZvdW5kYXRpb24gb2JqZWN0LCBvciBhbiBpbmRpdmlkdWFsIHBsdWdpbi5cbiAgICAgICAgTWVkaWFRdWVyeS5faW5pdCgpO1xuICAgICAgICBGb3VuZGF0aW9uLnJlZmxvdyh0aGlzKTtcbiAgICAgIH1lbHNlIGlmKHR5cGUgPT09ICdzdHJpbmcnKXsvL2FuIGluZGl2aWR1YWwgbWV0aG9kIHRvIGludm9rZSBvbiBhIHBsdWdpbiBvciBncm91cCBvZiBwbHVnaW5zXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTsvL2NvbGxlY3QgYWxsIHRoZSBhcmd1bWVudHMsIGlmIG5lY2Vzc2FyeVxuICAgICAgICB2YXIgcGx1Z0NsYXNzID0gdGhpcy5kYXRhKCd6ZlBsdWdpbicpOy8vZGV0ZXJtaW5lIHRoZSBjbGFzcyBvZiBwbHVnaW5cblxuICAgICAgICBpZih0eXBlb2YgcGx1Z0NsYXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGx1Z0NsYXNzW21ldGhvZF0gIT09ICd1bmRlZmluZWQnKXsvL21ha2Ugc3VyZSBib3RoIHRoZSBjbGFzcyBhbmQgbWV0aG9kIGV4aXN0XG4gICAgICAgICAgaWYodGhpcy5sZW5ndGggPT09IDEpey8vaWYgdGhlcmUncyBvbmx5IG9uZSwgY2FsbCBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgcGx1Z0NsYXNzW21ldGhvZF0uYXBwbHkocGx1Z0NsYXNzLCBhcmdzKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpLCBlbCl7Ly9vdGhlcndpc2UgbG9vcCB0aHJvdWdoIHRoZSBqUXVlcnkgY29sbGVjdGlvbiBhbmQgaW52b2tlIHRoZSBtZXRob2Qgb24gZWFjaFxuICAgICAgICAgICAgICBwbHVnQ2xhc3NbbWV0aG9kXS5hcHBseSgkKGVsKS5kYXRhKCd6ZlBsdWdpbicpLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7Ly9lcnJvciBmb3Igbm8gY2xhc3Mgb3Igbm8gbWV0aG9kXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiV2UncmUgc29ycnksICdcIiArIG1ldGhvZCArIFwiJyBpcyBub3QgYW4gYXZhaWxhYmxlIG1ldGhvZCBmb3IgXCIgKyAocGx1Z0NsYXNzID8gZnVuY3Rpb25OYW1lKHBsdWdDbGFzcykgOiAndGhpcyBlbGVtZW50JykgKyAnLicpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXsvL2Vycm9yIGZvciBpbnZhbGlkIGFyZ3VtZW50IHR5cGVcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgV2UncmUgc29ycnksICR7dHlwZX0gaXMgbm90IGEgdmFsaWQgcGFyYW1ldGVyLiBZb3UgbXVzdCB1c2UgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtZXRob2QgeW91IHdpc2ggdG8gaW52b2tlLmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAkLmZuLmZvdW5kYXRpb24gPSBmb3VuZGF0aW9uO1xuICAgIHJldHVybiAkO1xuICB9XG59O1xuXG5Gb3VuZGF0aW9uLnV0aWwgPSB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiBmb3IgYXBwbHlpbmcgYSBkZWJvdW5jZSBlZmZlY3QgdG8gYSBmdW5jdGlvbiBjYWxsLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhdCBlbmQgb2YgdGltZW91dC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IC0gVGltZSBpbiBtcyB0byBkZWxheSB0aGUgY2FsbCBvZiBgZnVuY2AuXG4gICAqIEByZXR1cm5zIGZ1bmN0aW9uXG4gICAqL1xuICB0aHJvdHRsZTogZnVuY3Rpb24gKGZ1bmMsIGRlbGF5KSB7XG4gICAgdmFyIHRpbWVyID0gbnVsbDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxud2luZG93LkZvdW5kYXRpb24gPSBGb3VuZGF0aW9uO1xuXG4vLyBQb2x5ZmlsbCBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4oZnVuY3Rpb24oKSB7XG4gIGlmICghRGF0ZS5ub3cgfHwgIXdpbmRvdy5EYXRlLm5vdylcbiAgICB3aW5kb3cuRGF0ZS5ub3cgPSBEYXRlLm5vdyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cbiAgdmFyIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKytpKSB7XG4gICAgICB2YXIgdnAgPSB2ZW5kb3JzW2ldO1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2cCsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAod2luZG93W3ZwKydDYW5jZWxBbmltYXRpb25GcmFtZSddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3dbdnArJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddKTtcbiAgfVxuICBpZiAoL2lQKGFkfGhvbmV8b2QpLipPUyA2Ly50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgIHx8ICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIG5leHRUaW1lID0gTWF0aC5tYXgobGFzdFRpbWUgKyAxNiwgbm93KTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGltZSAtIG5vdyk7XG4gICAgfTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XG4gIH1cbiAgLyoqXG4gICAqIFBvbHlmaWxsIGZvciBwZXJmb3JtYW5jZS5ub3csIHJlcXVpcmVkIGJ5IHJBRlxuICAgKi9cbiAgaWYoIXdpbmRvdy5wZXJmb3JtYW5jZSB8fCAhd2luZG93LnBlcmZvcm1hbmNlLm5vdyl7XG4gICAgd2luZG93LnBlcmZvcm1hbmNlID0ge1xuICAgICAgc3RhcnQ6IERhdGUubm93KCksXG4gICAgICBub3c6IGZ1bmN0aW9uKCl7IHJldHVybiBEYXRlLm5vdygpIC0gdGhpcy5zdGFydDsgfVxuICAgIH07XG4gIH1cbn0pKCk7XG5pZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XG4gIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24ob1RoaXMpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGNsb3Nlc3QgdGhpbmcgcG9zc2libGUgdG8gdGhlIEVDTUFTY3JpcHQgNVxuICAgICAgLy8gaW50ZXJuYWwgSXNDYWxsYWJsZSBmdW5jdGlvblxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgLSB3aGF0IGlzIHRyeWluZyB0byBiZSBib3VuZCBpcyBub3QgY2FsbGFibGUnKTtcbiAgICB9XG5cbiAgICB2YXIgYUFyZ3MgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgIGZUb0JpbmQgPSB0aGlzLFxuICAgICAgICBmTk9QICAgID0gZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgZkJvdW5kICA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBmVG9CaW5kLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBmTk9QXG4gICAgICAgICAgICAgICAgID8gdGhpc1xuICAgICAgICAgICAgICAgICA6IG9UaGlzLFxuICAgICAgICAgICAgICAgICBhQXJncy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvdG90eXBlKSB7XG4gICAgICAvLyBuYXRpdmUgZnVuY3Rpb25zIGRvbid0IGhhdmUgYSBwcm90b3R5cGVcbiAgICAgIGZOT1AucHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG4gICAgfVxuICAgIGZCb3VuZC5wcm90b3R5cGUgPSBuZXcgZk5PUCgpO1xuXG4gICAgcmV0dXJuIGZCb3VuZDtcbiAgfTtcbn1cbi8vIFBvbHlmaWxsIHRvIGdldCB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIGluIElFOVxuZnVuY3Rpb24gZnVuY3Rpb25OYW1lKGZuKSB7XG4gIGlmICh0eXBlb2YgRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb25cXHMoW14oXXsxLH0pXFwoLztcbiAgICB2YXIgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKChmbikudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdLnRyaW0oKSA6IFwiXCI7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGZuLnByb3RvdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZm4uY29uc3RydWN0b3IubmFtZTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZm4ucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlVmFsdWUoc3RyKXtcbiAgaWYgKCd0cnVlJyA9PT0gc3RyKSByZXR1cm4gdHJ1ZTtcbiAgZWxzZSBpZiAoJ2ZhbHNlJyA9PT0gc3RyKSByZXR1cm4gZmFsc2U7XG4gIGVsc2UgaWYgKCFpc05hTihzdHIgKiAxKSkgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbiAgcmV0dXJuIHN0cjtcbn1cbi8vIENvbnZlcnQgUGFzY2FsQ2FzZSB0byBrZWJhYi1jYXNlXG4vLyBUaGFuayB5b3U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzg5NTU1ODBcbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQge0ZvdW5kYXRpb259O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5cbi8vIEFic3RyYWN0IGNsYXNzIGZvciBwcm92aWRpbmcgbGlmZWN5Y2xlIGhvb2tzLiBFeHBlY3QgcGx1Z2lucyB0byBkZWZpbmUgQVQgTEVBU1Rcbi8vIHtmdW5jdGlvbn0gX3NldHVwIChyZXBsYWNlcyBwcmV2aW91cyBjb25zdHJ1Y3RvciksXG4vLyB7ZnVuY3Rpb259IF9kZXN0cm95IChyZXBsYWNlcyBwcmV2aW91cyBkZXN0cm95KVxuY2xhc3MgUGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5fc2V0dXAoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBnZXRQbHVnaW5OYW1lKHRoaXMpO1xuICAgIHRoaXMudXVpZCA9IEdldFlvRGlnaXRzKDYsIHBsdWdpbk5hbWUpO1xuXG4gICAgaWYoIXRoaXMuJGVsZW1lbnQuYXR0cihgZGF0YS0ke3BsdWdpbk5hbWV9YCkpeyB0aGlzLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWAsIHRoaXMudXVpZCk7IH1cbiAgICBpZighdGhpcy4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicpKXsgdGhpcy4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicsIHRoaXMpOyB9XG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBpbml0aWFsaXplZC5cbiAgICAgKiBAZXZlbnQgUGx1Z2luI2luaXRcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoYGluaXQuemYuJHtwbHVnaW5OYW1lfWApO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBnZXRQbHVnaW5OYW1lKHRoaXMpO1xuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cihgZGF0YS0ke3BsdWdpbk5hbWV9YCkucmVtb3ZlRGF0YSgnemZQbHVnaW4nKVxuICAgICAgICAvKipcbiAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBiZWVuIGRlc3Ryb3llZC5cbiAgICAgICAgICogQGV2ZW50IFBsdWdpbiNkZXN0cm95ZWRcbiAgICAgICAgICovXG4gICAgICAgIC50cmlnZ2VyKGBkZXN0cm95ZWQuemYuJHtwbHVnaW5OYW1lfWApO1xuICAgIGZvcih2YXIgcHJvcCBpbiB0aGlzKXtcbiAgICAgIHRoaXNbcHJvcF0gPSBudWxsOy8vY2xlYW4gdXAgc2NyaXB0IHRvIHByZXAgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICB9XG4gIH1cbn1cblxuLy8gQ29udmVydCBQYXNjYWxDYXNlIHRvIGtlYmFiLWNhc2Vcbi8vIFRoYW5rIHlvdTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvODk1NTU4MFxuZnVuY3Rpb24gaHlwaGVuYXRlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBsdWdpbk5hbWUob2JqKSB7XG4gIGlmKHR5cGVvZihvYmouY29uc3RydWN0b3IubmFtZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShvYmouY29uc3RydWN0b3IubmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShvYmouY2xhc3NOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQge1BsdWdpbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy8gQ29yZSBGb3VuZGF0aW9uIFV0aWxpdGllcywgdXRpbGl6ZWQgaW4gYSBudW1iZXIgb2YgcGxhY2VzLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBmb3IgUlRMIHN1cHBvcnRcbiAgICovXG5mdW5jdGlvbiBydGwoKSB7XG4gIHJldHVybiAkKCdodG1sJykuYXR0cignZGlyJykgPT09ICdydGwnO1xufVxuXG4vKipcbiAqIHJldHVybnMgYSByYW5kb20gYmFzZS0zNiB1aWQgd2l0aCBuYW1lc3BhY2luZ1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC0gbnVtYmVyIG9mIHJhbmRvbSBiYXNlLTM2IGRpZ2l0cyBkZXNpcmVkLiBJbmNyZWFzZSBmb3IgbW9yZSByYW5kb20gc3RyaW5ncy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBuYW1lIG9mIHBsdWdpbiB0byBiZSBpbmNvcnBvcmF0ZWQgaW4gdWlkLCBvcHRpb25hbC5cbiAqIEBkZWZhdWx0IHtTdHJpbmd9ICcnIC0gaWYgbm8gcGx1Z2luIG5hbWUgaXMgcHJvdmlkZWQsIG5vdGhpbmcgaXMgYXBwZW5kZWQgdG8gdGhlIHVpZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gdW5pcXVlIGlkXG4gKi9cbmZ1bmN0aW9uIEdldFlvRGlnaXRzKGxlbmd0aCwgbmFtZXNwYWNlKXtcbiAgbGVuZ3RoID0gbGVuZ3RoIHx8IDY7XG4gIHJldHVybiBNYXRoLnJvdW5kKChNYXRoLnBvdygzNiwgbGVuZ3RoICsgMSkgLSBNYXRoLnJhbmRvbSgpICogTWF0aC5wb3coMzYsIGxlbmd0aCkpKS50b1N0cmluZygzNikuc2xpY2UoMSkgKyAobmFtZXNwYWNlID8gYC0ke25hbWVzcGFjZX1gIDogJycpO1xufVxuXG4vKipcbiAqIEVzY2FwZSBhIHN0cmluZyBzbyBpdCBjYW4gYmUgdXNlZCBhcyBhIHJlZ2V4cCBwYXR0ZXJuXG4gKiBAZnVuY3Rpb25cbiAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzkzMTA3NTIvNDMxNzM4NFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSBzdHJpbmcgdG8gZXNjYXBlLlxuICogQHJldHVybnMge1N0cmluZ30gLSBlc2NhcGVkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBSZWdFeHBFc2NhcGUoc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uZW5kKCRlbGVtKXtcbiAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICdNb3pUcmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdPVHJhbnNpdGlvbic6ICdvdHJhbnNpdGlvbmVuZCdcbiAgfTtcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGVuZDtcblxuICBmb3IgKHZhciB0IGluIHRyYW5zaXRpb25zKXtcbiAgICBpZiAodHlwZW9mIGVsZW0uc3R5bGVbdF0gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgIGVuZCA9IHRyYW5zaXRpb25zW3RdO1xuICAgIH1cbiAgfVxuICBpZihlbmQpe1xuICAgIHJldHVybiBlbmQ7XG4gIH1lbHNle1xuICAgIGVuZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICRlbGVtLnRyaWdnZXJIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgWyRlbGVtXSk7XG4gICAgfSwgMSk7XG4gICAgcmV0dXJuICd0cmFuc2l0aW9uZW5kJztcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiBhbiBldmVudCB0eXBlIHRvIGxpc3RlbiBmb3Igd2luZG93IGxvYWQuXG4gKlxuICogSWYgYCRlbGVtYCBpcyBwYXNzZWQsIGFuIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkIG9uIGAkZWxlbWAuIElmIHdpbmRvdyBpcyBhbHJlYWR5IGxvYWRlZCwgdGhlIGV2ZW50IHdpbGwgc3RpbGwgYmUgdHJpZ2dlcmVkLlxuICogSWYgYGhhbmRsZXJgIGlzIHBhc3NlZCwgYXR0YWNoIGl0IHRvIHRoZSBldmVudCBvbiBgJGVsZW1gLlxuICogQ2FsbGluZyBgb25Mb2FkYCB3aXRob3V0IGhhbmRsZXIgYWxsb3dzIHlvdSB0byBnZXQgdGhlIGV2ZW50IHR5cGUgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBiZWZvcmUgYXR0YWNoaW5nIHRoZSBoYW5kbGVyIGJ5IHlvdXJzZWxmLlxuICogQGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtdICRlbGVtIC0galF1ZXJ5IGVsZW1lbnQgb24gd2hpY2ggdGhlIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkIGlmIHBhc3NlZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtdIGhhbmRsZXIgLSBmdW5jdGlvbiB0byBhdHRhY2ggdG8gdGhlIGV2ZW50LlxuICogQHJldHVybnMge1N0cmluZ30gLSBldmVudCB0eXBlIHRoYXQgc2hvdWxkIG9yIHdpbGwgYmUgdHJpZ2dlcmVkLlxuICovXG5mdW5jdGlvbiBvbkxvYWQoJGVsZW0sIGhhbmRsZXIpIHtcbiAgY29uc3QgZGlkTG9hZCA9IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZSc7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IChkaWRMb2FkID8gJ19kaWRMb2FkJyA6ICdsb2FkJykgKyAnLnpmLnV0aWwub25Mb2FkJztcbiAgY29uc3QgY2IgPSAoKSA9PiAkZWxlbS50cmlnZ2VySGFuZGxlcihldmVudFR5cGUpO1xuXG4gIGlmICgkZWxlbSkge1xuICAgIGlmIChoYW5kbGVyKSAkZWxlbS5vbmUoZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChkaWRMb2FkKVxuICAgICAgc2V0VGltZW91dChjYik7XG4gICAgZWxzZVxuICAgICAgJCh3aW5kb3cpLm9uZSgnbG9hZCcsIGNiKTtcbiAgfVxuXG4gIHJldHVybiBldmVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIG9uTGVhdmVFbGVtZW50KCRlbGVtLCBoYW5kbGVyLCB7IGxlYXZlV2luZG93ID0gdHJ1ZSB9ID0ge30pIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gJ21vdXNlbGVhdmUuemYudXRpbC5vbkxlYXZlRWxlbWVudCc7XG5cbiAgaWYgKCRlbGVtICYmIGhhbmRsZXIpIHtcblxuICAgICRlbGVtLm9uKGV2ZW50VHlwZSwgZnVuY3Rpb24gbGVhdmVIYW5kbGVyKGUsIC4uLnJlc3QpIHtcbiAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gbGVhdmVFdmVudERlYm91bmNlcigpIHtcblxuICAgICAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ID09PSBudWxsICYmIGxlYXZlV2luZG93ICYmIGRvY3VtZW50Lmhhc0ZvY3VzICYmIGRvY3VtZW50Lmhhc0ZvY3VzKCkpIHtcblxuICAgICAgICAgICQoZG9jdW1lbnQpLm9uZSgnbW91c2VlbnRlcicsIGZ1bmN0aW9uIHJlZW50ZXJIYW5kbGVyKHJlZWVudGVyRSkge1xuICAgICAgICAgICAgaWYgKCRlbGVtLmhhcyhyZWVlbnRlckUudGFyZ2V0KS5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlIH07XG4gICAgICAgICAgICBlLnJlbGF0ZWRUYXJnZXQgPSByZWVlbnRlckUudGFyZ2V0O1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKF90aGlzLCBlLCAuLi5yZXN0KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZXIuY2FsbChfdGhpcywgZSwgLi4ucmVzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudFR5cGU7XG59XG5cbmV4cG9ydCB7IHJ0bCwgR2V0WW9EaWdpdHMsIFJlZ0V4cEVzY2FwZSwgdHJhbnNpdGlvbmVuZCwgb25Mb2FkLCBvbkxlYXZlRWxlbWVudCB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vLyBEZWZhdWx0IHNldCBvZiBtZWRpYSBxdWVyaWVzXG5jb25zdCBkZWZhdWx0UXVlcmllcyA9IHtcbiAgJ2RlZmF1bHQnIDogJ29ubHkgc2NyZWVuJyxcbiAgbGFuZHNjYXBlIDogJ29ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBwb3J0cmFpdCA6ICdvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICByZXRpbmEgOiAnb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJ1xuICB9O1xuXG5cbi8vIG1hdGNoTWVkaWEoKSBwb2x5ZmlsbCAtIFRlc3QgYSBDU1MgbWVkaWEgdHlwZS9xdWVyeSBpbiBKUy5cbi8vIEF1dGhvcnMgJiBjb3B5cmlnaHQoYykgMjAxMjogU2NvdHQgSmVobCwgUGF1bCBJcmlzaCwgTmljaG9sYXMgWmFrYXMsIERhdmlkIEtuaWdodC4gTUlUIGxpY2Vuc2Vcbi8qIGVzbGludC1kaXNhYmxlICovXG53aW5kb3cubWF0Y2hNZWRpYSB8fCAod2luZG93Lm1hdGNoTWVkaWEgPSAoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IG1hdGNoTWVkaXVtIGFwaSBzdWNoIGFzIElFIDkgYW5kIHdlYmtpdFxuICB2YXIgc3R5bGVNZWRpYSA9ICh3aW5kb3cuc3R5bGVNZWRpYSB8fCB3aW5kb3cubWVkaWEpO1xuXG4gIC8vIEZvciB0aG9zZSB0aGF0IGRvbid0IHN1cHBvcnQgbWF0Y2hNZWRpdW1cbiAgaWYgKCFzdHlsZU1lZGlhKSB7XG4gICAgdmFyIHN0eWxlICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpLFxuICAgIHNjcmlwdCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdLFxuICAgIGluZm8gICAgICAgID0gbnVsbDtcblxuICAgIHN0eWxlLnR5cGUgID0gJ3RleHQvY3NzJztcbiAgICBzdHlsZS5pZCAgICA9ICdtYXRjaG1lZGlhanMtdGVzdCc7XG5cbiAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgc2NyaXB0KTtcbiAgICB9XG5cbiAgICAvLyAnc3R5bGUuY3VycmVudFN0eWxlJyBpcyB1c2VkIGJ5IElFIDw9IDggYW5kICd3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZScgZm9yIGFsbCBvdGhlciBicm93c2Vyc1xuICAgIGluZm8gPSAoJ2dldENvbXB1dGVkU3R5bGUnIGluIHdpbmRvdykgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc3R5bGUsIG51bGwpIHx8IHN0eWxlLmN1cnJlbnRTdHlsZTtcblxuICAgIHN0eWxlTWVkaWEgPSB7XG4gICAgICBtYXRjaE1lZGl1bTogZnVuY3Rpb24gKG1lZGlhKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gJ0BtZWRpYSAnICsgbWVkaWEgKyAneyAjbWF0Y2htZWRpYWpzLXRlc3QgeyB3aWR0aDogMXB4OyB9IH0nO1xuXG4gICAgICAgIC8vICdzdHlsZS5zdHlsZVNoZWV0JyBpcyB1c2VkIGJ5IElFIDw9IDggYW5kICdzdHlsZS50ZXh0Q29udGVudCcgZm9yIGFsbCBvdGhlciBicm93c2Vyc1xuICAgICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGVzdCBpZiBtZWRpYSBxdWVyeSBpcyB0cnVlIG9yIGZhbHNlXG4gICAgICAgIHJldHVybiBpbmZvLndpZHRoID09PSAnMXB4JztcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG1lZGlhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hdGNoZXM6IHN0eWxlTWVkaWEubWF0Y2hNZWRpdW0obWVkaWEgfHwgJ2FsbCcpLFxuICAgICAgbWVkaWE6IG1lZGlhIHx8ICdhbGwnXG4gICAgfTtcbiAgfTtcbn0pKCkpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG52YXIgTWVkaWFRdWVyeSA9IHtcbiAgcXVlcmllczogW10sXG5cbiAgY3VycmVudDogJycsXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBtZWRpYSBxdWVyeSBoZWxwZXIsIGJ5IGV4dHJhY3RpbmcgdGhlIGJyZWFrcG9pbnQgbGlzdCBmcm9tIHRoZSBDU1MgYW5kIGFjdGl2YXRpbmcgdGhlIGJyZWFrcG9pbnQgd2F0Y2hlci5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyICRtZXRhID0gJCgnbWV0YS5mb3VuZGF0aW9uLW1xJyk7XG4gICAgaWYoISRtZXRhLmxlbmd0aCl7XG4gICAgICAkKCc8bWV0YSBjbGFzcz1cImZvdW5kYXRpb24tbXFcIj4nKS5hcHBlbmRUbyhkb2N1bWVudC5oZWFkKTtcbiAgICB9XG5cbiAgICB2YXIgZXh0cmFjdGVkU3R5bGVzID0gJCgnLmZvdW5kYXRpb24tbXEnKS5jc3MoJ2ZvbnQtZmFtaWx5Jyk7XG4gICAgdmFyIG5hbWVkUXVlcmllcztcblxuICAgIG5hbWVkUXVlcmllcyA9IHBhcnNlU3R5bGVUb09iamVjdChleHRyYWN0ZWRTdHlsZXMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG5hbWVkUXVlcmllcykge1xuICAgICAgaWYobmFtZWRRdWVyaWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc2VsZi5xdWVyaWVzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICB2YWx1ZTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke25hbWVkUXVlcmllc1trZXldfSlgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuX2dldEN1cnJlbnRTaXplKCk7XG5cbiAgICB0aGlzLl93YXRjaGVyKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2NyZWVuIGlzIGF0IGxlYXN0IGFzIHdpZGUgYXMgYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBicmVha3BvaW50IG1hdGNoZXMsIGBmYWxzZWAgaWYgaXQncyBzbWFsbGVyLlxuICAgKi9cbiAgYXRMZWFzdChzaXplKSB7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5nZXQoc2l6ZSk7XG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2NyZWVuIG1hdGNoZXMgdG8gYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLCBlaXRoZXIgJ3NtYWxsIG9ubHknIG9yICdzbWFsbCcuIE9taXR0aW5nICdvbmx5JyBmYWxscyBiYWNrIHRvIHVzaW5nIGF0TGVhc3QoKSBtZXRob2QuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGJyZWFrcG9pbnQgbWF0Y2hlcywgYGZhbHNlYCBpZiBpdCBkb2VzIG5vdC5cbiAgICovXG4gIGlzKHNpemUpIHtcbiAgICBzaXplID0gc2l6ZS50cmltKCkuc3BsaXQoJyAnKTtcbiAgICBpZihzaXplLmxlbmd0aCA+IDEgJiYgc2l6ZVsxXSA9PT0gJ29ubHknKSB7XG4gICAgICBpZihzaXplWzBdID09PSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpKSByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuYXRMZWFzdChzaXplWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBtZWRpYSBxdWVyeSBvZiBhIGJyZWFrcG9pbnQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIE5hbWUgb2YgdGhlIGJyZWFrcG9pbnQgdG8gZ2V0LlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IC0gVGhlIG1lZGlhIHF1ZXJ5IG9mIHRoZSBicmVha3BvaW50LCBvciBgbnVsbGAgaWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdC5cbiAgICovXG4gIGdldChzaXplKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnF1ZXJpZXMpIHtcbiAgICAgIGlmKHRoaXMucXVlcmllcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbaV07XG4gICAgICAgIGlmIChzaXplID09PSBxdWVyeS5uYW1lKSByZXR1cm4gcXVlcnkudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBuYW1lIGJ5IHRlc3RpbmcgZXZlcnkgYnJlYWtwb2ludCBhbmQgcmV0dXJuaW5nIHRoZSBsYXN0IG9uZSB0byBtYXRjaCAodGhlIGJpZ2dlc3Qgb25lKS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IE5hbWUgb2YgdGhlIGN1cnJlbnQgYnJlYWtwb2ludC5cbiAgICovXG4gIF9nZXRDdXJyZW50U2l6ZSgpIHtcbiAgICB2YXIgbWF0Y2hlZDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJpZXNbaV07XG5cbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShxdWVyeS52YWx1ZSkubWF0Y2hlcykge1xuICAgICAgICBtYXRjaGVkID0gcXVlcnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBtYXRjaGVkID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG1hdGNoZWQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBY3RpdmF0ZXMgdGhlIGJyZWFrcG9pbnQgd2F0Y2hlciwgd2hpY2ggZmlyZXMgYW4gZXZlbnQgb24gdGhlIHdpbmRvdyB3aGVuZXZlciB0aGUgYnJlYWtwb2ludCBjaGFuZ2VzLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF93YXRjaGVyKCkge1xuICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS56Zi5tZWRpYXF1ZXJ5Jykub24oJ3Jlc2l6ZS56Zi5tZWRpYXF1ZXJ5JywgKCkgPT4ge1xuICAgICAgdmFyIG5ld1NpemUgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpLCBjdXJyZW50U2l6ZSA9IHRoaXMuY3VycmVudDtcblxuICAgICAgaWYgKG5ld1NpemUgIT09IGN1cnJlbnRTaXplKSB7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgY3VycmVudCBtZWRpYSBxdWVyeVxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXdTaXplO1xuXG4gICAgICAgIC8vIEJyb2FkY2FzdCB0aGUgbWVkaWEgcXVlcnkgY2hhbmdlIG9uIHRoZSB3aW5kb3dcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ2NoYW5nZWQuemYubWVkaWFxdWVyeScsIFtuZXdTaXplLCBjdXJyZW50U2l6ZV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cblxuLy8gVGhhbmsgeW91OiBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZ1xuZnVuY3Rpb24gcGFyc2VTdHlsZVRvT2JqZWN0KHN0cikge1xuICB2YXIgc3R5bGVPYmplY3QgPSB7fTtcblxuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gIH1cblxuICBzdHIgPSBzdHIudHJpbSgpLnNsaWNlKDEsIC0xKTsgLy8gYnJvd3NlcnMgcmUtcXVvdGUgc3RyaW5nIHN0eWxlIHZhbHVlc1xuXG4gIGlmICghc3RyKSB7XG4gICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICB9XG5cbiAgc3R5bGVPYmplY3QgPSBzdHIuc3BsaXQoJyYnKS5yZWR1Y2UoZnVuY3Rpb24ocmV0LCBwYXJhbSkge1xuICAgIHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG4gICAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICAgIHZhciB2YWwgPSBwYXJ0c1sxXTtcbiAgICBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcblxuICAgIC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG4gICAgLy8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuICAgIHZhbCA9IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuXG4gICAgaWYgKCFyZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0W2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldFtrZXldKSkge1xuICAgICAgcmV0W2tleV0ucHVzaCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXRba2V5XSA9IFtyZXRba2V5XSwgdmFsXTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSwge30pO1xuXG4gIHJldHVybiBzdHlsZU9iamVjdDtcbn1cblxuZXhwb3J0IHtNZWRpYVF1ZXJ5fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
