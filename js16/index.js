// // code 1 (takes 100 reflows & repaints , that's why SLOWER than code 2)

// const t1= performance.now();

// for(let i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para : " +i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
// console.log("Time taken : " +(t2-t1));


// // code2 (takes 1 reflow & repaint , that's why FASTER)
// const t3= performance.now();

// let mydiv = document.createElement('div');
// for(let i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para : " +i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();
// console.log("Time taken : " +(t4-t3));



//BEST CODE (Document Fragment)
const t5= performance.now();
let fragment = document.createDocumentFragment();

for(let i=1; i<=100 ; i++){
    let para = document.createElement('p');
    para.textContent = "This is para : " +i;
    // this below line takes NO Reflow & NO Repiants
    fragment.appendChild(para);
}
// the below line takes 1 reflow and 1 repaint 
document.body.appendChild(fragment);


const t6 = performance.now();
console.log("Time taken : " +(t5-t6));