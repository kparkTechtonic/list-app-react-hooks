(window["webpackJsonpcapstone"] = window["webpackJsonpcapstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/LandingPage.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/LandingPage.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);", ""]);
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../assets/landingPageBkgrdImgBW.jpg */ "./src/assets/landingPageBkgrdImgBW.jpg"));

// Module
exports.push([module.i, "body {\n  font-family: 'Roboto', Verdana, Tahoma, sans-serif ;\n}\n\n.main-content-landing {\n  display: flex;\n  /* opacity: 20; */\n  top: 5rem; /*same as nav bar*/\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.main-content-landing::after {\n  content: \"\";\n  background: url(" + ___CSS_LOADER_URL___0___ + ");\n  opacity: 0.5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;   \n}\n\n.logo-landing {\n  padding-top: 8rem;\n  transform: scale(1.5, 1.5);\n  margin-top: 3rem;\n}\n\n.div-buttons-landing {\n  color: #121f31;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 4rem;\n  text-align: center;\n}\n\n.div-find-landing {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.div-host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 70%;\n}\n\n.find-landing,\n.host-landing {\n  background-color: grey;\n  font-size: 1rem;\n  border-radius: 2rem;\n  width: 80vw;\n  height: 3rem;\n}\n\n.find-landing {\n  background-color: #993399;\n  color: whitesmoke;\n  border: 0.1rem solid #993399;\n}\n\n.host-landing {\n  background-color: whitesmoke;\n  border: 0.1rem solid #993399;\n}\n\n.host-landing:hover {\n  background-color: #993399;\n  color: whitesmoke;\n}\n\n.find-landing:hover {\n  background-color: whitesmoke;\n  border: 0.1rem solid #993399;\n  color: #993399;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ListingPage.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/ListingPage.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body{\n  background-color:white;\n}\n\n.listing-body{\n  position:relative;\n  padding-top: 4.5rem;\n  width:100vw;\n  height:100%;\n  background-color:white;\n  z-index: 1;\n  height:auto;\n}\n\n.listing-photos{\n  width: 100%;\n  padding-top:4.5rem;\n  border: 1px solid;\n  position:relative;\n}\n\n.listing-details-body{\n  position:relative;\n  width:100%;\n  height:100%;\n  display:flex;\n  flex-direction:column;\n  z-index: -1;\n} \n\n.main-content-listing-page{\n  font-family:'Roboto', sans-serif;\n  font-weight: 200;\n  padding:1rem;\n  background-color:white;\n  height:90vh;\n  /* display:flex; */\n  text-align:left;\n} \n\n.main-content-listing-page h1{\n  font-size:2.5rem;\n  margin:0;\n} \n\n.main-content-listing-page hr{\n  /* padding-left:0; */\n  border: none;\n  height: 1px;\n  width: 10%;\n  text-align:left;\n  margin-left:0;\n  background-color:#676665;\n  /* color:black; */\n\n} \n\n.listing-name{\n  border: 1px solid;\n}\n\n.listing-details{\n  display:inline-block;\n  width: 100%;\n}\n\n.listing-details div{\n  font-size:1.2rem;\n  padding:1rem;\n  display:inline-block;\n}\n\n\n.listing-description{\n  font-size: 1.7rem;\n  padding-top:2rem;\n  padding-bottom:2rem;\n}\n\n\n.listing-calendar{\n  margin-top:2rem;\n  margin-bottom:2rem;\n  border: 1px solid;\n  border-radius: 1rem;\n  padding:1rem;\n  font-size:1.2rem;\n  background-color: rgb(241, 237, 237);\n}\n\n\n\n.listing-Footer{\n  font-size:1.5rem;\n  display:flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top:2rem;\n  padding-bottom:2rem;\n}\n\n.listing-Footer div{\n  padding:0.8rem;\n  font-size:1.5rem;\n  \n}\n.listing-Footer button{\n  margin-top:-0.8rem;\n  padding:0.8rem;\n  font-size:1.5rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ListingPageComponents/PictureCarousel.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/ListingPageComponents/PictureCarousel.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".slick-track\n{\n    display: flex !important;\n}\n\n.slick-slide\n{\n    height: inherit !important;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/MapPageComponents/SearchBar.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/MapPageComponents/SearchBar.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".margin-top {\n    margin-top: 4.5rem;\n}\n\n.map-page-navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    background-color: white;\n    border-top: 1px solid gray;\n    border-bottom: 1px solid gray;\n    width: 100%;\n    padding: 10px 10px 10px 10px;\n    box-sizing: border-box;\n}\n\n.filter-btn {\n    text-align: center;\n    padding: .2rem 1rem;\n    font-size: 0.75rem;\n    background-color: whitesmoke;\n    height: 2.5rem;\n    min-width: 5rem;\n    max-width: 8rem;\n    margin-left: 0.25rem;\n    border-radius: 2rem;\n}\n\n.filter-btn:hover {\n    background-color: #8d4987;\n    color: #ebebeb;\n}\n\n.map-searchbar {\n    border-radius: 1000px;\n    border: 0px;\n    margin: 0.25rem 1rem;\n    padding: .5rem 1rem;\n    flex-grow: 1;\n    width: 30vw;\n    max-width: 60vw;\n    background-color: #ebebeb;\n}\n\n.toggle-btn {\n    text-align: center;\n    padding: 0.2rem 0.8rem;\n    font-size: 0.75rem;\n    background-color: whitesmoke;\n    height: 2.5rem;\n    min-width: 5rem;\n    max-width: 8rem;\n    margin-right: 0.25rem;\n    border-radius: 2rem;\n}\n\n.toggle-btn:hover {\n    background-color: #8d4987;\n    color: #ebebeb;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navbar.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Navbar.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #f7f7f7;\n    padding: .5rem;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: white;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: #dadada;\n    /* edits below */\n    z-index: 10;\n    width:100vw\n}\n\n.logo-navbar {\n    margin: -0.5rem;\n}\n\n.map-search {\n    height: 100%;\n    border: 0px;\n    padding: .5rem;\n    flex-grow: 1;\n    width: 70vw;\n    max-width: 50vw;\n    background-color: #ebebeb;\n}\n\n.nav-link-div {\n    display: flex;\n    padding: 0.5rem;\n    height: 2rem;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-end;\n}\n\n.nav-link {\n    font-size: .75rem;\n    padding-top: 0.5rem;\n    text-decoration: none;\n    color: #101010;\n}\n\n.nav-link:hover {\n    color: #888888;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);", ""]);

// Module
exports.push([module.i, "body {\n  background-color: #ebddf1;\n  font-family: 'Roboto', Verdana, Tahoma, sans-serif ;\n  box-sizing: border-box;\n  margin-top: 0;\n  margin-left: 0;\n}\n\nbutton {\n  border: 1px solid #993399;\n  border-radius: 0.5rem;\n  background-color: #ebebeb;\n  color: #993399;\n}\n\ninput[type='submit'] {\n  border-radius: 0.5rem;\n  border: 1px solid #2bbd2b;\n  background-color: #35d435;\n  color: #ebebeb;\n  padding: 0.75rem;\n}\n\ninput[type='text'] {\n  border-width: 0;\n  border-radius: 3rem;\n  padding: 0.75rem;\n  background-color: #ebebeb;\n}\n\n.input[type='text']:focus {\n  background-color: #dadada;\n}\n\n/* colors:\npurple: #8d4987\nwhite: #ebebeb\ndark blue: #122031\nvery light purple: #ebddf1\nlime green darker: #2bbd2b\nlime green lighter: #35d435 */\n\n/********************* boilerplate code created by React app ***********************/\n\n/* body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n} */\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_actions_userActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/actions/userActionCreator */ "./src/redux/actions/userActionCreator.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_LoginPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LoginPage */ "./src/components/LoginPage.js");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PrivateRoute */ "./src/components/PrivateRoute.js");
/* harmony import */ var _components_LoginRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/LoginRoute */ "./src/components/LoginRoute.js");
/* harmony import */ var _components_CheckoutPage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CheckoutPage.js */ "./src/components/CheckoutPage.js");
/* harmony import */ var _components_CreateListingPage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CreateListingPage.js */ "./src/components/CreateListingPage.js");
/* harmony import */ var _components_LandingPage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/LandingPage.js */ "./src/components/LandingPage.js");
/* harmony import */ var _components_ListingPage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ListingPage.js */ "./src/components/ListingPage.js");
/* harmony import */ var _components_MapPage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/MapPage.js */ "./src/components/MapPage.js");
/* harmony import */ var _components_PaymentPage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/PaymentPage.js */ "./src/components/PaymentPage.js");
/* harmony import */ var _components_RegisterPage_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/RegisterPage.js */ "./src/components/RegisterPage.js");
/* harmony import */ var _components_UserPage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/UserPage.js */ "./src/components/UserPage.js");

var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/App.js";

















const App = props => {
  if (props.errorMsg) console.error('ERROR! \n', props.errorMsg);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.history.location.pathname !== '/login' ? props.history.location : '/'),
        _useState2 = Object(_Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        prevLoc = _useState2[0],
        setLocation = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.history.location.pathname !== '/login') {
      setLocation(props.history.location);
    }
  }, [props.history.location]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /3000\/$/.test(window.location.href) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _components_CreateListingPage_js__WEBPACK_IMPORTED_MODULE_10__["default"],
    exact: true,
    path: "/CreateListingPage",
    authed: props.userIsLoggedIn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _components_PaymentPage_js__WEBPACK_IMPORTED_MODULE_14__["default"],
    exact: true,
    path: "/PaymentPage",
    authed: props.userIsLoggedIn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _components_UserPage_js__WEBPACK_IMPORTED_MODULE_16__["default"],
    exact: true,
    path: "/UserPage",
    authed: props.userIsLoggedIn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _components_CheckoutPage_js__WEBPACK_IMPORTED_MODULE_9__["default"],
    exact: true,
    path: "/CheckoutPage",
    authed: !props.userIsLoggedIn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/RegisterPage",
    render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_RegisterPage_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/MapPage",
    render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MapPage_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    exact: true,
    render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LandingPage_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/ListingPage",
    render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListingPage_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LoginRoute__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: _components_LoginPage__WEBPACK_IMPORTED_MODULE_6__["default"],
    exact: true,
    path: "/login",
    authed: !props.userIsLoggedIn,
    prevLoc: prevLoc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })));
};

const mapStateToProps = state => {
  console.log(state);
  return {
    userIsLoggedIn: state.user.userIsLoggedIn
  };
};

function mapDispatchToProps() {
  return {
    loginUser: _redux_actions_userActionCreator__WEBPACK_IMPORTED_MODULE_4__["loginUser"]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(App)));

/***/ }),

/***/ "./src/assets/landingPageBkgrdImgBW.jpg":
/*!**********************************************!*\
  !*** ./src/assets/landingPageBkgrdImgBW.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/landingPageBkgrdImgBW.9dcac9b4.jpg";

/***/ }),

/***/ "./src/assets/storage-share-logo-blk-ppl.png":
/*!***************************************************!*\
  !*** ./src/assets/storage-share-logo-blk-ppl.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/storage-share-logo-sm-blk-ppl.png":
/*!******************************************************!*\
  !*** ./src/assets/storage-share-logo-sm-blk-ppl.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABGCAYAAAC5QghSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6FJREFUeNrsml9y2jAQxnGn76EniG9QMz1AwwlKTxDzQh5DTsARkjzmqekJCieo+95OzQlKb+Ab0JVnlRFiZWRbKfLMtzMaAhh90Y/V/pFJ9vv9CPY69gYIABdwYYALuIALA1zABVwY4AIu4MIAF3ABFwa4gAu4MMAFXBjgAi7gwgD3TPY25GRJkvhclvIwraRRhfo/nj48iRo3v25OaoT8kUwSdLJjuGMaMxqfaGTCgkcCZDU2NNaeIDtrEOz1UOEuaawYcBfb0bhrgkxgg2iYkIcA9wuNPNC0zzTmAtigGgR4HhruayS0e2vRKs4VPWJqbkMksME1aM48NIjQcFMOB9rUgh9pTPmx6PGFmcnqSIM8L5hGrHBvre2sFnzBiWbEzx86zDs2PPXW2s61BkGvNfh5J43Q3hsa7pXxd8ZZfMvZecevKe+aqBBtjXcGfGl7v5c0CEitQVBrDYZca9BriTlaaESZ0MzJHjjbzxjsrkVMVIC+W1WA2u5TgnegQdDuGHCt4VPLcngRNRY/F9MhdGgzjsFZhyahlCoESYNjcKY81xcshw9fjSjhqkX/oXHZsQ5dt9HgZqKVSU3E0M4W8h4lkm/mz9t4bUeN854ttMz+9+x5uhOrQgqwJx9o9PgCooY7tuAthe7qr+FJOkanVqPQCNOCtxSajwMNvt5b49xwS6OmtZPbs1UDX/K1mQVhZcxlLnwbWoNguzSihFs1dD/6NEofmMwbauWVVc+aczs1FCyuAlSycmrQdac0ooS7awgLv9mbNsZZgCvBFHx9Zu2KkxoE7kWDABeOKqHWoGtdGlHC3Tq8ec1ekjtOsnZGYtML3DgW7q1B8EQN7d0NGtHGXMmj5o4WWdk1w0j5vdIBv2rS0EeGxrZvraES3GK0iBZuwRDGQhwtHHVlyd5YWY3DhdRQqC1N8I40FFAdBuxwwInLWyPWswX1IB1il3xg4pswdIzWmXxiepvjoLzWaHG2cKShwkXsh+VfGw5irjxb2m/GogthGzs1hJAggT3SMOJw1J6rS69lQ7mmFvJDeO+j8AVMpBjJdyOCaWi4Q7iHNmZPzXpOObcaA3tbB9EgsC8asYcF7TnTHklCff6zCywnrSAaJtihhAW7Urge+d2pVSXXI0P17pY4zrbWkJLfkH4UIiWd1NrKldEa924/+Q6DU+NUNREtXNj/ibkwwAVcwIUBLuACLgxwARdwYYALuIALA1zABVwY4A7G/gkwAPRBponnBY1vAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/components/CheckoutPage.js":
/*!****************************************!*\
  !*** ./src/components/CheckoutPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckoutPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/CheckoutPage.js";

class CheckoutPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./src/components/CreateListingPage.js":
/*!*********************************************!*\
  !*** ./src/components/CreateListingPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateListingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/CreateListingPage.js";

class CreateListingPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./src/components/LandingPage.css":
/*!****************************************!*\
  !*** ./src/components/LandingPage.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./LandingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/LandingPage.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./LandingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/LandingPage.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./LandingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/LandingPage.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/LandingPage.js":
/*!***************************************!*\
  !*** ./src/components/LandingPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LandingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingPage.css */ "./src/components/LandingPage.css");
/* harmony import */ var _LandingPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LandingPage_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/LandingPage.js";


class LandingPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-content-landing background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "logo-landing",
      src: __webpack_require__(/*! ../assets/storage-share-logo-blk-ppl.png */ "./src/assets/storage-share-logo-blk-ppl.png"),
      alt: "storage share purple and white logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "div-buttons-landing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "div-find-landing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "describe-find",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Locate a place to store your stuff."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/MapPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "find-landing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "FIND STORAGE"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "div-host-landing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "describe-host",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Invite others to store their stuff in your extra space."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/UserPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "host-landing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "HOST STORAGE")))));
  }

}

/***/ }),

/***/ "./src/components/ListingPage.css":
/*!****************************************!*\
  !*** ./src/components/ListingPage.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ListingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ListingPage.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ListingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ListingPage.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./ListingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ListingPage.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/ListingPage.js":
/*!***************************************!*\
  !*** ./src/components/ListingPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ListingPageComponents_PictureCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListingPageComponents/PictureCarousel */ "./src/components/ListingPageComponents/PictureCarousel.js");
/* harmony import */ var _ListingPageComponents_BookingFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListingPageComponents/BookingFooter */ "./src/components/ListingPageComponents/BookingFooter.js");
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListingPage.css */ "./src/components/ListingPage.css");
/* harmony import */ var _ListingPage_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ListingPage_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/ListingPage.js";








class ListingPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const _this$props = this.props,
          address = _this$props.address,
          description = _this$props.description,
          endDateAvailable = _this$props.endDateAvailable,
          photos = _this$props.photos,
          price = _this$props.price,
          reservations = _this$props.reservations,
          size = _this$props.size,
          startDateAvailable = _this$props.startDateAvailable,
          tempControl = _this$props.tempControl,
          title = _this$props.title,
          type = _this$props.type;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "listing-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListingPageComponents_PictureCarousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        width: '100vw',
        height: '80%',
        boxSizing: 'border-box'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "listing-details-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-content-listing-page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "listing-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "listing-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "listing-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRulerCombined"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), ' ', size, ' ', "sq ft"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDollarSign"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), ' ', price, ' ', "per day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faThermometerHalf"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), ' ', tempControl ? ' Yes' : ' No'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBoxOpen"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), ' ', type)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "listing-calendar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarAlt"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), ' ', "Available:", ' ', new Date(startDateAvailable).getYear(), "/", new Date(startDateAvailable).getMonth() + 1, "/", new Date(startDateAvailable).getDate(), ' ', "to", ' ', new Date(startDateAvailable).getYear(), "/", new Date(startDateAvailable).getMonth() + 1, "/", new Date(endDateAvailable).getDate())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "listing-Footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDollarSign"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), ' ', price, ' ', "per day"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Book now"))))));
  }

}

const mapStateToProps = state => {
  const _state$listing$detail = state.listing.detailedListing,
        address = _state$listing$detail.address,
        description = _state$listing$detail.description,
        endDateAvailable = _state$listing$detail.endDateAvailable,
        latitude = _state$listing$detail.latitude,
        listingId = _state$listing$detail.listingId,
        longitude = _state$listing$detail.longitude,
        ownerId = _state$listing$detail.ownerId,
        photos = _state$listing$detail.photos,
        price = _state$listing$detail.price,
        reservations = _state$listing$detail.reservations,
        reviews = _state$listing$detail.reviews,
        size = _state$listing$detail.size,
        startDateAvailable = _state$listing$detail.startDateAvailable,
        tempControl = _state$listing$detail.tempControl,
        title = _state$listing$detail.title,
        type = _state$listing$detail.type;
  return {
    address,
    description,
    endDateAvailable,
    latitude,
    listingId,
    longitude,
    ownerId,
    photos,
    price,
    reservations,
    reviews,
    size,
    startDateAvailable,
    tempControl,
    title,
    type
  };
};

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ListingPage)); // return(
//   )

/***/ }),

/***/ "./src/components/ListingPageComponents/BookingFooter.js":
/*!***************************************************************!*\
  !*** ./src/components/ListingPageComponents/BookingFooter.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookingFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/ListingPageComponents/BookingFooter.js";

class BookingFooter extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./src/components/ListingPageComponents/PictureCarousel.css":
/*!******************************************************************!*\
  !*** ./src/components/ListingPageComponents/PictureCarousel.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PictureCarousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ListingPageComponents/PictureCarousel.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PictureCarousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ListingPageComponents/PictureCarousel.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./PictureCarousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ListingPageComponents/PictureCarousel.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/ListingPageComponents/PictureCarousel.js":
/*!*****************************************************************!*\
  !*** ./src/components/ListingPageComponents/PictureCarousel.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PictureCarousel_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PictureCarousel.css */ "./src/components/ListingPageComponents/PictureCarousel.css");
/* harmony import */ var _PictureCarousel_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PictureCarousel_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/ListingPageComponents/PictureCarousel.js";







class PictureCarousel extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    this.handlePhotos = () => {
      return this.props.photos.map((e, i) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: e + i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          style: {
            width: "100vw",
            height: '80%'
          },
          src: e,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }));
      });
    };
  }

  render() {
    const settings = {
      adaptiveHeight: false,
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object.assign({}, settings, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), this.handlePhotos());
  }

}

const mapStateToProps = state => {
  const photos = state.listing.detailedListing.photos;
  return {
    photos
  };
};

const mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PictureCarousel));

/***/ }),

/***/ "./src/components/LoginPage.js":
/*!*************************************!*\
  !*** ./src/components/LoginPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_userActionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/userActionCreator */ "./src/redux/actions/userActionCreator.js");
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/LoginPage.js";






class LoginPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    this.handleValidation = event => {
      let validationRegEx;

      if (event.target.name === "password") {
        validationRegEx = /.{8,}/;
      }

      if (event.target.name === "email") {
        validationRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      }

      if (event.target.name === "passwordConf") {
        validationRegEx = new RegExp(this.state.password);
      }

      if (validationRegEx.test(event.target.value)) {
        event.target.classList.add('form-validation-passes');
        event.target.classList.remove('form-validation-fails');

        if (event.target.name === "password") {
          this.setState({
            strongPassword: true
          });
        } else if (event.target.name === "email") {
          this.setState({
            correctEmail: true
          });
        } else if (event.target.name === "passwordConf") {
          this.setState({
            correctPasswordConf: true
          });
        }
      } else {
        event.target.classList.remove('form-validation-passes');
        event.target.classList.add('form-validation-fails');

        if (event.target.name === "password") {
          this.setState({
            strongPassword: false
          });
        } else if (event.target.name === "email") {
          this.setState({
            correctEmail: false
          });
        } else if (event.target.name === "passwordConf") {
          this.setState({
            correctPasswordConf: false
          });
        }
      }
    };

    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();

      if (this.state.newUser && !(this.state.strongPassword && this.state.correctEmail && this.state.correctPasswordConf)) {
        console.log("bad credentials");
        return;
      }

      if (!this.state.newUser && !(this.state.strongPassword && this.state.correctEmail)) {
        console.log("bad credentials");
        return;
      }

      var user = null;

      if (this.state.newUser) {
        const displayName = "".concat(this.state.firstName, " ").concat(this.state.lastName);
        firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
          user = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().currentUser;
          user.sendEmailVerification();
        }).then(() => {
          user.updateProfile({
            displayName: displayName
          }).then(() => {
            const _user = user,
                  uid = _user.uid,
                  email = _user.email,
                  emailVerified = _user.emailVerified,
                  displayName = _user.displayName,
                  photoUrl = _user.photoUrl;
            const userObj = {
              uid,
              email,
              emailVerified,
              displayName,
              photoUrl
            };
            this.props.loginUser(userObj);
          });
        }).catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("failed with code: ".concat(errorCode, " and message: ").concat(errorMessage));
        });
      } else {
        firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(r => {
          user = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().currentUser;
          const _user2 = user,
                uid = _user2.uid,
                email = _user2.email,
                emailVerified = _user2.emailVerified,
                displayName = _user2.displayName,
                photoUrl = _user2.photoUrl;
          const userObj = {
            uid,
            email,
            emailVerified,
            displayName,
            photoUrl
          };
          this.props.loginUser(userObj);
        }).catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("failed with code: ".concat(errorCode, " and message: ").concat(errorMessage));
        });
      }
    };

    this.handleToggle = () => {
      this.setState({
        newUser: !this.state.newUser
      });
    };

    this.state = {
      email: '',
      password: '',
      passwordConf: '',
      newUser: false,
      firstName: "",
      lastName: ""
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "firebaseui-auth-container",
      lang: "en",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      disabled: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-card-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "firebaseui-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, this.state.newUser ? "Register" : "Sign in")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-card-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, this.state.newUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-dirty is-upgraded",
      "data-upgraded": ",MaterialTextfield",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mdl-textfield__label firebaseui-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "First name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "firstName",
      autoComplete: "firstName",
      className: "mdl-textfield__input firebaseui-input firebaseui-id-email",
      value: this.state.firstName,
      onChange: this.handleChange,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-error-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-dirty is-upgraded",
      "data-upgraded": ",MaterialTextfield",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mdl-textfield__label firebaseui-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "Last name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "lastName",
      autoComplete: "lastName",
      className: "mdl-textfield__input firebaseui-input firebaseui-id-email",
      value: this.state.lastName,
      onChange: this.handleChange,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-error-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-dirty is-upgraded",
      "data-upgraded": ",MaterialTextfield",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mdl-textfield__label firebaseui-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onBlur: this.handleValidation,
      type: "email",
      name: "email",
      autoComplete: "username",
      className: "mdl-textfield__input firebaseui-input firebaseui-id-email",
      value: this.state.email,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-error-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-dirty is-upgraded",
      "data-upgraded": ",MaterialTextfield",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mdl-textfield__label firebaseui-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onBlur: this.handleValidation,
      type: "password",
      name: "password",
      autoComplete: "current-password",
      className: "mdl-textfield__input firebaseui-input firebaseui-id-password",
      value: this.state.password,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-error-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    })), this.state.newUser ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-dirty is-upgraded",
      "data-upgraded": ",MaterialTextfield",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "mdl-textfield__label firebaseui-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, "Confirm password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onBlur: this.handleValidation,
      type: "password",
      name: "passwordConf",
      autoComplete: "current-password",
      className: "mdl-textfield__input firebaseui-input firebaseui-id-password",
      value: this.state.passwordConf,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-error-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-card-actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-form-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "firebaseui-link firebaseui-id-secondary-link",
      style: {
        cursor: "pointer"
      },
      onClick: this.handleToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, this.state.newUser ? "Already have an account?" : "Need to register?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-form-actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, this.state.newUser ? "Register" : "Sign in"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "firebaseui-card-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }))));
  }

}

;

const mapStateToProps = state => {
  console.log(state);
  return {
    userIsLoggedIn: state.user.userIsLoggedIn
  };
};

function mapDispatchToProps() {
  return {
    loginUser: _redux_actions_userActionCreator__WEBPACK_IMPORTED_MODULE_4__["loginUser"]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(LoginPage));

/***/ }),

/***/ "./src/components/LoginRoute.js":
/*!**************************************!*\
  !*** ./src/components/LoginRoute.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginRoute; });
/* harmony import */ var _Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/LoginRoute.js";


function LoginRoute(_ref) {
  let prevLoc = _ref.prevLoc,
      Component = _ref.component,
      authed = _ref.authed,
      rest = Object(_Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["prevLoc", "component", "authed"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: props => authed === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: prevLoc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/components/MapPage.js":
/*!***********************************!*\
  !*** ./src/components/MapPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MapPageComponents_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapPageComponents/SearchBar */ "./src/components/MapPageComponents/SearchBar.js");
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/MapPage.js";

 // import Navbar from './Navbar.js'

class MapPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapPageComponents_SearchBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), "Map Page");
  }

}

/***/ }),

/***/ "./src/components/MapPageComponents/SearchBar.css":
/*!********************************************************!*\
  !*** ./src/components/MapPageComponents/SearchBar.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./SearchBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/MapPageComponents/SearchBar.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./SearchBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/MapPageComponents/SearchBar.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./SearchBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/MapPageComponents/SearchBar.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/MapPageComponents/SearchBar.js":
/*!*******************************************************!*\
  !*** ./src/components/MapPageComponents/SearchBar.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.css */ "./src/components/MapPageComponents/SearchBar.css");
/* harmony import */ var _SearchBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/MapPageComponents/SearchBar.js";


class SearchBar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    this.changeView = () => {
      const toggleBtn = document.getElementById('toggle-btn');
      console.log("Hit the change view function");

      if (this.state.view === 'map') {
        toggleBtn.innerHTML = "Map View";
        this.setState({
          view: 'list'
        }, () => console.log(this.state));
      } else if (this.state.view === 'list') {
        toggleBtn.innerHTML = "List View";
        this.setState({
          view: 'map'
        }, () => console.log(this.state));
      }

      return;
    };

    this.showDropdown = () => {
      //TODO -- write function that displays drop down of filters for searching
      console.log('Hit the showDropdown function');
      return;
    };

    this.state = {
      view: 'map'
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "margin-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "map-page-navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "filter-btn",
      onClick: this.showDropdown,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "map-searchbar",
      type: "text",
      placeholder: "Enter Location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "toggle-btn",
      id: "toggle-btn",
      onClick: this.changeView,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "List View")));
  }

}

/***/ }),

/***/ "./src/components/Navbar.css":
/*!***********************************!*\
  !*** ./src/components/Navbar.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navbar.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navbar.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Navbar.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.css */ "./src/components/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/Navbar.js";


class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ../assets/storage-share-logo-sm-blk-ppl.png */ "./src/assets/storage-share-logo-sm-blk-ppl.png"),
      alt: "Storage Share Logo",
      class: "logo-navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "map-search",
      placeholder: "Enter Location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "nav-link-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/login",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Log In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/RegisterPage",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Sign Up"))));
  }

}

/***/ }),

/***/ "./src/components/PaymentPage.js":
/*!***************************************!*\
  !*** ./src/components/PaymentPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaymentPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/PaymentPage.js";

class PaymentPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./src/components/PrivateRoute.js":
/*!****************************************!*\
  !*** ./src/components/PrivateRoute.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateRoute; });
/* harmony import */ var _Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/PrivateRoute.js";


function PrivateRoute(_ref) {
  let Component = _ref.component,
      authed = _ref.authed,
      rest = Object(_Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "authed"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: props => authed === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/components/RegisterPage.js":
/*!****************************************!*\
  !*** ./src/components/RegisterPage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/RegisterPage.js";

class RegisterPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "Register");
  }

}

/***/ }),

/***/ "./src/components/UserPage.js":
/*!************************************!*\
  !*** ./src/components/UserPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/components/UserPage.js";

class UserPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _redux_store_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux/store.js */ "./src/redux/store.js");
var _jsxFileName = "/Users/keonyoungpark/Projects/capstone/src/index.js";









const firebaseConfig = {
  apiKey: 'AIzaSyB1ZnrrT5vzhKfWz0y8uSD0kd3Mbz4rNo4',
  authDomain: 'sub-ducks-storage-share.firebaseapp.com',
  databaseURL: 'https://sub-ducks-storage-share.firebaseio.com',
  projectId: 'sub-ducks-storage-share',
  storageBucket: 'sub-ducks-storage-share.appspot.com',
  messagingSenderId: '628746360564',
  appId: '1:628746360564:web:8c88450e62839871'
};
firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a.initializeApp(firebaseConfig);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _redux_store_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_7__["unregister"]();

/***/ }),

/***/ "./src/redux/actions/userActionCreator.js":
/*!************************************************!*\
  !*** ./src/redux/actions/userActionCreator.js ***!
  \************************************************/
/*! exports provided: loginUser, logoutUser, getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony import */ var _types_userActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/userActionTypes */ "./src/redux/types/userActionTypes.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/redux/store.js");

 // TODO

function loginUser(userData) {
  console.log('loginuser');
  const action = {
    type: _types_userActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_USER"],
    payload: userData
  };
  _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
}
function logoutUser() {
  // some google function for loggedin state
  const action = {
    type: _types_userActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"],
    payload: 'data'
  };
  _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
}
function getUserData() {
  console.log('inside user action creator');
  const action = {
    type: _types_userActionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_USER_OBJECT"],
    payload: 'data'
  };
  _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
}

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _listingReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listingReducer */ "./src/redux/reducers/listingReducer.js");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userReducer */ "./src/redux/reducers/userReducer.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  listing: _listingReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _userReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/listingReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/listingReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listingReducer; });
/* harmony import */ var _Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_listingActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/listingActionTypes */ "./src/redux/types/listingActionTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const initialState = {
  listingsToDisplay: [],
  detailedListing: {
    address: '5678 Mountain Dr. Denver, CO 80283',
    description: 'Room in house with private access through sliding doors.  Access 24-7 with 24 hour notice.  Quiet entrance expected when accessing at night.',
    endDateAvailable: 10012020,
    latitude: 39.8,
    listingId: '7KijdAleXAT0wcy0BSH5',
    longitude: 105,
    ownerId: 'MIzq2OMB8JgBgC4KuzEk',
    photos: ['https://images.stockfreeimages.com/2508/sfixl/25089883.jpg', 'https://cdn.houseplansservices.com/product/nefd91a8br9itgmjos2jvtltac/w300x200.jpg?v=9'],
    price: 8,
    reservations: ['IOWgvh6cRORQhNzXqBFG'],
    reviews: ['8LUAKsZDk0yG9hdYWqf9'],
    size: 175,
    startDateAvailable: 10012019,
    tempControl: true,
    title: 'Room in House with Frequent Access',
    type: 'bedroom'
  }
};
function listingReducer(state = initialState, action) {
  const type = action.type,
        payload = action.payload; // console.log(type, payload);

  switch (type) {
    case _types_listingActionTypes__WEBPACK_IMPORTED_MODULE_1__["GET_N_LISTINGS"]:
      return _objectSpread({}, state, {
        listingsToDisplay: payload
      });

    case _types_listingActionTypes__WEBPACK_IMPORTED_MODULE_1__["GET_DETAILED_LISTING"]:
      return _objectSpread({}, state, {
        detailedListing: payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/userReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/userReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authReducer; });
/* harmony import */ var _Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types_userActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/userActionTypes */ "./src/redux/types/userActionTypes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_keonyoungpark_Projects_capstone_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const initialState = {
  userIsLoggedIn: false,
  googleAuthUser: {},
  user: {}
};
function authReducer(state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    // TODO
    case _types_userActionTypes__WEBPACK_IMPORTED_MODULE_1__["GET_USER_OBJECT"]:
      return _objectSpread({}, state, {
        user: payload.user
      });

    case _types_userActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOGIN_USER"]:
      return _objectSpread({}, state, {
        userIsLoggedIn: true,
        // we can use some payload if we want
        googleAuthUser: payload
      });

    case _types_userActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_USER"]:
      return {
        user: {},
        userIsLoggedIn: false,
        // we can use some payload if we want
        googleAuthUser: {}
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-immutable-state-invariant */ "./node_modules/redux-immutable-state-invariant/dist/index.js");
/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/index */ "./src/redux/reducers/index.js");


 // import our root combined reducer

 // define an immediately invoked function which will create our store

/* harmony default export */ __webpack_exports__["default"] = ((function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"]; // add support for Redux dev tools
  // return our store, passing in our root reducer, our initial state, our middleware

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_2___default()())));
})());

/***/ }),

/***/ "./src/redux/types/listingActionTypes.js":
/*!***********************************************!*\
  !*** ./src/redux/types/listingActionTypes.js ***!
  \***********************************************/
/*! exports provided: GET_N_LISTINGS, GET_DETAILED_LISTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_N_LISTINGS", function() { return GET_N_LISTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAILED_LISTING", function() { return GET_DETAILED_LISTING; });
const GET_N_LISTINGS = 'GET_N_LISTINGS';
const GET_DETAILED_LISTING = 'GET_DETAILED_LISTING';

/***/ }),

/***/ "./src/redux/types/userActionTypes.js":
/*!********************************************!*\
  !*** ./src/redux/types/userActionTypes.js ***!
  \********************************************/
/*! exports provided: GET_USER_OBJECT, LOGIN_USER, LOGOUT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_OBJECT", function() { return GET_USER_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
const GET_USER_OBJECT = "GET_USER_OBJECT";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/keonyoungpark/Projects/capstone/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/keonyoungpark/Projects/capstone/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map