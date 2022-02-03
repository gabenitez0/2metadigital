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
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
/******/ })
/************************************************************************/
/******/ ({

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4xg+");


/***/ }),

/***/ "4xg+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fijP");
/* harmony import */ var _database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 369,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 479,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }]
};

const Expert = () => __jsx("section", {
  className: "agency format speaker expert-bg"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "3",
  md: "4"
}, __jsx("div", {
  className: "format-container"
}, __jsx("h6", {
  className: "borders-before"
}, __jsx("span", null, "Meet our Expert")), __jsx("div", {
  className: "format-head-text"
}, __jsx("h2", null, "We Will Ready For Your Services")), __jsx("div", {
  className: "format-sub-text"
}, __jsx("p", {
  className: "about-para"
}, "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.")), __jsx("a", {
  className: " btn btn-default btn-gradient",
  href: "#"
}, "view more"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "9",
  md: "8"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, _database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__["ExpertData"].length > 0 ? _database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__["ExpertData"].map((item, index) => __jsx("div", {
  className: "item speker-container",
  key: `our-expert-team-${index}`
}, __jsx("div", {
  className: "text-center"
}, __jsx("div", {
  className: "team-img"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: item.photo
}), __jsx("div", {
  className: "overlay"
}), __jsx("div", {
  className: "social"
}, __jsx("ul", null, __jsx("li", null, __jsx("a", {
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
  className: "fa fa-globe center-content"
})))))), __jsx("div", {
  className: "employee"
}, __jsx("h5", {
  className: "e-name"
}, item.title), __jsx("h6", {
  className: "post font-secondary"
}, item.details))))) : 'Expert Details Not Found')))));

/* harmony default export */ __webpack_exports__["default"] = (Expert);

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fijP":
/***/ (function(module, exports) {

module.exports = {
  PricingData: [{
    title: 'Free',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 0
  }, {
    title: 'Medium',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 99
  }, {
    title: 'Business',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 999
  }, {
    title: 'Free',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 0
  }],
  ExpertData: [{
    photo: '/assets/images/event/l3-2.png',
    title: 'Sam Rowling',
    details: 'Team Leader - otstrab'
  }, {
    photo: '/assets/images/event/l3-3.png',
    title: 'Mark Tucker',
    details: 'App Developer - Jumpster'
  }, {
    photo: '/assets/images/event/l3-4.png',
    title: 'Sam Rowling',
    details: 'Team Leader - otstrab'
  }, {
    photo: '/assets/images/event/l3-3.png',
    title: 'Mark Tucker',
    details: 'App Developer - Jumpster'
  }],
  TestimonialData: [{
    photo: '/assets/images/agency/testimonial/1.png',
    name: 'Kolan Motto',
    role: 'CEO, Therat',
    details: 'It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms is top.'
  }, {
    photo: '/assets/images/agency/testimonial/2.png',
    name: 'Kolan Motto',
    role: 'CEO, Therat',
    details: 'It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms is top.'
  }, {
    photo: '/assets/images/agency/testimonial/2.png',
    name: 'Kolan Motto',
    role: 'CEO, Therat',
    details: 'It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms is top.'
  }, {
    photo: '/assets/images/agency/testimonial/2.png',
    name: 'Kolan Motto',
    role: 'CEO, Therat',
    details: 'It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms is top.'
  }],
  BlogData: [{
    id: 1,
    photo: '/assets/images/agency/blog/blog-list-1.jpg',
    title: 'Twice profit than before you',
    date: 'June 19, 2019',
    place: 'Phonics',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }, {
    id: 2,
    photo: '/assets/images/agency/blog/blog-list-2.jpg',
    title: 'Twice profit than before you',
    date: 'June 19, 2019',
    place: 'Phonics',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }, {
    id: 3,
    photo: '/assets/images/agency/blog/blog-list-3.jpg',
    title: 'Twice profit than before you',
    date: 'June 19, 2019',
    place: 'Phonics',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }, {
    id: 4,
    photo: '/assets/images/agency/blog/blog-list-1.jpg',
    title: 'Twice profit than before you',
    date: 'June 19, 2019',
    place: 'Phonics',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }]
};

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });