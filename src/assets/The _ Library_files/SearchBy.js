class SearchBy {
  // const baseUrl = '${baseUrl}'

  static init = () => {
    SearchBy.bindEvents()
  }

  static bindEvents = () => {
    document.getElementsByClassName("btn btn-default navbar-btn")[1].addEventListener("click", function (event) {
      SearchBy.searchBooks(event)
    })

  }
  static searchBooks = async (event) => {
    document.getElementById("nextPage").disabled = true
    document.getElementById("prevPage").disabled = true
    Utils.clearBookModal();
    event.preventDefault();
    var input = [
      Validate.toBookCase
      (document.getElementById("title-search-input").value), 
    Validate.toAuthorCase
    (document.getElementById("author-search-input").value)];
    document.getElementById("title-search-input").value = "";
    document.getElementById("author-search-input").value = "";

    if (input[1] === "") {
      var booksToPopulate = await axios.get(`${baseUrl}/library/searchBy/?title=${input[0]}`).then(r => {
      // var booksToPopulate = await clientStore.bookShelf.where("title").startsWith(input[0]).toArray().then(r => {
        console.log("search successful")
        return r.data
      }).catch(e => console.log(e))
    } else if (input[0] === "") {
      var booksToPopulate = await axios.get(`${baseUrl}/library/searchBy/?author=${input[1]}`).then(r => {
      // var booksToPopulate = await clientStore.bookShelf.where("author").startsWith(input[1]).toArray().then(r => {
        console.log("search successful")
        return r.data    
      }).catch(e => console.log(e))
    } else {
      var booksToPopulate = await axios.get(`${baseUrl}/library/searchBy/?title=${input[0]}&author=${input[1]}`).then(r => {
        // var booksToPopulate = await clientStore.bookShelf.where("author").startsWith(input[1]).and("title").startsWith(input[0]).toArray().then(r => {
          console.log("search successful")
          return r.data
        }).catch(e => console.log(e))
    }
    var booksToPopulate = Utils.bookify(booksToPopulate);
    DataTable.fillBookModal(booksToPopulate)
  }
}