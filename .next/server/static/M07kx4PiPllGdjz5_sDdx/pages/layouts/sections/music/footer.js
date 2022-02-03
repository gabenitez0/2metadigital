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
/******/ 	return __webpack_require__(__webpack_require__.s = 219);
/******/ })
/************************************************************************/
/******/ ({

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("saXP");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "saXP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("v6ZF");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Footer = () => __jsx("footer", {
  className: "music bg-footer bg-shadow-top-bottom pt-0"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_1__["FooterData"].map((item, i) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "4",
    key: i
  }, __jsx("div", {
    className: "contact-details text-center"
  }, __jsx("h4", {
    className: "contact-heading gradient-text"
  }, item.add1), __jsx("h6", {
    className: "contact-sub-text"
  }, item.add2, ","), __jsx("h6", {
    className: "contact-sub-text"
  }, item.add3, ".")));
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
  className: "form-footer p-t-50"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6",
  sm: "6"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  placeholder: "your name",
  type: "text"
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6",
  sm: "6"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  placeholder: "your email",
  type: "text"
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "12"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], null, __jsx("textarea", {
  className: "form-control",
  placeholder: "your message",
  rows: "6"
}))), __jsx("div", {
  className: "booking"
}, __jsx("a", {
  className: "btn btn-default btn-gradient m-0-auto"
}, "send"))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "v6ZF":
/***/ (function(module, exports) {

module.exports = {
  AlbumData: [{
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }, {
    name: 'decorner',
    date: '20 December',
    day: 'Sunday',
    time: '23:00-0:00'
  }],
  SponsorData: [{
    img: "/assets/images/music/sponser/1.png"
  }, {
    img: "/assets/images/music/sponser/2.png"
  }, {
    img: "/assets/images/music/sponser/3.png"
  }, {
    img: "/assets/images/music/sponser/4.png"
  }, {
    img: "/assets/images/music/sponser/5.png"
  }, {
    img: "/assets/images/music/sponser/6.png"
  }, {
    img: "/assets/images/music/sponser/7.png"
  }, {
    img: "/assets/images/music/sponser/8.png"
  }, {
    img: "/assets/images/music/sponser/9.png"
  }, {
    img: "/assets/images/music/sponser/10.png"
  }, {
    img: "/assets/images/music/sponser/11.png"
  }, {
    img: "/assets/images/music/sponser/12.png"
  }],
  GalleryData: [{
    img: "/assets/images/music/gallery/1.jpg",
    tag: "Special Music Event",
    year: "2019"
  }, {
    img: "/assets/images/music/gallery/2.jpg",
    tag: "Special Music Event",
    year: "2019"
  }, {
    img: "/assets/images/music/gallery/3.png",
    tag: "Special Music Event",
    year: "2019"
  }, {
    img: "/assets/images/music/gallery/4.jpg",
    tag: "Special Music Event",
    year: "2019"
  }, {
    img: "/assets/images/music/gallery/5.jpg",
    tag: "Special Music Event",
    year: "2019"
  }],
  BlogData: [{
    img: "/assets/images/event/blog/1.jpg",
    role: 'admin',
    date: '5 September 2019',
    title: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .'
  }, {
    img: "/assets/images/event/blog/2.jpg",
    role: 'admin',
    date: '5 September 2019',
    title: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .'
  }, {
    img: "/assets/images/event/blog/3.jpg",
    role: 'admin',
    date: '5 September 2019',
    title: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .'
  }, {
    img: "/assets/images/event/blog/2.jpg",
    role: 'admin',
    date: '5 September 2019',
    title: 'Find Great Speaker For Event.',
    heading: 'Detais This Event',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .'
  }],
  TestimonialData: [{
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    title: 'Alan Licker',
    role: 'CEO OF SC.'
  }, {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    title: 'Alan Licker',
    role: 'CEO OF SC.'
  }],
  FooterData: [{
    add1: 'SHOW ADDRESS',
    add2: 'Exllasa Mall',
    add3: 'City mall, marid'
  }, {
    add1: 'CONTACT US',
    add2: '+09 56895689',
    add3: '+09 56895690'
  }, {
    add1: 'DROP YOUR MAIL',
    add2: 'demo1@gmail.com',
    add3: 'demo123@gmail.com'
  }],
  ArtistData: [{
    img: '/assets/images/music/artist/1.png',
    name: 'decorner',
    music: 'musician',
    sr: '70% Complete'
  }, {
    img: '/assets/images/music/artist/2.png',
    name: 'decorner',
    music: 'musician',
    sr: '70% Complete'
  }, {
    img: '/assets/images/music/artist/3.png',
    name: 'decorner',
    music: 'musician',
    sr: '70% Complete'
  }, {
    img: '/assets/images/music/artist/1.png',
    name: 'decorner',
    music: 'musician',
    sr: '70% Complete'
  }]
};

/***/ })

/******/ });