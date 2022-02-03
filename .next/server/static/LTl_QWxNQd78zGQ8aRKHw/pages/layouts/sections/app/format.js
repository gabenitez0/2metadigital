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
/******/ 	return __webpack_require__(__webpack_require__.s = 153);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+UYx":
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5ekV");


/***/ }),

/***/ "5ekV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+UYx");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6Cl6");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Format = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({
      duration: 1500
    });
  }, []);
  return __jsx("section", {
    className: "app2 format quality p-t-0"
  }, __jsx("div", {
    className: "animated-bg"
  }, __jsx("i", null), __jsx("i", null), __jsx("i", null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "counters set-order-2"
  }, __jsx("div", {
    className: "abouts center-text"
  }, __jsx("div", null, __jsx("div", {
    className: "format-head-text"
  }, __jsx("h3", {
    className: "about-font-header font-secondary"
  }, "High Quality Functions")), __jsx("div", {
    className: "format-sub-text"
  }, __jsx("p", {
    className: "about-para"
  }, "You can now use all Social Network from this Lunatic app also. Writers and stars of Veep have responded incredulous to the news an Australian politician required stitches after knocking himself unconscious while laughing.")), __jsx("ul", {
    className: "icon-collection"
  }, __jsx("li", {
    className: "about-icon"
  }, __jsx("a", {
    className: "center-content",
    href: "#"
  }, __jsx("h4", {
    className: "quality"
  }, "2 M"), __jsx("h6", {
    className: "users "
  }, "user"))), __jsx("li", {
    className: "about-icon"
  }, __jsx("a", {
    className: "center-content",
    href: "#"
  }, __jsx("h4", {
    className: "quality"
  }, "2.5 M"), __jsx("h6", {
    className: "users"
  }, "download")))), __jsx("a", {
    className: "btn btn-default btn-gradient m-t-45"
  }, "learn more")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "counters set-height overflow-hide"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid mobile2",
    "data-aos": "fade-left",
    src: "/assets/images/app_landing2/l-2.png"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Format);

/***/ }),

/***/ "6Cl6":
/***/ (function(module, exports) {



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