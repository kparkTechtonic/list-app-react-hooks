const queueCounter = document.getElementById('add-books-counter');


class AddBooksModal {



  static init = () => {
    AddBooksModal.bindEventListeners()
    AddBooksModal.updateQueueCounter()
  }


  static bindEventListeners = () => {
    document.getElementById("queue-book-button").addEventListener("click", function (event){
      AddBooksModal.queueBook(event);
    })
    // TODO
    document.getElementById("add-books-button").addEventListener("click",function(event){
      AddBooksModal.addBooks(event);
    })

    // clears queueArray in indexedDB on page refresh and click-away from modal
    document.addEventListener('click', AddBooksModal.captureCloseModal);
    window.onbeforeunload = () => AddBooksModal.clearQueuedBooks();
  }



  static queueBook = async(event) => {
    if(!(document.getElementById("title-add-input").value)){
      return
    }
    var input = {
      "author": document.getElementById("author-add-input").value,
      "cover": document.getElementById("cover-add-input").value||"",
      "numPages": document.getElementById("pages-add-input").value,
      "pubDate": document.getElementById("date-add-input").value,
      "rating": document.getElementById("rating-add-input").value,
      "synopsis": document.getElementById("synopsis-add-input").value,
      "title": document.getElementById("title-add-input").value
    }


    document.getElementById("author-add-input").value = "";
    document.getElementById("pages-add-input").value = "";
    document.getElementById("date-add-input").value = "";
    document.getElementById("rating-add-input").value = "";
    document.getElementById("synopsis-add-input").value = "";
    document.getElementById("title-add-input").value = "";
    // debugger;
    input = Utils.bookify(input,true)[0]; 
    

    await clientStore.queuedBooks.put(input).then(r=>console.log(r)).catch(e=>{
      alert("Please fill out all the required form fields correctly.")
      console.log(e)
    })

    let cachedBooks = await clientStore.queuedBooks.toArray().then(r=>r).catch(e=>e);
    queueCounter.innerText = cachedBooks.length;
  }


  static updateQueueCounter = async () => {
    let cachedBooks = await clientStore.queuedBooks.toArray().then(r=>r).catch(e=>e);
    queueCounter.innerText = cachedBooks.length;
    }


  static clearQueuedBooks = () => {
    clientStore.queuedBooks.clear();
  }

  // captures a click outside of the modal and calls clearQueuedBooks()
  static captureCloseModal = (event) => {
    const { id, tabIndex } = event.target;
    if (id === 'addBooksModal' && tabIndex === -1) AddBooksModal.clearQueuedBooks()
  }

  static addBooks = async () => {
    event.preventDefault()
    var books = [];
    const booksToAdd = await clientStore.queuedBooks.toArray();
    for (let i = 0; i < booksToAdd.length; i++) {
      books.push(booksToAdd[i]);
    }
    books = {books};
    ;
    console.log(books)
    axios.post('https://us-central1-library-backend-firebase.cloudfunctions.net/api/library/', books)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    clientStore.queuedBooks.clear()
    clientStore.bookShelf.clear()

    await Library.fetchAndStoreUpdates()
  }
  
}