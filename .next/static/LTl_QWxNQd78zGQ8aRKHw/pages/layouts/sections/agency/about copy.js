(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{"9a8T":function(e,t,n){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(1),r=(o(a),n(6)),u=o(r),s=n(7),c=o(s),d=n(8),l=o(d),f=n(9),m=o(f),p=n(10),b=o(p),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()};e.exports={init:function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return function(e){return!0===e||"mobile"===e&&m.default.mobile()||"phone"===e&&m.default.phone()||"tablet"===e&&m.default.tablet()||"function"==typeof e&&!0===e()}(x.disable)||t?void w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}):(x.disableMutationObserver||l.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,c.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||l.default.ready("[data-aos]",O),w)},refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=l,o=f;return l=f=void 0,y=t,p=e.apply(o,n)}function r(e){var n=e-v,o=e-y;return void 0===v||n>=t||n<0||h&&o>=m}function s(){var e=x();return r(e)?c(e):void(b=setTimeout(s,function(e){var n=e-y,o=t-(e-v);return h?k(o,m-n):o}(e)))}function c(e){return b=void 0,j&&l?i(e):(l=f=void 0,p)}function d(){var e=x(),n=r(e);if(l=arguments,f=this,v=e,n){if(void 0===b)return function(e){return y=e,b=setTimeout(s,t),g?i(e):p}(v);if(h)return b=setTimeout(s,t),i(v)}return void 0===b&&(b=setTimeout(s,t)),p}var l,f,m,p,b,v,y=0,g=!1,h=!1,j=!0;if("function"!=typeof e)throw new TypeError(u);return t=a(t)||0,o(n)&&(g=!!n.leading,m=(h="maxWait"in n)?w(a(n.maxWait)||0,t):m,j="trailing"in n?!!n.trailing:j),d.cancel=function(){void 0!==b&&clearTimeout(b),y=0,l=v=f=b=void 0},d.flush=function(){return void 0===b?p:c(x())},d}function o(e){var t="undefined"==typeof e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function i(e){return"symbol"==("undefined"==typeof e?"undefined":r(e))||function(e){return!!e&&"object"==("undefined"==typeof e?"undefined":r(e))}(e)&&h.call(e)==c}function a(e){if("number"==typeof e)return e;if(i(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=f.test(e);return n||m.test(e)?p(e.slice(2),n?2:8):l.test(e)?s:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",s=NaN,c="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,b="object"==("undefined"==typeof t?"undefined":r(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,y=b||v||Function("return this")(),g=Object.prototype,h=g.toString,w=Math.max,k=Math.min,x=function(){return y.Date.now()};e.exports=function(e,t,i){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(u);return o(i)&&(a="leading"in i?!!i.leading:a,r="trailing"in i?!!i.trailing:r),n(e,t,{leading:a,maxWait:t,trailing:r})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e){var t="undefined"==typeof e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}function o(e){return"symbol"==("undefined"==typeof e?"undefined":a(e))||function(e){return!!e&&"object"==("undefined"==typeof e?"undefined":a(e))}(e)&&g.call(e)==s}function i(e){if("number"==typeof e)return e;if(o(e))return u;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var i=l.test(e);return i||f.test(e)?m(e.slice(2),i?2:8):d.test(e)?u:+e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="Expected a function",u=NaN,s="[object Symbol]",c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,p="object"==("undefined"==typeof t?"undefined":a(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,v=p||b||Function("return this")(),y=Object.prototype,g=y.toString,h=Math.max,w=Math.min,k=function(){return v.Date.now()};e.exports=function(e,t,o){function a(t){var n=l,o=f;return l=f=void 0,y=t,p=e.apply(o,n)}function u(e){var n=e-v,o=e-y;return void 0===v||n>=t||n<0||x&&o>=m}function s(){var e=k();return u(e)?c(e):void(b=setTimeout(s,function(e){var n=e-y,o=t-(e-v);return x?w(o,m-n):o}(e)))}function c(e){return b=void 0,j&&l?a(e):(l=f=void 0,p)}function d(){var e=k(),n=u(e);if(l=arguments,f=this,v=e,n){if(void 0===b)return function(e){return y=e,b=setTimeout(s,t),g?a(e):p}(v);if(x)return b=setTimeout(s,t),a(v)}return void 0===b&&(b=setTimeout(s,t)),p}var l,f,m,p,b,v,y=0,g=!1,x=!1,j=!0;if("function"!=typeof e)throw new TypeError(r);return t=i(t)||0,n(o)&&(g=!!o.leading,m=(x="maxWait"in o)?h(i(o.maxWait)||0,t):m,j="trailing"in o?!!o.trailing:j),d.cancel=function(){void 0!==b&&clearTimeout(b),y=0,l=v=f=b=void 0},d.flush=function(){return void 0===b?p:c(k())},d}}).call(t,function(){return this}())},function(e,t){"use strict";function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(o))return i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default={isSupported:function(){return!!n()},ready:function(e,t){var a=window.document,r=new(n())(o);i=t,r.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!r.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=window.pageYOffset,o=window.innerHeight;e.forEach(function(e,i){!function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")}(e,o+n,t)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)}),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e,t){var n=0,o=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(o=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=a/2;break;case"bottom-center":n+=a/2+e.offsetHeight;break;case"center-center":n+=a/2+e.offsetHeight/2;break;case"top-top":n+=a;break;case"bottom-top":n+=e.offsetHeight+a;break;case"center-top":n+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(o=t),n+o}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},"Cah+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/agency/about copy",function(){return n("g7t1")}])},g7t1:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),a=n("9a8T"),r=n.n(a),u=(n("6Cl6"),n("1Yj4")),s=n("ok1R"),c=n("rhny"),d=i.a.createElement;t.default=function(){return Object(o.useEffect)(function(){r.a.init({duration:2e3})},[]),d("section",{className:"agency agency-content about-bg"},d("h3",{className:"text-as-shadow"},"About ",d("br",null)," us"),d(u.a,null,d(s.a,null,d(c.a,{xl:"9",md:"9",className:"offset-xl-3 offset-md-3"},d("div",{className:"agency-header-center-container"},d("div",{className:"borders"}),d("div",{className:"agency-head"},d("h3",{className:"agency-head-text"},"We Are Here ",d("span",{className:"block-span"},"For Made Your Idea")))),d("p",{className:"agency-para"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua ut enim adminim veni am for humanity for savings anything for your future."),d("a",{className:" btn btn-default btn-gradient",href:"#"},"view more")))),d("div",{className:"side-img  set-abs left-0 top-0","data-aos":"fade-right","data-aos-duration":"4500"},d("div",{className:"plus-container plus-container9"},d("div",{className:"plus white"})),d("div",{className:"plus-container plus-container10"},d("div",{className:"plus plus-medium white"})),d("div",{className:"plus-container plus-container11"},d("div",{className:"plus plus plus-small white"})),d("img",{alt:"",className:"img-fluid about-img",src:"/assets/images/agency/about-us/image.png"})),d("img",{alt:"",className:"img-fluid blue-img",src:"/assets/images/agency/agency-abs-img.png"}))}}},[["Cah+",0,1,2]]]);