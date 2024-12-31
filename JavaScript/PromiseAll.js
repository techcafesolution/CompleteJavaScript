const { rejects } = require("assert")
const { resolve } = require("path")

let function1=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            const data=[1,3,5,7,9];
            resolve(data);
        }, delay);
    });
};

let function2=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            const data=[2,4,6,8,10];
            resolve(data);
        }, delay);
    });
};

let function3=(delay)=>{
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            const data=[1.2, 2.3, 3.4, 4.5];
            resolve(data);
        }, delay);
    });
};

Promise.all([
    function1(2000),
    function2(3000),
    function3(4000)
])
.then(allfunction=>{
    console.log("All data are:: ", allfunction);
})
.catch(error=>{
    console.log("This is an error", error);
});

let method1=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            resolve(console.log("Method1 is running..."));
        }, delay);
    });
};

let method2=(delay)=>{
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            rejects(new Error("Method2 is rejected!!!"));
        }, delay);
    });
};

Promise.all([
    method1(2000),
    method2(3000)
])
.then(show=>{
    console.log("Method 1 is running...", show);
})
.catch(error=>{
    console.log("Method 2 is running...", error);
});
