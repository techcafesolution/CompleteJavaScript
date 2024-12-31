//Here we will see all types of arraow functions
//1. Single parameter arrow functions
let mul=(a)=>a*a;
console.log(mul(5));
//Or
let square=b=>b*b;
console.log(square(7));
//2. Double parameter arrow functions
let add=(a,b)=>a+b;
console.log(add(3,7));
//3. Arrow function with no parameter
let print1=()=>"This is a valid message..."
console.log(print1());
//Or
let message=()=>{
    console.log("Hello this a program..")
}
message();
//4. Print multiple message throw arrow head message.
const employee={
    Name:"Sanjeeb",
    Age:31,
    Mob:8658506681
}
let data=()=>` Name of employee: ${employee.Name}\n Age:${employee.Age}\n MobileNumber: ${employee.Mob}`;
console.log(data());
console.log("=================");
//5. Arrow function with default value.
let greet=(UserName="Name", Age=0) => ` Your Name is:: ${UserName}\n Your Age is:: ${Age}`;
let g1=greet();
console.log(g1);
let g2=greet("Sanjeeb", 31)
console.log(g2);
//6. Rest parameter function
let additionNumbers=(...Number)=>Number.reduce((acc,num) => acc+num,0);
let total=additionNumbers(1,2,3,4,5);
console.log(total);
//Or
browserInfo=(name="Chrome", ...details)=>{
    console.log(`Browser Name is:: ${name}`);
    console.log(`Browser details are:: ${details}`);
};
console.log(browserInfo());
console.log(browserInfo("Firefox","Version:: 112.45","Support Automation Testing"));
//7. Find Max number
findMaxNumber=(a,b,c)=>{
   return Math.max(a,b,c);
}
console.log(findMaxNumber(34,23,56));