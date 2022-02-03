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
/******/ 	return __webpack_require__(__webpack_require__.s = 225);
/******/ })
/************************************************************************/
/******/ ({

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("z09S");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "z09S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Video = () => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const toggle = () => {
    setModal(!modal);
  };

  return __jsx("section", {
    className: "music bg-video format bg-shadow-top-bottom p-0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/music/singer.png"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6"
  }, __jsx("div", {
    className: "center-text"
  }, __jsx("div", null, __jsx("div", {
    className: "format-small-text"
  }, __jsx("h6", {
    className: "gradient-text hash-video"
  }, "#video")), __jsx("div", {
    className: "format-head-text"
  }, __jsx("h3", {
    className: "about-font-header"
  }, "Anet Licker")), __jsx("div", {
    className: "format-sub-text"
  }, __jsx("div", {
    className: "sub-heading"
  }, __jsx("h6", {
    className: "sub-small-text"
  }, "Performs in Slide Spring Tour")), __jsx("p", {
    className: "text-white sub-para"
  }, "The page builder elements that we\u2019ve created for you, make the website building process easy and fun.")), __jsx("div", {
    className: "m-b-40"
  }, __jsx("div", {
    className: "link-horizontal"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    className: "button icon-btn d-flex",
    href: "#javascript"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-play video-icon center-content m-0",
    onClick: toggle
  }), __jsx("div", {
    className: "watch-now center-content"
  }, __jsx("h6", {
    className: "watch",
    onClick: toggle
  }, "Watch Now"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    centered: true,
    size: "lg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: toggle,
    className: "modal-no-header close-up"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    className: "iframe-modal"
  }, __jsx("iframe", {
    className: "mfp-iframe",
    frameborder: "0",
    allowfullscreen: "",
    src: "//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"
  }))))))), __jsx("div", {
    className: "d-flex"
  }, __jsx("a", {
    href: "#"
  }, __jsx("h6", {
    className: "watch"
  }, "see all video", __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-arrow-right m-l-15"
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ })

/******/ });