module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 197);
/******/ })
/************************************************************************/
/******/ ({

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EJhK");


/***/ }),

/***/ "EJhK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_price_element_price1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ftnv");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Price = () => __jsx("section", {
  className: "app1 pricing mb-0",
  id: "plan"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6",
  md: "8",
  className: "offset-lg-3 offset-md-2"
}, __jsx("div", {
  className: "title title1"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "font-primary"
}, "price Plan")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "para"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"))))), __jsx(_elements_price_element_price1__WEBPACK_IMPORTED_MODULE_1__["default"], null)));

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ "f8eC":
/***/ (function(module, exports) {

module.exports = {
  PricingData: [{
    title: 'Basic',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 10,
    img: '/assets/images/app_landing1/pricing/11.png'
  }, {
    title: 'Advance',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 50,
    img: '/assets/images/app_landing1/pricing/22.png'
  }, {
    title: 'Standard',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 15,
    img: '/assets/images/app_landing1/pricing/33.png'
  }, {
    title: 'Basic',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 10,
    img: '/assets/images/app_landing1/pricing/11.png'
  }],
  PricingResume1: [{
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }, {
    title: "Silver",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '49'
  }, {
    title: "Golden",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '99'
  }, {
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }],
  PricingResume2: [{
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }, {
    title: "Silver",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '50'
  }, {
    title: "Golden",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '100'
  }, {
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }],
  Pricing: [{
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'free',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '0'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'medium',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '49'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'business',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '99'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'business',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '0'
  }]
};

/***/ }),

/***/ "ftnv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("f8eC");
/* harmony import */ var _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 575,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 991,
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

const PriceOne = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: "owl-carousel owl-theme pricing-slider price-margin"
  }, settings), _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__["PricingData"].length > 0 ? _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__["PricingData"].map((item, index) => __jsx("div", {
    className: "item",
    key: `price-${index}`
  }, __jsx("div", {
    className: "price-container  shadows text-center"
  }, __jsx("div", {
    className: "price-feature-container set-relative"
  }, __jsx("div", {
    className: "feature-text"
  }, __jsx("h3", {
    className: "feature-text-heading font-primary"
  }, item.title), __jsx("hr", null)), __jsx("div", {
    className: "price-value"
  }, __jsx("h4", {
    className: "price"
  }, "$", item.price)), __jsx("div", {
    className: "price-features"
  }, item.features.map((feature, i) => __jsx("h5", {
    key: `price-features-${i}`,
    className: "price-feature"
  }, feature)), __jsx("a", {
    className: " btn btn-default btn-gradient text-white btn-app1-theme",
    href: "#"
  }, "purchase"), __jsx("div", {
    className: "set-abs bottom-0"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid pricing-img",
    src: item.img
  }))))))) : 'Pricing Data Not Found'))));
};

/* harmony default export */ __webpack_exports__["default"] = (PriceOne);

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