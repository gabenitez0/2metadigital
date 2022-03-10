webpackHotUpdate("static\\development\\pages\\afiliados.js",{

/***/ "./pages/layouts/sections/modern-sass/work.js":
/*!****************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/work.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/layouts/modern/database */ "./database/layouts/modern/database.js");
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\work.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Work = function Work() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Initializing'),
      nav = _useState[0],
      setNav = _useState[1];

  var toggle = function toggle(item) {
    setNav(item);
  };

  return __jsx("section", {
    className: "saas1 howitwork",
    id: "como-funciona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "title-logo",
    className: "img-fluid",
    src: "/assets/images/saas1/title-logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "main-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "theme-color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 37
    }
  }, "C"), "\xF3mo ", __jsx("span", {
    className: "theme-color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 79
    }
  }, "F"), "unciona")), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "sub-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "p-padding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, "Buscamos personas que se encarguen de vender nuestros productos y servicios de manera independiente, desde la generaci\xF3n del lead hasta el cierre de la venta.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    className: "work-tab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "nav nav-pills justify-content-center ",
    id: "pills-tab",
    role: "tablist",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__["NavData"].map(function (item, i) {
    return __jsx("li", {
      className: "nav-item  text-center ".concat(item.title === nav ? 'active' : '', " "),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 41
      }
    }, __jsx("a", {
      "aria-selected": "true",
      className: "nav-link ".concat('work' == item.title ? 'active show' : ''),
      "data-toggle": "pill",
      onClick: function onClick() {
        return toggle(item.title);
      },
      role: "tab",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 45
      }
    }, __jsx("img", {
      alt: "tab-image-1",
      src: item.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 49
      }
    }), __jsx("h6", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 49
      }
    }, item.title), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 49
      }
    })));
  }))))), __jsx("div", {
    className: "work-tab-bg work-content p-t-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "tab-content text-center",
    id: "pills-tabContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__["ContentData"].map(function (item, i) {
    return __jsx("div", {
      className: "tab-pane fade ".concat(item.title === nav ? 'show active' : ''),
      role: "tabpanel",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, item.desc), item.button && item.button.length > 0 && __jsx("a", {
      className: "btn btn-default primary-btn",
      href: "#como-funciona",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 71
      }
    }, item.button));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ })

})
//# sourceMappingURL=afiliados.js.51745ca7521451230eda.hot-update.js.map