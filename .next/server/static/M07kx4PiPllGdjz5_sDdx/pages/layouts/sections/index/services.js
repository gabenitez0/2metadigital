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
/******/ 	return __webpack_require__(__webpack_require__.s = 199);
/******/ })
/************************************************************************/
/******/ ({

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Muol");


/***/ }),

/***/ "Muol":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Services = () => __jsx("section", {
  className: "services",
  id: "service"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "6",
  md: "8",
  className: "offset-lg-3 offset-md-2"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", null, "Advance Services")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "para"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "4"
}, __jsx("div", {
  className: "service service-overlay"
}, __jsx("div", {
  className: "img-block"
}, __jsx("img", {
  alt: "",
  className: "service-img img-fluid",
  src: "/assets/images/app_landing1/icons/1-1.png"
})), __jsx("div", {
  className: "service-feature"
}, __jsx("h4", {
  className: "feature-text"
}, "Powerful System"), __jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "4"
}, __jsx("div", {
  className: "service service-overlay"
}, __jsx("div", {
  className: "img-block"
}, __jsx("img", {
  alt: "",
  className: "service-img img-fluid",
  src: "/assets/images/app_landing1/icons/1-2.png"
})), __jsx("div", {
  className: "service-feature"
}, __jsx("h4", {
  className: "feature-text"
}, "Personalization"), __jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "4"
}, __jsx("div", {
  className: "service service-overlay"
}, __jsx("div", {
  className: "img-block"
}, __jsx("img", {
  alt: "",
  className: "service-img img-fluid",
  src: "/assets/images/app_landing1/icons/1-3.png"
})), __jsx("div", {
  className: "service-feature"
}, __jsx("h4", {
  className: "feature-text"
}, "Ease Of Access"), __jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.")))))));

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });