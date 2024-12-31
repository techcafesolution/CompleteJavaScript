class Car{
    constructor(cName,price,color){
        this.cName=cName;
        this.price=price;
        this.color=color;
    }

    refuel(){
        console.log(`${this.cName} has been refueled....`);
    }
}

const c1=new Car("BMW", 120000, "Black");
console.log(c1.cName);
console.log(c1.price);
console.log(c1.color);
c1.refuel();
const c2=new Car("Honda", 220000, "Blue");
console.log(c2.cName);
console.log(c2.price);
console.log(c2.color);
c2.refuel();