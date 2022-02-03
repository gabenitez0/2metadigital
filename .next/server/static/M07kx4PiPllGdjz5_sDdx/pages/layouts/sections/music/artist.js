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
/******/ 	return __webpack_require__(__webpack_require__.s = 214);
/******/ })
/************************************************************************/
/******/ ({

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("H8P/");


/***/ }),

/***/ "H8P/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("v6ZF");
/* harmony import */ var _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }]
};

const Artist = () => __jsx("section", {
  className: "music artist bg-artist bg-shadow-top-bottom",
  id: "artist"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title title4"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", null, "artists")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", null, "Our artists 2019")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "owl-carousel owl-theme artist-slider"
}, settings), _database_layouts_music_database__WEBPACK_IMPORTED_MODULE_3__["ArtistData"].map((data, i) => {
  return __jsx("div", {
    className: "item",
    key: i
  }, __jsx("div", {
    className: "album-artist text-center"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid set-relative overlay-img",
    src: data.img
  }), __jsx("div", null, __jsx("div", {
    className: "overlay-box2"
  })), __jsx("div", {
    className: "set-abs bottom-0 w-100 text-left set-z-index"
  }, __jsx("div", {
    className: "singers"
  }, __jsx("div", {
    className: "m-b-10"
  }, __jsx("h5", {
    className: "name text-white"
  }, data.name), __jsx("h6", {
    className: "musician text-white"
  }, data.music)), __jsx("div", {
    className: "rate"
  }, __jsx("div", null, __jsx("div", {
    className: "progress"
  }, __jsx("div", {
    "aria-valuemax": "100",
    "aria-valuemin": "0",
    "aria-valuenow": "70",
    className: "progress-bar",
    role: "progressbar",
    style: {
      width: "70%"
    }
  }, __jsx("span", {
    className: "sr-only"
  }, data.sr))))))), __jsx("div", {
    className: "set-abs cds"
  }, __jsx("img", {
    alt: "",
    className: "cd-animation",
    src: "/assets/images/music/artist/cd1.png"
  }), __jsx("img", {
    alt: "",
    className: "elipse",
    src: "/assets/images/music/artist/Ellipse.png"
  }))));
})), __jsx("div", {
  className: "artist-text text-center"
}, __jsx("p", {
  className: "text-white text-para"
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), __jsx("h4", {
  className: "text-uppercase dummy-text text-white"
}, "\u201C dummy text of the \u201D"))))));

/* harmony default export */ __webpack_exports__["default"] = (Artist);

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