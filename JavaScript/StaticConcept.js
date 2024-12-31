class Car{
    static wheel=4;
    constructor(color,price,millage){
        this.color=color;
        this.price=price;
        this.millage=millage;
    }

    static run(){
        console.log(`Car is running with ${this.wheel} no of wheel.`);
    }

    carInformation(){
        console.log(`Color:: ${this.color}\t Price:: ${this.price}\t Millage:: ${this.millage}`)
    }
}

const car1=new Car("Honda",2300000,"White");
console.log("No of wheels are:: "+Car.wheel);
Car.run();
car1.carInformation();