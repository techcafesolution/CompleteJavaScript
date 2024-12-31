//1. Method Overloading is not possible in JS. If you do like this then it will invoke the latest update method.
function testOverloading(){
    console.log("Method is running with no argument...");
}

function testOverloading(num){
    console.log("Number is:: "+num);
}

function testOverloading(num, name){
    console.log("Number is:: "+num+" and name is:: "+name);
}

testOverloading();
testOverloading(125);
testOverloading(154,"Sanjeeb");
//2. Then how to perform methodOverloading
function launchBrowser(name,num,status){
    if(typeof(name)=='string'&&typeof(num)=='number'&&typeof(status)=='boolean'){
        console.log(`Name of Browser is:: ${name}\tNumber is:: ${num}\tStatus${status}`)
    }else if(typeof(name)=='string' && typeof(num)=='number'){
        console.log(`Name of Browser is:: ${name}\tNumber is::${num}`);
    }else{
        console.log("Only simple method is running...");
    }
}

launchBrowser("Chrome",112.45,false);
launchBrowser("Edge",115.45);
launchBrowser();