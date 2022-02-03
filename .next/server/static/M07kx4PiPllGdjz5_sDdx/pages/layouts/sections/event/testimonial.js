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
/******/ 	return __webpack_require__(__webpack_require__.s = 181);
/******/ })
/************************************************************************/
/******/ ({

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Rea4");


/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Rea4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ds1u");
/* harmony import */ var _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 575,
    settings: {
      arrows: false
    }
  }, {
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

const Testimonial = () => __jsx("section", {
  className: "event testimonial set-relative bg bg-img bg-about"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title title3"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: " text-white"
}, "testimonial")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "text-white"
}, "Register now and reserve your seat for this", __jsx("span", null, "year's Unice,"), " the largest ", __jsx("span", null, "web development"), " and online marketing", __jsx("span", null, "conference in UK,"), " covering everything you need to know in order to develop a successful online business.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "10",
  className: "offset-md-1 margin-b"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "owl-carousel owl-theme testimonial owl-loaded owl-drag",
  id: "testimonial"
}, settings), _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__["TestimonialData"].length > 0 ? _database_layouts_event_database__WEBPACK_IMPORTED_MODULE_3__["TestimonialData"].map((item, index) => __jsx("div", {
  className: "item p-t-30",
  key: `testimonial-${index}`
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xl: "10",
  xs: "12",
  className: "offset-xl-1"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  sm: "3"
}, __jsx("div", {
  className: " testimonial-msg set-relative"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: item.photo
}), __jsx("div", {
  className: "msg-box"
}, __jsx("div", {
  className: "center-content"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs",
  src: "/assets/images/event/testimonial/message.png"
}))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  sm: "9",
  className: "px-lg-4"
}, __jsx("div", {
  className: "quotes set-relative m-b-30"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs left-quote",
  src: "/assets/images/event/testimonial/i1.png"
}), __jsx("div", {
  className: "quote-text"
}, __jsx("h5", null, item.details)), __jsx("img", {
  alt: "",
  className: "img-fluid set-abs right-quote",
  src: "/assets/images/event/testimonial/i2.png"
})), __jsx("div", {
  className: "rating align-items-center"
}, __jsx("div", {
  className: "stars"
}, __jsx("ul", null, __jsx("li", null, __jsx("i", {
  className: "fa fa-star yellow"
}), __jsx("i", {
  className: "fa fa-star yellow"
}), __jsx("i", {
  className: "fa fa-star yellow"
}), __jsx("i", {
  className: "fa fa-star yellow"
}), __jsx("i", {
  className: "fa fa-star"
})))), __jsx("h5", {
  className: "name"
}, item.name, "- ", __jsx("span", null, " ", item.role)))))))) : 'No Testimonial Found')))));

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

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

/***/ "ds1u":
/***/ (function(module, exports) {

module.exports = {
  PricingData: [{
    title: 'Free',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 0
  }, {
    title: 'Silver',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 70
  }, {
    title: 'Golden',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 100
  }, {
    title: 'Silver',
    features: ['Easy Installations', 'Unlimited support', 'Free Forever'],
    price: 70
  }],
  TestimonialData: [{
    photo: '/assets/images/event/testimonial/L3-1.png',
    name: 'JHON DENAL',
    role: 'UI DESIGNER',
    details: "When You Innovate, You Make Mistakes.It Is Best To Admit Them Quickly, & Get On With Improving Your Other Innovations."
  }, {
    photo: '/assets/images/event/testimonial/L3-1.png',
    name: 'Kolan Motto',
    role: 'CEO, Therat',
    details: 'It goes without saying that customer data sec urity and compliance is top of mind in most retail board.'
  }, {
    photo: '/assets/images/event/testimonial/L3-1.png',
    name: 'Kolan Motto',
    role: 'CEO, Therat',
    details: 'It goes without saying that customer data sec urity and compliance is top of mind in most retail board.'
  }],
  BlogData: [{
    photo: '/assets/images/event/blog/1.jpg',
    title: 'Find Great Speaker For Event.',
    date: 'June 19, 2019',
    user: 'Admin',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }, {
    photo: '/assets/images/event/blog/2.jpg',
    title: 'Find Great Speaker For Event.',
    date: 'June 19, 2019',
    user: 'Admin',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }, {
    photo: '/assets/images/event/blog/3.jpg',
    title: 'Find Great Speaker For Event.',
    date: 'June 19, 2019',
    user: 'Admin',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }, {
    photo: '/assets/images/event/blog/2.jpg',
    title: 'Find Great Speaker For Event.',
    date: 'June 19, 2019',
    user: 'Admin',
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.text ever since the 1500s type specimen book '
  }],
  CounterData: [{
    img: '/assets/images/event/counter/1.png',
    count: 14,
    desc: 'Total Topics'
  }, {
    img: '/assets/images/event/counter/2.png',
    count: 8,
    desc: 'Total Speaker'
  }, {
    img: '/assets/images/event/counter/3.png',
    count: 542,
    desc: 'Total Event'
  }, {
    img: '/assets/images/event/counter/4.png',
    count: 14152,
    desc: 'Total Attendance'
  }],
  AllImgData: [{
    img: "/assets/images/event/gallery/1.jpg"
  }, {
    img: "/assets/images/event/gallery/2.jpg"
  }, {
    img: "/assets/images/event/gallery/3.jpg"
  }, {
    img: "/assets/images/event/gallery/2.jpg"
  }, {
    img: "/assets/images/event/gallery/1.jpg"
  }],
  UsZoneData: [{
    img: "/assets/images/event/gallery/3.jpg"
  }, {
    img: "/assets/images/event/gallery/2.jpg"
  }, {
    img: "/assets/images/event/gallery/1.jpg"
  }],
  AnnualData: [{
    img: "/assets/images/event/gallery/2.jpg"
  }],
  VisitData: [{
    img: "/assets/images/event/gallery/1.jpg"
  }, {
    img: "/assets/images/event/gallery/2.jpg"
  }]
};

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