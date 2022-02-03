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
/******/ 	return __webpack_require__(__webpack_require__.s = 201);
/******/ })
/************************************************************************/
/******/ ({

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fzF9");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fzF9":
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
    className: "app1 videos bg-theme"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "5",
    sm: "12"
  }, __jsx("div", {
    className: "center-content"
  }, __jsx("div", {
    className: "video w-100"
  }, __jsx("a", {
    className: "button center-content",
    onClick: toggle
  }, __jsx("img", {
    alt: "video",
    className: "img-fluid",
    src: "/assets/images/app_landing1/playl-1.png"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
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
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    md: "7",
    sm: "12",
    className: "offset-lg-1 counters video-description"
  }, __jsx("h3", {
    className: "m-b-30 text-white"
  }, "Discover The New App"), __jsx("div", {
    className: "m-b-35"
  }, __jsx("p", {
    className: "p-light"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"), __jsx("p", {
    className: "p-light"
  }, "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur."), __jsx("p", {
    className: "p-light"
  }, "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), __jsx("div", {
    className: "link-horizontal"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    className: "icon-btn"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-android center-content shadow"
  }), __jsx("h6", {
    className: "text-center text-white"
  }, "android"))), __jsx("li", {
    className: "borders-right p-0"
  }), __jsx("li", null, __jsx("a", {
    className: "icon-btn"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-apple center-content shadow"
  }), __jsx("h6", {
    className: "text-center text-white"
  }, "ios")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });