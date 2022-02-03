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
/******/ 	return __webpack_require__(__webpack_require__.s = 168);
/******/ })
/************************************************************************/
/******/ ({

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ofLw");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "ofLw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }





const LeftNavButton = props => {
  const {
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: "slick-arrow",
    style: _objectSpread({}, style, {
      marginLeft: '0%'
    }),
    onClick: onClick
  }, __jsx("img", {
    src: "/assets/images/music/gallery/gallery-icon/left.png",
    alt: "arrow_left"
  }));
};

const RightNavButton = props => {
  const {
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: "slick-arrow",
    style: _objectSpread({}, style, {
      display: 'block',
      marginLeft: '95.5%'
    }),
    onClick: onClick
  }, __jsx("img", {
    src: "/assets/images/music/gallery/gallery-icon/right.png",
    alt: "arrow_left"
  }));
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: __jsx(LeftNavButton, null),
  nextArrow: __jsx(RightNavButton, null)
};

const Testimonial = () => __jsx("section", {
  className: "saas2 testimonial bg-gradient"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "text-white"
}, "Testimonial")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "sub-title-para text-white"
}, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
  className: "testimonial",
  id: "testimonial"
}, settings), __jsx("div", {
  className: "item p-t-30"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  lg: "10",
  xs: "12",
  className: "offset-lg-1"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  sm: "3"
}, __jsx("div", {
  className: "testimonial-msg set-relative"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/event/testimonial/L3-1.png"
}), __jsx("div", {
  className: "msg-box"
}, __jsx("div", {
  className: "center-content"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs",
  src: "/assets/images/event/testimonial/message.png"
}))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  sm: "9"
}, __jsx("div", {
  className: "quote-margin"
}, __jsx("div", {
  className: "quotes set-relative m-b-30"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs left-quote",
  src: "/assets/images/event/testimonial/i1.png"
}), __jsx("div", {
  className: "quote-text"
}, __jsx("h6", {
  className: "text-white"
}, "When you innovate, you make mistakes.It is best to admit them quickly, & get on with improving your other innovations.")), __jsx("img", {
  alt: "",
  className: "img-fluid set-abs right-quote",
  src: "/assets/images/event/testimonial/i2.png"
})), __jsx("div", {
  className: "rating align-items-center"
}, __jsx("div", {
  className: "stars"
}, __jsx("ul", null, __jsx("li", null, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star"
})))), __jsx("h5", {
  className: "name"
}, "Jhon Denal - ", __jsx("span", null, " UI Designer"))))), __jsx("div", null)))), __jsx("div", {
  className: "item p-t-30"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  lg: "10",
  xs: "12",
  className: "offset-lg-1"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  sm: "3"
}, __jsx("div", {
  className: " testimonial-msg set-relative"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/event/testimonial/L3-1.png"
}), __jsx("div", {
  className: "msg-box"
}, __jsx("div", {
  className: "center-content"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs",
  src: "/assets/images/event/testimonial/message.png"
}))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  sm: "9"
}, __jsx("div", {
  className: "quote-margin"
}, __jsx("div", {
  className: "quotes set-relative m-b-20"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs left-quote",
  src: "/assets/images/event/testimonial/i1.png"
}), __jsx("div", {
  className: "quote-text"
}, __jsx("h6", {
  className: "text-white"
}, "When you innovate, you make mistakes.It is best to admit them quickly, & get on with improving your other innovations.")), __jsx("img", {
  alt: "",
  className: "img-fluid set-abs right-quote",
  src: "/assets/images/event/testimonial/i2.png"
})), __jsx("div", {
  className: "rating align-items-center"
}, __jsx("div", {
  className: "stars"
}, __jsx("ul", null, __jsx("li", null, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star"
})))), __jsx("h5", {
  className: "name"
}, "Jhon Denal - ", __jsx("span", null, " UI Designer"))))), __jsx("div", null)))))))));

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ });