class Truck extends Vehicle{
    constructor(obj){
        if(typeof obj !== "object"){
            return;
        }
        super(obj);
        this.type = 'truck';
        this.mpg = obj.mpg;
        this.fuelCapacity = 65;
        this.towingCapacity = obj.towingCapacity;
        this.wheels = 8;
    }
}
