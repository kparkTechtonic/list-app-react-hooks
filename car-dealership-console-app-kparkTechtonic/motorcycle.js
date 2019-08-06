class Motorcycle extends Vehicle{
    constructor(obj){
        if(typeof obj !== "object"){
            return;
        }
        super(obj);
        this.mpg = obj.mpg;
        this.fuelCapacity = 10;
        this.wheels = 2;
        this.type = "motorcycle";
    }
}
