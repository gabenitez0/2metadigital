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
/******/ 	return __webpack_require__(__webpack_require__.s = 159);
/******/ })
/************************************************************************/
/******/ ({

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UHkV");


/***/ }),

/***/ "UHkV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner = () => {
  const scrollToRef = val => {
    document.querySelector(`#${val}`).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return __jsx("section", {
    className: "saas2 header",
    id: "home"
  }, __jsx("div", {
    className: "saas2-content "
  }, __jsx("div", {
    className: "bg saas2-bg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, __jsx("div", {
    className: "center-text"
  }, __jsx("div", null, __jsx("div", {
    className: "header-text"
  }, __jsx("h1", null, "Powerful services")), __jsx("div", {
    className: "header-sub-text"
  }, __jsx("h3", {
    className: "saas2-sub-text"
  }, "For Powerful ", __jsx("span", {
    className: "bold-text"
  }, "Desktop App"))), __jsx("div", {
    className: "header-sub-text"
  }, __jsx("p", {
    className: "sub-para text-white"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeN")), __jsx("a", {
    className: "btn btn-default primary-btn transparent"
  }, "start now")))), __jsx("div", {
    className: "center-text set-abs"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid img-dextop",
    src: "/assets/images/saas2/dextop2.png"
  })))), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs background-animate",
    src: "/assets/images/saas1/background2.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img1 move-up-down",
    src: "/assets/images/saas2/header-icon/3.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img2 move-right-left",
    src: "/assets/images/saas2/header-icon/2.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img3 move-up-down",
    src: "/assets/images/saas2/header-icon/4.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img4 move-up-down",
    src: "/assets/images/saas2/header-icon/5.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img5 move-right-left",
    src: "/assets/images/saas2/header-icon/7.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img6 move-up-down",
    src: "/assets/images/saas2/header-icon/9.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img7 move-up-down",
    src: "/assets/images/saas2/header-icon/6.png"
  }), __jsx("div", {
    className: "set-abs round move-right-left"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid img8",
    src: "/assets/images/saas2/header-icon/10.png"
  }), __jsx("div", {
    className: "set-abs inner-circle"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid img9",
    src: "/assets/images/saas2/header-icon/8.png"
  }))), __jsx("div", {
    className: "center-content set-abs bottom-content"
  }, __jsx("div", {
    className: "bottom"
  }, __jsx("a", {
    className: "down",
    onClick: () => scrollToRef('feature')
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/saas2/header-icon/down.png"
  })), __jsx("div", null))))), __jsx("div", null));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

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