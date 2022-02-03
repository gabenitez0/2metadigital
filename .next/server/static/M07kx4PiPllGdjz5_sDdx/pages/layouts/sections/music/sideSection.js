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
/******/ 	return __webpack_require__(__webpack_require__.s = 221);
/******/ })
/************************************************************************/
/******/ ({

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7/Nx");


/***/ }),

/***/ "7/Nx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SideSection = () => {
  const {
    0: sideSection,
    1: setSideSection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const removeSection = () => {
    setSideSection(false);
    document.querySelector('.side-section').classList.remove('d-block');
  };

  return __jsx("div", {
    className: "music side-section",
    id: "side-section"
  }, __jsx("div", {
    "aria-label": "media player",
    className: "jp-audio",
    id: "jp_container_1_1",
    role: "application"
  }, __jsx("div", {
    className: "jp-type-playlist"
  }, __jsx("div", {
    className: "jp-gui jp-interface"
  }, __jsx("div", {
    className: "side-player"
  }, __jsx("div", {
    className: "text-center"
  }, __jsx("div", {
    className: "gradient-block"
  }, __jsx("div", {
    className: "animation-circle-inverse"
  }, __jsx("i", null), __jsx("i", null), __jsx("i", null)), __jsx("h6", {
    className: "now-play"
  }, "now playing")), __jsx("img", {
    alt: "",
    className: "img-fluid girls",
    src: "/assets/images/music/icons/girl-side.jpg"
  }), __jsx("div", {
    className: "author-text"
  }, __jsx("h5", {
    className: "song-text"
  }, "Latest Song"), __jsx("h6", {
    className: "song-sub-text"
  }, "Zrial doj"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("div", {
    className: "jp-progress"
  }, __jsx("div", {
    className: "jp-seek-bar"
  }, __jsx("div", {
    className: "jp-play-bar"
  }))), __jsx("div", {
    className: "jp-time-holder"
  }, __jsx("div", {
    "aria-label": "time",
    className: "jp-current-time",
    role: "timer"
  }, "\xA0"), __jsx("div", {
    "aria-label": "duration",
    className: "jp-duration",
    role: "timer"
  }, "\xA0")), __jsx("div", {
    className: "jp-controls"
  }, __jsx("div", {
    className: "button-container"
  }, __jsx("button", {
    className: "jp-previous",
    role: "button",
    tabIndex: "0"
  }), __jsx("button", {
    className: "jp-play",
    role: "button",
    tabIndex: "0"
  }), __jsx("button", {
    className: "jp-next",
    role: "button",
    tabIndex: "0"
  })), __jsx("button", {
    className: "btn-sidebar",
    onClick: removeSection
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-times"
  }))), __jsx("div", {
    className: "jp-playlist"
  }, __jsx("ul", null, __jsx("li", null, "\xA0")))), __jsx("div", {
    className: "jp-no-solution"
  }, __jsx("span", null, "Update Required"), "To play the media you will need to either update your browser to a recent version or update your", __jsx("a", {
    href: "http://get.adobe.com/flashplayer/",
    target: "_blank"
  }, "Flash plugin"), "."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideSection);

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