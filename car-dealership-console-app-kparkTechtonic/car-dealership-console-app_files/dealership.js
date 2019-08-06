function Dealership(dealershipName,startingBalance){
  if(typeof(dealershipName) != "string"){
    dealershipName = "Please input a valid name";
    console.log("Please input a valid name");
  }
  if(typeof(startingBalance) != "number"){
    startingBalance = Number(0);
    console.log("Please input a valid number")
  }
    this.salesHistory = [];
    this.balance = startingBalance;
    this.carLot = [];
    this.dealershipName = dealershipName;
};

Dealership.prototype.addToLot = function(vehicleArr){
  for (let i = 0 ; i < vehicleArr.length ; i) {
    if (this.carLot.getCountByKeyValue("model",vehicleArr[i]["model"]) < 3) {
      this.balance -= vehicleArr[i]["costToDealership"];
      this.carLot.push(vehicleArr.splice(i,1)[0]);
      this.balance = Number(this.balance.toFixed(2));
    }else{
      i++
    }
  }
  preInitSeedData();
  return this.balance;
};

Dealership.prototype.sellVehicle = function (vin,buyerObj,discountPercentage) {
  for(let i=0 ; i < this.carLot.length; i++){
    if (vin === this.carLot[i].vin){
      if(this.carLot[i]["clean"]==false){
        this.wash(this.carLot[i]);
      }
      this.balance += (this.carLot[i]["price"]*1-discountPercentage/100);
      this.balance = Number(this.balance.toFixed(2));
      buyerObj.vehicle = this.carLot[i];
      this.salesHistory.push(buyerObj);
      this.carLot.splice(i,1);
      break;
    }
  }
  return this.balance;
};

Dealership.prototype.insuranceCheck = function (date) {
    var returnArr = [];
    if(date === undefined){
       date = new Date();
       for(i=0;i<this.carLot.length;i++)
       if(dateDiff["inDays"](date,this.carLot[i].maintenanceAndInsurance["lastInsured"])<-30){
        this.renewInsurance(this.carLot[i]);
        returnArr.push(this.carLot[i]);
       }
       return returnArr;
      }else{
        for(i=0;i<this.carLot.length;i++)
        if(dateDiff["inDays"](date,this.carLot[i].maintenanceAndInsurance["lastInsured"])<-30){
          returnArr.push(this.carLot[i]);
        }
        return returnArr;
      }
 };

Dealership.prototype.renewInsurance = function (vehicleObj) {
  vehicleObj.maintenanceAndInsurance.lastInsured = new Date;
  var insuranceCost = getRandomNum(100, 300);
  this.balance -= insuranceCost;
  this.balance = Number(this.balance.toFixed(2));
  vehicleObj.costToDealership += insuranceCost;
  vehicleObj.costToDealership = Number(vehicleObj.costToDealership.toFixed(2));
  return vehicleObj;
};


Dealership.prototype.maintenanceCheck = function (date) {
  returnArr = [];
  if(date === undefined){
     date = new Date();
     for(i=0;i<this.carLot.length;i++)
     if(dateDiff["inDays"](date,this.carLot[i].maintenanceAndInsurance["lastServiced"])<-90){
      this.maintenance(this.carLot[i]);
      returnArr.push(this.carLot[i]);
     }
     return returnArr;
    }else{
      for(i=0;i<this.carLot.length;i++)
      if(dateDiff["inDays"](date,this.carLot[i].maintenanceAndInsurance["lastServiced"])<-90){
        returnArr.push(this.carLot[i]);
      } 
      return returnArr;
    }


};

Dealership.prototype.maintenance = function (vehicleObj) {
vehicleObj.maintenanceAndInsurance.lastServiced = new Date;
var maintenanceCost = getRandomNum(100, 2000);
this.balance -= maintenanceCost;
this.balance = Number(this.balance.toFixed(2));
vehicleObj.costToDealership += maintenanceCost;
vehicleObj.costToDealership = Number(vehicleObj.costToDealership.toFixed(2));
return vehicleObj;
};

Dealership.prototype.refuel = function (vehicleObj) {
  vehicleObj.fuel = vehicleObj.fuelCapacity;
  return vehicleObj;
};

Dealership.prototype.salesPitch = function(vehicleObj){
  console.log("Welcome to " + this.dealershipName + " car dealership! Have you considered the " +vehicleObj["year"] + " " + vehicleObj["make"] + " " + vehicleObj["model"] + "? It is " + vehicleObj.color + " and only has " + vehicleObj.mileage + " miles!" )
};

Dealership.prototype.selectCarForTestDrive = function (make,model,year) {
  for(i=0;i<this.carLot.length;i++){
    if(make.toLowerCase == this.carLot[i].make.toLowerCase && model.toLowerCase == this.carLot[i].model.toLowerCase && year == this.carLot[i].year){
      this.carLot[i].checkFuel()?this.carLot[i].testDrive(3):this.carLot[i].refuel(this.carLot[i]);
    }
    return this.carLot;
  }
  return false;
};

Dealership.prototype.wash = function (vehicleObj) {
  if(vehicleObj.clean === false){
    vehicleObj.clean = true;
    vehicleObj.costToDealership += 10;
    this.balance -= 10;
    return true;
  }
  return false;
};
