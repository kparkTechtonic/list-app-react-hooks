webpackHotUpdate("main",{

/***/ "./src/redux/actions/libraryActions.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/libraryActions.js ***!
  \*********************************************/
/*! exports provided: getAllBooks, addBooks, removeBooks, editBook, searchForBooks, suggestBook, deleteBookById, nextPage, previousPage, getBooksThisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBooks", function() { return getAllBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBooks", function() { return addBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBooks", function() { return removeBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editBook", function() { return editBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchForBooks", function() { return searchForBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suggestBook", function() { return suggestBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBookById", function() { return deleteBookById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPage", function() { return nextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousPage", function() { return previousPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBooksThisPage", function() { return getBooksThisPage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/redux/store.js");
/* harmony import */ var _util_defaultAxiosConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/defaultAxiosConfig */ "./src/util/defaultAxiosConfig.js");
/* harmony import */ var _util_helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/helperFunctions */ "./src/util/helperFunctions.js");
/* harmony import */ var _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/libraryActions */ "./src/redux/types/libraryActions.js");





function getAllBooks() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_util_defaultAxiosConfig__WEBPACK_IMPORTED_MODULE_2__["baseUrl"], "/library/").concat(_util_defaultAxiosConfig__WEBPACK_IMPORTED_MODULE_2__["numResults"])).then(res => {
    // make our fetch call and if the response comes back (success
    if (res.status === 200 && res.data && res.data.length) {
      console.log("SUCCESS! Got ".concat(res.data.length, " books.")); // sort our books and handle errors (similar to the original Book constructor)

      const allBooks = Object(_util_helperFunctions__WEBPACK_IMPORTED_MODULE_3__["sanitizeBookData"])(Object(_util_helperFunctions__WEBPACK_IMPORTED_MODULE_3__["sortBooksById"])(res.data)); // define an action with a type and payload to dispatch to our reducers

      const action = {
        type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["GET_ALL_BOOKS"],
        payload: allBooks
      }; // call store.dispatch, passing the action so the reducer can recieve it and update the state

      _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
    }
  }).catch(err => {
    console.log('Error getting all books: ', err); // define an action with a type and payload (empty Array here) to dispatch to our reducers

    const action = {
      type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["GET_ALL_BOOKS"],
      payload: []
    }; // call store.dispatch, passing the action so the reducer can recieve it and update the state

    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch({
      type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["OP_FAILED"],
      payload: err
    });
  });
}
function addBooks(bookArr) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_util_defaultAxiosConfig__WEBPACK_IMPORTED_MODULE_2__["baseUrl"], "/library/"), {
    books: bookArr
  }).then(res => {
    // make our fetch call and if the response comes back (success)
    if (res.status === 200 && res.data === 'successfully added books') {
      console.log("SUCCESS! Added ".concat(bookArr.length, " books.")); // sort our books and handle errors (similar to the original Book constructor)

      const addedBooks = Object(_util_helperFunctions__WEBPACK_IMPORTED_MODULE_3__["sanitizeBookData"])(Object(_util_helperFunctions__WEBPACK_IMPORTED_MODULE_3__["sortBooksById"])(bookArr));
      console.log(addedBooks); // TODO dispatch an action with a type ADD_BOOKS and a payload of addedBooks

      const action = {
        type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["ADD_BOOKS"],
        payload: addedBooks
      };
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
    }
  }).catch(err => {
    console.log('Error adding books: ', err);
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch({
      type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["OP_FAILED"],
      payload: err
    });
    const action = {
      type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["OP_FAILED"],
      payload: err.toString()
    };
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action); // TODO define an action with a type and payload to dispatch to our reducers (the payload here should probably be an empty Array)
    // TODO call store.dispatch, passing the action so the reducer can recieve it and update the state
  });
}
function removeBooks() {// TODO
}
function editBook() {// TODO
}
function searchForBooks(paramsObj) {
  const badResponse = {
    title: '',
    author: '',
    rating: '',
    numPages: '',
    pubDate: '',
    synopsis: 'no books found'
  };
  console.log('searchForBook called: ', paramsObj);

  if (!paramsObj.title && !paramsObj.author) {
    console.log('please input something');
    return;
  }

  if (!paramsObj.author) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://us-central1-library-backend-firebase.cloudfunctions.net/api/library/searchBy/?title=".concat(paramsObj.title) // params:{title:paramsObj.title, author:paramsObj.author}
    ).then(r => {
      if (!Object(_util_helperFunctions__WEBPACK_IMPORTED_MODULE_3__["sanitizeBookData"])(r.data)) {
        const action = {
          type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["SEARCH_FOR_BOOKS"],
          payload: [badResponse]
        };
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
      } else {
        const action = {
          type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["SEARCH_FOR_BOOKS"],
          payload: r.data
        };
        _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
      }
    }).catch(e => console.log(e));
  }

  if (!paramsObj.title) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://us-central1-library-backend-firebase.cloudfunctions.net/api/library/searchBy/?author=".concat(paramsObj.author)).then(r => {
      this.setState({
        bookShelf: []
      }, () => {
        if (!Object(_util_helperFunctions__WEBPACK_IMPORTED_MODULE_3__["sanitizeBookData"])(r.data)) {
          this.setState({
            bookShelf: [badResponse]
          });
        } else {
          this.setState({
            bookShelf: r.data
          });
        }
      });
    }).catch(e => console.log(e));
  } else {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://us-central1-library-backend-firebase.cloudfunctions.net/api/library/searchBy/?author=".concat(paramsObj.author, "&title=").concat(paramsObj.title)).then(r => {
      this.setState({
        bookShelf: []
      }, () => {
        if (!Object(_util_helperFunctions__WEBPACK_IMPORTED_MODULE_3__["sanitizeBookData"])(r.data)) {
          this.setState({
            bookShelf: [badResponse]
          });
        } else {
          this.setState({
            bookShelf: r.data
          });
        }
      });
    }).catch(e => console.log(e));
  }
}
function suggestBook() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://us-central1-library-backend-firebase.cloudfunctions.net/api/library/random').then(r => {
    if (!Object(_util_helperFunctions__WEBPACK_IMPORTED_MODULE_3__["sanitizeBookData"])(r.data)) {
      console.log('bad data, try again');
      return suggestBook();
    }

    const action = {
      type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["SUGGEST_BOOK"],
      payload: r.data
    };
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
  });
}
function deleteBookById() {// TODO
}
const nextPage = () => {
  const action = {
    type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["NEXT_PAGE"]
  };
  _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
};
const previousPage = () => {
  const action = {
    type: _types_libraryActions__WEBPACK_IMPORTED_MODULE_4__["PREVIOUS_PAGE"]
  };
  _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(action);
};
const getBooksThisPage = () => {// TODO
};

/***/ })

})
//# sourceMappingURL=main.7d523e0dc456e3bb9058.hot-update.js.map