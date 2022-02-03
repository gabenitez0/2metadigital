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
/******/ 	return __webpack_require__(__webpack_require__.s = 243);
/******/ })
/************************************************************************/
/******/ ({

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xs8h");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mNMO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("upKs");
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countdown_now__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CountdownComponent = props => {
  const {
    0: style,
    1: setStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(function () {
      setStyle({
        style: {
          display: 'none'
        }
      });
    }.bind(undefined), 1000);
  }, []);

  const Completionist = () => __jsx("span", null, "You are good to go!");

  const renderer = ({
    total,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    completed
  }) => {
    if (completed) {
      // Render a completed state
      return __jsx(Completionist, null);
    } else {
      // Render a countdown
      return __jsx("div", {
        className: "countdown"
      }, __jsx("ul", null, __jsx("li", null, __jsx("div", {
        className: "event-counter"
      }, __jsx("h2", null, __jsx("span", {
        id: "days",
        className: "time digits"
      }, days), __jsx("span", {
        className: "title"
      }, "days")), __jsx("div", {
        className: "set-border-left"
      }), __jsx("div", {
        className: "set-border-bottom"
      }))), __jsx("li", null, __jsx("div", {
        className: "event-counter"
      }, __jsx("h2", null, __jsx("span", {
        id: "hours",
        className: "time digits"
      }, hours), __jsx("span", {
        className: "title"
      }, "hours")), __jsx("div", {
        className: "set-border-left"
      }), __jsx("div", {
        className: "set-border-bottom"
      }))), __jsx("li", null, __jsx("div", {
        className: "event-counter"
      }, __jsx("h2", null, __jsx("span", {
        id: "minutes",
        className: "time digits"
      }, minutes), __jsx("span", {
        className: "title"
      }, "minutes")), __jsx("div", {
        className: "set-border-left"
      }), __jsx("div", {
        className: "set-border-bottom"
      }))), __jsx("li", null, __jsx("div", {
        className: "event-counter"
      }, __jsx("h2", null, __jsx("span", {
        id: "seconds",
        className: "time digits"
      }, seconds), __jsx("span", {
        className: "title"
      }, "seconds")), __jsx("div", {
        className: "set-border-left"
      }), __jsx("div", {
        className: "set-border-bottom"
      })))));
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var coundown = new Date(year, month, day + 10).getTime();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_countdown_now__WEBPACK_IMPORTED_MODULE_1___default.a, {
    date: coundown,
    renderer: renderer
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (CountdownComponent);

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "upKs":
/***/ (function(module, exports) {

module.exports = require("react-countdown-now");

/***/ }),

/***/ "xs8h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_common_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mNMO");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Countdown = () => __jsx("section", {
  className: "wedding countdown-bg bg set-relative"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "8",
  className: "offset-md-2"
}, __jsx("div", {
  className: "title"
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png"
}), __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "gradient-text"
}, "count down")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", null, "A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  xl: "8",
  className: "offset-xl-2"
}, __jsx("div", {
  className: "wedding-time "
}, __jsx("div", null, __jsx("div", {
  className: "timimg-wedding"
}, __jsx(_containers_common_countdown__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)))), __jsx("div", {
  className: "schedule text-center"
}, __jsx("h3", {
  className: "m-b-15 zexson-text"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker m-r-10"
}), " Zexson Pro, New York, NY 254"), __jsx("h4", {
  className: "schedule-date"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-calendar m-r-10"
}), "01-04 March 2019"))))));

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

/******/ });