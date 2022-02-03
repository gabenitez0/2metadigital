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
/******/ 	return __webpack_require__(__webpack_require__.s = 193);
/******/ })
/************************************************************************/
/******/ ({

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7/Ji");


/***/ }),

/***/ "7/Ji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = () => __jsx("section", {
  className: "app1 about bg-theme"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "6",
  md: "8",
  className: "offset-lg-3 offset-md-2"
}, __jsx("div", {
  className: "title title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "text-white"
}, "About Unice")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "text-white para"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "7",
  lg: "6",
  sm: "12"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "set-padding"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6",
  className: "counters"
}, __jsx("div", {
  className: "abouts"
}, __jsx("div", null, __jsx("img", {
  alt: "",
  className: "service-img img-fluid",
  src: "/assets/images/app_landing1/about/Ellipse-3-copy.png"
}), __jsx("h3", {
  className: "text-white"
}, "7576"), __jsx("h5", {
  className: "text-white"
}, "happy clients")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6",
  className: "counters"
}, __jsx("div", {
  className: "abouts"
}, __jsx("div", null, __jsx("img", {
  alt: "",
  className: "service-img img-fluid",
  src: "/assets/images/app_landing1/about/close.png"
}), __jsx("h3", {
  className: "text-white"
}, "402"), __jsx("h5", {
  className: "text-white"
}, "Tickets Closed")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6",
  className: "counters"
}, __jsx("div", {
  className: "abouts"
}, __jsx("div", null, __jsx("img", {
  alt: "",
  className: "service-img img-fluid",
  src: "/assets/images/app_landing1/about/love.png"
}), __jsx("h3", {
  className: "text-white"
}, "8899"), __jsx("h5", {
  className: "text-white"
}, "Followers")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6",
  className: "counters"
}, __jsx("div", {
  className: "abouts"
}, __jsx("div", null, __jsx("img", {
  alt: "",
  className: "service-img img-fluid",
  src: "/assets/images/app_landing1/about/coffee.png"
}), __jsx("h3", {
  className: "text-white"
}, "85"), __jsx("h5", {
  className: "text-white"
}, "Cups of\xA0Coffee")))))))), __jsx("div", {
  className: "set-abs mobile mobile-img bottom-0"
}, __jsx("div", {
  className: "set-relative"
}, __jsx("img", {
  alt: "",
  className: "img-fluid mobile-screen",
  src: "/assets/images/app_landing1/about/1-1.png"
}), __jsx("div", {
  className: "set-abs mobile rectangle r-2  center-content bottom-0"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/app_landing1/icons/1-2.png"
})), __jsx("div", {
  className: "set-abs mobile rectangle center-content bottom-0"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/app_landing1/Ellipse-2-copy-241.png"
})), __jsx("div", {
  className: "set-abs mobile center-content galaxy bottom-0"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/app_landing1/about/Layer-27.png"
})))));

/* harmony default export */ __webpack_exports__["default"] = (About);

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