//Total 3 types of variable present in Js
/*
Those are var, let and const
1. var--> This is older type of variable use in JS
-->we can decalre var without initialization without any data types with any literal
-->We can initialize var at the time of declaration.
-->We can declare same variable multiple times.
-->We can declare var with local and global scope.
-->It properly follows local and global scope.
//2. let
-->We can declare let variabe without initialization.
-->we can initialize variable at the time of declaration.
-->We can't be declare same variable multiple time.
-->We can re-initialize the cariable.
-->It properly follows local and global scope.
//3. const
-->We must have to initialize const variable at the time of declaration.
-->We can't be re-initialize or change the assigned value later.
-->It properly follows local and global scope.
*/
console.log("Welcome to JS..")
//1.var
var a;
console.log(a);
a=12;
console.log(a);
var b=13;
console.log(b);
var b=24;
console.log(b);
var num=300;
console.log(num);
function display(){
    var num=122;
    console.log(num);
}
display();
console.log(num);
//2. let
let x;
console.log(x);
x=34;
console.log(x);
x=54;
console.log(x);
//let x=50;
let y=50;
console.log(y);
function pop(){
    let y=112;
    console.log(y);
}
pop();
console.log(y);
//3.const
const m=13;
console.log(m);
// m=25;
// console.log(m);
function allow(){
    const m=25;
    console.log(m);
}
allow();
console.log(m);
