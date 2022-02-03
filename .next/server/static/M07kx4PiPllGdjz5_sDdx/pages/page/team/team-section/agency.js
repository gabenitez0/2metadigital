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
/******/ 	return __webpack_require__(__webpack_require__.s = 280);
/******/ })
/************************************************************************/
/******/ ({

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QPXq");


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

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "QPXq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_pages_team_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DmhK");
/* harmony import */ var _database_pages_team_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_pages_team_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1
    }
  }]
};

const Agency = () => __jsx("section", {
  className: "agency format speaker expert-bg"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12"
}, __jsx("div", {
  className: "title title2 title-inner"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "font-primary borders text-center text-uppercase m-b-0"
}, __jsx("span", null, "team 4"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  lg: "3",
  md: "4"
}, __jsx("div", {
  className: "format-container"
}, __jsx("h6", {
  className: "borders-before text-uppercase font-600"
}, __jsx("span", null, "Meet our Expert")), __jsx("div", {
  className: "format-head-text"
}, __jsx("h2", null, "We Will Ready For ", __jsx("span", {
  className: "block-span"
}, "Your Services"))), __jsx("div", {
  className: "format-sub-text"
}, __jsx("p", {
  className: "about-para"
}, "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt.")), __jsx("a", {
  className: " btn btn-default btn-gradient text-white",
  href: "#"
}, "view more"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  lg: "9",
  md: "8"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "owl-carousel owl-theme speaker-slider"
}, settings), _database_pages_team_database__WEBPACK_IMPORTED_MODULE_3__["AgencyData"].map((data, i) => {
  return __jsx("div", {
    className: "item speker-container",
    key: i
  }, __jsx("div", {
    className: "text-center"
  }, __jsx("div", {
    className: "team-img"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: data.img
  }), __jsx("div", {
    className: "overlay"
  }), __jsx("div", {
    className: "social"
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
    className: "fa fa-globe center-content"
  })))))), __jsx("div", {
    className: "employee"
  }, __jsx("h5", {
    className: "e-name text-center font-secondary"
  }, data.name), __jsx("h6", {
    className: "post text-center "
  }, data.role))));
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Agency);

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