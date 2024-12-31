//1.
console.log("Hello world!!");
//2.
console.error("This is an error...");
//3.
console.warn("This is a warning!!!");
//4.
console.assert(10==1,"Assertion got failed!!!");
//5.
const userData1={
    Name: "Sanjeeb",
    Age: 26,
    City: "Bangalore",
    Country: "India"
}
const userData2={
    Name: "Ranjita",
    Age: 27,
    City: "Balasore",
    Country: "India"
}
console.log(userData1);
console.table(userData1);
console.table({userData1,userData2});
//5.
for(i=0;i<10;i++){
    console.count(i);
}
//6.
function sanjeeb(){
    console.trace();
}
sanjeeb();
//7.
console.log("%c I love JS coding!!!",
                "color:red; background-color:lightblue; border:solid");

//8.
console.clear();