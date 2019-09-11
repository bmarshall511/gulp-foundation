(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.keyboard", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.accordion"] = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.accordion"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 1);
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
      "./js/entries/plugins/foundation.accordion.js":
      /*!****************************************************!*\
        !*** ./js/entries/plugins/foundation.accordion.js ***!
        \****************************************************/

      /*! exports provided: Foundation, Accordion */

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


        var _foundation_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.accordion */
        "./js/foundation.accordion.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Accordion", function () {
          return _foundation_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], 'Accordion');
        /***/

      },

      /***/
      "./js/foundation.accordion.js":
      /*!************************************!*\
        !*** ./js/foundation.accordion.js ***!
        \************************************/

      /*! exports provided: Accordion */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Accordion", function () {
          return Accordion;
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
         * Accordion module.
         * @module foundation.accordion
         * @requires foundation.util.keyboard
         */


        var Accordion =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(Accordion, _Plugin);

          function Accordion() {
            _classCallCheck(this, Accordion);

            return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
          }

          _createClass(Accordion, [{
            key: "_setup",

            /**
             * Creates a new instance of an accordion.
             * @class
             * @name Accordion
             * @fires Accordion#init
             * @param {jQuery} element - jQuery object to make into an accordion.
             * @param {Object} options - a plain object with settings to override the default options.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Accordion.defaults, this.$element.data(), options);
              this.className = 'Accordion'; // ie9 back compat

              this._init();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Accordion', {
                'ENTER': 'toggle',
                'SPACE': 'toggle',
                'ARROW_DOWN': 'next',
                'ARROW_UP': 'previous'
              });
            }
            /**
             * Initializes the accordion by animating the preset active pane(s).
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              var _this2 = this;

              this._isInitializing = true;
              this.$element.attr('role', 'tablist');
              this.$tabs = this.$element.children('[data-accordion-item]');
              this.$tabs.each(function (idx, el) {
                var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),
                    $content = $el.children('[data-tab-content]'),
                    id = $content[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'accordion'),
                    linkId = el.id ? "".concat(el.id, "-label") : "".concat(id, "-label");
                $el.find('a:first').attr({
                  'aria-controls': id,
                  'role': 'tab',
                  'id': linkId,
                  'aria-expanded': false,
                  'aria-selected': false
                });
                $content.attr({
                  'role': 'tabpanel',
                  'aria-labelledby': linkId,
                  'aria-hidden': true,
                  'id': id
                });
              });
              var $initActive = this.$element.find('.is-active').children('[data-tab-content]');

              if ($initActive.length) {
                // Save up the initial hash to return to it later when going back in history
                this._initialAnchor = $initActive.prev('a').attr('href');

                this._openSingleTab($initActive);
              }

              this._checkDeepLink = function () {
                var anchor = window.location.hash;

                if (!anchor.length) {
                  // If we are still initializing and there is no anchor, then there is nothing to do
                  if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

                  if (_this2._initialAnchor) anchor = _this2._initialAnchor;
                }

                var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

                var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"]")); // Whether the anchor element that has been found is part of this element


                var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, open it (if not already active)

                if ($anchor && $link && $link.length) {
                  if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
                    _this2._openSingleTab($anchor);
                  }

                  ;
                } // Otherwise, close everything
                else {
                    _this2._closeAllTabs();
                  }

                if (isOwnAnchor) {
                  // Roll up a little to show the titles
                  if (_this2.options.deepLinkSmudge) {
                    Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
                      var offset = _this2.$element.offset();

                      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                        scrollTop: offset.top
                      }, _this2.options.deepLinkSmudgeDelay);
                    });
                  }
                  /**
                   * Fires when the plugin has deeplinked at pageload
                   * @event Accordion#deeplink
                   */


                  _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
                }
              }; //use browser to open a tab, if it exists in this tabset


              if (this.options.deepLink) {
                this._checkDeepLink();
              }

              this._events();

              this._isInitializing = false;
            }
            /**
             * Adds event handlers for items within the accordion.
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              var _this = this;

              this.$tabs.each(function () {
                var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                var $tabContent = $elem.children('[data-tab-content]');

                if ($tabContent.length) {
                  $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
                    e.preventDefault();

                    _this.toggle($tabContent);
                  }).on('keydown.zf.accordion', function (e) {
                    _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Accordion', {
                      toggle: function toggle() {
                        _this.toggle($tabContent);
                      },
                      next: function next() {
                        var $a = $elem.next().find('a').focus();

                        if (!_this.options.multiExpand) {
                          $a.trigger('click.zf.accordion');
                        }
                      },
                      previous: function previous() {
                        var $a = $elem.prev().find('a').focus();

                        if (!_this.options.multiExpand) {
                          $a.trigger('click.zf.accordion');
                        }
                      },
                      handled: function handled() {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    });
                  });
                }
              });

              if (this.options.deepLink) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
              }
            }
            /**
             * Toggles the selected content pane's open/close state.
             * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
             * @function
             */

          }, {
            key: "toggle",
            value: function toggle($target) {
              if ($target.closest('[data-accordion]').is('[disabled]')) {
                console.info('Cannot toggle an accordion that is disabled.');
                return;
              }

              if ($target.parent().hasClass('is-active')) {
                this.up($target);
              } else {
                this.down($target);
              } //either replace or update browser history


              if (this.options.deepLink) {
                var anchor = $target.prev('a').attr('href');

                if (this.options.updateHistory) {
                  history.pushState({}, '', anchor);
                } else {
                  history.replaceState({}, '', anchor);
                }
              }
            }
            /**
             * Opens the accordion tab defined by `$target`.
             * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
             * @fires Accordion#down
             * @function
             */

          }, {
            key: "down",
            value: function down($target) {
              if ($target.closest('[data-accordion]').is('[disabled]')) {
                console.info('Cannot call down on an accordion that is disabled.');
                return;
              }

              if (this.options.multiExpand) this._openTab($target);else this._openSingleTab($target);
            }
            /**
             * Closes the tab defined by `$target`.
             * It may be ignored if the Accordion options don't allow it.
             *
             * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
             * @fires Accordion#up
             * @function
             */

          }, {
            key: "up",
            value: function up($target) {
              if (this.$element.is('[disabled]')) {
                console.info('Cannot call up on an accordion that is disabled.');
                return;
              } // Don't close the item if it is already closed


              var $targetItem = $target.parent();
              if (!$targetItem.hasClass('is-active')) return; // Don't close the item if there is no other active item (unless with `allowAllClosed`)

              var $othersItems = $targetItem.siblings();
              if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;

              this._closeTab($target);
            }
            /**
             * Make the tab defined by `$target` the only opened tab, closing all others tabs.
             * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
             * @function
             * @private
             */

          }, {
            key: "_openSingleTab",
            value: function _openSingleTab($target) {
              // Close all the others active tabs.
              var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');

              if ($activeContents.length) {
                this._closeTab($activeContents.not($target));
              } // Then open the target.


              this._openTab($target);
            }
            /**
             * Opens the tab defined by `$target`.
             * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
             * @fires Accordion#down
             * @function
             * @private
             */

          }, {
            key: "_openTab",
            value: function _openTab($target) {
              var _this3 = this;

              var $targetItem = $target.parent();
              var targetContentId = $target.attr('aria-labelledby');
              $target.attr('aria-hidden', false);
              $targetItem.addClass('is-active');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
                'aria-expanded': true,
                'aria-selected': true
              });
              $target.slideDown(this.options.slideSpeed, function () {
                /**
                 * Fires when the tab is done opening.
                 * @event Accordion#down
                 */
                _this3.$element.trigger('down.zf.accordion', [$target]);
              });
            }
            /**
             * Closes the tab defined by `$target`.
             * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
             * @fires Accordion#up
             * @function
             * @private
             */

          }, {
            key: "_closeTab",
            value: function _closeTab($target) {
              var _this4 = this;

              var $targetItem = $target.parent();
              var targetContentId = $target.attr('aria-labelledby');
              $target.attr('aria-hidden', true);
              $targetItem.removeClass('is-active');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(targetContentId)).attr({
                'aria-expanded': false,
                'aria-selected': false
              });
              $target.slideUp(this.options.slideSpeed, function () {
                /**
                 * Fires when the tab is done collapsing up.
                 * @event Accordion#up
                 */
                _this4.$element.trigger('up.zf.accordion', [$target]);
              });
            }
            /**
             * Closes all active tabs
             * @fires Accordion#up
             * @function
             * @private
             */

          }, {
            key: "_closeAllTabs",
            value: function _closeAllTabs() {
              var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');

              if ($activeTabs.length) {
                this._closeTab($activeTabs);
              }
            }
            /**
             * Destroys an instance of an accordion.
             * @fires Accordion#destroyed
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
              this.$element.find('a').off('.zf.accordion');

              if (this.options.deepLink) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
              }
            }
          }]);

          return Accordion;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

        Accordion.defaults = {
          /**
           * Amount of time to animate the opening of an accordion pane.
           * @option
           * @type {number}
           * @default 250
           */
          slideSpeed: 250,

          /**
           * Allow the accordion to have multiple open panes.
           * @option
           * @type {boolean}
           * @default false
           */
          multiExpand: false,

          /**
           * Allow the accordion to close all panes.
           * @option
           * @type {boolean}
           * @default false
           */
          allowAllClosed: false,

          /**
           * Link the location hash to the open pane.
           * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
           * @option
           * @type {boolean}
           * @default false
           */
          deepLink: false,

          /**
           * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
           * @option
           * @type {boolean}
           * @default false
           */
          deepLinkSmudge: false,

          /**
           * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
           * @option
           * @type {number}
           * @default 300
           */
          deepLinkSmudgeDelay: 300,

          /**
           * If `deepLink` is enabled, update the browser history with the open accordion
           * @option
           * @type {boolean}
           * @default false
           */
          updateHistory: false
        };
        /***/
      },

      /***/
      1:
      /*!**********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.accordion.js ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.accordion.js */
        "./js/entries/plugins/foundation.accordion.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uYWNjb3JkaW9uLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmFjY29yZGlvbi5qcyIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wialF1ZXJ5XCJdLFwiYW1kXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbIkZvdW5kYXRpb24iLCJBY2NvcmRpb24iLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJLZXlib2FyZCIsIiRlbCIsIiRjb250ZW50IiwiaWQiLCJHZXRZb0RpZ2l0cyIsImxpbmtJZCIsImVsIiwiJGluaXRBY3RpdmUiLCJhbmNob3IiLCJ3aW5kb3ciLCIkYW5jaG9yIiwiJGxpbmsiLCJpc093bkFuY2hvciIsIm9uTG9hZCIsIm9mZnNldCIsInNjcm9sbFRvcCIsInRvcCIsIl90aGlzIiwiJGVsZW0iLCIkdGFiQ29udGVudCIsImUiLCJ0b2dnbGUiLCJuZXh0IiwiJGEiLCJwcmV2aW91cyIsImhhbmRsZWQiLCIkdGFyZ2V0IiwiY29uc29sZSIsImhpc3RvcnkiLCIkdGFyZ2V0SXRlbSIsIiRvdGhlcnNJdGVtcyIsIiRhY3RpdmVDb250ZW50cyIsInRhcmdldENvbnRlbnRJZCIsIiRhY3RpdmVUYWJzIiwiUGx1Z2luIiwic2xpZGVTcGVlZCIsIm11bHRpRXhwYW5kIiwiYWxsb3dBbGxDbG9zZWQiLCJkZWVwTGluayIsImRlZXBMaW5rU211ZGdlIiwiZGVlcExpbmtTbXVkZ2VEZWxheSIsInVwZGF0ZUhpc3RvcnkiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLDRCQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsc0JBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHNCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxxREFBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxD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QUFBLENBQUFBLFFBQUFBLEM7O0FBdVV4QnRDLFFBQUFBLFNBQVMsQ0FBVEEsUUFBQUEsR0FBcUI7QUFDbkI7Ozs7OztBQU1BdUMsVUFBQUEsVUFBVSxFQVBTLEdBQUE7O0FBUW5COzs7Ozs7QUFNQUMsVUFBQUEsV0FBVyxFQWRRLEtBQUE7O0FBZW5COzs7Ozs7QUFNQUMsVUFBQUEsY0FBYyxFQXJCSyxLQUFBOztBQXNCbkI7Ozs7Ozs7QUFPQUMsVUFBQUEsUUFBUSxFQTdCVyxLQUFBOztBQThCbkI7Ozs7OztBQU1BQyxVQUFBQSxjQUFjLEVBcENLLEtBQUE7O0FBcUNuQjs7Ozs7O0FBTUFDLFVBQUFBLG1CQUFtQixFQTNDQSxHQUFBOztBQTRDbkI7Ozs7OztBQU1BQyxVQUFBQSxhQUFhLEVBQUU7QUFsREksU0FBckI3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFZBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FMVUE7Q0FWQSIsImZpbGUiOiJmb3VuZGF0aW9uL2ZvdW5kYXRpb24uYWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24uYWNjb3JkaW9uXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uYWNjb3JkaW9uXCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5hY2NvcmRpb24nO1xuRm91bmRhdGlvbi5wbHVnaW4oQWNjb3JkaW9uLCAnQWNjb3JkaW9uJyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIEFjY29yZGlvbiB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgb25Mb2FkLCBHZXRZb0RpZ2l0cyB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcblxuLyoqXG4gKiBBY2NvcmRpb24gbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLmFjY29yZGlvblxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICovXG5cbmNsYXNzIEFjY29yZGlvbiBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIGFuIGFjY29yZGlvbi5cbiAgICogQGNsYXNzXG4gICAqIEBuYW1lIEFjY29yZGlvblxuICAgKiBAZmlyZXMgQWNjb3JkaW9uI2luaXRcbiAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIG1ha2UgaW50byBhbiBhY2NvcmRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gYSBwbGFpbiBvYmplY3Qgd2l0aCBzZXR0aW5ncyB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBvcHRpb25zLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQWNjb3JkaW9uLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdBY2NvcmRpb24nOyAvLyBpZTkgYmFjayBjb21wYXRcbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignQWNjb3JkaW9uJywge1xuICAgICAgJ0VOVEVSJzogJ3RvZ2dsZScsXG4gICAgICAnU1BBQ0UnOiAndG9nZ2xlJyxcbiAgICAgICdBUlJPV19ET1dOJzogJ25leHQnLFxuICAgICAgJ0FSUk9XX1VQJzogJ3ByZXZpb3VzJ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhY2NvcmRpb24gYnkgYW5pbWF0aW5nIHRoZSBwcmVzZXQgYWN0aXZlIHBhbmUocykuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB0aGlzLl9pc0luaXRpYWxpemluZyA9IHRydWU7XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpO1xuICAgIHRoaXMuJHRhYnMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCdbZGF0YS1hY2NvcmRpb24taXRlbV0nKTtcblxuICAgIHRoaXMuJHRhYnMuZWFjaChmdW5jdGlvbihpZHgsIGVsKSB7XG4gICAgICB2YXIgJGVsID0gJChlbCksXG4gICAgICAgICAgJGNvbnRlbnQgPSAkZWwuY2hpbGRyZW4oJ1tkYXRhLXRhYi1jb250ZW50XScpLFxuICAgICAgICAgIGlkID0gJGNvbnRlbnRbMF0uaWQgfHwgR2V0WW9EaWdpdHMoNiwgJ2FjY29yZGlvbicpLFxuICAgICAgICAgIGxpbmtJZCA9IChlbC5pZCkgPyBgJHtlbC5pZH0tbGFiZWxgIDogYCR7aWR9LWxhYmVsYDtcblxuICAgICAgJGVsLmZpbmQoJ2E6Zmlyc3QnKS5hdHRyKHtcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBpZCxcbiAgICAgICAgJ3JvbGUnOiAndGFiJyxcbiAgICAgICAgJ2lkJzogbGlua0lkLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IGZhbHNlLFxuICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgJGNvbnRlbnQuYXR0cih7J3JvbGUnOiAndGFicGFuZWwnLCAnYXJpYS1sYWJlbGxlZGJ5JzogbGlua0lkLCAnYXJpYS1oaWRkZW4nOiB0cnVlLCAnaWQnOiBpZH0pO1xuICAgIH0pO1xuXG4gICAgdmFyICRpbml0QWN0aXZlID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXMtYWN0aXZlJykuY2hpbGRyZW4oJ1tkYXRhLXRhYi1jb250ZW50XScpO1xuICAgIGlmICgkaW5pdEFjdGl2ZS5sZW5ndGgpIHtcbiAgICAgIC8vIFNhdmUgdXAgdGhlIGluaXRpYWwgaGFzaCB0byByZXR1cm4gdG8gaXQgbGF0ZXIgd2hlbiBnb2luZyBiYWNrIGluIGhpc3RvcnlcbiAgICAgIHRoaXMuX2luaXRpYWxBbmNob3IgPSAkaW5pdEFjdGl2ZS5wcmV2KCdhJykuYXR0cignaHJlZicpO1xuICAgICAgdGhpcy5fb3BlblNpbmdsZVRhYigkaW5pdEFjdGl2ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2hlY2tEZWVwTGluayA9ICgpID0+IHtcbiAgICAgIHZhciBhbmNob3IgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICAgICAgaWYgKCFhbmNob3IubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHdlIGFyZSBzdGlsbCBpbml0aWFsaXppbmcgYW5kIHRoZXJlIGlzIG5vIGFuY2hvciwgdGhlbiB0aGVyZSBpcyBub3RoaW5nIHRvIGRvXG4gICAgICAgIGlmICh0aGlzLl9pc0luaXRpYWxpemluZykgcmV0dXJuO1xuICAgICAgICAvLyBPdGhlcndpc2UsIG1vdmUgdG8gdGhlIGluaXRpYWwgYW5jaG9yXG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsQW5jaG9yKSBhbmNob3IgPSB0aGlzLl9pbml0aWFsQW5jaG9yO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGFuY2hvciA9IGFuY2hvciAmJiAkKGFuY2hvcik7XG4gICAgICB2YXIgJGxpbmsgPSBhbmNob3IgJiYgdGhpcy4kZWxlbWVudC5maW5kKGBbaHJlZiQ9XCIke2FuY2hvcn1cIl1gKTtcbiAgICAgIC8vIFdoZXRoZXIgdGhlIGFuY2hvciBlbGVtZW50IHRoYXQgaGFzIGJlZW4gZm91bmQgaXMgcGFydCBvZiB0aGlzIGVsZW1lbnRcbiAgICAgIHZhciBpc093bkFuY2hvciA9ICEhKCRhbmNob3IubGVuZ3RoICYmICRsaW5rLmxlbmd0aCk7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGFuIGFuY2hvciBmb3IgdGhlIGhhc2gsIG9wZW4gaXQgKGlmIG5vdCBhbHJlYWR5IGFjdGl2ZSlcbiAgICAgIGlmICgkYW5jaG9yICYmICRsaW5rICYmICRsaW5rLmxlbmd0aCkge1xuICAgICAgICBpZiAoISRsaW5rLnBhcmVudCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgdGhpcy5fb3BlblNpbmdsZVRhYigkYW5jaG9yKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSwgY2xvc2UgZXZlcnl0aGluZ1xuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlQWxsVGFicygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNPd25BbmNob3IpIHtcbiAgICAgICAgLy8gUm9sbCB1cCBhIGxpdHRsZSB0byBzaG93IHRoZSB0aXRsZXNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGlua1NtdWRnZSkge1xuICAgICAgICAgIG9uTG9hZCgkKHdpbmRvdyksICgpID0+IHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpO1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IG9mZnNldC50b3AgfSwgdGhpcy5vcHRpb25zLmRlZXBMaW5rU211ZGdlRGVsYXkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcmVzIHdoZW4gdGhlIHBsdWdpbiBoYXMgZGVlcGxpbmtlZCBhdCBwYWdlbG9hZFxuICAgICAgICAgKiBAZXZlbnQgQWNjb3JkaW9uI2RlZXBsaW5rXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2RlZXBsaW5rLnpmLmFjY29yZGlvbicsIFskbGluaywgJGFuY2hvcl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vdXNlIGJyb3dzZXIgdG8gb3BlbiBhIHRhYiwgaWYgaXQgZXhpc3RzIGluIHRoaXMgdGFic2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGluaykge1xuICAgICAgdGhpcy5fY2hlY2tEZWVwTGluaygpO1xuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpO1xuXG4gICAgdGhpcy5faXNJbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciBpdGVtcyB3aXRoaW4gdGhlIGFjY29yZGlvbi5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ldmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJHRhYnMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkZWxlbSA9ICQodGhpcyk7XG4gICAgICB2YXIgJHRhYkNvbnRlbnQgPSAkZWxlbS5jaGlsZHJlbignW2RhdGEtdGFiLWNvbnRlbnRdJyk7XG4gICAgICBpZiAoJHRhYkNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICRlbGVtLmNoaWxkcmVuKCdhJykub2ZmKCdjbGljay56Zi5hY2NvcmRpb24ga2V5ZG93bi56Zi5hY2NvcmRpb24nKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay56Zi5hY2NvcmRpb24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF90aGlzLnRvZ2dsZSgkdGFiQ29udGVudCk7XG4gICAgICAgIH0pLm9uKCdrZXlkb3duLnpmLmFjY29yZGlvbicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIEtleWJvYXJkLmhhbmRsZUtleShlLCAnQWNjb3JkaW9uJywge1xuICAgICAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgX3RoaXMudG9nZ2xlKCR0YWJDb250ZW50KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgdmFyICRhID0gJGVsZW0ubmV4dCgpLmZpbmQoJ2EnKS5mb2N1cygpO1xuICAgICAgICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMubXVsdGlFeHBhbmQpIHtcbiAgICAgICAgICAgICAgICAkYS50cmlnZ2VyKCdjbGljay56Zi5hY2NvcmRpb24nKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJldmlvdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgJGEgPSAkZWxlbS5wcmV2KCkuZmluZCgnYScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgIGlmICghX3RoaXMub3B0aW9ucy5tdWx0aUV4cGFuZCkge1xuICAgICAgICAgICAgICAgICRhLnRyaWdnZXIoJ2NsaWNrLnpmLmFjY29yZGlvbicpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZih0aGlzLm9wdGlvbnMuZGVlcExpbmspIHtcbiAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsIHRoaXMuX2NoZWNrRGVlcExpbmspO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBzZWxlY3RlZCBjb250ZW50IHBhbmUncyBvcGVuL2Nsb3NlIHN0YXRlLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIGpRdWVyeSBvYmplY3Qgb2YgdGhlIHBhbmUgdG8gdG9nZ2xlIChgLmFjY29yZGlvbi1jb250ZW50YCkuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgdG9nZ2xlKCR0YXJnZXQpIHtcbiAgICBpZiAoJHRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY2NvcmRpb25dJykuaXMoJ1tkaXNhYmxlZF0nKSkge1xuICAgICAgY29uc29sZS5pbmZvKCdDYW5ub3QgdG9nZ2xlIGFuIGFjY29yZGlvbiB0aGF0IGlzIGRpc2FibGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZigkdGFyZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgdGhpcy51cCgkdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb3duKCR0YXJnZXQpO1xuICAgIH1cbiAgICAvL2VpdGhlciByZXBsYWNlIG9yIHVwZGF0ZSBicm93c2VyIGhpc3RvcnlcbiAgICBpZiAodGhpcy5vcHRpb25zLmRlZXBMaW5rKSB7XG4gICAgICB2YXIgYW5jaG9yID0gJHRhcmdldC5wcmV2KCdhJykuYXR0cignaHJlZicpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnVwZGF0ZUhpc3RvcnkpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBhbmNob3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCBhbmNob3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgYWNjb3JkaW9uIHRhYiBkZWZpbmVkIGJ5IGAkdGFyZ2V0YC5cbiAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBBY2NvcmRpb24gcGFuZSB0byBvcGVuIChgLmFjY29yZGlvbi1jb250ZW50YCkuXG4gICAqIEBmaXJlcyBBY2NvcmRpb24jZG93blxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIGRvd24oJHRhcmdldCkge1xuICAgIGlmICgkdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjY29yZGlvbl0nKS5pcygnW2Rpc2FibGVkXScpKSAge1xuICAgICAgY29uc29sZS5pbmZvKCdDYW5ub3QgY2FsbCBkb3duIG9uIGFuIGFjY29yZGlvbiB0aGF0IGlzIGRpc2FibGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubXVsdGlFeHBhbmQpXG4gICAgICB0aGlzLl9vcGVuVGFiKCR0YXJnZXQpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuX29wZW5TaW5nbGVUYWIoJHRhcmdldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSB0YWIgZGVmaW5lZCBieSBgJHRhcmdldGAuXG4gICAqIEl0IG1heSBiZSBpZ25vcmVkIGlmIHRoZSBBY2NvcmRpb24gb3B0aW9ucyBkb24ndCBhbGxvdyBpdC5cbiAgICpcbiAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBBY2NvcmRpb24gdGFiIHRvIGNsb3NlIChgLmFjY29yZGlvbi1jb250ZW50YCkuXG4gICAqIEBmaXJlcyBBY2NvcmRpb24jdXBcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICB1cCgkdGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuJGVsZW1lbnQuaXMoJ1tkaXNhYmxlZF0nKSkge1xuICAgICAgY29uc29sZS5pbmZvKCdDYW5ub3QgY2FsbCB1cCBvbiBhbiBhY2NvcmRpb24gdGhhdCBpcyBkaXNhYmxlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEb24ndCBjbG9zZSB0aGUgaXRlbSBpZiBpdCBpcyBhbHJlYWR5IGNsb3NlZFxuICAgIGNvbnN0ICR0YXJnZXRJdGVtID0gJHRhcmdldC5wYXJlbnQoKTtcbiAgICBpZiAoISR0YXJnZXRJdGVtLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkgcmV0dXJuO1xuXG4gICAgLy8gRG9uJ3QgY2xvc2UgdGhlIGl0ZW0gaWYgdGhlcmUgaXMgbm8gb3RoZXIgYWN0aXZlIGl0ZW0gKHVubGVzcyB3aXRoIGBhbGxvd0FsbENsb3NlZGApXG4gICAgY29uc3QgJG90aGVyc0l0ZW1zID0gJHRhcmdldEl0ZW0uc2libGluZ3MoKTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5hbGxvd0FsbENsb3NlZCAmJiAhJG90aGVyc0l0ZW1zLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY2xvc2VUYWIoJHRhcmdldCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGUgdGFiIGRlZmluZWQgYnkgYCR0YXJnZXRgIHRoZSBvbmx5IG9wZW5lZCB0YWIsIGNsb3NpbmcgYWxsIG90aGVycyB0YWJzLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIEFjY29yZGlvbiB0YWIgdG8gb3BlbiAoYC5hY2NvcmRpb24tY29udGVudGApLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vcGVuU2luZ2xlVGFiKCR0YXJnZXQpIHtcbiAgICAvLyBDbG9zZSBhbGwgdGhlIG90aGVycyBhY3RpdmUgdGFicy5cbiAgICBjb25zdCAkYWN0aXZlQ29udGVudHMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCcuaXMtYWN0aXZlJykuY2hpbGRyZW4oJ1tkYXRhLXRhYi1jb250ZW50XScpO1xuICAgIGlmICgkYWN0aXZlQ29udGVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9jbG9zZVRhYigkYWN0aXZlQ29udGVudHMubm90KCR0YXJnZXQpKTtcbiAgICB9XG5cbiAgICAvLyBUaGVuIG9wZW4gdGhlIHRhcmdldC5cbiAgICB0aGlzLl9vcGVuVGFiKCR0YXJnZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSB0YWIgZGVmaW5lZCBieSBgJHRhcmdldGAuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IC0gQWNjb3JkaW9uIHRhYiB0byBvcGVuIChgLmFjY29yZGlvbi1jb250ZW50YCkuXG4gICAqIEBmaXJlcyBBY2NvcmRpb24jZG93blxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vcGVuVGFiKCR0YXJnZXQpIHtcbiAgICBjb25zdCAkdGFyZ2V0SXRlbSA9ICR0YXJnZXQucGFyZW50KCk7XG4gICAgY29uc3QgdGFyZ2V0Q29udGVudElkID0gJHRhcmdldC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKTtcblxuICAgICR0YXJnZXQuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgJHRhcmdldEl0ZW0uYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgJChgIyR7dGFyZ2V0Q29udGVudElkfWApLmF0dHIoe1xuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB0cnVlLFxuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiB0cnVlXG4gICAgfSk7XG5cbiAgICAkdGFyZ2V0LnNsaWRlRG93bih0aGlzLm9wdGlvbnMuc2xpZGVTcGVlZCwgKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlcyB3aGVuIHRoZSB0YWIgaXMgZG9uZSBvcGVuaW5nLlxuICAgICAgICogQGV2ZW50IEFjY29yZGlvbiNkb3duXG4gICAgICAgKi9cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignZG93bi56Zi5hY2NvcmRpb24nLCBbJHRhcmdldF0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdGFiIGRlZmluZWQgYnkgYCR0YXJnZXRgLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIEFjY29yZGlvbiB0YWIgdG8gY2xvc2UgKGAuYWNjb3JkaW9uLWNvbnRlbnRgKS5cbiAgICogQGZpcmVzIEFjY29yZGlvbiN1cFxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jbG9zZVRhYigkdGFyZ2V0KSB7XG4gICAgY29uc3QgJHRhcmdldEl0ZW0gPSAkdGFyZ2V0LnBhcmVudCgpO1xuICAgIGNvbnN0IHRhcmdldENvbnRlbnRJZCA9ICR0YXJnZXQuYXR0cignYXJpYS1sYWJlbGxlZGJ5Jyk7XG5cbiAgICAkdGFyZ2V0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICAkdGFyZ2V0SXRlbS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAkKGAjJHt0YXJnZXRDb250ZW50SWR9YCkuYXR0cih7XG4gICAgICdhcmlhLWV4cGFuZGVkJzogZmFsc2UsXG4gICAgICdhcmlhLXNlbGVjdGVkJzogZmFsc2VcbiAgICB9KTtcblxuICAgICR0YXJnZXQuc2xpZGVVcCh0aGlzLm9wdGlvbnMuc2xpZGVTcGVlZCwgKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlcyB3aGVuIHRoZSB0YWIgaXMgZG9uZSBjb2xsYXBzaW5nIHVwLlxuICAgICAgICogQGV2ZW50IEFjY29yZGlvbiN1cFxuICAgICAgICovXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3VwLnpmLmFjY29yZGlvbicsIFskdGFyZ2V0XSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFsbCBhY3RpdmUgdGFic1xuICAgKiBAZmlyZXMgQWNjb3JkaW9uI3VwXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2Nsb3NlQWxsVGFicygpIHtcbiAgICB2YXIgJGFjdGl2ZVRhYnMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCcuaXMtYWN0aXZlJykuY2hpbGRyZW4oJ1tkYXRhLXRhYi1jb250ZW50XScpO1xuICAgIGlmICgkYWN0aXZlVGFicy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2Nsb3NlVGFiKCRhY3RpdmVUYWJzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgYW4gaW5zdGFuY2Ugb2YgYW4gYWNjb3JkaW9uLlxuICAgKiBAZmlyZXMgQWNjb3JkaW9uI2Rlc3Ryb3llZFxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtdGFiLWNvbnRlbnRdJykuc3RvcCh0cnVlKS5zbGlkZVVwKDApLmNzcygnZGlzcGxheScsICcnKTtcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ2EnKS5vZmYoJy56Zi5hY2NvcmRpb24nKTtcbiAgICBpZih0aGlzLm9wdGlvbnMuZGVlcExpbmspIHtcbiAgICAgICQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2UnLCB0aGlzLl9jaGVja0RlZXBMaW5rKTtcbiAgICB9XG5cbiAgfVxufVxuXG5BY2NvcmRpb24uZGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdGltZSB0byBhbmltYXRlIHRoZSBvcGVuaW5nIG9mIGFuIGFjY29yZGlvbiBwYW5lLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDI1MFxuICAgKi9cbiAgc2xpZGVTcGVlZDogMjUwLFxuICAvKipcbiAgICogQWxsb3cgdGhlIGFjY29yZGlvbiB0byBoYXZlIG11bHRpcGxlIG9wZW4gcGFuZXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBtdWx0aUV4cGFuZDogZmFsc2UsXG4gIC8qKlxuICAgKiBBbGxvdyB0aGUgYWNjb3JkaW9uIHRvIGNsb3NlIGFsbCBwYW5lcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGFsbG93QWxsQ2xvc2VkOiBmYWxzZSxcbiAgLyoqXG4gICAqIExpbmsgdGhlIGxvY2F0aW9uIGhhc2ggdG8gdGhlIG9wZW4gcGFuZS5cbiAgICogU2V0IHRoZSBsb2NhdGlvbiBoYXNoIHdoZW4gdGhlIG9wZW5lZCBwYW5lIGNoYW5nZXMsIGFuZCBvcGVuIGFuZCBzY3JvbGwgdG8gdGhlIGNvcnJlc3BvbmRpbmcgcGFuZSB3aGVuIHRoZSBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGVlcExpbms6IGZhbHNlLFxuICAvKipcbiAgICogSWYgYGRlZXBMaW5rYCBpcyBlbmFibGVkLCBhZGp1c3QgdGhlIGRlZXAgbGluayBzY3JvbGwgdG8gbWFrZSBzdXJlIHRoZSB0b3Agb2YgdGhlIGFjY29yZGlvbiBwYW5lbCBpcyB2aXNpYmxlXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBkZWVwTGlua1NtdWRnZTogZmFsc2UsXG4gIC8qKlxuICAgKiBJZiBgZGVlcExpbmtTbXVkZ2VgIGlzIGVuYWJsZWQsIGFuaW1hdGlvbiB0aW1lIChtcykgZm9yIHRoZSBkZWVwIGxpbmsgYWRqdXN0bWVudFxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDMwMFxuICAgKi9cbiAgZGVlcExpbmtTbXVkZ2VEZWxheTogMzAwLFxuICAvKipcbiAgICogSWYgYGRlZXBMaW5rYCBpcyBlbmFibGVkLCB1cGRhdGUgdGhlIGJyb3dzZXIgaGlzdG9yeSB3aXRoIHRoZSBvcGVuIGFjY29yZGlvblxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdXBkYXRlSGlzdG9yeTogZmFsc2Vcbn07XG5cbmV4cG9ydCB7QWNjb3JkaW9ufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
