/*
step-1 : Start the coffee machine - 2 sec
step-2 : Grind the coffie beans - 1 sec
step-3 : Boiling the water -1.5 sec
step-4 : Add the grinded coffee into the cup - 0.5 sec
step-5 : Add the boiling water into the coffee- 0.5 sec
step-6 : Stir the coffee - 0.3 sec
step-7 : Coffee is ready - 0.1 sec
*/

function startingCoffeemachine(callback){
    setTimeout(()=>{
        console.log("Coffee machine is starting...");
        callback();
    }, 2000);
};

function grindCoffee(callback){
    setTimeout(()=>{
        console.log("Coffee beans are grinded...");
        callback();
    }, 1000);
};

function boiledWater(callback){
    setTimeout(()=>{
        console.log("Water is boiled...");
        callback();
    }, 1500);
};

function addCoffeeIntoCup(grindedCofee, callback){
    setTimeout(()=>{
        console.log("Added coffee into the cup...");
        callback(grindCoffee +" added into the cup...");
    }, 500);
};

function addWaterIntoCup(boilingWater, callback){
    setTimeout(()=>{
        console.log("Added boiled water into the cup..");
        callback("Addiing water into the cup "+boiledWater);
    }, 500);
};

function stirCoffee(coffee, water, callback){
    setTimeout(()=>{
        console.log("stired the mixture of water and coffee");
        callback(coffee+water+" cup of coffee");
    }, 300);
}

function ready(callback){
    console.log("Coffee is ready....");
    // setTimeout(()=>{
    //     callback("Finally coffee is ready...");
    // }, 100);
}

//Using all the call back hell function.
startingCoffeemachine((coffeemachineStatus)=>{
    grindCoffee((grindedCofee)=>{
        boiledWater((boilingWater)=>{
            addCoffeeIntoCup(grindedCofee, (addingCoffee)=>{
                addWaterIntoCup(boilingWater, (addingBoiledWater)=>{
                    stirCoffee(addingCoffee, addingBoiledWater, (finalCofee)=>{
                        ready(finalCofee);
                    })
                })
            })
        })
    })
})