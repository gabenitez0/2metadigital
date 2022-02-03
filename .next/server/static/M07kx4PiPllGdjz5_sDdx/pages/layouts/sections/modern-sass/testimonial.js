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
/******/ 	return __webpack_require__(__webpack_require__.s = 211);
/******/ })
/************************************************************************/
/******/ ({

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UYWM");


/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "UYWM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Testimonial = () => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const toggle = () => {
    setModal(!modal);
  };

  return __jsx("section", {
    className: "saas1 testimonial videos testimonial-bg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    className: "text-center"
  }, __jsx("div", {
    className: "title"
  }, __jsx("img", {
    alt: "title-logo",
    className: "img-fluid",
    src: "/assets/images/saas1/title-logo.png"
  }), __jsx("div", {
    className: "main-title"
  }, __jsx("h2", null, __jsx("span", {
    className: "theme-color"
  }, "5"), "0k ", __jsx("span", {
    className: "theme-color"
  }, "E"), "xperts ", __jsx("span", {
    className: "theme-color"
  }, "T"), "rust ", __jsx("span", {
    className: "theme-color"
  }, "U"), "s")), __jsx("hr", null), __jsx("div", {
    className: "sub-title"
  }, __jsx("p", {
    className: "p-padding"
  }, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "6",
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
    src: "/assets/images/saas1/testimonial-video-icon.png"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    centered: true,
    size: "lg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
    toggle: toggle,
    className: "modal-no-header close-up"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
    className: "iframe-modal"
  }, __jsx("iframe", {
    className: "mfp-iframe",
    frameborder: "0",
    allowfullscreen: "",
    src: "//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "6"
  }, __jsx("div", {
    className: "testimonial-slider"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "testimonial"
  }, __jsx("div", {
    className: "testimonial-box"
  }, __jsx("img", {
    alt: "dot",
    src: "/assets/images/saas1/testimonail-dot.png"
  }), __jsx("h6", null, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), __jsx("div", {
    className: "testi-profile"
  }, __jsx("div", {
    className: "media"
  }, __jsx("img", {
    alt: "profile-testimonial",
    src: "/assets/images/saas1/testi-profile.png"
  }), __jsx("div", {
    className: "media-body"
  }, __jsx("h5", {
    className: "mt-0"
  }, "Elmer Harvy"), __jsx("h6", null, "Graphics Designer"))))), __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "testimonial"
  }, __jsx("div", {
    className: "testimonial-box"
  }, __jsx("img", {
    alt: "dot",
    src: "/assets/images/saas1/testimonail-dot.png"
  }), __jsx("h6", null, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), __jsx("div", {
    className: "testi-profile"
  }, __jsx("div", {
    className: "media"
  }, __jsx("img", {
    alt: "Generic placeholder image",
    src: "/assets/images/saas1/testi-profile.png"
  }), __jsx("div", {
    className: "media-body"
  }, __jsx("h5", {
    className: "mt-0"
  }, "Elmer Harvy"), __jsx("h6", null, "Graphics Designer"))))), __jsx("div", {
    className: "item"
  }, __jsx("div", {
    className: "testimonial"
  }, __jsx("div", {
    className: "testimonial-box"
  }, __jsx("img", {
    alt: "dot",
    src: "/assets/images/saas1/testimonail-dot.png"
  }), __jsx("h6", null, "Life before Company was very chaotic \u2014 we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined. "))), __jsx("div", {
    className: "testi-profile"
  }, __jsx("div", {
    className: "media"
  }, __jsx("img", {
    alt: "profile",
    src: "/assets/images/saas1/testi-profile.png"
  }), __jsx("div", {
    className: "media-body"
  }, __jsx("h5", {
    className: "mt-0"
  }, "Elmer Harvy"), __jsx("h6", null, "Graphics Designer")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

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