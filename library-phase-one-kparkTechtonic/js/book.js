class Book {
  constructor(bookObj,upload) {
    if(!upload){
      this.id = bookObj.id; // Primary Key as stored in db
      this.title = bookObj.title; // Required
      this.author = bookObj.author; // Required
      this.timeStamp = bookObj.timeStamp
      this.cover = bookObj.cover || '';
      this.synopsis = bookObj.synopsis;
      this.numPages = parseInt(bookObj.numPages);
      this.pubDate = new Date(bookObj.pubDate).getFullYear();
      this.rating = parseInt(bookObj.rating);
    }else{
      this.author = bookObj.author;
      this.cover = bookObj.cover;
      this.numPages = bookObj.numPages;
      this.pubDate = bookObj.pubDate;
      this.rating = bookObj.rating;
      this.synopsis = bookObj.synopsis;
      this.title = bookObj.title;
    }
  }
}