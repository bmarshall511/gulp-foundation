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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uY29yZS5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi5jb3JlLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmNvcmUucGx1Z2luLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmNvcmUudXRpbHMuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5LmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIiQiLCJQbHVnaW4iLCJydGwiLCJHZXRZb0RpZ2l0cyIsInRyYW5zaXRpb25lbmQiLCJSZWdFeHBFc2NhcGUiLCJvbkxvYWQiLCJ3aW5kb3ciLCJGT1VOREFUSU9OX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiX3BsdWdpbnMiLCJfdXVpZHMiLCJwbHVnaW4iLCJjbGFzc05hbWUiLCJuYW1lIiwiZnVuY3Rpb25OYW1lIiwiYXR0ck5hbWUiLCJoeXBoZW5hdGUiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbk5hbWUiLCJ1bnJlZ2lzdGVyUGx1Z2luIiwicmVJbml0IiwiaXNKUSIsInBsdWdpbnMiLCJ0eXBlIiwiX3RoaXMiLCJmbnMiLCJwbGdzIiwicCIsIk9iamVjdCIsImNvbnNvbGUiLCJyZWZsb3ciLCIkZWxlbSIsIiRlbCIsIm9wdHMiLCJ0aGluZyIsIm9wdCIsImVsIiwicGFyc2VWYWx1ZSIsImdldEZuTmFtZSIsImFkZFRvSnF1ZXJ5IiwiZm91bmRhdGlvbiIsIiRub0pTIiwiTWVkaWFRdWVyeSIsImFyZ3MiLCJBcnJheSIsInBsdWdDbGFzcyIsInRocm90dGxlIiwidGltZXIiLCJjb250ZXh0Iiwic2V0VGltZW91dCIsImZ1bmMiLCJEYXRlIiwidmVuZG9ycyIsImkiLCJ2cCIsImxhc3RUaW1lIiwibm93IiwibmV4dFRpbWUiLCJNYXRoIiwiY2FsbGJhY2siLCJzdGFydCIsIkZ1bmN0aW9uIiwiYUFyZ3MiLCJmVG9CaW5kIiwiZk5PUCIsImZCb3VuZCIsImZ1bmNOYW1lUmVnZXgiLCJyZXN1bHRzIiwiZm4iLCJpc05hTiIsInN0ciIsInBhcnNlRmxvYXQiLCJnZXRQbHVnaW5OYW1lIiwib2JqIiwibGVuZ3RoIiwibmFtZXNwYWNlIiwidHJhbnNpdGlvbnMiLCJlbGVtIiwiZG9jdW1lbnQiLCJlbmQiLCJkaWRMb2FkIiwiZXZlbnRUeXBlIiwiY2IiLCJpZ25vcmVMZWF2ZVdpbmRvdyIsImlnbm9yZVJlYXBwZWFyIiwicmVzdCIsImhhbmRsZXIiLCJlTGVhdmUiLCJlUmVlbnRlciIsImRlZmF1bHRRdWVyaWVzIiwibGFuZHNjYXBlIiwicG9ydHJhaXQiLCJyZXRpbmEiLCJzdHlsZU1lZGlhIiwic3R5bGUiLCJzY3JpcHQiLCJpbmZvIiwibWF0Y2hNZWRpdW0iLCJ0ZXh0IiwibWF0Y2hlcyIsIm1lZGlhIiwicXVlcmllcyIsImN1cnJlbnQiLCJfaW5pdCIsInNlbGYiLCIkbWV0YSIsImV4dHJhY3RlZFN0eWxlcyIsIm5hbWVkUXVlcmllcyIsInBhcnNlU3R5bGVUb09iamVjdCIsInZhbHVlIiwiYXRMZWFzdCIsInF1ZXJ5IiwiaXMiLCJzaXplIiwiZ2V0IiwiX2dldEN1cnJlbnRTaXplIiwibWF0Y2hlZCIsIl93YXRjaGVyIiwibmV3U2l6ZSIsImN1cnJlbnRTaXplIiwic3R5bGVPYmplY3QiLCJwYXJ0cyIsInBhcmFtIiwia2V5IiwidmFsIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmV0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFNBQUEsZ0NBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxpQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsUUFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVBQUEsR0FBQTtBQUEyQixpQkFBQSxNQUFBLENBQUEsU0FBQSxDQUFBO0FBQTRCLFNBRHZEO0FBRUE7QUFBQSxpQkFBQSxnQkFBQSxHQUFBO0FBQWlDLGlCQUFBLE1BQUE7QUFBZSxTQUZoRDtBQUdBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBO0FBQ0E7OztBQUFBLGVBQUEsTUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7QUFBc0QsZUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsQ0FBQTtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUEsYUFBQSxtQkFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBO0FBQUE7OztBQUFBLFlBQUEsbUNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsZ0JBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJDQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1DQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSw2Q0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxpQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLDZDQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG9EQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLHdDQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxtREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSx1Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxRQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLG9EQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsS0FBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxtREFBQSxDQUFBLEtBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLGFBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsbURBQUEsQ0FBQSxhQUFBLENBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxjQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLG1EQUFBLENBQUEsY0FBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsZUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxtREFBQSxDQUFBLGVBQUEs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VyxDQUFDQSxHQUFHLENBQUosR0FBSSxDQUFKLEVBQVhBLEdBQVcsQ0FBWEE7QUFDRDs7QUFDRCxtQkFBQSxHQUFBO0FBakJZLFdBQUEsRUFBZE4sRUFBYyxDQUFkQTtBQW9CQSxpQkFBQSxXQUFBO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3T0QsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtDQUFBOzs7Ozs7QVBVQTtDQVZBIiwiZmlsZSI6ImZvdW5kYXRpb24vZm91bmRhdGlvbi5jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3VuZGF0aW9uLmNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gLS0tIEZvdW5kYXRpb24gQ29yZSBBUEkgLS0tXG4vLyBJbml0aWFsaXplIEZvdW5kYXRpb24gYW5kIGFkZCBzb21lIHV0aWxpdGllcyB0byBpdHMgcHVibGljIEFQSSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cbi8vIFBsZWFzZSBub3RlIHRoYXQgZXZlcnkgdXRpbGl0eSBkbyBub3QgaGF2ZSB0byBiZSBhZGRlZCB0byB0aGUgY29yZSBBUEkuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcbmltcG9ydCB7IHJ0bCwgR2V0WW9EaWdpdHMsIHRyYW5zaXRpb25lbmQsIFJlZ0V4cEVzY2FwZSwgb25Mb2FkIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcblxuRm91bmRhdGlvbi5hZGRUb0pxdWVyeSgkKTtcblxuLy8gRXZlcnkgcGx1Z2luIGRlcGVuZHMgb24gcGx1Z2luIG5vdywgd2UgY2FuIGluY2x1ZGUgdGhhdCBvbiB0aGUgY29yZSBmb3IgdGhlXG4vLyBzY3JpcHQgaW5jbHVzaW9uIHBhdGguXG5Gb3VuZGF0aW9uLlBsdWdpbiA9IFBsdWdpbjtcblxuLy8gVGhlc2UgYXJlIG5vdyBzZXBhcmF0ZWQgb3V0LCBidXQgaGlzdG9yaWNhbGx5IHdlcmUgYSBwYXJ0IG9mIHRoaXMgbW9kdWxlLFxuLy8gYW5kIHNpbmNlIHRoaXMgaXMgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2UgaW5jbHVkZSB0aGVtIGluXG4vLyB0aGlzIGVudHJ5LlxuRm91bmRhdGlvbi5ydGwgPSBydGw7XG5Gb3VuZGF0aW9uLkdldFlvRGlnaXRzID0gR2V0WW9EaWdpdHM7XG5Gb3VuZGF0aW9uLnRyYW5zaXRpb25lbmQgPSB0cmFuc2l0aW9uZW5kO1xuRm91bmRhdGlvbi5SZWdFeHBFc2NhcGUgPSBSZWdFeHBFc2NhcGU7XG5Gb3VuZGF0aW9uLm9uTG9hZCA9IG9uTG9hZDtcblxud2luZG93LkZvdW5kYXRpb24gPSBGb3VuZGF0aW9uO1xuXG4vLyAtLS0gRm91bmRhdGlvbiBDb3JlIGV4cG9ydHMgLS0tXG4vLyBFeHBvcnQgXCJQbHVnaW5cIiBhbmQgYWxsIGNvcmUgdXRpbGl0aWVzLCBzaW5jZSB0aGUgYGZvdW5kYXRpb24uY29yZWAgZW50cnkgcGxheXMgdGhlIHJvbGUgb2Zcbi8vIGFsbCBjb3JlIHNvdXJjZSBmaWxlcy5cblxuZXhwb3J0IHsgRm91bmRhdGlvbiB9O1xuZXhwb3J0ICogZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5leHBvcnQgKiBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBHZXRZb0RpZ2l0cyB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IE1lZGlhUXVlcnkgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5JztcblxudmFyIEZPVU5EQVRJT05fVkVSU0lPTiA9ICc2LjUuMyc7XG5cbi8vIEdsb2JhbCBGb3VuZGF0aW9uIG9iamVjdFxuLy8gVGhpcyBpcyBhdHRhY2hlZCB0byB0aGUgd2luZG93LCBvciB1c2VkIGFzIGEgbW9kdWxlIGZvciBBTUQvQnJvd3NlcmlmeVxudmFyIEZvdW5kYXRpb24gPSB7XG4gIHZlcnNpb246IEZPVU5EQVRJT05fVkVSU0lPTixcblxuICAvKipcbiAgICogU3RvcmVzIGluaXRpYWxpemVkIHBsdWdpbnMuXG4gICAqL1xuICBfcGx1Z2luczoge30sXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBnZW5lcmF0ZWQgdW5pcXVlIGlkcyBmb3IgcGx1Z2luIGluc3RhbmNlc1xuICAgKi9cbiAgX3V1aWRzOiBbXSxcblxuICAvKipcbiAgICogRGVmaW5lcyBhIEZvdW5kYXRpb24gcGx1Z2luLCBhZGRpbmcgaXQgdG8gdGhlIGBGb3VuZGF0aW9uYCBuYW1lc3BhY2UgYW5kIHRoZSBsaXN0IG9mIHBsdWdpbnMgdG8gaW5pdGlhbGl6ZSB3aGVuIHJlZmxvd2luZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBsdWdpbiAtIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgcGx1Z2luLlxuICAgKi9cbiAgcGx1Z2luOiBmdW5jdGlvbihwbHVnaW4sIG5hbWUpIHtcbiAgICAvLyBPYmplY3Qga2V5IHRvIHVzZSB3aGVuIGFkZGluZyB0byBnbG9iYWwgRm91bmRhdGlvbiBvYmplY3RcbiAgICAvLyBFeGFtcGxlczogRm91bmRhdGlvbi5SZXZlYWwsIEZvdW5kYXRpb24uT2ZmQ2FudmFzXG4gICAgdmFyIGNsYXNzTmFtZSA9IChuYW1lIHx8IGZ1bmN0aW9uTmFtZShwbHVnaW4pKTtcbiAgICAvLyBPYmplY3Qga2V5IHRvIHVzZSB3aGVuIHN0b3JpbmcgdGhlIHBsdWdpbiwgYWxzbyB1c2VkIHRvIGNyZWF0ZSB0aGUgaWRlbnRpZnlpbmcgZGF0YSBhdHRyaWJ1dGUgZm9yIHRoZSBwbHVnaW5cbiAgICAvLyBFeGFtcGxlczogZGF0YS1yZXZlYWwsIGRhdGEtb2ZmLWNhbnZhc1xuICAgIHZhciBhdHRyTmFtZSAgPSBoeXBoZW5hdGUoY2xhc3NOYW1lKTtcblxuICAgIC8vIEFkZCB0byB0aGUgRm91bmRhdGlvbiBvYmplY3QgYW5kIHRoZSBwbHVnaW5zIGxpc3QgKGZvciByZWZsb3dpbmcpXG4gICAgdGhpcy5fcGx1Z2luc1thdHRyTmFtZV0gPSB0aGlzW2NsYXNzTmFtZV0gPSBwbHVnaW47XG4gIH0sXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogUG9wdWxhdGVzIHRoZSBfdXVpZHMgYXJyYXkgd2l0aCBwb2ludGVycyB0byBlYWNoIGluZGl2aWR1YWwgcGx1Z2luIGluc3RhbmNlLlxuICAgKiBBZGRzIHRoZSBgemZQbHVnaW5gIGRhdGEtYXR0cmlidXRlIHRvIHByb2dyYW1tYXRpY2FsbHkgY3JlYXRlZCBwbHVnaW5zIHRvIGFsbG93IHVzZSBvZiAkKHNlbGVjdG9yKS5mb3VuZGF0aW9uKG1ldGhvZCkgY2FsbHMuXG4gICAqIEFsc28gZmlyZXMgdGhlIGluaXRpYWxpemF0aW9uIGV2ZW50IGZvciBlYWNoIHBsdWdpbiwgY29uc29saWRhdGluZyByZXBldGl0aXZlIGNvZGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW4gLSBhbiBpbnN0YW5jZSBvZiBhIHBsdWdpbiwgdXN1YWxseSBgdGhpc2AgaW4gY29udGV4dC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgcGx1Z2luLCBwYXNzZWQgYXMgYSBjYW1lbENhc2VkIHN0cmluZy5cbiAgICogQGZpcmVzIFBsdWdpbiNpbml0XG4gICAqL1xuICByZWdpc3RlclBsdWdpbjogZnVuY3Rpb24ocGx1Z2luLCBuYW1lKXtcbiAgICB2YXIgcGx1Z2luTmFtZSA9IG5hbWUgPyBoeXBoZW5hdGUobmFtZSkgOiBmdW5jdGlvbk5hbWUocGx1Z2luLmNvbnN0cnVjdG9yKS50b0xvd2VyQ2FzZSgpO1xuICAgIHBsdWdpbi51dWlkID0gR2V0WW9EaWdpdHMoNiwgcGx1Z2luTmFtZSk7XG5cbiAgICBpZighcGx1Z2luLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApKXsgcGx1Z2luLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWAsIHBsdWdpbi51dWlkKTsgfVxuICAgIGlmKCFwbHVnaW4uJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nKSl7IHBsdWdpbi4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicsIHBsdWdpbik7IH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIGluaXRpYWxpemVkLlxuICAgICAgICAgICAqIEBldmVudCBQbHVnaW4jaW5pdFxuICAgICAgICAgICAqL1xuICAgIHBsdWdpbi4kZWxlbWVudC50cmlnZ2VyKGBpbml0LnpmLiR7cGx1Z2luTmFtZX1gKTtcblxuICAgIHRoaXMuX3V1aWRzLnB1c2gocGx1Z2luLnV1aWQpO1xuXG4gICAgcmV0dXJuO1xuICB9LFxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIFJlbW92ZXMgdGhlIHBsdWdpbnMgdXVpZCBmcm9tIHRoZSBfdXVpZHMgYXJyYXkuXG4gICAqIFJlbW92ZXMgdGhlIHpmUGx1Z2luIGRhdGEgYXR0cmlidXRlLCBhcyB3ZWxsIGFzIHRoZSBkYXRhLXBsdWdpbi1uYW1lIGF0dHJpYnV0ZS5cbiAgICogQWxzbyBmaXJlcyB0aGUgZGVzdHJveWVkIGV2ZW50IGZvciB0aGUgcGx1Z2luLCBjb25zb2xpZGF0aW5nIHJlcGV0aXRpdmUgY29kZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBsdWdpbiAtIGFuIGluc3RhbmNlIG9mIGEgcGx1Z2luLCB1c3VhbGx5IGB0aGlzYCBpbiBjb250ZXh0LlxuICAgKiBAZmlyZXMgUGx1Z2luI2Rlc3Ryb3llZFxuICAgKi9cbiAgdW5yZWdpc3RlclBsdWdpbjogZnVuY3Rpb24ocGx1Z2luKXtcbiAgICB2YXIgcGx1Z2luTmFtZSA9IGh5cGhlbmF0ZShmdW5jdGlvbk5hbWUocGx1Z2luLiRlbGVtZW50LmRhdGEoJ3pmUGx1Z2luJykuY29uc3RydWN0b3IpKTtcblxuICAgIHRoaXMuX3V1aWRzLnNwbGljZSh0aGlzLl91dWlkcy5pbmRleE9mKHBsdWdpbi51dWlkKSwgMSk7XG4gICAgcGx1Z2luLiRlbGVtZW50LnJlbW92ZUF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApLnJlbW92ZURhdGEoJ3pmUGx1Z2luJylcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIGJlZW4gZGVzdHJveWVkLlxuICAgICAgICAgICAqIEBldmVudCBQbHVnaW4jZGVzdHJveWVkXG4gICAgICAgICAgICovXG4gICAgICAgICAgLnRyaWdnZXIoYGRlc3Ryb3llZC56Zi4ke3BsdWdpbk5hbWV9YCk7XG4gICAgZm9yKHZhciBwcm9wIGluIHBsdWdpbil7XG4gICAgICBwbHVnaW5bcHJvcF0gPSBudWxsOy8vY2xlYW4gdXAgc2NyaXB0IHRvIHByZXAgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb25cbiAgICogQ2F1c2VzIG9uZSBvciBtb3JlIGFjdGl2ZSBwbHVnaW5zIHRvIHJlLWluaXRpYWxpemUsIHJlc2V0dGluZyBldmVudCBsaXN0ZW5lcnMsIHJlY2FsY3VsYXRpbmcgcG9zaXRpb25zLCBldGMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwbHVnaW5zIC0gb3B0aW9uYWwgc3RyaW5nIG9mIGFuIGluZGl2aWR1YWwgcGx1Z2luIGtleSwgYXR0YWluZWQgYnkgY2FsbGluZyBgJChlbGVtZW50KS5kYXRhKCdwbHVnaW5OYW1lJylgLCBvciBzdHJpbmcgb2YgYSBwbHVnaW4gY2xhc3MgaS5lLiBgJ2Ryb3Bkb3duJ2BcbiAgICogQGRlZmF1bHQgSWYgbm8gYXJndW1lbnQgaXMgcGFzc2VkLCByZWZsb3cgYWxsIGN1cnJlbnRseSBhY3RpdmUgcGx1Z2lucy5cbiAgICovXG4gICByZUluaXQ6IGZ1bmN0aW9uKHBsdWdpbnMpe1xuICAgICB2YXIgaXNKUSA9IHBsdWdpbnMgaW5zdGFuY2VvZiAkO1xuICAgICB0cnl7XG4gICAgICAgaWYoaXNKUSl7XG4gICAgICAgICBwbHVnaW5zLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgJCh0aGlzKS5kYXRhKCd6ZlBsdWdpbicpLl9pbml0KCk7XG4gICAgICAgICB9KTtcbiAgICAgICB9ZWxzZXtcbiAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHBsdWdpbnMsXG4gICAgICAgICBfdGhpcyA9IHRoaXMsXG4gICAgICAgICBmbnMgPSB7XG4gICAgICAgICAgICdvYmplY3QnOiBmdW5jdGlvbihwbGdzKXtcbiAgICAgICAgICAgICBwbGdzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgICAgICAgICAgICBwID0gaHlwaGVuYXRlKHApO1xuICAgICAgICAgICAgICAgJCgnW2RhdGEtJysgcCArJ10nKS5mb3VuZGF0aW9uKCdfaW5pdCcpO1xuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICB9LFxuICAgICAgICAgICAnc3RyaW5nJzogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICBwbHVnaW5zID0gaHlwaGVuYXRlKHBsdWdpbnMpO1xuICAgICAgICAgICAgICQoJ1tkYXRhLScrIHBsdWdpbnMgKyddJykuZm91bmRhdGlvbignX2luaXQnKTtcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgJ3VuZGVmaW5lZCc6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgdGhpc1snb2JqZWN0J10oT2JqZWN0LmtleXMoX3RoaXMuX3BsdWdpbnMpKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgfTtcbiAgICAgICAgIGZuc1t0eXBlXShwbHVnaW5zKTtcbiAgICAgICB9XG4gICAgIH1jYXRjaChlcnIpe1xuICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgfWZpbmFsbHl7XG4gICAgICAgcmV0dXJuIHBsdWdpbnM7XG4gICAgIH1cbiAgIH0sXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcGx1Z2lucyBvbiBhbnkgZWxlbWVudHMgd2l0aGluIGBlbGVtYCAoYW5kIGBlbGVtYCBpdHNlbGYpIHRoYXQgYXJlbid0IGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0galF1ZXJ5IG9iamVjdCBjb250YWluaW5nIHRoZSBlbGVtZW50IHRvIGNoZWNrIGluc2lkZS4gQWxzbyBjaGVja3MgdGhlIGVsZW1lbnQgaXRzZWxmLCB1bmxlc3MgaXQncyB0aGUgYGRvY3VtZW50YCBvYmplY3QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBwbHVnaW5zIC0gQSBsaXN0IG9mIHBsdWdpbnMgdG8gaW5pdGlhbGl6ZS4gTGVhdmUgdGhpcyBvdXQgdG8gaW5pdGlhbGl6ZSBldmVyeXRoaW5nLlxuICAgKi9cbiAgcmVmbG93OiBmdW5jdGlvbihlbGVtLCBwbHVnaW5zKSB7XG5cbiAgICAvLyBJZiBwbHVnaW5zIGlzIHVuZGVmaW5lZCwganVzdCBncmFiIGV2ZXJ5dGhpbmdcbiAgICBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwbHVnaW5zID0gT2JqZWN0LmtleXModGhpcy5fcGx1Z2lucyk7XG4gICAgfVxuICAgIC8vIElmIHBsdWdpbnMgaXMgYSBzdHJpbmcsIGNvbnZlcnQgaXQgdG8gYW4gYXJyYXkgd2l0aCBvbmUgaXRlbVxuICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAnc3RyaW5nJykge1xuICAgICAgcGx1Z2lucyA9IFtwbHVnaW5zXTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggcGx1Z2luXG4gICAgJC5lYWNoKHBsdWdpbnMsIGZ1bmN0aW9uKGksIG5hbWUpIHtcbiAgICAgIC8vIEdldCB0aGUgY3VycmVudCBwbHVnaW5cbiAgICAgIHZhciBwbHVnaW4gPSBfdGhpcy5fcGx1Z2luc1tuYW1lXTtcblxuICAgICAgLy8gTG9jYWxpemUgdGhlIHNlYXJjaCB0byBhbGwgZWxlbWVudHMgaW5zaWRlIGVsZW0sIGFzIHdlbGwgYXMgZWxlbSBpdHNlbGYsIHVubGVzcyBlbGVtID09PSBkb2N1bWVudFxuICAgICAgdmFyICRlbGVtID0gJChlbGVtKS5maW5kKCdbZGF0YS0nK25hbWUrJ10nKS5hZGRCYWNrKCdbZGF0YS0nK25hbWUrJ10nKTtcblxuICAgICAgLy8gRm9yIGVhY2ggcGx1Z2luIGZvdW5kLCBpbml0aWFsaXplIGl0XG4gICAgICAkZWxlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgJGVsID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG9wdHMgPSB7fTtcbiAgICAgICAgLy8gRG9uJ3QgZG91YmxlLWRpcCBvbiBwbHVnaW5zXG4gICAgICAgIGlmICgkZWwuZGF0YSgnemZQbHVnaW4nKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlRyaWVkIHRvIGluaXRpYWxpemUgXCIrbmFtZStcIiBvbiBhbiBlbGVtZW50IHRoYXQgYWxyZWFkeSBoYXMgYSBGb3VuZGF0aW9uIHBsdWdpbi5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoJGVsLmF0dHIoJ2RhdGEtb3B0aW9ucycpKXtcbiAgICAgICAgICB2YXIgdGhpbmcgPSAkZWwuYXR0cignZGF0YS1vcHRpb25zJykuc3BsaXQoJzsnKS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpe1xuICAgICAgICAgICAgdmFyIG9wdCA9IGUuc3BsaXQoJzonKS5tYXAoZnVuY3Rpb24oZWwpeyByZXR1cm4gZWwudHJpbSgpOyB9KTtcbiAgICAgICAgICAgIGlmKG9wdFswXSkgb3B0c1tvcHRbMF1dID0gcGFyc2VWYWx1ZShvcHRbMV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAkZWwuZGF0YSgnemZQbHVnaW4nLCBuZXcgcGx1Z2luKCQodGhpcyksIG9wdHMpKTtcbiAgICAgICAgfWNhdGNoKGVyKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVyKTtcbiAgICAgICAgfWZpbmFsbHl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0Rm5OYW1lOiBmdW5jdGlvbk5hbWUsXG5cbiAgYWRkVG9KcXVlcnk6IGZ1bmN0aW9uKCQpIHtcbiAgICAvLyBUT0RPOiBjb25zaWRlciBub3QgbWFraW5nIHRoaXMgYSBqUXVlcnkgZnVuY3Rpb25cbiAgICAvLyBUT0RPOiBuZWVkIHdheSB0byByZWZsb3cgdnMuIHJlLWluaXRpYWxpemVcbiAgICAvKipcbiAgICAgKiBUaGUgRm91bmRhdGlvbiBqUXVlcnkgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBtZXRob2QgLSBBbiBhY3Rpb24gdG8gcGVyZm9ybSBvbiB0aGUgY3VycmVudCBqUXVlcnkgb2JqZWN0LlxuICAgICAqL1xuICAgIHZhciBmb3VuZGF0aW9uID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICB2YXIgdHlwZSA9IHR5cGVvZiBtZXRob2QsXG4gICAgICAgICAgJG5vSlMgPSAkKCcubm8tanMnKTtcblxuICAgICAgaWYoJG5vSlMubGVuZ3RoKXtcbiAgICAgICAgJG5vSlMucmVtb3ZlQ2xhc3MoJ25vLWpzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGUgPT09ICd1bmRlZmluZWQnKXsvL25lZWRzIHRvIGluaXRpYWxpemUgdGhlIEZvdW5kYXRpb24gb2JqZWN0LCBvciBhbiBpbmRpdmlkdWFsIHBsdWdpbi5cbiAgICAgICAgTWVkaWFRdWVyeS5faW5pdCgpO1xuICAgICAgICBGb3VuZGF0aW9uLnJlZmxvdyh0aGlzKTtcbiAgICAgIH1lbHNlIGlmKHR5cGUgPT09ICdzdHJpbmcnKXsvL2FuIGluZGl2aWR1YWwgbWV0aG9kIHRvIGludm9rZSBvbiBhIHBsdWdpbiBvciBncm91cCBvZiBwbHVnaW5zXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTsvL2NvbGxlY3QgYWxsIHRoZSBhcmd1bWVudHMsIGlmIG5lY2Vzc2FyeVxuICAgICAgICB2YXIgcGx1Z0NsYXNzID0gdGhpcy5kYXRhKCd6ZlBsdWdpbicpOy8vZGV0ZXJtaW5lIHRoZSBjbGFzcyBvZiBwbHVnaW5cblxuICAgICAgICBpZih0eXBlb2YgcGx1Z0NsYXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGx1Z0NsYXNzW21ldGhvZF0gIT09ICd1bmRlZmluZWQnKXsvL21ha2Ugc3VyZSBib3RoIHRoZSBjbGFzcyBhbmQgbWV0aG9kIGV4aXN0XG4gICAgICAgICAgaWYodGhpcy5sZW5ndGggPT09IDEpey8vaWYgdGhlcmUncyBvbmx5IG9uZSwgY2FsbCBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgcGx1Z0NsYXNzW21ldGhvZF0uYXBwbHkocGx1Z0NsYXNzLCBhcmdzKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpLCBlbCl7Ly9vdGhlcndpc2UgbG9vcCB0aHJvdWdoIHRoZSBqUXVlcnkgY29sbGVjdGlvbiBhbmQgaW52b2tlIHRoZSBtZXRob2Qgb24gZWFjaFxuICAgICAgICAgICAgICBwbHVnQ2xhc3NbbWV0aG9kXS5hcHBseSgkKGVsKS5kYXRhKCd6ZlBsdWdpbicpLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7Ly9lcnJvciBmb3Igbm8gY2xhc3Mgb3Igbm8gbWV0aG9kXG4gICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwiV2UncmUgc29ycnksICdcIiArIG1ldGhvZCArIFwiJyBpcyBub3QgYW4gYXZhaWxhYmxlIG1ldGhvZCBmb3IgXCIgKyAocGx1Z0NsYXNzID8gZnVuY3Rpb25OYW1lKHBsdWdDbGFzcykgOiAndGhpcyBlbGVtZW50JykgKyAnLicpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXsvL2Vycm9yIGZvciBpbnZhbGlkIGFyZ3VtZW50IHR5cGVcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgV2UncmUgc29ycnksICR7dHlwZX0gaXMgbm90IGEgdmFsaWQgcGFyYW1ldGVyLiBZb3UgbXVzdCB1c2UgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtZXRob2QgeW91IHdpc2ggdG8gaW52b2tlLmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAkLmZuLmZvdW5kYXRpb24gPSBmb3VuZGF0aW9uO1xuICAgIHJldHVybiAkO1xuICB9XG59O1xuXG5Gb3VuZGF0aW9uLnV0aWwgPSB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiBmb3IgYXBwbHlpbmcgYSBkZWJvdW5jZSBlZmZlY3QgdG8gYSBmdW5jdGlvbiBjYWxsLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhdCBlbmQgb2YgdGltZW91dC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IC0gVGltZSBpbiBtcyB0byBkZWxheSB0aGUgY2FsbCBvZiBgZnVuY2AuXG4gICAqIEByZXR1cm5zIGZ1bmN0aW9uXG4gICAqL1xuICB0aHJvdHRsZTogZnVuY3Rpb24gKGZ1bmMsIGRlbGF5KSB7XG4gICAgdmFyIHRpbWVyID0gbnVsbDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxud2luZG93LkZvdW5kYXRpb24gPSBGb3VuZGF0aW9uO1xuXG4vLyBQb2x5ZmlsbCBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4oZnVuY3Rpb24oKSB7XG4gIGlmICghRGF0ZS5ub3cgfHwgIXdpbmRvdy5EYXRlLm5vdylcbiAgICB3aW5kb3cuRGF0ZS5ub3cgPSBEYXRlLm5vdyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG5cbiAgdmFyIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKytpKSB7XG4gICAgICB2YXIgdnAgPSB2ZW5kb3JzW2ldO1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2cCsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAod2luZG93W3ZwKydDYW5jZWxBbmltYXRpb25GcmFtZSddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3dbdnArJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddKTtcbiAgfVxuICBpZiAoL2lQKGFkfGhvbmV8b2QpLipPUyA2Ly50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgIHx8ICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIG5leHRUaW1lID0gTWF0aC5tYXgobGFzdFRpbWUgKyAxNiwgbm93KTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0VGltZSAtIG5vdyk7XG4gICAgfTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XG4gIH1cbiAgLyoqXG4gICAqIFBvbHlmaWxsIGZvciBwZXJmb3JtYW5jZS5ub3csIHJlcXVpcmVkIGJ5IHJBRlxuICAgKi9cbiAgaWYoIXdpbmRvdy5wZXJmb3JtYW5jZSB8fCAhd2luZG93LnBlcmZvcm1hbmNlLm5vdyl7XG4gICAgd2luZG93LnBlcmZvcm1hbmNlID0ge1xuICAgICAgc3RhcnQ6IERhdGUubm93KCksXG4gICAgICBub3c6IGZ1bmN0aW9uKCl7IHJldHVybiBEYXRlLm5vdygpIC0gdGhpcy5zdGFydDsgfVxuICAgIH07XG4gIH1cbn0pKCk7XG5pZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XG4gIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24ob1RoaXMpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGNsb3Nlc3QgdGhpbmcgcG9zc2libGUgdG8gdGhlIEVDTUFTY3JpcHQgNVxuICAgICAgLy8gaW50ZXJuYWwgSXNDYWxsYWJsZSBmdW5jdGlvblxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgLSB3aGF0IGlzIHRyeWluZyB0byBiZSBib3VuZCBpcyBub3QgY2FsbGFibGUnKTtcbiAgICB9XG5cbiAgICB2YXIgYUFyZ3MgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgIGZUb0JpbmQgPSB0aGlzLFxuICAgICAgICBmTk9QICAgID0gZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgZkJvdW5kICA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBmVG9CaW5kLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBmTk9QXG4gICAgICAgICAgICAgICAgID8gdGhpc1xuICAgICAgICAgICAgICAgICA6IG9UaGlzLFxuICAgICAgICAgICAgICAgICBhQXJncy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvdG90eXBlKSB7XG4gICAgICAvLyBuYXRpdmUgZnVuY3Rpb25zIGRvbid0IGhhdmUgYSBwcm90b3R5cGVcbiAgICAgIGZOT1AucHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG4gICAgfVxuICAgIGZCb3VuZC5wcm90b3R5cGUgPSBuZXcgZk5PUCgpO1xuXG4gICAgcmV0dXJuIGZCb3VuZDtcbiAgfTtcbn1cbi8vIFBvbHlmaWxsIHRvIGdldCB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIGluIElFOVxuZnVuY3Rpb24gZnVuY3Rpb25OYW1lKGZuKSB7XG4gIGlmICh0eXBlb2YgRnVuY3Rpb24ucHJvdG90eXBlLm5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb25cXHMoW14oXXsxLH0pXFwoLztcbiAgICB2YXIgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKChmbikudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdLnRyaW0oKSA6IFwiXCI7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGZuLnByb3RvdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZm4uY29uc3RydWN0b3IubmFtZTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZm4ucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlVmFsdWUoc3RyKXtcbiAgaWYgKCd0cnVlJyA9PT0gc3RyKSByZXR1cm4gdHJ1ZTtcbiAgZWxzZSBpZiAoJ2ZhbHNlJyA9PT0gc3RyKSByZXR1cm4gZmFsc2U7XG4gIGVsc2UgaWYgKCFpc05hTihzdHIgKiAxKSkgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbiAgcmV0dXJuIHN0cjtcbn1cbi8vIENvbnZlcnQgUGFzY2FsQ2FzZSB0byBrZWJhYi1jYXNlXG4vLyBUaGFuayB5b3U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzg5NTU1ODBcbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5leHBvcnQge0ZvdW5kYXRpb259O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5cbi8vIEFic3RyYWN0IGNsYXNzIGZvciBwcm92aWRpbmcgbGlmZWN5Y2xlIGhvb2tzLiBFeHBlY3QgcGx1Z2lucyB0byBkZWZpbmUgQVQgTEVBU1Rcbi8vIHtmdW5jdGlvbn0gX3NldHVwIChyZXBsYWNlcyBwcmV2aW91cyBjb25zdHJ1Y3RvciksXG4vLyB7ZnVuY3Rpb259IF9kZXN0cm95IChyZXBsYWNlcyBwcmV2aW91cyBkZXN0cm95KVxuY2xhc3MgUGx1Z2luIHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5fc2V0dXAoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBnZXRQbHVnaW5OYW1lKHRoaXMpO1xuICAgIHRoaXMudXVpZCA9IEdldFlvRGlnaXRzKDYsIHBsdWdpbk5hbWUpO1xuXG4gICAgaWYoIXRoaXMuJGVsZW1lbnQuYXR0cihgZGF0YS0ke3BsdWdpbk5hbWV9YCkpeyB0aGlzLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWAsIHRoaXMudXVpZCk7IH1cbiAgICBpZighdGhpcy4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicpKXsgdGhpcy4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicsIHRoaXMpOyB9XG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBpbml0aWFsaXplZC5cbiAgICAgKiBAZXZlbnQgUGx1Z2luI2luaXRcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoYGluaXQuemYuJHtwbHVnaW5OYW1lfWApO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBnZXRQbHVnaW5OYW1lKHRoaXMpO1xuICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cihgZGF0YS0ke3BsdWdpbk5hbWV9YCkucmVtb3ZlRGF0YSgnemZQbHVnaW4nKVxuICAgICAgICAvKipcbiAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBiZWVuIGRlc3Ryb3llZC5cbiAgICAgICAgICogQGV2ZW50IFBsdWdpbiNkZXN0cm95ZWRcbiAgICAgICAgICovXG4gICAgICAgIC50cmlnZ2VyKGBkZXN0cm95ZWQuemYuJHtwbHVnaW5OYW1lfWApO1xuICAgIGZvcih2YXIgcHJvcCBpbiB0aGlzKXtcbiAgICAgIHRoaXNbcHJvcF0gPSBudWxsOy8vY2xlYW4gdXAgc2NyaXB0IHRvIHByZXAgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICB9XG4gIH1cbn1cblxuLy8gQ29udmVydCBQYXNjYWxDYXNlIHRvIGtlYmFiLWNhc2Vcbi8vIFRoYW5rIHlvdTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvODk1NTU4MFxuZnVuY3Rpb24gaHlwaGVuYXRlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBsdWdpbk5hbWUob2JqKSB7XG4gIGlmKHR5cGVvZihvYmouY29uc3RydWN0b3IubmFtZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShvYmouY29uc3RydWN0b3IubmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGh5cGhlbmF0ZShvYmouY2xhc3NOYW1lKTtcbiAgfVxufVxuXG5leHBvcnQge1BsdWdpbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy8gQ29yZSBGb3VuZGF0aW9uIFV0aWxpdGllcywgdXRpbGl6ZWQgaW4gYSBudW1iZXIgb2YgcGxhY2VzLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBmb3IgUlRMIHN1cHBvcnRcbiAgICovXG5mdW5jdGlvbiBydGwoKSB7XG4gIHJldHVybiAkKCdodG1sJykuYXR0cignZGlyJykgPT09ICdydGwnO1xufVxuXG4vKipcbiAqIHJldHVybnMgYSByYW5kb20gYmFzZS0zNiB1aWQgd2l0aCBuYW1lc3BhY2luZ1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC0gbnVtYmVyIG9mIHJhbmRvbSBiYXNlLTM2IGRpZ2l0cyBkZXNpcmVkLiBJbmNyZWFzZSBmb3IgbW9yZSByYW5kb20gc3RyaW5ncy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgLSBuYW1lIG9mIHBsdWdpbiB0byBiZSBpbmNvcnBvcmF0ZWQgaW4gdWlkLCBvcHRpb25hbC5cbiAqIEBkZWZhdWx0IHtTdHJpbmd9ICcnIC0gaWYgbm8gcGx1Z2luIG5hbWUgaXMgcHJvdmlkZWQsIG5vdGhpbmcgaXMgYXBwZW5kZWQgdG8gdGhlIHVpZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gdW5pcXVlIGlkXG4gKi9cbmZ1bmN0aW9uIEdldFlvRGlnaXRzKGxlbmd0aCwgbmFtZXNwYWNlKXtcbiAgbGVuZ3RoID0gbGVuZ3RoIHx8IDY7XG4gIHJldHVybiBNYXRoLnJvdW5kKChNYXRoLnBvdygzNiwgbGVuZ3RoICsgMSkgLSBNYXRoLnJhbmRvbSgpICogTWF0aC5wb3coMzYsIGxlbmd0aCkpKS50b1N0cmluZygzNikuc2xpY2UoMSkgKyAobmFtZXNwYWNlID8gYC0ke25hbWVzcGFjZX1gIDogJycpO1xufVxuXG4vKipcbiAqIEVzY2FwZSBhIHN0cmluZyBzbyBpdCBjYW4gYmUgdXNlZCBhcyBhIHJlZ2V4cCBwYXR0ZXJuXG4gKiBAZnVuY3Rpb25cbiAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzkzMTA3NTIvNDMxNzM4NFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSBzdHJpbmcgdG8gZXNjYXBlLlxuICogQHJldHVybnMge1N0cmluZ30gLSBlc2NhcGVkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBSZWdFeHBFc2NhcGUoc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uZW5kKCRlbGVtKXtcbiAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgICd0cmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICdNb3pUcmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdPVHJhbnNpdGlvbic6ICdvdHJhbnNpdGlvbmVuZCdcbiAgfTtcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGVuZDtcblxuICBmb3IgKHZhciB0IGluIHRyYW5zaXRpb25zKXtcbiAgICBpZiAodHlwZW9mIGVsZW0uc3R5bGVbdF0gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgIGVuZCA9IHRyYW5zaXRpb25zW3RdO1xuICAgIH1cbiAgfVxuICBpZihlbmQpe1xuICAgIHJldHVybiBlbmQ7XG4gIH1lbHNle1xuICAgIGVuZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICRlbGVtLnRyaWdnZXJIYW5kbGVyKCd0cmFuc2l0aW9uZW5kJywgWyRlbGVtXSk7XG4gICAgfSwgMSk7XG4gICAgcmV0dXJuICd0cmFuc2l0aW9uZW5kJztcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiBhbiBldmVudCB0eXBlIHRvIGxpc3RlbiBmb3Igd2luZG93IGxvYWQuXG4gKlxuICogSWYgYCRlbGVtYCBpcyBwYXNzZWQsIGFuIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkIG9uIGAkZWxlbWAuIElmIHdpbmRvdyBpcyBhbHJlYWR5IGxvYWRlZCwgdGhlIGV2ZW50IHdpbGwgc3RpbGwgYmUgdHJpZ2dlcmVkLlxuICogSWYgYGhhbmRsZXJgIGlzIHBhc3NlZCwgYXR0YWNoIGl0IHRvIHRoZSBldmVudCBvbiBgJGVsZW1gLlxuICogQ2FsbGluZyBgb25Mb2FkYCB3aXRob3V0IGhhbmRsZXIgYWxsb3dzIHlvdSB0byBnZXQgdGhlIGV2ZW50IHR5cGUgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBiZWZvcmUgYXR0YWNoaW5nIHRoZSBoYW5kbGVyIGJ5IHlvdXJzZWxmLlxuICogQGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtdICRlbGVtIC0galF1ZXJ5IGVsZW1lbnQgb24gd2hpY2ggdGhlIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkIGlmIHBhc3NlZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtdIGhhbmRsZXIgLSBmdW5jdGlvbiB0byBhdHRhY2ggdG8gdGhlIGV2ZW50LlxuICogQHJldHVybnMge1N0cmluZ30gLSBldmVudCB0eXBlIHRoYXQgc2hvdWxkIG9yIHdpbGwgYmUgdHJpZ2dlcmVkLlxuICovXG5mdW5jdGlvbiBvbkxvYWQoJGVsZW0sIGhhbmRsZXIpIHtcbiAgY29uc3QgZGlkTG9hZCA9IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZSc7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IChkaWRMb2FkID8gJ19kaWRMb2FkJyA6ICdsb2FkJykgKyAnLnpmLnV0aWwub25Mb2FkJztcbiAgY29uc3QgY2IgPSAoKSA9PiAkZWxlbS50cmlnZ2VySGFuZGxlcihldmVudFR5cGUpO1xuXG4gIGlmICgkZWxlbSkge1xuICAgIGlmIChoYW5kbGVyKSAkZWxlbS5vbmUoZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChkaWRMb2FkKVxuICAgICAgc2V0VGltZW91dChjYik7XG4gICAgZWxzZVxuICAgICAgJCh3aW5kb3cpLm9uZSgnbG9hZCcsIGNiKTtcbiAgfVxuXG4gIHJldHVybiBldmVudFR5cGU7XG59XG5cbi8qKlxuICogUmV0dW5zIGFuIGhhbmRsZXIgZm9yIHRoZSBgbW91c2VsZWF2ZWAgdGhhdCBpZ25vcmUgZGlzYXBwZWFyZWQgbW91c2VzLlxuICpcbiAqIElmIHRoZSBtb3VzZSBcImRpc2FwcGVhcmVkXCIgZnJvbSB0aGUgZG9jdW1lbnQgKGxpa2Ugd2hlbiBnb2luZyBvbiBhIGJyb3dzZXIgVUkgZWxlbWVudCwgU2VlIGh0dHBzOi8vZ2l0LmlvL3pmLTExNDEwKSxcbiAqIHRoZSBldmVudCBpcyBpZ25vcmVkLlxuICogLSBJZiB0aGUgYGlnbm9yZUxlYXZlV2luZG93YCBpcyBgdHJ1ZWAsIHRoZSBldmVudCBpcyBpZ25vcmVkIHdoZW4gdGhlIHVzZXIgYWN0dWFsbHkgbGVmdCB0aGUgd2luZG93XG4gKiAgIChsaWtlIGJ5IHN3aXRjaGluZyB0byBhbiBvdGhlciB3aW5kb3cgd2l0aCBbQWx0XStbVGFiXSkuXG4gKiAtIElmIHRoZSBgaWdub3JlUmVhcHBlYXJgIGlzIGB0cnVlYCwgdGhlIGV2ZW50IHdpbGwgYmUgaWdub3JlZCB3aGVuIHRoZSBtb3VzZSB3aWxsIHJlYXBwZWFyIGxhdGVyIG9uIHRoZSBkb2N1bWVudFxuICogICBvdXRzaWRlIG9mIHRoZSBlbGVtZW50IGl0IGxlZnQuXG4gKlxuICogQGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW10gaGFuZGxlciAtIGhhbmRsZXIgZm9yIHRoZSBmaWx0ZXJlZCBgbW91c2VsZWF2ZWAgZXZlbnQgdG8gd2F0Y2guXG4gKiBAcGFyYW0ge09iamVjdH0gW10gb3B0aW9ucyAtIG9iamVjdCBvZiBvcHRpb25zOlxuICogLSB7Qm9vbGVhbn0gW2ZhbHNlXSBpZ25vcmVMZWF2ZVdpbmRvdyAtIGFsc28gaWdub3JlIHdoZW4gdGhlIHVzZXIgc3dpdGNoZWQgd2luZG93cy5cbiAqIC0ge0Jvb2xlYW59IFtmYWxzZV0gaWdub3JlUmVhcHBlYXIgLSBhbHNvIGlnbm9yZSB3aGVuIHRoZSBtb3VzZSByZWFwcGVhcmVkIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQgaXQgbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gLSBmaWx0ZXJlZCBoYW5kbGVyIHRvIHVzZSB0byBsaXN0ZW4gb24gdGhlIGBtb3VzZWxlYXZlYCBldmVudC5cbiAqL1xuZnVuY3Rpb24gaWdub3JlTW91c2VkaXNhcHBlYXIoaGFuZGxlciwgeyBpZ25vcmVMZWF2ZVdpbmRvdyA9IGZhbHNlLCBpZ25vcmVSZWFwcGVhciA9IGZhbHNlIH0gPSB7fSkge1xuICByZXR1cm4gZnVuY3Rpb24gbGVhdmVFdmVudEhhbmRsZXIoZUxlYXZlLCAuLi5yZXN0KSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBoYW5kbGVyLmJpbmQodGhpcywgZUxlYXZlLCAuLi5yZXN0KTtcblxuICAgIC8vIFRoZSBtb3VzZSBsZWZ0OiBjYWxsIHRoZSBnaXZlbiBjYWxsYmFjayBpZiB0aGUgbW91c2UgZW50ZXJlZCBlbHNld2hlcmVcbiAgICBpZiAoZUxlYXZlLnJlbGF0ZWRUYXJnZXQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgdGhlIG1vdXNlIGFjdHVhbGx5IGxlZnQgdGhlIHdpbmRvdy5cbiAgICAvLyBJbiBmaXJlZm94IGlmIHRoZSB1c2VyIHN3aXRjaGVkIGJldHdlZW4gd2luZG93cywgdGhlIHdpbmRvdyBzaWxsIGhhdmUgdGhlIGZvY3VzIGJ5IHRoZSB0aW1lXG4gICAgLy8gdGhlIGV2ZW50IGlzIHRyaWdnZXJlZC4gV2UgaGF2ZSB0byBkZWJvdW5jZSB0aGUgZXZlbnQgdG8gdGVzdCB0aGlzIGNhc2UuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiBsZWF2ZUV2ZW50RGVib3VuY2VyKCkge1xuICAgICAgaWYgKCFpZ25vcmVMZWF2ZVdpbmRvdyAmJiBkb2N1bWVudC5oYXNGb2N1cyAmJiAhZG9jdW1lbnQuaGFzRm9jdXMoKSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlLCB3YWl0IGZvciB0aGUgbW91c2UgdG8gcmVlYXBlYXIgb3V0c2lkZSBvZiB0aGUgZWxlbWVudCxcbiAgICAgIGlmICghaWdub3JlUmVhcHBlYXIpIHtcbiAgICAgICAgJChkb2N1bWVudCkub25lKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gcmVlbnRlckV2ZW50SGFuZGxlcihlUmVlbnRlcikge1xuICAgICAgICAgIGlmICghJChlTGVhdmUuY3VycmVudFRhcmdldCkuaGFzKGVSZWVudGVyLnRhcmdldCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBGaWxsIHdoZXJlIHRoZSBtb3VzZSBmaW5hbGx5IGVudGVyZWQuXG4gICAgICAgICAgICBlTGVhdmUucmVsYXRlZFRhcmdldCA9IGVSZWVudGVyLnRhcmdldDtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIDApO1xuICB9O1xufVxuXG5leHBvcnQgeyBydGwsIEdldFlvRGlnaXRzLCBSZWdFeHBFc2NhcGUsIHRyYW5zaXRpb25lbmQsIG9uTG9hZCwgaWdub3JlTW91c2VkaXNhcHBlYXIgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy8gRGVmYXVsdCBzZXQgb2YgbWVkaWEgcXVlcmllc1xuY29uc3QgZGVmYXVsdFF1ZXJpZXMgPSB7XG4gICdkZWZhdWx0JyA6ICdvbmx5IHNjcmVlbicsXG4gIGxhbmRzY2FwZSA6ICdvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgcG9ydHJhaXQgOiAnb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgcmV0aW5hIDogJ29ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSdcbiAgfTtcblxuXG4vLyBtYXRjaE1lZGlhKCkgcG9seWZpbGwgLSBUZXN0IGEgQ1NTIG1lZGlhIHR5cGUvcXVlcnkgaW4gSlMuXG4vLyBBdXRob3JzICYgY29weXJpZ2h0KGMpIDIwMTI6IFNjb3R0IEplaGwsIFBhdWwgSXJpc2gsIE5pY2hvbGFzIFpha2FzLCBEYXZpZCBLbmlnaHQuIE1JVCBsaWNlbnNlXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xud2luZG93Lm1hdGNoTWVkaWEgfHwgKHdpbmRvdy5tYXRjaE1lZGlhID0gKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLy8gRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBtYXRjaE1lZGl1bSBhcGkgc3VjaCBhcyBJRSA5IGFuZCB3ZWJraXRcbiAgdmFyIHN0eWxlTWVkaWEgPSAod2luZG93LnN0eWxlTWVkaWEgfHwgd2luZG93Lm1lZGlhKTtcblxuICAvLyBGb3IgdGhvc2UgdGhhdCBkb24ndCBzdXBwb3J0IG1hdGNoTWVkaXVtXG4gIGlmICghc3R5bGVNZWRpYSkge1xuICAgIHZhciBzdHlsZSAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSxcbiAgICBzY3JpcHQgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXSxcbiAgICBpbmZvICAgICAgICA9IG51bGw7XG5cbiAgICBzdHlsZS50eXBlICA9ICd0ZXh0L2Nzcyc7XG4gICAgc3R5bGUuaWQgICAgPSAnbWF0Y2htZWRpYWpzLXRlc3QnO1xuXG4gICAgaWYgKCFzY3JpcHQpIHtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGUsIHNjcmlwdCk7XG4gICAgfVxuXG4gICAgLy8gJ3N0eWxlLmN1cnJlbnRTdHlsZScgaXMgdXNlZCBieSBJRSA8PSA4IGFuZCAnd2luZG93LmdldENvbXB1dGVkU3R5bGUnIGZvciBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICBpbmZvID0gKCdnZXRDb21wdXRlZFN0eWxlJyBpbiB3aW5kb3cpICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN0eWxlLCBudWxsKSB8fCBzdHlsZS5jdXJyZW50U3R5bGU7XG5cbiAgICBzdHlsZU1lZGlhID0ge1xuICAgICAgbWF0Y2hNZWRpdW06IGZ1bmN0aW9uIChtZWRpYSkge1xuICAgICAgICB2YXIgdGV4dCA9ICdAbWVkaWEgJyArIG1lZGlhICsgJ3sgI21hdGNobWVkaWFqcy10ZXN0IHsgd2lkdGg6IDFweDsgfSB9JztcblxuICAgICAgICAvLyAnc3R5bGUuc3R5bGVTaGVldCcgaXMgdXNlZCBieSBJRSA8PSA4IGFuZCAnc3R5bGUudGV4dENvbnRlbnQnIGZvciBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSB0ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRlc3QgaWYgbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZVxuICAgICAgICByZXR1cm4gaW5mby53aWR0aCA9PT0gJzFweCc7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihtZWRpYSkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXRjaGVzOiBzdHlsZU1lZGlhLm1hdGNoTWVkaXVtKG1lZGlhIHx8ICdhbGwnKSxcbiAgICAgIG1lZGlhOiBtZWRpYSB8fCAnYWxsJ1xuICAgIH07XG4gIH07XG59KSgpKTtcbi8qIGVzbGludC1lbmFibGUgKi9cblxudmFyIE1lZGlhUXVlcnkgPSB7XG4gIHF1ZXJpZXM6IFtdLFxuXG4gIGN1cnJlbnQ6ICcnLFxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgbWVkaWEgcXVlcnkgaGVscGVyLCBieSBleHRyYWN0aW5nIHRoZSBicmVha3BvaW50IGxpc3QgZnJvbSB0aGUgQ1NTIGFuZCBhY3RpdmF0aW5nIHRoZSBicmVha3BvaW50IHdhdGNoZXIuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciAkbWV0YSA9ICQoJ21ldGEuZm91bmRhdGlvbi1tcScpO1xuICAgIGlmKCEkbWV0YS5sZW5ndGgpe1xuICAgICAgJCgnPG1ldGEgY2xhc3M9XCJmb3VuZGF0aW9uLW1xXCI+JykuYXBwZW5kVG8oZG9jdW1lbnQuaGVhZCk7XG4gICAgfVxuXG4gICAgdmFyIGV4dHJhY3RlZFN0eWxlcyA9ICQoJy5mb3VuZGF0aW9uLW1xJykuY3NzKCdmb250LWZhbWlseScpO1xuICAgIHZhciBuYW1lZFF1ZXJpZXM7XG5cbiAgICBuYW1lZFF1ZXJpZXMgPSBwYXJzZVN0eWxlVG9PYmplY3QoZXh0cmFjdGVkU3R5bGVzKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBuYW1lZFF1ZXJpZXMpIHtcbiAgICAgIGlmKG5hbWVkUXVlcmllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNlbGYucXVlcmllcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgdmFsdWU6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtuYW1lZFF1ZXJpZXNba2V5XX0pYFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLl9nZXRDdXJyZW50U2l6ZSgpO1xuXG4gICAgdGhpcy5fd2F0Y2hlcigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNjcmVlbiBpcyBhdCBsZWFzdCBhcyB3aWRlIGFzIGEgYnJlYWtwb2ludC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBjaGVjay5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYnJlYWtwb2ludCBtYXRjaGVzLCBgZmFsc2VgIGlmIGl0J3Mgc21hbGxlci5cbiAgICovXG4gIGF0TGVhc3Qoc2l6ZSkge1xuICAgIHZhciBxdWVyeSA9IHRoaXMuZ2V0KHNpemUpO1xuXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNjcmVlbiBtYXRjaGVzIHRvIGEgYnJlYWtwb2ludC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBjaGVjaywgZWl0aGVyICdzbWFsbCBvbmx5JyBvciAnc21hbGwnLiBPbWl0dGluZyAnb25seScgZmFsbHMgYmFjayB0byB1c2luZyBhdExlYXN0KCkgbWV0aG9kLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBicmVha3BvaW50IG1hdGNoZXMsIGBmYWxzZWAgaWYgaXQgZG9lcyBub3QuXG4gICAqL1xuICBpcyhzaXplKSB7XG4gICAgc2l6ZSA9IHNpemUudHJpbSgpLnNwbGl0KCcgJyk7XG4gICAgaWYoc2l6ZS5sZW5ndGggPiAxICYmIHNpemVbMV0gPT09ICdvbmx5Jykge1xuICAgICAgaWYoc2l6ZVswXSA9PT0gdGhpcy5fZ2V0Q3VycmVudFNpemUoKSkgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmF0TGVhc3Qoc2l6ZVswXSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgbWVkaWEgcXVlcnkgb2YgYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGdldC5cbiAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSAtIFRoZSBtZWRpYSBxdWVyeSBvZiB0aGUgYnJlYWtwb2ludCwgb3IgYG51bGxgIGlmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QuXG4gICAqL1xuICBnZXQoc2l6ZSkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5xdWVyaWVzKSB7XG4gICAgICBpZih0aGlzLnF1ZXJpZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW2ldO1xuICAgICAgICBpZiAoc2l6ZSA9PT0gcXVlcnkubmFtZSkgcmV0dXJuIHF1ZXJ5LnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgbmFtZSBieSB0ZXN0aW5nIGV2ZXJ5IGJyZWFrcG9pbnQgYW5kIHJldHVybmluZyB0aGUgbGFzdCBvbmUgdG8gbWF0Y2ggKHRoZSBiaWdnZXN0IG9uZSkuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBOYW1lIG9mIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQuXG4gICAqL1xuICBfZ2V0Q3VycmVudFNpemUoKSB7XG4gICAgdmFyIG1hdGNoZWQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW2ldO1xuXG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEocXVlcnkudmFsdWUpLm1hdGNoZXMpIHtcbiAgICAgICAgbWF0Y2hlZCA9IHF1ZXJ5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbWF0Y2hlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBtYXRjaGVkLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQWN0aXZhdGVzIHRoZSBicmVha3BvaW50IHdhdGNoZXIsIHdoaWNoIGZpcmVzIGFuIGV2ZW50IG9uIHRoZSB3aW5kb3cgd2hlbmV2ZXIgdGhlIGJyZWFrcG9pbnQgY2hhbmdlcy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfd2F0Y2hlcigpIHtcbiAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuemYubWVkaWFxdWVyeScpLm9uKCdyZXNpemUuemYubWVkaWFxdWVyeScsICgpID0+IHtcbiAgICAgIHZhciBuZXdTaXplID0gdGhpcy5fZ2V0Q3VycmVudFNpemUoKSwgY3VycmVudFNpemUgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChuZXdTaXplICE9PSBjdXJyZW50U2l6ZSkge1xuICAgICAgICAvLyBDaGFuZ2UgdGhlIGN1cnJlbnQgbWVkaWEgcXVlcnlcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbmV3U2l6ZTtcblxuICAgICAgICAvLyBCcm9hZGNhc3QgdGhlIG1lZGlhIHF1ZXJ5IGNoYW5nZSBvbiB0aGUgd2luZG93XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdjaGFuZ2VkLnpmLm1lZGlhcXVlcnknLCBbbmV3U2l6ZSwgY3VycmVudFNpemVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8vIFRoYW5rIHlvdTogaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmdcbmZ1bmN0aW9uIHBhcnNlU3R5bGVUb09iamVjdChzdHIpIHtcbiAgdmFyIHN0eWxlT2JqZWN0ID0ge307XG5cbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xuICB9XG5cbiAgc3RyID0gc3RyLnRyaW0oKS5zbGljZSgxLCAtMSk7IC8vIGJyb3dzZXJzIHJlLXF1b3RlIHN0cmluZyBzdHlsZSB2YWx1ZXNcblxuICBpZiAoIXN0cikge1xuICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgfVxuXG4gIHN0eWxlT2JqZWN0ID0gc3RyLnNwbGl0KCcmJykucmVkdWNlKGZ1bmN0aW9uKHJldCwgcGFyYW0pIHtcbiAgICB2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuICAgIHZhciBrZXkgPSBwYXJ0c1swXTtcbiAgICB2YXIgdmFsID0gcGFydHNbMV07XG4gICAga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG5cbiAgICAvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuICAgIC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcbiAgICB2YWwgPSB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuICAgIGlmICghcmV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldFtrZXldID0gdmFsO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXRba2V5XSkpIHtcbiAgICAgIHJldFtrZXldLnB1c2godmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0W2tleV0gPSBbcmV0W2tleV0sIHZhbF07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gc3R5bGVPYmplY3Q7XG59XG5cbmV4cG9ydCB7TWVkaWFRdWVyeX07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
