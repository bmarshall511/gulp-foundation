!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("./foundation.util.keyboard"),require("./foundation.core"),require("jquery"),require("./foundation.util.box"),require("./foundation.util.motion"),require("./foundation.util.touch")):"function"==typeof define&&define.amd?define(["./foundation.util.keyboard","./foundation.core","jquery","./foundation.util.box","./foundation.util.motion","./foundation.util.touch"],e):"object"==typeof exports?exports["foundation.dropdown"]=e(require("./foundation.util.keyboard"),require("./foundation.core"),require("jquery"),require("./foundation.util.box"),require("./foundation.util.motion"),require("./foundation.util.touch")):(t.__FOUNDATION_EXTERNAL__=t.__FOUNDATION_EXTERNAL__||{},t.__FOUNDATION_EXTERNAL__["foundation.dropdown"]=e(t.__FOUNDATION_EXTERNAL__["foundation.util.keyboard"],t.__FOUNDATION_EXTERNAL__["foundation.core"],t.jQuery,t.__FOUNDATION_EXTERNAL__["foundation.util.box"],t.__FOUNDATION_EXTERNAL__["foundation.util.motion"],t.__FOUNDATION_EXTERNAL__["foundation.util.touch"]))}(window,function(o,n,i,r,s,a){return function(o){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=o,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}({"./foundation.core":function(t,e){t.exports=n},"./foundation.util.box":function(t,e){t.exports=r},"./foundation.util.keyboard":function(t,e){t.exports=o},"./foundation.util.motion":function(t,e){t.exports=s},"./foundation.util.touch":function(t,e){t.exports=a},"./js/entries/plugins/foundation.dropdown.js":function(t,e,o){"use strict";o.r(e);var n=o("./foundation.core");o.d(e,"Foundation",function(){return n.Foundation});var i=o("./js/foundation.dropdown.js");o.d(e,"Dropdown",function(){return i.Dropdown}),n.Foundation.plugin(i.Dropdown,"Dropdown")},"./js/foundation.dropdown.js":function(t,e,o){"use strict";o.r(e),o.d(e,"Dropdown",function(){return m});var n=o("jquery"),r=o.n(n),s=o("./foundation.util.keyboard"),a=o("./foundation.core"),l=o("./js/foundation.positionable.js"),u=o("./js/foundation.util.triggers.js"),c=o("./foundation.util.touch");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function h(t,e,o){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(o):i.value}})(t,e,o||t)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),d(this,p(o).apply(this,arguments))}var e,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(o,l["Positionable"]),e=o,(n=[{key:"_setup",value:function(t,e){this.$element=t,this.options=r.a.extend({},o.defaults,this.$element.data(),e),this.className="Dropdown",c.Touch.init(r.a),u.Triggers.init(r.a),this._init(),s.Keyboard.register("Dropdown",{ENTER:"toggle",SPACE:"toggle",ESCAPE:"close"})}},{key:"_init",value:function(){var t=this.$element.attr("id");this.$anchors=r()('[data-toggle="'.concat(t,'"]')).length?r()('[data-toggle="'.concat(t,'"]')):r()('[data-open="'.concat(t,'"]')),this.$anchors.attr({"aria-controls":t,"data-is-focus":!1,"data-yeti-box":t,"aria-haspopup":!0,"aria-expanded":!1}),this._setCurrentAnchor(this.$anchors.first()),this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null,void 0===this.$element.attr("aria-labelledby")&&(void 0===this.$currentAnchor.attr("id")&&this.$currentAnchor.attr("id",Object(a.GetYoDigits)(6,"dd-anchor")),this.$element.attr("aria-labelledby",this.$currentAnchor.attr("id"))),this.$element.attr({"aria-hidden":"true","data-yeti-box":t,"data-resize":t}),h(p(o.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function(){var t=this.$element[0].className.match(/(top|left|right|bottom)/g);return t?t[0]:"bottom"}},{key:"_getDefaultAlignment",value:function(){var t=/float-(\S+)/.exec(this.$currentAnchor.attr("class"));return t?t[1]:h(p(o.prototype),"_getDefaultAlignment",this).call(this)}},{key:"_setPosition",value:function(){this.$element.removeClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment)),h(p(o.prototype),"_setPosition",this).call(this,this.$currentAnchor,this.$element,this.$parent),this.$element.addClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment))}},{key:"_setCurrentAnchor",value:function(t){this.$currentAnchor=r()(t)}},{key:"_events",value:function(){var o=this,e="ontouchstart"in window||void 0!==window.ontouchstart;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.$anchors.off("click.zf.trigger").on("click.zf.trigger",function(t){o._setCurrentAnchor(this),!1===o.options.forceFollow?t.preventDefault():e&&o.options.hover&&!1===o.$element.hasClass("is-open")&&t.preventDefault()}),this.options.hover&&(this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){o._setCurrentAnchor(this);var t=r()("body").data();void 0!==t.whatinput&&"mouse"!==t.whatinput||(clearTimeout(o.timeout),o.timeout=setTimeout(function(){o.open(),o.$anchors.data("hover",!0)},o.options.hoverDelay))}).on("mouseleave.zf.dropdown",Object(a.ignoreMousedisappear)(function(){clearTimeout(o.timeout),o.timeout=setTimeout(function(){o.close(),o.$anchors.data("hover",!1)},o.options.hoverDelay)})),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(o.timeout)}).on("mouseleave.zf.dropdown",Object(a.ignoreMousedisappear)(function(){clearTimeout(o.timeout),o.timeout=setTimeout(function(){o.close(),o.$anchors.data("hover",!1)},o.options.hoverDelay)}))),this.$anchors.add(this.$element).on("keydown.zf.dropdown",function(t){var e=r()(this);s.Keyboard.findFocusable(o.$element);s.Keyboard.handleKey(t,"Dropdown",{open:function(){e.is(o.$anchors)&&!e.is("input, textarea")&&(o.open(),o.$element.attr("tabindex",-1).focus(),t.preventDefault())},close:function(){o.close(),o.$anchors.focus()}})})}},{key:"_addBodyHandler",value:function(){var e=r()(document.body).not(this.$element),o=this;e.off("click.zf.dropdown tap.zf.dropdown").on("click.zf.dropdown tap.zf.dropdown",function(t){o.$anchors.is(t.target)||o.$anchors.find(t.target).length||o.$element.is(t.target)||o.$element.find(t.target).length||(o.close(),e.off("click.zf.dropdown tap.zf.dropdown"))})}},{key:"open",value:function(){if(this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchors.addClass("hover").attr({"aria-expanded":!0}),this.$element.addClass("is-opening"),this._setPosition(),this.$element.removeClass("is-opening").addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var t=s.Keyboard.findFocusable(this.$element);t.length&&t.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.options.trapFocus&&s.Keyboard.trapFocus(this.$element),this.$element.trigger("show.zf.dropdown",[this.$element])}},{key:"close",value:function(){if(!this.$element.hasClass("is-open"))return!1;this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchors.removeClass("hover").attr("aria-expanded",!1),this.$element.trigger("hide.zf.dropdown",[this.$element]),this.options.trapFocus&&s.Keyboard.releaseFocus(this.$element)}},{key:"toggle",value:function(){if(this.$element.hasClass("is-open")){if(this.$anchors.data("hover"))return;this.close()}else this.open()}},{key:"_destroy",value:function(){this.$element.off(".zf.trigger").hide(),this.$anchors.off(".zf.dropdown"),r()(document.body).off("click.zf.dropdown tap.zf.dropdown")}}])&&f(e.prototype,n),i&&f(e,i),o}();m.defaults={parentClass:null,hoverDelay:250,hover:!1,hoverPane:!1,vOffset:0,hOffset:0,position:"auto",alignment:"auto",allowOverlap:!1,allowBottomOverlap:!0,trapFocus:!1,autoFocus:!1,closeOnClick:!1,forceFollow:!0}},"./js/foundation.positionable.js":function(t,e,o){"use strict";o.r(e),o.d(e,"Positionable",function(){return g});var s=o("./foundation.util.box"),r=o("./foundation.core");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=["left","right","top","bottom"],i=["top","bottom","center"],d=["left","right","center"],h={left:i,right:i,top:d,bottom:d};function p(t,e){var o=e.indexOf(t);return o===e.length-1?e[0]:e[o+1]}var g=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,u(e).apply(this,arguments))}var o,n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,r["Plugin"]),o=e,(n=[{key:"_init",value:function(){this.triedPositions={},this.position="auto"===this.options.position?this._getDefaultPosition():this.options.position,this.alignment="auto"===this.options.alignment?this._getDefaultAlignment():this.options.alignment,this.originalPosition=this.position,this.originalAlignment=this.alignment}},{key:"_getDefaultPosition",value:function(){return"bottom"}},{key:"_getDefaultAlignment",value:function(){switch(this.position){case"bottom":case"top":return Object(r.rtl)()?"right":"left";case"left":case"right":return"bottom"}}},{key:"_reposition",value:function(){this._alignmentsExhausted(this.position)?(this.position=p(this.position,f),this.alignment=h[this.position][0]):this._realign()}},{key:"_realign",value:function(){this._addTriedPosition(this.position,this.alignment),this.alignment=p(this.alignment,h[this.position])}},{key:"_addTriedPosition",value:function(t,e){this.triedPositions[t]=this.triedPositions[t]||[],this.triedPositions[t].push(e)}},{key:"_positionsExhausted",value:function(){for(var t=!0,e=0;e<f.length;e++)t=t&&this._alignmentsExhausted(f[e]);return t}},{key:"_alignmentsExhausted",value:function(t){return this.triedPositions[t]&&this.triedPositions[t].length==h[t].length}},{key:"_getVOffset",value:function(){return this.options.vOffset}},{key:"_getHOffset",value:function(){return this.options.hOffset}},{key:"_setPosition",value:function(t,e,o){if("false"===t.attr("aria-expanded"))return!1;if(this.options.allowOverlap||(this.position=this.originalPosition,this.alignment=this.originalAlignment),e.offset(s.Box.GetExplicitOffsets(e,t,this.position,this.alignment,this._getVOffset(),this._getHOffset())),!this.options.allowOverlap){for(var n=1e8,i={position:this.position,alignment:this.alignment};!this._positionsExhausted();){var r=s.Box.OverlapArea(e,o,!1,!1,this.options.allowBottomOverlap);if(0===r)return;r<n&&(n=r,i={position:this.position,alignment:this.alignment}),this._reposition(),e.offset(s.Box.GetExplicitOffsets(e,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}this.position=i.position,this.alignment=i.alignment,e.offset(s.Box.GetExplicitOffsets(e,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}}}])&&a(o.prototype,n),i&&a(o,i),e}();g.defaults={position:"auto",alignment:"auto",allowOverlap:!1,allowBottomOverlap:!0,vOffset:0,hOffset:0}},"./js/foundation.util.triggers.js":function(t,e,o){"use strict";o.r(e),o.d(e,"Triggers",function(){return c});var n=o("jquery"),r=o.n(n),i=o("./foundation.core"),s=o("./foundation.util.motion");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if("".concat(t[e],"MutationObserver")in window)return window["".concat(t[e],"MutationObserver")];return!1}(),u=function(e,o){e.data(o).split(" ").forEach(function(t){r()("#".concat(t))["close"===o?"trigger":"triggerHandler"]("".concat(o,".zf.trigger"),[e])})},c={Listeners:{Basic:{},Global:{}},Initializers:{}};function f(e,t,o){var n,i=Array.prototype.slice.call(arguments,3);r()(window).off(t).on(t,function(t){n&&clearTimeout(n),n=setTimeout(function(){o.apply(null,i)},e||10)})}c.Listeners.Basic={openListener:function(){u(r()(this),"open")},closeListener:function(){r()(this).data("close")?u(r()(this),"close"):r()(this).trigger("close.zf.trigger")},toggleListener:function(){r()(this).data("toggle")?u(r()(this),"toggle"):r()(this).trigger("toggle.zf.trigger")},closeableListener:function(t){var e=r()(this).data("closable");t.stopPropagation(),""!==e?s.Motion.animateOut(r()(this),e,function(){r()(this).trigger("closed.zf")}):r()(this).fadeOut().trigger("closed.zf")},toggleFocusListener:function(){var t=r()(this).data("toggle-focus");r()("#".concat(t)).triggerHandler("toggle.zf.trigger",[r()(this)])}},c.Initializers.addOpenListener=function(t){t.off("click.zf.trigger",c.Listeners.Basic.openListener),t.on("click.zf.trigger","[data-open]",c.Listeners.Basic.openListener)},c.Initializers.addCloseListener=function(t){t.off("click.zf.trigger",c.Listeners.Basic.closeListener),t.on("click.zf.trigger","[data-close]",c.Listeners.Basic.closeListener)},c.Initializers.addToggleListener=function(t){t.off("click.zf.trigger",c.Listeners.Basic.toggleListener),t.on("click.zf.trigger","[data-toggle]",c.Listeners.Basic.toggleListener)},c.Initializers.addCloseableListener=function(t){t.off("close.zf.trigger",c.Listeners.Basic.closeableListener),t.on("close.zf.trigger","[data-closeable], [data-closable]",c.Listeners.Basic.closeableListener)},c.Initializers.addToggleFocusListener=function(t){t.off("focus.zf.trigger blur.zf.trigger",c.Listeners.Basic.toggleFocusListener),t.on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",c.Listeners.Basic.toggleFocusListener)},c.Listeners.Global={resizeListener:function(t){l||t.each(function(){r()(this).triggerHandler("resizeme.zf.trigger")}),t.attr("data-events","resize")},scrollListener:function(t){l||t.each(function(){r()(this).triggerHandler("scrollme.zf.trigger")}),t.attr("data-events","scroll")},closeMeListener:function(t,e){var o=t.namespace.split(".")[0];r()("[data-".concat(o,"]")).not('[data-yeti-box="'.concat(e,'"]')).each(function(){var t=r()(this);t.triggerHandler("close.zf.trigger",[t])})}},c.Initializers.addClosemeListener=function(t){var e=r()("[data-yeti-box]"),o=["dropdown","tooltip","reveal"];if(t&&("string"==typeof t?o.push(t):"object"===a(t)&&"string"==typeof t[0]?o=o.concat(t):console.error("Plugin names must be strings")),e.length){var n=o.map(function(t){return"closeme.zf.".concat(t)}).join(" ");r()(window).off(n).on(n,c.Listeners.Global.closeMeListener)}},c.Initializers.addResizeListener=function(t){var e=r()("[data-resize]");e.length&&f(t,"resize.zf.trigger",c.Listeners.Global.resizeListener,e)},c.Initializers.addScrollListener=function(t){var e=r()("[data-scroll]");e.length&&f(t,"scroll.zf.trigger",c.Listeners.Global.scrollListener,e)},c.Initializers.addMutationEventsListener=function(t){if(!l)return!1;var e=t.find("[data-resize], [data-scroll], [data-mutate]"),o=function(t){var e=r()(t[0].target);switch(t[0].type){case"attributes":"scroll"===e.attr("data-events")&&"data-events"===t[0].attributeName&&e.triggerHandler("scrollme.zf.trigger",[e,window.pageYOffset]),"resize"===e.attr("data-events")&&"data-events"===t[0].attributeName&&e.triggerHandler("resizeme.zf.trigger",[e]),"style"===t[0].attributeName&&(e.closest("[data-mutate]").attr("data-events","mutate"),e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[e.closest("[data-mutate]")]));break;case"childList":e.closest("[data-mutate]").attr("data-events","mutate"),e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[e.closest("[data-mutate]")]);break;default:return!1}};if(e.length)for(var n=0;n<=e.length-1;n++){new l(o).observe(e[n],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}},c.Initializers.addSimpleListeners=function(){var t=r()(document);c.Initializers.addOpenListener(t),c.Initializers.addCloseListener(t),c.Initializers.addToggleListener(t),c.Initializers.addCloseableListener(t),c.Initializers.addToggleFocusListener(t)},c.Initializers.addGlobalListeners=function(){var t=r()(document);c.Initializers.addMutationEventsListener(t),c.Initializers.addResizeListener(),c.Initializers.addScrollListener(),c.Initializers.addClosemeListener()},c.init=function(t,e){Object(i.onLoad)(t(window),function(){!0!==t.triggersInitialized&&(c.Initializers.addSimpleListeners(),c.Initializers.addGlobalListeners(),t.triggersInitialized=!0)}),e&&(e.Triggers=c,e.IHearYou=c.Initializers.addGlobalListeners)}},4:function(t,e,o){t.exports=o("./js/entries/plugins/foundation.dropdown.js")},jquery:function(t,e){t.exports=i}})});