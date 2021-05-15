webpackHotUpdate_N_E("pages/login",{

/***/ "./components/LoginComponents/SignUpForm.js":
/*!**************************************************!*\
  !*** ./components/LoginComponents/SignUpForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignInForm.module.scss */ "./components/LoginComponents/SignInForm.module.scss");
/* harmony import */ var _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jaebu\\Desktop\\cocktail-v2\\src\\client\\components\\LoginComponents\\SignUpForm.js",
    _this = undefined;




var SignUpForm = function SignUpForm(_ref) {
  var input = _ref.input,
      handleSignUpOnClick = _ref.handleSignUpOnClick,
      handleSignSubmit = _ref.handleSignSubmit,
      handleInputOnChange = _ref.handleInputOnChange;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formContainer,
      onSubmit: handleSignSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["First Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "firstName",
          value: input.firsName,
          placeholder: "Enter first name.",
          onChange: handleInputOnChange,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Last Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          name: "lastName",
          value: input.lastName,
          placeholder: "Enter last name.",
          onChange: handleInputOnChange,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Email:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.email,
          name: "email",
          onChange: handleInputOnChange,
          placeholder: "Enter Email.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Password:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.password,
          name: "password",
          onChange: handleInputOnChange,
          placeholder: "Enter Password.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Confirm Password:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formInput,
          value: input.confirmPassword,
          name: "confirmPassword",
          onChange: handleInputOnChange,
          placeholder: "Confirm Password.",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
          onClick: handleSignUpOnClick,
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Already have an account?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleSignUpOnClick,
      children: "Click here to Sign in"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonsContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Sign Up with:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Github"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _SignInForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.formButton,
        children: "Facebook"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = SignUpForm;
/* harmony default export */ __webpack_exports__["default"] = (SignUpForm);

var _c;

$RefreshReg$(_c, "SignUpForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudHMvU2lnblVwRm9ybS5qcyJdLCJuYW1lcyI6WyJTaWduVXBGb3JtIiwiaW5wdXQiLCJoYW5kbGVTaWduVXBPbkNsaWNrIiwiaGFuZGxlU2lnblN1Ym1pdCIsImhhbmRsZUlucHV0T25DaGFuZ2UiLCJzdHlsZWQiLCJmb3JtQ29udGFpbmVyIiwiZmlyc05hbWUiLCJsYXN0TmFtZSIsImZvcm1JbnB1dCIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJidXR0b25zQ29udGFpbmVyIiwiZm9ybUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMkU7QUFBQSxNQUF4RUMsS0FBd0UsUUFBeEVBLEtBQXdFO0FBQUEsTUFBakVDLG1CQUFpRSxRQUFqRUEsbUJBQWlFO0FBQUEsTUFBNUNDLGdCQUE0QyxRQUE1Q0EsZ0JBQTRDO0FBQUEsTUFBMUJDLG1CQUEwQixRQUExQkEsbUJBQTBCO0FBRTVGLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTSxlQUFTLEVBQUVDLDhEQUFNLENBQUNDLGFBQXhCO0FBQXVDLGNBQVEsRUFBRUgsZ0JBQWpEO0FBQUEsOEJBQ0U7QUFBQSwrQ0FFRTtBQUNFLGNBQUksRUFBQyxXQURQO0FBRUUsZUFBSyxFQUFFRixLQUFLLENBQUNNLFFBRmY7QUFHRSxxQkFBVyxFQUFDLG1CQUhkO0FBSUUsa0JBQVEsRUFBRUgsbUJBSlo7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFXRTtBQUFBLDhDQUVFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxlQUFLLEVBQUVILEtBQUssQ0FBQ08sUUFGZjtBQUdFLHFCQUFXLEVBQUMsa0JBSGQ7QUFJRSxrQkFBUSxFQUFFSixtQkFKWjtBQUtFLGtCQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixlQXFCRTtBQUFBLDBDQUVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxtQkFBUyxFQUFFQyw4REFBTSxDQUFDSSxTQUZwQjtBQUdFLGVBQUssRUFBRVIsS0FBSyxDQUFDUyxLQUhmO0FBSUUsY0FBSSxFQUFDLE9BSlA7QUFLRSxrQkFBUSxFQUFFTixtQkFMWjtBQU1FLHFCQUFXLEVBQUMsY0FOZDtBQU9FLGtCQUFRO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkYsZUFpQ0U7QUFBQSw2Q0FFRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsbUJBQVMsRUFBRUMsOERBQU0sQ0FBQ0ksU0FGcEI7QUFHRSxlQUFLLEVBQUVSLEtBQUssQ0FBQ1UsUUFIZjtBQUlFLGNBQUksRUFBQyxVQUpQO0FBS0Usa0JBQVEsRUFBRVAsbUJBTFo7QUFNRSxxQkFBVyxFQUFDLGlCQU5kO0FBT0Usa0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRixlQTZDRTtBQUFBLHFEQUVFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxtQkFBUyxFQUFFQyw4REFBTSxDQUFDSSxTQUZwQjtBQUdFLGVBQUssRUFBRVIsS0FBSyxDQUFDVyxlQUhmO0FBSUUsY0FBSSxFQUFDLGlCQUpQO0FBS0Usa0JBQVEsRUFBRVIsbUJBTFo7QUFNRSxxQkFBVyxFQUFDLG1CQU5kO0FBT0Usa0JBQVE7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdDRixlQXlERTtBQUFLLGlCQUFTLEVBQUVDLDhEQUFNLENBQUNRLGdCQUF2QjtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBRVIsOERBQU0sQ0FBQ1MsVUFBMUI7QUFBc0MsaUJBQU8sRUFBRVosbUJBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWdFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhFRixlQWlFRTtBQUFRLGFBQU8sRUFBRUEsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakVGLGVBa0VFO0FBQUssZUFBUyxFQUFFRyw4REFBTSxDQUFDUSxnQkFBdkI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBUSxpQkFBUyxFQUFFUiw4REFBTSxDQUFDUyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBUSxpQkFBUyxFQUFFVCw4REFBTSxDQUFDUyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUU7QUFBUSxpQkFBUyxFQUFFVCw4REFBTSxDQUFDUyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJFRCxDQTdFRDs7S0FBTWQsVTtBQStFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uOTRkMzBmNGU3ODg4ZTExODU4YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4vU2lnbkluRm9ybS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNpZ25VcEZvcm0gPSAoeyBpbnB1dCwgaGFuZGxlU2lnblVwT25DbGljaywgaGFuZGxlU2lnblN1Ym1pdCwgaGFuZGxlSW5wdXRPbkNoYW5nZSB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZWQuZm9ybUNvbnRhaW5lcn0gb25TdWJtaXQ9e2hhbmRsZVNpZ25TdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgRmlyc3QgTmFtZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0LmZpcnNOYW1lfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBmaXJzdCBuYW1lLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRPbkNoYW5nZX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIExhc3QgTmFtZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXQubGFzdE5hbWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGxhc3QgbmFtZS5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5mb3JtSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXQuZW1haWx9XG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsLlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlZC5mb3JtSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXQucGFzc3dvcmR9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0T25DaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkLlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBDb25maXJtIFBhc3N3b3JkOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVkLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dE9uQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkLlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZWQuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVTaWduVXBPbkNsaWNrfT5cbiAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8cD5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcE9uQ2xpY2t9PkNsaWNrIGhlcmUgdG8gU2lnbiBpbjwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlZC5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgPHA+U2lnbiBVcCB3aXRoOjwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5Hb29nbGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5HaXRodWI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlZC5mb3JtQnV0dG9ufT5GYWNlYm9vazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==