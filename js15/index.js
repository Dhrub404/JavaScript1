// function changeText(event){
//     console.log(event);  //TO check info/data in this event 
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = 'Hello Dhruv';

// }
// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changeText)    //add 

// fpara.removeEventListener('click',changeText)  //remove


//DEFAULT ACTION PREVENT
// let anchorElement = document.getElementById('fAnchor');

// function anchorFunction(event){
//     let anchorElement = document.getElementById('fAnchor');
//     event.preventDefault();
//     anchorElement.textContent = "Click Ho gya";
// }
// anchorElement.addEventListener('click',anchorFunction);

//EXAMPLE TO AVOID MANY LISTENERS USE
// let paras = document.querySelectorAll('p')

function alertpara(event ){
    if(event.target.nodeName === 'SPAN'){     //if only want alert msg on span
         alert("Clicked on Para: " + event.target.textContent)
    }
       
}
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',alertpara);
// }

let divElement = document.getElementById('wrapper')

divElement.addEventListener('click',alertpara);
