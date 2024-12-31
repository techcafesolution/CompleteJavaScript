const { rejects } = require("assert");
const { resolve } = require("path");

function f1(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            const x=42;
            resolve(console.log(x));
        }, 2000);
    });
};

async function f2(){
    await f1();
};

f2();

async function getRandomNUmber(){
    return new Promise((resolve, rejects)=>{
        let ran=Math.random();
        setTimeout(()=>{
            if(ran>0.5){
                resolve(ran);
            }else{
                rejects(new Error("Number is too large"));
            }
        }, 3000);
    })
}

 async function setRandomNumber(){
    await getRandomNUmber()
   .then(result=>{
        console.log("Value:: ", result);
   })
   .catch(error=>{
        console.log("Error:: ", error);
   });
   
};

setRandomNumber();