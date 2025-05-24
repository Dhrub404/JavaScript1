//DYNAMIC NATURE OF OBJECT
// let obj={
//     age: 24,
//     wt : 55,
//     ht : 180,
// }
// console.log(obj);

// obj.color = "white";
// console.log(obj);


//OBJECT CLONING

//spread operator(...)
// let src={
//     age: 24,
//     wt : 55,
//     ht : 180,
// }
// let dest = {...src};
// console.log(src);
// console.log(dest);

//assign
// let src={
//     age: 24,
//     wt : 55,
//     ht : 180,
// }
// let src1 = {wt : 55};
// let dest = Object.assign({},src,src1);
// console.log(src);
// console.log(dest);

//Iteration
// let src={
//     age: 24,
//     wt : 55,
//     ht : 180,
// }

// let dest = {};
// for(let key in src){
//     let newKey=key;
//     let newValue = src[key];
//     //cloning
//     dest[newKey]=newValue;
// }
// console.log(src);
// console.log(dest);