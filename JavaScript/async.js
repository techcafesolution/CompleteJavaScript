const fs=require('fs');
fs.readFile("DemoRead.txt","utf-8", (error, data)=>{
    console.log(data);
});
console.log("Reading operation has been completed...");