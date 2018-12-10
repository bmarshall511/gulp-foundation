(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("./foundation.core.plugin"), require("./foundation.core.utils"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "./foundation.core.plugin", "./foundation.core.utils", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.abide"] = factory(require("./foundation.core"), require("./foundation.core.plugin"), require("./foundation.core.utils"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.abide"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE__foundation_core_plugin__, __WEBPACK_EXTERNAL_MODULE__foundation_core_utils__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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

      return __webpack_require__(__webpack_require__.s = 0);
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
      "./foundation.core.plugin":
      /*!*************************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core.plugin","commonjs":"./foundation.core.plugin","commonjs2":"./foundation.core.plugin"} ***!
        \*************************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core_plugin__;
        /***/
      },

      /***/
      "./foundation.core.utils":
      /*!**********************************************************************************************************************************************************************************!*\
        !*** external {"root":["__FOUNDATION_EXTERNAL__","foundation.core"],"amd":"./foundation.core.utils","commonjs":"./foundation.core.utils","commonjs2":"./foundation.core.utils"} ***!
        \**********************************************************************************************************************************************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__foundation_core_utils__;
        /***/
      },

      /***/
      "./js/entries/plugins/foundation.abide.js":
      /*!************************************************!*\
        !*** ./js/entries/plugins/foundation.abide.js ***!
        \************************************************/

      /*! exports provided: Foundation, Abide */

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


        var _foundation_abide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../foundation.abide */
        "./js/foundation.abide.js");
        /* harmony reexport (safe) */


        __webpack_require__.d(__webpack_exports__, "Abide", function () {
          return _foundation_abide__WEBPACK_IMPORTED_MODULE_1__["Abide"];
        });

        _foundation_core__WEBPACK_IMPORTED_MODULE_0__["Foundation"].plugin(_foundation_abide__WEBPACK_IMPORTED_MODULE_1__["Abide"], 'Abide');
        /***/

      },

      /***/
      "./js/foundation.abide.js":
      /*!********************************!*\
        !*** ./js/foundation.abide.js ***!
        \********************************/

      /*! exports provided: Abide */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "Abide", function () {
          return Abide;
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
        "./foundation.core.plugin");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./foundation.core.utils */
        "./foundation.core.utils");
        /* harmony import */


        var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__);

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
         * Abide module.
         * @module foundation.abide
         */


        var Abide =
        /*#__PURE__*/
        function (_Plugin) {
          _inherits(Abide, _Plugin);

          function Abide() {
            _classCallCheck(this, Abide);

            return _possibleConstructorReturn(this, _getPrototypeOf(Abide).apply(this, arguments));
          }

          _createClass(Abide, [{
            key: "_setup",

            /**
             * Creates a new instance of Abide.
             * @class
             * @name Abide
             * @fires Abide#init
             * @param {Object} element - jQuery object to add the trigger to.
             * @param {Object} options - Overrides to the default plugin settings.
             */
            value: function _setup(element) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              this.$element = element;
              this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(true, {}, Abide.defaults, this.$element.data(), options);
              this.className = 'Abide'; // ie9 back compat

              this._init();
            }
            /**
             * Initializes the Abide plugin and calls functions to get Abide functioning on load.
             * @private
             */

          }, {
            key: "_init",
            value: function _init() {
              var _this2 = this;

              this.$inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.merge( // Consider as input to validate:
              this.$element.find('input').not('[type=submit]'), // * all input fields expect submit
              this.$element.find('textarea, select') // * all textareas and select fields
              );
              var $globalErrors = this.$element.find('[data-abide-error]'); // Add a11y attributes to all fields

              if (this.options.a11yAttributes) {
                this.$inputs.each(function (i, input) {
                  return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));
                });
                $globalErrors.each(function (i, error) {
                  return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));
                });
              }

              this._events();
            }
            /**
             * Initializes events for Abide.
             * @private
             */

          }, {
            key: "_events",
            value: function _events() {
              var _this3 = this;

              this.$element.off('.abide').on('reset.zf.abide', function () {
                _this3.resetForm();
              }).on('submit.zf.abide', function () {
                return _this3.validateForm();
              });

              if (this.options.validateOn === 'fieldChange') {
                this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
                  _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
                });
              }

              if (this.options.liveValidate) {
                this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
                  _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
                });
              }

              if (this.options.validateOnBlur) {
                this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
                  _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
                });
              }
            }
            /**
             * Calls necessary functions to update Abide upon DOM change
             * @private
             */

          }, {
            key: "_reflow",
            value: function _reflow() {
              this._init();
            }
            /**
             * Checks whether or not a form element has the required attribute and if it's checked or not
             * @param {Object} element - jQuery object to check for required attribute
             * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
             */

          }, {
            key: "requiredCheck",
            value: function requiredCheck($el) {
              if (!$el.attr('required')) return true;
              var isGood = true;

              switch ($el[0].type) {
                case 'checkbox':
                  isGood = $el[0].checked;
                  break;

                case 'select':
                case 'select-one':
                case 'select-multiple':
                  var opt = $el.find('option:selected');
                  if (!opt.length || !opt.val()) isGood = false;
                  break;

                default:
                  if (!$el.val() || !$el.val().length) isGood = false;
              }

              return isGood;
            }
            /**
             * Get:
             * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
             *   1. The element's direct sibling('s).
             *   2. The element's parent's children.
             * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
             *
             * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
             *
             * @param {Object} $el - jQuery object to use as reference to find the form error selector.
             * @returns {Object} jQuery object with the selector.
             */

          }, {
            key: "findFormError",
            value: function findFormError($el) {
              var id = $el[0].id;
              var $error = $el.siblings(this.options.formErrorSelector);

              if (!$error.length) {
                $error = $el.parent().find(this.options.formErrorSelector);
              }

              if (id) {
                $error = $error.add(this.$element.find("[data-form-error-for=\"".concat(id, "\"]")));
              }

              return $error;
            }
            /**
             * Get the first element in this order:
             * 2. The <label> with the attribute `[for="someInputId"]`
             * 3. The `.closest()` <label>
             *
             * @param {Object} $el - jQuery object to check for required attribute
             * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
             */

          }, {
            key: "findLabel",
            value: function findLabel($el) {
              var id = $el[0].id;
              var $label = this.$element.find("label[for=\"".concat(id, "\"]"));

              if (!$label.length) {
                return $el.closest('label');
              }

              return $label;
            }
            /**
             * Get the set of labels associated with a set of radio els in this order
             * 2. The <label> with the attribute `[for="someInputId"]`
             * 3. The `.closest()` <label>
             *
             * @param {Object} $el - jQuery object to check for required attribute
             * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
             */

          }, {
            key: "findRadioLabels",
            value: function findRadioLabels($els) {
              var _this4 = this;

              var labels = $els.map(function (i, el) {
                var id = el.id;

                var $label = _this4.$element.find("label[for=\"".concat(id, "\"]"));

                if (!$label.length) {
                  $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
                }

                return $label[0];
              });
              return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
            }
            /**
             * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
             * @param {Object} $el - jQuery object to add the class to
             */

          }, {
            key: "addErrorClasses",
            value: function addErrorClasses($el) {
              var $label = this.findLabel($el);
              var $formError = this.findFormError($el);

              if ($label.length) {
                $label.addClass(this.options.labelErrorClass);
              }

              if ($formError.length) {
                $formError.addClass(this.options.formErrorClass);
              }

              $el.addClass(this.options.inputErrorClass).attr({
                'data-invalid': '',
                'aria-invalid': true
              });
            }
            /**
             * Adds [for] and [role=alert] attributes to all form error targetting $el,
             * and [aria-describedby] attribute to $el toward the first form error.
             * @param {Object} $el - jQuery object
             */

          }, {
            key: "addA11yAttributes",
            value: function addA11yAttributes($el) {
              var $errors = this.findFormError($el);
              var $labels = $errors.filter('label');
              var $error = $errors.first();
              if (!$errors.length) return; // Set [aria-describedby] on the input toward the first form error if it is not set

              if (typeof $el.attr('aria-describedby') === 'undefined') {
                // Get the first error ID or create one
                var errorId = $error.attr('id');

                if (typeof errorId === 'undefined') {
                  errorId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-error');
                  $error.attr('id', errorId);
                }

                ;
                $el.attr('aria-describedby', errorId);
              }

              if ($labels.filter('[for]').length < $labels.length) {
                // Get the input ID or create one
                var elemId = $el.attr('id');

                if (typeof elemId === 'undefined') {
                  elemId = Object(_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__["GetYoDigits"])(6, 'abide-input');
                  $el.attr('id', elemId);
                }

                ; // For each label targeting $el, set [for] if it is not set.

                $labels.each(function (i, label) {
                  var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
                  if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);
                });
              } // For each error targeting $el, set [role=alert] if it is not set.


              $errors.each(function (i, label) {
                var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
                if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');
              }).end();
            }
            /**
             * Adds [aria-live] attribute to the given global form error $el.
             * @param {Object} $el - jQuery object to add the attribute to
             */

          }, {
            key: "addGlobalErrorA11yAttributes",
            value: function addGlobalErrorA11yAttributes($el) {
              if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);
            }
            /**
             * Remove CSS error classes etc from an entire radio button group
             * @param {String} groupName - A string that specifies the name of a radio button group
             *
             */

          }, {
            key: "removeRadioErrorClasses",
            value: function removeRadioErrorClasses(groupName) {
              var $els = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
              var $labels = this.findRadioLabels($els);
              var $formErrors = this.findFormError($els);

              if ($labels.length) {
                $labels.removeClass(this.options.labelErrorClass);
              }

              if ($formErrors.length) {
                $formErrors.removeClass(this.options.formErrorClass);
              }

              $els.removeClass(this.options.inputErrorClass).attr({
                'data-invalid': null,
                'aria-invalid': null
              });
            }
            /**
             * Removes CSS error class as specified by the Abide settings from the label, input, and the form
             * @param {Object} $el - jQuery object to remove the class from
             */

          }, {
            key: "removeErrorClasses",
            value: function removeErrorClasses($el) {
              // radios need to clear all of the els
              if ($el[0].type == 'radio') {
                return this.removeRadioErrorClasses($el.attr('name'));
              }

              var $label = this.findLabel($el);
              var $formError = this.findFormError($el);

              if ($label.length) {
                $label.removeClass(this.options.labelErrorClass);
              }

              if ($formError.length) {
                $formError.removeClass(this.options.formErrorClass);
              }

              $el.removeClass(this.options.inputErrorClass).attr({
                'data-invalid': null,
                'aria-invalid': null
              });
            }
            /**
             * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
             * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
             * @fires Abide#invalid
             * @fires Abide#valid
             * @param {Object} element - jQuery object to validate, should be an HTML input
             * @returns {Boolean} goodToGo - If the input is valid or not.
             */

          }, {
            key: "validateInput",
            value: function validateInput($el) {
              var clearRequire = this.requiredCheck($el),
                  validated = false,
                  customValidator = true,
                  validator = $el.attr('data-validator'),
                  equalTo = true; // don't validate ignored inputs or hidden inputs or disabled inputs

              if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
                return true;
              }

              switch ($el[0].type) {
                case 'radio':
                  validated = this.validateRadio($el.attr('name'));
                  break;

                case 'checkbox':
                  validated = clearRequire;
                  break;

                case 'select':
                case 'select-one':
                case 'select-multiple':
                  validated = clearRequire;
                  break;

                default:
                  validated = this.validateText($el);
              }

              if (validator) {
                customValidator = this.matchValidation($el, validator, $el.attr('required'));
              }

              if ($el.attr('data-equalto')) {
                equalTo = this.options.validators.equalTo($el);
              }

              var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
              var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

              if (goodToGo) {
                // Re-validate inputs that depend on this one with equalto
                var dependentElements = this.$element.find("[data-equalto=\"".concat($el.attr('id'), "\"]"));

                if (dependentElements.length) {
                  var _this = this;

                  dependentElements.each(function () {
                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
                      _this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
                    }
                  });
                }
              }

              this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);
              /**
               * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
               * Trigger includes the DOM element of the input.
               * @event Abide#valid
               * @event Abide#invalid
               */

              $el.trigger(message, [$el]);
              return goodToGo;
            }
            /**
             * Goes through a form and if there are any invalid inputs, it will display the form error element
             * @returns {Boolean} noError - true if no errors were detected...
             * @fires Abide#formvalid
             * @fires Abide#forminvalid
             */

          }, {
            key: "validateForm",
            value: function validateForm() {
              var _this5 = this;

              var acc = [];

              var _this = this;

              this.$inputs.each(function () {
                acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));
              });
              var noError = acc.indexOf(false) === -1;
              this.$element.find('[data-abide-error]').each(function (i, elem) {
                var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem); // Ensure a11y attributes are set

                if (_this5.options.a11yAttributes) _this5.addGlobalErrorA11yAttributes($elem); // Show or hide the error

                $elem.css('display', noError ? 'none' : 'block');
              });
              /**
               * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
               * Trigger includes the element of the form.
               * @event Abide#formvalid
               * @event Abide#forminvalid
               */

              this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
              return noError;
            }
            /**
             * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
             * @param {Object} $el - jQuery object to validate, should be a text input HTML element
             * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
             * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
             */

          }, {
            key: "validateText",
            value: function validateText($el, pattern) {
              // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
              pattern = pattern || $el.attr('pattern') || $el.attr('type');
              var inputText = $el.val();
              var valid = false;

              if (inputText.length) {
                // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
                if (this.options.patterns.hasOwnProperty(pattern)) {
                  valid = this.options.patterns[pattern].test(inputText);
                } // If the pattern name isn't also the type attribute of the field, then test it as a regexp
                else if (pattern !== $el.attr('type')) {
                    valid = new RegExp(pattern).test(inputText);
                  } else {
                    valid = true;
                  }
              } // An empty field is valid if it's not required
              else if (!$el.prop('required')) {
                  valid = true;
                }

              return valid;
            }
            /**
             * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
             * @param {String} groupName - A string that specifies the name of a radio button group
             * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
             */

          }, {
            key: "validateRadio",
            value: function validateRadio(groupName) {
              // If at least one radio in the group has the `required` attribute, the group is considered required
              // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
              var $group = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
              var valid = false,
                  required = false; // For the group to be required, at least one radio needs to be required

              $group.each(function (i, e) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
                  required = true;
                }
              });
              if (!required) valid = true;

              if (!valid) {
                // For the group to be valid, at least one radio needs to be checked
                $group.each(function (i, e) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
                    valid = true;
                  }
                });
              }

              ;
              return valid;
            }
            /**
             * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
             * @param {Object} $el - jQuery input element.
             * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
             * @param {Boolean} required - self explanatory?
             * @returns {Boolean} - true if validations passed.
             */

          }, {
            key: "matchValidation",
            value: function matchValidation($el, validators, required) {
              var _this6 = this;

              required = required ? true : false;
              var clear = validators.split(' ').map(function (v) {
                return _this6.options.validators[v]($el, required, $el.parent());
              });
              return clear.indexOf(false) === -1;
            }
            /**
             * Resets form inputs and styles
             * @fires Abide#formreset
             */

          }, {
            key: "resetForm",
            value: function resetForm() {
              var $form = this.$element,
                  opts = this.options;
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(".".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);
              jquery__WEBPACK_IMPORTED_MODULE_0___default()("".concat(opts.formErrorSelector, ".").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
              $form.find('[data-abide-error]').css('display', 'none');
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({
                'data-invalid': null,
                'aria-invalid': null
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({
                'data-invalid': null,
                'aria-invalid': null
              });
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({
                'data-invalid': null,
                'aria-invalid': null
              });
              /**
               * Fires when the form has been reset.
               * @event Abide#formreset
               */

              $form.trigger('formreset.zf.abide', [$form]);
            }
            /**
             * Destroys an instance of Abide.
             * Removes error styles and classes from elements, without resetting their values.
             */

          }, {
            key: "_destroy",
            value: function _destroy() {
              var _this = this;

              this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
              this.$inputs.off('.abide').each(function () {
                _this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
              });
            }
          }]);

          return Abide;
        }(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]);
        /**
         * Default settings for plugin
         */


        Abide.defaults = {
          /**
           * The default event to validate inputs. Checkboxes and radios validate immediately.
           * Remove or change this value for manual validation.
           * @option
           * @type {?string}
           * @default 'fieldChange'
           */
          validateOn: 'fieldChange',

          /**
           * Class to be applied to input labels on failed validation.
           * @option
           * @type {string}
           * @default 'is-invalid-label'
           */
          labelErrorClass: 'is-invalid-label',

          /**
           * Class to be applied to inputs on failed validation.
           * @option
           * @type {string}
           * @default 'is-invalid-input'
           */
          inputErrorClass: 'is-invalid-input',

          /**
           * Class selector to use to target Form Errors for show/hide.
           * @option
           * @type {string}
           * @default '.form-error'
           */
          formErrorSelector: '.form-error',

          /**
           * Class added to Form Errors on failed validation.
           * @option
           * @type {string}
           * @default 'is-visible'
           */
          formErrorClass: 'is-visible',

          /**
           * If true, automatically insert when possible:
           * - `[aria-describedby]` on fields
           * - `[role=alert]` on form errors and `[for]` on form error labels
           * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
           * @option
           * @type {boolean}
           * @default true
           */
          a11yAttributes: true,

          /**
           * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
           * Options are: 'assertive', 'polite' and 'off'/null
           * @option
           * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
           * @type {string}
           * @default 'assertive'
           */
          a11yErrorLevel: 'assertive',

          /**
           * Set to true to validate text inputs on any value change.
           * @option
           * @type {boolean}
           * @default false
           */
          liveValidate: false,

          /**
           * Set to true to validate inputs on blur.
           * @option
           * @type {boolean}
           * @default false
           */
          validateOnBlur: false,
          patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            // amex, visa, diners
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            // From CommonRegexJS (@talyssonoc)
            // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
            // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
            url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
            // abc.de
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            // YYYY-MM-DD
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            // HH:MM:SS
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            // MM/DD/YYYY
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            // DD/MM/YYYY
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            // #FFF or #FFFFFF
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
            // Domain || URL
            website: {
              test: function test(text) {
                return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
              }
            }
          },

          /**
           * Optional validation functions to be used. `equalTo` being the only default included function.
           * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
           * el : The jQuery element to validate.
           * required : Boolean value of the required attribute be present or not.
           * parent : The direct parent of the input.
           * @option
           */
          validators: {
            equalTo: function equalTo(el, required, parent) {
              return jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(el.attr('data-equalto'))).val() === el.val();
            }
          }
        };
        /***/
      },

      /***/
      0:
      /*!******************************************************!*\
        !*** multi ./js/entries/plugins/foundation.abide.js ***!
        \******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/plugins/foundation.abide.js */
        "./js/entries/plugins/foundation.abide.js");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uYWJpZGUuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24uYWJpZGUuanMiLCJ3ZWJwYWNrOi9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOltcImpRdWVyeVwiXSxcImFtZFwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwifSJdLCJuYW1lcyI6WyJBYmlkZSIsImVsZW1lbnQiLCJvcHRpb25zIiwiJGdsb2JhbEVycm9ycyIsImUiLCIkZWwiLCJpc0dvb2QiLCJvcHQiLCJpZCIsIiRlcnJvciIsIiRsYWJlbCIsIiRlbHMiLCJsYWJlbHMiLCJlbCIsIiRmb3JtRXJyb3IiLCIkZXJyb3JzIiwiJGxhYmVscyIsImVycm9ySWQiLCJlbGVtSWQiLCJncm91cE5hbWUiLCIkZm9ybUVycm9ycyIsImNsZWFyUmVxdWlyZSIsInZhbGlkYXRlZCIsImN1c3RvbVZhbGlkYXRvciIsInZhbGlkYXRvciIsImVxdWFsVG8iLCJnb29kVG9HbyIsIm1lc3NhZ2UiLCJkZXBlbmRlbnRFbGVtZW50cyIsIl90aGlzIiwiYWNjIiwibm9FcnJvciIsIiRlbGVtIiwicGF0dGVybiIsImlucHV0VGV4dCIsInZhbGlkIiwiJGdyb3VwIiwicmVxdWlyZWQiLCJ2YWxpZGF0b3JzIiwiY2xlYXIiLCIkZm9ybSIsIm9wdHMiLCIkIiwidmFsaWRhdGVPbiIsImxhYmVsRXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImZvcm1FcnJvclNlbGVjdG9yIiwiZm9ybUVycm9yQ2xhc3MiLCJhMTF5QXR0cmlidXRlcyIsImExMXlFcnJvckxldmVsIiwibGl2ZVZhbGlkYXRlIiwidmFsaWRhdGVPbkJsdXIiLCJwYXR0ZXJucyIsImFscGhhIiwiYWxwaGFfbnVtZXJpYyIsImludGVnZXIiLCJudW1iZXIiLCJjYXJkIiwiY3Z2IiwiZW1haWwiLCJ1cmwiLCJkb21haW4iLCJkYXRldGltZSIsImRhdGUiLCJ0aW1lIiwiZGF0ZUlTTyIsIm1vbnRoX2RheV95ZWFyIiwiZGF5X21vbnRoX3llYXIiLCJjb2xvciIsIndlYnNpdGUiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFNBQUEsZ0NBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEseUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLDBCQUFBLEVBQUEseUJBQUEsRUFBQSxRQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FEQSxLQUVBLElBQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxFQUNBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLDBCQUFBLENBQUEsRUFBQSxPQUFBLENBQUEseUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxrQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsUUFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLDRDQUFBLEVBQUEsbURBQUEsRUFBQSxrREFBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVBQUEsR0FBQTtBQUEyQixpQkFBQSxNQUFBLENBQUEsU0FBQSxDQUFBO0FBQTRCLFNBRHZEO0FBRUE7QUFBQSxpQkFBQSxnQkFBQSxHQUFBO0FBQWlDLGlCQUFBLE1BQUE7QUFBZSxTQUZoRDtBQUdBOztBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBO0FBQ0E7OztBQUFBLGVBQUEsTUFBQTtBQUNBO0FBQUEsT0FOQTs7O0FBUUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUE7QUFBc0QsZUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLENBQUEsTUFBQSxFQUFBLFFBQUEsQ0FBQTtBQUErRCxPQUFySDs7O0FBRUE7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxFQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7O0FBQUEsYUFBQSxtQkFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsUUFBQSxNQUFBLENBQUEsT0FBQSxHQUFBLDRDQUFBOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxtREFBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0RBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBO0FBQUE7OztBQUFBLFlBQUEsNkNBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsMkJBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLHFEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLDZDQUFBLENBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFlBQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsNkNBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxTQUFBO0FBQUE7OztBQUFBLFlBQUEsOENBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsa0NBQUEsQ0FBQTtBQUFBOzs7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsT0FBQSxFQUFBLFlBQUE7QUFBQSxpQkFBQSw4Q0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLFNBQUE7O0FDR0EsUUFBQSw2Q0FBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBa0IsOENBQUEsQ0FBbEIsT0FBa0IsQ0FBbEIsRUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUJBQUE7QUFBQTs7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLE9BQUEsRUFBQSxZQUFBO0FBQUEsaUJBQUEsS0FBQTtBQUFBLFNBQUE7QUFBQTs7O0FBQUEsWUFBQSxtQ0FBQSxHQUFBLG1CQUFBO0FBQUE7QUFBQSxnQkFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsMkNBQUE7QUFBQTtBQUFBLFFBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsbUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLG9EQUFBLEdBQUEsbUJBQUE7QUFBQTtBQUFBLGtDQUFBLENBQUE7QUFBQTs7O0FBQUEsWUFBQSw0REFBQTtBQUFBO0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxvREFBQSxDQUFBO0FBQUE7OztBQUFBLFlBQUEsbURBQUEsR0FBQSxtQkFBQTtBQUFBO0FBQUEsaUNBQUEsQ0FBQTtBQUFBOzs7QUFBQSxZQUFBLDJEQUFBO0FBQUE7QUFBQSxRQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLG1EQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7Ozs7WUFLTUEsSzs7Ozs7Ozs7Ozs7Ozs7QUFDSjs7Ozs7Ozs7bUNBUU9DLE8sRUFBdUI7QUFBQSxrQkFBZEMsT0FBYyxHQUFBLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFKLEVBQUk7QUFDNUIsbUJBQUEsUUFBQSxHQUFBLE9BQUE7QUFDQSxtQkFBQSxPQUFBLEdBQWdCLDJDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLEVBQUEsRUFBQSxFQUFtQkYsS0FBSyxDQUF4QixRQUFBLEVBQW1DLEtBQUEsUUFBQSxDQUFuQyxJQUFtQyxFQUFuQyxFQUFoQixPQUFnQixDQUFoQjtBQUVBLG1CQUFBLFNBQUEsR0FKNEIsT0FJNUIsQ0FKNEIsQ0FJRjs7QUFDMUIsbUJBQUEsS0FBQTtBQUNEO0FBRUQ7Ozs7Ozs7b0NBSVE7QUFBQSxrQkFBQSxNQUFBLEdBQUEsSUFBQTs7QUFDTixtQkFBQSxPQUFBLEdBQWUsMkNBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxFQUF1QztBQUNwRCxtQkFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsRUFBQSxHQUFBLENBRGEsZUFDYixDQURhLEVBQ3VDO0FBQ3BELG1CQUFBLFFBQUEsQ0FBQSxJQUFBLENBRmEsa0JBRWIsQ0FGYSxDQUV1QztBQUZ2QyxlQUFmO0FBSUEsa0JBQU1HLGFBQWEsR0FBRyxLQUFBLFFBQUEsQ0FBQSxJQUFBLENBTGhCLG9CQUtnQixDQUF0QixDQUxNLENBT047O0FBQ0Esa0JBQUksS0FBQSxPQUFBLENBQUosY0FBQSxFQUFpQztBQUMvQixxQkFBQSxPQUFBLENBQUEsSUFBQSxDQUFrQixVQUFBLENBQUEsRUFBQSxLQUFBLEVBQUE7QUFBQSx5QkFBYyxNQUFJLENBQUosaUJBQUEsQ0FBdUIsMkNBQUEsR0FBckMsS0FBcUMsQ0FBdkIsQ0FBZDtBQUFsQixpQkFBQTtBQUNBQSxnQkFBQUEsYUFBYSxDQUFiQSxJQUFBQSxDQUFtQixVQUFBLENBQUEsRUFBQSxLQUFBLEVBQUE7QUFBQSx5QkFBYyxNQUFJLENBQUosNEJBQUEsQ0FBa0MsMkNBQUEsR0FBaEQsS0FBZ0QsQ0FBbEMsQ0FBZDtBQUFuQkEsaUJBQUFBO0FBQ0Q7O0FBRUQsbUJBQUEsT0FBQTtBQUNEO0FBRUQ7Ozs7Ozs7c0NBSVU7QUFBQSxrQkFBQSxNQUFBLEdBQUEsSUFBQTs7QUFDUixtQkFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLFFBQUEsRUFBQSxFQUFBLENBQUEsZ0JBQUEsRUFDd0IsWUFBTTtBQUMxQixnQkFBQSxNQUFJLENBQUosU0FBQTtBQUZKLGVBQUEsRUFBQSxFQUFBLENBQUEsaUJBQUEsRUFJeUIsWUFBTTtBQUMzQix1QkFBTyxNQUFJLENBQVgsWUFBTyxFQUFQO0FBTEosZUFBQTs7QUFRQSxrQkFBSSxLQUFBLE9BQUEsQ0FBQSxVQUFBLEtBQUosYUFBQSxFQUErQztBQUM3QyxxQkFBQSxPQUFBLENBQUEsR0FBQSxDQUFBLGlCQUFBLEVBQUEsRUFBQSxDQUFBLGlCQUFBLEVBRXlCLFVBQUEsQ0FBQSxFQUFPO0FBQzVCLGtCQUFBLE1BQUksQ0FBSixhQUFBLENBQW1CLDJDQUFBLEdBQUVDLENBQUMsQ0FBdEIsTUFBbUIsQ0FBbkI7QUFISixpQkFBQTtBQUtEOztBQUVELGtCQUFJLEtBQUEsT0FBQSxDQUFKLFlBQUEsRUFBK0I7QUFDN0IscUJBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxnQkFBQSxFQUFBLEVBQUEsQ0FBQSxnQkFBQSxFQUV3QixVQUFBLENBQUEsRUFBTztBQUMzQixrQkFBQSxNQUFJLENBQUosYUFBQSxDQUFtQiwyQ0FBQSxHQUFFQSxDQUFDLENBQXRCLE1BQW1CLENBQW5CO0FBSEosaUJBQUE7QUFLRDs7QUFFRCxrQkFBSSxLQUFBLE9BQUEsQ0FBSixjQUFBLEVBQWlDO0FBQy9CLHFCQUFBLE9BQUEsQ0FBQSxHQUFBLENBQUEsZUFBQSxFQUFBLEVBQUEsQ0FBQSxlQUFBLEVBRXVCLFVBQUEsQ0FBQSxFQUFPO0FBQzFCLGtCQUFBLE1BQUksQ0FBSixhQUFBLENBQW1CLDJDQUFBLEdBQUVBLENBQUMsQ0FBdEIsTUFBbUIsQ0FBbkI7QUFISixpQkFBQTtBQUtEO0FBQ0Y7QUFFRDs7Ozs7OztzQ0FJVTtBQUNSLG1CQUFBLEtBQUE7QUFDRDtBQUVEOzs7Ozs7OzswQ0FLY0MsRyxFQUFLO0FBQ2pCLGtCQUFJLENBQUNBLEdBQUcsQ0FBSEEsSUFBQUEsQ0FBTCxVQUFLQSxDQUFMLEVBQTJCLE9BQUEsSUFBQTtBQUUzQixrQkFBSUMsTUFBTSxHQUFWLElBQUE7O0FBRUEsc0JBQVFELEdBQUcsQ0FBSEEsQ0FBRyxDQUFIQSxDQUFSLElBQUE7QUFDRSxxQkFBQSxVQUFBO0FBQ0VDLGtCQUFBQSxNQUFNLEdBQUdELEdBQUcsQ0FBSEEsQ0FBRyxDQUFIQSxDQUFUQyxPQUFBQTtBQUNBOztBQUVGLHFCQUFBLFFBQUE7QUFDQSxxQkFBQSxZQUFBO0FBQ0EscUJBQUEsaUJBQUE7QUFDRSxzQkFBSUMsR0FBRyxHQUFHRixHQUFHLENBQUhBLElBQUFBLENBQVYsaUJBQVVBLENBQVY7QUFDQSxzQkFBSSxDQUFDRSxHQUFHLENBQUosTUFBQSxJQUFlLENBQUNBLEdBQUcsQ0FBdkIsR0FBb0JBLEVBQXBCLEVBQStCRCxNQUFNLEdBQU5BLEtBQUFBO0FBQy9COztBQUVGO0FBQ0Usc0JBQUcsQ0FBQ0QsR0FBRyxDQUFKLEdBQUNBLEVBQUQsSUFBYyxDQUFDQSxHQUFHLENBQUhBLEdBQUFBLEdBQWxCLE1BQUEsRUFBb0NDLE1BQU0sR0FBTkEsS0FBQUE7QUFieEM7O0FBZ0JBLHFCQUFBLE1BQUE7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7MENBWWNELEcsRUFBSztBQUNqQixrQkFBSUcsRUFBRSxHQUFHSCxHQUFHLENBQUhBLENBQUcsQ0FBSEEsQ0FBVCxFQUFBO0FBQ0Esa0JBQUlJLE1BQU0sR0FBR0osR0FBRyxDQUFIQSxRQUFBQSxDQUFhLEtBQUEsT0FBQSxDQUExQixpQkFBYUEsQ0FBYjs7QUFFQSxrQkFBSSxDQUFDSSxNQUFNLENBQVgsTUFBQSxFQUFvQjtBQUNsQkEsZ0JBQUFBLE1BQU0sR0FBR0osR0FBRyxDQUFIQSxNQUFBQSxHQUFBQSxJQUFBQSxDQUFrQixLQUFBLE9BQUEsQ0FBM0JJLGlCQUFTSixDQUFUSTtBQUNEOztBQUVELGtCQUFBLEVBQUEsRUFBUTtBQUNOQSxnQkFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQU5BLEdBQUFBLENBQVcsS0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLDBCQUFBLE1BQUEsQ0FBQSxFQUFBLEVBQXBCQSxLQUFvQixDQUFBLENBQVhBLENBQVRBO0FBQ0Q7O0FBRUQscUJBQUEsTUFBQTtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O3NDQVFVSixHLEVBQUs7QUFDYixrQkFBSUcsRUFBRSxHQUFHSCxHQUFHLENBQUhBLENBQUcsQ0FBSEEsQ0FBVCxFQUFBO0FBQ0Esa0JBQUlLLE1BQU0sR0FBRyxLQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsZUFBQSxNQUFBLENBQUEsRUFBQSxFQUFiLEtBQWEsQ0FBQSxDQUFiOztBQUVBLGtCQUFJLENBQUNBLE1BQU0sQ0FBWCxNQUFBLEVBQW9CO0FBQ2xCLHVCQUFPTCxHQUFHLENBQUhBLE9BQUFBLENBQVAsT0FBT0EsQ0FBUDtBQUNEOztBQUVELHFCQUFBLE1BQUE7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs0Q0FRZ0JNLEksRUFBTTtBQUFBLGtCQUFBLE1BQUEsR0FBQSxJQUFBOztBQUNwQixrQkFBSUMsTUFBTSxHQUFHLElBQUksQ0FBSixHQUFBLENBQVMsVUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFXO0FBQy9CLG9CQUFJSixFQUFFLEdBQUdLLEVBQUUsQ0FBWCxFQUFBOztBQUNBLG9CQUFJSCxNQUFNLEdBQUcsTUFBSSxDQUFKLFFBQUEsQ0FBQSxJQUFBLENBQUEsZUFBQSxNQUFBLENBQUEsRUFBQSxFQUFiLEtBQWEsQ0FBQSxDQUFiOztBQUVBLG9CQUFJLENBQUNBLE1BQU0sQ0FBWCxNQUFBLEVBQW9CO0FBQ2xCQSxrQkFBQUEsTUFBTSxHQUFHLDJDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUEsT0FBQSxDQUFUQSxPQUFTLENBQVRBO0FBQ0Q7O0FBQ0QsdUJBQU9BLE1BQU0sQ0FBYixDQUFhLENBQWI7QUFQRixlQUFhLENBQWI7QUFVQSxxQkFBTywyQ0FBQSxHQUFQLE1BQU8sQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7NENBSWdCTCxHLEVBQUs7QUFDbkIsa0JBQUlLLE1BQU0sR0FBRyxLQUFBLFNBQUEsQ0FBYixHQUFhLENBQWI7QUFDQSxrQkFBSUksVUFBVSxHQUFHLEtBQUEsYUFBQSxDQUFqQixHQUFpQixDQUFqQjs7QUFFQSxrQkFBSUosTUFBTSxDQUFWLE1BQUEsRUFBbUI7QUFDakJBLGdCQUFBQSxNQUFNLENBQU5BLFFBQUFBLENBQWdCLEtBQUEsT0FBQSxDQUFoQkEsZUFBQUE7QUFDRDs7QUFFRCxrQkFBSUksVUFBVSxDQUFkLE1BQUEsRUFBdUI7QUFDckJBLGdCQUFBQSxVQUFVLENBQVZBLFFBQUFBLENBQW9CLEtBQUEsT0FBQSxDQUFwQkEsY0FBQUE7QUFDRDs7QUFFRFQsY0FBQUEsR0FBRyxDQUFIQSxRQUFBQSxDQUFhLEtBQUEsT0FBQSxDQUFiQSxlQUFBQSxFQUFBQSxJQUFBQSxDQUFnRDtBQUM5QyxnQ0FEOEMsRUFBQTtBQUU5QyxnQ0FBZ0I7QUFGOEIsZUFBaERBO0FBSUQ7QUFFRDs7Ozs7Ozs7OENBS2tCQSxHLEVBQUs7QUFDckIsa0JBQUlVLE9BQU8sR0FBRyxLQUFBLGFBQUEsQ0FBZCxHQUFjLENBQWQ7QUFDQSxrQkFBSUMsT0FBTyxHQUFHRCxPQUFPLENBQVBBLE1BQUFBLENBQWQsT0FBY0EsQ0FBZDtBQUNBLGtCQUFJTixNQUFNLEdBQUdNLE9BQU8sQ0FBcEIsS0FBYUEsRUFBYjtBQUNBLGtCQUFJLENBQUNBLE9BQU8sQ0FBWixNQUFBLEVBSnFCLE9BQUEsQ0FNckI7O0FBQ0Esa0JBQUksT0FBT1YsR0FBRyxDQUFIQSxJQUFBQSxDQUFQLGtCQUFPQSxDQUFQLEtBQUosV0FBQSxFQUF5RDtBQUN2RDtBQUNBLG9CQUFJWSxPQUFPLEdBQUdSLE1BQU0sQ0FBTkEsSUFBQUEsQ0FBZCxJQUFjQSxDQUFkOztBQUNBLG9CQUFJLE9BQUEsT0FBQSxLQUFKLFdBQUEsRUFBb0M7QUFDbENRLGtCQUFBQSxPQUFPLEdBQUcsTUFBQSxDQUFBLG1EQUFBLENBQUEsYUFBQSxDQUFBLENBQUEsQ0FBVyxDQUFYLEVBQVZBLGFBQVUsQ0FBVkE7QUFDQVIsa0JBQUFBLE1BQU0sQ0FBTkEsSUFBQUEsQ0FBQUEsSUFBQUEsRUFBQUEsT0FBQUE7QUFDRDs7QUFBQTtBQUVESixnQkFBQUEsR0FBRyxDQUFIQSxJQUFBQSxDQUFBQSxrQkFBQUEsRUFBQUEsT0FBQUE7QUFDRDs7QUFFRCxrQkFBSVcsT0FBTyxDQUFQQSxNQUFBQSxDQUFBQSxPQUFBQSxFQUFBQSxNQUFBQSxHQUFpQ0EsT0FBTyxDQUE1QyxNQUFBLEVBQXFEO0FBQ25EO0FBQ0Esb0JBQUlFLE1BQU0sR0FBR2IsR0FBRyxDQUFIQSxJQUFBQSxDQUFiLElBQWFBLENBQWI7O0FBQ0Esb0JBQUksT0FBQSxNQUFBLEtBQUosV0FBQSxFQUFtQztBQUNqQ2Esa0JBQUFBLE1BQU0sR0FBRyxNQUFBLENBQUEsbURBQUEsQ0FBQSxhQUFBLENBQUEsQ0FBQSxDQUFXLENBQVgsRUFBVEEsYUFBUyxDQUFUQTtBQUNBYixrQkFBQUEsR0FBRyxDQUFIQSxJQUFBQSxDQUFBQSxJQUFBQSxFQUFBQSxNQUFBQTtBQUNEOztBQU5rRCxpQkFBQSxDQVFuRDs7QUFDQVcsZ0JBQUFBLE9BQU8sQ0FBUEEsSUFBQUEsQ0FBYSxVQUFBLENBQUEsRUFBQSxLQUFBLEVBQWM7QUFDekIsc0JBQU1OLE1BQU0sR0FBRywyQ0FBQSxHQUFmLEtBQWUsQ0FBZjtBQUNBLHNCQUFJLE9BQU9BLE1BQU0sQ0FBTkEsSUFBQUEsQ0FBUCxLQUFPQSxDQUFQLEtBQUosV0FBQSxFQUNFQSxNQUFNLENBQU5BLElBQUFBLENBQUFBLEtBQUFBLEVBQUFBLE1BQUFBO0FBSEpNLGlCQUFBQTtBQTNCbUIsZUFBQSxDQWtDckI7OztBQUNBRCxjQUFBQSxPQUFPLENBQVBBLElBQUFBLENBQWEsVUFBQSxDQUFBLEVBQUEsS0FBQSxFQUFjO0FBQ3pCLG9CQUFNTCxNQUFNLEdBQUcsMkNBQUEsR0FBZixLQUFlLENBQWY7QUFDQSxvQkFBSSxPQUFPQSxNQUFNLENBQU5BLElBQUFBLENBQVAsTUFBT0EsQ0FBUCxLQUFKLFdBQUEsRUFDRUEsTUFBTSxDQUFOQSxJQUFBQSxDQUFBQSxNQUFBQSxFQUFBQSxPQUFBQTtBQUhKSyxlQUFBQSxFQUFBQSxHQUFBQTtBQUtEO0FBRUQ7Ozs7Ozs7eURBSTZCVixHLEVBQUs7QUFDaEMsa0JBQUksT0FBT0EsR0FBRyxDQUFIQSxJQUFBQSxDQUFQLFdBQU9BLENBQVAsS0FBSixXQUFBLEVBQ0VBLEdBQUcsQ0FBSEEsSUFBQUEsQ0FBQUEsV0FBQUEsRUFBc0IsS0FBQSxPQUFBLENBQXRCQSxjQUFBQTtBQUNIO0FBRUQ7Ozs7Ozs7O29EQUt3QmMsUyxFQUFXO0FBQ2pDLGtCQUFJUixJQUFJLEdBQUcsS0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLGlCQUFBLE1BQUEsQ0FBQSxTQUFBLEVBQVgsS0FBVyxDQUFBLENBQVg7QUFDQSxrQkFBSUssT0FBTyxHQUFHLEtBQUEsZUFBQSxDQUFkLElBQWMsQ0FBZDtBQUNBLGtCQUFJSSxXQUFXLEdBQUcsS0FBQSxhQUFBLENBQWxCLElBQWtCLENBQWxCOztBQUVBLGtCQUFJSixPQUFPLENBQVgsTUFBQSxFQUFvQjtBQUNsQkEsZ0JBQUFBLE9BQU8sQ0FBUEEsV0FBQUEsQ0FBb0IsS0FBQSxPQUFBLENBQXBCQSxlQUFBQTtBQUNEOztBQUVELGtCQUFJSSxXQUFXLENBQWYsTUFBQSxFQUF3QjtBQUN0QkEsZ0JBQUFBLFdBQVcsQ0FBWEEsV0FBQUEsQ0FBd0IsS0FBQSxPQUFBLENBQXhCQSxjQUFBQTtBQUNEOztBQUVEVCxjQUFBQSxJQUFJLENBQUpBLFdBQUFBLENBQWlCLEtBQUEsT0FBQSxDQUFqQkEsZUFBQUEsRUFBQUEsSUFBQUEsQ0FBb0Q7QUFDbEQsZ0NBRGtELElBQUE7QUFFbEQsZ0NBQWdCO0FBRmtDLGVBQXBEQTtBQUtEO0FBRUQ7Ozs7Ozs7K0NBSW1CTixHLEVBQUs7QUFDdEI7QUFDQSxrQkFBR0EsR0FBRyxDQUFIQSxDQUFHLENBQUhBLENBQUFBLElBQUFBLElBQUgsT0FBQSxFQUEyQjtBQUN6Qix1QkFBTyxLQUFBLHVCQUFBLENBQTZCQSxHQUFHLENBQUhBLElBQUFBLENBQXBDLE1BQW9DQSxDQUE3QixDQUFQO0FBQ0Q7O0FBRUQsa0JBQUlLLE1BQU0sR0FBRyxLQUFBLFNBQUEsQ0FBYixHQUFhLENBQWI7QUFDQSxrQkFBSUksVUFBVSxHQUFHLEtBQUEsYUFBQSxDQUFqQixHQUFpQixDQUFqQjs7QUFFQSxrQkFBSUosTUFBTSxDQUFWLE1BQUEsRUFBbUI7QUFDakJBLGdCQUFBQSxNQUFNLENBQU5BLFdBQUFBLENBQW1CLEtBQUEsT0FBQSxDQUFuQkEsZUFBQUE7QUFDRDs7QUFFRCxrQkFBSUksVUFBVSxDQUFkLE1BQUEsRUFBdUI7QUFDckJBLGdCQUFBQSxVQUFVLENBQVZBLFdBQUFBLENBQXVCLEtBQUEsT0FBQSxDQUF2QkEsY0FBQUE7QUFDRDs7QUFFRFQsY0FBQUEsR0FBRyxDQUFIQSxXQUFBQSxDQUFnQixLQUFBLE9BQUEsQ0FBaEJBLGVBQUFBLEVBQUFBLElBQUFBLENBQW1EO0FBQ2pELGdDQURpRCxJQUFBO0FBRWpELGdDQUFnQjtBQUZpQyxlQUFuREE7QUFJRDtBQUVEOzs7Ozs7Ozs7OzswQ0FRY0EsRyxFQUFLO0FBQ2pCLGtCQUFJZ0IsWUFBWSxHQUFHLEtBQUEsYUFBQSxDQUFuQixHQUFtQixDQUFuQjtBQUFBLGtCQUNJQyxTQUFTLEdBRGIsS0FBQTtBQUFBLGtCQUVJQyxlQUFlLEdBRm5CLElBQUE7QUFBQSxrQkFHSUMsU0FBUyxHQUFHbkIsR0FBRyxDQUFIQSxJQUFBQSxDQUhoQixnQkFHZ0JBLENBSGhCO0FBQUEsa0JBSUlvQixPQUFPLEdBTE0sSUFDakIsQ0FEaUIsQ0FPakI7O0FBQ0Esa0JBQUlwQixHQUFHLENBQUhBLEVBQUFBLENBQUFBLHFCQUFBQSxLQUFpQ0EsR0FBRyxDQUFIQSxFQUFBQSxDQUFqQ0EsaUJBQWlDQSxDQUFqQ0EsSUFBOERBLEdBQUcsQ0FBSEEsRUFBQUEsQ0FBbEUsWUFBa0VBLENBQWxFLEVBQXdGO0FBQ3RGLHVCQUFBLElBQUE7QUFDRDs7QUFFRCxzQkFBUUEsR0FBRyxDQUFIQSxDQUFHLENBQUhBLENBQVIsSUFBQTtBQUNFLHFCQUFBLE9BQUE7QUFDRWlCLGtCQUFBQSxTQUFTLEdBQUcsS0FBQSxhQUFBLENBQW1CakIsR0FBRyxDQUFIQSxJQUFBQSxDQUEvQmlCLE1BQStCakIsQ0FBbkIsQ0FBWmlCO0FBQ0E7O0FBRUYscUJBQUEsVUFBQTtBQUNFQSxrQkFBQUEsU0FBUyxHQUFUQSxZQUFBQTtBQUNBOztBQUVGLHFCQUFBLFFBQUE7QUFDQSxxQkFBQSxZQUFBO0FBQ0EscUJBQUEsaUJBQUE7QUFDRUEsa0JBQUFBLFNBQVMsR0FBVEEsWUFBQUE7QUFDQTs7QUFFRjtBQUNFQSxrQkFBQUEsU0FBUyxHQUFHLEtBQUEsWUFBQSxDQUFaQSxHQUFZLENBQVpBO0FBaEJKOztBQW1CQSxrQkFBQSxTQUFBLEVBQWU7QUFDYkMsZ0JBQUFBLGVBQWUsR0FBRyxLQUFBLGVBQUEsQ0FBQSxHQUFBLEVBQUEsU0FBQSxFQUFxQ2xCLEdBQUcsQ0FBSEEsSUFBQUEsQ0FBdkRrQixVQUF1RGxCLENBQXJDLENBQWxCa0I7QUFDRDs7QUFFRCxrQkFBSWxCLEdBQUcsQ0FBSEEsSUFBQUEsQ0FBSixjQUFJQSxDQUFKLEVBQThCO0FBQzVCb0IsZ0JBQUFBLE9BQU8sR0FBRyxLQUFBLE9BQUEsQ0FBQSxVQUFBLENBQUEsT0FBQSxDQUFWQSxHQUFVLENBQVZBO0FBQ0Q7O0FBR0Qsa0JBQUlDLFFBQVEsR0FBRyxDQUFBLFlBQUEsRUFBQSxTQUFBLEVBQUEsZUFBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLENBQUEsS0FBQSxNQUF1RSxDQUF0RixDQUFBO0FBQ0Esa0JBQUlDLE9BQU8sR0FBRyxDQUFDRCxRQUFRLEdBQUEsT0FBQSxHQUFULFNBQUEsSUFBZCxXQUFBOztBQUVBLGtCQUFBLFFBQUEsRUFBYztBQUNaO0FBQ0Esb0JBQU1FLGlCQUFpQixHQUFHLEtBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxtQkFBQSxNQUFBLENBQXFDdkIsR0FBRyxDQUFIQSxJQUFBQSxDQUFyQyxJQUFxQ0EsQ0FBckMsRUFBMUIsS0FBMEIsQ0FBQSxDQUExQjs7QUFDQSxvQkFBSXVCLGlCQUFpQixDQUFyQixNQUFBLEVBQThCO0FBQzVCLHNCQUFJQyxLQUFLLEdBQVQsSUFBQTs7QUFDQUQsa0JBQUFBLGlCQUFpQixDQUFqQkEsSUFBQUEsQ0FBdUIsWUFBVztBQUNoQyx3QkFBSSwyQ0FBQSxHQUFBLElBQUEsQ0FBQSxDQUFKLEdBQUksRUFBSixFQUFtQjtBQUNqQkMsc0JBQUFBLEtBQUssQ0FBTEEsYUFBQUEsQ0FBb0IsMkNBQUEsR0FBcEJBLElBQW9CLENBQXBCQTtBQUNEO0FBSEhELG1CQUFBQTtBQUtEO0FBQ0Y7O0FBRUQsbUJBQUtGLFFBQVEsR0FBQSxvQkFBQSxHQUFiLGlCQUFBLEVBQUEsR0FBQTtBQUVBOzs7Ozs7O0FBTUFyQixjQUFBQSxHQUFHLENBQUhBLE9BQUFBLENBQUFBLE9BQUFBLEVBQXFCLENBQXJCQSxHQUFxQixDQUFyQkE7QUFFQSxxQkFBQSxRQUFBO0FBQ0Q7QUFFRDs7Ozs7Ozs7OzJDQU1lO0FBQUEsa0JBQUEsTUFBQSxHQUFBLElBQUE7O0FBQ2Isa0JBQUl5QixHQUFHLEdBQVAsRUFBQTs7QUFDQSxrQkFBSUQsS0FBSyxHQUFULElBQUE7O0FBRUEsbUJBQUEsT0FBQSxDQUFBLElBQUEsQ0FBa0IsWUFBVztBQUMzQkMsZ0JBQUFBLEdBQUcsQ0FBSEEsSUFBQUEsQ0FBU0QsS0FBSyxDQUFMQSxhQUFBQSxDQUFvQiwyQ0FBQSxHQUE3QkMsSUFBNkIsQ0FBcEJELENBQVRDO0FBREYsZUFBQTtBQUlBLGtCQUFJQyxPQUFPLEdBQUdELEdBQUcsQ0FBSEEsT0FBQUEsQ0FBQUEsS0FBQUEsTUFBdUIsQ0FBckMsQ0FBQTtBQUVBLG1CQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsb0JBQUEsRUFBQSxJQUFBLENBQThDLFVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBYTtBQUN6RCxvQkFBTUUsS0FBSyxHQUFHLDJDQUFBLEdBRDJDLElBQzNDLENBQWQsQ0FEeUQsQ0FFekQ7O0FBQ0Esb0JBQUksTUFBSSxDQUFKLE9BQUEsQ0FBSixjQUFBLEVBQWlDLE1BQUksQ0FBSiw0QkFBQSxDQUh3QixLQUd4QixFQUh3QixDQUl6RDs7QUFDQUEsZ0JBQUFBLEtBQUssQ0FBTEEsR0FBQUEsQ0FBQUEsU0FBQUEsRUFBc0JELE9BQU8sR0FBQSxNQUFBLEdBQTdCQyxPQUFBQTtBQUxGLGVBQUE7QUFRQTs7Ozs7OztBQU1BLG1CQUFBLFFBQUEsQ0FBQSxPQUFBLENBQXNCLENBQUNELE9BQU8sR0FBQSxXQUFBLEdBQVIsYUFBQSxJQUF0QixXQUFBLEVBQTZFLENBQUMsS0FBOUUsUUFBNkUsQ0FBN0U7QUFFQSxxQkFBQSxPQUFBO0FBQ0Q7QUFFRDs7Ozs7Ozs7O3lDQU1hMUIsRyxFQUFLNEIsTyxFQUFTO0FBQ3pCO0FBQ0FBLGNBQUFBLE9BQU8sR0FBSUEsT0FBTyxJQUFJNUIsR0FBRyxDQUFIQSxJQUFBQSxDQUFYNEIsU0FBVzVCLENBQVg0QixJQUFrQzVCLEdBQUcsQ0FBSEEsSUFBQUEsQ0FBN0M0QixNQUE2QzVCLENBQTdDNEI7QUFDQSxrQkFBSUMsU0FBUyxHQUFHN0IsR0FBRyxDQUFuQixHQUFnQkEsRUFBaEI7QUFDQSxrQkFBSThCLEtBQUssR0FBVCxLQUFBOztBQUVBLGtCQUFJRCxTQUFTLENBQWIsTUFBQSxFQUFzQjtBQUNwQjtBQUNBLG9CQUFJLEtBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxjQUFBLENBQUosT0FBSSxDQUFKLEVBQW1EO0FBQ2pEQyxrQkFBQUEsS0FBSyxHQUFHLEtBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFSQSxTQUFRLENBQVJBO0FBREYsaUJBQUEsQ0FHQTtBQUhBLHFCQUlLLElBQUlGLE9BQU8sS0FBSzVCLEdBQUcsQ0FBSEEsSUFBQUEsQ0FBaEIsTUFBZ0JBLENBQWhCLEVBQWtDO0FBQ3JDOEIsb0JBQUFBLEtBQUssR0FBRyxJQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxDQUFSQSxTQUFRLENBQVJBO0FBREcsbUJBQUEsTUFHQTtBQUNIQSxvQkFBQUEsS0FBSyxHQUFMQSxJQUFBQTtBQUNEO0FBWEgsZUFBQSxDQWFBO0FBYkEsbUJBY0ssSUFBSSxDQUFDOUIsR0FBRyxDQUFIQSxJQUFBQSxDQUFMLFVBQUtBLENBQUwsRUFBMkI7QUFDOUI4QixrQkFBQUEsS0FBSyxHQUFMQSxJQUFBQTtBQUNEOztBQUVELHFCQUFBLEtBQUE7QUFDQTtBQUVGOzs7Ozs7OzswQ0FLY2hCLFMsRUFBVztBQUN2QjtBQUNBO0FBQ0Esa0JBQUlpQixNQUFNLEdBQUcsS0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLGlCQUFBLE1BQUEsQ0FBQSxTQUFBLEVBQWIsS0FBYSxDQUFBLENBQWI7QUFDQSxrQkFBSUQsS0FBSyxHQUFULEtBQUE7QUFBQSxrQkFBbUJFLFFBQVEsR0FKSixLQUl2QixDQUp1QixDQU12Qjs7QUFDQUQsY0FBQUEsTUFBTSxDQUFOQSxJQUFBQSxDQUFZLFVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBVTtBQUNwQixvQkFBSSwyQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBSixVQUFJLENBQUosRUFBMkI7QUFDekJDLGtCQUFBQSxRQUFRLEdBQVJBLElBQUFBO0FBQ0Q7QUFISEQsZUFBQUE7QUFLQSxrQkFBRyxDQUFILFFBQUEsRUFBY0QsS0FBSyxHQUFMQSxJQUFBQTs7QUFFZCxrQkFBSSxDQUFKLEtBQUEsRUFBWTtBQUNWO0FBQ0FDLGdCQUFBQSxNQUFNLENBQU5BLElBQUFBLENBQVksVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFVO0FBQ3BCLHNCQUFJLDJDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFKLFNBQUksQ0FBSixFQUEwQjtBQUN4QkQsb0JBQUFBLEtBQUssR0FBTEEsSUFBQUE7QUFDRDtBQUhIQyxpQkFBQUE7QUFLRDs7QUFBQTtBQUVELHFCQUFBLEtBQUE7QUFDRDtBQUVEOzs7Ozs7Ozs7OzRDQU9nQi9CLEcsRUFBS2lDLFUsRUFBWUQsUSxFQUFVO0FBQUEsa0JBQUEsTUFBQSxHQUFBLElBQUE7O0FBQ3pDQSxjQUFBQSxRQUFRLEdBQUdBLFFBQVEsR0FBQSxJQUFBLEdBQW5CQSxLQUFBQTtBQUVBLGtCQUFJRSxLQUFLLEdBQUcsVUFBVSxDQUFWLEtBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUEwQixVQUFBLENBQUEsRUFBTztBQUMzQyx1QkFBTyxNQUFJLENBQUosT0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLFFBQUEsRUFBMENsQyxHQUFHLENBQXBELE1BQWlEQSxFQUExQyxDQUFQO0FBREYsZUFBWSxDQUFaO0FBR0EscUJBQU9rQyxLQUFLLENBQUxBLE9BQUFBLENBQUFBLEtBQUFBLE1BQXlCLENBQWhDLENBQUE7QUFDRDtBQUVEOzs7Ozs7O3dDQUlZO0FBQ1Ysa0JBQUlDLEtBQUssR0FBRyxLQUFaLFFBQUE7QUFBQSxrQkFDSUMsSUFBSSxHQUFHLEtBRFgsT0FBQTtBQUdBQyxjQUFBQSwyQ0FBQUEsR0FBQyxJQUFBLE1BQUEsQ0FBS0QsSUFBSSxDQUFULGVBQUEsQ0FBREMsRUFBQUEsS0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsT0FBQUEsRUFBQUEsV0FBQUEsQ0FBOERELElBQUksQ0FBbEVDLGVBQUFBO0FBQ0FBLGNBQUFBLDJDQUFBQSxHQUFDLElBQUEsTUFBQSxDQUFLRCxJQUFJLENBQVQsZUFBQSxDQUFEQyxFQUFBQSxLQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxPQUFBQSxFQUFBQSxXQUFBQSxDQUE4REQsSUFBSSxDQUFsRUMsZUFBQUE7QUFDQUEsY0FBQUEsMkNBQUFBLEdBQUMsR0FBQSxNQUFBLENBQUlELElBQUksQ0FBUixpQkFBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLENBQThCQSxJQUFJLENBQW5DQyxjQUFDLENBQURBLENBQUFBLENBQUFBLFdBQUFBLENBQWtFRCxJQUFJLENBQXRFQyxjQUFBQTtBQUNBRixjQUFBQSxLQUFLLENBQUxBLElBQUFBLENBQUFBLG9CQUFBQSxFQUFBQSxHQUFBQSxDQUFBQSxTQUFBQSxFQUFBQSxNQUFBQTtBQUNBRSxjQUFBQSwyQ0FBQUEsR0FBQyxRQUFEQSxFQUFBQSxLQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSwyRUFBQUEsRUFBQUEsR0FBQUEsQ0FBQUEsRUFBQUEsRUFBQUEsSUFBQUEsQ0FBaUg7QUFDL0csZ0NBRCtHLElBQUE7QUFFL0csZ0NBQWdCO0FBRitGLGVBQWpIQTtBQUlBQSxjQUFBQSwyQ0FBQUEsR0FBQyxjQUFEQSxFQUFBQSxLQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxDQUFBQSxxQkFBQUEsRUFBQUEsSUFBQUEsQ0FBQUEsU0FBQUEsRUFBQUEsS0FBQUEsRUFBQUEsSUFBQUEsQ0FBK0U7QUFDN0UsZ0NBRDZFLElBQUE7QUFFN0UsZ0NBQWdCO0FBRjZELGVBQS9FQTtBQUlBQSxjQUFBQSwyQ0FBQUEsR0FBQyxpQkFBREEsRUFBQUEsS0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEscUJBQUFBLEVBQUFBLElBQUFBLENBQUFBLFNBQUFBLEVBQUFBLEtBQUFBLEVBQUFBLElBQUFBLENBQWtGO0FBQ2hGLGdDQURnRixJQUFBO0FBRWhGLGdDQUFnQjtBQUZnRSxlQUFsRkE7QUFJQTs7Ozs7QUFJQUYsY0FBQUEsS0FBSyxDQUFMQSxPQUFBQSxDQUFBQSxvQkFBQUEsRUFBb0MsQ0FBcENBLEtBQW9DLENBQXBDQTtBQUNEO0FBRUQ7Ozs7Ozs7dUNBSVc7QUFDVCxrQkFBSVgsS0FBSyxHQUFULElBQUE7O0FBQ0EsbUJBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxRQUFBLEVBQUEsSUFBQSxDQUFBLG9CQUFBLEVBQUEsR0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBO0FBS0EsbUJBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxRQUFBLEVBQUEsSUFBQSxDQUVRLFlBQVc7QUFDZkEsZ0JBQUFBLEtBQUssQ0FBTEEsa0JBQUFBLENBQXlCLDJDQUFBLEdBQXpCQSxJQUF5QixDQUF6QkE7QUFISixlQUFBO0FBS0Q7Ozs7VUFyaUJpQixvREFBQSxDQUFBLFFBQUEsQztBQXdpQnBCOzs7OztBQUdBN0IsUUFBQUEsS0FBSyxDQUFMQSxRQUFBQSxHQUFpQjtBQUNmOzs7Ozs7O0FBT0EyQyxVQUFBQSxVQUFVLEVBUkssYUFBQTs7QUFVZjs7Ozs7O0FBTUFDLFVBQUFBLGVBQWUsRUFoQkEsa0JBQUE7O0FBa0JmOzs7Ozs7QUFNQUMsVUFBQUEsZUFBZSxFQXhCQSxrQkFBQTs7QUEwQmY7Ozs7OztBQU1BQyxVQUFBQSxpQkFBaUIsRUFoQ0YsYUFBQTs7QUFrQ2Y7Ozs7OztBQU1BQyxVQUFBQSxjQUFjLEVBeENDLFlBQUE7O0FBMENmOzs7Ozs7Ozs7QUFTQUMsVUFBQUEsY0FBYyxFQW5EQyxJQUFBOztBQXFEZjs7Ozs7Ozs7QUFRQUMsVUFBQUEsY0FBYyxFQTdEQyxXQUFBOztBQStEZjs7Ozs7O0FBTUFDLFVBQUFBLFlBQVksRUFyRUcsS0FBQTs7QUF1RWY7Ozs7OztBQU1BQyxVQUFBQSxjQUFjLEVBN0VDLEtBQUE7QUErRWZDLFVBQUFBLFFBQVEsRUFBRTtBQUNSQyxZQUFBQSxLQUFLLEVBREcsYUFBQTtBQUVSQyxZQUFBQSxhQUFhLEVBRkwsZ0JBQUE7QUFHUkMsWUFBQUEsT0FBTyxFQUhDLFlBQUE7QUFJUkMsWUFBQUEsTUFBTSxFQUpFLDBCQUFBO0FBTVI7QUFDQUMsWUFBQUEsSUFBSSxFQVBJLDhNQUFBO0FBUVJDLFlBQUFBLEdBQUcsRUFSSyxnQkFBQTtBQVVSO0FBQ0FDLFlBQUFBLEtBQUssRUFYRyx1SUFBQTtBQWFSO0FBQ0E7QUFDQTtBQUNBQyxZQUFBQSxHQUFHLEVBaEJLLCtPQUFBO0FBa0JSO0FBQ0FDLFlBQUFBLE1BQU0sRUFuQkUsa0VBQUE7QUFxQlJDLFlBQUFBLFFBQVEsRUFyQkEsb0hBQUE7QUFzQlI7QUFDQUMsWUFBQUEsSUFBSSxFQXZCSSxnSUFBQTtBQXdCUjtBQUNBQyxZQUFBQSxJQUFJLEVBekJJLDBDQUFBO0FBMEJSQyxZQUFBQSxPQUFPLEVBMUJDLG1DQUFBO0FBMkJSO0FBQ0FDLFlBQUFBLGNBQWMsRUE1Qk4sOERBQUE7QUE2QlI7QUFDQUMsWUFBQUEsY0FBYyxFQTlCTiw4REFBQTtBQWdDUjtBQUNBQyxZQUFBQSxLQUFLLEVBakNHLHFDQUFBO0FBbUNSO0FBQ0FDLFlBQUFBLE9BQU8sRUFBRTtBQUNQQyxjQUFBQSxJQUFJLEVBQUUsU0FBQSxJQUFBLENBQUEsSUFBQSxFQUFVO0FBQ2QsdUJBQU90RSxLQUFLLENBQUxBLFFBQUFBLENBQUFBLFFBQUFBLENBQUFBLFFBQUFBLEVBQUFBLElBQUFBLENBQUFBLElBQUFBLEtBQWdEQSxLQUFLLENBQUxBLFFBQUFBLENBQUFBLFFBQUFBLENBQUFBLEtBQUFBLEVBQUFBLElBQUFBLENBQXZELElBQXVEQSxDQUF2RDtBQUNEO0FBSE07QUFwQ0QsV0EvRUs7O0FBMEhmOzs7Ozs7OztBQVFBc0MsVUFBQUEsVUFBVSxFQUFFO0FBQ1ZiLFlBQUFBLE9BQU8sRUFBRSxTQUFBLE9BQUEsQ0FBQSxFQUFBLEVBQUEsUUFBQSxFQUFBLE1BQUEsRUFBZ0M7QUFDdkMscUJBQU8sMkNBQUEsR0FBQyxJQUFBLE1BQUEsQ0FBS1osRUFBRSxDQUFGQSxJQUFBQSxDQUFOLGNBQU1BLENBQUwsQ0FBRCxDQUFBLENBQUEsR0FBQSxPQUEyQ0EsRUFBRSxDQUFwRCxHQUFrREEsRUFBbEQ7QUFDRDtBQUhTO0FBbElHLFNBQWpCYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGpCQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTFVBO0NBVkEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3VuZGF0aW9uLWFiaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW5cIiksIHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZS51dGlsc1wiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcIi4vZm91bmRhdGlvbi5jb3JlLnBsdWdpblwiLCBcIi4vZm91bmRhdGlvbi5jb3JlLnV0aWxzXCIsIFwianF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvdW5kYXRpb24uYWJpZGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlLnBsdWdpblwiKSwgcmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlLnV0aWxzXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSA9IHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSB8fCB7fSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5hYmlkZVwiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXVtcImZvdW5kYXRpb24uY29yZVwiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfcGx1Z2luX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV91dGlsc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXzsiLCJpbXBvcnQgeyBGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUnO1xuXG5pbXBvcnQgeyBBYmlkZSB9IGZyb20gJy4uLy4uL2ZvdW5kYXRpb24uYWJpZGUnO1xuRm91bmRhdGlvbi5wbHVnaW4oQWJpZGUsICdBYmlkZScpO1xuXG5leHBvcnQgeyBGb3VuZGF0aW9uLCBBYmlkZSB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUucGx1Z2luJztcbmltcG9ydCB7IEdldFlvRGlnaXRzIH0gZnJvbSAnLi9mb3VuZGF0aW9uLmNvcmUudXRpbHMnO1xuXG4vKipcbiAqIEFiaWRlIG1vZHVsZS5cbiAqIEBtb2R1bGUgZm91bmRhdGlvbi5hYmlkZVxuICovXG5cbmNsYXNzIEFiaWRlIGV4dGVuZHMgUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgQWJpZGUuXG4gICAqIEBjbGFzc1xuICAgKiBAbmFtZSBBYmlkZVxuICAgKiBAZmlyZXMgQWJpZGUjaW5pdFxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gYWRkIHRoZSB0cmlnZ2VyIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE92ZXJyaWRlcyB0byB0aGUgZGVmYXVsdCBwbHVnaW4gc2V0dGluZ3MuXG4gICAqL1xuICBfc2V0dXAoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zICA9ICQuZXh0ZW5kKHRydWUsIHt9LCBBYmlkZS5kZWZhdWx0cywgdGhpcy4kZWxlbWVudC5kYXRhKCksIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5jbGFzc05hbWUgPSAnQWJpZGUnOyAvLyBpZTkgYmFjayBjb21wYXRcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIEFiaWRlIHBsdWdpbiBhbmQgY2FsbHMgZnVuY3Rpb25zIHRvIGdldCBBYmlkZSBmdW5jdGlvbmluZyBvbiBsb2FkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXQoKSB7XG4gICAgdGhpcy4kaW5wdXRzID0gJC5tZXJnZSggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29uc2lkZXIgYXMgaW5wdXQgdG8gdmFsaWRhdGU6XG4gICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ2lucHV0Jykubm90KCdbdHlwZT1zdWJtaXRdJyksICAgLy8gKiBhbGwgaW5wdXQgZmllbGRzIGV4cGVjdCBzdWJtaXRcbiAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgndGV4dGFyZWEsIHNlbGVjdCcpICAgICAgICAgICAgICAvLyAqIGFsbCB0ZXh0YXJlYXMgYW5kIHNlbGVjdCBmaWVsZHNcbiAgICApO1xuICAgIGNvbnN0ICRnbG9iYWxFcnJvcnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWFiaWRlLWVycm9yXScpO1xuXG4gICAgLy8gQWRkIGExMXkgYXR0cmlidXRlcyB0byBhbGwgZmllbGRzXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hMTF5QXR0cmlidXRlcykge1xuICAgICAgdGhpcy4kaW5wdXRzLmVhY2goKGksIGlucHV0KSA9PiB0aGlzLmFkZEExMXlBdHRyaWJ1dGVzKCQoaW5wdXQpKSk7XG4gICAgICAkZ2xvYmFsRXJyb3JzLmVhY2goKGksIGVycm9yKSA9PiB0aGlzLmFkZEdsb2JhbEVycm9yQTExeUF0dHJpYnV0ZXMoJChlcnJvcikpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBldmVudHMgZm9yIEFiaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLmFiaWRlJylcbiAgICAgIC5vbigncmVzZXQuemYuYWJpZGUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICB9KVxuICAgICAgLm9uKCdzdWJtaXQuemYuYWJpZGUnLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT24gPT09ICdmaWVsZENoYW5nZScpIHtcbiAgICAgIHRoaXMuJGlucHV0c1xuICAgICAgICAub2ZmKCdjaGFuZ2UuemYuYWJpZGUnKVxuICAgICAgICAub24oJ2NoYW5nZS56Zi5hYmlkZScsIChlKSA9PiB7XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0KCQoZS50YXJnZXQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saXZlVmFsaWRhdGUpIHtcbiAgICAgIHRoaXMuJGlucHV0c1xuICAgICAgICAub2ZmKCdpbnB1dC56Zi5hYmlkZScpXG4gICAgICAgIC5vbignaW5wdXQuemYuYWJpZGUnLCAoZSkgPT4ge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dCgkKGUudGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPbkJsdXIpIHtcbiAgICAgIHRoaXMuJGlucHV0c1xuICAgICAgICAub2ZmKCdibHVyLnpmLmFiaWRlJylcbiAgICAgICAgLm9uKCdibHVyLnpmLmFiaWRlJywgKGUpID0+IHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXQoJChlLnRhcmdldCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgbmVjZXNzYXJ5IGZ1bmN0aW9ucyB0byB1cGRhdGUgQWJpZGUgdXBvbiBET00gY2hhbmdlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVmbG93KCkge1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgYSBmb3JtIGVsZW1lbnQgaGFzIHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgYW5kIGlmIGl0J3MgY2hlY2tlZCBvciBub3RcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIGNoZWNrIGZvciByZXF1aXJlZCBhdHRyaWJ1dGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IEJvb2xlYW4gdmFsdWUgZGVwZW5kcyBvbiB3aGV0aGVyIG9yIG5vdCBhdHRyaWJ1dGUgaXMgY2hlY2tlZCBvciBlbXB0eVxuICAgKi9cbiAgcmVxdWlyZWRDaGVjaygkZWwpIHtcbiAgICBpZiAoISRlbC5hdHRyKCdyZXF1aXJlZCcpKSByZXR1cm4gdHJ1ZTtcblxuICAgIHZhciBpc0dvb2QgPSB0cnVlO1xuXG4gICAgc3dpdGNoICgkZWxbMF0udHlwZSkge1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICBpc0dvb2QgPSAkZWxbMF0uY2hlY2tlZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICBjYXNlICdzZWxlY3Qtb25lJzpcbiAgICAgIGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6XG4gICAgICAgIHZhciBvcHQgPSAkZWwuZmluZCgnb3B0aW9uOnNlbGVjdGVkJyk7XG4gICAgICAgIGlmICghb3B0Lmxlbmd0aCB8fCAhb3B0LnZhbCgpKSBpc0dvb2QgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmKCEkZWwudmFsKCkgfHwgISRlbC52YWwoKS5sZW5ndGgpIGlzR29vZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0dvb2Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0OlxuICAgKiAtIEJhc2VkIG9uICRlbCwgdGhlIGZpcnN0IGVsZW1lbnQocykgY29ycmVzcG9uZGluZyB0byBgZm9ybUVycm9yU2VsZWN0b3JgIGluIHRoaXMgb3JkZXI6XG4gICAqICAgMS4gVGhlIGVsZW1lbnQncyBkaXJlY3Qgc2libGluZygncykuXG4gICAqICAgMi4gVGhlIGVsZW1lbnQncyBwYXJlbnQncyBjaGlsZHJlbi5cbiAgICogLSBFbGVtZW50KHMpIHdpdGggdGhlIGF0dHJpYnV0ZSBgW2RhdGEtZm9ybS1lcnJvci1mb3JdYCBzZXQgd2l0aCB0aGUgZWxlbWVudCdzIGlkLlxuICAgKlxuICAgKiBUaGlzIGFsbG93cyBmb3IgbXVsdGlwbGUgZm9ybSBlcnJvcnMgcGVyIGlucHV0LCB0aG91Z2ggaWYgbm9uZSBhcmUgZm91bmQsIG5vIGZvcm0gZXJyb3JzIHdpbGwgYmUgc2hvd24uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIHVzZSBhcyByZWZlcmVuY2UgdG8gZmluZCB0aGUgZm9ybSBlcnJvciBzZWxlY3Rvci5cbiAgICogQHJldHVybnMge09iamVjdH0galF1ZXJ5IG9iamVjdCB3aXRoIHRoZSBzZWxlY3Rvci5cbiAgICovXG4gIGZpbmRGb3JtRXJyb3IoJGVsKSB7XG4gICAgdmFyIGlkID0gJGVsWzBdLmlkO1xuICAgIHZhciAkZXJyb3IgPSAkZWwuc2libGluZ3ModGhpcy5vcHRpb25zLmZvcm1FcnJvclNlbGVjdG9yKTtcblxuICAgIGlmICghJGVycm9yLmxlbmd0aCkge1xuICAgICAgJGVycm9yID0gJGVsLnBhcmVudCgpLmZpbmQodGhpcy5vcHRpb25zLmZvcm1FcnJvclNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBpZiAoaWQpIHtcbiAgICAgICRlcnJvciA9ICRlcnJvci5hZGQodGhpcy4kZWxlbWVudC5maW5kKGBbZGF0YS1mb3JtLWVycm9yLWZvcj1cIiR7aWR9XCJdYCkpO1xuICAgIH1cblxuICAgIHJldHVybiAkZXJyb3I7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBmaXJzdCBlbGVtZW50IGluIHRoaXMgb3JkZXI6XG4gICAqIDIuIFRoZSA8bGFiZWw+IHdpdGggdGhlIGF0dHJpYnV0ZSBgW2Zvcj1cInNvbWVJbnB1dElkXCJdYFxuICAgKiAzLiBUaGUgYC5jbG9zZXN0KClgIDxsYWJlbD5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbCAtIGpRdWVyeSBvYmplY3QgdG8gY2hlY2sgZm9yIHJlcXVpcmVkIGF0dHJpYnV0ZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gQm9vbGVhbiB2YWx1ZSBkZXBlbmRzIG9uIHdoZXRoZXIgb3Igbm90IGF0dHJpYnV0ZSBpcyBjaGVja2VkIG9yIGVtcHR5XG4gICAqL1xuICBmaW5kTGFiZWwoJGVsKSB7XG4gICAgdmFyIGlkID0gJGVsWzBdLmlkO1xuICAgIHZhciAkbGFiZWwgPSB0aGlzLiRlbGVtZW50LmZpbmQoYGxhYmVsW2Zvcj1cIiR7aWR9XCJdYCk7XG5cbiAgICBpZiAoISRsYWJlbC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAkZWwuY2xvc2VzdCgnbGFiZWwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGxhYmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2V0IG9mIGxhYmVscyBhc3NvY2lhdGVkIHdpdGggYSBzZXQgb2YgcmFkaW8gZWxzIGluIHRoaXMgb3JkZXJcbiAgICogMi4gVGhlIDxsYWJlbD4gd2l0aCB0aGUgYXR0cmlidXRlIGBbZm9yPVwic29tZUlucHV0SWRcIl1gXG4gICAqIDMuIFRoZSBgLmNsb3Nlc3QoKWAgPGxhYmVsPlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsIC0galF1ZXJ5IG9iamVjdCB0byBjaGVjayBmb3IgcmVxdWlyZWQgYXR0cmlidXRlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBCb29sZWFuIHZhbHVlIGRlcGVuZHMgb24gd2hldGhlciBvciBub3QgYXR0cmlidXRlIGlzIGNoZWNrZWQgb3IgZW1wdHlcbiAgICovXG4gIGZpbmRSYWRpb0xhYmVscygkZWxzKSB7XG4gICAgdmFyIGxhYmVscyA9ICRlbHMubWFwKChpLCBlbCkgPT4ge1xuICAgICAgdmFyIGlkID0gZWwuaWQ7XG4gICAgICB2YXIgJGxhYmVsID0gdGhpcy4kZWxlbWVudC5maW5kKGBsYWJlbFtmb3I9XCIke2lkfVwiXWApO1xuXG4gICAgICBpZiAoISRsYWJlbC5sZW5ndGgpIHtcbiAgICAgICAgJGxhYmVsID0gJChlbCkuY2xvc2VzdCgnbGFiZWwnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAkbGFiZWxbMF07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJChsYWJlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIENTUyBlcnJvciBjbGFzcyBhcyBzcGVjaWZpZWQgYnkgdGhlIEFiaWRlIHNldHRpbmdzIHRvIHRoZSBsYWJlbCwgaW5wdXQsIGFuZCB0aGUgZm9ybVxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsIC0galF1ZXJ5IG9iamVjdCB0byBhZGQgdGhlIGNsYXNzIHRvXG4gICAqL1xuICBhZGRFcnJvckNsYXNzZXMoJGVsKSB7XG4gICAgdmFyICRsYWJlbCA9IHRoaXMuZmluZExhYmVsKCRlbCk7XG4gICAgdmFyICRmb3JtRXJyb3IgPSB0aGlzLmZpbmRGb3JtRXJyb3IoJGVsKTtcblxuICAgIGlmICgkbGFiZWwubGVuZ3RoKSB7XG4gICAgICAkbGFiZWwuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxhYmVsRXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCRmb3JtRXJyb3IubGVuZ3RoKSB7XG4gICAgICAkZm9ybUVycm9yLmFkZENsYXNzKHRoaXMub3B0aW9ucy5mb3JtRXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKHRoaXMub3B0aW9ucy5pbnB1dEVycm9yQ2xhc3MpLmF0dHIoe1xuICAgICAgJ2RhdGEtaW52YWxpZCc6ICcnLFxuICAgICAgJ2FyaWEtaW52YWxpZCc6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIFtmb3JdIGFuZCBbcm9sZT1hbGVydF0gYXR0cmlidXRlcyB0byBhbGwgZm9ybSBlcnJvciB0YXJnZXR0aW5nICRlbCxcbiAgICogYW5kIFthcmlhLWRlc2NyaWJlZGJ5XSBhdHRyaWJ1dGUgdG8gJGVsIHRvd2FyZCB0aGUgZmlyc3QgZm9ybSBlcnJvci5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbCAtIGpRdWVyeSBvYmplY3RcbiAgICovXG4gIGFkZEExMXlBdHRyaWJ1dGVzKCRlbCkge1xuICAgIGxldCAkZXJyb3JzID0gdGhpcy5maW5kRm9ybUVycm9yKCRlbCk7XG4gICAgbGV0ICRsYWJlbHMgPSAkZXJyb3JzLmZpbHRlcignbGFiZWwnKTtcbiAgICBsZXQgJGVycm9yID0gJGVycm9ycy5maXJzdCgpO1xuICAgIGlmICghJGVycm9ycy5sZW5ndGgpIHJldHVybjtcblxuICAgIC8vIFNldCBbYXJpYS1kZXNjcmliZWRieV0gb24gdGhlIGlucHV0IHRvd2FyZCB0aGUgZmlyc3QgZm9ybSBlcnJvciBpZiBpdCBpcyBub3Qgc2V0XG4gICAgaWYgKHR5cGVvZiAkZWwuYXR0cignYXJpYS1kZXNjcmliZWRieScpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gR2V0IHRoZSBmaXJzdCBlcnJvciBJRCBvciBjcmVhdGUgb25lXG4gICAgICBsZXQgZXJyb3JJZCA9ICRlcnJvci5hdHRyKCdpZCcpO1xuICAgICAgaWYgKHR5cGVvZiBlcnJvcklkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBlcnJvcklkID0gR2V0WW9EaWdpdHMoNiwgJ2FiaWRlLWVycm9yJyk7XG4gICAgICAgICRlcnJvci5hdHRyKCdpZCcsIGVycm9ySWQpO1xuICAgICAgfTtcblxuICAgICAgJGVsLmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBlcnJvcklkKTtcbiAgICB9XG5cbiAgICBpZiAoJGxhYmVscy5maWx0ZXIoJ1tmb3JdJykubGVuZ3RoIDwgJGxhYmVscy5sZW5ndGgpIHtcbiAgICAgIC8vIEdldCB0aGUgaW5wdXQgSUQgb3IgY3JlYXRlIG9uZVxuICAgICAgbGV0IGVsZW1JZCA9ICRlbC5hdHRyKCdpZCcpO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtSWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVsZW1JZCA9IEdldFlvRGlnaXRzKDYsICdhYmlkZS1pbnB1dCcpO1xuICAgICAgICAkZWwuYXR0cignaWQnLCBlbGVtSWQpO1xuICAgICAgfTtcblxuICAgICAgLy8gRm9yIGVhY2ggbGFiZWwgdGFyZ2V0aW5nICRlbCwgc2V0IFtmb3JdIGlmIGl0IGlzIG5vdCBzZXQuXG4gICAgICAkbGFiZWxzLmVhY2goKGksIGxhYmVsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRsYWJlbCA9ICQobGFiZWwpO1xuICAgICAgICBpZiAodHlwZW9mICRsYWJlbC5hdHRyKCdmb3InKSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgJGxhYmVsLmF0dHIoJ2ZvcicsIGVsZW1JZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGb3IgZWFjaCBlcnJvciB0YXJnZXRpbmcgJGVsLCBzZXQgW3JvbGU9YWxlcnRdIGlmIGl0IGlzIG5vdCBzZXQuXG4gICAgJGVycm9ycy5lYWNoKChpLCBsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgJGxhYmVsID0gJChsYWJlbCk7XG4gICAgICBpZiAodHlwZW9mICRsYWJlbC5hdHRyKCdyb2xlJykgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAkbGFiZWwuYXR0cigncm9sZScsICdhbGVydCcpO1xuICAgIH0pLmVuZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgW2FyaWEtbGl2ZV0gYXR0cmlidXRlIHRvIHRoZSBnaXZlbiBnbG9iYWwgZm9ybSBlcnJvciAkZWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIGFkZCB0aGUgYXR0cmlidXRlIHRvXG4gICAqL1xuICBhZGRHbG9iYWxFcnJvckExMXlBdHRyaWJ1dGVzKCRlbCkge1xuICAgIGlmICh0eXBlb2YgJGVsLmF0dHIoJ2FyaWEtbGl2ZScpID09PSAndW5kZWZpbmVkJylcbiAgICAgICRlbC5hdHRyKCdhcmlhLWxpdmUnLCB0aGlzLm9wdGlvbnMuYTExeUVycm9yTGV2ZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBDU1MgZXJyb3IgY2xhc3NlcyBldGMgZnJvbSBhbiBlbnRpcmUgcmFkaW8gYnV0dG9uIGdyb3VwXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBncm91cE5hbWUgLSBBIHN0cmluZyB0aGF0IHNwZWNpZmllcyB0aGUgbmFtZSBvZiBhIHJhZGlvIGJ1dHRvbiBncm91cFxuICAgKlxuICAgKi9cbiAgcmVtb3ZlUmFkaW9FcnJvckNsYXNzZXMoZ3JvdXBOYW1lKSB7XG4gICAgdmFyICRlbHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoYDpyYWRpb1tuYW1lPVwiJHtncm91cE5hbWV9XCJdYCk7XG4gICAgdmFyICRsYWJlbHMgPSB0aGlzLmZpbmRSYWRpb0xhYmVscygkZWxzKTtcbiAgICB2YXIgJGZvcm1FcnJvcnMgPSB0aGlzLmZpbmRGb3JtRXJyb3IoJGVscyk7XG5cbiAgICBpZiAoJGxhYmVscy5sZW5ndGgpIHtcbiAgICAgICRsYWJlbHMucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxhYmVsRXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCRmb3JtRXJyb3JzLmxlbmd0aCkge1xuICAgICAgJGZvcm1FcnJvcnMucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZvcm1FcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICAkZWxzLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5pbnB1dEVycm9yQ2xhc3MpLmF0dHIoe1xuICAgICAgJ2RhdGEtaW52YWxpZCc6IG51bGwsXG4gICAgICAnYXJpYS1pbnZhbGlkJzogbnVsbFxuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBDU1MgZXJyb3IgY2xhc3MgYXMgc3BlY2lmaWVkIGJ5IHRoZSBBYmlkZSBzZXR0aW5ncyBmcm9tIHRoZSBsYWJlbCwgaW5wdXQsIGFuZCB0aGUgZm9ybVxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsIC0galF1ZXJ5IG9iamVjdCB0byByZW1vdmUgdGhlIGNsYXNzIGZyb21cbiAgICovXG4gIHJlbW92ZUVycm9yQ2xhc3NlcygkZWwpIHtcbiAgICAvLyByYWRpb3MgbmVlZCB0byBjbGVhciBhbGwgb2YgdGhlIGVsc1xuICAgIGlmKCRlbFswXS50eXBlID09ICdyYWRpbycpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZVJhZGlvRXJyb3JDbGFzc2VzKCRlbC5hdHRyKCduYW1lJykpO1xuICAgIH1cblxuICAgIHZhciAkbGFiZWwgPSB0aGlzLmZpbmRMYWJlbCgkZWwpO1xuICAgIHZhciAkZm9ybUVycm9yID0gdGhpcy5maW5kRm9ybUVycm9yKCRlbCk7XG5cbiAgICBpZiAoJGxhYmVsLmxlbmd0aCkge1xuICAgICAgJGxhYmVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sYWJlbEVycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICgkZm9ybUVycm9yLmxlbmd0aCkge1xuICAgICAgJGZvcm1FcnJvci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZm9ybUVycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgICRlbC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuaW5wdXRFcnJvckNsYXNzKS5hdHRyKHtcbiAgICAgICdkYXRhLWludmFsaWQnOiBudWxsLFxuICAgICAgJ2FyaWEtaW52YWxpZCc6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHb2VzIHRocm91Z2ggYSBmb3JtIHRvIGZpbmQgaW5wdXRzIGFuZCBwcm9jZWVkcyB0byB2YWxpZGF0ZSB0aGVtIGluIHdheXMgc3BlY2lmaWMgdG8gdGhlaXIgdHlwZS5cbiAgICogSWdub3JlcyBpbnB1dHMgd2l0aCBkYXRhLWFiaWRlLWlnbm9yZSwgdHlwZT1cImhpZGRlblwiIG9yIGRpc2FibGVkIGF0dHJpYnV0ZXMgc2V0XG4gICAqIEBmaXJlcyBBYmlkZSNpbnZhbGlkXG4gICAqIEBmaXJlcyBBYmlkZSN2YWxpZFxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gdmFsaWRhdGUsIHNob3VsZCBiZSBhbiBIVE1MIGlucHV0XG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBnb29kVG9HbyAtIElmIHRoZSBpbnB1dCBpcyB2YWxpZCBvciBub3QuXG4gICAqL1xuICB2YWxpZGF0ZUlucHV0KCRlbCkge1xuICAgIHZhciBjbGVhclJlcXVpcmUgPSB0aGlzLnJlcXVpcmVkQ2hlY2soJGVsKSxcbiAgICAgICAgdmFsaWRhdGVkID0gZmFsc2UsXG4gICAgICAgIGN1c3RvbVZhbGlkYXRvciA9IHRydWUsXG4gICAgICAgIHZhbGlkYXRvciA9ICRlbC5hdHRyKCdkYXRhLXZhbGlkYXRvcicpLFxuICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcblxuICAgIC8vIGRvbid0IHZhbGlkYXRlIGlnbm9yZWQgaW5wdXRzIG9yIGhpZGRlbiBpbnB1dHMgb3IgZGlzYWJsZWQgaW5wdXRzXG4gICAgaWYgKCRlbC5pcygnW2RhdGEtYWJpZGUtaWdub3JlXScpIHx8ICRlbC5pcygnW3R5cGU9XCJoaWRkZW5cIl0nKSB8fCAkZWwuaXMoJ1tkaXNhYmxlZF0nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3dpdGNoICgkZWxbMF0udHlwZSkge1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICB2YWxpZGF0ZWQgPSB0aGlzLnZhbGlkYXRlUmFkaW8oJGVsLmF0dHIoJ25hbWUnKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHZhbGlkYXRlZCA9IGNsZWFyUmVxdWlyZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICBjYXNlICdzZWxlY3Qtb25lJzpcbiAgICAgIGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6XG4gICAgICAgIHZhbGlkYXRlZCA9IGNsZWFyUmVxdWlyZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhbGlkYXRlZCA9IHRoaXMudmFsaWRhdGVUZXh0KCRlbCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgY3VzdG9tVmFsaWRhdG9yID0gdGhpcy5tYXRjaFZhbGlkYXRpb24oJGVsLCB2YWxpZGF0b3IsICRlbC5hdHRyKCdyZXF1aXJlZCcpKTtcbiAgICB9XG5cbiAgICBpZiAoJGVsLmF0dHIoJ2RhdGEtZXF1YWx0bycpKSB7XG4gICAgICBlcXVhbFRvID0gdGhpcy5vcHRpb25zLnZhbGlkYXRvcnMuZXF1YWxUbygkZWwpO1xuICAgIH1cblxuXG4gICAgdmFyIGdvb2RUb0dvID0gW2NsZWFyUmVxdWlyZSwgdmFsaWRhdGVkLCBjdXN0b21WYWxpZGF0b3IsIGVxdWFsVG9dLmluZGV4T2YoZmFsc2UpID09PSAtMTtcbiAgICB2YXIgbWVzc2FnZSA9IChnb29kVG9HbyA/ICd2YWxpZCcgOiAnaW52YWxpZCcpICsgJy56Zi5hYmlkZSc7XG5cbiAgICBpZiAoZ29vZFRvR28pIHtcbiAgICAgIC8vIFJlLXZhbGlkYXRlIGlucHV0cyB0aGF0IGRlcGVuZCBvbiB0aGlzIG9uZSB3aXRoIGVxdWFsdG9cbiAgICAgIGNvbnN0IGRlcGVuZGVudEVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5maW5kKGBbZGF0YS1lcXVhbHRvPVwiJHskZWwuYXR0cignaWQnKX1cIl1gKTtcbiAgICAgIGlmIChkZXBlbmRlbnRFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgICAgZGVwZW5kZW50RWxlbWVudHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgICAgX3RoaXMudmFsaWRhdGVJbnB1dCgkKHRoaXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXNbZ29vZFRvR28gPyAncmVtb3ZlRXJyb3JDbGFzc2VzJyA6ICdhZGRFcnJvckNsYXNzZXMnXSgkZWwpO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgaW5wdXQgaXMgZG9uZSBjaGVja2luZyBmb3IgdmFsaWRhdGlvbi4gRXZlbnQgdHJpZ2dlciBpcyBlaXRoZXIgYHZhbGlkLnpmLmFiaWRlYCBvciBgaW52YWxpZC56Zi5hYmlkZWBcbiAgICAgKiBUcmlnZ2VyIGluY2x1ZGVzIHRoZSBET00gZWxlbWVudCBvZiB0aGUgaW5wdXQuXG4gICAgICogQGV2ZW50IEFiaWRlI3ZhbGlkXG4gICAgICogQGV2ZW50IEFiaWRlI2ludmFsaWRcbiAgICAgKi9cbiAgICAkZWwudHJpZ2dlcihtZXNzYWdlLCBbJGVsXSk7XG5cbiAgICByZXR1cm4gZ29vZFRvR287XG4gIH1cblxuICAvKipcbiAgICogR29lcyB0aHJvdWdoIGEgZm9ybSBhbmQgaWYgdGhlcmUgYXJlIGFueSBpbnZhbGlkIGlucHV0cywgaXQgd2lsbCBkaXNwbGF5IHRoZSBmb3JtIGVycm9yIGVsZW1lbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IG5vRXJyb3IgLSB0cnVlIGlmIG5vIGVycm9ycyB3ZXJlIGRldGVjdGVkLi4uXG4gICAqIEBmaXJlcyBBYmlkZSNmb3JtdmFsaWRcbiAgICogQGZpcmVzIEFiaWRlI2Zvcm1pbnZhbGlkXG4gICAqL1xuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgdmFyIGFjYyA9IFtdO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLiRpbnB1dHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGFjYy5wdXNoKF90aGlzLnZhbGlkYXRlSW5wdXQoJCh0aGlzKSkpO1xuICAgIH0pO1xuXG4gICAgdmFyIG5vRXJyb3IgPSBhY2MuaW5kZXhPZihmYWxzZSkgPT09IC0xO1xuXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1hYmlkZS1lcnJvcl0nKS5lYWNoKChpLCBlbGVtKSA9PiB7XG4gICAgICBjb25zdCAkZWxlbSA9ICQoZWxlbSk7XG4gICAgICAvLyBFbnN1cmUgYTExeSBhdHRyaWJ1dGVzIGFyZSBzZXRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYTExeUF0dHJpYnV0ZXMpIHRoaXMuYWRkR2xvYmFsRXJyb3JBMTF5QXR0cmlidXRlcygkZWxlbSk7XG4gICAgICAvLyBTaG93IG9yIGhpZGUgdGhlIGVycm9yXG4gICAgICAkZWxlbS5jc3MoJ2Rpc3BsYXknLCAobm9FcnJvciA/ICdub25lJyA6ICdibG9jaycpKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIGZvcm0gaXMgZmluaXNoZWQgdmFsaWRhdGluZy4gRXZlbnQgdHJpZ2dlciBpcyBlaXRoZXIgYGZvcm12YWxpZC56Zi5hYmlkZWAgb3IgYGZvcm1pbnZhbGlkLnpmLmFiaWRlYC5cbiAgICAgKiBUcmlnZ2VyIGluY2x1ZGVzIHRoZSBlbGVtZW50IG9mIHRoZSBmb3JtLlxuICAgICAqIEBldmVudCBBYmlkZSNmb3JtdmFsaWRcbiAgICAgKiBAZXZlbnQgQWJpZGUjZm9ybWludmFsaWRcbiAgICAgKi9cbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoKG5vRXJyb3IgPyAnZm9ybXZhbGlkJyA6ICdmb3JtaW52YWxpZCcpICsgJy56Zi5hYmlkZScsIFt0aGlzLiRlbGVtZW50XSk7XG5cbiAgICByZXR1cm4gbm9FcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3IgYSBub3QgYSB0ZXh0IGlucHV0IGlzIHZhbGlkIGJhc2VkIG9uIHRoZSBwYXR0ZXJuIHNwZWNpZmllZCBpbiB0aGUgYXR0cmlidXRlLiBJZiBubyBtYXRjaGluZyBwYXR0ZXJuIGlzIGZvdW5kLCByZXR1cm5zIHRydWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIHZhbGlkYXRlLCBzaG91bGQgYmUgYSB0ZXh0IGlucHV0IEhUTUwgZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVybiAtIHN0cmluZyB2YWx1ZSBvZiBvbmUgb2YgdGhlIFJlZ0V4IHBhdHRlcm5zIGluIEFiaWRlLm9wdGlvbnMucGF0dGVybnNcbiAgICogQHJldHVybnMge0Jvb2xlYW59IEJvb2xlYW4gdmFsdWUgZGVwZW5kcyBvbiB3aGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgdmFsdWUgbWF0Y2hlcyB0aGUgcGF0dGVybiBzcGVjaWZpZWRcbiAgICovXG4gIHZhbGlkYXRlVGV4dCgkZWwsIHBhdHRlcm4pIHtcbiAgICAvLyBBIHBhdHRlcm4gY2FuIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGJlIGluZmVyZWQgZnJvbSB0aGUgaW5wdXQncyBcInBhdHRlcm5cIiBhdHRyaWJ1dGUsIG9yIGl0J3MgXCJ0eXBlXCIgYXR0cmlidXRlXG4gICAgcGF0dGVybiA9IChwYXR0ZXJuIHx8ICRlbC5hdHRyKCdwYXR0ZXJuJykgfHwgJGVsLmF0dHIoJ3R5cGUnKSk7XG4gICAgdmFyIGlucHV0VGV4dCA9ICRlbC52YWwoKTtcbiAgICB2YXIgdmFsaWQgPSBmYWxzZTtcblxuICAgIGlmIChpbnB1dFRleHQubGVuZ3RoKSB7XG4gICAgICAvLyBJZiB0aGUgcGF0dGVybiBhdHRyaWJ1dGUgb24gdGhlIGVsZW1lbnQgaXMgaW4gQWJpZGUncyBsaXN0IG9mIHBhdHRlcm5zLCB0aGVuIHRlc3QgdGhhdCByZWdleHBcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucGF0dGVybnMuaGFzT3duUHJvcGVydHkocGF0dGVybikpIHtcbiAgICAgICAgdmFsaWQgPSB0aGlzLm9wdGlvbnMucGF0dGVybnNbcGF0dGVybl0udGVzdChpbnB1dFRleHQpO1xuICAgICAgfVxuICAgICAgLy8gSWYgdGhlIHBhdHRlcm4gbmFtZSBpc24ndCBhbHNvIHRoZSB0eXBlIGF0dHJpYnV0ZSBvZiB0aGUgZmllbGQsIHRoZW4gdGVzdCBpdCBhcyBhIHJlZ2V4cFxuICAgICAgZWxzZSBpZiAocGF0dGVybiAhPT0gJGVsLmF0dHIoJ3R5cGUnKSkge1xuICAgICAgICB2YWxpZCA9IG5ldyBSZWdFeHAocGF0dGVybikudGVzdChpbnB1dFRleHQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQW4gZW1wdHkgZmllbGQgaXMgdmFsaWQgaWYgaXQncyBub3QgcmVxdWlyZWRcbiAgICBlbHNlIGlmICghJGVsLnByb3AoJ3JlcXVpcmVkJykpIHtcbiAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBhIG5vdCBhIHJhZGlvIGlucHV0IGlzIHZhbGlkIGJhc2VkIG9uIHdoZXRoZXIgb3Igbm90IGl0IGlzIHJlcXVpcmVkIGFuZCBzZWxlY3RlZC4gQWx0aG91Z2ggdGhlIGZ1bmN0aW9uIHRhcmdldHMgYSBzaW5nbGUgYDxpbnB1dD5gLCBpdCB2YWxpZGF0ZXMgYnkgY2hlY2tpbmcgdGhlIGByZXF1aXJlZGAgYW5kIGBjaGVja2VkYCBwcm9wZXJ0aWVzIG9mIGFsbCByYWRpbyBidXR0b25zIGluIGl0cyBncm91cC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGdyb3VwTmFtZSAtIEEgc3RyaW5nIHRoYXQgc3BlY2lmaWVzIHRoZSBuYW1lIG9mIGEgcmFkaW8gYnV0dG9uIGdyb3VwXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBCb29sZWFuIHZhbHVlIGRlcGVuZHMgb24gd2hldGhlciBvciBub3QgYXQgbGVhc3Qgb25lIHJhZGlvIGlucHV0IGhhcyBiZWVuIHNlbGVjdGVkIChpZiBpdCdzIHJlcXVpcmVkKVxuICAgKi9cbiAgdmFsaWRhdGVSYWRpbyhncm91cE5hbWUpIHtcbiAgICAvLyBJZiBhdCBsZWFzdCBvbmUgcmFkaW8gaW4gdGhlIGdyb3VwIGhhcyB0aGUgYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHRoZSBncm91cCBpcyBjb25zaWRlcmVkIHJlcXVpcmVkXG4gICAgLy8gUGVyIFczQyBzcGVjLCBhbGwgcmFkaW8gYnV0dG9ucyBpbiBhIGdyb3VwIHNob3VsZCBoYXZlIGByZXF1aXJlZGAsIGJ1dCB3ZSdyZSBiZWluZyBuaWNlXG4gICAgdmFyICRncm91cCA9IHRoaXMuJGVsZW1lbnQuZmluZChgOnJhZGlvW25hbWU9XCIke2dyb3VwTmFtZX1cIl1gKTtcbiAgICB2YXIgdmFsaWQgPSBmYWxzZSwgcmVxdWlyZWQgPSBmYWxzZTtcblxuICAgIC8vIEZvciB0aGUgZ3JvdXAgdG8gYmUgcmVxdWlyZWQsIGF0IGxlYXN0IG9uZSByYWRpbyBuZWVkcyB0byBiZSByZXF1aXJlZFxuICAgICRncm91cC5lYWNoKChpLCBlKSA9PiB7XG4gICAgICBpZiAoJChlKS5hdHRyKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgIHJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZighcmVxdWlyZWQpIHZhbGlkPXRydWU7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAvLyBGb3IgdGhlIGdyb3VwIHRvIGJlIHZhbGlkLCBhdCBsZWFzdCBvbmUgcmFkaW8gbmVlZHMgdG8gYmUgY2hlY2tlZFxuICAgICAgJGdyb3VwLmVhY2goKGksIGUpID0+IHtcbiAgICAgICAgaWYgKCQoZSkucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgYSBzZWxlY3RlZCBpbnB1dCBwYXNzZXMgYSBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbi4gTXVsdGlwbGUgdmFsaWRhdGlvbnMgY2FuIGJlIHVzZWQsIGlmIHBhc3NlZCB0byB0aGUgZWxlbWVudCB3aXRoIGBkYXRhLXZhbGlkYXRvcj1cImZvbyBiYXIgYmF6XCJgIGluIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3RlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbCAtIGpRdWVyeSBpbnB1dCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsaWRhdG9ycyAtIGEgc3RyaW5nIG9mIGZ1bmN0aW9uIG5hbWVzIG1hdGNoaW5nIGZ1bmN0aW9ucyBpbiB0aGUgQWJpZGUub3B0aW9ucy52YWxpZGF0b3JzIG9iamVjdC5cbiAgICogQHBhcmFtIHtCb29sZWFufSByZXF1aXJlZCAtIHNlbGYgZXhwbGFuYXRvcnk/XG4gICAqIEByZXR1cm5zIHtCb29sZWFufSAtIHRydWUgaWYgdmFsaWRhdGlvbnMgcGFzc2VkLlxuICAgKi9cbiAgbWF0Y2hWYWxpZGF0aW9uKCRlbCwgdmFsaWRhdG9ycywgcmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZCA9IHJlcXVpcmVkID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgdmFyIGNsZWFyID0gdmFsaWRhdG9ycy5zcGxpdCgnICcpLm1hcCgodikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52YWxpZGF0b3JzW3ZdKCRlbCwgcmVxdWlyZWQsICRlbC5wYXJlbnQoKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsZWFyLmluZGV4T2YoZmFsc2UpID09PSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgZm9ybSBpbnB1dHMgYW5kIHN0eWxlc1xuICAgKiBAZmlyZXMgQWJpZGUjZm9ybXJlc2V0XG4gICAqL1xuICByZXNldEZvcm0oKSB7XG4gICAgdmFyICRmb3JtID0gdGhpcy4kZWxlbWVudCxcbiAgICAgICAgb3B0cyA9IHRoaXMub3B0aW9ucztcblxuICAgICQoYC4ke29wdHMubGFiZWxFcnJvckNsYXNzfWAsICRmb3JtKS5ub3QoJ3NtYWxsJykucmVtb3ZlQ2xhc3Mob3B0cy5sYWJlbEVycm9yQ2xhc3MpO1xuICAgICQoYC4ke29wdHMuaW5wdXRFcnJvckNsYXNzfWAsICRmb3JtKS5ub3QoJ3NtYWxsJykucmVtb3ZlQ2xhc3Mob3B0cy5pbnB1dEVycm9yQ2xhc3MpO1xuICAgICQoYCR7b3B0cy5mb3JtRXJyb3JTZWxlY3Rvcn0uJHtvcHRzLmZvcm1FcnJvckNsYXNzfWApLnJlbW92ZUNsYXNzKG9wdHMuZm9ybUVycm9yQ2xhc3MpO1xuICAgICRmb3JtLmZpbmQoJ1tkYXRhLWFiaWRlLWVycm9yXScpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgJCgnOmlucHV0JywgJGZvcm0pLm5vdCgnOmJ1dHRvbiwgOnN1Ym1pdCwgOnJlc2V0LCA6aGlkZGVuLCA6cmFkaW8sIDpjaGVja2JveCwgW2RhdGEtYWJpZGUtaWdub3JlXScpLnZhbCgnJykuYXR0cih7XG4gICAgICAnZGF0YS1pbnZhbGlkJzogbnVsbCxcbiAgICAgICdhcmlhLWludmFsaWQnOiBudWxsXG4gICAgfSk7XG4gICAgJCgnOmlucHV0OnJhZGlvJywgJGZvcm0pLm5vdCgnW2RhdGEtYWJpZGUtaWdub3JlXScpLnByb3AoJ2NoZWNrZWQnLGZhbHNlKS5hdHRyKHtcbiAgICAgICdkYXRhLWludmFsaWQnOiBudWxsLFxuICAgICAgJ2FyaWEtaW52YWxpZCc6IG51bGxcbiAgICB9KTtcbiAgICAkKCc6aW5wdXQ6Y2hlY2tib3gnLCAkZm9ybSkubm90KCdbZGF0YS1hYmlkZS1pZ25vcmVdJykucHJvcCgnY2hlY2tlZCcsZmFsc2UpLmF0dHIoe1xuICAgICAgJ2RhdGEtaW52YWxpZCc6IG51bGwsXG4gICAgICAnYXJpYS1pbnZhbGlkJzogbnVsbFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEZpcmVzIHdoZW4gdGhlIGZvcm0gaGFzIGJlZW4gcmVzZXQuXG4gICAgICogQGV2ZW50IEFiaWRlI2Zvcm1yZXNldFxuICAgICAqL1xuICAgICRmb3JtLnRyaWdnZXIoJ2Zvcm1yZXNldC56Zi5hYmlkZScsIFskZm9ybV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIGFuIGluc3RhbmNlIG9mIEFiaWRlLlxuICAgKiBSZW1vdmVzIGVycm9yIHN0eWxlcyBhbmQgY2xhc3NlcyBmcm9tIGVsZW1lbnRzLCB3aXRob3V0IHJlc2V0dGluZyB0aGVpciB2YWx1ZXMuXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5vZmYoJy5hYmlkZScpXG4gICAgICAuZmluZCgnW2RhdGEtYWJpZGUtZXJyb3JdJylcbiAgICAgICAgLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cbiAgICB0aGlzLiRpbnB1dHNcbiAgICAgIC5vZmYoJy5hYmlkZScpXG4gICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMucmVtb3ZlRXJyb3JDbGFzc2VzKCQodGhpcykpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWZhdWx0IHNldHRpbmdzIGZvciBwbHVnaW5cbiAqL1xuQWJpZGUuZGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBldmVudCB0byB2YWxpZGF0ZSBpbnB1dHMuIENoZWNrYm94ZXMgYW5kIHJhZGlvcyB2YWxpZGF0ZSBpbW1lZGlhdGVseS5cbiAgICogUmVtb3ZlIG9yIGNoYW5nZSB0aGlzIHZhbHVlIGZvciBtYW51YWwgdmFsaWRhdGlvbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2ZpZWxkQ2hhbmdlJ1xuICAgKi9cbiAgdmFsaWRhdGVPbjogJ2ZpZWxkQ2hhbmdlJyxcblxuICAvKipcbiAgICogQ2xhc3MgdG8gYmUgYXBwbGllZCB0byBpbnB1dCBsYWJlbHMgb24gZmFpbGVkIHZhbGlkYXRpb24uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2lzLWludmFsaWQtbGFiZWwnXG4gICAqL1xuICBsYWJlbEVycm9yQ2xhc3M6ICdpcy1pbnZhbGlkLWxhYmVsJyxcblxuICAvKipcbiAgICogQ2xhc3MgdG8gYmUgYXBwbGllZCB0byBpbnB1dHMgb24gZmFpbGVkIHZhbGlkYXRpb24uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2lzLWludmFsaWQtaW5wdXQnXG4gICAqL1xuICBpbnB1dEVycm9yQ2xhc3M6ICdpcy1pbnZhbGlkLWlucHV0JyxcblxuICAvKipcbiAgICogQ2xhc3Mgc2VsZWN0b3IgdG8gdXNlIHRvIHRhcmdldCBGb3JtIEVycm9ycyBmb3Igc2hvdy9oaWRlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICcuZm9ybS1lcnJvcidcbiAgICovXG4gIGZvcm1FcnJvclNlbGVjdG9yOiAnLmZvcm0tZXJyb3InLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBhZGRlZCB0byBGb3JtIEVycm9ycyBvbiBmYWlsZWQgdmFsaWRhdGlvbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnaXMtdmlzaWJsZSdcbiAgICovXG4gIGZvcm1FcnJvckNsYXNzOiAnaXMtdmlzaWJsZScsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGF1dG9tYXRpY2FsbHkgaW5zZXJ0IHdoZW4gcG9zc2libGU6XG4gICAqIC0gYFthcmlhLWRlc2NyaWJlZGJ5XWAgb24gZmllbGRzXG4gICAqIC0gYFtyb2xlPWFsZXJ0XWAgb24gZm9ybSBlcnJvcnMgYW5kIGBbZm9yXWAgb24gZm9ybSBlcnJvciBsYWJlbHNcbiAgICogLSBgW2FyaWEtbGl2ZV1gIG9uIGdsb2JhbCBlcnJvcnMgYFtkYXRhLWFiaWRlLWVycm9yXWAgKHNlZSBvcHRpb24gYGExMXlFcnJvckxldmVsYCkuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGExMXlBdHRyaWJ1dGVzOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBbYXJpYS1saXZlXSBhdHRyaWJ1dGUgdmFsdWUgdG8gYmUgYXBwbGllZCBvbiBnbG9iYWwgZXJyb3JzIGBbZGF0YS1hYmlkZS1lcnJvcl1gLlxuICAgKiBPcHRpb25zIGFyZTogJ2Fzc2VydGl2ZScsICdwb2xpdGUnIGFuZCAnb2ZmJy9udWxsXG4gICAqIEBvcHRpb25cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BY2Nlc3NpYmlsaXR5L0FSSUEvQVJJQV9MaXZlX1JlZ2lvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2Fzc2VydGl2ZSdcbiAgICovXG4gIGExMXlFcnJvckxldmVsOiAnYXNzZXJ0aXZlJyxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gdmFsaWRhdGUgdGV4dCBpbnB1dHMgb24gYW55IHZhbHVlIGNoYW5nZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGxpdmVWYWxpZGF0ZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHZhbGlkYXRlIGlucHV0cyBvbiBibHVyLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdmFsaWRhdGVPbkJsdXI6IGZhbHNlLFxuXG4gIHBhdHRlcm5zOiB7XG4gICAgYWxwaGEgOiAvXlthLXpBLVpdKyQvLFxuICAgIGFscGhhX251bWVyaWMgOiAvXlthLXpBLVowLTldKyQvLFxuICAgIGludGVnZXIgOiAvXlstK10/XFxkKyQvLFxuICAgIG51bWJlciA6IC9eWy0rXT9cXGQqKD86W1xcLlxcLF1cXGQrKT8kLyxcblxuICAgIC8vIGFtZXgsIHZpc2EsIGRpbmVyc1xuICAgIGNhcmQgOiAvXig/OjRbMC05XXsxMn0oPzpbMC05XXszfSk/fDVbMS01XVswLTldezE0fXwoPzoyMjJbMS05XXwyWzMtNl1bMC05XXsyfXwyN1swLTFdWzAtOV18MjcyMClbMC05XXsxMn18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9KSQvLFxuICAgIGN2diA6IC9eKFswLTldKXszLDR9JC8sXG5cbiAgICAvLyBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9zdGF0ZXMtb2YtdGhlLXR5cGUtYXR0cmlidXRlLmh0bWwjdmFsaWQtZS1tYWlsLWFkZHJlc3NcbiAgICBlbWFpbCA6IC9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKyQvLFxuXG4gICAgLy8gRnJvbSBDb21tb25SZWdleEpTIChAdGFseXNzb25vYylcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGFseXNzb25vYy9Db21tb25SZWdleEpTL2Jsb2IvZTI5MDFiOWY1NzIyMmJjMTQwNjlkYzhmMDU5OGQ1ZjQxMjU1NTQxMS9saWIvY29tbW9ucmVnZXguanMjTDc2XG4gICAgLy8gRm9yIG1vcmUgcmVzdHJpY3RpdmUgVVJMIFJlZ2V4cywgc2VlIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9kZW1vL3VybC1yZWdleC5cbiAgICB1cmw6IC9eKCg/OihodHRwcz98ZnRwcz98ZmlsZXxzc2h8c2Z0cCk6XFwvXFwvfHd3d1xcZHswLDN9Wy5dfFthLXowLTkuXFwtXStbLl1bYS16XXsyLDR9XFwvKSg/OlteXFxzKCk8Pl0rfFxcKCg/OlteXFxzKCk8Pl0rfCg/OlxcKFteXFxzKCk8Pl0rXFwpKSkqXFwpKSsoPzpcXCgoPzpbXlxccygpPD5dK3woPzpcXChbXlxccygpPD5dK1xcKSkpKlxcKXxbXlxcc2AhKClcXFtcXF17fTs6XFwnXCIuLDw+P1xceGFiXFx4YmJcXHUyMDFjXFx1MjAxZFxcdTIwMThcXHUyMDE5XSkpJC8sXG5cbiAgICAvLyBhYmMuZGVcbiAgICBkb21haW4gOiAvXihbYS16QS1aMC05XShbYS16QS1aMC05XFwtXXswLDYxfVthLXpBLVowLTldKT9cXC4pK1thLXpBLVpdezIsOH0kLyxcblxuICAgIGRhdGV0aW1lIDogL14oWzAtMl1bMC05XXszfSlcXC0oWzAtMV1bMC05XSlcXC0oWzAtM11bMC05XSlUKFswLTVdWzAtOV0pXFw6KFswLTVdWzAtOV0pXFw6KFswLTVdWzAtOV0pKFp8KFtcXC1cXCtdKFswLTFdWzAtOV0pXFw6MDApKSQvLFxuICAgIC8vIFlZWVktTU0tRERcbiAgICBkYXRlIDogLyg/OjE5fDIwKVswLTldezJ9LSg/Oig/OjBbMS05XXwxWzAtMl0pLSg/OjBbMS05XXwxWzAtOV18MlswLTldKXwoPzooPyEwMikoPzowWzEtOV18MVswLTJdKS0oPzozMCkpfCg/Oig/OjBbMTM1NzhdfDFbMDJdKS0zMSkpJC8sXG4gICAgLy8gSEg6TU06U1NcbiAgICB0aW1lIDogL14oMFswLTldfDFbMC05XXwyWzAtM10pKDpbMC01XVswLTldKXsyfSQvLFxuICAgIGRhdGVJU08gOiAvXlxcZHs0fVtcXC9cXC1dXFxkezEsMn1bXFwvXFwtXVxcZHsxLDJ9JC8sXG4gICAgLy8gTU0vREQvWVlZWVxuICAgIG1vbnRoX2RheV95ZWFyIDogL14oMFsxLTldfDFbMDEyXSlbLSBcXC8uXSgwWzEtOV18WzEyXVswLTldfDNbMDFdKVstIFxcLy5dXFxkezR9JC8sXG4gICAgLy8gREQvTU0vWVlZWVxuICAgIGRheV9tb250aF95ZWFyIDogL14oMFsxLTldfFsxMl1bMC05XXwzWzAxXSlbLSBcXC8uXSgwWzEtOV18MVswMTJdKVstIFxcLy5dXFxkezR9JC8sXG5cbiAgICAvLyAjRkZGIG9yICNGRkZGRkZcbiAgICBjb2xvciA6IC9eIz8oW2EtZkEtRjAtOV17Nn18W2EtZkEtRjAtOV17M30pJC8sXG5cbiAgICAvLyBEb21haW4gfHwgVVJMXG4gICAgd2Vic2l0ZToge1xuICAgICAgdGVzdDogKHRleHQpID0+IHtcbiAgICAgICAgcmV0dXJuIEFiaWRlLmRlZmF1bHRzLnBhdHRlcm5zWydkb21haW4nXS50ZXN0KHRleHQpIHx8IEFiaWRlLmRlZmF1bHRzLnBhdHRlcm5zWyd1cmwnXS50ZXN0KHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogT3B0aW9uYWwgdmFsaWRhdGlvbiBmdW5jdGlvbnMgdG8gYmUgdXNlZC4gYGVxdWFsVG9gIGJlaW5nIHRoZSBvbmx5IGRlZmF1bHQgaW5jbHVkZWQgZnVuY3Rpb24uXG4gICAqIEZ1bmN0aW9ucyBzaG91bGQgcmV0dXJuIG9ubHkgYSBib29sZWFuIGlmIHRoZSBpbnB1dCBpcyB2YWxpZCBvciBub3QuIEZ1bmN0aW9ucyBhcmUgZ2l2ZW4gdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6XG4gICAqIGVsIDogVGhlIGpRdWVyeSBlbGVtZW50IHRvIHZhbGlkYXRlLlxuICAgKiByZXF1aXJlZCA6IEJvb2xlYW4gdmFsdWUgb2YgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSBiZSBwcmVzZW50IG9yIG5vdC5cbiAgICogcGFyZW50IDogVGhlIGRpcmVjdCBwYXJlbnQgb2YgdGhlIGlucHV0LlxuICAgKiBAb3B0aW9uXG4gICAqL1xuICB2YWxpZGF0b3JzOiB7XG4gICAgZXF1YWxUbzogZnVuY3Rpb24gKGVsLCByZXF1aXJlZCwgcGFyZW50KSB7XG4gICAgICByZXR1cm4gJChgIyR7ZWwuYXR0cignZGF0YS1lcXVhbHRvJyl9YCkudmFsKCkgPT09IGVsLnZhbCgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge0FiaWRlfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXX0=
