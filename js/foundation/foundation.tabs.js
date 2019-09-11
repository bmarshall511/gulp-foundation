(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.imageLoader"), require("./foundation.util.keyboard"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.imageLoader", "./foundation.util.keyboard", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.tabs"] = factory(require("./foundation.core"), require("./foundation.util.imageLoader"), require("./foundation.util.keyboard"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.tabs"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.imageLoader"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_imageLoader__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 18);
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
      "./foundation.util.imageLoader":
      /*!****************************************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.imageLoader"],"amd":"./foundation.util.imageLoader","commonjs":"./foundation.util.imageLoader","commonjs2":"./foundation.util.imageLoader"} ***!
        \****************************************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_imageLoader__;
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
      "./js/entries/plugins/foundation.tabs.js":
      /*!***********************************************!*\
        !*** ./js/entries/plugins/foundation.tabs.js ***!
        \***********************************************/

      /*! exports provided: Foundation, Tabs */

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


        var _foundation_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.tabs */
        "./js/foundation.tabs.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Tabs", function () {
          return _foundation_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], 'Tabs');
        /***/

      },

      /***/
      "./js/foundation.tabs.js":
      /*!*******************************!*\
        !*** ./js/foundation.tabs.js ***!
        \*******************************/

      /*! exports provided: Tabs */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Tabs", function () {
          return Tabs;
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


        var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.util.imageLoader */
        "./foundation.util.imageLoader");
        /* harmony import */


        var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__);

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
         * Tabs module.
         * @module foundation.tabs
         * @requires foundation.util.keyboard
         * @requires foundation.util.imageLoader if tabs contain images
         */


        var Tabs =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(Tabs, _Plugin);

          function Tabs() {
            _classCallCheck(this, Tabs);

            return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
          }

          _createClass(Tabs, [{
            key: "_setup",

            /**
             * Creates a new instance of tabs.
             * @class
             * @name Tabs
             * @fires Tabs#init
             * @param {jQuery} element - jQuery object to make into tabs.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Tabs.defaults, this.$element.data(), options);
              this.className = 'Tabs'; // ie9 back compat

              this._init();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('Tabs', {
                'ENTER': 'open',
                'SPACE': 'open',
                'ARROW_RIGHT': 'next',
                'ARROW_UP': 'previous',
                'ARROW_DOWN': 'next',
                'ARROW_LEFT': 'previous' // 'TAB': 'next',
                // 'SHIFT_TAB': 'previous'

              });
            }
            /**
             * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              var _this2 = this;

              var _this = this;

              this._isInitializing = true;
              this.$element.attr({
                'role': 'tablist'
              });
              this.$tabTitles = this.$element.find(".".concat(this.options.linkClass));
              this.$tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-tabs-content=\"".concat(this.$element[0].id, "\"]"));
              this.$tabTitles.each(function () {
                var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    $link = $elem.find('a'),
                    isActive = $elem.hasClass("".concat(_this.options.linkActiveClass)),
                    hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
                    linkId = $link[0].id ? $link[0].id : "".concat(hash, "-label"),
                    $tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(hash));
                $elem.attr({
                  'role': 'presentation'
                });
                $link.attr({
                  'role': 'tab',
                  'aria-controls': hash,
                  'aria-selected': isActive,
                  'id': linkId,
                  'tabindex': isActive ? '0' : '-1'
                });
                $tabContent.attr({
                  'role': 'tabpanel',
                  'aria-labelledby': linkId
                }); // Save up the initial hash to return to it later when going back in history

                if (isActive) {
                  _this._initialAnchor = "#".concat(hash);
                }

                if (!isActive) {
                  $tabContent.attr('aria-hidden', 'true');
                }

                if (isActive && _this.options.autoFocus) {
                  _this.onLoadListener = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                      scrollTop: $elem.offset().top
                    }, _this.options.deepLinkSmudgeDelay, function () {
                      $link.focus();
                    });
                  });
                }
              });

              if (this.options.matchHeight) {
                var $images = this.$tabContent.find('img');

                if ($images.length) {
                  Object(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__["onImagesLoaded"])($images, this._setHeight.bind(this));
                } else {
                  this._setHeight();
                }
              } // Current context-bound function to open tabs on page load or history hashchange


              this._checkDeepLink = function () {
                var anchor = window.location.hash;

                if (!anchor.length) {
                  // If we are still initializing and there is no anchor, then there is nothing to do
                  if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

                  if (_this2._initialAnchor) anchor = _this2._initialAnchor;
                }

                var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);

                var $link = anchor && _this2.$element.find('[href$="' + anchor + '"]'); // Whether the anchor element that has been found is part of this element


                var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, select it

                if ($anchor && $anchor.length && $link && $link.length) {
                  _this2.selectTab($anchor, true);
                } // Otherwise, collapse everything
                else {
                    _this2._collapse();
                  }

                if (isOwnAnchor) {
                  // Roll up a little to show the titles
                  if (_this2.options.deepLinkSmudge) {
                    var offset = _this2.$element.offset();

                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                      scrollTop: offset.top
                    }, _this2.options.deepLinkSmudgeDelay);
                  }
                  /**
                   * Fires when the plugin has deeplinked at pageload
                   * @event Tabs#deeplink
                   */


                  _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);
                }
              }; //use browser to open a tab, if it exists in this tabset


              if (this.options.deepLink) {
                this._checkDeepLink();
              }

              this._events();

              this._isInitializing = false;
            }
            /**
             * Adds event handlers for items within the tabs.
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              this._addKeyHandler();

              this._addClickHandler();

              this._setHeightMqHandler = null;

              if (this.options.matchHeight) {
                this._setHeightMqHandler = this._setHeight.bind(this);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
              }

              if (this.options.deepLink) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
              }
            }
            /**
             * Adds click handlers for items within the tabs.
             * @private
             */

          }, {
            key: "_addClickHandler",
            value: function _addClickHandler() {
              var _this = this;

              this.$element.off('click.zf.tabs').on('click.zf.tabs', ".".concat(this.options.linkClass), function (e) {
                e.preventDefault();
                e.stopPropagation();

                _this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
              });
            }
            /**
             * Adds keyboard event handlers for items within the tabs.
             * @private
             */

          }, {
            key: "_addKeyHandler",
            value: function _addKeyHandler() {
              var _this = this;

              this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
                if (e.which === 9) return;
                var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    $elements = $element.parent('ul').children('li'),
                    $prevElement,
                    $nextElement;
                $elements.each(function (i) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
                    if (_this.options.wrapOnKeys) {
                      $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
                      $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
                    } else {
                      $prevElement = $elements.eq(Math.max(0, i - 1));
                      $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
                    }

                    return;
                  }
                }); // handle keyboard event with keyboard util

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'Tabs', {
                  open: function open() {
                    $element.find('[role="tab"]').focus();

                    _this._handleTabChange($element);
                  },
                  previous: function previous() {
                    $prevElement.find('[role="tab"]').focus();

                    _this._handleTabChange($prevElement);
                  },
                  next: function next() {
                    $nextElement.find('[role="tab"]').focus();

                    _this._handleTabChange($nextElement);
                  },
                  handled: function handled() {
                    e.stopPropagation();
                    e.preventDefault();
                  }
                });
              });
            }
            /**
             * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
             * @param {jQuery} $target - Tab to open.
             * @param {boolean} historyHandled - browser has already handled a history update
             * @fires Tabs#change
             * @function
             */

          }, {
            key: "_handleTabChange",
            value: function _handleTabChange($target, historyHandled) {
              // With `activeCollapse`, if the target is the active Tab, collapse it.
              if ($target.hasClass("".concat(this.options.linkActiveClass))) {
                if (this.options.activeCollapse) {
                  this._collapse();
                }

                return;
              }

              var $oldTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
                  $tabLink = $target.find('[role="tab"]'),
                  target = $tabLink.attr('data-tabs-target'),
                  anchor = target && target.length ? "#".concat(target) : $tabLink[0].hash,
                  $targetContent = this.$tabContent.find(anchor); //close old tab

              this._collapseTab($oldTab); //open new tab


              this._openTab($target); //either replace or update browser history


              if (this.options.deepLink && !historyHandled) {
                if (this.options.updateHistory) {
                  history.pushState({}, '', anchor);
                } else {
                  history.replaceState({}, '', anchor);
                }
              }
              /**
               * Fires when the plugin has successfully changed tabs.
               * @event Tabs#change
               */


              this.$element.trigger('change.zf.tabs', [$target, $targetContent]); //fire to children a mutation event

              $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
            }
            /**
             * Opens the tab `$targetContent` defined by `$target`.
             * @param {jQuery} $target - Tab to open.
             * @function
             */

          }, {
            key: "_openTab",
            value: function _openTab($target) {
              var $tabLink = $target.find('[role="tab"]'),
                  hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
                  $targetContent = this.$tabContent.find("#".concat(hash));
              $target.addClass("".concat(this.options.linkActiveClass));
              $tabLink.attr({
                'aria-selected': 'true',
                'tabindex': '0'
              });
              $targetContent.addClass("".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');
            }
            /**
             * Collapses `$targetContent` defined by `$target`.
             * @param {jQuery} $target - Tab to collapse.
             * @function
             */

          }, {
            key: "_collapseTab",
            value: function _collapseTab($target) {
              var $target_anchor = $target.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
                'aria-selected': 'false',
                'tabindex': -1
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat($target_anchor.attr('aria-controls'))).removeClass("".concat(this.options.panelActiveClass)).attr({
                'aria-hidden': 'true'
              });
            }
            /**
             * Collapses the active Tab.
             * @fires Tabs#collapse
             * @function
             */

          }, {
            key: "_collapse",
            value: function _collapse() {
              var $activeTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));

              if ($activeTab.length) {
                this._collapseTab($activeTab);
                /**
                * Fires when the plugin has successfully collapsed tabs.
                * @event Tabs#collapse
                */


                this.$element.trigger('collapse.zf.tabs', [$activeTab]);
              }
            }
            /**
             * Public method for selecting a content pane to display.
             * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
             * @param {boolean} historyHandled - browser has already handled a history update
             * @function
             */

          }, {
            key: "selectTab",
            value: function selectTab(elem, historyHandled) {
              var idStr;

              if (_typeof(elem) === 'object') {
                idStr = elem[0].id;
              } else {
                idStr = elem;
              }

              if (idStr.indexOf('#') < 0) {
                idStr = "#".concat(idStr);
              }

              var $target = this.$tabTitles.has("[href$=\"".concat(idStr, "\"]"));

              this._handleTabChange($target, historyHandled);
            }
          }, {
            key: "_setHeight",

            /**
             * Sets the height of each panel to the height of the tallest panel.
             * If enabled in options, gets called on media query change.
             * If loading content via external source, can be called directly or with _reflow.
             * If enabled with `data-match-height="true"`, tabs sets to equal height
             * @function
             * @private
             */
            value: function _setHeight() {
              var max = 0,
                  _this = this; // Lock down the `this` value for the root tabs object


              this.$tabContent.find(".".concat(this.options.panelClass)).css('height', '').each(function () {
                var panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    isActive = panel.hasClass("".concat(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child

                if (!isActive) {
                  panel.css({
                    'visibility': 'hidden',
                    'display': 'block'
                  });
                }

                var temp = this.getBoundingClientRect().height;

                if (!isActive) {
                  panel.css({
                    'visibility': '',
                    'display': ''
                  });
                }

                max = temp > max ? temp : max;
              }).css('height', "".concat(max, "px"));
            }
            /**
             * Destroys an instance of tabs.
             * @fires Tabs#destroyed
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.$element.find(".".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(".".concat(this.options.panelClass)).hide();

              if (this.options.matchHeight) {
                if (this._setHeightMqHandler != null) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
                }
              }

              if (this.options.deepLink) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
              }

              if (this.onLoadListener) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
              }
            }
          }]);

          return Tabs;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

        Tabs.defaults = {
          /**
           * Link the location hash to the active pane.
           * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
           * @option
           * @type {boolean}
           * @default false
           */
          deepLink: false,

          /**
           * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
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
           * If `deepLink` is enabled, update the browser history with the open tab
           * @option
           * @type {boolean}
           * @default false
           */
          updateHistory: false,

          /**
           * Allows the window to scroll to content of active pane on load.
           * Not recommended if more than one tab panel per page.
           * @option
           * @type {boolean}
           * @default false
           */
          autoFocus: false,

          /**
           * Allows keyboard input to 'wrap' around the tab links.
           * @option
           * @type {boolean}
           * @default true
           */
          wrapOnKeys: true,

          /**
           * Allows the tab content panes to match heights if set to true.
           * @option
           * @type {boolean}
           * @default false
           */
          matchHeight: false,

          /**
           * Allows active tabs to collapse when clicked.
           * @option
           * @type {boolean}
           * @default false
           */
          activeCollapse: false,

          /**
           * Class applied to `li`'s in tab link list.
           * @option
           * @type {string}
           * @default 'tabs-title'
           */
          linkClass: 'tabs-title',

          /**
           * Class applied to the active `li` in tab link list.
           * @option
           * @type {string}
           * @default 'is-active'
           */
          linkActiveClass: 'is-active',

          /**
           * Class applied to the content containers.
           * @option
           * @type {string}
           * @default 'tabs-panel'
           */
          panelClass: 'tabs-panel',

          /**
           * Class applied to the active content container.
           * @option
           * @type {string}
           * @default 'is-active'
           */
          panelActiveClass: 'is-active'
        };
        /***/
      },

      /***/
      18:
      /*!*****************************************************!*\
        !*** multi ./js/entries/plugins/foundation.tabs.js ***!
        \*****************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.tabs.js */
        "./js/entries/plugins/foundation.tabs.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udGFicy5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi50YWJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlRhYnMiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJLZXlib2FyZCIsIl90aGlzIiwiJGVsZW0iLCIkbGluayIsImlzQWN0aXZlIiwiaGFzaCIsImxpbmtJZCIsIiR0YWJDb250ZW50Iiwib25Mb2FkIiwic2Nyb2xsVG9wIiwidG9wIiwiJGltYWdlcyIsIm9uSW1hZ2VzTG9hZGVkIiwiYW5jaG9yIiwid2luZG93IiwiJGFuY2hvciIsImlzT3duQW5jaG9yIiwib2Zmc2V0IiwiZSIsIiRlbGVtZW50IiwiJGVsZW1lbnRzIiwiJHByZXZFbGVtZW50IiwiaSIsIiRuZXh0RWxlbWVudCIsIk1hdGgiLCJvcGVuIiwicHJldmlvdXMiLCJuZXh0IiwiaGFuZGxlZCIsIiR0YXJnZXQiLCJoaXN0b3J5SGFuZGxlZCIsIiRvbGRUYWIiLCIkdGFiTGluayIsInRhcmdldCIsIiR0YXJnZXRDb250ZW50IiwiaGlzdG9yeSIsIiR0YXJnZXRfYW5jaG9yIiwiJGFjdGl2ZVRhYiIsImVsZW0iLCJpZFN0ciIsIm1heCIsInBhbmVsIiwidGVtcCIsIlBsdWdpbiIsImRlZXBMaW5rIiwiZGVlcExpbmtTbXVkZ2UiLCJkZWVwTGlua1NtdWRnZURlbGF5IiwidXBkYXRlSGlzdG9yeSIsImF1dG9Gb2N1cyIsIndyYXBPbktleXMiLCJtYXRjaEhlaWdodCIsImFjdGl2ZUNvbGxhcHNlIiwibGlua0NsYXNzIiwibGlua0FjdGl2ZUNsYXNzIiwicGFuZWxDbGFzcyIsInBhbmVsQWN0aXZlQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsK0JBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsK0JBQUEsRUFBQSw0QkFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLGlCQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsK0JBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsNkJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSx3REFBQSxFQUFBLHFEQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtBQUFpRCxVQUFBLEtBQUEsRUFBQTtBQUFqRCxTQUFBO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxRQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUE7QUFBeUMsVUFBQSxVQUFBLEVBQUEsSUFBekM7QUFBeUMsVUFBQSxLQUFBLEVBQUE7QUFBekMsU0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsSUFBQSxRQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEdBQUEsRUFBQTtBQUFnSCxpQkFBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJLENBQUE7QUFDQTs7QUFBQSxlQUFBLEVBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsTUFBQSxHQUFBLE1BQUEsSUFBQSxNQUFBLENBQUEsVUFBQTtBQUNBO0FBQUEsaUJBQUEsVUFBQSxHQUFBO0FBQTJCLGlCQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUE7QUFBNEIsU0FEdkQ7QUFFQTtBQUFBLGlCQUFBLGdCQUFBLEdBQUE7QUFBaUMsaUJBQUEsTUFBQTtBQUFlLFNBRmhEO0FBR0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUE7QUFDQTs7O0FBQUEsZUFBQSxNQUFBO0FBQ0E7QUFBQSxPQU5BOzs7QUFRQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQTtBQUFzRCxlQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxDQUFBO0FBQStELE9BQXJIOzs7QUFFQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7QUFBQSxhQUFBLG1CQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsNENBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLHdEQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxxREFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUE7QUFBQTs7O0FBQUEsWUFBQSw2Q0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSwyQkFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEscURBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsNkNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSw2Q0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxpQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxNQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLDZDQUFBLENBQUEsTUFBQSxDQUFBO0FBQUEsU0FBQTs7QUNHQUEsUUFBQUEsNkNBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE1BQUFBLENBQWtCQyw2Q0FBQUEsQ0FBbEJELE1BQWtCQyxDQUFsQkQsRUFBQUEsTUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsTUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxJQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsbURBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1EQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxzREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxvQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsOERBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsc0RBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHlEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFB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Ozs7O0FBT0FnRCxVQUFBQSxRQUFRLEVBUk0sS0FBQTs7QUFVZDs7Ozs7O0FBTUFDLFVBQUFBLGNBQWMsRUFoQkEsS0FBQTs7QUFrQmQ7Ozs7OztBQU1BQyxVQUFBQSxtQkFBbUIsRUF4QkwsR0FBQTs7QUEwQmQ7Ozs7OztBQU1BQyxVQUFBQSxhQUFhLEVBaENDLEtBQUE7O0FBa0NkOzs7Ozs7O0FBT0FDLFVBQUFBLFNBQVMsRUF6Q0ssS0FBQTs7QUEyQ2Q7Ozs7OztBQU1BQyxVQUFBQSxVQUFVLEVBakRJLElBQUE7O0FBbURkOzs7Ozs7QUFNQUMsVUFBQUEsV0FBVyxFQXpERyxLQUFBOztBQTJEZDs7Ozs7O0FBTUFDLFVBQUFBLGNBQWMsRUFqRUEsS0FBQTs7QUFtRWQ7Ozs7OztBQU1BQyxVQUFBQSxTQUFTLEVBekVLLFlBQUE7O0FBMkVkOzs7Ozs7QUFNQUMsVUFBQUEsZUFBZSxFQWpGRCxXQUFBOztBQW1GZDs7Ozs7O0FBTUFDLFVBQUFBLFVBQVUsRUF6RkksWUFBQTs7QUEyRmQ7Ozs7OztBQU1BQyxVQUFBQSxnQkFBZ0IsRUFBRTtBQWpHSixTQUFoQjNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0YkEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtDQUFBOzs7Ozs7QUxVQTtDQVZBIiwiZmlsZSI6ImZvdW5kYXRpb24vZm91bmRhdGlvbi50YWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5pbWFnZUxvYWRlclwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwuaW1hZ2VMb2FkZXJcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3VuZGF0aW9uLnRhYnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmltYWdlTG9hZGVyXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnRhYnNcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLmltYWdlTG9hZGVyXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2ltYWdlTG9hZGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9rZXlib2FyZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgVGFicyB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24udGFicyc7XG5Gb3VuZGF0aW9uLnBsdWdpbihUYWJzLCAnVGFicycpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBUYWJzIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBvbkxvYWQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkJztcbmltcG9ydCB7IG9uSW1hZ2VzTG9hZGVkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwuaW1hZ2VMb2FkZXInO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcbi8qKlxuICogVGFicyBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24udGFic1xuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5pbWFnZUxvYWRlciBpZiB0YWJzIGNvbnRhaW4gaW1hZ2VzXG4gKi9cblxuY2xhc3MgVGFicyBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRhYnMuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBUYWJzXG4gICAqIEBmaXJlcyBUYWJzI2luaXRcbiAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIG1ha2UgaW50byB0YWJzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBUYWJzLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnVGFicyc7IC8vIGllOSBiYWNrIGNvbXBhdFxuXG4gICAgdGhpcy5faW5pdCgpO1xuICAgIEtleWJvYXJkLnJlZ2lzdGVyKCdUYWJzJywge1xuICAgICAgJ0VOVEVSJzogJ29wZW4nLFxuICAgICAgJ1NQQUNFJzogJ29wZW4nLFxuICAgICAgJ0FSUk9XX1JJR0hUJzogJ25leHQnLFxuICAgICAgJ0FSUk9XX1VQJzogJ3ByZXZpb3VzJyxcbiAgICAgICdBUlJPV19ET1dOJzogJ25leHQnLFxuICAgICAgJ0FSUk9XX0xFRlQnOiAncHJldmlvdXMnXG4gICAgICAvLyAnVEFCJzogJ25leHQnLFxuICAgICAgLy8gJ1NISUZUX1RBQic6ICdwcmV2aW91cydcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgdGFicyBieSBzaG93aW5nIGFuZCBmb2N1c2luZyAoaWYgYXV0b0ZvY3VzPXRydWUpIHRoZSBwcmVzZXQgYWN0aXZlIHRhYi5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5faXNJbml0aWFsaXppbmcgPSB0cnVlO1xuXG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKHsncm9sZSc6ICd0YWJsaXN0J30pO1xuICAgIHRoaXMuJHRhYlRpdGxlcyA9IHRoaXMuJGVsZW1lbnQuZmluZChgLiR7dGhpcy5vcHRpb25zLmxpbmtDbGFzc31gKTtcbiAgICB0aGlzLiR0YWJDb250ZW50ID0gJChgW2RhdGEtdGFicy1jb250ZW50PVwiJHt0aGlzLiRlbGVtZW50WzBdLmlkfVwiXWApO1xuXG4gICAgdGhpcy4kdGFiVGl0bGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciAkZWxlbSA9ICQodGhpcyksXG4gICAgICAgICAgJGxpbmsgPSAkZWxlbS5maW5kKCdhJyksXG4gICAgICAgICAgaXNBY3RpdmUgPSAkZWxlbS5oYXNDbGFzcyhgJHtfdGhpcy5vcHRpb25zLmxpbmtBY3RpdmVDbGFzc31gKSxcbiAgICAgICAgICBoYXNoID0gJGxpbmsuYXR0cignZGF0YS10YWJzLXRhcmdldCcpIHx8ICRsaW5rWzBdLmhhc2guc2xpY2UoMSksXG4gICAgICAgICAgbGlua0lkID0gJGxpbmtbMF0uaWQgPyAkbGlua1swXS5pZCA6IGAke2hhc2h9LWxhYmVsYCxcbiAgICAgICAgICAkdGFiQ29udGVudCA9ICQoYCMke2hhc2h9YCk7XG5cbiAgICAgICRlbGVtLmF0dHIoeydyb2xlJzogJ3ByZXNlbnRhdGlvbid9KTtcblxuICAgICAgJGxpbmsuYXR0cih7XG4gICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogaGFzaCxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc0FjdGl2ZSxcbiAgICAgICAgJ2lkJzogbGlua0lkLFxuICAgICAgICAndGFiaW5kZXgnOiBpc0FjdGl2ZSA/ICcwJyA6ICctMSdcbiAgICAgIH0pO1xuXG4gICAgICAkdGFiQ29udGVudC5hdHRyKHtcbiAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGlua0lkXG4gICAgICB9KTtcblxuICAgICAgLy8gU2F2ZSB1cCB0aGUgaW5pdGlhbCBoYXNoIHRvIHJldHVybiB0byBpdCBsYXRlciB3aGVuIGdvaW5nIGJhY2sgaW4gaGlzdG9yeVxuICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgIF90aGlzLl9pbml0aWFsQW5jaG9yID0gYCMke2hhc2h9YDtcbiAgICAgIH1cblxuICAgICAgaWYoIWlzQWN0aXZlKSB7XG4gICAgICAgICR0YWJDb250ZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIH1cblxuICAgICAgaWYoaXNBY3RpdmUgJiYgX3RoaXMub3B0aW9ucy5hdXRvRm9jdXMpe1xuICAgICAgICBfdGhpcy5vbkxvYWRMaXN0ZW5lciA9IG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkZWxlbS5vZmZzZXQoKS50b3AgfSwgX3RoaXMub3B0aW9ucy5kZWVwTGlua1NtdWRnZURlbGF5LCAoKSA9PiB7XG4gICAgICAgICAgICAkbGluay5mb2N1cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5tYXRjaEhlaWdodCkge1xuICAgICAgdmFyICRpbWFnZXMgPSB0aGlzLiR0YWJDb250ZW50LmZpbmQoJ2ltZycpO1xuXG4gICAgICBpZiAoJGltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgb25JbWFnZXNMb2FkZWQoJGltYWdlcywgdGhpcy5fc2V0SGVpZ2h0LmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2V0SGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIC8vIEN1cnJlbnQgY29udGV4dC1ib3VuZCBmdW5jdGlvbiB0byBvcGVuIHRhYnMgb24gcGFnZSBsb2FkIG9yIGhpc3RvcnkgaGFzaGNoYW5nZVxuICAgIHRoaXMuX2NoZWNrRGVlcExpbmsgPSAoKSA9PiB7XG4gICAgICB2YXIgYW5jaG9yID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgICAgIGlmICghYW5jaG9yLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmUgc3RpbGwgaW5pdGlhbGl6aW5nIGFuZCB0aGVyZSBpcyBubyBhbmNob3IsIHRoZW4gdGhlcmUgaXMgbm90aGluZyB0byBkb1xuICAgICAgICBpZiAodGhpcy5faXNJbml0aWFsaXppbmcpIHJldHVybjtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBtb3ZlIHRvIHRoZSBpbml0aWFsIGFuY2hvclxuICAgICAgICBpZiAodGhpcy5faW5pdGlhbEFuY2hvcikgYW5jaG9yID0gdGhpcy5faW5pdGlhbEFuY2hvcjtcbiAgICAgIH1cblxuICAgICAgdmFyICRhbmNob3IgPSBhbmNob3IgJiYgJChhbmNob3IpO1xuICAgICAgdmFyICRsaW5rID0gYW5jaG9yICYmIHRoaXMuJGVsZW1lbnQuZmluZCgnW2hyZWYkPVwiJythbmNob3IrJ1wiXScpO1xuICAgICAgLy8gV2hldGhlciB0aGUgYW5jaG9yIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBmb3VuZCBpcyBwYXJ0IG9mIHRoaXMgZWxlbWVudFxuICAgICAgdmFyIGlzT3duQW5jaG9yID0gISEoJGFuY2hvci5sZW5ndGggJiYgJGxpbmsubGVuZ3RoKTtcblxuICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gYW5jaG9yIGZvciB0aGUgaGFzaCwgc2VsZWN0IGl0XG4gICAgICBpZiAoJGFuY2hvciAmJiAkYW5jaG9yLmxlbmd0aCAmJiAkbGluayAmJiAkbGluay5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RUYWIoJGFuY2hvciwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2UsIGNvbGxhcHNlIGV2ZXJ5dGhpbmdcbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9jb2xsYXBzZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNPd25BbmNob3IpIHtcbiAgICAgICAgLy8gUm9sbCB1cCBhIGxpdHRsZSB0byBzaG93IHRoZSB0aXRsZXNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGlua1NtdWRnZSkge1xuICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpO1xuICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBvZmZzZXQudG9wIH0sIHRoaXMub3B0aW9ucy5kZWVwTGlua1NtdWRnZURlbGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIGRlZXBsaW5rZWQgYXQgcGFnZWxvYWRcbiAgICAgICAgICogQGV2ZW50IFRhYnMjZGVlcGxpbmtcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignZGVlcGxpbmsuemYudGFicycsIFskbGluaywgJGFuY2hvcl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vdXNlIGJyb3dzZXIgdG8gb3BlbiBhIHRhYiwgaWYgaXQgZXhpc3RzIGluIHRoaXMgdGFic2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGluaykge1xuICAgICAgdGhpcy5fY2hlY2tEZWVwTGluaygpO1xuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpO1xuXG4gICAgdGhpcy5faXNJbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciBpdGVtcyB3aXRoaW4gdGhlIHRhYnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuX2FkZEtleUhhbmRsZXIoKTtcbiAgICB0aGlzLl9hZGRDbGlja0hhbmRsZXIoKTtcbiAgICB0aGlzLl9zZXRIZWlnaHRNcUhhbmRsZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tYXRjaEhlaWdodCkge1xuICAgICAgdGhpcy5fc2V0SGVpZ2h0TXFIYW5kbGVyID0gdGhpcy5fc2V0SGVpZ2h0LmJpbmQodGhpcyk7XG5cbiAgICAgICQod2luZG93KS5vbignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgdGhpcy5fc2V0SGVpZ2h0TXFIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLm9wdGlvbnMuZGVlcExpbmspIHtcbiAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsIHRoaXMuX2NoZWNrRGVlcExpbmspO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGNsaWNrIGhhbmRsZXJzIGZvciBpdGVtcyB3aXRoaW4gdGhlIHRhYnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkQ2xpY2tIYW5kbGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAub2ZmKCdjbGljay56Zi50YWJzJylcbiAgICAgIC5vbignY2xpY2suemYudGFicycsIGAuJHt0aGlzLm9wdGlvbnMubGlua0NsYXNzfWAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIF90aGlzLl9oYW5kbGVUYWJDaGFuZ2UoJCh0aGlzKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGtleWJvYXJkIGV2ZW50IGhhbmRsZXJzIGZvciBpdGVtcyB3aXRoaW4gdGhlIHRhYnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkS2V5SGFuZGxlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFiVGl0bGVzLm9mZigna2V5ZG93bi56Zi50YWJzJykub24oJ2tleWRvd24uemYudGFicycsIGZ1bmN0aW9uKGUpe1xuICAgICAgaWYgKGUud2hpY2ggPT09IDkpIHJldHVybjtcblxuXG4gICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpLFxuICAgICAgICAkZWxlbWVudHMgPSAkZWxlbWVudC5wYXJlbnQoJ3VsJykuY2hpbGRyZW4oJ2xpJyksXG4gICAgICAgICRwcmV2RWxlbWVudCxcbiAgICAgICAgJG5leHRFbGVtZW50O1xuXG4gICAgICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLndyYXBPbktleXMpIHtcbiAgICAgICAgICAgICRwcmV2RWxlbWVudCA9IGkgPT09IDAgPyAkZWxlbWVudHMubGFzdCgpIDogJGVsZW1lbnRzLmVxKGktMSk7XG4gICAgICAgICAgICAkbmV4dEVsZW1lbnQgPSBpID09PSAkZWxlbWVudHMubGVuZ3RoIC0xID8gJGVsZW1lbnRzLmZpcnN0KCkgOiAkZWxlbWVudHMuZXEoaSsxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHByZXZFbGVtZW50ID0gJGVsZW1lbnRzLmVxKE1hdGgubWF4KDAsIGktMSkpO1xuICAgICAgICAgICAgJG5leHRFbGVtZW50ID0gJGVsZW1lbnRzLmVxKE1hdGgubWluKGkrMSwgJGVsZW1lbnRzLmxlbmd0aC0xKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGhhbmRsZSBrZXlib2FyZCBldmVudCB3aXRoIGtleWJvYXJkIHV0aWxcbiAgICAgIEtleWJvYXJkLmhhbmRsZUtleShlLCAnVGFicycsIHtcbiAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKS5mb2N1cygpO1xuICAgICAgICAgIF90aGlzLl9oYW5kbGVUYWJDaGFuZ2UoJGVsZW1lbnQpO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2aW91czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHByZXZFbGVtZW50LmZpbmQoJ1tyb2xlPVwidGFiXCJdJykuZm9jdXMoKTtcbiAgICAgICAgICBfdGhpcy5faGFuZGxlVGFiQ2hhbmdlKCRwcmV2RWxlbWVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRuZXh0RWxlbWVudC5maW5kKCdbcm9sZT1cInRhYlwiXScpLmZvY3VzKCk7XG4gICAgICAgICAgX3RoaXMuX2hhbmRsZVRhYkNoYW5nZSgkbmV4dEVsZW1lbnQpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHRhYiBgJHRhcmdldENvbnRlbnRgIGRlZmluZWQgYnkgYCR0YXJnZXRgLiBDb2xsYXBzZXMgYWN0aXZlIHRhYi5cbiAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBUYWIgdG8gb3Blbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBoaXN0b3J5SGFuZGxlZCAtIGJyb3dzZXIgaGFzIGFscmVhZHkgaGFuZGxlZCBhIGhpc3RvcnkgdXBkYXRlXG4gICAqIEBmaXJlcyBUYWJzI2NoYW5nZVxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIF9oYW5kbGVUYWJDaGFuZ2UoJHRhcmdldCwgaGlzdG9yeUhhbmRsZWQpIHtcblxuICAgIC8vIFdpdGggYGFjdGl2ZUNvbGxhcHNlYCwgaWYgdGhlIHRhcmdldCBpcyB0aGUgYWN0aXZlIFRhYiwgY29sbGFwc2UgaXQuXG4gICAgaWYgKCR0YXJnZXQuaGFzQ2xhc3MoYCR7dGhpcy5vcHRpb25zLmxpbmtBY3RpdmVDbGFzc31gKSkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMuYWN0aXZlQ29sbGFwc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbGxhcHNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkb2xkVGFiID0gdGhpcy4kZWxlbWVudC5cbiAgICAgICAgICBmaW5kKGAuJHt0aGlzLm9wdGlvbnMubGlua0NsYXNzfS4ke3RoaXMub3B0aW9ucy5saW5rQWN0aXZlQ2xhc3N9YCksXG4gICAgICAgICAgJHRhYkxpbmsgPSAkdGFyZ2V0LmZpbmQoJ1tyb2xlPVwidGFiXCJdJyksXG4gICAgICAgICAgdGFyZ2V0ID0gJHRhYkxpbmsuYXR0cignZGF0YS10YWJzLXRhcmdldCcpLFxuICAgICAgICAgIGFuY2hvciA9IHRhcmdldCAmJiB0YXJnZXQubGVuZ3RoID8gYCMke3RhcmdldH1gIDogJHRhYkxpbmtbMF0uaGFzaCxcbiAgICAgICAgICAkdGFyZ2V0Q29udGVudCA9IHRoaXMuJHRhYkNvbnRlbnQuZmluZChhbmNob3IpO1xuXG4gICAgLy9jbG9zZSBvbGQgdGFiXG4gICAgdGhpcy5fY29sbGFwc2VUYWIoJG9sZFRhYik7XG5cbiAgICAvL29wZW4gbmV3IHRhYlxuICAgIHRoaXMuX29wZW5UYWIoJHRhcmdldCk7XG5cbiAgICAvL2VpdGhlciByZXBsYWNlIG9yIHVwZGF0ZSBicm93c2VyIGhpc3RvcnlcbiAgICBpZiAodGhpcy5vcHRpb25zLmRlZXBMaW5rICYmICFoaXN0b3J5SGFuZGxlZCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy51cGRhdGVIaXN0b3J5KSB7XG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgYW5jaG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgYW5jaG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIHN1Y2Nlc3NmdWxseSBjaGFuZ2VkIHRhYnMuXG4gICAgICogQGV2ZW50IFRhYnMjY2hhbmdlXG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UuemYudGFicycsIFskdGFyZ2V0LCAkdGFyZ2V0Q29udGVudF0pO1xuXG4gICAgLy9maXJlIHRvIGNoaWxkcmVuIGEgbXV0YXRpb24gZXZlbnRcbiAgICAkdGFyZ2V0Q29udGVudC5maW5kKFwiW2RhdGEtbXV0YXRlXVwiKS50cmlnZ2VyKFwibXV0YXRlbWUuemYudHJpZ2dlclwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdGFiIGAkdGFyZ2V0Q29udGVudGAgZGVmaW5lZCBieSBgJHRhcmdldGAuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IC0gVGFiIHRvIG9wZW4uXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX29wZW5UYWIoJHRhcmdldCkge1xuICAgICAgdmFyICR0YWJMaW5rID0gJHRhcmdldC5maW5kKCdbcm9sZT1cInRhYlwiXScpLFxuICAgICAgICAgIGhhc2ggPSAkdGFiTGluay5hdHRyKCdkYXRhLXRhYnMtdGFyZ2V0JykgfHwgJHRhYkxpbmtbMF0uaGFzaC5zbGljZSgxKSxcbiAgICAgICAgICAkdGFyZ2V0Q29udGVudCA9IHRoaXMuJHRhYkNvbnRlbnQuZmluZChgIyR7aGFzaH1gKTtcblxuICAgICAgJHRhcmdldC5hZGRDbGFzcyhgJHt0aGlzLm9wdGlvbnMubGlua0FjdGl2ZUNsYXNzfWApO1xuXG4gICAgICAkdGFiTGluay5hdHRyKHtcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsXG4gICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgfSk7XG5cbiAgICAgICR0YXJnZXRDb250ZW50XG4gICAgICAgIC5hZGRDbGFzcyhgJHt0aGlzLm9wdGlvbnMucGFuZWxBY3RpdmVDbGFzc31gKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlcyBgJHRhcmdldENvbnRlbnRgIGRlZmluZWQgYnkgYCR0YXJnZXRgLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIFRhYiB0byBjb2xsYXBzZS5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfY29sbGFwc2VUYWIoJHRhcmdldCkge1xuICAgIHZhciAkdGFyZ2V0X2FuY2hvciA9ICR0YXJnZXRcbiAgICAgIC5yZW1vdmVDbGFzcyhgJHt0aGlzLm9wdGlvbnMubGlua0FjdGl2ZUNsYXNzfWApXG4gICAgICAuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKVxuICAgICAgLmF0dHIoe1xuICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICdmYWxzZScsXG4gICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICB9KTtcblxuICAgICQoYCMkeyR0YXJnZXRfYW5jaG9yLmF0dHIoJ2FyaWEtY29udHJvbHMnKX1gKVxuICAgICAgLnJlbW92ZUNsYXNzKGAke3RoaXMub3B0aW9ucy5wYW5lbEFjdGl2ZUNsYXNzfWApXG4gICAgICAuYXR0cih7ICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9KVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxhcHNlcyB0aGUgYWN0aXZlIFRhYi5cbiAgICogQGZpcmVzIFRhYnMjY29sbGFwc2VcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfY29sbGFwc2UoKSB7XG4gICAgdmFyICRhY3RpdmVUYWIgPSB0aGlzLiRlbGVtZW50LmZpbmQoYC4ke3RoaXMub3B0aW9ucy5saW5rQ2xhc3N9LiR7dGhpcy5vcHRpb25zLmxpbmtBY3RpdmVDbGFzc31gKTtcblxuICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCkge1xuICAgICAgdGhpcy5fY29sbGFwc2VUYWIoJGFjdGl2ZVRhYik7XG5cbiAgICAgIC8qKlxuICAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIHN1Y2Nlc3NmdWxseSBjb2xsYXBzZWQgdGFicy5cbiAgICAgICogQGV2ZW50IFRhYnMjY29sbGFwc2VcbiAgICAgICovXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2NvbGxhcHNlLnpmLnRhYnMnLCBbJGFjdGl2ZVRhYl0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQdWJsaWMgbWV0aG9kIGZvciBzZWxlY3RpbmcgYSBjb250ZW50IHBhbmUgdG8gZGlzcGxheS5cbiAgICogQHBhcmFtIHtqUXVlcnkgfCBTdHJpbmd9IGVsZW0gLSBqUXVlcnkgb2JqZWN0IG9yIHN0cmluZyBvZiB0aGUgaWQgb2YgdGhlIHBhbmUgdG8gZGlzcGxheS5cbiAgICogQHBhcmFtIHtib29sZWFufSBoaXN0b3J5SGFuZGxlZCAtIGJyb3dzZXIgaGFzIGFscmVhZHkgaGFuZGxlZCBhIGhpc3RvcnkgdXBkYXRlXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgc2VsZWN0VGFiKGVsZW0sIGhpc3RvcnlIYW5kbGVkKSB7XG4gICAgdmFyIGlkU3RyO1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgaWRTdHIgPSBlbGVtWzBdLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZFN0ciA9IGVsZW07XG4gICAgfVxuXG4gICAgaWYgKGlkU3RyLmluZGV4T2YoJyMnKSA8IDApIHtcbiAgICAgIGlkU3RyID0gYCMke2lkU3RyfWA7XG4gICAgfVxuXG4gICAgdmFyICR0YXJnZXQgPSB0aGlzLiR0YWJUaXRsZXMuaGFzKGBbaHJlZiQ9XCIke2lkU3RyfVwiXWApO1xuXG4gICAgdGhpcy5faGFuZGxlVGFiQ2hhbmdlKCR0YXJnZXQsIGhpc3RvcnlIYW5kbGVkKTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgaGVpZ2h0IG9mIGVhY2ggcGFuZWwgdG8gdGhlIGhlaWdodCBvZiB0aGUgdGFsbGVzdCBwYW5lbC5cbiAgICogSWYgZW5hYmxlZCBpbiBvcHRpb25zLCBnZXRzIGNhbGxlZCBvbiBtZWRpYSBxdWVyeSBjaGFuZ2UuXG4gICAqIElmIGxvYWRpbmcgY29udGVudCB2aWEgZXh0ZXJuYWwgc291cmNlLCBjYW4gYmUgY2FsbGVkIGRpcmVjdGx5IG9yIHdpdGggX3JlZmxvdy5cbiAgICogSWYgZW5hYmxlZCB3aXRoIGBkYXRhLW1hdGNoLWhlaWdodD1cInRydWVcImAsIHRhYnMgc2V0cyB0byBlcXVhbCBoZWlnaHRcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0SGVpZ2h0KCkge1xuICAgIHZhciBtYXggPSAwLFxuICAgICAgICBfdGhpcyA9IHRoaXM7IC8vIExvY2sgZG93biB0aGUgYHRoaXNgIHZhbHVlIGZvciB0aGUgcm9vdCB0YWJzIG9iamVjdFxuXG4gICAgdGhpcy4kdGFiQ29udGVudFxuICAgICAgLmZpbmQoYC4ke3RoaXMub3B0aW9ucy5wYW5lbENsYXNzfWApXG4gICAgICAuY3NzKCdoZWlnaHQnLCAnJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBwYW5lbCA9ICQodGhpcyksXG4gICAgICAgICAgICBpc0FjdGl2ZSA9IHBhbmVsLmhhc0NsYXNzKGAke190aGlzLm9wdGlvbnMucGFuZWxBY3RpdmVDbGFzc31gKTsgLy8gZ2V0IHRoZSBvcHRpb25zIGZyb20gdGhlIHBhcmVudCBpbnN0ZWFkIG9mIHRyeWluZyB0byBnZXQgdGhlbSBmcm9tIHRoZSBjaGlsZFxuXG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgICBwYW5lbC5jc3Moeyd2aXNpYmlsaXR5JzogJ2hpZGRlbicsICdkaXNwbGF5JzogJ2Jsb2NrJ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRlbXAgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgcGFuZWwuY3NzKHtcbiAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJycsXG4gICAgICAgICAgICAnZGlzcGxheSc6ICcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXggPSB0ZW1wID4gbWF4ID8gdGVtcCA6IG1heDtcbiAgICAgIH0pXG4gICAgICAuY3NzKCdoZWlnaHQnLCBgJHttYXh9cHhgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBhbiBpbnN0YW5jZSBvZiB0YWJzLlxuICAgKiBAZmlyZXMgVGFicyNkZXN0cm95ZWRcbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5maW5kKGAuJHt0aGlzLm9wdGlvbnMubGlua0NsYXNzfWApXG4gICAgICAub2ZmKCcuemYudGFicycpLmhpZGUoKS5lbmQoKVxuICAgICAgLmZpbmQoYC4ke3RoaXMub3B0aW9ucy5wYW5lbENsYXNzfWApXG4gICAgICAuaGlkZSgpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tYXRjaEhlaWdodCkge1xuICAgICAgaWYgKHRoaXMuX3NldEhlaWdodE1xSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgICAkKHdpbmRvdykub2ZmKCdjaGFuZ2VkLnpmLm1lZGlhcXVlcnknLCB0aGlzLl9zZXRIZWlnaHRNcUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVlcExpbmspIHtcbiAgICAgICQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2UnLCB0aGlzLl9jaGVja0RlZXBMaW5rKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbkxvYWRMaXN0ZW5lcikge1xuICAgICAgJCh3aW5kb3cpLm9mZih0aGlzLm9uTG9hZExpc3RlbmVyKTtcbiAgICB9XG4gIH1cbn1cblxuVGFicy5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIExpbmsgdGhlIGxvY2F0aW9uIGhhc2ggdG8gdGhlIGFjdGl2ZSBwYW5lLlxuICAgKiBTZXQgdGhlIGxvY2F0aW9uIGhhc2ggd2hlbiB0aGUgYWN0aXZlIHBhbmUgY2hhbmdlcywgYW5kIG9wZW4gdGhlIGNvcnJlc3BvbmRpbmcgcGFuZSB3aGVuIHRoZSBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGVlcExpbms6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVlcExpbmtgIGlzIGVuYWJsZWQsIGFkanVzdCB0aGUgZGVlcCBsaW5rIHNjcm9sbCB0byBtYWtlIHN1cmUgdGhlIHRvcCBvZiB0aGUgdGFiIHBhbmVsIGlzIHZpc2libGVcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRlZXBMaW5rU211ZGdlOiBmYWxzZSxcblxuICAvKipcbiAgICogSWYgYGRlZXBMaW5rU211ZGdlYCBpcyBlbmFibGVkLCBhbmltYXRpb24gdGltZSAobXMpIGZvciB0aGUgZGVlcCBsaW5rIGFkanVzdG1lbnRcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAzMDBcbiAgICovXG4gIGRlZXBMaW5rU211ZGdlRGVsYXk6IDMwMCxcblxuICAvKipcbiAgICogSWYgYGRlZXBMaW5rYCBpcyBlbmFibGVkLCB1cGRhdGUgdGhlIGJyb3dzZXIgaGlzdG9yeSB3aXRoIHRoZSBvcGVuIHRhYlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdXBkYXRlSGlzdG9yeTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgd2luZG93IHRvIHNjcm9sbCB0byBjb250ZW50IG9mIGFjdGl2ZSBwYW5lIG9uIGxvYWQuXG4gICAqIE5vdCByZWNvbW1lbmRlZCBpZiBtb3JlIHRoYW4gb25lIHRhYiBwYW5lbCBwZXIgcGFnZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGF1dG9Gb2N1czogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEFsbG93cyBrZXlib2FyZCBpbnB1dCB0byAnd3JhcCcgYXJvdW5kIHRoZSB0YWIgbGlua3MuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIHdyYXBPbktleXM6IHRydWUsXG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgdGFiIGNvbnRlbnQgcGFuZXMgdG8gbWF0Y2ggaGVpZ2h0cyBpZiBzZXQgdG8gdHJ1ZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIG1hdGNoSGVpZ2h0OiBmYWxzZSxcblxuICAvKipcbiAgICogQWxsb3dzIGFjdGl2ZSB0YWJzIHRvIGNvbGxhcHNlIHdoZW4gY2xpY2tlZC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGFjdGl2ZUNvbGxhcHNlOiBmYWxzZSxcblxuICAvKipcbiAgICogQ2xhc3MgYXBwbGllZCB0byBgbGlgJ3MgaW4gdGFiIGxpbmsgbGlzdC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAndGFicy10aXRsZSdcbiAgICovXG4gIGxpbmtDbGFzczogJ3RhYnMtdGl0bGUnLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBhcHBsaWVkIHRvIHRoZSBhY3RpdmUgYGxpYCBpbiB0YWIgbGluayBsaXN0LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdpcy1hY3RpdmUnXG4gICAqL1xuICBsaW5rQWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBhcHBsaWVkIHRvIHRoZSBjb250ZW50IGNvbnRhaW5lcnMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ3RhYnMtcGFuZWwnXG4gICAqL1xuICBwYW5lbENsYXNzOiAndGFicy1wYW5lbCcsXG5cbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gdGhlIGFjdGl2ZSBjb250ZW50IGNvbnRhaW5lci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnaXMtYWN0aXZlJ1xuICAgKi9cbiAgcGFuZWxBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcbn07XG5cbmV4cG9ydCB7VGFic307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
