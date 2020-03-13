(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.box"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.box", "./foundation.util.keyboard", "./foundation.util.nest", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.drilldown"] = factory(require("./foundation.core"), require("./foundation.util.box"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.drilldown"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.box"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.nest"], root["jQuery"]);
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

      return __webpack_require__(__webpack_require__.s = 3);
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
      "./js/entries/plugins/foundation.drilldown.js":
      /*!****************************************************!*\
        !*** ./js/entries/plugins/foundation.drilldown.js ***!
        \****************************************************/

      /*! exports provided: Foundation, Drilldown */

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


        var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.drilldown */
        "./js/foundation.drilldown.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Drilldown", function () {
          return _foundation_drilldown__WEBPACK_IMPORTED_MODULE_1__["Drilldown"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_drilldown__WEBPACK_IMPORTED_MODULE_1__["Drilldown"], 'Drilldown');
        /***/

      },

      /***/
      "./js/foundation.drilldown.js":
      /*!************************************!*\
        !*** ./js/foundation.drilldown.js ***!
        \************************************/

      /*! exports provided: Drilldown */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Drilldown", function () {
          return Drilldown;
        });
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! jquery */
        "jquery");
        /* harmony import */


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.util.keyboard */
        "./foundation.util.keyboard");
        /* harmony import */


        var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.util.nest */
        "./foundation.util.nest");
        /* harmony import */


        var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__);
        /* harmony import */


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./foundation.util.box */
        "./foundation.util.box");
        /* harmony import */


        var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_foundation_util_box__WEBPACK_IMPORTED_MODULE_4__);

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
         * Drilldown module.
         * @module foundation.drilldown
         * @requires foundation.util.keyboard
         * @requires foundation.util.nest
         * @requires foundation.util.box
         */


        var Drilldown = /*#__PURE__*/function (_Plugin) {
          _inherits(Drilldown, _Plugin);

          function Drilldown() {
            _classCallCheck(this, Drilldown);

            return _possibleConstructorReturn(this, _getPrototypeOf(Drilldown).apply(this, arguments));
          }

          _createClass(Drilldown, [{
            key: "_setup",

            /**
             * Creates a new instance of a drilldown menu.
             * @class
             * @name Drilldown
             * @param {jQuery} element - jQuery object to make into an accordion menu.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Drilldown.defaults, this.$element.data(), options);
              this.className = 'Drilldown'; // ie9 back compat

              this._init();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('Drilldown', {
                'ENTER': 'open',
                'SPACE': 'open',
                'ARROW_RIGHT': 'next',
                'ARROW_UP': 'up',
                'ARROW_DOWN': 'down',
                'ARROW_LEFT': 'previous',
                'ESCAPE': 'close',
                'TAB': 'down',
                'SHIFT_TAB': 'up'
              });
            }
            /**
             * Initializes the drilldown by creating jQuery collections of elements
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'drilldown');

              if (this.options.autoApplyClass) {
                this.$element.addClass('drilldown');
              }

              this.$element.attr({
                'role': 'tree',
                'aria-multiselectable': false
              });
              this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
              this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
              this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'treeitem').find('a'); // Set the main menu as current by default (unless a submenu is selected)
              // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu

              this.$currentMenu = this.$element;
              this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'drilldown'));

              this._prepareMenu();

              this._registerEvents();

              this._keyboardEvents();
            }
            /**
             * prepares drilldown menu by setting attributes to links and elements
             * sets a min height to prevent content jumping
             * wraps the element if not already wrapped
             * @private
             * @function
             */

          }, {
            key: "_prepareMenu",
            value: function _prepareMenu() {
              var _this = this; // if(!this.options.holdOpen){
              //   this._menuLinkEvents();
              // }


              this.$submenuAnchors.each(function () {
                var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                var $sub = $link.parent();

                if (_this.options.parentLink) {
                  $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>');
                }

                $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
                $link.children('[data-submenu]').attr({
                  'aria-hidden': true,
                  'tabindex': 0,
                  'role': 'group'
                });

                _this._events($link);
              });
              this.$submenus.each(function () {
                var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    $back = $menu.find('.js-drilldown-back');

                if (!$back.length) {
                  switch (_this.options.backButtonPosition) {
                    case "bottom":
                      $menu.append(_this.options.backButton);
                      break;

                    case "top":
                      $menu.prepend(_this.options.backButton);
                      break;

                    default:
                      console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
                  }
                }

                _this._back($menu);
              });
              this.$submenus.addClass('invisible');

              if (!this.options.autoHeight) {
                this.$submenus.addClass('drilldown-submenu-cover-previous');
              } // create a wrapper on element if it doesn't exist.


              if (!this.$element.parent().hasClass('is-drilldown')) {
                this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');
                if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
                this.$element.wrap(this.$wrapper);
              } // set wrapper


              this.$wrapper = this.$element.parent();
              this.$wrapper.css(this._getMaxDims());
            }
          }, {
            key: "_resize",
            value: function _resize() {
              this.$wrapper.css({
                'max-width': 'none',
                'min-height': 'none'
              }); // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths

              this.$wrapper.css(this._getMaxDims());
            }
            /**
             * Adds event handlers to elements in the menu.
             * @function
             * @private
             * @param {jQuery} $elem - the current menu item to add handlers to.
             */

          }, {
            key: "_events",
            value: function _events($elem) {
              var _this = this;

              $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
                  e.preventDefault();
                } // if(e.target !== e.currentTarget.firstElementChild){
                //   return false;
                // }


                _this._show($elem.parent('li'));

                if (_this.options.closeOnClick) {
                  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
                  $body.off('.zf.drilldown').on('click.zf.drilldown', function (e) {
                    if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(_this.$element[0], e.target)) {
                      return;
                    }

                    e.preventDefault();

                    _this._hideAll();

                    $body.off('.zf.drilldown');
                  });
                }
              });
            }
            /**
             * Adds event handlers to the menu element.
             * @function
             * @private
             */

          }, {
            key: "_registerEvents",
            value: function _registerEvents() {
              if (this.options.scrollTop) {
                this._bindHandler = this._scrollTop.bind(this);
                this.$element.on('open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown', this._bindHandler);
              }

              this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
            }
            /**
             * Scroll to Top of Element or data-scroll-top-element
             * @function
             * @fires Drilldown#scrollme
             */

          }, {
            key: "_scrollTop",
            value: function _scrollTop() {
              var _this = this;

              var $scrollTopElement = _this.options.scrollTopElement != '' ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement) : _this.$element,
                  scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
                scrollTop: scrollPos
              }, _this.options.animationDuration, _this.options.animationEasing, function () {
                /**
                  * Fires after the menu has scrolled
                  * @event Drilldown#scrollme
                  */
                if (this === jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
              });
            }
            /**
             * Adds keydown event listener to `li`'s in the menu.
             * @private
             */

          }, {
            key: "_keyboardEvents",
            value: function _keyboardEvents() {
              var _this = this;

              this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {
                var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    $elements = $element.parent('li').parent('ul').children('li').children('a'),
                    $prevElement,
                    $nextElement;
                $elements.each(function (i) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
                    $prevElement = $elements.eq(Math.max(0, i - 1));
                    $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
                    return;
                  }
                });

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'Drilldown', {
                  next: function next() {
                    if ($element.is(_this.$submenuAnchors)) {
                      _this._show($element.parent('li'));

                      $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                        $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
                      });
                      return true;
                    }
                  },
                  previous: function previous() {
                    _this._hide($element.parent('li').parent('ul'));

                    $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                      setTimeout(function () {
                        $element.parent('li').parent('ul').parent('li').children('a').first().focus();
                      }, 1);
                    });
                    return true;
                  },
                  up: function up() {
                    $prevElement.focus(); // Don't tap focus on first element in root ul

                    return !$element.is(_this.$element.find('> li:first-child > a'));
                  },
                  down: function down() {
                    $nextElement.focus(); // Don't tap focus on last element in root ul

                    return !$element.is(_this.$element.find('> li:last-child > a'));
                  },
                  close: function close() {
                    // Don't close on element in root ul
                    if (!$element.is(_this.$element.find('> li > a'))) {
                      _this._hide($element.parent().parent());

                      $element.parent().parent().siblings('a').focus();
                    }
                  },
                  open: function open() {
                    if (_this.options.parentLink && $element.attr('href')) {
                      // Link with href
                      return false;
                    } else if (!$element.is(_this.$menuItems)) {
                      // not menu item means back button
                      _this._hide($element.parent('li').parent('ul'));

                      $element.parent('li').parent('ul').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                        setTimeout(function () {
                          $element.parent('li').parent('ul').parent('li').children('a').first().focus();
                        }, 1);
                      });
                      return true;
                    } else if ($element.is(_this.$submenuAnchors)) {
                      // Sub menu item
                      _this._show($element.parent('li'));

                      $element.parent('li').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($element), function () {
                        $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
                      });
                      return true;
                    }
                  },
                  handled: function handled(preventDefault) {
                    if (preventDefault) {
                      e.preventDefault();
                    }
                  }
                });
              }); // end keyboardAccess
            }
            /**
             * Closes all open elements, and returns to root menu.
             * @function
             * @fires Drilldown#close
             * @fires Drilldown#closed
             */

          }, {
            key: "_hideAll",
            value: function _hideAll() {
              var _this2 = this;

              var $elem = this.$element.find('.is-drilldown-submenu.is-active');
              $elem.addClass('is-closing');

              if (this.options.autoHeight) {
                var calcHeight = $elem.parent().closest('ul').data('calcHeight');
                this.$wrapper.css({
                  height: calcHeight
                });
              }
              /**
               * Fires when the menu is closing.
               * @event Drilldown#close
               */


              this.$element.trigger('close.zf.drilldown');
              $elem.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function () {
                $elem.removeClass('is-active is-closing');
                /**
                 * Fires when the menu is fully closed.
                 * @event Drilldown#closed
                 */

                _this2.$element.trigger('closed.zf.drilldown');
              });
            }
            /**
             * Adds event listener for each `back` button, and closes open menus.
             * @function
             * @fires Drilldown#back
             * @param {jQuery} $elem - the current sub-menu to add `back` event.
             */

          }, {
            key: "_back",
            value: function _back($elem) {
              var _this = this;

              $elem.off('click.zf.drilldown');
              $elem.children('.js-drilldown-back').on('click.zf.drilldown', function (e) {
                // console.log('mouseup on back');
                _this._hide($elem); // If there is a parent submenu, call show


                var parentSubMenu = $elem.parent('li').parent('ul').parent('li');

                if (parentSubMenu.length) {
                  _this._show(parentSubMenu);
                }
              });
            }
            /**
             * Adds event listener to menu items w/o submenus to close open menus on click.
             * @function
             * @private
             */

          }, {
            key: "_menuLinkEvents",
            value: function _menuLinkEvents() {
              var _this = this;

              this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
                setTimeout(function () {
                  _this._hideAll();
                }, 0);
              });
            }
            /**
             * Sets the CSS classes for submenu to show it.
             * @function
             * @private
             * @param {jQuery} $elem - the target submenu (`ul` tag)
             * @param {boolean} trigger - trigger drilldown event
             */

          }, {
            key: "_setShowSubMenuClasses",
            value: function _setShowSubMenuClasses($elem, trigger) {
              $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
              $elem.parent('li').attr('aria-expanded', true);

              if (trigger === true) {
                this.$element.trigger('open.zf.drilldown', [$elem]);
              }
            }
            /**
             * Sets the CSS classes for submenu to hide it.
             * @function
             * @private
             * @param {jQuery} $elem - the target submenu (`ul` tag)
             * @param {boolean} trigger - trigger drilldown event
             */

          }, {
            key: "_setHideSubMenuClasses",
            value: function _setHideSubMenuClasses($elem, trigger) {
              $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);
              $elem.parent('li').attr('aria-expanded', false);

              if (trigger === true) {
                $elem.trigger('hide.zf.drilldown', [$elem]);
              }
            }
            /**
             * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
             * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
             * @function
             * @fires Drilldown#open
             * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
             * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
             */

          }, {
            key: "_showMenu",
            value: function _showMenu($elem, autoFocus) {
              var _this = this; // Reset drilldown


              var $expandedSubmenus = this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');
              $expandedSubmenus.each(function (index) {
                _this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
              }); // Save the menu as the currently displayed one.

              this.$currentMenu = $elem; // If target menu is root, focus first link & exit

              if ($elem.is('[data-drilldown]')) {
                if (autoFocus === true) $elem.find('li[role="treeitem"] > a').first().focus();
                if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));
                return;
              } // Find all submenus on way to root incl. the element itself


              var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]'); // Open target menu and all submenus on its way to root

              $submenus.each(function (index) {
                // Update height of first child (target menu) if autoHeight option true
                if (index === 0 && _this.options.autoHeight) {
                  _this.$wrapper.css('height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));
                }

                var isLastChild = index == $submenus.length - 1; // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
                // Last child makes sure the event gets always triggered even if going through several menus

                if (isLastChild === true) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), function () {
                    if (autoFocus === true) {
                      $elem.find('li[role="treeitem"] > a').first().focus();
                    }
                  });
                }

                _this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), isLastChild);
              });
            }
            /**
             * Opens a submenu.
             * @function
             * @fires Drilldown#open
             * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
             */

          }, {
            key: "_show",
            value: function _show($elem) {
              var $submenu = $elem.children('[data-submenu]');
              $elem.attr('aria-expanded', true);
              this.$currentMenu = $submenu;
              $submenu.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);

              if (this.options.autoHeight) {
                this.$wrapper.css({
                  height: $submenu.data('calcHeight')
                });
              }
              /**
               * Fires when the submenu has opened.
               * @event Drilldown#open
               */


              this.$element.trigger('open.zf.drilldown', [$elem]);
            }
            /**
             * Hides a submenu
             * @function
             * @fires Drilldown#hide
             * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
             */

          }, {
            key: "_hide",
            value: function _hide($elem) {
              if (this.options.autoHeight) this.$wrapper.css({
                height: $elem.parent().closest('ul').data('calcHeight')
              });

              var _this = this;

              $elem.parent('li').attr('aria-expanded', false);
              $elem.attr('aria-hidden', true);
              $elem.addClass('is-closing').one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function () {
                $elem.removeClass('is-active is-closing');
                $elem.blur().addClass('invisible');
              });
              /**
               * Fires when the submenu has closed.
               * @event Drilldown#hide
               */

              $elem.trigger('hide.zf.drilldown', [$elem]);
            }
            /**
             * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
             * Prevents content jumping.
             * @function
             * @private
             */

          }, {
            key: "_getMaxDims",
            value: function _getMaxDims() {
              var maxHeight = 0,
                  result = {},
                  _this = this; // Recalculate menu heights and total max height


              this.$submenus.add(this.$element).each(function () {
                var numOfElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('li').length;

                var height = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__["Box"].GetDimensions(this).height;

                maxHeight = height > maxHeight ? height : maxHeight;

                if (_this.options.autoHeight) {
                  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight', height);
                }
              });
              if (this.options.autoHeight) result['height'] = this.$currentMenu.data('calcHeight');else result['min-height'] = "".concat(maxHeight, "px");
              result['max-width'] = "".concat(this.$element[0].getBoundingClientRect().width, "px");
              return result;
            }
            /**
             * Destroys the Drilldown Menu
             * @function
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);

              this._hideAll();

              this.$element.off('mutateme.zf.trigger');

              _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'drilldown');

              this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
              this.$submenuAnchors.each(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');
              });
              this.$element.find('[data-is-parent-link]').detach();
              this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
              this.$element.find('a').each(function () {
                var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                $link.removeAttr('tabindex');

                if ($link.data('savedHref')) {
                  $link.attr('href', $link.data('savedHref')).removeData('savedHref');
                } else {
                  return;
                }
              });
            }
          }]);

          return Drilldown;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

        Drilldown.defaults = {
          /**
           * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
           * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
           * @option
           * @type {boolean}
           * @default true
           */
          autoApplyClass: true,

          /**
           * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
           * @option
           * @type {string}
           * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
           */
          backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',

          /**
           * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
           * @option
           * @type {string}
           * @default top
           */
          backButtonPosition: 'top',

          /**
           * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
           * @option
           * @type {string}
           * @default '<div></div>'
           */
          wrapper: '<div></div>',

          /**
           * Adds the parent link to the submenu.
           * @option
           * @type {boolean}
           * @default false
           */
          parentLink: false,

          /**
           * Allow the menu to return to root list on body click.
           * @option
           * @type {boolean}
           * @default false
           */
          closeOnClick: false,

          /**
           * Allow the menu to auto adjust height.
           * @option
           * @type {boolean}
           * @default false
           */
          autoHeight: false,

          /**
           * Animate the auto adjust height.
           * @option
           * @type {boolean}
           * @default false
           */
          animateHeight: false,

          /**
           * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
           * @option
           * @type {boolean}
           * @default false
           */
          scrollTop: false,

          /**
           * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
           * @option
           * @type {string}
           * @default ''
           */
          scrollTopElement: '',

          /**
           * ScrollTop offset
           * @option
           * @type {number}
           * @default 0
           */
          scrollTopOffset: 0,

          /**
           * Scroll animation duration
           * @option
           * @type {number}
           * @default 500
           */
          animationDuration: 500,

          /**
           * Scroll animation easing. Can be `'swing'` or `'linear'`.
           * @option
           * @type {string}
           * @see {@link https://api.jquery.com/animate|JQuery animate}
           * @default 'swing'
           */
          animationEasing: 'swing' // holdOpen: false

        };
        /***/
      },

      /***/
      3:
      /*!**********************************************************!*\
        !*** multi ./js/entries/plugins/foundation.drilldown.js ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.drilldown.js */
        "./js/entries/plugins/foundation.drilldown.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uZHJpbGxkb3duLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmRyaWxsZG93bi5qcyIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wialF1ZXJ5XCJdLFwiYW1kXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbIkZvdW5kYXRpb24iLCJEcmlsbGRvd24iLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJLZXlib2FyZCIsIk5lc3QiLCJHZXRZb0RpZ2l0cyIsIl90aGlzIiwiJGxpbmsiLCIkc3ViIiwiJG1lbnUiLCIkYmFjayIsImNvbnNvbGUiLCIkZWxlbSIsImUiLCIkYm9keSIsIiRzY3JvbGxUb3BFbGVtZW50Iiwic2Nyb2xsUG9zIiwicGFyc2VJbnQiLCJzY3JvbGxUb3AiLCIkZWxlbWVudCIsIiRlbGVtZW50cyIsIiRwcmV2RWxlbWVudCIsIk1hdGgiLCJpIiwiJG5leHRFbGVtZW50IiwibmV4dCIsInRyYW5zaXRpb25lbmQiLCJwcmV2aW91cyIsInNldFRpbWVvdXQiLCJ1cCIsImRvd24iLCJjbG9zZSIsIm9wZW4iLCJoYW5kbGVkIiwiY2FsY0hlaWdodCIsImhlaWdodCIsInBhcmVudFN1Yk1lbnUiLCJ0cmlnZ2VyIiwiYXV0b0ZvY3VzIiwiJGV4cGFuZGVkU3VibWVudXMiLCIkc3VibWVudXMiLCJpbmRleCIsImlzTGFzdENoaWxkIiwiJHN1Ym1lbnUiLCJtYXhIZWlnaHQiLCJyZXN1bHQiLCJudW1PZkVsZW1zIiwiQm94IiwiUGx1Z2luIiwiYXV0b0FwcGx5Q2xhc3MiLCJiYWNrQnV0dG9uIiwiYmFja0J1dHRvblBvc2l0aW9uIiwid3JhcHBlciIsInBhcmVudExpbmsiLCJjbG9zZU9uQ2xpY2siLCJhdXRvSGVpZ2h0IiwiYW5pbWF0ZUhlaWdodCIsInNjcm9sbFRvcEVsZW1lbnQiLCJzY3JvbGxUb3BPZmZzZXQiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkVhc2luZyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLHVCQUFBLEVBQUEsNEJBQUEsRUFBQSx3QkFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLHNCQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsdUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsc0JBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxxQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxzQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLGdEQUFBLEVBQUEscURBQUEsRUFBQSxpREFBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVBQUEsR0FBQTtBQUEyQixpQkFBQSxNQUFBLENBQUEsU0FBQSxDQUFBO0FBQTRCLFNBRHZEO0FBRUE7QUFBQSxpQkFBQSxnQkFBQSxHQUFBO0FBQWlDLGlCQUFBLE1BQUE7QUFBZSxTQUZoRDtBQUdBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBO0FBQ0E7OztBQUFBLGVBQUEsTUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7QUFBc0QsZUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsQ0FBQTtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUEsYUFBQSxtQkFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLDRDQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxnREFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEscURBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGlEQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsNkNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsWUFBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSxrREFBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxzQ0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxXQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLGtEQUFBLENBQUEsV0FBQSxDQUFBO0FBQUEsU0FBQTs7QUNHQUEsUUFBQUEsNkNBQUFBLENBQUFBLFlBQUFBLENBQUFBLENBQUFBLE1BQUFBLENBQWtCQyxrREFBQUEsQ0FBbEJELFdBQWtCQyxDQUFsQkQsRUFBQUEsV0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsV0FBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSxTQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLG1DQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGdCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSwyQ0FBQSxHQUFBLGFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHNEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLG9DQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSw4REFBQSxH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cENTLEtBQUE7O0FBcUNuQjs7Ozs7O0FBTUFDLFVBQUFBLFlBQVksRUEzQ08sS0FBQTs7QUE0Q25COzs7Ozs7QUFNQUMsVUFBQUEsVUFBVSxFQWxEUyxLQUFBOztBQW1EbkI7Ozs7OztBQU1BQyxVQUFBQSxhQUFhLEVBekRNLEtBQUE7O0FBMERuQjs7Ozs7O0FBTUF0QyxVQUFBQSxTQUFTLEVBaEVVLEtBQUE7O0FBaUVuQjs7Ozs7O0FBTUF1QyxVQUFBQSxnQkFBZ0IsRUF2RUcsRUFBQTs7QUF3RW5COzs7Ozs7QUFNQUMsVUFBQUEsZUFBZSxFQTlFSSxDQUFBOztBQStFbkI7Ozs7OztBQU1BQyxVQUFBQSxpQkFBaUIsRUFyRkUsR0FBQTs7QUFzRm5COzs7Ozs7O0FBT0FDLFVBQUFBLGVBQWUsRUE3RkksT0FBQSxDQThGbkI7O0FBOUZtQixTQUFyQjdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxaUJBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FMVUE7Q0FWQSIsImZpbGUiOiJmb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJpbGxkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiLi9mb3VuZGF0aW9uLmNvcmVcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5kcmlsbGRvd25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmJveFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwubmVzdFwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gPSByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl0gfHwge30sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uZHJpbGxkb3duXCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5ib3hcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm5lc3RcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2JveF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX25lc3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgRHJpbGxkb3duIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5kcmlsbGRvd24nO1xuRm91bmRhdGlvbi5wbHVnaW4oRHJpbGxkb3duLCAnRHJpbGxkb3duJyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIERyaWxsZG93biB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZCc7XG5pbXBvcnQgeyBOZXN0IH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwubmVzdCc7XG5pbXBvcnQgeyBHZXRZb0RpZ2l0cywgdHJhbnNpdGlvbmVuZCB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmJveCc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuXG4vKipcbiAqIERyaWxsZG93biBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24uZHJpbGxkb3duXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm5lc3RcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwuYm94XG4gKi9cblxuY2xhc3MgRHJpbGxkb3duIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYSBkcmlsbGRvd24gbWVudS5cbiAgICogQGNsYXNzXG4gICAqIEBuYW1lIERyaWxsZG93blxuICAgKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gbWFrZSBpbnRvIGFuIGFjY29yZGlvbiBtZW51LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEcmlsbGRvd24uZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdEcmlsbGRvd24nOyAvLyBpZTkgYmFjayBjb21wYXRcblxuICAgIHRoaXMuX2luaXQoKTtcblxuICAgIEtleWJvYXJkLnJlZ2lzdGVyKCdEcmlsbGRvd24nLCB7XG4gICAgICAnRU5URVInOiAnb3BlbicsXG4gICAgICAnU1BBQ0UnOiAnb3BlbicsXG4gICAgICAnQVJST1dfUklHSFQnOiAnbmV4dCcsXG4gICAgICAnQVJST1dfVVAnOiAndXAnLFxuICAgICAgJ0FSUk9XX0RPV04nOiAnZG93bicsXG4gICAgICAnQVJST1dfTEVGVCc6ICdwcmV2aW91cycsXG4gICAgICAnRVNDQVBFJzogJ2Nsb3NlJyxcbiAgICAgICdUQUInOiAnZG93bicsXG4gICAgICAnU0hJRlRfVEFCJzogJ3VwJ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBkcmlsbGRvd24gYnkgY3JlYXRpbmcgalF1ZXJ5IGNvbGxlY3Rpb25zIG9mIGVsZW1lbnRzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICBOZXN0LkZlYXRoZXIodGhpcy4kZWxlbWVudCwgJ2RyaWxsZG93bicpO1xuXG4gICAgaWYodGhpcy5vcHRpb25zLmF1dG9BcHBseUNsYXNzKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdkcmlsbGRvd24nKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgJ3JvbGUnOiAndHJlZScsXG4gICAgICAnYXJpYS1tdWx0aXNlbGVjdGFibGUnOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMuJHN1Ym1lbnVBbmNob3JzID0gdGhpcy4kZWxlbWVudC5maW5kKCdsaS5pcy1kcmlsbGRvd24tc3VibWVudS1wYXJlbnQnKS5jaGlsZHJlbignYScpO1xuICAgIHRoaXMuJHN1Ym1lbnVzID0gdGhpcy4kc3VibWVudUFuY2hvcnMucGFyZW50KCdsaScpLmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XScpLmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKTtcbiAgICB0aGlzLiRtZW51SXRlbXMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ2xpJykubm90KCcuanMtZHJpbGxkb3duLWJhY2snKS5hdHRyKCdyb2xlJywgJ3RyZWVpdGVtJykuZmluZCgnYScpO1xuXG4gICAgLy8gU2V0IHRoZSBtYWluIG1lbnUgYXMgY3VycmVudCBieSBkZWZhdWx0ICh1bmxlc3MgYSBzdWJtZW51IGlzIHNlbGVjdGVkKVxuICAgIC8vIFVzZWQgdG8gc2V0IHRoZSB3cmFwcGVyIGhlaWdodCB3aGVuIHRoZSBkcmlsbGRvd24gaXMgY2xvc2VkL3Jlb3BlbmVkIGZyb20gYW55IChzdWIpbWVudVxuICAgIHRoaXMuJGN1cnJlbnRNZW51ID0gdGhpcy4kZWxlbWVudDtcblxuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignZGF0YS1tdXRhdGUnLCAodGhpcy4kZWxlbWVudC5hdHRyKCdkYXRhLWRyaWxsZG93bicpIHx8IEdldFlvRGlnaXRzKDYsICdkcmlsbGRvd24nKSkpO1xuXG4gICAgdGhpcy5fcHJlcGFyZU1lbnUoKTtcbiAgICB0aGlzLl9yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgdGhpcy5fa2V5Ym9hcmRFdmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcmVwYXJlcyBkcmlsbGRvd24gbWVudSBieSBzZXR0aW5nIGF0dHJpYnV0ZXMgdG8gbGlua3MgYW5kIGVsZW1lbnRzXG4gICAqIHNldHMgYSBtaW4gaGVpZ2h0IHRvIHByZXZlbnQgY29udGVudCBqdW1waW5nXG4gICAqIHdyYXBzIHRoZSBlbGVtZW50IGlmIG5vdCBhbHJlYWR5IHdyYXBwZWRcbiAgICogQHByaXZhdGVcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfcHJlcGFyZU1lbnUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAvLyBpZighdGhpcy5vcHRpb25zLmhvbGRPcGVuKXtcbiAgICAvLyAgIHRoaXMuX21lbnVMaW5rRXZlbnRzKCk7XG4gICAgLy8gfVxuICAgIHRoaXMuJHN1Ym1lbnVBbmNob3JzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciAkbGluayA9ICQodGhpcyk7XG4gICAgICB2YXIgJHN1YiA9ICRsaW5rLnBhcmVudCgpO1xuICAgICAgaWYoX3RoaXMub3B0aW9ucy5wYXJlbnRMaW5rKXtcbiAgICAgICAgJGxpbmsuY2xvbmUoKS5wcmVwZW5kVG8oJHN1Yi5jaGlsZHJlbignW2RhdGEtc3VibWVudV0nKSkud3JhcCgnPGxpIGRhdGEtaXMtcGFyZW50LWxpbmsgY2xhc3M9XCJpcy1zdWJtZW51LXBhcmVudC1pdGVtIGlzLXN1Ym1lbnUtaXRlbSBpcy1kcmlsbGRvd24tc3VibWVudS1pdGVtXCIgcm9sZT1cIm1lbnVpdGVtXCI+PC9saT4nKTtcbiAgICAgIH1cbiAgICAgICRsaW5rLmRhdGEoJ3NhdmVkSHJlZicsICRsaW5rLmF0dHIoJ2hyZWYnKSkucmVtb3ZlQXR0cignaHJlZicpLmF0dHIoJ3RhYmluZGV4JywgMCk7XG4gICAgICAkbGluay5jaGlsZHJlbignW2RhdGEtc3VibWVudV0nKVxuICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6IHRydWUsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAwLFxuICAgICAgICAgICAgJ3JvbGUnOiAnZ3JvdXAnXG4gICAgICAgICAgfSk7XG4gICAgICBfdGhpcy5fZXZlbnRzKCRsaW5rKTtcbiAgICB9KTtcbiAgICB0aGlzLiRzdWJtZW51cy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgJG1lbnUgPSAkKHRoaXMpLFxuICAgICAgICAgICRiYWNrID0gJG1lbnUuZmluZCgnLmpzLWRyaWxsZG93bi1iYWNrJyk7XG4gICAgICBpZighJGJhY2subGVuZ3RoKXtcbiAgICAgICAgc3dpdGNoIChfdGhpcy5vcHRpb25zLmJhY2tCdXR0b25Qb3NpdGlvbikge1xuICAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgICAgICRtZW51LmFwcGVuZChfdGhpcy5vcHRpb25zLmJhY2tCdXR0b24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgJG1lbnUucHJlcGVuZChfdGhpcy5vcHRpb25zLmJhY2tCdXR0b24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbnN1cHBvcnRlZCBiYWNrQnV0dG9uUG9zaXRpb24gdmFsdWUgJ1wiICsgX3RoaXMub3B0aW9ucy5iYWNrQnV0dG9uUG9zaXRpb24gKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF90aGlzLl9iYWNrKCRtZW51KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHN1Ym1lbnVzLmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICBpZighdGhpcy5vcHRpb25zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHRoaXMuJHN1Ym1lbnVzLmFkZENsYXNzKCdkcmlsbGRvd24tc3VibWVudS1jb3Zlci1wcmV2aW91cycpO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIHdyYXBwZXIgb24gZWxlbWVudCBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgIGlmKCF0aGlzLiRlbGVtZW50LnBhcmVudCgpLmhhc0NsYXNzKCdpcy1kcmlsbGRvd24nKSl7XG4gICAgICB0aGlzLiR3cmFwcGVyID0gJCh0aGlzLm9wdGlvbnMud3JhcHBlcikuYWRkQ2xhc3MoJ2lzLWRyaWxsZG93bicpO1xuICAgICAgaWYodGhpcy5vcHRpb25zLmFuaW1hdGVIZWlnaHQpIHRoaXMuJHdyYXBwZXIuYWRkQ2xhc3MoJ2FuaW1hdGUtaGVpZ2h0Jyk7XG4gICAgICB0aGlzLiRlbGVtZW50LndyYXAodGhpcy4kd3JhcHBlcik7XG4gICAgfVxuICAgIC8vIHNldCB3cmFwcGVyXG4gICAgdGhpcy4kd3JhcHBlciA9IHRoaXMuJGVsZW1lbnQucGFyZW50KCk7XG4gICAgdGhpcy4kd3JhcHBlci5jc3ModGhpcy5fZ2V0TWF4RGltcygpKTtcbiAgfVxuXG4gIF9yZXNpemUoKSB7XG4gICAgdGhpcy4kd3JhcHBlci5jc3MoeydtYXgtd2lkdGgnOiAnbm9uZScsICdtaW4taGVpZ2h0JzogJ25vbmUnfSk7XG4gICAgLy8gX2dldE1heERpbXMgaGFzIHNpZGUgZWZmZWN0cyAoYm9vKSBidXQgY2FsbGluZyBpdCBzaG91bGQgdXBkYXRlIGFsbCBvdGhlciBuZWNlc3NhcnkgaGVpZ2h0cyAmIHdpZHRoc1xuICAgIHRoaXMuJHdyYXBwZXIuY3NzKHRoaXMuX2dldE1heERpbXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBoYW5kbGVycyB0byBlbGVtZW50cyBpbiB0aGUgbWVudS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbSAtIHRoZSBjdXJyZW50IG1lbnUgaXRlbSB0byBhZGQgaGFuZGxlcnMgdG8uXG4gICAqL1xuICBfZXZlbnRzKCRlbGVtKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICRlbGVtLm9mZignY2xpY2suemYuZHJpbGxkb3duJylcbiAgICAub24oJ2NsaWNrLnpmLmRyaWxsZG93bicsIGZ1bmN0aW9uKGUpe1xuICAgICAgaWYoJChlLnRhcmdldCkucGFyZW50c1VudGlsKCd1bCcsICdsaScpLmhhc0NsYXNzKCdpcy1kcmlsbGRvd24tc3VibWVudS1wYXJlbnQnKSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldC5maXJzdEVsZW1lbnRDaGlsZCl7XG4gICAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIH1cbiAgICAgIF90aGlzLl9zaG93KCRlbGVtLnBhcmVudCgnbGknKSk7XG5cbiAgICAgIGlmKF90aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrKXtcbiAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAkYm9keS5vZmYoJy56Zi5kcmlsbGRvd24nKS5vbignY2xpY2suemYuZHJpbGxkb3duJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBfdGhpcy4kZWxlbWVudFswXSB8fCAkLmNvbnRhaW5zKF90aGlzLiRlbGVtZW50WzBdLCBlLnRhcmdldCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF90aGlzLl9oaWRlQWxsKCk7XG4gICAgICAgICAgJGJvZHkub2ZmKCcuemYuZHJpbGxkb3duJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgdG8gdGhlIG1lbnUgZWxlbWVudC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLnNjcm9sbFRvcCl7XG4gICAgICB0aGlzLl9iaW5kSGFuZGxlciA9IHRoaXMuX3Njcm9sbFRvcC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy4kZWxlbWVudC5vbignb3Blbi56Zi5kcmlsbGRvd24gaGlkZS56Zi5kcmlsbGRvd24gY2xvc2UuemYuZHJpbGxkb3duIGNsb3NlZC56Zi5kcmlsbGRvd24nLHRoaXMuX2JpbmRIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy4kZWxlbWVudC5vbignbXV0YXRlbWUuemYudHJpZ2dlcicsIHRoaXMuX3Jlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gVG9wIG9mIEVsZW1lbnQgb3IgZGF0YS1zY3JvbGwtdG9wLWVsZW1lbnRcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBmaXJlcyBEcmlsbGRvd24jc2Nyb2xsbWVcbiAgICovXG4gIF9zY3JvbGxUb3AoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgJHNjcm9sbFRvcEVsZW1lbnQgPSBfdGhpcy5vcHRpb25zLnNjcm9sbFRvcEVsZW1lbnQhPScnPyQoX3RoaXMub3B0aW9ucy5zY3JvbGxUb3BFbGVtZW50KTpfdGhpcy4kZWxlbWVudCxcbiAgICAgICAgc2Nyb2xsUG9zID0gcGFyc2VJbnQoJHNjcm9sbFRvcEVsZW1lbnQub2Zmc2V0KCkudG9wK190aGlzLm9wdGlvbnMuc2Nyb2xsVG9wT2Zmc2V0LCAxMCk7XG4gICAgJCgnaHRtbCwgYm9keScpLnN0b3AodHJ1ZSkuYW5pbWF0ZSh7IHNjcm9sbFRvcDogc2Nyb2xsUG9zIH0sIF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24sIF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uRWFzaW5nLGZ1bmN0aW9uKCl7XG4gICAgICAvKipcbiAgICAgICAgKiBGaXJlcyBhZnRlciB0aGUgbWVudSBoYXMgc2Nyb2xsZWRcbiAgICAgICAgKiBAZXZlbnQgRHJpbGxkb3duI3Njcm9sbG1lXG4gICAgICAgICovXG4gICAgICBpZih0aGlzPT09JCgnaHRtbCcpWzBdKV90aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3Njcm9sbG1lLnpmLmRyaWxsZG93bicpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMga2V5ZG93biBldmVudCBsaXN0ZW5lciB0byBgbGlgJ3MgaW4gdGhlIG1lbnUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfa2V5Ym9hcmRFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJG1lbnVJdGVtcy5hZGQodGhpcy4kZWxlbWVudC5maW5kKCcuanMtZHJpbGxkb3duLWJhY2sgPiBhLCAuaXMtc3VibWVudS1wYXJlbnQtaXRlbSA+IGEnKSkub24oJ2tleWRvd24uemYuZHJpbGxkb3duJywgZnVuY3Rpb24oZSl7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpLFxuICAgICAgICAgICRlbGVtZW50cyA9ICRlbGVtZW50LnBhcmVudCgnbGknKS5wYXJlbnQoJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJ2EnKSxcbiAgICAgICAgICAkcHJldkVsZW1lbnQsXG4gICAgICAgICAgJG5leHRFbGVtZW50O1xuXG4gICAgICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICRwcmV2RWxlbWVudCA9ICRlbGVtZW50cy5lcShNYXRoLm1heCgwLCBpLTEpKTtcbiAgICAgICAgICAkbmV4dEVsZW1lbnQgPSAkZWxlbWVudHMuZXEoTWF0aC5taW4oaSsxLCAkZWxlbWVudHMubGVuZ3RoLTEpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBLZXlib2FyZC5oYW5kbGVLZXkoZSwgJ0RyaWxsZG93bicsIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCRlbGVtZW50LmlzKF90aGlzLiRzdWJtZW51QW5jaG9ycykpIHtcbiAgICAgICAgICAgIF90aGlzLl9zaG93KCRlbGVtZW50LnBhcmVudCgnbGknKSk7XG4gICAgICAgICAgICAkZWxlbWVudC5wYXJlbnQoJ2xpJykub25lKHRyYW5zaXRpb25lbmQoJGVsZW1lbnQpLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAkZWxlbWVudC5wYXJlbnQoJ2xpJykuZmluZCgndWwgbGkgYScpLm5vdCgnLmpzLWRyaWxsZG93bi1iYWNrIGEnKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlvdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIF90aGlzLl9oaWRlKCRlbGVtZW50LnBhcmVudCgnbGknKS5wYXJlbnQoJ3VsJykpO1xuICAgICAgICAgICRlbGVtZW50LnBhcmVudCgnbGknKS5wYXJlbnQoJ3VsJykub25lKHRyYW5zaXRpb25lbmQoJGVsZW1lbnQpLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJGVsZW1lbnQucGFyZW50KCdsaScpLnBhcmVudCgndWwnKS5wYXJlbnQoJ2xpJykuY2hpbGRyZW4oJ2EnKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRwcmV2RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIC8vIERvbid0IHRhcCBmb2N1cyBvbiBmaXJzdCBlbGVtZW50IGluIHJvb3QgdWxcbiAgICAgICAgICByZXR1cm4gISRlbGVtZW50LmlzKF90aGlzLiRlbGVtZW50LmZpbmQoJz4gbGk6Zmlyc3QtY2hpbGQgPiBhJykpO1xuICAgICAgICB9LFxuICAgICAgICBkb3duOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkbmV4dEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAvLyBEb24ndCB0YXAgZm9jdXMgb24gbGFzdCBlbGVtZW50IGluIHJvb3QgdWxcbiAgICAgICAgICByZXR1cm4gISRlbGVtZW50LmlzKF90aGlzLiRlbGVtZW50LmZpbmQoJz4gbGk6bGFzdC1jaGlsZCA+IGEnKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBEb24ndCBjbG9zZSBvbiBlbGVtZW50IGluIHJvb3QgdWxcbiAgICAgICAgICBpZiAoISRlbGVtZW50LmlzKF90aGlzLiRlbGVtZW50LmZpbmQoJz4gbGkgPiBhJykpKSB7XG4gICAgICAgICAgICBfdGhpcy5faGlkZSgkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSk7XG4gICAgICAgICAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5zaWJsaW5ncygnYScpLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5wYXJlbnRMaW5rICYmICRlbGVtZW50LmF0dHIoJ2hyZWYnKSkgeyAvLyBMaW5rIHdpdGggaHJlZlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoISRlbGVtZW50LmlzKF90aGlzLiRtZW51SXRlbXMpKSB7IC8vIG5vdCBtZW51IGl0ZW0gbWVhbnMgYmFjayBidXR0b25cbiAgICAgICAgICAgIF90aGlzLl9oaWRlKCRlbGVtZW50LnBhcmVudCgnbGknKS5wYXJlbnQoJ3VsJykpO1xuICAgICAgICAgICAgJGVsZW1lbnQucGFyZW50KCdsaScpLnBhcmVudCgndWwnKS5vbmUodHJhbnNpdGlvbmVuZCgkZWxlbWVudCksIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQucGFyZW50KCdsaScpLnBhcmVudCgndWwnKS5wYXJlbnQoJ2xpJykuY2hpbGRyZW4oJ2EnKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCRlbGVtZW50LmlzKF90aGlzLiRzdWJtZW51QW5jaG9ycykpIHsgLy8gU3ViIG1lbnUgaXRlbVxuICAgICAgICAgICAgX3RoaXMuX3Nob3coJGVsZW1lbnQucGFyZW50KCdsaScpKTtcbiAgICAgICAgICAgICRlbGVtZW50LnBhcmVudCgnbGknKS5vbmUodHJhbnNpdGlvbmVuZCgkZWxlbWVudCksIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICRlbGVtZW50LnBhcmVudCgnbGknKS5maW5kKCd1bCBsaSBhJykubm90KCcuanMtZHJpbGxkb3duLWJhY2sgYScpLmZpcnN0KCkuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVkOiBmdW5jdGlvbihwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7IC8vIGVuZCBrZXlib2FyZEFjY2Vzc1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbGwgb3BlbiBlbGVtZW50cywgYW5kIHJldHVybnMgdG8gcm9vdCBtZW51LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQGZpcmVzIERyaWxsZG93biNjbG9zZVxuICAgKiBAZmlyZXMgRHJpbGxkb3duI2Nsb3NlZFxuICAgKi9cbiAgX2hpZGVBbGwoKSB7XG4gICAgdmFyICRlbGVtID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXMtZHJpbGxkb3duLXN1Ym1lbnUuaXMtYWN0aXZlJylcbiAgICAkZWxlbS5hZGRDbGFzcygnaXMtY2xvc2luZycpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvSGVpZ2h0KSB7XG4gICAgICBjb25zdCBjYWxjSGVpZ2h0ID0gJGVsZW0ucGFyZW50KCkuY2xvc2VzdCgndWwnKS5kYXRhKCdjYWxjSGVpZ2h0Jyk7XG4gICAgICB0aGlzLiR3cmFwcGVyLmNzcyh7IGhlaWdodDogY2FsY0hlaWdodCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBtZW51IGlzIGNsb3NpbmcuXG4gICAgICogQGV2ZW50IERyaWxsZG93biNjbG9zZVxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignY2xvc2UuemYuZHJpbGxkb3duJyk7XG5cbiAgICAkZWxlbS5vbmUodHJhbnNpdGlvbmVuZCgkZWxlbSksICgpID0+IHtcbiAgICAgICRlbGVtLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUgaXMtY2xvc2luZycpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgZnVsbHkgY2xvc2VkLlxuICAgICAgICogQGV2ZW50IERyaWxsZG93biNjbG9zZWRcbiAgICAgICAqL1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjbG9zZWQuemYuZHJpbGxkb3duJyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lciBmb3IgZWFjaCBgYmFja2AgYnV0dG9uLCBhbmQgY2xvc2VzIG9wZW4gbWVudXMuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAZmlyZXMgRHJpbGxkb3duI2JhY2tcbiAgICogQHBhcmFtIHtqUXVlcnl9ICRlbGVtIC0gdGhlIGN1cnJlbnQgc3ViLW1lbnUgdG8gYWRkIGBiYWNrYCBldmVudC5cbiAgICovXG4gIF9iYWNrKCRlbGVtKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAkZWxlbS5vZmYoJ2NsaWNrLnpmLmRyaWxsZG93bicpO1xuICAgICRlbGVtLmNoaWxkcmVuKCcuanMtZHJpbGxkb3duLWJhY2snKVxuICAgICAgLm9uKCdjbGljay56Zi5kcmlsbGRvd24nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdXNldXAgb24gYmFjaycpO1xuICAgICAgICBfdGhpcy5faGlkZSgkZWxlbSk7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBwYXJlbnQgc3VibWVudSwgY2FsbCBzaG93XG4gICAgICAgIGxldCBwYXJlbnRTdWJNZW51ID0gJGVsZW0ucGFyZW50KCdsaScpLnBhcmVudCgndWwnKS5wYXJlbnQoJ2xpJyk7XG4gICAgICAgIGlmIChwYXJlbnRTdWJNZW51Lmxlbmd0aCkge1xuICAgICAgICAgIF90aGlzLl9zaG93KHBhcmVudFN1Yk1lbnUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVyIHRvIG1lbnUgaXRlbXMgdy9vIHN1Ym1lbnVzIHRvIGNsb3NlIG9wZW4gbWVudXMgb24gY2xpY2suXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX21lbnVMaW5rRXZlbnRzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy4kbWVudUl0ZW1zLm5vdCgnLmlzLWRyaWxsZG93bi1zdWJtZW51LXBhcmVudCcpXG4gICAgICAgIC5vZmYoJ2NsaWNrLnpmLmRyaWxsZG93bicpXG4gICAgICAgIC5vbignY2xpY2suemYuZHJpbGxkb3duJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgX3RoaXMuX2hpZGVBbGwoKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIENTUyBjbGFzc2VzIGZvciBzdWJtZW51IHRvIHNob3cgaXQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsZW0gLSB0aGUgdGFyZ2V0IHN1Ym1lbnUgKGB1bGAgdGFnKVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRyaWdnZXIgLSB0cmlnZ2VyIGRyaWxsZG93biBldmVudFxuICAgKi9cbiAgX3NldFNob3dTdWJNZW51Q2xhc3NlcygkZWxlbSwgdHJpZ2dlcikge1xuICAgICRlbGVtLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJykuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgJGVsZW0ucGFyZW50KCdsaScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICBpZiAodHJpZ2dlciA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdvcGVuLnpmLmRyaWxsZG93bicsIFskZWxlbV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBDU1MgY2xhc3NlcyBmb3Igc3VibWVudSB0byBoaWRlIGl0LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtqUXVlcnl9ICRlbGVtIC0gdGhlIHRhcmdldCBzdWJtZW51IChgdWxgIHRhZylcbiAgICogQHBhcmFtIHtib29sZWFufSB0cmlnZ2VyIC0gdHJpZ2dlciBkcmlsbGRvd24gZXZlbnRcbiAgICovXG4gIF9zZXRIaWRlU3ViTWVudUNsYXNzZXMoJGVsZW0sIHRyaWdnZXIpIHtcbiAgICAkZWxlbS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJykuYWRkQ2xhc3MoJ2ludmlzaWJsZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgJGVsZW0ucGFyZW50KCdsaScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgaWYgKHRyaWdnZXIgPT09IHRydWUpIHtcbiAgICAgICRlbGVtLnRyaWdnZXIoJ2hpZGUuemYuZHJpbGxkb3duJywgWyRlbGVtXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgc3BlY2lmaWMgZHJpbGxkb3duIChzdWIpbWVudSBubyBtYXR0ZXIgd2hpY2ggKHN1YiltZW51IGluIGl0IGlzIGN1cnJlbnRseSB2aXNpYmxlLlxuICAgKiBDb21wYXJlZCB0byBfc2hvdygpIHRoaXMgbGV0cyB5b3UganVtcCBpbnRvIGFueSBzdWJtZW51IHdpdGhvdXQgY2xpY2tpbmcgdGhyb3VnaCBldmVyeSBzdWJtZW51IG9uIHRoZSB3YXkgdG8gaXQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAZmlyZXMgRHJpbGxkb3duI29wZW5cbiAgICogQHBhcmFtIHtqUXVlcnl9ICRlbGVtIC0gdGhlIHRhcmdldCAoc3ViKW1lbnUgKGB1bGAgdGFnKVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9Gb2N1cyAtIGlmIHRydWUgdGhlIGZpcnN0IGxpbmsgaW4gdGhlIHRhcmdldCAoc3ViKW1lbnUgZ2V0cyBhdXRvIGZvY3VzZWRcbiAgICovXG4gIF9zaG93TWVudSgkZWxlbSwgYXV0b0ZvY3VzKSB7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gUmVzZXQgZHJpbGxkb3duXG4gICAgdmFyICRleHBhbmRlZFN1Ym1lbnVzID0gdGhpcy4kZWxlbWVudC5maW5kKCdsaVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSA+IHVsW2RhdGEtc3VibWVudV0nKTtcbiAgICAkZXhwYW5kZWRTdWJtZW51cy5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBfdGhpcy5fc2V0SGlkZVN1Yk1lbnVDbGFzc2VzKCQodGhpcykpO1xuICAgIH0pO1xuXG4gICAgLy8gU2F2ZSB0aGUgbWVudSBhcyB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBvbmUuXG4gICAgdGhpcy4kY3VycmVudE1lbnUgPSAkZWxlbTtcblxuICAgIC8vIElmIHRhcmdldCBtZW51IGlzIHJvb3QsIGZvY3VzIGZpcnN0IGxpbmsgJiBleGl0XG4gICAgaWYgKCRlbGVtLmlzKCdbZGF0YS1kcmlsbGRvd25dJykpIHtcbiAgICAgIGlmIChhdXRvRm9jdXMgPT09IHRydWUpICRlbGVtLmZpbmQoJ2xpW3JvbGU9XCJ0cmVlaXRlbVwiXSA+IGEnKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9IZWlnaHQpIHRoaXMuJHdyYXBwZXIuY3NzKCdoZWlnaHQnLCAkZWxlbS5kYXRhKCdjYWxjSGVpZ2h0JykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZpbmQgYWxsIHN1Ym1lbnVzIG9uIHdheSB0byByb290IGluY2wuIHRoZSBlbGVtZW50IGl0c2VsZlxuICAgIHZhciAkc3VibWVudXMgPSAkZWxlbS5jaGlsZHJlbigpLmZpcnN0KCkucGFyZW50c1VudGlsKCdbZGF0YS1kcmlsbGRvd25dJywgJ1tkYXRhLXN1Ym1lbnVdJyk7XG5cbiAgICAvLyBPcGVuIHRhcmdldCBtZW51IGFuZCBhbGwgc3VibWVudXMgb24gaXRzIHdheSB0byByb290XG4gICAgJHN1Ym1lbnVzLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgLy8gVXBkYXRlIGhlaWdodCBvZiBmaXJzdCBjaGlsZCAodGFyZ2V0IG1lbnUpIGlmIGF1dG9IZWlnaHQgb3B0aW9uIHRydWVcbiAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfdGhpcy5vcHRpb25zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgX3RoaXMuJHdyYXBwZXIuY3NzKCdoZWlnaHQnLCAkKHRoaXMpLmRhdGEoJ2NhbGNIZWlnaHQnKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0xhc3RDaGlsZCA9IGluZGV4ID09ICRzdWJtZW51cy5sZW5ndGggLSAxO1xuXG4gICAgICAvLyBBZGQgdHJhbnNpdGlvbnNlbmQgbGlzdGVuZXIgdG8gbGFzdCBjaGlsZCAocm9vdCBkdWUgdG8gcmV2ZXJzZSBvcmRlcikgdG8gb3BlbiB0YXJnZXQgbWVudSdzIGZpcnN0IGxpbmtcbiAgICAgIC8vIExhc3QgY2hpbGQgbWFrZXMgc3VyZSB0aGUgZXZlbnQgZ2V0cyBhbHdheXMgdHJpZ2dlcmVkIGV2ZW4gaWYgZ29pbmcgdGhyb3VnaCBzZXZlcmFsIG1lbnVzXG4gICAgICBpZiAoaXNMYXN0Q2hpbGQgPT09IHRydWUpIHtcbiAgICAgICAgJCh0aGlzKS5vbmUodHJhbnNpdGlvbmVuZCgkKHRoaXMpKSwgKCkgPT4ge1xuICAgICAgICAgIGlmIChhdXRvRm9jdXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICRlbGVtLmZpbmQoJ2xpW3JvbGU9XCJ0cmVlaXRlbVwiXSA+IGEnKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuX3NldFNob3dTdWJNZW51Q2xhc3NlcygkKHRoaXMpLCBpc0xhc3RDaGlsZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBzdWJtZW51LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQGZpcmVzIERyaWxsZG93biNvcGVuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbSAtIHRoZSBjdXJyZW50IGVsZW1lbnQgd2l0aCBhIHN1Ym1lbnUgdG8gb3BlbiwgaS5lLiB0aGUgYGxpYCB0YWcuXG4gICAqL1xuICBfc2hvdygkZWxlbSkge1xuICAgIGNvbnN0ICRzdWJtZW51ID0gJGVsZW0uY2hpbGRyZW4oJ1tkYXRhLXN1Ym1lbnVdJyk7XG5cbiAgICAkZWxlbS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICB0aGlzLiRjdXJyZW50TWVudSA9ICRzdWJtZW51O1xuICAgICRzdWJtZW51LmFkZENsYXNzKCdpcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJykuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvSGVpZ2h0KSB7XG4gICAgICB0aGlzLiR3cmFwcGVyLmNzcyh7IGhlaWdodDogJHN1Ym1lbnUuZGF0YSgnY2FsY0hlaWdodCcpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHN1Ym1lbnUgaGFzIG9wZW5lZC5cbiAgICAgKiBAZXZlbnQgRHJpbGxkb3duI29wZW5cbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ29wZW4uemYuZHJpbGxkb3duJywgWyRlbGVtXSk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgYSBzdWJtZW51XG4gICAqIEBmdW5jdGlvblxuICAgKiBAZmlyZXMgRHJpbGxkb3duI2hpZGVcbiAgICogQHBhcmFtIHtqUXVlcnl9ICRlbGVtIC0gdGhlIGN1cnJlbnQgc3ViLW1lbnUgdG8gaGlkZSwgaS5lLiB0aGUgYHVsYCB0YWcuXG4gICAqL1xuICBfaGlkZSgkZWxlbSkge1xuICAgIGlmKHRoaXMub3B0aW9ucy5hdXRvSGVpZ2h0KSB0aGlzLiR3cmFwcGVyLmNzcyh7aGVpZ2h0OiRlbGVtLnBhcmVudCgpLmNsb3Nlc3QoJ3VsJykuZGF0YSgnY2FsY0hlaWdodCcpfSk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAkZWxlbS5wYXJlbnQoJ2xpJykuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAkZWxlbS5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICRlbGVtLmFkZENsYXNzKCdpcy1jbG9zaW5nJylcbiAgICAgICAgIC5vbmUodHJhbnNpdGlvbmVuZCgkZWxlbSksIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICRlbGVtLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUgaXMtY2xvc2luZycpO1xuICAgICAgICAgICAkZWxlbS5ibHVyKCkuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgICAgICAgfSk7XG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgc3VibWVudSBoYXMgY2xvc2VkLlxuICAgICAqIEBldmVudCBEcmlsbGRvd24jaGlkZVxuICAgICAqL1xuICAgICRlbGVtLnRyaWdnZXIoJ2hpZGUuemYuZHJpbGxkb3duJywgWyRlbGVtXSk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCB0aGUgbmVzdGVkIG1lbnVzIHRvIGNhbGN1bGF0ZSB0aGUgbWluLWhlaWdodCwgYW5kIG1heC13aWR0aCBmb3IgdGhlIG1lbnUuXG4gICAqIFByZXZlbnRzIGNvbnRlbnQganVtcGluZy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0TWF4RGltcygpIHtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gMCwgcmVzdWx0ID0ge30sIF90aGlzID0gdGhpcztcblxuICAgIC8vIFJlY2FsY3VsYXRlIG1lbnUgaGVpZ2h0cyBhbmQgdG90YWwgbWF4IGhlaWdodFxuICAgIHRoaXMuJHN1Ym1lbnVzLmFkZCh0aGlzLiRlbGVtZW50KS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgbnVtT2ZFbGVtcyA9ICQodGhpcykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xuICAgICAgdmFyIGhlaWdodCA9IEJveC5HZXREaW1lbnNpb25zKHRoaXMpLmhlaWdodDtcblxuICAgICAgbWF4SGVpZ2h0ID0gaGVpZ2h0ID4gbWF4SGVpZ2h0ID8gaGVpZ2h0IDogbWF4SGVpZ2h0O1xuXG4gICAgICBpZihfdGhpcy5vcHRpb25zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgJCh0aGlzKS5kYXRhKCdjYWxjSGVpZ2h0JyxoZWlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvSGVpZ2h0KVxuICAgICAgcmVzdWx0WydoZWlnaHQnXSA9IHRoaXMuJGN1cnJlbnRNZW51LmRhdGEoJ2NhbGNIZWlnaHQnKTtcbiAgICBlbHNlXG4gICAgICByZXN1bHRbJ21pbi1oZWlnaHQnXSA9IGAke21heEhlaWdodH1weGA7XG5cbiAgICByZXN1bHRbJ21heC13aWR0aCddID0gYCR7dGhpcy4kZWxlbWVudFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aH1weGA7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBEcmlsbGRvd24gTWVudVxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIGlmKHRoaXMub3B0aW9ucy5zY3JvbGxUb3ApIHRoaXMuJGVsZW1lbnQub2ZmKCcuemYuZHJpbGxkb3duJyx0aGlzLl9iaW5kSGFuZGxlcik7XG4gICAgdGhpcy5faGlkZUFsbCgpO1xuXHQgIHRoaXMuJGVsZW1lbnQub2ZmKCdtdXRhdGVtZS56Zi50cmlnZ2VyJyk7XG4gICAgTmVzdC5CdXJuKHRoaXMuJGVsZW1lbnQsICdkcmlsbGRvd24nKTtcbiAgICB0aGlzLiRlbGVtZW50LnVud3JhcCgpXG4gICAgICAgICAgICAgICAgIC5maW5kKCcuanMtZHJpbGxkb3duLWJhY2ssIC5pcy1zdWJtZW51LXBhcmVudC1pdGVtJykucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgLmVuZCgpLmZpbmQoJy5pcy1hY3RpdmUsIC5pcy1jbG9zaW5nLCAuaXMtZHJpbGxkb3duLXN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlIGlzLWNsb3NpbmcgaXMtZHJpbGxkb3duLXN1Ym1lbnUnKVxuICAgICAgICAgICAgICAgICAuZW5kKCkuZmluZCgnW2RhdGEtc3VibWVudV0nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCByb2xlJyk7XG4gICAgdGhpcy4kc3VibWVudUFuY2hvcnMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykub2ZmKCcuemYuZHJpbGxkb3duJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWlzLXBhcmVudC1saW5rXScpLmRldGFjaCgpO1xuICAgIHRoaXMuJHN1Ym1lbnVzLnJlbW92ZUNsYXNzKCdkcmlsbGRvd24tc3VibWVudS1jb3Zlci1wcmV2aW91cyBpbnZpc2libGUnKTtcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciAkbGluayA9ICQodGhpcyk7XG4gICAgICAkbGluay5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgaWYoJGxpbmsuZGF0YSgnc2F2ZWRIcmVmJykpe1xuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgJGxpbmsuZGF0YSgnc2F2ZWRIcmVmJykpLnJlbW92ZURhdGEoJ3NhdmVkSHJlZicpO1xuICAgICAgfWVsc2V7IHJldHVybjsgfVxuICAgIH0pO1xuICB9O1xufVxuXG5EcmlsbGRvd24uZGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBEcmlsbGRvd25zIGRlcGVuZCBvbiBzdHlsZXMgaW4gb3JkZXIgdG8gZnVuY3Rpb24gcHJvcGVybHk7IGluIHRoZSBkZWZhdWx0IGJ1aWxkIG9mIEZvdW5kYXRpb24gdGhlc2UgYXJlXG4gICAqIG9uIHRoZSBgZHJpbGxkb3duYCBjbGFzcy4gVGhpcyBvcHRpb24gYXV0by1hcHBsaWVzIHRoaXMgY2xhc3MgdG8gdGhlIGRyaWxsZG93biB1cG9uIGluaXRpYWxpemF0aW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBhdXRvQXBwbHlDbGFzczogdHJ1ZSxcbiAgLyoqXG4gICAqIE1hcmt1cCB1c2VkIGZvciBKUyBnZW5lcmF0ZWQgYmFjayBidXR0b24uIFByZXBlbmRlZCAgb3IgYXBwZW5kZWQgKHNlZSBiYWNrQnV0dG9uUG9zaXRpb24pIHRvIHN1Ym1lbnUgbGlzdHMgYW5kIGRlbGV0ZWQgb24gYGRlc3Ryb3lgIG1ldGhvZCwgJ2pzLWRyaWxsZG93bi1iYWNrJyBjbGFzcyByZXF1aXJlZC4gUmVtb3ZlIHRoZSBiYWNrc2xhc2ggKGBcXGApIGlmIGNvcHkgYW5kIHBhc3RpbmcuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJzxsaSBjbGFzcz1cImpzLWRyaWxsZG93bi1iYWNrXCI+PGEgdGFiaW5kZXg9XCIwXCI+QmFjazwvYT48L2xpPidcbiAgICovXG4gIGJhY2tCdXR0b246ICc8bGkgY2xhc3M9XCJqcy1kcmlsbGRvd24tYmFja1wiPjxhIHRhYmluZGV4PVwiMFwiPkJhY2s8L2E+PC9saT4nLFxuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGJhY2sgYnV0dG9uIGVpdGhlciBhdCB0aGUgdG9wIG9yIGJvdHRvbSBvZiBkcmlsbGRvd24gc3VibWVudXMuIENhbiBiZSBgJ2xlZnQnYCBvciBgJ2JvdHRvbSdgLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0IHRvcFxuICAgKi9cbiAgYmFja0J1dHRvblBvc2l0aW9uOiAndG9wJyxcbiAgLyoqXG4gICAqIE1hcmt1cCB1c2VkIHRvIHdyYXAgZHJpbGxkb3duIG1lbnUuIFVzZSBhIGNsYXNzIG5hbWUgZm9yIGluZGVwZW5kZW50IHN0eWxpbmc7IHRoZSBKUyBhcHBsaWVkIGNsYXNzOiBgaXMtZHJpbGxkb3duYCBpcyByZXF1aXJlZC4gUmVtb3ZlIHRoZSBiYWNrc2xhc2ggKGBcXGApIGlmIGNvcHkgYW5kIHBhc3RpbmcuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJzxkaXY+PC9kaXY+J1xuICAgKi9cbiAgd3JhcHBlcjogJzxkaXY+PC9kaXY+JyxcbiAgLyoqXG4gICAqIEFkZHMgdGhlIHBhcmVudCBsaW5rIHRvIHRoZSBzdWJtZW51LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcGFyZW50TGluazogZmFsc2UsXG4gIC8qKlxuICAgKiBBbGxvdyB0aGUgbWVudSB0byByZXR1cm4gdG8gcm9vdCBsaXN0IG9uIGJvZHkgY2xpY2suXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjbG9zZU9uQ2xpY2s6IGZhbHNlLFxuICAvKipcbiAgICogQWxsb3cgdGhlIG1lbnUgdG8gYXV0byBhZGp1c3QgaGVpZ2h0LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYXV0b0hlaWdodDogZmFsc2UsXG4gIC8qKlxuICAgKiBBbmltYXRlIHRoZSBhdXRvIGFkanVzdCBoZWlnaHQuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBhbmltYXRlSGVpZ2h0OiBmYWxzZSxcbiAgLyoqXG4gICAqIFNjcm9sbCB0byB0aGUgdG9wIG9mIHRoZSBtZW51IGFmdGVyIG9wZW5pbmcgYSBzdWJtZW51IG9yIG5hdmlnYXRpbmcgYmFjayB1c2luZyB0aGUgbWVudSBiYWNrIGJ1dHRvblxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgc2Nyb2xsVG9wOiBmYWxzZSxcbiAgLyoqXG4gICAqIFN0cmluZyBqcXVlcnkgc2VsZWN0b3IgKGZvciBleGFtcGxlICdib2R5Jykgb2YgZWxlbWVudCB0byB0YWtlIG9mZnNldCgpLnRvcCBmcm9tLCBpZiBlbXB0eSBzdHJpbmcgdGhlIGRyaWxsZG93biBtZW51IG9mZnNldCgpLnRvcCBpcyB0YWtlblxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcnXG4gICAqL1xuICBzY3JvbGxUb3BFbGVtZW50OiAnJyxcbiAgLyoqXG4gICAqIFNjcm9sbFRvcCBvZmZzZXRcbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBzY3JvbGxUb3BPZmZzZXQ6IDAsXG4gIC8qKlxuICAgKiBTY3JvbGwgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgNTAwXG4gICAqL1xuICBhbmltYXRpb25EdXJhdGlvbjogNTAwLFxuICAvKipcbiAgICogU2Nyb2xsIGFuaW1hdGlvbiBlYXNpbmcuIENhbiBiZSBgJ3N3aW5nJ2Agb3IgYCdsaW5lYXInYC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2FuaW1hdGV8SlF1ZXJ5IGFuaW1hdGV9XG4gICAqIEBkZWZhdWx0ICdzd2luZydcbiAgICovXG4gIGFuaW1hdGlvbkVhc2luZzogJ3N3aW5nJ1xuICAvLyBob2xkT3BlbjogZmFsc2Vcbn07XG5cbmV4cG9ydCB7RHJpbGxkb3dufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
