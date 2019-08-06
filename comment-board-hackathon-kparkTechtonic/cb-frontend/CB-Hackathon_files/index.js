

var eventSource = new EventSource('http://127.0.0.1:5000/')

var data = []
// eventSource.addEventListener("eventSource", e => console.log(e));

var update = Boolean("")
eventSource.onmessage = e =>{
      console.log(JSON.parse(e.data).test);
      if(JSON.parse(e.data).test){
        Frontend.handleCommentsPopulation()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    axios.post('http://localhost:3001/comment/test1',{text:"general"})
    document.getElementsByClassName("card")[0].setAttribute("id","toggled")
    Frontend.setEventListener()
    Frontend.handleCommentsPopulation()

});



class Frontend{
    static setEventListener(){
        document.getElementById("text-input").addEventListener("click",event => {
            Frontend.handleClick(event)
        })        
        document.getElementById("userIDButton").addEventListener("click",event => {
            Frontend.handleNameChange(event)
        })
        document.getElementById("userIDInput").addEventListener("keyup",event =>{
            document.getElementById("userID").innerText = event.path[0].value
        })
        for (let i=0; i<document.getElementsByClassName("card").length;i++) {
            document.getElementsByClassName("card")[i].addEventListener("click",event => {
                Frontend.handleChannelToggle(event)
            })
        }
    }
    static handleClick =   (event) => {
        event.preventDefault()
        document.getElementById("text-input").setAttribute("disabled",true)
        var textToSend = {
            author: document.getElementById("userID").innerText,
            comment: event.path[1].children[0].value,
            pubDate: Number(new Date())
        }
        axios.post('http://localhost:3001/comment/',textToSend).then().finally(()=>{
            setTimeout(Frontend.handleCommentsPopulation, 50);
       
            document.getElementById("text-input").removeAttribute("disabled")
        })
        event.path[1].children[0].value=""
        
        // Frontend.handleCommentsPopulation()            

        // document.getElementById("main-text").scrollTo(0,document.getElementById("main-text").offsetHeight)
    }
    static  handleCommentsPopulation = async () => {
        // var datacount = await axios.post('http://localhost:3001/comment/test',{count:document.getElementById("main-text").childElementCount}).then(r=>r.data)
        // if(datacount){
        //     console.log("same")
        //     return
        // }
        var mainText = document.getElementById("main-text")
        // console.log(await axios.get('http://localhost:3001/comment/test').then(r=>r.data))
        // console.log(document.getElementById("main-text").childElementCount)
        // console.log("Aaaa")
        var toFill = await axios.get('http://localhost:3001/comment/').then(r=>r.data)
        mainText.innerText = "";

        for (let i = 0; i < toFill.length; i++) {
            var maindiv = document.createElement("div")
            maindiv.setAttribute("class","commentbox")
            maindiv.setAttribute("id",`${toFill[i]._id}`)
            var img = document.createElement("img")
            img.setAttribute("src","./portrait.png")
            maindiv.append(img)
            var buttondiv = document.createElement("div")
            var time = new Date(toFill[i].pubDate)
            buttondiv.setAttribute("id","buttonDiv")
            // var buttons = document.createElement("button")
            // buttondiv.append(buttons);
            // var buttons = document.createElement("button")
            // buttondiv.append(buttons);
            // var buttons = document.createElement("button")
            // buttondiv.append(buttons);
            var buttons = document.createElement("button")
            buttons.innerText = "delete"
            buttons.addEventListener("click",event=>{
                Frontend.handleDelete(event)
            })
            buttondiv.append(buttons);
            var buttons = document.createElement("button")
            buttons.innerText = "edit"
            buttons.addEventListener("click",event=>{
                Frontend.handleEdit(event)
            })
            buttondiv.append(buttons);
            var secondaryDiv = document.createElement("div")
            secondaryDiv.setAttribute("class","secondaryDiv")
            var p = document.createElement("p")
            p.setAttribute("class", "author")
            p.innerText = `${toFill[i].author}`
            var q = document.createElement("span")
            q.setAttribute("class", "commentTime")
            q.innerText = ` ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
            p.append(q);
            var r = document.createElement("p")
            r.setAttribute("class", "commentText")
            r.innerText = `${toFill[i].comment}`
            secondaryDiv.append(p);
            secondaryDiv.append(r);
            maindiv.append(secondaryDiv)
            maindiv.append(buttondiv);
            mainText.append(maindiv);
            // returnString = returnString.concat("", `  ${toFill[i].author}, ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}
            // \n ${toFill[i].comment} \n\n`)

        }
        document.getElementById("main-text").scrollTo(0,document.getElementById("main-text").scrollHeight)
        axios.post('http://localhost:3001/comment/test',{count:document.getElementById("main-text").childElementCount})

    }

    static handleNameChange = (event) => {
        event.preventDefault()
        event.path[1].remove()
    }

    // static checkForChange = () => {

    // }
    static handleChannelToggle = (event) =>{
        for (let i=0; i < event.path[1].children.length; i++) {
            event.path[1].children[i].removeAttribute("id")
        }
        event.path[0].setAttribute("id","toggled")
        axios.post('http://localhost:3001/comment/test1',{text:event.path[0].innerText})
        document.getElementById("main-text").innerText = "";
        Frontend.handleCommentsPopulation()
    }

    static handleDelete = async (event) => {
        if(document.getElementById("userID").innerText!==event.path[2].children[1].children[0].innerHTML.split("<span")[0]){
            console.log("Should you delete someone elses post?")
            return
        }
        var id = event.path[2].id;
        await axios.delete(`http://localhost:3001/comment/${id}`).then(r=>console.log(r.data)).finally(()=>event.path[2].remove())
        document.getElementById("main-text").innerText = "";
        Frontend.handleCommentsPopulation()
    }

    static handleEdit = (event) => {
        if(document.getElementById("userID").innerText!==event.path[2].children[1].children[0].innerHTML.split("<span")[0]){
            console.log("Should you edit someone elses post?")
            return
        }
        event.path[2].children[1].children[1].style.outline = '#f00 solid 2px';
        event.path[2].children[1].children[1].setAttribute("contenteditable","true")
        event.path[2].children[1].children[1].onfocus = function() {
            window.setTimeout(function() {
                var sel, range;
                if (window.getSelection && document.createRange) {
                    range = document.createRange();
                    range.selectNodeContents(event.path[2].children[1].children[1]);
                    sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                } else if (document.body.createTextRange) {
                    range = document.body.createTextRange();
                    range.moveToElementText(event.path[2].children[1].children[1]);
                    range.select();
                }
            }, 1);
        };
        event.path[2].children[1].children[1].focus()

            if(event.path[1].children.length>2){
                return
            }
            var submit = document.createElement("button")
            submit.setAttribute("id", "submitChange")
            submit.innerText = `submit`
            submit.addEventListener("click",event=>{
                Frontend.submitEdit(event)
            })
            event.path[0].insertAdjacentElement("afterend",submit);
    }

    static submitEdit = async (event) =>{
        await axios.put('http://localhost:3001/comment/update',{
            id:event.path[2].id,
            text:event.path[2].children[1].children[1].innerText
        }).finally(()=>{
            event.path[2].children[1].children[1].style.outline = "none";
            event.path[2].children[1].children[1].setAttribute("contenteditable","false")
            event.path[0].remove()
        })

    }
}

