webpackHotUpdate("main",{

/***/ "./src/components/about.jsx":
/*!**********************************!*\
  !*** ./src/components/about.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_keonyoungpark_Projects_react_list_app_react_hooks_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.css */ "./src/components/about.css");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/keonyoungpark/Projects/react/list-app-react-hooks/src/components/about.jsx";



const About = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('infscroll'),
        _useState2 = Object(_Users_keonyoungpark_Projects_react_list_app_react_hooks_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        className = _useState2[0],
        setClassName = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState4 = Object(_Users_keonyoungpark_Projects_react_list_app_react_hooks_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        width = _useState4[0],
        setWidth = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState6 = Object(_Users_keonyoungpark_Projects_react_list_app_react_hooks_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        height = _useState6[0],
        setHeight = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
        _useState8 = Object(_Users_keonyoungpark_Projects_react_list_app_react_hooks_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        backgroundX = _useState8[0],
        setBackgroundX = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.querySelector('#root > section > section > section > main').addEventListener('scroll', () => {
      setTimeout(() => {
        console.log(document.querySelector('#root > section > section > section > main').scrollTop);

        if (document.querySelector('#root > section > section > section > main').scrollTop <= 1060) {
          setWidth('100%');
          setHeight('85vh');
          setBackgroundX(-document.querySelector('#root > section > section > section > main').scrollTop / 2);
        } else if (document.querySelector('#root > section > section > section > main').scrollTop > 1060) {
          setWidth("".concat(1060 / document.querySelector('#root > section > section > section > main').scrollTop * 100, "%"));
          console.log(1060 / document.querySelector('#root > section > section > section > main').scrollTop * 85);
          setHeight("".concat(1060 / document.querySelector('#root > section > section > section > main').scrollTop * 85, "vh"));
        }
      }, 16);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mainContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: className,
    style: {
      backgroundPositionX: backgroundX,
      width,
      height
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ../assets/laptop.png */ "./src/assets/laptop.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "underneath",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      fontSize: '8rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Collin Park"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Experience using"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ../assets/css.png */ "./src/assets/css.png"),
    style: {
      width: '14rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ../assets/html.png */ "./src/assets/html.png"),
    style: {
      width: '9rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ../assets/node.png */ "./src/assets/node.png"),
    style: {
      width: '10rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ../assets/mongodb.png */ "./src/assets/mongodb.png"),
    style: {
      width: '10rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: __webpack_require__(/*! ../assets/react.png */ "./src/assets/react.png"),
    style: {
      width: '10rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=main.67ed2d79ed87e59027ee.hot-update.js.map