(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},GiOn:function(e,t,n){var r,a;void 0===(a="function"===typeof(r=function(e,t,n){return function(e,t,n,r,a,o){function i(e){return"number"==typeof e&&!isNaN(e)}var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},formattingFn:function(e){var t,n,r,a,o,i,s=e<0;if(e=Math.abs(e).toFixed(u.decimals),t=(e+="").split("."),n=t[0],r=t.length>1?u.options.decimal+t[1]:"",u.options.useGrouping){for(a="",o=0,i=n.length;o<i;++o)0!==o&&o%3===0&&(a=u.options.separator+a),a=n[i-o-1]+a;n=a}return u.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return u.options.numerals[+e]}),r=r.replace(/[0-9]/g,function(e){return u.options.numerals[+e]})),(s?"-":"")+u.options.prefix+n+r+u.options.suffix},prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var s in u.options)o.hasOwnProperty(s)&&null!==o[s]&&(u.options[s]=o[s]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var c=0,l=["webkit","moz","ms","o"],f=0;f<l.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[l[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[f]+"CancelAnimationFrame"]||window[l[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-c)),a=window.setTimeout(function(){e(n+r)},r);return c=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),u.initialize=function(){return!!u.initialized||(u.error="",u.d="string"==typeof e?document.getElementById(e):e,u.d?(u.startVal=Number(t),u.endVal=Number(n),i(u.startVal)&&i(u.endVal)?(u.decimals=Math.max(0,r||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(a)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0,!0):(u.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(u.error="[CountUp] target is null or undefined",!1))},u.printValue=function(e){var t=u.options.formattingFn(e);"INPUT"===u.d.tagName?this.d.value=t:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=t:this.d.innerHTML=t},u.count=function(e){u.startTime||(u.startTime=e),u.timestamp=e;var t=e-u.startTime;u.remaining=u.duration-t,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(t,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(t,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(t/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(t/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),t<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(e){u.initialize()&&(u.callback=e,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(e){if(u.initialize()){if(!i(e=Number(e)))return void(u.error="[CountUp] update() - new endVal is not a number: "+e);u.error="",e!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=e,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))}},u.initialize()&&u.printValue(u.startVal)}})?r.call(t,n,t,e):r)||(e.exports=a)},LFbK:function(e,t){e.exports={CounterData:[{img:"/assets/images/resume/icon/1.png",count:1510,desc:"Satisfied Customers"},{img:"/assets/images/resume/icon/2.png",count:320,desc:"Total Speaker"},{img:"/assets/images/resume/icon/3.png",count:45810,desc:"Hours Worked"},{img:"/assets/images/resume/icon/4.png",count:563,desc:"Awwards Winning"}]}},PHNs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("17x9"),a=n("q1tI"),o=n("2W6z"),i=n("GiOn");function u(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=u(r),c=u(a),l=u(o),f=u(i);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){g(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r,a,o=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r=this,!(a=n)||"object"!==typeof a&&"function"!==typeof a?v(r):a}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){u=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R=function(e,t){var n=t.decimal,r=t.decimals,a=t.duration,o=t.easingFn,i=t.end,u=t.formattingFn,s=t.prefix,c=t.separator,l=t.start,p=t.suffix,d=t.useEasing;return new f.default(e,l,i,r,a,{decimal:n,easingFn:o,formattingFn:u,separator:c,prefix:s,suffix:p,useEasing:d,useGrouping:!!c})},F=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,a.Component);var t,n,r,o=b(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(v(e=o.call.apply(o,[this].concat(n))),"checkProps",function(t){var n=e.props,r=n.start,a=n.suffix,o=n.prefix,i=n.redraw,u=n.duration,s=n.separator,c=n.decimals,l=n.decimal,f=n.className;return u!==t.duration||r!==t.start||a!==t.suffix||o!==t.prefix||s!==t.separator||c!==t.decimals||l!==t.decimal||f!==t.className||i}),g(v(e),"createInstance",function(){return"function"===typeof e.props.children&&l.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),R(e.containerRef.current,e.props)}),g(v(e),"pauseResume",function(){var t=v(e),n=t.reset,r=t.restart,a=t.update,o=e.props.onPauseResume;e.instance.pauseResume(),o({reset:n,start:r,update:a})}),g(v(e),"reset",function(){var t=v(e),n=t.pauseResume,r=t.restart,a=t.update,o=e.props.onReset;e.instance.reset(),o({pauseResume:n,start:r,update:a})}),g(v(e),"restart",function(){e.reset(),e.start()}),g(v(e),"start",function(){var t=v(e),n=t.pauseResume,r=t.reset,a=t.restart,o=t.update,i=e.props,u=i.delay,s=i.onEnd,c=i.onStart,l=function(){return e.instance.start(function(){return s({pauseResume:n,reset:r,start:a,update:o})})};u>0?e.timeoutId=setTimeout(l,1e3*u):l(),c({pauseResume:n,reset:r,update:o})}),g(v(e),"update",function(t){var n=v(e),r=n.pauseResume,a=n.reset,o=n.restart,i=e.props.onUpdate;e.instance.update(t),i({pauseResume:r,reset:a,start:o})}),g(v(e),"containerRef",c.default.createRef()),e}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(r||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.containerRef,o=this.pauseResume,i=this.reset,u=this.restart,s=this.update;return"function"===typeof t?t({countUpRef:a,pauseResume:o,reset:i,start:u,update:s}):c.default.createElement("span",{className:n,ref:a,style:r})}}])&&m(t.prototype,n),r&&m(t,r),i}();g(F,"propTypes",{decimal:s.default.string,decimals:s.default.number,delay:s.default.number,easingFn:s.default.func,end:s.default.number.isRequired,formattingFn:s.default.func,onEnd:s.default.func,onStart:s.default.func,prefix:s.default.string,redraw:s.default.bool,separator:s.default.string,start:s.default.number,startOnMount:s.default.bool,suffix:s.default.string,style:s.default.object,useEasing:s.default.bool,preserveValue:s.default.bool}),g(F,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var O={innerHTML:null};t.default=F,t.useCountUp=function(e){var t=d(d({},F.defaultProps),e),n=t.start,r=t.formattingFn,o=w(a.useState("function"===typeof r?r(n):n),2),i=o[0],u=o[1],s=a.useRef(null),c=a.useRef(null),l=function(){var e=s.current;if(null!==e)return e;var n=function(){var e=R(O,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);u(e)},e}();return s.current=n,n},f=function(){var e=t.onReset;l().reset(),e({pauseResume:m,start:p,update:g})},p=function e(){var n=t.onStart,r=t.onEnd;l().reset(),l().start(function(){r({pauseResume:m,reset:f,start:e,update:g})}),n({pauseResume:m,reset:f,update:g})},m=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:f,start:p,update:g})},g=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:m,reset:f,start:p})};return a.useEffect(function(){var e=t.delay,n=t.onStart,r=t.onEnd;return t.startOnMount&&(c.current=setTimeout(function(){n({pauseResume:m,reset:f,update:g}),l().start(function(){clearTimeout(c.current),r({pauseResume:m,reset:f,start:p,update:g})})},1e3*e)),function(){clearTimeout(c.current),f()}},[]),{countUp:i,start:p,pauseResume:m,reset:f,update:g}}},kvHw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/about-us/counter",function(){return n("w6fj")}])},w6fj:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("PHNs"),i=n.n(o),u=n("LFbK"),s=n("1Yj4"),c=n("ok1R"),l=n("rhny"),f=a.a.createElement;t.default=function(){return f("section",{className:"resume counter bg-pink"},f(s.a,null,f(c.a,null,u.CounterData.map(function(e,t){return f(l.a,{xl:"3",xs:"6",className:"counter-container",key:t},f("div",{className:"counters"},f("img",{alt:"",className:"img-fluid counter-img",src:e.img}),f("div",{className:"counter-text"},f("h3",{className:"count-text counts"},f(i.a,{end:e.count})),f("h5",{className:"count-desc"},e.desc))))}))))}}},[["kvHw",0,1]]]);