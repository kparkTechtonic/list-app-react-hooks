function Truck(obj) {
    Vehicle.call(this, obj);
    this.type = 'truck';
    this.mpg = obj.mpg;
    this.fuelCapacity = 65;
    this.towingCapacity = obj.towingCapacity;
    this.wheels = 8;
};
Truck.prototype = Object.create(Vehicle.prototype);
