!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("./foundation.core"),require("./foundation.util.box"),require("./foundation.util.keyboard"),require("./foundation.util.nest"),require("./foundation.util.touch"),require("jquery")):"function"==typeof define&&define.amd?define(["./foundation.core","./foundation.util.box","./foundation.util.keyboard","./foundation.util.nest","./foundation.util.touch","jquery"],n):"object"==typeof exports?exports["foundation.dropdownMenu"]=n(require("./foundation.core"),require("./foundation.util.box"),require("./foundation.util.keyboard"),require("./foundation.util.nest"),require("./foundation.util.touch"),require("jquery")):(e.__FOUNDATION_EXTERNAL__=e.__FOUNDATION_EXTERNAL__||{},e.__FOUNDATION_EXTERNAL__["foundation.dropdownMenu"]=n(e.__FOUNDATION_EXTERNAL__["foundation.core"],e.__FOUNDATION_EXTERNAL__["foundation.util.box"],e.__FOUNDATION_EXTERNAL__["foundation.util.keyboard"],e.__FOUNDATION_EXTERNAL__["foundation.util.nest"],e.__FOUNDATION_EXTERNAL__["foundation.util.touch"],e.jQuery))}(window,function(t,o,i,r,s,u){return function(t){var o={};function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=5)}({"./foundation.core":function(e,n){e.exports=t},"./foundation.util.box":function(e,n){e.exports=o},"./foundation.util.keyboard":function(e,n){e.exports=i},"./foundation.util.nest":function(e,n){e.exports=r},"./foundation.util.touch":function(e,n){e.exports=s},"./js/entries/plugins/foundation.dropdownMenu.js":function(e,n,t){"use strict";t.r(n);var o=t("./foundation.core");t.d(n,"Foundation",function(){return o.Foundation});var i=t("./js/foundation.dropdownMenu.js");t.d(n,"DropdownMenu",function(){return i.DropdownMenu}),o.Foundation.plugin(i.DropdownMenu,"DropdownMenu")},"./js/foundation.dropdownMenu.js":function(e,n,t){"use strict";t.r(n),t.d(n,"DropdownMenu",function(){return m});var o=t("jquery"),f=t.n(o),u=t("./foundation.core"),p=t("./foundation.util.keyboard"),r=t("./foundation.util.nest"),s=t("./foundation.util.box"),a=t("./foundation.util.touch");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var m=function(e){function t(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,c(t).apply(this,arguments))}var n,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(t,u["Plugin"]),n=t,(o=[{key:"_setup",value:function(e,n){this.$element=e,this.options=f.a.extend({},t.defaults,this.$element.data(),n),this.className="DropdownMenu",a.Touch.init(f.a),this._init(),p.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}},{key:"_init",value:function(){r.Nest.Feather(this.$element,"dropdown");var e=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),"auto"===this.options.alignment?this.$element.hasClass(this.options.rightClass)||Object(u.rtl)()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",e.addClass("opens-left")):(this.options.alignment="left",e.addClass("opens-right")):"right"===this.options.alignment?e.addClass("opens-left"):e.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_isVertical",value:function(){return"block"===this.$tabs.css("display")||"column"===this.$element.css("flex-direction")}},{key:"_isRtl",value:function(){return this.$element.hasClass("align-right")||Object(u.rtl)()&&!this.$element.hasClass("align-left")}},{key:"_events",value:function(){var c=this,r="ontouchstart"in window||void 0!==window.ontouchstart,s="is-dropdown-submenu-parent";(this.options.clickOpen||r)&&this.$menuItems.on("click.zf.dropdownMenu touchstart.zf.dropdownMenu",function(e){var n=f()(e.target).parentsUntil("ul",".".concat(s)),t=n.hasClass(s),o="true"===n.attr("data-is-click"),i=n.children(".is-dropdown-submenu");if(t)if(o){if(!c.options.closeOnClick||!c.options.clickOpen&&!r||c.options.forceFollow&&r)return;e.preventDefault(),c._hide(n)}else e.preventDefault(),c._show(i),n.add(n.parentsUntil(c.$element,".".concat(s))).attr("data-is-click",!0)}),c.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownMenu",function(e){f()(this).hasClass(s)||c._hide()}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownMenu",function(e){var n=f()(this);n.hasClass(s)&&(clearTimeout(n.data("_delay")),n.data("_delay",setTimeout(function(){c._show(n.children(".is-dropdown-submenu"))},c.options.hoverDelay)))}).on("mouseleave.zf.dropdownmenu",Object(u.ignoreMousedisappear)(function(e){var n=f()(this);if(n.hasClass(s)&&c.options.autoclose){if("true"===n.attr("data-is-click")&&c.options.clickOpen)return!1;clearTimeout(n.data("_delay")),n.data("_delay",setTimeout(function(){c._hide(n)},c.options.closingTime))}})),this.$menuItems.on("keydown.zf.dropdownMenu",function(n){var t,o,i=f()(n.target).parentsUntil("ul",'[role="menuitem"]'),e=-1<c.$tabs.index(i),r=e?c.$tabs:i.siblings("li").add(i);r.each(function(e){if(f()(this).is(i))return t=r.eq(e-1),void(o=r.eq(e+1))});var s=function(){o.children("a:first").focus(),n.preventDefault()},u=function(){t.children("a:first").focus(),n.preventDefault()},a=function(){var e=i.children("ul.is-dropdown-submenu");e.length&&(c._show(e),i.find("li > a:first").focus(),n.preventDefault())},d=function(){var e=i.parent("ul").parent("li");e.children("a:first").focus(),c._hide(e),n.preventDefault()},l={open:a,close:function(){c._hide(c.$element),c.$menuItems.eq(0).children("a").focus(),n.preventDefault()}};e?c._isVertical()?c._isRtl()?f.a.extend(l,{down:s,up:u,next:d,previous:a}):f.a.extend(l,{down:s,up:u,next:a,previous:d}):c._isRtl()?f.a.extend(l,{next:u,previous:s,down:a,up:d}):f.a.extend(l,{next:s,previous:u,down:a,up:d}):c._isRtl()?f.a.extend(l,{next:d,previous:a,down:s,up:u}):f.a.extend(l,{next:a,previous:d,down:s,up:u}),p.Keyboard.handleKey(n,"DropdownMenu",l)})}},{key:"_addBodyHandler",value:function(){var n=this,e=f()(document.body);this._removeBodyHandler(),e.on("click.zf.dropdownMenu tap.zf.dropdownMenu",function(e){!!f()(e.target).closest(n.$element).length||(n._hide(),n._removeBodyHandler())})}},{key:"_removeBodyHandler",value:function(){f()(document.body).off("click.zf.dropdownMenu tap.zf.dropdownMenu")}},{key:"_show",value:function(t){var e=this.$tabs.index(this.$tabs.filter(function(e,n){return 0<f()(n).find(t).length})),n=t.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(n,e),t.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");var o=s.Box.ImNotTouchingYou(t,null,!0);if(!o){var i="left"===this.options.alignment?"-right":"-left",r=t.parent(".is-dropdown-submenu-parent");r.removeClass("opens".concat(i)).addClass("opens-".concat(this.options.alignment)),(o=s.Box.ImNotTouchingYou(t,null,!0))||r.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"),this.changed=!0}t.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdownMenu",[t])}},{key:"_hide",value:function(e,t){var n;if((n=e&&e.length?e:void 0!==t?this.$tabs.not(function(e,n){return e===t}):this.$element).hasClass("is-active")||0<n.find(".is-active").length){var o=n.find("li.is-active");if(o.add(n).attr({"data-is-click":!1}).removeClass("is-active"),n.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),this.changed||n.find("opens-inner").length){var i="left"===this.options.alignment?"right":"left";n.find("li.is-dropdown-submenu-parent").add(n).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(i)),this.changed=!1}clearTimeout(o.data("_delay")),this._removeBodyHandler(),this.$element.trigger("hide.zf.dropdownMenu",[n])}}},{key:"_destroy",value:function(){this.$menuItems.off(".zf.dropdownMenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),f()(document.body).off(".zf.dropdownMenu"),r.Nest.Burn(this.$element,"dropdown")}}])&&d(n.prototype,o),i&&d(n,i),t}();m.defaults={disableHover:!1,autoclose:!0,hoverDelay:50,clickOpen:!1,closingTime:500,alignment:"auto",closeOnClick:!0,closeOnClickInside:!0,verticalClass:"vertical",rightClass:"align-right",forceFollow:!0}},5:function(e,n,t){e.exports=t("./js/entries/plugins/foundation.dropdownMenu.js")},jquery:function(e,n){e.exports=u}})});