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
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ({

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Nnn1");


/***/ }),

/***/ "Nnn1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Service = () => __jsx("section", {
  className: "agency format service-bg",
  id: "features"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "4",
  className: "offset-lg-1"
}, __jsx("div", {
  className: "center-text"
}, __jsx("div", {
  className: "format-container"
}, __jsx("h6", {
  className: "borders-before text-uppercase"
}, __jsx("span", null, "Our services")), __jsx("div", {
  className: "format-head-text"
}, __jsx("h2", {
  className: "about-font-header"
}, "Services we\u2019re ", __jsx("span", {
  className: "block-span"
}, "provided"))), __jsx("div", {
  className: "format-sub-text"
}, __jsx("p", {
  className: "about-para"
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.")), __jsx("a", {
  className: " btn btn-default btn-gradient",
  href: "#"
}, "view more")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "7",
  md: "8"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "4",
  className: "center-content unset-height"
}, __jsx("ul", {
  className: "icon-collection",
  "data-aos": "fade-left",
  "data-aos-duration": "500"
}, __jsx("li", {
  className: "about-icon"
}, __jsx("a", {
  className: "center-content",
  href: "#"
}, __jsx("img", {
  alt: "",
  src: "/assets/images/agency/service/1.png"
}), __jsx("h5", null, "Buisness Planning"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "4",
  className: "center-content unset-height"
}, __jsx("ul", {
  className: "icon-collection",
  "data-aos": "fade-left",
  "data-aos-duration": "2000"
}, __jsx("li", {
  className: "about-icon"
}, __jsx("a", {
  className: "center-content",
  href: "#"
}, __jsx("img", {
  alt: "",
  src: "/assets/images/agency/service/2.png"
}), __jsx("h5", null, "Divorce Planning"))), __jsx("li", {
  className: "about-icon"
}, __jsx("a", {
  className: "center-content",
  href: "#"
}, __jsx("img", {
  alt: "",
  src: "/assets/images/agency/service/3.png"
}), __jsx("h5", null, "Finance Planning"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "4",
  className: "center-content unset-height"
}, __jsx("ul", {
  className: "icon-collection",
  "data-aos": "fade-left",
  "data-aos-duration": "3000"
}, __jsx("li", {
  className: "about-icon"
}, __jsx("a", {
  className: "center-content",
  href: "#"
}, __jsx("img", {
  alt: "",
  src: "/assets/images/agency/service/4.png"
}), __jsx("h5", null, "Estate Planning"))), __jsx("li", {
  className: "about-icon"
}, __jsx("a", {
  className: "center-content",
  href: "#"
}, __jsx("img", {
  alt: "",
  src: "/assets/images/agency/service/5.png"
}), __jsx("h5", null, "Build Planning"))), __jsx("li", {
  className: "about-icon"
}, __jsx("a", {
  className: "center-content",
  href: "#"
}, __jsx("img", {
  alt: "",
  src: "/assets/images/agency/service/6.png"
}), __jsx("h5", null, "Invest Planning"))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Service);

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