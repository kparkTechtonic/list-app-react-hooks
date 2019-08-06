function Motorcycle(obj){
    Vehicle.call(this,obj);
    this.mpg = obj.mpg;
    this.fuelCapacity = 10;
    this.wheels = 2;
    this.type = "motorcycle";
};

Motorcycle.prototype = Object.create(Vehicle.prototype);
