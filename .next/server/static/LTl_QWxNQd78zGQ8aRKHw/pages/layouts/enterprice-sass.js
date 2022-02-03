module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 124);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/7X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NEDe");
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 320,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 420,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 4
    }
  }]
};

const Brand = () => __jsx("section", {
  className: "saas2 brand"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "12",
  xs: "12"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  className: "saas2-services"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", null, "trusted us")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "sub-title-para"
}, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "brand-slider",
  id: "brand-slider"
}, settings), _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_3__["BrandData"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i
  }, __jsx("a", {
    href: "#"
  }, __jsx("img", {
    alt: "brand",
    className: "img-fluid",
    src: item.img
  })));
})))))));

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0T6B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NEDe");
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Service = () => __jsx("section", {
  className: "saas2 services"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  className: "saas2-services"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", null, "our Features")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "sub-title-para"
}, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_1__["ServiceData"].map((item, i) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "4",
    md: "6",
    className: "service-container",
    key: i
  }, __jsx("div", {
    className: "service text-center"
  }, __jsx("div", {
    className: "img-block"
  }, __jsx("img", {
    alt: "",
    className: "service-img img-fluid",
    src: item.img
  })), __jsx("div", {
    className: "service-feature"
  }, __jsx("h4", {
    className: "feature-text text-center"
  }, item.title), __jsx("p", null, item.desc))));
}))));

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ppe7");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4GE2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx("footer", {
  className: "saas2 footer2",
  id: "contact"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  className: "footer-padding"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "4",
  md: "6",
  sm: "12"
}, __jsx("div", {
  className: "logo-sec"
}, __jsx("div", {
  className: "footer-title mobile-title p-t-0"
}, __jsx("h3", {
  className: "text-white"
}, "About Us")), __jsx("div", {
  className: "footer-contant"
}, __jsx("img", {
  alt: "",
  className: "img-fluid footer-logo",
  src: "/assets/images/logo/1.png"
}), __jsx("div", {
  className: "footer-para"
}, __jsx("h6", {
  className: "text-white para-address"
}, "Unice"), __jsx("h6", {
  className: "text-white para-address"
}, "324 Madison Street New york City, "), __jsx("h6", {
  className: "text-white para-address"
}, "NY 10001.")), __jsx("ul", {
  className: "d-d-flex footer-social social"
}, __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook"
}))), __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-twitter"
}))), __jsx("li", {
  className: "footer-social-list"
}, __jsx("a", {
  href: "#"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-google"
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "6",
  sm: "12"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "Product")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "Product"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "Discover features")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "CMS integration")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Customers")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Free trials and demo")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "What Next ?")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "2",
  md: "6",
  sm: "12"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "Company")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "Company"), __jsx("div", null, __jsx("ul", {
  className: "footer-lists"
}, __jsx("li", null, __jsx("a", {
  href: "#"
}, "About us")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "About security")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "User guide")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Terms of srvices")), __jsx("li", null, __jsx("a", {
  href: "#"
}, "Privact policy")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "6",
  sm: "12"
}, __jsx("div", {
  className: "footer-title mobile-title"
}, __jsx("h3", {
  className: "text-white"
}, "Subscribe our newsletter")), __jsx("div", {
  className: "footer-contant"
}, __jsx("h5", {
  className: "footer-headings"
}, "Subscribe our newsletter"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
  className: "form-control",
  id: "usr",
  placeholder: "email address",
  type: "text"
}), __jsx("a", {
  href: ""
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-paper-plane"
}))), __jsx("div", null, __jsx("h4", {
  className: "text-white Unice-text"
}, "Unice"), __jsx("h6", {
  className: "text-white Unice-copyright-text"
}, "\xA9 2020_Unice")))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "61Hx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./constant/menu.js
const MENUITEMS = [{
  title: 'Inicio',
  type: 'sub',
  link: '/',
  children: [{
    path: '/',
    title: 'Inicio',
    type: 'link'
  }, {
    path: '/#Nosotros',
    title: 'Nosotros',
    type: 'link'
  }, {
    path: '/#Servicios',
    title: 'Servicios',
    type: 'link'
  }, {
    path: '/#Proyectos',
    title: 'Proyectos',
    type: 'link'
  }, {
    path: '/#Calificaciones',
    title: 'Calificaciones',
    type: 'link'
  }, {
    path: '/#Empezar',
    title: 'Empezar',
    type: 'link'
  }]
}, {
  title: 'Nosotros',
  type: 'sub',
  link: '/#Nosotros',
  children: [{
    path: '/#Nosotros',
    title: 'Quienes Somos',
    type: 'link'
  }, {
    path: '/#Nosotros',
    title: 'Cómo Trabajamos',
    type: 'link'
  }, {
    path: '/#Nosotros',
    title: 'Qué Hacemos',
    type: 'link'
  }, {
    path: '/#Nosotros',
    title: 'Emprendedores',
    type: 'link'
  }]
}, {
  title: 'Servicios Profesionales',
  type: 'sub',
  link: '/#Servicios',
  children: [{
    path: '/#Servicios',
    title: 'Desarrollo Web',
    type: 'link'
  }, {
    path: '/#Servicios',
    title: 'Diseño Web',
    type: 'link'
  }, {
    path: '/#Servicios',
    title: 'Diseño Gráfico',
    type: 'link'
  }, {
    path: '/#Servicios',
    title: 'Administración Servidores',
    type: 'link'
  }]
}, {
  title: 'Portfolio',
  type: 'sub',
  link: '/#Proyectos',
  children: [{
    path: '/#Proyectos',
    title: 'Desarrollo Web',
    type: 'link'
  }, {
    path: '/#Proyectos',
    title: 'Diseño Web',
    type: 'link'
  }, {
    path: '/#Proyectos',
    title: 'Diseño Gráfico',
    type: 'link'
  }, {
    path: '/#Proyectos',
    title: 'Administración Servidores',
    type: 'link'
  }]
}, {
  title: 'Contacto',
  type: 'sub',
  link: '/#Contacto',
  children: [{
    path: '/Contacto#Como',
    title: 'Como Trabajamos',
    type: 'link'
  }, {
    path: '/Contacto',
    title: 'Contacto',
    type: 'link'
  }]
}];
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./containers/common/nav.js
var __jsx = external_react_default.a.createElement;





const Nav = () => {
  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(external_react_["useState"])(MENUITEMS);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(external_react_["useState"])(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.remove('openSidebar');
  }

  Object(external_react_["useEffect"])(() => {
    const currentUrl = location.pathname;
    mainmenu.filter(items => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = item => {
    MENUITEMS.filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
    item.active = !item.active;
    setMainMenu({
      mainmenu: MENUITEMS
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      MENUITEMS.forEach(a => {
        if (MENUITEMS.includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(c => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: MENUITEMS
    });
  };

  return __jsx("div", {
    className: `navbar`,
    id: "togglebtn"
  }, __jsx("div", {
    className: "responsive-btn"
  }, __jsx("a", {
    className: "btn-back",
    onClick: closeSidebar
  }, __jsx("h5", null, "back"))), __jsx("ul", {
    className: "main-menu"
  }, MENUITEMS.slice(0, 3).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown"
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: menuItem.link,
      onClick: () => toggletNavActive(menuItem)
    }, __jsx("span", null, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(link_default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem)
    }, __jsx("span", null, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right"
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container resize ${menuItem.active ? 'opensubmenu' : ''}`
    }, menuItem.megaMenu === true ? __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["Row"], null, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'mini' ? 'col-lg-6' : menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i
      }, __jsx("div", {
        className: "menu-container"
      }, __jsx("a", {
        className: "menu-head"
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`
      }, menuItem.title === 'Inicio' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {}
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: menuItem.link,
      onClick: () => toggletNavActive(childrenItem)
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(link_default.a, {
      href: `${childrenItem.path}`
    }, __jsx("a", null, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open' : 'active'}`
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key
    }, childrenSubItem.type === 'link' ? __jsx(link_default.a, {
      href: `${childrenSubItem.path}`
    }, __jsx("a", {
      className: "sub-menu-title"
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })), __jsx("ul", {
    className: "main-menu"
  }, MENUITEMS.slice(3, 7).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown"
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: menuItem.link,
      onClick: () => toggletNavActive(menuItem)
    }, __jsx("span", null, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(link_default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem)
    }, __jsx("span", null, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right"
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container ${menuItem.title === 'Elements' ? 'resize' : ''} ${menuItem.active ? 'opensubmenu activeSubmenu' : ''}`
    }, menuItem.megaMenu === true ? __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["Row"], null, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i
      }, __jsx("div", {
        className: "menu-container"
      }, __jsx("a", {
        className: "menu-head"
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {}
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: menuItem.link,
      onClick: () => toggletNavActive(childrenItem)
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(link_default.a, {
      href: `${childrenItem.path}`
    }, __jsx("a", null, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open activeSubmenu' : 'active'}`
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key
    }, childrenSubItem.type === 'link' ? __jsx(link_default.a, {
      href: `${childrenSubItem.path}`
    }, __jsx("a", {
      className: "sub-menu-title"
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })));
};

/* harmony default export */ var nav = __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "GsEv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("luDK");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "NEDe":
/***/ (function(module, exports) {

module.exports = {
  BrandData: [{
    img: '/assets/images/saas2/brand/1.png'
  }, {
    img: '/assets/images/saas2/brand/2.png'
  }, {
    img: '/assets/images/saas2/brand/3.png'
  }, {
    img: '/assets/images/saas2/brand/5.png'
  }, {
    img: '/assets/images/saas2/brand/6.png'
  }, {
    img: '/assets/images/saas2/brand/1.png'
  }],
  PricingData: [{
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
  }],
  ServiceData: [{
    img: '/assets/images/saas2/our-feature/1.png',
    title: 'Content Management',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/2.png',
    title: 'Project Analysis',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/3.png',
    title: 'Support & Service',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/4.png',
    title: 'Project Management',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/5.png',
    title: 'Get Free Update',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }, {
    img: '/assets/images/saas2/our-feature/6.png',
    title: 'Smart Performance',
    desc: 'There are many variations of passages of Lorem Ipsum available, but the ma- jority have suffered.'
  }]
};

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "Ppe7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fh0K");
/* harmony import */ var _layouts_sections_enterprice_sass_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ixAQ");
/* harmony import */ var _layouts_sections_enterprice_sass_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XSOn");
/* harmony import */ var _layouts_sections_enterprice_sass_business__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oVyA");
/* harmony import */ var _layouts_sections_enterprice_sass_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0T6B");
/* harmony import */ var _layouts_sections_enterprice_sass_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("p21e");
/* harmony import */ var _layouts_sections_enterprice_sass_pricing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("r6Kc");
/* harmony import */ var _layouts_sections_enterprice_sass_testimonial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ofLw");
/* harmony import */ var _layouts_sections_enterprice_sass_brand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("+/7X");
/* harmony import */ var _layouts_sections_enterprice_sass_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4GE2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components












const EnterpriceSass = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#844adb');
    document.body.style.setProperty('--secondary', '#071828');
    document.body.style.setProperty('--light', '#5E57EA');
    document.body.style.setProperty('--dark', '#9647DB');
  });
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Capital Digital - Servicios Digitales para Tu Proyecto")), __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: "saas2"
  }), __jsx(_layouts_sections_enterprice_sass_banner__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_layouts_sections_enterprice_sass_service__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_layouts_sections_enterprice_sass_business__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_layouts_sections_enterprice_sass_pricing__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_layouts_sections_enterprice_sass_testimonial__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_layouts_sections_enterprice_sass_brand__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_layouts_sections_enterprice_sass_footer__WEBPACK_IMPORTED_MODULE_11__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (EnterpriceSass);

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "XSOn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Feature = () => __jsx("section", {
  className: "saas2 feature booking",
  id: "feaure"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  id: "Servicios"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", null, "Advance Features")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "sub-title-para"
}, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "8",
  md: "7"
}, __jsx("div", {
  className: "center-text justify-content-center"
}, __jsx("div", {
  className: "image-container"
}, __jsx("img", {
  alt: "",
  className: "img-fluid advance-feature-img",
  src: "/assets/images/saas2/advance-feature/01.png"
})))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "4",
  md: "5"
}, __jsx("div", null, __jsx("div", {
  className: "center-content justify-content-start"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/advance-feature/1.png"
}), __jsx("div", {
  className: "feature-content"
}, __jsx("h5", {
  className: "feature-head"
}, "Clean Design"), __jsx("p", {
  className: "feature-para"
}, "Lorem Ipsum is simply dummy text of the printing and industry.")))), __jsx("div", null, __jsx("div", {
  className: "center-content justify-content-start"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/advance-feature/2.png"
}), __jsx("div", {
  className: "feature-content"
}, __jsx("h5", {
  className: "feature-head"
}, "Dedicated Support"), __jsx("p", {
  className: "feature-para"
}, "Lorem Ipsum is simply dummy text of the printing and industry.")))), __jsx("div", null, __jsx("div", {
  className: "center-content justify-content-start"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/advance-feature/3.png"
}), __jsx("div", {
  className: "feature-content"
}, __jsx("h5", {
  className: "feature-head"
}, "Easy Customiable"), __jsx("p", {
  className: "feature-para"
}, "Lorem Ipsum is simply dummy text of the printing and industry.")))), __jsx("div", null, __jsx("div", {
  className: "center-content justify-content-start"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/advance-feature/4.png"
}), __jsx("div", {
  className: "feature-content"
}, __jsx("h5", {
  className: "feature-head"
}, "Multiple Demo"), __jsx("p", {
  className: "feature-para"
}, "Lorem Ipsum is simply dummy text of the printing and industry."))))))));

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("lgD3"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "f8eC":
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

/***/ "fh0K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("61Hx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = props => {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.add('openSidebar');
  };

  return __jsx("header", {
    className: `${props.className || 'app2'} loding-header nav-abs custom-scroll  `
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx("nav", null, __jsx("a", {
    className: "m-r-auto",
    href: "/"
  }, props.className == 'agency' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/9.png"
  }) : props.className == 'dark' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png"
  }) : props.className == 'dark position-relative ecommerce' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png"
  }) : props.className == 'dark bg-white ecommerce' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png"
  }) : props.className == 'dark agency' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png"
  }) : props.className == 'saas1' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/3.png"
  }) : __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/1.png"
  })), __jsx("div", {
    className: "responsive-btn"
  }, __jsx("a", {
    className: "toggle-nav",
    onClick: clickSidebar
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-bars text-white"
  }))), __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), props.shop && __jsx("div", {
    className: "top-header-right"
  }, __jsx("ul", null, __jsx("li", {
    className: "search"
  }, __jsx("a", {
    href: "#",
    onClick: () => setSearch(!search)
  }, __jsx("i", {
    className: "icon-search"
  })), __jsx("div", {
    "aria-labelledby": "dropdownMenuButton",
    className: `dropdown-menu ${search && `show`} dropdown-menu-right`
  }, __jsx("form", {
    className: "form-inline search-form"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    className: "sr-only"
  }, "Email"), __jsx("input", {
    className: "form-control-plaintext",
    placeholder: "Search....",
    type: "search"
  }), __jsx("span", {
    className: "d-sm-none mobile-search"
  }))))), __jsx("li", {
    className: "account "
  }, __jsx("a", {
    href: "#",
    onClick: () => setShow(!show)
  }, __jsx("i", {
    className: "icon-user"
  })), __jsx("div", {
    className: `dropdown-menu ${show && `show`} dropdown-menu-right`
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/auth/login"
  }, __jsx("a", {
    href: "#"
  }, "Login")), __jsx("a", {
    href: "#"
  }, "Account"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/wishlist"
  }, __jsx("a", {
    href: "#"
  }, "Wishlist")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/checkout"
  }, __jsx("a", {
    href: "#"
  }, "checkout")))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "ixAQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner = () => {
  const scrollToRef = val => {
    document.querySelector(`#${val}`).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return __jsx("section", {
    className: "saas2 header",
    id: "home"
  }, __jsx("div", {
    className: "saas2-content "
  }, __jsx("div", {
    className: "bg saas2-bg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-center text-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, __jsx("div", {
    className: "center-text"
  }, __jsx("div", null, __jsx("div", {
    className: "header-text"
  }, __jsx("h1", null, "Servicios Digitales")), __jsx("div", {
    className: "header-sub-text"
  }, __jsx("h3", {
    className: "saas2-sub-text"
  }, "Para tu ", __jsx("span", {
    className: "bold-text"
  }, "Proyecto"))), __jsx("div", {
    className: "header-sub-text"
  }, __jsx("h4", {
    className: "bold-text text-white"
  }, "Potenciemos tu Proyecto con Servicios Profesionales y Dise\xF1os Incre\xEDbles!")), __jsx("a", {
    className: "btn btn-default primary-btn transparent",
    href: "#Servicios"
  }, "Saber m\xE1s")))))), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs background-animate",
    src: "/assets/images/saas1/background2.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img1 move-up-down",
    src: "/assets/images/saas2/header-icon/3.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img2 move-right-left",
    src: "/assets/images/saas2/header-icon/2.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img3 move-up-down",
    src: "/assets/images/saas2/header-icon/4.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img4 move-up-down",
    src: "/assets/images/saas2/header-icon/5.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img5 move-right-left",
    src: "/assets/images/saas2/header-icon/7.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img6 move-up-down",
    src: "/assets/images/saas2/header-icon/9.png"
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img7 move-up-down",
    src: "/assets/images/saas2/header-icon/6.png"
  }), __jsx("div", {
    className: "set-abs round move-right-left"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid img8",
    src: "/assets/images/saas2/header-icon/10.png"
  }), __jsx("div", {
    className: "set-abs inner-circle"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid img9",
    src: "/assets/images/saas2/header-icon/8.png"
  }))), __jsx("div", {
    className: "center-content set-abs bottom-content"
  }, __jsx("div", {
    className: "bottom"
  }, __jsx("a", {
    className: "down",
    onClick: () => scrollToRef('Servicios')
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/saas2/header-icon/down.png"
  })), __jsx("div", null))))), __jsx("div", null));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "j0wK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("f8eC");
/* harmony import */ var _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

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
    breakpoint: 992,
    settings: {
      slidesToShow: 1
    }
  }]
};

const PricingSeven = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  lg: "12",
  md: "8",
  className: "offset-md-2 offset-lg-0"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "pricing-slider price-margin"
}, settings), _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__["Pricing"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i
  }, __jsx("div", {
    className: "price-container shadows text-center"
  }, __jsx("div", {
    className: "service-feature "
  }, __jsx("div", {
    className: "feature-text"
  }, __jsx("img", {
    alt: "",
    className: "image-top",
    src: item.img
  }), __jsx("h3", {
    className: "text-white feature-text-heading text-center"
  }, item.heading))), __jsx("div", null, __jsx("div", {
    className: "price-feature-container "
  }, __jsx("div", {
    className: "price-features"
  }, __jsx("h6", {
    className: "price text-center-feature"
  }, item.feature1), __jsx("h6", {
    className: "price text-center-feature"
  }, item.feature2), __jsx("h6", {
    className: "price text-center-feature"
  }, item.feature3), __jsx("h6", {
    className: "price text-center-feature"
  }, item.feature4)), __jsx("div", {
    className: "price-value"
  }, __jsx("h6", {
    className: "price text-center"
  }, "$", __jsx("span", {
    className: "large"
  }, item.price), "/month")), __jsx("a", {
    className: "btn btn-default btn-gradient",
    href: "#"
  }, "more")))));
}))));

/* harmony default export */ __webpack_exports__["default"] = (PricingSeven);

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "lgD3":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("GsEv")();
}


/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "luDK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "mZDP":
/***/ (function(module, exports) {

module.exports = require("react-parallax-tilt");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "oVyA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mZDP");
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Business = () => __jsx("section", {
  className: "saas2 bg-gradient quick-sol"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  className: "set-center-div"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6"
}, __jsx("div", {
  className: "offers-container"
}, __jsx("h3", {
  className: "text-white offer-heading-text"
}, "We Offer Quick & Powerful Business Solution"), __jsx("div", {
  className: "bottom-border"
}), __jsx("div", {
  className: "offers-content"
}, __jsx("div", {
  className: "d-flex"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle"
}), __jsx("div", null, __jsx("h4", {
  className: "offer-main-text text-white"
}, "Beautiful Interface Layout"), __jsx("p", {
  className: "offer-sub-text text-white"
}, "Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.")))), __jsx("div", {
  className: "offers-content"
}, __jsx("div", {
  className: "d-flex"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle"
}), __jsx("div", null, __jsx("h4", {
  className: "offer-main-text text-white"
}, "Beautiful Interface Layout"), __jsx("p", {
  className: "offer-sub-text text-white"
}, "Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.")))), __jsx("div", {
  className: "offers-content"
}, __jsx("div", {
  className: "d-flex"
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle"
}), __jsx("div", null, __jsx("h4", {
  className: "offer-main-text text-white"
}, "Beautiful Interface Layout"), __jsx("p", {
  className: "offer-sub-text text-white"
}, "Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.")))))), __jsx("div", {
  className: "center-text side-img"
}, __jsx(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1___default.a, {
  perspective: "20000",
  transitionSpeed: "3000"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/we-offer/img.png"
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Business);

/***/ }),

/***/ "ofLw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }





const LeftNavButton = props => {
  const {
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: "slick-arrow",
    style: _objectSpread({}, style, {
      marginLeft: '0%'
    }),
    onClick: onClick
  }, __jsx("img", {
    src: "/assets/images/music/gallery/gallery-icon/left.png",
    alt: "arrow_left"
  }));
};

const RightNavButton = props => {
  const {
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: "slick-arrow",
    style: _objectSpread({}, style, {
      display: 'block',
      marginLeft: '95.5%'
    }),
    onClick: onClick
  }, __jsx("img", {
    src: "/assets/images/music/gallery/gallery-icon/right.png",
    alt: "arrow_left"
  }));
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: __jsx(LeftNavButton, null),
  nextArrow: __jsx(RightNavButton, null)
};

const Testimonial = () => __jsx("section", {
  className: "saas2 testimonial bg-gradient"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "text-white"
}, "Testimonial")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "sub-title-para text-white"
}, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({
  className: "testimonial",
  id: "testimonial"
}, settings), __jsx("div", {
  className: "item p-t-30"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  lg: "10",
  xs: "12",
  className: "offset-lg-1"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  sm: "3"
}, __jsx("div", {
  className: "testimonial-msg set-relative"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/event/testimonial/L3-1.png"
}), __jsx("div", {
  className: "msg-box"
}, __jsx("div", {
  className: "center-content"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs",
  src: "/assets/images/event/testimonial/message.png"
}))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  sm: "9"
}, __jsx("div", {
  className: "quote-margin"
}, __jsx("div", {
  className: "quotes set-relative m-b-30"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs left-quote",
  src: "/assets/images/event/testimonial/i1.png"
}), __jsx("div", {
  className: "quote-text"
}, __jsx("h6", {
  className: "text-white"
}, "When you innovate, you make mistakes.It is best to admit them quickly, & get on with improving your other innovations.")), __jsx("img", {
  alt: "",
  className: "img-fluid set-abs right-quote",
  src: "/assets/images/event/testimonial/i2.png"
})), __jsx("div", {
  className: "rating align-items-center"
}, __jsx("div", {
  className: "stars"
}, __jsx("ul", null, __jsx("li", null, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star"
})))), __jsx("h5", {
  className: "name"
}, "Jhon Denal - ", __jsx("span", null, " UI Designer"))))), __jsx("div", null)))), __jsx("div", {
  className: "item p-t-30"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  lg: "10",
  xs: "12",
  className: "offset-lg-1"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  sm: "3"
}, __jsx("div", {
  className: " testimonial-msg set-relative"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/event/testimonial/L3-1.png"
}), __jsx("div", {
  className: "msg-box"
}, __jsx("div", {
  className: "center-content"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs",
  src: "/assets/images/event/testimonial/message.png"
}))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
  sm: "9"
}, __jsx("div", {
  className: "quote-margin"
}, __jsx("div", {
  className: "quotes set-relative m-b-20"
}, __jsx("img", {
  alt: "",
  className: "img-fluid set-abs left-quote",
  src: "/assets/images/event/testimonial/i1.png"
}), __jsx("div", {
  className: "quote-text"
}, __jsx("h6", {
  className: "text-white"
}, "When you innovate, you make mistakes.It is best to admit them quickly, & get on with improving your other innovations.")), __jsx("img", {
  alt: "",
  className: "img-fluid set-abs right-quote",
  src: "/assets/images/event/testimonial/i2.png"
})), __jsx("div", {
  className: "rating align-items-center"
}, __jsx("div", {
  className: "stars"
}, __jsx("ul", null, __jsx("li", null, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow"
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star"
})))), __jsx("h5", {
  className: "name"
}, "Jhon Denal - ", __jsx("span", null, " UI Designer"))))), __jsx("div", null)))))))));

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "p21e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: false,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 576,
    settings: {
      centerPadding: '15px',
      slidesToShow: 1
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      centerPadding: '42px'
    }
  }]
};

const SliderSection = () => __jsx("section", {
  className: "saas2 laptop-slider bg-gradient",
  id: "screenshot"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "text-white"
}, "screen shot")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "sub-title-para text-white"
}, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  fluid: true
}, __jsx("div", {
  className: "slider-container"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "trainers-slider",
  id: "trainers-slider"
}, settings), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/screen-shot/screen.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/screen-shot/screen.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/screen-shot/screen.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/screen-shot/screen.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/screen-shot/screen.png"
})), __jsx("div", {
  className: "item"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas2/screen-shot/screen.png"
}))))));

/* harmony default export */ __webpack_exports__["default"] = (SliderSection);

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "r6Kc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_price_element_price7__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("j0wK");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Pricing = () => __jsx("section", {
  className: "saas2 pricing m-0",
  id: "plan"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "10",
  xs: "12",
  className: "offset-md-1"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  className: "saas2-services"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "10",
  className: "offset-md-1"
}, __jsx("div", {
  className: "title"
}, __jsx("div", {
  className: "main-title"
}, __jsx("h2", null, "pricing plan")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", {
  className: "sub-title-para"
}, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.")))), __jsx(_elements_price_element_price7__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });