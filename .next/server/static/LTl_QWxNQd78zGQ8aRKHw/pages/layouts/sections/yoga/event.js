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
/******/ 	return __webpack_require__(__webpack_require__.s = 254);
/******/ })
/************************************************************************/
/******/ ({

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O6BZ");


/***/ }),

/***/ "O6BZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_event_schedule_event1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OdO1");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Event = () => __jsx("section", {
  className: "yoga event bg img-1"
}, __jsx("div", {
  className: "animated-bg"
}, __jsx("i", null), __jsx("i", null), __jsx("i", null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "8",
  className: "offset-md-2"
}, __jsx("div", {
  className: "title title2"
}, __jsx("h2", {
  className: "text-white"
}, "event"), __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/yoga-img/logo/bottom-curve.png"
}))), __jsx(_elements_event_schedule_event1__WEBPACK_IMPORTED_MODULE_1__["default"], null))));

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "OdO1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Event1 = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
  className: "pb-0 agency inner-pagetitle"
}, __jsx("div", {
  className: "title title2 title-inner"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "font-primary borders text-center main-text text-uppercase my-0"
}, __jsx("span", null, "event 1"))))), __jsx("section", {
  className: "yoga event bg bg-gradient-color"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6"
}, __jsx("div", {
  className: "event-container d-flex"
}, __jsx("div", {
  className: "yoga-circle"
}, __jsx("h3", {
  className: "gradient-text"
}, "01"), __jsx("h6", {
  className: "month"
}, "Aug")), __jsx("div", {
  className: "event-info center-content"
}, __jsx("h4", {
  className: "text-white address"
}, "Menla Mountain Retreat"), __jsx("h6", {
  className: "text-white time"
}, "August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm"), __jsx("h6", {
  className: "text-white city"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker m-r-5"
}), "Newyork")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6"
}, __jsx("div", {
  className: "event-container d-flex"
}, __jsx("div", {
  className: "yoga-circle"
}, __jsx("h3", {
  className: "gradient-text"
}, "02"), __jsx("h6", {
  className: "month"
}, "Mar")), __jsx("div", {
  className: "event-info center-content"
}, __jsx("h4", {
  className: "text-white address"
}, "Menla Mountain Center"), __jsx("h6", {
  className: "text-white time"
}, "August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm"), __jsx("h6", {
  className: "text-white city"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker m-r-5"
}), "Newyork")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6"
}, __jsx("div", {
  className: "event-container d-flex"
}, __jsx("div", {
  className: "yoga-circle"
}, __jsx("h3", {
  className: "gradient-text"
}, "03"), __jsx("h6", {
  className: "month"
}, "Jan")), __jsx("div", {
  className: "event-info center-content"
}, __jsx("h4", {
  className: "text-white address"
}, "Menla Mountain Center"), __jsx("h6", {
  className: "text-white time"
}, "August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm"), __jsx("h6", {
  className: "text-white city"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker m-r-5"
}), "Australia")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6"
}, __jsx("div", {
  className: "event-container d-flex"
}, __jsx("div", {
  className: "yoga-circle"
}, __jsx("h3", {
  className: "gradient-text"
}, "04"), __jsx("h6", {
  className: "month"
}, "Jun")), __jsx("div", {
  className: "event-info center-content"
}, __jsx("h4", {
  className: "text-white address"
}, "Menla Mountain Center"), __jsx("h6", {
  className: "text-white time"
}, "August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm"), __jsx("h6", {
  className: "text-white city"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker m-r-5"
}), "US")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6"
}, __jsx("div", {
  className: "event-container d-flex"
}, __jsx("div", {
  className: "yoga-circle"
}, __jsx("h3", {
  className: "gradient-text"
}, "05"), __jsx("h6", {
  className: "month"
}, "Jul")), __jsx("div", {
  className: "event-info center-content"
}, __jsx("h4", {
  className: "text-white address"
}, "Menla Mountain Center"), __jsx("h6", {
  className: "text-white time"
}, "August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm"), __jsx("h6", {
  className: "text-white city"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker m-r-5"
}), "UK")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6"
}, __jsx("div", {
  className: "event-container d-flex"
}, __jsx("div", {
  className: "yoga-circle"
}, __jsx("h3", {
  className: "gradient-text"
}, "06"), __jsx("h6", {
  className: "month"
}, "Apr")), __jsx("div", {
  className: "event-info center-content"
}, __jsx("h4", {
  className: "text-white address"
}, "Menla Mountain Retreat"), __jsx("h6", {
  className: "text-white time"
}, "August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm"), __jsx("h6", {
  className: "text-white city"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker m-r-5"
}), "India"))))))));

/* harmony default export */ __webpack_exports__["default"] = (Event1);

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