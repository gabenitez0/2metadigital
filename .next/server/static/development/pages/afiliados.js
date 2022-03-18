module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constant/menu.js":
/*!**************************!*\
  !*** ./constant/menu.js ***!
  \**************************/
/*! exports provided: MENUITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUITEMS", function() { return MENUITEMS; });
const MENUITEMS = [{
  title: 'Inicio',
  type: 'sub',
  link: '#',
  children: [{
    path: '/',
    title: 'Inicio',
    type: 'link'
  }, {
    path: '/#Servicios',
    title: 'Qué hacemos',
    type: 'link'
  }, {
    path: '/#Proyectos',
    title: 'Proyectos',
    type: 'link'
  }, {
    path: '/#Calificaciones',
    title: 'Calificaciones',
    type: 'link'
  }]
}, {
  title: 'Servicios',
  type: 'sub',
  link: '#',
  children: [{
    path: '/ecommerce',
    title: 'E-commerces',
    type: 'link'
  }, {
    path: '#',
    title: 'Landing Pages',
    type: 'link'
  }, {
    path: '#',
    title: 'Institucionales',
    type: 'link'
  }, {
    path: '#',
    title: 'Funnels de Venta',
    type: 'link'
  }, {
    path: '#',
    title: 'Diseño Web',
    type: 'link'
  }, {
    path: '#',
    title: 'Diseño Gráfico',
    type: 'link'
  }, {
    path: '#',
    title: 'Copywriting',
    type: 'link'
  }, {
    path: '#',
    title: 'Mantenimiento',
    type: 'link'
  }, {
    path: '#',
    title: 'Dominios y SSL',
    type: 'link'
  }, {
    path: '#',
    title: 'Hosting y DNS',
    type: 'link'
  }]
}, {
  title: 'Contacto',
  type: 'sub',
  link: '#',
  children: [{
    path: '#contacto',
    title: 'Iniciar Chat',
    type: 'link'
  }, {
    path: '#contacto',
    title: 'Contactar',
    type: 'link'
  }]
}, {
  title: 'Afiliados',
  type: 'sub',
  link: '#',
  children: [{
    path: '/afiliados',
    title: 'Programa de Afiliados',
    type: 'link'
  }, {
    path: '/afiliados',
    title: 'Trabaja con nosotros',
    type: 'link'
  }]
}];

/***/ }),

/***/ "./containers/common/header.js":
/*!*************************************!*\
  !*** ./containers/common/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./containers/common/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\containers\\common\\header.js";
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

  const logo = {
    maxWidth: '30vw',
    height: 'auto',
    minWidth: '200px'
  };
  return __jsx("header", {
    className: `${props.className || 'app2'} loding-header nav-abs custom-scroll  `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("nav", {
    style: {
      alignItems: 'baseline',
      padding: '1rem 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "m-r-auto",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, props.className == 'agency' ? __jsx("img", {
    alt: "",
    style: logo,
    className: "img-fluid",
    src: "/assets/images/logo/logo4.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  }) : props.className == 'dark' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  }) : props.className == 'dark position-relative ecommerce' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 45
    }
  }) : props.className == 'dark bg-white ecommerce' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 45
    }
  }) : props.className == 'dark agency' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/5.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 53
    }
  }) : props.className == 'saas1' ? __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/logo4neg.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 57
    }
  }) : __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: "/assets/images/logo/logo4neg.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 59
    }
  })), props.shop && __jsx("div", {
    className: "top-header-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "#",
    onClick: () => setSearch(!search),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 49
    }
  })), __jsx("div", {
    "aria-labelledby": "dropdownMenuButton",
    className: `dropdown-menu ${search && `show`} dropdown-menu-right`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 45
    }
  }, __jsx("form", {
    className: "form-inline search-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 53
    }
  }, __jsx("label", {
    className: "sr-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 57
    }
  }, "Email"), __jsx("input", {
    className: "form-control-plaintext",
    placeholder: "Search....",
    type: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 57
    }
  }), __jsx("span", {
    className: "d-sm-none mobile-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 57
    }
  }))))), __jsx("li", {
    className: "account ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "#",
    onClick: () => setShow(!show),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 49
    }
  })), __jsx("div", {
    className: `dropdown-menu ${show && `show`} dropdown-menu-right`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 45
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/auth/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 81
    }
  }, "Login")), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 49
    }
  }, "Account"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 79
    }
  }, "Wishlist")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 79
    }
  }, "checkout")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./containers/common/nav.js":
/*!**********************************!*\
  !*** ./containers/common/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/menu */ "./constant/menu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\containers\\common\\nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Nav = () => {
  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.remove('openSidebar');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].filter(menuItem => {
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
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].forEach(a => {
        if (_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].includes(item)) a.active = false;
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
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  };

  return __jsx("div", {
    className: `navbar`,
    style: {
      justifyContent: 'end'
    },
    id: "togglebtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "responsive-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn-back",
    onClick: closeSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "Cerrar"))), __jsx("ul", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(0, 3).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: menuItem.link,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container resize ${menuItem.active ? 'opensubmenu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 49
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'mini' ? 'col-lg-6' : menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 73
        }
      }, menuItem.title === 'Inicio' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 37
      }
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 45
      }
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: menuItem.link,
      onClick: () => toggletNavActive(childrenItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 53
      }
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 57
      }
    }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open' : 'active'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 53
      }
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 61
      }
    }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenSubItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 69
      }
    }, __jsx("a", {
      className: "sub-menu-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 73
      }
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })), __jsx("ul", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(3, 7).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: menuItem.link,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container ${menuItem.title === 'Elements' ? 'resize' : ''} ${menuItem.active ? 'opensubmenu activeSubmenu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 49
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 73
        }
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 37
      }
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 45
      }
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: menuItem.link,
      onClick: () => toggletNavActive(childrenItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 53
      }
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 57
      }
    }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open activeSubmenu' : 'active'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 53
      }
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 61
      }
    }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenSubItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 69
      }
    }, __jsx("a", {
      className: "sub-menu-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 73
      }
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./database/layouts/modern/database.js":
/*!*********************************************!*\
  !*** ./database/layouts/modern/database.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  FeatureData: [{
    img: '/assets/images/saas1/feature/2.png',
    heading: 'Embudos de',
    layout: 'Venta',
    desc: 'Se compone de varias páginas simples y tiene el propósito de filtrar el tráfico, almacenar un e-mail de valor y finalmente vender un producto o servicio.',
    link: 'http://embudo.2meta.digital/',
    button: 'Ver Ejemplo →'
  }, {
    img: '/assets/images/saas1/feature/1.png',
    heading: 'Páginas',
    layout: 'eCommerce',
    desc: 'Una Tienda Online automatiza procesos de venta y ahorra mucho tiempo a vendedores de productos finales como tiendas de ropa, zapatillas, muebles, electronica, etc.',
    link: 'http://electro.2meta.digital/',
    button: 'Ver Ejemplo →'
  }, {
    img: '/assets/images/saas1/feature/3.png',
    heading: 'Páginas de',
    layout: 'Aterrizaje',
    desc: 'El propósito de una Landing Page es conducir al visitante hacia una acción determinada, ya sea vender un producto, servicio, idea, conseguir un email, etc.',
    link: 'http://landing.2meta.digital/',
    button: 'Ver Ejemplo →'
  }, {
    img: '/assets/images/saas1/feature/4.png',
    heading: 'Páginas',
    layout: 'Institucionales',
    desc: 'El Sitio Institucional se compone de varias páginas y brinda información más extensa sobre una empresa, compañía o institución, no tiene como propósito principal vender aunque también puede hacerlo.',
    link: 'http://arquitectura2.2meta.digital/',
    button: 'Ver Ejemplo →'
  }, {
    img: '/assets/images/saas1/feature/5.png',
    heading: 'Páginas',
    layout: 'Noticias / Blog',
    desc: 'Este tipo de sitios se utiliza para el marketing de contenidos (SEO). Proporciona contenido en forma de artículos periodísticos, académicos, de investigación, información de valor o simplemente un blog personal.',
    link: 'http://noticias.2meta.digital/',
    button: 'Ver Ejemplo →'
  }, {
    img: '/assets/images/saas1/feature/6.png',
    heading: 'Diseño de',
    layout: 'Redes Sociales',
    desc: 'Diseñamos recursos gráficos para redes sociales y también nos encargamos de generar el contenido de manera regular. Mantenemos activas tus redes sociales y generamos publicidad orgánica.'
  }, {
    img: '/assets/images/saas1/feature/1.png',
    heading: 'Gestión de',
    layout: 'Contenido',
    desc: 'Solucionamos la tarea de la generación del contenido en todo tipo de páginas y redes sociales. Generamos textos para páginas, artículos, cargamos productos en una tienda online, y hacemos posts de valor en redes sociales.'
  }, {
    img: '/assets/images/saas1/feature/2.png',
    heading: 'Mantenimiento',
    layout: 'Web',
    desc: 'Se abona a partir del segundo mes de servicio para cualquier página web, incluye un Dominio Premium, Web Hosting, Certificado SSL, configuración de DNS, mantenimiento general y soporte por cualquier error o problema.'
  }, {
    img: '/assets/images/saas1/feature/3.png',
    heading: 'Administración de',
    layout: 'Sistemas',
    desc: 'Todos los sitios se almacenan en servidores a medida en la nube dependiendo del tráfico y tamaño del sitio, se realizan copias de seguridad, están protegidos contra ataques DDOS y optimizados con tecnología CDN.'
  }],
  NavData: [{
    img: '/assets/images/saas1/tab-icon/001-tap.png',
    title: '1. Inscripción'
  }, {
    img: '/assets/images/saas1/tab-icon/002-settings.png',
    title: '2. Generación de Leads'
  }, {
    img: '/assets/images/saas1/tab-icon/button.png',
    title: '3. Cierre de la Venta'
  }, {
    img: '/assets/images/saas1/tab-icon/key-1.png',
    title: '4. Reclamar Comisión'
  }],
  ContentData: [{
    img: '/assets/images/saas1/tab/Initializing.png',
    title: '1. Inscripción',
    desc: 'Primero debes inscribirte desde nuestro formulario',
    details: 'De esta forma podemos estar en contacto directo para coordinar todo lo que sea necesario.',
    button: 'Formulario de Afiliación',
    link: 'https://share.hsforms.com/1Q2EFNU_YQIyWQVbcFSMi2wcqfyd'
  }, {
    img: '/assets/images/saas1/tab/Add-instant.png',
    title: '2. Generación de Leads',
    desc: 'Debes generar clientes potenciales',
    details: 'Puedes utilizar la forma y el medio de publicidad que quieras y te resulte eficiente. Cualquier medio como TikTok, Instagram, Facebook, Twitter, etc. y cualquier forma como SEO (Orgánico), SEM (Anuncios), P2P (Contacto Directo), Freelancer, etc.'
  }, {
    img: '/assets/images/saas1/tab/Configuration.png',
    title: '3. Cierre de la Venta',
    desc: 'Debes concretar la venta',
    details: 'Utilizando la Información para Afiliados de nuestros productos y servicios con sus correspondientes precios, debes cerrar la venta con el cliente, incluyendo el pago que debe llegar a la cuenta de Paypal de 2metadigital. Luego le debes informar al desarrollador para que pueda iniciar el trabajo y enviarte tu comisión.',
    button: 'Información para Afiliados',
    link: 'https://docs.google.com/spreadsheets/d/1jcna069GqOFbU6M46GzCaaC5maObVANFr7ZO6NlGPeA/edit?usp=sharing'
  }, {
    img: '/assets/images/saas1/tab/Security.png',
    title: '4. Reclamar Comisión',
    desc: 'Recibirás tus comisiones automáticamente!',
    details: 'Cuando le avises al desarrollador que concretaste una venta para que inicie con su parte del trabajo, éste te enviará tu comisión automáticamente. Las comisiones van desde $60 USD hasta $250 USD por Cada Venta dependiendo del producto que el cliente compre, incluso puedes ganar más de $250 USD si el cliente compra varios productos. Esto corresponde al más del 40% del valor total de la compra! Generemos trabajo e ingresos juntos!',
    button: 'Inscríbete Ahora',
    link: 'https://share.hsforms.com/1Q2EFNU_YQIyWQVbcFSMi2wcqfyd'
  }]
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

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

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

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

          if (true) {
            throw new Error(error);
          } else {}

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

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/checkPropTypes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "object-assign");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/next/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-light-accordion/demo/css/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-light-accordion/demo/css/index.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/afiliados.js":
/*!****************************!*\
  !*** ./pages/afiliados.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_modern_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/modern-sass */ "./pages/layouts/modern-sass.js");
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\afiliados.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components
//import EnterpriseSass from '../pages/layouts/enterprice-sass'



const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Genera Ingresos Extra Hoy - Programa de Afiliados de 2MetaDigital"), __jsx("meta", {
    name: "Genera Ingresos Extra Hoy - Programa de Afiliados de 2MetaDigital",
    content: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx("meta", {
    description: "Buscamos personas que se encarguen de vender nuestros productos y servicios de manera independiente, desde la generaci\xF3n del lead hasta el cierre de la venta a cambio de un rentable beneficio.",
    content: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Buscamos personas que se encarguen de vender nuestros productos y servicios de manera independiente, desde la generaci\xF3n del lead hasta el cierre de la venta a cambio de un rentable beneficio.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/fav4.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/meta4.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "agencia digital, programaci\xF3n, dise\xF1o web, dise\xF1o gr\xE1fico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, p\xE1gina de aterrizaje, tienda digital, tiendanube, shopify, wix, programa de afiliados, marketing de afiliados",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "robots",
    content: "index",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })), __jsx(_layouts_modern_sass__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/layouts/modern-sass.js":
/*!**************************************!*\
  !*** ./pages/layouts/modern-sass.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/common/header */ "./containers/common/header.js");
/* harmony import */ var _layouts_sections_modern_sass_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/sections/modern-sass/banner */ "./pages/layouts/sections/modern-sass/banner.js");
/* harmony import */ var _layouts_sections_modern_sass_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/sections/modern-sass/feature */ "./pages/layouts/sections/modern-sass/feature.js");
/* harmony import */ var _layouts_sections_modern_sass_build__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/sections/modern-sass/build */ "./pages/layouts/sections/modern-sass/build.js");
/* harmony import */ var _layouts_sections_modern_sass_work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/sections/modern-sass/work */ "./pages/layouts/sections/modern-sass/work.js");
/* harmony import */ var _layouts_sections_modern_sass_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/sections/modern-sass/price */ "./pages/layouts/sections/modern-sass/price.js");
/* harmony import */ var _layouts_sections_modern_sass_faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/sections/modern-sass/faq */ "./pages/layouts/sections/modern-sass/faq.js");
/* harmony import */ var _layouts_sections_modern_sass_cta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/sections/modern-sass/cta */ "./pages/layouts/sections/modern-sass/cta.js");
/* harmony import */ var _layouts_sections_modern_sass_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/sections/modern-sass/client */ "./pages/layouts/sections/modern-sass/client.js");
/* harmony import */ var _sections_modern_sass_copyright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/modern-sass/copyright */ "./pages/layouts/sections/modern-sass/copyright.js");
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\modern-sass.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Custom Components












const ModernSass = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#fb3b64');
    document.body.style.setProperty('--secondary', '#071828');
    document.body.style.setProperty('--light', '#071828');
    document.body.style.setProperty('--dark', '#fb3b64');
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "saas1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_modern_sass_banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_modern_sass_work__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_modern_sass_build__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_modern_sass_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_modern_sass_price__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_modern_sass_faq__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_modern_sass_cta__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_modern_sass_client__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_sections_modern_sass_copyright__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ModernSass);

/***/ }),

/***/ "./pages/layouts/sections/modern-sass/banner.js":
/*!******************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/banner.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner = () => __jsx("section", {
  className: "saas1 header",
  id: "home",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "saas1-header bg header8-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "center-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 29
  }
}, __jsx("div", {
  className: "header-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 33
  }
}, __jsx("div", {
  className: "d-flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 37
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 41
  }
}, __jsx("span", {
  className: "theme-color",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 45
  }
}, "P"), "rograma ", __jsx("span", {
  className: "small-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 91
  }
}, "de "), __jsx("span", {
  className: "theme-color",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 78
  }
}, "A"), "filiados"), __jsx("div", {
  className: "center-content slider-logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 41
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/saas1/slider-logo.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 45
  }
})))), __jsx("div", {
  className: "header-sub-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 33
  }
}, __jsx("h3", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 37
  }
}, "\xBFEres vendedor? \xBFTe dedicas al marketing o publicidad?", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 118
  }
}, __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 41
  }
}), " Genera Ingresos Extra"), " con Nosotros Ahora!")), __jsx("div", {
  className: "header-sub-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 33
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 37
  }
}, "Gana desde", __jsx("span", {
  className: "theme-color",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 51
  }
}, " $60 USD "), "hasta", __jsx("span", {
  className: "theme-color",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 102
  }
}, " +$250 USD "), "por", __jsx("span", {
  className: "theme-color",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 153
  }
}, " Cada Venta "), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 202
  }
}), "de cualquiera de nuestros productos y servicios")), __jsx("div", {
  className: "link-horizontal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 33
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 37
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 41
  }
}, __jsx("a", {
  className: "btn btn-default primary-btn transparent",
  href: "#como-funciona",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 45
  }
}, "\xBFC\xF3mo funciona?"))))))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "center-text slider-banner",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "slid-banner",
  src: "/assets/images/saas1/header.png",
  className: "img-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 29
  }
})))))), __jsx("img", {
  alt: "",
  className: "img-fluid set-abs background",
  src: "/assets/images/saas1/background2.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }
}), __jsx("img", {
  alt: "",
  className: "img-fluid set-abs dot",
  src: "/assets/images/saas1/dot.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./pages/layouts/sections/modern-sass/build.js":
/*!*****************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/build.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\build.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
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

const Build = () => __jsx("section", {
  className: "saas1 build-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "build-right-slider",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "owl-carousel owl-theme sync2",
  id: "sync2"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
  }
}), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 17
  }
}, __jsx("img", {
  alt: "work-slider",
  className: "img-fluid work-slide",
  src: "/assets/images/saas1/work.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 21
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 17
  }
}, __jsx("img", {
  alt: "work-slider",
  className: "img-fluid work-slide",
  src: "/assets/images/saas1/work.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 21
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 17
  }
}, __jsx("img", {
  alt: "work-slider",
  className: "img-fluid work-slide",
  src: "/assets/images/saas1/work.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 21
  }
})))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  lg: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "build-box",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 21
  }
}, __jsx("h3", {
  className: "build-head text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 25
  }
}, "Vende Productos de", __jsx("span", {
  className: "theme-color",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 81
  }
}, " Alta Calidad")), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 25
  }
}, "Ofrecemos una gama de productos y servicios de desarrollo web, dise\xF1o gr\xE1fico y redes sociales de m\xE1xima calidad, ultra optimizados y a precios inmejorables."), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 25
  }
}, __jsx("li", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 29
  }
}, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 56
  }
}), "Embudos de Venta"), __jsx("li", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 29
  }
}, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 56
  }
}), "P\xE1ginas eCommerce"), __jsx("li", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 29
  }
}, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 56
  }
}), "P\xE1ginas de Aterrizaje"), __jsx("li", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 29
  }
}, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 56
  }
}), "P\xE1ginas Institucionales"), __jsx("li", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 29
  }
}, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 56
  }
}), "P\xE1ginas de Noticias / Blog"), __jsx("li", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 29
  }
}, __jsx("img", {
  alt: "icon",
  src: "/assets/images/saas1/build-.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 56
  }
}), "Dise\xF1o para Redes Sociales")))))));

/* harmony default export */ __webpack_exports__["default"] = (Build);

/***/ }),

/***/ "./pages/layouts/sections/modern-sass/client.js":
/*!******************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/client.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\client.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 420,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 1199,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 1366,
    settings: {
      slidesToShow: 6
    }
  }]
};

const Client = () => __jsx("section", {
  className: "saas1 client brand-slider",
  id: "client-box",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  fluid: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "12",
  className: "client-box text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "owl-carousel saas-brand owl-theme"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 21
  }
}), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/1.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 29
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/2.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 29
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/3.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 29
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/4.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 29
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/5.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 29
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/6.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 29
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/4.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 29
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/3.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 29
  }
})), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "client-slider",
  className: "img-fluid",
  src: "/assets/images/saas1/brand/2.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 29
  }
})))))));

/* harmony default export */ __webpack_exports__["default"] = (Client);

/***/ }),

/***/ "./pages/layouts/sections/modern-sass/copyright.js":
/*!*********************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/copyright.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\copyright.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Copyright = () => __jsx("div", {
  className: "saas1 copyright",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "link-horizontal center-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text op-text",
  href: "https://web.whatsapp.com/send?phone=541165003611",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 33
  }
}, "Contactar Ahora"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  sm: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 17
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 21
  }
}, __jsx("h6", {
  className: "copyright-text text-white text-right op-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 25
  }
}, "Copyright \xA9 2022 Programa de Afiliados ", __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-heart mx-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 125
  }
}), "2MetaDigital"))))));

/* harmony default export */ __webpack_exports__["default"] = (Copyright);

/***/ }),

/***/ "./pages/layouts/sections/modern-sass/cta.js":
/*!***************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/cta.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\cta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var prices = {
  marginLeft: 0,
  textDecoration: 'initial'
};

const Price = () => {
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggleClick = () => {
    setActive(!active);
  };

  return __jsx("section", {
    className: "saas1 pricing",
    id: "plan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: "title-logo",
    className: "img-fluid",
    src: "/assets/images/saas1/title-logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "main-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, "Empieza a Generar de ", __jsx("span", {
    className: "theme-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 54
    }
  }, "$60"), " a ", __jsx("span", {
    className: "theme-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 97
    }
  }, "$375 USD"), " por cada venta Ahora")), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "p-padding text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, "Ponte en contacto conmigo, sacate todas las dudas y empecemos a generar ingresos juntos!")), __jsx("a", {
    className: "btn btn-default primary-btn mt-4",
    href: "https://web.whatsapp.com/send?phone=541165003611",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "Contactar Ahora")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "./pages/layouts/sections/modern-sass/faq.js":
/*!***************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/faq.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_light_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-light-accordion */ "react-light-accordion");
/* harmony import */ var react_light_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-light-accordion/demo/css/index.css */ "./node_modules/react-light-accordion/demo/css/index.css");
/* harmony import */ var react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_light_accordion_demo_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\faq.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Faq = () => {
  const Personal = () => __jsx("div", {
    className: "collapse show",
    id: "collapseicon",
    "aria-labelledby": "collapseicon",
    "data-parent": "#accordionoc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Me llamo Gabriel, nac\xED y vivo en Buenos Aires, Argentina. Tengo 24 a\xF1os y soy emprendedor desde hace casi 10 a\xF1os (desde mis 15 a\xF1os). ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 175
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 180
    }
  }), "Actualmente estoy enfocado principalmente en este proyecto llamado 2metadigital, el cual inici\xE9 hace 2 a\xF1os aproximadamente y en ese tiempo desarrolle formas de trabajo muy eficientes y de excelente calidad."));

  const Proyecto = () => __jsx("div", {
    className: "collapse show",
    id: "collapseicon1",
    "aria-labelledby": "collapseicon1",
    "data-parent": "#accordionoc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "2MetaDigital empez\xF3 hace 2 a\xF1os con otro nombre y solo se enfocaba en eCommerces, en todo este tiempo conseguimos ampliar la gama de soluciones y perfeccionar nuestros productos y servicios no solo hacia el cliente sino en cuanto a los costos de tiempo por trabajo: es decir, podemos entregar productos terminados en pocas horas/d\xEDas. ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 375
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 380
    }
  }), "Actualmente estamos llevando a cabo nuevas estrategias de marketing de crecimiento en equipo."));

  const Mercado = () => __jsx("div", {
    className: "collapse show",
    id: "collapseicon1",
    "aria-labelledby": "collapseicon1",
    "data-parent": "#accordionoc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Nuestros productos se pueden enfocar a diversos mercados y p\xFAblicos espec\xEDficos. Lo mejor es dirigirse espec\xEDficamente a un tipo de p\xFAblico o problema. ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 192
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 197
    }
  }), "Nosotros les proporcionamos una serie de herramientas (lading pages) a nuestros afiliados para que puedan promocionar y vender nuestros productos y servicios m\xE1s facilmente. ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 376
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 381
    }
  }), "Si ya eres un experimentado en el tema, puedes utilizar tus propios recursos publicitarios que mejor te funcionen. Est\xE1 prohibido utilizar mentiras o enga\xF1os como forma de vender."));

  const Contacto = () => __jsx("div", {
    className: "collapse show",
    id: "collapseicon1",
    "aria-labelledby": "collapseicon1",
    "data-parent": "#accordionoc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Puedes contactarte conmigo cuando quieras! utilizo preferentemente WhatsApp. Si gustas podemos acordar una reuni\xF3n por Zoom para conocernos mejor y despejar cualquier duda."), __jsx("a", {
    className: "btn btn-default primary-btn mt-4",
    href: "https://web.whatsapp.com/send?phone=541165003611",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Contactame por WhatsApp"));

  return __jsx("section", {
    className: "saas1 faq",
    id: "contacto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "faq-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "frequent-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, "Hola, soy el creador de 2MetaDigital!"), __jsx("h6", {
    style: {
      textTransform: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, "A lo largo de mi carrera como emprendedor aprend\xED que el contacto humano, el trabajo en equipo y la comunicaci\xF3n transparente es muy importante para el crecimiento en cualquier \xE1rea de la vida, incluyendo los negocios, es por eso que quiero que trabajemos de la mejor forma y alcancemos nuestras METAS juntos!"), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    atomic: true,
    className: "mb-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "M\xE1s Informaci\xF3n Personal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 37
    }
  }, __jsx(Personal, {
    className: "active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 41
    }
  })), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Sobre el Proyecto 2MetaDigital",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, __jsx(Proyecto, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  })), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "Mercado de Nuestros Productos y Servicios",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, __jsx(Mercado, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  })), __jsx(react_light_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    className: "card-header bg-primary",
    title: "C\xF3mo Contactarme?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }, __jsx(Contacto, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "faq-img-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "faq-person",
    className: "img-fluid",
    src: "/assets/images/saas1/gabriel2.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ }),

/***/ "./pages/layouts/sections/modern-sass/feature.js":
/*!*******************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/feature.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/layouts/modern/database */ "./database/layouts/modern/database.js");
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\feature.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Feature = () => __jsx("section", {
  className: "saas1 service",
  id: "feature",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "about-chat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "12",
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "title-logo",
  className: "img-fluid",
  src: "/assets/images/saas1/title-logo.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 29
  }
}), __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 29
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 33
  }
}, "Pero, qu\xE9 soluciona ", __jsx("span", {
  className: "theme-color",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 57
  }
}, "2MetaDigital"), "?")), __jsx("hr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 29
  }
}), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 29
  }
}, __jsx("p", {
  className: "p-padding",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 33
  }
}, "2MetaDigital fue creada para resolver la integraci\xF3n de los negocios al mercado digital, si bien existen diversas plataformas que pueden hacer esto, no son gratis y tambi\xE9n demandan tiempo. Nuestros servicios tampoco son gratis, pero s\xED ", __jsx("span", {
  className: "theme-color",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 295
  }
}, "conseguimos Ahorrarle todo ese Tiempo a nuestros clientes con trabajos de Alta Calidad"), ", para que ellos se ocupen de lo que realmente les importa: su negocio, sus productos y sus clientes.")))), _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__["FeatureData"].map((item, i) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "4",
    md: "6",
    className: "service-container",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "chat-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }, __jsx("img", {
    alt: "stay-connected",
    src: item.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "feature-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 41
    }
  }, __jsx("h4", {
    className: "service-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 45
    }
  }, " ", item.heading, " ", __jsx("span", {
    className: "theme-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 93
    }
  }, item.layout)), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 45
    }
  }), __jsx("p", {
    className: "mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 45
    }
  }, item.desc), __jsx("a", {
    href: item.link,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "theme-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 81
    }
  }, item.button)))));
})))));

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "./pages/layouts/sections/modern-sass/price.js":
/*!*****************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/price.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\price.js";
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
var prices = {
  marginLeft: 0,
  textDecoration: 'initial'
};

const Price = () => {
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const toggleClick = () => {
    setActive(!active);
  };

  return __jsx("section", {
    className: "saas1 pricing",
    id: "plan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12",
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: "title-logo",
    className: "img-fluid",
    src: "/assets/images/saas1/title-logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "main-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "theme-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }, "P"), "recios ", __jsx("span", {
    className: "theme-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 78
    }
  }, "\xDA"), "nicos")), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "p-padding text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Estos precios son para Latinoam\xE9rica, para clientes de Norteam\xE9rica y Europa estos precios aumentan un 50%"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "wrapper-full",
    id: "monthly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "12",
    md: "12",
    sm: "12",
    xs: "12",
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "owl-carousel owl-theme pricing-slider plan-box"
  }, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "price-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "price-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }, "Landing Page"), __jsx("img", {
    alt: "pan-line",
    src: "/assets/images/saas1/plan-box.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  }), __jsx("h4", {
    className: "no-weight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  }, "$", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 68
    }
  }, "150")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 41
    }
  }, __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 64
    }
  }), "Dise\xF1o ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 136
    }
  }, "Profesional")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 64
    }
  }), "Contenido ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 139
    }
  }, "Copywriting")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 129
    }
  }, "1"), " P\xE1gina de Aterrizaje"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 129
    }
  }, "1"), " Llamada a la Acci\xF3n")), __jsx("a", {
    className: "btn btn-default btn-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, "Comisi\xF3n de $60"))), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "price-box active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "price-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 41
    }
  }, "Embudo Ventas"), __jsx("img", {
    alt: "plan-line",
    src: "/assets/images/saas1/plan-box.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 41
    }
  }), __jsx("h4", {
    className: "no-weight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 41
    }
  }, "$", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 68
    }
  }, "200")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 41
    }
  }, __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 64
    }
  }), "Dise\xF1o ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 136
    }
  }, "Profesional")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 64
    }
  }), "Contenido ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 139
    }
  }, "Copywriting")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 129
    }
  }, "3"), " P\xE1ginas de Aterrizaje"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 129
    }
  }, "1"), " Llamada a la Acci\xF3n"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 64
    }
  }), "E-mail ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 136
    }
  }, "Marketing"))), __jsx("a", {
    className: "btn btn-default btn-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }, "Comisi\xF3n de $80"))), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "price-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "price-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }, "E-commerce"), __jsx("img", {
    alt: "plan-line",
    src: "/assets/images/saas1/plan-box.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }), __jsx("h4", {
    className: "no-weight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 41
    }
  }, "$", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 68
    }
  }, "200")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 41
    }
  }, __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 64
    }
  }), "Dise\xF1o ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 136
    }
  }, "Profesional")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 64
    }
  }), "Contenido ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 139
    }
  }, "Copywriting")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 129
    }
  }, "1"), " P\xE1gina de Aterrizaje"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 64
    }
  }), "E-mail ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 136
    }
  }, "Marketing")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 64
    }
  }), "Secci\xF3n de ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 140
    }
  }, "Usuarios")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 64
    }
  }), "Panel de ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 138
    }
  }, "Administraci\xF3n")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 129
    }
  }, "Infinitos"), " Productos, Categor\xEDas, etc.")), __jsx("a", {
    className: "btn btn-default btn-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 41
    }
  }, "Comisi\xF3n de $80"))), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "price-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "price-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, "Blog / Noticias"), __jsx("img", {
    alt: "plan-line",
    src: "/assets/images/saas1/plan-box.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 41
    }
  }), __jsx("h4", {
    className: "no-weight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 41
    }
  }, "$", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 68
    }
  }, "300")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 41
    }
  }, __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 64
    }
  }), "Dise\xF1o ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 136
    }
  }, "Profesional")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 64
    }
  }), "Contenido ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 139
    }
  }, "Copywriting")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 129
    }
  }, "1"), " P\xE1gina de Aterrizaje"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 64
    }
  }), "E-mail ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 136
    }
  }, "Marketing")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 64
    }
  }), "Secci\xF3n de ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 140
    }
  }, "Usuarios")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 64
    }
  }), "Panel de ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 138
    }
  }, "Administraci\xF3n")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 129
    }
  }, "Infinitos"), " Posts, P\xE1ginas, etc.")), __jsx("a", {
    className: "btn btn-default btn-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 41
    }
  }, "Comisi\xF3n de $120"))), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "price-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "price-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 41
    }
  }, "Institucional"), __jsx("img", {
    alt: "plan-line",
    src: "/assets/images/saas1/plan-box.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 41
    }
  }), __jsx("h4", {
    className: "no-weight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 41
    }
  }, "$", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 68
    }
  }, "400")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 41
    }
  }, __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 64
    }
  }), "Dise\xF1o ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 136
    }
  }, "Profesional")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 64
    }
  }), "Contenido ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 139
    }
  }, "Copywriting")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 129
    }
  }, "2"), " P\xE1ginas de Aterrizaje"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 129
    }
  }, "2"), " Llamadas a la Acci\xF3n"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 129
    }
  }, "Varias"), " Secciones"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 64
    }
  }), "E-mail ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 136
    }
  }, "Marketing"))), __jsx("a", {
    className: "btn btn-default btn-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 41
    }
  }, "Comisi\xF3n de $160"))), __jsx("div", {
    className: "item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "price-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 37
    }
  }, __jsx("h3", {
    className: "price-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 41
    }
  }, "Institucional +"), __jsx("img", {
    alt: "plan-line",
    src: "/assets/images/saas1/plan-box.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 41
    }
  }), __jsx("h4", {
    className: "no-weight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 41
    }
  }, "$", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 68
    }
  }, "625")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 41
    }
  }, __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 64
    }
  }), "Dise\xF1o ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 136
    }
  }, "Profesional")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 64
    }
  }), "Contenido ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 139
    }
  }, "Copywriting")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 129
    }
  }, "2"), " P\xE1ginas de Aterrizaje"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 129
    }
  }, "2"), " Llamadas a la Acci\xF3n"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 64
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 129
    }
  }, "Varias"), " Secciones"), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 64
    }
  }), "E-mail ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 136
    }
  }, "Marketing")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 64
    }
  }), "Panel de ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 138
    }
  }, "Administraci\xF3n")), __jsx("li", {
    style: prices,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "plan-icon",
    src: "/assets/images/saas1/plan-round.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 64
    }
  }), "Incluye ", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 137
    }
  }, "Blog y eCommerce"))), __jsx("a", {
    className: "btn btn-default btn-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 41
    }
  }, "Comisi\xF3n de $250")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "./pages/layouts/sections/modern-sass/work.js":
/*!****************************************************!*\
  !*** ./pages/layouts/sections/modern-sass/work.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/layouts/modern/database */ "./database/layouts/modern/database.js");
/* harmony import */ var _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\modern-sass\\work.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Work = () => {
  const {
    0: nav,
    1: setNav
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Initializing');

  const toggle = item => {
    setNav(item);
  };

  return __jsx("section", {
    className: "saas1 howitwork",
    id: "como-funciona",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "title-logo",
    className: "img-fluid",
    src: "/assets/images/saas1/title-logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "main-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "theme-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 37
    }
  }, "C"), "\xF3mo ", __jsx("span", {
    className: "theme-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 79
    }
  }, "F"), "unciona")), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "p-padding",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, "Buscamos personas que se encarguen de vender nuestros productos y servicios de manera independiente, desde la generaci\xF3n del lead hasta el cierre de la venta ", __jsx("span", {
    className: "theme-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 216
    }
  }, "a cambio de un rentable beneficio"), ".")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12",
    className: "work-tab",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "nav nav-pills justify-content-center ",
    id: "pills-tab",
    role: "tablist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__["NavData"].map((item, i) => {
    return __jsx("li", {
      className: `nav-item  text-center ${item.title === nav ? 'active' : ''} `,
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 41
      }
    }, __jsx("a", {
      "aria-selected": "true",
      className: `nav-link ${'work' == item.title ? 'active show' : ''}`,
      "data-toggle": "pill",
      onClick: () => toggle(item.title),
      role: "tab",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 45
      }
    }, __jsx("img", {
      alt: "tab-image-1",
      src: item.img,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 49
      }
    }), __jsx("h6", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 49
      }
    }, item.title), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 49
      }
    })));
  })))), __jsx("div", {
    className: "work-tab-bg work-content p-t-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "tab-content text-center",
    id: "pills-tabContent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, _database_layouts_modern_database__WEBPACK_IMPORTED_MODULE_1__["ContentData"].map((item, i) => {
    return __jsx("div", {
      className: `tab-pane fade ${item.title === nav ? 'show active' : ''}`,
      role: "tabpanel",
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "mb-3 p-padding",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    }, item.desc), __jsx("p", {
      className: "mb-4 p-padding",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, item.details), item.button && item.button.length > 0 && __jsx("a", {
      className: "btn btn-default primary-btn",
      href: item.link,
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 71
      }
    }, item.button));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/afiliados.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\backup2\web\2metadigital\unice\pages\afiliados.js */"./pages/afiliados.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-light-accordion":
/*!****************************************!*\
  !*** external "react-light-accordion" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-light-accordion");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=afiliados.js.map