class EditBookModal {

  static init = () => {
    EditBookModal.bindEventListeners()
    EditBookModal.toggleEditModal()
  }

  static bindEventListeners = () => {

    document.getElementById("submit-edit-button").addEventListener("click", function(event){
      EditBookModal.editBook(event)
    })
    }
  static editBook = (event) => {
    var bookobj = {
  "title" : document.getElementById("title-edit-input").value,
	"author" : document.getElementById("author-edit-input").value,
	"rating" : document.getElementById("rating-edit-input").value,
	"synopsis" : document.getElementById("synopsis-edit-input").value,
	"numPages" : document.getElementById("pages-edit-input").value,
	"pubDate" : document.getElementById("date-edit-input").value,
  "cover" : ""
    }

   var bookid = event.path[5].attributes[4].value
    console.log(bookid)
    axios.put(`${baseUrl}/library/update/${document.getElementById("editBookModal").attributes.dataid.value}`,bookobj).catch(e=>console.log(e))
  };

  static toggleEditModal = () => {
    $('#editBookModal').on('hide.bs.modal', function () {
      document.getElementById("title-edit-input").value = "";
      document.getElementById("author-edit-input").value = "";
      document.getElementById("rating-edit-input").value = "";
      document.getElementById("pages-edit-input").value = "";
      document.getElementById("date-edit-input").value = "";
      document.getElementById("synopsis-edit-input").value = "";
    })
  }


  static populateEditModal = (event) => {

    var chilren = event.path[1].children;

    if(chilren[6].innerText.length == 0 || chilren[6].innerText == "NaN"){
      var x = "0001"
    }else if(chilren[6].innerText.length ==1){
      var x = `000${chilren[6].innerText}`
    }else if(chilren[6].innerText.length ==2){
      var x = `00${chilren[6].innerText}`
    }else if(chilren[6].innerText.length ==3){
      var x = `0${chilren[6].innerText}`
    }else{
      var x = `${chilren[6].innerText}`
    }

    document.getElementById("title-edit-input").value = chilren[0].innerText;
    document.getElementById("author-edit-input").value = chilren[1].innerText;
    document.getElementById("rating-edit-input").value = chilren[7].innerText;
    document.getElementById("pages-edit-input").value = chilren[5].innerText;
    document.getElementById("date-edit-input").value = `${x}-01-01`
    document.getElementById("synopsis-edit-input").value = chilren[4].innerText;
    document.getElementById("editBookModal").setAttribute("dataid",event.path[1].attributes.bookid.value)
  }
}
