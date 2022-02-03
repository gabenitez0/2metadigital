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
/******/ 	return __webpack_require__(__webpack_require__.s = 175);
/******/ })
/************************************************************************/
/******/ ({

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("C3U9");


/***/ }),

/***/ "C3U9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tq2Q");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ds1u");
/* harmony import */ var _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Gallery = () => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');
  return __jsx("section", {
    className: "event portfolio-section zoom-gallery set-relative"
  }, __jsx("div", {
    className: "circle"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "10",
    className: "offset-md-1"
  }, __jsx("div", {
    className: "title title3"
  }, __jsx("div", {
    className: "main-title"
  }, __jsx("h2", null, __jsx("span", null, "our"), " schedule")), __jsx("div", {
    className: "sub-title"
  }, __jsx("p", null, "Register now and reserve your seat for this ", __jsx("span", null, "year's Unice,"), " the largest ", __jsx("span", null, "web development"), " and online marketing ", __jsx("span", null, "conference in UK,"), "covering everything you need to know in order to develop a successful online business."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: "12",
    className: "filter-section"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    tabs: true,
    className: "filter-container isotopeFilters"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "list-inline filter"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: activeTab == '1' ? 'active' : '',
    onClick: () => setActiveTab('1')
  }, "All")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: activeTab == '2' ? 'active' : '',
    onClick: () => setActiveTab('2')
  }, "Us Zone")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: activeTab == '3' ? 'active' : '',
    onClick: () => setActiveTab('3')
  }, "Annual Event")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: activeTab == '4' ? 'active' : '',
    onClick: () => setActiveTab('4')
  }, "Visit Event"))))), __jsx("div", {
    className: "isotopeContainer"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], {
    className: "isotopeContainer",
    activeTab: activeTab
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "1"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__["AllImgData"].map((data, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "http://500px.com/photo/32736307",
      href: "/assets/images/event/gallery/1.jpg"
    }, __jsx("div", {
      className: "overlay-background"
    }, __jsx("i", {
      className: "fa fa-link"
    })), __jsx("img", {
      alt: "",
      className: "img-fluid",
      src: data.img
    })))));
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "2"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__["UsZoneData"].map((data, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "http://500px.com/photo/32736307",
      href: "/assets/images/event/gallery/1.jpg"
    }, __jsx("div", {
      className: "overlay-background"
    }, __jsx("i", {
      className: "fa fa-link"
    })), __jsx("img", {
      alt: "",
      className: "img-fluid",
      src: data.img
    })))));
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "3"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__["AnnualData"].map((data, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "http://500px.com/photo/32736307",
      href: "/assets/images/event/gallery/1.jpg"
    }, __jsx("div", {
      className: "overlay-background"
    }, __jsx("i", {
      className: "fa fa-link"
    })), __jsx("img", {
      alt: "",
      className: "img-fluid",
      src: data.img
    })))));
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "4"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__["VisitData"].map((data, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "http://500px.com/photo/32736307",
      href: "/assets/images/event/gallery/1.jpg"
    }, __jsx("div", {
      className: "overlay-background"
    }, __jsx("i", {
      className: "fa fa-link"
    })), __jsx("img", {
      alt: "",
      className: "img-fluid",
      src: data.img
    })))));
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ds1u":
/***/ (function(module, exports) {

module.exports = {
  PricingData: [{
    title: 'Free',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 0
  }, {
    title: 'Silver',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 70
  }, {
    title: 'Golden',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 100
  }, {
    title: 'Silver',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 70
  }],
  TestimonialData: [{
    photo: '/assets/images/event/testimonial/L3-1.png',
    name: 'JHON DENAL',
    role: 'UI DESIGNER',
    details: "When You Innovate, You Make Mistakes.It Is Best To Admit Them Quickly, & Get On With Improving Your Other Innovations."
  }, {
    photo: '/assets/images/event/testimonial/L3-1.png',
    name: 'Kolan Motto',
    role: 'CEO, Therat',
    details: 'It goes without saying that customer data sec urity and compliance is top of mind in most retail board.'
  }, {
    photo: '/assets/images/event/testimonial/L3-1.png',
    name: 'Kolan Motto',
    role: 'CEO, Therat',
    details: 'It goes without saying that customer data sec urity and compliance is top of mind in most retail board.'
  }],
  BlogData: [{
    photo: '/assets/images/event/blog/1.jpg',
    title: 'Find Great Speaker For Event.',
    date: 'June 19, 2019',
    user: 'Admin',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }, {
    photo: '/assets/images/event/blog/2.jpg',
    title: 'Find Great Speaker For Event.',
    date: 'June 19, 2019',
    user: 'Admin',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }, {
    photo: '/assets/images/event/blog/3.jpg',
    title: 'Find Great Speaker For Event.',
    date: 'June 19, 2019',
    user: 'Admin',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }, {
    photo: '/assets/images/event/blog/2.jpg',
    title: 'Find Great Speaker For Event.',
    date: 'June 19, 2019',
    user: 'Admin',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }],
  CounterData: [{
    img: '/assets/images/event/counter/1.png',
    count: 14,
    desc: 'Total Topics'
  }, {
    img: '/assets/images/event/counter/2.png',
    count: 8,
    desc: 'Total Speaker'
  }, {
    img: '/assets/images/event/counter/3.png',
    count: 542,
    desc: 'Total Event'
  }, {
    img: '/assets/images/event/counter/4.png',
    count: 14152,
    desc: 'Total Attendance'
  }],
  AllImgData: [{
    img: "/assets/images/event/gallery/1.jpg"
  }, {
    img: "/assets/images/event/gallery/2.jpg"
  }, {
    img: "/assets/images/event/gallery/3.jpg"
  }, {
    img: "/assets/images/event/gallery/2.jpg"
  }, {
    img: "/assets/images/event/gallery/1.jpg"
  }],
  UsZoneData: [{
    img: "/assets/images/event/gallery/3.jpg"
  }, {
    img: "/assets/images/event/gallery/2.jpg"
  }, {
    img: "/assets/images/event/gallery/1.jpg"
  }],
  AnnualData: [{
    img: "/assets/images/event/gallery/2.jpg"
  }],
  VisitData: [{
    img: "/assets/images/event/gallery/1.jpg"
  }, {
    img: "/assets/images/event/gallery/2.jpg"
  }]
};

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "tq2Q":
/***/ (function(module, exports) {

module.exports = require("react-masonry-css");

/***/ })

/******/ });