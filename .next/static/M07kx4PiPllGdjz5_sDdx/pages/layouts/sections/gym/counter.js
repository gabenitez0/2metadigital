(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{"1c9C":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("PHNs"),i=n.n(o),s=n("1Yj4"),u=n("ok1R"),c=n("rhny"),l=a.a.createElement;t.default=function(){return l("section",{className:"gym counter  bg-img3 bg1"},l(s.a,null,l(u.a,null,l(c.a,{md:"3",xs:"6",className:"counter-container"},l("div",{className:"counters"},l("img",{alt:"",className:"img-fluid counter-img",src:"/assets/images/gym/counter/happy-icon.png"}),l("div",{className:"counter-text"},l("div",{className:"count-number"},l("h2",{className:"text-white counts"},l(i.a,{end:1510,duration:10}))),l("div",{className:"count-desc"},l("h5",{className:"text-white"},"Satisfied Customers"))))),l(c.a,{md:"3",xs:"6",className:"counter-container"},l("div",{className:"counters"},l("img",{alt:"",className:"img-fluid counter-img",src:"/assets/images/gym/counter/project-icon.png"}),l("div",{className:"counter-text"},l("div",{className:"count-number"},l("h2",{className:"text-white counts"},l(i.a,{end:306,duration:10}))),l("div",{className:"count-desc"},l("h5",{className:"text-white"},"Projects Completed"))))),l(c.a,{md:"3",xs:"6",className:"counter-container"},l("div",{className:"counters"},l("img",{alt:"",className:"img-fluid counter-img",src:"/assets/images/gym/counter/work-icon.png"}),l("div",{className:"counter-text"},l("div",{className:"count-number"},l("h2",{className:"text-white counts"},l(i.a,{end:48502,duration:10}))),l("div",{className:"count-desc"},l("h5",{className:"text-white"},"Hours Worked"))))),l(c.a,{md:"3",xs:"6",className:"counter-container"},l("div",{className:"counters"},l("img",{alt:"",className:"img-fluid counter-img",src:"/assets/images/gym/counter/award-icon.png"}),l("div",{className:"counter-text"},l("div",{className:"count-number"},l("h2",{className:"text-white counts"},l(i.a,{end:12,duration:10}))),l("div",{className:"count-desc"},l("h5",{className:"text-white"},"Awwards Winning"))))))))}},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},Csxb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/gym/counter",function(){return n("1c9C")}])},GiOn:function(e,t,n){var r,a;void 0===(a="function"===typeof(r=function(e,t,n){return function(e,t,n,r,a,o){function i(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},formattingFn:function(e){var t,n,r,a,o,i,u=e<0;if(e=Math.abs(e).toFixed(s.decimals),t=(e+="").split("."),n=t[0],r=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(a="",o=0,i=n.length;o<i;++o)0!==o&&o%3===0&&(a=s.options.separator+a),a=n[i-o-1]+a;n=a}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return s.options.numerals[+e]}),r=r.replace(/[0-9]/g,function(e){return s.options.numerals[+e]})),(u?"-":"")+s.options.prefix+n+r+s.options.suffix},prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var u in s.options)o.hasOwnProperty(u)&&null!==o[u]&&(s.options[u]=o[u]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var c=0,l=["webkit","moz","ms","o"],f=0;f<l.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[l[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[f]+"CancelAnimationFrame"]||window[l[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-c)),a=window.setTimeout(function(){e(n+r)},r);return c=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!!s.initialized||(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),i(s.startVal)&&i(s.endVal)?(s.decimals=Math.max(0,r||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(a)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,!0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(s.error="[CountUp] target is null or undefined",!1))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!i(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)},PHNs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("17x9"),a=n("q1tI"),o=n("2W6z"),i=n("GiOn");function s(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var u=s(r),c=s(a),l=s(o),f=s(i);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){h(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r,a,o=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r=this,!(a=n)||"object"!==typeof a&&"function"!==typeof a?y(r):a}}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(u){s=!0,a=u}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,o=t.easingFn,i=t.end,s=t.formattingFn,u=t.prefix,c=t.separator,l=t.start,m=t.suffix,p=t.useEasing;return new f.default(e,l,i,r,a,{decimal:n,easingFn:o,formattingFn:s,separator:c,prefix:u,suffix:m,useEasing:p,useGrouping:!!c})},R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,a.Component);var t,n,r,o=w(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(y(e=o.call.apply(o,[this].concat(n))),"checkProps",function(t){var n=e.props,r=n.start,a=n.suffix,o=n.prefix,i=n.redraw,s=n.duration,u=n.separator,c=n.decimals,l=n.decimal,f=n.className;return s!==t.duration||r!==t.start||a!==t.suffix||o!==t.prefix||u!==t.separator||c!==t.decimals||l!==t.decimal||f!==t.className||i}),h(y(e),"createInstance",function(){return"function"===typeof e.props.children&&l.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),N(e.containerRef.current,e.props)}),h(y(e),"pauseResume",function(){var t=y(e),n=t.reset,r=t.restart,a=t.update,o=e.props.onPauseResume;e.instance.pauseResume(),o({reset:n,start:r,update:a})}),h(y(e),"reset",function(){var t=y(e),n=t.pauseResume,r=t.restart,a=t.update,o=e.props.onReset;e.instance.reset(),o({pauseResume:n,start:r,update:a})}),h(y(e),"restart",function(){e.reset(),e.start()}),h(y(e),"start",function(){var t=y(e),n=t.pauseResume,r=t.reset,a=t.restart,o=t.update,i=e.props,s=i.delay,u=i.onEnd,c=i.onStart,l=function(){return e.instance.start(function(){return u({pauseResume:n,reset:r,start:a,update:o})})};s>0?e.timeoutId=setTimeout(l,1e3*s):l(),c({pauseResume:n,reset:r,update:o})}),h(y(e),"update",function(t){var n=y(e),r=n.pauseResume,a=n.reset,o=n.restart,i=e.props.onUpdate;e.instance.update(t),i({pauseResume:r,reset:a,start:o})}),h(y(e),"containerRef",c.default.createRef()),e}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(r||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,o=this.pauseResume,i=this.reset,s=this.restart,u=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:o,reset:i,start:s,update:u}):c.default.createElement("span",{className:n,ref:a,style:r})}}])&&d(t.prototype,n),r&&d(t,r),i}();h(R,"propTypes",{decimal:u.default.string,decimals:u.default.number,delay:u.default.number,easingFn:u.default.func,end:u.default.number.isRequired,formattingFn:u.default.func,onEnd:u.default.func,onStart:u.default.func,prefix:u.default.string,redraw:u.default.bool,separator:u.default.string,start:u.default.number,startOnMount:u.default.bool,suffix:u.default.string,style:u.default.object,useEasing:u.default.bool,preserveValue:u.default.bool}),h(R,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var x={innerHTML:null};t.default=R,t.useCountUp=function(e){var t=p(p({},R.defaultProps),e),n=t.start,r=t.formattingFn,o=b(a.useState("function"===typeof r?r(n):n),2),i=o[0],s=o[1],u=a.useRef(null),c=a.useRef(null),l=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=N(x,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return u.current=n,n},f=function(){var e=t.onReset;l().reset(),e({pauseResume:d,start:m,update:h})},m=function e(){var n=t.onStart,r=t.onEnd;l().reset(),l().start(function(){r({pauseResume:d,reset:f,start:e,update:h})}),n({pauseResume:d,reset:f,update:h})},d=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:f,start:m,update:h})},h=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:d,reset:f,start:m})};return a.useEffect(function(){var e=t.delay,n=t.onStart,r=t.onEnd;return t.startOnMount&&(c.current=setTimeout(function(){n({pauseResume:d,reset:f,update:h}),l().start(function(){clearTimeout(c.current),r({pauseResume:d,reset:f,start:m,update:h})})},1e3*e)),function(){clearTimeout(c.current),f()}},[]),{countUp:i,start:m,pauseResume:d,reset:f,update:h}}}},[["Csxb",0,1]]]);