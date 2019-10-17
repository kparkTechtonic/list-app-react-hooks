class Utils {

  static formatStr = (str) => {
    return str.toLowerCase().trim();
  }
  

  static bookify = (bookArr,upload) => {
    if (bookArr instanceof Array === false && bookArr instanceof Object) bookArr = [bookArr];
    //   console.log(
    //     bookArr.map(book => {if(!Validate.validateData(book)){return}else{return new Book(Validate.validateData(book))}}).filter(function(el){
    //       return el != undefined
    //     })
    // )
  
    var books = (bookArr.map(book => {
      // console.log(book)
        if(!Validate.validateData(book,upload)){
          return
        }
          // console.log(Validate.validateData(book.upload))
          return new Book(Validate.validateData(book,upload),upload)
        }))
        // console.log(books)
        books = books.filter(function(el){
          return el != undefined
        });
        // console.log(books)
        return books
      }



  // filters duplicates in an Array (shallow comparison)
  static unique = (array) => {
    return array.filter((e, i, arr) => arr.indexOf(e) === i);
  };


  static spacesToCamelCase = (str) => {
    const withSpaces = str.split(/(?=[A-Z]+)/).join(' ');
    const allWords = [];
    for (let i = 0; i < withSpaces.length; i++) {
      allWords.push(withSpaces[i]);
    };
    allWords[0] = allWords[0][0].toUpperCase() + allWords[0].slice(1, allWords[0].length);
    return allWords.join('');
  };


  static getFormData = (formId) => {
    let form = document.getElementById(formId)
    // hmm... 
  }


  // sorts an array of books or bookObj's on id
  static sortBooksById = (books) => {
    return books.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
  }


  // compares two Arrays of book Obj's to see if they are identical
  static compareWithCached = async (books, cached) => {
    if (!cached||cached.length === 0) {
      cached = await clientStore.bookShelf.toArray()
    if (books.length !== cached.length) return false;
    }
    for (let i = 0; i < books.length; i++) {
      var checkArr = []
      // deep equality check, see Ramda library docs
      // if (R.equals(books[i], cached[i]) === false) return false; //fixed to look for subset
      for (let j = 0; j < cached.length; j++) {
        if(R.equals(books[i], cached[j])){
          checkArr.push(cached[j]);
        }
      }

    }
      if(checkArr.length === cached.length){
      return true;
    }else{
      return false
    }
  }


  // verifies that a book has the required title and author fields
  static hasRequiredKeys = (book) => {
    if(book.title && book.author) return true
    return false;
  }

  // closes the "top" ore most recently opened modal by a click-away
  static closeTopModal = () => document.elementFromPoint(0, 0).click();



  // ADD ADDITIONAL METHODS AS YOU FEEL APPROPRIATE

  

    //https://bost.ocks.org/mike/shuffle/
  static shuffle = (array) => {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  static clearBookModal = ()=>{
    var tbody = document.getElementById("dataTable")    
    let num = tbody.childElementCount;
    let chilren = tbody.children;
    for (let i = 0; i < num; i++) {
      chilren[0].remove()     
    }
  }



}
