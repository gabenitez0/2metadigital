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
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Presupuesto de Proyecto para ", m, " - 2MetaDigital"), __jsx("meta", {
    description: "Hacemos p\xE1ginas web de alto impacto con dise\xF1os profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio.",
    content: "",
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Hacemos p\xE1ginas web de alto impacto con dise\xF1os profesionales redacciones persuasivas enfocadas en ventas que transmiten el valor real de tu producto o servicio.",
    className: "jsx-4112511511",
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
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/meta1.png",
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "robots",
    content: "noindex",
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: header,
    className: "jsx-4112511511",
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
    className: "jsx-4112511511" + " " + "img-fluid p-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })))), __jsx("div", {
    style: header,
    className: "jsx-4112511511" + " " + "m-b-20 p-t-100 p-b-100",
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
    className: "jsx-4112511511" + " " + "m-0 m-b-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("b", {
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 53
    }
  }, "Presupuesto de proyecto")), __jsx("p", {
    style: line,
    className: "jsx-4112511511" + " " + "text-white m-b-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Para: ", __jsx("u", {
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 65
    }
  }, m)), __jsx("p", {
    style: line,
    className: "jsx-4112511511" + " " + "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Id: ", id)))), __jsx("div", {
    className: "jsx-4112511511" + " " + "m-t-40",
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
    className: "jsx-4112511511" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 48
    }
  }, "Paso 1")), __jsx("h2", {
    style: title,
    className: "jsx-4112511511" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Presupuesto"), __jsx("p", {
    style: line,
    className: "jsx-4112511511" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Accede a los detalles del presupuesto."), __jsx("a", {
    href: factura,
    target: "_blank",
    className: "jsx-4112511511" + " " + "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Ver Presupuesto \u2192")))), __jsx("div", {
    className: "jsx-4112511511" + " " + "mt-5 m-b-20",
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
    className: "jsx-4112511511" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 48
    }
  }, "Paso 2")), __jsx("h2", {
    style: title,
    className: "jsx-4112511511" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Primer pago (50%)"), __jsx("p", {
    style: line,
    className: "jsx-4112511511" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "El primera mitad del pago se realiza para empezar con el trabajo."), __jsx("a", {
    href: paypal,
    target: "_blank",
    className: "jsx-4112511511" + " " + "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Pagar \u2192")))), __jsx("div", {
    className: "jsx-4112511511" + " " + "mt-5 m-b-20",
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
    className: "jsx-4112511511" + " " + "m-0 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 48
    }
  }, "Paso 3")), __jsx("h2", {
    style: title,
    className: "jsx-4112511511" + " " + "m-0 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "Segundo pago (50%)"), __jsx("p", {
    style: line,
    className: "jsx-4112511511" + " " + "m-b-10 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "El segunda mitad del pago se realiza cuando trabajo est\xE1 completo."), __jsx("a", {
    href: paypal,
    target: "_blank",
    className: "jsx-4112511511" + " " + "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Pagar \u2192")))), __jsx("div", {
    style: header,
    className: "jsx-4112511511" + " " + "mt-5 pt-3 pb-2",
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
    className: "jsx-4112511511" + " " + "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("u", {
    className: "jsx-4112511511",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 89
    }
  }, "Contacto")), __jsx("span", {
    className: "jsx-4112511511" + " " + "text-white d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Copyright 2022 - 2MetaDigital")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4112511511",
    __self: _this
  }, ".button.jsx-4112511511{background:var(--primary);color:white;padding:1rem 2rem;border-radius:2px;display:block;-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxiYWNrdXAyXFx3ZWJcXDJtZXRhZGlnaXRhbFxcdW5pY2VcXHBhZ2VzXFxyZWNpYm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0hrQixBQUdxQywwQkFDZCxZQUNNLGtCQUNBLGtCQUNKLGNBQ1ksNERBQzVCIiwiZmlsZSI6IkY6XFxiYWNrdXAyXFx3ZWJcXDJtZXRhZGlnaXRhbFxcdW5pY2VcXHBhZ2VzXFxyZWNpYm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge0NvbnRhaW5lciwgQ29sfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IFJlY2libyA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbSA9IHJvdXRlci5xdWVyeS5tO1xyXG4gIGNvbnN0IHAgPSByb3V0ZXIucXVlcnkucDtcclxuICBjb25zdCBwYXlwYWwgPSBgaHR0cHM6Ly9wYXlwYWwubWUvMm1ldGFkaWdpdGFsLyR7cH1gXHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgY29uc3QgZmFjdHVyYSA9IGBodHRwczovL2FwcC5odWJzcG90LmNvbS9xdW90ZXMvJHtpZH1gXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IHtcclxuICAgIGJhY2tncm91bmQ6ICd2YXIoLS1wcmltYXJ5KSdcclxuICB9XHJcbiAgY29uc3QgYnV0dG9uID0ge1xyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1zZWNvbmRhcnkpJyxcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgYmcgPSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tcHJpbWFyeSknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBwYWRkaW5nOiAnMCAxMHB4J1xyXG4gIH1cclxuICBjb25zdCBsaW5lID0ge1xyXG4gICAgbGluZUhlaWdodDogMS41XHJcbiAgfVxyXG4gIGNvbnN0IHRpdGxlID0ge1xyXG4gICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgY29sb3I6ICd2YXIoLS1zZWNvbmRhcnkpJyxcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICB9XHJcbiAgY29uc3Qgc3RlcCA9IHtcclxuICAgIGJvcmRlckxlZnQ6ICczcHggc29saWQnXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcmltYXJ5JywgJyM0MjViNzYnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zZWNvbmRhcnknLCAnIzMzNDc1YicpXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLWxpZ2h0JywgJyMxM0I4RUEnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kYXJrJywgJyM0RTU2RjMnKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlByZXN1cHVlc3RvIGRlIFByb3llY3RvIHBhcmEge219IC0gMk1ldGFEaWdpdGFsPC90aXRsZT5cclxuXHJcbiAgICAgICAgICA8bWV0YSBkZXNjcmlwdGlvbj0nSGFjZW1vcyBww6FnaW5hcyB3ZWIgZGUgYWx0byBpbXBhY3RvIGNvbiBkaXNlw7FvcyBwcm9mZXNpb25hbGVzIHJlZGFjY2lvbmVzIHBlcnN1YXNpdmFzIGVuZm9jYWRhcyBlbiB2ZW50YXMgcXVlIHRyYW5zbWl0ZW4gZWwgdmFsb3IgcmVhbCBkZSB0dSBwcm9kdWN0byBvIHNlcnZpY2lvLicgY29udGVudD0nJyAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIYWNlbW9zIHDDoWdpbmFzIHdlYiBkZSBhbHRvIGltcGFjdG8gY29uIGRpc2XDsW9zIHByb2Zlc2lvbmFsZXMgcmVkYWNjaW9uZXMgcGVyc3Vhc2l2YXMgZW5mb2NhZGFzIGVuIHZlbnRhcyBxdWUgdHJhbnNtaXRlbiBlbCB2YWxvciByZWFsIGRlIHR1IHByb2R1Y3RvIG8gc2VydmljaW8uXCIgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2ZhdjEucG5nXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL21ldGExLnBuZ1wiIC8+XHJcbiAgICAgIFxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXtoZWFkZXJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCBwLTJcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvL2xvZ280bmVnLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1iLTIwIHAtdC0xMDAgcC1iLTEwMFwiIHN0eWxlPXtoZWFkZXJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibS0wIG0tYi0yMFwiIHN0eWxlPXtsaW5lfT48Yj5QcmVzdXB1ZXN0byBkZSBwcm95ZWN0bzwvYj48L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG0tYi0xMFwiIHN0eWxlPXtsaW5lfT5QYXJhOiA8dT57bX08L3U+PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9e2xpbmV9PklkOiB7aWR9PC9wPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tdC00MFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInIHN0eWxlPXtzdGVwfT5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm0tMCB0ZXh0LXVwcGVyY2FzZVwiPjx1PlBhc28gMTwvdT48L2g0PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibS0wIG1iLTNcIiBzdHlsZT17dGl0bGV9PlByZXN1cHVlc3RvPC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS1iLTEwIG1iLTRcIiBzdHlsZT17bGluZX0+QWNjZWRlIGEgbG9zIGRldGFsbGVzIGRlbCBwcmVzdXB1ZXN0by48L3A+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiIGhyZWY9e2ZhY3R1cmF9IHRhcmdldD1cIl9ibGFua1wiPlZlciBQcmVzdXB1ZXN0byDihpI8L2E+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBtLWItMjBcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENvbCBtZD1cIjhcIiBjbGFzc05hbWU9J29mZnNldC1tZC0yJyBzdHlsZT17c3RlcH0+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtLTAgdGV4dC11cHBlcmNhc2VcIj48dT5QYXNvIDI8L3U+PC9oND5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm0tMCBtYi0zXCIgc3R5bGU9e3RpdGxlfT5QcmltZXIgcGFnbyAoNTAlKTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYi0xMCBtYi00XCIgc3R5bGU9e2xpbmV9PkVsIHByaW1lcmEgbWl0YWQgZGVsIHBhZ28gc2UgcmVhbGl6YSBwYXJhIGVtcGV6YXIgY29uIGVsIHRyYWJham8uPC9wPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b25cIiBocmVmPXtwYXlwYWx9IHRhcmdldD1cIl9ibGFua1wiPlBhZ2FyIOKGkjwvYT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IG0tYi0yMFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiOFwiIGNsYXNzTmFtZT0nb2Zmc2V0LW1kLTInIHN0eWxlPXtzdGVwfT5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm0tMCB0ZXh0LXVwcGVyY2FzZVwiPjx1PlBhc28gMzwvdT48L2g0PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibS0wIG1iLTNcIiBzdHlsZT17dGl0bGV9PlNlZ3VuZG8gcGFnbyAoNTAlKTwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYi0xMCBtYi00XCIgc3R5bGU9e2xpbmV9PkVsIHNlZ3VuZGEgbWl0YWQgZGVsIHBhZ28gc2UgcmVhbGl6YSBjdWFuZG8gdHJhYmFqbyBlc3TDoSBjb21wbGV0by48L3A+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiIGhyZWY9e3BheXBhbH0gdGFyZ2V0PVwiX2JsYW5rXCI+UGFnYXIg4oaSPC9hPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgcHQtMyBwYi0yXCIgc3R5bGU9e2hlYWRlcn0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb2wgbWQ9XCI4XCIgY2xhc3NOYW1lPSdvZmZzZXQtbWQtMic+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiBocmVmPVwiaHR0cHM6Ly93YS5tZS81NDExMjI1MDU2OThcIiB0YXJnZXQ9XCJfYmxhbmtcIj48dT5Db250YWN0bzwvdT48L2E+IFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGQtYmxvY2tcIj5Db3B5cmlnaHQgMjAyMiAtIDJNZXRhRGlnaXRhbDwvc3Bhbj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lib1xyXG4iXX0= */\n/*@ sourceURL=F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\recibo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Recibo);

/***/ })

})
//# sourceMappingURL=recibo.js.0c9f99aa9e6b0f462300.hot-update.js.map