module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("GvLQ");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KNus");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("bkMU");
/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("GqKw");
/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("7qSi");
/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("EIO+");
/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("6FEr");
/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("AQPv");
/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("HmUi");
/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












 //import Customizer from '../containers/customizer';

const {
  publicRuntimeConfig = {}
} = next_config__WEBPACK_IMPORTED_MODULE_4___default()() || {};
nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.configure({
  showSpinner: publicRuntimeConfig.NProgressShowSpinner
});

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeStart = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeComplete = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeError = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
};

function MyFunctionComponent({
  children
}) {
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: goingUp,
    1: setGoingUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1000); // Tap to Top Scroll 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);else setGoingUp(false);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Unice")), loader && __jsx("div", {
    className: "loader-wrapper"
  }, __jsx("div", {
    className: "loader"
  }, __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null), __jsx("div", null))), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children));
}

function MyApp({
  Component,
  pageProps,
  graphql
}) {
  return __jsx("div", null, __jsx(MyFunctionComponent, null, __jsx(Component, pageProps)), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], null));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6FEr":
/***/ (function(module, exports) {



/***/ }),

/***/ "7qSi":
/***/ (function(module, exports) {



/***/ }),

/***/ "AQPv":
/***/ (function(module, exports) {



/***/ }),

/***/ "EIO+":
/***/ (function(module, exports) {



/***/ }),

/***/ "GqKw":
/***/ (function(module, exports) {



/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HmUi":
/***/ (function(module, exports) {



/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "bkMU":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });