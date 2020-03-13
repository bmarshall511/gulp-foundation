(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require("./foundation.core"), require("jquery"));else if (typeof define === 'function' && define.amd) define(["./foundation.core", "jquery"], factory);else if (typeof exports === 'object') exports["foundation.abide"] = factory(require("./foundation.core"), require("jquery"));else root["__FOUNDATION_EXTERNAL__"] = root["__FOUNDATION_EXTERNAL__"] || {}, root["__FOUNDATION_EXTERNAL__"]["foundation.abide"] = factory(root["__FOUNDATION_EXTERNAL__"]["foundation.core"], root["jQuery"]);
})(window, function (__WEBPACK_EXTERNAL_MODULE__foundation_core__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
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


        var _foundation_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_foundation_core__WEBPACK_IMPORTED_MODULE_0__);
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


        var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./foundation.core.plugin */
        "./foundation.core");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__);

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


        var Abide = /*#__PURE__*/function (_Plugin) {
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
              this.isEnabled = true;
              this.formnovalidate = null;
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
              this.$element.find('input').not('[type="submit"]'), // * all input fields expect submit
              this.$element.find('textarea, select') // * all textareas and select fields
              );
              this.$submits = this.$element.find('[type="submit"]');
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
              this.$submits.off('click.zf.abide keydown.zf.abide').on('click.zf.abide keydown.zf.abide', function (e) {
                if (!e.key || e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  _this3.formnovalidate = e.target.getAttribute('formnovalidate') !== null;

                  _this3.$element.submit();
                }
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
             * Checks whether the submitted form should be validated or not, consodering formnovalidate and isEnabled
             * @returns {Boolean}
             * @private
             */

          }, {
            key: "_validationIsDisabled",
            value: function _validationIsDisabled() {
              if (this.isEnabled === false) {
                // whole validation disabled
                return true;
              } else if (typeof this.formnovalidate === 'boolean') {
                // triggered by $submit
                return this.formnovalidate;
              } else {
                // triggered by Enter in non-submit input
                return this.$submits.length ? this.$submits[0].getAttribute('formnovalidate') !== null : false;
              }
            }
            /**
             * Enables the whole validation
             */

          }, {
            key: "enableValidation",
            value: function enableValidation() {
              this.isEnabled = true;
            }
            /**
             * Disables the whole validation
             */

          }, {
            key: "disableValidation",
            value: function disableValidation() {
              this.isEnabled = false;
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
              var id = $el.length ? $el[0].id : '';
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
             * Get the set of labels associated with a set of checkbox els in this order
             * 2. The <label> with the attribute `[for="someInputId"]`
             * 3. The `.closest()` <label>
             *
             * @param {Object} $el - jQuery object to check for required attribute
             * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
             */

          }, {
            key: "findCheckboxLabels",
            value: function findCheckboxLabels($els) {
              var _this5 = this;

              var labels = $els.map(function (i, el) {
                var id = el.id;

                var $label = _this5.$element.find("label[for=\"".concat(id, "\"]"));

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
                  errorId = Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'abide-error');
                  $error.attr('id', errorId);
                }

                ;
                $el.attr('aria-describedby', errorId);
              }

              if ($labels.filter('[for]').length < $labels.length) {
                // Get the input ID or create one
                var elemId = $el.attr('id');

                if (typeof elemId === 'undefined') {
                  elemId = Object(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__["GetYoDigits"])(6, 'abide-input');
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
             * Remove CSS error classes etc from an entire checkbox group
             * @param {String} groupName - A string that specifies the name of a checkbox group
             *
             */

          }, {
            key: "removeCheckboxErrorClasses",
            value: function removeCheckboxErrorClasses(groupName) {
              var $els = this.$element.find(":checkbox[name=\"".concat(groupName, "\"]"));
              var $labels = this.findCheckboxLabels($els);
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
              } // checkboxes need to clear all of the els
              else if ($el[0].type == 'checkbox') {
                  return this.removeCheckboxErrorClasses($el.attr('name'));
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
                  equalTo = true; // skip validation if disabled

              if (this._validationIsDisabled()) {
                return true;
              } // don't validate ignored inputs or hidden inputs or disabled inputs


              if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
                return true;
              }

              switch ($el[0].type) {
                case 'radio':
                  validated = this.validateRadio($el.attr('name'));
                  break;

                case 'checkbox':
                  validated = this.validateCheckbox($el.attr('name'));
                  clearRequire = true;
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
              var _this6 = this;

              var acc = [];

              var _this = this;

              var checkboxGroupName; // Remember first form submission to prevent specific checkbox validation (more than one required) until form got initially submitted

              if (!this.initialized) {
                this.initialized = true;
              } // skip validation if disabled


              if (this._validationIsDisabled()) {
                this.formnovalidate = null;
                return true;
              }

              this.$inputs.each(function () {
                // Only use one checkbox per group since validateCheckbox() iterates over all associated checkboxes
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].type === 'checkbox') {
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name') === checkboxGroupName) return true;
                  checkboxGroupName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name');
                }

                acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));
              });
              var noError = acc.indexOf(false) === -1;
              this.$element.find('[data-abide-error]').each(function (i, elem) {
                var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem); // Ensure a11y attributes are set

                if (_this6.options.a11yAttributes) _this6.addGlobalErrorA11yAttributes($elem); // Show or hide the error

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
              pattern = pattern || $el.attr('data-pattern') || $el.attr('pattern') || $el.attr('type');
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
             * Determines whether or a not a checkbox input is valid based on whether or not it is required and checked. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all checkboxes in its group.
             * @param {String} groupName - A string that specifies the name of a checkbox group
             * @returns {Boolean} Boolean value depends on whether or not at least one checkbox input has been checked (if it's required)
             */

          }, {
            key: "validateCheckbox",
            value: function validateCheckbox(groupName) {
              var _this7 = this; // If at least one checkbox in the group has the `required` attribute, the group is considered required
              // Per W3C spec, all checkboxes in a group should have `required`, but we're being nice


              var $group = this.$element.find(":checkbox[name=\"".concat(groupName, "\"]"));
              var valid = false,
                  required = false,
                  minRequired = 1,
                  checked = 0; // For the group to be required, at least one checkbox needs to be required

              $group.each(function (i, e) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
                  required = true;
                }
              });
              if (!required) valid = true;

              if (!valid) {
                // Count checked checkboxes within the group
                // Use data-min-required if available (default: 1)
                $group.each(function (i, e) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
                    checked++;
                  }

                  if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required') !== 'undefined') {
                    minRequired = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required'));
                  }
                }); // For the group to be valid, the minRequired amount of checkboxes have to be checked

                if (checked >= minRequired) {
                  valid = true;
                }
              }

              ; // Skip validation if more than 1 checkbox have to be checked AND if the form hasn't got submitted yet (otherwise it will already show an error during the first fill in)

              if (this.initialized !== true && minRequired > 1) {
                return true;
              } // Refresh error class for all input


              $group.each(function (i, e) {
                if (!valid) {
                  _this7.addErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e));
                } else {
                  _this7.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e));
                }
              });
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
              var _this8 = this;

              required = required ? true : false;
              var clear = validators.split(' ').map(function (v) {
                return _this8.options.validators[v]($el, required, $el.parent());
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
              this.$submits.off('.abide');
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
        /*! /Volumes/Data/Development/Foundation/foundation-sites/js/entries/plugins/foundation.abide.js */
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uYWJpZGUuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24uYWJpZGUuanMiLCJ3ZWJwYWNrOi9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOltcImpRdWVyeVwiXSxcImFtZFwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwifSJdLCJuYW1lcyI6WyJGb3VuZGF0aW9uIiwiQWJpZGUiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCIkZ2xvYmFsRXJyb3JzIiwiZSIsIiRlbCIsImlzR29vZCIsIm9wdCIsImlkIiwiJGVycm9yIiwiJGxhYmVsIiwiJGVscyIsImxhYmVscyIsImVsIiwiJGZvcm1FcnJvciIsIiRlcnJvcnMiLCIkbGFiZWxzIiwiZXJyb3JJZCIsIkdldFlvRGlnaXRzIiwiZWxlbUlkIiwiZ3JvdXBOYW1lIiwiJGZvcm1FcnJvcnMiLCJjbGVhclJlcXVpcmUiLCJ2YWxpZGF0ZWQiLCJjdXN0b21WYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJlcXVhbFRvIiwiZ29vZFRvR28iLCJtZXNzYWdlIiwiZGVwZW5kZW50RWxlbWVudHMiLCJfdGhpcyIsImFjYyIsImNoZWNrYm94R3JvdXBOYW1lIiwibm9FcnJvciIsIiRlbGVtIiwicGF0dGVybiIsImlucHV0VGV4dCIsInZhbGlkIiwiJGdyb3VwIiwicmVxdWlyZWQiLCJtaW5SZXF1aXJlZCIsImNoZWNrZWQiLCJwYXJzZUludCIsInZhbGlkYXRvcnMiLCJjbGVhciIsIiRmb3JtIiwib3B0cyIsIlBsdWdpbiIsInZhbGlkYXRlT24iLCJsYWJlbEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJmb3JtRXJyb3JTZWxlY3RvciIsImZvcm1FcnJvckNsYXNzIiwiYTExeUF0dHJpYnV0ZXMiLCJhMTF5RXJyb3JMZXZlbCIsImxpdmVWYWxpZGF0ZSIsInZhbGlkYXRlT25CbHVyIiwicGF0dGVybnMiLCJhbHBoYSIsImFscGhhX251bWVyaWMiLCJpbnRlZ2VyIiwibnVtYmVyIiwiY2FyZCIsImN2diIsImVtYWlsIiwidXJsIiwiZG9tYWluIiwiZGF0ZXRpbWUiLCJkYXRlIiwidGltZSIsImRhdGVJU08iLCJtb250aF9kYXlfeWVhciIsImRheV9tb250aF95ZWFyIiwiY29sb3IiLCJ3ZWJzaXRlIiwidGVzdCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxTQUFBLGdDQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLE1BQUEsT0FBQSxPQUFBLEtBQUEsUUFBQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFFBQUEsRUFDQSxNQUFBLENBQUEsT0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE1BQUEsS0FBQSxVQUFBLElBQUEsTUFBQSxDQUFBLEdBQUEsRUFDQSxNQUFBLENBQUEsQ0FBQSxtQkFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxDQURBLEtBRUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLEVBQ0EsT0FBQSxDQUFBLGtCQUFBLENBQUEsR0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FEQSxLQUdBLElBQUEsQ0FBQSx5QkFBQSxDQUFBLEdBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBLEVBQXlFLElBQUEsQ0FBQSx5QkFBQSxDQUFBLENBQUEsa0JBQUEsSUFBQSxPQUFBLENBQUEsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUF6RTtBQUNDLENBVEQsRUFTQyxNQVRELEVBU0MsVUFBQSw0Q0FBQSxFQUFBLGtDQUFBLEVBQUE7QUFDRDs7Ozs7QUNWQTtBQUFBOztBQUNBO0FBQUEsVUFBQSxnQkFBQSxHQUFBLEVBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxtQkFBQSxDQUFBLFFBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUFBLFlBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsaUJBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLFlBQUEsTUFBQSxHQUFBLGdCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUE7QUFDQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLFFBREE7O0FBRUE7QUFBQSxVQUFBLENBQUEsRUFBQSxLQUZBOztBQUdBO0FBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTs7QUFKQSxTQUFBOzs7QUFNQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsT0FBQSxFQUFBLG1CQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLFFBQUEsTUFBQSxDQUFBLENBQUEsR0FBQSxJQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLGVBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQTtBQUFBOzs7OztBQUdBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLGdCQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLENBQUEsRUFBQTtBQUNBO0FBQUEsVUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUE7QUFBMEMsWUFBQSxVQUFBLEVBQUEsSUFBMUM7QUFBMEMsWUFBQSxHQUFBLEVBQUE7QUFBMUMsV0FBQTtBQUNBO0FBQUE7QUFDQTs7QUFBQSxPQUpBOzs7QUFNQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsT0FBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE9BQUEsTUFBQSxLQUFBLFdBQUEsSUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFBd0QsWUFBQSxLQUFBLEVBQUE7QUFBeEQsV0FBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE9BQUEsRUFBQSxZQUFBLEVBQUE7QUFBaUQsVUFBQSxLQUFBLEVBQUE7QUFBakQsU0FBQTtBQUNBO0FBQUEsT0FMQTs7O0FBT0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTtBQUNBO0FBQUEsWUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLEtBQUEsR0FBQSxtQkFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUFBLFlBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxPQUFBLEtBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLEtBQUEsUUFBQSxJQUFBLEtBQUEsSUFBQSxLQUFBLENBQUEsVUFBQSxFQUFBLE9BQUEsS0FBQTtBQUNBOztBQUFBLFlBQUEsRUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0E7O0FBQUEsUUFBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0E7OztBQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUFBLEVBQUEsU0FBQSxFQUFBO0FBQXlDLFVBQUEsVUFBQSxFQUFBLElBQXpDO0FBQXlDLFVBQUEsS0FBQSxFQUFBO0FBQXpDLFNBQUE7QUFDQTs7QUFBQSxZQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsT0FBQSxLQUFBLElBQUEsUUFBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLEVBQUE7QUFBZ0gsaUJBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUFxQixTQUFySSxDQUFxSSxJQUFySSxDQUFxSSxJQUFySSxFQUFxSSxHQUFySSxDQUFBO0FBQ0E7O0FBQUEsZUFBQSxFQUFBO0FBQ0E7QUFBQSxPQVRBOzs7QUFXQTtBQUFBOztBQUNBOzs7QUFBQSxNQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLE1BQUEsR0FBQSxNQUFBLElBQUEsTUFBQSxDQUFBLFVBQUE7QUFDQTtBQUFBLGlCQUFBLFVB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R0FBQyxJQUFBLE1BQUEsQ0FBS1csRUFBRSxDQUFGQSxJQUFBQSxDQUFOWCxjQUFNVyxDQUFMLENBQURYLENBQUFBLENBQUFBLEdBQUFBLE9BQTJDVyxFQUFFLENBQXBELEdBQWtEQSxFQUFsRDtBQUNEO0FBSFM7QUFsSUcsU0FBakJkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNydUJBLFFBQUEsTUFBQSxDQUFBLE9BQUEsR0FBQSxrQ0FBQTs7Ozs7O0FMVUE7Q0FWQSIsImZpbGUiOiJmb3VuZGF0aW9uL2ZvdW5kYXRpb24uYWJpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2ZvdW5kYXRpb24uY29yZVwiKSwgcmVxdWlyZShcImpxdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuL2ZvdW5kYXRpb24uY29yZVwiLCBcImpxdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3VuZGF0aW9uLmFiaWRlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdID0gcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdIHx8IHt9LCByb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmFiaWRlXCJdID0gZmFjdG9yeShyb290W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIl1bXCJmb3VuZGF0aW9uLmNvcmVcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19mb3VuZGF0aW9uX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX187IiwiaW1wb3J0IHsgRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlJztcblxuaW1wb3J0IHsgQWJpZGUgfSBmcm9tICcuLi8uLi9mb3VuZGF0aW9uLmFiaWRlJztcbkZvdW5kYXRpb24ucGx1Z2luKEFiaWRlLCAnQWJpZGUnKTtcblxuZXhwb3J0IHsgRm91bmRhdGlvbiwgQWJpZGUgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnBsdWdpbic7XG5pbXBvcnQgeyBHZXRZb0RpZ2l0cyB9IGZyb20gJy4vZm91bmRhdGlvbi5jb3JlLnV0aWxzJztcblxuLyoqXG4gKiBBYmlkZSBtb2R1bGUuXG4gKiBAbW9kdWxlIGZvdW5kYXRpb24uYWJpZGVcbiAqL1xuXG5jbGFzcyBBYmlkZSBleHRlbmRzIFBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEFiaWRlLlxuICAgKiBAY2xhc3NcbiAgICogQG5hbWUgQWJpZGVcbiAgICogQGZpcmVzIEFiaWRlI2luaXRcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBqUXVlcnkgb2JqZWN0IHRvIGFkZCB0aGUgdHJpZ2dlciB0by5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPdmVycmlkZXMgdG8gdGhlIGRlZmF1bHQgcGx1Z2luIHNldHRpbmdzLlxuICAgKi9cbiAgX3NldHVwKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyAgPSAkLmV4dGVuZCh0cnVlLCB7fSwgQWJpZGUuZGVmYXVsdHMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcbiAgICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5mb3Jtbm92YWxpZGF0ZSA9IG51bGw7XG5cbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdBYmlkZSc7IC8vIGllOSBiYWNrIGNvbXBhdFxuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgQWJpZGUgcGx1Z2luIGFuZCBjYWxscyBmdW5jdGlvbnMgdG8gZ2V0IEFiaWRlIGZ1bmN0aW9uaW5nIG9uIGxvYWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB0aGlzLiRpbnB1dHMgPSAkLm1lcmdlKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb25zaWRlciBhcyBpbnB1dCB0byB2YWxpZGF0ZTpcbiAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXQnKS5ub3QoJ1t0eXBlPVwic3VibWl0XCJdJyksIC8vICogYWxsIGlucHV0IGZpZWxkcyBleHBlY3Qgc3VibWl0XG4gICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ3RleHRhcmVhLCBzZWxlY3QnKSAgICAgICAgICAgICAgLy8gKiBhbGwgdGV4dGFyZWFzIGFuZCBzZWxlY3QgZmllbGRzXG4gICAgKTtcbiAgICB0aGlzLiRzdWJtaXRzID0gdGhpcy4kZWxlbWVudC5maW5kKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgIGNvbnN0ICRnbG9iYWxFcnJvcnMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWFiaWRlLWVycm9yXScpO1xuXG4gICAgLy8gQWRkIGExMXkgYXR0cmlidXRlcyB0byBhbGwgZmllbGRzXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hMTF5QXR0cmlidXRlcykge1xuICAgICAgdGhpcy4kaW5wdXRzLmVhY2goKGksIGlucHV0KSA9PiB0aGlzLmFkZEExMXlBdHRyaWJ1dGVzKCQoaW5wdXQpKSk7XG4gICAgICAkZ2xvYmFsRXJyb3JzLmVhY2goKGksIGVycm9yKSA9PiB0aGlzLmFkZEdsb2JhbEVycm9yQTExeUF0dHJpYnV0ZXMoJChlcnJvcikpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBldmVudHMgZm9yIEFiaWRlLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2V2ZW50cygpIHtcbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLmFiaWRlJylcbiAgICAgIC5vbigncmVzZXQuemYuYWJpZGUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICB9KVxuICAgICAgLm9uKCdzdWJtaXQuemYuYWJpZGUnLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLiRzdWJtaXRzXG4gICAgICAub2ZmKCdjbGljay56Zi5hYmlkZSBrZXlkb3duLnpmLmFiaWRlJylcbiAgICAgIC5vbignY2xpY2suemYuYWJpZGUga2V5ZG93bi56Zi5hYmlkZScsIChlKSA9PiB7XG4gICAgICAgIGlmICghZS5rZXkgfHwgKGUua2V5ID09PSAnICcgfHwgZS5rZXkgPT09ICdFbnRlcicpKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuZm9ybW5vdmFsaWRhdGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2Zvcm1ub3ZhbGlkYXRlJykgIT09IG51bGw7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5zdWJtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT24gPT09ICdmaWVsZENoYW5nZScpIHtcbiAgICAgIHRoaXMuJGlucHV0c1xuICAgICAgICAub2ZmKCdjaGFuZ2UuemYuYWJpZGUnKVxuICAgICAgICAub24oJ2NoYW5nZS56Zi5hYmlkZScsIChlKSA9PiB7XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0KCQoZS50YXJnZXQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saXZlVmFsaWRhdGUpIHtcbiAgICAgIHRoaXMuJGlucHV0c1xuICAgICAgICAub2ZmKCdpbnB1dC56Zi5hYmlkZScpXG4gICAgICAgIC5vbignaW5wdXQuemYuYWJpZGUnLCAoZSkgPT4ge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dCgkKGUudGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPbkJsdXIpIHtcbiAgICAgIHRoaXMuJGlucHV0c1xuICAgICAgICAub2ZmKCdibHVyLnpmLmFiaWRlJylcbiAgICAgICAgLm9uKCdibHVyLnpmLmFiaWRlJywgKGUpID0+IHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXQoJChlLnRhcmdldCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgbmVjZXNzYXJ5IGZ1bmN0aW9ucyB0byB1cGRhdGUgQWJpZGUgdXBvbiBET00gY2hhbmdlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVmbG93KCkge1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgc3VibWl0dGVkIGZvcm0gc2hvdWxkIGJlIHZhbGlkYXRlZCBvciBub3QsIGNvbnNvZGVyaW5nIGZvcm1ub3ZhbGlkYXRlIGFuZCBpc0VuYWJsZWRcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdmFsaWRhdGlvbklzRGlzYWJsZWQoKSB7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkID09PSBmYWxzZSkgeyAvLyB3aG9sZSB2YWxpZGF0aW9uIGRpc2FibGVkXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLmZvcm1ub3ZhbGlkYXRlID09PSAnYm9vbGVhbicpIHsgLy8gdHJpZ2dlcmVkIGJ5ICRzdWJtaXRcbiAgICAgIHJldHVybiB0aGlzLmZvcm1ub3ZhbGlkYXRlO1xuICAgIH0gZWxzZSB7IC8vIHRyaWdnZXJlZCBieSBFbnRlciBpbiBub24tc3VibWl0IGlucHV0XG4gICAgICByZXR1cm4gdGhpcy4kc3VibWl0cy5sZW5ndGggPyB0aGlzLiRzdWJtaXRzWzBdLmdldEF0dHJpYnV0ZSgnZm9ybW5vdmFsaWRhdGUnKSAhPT0gbnVsbCA6IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSB3aG9sZSB2YWxpZGF0aW9uXG4gICAqL1xuICBlbmFibGVWYWxpZGF0aW9uKCl7XG4gICAgdGhpcy5pc0VuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSB3aG9sZSB2YWxpZGF0aW9uXG4gICAqL1xuICBkaXNhYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLmlzRW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBhIGZvcm0gZWxlbWVudCBoYXMgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSBhbmQgaWYgaXQncyBjaGVja2VkIG9yIG5vdFxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gY2hlY2sgZm9yIHJlcXVpcmVkIGF0dHJpYnV0ZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gQm9vbGVhbiB2YWx1ZSBkZXBlbmRzIG9uIHdoZXRoZXIgb3Igbm90IGF0dHJpYnV0ZSBpcyBjaGVja2VkIG9yIGVtcHR5XG4gICAqL1xuICByZXF1aXJlZENoZWNrKCRlbCkge1xuICAgIGlmICghJGVsLmF0dHIoJ3JlcXVpcmVkJykpIHJldHVybiB0cnVlO1xuXG4gICAgdmFyIGlzR29vZCA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKCRlbFswXS50eXBlKSB7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIGlzR29vZCA9ICRlbFswXS5jaGVja2VkO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgIGNhc2UgJ3NlbGVjdC1vbmUnOlxuICAgICAgY2FzZSAnc2VsZWN0LW11bHRpcGxlJzpcbiAgICAgICAgdmFyIG9wdCA9ICRlbC5maW5kKCdvcHRpb246c2VsZWN0ZWQnKTtcbiAgICAgICAgaWYgKCFvcHQubGVuZ3RoIHx8ICFvcHQudmFsKCkpIGlzR29vZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYoISRlbC52YWwoKSB8fCAhJGVsLnZhbCgpLmxlbmd0aCkgaXNHb29kID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzR29vZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQ6XG4gICAqIC0gQmFzZWQgb24gJGVsLCB0aGUgZmlyc3QgZWxlbWVudChzKSBjb3JyZXNwb25kaW5nIHRvIGBmb3JtRXJyb3JTZWxlY3RvcmAgaW4gdGhpcyBvcmRlcjpcbiAgICogICAxLiBUaGUgZWxlbWVudCdzIGRpcmVjdCBzaWJsaW5nKCdzKS5cbiAgICogICAyLiBUaGUgZWxlbWVudCdzIHBhcmVudCdzIGNoaWxkcmVuLlxuICAgKiAtIEVsZW1lbnQocykgd2l0aCB0aGUgYXR0cmlidXRlIGBbZGF0YS1mb3JtLWVycm9yLWZvcl1gIHNldCB3aXRoIHRoZSBlbGVtZW50J3MgaWQuXG4gICAqXG4gICAqIFRoaXMgYWxsb3dzIGZvciBtdWx0aXBsZSBmb3JtIGVycm9ycyBwZXIgaW5wdXQsIHRob3VnaCBpZiBub25lIGFyZSBmb3VuZCwgbm8gZm9ybSBlcnJvcnMgd2lsbCBiZSBzaG93bi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbCAtIGpRdWVyeSBvYmplY3QgdG8gdXNlIGFzIHJlZmVyZW5jZSB0byBmaW5kIHRoZSBmb3JtIGVycm9yIHNlbGVjdG9yLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBqUXVlcnkgb2JqZWN0IHdpdGggdGhlIHNlbGVjdG9yLlxuICAgKi9cbiAgZmluZEZvcm1FcnJvcigkZWwpIHtcbiAgICB2YXIgaWQgPSAkZWwubGVuZ3RoID8gJGVsWzBdLmlkIDogJyc7XG4gICAgdmFyICRlcnJvciA9ICRlbC5zaWJsaW5ncyh0aGlzLm9wdGlvbnMuZm9ybUVycm9yU2VsZWN0b3IpO1xuXG4gICAgaWYgKCEkZXJyb3IubGVuZ3RoKSB7XG4gICAgICAkZXJyb3IgPSAkZWwucGFyZW50KCkuZmluZCh0aGlzLm9wdGlvbnMuZm9ybUVycm9yU2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGlmIChpZCkge1xuICAgICAgJGVycm9yID0gJGVycm9yLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoYFtkYXRhLWZvcm0tZXJyb3ItZm9yPVwiJHtpZH1cIl1gKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRlcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhpcyBvcmRlcjpcbiAgICogMi4gVGhlIDxsYWJlbD4gd2l0aCB0aGUgYXR0cmlidXRlIGBbZm9yPVwic29tZUlucHV0SWRcIl1gXG4gICAqIDMuIFRoZSBgLmNsb3Nlc3QoKWAgPGxhYmVsPlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsIC0galF1ZXJ5IG9iamVjdCB0byBjaGVjayBmb3IgcmVxdWlyZWQgYXR0cmlidXRlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBCb29sZWFuIHZhbHVlIGRlcGVuZHMgb24gd2hldGhlciBvciBub3QgYXR0cmlidXRlIGlzIGNoZWNrZWQgb3IgZW1wdHlcbiAgICovXG4gIGZpbmRMYWJlbCgkZWwpIHtcbiAgICB2YXIgaWQgPSAkZWxbMF0uaWQ7XG4gICAgdmFyICRsYWJlbCA9IHRoaXMuJGVsZW1lbnQuZmluZChgbGFiZWxbZm9yPVwiJHtpZH1cIl1gKTtcblxuICAgIGlmICghJGxhYmVsLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICRlbC5jbG9zZXN0KCdsYWJlbCcpO1xuICAgIH1cblxuICAgIHJldHVybiAkbGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzZXQgb2YgbGFiZWxzIGFzc29jaWF0ZWQgd2l0aCBhIHNldCBvZiByYWRpbyBlbHMgaW4gdGhpcyBvcmRlclxuICAgKiAyLiBUaGUgPGxhYmVsPiB3aXRoIHRoZSBhdHRyaWJ1dGUgYFtmb3I9XCJzb21lSW5wdXRJZFwiXWBcbiAgICogMy4gVGhlIGAuY2xvc2VzdCgpYCA8bGFiZWw+XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIGNoZWNrIGZvciByZXF1aXJlZCBhdHRyaWJ1dGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IEJvb2xlYW4gdmFsdWUgZGVwZW5kcyBvbiB3aGV0aGVyIG9yIG5vdCBhdHRyaWJ1dGUgaXMgY2hlY2tlZCBvciBlbXB0eVxuICAgKi9cbiAgZmluZFJhZGlvTGFiZWxzKCRlbHMpIHtcbiAgICB2YXIgbGFiZWxzID0gJGVscy5tYXAoKGksIGVsKSA9PiB7XG4gICAgICB2YXIgaWQgPSBlbC5pZDtcbiAgICAgIHZhciAkbGFiZWwgPSB0aGlzLiRlbGVtZW50LmZpbmQoYGxhYmVsW2Zvcj1cIiR7aWR9XCJdYCk7XG5cbiAgICAgIGlmICghJGxhYmVsLmxlbmd0aCkge1xuICAgICAgICAkbGFiZWwgPSAkKGVsKS5jbG9zZXN0KCdsYWJlbCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRsYWJlbFswXTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkKGxhYmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzZXQgb2YgbGFiZWxzIGFzc29jaWF0ZWQgd2l0aCBhIHNldCBvZiBjaGVja2JveCBlbHMgaW4gdGhpcyBvcmRlclxuICAgKiAyLiBUaGUgPGxhYmVsPiB3aXRoIHRoZSBhdHRyaWJ1dGUgYFtmb3I9XCJzb21lSW5wdXRJZFwiXWBcbiAgICogMy4gVGhlIGAuY2xvc2VzdCgpYCA8bGFiZWw+XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIGNoZWNrIGZvciByZXF1aXJlZCBhdHRyaWJ1dGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IEJvb2xlYW4gdmFsdWUgZGVwZW5kcyBvbiB3aGV0aGVyIG9yIG5vdCBhdHRyaWJ1dGUgaXMgY2hlY2tlZCBvciBlbXB0eVxuICAgKi9cbiAgZmluZENoZWNrYm94TGFiZWxzKCRlbHMpIHtcbiAgICB2YXIgbGFiZWxzID0gJGVscy5tYXAoKGksIGVsKSA9PiB7XG4gICAgICB2YXIgaWQgPSBlbC5pZDtcbiAgICAgIHZhciAkbGFiZWwgPSB0aGlzLiRlbGVtZW50LmZpbmQoYGxhYmVsW2Zvcj1cIiR7aWR9XCJdYCk7XG5cbiAgICAgIGlmICghJGxhYmVsLmxlbmd0aCkge1xuICAgICAgICAkbGFiZWwgPSAkKGVsKS5jbG9zZXN0KCdsYWJlbCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRsYWJlbFswXTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkKGxhYmVscyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgQ1NTIGVycm9yIGNsYXNzIGFzIHNwZWNpZmllZCBieSB0aGUgQWJpZGUgc2V0dGluZ3MgdG8gdGhlIGxhYmVsLCBpbnB1dCwgYW5kIHRoZSBmb3JtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIGFkZCB0aGUgY2xhc3MgdG9cbiAgICovXG4gIGFkZEVycm9yQ2xhc3NlcygkZWwpIHtcbiAgICB2YXIgJGxhYmVsID0gdGhpcy5maW5kTGFiZWwoJGVsKTtcbiAgICB2YXIgJGZvcm1FcnJvciA9IHRoaXMuZmluZEZvcm1FcnJvcigkZWwpO1xuXG4gICAgaWYgKCRsYWJlbC5sZW5ndGgpIHtcbiAgICAgICRsYWJlbC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubGFiZWxFcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoJGZvcm1FcnJvci5sZW5ndGgpIHtcbiAgICAgICRmb3JtRXJyb3IuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZvcm1FcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmlucHV0RXJyb3JDbGFzcykuYXR0cih7XG4gICAgICAnZGF0YS1pbnZhbGlkJzogJycsXG4gICAgICAnYXJpYS1pbnZhbGlkJzogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgW2Zvcl0gYW5kIFtyb2xlPWFsZXJ0XSBhdHRyaWJ1dGVzIHRvIGFsbCBmb3JtIGVycm9yIHRhcmdldHRpbmcgJGVsLFxuICAgKiBhbmQgW2FyaWEtZGVzY3JpYmVkYnldIGF0dHJpYnV0ZSB0byAkZWwgdG93YXJkIHRoZSBmaXJzdCBmb3JtIGVycm9yLlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsIC0galF1ZXJ5IG9iamVjdFxuICAgKi9cbiAgYWRkQTExeUF0dHJpYnV0ZXMoJGVsKSB7XG4gICAgbGV0ICRlcnJvcnMgPSB0aGlzLmZpbmRGb3JtRXJyb3IoJGVsKTtcbiAgICBsZXQgJGxhYmVscyA9ICRlcnJvcnMuZmlsdGVyKCdsYWJlbCcpO1xuICAgIGxldCAkZXJyb3IgPSAkZXJyb3JzLmZpcnN0KCk7XG4gICAgaWYgKCEkZXJyb3JzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgLy8gU2V0IFthcmlhLWRlc2NyaWJlZGJ5XSBvbiB0aGUgaW5wdXQgdG93YXJkIHRoZSBmaXJzdCBmb3JtIGVycm9yIGlmIGl0IGlzIG5vdCBzZXRcbiAgICBpZiAodHlwZW9mICRlbC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBHZXQgdGhlIGZpcnN0IGVycm9yIElEIG9yIGNyZWF0ZSBvbmVcbiAgICAgIGxldCBlcnJvcklkID0gJGVycm9yLmF0dHIoJ2lkJyk7XG4gICAgICBpZiAodHlwZW9mIGVycm9ySWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVycm9ySWQgPSBHZXRZb0RpZ2l0cyg2LCAnYWJpZGUtZXJyb3InKTtcbiAgICAgICAgJGVycm9yLmF0dHIoJ2lkJywgZXJyb3JJZCk7XG4gICAgICB9O1xuXG4gICAgICAkZWwuYXR0cignYXJpYS1kZXNjcmliZWRieScsIGVycm9ySWQpO1xuICAgIH1cblxuICAgIGlmICgkbGFiZWxzLmZpbHRlcignW2Zvcl0nKS5sZW5ndGggPCAkbGFiZWxzLmxlbmd0aCkge1xuICAgICAgLy8gR2V0IHRoZSBpbnB1dCBJRCBvciBjcmVhdGUgb25lXG4gICAgICBsZXQgZWxlbUlkID0gJGVsLmF0dHIoJ2lkJyk7XG4gICAgICBpZiAodHlwZW9mIGVsZW1JZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZWxlbUlkID0gR2V0WW9EaWdpdHMoNiwgJ2FiaWRlLWlucHV0Jyk7XG4gICAgICAgICRlbC5hdHRyKCdpZCcsIGVsZW1JZCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBGb3IgZWFjaCBsYWJlbCB0YXJnZXRpbmcgJGVsLCBzZXQgW2Zvcl0gaWYgaXQgaXMgbm90IHNldC5cbiAgICAgICRsYWJlbHMuZWFjaCgoaSwgbGFiZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGxhYmVsID0gJChsYWJlbCk7XG4gICAgICAgIGlmICh0eXBlb2YgJGxhYmVsLmF0dHIoJ2ZvcicpID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAkbGFiZWwuYXR0cignZm9yJywgZWxlbUlkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZvciBlYWNoIGVycm9yIHRhcmdldGluZyAkZWwsIHNldCBbcm9sZT1hbGVydF0gaWYgaXQgaXMgbm90IHNldC5cbiAgICAkZXJyb3JzLmVhY2goKGksIGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCAkbGFiZWwgPSAkKGxhYmVsKTtcbiAgICAgIGlmICh0eXBlb2YgJGxhYmVsLmF0dHIoJ3JvbGUnKSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICRsYWJlbC5hdHRyKCdyb2xlJywgJ2FsZXJ0Jyk7XG4gICAgfSkuZW5kKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBbYXJpYS1saXZlXSBhdHRyaWJ1dGUgdG8gdGhlIGdpdmVuIGdsb2JhbCBmb3JtIGVycm9yICRlbC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbCAtIGpRdWVyeSBvYmplY3QgdG8gYWRkIHRoZSBhdHRyaWJ1dGUgdG9cbiAgICovXG4gIGFkZEdsb2JhbEVycm9yQTExeUF0dHJpYnV0ZXMoJGVsKSB7XG4gICAgaWYgKHR5cGVvZiAkZWwuYXR0cignYXJpYS1saXZlJykgPT09ICd1bmRlZmluZWQnKVxuICAgICAgJGVsLmF0dHIoJ2FyaWEtbGl2ZScsIHRoaXMub3B0aW9ucy5hMTF5RXJyb3JMZXZlbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIENTUyBlcnJvciBjbGFzc2VzIGV0YyBmcm9tIGFuIGVudGlyZSByYWRpbyBidXR0b24gZ3JvdXBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGdyb3VwTmFtZSAtIEEgc3RyaW5nIHRoYXQgc3BlY2lmaWVzIHRoZSBuYW1lIG9mIGEgcmFkaW8gYnV0dG9uIGdyb3VwXG4gICAqXG4gICAqL1xuICByZW1vdmVSYWRpb0Vycm9yQ2xhc3Nlcyhncm91cE5hbWUpIHtcbiAgICB2YXIgJGVscyA9IHRoaXMuJGVsZW1lbnQuZmluZChgOnJhZGlvW25hbWU9XCIke2dyb3VwTmFtZX1cIl1gKTtcbiAgICB2YXIgJGxhYmVscyA9IHRoaXMuZmluZFJhZGlvTGFiZWxzKCRlbHMpO1xuICAgIHZhciAkZm9ybUVycm9ycyA9IHRoaXMuZmluZEZvcm1FcnJvcigkZWxzKTtcblxuICAgIGlmICgkbGFiZWxzLmxlbmd0aCkge1xuICAgICAgJGxhYmVscy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubGFiZWxFcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoJGZvcm1FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAkZm9ybUVycm9ycy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZm9ybUVycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgICRlbHMucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmlucHV0RXJyb3JDbGFzcykuYXR0cih7XG4gICAgICAnZGF0YS1pbnZhbGlkJzogbnVsbCxcbiAgICAgICdhcmlhLWludmFsaWQnOiBudWxsXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgQ1NTIGVycm9yIGNsYXNzZXMgZXRjIGZyb20gYW4gZW50aXJlIGNoZWNrYm94IGdyb3VwXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBncm91cE5hbWUgLSBBIHN0cmluZyB0aGF0IHNwZWNpZmllcyB0aGUgbmFtZSBvZiBhIGNoZWNrYm94IGdyb3VwXG4gICAqXG4gICAqL1xuICByZW1vdmVDaGVja2JveEVycm9yQ2xhc3Nlcyhncm91cE5hbWUpIHtcbiAgICB2YXIgJGVscyA9IHRoaXMuJGVsZW1lbnQuZmluZChgOmNoZWNrYm94W25hbWU9XCIke2dyb3VwTmFtZX1cIl1gKTtcbiAgICB2YXIgJGxhYmVscyA9IHRoaXMuZmluZENoZWNrYm94TGFiZWxzKCRlbHMpO1xuICAgIHZhciAkZm9ybUVycm9ycyA9IHRoaXMuZmluZEZvcm1FcnJvcigkZWxzKTtcblxuICAgIGlmICgkbGFiZWxzLmxlbmd0aCkge1xuICAgICAgJGxhYmVscy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubGFiZWxFcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoJGZvcm1FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAkZm9ybUVycm9ycy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZm9ybUVycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgICRlbHMucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmlucHV0RXJyb3JDbGFzcykuYXR0cih7XG4gICAgICAnZGF0YS1pbnZhbGlkJzogbnVsbCxcbiAgICAgICdhcmlhLWludmFsaWQnOiBudWxsXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIENTUyBlcnJvciBjbGFzcyBhcyBzcGVjaWZpZWQgYnkgdGhlIEFiaWRlIHNldHRpbmdzIGZyb20gdGhlIGxhYmVsLCBpbnB1dCwgYW5kIHRoZSBmb3JtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIHJlbW92ZSB0aGUgY2xhc3MgZnJvbVxuICAgKi9cbiAgcmVtb3ZlRXJyb3JDbGFzc2VzKCRlbCkge1xuICAgIC8vIHJhZGlvcyBuZWVkIHRvIGNsZWFyIGFsbCBvZiB0aGUgZWxzXG4gICAgaWYoJGVsWzBdLnR5cGUgPT0gJ3JhZGlvJykge1xuICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlUmFkaW9FcnJvckNsYXNzZXMoJGVsLmF0dHIoJ25hbWUnKSk7XG4gICAgfVxuICAgIC8vIGNoZWNrYm94ZXMgbmVlZCB0byBjbGVhciBhbGwgb2YgdGhlIGVsc1xuICAgIGVsc2UgaWYoJGVsWzBdLnR5cGUgPT0gJ2NoZWNrYm94Jykge1xuICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlQ2hlY2tib3hFcnJvckNsYXNzZXMoJGVsLmF0dHIoJ25hbWUnKSk7XG4gICAgfVxuXG4gICAgdmFyICRsYWJlbCA9IHRoaXMuZmluZExhYmVsKCRlbCk7XG4gICAgdmFyICRmb3JtRXJyb3IgPSB0aGlzLmZpbmRGb3JtRXJyb3IoJGVsKTtcblxuICAgIGlmICgkbGFiZWwubGVuZ3RoKSB7XG4gICAgICAkbGFiZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxhYmVsRXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCRmb3JtRXJyb3IubGVuZ3RoKSB7XG4gICAgICAkZm9ybUVycm9yLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mb3JtRXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5pbnB1dEVycm9yQ2xhc3MpLmF0dHIoe1xuICAgICAgJ2RhdGEtaW52YWxpZCc6IG51bGwsXG4gICAgICAnYXJpYS1pbnZhbGlkJzogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdvZXMgdGhyb3VnaCBhIGZvcm0gdG8gZmluZCBpbnB1dHMgYW5kIHByb2NlZWRzIHRvIHZhbGlkYXRlIHRoZW0gaW4gd2F5cyBzcGVjaWZpYyB0byB0aGVpciB0eXBlLlxuICAgKiBJZ25vcmVzIGlucHV0cyB3aXRoIGRhdGEtYWJpZGUtaWdub3JlLCB0eXBlPVwiaGlkZGVuXCIgb3IgZGlzYWJsZWQgYXR0cmlidXRlcyBzZXRcbiAgICogQGZpcmVzIEFiaWRlI2ludmFsaWRcbiAgICogQGZpcmVzIEFiaWRlI3ZhbGlkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byB2YWxpZGF0ZSwgc2hvdWxkIGJlIGFuIEhUTUwgaW5wdXRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGdvb2RUb0dvIC0gSWYgdGhlIGlucHV0IGlzIHZhbGlkIG9yIG5vdC5cbiAgICovXG4gIHZhbGlkYXRlSW5wdXQoJGVsKSB7XG4gICAgdmFyIGNsZWFyUmVxdWlyZSA9IHRoaXMucmVxdWlyZWRDaGVjaygkZWwpLFxuICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgY3VzdG9tVmFsaWRhdG9yID0gdHJ1ZSxcbiAgICAgICAgdmFsaWRhdG9yID0gJGVsLmF0dHIoJ2RhdGEtdmFsaWRhdG9yJyksXG4gICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuXG4gICAgLy8gc2tpcCB2YWxpZGF0aW9uIGlmIGRpc2FibGVkXG4gICAgaWYgKHRoaXMuX3ZhbGlkYXRpb25Jc0Rpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGRvbid0IHZhbGlkYXRlIGlnbm9yZWQgaW5wdXRzIG9yIGhpZGRlbiBpbnB1dHMgb3IgZGlzYWJsZWQgaW5wdXRzXG4gICAgaWYgKCRlbC5pcygnW2RhdGEtYWJpZGUtaWdub3JlXScpIHx8ICRlbC5pcygnW3R5cGU9XCJoaWRkZW5cIl0nKSB8fCAkZWwuaXMoJ1tkaXNhYmxlZF0nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3dpdGNoICgkZWxbMF0udHlwZSkge1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICB2YWxpZGF0ZWQgPSB0aGlzLnZhbGlkYXRlUmFkaW8oJGVsLmF0dHIoJ25hbWUnKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHZhbGlkYXRlZCA9IHRoaXMudmFsaWRhdGVDaGVja2JveCgkZWwuYXR0cignbmFtZScpKTtcbiAgICAgICAgY2xlYXJSZXF1aXJlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICBjYXNlICdzZWxlY3Qtb25lJzpcbiAgICAgIGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6XG4gICAgICAgIHZhbGlkYXRlZCA9IGNsZWFyUmVxdWlyZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhbGlkYXRlZCA9IHRoaXMudmFsaWRhdGVUZXh0KCRlbCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgY3VzdG9tVmFsaWRhdG9yID0gdGhpcy5tYXRjaFZhbGlkYXRpb24oJGVsLCB2YWxpZGF0b3IsICRlbC5hdHRyKCdyZXF1aXJlZCcpKTtcbiAgICB9XG5cbiAgICBpZiAoJGVsLmF0dHIoJ2RhdGEtZXF1YWx0bycpKSB7XG4gICAgICBlcXVhbFRvID0gdGhpcy5vcHRpb25zLnZhbGlkYXRvcnMuZXF1YWxUbygkZWwpO1xuICAgIH1cblxuXG4gICAgdmFyIGdvb2RUb0dvID0gW2NsZWFyUmVxdWlyZSwgdmFsaWRhdGVkLCBjdXN0b21WYWxpZGF0b3IsIGVxdWFsVG9dLmluZGV4T2YoZmFsc2UpID09PSAtMTtcbiAgICB2YXIgbWVzc2FnZSA9IChnb29kVG9HbyA/ICd2YWxpZCcgOiAnaW52YWxpZCcpICsgJy56Zi5hYmlkZSc7XG5cbiAgICBpZiAoZ29vZFRvR28pIHtcbiAgICAgIC8vIFJlLXZhbGlkYXRlIGlucHV0cyB0aGF0IGRlcGVuZCBvbiB0aGlzIG9uZSB3aXRoIGVxdWFsdG9cbiAgICAgIGNvbnN0IGRlcGVuZGVudEVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5maW5kKGBbZGF0YS1lcXVhbHRvPVwiJHskZWwuYXR0cignaWQnKX1cIl1gKTtcbiAgICAgIGlmIChkZXBlbmRlbnRFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgICAgZGVwZW5kZW50RWxlbWVudHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgICAgX3RoaXMudmFsaWRhdGVJbnB1dCgkKHRoaXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXNbZ29vZFRvR28gPyAncmVtb3ZlRXJyb3JDbGFzc2VzJyA6ICdhZGRFcnJvckNsYXNzZXMnXSgkZWwpO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgaW5wdXQgaXMgZG9uZSBjaGVja2luZyBmb3IgdmFsaWRhdGlvbi4gRXZlbnQgdHJpZ2dlciBpcyBlaXRoZXIgYHZhbGlkLnpmLmFiaWRlYCBvciBgaW52YWxpZC56Zi5hYmlkZWBcbiAgICAgKiBUcmlnZ2VyIGluY2x1ZGVzIHRoZSBET00gZWxlbWVudCBvZiB0aGUgaW5wdXQuXG4gICAgICogQGV2ZW50IEFiaWRlI3ZhbGlkXG4gICAgICogQGV2ZW50IEFiaWRlI2ludmFsaWRcbiAgICAgKi9cbiAgICAkZWwudHJpZ2dlcihtZXNzYWdlLCBbJGVsXSk7XG5cbiAgICByZXR1cm4gZ29vZFRvR287XG4gIH1cblxuICAvKipcbiAgICogR29lcyB0aHJvdWdoIGEgZm9ybSBhbmQgaWYgdGhlcmUgYXJlIGFueSBpbnZhbGlkIGlucHV0cywgaXQgd2lsbCBkaXNwbGF5IHRoZSBmb3JtIGVycm9yIGVsZW1lbnRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IG5vRXJyb3IgLSB0cnVlIGlmIG5vIGVycm9ycyB3ZXJlIGRldGVjdGVkLi4uXG4gICAqIEBmaXJlcyBBYmlkZSNmb3JtdmFsaWRcbiAgICogQGZpcmVzIEFiaWRlI2Zvcm1pbnZhbGlkXG4gICAqL1xuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgdmFyIGFjYyA9IFtdO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGNoZWNrYm94R3JvdXBOYW1lO1xuXG4gICAgLy8gUmVtZW1iZXIgZmlyc3QgZm9ybSBzdWJtaXNzaW9uIHRvIHByZXZlbnQgc3BlY2lmaWMgY2hlY2tib3ggdmFsaWRhdGlvbiAobW9yZSB0aGFuIG9uZSByZXF1aXJlZCkgdW50aWwgZm9ybSBnb3QgaW5pdGlhbGx5IHN1Ym1pdHRlZFxuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gc2tpcCB2YWxpZGF0aW9uIGlmIGRpc2FibGVkXG4gICAgaWYgKHRoaXMuX3ZhbGlkYXRpb25Jc0Rpc2FibGVkKCkpIHtcbiAgICAgIHRoaXMuZm9ybW5vdmFsaWRhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy4kaW5wdXRzLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIE9ubHkgdXNlIG9uZSBjaGVja2JveCBwZXIgZ3JvdXAgc2luY2UgdmFsaWRhdGVDaGVja2JveCgpIGl0ZXJhdGVzIG92ZXIgYWxsIGFzc29jaWF0ZWQgY2hlY2tib3hlc1xuICAgICAgaWYgKCQodGhpcylbMF0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCduYW1lJykgPT09IGNoZWNrYm94R3JvdXBOYW1lKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2hlY2tib3hHcm91cE5hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcbiAgICAgIH1cblxuICAgICAgYWNjLnB1c2goX3RoaXMudmFsaWRhdGVJbnB1dCgkKHRoaXMpKSk7XG4gICAgfSk7XG5cbiAgICB2YXIgbm9FcnJvciA9IGFjYy5pbmRleE9mKGZhbHNlKSA9PT0gLTE7XG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWFiaWRlLWVycm9yXScpLmVhY2goKGksIGVsZW0pID0+IHtcbiAgICAgIGNvbnN0ICRlbGVtID0gJChlbGVtKTtcbiAgICAgIC8vIEVuc3VyZSBhMTF5IGF0dHJpYnV0ZXMgYXJlIHNldFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hMTF5QXR0cmlidXRlcykgdGhpcy5hZGRHbG9iYWxFcnJvckExMXlBdHRyaWJ1dGVzKCRlbGVtKTtcbiAgICAgIC8vIFNob3cgb3IgaGlkZSB0aGUgZXJyb3JcbiAgICAgICRlbGVtLmNzcygnZGlzcGxheScsIChub0Vycm9yID8gJ25vbmUnIDogJ2Jsb2NrJykpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgZm9ybSBpcyBmaW5pc2hlZCB2YWxpZGF0aW5nLiBFdmVudCB0cmlnZ2VyIGlzIGVpdGhlciBgZm9ybXZhbGlkLnpmLmFiaWRlYCBvciBgZm9ybWludmFsaWQuemYuYWJpZGVgLlxuICAgICAqIFRyaWdnZXIgaW5jbHVkZXMgdGhlIGVsZW1lbnQgb2YgdGhlIGZvcm0uXG4gICAgICogQGV2ZW50IEFiaWRlI2Zvcm12YWxpZFxuICAgICAqIEBldmVudCBBYmlkZSNmb3JtaW52YWxpZFxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcigobm9FcnJvciA/ICdmb3JtdmFsaWQnIDogJ2Zvcm1pbnZhbGlkJykgKyAnLnpmLmFiaWRlJywgW3RoaXMuJGVsZW1lbnRdKTtcblxuICAgIHJldHVybiBub0Vycm9yO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBhIG5vdCBhIHRleHQgaW5wdXQgaXMgdmFsaWQgYmFzZWQgb24gdGhlIHBhdHRlcm4gc3BlY2lmaWVkIGluIHRoZSBhdHRyaWJ1dGUuIElmIG5vIG1hdGNoaW5nIHBhdHRlcm4gaXMgZm91bmQsIHJldHVybnMgdHJ1ZS5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbCAtIGpRdWVyeSBvYmplY3QgdG8gdmFsaWRhdGUsIHNob3VsZCBiZSBhIHRleHQgaW5wdXQgSFRNTCBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuIC0gc3RyaW5nIHZhbHVlIG9mIG9uZSBvZiB0aGUgUmVnRXggcGF0dGVybnMgaW4gQWJpZGUub3B0aW9ucy5wYXR0ZXJuc1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gQm9vbGVhbiB2YWx1ZSBkZXBlbmRzIG9uIHdoZXRoZXIgb3Igbm90IHRoZSBpbnB1dCB2YWx1ZSBtYXRjaGVzIHRoZSBwYXR0ZXJuIHNwZWNpZmllZFxuICAgKi9cbiAgdmFsaWRhdGVUZXh0KCRlbCwgcGF0dGVybikge1xuICAgIC8vIEEgcGF0dGVybiBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgYmUgaW5mZXJlZCBmcm9tIHRoZSBpbnB1dCdzIFwicGF0dGVyblwiIGF0dHJpYnV0ZSwgb3IgaXQncyBcInR5cGVcIiBhdHRyaWJ1dGVcbiAgICBwYXR0ZXJuID0gKHBhdHRlcm4gfHwgJGVsLmF0dHIoJ2RhdGEtcGF0dGVybicpIHx8ICRlbC5hdHRyKCdwYXR0ZXJuJykgfHwgJGVsLmF0dHIoJ3R5cGUnKSk7XG4gICAgdmFyIGlucHV0VGV4dCA9ICRlbC52YWwoKTtcbiAgICB2YXIgdmFsaWQgPSBmYWxzZTtcblxuICAgIGlmIChpbnB1dFRleHQubGVuZ3RoKSB7XG4gICAgICAvLyBJZiB0aGUgcGF0dGVybiBhdHRyaWJ1dGUgb24gdGhlIGVsZW1lbnQgaXMgaW4gQWJpZGUncyBsaXN0IG9mIHBhdHRlcm5zLCB0aGVuIHRlc3QgdGhhdCByZWdleHBcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucGF0dGVybnMuaGFzT3duUHJvcGVydHkocGF0dGVybikpIHtcbiAgICAgICAgdmFsaWQgPSB0aGlzLm9wdGlvbnMucGF0dGVybnNbcGF0dGVybl0udGVzdChpbnB1dFRleHQpO1xuICAgICAgfVxuICAgICAgLy8gSWYgdGhlIHBhdHRlcm4gbmFtZSBpc24ndCBhbHNvIHRoZSB0eXBlIGF0dHJpYnV0ZSBvZiB0aGUgZmllbGQsIHRoZW4gdGVzdCBpdCBhcyBhIHJlZ2V4cFxuICAgICAgZWxzZSBpZiAocGF0dGVybiAhPT0gJGVsLmF0dHIoJ3R5cGUnKSkge1xuICAgICAgICB2YWxpZCA9IG5ldyBSZWdFeHAocGF0dGVybikudGVzdChpbnB1dFRleHQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQW4gZW1wdHkgZmllbGQgaXMgdmFsaWQgaWYgaXQncyBub3QgcmVxdWlyZWRcbiAgICBlbHNlIGlmICghJGVsLnByb3AoJ3JlcXVpcmVkJykpIHtcbiAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBhIG5vdCBhIHJhZGlvIGlucHV0IGlzIHZhbGlkIGJhc2VkIG9uIHdoZXRoZXIgb3Igbm90IGl0IGlzIHJlcXVpcmVkIGFuZCBzZWxlY3RlZC4gQWx0aG91Z2ggdGhlIGZ1bmN0aW9uIHRhcmdldHMgYSBzaW5nbGUgYDxpbnB1dD5gLCBpdCB2YWxpZGF0ZXMgYnkgY2hlY2tpbmcgdGhlIGByZXF1aXJlZGAgYW5kIGBjaGVja2VkYCBwcm9wZXJ0aWVzIG9mIGFsbCByYWRpbyBidXR0b25zIGluIGl0cyBncm91cC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGdyb3VwTmFtZSAtIEEgc3RyaW5nIHRoYXQgc3BlY2lmaWVzIHRoZSBuYW1lIG9mIGEgcmFkaW8gYnV0dG9uIGdyb3VwXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBCb29sZWFuIHZhbHVlIGRlcGVuZHMgb24gd2hldGhlciBvciBub3QgYXQgbGVhc3Qgb25lIHJhZGlvIGlucHV0IGhhcyBiZWVuIHNlbGVjdGVkIChpZiBpdCdzIHJlcXVpcmVkKVxuICAgKi9cbiAgdmFsaWRhdGVSYWRpbyhncm91cE5hbWUpIHtcbiAgICAvLyBJZiBhdCBsZWFzdCBvbmUgcmFkaW8gaW4gdGhlIGdyb3VwIGhhcyB0aGUgYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHRoZSBncm91cCBpcyBjb25zaWRlcmVkIHJlcXVpcmVkXG4gICAgLy8gUGVyIFczQyBzcGVjLCBhbGwgcmFkaW8gYnV0dG9ucyBpbiBhIGdyb3VwIHNob3VsZCBoYXZlIGByZXF1aXJlZGAsIGJ1dCB3ZSdyZSBiZWluZyBuaWNlXG4gICAgdmFyICRncm91cCA9IHRoaXMuJGVsZW1lbnQuZmluZChgOnJhZGlvW25hbWU9XCIke2dyb3VwTmFtZX1cIl1gKTtcbiAgICB2YXIgdmFsaWQgPSBmYWxzZSwgcmVxdWlyZWQgPSBmYWxzZTtcblxuICAgIC8vIEZvciB0aGUgZ3JvdXAgdG8gYmUgcmVxdWlyZWQsIGF0IGxlYXN0IG9uZSByYWRpbyBuZWVkcyB0byBiZSByZXF1aXJlZFxuICAgICRncm91cC5lYWNoKChpLCBlKSA9PiB7XG4gICAgICBpZiAoJChlKS5hdHRyKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgIHJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZighcmVxdWlyZWQpIHZhbGlkPXRydWU7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAvLyBGb3IgdGhlIGdyb3VwIHRvIGJlIHZhbGlkLCBhdCBsZWFzdCBvbmUgcmFkaW8gbmVlZHMgdG8gYmUgY2hlY2tlZFxuICAgICAgJGdyb3VwLmVhY2goKGksIGUpID0+IHtcbiAgICAgICAgaWYgKCQoZSkucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBhIG5vdCBhIGNoZWNrYm94IGlucHV0IGlzIHZhbGlkIGJhc2VkIG9uIHdoZXRoZXIgb3Igbm90IGl0IGlzIHJlcXVpcmVkIGFuZCBjaGVja2VkLiBBbHRob3VnaCB0aGUgZnVuY3Rpb24gdGFyZ2V0cyBhIHNpbmdsZSBgPGlucHV0PmAsIGl0IHZhbGlkYXRlcyBieSBjaGVja2luZyB0aGUgYHJlcXVpcmVkYCBhbmQgYGNoZWNrZWRgIHByb3BlcnRpZXMgb2YgYWxsIGNoZWNrYm94ZXMgaW4gaXRzIGdyb3VwLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZ3JvdXBOYW1lIC0gQSBzdHJpbmcgdGhhdCBzcGVjaWZpZXMgdGhlIG5hbWUgb2YgYSBjaGVja2JveCBncm91cFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gQm9vbGVhbiB2YWx1ZSBkZXBlbmRzIG9uIHdoZXRoZXIgb3Igbm90IGF0IGxlYXN0IG9uZSBjaGVja2JveCBpbnB1dCBoYXMgYmVlbiBjaGVja2VkIChpZiBpdCdzIHJlcXVpcmVkKVxuICAgKi9cbiAgdmFsaWRhdGVDaGVja2JveChncm91cE5hbWUpIHtcbiAgICAvLyBJZiBhdCBsZWFzdCBvbmUgY2hlY2tib3ggaW4gdGhlIGdyb3VwIGhhcyB0aGUgYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHRoZSBncm91cCBpcyBjb25zaWRlcmVkIHJlcXVpcmVkXG4gICAgLy8gUGVyIFczQyBzcGVjLCBhbGwgY2hlY2tib3hlcyBpbiBhIGdyb3VwIHNob3VsZCBoYXZlIGByZXF1aXJlZGAsIGJ1dCB3ZSdyZSBiZWluZyBuaWNlXG4gICAgdmFyICRncm91cCA9IHRoaXMuJGVsZW1lbnQuZmluZChgOmNoZWNrYm94W25hbWU9XCIke2dyb3VwTmFtZX1cIl1gKTtcbiAgICB2YXIgdmFsaWQgPSBmYWxzZSwgcmVxdWlyZWQgPSBmYWxzZSwgbWluUmVxdWlyZWQgPSAxLCBjaGVja2VkID0gMDtcblxuICAgIC8vIEZvciB0aGUgZ3JvdXAgdG8gYmUgcmVxdWlyZWQsIGF0IGxlYXN0IG9uZSBjaGVja2JveCBuZWVkcyB0byBiZSByZXF1aXJlZFxuICAgICRncm91cC5lYWNoKChpLCBlKSA9PiB7XG4gICAgICBpZiAoJChlKS5hdHRyKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgIHJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZighcmVxdWlyZWQpIHZhbGlkPXRydWU7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAvLyBDb3VudCBjaGVja2VkIGNoZWNrYm94ZXMgd2l0aGluIHRoZSBncm91cFxuICAgICAgLy8gVXNlIGRhdGEtbWluLXJlcXVpcmVkIGlmIGF2YWlsYWJsZSAoZGVmYXVsdDogMSlcbiAgICAgICRncm91cC5lYWNoKChpLCBlKSA9PiB7XG4gICAgICAgIGlmICgkKGUpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgIGNoZWNrZWQrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mICQoZSkuYXR0cignZGF0YS1taW4tcmVxdWlyZWQnKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBtaW5SZXF1aXJlZCA9IHBhcnNlSW50KCQoZSkuYXR0cignZGF0YS1taW4tcmVxdWlyZWQnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBGb3IgdGhlIGdyb3VwIHRvIGJlIHZhbGlkLCB0aGUgbWluUmVxdWlyZWQgYW1vdW50IG9mIGNoZWNrYm94ZXMgaGF2ZSB0byBiZSBjaGVja2VkXG4gICAgICBpZiAoY2hlY2tlZCA+PSBtaW5SZXF1aXJlZCkge1xuICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNraXAgdmFsaWRhdGlvbiBpZiBtb3JlIHRoYW4gMSBjaGVja2JveCBoYXZlIHRvIGJlIGNoZWNrZWQgQU5EIGlmIHRoZSBmb3JtIGhhc24ndCBnb3Qgc3VibWl0dGVkIHlldCAob3RoZXJ3aXNlIGl0IHdpbGwgYWxyZWFkeSBzaG93IGFuIGVycm9yIGR1cmluZyB0aGUgZmlyc3QgZmlsbCBpbilcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCAhPT0gdHJ1ZSAmJiBtaW5SZXF1aXJlZCA+IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFJlZnJlc2ggZXJyb3IgY2xhc3MgZm9yIGFsbCBpbnB1dFxuICAgICRncm91cC5lYWNoKChpLCBlKSA9PiB7XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHRoaXMuYWRkRXJyb3JDbGFzc2VzKCQoZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFcnJvckNsYXNzZXMoJChlKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBhIHNlbGVjdGVkIGlucHV0IHBhc3NlcyBhIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9uLiBNdWx0aXBsZSB2YWxpZGF0aW9ucyBjYW4gYmUgdXNlZCwgaWYgcGFzc2VkIHRvIHRoZSBlbGVtZW50IHdpdGggYGRhdGEtdmFsaWRhdG9yPVwiZm9vIGJhciBiYXpcImAgaW4gYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdGVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsIC0galF1ZXJ5IGlucHV0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWxpZGF0b3JzIC0gYSBzdHJpbmcgb2YgZnVuY3Rpb24gbmFtZXMgbWF0Y2hpbmcgZnVuY3Rpb25zIGluIHRoZSBBYmlkZS5vcHRpb25zLnZhbGlkYXRvcnMgb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlcXVpcmVkIC0gc2VsZiBleHBsYW5hdG9yeT9cbiAgICogQHJldHVybnMge0Jvb2xlYW59IC0gdHJ1ZSBpZiB2YWxpZGF0aW9ucyBwYXNzZWQuXG4gICAqL1xuICBtYXRjaFZhbGlkYXRpb24oJGVsLCB2YWxpZGF0b3JzLCByZXF1aXJlZCkge1xuICAgIHJlcXVpcmVkID0gcmVxdWlyZWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgICB2YXIgY2xlYXIgPSB2YWxpZGF0b3JzLnNwbGl0KCcgJykubWFwKCh2KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhbGlkYXRvcnNbdl0oJGVsLCByZXF1aXJlZCwgJGVsLnBhcmVudCgpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2xlYXIuaW5kZXhPZihmYWxzZSkgPT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyBmb3JtIGlucHV0cyBhbmQgc3R5bGVzXG4gICAqIEBmaXJlcyBBYmlkZSNmb3JtcmVzZXRcbiAgICovXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB2YXIgJGZvcm0gPSB0aGlzLiRlbGVtZW50LFxuICAgICAgICBvcHRzID0gdGhpcy5vcHRpb25zO1xuXG4gICAgJChgLiR7b3B0cy5sYWJlbEVycm9yQ2xhc3N9YCwgJGZvcm0pLm5vdCgnc21hbGwnKS5yZW1vdmVDbGFzcyhvcHRzLmxhYmVsRXJyb3JDbGFzcyk7XG4gICAgJChgLiR7b3B0cy5pbnB1dEVycm9yQ2xhc3N9YCwgJGZvcm0pLm5vdCgnc21hbGwnKS5yZW1vdmVDbGFzcyhvcHRzLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgJChgJHtvcHRzLmZvcm1FcnJvclNlbGVjdG9yfS4ke29wdHMuZm9ybUVycm9yQ2xhc3N9YCkucmVtb3ZlQ2xhc3Mob3B0cy5mb3JtRXJyb3JDbGFzcyk7XG4gICAgJGZvcm0uZmluZCgnW2RhdGEtYWJpZGUtZXJyb3JdJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAkKCc6aW5wdXQnLCAkZm9ybSkubm90KCc6YnV0dG9uLCA6c3VibWl0LCA6cmVzZXQsIDpoaWRkZW4sIDpyYWRpbywgOmNoZWNrYm94LCBbZGF0YS1hYmlkZS1pZ25vcmVdJykudmFsKCcnKS5hdHRyKHtcbiAgICAgICdkYXRhLWludmFsaWQnOiBudWxsLFxuICAgICAgJ2FyaWEtaW52YWxpZCc6IG51bGxcbiAgICB9KTtcbiAgICAkKCc6aW5wdXQ6cmFkaW8nLCAkZm9ybSkubm90KCdbZGF0YS1hYmlkZS1pZ25vcmVdJykucHJvcCgnY2hlY2tlZCcsZmFsc2UpLmF0dHIoe1xuICAgICAgJ2RhdGEtaW52YWxpZCc6IG51bGwsXG4gICAgICAnYXJpYS1pbnZhbGlkJzogbnVsbFxuICAgIH0pO1xuICAgICQoJzppbnB1dDpjaGVja2JveCcsICRmb3JtKS5ub3QoJ1tkYXRhLWFiaWRlLWlnbm9yZV0nKS5wcm9wKCdjaGVja2VkJyxmYWxzZSkuYXR0cih7XG4gICAgICAnZGF0YS1pbnZhbGlkJzogbnVsbCxcbiAgICAgICdhcmlhLWludmFsaWQnOiBudWxsXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgZm9ybSBoYXMgYmVlbiByZXNldC5cbiAgICAgKiBAZXZlbnQgQWJpZGUjZm9ybXJlc2V0XG4gICAgICovXG4gICAgJGZvcm0udHJpZ2dlcignZm9ybXJlc2V0LnpmLmFiaWRlJywgWyRmb3JtXSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgYW4gaW5zdGFuY2Ugb2YgQWJpZGUuXG4gICAqIFJlbW92ZXMgZXJyb3Igc3R5bGVzIGFuZCBjbGFzc2VzIGZyb20gZWxlbWVudHMsIHdpdGhvdXQgcmVzZXR0aW5nIHRoZWlyIHZhbHVlcy5cbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLm9mZignLmFiaWRlJylcbiAgICAgIC5maW5kKCdbZGF0YS1hYmlkZS1lcnJvcl0nKVxuICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuICAgIHRoaXMuJGlucHV0c1xuICAgICAgLm9mZignLmFiaWRlJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5yZW1vdmVFcnJvckNsYXNzZXMoJCh0aGlzKSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuJHN1Ym1pdHNcbiAgICAgIC5vZmYoJy5hYmlkZScpO1xuICB9XG59XG5cbi8qKlxuICogRGVmYXVsdCBzZXR0aW5ncyBmb3IgcGx1Z2luXG4gKi9cbkFiaWRlLmRlZmF1bHRzID0ge1xuICAvKipcbiAgICogVGhlIGRlZmF1bHQgZXZlbnQgdG8gdmFsaWRhdGUgaW5wdXRzLiBDaGVja2JveGVzIGFuZCByYWRpb3MgdmFsaWRhdGUgaW1tZWRpYXRlbHkuXG4gICAqIFJlbW92ZSBvciBjaGFuZ2UgdGhpcyB2YWx1ZSBmb3IgbWFudWFsIHZhbGlkYXRpb24uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUgez9zdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdmaWVsZENoYW5nZSdcbiAgICovXG4gIHZhbGlkYXRlT246ICdmaWVsZENoYW5nZScsXG5cbiAgLyoqXG4gICAqIENsYXNzIHRvIGJlIGFwcGxpZWQgdG8gaW5wdXQgbGFiZWxzIG9uIGZhaWxlZCB2YWxpZGF0aW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdpcy1pbnZhbGlkLWxhYmVsJ1xuICAgKi9cbiAgbGFiZWxFcnJvckNsYXNzOiAnaXMtaW52YWxpZC1sYWJlbCcsXG5cbiAgLyoqXG4gICAqIENsYXNzIHRvIGJlIGFwcGxpZWQgdG8gaW5wdXRzIG9uIGZhaWxlZCB2YWxpZGF0aW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdpcy1pbnZhbGlkLWlucHV0J1xuICAgKi9cbiAgaW5wdXRFcnJvckNsYXNzOiAnaXMtaW52YWxpZC1pbnB1dCcsXG5cbiAgLyoqXG4gICAqIENsYXNzIHNlbGVjdG9yIHRvIHVzZSB0byB0YXJnZXQgRm9ybSBFcnJvcnMgZm9yIHNob3cvaGlkZS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnLmZvcm0tZXJyb3InXG4gICAqL1xuICBmb3JtRXJyb3JTZWxlY3RvcjogJy5mb3JtLWVycm9yJyxcblxuICAvKipcbiAgICogQ2xhc3MgYWRkZWQgdG8gRm9ybSBFcnJvcnMgb24gZmFpbGVkIHZhbGlkYXRpb24uXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJ2lzLXZpc2libGUnXG4gICAqL1xuICBmb3JtRXJyb3JDbGFzczogJ2lzLXZpc2libGUnLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBhdXRvbWF0aWNhbGx5IGluc2VydCB3aGVuIHBvc3NpYmxlOlxuICAgKiAtIGBbYXJpYS1kZXNjcmliZWRieV1gIG9uIGZpZWxkc1xuICAgKiAtIGBbcm9sZT1hbGVydF1gIG9uIGZvcm0gZXJyb3JzIGFuZCBgW2Zvcl1gIG9uIGZvcm0gZXJyb3IgbGFiZWxzXG4gICAqIC0gYFthcmlhLWxpdmVdYCBvbiBnbG9iYWwgZXJyb3JzIGBbZGF0YS1hYmlkZS1lcnJvcl1gIChzZWUgb3B0aW9uIGBhMTF5RXJyb3JMZXZlbGApLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBhMTF5QXR0cmlidXRlczogdHJ1ZSxcblxuICAvKipcbiAgICogW2FyaWEtbGl2ZV0gYXR0cmlidXRlIHZhbHVlIHRvIGJlIGFwcGxpZWQgb24gZ2xvYmFsIGVycm9ycyBgW2RhdGEtYWJpZGUtZXJyb3JdYC5cbiAgICogT3B0aW9ucyBhcmU6ICdhc3NlcnRpdmUnLCAncG9saXRlJyBhbmQgJ29mZicvbnVsbFxuICAgKiBAb3B0aW9uXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQWNjZXNzaWJpbGl0eS9BUklBL0FSSUFfTGl2ZV9SZWdpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdhc3NlcnRpdmUnXG4gICAqL1xuICBhMTF5RXJyb3JMZXZlbDogJ2Fzc2VydGl2ZScsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHZhbGlkYXRlIHRleHQgaW5wdXRzIG9uIGFueSB2YWx1ZSBjaGFuZ2UuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBsaXZlVmFsaWRhdGU6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byB2YWxpZGF0ZSBpbnB1dHMgb24gYmx1ci5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHZhbGlkYXRlT25CbHVyOiBmYWxzZSxcblxuICBwYXR0ZXJuczoge1xuICAgIGFscGhhIDogL15bYS16QS1aXSskLyxcbiAgICBhbHBoYV9udW1lcmljIDogL15bYS16QS1aMC05XSskLyxcbiAgICBpbnRlZ2VyIDogL15bLStdP1xcZCskLyxcbiAgICBudW1iZXIgOiAvXlstK10/XFxkKig/OltcXC5cXCxdXFxkKyk/JC8sXG5cbiAgICAvLyBhbWV4LCB2aXNhLCBkaW5lcnNcbiAgICBjYXJkIDogL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18KD86MjIyWzEtOV18MlszLTZdWzAtOV17Mn18MjdbMC0xXVswLTldfDI3MjApWzAtOV17MTJ9fDYoPzowMTF8NVswLTldWzAtOV0pWzAtOV17MTJ9fDNbNDddWzAtOV17MTN9fDMoPzowWzAtNV18WzY4XVswLTldKVswLTldezExfXwoPzoyMTMxfDE4MDB8MzVcXGR7M30pXFxkezExfSkkLyxcbiAgICBjdnYgOiAvXihbMC05XSl7Myw0fSQvLFxuXG4gICAgLy8gaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2Uvc3RhdGVzLW9mLXRoZS10eXBlLWF0dHJpYnV0ZS5odG1sI3ZhbGlkLWUtbWFpbC1hZGRyZXNzXG4gICAgZW1haWwgOiAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSskLyxcblxuICAgIC8vIEZyb20gQ29tbW9uUmVnZXhKUyAoQHRhbHlzc29ub2MpXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RhbHlzc29ub2MvQ29tbW9uUmVnZXhKUy9ibG9iL2UyOTAxYjlmNTcyMjJiYzE0MDY5ZGM4ZjA1OThkNWY0MTI1NTU0MTEvbGliL2NvbW1vbnJlZ2V4LmpzI0w3NlxuICAgIC8vIEZvciBtb3JlIHJlc3RyaWN0aXZlIFVSTCBSZWdleHMsIHNlZSBodHRwczovL21hdGhpYXNieW5lbnMuYmUvZGVtby91cmwtcmVnZXguXG4gICAgdXJsOiAvXigoPzooaHR0cHM/fGZ0cHM/fGZpbGV8c3NofHNmdHApOlxcL1xcL3x3d3dcXGR7MCwzfVsuXXxbYS16MC05LlxcLV0rWy5dW2Etel17Miw0fVxcLykoPzpbXlxccygpPD5dK3xcXCgoPzpbXlxccygpPD5dK3woPzpcXChbXlxccygpPD5dK1xcKSkpKlxcKSkrKD86XFwoKD86W15cXHMoKTw+XSt8KD86XFwoW15cXHMoKTw+XStcXCkpKSpcXCl8W15cXHNgISgpXFxbXFxde307OlxcJ1wiLiw8Pj9cXHhhYlxceGJiXFx1MjAxY1xcdTIwMWRcXHUyMDE4XFx1MjAxOV0pKSQvLFxuXG4gICAgLy8gYWJjLmRlXG4gICAgZG9tYWluIDogL14oW2EtekEtWjAtOV0oW2EtekEtWjAtOVxcLV17MCw2MX1bYS16QS1aMC05XSk/XFwuKStbYS16QS1aXXsyLDh9JC8sXG5cbiAgICBkYXRldGltZSA6IC9eKFswLTJdWzAtOV17M30pXFwtKFswLTFdWzAtOV0pXFwtKFswLTNdWzAtOV0pVChbMC01XVswLTldKVxcOihbMC01XVswLTldKVxcOihbMC01XVswLTldKShafChbXFwtXFwrXShbMC0xXVswLTldKVxcOjAwKSkkLyxcbiAgICAvLyBZWVlZLU1NLUREXG4gICAgZGF0ZSA6IC8oPzoxOXwyMClbMC05XXsyfS0oPzooPzowWzEtOV18MVswLTJdKS0oPzowWzEtOV18MVswLTldfDJbMC05XSl8KD86KD8hMDIpKD86MFsxLTldfDFbMC0yXSktKD86MzApKXwoPzooPzowWzEzNTc4XXwxWzAyXSktMzEpKSQvLFxuICAgIC8vIEhIOk1NOlNTXG4gICAgdGltZSA6IC9eKDBbMC05XXwxWzAtOV18MlswLTNdKSg6WzAtNV1bMC05XSl7Mn0kLyxcbiAgICBkYXRlSVNPIDogL15cXGR7NH1bXFwvXFwtXVxcZHsxLDJ9W1xcL1xcLV1cXGR7MSwyfSQvLFxuICAgIC8vIE1NL0REL1lZWVlcbiAgICBtb250aF9kYXlfeWVhciA6IC9eKDBbMS05XXwxWzAxMl0pWy0gXFwvLl0oMFsxLTldfFsxMl1bMC05XXwzWzAxXSlbLSBcXC8uXVxcZHs0fSQvLFxuICAgIC8vIEREL01NL1lZWVlcbiAgICBkYXlfbW9udGhfeWVhciA6IC9eKDBbMS05XXxbMTJdWzAtOV18M1swMV0pWy0gXFwvLl0oMFsxLTldfDFbMDEyXSlbLSBcXC8uXVxcZHs0fSQvLFxuXG4gICAgLy8gI0ZGRiBvciAjRkZGRkZGXG4gICAgY29sb3IgOiAvXiM/KFthLWZBLUYwLTldezZ9fFthLWZBLUYwLTldezN9KSQvLFxuXG4gICAgLy8gRG9tYWluIHx8IFVSTFxuICAgIHdlYnNpdGU6IHtcbiAgICAgIHRlc3Q6ICh0ZXh0KSA9PiB7XG4gICAgICAgIHJldHVybiBBYmlkZS5kZWZhdWx0cy5wYXR0ZXJuc1snZG9tYWluJ10udGVzdCh0ZXh0KSB8fCBBYmlkZS5kZWZhdWx0cy5wYXR0ZXJuc1sndXJsJ10udGVzdCh0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHZhbGlkYXRpb24gZnVuY3Rpb25zIHRvIGJlIHVzZWQuIGBlcXVhbFRvYCBiZWluZyB0aGUgb25seSBkZWZhdWx0IGluY2x1ZGVkIGZ1bmN0aW9uLlxuICAgKiBGdW5jdGlvbnMgc2hvdWxkIHJldHVybiBvbmx5IGEgYm9vbGVhbiBpZiB0aGUgaW5wdXQgaXMgdmFsaWQgb3Igbm90LiBGdW5jdGlvbnMgYXJlIGdpdmVuIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuICAgKiBlbCA6IFRoZSBqUXVlcnkgZWxlbWVudCB0byB2YWxpZGF0ZS5cbiAgICogcmVxdWlyZWQgOiBCb29sZWFuIHZhbHVlIG9mIHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgYmUgcHJlc2VudCBvciBub3QuXG4gICAqIHBhcmVudCA6IFRoZSBkaXJlY3QgcGFyZW50IG9mIHRoZSBpbnB1dC5cbiAgICogQG9wdGlvblxuICAgKi9cbiAgdmFsaWRhdG9yczoge1xuICAgIGVxdWFsVG86IGZ1bmN0aW9uIChlbCwgcmVxdWlyZWQsIHBhcmVudCkge1xuICAgICAgcmV0dXJuICQoYCMke2VsLmF0dHIoJ2RhdGEtZXF1YWx0bycpfWApLnZhbCgpID09PSBlbC52YWwoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtBYmlkZX07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il19
