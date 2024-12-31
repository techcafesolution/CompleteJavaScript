/*
Here we will see if, if-else, if-else-if ladder and nested loop;
*/
//1. if-else
let browser="chrome";
if(browser=="chrome"){
    console.log("Chrome is launching..");
}
if(browser=="edge"){
    console.log("Edge is lunching...");
}
if(browser=="firefox"){
    console.log("Firefox is launching...");
}
else{
    console.log("No browser is launching...");
}
//2. if-else-if
var browser1="chrome";
if(browser1=="chrome"){
    console.log("Chrome is launching..");
}else if(browser1=="edge"){
    console.log("Edge is lunching...");
}
else if(browser1=="firefox"){
    console.log("Firefox is launching...");
}
else{
    console.log("No browser is launching...");
}
//3. nested if-else
function checkGrade(grade){
    if(grade>=50&&grade<60){
        console.log("Your Grade is:: C");
    }else{
        if(grade>=60&&grade<70){
            console.log("Your Grade is:: B");
        }else{
            if(grade>=70&&grade<80){
                console.log("Your Grade is:: A");
            }else{
                if(grade>=80&&grade<90){
                    console.log("Your Grade is:: E");
                }else{
                    if(grade>=90){
                        console.log("Your Grade is:: O");
                    }
                }
            }
        }
    }
}
checkGrade(98);