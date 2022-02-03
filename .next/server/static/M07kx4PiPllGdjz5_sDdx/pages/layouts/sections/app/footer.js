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
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ({

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJu9");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "qJu9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx("footer", {
  className: "app2 bg footer2 p-0"
}, __jsx("div", {
  className: "subscribe subscribe-2"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "8",
  md: "10",
  className: "offset-lg-2 offset-md-1"
}, __jsx("div", {
  className: "subscribe"
}, __jsx("div", {
  className: "center-content"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
  className: "m-0"
}, __jsx("div", {
  className: "flex"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-envelope icon"
}), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
  className: "form-control text-capitalize",
  name: "email",
  placeholder: "example@gmail.com",
  type: "email"
}), __jsx("div", {
  className: "button-primary"
}, __jsx("button", {
  className: " btn btn-default btn-gradient text-white text-capitalize",
  type: "submit"
}, "subscribe now")))))))))), __jsx("section", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "6",
  sm: "12"
}, __jsx("div", {
  className: "logo-sec"
}, __jsx("div", {
  className: "footer-title mobile-title p-t-0"
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
}, __jsx("p", {
  className: "text-white"
}, "Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim lorem sed do ")), __jsx("ul", {
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
  lg: "3",
  md: "6",
  sm: "12"
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
}, "fashion")), __jsx("li", {
  className: "buttons"
}, __jsx("a", {
  href: "#"
}, "food")), __jsx("li", {
  className: "buttons"
}, __jsx("a", {
  href: "#"
}, "mobile")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "2",
  md: "6",
  sm: "12"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "blog categories")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "Blog Categories"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "App Review")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Audio Post")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Default Post")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Uncategorized")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Video Post")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "4",
  md: "6",
  sm: "12"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "Contact Info")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "Contact Info"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists contacts"
}, __jsx("li", null, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker"
}), "Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod"), __jsx("li", null, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-phone m-r-15"
}), "(+066) 518 - 457 - 5181"), __jsx("li", null, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-envelope m-r-15"
}), "contact@gmail.com")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

/******/ });