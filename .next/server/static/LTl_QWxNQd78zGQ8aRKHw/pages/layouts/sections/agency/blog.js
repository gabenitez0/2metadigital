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
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
/******/ })
/************************************************************************/
/******/ ({

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("V7fJ");


/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "V7fJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fijP");
/* harmony import */ var _database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [{
    breakpoint: 575,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }]
};

const Blog = () => __jsx("section", {
  className: "agency blog blog-bg",
  id: "blog"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "6",
  className: "offset-md-3"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "text-capitalize text-center"
}, "latest blog")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "text-center"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12"
}, Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => _database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__["BlogData"] && (_database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__["BlogData"].length > 0 ? __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "owl-carousel owl-theme"
}, settings), _database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__["BlogData"].map((item, index) => __jsx("div", {
  className: "item",
  key: `blog-${index}`
}, __jsx("div", {
  className: "blog-agency"
}, __jsx("div", {
  className: "blog-contain"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: item.photo
}), __jsx("div", {
  className: "img-container center-content"
}, __jsx("div", {
  className: "center-content"
}, __jsx("div", {
  className: "blog-info"
}, __jsx("div", {
  className: "m-b-10"
}, __jsx("div", {
  className: "center-text"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-clock-o"
}), __jsx("h6", {
  className: "m-r-25 font-blog"
}, item.date), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker"
}), __jsx("h6", {
  className: "font-blog"
}, item.place))), __jsx("h5", {
  className: "blog-head"
}, item.title), __jsx("p", {
  className: "para2"
}, item.details, "....."), __jsx("div", {
  className: "m-t-20"
}, __jsx("a", {
  className: "text-uppercase",
  href: "#"
}, "read more")))))))))) : __jsx("div", {
  className: "flex flex-1 items-center justify-center"
}, "No courses found!")), [_database_layouts_agency_database__WEBPACK_IMPORTED_MODULE_3__["BlogData"]])))));

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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