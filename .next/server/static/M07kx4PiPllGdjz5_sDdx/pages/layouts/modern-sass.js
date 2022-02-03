module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/4Y8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: false,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      centerPadding: "160px",
      padding: "20px",
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      dots: true
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 3
    }
  }]
};

const Price = () => {
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const toggleClick = () => {
    setActive(!active);
  };

  return __jsx("section", {
    className: "saas1 pricing",
    id: "plan"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12",
    className: "text-center"
  }, __jsx("div", {
    className: "title"
  }, __jsx("img", {
    alt: "title-logo",
    className: "img-fluid",
    src: "/assets/images/saas1/title-logo.png"
  }), __jsx("div", {
    className: "main-title"
  }, __jsx("h2", {
    className: "text-white"
  }, __jsx("span", {
    className: "theme-color"
  }, "O"), "ur ", __jsx("span", {
    className: "theme-color"
  }, "P"), "lan")), __jsx("hr", null), __jsx("div", {
    className: "sub-title"
  }, __jsx("p", {
    className: "p-padding text-white"
  }, "Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "12",
    md: "12",
    sm: "12",
    xs: "12",
    className: "text-center p-0"
  }, __jsx("div", {
    className: "pricing "
  }, __jsx("div", {
    className: "pricing__switcher switcher"
  }, __jsx("div", {
    className: "switcher__buttons",
    onClick: toggleClick
  }, __jsx("div", {
    className: `switcher__button monthly ${active ? 'switcher__button--enabled' : ''}`
  }, "Monthly"), __jsx("div", {
    className: `switcher__button yearly ${active ? '' : 'switcher__button--enabled'}`
  }, "Yearly ", __jsx("span", null, "20% ", __jsx("sup", null, "off"))), __jsx("div", {
    className: "switcher__border"
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx("div", {
    className: "wrapper-full",
    id: "monthly"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "12",
    md: "12",
    sm: "12",
    xs: "12",
    className: "text-center"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: "owl-carousel owl-theme pricing-slider plan-box"
  }, settings), __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "price-box"
  }, __jsx("h3", {
    className: "price-heading"
  }, "free"), __jsx("img", {
    alt: "pan-line",
    src: "/assets/images/saas1/plan-box.png"
  }), __jsx("h4", {
    className: "no-weight"
  }, "$", __jsx("span", null, "0"), "/Month"), __jsx("ul", null, __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "1"), "User Account"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "10"), "Team Members"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "Unlimited"), "Emails Accounts"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "Set And Manage"), __jsx("li", null, "API & extension support"), __jsx("li", null, "Developer support"), __jsx("li", null, "A/B Testing")), __jsx("a", {
    className: "btn btn-default btn-white"
  }, "Sign up"))), __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "price-box active"
  }, __jsx("h3", {
    className: "price-heading"
  }, "pro"), __jsx("img", {
    alt: "plan-line",
    src: "/assets/images/saas1/plan-box.png"
  }), __jsx("h4", {
    className: "no-weight"
  }, "$", __jsx("span", null, "49"), "/Month"), __jsx("ul", null, __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "50"), "User Account"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "500"), " Team Member"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "Unlimited"), "Emails Accounts"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "Set And Manage"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "API & extension support"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "Devloper support"), __jsx("li", null, "A/B Testing")), __jsx("a", {
    className: "btn btn-default btn-white"
  }, "Sign up"))), __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "price-box"
  }, __jsx("h3", {
    className: "price-heading"
  }, "ultra"), __jsx("img", {
    alt: "plan-line",
    src: "/assets/images/saas1/plan-box.png"
  }), __jsx("h4", {
    className: "no-weight"
  }, "$", __jsx("span", null, "99"), "/Month"), __jsx("ul", null, __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "Unlimited"), "User Account"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "Unlimited"), "Team Member"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "Unlimited"), "Emails Accounts"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "Set And Manage"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "API & extension support"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "Developer support"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "A / B Testing")), __jsx("a", {
    className: "btn btn-default btn-white"
  }, "Sign up"))), __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "price-box"
  }, __jsx("h3", {
    className: "price-heading"
  }, "ultra"), __jsx("img", {
    alt: "plan-line",
    src: "/assets/images/saas1/plan-box.png"
  }), __jsx("h4", {
    className: "no-weight"
  }, "$", __jsx("span", null, "99"), "/Month"), __jsx("ul", null, __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "Unlimited"), "User Account"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "Unlimited"), "Team Member"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), __jsx("span", null, "Unlimited"), "Emails Accounts"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "Set And Manage"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "API & extension support"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "Developer support"), __jsx("li", null, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png"
  }), "A / B Testing")), __jsx("a", {
    className: "btn btn-default btn-white"
  }, "Sign up")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

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

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cAFv");


/***/ }),

/***/ "1YBW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1
    }
  }]
};

const Build = () => __jsx("section", {
  className: "saas1 build-bg"
}, __jsx("div", {
  className: "build-right-slider"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "owl-carousel owl-theme sync2",
  id: "sync2"
}, settings), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "work-slider",
  className: "img-fluid work-slide",
  src: "/assets/images/saas1/work.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "work-slider",
  className: "img-fluid work-slide",
  src: "/assets/images/saas1/work.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "work-slider",
  className: "img-fluid work-slide",
  src: "/assets/images/saas1/work.png"
})))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  lg: "6"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "sync1 owl-carousel owl-theme overflow-hidden",
  id: "sync1"
}, settings), __jsx("div", {
  className: "item"
}, __jsx("div", {
  className: "build-box"
}, __jsx("h3", {
  className: "build-head text-white"
}, __jsx("span", {
  className: "theme-color"
}, "Let\u2019s "), "Build Something Great. Together"), __jsx("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), __jsx("ul", null, __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We provide free initial consultation and support."), __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We work with some of the most successful businesses"), __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We Are Entrepreneurs & Innovators of Website Building"), __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We\u2019d love to hear from you to discuss web design.")))), __jsx("div", {
  className: "item"
}, __jsx("div", {
  className: "build-box"
}, __jsx("h3", {
  className: "build-head text-white"
}, __jsx("span", {
  className: "theme-color"
}, "Let\u2019s "), "Build Something Great. Together"), __jsx("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), __jsx("ul", null, __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We provide free initial consultation and support."), __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We work with some of the most successful businesses"), __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We Are Entrepreneurs & Innovators of Website Building"), __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We\u2019d love to hear from you to discuss web design.")))), __jsx("div", {
  className: "item"
}, __jsx("div", {
  className: "build-box"
}, __jsx("h3", {
  className: "build-head text-white"
}, __jsx("span", {
  className: "theme-color"
}, "Let\u2019s "), "Build Something Great. Together"), __jsx("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), __jsx("ul", null, __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We provide free initial consultation and support."), __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We work with some of the most successful businesses"), __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We Are Entrepreneurs & Innovators of Website Building"), __jsx("li", null, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png"
}), "We\u2019d love to hear from you to discuss web design.")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Build);

/***/ }),

/***/ "4wDe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx("footer", {
  className: "saas1 footer2"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "3"
}, __jsx("div", {
  className: "logo-sec"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "About Us")), __jsx("div", {
  className: "footer-contant"
}, __jsx("img", {
  alt: "",
  className: "img-fluid footer-logo",
  src: "/assets/images/logo/3.png"
}), __jsx("div", {
  className: "footer-para"
}, __jsx("h6", {
  className: "text-white para-address"
}, "Sassy"), __jsx("h6", {
  className: "text-white para-address"
}, "324 Madison Street New york "), __jsx("h6", {
  className: "text-white para-address"
}, "City,NY 10001.")), __jsx("ul", {
  className: "d-d-flex footer-social social"
}, __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook"
}))), __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-twitter"
}))), __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-google"
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "3"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "services")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "services"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "Portfolio Website")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Set up an account")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Invoice Creation")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Get Our Specials")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "3"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "brand")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "brand"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "Chat24")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Zoom")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Alpha Payment")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Upwork")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "3"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "Support")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "Support"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "For Freelancers")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "For Companies")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "For Business")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "General Help")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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

/***/ "61Hx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./constant/menu.js
const MENUITEMS = [{
  title: 'Inicio',
  type: 'sub',
  link: '/',
  children: [{
    path: '/',
    title: 'Inicio',
    type: 'link'
  }, {
    path: '/#Nosotros',
    title: 'Nosotros',
    type: 'link'
  }, {
    path: '/#Servicios',
    title: 'Servicios',
    type: 'link'
  }, {
    path: '/#Proyectos',
    title: 'Proyectos',
    type: 'link'
  }, {
    path: '/#Calificaciones',
    title: 'Calificaciones',
    type: 'link'
  }, {
    path: '/#Empezar',
    title: 'Empezar',
    type: 'link'
  }]
}, {
  title: 'Nosotros',
  type: 'sub',
  link: '/#Nosotros',
  children: [{
    path: '/#Nosotros',
    title: 'Quienes Somos',
    type: 'link'
  }, {
    path: '/#Nosotros',
    title: 'Cómo Trabajamos',
    type: 'link'
  }, {
    path: '/#Nosotros',
    title: 'Qué Hacemos',
    type: 'link'
  }, {
    path: '/#Nosotros',
    title: 'Emprendedores',
    type: 'link'
  }]
}, {
  title: 'Servicios Profesionales',
  type: 'sub',
  link: '/#Servicios',
  children: [{
    path: '/#Servicios',
    title: 'Desarrollo Web',
    type: 'link'
  }, {
    path: '/#Servicios',
    title: 'Diseño Web',
    type: 'link'
  }, {
    path: '/#Servicios',
    title: 'Diseño Gráfico',
    type: 'link'
  }, {
    path: '/#Servicios',
    title: 'Administración Servidores',
    type: 'link'
  }]
}, {
  title: 'Portfolio',
  type: 'sub',
  link: '/#Proyectos',
  children: [{
    path: '/#Proyectos',
    title: 'Desarrollo Web',
    type: 'link'
  }, {
    path: '/#Proyectos',
    title: 'Diseño Web',
    type: 'link'
  }, {
    path: '/#Proyectos',
    title: 'Diseño Gráfico',
    type: 'link'
  }, {
    path: '/#Proyectos',
    title: 'Administración Servidores',
    type: 'link'
  }]
}, {
  title: 'Contacto',
  type: 'sub',
  link: '/#Contacto',
  children: [{
    path: '/Contacto#Como',
    title: 'Como Trabajamos',
    type: 'link'
  }, {
    path: '/Contacto',
    title: 'Contacto',
    type: 'link'
  }]
}];
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./containers/common/nav.js
var __jsx = external_react_default.a.createElement;





const Nav = () => {
  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(external_react_["useState"])(MENUITEMS);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(external_react_["useState"])(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.remove('openSidebar');
  }

  Object(external_react_["useEffect"])(() => {
    const currentUrl = location.pathname;
    mainmenu.filter(items => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = item => {
    MENUITEMS.filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
    item.active = !item.active;
    setMainMenu({
      mainmenu: MENUITEMS
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      MENUITEMS.forEach(a => {
        if (MENUITEMS.includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(c => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: MENUITEMS
    });
  };

  return __jsx("div", {
    className: `navbar`,
    id: "togglebtn"
  }, __jsx("div", {
    className: "responsive-btn"
  }, __jsx("a", {
    className: "btn-back",
    onClick: closeSidebar
  }, __jsx("h5", null, "back"))), __jsx("ul", {
    className: "main-menu"
  }, MENUITEMS.slice(0, 3).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown"
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: menuItem.link,
      onClick: () => toggletNavActive(menuItem)
    }, __jsx("span", null, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(link_default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem)
    }, __jsx("span", null, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right"
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container resize ${menuItem.active ? 'opensubmenu' : ''}`
    }, menuItem.megaMenu === true ? __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["Row"], null, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'mini' ? 'col-lg-6' : menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i
      }, __jsx("div", {
        className: "menu-container"
      }, __jsx("a", {
        className: "menu-head"
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`
      }, menuItem.title === 'Inicio' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {}
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: menuItem.link,
      onClick: () => toggletNavActive(childrenItem)
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(link_default.a, {
      href: `${childrenItem.path}`
    }, __jsx("a", null, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open' : 'active'}`
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key
    }, childrenSubItem.type === 'link' ? __jsx(link_default.a, {
      href: `${childrenSubItem.path}`
    }, __jsx("a", {
      className: "sub-menu-title"
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })), __jsx("ul", {
    className: "main-menu"
  }, MENUITEMS.slice(3, 7).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown"
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: menuItem.link,
      onClick: () => toggletNavActive(menuItem)
    }, __jsx("span", null, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(link_default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem)
    }, __jsx("span", null, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right"
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container ${menuItem.title === 'Elements' ? 'resize' : ''} ${menuItem.active ? 'opensubmenu activeSubmenu' : ''}`
    }, menuItem.megaMenu === true ? __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["Row"], null, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i
      }, __jsx("div", {
        className: "menu-container"
      }, __jsx("a", {
        className: "menu-head"
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {}
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: menuItem.link,
      onClick: () => toggletNavActive(childrenItem)
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(link_default.a, {
      href: `${childrenItem.path}`
    }, __jsx("a", null, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open activeSubmenu' : 'active'}`
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key
    }, childrenSubItem.type === 'link' ? __jsx(link_default.a, {
      href: `${childrenSubItem.path}`
    }, __jsx("a", {
      className: "sub-menu-title"
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })));
};

/* harmony default export */ var nav = __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "9n7U":
/***/ (function(module, exports) {

module.exports = {
  FeatureData: [{
    img: '/assets/images/saas1/feature/1.png',
    heading: 'Responsive',
    layout: 'Layout',
    desc: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists'
  }, {
    img: '/assets/images/saas1/feature/2.png',
    heading: 'Saas Landing',
    layout: 'Page',
    desc: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists'
  }, {
    img: '/assets/images/saas1/feature/3.png',
    heading: 'Smart',
    layout: 'Responsive',
    desc: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists'
  }, {
    img: '/assets/images/saas1/feature/4.png',
    heading: 'Smart and',
    layout: 'optimized',
    desc: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists'
  }, {
    img: '/assets/images/saas1/feature/5.png',
    heading: 'Well',
    layout: 'Documented',
    desc: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists'
  }, {
    img: '/assets/images/saas1/feature/6.png',
    heading: 'Easy',
    layout: 'Integration',
    desc: 'Responsive code that makes your landing page look good on all devices (desktops,tablets, and phones). Created with mobile specialists'
  }],
  NavData: [{
    img: '/assets/images/saas1/tab-icon/installation.png',
    title: 'Initializing'
  }, {
    img: '/assets/images/saas1/tab-icon/001-tap.png',
    title: 'Add Instances'
  }, {
    img: '/assets/images/saas1/tab-icon/button.png',
    title: 'Configuration'
  }, {
    img: '/assets/images/saas1/tab-icon/002-settings.png',
    title: 'API Setting'
  }, {
    img: '/assets/images/saas1/tab-icon/key-1.png',
    title: 'Security'
  }],
  ContentData: [{
    img: '/assets/images/saas1/tab/Initializing.png',
    title: 'Initializing'
  }, {
    img: '/assets/images/saas1/tab/Add-instant.png',
    title: 'Add Instances'
  }, {
    img: '/assets/images/saas1/tab/Configuration.png',
    title: 'Configuration'
  }, {
    img: '/assets/images/saas1/tab/Api.png',
    title: 'API Setting'
  }, {
    img: '/assets/images/saas1/tab/Security.png',
    title: 'Security'
  }]
};

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

/***/ "IGEp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner = () => __jsx("section", {
  className: "saas1 header",
  id: "home"
}, __jsx("div", {
  className: "saas1-header bg header8-content"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "7"
}, __jsx("div", {
  className: "center-text"
}, __jsx("div", null, __jsx("div", {
  className: "header-text"
}, __jsx("div", {
  className: "d-flex"
}, __jsx("h1", null, __jsx("span", {
  className: "theme-color"
}, "S"), "imple ", __jsx("span", {
  className: "small-text"
}, "and "), __jsx("span", {
  className: "theme-color"
}, "S"), "mart"), __jsx("div", {
  className: "center-content slider-logo"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas1/slider-logo.png"
})))), __jsx("div", {
  className: "header-sub-text"
}, __jsx("h3", {
  className: "text-white"
}, "Landing Page Templates For", __jsx("span", null, " SaaS"), " Companies")), __jsx("div", {
  className: "header-sub-text"
}, __jsx("h6", null, "For as low as", __jsx("span", {
  className: "theme-color"
}, " $0.95 "), "per user account")), __jsx("div", {
  className: "link-horizontal"
}, __jsx("ul", null, __jsx("li", null, __jsx("a", {
  className: "btn btn-default primary-btn transparent"
}, "watch demo", __jsx("img", {
  alt: "video-icon",
  className: "m-l-5",
  src: "/assets/images/saas1/video-icon.png"
}))), __jsx("li", null, __jsx("a", {
  className: "btn btn-default primary-btn transparent"
}, "start now"))))))), __jsx("div", null, __jsx("div", {
  className: "center-text slider-banner"
}, __jsx("img", {
  alt: "slid-banner",
  src: "/assets/images/saas1/slider-laptop2.png",
  className: "img-fluid"
})))))), __jsx("img", {
  alt: "",
  className: "img-fluid set-abs background",
  src: "/assets/images/saas1/background2.png"
}), __jsx("img", {
  alt: "",
  className: "img-fluid set-abs dot",
  src: "/assets/images/saas1/dot.png"
}));

/* harmony default export */ __webpack_exports__["default"] = (Banner);

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

/***/ "QtRH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Copyright = () => __jsx("div", {
  className: "saas1 copyright"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6"
}, __jsx("div", {
  className: "link-horizontal center-text"
}, __jsx("ul", null, __jsx("li", null, __jsx("a", {
  className: "copyright-text op-text",
  href: "#"
}, "Privacy Policy")), __jsx("li", null, __jsx("a", {
  className: "copyright-text op-text",
  href: "#"
}, "Terms & Conditions"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6"
}, __jsx("div", null, __jsx("h6", {
  className: "copyright-text text-white text-right op-text"
}, "Copyright \xA9 2020 Unice by ", __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-heart mx-1"
}), "pixelstrap"))))));

/* harmony default export */ __webpack_exports__["default"] = (Copyright);

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

/***/ "UYWM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Testimonial = () => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const toggle = () => {
    setModal(!modal);
  };

  return __jsx("section", {
    className: "saas1 testimonial videos testimonial-bg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    className: "text-center"
  }, __jsx("div", {
    className: "title"
  }, __jsx("img", {
    alt: "title-logo",
    className: "img-fluid",
    src: "/assets/images/saas1/title-logo.png"
  }), __jsx("div", {
    className: "main-title"
  }, __jsx("h2", null, __jsx("span", {
    className: "theme-color"
  }, "5"), "0k ", __jsx("span", {
    className: "theme-color"
  }, "E"), "xperts ", __jsx("span", {
    className: "theme-color"
  }, "T"), "rust ", __jsx("span", {
    className: "theme-color"
  }, "U"), "s")), __jsx("hr", null), __jsx("div", {
    className: "sub-title"
  }, __jsx("p", {
    className: "p-padding"
  }, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "6",
    sm: "12"
  }, __jsx("div", {
    className: "center-content"
  }, __jsx("div", {
    className: "video w-100"
  }, __jsx("a", {
    className: "button center-content",
    onClick: toggle
  }, __jsx("img", {
    alt: "video",
    className: "img-fluid",
    src: "/assets/images/saas1/testimonial-video-icon.png"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    centered: true,
    size: "lg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    toggle: toggle,
    className: "modal-no-header close-up"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    className: "iframe-modal"
  }, __jsx("iframe", {
    className: "mfp-iframe",
    frameborder: "0",
    allowfullscreen: "",
    src: "//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "6"
  }, __jsx("div", {
    className: "testimonial-slider"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "testimonial"
  }, __jsx("div", {
    className: "testimonial-box"
  }, __jsx("img", {
    alt: "dot",
    src: "/assets/images/saas1/testimonail-dot.png"
  }), __jsx("h6", null, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), __jsx("div", {
    className: "testi-profile"
  }, __jsx("div", {
    className: "media"
  }, __jsx("img", {
    alt: "profile-testimonial",
    src: "/assets/images/saas1/testi-profile.png"
  }), __jsx("div", {
    className: "media-body"
  }, __jsx("h5", {
    className: "mt-0"
  }, "Elmer Harvy"), __jsx("h6", null, "Graphics Designer"))))), __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "testimonial"
  }, __jsx("div", {
    className: "testimonial-box"
  }, __jsx("img", {
    alt: "dot",
    src: "/assets/images/saas1/testimonail-dot.png"
  }), __jsx("h6", null, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), __jsx("div", {
    className: "testi-profile"
  }, __jsx("div", {
    className: "media"
  }, __jsx("img", {
    alt: "Generic placeholder image",
    src: "/assets/images/saas1/testi-profile.png"
  }), __jsx("div", {
    className: "media-body"
  }, __jsx("h5", {
    className: "mt-0"
  }, "Elmer Harvy"), __jsx("h6", null, "Graphics Designer"))))), __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "testimonial"
  }, __jsx("div", {
    className: "testimonial-box"
  }, __jsx("img", {
    alt: "dot",
    src: "/assets/images/saas1/testimonail-dot.png"
  }), __jsx("h6", null, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), __jsx("div", {
    className: "testi-profile"
  }, __jsx("div", {
    className: "media"
  }, __jsx("img", {
    alt: "profile",
    src: "/assets/images/saas1/testi-profile.png"
  }), __jsx("div", {
    className: "media-body"
  }, __jsx("h5", {
    className: "mt-0"
  }, "Elmer Harvy"), __jsx("h6", null, "Graphics Designer")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "W2fC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 420,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 1199,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 1366,
    settings: {
      slidesToShow: 6
    }
  }]
};

const Client = () => __jsx("section", {
  className: "saas1 client brand-slider",
  id: "client-box"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  fluid: true
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "12",
  className: "client-box text-center"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "owl-carousel saas-brand owl-theme"
}, settings), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/1.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/2.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/3.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/4.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/5.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/6.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/4.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/3.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/2.png"
})))))));

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ }),

/***/ "Wg6b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_light_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xaIC");
/* harmony import */ var react_light_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wevc");
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Faq = () => {
  const DummyContent1 = () => __jsx("div", {
    className: "collapse show",
    id: "collapseicon",
    "aria-labelledby": "collapseicon",
    "data-parent": "#accordionoc"
  }, __jsx("div", {
    className: "card-body"
  }, "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."));

  const DummyContent2 = () => __jsx("div", {
    className: "collapse show",
    id: "collapseicon1",
    "aria-labelledby": "collapseicon1",
    "data-parent": "#accordionoc"
  }, __jsx("div", {
    className: "card-body"
  }, "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."));

  const DummyContent3 = () => __jsx("div", {
    className: "collapse show",
    id: "collapseicon2",
    "data-parent": "#accordionoc"
  }, __jsx("div", {
    className: "card-body"
  }, "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."));

  const DummyContent4 = () => __jsx("div", {
    className: "collapse show",
    id: "collapseicon3",
    "data-parent": "#accordionoc"
  }, __jsx("div", {
    className: "card-body"
  }, "No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is. No one cares about products. People care about ideas. Is a product an idea? Noup. Is a brand? A good one is."));

  return __jsx("section", {
    className: "saas1 faq",
    id: "faq"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8"
  }, __jsx("div", {
    className: "faq-block"
  }, __jsx("div", null, __jsx("h3", {
    className: "frequent-text"
  }, "Frequently Asked Questions"), __jsx("h6", null, "Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and functional. Clean aesthetics supported by a strong concept is what we stand for."), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    atomic: true
  }, __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Do I need to make a payment?"
  }, __jsx(DummyContent1, {
    className: "active"
  })), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Do I need to make a payment?"
  }, __jsx(DummyContent2, null)), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Do I need to make a payment?"
  }, __jsx(DummyContent3, null)), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Do I need to make a payment?"
  }, __jsx(DummyContent4, null))), __jsx("h6", {
    className: "link"
  }, "Still have a question? Reach out to us: ", __jsx("a", null, "demo@123.com"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4"
  }, __jsx("div", {
    className: "faq-img-block"
  }, __jsx("img", {
    alt: "faq-person",
    className: "img-fluid",
    src: "/assets/images/saas1/faq-img.png"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

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

/***/ "cAFv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fh0K");
/* harmony import */ var _layouts_sections_modern_sass_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IGEp");
/* harmony import */ var _layouts_sections_modern_sass_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fhE1");
/* harmony import */ var _layouts_sections_modern_sass_build__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1YBW");
/* harmony import */ var _layouts_sections_modern_sass_work__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rZ1Z");
/* harmony import */ var _layouts_sections_modern_sass_price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/4Y8");
/* harmony import */ var _layouts_sections_modern_sass_testimonial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("UYWM");
/* harmony import */ var _layouts_sections_modern_sass_subscribe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("oJNo");
/* harmony import */ var _layouts_sections_modern_sass_faq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Wg6b");
/* harmony import */ var _layouts_sections_modern_sass_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("W2fC");
/* harmony import */ var _layouts_sections_modern_sass_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4wDe");
/* harmony import */ var _sections_modern_sass_copyright__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("QtRH");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components














const ModernSass = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#fb3b64');
    document.body.style.setProperty('--secondary', '#071828');
    document.body.style.setProperty('--light', '#071828');
    document.body.style.setProperty('--dark', '#fb3b64');
  });
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Modern Sass Layout ")), __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: "saas1"
  }), __jsx(_layouts_sections_modern_sass_banner__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_layouts_sections_modern_sass_feature__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_layouts_sections_modern_sass_build__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_layouts_sections_modern_sass_work__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_layouts_sections_modern_sass_price__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_layouts_sections_modern_sass_testimonial__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_layouts_sections_modern_sass_subscribe__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_layouts_sections_modern_sass_faq__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_layouts_sections_modern_sass_client__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_layouts_sections_modern_sass_footer__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx(_sections_modern_sass_copyright__WEBPACK_IMPORTED_MODULE_13__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (ModernSass);

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

/***/ "fh0K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("61Hx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = props => {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.add('openSidebar');
  };

  return __jsx("header", {
    className: `${props.className || 'app2'} loding-header nav-abs custom-scroll  `
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx("nav", null, __jsx("a", {
    className: "m-r-auto",
    href: "/"
  }, props.className == 'agency' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/9.png"
  }) : props.className == 'dark' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png"
  }) : props.className == 'dark position-relative ecommerce' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png"
  }) : props.className == 'dark bg-white ecommerce' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png"
  }) : props.className == 'dark agency' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png"
  }) : props.className == 'saas1' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/3.png"
  }) : __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/1.png"
  })), __jsx("div", {
    className: "responsive-btn"
  }, __jsx("a", {
    className: "toggle-nav",
    onClick: clickSidebar
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-bars text-white"
  }))), __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), props.shop && __jsx("div", {
    className: "top-header-right"
  }, __jsx("ul", null, __jsx("li", {
    className: "search"
  }, __jsx("a", {
    href: "#",
    onClick: () => setSearch(!search)
  }, __jsx("i", {
    className: "icon-search"
  })), __jsx("div", {
    "aria-labelledby": "dropdownMenuButton",
    className: `dropdown-menu ${search && `show`} dropdown-menu-right`
  }, __jsx("form", {
    className: "form-inline search-form"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    className: "sr-only"
  }, "Email"), __jsx("input", {
    className: "form-control-plaintext",
    placeholder: "Search....",
    type: "search"
  }), __jsx("span", {
    className: "d-sm-none mobile-search"
  }))))), __jsx("li", {
    className: "account "
  }, __jsx("a", {
    href: "#",
    onClick: () => setShow(!show)
  }, __jsx("i", {
    className: "icon-user"
  })), __jsx("div", {
    className: `dropdown-menu ${show && `show`} dropdown-menu-right`
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/auth/login"
  }, __jsx("a", {
    href: "#"
  }, "Login")), __jsx("a", {
    href: "#"
  }, "Account"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/wishlist"
  }, __jsx("a", {
    href: "#"
  }, "Wishlist")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/checkout"
  }, __jsx("a", {
    href: "#"
  }, "checkout")))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "fhE1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9n7U");
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Feature = () => __jsx("section", {
  className: "saas1 service",
  id: "feature"
}, __jsx("div", {
  className: "about-chat"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "12",
  className: "text-center"
}, __jsx("div", {
  className: "title"
}, __jsx("img", {
  alt: "title-logo",
  className: "img-fluid",
  src: "/assets/images/saas1/title-logo.png"
}), __jsx("div", {
  className: "main-title"
}, __jsx("h2", null, __jsx("span", {
  className: "theme-color"
}, "A"), "wesome ", __jsx("span", {
  className: "theme-color"
}, "F"), "eatures")), __jsx("hr", null), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "p-padding"
}, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__["FeatureData"].map((item, i) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "4",
    md: "6",
    className: "service-container",
    key: i
  }, __jsx("div", {
    className: "chat-box"
  }, __jsx("img", {
    alt: "stay-connected",
    src: item.img
  }), __jsx("div", {
    className: "feature-content"
  }, __jsx("h4", {
    className: "service-heading"
  }, " ", item.heading, " ", __jsx("span", {
    className: "theme-color"
  }, item.layout)), __jsx("hr", null), __jsx("p", null, item.desc))));
})))));

/* harmony default export */ __webpack_exports__["default"] = (Feature);

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

/***/ "oJNo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Subscribe = () => __jsx("section", {
  className: "saas1 subscribe",
  id: "contact"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "7"
}, __jsx("div", {
  className: "media"
}, __jsx("img", {
  alt: "profile",
  src: "/assets/images/saas1/subscribe-icon.png"
}), __jsx("div", {
  className: "media-body"
}, __jsx("h3", {
  className: "mt-0 text-white"
}, "Start 30 days free trial"), __jsx("h6", {
  className: "text-white"
}, "Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and functional.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "5"
}, __jsx("div", {
  className: "subscribe-input"
}, __jsx("form", null, __jsx("input", {
  id: "useremail",
  placeholder: "This Field is Required",
  required: true,
  type: "email"
}), __jsx("input", {
  id: "submit",
  type: "submit",
  value: "Get Started"
})), __jsx("div", {
  className: "text text-center d-flex"
}, __jsx("h6", {
  className: "text-white"
}, "Free 30-day trial"), __jsx("h6", {
  className: "text-white"
}, "Easy setup"), __jsx("h6", {
  className: "text-white"
}, "Cancel any time")))))));

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

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

/***/ "rZ1Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9n7U");
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Work = () => {
  const {
    0: nav,
    1: setNav
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Initializing');

  const toggle = item => {
    setNav(item);
  };

  return __jsx("section", {
    className: "saas1 howitwork",
    id: "how-work"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    className: "text-center"
  }, __jsx("div", {
    className: "title"
  }, __jsx("img", {
    alt: "title-logo",
    className: "img-fluid",
    src: "/assets/images/saas1/title-logo.png"
  }), __jsx("div", {
    className: "main-title"
  }, __jsx("h2", null, __jsx("span", {
    className: "theme-color"
  }, "H"), "ow ", __jsx("span", {
    className: "theme-color"
  }, "I"), "t ", __jsx("span", {
    className: "theme-color"
  }, "W"), "ork")), __jsx("hr", null), __jsx("div", {
    className: "sub-title"
  }, __jsx("p", {
    className: "p-padding"
  }, "Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    className: "work-tab"
  }, __jsx("ul", {
    className: "nav nav-pills justify-content-center ",
    id: "pills-tab",
    role: "tablist"
  }, _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__["NavData"].map((item, i) => {
    return __jsx("li", {
      className: `nav-item  text-center ${item.title === nav ? 'active' : ''} `,
      key: i
    }, __jsx("a", {
      "aria-selected": "true",
      className: `nav-link ${'work' == item.title ? 'active show' : ''}`,
      "data-toggle": "pill",
      onClick: () => toggle(item.title),
      role: "tab"
    }, __jsx("img", {
      alt: "tab-image-1",
      src: item.img
    }), __jsx("h6", null, item.title), __jsx("span", null)));
  }))))), __jsx("div", {
    className: "work-tab-bg work-content p-t-50"
  }, __jsx("div", {
    className: "tab-content text-center",
    id: "pills-tabContent"
  }, _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__["ContentData"].map((item, i) => {
    return __jsx("div", {
      className: `tab-pane fade ${item.title === nav ? 'show active' : ''}`,
      role: "tabpanel",
      key: i
    }, __jsx("img", {
      alt: "tab-image-1",
      className: "img-fluid",
      src: item.img
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "wevc":
/***/ (function(module, exports) {



/***/ }),

/***/ "xaIC":
/***/ (function(module, exports) {

module.exports = require("react-light-accordion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });