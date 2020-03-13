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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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

        var FOUNDATION_VERSION = '6.6.1'; // Global Foundation object
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

              var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']').filter(function () {
                return typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("zfPlugin") === 'undefined';
              }); // For each plugin found, initialize it

              $elem.each(function () {
                var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    opts = {
                  reflow: true
                };

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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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


        var Plugin = /*#__PURE__*/function () {
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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__); // Core Foundation Utilities, utilized in a number of places.

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


        function GetYoDigits() {
          var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
          var namespace = arguments.length > 1 ? arguments[1] : undefined;
          var str = '';
          var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
          var charsLength = chars.length;

          for (var i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * charsLength)];
          }

          return namespace ? "".concat(str, "-").concat(namespace) : str;
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
      0:
      /*!*****************************************************!*\
        !*** multi ./js/entries/plugins/foundation.core.js ***!
        \*****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.core.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uY29yZS5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi5jb3JlLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmNvcmUucGx1Z2luLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmNvcmUudXRpbHMuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24udXRpbC5tZWRpYVF1ZXJ5LmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIiQiLCJQbHVnaW4iLCJydGwiLCJHZXRZb0RpZ2l0cyIsInRyYW5zaXRpb25lbmQiLCJSZWdFeHBFc2NhcGUiLCJvbkxvYWQiLCJ3aW5kb3ciLCJGT1VOREFUSU9OX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiX3BsdWdpbnMiLCJfdXVpZHMiLCJwbHVnaW4iLCJjbGFzc05hbWUiLCJuYW1lIiwiZnVuY3Rpb25OYW1lIiwiYXR0ck5hbWUiLCJoeXBoZW5hdGUiLCJyZWdpc3RlclBsdWdpbiIsInBsdWdpbk5hbWUiLCJ1bnJlZ2lzdGVyUGx1Z2luIiwicmVJbml0IiwiaXNKUSIsInBsdWdpbnMiLCJ0eXBlIiwiX3RoaXMiLCJmbnMiLCJwbGdzIiwicCIsIk9iamVjdCIsImNvbnNvbGUiLCJyZWZsb3ciLCIkZWxlbSIsIiRlbCIsIm9wdHMiLCJ0aGluZyIsIm9wdCIsImVsIiwicGFyc2VWYWx1ZSIsImdldEZuTmFtZSIsImFkZFRvSnF1ZXJ5IiwiZm91bmRhdGlvbiIsIiRub0pTIiwiTWVkaWFRdWVyeSIsImFyZ3MiLCJBcnJheSIsInBsdWdDbGFzcyIsInRocm90dGxlIiwidGltZXIiLCJjb250ZXh0Iiwic2V0VGltZW91dCIsImZ1bmMiLCJEYXRlIiwidmVuZG9ycyIsImkiLCJ2cCIsImxhc3RUaW1lIiwibm93IiwibmV4dFRpbWUiLCJNYXRoIiwiY2FsbGJhY2siLCJzdGFydCIsIkZ1bmN0aW9uIiwiYUFyZ3MiLCJmVG9CaW5kIiwiZk5PUCIsImZCb3VuZCIsImZ1bmNOYW1lUmVnZXgiLCJyZXN1bHRzIiwiZm4iLCJpc05hTiIsInN0ciIsInBhcnNlRmxvYXQiLCJnZXRQbHVnaW5OYW1lIiwib2JqIiwibGVuZ3RoIiwibmFtZXNwYWNlIiwiY2hhcnMiLCJjaGFyc0xlbmd0aCIsInRyYW5zaXRpb25zIiwiZWxlbSIsImRvY3VtZW50IiwiZW5kIiwiZGlkTG9hZCIsImV2ZW50VHlwZSIsImNiIiwiaWdub3JlTGVhdmVXaW5kb3ciLCJpZ25vcmVSZWFwcGVhciIsInJlc3QiLCJoYW5kbGVyIiwiZUxlYXZlIiwiZVJlZW50ZXIiLCJkZWZhdWx0UXVlcmllcyIsImxhbmRzY2FwZSIsInBvcnRyYWl0IiwicmV0aW5hIiwic3R5bGVNZWRpYSIsInN0eWxlIiwic2NyaXB0IiwiaW5mbyIsIm1hdGNoTWVkaXVtIiwidGV4dCIsIm1hdGNoZXMiLCJtZWRpYSIsInF1ZXJpZXMiLCJjdXJyZW50IiwiX2luaXQiLCJzZWxmIiwiJG1ldGEiLCJleHRyYWN0ZWRTdHlsZXMiLCJuYW1lZFF1ZXJpZXMiLCJwYXJzZVN0eWxlVG9PYmplY3QiLCJ2YWx1ZSIsIl9yZUluaXQiLCJhdExlYXN0IiwicXVlcnkiLCJvbmx5Iiwic2l6ZSIsInVwVG8iLCJuZXh0U2l6ZSIsImlzIiwicGFydHMiLCJicFNpemUiLCJicE1vZGlmaWVyIiwiZ2V0IiwibmV4dCIsInF1ZXJ5SW5kZXgiLCJuZXh0UXVlcnkiLCJfZ2V0UXVlcnlOYW1lIiwiX2dldEN1cnJlbnRTaXplIiwibWF0Y2hlZCIsIl93YXRjaGVyIiwibmV3U2l6ZSIsImN1cnJlbnRTaXplIiwic3R5bGVPYmplY3QiLCJwYXJhbSIsImtleSIsInZhbCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJldCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsaUJBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUF5QyxVQUFBLFVBQUEsRUFBQSxJQUF6QztBQUF5QyxVQUFBLEtBQUEsRUFBQTtBQUF6QyxTQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQWdILGlCQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckksQ0FBQTtBQUNBOztBQUFBLGVBQUEsRUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxNQUFBLEdBQUEsTUFBQSxJQUFBLE1BQUEsQ0FBQSxVQUFBO0FBQ0E7QUFBQSxpQkFBQSxVQUFBLEdBQUE7QUFBMkIsaUJBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQTtBQUE0QixTQUR2RDtBQUVBO0FBQUEsaUJBQUEsZ0JBQUEsR0FBQTtBQUFpQyxpQkFBQSxNQUFBO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQTtBQUNBOzs7QUFBQSxlQUFBLE1BQUE7QUFDQTtBQUFBLE9BTkE7OztBQVFBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBO0FBQXNELGVBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLENBQUE7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOztBQUFBLGFBQUEsbUJBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGlDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFlBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsNkNBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFlBQUEsb0RBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsd0NBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1EQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLHVDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFFBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsb0RBQUEsQ0FBQSxRQUFBLENBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxLQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLG1EQUFBLENBQUEsS0FBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsYUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxtREFBQSxDQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLGNBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEs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R0FBRyxDQUFIQSxHQUFBQSxHQUFBQTtBQURGLGFBQUEsTUFFTyxJQUFJOUYsS0FBSyxDQUFMQSxPQUFBQSxDQUFjOEYsR0FBRyxDQUFyQixHQUFxQixDQUFqQjlGLENBQUosRUFBNkI7QUFDbEM4RixjQUFBQSxHQUFHLENBQUhBLEdBQUcsQ0FBSEEsQ0FBQUEsSUFBQUEsQ0FBQUEsR0FBQUE7QUFESyxhQUFBLE1BRUE7QUFDTEEsY0FBQUEsR0FBRyxDQUFIQSxHQUFHLENBQUhBLEdBQVcsQ0FBQ0EsR0FBRyxDQUFKLEdBQUksQ0FBSixFQUFYQSxHQUFXLENBQVhBO0FBQ0Q7O0FBQ0QsbUJBQUEsR0FBQTtBQWpCWSxXQUFBLEVBQWRMLEVBQWMsQ0FBZEE7QUFvQkEsaUJBQUEsV0FBQTtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1VELFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FQVUE7Q0FWQSIsImZpbGUiOiJmb3VuZGF0aW9uL2ZvdW5kYXRpb24uY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5jb3JlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSA9IHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSB8fCB7fSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdID0gZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIC0tLSBGb3VuZGF0aW9uIENvcmUgQVBJIC0tLVxuLy8gSW5pdGlhbGl6ZSBGb3VuZGF0aW9uIGFuZCBhZGQgc29tZSB1dGlsaXRpZXMgdG8gaXRzIHB1YmxpYyBBUEkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4vLyBQbGVhc2Ugbm90ZSB0aGF0IGV2ZXJ5IHV0aWxpdHkgZG8gbm90IGhhdmUgdG8gYmUgYWRkZWQgdG8gdGhlIGNvcmUgQVBJLlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLmNvcmUnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBydGwsIEdldFlvRGlnaXRzLCB0cmFuc2l0aW9uZW5kLCBSZWdFeHBFc2NhcGUsIG9uTG9hZCB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5cbkZvdW5kYXRpb24uYWRkVG9KcXVlcnkoJCk7XG5cbi8vIEV2ZXJ5IHBsdWdpbiBkZXBlbmRzIG9uIHBsdWdpbiBub3csIHdlIGNhbiBpbmNsdWRlIHRoYXQgb24gdGhlIGNvcmUgZm9yIHRoZVxuLy8gc2NyaXB0IGluY2x1c2lvbiBwYXRoLlxuRm91bmRhdGlvbi5QbHVnaW4gPSBQbHVnaW47XG5cbi8vIFRoZXNlIGFyZSBub3cgc2VwYXJhdGVkIG91dCwgYnV0IGhpc3RvcmljYWxseSB3ZXJlIGEgcGFydCBvZiB0aGlzIG1vZHVsZSxcbi8vIGFuZCBzaW5jZSB0aGlzIGlzIGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdlIGluY2x1ZGUgdGhlbSBpblxuLy8gdGhpcyBlbnRyeS5cbkZvdW5kYXRpb24ucnRsID0gcnRsO1xuRm91bmRhdGlvbi5HZXRZb0RpZ2l0cyA9IEdldFlvRGlnaXRzO1xuRm91bmRhdGlvbi50cmFuc2l0aW9uZW5kID0gdHJhbnNpdGlvbmVuZDtcbkZvdW5kYXRpb24uUmVnRXhwRXNjYXBlID0gUmVnRXhwRXNjYXBlO1xuRm91bmRhdGlvbi5vbkxvYWQgPSBvbkxvYWQ7XG5cbndpbmRvdy5Gb3VuZGF0aW9uID0gRm91bmRhdGlvbjtcblxuLy8gLS0tIEZvdW5kYXRpb24gQ29yZSBleHBvcnRzIC0tLVxuLy8gRXhwb3J0IFwiUGx1Z2luXCIgYW5kIGFsbCBjb3JlIHV0aWxpdGllcywgc2luY2UgdGhlIGBmb3VuZGF0aW9uLmNvcmVgIGVudHJ5IHBsYXlzIHRoZSByb2xlIG9mXG4vLyBhbGwgY29yZSBzb3VyY2UgZmlsZXMuXG5cbmV4cG9ydCB7IEZvdW5kYXRpb24gfTtcbmV4cG9ydCAqIGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuZXhwb3J0ICogZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBNZWRpYVF1ZXJ5IH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubWVkaWFRdWVyeSc7XG5cbnZhciBGT1VOREFUSU9OX1ZFUlNJT04gPSAnNi42LjEnO1xuXG4vLyBHbG9iYWwgRm91bmRhdGlvbiBvYmplY3Rcbi8vIFRoaXMgaXMgYXR0YWNoZWQgdG8gdGhlIHdpbmRvdywgb3IgdXNlZCBhcyBhIG1vZHVsZSBmb3IgQU1EL0Jyb3dzZXJpZnlcbnZhciBGb3VuZGF0aW9uID0ge1xuICB2ZXJzaW9uOiBGT1VOREFUSU9OX1ZFUlNJT04sXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBpbml0aWFsaXplZCBwbHVnaW5zLlxuICAgKi9cbiAgX3BsdWdpbnM6IHt9LFxuXG4gIC8qKlxuICAgKiBTdG9yZXMgZ2VuZXJhdGVkIHVuaXF1ZSBpZHMgZm9yIHBsdWdpbiBpbnN0YW5jZXNcbiAgICovXG4gIF91dWlkczogW10sXG5cbiAgLyoqXG4gICAqIERlZmluZXMgYSBGb3VuZGF0aW9uIHBsdWdpbiwgYWRkaW5nIGl0IHRvIHRoZSBgRm91bmRhdGlvbmAgbmFtZXNwYWNlIGFuZCB0aGUgbGlzdCBvZiBwbHVnaW5zIHRvIGluaXRpYWxpemUgd2hlbiByZWZsb3dpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW4gLSBUaGUgY29uc3RydWN0b3Igb2YgdGhlIHBsdWdpbi5cbiAgICovXG4gIHBsdWdpbjogZnVuY3Rpb24ocGx1Z2luLCBuYW1lKSB7XG4gICAgLy8gT2JqZWN0IGtleSB0byB1c2Ugd2hlbiBhZGRpbmcgdG8gZ2xvYmFsIEZvdW5kYXRpb24gb2JqZWN0XG4gICAgLy8gRXhhbXBsZXM6IEZvdW5kYXRpb24uUmV2ZWFsLCBGb3VuZGF0aW9uLk9mZkNhbnZhc1xuICAgIHZhciBjbGFzc05hbWUgPSAobmFtZSB8fCBmdW5jdGlvbk5hbWUocGx1Z2luKSk7XG4gICAgLy8gT2JqZWN0IGtleSB0byB1c2Ugd2hlbiBzdG9yaW5nIHRoZSBwbHVnaW4sIGFsc28gdXNlZCB0byBjcmVhdGUgdGhlIGlkZW50aWZ5aW5nIGRhdGEgYXR0cmlidXRlIGZvciB0aGUgcGx1Z2luXG4gICAgLy8gRXhhbXBsZXM6IGRhdGEtcmV2ZWFsLCBkYXRhLW9mZi1jYW52YXNcbiAgICB2YXIgYXR0ck5hbWUgID0gaHlwaGVuYXRlKGNsYXNzTmFtZSk7XG5cbiAgICAvLyBBZGQgdG8gdGhlIEZvdW5kYXRpb24gb2JqZWN0IGFuZCB0aGUgcGx1Z2lucyBsaXN0IChmb3IgcmVmbG93aW5nKVxuICAgIHRoaXMuX3BsdWdpbnNbYXR0ck5hbWVdID0gdGhpc1tjbGFzc05hbWVdID0gcGx1Z2luO1xuICB9LFxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIFBvcHVsYXRlcyB0aGUgX3V1aWRzIGFycmF5IHdpdGggcG9pbnRlcnMgdG8gZWFjaCBpbmRpdmlkdWFsIHBsdWdpbiBpbnN0YW5jZS5cbiAgICogQWRkcyB0aGUgYHpmUGx1Z2luYCBkYXRhLWF0dHJpYnV0ZSB0byBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0ZWQgcGx1Z2lucyB0byBhbGxvdyB1c2Ugb2YgJChzZWxlY3RvcikuZm91bmRhdGlvbihtZXRob2QpIGNhbGxzLlxuICAgKiBBbHNvIGZpcmVzIHRoZSBpbml0aWFsaXphdGlvbiBldmVudCBmb3IgZWFjaCBwbHVnaW4sIGNvbnNvbGlkYXRpbmcgcmVwZXRpdGl2ZSBjb2RlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGx1Z2luIC0gYW4gaW5zdGFuY2Ugb2YgYSBwbHVnaW4sIHVzdWFsbHkgYHRoaXNgIGluIGNvbnRleHQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIHBsdWdpbiwgcGFzc2VkIGFzIGEgY2FtZWxDYXNlZCBzdHJpbmcuXG4gICAqIEBmaXJlcyBQbHVnaW4jaW5pdFxuICAgKi9cbiAgcmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uKHBsdWdpbiwgbmFtZSl7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBuYW1lID8gaHlwaGVuYXRlKG5hbWUpIDogZnVuY3Rpb25OYW1lKHBsdWdpbi5jb25zdHJ1Y3RvcikudG9Mb3dlckNhc2UoKTtcbiAgICBwbHVnaW4udXVpZCA9IEdldFlvRGlnaXRzKDYsIHBsdWdpbk5hbWUpO1xuXG4gICAgaWYoIXBsdWdpbi4kZWxlbWVudC5hdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gKSl7IHBsdWdpbi4kZWxlbWVudC5hdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gLCBwbHVnaW4udXVpZCk7IH1cbiAgICBpZighcGx1Z2luLiRlbGVtZW50LmRhdGEoJ3pmUGx1Z2luJykpeyBwbHVnaW4uJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nLCBwbHVnaW4pOyB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBpbml0aWFsaXplZC5cbiAgICAgICAgICAgKiBAZXZlbnQgUGx1Z2luI2luaXRcbiAgICAgICAgICAgKi9cbiAgICBwbHVnaW4uJGVsZW1lbnQudHJpZ2dlcihgaW5pdC56Zi4ke3BsdWdpbk5hbWV9YCk7XG5cbiAgICB0aGlzLl91dWlkcy5wdXNoKHBsdWdpbi51dWlkKTtcblxuICAgIHJldHVybjtcbiAgfSxcbiAgLyoqXG4gICAqIEBmdW5jdGlvblxuICAgKiBSZW1vdmVzIHRoZSBwbHVnaW5zIHV1aWQgZnJvbSB0aGUgX3V1aWRzIGFycmF5LlxuICAgKiBSZW1vdmVzIHRoZSB6ZlBsdWdpbiBkYXRhIGF0dHJpYnV0ZSwgYXMgd2VsbCBhcyB0aGUgZGF0YS1wbHVnaW4tbmFtZSBhdHRyaWJ1dGUuXG4gICAqIEFsc28gZmlyZXMgdGhlIGRlc3Ryb3llZCBldmVudCBmb3IgdGhlIHBsdWdpbiwgY29uc29saWRhdGluZyByZXBldGl0aXZlIGNvZGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW4gLSBhbiBpbnN0YW5jZSBvZiBhIHBsdWdpbiwgdXN1YWxseSBgdGhpc2AgaW4gY29udGV4dC5cbiAgICogQGZpcmVzIFBsdWdpbiNkZXN0cm95ZWRcbiAgICovXG4gIHVucmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uKHBsdWdpbil7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBoeXBoZW5hdGUoZnVuY3Rpb25OYW1lKHBsdWdpbi4kZWxlbWVudC5kYXRhKCd6ZlBsdWdpbicpLmNvbnN0cnVjdG9yKSk7XG5cbiAgICB0aGlzLl91dWlkcy5zcGxpY2UodGhpcy5fdXVpZHMuaW5kZXhPZihwbHVnaW4udXVpZCksIDEpO1xuICAgIHBsdWdpbi4kZWxlbWVudC5yZW1vdmVBdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gKS5yZW1vdmVEYXRhKCd6ZlBsdWdpbicpXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBiZWVuIGRlc3Ryb3llZC5cbiAgICAgICAgICAgKiBAZXZlbnQgUGx1Z2luI2Rlc3Ryb3llZFxuICAgICAgICAgICAqL1xuICAgICAgICAgIC50cmlnZ2VyKGBkZXN0cm95ZWQuemYuJHtwbHVnaW5OYW1lfWApO1xuICAgIGZvcih2YXIgcHJvcCBpbiBwbHVnaW4pe1xuICAgICAgcGx1Z2luW3Byb3BdID0gbnVsbDsvL2NsZWFuIHVwIHNjcmlwdCB0byBwcmVwIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgfVxuICAgIHJldHVybjtcbiAgfSxcblxuICAvKipcbiAgICogQGZ1bmN0aW9uXG4gICAqIENhdXNlcyBvbmUgb3IgbW9yZSBhY3RpdmUgcGx1Z2lucyB0byByZS1pbml0aWFsaXplLCByZXNldHRpbmcgZXZlbnQgbGlzdGVuZXJzLCByZWNhbGN1bGF0aW5nIHBvc2l0aW9ucywgZXRjLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGx1Z2lucyAtIG9wdGlvbmFsIHN0cmluZyBvZiBhbiBpbmRpdmlkdWFsIHBsdWdpbiBrZXksIGF0dGFpbmVkIGJ5IGNhbGxpbmcgYCQoZWxlbWVudCkuZGF0YSgncGx1Z2luTmFtZScpYCwgb3Igc3RyaW5nIG9mIGEgcGx1Z2luIGNsYXNzIGkuZS4gYCdkcm9wZG93bidgXG4gICAqIEBkZWZhdWx0IElmIG5vIGFyZ3VtZW50IGlzIHBhc3NlZCwgcmVmbG93IGFsbCBjdXJyZW50bHkgYWN0aXZlIHBsdWdpbnMuXG4gICAqL1xuICAgcmVJbml0OiBmdW5jdGlvbihwbHVnaW5zKXtcbiAgICAgdmFyIGlzSlEgPSBwbHVnaW5zIGluc3RhbmNlb2YgJDtcbiAgICAgdHJ5e1xuICAgICAgIGlmKGlzSlEpe1xuICAgICAgICAgcGx1Z2lucy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICQodGhpcykuZGF0YSgnemZQbHVnaW4nKS5faW5pdCgpO1xuICAgICAgICAgfSk7XG4gICAgICAgfWVsc2V7XG4gICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBwbHVnaW5zLFxuICAgICAgICAgX3RoaXMgPSB0aGlzLFxuICAgICAgICAgZm5zID0ge1xuICAgICAgICAgICAnb2JqZWN0JzogZnVuY3Rpb24ocGxncyl7XG4gICAgICAgICAgICAgcGxncy5mb3JFYWNoKGZ1bmN0aW9uKHApe1xuICAgICAgICAgICAgICAgcCA9IGh5cGhlbmF0ZShwKTtcbiAgICAgICAgICAgICAgICQoJ1tkYXRhLScrIHAgKyddJykuZm91bmRhdGlvbignX2luaXQnKTtcbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgJ3N0cmluZyc6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgcGx1Z2lucyA9IGh5cGhlbmF0ZShwbHVnaW5zKTtcbiAgICAgICAgICAgICAkKCdbZGF0YS0nKyBwbHVnaW5zICsnXScpLmZvdW5kYXRpb24oJ19pbml0Jyk7XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgICd1bmRlZmluZWQnOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgIHRoaXNbJ29iamVjdCddKE9iamVjdC5rZXlzKF90aGlzLl9wbHVnaW5zKSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH07XG4gICAgICAgICBmbnNbdHlwZV0ocGx1Z2lucyk7XG4gICAgICAgfVxuICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgIH1maW5hbGx5e1xuICAgICAgIHJldHVybiBwbHVnaW5zO1xuICAgICB9XG4gICB9LFxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHBsdWdpbnMgb24gYW55IGVsZW1lbnRzIHdpdGhpbiBgZWxlbWAgKGFuZCBgZWxlbWAgaXRzZWxmKSB0aGF0IGFyZW4ndCBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbSAtIGpRdWVyeSBvYmplY3QgY29udGFpbmluZyB0aGUgZWxlbWVudCB0byBjaGVjayBpbnNpZGUuIEFsc28gY2hlY2tzIHRoZSBlbGVtZW50IGl0c2VsZiwgdW5sZXNzIGl0J3MgdGhlIGBkb2N1bWVudGAgb2JqZWN0LlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gcGx1Z2lucyAtIEEgbGlzdCBvZiBwbHVnaW5zIHRvIGluaXRpYWxpemUuIExlYXZlIHRoaXMgb3V0IHRvIGluaXRpYWxpemUgZXZlcnl0aGluZy5cbiAgICovXG4gIHJlZmxvdzogZnVuY3Rpb24oZWxlbSwgcGx1Z2lucykge1xuXG4gICAgLy8gSWYgcGx1Z2lucyBpcyB1bmRlZmluZWQsIGp1c3QgZ3JhYiBldmVyeXRoaW5nXG4gICAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcGx1Z2lucyA9IE9iamVjdC5rZXlzKHRoaXMuX3BsdWdpbnMpO1xuICAgIH1cbiAgICAvLyBJZiBwbHVnaW5zIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGFuIGFycmF5IHdpdGggb25lIGl0ZW1cbiAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBsdWdpbnMgPSBbcGx1Z2luc107XG4gICAgfVxuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIHBsdWdpblxuICAgICQuZWFjaChwbHVnaW5zLCBmdW5jdGlvbihpLCBuYW1lKSB7XG4gICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcGx1Z2luXG4gICAgICB2YXIgcGx1Z2luID0gX3RoaXMuX3BsdWdpbnNbbmFtZV07XG5cbiAgICAgIC8vIExvY2FsaXplIHRoZSBzZWFyY2ggdG8gYWxsIGVsZW1lbnRzIGluc2lkZSBlbGVtLCBhcyB3ZWxsIGFzIGVsZW0gaXRzZWxmLCB1bmxlc3MgZWxlbSA9PT0gZG9jdW1lbnRcbiAgICAgIHZhciAkZWxlbSA9ICQoZWxlbSkuZmluZCgnW2RhdGEtJytuYW1lKyddJykuYWRkQmFjaygnW2RhdGEtJytuYW1lKyddJykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiAkKHRoaXMpLmRhdGEoXCJ6ZlBsdWdpblwiKSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICB9KTtcblxuICAgICAgLy8gRm9yIGVhY2ggcGx1Z2luIGZvdW5kLCBpbml0aWFsaXplIGl0XG4gICAgICAkZWxlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgJGVsID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG9wdHMgPSB7IHJlZmxvdzogdHJ1ZSB9O1xuXG4gICAgICAgIGlmKCRlbC5hdHRyKCdkYXRhLW9wdGlvbnMnKSl7XG4gICAgICAgICAgdmFyIHRoaW5nID0gJGVsLmF0dHIoJ2RhdGEtb3B0aW9ucycpLnNwbGl0KCc7JykuZm9yRWFjaChmdW5jdGlvbihlLCBpKXtcbiAgICAgICAgICAgIHZhciBvcHQgPSBlLnNwbGl0KCc6JykubWFwKGZ1bmN0aW9uKGVsKXsgcmV0dXJuIGVsLnRyaW0oKTsgfSk7XG4gICAgICAgICAgICBpZihvcHRbMF0pIG9wdHNbb3B0WzBdXSA9IHBhcnNlVmFsdWUob3B0WzFdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0cnl7XG4gICAgICAgICAgJGVsLmRhdGEoJ3pmUGx1Z2luJywgbmV3IHBsdWdpbigkKHRoaXMpLCBvcHRzKSk7XG4gICAgICAgIH1jYXRjaChlcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcik7XG4gICAgICAgIH1maW5hbGx5e1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldEZuTmFtZTogZnVuY3Rpb25OYW1lLFxuXG4gIGFkZFRvSnF1ZXJ5OiBmdW5jdGlvbigkKSB7XG4gICAgLy8gVE9ETzogY29uc2lkZXIgbm90IG1ha2luZyB0aGlzIGEgalF1ZXJ5IGZ1bmN0aW9uXG4gICAgLy8gVE9ETzogbmVlZCB3YXkgdG8gcmVmbG93IHZzLiByZS1pbml0aWFsaXplXG4gICAgLyoqXG4gICAgICogVGhlIEZvdW5kYXRpb24galF1ZXJ5IG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gbWV0aG9kIC0gQW4gYWN0aW9uIHRvIHBlcmZvcm0gb24gdGhlIGN1cnJlbnQgalF1ZXJ5IG9iamVjdC5cbiAgICAgKi9cbiAgICB2YXIgZm91bmRhdGlvbiA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgbWV0aG9kLFxuICAgICAgICAgICRub0pTID0gJCgnLm5vLWpzJyk7XG5cbiAgICAgIGlmKCRub0pTLmxlbmd0aCl7XG4gICAgICAgICRub0pTLnJlbW92ZUNsYXNzKCduby1qcycpO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlID09PSAndW5kZWZpbmVkJyl7Ly9uZWVkcyB0byBpbml0aWFsaXplIHRoZSBGb3VuZGF0aW9uIG9iamVjdCwgb3IgYW4gaW5kaXZpZHVhbCBwbHVnaW4uXG4gICAgICAgIE1lZGlhUXVlcnkuX2luaXQoKTtcbiAgICAgICAgRm91bmRhdGlvbi5yZWZsb3codGhpcyk7XG4gICAgICB9ZWxzZSBpZih0eXBlID09PSAnc3RyaW5nJyl7Ly9hbiBpbmRpdmlkdWFsIG1ldGhvZCB0byBpbnZva2Ugb24gYSBwbHVnaW4gb3IgZ3JvdXAgb2YgcGx1Z2luc1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7Ly9jb2xsZWN0IGFsbCB0aGUgYXJndW1lbnRzLCBpZiBuZWNlc3NhcnlcbiAgICAgICAgdmFyIHBsdWdDbGFzcyA9IHRoaXMuZGF0YSgnemZQbHVnaW4nKTsvL2RldGVybWluZSB0aGUgY2xhc3Mgb2YgcGx1Z2luXG5cbiAgICAgICAgaWYodHlwZW9mIHBsdWdDbGFzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBsdWdDbGFzc1ttZXRob2RdICE9PSAndW5kZWZpbmVkJyl7Ly9tYWtlIHN1cmUgYm90aCB0aGUgY2xhc3MgYW5kIG1ldGhvZCBleGlzdFxuICAgICAgICAgIGlmKHRoaXMubGVuZ3RoID09PSAxKXsvL2lmIHRoZXJlJ3Mgb25seSBvbmUsIGNhbGwgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgIHBsdWdDbGFzc1ttZXRob2RdLmFwcGx5KHBsdWdDbGFzcywgYXJncyk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaSwgZWwpey8vb3RoZXJ3aXNlIGxvb3AgdGhyb3VnaCB0aGUgalF1ZXJ5IGNvbGxlY3Rpb24gYW5kIGludm9rZSB0aGUgbWV0aG9kIG9uIGVhY2hcbiAgICAgICAgICAgICAgcGx1Z0NsYXNzW21ldGhvZF0uYXBwbHkoJChlbCkuZGF0YSgnemZQbHVnaW4nKSwgYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNley8vZXJyb3IgZm9yIG5vIGNsYXNzIG9yIG5vIG1ldGhvZFxuICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIldlJ3JlIHNvcnJ5LCAnXCIgKyBtZXRob2QgKyBcIicgaXMgbm90IGFuIGF2YWlsYWJsZSBtZXRob2QgZm9yIFwiICsgKHBsdWdDbGFzcyA/IGZ1bmN0aW9uTmFtZShwbHVnQ2xhc3MpIDogJ3RoaXMgZWxlbWVudCcpICsgJy4nKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7Ly9lcnJvciBmb3IgaW52YWxpZCBhcmd1bWVudCB0eXBlXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFdlJ3JlIHNvcnJ5LCAke3R5cGV9IGlzIG5vdCBhIHZhbGlkIHBhcmFtZXRlci4gWW91IG11c3QgdXNlIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWV0aG9kIHlvdSB3aXNoIHRvIGludm9rZS5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgJC5mbi5mb3VuZGF0aW9uID0gZm91bmRhdGlvbjtcbiAgICByZXR1cm4gJDtcbiAgfVxufTtcblxuRm91bmRhdGlvbi51dGlsID0ge1xuICAvKipcbiAgICogRnVuY3Rpb24gZm9yIGFwcGx5aW5nIGEgZGVib3VuY2UgZWZmZWN0IHRvIGEgZnVuY3Rpb24gY2FsbC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgLSBGdW5jdGlvbiB0byBiZSBjYWxsZWQgYXQgZW5kIG9mIHRpbWVvdXQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSAtIFRpbWUgaW4gbXMgdG8gZGVsYXkgdGhlIGNhbGwgb2YgYGZ1bmNgLlxuICAgKiBAcmV0dXJucyBmdW5jdGlvblxuICAgKi9cbiAgdGhyb3R0bGU6IGZ1bmN0aW9uIChmdW5jLCBkZWxheSkge1xuICAgIHZhciB0aW1lciA9IG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICBpZiAodGltZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbndpbmRvdy5Gb3VuZGF0aW9uID0gRm91bmRhdGlvbjtcblxuLy8gUG9seWZpbGwgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuKGZ1bmN0aW9uKCkge1xuICBpZiAoIURhdGUubm93IHx8ICF3aW5kb3cuRGF0ZS5ub3cpXG4gICAgd2luZG93LkRhdGUubm93ID0gRGF0ZS5ub3cgPSBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9O1xuXG4gIHZhciB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsraSkge1xuICAgICAgdmFyIHZwID0gdmVuZG9yc1tpXTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnArJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKHdpbmRvd1t2cCsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93W3ZwKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSk7XG4gIH1cbiAgaWYgKC9pUChhZHxob25lfG9kKS4qT1MgNi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICB8fCAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgdmFyIGxhc3RUaW1lID0gMDtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhsYXN0VGltZSA9IG5leHRUaW1lKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFRpbWUgLSBub3cpO1xuICAgIH07XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xuICB9XG4gIC8qKlxuICAgKiBQb2x5ZmlsbCBmb3IgcGVyZm9ybWFuY2Uubm93LCByZXF1aXJlZCBieSByQUZcbiAgICovXG4gIGlmKCF3aW5kb3cucGVyZm9ybWFuY2UgfHwgIXdpbmRvdy5wZXJmb3JtYW5jZS5ub3cpe1xuICAgIHdpbmRvdy5wZXJmb3JtYW5jZSA9IHtcbiAgICAgIHN0YXJ0OiBEYXRlLm5vdygpLFxuICAgICAgbm93OiBmdW5jdGlvbigpeyByZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQ7IH1cbiAgICB9O1xuICB9XG59KSgpO1xuaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKG9UaGlzKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBjbG9zZXN0IHRoaW5nIHBvc3NpYmxlIHRvIHRoZSBFQ01BU2NyaXB0IDVcbiAgICAgIC8vIGludGVybmFsIElzQ2FsbGFibGUgZnVuY3Rpb25cbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIC0gd2hhdCBpcyB0cnlpbmcgdG8gYmUgYm91bmQgaXMgbm90IGNhbGxhYmxlJyk7XG4gICAgfVxuXG4gICAgdmFyIGFBcmdzICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICBmVG9CaW5kID0gdGhpcyxcbiAgICAgICAgZk5PUCAgICA9IGZ1bmN0aW9uKCkge30sXG4gICAgICAgIGZCb3VuZCAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gZlRvQmluZC5hcHBseSh0aGlzIGluc3RhbmNlb2YgZk5PUFxuICAgICAgICAgICAgICAgICA/IHRoaXNcbiAgICAgICAgICAgICAgICAgOiBvVGhpcyxcbiAgICAgICAgICAgICAgICAgYUFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfTtcblxuICAgIGlmICh0aGlzLnByb3RvdHlwZSkge1xuICAgICAgLy8gbmF0aXZlIGZ1bmN0aW9ucyBkb24ndCBoYXZlIGEgcHJvdG90eXBlXG4gICAgICBmTk9QLnByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuICAgIH1cbiAgICBmQm91bmQucHJvdG90eXBlID0gbmV3IGZOT1AoKTtcblxuICAgIHJldHVybiBmQm91bmQ7XG4gIH07XG59XG4vLyBQb2x5ZmlsbCB0byBnZXQgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiBpbiBJRTlcbmZ1bmN0aW9uIGZ1bmN0aW9uTmFtZShmbikge1xuICBpZiAodHlwZW9mIEZ1bmN0aW9uLnByb3RvdHlwZS5uYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uXFxzKFteKF17MSx9KVxcKC87XG4gICAgdmFyIHJlc3VsdHMgPSAoZnVuY05hbWVSZWdleCkuZXhlYygoZm4pLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXS50cmltKCkgOiBcIlwiO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBmbi5wcm90b3R5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZuLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZuLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZVZhbHVlKHN0cil7XG4gIGlmICgndHJ1ZScgPT09IHN0cikgcmV0dXJuIHRydWU7XG4gIGVsc2UgaWYgKCdmYWxzZScgPT09IHN0cikgcmV0dXJuIGZhbHNlO1xuICBlbHNlIGlmICghaXNOYU4oc3RyICogMSkpIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG4gIHJldHVybiBzdHI7XG59XG4vLyBDb252ZXJ0IFBhc2NhbENhc2UgdG8ga2ViYWItY2FzZVxuLy8gVGhhbmsgeW91OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS84OTU1NTgwXG5mdW5jdGlvbiBoeXBoZW5hdGUoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxuZXhwb3J0IHtGb3VuZGF0aW9ufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEdldFlvRGlnaXRzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuXG4vLyBBYnN0cmFjdCBjbGFzcyBmb3IgcHJvdmlkaW5nIGxpZmVjeWNsZSBob29rcy4gRXhwZWN0IHBsdWdpbnMgdG8gZGVmaW5lIEFUIExFQVNUXG4vLyB7ZnVuY3Rpb259IF9zZXR1cCAocmVwbGFjZXMgcHJldmlvdXMgY29uc3RydWN0b3IpLFxuLy8ge2Z1bmN0aW9ufSBfZGVzdHJveSAocmVwbGFjZXMgcHJldmlvdXMgZGVzdHJveSlcbmNsYXNzIFBsdWdpbiB7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIHZhciBwbHVnaW5OYW1lID0gZ2V0UGx1Z2luTmFtZSh0aGlzKTtcbiAgICB0aGlzLnV1aWQgPSBHZXRZb0RpZ2l0cyg2LCBwbHVnaW5OYW1lKTtcblxuICAgIGlmKCF0aGlzLiRlbGVtZW50LmF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApKXsgdGhpcy4kZWxlbWVudC5hdHRyKGBkYXRhLSR7cGx1Z2luTmFtZX1gLCB0aGlzLnV1aWQpOyB9XG4gICAgaWYoIXRoaXMuJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nKSl7IHRoaXMuJGVsZW1lbnQuZGF0YSgnemZQbHVnaW4nLCB0aGlzKTsgfVxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBoYXMgaW5pdGlhbGl6ZWQuXG4gICAgICogQGV2ZW50IFBsdWdpbiNpbml0XG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGBpbml0LnpmLiR7cGx1Z2luTmFtZX1gKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveSgpO1xuICAgIHZhciBwbHVnaW5OYW1lID0gZ2V0UGx1Z2luTmFtZSh0aGlzKTtcbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoYGRhdGEtJHtwbHVnaW5OYW1lfWApLnJlbW92ZURhdGEoJ3pmUGx1Z2luJylcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBoYXMgYmVlbiBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBldmVudCBQbHVnaW4jZGVzdHJveWVkXG4gICAgICAgICAqL1xuICAgICAgICAudHJpZ2dlcihgZGVzdHJveWVkLnpmLiR7cGx1Z2luTmFtZX1gKTtcbiAgICBmb3IodmFyIHByb3AgaW4gdGhpcyl7XG4gICAgICB0aGlzW3Byb3BdID0gbnVsbDsvL2NsZWFuIHVwIHNjcmlwdCB0byBwcmVwIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgfVxuICB9XG59XG5cbi8vIENvbnZlcnQgUGFzY2FsQ2FzZSB0byBrZWJhYi1jYXNlXG4vLyBUaGFuayB5b3U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzg5NTU1ODBcbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRQbHVnaW5OYW1lKG9iaikge1xuICBpZih0eXBlb2Yob2JqLmNvbnN0cnVjdG9yLm5hbWUpICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBoeXBoZW5hdGUob2JqLmNvbnN0cnVjdG9yLm5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBoeXBoZW5hdGUob2JqLmNsYXNzTmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IHtQbHVnaW59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8vIENvcmUgRm91bmRhdGlvbiBVdGlsaXRpZXMsIHV0aWxpemVkIGluIGEgbnVtYmVyIG9mIHBsYWNlcy5cblxuICAvKipcbiAgICogUmV0dXJucyBhIGJvb2xlYW4gZm9yIFJUTCBzdXBwb3J0XG4gICAqL1xuZnVuY3Rpb24gcnRsKCkge1xuICByZXR1cm4gJCgnaHRtbCcpLmF0dHIoJ2RpcicpID09PSAncnRsJztcbn1cblxuLyoqXG4gKiByZXR1cm5zIGEgcmFuZG9tIGJhc2UtMzYgdWlkIHdpdGggbmFtZXNwYWNpbmdcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIG51bWJlciBvZiByYW5kb20gYmFzZS0zNiBkaWdpdHMgZGVzaXJlZC4gSW5jcmVhc2UgZm9yIG1vcmUgcmFuZG9tIHN0cmluZ3MuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIC0gbmFtZSBvZiBwbHVnaW4gdG8gYmUgaW5jb3Jwb3JhdGVkIGluIHVpZCwgb3B0aW9uYWwuXG4gKiBAZGVmYXVsdCB7U3RyaW5nfSAnJyAtIGlmIG5vIHBsdWdpbiBuYW1lIGlzIHByb3ZpZGVkLCBub3RoaW5nIGlzIGFwcGVuZGVkIHRvIHRoZSB1aWQuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSAtIHVuaXF1ZSBpZFxuICovXG5mdW5jdGlvbiBHZXRZb0RpZ2l0cyhsZW5ndGggPSA2LCBuYW1lc3BhY2Upe1xuICBsZXQgc3RyID0gJyc7XG4gIGNvbnN0IGNoYXJzID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gIGNvbnN0IGNoYXJzTGVuZ3RoID0gY2hhcnMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgc3RyICs9IGNoYXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzTGVuZ3RoKV07XG4gIH1cbiAgcmV0dXJuIG5hbWVzcGFjZSA/IGAke3N0cn0tJHtuYW1lc3BhY2V9YCA6IHN0cjtcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBzdHJpbmcgc28gaXQgY2FuIGJlIHVzZWQgYXMgYSByZWdleHAgcGF0dGVyblxuICogQGZ1bmN0aW9uXG4gKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85MzEwNzUyLzQzMTczODRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gc3RyaW5nIHRvIGVzY2FwZS5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gZXNjYXBlZCBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gUmVnRXhwRXNjYXBlKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy1bXFxde30oKSorPy4sXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbmVuZCgkZWxlbSl7XG4gIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb3RyYW5zaXRpb25lbmQnXG4gIH07XG4gIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBlbmQ7XG5cbiAgZm9yICh2YXIgdCBpbiB0cmFuc2l0aW9ucyl7XG4gICAgaWYgKHR5cGVvZiBlbGVtLnN0eWxlW3RdICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICBlbmQgPSB0cmFuc2l0aW9uc1t0XTtcbiAgICB9XG4gIH1cbiAgaWYoZW5kKXtcbiAgICByZXR1cm4gZW5kO1xuICB9ZWxzZXtcbiAgICBlbmQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAkZWxlbS50cmlnZ2VySGFuZGxlcigndHJhbnNpdGlvbmVuZCcsIFskZWxlbV0pO1xuICAgIH0sIDEpO1xuICAgIHJldHVybiAndHJhbnNpdGlvbmVuZCc7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gZXZlbnQgdHlwZSB0byBsaXN0ZW4gZm9yIHdpbmRvdyBsb2FkLlxuICpcbiAqIElmIGAkZWxlbWAgaXMgcGFzc2VkLCBhbiBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCBvbiBgJGVsZW1gLiBJZiB3aW5kb3cgaXMgYWxyZWFkeSBsb2FkZWQsIHRoZSBldmVudCB3aWxsIHN0aWxsIGJlIHRyaWdnZXJlZC5cbiAqIElmIGBoYW5kbGVyYCBpcyBwYXNzZWQsIGF0dGFjaCBpdCB0byB0aGUgZXZlbnQgb24gYCRlbGVtYC5cbiAqIENhbGxpbmcgYG9uTG9hZGAgd2l0aG91dCBoYW5kbGVyIGFsbG93cyB5b3UgdG8gZ2V0IHRoZSBldmVudCB0eXBlIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYmVmb3JlIGF0dGFjaGluZyB0aGUgaGFuZGxlciBieSB5b3Vyc2VsZi5cbiAqIEBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbXSAkZWxlbSAtIGpRdWVyeSBlbGVtZW50IG9uIHdoaWNoIHRoZSBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCBpZiBwYXNzZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbXSBoYW5kbGVyIC0gZnVuY3Rpb24gdG8gYXR0YWNoIHRvIHRoZSBldmVudC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IC0gZXZlbnQgdHlwZSB0aGF0IHNob3VsZCBvciB3aWxsIGJlIHRyaWdnZXJlZC5cbiAqL1xuZnVuY3Rpb24gb25Mb2FkKCRlbGVtLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGRpZExvYWQgPSBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnO1xuICBjb25zdCBldmVudFR5cGUgPSAoZGlkTG9hZCA/ICdfZGlkTG9hZCcgOiAnbG9hZCcpICsgJy56Zi51dGlsLm9uTG9hZCc7XG4gIGNvbnN0IGNiID0gKCkgPT4gJGVsZW0udHJpZ2dlckhhbmRsZXIoZXZlbnRUeXBlKTtcblxuICBpZiAoJGVsZW0pIHtcbiAgICBpZiAoaGFuZGxlcikgJGVsZW0ub25lKGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAoZGlkTG9hZClcbiAgICAgIHNldFRpbWVvdXQoY2IpO1xuICAgIGVsc2VcbiAgICAgICQod2luZG93KS5vbmUoJ2xvYWQnLCBjYik7XG4gIH1cblxuICByZXR1cm4gZXZlbnRUeXBlO1xufVxuXG4vKipcbiAqIFJldHVucyBhbiBoYW5kbGVyIGZvciB0aGUgYG1vdXNlbGVhdmVgIHRoYXQgaWdub3JlIGRpc2FwcGVhcmVkIG1vdXNlcy5cbiAqXG4gKiBJZiB0aGUgbW91c2UgXCJkaXNhcHBlYXJlZFwiIGZyb20gdGhlIGRvY3VtZW50IChsaWtlIHdoZW4gZ29pbmcgb24gYSBicm93c2VyIFVJIGVsZW1lbnQsIFNlZSBodHRwczovL2dpdC5pby96Zi0xMTQxMCksXG4gKiB0aGUgZXZlbnQgaXMgaWdub3JlZC5cbiAqIC0gSWYgdGhlIGBpZ25vcmVMZWF2ZVdpbmRvd2AgaXMgYHRydWVgLCB0aGUgZXZlbnQgaXMgaWdub3JlZCB3aGVuIHRoZSB1c2VyIGFjdHVhbGx5IGxlZnQgdGhlIHdpbmRvd1xuICogICAobGlrZSBieSBzd2l0Y2hpbmcgdG8gYW4gb3RoZXIgd2luZG93IHdpdGggW0FsdF0rW1RhYl0pLlxuICogLSBJZiB0aGUgYGlnbm9yZVJlYXBwZWFyYCBpcyBgdHJ1ZWAsIHRoZSBldmVudCB3aWxsIGJlIGlnbm9yZWQgd2hlbiB0aGUgbW91c2Ugd2lsbCByZWFwcGVhciBsYXRlciBvbiB0aGUgZG9jdW1lbnRcbiAqICAgb3V0c2lkZSBvZiB0aGUgZWxlbWVudCBpdCBsZWZ0LlxuICpcbiAqIEBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtdIGhhbmRsZXIgLSBoYW5kbGVyIGZvciB0aGUgZmlsdGVyZWQgYG1vdXNlbGVhdmVgIGV2ZW50IHRvIHdhdGNoLlxuICogQHBhcmFtIHtPYmplY3R9IFtdIG9wdGlvbnMgLSBvYmplY3Qgb2Ygb3B0aW9uczpcbiAqIC0ge0Jvb2xlYW59IFtmYWxzZV0gaWdub3JlTGVhdmVXaW5kb3cgLSBhbHNvIGlnbm9yZSB3aGVuIHRoZSB1c2VyIHN3aXRjaGVkIHdpbmRvd3MuXG4gKiAtIHtCb29sZWFufSBbZmFsc2VdIGlnbm9yZVJlYXBwZWFyIC0gYWxzbyBpZ25vcmUgd2hlbiB0aGUgbW91c2UgcmVhcHBlYXJlZCBvdXRzaWRlIG9mIHRoZSBlbGVtZW50IGl0IGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IC0gZmlsdGVyZWQgaGFuZGxlciB0byB1c2UgdG8gbGlzdGVuIG9uIHRoZSBgbW91c2VsZWF2ZWAgZXZlbnQuXG4gKi9cbmZ1bmN0aW9uIGlnbm9yZU1vdXNlZGlzYXBwZWFyKGhhbmRsZXIsIHsgaWdub3JlTGVhdmVXaW5kb3cgPSBmYWxzZSwgaWdub3JlUmVhcHBlYXIgPSBmYWxzZSB9ID0ge30pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGxlYXZlRXZlbnRIYW5kbGVyKGVMZWF2ZSwgLi4ucmVzdCkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gaGFuZGxlci5iaW5kKHRoaXMsIGVMZWF2ZSwgLi4ucmVzdCk7XG5cbiAgICAvLyBUaGUgbW91c2UgbGVmdDogY2FsbCB0aGUgZ2l2ZW4gY2FsbGJhY2sgaWYgdGhlIG1vdXNlIGVudGVyZWQgZWxzZXdoZXJlXG4gICAgaWYgKGVMZWF2ZS5yZWxhdGVkVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIGNoZWNrIGlmIHRoZSBtb3VzZSBhY3R1YWxseSBsZWZ0IHRoZSB3aW5kb3cuXG4gICAgLy8gSW4gZmlyZWZveCBpZiB0aGUgdXNlciBzd2l0Y2hlZCBiZXR3ZWVuIHdpbmRvd3MsIHRoZSB3aW5kb3cgc2lsbCBoYXZlIHRoZSBmb2N1cyBieSB0aGUgdGltZVxuICAgIC8vIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQuIFdlIGhhdmUgdG8gZGVib3VuY2UgdGhlIGV2ZW50IHRvIHRlc3QgdGhpcyBjYXNlLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gbGVhdmVFdmVudERlYm91bmNlcigpIHtcbiAgICAgIGlmICghaWdub3JlTGVhdmVXaW5kb3cgJiYgZG9jdW1lbnQuaGFzRm9jdXMgJiYgIWRvY3VtZW50Lmhhc0ZvY3VzKCkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgd2FpdCBmb3IgdGhlIG1vdXNlIHRvIHJlZWFwZWFyIG91dHNpZGUgb2YgdGhlIGVsZW1lbnQsXG4gICAgICBpZiAoIWlnbm9yZVJlYXBwZWFyKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uZSgnbW91c2VlbnRlcicsIGZ1bmN0aW9uIHJlZW50ZXJFdmVudEhhbmRsZXIoZVJlZW50ZXIpIHtcbiAgICAgICAgICBpZiAoISQoZUxlYXZlLmN1cnJlbnRUYXJnZXQpLmhhcyhlUmVlbnRlci50YXJnZXQpLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gRmlsbCB3aGVyZSB0aGUgbW91c2UgZmluYWxseSBlbnRlcmVkLlxuICAgICAgICAgICAgZUxlYXZlLnJlbGF0ZWRUYXJnZXQgPSBlUmVlbnRlci50YXJnZXQ7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LCAwKTtcbiAgfTtcbn1cblxuXG5leHBvcnQgeyBydGwsIEdldFlvRGlnaXRzLCBSZWdFeHBFc2NhcGUsIHRyYW5zaXRpb25lbmQsIG9uTG9hZCwgaWdub3JlTW91c2VkaXNhcHBlYXIgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy8gRGVmYXVsdCBzZXQgb2YgbWVkaWEgcXVlcmllc1xuY29uc3QgZGVmYXVsdFF1ZXJpZXMgPSB7XG4gICdkZWZhdWx0JyA6ICdvbmx5IHNjcmVlbicsXG4gIGxhbmRzY2FwZSA6ICdvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgcG9ydHJhaXQgOiAnb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgcmV0aW5hIDogJ29ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwnICtcbiAgICAnb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCcgK1xuICAgICdvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIvMSksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMiksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSksJyArXG4gICAgJ29ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDJkcHB4KSdcbiAgfTtcblxuXG4vLyBtYXRjaE1lZGlhKCkgcG9seWZpbGwgLSBUZXN0IGEgQ1NTIG1lZGlhIHR5cGUvcXVlcnkgaW4gSlMuXG4vLyBBdXRob3JzICYgY29weXJpZ2h0IMKpIDIwMTI6IFNjb3R0IEplaGwsIFBhdWwgSXJpc2gsIE5pY2hvbGFzIFpha2FzLCBEYXZpZCBLbmlnaHQuIE1JVCBsaWNlbnNlXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xud2luZG93Lm1hdGNoTWVkaWEgfHwgKHdpbmRvdy5tYXRjaE1lZGlhID0gKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLy8gRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBtYXRjaE1lZGl1bSBhcGkgc3VjaCBhcyBJRSA5IGFuZCB3ZWJraXRcbiAgdmFyIHN0eWxlTWVkaWEgPSAod2luZG93LnN0eWxlTWVkaWEgfHwgd2luZG93Lm1lZGlhKTtcblxuICAvLyBGb3IgdGhvc2UgdGhhdCBkb24ndCBzdXBwb3J0IG1hdGNoTWVkaXVtXG4gIGlmICghc3R5bGVNZWRpYSkge1xuICAgIHZhciBzdHlsZSAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSxcbiAgICBzY3JpcHQgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXSxcbiAgICBpbmZvICAgICAgICA9IG51bGw7XG5cbiAgICBzdHlsZS50eXBlICA9ICd0ZXh0L2Nzcyc7XG4gICAgc3R5bGUuaWQgICAgPSAnbWF0Y2htZWRpYWpzLXRlc3QnO1xuXG4gICAgaWYgKCFzY3JpcHQpIHtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGUsIHNjcmlwdCk7XG4gICAgfVxuXG4gICAgLy8gJ3N0eWxlLmN1cnJlbnRTdHlsZScgaXMgdXNlZCBieSBJRSA8PSA4IGFuZCAnd2luZG93LmdldENvbXB1dGVkU3R5bGUnIGZvciBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICBpbmZvID0gKCdnZXRDb21wdXRlZFN0eWxlJyBpbiB3aW5kb3cpICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHN0eWxlLCBudWxsKSB8fCBzdHlsZS5jdXJyZW50U3R5bGU7XG5cbiAgICBzdHlsZU1lZGlhID0ge1xuICAgICAgbWF0Y2hNZWRpdW06IGZ1bmN0aW9uIChtZWRpYSkge1xuICAgICAgICB2YXIgdGV4dCA9ICdAbWVkaWEgJyArIG1lZGlhICsgJ3sgI21hdGNobWVkaWFqcy10ZXN0IHsgd2lkdGg6IDFweDsgfSB9JztcblxuICAgICAgICAvLyAnc3R5bGUuc3R5bGVTaGVldCcgaXMgdXNlZCBieSBJRSA8PSA4IGFuZCAnc3R5bGUudGV4dENvbnRlbnQnIGZvciBhbGwgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSB0ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRlc3QgaWYgbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZVxuICAgICAgICByZXR1cm4gaW5mby53aWR0aCA9PT0gJzFweCc7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihtZWRpYSkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXRjaGVzOiBzdHlsZU1lZGlhLm1hdGNoTWVkaXVtKG1lZGlhIHx8ICdhbGwnKSxcbiAgICAgIG1lZGlhOiBtZWRpYSB8fCAnYWxsJ1xuICAgIH07XG4gIH07XG59KSgpKTtcbi8qIGVzbGludC1lbmFibGUgKi9cblxudmFyIE1lZGlhUXVlcnkgPSB7XG4gIHF1ZXJpZXM6IFtdLFxuXG4gIGN1cnJlbnQ6ICcnLFxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgbWVkaWEgcXVlcnkgaGVscGVyLCBieSBleHRyYWN0aW5nIHRoZSBicmVha3BvaW50IGxpc3QgZnJvbSB0aGUgQ1NTIGFuZCBhY3RpdmF0aW5nIHRoZSBicmVha3BvaW50IHdhdGNoZXIuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIGluaXRpYWxpemF0aW9uIGlzIG9ubHkgZG9uZSBvbmNlIHdoZW4gY2FsbGluZyBfaW5pdCgpIHNldmVyYWwgdGltZXNcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciAkbWV0YSA9ICQoJ21ldGEuZm91bmRhdGlvbi1tcScpO1xuICAgIGlmKCEkbWV0YS5sZW5ndGgpe1xuICAgICAgJCgnPG1ldGEgY2xhc3M9XCJmb3VuZGF0aW9uLW1xXCI+JykuYXBwZW5kVG8oZG9jdW1lbnQuaGVhZCk7XG4gICAgfVxuXG4gICAgdmFyIGV4dHJhY3RlZFN0eWxlcyA9ICQoJy5mb3VuZGF0aW9uLW1xJykuY3NzKCdmb250LWZhbWlseScpO1xuICAgIHZhciBuYW1lZFF1ZXJpZXM7XG5cbiAgICBuYW1lZFF1ZXJpZXMgPSBwYXJzZVN0eWxlVG9PYmplY3QoZXh0cmFjdGVkU3R5bGVzKTtcblxuICAgIHNlbGYucXVlcmllcyA9IFtdOyAvLyByZXNldFxuXG4gICAgZm9yICh2YXIga2V5IGluIG5hbWVkUXVlcmllcykge1xuICAgICAgaWYobmFtZWRRdWVyaWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc2VsZi5xdWVyaWVzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICB2YWx1ZTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke25hbWVkUXVlcmllc1trZXldfSlgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuX2dldEN1cnJlbnRTaXplKCk7XG5cbiAgICB0aGlzLl93YXRjaGVyKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlaW5pdGlhbGl6ZXMgdGhlIG1lZGlhIHF1ZXJ5IGhlbHBlci5cbiAgICogVXNlZnVsIGlmIHlvdXIgQ1NTIGJyZWFrcG9pbnQgY29uZmlndXJhdGlvbiBoYXMganVzdCBiZWVuIGxvYWRlZCBvciBoYXMgY2hhbmdlZCBzaW5jZSB0aGUgaW5pdGlhbGl6YXRpb24uXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlSW5pdCgpIHtcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2NyZWVuIGlzIGF0IGxlYXN0IGFzIHdpZGUgYXMgYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBicmVha3BvaW50IG1hdGNoZXMsIGBmYWxzZWAgaWYgaXQncyBzbWFsbGVyLlxuICAgKi9cbiAgYXRMZWFzdChzaXplKSB7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5nZXQoc2l6ZSk7XG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2NyZWVuIGlzIHdpdGhpbiB0aGUgZ2l2ZW4gYnJlYWtwb2ludC5cbiAgICogSWYgc21hbGxlciB0aGFuIHRoZSBicmVha3BvaW50IG9mIGxhcmdlciB0aGFuIGl0cyB1cHBlciBsaW1pdCBpdCByZXR1cm5zIGZhbHNlLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBicmVha3BvaW50IG1hdGNoZXMsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgKi9cbiAgb25seShzaXplKSB7XG4gICAgcmV0dXJuIHNpemUgPT09IHRoaXMuX2dldEN1cnJlbnRTaXplKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2NyZWVuIGlzIHdpdGhpbiBhIGJyZWFrcG9pbnQgb3Igc21hbGxlci5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaXplIC0gTmFtZSBvZiB0aGUgYnJlYWtwb2ludCB0byBjaGVjay5cbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYnJlYWtwb2ludCBtYXRjaGVzLCBgZmFsc2VgIGlmIGl0J3MgbGFyZ2VyLlxuICAgKi9cbiAgdXBUbyhzaXplKSB7XG4gICAgY29uc3QgbmV4dFNpemUgPSB0aGlzLm5leHQoc2l6ZSk7XG5cbiAgICAvLyBJZiB0aGUgbmV4dCBicmVha3BvaW50IGRvZXMgbm90IG1hdGNoLCB0aGUgc2NyZWVuIGlzIHNtYWxsZXIgdGhhblxuICAgIC8vIHRoZSB1cHBlciBsaW1pdCBvZiB0aGlzIGJyZWFrcG9pbnQuXG4gICAgaWYgKG5leHRTaXplKSB7XG4gICAgICByZXR1cm4gIXRoaXMuYXRMZWFzdChuZXh0U2l6ZSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gbmV4dCBicmVha3BvaW50LCB0aGUgXCJzaXplXCIgYnJlYWtwb2ludCBkb2VzIG5vdCBoYXZlXG4gICAgLy8gYW4gdXBwZXIgbGltaXQgYW5kIHRoZSBzY3JlZW4gd2lsbCBhbHdheXMgYmUgd2l0aGluIGl0IG9yIHNtYWxsZXIuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc2NyZWVuIG1hdGNoZXMgdG8gYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGNoZWNrLCBlaXRoZXIgJ3NtYWxsIG9ubHknIG9yICdzbWFsbCcuIE9taXR0aW5nICdvbmx5JyBmYWxscyBiYWNrIHRvIHVzaW5nIGF0TGVhc3QoKSBtZXRob2QuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGJyZWFrcG9pbnQgbWF0Y2hlcywgYGZhbHNlYCBpZiBpdCBkb2VzIG5vdC5cbiAgICovXG4gIGlzKHNpemUpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHNpemUudHJpbSgpLnNwbGl0KCcgJykuZmlsdGVyKHAgPT4gISFwLmxlbmd0aCk7XG4gICAgY29uc3QgW2JwU2l6ZSwgYnBNb2RpZmllciA9ICcnXSA9IHBhcnRzO1xuXG4gICAgLy8gT25seSB0aGUgYnJlYWtwb250XG4gICAgaWYgKGJwTW9kaWZpZXIgPT09ICdvbmx5Jykge1xuICAgICAgcmV0dXJuIHRoaXMub25seShicFNpemUpO1xuICAgIH1cbiAgICAvLyBBdCBsZWFzdCB0aGUgYnJlYWtwb2ludCAoaW5jbHVkZWQpXG4gICAgaWYgKCFicE1vZGlmaWVyIHx8IGJwTW9kaWZpZXIgPT09ICd1cCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0TGVhc3QoYnBTaXplKTtcbiAgICB9XG4gICAgLy8gVXAgdG8gdGhlIGJyZWFrcG9pbnQgKGluY2x1ZGVkKVxuICAgIGlmIChicE1vZGlmaWVyID09PSAnZG93bicpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwVG8oYnBTaXplKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgSW52YWxpZCBicmVha3BvaW50IHBhc3NlZCB0byBNZWRpYVF1ZXJ5LmlzKCkuXG4gICAgICBFeHBlY3RlZCBhIGJyZWFrcG9pbnQgbmFtZSBmb3JtYXR0ZWQgbGlrZSBcIjxzaXplPiA8bW9kaWZpZXI+XCIsIGdvdCBcIiR7c2l6ZX1cIi5cbiAgICBgKTtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgbWVkaWEgcXVlcnkgb2YgYSBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50IHRvIGdldC5cbiAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSAtIFRoZSBtZWRpYSBxdWVyeSBvZiB0aGUgYnJlYWtwb2ludCwgb3IgYG51bGxgIGlmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QuXG4gICAqL1xuICBnZXQoc2l6ZSkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5xdWVyaWVzKSB7XG4gICAgICBpZih0aGlzLnF1ZXJpZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW2ldO1xuICAgICAgICBpZiAoc2l6ZSA9PT0gcXVlcnkubmFtZSkgcmV0dXJuIHF1ZXJ5LnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGJyZWFrcG9pbnQgZm9sbG93aW5nIHRoZSBnaXZlbiBicmVha3BvaW50LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBOYW1lIG9mIHRoZSBicmVha3BvaW50LlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IC0gVGhlIG5hbWUgb2YgdGhlIGZvbGxvd2luZyBicmVha3BvaW50LCBvciBgbnVsbGAgaWYgdGhlIHBhc3NlZCBicmVha3BvaW50IHdhcyB0aGUgbGFzdCBvbmUuXG4gICAqL1xuICBuZXh0KHNpemUpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gdGhpcy5xdWVyaWVzLmZpbmRJbmRleCgocSkgPT4gdGhpcy5fZ2V0UXVlcnlOYW1lKHEpID09PSBzaXplKTtcbiAgICBpZiAocXVlcnlJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgIFVua25vd24gYnJlYWtwb2ludCBcIiR7c2l6ZX1cIiBwYXNzZWQgdG8gTWVkaWFRdWVyeS5uZXh0KCkuXG4gICAgICAgIEVuc3VyZSBpdCBpcyBwcmVzZW50IGluIHlvdXIgU2FzcyBcIiRicmVha3BvaW50c1wiIHNldHRpbmcuXG4gICAgICBgKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0UXVlcnkgPSB0aGlzLnF1ZXJpZXNbcXVlcnlJbmRleCArIDFdO1xuICAgIHJldHVybiBuZXh0UXVlcnkgPyBuZXh0UXVlcnkubmFtZSA6IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGJyZWFrcG9pbnQgcmVsYXRlZCB0byB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlIC0gQnJlYWtwb2ludCBuYW1lIG9yIHF1ZXJ5IG9iamVjdC5cbiAgICogQHJldHVybnMge1N0cmluZ30gTmFtZSBvZiB0aGUgYnJlYWtwb2ludC5cbiAgICovXG4gIF9nZXRRdWVyeU5hbWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgIHJldHVybiB2YWx1ZS5uYW1lO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFxuICAgICAgSW52YWxpZCB2YWx1ZSBwYXNzZWQgdG8gTWVkaWFRdWVyeS5fZ2V0UXVlcnlOYW1lKCkuXG4gICAgICBFeHBlY3RlZCBhIGJyZWFrcG9pbnQgbmFtZSAoU3RyaW5nKSBvciBhIGJyZWFrcG9pbnQgcXVlcnkgKE9iamVjdCksIGdvdCBcIiR7dmFsdWV9XCIgKCR7dHlwZW9mIHZhbHVlfSlcbiAgICBgKTtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBicmVha3BvaW50IG5hbWUgYnkgdGVzdGluZyBldmVyeSBicmVha3BvaW50IGFuZCByZXR1cm5pbmcgdGhlIGxhc3Qgb25lIHRvIG1hdGNoICh0aGUgYmlnZ2VzdCBvbmUpLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybnMge1N0cmluZ30gTmFtZSBvZiB0aGUgY3VycmVudCBicmVha3BvaW50LlxuICAgKi9cbiAgX2dldEN1cnJlbnRTaXplKCkge1xuICAgIHZhciBtYXRjaGVkO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcmllc1tpXTtcblxuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5LnZhbHVlKS5tYXRjaGVzKSB7XG4gICAgICAgIG1hdGNoZWQgPSBxdWVyeTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlZCAmJiB0aGlzLl9nZXRRdWVyeU5hbWUobWF0Y2hlZCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlcyB0aGUgYnJlYWtwb2ludCB3YXRjaGVyLCB3aGljaCBmaXJlcyBhbiBldmVudCBvbiB0aGUgd2luZG93IHdoZW5ldmVyIHRoZSBicmVha3BvaW50IGNoYW5nZXMuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3dhdGNoZXIoKSB7XG4gICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnpmLm1lZGlhcXVlcnknKS5vbigncmVzaXplLnpmLm1lZGlhcXVlcnknLCAoKSA9PiB7XG4gICAgICB2YXIgbmV3U2l6ZSA9IHRoaXMuX2dldEN1cnJlbnRTaXplKCksIGN1cnJlbnRTaXplID0gdGhpcy5jdXJyZW50O1xuXG4gICAgICBpZiAobmV3U2l6ZSAhPT0gY3VycmVudFNpemUpIHtcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBjdXJyZW50IG1lZGlhIHF1ZXJ5XG4gICAgICAgIHRoaXMuY3VycmVudCA9IG5ld1NpemU7XG5cbiAgICAgICAgLy8gQnJvYWRjYXN0IHRoZSBtZWRpYSBxdWVyeSBjaGFuZ2Ugb24gdGhlIHdpbmRvd1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgW25ld1NpemUsIGN1cnJlbnRTaXplXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblxuXG4vLyBUaGFuayB5b3U6IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nXG5mdW5jdGlvbiBwYXJzZVN0eWxlVG9PYmplY3Qoc3RyKSB7XG4gIHZhciBzdHlsZU9iamVjdCA9IHt9O1xuXG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdHlsZU9iamVjdDtcbiAgfVxuXG4gIHN0ciA9IHN0ci50cmltKCkuc2xpY2UoMSwgLTEpOyAvLyBicm93c2VycyByZS1xdW90ZSBzdHJpbmcgc3R5bGUgdmFsdWVzXG5cbiAgaWYgKCFzdHIpIHtcbiAgICByZXR1cm4gc3R5bGVPYmplY3Q7XG4gIH1cblxuICBzdHlsZU9iamVjdCA9IHN0ci5zcGxpdCgnJicpLnJlZHVjZShmdW5jdGlvbihyZXQsIHBhcmFtKSB7XG4gICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcbiAgICB2YXIga2V5ID0gcGFydHNbMF07XG4gICAgdmFyIHZhbCA9IHBhcnRzWzFdO1xuICAgIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuXG4gICAgLy8gbWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcbiAgICAvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG4gICAgdmFsID0gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogZGVjb2RlVVJJQ29tcG9uZW50KHZhbCk7XG5cbiAgICBpZiAoIXJldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXRba2V5XSA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmV0W2tleV0pKSB7XG4gICAgICByZXRba2V5XS5wdXNoKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldFtrZXldID0gW3JldFtrZXldLCB2YWxdO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHN0eWxlT2JqZWN0O1xufVxuXG5leHBvcnQge01lZGlhUXVlcnl9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
