(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{"8NQ1":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=n("pPrs"),l=n("1Yj4"),o=n("ok1R"),s=n("rhny"),c=a.a.createElement;t.default=function(){var e=Object(i.useState)(!1),t=e[0],n=e[1];return c("section",{className:"music header",id:"header"},c("div",{className:"music-content"},c("div",{className:"music-bg bg bg-shadow-top"},c(r.a,{perspective:"20000",transitionSpeed:"3000"},c("div",{className:"text-center w-100"},c("div",{className:"img-height"},c("img",{alt:"",className:"img-fluid",src:"/assets/images/music/man.png"})))))),c("div",{className:"right-side"},c("div",{className:"circle"},c("img",{alt:"",className:"img-fluid",src:"/assets/images/music/icons/aero.png"})),c("h1",null,"2019 ",c("span",null,"18"))),c("div",{className:"left-side"},c("h6",{className:"follow-text"},"follow us"),c("ul",null,c("li",null,c("a",{href:"#"},c("img",{alt:"",className:"img-fluid",src:"/assets/images/music/icons/insta.png"}))),c("li",null,c("a",{href:"#"},c("img",{alt:"",className:"img-fluid",src:"/assets/images/music/icons/twitter.png"}))),c("li",null,c("a",{href:"#"},c("img",{alt:"",className:"img-fluid",src:"/assets/images/music/icons/facebook.png"}))))),c(l.a,{className:"music-container"},c(o.a,null,c(s.a,{md:"10",className:"offset-md-1"},c("div",{className:"play-bg d-flex"},c("div",{className:"song-text-container h-100"},c("div",{className:"d-flex h-100"},c("div",{className:"center-img"},c("img",{alt:"",className:"img-fluid",src:"/assets/images/music/icons/girl.png"})),c("div",{className:"song-text"},c("h5",{className:"text-white song-head"},"Latest Song"),c("h6",{className:"text-white song-sub-head"},"Zrial doj")))),c("div",{className:"play-setting m-auto"},c("div",{"aria-label":"media player",className:"jp-audio",id:"jp_container_1",role:"application"},c("div",{className:"jp-type-playlist"},c("div",{className:"jp-gui jp-interface p-0 d-flex"},c("div",{className:"jp-controls"},c("button",{className:"jp-play m-r-15",role:"button",tabIndex:"0"})),c("a",{onClick:function(){t?(n(!1),document.querySelector(".side-section").classList.remove("d-block")):(n(!0),document.querySelector(".side-section").classList.add("d-block"))}},c("i",{"aria-hidden":"true",className:"fa fa-ellipsis-v"})))))))))))}},Rgip:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/music/banner",function(){return n("8NQ1")}])},pPrs:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n("q1tI"),a=n.n(i),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},l=function(){return(l=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function o(e,t,n,i){e.style.transition="".concat(t," ").concat(n,"ms ").concat(i)}function s(e,t,n){return Math.min(Math.max(e,t),n)}var c=function(e,t){var n=this;this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=function(e){var t=e.height,n=Math.sqrt(Math.pow(e.width,2)+Math.pow(t,2));return{width:n,height:n}},this.setSize=function(e){var t=n.calculateGlareSize(e);n.glareEl.style.width="".concat(t.width,"px"),n.glareEl.style.height="".concat(t.height,"px")},this.update=function(e,t,i,a){n.updateAngle(e,t.glareReverse),n.updateOpacity(e,t,i,a)},this.updateAngle=function(e,t){var i=e.xPercentage,a=180/Math.PI,r=i?Math.atan2(e.yPercentage,-i)*a:0;n.glareAngle=r-(t?180:0)},this.updateOpacity=function(e,t,i,a){var r,l=e.xPercentage,o=e.yPercentage,c=t.glareMaxOpacity,p=i?-1:1,u=a?-1:1,d=t.glareReverse?-1:1;switch(t.glarePosition){case"top":r=-l*p*d;break;case"right":r=o*u*d;break;case"bottom":default:r=l*p*d;break;case"left":r=-o*u*d;break;case"all":r=Math.hypot(l,o)}var g=s(r,0,100);n.glareOpacity=g*c/100},this.render=function(e){var t=e.glareColor;n.glareEl.style.transform="rotate(".concat(n.glareAngle,"deg) translate(-50%, -50%)"),n.glareEl.style.opacity=n.glareOpacity.toString(),n.glareEl.style.background="linear-gradient(0deg, rgba(255,255,255,0) 0%, ".concat(t," 100%)")},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";var i={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)"},a=this.calculateGlareSize(e),r={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:"".concat(a.width,"px"),height:"".concat(a.height,"px")};Object.assign(this.glareWrapperEl.style,i),Object.assign(this.glareEl.style,r)},p=function(){var e=this;this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=function(t,n){e.updateTilt(t,n),e.updateTiltManualInput(t,n),e.updateTiltReverse(n),e.updateTiltLimits(n)},this.updateTilt=function(t,n){var i=t.yPercentage,a=n.tiltMaxAngleY;e.tiltAngleX=t.xPercentage*n.tiltMaxAngleX/100,e.tiltAngleY=i*a/100*-1},this.updateTiltManualInput=function(t,n){var i=n.tiltAngleXManual,a=n.tiltAngleYManual,r=n.tiltMaxAngleX,l=n.tiltMaxAngleY;(null!==i||null!==a)&&(e.tiltAngleX=null!==i?i:0,e.tiltAngleY=null!==a?a:0,t.xPercentage=100*e.tiltAngleX/r,t.yPercentage=100*e.tiltAngleY/l)},this.updateTiltReverse=function(t){var n=t.tiltReverse?-1:1;e.tiltAngleX=n*e.tiltAngleX,e.tiltAngleY=n*e.tiltAngleY},this.updateTiltLimits=function(t){var n=t.tiltAxis;e.tiltAngleX=s(e.tiltAngleX,-90,90),e.tiltAngleY=s(e.tiltAngleY,-90,90),n&&(e.tiltAngleX="x"===n?e.tiltAngleX:0,e.tiltAngleY="y"===n?e.tiltAngleY:0)},this.updateTiltAnglesPercentage=function(t){var n=t.tiltMaxAngleY;e.tiltAngleXPercentage=e.tiltAngleX/t.tiltMaxAngleX*100,e.tiltAngleYPercentage=e.tiltAngleY/n*100},this.render=function(t){t.style.transform+="rotateX(".concat(e.tiltAngleX,"deg) rotateY(").concat(e.tiltAngleY,"deg) ")}},u=l(l({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"}),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},t.tilt=null,t.glare=null,t.addDeviceOrientationEventListener=function(){return function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function l(e){try{s(i.next(e))}catch(e){r(e)}}function o(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(l,o)}s((i=i.apply(e,t||[])).next())})}(t,void 0,void 0,function(){var e;return function(e,t){var n,i,a,r,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,i=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){l=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){l.label=r[1];break}if(6===r[0]&&l.label<a[1]){l.label=a[1],a=r;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(r);break}a[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}}(this,function(t){switch(t.label){case 0:if(window.DeviceOrientationEvent,"function"!=typeof DeviceOrientationEvent.requestPermission)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,DeviceOrientationEvent.requestPermission()];case 2:return"granted"===t.sent()&&window.addEventListener("deviceorientation",this.onMove),[2];case 3:return e=t.sent(),console.error(e),[2];case 4:return window.addEventListener("deviceorientation",this.onMove),[2]}})})},t.setSize=function(){t.setWrapperElSize(),t.glare&&t.glare.setSize(t.wrapperEl.size)},t.mainLoop=function(e){null!==t.wrapperEl.updateAnimationId&&cancelAnimationFrame(t.wrapperEl.updateAnimationId),t.processInput(e),t.update(e.type),t.wrapperEl.updateAnimationId=requestAnimationFrame(t.renderFrame)},t.onEnter=function(e){var n=t.props.onEnter;t.setSize(),t.wrapperEl.node.style.willChange="transform",t.setTransitions(),n&&n(e.type)},t.onMove=function(e){t.mainLoop(e),t.emitOnMove(e)},t.onLeave=function(e){var n=t.props.onLeave;if(t.setTransitions(),n&&n(e.type),t.props.reset){var i=new CustomEvent("autoreset");t.onMove(i)}},t.processInput=function(e){var n=t.props.scale;switch(e.type){case"mousemove":t.wrapperEl.clientPosition.x=e.pageX,t.wrapperEl.clientPosition.y=e.pageY,t.wrapperEl.scale=n;break;case"touchmove":t.wrapperEl.clientPosition.x=e.touches[0].pageX,t.wrapperEl.clientPosition.y=e.touches[0].pageY,t.wrapperEl.scale=n;break;case"deviceorientation":t.processInputDeviceOrientation(e),t.wrapperEl.scale=n;break;case"autoreset":var i=t.props,a=i.tiltAngleYInitial/i.tiltMaxAngleY*100;t.wrapperEl.clientPosition.xPercentage=s(i.tiltAngleXInitial/i.tiltMaxAngleX*100,-100,100),t.wrapperEl.clientPosition.yPercentage=s(a,-100,100),t.wrapperEl.scale=1}},t.processInputDeviceOrientation=function(e){if(e.gamma&&e.beta&&t.props.gyroscope){var n=t.props,i=n.tiltMaxAngleY,a=e.gamma;t.wrapperEl.clientPosition.xPercentage=e.beta/n.tiltMaxAngleX*100,t.wrapperEl.clientPosition.yPercentage=a/i*100,t.wrapperEl.clientPosition.xPercentage=s(t.wrapperEl.clientPosition.xPercentage,-100,100),t.wrapperEl.clientPosition.yPercentage=s(t.wrapperEl.clientPosition.yPercentage,-100,100)}},t.update=function(e){var n=t.props,i=n.tiltEnable,a=n.flipVertically,r=n.flipHorizontally;"autoreset"!==e&&"deviceorientation"!==e&&"propChanged"!==e&&t.updateClientInput(),i&&t.tilt.update(t.wrapperEl.clientPosition,t.props),t.updateFlip(),t.tilt.updateTiltAnglesPercentage(t.props),t.glare&&t.glare.update(t.wrapperEl.clientPosition,t.props,a,r)},t.updateClientInput=function(){var e,n;if(t.props.trackOnWindow){var i=t.wrapperEl.clientPosition,a=i.x;e=i.y/window.innerHeight*200-100,n=a/window.innerWidth*200-100}else{var r=t.wrapperEl,l=r.size,o=r.clientPosition;e=(o.y-l.top)/l.height*200-100,n=((a=o.x)-l.left)/l.width*200-100}t.wrapperEl.clientPosition.xPercentage=s(e,-100,100),t.wrapperEl.clientPosition.yPercentage=s(n,-100,100)},t.updateFlip=function(){var e=t.props,n=e.flipHorizontally;e.flipVertically&&(t.tilt.tiltAngleX+=180,t.tilt.tiltAngleY*=-1),n&&(t.tilt.tiltAngleY+=180)},t.renderFrame=function(){t.resetWrapperElTransform(),t.renderPerspective(),t.tilt.render(t.wrapperEl.node),t.renderScale(),t.glare&&t.glare.render(t.props)},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){this.tilt=new p,this.initGlare(),this.addEventListeners();var e=new CustomEvent("autoreset");this.mainLoop(e);var t=new CustomEvent("initial");this.emitOnMove(t)},t.prototype.componentWillUnmount=function(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()},t.prototype.componentDidUpdate=function(){var e=new CustomEvent("propChanged");this.mainLoop(e)},t.prototype.addEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;window.addEventListener("resize",this.setSize),t&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),n&&this.addDeviceOrientationEventListener()},t.prototype.removeEventListeners=function(){var e=this.props,t=e.trackOnWindow,n=e.gyroscope;window.removeEventListener("resize",this.setSize),t&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),n&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)},t.prototype.setWrapperElSize=function(){var e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY},t.prototype.initGlare=function(){var e=this.props;e.glareEnable&&(this.glare=new c(this.wrapperEl.size,e.glareBorderRadius),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))},t.prototype.emitOnMove=function(e){var t=this.props.onMove;if(t){var n=0,i=0;this.glare&&(n=this.glare.glareAngle,i=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,n,i,e.type)}},t.prototype.resetWrapperElTransform=function(){this.wrapperEl.node.style.transform=""},t.prototype.renderPerspective=function(){this.wrapperEl.node.style.transform+="perspective(".concat(this.props.perspective,"px) ")},t.prototype.renderScale=function(){var e=this.wrapperEl.scale;this.wrapperEl.node.style.transform+="scale3d(".concat(e,",").concat(e,",").concat(e,")")},t.prototype.setTransitions=function(){var e=this.props,t=e.transitionSpeed,n=e.transitionEasing;o(this.wrapperEl.node,"all",t,n),this.glare&&o(this.glare.glareEl,"opacity",t,n)},t.prototype.render=function(){var e=this,t=this.props;return a.a.createElement("div",{ref:function(t){return e.wrapperEl.node=t},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t.className,style:t.style},t.children)},t.defaultProps=u,t}(i.PureComponent)}},[["Rgip",0,1]]]);