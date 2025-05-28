//PROMISES
// let firstPromise = new Promise((resolve,reject)=>{
//     // console.log("Dhruv");
//     // resolve(1001);   //fulfilled
//     //reject(new Error("Internal server problem"));  //rejected

//     setTimeout(function sayMyName(){
//         console.log("Dhruv Mahajan");
//     },10000)
//     resolve(1);
// });         

// Multiple then blocks & catch,finally  block
// let promise1 = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("Promise fulfilled");
//     }
//     else{
//         reject("Internal Server problem");
//     }
// });

// promise1.then((message)=>{
//     console.log("First Message : " +message);
//     return "Promise Fulfilled second msg";
// }).then((message)=>{
//     console.log("Second Message : " +message);
//     return "Promise Fulfilled third msg";
// }).then((message)=>{
//     console.log("Third Message : " +message);
    
// }).catch((error)=>{
//     console.error(error);
// }).finally((message)=>{
//     console.log("Finally block Always runs");
// })

// promise1.then((message)=>{
//     console.log("Then ka msg is : " +message);
// }).catch((error)=>{
//     console.log("Error :" +error);
// });



//MUltiple promises
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
});
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(reject,4000,"Third");
})

Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.error("error: "+error)
})