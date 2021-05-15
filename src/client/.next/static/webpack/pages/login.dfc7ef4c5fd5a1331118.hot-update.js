webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginComponents/SignInForm */ "./components/LoginComponents/SignInForm.js");
/* harmony import */ var _components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginComponents/SignUpForm */ "./components/LoginComponents/SignUpForm.js");


var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();




var defaultInput = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: ''
};

var login = function login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isSignUp = _useState[0],
      setIsSignUp = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultInput),
      input = _useState2[0],
      setInput = _useState2[1]; //Toggle isSignUp state, so does components


  var handleSignUpOnClick = function handleSignUpOnClick() {
    setIsSignUp(!isSignUp);
  };

  var handleSignSubmit = function handleSignSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: isSignUp ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignUpForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      setInput: setInput,
      handleSignSubmit: handleSignSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginComponents_SignInForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleSignUpOnClick: handleSignUpOnClick,
      setInput: setInput,
      handleSignSubmit: handleSignSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(login, "0MCYAx9GhZVvU9egyfu5DBe6GEQ=");

/* harmony default export */ __webpack_exports__["default"] = (login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiZGVmYXVsdElucHV0IiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibG9naW4iLCJ1c2VTdGF0ZSIsImlzU2lnblVwIiwic2V0SXNTaWduVXAiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlU2lnblVwT25DbGljayIsImhhbmRsZVNpZ25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsVUFBUSxFQUFFLEVBRlM7QUFHbkJDLGlCQUFlLEVBQUUsRUFIRTtBQUluQkMsV0FBUyxFQUFFLEVBSlE7QUFLbkJDLFVBQVEsRUFBRTtBQUxTLENBQXJCOztBQVFBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxLQUFELENBRHRCO0FBQUEsTUFDWEMsUUFEVztBQUFBLE1BQ0RDLFdBREM7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUNQLFlBQUQsQ0FGaEI7QUFBQSxNQUVYVSxLQUZXO0FBQUEsTUFFSkMsUUFGSSxrQkFJbEI7OztBQUNBLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQ0gsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSxjQUNHUCxRQUFRLGdCQUNQLHFFQUFDLDhFQUFEO0FBQVkseUJBQW1CLEVBQUVJLG1CQUFqQztBQUFzRCxjQUFRLEVBQUVELFFBQWhFO0FBQTBFLHNCQUFnQixFQUFFRTtBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE8sZ0JBR1AscUVBQUMsOEVBQUQ7QUFBWSx5QkFBbUIsRUFBRUQsbUJBQWpDO0FBQXNELGNBQVEsRUFBRUQsUUFBaEU7QUFBMEUsc0JBQWdCLEVBQUVFO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQXRCRDs7R0FBTVAsSzs7QUF3QlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmRmYzdlZjRjNWZkNWExMzMxMTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnbkluRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50cy9TaWduSW5Gb3JtJztcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnRzL1NpZ25VcEZvcm0nO1xuXG5jb25zdCBkZWZhdWx0SW5wdXQgPSB7XG4gIGVtYWlsOiAnJyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBjb25maXJtUGFzc3dvcmQ6ICcnLFxuICBmaXJzdE5hbWU6ICcnLFxuICBsYXN0TmFtZTogJydcbn1cblxuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1NpZ25VcCwgc2V0SXNTaWduVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKGRlZmF1bHRJbnB1dCk7XG5cbiAgLy9Ub2dnbGUgaXNTaWduVXAgc3RhdGUsIHNvIGRvZXMgY29tcG9uZW50c1xuICBjb25zdCBoYW5kbGVTaWduVXBPbkNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzU2lnblVwKCFpc1NpZ25VcCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2lnblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2lzU2lnblVwID8gKFxuICAgICAgICA8U2lnblVwRm9ybSBoYW5kbGVTaWduVXBPbkNsaWNrPXtoYW5kbGVTaWduVXBPbkNsaWNrfSBzZXRJbnB1dD17c2V0SW5wdXR9IGhhbmRsZVNpZ25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxTaWduSW5Gb3JtIGhhbmRsZVNpZ25VcE9uQ2xpY2s9e2hhbmRsZVNpZ25VcE9uQ2xpY2t9IHNldElucHV0PXtzZXRJbnB1dH0gaGFuZGxlU2lnblN1Ym1pdD17aGFuZGxlU2lnblN1Ym1pdH0vPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==