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
/******/ 	return __webpack_require__(__webpack_require__.s = 187);
/******/ })
/************************************************************************/
/******/ ({

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Iywh");


/***/ }),

/***/ "Iywh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("footer", {
  className: "gym footer2"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "3",
  sm: "12",
  className: "set-first"
}, __jsx("div", {
  className: "logo-sec"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "About Us")), __jsx("div", {
  className: "footer-contant"
}, __jsx("img", {
  alt: "",
  className: "img-fluid footer-logo",
  src: "/assets/images/logo/1.png"
}), __jsx("div", {
  className: "footer-para"
}, __jsx("h6", {
  className: "text-white para-address"
}, "Unice"), __jsx("h6", {
  className: "text-white para-address"
}, "324 Madison Street New york City, "), __jsx("h6", {
  className: "text-white para-address"
}, "NY 10001.")), __jsx("ul", {
  className: "d-flex footer-social social"
}, __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook"
}))), __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-twitter"
}))), __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-google"
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "2",
  md: "3",
  sm: "12"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "services")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "services"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists op-text"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "Portfolio Website")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Set up an account")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Invoice Creation")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Get Our Specials")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "2",
  md: "3",
  sm: "12"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "brand")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "brand"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists op-text"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "Chat24")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Zoom")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Alpha Payment")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Upwork")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "2",
  md: "3",
  sm: "12"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "Support")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "Support"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists op-text"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "For Freelancers")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "For Companies")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "For Business")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "General Help")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "12",
  sm: "12",
  className: "set-last"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "Post Tags")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "Post Tags"), __jsx("div", {
  className: "link-btns"
}, __jsx("ul", null, __jsx("li", {
  className: "buttons"
}, __jsx("a", {
  href: "#"
}, "app")), __jsx("li", {
  className: "buttons"
}, __jsx("a", {
  href: "#"
}, "business")), __jsx("li", {
  className: "buttons"
}, __jsx("a", {
  href: "#"
}, "corporation")), __jsx("li", {
  className: "buttons"
}, __jsx("a", {
  href: "#"
}, "creative")), __jsx("li", {
  className: "buttons"
}, __jsx("a", {
  href: "#"
}, "design")), __jsx("li", {
  className: "buttons"
}, __jsx("a", {
  href: "#"
}, "fashion"))))))))), __jsx("div", {
  className: "gym copyright"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6"
}, __jsx("div", {
  className: "link-horizontal"
}, __jsx("ul", null, __jsx("li", null, __jsx("a", {
  className: "copyright-text op-text",
  href: "#"
}, "Privacy Policy")), __jsx("li", null, __jsx("a", {
  className: "copyright-text op-text",
  href: "#"
}, "Terms & Conditions"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6"
}, __jsx("div", null, __jsx("h6", {
  className: "copyright-text text-white text-right op-text"
}, "Copyright \xA9 2020 Unice by ", __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-heart"
}), " pixelstrap")))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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