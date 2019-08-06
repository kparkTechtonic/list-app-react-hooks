# The Library
This assignment is the first part of a multi-phase project where we will create a **full-stack library application** which has a front-end built with **HTML** **CSS** and **VanillaJS**, incorporates **indexedDB** for client-side storage and utilizes a **REST API** to perform **CRUD** operations on books which come from a [Cloud Firestore](https://firebase.google.com/docs/firestore/) database that is stored on [GCP](https://cloud.google.com/).  In each phase of the project, we will build upon the functionality of the previous phase and the scope will expand.  The instructional team has done our best to modularize each phase so that the concepts covered line up well with topics which we've covered thus far during the classroom portion of the apprenticeship.  

## Phase-one
In this phase, we will be creating the front-end functionality of our library with **Vanilla JavaScript**.  We've given you some boilerplate **HTML** and **CSS** so that you can see the basic visual outline of the application.  You've also been given the basic outline for many of the Classes that we will be using and some of their methods.  

## Overview
Throughout this project, we will be working primarily with Classes which have [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) methods.  You can think of these classes as almost purely organizational, as their utility lies mostly in helping our human brains organize and modularize code.  The static methods on each class can be called without referencing an **instance** of the Class but rather from the Class itself.  Because of this, we will use the `this` keyword infrequently (although it'll still be helpful when working in the context of the Class where the method lives).

Take a minute to review the boilerplate **HTML** that we've given you and familiarize yourself with the overall layout.  A lot of what you'll be seeing are [Bootstrap](https://bootstrap.io/) modals, which we'll be using to interact with our Library.  We'll be using the [Axios HTTP Client](https://github.com/axios/axios) to interact with a **REST API** which will give us access to a database of book-like-objects (we'll convert them to Book **instances**) which we can perform **CRUD** operations on via the API's endpoints and our client-side caching mechanism. 

Review each of the files in the `/js` folder, as that will be where we spend the majority of our time during this phase.  You'll see a `Book` Class (one of the only classes with a `constructor` which will create instances) as well as `Library`, `DataTable`, `Utils` and some other Classes which we'll be working with.  **`engine.js`** is where most of our functionality begins, and you'll see that we call the `init()` static method on both our `Library` and `DataTable` Classes there to kick things off.  You'll also see that we initialize a new [DexieJS](https://dexie.org/) instance to serve as a client side storage mechanism for our books.  For now, we will have two [Tables](https://dexie.org/docs/Table/Table): **bookShelf** and **queuedBooks**.  


### To complete the front-end functionality of our `Library`, we'll be working with the following Classes: 
#### [Book](#Book-Class)
#### [Library](#Library-Class)
#### [DataTable](#Data-Table)
#### [AddBooksModal](#Add-Books-Modal)
#### [EditBookModal](#Edit-Book-Modal)
#### [RemoveBooksModal](#Remove-Books-Modal)
#### [SearchBy](#Search-For-Books-Modal)
#### [SuggestBookModal](#Suggest-Book-Modal)

It's important to understand that in order for this application to function properly, it isn't absolutely necessary that each of these Classes exist, and since most of them are only comprised of static methods, we will really only be working with instances in the case of `Book.js`.  However, we've created these Classes to help better modularize our codebase and make the distinction between different parts of the application. 

**`engine.js`** is the last script tag in our HTML and fires off `init()` static methods on the Library and DataTable classes when the DOM content is loaded.  It's also where we initialize some important global variables and create our client-side storage mechanism for our bookShelf.  As we complete the functionality of the aforementioned classes, will bind all applicable event listeners to provide functionality here

## Instructions
We have given you a gutted version of each Class that you will use to complete the functionality of your library.  In each class, there is an `init` static method which will either bind event listeners or setup some additional functionality.  Once you have completed each Class, invoke this `init` static method in **`engine.js`** and verify that each of the methods you created is working correctly. 

Error handling will be very important for this assignment.  Take time early on to ensure that your `Book` constructor and each of your **POST** methods is doing what you expect, the **REST API** you are interacting with will be modifying a shared database.  Garbage in, garbage out. 

## Book Class
The `Book` Class is the only class during this phase of the library that will have a constructor and create instances.  We will be using it to **bookify** (see `/Utils.bookify`) our book-like objects that we **`fetch`** from the database which our **REST API** links us to.  


### Constructor
```js 
class Book {
  constructor(bookObj) {
    this.id = bookObj.id; // Primary Key as stored in db
    this.title = bookObj.title; // Required
    this.author = bookObj.author; // Required
    this.timeStamp = bookObj.timeStamp
    this.cover = bookObj.cover || '';
    this.synopsis = bookObj.synopsis;
    this.numPages = parseInt(bookObj.numPages);
    this.pubDate = new Date(bookObj.publishDate).getFullYear();
    this.rating = parseInt(bookObj.rating);
  }
}
```

### Methods
None

_____
## Library Class
The `Library` Class is where most of the functionality in our application will come from.  This is primarily where we will interact with our **REST API** from and where we will **CREATE** **READ** **UPDATE** and **DELETE** books, both from our client-side storage mechanism and from the database via our **REST API**. 

### Constructor
None

### Methods
##### `bindCustomListeners`
This method is called immediately after the DOM is successfully parsed and should set-up our event listeners for the `Library` Class. When the user submits the search form (its `id` is `'search-form'`) the static `searchBy` method on this Class should be called.

##### `populateBookShelf`
This static method should get all books from the **bookShelf** which lives in the `clientStore` in **indexedDB** (see `engine.js`).  If there are books in the **bookShelf** it should return those books as an Array of `Book` objects, otherwise it should utilize the static `getAllBooks` method on the `Library` Class (which we will write momentarily) to get all of the books which are returned from hitting one of our **API Endpoints**.  This Array should be passed as an argument to the static `bulkPutToClientStorage` method on the `Library` Class so they can be added to our `clientStore`. 

##### `getAllBooks`
This static method should **`fetch`** all books from our **API Endpoints** and return them as an Array of book-like objects.  If no books are returned or the **`fetch`** fails, it should return an empty Array. 

##### `bulkPutToClientStorage`
This static method will take a booksArr parameter, which should be an Array of book-like objects.  It should first pass each book-like object throught the `Book` constructor and then sort the `Book` instances by `id` (if only we had some Utility method...).  Once sorted and bookified, the books should be added to the **bookShelf** in our `clientStore`.  If this is successfull, dispatch an `objUpdate` event to the document (see References). 

##### `fetchAndStoreUpdates`
You've been given a completed static method which will leverage your `getAllBooks` and `bulkPutToClientStorage` methods to fetch the books which are returned from our **API Endpoints** and update the **bookShelf** in our `clientStore`.  Anytime that you perform a **CREATE**, **DELETE**, or **UPDATE** to the database, you should utilize this method to ensure that your local **bookShelf** is up to date with what's currently in the database.  You can think of this as doing a `git pull` before a `git commit` and `git push` so that you ensure any remote (in this case Cloud Firestore which we are manipulating via our API) changes are reflected locally before making updates.  

##### `addBooks`
This static method should get all of the books in **queuedBooks** in our `clientStore` (we will populate this in the `AddBooksModal` Class) and **POST** them to our database.  Remember to utilize the static `fetchAndStoreUpdates` method here to keep your local **bookShelf** up to date with what's in the database our API interacts with. 

##### `editBook`
This static method will be triggered by a form-submission event which we listen for in our `EditBookModal` Class.  When it recieves this event, it should perform a **PUT**, editing the book in the database and updating the local **bookShelf**.  Remember, we are mutating data here so the `fetchAndStoreUpdates` method should be utilized. 

##### `suggestBook`
This static method should utilize the **GET** Endpoint which returns a random book from the database.  
Since we will be displaying this book via the `bookDisplayModal`, make sure to call the static `_makeTable` method on the `DataTable` class and pass it the book as an argument.  

##### `deleteBooksByTitle`
This static method will be triggered by a click or submit event which we will listen for in our `RemoveBooksModal` Class.  When it recieves the event, it should perform a **DELETE** via our **REST API**, passing the *title* and *author* fields from the form as a query string, which will be added to the request URL in your **`fetch`** request. We are mutating data here so the `fetchAndStoreUpdates` method should be utilized.

##### `deleteBookById`
This static method takes in an id and deletes the book with that `id` from our database and **bookShelf**.  We are mutating data here so the `fetchAndStoreUpdates` method should be utilized.

##### `searchBy`
This static method will be triggered by a form submission event which we listen for in our `SearchBy` Class.  When it recieves this event, it should perform a **GET** request, passing the *title* and *author* fields from the appropriate form as a query string.


_____
## Data Table
The `DataTable` Class is where we will handle pagination and most of our **UI** updates on the book display modal.  It's also where we will bind event listeners for deleting and editing books both in our database and in the **bookShelf** in our `clientStore`

### Constructor
None

### Methods
##### `_bindEvents`
Since the `DataTable` Class is where we will handle many of our **UI updates**, we will be binding quite a few events.  

First, let's listen for an `objUpdate` event to be dispatched to the document; when it occurs, let's call the static `_updateTable` method so our UI can update.  Let's also listen for a click on the buttons with `ids` of `nextPage` and `prevPage` and call the static `pageUp` and `pageDown` methods, respectively. Finally, let's listen for a click on the button with an `id` of `bookDisplayBtn` and call our static `_updateTable` method there as well. 

##### `getBooksByPage`
In this static method, we will handle pagination by returning the appropriate books from our **bookShelf** based on the `pageNum` and `resultsPerPage` parameters (global variables).  Since we've already sorted the our `Book` instances by `id` when we put them into our **bookShelf** we can use the [limit](https://dexie.org/docs/Table/Table.limit()) and [offset](https://dexie.org/docs/Table/Table.offset()) methods from [DexieJS](https://dexie.org/) to easily and quickly handle pagination.

This method should return an array of `Book` instances of length *n* where *n* === `resultsPerPage` and the correct number of books have been "skipped" based on the `pageNum`. 

##### `pageUp`
In this static method we should increment that global `pageNum` variable and dispatch an `objUpdate` event to the document (see References section), but only if the user is not currently on the last page.  If they are on the last page, go ahead and disable the `nextPage` button 

##### `pageDown`
Here we will decrement the `pageNum` variable and again dispatch an `objUpdate` event the the document.  Again, make sure that this button is either disabled or loses functionality if the user is currently on the first available page. 

##### `_updateTable`
Handles events which require that the displayed table of books be updated.

##### `_makeTable`
Takes in a `booksThisPage` param and updates the UI based on the passed in Array

##### `_createHead`
Creates the `th` element for the table with the appropriate values

##### `_createRow`
Takes in a `book` param and creates a `tr` element with child `td` elements with the correct content, based on the `book` parameter which it recieves. 

##### `_createDeleteButton`
Helper method to above, creates a delete button with a `data-bookid` attribute corresponding to it's `id` parameter (**hint hint...**)

##### `_stars`
Helper to create the stars display based on the books positive integer rating. 

_____
## Add Books Modal
This is where we will handle queueing books and adding them to our **queuedBooks**, where they are staged to for a **POST** via our **REST API**  

### Constructor
None

### Methods
##### `bindEventListeners`
This static method will listen for click events on the elements with ids: `#queue-book-button`, `#close-addBooksModal`, and `#addbooks-button` and trigger the static `AddBooksModal.queueBook`, `AddBooksModal.clearQueuedBooks`, and `Library.addBooks` methods, respectively.  We've also given two event listeners that will handle updating the UI when the user clicks away from the modal or closes the page.  

##### `queueBook`
This static method is triggered by a click on the element with the id of `queue-book-button` which we setup our listener for above, and recieves an event parameter.  When this event is recieved, we should get the form data from the associated form and add it to our **queuedBooks** Array in the `clientStore`.  Then, we should call the static `updateQueueCounter` method on the `AddBooksModal` Class (which we will write next) and then return all of the books in our **queuedBooks** Array.  

##### `updateQueueCounter`
This static method should set the `innerHTML` or `innerText` of the `queueCounter` to the number of books in our **queuedBooks** Array in our `clientStore`.

##### `clearQueuedBooks`
This static method should delete all books in our **queuedBooks** Array in our `clientStore` and call the static `updateQueueCounter` method (above)

##### `captureCloseModal`
This static method handles updating the UI on click-away.  It also calls the `clearQueuedBooks` method (above)


_____
## Edit Book Modal
This is where we will handle updating/editing books.  Here we will be interacting with the **PUT** [API Endpoint](https://www.getpostman.com/collections/b446217ca5dc2e2a4fe3). 

### Constructor
None

### Methods
##### `bindEventListeners`
This static method should listen for a click event on the element with an `id` of `submit-edit-button` and call the static `editBook` method on the `Library` Class

##### `toggleEditModal`
This static method will recieve an event, which we've actually already created the event listener for in the `DataTable`Class.  When it recieves this event, it should close the top-level modal to update the UI (see `Utils.closeTopModal`) and then get the book from the **bookShelf** in our `clientStore` with an `id` that corresponds to that book (hint: check the event target).  It should then call the static `populateEditModal` (below) with that book object so the form can be auto-populated for a nice UI. 

##### `populateEditModal`
This static method will recieve a `bookData` parameter, which we passed it above, and auto-populate the form's INPUT and TEXTAREA fields appropriately based on the data from the book object (ie: synopsis should be populated to the textarea with a name attribute of 'synopsis', etc.)


_____
## Remove Books Modal
Here we will handle the deletion of books via another bootstrap modal and two methods which both perform **DELETE** operations via our **REST API**

### Constructor
None

### Methods
##### `bindEvents`
Let's listen for a click event on the element with an `id` of `remove-book-button` and call the static `deleteBooksByTitle` method that lives on our `Library` Class when that event occurs.  

##### `toggleDeleteModal`
The event listener for this static method is setup in our `DataTable` Class.  When this method recieves an event, let's close the top modal to update our UI, and pop up a confirmation window, asking if the user actually wants to delete this book.  It might be good for them to see some info about the book they're about to delete here.  Once they have confirmed they want to delete it, let's perform a **DELETE** both from our **bookShelf** and via our **REST API**



Our last two classes are pretty straightforward, but to stay consistent in **`engine.js`** when we call our static `init` methods we've kept the same structure. 
_____
## SearchBy
For this class, we will simply listen for a 'submit' event on the element with an `id` of `search-form` and call the static `searchBy`1 method that lives on our `Library` Class. 

_____
## Suggest Book Modal
This class will simply listen for a single event, a 'click', on the element with an `id` of `suggestBookBtn` and call the static `suggestBook` method that lives on our `Library` Class. 


## References 
Feel free to use any reference material which we've given you thus far as well as research topics from any open-source documentation you have access to.  For ease of access, we've compiled some links and documentation we felt might be helpful for this assignment. 

#### API and Related
* [API Reference via Postman Collection (Import from Link)](https://www.getpostman.com/collections/b446217ca5dc2e2a4fe3)
* [API Reference SwaggerDoc](https://app.swaggerhub.com/apis-docs/bgoers/library-firebase/1.0.0#/)
* [Axios HTTP client](https://github.com/axios/axios)

#### JavaScript
* [Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
* [Dispatching Events](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent)
* [Event Constructor](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)

#### DexieJS and indexedDB
* [DexieJS Docs](https://dexie.org/)
* [DexieJS Table.offset()](https://dexie.org/docs/Table/Table.offset())
* [DexieJS Table.limit()](https://dexie.org/docs/Table/Table.limit())
