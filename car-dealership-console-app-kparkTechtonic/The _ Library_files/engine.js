
// globally define the baseUrl for where our cloud functions are deployed
// (This is the API endpoint you will interact with)
const baseUrl = 'https://us-central1-library-backend-firebase.cloudfunctions.net/api'


// create a client-side storage mechanism mechanism with indexedDB and DexieJS
const clientStore = new Dexie('clientStore')


// define our Dexie schema
clientStore.version(1).stores({
  // note that we do not auto-increment id here, we will map the id recieved from our API (ie: id === 1562680871120)
  bookShelf: "id,title,pubDate,author,rating,cover,numPages,synopsis",
  // this are books yet to be added to the db, so we should use an auto-incrementing id to handle them
  queuedBooks: "++id,title,pubDate,author,rating,cover,numPages,synopsis",
  versionTimeStamp:"",
})


// listen for the DOM to be loaded and call our static init methods for all applicable classes
window.addEventListener('DOMContentLoaded', async() => {
  DataTable.init();

  Library.init();
  AddBooksModal.init();
  SearchBy.init();
  RemoveBooksModal.init();
  EditBookModal.init()
  // add additional init() calls here
});


// SwaggerDoc Reference: https://app.swaggerhub.com/apis-docs/bgoers/library-node/1.0.0#/