const { rejects } = require("assert");
const { resolve } = require("path");

function checkEvenNumber(value, delay){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            if(value%2==0){
                resolve(value);
            }else{
                reject(new Error("Value is not an even number..."));
            }
        }, delay);

    });

}

checkEvenNumber(2, 2000)
        .then(result=>{
            console.log("Step-1: Promise chaining:: ", result);
            return checkEvenNumber(3, 3000);
        })
        .then(result=>{
            console.log("Step-2: Promise chain fulfilled:", result);
        })
        .catch(error=>{
            console.log("Promise chain rejects: ",error.message);
        });

