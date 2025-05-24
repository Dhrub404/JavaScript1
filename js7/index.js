// LET & CONST & FUNCTION EXPRESSION DOES NOT SUPPORT HOISTING & CLASS TOO

//CLASS HOISTING (NOT SUPPORTED)
// const obj = new human();
// class human{

// }


//VARIABLE HOISTING
// console.log(age);    //UNDEFINED O/P
// var age=25;

//FUNCTION HOISTING
    // sayName("DHRUV");
    //     function sayName(name){
    //     console.log(name);
    // }


//Function AS FIRST CLASS CITIZENs

//Assign to variable
// let greet = function(){
//     console.log("GOOD MORNING");
// }
// greet();

//As argument passing
// function greetMe(greet,fullName){
//     console.log("HELLO ",fullName);
//     greet();
// }
// greetMe(greet,"DHRUV");

// //return function
// function solve(num){
//     return function(num){
//         return num*num;
//     }
// }
// let ans =solve(5);
// let finalAns = ans(10);
// console.log(finalAns);

//use function  in DATA STRUCTURE(DS)
// const arr=[
//     function (a,b){
//         return a+b;
//     },
//     function (a,b){
//         return a-b;
//     },
//     function (a,b){
//         return a*b;
//     }
// ];
// let ans=arr[2];
// let finalAns = ans(5,3);
// console.log(finalAns)

//use in a property of object
// let obj = {
//     age: 19,
//     wt :55,
//     greet: ()=>{
//         console.log("HELLO");
//     }
// }
// console.log(obj.age);
// obj.greet();