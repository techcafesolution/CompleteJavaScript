const fs=require('fs');
const data=fs.readFileSync("DemoRead.txt","utf-8");
console.log(data);
console.log("Reading operation has been completes...");