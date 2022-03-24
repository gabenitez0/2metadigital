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
  var button = {
    '&:hover': {
      background: 'var(--secondary)'
    }
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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Presupuesto de Proyecto para ", m, " - 2MetaDigital"), __jsx("meta", {
    description: "Hacemos p\xE1ginas web de alto impacto con dise\xF1os profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio.",
    content: "",
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Hacemos p\xE1ginas web de alto impacto con dise\xF1os profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio.",
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/fav1.png",
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/meta1.png",
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "robots",
    content: "noindex",
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: header,
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "",
    src: "/assets/images/logo/logo4neg.png",
    className: "jsx-2527625552" + " " + "img-fluid p-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })))), __jsx("div", {
    style: header,
    className: "jsx-2527625552" + " " + "m-b-20 p-t-100 p-b-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("h1", {
    style: line,
    className: "jsx-2527625552" + " " + "m-0 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 53
    }
  }, "Presupuesto de proyecto")), __jsx("p", {
    style: line,
    className: "jsx-2527625552" + " " + "text-white m-b-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Para: ", __jsx("u", {
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 65
    }
  }, m)), __jsx("p", {
    style: line,
    className: "jsx-2527625552" + " " + "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Id: ", id)))), __jsx("div", {
    className: "jsx-2527625552" + " " + "m-t-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    style: step,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-2527625552" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 48
    }
  }, "Paso 1")), __jsx("h2", {
    style: title,
    className: "jsx-2527625552" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Presupuesto"), __jsx("p", {
    style: line,
    className: "jsx-2527625552" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Accede a los detalles del presupuesto."), __jsx("a", {
    style: button,
    href: factura,
    target: "_blank",
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Ver Presupuesto \u2192")))), __jsx("div", {
    className: "jsx-2527625552" + " " + "mt-5 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    style: step,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-2527625552" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 48
    }
  }, "Paso 2")), __jsx("h2", {
    style: title,
    className: "jsx-2527625552" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Primer pago (50%)"), __jsx("p", {
    style: line,
    className: "jsx-2527625552" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "El primera mitad del pago se realiza para empezar con el trabajo."), __jsx("a", {
    style: button,
    href: paypal,
    target: "_blank",
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Pagar \u2192")))), __jsx("div", {
    className: "jsx-2527625552" + " " + "mt-5 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    style: step,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-2527625552" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 48
    }
  }, "Paso 3")), __jsx("h2", {
    style: title,
    className: "jsx-2527625552" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "Segundo pago (50%)"), __jsx("p", {
    style: line,
    className: "jsx-2527625552" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "El segunda mitad del pago se realiza cuando trabajo est\xE1 completo."), __jsx("a", {
    href: paypal,
    target: "_blank",
    className: "jsx-2527625552" + " " + "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Pagar \u2192")))), __jsx("div", {
    style: header,
    className: "jsx-2527625552" + " " + "mt-5 pt-3 pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://wa.me/541122505698",
    target: "_blank",
    className: "jsx-2527625552" + " " + "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-2527625552",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 89
    }
  }, "Contacto")), __jsx("span", {
    className: "jsx-2527625552" + " " + "text-white d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Copyright 2022 - 2MetaDigital")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2527625552",
    __self: _this
  }, ".button.jsx-2527625552{background:'var(--primary)';color:'white';padding:'1rem 2rem';border-radius:2;display:'block';-webkit-text-decoration:'underline';text-decoration:'underline';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxiYWNrdXAyXFx3ZWJcXDJtZXRhZGlnaXRhbFxcdW5pY2VcXHBhZ2VzXFxyZWNpYm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0hrQixBQUd1Qyw0QkFDZCxjQUNNLG9CQUNKLGdCQUNBLGdCQUNZLGdFQUM5QiIsImZpbGUiOiJGOlxcYmFja3VwMlxcd2ViXFwybWV0YWRpZ2l0YWxcXHVuaWNlXFxwYWdlc1xccmVjaWJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHtDb250YWluZXIsIENvbH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBSZWNpYm8gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IG0gPSByb3V0ZXIucXVlcnkubTtcclxuICBjb25zdCBwID0gcm91dGVyLnF1ZXJ5LnA7XHJcbiAgY29uc3QgcGF5cGFsID0gYGh0dHBzOi8vcGF5cGFsLm1lLzJtZXRhZGlnaXRhbC8ke3B9YFxyXG4gIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gIGNvbnN0IGZhY3R1cmEgPSBgaHR0cHM6Ly9hcHAuaHVic3BvdC5jb20vcXVvdGVzLyR7aWR9YFxyXG5cclxuICBjb25zdCBoZWFkZXIgPSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tcHJpbWFyeSknXHJcbiAgfVxyXG4gIGNvbnN0IGJ1dHRvbiA9IHtcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAndmFyKC0tc2Vjb25kYXJ5KScsXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGJnID0ge1xyXG4gICAgYmFja2dyb3VuZDogJ3ZhcigtLXByaW1hcnkpJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgcGFkZGluZzogJzAgMTBweCdcclxuICB9XHJcbiAgY29uc3QgbGluZSA9IHtcclxuICAgIGxpbmVIZWlnaHQ6IDEuNVxyXG4gIH1cclxuICBjb25zdCB0aXRsZSA9IHtcclxuICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIGNvbG9yOiAndmFyKC0tc2Vjb25kYXJ5KScsXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgfVxyXG4gIGNvbnN0IHN0ZXAgPSB7XHJcbiAgICBib3JkZXJMZWZ0OiAnM3B4IHNvbGlkJ1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tcHJpbWFyeScsICcjNDI1Yjc2JylcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tc2Vjb25kYXJ5JywgJyMzMzQ3NWInKVxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1saWdodCcsICcjMTNCOEVBJylcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoJy0tZGFyaycsICcjNEU1NkYzJylcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5QcmVzdXB1ZXN0byBkZSBQcm95ZWN0byBwYXJhIHttfSAtIDJNZXRhRGlnaXRhbDwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgPG1ldGEgZGVzY3JpcHRpb249J0hhY2Vtb3MgcMOhZ2luYXMgd2ViIGRlIGFsdG8gaW1wYWN0byBjb24gZGlzZcOxb3MgcHJvZmVzaW9uYWxlcyByZWRhY2Npb25lcyBwZXJzdWFzaXZhcyBlbmZvY2FkYXMgZW4gdmVudGFzIHF1ZSB0cmFuc21pdGVuIGVsIHZhbG9yIHJlYWwgZGUgdHUgcHJvZHVjdG8gbyBzZXJ2aWNpby4nIGNvbnRlbnQ9JycgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGFjZW1vcyBww6FnaW5hcyB3ZWIgZGUgYWx0byBpbXBhY3RvIGNvbiBkaXNlw7FvcyBwcm9mZXNpb25hbGVzIHJlZGFjY2lvbmVzIHBlcnN1YXNpdmFzIGVuZm9jYWRhcyBlbiB2ZW50YXMgcXVlIHRyYW5zbWl0ZW4gZWwgdmFsb3IgcmVhbCBkZSB0dSBwcm9kdWN0byBvIHNlcnZpY2lvLlwiIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9mYXYxLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9tZXRhMS5wbmdcIiAvPlxyXG4gICAgICBcclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17aGVhZGVyfT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENvbCBtZD1cIjhcIiBjbGFzc05hbWU9J29mZnNldC1tZC0yJz5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWQgcC0yXCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nby9sb2dvNG5lZy5wbmdcIiAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYi0yMCBwLXQtMTAwIHAtYi0xMDBcIiBzdHlsZT17aGVhZGVyfT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENvbCBtZD1cIjhcIiBjbGFzc05hbWU9J29mZnNldC1tZC0yJz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm0tMCBtLWItMjBcIiBzdHlsZT17bGluZX0+PGI+UHJlc3VwdWVzdG8gZGUgcHJveWVjdG88L2I+PC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtLWItMTBcIiBzdHlsZT17bGluZX0+UGFyYTogPHU+e219PC91PjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHN0eWxlPXtsaW5lfT5JZDoge2lkfTwvcD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLXQtNDBcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENvbCBtZD1cIjhcIiBjbGFzc05hbWU9J29mZnNldC1tZC0yJyBzdHlsZT17c3RlcH0+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtLTAgdGV4dC11cHBlcmNhc2VcIj48dT5QYXNvIDE8L3U+PC9oND5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm0tMCBtYi0zXCIgc3R5bGU9e3RpdGxlfT5QcmVzdXB1ZXN0bzwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYi0xMCBtYi00XCIgc3R5bGU9e2xpbmV9PkFjY2VkZSBhIGxvcyBkZXRhbGxlcyBkZWwgcHJlc3VwdWVzdG8uPC9wPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17YnV0dG9ufSBocmVmPXtmYWN0dXJhfSB0YXJnZXQ9XCJfYmxhbmtcIj5WZXIgUHJlc3VwdWVzdG8g4oaSPC9hPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgbS1iLTIwXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb2wgbWQ9XCI4XCIgY2xhc3NOYW1lPSdvZmZzZXQtbWQtMicgc3R5bGU9e3N0ZXB9PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibS0wIHRleHQtdXBwZXJjYXNlXCI+PHU+UGFzbyAyPC91PjwvaDQ+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtLTAgbWItM1wiIHN0eWxlPXt0aXRsZX0+UHJpbWVyIHBhZ28gKDUwJSk8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLWItMTAgbWItNFwiIHN0eWxlPXtsaW5lfT5FbCBwcmltZXJhIG1pdGFkIGRlbCBwYWdvIHNlIHJlYWxpemEgcGFyYSBlbXBlemFyIGNvbiBlbCB0cmFiYWpvLjwvcD5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e2J1dHRvbn0gaHJlZj17cGF5cGFsfSB0YXJnZXQ9XCJfYmxhbmtcIj5QYWdhciDihpI8L2E+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBtLWItMjBcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENvbCBtZD1cIjhcIiBjbGFzc05hbWU9J29mZnNldC1tZC0yJyBzdHlsZT17c3RlcH0+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtLTAgdGV4dC11cHBlcmNhc2VcIj48dT5QYXNvIDM8L3U+PC9oND5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm0tMCBtYi0zXCIgc3R5bGU9e3RpdGxlfT5TZWd1bmRvIHBhZ28gKDUwJSk8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLWItMTAgbWItNFwiIHN0eWxlPXtsaW5lfT5FbCBzZWd1bmRhIG1pdGFkIGRlbCBwYWdvIHNlIHJlYWxpemEgY3VhbmRvIHRyYWJham8gZXN0w6EgY29tcGxldG8uPC9wPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b25cIiBocmVmPXtwYXlwYWx9IHRhcmdldD1cIl9ibGFua1wiPlBhZ2FyIOKGkjwvYT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHB0LTMgcGItMlwiIHN0eWxlPXtoZWFkZXJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgaHJlZj1cImh0dHBzOi8vd2EubWUvNTQxMTIyNTA1Njk4XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PHU+Q29udGFjdG88L3U+PC9hPiBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkLWJsb2NrXCI+Q29weXJpZ2h0IDIwMjIgLSAyTWV0YURpZ2l0YWw8L3NwYW4+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1wcmltYXJ5KSc7XHJcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJztcclxuICAgICAgICAgIHBhZGRpbmc6ICcxcmVtIDJyZW0nO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjtcclxuICAgICAgICAgIGRpc3BsYXk6ICdibG9jayc7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246ICd1bmRlcmxpbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lib1xyXG4iXX0= */\n/*@ sourceURL=F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\recibo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Recibo);

/***/ })

})
//# sourceMappingURL=recibo.js.41fe935167aa92962ce8.hot-update.js.map