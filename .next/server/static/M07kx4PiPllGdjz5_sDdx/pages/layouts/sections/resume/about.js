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
/******/ 	return __webpack_require__(__webpack_require__.s = 230);
/******/ })
/************************************************************************/
/******/ ({

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TYHg");


/***/ }),

/***/ "IQmK":
/***/ (function(module, exports) {

module.exports = {
  PricingData: [{
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '50'
  }, {
    title: "Silver",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }, {
    title: "Golden",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '100'
  }, {
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '50'
  }],
  ScheduleData: [{
    name: 'LATEST ANIMATION',
    img: '/assets/images/resume/icon/icon-resume.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    time: '8:00',
    endTime: '10:00'
  }, {
    name: 'MASTER IN WEBDESIGN',
    img: '/assets/images/resume/icon/icon-resume.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    time: '8:00',
    endTime: '10:00'
  }, {
    name: 'ADVANCE DEGREE',
    img: '/assets/images/resume/icon/icon-resume.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    time: '8:00',
    endTime: '10:00'
  }, {
    name: 'LATEST ANIMATION',
    img: '/assets/images/resume/icon/icon-resume.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    time: '8:00',
    endTime: '10:00'
  }],
  CounterData: [{
    img: '/assets/images/resume/icon/1.png',
    count: 1510,
    desc: 'Satisfied Customers'
  }, {
    img: '/assets/images/resume/icon/2.png',
    count: 306,
    desc: 'Total Speaker'
  }, {
    img: '/assets/images/resume/icon/3.png',
    count: 48502,
    desc: 'Hours Worked'
  }, {
    img: '/assets/images/resume/icon/4.png',
    count: 12,
    desc: 'Awwards Winning'
  }],
  ServiceData: [{
    img: '/assets/images/resume/service-exprience/1.png',
    name: 'UI design',
    desc: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    img: '/assets/images/resume/service-exprience/2.png',
    name: 'UX design',
    desc: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    img: '/assets/images/resume/service-exprience/5.png',
    name: 'web design',
    desc: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    img: '/assets/images/resume/service-exprience/6.png',
    name: 'web design',
    desc: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    img: '/assets/images/resume/service-exprience/3.png',
    name: 'web design',
    desc: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    img: '/assets/images/resume/service-exprience/4.png',
    name: 'web design',
    desc: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    img: '/assets/images/resume/service-exprience/7.png',
    name: 'web design',
    desc: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }, {
    img: '/assets/images/resume/service-exprience/8.png',
    name: 'web design',
    desc: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant and actionable.'
  }],
  AboutData: [{
    name: 'Photoshop',
    timer: '95%',
    exp: '4 Years Experince'
  }, {
    name: 'illustrator',
    timer: '95%',
    exp: '4 Years Experince'
  }, {
    name: 'html & css',
    timer: '95%',
    exp: '4 Years Experince'
  }, {
    name: 'wordpress',
    timer: '95%',
    exp: '4 Years Experince'
  }],
  DesignImgData: [{
    img: '/assets/images/resume/work/1.jpg'
  }, {
    img: '/assets/images/resume/work/2.jpg'
  }, {
    img: '/assets/images/resume/work/3.jpg'
  }, {
    img: '/assets/images/resume/work/4.jpg'
  }],
  GraphicsImgData: [{
    img: '/assets/images/resume/work/5.jpg'
  }, {
    img: '/assets/images/resume/work/6.jpg'
  }, {
    img: '/assets/images/resume/work/7.jpg'
  }, {
    img: '/assets/images/resume/work/8.jpg'
  }],
  BrandingImgData: [{
    img: '/assets/images/resume/work/5.jpg'
  }, {
    img: '/assets/images/resume/work/1.jpg'
  }, {
    img: '/assets/images/resume/work/2.jpg'
  }, {
    img: '/assets/images/resume/work/8.jpg'
  }],
  PhotoGraphyImgData: [{
    img: '/assets/images/resume/work/3.jpg'
  }, {
    img: '/assets/images/resume/work/5.jpg'
  }, {
    img: '/assets/images/resume/work/6.jpg'
  }, {
    img: '/assets/images/resume/work/8.jpg'
  }],
  AllImgData: [{
    img: '/assets/images/resume/work/1.jpg'
  }, {
    img: '/assets/images/resume/work/2.jpg'
  }, {
    img: '/assets/images/resume/work/3.jpg'
  }, {
    img: '/assets/images/resume/work/4.jpg'
  }, {
    img: '/assets/images/resume/work/5.jpg'
  }, {
    img: '/assets/images/resume/work/6.jpg'
  }, {
    img: '/assets/images/resume/work/7.jpg'
  }, {
    img: '/assets/images/resume/work/8.jpg'
  }]
};

/***/ }),

/***/ "TYHg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_resume_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IQmK");
/* harmony import */ var _database_layouts_resume_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_resume_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const About = () => __jsx("section", {
  className: "resume about",
  id: "about"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx("div", {
  className: "title title2"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "8",
  className: "offset-md-2"
}, __jsx("h6", {
  className: "font-primary borders main-text text-uppercase"
}, __jsx("span", null, "about")), __jsx("div", {
  className: "sub-title"
}, __jsx("div", null, __jsx("h2", {
  className: "title-text"
}, "About me")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, _database_layouts_resume_database__WEBPACK_IMPORTED_MODULE_1__["AboutData"].map((item, i) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "3",
    xs: "6",
    key: i
  }, __jsx("div", {
    className: "text-center radial"
  }, __jsx("div", {
    className: "radial-bar radial-bar-primary",
    "data-label": item.timer
  }), __jsx("h4", {
    className: "color-light"
  }, item.name), __jsx("div", {
    className: "border-container"
  }, __jsx("div", {
    className: "borders-bottom"
  })), __jsx("div", null, __jsx("h4", null, item.exp))));
})), __jsx("div", {
  className: "text-center m-t-50"
}, __jsx("a", {
  className: "btn btn-default primary-btn"
}, "know more now"))));

/* harmony default export */ __webpack_exports__["default"] = (About);

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