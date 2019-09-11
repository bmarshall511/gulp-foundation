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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uZHJvcGRvd25NZW51LmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmRyb3Bkb3duTWVudS5qcyIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wialF1ZXJ5XCJdLFwiYW1kXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbIkZvdW5kYXRpb24iLCJEcm9wZG93bk1lbnUiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJLZXlib2FyZCIsIk5lc3QiLCJzdWJzIiwiUnRsIiwiX3RoaXMiLCJoYXNUb3VjaCIsIndpbmRvdyIsInBhckNsYXNzIiwiaGFuZGxlQ2xpY2tGbiIsIiRlbGVtIiwiZSIsImhhc1N1YiIsImhhc0NsaWNrZWQiLCIkc3ViIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImlnbm9yZU1vdXNlZGlzYXBwZWFyIiwiJGVsZW1lbnQiLCJpc1RhYiIsIiRlbGVtZW50cyIsIiRwcmV2RWxlbWVudCIsImkiLCIkbmV4dEVsZW1lbnQiLCJuZXh0U2libGluZyIsInByZXZTaWJsaW5nIiwib3BlblN1YiIsImNsb3NlU3ViIiwiY2xvc2UiLCJmdW5jdGlvbnMiLCJvcGVuIiwiaGFuZGxlZCIsImRvd24iLCJ1cCIsIm5leHQiLCJwcmV2aW91cyIsIiRib2R5IiwiZG9jdW1lbnQiLCIkbGluayIsImlkeCIsIiRzaWJzIiwiY2xlYXIiLCJCb3giLCJvbGRDbGFzcyIsIiRwYXJlbnRMaSIsIiR0b0Nsb3NlIiwic29tZXRoaW5nVG9DbG9zZSIsIlBsdWdpbiIsImRpc2FibGVIb3ZlciIsImF1dG9jbG9zZSIsImhvdmVyRGVsYXkiLCJjbGlja09wZW4iLCJjbG9zaW5nVGltZSIsImFsaWdubWVudCIsImNsb3NlT25DbGljayIsImNsb3NlT25DbGlja0luc2lkZSIsInZlcnRpY2FsQ2xhc3MiLCJyaWdodENsYXNzIiwiZm9yY2VGb2xsb3ciXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsdUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSx1QkFBQSxFQUFBLDRCQUFBLEVBQUEsd0JBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx3QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHlCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsc0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxnREFBQSxFQUFBLHFEQUFBLEVBQUEsaURBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUF5QyxVQUFBLFVBQUEsRUFBQSxJQUF6QztBQUF5QyxVQUFBLEtBQUEsRUFBQTtBQUF6QyxTQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQWdILGlCQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckksQ0FBQTtBQUNBOztBQUFBLGVBQUEsRUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxNQUFBLEdBQUEsTUFBQSxJQUFBLE1BQUEsQ0FBQSxVQUFBO0FBQ0E7QUFBQSxpQkFBQSxVQUFBLEdBQUE7QUFBMkIsaUJBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQTtBQUE0QixTQUR2RDtBQUVBO0FBQUEsaUJBQUEsZ0JBQUEsR0FBQTtBQUFpQyxpQkFBQSxNQUFBO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQTtBQUNBOzs7QUFBQSxlQUFBLE1BQUE7QUFDQTtBQUFBLE9BTkE7OztBQVFBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBO0FBQXNELGVBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLENBQUE7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOztBQUFBLGFBQUEsbUJBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSw0Q0FBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsZ0RBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLHFEQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxpREFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUE7QUFBQTs7O0FBQUEsWUFBQSw2Q0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSwyQkFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEscURBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsNkNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSx5Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxjQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLHFEQUFBLENBQUEsY0FBQSxDQUFBO0FBQUEsU0FBQTs7QUNHQUEsUUFBQUEsNkNBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE1BQUFBLENBQWtCQyxxREFBQUEsQ0FBbEJELGNBQWtCQyxDQUFsQkQsRUFBQUEsY0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsY0FBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxZQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsb0RBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDREQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFB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dEI7Ozs7OztBQU1BbUQsVUFBQUEsWUFBWSxFQVBVLEtBQUE7O0FBUXRCOzs7Ozs7QUFNQUMsVUFBQUEsU0FBUyxFQWRhLElBQUE7O0FBZXRCOzs7Ozs7QUFNQUMsVUFBQUEsVUFBVSxFQXJCWSxFQUFBOztBQXNCdEI7Ozs7OztBQU1BQyxVQUFBQSxTQUFTLEVBNUJhLEtBQUE7O0FBNkJ0Qjs7Ozs7O0FBT0FDLFVBQUFBLFdBQVcsRUFwQ1csR0FBQTs7QUFxQ3RCOzs7Ozs7QUFNQUMsVUFBQUEsU0FBUyxFQTNDYSxNQUFBOztBQTRDdEI7Ozs7OztBQU1BQyxVQUFBQSxZQUFZLEVBbERVLElBQUE7O0FBbUR0Qjs7Ozs7O0FBTUFDLFVBQUFBLGtCQUFrQixFQXpESSxJQUFBOztBQTBEdEI7Ozs7OztBQU1BQyxVQUFBQSxhQUFhLEVBaEVTLFVBQUE7O0FBaUV0Qjs7Ozs7O0FBTUFDLFVBQUFBLFVBQVUsRUF2RVksYUFBQTs7QUF3RXRCOzs7Ozs7QUFNQUMsVUFBQUEsV0FBVyxFQUFFO0FBOUVTLFNBQXhCN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RYQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTFVBO0NBVkEiLCJmaWxlIjoiZm91bmRhdGlvbi9mb3VuZGF0aW9uLmRyb3Bkb3duTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwuYm94XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5uZXN0XCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwuYm94XCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5uZXN0XCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24uZHJvcGRvd25NZW51XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmRyb3Bkb3duTWVudVwiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwuYm94XCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5uZXN0XCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9ib3hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2tleWJvYXJkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9uZXN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uZHJvcGRvd25NZW51JztcbkZvdW5kYXRpb24ucGx1Z2luKERyb3Bkb3duTWVudSwgJ0Ryb3Bkb3duTWVudScpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBEcm9wZG93bk1lbnV9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcbmltcG9ydCB7IHJ0bCBhcyBSdGwsIGlnbm9yZU1vdXNlZGlzYXBwZWFyIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZCc7XG5pbXBvcnQgeyBOZXN0IH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubmVzdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5ib3gnO1xuXG4vKipcbiAqIERyb3Bkb3duTWVudSBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24uZHJvcGRvd24tbWVudVxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5ib3hcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwubmVzdFxuICovXG5cbmNsYXNzIERyb3Bkb3duTWVudSBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIERyb3Bkb3duTWVudS5cbiAgICogQGNsYXNzXG4gICAqIEBuYW1lIERyb3Bkb3duTWVudVxuICAgKiBAZmlyZXMgRHJvcGRvd25NZW51I2luaXRcbiAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIG1ha2UgaW50byBhIGRyb3Bkb3duIG1lbnUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3ZlcnJpZGVzIHRvIHRoZSBkZWZhdWx0IHBsdWdpbiBzZXR0aW5ncy5cbiAgICovXG4gIF9zZXR1cChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIERyb3Bkb3duTWVudS5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ0Ryb3Bkb3duTWVudSc7IC8vIGllOSBiYWNrIGNvbXBhdFxuXG4gICAgdGhpcy5faW5pdCgpO1xuXG4gICAgS2V5Ym9hcmQucmVnaXN0ZXIoJ0Ryb3Bkb3duTWVudScsIHtcbiAgICAgICdFTlRFUic6ICdvcGVuJyxcbiAgICAgICdTUEFDRSc6ICdvcGVuJyxcbiAgICAgICdBUlJPV19SSUdIVCc6ICduZXh0JyxcbiAgICAgICdBUlJPV19VUCc6ICd1cCcsXG4gICAgICAnQVJST1dfRE9XTic6ICdkb3duJyxcbiAgICAgICdBUlJPV19MRUZUJzogJ3ByZXZpb3VzJyxcbiAgICAgICdFU0NBUEUnOiAnY2xvc2UnXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHBsdWdpbiwgYW5kIGNhbGxzIF9wcmVwYXJlTWVudVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIF9pbml0KCkge1xuICAgIE5lc3QuRmVhdGhlcih0aGlzLiRlbGVtZW50LCAnZHJvcGRvd24nKTtcblxuICAgIHZhciBzdWJzID0gdGhpcy4kZWxlbWVudC5maW5kKCdsaS5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCcpO1xuICAgIHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oJy5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCcpLmNoaWxkcmVuKCcuaXMtZHJvcGRvd24tc3VibWVudScpLmFkZENsYXNzKCdmaXJzdC1zdWInKTtcblxuICAgIHRoaXMuJG1lbnVJdGVtcyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnW3JvbGU9XCJtZW51aXRlbVwiXScpO1xuICAgIHRoaXMuJHRhYnMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCdbcm9sZT1cIm1lbnVpdGVtXCJdJyk7XG4gICAgdGhpcy4kdGFicy5maW5kKCd1bC5pcy1kcm9wZG93bi1zdWJtZW51JykuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnZlcnRpY2FsQ2xhc3MpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hbGlnbm1lbnQgPT09ICdhdXRvJykge1xuICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5oYXNDbGFzcyh0aGlzLm9wdGlvbnMucmlnaHRDbGFzcykgfHwgUnRsKCkgfHwgdGhpcy4kZWxlbWVudC5wYXJlbnRzKCcudG9wLWJhci1yaWdodCcpLmlzKCcqJykpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hbGlnbm1lbnQgPSAncmlnaHQnO1xuICAgICAgICAgICAgc3Vicy5hZGRDbGFzcygnb3BlbnMtbGVmdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFsaWdubWVudCA9ICdsZWZ0JztcbiAgICAgICAgICAgIHN1YnMuYWRkQ2xhc3MoJ29wZW5zLXJpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbGlnbm1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBzdWJzLmFkZENsYXNzKCdvcGVucy1sZWZ0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1YnMuYWRkQ2xhc3MoJ29wZW5zLXJpZ2h0Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2V2ZW50cygpO1xuICB9O1xuXG4gIF9pc1ZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLiR0YWJzLmNzcygnZGlzcGxheScpID09PSAnYmxvY2snIHx8IHRoaXMuJGVsZW1lbnQuY3NzKCdmbGV4LWRpcmVjdGlvbicpID09PSAnY29sdW1uJztcbiAgfVxuXG4gIF9pc1J0bCgpIHtcbiAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnYWxpZ24tcmlnaHQnKSB8fCAoUnRsKCkgJiYgIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoJ2FsaWduLWxlZnQnKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gZWxlbWVudHMgd2l0aGluIHRoZSBtZW51XG4gICAqIEBwcml2YXRlXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2V2ZW50cygpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBoYXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09ICd1bmRlZmluZWQnKSxcbiAgICAgICAgcGFyQ2xhc3MgPSAnaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQnO1xuXG4gICAgLy8gdXNlZCBmb3Igb25DbGljayBhbmQgaW4gdGhlIGtleWJvYXJkIGhhbmRsZXJzXG4gICAgdmFyIGhhbmRsZUNsaWNrRm4gPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJGVsZW0gPSAkKGUudGFyZ2V0KS5wYXJlbnRzVW50aWwoJ3VsJywgYC4ke3BhckNsYXNzfWApLFxuICAgICAgICAgIGhhc1N1YiA9ICRlbGVtLmhhc0NsYXNzKHBhckNsYXNzKSxcbiAgICAgICAgICBoYXNDbGlja2VkID0gJGVsZW0uYXR0cignZGF0YS1pcy1jbGljaycpID09PSAndHJ1ZScsXG4gICAgICAgICAgJHN1YiA9ICRlbGVtLmNoaWxkcmVuKCcuaXMtZHJvcGRvd24tc3VibWVudScpO1xuXG4gICAgICBpZiAoaGFzU3ViKSB7XG4gICAgICAgIGlmIChoYXNDbGlja2VkKSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLmNsb3NlT25DbGljayB8fCAoIV90aGlzLm9wdGlvbnMuY2xpY2tPcGVuICYmICFoYXNUb3VjaCkgfHwgKF90aGlzLm9wdGlvbnMuZm9yY2VGb2xsb3cgJiYgaGFzVG91Y2gpKSB7IHJldHVybjsgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIF90aGlzLl9oaWRlKCRlbGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgX3RoaXMuX3Nob3coJHN1Yik7XG4gICAgICAgICAgJGVsZW0uYWRkKCRlbGVtLnBhcmVudHNVbnRpbChfdGhpcy4kZWxlbWVudCwgYC4ke3BhckNsYXNzfWApKS5hdHRyKCdkYXRhLWlzLWNsaWNrJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbGlja09wZW4gfHwgaGFzVG91Y2gpIHtcbiAgICAgIHRoaXMuJG1lbnVJdGVtcy5vbignY2xpY2suemYuZHJvcGRvd25tZW51IHRvdWNoc3RhcnQuemYuZHJvcGRvd25tZW51JywgaGFuZGxlQ2xpY2tGbik7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIExlYWYgZWxlbWVudCBDbGlja3NcbiAgICBpZihfdGhpcy5vcHRpb25zLmNsb3NlT25DbGlja0luc2lkZSl7XG4gICAgICB0aGlzLiRtZW51SXRlbXMub24oJ2NsaWNrLnpmLmRyb3Bkb3dubWVudScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKSxcbiAgICAgICAgICAgIGhhc1N1YiA9ICRlbGVtLmhhc0NsYXNzKHBhckNsYXNzKTtcbiAgICAgICAgaWYoIWhhc1N1Yil7XG4gICAgICAgICAgX3RoaXMuX2hpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZUhvdmVyKSB7XG4gICAgICB0aGlzLiRtZW51SXRlbXMub24oJ21vdXNlZW50ZXIuemYuZHJvcGRvd25tZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKSxcbiAgICAgICAgICBoYXNTdWIgPSAkZWxlbS5oYXNDbGFzcyhwYXJDbGFzcyk7XG5cbiAgICAgICAgaWYgKGhhc1N1Yikge1xuICAgICAgICAgIGNsZWFyVGltZW91dCgkZWxlbS5kYXRhKCdfZGVsYXknKSk7XG4gICAgICAgICAgJGVsZW0uZGF0YSgnX2RlbGF5Jywgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fc2hvdygkZWxlbS5jaGlsZHJlbignLmlzLWRyb3Bkb3duLXN1Ym1lbnUnKSk7XG4gICAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5ob3ZlckRlbGF5KSk7XG4gICAgICAgIH1cbiAgICAgIH0pLm9uKCdtb3VzZWxlYXZlLnpmLmRyb3Bkb3duTWVudScsIGlnbm9yZU1vdXNlZGlzYXBwZWFyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciAkZWxlbSA9ICQodGhpcyksXG4gICAgICAgICAgICBoYXNTdWIgPSAkZWxlbS5oYXNDbGFzcyhwYXJDbGFzcyk7XG4gICAgICAgIGlmIChoYXNTdWIgJiYgX3RoaXMub3B0aW9ucy5hdXRvY2xvc2UpIHtcbiAgICAgICAgICBpZiAoJGVsZW0uYXR0cignZGF0YS1pcy1jbGljaycpID09PSAndHJ1ZScgJiYgX3RoaXMub3B0aW9ucy5jbGlja09wZW4pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQoJGVsZW0uZGF0YSgnX2RlbGF5JykpO1xuICAgICAgICAgICRlbGVtLmRhdGEoJ19kZWxheScsIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX2hpZGUoJGVsZW0pO1xuICAgICAgICAgIH0sIF90aGlzLm9wdGlvbnMuY2xvc2luZ1RpbWUpKTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgICB0aGlzLiRtZW51SXRlbXMub24oJ2tleWRvd24uemYuZHJvcGRvd25tZW51JywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyICRlbGVtZW50ID0gJChlLnRhcmdldCkucGFyZW50c1VudGlsKCd1bCcsICdbcm9sZT1cIm1lbnVpdGVtXCJdJyksXG4gICAgICAgICAgaXNUYWIgPSBfdGhpcy4kdGFicy5pbmRleCgkZWxlbWVudCkgPiAtMSxcbiAgICAgICAgICAkZWxlbWVudHMgPSBpc1RhYiA/IF90aGlzLiR0YWJzIDogJGVsZW1lbnQuc2libGluZ3MoJ2xpJykuYWRkKCRlbGVtZW50KSxcbiAgICAgICAgICAkcHJldkVsZW1lbnQsXG4gICAgICAgICAgJG5leHRFbGVtZW50O1xuXG4gICAgICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICRwcmV2RWxlbWVudCA9ICRlbGVtZW50cy5lcShpLTEpO1xuICAgICAgICAgICRuZXh0RWxlbWVudCA9ICRlbGVtZW50cy5lcShpKzEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBuZXh0U2libGluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkbmV4dEVsZW1lbnQuY2hpbGRyZW4oJ2E6Zmlyc3QnKS5mb2N1cygpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LCBwcmV2U2libGluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkcHJldkVsZW1lbnQuY2hpbGRyZW4oJ2E6Zmlyc3QnKS5mb2N1cygpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LCBvcGVuU3ViID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkc3ViID0gJGVsZW1lbnQuY2hpbGRyZW4oJ3VsLmlzLWRyb3Bkb3duLXN1Ym1lbnUnKTtcbiAgICAgICAgaWYgKCRzdWIubGVuZ3RoKSB7XG4gICAgICAgICAgX3RoaXMuX3Nob3coJHN1Yik7XG4gICAgICAgICAgJGVsZW1lbnQuZmluZCgnbGkgPiBhOmZpcnN0JykuZm9jdXMoKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSB7IHJldHVybjsgfVxuICAgICAgfSwgY2xvc2VTdWIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9pZiAoJGVsZW1lbnQuaXMoJzpmaXJzdC1jaGlsZCcpKSB7XG4gICAgICAgIHZhciBjbG9zZSA9ICRlbGVtZW50LnBhcmVudCgndWwnKS5wYXJlbnQoJ2xpJyk7XG4gICAgICAgIGNsb3NlLmNoaWxkcmVuKCdhOmZpcnN0JykuZm9jdXMoKTtcbiAgICAgICAgX3RoaXMuX2hpZGUoY2xvc2UpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vfVxuICAgICAgfTtcbiAgICAgIHZhciBmdW5jdGlvbnMgPSB7XG4gICAgICAgIG9wZW46IG9wZW5TdWIsXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy5faGlkZShfdGhpcy4kZWxlbWVudCk7XG4gICAgICAgICAgX3RoaXMuJG1lbnVJdGVtcy5lcSgwKS5jaGlsZHJlbignYScpLmZvY3VzKCk7IC8vIGZvY3VzIHRvIGZpcnN0IGVsZW1lbnRcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChpc1RhYikge1xuICAgICAgICBpZiAoX3RoaXMuX2lzVmVydGljYWwoKSkgeyAvLyB2ZXJ0aWNhbCBtZW51XG4gICAgICAgICAgaWYgKF90aGlzLl9pc1J0bCgpKSB7IC8vIHJpZ2h0IGFsaWduZWRcbiAgICAgICAgICAgICQuZXh0ZW5kKGZ1bmN0aW9ucywge1xuICAgICAgICAgICAgICBkb3duOiBuZXh0U2libGluZyxcbiAgICAgICAgICAgICAgdXA6IHByZXZTaWJsaW5nLFxuICAgICAgICAgICAgICBuZXh0OiBjbG9zZVN1YixcbiAgICAgICAgICAgICAgcHJldmlvdXM6IG9wZW5TdWJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7IC8vIGxlZnQgYWxpZ25lZFxuICAgICAgICAgICAgJC5leHRlbmQoZnVuY3Rpb25zLCB7XG4gICAgICAgICAgICAgIGRvd246IG5leHRTaWJsaW5nLFxuICAgICAgICAgICAgICB1cDogcHJldlNpYmxpbmcsXG4gICAgICAgICAgICAgIG5leHQ6IG9wZW5TdWIsXG4gICAgICAgICAgICAgIHByZXZpb3VzOiBjbG9zZVN1YlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgeyAvLyBob3Jpem9udGFsIG1lbnVcbiAgICAgICAgICBpZiAoX3RoaXMuX2lzUnRsKCkpIHsgLy8gcmlnaHQgYWxpZ25lZFxuICAgICAgICAgICAgJC5leHRlbmQoZnVuY3Rpb25zLCB7XG4gICAgICAgICAgICAgIG5leHQ6IHByZXZTaWJsaW5nLFxuICAgICAgICAgICAgICBwcmV2aW91czogbmV4dFNpYmxpbmcsXG4gICAgICAgICAgICAgIGRvd246IG9wZW5TdWIsXG4gICAgICAgICAgICAgIHVwOiBjbG9zZVN1YlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gbGVmdCBhbGlnbmVkXG4gICAgICAgICAgICAkLmV4dGVuZChmdW5jdGlvbnMsIHtcbiAgICAgICAgICAgICAgbmV4dDogbmV4dFNpYmxpbmcsXG4gICAgICAgICAgICAgIHByZXZpb3VzOiBwcmV2U2libGluZyxcbiAgICAgICAgICAgICAgZG93bjogb3BlblN1YixcbiAgICAgICAgICAgICAgdXA6IGNsb3NlU3ViXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIG5vdCB0YWJzIC0+IG9uZSBzdWJcbiAgICAgICAgaWYgKF90aGlzLl9pc1J0bCgpKSB7IC8vIHJpZ2h0IGFsaWduZWRcbiAgICAgICAgICAkLmV4dGVuZChmdW5jdGlvbnMsIHtcbiAgICAgICAgICAgIG5leHQ6IGNsb3NlU3ViLFxuICAgICAgICAgICAgcHJldmlvdXM6IG9wZW5TdWIsXG4gICAgICAgICAgICBkb3duOiBuZXh0U2libGluZyxcbiAgICAgICAgICAgIHVwOiBwcmV2U2libGluZ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgeyAvLyBsZWZ0IGFsaWduZWRcbiAgICAgICAgICAkLmV4dGVuZChmdW5jdGlvbnMsIHtcbiAgICAgICAgICAgIG5leHQ6IG9wZW5TdWIsXG4gICAgICAgICAgICBwcmV2aW91czogY2xvc2VTdWIsXG4gICAgICAgICAgICBkb3duOiBuZXh0U2libGluZyxcbiAgICAgICAgICAgIHVwOiBwcmV2U2libGluZ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBLZXlib2FyZC5oYW5kbGVLZXkoZSwgJ0Ryb3Bkb3duTWVudScsIGZ1bmN0aW9ucyk7XG5cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGhhbmRsZXIgdG8gdGhlIGJvZHkgdG8gY2xvc2UgYW55IGRyb3Bkb3ducyBvbiBhIGNsaWNrLlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hZGRCb2R5SGFuZGxlcigpIHtcbiAgICB2YXIgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgJGJvZHkub2ZmKCdtb3VzZXVwLnpmLmRyb3Bkb3dubWVudSB0b3VjaGVuZC56Zi5kcm9wZG93bm1lbnUnKVxuICAgICAgICAgLm9uKCdtb3VzZXVwLnpmLmRyb3Bkb3dubWVudSB0b3VjaGVuZC56Zi5kcm9wZG93bm1lbnUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgIHZhciAkbGluayA9IF90aGlzLiRlbGVtZW50LmZpbmQoZS50YXJnZXQpO1xuICAgICAgICAgICBpZiAoJGxpbmsubGVuZ3RoKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgIF90aGlzLl9oaWRlKCk7XG4gICAgICAgICAgICRib2R5Lm9mZignbW91c2V1cC56Zi5kcm9wZG93bm1lbnUgdG91Y2hlbmQuemYuZHJvcGRvd25tZW51Jyk7XG4gICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIGRyb3Bkb3duIHBhbmUsIGFuZCBjaGVja3MgZm9yIGNvbGxpc2lvbnMgZmlyc3QuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkc3ViIC0gdWwgZWxlbWVudCB0aGF0IGlzIGEgc3VibWVudSB0byBzaG93XG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAZmlyZXMgRHJvcGRvd25tZW51I3Nob3dcbiAgICovXG4gIF9zaG93KCRzdWIpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy4kdGFicy5pbmRleCh0aGlzLiR0YWJzLmZpbHRlcihmdW5jdGlvbihpLCBlbCkge1xuICAgICAgcmV0dXJuICQoZWwpLmZpbmQoJHN1YikubGVuZ3RoID4gMDtcbiAgICB9KSk7XG4gICAgdmFyICRzaWJzID0gJHN1Yi5wYXJlbnQoJ2xpLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50Jykuc2libGluZ3MoJ2xpLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50Jyk7XG4gICAgdGhpcy5faGlkZSgkc2licywgaWR4KTtcbiAgICAkc3ViLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKS5hZGRDbGFzcygnanMtZHJvcGRvd24tYWN0aXZlJylcbiAgICAgICAgLnBhcmVudCgnbGkuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgdmFyIGNsZWFyID0gQm94LkltTm90VG91Y2hpbmdZb3UoJHN1YiwgbnVsbCwgdHJ1ZSk7XG4gICAgaWYgKCFjbGVhcikge1xuICAgICAgdmFyIG9sZENsYXNzID0gdGhpcy5vcHRpb25zLmFsaWdubWVudCA9PT0gJ2xlZnQnID8gJy1yaWdodCcgOiAnLWxlZnQnLFxuICAgICAgICAgICRwYXJlbnRMaSA9ICRzdWIucGFyZW50KCcuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQnKTtcbiAgICAgICRwYXJlbnRMaS5yZW1vdmVDbGFzcyhgb3BlbnMke29sZENsYXNzfWApLmFkZENsYXNzKGBvcGVucy0ke3RoaXMub3B0aW9ucy5hbGlnbm1lbnR9YCk7XG4gICAgICBjbGVhciA9IEJveC5JbU5vdFRvdWNoaW5nWW91KCRzdWIsIG51bGwsIHRydWUpO1xuICAgICAgaWYgKCFjbGVhcikge1xuICAgICAgICAkcGFyZW50TGkucmVtb3ZlQ2xhc3MoYG9wZW5zLSR7dGhpcy5vcHRpb25zLmFsaWdubWVudH1gKS5hZGRDbGFzcygnb3BlbnMtaW5uZXInKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgICRzdWIuY3NzKCd2aXNpYmlsaXR5JywgJycpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrKSB7IHRoaXMuX2FkZEJvZHlIYW5kbGVyKCk7IH1cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBuZXcgZHJvcGRvd24gcGFuZSBpcyB2aXNpYmxlLlxuICAgICAqIEBldmVudCBEcm9wZG93bm1lbnUjc2hvd1xuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignc2hvdy56Zi5kcm9wZG93bm1lbnUnLCBbJHN1Yl0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGEgc2luZ2xlLCBjdXJyZW50bHkgb3BlbiBkcm9wZG93biBwYW5lLCBpZiBwYXNzZWQgYSBwYXJhbWV0ZXIsIG90aGVyd2lzZSwgaGlkZXMgZXZlcnl0aGluZy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbSAtIGVsZW1lbnQgd2l0aCBhIHN1Ym1lbnUgdG8gaGlkZVxuICAgKiBAcGFyYW0ge051bWJlcn0gaWR4IC0gaW5kZXggb2YgdGhlICR0YWJzIGNvbGxlY3Rpb24gdG8gaGlkZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hpZGUoJGVsZW0sIGlkeCkge1xuICAgIHZhciAkdG9DbG9zZTtcbiAgICBpZiAoJGVsZW0gJiYgJGVsZW0ubGVuZ3RoKSB7XG4gICAgICAkdG9DbG9zZSA9ICRlbGVtO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlkeCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICR0b0Nsb3NlID0gdGhpcy4kdGFicy5ub3QoZnVuY3Rpb24oaSwgZWwpIHtcbiAgICAgICAgcmV0dXJuIGkgPT09IGlkeDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICR0b0Nsb3NlID0gdGhpcy4kZWxlbWVudDtcbiAgICB9XG4gICAgdmFyIHNvbWV0aGluZ1RvQ2xvc2UgPSAkdG9DbG9zZS5oYXNDbGFzcygnaXMtYWN0aXZlJykgfHwgJHRvQ2xvc2UuZmluZCgnLmlzLWFjdGl2ZScpLmxlbmd0aCA+IDA7XG5cbiAgICBpZiAoc29tZXRoaW5nVG9DbG9zZSkge1xuICAgICAgJHRvQ2xvc2UuZmluZCgnbGkuaXMtYWN0aXZlJykuYWRkKCR0b0Nsb3NlKS5hdHRyKHtcbiAgICAgICAgJ2RhdGEtaXMtY2xpY2snOiBmYWxzZVxuICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAkdG9DbG9zZS5maW5kKCd1bC5qcy1kcm9wZG93bi1hY3RpdmUnKS5yZW1vdmVDbGFzcygnanMtZHJvcGRvd24tYWN0aXZlJyk7XG5cbiAgICAgIGlmICh0aGlzLmNoYW5nZWQgfHwgJHRvQ2xvc2UuZmluZCgnb3BlbnMtaW5uZXInKS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG9sZENsYXNzID0gdGhpcy5vcHRpb25zLmFsaWdubWVudCA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgJHRvQ2xvc2UuZmluZCgnbGkuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQnKS5hZGQoJHRvQ2xvc2UpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGBvcGVucy1pbm5lciBvcGVucy0ke3RoaXMub3B0aW9ucy5hbGlnbm1lbnR9YClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYG9wZW5zLSR7b2xkQ2xhc3N9YCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBGaXJlcyB3aGVuIHRoZSBvcGVuIG1lbnVzIGFyZSBjbG9zZWQuXG4gICAgICAgKiBAZXZlbnQgRHJvcGRvd25tZW51I2hpZGVcbiAgICAgICAqL1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdoaWRlLnpmLmRyb3Bkb3dubWVudScsIFskdG9DbG9zZV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIHRoaXMuJG1lbnVJdGVtcy5vZmYoJy56Zi5kcm9wZG93bm1lbnUnKS5yZW1vdmVBdHRyKCdkYXRhLWlzLWNsaWNrJylcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1yaWdodC1hcnJvdyBpcy1sZWZ0LWFycm93IGlzLWRvd24tYXJyb3cgb3BlbnMtcmlnaHQgb3BlbnMtbGVmdCBvcGVucy1pbm5lcicpO1xuICAgICQoZG9jdW1lbnQuYm9keSkub2ZmKCcuemYuZHJvcGRvd25tZW51Jyk7XG4gICAgTmVzdC5CdXJuKHRoaXMuJGVsZW1lbnQsICdkcm9wZG93bicpO1xuICB9XG59XG5cbi8qKlxuICogRGVmYXVsdCBzZXR0aW5ncyBmb3IgcGx1Z2luXG4gKi9cbkRyb3Bkb3duTWVudS5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIERpc2FsbG93cyBob3ZlciBldmVudHMgZnJvbSBvcGVuaW5nIHN1Ym1lbnVzXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBkaXNhYmxlSG92ZXI6IGZhbHNlLFxuICAvKipcbiAgICogQWxsb3cgYSBzdWJtZW51IHRvIGF1dG9tYXRpY2FsbHkgY2xvc2Ugb24gYSBtb3VzZWxlYXZlIGV2ZW50LCBpZiBub3QgY2xpY2tlZCBvcGVuLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBhdXRvY2xvc2U6IHRydWUsXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdGltZSB0byBkZWxheSBvcGVuaW5nIGEgc3VibWVudSBvbiBob3ZlciBldmVudC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCA1MFxuICAgKi9cbiAgaG92ZXJEZWxheTogNTAsXG4gIC8qKlxuICAgKiBBbGxvdyBhIHN1Ym1lbnUgdG8gb3Blbi9yZW1haW4gb3BlbiBvbiBwYXJlbnQgY2xpY2sgZXZlbnQuIEFsbG93cyBjdXJzb3IgdG8gbW92ZSBhd2F5IGZyb20gbWVudS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNsaWNrT3BlbjogZmFsc2UsXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdGltZSB0byBkZWxheSBjbG9zaW5nIGEgc3VibWVudSBvbiBhIG1vdXNlbGVhdmUgZXZlbnQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgNTAwXG4gICAqL1xuXG4gIGNsb3NpbmdUaW1lOiA1MDAsXG4gIC8qKlxuICAgKiBQb3NpdGlvbiBvZiB0aGUgbWVudSByZWxhdGl2ZSB0byB3aGF0IGRpcmVjdGlvbiB0aGUgc3VibWVudXMgc2hvdWxkIG9wZW4uIEhhbmRsZWQgYnkgSlMuIENhbiBiZSBgJ2F1dG8nYCwgYCdsZWZ0J2Agb3IgYCdyaWdodCdgLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgKi9cbiAgYWxpZ25tZW50OiAnYXV0bycsXG4gIC8qKlxuICAgKiBBbGxvdyBjbGlja3Mgb24gdGhlIGJvZHkgdG8gY2xvc2UgYW55IG9wZW4gc3VibWVudXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgLyoqXG4gICAqIEFsbG93IGNsaWNrcyBvbiBsZWFmIGFuY2hvciBsaW5rcyB0byBjbG9zZSBhbnkgb3BlbiBzdWJtZW51cy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgY2xvc2VPbkNsaWNrSW5zaWRlOiB0cnVlLFxuICAvKipcbiAgICogQ2xhc3MgYXBwbGllZCB0byB2ZXJ0aWNhbCBvcmllbnRlZCBtZW51cywgRm91bmRhdGlvbiBkZWZhdWx0IGlzIGB2ZXJ0aWNhbGAuIFVwZGF0ZSB0aGlzIGlmIHVzaW5nIHlvdXIgb3duIGNsYXNzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICd2ZXJ0aWNhbCdcbiAgICovXG4gIHZlcnRpY2FsQ2xhc3M6ICd2ZXJ0aWNhbCcsXG4gIC8qKlxuICAgKiBDbGFzcyBhcHBsaWVkIHRvIHJpZ2h0LXNpZGUgb3JpZW50ZWQgbWVudXMsIEZvdW5kYXRpb24gZGVmYXVsdCBpcyBgYWxpZ24tcmlnaHRgLiBVcGRhdGUgdGhpcyBpZiB1c2luZyB5b3VyIG93biBjbGFzcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnYWxpZ24tcmlnaHQnXG4gICAqL1xuICByaWdodENsYXNzOiAnYWxpZ24tcmlnaHQnLFxuICAvKipcbiAgICogQm9vbGVhbiB0byBmb3JjZSBvdmVyaWRlIHRoZSBjbGlja2luZyBvZiBsaW5rcyB0byBwZXJmb3JtIGRlZmF1bHQgYWN0aW9uLCBvbiBzZWNvbmQgdG91Y2ggZXZlbnQgZm9yIG1vYmlsZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgZm9yY2VGb2xsb3c6IHRydWVcbn07XG5cbmV4cG9ydCB7RHJvcGRvd25NZW51fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
