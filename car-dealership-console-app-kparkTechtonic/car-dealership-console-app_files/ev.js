function ElectricVehicle(obj){
    Vehicle.call(this,obj);
    this.mpc = obj.mpc;
    this.type = 'electricvehicle';
    this.fuelCapacity = 100;
};
ElectricVehicle.prototype = Object.create(Vehicle.prototype);

ElectricVehicle.prototype.checkFuel = function(){ 
  if(this.fuel <= 80){
    return false;
  }
  return true;
};