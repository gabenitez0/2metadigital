module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SzdI");


/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "SzdI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gGkD");
/* harmony import */ var _element_price6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dNo3");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ElementPriceSix = () => __jsx("section", {
  className: "saas1 pricing pricing-6"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(_common_title__WEBPACK_IMPORTED_MODULE_1__["default"], {
  heading: "Pricing 6"
}), __jsx(_element_price6__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/* harmony default export */ __webpack_exports__["default"] = (ElementPriceSix);

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dNo3":
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
  autoplay: true,
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

const PricingSix = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx("div", {
    className: "wrapper-full"
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

/* harmony default export */ __webpack_exports__["default"] = (PricingSix);

/***/ }),

/***/ "gGkD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Title = ({
  heading
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "12"
  }, __jsx("div", {
    className: "title title2 title-inner"
  }, __jsx("div", {
    className: "main-title"
  }, __jsx("h2", {
    className: "font-primary borders text-center main-text m-b-0 text-uppercase"
  }, __jsx("span", null, heading)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

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

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });