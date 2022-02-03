module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 273);
/******/ })
/************************************************************************/
/******/ ({

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("XQNC");


/***/ }),

/***/ "XQNC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Commingsoon1 = () => __jsx("section", {
  className: "coming-soon p-0"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  fluid: true,
  className: "p-0"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "text-center"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  className: "p-0 set-bg-img"
}, __jsx("div", {
  className: "bg-coming-soon"
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "6",
  className: "bg-black"
}, __jsx("div", {
  className: "center-container"
}, __jsx("div", null, __jsx("div", null, __jsx("img", {
  alt: "",
  className: "coming-logo",
  src: "../assets/images/logo/6.png"
})), __jsx("h2", {
  className: "text-white our-web-text"
}, "Website Is Almost Ready"), __jsx("h6", {
  className: "launch-text"
}, "TIME LEFT UNTIL LAUNCHING"), __jsx("div", {
  className: "set-count"
}, __jsx("div", {
  className: "counters-content"
}, __jsx("div", {
  className: "count"
}, __jsx("div", {
  className: "counter-container"
}, __jsx("h2", {
  className: "text-white"
}, __jsx("span", {
  className: "days-text",
  id: "days"
}, "213"), __jsx("span", {
  className: "days gradient-text"
}, "days"))), __jsx("div", {
  className: "set-border-left"
}), __jsx("div", {
  className: "set-border-bottom"
}))), __jsx("div", {
  className: "counters-content"
}, __jsx("div", {
  className: "count"
}, __jsx("div", {
  className: "counter-container"
}, __jsx("h2", {
  className: " text-white"
}, __jsx("span", {
  className: "days-text gradient-text",
  id: "hours"
}, "8"), __jsx("span", {
  className: "days gradient-text"
}, "hours"))), __jsx("div", {
  className: "set-border-left"
}), __jsx("div", {
  className: "set-border-bottom"
}))), __jsx("div", {
  className: "counters-content"
}, __jsx("div", {
  className: "count"
}, __jsx("div", {
  className: "counter-container"
}, __jsx("h2", {
  className: "text-white"
}, __jsx("span", {
  className: "days-text gradient-text",
  id: "minutes"
}, "31"), __jsx("span", {
  className: "days gradient-text"
}, " minutes"))), __jsx("div", {
  className: "set-border-left"
}), __jsx("div", {
  className: "set-border-bottom"
}))), __jsx("div", {
  className: "counters-content"
}, __jsx("div", {
  className: "count no-border"
}, __jsx("div", {
  className: "counter-container"
}, __jsx("h2", {
  className: " text-white"
}, __jsx("span", {
  className: "days-text gradient-text",
  id: "seconds"
}, "44"), __jsx("span", {
  className: "days gradient-text"
}, "seconds"))), __jsx("div", {
  className: "set-border-left"
}), __jsx("div", {
  className: "set-border-bottom"
}))))), __jsx("h6", {
  className: "launch-text2"
}, "notify me when it's ready"), __jsx("div", null, __jsx("div", {
  className: "center-content"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, __jsx("div", {
  className: "d-flex"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
  className: "form-control radius-0",
  name: "email",
  placeholder: "Email Address",
  type: "email"
}), __jsx("div", {
  className: "button-primary"
}, __jsx("button", {
  className: " btn btn-default primary-btn radius-0 no-border",
  type: "submit"
}, "subscribe")))))), __jsx("div", {
  className: "social m-t-20"
}, __jsx("ul", null, __jsx("li", null, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook center-content"
}))), __jsx("li", null, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-twitter center-content"
}))), __jsx("li", null, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-google center-content"
}))), __jsx("li", null, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-instagram center-content"
}))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Commingsoon1);

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