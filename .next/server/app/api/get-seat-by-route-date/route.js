"use strict";
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
exports.id = "app/api/get-seat-by-route-date/route";
exports.ids = ["app/api/get-seat-by-route-date/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-seat-by-route-date%2Froute&page=%2Fapi%2Fget-seat-by-route-date%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-seat-by-route-date%2Froute.js&appDir=%2Fhome%2Fdilip%2FDesktop%2Fwinger%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdilip%2FDesktop%2Fwinger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-seat-by-route-date%2Froute&page=%2Fapi%2Fget-seat-by-route-date%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-seat-by-route-date%2Froute.js&appDir=%2Fhome%2Fdilip%2FDesktop%2Fwinger%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdilip%2FDesktop%2Fwinger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_dilip_Desktop_winger_src_app_api_get_seat_by_route_date_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/get-seat-by-route-date/route.js */ \"(rsc)/./src/app/api/get-seat-by-route-date/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/get-seat-by-route-date/route\",\n        pathname: \"/api/get-seat-by-route-date\",\n        filename: \"route\",\n        bundlePath: \"app/api/get-seat-by-route-date/route\"\n    },\n    resolvedPagePath: \"/home/dilip/Desktop/winger/src/app/api/get-seat-by-route-date/route.js\",\n    nextConfigOutput,\n    userland: _home_dilip_Desktop_winger_src_app_api_get_seat_by_route_date_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/get-seat-by-route-date/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZXQtc2VhdC1ieS1yb3V0ZS1kYXRlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZnZXQtc2VhdC1ieS1yb3V0ZS1kYXRlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2V0LXNlYXQtYnktcm91dGUtZGF0ZSUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGZGlsaXAlMkZEZXNrdG9wJTJGd2luZ2VyJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGZGlsaXAlMkZEZXNrdG9wJTJGd2luZ2VyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNzQjtBQUNuRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbmdlci8/MmMzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9kaWxpcC9EZXNrdG9wL3dpbmdlci9zcmMvYXBwL2FwaS9nZXQtc2VhdC1ieS1yb3V0ZS1kYXRlL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZXQtc2VhdC1ieS1yb3V0ZS1kYXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2V0LXNlYXQtYnktcm91dGUtZGF0ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2V0LXNlYXQtYnktcm91dGUtZGF0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2RpbGlwL0Rlc2t0b3Avd2luZ2VyL3NyYy9hcHAvYXBpL2dldC1zZWF0LWJ5LXJvdXRlLWRhdGUvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2dldC1zZWF0LWJ5LXJvdXRlLWRhdGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-seat-by-route-date%2Froute&page=%2Fapi%2Fget-seat-by-route-date%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-seat-by-route-date%2Froute.js&appDir=%2Fhome%2Fdilip%2FDesktop%2Fwinger%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdilip%2FDesktop%2Fwinger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/get-seat-by-route-date/route.js":
/*!*****************************************************!*\
  !*** ./src/app/api/get-seat-by-route-date/route.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _models_lkbToitn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/lkbToitn.js */ \"(rsc)/./src/app/models/lkbToitn.js\");\n/* harmony import */ var _database_db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/db.js */ \"(rsc)/./src/app/database/db.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(req) {\n    try {\n        // Connect to the database\n        await (0,_database_db_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        // Parse the JSON body from the request\n        const { route, date } = await req.json();\n        // Convert the date string into a Date object for querying MongoDB\n        const queryDate = new Date(date);\n        // Fetch seat details based on route and date\n        let seatDetails;\n        if (route === \"LikabaliToItanagar\") {\n            seatDetails = await _models_lkbToitn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n                date: queryDate\n            }); // Match date using the Date object\n        } else if (route === \"ItanagarToLikabali\") {\n            seatDetails = await _models_lkbToitn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n                date: queryDate\n            });\n        }\n        // If no seat details are found\n        if (!seatDetails || seatDetails.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"No reservation is made, so pick your best seat\"\n            }, {\n                status: 200\n            } // 200 OK status with custom message\n            );\n        }\n        // Return seat details in the response if they exist\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(seatDetails, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching seat details:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"Failed to fetch seat details\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXQtc2VhdC1ieS1yb3V0ZS1kYXRlL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFMEQ7QUFDYjtBQUNGO0FBRXBDLGVBQWVHLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLDBCQUEwQjtRQUMxQixNQUFNSCwyREFBU0E7UUFFZix1Q0FBdUM7UUFDdkMsTUFBTSxFQUFFSSxLQUFLLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFFdEMsa0VBQWtFO1FBQ2xFLE1BQU1DLFlBQVksSUFBSUMsS0FBS0g7UUFFM0IsNkNBQTZDO1FBQzdDLElBQUlJO1FBQ0osSUFBSUwsVUFBVSxzQkFBc0I7WUFDbENLLGNBQWMsTUFBTVYsMkRBQWtCQSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVMLE1BQU1FO1lBQVUsSUFBSyxtQ0FBbUM7UUFDeEcsT0FBTyxJQUFJSCxVQUFVLHNCQUFzQjtZQUN6Q0ssY0FBYyxNQUFNViwyREFBa0JBLENBQUNXLElBQUksQ0FBQztnQkFBRUwsTUFBTUU7WUFBVTtRQUNoRTtRQUVBLCtCQUErQjtRQUMvQixJQUFJLENBQUNFLGVBQWVBLFlBQVlFLE1BQU0sS0FBSyxHQUFHO1lBQzVDLE9BQU9WLHFEQUFZQSxDQUFDSyxJQUFJLENBQ3RCO2dCQUFFTSxTQUFTO1lBQWlELEdBQzVEO2dCQUFFQyxRQUFRO1lBQUksRUFBRyxvQ0FBb0M7O1FBRXpEO1FBRUEsb0RBQW9EO1FBQ3BELE9BQU9aLHFEQUFZQSxDQUFDSyxJQUFJLENBQUNHLGFBQWE7WUFBRUksUUFBUTtRQUFJO0lBRXRELEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxPQUFPYixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVNLFNBQVM7UUFBK0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdEY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbmdlci8uL3NyYy9hcHAvYXBpL2dldC1zZWF0LWJ5LXJvdXRlLWRhdGUvcm91dGUuanM/MzhmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IExpa2FiYWxpVG9JdGFuYWdhciBmcm9tIFwiLi4vLi4vbW9kZWxzL2xrYlRvaXRuLmpzXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9kYi5qc1wiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgdHJ5IHtcbiAgICAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuXG4gICAgLy8gUGFyc2UgdGhlIEpTT04gYm9keSBmcm9tIHRoZSByZXF1ZXN0XG4gICAgY29uc3QgeyByb3V0ZSwgZGF0ZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIC8vIENvbnZlcnQgdGhlIGRhdGUgc3RyaW5nIGludG8gYSBEYXRlIG9iamVjdCBmb3IgcXVlcnlpbmcgTW9uZ29EQlxuICAgIGNvbnN0IHF1ZXJ5RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXG4gICAgLy8gRmV0Y2ggc2VhdCBkZXRhaWxzIGJhc2VkIG9uIHJvdXRlIGFuZCBkYXRlXG4gICAgbGV0IHNlYXREZXRhaWxzO1xuICAgIGlmIChyb3V0ZSA9PT0gXCJMaWthYmFsaVRvSXRhbmFnYXJcIikge1xuICAgICAgc2VhdERldGFpbHMgPSBhd2FpdCBMaWthYmFsaVRvSXRhbmFnYXIuZmluZCh7IGRhdGU6IHF1ZXJ5RGF0ZSB9KTsgIC8vIE1hdGNoIGRhdGUgdXNpbmcgdGhlIERhdGUgb2JqZWN0XG4gICAgfSBlbHNlIGlmIChyb3V0ZSA9PT0gXCJJdGFuYWdhclRvTGlrYWJhbGlcIikge1xuICAgICAgc2VhdERldGFpbHMgPSBhd2FpdCBMaWthYmFsaVRvSXRhbmFnYXIuZmluZCh7IGRhdGU6IHF1ZXJ5RGF0ZSB9KTtcbiAgICB9XG5cbiAgICAvLyBJZiBubyBzZWF0IGRldGFpbHMgYXJlIGZvdW5kXG4gICAgaWYgKCFzZWF0RGV0YWlscyB8fCBzZWF0RGV0YWlscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBtZXNzYWdlOiBcIk5vIHJlc2VydmF0aW9uIGlzIG1hZGUsIHNvIHBpY2sgeW91ciBiZXN0IHNlYXRcIiB9LFxuICAgICAgICB7IHN0YXR1czogMjAwIH0gIC8vIDIwMCBPSyBzdGF0dXMgd2l0aCBjdXN0b20gbWVzc2FnZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gc2VhdCBkZXRhaWxzIGluIHRoZSByZXNwb25zZSBpZiB0aGV5IGV4aXN0XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHNlYXREZXRhaWxzLCB7IHN0YXR1czogMjAwIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNlYXQgZGV0YWlsczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGZldGNoIHNlYXQgZGV0YWlsc1wiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaWthYmFsaVRvSXRhbmFnYXIiLCJkYkNvbm5lY3QiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwicm91dGUiLCJkYXRlIiwianNvbiIsInF1ZXJ5RGF0ZSIsIkRhdGUiLCJzZWF0RGV0YWlscyIsImZpbmQiLCJsZW5ndGgiLCJtZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/get-seat-by-route-date/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/database/db.js":
/*!********************************!*\
  !*** ./src/app/database/db.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dbConnect = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState >= 1) return;\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {}).then(()=>console.log(\"MongoDB connected\")).catch((err)=>console.error(\"MongoDB connection error:\", err));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2RhdGFiYXNlL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZO0lBQ2hCLElBQUlELDREQUFtQixDQUFDRyxVQUFVLElBQUksR0FBRztJQUV6Q0gsdURBQWdCLENBQUNLLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFLENBRTFDLEdBQUdDLElBQUksQ0FBQyxJQUFNQyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCQyxLQUFLLENBQUNDLENBQUFBLE1BQU9ILFFBQVFJLEtBQUssQ0FBQyw2QkFBNkJEO0FBQzFHO0FBRUEsaUVBQWVYLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aW5nZXIvLi9zcmMvYXBwL2RhdGFiYXNlL2RiLmpzPzU4NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgZGJDb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID49IDEpIHJldHVybjtcblxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XG4gICBcbiAgfSkudGhlbigoKSA9PiBjb25zb2xlLmxvZygnTW9uZ29EQiBjb25uZWN0ZWQnKSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnIpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRiQ29ubmVjdCIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/database/db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/lkbToitn.js":
/*!************************************!*\
  !*** ./src/app/models/lkbToitn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst likabaliToItanagarSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userEmail: {\n        type: String\n    },\n    seatNumber: {\n        type: Number,\n        required: true\n    },\n    date: {\n        type: Date\n    },\n    testField: {\n        type: String\n    },\n    notes: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: Number,\n        required: true\n    },\n    fullName: {\n        type: String\n    }\n}, {\n    timestamps: true // Automatically adds createdAt and updatedAt fields\n});\nconst LikabaliToItanagar = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).LikabaliToItanagar || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"LikabaliToItanagar\", likabaliToItanagarSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikabaliToItanagar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9sa2JUb2l0bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHZ0M7QUFFaEMsTUFBTUMsMkJBQTJCLElBQUlELHdEQUFlLENBQUM7SUFDbkRHLFdBQVc7UUFBR0MsTUFBTUM7SUFBTztJQUMzQkMsWUFBWTtRQUFHRixNQUFNRztRQUFRQyxVQUFVO0lBQUs7SUFDNUNDLE1BQU07UUFBRUwsTUFBTU07SUFBSTtJQUNsQkMsV0FBVztRQUFDUCxNQUFNQztJQUFNO0lBQ3hCTyxPQUFNO1FBQUNSLE1BQUtDO1FBQU9HLFVBQVM7SUFBSTtJQUNoQ0ssT0FBTTtRQUFDVCxNQUFLRztRQUFRQyxVQUFVO0lBQUk7SUFDbENNLFVBQVU7UUFBQ1YsTUFBS0M7SUFBTTtBQUd4QixHQUVBO0lBQ0VVLFlBQVksS0FBSyxvREFBb0Q7QUFDdkU7QUFFQSxNQUFNQyxxQkFBcUJoQix3REFBZSxDQUFDZ0Isa0JBQWtCLElBQUloQixxREFBYyxDQUFDLHNCQUFzQkM7QUFFdEcsaUVBQWVlLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpbmdlci8uL3NyYy9hcHAvbW9kZWxzL2xrYlRvaXRuLmpzP2QzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgbGlrYWJhbGlUb0l0YW5hZ2FyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVzZXJFbWFpbDogeyAgdHlwZTogU3RyaW5nLH0sXG4gIHNlYXROdW1iZXI6IHsgIHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgZGF0ZTogeyB0eXBlOiBEYXRlfSxcbiAgdGVzdEZpZWxkOiB7dHlwZTogU3RyaW5nfSxcbiAgbm90ZXM6e3R5cGU6U3RyaW5nLHJlcXVpcmVkOnRydWV9LFxuICBwaG9uZTp7dHlwZTpOdW1iZXIsIHJlcXVpcmVkOiB0cnVlfSxcbiAgZnVsbE5hbWUgOnt0eXBlOlN0cmluZ31cblxuXG59LFxuXG57XG4gIHRpbWVzdGFtcHM6IHRydWUgLy8gQXV0b21hdGljYWxseSBhZGRzIGNyZWF0ZWRBdCBhbmQgdXBkYXRlZEF0IGZpZWxkc1xufSk7XG5cbmNvbnN0IExpa2FiYWxpVG9JdGFuYWdhciA9IG1vbmdvb3NlLm1vZGVscy5MaWthYmFsaVRvSXRhbmFnYXIgfHwgbW9uZ29vc2UubW9kZWwoJ0xpa2FiYWxpVG9JdGFuYWdhcicsIGxpa2FiYWxpVG9JdGFuYWdhclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IExpa2FiYWxpVG9JdGFuYWdhcjtcblxuXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJsaWthYmFsaVRvSXRhbmFnYXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VyRW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwic2VhdE51bWJlciIsIk51bWJlciIsInJlcXVpcmVkIiwiZGF0ZSIsIkRhdGUiLCJ0ZXN0RmllbGQiLCJub3RlcyIsInBob25lIiwiZnVsbE5hbWUiLCJ0aW1lc3RhbXBzIiwiTGlrYWJhbGlUb0l0YW5hZ2FyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/lkbToitn.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-seat-by-route-date%2Froute&page=%2Fapi%2Fget-seat-by-route-date%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-seat-by-route-date%2Froute.js&appDir=%2Fhome%2Fdilip%2FDesktop%2Fwinger%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdilip%2FDesktop%2Fwinger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();