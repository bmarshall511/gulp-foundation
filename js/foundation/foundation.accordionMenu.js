(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.util.keyboard", "./foundation.util.nest", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.accordionMenu"] = factory(require("./foundation.core"), require("./foundation.util.keyboard"), require("./foundation.util.nest"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.accordionMenu"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.keyboard"], root["__FOUNDATION_EXTERNAL__"]["foundation.util.nest"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_util_keyboard__, __WEBPACK_EXTERNAL_MODULE__foundation_util_nest__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 2);
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
      "./js/entries/plugins/foundation.accordionMenu.js":
      /*!********************************************************!*\
        !*** ./js/entries/plugins/foundation.accordionMenu.js ***!
        \********************************************************/

      /*! exports provided: Foundation, AccordionMenu */

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


        var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.accordionMenu */
        "./js/foundation.accordionMenu.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "AccordionMenu", function () {
          return _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_1__["AccordionMenu"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_1__["AccordionMenu"], 'AccordionMenu');
        /***/

      },

      /***/
      "./js/foundation.accordionMenu.js":
      /*!****************************************!*\
        !*** ./js/foundation.accordionMenu.js ***!
        \****************************************/

      /*! exports provided: AccordionMenu */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AccordionMenu", function () {
          return AccordionMenu;
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
         * AccordionMenu module.
         * @module foundation.accordionMenu
         * @requires foundation.util.keyboard
         * @requires foundation.util.nest
         */


        var AccordionMenu =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(AccordionMenu, _Plugin);

          function AccordionMenu() {
            _classCallCheck(this, AccordionMenu);

            return _possibleConstructorReturn(this, _getPrototypeOf(AccordionMenu).apply(this, arguments));
          }

          _createClass(AccordionMenu, [{
            key: "_setup",

            /**
             * Creates a new instance of an accordion menu.
             * @class
             * @name AccordionMenu
             * @fires AccordionMenu#init
             * @param {jQuery} element - jQuery object to make into an accordion menu.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element, options) {
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, AccordionMenu.defaults, this.$element.data(), options);
              this.className = 'AccordionMenu'; // ie9 back compat

              this._init();

              _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].register('AccordionMenu', {
                'ENTER': 'toggle',
                'SPACE': 'toggle',
                'ARROW_RIGHT': 'open',
                'ARROW_UP': 'up',
                'ARROW_DOWN': 'down',
                'ARROW_LEFT': 'close',
                'ESCAPE': 'closeAll'
              });
            }
            /**
             * Initializes the accordion menu by hiding all nested menus.
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Feather(this.$element, 'accordion');

              var _this = this;

              this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');

              this.$element.attr({
                'role': 'tree',
                'aria-multiselectable': this.options.multiOpen
              });
              this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
              this.$menuLinks.each(function () {
                var linkId = this.id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu-link'),
                    $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    $sub = $elem.children('[data-submenu]'),
                    subId = $sub[0].id || Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["GetYoDigits"])(6, 'acc-menu'),
                    isActive = $sub.hasClass('is-active');

                if (_this.options.parentLink) {
                  var $anchor = $elem.children('a');
                  $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
                }

                if (_this.options.submenuToggle) {
                  $elem.addClass('has-submenu-toggle');
                  $elem.children('a').after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + '</span></button>');
                } else {
                  $elem.attr({
                    'aria-controls': subId,
                    'aria-expanded': isActive,
                    'id': linkId
                  });
                }

                $sub.attr({
                  'aria-labelledby': linkId,
                  'aria-hidden': !isActive,
                  'role': 'group',
                  'id': subId
                });
              });
              this.$element.find('li').attr({
                'role': 'treeitem'
              });
              var initPanes = this.$element.find('.is-active');

              if (initPanes.length) {
                var _this = this;

                initPanes.each(function () {
                  _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
                });
              }

              this._events();
            }
            /**
             * Adds event handlers for items within the menu.
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              var _this = this;

              this.$element.find('li').each(function () {
                var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');

                if ($submenu.length) {
                  if (_this.options.submenuToggle) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
                      _this.toggle($submenu);
                    });
                  } else {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
                      e.preventDefault();

                      _this.toggle($submenu);
                    });
                  }
                }
              }).on('keydown.zf.accordionmenu', function (e) {
                var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
                    $elements = $element.parent('ul').children('li'),
                    $prevElement,
                    $nextElement,
                    $target = $element.children('[data-submenu]');
                $elements.each(function (i) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
                    $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
                    $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {
                      // has open sub menu
                      $nextElement = $element.find('li:first-child').find('a').first();
                    }

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {
                      // is first element of sub menu
                      $prevElement = $element.parents('li').first().find('a').first();
                    } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
                      // if previous element has open sub menu
                      $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
                    }

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {
                      // is last element of sub menu
                      $nextElement = $element.parents('li').first().next('li').find('a').first();
                    }

                    return;
                  }
                });

                _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].handleKey(e, 'AccordionMenu', {
                  open: function open() {
                    if ($target.is(':hidden')) {
                      _this.down($target);

                      $target.find('li').first().find('a').first().focus();
                    }
                  },
                  close: function close() {
                    if ($target.length && !$target.is(':hidden')) {
                      // close active sub of this item
                      _this.up($target);
                    } else if ($element.parent('[data-submenu]').length) {
                      // close currently open sub
                      _this.up($element.parent('[data-submenu]'));

                      $element.parents('li').first().find('a').first().focus();
                    }
                  },
                  up: function up() {
                    $prevElement.focus();
                    return true;
                  },
                  down: function down() {
                    $nextElement.focus();
                    return true;
                  },
                  toggle: function toggle() {
                    if (_this.options.submenuToggle) {
                      return false;
                    }

                    if ($element.children('[data-submenu]').length) {
                      _this.toggle($element.children('[data-submenu]'));

                      return true;
                    }
                  },
                  closeAll: function closeAll() {
                    _this.hideAll();
                  },
                  handled: function handled(preventDefault) {
                    if (preventDefault) {
                      e.preventDefault();
                    }

                    e.stopImmediatePropagation();
                  }
                });
              }); //.attr('tabindex', 0);
            }
            /**
             * Closes all panes of the menu.
             * @function
             */

          }, {
            key: "hideAll",
            value: function hideAll() {
              this.up(this.$element.find('[data-submenu]'));
            }
            /**
             * Opens all panes of the menu.
             * @function
             */

          }, {
            key: "showAll",
            value: function showAll() {
              this.down(this.$element.find('[data-submenu]'));
            }
            /**
             * Toggles the open/close state of a submenu.
             * @function
             * @param {jQuery} $target - the submenu to toggle
             */

          }, {
            key: "toggle",
            value: function toggle($target) {
              if (!$target.is(':animated')) {
                if (!$target.is(':hidden')) {
                  this.up($target);
                } else {
                  this.down($target);
                }
              }
            }
            /**
             * Opens the sub-menu defined by `$target`.
             * @param {jQuery} $target - Sub-menu to open.
             * @fires AccordionMenu#down
             */

          }, {
            key: "down",
            value: function down($target) {
              var _this2 = this; // If having multiple submenus active is disabled, close all the submenus
              // that are not parents or children of the targeted submenu.


              if (!this.options.multiOpen) {
                // The "branch" of the targetted submenu, from the component root to
                // the active submenus nested in it.
                var $targetBranch = $target.parentsUntil(this.$element).add($target).add($target.find('.is-active')); // All the active submenus that are not in the branch.

                var $othersActiveSubmenus = this.$element.find('.is-active').not($targetBranch);
                this.up($othersActiveSubmenus);
              }

              $target.addClass('is-active').attr({
                'aria-hidden': false
              });

              if (this.options.submenuToggle) {
                $target.prev('.submenu-toggle').attr({
                  'aria-expanded': true
                });
              } else {
                $target.parent('.is-accordion-submenu-parent').attr({
                  'aria-expanded': true
                });
              }

              $target.slideDown(this.options.slideSpeed, function () {
                /**
                 * Fires when the menu is done opening.
                 * @event AccordionMenu#down
                 */
                _this2.$element.trigger('down.zf.accordionMenu', [$target]);
              });
            }
            /**
             * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
             * @param {jQuery} $target - Sub-menu to close.
             * @fires AccordionMenu#up
             */

          }, {
            key: "up",
            value: function up($target) {
              var _this3 = this;

              var $submenus = $target.find('[data-submenu]');
              var $allmenus = $target.add($submenus);
              $submenus.slideUp(0);
              $allmenus.removeClass('is-active').attr('aria-hidden', true);

              if (this.options.submenuToggle) {
                $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);
              } else {
                $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
              }

              $target.slideUp(this.options.slideSpeed, function () {
                /**
                 * Fires when the menu is done collapsing up.
                 * @event AccordionMenu#up
                 */
                _this3.$element.trigger('up.zf.accordionMenu', [$target]);
              });
            }
            /**
             * Destroys an instance of accordion menu.
             * @fires AccordionMenu#destroyed
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              this.$element.find('[data-submenu]').slideDown(0).css('display', '');
              this.$element.find('a').off('click.zf.accordionMenu');
              this.$element.find('[data-is-parent-link]').detach();

              if (this.options.submenuToggle) {
                this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
                this.$element.find('.submenu-toggle').remove();
              }

              _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__["Nest"].Burn(this.$element, 'accordion');
            }
          }]);

          return AccordionMenu;
        }(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__["Plugin"]);

        AccordionMenu.defaults = {
          /**
           * Adds the parent link to the submenu.
           * @option
           * @type {boolean}
           * @default false
           */
          parentLink: false,

          /**
           * Amount of time to animate the opening of a submenu in ms.
           * @option
           * @type {number}
           * @default 250
           */
          slideSpeed: 250,

          /**
           * Adds a separate submenu toggle button. This allows the parent item to have a link.
           * @option
           * @example true
           */
          submenuToggle: false,

          /**
           * The text used for the submenu toggle if enabled. This is used for screen readers only.
           * @option
           * @example true
           */
          submenuToggleText: 'Toggle menu',

          /**
           * Allow the menu to have multiple open panes.
           * @option
           * @type {boolean}
           * @default true
           */
          multiOpen: true
        };
        /***/
      },

      /***/
      2:
      /*!**************************************************************!*\
        !*** multi ./js/entries/plugins/foundation.accordionMenu.js ***!
        \**************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.accordionMenu.js */
        "./js/entries/plugins/foundation.accordionMenu.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uYWNjb3JkaW9uTWVudS5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi5hY2NvcmRpb25NZW51LmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIkFjY29yZGlvbk1lbnUiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJLZXlib2FyZCIsIk5lc3QiLCJfdGhpcyIsIm11bHRpT3BlbiIsImxpbmtJZCIsIkdldFlvRGlnaXRzIiwiJGVsZW0iLCIkc3ViIiwic3ViSWQiLCJpc0FjdGl2ZSIsIiRhbmNob3IiLCJpbml0UGFuZXMiLCIkc3VibWVudSIsImUiLCIkZWxlbWVudCIsIiRlbGVtZW50cyIsIiR0YXJnZXQiLCIkcHJldkVsZW1lbnQiLCJNYXRoIiwiaSIsIiRuZXh0RWxlbWVudCIsIm9wZW4iLCJjbG9zZSIsInVwIiwiZG93biIsInRvZ2dsZSIsImNsb3NlQWxsIiwiaGFuZGxlZCIsIiR0YXJnZXRCcmFuY2giLCIkb3RoZXJzQWN0aXZlU3VibWVudXMiLCIkc3VibWVudXMiLCIkYWxsbWVudXMiLCJQbHVnaW4iLCJwYXJlbnRMaW5rIiwic2xpZGVTcGVlZCIsInN1Ym1lbnVUb2dnbGUiLCJzdWJtZW51VG9nZ2xlVGV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSw0QkFBQSxFQUFBLHdCQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxzQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLHFEQUFBLEVBQUEsaURBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsT0FBQSxLQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLFFBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxDQUFBLFVBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUF5QyxVQUFBLFVBQUEsRUFBQSxJQUF6QztBQUF5QyxVQUFBLEtBQUEsRUFBQTtBQUF6QyxTQUFBO0FBQ0E7O0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLE9BQUEsS0FBQSxJQUFBLFFBQUEsRUFBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxFQUFBLFVBQUEsR0FBQSxFQUFBO0FBQWdILGlCQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFBcUIsU0FBckksQ0FBcUksSUFBckksQ0FBcUksSUFBckksRUFBcUksR0FBckksQ0FBQTtBQUNBOztBQUFBLGVBQUEsRUFBQTtBQUNBO0FBQUEsT0FUQTs7O0FBV0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxNQUFBLEdBQUEsTUFBQSxJQUFBLE1BQUEsQ0FBQSxVQUFBO0FBQ0E7QUFBQSxpQkFBQSxVQUFBLEdBQUE7QUFBMkIsaUJBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQTtBQUE0QixTQUR2RDtBQUVBO0FBQUEsaUJBQUEsZ0JBQUEsR0FBQTtBQUFpQyxpQkFBQSxNQUFBO0FBQWUsU0FGaEQ7QUFHQTs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQTtBQUNBOzs7QUFBQSxlQUFBLE1BQUE7QUFDQTtBQUFBLE9BTkE7OztBQVFBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBO0FBQXNELGVBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsRUFBQSxRQUFBLENBQUE7QUFBK0QsT0FBckg7OztBQUVBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOztBQUFBLGFBQUEsbUJBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSw0Q0FBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEscURBQUE7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGlEQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQTtBQUFBOzs7QUFBQSxZQUFBLDZDQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDJCQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSxxREFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSw2Q0FBQSxDQUFBO0FBQUE7OztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSxZQUFBLEVBQUEsWUFBQTtBQUFBLGlCQUFBLDZDQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQTtBQUFBOzs7QUFBQSxZQUFBLHNEQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLDBDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLGVBQUEsRUFBQSxZQUFBO0FB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QUFBLENBQUEsZ0JBQUEsRUFBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxTQUFBLEVBQUEsRUFBQTtBQUNBLG1CQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSx3QkFBQTtBQUNBLG1CQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsdUJBQUEsRUFBQSxNQUFBOztBQUVBLGtCQUFHLEtBQUEsT0FBQSxDQUFILGFBQUEsRUFBK0I7QUFDN0IscUJBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxxQkFBQSxFQUFBLFdBQUEsQ0FBQSxvQkFBQTtBQUNBLHFCQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsaUJBQUEsRUFBQSxNQUFBO0FBQ0Q7O0FBRURmLGNBQUFBLGtEQUFBQSxDQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxJQUFBQSxDQUFVLEtBQVZBLFFBQUFBLEVBQUFBLFdBQUFBO0FBQ0Q7Ozs7VUEzU3lCK0IsbURBQUFBLENBQUFBLFFBQUFBLEM7O0FBOFM1QnBDLFFBQUFBLGFBQWEsQ0FBYkEsUUFBQUEsR0FBeUI7QUFDdkI7Ozs7OztBQU1BcUMsVUFBQUEsVUFBVSxFQVBhLEtBQUE7O0FBUXZCOzs7Ozs7QUFNQUMsVUFBQUEsVUFBVSxFQWRhLEdBQUE7O0FBZXZCOzs7OztBQUtBQyxVQUFBQSxhQUFhLEVBcEJVLEtBQUE7O0FBcUJ2Qjs7Ozs7QUFLQUMsVUFBQUEsaUJBQWlCLEVBMUJNLGFBQUE7O0FBMkJ2Qjs7Ozs7O0FBTUFqQyxVQUFBQSxTQUFTLEVBQUU7QUFqQ1ksU0FBekJQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VEEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLGtDQUFBOzs7Ozs7QUxVQTtDQVZBIiwiZmlsZSI6ImZvdW5kYXRpb24vZm91bmRhdGlvbi5hY2NvcmRpb25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiLi9mb3VuZGF0aW9uLmNvcmVcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiLCBcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5hY2NvcmRpb25NZW51XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi51dGlsLm5lc3RcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmFjY29yZGlvbk1lbnVcIl0gPSBmYWN0b3J5KHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLnV0aWwubmVzdFwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX3V0aWxfa2V5Ym9hcmRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX25lc3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgQWNjb3JkaW9uTWVudSB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uYWNjb3JkaW9uTWVudSc7XG5Gb3VuZGF0aW9uLnBsdWdpbihBY2NvcmRpb25NZW51LCAnQWNjb3JkaW9uTWVudScpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBBY2NvcmRpb25NZW51IH07XG4iLCIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmQnO1xuaW1wb3J0IHsgTmVzdCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLm5lc3QnO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuXG4vKipcbiAqIEFjY29yZGlvbk1lbnUgbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLmFjY29yZGlvbk1lbnVcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcbiAqIEByZXF1aXJlcyBmb3VuZGF0aW9uLnV0aWwubmVzdFxuICovXG5cbmNsYXNzIEFjY29yZGlvbk1lbnUgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBhbiBhY2NvcmRpb24gbWVudS5cbiAgICogQGNsYXNzXG4gICAqIEBuYW1lIEFjY29yZGlvbk1lbnVcbiAgICogQGZpcmVzIEFjY29yZGlvbk1lbnUjaW5pdFxuICAgKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gbWFrZSBpbnRvIGFuIGFjY29yZGlvbiBtZW51LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBY2NvcmRpb25NZW51LmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnQWNjb3JkaW9uTWVudSc7IC8vIGllOSBiYWNrIGNvbXBhdFxuXG4gICAgdGhpcy5faW5pdCgpO1xuXG4gICAgS2V5Ym9hcmQucmVnaXN0ZXIoJ0FjY29yZGlvbk1lbnUnLCB7XG4gICAgICAnRU5URVInOiAndG9nZ2xlJyxcbiAgICAgICdTUEFDRSc6ICd0b2dnbGUnLFxuICAgICAgJ0FSUk9XX1JJR0hUJzogJ29wZW4nLFxuICAgICAgJ0FSUk9XX1VQJzogJ3VwJyxcbiAgICAgICdBUlJPV19ET1dOJzogJ2Rvd24nLFxuICAgICAgJ0FSUk9XX0xFRlQnOiAnY2xvc2UnLFxuICAgICAgJ0VTQ0FQRSc6ICdjbG9zZUFsbCdcbiAgICB9KTtcbiAgfVxuXG5cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGFjY29yZGlvbiBtZW51IGJ5IGhpZGluZyBhbGwgbmVzdGVkIG1lbnVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgTmVzdC5GZWF0aGVyKHRoaXMuJGVsZW1lbnQsICdhY2NvcmRpb24nKTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXN1Ym1lbnVdJykubm90KCcuaXMtYWN0aXZlJykuc2xpZGVVcCgwKTsvLy5maW5kKCdhJykuY3NzKCdwYWRkaW5nLWxlZnQnLCAnMXJlbScpO1xuICAgIHRoaXMuJGVsZW1lbnQuYXR0cih7XG4gICAgICAncm9sZSc6ICd0cmVlJyxcbiAgICAgICdhcmlhLW11bHRpc2VsZWN0YWJsZSc6IHRoaXMub3B0aW9ucy5tdWx0aU9wZW5cbiAgICB9KTtcblxuICAgIHRoaXMuJG1lbnVMaW5rcyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLmlzLWFjY29yZGlvbi1zdWJtZW51LXBhcmVudCcpO1xuICAgIHRoaXMuJG1lbnVMaW5rcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgbGlua0lkID0gdGhpcy5pZCB8fCBHZXRZb0RpZ2l0cyg2LCAnYWNjLW1lbnUtbGluaycpLFxuICAgICAgICAgICRlbGVtID0gJCh0aGlzKSxcbiAgICAgICAgICAkc3ViID0gJGVsZW0uY2hpbGRyZW4oJ1tkYXRhLXN1Ym1lbnVdJyksXG4gICAgICAgICAgc3ViSWQgPSAkc3ViWzBdLmlkIHx8IEdldFlvRGlnaXRzKDYsICdhY2MtbWVudScpLFxuICAgICAgICAgIGlzQWN0aXZlID0gJHN1Yi5oYXNDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgIGlmKF90aGlzLm9wdGlvbnMucGFyZW50TGluaykge1xuICAgICAgICBsZXQgJGFuY2hvciA9ICRlbGVtLmNoaWxkcmVuKCdhJyk7XG4gICAgICAgICRhbmNob3IuY2xvbmUoKS5wcmVwZW5kVG8oJHN1Yikud3JhcCgnPGxpIGRhdGEtaXMtcGFyZW50LWxpbmsgY2xhc3M9XCJpcy1zdWJtZW51LXBhcmVudC1pdGVtIGlzLXN1Ym1lbnUtaXRlbSBpcy1hY2NvcmRpb24tc3VibWVudS1pdGVtXCI+PC9saT4nKTtcbiAgICAgIH1cblxuICAgICAgaWYoX3RoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlKSB7XG4gICAgICAgICRlbGVtLmFkZENsYXNzKCdoYXMtc3VibWVudS10b2dnbGUnKTtcbiAgICAgICAgJGVsZW0uY2hpbGRyZW4oJ2EnKS5hZnRlcignPGJ1dHRvbiBpZD1cIicgKyBsaW5rSWQgKyAnXCIgY2xhc3M9XCJzdWJtZW51LXRvZ2dsZVwiIGFyaWEtY29udHJvbHM9XCInICsgc3ViSWQgKyAnXCIgYXJpYS1leHBhbmRlZD1cIicgKyBpc0FjdGl2ZSArICdcIiB0aXRsZT1cIicgKyBfdGhpcy5vcHRpb25zLnN1Ym1lbnVUb2dnbGVUZXh0ICsgJ1wiPjxzcGFuIGNsYXNzPVwic3VibWVudS10b2dnbGUtdGV4dFwiPicgKyBfdGhpcy5vcHRpb25zLnN1Ym1lbnVUb2dnbGVUZXh0ICsgJzwvc3Bhbj48L2J1dHRvbj4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtLmF0dHIoe1xuICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogc3ViSWQsXG4gICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBpc0FjdGl2ZSxcbiAgICAgICAgICAnaWQnOiBsaW5rSWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAkc3ViLmF0dHIoe1xuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogbGlua0lkLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAhaXNBY3RpdmUsXG4gICAgICAgICdyb2xlJzogJ2dyb3VwJyxcbiAgICAgICAgJ2lkJzogc3ViSWRcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnbGknKS5hdHRyKHtcbiAgICAgICdyb2xlJzogJ3RyZWVpdGVtJ1xuICAgIH0pO1xuICAgIHZhciBpbml0UGFuZXMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5pcy1hY3RpdmUnKTtcbiAgICBpZihpbml0UGFuZXMubGVuZ3RoKXtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICBpbml0UGFuZXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBfdGhpcy5kb3duKCQodGhpcykpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgZm9yIGl0ZW1zIHdpdGhpbiB0aGUgbWVudS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ldmVudHMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICRzdWJtZW51ID0gJCh0aGlzKS5jaGlsZHJlbignW2RhdGEtc3VibWVudV0nKTtcblxuICAgICAgaWYgKCRzdWJtZW51Lmxlbmd0aCkge1xuICAgICAgICBpZihfdGhpcy5vcHRpb25zLnN1Ym1lbnVUb2dnbGUpIHtcbiAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3VibWVudS10b2dnbGUnKS5vZmYoJ2NsaWNrLnpmLmFjY29yZGlvbk1lbnUnKS5vbignY2xpY2suemYuYWNjb3JkaW9uTWVudScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIF90aGlzLnRvZ2dsZSgkc3VibWVudSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCdhJykub2ZmKCdjbGljay56Zi5hY2NvcmRpb25NZW51Jykub24oJ2NsaWNrLnpmLmFjY29yZGlvbk1lbnUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgX3RoaXMudG9nZ2xlKCRzdWJtZW51KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkub24oJ2tleWRvd24uemYuYWNjb3JkaW9ubWVudScsIGZ1bmN0aW9uKGUpe1xuICAgICAgdmFyICRlbGVtZW50ID0gJCh0aGlzKSxcbiAgICAgICAgICAkZWxlbWVudHMgPSAkZWxlbWVudC5wYXJlbnQoJ3VsJykuY2hpbGRyZW4oJ2xpJyksXG4gICAgICAgICAgJHByZXZFbGVtZW50LFxuICAgICAgICAgICRuZXh0RWxlbWVudCxcbiAgICAgICAgICAkdGFyZ2V0ID0gJGVsZW1lbnQuY2hpbGRyZW4oJ1tkYXRhLXN1Ym1lbnVdJyk7XG5cbiAgICAgICRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgJHByZXZFbGVtZW50ID0gJGVsZW1lbnRzLmVxKE1hdGgubWF4KDAsIGktMSkpLmZpbmQoJ2EnKS5maXJzdCgpO1xuICAgICAgICAgICRuZXh0RWxlbWVudCA9ICRlbGVtZW50cy5lcShNYXRoLm1pbihpKzEsICRlbGVtZW50cy5sZW5ndGgtMSkpLmZpbmQoJ2EnKS5maXJzdCgpO1xuXG4gICAgICAgICAgaWYgKCQodGhpcykuY2hpbGRyZW4oJ1tkYXRhLXN1Ym1lbnVdOnZpc2libGUnKS5sZW5ndGgpIHsgLy8gaGFzIG9wZW4gc3ViIG1lbnVcbiAgICAgICAgICAgICRuZXh0RWxlbWVudCA9ICRlbGVtZW50LmZpbmQoJ2xpOmZpcnN0LWNoaWxkJykuZmluZCgnYScpLmZpcnN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Zmlyc3QtY2hpbGQnKSkgeyAvLyBpcyBmaXJzdCBlbGVtZW50IG9mIHN1YiBtZW51XG4gICAgICAgICAgICAkcHJldkVsZW1lbnQgPSAkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpcnN0KCkuZmluZCgnYScpLmZpcnN0KCk7XG4gICAgICAgICAgfSBlbHNlIGlmICgkcHJldkVsZW1lbnQucGFyZW50cygnbGknKS5maXJzdCgpLmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XTp2aXNpYmxlJykubGVuZ3RoKSB7IC8vIGlmIHByZXZpb3VzIGVsZW1lbnQgaGFzIG9wZW4gc3ViIG1lbnVcbiAgICAgICAgICAgICRwcmV2RWxlbWVudCA9ICRwcmV2RWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJ2xpOmxhc3QtY2hpbGQnKS5maW5kKCdhJykuZmlyc3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCQodGhpcykuaXMoJzpsYXN0LWNoaWxkJykpIHsgLy8gaXMgbGFzdCBlbGVtZW50IG9mIHN1YiBtZW51XG4gICAgICAgICAgICAkbmV4dEVsZW1lbnQgPSAkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpcnN0KCkubmV4dCgnbGknKS5maW5kKCdhJykuZmlyc3QoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBLZXlib2FyZC5oYW5kbGVLZXkoZSwgJ0FjY29yZGlvbk1lbnUnLCB7XG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICgkdGFyZ2V0LmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgIF90aGlzLmRvd24oJHRhcmdldCk7XG4gICAgICAgICAgICAkdGFyZ2V0LmZpbmQoJ2xpJykuZmlyc3QoKS5maW5kKCdhJykuZmlyc3QoKS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICgkdGFyZ2V0Lmxlbmd0aCAmJiAhJHRhcmdldC5pcygnOmhpZGRlbicpKSB7IC8vIGNsb3NlIGFjdGl2ZSBzdWIgb2YgdGhpcyBpdGVtXG4gICAgICAgICAgICBfdGhpcy51cCgkdGFyZ2V0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCRlbGVtZW50LnBhcmVudCgnW2RhdGEtc3VibWVudV0nKS5sZW5ndGgpIHsgLy8gY2xvc2UgY3VycmVudGx5IG9wZW4gc3ViXG4gICAgICAgICAgICBfdGhpcy51cCgkZWxlbWVudC5wYXJlbnQoJ1tkYXRhLXN1Ym1lbnVdJykpO1xuICAgICAgICAgICAgJGVsZW1lbnQucGFyZW50cygnbGknKS5maXJzdCgpLmZpbmQoJ2EnKS5maXJzdCgpLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHByZXZFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRuZXh0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnN1Ym1lbnVUb2dnbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCRlbGVtZW50LmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XScpLmxlbmd0aCkge1xuICAgICAgICAgICAgX3RoaXMudG9nZ2xlKCRlbGVtZW50LmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XScpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VBbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIF90aGlzLmhpZGVBbGwoKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlZDogZnVuY3Rpb24ocHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBpZiAocHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7Ly8uYXR0cigndGFiaW5kZXgnLCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYWxsIHBhbmVzIG9mIHRoZSBtZW51LlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIGhpZGVBbGwoKSB7XG4gICAgdGhpcy51cCh0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXN1Ym1lbnVdJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFsbCBwYW5lcyBvZiB0aGUgbWVudS5cbiAgICogQGZ1bmN0aW9uXG4gICAqL1xuICBzaG93QWxsKCkge1xuICAgIHRoaXMuZG93bih0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXN1Ym1lbnVdJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIG9wZW4vY2xvc2Ugc3RhdGUgb2YgYSBzdWJtZW51LlxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSB0aGUgc3VibWVudSB0byB0b2dnbGVcbiAgICovXG4gIHRvZ2dsZSgkdGFyZ2V0KXtcbiAgICBpZighJHRhcmdldC5pcygnOmFuaW1hdGVkJykpIHtcbiAgICAgIGlmICghJHRhcmdldC5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgIHRoaXMudXAoJHRhcmdldCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5kb3duKCR0YXJnZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgc3ViLW1lbnUgZGVmaW5lZCBieSBgJHRhcmdldGAuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IC0gU3ViLW1lbnUgdG8gb3Blbi5cbiAgICogQGZpcmVzIEFjY29yZGlvbk1lbnUjZG93blxuICAgKi9cbiAgZG93bigkdGFyZ2V0KSB7XG4gICAgLy8gSWYgaGF2aW5nIG11bHRpcGxlIHN1Ym1lbnVzIGFjdGl2ZSBpcyBkaXNhYmxlZCwgY2xvc2UgYWxsIHRoZSBzdWJtZW51c1xuICAgIC8vIHRoYXQgYXJlIG5vdCBwYXJlbnRzIG9yIGNoaWxkcmVuIG9mIHRoZSB0YXJnZXRlZCBzdWJtZW51LlxuICAgIGlmICghdGhpcy5vcHRpb25zLm11bHRpT3Blbikge1xuICAgICAgLy8gVGhlIFwiYnJhbmNoXCIgb2YgdGhlIHRhcmdldHRlZCBzdWJtZW51LCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCB0b1xuICAgICAgLy8gdGhlIGFjdGl2ZSBzdWJtZW51cyBuZXN0ZWQgaW4gaXQuXG4gICAgICBjb25zdCAkdGFyZ2V0QnJhbmNoID0gJHRhcmdldC5wYXJlbnRzVW50aWwodGhpcy4kZWxlbWVudClcbiAgICAgICAgLmFkZCgkdGFyZ2V0KVxuICAgICAgICAuYWRkKCR0YXJnZXQuZmluZCgnLmlzLWFjdGl2ZScpKTtcbiAgICAgIC8vIEFsbCB0aGUgYWN0aXZlIHN1Ym1lbnVzIHRoYXQgYXJlIG5vdCBpbiB0aGUgYnJhbmNoLlxuICAgICAgY29uc3QgJG90aGVyc0FjdGl2ZVN1Ym1lbnVzID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXMtYWN0aXZlJykubm90KCR0YXJnZXRCcmFuY2gpO1xuXG4gICAgICB0aGlzLnVwKCRvdGhlcnNBY3RpdmVTdWJtZW51cyk7XG4gICAgfVxuXG4gICAgJHRhcmdldFxuICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgLmF0dHIoeyAnYXJpYS1oaWRkZW4nOiBmYWxzZSB9KTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlKSB7XG4gICAgICAkdGFyZ2V0LnByZXYoJy5zdWJtZW51LXRvZ2dsZScpLmF0dHIoeydhcmlhLWV4cGFuZGVkJzogdHJ1ZX0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICR0YXJnZXQucGFyZW50KCcuaXMtYWNjb3JkaW9uLXN1Ym1lbnUtcGFyZW50JykuYXR0cih7J2FyaWEtZXhwYW5kZWQnOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgJHRhcmdldC5zbGlkZURvd24odGhpcy5vcHRpb25zLnNsaWRlU3BlZWQsICgpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogRmlyZXMgd2hlbiB0aGUgbWVudSBpcyBkb25lIG9wZW5pbmcuXG4gICAgICAgKiBAZXZlbnQgQWNjb3JkaW9uTWVudSNkb3duXG4gICAgICAgKi9cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignZG93bi56Zi5hY2NvcmRpb25NZW51JywgWyR0YXJnZXRdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIHN1Yi1tZW51IGRlZmluZWQgYnkgYCR0YXJnZXRgLiBBbGwgc3ViLW1lbnVzIGluc2lkZSB0aGUgdGFyZ2V0IHdpbGwgYmUgY2xvc2VkIGFzIHdlbGwuXG4gICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IC0gU3ViLW1lbnUgdG8gY2xvc2UuXG4gICAqIEBmaXJlcyBBY2NvcmRpb25NZW51I3VwXG4gICAqL1xuICB1cCgkdGFyZ2V0KSB7XG4gICAgY29uc3QgJHN1Ym1lbnVzID0gJHRhcmdldC5maW5kKCdbZGF0YS1zdWJtZW51XScpO1xuICAgIGNvbnN0ICRhbGxtZW51cyA9ICR0YXJnZXQuYWRkKCRzdWJtZW51cyk7XG5cbiAgICAkc3VibWVudXMuc2xpZGVVcCgwKTtcbiAgICAkYWxsbWVudXNcbiAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gICAgaWYodGhpcy5vcHRpb25zLnN1Ym1lbnVUb2dnbGUpIHtcbiAgICAgICRhbGxtZW51cy5wcmV2KCcuc3VibWVudS10b2dnbGUnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICRhbGxtZW51cy5wYXJlbnQoJy5pcy1hY2NvcmRpb24tc3VibWVudS1wYXJlbnQnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgIH1cblxuICAgICR0YXJnZXQuc2xpZGVVcCh0aGlzLm9wdGlvbnMuc2xpZGVTcGVlZCwgKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlcyB3aGVuIHRoZSBtZW51IGlzIGRvbmUgY29sbGFwc2luZyB1cC5cbiAgICAgICAqIEBldmVudCBBY2NvcmRpb25NZW51I3VwXG4gICAgICAgKi9cbiAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcigndXAuemYuYWNjb3JkaW9uTWVudScsIFskdGFyZ2V0XSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgYW4gaW5zdGFuY2Ugb2YgYWNjb3JkaW9uIG1lbnUuXG4gICAqIEBmaXJlcyBBY2NvcmRpb25NZW51I2Rlc3Ryb3llZFxuICAgKi9cbiAgX2Rlc3Ryb3koKSB7XG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1zdWJtZW51XScpLnNsaWRlRG93bigwKS5jc3MoJ2Rpc3BsYXknLCAnJyk7XG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdhJykub2ZmKCdjbGljay56Zi5hY2NvcmRpb25NZW51Jyk7XG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1pcy1wYXJlbnQtbGlua10nKS5kZXRhY2goKTtcblxuICAgIGlmKHRoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlKSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5oYXMtc3VibWVudS10b2dnbGUnKS5yZW1vdmVDbGFzcygnaGFzLXN1Ym1lbnUtdG9nZ2xlJyk7XG4gICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5zdWJtZW51LXRvZ2dsZScpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIE5lc3QuQnVybih0aGlzLiRlbGVtZW50LCAnYWNjb3JkaW9uJyk7XG4gIH1cbn1cblxuQWNjb3JkaW9uTWVudS5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIEFkZHMgdGhlIHBhcmVudCBsaW5rIHRvIHRoZSBzdWJtZW51LlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcGFyZW50TGluazogZmFsc2UsXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgdGltZSB0byBhbmltYXRlIHRoZSBvcGVuaW5nIG9mIGEgc3VibWVudSBpbiBtcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZGVmYXVsdCAyNTBcbiAgICovXG4gIHNsaWRlU3BlZWQ6IDI1MCxcbiAgLyoqXG4gICAqIEFkZHMgYSBzZXBhcmF0ZSBzdWJtZW51IHRvZ2dsZSBidXR0b24uIFRoaXMgYWxsb3dzIHRoZSBwYXJlbnQgaXRlbSB0byBoYXZlIGEgbGluay5cbiAgICogQG9wdGlvblxuICAgKiBAZXhhbXBsZSB0cnVlXG4gICAqL1xuICBzdWJtZW51VG9nZ2xlOiBmYWxzZSxcbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHVzZWQgZm9yIHRoZSBzdWJtZW51IHRvZ2dsZSBpZiBlbmFibGVkLiBUaGlzIGlzIHVzZWQgZm9yIHNjcmVlbiByZWFkZXJzIG9ubHkuXG4gICAqIEBvcHRpb25cbiAgICogQGV4YW1wbGUgdHJ1ZVxuICAgKi9cbiAgc3VibWVudVRvZ2dsZVRleHQ6ICdUb2dnbGUgbWVudScsXG4gIC8qKlxuICAgKiBBbGxvdyB0aGUgbWVudSB0byBoYXZlIG11bHRpcGxlIG9wZW4gcGFuZXMuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIG11bHRpT3BlbjogdHJ1ZVxufTtcblxuZXhwb3J0IHtBY2NvcmRpb25NZW51fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
