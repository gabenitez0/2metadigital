(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{BuRG:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/footer/dark3",function(){return t("UiAb")}])},JX7q:function(e,a,t){"use strict";function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",function(){return s})},L3zb:function(e,a,t){"use strict";var s=t("wx14"),i=t("zLVn"),o=t("JX7q"),l=t("dI71"),n=t("q1tI"),r=t.n(n),c=t("17x9"),d=t.n(c),f=t("TSYQ"),u=t.n(f),m=t("33Jr"),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,l=e.bsSize,n=e.valid,c=e.invalid,d=e.tag,f=e.addon,b=e.plaintext,h=e.innerRef,N=Object(i.a)(e,p),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),w=d||("select"===o||"textarea"===o?o:"input"),x="form-control";b?(x+="-plaintext",w=d||"input"):"file"===o?x+="-file":"range"===o?x+="-range":g&&(x=f?null:"form-check-input"),N.size&&v.test(N.size)&&(Object(m.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=N.size,delete N.size);var j=Object(m.j)(u()(a,c&&"is-invalid",n&&"is-valid",!!l&&"form-control-"+l,x),t);return("input"===w||d&&"function"===typeof d)&&(N.type=o),N.children&&!b&&"select"!==o&&"string"===typeof w&&"select"!==w&&(Object(m.p)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete N.children),r.a.createElement(w,Object(s.a)({},N,{ref:h,className:j,"aria-invalid":c}))},a}(r.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},UiAb:function(e,a,t){"use strict";t.r(a);var s=t("q1tI"),i=t.n(s),o=t("1Yj4"),l=t("ok1R"),n=t("rhny"),r=t("jrRI"),c=t("L3zb"),d=i.a.createElement;a.default=function(){return d("footer",{className:"app2 bg footer2 p-0"},d("div",{className:"subscribe subscribe-2"},d(o.a,null,d(l.a,null,d(n.a,{lg:"8",md:"10",className:"offset-lg-2 offset-md-1"},d("div",{className:"subscribe"},d("div",{className:"center-content"},d(r.a,{className:"m-0"},d("div",{className:"flex"},d("i",{"aria-hidden":"true",className:"fa fa-envelope icon"}),d(c.a,{className:"form-control text-capitalize",name:"email",placeholder:"example@gmail.com",type:"email"}),d("div",{className:"button-primary"},d("button",{className:" btn btn-default btn-gradient text-white text-capitalize",type:"submit"},"subscribe now")))))))))),d("section",null,d(o.a,null,d(l.a,null,d(n.a,{lg:"3",md:"6",sm:"12"},d("div",{className:"logo-sec"},d("div",{className:"footer-title mobile-title p-t-0"},d("h3",{className:"text-white"},"About Us")),d("div",{className:"footer-contant"},d("img",{alt:"",className:"img-fluid footer-logo",src:"../assets/images/logo/1.png"}),d("div",{className:"footer-para"},d("p",{className:"text-white"},"Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim lorem sed do ")),d("ul",{className:"d-flex footer-social social"},d("li",{className:"footer-social-list"},d("a",{href:"#"},d("i",{"aria-hidden":"true",className:"fa fa-facebook"}))),d("li",{className:"footer-social-list"},d("a",{href:"#"},d("i",{"aria-hidden":"true",className:"fa fa-twitter"}))),d("li",{className:"footer-social-list"},d("a",{href:"#"},d("i",{"aria-hidden":"true",className:"fa fa-google"}))))))),d(n.a,{lg:"3",md:"6",sm:"12"},d("div",{className:"footer-title mobile-title"},d("h3",{className:"text-white"},"Post Tags")),d("div",{className:"footer-contant"},d("h5",{className:"footer-headings"},"Post Tags"),d("div",{className:"link-btns"},d("ul",null,d("li",{className:"buttons"},d("a",{href:"#"},"app")),d("li",{className:"buttons"},d("a",{href:"#"},"business")),d("li",{className:"buttons"},d("a",{href:"#"},"corporation")),d("li",{className:"buttons"},d("a",{href:"#"},"creative")),d("li",{className:"buttons"},d("a",{href:"#"},"design")),d("li",{className:"buttons"},d("a",{href:"#"},"fashion")),d("li",{className:"buttons"},d("a",{href:"#"},"food")),d("li",{className:"buttons"},d("a",{href:"#"},"mobile")))))),d(n.a,{lg:"2",md:"6",sm:"12"},d("div",{className:"footer-title mobile-title"},d("h3",{className:"text-white"},"blog categories")),d("div",{className:"footer-contant"},d("h5",{className:"footer-headings"},"Blog Categories"),d("div",null,d("ul",{className:"footer-lists"},d("li",null,d("a",{href:"#"},"App Review")),d("li",null,d("a",{href:"#"},"Audio Post")),d("li",null,d("a",{href:"#"},"Default Post")),d("li",null,d("a",{href:"#"},"Uncategorized")),d("li",null,d("a",{href:"#"},"Video Post")))))),d(n.a,{lg:"4",md:"6",sm:"12"},d("div",{className:"footer-title mobile-title"},d("h3",{className:"text-white"},"Contact Info")),d("div",{className:"footer-contant"},d("h5",{className:"footer-headings"},"Contact Info"),d("div",null,d("ul",{className:"footer-lists contacts"},d("li",null,d("i",{"aria-hidden":"true",className:"fa fa-map-marker"}),"Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod"),d("li",null,d("i",{"aria-hidden":"true",className:"fa fa-phone m-r-15"}),"(+066) 518 - 457 - 5181"),d("li",null,d("i",{"aria-hidden":"true",className:"fa fa-envelope m-r-15"}),"contact@gmail.com")))))))))}},dI71:function(e,a,t){"use strict";function s(e,a){return(s=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function i(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,s(e,a)}t.d(a,"a",function(){return i})},jrRI:function(e,a,t){"use strict";var s=t("wx14"),i=t("zLVn"),o=t("q1tI"),l=t.n(o),n=t("17x9"),r=t.n(n),c=t("TSYQ"),d=t.n(c),f=t("33Jr"),u=["className","cssModule","row","disabled","check","inline","tag"],m={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:f.n,className:r.a.string,cssModule:r.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.row,n=e.disabled,r=e.check,c=e.inline,m=e.tag,p=Object(i.a)(e,u),b=Object(f.j)(d()(a,!!o&&"row",r?"form-check":"form-group",!(!r||!c)&&"form-check-inline",!(!r||!n)&&"disabled"),t);return"fieldset"===m&&(p.disabled=n),l.a.createElement(m,Object(s.a)({},p,{className:b}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p}},[["BuRG",0,1]]]);