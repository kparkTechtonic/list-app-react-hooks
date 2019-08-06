class Car extends Vehicle{
    constructor(obj){
        if(typeof obj !== "object"){
            return;
        }
        super(obj);
        this.type = 'car';
        this.mpg = obj.mpg;
        this.fuelCapacity = 16;
    }
}
