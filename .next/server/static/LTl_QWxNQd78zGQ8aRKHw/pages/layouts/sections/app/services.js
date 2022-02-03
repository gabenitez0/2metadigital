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
/******/ 	return __webpack_require__(__webpack_require__.s = 157);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+tvX":
/***/ (function(module, exports) {

module.exports = {
  PricingData: [{
    title: 'Free',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 0
  }, {
    title: 'Medium',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 99
  }, {
    title: 'Business',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 999
  }, {
    title: 'Medium',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 99
  }],
  FeaturesData: [{
    icon: '/assets/images/app_landing2/service/2-1.png',
    title: 'Fast and optimized',
    details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    icon: '/assets/images/app_landing2/service/2-2.png',
    title: 'Well Documented',
    details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    icon: '/assets/images/app_landing2/service/2-3.png',
    title: 'Easy Integration',
    details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    icon: '/assets/images/app_landing2/service/2-4.png',
    title: 'Team Collaboration',
    details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    icon: '/assets/images/app_landing2/service/2-5.png',
    title: 'User Permissions',
    details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    icon: '/assets/images/app_landing2/service/2-6.png',
    title: 'Unlimited Storage',
    details: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }],
  MemberData: [{
    img: '/assets/images/app_landing2/team/1.png',
    name: 'ken pitersan',
    role: 'Seniour UI/Xi Designer'
  }, {
    img: '/assets/images/app_landing2/team/2.png',
    name: 'ken pitersan',
    role: 'Seniour UI/Xi Designer'
  }, {
    img: '/assets/images/app_landing2/team/3.png',
    name: 'ken pitersan',
    role: 'Seniour UI/Xi Designer'
  }, {
    img: '/assets/images/app_landing2/team/4.png',
    name: 'ken pitersan',
    role: 'Seniour UI/Xi Designer'
  }]
};

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dsbg");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dsbg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_layouts_app_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+tvX");
/* harmony import */ var _database_layouts_app_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_app_database__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Features = () => __jsx("section", {
  className: "app2 services p-t-0",
  id: "services"
}, __jsx("div", {
  className: "animated-bg"
}, __jsx("i", null), __jsx("i", null), __jsx("i", null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title title2"
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/logo/2.png"
}), __jsx("h6", {
  className: "font-primary borders main-text text-uppercase"
}, __jsx("span", null, "feature")), __jsx("div", {
  className: "sub-title"
}, __jsx("h2", {
  className: "title-text text-capitalize text-center"
}, "Powerful Features ")))), _database_layouts_app_database__WEBPACK_IMPORTED_MODULE_2__["FeaturesData"].length > 0 ? _database_layouts_app_database__WEBPACK_IMPORTED_MODULE_2__["FeaturesData"].map((item, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "4",
  md: "6",
  className: "service-container",
  key: `features-${index}`
}, __jsx("div", {
  className: "service"
}, __jsx("div", {
  className: "img-block"
}, __jsx("img", {
  alt: "",
  className: "service-img img-fluid",
  src: item.icon
})), __jsx("div", {
  className: "service-feature"
}, __jsx("h4", {
  className: "feature-text"
}, item.title), __jsx("p", null, item.details))))) : 'Features Data Not Found')));

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });