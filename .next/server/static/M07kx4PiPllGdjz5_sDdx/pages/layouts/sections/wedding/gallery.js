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
/******/ 	return __webpack_require__(__webpack_require__.s = 247);
/******/ })
/************************************************************************/
/******/ ({

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vpxC");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "tq2Q":
/***/ (function(module, exports) {

module.exports = require("react-masonry-css");

/***/ }),

/***/ "uPMW":
/***/ (function(module, exports) {

module.exports = {
  BrandData: [{
    img: '/assets/images/wedding-img/brand/1.png'
  }, {
    img: '/assets/images/wedding-img/brand/2.png'
  }, {
    img: '/assets/images/wedding-img/brand/3.png'
  }, {
    img: '/assets/images/wedding-img/brand/4.png'
  }, {
    img: '/assets/images/wedding-img/brand/5.png'
  }, {
    img: '/assets/images/wedding-img/brand/1.png'
  }],
  CounterData: [{
    img: '/assets/images/wedding-img/icon/1.png',
    title: 'Total Event',
    count: 14
  }, {
    img: '/assets/images/wedding-img/icon/2.png',
    title: 'Total Guest',
    count: 999
  }, {
    img: '/assets/images/wedding-img/icon/3.png',
    title: 'Invitation Card',
    count: 999
  }, {
    img: '/assets/images/wedding-img/icon/4.png',
    title: 'Total car',
    count: 1975
  }],
  DestinationData: [{
    img: '/assets/images/wedding-img/when/1.png',
    title: 'ceremony',
    timing: '7 : 00 pm',
    feature1: 'Hailey Jacson',
    feature2: 'BLVD Menlo park',
    feature3: 'CA'
  }, {
    img: '/assets/images/wedding-img/when/2.png',
    title: 'ceremony',
    timing: '6 : 00 pm',
    feature1: 'Hailey Jacson',
    feature2: 'BLVD Menlo park',
    feature3: 'CA'
  }, {
    img: '/assets/images/wedding-img/when/1.png',
    title: 'ceremony',
    timing: '7 : 00 pm',
    feature1: 'Hailey Jacson',
    feature2: 'BLVD Menlo park',
    feature3: 'CA'
  }],
  BlogData: [{
    img: '/assets/images/wedding-img/blog/1.jpg',
    heading: 'The Proposal',
    date: '08/14/2015',
    place: 'Newyork',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,…'
  }, {
    img: '/assets/images/wedding-img/blog/2.jpg',
    heading: 'The Proposal',
    date: '08/14/2015',
    place: 'Newyork',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,…'
  }, {
    img: '/assets/images/wedding-img/blog/3.jpg',
    heading: 'The Proposal',
    date: '08/14/2015',
    place: 'Newyork',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,…'
  }],
  DesignImgData: [{
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }],
  GraphicsImgData: [{
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }],
  BrandingImgData: [{
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }],
  PhotoGraphyImgData: [{
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }],
  AllImgData: [{
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }]
};

/***/ }),

/***/ "vpxC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tq2Q");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uPMW");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Gallery = () => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');
  return __jsx("section", {
    className: "wedding portfolio-section zoom-gallery"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "8",
    className: "offset-md-2"
  }, __jsx("div", {
    className: "title"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid title-img",
    src: "/assets/images/wedding-img/bottom.png"
  }), __jsx("div", {
    className: "main-title"
  }, __jsx("h2", {
    className: "gradient-text"
  }, "beautiful photo album")), __jsx("div", {
    className: "sub-title"
  }, __jsx("p", null, "A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: "12",
    className: "filter-section"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "filter-container isotopeFilters"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "list-inline filter"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: activeTab == '1' ? 'active' : '',
    onClick: () => setActiveTab('1')
  }, "All")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: activeTab == '2' ? 'active' : '',
    onClick: () => setActiveTab('2')
  }, "DESIGN")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: activeTab == '3' ? 'active' : '',
    onClick: () => setActiveTab('3')
  }, "GRAPHICS")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: activeTab == '4' ? 'active' : '',
    onClick: () => setActiveTab('4')
  }, "BRANDING")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: activeTab == '5' ? 'active' : '',
    onClick: () => setActiveTab('5')
  }, "PHOTOGRAPHY"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], {
    className: "isotopeContainer",
    activeTab: activeTab
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "1"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["AllImgData"].map((imgItem, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "",
      href: imgItem.img,
      title: ""
    }, __jsx("div", {
      className: "overlay-background"
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "fa fa-plus"
    })), __jsx("img", {
      alt: "",
      className: "img-fluid blur-up",
      src: imgItem.img
    })))));
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "2"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["DesignImgData"].map((imgItem, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "",
      href: imgItem.img,
      title: ""
    }, __jsx("img", {
      alt: "",
      className: "img-fluid blur-up",
      src: imgItem.img
    })))));
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "3"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["GraphicsImgData"].map((imgItem, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "",
      href: imgItem.img,
      title: ""
    }, __jsx("img", {
      alt: "",
      className: "img-fluid blur-up",
      src: imgItem.img
    })))));
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "4"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["BrandingImgData"].map((imgItem, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "",
      href: imgItem.img,
      title: ""
    }, __jsx("img", {
      alt: "",
      className: "img-fluid blur-up",
      src: imgItem.img
    })))));
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "5"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["PhotoGraphyImgData"].map((imgItem, i) => {
    return __jsx("div", {
      className: "isotopeSelector ",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "",
      href: imgItem.img,
      title: ""
    }, __jsx("img", {
      alt: "",
      className: "img-fluid blur-up",
      src: imgItem.img
    })))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

/******/ });