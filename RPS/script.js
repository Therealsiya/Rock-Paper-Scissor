let yourScore = 0;
let computerScore = 0;
let playerOption = document.getElementById("player-options").value;
let arrComputerOptions = ["rock", "paper", "scissors"];



function play() {


  let randomNum = Math.floor(Math.random() * arrComputerOptions.length);
  let ComputerOption = arrComputerOptions[randomNum];

  console.log("computer:" + ComputerOption);
  console.log("You:" + playerOption);

  const yourScoreElement = document.getElementById("your-score");
  yourScoreElement.innerHTML = yourScore;
  const computerScoreElement = document.getElementById("comScore");
  computerScoreElement.innerHTML = computerScore;

  if (playerOption === ComputerOption) {
    console.log("tie");
  } else if (
    (playerOption === "rock" && ComputerOption === "scissors") ||
    (playerOption === "paper" && ComputerOption === "rock") ||
    (playerOption === "scissors" && ComputerOption === "paper")
  ) {
    console.log("you win");
    yourScore++;
  } else {
    console.log("computer wins");
    computerScore++;
  }

  //displaying images
  // const rockImg = document.createElement('div');
  //const option1 = document.getElementById('icon1');
  // rockImg.classList.add('rock-pic');

  // option1.appendChild(rockImg);
  const userPic = document.getElementById("icon1");
  if (playerOption === "rock") {
    userPic.innerHTML = "";

    userPic.style.backgroundImage = "url(images/R.png)";
  } else if (playerOption === "paper") {
    userPic.innerHTML = "";
    userPic.style.backgroundImage = "url(images/p.png)";
  } else if (playerOption === "scissors") {
    userPic.innerHTML = "";
    userPic.style.backgroundImage = "url(images/S.png)";
  }

  const computerPic = document.getElementById("icon2");
  if (ComputerOption === "rock") {
    computerPic.innerHTML = "";

    computerPic.style.backgroundImage = "url(images/R.png)";
  } else if (ComputerOption === "paper") {
    computerPic.innerHTML = "";
    computerPic.style.backgroundImage = "url(images/p.png)";
  } else if (ComputerOption === "scissors") {
    computerPic.innerHTML = "";
    computerPic.style.backgroundImage = "url(images/S.png)";
  }

  const winnerDisplay = document.createElement("div");
  winnerDisplay.classList.add("display-winner");

  //console.log(playerOption);
}
