// //OBJECT
// let obj = {
//     name : "Dhruv",
//     age : 19,
//     weight : 55,
//     height : "5ft 10inch",
//     greet : function(){
//         console.log("HELLO SIR WASSUP")
//     }
// };

// console.log(obj);
// obj.greet();

// console.log(typeof(obj));


//ARRAYS
// let arr=[1,2,3,4,5];
// console.log(arr);

// let arr1=[1,'dabba',true];
// console.log(arr1);

// Array Constructor 
// let brr = new Array('dabba',2,false);
// console.log(brr);
// console.log(brr[0]);
// console.log(brr[1]);

// console.log(typeof(brr))


//BUILT-IN METHODS
// let ar = [1,'dabba',45,true];
// ar.push('dhruv'); // PUSH
// console.log(ar);

// ar.pop();  //POP
// console.log(ar);

// ar.shift(); //shift
// console.log(ar);

// ar.unshift('hello'); //unshift
// console.log(ar);

// ar.push(10); 
// ar.push(20);
// ar.push(50);
// console.log(ar);

// console.log(ar.slice(2,5)); //slice

// ar.splice(2,2,'Dhruv'); //Splice
// console.log(ar);

//Map
// let crr=[10,20,30];

// let ans = crr.map((number ,index ) => {
//     console.log(number);
//     console.log(number+1);
//     console.log(index);
// })

// let ans = crr.map((number)=>{
//     return number*number;
// });
// console.log(ans);


//FILTER
// let fil=[10,11,20,40,51,50];

// let evenAns = fil.filter((number) =>{
//     return number%2 === 0;
//     // if(number%2 ===0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// })
// console.log(evenAns);

// let arr= [1,2,'dhruv','dabba',5];
// let ans =arr.filter((value)=> {
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);


//REDUCE
// let arr =[10,20,30,40];
// let ans = arr.reduce((accumulator , currentValue) => {
//     console.log("Acc is : ",accumulator);
//     console.log("Cur is : ",currentValue);
//     return accumulator + currentValue;
// }, 0);
// console.log(ans);


//SORT 
// let arr = [10,20,30,40,50,60,70,80,90];
// let ans = arr.sort(); //ascending order
// console.log(ans);

// let ans1 = arr.sort((a,b) => {
//     return b-a; //descending order
// });
// let ans2 = arr.sort();
// arr.reverse(); //reverse
// console.log(ans2);
// console.log(ans1);

//INDEXOF
// let arr = [10,20,30,40,50,60,70,80,90];
// console.log(arr.indexOf(20)); //INDEX OF 20


//FIND
// let arr = [10,20,30,40,50,60,70,80,90];
// let ans = arr.find((value) => {
//     return value > 50;
// });
// console.log(ans);


//FOR-EACH LOOP
// let arr=[10,20,30,40];
// let ans = arr.forEach((value,index)=>{
//     console.log("Number is : ", value ,"Index is : ",index);
// });
// console.log(ans);


//FOR-IN LOOP
// let obj = {
//     name : "Dhruv",
//     age : 19,
//     weight : 55,
//     height : "5ft 10inch",
//     greet : function(){
//         console.log("HELLO SIR WASSUP")
//     }
// };

// for (let key in obj){
//     console.log(key , " " , obj[key]);
// }


//FOR-OF LOOP
// let arr=[10,20,30,40];
// for(let value of arr){
//     console.log(value);
// }

// let fullName="Dhruv";
// for(let value of fullName){
//     console.log(value);
// }



//ARRAYS WITH FUNCTION 
// let arr=[10,20,30,40];

// function getSum(arr){
//     // let len=arr.length;
//     let sum =0;
//     // for(let index=0;index<len;index++){
//     //     sum +=arr[index];
//     // }
//     arr.forEach(value => {
//         sum +=value;
//     });
//     return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);