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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

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

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5Cnew_proj%5CSmart-Hub-Control-System%5Cauth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cnew_proj%5CSmart-Hub-Control-System%5Cauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5Cnew_proj%5CSmart-Hub-Control-System%5Cauth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cnew_proj%5CSmart-Hub-Control-System%5Cauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_new_proj_Smart_Hub_Control_System_auth_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"E:\\\\new_proj\\\\Smart-Hub-Control-System\\\\auth\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_new_proj_Smart_Hub_Control_System_auth_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjEzX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZS50cyZhcHBEaXI9RSUzQSU1Q25ld19wcm9qJTVDU21hcnQtSHViLUNvbnRyb2wtU3lzdGVtJTVDYXV0aCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RSUzQSU1Q25ld19wcm9qJTVDU21hcnQtSHViLUNvbnRyb2wtU3lzdGVtJTVDYXV0aCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMEM7QUFDdkg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLz9iZmM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXG5ld19wcm9qXFxcXFNtYXJ0LUh1Yi1Db250cm9sLVN5c3RlbVxcXFxhdXRoXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxuZXdfcHJvalxcXFxTbWFydC1IdWItQ29udHJvbC1TeXN0ZW1cXFxcYXV0aFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5Cnew_proj%5CSmart-Hub-Control-System%5Cauth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cnew_proj%5CSmart-Hub-Control-System%5Cauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDRztBQUV0RCxNQUFNRSxVQUFVRCxnREFBUUEsQ0FBQ0Qsa0RBQVdBO0FBRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2F1dGhcIjtcclxuaW1wb3J0IE5leHRBdXRoLCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCJcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiYXV0aE9wdGlvbnMiLCJOZXh0QXV0aCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/.pnpm/next-auth@4.24.7_next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Create a Postgres pool connection\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_2__.Pool({\n    connectionString: process.env.DATABASE_URL\n});\nconst authOptions = {\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: process.env.JWT_SECRET\n    },\n    pages: {\n        signIn: \"/sign-in\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"johndoe@gmail.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                try {\n                    // Query to find the user by email\n                    const { rows } = await pool.query('SELECT * FROM \"users\" WHERE email = $1', [\n                        credentials.email\n                    ]);\n                    const existingUser = rows[0];\n                    if (!existingUser) {\n                        return null;\n                    }\n                    // Compare passwords\n                    const passwordMatch = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.compare)(credentials.password, existingUser.password);\n                    if (!passwordMatch) {\n                        return null;\n                    }\n                    // Return user object with custom data if needed\n                    return {\n                        id: existingUser.id.toString(),\n                        username: existingUser.username,\n                        email: existingUser.email\n                    };\n                } catch (error) {\n                    console.error(\"Error during authentication:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                console.log(\"JWT Callback User:\", user);\n                return {\n                    ...token,\n                    id: user.id,\n                    username: user.username,\n                    email: user.email\n                };\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            console.log(\"Session Callback Token:\", token);\n            return {\n                ...session,\n                user: {\n                    ...session.user,\n                    id: token.id,\n                    username: token.username,\n                    email: token.email\n                }\n            };\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2tFO0FBQ2pDO0FBQ1A7QUFFMUIsb0NBQW9DO0FBQ3BDLE1BQU1HLE9BQU8sSUFBSUQsb0NBQUlBLENBQUM7SUFDcEJFLGtCQUFrQkMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0FBQzVDO0FBRU8sTUFBTUMsY0FBK0I7SUFDMUNDLFFBQVFKLFFBQVFDLEdBQUcsQ0FBQ0ksZUFBZTtJQUNuQ0MsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsS0FBSztRQUNISixRQUFRSixRQUFRQyxHQUFHLENBQUNRLFVBQVU7SUFDaEM7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsV0FBVztRQUNUakIsMkVBQW1CQSxDQUFDO1lBQ2xCa0IsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO29CQUFTQyxhQUFhO2dCQUFvQjtnQkFDekVDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUssVUFBVTtvQkFDakQsT0FBTztnQkFDVDtnQkFFQSxJQUFJO29CQUNGLGtDQUFrQztvQkFDbEMsTUFBTSxFQUFFRSxJQUFJLEVBQUUsR0FBRyxNQUFNdkIsS0FBS3dCLEtBQUssQ0FDL0IsMENBQ0E7d0JBQUNSLFlBQVlDLEtBQUs7cUJBQUM7b0JBRXJCLE1BQU1RLGVBQWVGLElBQUksQ0FBQyxFQUFFO29CQUU1QixJQUFJLENBQUNFLGNBQWM7d0JBQ2pCLE9BQU87b0JBQ1Q7b0JBRUEsb0JBQW9CO29CQUNwQixNQUFNQyxnQkFBZ0IsTUFBTTVCLCtDQUFPQSxDQUFDa0IsWUFBWUssUUFBUSxFQUFFSSxhQUFhSixRQUFRO29CQUUvRSxJQUFJLENBQUNLLGVBQWU7d0JBQ2xCLE9BQU87b0JBQ1Q7b0JBRUEsZ0RBQWdEO29CQUNoRCxPQUFPO3dCQUNMQyxJQUFJRixhQUFhRSxFQUFFLENBQUNDLFFBQVE7d0JBQzVCQyxVQUFVSixhQUFhSSxRQUFRO3dCQUMvQlosT0FBT1EsYUFBYVIsS0FBSztvQkFFM0I7Z0JBQ0YsRUFBRSxPQUFPYSxPQUFPO29CQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtvQkFDOUMsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7S0FDRDtJQUNERSxXQUFXO1FBQ1QsTUFBTXRCLEtBQUksRUFBRXVCLEtBQUssRUFBRUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JILFFBQVFJLEdBQUcsQ0FBQyxzQkFBc0JEO2dCQUNsQyxPQUFPO29CQUNMLEdBQUdELEtBQUs7b0JBQ1JOLElBQUlPLEtBQUtQLEVBQUU7b0JBQ1hFLFVBQVVLLEtBQUtMLFFBQVE7b0JBQ3ZCWixPQUFPaUIsS0FBS2pCLEtBQUs7Z0JBRW5CO1lBQ0Y7WUFDQSxPQUFPZ0I7UUFDVDtRQUNBLE1BQU16QixTQUFRLEVBQUVBLE9BQU8sRUFBRXlCLEtBQUssRUFBRTtZQUM5QkYsUUFBUUksR0FBRyxDQUFDLDJCQUEyQkY7WUFDdkMsT0FBTztnQkFDTCxHQUFHekIsT0FBTztnQkFDVjBCLE1BQU07b0JBQ0osR0FBRzFCLFFBQVEwQixJQUFJO29CQUNmUCxJQUFJTSxNQUFNTixFQUFFO29CQUNaRSxVQUFVSSxNQUFNSixRQUFRO29CQUN4QlosT0FBT2dCLE1BQU1oQixLQUFLO2dCQUVwQjtZQUNGO1FBQ0Y7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdFwiO1xyXG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XHJcblxyXG4vLyBDcmVhdGUgYSBQb3N0Z3JlcyBwb29sIGNvbm5lY3Rpb25cclxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcclxuICBjb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxyXG4gIH0sXHJcbiAgand0OiB7XHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgfSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiAnL3NpZ24taW4nLFxyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiam9obmRvZUBnbWFpbC5jb21cIiB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIFF1ZXJ5IHRvIGZpbmQgdGhlIHVzZXIgYnkgZW1haWxcclxuICAgICAgICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeShcclxuICAgICAgICAgICAgJ1NFTEVDVCAqIEZST00gXCJ1c2Vyc1wiIFdIRVJFIGVtYWlsID0gJDEnLFxyXG4gICAgICAgICAgICBbY3JlZGVudGlhbHMuZW1haWxdXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gcm93c1swXTtcclxuXHJcbiAgICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBDb21wYXJlIHBhc3N3b3Jkc1xyXG4gICAgICAgICAgY29uc3QgcGFzc3dvcmRNYXRjaCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIGV4aXN0aW5nVXNlci5wYXNzd29yZCk7XHJcblxyXG4gICAgICAgICAgaWYgKCFwYXNzd29yZE1hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFJldHVybiB1c2VyIG9iamVjdCB3aXRoIGN1c3RvbSBkYXRhIGlmIG5lZWRlZFxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGV4aXN0aW5nVXNlci5pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogZXhpc3RpbmdVc2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogZXhpc3RpbmdVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAvLyBBZGQgbW9yZSBmaWVsZHMgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIGF1dGhlbnRpY2F0aW9uOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkpXVCBDYWxsYmFjayBVc2VyOlwiLCB1c2VyKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4udG9rZW4sXHJcbiAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAvLyBBZGQgbW9yZSBmaWVsZHMgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXNzaW9uIENhbGxiYWNrIFRva2VuOlwiLCB0b2tlbik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc2Vzc2lvbixcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAuLi5zZXNzaW9uLnVzZXIsXHJcbiAgICAgICAgICBpZDogdG9rZW4uaWQsXHJcbiAgICAgICAgICB1c2VybmFtZTogdG9rZW4udXNlcm5hbWUsXHJcbiAgICAgICAgICBlbWFpbDogdG9rZW4uZW1haWwsXHJcbiAgICAgICAgICAvLyBBZGQgbW9yZSBmaWVsZHMgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImNvbXBhcmUiLCJQb29sIiwicG9vbCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJqd3QiLCJKV1RfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyb3dzIiwicXVlcnkiLCJleGlzdGluZ1VzZXIiLCJwYXNzd29yZE1hdGNoIiwiaWQiLCJ0b1N0cmluZyIsInVzZXJuYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJ1c2VyIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/jose@4.15.9","vendor-chunks/next-auth@4.24.7_next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/openid-client@5.7.0","vendor-chunks/@babel+runtime@7.25.6","vendor-chunks/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/uuid@8.3.2","vendor-chunks/oauth@0.9.15","vendor-chunks/@panva+hkdf@1.2.1","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.24.1","vendor-chunks/oidc-token-hash@5.0.3","vendor-chunks/preact@10.24.1","vendor-chunks/object-hash@2.2.0","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.5.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=E%3A%5Cnew_proj%5CSmart-Hub-Control-System%5Cauth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cnew_proj%5CSmart-Hub-Control-System%5Cauth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();