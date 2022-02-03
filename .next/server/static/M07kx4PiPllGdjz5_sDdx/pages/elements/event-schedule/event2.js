module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UEJW");


/***/ }),

/***/ "UEJW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Event2 = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
  className: "event schedule set-relative",
  id: "schedule"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xs: "12"
}, __jsx("div", {
  className: "title title2 title-inner"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "font-primary borders text-center main-text text-uppercase m-b-0"
}, __jsx("span", null, "schedule 1"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xs: "12"
}, __jsx("div", {
  className: "cal-time"
}, __jsx("div", {
  className: "time"
}, __jsx("h4", {
  className: "text-capitalize monday-text"
}, "Monday, September 30, 2019"))), __jsx("div", {
  className: "event-container scrollbar"
}, __jsx("div", null, __jsx("div", {
  className: "cal-time events"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10"
}, __jsx("div", {
  className: "schedule-event"
}, __jsx("h5", {
  className: "names"
}, "Vicky Smith"), __jsx("img", {
  alt: "",
  className: "img-fluid schedule-img",
  src: "../assets/images/event/icon.png"
}), __jsx("p", {
  className: "schedule-description"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "2"
}, __jsx("div", {
  className: "timing"
}, __jsx("h5", {
  className: "event-time"
}, "08:00"), __jsx("div", {
  className: "border-container"
}, __jsx("div", {
  className: "border-dashed"
})), __jsx("h5", {
  className: "event-time"
}, "10:00"))))), __jsx("div", {
  className: "cal-time events"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10"
}, __jsx("div", {
  className: "schedule-event"
}, __jsx("h5", {
  className: "names"
}, "Vicky Smith"), __jsx("img", {
  alt: "",
  className: "img-fluid schedule-img",
  src: "../assets/images/event/icon.png"
}), __jsx("p", {
  className: "schedule-description"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "2"
}, __jsx("div", {
  className: "timing"
}, __jsx("h5", {
  className: "active event-time center-content"
}, "08:00"), __jsx("div", {
  className: "border-container"
}, __jsx("div", {
  className: "border-dashed active"
})), __jsx("h5", {
  className: "active event-time center-content"
}, "10:00"))))), __jsx("div", {
  className: " cal-time events"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10"
}, __jsx("div", {
  className: "schedule-event"
}, __jsx("h5", {
  className: "names"
}, "Vicky Smith"), __jsx("img", {
  alt: "",
  className: "img-fluid schedule-img",
  src: "../assets/images/event/icon.png"
}), __jsx("p", {
  className: "schedule-description"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "2"
}, __jsx("div", {
  className: "timing"
}, __jsx("h5", {
  className: "event-time center-content"
}, "08:00"), __jsx("div", {
  className: "border-container"
}, __jsx("div", {
  className: "border-dashed"
})), __jsx("h5", {
  className: "event-time center-content"
}, "10:00"))))), __jsx("div", {
  className: " cal-time events"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10"
}, __jsx("div", {
  className: "schedule-event"
}, __jsx("h5", {
  className: "names"
}, "Vicky Smith"), __jsx("img", {
  alt: "",
  className: "img-fluid schedule-img",
  src: "../assets/images/event/icon.png"
}), __jsx("p", {
  className: "schedule-description"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of."))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "2"
}, __jsx("div", {
  className: "timing"
}, __jsx("h5", {
  className: "event-time center-content"
}, "08:00"), __jsx("div", {
  className: "border-container"
}, __jsx("div", {
  className: "border-dashed"
})), __jsx("h5", {
  className: "event-time center-content"
}, "10:00"))))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Event2);

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