function updateCard() {
  if(!Dealership1.carLot[0]){
    return;
  }
  for (var i = 0; i < 6; i++) {
    document.getElementById("make" + i).innerHTML =
      Dealership1.carLot[window.carasolArray[i]].make;
    document.getElementById("model" + i).innerHTML =
      Dealership1.carLot[window.carasolArray[i]].model;
    document.getElementById("year" + i).innerHTML =
      Dealership1.carLot[window.carasolArray[i]].year;
    document.getElementById("mileage" + i).innerHTML =
      Dealership1.carLot[window.carasolArray[i]].mileage + " miles";
    document.getElementById("cost" + i).innerHTML = "$" +
      Dealership1.carLot[window.carasolArray[i]].mileage;
    document.getElementById("image" + i).setAttribute("style","background-image: url(" + Dealership1.carLot[window.carasolArray[i]].image
    + ")");
  }
}

function showMoreRight() {
  if (carasolArray[5] >= Dealership1.carLot.length - 1) {
    return;
  } else if (carasolArray[5] < Dealership1.carLot.length - 6) {
    carasolArray = carasolArray.map(x => x + 6);
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
    return updateCard();
  } else {
    carasolArray = carasolArray.map(
      x => x + (Dealership1.carLot.length - carasolArray[5] - 1)
    );
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
    return updateCard();
  }
}

function showMoreLeft() {
  if (carasolArray[0] === 0) {
    return;
  } else if (carasolArray[0] > 0 + 6) {
    carasolArray = carasolArray.map(x => x - 6);
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
    return updateCard();
  } else {
    carasolArray = carasolArray.map(x => x - carasolArray[0]);
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
    return updateCard();
  }
}

function vinFill0() {
  if (document.getElementById("card0").className == "card" && Dealership1.carLot.length > 1) {
    document.getElementById("vin").value =
      Dealership1.carLot[carasolArray[0]].vin;
    document.getElementById("card0").setAttribute("class", "card1");
    for (var i = 0; i < 6; i++) {
      if (i != 0) {
        document.getElementById("card" + [i]).setAttribute("class", "card");
      }
    }
  } else {
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
  }
}

function vinFill1() {
  if (document.getElementById("card0").className == "card" && Dealership1.carLot.length > 2) {
    document.getElementById("vin").value =
      Dealership1.carLot[carasolArray[1]].vin;
    document.getElementById("card1").setAttribute("class", "card1");
    for (var i = 0; i < 6; i++) {
      if (i != 1) {
        document.getElementById("card" + [i]).setAttribute("class", "card");
      }
    }
  } else {
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
  }
}

function vinFill2() {
  if (document.getElementById("card0").className == "card" && Dealership1.carLot.length > 3) {
    document.getElementById("vin").value =
      Dealership1.carLot[carasolArray[2]].vin;
    document.getElementById("card2").setAttribute("class", "card1");
    for (var i = 0; i < 6; i++) {
      if (i != 2) {
        document.getElementById("card" + [i]).setAttribute("class", "card");
      }
    }
  } else {
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
  }
}

function vinFill3() {
  if (document.getElementById("card0").className == "card" && Dealership1.carLot.length > 4) {
    document.getElementById("vin").value =
      Dealership1.carLot[carasolArray[3]].vin;
    document.getElementById("card3").setAttribute("class", "card1");
    for (var i = 0; i < 6; i++) {
      if (i != 3) {
        document.getElementById("card" + [i]).setAttribute("class", "card");
      }
    }
  } else {
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
  }
}

function vinFill4() {
  if (document.getElementById("card0").className == "card" && Dealership1.carLot.length > 5) {
    document.getElementById("vin").value =
      Dealership1.carLot[carasolArray[4]].vin;
    document.getElementById("card4").setAttribute("class", "card1");
    for (var i = 0; i < 6; i++) {
      if (i != 4) {
        document.getElementById("card" + [i]).setAttribute("class", "card");
      }
    }
  } else {
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
  }
}

function vinFill5() {
  if (document.getElementById("card0").className == "card" && Dealership1.carLot.length > 6) {
    document.getElementById("vin").value =
      Dealership1.carLot[carasolArray[5]].vin;
    document.getElementById("card5").setAttribute("class", "card1");
    for (var i = 0; i < 6; i++) {
      if (i != 5) {
        document.getElementById("card" + [i]).setAttribute("class", "card");
      }
    }
  } else {
    for (var i = 0; i < 6; i++) {
      document.getElementById("card" + [i]).setAttribute("class", "card");
    }
  }
}
