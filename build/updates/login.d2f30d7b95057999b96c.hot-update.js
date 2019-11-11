require("source-map-support").install();
exports.id = "login";
exports.modules = {

/***/ "./src/routes/login/Login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/login/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/shubhamgupta/Desktop/Employee Rating System (2)/src/routes/login/Login.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    var _this;

    _this = super(...args);

    _defineProperty(this, "handleSubmit",
    /*#__PURE__*/
    _asyncToGenerator(function* () {
      console.log("this is fucking called----------");
      const resp = yield _this.context.fetch('/graphql', {
        body: JSON.stringify({
          query: `mutation {
          signup(input: {username: "shubham", email: "shubham.gupta@zyloto.com", password: "1234567", userType: "admin"}) {
            jwtToken
          }
        }
      `
        }),
        headers: {
          'Content-Type': 'shubham/json' // 'Content-Type': 'application/x-www-form-urlencoded',

        }
      });
      const {
        data
      } = yield resp.json();
      console.log(data);
    }));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.lead,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Log in with your username or company email address."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
      htmlFor: "usernameOrEmail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Username or email address:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      id: "usernameOrEmail",
      type: "text",
      name: "usernameOrEmail",
      autoFocus: true // eslint-disable-line jsx-a11y/no-autofocus
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Password:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      id: "password",
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      onClick: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Log in"))));
  }

}

_defineProperty(Login, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

_defineProperty(Login, "contextTypes", {
  fetch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_Login_css__WEBPACK_IMPORTED_MODULE_3___default.a)(Login));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9sb2dpbi5kMmYzMGQ3Yjk1MDU3OTk5Yjk2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc2h1YmhhbWd1cHRhL0Rlc2t0b3AvRW1wbG95ZWUgUmF0aW5nIFN5c3RlbSAoMikvc3JjL3JvdXRlcy9sb2dpbi9Mb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Mb2dpbi5jc3MnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHsgZmV0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQgfTtcbiAgLy8gdGhpcy5jb250ZXh0LmZldGNoKGAvYXBpL3Bvc3RzLyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pLnRoZW4oLi4uKTtcbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBmdWNraW5nIGNhbGxlZC0tLS0tLS0tLS1cIilcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5jb250ZXh0LmZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcXVlcnk6YG11dGF0aW9uIHtcbiAgICAgICAgICBzaWdudXAoaW5wdXQ6IHt1c2VybmFtZTogXCJzaHViaGFtXCIsIGVtYWlsOiBcInNodWJoYW0uZ3VwdGFAenlsb3RvLmNvbVwiLCBwYXNzd29yZDogXCIxMjM0NTY3XCIsIHVzZXJUeXBlOiBcImFkbWluXCJ9KSB7XG4gICAgICAgICAgICBqd3RUb2tlblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3NodWJoYW0vanNvbicsXG4gICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5sZWFkfT5cbiAgICAgICAgICAgIExvZyBpbiB3aXRoIHlvdXIgdXNlcm5hbWUgb3IgY29tcGFueSBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWx9IGh0bWxGb3I9XCJ1c2VybmFtZU9yRW1haWxcIj5cbiAgICAgICAgICAgICAgICBVc2VybmFtZSBvciBlbWFpbCBhZGRyZXNzOlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZU9yRW1haWxcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lT3JFbWFpbFwiXG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBqc3gtYTExeS9uby1hdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsfSBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuYnV0dG9ufSBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKExvZ2luKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQXpCQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFuRUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFnRUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==