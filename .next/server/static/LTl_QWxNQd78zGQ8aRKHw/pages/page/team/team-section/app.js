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
/******/ 	return __webpack_require__(__webpack_require__.s = 281);
/******/ })
/************************************************************************/
/******/ ({

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("X1lp");


/***/ }),

/***/ "DmhK":
/***/ (function(module, exports) {

module.exports = {
  AgencyData: [{
    img: '/assets/images/event/l3-1.png',
    name: 'Sam Rowling',
    role: 'Team Leader - otstrab',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-3.png',
    name: 'Mark Tucker',
    role: 'App Developer - Jumpster',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-4.png',
    name: 'Sam Rowling',
    role: 'Team Leader - otstrab',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-1.png',
    name: 'Sam Rowling',
    role: 'Team Leader - otstrab',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-2.png',
    name: 'Sam Rowling',
    role: 'Team Leader - otstrab',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-3.png',
    name: 'Mark Tucker',
    role: 'App Developer - Jumpster',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-4.png',
    name: 'Sam Rowling',
    role: 'Team Leader - otstrab',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-1.png',
    name: 'Sam Rowling',
    role: 'Team Leader - otstrab',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-2.png',
    name: 'Sam Rowling',
    role: 'Team Leader - otstrab',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-3.png',
    name: 'Mark Tucker',
    role: 'App Developer - Jumpster',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-4.png',
    name: 'Sam Rowling',
    role: 'Team Leader - otstrab',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '/assets/images/event/l3-1.png',
    name: 'Sam Rowling',
    role: 'Team Leader - otstrab',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }],
  AppData: [{
    img: '../assets/images/app_landing2/team/1.png',
    name: 'ken pitersan',
    role: 'Seniour UI/Xi Designer'
  }, {
    img: '../assets/images/app_landing2/team/2.png',
    name: 'ken pitersan',
    role: 'Seniour UI/Xi Designer'
  }, {
    img: '../assets/images/app_landing2/team/3.png',
    name: 'ken pitersan',
    role: 'Seniour UI/Xi Designer'
  }, {
    img: '../assets/images/app_landing2/team/4.png',
    name: 'ken pitersan',
    role: 'Seniour UI/Xi Designer'
  }]
};

/***/ }),

/***/ "X1lp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_pages_team_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DmhK");
/* harmony import */ var _database_pages_team_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_pages_team_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const App = () => __jsx("section", {
  className: "app2 team-section"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  xs: "12"
}, __jsx("div", {
  className: "title title2 title-inner"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "font-primary borders text-center text-uppercase m-b-0"
}, __jsx("span", null, "team 3"))))), _database_pages_team_database__WEBPACK_IMPORTED_MODULE_1__["AppData"].map((data, i) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "3",
    sm: "6",
    className: "text-center teams",
    key: i
  }, __jsx("div", {
    className: "our-team"
  }, __jsx("div", {
    className: "set-relative"
  }, __jsx("div", {
    className: "border-around overflow-hide m-auto"
  }, __jsx("div", {
    className: "set-relative overflow-hide"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid team",
    src: data.img
  }), __jsx("div", {
    className: "overlay-team set-abs"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid wave",
    src: "../assets/images/app_landing2/team/hover-wave-black.png"
  }))))), __jsx("div", {
    className: "set-relative set-border"
  }, __jsx("div", {
    className: "set-abs top-0 borders"
  })), __jsx("div", {
    className: "employee"
  }, __jsx("h4", {
    className: "e-name text-center"
  }, data.name), __jsx("h6", {
    className: "post text-center "
  }, data.role))));
}))));

/* harmony default export */ __webpack_exports__["default"] = (App);

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