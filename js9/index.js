//CLASSES
// class Human{
//     //properties
//     age=13; //public
//     #weight=50; //private
//     height =180;

//     //constructors
//     constructor(newAge,newHeight,newWeight){
//         this.age=newAge;
//         this.height=newHeight;
//         this.#weight=newWeight;
//     }

//     //functions
//     #walking(){
//         console.log("walks");
//     }
//     running(){
//         console.log("Runs",this.#weight);
//     }

//     //Getter & Setter
//     get fetchWeight(){
//         return this.#weight; 
//     }

//     set modifyWeight(val){
//         this.#weight=val
//     }
    
// }
// let obj=new Human(19,190,55);
// console.log(obj.height);
// console.log(obj.fetchWeight);
// obj.running();


//DEFAULT PARAMETERS
// function sayName(name = "DEFAULT MAHAJAN"){
//     console.log("My name is :" ,name);
// }
// sayName("DHRUV");

// function sayName(Fname = "DHRUV" ,Lname=" MAHAJAN"){
//     console.log("My name is :" ,Fname , " ", Lname);
// }
// sayName();

// function sayName(Fname = "dhurv" ,Lname=Fname.toUpperCase()){
//     console.log("My name is :" ,Fname , " ", Lname);
// }
// sayName("ansh");

//default parameter as object
// function print(value= {age:15, wt:55, ht:177}){
//     console.log("Details: ", value);
// }
// print();

//default parameter as array
// function print(value= ["love",15]){
//     console.log("Details: ", value);
// }
// print();

//NULL & UNDEFINED
// function print(value= "Rohit"){
//     console.log("Details: ", value);
// }
// print(null); //gives null
// print(undefined); //gives default value


//FUNCTION AS DEFAULT PARAMETER
// function getAge(){
//     return 190;
// }

// function print(name="Dhruv",age=getAge()){
//     console.log(name , " " , age);
// }
// print();