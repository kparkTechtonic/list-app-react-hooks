window.discardedBooks = [];

class Validate {
    static validateData = (book,upload) => {
            if(Validate.validateSchema(book,upload) 
            &&
            Validate.secondaryConditions(book,upload)
            ){
                return book;
            }else{
                window.discardedBooks.push(book);
                return;
        }
    } 
    static validateSchema = (book,upload) => {
        let isValid = true;
        if(!upload){
        var schema = new Map(Object.entries({
            "author" : "string",
            "cover": "string",
            "id": "string",
            "numPages" : "number",
            "pubDate" : "string",
            "rating" : "number",
            "synopsis" : "string",
            "timeStamp": "number",
            "title" : "string"
        }));
        }else{
            var schema = new Map(Object.entries({
                "author" : "string",
                "cover": "string",
                "numPages" : "number",
                "pubDate" : "string",
                "rating" : "number",
                "synopsis" : "string",
                "title" : "string"
        }))
        }
        
        book = Validate.sanitize(book,upload)

        schema.forEach(function(value,key){
            if(!book.hasOwnProperty(key)||
                typeof (book[key]) !== value ||
                book[key] === null){
                    isValid = false;
                }})
        if(isValid){
            book.title = Validate.toBookCase(book.title);
            book.author = Validate.toAuthorCase(book.author);
        }
        return isValid
    }

    static sanitize = (book,upload)=>{
        var numbers = {
            "numPages" : "number",
            "rating" : "number",
        }
        if(!upload){
            numbers.timeStamp = "number"
        }


        for (let i = 0; i < Object.values(numbers).length; i++) {
            // console.log(book)
            if(/[^0-9]/.test(book[Object.keys(numbers)[i]])){
                return book
            }else if(typeof book[Object.keys(numbers)[i]] === "string"){
                book[Object.keys(numbers)[i]] = Number(book[Object.keys(numbers)[i]])
            }
            
        }

        if(book.pubDate != null||book.pubDate != undefined){
            book.pubDate=book.pubDate.toString()
        }

        if(!book.cover){
            book.cover = ""
        }
        if(!book.synopsis){
            book.synopsis = "(No synopsis was provided)"
        }

            return book 
    }

static secondaryConditions=(book)=>{
    var validity = true;
    if(// /[^1-9]/.test(book.numberOfPages) ||
        /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/.test(book.author)||
        /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/.test(book.publishDate)||
        /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/.test(book.synopsis)||
        /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$/.test(book.title) ||
        /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|^.*?(?=[\^#%&$\*<>\?\{\|\}]).*$/.test(book.cover) ||
        // // (book.hasOwnProperty("cover") && (typeof book.cover !== "string" || !(/\.(?:jpg|gif|png|tif)|^$/.test(book.cover))))||
        book.numPages<10||
        new Date(book.pubDate) == "Invalid Date"||
        new Date(book.update).getFullYear() == "" ||
        isNaN(new Date(book.pubDate).getFullYear())||
        new Date(book.pubDate) - new Date() > 0||
        !/.*[^ ].*/.test(book.title)
        ){
       return false 
    }
        return validity
}

static toBookCase = (string) => {
    var wordsNotToBeCapitalized = new Set(["and", "as", "as if", "as long as", "at", "but", "by", "even if", "for", "from", "if", "if only", "in", "into", "like", "near", "now that", "nor","of", "off", "on", "on top of", "once", "onto", "or", "out of", "over", "past", "so", "so that", "than", "that", "till", "to", "up", "upon", "with"," when", "yet", "the"]);
    let titleArray = string.split(" ");
    var outputArray = [];
    for (let i = 0; i < titleArray.length; i++) {
        if(!wordsNotToBeCapitalized.has(titleArray[i])){
            outputArray.push(titleArray[i].charAt(0).toUpperCase() + titleArray[i].toLowerCase().slice(1));
        }else{
            outputArray.push(titleArray[i].toLowerCase())
        }            
    }
    return outputArray.join(" ").charAt(0).toUpperCase() + outputArray.join(" ").slice(1)
}

static toAuthorCase = (string) => {
    let name = string.split(" ");
    var outputArray = [];
    for (let i = 0; i < name.length; i++) {
        if(name[i].length<=2){
            outputArray.push(name[i].toUpperCase());
        }else{
            outputArray.push(name[i].charAt(0).toUpperCase() + name[i].toLowerCase().slice(1));   
        }
    }
    return outputArray.join(" ").charAt(0).toUpperCase() + outputArray.join(" ").slice(1);
}

}
