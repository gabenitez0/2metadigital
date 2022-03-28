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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-scss */ \"./node_modules/bootstrap-scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/scss/flaticon.scss */ \"./public/assets/scss/flaticon.scss\");\n/* harmony import */ var _public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_flaticon_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/scss/font-awesome.scss */ \"./public/assets/scss/font-awesome.scss\");\n/* harmony import */ var _public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_font_awesome_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/scss/color-1.scss */ \"./public/assets/scss/color-1.scss\");\n/* harmony import */ var _public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_color_1_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/scss/themify.scss */ \"./public/assets/scss/themify.scss\");\n/* harmony import */ var _public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_themify_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/scss/slick.scss */ \"./public/assets/scss/slick.scss\");\n/* harmony import */ var _public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/scss/slick-theme.scss */ \"./public/assets/scss/slick-theme.scss\");\n/* harmony import */ var _public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n//import Customizer from '../containers/customizer';\nconst { publicRuntimeConfig ={}  } = next_config__WEBPACK_IMPORTED_MODULE_4___default()() || {};\nnprogress__WEBPACK_IMPORTED_MODULE_3___default().configure({\n    showSpinner: publicRuntimeConfig.NProgressShowSpinner\n});\n(next_router__WEBPACK_IMPORTED_MODULE_2___default().onRouteChangeStart) = ()=>{\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();\n};\n(next_router__WEBPACK_IMPORTED_MODULE_2___default().onRouteChangeComplete) = ()=>{\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();\n};\n(next_router__WEBPACK_IMPORTED_MODULE_2___default().onRouteChangeError) = ()=>{\n    nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();\n};\nfunction MyFunctionComponent({ children  }) {\n    const { 0: loader , 1: setLoader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: goingUp , 1: setGoingUp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Page Loader\n        setTimeout(()=>{\n            setLoader(false);\n        }, 500);\n        // Tap to Top Scroll \n        const handleScroll = ()=>{\n            const currentScrollY = window.scrollY;\n            if (currentScrollY > 500) setGoingUp(true);\n            else setGoingUp(false);\n        };\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>window.removeEventListener(\"scroll\", handleScroll)\n        ;\n    }, [\n        goingUp\n    ]);\n    const tapToTop = ()=>{\n        window.scrollTo({\n            behavior: \"smooth\",\n            top: 0\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{\n        const { default: ReactPixel  } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-facebook-pixel */ \"react-facebook-pixel\", 23));\n        ReactPixel.init(1038198026550249, null, {\n            autoConfig: true,\n            debug: true\n        });\n        ReactPixel.pageView();\n        ReactPixel.track(\"ViewContent\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true);\n}\nfunction MyApp({ Component , pageProps , graphql  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyFunctionComponent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}, void 0, false, {\n                fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\backup2\\\\web\\\\2metadigital\\\\unice\\\\pages\\\\_app.js\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEI7QUFDQztBQUNFO0FBQ1k7QUFFeEI7QUFDcUI7QUFDSTtBQUNMO0FBQ0E7QUFDRjtBQUNNO0FBQy9DLEVBQW9EO0FBR3BELEtBQUssQ0FBQyxDQUFDLENBQUNPLG1CQUFtQixFQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBR0Ysa0RBQVMsTUFBTSxDQUFDLENBQUM7QUFFdERELDBEQUFtQixDQUFDLENBQUM7SUFBQ0ssV0FBVyxFQUFFRixtQkFBbUIsQ0FBQ0csb0JBQW9CO0FBQUMsQ0FBQyxDQUFDLENBQUM7QUFFL0VQLHVFQUF5QixPQUFTLENBQUM7SUFDakNDLHNEQUFlLEVBQUUsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRkQsMEVBQTRCLE9BQVMsQ0FBQztJQUNwQ0MscURBQWMsRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGRCx1RUFBeUIsT0FBUyxDQUFDO0lBQ2pDQyxxREFBYyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDO1NBRU9ZLG1CQUFtQixDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzFDLEtBQUssTUFBRUMsTUFBTSxNQUFFQyxTQUFTLE1BQUlsQiwrQ0FBUSxDQUFDLElBQUk7SUFDekMsS0FBSyxNQUFFbUIsT0FBTyxNQUFFQyxVQUFVLE1BQUlwQiwrQ0FBUSxDQUFDLEtBQUs7SUFFNUNDLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQWM7UUFDZG9CLFVBQVUsS0FBTyxDQUFDO1lBQ2hCSCxTQUFTLENBQUMsS0FBSztRQUNqQixDQUFDLEVBQUUsR0FBRztRQUVOLEVBQXFCO1FBQ3JCLEtBQUssQ0FBQ0ksWUFBWSxPQUFTLENBQUM7WUFDMUIsS0FBSyxDQUFDQyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBTztZQUNyQyxFQUFFLEVBQUVGLGNBQWMsR0FBRyxHQUFHLEVBQ3RCSCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBRWpCQSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNESSxNQUFNLENBQUNFLGdCQUFnQixDQUFDLENBQVEsU0FBRUosWUFBWSxFQUFFLENBQUM7WUFBQ0ssT0FBTyxFQUFFLElBQUk7UUFBQyxDQUFDLENBQUMsQ0FBQztRQUVuRSxNQUFNLEtBQU9ILE1BQU0sQ0FBQ0ksbUJBQW1CLENBQUMsQ0FBUSxTQUFFTixZQUFZOztJQUNoRSxDQUFDLEVBQUUsQ0FBQ0g7UUFBQUEsT0FBTztJQUFBLENBQUMsQ0FBQyxDQUFDO0lBRWQsS0FBSyxDQUFDVSxRQUFRLE9BQVMsQ0FBQztRQUN0QkwsTUFBTSxDQUFDTSxRQUFRLENBQUMsQ0FBQztZQUNmQyxRQUFRLEVBQUUsQ0FBUTtZQUNsQkMsR0FBRyxFQUFFLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRC9CLGdEQUFTLFdBQWEsQ0FBQztRQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDZ0MsT0FBTyxFQUFFQyxVQUFVLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyw4SUFBNkI7UUFDbkVBLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3JDQyxVQUFVLEVBQUUsSUFBSTtZQUNoQkMsS0FBSyxFQUFFLElBQUk7UUFDYixDQUFDLENBQUMsQ0FBQztRQUNMSCxVQUFVLENBQUNJLFFBQVEsRUFBRSxDQUFDO1FBQ3RCSixVQUFVLENBQUNLLEtBQUssQ0FBQyxDQUFhO0lBQ2hDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRVAsTUFBTTs7WUFDRixDQUFDO1lBQUN2QixRQUFROzs7O0FBa0JoQixDQUFDO0FBRWMsUUFBUSxDQUFDd0IsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEdBQUVDLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNoRSxNQUFNLDZFQUNIQyxDQUFHOzt3RkFDRDdCLG1CQUFtQjtzR0FDakIwQixTQUFTO3VCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozt3RkFHekJyQywwREFBYzs7Ozs7Ozs7Ozs7QUFHckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaWNlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCAnYm9vdHN0cmFwLXNjc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL3Njc3MvZmxhdGljb24uc2Nzcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvc2Nzcy9mb250LWF3ZXNvbWUuc2Nzcyc7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL3Njc3MvY29sb3ItMS5zY3NzXCJcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zY3NzL3RoZW1pZnkuc2Nzcyc7XG5pbXBvcnQgXCIuLi9wdWJsaWMvYXNzZXRzL3Njc3Mvc2xpY2suc2Nzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Fzc2V0cy9zY3NzL3NsaWNrLXRoZW1lLnNjc3NcIjtcbi8vaW1wb3J0IEN1c3RvbWl6ZXIgZnJvbSAnLi4vY29udGFpbmVycy9jdXN0b21pemVyJztcblxuXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgPSB7fSB9ID0gZ2V0Q29uZmlnKCkgfHwge307XG5cbk5Qcm9ncmVzcy5jb25maWd1cmUoeyBzaG93U3Bpbm5lcjogcHVibGljUnVudGltZUNvbmZpZy5OUHJvZ3Jlc3NTaG93U3Bpbm5lciB9KTtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IHtcbiAgTlByb2dyZXNzLnN0YXJ0KCk7XG59O1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4ge1xuICBOUHJvZ3Jlc3MuZG9uZSgpO1xufTtcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IHtcbiAgTlByb2dyZXNzLmRvbmUoKTtcbn07XG5cbmZ1bmN0aW9uIE15RnVuY3Rpb25Db21wb25lbnQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbZ29pbmdVcCwgc2V0R29pbmdVcF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBhZ2UgTG9hZGVyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpXG4gICAgfSwgNTAwKVxuXG4gICAgLy8gVGFwIHRvIFRvcCBTY3JvbGwgXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGlmIChjdXJyZW50U2Nyb2xsWSA+IDUwMClcbiAgICAgICAgc2V0R29pbmdVcCh0cnVlKTtcbiAgICAgIGVsc2VcbiAgICAgICAgc2V0R29pbmdVcChmYWxzZSk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbZ29pbmdVcF0pO1xuXG4gIGNvbnN0IHRhcFRvVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIHRvcDogMFxuICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IFJlYWN0UGl4ZWwgfSA9IGF3YWl0IGltcG9ydCgncmVhY3QtZmFjZWJvb2stcGl4ZWwnKTtcbiAgICBSZWFjdFBpeGVsLmluaXQoMTAzODE5ODAyNjU1MDI0OSwgbnVsbCwge1xuICAgICAgICBhdXRvQ29uZmlnOiB0cnVlLFxuICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIFJlYWN0UGl4ZWwucGFnZVZpZXcoKTtcbiAgICBSZWFjdFBpeGVsLnRyYWNrKFwiVmlld0NvbnRlbnRcIilcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD4ge2NoaWxkcmVufVxuICAgICAgey8qbG9hZGVyICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+Ki99XG4gICAgICA8PjwvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGdyYXBocWwgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TXlGdW5jdGlvbkNvbXBvbmVudD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICBcbiAgICAgIDwvTXlGdW5jdGlvbkNvbXBvbmVudD5cbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJnZXRDb25maWciLCJUb2FzdENvbnRhaW5lciIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjb25maWd1cmUiLCJzaG93U3Bpbm5lciIsIk5Qcm9ncmVzc1Nob3dTcGlubmVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0Iiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiTXlGdW5jdGlvbkNvbXBvbmVudCIsImNoaWxkcmVuIiwibG9hZGVyIiwic2V0TG9hZGVyIiwiZ29pbmdVcCIsInNldEdvaW5nVXAiLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudFNjcm9sbFkiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFwVG9Ub3AiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwidG9wIiwiZGVmYXVsdCIsIlJlYWN0UGl4ZWwiLCJpbml0IiwiYXV0b0NvbmZpZyIsImRlYnVnIiwicGFnZVZpZXciLCJ0cmFjayIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ3JhcGhxbCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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