/*
There are 5 types of loop present in JS
*/
//1. for loop
for(let i=0; i<10; i++){
    console.log(i);
}
console.log("========================");
//2. while loop
let x=10;
while(x<20){
    console.log(x);
    x++;
}
console.log("========================");
//3. do-while loop
let y=1;
do{
    console.log(y);
    y++;
}while(y<=10)
    console.log("========================");
//4. for of loop
let colors=["blue","black","pink","green","red"];
for(const e of colors){
    console.log(e);
}
console.log("========================");
//or for loop
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
console.log("========================");
//5. for in loop
for(let cl in colors){
    console.log(cl);
}
console.log("========================");
for(let cl in colors){
    console.log(colors[cl]);
}
//object
let value={
    name:"Sanjeeb",
    age:31,
    state:"Odisha"
}
//Apply for in loop to retrive data
console.log("========================");
for(const e in value){
    console.log(e+" :: "+value[e]);
}