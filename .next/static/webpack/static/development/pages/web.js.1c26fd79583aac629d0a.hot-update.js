webpackHotUpdate("static\\development\\pages\\web.js",{

/***/ "./database/elements/price/database.js":
/*!*********************************************!*\
  !*** ./database/elements/price/database.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  PricingData: [{
    title: 'Basic',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 10,
    img: '/assets/images/app_landing1/pricing/11.png'
  }, {
    title: 'Advance',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 50,
    img: '/assets/images/app_landing1/pricing/22.png'
  }, {
    title: 'Standard',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 15,
    img: '/assets/images/app_landing1/pricing/33.png'
  }, {
    title: 'Basic',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 10,
    img: '/assets/images/app_landing1/pricing/11.png'
  }],
  PricingResume1: [{
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }, {
    title: "Silver",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '49'
  }, {
    title: "Golden",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '99'
  }, {
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }],
  PricingResume2: [{
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }, {
    title: "Silver",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '50'
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
    price: '0'
  }],
  Pricing: [{
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'free',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '0'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'medium',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '49'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'business',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '99'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'business',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '0'
  }]
};

/***/ }),

/***/ "./pages/elements/price/element/price5.js":
/*!************************************************!*\
  !*** ./pages/elements/price/element/price5.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _database_elements_price_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../database/elements/price/database */ "./database/elements/price/database.js");
/* harmony import */ var _database_elements_price_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_database_elements_price_database__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\elements\\price\\element\\price5.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      centerPadding: "160px",
      padding: "20px",
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      dots: true
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 3
    }
  }]
};

var PricingFive = function PricingFive() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "wrapper-full",
    id: "monthly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "owl-carousel owl-theme pricing-slider price-margin"
  }, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }), _database_elements_price_database__WEBPACK_IMPORTED_MODULE_4__["PricingResume2"].map(function (item, i) {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "price-container hover-overlay shadows bg-white text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "price-feature-container set-relative",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: "feature-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 53
      }
    }, __jsx("span", {
      className: "flaticon-rocket-ship feature-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 57
      }
    }), __jsx("h4", {
      className: "feature-text-heading text-center bold text-uppercase font-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 57
      }
    }, item.title), __jsx("hr", {
      className: "set-border",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 57
      }
    })), __jsx("div", {
      className: "price-features font-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 53
      }
    }, __jsx("h5", {
      className: "price-feature text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 57
      }
    }, item.feature1), __jsx("h5", {
      className: "price-feature text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 57
      }
    }, item.feature2), __jsx("h5", {
      className: "price-feature text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 57
      }
    }, item.feature3)), __jsx("div", {
      className: "price-value",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 53
      }
    }, __jsx("h6", {
      className: "price text-center font-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 57
      }
    }, "$", __jsx("span", {
      className: "large font-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 105
      }
    }, item.price), "/month")), __jsx("a", {
      className: "btn btn-default back-white",
      href: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 53
      }
    }, "purchase"))));
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PricingFive);

/***/ }),

/***/ "./pages/elements/price/element/price6.js":
false,

/***/ "./pages/layouts/sections/enterprice-sass/afiliados.js":
/*!*************************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/afiliados.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_price_element_price5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../elements/price/element/price5 */ "./pages/elements/price/element/price5.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\afiliados.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Pricing = function Pricing() {
  return __jsx("section", {
    className: "saas2 pricing m-0",
    id: "plan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "10",
    xs: "12",
    className: "offset-md-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "saas2-services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "10",
    className: "offset-md-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "main-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 33
    }
  }, "pricing plan")), __jsx("div", {
    className: "sub-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "sub-title-para",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 33
    }
  }, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), __jsx(_elements_price_element_price5__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 20
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ })

})
//# sourceMappingURL=web.js.1c26fd79583aac629d0a.hot-update.js.map