const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path")

let demoPromise=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            resolve("Demo Function resolve...");
        }, delay);
    });
};

let samplePromise=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            rejects(new Error("This also rejects..."));
        }, delay);
    });
};

let testPromise=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            rejects(new Error("Test also rejects..."));
        })
    })
}

Promise.any([
    demoPromise(2000),
    samplePromise(300),
    testPromise(400)
])
.then(result=>{
    console.log("Value:: ", result);
})
.catch(error=>{
    console.log("Error:: ", error.message);
});