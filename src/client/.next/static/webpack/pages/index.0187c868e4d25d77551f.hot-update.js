webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Shaker.js":
/*!******************************!*\
  !*** ./components/Shaker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_cocktailsvg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/cocktailsvg.js */ "./svg/cocktailsvg.js");
/* harmony import */ var _svg_cocktailnotfoundsvg_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/cocktailnotfoundsvg.js */ "./svg/cocktailnotfoundsvg.js");
/* harmony import */ var _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/shaker.module.scss */ "./styles/shaker.module.scss");
/* harmony import */ var _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-clone\\src\\client\\components\\Shaker.js",
    _this = undefined,
    _s = $RefreshSig$();






var Shaker = function Shaker() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isNotfound = _useState[0],
      setIsNotFound = _useState[1];

  var handleClickSearch = function handleClickSearch() {
    setIsNotFound(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cockailSVGContainer,
    children: [!isNotfound ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg_cocktailsvg_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cocktailSVG
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_svg_cocktailnotfoundsvg_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: _styles_shaker_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cocktailSVG
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "The Cocktail Shaker"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "You give us an ingredient, we give you a recipe for cocktail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "Put one liquor type here."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: handleClickSearch,
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(Shaker, "cNTuCJqOrHj4a81c/a5OhphVHCk=");

_c = Shaker;
/* harmony default export */ __webpack_exports__["default"] = (Shaker);

var _c;

$RefreshReg$(_c, "Shaker");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaGFrZXIuanMiXSwibmFtZXMiOlsiU2hha2VyIiwidXNlU3RhdGUiLCJpc05vdGZvdW5kIiwic2V0SXNOb3RGb3VuZCIsImhhbmRsZUNsaWNrU2VhcmNoIiwic3R5bGVkIiwiY29ja2FpbFNWR0NvbnRhaW5lciIsImNvY2t0YWlsU1ZHIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxLQUFELENBRHpCO0FBQUEsTUFDWkMsVUFEWTtBQUFBLE1BQ0FDLGFBREE7O0FBR25CLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QkQsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFRSxpRUFBTSxDQUFDQyxtQkFBdkI7QUFBQSxlQUNHLENBQUNKLFVBQUQsZ0JBQ0MscUVBQUMsMkRBQUQ7QUFBYSxlQUFTLEVBQUVHLGlFQUFNLENBQUNFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxnQkFHQyxxRUFBQyxtRUFBRDtBQUFrQixlQUFTLEVBQUVGLGlFQUFNLENBQUNFO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQU1FO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFPLG1CQUFXLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUU7QUFBUSxlQUFPLEVBQUVILGlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0F0QkQ7O0dBQU1KLE07O0tBQUFBLE07QUF3QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxODdjODY4ZTRkMjVkNzc1NTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29ja3RhaWxTVkcgZnJvbSAnLi4vc3ZnL2NvY2t0YWlsc3ZnLmpzJztcbmltcG9ydCBDb3VsZE5vdEZvdW5kU1ZHIGZyb20gJy4uL3N2Zy9jb2NrdGFpbG5vdGZvdW5kc3ZnLmpzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnLi4vc3R5bGVzL3NoYWtlci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNoYWtlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzTm90Zm91bmQsIHNldElzTm90Rm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldElzTm90Rm91bmQodHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVkLmNvY2thaWxTVkdDb250YWluZXJ9PlxuICAgICAgeyFpc05vdGZvdW5kID8gKFxuICAgICAgICA8Q29ja3RhaWxTVkcgY2xhc3NOYW1lPXtzdHlsZWQuY29ja3RhaWxTVkd9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8Q291bGROb3RGb3VuZFNWRyBjbGFzc05hbWU9e3N0eWxlZC5jb2NrdGFpbFNWR30gLz5cbiAgICAgICl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+VGhlIENvY2t0YWlsIFNoYWtlcjwvaDI+XG4gICAgICAgIDxoMz5Zb3UgZ2l2ZSB1cyBhbiBpbmdyZWRpZW50LCB3ZSBnaXZlIHlvdSBhIHJlY2lwZSBmb3IgY29ja3RhaWw8L2gzPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJQdXQgb25lIGxpcXVvciB0eXBlIGhlcmUuXCIgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja1NlYXJjaH0+U2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoYWtlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=