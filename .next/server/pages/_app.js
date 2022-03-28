/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-scss */ \"./node_modules/bootstrap-scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/scss/flaticon.scss */ \"./public/assets/scss/flaticon.scss\");\n/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/scss/font-awesome.scss */ \"./public/assets/scss/font-awesome.scss\");\n/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/scss/color-1.scss */ \"./public/assets/scss/color-1.scss\");\n/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/scss/themify.scss */ \"./public/assets/scss/themify.scss\");\n/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/scss/slick.scss */ \"./public/assets/scss/slick.scss\");\n/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/assets/scss/slick-theme.scss */ \"./public/assets/scss/slick-theme.scss\");\n/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//import Customizer from '../containers/customizer';\nconst { publicRuntimeConfig ={}  } = next_config__WEBPACK_IMPORTED_MODULE_4___default()() || {};\nnprogress__WEBPACK_IMPORTED_MODULE_3___default().configure({\n    showSpinner: publicRuntimeConfig.NProgressShowSpinner\n});\n(next_router__WEBPACK_IMPORTED_MODULE_2___default().onRouteChangeStart) = ()=>{\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();\n};\n(next_router__WEBPACK_IMPORTED_MODULE_2___default().onRouteChangeComplete) = ()=>{\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();\n};\n(next_router__WEBPACK_IMPORTED_MODULE_2___default().onRouteChangeError) = ()=>{\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();\n};\nfunction MyFunctionComponent({ children  }) {\n    const { 0: loader , 1: setLoader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: goingUp , 1: setGoingUp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Page Loader\n        setTimeout(()=>{\n            setLoader(false);\n        }, 500);\n        // Tap to Top Scroll \n        const handleScroll = ()=>{\n            const currentScrollY = window.scrollY;\n            if (currentScrollY > 500) setGoingUp(true);\n            else setGoingUp(false);\n        };\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>window.removeEventListener(\"scroll\", handleScroll)\n        ;\n    }, [\n        goingUp\n    ]);\n    const tapToTop = ()=>{\n        window.scrollTo({\n            behavior: \"smooth\",\n            top: 0\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{\n        const { default: ReactPixel  } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-facebook-pixel */ \"react-facebook-pixel\", 23));\n        ReactPixel.init(1038198026550249, null, {\n            autoConfig: true,\n            debug: true\n        });\n        ReactPixel.pageView();\n        ReactPixel.track(\"ViewContent\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n                lineNumber: 76,\n                columnNumber: 5\n            }, this),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true);\n}\nfunction MyApp({ Component , pageProps , graphql  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyFunctionComponent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {\n                fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsR0FBRUMsU0FBUyxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEUsTUFBTSw2RUFDSEMsQ0FBRzs7d0ZBQ0RoQyxtQkFBbUI7c0dBQ2pCNkIsU0FBUzt1QkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7d0ZBR3pCekMsMERBQWM7Ozs7Ozs7Ozs7O0FBR3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmljZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgJ2Jvb3RzdHJhcC1zY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zY3NzL2ZsYXRpY29uLnNjc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL3Njc3MvZm9udC1hd2Vzb21lLnNjc3MnO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9zY3NzL2NvbG9yLTEuc2Nzc1wiXG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvc2Nzcy90aGVtaWZ5LnNjc3MnO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9zY3NzL3NsaWNrLnNjc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9hc3NldHMvc2Nzcy9zbGljay10aGVtZS5zY3NzXCI7XG4vL2ltcG9ydCBDdXN0b21pemVyIGZyb20gJy4uL2NvbnRhaW5lcnMvY3VzdG9taXplcic7XG5cblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnID0ge30gfSA9IGdldENvbmZpZygpIHx8IHt9O1xuXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHsgc2hvd1NwaW5uZXI6IHB1YmxpY1J1bnRpbWVDb25maWcuTlByb2dyZXNzU2hvd1NwaW5uZXIgfSk7XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiB7XG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xufTtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IHtcbiAgTlByb2dyZXNzLmRvbmUoKTtcbn07XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiB7XG4gIE5Qcm9ncmVzcy5kb25lKCk7XG59O1xuXG5mdW5jdGlvbiBNeUZ1bmN0aW9uQ29tcG9uZW50KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2dvaW5nVXAsIHNldEdvaW5nVXBdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBQYWdlIExvYWRlclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGVyKGZhbHNlKVxuICAgIH0sIDUwMClcblxuICAgIC8vIFRhcCB0byBUb3AgU2Nyb2xsIFxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBpZiAoY3VycmVudFNjcm9sbFkgPiA1MDApXG4gICAgICAgIHNldEdvaW5nVXAodHJ1ZSk7XG4gICAgICBlbHNlXG4gICAgICAgIHNldEdvaW5nVXAoZmFsc2UpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW2dvaW5nVXBdKTtcblxuICBjb25zdCB0YXBUb1RvcCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB0b3A6IDBcbiAgICB9KTtcbiAgfVxuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkZWZhdWx0OiBSZWFjdFBpeGVsIH0gPSBhd2FpdCBpbXBvcnQoJ3JlYWN0LWZhY2Vib29rLXBpeGVsJyk7XG4gICAgUmVhY3RQaXhlbC5pbml0KDEwMzgxOTgwMjY1NTAyNDksIG51bGwsIHtcbiAgICAgICAgYXV0b0NvbmZpZzogdHJ1ZSxcbiAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICB9KTtcbiAgICBSZWFjdFBpeGVsLnBhZ2VWaWV3KCk7XG4gICAgUmVhY3RQaXhlbC50cmFjayhcIlZpZXdDb250ZW50XCIpXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+IFxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgIDwvSGVhZD5cbiAgICB7Y2hpbGRyZW59XG4gICAgICB7Lypsb2FkZXIgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4qL31cbiAgICAgIDw+PC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgZ3JhcGhxbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNeUZ1bmN0aW9uQ29tcG9uZW50PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIFxuICAgICAgPC9NeUZ1bmN0aW9uQ29tcG9uZW50PlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsImdldENvbmZpZyIsIlRvYXN0Q29udGFpbmVyIiwiSGVhZCIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsIk5Qcm9ncmVzc1Nob3dTcGlubmVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0Iiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiTXlGdW5jdGlvbkNvbXBvbmVudCIsImNoaWxkcmVuIiwibG9hZGVyIiwic2V0TG9hZGVyIiwiZ29pbmdVcCIsInNldEdvaW5nVXAiLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudFNjcm9sbFkiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFwVG9Ub3AiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwidG9wIiwiZGVmYXVsdCIsIlJlYWN0UGl4ZWwiLCJpbml0IiwiYXV0b0NvbmZpZyIsImRlYnVnIiwicGFnZVZpZXciLCJ0cmFjayIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ3JhcGhxbCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap-scss/bootstrap.scss":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-scss/bootstrap.scss ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/scss/color-1.scss":
/*!*****************************************!*\
  !*** ./public/assets/scss/color-1.scss ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/scss/flaticon.scss":
/*!******************************************!*\
  !*** ./public/assets/scss/flaticon.scss ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/scss/font-awesome.scss":
/*!**********************************************!*\
  !*** ./public/assets/scss/font-awesome.scss ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/scss/slick-theme.scss":
/*!*********************************************!*\
  !*** ./public/assets/scss/slick-theme.scss ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/scss/slick.scss":
/*!***************************************!*\
  !*** ./public/assets/scss/slick.scss ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./public/assets/scss/themify.scss":
/*!*****************************************!*\
  !*** ./public/assets/scss/themify.scss ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-facebook-pixel":
/*!***************************************!*\
  !*** external "react-facebook-pixel" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-facebook-pixel");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();