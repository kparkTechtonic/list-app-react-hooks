(function initializeDealership(){
    if(window.document.location.href.search(/\?/) != -1){
        var inputArr = (window.document.location.href.split(/\?dealershipName=|\&startingFunds=/)); 
        name = inputArr[1];
        moneys = Number(inputArr[2]);
        window.Dealership1 = new Dealership(name, moneys);
        return Promise.resolve(Dealership1);
    }
    return Promise.reject(false);
})().then(remoDom);


function remoDom(){
    var el = document.getElementById('mainDom');
    el.remove();
    addDom();
}

function addDom(){
    var body = document.querySelector("body");
    var div = document.createElement("div");
    body.appendChild(div).setAttribute("id","mainDom1");
    var el = document.getElementById('mainDom1');
    var ulCrea=document.createElement("ul");
    el.appendChild(ulCrea).setAttribute("id","ul");
    var ul = document.getElementById("ul");
    var li = document.createElement("li"); 
    li.innerHTML = "Your dealership name is: <b>" + Dealership1.dealershipName+"</b>";
    ul.appendChild(li).setAttribute("id","name") ;
    var li = document.createElement("li"); 
    li.innerHTML = "The number of cars sold is: <b>" + Dealership1.salesHistory.length+"</b>";
    ul.appendChild(li).setAttribute("id","history");
    var li = document.createElement("li"); 
    li.innerHTML = "The current balance is: <b>$" +Dealership1.balance.toLocaleString();
    ul.appendChild(li).setAttribute("id","balance") ;
    var li = document.createElement("li"); 
    li.innerHTML = "The number of cars in the car lot is: <b>" + Dealership1.carLot.length+"</b>";
    ul.appendChild(li).setAttribute("id","carLot");
    var div = document.createElement("div"); 
    el.appendChild(div).setAttribute("id","buttons");

    // updateButton();
    addCarButton();
    sellCarButton();
    insuranceButton();
    maintenanceButton();
}

// function updateButton(){
//     var el = document.getElementById('buttons');
//     var button = document.createElement("button");
//     el.appendChild(button).setAttribute("id","button1");
//     document.getElementById("button1").setAttribute("onclick", "update()")
//     document.getElementById("button1").innerHTML="Update!";
// }

function update(){
    document.getElementById("history").innerHTML="The number of cars sold is: <b>" + Dealership1.salesHistory.length+"</b>";
    document.getElementById("balance").innerHTML="The current balance is: <b>$" + Dealership1.balance.toLocaleString()+"</b>";
    document.getElementById("carLot").innerHTML="The number of cars in the car lot is: <b>" + Dealership1.carLot.length+"</b>";
}

function addCarButton(){
    var button = document.createElement("button");
    var addCars = document.getElementById("buttons");
    addCars.appendChild(button).setAttribute("id","button");
    document.getElementById("button").innerHTML="Add cars to the Lot";
    document.getElementById("button").setAttribute("onclick", "addCars()");
}

function addCars(){
    return (Dealership1.addToLot(readyToShip), update(), updateCard());
}
function insuranceButton(){
    var el = document.getElementById('buttons');
    var button = document.createElement("button");
    el.appendChild(button).setAttribute("id","button3");
    document.getElementById("button3").setAttribute("onclick", "insurance()");
    document.getElementById("button3").innerHTML="Renew insurance!";
}

function insurance(){
    return(Dealership1.insuranceCheck(),update());
}

function maintenanceButton(){
    var el = document.getElementById('buttons');
    var button = document.createElement("button");
    el.appendChild(button).setAttribute("id","button4");
    document.getElementById("button4").setAttribute("onclick", "maintenance()");
    document.getElementById("button4").innerHTML="Maintain Vehicles!";
}

function maintenance(){
    return(Dealership1.maintenanceCheck(),update());
}

function sellCarButton(){
    var el = document.getElementById('buttons');
    var div = document.createElement("div");
    el.appendChild(div).setAttribute("id","form");
    var ol = document.getElementById("form");
    var input = document.createElement("input");
    ol.appendChild(input).setAttribute("id","vin");
    document.getElementById("vin").setAttribute("type","text");
    document.getElementById("vin").setAttribute("name","vehicleVin");
    var button = document.createElement("button");
    ol.appendChild(button).setAttribute("id","button2");
    document.getElementById("button2").setAttribute("onclick", "sellCar()");
    document.getElementById("button2").innerHTML="sell car!";
};

function sellCar(){
if(carasolArray[0]===Dealership1.carLot.length-6){
    carasolArray = carasolArray.map(x=>x-1);
    for(var i = 0; i<6;i++){
        document.getElementById("card"+[i]).setAttribute("class","card");
    }
    return (Dealership1.sellVehicle(document.querySelector("input").value,{},12), update(),updateCard());
}else if(carasolArray.length < 6){
    for(i=0;i<6;i++){
        if(document.getElementById("vin").value==Dealership1.carLot[i].vin){
            carasolArray = carasolArray.map(x=>x-1);
            return (Dealership1.sellVehicle(document.querySelector("input").value,{},12), document.querySelector("input").value = "", update(),updateCard());
        }
    }
}else{
    for(var i = 0; i<6;i++){
        document.getElementById("card"+[i]).setAttribute("class","card")
    }
        return (Dealership1.sellVehicle(document.querySelector("input").value,{},12), document.querySelector("input").value = "", update(),updateCard());
    }
}





