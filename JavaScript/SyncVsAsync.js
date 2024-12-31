const { copyFileSync } = require("fs");

//Sync--> This behaviour of JS show code line will execute one after another.
console.log("Start");
for(let i=0; i<=10;i++){
    console.log(i);
}
console.log("End");
//Async--> This behaviour shows code will not execute in a sequence manner because of callback function.
console.log("==================")
console.log("Start");
setTimeout(()=>{
    console.log("Hi This is a callback function...");
}, 5000);
console.log("End");