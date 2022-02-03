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
/******/ 	return __webpack_require__(__webpack_require__.s = 195);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+UYx":
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dTY6");


/***/ }),

/***/ "6Cl6":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dTY6":
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





const Download = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({
      duration: 2000
    });
  }, []);
  return __jsx("section", {
    className: "app1 download"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "5",
    md: "6",
    "data-aos": "fade-right",
    "data-aos-delay": "100"
  }, __jsx("div", {
    className: "center-content center-mobile"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/app_landing1/mobile.png"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "6",
    md: "6",
    className: "offset-lg-1"
  }, __jsx("div", {
    className: "center-text"
  }, __jsx("div", null, __jsx("div", {
    className: "download-img"
  }, __jsx("div", {
    className: "set-relative"
  }, __jsx("img", {
    alt: "",
    className: "download-icon img-fluid",
    src: "/assets/images/app_landing1/download/download.png"
  }), __jsx("div", {
    className: "set-abs elipse center-abs"
  }, __jsx("img", {
    alt: "",
    src: "/assets/images/app_landing1/download/Ellipse.png"
  }))), __jsx("div", {
    className: "center-img-content m-l-15"
  }, __jsx("h3", {
    className: "m-b-5"
  }, "download"), __jsx("p", null, "the Unice"))), __jsx("div", {
    className: "information"
  }, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa.")), __jsx("div", {
    className: "link-horizontal"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    className: "icon-btn"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-android center-content shadow"
  }), __jsx("h6", {
    className: "text-center font-primary"
  }, "android"))), __jsx("li", null, __jsx("a", {
    className: "icon-btn"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-apple center-content shadow"
  }), __jsx("h6", {
    className: "text-center font-primary"
  }, "ios")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Download);

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });