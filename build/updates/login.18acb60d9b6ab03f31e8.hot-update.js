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
          "Authorization": "Bearer" + _this.getCookie('id_token')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9sb2dpbi4xOGFjYjYwZDliNmFiMDNmMzFlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyIvVXNlcnMvc2h1YmhhbWd1cHRhL0Rlc2t0b3AvRW1wbG95ZWUgUmF0aW5nIFN5c3RlbSAoMikvc3JjL3JvdXRlcy9sb2dpbi9Mb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Mb2dpbi5jc3MnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHsgZmV0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQgfTtcbiAgLy8gdGhpcy5jb250ZXh0LmZldGNoKGAvYXBpL3Bvc3RzLyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pLnRoZW4oLi4uKTtcblxuICAgZ2V0Q29va2llKGNuYW1lKSB7XG4gICAgdmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xuICAgIHZhciBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XG4gICAgdmFyIGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xuICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgICB9XG4gICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcbiAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBmdWNraW5nIGNhbGxlZC0tLS0tLS0tLS1cIilcbiAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5jb250ZXh0LmZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcXVlcnk6YG11dGF0aW9uIHtcbiAgICAgICAgICBzaWdudXAoaW5wdXQ6IHt1c2VybmFtZTogXCJzaHViaGFtXCIsIGVtYWlsOiBcInNodWJoYW0uZ3VwdGFAenlsb3RvLmNvbVwiLCBwYXNzd29yZDogXCIxMjM0NTY3XCIsIHVzZXJUeXBlOiBcImFkbWluXCJ9KSB7XG4gICAgICAgICAgICBqd3RUb2tlblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXJcIiArIHRoaXMuZ2V0Q29va2llKCdpZF90b2tlbicpLFxuICAgICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3MubGVhZH0+XG4gICAgICAgICAgICBMb2cgaW4gd2l0aCB5b3VyIHVzZXJuYW1lIG9yIGNvbXBhbnkgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsfSBodG1sRm9yPVwidXNlcm5hbWVPckVtYWlsXCI+XG4gICAgICAgICAgICAgICAgVXNlcm5hbWUgb3IgZW1haWwgYWRkcmVzczpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVPckVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZU9yRW1haWxcIlxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzIC8vIGVzbGludC1kaXNhYmxlLWxpbmUganN4LWExMXkvbm8tYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbH0gaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmJ1dHRvbn0gb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShMb2dpbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFEQTtBQVFBO0FBQ0E7QUFEQTtBQVRBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQXpDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBcUJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFuRkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFnRkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==