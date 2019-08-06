//event listener, listens to the server side event

var eventSource = new EventSource('http://127.0.0.1:5000/')

var data = []

eventSource.onmessage = e =>{
      if(JSON.parse(e.data).test){
        FrontendUI.handleCommentsPopulation()
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await axios.post('http://localhost:3001/comment/switch',{text:"general"})
    document.getElementsByClassName("card")[0].setAttribute("id","toggled")
    FrontendInit.setEventListener()
    FrontendUI.handleCommentsPopulation()
});

class FrontendInit{
    static setEventListener(){
        document.getElementById("text-input").addEventListener("click",event => {
            FrontendEvent.handleClick(event)
        })        
        document.getElementById("userIDButton").addEventListener("click",event => {
            FrontendEvent.handleNameChange(event)
        })
        document.getElementById("userIDInput").addEventListener("keyup",event =>{
            document.getElementById("userID").innerText = event.path[0].value
        })
        for (let i=0; i<document.getElementsByClassName("card").length;i++) {
            document.getElementsByClassName("card")[i].addEventListener("click",event => {
                FrontendEvent.handleChannelToggle(event)
            })
        }
    }
}


class FrontendUI{
    static handleCommentsPopulation = async () => {
        console.log("reloading page")
        var mainText = document.getElementById("main-text")
        var toFill = await axios.get('http://localhost:3001/comment/').then(r=>r.data)
        mainText.innerText = "";
        for (let i = 0; i < toFill.length; i++) {


            if(i>0){
            if(document.getElementById(String(document.getElementById("main-text").children.length-1)).attributes[1].value   === toFill[i].author)
            {

                var maindiv = document.createElement("div")
                maindiv.setAttribute("class","commentbox")
                maindiv.setAttribute("id",`${toFill[i]._id}`)
                var img = document.createElement("img")
                img.setAttribute("src","./portrait.png")
                img.setAttribute("class","fakeimg")
                maindiv.append(img)

                var buttondiv = document.createElement("div")
                var time = new Date(toFill[i].pubDate)
                buttondiv.setAttribute("id","buttonDiv")
                
                //=====report div, for the future
                // var buttons = document.createElement("button")
                // buttons.innerText = "Report!"
                // buttons.addEventListener("click",event=>{
                //     FrontendUI.handleReport(event)
                // })
                // buttondiv.append(buttons);
                //=====end report div.
    
                var divDropdown = document.createElement("div")
                divDropdown.setAttribute("class","dropdown")
    
                var buttons = document.createElement("button")
                buttons.innerText = "translate"
                buttons.setAttribute("class","dropbtn")
                divDropdown.append(buttons);
    
                var div = document.createElement("div")
                div.setAttribute("class","dropdown-content")
                var a = document.createElement("a")
                a.addEventListener("click",event=>{
                    FrontendEvent.handletranslate(event)
                })
                a.innerText = "Korean"
                div.append(a)
                var a = document.createElement("a")
                a.addEventListener("click",event=>{
                    FrontendEvent.handletranslate(event)
                })
                a.innerText = "Hindi"
                div.append(a)
                var a = document.createElement("a")
                a.addEventListener("click",event=>{
                    FrontendEvent.handletranslate(event)
                })
                a.innerText = "French"
                div.append(a)
                var a = document.createElement("a")
                a.addEventListener("click",event=>{
                    FrontendEvent.handletranslate(event)
                })
                a.innerText = "Russian"
                div.append(a)
                divDropdown.append(div)
                buttondiv.append(divDropdown)
                var buttons = document.createElement("button")
                buttons.innerText = "delete"
                buttons.addEventListener("click",event=>{
                    FrontendEvent.handleDelete(event)
                })
                buttondiv.append(buttons);
                var buttons = document.createElement("button")
                buttons.innerText = "edit"
                buttons.addEventListener("click",event=>{
                    FrontendUI.handleEdit(event)
                })
                buttondiv.append(buttons);
                var secondaryDiv = document.createElement("div")
                secondaryDiv.setAttribute("class","secondaryDivAlt")
                var p = document.createElement("p")
                p.setAttribute("class", "author")
                p.setAttribute("authorID", toFill[i].author )
                p.setAttribute("id", i )
                p.innerText = ``
                var q = document.createElement("span")
                q.setAttribute("class", "commentTime")
                q.innerText = ` ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
                p.append(q);
                var r = document.createElement("p")
                r.setAttribute("class", "commentText")
                r.innerText = `${toFill[i].comment}`
                secondaryDiv.append(r);
                secondaryDiv.append(p);
                maindiv.append(secondaryDiv)
                maindiv.append(buttondiv);
                mainText.append(maindiv);

                continue
            }}


            var maindiv = document.createElement("div")
            maindiv.setAttribute("class","commentbox")
            maindiv.setAttribute("id",`${toFill[i]._id}`)
            var img = document.createElement("img")
            img.setAttribute("src","./portrait.png")
            maindiv.append(img)
            var buttondiv = document.createElement("div")
            var time = new Date(toFill[i].pubDate)
            buttondiv.setAttribute("id","buttonDiv")
            
            //=====report div, for the future
            // var buttons = document.createElement("button")
            // buttons.innerText = "Report!"
            // buttons.addEventListener("click",event=>{
            //     FrontendUI.handleReport(event)
            // })
            // buttondiv.append(buttons);
            //=====end report div.

            var divDropdown = document.createElement("div")
            divDropdown.setAttribute("class","dropdown")

            var buttons = document.createElement("button")
            buttons.innerText = "translate"
            buttons.setAttribute("class","dropbtn")
            divDropdown.append(buttons);

            var div = document.createElement("div")
            div.setAttribute("class","dropdown-content")
            var a = document.createElement("a")
            a.addEventListener("click",event=>{
                FrontendEvent.handletranslate(event)
            })
            a.innerText = "Korean"
            div.append(a)
            var a = document.createElement("a")
            a.addEventListener("click",event=>{
                FrontendEvent.handletranslate(event)
            })
            a.innerText = "Hindi"
            div.append(a)
            var a = document.createElement("a")
            a.addEventListener("click",event=>{
                FrontendEvent.handletranslate(event)
            })
            a.innerText = "French"
            div.append(a)
            var a = document.createElement("a")
            a.addEventListener("click",event=>{
                FrontendEvent.handletranslate(event)
            })
            a.innerText = "Russian"
            div.append(a)
            divDropdown.append(div)
            buttondiv.append(divDropdown)
            var buttons = document.createElement("button")
            buttons.innerText = "delete"
            buttons.addEventListener("click",event=>{
                FrontendEvent.handleDelete(event)
            })
            buttondiv.append(buttons);
            var buttons = document.createElement("button")
            buttons.innerText = "edit"
            buttons.addEventListener("click",event=>{
                FrontendUI.handleEdit(event)
            })
            buttondiv.append(buttons);
            var secondaryDiv = document.createElement("div")
            secondaryDiv.setAttribute("class","secondaryDiv")
            var p = document.createElement("p")
            p.setAttribute("class", "author")
            p.setAttribute("authorID", toFill[i].author )
            p.setAttribute("id", i )
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

    static handleEdit = (event) => {
        var message = event.path[2].children[1].children[1]
        if(event.path[2].children[1].classList[0] === "secondaryDivAlt"){
            message = event.path[2].children[1].children[0]
        }

        if(event.path[2].children[1].classList[0] !== "secondaryDivAlt"){
        var author = event.path[2].children[1].children[0].attributes[1].value
        }
        else if(event.path[2].children[1].classList[0] === "secondaryDivAlt"){
            author = event.path[2].children[1].children[1].attributes[1].value
        }
        // console.log(event.path[2].children[1].children[1].attributes[1].value)
        // console.log(event.path[2].children[1].children[0].attributes[1].value)
        if(document.getElementById("userID").innerText!==author){
            alert("Should you edit someone elses post?")
            return
        }
        message.style.outline = '#f00 solid 2px';
        message.setAttribute("contenteditable","true")
        message.onfocus = function() {
            window.setTimeout(function() {
                var sel, range;
                if (window.getSelection && document.createRange) {
                    range = document.createRange();
                    range.selectNodeContents(message);
                    sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                } else if (document.body.createTextRange) {
                    range = document.body.createTextRange();
                    range.moveToElementText(message);
                    range.select();
                }
            }, 1);
        };
        message.focus()

            if(event.path[1].children.length>3){
                return
            }
            var submit = document.createElement("button")
            submit.setAttribute("id", "submitChange")
            submit.innerText = `submit`
            submit.addEventListener("click",event=>{
                FrontendEvent.submitEdit(event)
            })
            event.path[0].insertAdjacentElement("afterend",submit);

    }
}


class FrontendEvent{
    
    static handleClick =   (event) => {
        event.preventDefault()
        document.getElementById("text-input").setAttribute("disabled",true)
        var textToSend = {
            author: document.getElementById("userID").innerText,
            comment: event.path[1].children[0].value,
            pubDate: Number(new Date())
        }
        axios.post('http://localhost:3001/comment/',textToSend).then().finally(()=>{
            // setTimeout(FrontendUI.handleCommentsPopulation, 50);
       
            document.getElementById("text-input").removeAttribute("disabled")
        })
        event.path[1].children[0].value=""
        
        // FrontendUI.handleCommentsPopulation()            

        // document.getElementById("main-text").scrollTo(0,document.getElementById("main-text").offsetHeight)
    }

    static handleNameChange = (event) => {
        event.preventDefault()
        event.path[1].remove()
    }

    static handleChannelToggle = async(event) =>{

        await axios.post('http://localhost:3001/comment/switch',{text:event.path[0].innerText}).finally(()=>{
            axios.post('http://localhost:3001/comment/test',{count:-1})
        }).finally(()=>{
            for (let i=0; i < event.path[1].children.length; i++) {
                event.path[1].children[i].removeAttribute("id")
            }
            event.path[0].setAttribute("id","toggled")
        })
    }

    static handleDelete = async (event) => {
        // console.log(event.path[2].children[1].children[1].attributes[1].value)
        axios.post('http://localhost:3001/comment/test',{count:document.getElementById("main-text").childElementCount}-1)
        if(event.path[2].children[1].classList[0] !== "secondaryDivAlt"){
            var author = event.path[2].children[1].children[0].attributes[1].value
            }
            else if(event.path[2].children[1].classList[0] === "secondaryDivAlt"){
                author = event.path[2].children[1].children[1].attributes[1].value
            }

            if(document.getElementById("userID").innerText!==author){
                alert("Should you delete someone elses post?")
                return
            }

        var id = event.path[2].id;
        await axios.delete(`http://localhost:3001/comment/${id}`).then(r=>console.log(r.data)).finally(()=>{
            event.path[2].remove()
        })

    }

    static handletranslate = (e) => {
        var message = e.path[4].children[1].children[1].innerText
        console.log(e.path[4].children[1].children[0].innerText)
        console.log(e.path[4].children[1].classList[0])
        var language = e.path[0].innerText

        if(e.path[4].children[1].classList[0] === "secondaryDivAlt"){
            message = e.path[4].children[1].children[0].innerText
        }



        var dictionary = {"Korean":"ko",
                      "Hindi":"hi",
                      "French":"fr",
                      "Russian":"ru"}


        axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${dictionary[String(language)]}&dt=t&q=${message}`).then(r=>{
            if(e.path[4].children[1].classList[0] === "secondaryDivAlt"){
                console.log("hello")
                e.path[4].children[1].children[0].innerText = r.data[0][0][0]
            }else{
                e.path[4].children[1].children[1].innerText = r.data[0][0][0]
            }
            // message = r.data[0][0][0]
            // console.log(r.data[0][0][0])
            })
    }

    static submitEdit = async (event) =>{
        var message = event.path[2].children[1].children[1]
        if(event.path[2].children[1].classList[0] === "secondaryDivAlt"){
            message = event.path[2].children[1].children[0]
        }
        await axios.put('http://localhost:3001/comment/update',{
            id:event.path[2].id,
            text:message.innerText
        }).then(()=>{
            message.style.outline = "none";
            message.setAttribute("contenteditable","false")
            event.path[0].remove()
            document.getElementsByClassName("main-container")[0].children[1].firstElementChild.firstElementChild.focus()})
    }
}
