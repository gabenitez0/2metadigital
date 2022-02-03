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
/******/ 	return __webpack_require__(__webpack_require__.s = 158);
/******/ })
/************************************************************************/
/******/ ({

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("852O");


/***/ }),

/***/ "852O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 575,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3
    }
  }]
};

const Team = () => __jsx("section", {
  className: "app2 team p-t-0"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title title2"
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/logo/2.png"
}), __jsx("h6", {
  className: "font-primary borders main-text"
}, __jsx("span", null, "Client Review")), __jsx("div", {
  className: "sub-title"
}, __jsx("h2", {
  className: "title-text text-capitalize text-center"
}, "Our Clients Love Us")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  xs: "12"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "owl-carousel owl-theme team-slider"
}, settings), __jsx("div", {
  className: "item"
}, __jsx("div", {
  className: "team-container"
}, __jsx("img", {
  alt: "",
  className: "img-fluid members",
  src: "/assets/images/app_landing2/team/1.png"
}), __jsx("div", {
  className: "text-center"
}, __jsx("h5", {
  className: "name"
}, "Ashekur Rahman"), __jsx("h6", {
  className: "post"
}, "Art Dirrector"), __jsx("p", {
  className: "team-para"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the")))), __jsx("div", {
  className: "item"
}, __jsx("div", {
  className: "team-container"
}, __jsx("img", {
  alt: "",
  className: "img-fluid members",
  src: "/assets/images/app_landing2/team/2.png"
}), __jsx("div", {
  className: "text-center"
}, __jsx("h5", {
  className: "name"
}, "Ashekur Rahman"), __jsx("h6", {
  className: "post"
}, "Art Dirrector"), __jsx("p", {
  className: "team-para"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the")))), __jsx("div", {
  className: "item"
}, __jsx("div", {
  className: "team-container"
}, __jsx("img", {
  alt: "",
  className: "img-fluid members",
  src: "/assets/images/app_landing2/team/3.png"
}), __jsx("div", {
  className: "text-center"
}, __jsx("h5", {
  className: "name"
}, "Ashekur Rahman"), __jsx("h6", {
  className: "post"
}, "Art Dirrector"), __jsx("p", {
  className: "team-para"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the")))), __jsx("div", {
  className: "item"
}, __jsx("div", {
  className: "team-container"
}, __jsx("img", {
  alt: "",
  className: "img-fluid members",
  src: "/assets/images/app_landing2/team/3.png"
}), __jsx("div", {
  className: "text-center"
}, __jsx("h5", {
  className: "name"
}, "Ashekur Rahman"), __jsx("h6", {
  className: "post"
}, "Art Dirrector"), __jsx("p", {
  className: "team-para"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });