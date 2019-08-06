class ElectricVehicle extends Vehicle{
  constructor(obj){
      if(typeof obj !== "object"){
          return;
      }
      super(obj);
      this.mpc = obj.mpc;
      this.type = 'electricvehicle';
      this.fuelCapacity = 100;
  }
  checkFuel = () => {
    if(this.fuel <= 80){
      return false;
    }
    return true;
  };
}