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
/******/ 	return __webpack_require__(__webpack_require__.s = 161);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/7X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NEDe");
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 320,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 420,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 4
    }
  }]
};

const Brand = () => __jsx("section", {
  className: "saas2 brand"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "12",
  xs: "12"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  className: "saas2-services"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", null, "trusted us")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "sub-title-para"
}, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "brand-slider",
  id: "brand-slider"
}, settings), _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_3__["BrandData"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i
  }, __jsx("a", {
    href: "#"
  }, __jsx("img", {
    alt: "brand",
    className: "img-fluid",
    src: item.img
  })));
})))))));

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+/7X");


/***/ }),

/***/ "NEDe":
/***/ (function(module, exports) {

module.exports = {
  BrandData: [{
    img: '/assets/images/saas2/brand/1.png'
  }, {
    img: '/assets/images/saas2/brand/2.png'
  }, {
    img: '/assets/images/saas2/brand/3.png'
  }, {
    img: '/assets/images/saas2/brand/5.png'
  }, {
    img: '/assets/images/saas2/brand/6.png'
  }, {
    img: '/assets/images/saas2/brand/1.png'
  }],
  PricingData: [{
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
  }],
  ServiceData: [{
    img: '/assets/images/saas2/our-feature/1.png',
    title: 'Content Management',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/2.png',
    title: 'Project Analysis',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/3.png',
    title: 'Support & Service',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/4.png',
    title: 'Project Management',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/5.png',
    title: 'Get Free Update',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/6.png',
    title: 'Smart Performance',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }]
};

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