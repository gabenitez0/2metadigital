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
/******/ 	return __webpack_require__(__webpack_require__.s = 207);
/******/ })
/************************************************************************/
/******/ ({

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fhE1");


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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });