(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.box"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("./foundation.util.touch"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.box", "./foundation.util.keyboard", "./foundation.util.nest", "./foundation.util.touch", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.dropdownMenu"] = factory(require("./foundation.core"), require("./foundation.util.box"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("./foundation.util.touch"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.dropdownMenu"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.box"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.nest"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.touch"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_box__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_nest__, __WEBPACK_EXTERNAL_MODULE__foundation_util_touch__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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
      "./foundation.util.touch":
      /*!****************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.util.touch"],"amd":"./foundation.util.touch","commonjs":"./foundation.util.touch","commonjs2":"./foundation.util.touch"} ***!
        \****************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_util_touch__;
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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.util.nest */
        "./foundation.util.nest");
        /* harmony import */


        var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_nest__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.util.box */
        "./foundation.util.box");
        /* harmony import */


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_box__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./foundation.util.touch */
        "./foundation.util.touch");
        /* harmony import */


        var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__);

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
         * @module foundation.dropdownMenu
         * @requires foundation.util.keyboard
         * @requires foundation.util.box
         * @requires foundation.util.nest
         * @requires foundation.util.touch
         */


        var DropdownMenu = /*#__PURE__*/function (_Plugin) {
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

              _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__["Touch"].init(jquery__WEBPACK_IMPORTED_MODULE_0___default.a); // Touch init is idempotent, we just need to make sure it's initialied.


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
                    }

                    e.preventDefault();

                    _this._hide($elem);
                  } else {
                    e.preventDefault();

                    _this._show($sub);

                    $elem.add($elem.parentsUntil(_this.$element, ".".concat(parClass))).attr('data-is-click', true);
                  }
                }
              };

              if (this.options.clickOpen || hasTouch) {
                this.$menuItems.on('click.zf.dropdownMenu touchstart.zf.dropdownMenu', handleClickFn);
              } // Handle Leaf element Clicks


              if (_this.options.closeOnClickInside) {
                this.$menuItems.on('click.zf.dropdownMenu', function (e) {
                  var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                      hasSub = $elem.hasClass(parClass);

                  if (!hasSub) {
                    _this._hide();
                  }
                });
              }

              if (!this.options.disableHover) {
                this.$menuItems.on('mouseenter.zf.dropdownMenu', function (e) {
                  var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                      hasSub = $elem.hasClass(parClass);

                  if (hasSub) {
                    clearTimeout($elem.data('_delay'));
                    $elem.data('_delay', setTimeout(function () {
                      _this._show($elem.children('.is-dropdown-submenu'));
                    }, _this.options.hoverDelay));
                  }
                }).on('mouseleave.zf.dropdownmenu', Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["ignoreMousedisappear"])(function (e) {
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

              this.$menuItems.on('keydown.zf.dropdownMenu', function (e) {
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
              var _this2 = this;

              var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body);

              this._removeBodyHandler();

              $body.on('click.zf.dropdownMenu tap.zf.dropdownMenu', function (e) {
                var isItself = !!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(_this2.$element).length;
                if (isItself) return;

                _this2._hide();

                _this2._removeBodyHandler();
              });
            }
            /**
             * Remove the body event handler. See `_addBodyHandler`.
             * @function
             * @private
             */

          }, {
            key: "_removeBodyHandler",
            value: function _removeBodyHandler() {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdownMenu tap.zf.dropdownMenu');
            }
            /**
             * Opens a dropdown pane, and checks for collisions first.
             * @param {jQuery} $sub - ul element that is a submenu to show
             * @function
             * @private
             * @fires DropdownMenu#show
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
               * @event DropdownMenu#show
               */


              this.$element.trigger('show.zf.dropdownMenu', [$sub]);
            }
            /**
             * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
             * @function
             * @param {jQuery} $elem - element with a submenu to hide
             * @param {Number} idx - index of the $tabs collection to hide
             * @fires DropdownMenu#hide
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
                var $activeItem = $toClose.find('li.is-active');
                $activeItem.add($toClose).attr({
                  'data-is-click': false
                }).removeClass('is-active');
                $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

                if (this.changed || $toClose.find('opens-inner').length) {
                  var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
                  $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));
                  this.changed = false;
                }

                clearTimeout($activeItem.data('_delay'));

                this._removeBodyHandler();
                /**
                 * Fires when the open menus are closed.
                 * @event DropdownMenu#hide
                 */


                this.$element.trigger('hide.zf.dropdownMenu', [$toClose]);
              }
            }
            /**
             * Destroys the plugin.
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.$menuItems.off('.zf.dropdownMenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownMenu');

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
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.dropdownMenu.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uZHJvcGRvd25NZW51LmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmRyb3Bkb3duTWVudS5qcyIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wialF1ZXJ5XCJdLFwiYW1kXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbIkZvdW5kYXRpb24iLCJEcm9wZG93bk1lbnUiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJUb3VjaCIsIktleWJvYXJkIiwiTmVzdCIsInN1YnMiLCJSdGwiLCJfdGhpcyIsImhhc1RvdWNoIiwid2luZG93IiwicGFyQ2xhc3MiLCJoYW5kbGVDbGlja0ZuIiwiJGVsZW0iLCJlIiwiaGFzU3ViIiwiaGFzQ2xpY2tlZCIsIiRzdWIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaWdub3JlTW91c2VkaXNhcHBlYXIiLCIkZWxlbWVudCIsImlzVGFiIiwiJGVsZW1lbnRzIiwiJHByZXZFbGVtZW50IiwiaSIsIiRuZXh0RWxlbWVudCIsIm5leHRTaWJsaW5nIiwicHJldlNpYmxpbmciLCJvcGVuU3ViIiwiY2xvc2VTdWIiLCJjbG9zZSIsImZ1bmN0aW9ucyIsIm9wZW4iLCJkb3duIiwidXAiLCJuZXh0IiwicHJldmlvdXMiLCIkYm9keSIsImRvY3VtZW50IiwiaXNJdHNlbGYiLCJpZHgiLCIkc2licyIsImNsZWFyIiwiQm94Iiwib2xkQ2xhc3MiLCIkcGFyZW50TGkiLCIkdG9DbG9zZSIsInNvbWV0aGluZ1RvQ2xvc2UiLCIkYWN0aXZlSXRlbSIsIlBsdWdpbiIsImRpc2FibGVIb3ZlciIsImF1dG9jbG9zZSIsImhvdmVyRGVsYXkiLCJjbGlja09wZW4iLCJjbG9zaW5nVGltZSIsImFsaWdubWVudCIsImNsb3NlT25DbGljayIsImNsb3NlT25DbGlja0luc2lkZSIsInZlcnRpY2FsQ2xhc3MiLCJyaWdodENsYXNzIiwiZm9yY2VGb2xsb3ciXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsU0FBQSxnQ0FBQSxDQUFBLElBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxRQUFBLEVBQ0EsTUFBQSxDQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsdUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEseUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLHVCQUFBLEVBQUEsNEJBQUEsRUFBQSx3QkFBQSxFQUFBLHlCQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx5QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FHQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxHQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLElBQUEsRUFBQSxFQUF5RSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHlCQUFBLElBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEscUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsc0JBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsdUJBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBekU7QUFDQyxDQVRELEVBU0MsTUFURCxFQVNDLFVBQUEsNENBQUEsRUFBQSxnREFBQSxFQUFBLHFEQUFBLEVBQUEsaURBQUEsRUFBQSxrREFBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxH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LE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FMVUE7Q0FWQSIsImZpbGUiOiJmb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJvcGRvd25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC50b3VjaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcIi4vZm91bmRhdGlvbi51dGlsLmJveFwiLCBcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwubmVzdFwiLCBcIi4vZm91bmRhdGlvbi51dGlsLnRvdWNoXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24uZHJvcGRvd25NZW51XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC50b3VjaFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uZHJvcGRvd25NZW51XCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5ib3hcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm5lc3RcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC50b3VjaFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfYm94X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9rZXlib2FyZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfbmVzdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfdG91Y2hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5kcm9wZG93bk1lbnUnO1xuRm91bmRhdGlvbi5wbHVnaW4oRHJvcGRvd25NZW51LCAnRHJvcGRvd25NZW51Jyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIERyb3Bkb3duTWVudX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuaW1wb3J0IHsgcnRsIGFzIFJ0bCwgaWdub3JlTW91c2VkaXNhcHBlYXIgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkJztcbmltcG9ydCB7IE5lc3QgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5uZXN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmJveCc7XG5pbXBvcnQgeyBUb3VjaCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLnRvdWNoJ1xuXG5cbi8qKlxuICogRHJvcGRvd25NZW51IG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5kcm9wZG93bk1lbnVcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwuYm94XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm5lc3RcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwudG91Y2hcbiAqL1xuXG5jbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBEcm9wZG93bk1lbnUuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBEcm9wZG93bk1lbnVcbiAgICogQGZpcmVzIERyb3Bkb3duTWVudSNpbml0XG4gICAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBtYWtlIGludG8gYSBkcm9wZG93biBtZW51LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEcm9wZG93bk1lbnUuZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdEcm9wZG93bk1lbnUnOyAvLyBpZTkgYmFjayBjb21wYXRcblxuICAgIFRvdWNoLmluaXQoJCk7IC8vIFRvdWNoIGluaXQgaXMgaWRlbXBvdGVudCwgd2UganVzdCBuZWVkIHRvIG1ha2Ugc3VyZSBpdCdzIGluaXRpYWxpZWQuXG5cbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignRHJvcGRvd25NZW51Jywge1xuICAgICAgJ0VOVEVSJzogJ29wZW4nLFxuICAgICAgJ1NQQUNFJzogJ29wZW4nLFxuICAgICAgJ0FSUk9XX1JJR0hUJzogJ25leHQnLFxuICAgICAgJ0FSUk9XX1VQJzogJ3VwJyxcbiAgICAgICdBUlJPV19ET1dOJzogJ2Rvd24nLFxuICAgICAgJ0FSUk9XX0xFRlQnOiAncHJldmlvdXMnLFxuICAgICAgJ0VTQ0FQRSc6ICdjbG9zZSdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgcGx1Z2luLCBhbmQgY2FsbHMgX3ByZXBhcmVNZW51XG4gICAqIEBwcml2YXRlXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgTmVzdC5GZWF0aGVyKHRoaXMuJGVsZW1lbnQsICdkcm9wZG93bicpO1xuXG4gICAgdmFyIHN1YnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2xpLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50Jyk7XG4gICAgdGhpcy4kZWxlbWVudC5jaGlsZHJlbignLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50JykuY2hpbGRyZW4oJy5pcy1kcm9wZG93bi1zdWJtZW51JykuYWRkQ2xhc3MoJ2ZpcnN0LXN1YicpO1xuXG4gICAgdGhpcy4kbWVudUl0ZW1zID0gdGhpcy4kZWxlbWVudC5maW5kKCdbcm9sZT1cIm1lbnVpdGVtXCJdJyk7XG4gICAgdGhpcy4kdGFicyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oJ1tyb2xlPVwibWVudWl0ZW1cIl0nKTtcbiAgICB0aGlzLiR0YWJzLmZpbmQoJ3VsLmlzLWRyb3Bkb3duLXN1Ym1lbnUnKS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMudmVydGljYWxDbGFzcyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFsaWdubWVudCA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKHRoaXMub3B0aW9ucy5yaWdodENsYXNzKSB8fCBSdGwoKSB8fCB0aGlzLiRlbGVtZW50LnBhcmVudHMoJy50b3AtYmFyLXJpZ2h0JykuaXMoJyonKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFsaWdubWVudCA9ICdyaWdodCc7XG4gICAgICAgICAgICBzdWJzLmFkZENsYXNzKCdvcGVucy1sZWZ0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWxpZ25tZW50ID0gJ2xlZnQnO1xuICAgICAgICAgICAgc3Vicy5hZGRDbGFzcygnb3BlbnMtcmlnaHQnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIHN1YnMuYWRkQ2xhc3MoJ29wZW5zLWxlZnQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Vicy5hZGRDbGFzcygnb3BlbnMtcmlnaHQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgdGhpcy5fZXZlbnRzKCk7XG4gIH07XG5cbiAgX2lzVmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRhYnMuY3NzKCdkaXNwbGF5JykgPT09ICdibG9jaycgfHwgdGhpcy4kZWxlbWVudC5jc3MoJ2ZsZXgtZGlyZWN0aW9uJykgPT09ICdjb2x1bW4nO1xuICB9XG5cbiAgX2lzUnRsKCkge1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdhbGlnbi1yaWdodCcpIHx8IChSdGwoKSAmJiAhdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnYWxpZ24tbGVmdCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byBlbGVtZW50cyB3aXRoaW4gdGhlIG1lbnVcbiAgICogQHByaXZhdGVcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIGhhc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8ICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCAhPT0gJ3VuZGVmaW5lZCcpLFxuICAgICAgICBwYXJDbGFzcyA9ICdpcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCc7XG5cbiAgICAvLyB1c2VkIGZvciBvbkNsaWNrIGFuZCBpbiB0aGUga2V5Ym9hcmQgaGFuZGxlcnNcbiAgICB2YXIgaGFuZGxlQ2xpY2tGbiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciAkZWxlbSA9ICQoZS50YXJnZXQpLnBhcmVudHNVbnRpbCgndWwnLCBgLiR7cGFyQ2xhc3N9YCksXG4gICAgICAgICAgaGFzU3ViID0gJGVsZW0uaGFzQ2xhc3MocGFyQ2xhc3MpLFxuICAgICAgICAgIGhhc0NsaWNrZWQgPSAkZWxlbS5hdHRyKCdkYXRhLWlzLWNsaWNrJykgPT09ICd0cnVlJyxcbiAgICAgICAgICAkc3ViID0gJGVsZW0uY2hpbGRyZW4oJy5pcy1kcm9wZG93bi1zdWJtZW51Jyk7XG5cbiAgICAgIGlmIChoYXNTdWIpIHtcbiAgICAgICAgaWYgKGhhc0NsaWNrZWQpIHtcbiAgICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrXG4gICAgICAgICAgICB8fCAoIV90aGlzLm9wdGlvbnMuY2xpY2tPcGVuICYmICFoYXNUb3VjaClcbiAgICAgICAgICAgIHx8IChfdGhpcy5vcHRpb25zLmZvcmNlRm9sbG93ICYmIGhhc1RvdWNoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3RoaXMuX2hpZGUoJGVsZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5fc2hvdygkc3ViKTtcbiAgICAgICAgICAkZWxlbS5hZGQoJGVsZW0ucGFyZW50c1VudGlsKF90aGlzLiRlbGVtZW50LCBgLiR7cGFyQ2xhc3N9YCkpLmF0dHIoJ2RhdGEtaXMtY2xpY2snLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsaWNrT3BlbiB8fCBoYXNUb3VjaCkge1xuICAgICAgdGhpcy4kbWVudUl0ZW1zLm9uKCdjbGljay56Zi5kcm9wZG93bk1lbnUgdG91Y2hzdGFydC56Zi5kcm9wZG93bk1lbnUnLCBoYW5kbGVDbGlja0ZuKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgTGVhZiBlbGVtZW50IENsaWNrc1xuICAgIGlmKF90aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrSW5zaWRlKXtcbiAgICAgIHRoaXMuJG1lbnVJdGVtcy5vbignY2xpY2suemYuZHJvcGRvd25NZW51JywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgJGVsZW0gPSAkKHRoaXMpLFxuICAgICAgICAgICAgaGFzU3ViID0gJGVsZW0uaGFzQ2xhc3MocGFyQ2xhc3MpO1xuICAgICAgICBpZighaGFzU3ViKXtcbiAgICAgICAgICBfdGhpcy5faGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlSG92ZXIpIHtcbiAgICAgIHRoaXMuJG1lbnVJdGVtcy5vbignbW91c2VlbnRlci56Zi5kcm9wZG93bk1lbnUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgJGVsZW0gPSAkKHRoaXMpLFxuICAgICAgICAgIGhhc1N1YiA9ICRlbGVtLmhhc0NsYXNzKHBhckNsYXNzKTtcblxuICAgICAgICBpZiAoaGFzU3ViKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KCRlbGVtLmRhdGEoJ19kZWxheScpKTtcbiAgICAgICAgICAkZWxlbS5kYXRhKCdfZGVsYXknLCBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9zaG93KCRlbGVtLmNoaWxkcmVuKCcuaXMtZHJvcGRvd24tc3VibWVudScpKTtcbiAgICAgICAgICB9LCBfdGhpcy5vcHRpb25zLmhvdmVyRGVsYXkpKTtcbiAgICAgICAgfVxuICAgICAgfSkub24oJ21vdXNlbGVhdmUuemYuZHJvcGRvd25tZW51JywgaWdub3JlTW91c2VkaXNhcHBlYXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKSxcbiAgICAgICAgICAgIGhhc1N1YiA9ICRlbGVtLmhhc0NsYXNzKHBhckNsYXNzKTtcbiAgICAgICAgaWYgKGhhc1N1YiAmJiBfdGhpcy5vcHRpb25zLmF1dG9jbG9zZSkge1xuICAgICAgICAgIGlmICgkZWxlbS5hdHRyKCdkYXRhLWlzLWNsaWNrJykgPT09ICd0cnVlJyAmJiBfdGhpcy5vcHRpb25zLmNsaWNrT3BlbikgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgICAgIGNsZWFyVGltZW91dCgkZWxlbS5kYXRhKCdfZGVsYXknKSk7XG4gICAgICAgICAgJGVsZW0uZGF0YSgnX2RlbGF5Jywgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5faGlkZSgkZWxlbSk7XG4gICAgICAgICAgfSwgX3RoaXMub3B0aW9ucy5jbG9zaW5nVGltZSkpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHRoaXMuJG1lbnVJdGVtcy5vbigna2V5ZG93bi56Zi5kcm9wZG93bk1lbnUnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAkKGUudGFyZ2V0KS5wYXJlbnRzVW50aWwoJ3VsJywgJ1tyb2xlPVwibWVudWl0ZW1cIl0nKSxcbiAgICAgICAgICBpc1RhYiA9IF90aGlzLiR0YWJzLmluZGV4KCRlbGVtZW50KSA+IC0xLFxuICAgICAgICAgICRlbGVtZW50cyA9IGlzVGFiID8gX3RoaXMuJHRhYnMgOiAkZWxlbWVudC5zaWJsaW5ncygnbGknKS5hZGQoJGVsZW1lbnQpLFxuICAgICAgICAgICRwcmV2RWxlbWVudCxcbiAgICAgICAgICAkbmV4dEVsZW1lbnQ7XG5cbiAgICAgICRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgJHByZXZFbGVtZW50ID0gJGVsZW1lbnRzLmVxKGktMSk7XG4gICAgICAgICAgJG5leHRFbGVtZW50ID0gJGVsZW1lbnRzLmVxKGkrMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmFyIG5leHRTaWJsaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRuZXh0RWxlbWVudC5jaGlsZHJlbignYTpmaXJzdCcpLmZvY3VzKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sIHByZXZTaWJsaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRwcmV2RWxlbWVudC5jaGlsZHJlbignYTpmaXJzdCcpLmZvY3VzKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sIG9wZW5TdWIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICRzdWIgPSAkZWxlbWVudC5jaGlsZHJlbigndWwuaXMtZHJvcGRvd24tc3VibWVudScpO1xuICAgICAgICBpZiAoJHN1Yi5sZW5ndGgpIHtcbiAgICAgICAgICBfdGhpcy5fc2hvdygkc3ViKTtcbiAgICAgICAgICAkZWxlbWVudC5maW5kKCdsaSA+IGE6Zmlyc3QnKS5mb2N1cygpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuOyB9XG4gICAgICB9LCBjbG9zZVN1YiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2lmICgkZWxlbWVudC5pcygnOmZpcnN0LWNoaWxkJykpIHtcbiAgICAgICAgdmFyIGNsb3NlID0gJGVsZW1lbnQucGFyZW50KCd1bCcpLnBhcmVudCgnbGknKTtcbiAgICAgICAgY2xvc2UuY2hpbGRyZW4oJ2E6Zmlyc3QnKS5mb2N1cygpO1xuICAgICAgICBfdGhpcy5faGlkZShjbG9zZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy99XG4gICAgICB9O1xuICAgICAgdmFyIGZ1bmN0aW9ucyA9IHtcbiAgICAgICAgb3Blbjogb3BlblN1YixcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIF90aGlzLl9oaWRlKF90aGlzLiRlbGVtZW50KTtcbiAgICAgICAgICBfdGhpcy4kbWVudUl0ZW1zLmVxKDApLmNoaWxkcmVuKCdhJykuZm9jdXMoKTsgLy8gZm9jdXMgdG8gZmlyc3QgZWxlbWVudFxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGlzVGFiKSB7XG4gICAgICAgIGlmIChfdGhpcy5faXNWZXJ0aWNhbCgpKSB7IC8vIHZlcnRpY2FsIG1lbnVcbiAgICAgICAgICBpZiAoX3RoaXMuX2lzUnRsKCkpIHsgLy8gcmlnaHQgYWxpZ25lZFxuICAgICAgICAgICAgJC5leHRlbmQoZnVuY3Rpb25zLCB7XG4gICAgICAgICAgICAgIGRvd246IG5leHRTaWJsaW5nLFxuICAgICAgICAgICAgICB1cDogcHJldlNpYmxpbmcsXG4gICAgICAgICAgICAgIG5leHQ6IGNsb3NlU3ViLFxuICAgICAgICAgICAgICBwcmV2aW91czogb3BlblN1YlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHsgLy8gbGVmdCBhbGlnbmVkXG4gICAgICAgICAgICAkLmV4dGVuZChmdW5jdGlvbnMsIHtcbiAgICAgICAgICAgICAgZG93bjogbmV4dFNpYmxpbmcsXG4gICAgICAgICAgICAgIHVwOiBwcmV2U2libGluZyxcbiAgICAgICAgICAgICAgbmV4dDogb3BlblN1YixcbiAgICAgICAgICAgICAgcHJldmlvdXM6IGNsb3NlU3ViXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIGhvcml6b250YWwgbWVudVxuICAgICAgICAgIGlmIChfdGhpcy5faXNSdGwoKSkgeyAvLyByaWdodCBhbGlnbmVkXG4gICAgICAgICAgICAkLmV4dGVuZChmdW5jdGlvbnMsIHtcbiAgICAgICAgICAgICAgbmV4dDogcHJldlNpYmxpbmcsXG4gICAgICAgICAgICAgIHByZXZpb3VzOiBuZXh0U2libGluZyxcbiAgICAgICAgICAgICAgZG93bjogb3BlblN1YixcbiAgICAgICAgICAgICAgdXA6IGNsb3NlU3ViXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgeyAvLyBsZWZ0IGFsaWduZWRcbiAgICAgICAgICAgICQuZXh0ZW5kKGZ1bmN0aW9ucywge1xuICAgICAgICAgICAgICBuZXh0OiBuZXh0U2libGluZyxcbiAgICAgICAgICAgICAgcHJldmlvdXM6IHByZXZTaWJsaW5nLFxuICAgICAgICAgICAgICBkb3duOiBvcGVuU3ViLFxuICAgICAgICAgICAgICB1cDogY2xvc2VTdWJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gbm90IHRhYnMgLT4gb25lIHN1YlxuICAgICAgICBpZiAoX3RoaXMuX2lzUnRsKCkpIHsgLy8gcmlnaHQgYWxpZ25lZFxuICAgICAgICAgICQuZXh0ZW5kKGZ1bmN0aW9ucywge1xuICAgICAgICAgICAgbmV4dDogY2xvc2VTdWIsXG4gICAgICAgICAgICBwcmV2aW91czogb3BlblN1YixcbiAgICAgICAgICAgIGRvd246IG5leHRTaWJsaW5nLFxuICAgICAgICAgICAgdXA6IHByZXZTaWJsaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIGxlZnQgYWxpZ25lZFxuICAgICAgICAgICQuZXh0ZW5kKGZ1bmN0aW9ucywge1xuICAgICAgICAgICAgbmV4dDogb3BlblN1YixcbiAgICAgICAgICAgIHByZXZpb3VzOiBjbG9zZVN1YixcbiAgICAgICAgICAgIGRvd246IG5leHRTaWJsaW5nLFxuICAgICAgICAgICAgdXA6IHByZXZTaWJsaW5nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEtleWJvYXJkLmhhbmRsZUtleShlLCAnRHJvcGRvd25NZW51JywgZnVuY3Rpb25zKTtcblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlciB0byB0aGUgYm9keSB0byBjbG9zZSBhbnkgZHJvcGRvd25zIG9uIGEgY2xpY2suXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FkZEJvZHlIYW5kbGVyKCkge1xuICAgIGNvbnN0ICRib2R5ID0gJChkb2N1bWVudC5ib2R5KTtcbiAgICB0aGlzLl9yZW1vdmVCb2R5SGFuZGxlcigpO1xuICAgICRib2R5Lm9uKCdjbGljay56Zi5kcm9wZG93bk1lbnUgdGFwLnpmLmRyb3Bkb3duTWVudScsIChlKSA9PiB7XG4gICAgICB2YXIgaXNJdHNlbGYgPSAhISQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy4kZWxlbWVudCkubGVuZ3RoO1xuICAgICAgaWYgKGlzSXRzZWxmKSByZXR1cm47XG5cbiAgICAgIHRoaXMuX2hpZGUoKTtcbiAgICAgIHRoaXMuX3JlbW92ZUJvZHlIYW5kbGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBib2R5IGV2ZW50IGhhbmRsZXIuIFNlZSBgX2FkZEJvZHlIYW5kbGVyYC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVtb3ZlQm9keUhhbmRsZXIoKSB7XG4gICAgJChkb2N1bWVudC5ib2R5KS5vZmYoJ2NsaWNrLnpmLmRyb3Bkb3duTWVudSB0YXAuemYuZHJvcGRvd25NZW51Jyk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBkcm9wZG93biBwYW5lLCBhbmQgY2hlY2tzIGZvciBjb2xsaXNpb25zIGZpcnN0LlxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJHN1YiAtIHVsIGVsZW1lbnQgdGhhdCBpcyBhIHN1Ym1lbnUgdG8gc2hvd1xuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQGZpcmVzIERyb3Bkb3duTWVudSNzaG93XG4gICAqL1xuICBfc2hvdygkc3ViKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMuJHRhYnMuaW5kZXgodGhpcy4kdGFicy5maWx0ZXIoZnVuY3Rpb24oaSwgZWwpIHtcbiAgICAgIHJldHVybiAkKGVsKS5maW5kKCRzdWIpLmxlbmd0aCA+IDA7XG4gICAgfSkpO1xuICAgIHZhciAkc2licyA9ICRzdWIucGFyZW50KCdsaS5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCcpLnNpYmxpbmdzKCdsaS5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCcpO1xuICAgIHRoaXMuX2hpZGUoJHNpYnMsIGlkeCk7XG4gICAgJHN1Yi5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJykuYWRkQ2xhc3MoJ2pzLWRyb3Bkb3duLWFjdGl2ZScpXG4gICAgICAgIC5wYXJlbnQoJ2xpLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50JykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIHZhciBjbGVhciA9IEJveC5JbU5vdFRvdWNoaW5nWW91KCRzdWIsIG51bGwsIHRydWUpO1xuICAgIGlmICghY2xlYXIpIHtcbiAgICAgIHZhciBvbGRDbGFzcyA9IHRoaXMub3B0aW9ucy5hbGlnbm1lbnQgPT09ICdsZWZ0JyA/ICctcmlnaHQnIDogJy1sZWZ0JyxcbiAgICAgICAgICAkcGFyZW50TGkgPSAkc3ViLnBhcmVudCgnLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50Jyk7XG4gICAgICAkcGFyZW50TGkucmVtb3ZlQ2xhc3MoYG9wZW5zJHtvbGRDbGFzc31gKS5hZGRDbGFzcyhgb3BlbnMtJHt0aGlzLm9wdGlvbnMuYWxpZ25tZW50fWApO1xuICAgICAgY2xlYXIgPSBCb3guSW1Ob3RUb3VjaGluZ1lvdSgkc3ViLCBudWxsLCB0cnVlKTtcbiAgICAgIGlmICghY2xlYXIpIHtcbiAgICAgICAgJHBhcmVudExpLnJlbW92ZUNsYXNzKGBvcGVucy0ke3RoaXMub3B0aW9ucy5hbGlnbm1lbnR9YCkuYWRkQ2xhc3MoJ29wZW5zLWlubmVyJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICAkc3ViLmNzcygndmlzaWJpbGl0eScsICcnKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25DbGljaykgeyB0aGlzLl9hZGRCb2R5SGFuZGxlcigpOyB9XG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgbmV3IGRyb3Bkb3duIHBhbmUgaXMgdmlzaWJsZS5cbiAgICAgKiBAZXZlbnQgRHJvcGRvd25NZW51I3Nob3dcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3Nob3cuemYuZHJvcGRvd25NZW51JywgWyRzdWJdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBhIHNpbmdsZSwgY3VycmVudGx5IG9wZW4gZHJvcGRvd24gcGFuZSwgaWYgcGFzc2VkIGEgcGFyYW1ldGVyLCBvdGhlcndpc2UsIGhpZGVzIGV2ZXJ5dGhpbmcuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsZW0gLSBlbGVtZW50IHdpdGggYSBzdWJtZW51IHRvIGhpZGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkeCAtIGluZGV4IG9mIHRoZSAkdGFicyBjb2xsZWN0aW9uIHRvIGhpZGVcbiAgICogQGZpcmVzIERyb3Bkb3duTWVudSNoaWRlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGlkZSgkZWxlbSwgaWR4KSB7XG4gICAgdmFyICR0b0Nsb3NlO1xuICAgIGlmICgkZWxlbSAmJiAkZWxlbS5sZW5ndGgpIHtcbiAgICAgICR0b0Nsb3NlID0gJGVsZW07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaWR4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgJHRvQ2xvc2UgPSB0aGlzLiR0YWJzLm5vdChmdW5jdGlvbihpLCBlbCkge1xuICAgICAgICByZXR1cm4gaSA9PT0gaWR4O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJHRvQ2xvc2UgPSB0aGlzLiRlbGVtZW50O1xuICAgIH1cbiAgICB2YXIgc29tZXRoaW5nVG9DbG9zZSA9ICR0b0Nsb3NlLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSB8fCAkdG9DbG9zZS5maW5kKCcuaXMtYWN0aXZlJykubGVuZ3RoID4gMDtcblxuICAgIGlmIChzb21ldGhpbmdUb0Nsb3NlKSB7XG4gICAgICB2YXIgJGFjdGl2ZUl0ZW0gPSAkdG9DbG9zZS5maW5kKCdsaS5pcy1hY3RpdmUnKTtcbiAgICAgICRhY3RpdmVJdGVtLmFkZCgkdG9DbG9zZSkuYXR0cih7XG4gICAgICAgICdkYXRhLWlzLWNsaWNrJzogZmFsc2VcbiAgICAgIH0pLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgJHRvQ2xvc2UuZmluZCgndWwuanMtZHJvcGRvd24tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2pzLWRyb3Bkb3duLWFjdGl2ZScpO1xuXG4gICAgICBpZiAodGhpcy5jaGFuZ2VkIHx8ICR0b0Nsb3NlLmZpbmQoJ29wZW5zLWlubmVyJykubGVuZ3RoKSB7XG4gICAgICAgIHZhciBvbGRDbGFzcyA9IHRoaXMub3B0aW9ucy5hbGlnbm1lbnQgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgICR0b0Nsb3NlLmZpbmQoJ2xpLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50JykuYWRkKCR0b0Nsb3NlKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhgb3BlbnMtaW5uZXIgb3BlbnMtJHt0aGlzLm9wdGlvbnMuYWxpZ25tZW50fWApXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGBvcGVucy0ke29sZENsYXNzfWApO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KCRhY3RpdmVJdGVtLmRhdGEoJ19kZWxheScpKTtcbiAgICAgIHRoaXMuX3JlbW92ZUJvZHlIYW5kbGVyKCk7XG5cbiAgICAgIC8qKlxuICAgICAgICogRmlyZXMgd2hlbiB0aGUgb3BlbiBtZW51cyBhcmUgY2xvc2VkLlxuICAgICAgICogQGV2ZW50IERyb3Bkb3duTWVudSNoaWRlXG4gICAgICAgKi9cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignaGlkZS56Zi5kcm9wZG93bk1lbnUnLCBbJHRvQ2xvc2VdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgdGhlIHBsdWdpbi5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB0aGlzLiRtZW51SXRlbXMub2ZmKCcuemYuZHJvcGRvd25NZW51JykucmVtb3ZlQXR0cignZGF0YS1pcy1jbGljaycpXG4gICAgICAgIC5yZW1vdmVDbGFzcygnaXMtcmlnaHQtYXJyb3cgaXMtbGVmdC1hcnJvdyBpcy1kb3duLWFycm93IG9wZW5zLXJpZ2h0IG9wZW5zLWxlZnQgb3BlbnMtaW5uZXInKTtcbiAgICAkKGRvY3VtZW50LmJvZHkpLm9mZignLnpmLmRyb3Bkb3duTWVudScpO1xuICAgIE5lc3QuQnVybih0aGlzLiRlbGVtZW50LCAnZHJvcGRvd24nKTtcbiAgfVxufVxuXG4vKipcbiAqIERlZmF1bHQgc2V0dGluZ3MgZm9yIHBsdWdpblxuICovXG5Ecm9wZG93bk1lbnUuZGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBEaXNhbGxvd3MgaG92ZXIgZXZlbnRzIGZyb20gb3BlbmluZyBzdWJtZW51c1xuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZUhvdmVyOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93IGEgc3VibWVudSB0byBhdXRvbWF0aWNhbGx5IGNsb3NlIG9uIGEgbW91c2VsZWF2ZSBldmVudCwgaWYgbm90IGNsaWNrZWQgb3Blbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYXV0b2Nsb3NlOiB0cnVlLFxuICAvKipcbiAgICogQW1vdW50IG9mIHRpbWUgdG8gZGVsYXkgb3BlbmluZyBhIHN1Ym1lbnUgb24gaG92ZXIgZXZlbnQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgNTBcbiAgICovXG4gIGhvdmVyRGVsYXk6IDUwLFxuICAvKipcbiAgICogQWxsb3cgYSBzdWJtZW51IHRvIG9wZW4vcmVtYWluIG9wZW4gb24gcGFyZW50IGNsaWNrIGV2ZW50LiBBbGxvd3MgY3Vyc29yIHRvIG1vdmUgYXdheSBmcm9tIG1lbnUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjbGlja09wZW46IGZhbHNlLFxuICAvKipcbiAgICogQW1vdW50IG9mIHRpbWUgdG8gZGVsYXkgY2xvc2luZyBhIHN1Ym1lbnUgb24gYSBtb3VzZWxlYXZlIGV2ZW50LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDUwMFxuICAgKi9cblxuICBjbG9zaW5nVGltZTogNTAwLFxuICAvKipcbiAgICogUG9zaXRpb24gb2YgdGhlIG1lbnUgcmVsYXRpdmUgdG8gd2hhdCBkaXJlY3Rpb24gdGhlIHN1Ym1lbnVzIHNob3VsZCBvcGVuLiBIYW5kbGVkIGJ5IEpTLiBDYW4gYmUgYCdhdXRvJ2AsIGAnbGVmdCdgIG9yIGAncmlnaHQnYC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnYXV0bydcbiAgICovXG4gIGFsaWdubWVudDogJ2F1dG8nLFxuICAvKipcbiAgICogQWxsb3cgY2xpY2tzIG9uIHRoZSBib2R5IHRvIGNsb3NlIGFueSBvcGVuIHN1Ym1lbnVzLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gIC8qKlxuICAgKiBBbGxvdyBjbGlja3Mgb24gbGVhZiBhbmNob3IgbGlua3MgdG8gY2xvc2UgYW55IG9wZW4gc3VibWVudXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGNsb3NlT25DbGlja0luc2lkZTogdHJ1ZSxcbiAgLyoqXG4gICAqIENsYXNzIGFwcGxpZWQgdG8gdmVydGljYWwgb3JpZW50ZWQgbWVudXMsIEZvdW5kYXRpb24gZGVmYXVsdCBpcyBgdmVydGljYWxgLiBVcGRhdGUgdGhpcyBpZiB1c2luZyB5b3VyIG93biBjbGFzcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAndmVydGljYWwnXG4gICAqL1xuICB2ZXJ0aWNhbENsYXNzOiAndmVydGljYWwnLFxuICAvKipcbiAgICogQ2xhc3MgYXBwbGllZCB0byByaWdodC1zaWRlIG9yaWVudGVkIG1lbnVzLCBGb3VuZGF0aW9uIGRlZmF1bHQgaXMgYGFsaWduLXJpZ2h0YC4gVXBkYXRlIHRoaXMgaWYgdXNpbmcgeW91ciBvd24gY2xhc3MuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2FsaWduLXJpZ2h0J1xuICAgKi9cbiAgcmlnaHRDbGFzczogJ2FsaWduLXJpZ2h0JyxcbiAgLyoqXG4gICAqIEJvb2xlYW4gdG8gZm9yY2Ugb3ZlcmlkZSB0aGUgY2xpY2tpbmcgb2YgbGlua3MgdG8gcGVyZm9ybSBkZWZhdWx0IGFjdGlvbiwgb24gc2Vjb25kIHRvdWNoIGV2ZW50IGZvciBtb2JpbGUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGZvcmNlRm9sbG93OiB0cnVlXG59O1xuXG5leHBvcnQge0Ryb3Bkb3duTWVudX07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
