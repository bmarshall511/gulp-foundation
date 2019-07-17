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

      /*! exports provided: Foundation, Plugin, rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */

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


        __webpack_require__.d(__webpack_exports__, "ignoreMousedisappear", function () {
          return _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["ignoreMousedisappear"];
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

        var FOUNDATION_VERSION = '6.5.3'; // Global Foundation object
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

      /*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */

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


        __webpack_require__.d(__webpack_exports__, "ignoreMousedisappear", function () {
          return ignoreMousedisappear;
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
        /**
         * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
         *
         * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
         * the event is ignored.
         * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
         *   (like by switching to an other window with [Alt]+[Tab]).
         * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
         *   outside of the element it left.
         *
         * @function
         *
         * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
         * @param {Object} [] options - object of options:
         * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
         * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
         * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
         */


        function ignoreMousedisappear(handler) {
          var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,
              ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,
              _ref$ignoreReappear = _ref.ignoreReappear,
              ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;

          return function leaveEventHandler(eLeave) {
            for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }

            var callback = handler.bind.apply(handler, [this, eLeave].concat(rest)); // The mouse left: call the given callback if the mouse entered elsewhere

            if (eLeave.relatedTarget !== null) {
              return callback();
            } // Otherwise, check if the mouse actually left the window.
            // In firefox if the user switched between windows, the window sill have the focus by the time
            // the event is triggered. We have to debounce the event to test this case.


            setTimeout(function leaveEventDebouncer() {
              if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {
                return callback();
              } // Otherwise, wait for the mouse to reeapear outside of the element,


              if (!ignoreReappear) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterEventHandler(eReenter) {
                  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length) {
                    // Fill where the mouse finally entered.
                    eLeave.relatedTarget = eReenter.target;
                    callback();
                  }
                });
              }
            }, 0);
          };
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
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.util.keyboard"] = factory(require("./foundation.core"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"]);
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

      return __webpack_require__(__webpack_require__.s = 23);
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
      "./js/entries/plugins/foundation.util.keyboard.js":
      /*!********************************************************!*\
        !*** ./js/entries/plugins/foundation.util.keyboard.js ***!
        \********************************************************/

      /*! exports provided: Foundation, Keyboard */

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


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.util.keyboard */
        "./js/foundation.util.keyboard.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Keyboard", function () {
          return _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].Keyboard = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"];
        /***/
      },

      /***/
      "./js/foundation.util.keyboard.js":
      /*!****************************************!*\
        !*** ./js/foundation.util.keyboard.js ***!
        \****************************************/

      /*! exports provided: Keyboard */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Keyboard", function () {
          return Keyboard;
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
        /*******************************************
         *                                         *
         * This util was created by Marius Olbertz *
         * Please thank Marius on GitHub /owlbertz *
         * or the web http://www.mariusolbertz.de/ *
         *                                         *
         ******************************************/


        var keyCodes = {
          9: 'TAB',
          13: 'ENTER',
          27: 'ESCAPE',
          32: 'SPACE',
          35: 'END',
          36: 'HOME',
          37: 'ARROW_LEFT',
          38: 'ARROW_UP',
          39: 'ARROW_RIGHT',
          40: 'ARROW_DOWN'
        };
        var commands = {}; // Functions pulled out to be referenceable from internals

        function findFocusable($element) {
          if (!$element) {
            return false;
          }

          return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
            if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex') < 0) {
              return false;
            } //only have visible elements and those that have a tabindex greater or equal 0


            return true;
          });
        }

        function parseKey(event) {
          var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase(); // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events

          key = key.replace(/\W+/, '');
          if (event.shiftKey) key = "SHIFT_".concat(key);
          if (event.ctrlKey) key = "CTRL_".concat(key);
          if (event.altKey) key = "ALT_".concat(key); // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)

          key = key.replace(/_$/, '');
          return key;
        }

        var Keyboard = {
          keys: getKeyCodes(keyCodes),

          /**
           * Parses the (keyboard) event and returns a String that represents its key
           * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
           * @param {Event} event - the event generated by the event handler
           * @return String key - String that represents the key pressed
           */
          parseKey: parseKey,

          /**
           * Handles the given (keyboard) event
           * @param {Event} event - the event generated by the event handler
           * @param {String} component - Foundation component's name, e.g. Slider or Reveal
           * @param {Objects} functions - collection of functions that are to be executed
           */
          handleKey: function handleKey(event, component, functions) {
            var commandList = commands[component],
                keyCode = this.parseKey(event),
                cmds,
                command,
                fn;
            if (!commandList) return console.warn('Component not defined!');

            if (typeof commandList.ltr === 'undefined') {
              // this component does not differentiate between ltr and rtl
              cmds = commandList; // use plain list
            } else {
              // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
              if (Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["rtl"])()) cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.ltr, commandList.rtl);else cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, commandList.rtl, commandList.ltr);
            }

            command = cmds[keyCode];
            fn = functions[command];

            if (fn && typeof fn === 'function') {
              // execute function  if exists
              var returnValue = fn.apply();

              if (functions.handled || typeof functions.handled === 'function') {
                // execute function when event was handled
                functions.handled(returnValue);
              }
            } else {
              if (functions.unhandled || typeof functions.unhandled === 'function') {
                // execute function when event was not handled
                functions.unhandled();
              }
            }
          },

          /**
           * Finds all focusable elements within the given `$element`
           * @param {jQuery} $element - jQuery object to search within
           * @return {jQuery} $focusable - all focusable elements within `$element`
           */
          findFocusable: findFocusable,

          /**
           * Returns the component name name
           * @param {Object} component - Foundation component, e.g. Slider or Reveal
           * @return String componentName
           */
          register: function register(componentName, cmds) {
            commands[componentName] = cmds;
          },
          // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
          //

          /**
           * Traps the focus in the given element.
           * @param  {jQuery} $element  jQuery object to trap the foucs into.
           */
          trapFocus: function trapFocus($element) {
            var $focusable = findFocusable($element),
                $firstFocusable = $focusable.eq(0),
                $lastFocusable = $focusable.eq(-1);
            $element.on('keydown.zf.trapfocus', function (event) {
              if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
                event.preventDefault();
                $firstFocusable.focus();
              } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
                event.preventDefault();
                $lastFocusable.focus();
              }
            });
          },

          /**
           * Releases the trapped focus from the given element.
           * @param  {jQuery} $element  jQuery object to release the focus for.
           */
          releaseFocus: function releaseFocus($element) {
            $element.off('keydown.zf.trapfocus');
          }
        };
        /*
         * Constants for easier comparing.
         * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
         */

        function getKeyCodes(kcs) {
          var k = {};

          for (var kc in kcs) {
            k[kcs[kc]] = kcs[kc];
          }

          return k;
        }
        /***/

      },

      /***/
      23:
      /*!**************************************************************!*\
        !*** multi ./js/entries/plugins/foundation.util.keyboard.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.util.keyboard.js */
        "./js/entries/plugins/foundation.util.keyboard.js");
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
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.util.nest"] = factory(require("./foundation.core"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.util.nest"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"]);
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

      return __webpack_require__(__webpack_require__.s = 26);
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
      "./js/entries/plugins/foundation.util.nest.js":
      /*!****************************************************!*\
        !*** ./js/entries/plugins/foundation.util.nest.js ***!
        \****************************************************/

      /*! exports provided: Foundation, Nest */

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


        var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.util.nest */
        "./js/foundation.util.nest.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Nest", function () {
          return _foundation_util_nest__WEBPACK_IMPORTED_MODULE_1__["Nest"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].Nest = _foundation_util_nest__WEBPACK_IMPORTED_MODULE_1__["Nest"];
        /***/
      },

      /***/
      "./js/foundation.util.nest.js":
      /*!************************************!*\
        !*** ./js/foundation.util.nest.js ***!
        \************************************/

      /*! exports provided: Nest */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Nest", function () {
          return Nest;
        });
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! jquery */
        "jquery");
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

        var Nest = {
          Feather: function Feather(menu) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
            menu.attr('role', 'menubar');
            var items = menu.find('li').attr({
              'role': 'menuitem'
            }),
                subMenuClass = "is-".concat(type, "-submenu"),
                subItemClass = "".concat(subMenuClass, "-item"),
                hasSubClass = "is-".concat(type, "-submenu-parent"),
                applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.

            items.each(function () {
              var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                  $sub = $item.children('ul');

              if ($sub.length) {
                $item.addClass(hasSubClass);

                if (applyAria) {
                  $item.attr({
                    'aria-haspopup': true,
                    'aria-label': $item.children('a:first').text()
                  }); // Note:  Drilldowns behave differently in how they hide, and so need
                  // additional attributes.  We should look if this possibly over-generalized
                  // utility (Nest) is appropriate when we rework menus in 6.4

                  if (type === 'drilldown') {
                    $item.attr({
                      'aria-expanded': false
                    });
                  }
                }

                $sub.addClass("submenu ".concat(subMenuClass)).attr({
                  'data-submenu': '',
                  'role': 'menubar'
                });

                if (type === 'drilldown') {
                  $sub.attr({
                    'aria-hidden': true
                  });
                }
              }

              if ($item.parent('[data-submenu]').length) {
                $item.addClass("is-submenu-item ".concat(subItemClass));
              }
            });
            return;
          },
          Burn: function Burn(menu, type) {
            var //items = menu.find('li'),
            subMenuClass = "is-".concat(type, "-submenu"),
                subItemClass = "".concat(subMenuClass, "-item"),
                hasSubClass = "is-".concat(type, "-submenu-parent");
            menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass("".concat(subMenuClass, " ").concat(subItemClass, " ").concat(hasSubClass, " is-submenu-item submenu is-active")).removeAttr('data-submenu').css('display', '');
          }
        };
        /***/
      },

      /***/
      26:
      /*!**********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.util.nest.js ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.util.nest.js */
        "./js/entries/plugins/foundation.util.nest.js");
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
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.util.motion"] = factory(require("./foundation.core"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"]);
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

      return __webpack_require__(__webpack_require__.s = 25);
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
      "./js/entries/plugins/foundation.util.motion.js":
      /*!******************************************************!*\
        !*** ./js/entries/plugins/foundation.util.motion.js ***!
        \******************************************************/

      /*! exports provided: Foundation, Motion, Move */

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


        var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.util.motion */
        "./js/foundation.util.motion.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Motion", function () {
          return _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"];
        });
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Move", function () {
          return _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Move"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].Motion = _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Motion"];
        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].Move = _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__["Move"];
        /***/
      },

      /***/
      "./js/foundation.util.motion.js":
      /*!**************************************!*\
        !*** ./js/foundation.util.motion.js ***!
        \**************************************/

      /*! exports provided: Move, Motion */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Move", function () {
          return Move;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Motion", function () {
          return Motion;
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
        /**
         * Motion module.
         * @module foundation.motion
         */


        var initClasses = ['mui-enter', 'mui-leave'];
        var activeClasses = ['mui-enter-active', 'mui-leave-active'];
        var Motion = {
          animateIn: function animateIn(element, animation, cb) {
            animate(true, element, animation, cb);
          },
          animateOut: function animateOut(element, animation, cb) {
            animate(false, element, animation, cb);
          }
        };

        function Move(duration, elem, fn) {
          var anim,
              prog,
              start = null; // console.log('called');

          if (duration === 0) {
            fn.apply(elem);
            elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
            return;
          }

          function move(ts) {
            if (!start) start = ts; // console.log(start, ts);

            prog = ts - start;
            fn.apply(elem);

            if (prog < duration) {
              anim = window.requestAnimationFrame(move, elem);
            } else {
              window.cancelAnimationFrame(anim);
              elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
            }
          }

          anim = window.requestAnimationFrame(move);
        }
        /**
         * Animates an element in or out using a CSS transition class.
         * @function
         * @private
         * @param {Boolean} isIn - Defines if the animation is in or out.
         * @param {Object} element - jQuery or HTML object to animate.
         * @param {String} animation - CSS class to use.
         * @param {Function} cb - Callback to run when animation is finished.
         */


        function animate(isIn, element, animation, cb) {
          element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);
          if (!element.length) return;
          var initClass = isIn ? initClasses[0] : initClasses[1];
          var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation

          reset();
          element.addClass(animation).css('transition', 'none');
          requestAnimationFrame(function () {
            element.addClass(initClass);
            if (isIn) element.show();
          }); // Start the animation

          requestAnimationFrame(function () {
            element[0].offsetWidth;
            element.css('transition', '').addClass(activeClass);
          }); // Clean up the animation when it finishes

          element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(element), finish); // Hides the element (for out animations), resets the element, and runs a callback

          function finish() {
            if (!isIn) element.hide();
            reset();
            if (cb) cb.apply(element);
          } // Resets transitions and removes motion-specific classes


          function reset() {
            element[0].style.transitionDuration = 0;
            element.removeClass("".concat(initClass, " ").concat(activeClass, " ").concat(animation));
          }
        }
        /***/

      },

      /***/
      25:
      /*!************************************************************!*\
        !*** multi ./js/entries/plugins/foundation.util.motion.js ***!
        \************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.util.motion.js */
        "./js/entries/plugins/foundation.util.motion.js");
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
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.smoothScroll"] = factory(require("./foundation.core"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.smoothScroll"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"]);
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

      return __webpack_require__(__webpack_require__.s = 16);
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
      "./js/entries/plugins/foundation.smoothScroll.js":
      /*!*******************************************************!*\
        !*** ./js/entries/plugins/foundation.smoothScroll.js ***!
        \*******************************************************/

      /*! exports provided: Foundation, SmoothScroll */

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


        var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.smoothScroll */
        "./js/foundation.smoothScroll.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "SmoothScroll", function () {
          return _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_1__["SmoothScroll"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_1__["SmoothScroll"], 'SmoothScroll');
        /***/

      },

      /***/
      "./js/foundation.smoothScroll.js":
      /*!***************************************!*\
        !*** ./js/foundation.smoothScroll.js ***!
        \***************************************/

      /*! exports provided: SmoothScroll */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "SmoothScroll", function () {
          return SmoothScroll;
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
         * SmoothScroll module.
         * @module foundation.smooth-scroll
         */


        var SmoothScroll =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(SmoothScroll, _Plugin);

          function SmoothScroll() {
            _classCallCheck(this, SmoothScroll);

            return _possibleConstructorReturn(this, _getPrototypeOf(SmoothScroll).apply(this, arguments));
          }

          _createClass(SmoothScroll, [{
            key: "_setup",

            /**
             * Creates a new instance of SmoothScroll.
             * @class
             * @name SmoothScroll
             * @fires SmoothScroll#init
             * @param {Object} element - jQuery object to add the trigger to.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, SmoothScroll.defaults, this.$element.data(), options);
              this.className = 'SmoothScroll'; // ie9 back compat

              this._init();
            }
            /**
             * Initialize the SmoothScroll plugin
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              var id = this.$element[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'smooth-scroll');
              this.$element.attr({
                id: id
              });

              this._events();
            }
            /**
             * Initializes events for SmoothScroll.
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              this._linkClickListener = this._handleLinkClick.bind(this);
              this.$element.on('click.zf.smoothScroll', this._linkClickListener);
              this.$element.on('click.zf.smoothScroll', 'a[href^="#"]', this._linkClickListener);
            }
            /**
             * Handle the given event to smoothly scroll to the anchor pointed by the event target.
             * @param {*} e - event
             * @function
             * @private
             */

          }, {
            key: "_handleLinkClick",
            value: function _handleLinkClick(e) {
              var _this = this; // Follow the link if it does not point to an anchor.


              if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^="#"]')) return;
              var arrival = e.currentTarget.getAttribute('href');
              this._inTransition = true;
              SmoothScroll.scrollToLoc(arrival, this.options, function () {
                _this._inTransition = false;
              });
              e.preventDefault();
            }
          }, {
            key: "_destroy",

            /**
             * Destroys the SmoothScroll instance.
             * @function
             */
            value: function _destroy() {
              this.$element.off('click.zf.smoothScroll', this._linkClickListener);
              this.$element.off('click.zf.smoothScroll', 'a[href^="#"]', this._linkClickListener);
            }
          }], [{
            key: "scrollToLoc",

            /**
             * Function to scroll to a given location on the page.
             * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
             * @param {Object} options - The options to use.
             * @param {Function} callback - The callback function.
             * @static
             * @function
             */
            value: function scrollToLoc(loc) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
              var callback = arguments.length > 2 ? arguments[2] : undefined;
              var $loc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc); // Do nothing if target does not exist to prevent errors

              if (!$loc.length) return false;
              var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
                scrollTop: scrollPos
              }, options.animationDuration, options.animationEasing, function () {
                if (typeof callback === 'function') {
                  callback();
                }
              });
            }
          }]);

          return SmoothScroll;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
        /**
         * Default settings for plugin.
         */


        SmoothScroll.defaults = {
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
      16:
      /*!*************************************************************!*\
        !*** multi ./js/entries/plugins/foundation.smoothScroll.js ***!
        \*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.smoothScroll.js */
        "./js/entries/plugins/foundation.smoothScroll.js");
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
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.keyboard", "./foundation.util.mediaQuery", "./foundation.util.motion", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.offcanvas"] = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.mediaQuery"), require("./foundation.util.motion"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.offcanvas"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.mediaQuery"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.motion"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_mediaQuery__, __WEBPACK_EXTERNAL_MODULE__foundation_util_motion__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 9);
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
      "./foundation.util.keyboard":
      /*!****************************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.keyboard"],"amd":"./foundation.util.keyboard","commonjs":"./foundation.util.keyboard","commonjs2":"./foundation.util.keyboard"} ***!
        \****************************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__;
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
      "./js/entries/plugins/foundation.offcanvas.js":
      /*!****************************************************!*\
        !*** ./js/entries/plugins/foundation.offcanvas.js ***!
        \****************************************************/

      /*! exports provided: Foundation, OffCanvas */

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


        var _foundation_offcanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.offcanvas */
        "./js/foundation.offcanvas.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "OffCanvas", function () {
          return _foundation_offcanvas__WEBPACK_IMPORTED_MODULE_1__["OffCanvas"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_1__["OffCanvas"], 'OffCanvas');
        /***/

      },

      /***/
      "./js/foundation.offcanvas.js":
      /*!************************************!*\
        !*** ./js/foundation.offcanvas.js ***!
        \************************************/

      /*! exports provided: OffCanvas */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "OffCanvas", function () {
          return OffCanvas;
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


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.util.mediaQuery */
        "./foundation.util.mediaQuery");
        /* harmony import */


        var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
         * OffCanvas module.
         * @module foundation.offcanvas
         * @requires foundation.util.keyboard
         * @requires foundation.util.mediaQuery
         * @requires foundation.util.triggers
         */


        var OffCanvas =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(OffCanvas, _Plugin);

          function OffCanvas() {
            _classCallCheck(this, OffCanvas);

            return _possibleConstructorReturn(this, _getPrototypeOf(OffCanvas).apply(this, arguments));
          }

          _createClass(OffCanvas, [{
            key: "_setup",

            /**
             * Creates a new instance of an off-canvas wrapper.
             * @class
             * @name OffCanvas
             * @fires OffCanvas#init
             * @param {Object} element - jQuery object to initialize.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              var _this2 = this;

              this.className = 'OffCanvas'; // ie9 back compat

              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, OffCanvas.defaults, this.$element.data(), options);
              this.contentClasses = {
                base: [],
                reveal: []
              };
              this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
              this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
              this.position = 'left';
              this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
              this.nested = !!this.options.nested; // Defines the CSS transition/position classes of the off-canvas content container.

              jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {
                _this2.contentClasses.base.push('has-transition-' + val);
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {
                _this2.contentClasses.base.push('has-position-' + val);

                _this2.contentClasses.reveal.push('has-reveal-' + val);
              }); // Triggers init is idempotent, just need to make sure it is initialized

              _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__["Triggers"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

              _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"]._init();

              this._init();

              this._events();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('OffCanvas', {
                'ESCAPE': 'close'
              });
            }
            /**
             * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
             * @function
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              var id = this.$element.attr('id');
              this.$element.attr('aria-hidden', 'true'); // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)

              if (this.options.contentId) {
                this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);
              } else if (this.$element.siblings('[data-off-canvas-content]').length) {
                this.$content = this.$element.siblings('[data-off-canvas-content]').first();
              } else {
                this.$content = this.$element.closest('[data-off-canvas-content]').first();
              }

              if (!this.options.contentId) {
                // Assume that the off-canvas element is nested if it isn't a sibling of the content
                this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
              } else if (this.options.contentId && this.options.nested === null) {
                // Warning if using content ID without setting the nested option
                // Once the element is nested it is required to work properly in this case
                console.warn('Remember to use the nested option if using the content ID option!');
              }

              if (this.nested === true) {
                // Force transition overlap if nested
                this.options.transition = 'overlap'; // Remove appropriate classes if already assigned in markup

                this.$element.removeClass('is-transition-push');
              }

              this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")); // Find triggers that affect this element and add aria-expanded to them

              this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id); // Get position by checking for related CSS class

              this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\-(left|top|right|bottom)/)[1] : this.position; // Add an overlay over the content if necessary

              if (this.options.contentOverlay === true) {
                var overlay = document.createElement('div');
                var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
                overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
                this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);

                if (overlayPosition === 'is-overlay-fixed') {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);
                } else {
                  this.$content.append(this.$overlay);
                }
              } // Get the revealOn option from the class.


              var revealOnRegExp = new RegExp(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["RegExpEscape"])(this.options.revealClass) + '([^\\s]+)', 'g');
              var revealOnClass = revealOnRegExp.exec(this.$element[0].className);

              if (revealOnClass) {
                this.options.isRevealed = true;
                this.options.revealOn = this.options.revealOn || revealOnClass[1];
              } // Ensure the `reveal-on-*` class is set.


              if (this.options.isRevealed === true && this.options.revealOn) {
                this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));

                this._setMQChecker();
              }

              if (this.options.transitionTime) {
                this.$element.css('transition-duration', this.options.transitionTime);
              } // Initally remove all transition/position CSS classes from off-canvas content container.


              this._removeContentClasses();
            }
            /**
             * Adds event handlers to the off-canvas wrapper and the exit overlay.
             * @function
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              this.$element.off('.zf.trigger .zf.offcanvas').on({
                'open.zf.trigger': this.open.bind(this),
                'close.zf.trigger': this.close.bind(this),
                'toggle.zf.trigger': this.toggle.bind(this),
                'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
              });

              if (this.options.closeOnClick === true) {
                var $target = this.options.contentOverlay ? this.$overlay : this.$content;
                $target.on({
                  'click.zf.offcanvas': this.close.bind(this)
                });
              }
            }
            /**
             * Applies event listener for elements that will reveal at certain breakpoints.
             * @private
             */

          }, {
            key: "_setMQChecker",
            value: function _setMQChecker() {
              var _this = this;

              this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
                if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
                  _this.reveal(true);
                }
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
                if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__["MediaQuery"].atLeast(_this.options.revealOn)) {
                  _this.reveal(true);
                } else {
                  _this.reveal(false);
                }
              });
            }
            /**
             * Removes the CSS transition/position classes of the off-canvas content container.
             * Removing the classes is important when another off-canvas gets opened that uses the same content container.
             * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
             * @private
             */

          }, {
            key: "_removeContentClasses",
            value: function _removeContentClasses(hasReveal) {
              if (typeof hasReveal !== 'boolean') {
                this.$content.removeClass(this.contentClasses.base.join(' '));
              } else if (hasReveal === false) {
                this.$content.removeClass("has-reveal-".concat(this.position));
              }
            }
            /**
             * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
             * Beforehand any transition/position class gets removed.
             * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
             * @private
             */

          }, {
            key: "_addContentClasses",
            value: function _addContentClasses(hasReveal) {
              this._removeContentClasses(hasReveal);

              if (typeof hasReveal !== 'boolean') {
                this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position));
              } else if (hasReveal === true) {
                this.$content.addClass("has-reveal-".concat(this.position));
              }
            }
            /**
             * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
             * @param {Boolean} isRevealed - true if element should be revealed.
             * @function
             */

          }, {
            key: "reveal",
            value: function reveal(isRevealed) {
              if (isRevealed) {
                this.close();
                this.isRevealed = true;
                this.$element.attr('aria-hidden', 'false');
                this.$element.off('open.zf.trigger toggle.zf.trigger');
                this.$element.removeClass('is-closed');
              } else {
                this.isRevealed = false;
                this.$element.attr('aria-hidden', 'true');
                this.$element.off('open.zf.trigger toggle.zf.trigger').on({
                  'open.zf.trigger': this.open.bind(this),
                  'toggle.zf.trigger': this.toggle.bind(this)
                });
                this.$element.addClass('is-closed');
              }

              this._addContentClasses(isRevealed);
            }
            /**
             * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
             * @private
             */

          }, {
            key: "_stopScrolling",
            value: function _stopScrolling(event) {
              return false;
            } // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
            // Only really works for y, not sure how to extend to x or if we need to.

          }, {
            key: "_recordScrollable",
            value: function _recordScrollable(event) {
              var elem = this; // called from event handler context with this as elem
              // If the element is scrollable (content overflows), then...

              if (elem.scrollHeight !== elem.clientHeight) {
                // If we're at the top, scroll down one pixel to allow scrolling up
                if (elem.scrollTop === 0) {
                  elem.scrollTop = 1;
                } // If we're at the bottom, scroll up one pixel to allow scrolling down


                if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
                  elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
                }
              }

              elem.allowUp = elem.scrollTop > 0;
              elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
              elem.lastY = event.originalEvent.pageY;
            }
          }, {
            key: "_stopScrollPropagation",
            value: function _stopScrollPropagation(event) {
              var elem = this; // called from event handler context with this as elem

              var up = event.pageY < elem.lastY;
              var down = !up;
              elem.lastY = event.pageY;

              if (up && elem.allowUp || down && elem.allowDown) {
                event.stopPropagation();
              } else {
                event.preventDefault();
              }
            }
            /**
             * Opens the off-canvas menu.
             * @function
             * @param {Object} event - Event object passed from listener.
             * @param {jQuery} trigger - element that triggered the off-canvas to open.
             * @fires Offcanvas#opened
             * @todo also trigger 'open' event?
             */

          }, {
            key: "open",
            value: function open(event, trigger) {
              if (this.$element.hasClass('is-open') || this.isRevealed) {
                return;
              }

              var _this = this;

              if (trigger) {
                this.$lastTrigger = trigger;
              }

              if (this.options.forceTo === 'top') {
                window.scrollTo(0, 0);
              } else if (this.options.forceTo === 'bottom') {
                window.scrollTo(0, document.body.scrollHeight);
              }

              if (this.options.transitionTime && this.options.transition !== 'overlap') {
                this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
              } else {
                this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
              }

              this.$element.addClass('is-open').removeClass('is-closed');
              this.$triggers.attr('aria-expanded', 'true');
              this.$element.attr('aria-hidden', 'false');
              this.$content.addClass('is-open-' + this.position); // If `contentScroll` is set to false, add class and disable scrolling on touch devices.

              if (this.options.contentScroll === false) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
                this.$element.on('touchstart', this._recordScrollable);
                this.$element.on('touchmove', this._stopScrollPropagation);
              }

              if (this.options.contentOverlay === true) {
                this.$overlay.addClass('is-visible');
              }

              if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
                this.$overlay.addClass('is-closable');
              }

              if (this.options.autoFocus === true) {
                this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function () {
                  if (!_this.$element.hasClass('is-open')) {
                    return; // exit if prematurely closed
                  }

                  var canvasFocus = _this.$element.find('[data-autofocus]');

                  if (canvasFocus.length) {
                    canvasFocus.eq(0).focus();
                  } else {
                    _this.$element.find('a, button').eq(0).focus();
                  }
                });
              }

              if (this.options.trapFocus === true) {
                this.$content.attr('tabindex', '-1');

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].trapFocus(this.$element);
              }

              this._addContentClasses();
              /**
               * Fires when the off-canvas menu opens.
               * @event Offcanvas#opened
               */


              this.$element.trigger('opened.zf.offcanvas');
            }
            /**
             * Closes the off-canvas menu.
             * @function
             * @param {Function} cb - optional cb to fire after closure.
             * @fires Offcanvas#closed
             */

          }, {
            key: "close",
            value: function close(cb) {
              if (!this.$element.hasClass('is-open') || this.isRevealed) {
                return;
              }

              var _this = this;

              this.$element.removeClass('is-open');
              this.$element.attr('aria-hidden', 'true')
              /**
               * Fires when the off-canvas menu opens.
               * @event Offcanvas#closed
               */
              .trigger('closed.zf.offcanvas');
              this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom'); // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.

              if (this.options.contentScroll === false) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);
                this.$element.off('touchstart', this._recordScrollable);
                this.$element.off('touchmove', this._stopScrollPropagation);
              }

              if (this.options.contentOverlay === true) {
                this.$overlay.removeClass('is-visible');
              }

              if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
                this.$overlay.removeClass('is-closable');
              }

              this.$triggers.attr('aria-expanded', 'false');

              if (this.options.trapFocus === true) {
                this.$content.removeAttr('tabindex');

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].releaseFocus(this.$element);
              } // Listen to transitionEnd and add class when done.


              this.$element.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["transitionend"])(this.$element), function (e) {
                _this.$element.addClass('is-closed');

                _this._removeContentClasses();
              });
            }
            /**
             * Toggles the off-canvas menu open or closed.
             * @function
             * @param {Object} event - Event object passed from listener.
             * @param {jQuery} trigger - element that triggered the off-canvas to open.
             */

          }, {
            key: "toggle",
            value: function toggle(event, trigger) {
              if (this.$element.hasClass('is-open')) {
                this.close(event, trigger);
              } else {
                this.open(event, trigger);
              }
            }
            /**
             * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
             * @function
             * @private
             */

          }, {
            key: "_handleKeyboard",
            value: function _handleKeyboard(e) {
              var _this3 = this;

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'OffCanvas', {
                close: function close() {
                  _this3.close();

                  _this3.$lastTrigger.focus();

                  return true;
                },
                handled: function handled() {
                  e.stopPropagation();
                  e.preventDefault();
                }
              });
            }
            /**
             * Destroys the offcanvas plugin.
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.close();
              this.$element.off('.zf.trigger .zf.offcanvas');
              this.$overlay.off('.zf.offcanvas');
              if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
            }
          }]);

          return OffCanvas;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

        OffCanvas.defaults = {
          /**
           * Allow the user to click outside of the menu to close it.
           * @option
           * @type {boolean}
           * @default true
           */
          closeOnClick: true,

          /**
           * Adds an overlay on top of `[data-off-canvas-content]`.
           * @option
           * @type {boolean}
           * @default true
           */
          contentOverlay: true,

          /**
           * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
           * @option
           * @type {?string}
           * @default null
           */
          contentId: null,

          /**
           * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
           * @option
           * @type {boolean}
           * @default null
           */
          nested: null,

          /**
           * Enable/disable scrolling of the main content when an off canvas panel is open.
           * @option
           * @type {boolean}
           * @default true
           */
          contentScroll: true,

          /**
           * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
           * @option
           * @type {number}
           * @default null
           */
          transitionTime: null,

          /**
           * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
           * @option
           * @type {string}
           * @default push
           */
          transition: 'push',

          /**
           * Force the page to scroll to top or bottom on open.
           * @option
           * @type {?string}
           * @default null
           */
          forceTo: null,

          /**
           * Allow the offcanvas to remain open for certain breakpoints.
           * @option
           * @type {boolean}
           * @default false
           */
          isRevealed: false,

          /**
           * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
           * @option
           * @type {?string}
           * @default null
           */
          revealOn: null,

          /**
           * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
           * @option
           * @type {boolean}
           * @default true
           */
          autoFocus: true,

          /**
           * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
           * @option
           * @type {string}
           * @default reveal-for-
           * @todo improve the regex testing for this.
           */
          revealClass: 'reveal-for-',

          /**
           * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
           * @option
           * @type {boolean}
           * @default false
           */
          trapFocus: false
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
      9:
      /*!**********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.offcanvas.js ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.offcanvas.js */
        "./js/entries/plugins/foundation.offcanvas.js");
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
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.keyboard", "./foundation.util.nest", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.accordionMenu"] = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.accordionMenu"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.nest"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_nest__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 2);
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
      "./foundation.util.keyboard":
      /*!****************************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.keyboard"],"amd":"./foundation.util.keyboard","commonjs":"./foundation.util.keyboard","commonjs2":"./foundation.util.keyboard"} ***!
        \****************************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__;
        /***/
      },

      /***/
      "./foundation.util.nest":
      /*!************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.nest"],"amd":"./foundation.util.nest","commonjs":"./foundation.util.nest","commonjs2":"./foundation.util.nest"} ***!
        \************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_nest__;
        /***/
      },

      /***/
      "./js/entries/plugins/foundation.accordionMenu.js":
      /*!********************************************************!*\
        !*** ./js/entries/plugins/foundation.accordionMenu.js ***!
        \********************************************************/

      /*! exports provided: Foundation, AccordionMenu */

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


        var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.accordionMenu */
        "./js/foundation.accordionMenu.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "AccordionMenu", function () {
          return _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_1__["AccordionMenu"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_1__["AccordionMenu"], 'AccordionMenu');
        /***/

      },

      /***/
      "./js/foundation.accordionMenu.js":
      /*!****************************************!*\
        !*** ./js/foundation.accordionMenu.js ***!
        \****************************************/

      /*! exports provided: AccordionMenu */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AccordionMenu", function () {
          return AccordionMenu;
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


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.nest */
        "./foundation.util.nest");
        /* harmony import */


        var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__);

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
         * AccordionMenu module.
         * @module foundation.accordionMenu
         * @requires foundation.util.keyboard
         * @requires foundation.util.nest
         */


        var AccordionMenu =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(AccordionMenu, _Plugin);

          function AccordionMenu() {
            _classCallCheck(this, AccordionMenu);

            return _possibleConstructorReturn(this, _getPrototypeOf(AccordionMenu).apply(this, arguments));
          }

          _createClass(AccordionMenu, [{
            key: "_setup",

            /**
             * Creates a new instance of an accordion menu.
             * @class
             * @name AccordionMenu
             * @fires AccordionMenu#init
             * @param {jQuery} element - jQuery object to make into an accordion menu.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, AccordionMenu.defaults, this.$element.data(), options);
              this.className = 'AccordionMenu'; // ie9 back compat

              this._init();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('AccordionMenu', {
                'ENTER': 'toggle',
                'SPACE': 'toggle',
                'ARROW_RIGHT': 'open',
                'ARROW_UP': 'up',
                'ARROW_DOWN': 'down',
                'ARROW_LEFT': 'close',
                'ESCAPE': 'closeAll'
              });
            }
            /**
             * Initializes the accordion menu by hiding all nested menus.
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'accordion');

              var _this = this;

              this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');

              this.$element.attr({
                'role': 'tree',
                'aria-multiselectable': this.options.multiOpen
              });
              this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
              this.$menuLinks.each(function () {
                var linkId = this.id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu-link'),
                    $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    $sub = $elem.children('[data-submenu]'),
                    subId = $sub[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu'),
                    isActive = $sub.hasClass('is-active');

                if (_this.options.parentLink) {
                  var $anchor = $elem.children('a');
                  $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
                }

                if (_this.options.submenuToggle) {
                  $elem.addClass('has-submenu-toggle');
                  $elem.children('a').after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + '</span></button>');
                } else {
                  $elem.attr({
                    'aria-controls': subId,
                    'aria-expanded': isActive,
                    'id': linkId
                  });
                }

                $sub.attr({
                  'aria-labelledby': linkId,
                  'aria-hidden': !isActive,
                  'role': 'group',
                  'id': subId
                });
              });
              this.$element.find('li').attr({
                'role': 'treeitem'
              });
              var initPanes = this.$element.find('.is-active');

              if (initPanes.length) {
                var _this = this;

                initPanes.each(function () {
                  _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
                });
              }

              this._events();
            }
            /**
             * Adds event handlers for items within the menu.
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              var _this = this;

              this.$element.find('li').each(function () {
                var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');

                if ($submenu.length) {
                  if (_this.options.submenuToggle) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
                      _this.toggle($submenu);
                    });
                  } else {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
                      e.preventDefault();

                      _this.toggle($submenu);
                    });
                  }
                }
              }).on('keydown.zf.accordionmenu', function (e) {
                var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    $elements = $element.parent('ul').children('li'),
                    $prevElement,
                    $nextElement,
                    $target = $element.children('[data-submenu]');
                $elements.each(function (i) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
                    $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
                    $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {
                      // has open sub menu
                      $nextElement = $element.find('li:first-child').find('a').first();
                    }

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {
                      // is first element of sub menu
                      $prevElement = $element.parents('li').first().find('a').first();
                    } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
                      // if previous element has open sub menu
                      $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
                    }

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {
                      // is last element of sub menu
                      $nextElement = $element.parents('li').first().next('li').find('a').first();
                    }

                    return;
                  }
                });

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'AccordionMenu', {
                  open: function open() {
                    if ($target.is(':hidden')) {
                      _this.down($target);

                      $target.find('li').first().find('a').first().focus();
                    }
                  },
                  close: function close() {
                    if ($target.length && !$target.is(':hidden')) {
                      // close active sub of this item
                      _this.up($target);
                    } else if ($element.parent('[data-submenu]').length) {
                      // close currently open sub
                      _this.up($element.parent('[data-submenu]'));

                      $element.parents('li').first().find('a').first().focus();
                    }
                  },
                  up: function up() {
                    $prevElement.focus();
                    return true;
                  },
                  down: function down() {
                    $nextElement.focus();
                    return true;
                  },
                  toggle: function toggle() {
                    if (_this.options.submenuToggle) {
                      return false;
                    }

                    if ($element.children('[data-submenu]').length) {
                      _this.toggle($element.children('[data-submenu]'));

                      return true;
                    }
                  },
                  closeAll: function closeAll() {
                    _this.hideAll();
                  },
                  handled: function handled(preventDefault) {
                    if (preventDefault) {
                      e.preventDefault();
                    }

                    e.stopImmediatePropagation();
                  }
                });
              }); //.attr('tabindex', 0);
            }
            /**
             * Closes all panes of the menu.
             * @function
             */

          }, {
            key: "hideAll",
            value: function hideAll() {
              this.up(this.$element.find('[data-submenu]'));
            }
            /**
             * Opens all panes of the menu.
             * @function
             */

          }, {
            key: "showAll",
            value: function showAll() {
              this.down(this.$element.find('[data-submenu]'));
            }
            /**
             * Toggles the open/close state of a submenu.
             * @function
             * @param {jQuery} $target - the submenu to toggle
             */

          }, {
            key: "toggle",
            value: function toggle($target) {
              if (!$target.is(':animated')) {
                if (!$target.is(':hidden')) {
                  this.up($target);
                } else {
                  this.down($target);
                }
              }
            }
            /**
             * Opens the sub-menu defined by `$target`.
             * @param {jQuery} $target - Sub-menu to open.
             * @fires AccordionMenu#down
             */

          }, {
            key: "down",
            value: function down($target) {
              var _this2 = this; // If having multiple submenus active is disabled, close all the submenus
              // that are not parents or children of the targeted submenu.


              if (!this.options.multiOpen) {
                // The "branch" of the targetted submenu, from the component root to
                // the active submenus nested in it.
                var $targetBranch = $target.parentsUntil(this.$element).add($target).add($target.find('.is-active')); // All the active submenus that are not in the branch.

                var $othersActiveSubmenus = this.$element.find('.is-active').not($targetBranch);
                this.up($othersActiveSubmenus);
              }

              $target.addClass('is-active').attr({
                'aria-hidden': false
              });

              if (this.options.submenuToggle) {
                $target.prev('.submenu-toggle').attr({
                  'aria-expanded': true
                });
              } else {
                $target.parent('.is-accordion-submenu-parent').attr({
                  'aria-expanded': true
                });
              }

              $target.slideDown(this.options.slideSpeed, function () {
                /**
                 * Fires when the menu is done opening.
                 * @event AccordionMenu#down
                 */
                _this2.$element.trigger('down.zf.accordionMenu', [$target]);
              });
            }
            /**
             * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
             * @param {jQuery} $target - Sub-menu to close.
             * @fires AccordionMenu#up
             */

          }, {
            key: "up",
            value: function up($target) {
              var _this3 = this;

              var $submenus = $target.find('[data-submenu]');
              var $allmenus = $target.add($submenus);
              $submenus.slideUp(0);
              $allmenus.removeClass('is-active').attr('aria-hidden', true);

              if (this.options.submenuToggle) {
                $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);
              } else {
                $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
              }

              $target.slideUp(this.options.slideSpeed, function () {
                /**
                 * Fires when the menu is done collapsing up.
                 * @event AccordionMenu#up
                 */
                _this3.$element.trigger('up.zf.accordionMenu', [$target]);
              });
            }
            /**
             * Destroys an instance of accordion menu.
             * @fires AccordionMenu#destroyed
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.$element.find('[data-submenu]').slideDown(0).css('display', '');
              this.$element.find('a').off('click.zf.accordionMenu');
              this.$element.find('[data-is-parent-link]').detach();

              if (this.options.submenuToggle) {
                this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
                this.$element.find('.submenu-toggle').remove();
              }

              _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'accordion');
            }
          }]);

          return AccordionMenu;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

        AccordionMenu.defaults = {
          /**
           * Adds the parent link to the submenu.
           * @option
           * @type {boolean}
           * @default false
           */
          parentLink: false,

          /**
           * Amount of time to animate the opening of a submenu in ms.
           * @option
           * @type {number}
           * @default 250
           */
          slideSpeed: 250,

          /**
           * Adds a separate submenu toggle button. This allows the parent item to have a link.
           * @option
           * @example true
           */
          submenuToggle: false,

          /**
           * The text used for the submenu toggle if enabled. This is used for screen readers only.
           * @option
           * @example true
           */
          submenuToggleText: 'Toggle menu',

          /**
           * Allow the menu to have multiple open panes.
           * @option
           * @type {boolean}
           * @default true
           */
          multiOpen: true
        };
        /***/
      },

      /***/
      2:
      /*!**************************************************************!*\
        !*** multi ./js/entries/plugins/foundation.accordionMenu.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.accordionMenu.js */
        "./js/entries/plugins/foundation.accordionMenu.js");
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
"use strict";

(function ($) {
  'use strict';

  $(document).foundation();
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uY29yZS5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi5jb3JlLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmNvcmUucGx1Z2luLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmNvcmUudXRpbHMuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5LmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iLCJ3ZWJwYWNrOi9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOltcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCIsXCJmb3VuZGF0aW9uLmNvcmVcIl0sXCJhbWRcIjpcIi4vZm91bmRhdGlvbi5jb3JlXCIsXCJjb21tb25qc1wiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzMlwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIn0iLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2VudHJpZXMvcGx1Z2lucy9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udXRpbC5uZXN0LmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnV0aWwubmVzdC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udXRpbC5ib3guanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC5ib3guanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2VudHJpZXMvcGx1Z2lucy9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC5tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2VudHJpZXMvcGx1Z2lucy9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC50cmlnZ2Vycy5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uc21vb3RoU2Nyb2xsLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLnNtb290aFNjcm9sbC5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ub2ZmY2FudmFzLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLm9mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24ubWFnZWxsYW4uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24ubWFnZWxsYW4uanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2VudHJpZXMvcGx1Z2lucy9mb3VuZGF0aW9uLmFjY29yZGlvbk1lbnUuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24uYWNjb3JkaW9uTWVudS5qcyIsImZvdW5kYXRpb24uanMiXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIiQiLCJQbHVnaW4iLCJydGwiLCJHZXRZb0RpZ2l0cyIsInRyYW5zaXRpb25lbmQiLCJSZWdFeHBFc2NhcGUiLCJvbkxvYWQiLCJ3aW5kb3ciLCJGT1VOREFUSU9OX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiX3BsdWdpbnMiLCJfdXVpZHMiLCJwbHVnaW4iLCJjbGFzc05hbWUiLCJuYW1lIiwiZnVuY3Rpb25OYW1lIiwiYXR0ck5hbWUiLCJoeXBoZW5hdGUiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbk5hbWUiLCJ1bnJlZ2lzdGVyUGx1Z2luIiwicmVJbml0IiwiaXNKUSIsInBsdWdpbnMiLCJ0eXBlIiwiX3RoaXMiLCJmbnMiLCJwbGdzIiwicCIsIk9iamVjdCIsImNvbnNvbGUiLCJyZWZsb3ciLCIkZWxlbSIsIiRlbCIsIm9wdHMiLCJ0aGluZyIsIm9wdCIsImVsIiwicGFyc2VWYWx1ZSIsImdldEZuTmFtZSIsImFkZFRvSnF1ZXJ5IiwiZm91bmRhdGlvbiIsIiRub0pTIiwiTWVkaWFRdWVyeSIsImFyZ3MiLCJBcnJheSIsInBsdWdDbGFzcyIsInRocm90dGxlIiwidGltZXIiLCJjb250ZXh0Iiwic2V0VGltZW91dCIsImZ1bmMiLCJEYXRlIiwidmVuZG9ycyIsImkiLCJ2cCIsImxhc3RUaW1lIiwibm93IiwibmV4dFRpbWUiLCJNYXRoIiwiY2FsbGJhY2siLCJzdGFydCIsIkZ1bmN0aW9uIiwiYUFyZ3MiLCJmVG9CaW5kIiwiZk5PUCIsImZCb3VuZCIsImZ1bmNOYW1lUmVnZXgiLCJyZXN1bHRzIiwiZm4iLCJpc05hTiIsInN0ciIsInBhcnNlRmxvYXQiLCJnZXRQbHVnaW5OYW1lIiwib2JqIiwibGVuZ3RoIiwibmFtZXNwYWNlIiwidHJhbnNpdGlvbnMiLCJlbGVtIiwiZG9jdW1lbnQiLCJlbmQiLCJkaWRMb2FkIiwiZXZlbnRUeXBlIiwiY2IiLCJpZ25vcmVMZWF2ZVdpbmRvdyIsImlnbm9yZVJlYXBwZWFyIiwicmVzdCIsImhhbmRsZXIiLCJlTGVhdmUiLCJlUmVlbnRlciIsImRlZmF1bHRRdWVyaWVzIiwibGFuZHNjYXBlIiwicG9ydHJhaXQiLCJyZXRpbmEiLCJzdHlsZU1lZGlhIiwic3R5bGUiLCJzY3JpcHQiLCJpbmZvIiwibWF0Y2hNZWRpdW0iLCJ0ZXh0IiwibWF0Y2hlcyIsIm1lZGlhIiwicXVlcmllcyIsImN1cnJlbnQiLCJfaW5pdCIsInNlbGYiLCIkbWV0YSIsImV4dHJhY3RlZFN0eWxlcyIsIm5hbWVkUXVlcmllcyIsInBhcnNlU3R5bGVUb09iamVjdCIsInZhbHVlIiwiYXRMZWFzdCIsInF1ZXJ5IiwiaXMiLCJzaXplIiwiZ2V0IiwiX2dldEN1cnJlbnRTaXplIiwibWF0Y2hlZCIsIl93YXRjaGVyIiwibmV3U2l6ZSIsImN1cnJlbnRTaXplIiwic3R5bGVPYmplY3QiLCJwYXJ0cyIsInBhcmFtIiwia2V5IiwidmFsIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmV0IiwiS2V5Ym9hcmQiLCJrZXlDb2RlcyIsImNvbW1hbmRzIiwiZXZlbnQiLCJTdHJpbmciLCJrZXlzIiwiZ2V0S2V5Q29kZXMiLCJwYXJzZUtleSIsImhhbmRsZUtleSIsImNvbW1hbmRMaXN0Iiwia2V5Q29kZSIsImNtZHMiLCJSdGwiLCJjb21tYW5kIiwiZnVuY3Rpb25zIiwicmV0dXJuVmFsdWUiLCJmaW5kRm9jdXNhYmxlIiwicmVnaXN0ZXIiLCJ0cmFwRm9jdXMiLCIkZm9jdXNhYmxlIiwiJGZpcnN0Rm9jdXNhYmxlIiwiJGxhc3RGb2N1c2FibGUiLCIkZWxlbWVudCIsInJlbGVhc2VGb2N1cyIsImsiLCJrY3MiLCJOZXN0IiwiRmVhdGhlciIsIm1lbnUiLCJpdGVtcyIsInN1Yk1lbnVDbGFzcyIsInN1Ykl0ZW1DbGFzcyIsImhhc1N1YkNsYXNzIiwiYXBwbHlBcmlhIiwiJGl0ZW0iLCIkc3ViIiwiQnVybiIsIkJveCIsIkltTm90VG91Y2hpbmdZb3UiLCJPdmVybGFwQXJlYSIsIkdldERpbWVuc2lvbnMiLCJHZXRPZmZzZXRzIiwiR2V0RXhwbGljaXRPZmZzZXRzIiwiZWxlRGltcyIsInBhckRpbXMiLCJib3R0b21PdmVyIiwidG9wT3ZlciIsImxlZnRPdmVyIiwicmlnaHRPdmVyIiwiaWdub3JlQm90dG9tIiwicmVjdCIsInBhclJlY3QiLCJ3aW5SZWN0Iiwid2luWSIsIndpblgiLCJ3aWR0aCIsImhlaWdodCIsIm9mZnNldCIsInRvcCIsImxlZnQiLCJwYXJlbnREaW1zIiwid2luZG93RGltcyIsIiRlbGVEaW1zIiwidk9mZnNldCIsIiRhbmNob3JEaW1zIiwiYW5jaG9yIiwidG9wVmFsIiwibGVmdFZhbCIsImlzT3ZlcmZsb3ciLCJNb3Rpb24iLCJNb3ZlIiwiaW5pdENsYXNzZXMiLCJhY3RpdmVDbGFzc2VzIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZSIsImFuaW1hdGVPdXQiLCJkdXJhdGlvbiIsInByb2ciLCJ0cyIsImFuaW0iLCJlbGVtZW50IiwiaW5pdENsYXNzIiwiaXNJbiIsImFjdGl2ZUNsYXNzIiwicmVzZXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJUcmlnZ2VycyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJwcmVmaXhlcyIsInRyaWdnZXJzIiwiTGlzdGVuZXJzIiwiQmFzaWMiLCJHbG9iYWwiLCJJbml0aWFsaXplcnMiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZUxpc3RlbmVyIiwiaWQiLCJ0b2dnbGVMaXN0ZW5lciIsImNsb3NlYWJsZUxpc3RlbmVyIiwiZSIsImFuaW1hdGlvbiIsInRvZ2dsZUZvY3VzTGlzdGVuZXIiLCJyZXNpemVMaXN0ZW5lciIsIiRub2RlcyIsInNjcm9sbExpc3RlbmVyIiwiY2xvc2VNZUxpc3RlbmVyIiwieWV0aUJveGVzIiwicGx1Z05hbWVzIiwibGlzdGVuZXJzIiwiY2xlYXJUaW1lb3V0IiwibGlzdGVuZXIiLCJkZWJvdW5jZSIsImRlYm91bmNlR2xvYmFsTGlzdGVuZXIiLCJsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uIiwiJHRhcmdldCIsIm11dGF0aW9uUmVjb3Jkc0xpc3QiLCJlbGVtZW50T2JzZXJ2ZXIiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsInN1YnRyZWUiLCJhdHRyaWJ1dGVGaWx0ZXIiLCIkZG9jdW1lbnQiLCJTbW9vdGhTY3JvbGwiLCJvcHRpb25zIiwiYXJyaXZhbCIsImxvYyIsImRlZmF1bHRzIiwiJGxvYyIsInNjcm9sbFBvcyIsInNjcm9sbFRvcCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uRWFzaW5nIiwidGhyZXNob2xkIiwiT2ZmQ2FudmFzIiwiYmFzZSIsInJldmVhbCIsIm92ZXJsYXkiLCJvdmVybGF5UG9zaXRpb24iLCJyZXZlYWxPblJlZ0V4cCIsInJldmVhbE9uQ2xhc3MiLCJoYXNSZXZlYWwiLCJpc1JldmVhbGVkIiwidXAiLCJkb3duIiwidHJpZ2dlciIsImNhbnZhc0ZvY3VzIiwiY2xvc2UiLCJoYW5kbGVkIiwiY2xvc2VPbkNsaWNrIiwiY29udGVudE92ZXJsYXkiLCJjb250ZW50SWQiLCJuZXN0ZWQiLCJjb250ZW50U2Nyb2xsIiwidHJhbnNpdGlvblRpbWUiLCJ0cmFuc2l0aW9uIiwiZm9yY2VUbyIsInJldmVhbE9uIiwiYXV0b0ZvY3VzIiwicmV2ZWFsQ2xhc3MiLCJNYWdlbGxhbiIsInBhcnNlSW50IiwiYm9keSIsImh0bWwiLCIkdGFyIiwicHQiLCIkYm9keSIsImVhc2luZyIsImxvY2F0aW9uIiwibmV3U2Nyb2xsUG9zIiwiaXNTY3JvbGxpbmdVcCIsImFjdGl2ZUlkeCIsInZpc2libGVMaW5rcyIsIiRvbGRBY3RpdmUiLCJhY3RpdmVIYXNoIiwiaXNOZXdBY3RpdmUiLCJpc05ld0hhc2giLCJ1cmwiLCJoYXNoIiwiZGVlcExpbmtpbmciLCJBY2NvcmRpb25NZW51IiwibXVsdGlPcGVuIiwibGlua0lkIiwic3ViSWQiLCJpc0FjdGl2ZSIsIiRhbmNob3IiLCJpbml0UGFuZXMiLCIkc3VibWVudSIsIiRlbGVtZW50cyIsIiRwcmV2RWxlbWVudCIsIiRuZXh0RWxlbWVudCIsIm9wZW4iLCJ0b2dnbGUiLCJjbG9zZUFsbCIsIiR0YXJnZXRCcmFuY2giLCIkb3RoZXJzQWN0aXZlU3VibWVudXMiLCIkc3VibWVudXMiLCIkYWxsbWVudXMiLCJwYXJlbnRMaW5rIiwic2xpZGVTcGVlZCIsInN1Ym1lbnVUb2dnbGUiLCJzdWJtZW51VG9nZ2xlVGV4dCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsaUJBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUF5QyxVQUFBLFVBQUEsRUFBQSxJQUF6QztBQUF5QyxVQUFBLEtBQUEsRUFBQTtBQUF6QyxTQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQWdILGlCQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckksQ0FBQTtBQUNBOztBQUFBLGVBQUEsRUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxNQUFBLEdBQUEsTUFBQSxJQUFBLE1BQUEsQ0FBQSxVQUFBO0FBQ0E7QUFBQSxpQkFBQSxVQUFBLEdBQUE7QUFBMkIsaUJBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQTtBQUE0QixTQUR2RDtBQUVBO0FBQUEsaUJBQUEsZ0JBQUEsR0FBQTtBQUFpQyxpQkFBQSxNQUFBO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQTtBQUNBOzs7QUFBQSxlQUFBLE1BQUE7QUFDQTtBQUFBLE9BTkE7OztBQVFBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBO0FBQXNELGVBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLENBQUE7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOztBQUFBLGFBQUEsbUJBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsNkNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsaUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSxvREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSx3Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsbURBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsdUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsUUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxvREFBQSxDQUFBLFFBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLEtBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsbURBQUEsQ0FBQSxLQUFBLENBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxhQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLG1EQUFBLENBQUEsYUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsY0FBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxtREFBQSxDQUFBLGNBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLGVBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsbURBQUEsQ0FBQSxlQUFBLENBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLG1EQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsc0JBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsbURBQUEsQ0FBQSxzQkFBQSxDQUFBO0FBQUEsU0FBQSxFLENBQUE7QUFDQTtBQUNBOzs7QUFNQUEsUUFBQUEsNkNBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLFdBQUFBLENBQXVCQywyQ0FBQUEsQ0FBdkJELENBQUFBLEUsQ0FF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LENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLDBCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUF5QyxVQUFBLFVBQUEsRUFBQSxJQUF6QztBQUF5QyxVQUFBLEtBQUEsRUFBQTtBQUF6QyxTQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQWdILGlCQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckksQ0FBQTtBQUNBOztBQUFBLGVBQUEsRUFBQTtBQUNBO0FBQUEsT0FUQTs7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UUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFB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QUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLHFCQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxxQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1B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QUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJB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LElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSx3QkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHdCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUF5QyxVQUFBLFVBQUEsRUFBQSxJQUF6QztBQUF5QyxVQUFBLEtBQUEsRUFBQTtBQUF6QyxTQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQWdILGlCQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckksQ0FBQTtBQUNBOztBQUFBLGVBQUEsRUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtB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QSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBUFVBO0NBVkE7QUFBQSxDQUFBLFNBQUEsZ0NBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSwwQkFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLDBCQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSwwQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsUUFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLDRDQUFBLEVBQUEsbURBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7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QUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHlCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZ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QUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw4QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSw0QkFBQSxFQUFBLDhCQUFBLEVBQUEsMEJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxzQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsOEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHNCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxxREFBQSxFQUFBLHVEQUFBLEVBQUEsbURBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENB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O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxX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Q0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVBQUEsR0FBQTtBQUEyQixpQkFBQSxNQUFBLENBQUEsU0FBQSxDQUFBO0FBQTRCLFNBRHZEO0FBRUE7QUFBQSxpQkFBQSxnQkFBQSxHQUFBO0FBQWlDLGlCQUFBLE1BQUE7QUFBZSxTQUZoRDtBQUdBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBO0FBQ0E7OztBQUFBLGVBQUEsTUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7QUFBc0QsZUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsQ0FBQTtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUEsYUFBQSxtQkFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QU9sRkEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLDRDQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxxREFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsaURBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBO0FBQUE7OztBQUFBLFlBQUEsNkNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHFEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLDZDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFlBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsNkNBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFlBQUEsc0RBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMENBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFB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O0NBVkE7OztBNEJBQSxDQUFFLFVBQVVwVCxDQUFWLEVBQWM7QUFDZDs7QUFFQUEsRUFBQUEsQ0FBQyxDQUFFK0UsUUFBRixDQUFELENBQWN0QyxVQUFkO0FBQ0QsQ0FKRCxFQUlJaVMsTUFKSiIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiLi9mb3VuZGF0aW9uLmNvcmVcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5hY2NvcmRpb25NZW51XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmFjY29yZGlvbk1lbnVcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubmVzdFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX25lc3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIi8vIC0tLSBGb3VuZGF0aW9uIENvcmUgQVBJIC0tLVxuLy8gSW5pdGlhbGl6ZSBGb3VuZGF0aW9uIGFuZCBhZGQgc29tZSB1dGlsaXRpZXMgdG8gaXRzIHB1YmxpYyBBUEkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4vLyBQbGVhc2Ugbm90ZSB0aGF0IGV2ZXJ5IHV0aWxpdHkgZG8gbm90IGhhdmUgdG8gYmUgYWRkZWQgdG8gdGhlIGNvcmUgQVBJLlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLmNvcmUnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBydGwsIEdldFlvRGlnaXRzLCB0cmFuc2l0aW9uZW5kLCBSZWdFeHBFc2NhcGUsIG9uTG9hZCB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5cbkZvdW5kYXRpb24uYWRkVG9KcXVlcnkoJCk7XG5cbi8vIEV2ZXJ5IHBsdWdpbiBkZXBlbmRzIG9uIHBsdWdpbiBub3csIHdlIGNhbiBpbmNsdWRlIHRoYXQgb24gdGhlIGNvcmUgZm9yIHRoZVxuLy8gc2NyaXB0IGluY2x1c2lvbiBwYXRoLlxuRm91bmRhdGlvbi5QbHVnaW4gPSBQbHVnaW47XG5cbi8vIFRoZXNlIGFyZSBub3cgc2VwYXJhdGVkIG91dCwgYnV0IGhpc3RvcmljYWxseSB3ZXJlIGEgcGFydCBvZiB0aGlzIG1vZHVsZSxcbi8vIGFuZCBzaW5jZSB0aGlzIGlzIGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdlIGluY2x1ZGUgdGhlbSBpblxuLy8gdGhpcyBlbnRyeS5cbkZvdW5kYXRpb24ucnRsID0gcnRsO1xuRm91bmRhdGlvbi5HZXRZb0RpZ2l0cyA9IEdldFlvRGlnaXRzO1xuRm91bmRhdGlvbi50cmFuc2l0aW9uZW5kID0gdHJhbnNpdGlvbmVuZDtcbkZvdW5kYXRpb24uUmVnRXhwRXNjYXBlID0gUmVnRXhwRXNjYXBlO1xuRm91bmRhdGlvbi5vbkxvYWQgPSBvbkxvYWQ7XG5cbndpbmRvdy5Gb3VuZGF0aW9uID0gRm91bmRhdGlvbjtcblxuLy8gLS0tIEZvdW5kYXRpb24gQ29yZSBleHBvcnRzIC0tLVxuLy8gRXhwb3J0IFwiUGx1Z2luXCIgYW5kIGFsbCBjb3JlIHV0aWxpdGllcywgc2luY2UgdGhlIGBmb3VuZGF0aW9uLmNvcmVgIGVudHJ5IHBsYXlzIHRoZSByb2xlIG9mXG4vLyBhbGwgY29yZSBzb3VyY2UgZmlsZXMuXG5cbmV4cG9ydCB7IEZvdW5kYXRpb24gfTtcbmV4cG9ydCAqIGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuZXhwb3J0ICogZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNZWRpYVF1ZXJ5IH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeSc7XG5cbnZhciBGT1VOREFUSU9OX1ZFUlNJT04gPSAnNi41LjMnO1xuXG4vLyBHbG9iYWwgRm91bmRhdGlvbiBvYmplY3Rcbi8vIFRoaXMgaXMgYXR0YWNoZWQgdG8gdGhlIHdpbmRvdywgb3IgdXNlZCBhcyBhIG1vZHVsZSBmb3IgQU1EL0Jyb3dzZXJpZnlcbnZhciBGb3VuZGF0aW9uID0ge1xuICB2ZXJzaW9uOiBGT1VOREFUSU9OX1ZFUlNJT04sXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBpbml0aWFsaXplZCBwbHVnaW5zLlxuICAgKi9cbiAgX3BsdWdpbnM6IHt9LFxuXG4gIC8qKlxuICAgKiBTdG9yZXMgZ2VuZXJhdGVkIHVuaXF1ZSBpZHMgZm9yIHBsdWdpbiBpbnN0YW5jZXNcbiAgICovXG4gIF91dWlkczogW10sXG5cbiAgLyoqXG4gICAqIERlZmluZXMgYSBGb3VuZGF0aW9uIHBsdWdpbiwgYWRkaW5nIGl0IHRvIHRoZSBgRm91bmRhdGlvbmAgbmFtZXNwYWNlIGFuZCB0aGUgbGlzdCBvZiBwbHVnaW5zIHRvIGluaXRpYWxpemUgd2hlbiByZWZsb3dpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW4gLSBUaGUgY29uc3RydWN0b3Igb2YgdGhlIHBsdWdpbi5cbiAgICovXG4gIHBsdWdpbjogZnVuY3Rpb24ocGx1Z2luLCBuYW1lKSB7XG4gICAgLy8gT2JqZWN0IGtleSB0byB1c2Ugd2hlbiBhZGRpbmcgdG8gZ2xvYmFsIEZvdW5kYXRpb24gb2JqZWN0XG4gICAgLy8gRXhhbXBsZXM6IEZvdW5kYXRpb24uUmV2ZWFsLCBGb3VuZGF0aW9uLk9mZkNhbnZhc1xuICAgIHZhciBjbGFzc05hbWUgPSAobmFtZSB8fCBmdW5jdGlvbk5hbWUocGx1Z2luKSk7XG4gICAgLy8gT2JqZWN0IGtleSB0byB1c2Ugd2hlbiBzdG9yaW5nIHRoZSBwbHVnaW4sIGFsc28gdXNlZCB0byBjcmVhdGUgdGhlIGlkZW50aWZ5aW5nIGRhdGEgYXR0cmlidXRlIGZvciB0aGUgcGx1Z2luXG4gICAgLy8gRXhhbXBsZXM6IGRhdGEtcmV2ZWFsLCBkYXRhLW9mZi1jYW52YXNcbiAgICB2YXIgYXR0ck5hbWUgID0gaHlwaGVuYXRlKGNsYXNzTmFtZSk7XG5cbiAgICAvLyBBZGQgdG8gdGhlIEZvdW5kYXRpb24gb2JqZWN0IGFuZCB0aGUgcGx1Z2lucyBsaXN0IChmb3IgcmVmbG93aW5nKVxuICAgIHRoaXMuX3BsdWdpbnNbYXR0ck5hbWVdID0gdGhpc1tjbGFzc05hbWVdID0gcGx1Z2luO1xuICB9LFxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIFBvcHVsYXRlcyB0aGUgX3V1aWRzIGFycmF5IHdpdGggcG9pbnRlcnMgdG8gZWFjaCBpbmRpdmlkdWFsIHBsdWdpbiBpbnN0YW5jZS5cbiAgICogQWRkcyB0aGUgYHpmUGx1Z2luYCBkYXRhLWF0dHJpYnV0ZSB0byBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZWQgcGx1Z2lucyB0byBhbGxvdyB1c2Ugb2YgJChzZWxlY3RvcikuZm91bmRhdGlvbihtZXRob2QpIGNhbGxzLlxuICAgKiBBbHNvIGZpcmVzIHRoZSBpbml0aWFsaXphdGlvbiBldmVudCBmb3IgZWFjaCBwbHVnaW4sIGNvbnNvbGlkYXRpbmcgcmVwZXRpdGl2ZSBjb2RlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGx1Z2luIC0gYW4gaW5zdGFuY2Ugb2YgYSBwbHVnaW4sIHVzdWFsbHkgYHRoaXNgIGluIGNvbnRleHQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHBsdWdpbiwgcGFzc2VkIGFzIGEgY2FtZWxDYXNlZCBzdHJpbmcuXG4gICAqIEBmaXJlcyBQbHVnaW4jaW5pdFxuICAgKi9cbiAgcmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uKHBsdWdpbiwgbmFtZSl7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBuYW1lID8gaHlwaGVuYXRlKG5hbWUpIDogZnVuY3Rpb25OYW1lKHBsdWdpbi5jb25zdHJ1Y3RvcikudG9Mb3dlckNhc2UoKTtcbiAgICBwbHVnaW4udXVpZCA9IEdldFlvRGlnaXRzKDYsIHBsdWdpbk5hbWUpO1xuXG4gICAgaWYoIXBsdWdpbi4kZWxlbWVudC5hdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gKSl7IHBsdWdpbi4kZWxlbWVudC5hdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gLCBwbHVnaW4udXVpZCk7IH1cbiAgICBpZighcGx1Z2luLiRlbGVtZW50LmRhdGEoJ3pmUGx1Z2luJykpeyBwbHVnaW4uJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nLCBwbHVnaW4pOyB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBpbml0aWFsaXplZC5cbiAgICAgICAgICAgKiBAZXZlbnQgUGx1Z2luI2luaXRcbiAgICAgICAgICAgKi9cbiAgICBwbHVnaW4uJGVsZW1lbnQudHJpZ2dlcihgaW5pdC56Zi4ke3BsdWdpbk5hbWV9YCk7XG5cbiAgICB0aGlzLl91dWlkcy5wdXNoKHBsdWdpbi51dWlkKTtcblxuICAgIHJldHVybjtcbiAgfSxcbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBSZW1vdmVzIHRoZSBwbHVnaW5zIHV1aWQgZnJvbSB0aGUgX3V1aWRzIGFycmF5LlxuICAgKiBSZW1vdmVzIHRoZSB6ZlBsdWdpbiBkYXRhIGF0dHJpYnV0ZSwgYXMgd2VsbCBhcyB0aGUgZGF0YS1wbHVnaW4tbmFtZSBhdHRyaWJ1dGUuXG4gICAqIEFsc28gZmlyZXMgdGhlIGRlc3Ryb3llZCBldmVudCBmb3IgdGhlIHBsdWdpbiwgY29uc29saWRhdGluZyByZXBldGl0aXZlIGNvZGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW4gLSBhbiBpbnN0YW5jZSBvZiBhIHBsdWdpbiwgdXN1YWxseSBgdGhpc2AgaW4gY29udGV4dC5cbiAgICogQGZpcmVzIFBsdWdpbiNkZXN0cm95ZWRcbiAgICovXG4gIHVucmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uKHBsdWdpbil7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBoeXBoZW5hdGUoZnVuY3Rpb25OYW1lKHBsdWdpbi4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicpLmNvbnN0cnVjdG9yKSk7XG5cbiAgICB0aGlzLl91dWlkcy5zcGxpY2UodGhpcy5fdXVpZHMuaW5kZXhPZihwbHVnaW4udXVpZCksIDEpO1xuICAgIHBsdWdpbi4kZWxlbWVudC5yZW1vdmVBdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gKS5yZW1vdmVEYXRhKCd6ZlBsdWdpbicpXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBiZWVuIGRlc3Ryb3llZC5cbiAgICAgICAgICAgKiBAZXZlbnQgUGx1Z2luI2Rlc3Ryb3llZFxuICAgICAgICAgICAqL1xuICAgICAgICAgIC50cmlnZ2VyKGBkZXN0cm95ZWQuemYuJHtwbHVnaW5OYW1lfWApO1xuICAgIGZvcih2YXIgcHJvcCBpbiBwbHVnaW4pe1xuICAgICAgcGx1Z2luW3Byb3BdID0gbnVsbDsvL2NsZWFuIHVwIHNjcmlwdCB0byBwcmVwIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgfVxuICAgIHJldHVybjtcbiAgfSxcblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIENhdXNlcyBvbmUgb3IgbW9yZSBhY3RpdmUgcGx1Z2lucyB0byByZS1pbml0aWFsaXplLCByZXNldHRpbmcgZXZlbnQgbGlzdGVuZXJzLCByZWNhbGN1bGF0aW5nIHBvc2l0aW9ucywgZXRjLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGx1Z2lucyAtIG9wdGlvbmFsIHN0cmluZyBvZiBhbiBpbmRpdmlkdWFsIHBsdWdpbiBrZXksIGF0dGFpbmVkIGJ5IGNhbGxpbmcgYCQoZWxlbWVudCkuZGF0YSgncGx1Z2luTmFtZScpYCwgb3Igc3RyaW5nIG9mIGEgcGx1Z2luIGNsYXNzIGkuZS4gYCdkcm9wZG93bidgXG4gICAqIEBkZWZhdWx0IElmIG5vIGFyZ3VtZW50IGlzIHBhc3NlZCwgcmVmbG93IGFsbCBjdXJyZW50bHkgYWN0aXZlIHBsdWdpbnMuXG4gICAqL1xuICAgcmVJbml0OiBmdW5jdGlvbihwbHVnaW5zKXtcbiAgICAgdmFyIGlzSlEgPSBwbHVnaW5zIGluc3RhbmNlb2YgJDtcbiAgICAgdHJ5e1xuICAgICAgIGlmKGlzSlEpe1xuICAgICAgICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICQodGhpcykuZGF0YSgnemZQbHVnaW4nKS5faW5pdCgpO1xuICAgICAgICAgfSk7XG4gICAgICAgfWVsc2V7XG4gICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBwbHVnaW5zLFxuICAgICAgICAgX3RoaXMgPSB0aGlzLFxuICAgICAgICAgZm5zID0ge1xuICAgICAgICAgICAnb2JqZWN0JzogZnVuY3Rpb24ocGxncyl7XG4gICAgICAgICAgICAgcGxncy5mb3JFYWNoKGZ1bmN0aW9uKHApe1xuICAgICAgICAgICAgICAgcCA9IGh5cGhlbmF0ZShwKTtcbiAgICAgICAgICAgICAgICQoJ1tkYXRhLScrIHAgKyddJykuZm91bmRhdGlvbignX2luaXQnKTtcbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgJ3N0cmluZyc6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgcGx1Z2lucyA9IGh5cGhlbmF0ZShwbHVnaW5zKTtcbiAgICAgICAgICAgICAkKCdbZGF0YS0nKyBwbHVnaW5zICsnXScpLmZvdW5kYXRpb24oJ19pbml0Jyk7XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgICd1bmRlZmluZWQnOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgIHRoaXNbJ29iamVjdCddKE9iamVjdC5rZXlzKF90aGlzLl9wbHVnaW5zKSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH07XG4gICAgICAgICBmbnNbdHlwZV0ocGx1Z2lucyk7XG4gICAgICAgfVxuICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgIH1maW5hbGx5e1xuICAgICAgIHJldHVybiBwbHVnaW5zO1xuICAgICB9XG4gICB9LFxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBsdWdpbnMgb24gYW55IGVsZW1lbnRzIHdpdGhpbiBgZWxlbWAgKGFuZCBgZWxlbWAgaXRzZWxmKSB0aGF0IGFyZW4ndCBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIGpRdWVyeSBvYmplY3QgY29udGFpbmluZyB0aGUgZWxlbWVudCB0byBjaGVjayBpbnNpZGUuIEFsc28gY2hlY2tzIHRoZSBlbGVtZW50IGl0c2VsZiwgdW5sZXNzIGl0J3MgdGhlIGBkb2N1bWVudGAgb2JqZWN0LlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gcGx1Z2lucyAtIEEgbGlzdCBvZiBwbHVnaW5zIHRvIGluaXRpYWxpemUuIExlYXZlIHRoaXMgb3V0IHRvIGluaXRpYWxpemUgZXZlcnl0aGluZy5cbiAgICovXG4gIHJlZmxvdzogZnVuY3Rpb24oZWxlbSwgcGx1Z2lucykge1xuXG4gICAgLy8gSWYgcGx1Z2lucyBpcyB1bmRlZmluZWQsIGp1c3QgZ3JhYiBldmVyeXRoaW5nXG4gICAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcGx1Z2lucyA9IE9iamVjdC5rZXlzKHRoaXMuX3BsdWdpbnMpO1xuICAgIH1cbiAgICAvLyBJZiBwbHVnaW5zIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGFuIGFycmF5IHdpdGggb25lIGl0ZW1cbiAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBsdWdpbnMgPSBbcGx1Z2luc107XG4gICAgfVxuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIHBsdWdpblxuICAgICQuZWFjaChwbHVnaW5zLCBmdW5jdGlvbihpLCBuYW1lKSB7XG4gICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcGx1Z2luXG4gICAgICB2YXIgcGx1Z2luID0gX3RoaXMuX3BsdWdpbnNbbmFtZV07XG5cbiAgICAgIC8vIExvY2FsaXplIHRoZSBzZWFyY2ggdG8gYWxsIGVsZW1lbnRzIGluc2lkZSBlbGVtLCBhcyB3ZWxsIGFzIGVsZW0gaXRzZWxmLCB1bmxlc3MgZWxlbSA9PT0gZG9jdW1lbnRcbiAgICAgIHZhciAkZWxlbSA9ICQoZWxlbSkuZmluZCgnW2RhdGEtJytuYW1lKyddJykuYWRkQmFjaygnW2RhdGEtJytuYW1lKyddJyk7XG5cbiAgICAgIC8vIEZvciBlYWNoIHBsdWdpbiBmb3VuZCwgaW5pdGlhbGl6ZSBpdFxuICAgICAgJGVsZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICRlbCA9ICQodGhpcyksXG4gICAgICAgICAgICBvcHRzID0ge307XG4gICAgICAgIC8vIERvbid0IGRvdWJsZS1kaXAgb24gcGx1Z2luc1xuICAgICAgICBpZiAoJGVsLmRhdGEoJ3pmUGx1Z2luJykpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJUcmllZCB0byBpbml0aWFsaXplIFwiK25hbWUrXCIgb24gYW4gZWxlbWVudCB0aGF0IGFscmVhZHkgaGFzIGEgRm91bmRhdGlvbiBwbHVnaW4uXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCRlbC5hdHRyKCdkYXRhLW9wdGlvbnMnKSl7XG4gICAgICAgICAgdmFyIHRoaW5nID0gJGVsLmF0dHIoJ2RhdGEtb3B0aW9ucycpLnNwbGl0KCc7JykuZm9yRWFjaChmdW5jdGlvbihlLCBpKXtcbiAgICAgICAgICAgIHZhciBvcHQgPSBlLnNwbGl0KCc6JykubWFwKGZ1bmN0aW9uKGVsKXsgcmV0dXJuIGVsLnRyaW0oKTsgfSk7XG4gICAgICAgICAgICBpZihvcHRbMF0pIG9wdHNbb3B0WzBdXSA9IHBhcnNlVmFsdWUob3B0WzFdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0cnl7XG4gICAgICAgICAgJGVsLmRhdGEoJ3pmUGx1Z2luJywgbmV3IHBsdWdpbigkKHRoaXMpLCBvcHRzKSk7XG4gICAgICAgIH1jYXRjaChlcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcik7XG4gICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldEZuTmFtZTogZnVuY3Rpb25OYW1lLFxuXG4gIGFkZFRvSnF1ZXJ5OiBmdW5jdGlvbigkKSB7XG4gICAgLy8gVE9ETzogY29uc2lkZXIgbm90IG1ha2luZyB0aGlzIGEgalF1ZXJ5IGZ1bmN0aW9uXG4gICAgLy8gVE9ETzogbmVlZCB3YXkgdG8gcmVmbG93IHZzLiByZS1pbml0aWFsaXplXG4gICAgLyoqXG4gICAgICogVGhlIEZvdW5kYXRpb24galF1ZXJ5IG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gbWV0aG9kIC0gQW4gYWN0aW9uIHRvIHBlcmZvcm0gb24gdGhlIGN1cnJlbnQgalF1ZXJ5IG9iamVjdC5cbiAgICAgKi9cbiAgICB2YXIgZm91bmRhdGlvbiA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgbWV0aG9kLFxuICAgICAgICAgICRub0pTID0gJCgnLm5vLWpzJyk7XG5cbiAgICAgIGlmKCRub0pTLmxlbmd0aCl7XG4gICAgICAgICRub0pTLnJlbW92ZUNsYXNzKCduby1qcycpO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlID09PSAndW5kZWZpbmVkJyl7Ly9uZWVkcyB0byBpbml0aWFsaXplIHRoZSBGb3VuZGF0aW9uIG9iamVjdCwgb3IgYW4gaW5kaXZpZHVhbCBwbHVnaW4uXG4gICAgICAgIE1lZGlhUXVlcnkuX2luaXQoKTtcbiAgICAgICAgRm91bmRhdGlvbi5yZWZsb3codGhpcyk7XG4gICAgICB9ZWxzZSBpZih0eXBlID09PSAnc3RyaW5nJyl7Ly9hbiBpbmRpdmlkdWFsIG1ldGhvZCB0byBpbnZva2Ugb24gYSBwbHVnaW4gb3IgZ3JvdXAgb2YgcGx1Z2luc1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7Ly9jb2xsZWN0IGFsbCB0aGUgYXJndW1lbnRzLCBpZiBuZWNlc3NhcnlcbiAgICAgICAgdmFyIHBsdWdDbGFzcyA9IHRoaXMuZGF0YSgnemZQbHVnaW4nKTsvL2RldGVybWluZSB0aGUgY2xhc3Mgb2YgcGx1Z2luXG5cbiAgICAgICAgaWYodHlwZW9mIHBsdWdDbGFzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBsdWdDbGFzc1ttZXRob2RdICE9PSAndW5kZWZpbmVkJyl7Ly9tYWtlIHN1cmUgYm90aCB0aGUgY2xhc3MgYW5kIG1ldGhvZCBleGlzdFxuICAgICAgICAgIGlmKHRoaXMubGVuZ3RoID09PSAxKXsvL2lmIHRoZXJlJ3Mgb25seSBvbmUsIGNhbGwgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgIHBsdWdDbGFzc1ttZXRob2RdLmFwcGx5KHBsdWdDbGFzcywgYXJncyk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaSwgZWwpey8vb3RoZXJ3aXNlIGxvb3AgdGhyb3VnaCB0aGUgalF1ZXJ5IGNvbGxlY3Rpb24gYW5kIGludm9rZSB0aGUgbWV0aG9kIG9uIGVhY2hcbiAgICAgICAgICAgICAgcGx1Z0NsYXNzW21ldGhvZF0uYXBwbHkoJChlbCkuZGF0YSgnemZQbHVnaW4nKSwgYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNley8vZXJyb3IgZm9yIG5vIGNsYXNzIG9yIG5vIG1ldGhvZFxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIldlJ3JlIHNvcnJ5LCAnXCIgKyBtZXRob2QgKyBcIicgaXMgbm90IGFuIGF2YWlsYWJsZSBtZXRob2QgZm9yIFwiICsgKHBsdWdDbGFzcyA/IGZ1bmN0aW9uTmFtZShwbHVnQ2xhc3MpIDogJ3RoaXMgZWxlbWVudCcpICsgJy4nKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7Ly9lcnJvciBmb3IgaW52YWxpZCBhcmd1bWVudCB0eXBlXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFdlJ3JlIHNvcnJ5LCAke3R5cGV9IGlzIG5vdCBhIHZhbGlkIHBhcmFtZXRlci4gWW91IG11c3QgdXNlIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWV0aG9kIHlvdSB3aXNoIHRvIGludm9rZS5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgJC5mbi5mb3VuZGF0aW9uID0gZm91bmRhdGlvbjtcbiAgICByZXR1cm4gJDtcbiAgfVxufTtcblxuRm91bmRhdGlvbi51dGlsID0ge1xuICAvKipcbiAgICogRnVuY3Rpb24gZm9yIGFwcGx5aW5nIGEgZGVib3VuY2UgZWZmZWN0IHRvIGEgZnVuY3Rpb24gY2FsbC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgLSBGdW5jdGlvbiB0byBiZSBjYWxsZWQgYXQgZW5kIG9mIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSAtIFRpbWUgaW4gbXMgdG8gZGVsYXkgdGhlIGNhbGwgb2YgYGZ1bmNgLlxuICAgKiBAcmV0dXJucyBmdW5jdGlvblxuICAgKi9cbiAgdGhyb3R0bGU6IGZ1bmN0aW9uIChmdW5jLCBkZWxheSkge1xuICAgIHZhciB0aW1lciA9IG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICBpZiAodGltZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbndpbmRvdy5Gb3VuZGF0aW9uID0gRm91bmRhdGlvbjtcblxuLy8gUG9seWZpbGwgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuKGZ1bmN0aW9uKCkge1xuICBpZiAoIURhdGUubm93IHx8ICF3aW5kb3cuRGF0ZS5ub3cpXG4gICAgd2luZG93LkRhdGUubm93ID0gRGF0ZS5ub3cgPSBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9O1xuXG4gIHZhciB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsraSkge1xuICAgICAgdmFyIHZwID0gdmVuZG9yc1tpXTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnArJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKHdpbmRvd1t2cCsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93W3ZwKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSk7XG4gIH1cbiAgaWYgKC9pUChhZHxob25lfG9kKS4qT1MgNi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICB8fCAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhsYXN0VGltZSA9IG5leHRUaW1lKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWUgLSBub3cpO1xuICAgIH07XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xuICB9XG4gIC8qKlxuICAgKiBQb2x5ZmlsbCBmb3IgcGVyZm9ybWFuY2Uubm93LCByZXF1aXJlZCBieSByQUZcbiAgICovXG4gIGlmKCF3aW5kb3cucGVyZm9ybWFuY2UgfHwgIXdpbmRvdy5wZXJmb3JtYW5jZS5ub3cpe1xuICAgIHdpbmRvdy5wZXJmb3JtYW5jZSA9IHtcbiAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxuICAgICAgbm93OiBmdW5jdGlvbigpeyByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQ7IH1cbiAgICB9O1xuICB9XG59KSgpO1xuaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKG9UaGlzKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBjbG9zZXN0IHRoaW5nIHBvc3NpYmxlIHRvIHRoZSBFQ01BU2NyaXB0IDVcbiAgICAgIC8vIGludGVybmFsIElzQ2FsbGFibGUgZnVuY3Rpb25cbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIC0gd2hhdCBpcyB0cnlpbmcgdG8gYmUgYm91bmQgaXMgbm90IGNhbGxhYmxlJyk7XG4gICAgfVxuXG4gICAgdmFyIGFBcmdzICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICBmVG9CaW5kID0gdGhpcyxcbiAgICAgICAgZk5PUCAgICA9IGZ1bmN0aW9uKCkge30sXG4gICAgICAgIGZCb3VuZCAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZlRvQmluZC5hcHBseSh0aGlzIGluc3RhbmNlb2YgZk5PUFxuICAgICAgICAgICAgICAgICA/IHRoaXNcbiAgICAgICAgICAgICAgICAgOiBvVGhpcyxcbiAgICAgICAgICAgICAgICAgYUFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfTtcblxuICAgIGlmICh0aGlzLnByb3RvdHlwZSkge1xuICAgICAgLy8gbmF0aXZlIGZ1bmN0aW9ucyBkb24ndCBoYXZlIGEgcHJvdG90eXBlXG4gICAgICBmTk9QLnByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuICAgIH1cbiAgICBmQm91bmQucHJvdG90eXBlID0gbmV3IGZOT1AoKTtcblxuICAgIHJldHVybiBmQm91bmQ7XG4gIH07XG59XG4vLyBQb2x5ZmlsbCB0byBnZXQgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiBpbiBJRTlcbmZ1bmN0aW9uIGZ1bmN0aW9uTmFtZShmbikge1xuICBpZiAodHlwZW9mIEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgdmFyIHJlc3VsdHMgPSAoZnVuY05hbWVSZWdleCkuZXhlYygoZm4pLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXS50cmltKCkgOiBcIlwiO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBmbi5wcm90b3R5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZuLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZuLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlKHN0cil7XG4gIGlmICgndHJ1ZScgPT09IHN0cikgcmV0dXJuIHRydWU7XG4gIGVsc2UgaWYgKCdmYWxzZScgPT09IHN0cikgcmV0dXJuIGZhbHNlO1xuICBlbHNlIGlmICghaXNOYU4oc3RyICogMSkpIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG4gIHJldHVybiBzdHI7XG59XG4vLyBDb252ZXJ0IFBhc2NhbENhc2UgdG8ga2ViYWItY2FzZVxuLy8gVGhhbmsgeW91OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84OTU1NTgwXG5mdW5jdGlvbiBoeXBoZW5hdGUoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IHtGb3VuZGF0aW9ufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEdldFlvRGlnaXRzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuXG4vLyBBYnN0cmFjdCBjbGFzcyBmb3IgcHJvdmlkaW5nIGxpZmVjeWNsZSBob29rcy4gRXhwZWN0IHBsdWdpbnMgdG8gZGVmaW5lIEFUIExFQVNUXG4vLyB7ZnVuY3Rpb259IF9zZXR1cCAocmVwbGFjZXMgcHJldmlvdXMgY29uc3RydWN0b3IpLFxuLy8ge2Z1bmN0aW9ufSBfZGVzdHJveSAocmVwbGFjZXMgcHJldmlvdXMgZGVzdHJveSlcbmNsYXNzIFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIHZhciBwbHVnaW5OYW1lID0gZ2V0UGx1Z2luTmFtZSh0aGlzKTtcbiAgICB0aGlzLnV1aWQgPSBHZXRZb0RpZ2l0cyg2LCBwbHVnaW5OYW1lKTtcblxuICAgIGlmKCF0aGlzLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApKXsgdGhpcy4kZWxlbWVudC5hdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gLCB0aGlzLnV1aWQpOyB9XG4gICAgaWYoIXRoaXMuJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nKSl7IHRoaXMuJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nLCB0aGlzKTsgfVxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBoYXMgaW5pdGlhbGl6ZWQuXG4gICAgICogQGV2ZW50IFBsdWdpbiNpbml0XG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGBpbml0LnpmLiR7cGx1Z2luTmFtZX1gKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveSgpO1xuICAgIHZhciBwbHVnaW5OYW1lID0gZ2V0UGx1Z2luTmFtZSh0aGlzKTtcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApLnJlbW92ZURhdGEoJ3pmUGx1Z2luJylcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBoYXMgYmVlbiBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBldmVudCBQbHVnaW4jZGVzdHJveWVkXG4gICAgICAgICAqL1xuICAgICAgICAudHJpZ2dlcihgZGVzdHJveWVkLnpmLiR7cGx1Z2luTmFtZX1gKTtcbiAgICBmb3IodmFyIHByb3AgaW4gdGhpcyl7XG4gICAgICB0aGlzW3Byb3BdID0gbnVsbDsvL2NsZWFuIHVwIHNjcmlwdCB0byBwcmVwIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgfVxuICB9XG59XG5cbi8vIENvbnZlcnQgUGFzY2FsQ2FzZSB0byBrZWJhYi1jYXNlXG4vLyBUaGFuayB5b3U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzg5NTU1ODBcbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRQbHVnaW5OYW1lKG9iaikge1xuICBpZih0eXBlb2Yob2JqLmNvbnN0cnVjdG9yLm5hbWUpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBoeXBoZW5hdGUob2JqLmNvbnN0cnVjdG9yLm5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBoeXBoZW5hdGUob2JqLmNsYXNzTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IHtQbHVnaW59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIENvcmUgRm91bmRhdGlvbiBVdGlsaXRpZXMsIHV0aWxpemVkIGluIGEgbnVtYmVyIG9mIHBsYWNlcy5cblxuICAvKipcbiAgICogUmV0dXJucyBhIGJvb2xlYW4gZm9yIFJUTCBzdXBwb3J0XG4gICAqL1xuZnVuY3Rpb24gcnRsKCkge1xuICByZXR1cm4gJCgnaHRtbCcpLmF0dHIoJ2RpcicpID09PSAncnRsJztcbn1cblxuLyoqXG4gKiByZXR1cm5zIGEgcmFuZG9tIGJhc2UtMzYgdWlkIHdpdGggbmFtZXNwYWNpbmdcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIG51bWJlciBvZiByYW5kb20gYmFzZS0zNiBkaWdpdHMgZGVzaXJlZC4gSW5jcmVhc2UgZm9yIG1vcmUgcmFuZG9tIHN0cmluZ3MuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gbmFtZSBvZiBwbHVnaW4gdG8gYmUgaW5jb3Jwb3JhdGVkIGluIHVpZCwgb3B0aW9uYWwuXG4gKiBAZGVmYXVsdCB7U3RyaW5nfSAnJyAtIGlmIG5vIHBsdWdpbiBuYW1lIGlzIHByb3ZpZGVkLCBub3RoaW5nIGlzIGFwcGVuZGVkIHRvIHRoZSB1aWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSAtIHVuaXF1ZSBpZFxuICovXG5mdW5jdGlvbiBHZXRZb0RpZ2l0cyhsZW5ndGgsIG5hbWVzcGFjZSl7XG4gIGxlbmd0aCA9IGxlbmd0aCB8fCA2O1xuICByZXR1cm4gTWF0aC5yb3VuZCgoTWF0aC5wb3coMzYsIGxlbmd0aCArIDEpIC0gTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDM2LCBsZW5ndGgpKSkudG9TdHJpbmcoMzYpLnNsaWNlKDEpICsgKG5hbWVzcGFjZSA/IGAtJHtuYW1lc3BhY2V9YCA6ICcnKTtcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBzdHJpbmcgc28gaXQgY2FuIGJlIHVzZWQgYXMgYSByZWdleHAgcGF0dGVyblxuICogQGZ1bmN0aW9uXG4gKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85MzEwNzUyLzQzMTczODRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gc3RyaW5nIHRvIGVzY2FwZS5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gZXNjYXBlZCBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gUmVnRXhwRXNjYXBlKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbmVuZCgkZWxlbSl7XG4gIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb3RyYW5zaXRpb25lbmQnXG4gIH07XG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBlbmQ7XG5cbiAgZm9yICh2YXIgdCBpbiB0cmFuc2l0aW9ucyl7XG4gICAgaWYgKHR5cGVvZiBlbGVtLnN0eWxlW3RdICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICBlbmQgPSB0cmFuc2l0aW9uc1t0XTtcbiAgICB9XG4gIH1cbiAgaWYoZW5kKXtcbiAgICByZXR1cm4gZW5kO1xuICB9ZWxzZXtcbiAgICBlbmQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAkZWxlbS50cmlnZ2VySGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIFskZWxlbV0pO1xuICAgIH0sIDEpO1xuICAgIHJldHVybiAndHJhbnNpdGlvbmVuZCc7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yIHdpbmRvdyBsb2FkLlxuICpcbiAqIElmIGAkZWxlbWAgaXMgcGFzc2VkLCBhbiBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCBvbiBgJGVsZW1gLiBJZiB3aW5kb3cgaXMgYWxyZWFkeSBsb2FkZWQsIHRoZSBldmVudCB3aWxsIHN0aWxsIGJlIHRyaWdnZXJlZC5cbiAqIElmIGBoYW5kbGVyYCBpcyBwYXNzZWQsIGF0dGFjaCBpdCB0byB0aGUgZXZlbnQgb24gYCRlbGVtYC5cbiAqIENhbGxpbmcgYG9uTG9hZGAgd2l0aG91dCBoYW5kbGVyIGFsbG93cyB5b3UgdG8gZ2V0IHRoZSBldmVudCB0eXBlIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYmVmb3JlIGF0dGFjaGluZyB0aGUgaGFuZGxlciBieSB5b3Vyc2VsZi5cbiAqIEBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbXSAkZWxlbSAtIGpRdWVyeSBlbGVtZW50IG9uIHdoaWNoIHRoZSBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCBpZiBwYXNzZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbXSBoYW5kbGVyIC0gZnVuY3Rpb24gdG8gYXR0YWNoIHRvIHRoZSBldmVudC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gZXZlbnQgdHlwZSB0aGF0IHNob3VsZCBvciB3aWxsIGJlIHRyaWdnZXJlZC5cbiAqL1xuZnVuY3Rpb24gb25Mb2FkKCRlbGVtLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGRpZExvYWQgPSBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnO1xuICBjb25zdCBldmVudFR5cGUgPSAoZGlkTG9hZCA/ICdfZGlkTG9hZCcgOiAnbG9hZCcpICsgJy56Zi51dGlsLm9uTG9hZCc7XG4gIGNvbnN0IGNiID0gKCkgPT4gJGVsZW0udHJpZ2dlckhhbmRsZXIoZXZlbnRUeXBlKTtcblxuICBpZiAoJGVsZW0pIHtcbiAgICBpZiAoaGFuZGxlcikgJGVsZW0ub25lKGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAoZGlkTG9hZClcbiAgICAgIHNldFRpbWVvdXQoY2IpO1xuICAgIGVsc2VcbiAgICAgICQod2luZG93KS5vbmUoJ2xvYWQnLCBjYik7XG4gIH1cblxuICByZXR1cm4gZXZlbnRUeXBlO1xufVxuXG4vKipcbiAqIFJldHVucyBhbiBoYW5kbGVyIGZvciB0aGUgYG1vdXNlbGVhdmVgIHRoYXQgaWdub3JlIGRpc2FwcGVhcmVkIG1vdXNlcy5cbiAqXG4gKiBJZiB0aGUgbW91c2UgXCJkaXNhcHBlYXJlZFwiIGZyb20gdGhlIGRvY3VtZW50IChsaWtlIHdoZW4gZ29pbmcgb24gYSBicm93c2VyIFVJIGVsZW1lbnQsIFNlZSBodHRwczovL2dpdC5pby96Zi0xMTQxMCksXG4gKiB0aGUgZXZlbnQgaXMgaWdub3JlZC5cbiAqIC0gSWYgdGhlIGBpZ25vcmVMZWF2ZVdpbmRvd2AgaXMgYHRydWVgLCB0aGUgZXZlbnQgaXMgaWdub3JlZCB3aGVuIHRoZSB1c2VyIGFjdHVhbGx5IGxlZnQgdGhlIHdpbmRvd1xuICogICAobGlrZSBieSBzd2l0Y2hpbmcgdG8gYW4gb3RoZXIgd2luZG93IHdpdGggW0FsdF0rW1RhYl0pLlxuICogLSBJZiB0aGUgYGlnbm9yZVJlYXBwZWFyYCBpcyBgdHJ1ZWAsIHRoZSBldmVudCB3aWxsIGJlIGlnbm9yZWQgd2hlbiB0aGUgbW91c2Ugd2lsbCByZWFwcGVhciBsYXRlciBvbiB0aGUgZG9jdW1lbnRcbiAqICAgb3V0c2lkZSBvZiB0aGUgZWxlbWVudCBpdCBsZWZ0LlxuICpcbiAqIEBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtdIGhhbmRsZXIgLSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyZWQgYG1vdXNlbGVhdmVgIGV2ZW50IHRvIHdhdGNoLlxuICogQHBhcmFtIHtPYmplY3R9IFtdIG9wdGlvbnMgLSBvYmplY3Qgb2Ygb3B0aW9uczpcbiAqIC0ge0Jvb2xlYW59IFtmYWxzZV0gaWdub3JlTGVhdmVXaW5kb3cgLSBhbHNvIGlnbm9yZSB3aGVuIHRoZSB1c2VyIHN3aXRjaGVkIHdpbmRvd3MuXG4gKiAtIHtCb29sZWFufSBbZmFsc2VdIGlnbm9yZVJlYXBwZWFyIC0gYWxzbyBpZ25vcmUgd2hlbiB0aGUgbW91c2UgcmVhcHBlYXJlZCBvdXRzaWRlIG9mIHRoZSBlbGVtZW50IGl0IGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IC0gZmlsdGVyZWQgaGFuZGxlciB0byB1c2UgdG8gbGlzdGVuIG9uIHRoZSBgbW91c2VsZWF2ZWAgZXZlbnQuXG4gKi9cbmZ1bmN0aW9uIGlnbm9yZU1vdXNlZGlzYXBwZWFyKGhhbmRsZXIsIHsgaWdub3JlTGVhdmVXaW5kb3cgPSBmYWxzZSwgaWdub3JlUmVhcHBlYXIgPSBmYWxzZSB9ID0ge30pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGxlYXZlRXZlbnRIYW5kbGVyKGVMZWF2ZSwgLi4ucmVzdCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gaGFuZGxlci5iaW5kKHRoaXMsIGVMZWF2ZSwgLi4ucmVzdCk7XG5cbiAgICAvLyBUaGUgbW91c2UgbGVmdDogY2FsbCB0aGUgZ2l2ZW4gY2FsbGJhY2sgaWYgdGhlIG1vdXNlIGVudGVyZWQgZWxzZXdoZXJlXG4gICAgaWYgKGVMZWF2ZS5yZWxhdGVkVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIGNoZWNrIGlmIHRoZSBtb3VzZSBhY3R1YWxseSBsZWZ0IHRoZSB3aW5kb3cuXG4gICAgLy8gSW4gZmlyZWZveCBpZiB0aGUgdXNlciBzd2l0Y2hlZCBiZXR3ZWVuIHdpbmRvd3MsIHRoZSB3aW5kb3cgc2lsbCBoYXZlIHRoZSBmb2N1cyBieSB0aGUgdGltZVxuICAgIC8vIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQuIFdlIGhhdmUgdG8gZGVib3VuY2UgdGhlIGV2ZW50IHRvIHRlc3QgdGhpcyBjYXNlLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gbGVhdmVFdmVudERlYm91bmNlcigpIHtcbiAgICAgIGlmICghaWdub3JlTGVhdmVXaW5kb3cgJiYgZG9jdW1lbnQuaGFzRm9jdXMgJiYgIWRvY3VtZW50Lmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgd2FpdCBmb3IgdGhlIG1vdXNlIHRvIHJlZWFwZWFyIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQsXG4gICAgICBpZiAoIWlnbm9yZVJlYXBwZWFyKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uZSgnbW91c2VlbnRlcicsIGZ1bmN0aW9uIHJlZW50ZXJFdmVudEhhbmRsZXIoZVJlZW50ZXIpIHtcbiAgICAgICAgICBpZiAoISQoZUxlYXZlLmN1cnJlbnRUYXJnZXQpLmhhcyhlUmVlbnRlci50YXJnZXQpLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gRmlsbCB3aGVyZSB0aGUgbW91c2UgZmluYWxseSBlbnRlcmVkLlxuICAgICAgICAgICAgZUxlYXZlLnJlbGF0ZWRUYXJnZXQgPSBlUmVlbnRlci50YXJnZXQ7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LCAwKTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgcnRsLCBHZXRZb0RpZ2l0cywgUmVnRXhwRXNjYXBlLCB0cmFuc2l0aW9uZW5kLCBvbkxvYWQsIGlnbm9yZU1vdXNlZGlzYXBwZWFyIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIERlZmF1bHQgc2V0IG9mIG1lZGlhIHF1ZXJpZXNcbmNvbnN0IGRlZmF1bHRRdWVyaWVzID0ge1xuICAnZGVmYXVsdCcgOiAnb25seSBzY3JlZW4nLFxuICBsYW5kc2NhcGUgOiAnb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIHBvcnRyYWl0IDogJ29ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIHJldGluYSA6ICdvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyLzEpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknXG4gIH07XG5cblxuLy8gbWF0Y2hNZWRpYSgpIHBvbHlmaWxsIC0gVGVzdCBhIENTUyBtZWRpYSB0eXBlL3F1ZXJ5IGluIEpTLlxuLy8gQXV0aG9ycyAmIGNvcHlyaWdodChjKSAyMDEyOiBTY290dCBKZWhsLCBQYXVsIElyaXNoLCBOaWNob2xhcyBaYWthcywgRGF2aWQgS25pZ2h0LiBNSVQgbGljZW5zZVxuLyogZXNsaW50LWRpc2FibGUgKi9cbndpbmRvdy5tYXRjaE1lZGlhIHx8ICh3aW5kb3cubWF0Y2hNZWRpYSA9IChmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIEZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgbWF0Y2hNZWRpdW0gYXBpIHN1Y2ggYXMgSUUgOSBhbmQgd2Via2l0XG4gIHZhciBzdHlsZU1lZGlhID0gKHdpbmRvdy5zdHlsZU1lZGlhIHx8IHdpbmRvdy5tZWRpYSk7XG5cbiAgLy8gRm9yIHRob3NlIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtYXRjaE1lZGl1bVxuICBpZiAoIXN0eWxlTWVkaWEpIHtcbiAgICB2YXIgc3R5bGUgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyksXG4gICAgc2NyaXB0ICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0sXG4gICAgaW5mbyAgICAgICAgPSBudWxsO1xuXG4gICAgc3R5bGUudHlwZSAgPSAndGV4dC9jc3MnO1xuICAgIHN0eWxlLmlkICAgID0gJ21hdGNobWVkaWFqcy10ZXN0JztcblxuICAgIGlmICghc2NyaXB0KSB7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlLCBzY3JpcHQpO1xuICAgIH1cblxuICAgIC8vICdzdHlsZS5jdXJyZW50U3R5bGUnIGlzIHVzZWQgYnkgSUUgPD0gOCBhbmQgJ3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlJyBmb3IgYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgaW5mbyA9ICgnZ2V0Q29tcHV0ZWRTdHlsZScgaW4gd2luZG93KSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdHlsZSwgbnVsbCkgfHwgc3R5bGUuY3VycmVudFN0eWxlO1xuXG4gICAgc3R5bGVNZWRpYSA9IHtcbiAgICAgIG1hdGNoTWVkaXVtOiBmdW5jdGlvbiAobWVkaWEpIHtcbiAgICAgICAgdmFyIHRleHQgPSAnQG1lZGlhICcgKyBtZWRpYSArICd7ICNtYXRjaG1lZGlhanMtdGVzdCB7IHdpZHRoOiAxcHg7IH0gfSc7XG5cbiAgICAgICAgLy8gJ3N0eWxlLnN0eWxlU2hlZXQnIGlzIHVzZWQgYnkgSUUgPD0gOCBhbmQgJ3N0eWxlLnRleHRDb250ZW50JyBmb3IgYWxsIG90aGVyIGJyb3dzZXJzXG4gICAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gdGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXN0IGlmIG1lZGlhIHF1ZXJ5IGlzIHRydWUgb3IgZmFsc2VcbiAgICAgICAgcmV0dXJuIGluZm8ud2lkdGggPT09ICcxcHgnO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24obWVkaWEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hlczogc3R5bGVNZWRpYS5tYXRjaE1lZGl1bShtZWRpYSB8fCAnYWxsJyksXG4gICAgICBtZWRpYTogbWVkaWEgfHwgJ2FsbCdcbiAgICB9O1xuICB9O1xufSkoKSk7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbnZhciBNZWRpYVF1ZXJ5ID0ge1xuICBxdWVyaWVzOiBbXSxcblxuICBjdXJyZW50OiAnJyxcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG1lZGlhIHF1ZXJ5IGhlbHBlciwgYnkgZXh0cmFjdGluZyB0aGUgYnJlYWtwb2ludCBsaXN0IGZyb20gdGhlIENTUyBhbmQgYWN0aXZhdGluZyB0aGUgYnJlYWtwb2ludCB3YXRjaGVyLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgJG1ldGEgPSAkKCdtZXRhLmZvdW5kYXRpb24tbXEnKTtcbiAgICBpZighJG1ldGEubGVuZ3RoKXtcbiAgICAgICQoJzxtZXRhIGNsYXNzPVwiZm91bmRhdGlvbi1tcVwiPicpLmFwcGVuZFRvKGRvY3VtZW50LmhlYWQpO1xuICAgIH1cblxuICAgIHZhciBleHRyYWN0ZWRTdHlsZXMgPSAkKCcuZm91bmRhdGlvbi1tcScpLmNzcygnZm9udC1mYW1pbHknKTtcbiAgICB2YXIgbmFtZWRRdWVyaWVzO1xuXG4gICAgbmFtZWRRdWVyaWVzID0gcGFyc2VTdHlsZVRvT2JqZWN0KGV4dHJhY3RlZFN0eWxlcyk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gbmFtZWRRdWVyaWVzKSB7XG4gICAgICBpZihuYW1lZFF1ZXJpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzZWxmLnF1ZXJpZXMucHVzaCh7XG4gICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgIHZhbHVlOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7bmFtZWRRdWVyaWVzW2tleV19KWBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5fZ2V0Q3VycmVudFNpemUoKTtcblxuICAgIHRoaXMuX3dhdGNoZXIoKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzY3JlZW4gaXMgYXQgbGVhc3QgYXMgd2lkZSBhcyBhIGJyZWFrcG9pbnQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIE5hbWUgb2YgdGhlIGJyZWFrcG9pbnQgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGJyZWFrcG9pbnQgbWF0Y2hlcywgYGZhbHNlYCBpZiBpdCdzIHNtYWxsZXIuXG4gICAqL1xuICBhdExlYXN0KHNpemUpIHtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmdldChzaXplKTtcblxuICAgIGlmIChxdWVyeSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzY3JlZW4gbWF0Y2hlcyB0byBhIGJyZWFrcG9pbnQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIE5hbWUgb2YgdGhlIGJyZWFrcG9pbnQgdG8gY2hlY2ssIGVpdGhlciAnc21hbGwgb25seScgb3IgJ3NtYWxsJy4gT21pdHRpbmcgJ29ubHknIGZhbGxzIGJhY2sgdG8gdXNpbmcgYXRMZWFzdCgpIG1ldGhvZC5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYnJlYWtwb2ludCBtYXRjaGVzLCBgZmFsc2VgIGlmIGl0IGRvZXMgbm90LlxuICAgKi9cbiAgaXMoc2l6ZSkge1xuICAgIHNpemUgPSBzaXplLnRyaW0oKS5zcGxpdCgnICcpO1xuICAgIGlmKHNpemUubGVuZ3RoID4gMSAmJiBzaXplWzFdID09PSAnb25seScpIHtcbiAgICAgIGlmKHNpemVbMF0gPT09IHRoaXMuX2dldEN1cnJlbnRTaXplKCkpIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5hdExlYXN0KHNpemVbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG1lZGlhIHF1ZXJ5IG9mIGEgYnJlYWtwb2ludC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBnZXQuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gLSBUaGUgbWVkaWEgcXVlcnkgb2YgdGhlIGJyZWFrcG9pbnQsIG9yIGBudWxsYCBpZiB0aGUgYnJlYWtwb2ludCBkb2Vzbid0IGV4aXN0LlxuICAgKi9cbiAgZ2V0KHNpemUpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucXVlcmllcykge1xuICAgICAgaWYodGhpcy5xdWVyaWVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1tpXTtcbiAgICAgICAgaWYgKHNpemUgPT09IHF1ZXJ5Lm5hbWUpIHJldHVybiBxdWVyeS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBicmVha3BvaW50IG5hbWUgYnkgdGVzdGluZyBldmVyeSBicmVha3BvaW50IGFuZCByZXR1cm5pbmcgdGhlIGxhc3Qgb25lIHRvIG1hdGNoICh0aGUgYmlnZ2VzdCBvbmUpLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybnMge1N0cmluZ30gTmFtZSBvZiB0aGUgY3VycmVudCBicmVha3BvaW50LlxuICAgKi9cbiAgX2dldEN1cnJlbnRTaXplKCkge1xuICAgIHZhciBtYXRjaGVkO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1tpXTtcblxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5LnZhbHVlKS5tYXRjaGVzKSB7XG4gICAgICAgIG1hdGNoZWQgPSBxdWVyeTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG1hdGNoZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlZC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgYnJlYWtwb2ludCB3YXRjaGVyLCB3aGljaCBmaXJlcyBhbiBldmVudCBvbiB0aGUgd2luZG93IHdoZW5ldmVyIHRoZSBicmVha3BvaW50IGNoYW5nZXMuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3dhdGNoZXIoKSB7XG4gICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnpmLm1lZGlhcXVlcnknKS5vbigncmVzaXplLnpmLm1lZGlhcXVlcnknLCAoKSA9PiB7XG4gICAgICB2YXIgbmV3U2l6ZSA9IHRoaXMuX2dldEN1cnJlbnRTaXplKCksIGN1cnJlbnRTaXplID0gdGhpcy5jdXJyZW50O1xuXG4gICAgICBpZiAobmV3U2l6ZSAhPT0gY3VycmVudFNpemUpIHtcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld1NpemU7XG5cbiAgICAgICAgLy8gQnJvYWRjYXN0IHRoZSBtZWRpYSBxdWVyeSBjaGFuZ2Ugb24gdGhlIHdpbmRvd1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgW25ld1NpemUsIGN1cnJlbnRTaXplXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vLyBUaGFuayB5b3U6IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nXG5mdW5jdGlvbiBwYXJzZVN0eWxlVG9PYmplY3Qoc3RyKSB7XG4gIHZhciBzdHlsZU9iamVjdCA9IHt9O1xuXG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgfVxuXG4gIHN0ciA9IHN0ci50cmltKCkuc2xpY2UoMSwgLTEpOyAvLyBicm93c2VycyByZS1xdW90ZSBzdHJpbmcgc3R5bGUgdmFsdWVzXG5cbiAgaWYgKCFzdHIpIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gIH1cblxuICBzdHlsZU9iamVjdCA9IHN0ci5zcGxpdCgnJicpLnJlZHVjZShmdW5jdGlvbihyZXQsIHBhcmFtKSB7XG4gICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcbiAgICB2YXIga2V5ID0gcGFydHNbMF07XG4gICAgdmFyIHZhbCA9IHBhcnRzWzFdO1xuICAgIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuXG4gICAgLy8gbWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcbiAgICAvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG4gICAgdmFsID0gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogZGVjb2RlVVJJQ29tcG9uZW50KHZhbCk7XG5cbiAgICBpZiAoIXJldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXRba2V5XSA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmV0W2tleV0pKSB7XG4gICAgICByZXRba2V5XS5wdXNoKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldFtrZXldID0gW3JldFtrZXldLCB2YWxdO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHN0eWxlT2JqZWN0O1xufVxuXG5leHBvcnQge01lZGlhUXVlcnl9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkJztcblxuRm91bmRhdGlvbi5LZXlib2FyZCA9IEtleWJvYXJkO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBLZXlib2FyZCB9O1xuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiBUaGlzIHV0aWwgd2FzIGNyZWF0ZWQgYnkgTWFyaXVzIE9sYmVydHogKlxuICogUGxlYXNlIHRoYW5rIE1hcml1cyBvbiBHaXRIdWIgL293bGJlcnR6ICpcbiAqIG9yIHRoZSB3ZWIgaHR0cDovL3d3dy5tYXJpdXNvbGJlcnR6LmRlLyAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgcnRsIGFzIFJ0bCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcblxuY29uc3Qga2V5Q29kZXMgPSB7XG4gIDk6ICdUQUInLFxuICAxMzogJ0VOVEVSJyxcbiAgMjc6ICdFU0NBUEUnLFxuICAzMjogJ1NQQUNFJyxcbiAgMzU6ICdFTkQnLFxuICAzNjogJ0hPTUUnLFxuICAzNzogJ0FSUk9XX0xFRlQnLFxuICAzODogJ0FSUk9XX1VQJyxcbiAgMzk6ICdBUlJPV19SSUdIVCcsXG4gIDQwOiAnQVJST1dfRE9XTidcbn1cblxudmFyIGNvbW1hbmRzID0ge31cblxuLy8gRnVuY3Rpb25zIHB1bGxlZCBvdXQgdG8gYmUgcmVmZXJlbmNlYWJsZSBmcm9tIGludGVybmFsc1xuZnVuY3Rpb24gZmluZEZvY3VzYWJsZSgkZWxlbWVudCkge1xuICBpZighJGVsZW1lbnQpIHtyZXR1cm4gZmFsc2U7IH1cbiAgcmV0dXJuICRlbGVtZW50LmZpbmQoJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsICpbdGFiaW5kZXhdLCAqW2NvbnRlbnRlZGl0YWJsZV0nKS5maWx0ZXIoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEkKHRoaXMpLmlzKCc6dmlzaWJsZScpIHx8ICQodGhpcykuYXR0cigndGFiaW5kZXgnKSA8IDApIHsgcmV0dXJuIGZhbHNlOyB9IC8vb25seSBoYXZlIHZpc2libGUgZWxlbWVudHMgYW5kIHRob3NlIHRoYXQgaGF2ZSBhIHRhYmluZGV4IGdyZWF0ZXIgb3IgZXF1YWwgMFxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VLZXkoZXZlbnQpIHtcbiAgdmFyIGtleSA9IGtleUNvZGVzW2V2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGVdIHx8IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQud2hpY2gpLnRvVXBwZXJDYXNlKCk7XG5cbiAgLy8gUmVtb3ZlIHVuLXByaW50YWJsZSBjaGFyYWN0ZXJzLCBlLmcuIGZvciBgZnJvbUNoYXJDb2RlYCBjYWxscyBmb3IgQ1RSTCBvbmx5IGV2ZW50c1xuICBrZXkgPSBrZXkucmVwbGFjZSgvXFxXKy8sICcnKTtcblxuICBpZiAoZXZlbnQuc2hpZnRLZXkpIGtleSA9IGBTSElGVF8ke2tleX1gO1xuICBpZiAoZXZlbnQuY3RybEtleSkga2V5ID0gYENUUkxfJHtrZXl9YDtcbiAgaWYgKGV2ZW50LmFsdEtleSkga2V5ID0gYEFMVF8ke2tleX1gO1xuXG4gIC8vIFJlbW92ZSB0cmFpbGluZyB1bmRlcnNjb3JlLCBpbiBjYXNlIG9ubHkgbW9kaWZpZXJzIHdlcmUgdXNlZCAoZS5nLiBvbmx5IGBDVFJMX0FMVGApXG4gIGtleSA9IGtleS5yZXBsYWNlKC9fJC8sICcnKTtcblxuICByZXR1cm4ga2V5O1xufVxuXG52YXIgS2V5Ym9hcmQgPSB7XG4gIGtleXM6IGdldEtleUNvZGVzKGtleUNvZGVzKSxcblxuICAvKipcbiAgICogUGFyc2VzIHRoZSAoa2V5Ym9hcmQpIGV2ZW50IGFuZCByZXR1cm5zIGEgU3RyaW5nIHRoYXQgcmVwcmVzZW50cyBpdHMga2V5XG4gICAqIENhbiBiZSB1c2VkIGxpa2UgRm91bmRhdGlvbi5wYXJzZUtleShldmVudCkgPT09IEZvdW5kYXRpb24ua2V5cy5TUEFDRVxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIHRoZSBldmVudCBnZW5lcmF0ZWQgYnkgdGhlIGV2ZW50IGhhbmRsZXJcbiAgICogQHJldHVybiBTdHJpbmcga2V5IC0gU3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUga2V5IHByZXNzZWRcbiAgICovXG4gIHBhcnNlS2V5OiBwYXJzZUtleSxcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZ2l2ZW4gKGtleWJvYXJkKSBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIHRoZSBldmVudCBnZW5lcmF0ZWQgYnkgdGhlIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudCAtIEZvdW5kYXRpb24gY29tcG9uZW50J3MgbmFtZSwgZS5nLiBTbGlkZXIgb3IgUmV2ZWFsXG4gICAqIEBwYXJhbSB7T2JqZWN0c30gZnVuY3Rpb25zIC0gY29sbGVjdGlvbiBvZiBmdW5jdGlvbnMgdGhhdCBhcmUgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGhhbmRsZUtleShldmVudCwgY29tcG9uZW50LCBmdW5jdGlvbnMpIHtcbiAgICB2YXIgY29tbWFuZExpc3QgPSBjb21tYW5kc1tjb21wb25lbnRdLFxuICAgICAga2V5Q29kZSA9IHRoaXMucGFyc2VLZXkoZXZlbnQpLFxuICAgICAgY21kcyxcbiAgICAgIGNvbW1hbmQsXG4gICAgICBmbjtcblxuICAgIGlmICghY29tbWFuZExpc3QpIHJldHVybiBjb25zb2xlLndhcm4oJ0NvbXBvbmVudCBub3QgZGVmaW5lZCEnKTtcblxuICAgIGlmICh0eXBlb2YgY29tbWFuZExpc3QubHRyID09PSAndW5kZWZpbmVkJykgeyAvLyB0aGlzIGNvbXBvbmVudCBkb2VzIG5vdCBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbHRyIGFuZCBydGxcbiAgICAgICAgY21kcyA9IGNvbW1hbmRMaXN0OyAvLyB1c2UgcGxhaW4gbGlzdFxuICAgIH0gZWxzZSB7IC8vIG1lcmdlIGx0ciBhbmQgcnRsOiBpZiBkb2N1bWVudCBpcyBydGwsIHJ0bCBvdmVyd3JpdGVzIGx0ciBhbmQgdmljZSB2ZXJzYVxuICAgICAgICBpZiAoUnRsKCkpIGNtZHMgPSAkLmV4dGVuZCh7fSwgY29tbWFuZExpc3QubHRyLCBjb21tYW5kTGlzdC5ydGwpO1xuXG4gICAgICAgIGVsc2UgY21kcyA9ICQuZXh0ZW5kKHt9LCBjb21tYW5kTGlzdC5ydGwsIGNvbW1hbmRMaXN0Lmx0cik7XG4gICAgfVxuICAgIGNvbW1hbmQgPSBjbWRzW2tleUNvZGVdO1xuXG4gICAgZm4gPSBmdW5jdGlvbnNbY29tbWFuZF07XG4gICAgaWYgKGZuICYmIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykgeyAvLyBleGVjdXRlIGZ1bmN0aW9uICBpZiBleGlzdHNcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IGZuLmFwcGx5KCk7XG4gICAgICBpZiAoZnVuY3Rpb25zLmhhbmRsZWQgfHwgdHlwZW9mIGZ1bmN0aW9ucy5oYW5kbGVkID09PSAnZnVuY3Rpb24nKSB7IC8vIGV4ZWN1dGUgZnVuY3Rpb24gd2hlbiBldmVudCB3YXMgaGFuZGxlZFxuICAgICAgICAgIGZ1bmN0aW9ucy5oYW5kbGVkKHJldHVyblZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZ1bmN0aW9ucy51bmhhbmRsZWQgfHwgdHlwZW9mIGZ1bmN0aW9ucy51bmhhbmRsZWQgPT09ICdmdW5jdGlvbicpIHsgLy8gZXhlY3V0ZSBmdW5jdGlvbiB3aGVuIGV2ZW50IHdhcyBub3QgaGFuZGxlZFxuICAgICAgICAgIGZ1bmN0aW9ucy51bmhhbmRsZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZpbmRzIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBnaXZlbiBgJGVsZW1lbnRgXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gc2VhcmNoIHdpdGhpblxuICAgKiBAcmV0dXJuIHtqUXVlcnl9ICRmb2N1c2FibGUgLSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIHdpdGhpbiBgJGVsZW1lbnRgXG4gICAqL1xuXG4gIGZpbmRGb2N1c2FibGU6IGZpbmRGb2N1c2FibGUsXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbXBvbmVudCBuYW1lIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCAtIEZvdW5kYXRpb24gY29tcG9uZW50LCBlLmcuIFNsaWRlciBvciBSZXZlYWxcbiAgICogQHJldHVybiBTdHJpbmcgY29tcG9uZW50TmFtZVxuICAgKi9cblxuICByZWdpc3Rlcihjb21wb25lbnROYW1lLCBjbWRzKSB7XG4gICAgY29tbWFuZHNbY29tcG9uZW50TmFtZV0gPSBjbWRzO1xuICB9LFxuXG5cbiAgLy8gVE9ETzk0Mzg6IFRoZXNlIHJlZmVyZW5jZXMgdG8gS2V5Ym9hcmQgbmVlZCB0byBub3QgcmVxdWlyZSBnbG9iYWwuIFdpbGwgJ3RoaXMnIHdvcmsgaW4gdGhpcyBjb250ZXh0P1xuICAvL1xuICAvKipcbiAgICogVHJhcHMgdGhlIGZvY3VzIGluIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtqUXVlcnl9ICRlbGVtZW50ICBqUXVlcnkgb2JqZWN0IHRvIHRyYXAgdGhlIGZvdWNzIGludG8uXG4gICAqL1xuICB0cmFwRm9jdXMoJGVsZW1lbnQpIHtcbiAgICB2YXIgJGZvY3VzYWJsZSA9IGZpbmRGb2N1c2FibGUoJGVsZW1lbnQpLFxuICAgICAgICAkZmlyc3RGb2N1c2FibGUgPSAkZm9jdXNhYmxlLmVxKDApLFxuICAgICAgICAkbGFzdEZvY3VzYWJsZSA9ICRmb2N1c2FibGUuZXEoLTEpO1xuXG4gICAgJGVsZW1lbnQub24oJ2tleWRvd24uemYudHJhcGZvY3VzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09ICRsYXN0Rm9jdXNhYmxlWzBdICYmIHBhcnNlS2V5KGV2ZW50KSA9PT0gJ1RBQicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJGZpcnN0Rm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC50YXJnZXQgPT09ICRmaXJzdEZvY3VzYWJsZVswXSAmJiBwYXJzZUtleShldmVudCkgPT09ICdTSElGVF9UQUInKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRsYXN0Rm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiBSZWxlYXNlcyB0aGUgdHJhcHBlZCBmb2N1cyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0gIHtqUXVlcnl9ICRlbGVtZW50ICBqUXVlcnkgb2JqZWN0IHRvIHJlbGVhc2UgdGhlIGZvY3VzIGZvci5cbiAgICovXG4gIHJlbGVhc2VGb2N1cygkZWxlbWVudCkge1xuICAgICRlbGVtZW50Lm9mZigna2V5ZG93bi56Zi50cmFwZm9jdXMnKTtcbiAgfVxufVxuXG4vKlxuICogQ29uc3RhbnRzIGZvciBlYXNpZXIgY29tcGFyaW5nLlxuICogQ2FuIGJlIHVzZWQgbGlrZSBGb3VuZGF0aW9uLnBhcnNlS2V5KGV2ZW50KSA9PT0gRm91bmRhdGlvbi5rZXlzLlNQQUNFXG4gKi9cbmZ1bmN0aW9uIGdldEtleUNvZGVzKGtjcykge1xuICB2YXIgayA9IHt9O1xuICBmb3IgKHZhciBrYyBpbiBrY3MpIGtba2NzW2tjXV0gPSBrY3Nba2NdO1xuICByZXR1cm4gaztcbn1cblxuZXhwb3J0IHtLZXlib2FyZH07XG4iLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuXG5pbXBvcnQgeyBOZXN0IH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi51dGlsLm5lc3QnO1xuXG5Gb3VuZGF0aW9uLk5lc3QgPSBOZXN0O1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBOZXN0IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IE5lc3QgPSB7XG4gIEZlYXRoZXIobWVudSwgdHlwZSA9ICd6ZicpIHtcbiAgICBtZW51LmF0dHIoJ3JvbGUnLCAnbWVudWJhcicpO1xuXG4gICAgdmFyIGl0ZW1zID0gbWVudS5maW5kKCdsaScpLmF0dHIoeydyb2xlJzogJ21lbnVpdGVtJ30pLFxuICAgICAgICBzdWJNZW51Q2xhc3MgPSBgaXMtJHt0eXBlfS1zdWJtZW51YCxcbiAgICAgICAgc3ViSXRlbUNsYXNzID0gYCR7c3ViTWVudUNsYXNzfS1pdGVtYCxcbiAgICAgICAgaGFzU3ViQ2xhc3MgPSBgaXMtJHt0eXBlfS1zdWJtZW51LXBhcmVudGAsXG4gICAgICAgIGFwcGx5QXJpYSA9ICh0eXBlICE9PSAnYWNjb3JkaW9uJyk7IC8vIEFjY29yZGlvbnMgaGFuZGxlIHRoZWlyIG93biBBUklBIGF0dHJpdXRlcy5cblxuICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgJGl0ZW0gPSAkKHRoaXMpLFxuICAgICAgICAgICRzdWIgPSAkaXRlbS5jaGlsZHJlbigndWwnKTtcblxuICAgICAgaWYgKCRzdWIubGVuZ3RoKSB7XG4gICAgICAgICRpdGVtLmFkZENsYXNzKGhhc1N1YkNsYXNzKTtcbiAgICAgICAgaWYoYXBwbHlBcmlhKSB7XG4gICAgICAgICAgJGl0ZW0uYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICRpdGVtLmNoaWxkcmVuKCdhOmZpcnN0JykudGV4dCgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gTm90ZTogIERyaWxsZG93bnMgYmVoYXZlIGRpZmZlcmVudGx5IGluIGhvdyB0aGV5IGhpZGUsIGFuZCBzbyBuZWVkXG4gICAgICAgICAgLy8gYWRkaXRpb25hbCBhdHRyaWJ1dGVzLiAgV2Ugc2hvdWxkIGxvb2sgaWYgdGhpcyBwb3NzaWJseSBvdmVyLWdlbmVyYWxpemVkXG4gICAgICAgICAgLy8gdXRpbGl0eSAoTmVzdCkgaXMgYXBwcm9wcmlhdGUgd2hlbiB3ZSByZXdvcmsgbWVudXMgaW4gNi40XG4gICAgICAgICAgaWYodHlwZSA9PT0gJ2RyaWxsZG93bicpIHtcbiAgICAgICAgICAgICRpdGVtLmF0dHIoeydhcmlhLWV4cGFuZGVkJzogZmFsc2V9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJHN1YlxuICAgICAgICAgIC5hZGRDbGFzcyhgc3VibWVudSAke3N1Yk1lbnVDbGFzc31gKVxuICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICdkYXRhLXN1Ym1lbnUnOiAnJyxcbiAgICAgICAgICAgICdyb2xlJzogJ21lbnViYXInXG4gICAgICAgICAgfSk7XG4gICAgICAgIGlmKHR5cGUgPT09ICdkcmlsbGRvd24nKSB7XG4gICAgICAgICAgJHN1Yi5hdHRyKHsnYXJpYS1oaWRkZW4nOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCRpdGVtLnBhcmVudCgnW2RhdGEtc3VibWVudV0nKS5sZW5ndGgpIHtcbiAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoYGlzLXN1Ym1lbnUtaXRlbSAke3N1Ykl0ZW1DbGFzc31gKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfSxcblxuICBCdXJuKG1lbnUsIHR5cGUpIHtcbiAgICB2YXIgLy9pdGVtcyA9IG1lbnUuZmluZCgnbGknKSxcbiAgICAgICAgc3ViTWVudUNsYXNzID0gYGlzLSR7dHlwZX0tc3VibWVudWAsXG4gICAgICAgIHN1Ykl0ZW1DbGFzcyA9IGAke3N1Yk1lbnVDbGFzc30taXRlbWAsXG4gICAgICAgIGhhc1N1YkNsYXNzID0gYGlzLSR7dHlwZX0tc3VibWVudS1wYXJlbnRgO1xuXG4gICAgbWVudVxuICAgICAgLmZpbmQoJz5saSwgPiBsaSA+IHVsLCAubWVudSwgLm1lbnUgPiBsaSwgW2RhdGEtc3VibWVudV0gPiBsaScpXG4gICAgICAucmVtb3ZlQ2xhc3MoYCR7c3ViTWVudUNsYXNzfSAke3N1Ykl0ZW1DbGFzc30gJHtoYXNTdWJDbGFzc30gaXMtc3VibWVudS1pdGVtIHN1Ym1lbnUgaXMtYWN0aXZlYClcbiAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXN1Ym1lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnJyk7XG5cbiAgfVxufVxuXG5leHBvcnQge05lc3R9O1xuIiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24udXRpbC5ib3gnO1xuXG5Gb3VuZGF0aW9uLkJveCA9IEJveDtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgQm94IH07XG4iLCIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IHsgcnRsIGFzIFJ0bCB9IGZyb20gXCIuL2ZvdW5kYXRpb24uY29yZS51dGlsc1wiO1xuXG52YXIgQm94ID0ge1xuICBJbU5vdFRvdWNoaW5nWW91OiBJbU5vdFRvdWNoaW5nWW91LFxuICBPdmVybGFwQXJlYTogT3ZlcmxhcEFyZWEsXG4gIEdldERpbWVuc2lvbnM6IEdldERpbWVuc2lvbnMsXG4gIEdldE9mZnNldHM6IEdldE9mZnNldHMsXG4gIEdldEV4cGxpY2l0T2Zmc2V0czogR2V0RXhwbGljaXRPZmZzZXRzXG59XG5cbi8qKlxuICogQ29tcGFyZXMgdGhlIGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudCB0byBhIGNvbnRhaW5lciBhbmQgZGV0ZXJtaW5lcyBjb2xsaXNpb24gZXZlbnRzIHdpdGggY29udGFpbmVyLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gdGVzdCBmb3IgY29sbGlzaW9ucy5cbiAqIEBwYXJhbSB7alF1ZXJ5fSBwYXJlbnQgLSBqUXVlcnkgb2JqZWN0IHRvIHVzZSBhcyBib3VuZGluZyBjb250YWluZXIuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGxyT25seSAtIHNldCB0byB0cnVlIHRvIGNoZWNrIGxlZnQgYW5kIHJpZ2h0IHZhbHVlcyBvbmx5LlxuICogQHBhcmFtIHtCb29sZWFufSB0Yk9ubHkgLSBzZXQgdG8gdHJ1ZSB0byBjaGVjayB0b3AgYW5kIGJvdHRvbSB2YWx1ZXMgb25seS5cbiAqIEBkZWZhdWx0IGlmIG5vIHBhcmVudCBvYmplY3QgcGFzc2VkLCBkZXRlY3RzIGNvbGxpc2lvbnMgd2l0aCBgd2luZG93YC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSAtIHRydWUgaWYgY29sbGlzaW9uIGZyZWUsIGZhbHNlIGlmIGEgY29sbGlzaW9uIGluIGFueSBkaXJlY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIEltTm90VG91Y2hpbmdZb3UoZWxlbWVudCwgcGFyZW50LCBsck9ubHksIHRiT25seSwgaWdub3JlQm90dG9tKSB7XG4gIHJldHVybiBPdmVybGFwQXJlYShlbGVtZW50LCBwYXJlbnQsIGxyT25seSwgdGJPbmx5LCBpZ25vcmVCb3R0b20pID09PSAwO1xufTtcblxuZnVuY3Rpb24gT3ZlcmxhcEFyZWEoZWxlbWVudCwgcGFyZW50LCBsck9ubHksIHRiT25seSwgaWdub3JlQm90dG9tKSB7XG4gIHZhciBlbGVEaW1zID0gR2V0RGltZW5zaW9ucyhlbGVtZW50KSxcbiAgdG9wT3ZlciwgYm90dG9tT3ZlciwgbGVmdE92ZXIsIHJpZ2h0T3ZlcjtcbiAgaWYgKHBhcmVudCkge1xuICAgIHZhciBwYXJEaW1zID0gR2V0RGltZW5zaW9ucyhwYXJlbnQpO1xuXG4gICAgYm90dG9tT3ZlciA9IChwYXJEaW1zLmhlaWdodCArIHBhckRpbXMub2Zmc2V0LnRvcCkgLSAoZWxlRGltcy5vZmZzZXQudG9wICsgZWxlRGltcy5oZWlnaHQpO1xuICAgIHRvcE92ZXIgICAgPSBlbGVEaW1zLm9mZnNldC50b3AgLSBwYXJEaW1zLm9mZnNldC50b3A7XG4gICAgbGVmdE92ZXIgICA9IGVsZURpbXMub2Zmc2V0LmxlZnQgLSBwYXJEaW1zLm9mZnNldC5sZWZ0O1xuICAgIHJpZ2h0T3ZlciAgPSAocGFyRGltcy53aWR0aCArIHBhckRpbXMub2Zmc2V0LmxlZnQpIC0gKGVsZURpbXMub2Zmc2V0LmxlZnQgKyBlbGVEaW1zLndpZHRoKTtcbiAgfVxuICBlbHNlIHtcbiAgICBib3R0b21PdmVyID0gKGVsZURpbXMud2luZG93RGltcy5oZWlnaHQgKyBlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcCkgLSAoZWxlRGltcy5vZmZzZXQudG9wICsgZWxlRGltcy5oZWlnaHQpO1xuICAgIHRvcE92ZXIgICAgPSBlbGVEaW1zLm9mZnNldC50b3AgLSBlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LnRvcDtcbiAgICBsZWZ0T3ZlciAgID0gZWxlRGltcy5vZmZzZXQubGVmdCAtIGVsZURpbXMud2luZG93RGltcy5vZmZzZXQubGVmdDtcbiAgICByaWdodE92ZXIgID0gZWxlRGltcy53aW5kb3dEaW1zLndpZHRoIC0gKGVsZURpbXMub2Zmc2V0LmxlZnQgKyBlbGVEaW1zLndpZHRoKTtcbiAgfVxuXG4gIGJvdHRvbU92ZXIgPSBpZ25vcmVCb3R0b20gPyAwIDogTWF0aC5taW4oYm90dG9tT3ZlciwgMCk7XG4gIHRvcE92ZXIgICAgPSBNYXRoLm1pbih0b3BPdmVyLCAwKTtcbiAgbGVmdE92ZXIgICA9IE1hdGgubWluKGxlZnRPdmVyLCAwKTtcbiAgcmlnaHRPdmVyICA9IE1hdGgubWluKHJpZ2h0T3ZlciwgMCk7XG5cbiAgaWYgKGxyT25seSkge1xuICAgIHJldHVybiBsZWZ0T3ZlciArIHJpZ2h0T3ZlcjtcbiAgfVxuICBpZiAodGJPbmx5KSB7XG4gICAgcmV0dXJuIHRvcE92ZXIgKyBib3R0b21PdmVyO1xuICB9XG5cbiAgLy8gdXNlIHN1bSBvZiBzcXVhcmVzIGIvYyB3ZSBjYXJlIGFib3V0IG92ZXJsYXAgYXJlYS5cbiAgcmV0dXJuIE1hdGguc3FydCgodG9wT3ZlciAqIHRvcE92ZXIpICsgKGJvdHRvbU92ZXIgKiBib3R0b21PdmVyKSArIChsZWZ0T3ZlciAqIGxlZnRPdmVyKSArIChyaWdodE92ZXIgKiByaWdodE92ZXIpKTtcbn1cblxuLyoqXG4gKiBVc2VzIG5hdGl2ZSBtZXRob2RzIHRvIHJldHVybiBhbiBvYmplY3Qgb2YgZGltZW5zaW9uIHZhbHVlcy5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtqUXVlcnkgfHwgSFRNTH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3Qgb3IgRE9NIGVsZW1lbnQgZm9yIHdoaWNoIHRvIGdldCB0aGUgZGltZW5zaW9ucy4gQ2FuIGJlIGFueSBlbGVtZW50IG90aGVyIHRoYXQgZG9jdW1lbnQgb3Igd2luZG93LlxuICogQHJldHVybnMge09iamVjdH0gLSBuZXN0ZWQgb2JqZWN0IG9mIGludGVnZXIgcGl4ZWwgdmFsdWVzXG4gKiBUT0RPIC0gaWYgZWxlbWVudCBpcyB3aW5kb3csIHJldHVybiBvbmx5IHRob3NlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gR2V0RGltZW5zaW9ucyhlbGVtKXtcbiAgZWxlbSA9IGVsZW0ubGVuZ3RoID8gZWxlbVswXSA6IGVsZW07XG5cbiAgaWYgKGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkknbSBzb3JyeSwgRGF2ZS4gSSdtIGFmcmFpZCBJIGNhbid0IGRvIHRoYXQuXCIpO1xuICB9XG5cbiAgdmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgcGFyUmVjdCA9IGVsZW0ucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHdpblJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgd2luWSA9IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgIHdpblggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIG9mZnNldDoge1xuICAgICAgdG9wOiByZWN0LnRvcCArIHdpblksXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5YXG4gICAgfSxcbiAgICBwYXJlbnREaW1zOiB7XG4gICAgICB3aWR0aDogcGFyUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcGFyUmVjdC5oZWlnaHQsXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgdG9wOiBwYXJSZWN0LnRvcCArIHdpblksXG4gICAgICAgIGxlZnQ6IHBhclJlY3QubGVmdCArIHdpblhcbiAgICAgIH1cbiAgICB9LFxuICAgIHdpbmRvd0RpbXM6IHtcbiAgICAgIHdpZHRoOiB3aW5SZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5SZWN0LmhlaWdodCxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB0b3A6IHdpblksXG4gICAgICAgIGxlZnQ6IHdpblhcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB0b3AgYW5kIGxlZnQgaW50ZWdlciBwaXhlbCB2YWx1ZXMgZm9yIGR5bmFtaWNhbGx5IHJlbmRlcmVkIGVsZW1lbnRzLFxuICogc3VjaCBhczogVG9vbHRpcCwgUmV2ZWFsLCBhbmQgRHJvcGRvd24uIE1haW50YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBhbmQgd2hlcmVcbiAqIHlvdSBkb24ndCBrbm93IGFsaWdubWVudCwgYnV0IGdlbmVyYWxseSBmcm9tXG4gKiA2LjQgZm9yd2FyZCB5b3Ugc2hvdWxkIHVzZSBHZXRFeHBsaWNpdE9mZnNldHMsIGFzIEdldE9mZnNldHMgY29uZmxhdGVzIHBvc2l0aW9uIGFuZCBhbGlnbm1lbnQuXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCBmb3IgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAqIEBwYXJhbSB7alF1ZXJ5fSBhbmNob3IgLSBqUXVlcnkgb2JqZWN0IGZvciB0aGUgZWxlbWVudCdzIGFuY2hvciBwb2ludC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwb3NpdGlvbiAtIGEgc3RyaW5nIHJlbGF0aW5nIHRvIHRoZSBkZXNpcmVkIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50LCByZWxhdGl2ZSB0byBpdCdzIGFuY2hvclxuICogQHBhcmFtIHtOdW1iZXJ9IHZPZmZzZXQgLSBpbnRlZ2VyIHBpeGVsIHZhbHVlIG9mIGRlc2lyZWQgdmVydGljYWwgc2VwYXJhdGlvbiBiZXR3ZWVuIGFuY2hvciBhbmQgZWxlbWVudC5cbiAqIEBwYXJhbSB7TnVtYmVyfSBoT2Zmc2V0IC0gaW50ZWdlciBwaXhlbCB2YWx1ZSBvZiBkZXNpcmVkIGhvcml6b250YWwgc2VwYXJhdGlvbiBiZXR3ZWVuIGFuY2hvciBhbmQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNPdmVyZmxvdyAtIGlmIGEgY29sbGlzaW9uIGV2ZW50IGlzIGRldGVjdGVkLCBzZXRzIHRvIHRydWUgdG8gZGVmYXVsdCB0aGUgZWxlbWVudCB0byBmdWxsIHdpZHRoIC0gYW55IGRlc2lyZWQgb2Zmc2V0LlxuICogVE9ETyBhbHRlci9yZXdyaXRlIHRvIHdvcmsgd2l0aCBgZW1gIHZhbHVlcyBhcyB3ZWxsL2luc3RlYWQgb2YgcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIEdldE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCBwb3NpdGlvbiwgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdykge1xuICBjb25zb2xlLmxvZyhcIk5PVEU6IEdldE9mZnNldHMgaXMgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBHZXRFeHBsaWNpdE9mZnNldHMgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA2LjVcIik7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIFJ0bCgpID9cbiAgICAgICAgR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ3RvcCcsICdsZWZ0Jywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdykgOlxuICAgICAgICBHZXRFeHBsaWNpdE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCAndG9wJywgJ3JpZ2h0Jywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdyk7XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHJldHVybiBSdGwoKSA/XG4gICAgICAgIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICdib3R0b20nLCAnbGVmdCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpIDpcbiAgICAgICAgR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ2JvdHRvbScsICdyaWdodCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIGNhc2UgJ2NlbnRlciB0b3AnOlxuICAgICAgcmV0dXJuIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICd0b3AnLCAnY2VudGVyJywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdyk7XG4gICAgY2FzZSAnY2VudGVyIGJvdHRvbSc6XG4gICAgICByZXR1cm4gR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ2JvdHRvbScsICdjZW50ZXInLCB2T2Zmc2V0LCBoT2Zmc2V0LCBpc092ZXJmbG93KTtcbiAgICBjYXNlICdjZW50ZXIgbGVmdCc6XG4gICAgICByZXR1cm4gR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ2xlZnQnLCAnY2VudGVyJywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdyk7XG4gICAgY2FzZSAnY2VudGVyIHJpZ2h0JzpcbiAgICAgIHJldHVybiBHZXRFeHBsaWNpdE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCAncmlnaHQnLCAnY2VudGVyJywgdk9mZnNldCwgaE9mZnNldCwgaXNPdmVyZmxvdyk7XG4gICAgY2FzZSAnbGVmdCBib3R0b20nOlxuICAgICAgcmV0dXJuIEdldEV4cGxpY2l0T2Zmc2V0cyhlbGVtZW50LCBhbmNob3IsICdib3R0b20nLCAnbGVmdCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIGNhc2UgJ3JpZ2h0IGJvdHRvbSc6XG4gICAgICByZXR1cm4gR2V0RXhwbGljaXRPZmZzZXRzKGVsZW1lbnQsIGFuY2hvciwgJ2JvdHRvbScsICdyaWdodCcsIHZPZmZzZXQsIGhPZmZzZXQsIGlzT3ZlcmZsb3cpO1xuICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5Li4uIHRoaXMgYWxvbmcgd2l0aCB0aGUgcmV2ZWFsIGFuZCByZXZlYWwgZnVsbFxuICAgIC8vIGNsYXNzZXMgYXJlIHRoZSBvbmx5IG9uZXMgdGhhdCBkaWRuJ3QgcmVmZXJlbmNlIGFuY2hvclxuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAoJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQubGVmdCArICgkZWxlRGltcy53aW5kb3dEaW1zLndpZHRoIC8gMikpIC0gKCRlbGVEaW1zLndpZHRoIC8gMikgKyBoT2Zmc2V0LFxuICAgICAgICB0b3A6ICgkZWxlRGltcy53aW5kb3dEaW1zLm9mZnNldC50b3AgKyAoJGVsZURpbXMud2luZG93RGltcy5oZWlnaHQgLyAyKSkgLSAoJGVsZURpbXMuaGVpZ2h0IC8gMiArIHZPZmZzZXQpXG4gICAgICB9XG4gICAgY2FzZSAncmV2ZWFsJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICgkZWxlRGltcy53aW5kb3dEaW1zLndpZHRoIC0gJGVsZURpbXMud2lkdGgpIC8gMiArIGhPZmZzZXQsXG4gICAgICAgIHRvcDogJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wICsgdk9mZnNldFxuICAgICAgfVxuICAgIGNhc2UgJ3JldmVhbCBmdWxsJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6ICRlbGVEaW1zLndpbmRvd0RpbXMub2Zmc2V0LmxlZnQsXG4gICAgICAgIHRvcDogJGVsZURpbXMud2luZG93RGltcy5vZmZzZXQudG9wXG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKFJ0bCgpID8gJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgLSAkZWxlRGltcy53aWR0aCArICRhbmNob3JEaW1zLndpZHRoIC0gaE9mZnNldDogJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyBoT2Zmc2V0KSxcbiAgICAgICAgdG9wOiAkYW5jaG9yRGltcy5vZmZzZXQudG9wICsgJGFuY2hvckRpbXMuaGVpZ2h0ICsgdk9mZnNldFxuICAgICAgfVxuXG4gIH1cblxufVxuXG5mdW5jdGlvbiBHZXRFeHBsaWNpdE9mZnNldHMoZWxlbWVudCwgYW5jaG9yLCBwb3NpdGlvbiwgYWxpZ25tZW50LCB2T2Zmc2V0LCBoT2Zmc2V0LCBpc092ZXJmbG93KSB7XG4gIHZhciAkZWxlRGltcyA9IEdldERpbWVuc2lvbnMoZWxlbWVudCksXG4gICAgICAkYW5jaG9yRGltcyA9IGFuY2hvciA/IEdldERpbWVuc2lvbnMoYW5jaG9yKSA6IG51bGw7XG5cbiAgICAgIHZhciB0b3BWYWwsIGxlZnRWYWw7XG5cbiAgLy8gc2V0IHBvc2l0aW9uIHJlbGF0ZWQgYXR0cmlidXRlXG5cbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICB0b3BWYWwgPSAkYW5jaG9yRGltcy5vZmZzZXQudG9wIC0gKCRlbGVEaW1zLmhlaWdodCArIHZPZmZzZXQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHRvcFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC50b3AgKyAkYW5jaG9yRGltcy5oZWlnaHQgKyB2T2Zmc2V0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBsZWZ0VmFsID0gJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgLSAoJGVsZURpbXMud2lkdGggKyBoT2Zmc2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIGxlZnRWYWwgPSAkYW5jaG9yRGltcy5vZmZzZXQubGVmdCArICRhbmNob3JEaW1zLndpZHRoICsgaE9mZnNldDtcbiAgICAgIGJyZWFrO1xuICB9XG5cblxuICAvLyBzZXQgYWxpZ25tZW50IHJlbGF0ZWQgYXR0cmlidXRlXG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBsZWZ0VmFsID0gJGFuY2hvckRpbXMub2Zmc2V0LmxlZnQgKyBoT2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgbGVmdFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC5sZWZ0IC0gJGVsZURpbXMud2lkdGggKyAkYW5jaG9yRGltcy53aWR0aCAtIGhPZmZzZXQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgbGVmdFZhbCA9IGlzT3ZlcmZsb3cgPyBoT2Zmc2V0IDogKCgkYW5jaG9yRGltcy5vZmZzZXQubGVmdCArICgkYW5jaG9yRGltcy53aWR0aCAvIDIpKSAtICgkZWxlRGltcy53aWR0aCAvIDIpKSArIGhPZmZzZXQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBzd2l0Y2ggKGFsaWdubWVudCkge1xuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgIHRvcFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC50b3AgLSB2T2Zmc2V0ICsgJGFuY2hvckRpbXMuaGVpZ2h0IC0gJGVsZURpbXMuaGVpZ2h0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgIHRvcFZhbCA9ICRhbmNob3JEaW1zLm9mZnNldC50b3AgKyB2T2Zmc2V0XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgdG9wVmFsID0gKCRhbmNob3JEaW1zLm9mZnNldC50b3AgKyB2T2Zmc2V0ICsgKCRhbmNob3JEaW1zLmhlaWdodCAvIDIpKSAtICgkZWxlRGltcy5oZWlnaHQgLyAyKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHt0b3A6IHRvcFZhbCwgbGVmdDogbGVmdFZhbH07XG59XG5cbmV4cG9ydCB7Qm94fTtcbiIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5pbXBvcnQgeyBNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnknO1xuXG5Gb3VuZGF0aW9uLk1lZGlhUXVlcnkgPSBNZWRpYVF1ZXJ5O1xuRm91bmRhdGlvbi5NZWRpYVF1ZXJ5Ll9pbml0KCk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIE1lZGlhUXVlcnkgfTtcbiIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5pbXBvcnQgeyBNb3Rpb24sIE1vdmUgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLnV0aWwubW90aW9uJztcblxuRm91bmRhdGlvbi5Nb3Rpb24gPSBNb3Rpb247XG5Gb3VuZGF0aW9uLk1vdmUgPSBNb3ZlO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBNb3Rpb24sIE1vdmUgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IHRyYW5zaXRpb25lbmQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5cbi8qKlxuICogTW90aW9uIG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5tb3Rpb25cbiAqL1xuXG5jb25zdCBpbml0Q2xhc3NlcyAgID0gWydtdWktZW50ZXInLCAnbXVpLWxlYXZlJ107XG5jb25zdCBhY3RpdmVDbGFzc2VzID0gWydtdWktZW50ZXItYWN0aXZlJywgJ211aS1sZWF2ZS1hY3RpdmUnXTtcblxuY29uc3QgTW90aW9uID0ge1xuICBhbmltYXRlSW46IGZ1bmN0aW9uKGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpIHtcbiAgICBhbmltYXRlKHRydWUsIGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpO1xuICB9LFxuXG4gIGFuaW1hdGVPdXQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpIHtcbiAgICBhbmltYXRlKGZhbHNlLCBlbGVtZW50LCBhbmltYXRpb24sIGNiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBNb3ZlKGR1cmF0aW9uLCBlbGVtLCBmbil7XG4gIHZhciBhbmltLCBwcm9nLCBzdGFydCA9IG51bGw7XG4gIC8vIGNvbnNvbGUubG9nKCdjYWxsZWQnKTtcblxuICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICBmbi5hcHBseShlbGVtKTtcbiAgICBlbGVtLnRyaWdnZXIoJ2ZpbmlzaGVkLnpmLmFuaW1hdGUnLCBbZWxlbV0pLnRyaWdnZXJIYW5kbGVyKCdmaW5pc2hlZC56Zi5hbmltYXRlJywgW2VsZW1dKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKHRzKXtcbiAgICBpZighc3RhcnQpIHN0YXJ0ID0gdHM7XG4gICAgLy8gY29uc29sZS5sb2coc3RhcnQsIHRzKTtcbiAgICBwcm9nID0gdHMgLSBzdGFydDtcbiAgICBmbi5hcHBseShlbGVtKTtcblxuICAgIGlmKHByb2cgPCBkdXJhdGlvbil7IGFuaW0gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1vdmUsIGVsZW0pOyB9XG4gICAgZWxzZXtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltKTtcbiAgICAgIGVsZW0udHJpZ2dlcignZmluaXNoZWQuemYuYW5pbWF0ZScsIFtlbGVtXSkudHJpZ2dlckhhbmRsZXIoJ2ZpbmlzaGVkLnpmLmFuaW1hdGUnLCBbZWxlbV0pO1xuICAgIH1cbiAgfVxuICBhbmltID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlKTtcbn1cblxuLyoqXG4gKiBBbmltYXRlcyBhbiBlbGVtZW50IGluIG9yIG91dCB1c2luZyBhIENTUyB0cmFuc2l0aW9uIGNsYXNzLlxuICogQGZ1bmN0aW9uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBpc0luIC0gRGVmaW5lcyBpZiB0aGUgYW5pbWF0aW9uIGlzIGluIG9yIG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0galF1ZXJ5IG9yIEhUTUwgb2JqZWN0IHRvIGFuaW1hdGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gYW5pbWF0aW9uIC0gQ1NTIGNsYXNzIHRvIHVzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIC0gQ2FsbGJhY2sgdG8gcnVuIHdoZW4gYW5pbWF0aW9uIGlzIGZpbmlzaGVkLlxuICovXG5mdW5jdGlvbiBhbmltYXRlKGlzSW4sIGVsZW1lbnQsIGFuaW1hdGlvbiwgY2IpIHtcbiAgZWxlbWVudCA9ICQoZWxlbWVudCkuZXEoMCk7XG5cbiAgaWYgKCFlbGVtZW50Lmxlbmd0aCkgcmV0dXJuO1xuXG4gIHZhciBpbml0Q2xhc3MgPSBpc0luID8gaW5pdENsYXNzZXNbMF0gOiBpbml0Q2xhc3Nlc1sxXTtcbiAgdmFyIGFjdGl2ZUNsYXNzID0gaXNJbiA/IGFjdGl2ZUNsYXNzZXNbMF0gOiBhY3RpdmVDbGFzc2VzWzFdO1xuXG4gIC8vIFNldCB1cCB0aGUgYW5pbWF0aW9uXG4gIHJlc2V0KCk7XG5cbiAgZWxlbWVudFxuICAgIC5hZGRDbGFzcyhhbmltYXRpb24pXG4gICAgLmNzcygndHJhbnNpdGlvbicsICdub25lJyk7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBlbGVtZW50LmFkZENsYXNzKGluaXRDbGFzcyk7XG4gICAgaWYgKGlzSW4pIGVsZW1lbnQuc2hvdygpO1xuICB9KTtcblxuICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgZWxlbWVudFswXS5vZmZzZXRXaWR0aDtcbiAgICBlbGVtZW50XG4gICAgICAuY3NzKCd0cmFuc2l0aW9uJywgJycpXG4gICAgICAuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICB9KTtcblxuICAvLyBDbGVhbiB1cCB0aGUgYW5pbWF0aW9uIHdoZW4gaXQgZmluaXNoZXNcbiAgZWxlbWVudC5vbmUodHJhbnNpdGlvbmVuZChlbGVtZW50KSwgZmluaXNoKTtcblxuICAvLyBIaWRlcyB0aGUgZWxlbWVudCAoZm9yIG91dCBhbmltYXRpb25zKSwgcmVzZXRzIHRoZSBlbGVtZW50LCBhbmQgcnVucyBhIGNhbGxiYWNrXG4gIGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgICBpZiAoIWlzSW4pIGVsZW1lbnQuaGlkZSgpO1xuICAgIHJlc2V0KCk7XG4gICAgaWYgKGNiKSBjYi5hcHBseShlbGVtZW50KTtcbiAgfVxuXG4gIC8vIFJlc2V0cyB0cmFuc2l0aW9ucyBhbmQgcmVtb3ZlcyBtb3Rpb24tc3BlY2lmaWMgY2xhc3Nlc1xuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBlbGVtZW50WzBdLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IDA7XG4gICAgZWxlbWVudC5yZW1vdmVDbGFzcyhgJHtpbml0Q2xhc3N9ICR7YWN0aXZlQ2xhc3N9ICR7YW5pbWF0aW9ufWApO1xuICB9XG59XG5cbmV4cG9ydCB7IE1vdmUsIE1vdGlvbiB9O1xuXG4iLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IHsgVHJpZ2dlcnMgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLnV0aWwudHJpZ2dlcnMnO1xuVHJpZ2dlcnMuaW5pdCgkLCBGb3VuZGF0aW9uKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgVHJpZ2dlcnMgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IG9uTG9hZCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IE1vdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1vdGlvbic7XG5cbmNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlZml4ZXMgPSBbJ1dlYktpdCcsICdNb3onLCAnTycsICdNcycsICcnXTtcbiAgZm9yICh2YXIgaT0wOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYCR7cHJlZml4ZXNbaV19TXV0YXRpb25PYnNlcnZlcmAgaW4gd2luZG93KSB7XG4gICAgICByZXR1cm4gd2luZG93W2Ake3ByZWZpeGVzW2ldfU11dGF0aW9uT2JzZXJ2ZXJgXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSgpKTtcblxuY29uc3QgdHJpZ2dlcnMgPSAoZWwsIHR5cGUpID0+IHtcbiAgZWwuZGF0YSh0eXBlKS5zcGxpdCgnICcpLmZvckVhY2goaWQgPT4ge1xuICAgICQoYCMke2lkfWApWyB0eXBlID09PSAnY2xvc2UnID8gJ3RyaWdnZXInIDogJ3RyaWdnZXJIYW5kbGVyJ10oYCR7dHlwZX0uemYudHJpZ2dlcmAsIFtlbF0pO1xuICB9KTtcbn07XG5cbnZhciBUcmlnZ2VycyA9IHtcbiAgTGlzdGVuZXJzOiB7XG4gICAgQmFzaWM6IHt9LFxuICAgIEdsb2JhbDoge31cbiAgfSxcbiAgSW5pdGlhbGl6ZXJzOiB7fVxufVxuXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMgID0ge1xuICBvcGVuTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRyaWdnZXJzKCQodGhpcyksICdvcGVuJyk7XG4gIH0sXG4gIGNsb3NlTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgnY2xvc2UnKTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyaWdnZXJzKCQodGhpcyksICdjbG9zZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UuemYudHJpZ2dlcicpO1xuICAgIH1cbiAgfSxcbiAgdG9nZ2xlTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cmlnZ2VycygkKHRoaXMpLCAndG9nZ2xlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcykudHJpZ2dlcigndG9nZ2xlLnpmLnRyaWdnZXInKTtcbiAgICB9XG4gIH0sXG4gIGNsb3NlYWJsZUxpc3RlbmVyOiBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgYW5pbWF0aW9uID0gJCh0aGlzKS5kYXRhKCdjbG9zYWJsZScpO1xuXG4gICAgaWYoYW5pbWF0aW9uICE9PSAnJyl7XG4gICAgICBNb3Rpb24uYW5pbWF0ZU91dCgkKHRoaXMpLCBhbmltYXRpb24sIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nsb3NlZC56ZicpO1xuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICAkKHRoaXMpLmZhZGVPdXQoKS50cmlnZ2VyKCdjbG9zZWQuemYnKTtcbiAgICB9XG4gIH0sXG4gIHRvZ2dsZUZvY3VzTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgndG9nZ2xlLWZvY3VzJyk7XG4gICAgJChgIyR7aWR9YCkudHJpZ2dlckhhbmRsZXIoJ3RvZ2dsZS56Zi50cmlnZ2VyJywgWyQodGhpcyldKTtcbiAgfVxufTtcblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1vcGVuXSB3aWxsIHJldmVhbCBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbGljay56Zi50cmlnZ2VyJywgJ1tkYXRhLW9wZW5dJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLm9wZW5MaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtY2xvc2VdIHdpbGwgY2xvc2UgYSBwbHVnaW4gdGhhdCBzdXBwb3J0cyBpdCB3aGVuIGNsaWNrZWQuXG4vLyBJZiB1c2VkIHdpdGhvdXQgYSB2YWx1ZSBvbiBbZGF0YS1jbG9zZV0sIHRoZSBldmVudCB3aWxsIGJ1YmJsZSwgYWxsb3dpbmcgaXQgdG8gY2xvc2UgYSBwYXJlbnQgY29tcG9uZW50LlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIgPSAoJGVsZW0pID0+IHtcbiAgJGVsZW0ub2ZmKCdjbGljay56Zi50cmlnZ2VyJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLmNsb3NlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS1jbG9zZV0nLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMuY2xvc2VMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlXSB3aWxsIHRvZ2dsZSBhIHBsdWdpbiB0aGF0IHN1cHBvcnRzIGl0IHdoZW4gY2xpY2tlZC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVMaXN0ZW5lciA9ICgkZWxlbSkgPT4ge1xuICAkZWxlbS5vZmYoJ2NsaWNrLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlTGlzdGVuZXIpO1xuICAkZWxlbS5vbignY2xpY2suemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGVdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUxpc3RlbmVyKTtcbn1cblxuLy8gRWxlbWVudHMgd2l0aCBbZGF0YS1jbG9zYWJsZV0gd2lsbCByZXNwb25kIHRvIGNsb3NlLnpmLnRyaWdnZXIgZXZlbnRzLlxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlYWJsZUxpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignY2xvc2UuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdjbG9zZS56Zi50cmlnZ2VyJywgJ1tkYXRhLWNsb3NlYWJsZV0sIFtkYXRhLWNsb3NhYmxlXScsIFRyaWdnZXJzLkxpc3RlbmVycy5CYXNpYy5jbG9zZWFibGVMaXN0ZW5lcik7XG59XG5cbi8vIEVsZW1lbnRzIHdpdGggW2RhdGEtdG9nZ2xlLWZvY3VzXSB3aWxsIHJlc3BvbmQgdG8gY29taW5nIGluIGFuZCBvdXQgb2YgZm9jdXNcblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRUb2dnbGVGb2N1c0xpc3RlbmVyID0gKCRlbGVtKSA9PiB7XG4gICRlbGVtLm9mZignZm9jdXMuemYudHJpZ2dlciBibHVyLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuQmFzaWMudG9nZ2xlRm9jdXNMaXN0ZW5lcik7XG4gICRlbGVtLm9uKCdmb2N1cy56Zi50cmlnZ2VyIGJsdXIuemYudHJpZ2dlcicsICdbZGF0YS10b2dnbGUtZm9jdXNdJywgVHJpZ2dlcnMuTGlzdGVuZXJzLkJhc2ljLnRvZ2dsZUZvY3VzTGlzdGVuZXIpO1xufVxuXG5cblxuLy8gTW9yZSBHbG9iYWwvY29tcGxleCBsaXN0ZW5lcnMgYW5kIHRyaWdnZXJzXG5UcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsICA9IHtcbiAgcmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uKCRub2Rlcykge1xuICAgIGlmKCFNdXRhdGlvbk9ic2VydmVyKXsvL2ZhbGxiYWNrIGZvciBJRSA5XG4gICAgICAkbm9kZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKCdyZXNpemVtZS56Zi50cmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90cmlnZ2VyIGFsbCBsaXN0ZW5pbmcgZWxlbWVudHMgYW5kIHNpZ25hbCBhIHJlc2l6ZSBldmVudFxuICAgICRub2Rlcy5hdHRyKCdkYXRhLWV2ZW50cycsIFwicmVzaXplXCIpO1xuICB9LFxuICBzY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oJG5vZGVzKSB7XG4gICAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpey8vZmFsbGJhY2sgZm9yIElFIDlcbiAgICAgICRub2Rlcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL3RyaWdnZXIgYWxsIGxpc3RlbmluZyBlbGVtZW50cyBhbmQgc2lnbmFsIGEgc2Nyb2xsIGV2ZW50XG4gICAgJG5vZGVzLmF0dHIoJ2RhdGEtZXZlbnRzJywgXCJzY3JvbGxcIik7XG4gIH0sXG4gIGNsb3NlTWVMaXN0ZW5lcjogZnVuY3Rpb24oZSwgcGx1Z2luSWQpe1xuICAgIGxldCBwbHVnaW4gPSBlLm5hbWVzcGFjZS5zcGxpdCgnLicpWzBdO1xuICAgIGxldCBwbHVnaW5zID0gJChgW2RhdGEtJHtwbHVnaW59XWApLm5vdChgW2RhdGEteWV0aS1ib3g9XCIke3BsdWdpbklkfVwiXWApO1xuXG4gICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBsZXQgX3RoaXMgPSAkKHRoaXMpO1xuICAgICAgX3RoaXMudHJpZ2dlckhhbmRsZXIoJ2Nsb3NlLnpmLnRyaWdnZXInLCBbX3RoaXNdKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBHbG9iYWwsIHBhcnNlcyB3aG9sZSBkb2N1bWVudC5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIgPSBmdW5jdGlvbihwbHVnaW5OYW1lKSB7XG4gIHZhciB5ZXRpQm94ZXMgPSAkKCdbZGF0YS15ZXRpLWJveF0nKSxcbiAgICAgIHBsdWdOYW1lcyA9IFsnZHJvcGRvd24nLCAndG9vbHRpcCcsICdyZXZlYWwnXTtcblxuICBpZihwbHVnaW5OYW1lKXtcbiAgICBpZih0eXBlb2YgcGx1Z2luTmFtZSA9PT0gJ3N0cmluZycpe1xuICAgICAgcGx1Z05hbWVzLnB1c2gocGx1Z2luTmFtZSk7XG4gICAgfWVsc2UgaWYodHlwZW9mIHBsdWdpbk5hbWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwbHVnaW5OYW1lWzBdID09PSAnc3RyaW5nJyl7XG4gICAgICBwbHVnTmFtZXMgPSBwbHVnTmFtZXMuY29uY2F0KHBsdWdpbk5hbWUpO1xuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5lcnJvcignUGx1Z2luIG5hbWVzIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgfVxuICBpZih5ZXRpQm94ZXMubGVuZ3RoKXtcbiAgICBsZXQgbGlzdGVuZXJzID0gcGx1Z05hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGBjbG9zZW1lLnpmLiR7bmFtZX1gO1xuICAgIH0pLmpvaW4oJyAnKTtcblxuICAgICQod2luZG93KS5vZmYobGlzdGVuZXJzKS5vbihsaXN0ZW5lcnMsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwuY2xvc2VNZUxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCB0cmlnZ2VyLCBsaXN0ZW5lcikge1xuICBsZXQgdGltZXIsIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpO1xuICAkKHdpbmRvdykub2ZmKHRyaWdnZXIpLm9uKHRyaWdnZXIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGltZXIpIHsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgfVxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgbGlzdGVuZXIuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgZGVib3VuY2UgfHwgMTApOy8vZGVmYXVsdCB0aW1lIHRvIGVtaXQgc2Nyb2xsIGV2ZW50XG4gIH0pO1xufVxuXG5UcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbihkZWJvdW5jZSl7XG4gIGxldCAkbm9kZXMgPSAkKCdbZGF0YS1yZXNpemVdJyk7XG4gIGlmKCRub2Rlcy5sZW5ndGgpe1xuICAgIGRlYm91bmNlR2xvYmFsTGlzdGVuZXIoZGVib3VuY2UsICdyZXNpemUuemYudHJpZ2dlcicsIFRyaWdnZXJzLkxpc3RlbmVycy5HbG9iYWwucmVzaXplTGlzdGVuZXIsICRub2Rlcyk7XG4gIH1cbn1cblxuVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyID0gZnVuY3Rpb24oZGVib3VuY2Upe1xuICBsZXQgJG5vZGVzID0gJCgnW2RhdGEtc2Nyb2xsXScpO1xuICBpZigkbm9kZXMubGVuZ3RoKXtcbiAgICBkZWJvdW5jZUdsb2JhbExpc3RlbmVyKGRlYm91bmNlLCAnc2Nyb2xsLnpmLnRyaWdnZXInLCBUcmlnZ2Vycy5MaXN0ZW5lcnMuR2xvYmFsLnNjcm9sbExpc3RlbmVyLCAkbm9kZXMpO1xuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRNdXRhdGlvbkV2ZW50c0xpc3RlbmVyID0gZnVuY3Rpb24oJGVsZW0pIHtcbiAgaWYoIU11dGF0aW9uT2JzZXJ2ZXIpeyByZXR1cm4gZmFsc2U7IH1cbiAgbGV0ICRub2RlcyA9ICRlbGVtLmZpbmQoJ1tkYXRhLXJlc2l6ZV0sIFtkYXRhLXNjcm9sbF0sIFtkYXRhLW11dGF0ZV0nKTtcblxuICAvL2VsZW1lbnQgY2FsbGJhY2tcbiAgdmFyIGxpc3RlbmluZ0VsZW1lbnRzTXV0YXRpb24gPSBmdW5jdGlvbiAobXV0YXRpb25SZWNvcmRzTGlzdCkge1xuICAgIHZhciAkdGFyZ2V0ID0gJChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnRhcmdldCk7XG5cbiAgICAvL3RyaWdnZXIgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBlbGVtZW50IGRlcGVuZGluZyBvbiB0eXBlXG4gICAgc3dpdGNoIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhdHRyaWJ1dGVzXCI6XG4gICAgICAgIGlmICgkdGFyZ2V0LmF0dHIoXCJkYXRhLWV2ZW50c1wiKSA9PT0gXCJzY3JvbGxcIiAmJiBtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwiZGF0YS1ldmVudHNcIikge1xuICAgICAgICAgICR0YXJnZXQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbG1lLnpmLnRyaWdnZXInLCBbJHRhcmdldCwgd2luZG93LnBhZ2VZT2Zmc2V0XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR0YXJnZXQuYXR0cihcImRhdGEtZXZlbnRzXCIpID09PSBcInJlc2l6ZVwiICYmIG11dGF0aW9uUmVjb3Jkc0xpc3RbMF0uYXR0cmlidXRlTmFtZSA9PT0gXCJkYXRhLWV2ZW50c1wiKSB7XG4gICAgICAgICAgJHRhcmdldC50cmlnZ2VySGFuZGxlcigncmVzaXplbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0XSk7XG4gICAgICAgICB9XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZHNMaXN0WzBdLmF0dHJpYnV0ZU5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICR0YXJnZXQuY2xvc2VzdChcIltkYXRhLW11dGF0ZV1cIikuYXR0cihcImRhdGEtZXZlbnRzXCIsXCJtdXRhdGVcIik7XG4gICAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJjaGlsZExpc3RcIjpcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS5hdHRyKFwiZGF0YS1ldmVudHNcIixcIm11dGF0ZVwiKTtcbiAgICAgICAgJHRhcmdldC5jbG9zZXN0KFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VySGFuZGxlcignbXV0YXRlbWUuemYudHJpZ2dlcicsIFskdGFyZ2V0LmNsb3Nlc3QoXCJbZGF0YS1tdXRhdGVdXCIpXSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAvL25vdGhpbmdcbiAgICB9XG4gIH07XG5cbiAgaWYgKCRub2Rlcy5sZW5ndGgpIHtcbiAgICAvL2ZvciBlYWNoIGVsZW1lbnQgdGhhdCBuZWVkcyB0byBsaXN0ZW4gZm9yIHJlc2l6aW5nLCBzY3JvbGxpbmcsIG9yIG11dGF0aW9uIGFkZCBhIHNpbmdsZSBvYnNlcnZlclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9ICRub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHZhciBlbGVtZW50T2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihsaXN0ZW5pbmdFbGVtZW50c011dGF0aW9uKTtcbiAgICAgIGVsZW1lbnRPYnNlcnZlci5vYnNlcnZlKCRub2Rlc1tpXSwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGNoYXJhY3RlckRhdGE6IGZhbHNlLCBzdWJ0cmVlOiB0cnVlLCBhdHRyaWJ1dGVGaWx0ZXI6IFtcImRhdGEtZXZlbnRzXCIsIFwic3R5bGVcIl0gfSk7XG4gICAgfVxuICB9XG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRPcGVuTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZENsb3NlTGlzdGVuZXIoJGRvY3VtZW50KTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFRvZ2dsZUxpc3RlbmVyKCRkb2N1bWVudCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZWFibGVMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkVG9nZ2xlRm9jdXNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuXG59XG5cblRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgbGV0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkTXV0YXRpb25FdmVudHNMaXN0ZW5lcigkZG9jdW1lbnQpO1xuICBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkUmVzaXplTGlzdGVuZXIoKTtcbiAgVHJpZ2dlcnMuSW5pdGlhbGl6ZXJzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRDbG9zZW1lTGlzdGVuZXIoKTtcbn1cblxuXG5UcmlnZ2Vycy5pbml0ID0gZnVuY3Rpb24gKCQsIEZvdW5kYXRpb24pIHtcbiAgb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkLnRyaWdnZXJzSW5pdGlhbGl6ZWQgIT09IHRydWUpIHtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRTaW1wbGVMaXN0ZW5lcnMoKTtcbiAgICAgIFRyaWdnZXJzLkluaXRpYWxpemVycy5hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgICQudHJpZ2dlcnNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZihGb3VuZGF0aW9uKSB7XG4gICAgRm91bmRhdGlvbi5UcmlnZ2VycyA9IFRyaWdnZXJzO1xuICAgIC8vIExlZ2FjeSBpbmNsdWRlZCB0byBiZSBiYWNrd2FyZHMgY29tcGF0aWJsZSBmb3Igbm93LlxuICAgIEZvdW5kYXRpb24uSUhlYXJZb3UgPSBUcmlnZ2Vycy5Jbml0aWFsaXplcnMuYWRkR2xvYmFsTGlzdGVuZXJzXG4gIH1cbn1cblxuZXhwb3J0IHtUcmlnZ2Vyc307XG4iLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuXG5pbXBvcnQgeyBTbW9vdGhTY3JvbGwgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLnNtb290aFNjcm9sbCc7XG5Gb3VuZGF0aW9uLnBsdWdpbihTbW9vdGhTY3JvbGwsICdTbW9vdGhTY3JvbGwnKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgU21vb3RoU2Nyb2xsIH07XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuXG4vKipcbiAqIFNtb290aFNjcm9sbCBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24uc21vb3RoLXNjcm9sbFxuICovXG5jbGFzcyBTbW9vdGhTY3JvbGwgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBTbW9vdGhTY3JvbGwuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBTbW9vdGhTY3JvbGxcbiAgICogQGZpcmVzIFNtb290aFNjcm9sbCNpbml0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBhZGQgdGhlIHRyaWdnZXIgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3ZlcnJpZGVzIHRvIHRoZSBkZWZhdWx0IHBsdWdpbiBzZXR0aW5ncy5cbiAgICovXG4gICAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBTbW9vdGhTY3JvbGwuZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAnU21vb3RoU2Nyb2xsJzsgLy8gaWU5IGJhY2sgY29tcGF0XG5cbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIFNtb290aFNjcm9sbCBwbHVnaW5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0KCkge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuJGVsZW1lbnRbMF0uaWQgfHwgR2V0WW9EaWdpdHMoNiwgJ3Ntb290aC1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKHsgaWQgfSk7XG5cbiAgICAgICAgdGhpcy5fZXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgZXZlbnRzIGZvciBTbW9vdGhTY3JvbGwuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZXZlbnRzKCkge1xuICAgICAgICB0aGlzLl9saW5rQ2xpY2tMaXN0ZW5lciA9IHRoaXMuX2hhbmRsZUxpbmtDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljay56Zi5zbW9vdGhTY3JvbGwnLCB0aGlzLl9saW5rQ2xpY2tMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrLnpmLnNtb290aFNjcm9sbCcsICdhW2hyZWZePVwiI1wiXScsIHRoaXMuX2xpbmtDbGlja0xpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGdpdmVuIGV2ZW50IHRvIHNtb290aGx5IHNjcm9sbCB0byB0aGUgYW5jaG9yIHBvaW50ZWQgYnkgdGhlIGV2ZW50IHRhcmdldC5cbiAgICAgKiBAcGFyYW0geyp9IGUgLSBldmVudFxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2hhbmRsZUxpbmtDbGljayhlKSB7XG4gICAgICAgIC8vIEZvbGxvdyB0aGUgbGluayBpZiBpdCBkb2VzIG5vdCBwb2ludCB0byBhbiBhbmNob3IuXG4gICAgICAgIGlmICghJChlLmN1cnJlbnRUYXJnZXQpLmlzKCdhW2hyZWZePVwiI1wiXScpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgYXJyaXZhbCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuICAgICAgICB0aGlzLl9pblRyYW5zaXRpb24gPSB0cnVlO1xuXG4gICAgICAgIFNtb290aFNjcm9sbC5zY3JvbGxUb0xvYyhhcnJpdmFsLCB0aGlzLm9wdGlvbnMsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2luVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIHNjcm9sbCB0byBhIGdpdmVuIGxvY2F0aW9uIG9uIHRoZSBwYWdlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsb2MgLSBBIHByb3Blcmx5IGZvcm1hdHRlZCBqUXVlcnkgaWQgc2VsZWN0b3IuIEV4YW1wbGU6ICcjZm9vJ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgdG8gdXNlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgc2Nyb2xsVG9Mb2MobG9jLCBvcHRpb25zID0gU21vb3RoU2Nyb2xsLmRlZmF1bHRzLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCAkbG9jID0gJChsb2MpO1xuXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgdGFyZ2V0IGRvZXMgbm90IGV4aXN0IHRvIHByZXZlbnQgZXJyb3JzXG4gICAgICAgIGlmICghJGxvYy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgc2Nyb2xsUG9zID0gTWF0aC5yb3VuZCgkbG9jLm9mZnNldCgpLnRvcCAtIG9wdGlvbnMudGhyZXNob2xkIC8gMiAtIG9wdGlvbnMub2Zmc2V0KTtcblxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCh0cnVlKS5hbmltYXRlKFxuICAgICAgICAgICAgeyBzY3JvbGxUb3A6IHNjcm9sbFBvcyB9LFxuICAgICAgICAgICAgb3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIG9wdGlvbnMuYW5pbWF0aW9uRWFzaW5nLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyB0aGUgU21vb3RoU2Nyb2xsIGluc3RhbmNlLlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIF9kZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9mZignY2xpY2suemYuc21vb3RoU2Nyb2xsJywgdGhpcy5fbGlua0NsaWNrTGlzdGVuZXIpXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCdjbGljay56Zi5zbW9vdGhTY3JvbGwnLCAnYVtocmVmXj1cIiNcIl0nLCB0aGlzLl9saW5rQ2xpY2tMaXN0ZW5lcik7XG4gICAgfVxufVxuXG4vKipcbiAqIERlZmF1bHQgc2V0dGluZ3MgZm9yIHBsdWdpbi5cbiAqL1xuU21vb3RoU2Nyb2xsLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogQW1vdW50IG9mIHRpbWUsIGluIG1zLCB0aGUgYW5pbWF0ZWQgc2Nyb2xsaW5nIHNob3VsZCB0YWtlIGJldHdlZW4gbG9jYXRpb25zLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDUwMFxuICAgKi9cbiAgYW5pbWF0aW9uRHVyYXRpb246IDUwMCxcbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBzdHlsZSB0byB1c2Ugd2hlbiBzY3JvbGxpbmcgYmV0d2VlbiBsb2NhdGlvbnMuIENhbiBiZSBgJ3N3aW5nJ2Agb3IgYCdsaW5lYXInYC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnbGluZWFyJ1xuICAgKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2FuaW1hdGV8SnF1ZXJ5IGFuaW1hdGV9XG4gICAqL1xuICBhbmltYXRpb25FYXNpbmc6ICdsaW5lYXInLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHBpeGVscyB0byB1c2UgYXMgYSBtYXJrZXIgZm9yIGxvY2F0aW9uIGNoYW5nZXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgNTBcbiAgICovXG4gIHRocmVzaG9sZDogNTAsXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcGl4ZWxzIHRvIG9mZnNldCB0aGUgc2Nyb2xsIG9mIHRoZSBwYWdlIG9uIGl0ZW0gY2xpY2sgaWYgdXNpbmcgYSBzdGlja3kgbmF2IGJhci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBvZmZzZXQ6IDBcbn1cblxuZXhwb3J0IHtTbW9vdGhTY3JvbGx9XG4iLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuXG5pbXBvcnQgeyBPZmZDYW52YXMgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLm9mZmNhbnZhcyc7XG5Gb3VuZGF0aW9uLnBsdWdpbihPZmZDYW52YXMsICdPZmZDYW52YXMnKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgT2ZmQ2FudmFzIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQsIHRyYW5zaXRpb25lbmQsIFJlZ0V4cEVzY2FwZSB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm1lZGlhUXVlcnknO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcblxuaW1wb3J0IHsgVHJpZ2dlcnMgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC50cmlnZ2Vycyc7XG5cbi8qKlxuICogT2ZmQ2FudmFzIG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5vZmZjYW52YXNcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeVxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC50cmlnZ2Vyc1xuICovXG5cbmNsYXNzIE9mZkNhbnZhcyBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIGFuIG9mZi1jYW52YXMgd3JhcHBlci5cbiAgICogQGNsYXNzXG4gICAqIEBuYW1lIE9mZkNhbnZhc1xuICAgKiBAZmlyZXMgT2ZmQ2FudmFzI2luaXRcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIGluaXRpYWxpemUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3ZlcnJpZGVzIHRvIHRoZSBkZWZhdWx0IHBsdWdpbiBzZXR0aW5ncy5cbiAgICovXG4gIF9zZXR1cChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnT2ZmQ2FudmFzJzsgLy8gaWU5IGJhY2sgY29tcGF0XG4gICAgdGhpcy4kZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIE9mZkNhbnZhcy5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuY29udGVudENsYXNzZXMgPSB7IGJhc2U6IFtdLCByZXZlYWw6IFtdIH07XG4gICAgdGhpcy4kbGFzdFRyaWdnZXIgPSAkKCk7XG4gICAgdGhpcy4kdHJpZ2dlcnMgPSAkKCk7XG4gICAgdGhpcy5wb3NpdGlvbiA9ICdsZWZ0JztcbiAgICB0aGlzLiRjb250ZW50ID0gJCgpO1xuICAgIHRoaXMubmVzdGVkID0gISEodGhpcy5vcHRpb25zLm5lc3RlZCk7XG5cbiAgICAvLyBEZWZpbmVzIHRoZSBDU1MgdHJhbnNpdGlvbi9wb3NpdGlvbiBjbGFzc2VzIG9mIHRoZSBvZmYtY2FudmFzIGNvbnRlbnQgY29udGFpbmVyLlxuICAgICQoWydwdXNoJywgJ292ZXJsYXAnXSkuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgdGhpcy5jb250ZW50Q2xhc3Nlcy5iYXNlLnB1c2goJ2hhcy10cmFuc2l0aW9uLScrdmFsKTtcbiAgICB9KTtcbiAgICAkKFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10pLmVhY2goKGluZGV4LCB2YWwpID0+IHtcbiAgICAgIHRoaXMuY29udGVudENsYXNzZXMuYmFzZS5wdXNoKCdoYXMtcG9zaXRpb24tJyt2YWwpO1xuICAgICAgdGhpcy5jb250ZW50Q2xhc3Nlcy5yZXZlYWwucHVzaCgnaGFzLXJldmVhbC0nK3ZhbCk7XG4gICAgfSk7XG5cbiAgICAvLyBUcmlnZ2VycyBpbml0IGlzIGlkZW1wb3RlbnQsIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgaXQgaXMgaW5pdGlhbGl6ZWRcbiAgICBUcmlnZ2Vycy5pbml0KCQpO1xuICAgIE1lZGlhUXVlcnkuX2luaXQoKTtcblxuICAgIHRoaXMuX2luaXQoKTtcbiAgICB0aGlzLl9ldmVudHMoKTtcblxuICAgIEtleWJvYXJkLnJlZ2lzdGVyKCdPZmZDYW52YXMnLCB7XG4gICAgICAnRVNDQVBFJzogJ2Nsb3NlJ1xuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG9mZi1jYW52YXMgd3JhcHBlciBieSBhZGRpbmcgdGhlIGV4aXQgb3ZlcmxheSAoaWYgbmVlZGVkKS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB2YXIgaWQgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ2lkJyk7XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIC8vIEZpbmQgb2ZmLWNhbnZhcyBjb250ZW50LCBlaXRoZXIgYnkgSUQgKGlmIHNwZWNpZmllZCksIGJ5IHNpYmxpbmdzIG9yIGJ5IGNsb3Nlc3Qgc2VsZWN0b3IgKGZhbGxiYWNrKVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudElkKSB7XG4gICAgICB0aGlzLiRjb250ZW50ID0gJCgnIycrdGhpcy5vcHRpb25zLmNvbnRlbnRJZCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50LnNpYmxpbmdzKCdbZGF0YS1vZmYtY2FudmFzLWNvbnRlbnRdJykubGVuZ3RoKSB7XG4gICAgICB0aGlzLiRjb250ZW50ID0gdGhpcy4kZWxlbWVudC5zaWJsaW5ncygnW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XScpLmZpcnN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQgPSB0aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5maXJzdCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRpb25zLmNvbnRlbnRJZCkge1xuICAgICAgLy8gQXNzdW1lIHRoYXQgdGhlIG9mZi1jYW52YXMgZWxlbWVudCBpcyBuZXN0ZWQgaWYgaXQgaXNuJ3QgYSBzaWJsaW5nIG9mIHRoZSBjb250ZW50XG4gICAgICB0aGlzLm5lc3RlZCA9IHRoaXMuJGVsZW1lbnQuc2libGluZ3MoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5sZW5ndGggPT09IDA7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50SWQgJiYgdGhpcy5vcHRpb25zLm5lc3RlZCA9PT0gbnVsbCkge1xuICAgICAgLy8gV2FybmluZyBpZiB1c2luZyBjb250ZW50IElEIHdpdGhvdXQgc2V0dGluZyB0aGUgbmVzdGVkIG9wdGlvblxuICAgICAgLy8gT25jZSB0aGUgZWxlbWVudCBpcyBuZXN0ZWQgaXQgaXMgcmVxdWlyZWQgdG8gd29yayBwcm9wZXJseSBpbiB0aGlzIGNhc2VcbiAgICAgIGNvbnNvbGUud2FybignUmVtZW1iZXIgdG8gdXNlIHRoZSBuZXN0ZWQgb3B0aW9uIGlmIHVzaW5nIHRoZSBjb250ZW50IElEIG9wdGlvbiEnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uZXN0ZWQgPT09IHRydWUpIHtcbiAgICAgIC8vIEZvcmNlIHRyYW5zaXRpb24gb3ZlcmxhcCBpZiBuZXN0ZWRcbiAgICAgIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uID0gJ292ZXJsYXAnO1xuICAgICAgLy8gUmVtb3ZlIGFwcHJvcHJpYXRlIGNsYXNzZXMgaWYgYWxyZWFkeSBhc3NpZ25lZCBpbiBtYXJrdXBcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2lzLXRyYW5zaXRpb24tcHVzaCcpO1xuICAgIH1cblxuICAgIHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoYGlzLXRyYW5zaXRpb24tJHt0aGlzLm9wdGlvbnMudHJhbnNpdGlvbn0gaXMtY2xvc2VkYCk7XG5cbiAgICAvLyBGaW5kIHRyaWdnZXJzIHRoYXQgYWZmZWN0IHRoaXMgZWxlbWVudCBhbmQgYWRkIGFyaWEtZXhwYW5kZWQgdG8gdGhlbVxuICAgIHRoaXMuJHRyaWdnZXJzID0gJChkb2N1bWVudClcbiAgICAgIC5maW5kKCdbZGF0YS1vcGVuPVwiJytpZCsnXCJdLCBbZGF0YS1jbG9zZT1cIicraWQrJ1wiXSwgW2RhdGEtdG9nZ2xlPVwiJytpZCsnXCJdJylcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgIC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgaWQpO1xuXG4gICAgLy8gR2V0IHBvc2l0aW9uIGJ5IGNoZWNraW5nIGZvciByZWxhdGVkIENTUyBjbGFzc1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLiRlbGVtZW50LmlzKCcucG9zaXRpb24tbGVmdCwgLnBvc2l0aW9uLXRvcCwgLnBvc2l0aW9uLXJpZ2h0LCAucG9zaXRpb24tYm90dG9tJykgPyB0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJykubWF0Y2goL3Bvc2l0aW9uXFwtKGxlZnR8dG9wfHJpZ2h0fGJvdHRvbSkvKVsxXSA6IHRoaXMucG9zaXRpb247XG5cbiAgICAvLyBBZGQgYW4gb3ZlcmxheSBvdmVyIHRoZSBjb250ZW50IGlmIG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPT09IHRydWUpIHtcbiAgICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB2YXIgb3ZlcmxheVBvc2l0aW9uID0gJCh0aGlzLiRlbGVtZW50KS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gJ2ZpeGVkJyA/ICdpcy1vdmVybGF5LWZpeGVkJyA6ICdpcy1vdmVybGF5LWFic29sdXRlJztcbiAgICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdqcy1vZmYtY2FudmFzLW92ZXJsYXkgJyArIG92ZXJsYXlQb3NpdGlvbik7XG4gICAgICB0aGlzLiRvdmVybGF5ID0gJChvdmVybGF5KTtcbiAgICAgIGlmKG92ZXJsYXlQb3NpdGlvbiA9PT0gJ2lzLW92ZXJsYXktZml4ZWQnKSB7XG4gICAgICAgICQodGhpcy4kb3ZlcmxheSkuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRjb250ZW50LmFwcGVuZCh0aGlzLiRvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIHJldmVhbE9uIG9wdGlvbiBmcm9tIHRoZSBjbGFzcy5cbiAgICB2YXIgcmV2ZWFsT25SZWdFeHAgPSBuZXcgUmVnRXhwKFJlZ0V4cEVzY2FwZSh0aGlzLm9wdGlvbnMucmV2ZWFsQ2xhc3MpICsgJyhbXlxcXFxzXSspJywgJ2cnKTtcbiAgICB2YXIgcmV2ZWFsT25DbGFzcyA9IHJldmVhbE9uUmVnRXhwLmV4ZWModGhpcy4kZWxlbWVudFswXS5jbGFzc05hbWUpO1xuICAgIGlmIChyZXZlYWxPbkNsYXNzKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaXNSZXZlYWxlZCA9IHRydWU7XG4gICAgICB0aGlzLm9wdGlvbnMucmV2ZWFsT24gPSB0aGlzLm9wdGlvbnMucmV2ZWFsT24gfHwgcmV2ZWFsT25DbGFzc1sxXTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgdGhlIGByZXZlYWwtb24tKmAgY2xhc3MgaXMgc2V0LlxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNSZXZlYWxlZCA9PT0gdHJ1ZSAmJiB0aGlzLm9wdGlvbnMucmV2ZWFsT24pIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZmlyc3QoKS5hZGRDbGFzcyhgJHt0aGlzLm9wdGlvbnMucmV2ZWFsQ2xhc3N9JHt0aGlzLm9wdGlvbnMucmV2ZWFsT259YCk7XG4gICAgICB0aGlzLl9zZXRNUUNoZWNrZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRyYW5zaXRpb25UaW1lKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGFsbHkgcmVtb3ZlIGFsbCB0cmFuc2l0aW9uL3Bvc2l0aW9uIENTUyBjbGFzc2VzIGZyb20gb2ZmLWNhbnZhcyBjb250ZW50IGNvbnRhaW5lci5cbiAgICB0aGlzLl9yZW1vdmVDb250ZW50Q2xhc3NlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgdG8gdGhlIG9mZi1jYW52YXMgd3JhcHBlciBhbmQgdGhlIGV4aXQgb3ZlcmxheS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuemYudHJpZ2dlciAuemYub2ZmY2FudmFzJykub24oe1xuICAgICAgJ29wZW4uemYudHJpZ2dlcic6IHRoaXMub3Blbi5iaW5kKHRoaXMpLFxuICAgICAgJ2Nsb3NlLnpmLnRyaWdnZXInOiB0aGlzLmNsb3NlLmJpbmQodGhpcyksXG4gICAgICAndG9nZ2xlLnpmLnRyaWdnZXInOiB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpLFxuICAgICAgJ2tleWRvd24uemYub2ZmY2FudmFzJzogdGhpcy5faGFuZGxlS2V5Ym9hcmQuYmluZCh0aGlzKVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2sgPT09IHRydWUpIHtcbiAgICAgIHZhciAkdGFyZ2V0ID0gdGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID8gdGhpcy4kb3ZlcmxheSA6IHRoaXMuJGNvbnRlbnQ7XG4gICAgICAkdGFyZ2V0Lm9uKHsnY2xpY2suemYub2ZmY2FudmFzJzogdGhpcy5jbG9zZS5iaW5kKHRoaXMpfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgZXZlbnQgbGlzdGVuZXIgZm9yIGVsZW1lbnRzIHRoYXQgd2lsbCByZXZlYWwgYXQgY2VydGFpbiBicmVha3BvaW50cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRNUUNoZWNrZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMub25Mb2FkTGlzdGVuZXIgPSBvbkxvYWQoJCh3aW5kb3cpLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoTWVkaWFRdWVyeS5hdExlYXN0KF90aGlzLm9wdGlvbnMucmV2ZWFsT24pKSB7XG4gICAgICAgIF90aGlzLnJldmVhbCh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQod2luZG93KS5vbignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKE1lZGlhUXVlcnkuYXRMZWFzdChfdGhpcy5vcHRpb25zLnJldmVhbE9uKSkge1xuICAgICAgICBfdGhpcy5yZXZlYWwodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5yZXZlYWwoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIENTUyB0cmFuc2l0aW9uL3Bvc2l0aW9uIGNsYXNzZXMgb2YgdGhlIG9mZi1jYW52YXMgY29udGVudCBjb250YWluZXIuXG4gICAqIFJlbW92aW5nIHRoZSBjbGFzc2VzIGlzIGltcG9ydGFudCB3aGVuIGFub3RoZXIgb2ZmLWNhbnZhcyBnZXRzIG9wZW5lZCB0aGF0IHVzZXMgdGhlIHNhbWUgY29udGVudCBjb250YWluZXIuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaGFzUmV2ZWFsIC0gdHJ1ZSBpZiByZWxhdGVkIG9mZi1jYW52YXMgZWxlbWVudCBpcyByZXZlYWxlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW1vdmVDb250ZW50Q2xhc3NlcyhoYXNSZXZlYWwpIHtcbiAgICBpZiAodHlwZW9mIGhhc1JldmVhbCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLiRjb250ZW50LnJlbW92ZUNsYXNzKHRoaXMuY29udGVudENsYXNzZXMuYmFzZS5qb2luKCcgJykpO1xuICAgIH0gZWxzZSBpZiAoaGFzUmV2ZWFsID09PSBmYWxzZSkge1xuICAgICAgdGhpcy4kY29udGVudC5yZW1vdmVDbGFzcyhgaGFzLXJldmVhbC0ke3RoaXMucG9zaXRpb259YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIENTUyB0cmFuc2l0aW9uL3Bvc2l0aW9uIGNsYXNzZXMgb2YgdGhlIG9mZi1jYW52YXMgY29udGVudCBjb250YWluZXIsIGJhc2VkIG9uIHRoZSBvcGVuaW5nIG9mZi1jYW52YXMgZWxlbWVudC5cbiAgICogQmVmb3JlaGFuZCBhbnkgdHJhbnNpdGlvbi9wb3NpdGlvbiBjbGFzcyBnZXRzIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaGFzUmV2ZWFsIC0gdHJ1ZSBpZiByZWxhdGVkIG9mZi1jYW52YXMgZWxlbWVudCBpcyByZXZlYWxlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hZGRDb250ZW50Q2xhc3NlcyhoYXNSZXZlYWwpIHtcbiAgICB0aGlzLl9yZW1vdmVDb250ZW50Q2xhc3NlcyhoYXNSZXZlYWwpO1xuICAgIGlmICh0eXBlb2YgaGFzUmV2ZWFsICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQuYWRkQ2xhc3MoYGhhcy10cmFuc2l0aW9uLSR7dGhpcy5vcHRpb25zLnRyYW5zaXRpb259IGhhcy1wb3NpdGlvbi0ke3RoaXMucG9zaXRpb259YCk7XG4gICAgfSBlbHNlIGlmIChoYXNSZXZlYWwgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQuYWRkQ2xhc3MoYGhhcy1yZXZlYWwtJHt0aGlzLnBvc2l0aW9ufWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSByZXZlYWxpbmcvaGlkaW5nIHRoZSBvZmYtY2FudmFzIGF0IGJyZWFrcG9pbnRzLCBub3QgdGhlIHNhbWUgYXMgb3Blbi5cbiAgICogQHBhcmFtIHtCb29sZWFufSBpc1JldmVhbGVkIC0gdHJ1ZSBpZiBlbGVtZW50IHNob3VsZCBiZSByZXZlYWxlZC5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICByZXZlYWwoaXNSZXZlYWxlZCkge1xuICAgIGlmIChpc1JldmVhbGVkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB0aGlzLmlzUmV2ZWFsZWQgPSB0cnVlO1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ29wZW4uemYudHJpZ2dlciB0b2dnbGUuemYudHJpZ2dlcicpO1xuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXZlYWxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9mZignb3Blbi56Zi50cmlnZ2VyIHRvZ2dsZS56Zi50cmlnZ2VyJykub24oe1xuICAgICAgICAnb3Blbi56Zi50cmlnZ2VyJzogdGhpcy5vcGVuLmJpbmQodGhpcyksXG4gICAgICAgICd0b2dnbGUuemYudHJpZ2dlcic6IHRoaXMudG9nZ2xlLmJpbmQodGhpcylcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgfVxuICAgIHRoaXMuX2FkZENvbnRlbnRDbGFzc2VzKGlzUmV2ZWFsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHNjcm9sbGluZyBvZiB0aGUgYm9keSB3aGVuIG9mZmNhbnZhcyBpcyBvcGVuIG9uIG1vYmlsZSBTYWZhcmkgYW5kIG90aGVyIHRyb3VibGVzb21lIGJyb3dzZXJzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3N0b3BTY3JvbGxpbmcoZXZlbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUYWtlbiBhbmQgYWRhcHRlZCBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTY4ODk0NDcvcHJldmVudC1mdWxsLXBhZ2Utc2Nyb2xsaW5nLWlvc1xuICAvLyBPbmx5IHJlYWxseSB3b3JrcyBmb3IgeSwgbm90IHN1cmUgaG93IHRvIGV4dGVuZCB0byB4IG9yIGlmIHdlIG5lZWQgdG8uXG4gIF9yZWNvcmRTY3JvbGxhYmxlKGV2ZW50KSB7XG4gICAgbGV0IGVsZW0gPSB0aGlzOyAvLyBjYWxsZWQgZnJvbSBldmVudCBoYW5kbGVyIGNvbnRleHQgd2l0aCB0aGlzIGFzIGVsZW1cblxuICAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyBzY3JvbGxhYmxlIChjb250ZW50IG92ZXJmbG93cyksIHRoZW4uLi5cbiAgICBpZiAoZWxlbS5zY3JvbGxIZWlnaHQgIT09IGVsZW0uY2xpZW50SGVpZ2h0KSB7XG4gICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgdG9wLCBzY3JvbGwgZG93biBvbmUgcGl4ZWwgdG8gYWxsb3cgc2Nyb2xsaW5nIHVwXG4gICAgICBpZiAoZWxlbS5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgZWxlbS5zY3JvbGxUb3AgPSAxO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGJvdHRvbSwgc2Nyb2xsIHVwIG9uZSBwaXhlbCB0byBhbGxvdyBzY3JvbGxpbmcgZG93blxuICAgICAgaWYgKGVsZW0uc2Nyb2xsVG9wID09PSBlbGVtLnNjcm9sbEhlaWdodCAtIGVsZW0uY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHQgLSBlbGVtLmNsaWVudEhlaWdodCAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsZW0uYWxsb3dVcCA9IGVsZW0uc2Nyb2xsVG9wID4gMDtcbiAgICBlbGVtLmFsbG93RG93biA9IGVsZW0uc2Nyb2xsVG9wIDwgKGVsZW0uc2Nyb2xsSGVpZ2h0IC0gZWxlbS5jbGllbnRIZWlnaHQpO1xuICAgIGVsZW0ubGFzdFkgPSBldmVudC5vcmlnaW5hbEV2ZW50LnBhZ2VZO1xuICB9XG5cbiAgX3N0b3BTY3JvbGxQcm9wYWdhdGlvbihldmVudCkge1xuICAgIGxldCBlbGVtID0gdGhpczsgLy8gY2FsbGVkIGZyb20gZXZlbnQgaGFuZGxlciBjb250ZXh0IHdpdGggdGhpcyBhcyBlbGVtXG4gICAgbGV0IHVwID0gZXZlbnQucGFnZVkgPCBlbGVtLmxhc3RZO1xuICAgIGxldCBkb3duID0gIXVwO1xuICAgIGVsZW0ubGFzdFkgPSBldmVudC5wYWdlWTtcblxuICAgIGlmKCh1cCAmJiBlbGVtLmFsbG93VXApIHx8IChkb3duICYmIGVsZW0uYWxsb3dEb3duKSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBvZmYtY2FudmFzIG1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXIuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSB0cmlnZ2VyIC0gZWxlbWVudCB0aGF0IHRyaWdnZXJlZCB0aGUgb2ZmLWNhbnZhcyB0byBvcGVuLlxuICAgKiBAZmlyZXMgT2ZmY2FudmFzI29wZW5lZFxuICAgKiBAdG9kbyBhbHNvIHRyaWdnZXIgJ29wZW4nIGV2ZW50P1xuICAgKi9cbiAgb3BlbihldmVudCwgdHJpZ2dlcikge1xuICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykgfHwgdGhpcy5pc1JldmVhbGVkKSB7IHJldHVybjsgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodHJpZ2dlcikge1xuICAgICAgdGhpcy4kbGFzdFRyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9yY2VUbyA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5mb3JjZVRvID09PSAnYm90dG9tJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhbnNpdGlvblRpbWUgJiYgdGhpcy5vcHRpb25zLnRyYW5zaXRpb24gIT09ICdvdmVybGFwJykge1xuICAgICAgdGhpcy4kZWxlbWVudC5zaWJsaW5ncygnW2RhdGEtb2ZmLWNhbnZhcy1jb250ZW50XScpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uVGltZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuc2libGluZ3MoJ1tkYXRhLW9mZi1jYW52YXMtY29udGVudF0nKS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCAnJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaXMtb3BlbicpLnJlbW92ZUNsYXNzKCdpcy1jbG9zZWQnKTtcblxuICAgIHRoaXMuJHRyaWdnZXJzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgIHRoaXMuJGNvbnRlbnQuYWRkQ2xhc3MoJ2lzLW9wZW4tJyArIHRoaXMucG9zaXRpb24pO1xuXG4gICAgLy8gSWYgYGNvbnRlbnRTY3JvbGxgIGlzIHNldCB0byBmYWxzZSwgYWRkIGNsYXNzIGFuZCBkaXNhYmxlIHNjcm9sbGluZyBvbiB0b3VjaCBkZXZpY2VzLlxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudFNjcm9sbCA9PT0gZmFsc2UpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtb2ZmLWNhbnZhcy1vcGVuJykub24oJ3RvdWNobW92ZScsIHRoaXMuX3N0b3BTY3JvbGxpbmcpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vbigndG91Y2hzdGFydCcsIHRoaXMuX3JlY29yZFNjcm9sbGFibGUpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vbigndG91Y2htb3ZlJywgdGhpcy5fc3RvcFNjcm9sbFByb3BhZ2F0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2sgPT09IHRydWUgJiYgdGhpcy5vcHRpb25zLmNvbnRlbnRPdmVybGF5ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpcy1jbG9zYWJsZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0ZvY3VzID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9uZSh0cmFuc2l0aW9uZW5kKHRoaXMuJGVsZW1lbnQpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFfdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgcmV0dXJuOyAvLyBleGl0IGlmIHByZW1hdHVyZWx5IGNsb3NlZFxuICAgICAgICB9XG4gICAgICAgIHZhciBjYW52YXNGb2N1cyA9IF90aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWF1dG9mb2N1c10nKTtcbiAgICAgICAgaWYgKGNhbnZhc0ZvY3VzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FudmFzRm9jdXMuZXEoMCkuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLiRlbGVtZW50LmZpbmQoJ2EsIGJ1dHRvbicpLmVxKDApLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudHJhcEZvY3VzID09PSB0cnVlKSB7XG4gICAgICB0aGlzLiRjb250ZW50LmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBLZXlib2FyZC50cmFwRm9jdXModGhpcy4kZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYWRkQ29udGVudENsYXNzZXMoKTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIG9mZi1jYW52YXMgbWVudSBvcGVucy5cbiAgICAgKiBAZXZlbnQgT2ZmY2FudmFzI29wZW5lZFxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignb3BlbmVkLnpmLm9mZmNhbnZhcycpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgb2ZmLWNhbnZhcyBtZW51LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgLSBvcHRpb25hbCBjYiB0byBmaXJlIGFmdGVyIGNsb3N1cmUuXG4gICAqIEBmaXJlcyBPZmZjYW52YXMjY2xvc2VkXG4gICAqL1xuICBjbG9zZShjYikge1xuICAgIGlmICghdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaXMtb3BlbicpIHx8IHRoaXMuaXNSZXZlYWxlZCkgeyByZXR1cm47IH1cblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlcyB3aGVuIHRoZSBvZmYtY2FudmFzIG1lbnUgb3BlbnMuXG4gICAgICAgKiBAZXZlbnQgT2ZmY2FudmFzI2Nsb3NlZFxuICAgICAgICovXG4gICAgICAgIC50cmlnZ2VyKCdjbG9zZWQuemYub2ZmY2FudmFzJyk7XG5cbiAgICB0aGlzLiRjb250ZW50LnJlbW92ZUNsYXNzKCdpcy1vcGVuLWxlZnQgaXMtb3Blbi10b3AgaXMtb3Blbi1yaWdodCBpcy1vcGVuLWJvdHRvbScpO1xuXG4gICAgLy8gSWYgYGNvbnRlbnRTY3JvbGxgIGlzIHNldCB0byBmYWxzZSwgcmVtb3ZlIGNsYXNzIGFuZCByZS1lbmFibGUgc2Nyb2xsaW5nIG9uIHRvdWNoIGRldmljZXMuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZW50U2Nyb2xsID09PSBmYWxzZSkge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy1vZmYtY2FudmFzLW9wZW4nKS5vZmYoJ3RvdWNobW92ZScsIHRoaXMuX3N0b3BTY3JvbGxpbmcpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJ3RvdWNoc3RhcnQnLCB0aGlzLl9yZWNvcmRTY3JvbGxhYmxlKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQub2ZmKCd0b3VjaG1vdmUnLCB0aGlzLl9zdG9wU2Nyb2xsUHJvcGFnYXRpb24pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25DbGljayA9PT0gdHJ1ZSAmJiB0aGlzLm9wdGlvbnMuY29udGVudE92ZXJsYXkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJG92ZXJsYXkucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NhYmxlJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kdHJpZ2dlcnMuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmFwRm9jdXMgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJGNvbnRlbnQucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgIEtleWJvYXJkLnJlbGVhc2VGb2N1cyh0aGlzLiRlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gdG8gdHJhbnNpdGlvbkVuZCBhbmQgYWRkIGNsYXNzIHdoZW4gZG9uZS5cbiAgICB0aGlzLiRlbGVtZW50Lm9uZSh0cmFuc2l0aW9uZW5kKHRoaXMuJGVsZW1lbnQpLCBmdW5jdGlvbihlKSB7XG4gICAgICBfdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgICBfdGhpcy5fcmVtb3ZlQ29udGVudENsYXNzZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBvZmYtY2FudmFzIG1lbnUgb3BlbiBvciBjbG9zZWQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgLSBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXIuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSB0cmlnZ2VyIC0gZWxlbWVudCB0aGF0IHRyaWdnZXJlZCB0aGUgb2ZmLWNhbnZhcyB0byBvcGVuLlxuICAgKi9cbiAgdG9nZ2xlKGV2ZW50LCB0cmlnZ2VyKSB7XG4gICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgdGhpcy5jbG9zZShldmVudCwgdHJpZ2dlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKGV2ZW50LCB0cmlnZ2VyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBrZXlib2FyZCBpbnB1dCB3aGVuIGRldGVjdGVkLiBXaGVuIHRoZSBlc2NhcGUga2V5IGlzIHByZXNzZWQsIHRoZSBvZmYtY2FudmFzIG1lbnUgY2xvc2VzLCBhbmQgZm9jdXMgaXMgcmVzdG9yZWQgdG8gdGhlIGVsZW1lbnQgdGhhdCBvcGVuZWQgdGhlIG1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZUtleWJvYXJkKGUpIHtcbiAgICBLZXlib2FyZC5oYW5kbGVLZXkoZSwgJ09mZkNhbnZhcycsIHtcbiAgICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdGhpcy4kbGFzdFRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgaGFuZGxlZDogKCkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIG9mZmNhbnZhcyBwbHVnaW4uXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuemYudHJpZ2dlciAuemYub2ZmY2FudmFzJyk7XG4gICAgdGhpcy4kb3ZlcmxheS5vZmYoJy56Zi5vZmZjYW52YXMnKTtcbiAgICBpZiAodGhpcy5vbkxvYWRMaXN0ZW5lcikgJCh3aW5kb3cpLm9mZih0aGlzLm9uTG9hZExpc3RlbmVyKTtcbiAgfVxufVxuXG5PZmZDYW52YXMuZGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBBbGxvdyB0aGUgdXNlciB0byBjbGljayBvdXRzaWRlIG9mIHRoZSBtZW51IHRvIGNsb3NlIGl0LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjbG9zZU9uQ2xpY2s6IHRydWUsXG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gb3ZlcmxheSBvbiB0b3Agb2YgYFtkYXRhLW9mZi1jYW52YXMtY29udGVudF1gLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjb250ZW50T3ZlcmxheTogdHJ1ZSxcblxuICAvKipcbiAgICogVGFyZ2V0IGFuIG9mZi1jYW52YXMgY29udGVudCBjb250YWluZXIgYnkgSUQgdGhhdCBtYXkgYmUgcGxhY2VkIGFueXdoZXJlLiBJZiBudWxsIHRoZSBjbG9zZXN0IGNvbnRlbnQgY29udGFpbmVyIHdpbGwgYmUgdGFrZW4uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUgez9zdHJpbmd9XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIGNvbnRlbnRJZDogbnVsbCxcblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBvZmYtY2FudmFzIGVsZW1lbnQgaXMgbmVzdGVkIGluIGFuIG9mZi1jYW52YXMgY29udGVudC4gVGhpcyBpcyByZXF1aXJlZCB3aGVuIHVzaW5nIHRoZSBjb250ZW50SWQgb3B0aW9uIGZvciBhIG5lc3RlZCBlbGVtZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBuZXN0ZWQ6IG51bGwsXG5cbiAgLyoqXG4gICAqIEVuYWJsZS9kaXNhYmxlIHNjcm9sbGluZyBvZiB0aGUgbWFpbiBjb250ZW50IHdoZW4gYW4gb2ZmIGNhbnZhcyBwYW5lbCBpcyBvcGVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjb250ZW50U2Nyb2xsOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdGltZSBpbiBtcyB0aGUgb3BlbiBhbmQgY2xvc2UgdHJhbnNpdGlvbiByZXF1aXJlcy4gSWYgbm9uZSBzZWxlY3RlZCwgcHVsbHMgZnJvbSBib2R5IHN0eWxlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICovXG4gIHRyYW5zaXRpb25UaW1lOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRyYW5zaXRpb24gZm9yIHRoZSBvZmZjYW52YXMgbWVudS4gT3B0aW9ucyBhcmUgJ3B1c2gnLCAnZGV0YWNoZWQnIG9yICdzbGlkZScuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgcHVzaFxuICAgKi9cbiAgdHJhbnNpdGlvbjogJ3B1c2gnLFxuXG4gIC8qKlxuICAgKiBGb3JjZSB0aGUgcGFnZSB0byBzY3JvbGwgdG8gdG9wIG9yIGJvdHRvbSBvbiBvcGVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHs/c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICBmb3JjZVRvOiBudWxsLFxuXG4gIC8qKlxuICAgKiBBbGxvdyB0aGUgb2ZmY2FudmFzIHRvIHJlbWFpbiBvcGVuIGZvciBjZXJ0YWluIGJyZWFrcG9pbnRzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaXNSZXZlYWxlZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEJyZWFrcG9pbnQgYXQgd2hpY2ggdG8gcmV2ZWFsLiBKUyB3aWxsIHVzZSBhIFJlZ0V4cCB0byB0YXJnZXQgc3RhbmRhcmQgY2xhc3NlcywgaWYgY2hhbmdpbmcgY2xhc3NuYW1lcywgcGFzcyB5b3VyIGNsYXNzIHdpdGggdGhlIGByZXZlYWxDbGFzc2Agb3B0aW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHs/c3RyaW5nfVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqL1xuICByZXZlYWxPbjogbnVsbCxcblxuICAvKipcbiAgICogRm9yY2UgZm9jdXMgdG8gdGhlIG9mZmNhbnZhcyBvbiBvcGVuLiBJZiB0cnVlLCB3aWxsIGZvY3VzIHRoZSBvcGVuaW5nIHRyaWdnZXIgb24gY2xvc2UuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGF1dG9Gb2N1czogdHJ1ZSxcblxuICAvKipcbiAgICogQ2xhc3MgdXNlZCB0byBmb3JjZSBhbiBvZmZjYW52YXMgdG8gcmVtYWluIG9wZW4uIEZvdW5kYXRpb24gZGVmYXVsdHMgZm9yIHRoaXMgYXJlIGByZXZlYWwtZm9yLWxhcmdlYCAmIGByZXZlYWwtZm9yLW1lZGl1bWAuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgcmV2ZWFsLWZvci1cbiAgICogQHRvZG8gaW1wcm92ZSB0aGUgcmVnZXggdGVzdGluZyBmb3IgdGhpcy5cbiAgICovXG4gIHJldmVhbENsYXNzOiAncmV2ZWFsLWZvci0nLFxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBvcHRpb25hbCBmb2N1cyB0cmFwcGluZyB3aGVuIG9wZW5pbmcgYW4gb2ZmY2FudmFzLiBTZXRzIHRhYmluZGV4IG9mIFtkYXRhLW9mZi1jYW52YXMtY29udGVudF0gdG8gLTEgZm9yIGFjY2Vzc2liaWxpdHkgcHVycG9zZXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICB0cmFwRm9jdXM6IGZhbHNlXG59XG5cbmV4cG9ydCB7T2ZmQ2FudmFzfTtcbiIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IE1hZ2VsbGFuIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5tYWdlbGxhbic7XG5Gb3VuZGF0aW9uLnBsdWdpbihNYWdlbGxhbiwgJ01hZ2VsbGFuJyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIE1hZ2VsbGFuIH07XG4iLCIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IG9uTG9hZCwgR2V0WW9EaWdpdHMgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuaW1wb3J0IHsgU21vb3RoU2Nyb2xsIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnNtb290aFNjcm9sbCc7XG5cbi8qKlxuICogTWFnZWxsYW4gbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLm1hZ2VsbGFuXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi5zbW9vdGhTY3JvbGxcbiAqL1xuXG5jbGFzcyBNYWdlbGxhbiBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIE1hZ2VsbGFuLlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgTWFnZWxsYW5cbiAgICogQGZpcmVzIE1hZ2VsbGFuI2luaXRcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIGFkZCB0aGUgdHJpZ2dlciB0by5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgID0gJC5leHRlbmQoe30sIE1hZ2VsbGFuLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnTWFnZWxsYW4nOyAvLyBpZTkgYmFjayBjb21wYXRcblxuICAgIHRoaXMuX2luaXQoKTtcbiAgICB0aGlzLmNhbGNQb2ludHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgTWFnZWxsYW4gcGx1Z2luIGFuZCBjYWxscyBmdW5jdGlvbnMgdG8gZ2V0IGVxdWFsaXplciBmdW5jdGlvbmluZyBvbiBsb2FkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgdmFyIGlkID0gdGhpcy4kZWxlbWVudFswXS5pZCB8fCBHZXRZb0RpZ2l0cyg2LCAnbWFnZWxsYW4nKTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuJHRhcmdldHMgPSAkKCdbZGF0YS1tYWdlbGxhbi10YXJnZXRdJyk7XG4gICAgdGhpcy4kbGlua3MgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2EnKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgJ2RhdGEtcmVzaXplJzogaWQsXG4gICAgICAnZGF0YS1zY3JvbGwnOiBpZCxcbiAgICAgICdpZCc6IGlkXG4gICAgfSk7XG4gICAgdGhpcy4kYWN0aXZlID0gJCgpO1xuICAgIHRoaXMuc2Nyb2xsUG9zID0gcGFyc2VJbnQod2luZG93LnBhZ2VZT2Zmc2V0LCAxMCk7XG5cbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIGFuIGFycmF5IG9mIHBpeGVsIHZhbHVlcyB0aGF0IGFyZSB0aGUgZGVtYXJjYXRpb24gbGluZXMgYmV0d2VlbiBsb2NhdGlvbnMgb24gdGhlIHBhZ2UuXG4gICAqIENhbiBiZSBpbnZva2VkIGlmIG5ldyBlbGVtZW50cyBhcmUgYWRkZWQgb3IgdGhlIHNpemUgb2YgYSBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIGNhbGNQb2ludHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICAgIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMud2luSGVpZ2h0ID0gTWF0aC5yb3VuZChNYXRoLm1heCh3aW5kb3cuaW5uZXJIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0KSk7XG4gICAgdGhpcy5kb2NIZWlnaHQgPSBNYXRoLnJvdW5kKE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCkpO1xuXG4gICAgdGhpcy4kdGFyZ2V0cy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgJHRhciA9ICQodGhpcyksXG4gICAgICAgICAgcHQgPSBNYXRoLnJvdW5kKCR0YXIub2Zmc2V0KCkudG9wIC0gX3RoaXMub3B0aW9ucy50aHJlc2hvbGQpO1xuICAgICAgJHRhci50YXJnZXRQb2ludCA9IHB0O1xuICAgICAgX3RoaXMucG9pbnRzLnB1c2gocHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGV2ZW50cyBmb3IgTWFnZWxsYW4uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgICRib2R5ID0gJCgnaHRtbCwgYm9keScpLFxuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgIGR1cmF0aW9uOiBfdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogICBfdGhpcy5vcHRpb25zLmFuaW1hdGlvbkVhc2luZ1xuICAgICAgICB9O1xuXG4gICAgJCh3aW5kb3cpLm9uZSgnbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBpZihfdGhpcy5vcHRpb25zLmRlZXBMaW5raW5nKXtcbiAgICAgICAgaWYobG9jYXRpb24uaGFzaCl7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsVG9Mb2MobG9jYXRpb24uaGFzaCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF90aGlzLmNhbGNQb2ludHMoKTtcbiAgICAgIF90aGlzLl91cGRhdGVBY3RpdmUoKTtcbiAgICB9KTtcblxuICAgIF90aGlzLm9uTG9hZExpc3RlbmVyID0gb25Mb2FkKCQod2luZG93KSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuJGVsZW1lbnRcbiAgICAgICAgLm9uKHtcbiAgICAgICAgICAncmVzaXplbWUuemYudHJpZ2dlcic6IF90aGlzLnJlZmxvdy5iaW5kKF90aGlzKSxcbiAgICAgICAgICAnc2Nyb2xsbWUuemYudHJpZ2dlcic6IF90aGlzLl91cGRhdGVBY3RpdmUuYmluZChfdGhpcylcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdjbGljay56Zi5tYWdlbGxhbicsICdhW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHZhciBhcnJpdmFsICAgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgIF90aGlzLnNjcm9sbFRvTG9jKGFycml2YWwpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2RlZXBMaW5rU2Nyb2xsID0gZnVuY3Rpb24oZSkge1xuICAgICAgaWYoX3RoaXMub3B0aW9ucy5kZWVwTGlua2luZykge1xuICAgICAgICBfdGhpcy5zY3JvbGxUb0xvYyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsIHRoaXMuX2RlZXBMaW5rU2Nyb2xsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBzY3JvbGwgdG8gYSBnaXZlbiBsb2NhdGlvbiBvbiB0aGUgcGFnZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGxvYyAtIGEgcHJvcGVybHkgZm9ybWF0dGVkIGpRdWVyeSBpZCBzZWxlY3Rvci4gRXhhbXBsZTogJyNmb28nXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgc2Nyb2xsVG9Mb2MobG9jKSB7XG4gICAgdGhpcy5faW5UcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBhbmltYXRpb25FYXNpbmc6IHRoaXMub3B0aW9ucy5hbmltYXRpb25FYXNpbmcsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgdGhyZXNob2xkOiB0aGlzLm9wdGlvbnMudGhyZXNob2xkLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9wdGlvbnMub2Zmc2V0XG4gICAgfTtcblxuICAgIFNtb290aFNjcm9sbC5zY3JvbGxUb0xvYyhsb2MsIG9wdGlvbnMsIGZ1bmN0aW9uKCkge1xuICAgICAgX3RoaXMuX2luVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgbmVjZXNzYXJ5IGZ1bmN0aW9ucyB0byB1cGRhdGUgTWFnZWxsYW4gdXBvbiBET00gY2hhbmdlXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgcmVmbG93KCkge1xuICAgIHRoaXMuY2FsY1BvaW50cygpO1xuICAgIHRoaXMuX3VwZGF0ZUFjdGl2ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHZpc2liaWxpdHkgb2YgYW4gYWN0aXZlIGxvY2F0aW9uIGxpbmssIGFuZCB1cGRhdGVzIHRoZSB1cmwgaGFzaCBmb3IgdGhlIHBhZ2UsIGlmIGRlZXBMaW5raW5nIGVuYWJsZWQuXG4gICAqIEBwcml2YXRlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAZmlyZXMgTWFnZWxsYW4jdXBkYXRlXG4gICAqL1xuICBfdXBkYXRlQWN0aXZlKC8qZXZ0LCBlbGVtLCBzY3JvbGxQb3MqLykge1xuICAgIGlmKHRoaXMuX2luVHJhbnNpdGlvbikgcmV0dXJuO1xuXG4gICAgY29uc3QgbmV3U2Nyb2xsUG9zID0gcGFyc2VJbnQod2luZG93LnBhZ2VZT2Zmc2V0LCAxMCk7XG4gICAgY29uc3QgaXNTY3JvbGxpbmdVcCA9IHRoaXMuc2Nyb2xsUG9zID4gbmV3U2Nyb2xsUG9zO1xuICAgIHRoaXMuc2Nyb2xsUG9zID0gbmV3U2Nyb2xsUG9zO1xuXG4gICAgbGV0IGFjdGl2ZUlkeDtcbiAgICAvLyBCZWZvcmUgdGhlIGZpcnN0IHBvaW50OiBubyBsaW5rXG4gICAgaWYobmV3U2Nyb2xsUG9zIDwgdGhpcy5wb2ludHNbMF0peyAvKiBkbyBub3RoaW5nICovIH1cbiAgICAvLyBBdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlOiBsYXN0IGxpbmtcbiAgICBlbHNlIGlmKG5ld1Njcm9sbFBvcyArIHRoaXMud2luSGVpZ2h0ID09PSB0aGlzLmRvY0hlaWdodCl7IGFjdGl2ZUlkeCA9IHRoaXMucG9pbnRzLmxlbmd0aCAtIDE7IH1cbiAgICAvLyBPdGhlcndoaXNlLCB1c2UgdGhlIGxhc3QgdmlzaWJsZSBsaW5rXG4gICAgZWxzZXtcbiAgICAgIGNvbnN0IHZpc2libGVMaW5rcyA9IHRoaXMucG9pbnRzLmZpbHRlcigocCwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gKHAgLSB0aGlzLm9wdGlvbnMub2Zmc2V0IC0gKGlzU2Nyb2xsaW5nVXAgPyB0aGlzLm9wdGlvbnMudGhyZXNob2xkIDogMCkpIDw9IG5ld1Njcm9sbFBvcztcbiAgICAgIH0pO1xuICAgICAgYWN0aXZlSWR4ID0gdmlzaWJsZUxpbmtzLmxlbmd0aCA/IHZpc2libGVMaW5rcy5sZW5ndGggLSAxIDogMDtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIG5ldyBhY3RpdmUgbGlua1xuICAgIGNvbnN0ICRvbGRBY3RpdmUgPSB0aGlzLiRhY3RpdmU7XG4gICAgbGV0IGFjdGl2ZUhhc2ggPSAnJztcbiAgICBpZih0eXBlb2YgYWN0aXZlSWR4ICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICB0aGlzLiRhY3RpdmUgPSB0aGlzLiRsaW5rcy5maWx0ZXIoJ1tocmVmPVwiIycgKyB0aGlzLiR0YXJnZXRzLmVxKGFjdGl2ZUlkeCkuZGF0YSgnbWFnZWxsYW4tdGFyZ2V0JykgKyAnXCJdJyk7XG4gICAgICBpZiAodGhpcy4kYWN0aXZlLmxlbmd0aCkgYWN0aXZlSGFzaCA9IHRoaXMuJGFjdGl2ZVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuJGFjdGl2ZSA9ICQoKTtcbiAgICB9XG4gICAgY29uc3QgaXNOZXdBY3RpdmUgPSAhKCF0aGlzLiRhY3RpdmUubGVuZ3RoICYmICEkb2xkQWN0aXZlLmxlbmd0aCkgJiYgIXRoaXMuJGFjdGl2ZS5pcygkb2xkQWN0aXZlKTtcbiAgICBjb25zdCBpc05ld0hhc2ggPSBhY3RpdmVIYXNoICE9PSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICAgIC8vIFVwZGF0ZSB0aGUgYWN0aXZlIGxpbmsgZWxlbWVudFxuICAgIGlmKGlzTmV3QWN0aXZlKSB7XG4gICAgICAkb2xkQWN0aXZlLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB0aGlzLiRhY3RpdmUuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGhhc2ggKGl0IG1heSBoYXZlIGNoYW5nZWQgd2l0aCB0aGUgc2FtZSBhY3RpdmUgbGluaylcbiAgICBpZih0aGlzLm9wdGlvbnMuZGVlcExpbmtpbmcgJiYgaXNOZXdIYXNoKXtcbiAgICAgIGlmKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSl7XG4gICAgICAgIC8vIFNldCBvciByZW1vdmUgdGhlIGhhc2ggKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUyOTg2ODQvNDMxNzM4NFxuICAgICAgICBjb25zdCB1cmwgPSBhY3RpdmVIYXNoID8gYWN0aXZlSGFzaCA6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmwpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYWN0aXZlSGFzaDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNOZXdBY3RpdmUpIHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZXMgd2hlbiBtYWdlbGxhbiBpcyBmaW5pc2hlZCB1cGRhdGluZyB0byB0aGUgbmV3IGFjdGl2ZSBlbGVtZW50LlxuICAgICAgICogQGV2ZW50IE1hZ2VsbGFuI3VwZGF0ZVxuICAgICAgICovXG4gICAgXHR0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3VwZGF0ZS56Zi5tYWdlbGxhbicsIFt0aGlzLiRhY3RpdmVdKTtcblx0ICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgYW4gaW5zdGFuY2Ugb2YgTWFnZWxsYW4gYW5kIHJlc2V0cyB0aGUgdXJsIG9mIHRoZSB3aW5kb3cuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy4kZWxlbWVudC5vZmYoJy56Zi50cmlnZ2VyIC56Zi5tYWdlbGxhbicpXG4gICAgICAgIC5maW5kKGAuJHt0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3N9YCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5kZWVwTGlua2luZyl7XG4gICAgICB2YXIgaGFzaCA9IHRoaXMuJGFjdGl2ZVswXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoaGFzaCwgJycpO1xuICAgIH1cblxuICAgICQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2UnLCB0aGlzLl9kZWVwTGlua1Njcm9sbClcbiAgICBpZiAodGhpcy5vbkxvYWRMaXN0ZW5lcikgJCh3aW5kb3cpLm9mZih0aGlzLm9uTG9hZExpc3RlbmVyKTtcbiAgfVxufVxuXG4vKipcbiAqIERlZmF1bHQgc2V0dGluZ3MgZm9yIHBsdWdpblxuICovXG5NYWdlbGxhbi5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lLCBpbiBtcywgdGhlIGFuaW1hdGVkIHNjcm9sbGluZyBzaG91bGQgdGFrZSBiZXR3ZWVuIGxvY2F0aW9ucy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCA1MDBcbiAgICovXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiA1MDAsXG4gIC8qKlxuICAgKiBBbmltYXRpb24gc3R5bGUgdG8gdXNlIHdoZW4gc2Nyb2xsaW5nIGJldHdlZW4gbG9jYXRpb25zLiBDYW4gYmUgYCdzd2luZydgIG9yIGAnbGluZWFyJ2AuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2xpbmVhcidcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9hbmltYXRlfEpxdWVyeSBhbmltYXRlfVxuICAgKi9cbiAgYW5pbWF0aW9uRWFzaW5nOiAnbGluZWFyJyxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBwaXhlbHMgdG8gdXNlIGFzIGEgbWFya2VyIGZvciBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDUwXG4gICAqL1xuICB0aHJlc2hvbGQ6IDUwLFxuICAvKipcbiAgICogQ2xhc3MgYXBwbGllZCB0byB0aGUgYWN0aXZlIGxvY2F0aW9ucyBsaW5rIG9uIHRoZSBtYWdlbGxhbiBjb250YWluZXIuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2lzLWFjdGl2ZSdcbiAgICovXG4gIGFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJyxcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgc2NyaXB0IHRvIG1hbmlwdWxhdGUgdGhlIHVybCBvZiB0aGUgY3VycmVudCBwYWdlLCBhbmQgaWYgc3VwcG9ydGVkLCBhbHRlciB0aGUgaGlzdG9yeS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRlZXBMaW5raW5nOiBmYWxzZSxcbiAgLyoqXG4gICAqIE51bWJlciBvZiBwaXhlbHMgdG8gb2Zmc2V0IHRoZSBzY3JvbGwgb2YgdGhlIHBhZ2Ugb24gaXRlbSBjbGljayBpZiB1c2luZyBhIHN0aWNreSBuYXYgYmFyLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDBcbiAgICovXG4gIG9mZnNldDogMFxufVxuXG5leHBvcnQge01hZ2VsbGFufTtcbiIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IEFjY29yZGlvbk1lbnUgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLmFjY29yZGlvbk1lbnUnO1xuRm91bmRhdGlvbi5wbHVnaW4oQWNjb3JkaW9uTWVudSwgJ0FjY29yZGlvbk1lbnUnKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgQWNjb3JkaW9uTWVudSB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkJztcbmltcG9ydCB7IE5lc3QgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5uZXN0JztcbmltcG9ydCB7IEdldFlvRGlnaXRzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcblxuLyoqXG4gKiBBY2NvcmRpb25NZW51IG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5hY2NvcmRpb25NZW51XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm5lc3RcbiAqL1xuXG5jbGFzcyBBY2NvcmRpb25NZW51IGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYW4gYWNjb3JkaW9uIG1lbnUuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBBY2NvcmRpb25NZW51XG4gICAqIEBmaXJlcyBBY2NvcmRpb25NZW51I2luaXRcbiAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIG1ha2UgaW50byBhbiBhY2NvcmRpb24gbWVudS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQWNjb3JkaW9uTWVudS5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ0FjY29yZGlvbk1lbnUnOyAvLyBpZTkgYmFjayBjb21wYXRcblxuICAgIHRoaXMuX2luaXQoKTtcblxuICAgIEtleWJvYXJkLnJlZ2lzdGVyKCdBY2NvcmRpb25NZW51Jywge1xuICAgICAgJ0VOVEVSJzogJ3RvZ2dsZScsXG4gICAgICAnU1BBQ0UnOiAndG9nZ2xlJyxcbiAgICAgICdBUlJPV19SSUdIVCc6ICdvcGVuJyxcbiAgICAgICdBUlJPV19VUCc6ICd1cCcsXG4gICAgICAnQVJST1dfRE9XTic6ICdkb3duJyxcbiAgICAgICdBUlJPV19MRUZUJzogJ2Nsb3NlJyxcbiAgICAgICdFU0NBUEUnOiAnY2xvc2VBbGwnXG4gICAgfSk7XG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhY2NvcmRpb24gbWVudSBieSBoaWRpbmcgYWxsIG5lc3RlZCBtZW51cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIE5lc3QuRmVhdGhlcih0aGlzLiRlbGVtZW50LCAnYWNjb3JkaW9uJyk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1zdWJtZW51XScpLm5vdCgnLmlzLWFjdGl2ZScpLnNsaWRlVXAoMCk7Ly8uZmluZCgnYScpLmNzcygncGFkZGluZy1sZWZ0JywgJzFyZW0nKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgJ3JvbGUnOiAndHJlZScsXG4gICAgICAnYXJpYS1tdWx0aXNlbGVjdGFibGUnOiB0aGlzLm9wdGlvbnMubXVsdGlPcGVuXG4gICAgfSk7XG5cbiAgICB0aGlzLiRtZW51TGlua3MgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5pcy1hY2NvcmRpb24tc3VibWVudS1wYXJlbnQnKTtcbiAgICB0aGlzLiRtZW51TGlua3MuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyIGxpbmtJZCA9IHRoaXMuaWQgfHwgR2V0WW9EaWdpdHMoNiwgJ2FjYy1tZW51LWxpbmsnKSxcbiAgICAgICAgICAkZWxlbSA9ICQodGhpcyksXG4gICAgICAgICAgJHN1YiA9ICRlbGVtLmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XScpLFxuICAgICAgICAgIHN1YklkID0gJHN1YlswXS5pZCB8fCBHZXRZb0RpZ2l0cyg2LCAnYWNjLW1lbnUnKSxcbiAgICAgICAgICBpc0FjdGl2ZSA9ICRzdWIuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICBpZihfdGhpcy5vcHRpb25zLnBhcmVudExpbmspIHtcbiAgICAgICAgbGV0ICRhbmNob3IgPSAkZWxlbS5jaGlsZHJlbignYScpO1xuICAgICAgICAkYW5jaG9yLmNsb25lKCkucHJlcGVuZFRvKCRzdWIpLndyYXAoJzxsaSBkYXRhLWlzLXBhcmVudC1saW5rIGNsYXNzPVwiaXMtc3VibWVudS1wYXJlbnQtaXRlbSBpcy1zdWJtZW51LWl0ZW0gaXMtYWNjb3JkaW9uLXN1Ym1lbnUtaXRlbVwiPjwvbGk+Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmKF90aGlzLm9wdGlvbnMuc3VibWVudVRvZ2dsZSkge1xuICAgICAgICAkZWxlbS5hZGRDbGFzcygnaGFzLXN1Ym1lbnUtdG9nZ2xlJyk7XG4gICAgICAgICRlbGVtLmNoaWxkcmVuKCdhJykuYWZ0ZXIoJzxidXR0b24gaWQ9XCInICsgbGlua0lkICsgJ1wiIGNsYXNzPVwic3VibWVudS10b2dnbGVcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHN1YklkICsgJ1wiIGFyaWEtZXhwYW5kZWQ9XCInICsgaXNBY3RpdmUgKyAnXCIgdGl0bGU9XCInICsgX3RoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlVGV4dCArICdcIj48c3BhbiBjbGFzcz1cInN1Ym1lbnUtdG9nZ2xlLXRleHRcIj4nICsgX3RoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlVGV4dCArICc8L3NwYW4+PC9idXR0b24+Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbS5hdHRyKHtcbiAgICAgICAgICAnYXJpYS1jb250cm9scyc6IHN1YklkLFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJzogaXNBY3RpdmUsXG4gICAgICAgICAgJ2lkJzogbGlua0lkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgJHN1Yi5hdHRyKHtcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxpbmtJZCxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogIWlzQWN0aXZlLFxuICAgICAgICAncm9sZSc6ICdncm91cCcsXG4gICAgICAgICdpZCc6IHN1YklkXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ2xpJykuYXR0cih7XG4gICAgICAncm9sZSc6ICd0cmVlaXRlbSdcbiAgICB9KTtcbiAgICB2YXIgaW5pdFBhbmVzID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXMtYWN0aXZlJyk7XG4gICAgaWYoaW5pdFBhbmVzLmxlbmd0aCl7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgaW5pdFBhbmVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgX3RoaXMuZG93bigkKHRoaXMpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciBpdGVtcyB3aXRoaW4gdGhlIG1lbnUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkc3VibWVudSA9ICQodGhpcykuY2hpbGRyZW4oJ1tkYXRhLXN1Ym1lbnVdJyk7XG5cbiAgICAgIGlmICgkc3VibWVudS5sZW5ndGgpIHtcbiAgICAgICAgaWYoX3RoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlKSB7XG4gICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Ym1lbnUtdG9nZ2xlJykub2ZmKCdjbGljay56Zi5hY2NvcmRpb25NZW51Jykub24oJ2NsaWNrLnpmLmFjY29yZGlvbk1lbnUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBfdGhpcy50b2dnbGUoJHN1Ym1lbnUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignYScpLm9mZignY2xpY2suemYuYWNjb3JkaW9uTWVudScpLm9uKCdjbGljay56Zi5hY2NvcmRpb25NZW51JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIF90aGlzLnRvZ2dsZSgkc3VibWVudSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLm9uKCdrZXlkb3duLnpmLmFjY29yZGlvbm1lbnUnLCBmdW5jdGlvbihlKXtcbiAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyksXG4gICAgICAgICAgJGVsZW1lbnRzID0gJGVsZW1lbnQucGFyZW50KCd1bCcpLmNoaWxkcmVuKCdsaScpLFxuICAgICAgICAgICRwcmV2RWxlbWVudCxcbiAgICAgICAgICAkbmV4dEVsZW1lbnQsXG4gICAgICAgICAgJHRhcmdldCA9ICRlbGVtZW50LmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XScpO1xuXG4gICAgICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICRwcmV2RWxlbWVudCA9ICRlbGVtZW50cy5lcShNYXRoLm1heCgwLCBpLTEpKS5maW5kKCdhJykuZmlyc3QoKTtcbiAgICAgICAgICAkbmV4dEVsZW1lbnQgPSAkZWxlbWVudHMuZXEoTWF0aC5taW4oaSsxLCAkZWxlbWVudHMubGVuZ3RoLTEpKS5maW5kKCdhJykuZmlyc3QoKTtcblxuICAgICAgICAgIGlmICgkKHRoaXMpLmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XTp2aXNpYmxlJykubGVuZ3RoKSB7IC8vIGhhcyBvcGVuIHN1YiBtZW51XG4gICAgICAgICAgICAkbmV4dEVsZW1lbnQgPSAkZWxlbWVudC5maW5kKCdsaTpmaXJzdC1jaGlsZCcpLmZpbmQoJ2EnKS5maXJzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmZpcnN0LWNoaWxkJykpIHsgLy8gaXMgZmlyc3QgZWxlbWVudCBvZiBzdWIgbWVudVxuICAgICAgICAgICAgJHByZXZFbGVtZW50ID0gJGVsZW1lbnQucGFyZW50cygnbGknKS5maXJzdCgpLmZpbmQoJ2EnKS5maXJzdCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoJHByZXZFbGVtZW50LnBhcmVudHMoJ2xpJykuZmlyc3QoKS5jaGlsZHJlbignW2RhdGEtc3VibWVudV06dmlzaWJsZScpLmxlbmd0aCkgeyAvLyBpZiBwcmV2aW91cyBlbGVtZW50IGhhcyBvcGVuIHN1YiBtZW51XG4gICAgICAgICAgICAkcHJldkVsZW1lbnQgPSAkcHJldkVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCdsaTpsYXN0LWNoaWxkJykuZmluZCgnYScpLmZpcnN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCc6bGFzdC1jaGlsZCcpKSB7IC8vIGlzIGxhc3QgZWxlbWVudCBvZiBzdWIgbWVudVxuICAgICAgICAgICAgJG5leHRFbGVtZW50ID0gJGVsZW1lbnQucGFyZW50cygnbGknKS5maXJzdCgpLm5leHQoJ2xpJykuZmluZCgnYScpLmZpcnN0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgS2V5Ym9hcmQuaGFuZGxlS2V5KGUsICdBY2NvcmRpb25NZW51Jywge1xuICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJHRhcmdldC5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICBfdGhpcy5kb3duKCR0YXJnZXQpO1xuICAgICAgICAgICAgJHRhcmdldC5maW5kKCdsaScpLmZpcnN0KCkuZmluZCgnYScpLmZpcnN0KCkuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJHRhcmdldC5sZW5ndGggJiYgISR0YXJnZXQuaXMoJzpoaWRkZW4nKSkgeyAvLyBjbG9zZSBhY3RpdmUgc3ViIG9mIHRoaXMgaXRlbVxuICAgICAgICAgICAgX3RoaXMudXAoJHRhcmdldCk7XG4gICAgICAgICAgfSBlbHNlIGlmICgkZWxlbWVudC5wYXJlbnQoJ1tkYXRhLXN1Ym1lbnVdJykubGVuZ3RoKSB7IC8vIGNsb3NlIGN1cnJlbnRseSBvcGVuIHN1YlxuICAgICAgICAgICAgX3RoaXMudXAoJGVsZW1lbnQucGFyZW50KCdbZGF0YS1zdWJtZW51XScpKTtcbiAgICAgICAgICAgICRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmlyc3QoKS5maW5kKCdhJykuZmlyc3QoKS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRwcmV2RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkb3duOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkbmV4dEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkZWxlbWVudC5jaGlsZHJlbignW2RhdGEtc3VibWVudV0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzLnRvZ2dsZSgkZWxlbWVudC5jaGlsZHJlbignW2RhdGEtc3VibWVudV0nKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlQWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy5oaWRlQWxsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZWQ6IGZ1bmN0aW9uKHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pOy8vLmF0dHIoJ3RhYmluZGV4JywgMCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFsbCBwYW5lcyBvZiB0aGUgbWVudS5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBoaWRlQWxsKCkge1xuICAgIHRoaXMudXAodGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1zdWJtZW51XScpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbGwgcGFuZXMgb2YgdGhlIG1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgc2hvd0FsbCgpIHtcbiAgICB0aGlzLmRvd24odGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1zdWJtZW51XScpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBvcGVuL2Nsb3NlIHN0YXRlIG9mIGEgc3VibWVudS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IC0gdGhlIHN1Ym1lbnUgdG8gdG9nZ2xlXG4gICAqL1xuICB0b2dnbGUoJHRhcmdldCl7XG4gICAgaWYoISR0YXJnZXQuaXMoJzphbmltYXRlZCcpKSB7XG4gICAgICBpZiAoISR0YXJnZXQuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICB0aGlzLnVwKCR0YXJnZXQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZG93bigkdGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHN1Yi1tZW51IGRlZmluZWQgYnkgYCR0YXJnZXRgLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIFN1Yi1tZW51IHRvIG9wZW4uXG4gICAqIEBmaXJlcyBBY2NvcmRpb25NZW51I2Rvd25cbiAgICovXG4gIGRvd24oJHRhcmdldCkge1xuICAgIC8vIElmIGhhdmluZyBtdWx0aXBsZSBzdWJtZW51cyBhY3RpdmUgaXMgZGlzYWJsZWQsIGNsb3NlIGFsbCB0aGUgc3VibWVudXNcbiAgICAvLyB0aGF0IGFyZSBub3QgcGFyZW50cyBvciBjaGlsZHJlbiBvZiB0aGUgdGFyZ2V0ZWQgc3VibWVudS5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5tdWx0aU9wZW4pIHtcbiAgICAgIC8vIFRoZSBcImJyYW5jaFwiIG9mIHRoZSB0YXJnZXR0ZWQgc3VibWVudSwgZnJvbSB0aGUgY29tcG9uZW50IHJvb3QgdG9cbiAgICAgIC8vIHRoZSBhY3RpdmUgc3VibWVudXMgbmVzdGVkIGluIGl0LlxuICAgICAgY29uc3QgJHRhcmdldEJyYW5jaCA9ICR0YXJnZXQucGFyZW50c1VudGlsKHRoaXMuJGVsZW1lbnQpXG4gICAgICAgIC5hZGQoJHRhcmdldClcbiAgICAgICAgLmFkZCgkdGFyZ2V0LmZpbmQoJy5pcy1hY3RpdmUnKSk7XG4gICAgICAvLyBBbGwgdGhlIGFjdGl2ZSBzdWJtZW51cyB0aGF0IGFyZSBub3QgaW4gdGhlIGJyYW5jaC5cbiAgICAgIGNvbnN0ICRvdGhlcnNBY3RpdmVTdWJtZW51cyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLmlzLWFjdGl2ZScpLm5vdCgkdGFyZ2V0QnJhbmNoKTtcblxuICAgICAgdGhpcy51cCgkb3RoZXJzQWN0aXZlU3VibWVudXMpO1xuICAgIH1cblxuICAgICR0YXJnZXRcbiAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgIC5hdHRyKHsgJ2FyaWEtaGlkZGVuJzogZmFsc2UgfSk7XG5cbiAgICBpZih0aGlzLm9wdGlvbnMuc3VibWVudVRvZ2dsZSkge1xuICAgICAgJHRhcmdldC5wcmV2KCcuc3VibWVudS10b2dnbGUnKS5hdHRyKHsnYXJpYS1leHBhbmRlZCc6IHRydWV9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkdGFyZ2V0LnBhcmVudCgnLmlzLWFjY29yZGlvbi1zdWJtZW51LXBhcmVudCcpLmF0dHIoeydhcmlhLWV4cGFuZGVkJzogdHJ1ZX0pO1xuICAgIH1cblxuICAgICR0YXJnZXQuc2xpZGVEb3duKHRoaXMub3B0aW9ucy5zbGlkZVNwZWVkLCAoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgZG9uZSBvcGVuaW5nLlxuICAgICAgICogQGV2ZW50IEFjY29yZGlvbk1lbnUjZG93blxuICAgICAgICovXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2Rvd24uemYuYWNjb3JkaW9uTWVudScsIFskdGFyZ2V0XSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBzdWItbWVudSBkZWZpbmVkIGJ5IGAkdGFyZ2V0YC4gQWxsIHN1Yi1tZW51cyBpbnNpZGUgdGhlIHRhcmdldCB3aWxsIGJlIGNsb3NlZCBhcyB3ZWxsLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIFN1Yi1tZW51IHRvIGNsb3NlLlxuICAgKiBAZmlyZXMgQWNjb3JkaW9uTWVudSN1cFxuICAgKi9cbiAgdXAoJHRhcmdldCkge1xuICAgIGNvbnN0ICRzdWJtZW51cyA9ICR0YXJnZXQuZmluZCgnW2RhdGEtc3VibWVudV0nKTtcbiAgICBjb25zdCAkYWxsbWVudXMgPSAkdGFyZ2V0LmFkZCgkc3VibWVudXMpO1xuXG4gICAgJHN1Ym1lbnVzLnNsaWRlVXAoMCk7XG4gICAgJGFsbG1lbnVzXG4gICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlKSB7XG4gICAgICAkYWxsbWVudXMucHJldignLnN1Ym1lbnUtdG9nZ2xlJykuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkYWxsbWVudXMucGFyZW50KCcuaXMtYWNjb3JkaW9uLXN1Ym1lbnUtcGFyZW50JykuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAkdGFyZ2V0LnNsaWRlVXAodGhpcy5vcHRpb25zLnNsaWRlU3BlZWQsICgpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZXMgd2hlbiB0aGUgbWVudSBpcyBkb25lIGNvbGxhcHNpbmcgdXAuXG4gICAgICAgKiBAZXZlbnQgQWNjb3JkaW9uTWVudSN1cFxuICAgICAgICovXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3VwLnpmLmFjY29yZGlvbk1lbnUnLCBbJHRhcmdldF0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGFuIGluc3RhbmNlIG9mIGFjY29yZGlvbiBtZW51LlxuICAgKiBAZmlyZXMgQWNjb3JkaW9uTWVudSNkZXN0cm95ZWRcbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtc3VibWVudV0nKS5zbGlkZURvd24oMCkuY3NzKCdkaXNwbGF5JywgJycpO1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnYScpLm9mZignY2xpY2suemYuYWNjb3JkaW9uTWVudScpO1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtaXMtcGFyZW50LWxpbmtdJykuZGV0YWNoKCk7XG5cbiAgICBpZih0aGlzLm9wdGlvbnMuc3VibWVudVRvZ2dsZSkge1xuICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCcuaGFzLXN1Ym1lbnUtdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2hhcy1zdWJtZW51LXRvZ2dsZScpO1xuICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCcuc3VibWVudS10b2dnbGUnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBOZXN0LkJ1cm4odGhpcy4kZWxlbWVudCwgJ2FjY29yZGlvbicpO1xuICB9XG59XG5cbkFjY29yZGlvbk1lbnUuZGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwYXJlbnQgbGluayB0byB0aGUgc3VibWVudS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHBhcmVudExpbms6IGZhbHNlLFxuICAvKipcbiAgICogQW1vdW50IG9mIHRpbWUgdG8gYW5pbWF0ZSB0aGUgb3BlbmluZyBvZiBhIHN1Ym1lbnUgaW4gbXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMjUwXG4gICAqL1xuICBzbGlkZVNwZWVkOiAyNTAsXG4gIC8qKlxuICAgKiBBZGRzIGEgc2VwYXJhdGUgc3VibWVudSB0b2dnbGUgYnV0dG9uLiBUaGlzIGFsbG93cyB0aGUgcGFyZW50IGl0ZW0gdG8gaGF2ZSBhIGxpbmsuXG4gICAqIEBvcHRpb25cbiAgICogQGV4YW1wbGUgdHJ1ZVxuICAgKi9cbiAgc3VibWVudVRvZ2dsZTogZmFsc2UsXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB1c2VkIGZvciB0aGUgc3VibWVudSB0b2dnbGUgaWYgZW5hYmxlZC4gVGhpcyBpcyB1c2VkIGZvciBzY3JlZW4gcmVhZGVycyBvbmx5LlxuICAgKiBAb3B0aW9uXG4gICAqIEBleGFtcGxlIHRydWVcbiAgICovXG4gIHN1Ym1lbnVUb2dnbGVUZXh0OiAnVG9nZ2xlIG1lbnUnLFxuICAvKipcbiAgICogQWxsb3cgdGhlIG1lbnUgdG8gaGF2ZSBtdWx0aXBsZSBvcGVuIHBhbmVzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBtdWx0aU9wZW46IHRydWVcbn07XG5cbmV4cG9ydCB7QWNjb3JkaW9uTWVudX07XG4iLCIoIGZ1bmN0aW9uKCAkICkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgJCggZG9jdW1lbnQgKS5mb3VuZGF0aW9uKCk7XG59KSggalF1ZXJ5ICk7XG4iXX0=
