!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("./foundation.core"),require("jquery")):"function"==typeof define&&define.amd?define(["./foundation.core","jquery"],e):"object"==typeof exports?exports["foundation.abide"]=e(require("./foundation.core"),require("jquery")):(t.__FOUNDATION_EXTERNAL__=t.__FOUNDATION_EXTERNAL__||{},t.__FOUNDATION_EXTERNAL__["foundation.abide"]=e(t.__FOUNDATION_EXTERNAL__["foundation.core"],t.jQuery))}(window,function(i,r){return function(i){var r={};function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}return a.m=i,a.c=r,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}({"./foundation.core":function(t,e){t.exports=i},"./js/entries/plugins/foundation.abide.js":function(t,e,i){"use strict";i.r(e);var r=i("./foundation.core");i.d(e,"Foundation",function(){return r.Foundation});var a=i("./js/foundation.abide.js");i.d(e,"Abide",function(){return a.Abide}),r.Foundation.plugin(a.Abide,"Abide")},"./js/foundation.abide.js":function(t,e,i){"use strict";i.r(e),i.d(e,"Abide",function(){return f});var r=i("jquery"),d=i.n(r),o=i("./foundation.core");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),s(this,l(i).apply(this,arguments))}var e,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(i,o["Plugin"]),e=i,(r=[{key:"_setup",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.$element=t,this.options=d.a.extend(!0,{},i.defaults,this.$element.data(),e),this.isEnabled=!0,this.formnovalidate=null,this.className="Abide",this._init()}},{key:"_init",value:function(){var i=this;this.$inputs=d.a.merge(this.$element.find("input").not('[type="submit"]'),this.$element.find("textarea, select")),this.$submits=this.$element.find('[type="submit"]');var t=this.$element.find("[data-abide-error]");this.options.a11yAttributes&&(this.$inputs.each(function(t,e){return i.addA11yAttributes(d()(e))}),t.each(function(t,e){return i.addGlobalErrorA11yAttributes(d()(e))})),this._events()}},{key:"_events",value:function(){var e=this;this.$element.off(".abide").on("reset.zf.abide",function(){e.resetForm()}).on("submit.zf.abide",function(){return e.validateForm()}),this.$submits.off("click.zf.abide keydown.zf.abide").on("click.zf.abide keydown.zf.abide",function(t){t.key&&" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),e.formnovalidate=null!==t.target.getAttribute("formnovalidate"),e.$element.submit())}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(t){e.validateInput(d()(t.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(t){e.validateInput(d()(t.target))}),this.options.validateOnBlur&&this.$inputs.off("blur.zf.abide").on("blur.zf.abide",function(t){e.validateInput(d()(t.target))})}},{key:"_reflow",value:function(){this._init()}},{key:"_validationIsDisabled",value:function(){return!1===this.isEnabled||("boolean"==typeof this.formnovalidate?this.formnovalidate:!!this.$submits.length&&null!==this.$submits[0].getAttribute("formnovalidate"))}},{key:"enableValidation",value:function(){this.isEnabled=!0}},{key:"disableValidation",value:function(){this.isEnabled=!1}},{key:"requiredCheck",value:function(t){if(!t.attr("required"))return!0;var e=!0;switch(t[0].type){case"checkbox":e=t[0].checked;break;case"select":case"select-one":case"select-multiple":var i=t.find("option:selected");i.length&&i.val()||(e=!1);break;default:t.val()&&t.val().length||(e=!1)}return e}},{key:"findFormError",value:function(t){var e=t.length?t[0].id:"",i=t.siblings(this.options.formErrorSelector);return i.length||(i=t.parent().find(this.options.formErrorSelector)),e&&(i=i.add(this.$element.find('[data-form-error-for="'.concat(e,'"]')))),i}},{key:"findLabel",value:function(t){var e=t[0].id,i=this.$element.find('label[for="'.concat(e,'"]'));return i.length?i:t.closest("label")}},{key:"findRadioLabels",value:function(t){var a=this,e=t.map(function(t,e){var i=e.id,r=a.$element.find('label[for="'.concat(i,'"]'));return r.length||(r=d()(e).closest("label")),r[0]});return d()(e)}},{key:"findCheckboxLabels",value:function(t){var a=this,e=t.map(function(t,e){var i=e.id,r=a.$element.find('label[for="'.concat(i,'"]'));return r.length||(r=d()(e).closest("label")),r[0]});return d()(e)}},{key:"addErrorClasses",value:function(t){var e=this.findLabel(t),i=this.findFormError(t);e.length&&e.addClass(this.options.labelErrorClass),i.length&&i.addClass(this.options.formErrorClass),t.addClass(this.options.inputErrorClass).attr({"data-invalid":"","aria-invalid":!0})}},{key:"addA11yAttributes",value:function(t){var e=this.findFormError(t),i=e.filter("label"),r=e.first();if(e.length){if(void 0===t.attr("aria-describedby")){var a=r.attr("id");void 0===a&&(a=Object(o.GetYoDigits)(6,"abide-error"),r.attr("id",a)),t.attr("aria-describedby",a)}if(i.filter("[for]").length<i.length){var n=t.attr("id");void 0===n&&(n=Object(o.GetYoDigits)(6,"abide-input"),t.attr("id",n)),i.each(function(t,e){var i=d()(e);void 0===i.attr("for")&&i.attr("for",n)})}e.each(function(t,e){var i=d()(e);void 0===i.attr("role")&&i.attr("role","alert")}).end()}}},{key:"addGlobalErrorA11yAttributes",value:function(t){void 0===t.attr("aria-live")&&t.attr("aria-live",this.options.a11yErrorLevel)}},{key:"removeRadioErrorClasses",value:function(t){var e=this.$element.find(':radio[name="'.concat(t,'"]')),i=this.findRadioLabels(e),r=this.findFormError(e);i.length&&i.removeClass(this.options.labelErrorClass),r.length&&r.removeClass(this.options.formErrorClass),e.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}},{key:"removeCheckboxErrorClasses",value:function(t){var e=this.$element.find(':checkbox[name="'.concat(t,'"]')),i=this.findCheckboxLabels(e),r=this.findFormError(e);i.length&&i.removeClass(this.options.labelErrorClass),r.length&&r.removeClass(this.options.formErrorClass),e.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}},{key:"removeErrorClasses",value:function(t){if("radio"==t[0].type)return this.removeRadioErrorClasses(t.attr("name"));if("checkbox"==t[0].type)return this.removeCheckboxErrorClasses(t.attr("name"));var e=this.findLabel(t),i=this.findFormError(t);e.length&&e.removeClass(this.options.labelErrorClass),i.length&&i.removeClass(this.options.formErrorClass),t.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}},{key:"validateInput",value:function(t){var e=this.requiredCheck(t),i=!1,r=!0,a=t.attr("data-validator"),n=!0;if(this._validationIsDisabled())return!0;if(t.is("[data-abide-ignore]")||t.is('[type="hidden"]')||t.is("[disabled]"))return!0;switch(t[0].type){case"radio":i=this.validateRadio(t.attr("name"));break;case"checkbox":i=this.validateCheckbox(t.attr("name")),e=!0;break;case"select":case"select-one":case"select-multiple":i=e;break;default:i=this.validateText(t)}a&&(r=this.matchValidation(t,a,t.attr("required"))),t.attr("data-equalto")&&(n=this.options.validators.equalTo(t));var o=-1===[e,i,r,n].indexOf(!1),s=(o?"valid":"invalid")+".zf.abide";if(o){var l=this.$element.find('[data-equalto="'.concat(t.attr("id"),'"]'));if(l.length){var u=this;l.each(function(){d()(this).val()&&u.validateInput(d()(this))})}}return this[o?"removeErrorClasses":"addErrorClasses"](t),t.trigger(s,[t]),o}},{key:"validateForm",value:function(){var t,r=this,e=[],i=this;if(this.initialized||(this.initialized=!0),this._validationIsDisabled())return!(this.formnovalidate=null);this.$inputs.each(function(){if("checkbox"===d()(this)[0].type){if(d()(this).attr("name")===t)return!0;t=d()(this).attr("name")}e.push(i.validateInput(d()(this)))});var a=-1===e.indexOf(!1);return this.$element.find("[data-abide-error]").each(function(t,e){var i=d()(e);r.options.a11yAttributes&&r.addGlobalErrorA11yAttributes(i),i.css("display",a?"none":"block")}),this.$element.trigger((a?"formvalid":"forminvalid")+".zf.abide",[this.$element]),a}},{key:"validateText",value:function(t,e){e=e||t.attr("data-pattern")||t.attr("pattern")||t.attr("type");var i=t.val(),r=!1;return i.length?r=this.options.patterns.hasOwnProperty(e)?this.options.patterns[e].test(i):e===t.attr("type")||new RegExp(e).test(i):t.prop("required")||(r=!0),r}},{key:"validateRadio",value:function(t){var e=this.$element.find(':radio[name="'.concat(t,'"]')),i=!1,r=!1;return e.each(function(t,e){d()(e).attr("required")&&(r=!0)}),r||(i=!0),i||e.each(function(t,e){d()(e).prop("checked")&&(i=!0)}),i}},{key:"validateCheckbox",value:function(t){var i=this,e=this.$element.find(':checkbox[name="'.concat(t,'"]')),r=!1,a=!1,n=1,o=0;return e.each(function(t,e){d()(e).attr("required")&&(a=!0)}),a||(r=!0),r||(e.each(function(t,e){d()(e).prop("checked")&&o++,void 0!==d()(e).attr("data-min-required")&&(n=parseInt(d()(e).attr("data-min-required")))}),n<=o&&(r=!0)),!0!==this.initialized&&1<n||(e.each(function(t,e){r?i.removeErrorClasses(d()(e)):i.addErrorClasses(d()(e))}),r)}},{key:"matchValidation",value:function(e,t,i){var r=this;return i=!!i,-1===t.split(" ").map(function(t){return r.options.validators[t](e,i,e.parent())}).indexOf(!1)}},{key:"resetForm",value:function(){var t=this.$element,e=this.options;d()(".".concat(e.labelErrorClass),t).not("small").removeClass(e.labelErrorClass),d()(".".concat(e.inputErrorClass),t).not("small").removeClass(e.inputErrorClass),d()("".concat(e.formErrorSelector,".").concat(e.formErrorClass)).removeClass(e.formErrorClass),t.find("[data-abide-error]").css("display","none"),d()(":input",t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({"data-invalid":null,"aria-invalid":null}),d()(":input:radio",t).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),d()(":input:checkbox",t).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),t.trigger("formreset.zf.abide",[t])}},{key:"_destroy",value:function(){var t=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){t.removeErrorClasses(d()(this))}),this.$submits.off(".abide")}}])&&n(e.prototype,r),a&&n(e,a),i}();f.defaults={validateOn:"fieldChange",labelErrorClass:"is-invalid-label",inputErrorClass:"is-invalid-input",formErrorSelector:".form-error",formErrorClass:"is-visible",a11yAttributes:!0,a11yErrorLevel:"assertive",liveValidate:!1,validateOnBlur:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,website:{test:function(t){return f.defaults.patterns.domain.test(t)||f.defaults.patterns.url.test(t)}}},validators:{equalTo:function(t,e,i){return d()("#".concat(t.attr("data-equalto"))).val()===t.val()}}}},0:function(t,e,i){t.exports=i("./js/entries/plugins/foundation.abide.js")},jquery:function(t,e){t.exports=r}})});