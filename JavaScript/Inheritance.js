class Vehichle{
    constructor(type, model, wheel){
        this.type=type;
        this.model=model;
        this.wheel=wheel;
    }

    vInformation(){
        console.log(`Vehichle type is: ${this.type}\tVehicle model is: ${this.model}\t Wheel number is: ${this.wheel}`);
    }

}

class Truck extends Vehichle{
    constructor(type,model,wheel,price, color, status){
        super(type,model,wheel);
        this.price=price;
        this.color=color;
        this.status=status;
    }

    runningStatus(){
        console.log("Vehicle is running and status is:: "+this.status);
    }

    getMillage(){
        console.log("Millage is good...");
    }
}

const t1=new Truck("Truck","B57T",4,1200000,"Red","Active");
t1.getMillage();
t1.runningStatus();
t1.vInformation();