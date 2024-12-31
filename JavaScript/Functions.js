/*
In JS total 9 types of functions are present we will look them one by one.
*/
//1. Function declaration:
//Simple function
function print(){
    console.log("Welcome to JS");
}
print();
//Simple function with arguments
function println(name){
    console.log(name+"\n");
}
println("Sanjeeb");
//funtion with return type
function add(a,b){
    return a+b;
}
console.log(add(12,3));
//2. Function Expression: Annonymous function
const sub=function(a,b){
    return a-b;
}
console.log(sub(12,9));
//3. Arrow head function
const mul=(a,b)=>a*b;
console.log(mul(2,6));
//4. call back function
(function(){
    console.log("Hi this is Sanjeeb");
})();
//5. Annonymous with arrow head function
const demo=('a', 'b', (a,b)=>{
    return a/b;
});
console.log(demo(12,4));
//6. Constructor Function
const div=new Function('a','b','return a/b');
console.log(div(12,3));
//7. Return annonymous function
const num=[1,2,3,4,5];
let squre=num.map(function(a){
    return a*a;
});
console.log(squre);
let cube=num.map((e)=>{
   return e*e*e;
});
console.log(cube);
//8. Recursive function
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));
//9. Higher order function
function addition(a,b){
    return a+b;
}

function operate(functionName, a, b){
   return functionName(a,b);
}
console.log(operate(addition, 12, 23));
//Demo Test function
const test=('name',(name)=>{
   return name;
});
console.log(test("sanjeeb"));
const sample=('TestName',(TestName)=>{
     return TestName;
});

console.log(sample("MyTest"));
