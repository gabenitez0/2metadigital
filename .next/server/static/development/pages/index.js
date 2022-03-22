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

/***/ "./database/layouts/enterprice/database.js":
/*!*************************************************!*\
  !*** ./database/layouts/enterprice/database.js ***!
  \*************************************************/
/*! no static exports found */
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
    title: 'Gestión de contenido',
    desc: 'Gestionamos y diseñamos tu contenido para redes sociales y páginas.'
  }, {
    img: '/assets/images/saas2/our-feature/2.png',
    title: 'Analíticas y Estadísticas',
    desc: 'Recopila datos de tus clientes automáticamente para perfeccionar tu producto y brindar la mejor oferta.'
  }, {
    img: '/assets/images/saas2/our-feature/3.png',
    title: 'Soporte personalizado',
    desc: 'Te brindamos soporte técnico y asesoramiento de valor enfocado a tu producto y negocio específico.'
  }, {
    img: '/assets/images/saas2/our-feature/4.png',
    title: 'Mantenimiento',
    desc: 'Estamos pendientes de que tu página funcione perfectamente siempre y solucionamos cualquier error.'
  }, {
    img: '/assets/images/saas2/our-feature/6.png',
    title: 'Alto Rendimiento',
    desc: 'Los sitios están desarrollados de forma específica para reducir los tiempos de carga a 500ms.'
  }, {
    img: '/assets/images/saas2/our-feature/5.png',
    title: 'Administración',
    desc: 'Nunca más te preocupes por todo el tema de dominios, dns y web hosting, lo hacemos al instante.'
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_enterprice_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/enterprice-sass */ "./pages/layouts/enterprice-sass.js");
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "El Siguiente Paso para Tu Negocio es de Calidad e Impacto - 2MetaDigital"), __jsx("meta", {
    name: "El Siguiente Paso para Tu Negocio es de Calidad e Impacto",
    content: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("meta", {
    description: "Si ya ten\xE9s una p\xE1gina web pero quer\xE9s mejorarla para que tus clientes perciban el profesionalismo de tu negocio y tambi\xE9n generar mayor confianza, atenci\xF3n y ventas, est\xE1s en el lugar indicado.",
    content: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Si ya ten\xE9s una p\xE1gina web pero quer\xE9s mejorarla para que tus clientes perciban el profesionalismo de tu negocio y tambi\xE9n generar mayor confianza, atenci\xF3n y ventas, est\xE1s en el lugar indicado.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/fav3.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/meta3.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "agencia digital, programaci\xF3n, dise\xF1o web, dise\xF1o gr\xE1fico, desarrollo web, copywriting, marketing, agencia, ecommerce, e-commerce, tienda online, landing page, p\xE1gina de aterrizaje, tienda digital, tiendanube, shopify, wix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx("meta", {
    name: "robots",
    content: "index",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })), __jsx(_layouts_enterprice_sass__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/layouts/enterprice-sass.js":
/*!******************************************!*\
  !*** ./pages/layouts/enterprice-sass.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/common/header */ "./containers/common/header.js");
/* harmony import */ var _layouts_sections_enterprice_sass_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/sections/enterprice-sass/banner */ "./pages/layouts/sections/enterprice-sass/banner.js");
/* harmony import */ var _layouts_sections_enterprice_sass_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/sections/enterprice-sass/feature */ "./pages/layouts/sections/enterprice-sass/feature.js");
/* harmony import */ var _layouts_sections_enterprice_sass_business__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/sections/enterprice-sass/business */ "./pages/layouts/sections/enterprice-sass/business.js");
/* harmony import */ var _layouts_sections_enterprice_sass_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/sections/enterprice-sass/service */ "./pages/layouts/sections/enterprice-sass/service.js");
/* harmony import */ var _layouts_sections_enterprice_sass_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/sections/enterprice-sass/slider */ "./pages/layouts/sections/enterprice-sass/slider.js");
/* harmony import */ var _sections_enterprice_sass_tiempo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/enterprice-sass/tiempo */ "./pages/layouts/sections/enterprice-sass/tiempo.js");
/* harmony import */ var _layouts_sections_enterprice_sass_cta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/sections/enterprice-sass/cta */ "./pages/layouts/sections/enterprice-sass/cta.js");
/* harmony import */ var _layouts_sections_enterprice_sass_brand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/sections/enterprice-sass/brand */ "./pages/layouts/sections/enterprice-sass/brand.js");
/* harmony import */ var _layouts_sections_enterprice_sass_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layouts/sections/enterprice-sass/footer */ "./pages/layouts/sections/enterprice-sass/footer.js");
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\enterprice-sass.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Custom Components












const EnterpriceSass = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#844adb');
    document.body.style.setProperty('--secondary', '#071828');
    document.body.style.setProperty('--light', '#5E57EA');
    document.body.style.setProperty('--dark', '#9647DB');
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "saas2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_enterprice_sass_banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_enterprice_sass_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_enterprice_sass_business__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_enterprice_sass_service__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_enterprice_sass_slider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_sections_enterprice_sass_tiempo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_enterprice_sass_cta__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_enterprice_sass_brand__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_enterprice_sass_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EnterpriceSass);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/banner.js":
/*!**********************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/banner.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner = () => {
  const scrollToRef = val => {
    document.querySelector(`#${val}`).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return __jsx("section", {
    className: "saas2 header",
    id: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "saas2-content ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg saas2-bg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "center-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "header-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 37
    }
  }, __jsx("h1", {
    style: {
      lineHeight: 1.2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 41
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 70
    }
  }, "El siguiente paso para tu negocio: impacto y profesionalismo"))), __jsx("div", {
    className: "header-sub-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, __jsx("p", {
    className: "sub-para text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 41
    }
  }, "El salto de calidad y profesional que necesita tu negocio, lo conseguimos con dise\xF1os de alto impacto y redacciones persuasivas que transmiten el valor de tu producto o servicio.")), __jsx("div", {
    className: "link-horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 41
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 45
    }
  }, __jsx("a", {
    className: "btn btn-default btn-white",
    href: "https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20mejorar%20la%20p%C3%A1gina%20web%20de%20mi%20negocio.",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 49
    }
  }, "Contactar ahora")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 45
    }
  }, __jsx("a", {
    className: "btn btn-default primary-btn transparent",
    href: "#calidad",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 49
    }
  }, "m\xE1s info"))))))), __jsx("div", {
    className: "center-text set-abs",
    style: {
      right: '-6%',
      zIndex: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid img-dextop",
    style: {
      maxHeight: '90vh',
      minHeight: '85vh'
    },
    src: "/assets/images/saas2/header.webp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  })))), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs background-animate",
    loading: "lazy",
    src: "/assets/images/saas1/background22.webp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img1 move-up-down",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/3.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img2 move-right-left",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/2.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img3 move-up-down",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/4.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img4 move-up-down",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/5.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img5 move-right-left",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/7.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img6 move-up-down",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/9.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("img", {
    alt: "",
    className: "img-fluid set-abs img7 move-up-down",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/6.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "set-abs round move-right-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid img8",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/10.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "set-abs inner-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid img9",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/8.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "center-content set-abs bottom-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "down",
    onClick: () => scrollToRef('calidad'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    loading: "lazy",
    src: "/assets/images/saas2/header-icon/down.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/brand.js":
/*!*********************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/brand.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../database/layouts/enterprice/database */ "./database/layouts/enterprice/database.js");
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\brand.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }






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
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/music/gallery/gallery-icon/left.png",
    alt: "arrow_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
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
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/music/gallery/gallery-icon/right.png",
    alt: "arrow_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
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
  prevArrow: __jsx(LeftNavButton, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 16
    }
  }),
  nextArrow: __jsx(RightNavButton, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 16
    }
  })
};

const Brand = () => __jsx("section", {
  className: "saas2 brand",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  md: "8",
  xs: "12",
  className: "m-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
  className: "saas2-services",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 17
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 29
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 33
  }
}, "Qu\xE9 dicen nuestros clientes")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 29
  }
}, __jsx("p", {
  className: "sub-title-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 33
  }
}, "Creemos que la relaci\xF3n y satisfacci\xF3n de los clientes es muy importante para el crecimiento de cualquier proyecto o negocio a mediano y largo plazo.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 21
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
  className: "testimonial",
  id: "testimonial"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 21
  }
}), __jsx("div", {
  className: "item p-t-30",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 25
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  lg: "10",
  xs: "12",
  className: "offset-lg-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 29
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 33
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  sm: "3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 37
  }
}, __jsx("div", {
  className: "testimonial-msg set-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 41
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/team/2.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 45
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  sm: "9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 37
  }
}, __jsx("div", {
  className: "quote-margin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 41
  }
}, __jsx("div", {
  className: "quotes set-relative m-b-30",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 45
  }
}, __jsx("div", {
  className: "quote-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 49
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 53
  }
}, "Un espect\xE1culo. Muy buen laburo. Te qued\xF3 muy bien."))), __jsx("div", {
  className: "rating align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 45
  }
}, __jsx("div", {
  className: "stars",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 49
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 53
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 57
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 61
  }
})))), __jsx("h5", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 49
  }
}, "Claudio - ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 80
  }
}, " CEO Latitud34 Desarrollos Urbanos"))))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 37
  }
})))), __jsx("div", {
  className: "item p-t-30",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 25
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  lg: "10",
  xs: "12",
  className: "offset-lg-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 29
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 33
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  sm: "3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 37
  }
}, __jsx("div", {
  className: " testimonial-msg set-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 41
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/team/1.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 45
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  sm: "9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 37
  }
}, __jsx("div", {
  className: "quote-margin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 41
  }
}, __jsx("div", {
  className: "quotes set-relative m-b-20",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 45
  }
}, __jsx("div", {
  className: "quote-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 49
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 53
  }
}, "10/10, profesional y r\xE1pido. El precio es m\xE1s que justo. Definitivamente lo recomendar\xEDa."))), __jsx("div", {
  className: "rating align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 45
  }
}, __jsx("div", {
  className: "stars",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 49
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 53
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 57
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 61
  }
})))), __jsx("h5", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 49
  }
}, "Steven - ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 79
  }
}, " CEO InfriaMC"))))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 37
  }
})))), __jsx("div", {
  className: "item p-t-30",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 25
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  lg: "10",
  xs: "12",
  className: "offset-lg-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 29
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 33
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  sm: "2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 37
  }
}, __jsx("div", {
  className: " testimonial-msg set-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 41
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/team/3.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 45
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  sm: "9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 37
  }
}, __jsx("div", {
  className: "quote-margin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 41
  }
}, __jsx("div", {
  className: "quotes set-relative m-b-20",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 45
  }
}, __jsx("div", {
  className: "quote-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 49
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 53
  }
}, "Excelente trabajo, me gust\xF3 el dise\xF1o."))), __jsx("div", {
  className: "rating align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 45
  }
}, __jsx("div", {
  className: "stars",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 49
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 53
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 57
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 61
  }
})))), __jsx("h5", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 49
  }
}, "Manuel - ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 79
  }
}, " CEO Dallas Showroom"))))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 37
  }
})))), __jsx("div", {
  className: "item p-t-30",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 25
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  lg: "10",
  xs: "12",
  className: "offset-lg-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174,
    columnNumber: 29
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 33
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  sm: "3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 37
  }
}, __jsx("div", {
  className: " testimonial-msg set-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177,
    columnNumber: 41
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/team/4.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 45
  }
}))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  sm: "9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 37
  }
}, __jsx("div", {
  className: "quote-margin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 41
  }
}, __jsx("div", {
  className: "quotes set-relative m-b-20",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183,
    columnNumber: 45
  }
}, __jsx("div", {
  className: "quote-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185,
    columnNumber: 49
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 53
  }
}, "El dise\xF1o del logotipo qued\xF3 incre\xEDble, cumplio con mis expectativas y lo recomiendo."))), __jsx("div", {
  className: "rating align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190,
    columnNumber: 45
  }
}, __jsx("div", {
  className: "stars",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 49
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192,
    columnNumber: 53
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193,
    columnNumber: 57
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 195,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 61
  }
}), __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-star yellow",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198,
    columnNumber: 61
  }
})))), __jsx("h5", {
  className: "name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 49
  }
}, "Julian - ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202,
    columnNumber: 79
  }
}, " CoOwner CapitalMC"))))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 37
  }
}))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/business.js":
/*!************************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/business.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax-tilt */ "react-parallax-tilt");
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\business.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Business = () => __jsx("section", {
  className: "saas2 bg-gradient quick-sol",
  id: "beneficios",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  className: "set-center-div",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  className: "align-items-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "offers-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }
}, __jsx("h3", {
  className: "text-white offer-heading-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }
}, __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 71
  }
}, "\xBFC\xF3mo tu negocio se potencia con una web profesional de alta calidad?")), __jsx("div", {
  className: "bottom-border",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 25
  }
}), __jsx("div", {
  className: "offers-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "d-flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 29
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 33
  }
}), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 33
  }
}, __jsx("h4", {
  className: "offer-main-text text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 37
  }
}, __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 80
  }
}, __jsx("u", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 83
  }
}, "Transmite confianza y seguridad"))), __jsx("p", {
  className: "offer-sub-text text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 37
  }
}, "La calidad transmite confianza y profesionalismo, y un cliente potencial que no conf\xEDa en una p\xE1gina es un cliente perdido y simplemente se va a buscar otra opci\xF3n de la competencia.")))), __jsx("div", {
  className: "offers-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "d-flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 29
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 33
  }
}), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 33
  }
}, __jsx("h4", {
  className: "offer-main-text text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 37
  }
}, __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 80
  }
}, __jsx("u", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 83
  }
}, "Incrementa y Consolida tus clientes"))), __jsx("p", {
  className: "offer-sub-text text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 37
  }
}, "Una p\xE1gina web con un dise\xF1o profesional llama mucho m\xE1s la atenci\xF3n, y sumado a textos persuasivos precisos consigue que realmente seas una competencia y te tomen en cuenta.")))), __jsx("div", {
  className: "offers-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "d-flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 29
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 33
  }
}), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 33
  }
}, __jsx("h4", {
  className: "offer-main-text text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 37
  }
}, __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 80
  }
}, __jsx("u", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 83
  }
}, "Transmite el valor real de tu producto"))), __jsx("p", {
  className: "offer-sub-text text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 37
  }
}, "Hacemos las p\xE1ginas web enfocadas a demostrar el valor de tu producto o servicio para que tus potenciales clientes te elijan.")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  lg: "6",
  sm: "6",
  className: "m-auto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 17
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid m-t-20",
  style: {
    maxHeight: 700
  },
  loading: "lazy",
  src: "/assets/images/saas2/beneficios2.webp",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 21
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Business);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/cta.js":
/*!*******************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/cta.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\cta.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const wpp = {
  position: 'fixed',
  bottom: 10,
  right: 10,
  fontSize: '28px',
  background: '#25D366',
  border: '2px solid white',
  borderRadius: '50%',
  padding: '0 10px',
  color: 'white',
  zIndex: 10
};

const Cta = () => __jsx("section", {
  className: "saas2 testimonial bg-gradient",
  id: "contacto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "text-white",
  style: {
    lineHeight: '1.5'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 29
  }
}, __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 83
  }
}, "El salto profesional de tu negocio est\xE1 muy cerca!", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 136
  }
})), " precios desde $18000 ARS")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 25
  }
}, __jsx("p", {
  className: "sub-title-para text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 29
  }
}, "Empecemos a generar impacto a tus clientes en tiempo record y sin que malgastes el tuyo."), __jsx("p", {
  className: "sub-title-para text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 29
  }
}, "Podemos hablar por texto o agendar una llamada para sacarte de todo tipo de dudas y ayudarte a tomar la mejor decisi\xF3n.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10",
  className: "offset-md-1 text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 17
  }
}, __jsx("a", {
  className: "btn btn-default btn-white",
  href: "https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20mejorar%20la%20p%C3%A1gina%20web%20de%20mi%20negocio.",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 21
  }
}, "Contactar ahora ", __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-whatsapp m-l-5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 213
  }
}))))), __jsx("a", {
  style: wpp,
  href: "https://wa.me/541122505698?text=Hola%2C%20me%20interesa%20mejorar%20la%20p%C3%A1gina%20web%20de%20mi%20negocio.",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-whatsapp p-10",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Cta);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/feature.js":
/*!***********************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/feature.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_pro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/pro */ "./pages/layouts/sections/enterprice-sass/icons/pro.js");
/* harmony import */ var _icons_ventas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/ventas */ "./pages/layouts/sections/enterprice-sass/icons/ventas.js");
/* harmony import */ var _icons_producto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/producto */ "./pages/layouts/sections/enterprice-sass/icons/producto.js");
/* harmony import */ var _icons_copy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/copy */ "./pages/layouts/sections/enterprice-sass/icons/copy.js");
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\feature.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Feature = () => __jsx("section", {
  className: "saas2 feature booking",
  id: "calidad",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  id: "Servicios",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 25
  }
}, __jsx("h2", {
  style: {
    lineHeight: 1.5
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 29
  }
}, "Dise\xF1o Web de Alto Impacto + Redacci\xF3n Publicitaria: La combinaci\xF3n exacta!")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 25
  }
}, __jsx("p", {
  className: "sub-title-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 29
  }
}, "Permitimos que tus clientes perciban el valor de tus productos y servicios a simple vista con dise\xF1os de alta calidad y redacciones profesionales enfocadas a ventas.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "8",
  md: "7",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "center-text justify-content-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "image-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid advance-feature-img",
  loading: "lazy",
  src: "/assets/images/saas2/advance-feature/02.avif",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 29
  }
})))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "4",
  md: "5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 17
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "center-content justify-content-start",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 25
  }
}, __jsx(_icons_pro__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 29
  }
}), __jsx("div", {
  className: "feature-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 29
  }
}, __jsx("h5", {
  className: "feature-head",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 33
  }
}, "Profesionalismo"), __jsx("p", {
  className: "feature-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 33
  }
}, "Calidad de \xE9lite en cada uno de nuestros trabajos.")))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "center-content justify-content-start",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 25
  }
}, __jsx(_icons_ventas__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 29
  }
}), __jsx("div", {
  className: "feature-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 29
  }
}, __jsx("h5", {
  className: "feature-head",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 33
  }
}, "Enfoque en ventas"), __jsx("p", {
  className: "feature-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 33
  }
}, "Sin cosas de m\xE1s, solo lo justo y necesario para lo importante: vender.")))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "center-content justify-content-start",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 25
  }
}, __jsx(_icons_producto__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 29
  }
}), __jsx("div", {
  className: "feature-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 29
  }
}, __jsx("h5", {
  className: "feature-head",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 33
  }
}, "Tu Producto Importa"), __jsx("p", {
  className: "feature-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 33
  }
}, "Seleccionamos el dise\xF1o en funci\xF3n de tu producto o servicio espec\xEDfico.")))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "center-content justify-content-start",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 25
  }
}, __jsx(_icons_copy__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 29
  }
}), __jsx("div", {
  className: "feature-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 29
  }
}, __jsx("h5", {
  className: "feature-head",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 33
  }
}, "Redacciones exactas"), __jsx("p", {
  className: "feature-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 33
  }
}, "Generamos textos persuasivos enfocados al p\xFAblico espec\xEDfico y a la acci\xF3n concreta."))))))));

/* harmony default export */ __webpack_exports__["default"] = (Feature);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/footer.js":
/*!**********************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/footer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx("footer", {
  className: "saas2 footer2",
  id: "contact",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  className: "footer-padding",
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
  lg: "4",
  md: "6",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "logo-sec",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "footer-title mobile-title p-t-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, __jsx("h3", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 29
  }
}, "Nosotros")), __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid footer-logo",
  loading: "lazy",
  src: "/assets/images/logo/logo4neg.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 29
  }
}), __jsx("div", {
  className: "footer-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 29
  }
}, __jsx("h6", {
  className: "text-white para-address",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 33
  }
}, "Somos emprendedores que se potencian junto a otros emprendedores para alcanzar todas las Metas trabajando en equipo."), __jsx("h6", {
  className: "text-white para-address",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 33
  }
}, "Buenos Aires, Argentina"), __jsx("h6", {
  className: "text-white para-address",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 33
  }
}, "2MetaDigital")), __jsx("ul", {
  className: "d-d-flex footer-social social",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 29
  }
}, __jsx("li", {
  className: "footer-social-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "https://www.instagram.com/2metadigital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-instagram",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 107
  }
}))), __jsx("li", {
  className: "footer-social-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 37
  }
}, __jsx("a", {
  href: "https://www.facebook.com/2metadigital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 106
  }
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "2",
  md: "6",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "footer-title mobile-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 21
  }
}, __jsx("h3", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 25
  }
}, "Navegaci\xF3n")), __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 21
  }
}, __jsx("h5", {
  className: "footer-headings",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 25
  }
}, "Navegaci\xF3n"), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 25
  }
}, __jsx("ul", {
  className: "footer-lists",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 29
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 37
  }
}, "Inicio")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#calidad",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 37
  }
}, "Alta Calidad")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#beneficios",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 37
  }
}, "Beneficios")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#funciones",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 37
  }
}, "Funciones extra")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#proyectos",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 37
  }
}, "Nuestros Dise\xF1os")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#tiempo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 37
  }
}, "No pierdas tiempo")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#contacto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 37
  }
}, "Contacto")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "6",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "footer-title mobile-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 21
  }
}, __jsx("h3", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 25
  }
}, "Servicios")), __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 21
  }
}, __jsx("h5", {
  className: "footer-headings",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 25
  }
}, "Servicios"), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 25
  }
}, __jsx("ul", {
  className: "footer-lists",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 29
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 37
  }
}, "Desarrollo Web Profesional")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 37
  }
}, "Dise\xF1o Gr\xE1fico Profesional")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 37
  }
}, "E-Commerces: Tiendas Online")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 37
  }
}, "Copywriting: Redacci\xF3n Ventas")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 37
  }
}, "Landing Pages: P\xE1gina Ventas")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 37
  }
}, "Administraci\xF3n y Mantenimiento")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 33
  }
}, __jsx("a", {
  href: "#!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 37
  }
}, "Hosting, Dominios, SSL y DNS")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "3",
  md: "6",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "footer-title mobile-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 21
  }
}, __jsx("h3", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 25
  }
}, "Informaci\xF3n")), __jsx("div", {
  className: "footer-contant",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 21
  }
}, __jsx("h5", {
  className: "footer-headings",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 25
  }
}, "Informaci\xF3n"), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 25
  }
}, __jsx("ul", {
  className: "footer-lists contacts",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 29
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 33
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 37
  }
}), "Saenz Pe\xF1a, Buenos Aires, Argentina"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 33
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-phone m-r-15",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 37
  }
}), "(+54) 1133226655"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 33
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-envelope m-r-15",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 37
  }
}), "gabriel@2meta.digital"))))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/icons/copy.js":
/*!**************************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/icons/copy.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\icons\\copy.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Copywriting = () => __jsx("img", {
  src: "data:image/png;base64,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",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 1
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Copywriting);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/icons/pro.js":
/*!*************************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/icons/pro.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\icons\\pro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Pro = () => __jsx("img", {
  src: "data:image/png;base64,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",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 1
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Pro);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/icons/producto.js":
/*!******************************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/icons/producto.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\icons\\producto.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Producto = () => __jsx("img", {
  src: "data:image/png;base64,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",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 1
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Producto);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/icons/ventas.js":
/*!****************************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/icons/ventas.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\icons\\ventas.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Ventas = () => __jsx("img", {
  src: "data:image/png;base64,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",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 1
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Ventas);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/service.js":
/*!***********************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/service.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/layouts/enterprice/database */ "./database/layouts/enterprice/database.js");
/* harmony import */ var _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\service.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Service = () => __jsx("section", {
  className: "saas2 services",
  id: "funciones",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  className: "saas2-services",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 25
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 29
  }
}, __jsx("u", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 33
  }
}, "\xA1Atenci\xF3n! Esto no es solo un \"dise\xF1o bonito\""))), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 25
  }
}, __jsx("p", {
  className: "sub-title-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 29
  }
}, "No solo brindamos dise\xF1os de alta calidad con todos los beneficios que eso trae consigo, tambi\xE9n brindamos servicios y herramientas de trabajo que te permitir\xE1n organizarte mejor y ahorrar mucho tiempo de tareas repetitivas!")))), _database_layouts_enterprice_database__WEBPACK_IMPORTED_MODULE_1__["ServiceData"].map((item, i) => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: "4",
    md: "6",
    className: "service-container",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "service text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "img-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, __jsx("img", {
    alt: "",
    className: "service-img img-fluid",
    loading: "lazy",
    src: item.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "service-feature",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, __jsx("h4", {
    className: "feature-text text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }, item.title), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 37
    }
  }, item.desc))));
}))));

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/slider.js":
/*!**********************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/slider.js ***!
  \**********************************************************/
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

var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\slider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var settings = {
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 359,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3
    }
  }]
};

const SliderSection = () => __jsx("section", {
  className: "saas2 laptop-slider bg-gradient",
  id: "proyectos",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title m-b-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 29
  }
}, "Conoc\xE9 Algunos de nuestros trabajos")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 25
  }
}, __jsx("p", {
  className: "sub-title-para text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 29
  }
}, "Te invitamos a ver la calidad de nuestros trabajos y lo que podemos hacer por vos.")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  fluid: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "slider-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 13
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "screenshot-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 21
  }
}), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://electro.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 29
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/1.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 85
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://ropa.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/2.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 78
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://muebles.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/3.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 81
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://cosmeticos.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/4.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 84
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://mascotas.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/5.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 82
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://simple.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/6.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 80
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://deportes.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/7.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 82
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://farma.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/8.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 79
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://joyeria.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/9.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 81
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://fitness.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/10.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 81
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://mecanica.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/11.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 82
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://ni\xF1os.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/12.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 79
  }
}))), __jsx("div", {
  className: "item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 25
  }
}, __jsx("a", {
  href: "http://libros.2meta.digital/",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 25
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  loading: "lazy",
  src: "/assets/images/app_landing2/screenshot/13.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 80
  }
})))))));

/* harmony default export */ __webpack_exports__["default"] = (SliderSection);

/***/ }),

/***/ "./pages/layouts/sections/enterprice-sass/tiempo.js":
/*!**********************************************************!*\
  !*** ./pages/layouts/sections/enterprice-sass/tiempo.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\backup2\\web\\2metadigital\\unice\\pages\\layouts\\sections\\enterprice-sass\\tiempo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Pricing = () => __jsx("section", {
  className: "saas2 pricing m-0",
  id: "tiempo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "10",
  xs: "12",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  className: "saas2-services",
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
  md: "10",
  className: "offset-md-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 29
  }
}, __jsx("h2", {
  style: {
    lineHeight: 1.2
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 33
  }
}, __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 62
  }
}, __jsx("u", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 65
  }
}, "Imagin\xE1 los beneficios de este salto de calidad para tu negocio...")))), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 29
  }
}, __jsx("ul", {
  className: "sub-title-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 33
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 37
  }
}, __jsx("p", {
  className: "sub-title-para pb-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle mr-1",
  style: {
    color: 'var(--primary)'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 76
  }
}), " ", __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 172
  }
}, "... tus potenciales clientes ahora te van a tomar en serio."))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 37
  }
}, __jsx("p", {
  className: "sub-title-para pb-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle mr-1",
  style: {
    color: 'var(--primary)'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 76
  }
}), " ", __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 172
  }
}, "... podr\xE1s realmente transmitir el valor de tu producto o servicio."))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 37
  }
}, __jsx("p", {
  className: "sub-title-para pb-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle mr-1",
  style: {
    color: 'var(--primary)'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 76
  }
}), " ", __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 172
  }
}, "... una nueva imagen profesional y de alto valor."))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 37
  }
}, __jsx("p", {
  className: "sub-title-para pb-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle mr-1",
  style: {
    color: 'var(--primary)'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 76
  }
}), " ... la accesibilidad que les podr\xE1s brindar a tu tr\xE1fico.")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 37
  }
}, __jsx("p", {
  className: "sub-title-para pb-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle mr-1",
  style: {
    color: 'var(--primary)'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 76
  }
}), " ... la cantidad de tiempo que vas a ahorrar de tareas repetitivas.")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 37
  }
}, __jsx("p", {
  className: "sub-title-para pb-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle mr-1",
  style: {
    color: 'var(--primary)'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 76
  }
}), " ... c\xF3mo vas a poder mejorar tu producto y tu negocio con estad\xEDsticas.")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 37
  }
}, __jsx("p", {
  className: "sub-title-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 41
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-check-circle mr-1",
  style: {
    color: 'var(--primary)'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 71
  }
}), " ... que ni siquiera te tengas que ocupar de la generaci\xF3n de contenido."))))), __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 29
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 33
  }
}, __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 37
  }
}, __jsx("u", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 40
  }
}, "Tu proyecto nos importa:")))), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 29
  }
}, __jsx("p", {
  className: "sub-title-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 33
  }
}, __jsx("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 63
  }
}, "Para conseguir los resultados que ofrecemos en esta p\xE1gina, hacemos una investigaci\xF3n de mercado de tu proyecto y an\xE1lisis de tu producto o servicio, de esa manera nosotros podemos entender el valor y factor diferencial del mismo y ofrecerlo de la mejor forma!")))))))));

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\backup2\web\2metadigital\unice\pages\index.js */"./pages/index.js");


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

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

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

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "react-parallax-tilt":
/*!**************************************!*\
  !*** external "react-parallax-tilt" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-parallax-tilt");

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
//# sourceMappingURL=index.js.map