

function outerFunction() {
  let name = "Dhrub"; //let ->block scoped
  function innerFunction() {
    // innerFunction() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  return innerFunction;
}
let inner =outerFunction();
inner();