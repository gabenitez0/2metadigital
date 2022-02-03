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
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ({

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xaHj");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "xaHj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Popup = () => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');

  const toggle = () => {
    setModal(!modal);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
    className: "login-popup"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6",
    className: "offset-md-3"
  }, __jsx("div", {
    className: "text-center"
  }, __jsx("h2", {
    className: "m-b-20"
  }, "click here for the form popup"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "popup-with-form btn btn-default primary-btn",
    onClick: toggle
  }, "click here")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: toggle,
    className: "modal-no-header close-right"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, __jsx("div", {
    className: "modal-body login-modal"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tabs: true,
    className: "nav nav-pills mb-5"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: activeTab == '1' ? 'active' : '',
    onClick: () => setActiveTab('1')
  }, "Login")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: activeTab == '2' ? 'active' : '',
    onClick: () => setActiveTab('2')
  }, "Sign Up"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    className: "tab-content",
    activeTab: activeTab
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1",
    "aria-labelledby": "pills-home-tab",
    className: "",
    role: "tabpanel"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
    className: "form-row"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-12"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "inputEmail"
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputEmail",
    placeholder: "Email",
    type: "email"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-12"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "inputPassword05"
  }, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputPassword05",
    placeholder: "Password",
    type: "password"
  }))), __jsx("button", {
    className: "btn primary-btn btn-default text-uppercase"
  }, "Login"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2",
    "aria-labelledby": "pills-profile-tab",
    className: "",
    role: "tabpanel"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx("div", {
    className: "form-row"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-12"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "inputEmail05"
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputEmail05",
    placeholder: "Email",
    type: "email"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-6"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "inputPassword04"
  }, "Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputPassword04",
    placeholder: "Password",
    type: "password"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "col-md-6"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "inputPassword4"
  }, "Confirm Password"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputPassword4",
    placeholder: "Password",
    type: "password"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    for: "inputAddress"
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "form-control",
    id: "inputAddress",
    placeholder: "1234 Main St",
    type: "text"
  })), __jsx("button", {
    className: "btn btn-default primary-btn text-uppercase"
  }, "Sign Up"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ })

/******/ });