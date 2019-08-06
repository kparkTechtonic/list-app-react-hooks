(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!antd/dist/antd.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/antd/dist/antd.css"), "");

// Module
exports.push([module.i, "#components-layout-demo-fixed .logo {\n  width: 120px;\n  height: 31px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px 24px 16px 0;\n  float: left;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buttons.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/buttons.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".buttonContainer{\n    width:30vw;\n    height:55vh;\n    display:grid;\n    grid-template-columns: auto auto auto auto;\n    background-color:#d4d5d7;\n}\n\n.displayDiv{\n    width:30vw;\n\n    height:15vh;\n    background-color: #202020;\n}\n\n.buttonContainer div{\n    font-size:2rem;\n    text-align:center;\n    cursor: pointer;\n    border: 0.01rem solid black;\n    z-index:10;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n#button16{\n    grid-column:span 2;\n}\n\n#button0, #button1, #button2{\n    background-color:#c9cacc;\n}\n\n#button3, #button7, #button11, #button15, #button18{\n    background-color:#f88f0d;\n}\n\n\n\n.recentPress{\n    color:white;\n    font-size:2rem;\n    display:flex;\n    flex-direction:row;\n    justify-content: flex-end;\n    padding-top:5vh;\n    height:10vh;\n}\n\n.currentDisplay{\n    font-size:2rem;\n    color:white;\n    display:flex;\n    flex-direction:row;\n    justify-content: flex-end;\n    height:10vh;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/display.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/display.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buttons */ "./src/components/buttons.js");
/* harmony import */ var _components_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/display */ "./src/components/display.js");
/* harmony import */ var _components_Maindisplay_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Maindisplay.jsx */ "./src/components/Maindisplay.jsx");
/* harmony import */ var _components_About_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/About.jsx */ "./src/components/About.jsx");
/* harmony import */ var _components_calculatorDiv_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/calculatorDiv.jsx */ "./src/components/calculatorDiv.jsx");
var _jsxFileName = "/Users/keonyoungpark/Lecture/react/react-calculator-kparkTechtonic/calculator/src/App.js";









const Header = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Header,
      Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content,
      Footer = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Footer;

class App extends react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Header, {
      style: {
        position: 'fixed',
        zIndex: 1,
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      theme: "dark",
      mode: "horizontal",
      defaultSelectedKeys: ['1'],
      style: {
        lineHeight: '64px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/calculator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Calculator")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      key: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "About")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Content, {
      style: {
        padding: '0 50px',
        marginTop: 64
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], {
      style: {
        margin: '16px 0'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "List"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "App")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        background: '#fff',
        padding: 24,
        minHeight: 380,
        height: "80vh"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/",
      exact: true,
      component: _components_Maindisplay_jsx__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/calculator",
      component: _components_calculatorDiv_jsx__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/about",
      component: _components_About_jsx__WEBPACK_IMPORTED_MODULE_7__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Footer, {
      style: {
        textAlign: 'center'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Footer")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/About.jsx":
/*!**********************************!*\
  !*** ./src/components/About.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ "./src/components/calculator.jsx");

 // https://ant.design/components/list/

const About = match => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "About this page:");
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Maindisplay.jsx":
/*!****************************************!*\
  !*** ./src/components/Maindisplay.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ "./src/components/calculator.jsx");

 // https://ant.design/components/list/

const Maindisplay = match => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Welcome to the landing page");
};

/* harmony default export */ __webpack_exports__["default"] = (Maindisplay);

/***/ }),

/***/ "./src/components/buttons.css":
/*!************************************!*\
  !*** ./src/components/buttons.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./buttons.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buttons.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./buttons.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buttons.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./buttons.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buttons.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/buttons.js":
/*!***********************************!*\
  !*** ./src/components/buttons.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.css */ "./src/components/buttons.css");
/* harmony import */ var _buttons_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/keonyoungpark/Lecture/react/react-calculator-kparkTechtonic/calculator/src/components/buttons.js";



class buttons extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  componentDidMount() {// console.log(this)
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttonContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.buttons.map((element, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttons",
        id: "button" + index,
        name: element,
        key: index + element,
        onClick: this.props.handlePress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, element);
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (buttons);

/***/ }),

/***/ "./src/components/calculator.jsx":
/*!***************************************!*\
  !*** ./src/components/calculator.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/components/buttons.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/components/display.js");
var _jsxFileName = "/Users/keonyoungpark/Lecture/react/react-calculator-kparkTechtonic/calculator/src/components/calculator.jsx";




class Calculator extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    this.handlePress = e => {
      this.setState({
        currentDisplay: ""
      });
      if (this.state.pressHistory.length > 30) return;
      e.preventDefault();
      var operators = ["÷", "x", "-", "+", ""];
      var nonZeroNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; //logic for AC

      if (e.target.innerText === "AC") {
        this.setState({
          pressHistory: "",
          currentDisplay: ""
        }, () => {});
        return;
      } //can't press = after an operator


      if (!/[0-9]$/.test(this.state.pressHistory)) {
        if (e.target.innerText === "=") {
          return;
        }
      }

      if (/e-[0-9]*$/.test(this.state.pressHistory)) {
        if (nonZeroNums.indexOf(e.target.innerText) !== -1 || e.target.innerText === "0" || e.target.innerText === ".") return;
      }

      if (e.target.innerText === ".") {
        if (/[0-9]*\.{1}[0-9]*$/.test(this.state.pressHistory)) return;

        if (this.state.pressHistory === "") {
          this.setState({
            pressHistory: "0."
          });
          return;
        }
      }

      if (e.target.innerText === "%") {
        if (/e-[0-9]*$/.test(this.state.pressHistory)) return;

        if (/[0-9]*\.?[0-9]*$/.test(this.state.pressHistory)) {
          let returnNum = Number(this.state.pressHistory.match(/[0-9]*\.?[0-9]*$/)) / 100;
          let newPressHistory = this.state.pressHistory.replace(/[0-9]*\.?[0-9]*$/, returnNum);
          this.setState({
            pressHistory: newPressHistory
          });
          return;
        }
      }

      if (e.target.innerText === "+/-") {
        if (/^‐/.test(this.state.pressHistory)) {
          let newPressHistory = this.state.pressHistory.substring(1);
          this.setState({
            pressHistory: newPressHistory
          });
          return;
        }

        var firstNum = this.state.pressHistory.match(/[0-9]\.?/); // console.log(firstNum)

        let newPressHistory = this.state.pressHistory.replace(/[0-9]\.?/, "‐" + firstNum);
        this.setState({
          pressHistory: newPressHistory
        });
        return;
      } //can't press operators first


      if (operators.indexOf(e.target.innerText) !== -1) {
        if (this.state.pressHistory === "") {
          return;
        }
      } //logic to keep operators from pressing one after the other


      if (operators.indexOf(this.state.pressHistory[this.state.pressHistory.length - 1]) !== -1 || this.state.pressHistory === "") {
        if (operators.indexOf(e.target.innerText) !== -1) {
          // console.log("I'm an operator")
          let newPressHistory = this.state.pressHistory.slice(0, -1).concat(e.target.innerText);
          this.setState({
            pressHistory: newPressHistory
          }, () => {// console.log(this.state.pressHistory)
          });
          return;
        }
      } //logic for zero, don't want more than one zero.


      if (/^0$/.test(this.state.pressHistory)) {
        if (e.target.innerText === "0") {
          return;
        } else if (nonZeroNums.indexOf(e.target.innerText) !== -1) {
          let newPressHistory = this.state.pressHistory.slice(0, -1).concat(e.target.innerText);
          this.setState({
            pressHistory: newPressHistory
          }, () => {// console.log(this.state.pressHistory)
          });
          return;
        }
      }

      let newPressHistory = this.state.pressHistory.concat(e.target.innerText);
      this.setState({
        pressHistory: newPressHistory
      }, () => {// console.log(this.state.pressHistory)
      });
      var collinMath = {
        '+': function (x, y) {
          return x + y;
        },
        '-': function (x, y) {
          return x - y;
        },
        '÷': function (x, y) {
          return x / y;
        },
        'x': function (x, y) {
          return x * y;
        }
      };

      if (e.target.innerText === "=") {
        let numbers = this.state.pressHistory.split(/÷|x|-|\+/);
        let splitbyOperators = this.state.pressHistory.split(/‐?[0-9]*\.?[0-9]*/);
        let evaluateArr = [];
        let iterableNum = numbers.length + splitbyOperators.length; // console.log(numbers)
        // console.log(splitbyOperators)

        for (let i = 0; i < iterableNum; i++) {
          if (i % 2 === 0) {
            evaluateArr.push(splitbyOperators.shift());
          } else {
            evaluateArr.push(numbers.shift().replace(/^‐/, "-"));
          }
        }

        evaluateArr.pop();
        evaluateArr.shift(); // console.log(evaluateArr)
        // let firstOpIndex = evaluateArr.reIndexOf(/÷|x/)
        // console.log(firstOpIndex)

        const recurseMultDiv = () => {
          let firstOpIndex = evaluateArr.reIndexOf(/÷|x/); // console.log(firstOpIndex)

          if (firstOpIndex === -1) return;

          if (firstOpIndex) {
            var evaluatedNum = collinMath[evaluateArr[firstOpIndex]](Number(evaluateArr[firstOpIndex - 1]), Number(evaluateArr[firstOpIndex + 1]));
            evaluateArr.splice(firstOpIndex - 1, 3, evaluatedNum);
          } // console.log(evaluateArr)


          recurseMultDiv(); // currentDisplay
        };

        recurseMultDiv();

        const recurseSubAdd = () => {
          let firstOpIndex = evaluateArr.reIndexOf(/-|\+/); // console.log(firstOpIndex)

          if (firstOpIndex === -1) return;

          if (firstOpIndex) {
            var evaluatedNum = collinMath[evaluateArr[firstOpIndex]](Number(evaluateArr[firstOpIndex - 1]), Number(evaluateArr[firstOpIndex + 1]));
            evaluateArr.splice(firstOpIndex - 1, 3, evaluatedNum);
          } // console.log(evaluateArr)


          recurseSubAdd(); // currentDisplay
        };

        recurseSubAdd();
        let newCalculationHistory = Object.create(this.state.calculationHistory);
        newCalculationHistory.push(this.state.pressHistory);
        this.setState({
          pressHistory: ""
        });
        this.setState({
          calculationHistory: newCalculationHistory
        });
        this.setState({
          currentDisplay: evaluateArr[0]
        }); // console.log(this.state.calculationHistory)
      }
    };

    this.state = {
      buttons: ["AC", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="],
      pressHistory: "",
      calculationHistory: [],
      currentDisplay: ''
    };
    this.handlePress = this.handlePress.bind(this);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_display__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pressHistory: this.state.pressHistory,
      currentDisplay: this.state.currentDisplay,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      buttons: this.state.buttons,
      handlePress: this.handlePress,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ }),

/***/ "./src/components/calculatorDiv.jsx":
/*!******************************************!*\
  !*** ./src/components/calculatorDiv.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ "./src/components/calculator.jsx");
var _jsxFileName = "/Users/keonyoungpark/Lecture/react/react-calculator-kparkTechtonic/calculator/src/components/calculatorDiv.jsx";

 // https://ant.design/components/list/

const About = match => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calculator__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/display.css":
/*!************************************!*\
  !*** ./src/components/display.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./display.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/display.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./display.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/display.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./display.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/display.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/display.js":
/*!***********************************!*\
  !*** ./src/components/display.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _display_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.css */ "./src/components/display.css");
/* harmony import */ var _display_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_display_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/keonyoungpark/Lecture/react/react-calculator-kparkTechtonic/calculator/src/components/display.js";



class display extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "displayDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "recentPress",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, this.props.pressHistory), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "currentDisplay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, this.props.currentDisplay));
  }

}

display.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (display);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
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
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/keonyoungpark/Lecture/react/react-calculator-kparkTechtonic/calculator/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

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

__webpack_require__(/*! /Users/keonyoungpark/Lecture/react/react-calculator-kparkTechtonic/calculator/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/keonyoungpark/Lecture/react/react-calculator-kparkTechtonic/calculator/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map