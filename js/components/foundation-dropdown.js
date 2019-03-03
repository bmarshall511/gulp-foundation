(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.box"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.box", "./foundation.util.keyboard", "./foundation.util.nest", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.dropdownMenu"] = factory(require("./foundation.core"), require("./foundation.util.box"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.dropdownMenu"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.box"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.nest"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_box__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_nest__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 5);
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
      "./foundation.util.box":
      /*!********************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.box"],"amd":"./foundation.util.box","commonjs":"./foundation.util.box","commonjs2":"./foundation.util.box"} ***!
        \********************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_box__;
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
      "./js/entries/plugins/foundation.dropdownMenu.js":
      /*!*******************************************************!*\
        !*** ./js/entries/plugins/foundation.dropdownMenu.js ***!
        \*******************************************************/

      /*! exports provided: Foundation, DropdownMenu */

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


        var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.dropdownMenu */
        "./js/foundation.dropdownMenu.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "DropdownMenu", function () {
          return _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], 'DropdownMenu');
        /***/

      },

      /***/
      "./js/foundation.dropdownMenu.js":
      /*!***************************************!*\
        !*** ./js/foundation.dropdownMenu.js ***!
        \***************************************/

      /*! exports provided: DropdownMenu */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "DropdownMenu", function () {
          return DropdownMenu;
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


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.plugin */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.util.nest */
        "./foundation.util.nest");
        /* harmony import */


        var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_nest__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.util.box */
        "./foundation.util.box");
        /* harmony import */


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_util_box__WEBPACK_IMPORTED_MODULE_4__);

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
         * DropdownMenu module.
         * @module foundation.dropdown-menu
         * @requires foundation.util.keyboard
         * @requires foundation.util.box
         * @requires foundation.util.nest
         */


        var DropdownMenu =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(DropdownMenu, _Plugin);

          function DropdownMenu() {
            _classCallCheck(this, DropdownMenu);

            return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
          }

          _createClass(DropdownMenu, [{
            key: "_setup",

            /**
             * Creates a new instance of DropdownMenu.
             * @class
             * @name DropdownMenu
             * @fires DropdownMenu#init
             * @param {jQuery} element - jQuery object to make into a dropdown menu.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, DropdownMenu.defaults, this.$element.data(), options);
              this.className = 'DropdownMenu'; // ie9 back compat

              this._init();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].register('DropdownMenu', {
                'ENTER': 'open',
                'SPACE': 'open',
                'ARROW_RIGHT': 'next',
                'ARROW_UP': 'up',
                'ARROW_DOWN': 'down',
                'ARROW_LEFT': 'previous',
                'ESCAPE': 'close'
              });
            }
            /**
             * Initializes the plugin, and calls _prepareMenu
             * @private
             * @function
             */

          }, {
            key: "_init",
            value: function _init() {
              _foundation_util_nest__WEBPACK_IMPORTED_MODULE_3__["Nest"].Feather(this.$element, 'dropdown');

              var subs = this.$element.find('li.is-dropdown-submenu-parent');
              this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
              this.$menuItems = this.$element.find('[role="menuitem"]');
              this.$tabs = this.$element.children('[role="menuitem"]');
              this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

              if (this.options.alignment === 'auto') {
                if (this.$element.hasClass(this.options.rightClass) || Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["rtl"])() || this.$element.parents('.top-bar-right').is('*')) {
                  this.options.alignment = 'right';
                  subs.addClass('opens-left');
                } else {
                  this.options.alignment = 'left';
                  subs.addClass('opens-right');
                }
              } else {
                if (this.options.alignment === 'right') {
                  subs.addClass('opens-left');
                } else {
                  subs.addClass('opens-right');
                }
              }

              this.changed = false;

              this._events();
            }
          }, {
            key: "_isVertical",
            value: function _isVertical() {
              return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';
            }
          }, {
            key: "_isRtl",
            value: function _isRtl() {
              return this.$element.hasClass('align-right') || Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["rtl"])() && !this.$element.hasClass('align-left');
            }
            /**
             * Adds event listeners to elements within the menu
             * @private
             * @function
             */

          }, {
            key: "_events",
            value: function _events() {
              var _this = this,
                  hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
                  parClass = 'is-dropdown-submenu-parent'; // used for onClick and in the keyboard handlers


              var handleClickFn = function handleClickFn(e) {
                var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', ".".concat(parClass)),
                    hasSub = $elem.hasClass(parClass),
                    hasClicked = $elem.attr('data-is-click') === 'true',
                    $sub = $elem.children('.is-dropdown-submenu');

                if (hasSub) {
                  if (hasClicked) {
                    if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
                      return;
                    } else {
                      e.stopImmediatePropagation();
                      e.preventDefault();

                      _this._hide($elem);
                    }
                  } else {
                    e.preventDefault();
                    e.stopImmediatePropagation();

                    _this._show($sub);

                    $elem.add($elem.parentsUntil(_this.$element, ".".concat(parClass))).attr('data-is-click', true);
                  }
                }
              };

              if (this.options.clickOpen || hasTouch) {
                this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);
              } // Handle Leaf element Clicks


              if (_this.options.closeOnClickInside) {
                this.$menuItems.on('click.zf.dropdownmenu', function (e) {
                  var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                      hasSub = $elem.hasClass(parClass);

                  if (!hasSub) {
                    _this._hide();
                  }
                });
              }

              if (!this.options.disableHover) {
                this.$menuItems.on('mouseenter.zf.dropdownmenu', function (e) {
                  var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                      hasSub = $elem.hasClass(parClass);

                  if (hasSub) {
                    clearTimeout($elem.data('_delay'));
                    $elem.data('_delay', setTimeout(function () {
                      _this._show($elem.children('.is-dropdown-submenu'));
                    }, _this.options.hoverDelay));
                  }
                }).on('mouseleave.zf.dropdownMenu', Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["ignoreMousedisappear"])(function (e) {
                  var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                      hasSub = $elem.hasClass(parClass);

                  if (hasSub && _this.options.autoclose) {
                    if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
                      return false;
                    }

                    clearTimeout($elem.data('_delay'));
                    $elem.data('_delay', setTimeout(function () {
                      _this._hide($elem);
                    }, _this.options.closingTime));
                  }
                }));
              }

              this.$menuItems.on('keydown.zf.dropdownmenu', function (e) {
                var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', '[role="menuitem"]'),
                    isTab = _this.$tabs.index($element) > -1,
                    $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
                    $prevElement,
                    $nextElement;
                $elements.each(function (i) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
                    $prevElement = $elements.eq(i - 1);
                    $nextElement = $elements.eq(i + 1);
                    return;
                  }
                });

                var nextSibling = function nextSibling() {
                  $nextElement.children('a:first').focus();
                  e.preventDefault();
                },
                    prevSibling = function prevSibling() {
                  $prevElement.children('a:first').focus();
                  e.preventDefault();
                },
                    openSub = function openSub() {
                  var $sub = $element.children('ul.is-dropdown-submenu');

                  if ($sub.length) {
                    _this._show($sub);

                    $element.find('li > a:first').focus();
                    e.preventDefault();
                  } else {
                    return;
                  }
                },
                    closeSub = function closeSub() {
                  //if ($element.is(':first-child')) {
                  var close = $element.parent('ul').parent('li');
                  close.children('a:first').focus();

                  _this._hide(close);

                  e.preventDefault(); //}
                };

                var functions = {
                  open: openSub,
                  close: function close() {
                    _this._hide(_this.$element);

                    _this.$menuItems.eq(0).children('a').focus(); // focus to first element


                    e.preventDefault();
                  },
                  handled: function handled() {
                    e.stopImmediatePropagation();
                  }
                };

                if (isTab) {
                  if (_this._isVertical()) {
                    // vertical menu
                    if (_this._isRtl()) {
                      // right aligned
                      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                        down: nextSibling,
                        up: prevSibling,
                        next: closeSub,
                        previous: openSub
                      });
                    } else {
                      // left aligned
                      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                        down: nextSibling,
                        up: prevSibling,
                        next: openSub,
                        previous: closeSub
                      });
                    }
                  } else {
                    // horizontal menu
                    if (_this._isRtl()) {
                      // right aligned
                      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                        next: prevSibling,
                        previous: nextSibling,
                        down: openSub,
                        up: closeSub
                      });
                    } else {
                      // left aligned
                      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                        next: nextSibling,
                        previous: prevSibling,
                        down: openSub,
                        up: closeSub
                      });
                    }
                  }
                } else {
                  // not tabs -> one sub
                  if (_this._isRtl()) {
                    // right aligned
                    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                      next: closeSub,
                      previous: openSub,
                      down: nextSibling,
                      up: prevSibling
                    });
                  } else {
                    // left aligned
                    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(functions, {
                      next: openSub,
                      previous: closeSub,
                      down: nextSibling,
                      up: prevSibling
                    });
                  }
                }

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_2__["Keyboard"].handleKey(e, 'DropdownMenu', functions);
              });
            }
            /**
             * Adds an event handler to the body to close any dropdowns on a click.
             * @function
             * @private
             */

          }, {
            key: "_addBodyHandler",
            value: function _addBodyHandler() {
              var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body),
                  _this = this;

              $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function (e) {
                var $link = _this.$element.find(e.target);

                if ($link.length) {
                  return;
                }

                _this._hide();

                $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
              });
            }
            /**
             * Opens a dropdown pane, and checks for collisions first.
             * @param {jQuery} $sub - ul element that is a submenu to show
             * @function
             * @private
             * @fires Dropdownmenu#show
             */

          }, {
            key: "_show",
            value: function _show($sub) {
              var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
                return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length > 0;
              }));
              var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');

              this._hide($sibs, idx);

              $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');

              var clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__["Box"].ImNotTouchingYou($sub, null, true);

              if (!clear) {
                var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
                    $parentLi = $sub.parent('.is-dropdown-submenu-parent');
                $parentLi.removeClass("opens".concat(oldClass)).addClass("opens-".concat(this.options.alignment));
                clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__["Box"].ImNotTouchingYou($sub, null, true);

                if (!clear) {
                  $parentLi.removeClass("opens-".concat(this.options.alignment)).addClass('opens-inner');
                }

                this.changed = true;
              }

              $sub.css('visibility', '');

              if (this.options.closeOnClick) {
                this._addBodyHandler();
              }
              /**
               * Fires when the new dropdown pane is visible.
               * @event Dropdownmenu#show
               */


              this.$element.trigger('show.zf.dropdownmenu', [$sub]);
            }
            /**
             * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
             * @function
             * @param {jQuery} $elem - element with a submenu to hide
             * @param {Number} idx - index of the $tabs collection to hide
             * @private
             */

          }, {
            key: "_hide",
            value: function _hide($elem, idx) {
              var $toClose;

              if ($elem && $elem.length) {
                $toClose = $elem;
              } else if (typeof idx !== 'undefined') {
                $toClose = this.$tabs.not(function (i, el) {
                  return i === idx;
                });
              } else {
                $toClose = this.$element;
              }

              var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

              if (somethingToClose) {
                $toClose.find('li.is-active').add($toClose).attr({
                  'data-is-click': false
                }).removeClass('is-active');
                $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

                if (this.changed || $toClose.find('opens-inner').length) {
                  var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
                  $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));
                  this.changed = false;
                }
                /**
                 * Fires when the open menus are closed.
                 * @event Dropdownmenu#hide
                 */


                this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
              }
            }
            /**
             * Destroys the plugin.
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownmenu');

              _foundation_util_nest__WEBPACK_IMPORTED_MODULE_3__["Nest"].Burn(this.$element, 'dropdown');
            }
          }]);

          return DropdownMenu;
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
        /**
         * Default settings for plugin
         */


        DropdownMenu.defaults = {
          /**
           * Disallows hover events from opening submenus
           * @option
           * @type {boolean}
           * @default false
           */
          disableHover: false,

          /**
           * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
           * @option
           * @type {boolean}
           * @default true
           */
          autoclose: true,

          /**
           * Amount of time to delay opening a submenu on hover event.
           * @option
           * @type {number}
           * @default 50
           */
          hoverDelay: 50,

          /**
           * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
           * @option
           * @type {boolean}
           * @default false
           */
          clickOpen: false,

          /**
           * Amount of time to delay closing a submenu on a mouseleave event.
           * @option
           * @type {number}
           * @default 500
           */
          closingTime: 500,

          /**
           * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
           * @option
           * @type {string}
           * @default 'auto'
           */
          alignment: 'auto',

          /**
           * Allow clicks on the body to close any open submenus.
           * @option
           * @type {boolean}
           * @default true
           */
          closeOnClick: true,

          /**
           * Allow clicks on leaf anchor links to close any open submenus.
           * @option
           * @type {boolean}
           * @default true
           */
          closeOnClickInside: true,

          /**
           * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
           * @option
           * @type {string}
           * @default 'vertical'
           */
          verticalClass: 'vertical',

          /**
           * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
           * @option
           * @type {string}
           * @default 'align-right'
           */
          rightClass: 'align-right',

          /**
           * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
           * @option
           * @type {boolean}
           * @default true
           */
          forceFollow: true
        };
        /***/
      },

      /***/
      5:
      /*!*************************************************************!*\
        !*** multi ./js/entries/plugins/foundation.dropdownMenu.js ***!
        \*************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.dropdownMenu.js */
        "./js/entries/plugins/foundation.dropdownMenu.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uZHJvcGRvd25NZW51LmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmRyb3Bkb3duTWVudS5qcyIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wialF1ZXJ5XCJdLFwiYW1kXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbIkZvdW5kYXRpb24iLCJEcm9wZG93bk1lbnUiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJLZXlib2FyZCIsIk5lc3QiLCJzdWJzIiwiUnRsIiwiX3RoaXMiLCJoYXNUb3VjaCIsIndpbmRvdyIsInBhckNsYXNzIiwiaGFuZGxlQ2xpY2tGbiIsIiRlbGVtIiwiZSIsImhhc1N1YiIsImhhc0NsaWNrZWQiLCIkc3ViIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImlnbm9yZU1vdXNlZGlzYXBwZWFyIiwiJGVsZW1lbnQiLCJpc1RhYiIsIiRlbGVtZW50cyIsIiRwcmV2RWxlbWVudCIsImkiLCIkbmV4dEVsZW1lbnQiLCJuZXh0U2libGluZyIsInByZXZTaWJsaW5nIiwib3BlblN1YiIsImNsb3NlU3ViIiwiY2xvc2UiLCJmdW5jdGlvbnMiLCJvcGVuIiwiaGFuZGxlZCIsImRvd24iLCJ1cCIsIm5leHQiLCJwcmV2aW91cyIsIiRib2R5IiwiZG9jdW1lbnQiLCIkbGluayIsImlkeCIsIiRzaWJzIiwiY2xlYXIiLCJCb3giLCJvbGRDbGFzcyIsIiRwYXJlbnRMaSIsIiR0b0Nsb3NlIiwic29tZXRoaW5nVG9DbG9zZSIsIlBsdWdpbiIsImRpc2FibGVIb3ZlciIsImF1dG9jbG9zZSIsImhvdmVyRGVsYXkiLCJjbGlja09wZW4iLCJjbG9zaW5nVGltZSIsImFsaWdubWVudCIsImNsb3NlT25DbGljayIsImNsb3NlT25DbGlja0luc2lkZSIsInZlcnRpY2FsQ2xhc3MiLCJyaWdodENsYXNzIiwiZm9yY2VGb2xsb3ciXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsdUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSx1QkFBQSxFQUFBLDRCQUFBLEVBQUEsd0JBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx3QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHlCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsc0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxnREFBQSxFQUFBLHFEQUFBLEVBQUEsaURBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxF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Ozs7Ozs7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUE7QUFBQTs7O0FBQUEsWUFBQSw2Q0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSwyQkFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEscURBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsNkNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSx5Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxjQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLHFEQUFBLENBQUEsY0FBQSxDQUFBO0FBQUEsU0FBQTs7QUNHQUEsUUFBQUEsNkNBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE1BQUFBLENBQWtCQyxxREFBQUEsQ0FBbEJELGNBQWtCQyxDQUFsQkQsRUFBQUEsY0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsY0FBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxZQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsb0RBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDREQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFB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dEI7Ozs7OztBQU1BbUQsVUFBQUEsWUFBWSxFQVBVLEtBQUE7O0FBUXRCOzs7Ozs7QUFNQUMsVUFBQUEsU0FBUyxFQWRhLElBQUE7O0FBZXRCOzs7Ozs7QUFNQUMsVUFBQUEsVUFBVSxFQXJCWSxFQUFBOztBQXNCdEI7Ozs7OztBQU1BQyxVQUFBQSxTQUFTLEVBNUJhLEtBQUE7O0FBNkJ0Qjs7Ozs7O0FBT0FDLFVBQUFBLFdBQVcsRUFwQ1csR0FBQTs7QUFxQ3RCOzs7Ozs7QUFNQUMsVUFBQUEsU0FBUyxFQTNDYSxNQUFBOztBQTRDdEI7Ozs7OztBQU1BQyxVQUFBQSxZQUFZLEVBbERVLElBQUE7O0FBbUR0Qjs7Ozs7O0FBTUFDLFVBQUFBLGtCQUFrQixFQXpESSxJQUFBOztBQTBEdEI7Ozs7OztBQU1BQyxVQUFBQSxhQUFhLEVBaEVTLFVBQUE7O0FBaUV0Qjs7Ozs7O0FBTUFDLFVBQUFBLFVBQVUsRUF2RVksYUFBQTs7QUF3RXRCOzs7Ozs7QUFNQUMsVUFBQUEsV0FBVyxFQUFFO0FBOUVTLFNBQXhCN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RYQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTFVBO0NBVkEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3VuZGF0aW9uLWRyb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiLi9mb3VuZGF0aW9uLmNvcmVcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5kcm9wZG93bk1lbnVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmJveFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubmVzdFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uZHJvcGRvd25NZW51XCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5ib3hcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm5lc3RcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2JveF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX25lc3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5kcm9wZG93bk1lbnUnO1xuRm91bmRhdGlvbi5wbHVnaW4oRHJvcGRvd25NZW51LCAnRHJvcGRvd25NZW51Jyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIERyb3Bkb3duTWVudX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuaW1wb3J0IHsgcnRsIGFzIFJ0bCwgaWdub3JlTW91c2VkaXNhcHBlYXIgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkJztcbmltcG9ydCB7IE5lc3QgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5uZXN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmJveCc7XG5cbi8qKlxuICogRHJvcGRvd25NZW51IG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5kcm9wZG93bi1tZW51XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLmJveFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5uZXN0XG4gKi9cblxuY2xhc3MgRHJvcGRvd25NZW51IGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgRHJvcGRvd25NZW51LlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgRHJvcGRvd25NZW51XG4gICAqIEBmaXJlcyBEcm9wZG93bk1lbnUjaW5pdFxuICAgKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gbWFrZSBpbnRvIGEgZHJvcGRvd24gbWVudS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRHJvcGRvd25NZW51LmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnRHJvcGRvd25NZW51JzsgLy8gaWU5IGJhY2sgY29tcGF0XG5cbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignRHJvcGRvd25NZW51Jywge1xuICAgICAgJ0VOVEVSJzogJ29wZW4nLFxuICAgICAgJ1NQQUNFJzogJ29wZW4nLFxuICAgICAgJ0FSUk9XX1JJR0hUJzogJ25leHQnLFxuICAgICAgJ0FSUk9XX1VQJzogJ3VwJyxcbiAgICAgICdBUlJPV19ET1dOJzogJ2Rvd24nLFxuICAgICAgJ0FSUk9XX0xFRlQnOiAncHJldmlvdXMnLFxuICAgICAgJ0VTQ0FQRSc6ICdjbG9zZSdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcGx1Z2luLCBhbmQgY2FsbHMgX3ByZXBhcmVNZW51XG4gICAqIEBwcml2YXRlXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgTmVzdC5GZWF0aGVyKHRoaXMuJGVsZW1lbnQsICdkcm9wZG93bicpO1xuXG4gICAgdmFyIHN1YnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2xpLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50Jyk7XG4gICAgdGhpcy4kZWxlbWVudC5jaGlsZHJlbignLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50JykuY2hpbGRyZW4oJy5pcy1kcm9wZG93bi1zdWJtZW51JykuYWRkQ2xhc3MoJ2ZpcnN0LXN1YicpO1xuXG4gICAgdGhpcy4kbWVudUl0ZW1zID0gdGhpcy4kZWxlbWVudC5maW5kKCdbcm9sZT1cIm1lbnVpdGVtXCJdJyk7XG4gICAgdGhpcy4kdGFicyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oJ1tyb2xlPVwibWVudWl0ZW1cIl0nKTtcbiAgICB0aGlzLiR0YWJzLmZpbmQoJ3VsLmlzLWRyb3Bkb3duLXN1Ym1lbnUnKS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMudmVydGljYWxDbGFzcyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFsaWdubWVudCA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5yaWdodENsYXNzKSB8fCBSdGwoKSB8fCB0aGlzLiRlbGVtZW50LnBhcmVudHMoJy50b3AtYmFyLXJpZ2h0JykuaXMoJyonKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFsaWdubWVudCA9ICdyaWdodCc7XG4gICAgICAgICAgICBzdWJzLmFkZENsYXNzKCdvcGVucy1sZWZ0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWxpZ25tZW50ID0gJ2xlZnQnO1xuICAgICAgICAgICAgc3Vicy5hZGRDbGFzcygnb3BlbnMtcmlnaHQnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIHN1YnMuYWRkQ2xhc3MoJ29wZW5zLWxlZnQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Vicy5hZGRDbGFzcygnb3BlbnMtcmlnaHQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZXZlbnRzKCk7XG4gIH07XG5cbiAgX2lzVmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRhYnMuY3NzKCdkaXNwbGF5JykgPT09ICdibG9jaycgfHwgdGhpcy4kZWxlbWVudC5jc3MoJ2ZsZXgtZGlyZWN0aW9uJykgPT09ICdjb2x1bW4nO1xuICB9XG5cbiAgX2lzUnRsKCkge1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdhbGlnbi1yaWdodCcpIHx8IChSdGwoKSAmJiAhdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnYWxpZ24tbGVmdCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byBlbGVtZW50cyB3aXRoaW4gdGhlIG1lbnVcbiAgICogQHByaXZhdGVcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIGhhc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8ICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCAhPT0gJ3VuZGVmaW5lZCcpLFxuICAgICAgICBwYXJDbGFzcyA9ICdpcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCc7XG5cbiAgICAvLyB1c2VkIGZvciBvbkNsaWNrIGFuZCBpbiB0aGUga2V5Ym9hcmQgaGFuZGxlcnNcbiAgICB2YXIgaGFuZGxlQ2xpY2tGbiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciAkZWxlbSA9ICQoZS50YXJnZXQpLnBhcmVudHNVbnRpbCgndWwnLCBgLiR7cGFyQ2xhc3N9YCksXG4gICAgICAgICAgaGFzU3ViID0gJGVsZW0uaGFzQ2xhc3MocGFyQ2xhc3MpLFxuICAgICAgICAgIGhhc0NsaWNrZWQgPSAkZWxlbS5hdHRyKCdkYXRhLWlzLWNsaWNrJykgPT09ICd0cnVlJyxcbiAgICAgICAgICAkc3ViID0gJGVsZW0uY2hpbGRyZW4oJy5pcy1kcm9wZG93bi1zdWJtZW51Jyk7XG5cbiAgICAgIGlmIChoYXNTdWIpIHtcbiAgICAgICAgaWYgKGhhc0NsaWNrZWQpIHtcbiAgICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrIHx8ICghX3RoaXMub3B0aW9ucy5jbGlja09wZW4gJiYgIWhhc1RvdWNoKSB8fCAoX3RoaXMub3B0aW9ucy5mb3JjZUZvbGxvdyAmJiBoYXNUb3VjaCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgX3RoaXMuX2hpZGUoJGVsZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBfdGhpcy5fc2hvdygkc3ViKTtcbiAgICAgICAgICAkZWxlbS5hZGQoJGVsZW0ucGFyZW50c1VudGlsKF90aGlzLiRlbGVtZW50LCBgLiR7cGFyQ2xhc3N9YCkpLmF0dHIoJ2RhdGEtaXMtY2xpY2snLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsaWNrT3BlbiB8fCBoYXNUb3VjaCkge1xuICAgICAgdGhpcy4kbWVudUl0ZW1zLm9uKCdjbGljay56Zi5kcm9wZG93bm1lbnUgdG91Y2hzdGFydC56Zi5kcm9wZG93bm1lbnUnLCBoYW5kbGVDbGlja0ZuKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgTGVhZiBlbGVtZW50IENsaWNrc1xuICAgIGlmKF90aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrSW5zaWRlKXtcbiAgICAgIHRoaXMuJG1lbnVJdGVtcy5vbignY2xpY2suemYuZHJvcGRvd25tZW51JywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgJGVsZW0gPSAkKHRoaXMpLFxuICAgICAgICAgICAgaGFzU3ViID0gJGVsZW0uaGFzQ2xhc3MocGFyQ2xhc3MpO1xuICAgICAgICBpZighaGFzU3ViKXtcbiAgICAgICAgICBfdGhpcy5faGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlSG92ZXIpIHtcbiAgICAgIHRoaXMuJG1lbnVJdGVtcy5vbignbW91c2VlbnRlci56Zi5kcm9wZG93bm1lbnUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgJGVsZW0gPSAkKHRoaXMpLFxuICAgICAgICAgIGhhc1N1YiA9ICRlbGVtLmhhc0NsYXNzKHBhckNsYXNzKTtcblxuICAgICAgICBpZiAoaGFzU3ViKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KCRlbGVtLmRhdGEoJ19kZWxheScpKTtcbiAgICAgICAgICAkZWxlbS5kYXRhKCdfZGVsYXknLCBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9zaG93KCRlbGVtLmNoaWxkcmVuKCcuaXMtZHJvcGRvd24tc3VibWVudScpKTtcbiAgICAgICAgICB9LCBfdGhpcy5vcHRpb25zLmhvdmVyRGVsYXkpKTtcbiAgICAgICAgfVxuICAgICAgfSkub24oJ21vdXNlbGVhdmUuemYuZHJvcGRvd25NZW51JywgaWdub3JlTW91c2VkaXNhcHBlYXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKSxcbiAgICAgICAgICAgIGhhc1N1YiA9ICRlbGVtLmhhc0NsYXNzKHBhckNsYXNzKTtcbiAgICAgICAgaWYgKGhhc1N1YiAmJiBfdGhpcy5vcHRpb25zLmF1dG9jbG9zZSkge1xuICAgICAgICAgIGlmICgkZWxlbS5hdHRyKCdkYXRhLWlzLWNsaWNrJykgPT09ICd0cnVlJyAmJiBfdGhpcy5vcHRpb25zLmNsaWNrT3BlbikgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgICAgIGNsZWFyVGltZW91dCgkZWxlbS5kYXRhKCdfZGVsYXknKSk7XG4gICAgICAgICAgJGVsZW0uZGF0YSgnX2RlbGF5Jywgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5faGlkZSgkZWxlbSk7XG4gICAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5jbG9zaW5nVGltZSkpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHRoaXMuJG1lbnVJdGVtcy5vbigna2V5ZG93bi56Zi5kcm9wZG93bm1lbnUnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzVW50aWwoJ3VsJywgJ1tyb2xlPVwibWVudWl0ZW1cIl0nKSxcbiAgICAgICAgICBpc1RhYiA9IF90aGlzLiR0YWJzLmluZGV4KCRlbGVtZW50KSA+IC0xLFxuICAgICAgICAgICRlbGVtZW50cyA9IGlzVGFiID8gX3RoaXMuJHRhYnMgOiAkZWxlbWVudC5zaWJsaW5ncygnbGknKS5hZGQoJGVsZW1lbnQpLFxuICAgICAgICAgICRwcmV2RWxlbWVudCxcbiAgICAgICAgICAkbmV4dEVsZW1lbnQ7XG5cbiAgICAgICRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgJHByZXZFbGVtZW50ID0gJGVsZW1lbnRzLmVxKGktMSk7XG4gICAgICAgICAgJG5leHRFbGVtZW50ID0gJGVsZW1lbnRzLmVxKGkrMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmFyIG5leHRTaWJsaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRuZXh0RWxlbWVudC5jaGlsZHJlbignYTpmaXJzdCcpLmZvY3VzKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sIHByZXZTaWJsaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRwcmV2RWxlbWVudC5jaGlsZHJlbignYTpmaXJzdCcpLmZvY3VzKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sIG9wZW5TdWIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICRzdWIgPSAkZWxlbWVudC5jaGlsZHJlbigndWwuaXMtZHJvcGRvd24tc3VibWVudScpO1xuICAgICAgICBpZiAoJHN1Yi5sZW5ndGgpIHtcbiAgICAgICAgICBfdGhpcy5fc2hvdygkc3ViKTtcbiAgICAgICAgICAkZWxlbWVudC5maW5kKCdsaSA+IGE6Zmlyc3QnKS5mb2N1cygpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuOyB9XG4gICAgICB9LCBjbG9zZVN1YiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2lmICgkZWxlbWVudC5pcygnOmZpcnN0LWNoaWxkJykpIHtcbiAgICAgICAgdmFyIGNsb3NlID0gJGVsZW1lbnQucGFyZW50KCd1bCcpLnBhcmVudCgnbGknKTtcbiAgICAgICAgY2xvc2UuY2hpbGRyZW4oJ2E6Zmlyc3QnKS5mb2N1cygpO1xuICAgICAgICBfdGhpcy5faGlkZShjbG9zZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy99XG4gICAgICB9O1xuICAgICAgdmFyIGZ1bmN0aW9ucyA9IHtcbiAgICAgICAgb3Blbjogb3BlblN1YixcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIF90aGlzLl9oaWRlKF90aGlzLiRlbGVtZW50KTtcbiAgICAgICAgICBfdGhpcy4kbWVudUl0ZW1zLmVxKDApLmNoaWxkcmVuKCdhJykuZm9jdXMoKTsgLy8gZm9jdXMgdG8gZmlyc3QgZWxlbWVudFxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGlzVGFiKSB7XG4gICAgICAgIGlmIChfdGhpcy5faXNWZXJ0aWNhbCgpKSB7IC8vIHZlcnRpY2FsIG1lbnVcbiAgICAgICAgICBpZiAoX3RoaXMuX2lzUnRsKCkpIHsgLy8gcmlnaHQgYWxpZ25lZFxuICAgICAgICAgICAgJC5leHRlbmQoZnVuY3Rpb25zLCB7XG4gICAgICAgICAgICAgIGRvd246IG5leHRTaWJsaW5nLFxuICAgICAgICAgICAgICB1cDogcHJldlNpYmxpbmcsXG4gICAgICAgICAgICAgIG5leHQ6IGNsb3NlU3ViLFxuICAgICAgICAgICAgICBwcmV2aW91czogb3BlblN1YlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gbGVmdCBhbGlnbmVkXG4gICAgICAgICAgICAkLmV4dGVuZChmdW5jdGlvbnMsIHtcbiAgICAgICAgICAgICAgZG93bjogbmV4dFNpYmxpbmcsXG4gICAgICAgICAgICAgIHVwOiBwcmV2U2libGluZyxcbiAgICAgICAgICAgICAgbmV4dDogb3BlblN1YixcbiAgICAgICAgICAgICAgcHJldmlvdXM6IGNsb3NlU3ViXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIGhvcml6b250YWwgbWVudVxuICAgICAgICAgIGlmIChfdGhpcy5faXNSdGwoKSkgeyAvLyByaWdodCBhbGlnbmVkXG4gICAgICAgICAgICAkLmV4dGVuZChmdW5jdGlvbnMsIHtcbiAgICAgICAgICAgICAgbmV4dDogcHJldlNpYmxpbmcsXG4gICAgICAgICAgICAgIHByZXZpb3VzOiBuZXh0U2libGluZyxcbiAgICAgICAgICAgICAgZG93bjogb3BlblN1YixcbiAgICAgICAgICAgICAgdXA6IGNsb3NlU3ViXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgeyAvLyBsZWZ0IGFsaWduZWRcbiAgICAgICAgICAgICQuZXh0ZW5kKGZ1bmN0aW9ucywge1xuICAgICAgICAgICAgICBuZXh0OiBuZXh0U2libGluZyxcbiAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZTaWJsaW5nLFxuICAgICAgICAgICAgICBkb3duOiBvcGVuU3ViLFxuICAgICAgICAgICAgICB1cDogY2xvc2VTdWJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gbm90IHRhYnMgLT4gb25lIHN1YlxuICAgICAgICBpZiAoX3RoaXMuX2lzUnRsKCkpIHsgLy8gcmlnaHQgYWxpZ25lZFxuICAgICAgICAgICQuZXh0ZW5kKGZ1bmN0aW9ucywge1xuICAgICAgICAgICAgbmV4dDogY2xvc2VTdWIsXG4gICAgICAgICAgICBwcmV2aW91czogb3BlblN1YixcbiAgICAgICAgICAgIGRvd246IG5leHRTaWJsaW5nLFxuICAgICAgICAgICAgdXA6IHByZXZTaWJsaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIGxlZnQgYWxpZ25lZFxuICAgICAgICAgICQuZXh0ZW5kKGZ1bmN0aW9ucywge1xuICAgICAgICAgICAgbmV4dDogb3BlblN1YixcbiAgICAgICAgICAgIHByZXZpb3VzOiBjbG9zZVN1YixcbiAgICAgICAgICAgIGRvd246IG5leHRTaWJsaW5nLFxuICAgICAgICAgICAgdXA6IHByZXZTaWJsaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEtleWJvYXJkLmhhbmRsZUtleShlLCAnRHJvcGRvd25NZW51JywgZnVuY3Rpb25zKTtcblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlciB0byB0aGUgYm9keSB0byBjbG9zZSBhbnkgZHJvcGRvd25zIG9uIGEgY2xpY2suXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FkZEJvZHlIYW5kbGVyKCkge1xuICAgIHZhciAkYm9keSA9ICQoZG9jdW1lbnQuYm9keSksXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAkYm9keS5vZmYoJ21vdXNldXAuemYuZHJvcGRvd25tZW51IHRvdWNoZW5kLnpmLmRyb3Bkb3dubWVudScpXG4gICAgICAgICAub24oJ21vdXNldXAuemYuZHJvcGRvd25tZW51IHRvdWNoZW5kLnpmLmRyb3Bkb3dubWVudScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgdmFyICRsaW5rID0gX3RoaXMuJGVsZW1lbnQuZmluZChlLnRhcmdldCk7XG4gICAgICAgICAgIGlmICgkbGluay5sZW5ndGgpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgX3RoaXMuX2hpZGUoKTtcbiAgICAgICAgICAgJGJvZHkub2ZmKCdtb3VzZXVwLnpmLmRyb3Bkb3dubWVudSB0b3VjaGVuZC56Zi5kcm9wZG93bm1lbnUnKTtcbiAgICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgZHJvcGRvd24gcGFuZSwgYW5kIGNoZWNrcyBmb3IgY29sbGlzaW9ucyBmaXJzdC5cbiAgICogQHBhcmFtIHtqUXVlcnl9ICRzdWIgLSB1bCBlbGVtZW50IHRoYXQgaXMgYSBzdWJtZW51IHRvIHNob3dcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBmaXJlcyBEcm9wZG93bm1lbnUjc2hvd1xuICAgKi9cbiAgX3Nob3coJHN1Yikge1xuICAgIHZhciBpZHggPSB0aGlzLiR0YWJzLmluZGV4KHRoaXMuJHRhYnMuZmlsdGVyKGZ1bmN0aW9uKGksIGVsKSB7XG4gICAgICByZXR1cm4gJChlbCkuZmluZCgkc3ViKS5sZW5ndGggPiAwO1xuICAgIH0pKTtcbiAgICB2YXIgJHNpYnMgPSAkc3ViLnBhcmVudCgnbGkuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQnKS5zaWJsaW5ncygnbGkuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQnKTtcbiAgICB0aGlzLl9oaWRlKCRzaWJzLCBpZHgpO1xuICAgICRzdWIuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpLmFkZENsYXNzKCdqcy1kcm9wZG93bi1hY3RpdmUnKVxuICAgICAgICAucGFyZW50KCdsaS5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCcpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB2YXIgY2xlYXIgPSBCb3guSW1Ob3RUb3VjaGluZ1lvdSgkc3ViLCBudWxsLCB0cnVlKTtcbiAgICBpZiAoIWNsZWFyKSB7XG4gICAgICB2YXIgb2xkQ2xhc3MgPSB0aGlzLm9wdGlvbnMuYWxpZ25tZW50ID09PSAnbGVmdCcgPyAnLXJpZ2h0JyA6ICctbGVmdCcsXG4gICAgICAgICAgJHBhcmVudExpID0gJHN1Yi5wYXJlbnQoJy5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCcpO1xuICAgICAgJHBhcmVudExpLnJlbW92ZUNsYXNzKGBvcGVucyR7b2xkQ2xhc3N9YCkuYWRkQ2xhc3MoYG9wZW5zLSR7dGhpcy5vcHRpb25zLmFsaWdubWVudH1gKTtcbiAgICAgIGNsZWFyID0gQm94LkltTm90VG91Y2hpbmdZb3UoJHN1YiwgbnVsbCwgdHJ1ZSk7XG4gICAgICBpZiAoIWNsZWFyKSB7XG4gICAgICAgICRwYXJlbnRMaS5yZW1vdmVDbGFzcyhgb3BlbnMtJHt0aGlzLm9wdGlvbnMuYWxpZ25tZW50fWApLmFkZENsYXNzKCdvcGVucy1pbm5lcicpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgJHN1Yi5jc3MoJ3Zpc2liaWxpdHknLCAnJyk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2spIHsgdGhpcy5fYWRkQm9keUhhbmRsZXIoKTsgfVxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIG5ldyBkcm9wZG93biBwYW5lIGlzIHZpc2libGUuXG4gICAgICogQGV2ZW50IERyb3Bkb3dubWVudSNzaG93XG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdzaG93LnpmLmRyb3Bkb3dubWVudScsIFskc3ViXSk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgYSBzaW5nbGUsIGN1cnJlbnRseSBvcGVuIGRyb3Bkb3duIHBhbmUsIGlmIHBhc3NlZCBhIHBhcmFtZXRlciwgb3RoZXJ3aXNlLCBoaWRlcyBldmVyeXRoaW5nLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtqUXVlcnl9ICRlbGVtIC0gZWxlbWVudCB3aXRoIGEgc3VibWVudSB0byBoaWRlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZHggLSBpbmRleCBvZiB0aGUgJHRhYnMgY29sbGVjdGlvbiB0byBoaWRlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGlkZSgkZWxlbSwgaWR4KSB7XG4gICAgdmFyICR0b0Nsb3NlO1xuICAgIGlmICgkZWxlbSAmJiAkZWxlbS5sZW5ndGgpIHtcbiAgICAgICR0b0Nsb3NlID0gJGVsZW07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaWR4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgJHRvQ2xvc2UgPSB0aGlzLiR0YWJzLm5vdChmdW5jdGlvbihpLCBlbCkge1xuICAgICAgICByZXR1cm4gaSA9PT0gaWR4O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJHRvQ2xvc2UgPSB0aGlzLiRlbGVtZW50O1xuICAgIH1cbiAgICB2YXIgc29tZXRoaW5nVG9DbG9zZSA9ICR0b0Nsb3NlLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSB8fCAkdG9DbG9zZS5maW5kKCcuaXMtYWN0aXZlJykubGVuZ3RoID4gMDtcblxuICAgIGlmIChzb21ldGhpbmdUb0Nsb3NlKSB7XG4gICAgICAkdG9DbG9zZS5maW5kKCdsaS5pcy1hY3RpdmUnKS5hZGQoJHRvQ2xvc2UpLmF0dHIoe1xuICAgICAgICAnZGF0YS1pcy1jbGljayc6IGZhbHNlXG4gICAgICB9KS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICR0b0Nsb3NlLmZpbmQoJ3VsLmpzLWRyb3Bkb3duLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdqcy1kcm9wZG93bi1hY3RpdmUnKTtcblxuICAgICAgaWYgKHRoaXMuY2hhbmdlZCB8fCAkdG9DbG9zZS5maW5kKCdvcGVucy1pbm5lcicpLmxlbmd0aCkge1xuICAgICAgICB2YXIgb2xkQ2xhc3MgPSB0aGlzLm9wdGlvbnMuYWxpZ25tZW50ID09PSAnbGVmdCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICAkdG9DbG9zZS5maW5kKCdsaS5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCcpLmFkZCgkdG9DbG9zZSlcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoYG9wZW5zLWlubmVyIG9wZW5zLSR7dGhpcy5vcHRpb25zLmFsaWdubWVudH1gKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhgb3BlbnMtJHtvbGRDbGFzc31gKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIHdoZW4gdGhlIG9wZW4gbWVudXMgYXJlIGNsb3NlZC5cbiAgICAgICAqIEBldmVudCBEcm9wZG93bm1lbnUjaGlkZVxuICAgICAgICovXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2hpZGUuemYuZHJvcGRvd25tZW51JywgWyR0b0Nsb3NlXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy4kbWVudUl0ZW1zLm9mZignLnpmLmRyb3Bkb3dubWVudScpLnJlbW92ZUF0dHIoJ2RhdGEtaXMtY2xpY2snKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXJpZ2h0LWFycm93IGlzLWxlZnQtYXJyb3cgaXMtZG93bi1hcnJvdyBvcGVucy1yaWdodCBvcGVucy1sZWZ0IG9wZW5zLWlubmVyJyk7XG4gICAgJChkb2N1bWVudC5ib2R5KS5vZmYoJy56Zi5kcm9wZG93bm1lbnUnKTtcbiAgICBOZXN0LkJ1cm4odGhpcy4kZWxlbWVudCwgJ2Ryb3Bkb3duJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZhdWx0IHNldHRpbmdzIGZvciBwbHVnaW5cbiAqL1xuRHJvcGRvd25NZW51LmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogRGlzYWxsb3dzIGhvdmVyIGV2ZW50cyBmcm9tIG9wZW5pbmcgc3VibWVudXNcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRpc2FibGVIb3ZlcjogZmFsc2UsXG4gIC8qKlxuICAgKiBBbGxvdyBhIHN1Ym1lbnUgdG8gYXV0b21hdGljYWxseSBjbG9zZSBvbiBhIG1vdXNlbGVhdmUgZXZlbnQsIGlmIG5vdCBjbGlja2VkIG9wZW4uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGF1dG9jbG9zZTogdHJ1ZSxcbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lIHRvIGRlbGF5IG9wZW5pbmcgYSBzdWJtZW51IG9uIGhvdmVyIGV2ZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDUwXG4gICAqL1xuICBob3ZlckRlbGF5OiA1MCxcbiAgLyoqXG4gICAqIEFsbG93IGEgc3VibWVudSB0byBvcGVuL3JlbWFpbiBvcGVuIG9uIHBhcmVudCBjbGljayBldmVudC4gQWxsb3dzIGN1cnNvciB0byBtb3ZlIGF3YXkgZnJvbSBtZW51LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgY2xpY2tPcGVuOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lIHRvIGRlbGF5IGNsb3NpbmcgYSBzdWJtZW51IG9uIGEgbW91c2VsZWF2ZSBldmVudC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCA1MDBcbiAgICovXG5cbiAgY2xvc2luZ1RpbWU6IDUwMCxcbiAgLyoqXG4gICAqIFBvc2l0aW9uIG9mIHRoZSBtZW51IHJlbGF0aXZlIHRvIHdoYXQgZGlyZWN0aW9uIHRoZSBzdWJtZW51cyBzaG91bGQgb3Blbi4gSGFuZGxlZCBieSBKUy4gQ2FuIGJlIGAnYXV0bydgLCBgJ2xlZnQnYCBvciBgJ3JpZ2h0J2AuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2F1dG8nXG4gICAqL1xuICBhbGlnbm1lbnQ6ICdhdXRvJyxcbiAgLyoqXG4gICAqIEFsbG93IGNsaWNrcyBvbiB0aGUgYm9keSB0byBjbG9zZSBhbnkgb3BlbiBzdWJtZW51cy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAvKipcbiAgICogQWxsb3cgY2xpY2tzIG9uIGxlYWYgYW5jaG9yIGxpbmtzIHRvIGNsb3NlIGFueSBvcGVuIHN1Ym1lbnVzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjbG9zZU9uQ2xpY2tJbnNpZGU6IHRydWUsXG4gIC8qKlxuICAgKiBDbGFzcyBhcHBsaWVkIHRvIHZlcnRpY2FsIG9yaWVudGVkIG1lbnVzLCBGb3VuZGF0aW9uIGRlZmF1bHQgaXMgYHZlcnRpY2FsYC4gVXBkYXRlIHRoaXMgaWYgdXNpbmcgeW91ciBvd24gY2xhc3MuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ3ZlcnRpY2FsJ1xuICAgKi9cbiAgdmVydGljYWxDbGFzczogJ3ZlcnRpY2FsJyxcbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gcmlnaHQtc2lkZSBvcmllbnRlZCBtZW51cywgRm91bmRhdGlvbiBkZWZhdWx0IGlzIGBhbGlnbi1yaWdodGAuIFVwZGF0ZSB0aGlzIGlmIHVzaW5nIHlvdXIgb3duIGNsYXNzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhbGlnbi1yaWdodCdcbiAgICovXG4gIHJpZ2h0Q2xhc3M6ICdhbGlnbi1yaWdodCcsXG4gIC8qKlxuICAgKiBCb29sZWFuIHRvIGZvcmNlIG92ZXJpZGUgdGhlIGNsaWNraW5nIG9mIGxpbmtzIHRvIHBlcmZvcm0gZGVmYXVsdCBhY3Rpb24sIG9uIHNlY29uZCB0b3VjaCBldmVudCBmb3IgbW9iaWxlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBmb3JjZUZvbGxvdzogdHJ1ZVxufTtcblxuZXhwb3J0IHtEcm9wZG93bk1lbnV9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
