webpackHotUpdate("static\\development\\pages\\recibo.js",{

/***/ "./pages/recibo.js":
/*!*************************!*\
  !*** ./pages/recibo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\recibo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Recibo = function Recibo() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var m = router.query.m;
  var p = router.query.p;
  var paypal = "https://paypal.me/2metadigital/".concat(p);
  var id = router.query.id;
  var factura = "https://app.hubspot.com/quotes/".concat(id);
  var header = {
    background: 'var(--primary)'
  };
  var bg = {
    background: 'var(--primary)',
    color: 'white',
    padding: '0 10px'
  };
  var line = {
    lineHeight: 1.5
  };
  var title = {
    lineHeight: 1.5,
    color: 'var(--secondary)',
    fontWeight: 600
  };
  var step = {
    borderLeft: '3px solid'
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.body.style.setProperty('--primary', '#425b76');
    document.body.style.setProperty('--secondary', '#33475b');
    document.body.style.setProperty('--light', '#13B8EA');
    document.body.style.setProperty('--dark', '#4E56F3');
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Presupuesto de Proyecto para ", m, " - 2MetaDigital"), __jsx("meta", {
    description: "Hacemos p\xE1ginas web de alto impacto con dise\xF1os profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio.",
    content: "",
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Hacemos p\xE1ginas web de alto impacto con dise\xF1os profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio.",
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/fav1.png",
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/meta1.png",
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "robots",
    content: "noindex",
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: header,
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "",
    src: "/assets/images/logo/logo4neg.png",
    className: "jsx-2535752480" + " " + "img-fluid p-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })))), __jsx("div", {
    style: header,
    className: "jsx-2535752480" + " " + "m-b-20 p-t-100 p-b-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("h1", {
    style: line,
    className: "jsx-2535752480" + " " + "m-0 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 53
    }
  }, "Presupuesto de proyecto")), __jsx("p", {
    style: line,
    className: "jsx-2535752480" + " " + "text-white m-b-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Para: ", __jsx("u", {
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 65
    }
  }, m)), __jsx("p", {
    style: line,
    className: "jsx-2535752480" + " " + "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Id: ", id)))), __jsx("div", {
    className: "jsx-2535752480" + " " + "m-t-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    style: step,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-2535752480" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 48
    }
  }, "Paso 1")), __jsx("h2", {
    style: title,
    className: "jsx-2535752480" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Presupuesto"), __jsx("p", {
    style: line,
    className: "jsx-2535752480" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Accede a los detalles del presupuesto."), __jsx("a", {
    href: factura,
    target: "_blank",
    className: "jsx-2535752480" + " " + "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Ver Presupuesto \u2192")))), __jsx("div", {
    className: "jsx-2535752480" + " " + "mt-5 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    style: step,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-2535752480" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 48
    }
  }, "Paso 2")), __jsx("h2", {
    style: title,
    className: "jsx-2535752480" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Primer pago (50%)"), __jsx("p", {
    style: line,
    className: "jsx-2535752480" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "El primera mitad del pago se realiza para empezar con el trabajo."), __jsx("a", {
    href: paypal,
    target: "_blank",
    className: "jsx-2535752480" + " " + "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Pagar \u2192")))), __jsx("div", {
    className: "jsx-2535752480" + " " + "mt-5 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    style: step,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-2535752480" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 48
    }
  }, "Paso 3")), __jsx("h2", {
    style: title,
    className: "jsx-2535752480" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "Segundo pago (50%)"), __jsx("p", {
    style: line,
    className: "jsx-2535752480" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "El segunda mitad del pago se realiza cuando trabajo est\xE1 completo."), __jsx("a", {
    href: paypal,
    target: "_blank",
    className: "jsx-2535752480" + " " + "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Pagar \u2192")))), __jsx("div", {
    style: header,
    className: "jsx-2535752480" + " " + "mt-5 pt-3 pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://wa.me/541122505698",
    target: "_blank",
    className: "jsx-2535752480" + " " + "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2535752480",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 89
    }
  }, "Contacto")), __jsx("span", {
    className: "jsx-2535752480" + " " + "text-white d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "Copyright 2022 - 2MetaDigital")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2535752480",
    __self: _this
  }, ".button.jsx-2535752480{background:var(--primary);color:white;padding:15px 20px;display:block;-webkit-text-decoration:underline;text-decoration:underline;}.button.jsx-2535752480:hover{background:var(--secondary);padding:15px 30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxiYWNrdXAyXFx3ZWJcXDJtZXRhZGlnaXRhbFxcdW5pY2VcXHBhZ2VzXFxyZWNpYm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkdrQixBQUdxQyxBQU9FLDBCQU5oQixFQU9NLFVBTkEsUUFPcEIsVUFOZ0IsY0FDWSw0REFDNUIiLCJmaWxlIjoiRjpcXGJhY2t1cDJcXHdlYlxcMm1ldGFkaWdpdGFsXFx1bmljZVxccGFnZXNcXHJlY2liby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7Q29udGFpbmVyLCBDb2x9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgUmVjaWJvID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBtID0gcm91dGVyLnF1ZXJ5Lm07XHJcbiAgY29uc3QgcCA9IHJvdXRlci5xdWVyeS5wO1xyXG4gIGNvbnN0IHBheXBhbCA9IGBodHRwczovL3BheXBhbC5tZS8ybWV0YWRpZ2l0YWwvJHtwfWBcclxuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICBjb25zdCBmYWN0dXJhID0gYGh0dHBzOi8vYXBwLmh1YnNwb3QuY29tL3F1b3Rlcy8ke2lkfWBcclxuXHJcbiAgY29uc3QgaGVhZGVyID0ge1xyXG4gICAgYmFja2dyb3VuZDogJ3ZhcigtLXByaW1hcnkpJ1xyXG4gIH1cclxuICBjb25zdCBiZyA9IHtcclxuICAgIGJhY2tncm91bmQ6ICd2YXIoLS1wcmltYXJ5KScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHBhZGRpbmc6ICcwIDEwcHgnXHJcbiAgfVxyXG4gIGNvbnN0IGxpbmUgPSB7XHJcbiAgICBsaW5lSGVpZ2h0OiAxLjVcclxuICB9XHJcbiAgY29uc3QgdGl0bGUgPSB7XHJcbiAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICBjb2xvcjogJ3ZhcigtLXNlY29uZGFyeSknLFxyXG4gICAgZm9udFdlaWdodDogNjAwLFxyXG4gIH1cclxuICBjb25zdCBzdGVwID0ge1xyXG4gICAgYm9yZGVyTGVmdDogJzNweCBzb2xpZCdcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLXByaW1hcnknLCAnIzQyNWI3NicpXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLXNlY29uZGFyeScsICcjMzM0NzViJylcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGlnaHQnLCAnIzEzQjhFQScpXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLWRhcmsnLCAnIzRFNTZGMycpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+UHJlc3VwdWVzdG8gZGUgUHJveWVjdG8gcGFyYSB7bX0gLSAyTWV0YURpZ2l0YWw8L3RpdGxlPlxyXG5cclxuICAgICAgICAgIDxtZXRhIGRlc2NyaXB0aW9uPSdIYWNlbW9zIHDDoWdpbmFzIHdlYiBkZSBhbHRvIGltcGFjdG8gY29uIGRpc2XDsW9zIHByb2Zlc2lvbmFsZXMgcmVkYWNjaW9uZXMgcGVyc3Vhc2l2YXMgZW5mb2NhZGFzIGVuIHZlbnRhcyBxdWUgdHJhbnNtaXRlbiBlbCB2YWxvciByZWFsIGRlIHR1IHByb2R1Y3RvIG8gc2VydmljaW8uJyBjb250ZW50PScnIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhhY2Vtb3MgcMOhZ2luYXMgd2ViIGRlIGFsdG8gaW1wYWN0byBjb24gZGlzZcOxb3MgcHJvZmVzaW9uYWxlcyByZWRhY2Npb25lcyBwZXJzdWFzaXZhcyBlbmZvY2FkYXMgZW4gdmVudGFzIHF1ZSB0cmFuc21pdGVuIGVsIHZhbG9yIHJlYWwgZGUgdHUgcHJvZHVjdG8gbyBzZXJ2aWNpby5cIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvZmF2MS5wbmdcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvbWV0YTEucG5nXCIgLz5cclxuICAgICAgXHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e2hlYWRlcn0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb2wgbWQ9XCI4XCIgY2xhc3NOYW1lPSdvZmZzZXQtbWQtMic+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHAtMlwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28vbG9nbzRuZWcucG5nXCIgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWItMjAgcC10LTEwMCBwLWItMTAwXCIgc3R5bGU9e2hlYWRlcn0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb2wgbWQ9XCI4XCIgY2xhc3NOYW1lPSdvZmZzZXQtbWQtMic+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtLTAgbS1iLTIwXCIgc3R5bGU9e2xpbmV9PjxiPlByZXN1cHVlc3RvIGRlIHByb3llY3RvPC9iPjwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbS1iLTEwXCIgc3R5bGU9e2xpbmV9PlBhcmE6IDx1PnttfTwvdT48L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiBzdHlsZT17bGluZX0+SWQ6IHtpZH08L3A+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS10LTQwXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb2wgbWQ9XCI4XCIgY2xhc3NOYW1lPSdvZmZzZXQtbWQtMicgc3R5bGU9e3N0ZXB9PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibS0wIHRleHQtdXBwZXJjYXNlXCI+PHU+UGFzbyAxPC91PjwvaDQ+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtLTAgbWItM1wiIHN0eWxlPXt0aXRsZX0+UHJlc3VwdWVzdG88L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLWItMTAgbWItNFwiIHN0eWxlPXtsaW5lfT5BY2NlZGUgYSBsb3MgZGV0YWxsZXMgZGVsIHByZXN1cHVlc3RvLjwvcD5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCIgaHJlZj17ZmFjdHVyYX0gdGFyZ2V0PVwiX2JsYW5rXCI+VmVyIFByZXN1cHVlc3RvIOKGkjwvYT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IG0tYi0yMFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInIHN0eWxlPXtzdGVwfT5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm0tMCB0ZXh0LXVwcGVyY2FzZVwiPjx1PlBhc28gMjwvdT48L2g0PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibS0wIG1iLTNcIiBzdHlsZT17dGl0bGV9PlByaW1lciBwYWdvICg1MCUpPC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS1iLTEwIG1iLTRcIiBzdHlsZT17bGluZX0+RWwgcHJpbWVyYSBtaXRhZCBkZWwgcGFnbyBzZSByZWFsaXphIHBhcmEgZW1wZXphciBjb24gZWwgdHJhYmFqby48L3A+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiIGhyZWY9e3BheXBhbH0gdGFyZ2V0PVwiX2JsYW5rXCI+UGFnYXIg4oaSPC9hPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgbS1iLTIwXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb2wgbWQ9XCI4XCIgY2xhc3NOYW1lPSdvZmZzZXQtbWQtMicgc3R5bGU9e3N0ZXB9PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibS0wIHRleHQtdXBwZXJjYXNlXCI+PHU+UGFzbyAzPC91PjwvaDQ+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtLTAgbWItM1wiIHN0eWxlPXt0aXRsZX0+U2VndW5kbyBwYWdvICg1MCUpPC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS1iLTEwIG1iLTRcIiBzdHlsZT17bGluZX0+RWwgc2VndW5kYSBtaXRhZCBkZWwgcGFnbyBzZSByZWFsaXphIGN1YW5kbyB0cmFiYWpvIGVzdMOhIGNvbXBsZXRvLjwvcD5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCIgaHJlZj17cGF5cGFsfSB0YXJnZXQ9XCJfYmxhbmtcIj5QYWdhciDihpI8L2E+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBwdC0zIHBiLTJcIiBzdHlsZT17aGVhZGVyfT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENvbCBtZD1cIjhcIiBjbGFzc05hbWU9J29mZnNldC1tZC0yJz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIGhyZWY9XCJodHRwczovL3dhLm1lLzU0MTEyMjUwNTY5OFwiIHRhcmdldD1cIl9ibGFua1wiPjx1PkNvbnRhY3RvPC91PjwvYT4gXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZC1ibG9ja1wiPkNvcHlyaWdodCAyMDIyIC0gMk1ldGFEaWdpdGFsPC9zcGFuPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNpYm9cclxuIl19 */\n/*@ sourceURL=F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\recibo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Recibo);

/***/ })

})
//# sourceMappingURL=recibo.js.a843926be2439d8b1258.hot-update.js.map