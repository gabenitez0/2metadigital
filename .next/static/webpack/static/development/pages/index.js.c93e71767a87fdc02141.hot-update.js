webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/layouts/app1.js":
/*!*******************************!*\
  !*** ./pages/layouts/app1.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/common/header */ "./containers/common/header.js");
/* harmony import */ var _sections_index_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/index/banner */ "./pages/layouts/sections/index/banner.js");
/* harmony import */ var _sections_index_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/index/services */ "./pages/layouts/sections/index/services.js");
/* harmony import */ var _sections_index_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/index/about */ "./pages/layouts/sections/index/about.js");
/* harmony import */ var _sections_index_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/index/download */ "./pages/layouts/sections/index/download.js");
/* harmony import */ var _sections_index_screenshots__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/index/screenshots */ "./pages/layouts/sections/index/screenshots.js");
/* harmony import */ var _sections_index_tiempo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/index/tiempo */ "./pages/layouts/sections/index/tiempo.js");
/* harmony import */ var _sections_index_cta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/index/cta */ "./pages/layouts/sections/index/cta.js");
/* harmony import */ var _sections_index_historia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/index/historia */ "./pages/layouts/sections/index/historia.js");
/* harmony import */ var _sections_index_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/index/footer */ "./pages/layouts/sections/index/footer.js");
var _this = undefined,
    _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\app1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components












var App1 = function App1() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var ref = router.query.ref && router.query.ref.length > 7 ? router.query.ref : "541122505698";
  var link = "https://wa.me/".concat(ref, "?text=Hola%2C%20me%20interesa%20una%20p\xE1gina%20web%20profesional%20para%20mi%20negocio");
  var mon = router.query.mon === "usd" ? "$150 USD" : "$18000 ARS";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.setProperty('--primary', '#357fef');
    document.body.style.setProperty('--secondary', '#4e4e4e');
    document.body.style.setProperty('--light', '#13B8EA');
    document.body.style.setProperty('--dark', '#4E56F3');
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "app1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(_sections_index_banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(_sections_index_services__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(_sections_index_about__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_sections_index_download__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(_sections_index_screenshots__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(_sections_index_tiempo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(_sections_index_cta__WEBPACK_IMPORTED_MODULE_9__["default"], {
    link: link,
    mon: mon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(_sections_index_historia__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_sections_index_cta__WEBPACK_IMPORTED_MODULE_9__["default"], {
    link: link,
    mon: mon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(_sections_index_footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App1);

/***/ }),

/***/ "./pages/layouts/sections/index/historia.js":
/*!**************************************************!*\
  !*** ./pages/layouts/sections/index/historia.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax-tilt */ "./node_modules/react-parallax-tilt/dist/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\index\\historia.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var primary = {
  color: 'var(--primary)',
  borderColor: 'var(--primary)',
  marginBottom: 40
};

var Business = function Business() {
  return __jsx("section", {
    className: "saas2",
    id: "historia",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "set-center-div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "offers-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: " offer-heading-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 61
    }
  }, "Hola! Soy Gabriel, creador de 2MetaDigital")), __jsx("p", {
    className: "m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "A lo largo de mi carrera como emprendedor aprend\xED que el contacto humano, el trabajo en equipo y la comunicaci\xF3n transparente es muy importante para el crecimiento en cualquier \xE1rea de la vida, incluyendo los negocios, es por eso que quiero que trabajemos de la mejor forma y alcancemos nuestras METAS juntos!"), __jsx("div", {
    className: "bottom-border",
    style: primary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "offers-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: "offer-main-text ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, __jsx("b", {
    style: {
      fontWeight: 600
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 70
    }
  }, __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 98
    }
  }, "Sobre m\xED:"))), __jsx("p", {
    className: "offer-sub-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }, "Nac\xED y vivo en Buenos Aires, Argentina, tengo 24 a\xF1os y soy emprendedor desde hace casi 10 a\xF1os (desde mis 15 a\xF1os). No solo hice desarrollo web, pero esto es algo que hago desde mis inicios como emprendedor ya que es la herramienta que siempre me permiti\xF3 promocionar y vender mis productos y servicios en l\xEDnea."), __jsx("p", {
    className: "offer-sub-text mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 72
    }
  }, "En este 2022 estoy enfocado principalmente a este proyecto llamado 2metadigital, el cual inici\xE9 hace aproximadamente 2 a\xF1os, y en todo este tiempo aprend\xED a como transformar los servicios que brindo para realmente solucionar las necesidades de mis clientes."))))), __jsx("div", {
    className: "offers-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: "offer-main-text ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, __jsx("b", {
    style: {
      fontWeight: 600
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 70
    }
  }, __jsx("u", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 98
    }
  }, "Sobre 2MetaDigital:"))), __jsx("p", {
    className: "offer-sub-text ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, "Cuando empezamos con 2MetaDigital solo se enfocaba en vender eCommerces. En todo este tiempo conseguimos ampliar la gama de soluciones y perfeccionar nuestros servicios no solo en cuanto a solucionar problemas sino tambi\xE9n en cuanto a los costos de tiempo por trabajo, es decir que podemos entregar proyectos listos para funcionar en poco tiempo.")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "4",
    sm: "6",
    className: "m-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid m-t-20",
    style: {
      maxHeight: 700
    },
    loading: "lazy",
    src: "/assets/images/cert.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Business);

/***/ })

})
//# sourceMappingURL=index.js.c93e71767a87fdc02141.hot-update.js.map