//There are different types object creation in JS
//1. Normal object creation : Object literal
const employees={
    eName:"Sanjeeb",
    eAge:31,
    eId:"3Tu889"
}

console.log(`Employee Name:: ${employees.eName}\nEmploee Age:: ${employees.eAge}\nEmployee ID:: ${employees.eId}`);

//2. Constructor Function
function Car(name, color, model){
    this.name=name,
    this.color=color,
    this.model=model
}
const c1=new Car("Farrari","Blue","100s");
const c2=new Car("Honda","Black","200F");
console.log(c1.name+" "+c1.color+" "+c1.model);
console.log(c2.name+" "+c2.color+" "+c2.model);

//3. Class Type Object creation
class Customer{
    constructor(name, items){
        this.name=name,
        this.items=items
    }

    addToCart(){
        console.log(`${this.items} added to cart...`);
    }
}
//Object creation with new keyword
let e1=new Customer("Sanjeeb", "iPhone");
console.log(e1.addToCart());
console.log(e1.name);

//4. Object.create()==> With some prototype
const employeePrototype={
    emlopeeInfo:function(){
        console.log(`hello employee name is ${this.name}`);
    }
}
const f1=Object.create(employeePrototype);
f1.name="Rajib",
f1.emlopeeInfo();
//5. Using Factory Function
function createDepartment(deptName, hod){
    return{
        deptName: deptName,
        hod:hod,
        getDepatInfo:function(){
            console.log(`hello, dept name is:: ${this.deptName}`);
        }
    }
}
const d1=createDepartment("Physics","H C Verma");
const d2=createDepartment("Mathemethics", "V C Serma");
console.log(d1.deptName+" and "+d1.hod);
d2.getDepatInfo();