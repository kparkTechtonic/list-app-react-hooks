// window.axios = require('axios');

class Library {

  static init = async () => {
    Library.fetchAndStoreUpdates()
    Library.bindCustomListeners();
    DataTable.fillBookModal();
    Library.updateDeleteBookModal([]);
    Library.clearModals();
    Library.newHeadMain()
  }

  static bindCustomListeners = () => {
    document.getElementById("suggestBookBtn").addEventListener("click", function () {
      Library.suggestBook()
    })
    document.getElementById("bookDisplayBtn").addEventListener("click", function () {
      Library.showAllBooks()
    })
    document.getElementById("title-remove-input").addEventListener("keyup", function () {
      Library.updateDeleteTitle()
    })
    document.getElementById("author-remove-input").addEventListener("keyup", function () {
      Library.updateAuthorDelete()
    })
    document.getElementById("remove-book-button").addEventListener("click", function () {
      Library.deleteBooksByTitle()
    })
    document.getElementById("removeBooksBtn").addEventListener("click", function () {
      Library.fetchAndStoreUpdates()
    })

  };
  static clearModals = () => {
    $('#removeBooksModal').on('hidden.bs.modal', function (e) {
      document.getElementById("title-remove-input").value = "";
      document.getElementById("author-remove-input").value = "";
      Library.updateDeleteBookModal([]);
    })

    $('#addBooksModal').on('hidden.bs.modal', function (e) {
      document.getElementById("author-add-input").value = "";
      document.getElementById("pages-add-input").value = "";
      document.getElementById("date-add-input").value = "";
      document.getElementById("rating-add-input").value = "";
      document.getElementById("synopsis-add-input").value = "";
      document.getElementById("title-add-input").value = "";
    })

    $('#addBooksModal').on('hidden.bs.modal', function (e) {
      Utils.clearBookModal()
    })
  }





  static getAllBooks = async () => {
    // const num = await axios.get('${baseUrl}/library/totalCount')
    // .then(function(response){
    //   return response.data.numberOfDocs
    // })
    // .catch(function(error){
    //   console.log(error)
    // })
    // if (num>100){
    // var res = await axios.get(`${baseUrl}/library/${num}/?timeStamp=0`)    
    // // const res = await axios.get('../books.json') //replace this with the lines above it
    // .then(function (response) {
    //   return response.data
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
    // }else{
    // var res = await axios.get(`${baseUrl}/library/9999`)
      const res = await axios.get('../books.json') //replace this with the lines above it
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    return res

  }
  // };


  static bulkPutToClientStorage = async (booksArr) => {
    clientStore.bookShelf.clear();
    await clientStore.bookShelf.bulkPut(booksArr).then(r => console.log("Successfully added books")).catch(e => console.log(e))
  };

  static fetchAndStoreUpdates = async () => {
    let cachedBooks = Utils.sortBooksById(Utils.bookify(await clientStore.bookShelf.toArray()));
    let fetchedBooks = Utils.sortBooksById(Utils.bookify(await Library.getAllBooks()));
    if (!await Utils.compareWithCached(fetchedBooks, cachedBooks)) {
      await Library.bulkPutToClientStorage(fetchedBooks)
        .then(r => {
          console.log("books are added into the client database")
        })
        .catch(e => console.log(e));
      return fetchedBooks;
    }
    console.log("book records are the same, not updated")
    return cachedBooks;
  };


  static addBooks = () => {
    // TODO
  };




  static showAllBooks = () => {
    pageNum = 1;
    document.getElementById("nextPage").disabled = false
    DataTable.fillBookModal(1);
  };

  static suggestBook = () => {
    document.getElementById("nextPage").disabled = true
    document.getElementById("prevPage").disabled = true
    DataTable.fillBookModal(2);
  };


  static deleteBooksByTitle = async () => {
    var author = Validate.toAuthorCase(document.getElementById("author-remove-input").value)
    var title = Validate.toBookCase(document.getElementById("title-remove-input").value)

    if (title === "") {
      await axios.delete(`${baseUrl}/library/deleteBy/?author=${author}`).then(r => console.log(r)).catch(e => console.log(e))
      await clientStore.bookShelf.where("author").equals(author).delete().then(r => console.log(r)).catch(e => console.log(e))
      Library.updateDeleteTitle();

    } else if (author === "") {
      await axios.delete(`${baseUrl}/library/deleteBy/?title=${title}`).then(r => console.log(r)).catch(e => console.log(e))
      await clientStore.bookShelf.where("title").equals(title).delete().then(r => console.log(r)).catch(e => console.log(e))
      Library.updateAuthorDelete();

    } else {
      await axios.delete(`${baseUrl}/library/deleteBy/?title=${title}&author=${author}`).then(r => console.log(r)).catch(e => console.log(e))
      await clientStore.bookShelf.clear();
      Library.fetchAndStoreUpdates();
      Library.updateDeleteTitle();
      Library.updateAuthorDelete();

    }
  };



  static deleteBookById = async (event) => {
    event.stopPropagation()
    var bookToDeleteID = event.path[1].attributes.bookid.value
    // if (confirm('Are you sure you want to delete this book from the database?')) {
    //   await clientStore.bookShelf.delete(bookToDeleteID)
    //     .then(() => {
    //       console.log(`you just deleted a book!`)
    //       axios.delete(`${baseUrl}/library/deleteById/${bookToDeleteID}`).then(r => console.log(r)).then(e => console.log(e))
    //       clientStore.bookShelf.delete(bookToDeleteID).then(r => console.log(r)).then(e => console.log(e))
    //       DataTable.fillBookModal(1);
    //       Library.updateDeleteTitle();
    //     })
    //     .catch(err => console.log("book was not deleted, due to this error: " + err))
    // } else {
    //   return
    // }
    if (confirm('Are you sure you want to delete this book from the database?')) {
      await axios.delete(`${baseUrl}/library/deleteById/${bookToDeleteID}`)
        .then(() => {
          console.log(`you just deleted a book!`)
          clientStore.bookShelf.delete(bookToDeleteID)
            .then(r => console.log(r))
            .catch(e => console.log("could not delete from google firestore"));
          DataTable.fillBookModal(1);
          Library.updateDeleteTitle();
        })
        .catch(err => console.log("book was not deleted, due to this error: " + err))
    } else {
      return
    }
  };



  static searchBy = (e) => {
    // TODO
  };

  static updateDeleteTitle = async () => {
    if ((document.getElementById("title-remove-input").value) == "") { var booksToPopulate = [] } else {
      var x = clientStore.bookShelf.where("title").startsWith(Validate.toBookCase(document.getElementById("title-remove-input").value))
      var booksToPopulate = await x.toArray().then(r => r).catch(e => e)
    }
    Library.updateDeleteBookModal(booksToPopulate);
  }

  static updateAuthorDelete = async () => {
    if ((document.getElementById("author-remove-input").value) == "") { var booksToPopulate = [] } else {
      var x = clientStore.bookShelf.where("author").startsWith(Validate.toBookCase(document.getElementById("author-remove-input").value))
      var booksToPopulate = await x.toArray().then(r => r).catch(e => e)
    }
    Library.updateDeleteBookModal(booksToPopulate);
  }

  static updateDeleteBookModal = (booksToPopulate) => {
    const columns = ["title", "author", "timeStamp", "cover", "synopsis", "numPages", "pubDate", "rating"]
    var tbody = document.getElementById("deleteDataTable")

    let num = tbody.childElementCount;
    let chilren = tbody.children;
    for (let i = 0; i < num; i++) {
      chilren[0].remove()
    }

    if (booksToPopulate.length < 1) {
      booksToPopulate = [{
        "author": " ",
        "cover": " ",
        "id": " ",
        "numPages": " ",
        "pubDate": " ",
        "rating": " ",
        "synopsis": " \n\n\n no books to display \n\n\n\n   ",
        "timeStamp": "",
        "title": " "
      }]
      for (let i = 0; i < booksToPopulate.length; i++) {
        var row = document.createElement("tr");
        row.setAttribute("id", booksToPopulate[i].id)
        for (let j = 0; j < columns.length; j++) {
          var td = document.createElement("td");
          td.innerText = booksToPopulate[i][columns[j]]
          row.append(td);
        }
        var td = document.createElement("td");
        row.append(td);
        tbody.append(row);
        return
      }
    }
    if (booksToPopulate.length > 3) {
      for (let i = 0; i < 3; i++) {
        var row = document.createElement("tr");
        row.setAttribute("id", booksToPopulate[i].id)
        for (let j = 0; j < columns.length; j++) {
          var td = document.createElement("td");
          if (!(columns[j] == "cover")) {
            td.innerText = booksToPopulate[i][columns[j]]
          } else {
            const img = document.createElement('img');
            img.classList.add('tableImg');
            img.setAttribute('src', booksToPopulate["cover"]) || img.setAttribute('src', './assets/covers/generic_cover.png');
            img.setAttribute("style", "pointer-events: none")

            td.appendChild(img);

          }
          row.append(td);
        }

        row.setAttribute("bookID", booksToPopulate[i].id)
        row.setAttribute("data-toggle", "modal")
        row.setAttribute("data-target", "#editBookModal")
        row.addEventListener("click", function (event) {
          EditBookModal.populateEditModal(event)
        })
        var btn = document.createElement("button")
        btn.innerText = "Delete book"
        btn.addEventListener("click", function (event) {
          Library.deleteBookById(event)
        })
        row.append(btn);
        tbody.append(row);
      }
    } else {
      for (let i = 0; i < booksToPopulate.length; i++) {
        var row = document.createElement("tr");
        row.setAttribute("id", booksToPopulate[i].id)
        for (let j = 0; j < columns.length; j++) {
          var td = document.createElement("td");
          if (!(columns[j] == "cover")) {
            td.innerText = booksToPopulate[i][columns[j]]
          } else {
            const img = document.createElement('img');
            img.classList.add('tableImg');
            img.setAttribute('src', booksToPopulate["cover"]) || img.setAttribute('src', './assets/covers/generic_cover.png');
            img.setAttribute("style", "pointer-events: none")

            td.appendChild(img);

          }

          row.append(td);
        }
        var btn = document.createElement("button")
        btn.innerText = "Delete book"
        btn.addEventListener("click", function (event) {
          Library.deleteBookById(event)
        })
        row.append(btn);
        row.setAttribute("bookID", booksToPopulate[i].id)
        row.setAttribute("data-toggle", "modal")
        row.setAttribute("data-target", "#editBookModal")
        row.addEventListener("click", function (event) {
          EditBookModal.populateEditModal(event)
        })
        tbody.append(row);
      }
    }
  }

  static newHeadMain = () => {
    const columns = ["Title", "Author", "Timestamp", "Cover", "Synopsis", "Num Pages", "Pub Date", "Rating", "Delete Book"]
    var thead = document.getElementById("dataTableHead")

    var row = document.createElement("tr");
    for (let i = 0; i < columns.length; i++) {
      var th = document.createElement("th")
      th.innerHTML = columns[i]
      row.appendChild(th)
    }
    thead.appendChild(row)

    thead = document.getElementById("deleteDataTableHead")
    var row = document.createElement("tr");
    for (let i = 0; i < columns.length; i++) {
      var th = document.createElement("th")
      th.innerHTML = columns[i]
      row.appendChild(th)
    }
    thead.appendChild(row)
  }
};

