const { rejects } = require("assert");
const { resolve } = require("path");

let getData=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            resolve(console.log("This method is working...."));
        }, delay);
    });
};

let getError=(delay)=>{
    return new Promise((resolve, rejects)=>{
       setTimeout(()=>{
        rejects(new Error("This method showing error"));
       }, delay);
    });
};

Promise.allSettled([
    getData(2000),
    getError(3000)
])
.then(results=>{
    results.forEach(result=>{
        if(result.status=='fulfilled'){
            console.log("Value:: ",result.value);
        }
       else if(result.status='rejected'){
        console.log("Error:: ",result.reason);
       }
    });
});