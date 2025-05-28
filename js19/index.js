// async function getData(){
//     setTimeout(function(){
//         console.log("Inside SetTimeOut Block");
//     },3000)
// }

// let output = getData();


//FETCH API
// async function getData(){

//     //get request -> async
//     let response =await fetch('https://jsonplaceholder.typicode.com//comments?postId=1');

//     //parse json ->async
//     let data = await response.json();
//     console.log(data);
// }
// getData();

//SCENARIO:
    //prepare url / api endpoint -> sync category
    //await //fetch data -> network call -> async
    //process data -> sync


//POST request 
const myHeaders = new Headers();
myHeaders.append("Content-type","application/json");

// const myRequest = new Request("https://exapmle.org/post",
// {
//     method: "POST",
//     body: JSON.stringify({ username: "example"}),
//     headers: myHeaders
// });

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "Dhruv Mahajan"}),
    headers: myHeaders
}

async function getData(){
    const response = await fetch(url);
    let data = await response.json();
    console.log("GET data is : ",data);
}
async function postData(){
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("POST data is : ",data);
}

async function processData(){
    await postData();
    await getData();
}
processData(); 