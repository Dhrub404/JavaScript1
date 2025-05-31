document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-btn");
  const usernameInput = document.getElementById("user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgressCircle = document.querySelector(".easy-progress");
  const mediumProgressCircle = document.querySelector(".medium-progress");
  const hardProgressCircle = document.querySelector(".hard-progress");
  const easyLabel = document.getElementById("easy-label");
  const mediumLabel = document.getElementById("medium-label");
  const hardLabel = document.getElementById("hard-label");
  const cardStatsContainer = document.querySelector(".stats-cards");

  // return true or false based on regex
  function validateUsername(username) {
    if (username.trim() == "") {
      alert("Username should not be empty");
      return false;
    }
    const regex = /^[a-zA-Z0-9_]{3,20}$/;
    const isMatching = regex.test(username);
    if (!isMatching) {
      alert("Invalid Username");
    }
    return isMatching;
  }


  //if api doesn't work the post request (not working some errors)
//     async function fetchUserDetails(username) {
//     try {
//         // Disable and change button text
//         searchButton.textContent = "Searching...";
//         searchButton.disabled = true;

//         const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//         const targetUrl = "https://leetcode.com/graphql/";

//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");


//         const graphql = JSON.stringify({
//             query: "\n query userSessionProgress ($username: String!) {\n matchedUser(username: $username) {\n submitStats {\n acSubmissionNum {\n difficulty\n count\n }\n }\n }\n }",
//             variables: {
//                username: username
//             }
//         });

//         const requestOptions = {
//             method: "POST",
//             headers: myHeaders,
//             body: graphql,
//             redirect: "follow"
//         };


//         const response = await fetch(proxyUrl + targetUrl, requestOptions);

//         if (!response.ok) throw new Error("HTTP error: " + response.status);

//         const result = await response.json();

//         if (!result.parseddata || !result.parseddata.matchedUser) {
//             alert("LeetCode user not found.");
//             return;
//         }
//         console.log("LeetCode User Data:", result.data);
//         displayUserData(parseddata);
//     } catch (error) {
//         console.error("Error fetching user details:", error);
//         alert("Error: " + error.message);
//     } finally {
//         // Reset button
//         searchButton.textContent = "Search";
//         searchButton.disabled = false;
//     }
// }


  async function  fetchUserDetails(username){

    const url = `https://leetcode-stats-api.herokuapp.com/${username}`
    try{
        searchButton.textContent= "searching....";
        searchButton.disabled = true;
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Unable to Fetch username");
        }
        const parseddata = await response.json();
        console.log("Logging data : ", parseddata);
        if (parseddata.status !== "success") {
            statsContainer.innerHTML = `<p>Invalid LeetCode username or API down.</p>`;
            return;
        }

        displayUserData(parseddata);
    }catch(error){
        statsContainer.innerHTML = `<p>No data found</p>`

    }
    finally{
        searchButton.textContent= "Search";
        searchButton.disabled= false;
    }
  }


    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved / total) * 360;
        circle.style.setProperty("--progress-degree", `${progressDegree}deg`);
        label.textContent = `${solved}/${total}`;
    }



    function displayUserData(parseddata) {
        const totalEasyQues = parseddata.totalEasy;
        const totalMediumQues = parseddata.totalMedium;
        const totalHardQues = parseddata.totalHard;

        const solvedTotalEasyQues = parseddata.easySolved;
        const solvedTotalMediumQues = parseddata.mediumSolved;
        const solvedTotalHardQues = parseddata.hardSolved;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            {label : "Acceptance percentage", value:parseddata.acceptanceRate},
            {label : "Ranking", value:parseddata.ranking},
            {label : "Total solved", value:parseddata.totalSolved},
            {label : "Contribution Points ", value:parseddata.contributionPoints},
            {label : "Total Medium", value:parseddata.totalMedium},
            {label : "Total Hard", value:parseddata.totalHard},

        ]
        console.log(cardsData);

        cardStatsContainer.innerHTML = cardsData.map(
            data  =>{
                return `
                <div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                </div>
                `

            }
        ).join("")
    }



  searchButton.addEventListener('click', function () {
    const username = usernameInput.value;
    console.log("logging username : ", username);
    if(validateUsername(username)){
        fetchUserDetails(username);
    }
  });


});