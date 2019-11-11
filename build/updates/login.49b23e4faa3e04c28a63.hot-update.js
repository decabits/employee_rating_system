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
          "Authorization": "Bearer " + _this.getCookie('id_token')
        }
      });
      const {
        data
      } = yield resp.json();
      console.log(data);
    }));
  }

  // this.context.fetch(`/api/posts/${id}`, { method: 'DELETE' }).then(...);
  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.lead,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Log in with your username or company email address."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
      htmlFor: "usernameOrEmail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
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
        lineNumber: 69
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Password:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      id: "password",
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      onClick: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9sb2dpbi40OWIyM2U0ZmFhM2UwNGMyOGE2My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc2h1YmhhbWd1cHRhL0Rlc2t0b3AvRW1wbG95ZWUgUmF0aW5nIFN5c3RlbSAoMikvc3JjL3JvdXRlcy9sb2dpbi9Mb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Mb2dpbi5jc3MnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHsgZmV0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQgfTtcbiAgLy8gdGhpcy5jb250ZXh0LmZldGNoKGAvYXBpL3Bvc3RzLyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pLnRoZW4oLi4uKTtcblxuICAgZ2V0Q29va2llKGNuYW1lKSB7XG4gICAgdmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xuICAgIHZhciBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XG4gICAgdmFyIGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xuICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgICB9XG4gICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcbiAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBmdWNraW5nIGNhbGxlZC0tLS0tLS0tLS1cIilcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5jb250ZXh0LmZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcXVlcnk6YG11dGF0aW9uIHtcbiAgICAgICAgICBzaWdudXAoaW5wdXQ6IHt1c2VybmFtZTogXCJzaHViaGFtXCIsIGVtYWlsOiBcInNodWJoYW0uZ3VwdGFAenlsb3RvLmNvbVwiLCBwYXNzd29yZDogXCIxMjM0NTY3XCIsIHVzZXJUeXBlOiBcImFkbWluXCJ9KSB7XG4gICAgICAgICAgICBqd3RUb2tlblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyB0aGlzLmdldENvb2tpZSgnaWRfdG9rZW4nKSxcbiAgICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLmxlYWR9PlxuICAgICAgICAgICAgTG9nIGluIHdpdGggeW91ciB1c2VybmFtZSBvciBjb21wYW55IGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbH0gaHRtbEZvcj1cInVzZXJuYW1lT3JFbWFpbFwiPlxuICAgICAgICAgICAgICAgIFVzZXJuYW1lIG9yIGVtYWlsIGFkZHJlc3M6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lT3JFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVPckVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGpzeC1hMTF5L25vLWF1dG9mb2N1c1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWx9IGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5idXR0b259IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTG9naW4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBREE7QUFRQTtBQUNBO0FBREE7QUFUQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUF6Q0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBbkZBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBZ0ZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=