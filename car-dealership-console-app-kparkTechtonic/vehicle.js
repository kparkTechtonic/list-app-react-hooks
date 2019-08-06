class Vehicle {
    constructor(obj){this.type = obj.type;
        this.vin = obj.vin;
        this.make = obj.make;
        this.model = obj.model;
        this.color = obj.color;
        this.year = obj.year;
        this.wheels = 4;
        this.mileage = obj.mileage;
        this.price = obj.price;
        this.fuel = obj.fuel;
        this.description = 'A ' + obj.color + ' ' + obj.make + ' ' + obj.model + ' with ' +  obj.mileage + ' miles';
        this.costToDealership = obj.costToDealership;
        this.clean = obj.clean;
        this.image = "./images/" + Math.floor(getRandomNum(0, 49)) +".jpeg";
        if (typeof(obj.maintenanceAndInsurance) !== "object"){
            return false;
        }
        this.maintenanceAndInsurance = {
            lastServiced: obj.maintenanceAndInsurance.lastServiced,
            lastInsured: obj.maintenanceAndInsurance.lastInsured
        }
    }
    checkFuel = () => {
        if (this.fuel>5){
            return true;
        }
        return false;
    };
    testDrive = (miles)=>{
        if (miles < 1 || miles > 5 || this.fuel < miles){
            return false;
        }
        this.mileage = this.mileage + miles;
            this.fuel = this.fuel - miles;
    };
};

