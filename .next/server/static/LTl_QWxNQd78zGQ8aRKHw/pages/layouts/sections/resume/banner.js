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
/******/ 	return __webpack_require__(__webpack_require__.s = 231);
/******/ })
/************************************************************************/
/******/ ({

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5a0R");


/***/ }),

/***/ "5a0R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oG96");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Banner = () => __jsx("section", {
  className: "resume header",
  id: "header"
}, __jsx("div", {
  className: "header7-content"
}, __jsx("div", {
  className: "resume bg bg-pink"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "5",
  md: "6"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs bottom-0 right-0",
  src: "/assets/images/resume/h7.png"
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6",
  md: "6",
  className: "offset-lg-1"
}, __jsx("div", {
  className: "center-text"
}, __jsx("div", null, __jsx("div", {
  className: "header-sub-text"
}, __jsx("h5", {
  className: "text-hash text-uppercase"
}, "# resume")), __jsx("div", {
  className: "header-text"
}, __jsx("h1", null, __jsx("span", {
  className: "bold-text"
}, "Hi, I\u2019m"), __jsx("br", null), " Elana Parker")), __jsx("div", {
  className: "header-sub-text"
}, __jsx("h4", {
  className: "font-secondary"
}, "Html , ", __jsx("span", {
  className: "typed-resume"
}, __jsx(react_typed__WEBPACK_IMPORTED_MODULE_1___default.a, {
  strings: ['Css, Bootstrap, Java Script'],
  typeSpeed: 80,
  backSpeed: 50,
  showCursor: false,
  loop: true
})))), __jsx("div", {
  className: "header-sub-text"
}, __jsx("p", {
  className: "font-secondary font-large"
}, "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown.")), __jsx("div", {
  className: "link-horizontal"
}, __jsx("ul", null, __jsx("li", null, __jsx("a", {
  className: "btn btn-default primary-btn back-white"
}, "know more")), __jsx("li", null, __jsx("a", {
  className: "btn btn-default primary-btn back-white"
}, "download cv"))))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oG96":
/***/ (function(module, exports) {

module.exports = require("react-typed");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });