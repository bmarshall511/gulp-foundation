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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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
         * Drilldown module.
         * @module foundation.drilldown
         * @requires foundation.util.keyboard
         * @requires foundation.util.nest
         * @requires foundation.util.box
         */


        var Drilldown =
        /*#__PURE__*/
        function (_Plugin) {
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
                  e.stopImmediatePropagation();
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
                this.$element.on('open.zf.drilldown hide.zf.drilldown closed.zf.drilldown', this._bindHandler);
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

                    e.stopImmediatePropagation();
                  }
                });
              }); // end keyboardAccess
            }
            /**
             * Closes all open elements, and returns to root menu.
             * @function
             * @fires Drilldown#closed
             */

          }, {
            key: "_hideAll",
            value: function _hideAll() {
              var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');
              if (this.options.autoHeight) this.$wrapper.css({
                height: $elem.parent().closest('ul').data('calcHeight')
              });
              $elem.one(Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["transitionend"])($elem), function (e) {
                $elem.removeClass('is-active is-closing');
              });
              /**
               * Fires when the menu is fully closed.
               * @event Drilldown#closed
               */

              this.$element.trigger('closed.zf.drilldown');
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
                e.stopImmediatePropagation(); // console.log('mouseup on back');

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
                // e.stopImmediatePropagation();
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
           * @type {boolian}
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
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.drilldown.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uZHJpbGxkb3duLmpzIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9qcy9mb3VuZGF0aW9uLmRyaWxsZG93bi5qcyIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wialF1ZXJ5XCJdLFwiYW1kXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCJ9Il0sIm5hbWVzIjpbIkZvdW5kYXRpb24iLCJEcmlsbGRvd24iLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJLZXlib2FyZCIsIk5lc3QiLCJHZXRZb0RpZ2l0cyIsIl90aGlzIiwiJGxpbmsiLCIkc3ViIiwiJG1lbnUiLCIkYmFjayIsImNvbnNvbGUiLCIkZWxlbSIsImUiLCIkYm9keSIsIiRzY3JvbGxUb3BFbGVtZW50Iiwic2Nyb2xsUG9zIiwicGFyc2VJbnQiLCJzY3JvbGxUb3AiLCIkZWxlbWVudCIsIiRlbGVtZW50cyIsIiRwcmV2RWxlbWVudCIsIk1hdGgiLCJpIiwiJG5leHRFbGVtZW50IiwibmV4dCIsInRyYW5zaXRpb25lbmQiLCJwcmV2aW91cyIsInNldFRpbWVvdXQiLCJ1cCIsImRvd24iLCJjbG9zZSIsIm9wZW4iLCJoYW5kbGVkIiwiaGVpZ2h0IiwicGFyZW50U3ViTWVudSIsInRyaWdnZXIiLCJhdXRvRm9jdXMiLCIkZXhwYW5kZWRTdWJtZW51cyIsIiRzdWJtZW51cyIsImluZGV4IiwiaXNMYXN0Q2hpbGQiLCIkc3VibWVudSIsIm1heEhlaWdodCIsInJlc3VsdCIsIm51bU9mRWxlbXMiLCJCb3giLCJQbHVnaW4iLCJhdXRvQXBwbHlDbGFzcyIsImJhY2tCdXR0b24iLCJiYWNrQnV0dG9uUG9zaXRpb24iLCJ3cmFwcGVyIiwicGFyZW50TGluayIsImNsb3NlT25DbGljayIsImF1dG9IZWlnaHQiLCJhbmltYXRlSGVpZ2h0Iiwic2Nyb2xsVG9wRWxlbWVudCIsInNjcm9sbFRvcE9mZnNldCIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYW5pbWF0aW9uRWFzaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFNBQUEsZ0NBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx3QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsdUJBQUEsRUFBQSw0QkFBQSxFQUFBLHdCQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsc0JBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDRCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsd0JBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxzQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLHNCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsUUFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLDRDQUFBLEVBQUEsZ0RBQUEsRUFBQSxxREFBQSxFQUFBLGlEQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEs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bkI7Ozs7OztBQU1BQyxVQUFBQSxZQUFZLEVBM0NPLEtBQUE7O0FBNENuQjs7Ozs7O0FBTUFDLFVBQUFBLFVBQVUsRUFsRFMsS0FBQTs7QUFtRG5COzs7Ozs7QUFNQUMsVUFBQUEsYUFBYSxFQXpETSxLQUFBOztBQTBEbkI7Ozs7OztBQU1BckMsVUFBQUEsU0FBUyxFQWhFVSxLQUFBOztBQWlFbkI7Ozs7OztBQU1Bc0MsVUFBQUEsZ0JBQWdCLEVBdkVHLEVBQUE7O0FBd0VuQjs7Ozs7O0FBTUFDLFVBQUFBLGVBQWUsRUE5RUksQ0FBQTs7QUErRW5COzs7Ozs7QUFNQUMsVUFBQUEsaUJBQWlCLEVBckZFLEdBQUE7O0FBc0ZuQjs7Ozs7OztBQU9BQyxVQUFBQSxlQUFlLEVBN0ZJLE9BQUEsQ0E4Rm5COztBQTlGbUIsU0FBckI1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaGlCQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTFVBO0NBVkEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3VuZGF0aW9uLWRyaWxsZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwuYm94XCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5uZXN0XCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwuYm94XCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5uZXN0XCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24uZHJpbGxkb3duXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5ib3hcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmRyaWxsZG93blwiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwuYm94XCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5uZXN0XCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9ib3hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2tleWJvYXJkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9uZXN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IERyaWxsZG93biB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uZHJpbGxkb3duJztcbkZvdW5kYXRpb24ucGx1Z2luKERyaWxsZG93biwgJ0RyaWxsZG93bicpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBEcmlsbGRvd24gfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgTmVzdCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm5lc3QnO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMsIHRyYW5zaXRpb25lbmQgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5ib3gnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcblxuLyoqXG4gKiBEcmlsbGRvd24gbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLmRyaWxsZG93blxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5rZXlib2FyZFxuICogQHJlcXVpcmVzIGZvdW5kYXRpb24udXRpbC5uZXN0XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLmJveFxuICovXG5cbmNsYXNzIERyaWxsZG93biBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIGEgZHJpbGxkb3duIG1lbnUuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBEcmlsbGRvd25cbiAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIG1ha2UgaW50byBhbiBhY2NvcmRpb24gbWVudS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRHJpbGxkb3duLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnRHJpbGxkb3duJzsgLy8gaWU5IGJhY2sgY29tcGF0XG5cbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICBLZXlib2FyZC5yZWdpc3RlcignRHJpbGxkb3duJywge1xuICAgICAgJ0VOVEVSJzogJ29wZW4nLFxuICAgICAgJ1NQQUNFJzogJ29wZW4nLFxuICAgICAgJ0FSUk9XX1JJR0hUJzogJ25leHQnLFxuICAgICAgJ0FSUk9XX1VQJzogJ3VwJyxcbiAgICAgICdBUlJPV19ET1dOJzogJ2Rvd24nLFxuICAgICAgJ0FSUk9XX0xFRlQnOiAncHJldmlvdXMnLFxuICAgICAgJ0VTQ0FQRSc6ICdjbG9zZScsXG4gICAgICAnVEFCJzogJ2Rvd24nLFxuICAgICAgJ1NISUZUX1RBQic6ICd1cCdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgZHJpbGxkb3duIGJ5IGNyZWF0aW5nIGpRdWVyeSBjb2xsZWN0aW9ucyBvZiBlbGVtZW50c1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgTmVzdC5GZWF0aGVyKHRoaXMuJGVsZW1lbnQsICdkcmlsbGRvd24nKTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5hdXRvQXBwbHlDbGFzcykge1xuICAgICAgdGhpcy4kZWxlbWVudC5hZGRDbGFzcygnZHJpbGxkb3duJyk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKHtcbiAgICAgICdyb2xlJzogJ3RyZWUnLFxuICAgICAgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJzogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLiRzdWJtZW51QW5jaG9ycyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnbGkuaXMtZHJpbGxkb3duLXN1Ym1lbnUtcGFyZW50JykuY2hpbGRyZW4oJ2EnKTtcbiAgICB0aGlzLiRzdWJtZW51cyA9IHRoaXMuJHN1Ym1lbnVBbmNob3JzLnBhcmVudCgnbGknKS5jaGlsZHJlbignW2RhdGEtc3VibWVudV0nKS5hdHRyKCdyb2xlJywgJ2dyb3VwJyk7XG4gICAgdGhpcy4kbWVudUl0ZW1zID0gdGhpcy4kZWxlbWVudC5maW5kKCdsaScpLm5vdCgnLmpzLWRyaWxsZG93bi1iYWNrJykuYXR0cigncm9sZScsICd0cmVlaXRlbScpLmZpbmQoJ2EnKTtcblxuICAgIC8vIFNldCB0aGUgbWFpbiBtZW51IGFzIGN1cnJlbnQgYnkgZGVmYXVsdCAodW5sZXNzIGEgc3VibWVudSBpcyBzZWxlY3RlZClcbiAgICAvLyBVc2VkIHRvIHNldCB0aGUgd3JhcHBlciBoZWlnaHQgd2hlbiB0aGUgZHJpbGxkb3duIGlzIGNsb3NlZC9yZW9wZW5lZCBmcm9tIGFueSAoc3ViKW1lbnVcbiAgICB0aGlzLiRjdXJyZW50TWVudSA9IHRoaXMuJGVsZW1lbnQ7XG5cbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ2RhdGEtbXV0YXRlJywgKHRoaXMuJGVsZW1lbnQuYXR0cignZGF0YS1kcmlsbGRvd24nKSB8fCBHZXRZb0RpZ2l0cyg2LCAnZHJpbGxkb3duJykpKTtcblxuICAgIHRoaXMuX3ByZXBhcmVNZW51KCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIHRoaXMuX2tleWJvYXJkRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogcHJlcGFyZXMgZHJpbGxkb3duIG1lbnUgYnkgc2V0dGluZyBhdHRyaWJ1dGVzIHRvIGxpbmtzIGFuZCBlbGVtZW50c1xuICAgKiBzZXRzIGEgbWluIGhlaWdodCB0byBwcmV2ZW50IGNvbnRlbnQganVtcGluZ1xuICAgKiB3cmFwcyB0aGUgZWxlbWVudCBpZiBub3QgYWxyZWFkeSB3cmFwcGVkXG4gICAqIEBwcml2YXRlXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgX3ByZXBhcmVNZW51KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgLy8gaWYoIXRoaXMub3B0aW9ucy5ob2xkT3Blbil7XG4gICAgLy8gICB0aGlzLl9tZW51TGlua0V2ZW50cygpO1xuICAgIC8vIH1cbiAgICB0aGlzLiRzdWJtZW51QW5jaG9ycy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgJGxpbmsgPSAkKHRoaXMpO1xuICAgICAgdmFyICRzdWIgPSAkbGluay5wYXJlbnQoKTtcbiAgICAgIGlmKF90aGlzLm9wdGlvbnMucGFyZW50TGluayl7XG4gICAgICAgICRsaW5rLmNsb25lKCkucHJlcGVuZFRvKCRzdWIuY2hpbGRyZW4oJ1tkYXRhLXN1Ym1lbnVdJykpLndyYXAoJzxsaSBkYXRhLWlzLXBhcmVudC1saW5rIGNsYXNzPVwiaXMtc3VibWVudS1wYXJlbnQtaXRlbSBpcy1zdWJtZW51LWl0ZW0gaXMtZHJpbGxkb3duLXN1Ym1lbnUtaXRlbVwiIHJvbGU9XCJtZW51aXRlbVwiPjwvbGk+Jyk7XG4gICAgICB9XG4gICAgICAkbGluay5kYXRhKCdzYXZlZEhyZWYnLCAkbGluay5hdHRyKCdocmVmJykpLnJlbW92ZUF0dHIoJ2hyZWYnKS5hdHRyKCd0YWJpbmRleCcsIDApO1xuICAgICAgJGxpbmsuY2hpbGRyZW4oJ1tkYXRhLXN1Ym1lbnVdJylcbiAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogMCxcbiAgICAgICAgICAgICdyb2xlJzogJ2dyb3VwJ1xuICAgICAgICAgIH0pO1xuICAgICAgX3RoaXMuX2V2ZW50cygkbGluayk7XG4gICAgfSk7XG4gICAgdGhpcy4kc3VibWVudXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyICRtZW51ID0gJCh0aGlzKSxcbiAgICAgICAgICAkYmFjayA9ICRtZW51LmZpbmQoJy5qcy1kcmlsbGRvd24tYmFjaycpO1xuICAgICAgaWYoISRiYWNrLmxlbmd0aCl7XG4gICAgICAgIHN3aXRjaCAoX3RoaXMub3B0aW9ucy5iYWNrQnV0dG9uUG9zaXRpb24pIHtcbiAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAkbWVudS5hcHBlbmQoX3RoaXMub3B0aW9ucy5iYWNrQnV0dG9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgICAgICRtZW51LnByZXBlbmQoX3RoaXMub3B0aW9ucy5iYWNrQnV0dG9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgYmFja0J1dHRvblBvc2l0aW9uIHZhbHVlICdcIiArIF90aGlzLm9wdGlvbnMuYmFja0J1dHRvblBvc2l0aW9uICsgXCInXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfdGhpcy5fYmFjaygkbWVudSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzdWJtZW51cy5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG4gICAgaWYoIXRoaXMub3B0aW9ucy5hdXRvSGVpZ2h0KSB7XG4gICAgICB0aGlzLiRzdWJtZW51cy5hZGRDbGFzcygnZHJpbGxkb3duLXN1Ym1lbnUtY292ZXItcHJldmlvdXMnKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgYSB3cmFwcGVyIG9uIGVsZW1lbnQgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICBpZighdGhpcy4kZWxlbWVudC5wYXJlbnQoKS5oYXNDbGFzcygnaXMtZHJpbGxkb3duJykpe1xuICAgICAgdGhpcy4kd3JhcHBlciA9ICQodGhpcy5vcHRpb25zLndyYXBwZXIpLmFkZENsYXNzKCdpcy1kcmlsbGRvd24nKTtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5hbmltYXRlSGVpZ2h0KSB0aGlzLiR3cmFwcGVyLmFkZENsYXNzKCdhbmltYXRlLWhlaWdodCcpO1xuICAgICAgdGhpcy4kZWxlbWVudC53cmFwKHRoaXMuJHdyYXBwZXIpO1xuICAgIH1cbiAgICAvLyBzZXQgd3JhcHBlclxuICAgIHRoaXMuJHdyYXBwZXIgPSB0aGlzLiRlbGVtZW50LnBhcmVudCgpO1xuICAgIHRoaXMuJHdyYXBwZXIuY3NzKHRoaXMuX2dldE1heERpbXMoKSk7XG4gIH1cblxuICBfcmVzaXplKCkge1xuICAgIHRoaXMuJHdyYXBwZXIuY3NzKHsnbWF4LXdpZHRoJzogJ25vbmUnLCAnbWluLWhlaWdodCc6ICdub25lJ30pO1xuICAgIC8vIF9nZXRNYXhEaW1zIGhhcyBzaWRlIGVmZmVjdHMgKGJvbykgYnV0IGNhbGxpbmcgaXQgc2hvdWxkIHVwZGF0ZSBhbGwgb3RoZXIgbmVjZXNzYXJ5IGhlaWdodHMgJiB3aWR0aHNcbiAgICB0aGlzLiR3cmFwcGVyLmNzcyh0aGlzLl9nZXRNYXhEaW1zKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgdG8gZWxlbWVudHMgaW4gdGhlIG1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsZW0gLSB0aGUgY3VycmVudCBtZW51IGl0ZW0gdG8gYWRkIGhhbmRsZXJzIHRvLlxuICAgKi9cbiAgX2V2ZW50cygkZWxlbSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAkZWxlbS5vZmYoJ2NsaWNrLnpmLmRyaWxsZG93bicpXG4gICAgLm9uKCdjbGljay56Zi5kcmlsbGRvd24nLCBmdW5jdGlvbihlKXtcbiAgICAgIGlmKCQoZS50YXJnZXQpLnBhcmVudHNVbnRpbCgndWwnLCAnbGknKS5oYXNDbGFzcygnaXMtZHJpbGxkb3duLXN1Ym1lbnUtcGFyZW50Jykpe1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQpe1xuICAgICAgLy8gICByZXR1cm4gZmFsc2U7XG4gICAgICAvLyB9XG4gICAgICBfdGhpcy5fc2hvdygkZWxlbS5wYXJlbnQoJ2xpJykpO1xuXG4gICAgICBpZihfdGhpcy5vcHRpb25zLmNsb3NlT25DbGljayl7XG4gICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgJGJvZHkub2ZmKCcuemYuZHJpbGxkb3duJykub24oJ2NsaWNrLnpmLmRyaWxsZG93bicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gX3RoaXMuJGVsZW1lbnRbMF0gfHwgJC5jb250YWlucyhfdGhpcy4kZWxlbWVudFswXSwgZS50YXJnZXQpKSB7IHJldHVybjsgfVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5faGlkZUFsbCgpO1xuICAgICAgICAgICRib2R5Lm9mZignLnpmLmRyaWxsZG93bicpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIHRvIHRoZSBtZW51IGVsZW1lbnQuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JlZ2lzdGVyRXZlbnRzKCkge1xuICAgIGlmKHRoaXMub3B0aW9ucy5zY3JvbGxUb3Ape1xuICAgICAgdGhpcy5fYmluZEhhbmRsZXIgPSB0aGlzLl9zY3JvbGxUb3AuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ29wZW4uemYuZHJpbGxkb3duIGhpZGUuemYuZHJpbGxkb3duIGNsb3NlZC56Zi5kcmlsbGRvd24nLHRoaXMuX2JpbmRIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy4kZWxlbWVudC5vbignbXV0YXRlbWUuemYudHJpZ2dlcicsIHRoaXMuX3Jlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gVG9wIG9mIEVsZW1lbnQgb3IgZGF0YS1zY3JvbGwtdG9wLWVsZW1lbnRcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBmaXJlcyBEcmlsbGRvd24jc2Nyb2xsbWVcbiAgICovXG4gIF9zY3JvbGxUb3AoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgJHNjcm9sbFRvcEVsZW1lbnQgPSBfdGhpcy5vcHRpb25zLnNjcm9sbFRvcEVsZW1lbnQhPScnPyQoX3RoaXMub3B0aW9ucy5zY3JvbGxUb3BFbGVtZW50KTpfdGhpcy4kZWxlbWVudCxcbiAgICAgICAgc2Nyb2xsUG9zID0gcGFyc2VJbnQoJHNjcm9sbFRvcEVsZW1lbnQub2Zmc2V0KCkudG9wK190aGlzLm9wdGlvbnMuc2Nyb2xsVG9wT2Zmc2V0LCAxMCk7XG4gICAgJCgnaHRtbCwgYm9keScpLnN0b3AodHJ1ZSkuYW5pbWF0ZSh7IHNjcm9sbFRvcDogc2Nyb2xsUG9zIH0sIF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24sIF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uRWFzaW5nLGZ1bmN0aW9uKCl7XG4gICAgICAvKipcbiAgICAgICAgKiBGaXJlcyBhZnRlciB0aGUgbWVudSBoYXMgc2Nyb2xsZWRcbiAgICAgICAgKiBAZXZlbnQgRHJpbGxkb3duI3Njcm9sbG1lXG4gICAgICAgICovXG4gICAgICBpZih0aGlzPT09JCgnaHRtbCcpWzBdKV90aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3Njcm9sbG1lLnpmLmRyaWxsZG93bicpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMga2V5ZG93biBldmVudCBsaXN0ZW5lciB0byBgbGlgJ3MgaW4gdGhlIG1lbnUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfa2V5Ym9hcmRFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJG1lbnVJdGVtcy5hZGQodGhpcy4kZWxlbWVudC5maW5kKCcuanMtZHJpbGxkb3duLWJhY2sgPiBhLCAuaXMtc3VibWVudS1wYXJlbnQtaXRlbSA+IGEnKSkub24oJ2tleWRvd24uemYuZHJpbGxkb3duJywgZnVuY3Rpb24oZSl7XG4gICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpLFxuICAgICAgICAgICRlbGVtZW50cyA9ICRlbGVtZW50LnBhcmVudCgnbGknKS5wYXJlbnQoJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJ2EnKSxcbiAgICAgICAgICAkcHJldkVsZW1lbnQsXG4gICAgICAgICAgJG5leHRFbGVtZW50O1xuXG4gICAgICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICRwcmV2RWxlbWVudCA9ICRlbGVtZW50cy5lcShNYXRoLm1heCgwLCBpLTEpKTtcbiAgICAgICAgICAkbmV4dEVsZW1lbnQgPSAkZWxlbWVudHMuZXEoTWF0aC5taW4oaSsxLCAkZWxlbWVudHMubGVuZ3RoLTEpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBLZXlib2FyZC5oYW5kbGVLZXkoZSwgJ0RyaWxsZG93bicsIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCRlbGVtZW50LmlzKF90aGlzLiRzdWJtZW51QW5jaG9ycykpIHtcbiAgICAgICAgICAgIF90aGlzLl9zaG93KCRlbGVtZW50LnBhcmVudCgnbGknKSk7XG4gICAgICAgICAgICAkZWxlbWVudC5wYXJlbnQoJ2xpJykub25lKHRyYW5zaXRpb25lbmQoJGVsZW1lbnQpLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAkZWxlbWVudC5wYXJlbnQoJ2xpJykuZmluZCgndWwgbGkgYScpLm5vdCgnLmpzLWRyaWxsZG93bi1iYWNrIGEnKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlvdXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIF90aGlzLl9oaWRlKCRlbGVtZW50LnBhcmVudCgnbGknKS5wYXJlbnQoJ3VsJykpO1xuICAgICAgICAgICRlbGVtZW50LnBhcmVudCgnbGknKS5wYXJlbnQoJ3VsJykub25lKHRyYW5zaXRpb25lbmQoJGVsZW1lbnQpLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJGVsZW1lbnQucGFyZW50KCdsaScpLnBhcmVudCgndWwnKS5wYXJlbnQoJ2xpJykuY2hpbGRyZW4oJ2EnKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRwcmV2RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIC8vIERvbid0IHRhcCBmb2N1cyBvbiBmaXJzdCBlbGVtZW50IGluIHJvb3QgdWxcbiAgICAgICAgICByZXR1cm4gISRlbGVtZW50LmlzKF90aGlzLiRlbGVtZW50LmZpbmQoJz4gbGk6Zmlyc3QtY2hpbGQgPiBhJykpO1xuICAgICAgICB9LFxuICAgICAgICBkb3duOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkbmV4dEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAvLyBEb24ndCB0YXAgZm9jdXMgb24gbGFzdCBlbGVtZW50IGluIHJvb3QgdWxcbiAgICAgICAgICByZXR1cm4gISRlbGVtZW50LmlzKF90aGlzLiRlbGVtZW50LmZpbmQoJz4gbGk6bGFzdC1jaGlsZCA+IGEnKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBEb24ndCBjbG9zZSBvbiBlbGVtZW50IGluIHJvb3QgdWxcbiAgICAgICAgICBpZiAoISRlbGVtZW50LmlzKF90aGlzLiRlbGVtZW50LmZpbmQoJz4gbGkgPiBhJykpKSB7XG4gICAgICAgICAgICBfdGhpcy5faGlkZSgkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSk7XG4gICAgICAgICAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5zaWJsaW5ncygnYScpLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5wYXJlbnRMaW5rICYmICRlbGVtZW50LmF0dHIoJ2hyZWYnKSkgeyAvLyBMaW5rIHdpdGggaHJlZlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoISRlbGVtZW50LmlzKF90aGlzLiRtZW51SXRlbXMpKSB7IC8vIG5vdCBtZW51IGl0ZW0gbWVhbnMgYmFjayBidXR0b25cbiAgICAgICAgICAgIF90aGlzLl9oaWRlKCRlbGVtZW50LnBhcmVudCgnbGknKS5wYXJlbnQoJ3VsJykpO1xuICAgICAgICAgICAgJGVsZW1lbnQucGFyZW50KCdsaScpLnBhcmVudCgndWwnKS5vbmUodHJhbnNpdGlvbmVuZCgkZWxlbWVudCksIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQucGFyZW50KCdsaScpLnBhcmVudCgndWwnKS5wYXJlbnQoJ2xpJykuY2hpbGRyZW4oJ2EnKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCRlbGVtZW50LmlzKF90aGlzLiRzdWJtZW51QW5jaG9ycykpIHsgLy8gU3ViIG1lbnUgaXRlbVxuICAgICAgICAgICAgX3RoaXMuX3Nob3coJGVsZW1lbnQucGFyZW50KCdsaScpKTtcbiAgICAgICAgICAgICRlbGVtZW50LnBhcmVudCgnbGknKS5vbmUodHJhbnNpdGlvbmVuZCgkZWxlbWVudCksIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICRlbGVtZW50LnBhcmVudCgnbGknKS5maW5kKCd1bCBsaSBhJykubm90KCcuanMtZHJpbGxkb3duLWJhY2sgYScpLmZpcnN0KCkuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVkOiBmdW5jdGlvbihwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTsgLy8gZW5kIGtleWJvYXJkQWNjZXNzXG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFsbCBvcGVuIGVsZW1lbnRzLCBhbmQgcmV0dXJucyB0byByb290IG1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAZmlyZXMgRHJpbGxkb3duI2Nsb3NlZFxuICAgKi9cbiAgX2hpZGVBbGwoKSB7XG4gICAgdmFyICRlbGVtID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXMtZHJpbGxkb3duLXN1Ym1lbnUuaXMtYWN0aXZlJykuYWRkQ2xhc3MoJ2lzLWNsb3NpbmcnKTtcbiAgICBpZih0aGlzLm9wdGlvbnMuYXV0b0hlaWdodCkgdGhpcy4kd3JhcHBlci5jc3Moe2hlaWdodDokZWxlbS5wYXJlbnQoKS5jbG9zZXN0KCd1bCcpLmRhdGEoJ2NhbGNIZWlnaHQnKX0pO1xuICAgICRlbGVtLm9uZSh0cmFuc2l0aW9uZW5kKCRlbGVtKSwgZnVuY3Rpb24oZSl7XG4gICAgICAkZWxlbS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlIGlzLWNsb3NpbmcnKTtcbiAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgZnVsbHkgY2xvc2VkLlxuICAgICAgICAgKiBAZXZlbnQgRHJpbGxkb3duI2Nsb3NlZFxuICAgICAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2Nsb3NlZC56Zi5kcmlsbGRvd24nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVyIGZvciBlYWNoIGBiYWNrYCBidXR0b24sIGFuZCBjbG9zZXMgb3BlbiBtZW51cy5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBmaXJlcyBEcmlsbGRvd24jYmFja1xuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsZW0gLSB0aGUgY3VycmVudCBzdWItbWVudSB0byBhZGQgYGJhY2tgIGV2ZW50LlxuICAgKi9cbiAgX2JhY2soJGVsZW0pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICRlbGVtLm9mZignY2xpY2suemYuZHJpbGxkb3duJyk7XG4gICAgJGVsZW0uY2hpbGRyZW4oJy5qcy1kcmlsbGRvd24tYmFjaycpXG4gICAgICAub24oJ2NsaWNrLnpmLmRyaWxsZG93bicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbW91c2V1cCBvbiBiYWNrJyk7XG4gICAgICAgIF90aGlzLl9oaWRlKCRlbGVtKTtcblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHBhcmVudCBzdWJtZW51LCBjYWxsIHNob3dcbiAgICAgICAgbGV0IHBhcmVudFN1Yk1lbnUgPSAkZWxlbS5wYXJlbnQoJ2xpJykucGFyZW50KCd1bCcpLnBhcmVudCgnbGknKTtcbiAgICAgICAgaWYgKHBhcmVudFN1Yk1lbnUubGVuZ3RoKSB7XG4gICAgICAgICAgX3RoaXMuX3Nob3cocGFyZW50U3ViTWVudSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgdG8gbWVudSBpdGVtcyB3L28gc3VibWVudXMgdG8gY2xvc2Ugb3BlbiBtZW51cyBvbiBjbGljay5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfbWVudUxpbmtFdmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLiRtZW51SXRlbXMubm90KCcuaXMtZHJpbGxkb3duLXN1Ym1lbnUtcGFyZW50JylcbiAgICAgICAgLm9mZignY2xpY2suemYuZHJpbGxkb3duJylcbiAgICAgICAgLm9uKCdjbGljay56Zi5kcmlsbGRvd24nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAvLyBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIF90aGlzLl9oaWRlQWxsKCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBDU1MgY2xhc3NlcyBmb3Igc3VibWVudSB0byBzaG93IGl0LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtqUXVlcnl9ICRlbGVtIC0gdGhlIHRhcmdldCBzdWJtZW51IChgdWxgIHRhZylcbiAgICogQHBhcmFtIHtib29sZWFufSB0cmlnZ2VyIC0gdHJpZ2dlciBkcmlsbGRvd24gZXZlbnRcbiAgICovXG4gIF9zZXRTaG93U3ViTWVudUNsYXNzZXMoJGVsZW0sIHRyaWdnZXIpIHtcbiAgICAkZWxlbS5hZGRDbGFzcygnaXMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICRlbGVtLnBhcmVudCgnbGknKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgaWYgKHRyaWdnZXIgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignb3Blbi56Zi5kcmlsbGRvd24nLCBbJGVsZW1dKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgQ1NTIGNsYXNzZXMgZm9yIHN1Ym1lbnUgdG8gaGlkZSBpdC5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbSAtIHRoZSB0YXJnZXQgc3VibWVudSAoYHVsYCB0YWcpXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdHJpZ2dlciAtIHRyaWdnZXIgZHJpbGxkb3duIGV2ZW50XG4gICAqL1xuICBfc2V0SGlkZVN1Yk1lbnVDbGFzc2VzKCRlbGVtLCB0cmlnZ2VyKSB7XG4gICAgJGVsZW0ucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpLmFkZENsYXNzKCdpbnZpc2libGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICRlbGVtLnBhcmVudCgnbGknKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgIGlmICh0cmlnZ2VyID09PSB0cnVlKSB7XG4gICAgICAkZWxlbS50cmlnZ2VyKCdoaWRlLnpmLmRyaWxsZG93bicsIFskZWxlbV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhIHNwZWNpZmljIGRyaWxsZG93biAoc3ViKW1lbnUgbm8gbWF0dGVyIHdoaWNoIChzdWIpbWVudSBpbiBpdCBpcyBjdXJyZW50bHkgdmlzaWJsZS5cbiAgICogQ29tcGFyZWQgdG8gX3Nob3coKSB0aGlzIGxldHMgeW91IGp1bXAgaW50byBhbnkgc3VibWVudSB3aXRob3V0IGNsaWNraW5nIHRocm91Z2ggZXZlcnkgc3VibWVudSBvbiB0aGUgd2F5IHRvIGl0LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQGZpcmVzIERyaWxsZG93biNvcGVuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbSAtIHRoZSB0YXJnZXQgKHN1YiltZW51IChgdWxgIHRhZylcbiAgICogQHBhcmFtIHtib29sZWFufSBhdXRvRm9jdXMgLSBpZiB0cnVlIHRoZSBmaXJzdCBsaW5rIGluIHRoZSB0YXJnZXQgKHN1YiltZW51IGdldHMgYXV0byBmb2N1c2VkXG4gICAqL1xuICBfc2hvd01lbnUoJGVsZW0sIGF1dG9Gb2N1cykge1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIFJlc2V0IGRyaWxsZG93blxuICAgIHZhciAkZXhwYW5kZWRTdWJtZW51cyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnbGlbYXJpYS1leHBhbmRlZD1cInRydWVcIl0gPiB1bFtkYXRhLXN1Ym1lbnVdJyk7XG4gICAgJGV4cGFuZGVkU3VibWVudXMuZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgX3RoaXMuX3NldEhpZGVTdWJNZW51Q2xhc3NlcygkKHRoaXMpKTtcbiAgICB9KTtcblxuICAgIC8vIFNhdmUgdGhlIG1lbnUgYXMgdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgb25lLlxuICAgIHRoaXMuJGN1cnJlbnRNZW51ID0gJGVsZW07XG5cbiAgICAvLyBJZiB0YXJnZXQgbWVudSBpcyByb290LCBmb2N1cyBmaXJzdCBsaW5rICYgZXhpdFxuICAgIGlmICgkZWxlbS5pcygnW2RhdGEtZHJpbGxkb3duXScpKSB7XG4gICAgICBpZiAoYXV0b0ZvY3VzID09PSB0cnVlKSAkZWxlbS5maW5kKCdsaVtyb2xlPVwidHJlZWl0ZW1cIl0gPiBhJykuZmlyc3QoKS5mb2N1cygpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvSGVpZ2h0KSB0aGlzLiR3cmFwcGVyLmNzcygnaGVpZ2h0JywgJGVsZW0uZGF0YSgnY2FsY0hlaWdodCcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGFsbCBzdWJtZW51cyBvbiB3YXkgdG8gcm9vdCBpbmNsLiB0aGUgZWxlbWVudCBpdHNlbGZcbiAgICB2YXIgJHN1Ym1lbnVzID0gJGVsZW0uY2hpbGRyZW4oKS5maXJzdCgpLnBhcmVudHNVbnRpbCgnW2RhdGEtZHJpbGxkb3duXScsICdbZGF0YS1zdWJtZW51XScpO1xuXG4gICAgLy8gT3BlbiB0YXJnZXQgbWVudSBhbmQgYWxsIHN1Ym1lbnVzIG9uIGl0cyB3YXkgdG8gcm9vdFxuICAgICRzdWJtZW51cy5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgIC8vIFVwZGF0ZSBoZWlnaHQgb2YgZmlyc3QgY2hpbGQgKHRhcmdldCBtZW51KSBpZiBhdXRvSGVpZ2h0IG9wdGlvbiB0cnVlXG4gICAgICBpZiAoaW5kZXggPT09IDAgJiYgX3RoaXMub3B0aW9ucy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgIF90aGlzLiR3cmFwcGVyLmNzcygnaGVpZ2h0JywgJCh0aGlzKS5kYXRhKCdjYWxjSGVpZ2h0JykpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNMYXN0Q2hpbGQgPSBpbmRleCA9PSAkc3VibWVudXMubGVuZ3RoIC0gMTtcblxuICAgICAgLy8gQWRkIHRyYW5zaXRpb25zZW5kIGxpc3RlbmVyIHRvIGxhc3QgY2hpbGQgKHJvb3QgZHVlIHRvIHJldmVyc2Ugb3JkZXIpIHRvIG9wZW4gdGFyZ2V0IG1lbnUncyBmaXJzdCBsaW5rXG4gICAgICAvLyBMYXN0IGNoaWxkIG1ha2VzIHN1cmUgdGhlIGV2ZW50IGdldHMgYWx3YXlzIHRyaWdnZXJlZCBldmVuIGlmIGdvaW5nIHRocm91Z2ggc2V2ZXJhbCBtZW51c1xuICAgICAgaWYgKGlzTGFzdENoaWxkID09PSB0cnVlKSB7XG4gICAgICAgICQodGhpcykub25lKHRyYW5zaXRpb25lbmQoJCh0aGlzKSksICgpID0+IHtcbiAgICAgICAgICBpZiAoYXV0b0ZvY3VzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkZWxlbS5maW5kKCdsaVtyb2xlPVwidHJlZWl0ZW1cIl0gPiBhJykuZmlyc3QoKS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLl9zZXRTaG93U3ViTWVudUNsYXNzZXMoJCh0aGlzKSwgaXNMYXN0Q2hpbGQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgc3VibWVudS5cbiAgICogQGZ1bmN0aW9uXG4gICAqIEBmaXJlcyBEcmlsbGRvd24jb3BlblxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsZW0gLSB0aGUgY3VycmVudCBlbGVtZW50IHdpdGggYSBzdWJtZW51IHRvIG9wZW4sIGkuZS4gdGhlIGBsaWAgdGFnLlxuICAgKi9cbiAgX3Nob3coJGVsZW0pIHtcbiAgICBjb25zdCAkc3VibWVudSA9ICRlbGVtLmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XScpO1xuXG4gICAgJGVsZW0uYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgdGhpcy4kY3VycmVudE1lbnUgPSAkc3VibWVudTtcbiAgICAkc3VibWVudS5hZGRDbGFzcygnaXMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0hlaWdodCkge1xuICAgICAgdGhpcy4kd3JhcHBlci5jc3MoeyBoZWlnaHQ6ICRzdWJtZW51LmRhdGEoJ2NhbGNIZWlnaHQnKSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBzdWJtZW51IGhhcyBvcGVuZWQuXG4gICAgICogQGV2ZW50IERyaWxsZG93biNvcGVuXG4gICAgICovXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdvcGVuLnpmLmRyaWxsZG93bicsIFskZWxlbV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGEgc3VibWVudVxuICAgKiBAZnVuY3Rpb25cbiAgICogQGZpcmVzIERyaWxsZG93biNoaWRlXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbSAtIHRoZSBjdXJyZW50IHN1Yi1tZW51IHRvIGhpZGUsIGkuZS4gdGhlIGB1bGAgdGFnLlxuICAgKi9cbiAgX2hpZGUoJGVsZW0pIHtcbiAgICBpZih0aGlzLm9wdGlvbnMuYXV0b0hlaWdodCkgdGhpcy4kd3JhcHBlci5jc3Moe2hlaWdodDokZWxlbS5wYXJlbnQoKS5jbG9zZXN0KCd1bCcpLmRhdGEoJ2NhbGNIZWlnaHQnKX0pO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgJGVsZW0ucGFyZW50KCdsaScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgJGVsZW0uYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAkZWxlbS5hZGRDbGFzcygnaXMtY2xvc2luZycpXG4gICAgICAgICAub25lKHRyYW5zaXRpb25lbmQoJGVsZW0pLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAkZWxlbS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlIGlzLWNsb3NpbmcnKTtcbiAgICAgICAgICAgJGVsZW0uYmx1cigpLmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICAgICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIHN1Ym1lbnUgaGFzIGNsb3NlZC5cbiAgICAgKiBAZXZlbnQgRHJpbGxkb3duI2hpZGVcbiAgICAgKi9cbiAgICAkZWxlbS50cmlnZ2VyKCdoaWRlLnpmLmRyaWxsZG93bicsIFskZWxlbV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggdGhlIG5lc3RlZCBtZW51cyB0byBjYWxjdWxhdGUgdGhlIG1pbi1oZWlnaHQsIGFuZCBtYXgtd2lkdGggZm9yIHRoZSBtZW51LlxuICAgKiBQcmV2ZW50cyBjb250ZW50IGp1bXBpbmcuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldE1heERpbXMoKSB7XG4gICAgdmFyIG1heEhlaWdodCA9IDAsIHJlc3VsdCA9IHt9LCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBSZWNhbGN1bGF0ZSBtZW51IGhlaWdodHMgYW5kIHRvdGFsIG1heCBoZWlnaHRcbiAgICB0aGlzLiRzdWJtZW51cy5hZGQodGhpcy4kZWxlbWVudCkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyIG51bU9mRWxlbXMgPSAkKHRoaXMpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcbiAgICAgIHZhciBoZWlnaHQgPSBCb3guR2V0RGltZW5zaW9ucyh0aGlzKS5oZWlnaHQ7XG5cbiAgICAgIG1heEhlaWdodCA9IGhlaWdodCA+IG1heEhlaWdodCA/IGhlaWdodCA6IG1heEhlaWdodDtcblxuICAgICAgaWYoX3RoaXMub3B0aW9ucy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICQodGhpcykuZGF0YSgnY2FsY0hlaWdodCcsaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0hlaWdodClcbiAgICAgIHJlc3VsdFsnaGVpZ2h0J10gPSB0aGlzLiRjdXJyZW50TWVudS5kYXRhKCdjYWxjSGVpZ2h0Jyk7XG4gICAgZWxzZVxuICAgICAgcmVzdWx0WydtaW4taGVpZ2h0J10gPSBgJHttYXhIZWlnaHR9cHhgO1xuXG4gICAgcmVzdWx0WydtYXgtd2lkdGgnXSA9IGAke3RoaXMuJGVsZW1lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGh9cHhgO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyB0aGUgRHJpbGxkb3duIE1lbnVcbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICBpZih0aGlzLm9wdGlvbnMuc2Nyb2xsVG9wKSB0aGlzLiRlbGVtZW50Lm9mZignLnpmLmRyaWxsZG93bicsdGhpcy5fYmluZEhhbmRsZXIpO1xuICAgIHRoaXMuX2hpZGVBbGwoKTtcblx0ICB0aGlzLiRlbGVtZW50Lm9mZignbXV0YXRlbWUuemYudHJpZ2dlcicpO1xuICAgIE5lc3QuQnVybih0aGlzLiRlbGVtZW50LCAnZHJpbGxkb3duJyk7XG4gICAgdGhpcy4kZWxlbWVudC51bndyYXAoKVxuICAgICAgICAgICAgICAgICAuZmluZCgnLmpzLWRyaWxsZG93bi1iYWNrLCAuaXMtc3VibWVudS1wYXJlbnQtaXRlbScpLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgIC5lbmQoKS5maW5kKCcuaXMtYWN0aXZlLCAuaXMtY2xvc2luZywgLmlzLWRyaWxsZG93bi1zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZSBpcy1jbG9zaW5nIGlzLWRyaWxsZG93bi1zdWJtZW51JylcbiAgICAgICAgICAgICAgICAgLmVuZCgpLmZpbmQoJ1tkYXRhLXN1Ym1lbnVdJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXggcm9sZScpO1xuICAgIHRoaXMuJHN1Ym1lbnVBbmNob3JzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLm9mZignLnpmLmRyaWxsZG93bicpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1pcy1wYXJlbnQtbGlua10nKS5kZXRhY2goKTtcbiAgICB0aGlzLiRzdWJtZW51cy5yZW1vdmVDbGFzcygnZHJpbGxkb3duLXN1Ym1lbnUtY292ZXItcHJldmlvdXMgaW52aXNpYmxlJyk7XG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgJGxpbmsgPSAkKHRoaXMpO1xuICAgICAgJGxpbmsucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgIGlmKCRsaW5rLmRhdGEoJ3NhdmVkSHJlZicpKXtcbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsICRsaW5rLmRhdGEoJ3NhdmVkSHJlZicpKS5yZW1vdmVEYXRhKCdzYXZlZEhyZWYnKTtcbiAgICAgIH1lbHNleyByZXR1cm47IH1cbiAgICB9KTtcbiAgfTtcbn1cblxuRHJpbGxkb3duLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogRHJpbGxkb3ducyBkZXBlbmQgb24gc3R5bGVzIGluIG9yZGVyIHRvIGZ1bmN0aW9uIHByb3Blcmx5OyBpbiB0aGUgZGVmYXVsdCBidWlsZCBvZiBGb3VuZGF0aW9uIHRoZXNlIGFyZVxuICAgKiBvbiB0aGUgYGRyaWxsZG93bmAgY2xhc3MuIFRoaXMgb3B0aW9uIGF1dG8tYXBwbGllcyB0aGlzIGNsYXNzIHRvIHRoZSBkcmlsbGRvd24gdXBvbiBpbml0aWFsaXphdGlvbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGlhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYXV0b0FwcGx5Q2xhc3M6IHRydWUsXG4gIC8qKlxuICAgKiBNYXJrdXAgdXNlZCBmb3IgSlMgZ2VuZXJhdGVkIGJhY2sgYnV0dG9uLiBQcmVwZW5kZWQgIG9yIGFwcGVuZGVkIChzZWUgYmFja0J1dHRvblBvc2l0aW9uKSB0byBzdWJtZW51IGxpc3RzIGFuZCBkZWxldGVkIG9uIGBkZXN0cm95YCBtZXRob2QsICdqcy1kcmlsbGRvd24tYmFjaycgY2xhc3MgcmVxdWlyZWQuIFJlbW92ZSB0aGUgYmFja3NsYXNoIChgXFxgKSBpZiBjb3B5IGFuZCBwYXN0aW5nLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICc8bGkgY2xhc3M9XCJqcy1kcmlsbGRvd24tYmFja1wiPjxhIHRhYmluZGV4PVwiMFwiPkJhY2s8L2E+PC9saT4nXG4gICAqL1xuICBiYWNrQnV0dG9uOiAnPGxpIGNsYXNzPVwianMtZHJpbGxkb3duLWJhY2tcIj48YSB0YWJpbmRleD1cIjBcIj5CYWNrPC9hPjwvbGk+JyxcbiAgLyoqXG4gICAqIFBvc2l0aW9uIHRoZSBiYWNrIGJ1dHRvbiBlaXRoZXIgYXQgdGhlIHRvcCBvciBib3R0b20gb2YgZHJpbGxkb3duIHN1Ym1lbnVzLiBDYW4gYmUgYCdsZWZ0J2Agb3IgYCdib3R0b20nYC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCB0b3BcbiAgICovXG4gIGJhY2tCdXR0b25Qb3NpdGlvbjogJ3RvcCcsXG4gIC8qKlxuICAgKiBNYXJrdXAgdXNlZCB0byB3cmFwIGRyaWxsZG93biBtZW51LiBVc2UgYSBjbGFzcyBuYW1lIGZvciBpbmRlcGVuZGVudCBzdHlsaW5nOyB0aGUgSlMgYXBwbGllZCBjbGFzczogYGlzLWRyaWxsZG93bmAgaXMgcmVxdWlyZWQuIFJlbW92ZSB0aGUgYmFja3NsYXNoIChgXFxgKSBpZiBjb3B5IGFuZCBwYXN0aW5nLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICc8ZGl2PjwvZGl2PidcbiAgICovXG4gIHdyYXBwZXI6ICc8ZGl2PjwvZGl2PicsXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwYXJlbnQgbGluayB0byB0aGUgc3VibWVudS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHBhcmVudExpbms6IGZhbHNlLFxuICAvKipcbiAgICogQWxsb3cgdGhlIG1lbnUgdG8gcmV0dXJuIHRvIHJvb3QgbGlzdCBvbiBib2R5IGNsaWNrLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFsbG93IHRoZSBtZW51IHRvIGF1dG8gYWRqdXN0IGhlaWdodC5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAvKipcbiAgICogQW5pbWF0ZSB0aGUgYXV0byBhZGp1c3QgaGVpZ2h0LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYW5pbWF0ZUhlaWdodDogZmFsc2UsXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgbWVudSBhZnRlciBvcGVuaW5nIGEgc3VibWVudSBvciBuYXZpZ2F0aW5nIGJhY2sgdXNpbmcgdGhlIG1lbnUgYmFjayBidXR0b25cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHNjcm9sbFRvcDogZmFsc2UsXG4gIC8qKlxuICAgKiBTdHJpbmcganF1ZXJ5IHNlbGVjdG9yIChmb3IgZXhhbXBsZSAnYm9keScpIG9mIGVsZW1lbnQgdG8gdGFrZSBvZmZzZXQoKS50b3AgZnJvbSwgaWYgZW1wdHkgc3RyaW5nIHRoZSBkcmlsbGRvd24gbWVudSBvZmZzZXQoKS50b3AgaXMgdGFrZW5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKi9cbiAgc2Nyb2xsVG9wRWxlbWVudDogJycsXG4gIC8qKlxuICAgKiBTY3JvbGxUb3Agb2Zmc2V0XG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgc2Nyb2xsVG9wT2Zmc2V0OiAwLFxuICAvKipcbiAgICogU2Nyb2xsIGFuaW1hdGlvbiBkdXJhdGlvblxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDUwMFxuICAgKi9cbiAgYW5pbWF0aW9uRHVyYXRpb246IDUwMCxcbiAgLyoqXG4gICAqIFNjcm9sbCBhbmltYXRpb24gZWFzaW5nLiBDYW4gYmUgYCdzd2luZydgIG9yIGAnbGluZWFyJ2AuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9hbmltYXRlfEpRdWVyeSBhbmltYXRlfVxuICAgKiBAZGVmYXVsdCAnc3dpbmcnXG4gICAqL1xuICBhbmltYXRpb25FYXNpbmc6ICdzd2luZydcbiAgLy8gaG9sZE9wZW46IGZhbHNlXG59O1xuXG5leHBvcnQge0RyaWxsZG93bn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
