//Callback function is a special type of function in JS which call another async function inside it untill unless a specif task will complete.
//1. Simple callback function.
function greet(name, callback){
    console.log("hello "+name);
    callback();
}

function display(){
    console.log("Welcome to JS...");
}

greet("Sanjeeb", display);
console.log("==================");
//2. Callback function with async function.
function demoCallback(name, msg, callback){
    console.log(msg);
    setTimeout(function(){
        callback(name);
    }, 3000);//Timeout for milli second...
}

function printName(name){
    console.log("Hello "+name);
}

demoCallback("Sanjeeb","How are you..", printName);
console.log("==================");
//3. Advance callback function
function fetchData(num,callback){
    setTimeout(function(){
        const user={
            1: {id: 1, name: "Sanjeeb"},
            2: {id: 2, name: "Ranjita"}
        };
        const getUser=user[num];
        if(user){
            callback(getUser,"No such user found!!");
        }else{
            callback(null,"No such user found!!");
        }
    }, 5000);
}

function displayUser(userId, errorMsg){
    if(userId==null){
        console.error("Error:: "+errorMsg);
    }else{
        console.log("User Present:: ",userId);
    }
}

fetchData(2, displayUser);