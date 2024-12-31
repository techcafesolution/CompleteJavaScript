const { rejects } = require("assert")
const { resolve } = require("path")

let getResolved=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            resolve(console.log("This method is resolved...."));
        }, delay);
    });
};

let getRejected=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            rejects(new Error("This method has an error!!!"));
        }, delay);
    });
};

Promise.race([
    getResolved(2000),
    getRejected(3000)
])
.then(result=>{
    console.log("Value:: ", result);
})
.catch(error=>{
    console.log("Error:: ", error.message);
});