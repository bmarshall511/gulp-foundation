!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("./foundation.core"),require("./foundation.util.mediaQuery"),require("./foundation.util.motion"),require("jquery")):"function"==typeof define&&define.amd?define(["./foundation.core","./foundation.util.mediaQuery","./foundation.util.motion","jquery"],e):"object"==typeof exports?exports["foundation.sticky"]=e(require("./foundation.core"),require("./foundation.util.mediaQuery"),require("./foundation.util.motion"),require("jquery")):(t.__FOUNDATION_EXTERNAL__=t.__FOUNDATION_EXTERNAL__||{},t.__FOUNDATION_EXTERNAL__["foundation.sticky"]=e(t.__FOUNDATION_EXTERNAL__["foundation.core"],t.__FOUNDATION_EXTERNAL__["foundation.util.mediaQuery"],t.__FOUNDATION_EXTERNAL__["foundation.util.motion"],t.jQuery))}(window,function(i,n,o,s){return function(i){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=i,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=17)}({"./foundation.core":function(t,e){t.exports=i},"./foundation.util.mediaQuery":function(t,e){t.exports=n},"./foundation.util.motion":function(t,e){t.exports=o},"./js/entries/plugins/foundation.sticky.js":function(t,e,i){"use strict";i.r(e);var n=i("./foundation.core");i.d(e,"Foundation",function(){return n.Foundation});var o=i("./js/foundation.sticky.js");i.d(e,"Sticky",function(){return o.Sticky}),n.Foundation.plugin(o.Sticky,"Sticky")},"./js/foundation.sticky.js":function(t,e,i){"use strict";i.r(e),i.d(e,"Sticky",function(){return h});var n=i("jquery"),a=i.n(n),s=i("./foundation.core"),c=i("./foundation.util.mediaQuery"),r=i("./js/foundation.util.triggers.js");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),l(this,f(i).apply(this,arguments))}var e,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(i,s["Plugin"]),e=i,(n=[{key:"_setup",value:function(t,e){this.$element=t,this.options=a.a.extend({},i.defaults,this.$element.data(),e),this.className="Sticky",r.Triggers.init(a.a),this._init()}},{key:"_init",value:function(){c.MediaQuery._init();var t=this.$element.parent("[data-sticky-container]"),e=this.$element[0].id||Object(s.GetYoDigits)(6,"sticky"),i=this;t.length?this.$container=t:(this.wasWrapped=!0,this.$element.wrap(this.options.container),this.$container=this.$element.parent()),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":e,"data-mutate":e}),""!==this.options.anchor&&a()("#"+i.options.anchor).attr({"data-mutate":e}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,this.onLoadListener=Object(s.onLoad)(a()(window),function(){i.containerHeight="none"==i.$element.css("display")?0:i.$element[0].getBoundingClientRect().height,i.$container.css("height",i.containerHeight),i.elemHeight=i.containerHeight,""!==i.options.anchor?i.$anchor=a()("#"+i.options.anchor):i._parsePoints(),i._setSizes(function(){var t=window.pageYOffset;i._calc(!1,t),i.isStuck||i._removeSticky(!(t>=i.topPoint))}),i._events(e.split("-").reverse().join("-"))})}},{key:"_parsePoints",value:function(){for(var t=[""==this.options.topAnchor?1:this.options.topAnchor,""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor],e={},i=0,n=t.length;i<n&&t[i];i++){var o;if("number"==typeof t[i])o=t[i];else{var s=t[i].split(":"),r=a()("#".concat(s[0]));o=r.offset().top,s[1]&&"bottom"===s[1].toLowerCase()&&(o+=r[0].getBoundingClientRect().height)}e[i]=o}this.points=e}},{key:"_events",value:function(i){var n=this,t=this.scrollListener="scroll.zf.".concat(i);this.isOn||(this.canStick&&(this.isOn=!0,a()(window).off(t).on(t,function(t){0===n.scrollCount?(n.scrollCount=n.options.checkEvery,n._setSizes(function(){n._calc(!1,window.pageYOffset)})):(n.scrollCount--,n._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,e){n._eventsHandler(i)}),this.$element.on("mutateme.zf.trigger",function(t,e){n._eventsHandler(i)}),this.$anchor&&this.$anchor.on("mutateme.zf.trigger",function(t,e){n._eventsHandler(i)}))}},{key:"_eventsHandler",value:function(t){var e=this,i=this.scrollListener="scroll.zf.".concat(t);e._setSizes(function(){e._calc(!1),e.canStick?e.isOn||e._events(t):e.isOn&&e._pauseListeners(i)})}},{key:"_pauseListeners",value:function(t){this.isOn=!1,a()(window).off(t),this.$element.trigger("pause.zf.sticky")}},{key:"_calc",value:function(t,e){if(t&&this._setSizes(),!this.canStick)return this.isStuck&&this._removeSticky(!0),!1;e||(e=window.pageYOffset),e>=this.topPoint?e<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0)}},{key:"_setSticky",value:function(){var t=this,e=this.options.stickTo,i="top"===e?"marginTop":"marginBottom",n="top"===e?"bottom":"top",o={};o[i]="".concat(this.options[i],"em"),o[e]=0,o[n]="auto",this.isStuck=!0,this.$element.removeClass("is-anchored is-at-".concat(n)).addClass("is-stuck is-at-".concat(e)).css(o).trigger("sticky.zf.stuckto:".concat(e)),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){t._setSizes()})}},{key:"_removeSticky",value:function(t){var e=this.options.stickTo,i="top"===e,n={},o=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,s=t?"top":"bottom";n[i?"marginTop":"marginBottom"]=0,n.bottom="auto",n.top=t?0:o,this.isStuck=!1,this.$element.removeClass("is-stuck is-at-".concat(e)).addClass("is-anchored is-at-".concat(s)).css(n).trigger("sticky.zf.unstuckfrom:".concat(s))}},{key:"_setSizes",value:function(t){this.canStick=c.MediaQuery.is(this.options.stickyOn),this.canStick||t&&"function"==typeof t&&t();var e=this.$container[0].getBoundingClientRect().width,i=window.getComputedStyle(this.$container[0]),n=parseInt(i["padding-left"],10),o=parseInt(i["padding-right"],10);if(this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":"".concat(e-n-o,"px")}),this.options.dynamicHeight||!this.containerHeight){var s=this.$element[0].getBoundingClientRect().height||this.containerHeight;s="none"==this.$element.css("display")?0:s,this.$container.css("height",s),this.containerHeight=s}if(this.elemHeight=this.containerHeight,!this.isStuck&&this.$element.hasClass("is-at-bottom")){var r=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",r)}this._setBreakPoints(this.containerHeight,function(){t&&"function"==typeof t&&t()})}},{key:"_setBreakPoints",value:function(t,e){if(!this.canStick){if(!e||"function"!=typeof e)return!1;e()}var i=g(this.options.marginTop),n=g(this.options.marginBottom),o=this.points?this.points[0]:this.$anchor.offset().top,s=this.points?this.points[1]:o+this.anchorHeight,r=window.innerHeight;"top"===this.options.stickTo?(o-=i,s-=t+i):"bottom"===this.options.stickTo&&(o-=r-(t+n),s-=r-n),this.topPoint=o,this.bottomPoint=s,e&&"function"==typeof e&&e()}},{key:"_destroy",value:function(){this._removeSticky(!0),this.$element.removeClass("".concat(this.options.stickyClass," is-anchored is-at-top")).css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger").off("mutateme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),this.scrollListener&&a()(window).off(this.scrollListener),this.onLoadListener&&a()(window).off(this.onLoadListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""})}}])&&u(e.prototype,n),o&&u(e,o),i}();function g(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}h.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",dynamicHeight:!0,checkEvery:-1}},"./js/foundation.util.triggers.js":function(t,e,i){"use strict";i.r(e),i.d(e,"Triggers",function(){return l});var n=i("jquery"),s=i.n(n),o=i("./foundation.core"),r=i("./foundation.util.motion");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if("".concat(t[e],"MutationObserver")in window)return window["".concat(t[e],"MutationObserver")];return!1}(),u=function(e,i){e.data(i).split(" ").forEach(function(t){s()("#".concat(t))["close"===i?"trigger":"triggerHandler"]("".concat(i,".zf.trigger"),[e])})},l={Listeners:{Basic:{},Global:{}},Initializers:{}};function f(e,t,i){var n,o=Array.prototype.slice.call(arguments,3);s()(window).off(t).on(t,function(t){n&&clearTimeout(n),n=setTimeout(function(){i.apply(null,o)},e||10)})}l.Listeners.Basic={openListener:function(){u(s()(this),"open")},closeListener:function(){s()(this).data("close")?u(s()(this),"close"):s()(this).trigger("close.zf.trigger")},toggleListener:function(){s()(this).data("toggle")?u(s()(this),"toggle"):s()(this).trigger("toggle.zf.trigger")},closeableListener:function(t){var e=s()(this).data("closable");t.stopPropagation(),""!==e?r.Motion.animateOut(s()(this),e,function(){s()(this).trigger("closed.zf")}):s()(this).fadeOut().trigger("closed.zf")},toggleFocusListener:function(){var t=s()(this).data("toggle-focus");s()("#".concat(t)).triggerHandler("toggle.zf.trigger",[s()(this)])}},l.Initializers.addOpenListener=function(t){t.off("click.zf.trigger",l.Listeners.Basic.openListener),t.on("click.zf.trigger","[data-open]",l.Listeners.Basic.openListener)},l.Initializers.addCloseListener=function(t){t.off("click.zf.trigger",l.Listeners.Basic.closeListener),t.on("click.zf.trigger","[data-close]",l.Listeners.Basic.closeListener)},l.Initializers.addToggleListener=function(t){t.off("click.zf.trigger",l.Listeners.Basic.toggleListener),t.on("click.zf.trigger","[data-toggle]",l.Listeners.Basic.toggleListener)},l.Initializers.addCloseableListener=function(t){t.off("close.zf.trigger",l.Listeners.Basic.closeableListener),t.on("close.zf.trigger","[data-closeable], [data-closable]",l.Listeners.Basic.closeableListener)},l.Initializers.addToggleFocusListener=function(t){t.off("focus.zf.trigger blur.zf.trigger",l.Listeners.Basic.toggleFocusListener),t.on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",l.Listeners.Basic.toggleFocusListener)},l.Listeners.Global={resizeListener:function(t){c||t.each(function(){s()(this).triggerHandler("resizeme.zf.trigger")}),t.attr("data-events","resize")},scrollListener:function(t){c||t.each(function(){s()(this).triggerHandler("scrollme.zf.trigger")}),t.attr("data-events","scroll")},closeMeListener:function(t,e){var i=t.namespace.split(".")[0];s()("[data-".concat(i,"]")).not('[data-yeti-box="'.concat(e,'"]')).each(function(){var t=s()(this);t.triggerHandler("close.zf.trigger",[t])})}},l.Initializers.addClosemeListener=function(t){var e=s()("[data-yeti-box]"),i=["dropdown","tooltip","reveal"];if(t&&("string"==typeof t?i.push(t):"object"===a(t)&&"string"==typeof t[0]?i=i.concat(t):console.error("Plugin names must be strings")),e.length){var n=i.map(function(t){return"closeme.zf.".concat(t)}).join(" ");s()(window).off(n).on(n,l.Listeners.Global.closeMeListener)}},l.Initializers.addResizeListener=function(t){var e=s()("[data-resize]");e.length&&f(t,"resize.zf.trigger",l.Listeners.Global.resizeListener,e)},l.Initializers.addScrollListener=function(t){var e=s()("[data-scroll]");e.length&&f(t,"scroll.zf.trigger",l.Listeners.Global.scrollListener,e)},l.Initializers.addMutationEventsListener=function(t){if(!c)return!1;var e=t.find("[data-resize], [data-scroll], [data-mutate]"),i=function(t){var e=s()(t[0].target);switch(t[0].type){case"attributes":"scroll"===e.attr("data-events")&&"data-events"===t[0].attributeName&&e.triggerHandler("scrollme.zf.trigger",[e,window.pageYOffset]),"resize"===e.attr("data-events")&&"data-events"===t[0].attributeName&&e.triggerHandler("resizeme.zf.trigger",[e]),"style"===t[0].attributeName&&(e.closest("[data-mutate]").attr("data-events","mutate"),e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[e.closest("[data-mutate]")]));break;case"childList":e.closest("[data-mutate]").attr("data-events","mutate"),e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[e.closest("[data-mutate]")]);break;default:return!1}};if(e.length)for(var n=0;n<=e.length-1;n++){new c(i).observe(e[n],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}},l.Initializers.addSimpleListeners=function(){var t=s()(document);l.Initializers.addOpenListener(t),l.Initializers.addCloseListener(t),l.Initializers.addToggleListener(t),l.Initializers.addCloseableListener(t),l.Initializers.addToggleFocusListener(t)},l.Initializers.addGlobalListeners=function(){var t=s()(document);l.Initializers.addMutationEventsListener(t),l.Initializers.addResizeListener(),l.Initializers.addScrollListener(),l.Initializers.addClosemeListener()},l.init=function(t,e){Object(o.onLoad)(t(window),function(){!0!==t.triggersInitialized&&(l.Initializers.addSimpleListeners(),l.Initializers.addGlobalListeners(),t.triggersInitialized=!0)}),e&&(e.Triggers=l,e.IHearYou=l.Initializers.addGlobalListeners)}},17:function(t,e,i){t.exports=i("./js/entries/plugins/foundation.sticky.js")},jquery:function(t,e){t.exports=s}})});