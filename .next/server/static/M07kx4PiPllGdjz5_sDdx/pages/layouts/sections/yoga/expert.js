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
/******/ 	return __webpack_require__(__webpack_require__.s = 256);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FJD":
/***/ (function(module, exports) {

module.exports = {
  BrandData: [{
    img: '/assets/images/yoga-img/brand/1.png'
  }, {
    img: '/assets/images/yoga-img/brand/2.png'
  }, {
    img: '/assets/images/yoga-img/brand/3.png'
  }, {
    img: '/assets/images/yoga-img/brand/4.png'
  }, {
    img: '/assets/images/yoga-img/brand/1.png'
  }, {
    img: '/assets/images/yoga-img/brand/2.png'
  }],
  BlogData: [{
    img: '/assets/images/yoga-img/blog/1.jpg',
    role: 'admin',
    date: '5 September 2019',
    text: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard .'
  }, {
    img: '/assets/images/yoga-img/blog/2.jpg',
    role: 'admin',
    date: '5 September 2019',
    text: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard .'
  }, {
    img: '/assets/images/yoga-img/blog/3.jpg',
    role: 'admin',
    date: '5 September 2019',
    text: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard .'
  }, {
    img: '/assets/images/yoga-img/blog/1.jpg',
    role: 'admin',
    date: '5 September 2019',
    text: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard .'
  }],
  PricingData: [{
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'free',
    feature1: 'Lorem Ipsum is simply',
    feature2: 'dummy text of the',
    feature3: 'printing and typesetting',
    price: '0'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'medium',
    feature1: 'Lorem Ipsum is simply',
    feature2: 'dummy text of the',
    feature3: 'printing and typesetting',
    price: '49'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'business',
    feature1: 'Lorem Ipsum is simply',
    feature2: 'dummy text of the',
    feature3: 'printing and typesetting',
    price: '99'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'business',
    feature1: 'Lorem Ipsum is simply',
    feature2: 'dummy text of the',
    feature3: 'printing and typesetting',
    price: '0'
  }],
  ExpertData: [{
    img: '/assets/images/yoga-img/expert/1.jpg',
    heading: 'Ethan Robbines'
  }, {
    img: '/assets/images/yoga-img/expert/2.jpg',
    heading: 'Ethan Robbines'
  }, {
    img: '/assets/images/yoga-img/expert/3.jpg',
    heading: 'Ethan Robbines'
  }, {
    img: '/assets/images/yoga-img/expert/4.jpg',
    heading: 'Ethan Robbines'
  }, {
    img: '/assets/images/yoga-img/expert/5.jpg',
    heading: 'Ethan Robbines'
  }, {
    img: '/assets/images/yoga-img/expert/1.jpg',
    heading: 'Ethan Robbines'
  }, {
    img: '/assets/images/yoga-img/expert/2.jpg',
    heading: 'Ethan Robbines'
  }, {
    img: '/assets/images/yoga-img/expert/3.jpg',
    heading: 'Ethan Robbines'
  }, {
    img: '/assets/images/yoga-img/expert/3.jpg',
    heading: 'Ethan Robbines'
  }, {
    img: '/assets/images/yoga-img/expert/3.jpg',
    heading: 'Ethan Robbines'
  }]
};

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("t3Vi");


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

/***/ }),

/***/ "t3Vi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_yoga_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+FJD");
/* harmony import */ var _database_layouts_yoga_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_yoga_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  autoplay: true,
  swipeToSlide: true,
  centerMode: true,
  centerPadding: '60px',
  arrows: false,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 420,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  }]
};

const Expert = () => __jsx("section", {
  className: "yoga trainers",
  id: "screenshot"
}, __jsx("div", {
  className: "animated-bg"
}, __jsx("i", null), __jsx("i", null), __jsx("i", null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "8",
  className: "offset-md-2"
}, __jsx("div", {
  className: "title title2"
}, __jsx("h2", null, "our expert"), __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/yoga-img/logo/wave-blue.png"
}))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "trainers-slider",
  id: "trainers-slider"
}, settings), _database_layouts_yoga_database__WEBPACK_IMPORTED_MODULE_3__["ExpertData"].map((data, i) => {
  return __jsx("div", {
    className: "item",
    key: i
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: data.img
  }), __jsx("div", {
    className: "text-center trainers-info"
  }, __jsx("h4", {
    className: " m-b-10"
  }, data.heading), __jsx("div", {
    className: "socials-lists"
  }, __jsx("ul", {
    className: "socials-horizontal justify-content-center"
  }, __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-facebook center-content"
  }))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-twitter center-content"
  }))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-google center-content"
  }))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-instagram center-content"
  })))))));
}))));

/* harmony default export */ __webpack_exports__["default"] = (Expert);

/***/ })

/******/ });