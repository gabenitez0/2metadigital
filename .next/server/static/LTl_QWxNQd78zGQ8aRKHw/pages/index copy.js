module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("X20c");


/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "GsEv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("luDK");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "X20c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./public/assets/scss/landing.scss
var landing = __webpack_require__("fBhD");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./landing/header.js
var __jsx = external_react_default.a.createElement;



const Header = () => {
  const {
    0: navbar,
    1: setNavbar
  } = Object(external_react_["useState"])(false);

  const toggleNav = () => {
    setNavbar(!navbar);
  };

  return __jsx(external_react_["Fragment"], null, __jsx("header", null, __jsx(external_reactstrap_["Container"], {
    fluid: true
  }, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], null, __jsx("div", {
    className: "top-header"
  }, __jsx("div", {
    className: "logo"
  }, __jsx("a", {
    className: "navbar-brand",
    href: "#"
  }, __jsx("img", {
    src: "assets/images/landing/logo.png",
    alt: "logo"
  }))), __jsx("div", {
    className: "main-menu m-x-auto",
    id: "nav"
  }, __jsx("nav", {
    id: "navbar-example2",
    className: "navbar navbar-expand-lg navbar-light"
  }, __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#scroll-spy",
    "aria-controls": "scroll-spy",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    onClick: toggleNav
  }, __jsx("span", {
    className: "navbar-toggler-icon"
  })), __jsx("div", {
    className: `collapse navbar-collapse ${navbar === true ? 'show' : ''}`,
    id: "scroll-spy"
  }, __jsx("ul", {
    className: "navbar-nav mx-auto nav"
  }, __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link active",
    href: "#home"
  }, "Home")), __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link",
    href: "#pages"
  }, "pages")), __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link",
    href: "#portfolio"
  }, "portfolio")), __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link",
    href: "#feature"
  }, "features")), __jsx("li", {
    className: "nav-item"
  }, __jsx("a", {
    className: "nav-link",
    href: "https://pixelstrap.freshdesk.com"
  }, "support")))))), __jsx("div", {
    className: "purchase-block"
  }, __jsx("span", {
    className: "cartpurchase"
  }, __jsx("i", {
    className: "fa fa-cart-arrow-down"
  })), __jsx("a", {
    className: "purchase-btn",
    href: "https://themeforest.net/user/pixelstrap/portfolio"
  }, "purchase"))))))));
};

/* harmony default export */ var header = (Header);
// CONCATENATED MODULE: ./landing/git-section.js
var git_section_jsx = external_react_default.a.createElement;



const GitSection = () => git_section_jsx(external_react_default.a.Fragment, null, git_section_jsx("section", {
  className: "home-section pb-0",
  id: "home"
}, git_section_jsx(external_reactstrap_["Container"], null, git_section_jsx(external_reactstrap_["Row"], null, git_section_jsx(external_reactstrap_["Col"], {
  sm: "8",
  className: "offset-sm-2"
}, git_section_jsx("div", null, git_section_jsx("div", {
  className: "home-container"
}, git_section_jsx("div", {
  className: "home-logo-container"
}, git_section_jsx("img", {
  src: "assets/images/landing/home/main-icon.png",
  alt: "",
  className: "img-fluid logo"
})), git_section_jsx("h1", null, "One stop for all one page landings..."), git_section_jsx("p", null, "Unice is Perfect landing HTML template for any business. it has all features and modules to create your amazing landing page. you can use this template for selling Agency, app landding, coffee, event, gym, music, digital, pizza, resume, sass, wedding, yoga etc.")))))), git_section_jsx("div", {
  className: "home-contain"
}, git_section_jsx("ul", null, git_section_jsx("li", {
  className: "inner-slide1"
}, git_section_jsx("img", {
  src: "assets/images/landing/home/2.png",
  className: "img-fluid",
  alt: ""
})), git_section_jsx("li", {
  className: "inner-slide2"
}, git_section_jsx("img", {
  src: "assets/images/landing/home/3.png",
  className: "img-fluid",
  alt: ""
})), git_section_jsx("li", {
  className: "inner-slide4"
}, git_section_jsx("img", {
  src: "assets/images/landing/home/4.png",
  className: "img-fluid",
  alt: ""
})), git_section_jsx("li", {
  className: "inner-slide5"
}, git_section_jsx("img", {
  src: "assets/images/landing/home/5.png",
  className: "img-fluid",
  alt: ""
})))), git_section_jsx("div", {
  className: "animate-gif"
}, git_section_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "img-fluid hom-suar1",
  alt: ""
}), git_section_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "img-fluid hom-suar2",
  alt: ""
}), git_section_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "img-fluid hom-ract1",
  alt: ""
}), git_section_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "img-fluid hom-ract2",
  alt: ""
}), git_section_jsx("img", {
  src: "assets/images/landing/animate-icon/round-3.png",
  className: "img-fluid hom-round1",
  alt: ""
}), git_section_jsx("img", {
  src: "assets/images/landing/animate-icon/round-4.png",
  className: "img-fluid hom-round2",
  alt: ""
}), git_section_jsx("img", {
  src: "assets/images/landing/animate-icon/sib-2.png",
  className: "img-fluid hom-sib2",
  alt: ""
})), git_section_jsx("div", {
  className: "inner-slide3"
}, git_section_jsx("img", {
  src: "assets/images/landing/home/12.png",
  className: "main-gif img-fluid",
  alt: ""
})))) // {/* <!--gif section end--> */}
;

/* harmony default export */ var git_section = (GitSection);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./landing/demo.js
var demo_jsx = external_react_default.a.createElement;




const Demo = () => demo_jsx("section", {
  className: "app-preview-section",
  id: "pages"
}, demo_jsx(external_reactstrap_["Container"], {
  fluid: true
}, demo_jsx("div", {
  className: "position-relative o-hidden"
}, demo_jsx("div", {
  className: "title"
}, demo_jsx("h2", null, "+13 Pre Define "), demo_jsx("h6", null, "demolayouts"), demo_jsx("hr", {
  className: "bottom-border"
}))), demo_jsx(external_reactstrap_["Container"], null, demo_jsx(external_reactstrap_["Row"], null, demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/agency"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Agency Landing ")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-1"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/app1"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Enterprise App Landing ")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-2"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/app2"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Morden App Landing")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-3"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/event"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Event Landing")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-4"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/gym"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Gym Landing")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-5"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/music"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "music Landing")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-6"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/resume"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Resume Landing")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-7"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/modern-sass"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Enterprise sass Landing")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-8"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/enterprice-sass"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Modern Sass Landing")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-9"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/wedding"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Wedding Landing ")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-10"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/yoga"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Yoga Landing")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-11"
}))))), demo_jsx(external_reactstrap_["Col"], {
  xl: "4",
  sm: "6",
  className: "text-center demo-effects"
}, demo_jsx(link_default.a, {
  href: "/layouts/portfolioLayouts"
}, demo_jsx("a", {
  className: "app-preview demo-layouts"
}, demo_jsx("div", {
  className: "trans-section"
}, demo_jsx("h4", {
  className: "preview-header"
}, "Portfolio Metro Landing")), demo_jsx("div", {
  className: "layout-images"
}, demo_jsx("div", {
  className: "layout-container image-13"
})))))))), demo_jsx("div", {
  className: "animat-demo"
}, demo_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "img-fluid demo-ract1",
  alt: ""
}), demo_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "img-fluid demo-squar",
  alt: ""
}), demo_jsx("img", {
  src: "assets/images/landing/animate-icon/sib-1.png",
  className: "img-fluid demo-sib1",
  alt: ""
}), demo_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "img-fluid demo-ract3",
  alt: ""
})));

/* harmony default export */ var demo = (Demo);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./landing/portfolio.js

var portfolio_jsx = external_react_default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3
    }
  }]
};

const Portfolio = () => portfolio_jsx("section", {
  className: "portfolio-section",
  id: "portfolio"
}, portfolio_jsx("div", {
  className: "portfolio-back"
}, portfolio_jsx("h1", null, "ortfolio page")), portfolio_jsx(external_reactstrap_["Container"], null, portfolio_jsx(external_reactstrap_["Row"], null, portfolio_jsx(external_reactstrap_["Col"], {
  xs: "12"
}, portfolio_jsx("div", {
  className: "title"
}, portfolio_jsx("h2", null, "portfolio"), portfolio_jsx("h6", null, "portfolio"), portfolio_jsx("hr", {
  className: "bottom-border"
}))), portfolio_jsx(external_reactstrap_["Col"], {
  xs: "12"
}, portfolio_jsx(external_react_slick_default.a, Object(esm_extends["a" /* default */])({
  className: "slide-center-3"
}, settings), portfolio_jsx("div", null, portfolio_jsx(link_default.a, {
  href: "/portfolio/centered-slide"
}, portfolio_jsx("div", {
  className: "port-img"
}, portfolio_jsx("img", {
  src: "assets/images/landing/portfolio/1.png",
  className: "img-fluid blur-up lazyload",
  alt: ""
})))), portfolio_jsx("div", null, portfolio_jsx(link_default.a, {
  href: "/portfolio/full-width-4-grid"
}, portfolio_jsx("div", {
  className: "port-img"
}, portfolio_jsx("img", {
  src: "assets/images/landing/portfolio/2.png",
  className: "img-fluid blur-up lazyload",
  alt: ""
})))), portfolio_jsx("div", null, portfolio_jsx(link_default.a, {
  href: "/portfolio/portfolio-detail-2"
}, portfolio_jsx("div", {
  className: "port-img"
}, portfolio_jsx("img", {
  src: "assets/images/landing/portfolio/3.png",
  className: "img-fluid blur-up lazyload",
  alt: ""
})))), portfolio_jsx("div", null, portfolio_jsx(link_default.a, {
  href: "/portfolio/full-width-4-grid"
}, portfolio_jsx("div", {
  className: "port-img"
}, portfolio_jsx("img", {
  src: "assets/images/landing/portfolio/2.png",
  className: "img-fluid blur-up lazyload",
  alt: ""
})))))))), portfolio_jsx("div", {
  className: "animat-potfolio"
}, portfolio_jsx("img", {
  src: "assets/images/landing/animate-icon/sib-1.png",
  className: "img-fluid port-sib",
  alt: ""
}), portfolio_jsx("img", {
  src: "assets/images/landing/animate-icon/round-2.png",
  className: "img-fluid port-round",
  alt: ""
}), portfolio_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "img-fluid port-ract",
  alt: ""
}), portfolio_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "img-fluid port-squar",
  alt: ""
})));

/* harmony default export */ var portfolio = (Portfolio);
// CONCATENATED MODULE: ./landing/whatinside.js
var whatinside_jsx = external_react_default.a.createElement;



const WhatInSide = () => whatinside_jsx("section", {
  className: "whatinside",
  id: "whatinside"
}, whatinside_jsx(external_reactstrap_["Container"], null, whatinside_jsx("div", {
  className: "position-relative o-hidden"
}, whatinside_jsx("div", {
  className: "title"
}, whatinside_jsx("h2", null, "What's inside Unice "), whatinside_jsx("p", null, "Unice is ready with tons of demos and elements which is perfect for your project"), whatinside_jsx("hr", {
  className: "bottom-border"
}))), whatinside_jsx(external_reactstrap_["Row"], null, whatinside_jsx(external_reactstrap_["Col"], {
  md: "4",
  sm: "6"
}, whatinside_jsx("div", {
  className: "inside_box"
}, whatinside_jsx("h3", null, "13+ Home layout"), whatinside_jsx("p", null, "Creative layout for you"))), whatinside_jsx(external_reactstrap_["Col"], {
  md: "4",
  sm: "6"
}, whatinside_jsx("div", {
  className: "inside_box"
}, whatinside_jsx("h3", null, "25+ Blog Layout"), whatinside_jsx("p", null, "theme included 25 plus attractive layouts"))), whatinside_jsx(external_reactstrap_["Col"], {
  md: "4",
  sm: "6"
}, whatinside_jsx("div", {
  className: "inside_box"
}, whatinside_jsx("h3", null, "20+ Feature pages"), whatinside_jsx("p", null, "All Feature pages added with theme"))), whatinside_jsx(external_reactstrap_["Col"], {
  md: "4",
  sm: "6"
}, whatinside_jsx("div", {
  className: "inside_box"
}, whatinside_jsx("h3", null, "30+ Portfolio layouts"), whatinside_jsx("p", null, "30 plus layouts added for show you portfolio"))), whatinside_jsx(external_reactstrap_["Col"], {
  md: "4",
  sm: "6"
}, whatinside_jsx("div", {
  className: "inside_box"
}, whatinside_jsx("h3", null, "11+ Extra pages"), whatinside_jsx("p", null, "11 extra bones pages added"))), whatinside_jsx(external_reactstrap_["Col"], {
  md: "4",
  sm: "6"
}, whatinside_jsx("div", {
  className: "inside_box"
}, whatinside_jsx("h3", null, "25+ Elements"), whatinside_jsx("p", null, "Yes, theme included 25 unique elements"))))));

/* harmony default export */ var whatinside = (WhatInSide);
// CONCATENATED MODULE: ./landing/blog.js

var blog_jsx = external_react_default.a.createElement;




var blog_settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3
    }
  }]
};

const Blog = () => blog_jsx("section", {
  className: "portfolio-section",
  id: "blog"
}, blog_jsx("div", {
  className: "portfolio-back"
}, blog_jsx("h1", null, "Blog page")), blog_jsx(external_reactstrap_["Container"], null, blog_jsx(external_reactstrap_["Row"], null, blog_jsx(external_reactstrap_["Col"], {
  xs: "12"
}, blog_jsx("div", {
  className: "title"
}, blog_jsx("h2", null, "Blog"), blog_jsx("h6", null, "Blog pages"), blog_jsx("hr", {
  className: "bottom-border"
}))), blog_jsx(external_reactstrap_["Col"], {
  xs: "12"
}, blog_jsx(external_react_slick_default.a, Object(esm_extends["a" /* default */])({
  className: "slide-center-3"
}, blog_settings), blog_jsx("div", null, blog_jsx(link_default.a, {
  href: "/blog/blog-grid/column-left-sidebar"
}, blog_jsx("div", {
  className: "port-img"
}, blog_jsx("img", {
  src: "assets/images/landing/blog/1.jpg",
  className: "img-fluid blur-up lazyload",
  alt: ""
})))), blog_jsx("div", null, blog_jsx(link_default.a, {
  href: "/blog/blog-grid/column-no-sidebar"
}, blog_jsx("div", {
  className: "port-img"
}, blog_jsx("img", {
  src: "assets/images/landing/blog/2.jpg",
  className: "img-fluid blur-up lazyload",
  alt: ""
})))), blog_jsx("div", null, blog_jsx(link_default.a, {
  href: "/blog/blog-detail/detail-video"
}, blog_jsx("div", {
  className: "port-img"
}, blog_jsx("img", {
  src: "assets/images/landing/blog/3.jpg",
  className: "img-fluid blur-up lazyload",
  alt: ""
})))), blog_jsx("div", null, blog_jsx(link_default.a, {
  href: "/blog/blog-masonary/fullwidth-3"
}, blog_jsx("div", {
  className: "port-img"
}, blog_jsx("img", {
  src: "assets/images/landing/blog/4.jpg",
  className: "img-fluid blur-up lazyload",
  alt: ""
})))), blog_jsx("div", null, blog_jsx(link_default.a, {
  href: "/blog/blog-detail/detail-no-sidebar"
}, blog_jsx("div", {
  className: "port-img"
}, blog_jsx("img", {
  src: "assets/images/landing/blog/5.jpg",
  className: "img-fluid blur-up lazyload",
  alt: ""
})))))))), blog_jsx("div", {
  className: "animat-potfolio"
}, blog_jsx("img", {
  src: "assets/images/landing/animate-icon/sib-1.png",
  className: "img-fluid port-sib",
  alt: ""
}), blog_jsx("img", {
  src: "assets/images/landing/animate-icon/round-2.png",
  className: "img-fluid port-round",
  alt: ""
}), blog_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "img-fluid port-ract",
  alt: ""
}), blog_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "img-fluid port-squar",
  alt: ""
})));

/* harmony default export */ var blog = (Blog);
// CONCATENATED MODULE: ./landing/elements.js
var elements_jsx = external_react_default.a.createElement;



const Elements = () => elements_jsx("section", {
  className: "elemant-bounce"
}, elements_jsx("div", {
  className: "elemant-back"
}, elements_jsx("h1", null, "extra bonus element")), elements_jsx(external_reactstrap_["Container"], null, elements_jsx(external_reactstrap_["Row"], null, elements_jsx(external_reactstrap_["Col"], {
  xs: "12"
}, elements_jsx("div", {
  className: "title"
}, elements_jsx("h2", null, "Element"), elements_jsx("h6", null, "extra-bonus"), elements_jsx("hr", {
  className: "bottom-border"
}))), elements_jsx(external_reactstrap_["Col"], {
  xs: "12"
}, elements_jsx("div", {
  className: "elemant-bounce-contant"
}, elements_jsx("img", {
  src: "assets/images/landing/element/1.png",
  className: "img-fluid",
  alt: "element-img"
}))))), elements_jsx("div", {
  className: "animat-elimat"
}, elements_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "img-fluid element-rect",
  alt: ""
}), elements_jsx("img", {
  src: "assets/images/landing/animate-icon/round-2.png",
  className: "img-fluid element-round",
  alt: ""
}), elements_jsx("img", {
  src: "assets/images/landing/animate-icon/sib-1.png",
  className: "img-fluid element-sib",
  alt: ""
}), elements_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "img-fluid element-squar",
  alt: ""
})));

/* harmony default export */ var landing_elements = (Elements);
// CONCATENATED MODULE: ./landing/features.js
var features_jsx = external_react_default.a.createElement;



const Features = () => features_jsx("section", {
  className: "advance-feature",
  id: "feature"
}, features_jsx("div", {
  className: "core-back"
}, features_jsx("h1", null, "core", features_jsx("br", null), " feature")), features_jsx("div", {
  className: "features-container"
}, features_jsx(external_reactstrap_["Container"], null, features_jsx(external_reactstrap_["Row"], {
  className: "d-flex justify-content-center"
}, features_jsx(external_reactstrap_["Col"], {
  xs: "12"
}, features_jsx("div", {
  className: "title"
}, features_jsx("h2", null, "core features"), features_jsx("h6", null, "core features"), features_jsx("hr", {
  className: "bottom-border"
}))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/1.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/2.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/3.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/4.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/5.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/6.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/7.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/8.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/9.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/10.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/11.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/12.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/13.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/14.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/15.png",
  alt: "",
  className: "img-fluid feature-img"
})))), features_jsx("div", {
  className: "feature-main"
}, features_jsx("div", {
  className: "feature"
}, features_jsx("div", {
  className: "feature-icon"
}, features_jsx("img", {
  src: "assets/images/landing/features-icon/16.png",
  alt: "",
  className: "img-fluid feature-img"
}))))))), features_jsx("div", {
  className: "animat-cor"
}, features_jsx("img", {
  src: "assets/images/landing/animate-icon/sib-1.png",
  className: "cor-sib",
  alt: ""
}), features_jsx("img", {
  src: "assets/images/landing/animate-icon/round-2.png",
  className: "cor-round",
  alt: ""
}), features_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "cor-ract",
  alt: ""
}), features_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "cor-squar1",
  alt: ""
}), features_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "cor-squar2",
  alt: ""
})));

/* harmony default export */ var features = (Features);
// CONCATENATED MODULE: ./landing/testimonial.js

var testimonial_jsx = external_react_default.a.createElement;



var testimonial_settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Testimonial = () => testimonial_jsx("section", {
  className: "testimonial-main"
}, testimonial_jsx("div", {
  className: "testimonial-back"
}, testimonial_jsx("h1", null, "testimonial")), testimonial_jsx(external_reactstrap_["Container"], null, testimonial_jsx(external_reactstrap_["Row"], null, testimonial_jsx(external_reactstrap_["Col"], {
  xs: "12"
}, testimonial_jsx("div", {
  className: "title"
}, testimonial_jsx("h2", null, "testimonial"), testimonial_jsx("h6", null, "happy-client"), testimonial_jsx("hr", {
  className: "bottom-border"
}))), testimonial_jsx(external_reactstrap_["Col"], {
  xl: "8",
  className: "offset-xl-2"
}, testimonial_jsx("div", {
  className: "testimonial-contain"
}, testimonial_jsx(external_reactstrap_["Row"], null, testimonial_jsx(external_reactstrap_["Col"], {
  md: "8",
  className: "offset-md-2 pl-md-0"
}, testimonial_jsx(external_react_slick_default.a, Object(esm_extends["a" /* default */])({
  className: "slide-1 testimonial-right"
}, testimonial_settings), testimonial_jsx("div", null, testimonial_jsx("div", {
  className: "testimonial-right"
}, testimonial_jsx("div", {
  className: "media"
}, testimonial_jsx("img", {
  src: "assets/images/landing/testimonial.png",
  alt: "testimonial"
}), testimonial_jsx("div", {
  className: "media-body"
}, testimonial_jsx("h5", null, "fcastillo18"), "Dominican Republic, Member since February 2019")), testimonial_jsx("p", null, "The truth is that this a amazing template, they have done an incredible job. Beside that, I had a little situation and with their help I could be able to solve it, they give the right solution at once! Thanks!"))), testimonial_jsx("div", null, testimonial_jsx("div", {
  className: "testimonial-right"
}, testimonial_jsx("div", {
  className: "media"
}, testimonial_jsx("img", {
  src: "assets/images/landing/testimonial.png",
  alt: "testimonial"
}), testimonial_jsx("div", {
  className: "media-body"
}, testimonial_jsx("h5", null, "drinkstuff"), "United Kingdom, Member since April 2019")), testimonial_jsx("p", null, "Great theme! Exactly what we were looking for for our new website. We had an issue with the mega menus and we contacted support with a video demo of the issue and example HTML/CSS via FreshDesk. The issue was fixed within 24 hours. Superb!"))), testimonial_jsx("div", null, testimonial_jsx("div", {
  className: "testimonial-right"
}, testimonial_jsx("div", {
  className: "media"
}, testimonial_jsx("img", {
  src: "assets/images/landing/testimonial.png",
  alt: "testimonial"
}), testimonial_jsx("div", {
  className: "media-body"
}, testimonial_jsx("h5", null, "adelinabrask1988"), "Denmark, Member since May 2019")), testimonial_jsx("p", null, "Everything is perfect about this theme. And if something is not perfect the team has helped me fast and friendly to adapt what I needed. It's a complete and complex theme that has saved me money on extra apps . I recommend it from the heart. Especially the team around it.")))))))))), testimonial_jsx("div", {
  className: "animat-test"
}, testimonial_jsx("img", {
  src: "assets/images/landing/animate-icon/sib-1.png",
  className: "test-sib",
  alt: ""
}), testimonial_jsx("img", {
  src: "assets/images/landing/animate-icon/round-2.png",
  className: "test-round",
  alt: ""
}), testimonial_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "test-ract",
  alt: ""
}), testimonial_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "test-squar1",
  alt: ""
}), testimonial_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "test-squar2",
  alt: ""
})));

/* harmony default export */ var testimonial = (Testimonial);
// CONCATENATED MODULE: ./landing/rat.js
var rat_jsx = external_react_default.a.createElement;



const Rat = () => rat_jsx("section", {
  className: "rate-us-section"
}, rat_jsx("div", {
  className: "rate-us-back"
}, rat_jsx("h1", null, "Any Problem")), rat_jsx(external_reactstrap_["Container"], null, rat_jsx(external_reactstrap_["Row"], null, rat_jsx(external_reactstrap_["Col"], {
  xs: "12"
}, rat_jsx("div", {
  className: "rate-us-contain"
}, rat_jsx("div", null, rat_jsx("div", {
  className: "rating-porson"
}, rat_jsx("img", {
  src: "assets/images/landing/rating-parson.png",
  className: "img-fluid",
  alt: "rating-paron"
})), rat_jsx("h1", null, "Have Any Problem ?"), rat_jsx("p", null, "No Worries-Support Services is Always To Support You"), rat_jsx("a", {
  href: "#",
  className: "btn-gradient "
}, "purchase now"), rat_jsx("ul", {
  className: "ratin-start"
}, rat_jsx("li", null, rat_jsx("i", {
  className: "fa fa-star"
})), rat_jsx("li", null, rat_jsx("i", {
  className: "fa fa-star"
})), rat_jsx("li", null, rat_jsx("i", {
  className: "fa fa-star"
})), rat_jsx("li", null, rat_jsx("i", {
  className: "fa fa-star"
})), rat_jsx("li", null, rat_jsx("i", {
  className: "fa fa-star"
})))))))), rat_jsx("div", {
  className: "animat-rat"
}, rat_jsx("img", {
  src: "assets/images/landing/animate-icon/sib-1.png",
  className: "rat-sib",
  alt: ""
}), rat_jsx("img", {
  src: "assets/images/landing/animate-icon/round-2.png",
  className: "rat-round",
  alt: ""
}), rat_jsx("img", {
  src: "assets/images/landing/animate-icon/ract.png",
  className: "rat-ract",
  alt: ""
}), rat_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "rat-squar1",
  alt: ""
}), rat_jsx("img", {
  src: "assets/images/landing/animate-icon/squar.png",
  className: "rat-squar2",
  alt: ""
})));

/* harmony default export */ var rat = (Rat);
// CONCATENATED MODULE: ./landing/footer.js
var footer_jsx = external_react_default.a.createElement;



const Footer = () => footer_jsx("footer", {
  className: "footer-main"
}, footer_jsx(external_reactstrap_["Container"], null, footer_jsx(external_reactstrap_["Row"], null, footer_jsx(external_reactstrap_["Col"], {
  xs: "6"
}, footer_jsx("div", {
  className: "footer-left"
}, footer_jsx("div", {
  className: "footer-logo"
}, footer_jsx("img", {
  src: "assets/images/landing/logo.png",
  alt: "footer-logo",
  className: "img-fluid"
})))), footer_jsx(external_reactstrap_["Col"], {
  xs: "6",
  className: "align-self-center"
}, footer_jsx("div", {
  className: "footer-right"
}, footer_jsx("p", null, "\xA9 2020 All right reserved"))))));

/* harmony default export */ var footer = (Footer);
// CONCATENATED MODULE: ./pages/index copy.js
var index_copy_jsx = external_react_default.a.createElement;


 // import Custom Components













const Home = () => {
  Object(external_react_["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#10266b');
    document.body.style.setProperty('--secondary', '#464545');
    document.body.style.setProperty('--light', '#1F357D');
    document.body.style.setProperty('--dark', '#04185B');
  });
  return index_copy_jsx(external_react_["Fragment"], null, index_copy_jsx("div", {
    className: "landing-page"
  }, index_copy_jsx(head_default.a, null, index_copy_jsx("title", null, "Unice")), index_copy_jsx(header, null), index_copy_jsx(git_section, null), index_copy_jsx(demo, null), index_copy_jsx(portfolio, null), index_copy_jsx(whatinside, null), index_copy_jsx(blog, null), index_copy_jsx(landing_elements, null), index_copy_jsx(features, null), index_copy_jsx(testimonial, null), index_copy_jsx(rat, null), index_copy_jsx(footer, null)));
};

/* harmony default export */ var index_copy = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("lgD3"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "fBhD":
/***/ (function(module, exports) {



/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "lgD3":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("GsEv")();
}


/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "luDK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });