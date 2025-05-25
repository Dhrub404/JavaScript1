let mydiv=document.querySelector('#mydiv');


//ADD EMELEMNT
// let newElement=document.createElement('span');
// newElement.textContent="This is my NEW ELEMENT"

// mydiv.insertAdjacentElement('beforebegin',newElement);
//   mydiv.insertAdjacentElement('afterbegin',newElement)
// mydiv.insertAdjacentElement('afterend',newElement)
// mydiv.insertAdjacentElement('beforeend',newElement)


//REMOVE_CHILD
// let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
let parent = child.parentElement; //accessing parent using child
parent.removeChild(child)
// console.log(parent);


