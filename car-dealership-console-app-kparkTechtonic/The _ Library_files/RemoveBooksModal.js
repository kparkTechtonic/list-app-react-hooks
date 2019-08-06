class RemoveBooksModal {

  static init = () => {
    RemoveBooksModal.bindEvents()
  }

  static bindEvents = () => {
    document.getElementById("remove-book-button").addEventListener("click",function(event){
      var input = [document.getElementById("title-remove-input").value,document.getElementById("author-remove-input").value]
      document.getElementById("title-remove-input").value = "";
      document.getElementById("author-remove-input").value = "";

    })
  }

  static toggleDeleteModal = (e) => {
    // TODO
  }
}