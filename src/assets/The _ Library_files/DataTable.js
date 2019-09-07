let pageNum = 1;
let resultsPerPage = 5;

class DataTable {

  

  static init = async(param) => {
    document.getElementById("prevPage").disabled = true
    DataTable._bindEvents();
    DataTable.fillBookModal();
  }


  static _bindEvents = () => {
    document.getElementById("nextPage").addEventListener("click",function(){
      DataTable.nextPage()
    })
    document.getElementById("prevPage").addEventListener("click",function(){
      DataTable.pageDown()
    })
  }


  static getBooksByPage = (pageNum, resultsPerPage) => {
    if (!pageNum){
      pageNum = 1
    }
    if(!resultsPerPage){
      resultsPerPage = 5
    }
    clientStore.bookShelf
  }



  static nextPage = async () => {
    let cachedBooks = Utils.sortBooksById(Utils.bookify(await clientStore.bookShelf.toArray()));
    if(Math.floor(cachedBooks.length/5)<=pageNum){
      document.getElementById("nextPage").disabled = true

    }
    if(Math.floor(cachedBooks.length/5)<pageNum){      

      return
    }
    document.getElementById("prevPage").disabled = false
    pageNum++
    DataTable.fillBookModal(1,pageNum,resultsPerPage)
  }


  static pageDown = () => {
    if (pageNum<=2){
      document.getElementById("prevPage").disabled = true
    }
    if(pageNum<=1){
      return
    }
    document.getElementById("nextPage").disabled = false
    pageNum--
    DataTable.fillBookModal(1,pageNum,resultsPerPage);

  }


  // static _stars = (rating) => {
  //   const starDiv = document.createElement('div');
  //   for (let i = 0; i < 5; i++) {
  //     const star = document.createElement('span');
  //     star.classList.add('fa', 'fa-star');
  //     if (i < rating) star.classList.add('checked');
  //     starDiv.appendChild(star);
  //   }
  //   return starDiv;
  // }

  static fillBookModal = async (value,pageNum,resultsPerPage) => {
    var booksToPopulate = await clientStore.bookShelf.orderBy('title').toArray();
    var tbody = document.getElementById("dataTable")
    const columns = ["title", "author", "timeStamp", "cover", "synopsis", "numPages", "pubDate", "rating"]
    // console.log(booksToPopulate)

    if (value) {
      let num = tbody.childElementCount;
      let chilren = tbody.children;
      for (let i = 0; i < num; i++) {
        chilren[0].remove()
      }
      if (value === 2) {
        booksToPopulate = Utils.shuffle(booksToPopulate)
        for (let i = 0; i < 1; i++) {
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
              img.setAttribute("style","pointer-events: none")
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
          row.addEventListener("click", function(event){
            EditBookModal.populateEditModal(event)
          })
          tbody.append(row);
        }
        return
      }
    }

    if (typeof value === "object") {
      booksToPopulate = value
      if(typeof value[0]=="string"){
        booksToPopulate = []
      }
    }

    // if(pageNum != undefined && resultsPerPage != undefined){
    //   booksToPopulate.splice(0,(pageNum-1)*resultsPerPage)
    // }

    if(pageNum != undefined && resultsPerPage != undefined){
      booksToPopulate = await clientStore.bookShelf.orderBy('title').offset((pageNum-1)*resultsPerPage).limit(5).toArray()
      // console.log(booksToPopulate)
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
      for (let i = 0; i < 1; i++) {
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
      }
    } else if (booksToPopulate.length > 3) {
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
            img.setAttribute("style","pointer-events: none")
            td.appendChild(img);
          }
          row.append(td);
        }
        var btn = document.createElement("button")
        btn.innerText = "Delete book"
        btn.addEventListener("click", function (event) {
          Library.deleteBookById(event)
        })
        row.setAttribute("bookID", booksToPopulate[i].id)
        row.setAttribute("data-toggle", "modal")
        row.setAttribute("data-target", "#editBookModal")
        row.addEventListener("click", function(event){
          EditBookModal.populateEditModal(event)
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
            img.setAttribute("style","pointer-events: none")
            td.appendChild(img);
          }
          row.setAttribute("bookID", booksToPopulate[i].id)
          row.setAttribute("data-toggle", "modal")
          row.setAttribute("data-target", "#editBookModal")
          row.addEventListener("click", function(event){
            EditBookModal.populateEditModal(event)
          })
          row.append(td);
        }
        var btn = document.createElement("button")
        btn.innerText = "Delete book"
        btn.addEventListener("click", function (event) {
          Library.deleteBookById(event)
        })
        row.append(btn);
        tbody.append(row);
      }

      
    }

  };
}
