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
        "./foundation.core");
        /* harmony import */


        var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/
        __webpack_require__.n(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6L19fRk9VTkRBVElPTl9FWFRFUk5BTF9fLltuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6W1wiX19GT1VOREFUSU9OX0VYVEVSTkFMX19cIixcImZvdW5kYXRpb24uY29yZVwiXSxcImFtZFwiOlwiLi9mb3VuZGF0aW9uLmNvcmVcIixcImNvbW1vbmpzXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwiLFwiY29tbW9uanMyXCI6XCIuL2ZvdW5kYXRpb24uY29yZVwifSIsIndlYnBhY2s6Ly9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vanMvZW50cmllcy9wbHVnaW5zL2ZvdW5kYXRpb24uYWJpZGUuanMiLCJ3ZWJwYWNrOi8vX19GT1VOREFUSU9OX0VYVEVSTkFMX18uW25hbWVdL2pzL2ZvdW5kYXRpb24uYWJpZGUuanMiLCJ3ZWJwYWNrOi9fX0ZPVU5EQVRJT05fRVhURVJOQUxfXy5bbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOltcImpRdWVyeVwiXSxcImFtZFwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJjb21tb25qczJcIjpcImpxdWVyeVwifSJdLCJuYW1lcyI6WyJGb3VuZGF0aW9uIiwiQWJpZGUiLCJlbGVtZW50Iiwib3B0aW9ucyIsIiQiLCIkZ2xvYmFsRXJyb3JzIiwiZSIsIiRlbCIsImlzR29vZCIsIm9wdCIsImlkIiwiJGVycm9yIiwiJGxhYmVsIiwiJGVscyIsImxhYmVscyIsImVsIiwiJGZvcm1FcnJvciIsIiRlcnJvcnMiLCIkbGFiZWxzIiwiZXJyb3JJZCIsIkdldFlvRGlnaXRzIiwiZWxlbUlkIiwiZ3JvdXBOYW1lIiwiJGZvcm1FcnJvcnMiLCJjbGVhclJlcXVpcmUiLCJ2YWxpZGF0ZWQiLCJjdXN0b21WYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJlcXVhbFRvIiwiZ29vZFRvR28iLCJtZXNzYWdlIiwiZGVwZW5kZW50RWxlbWVudHMiLCJfdGhpcyIsImFjYyIsIm5vRXJyb3IiLCIkZWxlbSIsInBhdHRlcm4iLCJpbnB1dFRleHQiLCJ2YWxpZCIsIiRncm91cCIsInJlcXVpcmVkIiwidmFsaWRhdG9ycyIsImNsZWFyIiwiJGZvcm0iLCJvcHRzIiwiUGx1Z2luIiwidmFsaWRhdGVPbiIsImxhYmVsRXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImZvcm1FcnJvclNlbGVjdG9yIiwiZm9ybUVycm9yQ2xhc3MiLCJhMTF5QXR0cmlidXRlcyIsImExMXlFcnJvckxldmVsIiwibGl2ZVZhbGlkYXRlIiwidmFsaWRhdGVPbkJsdXIiLCJwYXR0ZXJucyIsImFscGhhIiwiYWxwaGFfbnVtZXJpYyIsImludGVnZXIiLCJudW1iZXIiLCJjYXJkIiwiY3Z2IiwiZW1haWwiLCJ1cmwiLCJkb21haW4iLCJkYXRldGltZSIsImRhdGUiLCJ0aW1lIiwiZGF0ZUlTTyIsIm1vbnRoX2RheV95ZWFyIiwiZGF5X21vbnRoX3llYXIiLCJjb2xvciIsIndlYnNpdGUiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFBLFNBQUEsZ0NBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBO0FBQ0EsTUFBQSxPQUFBLE9BQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxNQUFBLEtBQUEsUUFBQSxFQUNBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQSxtQkFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsTUFBQSxLQUFBLFVBQUEsSUFBQSxNQUFBLENBQUEsR0FBQSxFQUNBLE1BQUEsQ0FBQSxDQUFBLG1CQUFBLEVBQUEsUUFBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBREEsS0FFQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFFBQUEsRUFDQSxPQUFBLENBQUEsa0JBQUEsQ0FBQSxHQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxFQUFBLE9BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQURBLEtBR0EsSUFBQSxDQUFBLHlCQUFBLENBQUEsR0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBeUUsSUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxrQkFBQSxJQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsUUFBQSxDQUFBLENBQXpFO0FBQ0MsQ0FURCxFQVNDLE1BVEQsRUFTQyxVQUFBLDRDQUFBLEVBQUEsa0NBQUEsRUFBQTtBQUNEOzs7OztBQ1ZBO0FBQUE7O0FBQ0E7QUFBQSxVQUFBLGdCQUFBLEdBQUEsRUFBQTs7O0FBRUE7QUFBQTs7QUFDQTs7QUFBQSxlQUFBLG1CQUFBLENBQUEsUUFBQSxFQUFBOzs7QUFFQTtBQUFBOztBQUNBO0FBQUEsWUFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxpQkFBQSxnQkFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFDQTs7O0FBQUEsWUFBQSxNQUFBLEdBQUEsZ0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQTtBQUNBO0FBQUEsVUFBQSxDQUFBLEVBQUEsUUFEQTs7QUFFQTtBQUFBLFVBQUEsQ0FBQSxFQUFBLEtBRkE7O0FBR0E7QUFBQSxVQUFBLE9BQUEsRUFBQTtBQUNBOztBQUpBLFNBQUE7OztBQU1BO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxPQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUEsQ0FBQSxPQUFBLEVBQUEsbUJBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsUUFBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLElBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsZUFBQSxNQUFBLENBQUEsT0FBQTtBQUNBO0FBQUE7Ozs7O0FBR0E7QUFBQTs7QUFDQTs7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxPQUFBOzs7QUFFQTtBQUFBOztBQUNBOztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsZ0JBQUE7OztBQUVBO0FBQUE7O0FBQ0E7O0FBQUEsTUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBO0FBQ0E7QUFBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFBQSxVQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsRUFBQTtBQUEwQyxZQUFBLFVBQUEsRUFBQSxJQUExQztBQUEwQyxZQUFBLEdBQUEsRUFBQTtBQUExQyxXQUFBO0FBQ0E7QUFBQTtBQUNBOztBQUFBLE9BSkE7OztBQU1BO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxPQUFBLEVBQUE7QUFDQTtBQUFBLFlBQUEsT0FBQSxNQUFBLEtBQUEsV0FBQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUFBLFVBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQTtBQUF3RCxZQUFBLEtBQUEsRUFBQTtBQUF4RCxXQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBLFlBQUEsRUFBQTtBQUFpRCxVQUFBLEtBQUEsRUFBQTtBQUFqRCxTQUFBO0FBQ0E7QUFBQSxPQUxBOzs7QUFPQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7OztBQUFBLE1BQUEsbUJBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxLQUFB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LFNBQUEsSUFBQSxDQUFBLElBQUEsRUFBVTtBQUNkLHVCQUFPeEUsS0FBSyxDQUFMQSxRQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxRQUFBQSxFQUFBQSxJQUFBQSxDQUFBQSxJQUFBQSxLQUFnREEsS0FBSyxDQUFMQSxRQUFBQSxDQUFBQSxRQUFBQSxDQUFBQSxLQUFBQSxFQUFBQSxJQUFBQSxDQUF2RCxJQUF1REEsQ0FBdkQ7QUFDRDtBQUhNO0FBcENELFdBL0VLOztBQTBIZjs7Ozs7Ozs7QUFRQXdDLFVBQUFBLFVBQVUsRUFBRTtBQUNWYixZQUFBQSxPQUFPLEVBQUUsU0FBQSxPQUFBLENBQUEsRUFBQSxFQUFBLFFBQUEsRUFBQSxNQUFBLEVBQWdDO0FBQ3ZDLHFCQUFPeEIsMkNBQUFBLEdBQUMsSUFBQSxNQUFBLENBQUtXLEVBQUUsQ0FBRkEsSUFBQUEsQ0FBTlgsY0FBTVcsQ0FBTCxDQUFEWCxDQUFBQSxDQUFBQSxHQUFBQSxPQUEyQ1csRUFBRSxDQUFwRCxHQUFrREEsRUFBbEQ7QUFDRDtBQUhTO0FBbElHLFNBQWpCZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGpCQSxRQUFBLE1BQUEsQ0FBQSxPQUFBLEdBQUEsa0NBQUE7Ozs7OztBTFVBO0NBVkEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3VuZGF0aW9uLWFiaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9mb3VuZGF0aW9uLmNvcmVcIiksIHJlcXVpcmUoXCJqcXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiLi9mb3VuZGF0aW9uLmNvcmVcIiwgXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm91bmRhdGlvbi5hYmlkZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIi4vZm91bmRhdGlvbi5jb3JlXCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSA9IHJvb3RbXCJfX0ZPVU5EQVRJT05fRVhURVJOQUxfX1wiXSB8fCB7fSwgcm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5hYmlkZVwiXSA9IGZhY3Rvcnkocm9vdFtcIl9fRk9VTkRBVElPTl9FWFRFUk5BTF9fXCJdW1wiZm91bmRhdGlvbi5jb3JlXCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZm91bmRhdGlvbl9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2ZvdW5kYXRpb25fY29yZV9fOyIsImltcG9ydCB7IEZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZSc7XG5cbmltcG9ydCB7IEFiaWRlIH0gZnJvbSAnLi4vLi4vZm91bmRhdGlvbi5hYmlkZSc7XG5Gb3VuZGF0aW9uLnBsdWdpbihBYmlkZSwgJ0FiaWRlJyk7XG5cbmV4cG9ydCB7IEZvdW5kYXRpb24sIEFiaWRlIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS5wbHVnaW4nO1xuaW1wb3J0IHsgR2V0WW9EaWdpdHMgfSBmcm9tICcuL2ZvdW5kYXRpb24uY29yZS51dGlscyc7XG5cbi8qKlxuICogQWJpZGUgbW9kdWxlLlxuICogQG1vZHVsZSBmb3VuZGF0aW9uLmFiaWRlXG4gKi9cblxuY2xhc3MgQWJpZGUgZXh0ZW5kcyBQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBBYmlkZS5cbiAgICogQGNsYXNzXG4gICAqIEBuYW1lIEFiaWRlXG4gICAqIEBmaXJlcyBBYmlkZSNpbml0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byBhZGQgdGhlIHRyaWdnZXIgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3ZlcnJpZGVzIHRvIHRoZSBkZWZhdWx0IHBsdWdpbiBzZXR0aW5ncy5cbiAgICovXG4gIF9zZXR1cChlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgID0gJC5leHRlbmQodHJ1ZSwge30sIEFiaWRlLmRlZmF1bHRzLCB0aGlzLiRlbGVtZW50LmRhdGEoKSwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdBYmlkZSc7IC8vIGllOSBiYWNrIGNvbXBhdFxuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgQWJpZGUgcGx1Z2luIGFuZCBjYWxscyBmdW5jdGlvbnMgdG8gZ2V0IEFiaWRlIGZ1bmN0aW9uaW5nIG9uIGxvYWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdCgpIHtcbiAgICB0aGlzLiRpbnB1dHMgPSAkLm1lcmdlKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb25zaWRlciBhcyBpbnB1dCB0byB2YWxpZGF0ZTpcbiAgICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnaW5wdXQnKS5ub3QoJ1t0eXBlPXN1Ym1pdF0nKSwgICAvLyAqIGFsbCBpbnB1dCBmaWVsZHMgZXhwZWN0IHN1Ym1pdFxuICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCd0ZXh0YXJlYSwgc2VsZWN0JykgICAgICAgICAgICAgIC8vICogYWxsIHRleHRhcmVhcyBhbmQgc2VsZWN0IGZpZWxkc1xuICAgICk7XG4gICAgY29uc3QgJGdsb2JhbEVycm9ycyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtYWJpZGUtZXJyb3JdJyk7XG5cbiAgICAvLyBBZGQgYTExeSBhdHRyaWJ1dGVzIHRvIGFsbCBmaWVsZHNcbiAgICBpZiAodGhpcy5vcHRpb25zLmExMXlBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLiRpbnB1dHMuZWFjaCgoaSwgaW5wdXQpID0+IHRoaXMuYWRkQTExeUF0dHJpYnV0ZXMoJChpbnB1dCkpKTtcbiAgICAgICRnbG9iYWxFcnJvcnMuZWFjaCgoaSwgZXJyb3IpID0+IHRoaXMuYWRkR2xvYmFsRXJyb3JBMTF5QXR0cmlidXRlcygkKGVycm9yKSkpO1xuICAgIH1cblxuICAgIHRoaXMuX2V2ZW50cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGV2ZW50cyBmb3IgQWJpZGUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXZlbnRzKCkge1xuICAgIHRoaXMuJGVsZW1lbnQub2ZmKCcuYWJpZGUnKVxuICAgICAgLm9uKCdyZXNldC56Zi5hYmlkZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIH0pXG4gICAgICAub24oJ3N1Ym1pdC56Zi5hYmlkZScsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVGb3JtKCk7XG4gICAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPbiA9PT0gJ2ZpZWxkQ2hhbmdlJykge1xuICAgICAgdGhpcy4kaW5wdXRzXG4gICAgICAgIC5vZmYoJ2NoYW5nZS56Zi5hYmlkZScpXG4gICAgICAgIC5vbignY2hhbmdlLnpmLmFiaWRlJywgKGUpID0+IHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXQoJChlLnRhcmdldCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxpdmVWYWxpZGF0ZSkge1xuICAgICAgdGhpcy4kaW5wdXRzXG4gICAgICAgIC5vZmYoJ2lucHV0LnpmLmFiaWRlJylcbiAgICAgICAgLm9uKCdpbnB1dC56Zi5hYmlkZScsIChlKSA9PiB7XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0KCQoZS50YXJnZXQpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWxpZGF0ZU9uQmx1cikge1xuICAgICAgdGhpcy4kaW5wdXRzXG4gICAgICAgIC5vZmYoJ2JsdXIuemYuYWJpZGUnKVxuICAgICAgICAub24oJ2JsdXIuemYuYWJpZGUnLCAoZSkgPT4ge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dCgkKGUudGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyBuZWNlc3NhcnkgZnVuY3Rpb25zIHRvIHVwZGF0ZSBBYmlkZSB1cG9uIERPTSBjaGFuZ2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZWZsb3coKSB7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCBhIGZvcm0gZWxlbWVudCBoYXMgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZSBhbmQgaWYgaXQncyBjaGVja2VkIG9yIG5vdFxuICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAtIGpRdWVyeSBvYmplY3QgdG8gY2hlY2sgZm9yIHJlcXVpcmVkIGF0dHJpYnV0ZVxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gQm9vbGVhbiB2YWx1ZSBkZXBlbmRzIG9uIHdoZXRoZXIgb3Igbm90IGF0dHJpYnV0ZSBpcyBjaGVja2VkIG9yIGVtcHR5XG4gICAqL1xuICByZXF1aXJlZENoZWNrKCRlbCkge1xuICAgIGlmICghJGVsLmF0dHIoJ3JlcXVpcmVkJykpIHJldHVybiB0cnVlO1xuXG4gICAgdmFyIGlzR29vZCA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKCRlbFswXS50eXBlKSB7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIGlzR29vZCA9ICRlbFswXS5jaGVja2VkO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgIGNhc2UgJ3NlbGVjdC1vbmUnOlxuICAgICAgY2FzZSAnc2VsZWN0LW11bHRpcGxlJzpcbiAgICAgICAgdmFyIG9wdCA9ICRlbC5maW5kKCdvcHRpb246c2VsZWN0ZWQnKTtcbiAgICAgICAgaWYgKCFvcHQubGVuZ3RoIHx8ICFvcHQudmFsKCkpIGlzR29vZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYoISRlbC52YWwoKSB8fCAhJGVsLnZhbCgpLmxlbmd0aCkgaXNHb29kID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzR29vZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQ6XG4gICAqIC0gQmFzZWQgb24gJGVsLCB0aGUgZmlyc3QgZWxlbWVudChzKSBjb3JyZXNwb25kaW5nIHRvIGBmb3JtRXJyb3JTZWxlY3RvcmAgaW4gdGhpcyBvcmRlcjpcbiAgICogICAxLiBUaGUgZWxlbWVudCdzIGRpcmVjdCBzaWJsaW5nKCdzKS5cbiAgICogICAyLiBUaGUgZWxlbWVudCdzIHBhcmVudCdzIGNoaWxkcmVuLlxuICAgKiAtIEVsZW1lbnQocykgd2l0aCB0aGUgYXR0cmlidXRlIGBbZGF0YS1mb3JtLWVycm9yLWZvcl1gIHNldCB3aXRoIHRoZSBlbGVtZW50J3MgaWQuXG4gICAqXG4gICAqIFRoaXMgYWxsb3dzIGZvciBtdWx0aXBsZSBmb3JtIGVycm9ycyBwZXIgaW5wdXQsIHRob3VnaCBpZiBub25lIGFyZSBmb3VuZCwgbm8gZm9ybSBlcnJvcnMgd2lsbCBiZSBzaG93bi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbCAtIGpRdWVyeSBvYmplY3QgdG8gdXNlIGFzIHJlZmVyZW5jZSB0byBmaW5kIHRoZSBmb3JtIGVycm9yIHNlbGVjdG9yLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBqUXVlcnkgb2JqZWN0IHdpdGggdGhlIHNlbGVjdG9yLlxuICAgKi9cbiAgZmluZEZvcm1FcnJvcigkZWwpIHtcbiAgICB2YXIgaWQgPSAkZWxbMF0uaWQ7XG4gICAgdmFyICRlcnJvciA9ICRlbC5zaWJsaW5ncyh0aGlzLm9wdGlvbnMuZm9ybUVycm9yU2VsZWN0b3IpO1xuXG4gICAgaWYgKCEkZXJyb3IubGVuZ3RoKSB7XG4gICAgICAkZXJyb3IgPSAkZWwucGFyZW50KCkuZmluZCh0aGlzLm9wdGlvbnMuZm9ybUVycm9yU2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGlmIChpZCkge1xuICAgICAgJGVycm9yID0gJGVycm9yLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoYFtkYXRhLWZvcm0tZXJyb3ItZm9yPVwiJHtpZH1cIl1gKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRlcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhpcyBvcmRlcjpcbiAgICogMi4gVGhlIDxsYWJlbD4gd2l0aCB0aGUgYXR0cmlidXRlIGBbZm9yPVwic29tZUlucHV0SWRcIl1gXG4gICAqIDMuIFRoZSBgLmNsb3Nlc3QoKWAgPGxhYmVsPlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsIC0galF1ZXJ5IG9iamVjdCB0byBjaGVjayBmb3IgcmVxdWlyZWQgYXR0cmlidXRlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBCb29sZWFuIHZhbHVlIGRlcGVuZHMgb24gd2hldGhlciBvciBub3QgYXR0cmlidXRlIGlzIGNoZWNrZWQgb3IgZW1wdHlcbiAgICovXG4gIGZpbmRMYWJlbCgkZWwpIHtcbiAgICB2YXIgaWQgPSAkZWxbMF0uaWQ7XG4gICAgdmFyICRsYWJlbCA9IHRoaXMuJGVsZW1lbnQuZmluZChgbGFiZWxbZm9yPVwiJHtpZH1cIl1gKTtcblxuICAgIGlmICghJGxhYmVsLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICRlbC5jbG9zZXN0KCdsYWJlbCcpO1xuICAgIH1cblxuICAgIHJldHVybiAkbGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzZXQgb2YgbGFiZWxzIGFzc29jaWF0ZWQgd2l0aCBhIHNldCBvZiByYWRpbyBlbHMgaW4gdGhpcyBvcmRlclxuICAgKiAyLiBUaGUgPGxhYmVsPiB3aXRoIHRoZSBhdHRyaWJ1dGUgYFtmb3I9XCJzb21lSW5wdXRJZFwiXWBcbiAgICogMy4gVGhlIGAuY2xvc2VzdCgpYCA8bGFiZWw+XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIGNoZWNrIGZvciByZXF1aXJlZCBhdHRyaWJ1dGVcbiAgICogQHJldHVybnMge0Jvb2xlYW59IEJvb2xlYW4gdmFsdWUgZGVwZW5kcyBvbiB3aGV0aGVyIG9yIG5vdCBhdHRyaWJ1dGUgaXMgY2hlY2tlZCBvciBlbXB0eVxuICAgKi9cbiAgZmluZFJhZGlvTGFiZWxzKCRlbHMpIHtcbiAgICB2YXIgbGFiZWxzID0gJGVscy5tYXAoKGksIGVsKSA9PiB7XG4gICAgICB2YXIgaWQgPSBlbC5pZDtcbiAgICAgIHZhciAkbGFiZWwgPSB0aGlzLiRlbGVtZW50LmZpbmQoYGxhYmVsW2Zvcj1cIiR7aWR9XCJdYCk7XG5cbiAgICAgIGlmICghJGxhYmVsLmxlbmd0aCkge1xuICAgICAgICAkbGFiZWwgPSAkKGVsKS5jbG9zZXN0KCdsYWJlbCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRsYWJlbFswXTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkKGxhYmVscyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgQ1NTIGVycm9yIGNsYXNzIGFzIHNwZWNpZmllZCBieSB0aGUgQWJpZGUgc2V0dGluZ3MgdG8gdGhlIGxhYmVsLCBpbnB1dCwgYW5kIHRoZSBmb3JtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIGFkZCB0aGUgY2xhc3MgdG9cbiAgICovXG4gIGFkZEVycm9yQ2xhc3NlcygkZWwpIHtcbiAgICB2YXIgJGxhYmVsID0gdGhpcy5maW5kTGFiZWwoJGVsKTtcbiAgICB2YXIgJGZvcm1FcnJvciA9IHRoaXMuZmluZEZvcm1FcnJvcigkZWwpO1xuXG4gICAgaWYgKCRsYWJlbC5sZW5ndGgpIHtcbiAgICAgICRsYWJlbC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubGFiZWxFcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoJGZvcm1FcnJvci5sZW5ndGgpIHtcbiAgICAgICRmb3JtRXJyb3IuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZvcm1FcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmlucHV0RXJyb3JDbGFzcykuYXR0cih7XG4gICAgICAnZGF0YS1pbnZhbGlkJzogJycsXG4gICAgICAnYXJpYS1pbnZhbGlkJzogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgW2Zvcl0gYW5kIFtyb2xlPWFsZXJ0XSBhdHRyaWJ1dGVzIHRvIGFsbCBmb3JtIGVycm9yIHRhcmdldHRpbmcgJGVsLFxuICAgKiBhbmQgW2FyaWEtZGVzY3JpYmVkYnldIGF0dHJpYnV0ZSB0byAkZWwgdG93YXJkIHRoZSBmaXJzdCBmb3JtIGVycm9yLlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsIC0galF1ZXJ5IG9iamVjdFxuICAgKi9cbiAgYWRkQTExeUF0dHJpYnV0ZXMoJGVsKSB7XG4gICAgbGV0ICRlcnJvcnMgPSB0aGlzLmZpbmRGb3JtRXJyb3IoJGVsKTtcbiAgICBsZXQgJGxhYmVscyA9ICRlcnJvcnMuZmlsdGVyKCdsYWJlbCcpO1xuICAgIGxldCAkZXJyb3IgPSAkZXJyb3JzLmZpcnN0KCk7XG4gICAgaWYgKCEkZXJyb3JzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgLy8gU2V0IFthcmlhLWRlc2NyaWJlZGJ5XSBvbiB0aGUgaW5wdXQgdG93YXJkIHRoZSBmaXJzdCBmb3JtIGVycm9yIGlmIGl0IGlzIG5vdCBzZXRcbiAgICBpZiAodHlwZW9mICRlbC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBHZXQgdGhlIGZpcnN0IGVycm9yIElEIG9yIGNyZWF0ZSBvbmVcbiAgICAgIGxldCBlcnJvcklkID0gJGVycm9yLmF0dHIoJ2lkJyk7XG4gICAgICBpZiAodHlwZW9mIGVycm9ySWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGVycm9ySWQgPSBHZXRZb0RpZ2l0cyg2LCAnYWJpZGUtZXJyb3InKTtcbiAgICAgICAgJGVycm9yLmF0dHIoJ2lkJywgZXJyb3JJZCk7XG4gICAgICB9O1xuXG4gICAgICAkZWwuYXR0cignYXJpYS1kZXNjcmliZWRieScsIGVycm9ySWQpO1xuICAgIH1cblxuICAgIGlmICgkbGFiZWxzLmZpbHRlcignW2Zvcl0nKS5sZW5ndGggPCAkbGFiZWxzLmxlbmd0aCkge1xuICAgICAgLy8gR2V0IHRoZSBpbnB1dCBJRCBvciBjcmVhdGUgb25lXG4gICAgICBsZXQgZWxlbUlkID0gJGVsLmF0dHIoJ2lkJyk7XG4gICAgICBpZiAodHlwZW9mIGVsZW1JZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZWxlbUlkID0gR2V0WW9EaWdpdHMoNiwgJ2FiaWRlLWlucHV0Jyk7XG4gICAgICAgICRlbC5hdHRyKCdpZCcsIGVsZW1JZCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBGb3IgZWFjaCBsYWJlbCB0YXJnZXRpbmcgJGVsLCBzZXQgW2Zvcl0gaWYgaXQgaXMgbm90IHNldC5cbiAgICAgICRsYWJlbHMuZWFjaCgoaSwgbGFiZWwpID0+IHtcbiAgICAgICAgY29uc3QgJGxhYmVsID0gJChsYWJlbCk7XG4gICAgICAgIGlmICh0eXBlb2YgJGxhYmVsLmF0dHIoJ2ZvcicpID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAkbGFiZWwuYXR0cignZm9yJywgZWxlbUlkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZvciBlYWNoIGVycm9yIHRhcmdldGluZyAkZWwsIHNldCBbcm9sZT1hbGVydF0gaWYgaXQgaXMgbm90IHNldC5cbiAgICAkZXJyb3JzLmVhY2goKGksIGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCAkbGFiZWwgPSAkKGxhYmVsKTtcbiAgICAgIGlmICh0eXBlb2YgJGxhYmVsLmF0dHIoJ3JvbGUnKSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICRsYWJlbC5hdHRyKCdyb2xlJywgJ2FsZXJ0Jyk7XG4gICAgfSkuZW5kKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBbYXJpYS1saXZlXSBhdHRyaWJ1dGUgdG8gdGhlIGdpdmVuIGdsb2JhbCBmb3JtIGVycm9yICRlbC5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbCAtIGpRdWVyeSBvYmplY3QgdG8gYWRkIHRoZSBhdHRyaWJ1dGUgdG9cbiAgICovXG4gIGFkZEdsb2JhbEVycm9yQTExeUF0dHJpYnV0ZXMoJGVsKSB7XG4gICAgaWYgKHR5cGVvZiAkZWwuYXR0cignYXJpYS1saXZlJykgPT09ICd1bmRlZmluZWQnKVxuICAgICAgJGVsLmF0dHIoJ2FyaWEtbGl2ZScsIHRoaXMub3B0aW9ucy5hMTF5RXJyb3JMZXZlbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIENTUyBlcnJvciBjbGFzc2VzIGV0YyBmcm9tIGFuIGVudGlyZSByYWRpbyBidXR0b24gZ3JvdXBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGdyb3VwTmFtZSAtIEEgc3RyaW5nIHRoYXQgc3BlY2lmaWVzIHRoZSBuYW1lIG9mIGEgcmFkaW8gYnV0dG9uIGdyb3VwXG4gICAqXG4gICAqL1xuICByZW1vdmVSYWRpb0Vycm9yQ2xhc3Nlcyhncm91cE5hbWUpIHtcbiAgICB2YXIgJGVscyA9IHRoaXMuJGVsZW1lbnQuZmluZChgOnJhZGlvW25hbWU9XCIke2dyb3VwTmFtZX1cIl1gKTtcbiAgICB2YXIgJGxhYmVscyA9IHRoaXMuZmluZFJhZGlvTGFiZWxzKCRlbHMpO1xuICAgIHZhciAkZm9ybUVycm9ycyA9IHRoaXMuZmluZEZvcm1FcnJvcigkZWxzKTtcblxuICAgIGlmICgkbGFiZWxzLmxlbmd0aCkge1xuICAgICAgJGxhYmVscy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubGFiZWxFcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoJGZvcm1FcnJvcnMubGVuZ3RoKSB7XG4gICAgICAkZm9ybUVycm9ycy5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZm9ybUVycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgICRlbHMucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmlucHV0RXJyb3JDbGFzcykuYXR0cih7XG4gICAgICAnZGF0YS1pbnZhbGlkJzogbnVsbCxcbiAgICAgICdhcmlhLWludmFsaWQnOiBudWxsXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIENTUyBlcnJvciBjbGFzcyBhcyBzcGVjaWZpZWQgYnkgdGhlIEFiaWRlIHNldHRpbmdzIGZyb20gdGhlIGxhYmVsLCBpbnB1dCwgYW5kIHRoZSBmb3JtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkZWwgLSBqUXVlcnkgb2JqZWN0IHRvIHJlbW92ZSB0aGUgY2xhc3MgZnJvbVxuICAgKi9cbiAgcmVtb3ZlRXJyb3JDbGFzc2VzKCRlbCkge1xuICAgIC8vIHJhZGlvcyBuZWVkIHRvIGNsZWFyIGFsbCBvZiB0aGUgZWxzXG4gICAgaWYoJGVsWzBdLnR5cGUgPT0gJ3JhZGlvJykge1xuICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlUmFkaW9FcnJvckNsYXNzZXMoJGVsLmF0dHIoJ25hbWUnKSk7XG4gICAgfVxuXG4gICAgdmFyICRsYWJlbCA9IHRoaXMuZmluZExhYmVsKCRlbCk7XG4gICAgdmFyICRmb3JtRXJyb3IgPSB0aGlzLmZpbmRGb3JtRXJyb3IoJGVsKTtcblxuICAgIGlmICgkbGFiZWwubGVuZ3RoKSB7XG4gICAgICAkbGFiZWwucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxhYmVsRXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCRmb3JtRXJyb3IubGVuZ3RoKSB7XG4gICAgICAkZm9ybUVycm9yLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mb3JtRXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgJGVsLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5pbnB1dEVycm9yQ2xhc3MpLmF0dHIoe1xuICAgICAgJ2RhdGEtaW52YWxpZCc6IG51bGwsXG4gICAgICAnYXJpYS1pbnZhbGlkJzogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdvZXMgdGhyb3VnaCBhIGZvcm0gdG8gZmluZCBpbnB1dHMgYW5kIHByb2NlZWRzIHRvIHZhbGlkYXRlIHRoZW0gaW4gd2F5cyBzcGVjaWZpYyB0byB0aGVpciB0eXBlLlxuICAgKiBJZ25vcmVzIGlucHV0cyB3aXRoIGRhdGEtYWJpZGUtaWdub3JlLCB0eXBlPVwiaGlkZGVuXCIgb3IgZGlzYWJsZWQgYXR0cmlidXRlcyBzZXRcbiAgICogQGZpcmVzIEFiaWRlI2ludmFsaWRcbiAgICogQGZpcmVzIEFiaWRlI3ZhbGlkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0galF1ZXJ5IG9iamVjdCB0byB2YWxpZGF0ZSwgc2hvdWxkIGJlIGFuIEhUTUwgaW5wdXRcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGdvb2RUb0dvIC0gSWYgdGhlIGlucHV0IGlzIHZhbGlkIG9yIG5vdC5cbiAgICovXG4gIHZhbGlkYXRlSW5wdXQoJGVsKSB7XG4gICAgdmFyIGNsZWFyUmVxdWlyZSA9IHRoaXMucmVxdWlyZWRDaGVjaygkZWwpLFxuICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgY3VzdG9tVmFsaWRhdG9yID0gdHJ1ZSxcbiAgICAgICAgdmFsaWRhdG9yID0gJGVsLmF0dHIoJ2RhdGEtdmFsaWRhdG9yJyksXG4gICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuXG4gICAgLy8gZG9uJ3QgdmFsaWRhdGUgaWdub3JlZCBpbnB1dHMgb3IgaGlkZGVuIGlucHV0cyBvciBkaXNhYmxlZCBpbnB1dHNcbiAgICBpZiAoJGVsLmlzKCdbZGF0YS1hYmlkZS1pZ25vcmVdJykgfHwgJGVsLmlzKCdbdHlwZT1cImhpZGRlblwiXScpIHx8ICRlbC5pcygnW2Rpc2FibGVkXScpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKCRlbFswXS50eXBlKSB7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHZhbGlkYXRlZCA9IHRoaXMudmFsaWRhdGVSYWRpbygkZWwuYXR0cignbmFtZScpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgdmFsaWRhdGVkID0gY2xlYXJSZXF1aXJlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgIGNhc2UgJ3NlbGVjdC1vbmUnOlxuICAgICAgY2FzZSAnc2VsZWN0LW11bHRpcGxlJzpcbiAgICAgICAgdmFsaWRhdGVkID0gY2xlYXJSZXF1aXJlO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFsaWRhdGVkID0gdGhpcy52YWxpZGF0ZVRleHQoJGVsKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBjdXN0b21WYWxpZGF0b3IgPSB0aGlzLm1hdGNoVmFsaWRhdGlvbigkZWwsIHZhbGlkYXRvciwgJGVsLmF0dHIoJ3JlcXVpcmVkJykpO1xuICAgIH1cblxuICAgIGlmICgkZWwuYXR0cignZGF0YS1lcXVhbHRvJykpIHtcbiAgICAgIGVxdWFsVG8gPSB0aGlzLm9wdGlvbnMudmFsaWRhdG9ycy5lcXVhbFRvKCRlbCk7XG4gICAgfVxuXG5cbiAgICB2YXIgZ29vZFRvR28gPSBbY2xlYXJSZXF1aXJlLCB2YWxpZGF0ZWQsIGN1c3RvbVZhbGlkYXRvciwgZXF1YWxUb10uaW5kZXhPZihmYWxzZSkgPT09IC0xO1xuICAgIHZhciBtZXNzYWdlID0gKGdvb2RUb0dvID8gJ3ZhbGlkJyA6ICdpbnZhbGlkJykgKyAnLnpmLmFiaWRlJztcblxuICAgIGlmIChnb29kVG9Hbykge1xuICAgICAgLy8gUmUtdmFsaWRhdGUgaW5wdXRzIHRoYXQgZGVwZW5kIG9uIHRoaXMgb25lIHdpdGggZXF1YWx0b1xuICAgICAgY29uc3QgZGVwZW5kZW50RWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmZpbmQoYFtkYXRhLWVxdWFsdG89XCIkeyRlbC5hdHRyKCdpZCcpfVwiXWApO1xuICAgICAgaWYgKGRlcGVuZGVudEVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgICAgICBkZXBlbmRlbnRFbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XG4gICAgICAgICAgICBfdGhpcy52YWxpZGF0ZUlucHV0KCQodGhpcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpc1tnb29kVG9HbyA/ICdyZW1vdmVFcnJvckNsYXNzZXMnIDogJ2FkZEVycm9yQ2xhc3NlcyddKCRlbCk7XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBpbnB1dCBpcyBkb25lIGNoZWNraW5nIGZvciB2YWxpZGF0aW9uLiBFdmVudCB0cmlnZ2VyIGlzIGVpdGhlciBgdmFsaWQuemYuYWJpZGVgIG9yIGBpbnZhbGlkLnpmLmFiaWRlYFxuICAgICAqIFRyaWdnZXIgaW5jbHVkZXMgdGhlIERPTSBlbGVtZW50IG9mIHRoZSBpbnB1dC5cbiAgICAgKiBAZXZlbnQgQWJpZGUjdmFsaWRcbiAgICAgKiBAZXZlbnQgQWJpZGUjaW52YWxpZFxuICAgICAqL1xuICAgICRlbC50cmlnZ2VyKG1lc3NhZ2UsIFskZWxdKTtcblxuICAgIHJldHVybiBnb29kVG9HbztcbiAgfVxuXG4gIC8qKlxuICAgKiBHb2VzIHRocm91Z2ggYSBmb3JtIGFuZCBpZiB0aGVyZSBhcmUgYW55IGludmFsaWQgaW5wdXRzLCBpdCB3aWxsIGRpc3BsYXkgdGhlIGZvcm0gZXJyb3IgZWxlbWVudFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gbm9FcnJvciAtIHRydWUgaWYgbm8gZXJyb3JzIHdlcmUgZGV0ZWN0ZWQuLi5cbiAgICogQGZpcmVzIEFiaWRlI2Zvcm12YWxpZFxuICAgKiBAZmlyZXMgQWJpZGUjZm9ybWludmFsaWRcbiAgICovXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICB2YXIgYWNjID0gW107XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuJGlucHV0cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgYWNjLnB1c2goX3RoaXMudmFsaWRhdGVJbnB1dCgkKHRoaXMpKSk7XG4gICAgfSk7XG5cbiAgICB2YXIgbm9FcnJvciA9IGFjYy5pbmRleE9mKGZhbHNlKSA9PT0gLTE7XG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJ1tkYXRhLWFiaWRlLWVycm9yXScpLmVhY2goKGksIGVsZW0pID0+IHtcbiAgICAgIGNvbnN0ICRlbGVtID0gJChlbGVtKTtcbiAgICAgIC8vIEVuc3VyZSBhMTF5IGF0dHJpYnV0ZXMgYXJlIHNldFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hMTF5QXR0cmlidXRlcykgdGhpcy5hZGRHbG9iYWxFcnJvckExMXlBdHRyaWJ1dGVzKCRlbGVtKTtcbiAgICAgIC8vIFNob3cgb3IgaGlkZSB0aGUgZXJyb3JcbiAgICAgICRlbGVtLmNzcygnZGlzcGxheScsIChub0Vycm9yID8gJ25vbmUnIDogJ2Jsb2NrJykpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgZm9ybSBpcyBmaW5pc2hlZCB2YWxpZGF0aW5nLiBFdmVudCB0cmlnZ2VyIGlzIGVpdGhlciBgZm9ybXZhbGlkLnpmLmFiaWRlYCBvciBgZm9ybWludmFsaWQuemYuYWJpZGVgLlxuICAgICAqIFRyaWdnZXIgaW5jbHVkZXMgdGhlIGVsZW1lbnQgb2YgdGhlIGZvcm0uXG4gICAgICogQGV2ZW50IEFiaWRlI2Zvcm12YWxpZFxuICAgICAqIEBldmVudCBBYmlkZSNmb3JtaW52YWxpZFxuICAgICAqL1xuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcigobm9FcnJvciA/ICdmb3JtdmFsaWQnIDogJ2Zvcm1pbnZhbGlkJykgKyAnLnpmLmFiaWRlJywgW3RoaXMuJGVsZW1lbnRdKTtcblxuICAgIHJldHVybiBub0Vycm9yO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBhIG5vdCBhIHRleHQgaW5wdXQgaXMgdmFsaWQgYmFzZWQgb24gdGhlIHBhdHRlcm4gc3BlY2lmaWVkIGluIHRoZSBhdHRyaWJ1dGUuIElmIG5vIG1hdGNoaW5nIHBhdHRlcm4gaXMgZm91bmQsIHJldHVybnMgdHJ1ZS5cbiAgICogQHBhcmFtIHtPYmplY3R9ICRlbCAtIGpRdWVyeSBvYmplY3QgdG8gdmFsaWRhdGUsIHNob3VsZCBiZSBhIHRleHQgaW5wdXQgSFRNTCBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXR0ZXJuIC0gc3RyaW5nIHZhbHVlIG9mIG9uZSBvZiB0aGUgUmVnRXggcGF0dGVybnMgaW4gQWJpZGUub3B0aW9ucy5wYXR0ZXJuc1xuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gQm9vbGVhbiB2YWx1ZSBkZXBlbmRzIG9uIHdoZXRoZXIgb3Igbm90IHRoZSBpbnB1dCB2YWx1ZSBtYXRjaGVzIHRoZSBwYXR0ZXJuIHNwZWNpZmllZFxuICAgKi9cbiAgdmFsaWRhdGVUZXh0KCRlbCwgcGF0dGVybikge1xuICAgIC8vIEEgcGF0dGVybiBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgYmUgaW5mZXJlZCBmcm9tIHRoZSBpbnB1dCdzIFwicGF0dGVyblwiIGF0dHJpYnV0ZSwgb3IgaXQncyBcInR5cGVcIiBhdHRyaWJ1dGVcbiAgICBwYXR0ZXJuID0gKHBhdHRlcm4gfHwgJGVsLmF0dHIoJ3BhdHRlcm4nKSB8fCAkZWwuYXR0cigndHlwZScpKTtcbiAgICB2YXIgaW5wdXRUZXh0ID0gJGVsLnZhbCgpO1xuICAgIHZhciB2YWxpZCA9IGZhbHNlO1xuXG4gICAgaWYgKGlucHV0VGV4dC5sZW5ndGgpIHtcbiAgICAgIC8vIElmIHRoZSBwYXR0ZXJuIGF0dHJpYnV0ZSBvbiB0aGUgZWxlbWVudCBpcyBpbiBBYmlkZSdzIGxpc3Qgb2YgcGF0dGVybnMsIHRoZW4gdGVzdCB0aGF0IHJlZ2V4cFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXR0ZXJucy5oYXNPd25Qcm9wZXJ0eShwYXR0ZXJuKSkge1xuICAgICAgICB2YWxpZCA9IHRoaXMub3B0aW9ucy5wYXR0ZXJuc1twYXR0ZXJuXS50ZXN0KGlucHV0VGV4dCk7XG4gICAgICB9XG4gICAgICAvLyBJZiB0aGUgcGF0dGVybiBuYW1lIGlzbid0IGFsc28gdGhlIHR5cGUgYXR0cmlidXRlIG9mIHRoZSBmaWVsZCwgdGhlbiB0ZXN0IGl0IGFzIGEgcmVnZXhwXG4gICAgICBlbHNlIGlmIChwYXR0ZXJuICE9PSAkZWwuYXR0cigndHlwZScpKSB7XG4gICAgICAgIHZhbGlkID0gbmV3IFJlZ0V4cChwYXR0ZXJuKS50ZXN0KGlucHV0VGV4dCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBbiBlbXB0eSBmaWVsZCBpcyB2YWxpZCBpZiBpdCdzIG5vdCByZXF1aXJlZFxuICAgIGVsc2UgaWYgKCEkZWwucHJvcCgncmVxdWlyZWQnKSkge1xuICAgICAgdmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZDtcbiAgIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIGEgbm90IGEgcmFkaW8gaW5wdXQgaXMgdmFsaWQgYmFzZWQgb24gd2hldGhlciBvciBub3QgaXQgaXMgcmVxdWlyZWQgYW5kIHNlbGVjdGVkLiBBbHRob3VnaCB0aGUgZnVuY3Rpb24gdGFyZ2V0cyBhIHNpbmdsZSBgPGlucHV0PmAsIGl0IHZhbGlkYXRlcyBieSBjaGVja2luZyB0aGUgYHJlcXVpcmVkYCBhbmQgYGNoZWNrZWRgIHByb3BlcnRpZXMgb2YgYWxsIHJhZGlvIGJ1dHRvbnMgaW4gaXRzIGdyb3VwLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZ3JvdXBOYW1lIC0gQSBzdHJpbmcgdGhhdCBzcGVjaWZpZXMgdGhlIG5hbWUgb2YgYSByYWRpbyBidXR0b24gZ3JvdXBcbiAgICogQHJldHVybnMge0Jvb2xlYW59IEJvb2xlYW4gdmFsdWUgZGVwZW5kcyBvbiB3aGV0aGVyIG9yIG5vdCBhdCBsZWFzdCBvbmUgcmFkaW8gaW5wdXQgaGFzIGJlZW4gc2VsZWN0ZWQgKGlmIGl0J3MgcmVxdWlyZWQpXG4gICAqL1xuICB2YWxpZGF0ZVJhZGlvKGdyb3VwTmFtZSkge1xuICAgIC8vIElmIGF0IGxlYXN0IG9uZSByYWRpbyBpbiB0aGUgZ3JvdXAgaGFzIHRoZSBgcmVxdWlyZWRgIGF0dHJpYnV0ZSwgdGhlIGdyb3VwIGlzIGNvbnNpZGVyZWQgcmVxdWlyZWRcbiAgICAvLyBQZXIgVzNDIHNwZWMsIGFsbCByYWRpbyBidXR0b25zIGluIGEgZ3JvdXAgc2hvdWxkIGhhdmUgYHJlcXVpcmVkYCwgYnV0IHdlJ3JlIGJlaW5nIG5pY2VcbiAgICB2YXIgJGdyb3VwID0gdGhpcy4kZWxlbWVudC5maW5kKGA6cmFkaW9bbmFtZT1cIiR7Z3JvdXBOYW1lfVwiXWApO1xuICAgIHZhciB2YWxpZCA9IGZhbHNlLCByZXF1aXJlZCA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIHRoZSBncm91cCB0byBiZSByZXF1aXJlZCwgYXQgbGVhc3Qgb25lIHJhZGlvIG5lZWRzIHRvIGJlIHJlcXVpcmVkXG4gICAgJGdyb3VwLmVhY2goKGksIGUpID0+IHtcbiAgICAgIGlmICgkKGUpLmF0dHIoJ3JlcXVpcmVkJykpIHtcbiAgICAgICAgcmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKCFyZXF1aXJlZCkgdmFsaWQ9dHJ1ZTtcblxuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIC8vIEZvciB0aGUgZ3JvdXAgdG8gYmUgdmFsaWQsIGF0IGxlYXN0IG9uZSByYWRpbyBuZWVkcyB0byBiZSBjaGVja2VkXG4gICAgICAkZ3JvdXAuZWFjaCgoaSwgZSkgPT4ge1xuICAgICAgICBpZiAoJChlKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBhIHNlbGVjdGVkIGlucHV0IHBhc3NlcyBhIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9uLiBNdWx0aXBsZSB2YWxpZGF0aW9ucyBjYW4gYmUgdXNlZCwgaWYgcGFzc2VkIHRvIHRoZSBlbGVtZW50IHdpdGggYGRhdGEtdmFsaWRhdG9yPVwiZm9vIGJhciBiYXpcImAgaW4gYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdGVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gJGVsIC0galF1ZXJ5IGlucHV0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWxpZGF0b3JzIC0gYSBzdHJpbmcgb2YgZnVuY3Rpb24gbmFtZXMgbWF0Y2hpbmcgZnVuY3Rpb25zIGluIHRoZSBBYmlkZS5vcHRpb25zLnZhbGlkYXRvcnMgb2JqZWN0LlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlcXVpcmVkIC0gc2VsZiBleHBsYW5hdG9yeT9cbiAgICogQHJldHVybnMge0Jvb2xlYW59IC0gdHJ1ZSBpZiB2YWxpZGF0aW9ucyBwYXNzZWQuXG4gICAqL1xuICBtYXRjaFZhbGlkYXRpb24oJGVsLCB2YWxpZGF0b3JzLCByZXF1aXJlZCkge1xuICAgIHJlcXVpcmVkID0gcmVxdWlyZWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgICB2YXIgY2xlYXIgPSB2YWxpZGF0b3JzLnNwbGl0KCcgJykubWFwKCh2KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhbGlkYXRvcnNbdl0oJGVsLCByZXF1aXJlZCwgJGVsLnBhcmVudCgpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2xlYXIuaW5kZXhPZihmYWxzZSkgPT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyBmb3JtIGlucHV0cyBhbmQgc3R5bGVzXG4gICAqIEBmaXJlcyBBYmlkZSNmb3JtcmVzZXRcbiAgICovXG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB2YXIgJGZvcm0gPSB0aGlzLiRlbGVtZW50LFxuICAgICAgICBvcHRzID0gdGhpcy5vcHRpb25zO1xuXG4gICAgJChgLiR7b3B0cy5sYWJlbEVycm9yQ2xhc3N9YCwgJGZvcm0pLm5vdCgnc21hbGwnKS5yZW1vdmVDbGFzcyhvcHRzLmxhYmVsRXJyb3JDbGFzcyk7XG4gICAgJChgLiR7b3B0cy5pbnB1dEVycm9yQ2xhc3N9YCwgJGZvcm0pLm5vdCgnc21hbGwnKS5yZW1vdmVDbGFzcyhvcHRzLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgJChgJHtvcHRzLmZvcm1FcnJvclNlbGVjdG9yfS4ke29wdHMuZm9ybUVycm9yQ2xhc3N9YCkucmVtb3ZlQ2xhc3Mob3B0cy5mb3JtRXJyb3JDbGFzcyk7XG4gICAgJGZvcm0uZmluZCgnW2RhdGEtYWJpZGUtZXJyb3JdJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAkKCc6aW5wdXQnLCAkZm9ybSkubm90KCc6YnV0dG9uLCA6c3VibWl0LCA6cmVzZXQsIDpoaWRkZW4sIDpyYWRpbywgOmNoZWNrYm94LCBbZGF0YS1hYmlkZS1pZ25vcmVdJykudmFsKCcnKS5hdHRyKHtcbiAgICAgICdkYXRhLWludmFsaWQnOiBudWxsLFxuICAgICAgJ2FyaWEtaW52YWxpZCc6IG51bGxcbiAgICB9KTtcbiAgICAkKCc6aW5wdXQ6cmFkaW8nLCAkZm9ybSkubm90KCdbZGF0YS1hYmlkZS1pZ25vcmVdJykucHJvcCgnY2hlY2tlZCcsZmFsc2UpLmF0dHIoe1xuICAgICAgJ2RhdGEtaW52YWxpZCc6IG51bGwsXG4gICAgICAnYXJpYS1pbnZhbGlkJzogbnVsbFxuICAgIH0pO1xuICAgICQoJzppbnB1dDpjaGVja2JveCcsICRmb3JtKS5ub3QoJ1tkYXRhLWFiaWRlLWlnbm9yZV0nKS5wcm9wKCdjaGVja2VkJyxmYWxzZSkuYXR0cih7XG4gICAgICAnZGF0YS1pbnZhbGlkJzogbnVsbCxcbiAgICAgICdhcmlhLWludmFsaWQnOiBudWxsXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRmlyZXMgd2hlbiB0aGUgZm9ybSBoYXMgYmVlbiByZXNldC5cbiAgICAgKiBAZXZlbnQgQWJpZGUjZm9ybXJlc2V0XG4gICAgICovXG4gICAgJGZvcm0udHJpZ2dlcignZm9ybXJlc2V0LnpmLmFiaWRlJywgWyRmb3JtXSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveXMgYW4gaW5zdGFuY2Ugb2YgQWJpZGUuXG4gICAqIFJlbW92ZXMgZXJyb3Igc3R5bGVzIGFuZCBjbGFzc2VzIGZyb20gZWxlbWVudHMsIHdpdGhvdXQgcmVzZXR0aW5nIHRoZWlyIHZhbHVlcy5cbiAgICovXG4gIF9kZXN0cm95KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLm9mZignLmFiaWRlJylcbiAgICAgIC5maW5kKCdbZGF0YS1hYmlkZS1lcnJvcl0nKVxuICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuICAgIHRoaXMuJGlucHV0c1xuICAgICAgLm9mZignLmFiaWRlJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5yZW1vdmVFcnJvckNsYXNzZXMoJCh0aGlzKSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIERlZmF1bHQgc2V0dGluZ3MgZm9yIHBsdWdpblxuICovXG5BYmlkZS5kZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGV2ZW50IHRvIHZhbGlkYXRlIGlucHV0cy4gQ2hlY2tib3hlcyBhbmQgcmFkaW9zIHZhbGlkYXRlIGltbWVkaWF0ZWx5LlxuICAgKiBSZW1vdmUgb3IgY2hhbmdlIHRoaXMgdmFsdWUgZm9yIG1hbnVhbCB2YWxpZGF0aW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHs/c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnZmllbGRDaGFuZ2UnXG4gICAqL1xuICB2YWxpZGF0ZU9uOiAnZmllbGRDaGFuZ2UnLFxuXG4gIC8qKlxuICAgKiBDbGFzcyB0byBiZSBhcHBsaWVkIHRvIGlucHV0IGxhYmVscyBvbiBmYWlsZWQgdmFsaWRhdGlvbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnaXMtaW52YWxpZC1sYWJlbCdcbiAgICovXG4gIGxhYmVsRXJyb3JDbGFzczogJ2lzLWludmFsaWQtbGFiZWwnLFxuXG4gIC8qKlxuICAgKiBDbGFzcyB0byBiZSBhcHBsaWVkIHRvIGlucHV0cyBvbiBmYWlsZWQgdmFsaWRhdGlvbi5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnaXMtaW52YWxpZC1pbnB1dCdcbiAgICovXG4gIGlucHV0RXJyb3JDbGFzczogJ2lzLWludmFsaWQtaW5wdXQnLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBzZWxlY3RvciB0byB1c2UgdG8gdGFyZ2V0IEZvcm0gRXJyb3JzIGZvciBzaG93L2hpZGUuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQGRlZmF1bHQgJy5mb3JtLWVycm9yJ1xuICAgKi9cbiAgZm9ybUVycm9yU2VsZWN0b3I6ICcuZm9ybS1lcnJvcicsXG5cbiAgLyoqXG4gICAqIENsYXNzIGFkZGVkIHRvIEZvcm0gRXJyb3JzIG9uIGZhaWxlZCB2YWxpZGF0aW9uLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBkZWZhdWx0ICdpcy12aXNpYmxlJ1xuICAgKi9cbiAgZm9ybUVycm9yQ2xhc3M6ICdpcy12aXNpYmxlJyxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgYXV0b21hdGljYWxseSBpbnNlcnQgd2hlbiBwb3NzaWJsZTpcbiAgICogLSBgW2FyaWEtZGVzY3JpYmVkYnldYCBvbiBmaWVsZHNcbiAgICogLSBgW3JvbGU9YWxlcnRdYCBvbiBmb3JtIGVycm9ycyBhbmQgYFtmb3JdYCBvbiBmb3JtIGVycm9yIGxhYmVsc1xuICAgKiAtIGBbYXJpYS1saXZlXWAgb24gZ2xvYmFsIGVycm9ycyBgW2RhdGEtYWJpZGUtZXJyb3JdYCAoc2VlIG9wdGlvbiBgYTExeUVycm9yTGV2ZWxgKS5cbiAgICogQG9wdGlvblxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYTExeUF0dHJpYnV0ZXM6IHRydWUsXG5cbiAgLyoqXG4gICAqIFthcmlhLWxpdmVdIGF0dHJpYnV0ZSB2YWx1ZSB0byBiZSBhcHBsaWVkIG9uIGdsb2JhbCBlcnJvcnMgYFtkYXRhLWFiaWRlLWVycm9yXWAuXG4gICAqIE9wdGlvbnMgYXJlOiAnYXNzZXJ0aXZlJywgJ3BvbGl0ZScgYW5kICdvZmYnL251bGxcbiAgICogQG9wdGlvblxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FjY2Vzc2liaWxpdHkvQVJJQS9BUklBX0xpdmVfUmVnaW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAZGVmYXVsdCAnYXNzZXJ0aXZlJ1xuICAgKi9cbiAgYTExeUVycm9yTGV2ZWw6ICdhc3NlcnRpdmUnLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byB2YWxpZGF0ZSB0ZXh0IGlucHV0cyBvbiBhbnkgdmFsdWUgY2hhbmdlLlxuICAgKiBAb3B0aW9uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlOiBmYWxzZSxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gdmFsaWRhdGUgaW5wdXRzIG9uIGJsdXIuXG4gICAqIEBvcHRpb25cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICB2YWxpZGF0ZU9uQmx1cjogZmFsc2UsXG5cbiAgcGF0dGVybnM6IHtcbiAgICBhbHBoYSA6IC9eW2EtekEtWl0rJC8sXG4gICAgYWxwaGFfbnVtZXJpYyA6IC9eW2EtekEtWjAtOV0rJC8sXG4gICAgaW50ZWdlciA6IC9eWy0rXT9cXGQrJC8sXG4gICAgbnVtYmVyIDogL15bLStdP1xcZCooPzpbXFwuXFwsXVxcZCspPyQvLFxuXG4gICAgLy8gYW1leCwgdmlzYSwgZGluZXJzXG4gICAgY2FyZCA6IC9eKD86NFswLTldezEyfSg/OlswLTldezN9KT98NVsxLTVdWzAtOV17MTR9fCg/OjIyMlsxLTldfDJbMy02XVswLTldezJ9fDI3WzAtMV1bMC05XXwyNzIwKVswLTldezEyfXw2KD86MDExfDVbMC05XVswLTldKVswLTldezEyfXwzWzQ3XVswLTldezEzfXwzKD86MFswLTVdfFs2OF1bMC05XSlbMC05XXsxMX18KD86MjEzMXwxODAwfDM1XFxkezN9KVxcZHsxMX0pJC8sXG4gICAgY3Z2IDogL14oWzAtOV0pezMsNH0kLyxcblxuICAgIC8vIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL3N0YXRlcy1vZi10aGUtdHlwZS1hdHRyaWJ1dGUuaHRtbCN2YWxpZC1lLW1haWwtYWRkcmVzc1xuICAgIGVtYWlsIDogL15bYS16QS1aMC05LiEjJCUmJyorXFwvPT9eX2B7fH1+LV0rQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykrJC8sXG5cbiAgICAvLyBGcm9tIENvbW1vblJlZ2V4SlMgKEB0YWx5c3Nvbm9jKVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YWx5c3Nvbm9jL0NvbW1vblJlZ2V4SlMvYmxvYi9lMjkwMWI5ZjU3MjIyYmMxNDA2OWRjOGYwNTk4ZDVmNDEyNTU1NDExL2xpYi9jb21tb25yZWdleC5qcyNMNzZcbiAgICAvLyBGb3IgbW9yZSByZXN0cmljdGl2ZSBVUkwgUmVnZXhzLCBzZWUgaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL2RlbW8vdXJsLXJlZ2V4LlxuICAgIHVybDogL14oKD86KGh0dHBzP3xmdHBzP3xmaWxlfHNzaHxzZnRwKTpcXC9cXC98d3d3XFxkezAsM31bLl18W2EtejAtOS5cXC1dK1suXVthLXpdezIsNH1cXC8pKD86W15cXHMoKTw+XSt8XFwoKD86W15cXHMoKTw+XSt8KD86XFwoW15cXHMoKTw+XStcXCkpKSpcXCkpKyg/OlxcKCg/OlteXFxzKCk8Pl0rfCg/OlxcKFteXFxzKCk8Pl0rXFwpKSkqXFwpfFteXFxzYCEoKVxcW1xcXXt9OzpcXCdcIi4sPD4/XFx4YWJcXHhiYlxcdTIwMWNcXHUyMDFkXFx1MjAxOFxcdTIwMTldKSkkLyxcblxuICAgIC8vIGFiYy5kZVxuICAgIGRvbWFpbiA6IC9eKFthLXpBLVowLTldKFthLXpBLVowLTlcXC1dezAsNjF9W2EtekEtWjAtOV0pP1xcLikrW2EtekEtWl17Miw4fSQvLFxuXG4gICAgZGF0ZXRpbWUgOiAvXihbMC0yXVswLTldezN9KVxcLShbMC0xXVswLTldKVxcLShbMC0zXVswLTldKVQoWzAtNV1bMC05XSlcXDooWzAtNV1bMC05XSlcXDooWzAtNV1bMC05XSkoWnwoW1xcLVxcK10oWzAtMV1bMC05XSlcXDowMCkpJC8sXG4gICAgLy8gWVlZWS1NTS1ERFxuICAgIGRhdGUgOiAvKD86MTl8MjApWzAtOV17Mn0tKD86KD86MFsxLTldfDFbMC0yXSktKD86MFsxLTldfDFbMC05XXwyWzAtOV0pfCg/Oig/ITAyKSg/OjBbMS05XXwxWzAtMl0pLSg/OjMwKSl8KD86KD86MFsxMzU3OF18MVswMl0pLTMxKSkkLyxcbiAgICAvLyBISDpNTTpTU1xuICAgIHRpbWUgOiAvXigwWzAtOV18MVswLTldfDJbMC0zXSkoOlswLTVdWzAtOV0pezJ9JC8sXG4gICAgZGF0ZUlTTyA6IC9eXFxkezR9W1xcL1xcLV1cXGR7MSwyfVtcXC9cXC1dXFxkezEsMn0kLyxcbiAgICAvLyBNTS9ERC9ZWVlZXG4gICAgbW9udGhfZGF5X3llYXIgOiAvXigwWzEtOV18MVswMTJdKVstIFxcLy5dKDBbMS05XXxbMTJdWzAtOV18M1swMV0pWy0gXFwvLl1cXGR7NH0kLyxcbiAgICAvLyBERC9NTS9ZWVlZXG4gICAgZGF5X21vbnRoX3llYXIgOiAvXigwWzEtOV18WzEyXVswLTldfDNbMDFdKVstIFxcLy5dKDBbMS05XXwxWzAxMl0pWy0gXFwvLl1cXGR7NH0kLyxcblxuICAgIC8vICNGRkYgb3IgI0ZGRkZGRlxuICAgIGNvbG9yIDogL14jPyhbYS1mQS1GMC05XXs2fXxbYS1mQS1GMC05XXszfSkkLyxcblxuICAgIC8vIERvbWFpbiB8fCBVUkxcbiAgICB3ZWJzaXRlOiB7XG4gICAgICB0ZXN0OiAodGV4dCkgPT4ge1xuICAgICAgICByZXR1cm4gQWJpZGUuZGVmYXVsdHMucGF0dGVybnNbJ2RvbWFpbiddLnRlc3QodGV4dCkgfHwgQWJpZGUuZGVmYXVsdHMucGF0dGVybnNbJ3VybCddLnRlc3QodGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCB2YWxpZGF0aW9uIGZ1bmN0aW9ucyB0byBiZSB1c2VkLiBgZXF1YWxUb2AgYmVpbmcgdGhlIG9ubHkgZGVmYXVsdCBpbmNsdWRlZCBmdW5jdGlvbi5cbiAgICogRnVuY3Rpb25zIHNob3VsZCByZXR1cm4gb25seSBhIGJvb2xlYW4gaWYgdGhlIGlucHV0IGlzIHZhbGlkIG9yIG5vdC4gRnVuY3Rpb25zIGFyZSBnaXZlbiB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czpcbiAgICogZWwgOiBUaGUgalF1ZXJ5IGVsZW1lbnQgdG8gdmFsaWRhdGUuXG4gICAqIHJlcXVpcmVkIDogQm9vbGVhbiB2YWx1ZSBvZiB0aGUgcmVxdWlyZWQgYXR0cmlidXRlIGJlIHByZXNlbnQgb3Igbm90LlxuICAgKiBwYXJlbnQgOiBUaGUgZGlyZWN0IHBhcmVudCBvZiB0aGUgaW5wdXQuXG4gICAqIEBvcHRpb25cbiAgICovXG4gIHZhbGlkYXRvcnM6IHtcbiAgICBlcXVhbFRvOiBmdW5jdGlvbiAoZWwsIHJlcXVpcmVkLCBwYXJlbnQpIHtcbiAgICAgIHJldHVybiAkKGAjJHtlbC5hdHRyKCdkYXRhLWVxdWFsdG8nKX1gKS52YWwoKSA9PT0gZWwudmFsKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7QWJpZGV9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdfQ==
