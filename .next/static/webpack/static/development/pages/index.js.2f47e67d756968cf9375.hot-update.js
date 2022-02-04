webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/common/nav.js":
/*!**********************************!*\
  !*** ./containers/common/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/menu */ "./constant/menu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "F:\\backup2\\web\\portfolio\\unice\\containers\\common\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Nav = function Nav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]),
      mainmenu = _useState[0],
      setMainMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      sidebar = _useState2[0],
      setSidebar = _useState2[1];

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.remove('openSidebar');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var currentUrl = location.pathname;
    mainmenu.filter(function (items) {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(function (subItems) {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(function (subSubItems) {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  var setNavActive = function setNavActive(item) {
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].filter(function (menuItem) {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(function (submenuItems) {
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


  var toggletNavActive = function toggletNavActive(item) {
    if (!item.active) {
      _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].forEach(function (a) {
        if (_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(function (b) {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(function (c) {
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
    className: "navbar",
    id: "togglebtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "responsive-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn-back",
    onClick: closeSidebar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "Cerrar"))), __jsx("ul", {
    className: "main-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(0, 3).map(function (menuItem, i) {
    return __jsx("li", {
      key: i,
      className: " ".concat(menuItem.megaMenu ? 'mega-menu' : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: menuItem.link,
      onClick: function onClick() {
        return toggletNavActive(menuItem);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "".concat(process.env.PUBLIC_URL).concat(menuItem.path),
      className: "".concat(menuItem.active ? 'active' : ''),
      onClick: function onClick() {
        return toggletNavActive(menuItem);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: "mega-menu-container resize ".concat(menuItem.active ? 'opensubmenu' : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 49
      }
    }, menuItem.children.map(function (megaMenuItem, i) {
      return __jsx("div", {
        className: "".concat(menuItem.megaMenuType == 'mini' ? 'col-lg-6' : menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : '', " "),
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: "menu-icon ".concat(megaMenuItem.title ? 'openSubChildMenu' : ''),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 73
        }
      }, menuItem.title === 'Inicio' ? megaMenuItem.children.map(function (subMegaMenuItem, i) {
        return __jsx("li", {
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: "icon-".concat(subMegaMenuItem.icon),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map(function (subMegaMenuItem, i) {
        return __jsx("li", {
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: "".concat(menuItem.active ? 'menu-open activeSubmenu' : ''),
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 37
      }
    }, menuItem.children.map(function (childrenItem, index) {
      return __jsx("li", {
        key: index,
        className: "".concat(childrenItem.children ? 'sub-menu ' : ''),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 45
        }
      }, childrenItem.type === 'sub' ? __jsx("a", {
        href: menuItem.link,
        onClick: function onClick() {
          return toggletNavActive(childrenItem);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 53
        }
      }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "".concat(childrenItem.path),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 53
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 57
        }
      }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
        className: "".concat(childrenItem.active ? 'menu-open' : 'active'),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 53
        }
      }, childrenItem.children.map(function (childrenSubItem, key) {
        return __jsx("li", {
          key: key,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 61
          }
        }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "".concat(childrenSubItem.path),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 69
          }
        }, __jsx("a", {
          className: "sub-menu-title",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 73
          }
        }, childrenSubItem.title)) : '');
      })) : '');
    })) : '');
  })), __jsx("ul", {
    className: "main-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(3, 7).map(function (menuItem, i) {
    return __jsx("li", {
      key: i,
      className: " ".concat(menuItem.megaMenu ? 'mega-menu' : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: menuItem.link,
      onClick: function onClick() {
        return toggletNavActive(menuItem);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "".concat(process.env.PUBLIC_URL).concat(menuItem.path),
      className: "".concat(menuItem.active ? 'active' : ''),
      onClick: function onClick() {
        return toggletNavActive(menuItem);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: "mega-menu-container ".concat(menuItem.title === 'Elements' ? 'resize' : '', " ").concat(menuItem.active ? 'opensubmenu activeSubmenu' : ''),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 49
      }
    }, menuItem.children.map(function (megaMenuItem, i) {
      return __jsx("div", {
        className: "".concat(menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : '', " "),
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: "menu-icon ".concat(megaMenuItem.title ? 'openSubChildMenu' : ''),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 73
        }
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map(function (subMegaMenuItem, i) {
        return __jsx("li", {
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: "icon-".concat(subMegaMenuItem.icon),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map(function (subMegaMenuItem, i) {
        return __jsx("li", {
          key: i,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: "".concat(menuItem.active ? 'menu-open activeSubmenu' : ''),
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 37
      }
    }, menuItem.children.map(function (childrenItem, index) {
      return __jsx("li", {
        key: index,
        className: "".concat(childrenItem.children ? 'sub-menu ' : ''),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 45
        }
      }, childrenItem.type === 'sub' ? __jsx("a", {
        href: menuItem.link,
        onClick: function onClick() {
          return toggletNavActive(childrenItem);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 53
        }
      }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "".concat(childrenItem.path),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 53
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 57
        }
      }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
        className: "".concat(childrenItem.active ? 'menu-open activeSubmenu' : 'active'),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 53
        }
      }, childrenItem.children.map(function (childrenSubItem, key) {
        return __jsx("li", {
          key: key,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 61
          }
        }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "".concat(childrenSubItem.path),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 69
          }
        }, __jsx("a", {
          className: "sub-menu-title",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 73
          }
        }, childrenSubItem.title)) : '');
      })) : '');
    })) : '');
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.2f47e67d756968cf9375.hot-update.js.map