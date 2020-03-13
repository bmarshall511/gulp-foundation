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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.plugin */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.util.imageLoader */
        "./foundation.util.imageLoader");
        /* harmony import */


        var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_3__);

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


        var Tabs = /*#__PURE__*/function (_Plugin) {
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
                  _this.onLoadListener = Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["onLoad"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
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

                var anchorNoHash = anchor.indexOf('#') >= 0 ? anchor.slice(1) : anchor;
                var $anchor = anchorNoHash && jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(anchorNoHash));

                var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"],[data-tabs-target=\"").concat(anchorNoHash, "\"]")).first(); // Whether the anchor element that has been found is part of this element


                var isOwnAnchor = !!($anchor.length && $link.length);

                if (isOwnAnchor) {
                  // If there is an anchor for the hash, select it
                  if ($anchor && $anchor.length && $link && $link.length) {
                    _this2.selectTab($anchor, true);
                  } // Otherwise, collapse everything
                  else {
                      _this2._collapse();
                    } // Roll up a little to show the titles


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
              var idStr, hashIdStr;

              if (_typeof(elem) === 'object') {
                idStr = elem[0].id;
              } else {
                idStr = elem;
              }

              if (idStr.indexOf('#') < 0) {
                hashIdStr = "#".concat(idStr);
              } else {
                hashIdStr = idStr;
                idStr = idStr.slice(1);
              }

              var $target = this.$tabTitles.has("[href$=\"".concat(hashIdStr, "\"],[data-tabs-target=\"").concat(idStr, "\"]")).first();

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
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);

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
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.tabs.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24udGFicy5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi50YWJzLmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIlRhYnMiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJLZXlib2FyZCIsIl90aGlzIiwiJGVsZW0iLCIkbGluayIsImlzQWN0aXZlIiwiaGFzaCIsImxpbmtJZCIsIiR0YWJDb250ZW50Iiwib25Mb2FkIiwic2Nyb2xsVG9wIiwidG9wIiwiJGltYWdlcyIsIm9uSW1hZ2VzTG9hZGVkIiwiYW5jaG9yIiwid2luZG93IiwiYW5jaG9yTm9IYXNoIiwiJGFuY2hvciIsImlzT3duQW5jaG9yIiwib2Zmc2V0IiwiZSIsIiRlbGVtZW50IiwiJGVsZW1lbnRzIiwiJHByZXZFbGVtZW50IiwiaSIsIiRuZXh0RWxlbWVudCIsIk1hdGgiLCJvcGVuIiwicHJldmlvdXMiLCJuZXh0IiwiaGFuZGxlZCIsIiR0YXJnZXQiLCJoaXN0b3J5SGFuZGxlZCIsIiRvbGRUYWIiLCIkdGFiTGluayIsInRhcmdldCIsIiR0YXJnZXRDb250ZW50IiwiaGlzdG9yeSIsIiR0YXJnZXRfYW5jaG9yIiwiJGFjdGl2ZVRhYiIsImVsZW0iLCJpZFN0ciIsImhhc2hJZFN0ciIsIm1heCIsInBhbmVsIiwidGVtcCIsIlBsdWdpbiIsImRlZXBMaW5rIiwiZGVlcExpbmtTbXVkZ2UiLCJkZWVwTGlua1NtdWRnZURlbGF5IiwidXBkYXRlSGlzdG9yeSIsImF1dG9Gb2N1cyIsIndyYXBPbktleXMiLCJtYXRjaEhlaWdodCIsImFjdGl2ZUNvbGxhcHNlIiwibGlua0NsYXNzIiwibGlua0FjdGl2ZUNsYXNzIiwicGFuZWxDbGFzcyIsInBhbmVsQWN0aXZlQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsK0JBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsK0JBQUEsRUFBQSw0QkFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLGlCQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsK0JBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsNkJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSx3REFBQSxFQUFBLHFEQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtBQUFpRCxVQUFBLEtBQUEsRUFBQTtBQUFqRCxTQUFBO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxHQUFBLG1CQUFBLENBQUEsS0FBQSxDQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxRQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsQ0FBQSxVQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEVBQUEsRUFBQSxTQUFBLEVBQUE7QUFBeUMsVUFBQSxVQUFBLEVBQUEsSUFBekM7QUFBeUMsVUFBQSxLQUFBLEVBQUE7QUFBekMsU0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxPQUFBLEtBQUEsSUFBQSxRQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEdBQUEsRUFBQTtBQUFnSCxpQkFBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQXFCLFNBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJLENBQUE7QUFDQTs7QUFBQSxlQUFBLEVBQUE7QUFDQTtBQUFBLE9BVEE7OztBQVdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFB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cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5pbWFnZUxvYWRlclwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwuaW1hZ2VMb2FkZXJcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3VuZGF0aW9uLnRhYnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmltYWdlTG9hZGVyXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnRhYnNcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLmltYWdlTG9hZGVyXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2ltYWdlTG9hZGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9rZXlib2FyZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgVGFicyB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24udGFicyc7XG5Gb3VuZGF0aW9uLnBsdWdpbihUYWJzLCAnVGFicycpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBUYWJzIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuaW1wb3J0IHsgb25Mb2FkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZCc7XG5pbXBvcnQgeyBvbkltYWdlc0xvYWRlZCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmltYWdlTG9hZGVyJztcbi8qKlxuICogVGFicyBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24udGFic1xuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5pbWFnZUxvYWRlciBpZiB0YWJzIGNvbnRhaW4gaW1hZ2VzXG4gKi9cblxuY2xhc3MgVGFicyBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRhYnMuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBUYWJzXG4gICAqIEBmaXJlcyBUYWJzI2luaXRcbiAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIG1ha2UgaW50byB0YWJzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBUYWJzLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnVGFicyc7IC8vIGllOSBiYWNrIGNvbXBhdFxuXG4gICAgdGhpcy5faW5pdCgpO1xuICAgIEtleWJvYXJkLnJlZ2lzdGVyKCdUYWJzJywge1xuICAgICAgJ0VOVEVSJzogJ29wZW4nLFxuICAgICAgJ1NQQUNFJzogJ29wZW4nLFxuICAgICAgJ0FSUk9XX1JJR0hUJzogJ25leHQnLFxuICAgICAgJ0FSUk9XX1VQJzogJ3ByZXZpb3VzJyxcbiAgICAgICdBUlJPV19ET1dOJzogJ25leHQnLFxuICAgICAgJ0FSUk9XX0xFRlQnOiAncHJldmlvdXMnXG4gICAgICAvLyAnVEFCJzogJ25leHQnLFxuICAgICAgLy8gJ1NISUZUX1RBQic6ICdwcmV2aW91cydcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgdGFicyBieSBzaG93aW5nIGFuZCBmb2N1c2luZyAoaWYgYXV0b0ZvY3VzPXRydWUpIHRoZSBwcmVzZXQgYWN0aXZlIHRhYi5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy5faXNJbml0aWFsaXppbmcgPSB0cnVlO1xuXG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKHsncm9sZSc6ICd0YWJsaXN0J30pO1xuICAgIHRoaXMuJHRhYlRpdGxlcyA9IHRoaXMuJGVsZW1lbnQuZmluZChgLiR7dGhpcy5vcHRpb25zLmxpbmtDbGFzc31gKTtcbiAgICB0aGlzLiR0YWJDb250ZW50ID0gJChgW2RhdGEtdGFicy1jb250ZW50PVwiJHt0aGlzLiRlbGVtZW50WzBdLmlkfVwiXWApO1xuXG4gICAgdGhpcy4kdGFiVGl0bGVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciAkZWxlbSA9ICQodGhpcyksXG4gICAgICAgICAgJGxpbmsgPSAkZWxlbS5maW5kKCdhJyksXG4gICAgICAgICAgaXNBY3RpdmUgPSAkZWxlbS5oYXNDbGFzcyhgJHtfdGhpcy5vcHRpb25zLmxpbmtBY3RpdmVDbGFzc31gKSxcbiAgICAgICAgICBoYXNoID0gJGxpbmsuYXR0cignZGF0YS10YWJzLXRhcmdldCcpIHx8ICRsaW5rWzBdLmhhc2guc2xpY2UoMSksXG4gICAgICAgICAgbGlua0lkID0gJGxpbmtbMF0uaWQgPyAkbGlua1swXS5pZCA6IGAke2hhc2h9LWxhYmVsYCxcbiAgICAgICAgICAkdGFiQ29udGVudCA9ICQoYCMke2hhc2h9YCk7XG5cbiAgICAgICRlbGVtLmF0dHIoeydyb2xlJzogJ3ByZXNlbnRhdGlvbid9KTtcblxuICAgICAgJGxpbmsuYXR0cih7XG4gICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogaGFzaCxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc0FjdGl2ZSxcbiAgICAgICAgJ2lkJzogbGlua0lkLFxuICAgICAgICAndGFiaW5kZXgnOiBpc0FjdGl2ZSA/ICcwJyA6ICctMSdcbiAgICAgIH0pO1xuXG4gICAgICAkdGFiQ29udGVudC5hdHRyKHtcbiAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGlua0lkXG4gICAgICB9KTtcblxuICAgICAgLy8gU2F2ZSB1cCB0aGUgaW5pdGlhbCBoYXNoIHRvIHJldHVybiB0byBpdCBsYXRlciB3aGVuIGdvaW5nIGJhY2sgaW4gaGlzdG9yeVxuICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgIF90aGlzLl9pbml0aWFsQW5jaG9yID0gYCMke2hhc2h9YDtcbiAgICAgIH1cblxuICAgICAgaWYoIWlzQWN0aXZlKSB7XG4gICAgICAgICR0YWJDb250ZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIH1cblxuICAgICAgaWYoaXNBY3RpdmUgJiYgX3RoaXMub3B0aW9ucy5hdXRvRm9jdXMpe1xuICAgICAgICBfdGhpcy5vbkxvYWRMaXN0ZW5lciA9IG9uTG9hZCgkKHdpbmRvdyksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkZWxlbS5vZmZzZXQoKS50b3AgfSwgX3RoaXMub3B0aW9ucy5kZWVwTGlua1NtdWRnZURlbGF5LCAoKSA9PiB7XG4gICAgICAgICAgICAkbGluay5mb2N1cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5tYXRjaEhlaWdodCkge1xuICAgICAgdmFyICRpbWFnZXMgPSB0aGlzLiR0YWJDb250ZW50LmZpbmQoJ2ltZycpO1xuXG4gICAgICBpZiAoJGltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgb25JbWFnZXNMb2FkZWQoJGltYWdlcywgdGhpcy5fc2V0SGVpZ2h0LmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2V0SGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIC8vIEN1cnJlbnQgY29udGV4dC1ib3VuZCBmdW5jdGlvbiB0byBvcGVuIHRhYnMgb24gcGFnZSBsb2FkIG9yIGhpc3RvcnkgaGFzaGNoYW5nZVxuICAgIHRoaXMuX2NoZWNrRGVlcExpbmsgPSAoKSA9PiB7XG4gICAgICB2YXIgYW5jaG9yID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgICAgIGlmICghYW5jaG9yLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmUgc3RpbGwgaW5pdGlhbGl6aW5nIGFuZCB0aGVyZSBpcyBubyBhbmNob3IsIHRoZW4gdGhlcmUgaXMgbm90aGluZyB0byBkb1xuICAgICAgICBpZiAodGhpcy5faXNJbml0aWFsaXppbmcpIHJldHVybjtcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBtb3ZlIHRvIHRoZSBpbml0aWFsIGFuY2hvclxuICAgICAgICBpZiAodGhpcy5faW5pdGlhbEFuY2hvcikgYW5jaG9yID0gdGhpcy5faW5pdGlhbEFuY2hvcjtcbiAgICAgIH1cblxuICAgICAgdmFyIGFuY2hvck5vSGFzaCA9IGFuY2hvci5pbmRleE9mKCcjJykgPj0gMCA/IGFuY2hvci5zbGljZSgxKSA6IGFuY2hvcjtcbiAgICAgIHZhciAkYW5jaG9yID0gYW5jaG9yTm9IYXNoICYmICQoYCMke2FuY2hvck5vSGFzaH1gKTtcbiAgICAgIHZhciAkbGluayA9IGFuY2hvciAmJiB0aGlzLiRlbGVtZW50LmZpbmQoYFtocmVmJD1cIiR7YW5jaG9yfVwiXSxbZGF0YS10YWJzLXRhcmdldD1cIiR7YW5jaG9yTm9IYXNofVwiXWApLmZpcnN0KCk7XG4gICAgICAvLyBXaGV0aGVyIHRoZSBhbmNob3IgZWxlbWVudCB0aGF0IGhhcyBiZWVuIGZvdW5kIGlzIHBhcnQgb2YgdGhpcyBlbGVtZW50XG4gICAgICB2YXIgaXNPd25BbmNob3IgPSAhISgkYW5jaG9yLmxlbmd0aCAmJiAkbGluay5sZW5ndGgpO1xuXG4gICAgICBpZiAoaXNPd25BbmNob3IpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gYW5jaG9yIGZvciB0aGUgaGFzaCwgc2VsZWN0IGl0XG4gICAgICAgIGlmICgkYW5jaG9yICYmICRhbmNob3IubGVuZ3RoICYmICRsaW5rICYmICRsaW5rLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKCRhbmNob3IsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgY29sbGFwc2UgZXZlcnl0aGluZ1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9jb2xsYXBzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUm9sbCB1cCBhIGxpdHRsZSB0byBzaG93IHRoZSB0aXRsZXNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGlua1NtdWRnZSkge1xuICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLiRlbGVtZW50Lm9mZnNldCgpO1xuICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBvZmZzZXQudG9wIH0sIHRoaXMub3B0aW9ucy5kZWVwTGlua1NtdWRnZURlbGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBwbHVnaW4gaGFzIGRlZXBsaW5rZWQgYXQgcGFnZWxvYWRcbiAgICAgICAgICogQGV2ZW50IFRhYnMjZGVlcGxpbmtcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignZGVlcGxpbmsuemYudGFicycsIFskbGluaywgJGFuY2hvcl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vdXNlIGJyb3dzZXIgdG8gb3BlbiBhIHRhYiwgaWYgaXQgZXhpc3RzIGluIHRoaXMgdGFic2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGluaykge1xuICAgICAgdGhpcy5fY2hlY2tEZWVwTGluaygpO1xuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpO1xuXG4gICAgdGhpcy5faXNJbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciBpdGVtcyB3aXRoaW4gdGhlIHRhYnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuX2FkZEtleUhhbmRsZXIoKTtcbiAgICB0aGlzLl9hZGRDbGlja0hhbmRsZXIoKTtcbiAgICB0aGlzLl9zZXRIZWlnaHRNcUhhbmRsZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tYXRjaEhlaWdodCkge1xuICAgICAgdGhpcy5fc2V0SGVpZ2h0TXFIYW5kbGVyID0gdGhpcy5fc2V0SGVpZ2h0LmJpbmQodGhpcyk7XG5cbiAgICAgICQod2luZG93KS5vbignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgdGhpcy5fc2V0SGVpZ2h0TXFIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLm9wdGlvbnMuZGVlcExpbmspIHtcbiAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsIHRoaXMuX2NoZWNrRGVlcExpbmspO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGNsaWNrIGhhbmRsZXJzIGZvciBpdGVtcyB3aXRoaW4gdGhlIHRhYnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkQ2xpY2tIYW5kbGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50XG4gICAgICAub2ZmKCdjbGljay56Zi50YWJzJylcbiAgICAgIC5vbignY2xpY2suemYudGFicycsIGAuJHt0aGlzLm9wdGlvbnMubGlua0NsYXNzfWAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF90aGlzLl9oYW5kbGVUYWJDaGFuZ2UoJCh0aGlzKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGtleWJvYXJkIGV2ZW50IGhhbmRsZXJzIGZvciBpdGVtcyB3aXRoaW4gdGhlIHRhYnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYWRkS2V5SGFuZGxlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGFiVGl0bGVzLm9mZigna2V5ZG93bi56Zi50YWJzJykub24oJ2tleWRvd24uemYudGFicycsIGZ1bmN0aW9uKGUpe1xuICAgICAgaWYgKGUud2hpY2ggPT09IDkpIHJldHVybjtcblxuXG4gICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpLFxuICAgICAgICAkZWxlbWVudHMgPSAkZWxlbWVudC5wYXJlbnQoJ3VsJykuY2hpbGRyZW4oJ2xpJyksXG4gICAgICAgICRwcmV2RWxlbWVudCxcbiAgICAgICAgJG5leHRFbGVtZW50O1xuXG4gICAgICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLndyYXBPbktleXMpIHtcbiAgICAgICAgICAgICRwcmV2RWxlbWVudCA9IGkgPT09IDAgPyAkZWxlbWVudHMubGFzdCgpIDogJGVsZW1lbnRzLmVxKGktMSk7XG4gICAgICAgICAgICAkbmV4dEVsZW1lbnQgPSBpID09PSAkZWxlbWVudHMubGVuZ3RoIC0xID8gJGVsZW1lbnRzLmZpcnN0KCkgOiAkZWxlbWVudHMuZXEoaSsxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHByZXZFbGVtZW50ID0gJGVsZW1lbnRzLmVxKE1hdGgubWF4KDAsIGktMSkpO1xuICAgICAgICAgICAgJG5leHRFbGVtZW50ID0gJGVsZW1lbnRzLmVxKE1hdGgubWluKGkrMSwgJGVsZW1lbnRzLmxlbmd0aC0xKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGhhbmRsZSBrZXlib2FyZCBldmVudCB3aXRoIGtleWJvYXJkIHV0aWxcbiAgICAgIEtleWJvYXJkLmhhbmRsZUtleShlLCAnVGFicycsIHtcbiAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKS5mb2N1cygpO1xuICAgICAgICAgIF90aGlzLl9oYW5kbGVUYWJDaGFuZ2UoJGVsZW1lbnQpO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2aW91czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHByZXZFbGVtZW50LmZpbmQoJ1tyb2xlPVwidGFiXCJdJykuZm9jdXMoKTtcbiAgICAgICAgICBfdGhpcy5faGFuZGxlVGFiQ2hhbmdlKCRwcmV2RWxlbWVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRuZXh0RWxlbWVudC5maW5kKCdbcm9sZT1cInRhYlwiXScpLmZvY3VzKCk7XG4gICAgICAgICAgX3RoaXMuX2hhbmRsZVRhYkNoYW5nZSgkbmV4dEVsZW1lbnQpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSB0YWIgYCR0YXJnZXRDb250ZW50YCBkZWZpbmVkIGJ5IGAkdGFyZ2V0YC4gQ29sbGFwc2VzIGFjdGl2ZSB0YWIuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IC0gVGFiIHRvIG9wZW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaGlzdG9yeUhhbmRsZWQgLSBicm93c2VyIGhhcyBhbHJlYWR5IGhhbmRsZWQgYSBoaXN0b3J5IHVwZGF0ZVxuICAgKiBAZmlyZXMgVGFicyNjaGFuZ2VcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfaGFuZGxlVGFiQ2hhbmdlKCR0YXJnZXQsIGhpc3RvcnlIYW5kbGVkKSB7XG5cbiAgICAvLyBXaXRoIGBhY3RpdmVDb2xsYXBzZWAsIGlmIHRoZSB0YXJnZXQgaXMgdGhlIGFjdGl2ZSBUYWIsIGNvbGxhcHNlIGl0LlxuICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKGAke3RoaXMub3B0aW9ucy5saW5rQWN0aXZlQ2xhc3N9YCkpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmFjdGl2ZUNvbGxhcHNlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2xsYXBzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJG9sZFRhYiA9IHRoaXMuJGVsZW1lbnQuXG4gICAgICAgICAgZmluZChgLiR7dGhpcy5vcHRpb25zLmxpbmtDbGFzc30uJHt0aGlzLm9wdGlvbnMubGlua0FjdGl2ZUNsYXNzfWApLFxuICAgICAgICAgICR0YWJMaW5rID0gJHRhcmdldC5maW5kKCdbcm9sZT1cInRhYlwiXScpLFxuICAgICAgICAgIHRhcmdldCA9ICR0YWJMaW5rLmF0dHIoJ2RhdGEtdGFicy10YXJnZXQnKSxcbiAgICAgICAgICBhbmNob3IgPSB0YXJnZXQgJiYgdGFyZ2V0Lmxlbmd0aCA/IGAjJHt0YXJnZXR9YCA6ICR0YWJMaW5rWzBdLmhhc2gsXG4gICAgICAgICAgJHRhcmdldENvbnRlbnQgPSB0aGlzLiR0YWJDb250ZW50LmZpbmQoYW5jaG9yKTtcblxuICAgIC8vY2xvc2Ugb2xkIHRhYlxuICAgIHRoaXMuX2NvbGxhcHNlVGFiKCRvbGRUYWIpO1xuXG4gICAgLy9vcGVuIG5ldyB0YWJcbiAgICB0aGlzLl9vcGVuVGFiKCR0YXJnZXQpO1xuXG4gICAgLy9laXRoZXIgcmVwbGFjZSBvciB1cGRhdGUgYnJvd3NlciBoaXN0b3J5XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGluayAmJiAhaGlzdG9yeUhhbmRsZWQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudXBkYXRlSGlzdG9yeSkge1xuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGFuY2hvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIGFuY2hvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBzdWNjZXNzZnVsbHkgY2hhbmdlZCB0YWJzLlxuICAgICAqIEBldmVudCBUYWJzI2NoYW5nZVxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignY2hhbmdlLnpmLnRhYnMnLCBbJHRhcmdldCwgJHRhcmdldENvbnRlbnRdKTtcblxuICAgIC8vZmlyZSB0byBjaGlsZHJlbiBhIG11dGF0aW9uIGV2ZW50XG4gICAgJHRhcmdldENvbnRlbnQuZmluZChcIltkYXRhLW11dGF0ZV1cIikudHJpZ2dlcihcIm11dGF0ZW1lLnpmLnRyaWdnZXJcIik7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIHRhYiBgJHRhcmdldENvbnRlbnRgIGRlZmluZWQgYnkgYCR0YXJnZXRgLlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIFRhYiB0byBvcGVuLlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIF9vcGVuVGFiKCR0YXJnZXQpIHtcbiAgICAgIHZhciAkdGFiTGluayA9ICR0YXJnZXQuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKSxcbiAgICAgICAgICBoYXNoID0gJHRhYkxpbmsuYXR0cignZGF0YS10YWJzLXRhcmdldCcpIHx8ICR0YWJMaW5rWzBdLmhhc2guc2xpY2UoMSksXG4gICAgICAgICAgJHRhcmdldENvbnRlbnQgPSB0aGlzLiR0YWJDb250ZW50LmZpbmQoYCMke2hhc2h9YCk7XG5cbiAgICAgICR0YXJnZXQuYWRkQ2xhc3MoYCR7dGhpcy5vcHRpb25zLmxpbmtBY3RpdmVDbGFzc31gKTtcblxuICAgICAgJHRhYkxpbmsuYXR0cih7XG4gICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgIH0pO1xuXG4gICAgICAkdGFyZ2V0Q29udGVudFxuICAgICAgICAuYWRkQ2xhc3MoYCR7dGhpcy5vcHRpb25zLnBhbmVsQWN0aXZlQ2xhc3N9YCkucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsYXBzZXMgYCR0YXJnZXRDb250ZW50YCBkZWZpbmVkIGJ5IGAkdGFyZ2V0YC5cbiAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBUYWIgdG8gY29sbGFwc2UuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2NvbGxhcHNlVGFiKCR0YXJnZXQpIHtcbiAgICB2YXIgJHRhcmdldF9hbmNob3IgPSAkdGFyZ2V0XG4gICAgICAucmVtb3ZlQ2xhc3MoYCR7dGhpcy5vcHRpb25zLmxpbmtBY3RpdmVDbGFzc31gKVxuICAgICAgLmZpbmQoJ1tyb2xlPVwidGFiXCJdJylcbiAgICAgIC5hdHRyKHtcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAnZmFsc2UnLFxuICAgICAgICAndGFiaW5kZXgnOiAtMVxuICAgICAgfSk7XG5cbiAgICAkKGAjJHskdGFyZ2V0X2FuY2hvci5hdHRyKCdhcmlhLWNvbnRyb2xzJyl9YClcbiAgICAgIC5yZW1vdmVDbGFzcyhgJHt0aGlzLm9wdGlvbnMucGFuZWxBY3RpdmVDbGFzc31gKVxuICAgICAgLmF0dHIoeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsYXBzZXMgdGhlIGFjdGl2ZSBUYWIuXG4gICAqIEBmaXJlcyBUYWJzI2NvbGxhcHNlXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2NvbGxhcHNlKCkge1xuICAgIHZhciAkYWN0aXZlVGFiID0gdGhpcy4kZWxlbWVudC5maW5kKGAuJHt0aGlzLm9wdGlvbnMubGlua0NsYXNzfS4ke3RoaXMub3B0aW9ucy5saW5rQWN0aXZlQ2xhc3N9YCk7XG5cbiAgICBpZiAoJGFjdGl2ZVRhYi5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2NvbGxhcHNlVGFiKCRhY3RpdmVUYWIpO1xuXG4gICAgICAvKipcbiAgICAgICogRmlyZXMgd2hlbiB0aGUgcGx1Z2luIGhhcyBzdWNjZXNzZnVsbHkgY29sbGFwc2VkIHRhYnMuXG4gICAgICAqIEBldmVudCBUYWJzI2NvbGxhcHNlXG4gICAgICAqL1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjb2xsYXBzZS56Zi50YWJzJywgWyRhY3RpdmVUYWJdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHVibGljIG1ldGhvZCBmb3Igc2VsZWN0aW5nIGEgY29udGVudCBwYW5lIHRvIGRpc3BsYXkuXG4gICAqIEBwYXJhbSB7alF1ZXJ5IHwgU3RyaW5nfSBlbGVtIC0galF1ZXJ5IG9iamVjdCBvciBzdHJpbmcgb2YgdGhlIGlkIG9mIHRoZSBwYW5lIHRvIGRpc3BsYXkuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaGlzdG9yeUhhbmRsZWQgLSBicm93c2VyIGhhcyBhbHJlYWR5IGhhbmRsZWQgYSBoaXN0b3J5IHVwZGF0ZVxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIHNlbGVjdFRhYihlbGVtLCBoaXN0b3J5SGFuZGxlZCkge1xuICAgIHZhciBpZFN0ciwgaGFzaElkU3RyO1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgaWRTdHIgPSBlbGVtWzBdLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZFN0ciA9IGVsZW07XG4gICAgfVxuXG4gICAgaWYgKGlkU3RyLmluZGV4T2YoJyMnKSA8IDApIHtcbiAgICAgIGhhc2hJZFN0ciA9IGAjJHtpZFN0cn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYXNoSWRTdHIgPSBpZFN0cjtcbiAgICAgIGlkU3RyID0gaWRTdHIuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgdmFyICR0YXJnZXQgPSB0aGlzLiR0YWJUaXRsZXMuaGFzKGBbaHJlZiQ9XCIke2hhc2hJZFN0cn1cIl0sW2RhdGEtdGFicy10YXJnZXQ9XCIke2lkU3RyfVwiXWApLmZpcnN0KCk7XG5cbiAgICB0aGlzLl9oYW5kbGVUYWJDaGFuZ2UoJHRhcmdldCwgaGlzdG9yeUhhbmRsZWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBoZWlnaHQgb2YgZWFjaCBwYW5lbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSB0YWxsZXN0IHBhbmVsLlxuICAgKiBJZiBlbmFibGVkIGluIG9wdGlvbnMsIGdldHMgY2FsbGVkIG9uIG1lZGlhIHF1ZXJ5IGNoYW5nZS5cbiAgICogSWYgbG9hZGluZyBjb250ZW50IHZpYSBleHRlcm5hbCBzb3VyY2UsIGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgb3Igd2l0aCBfcmVmbG93LlxuICAgKiBJZiBlbmFibGVkIHdpdGggYGRhdGEtbWF0Y2gtaGVpZ2h0PVwidHJ1ZVwiYCwgdGFicyBzZXRzIHRvIGVxdWFsIGhlaWdodFxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRIZWlnaHQoKSB7XG4gICAgdmFyIG1heCA9IDAsXG4gICAgICAgIF90aGlzID0gdGhpczsgLy8gTG9jayBkb3duIHRoZSBgdGhpc2AgdmFsdWUgZm9yIHRoZSByb290IHRhYnMgb2JqZWN0XG5cbiAgICB0aGlzLiR0YWJDb250ZW50XG4gICAgICAuZmluZChgLiR7dGhpcy5vcHRpb25zLnBhbmVsQ2xhc3N9YClcbiAgICAgIC5jc3MoJ2hlaWdodCcsICcnKVxuICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHBhbmVsID0gJCh0aGlzKSxcbiAgICAgICAgICAgIGlzQWN0aXZlID0gcGFuZWwuaGFzQ2xhc3MoYCR7X3RoaXMub3B0aW9ucy5wYW5lbEFjdGl2ZUNsYXNzfWApOyAvLyBnZXQgdGhlIG9wdGlvbnMgZnJvbSB0aGUgcGFyZW50IGluc3RlYWQgb2YgdHJ5aW5nIHRvIGdldCB0aGVtIGZyb20gdGhlIGNoaWxkXG5cbiAgICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICAgIHBhbmVsLmNzcyh7J3Zpc2liaWxpdHknOiAnaGlkZGVuJywgJ2Rpc3BsYXknOiAnYmxvY2snfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGVtcCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgICBwYW5lbC5jc3Moe1xuICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAnJyxcbiAgICAgICAgICAgICdkaXNwbGF5JzogJydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1heCA9IHRlbXAgPiBtYXggPyB0ZW1wIDogbWF4O1xuICAgICAgfSlcbiAgICAgIC5jc3MoJ2hlaWdodCcsIGAke21heH1weGApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGFuIGluc3RhbmNlIG9mIHRhYnMuXG4gICAqIEBmaXJlcyBUYWJzI2Rlc3Ryb3llZFxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLmZpbmQoYC4ke3RoaXMub3B0aW9ucy5saW5rQ2xhc3N9YClcbiAgICAgIC5vZmYoJy56Zi50YWJzJykuaGlkZSgpLmVuZCgpXG4gICAgICAuZmluZChgLiR7dGhpcy5vcHRpb25zLnBhbmVsQ2xhc3N9YClcbiAgICAgIC5oaWRlKCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm1hdGNoSGVpZ2h0KSB7XG4gICAgICBpZiAodGhpcy5fc2V0SGVpZ2h0TXFIYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICQod2luZG93KS5vZmYoJ2NoYW5nZWQuemYubWVkaWFxdWVyeScsIHRoaXMuX3NldEhlaWdodE1xSGFuZGxlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWVwTGluaykge1xuICAgICAgJCh3aW5kb3cpLm9mZignaGFzaGNoYW5nZScsIHRoaXMuX2NoZWNrRGVlcExpbmspO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uTG9hZExpc3RlbmVyKSB7XG4gICAgICAkKHdpbmRvdykub2ZmKHRoaXMub25Mb2FkTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxufVxuXG5UYWJzLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogTGluayB0aGUgbG9jYXRpb24gaGFzaCB0byB0aGUgYWN0aXZlIHBhbmUuXG4gICAqIFNldCB0aGUgbG9jYXRpb24gaGFzaCB3aGVuIHRoZSBhY3RpdmUgcGFuZSBjaGFuZ2VzLCBhbmQgb3BlbiB0aGUgY29ycmVzcG9uZGluZyBwYW5lIHdoZW4gdGhlIGxvY2F0aW9uIGNoYW5nZXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBkZWVwTGluazogZmFsc2UsXG5cbiAgLyoqXG4gICAqIElmIGBkZWVwTGlua2AgaXMgZW5hYmxlZCwgYWRqdXN0IHRoZSBkZWVwIGxpbmsgc2Nyb2xsIHRvIG1ha2Ugc3VyZSB0aGUgdG9wIG9mIHRoZSB0YWIgcGFuZWwgaXMgdmlzaWJsZVxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGVlcExpbmtTbXVkZ2U6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVlcExpbmtTbXVkZ2VgIGlzIGVuYWJsZWQsIGFuaW1hdGlvbiB0aW1lIChtcykgZm9yIHRoZSBkZWVwIGxpbmsgYWRqdXN0bWVudFxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDMwMFxuICAgKi9cbiAgZGVlcExpbmtTbXVkZ2VEZWxheTogMzAwLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVlcExpbmtgIGlzIGVuYWJsZWQsIHVwZGF0ZSB0aGUgYnJvd3NlciBoaXN0b3J5IHdpdGggdGhlIG9wZW4gdGFiXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICB1cGRhdGVIaXN0b3J5OiBmYWxzZSxcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB3aW5kb3cgdG8gc2Nyb2xsIHRvIGNvbnRlbnQgb2YgYWN0aXZlIHBhbmUgb24gbG9hZC5cbiAgICogTm90IHJlY29tbWVuZGVkIGlmIG1vcmUgdGhhbiBvbmUgdGFiIHBhbmVsIHBlciBwYWdlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYXV0b0ZvY3VzOiBmYWxzZSxcblxuICAvKipcbiAgICogQWxsb3dzIGtleWJvYXJkIGlucHV0IHRvICd3cmFwJyBhcm91bmQgdGhlIHRhYiBsaW5rcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgd3JhcE9uS2V5czogdHJ1ZSxcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB0YWIgY29udGVudCBwYW5lcyB0byBtYXRjaCBoZWlnaHRzIGlmIHNldCB0byB0cnVlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgbWF0Y2hIZWlnaHQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgYWN0aXZlIHRhYnMgdG8gY29sbGFwc2Ugd2hlbiBjbGlja2VkLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYWN0aXZlQ29sbGFwc2U6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBhcHBsaWVkIHRvIGBsaWAncyBpbiB0YWIgbGluayBsaXN0LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICd0YWJzLXRpdGxlJ1xuICAgKi9cbiAgbGlua0NsYXNzOiAndGFicy10aXRsZScsXG5cbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gdGhlIGFjdGl2ZSBgbGlgIGluIHRhYiBsaW5rIGxpc3QuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2lzLWFjdGl2ZSdcbiAgICovXG4gIGxpbmtBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZScsXG5cbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gdGhlIGNvbnRlbnQgY29udGFpbmVycy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAndGFicy1wYW5lbCdcbiAgICovXG4gIHBhbmVsQ2xhc3M6ICd0YWJzLXBhbmVsJyxcblxuICAvKipcbiAgICogQ2xhc3MgYXBwbGllZCB0byB0aGUgYWN0aXZlIGNvbnRlbnQgY29udGFpbmVyLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdpcy1hY3RpdmUnXG4gICAqL1xuICBwYW5lbEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xufTtcblxuZXhwb3J0IHtUYWJzfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
