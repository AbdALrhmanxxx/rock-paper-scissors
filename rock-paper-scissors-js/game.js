function resetScore() {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  localStorage.removeItem("score");
  updateScoreElemnt();
  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
}

let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};
updateScoreElemnt();
/*
      this is the same :
      if(!score){
        win:0,
        lose:0,
        tie:0
      }
      */
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "you lose";
    } else if (computerMove === "paper") {
      result = "you win";
    } else if (computerMove === "scissors") {
      result = "tie";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
    } else if (computerMove === "paper") {
      result = "you lose";
    } else if (computerMove === "scissors") {
      result = "you win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "you win";
    } else if (computerMove === "paper") {
      result = "tie";
    } else if (computerMove === "scissors") {
      result = "you lose";
    }
  }
  if (result === "you win") {
    score.win += 1;
  } else if (result === "you lose") {
    score.lose += 1;
  } else if (result === "tie") {
    score.tie += 1;
  }
  updateScoreElemnt();
  document.querySelector(
    ".js-moves"
  ).innerHTML = `you picked <img class="move-icon" src="images/${playerMove}-emoji.png"> <img class="move-icon" src="images/${computerMove}-emoji.png">computer picked`;
   document.querySelector(".js-result").innerHTML = `${result}`;
   if(result === "you win"){
    document.querySelector(".js-result").style.color="green"
   }else if(result === "you lose"){
    document.querySelector(".js-result").style.color = "red";
   }else{
    document.querySelector(".js-result").style.color = "rgb(80, 80, 239)";
   }
}
function updateScoreElemnt() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.win}.. lose: ${score.lose}.. tie: ${score.tie}..`;
}
function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
