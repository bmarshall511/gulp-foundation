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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var AccordionMenu = /*#__PURE__*/function (_Plugin) {
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
              }).on('keydown.zf.accordionMenu', function (e) {
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
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.accordionMenu.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uYWNjb3JkaW9uTWVudS5qcyIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZm91bmRhdGlvbi5hY2NvcmRpb25NZW51LmpzIiwid2VicGFjazovX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2V4dGVybmFsIHtcInJvb3RcIjpbXCJqUXVlcnlcIl0sXCJhbWRcIjpcImpxdWVyeVwiLFwiY29tbW9uanNcIjpcImpxdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIn0iXSwibmFtZXMiOlsiRm91bmRhdGlvbiIsIkFjY29yZGlvbk1lbnUiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCJLZXlib2FyZCIsIk5lc3QiLCJfdGhpcyIsIm11bHRpT3BlbiIsImxpbmtJZCIsIkdldFlvRGlnaXRzIiwiJGVsZW0iLCIkc3ViIiwic3ViSWQiLCJpc0FjdGl2ZSIsIiRhbmNob3IiLCJpbml0UGFuZXMiLCIkc3VibWVudSIsImUiLCIkZWxlbWVudCIsIiRlbGVtZW50cyIsIiR0YXJnZXQiLCIkcHJldkVsZW1lbnQiLCJNYXRoIiwiaSIsIiRuZXh0RWxlbWVudCIsIm9wZW4iLCJjbG9zZSIsInVwIiwiZG93biIsInRvZ2dsZSIsImNsb3NlQWxsIiwiaGFuZGxlZCIsIiR0YXJnZXRCcmFuY2giLCIkb3RoZXJzQWN0aXZlU3VibWVudXMiLCIkc3VibWVudXMiLCIkYWxsbWVudXMiLCJQbHVnaW4iLCJwYXJlbnRMaW5rIiwic2xpZGVTcGVlZCIsInN1Ym1lbnVUb2dnbGUiLCJzdWJtZW51VG9nZ2xlVGV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxNQUFBLEtBQUEsVUFBQSxJQUFBLE1BQUEsQ0FBQSxHQUFBLEVBQ0EsTUFBQSxDQUFBLENBQUEsbUJBQUEsRUFBQSw0QkFBQSxFQUFBLHdCQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsMEJBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSw0QkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLHdCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsMEJBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxzQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLHFEQUFBLEVBQUEsaURBQUEsRUFBQSxrQ0FBQSxFQUFBO0FBQ0Q7Ozs7O0FDVkE7QUFBQTs7QUFDQTtBQUFBLFVBQUEsZ0JBQUEsR0FBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsbUJBQUEsQ0FBQSxRQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7QUFBQSxZQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLGlCQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxZQUFBLE1BQUEsR0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBO0FBQ0E7QUFBQSxVQUFBLENBQUEsRUFBQSxRQURBOztBQUVBO0FBQUEsVUFBQSxDQUFBLEVBQUEsS0FGQTs7QUFHQTtBQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7O0FBSkEsU0FBQTs7O0FBTUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxtQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsSUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTs7Ozs7QUFHQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxnQkFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFBO0FBQTBDLFlBQUEsVUFBQSxFQUFBLElBQTFDO0FBQTBDLFlBQUEsR0FBQSxFQUFBO0FBQTFDLFdBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUEsT0FKQTs7O0FBTUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxPQUFBLE1BQUEsS0FBQSxXQUFBLElBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQXdELFlBQUEsS0FBQSxFQUFBO0FBQXhELFdBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQSxFQUFBO0FBQWlELFVBQUEsS0FBQSxFQUFBO0FBQWpELFNBQUE7QUFDQTtBQUFBLE9BTEE7OztBQU9BO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxLQUFBLEdBQUEsbUJBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQTs7QUFBQSxZ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LEVBQUE7QUFDQSxtQkFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsd0JBQUE7QUFDQSxtQkFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLHVCQUFBLEVBQUEsTUFBQTs7QUFFQSxrQkFBRyxLQUFBLE9BQUEsQ0FBSCxhQUFBLEVBQStCO0FBQzdCLHFCQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEscUJBQUEsRUFBQSxXQUFBLENBQUEsb0JBQUE7QUFDQSxxQkFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLGlCQUFBLEVBQUEsTUFBQTtBQUNEOztBQUVEZixjQUFBQSxrREFBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsQ0FBQUEsSUFBQUEsQ0FBVSxLQUFWQSxRQUFBQSxFQUFBQSxXQUFBQTtBQUNEOzs7O1VBMVN5QitCLG1EQUFBQSxDQUFBQSxRQUFBQSxDOztBQTZTNUJwQyxRQUFBQSxhQUFhLENBQWJBLFFBQUFBLEdBQXlCO0FBQ3ZCOzs7Ozs7QUFNQXFDLFVBQUFBLFVBQVUsRUFQYSxLQUFBOztBQVF2Qjs7Ozs7O0FBTUFDLFVBQUFBLFVBQVUsRUFkYSxHQUFBOztBQWV2Qjs7Ozs7QUFLQUMsVUFBQUEsYUFBYSxFQXBCVSxLQUFBOztBQXFCdkI7Ozs7O0FBS0FDLFVBQUFBLGlCQUFpQixFQTFCTSxhQUFBOztBQTJCdkI7Ozs7OztBQU1BakMsVUFBQUEsU0FBUyxFQUFFO0FBakNZLFNBQXpCUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1RBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FMVUE7Q0FWQSIsImZpbGUiOiJmb3VuZGF0aW9uL2ZvdW5kYXRpb24uYWNjb3JkaW9uTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5uZXN0XCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4vZm91bmRhdGlvbi5jb3JlXCIsIFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiwgXCIuL2ZvdW5kYXRpb24udXRpbC5uZXN0XCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24uYWNjb3JkaW9uTWVudVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwiLi9mb3VuZGF0aW9uLnV0aWwua2V5Ym9hcmRcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24udXRpbC5uZXN0XCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSA9IHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSB8fCB7fSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5hY2NvcmRpb25NZW51XCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24udXRpbC5rZXlib2FyZFwiXSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi51dGlsLm5lc3RcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl91dGlsX2tleWJvYXJkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fdXRpbF9uZXN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IEFjY29yZGlvbk1lbnUgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLmFjY29yZGlvbk1lbnUnO1xuRm91bmRhdGlvbi5wbHVnaW4oQWNjb3JkaW9uTWVudSwgJ0FjY29yZGlvbk1lbnUnKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgQWNjb3JkaW9uTWVudSB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4vZm91bmRhdGlvbi51dGlsLmtleWJvYXJkJztcbmltcG9ydCB7IE5lc3QgfSBmcm9tICcuL2ZvdW5kYXRpb24udXRpbC5uZXN0JztcbmltcG9ydCB7IEdldFlvRGlnaXRzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcblxuLyoqXG4gKiBBY2NvcmRpb25NZW51IG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5hY2NvcmRpb25NZW51XG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLmtleWJvYXJkXG4gKiBAcmVxdWlyZXMgZm91bmRhdGlvbi51dGlsLm5lc3RcbiAqL1xuXG5jbGFzcyBBY2NvcmRpb25NZW51IGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYW4gYWNjb3JkaW9uIG1lbnUuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBBY2NvcmRpb25NZW51XG4gICAqIEBmaXJlcyBBY2NvcmRpb25NZW51I2luaXRcbiAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIG1ha2UgaW50byBhbiBhY2NvcmRpb24gbWVudS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQWNjb3JkaW9uTWVudS5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ0FjY29yZGlvbk1lbnUnOyAvLyBpZTkgYmFjayBjb21wYXRcblxuICAgIHRoaXMuX2luaXQoKTtcblxuICAgIEtleWJvYXJkLnJlZ2lzdGVyKCdBY2NvcmRpb25NZW51Jywge1xuICAgICAgJ0VOVEVSJzogJ3RvZ2dsZScsXG4gICAgICAnU1BBQ0UnOiAndG9nZ2xlJyxcbiAgICAgICdBUlJPV19SSUdIVCc6ICdvcGVuJyxcbiAgICAgICdBUlJPV19VUCc6ICd1cCcsXG4gICAgICAnQVJST1dfRE9XTic6ICdkb3duJyxcbiAgICAgICdBUlJPV19MRUZUJzogJ2Nsb3NlJyxcbiAgICAgICdFU0NBUEUnOiAnY2xvc2VBbGwnXG4gICAgfSk7XG4gIH1cblxuXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhY2NvcmRpb24gbWVudSBieSBoaWRpbmcgYWxsIG5lc3RlZCBtZW51cy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0KCkge1xuICAgIE5lc3QuRmVhdGhlcih0aGlzLiRlbGVtZW50LCAnYWNjb3JkaW9uJyk7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1zdWJtZW51XScpLm5vdCgnLmlzLWFjdGl2ZScpLnNsaWRlVXAoMCk7Ly8uZmluZCgnYScpLmNzcygncGFkZGluZy1sZWZ0JywgJzFyZW0nKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoe1xuICAgICAgJ3JvbGUnOiAndHJlZScsXG4gICAgICAnYXJpYS1tdWx0aXNlbGVjdGFibGUnOiB0aGlzLm9wdGlvbnMubXVsdGlPcGVuXG4gICAgfSk7XG5cbiAgICB0aGlzLiRtZW51TGlua3MgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5pcy1hY2NvcmRpb24tc3VibWVudS1wYXJlbnQnKTtcbiAgICB0aGlzLiRtZW51TGlua3MuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyIGxpbmtJZCA9IHRoaXMuaWQgfHwgR2V0WW9EaWdpdHMoNiwgJ2FjYy1tZW51LWxpbmsnKSxcbiAgICAgICAgICAkZWxlbSA9ICQodGhpcyksXG4gICAgICAgICAgJHN1YiA9ICRlbGVtLmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XScpLFxuICAgICAgICAgIHN1YklkID0gJHN1YlswXS5pZCB8fCBHZXRZb0RpZ2l0cyg2LCAnYWNjLW1lbnUnKSxcbiAgICAgICAgICBpc0FjdGl2ZSA9ICRzdWIuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICBpZihfdGhpcy5vcHRpb25zLnBhcmVudExpbmspIHtcbiAgICAgICAgbGV0ICRhbmNob3IgPSAkZWxlbS5jaGlsZHJlbignYScpO1xuICAgICAgICAkYW5jaG9yLmNsb25lKCkucHJlcGVuZFRvKCRzdWIpLndyYXAoJzxsaSBkYXRhLWlzLXBhcmVudC1saW5rIGNsYXNzPVwiaXMtc3VibWVudS1wYXJlbnQtaXRlbSBpcy1zdWJtZW51LWl0ZW0gaXMtYWNjb3JkaW9uLXN1Ym1lbnUtaXRlbVwiPjwvbGk+Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmKF90aGlzLm9wdGlvbnMuc3VibWVudVRvZ2dsZSkge1xuICAgICAgICAkZWxlbS5hZGRDbGFzcygnaGFzLXN1Ym1lbnUtdG9nZ2xlJyk7XG4gICAgICAgICRlbGVtLmNoaWxkcmVuKCdhJykuYWZ0ZXIoJzxidXR0b24gaWQ9XCInICsgbGlua0lkICsgJ1wiIGNsYXNzPVwic3VibWVudS10b2dnbGVcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHN1YklkICsgJ1wiIGFyaWEtZXhwYW5kZWQ9XCInICsgaXNBY3RpdmUgKyAnXCIgdGl0bGU9XCInICsgX3RoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlVGV4dCArICdcIj48c3BhbiBjbGFzcz1cInN1Ym1lbnUtdG9nZ2xlLXRleHRcIj4nICsgX3RoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlVGV4dCArICc8L3NwYW4+PC9idXR0b24+Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbS5hdHRyKHtcbiAgICAgICAgICAnYXJpYS1jb250cm9scyc6IHN1YklkLFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJzogaXNBY3RpdmUsXG4gICAgICAgICAgJ2lkJzogbGlua0lkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgJHN1Yi5hdHRyKHtcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxpbmtJZCxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogIWlzQWN0aXZlLFxuICAgICAgICAncm9sZSc6ICdncm91cCcsXG4gICAgICAgICdpZCc6IHN1YklkXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ2xpJykuYXR0cih7XG4gICAgICAncm9sZSc6ICd0cmVlaXRlbSdcbiAgICB9KTtcbiAgICB2YXIgaW5pdFBhbmVzID0gdGhpcy4kZWxlbWVudC5maW5kKCcuaXMtYWN0aXZlJyk7XG4gICAgaWYoaW5pdFBhbmVzLmxlbmd0aCl7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgaW5pdFBhbmVzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgX3RoaXMuZG93bigkKHRoaXMpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGZvciBpdGVtcyB3aXRoaW4gdGhlIG1lbnUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkc3VibWVudSA9ICQodGhpcykuY2hpbGRyZW4oJ1tkYXRhLXN1Ym1lbnVdJyk7XG5cbiAgICAgIGlmICgkc3VibWVudS5sZW5ndGgpIHtcbiAgICAgICAgaWYoX3RoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlKSB7XG4gICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Ym1lbnUtdG9nZ2xlJykub2ZmKCdjbGljay56Zi5hY2NvcmRpb25NZW51Jykub24oJ2NsaWNrLnpmLmFjY29yZGlvbk1lbnUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBfdGhpcy50b2dnbGUoJHN1Ym1lbnUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignYScpLm9mZignY2xpY2suemYuYWNjb3JkaW9uTWVudScpLm9uKCdjbGljay56Zi5hY2NvcmRpb25NZW51JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIF90aGlzLnRvZ2dsZSgkc3VibWVudSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLm9uKCdrZXlkb3duLnpmLmFjY29yZGlvbk1lbnUnLCBmdW5jdGlvbihlKXtcbiAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyksXG4gICAgICAgICAgJGVsZW1lbnRzID0gJGVsZW1lbnQucGFyZW50KCd1bCcpLmNoaWxkcmVuKCdsaScpLFxuICAgICAgICAgICRwcmV2RWxlbWVudCxcbiAgICAgICAgICAkbmV4dEVsZW1lbnQsXG4gICAgICAgICAgJHRhcmdldCA9ICRlbGVtZW50LmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XScpO1xuXG4gICAgICAkZWxlbWVudHMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICRwcmV2RWxlbWVudCA9ICRlbGVtZW50cy5lcShNYXRoLm1heCgwLCBpLTEpKS5maW5kKCdhJykuZmlyc3QoKTtcbiAgICAgICAgICAkbmV4dEVsZW1lbnQgPSAkZWxlbWVudHMuZXEoTWF0aC5taW4oaSsxLCAkZWxlbWVudHMubGVuZ3RoLTEpKS5maW5kKCdhJykuZmlyc3QoKTtcblxuICAgICAgICAgIGlmICgkKHRoaXMpLmNoaWxkcmVuKCdbZGF0YS1zdWJtZW51XTp2aXNpYmxlJykubGVuZ3RoKSB7IC8vIGhhcyBvcGVuIHN1YiBtZW51XG4gICAgICAgICAgICAkbmV4dEVsZW1lbnQgPSAkZWxlbWVudC5maW5kKCdsaTpmaXJzdC1jaGlsZCcpLmZpbmQoJ2EnKS5maXJzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmZpcnN0LWNoaWxkJykpIHsgLy8gaXMgZmlyc3QgZWxlbWVudCBvZiBzdWIgbWVudVxuICAgICAgICAgICAgJHByZXZFbGVtZW50ID0gJGVsZW1lbnQucGFyZW50cygnbGknKS5maXJzdCgpLmZpbmQoJ2EnKS5maXJzdCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoJHByZXZFbGVtZW50LnBhcmVudHMoJ2xpJykuZmlyc3QoKS5jaGlsZHJlbignW2RhdGEtc3VibWVudV06dmlzaWJsZScpLmxlbmd0aCkgeyAvLyBpZiBwcmV2aW91cyBlbGVtZW50IGhhcyBvcGVuIHN1YiBtZW51XG4gICAgICAgICAgICAkcHJldkVsZW1lbnQgPSAkcHJldkVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCdsaTpsYXN0LWNoaWxkJykuZmluZCgnYScpLmZpcnN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCc6bGFzdC1jaGlsZCcpKSB7IC8vIGlzIGxhc3QgZWxlbWVudCBvZiBzdWIgbWVudVxuICAgICAgICAgICAgJG5leHRFbGVtZW50ID0gJGVsZW1lbnQucGFyZW50cygnbGknKS5maXJzdCgpLm5leHQoJ2xpJykuZmluZCgnYScpLmZpcnN0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgS2V5Ym9hcmQuaGFuZGxlS2V5KGUsICdBY2NvcmRpb25NZW51Jywge1xuICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJHRhcmdldC5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICBfdGhpcy5kb3duKCR0YXJnZXQpO1xuICAgICAgICAgICAgJHRhcmdldC5maW5kKCdsaScpLmZpcnN0KCkuZmluZCgnYScpLmZpcnN0KCkuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJHRhcmdldC5sZW5ndGggJiYgISR0YXJnZXQuaXMoJzpoaWRkZW4nKSkgeyAvLyBjbG9zZSBhY3RpdmUgc3ViIG9mIHRoaXMgaXRlbVxuICAgICAgICAgICAgX3RoaXMudXAoJHRhcmdldCk7XG4gICAgICAgICAgfSBlbHNlIGlmICgkZWxlbWVudC5wYXJlbnQoJ1tkYXRhLXN1Ym1lbnVdJykubGVuZ3RoKSB7IC8vIGNsb3NlIGN1cnJlbnRseSBvcGVuIHN1YlxuICAgICAgICAgICAgX3RoaXMudXAoJGVsZW1lbnQucGFyZW50KCdbZGF0YS1zdWJtZW51XScpKTtcbiAgICAgICAgICAgICRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmlyc3QoKS5maW5kKCdhJykuZmlyc3QoKS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRwcmV2RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkb3duOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkbmV4dEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zdWJtZW51VG9nZ2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkZWxlbWVudC5jaGlsZHJlbignW2RhdGEtc3VibWVudV0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzLnRvZ2dsZSgkZWxlbWVudC5jaGlsZHJlbignW2RhdGEtc3VibWVudV0nKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlQWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy5oaWRlQWxsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZWQ6IGZ1bmN0aW9uKHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTsvLy5hdHRyKCd0YWJpbmRleCcsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbGwgcGFuZXMgb2YgdGhlIG1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKi9cbiAgaGlkZUFsbCgpIHtcbiAgICB0aGlzLnVwKHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtc3VibWVudV0nKSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYWxsIHBhbmVzIG9mIHRoZSBtZW51LlxuICAgKiBAZnVuY3Rpb25cbiAgICovXG4gIHNob3dBbGwoKSB7XG4gICAgdGhpcy5kb3duKHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtc3VibWVudV0nKSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgb3Blbi9jbG9zZSBzdGF0ZSBvZiBhIHN1Ym1lbnUuXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIHRoZSBzdWJtZW51IHRvIHRvZ2dsZVxuICAgKi9cbiAgdG9nZ2xlKCR0YXJnZXQpe1xuICAgIGlmKCEkdGFyZ2V0LmlzKCc6YW5pbWF0ZWQnKSkge1xuICAgICAgaWYgKCEkdGFyZ2V0LmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgdGhpcy51cCgkdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmRvd24oJHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBzdWItbWVudSBkZWZpbmVkIGJ5IGAkdGFyZ2V0YC5cbiAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBTdWItbWVudSB0byBvcGVuLlxuICAgKiBAZmlyZXMgQWNjb3JkaW9uTWVudSNkb3duXG4gICAqL1xuICBkb3duKCR0YXJnZXQpIHtcbiAgICAvLyBJZiBoYXZpbmcgbXVsdGlwbGUgc3VibWVudXMgYWN0aXZlIGlzIGRpc2FibGVkLCBjbG9zZSBhbGwgdGhlIHN1Ym1lbnVzXG4gICAgLy8gdGhhdCBhcmUgbm90IHBhcmVudHMgb3IgY2hpbGRyZW4gb2YgdGhlIHRhcmdldGVkIHN1Ym1lbnUuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubXVsdGlPcGVuKSB7XG4gICAgICAvLyBUaGUgXCJicmFuY2hcIiBvZiB0aGUgdGFyZ2V0dGVkIHN1Ym1lbnUsIGZyb20gdGhlIGNvbXBvbmVudCByb290IHRvXG4gICAgICAvLyB0aGUgYWN0aXZlIHN1Ym1lbnVzIG5lc3RlZCBpbiBpdC5cbiAgICAgIGNvbnN0ICR0YXJnZXRCcmFuY2ggPSAkdGFyZ2V0LnBhcmVudHNVbnRpbCh0aGlzLiRlbGVtZW50KVxuICAgICAgICAuYWRkKCR0YXJnZXQpXG4gICAgICAgIC5hZGQoJHRhcmdldC5maW5kKCcuaXMtYWN0aXZlJykpO1xuICAgICAgLy8gQWxsIHRoZSBhY3RpdmUgc3VibWVudXMgdGhhdCBhcmUgbm90IGluIHRoZSBicmFuY2guXG4gICAgICBjb25zdCAkb3RoZXJzQWN0aXZlU3VibWVudXMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5pcy1hY3RpdmUnKS5ub3QoJHRhcmdldEJyYW5jaCk7XG5cbiAgICAgIHRoaXMudXAoJG90aGVyc0FjdGl2ZVN1Ym1lbnVzKTtcbiAgICB9XG5cbiAgICAkdGFyZ2V0XG4gICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAuYXR0cih7ICdhcmlhLWhpZGRlbic6IGZhbHNlIH0pO1xuXG4gICAgaWYodGhpcy5vcHRpb25zLnN1Ym1lbnVUb2dnbGUpIHtcbiAgICAgICR0YXJnZXQucHJldignLnN1Ym1lbnUtdG9nZ2xlJykuYXR0cih7J2FyaWEtZXhwYW5kZWQnOiB0cnVlfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJHRhcmdldC5wYXJlbnQoJy5pcy1hY2NvcmRpb24tc3VibWVudS1wYXJlbnQnKS5hdHRyKHsnYXJpYS1leHBhbmRlZCc6IHRydWV9KTtcbiAgICB9XG5cbiAgICAkdGFyZ2V0LnNsaWRlRG93bih0aGlzLm9wdGlvbnMuc2xpZGVTcGVlZCwgKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBGaXJlcyB3aGVuIHRoZSBtZW51IGlzIGRvbmUgb3BlbmluZy5cbiAgICAgICAqIEBldmVudCBBY2NvcmRpb25NZW51I2Rvd25cbiAgICAgICAqL1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdkb3duLnpmLmFjY29yZGlvbk1lbnUnLCBbJHRhcmdldF0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgc3ViLW1lbnUgZGVmaW5lZCBieSBgJHRhcmdldGAuIEFsbCBzdWItbWVudXMgaW5zaWRlIHRoZSB0YXJnZXQgd2lsbCBiZSBjbG9zZWQgYXMgd2VsbC5cbiAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBTdWItbWVudSB0byBjbG9zZS5cbiAgICogQGZpcmVzIEFjY29yZGlvbk1lbnUjdXBcbiAgICovXG4gIHVwKCR0YXJnZXQpIHtcbiAgICBjb25zdCAkc3VibWVudXMgPSAkdGFyZ2V0LmZpbmQoJ1tkYXRhLXN1Ym1lbnVdJyk7XG4gICAgY29uc3QgJGFsbG1lbnVzID0gJHRhcmdldC5hZGQoJHN1Ym1lbnVzKTtcblxuICAgICRzdWJtZW51cy5zbGlkZVVwKDApO1xuICAgICRhbGxtZW51c1xuICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICBpZih0aGlzLm9wdGlvbnMuc3VibWVudVRvZ2dsZSkge1xuICAgICAgJGFsbG1lbnVzLnByZXYoJy5zdWJtZW51LXRvZ2dsZScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJGFsbG1lbnVzLnBhcmVudCgnLmlzLWFjY29yZGlvbi1zdWJtZW51LXBhcmVudCcpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgJHRhcmdldC5zbGlkZVVwKHRoaXMub3B0aW9ucy5zbGlkZVNwZWVkLCAoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgZG9uZSBjb2xsYXBzaW5nIHVwLlxuICAgICAgICogQGV2ZW50IEFjY29yZGlvbk1lbnUjdXBcbiAgICAgICAqL1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCd1cC56Zi5hY2NvcmRpb25NZW51JywgWyR0YXJnZXRdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBhbiBpbnN0YW5jZSBvZiBhY2NvcmRpb24gbWVudS5cbiAgICogQGZpcmVzIEFjY29yZGlvbk1lbnUjZGVzdHJveWVkXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLXN1Ym1lbnVdJykuc2xpZGVEb3duKDApLmNzcygnZGlzcGxheScsICcnKTtcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ2EnKS5vZmYoJ2NsaWNrLnpmLmFjY29yZGlvbk1lbnUnKTtcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWlzLXBhcmVudC1saW5rXScpLmRldGFjaCgpO1xuXG4gICAgaWYodGhpcy5vcHRpb25zLnN1Ym1lbnVUb2dnbGUpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmhhcy1zdWJtZW51LXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdoYXMtc3VibWVudS10b2dnbGUnKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLnN1Ym1lbnUtdG9nZ2xlJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgTmVzdC5CdXJuKHRoaXMuJGVsZW1lbnQsICdhY2NvcmRpb24nKTtcbiAgfVxufVxuXG5BY2NvcmRpb25NZW51LmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogQWRkcyB0aGUgcGFyZW50IGxpbmsgdG8gdGhlIHN1Ym1lbnUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBwYXJlbnRMaW5rOiBmYWxzZSxcbiAgLyoqXG4gICAqIEFtb3VudCBvZiB0aW1lIHRvIGFuaW1hdGUgdGhlIG9wZW5pbmcgb2YgYSBzdWJtZW51IGluIG1zLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZWZhdWx0IDI1MFxuICAgKi9cbiAgc2xpZGVTcGVlZDogMjUwLFxuICAvKipcbiAgICogQWRkcyBhIHNlcGFyYXRlIHN1Ym1lbnUgdG9nZ2xlIGJ1dHRvbi4gVGhpcyBhbGxvd3MgdGhlIHBhcmVudCBpdGVtIHRvIGhhdmUgYSBsaW5rLlxuICAgKiBAb3B0aW9uXG4gICAqIEBleGFtcGxlIHRydWVcbiAgICovXG4gIHN1Ym1lbnVUb2dnbGU6IGZhbHNlLFxuICAvKipcbiAgICogVGhlIHRleHQgdXNlZCBmb3IgdGhlIHN1Ym1lbnUgdG9nZ2xlIGlmIGVuYWJsZWQuIFRoaXMgaXMgdXNlZCBmb3Igc2NyZWVuIHJlYWRlcnMgb25seS5cbiAgICogQG9wdGlvblxuICAgKiBAZXhhbXBsZSB0cnVlXG4gICAqL1xuICBzdWJtZW51VG9nZ2xlVGV4dDogJ1RvZ2dsZSBtZW51JyxcbiAgLyoqXG4gICAqIEFsbG93IHRoZSBtZW51IHRvIGhhdmUgbXVsdGlwbGUgb3BlbiBwYW5lcy5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgbXVsdGlPcGVuOiB0cnVlXG59O1xuXG5leHBvcnQge0FjY29yZGlvbk1lbnV9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
