"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/pages/header/index.js":
/*!***********************************!*\
  !*** ./src/pages/header/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.module.css */ \"(app-pages-browser)/./src/pages/header/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"(app-pages-browser)/./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // State to control the menu visibility\n    const toggleMenu = ()=>{\n        setMenuOpen(!menuOpen); // Toggle the menu state\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().navBar),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Karko \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Tours and Travels\"\n                            }, void 0, false, {\n                                fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"fa-solid fa-bars \".concat((_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().menuIcon)),\n                    onClick: toggleMenu\n                }, void 0, false, {\n                    fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"\".concat((_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav), \" \").concat(menuOpen ? (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().active) : \"\"),\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_header_module_css__WEBPACK_IMPORTED_MODULE_2___default().navList),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/\",\n                                        children: \"HOME\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#service\",\n                                        children: \"SERVICE\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#about\",\n                                        children: \"ABOUT\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#contact\",\n                                        children: \"CONTACT US\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        children: \"+91-8877XXXXXX\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"userIcon\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"/login\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-user\"\n                        }, void 0, false, {\n                            fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/dilip/Desktop/winger/src/pages/header/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"K77eQVFAaxZgbvGoNWFAiCE7OTY=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdlcy9oZWFkZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUNDO0FBQ2M7QUFDMUI7QUFFN0IsTUFBTUksU0FBUzs7SUFDYixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsUUFBUSx1Q0FBdUM7SUFFeEYsTUFBTU0sYUFBYTtRQUNqQkQsWUFBWSxDQUFDRCxXQUFXLHdCQUF3QjtJQUNsRDtJQUVBLHFCQUNFLDhEQUFDRztRQUFPQyxXQUFXUCxrRUFBYTtrQkFDOUIsNEVBQUNRO1lBQUlELFdBQVdQLGtFQUFhOzs4QkFDM0IsOERBQUNRO29CQUFJRCxXQUFXUCxnRUFBVzs4QkFDekIsNEVBQUNXOzs0QkFBRzswQ0FBTSw4REFBQ0M7MENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdsQiw4REFBQ0M7b0JBQ0NOLFdBQVcsb0JBQW9DLE9BQWhCUCxvRUFBZTtvQkFDOUNlLFNBQVNWOzs7Ozs7OEJBR1gsOERBQUNXO29CQUFJVCxXQUFXLEdBQWlCSixPQUFkSCwrREFBVSxFQUFDLEtBQWlDLE9BQTlCRyxXQUFXSCxrRUFBYSxHQUFHOzt3QkFBTTtzQ0FDaEUsOERBQUNrQjs0QkFBR1gsV0FBV1AsbUVBQWM7OzhDQUMzQiw4REFBQ29COzhDQUFHLDRFQUFDQzt3Q0FBRUMsTUFBSztrREFBSTs7Ozs7Ozs7Ozs7OENBQ2hCLDhEQUFDRjs4Q0FBRyw0RUFBQ0M7d0NBQUVDLE1BQUs7a0RBQVc7Ozs7Ozs7Ozs7OzhDQUN2Qiw4REFBQ0Y7OENBQUcsNEVBQUNDO3dDQUFFQyxNQUFLO2tEQUFTOzs7Ozs7Ozs7Ozs4Q0FDckIsOERBQUNGOzhDQUFHLDRFQUFDQzt3Q0FBRUMsTUFBSztrREFBVzs7Ozs7Ozs7Ozs7OENBQ3ZCLDhEQUFDRjs4Q0FBRyw0RUFBQ0M7d0NBQUVDLE1BQUs7a0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUlwQiw4REFBQ2Q7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNOLGlEQUFJQTt3QkFBQ3FCLE1BQUs7a0NBQ1QsNEVBQUNUOzRCQUFFTixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekI7R0FyQ01MO0tBQUFBO0FBdUNOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9oZWFkZXIvaW5kZXguanM/YjUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5jc3MnO1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU3RhdGUgdG8gY29udHJvbCB0aGUgbWVudSB2aXNpYmlsaXR5XG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBzZXRNZW51T3BlbighbWVudU9wZW4pOyAvLyBUb2dnbGUgdGhlIG1lbnUgc3RhdGVcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2QmFyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICA8aDE+S2Fya28gPHNwYW4+VG91cnMgYW5kIFRyYXZlbHM8L3NwYW4+PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8aSBcbiAgICAgICAgICBjbGFzc05hbWU9e2BmYS1zb2xpZCBmYS1iYXJzICR7c3R5bGVzLm1lbnVJY29ufWB9IFxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IC8vIFRvZ2dsZSBtZW51IHdoZW4gaWNvbiBpcyBjbGlja2VkXG4gICAgICAgID48L2k+XG5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZ9ICR7bWVudU9wZW4gPyBzdHlsZXMuYWN0aXZlIDogJyd9YH0+IHsvKiBBZGQgJ2FjdGl2ZScgY2xhc3MgaWYgbWVudU9wZW4gaXMgdHJ1ZSAqL31cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlzdH0+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIj5IT01FPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNzZXJ2aWNlXCI+U0VSVklDRTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjYWJvdXRcIj5BQk9VVDwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjY29udGFjdFwiPkNPTlRBQ1QgVVM8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPis5MS04ODc3WFhYWFhYPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VySWNvblwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9sb2dpbic+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS11c2VyXCI+PC9pPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTGluayIsIkhlYWRlciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ0b2dnbGVNZW51IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwibmF2QmFyIiwibG9nbyIsImgxIiwic3BhbiIsImkiLCJtZW51SWNvbiIsIm9uQ2xpY2siLCJuYXYiLCJhY3RpdmUiLCJ1bCIsIm5hdkxpc3QiLCJsaSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pages/header/index.js\n"));

/***/ })

});