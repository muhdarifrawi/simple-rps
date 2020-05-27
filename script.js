let playerScore = 0;
let computerScore = 0;

document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;

function playerChoice (choice){
  document.getElementById("results").innerHTML = "";
  document.getElementById("text").innerHTML = "Player has chosen "+ choice
  computerChoice(choice);
}

function computerChoice(choice){
  let computerText = document.getElementById("computerText");
  computerText.innerHTML = "Please wait while the computer selects a choice"
  computerText.style.backgroundColor = "yellow";

  setTimeout(function(choice){
    let random = parseInt(Math.floor(Math.random() * 9));
    if(random <= 3){
      computerText.style.backgroundColor = "azure";
      computerText.innerHTML = "Computer chose scissors";
      if(choice == "paper"){
        document.getElementById("results").style.color = "red";
        document.getElementById("results").innerHTML = "You lose";
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
      }
      else if(choice == "rock"){document.getElementById("results").style.color = "green";
        document.getElementById("results").innerHTML = "You win";
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
      }
      else{
        document.getElementById("results").style.color = "blue";
        document.getElementById("results").innerHTML = "It's a draw";
      }
    }
    else if(random <= 6){
      computerText.style.backgroundColor = "azure";
      computerText.innerHTML = "Computer chose rock";
      if(choice == "paper"){
        document.getElementById("results").style.color = "green";
        document.getElementById("results").innerHTML = "You win";
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
      }
      else if(choice == "rock"){document.getElementById("results").style.color = "blue";
        document.getElementById("results").innerHTML = "It's a draw";
      }
      else{
        document.getElementById("results").style.color = "red";
        document.getElementById("results").innerHTML = "You lose";
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
      }
    }
    else{
      computerText.style.backgroundColor = "azure";
      computerText.innerHTML = "Computer chose paper";
      if(choice == "paper"){document.getElementById("results").style.color = "blue";
        document.getElementById("results").innerHTML = "It's a draw";
      }
      else if(choice == "rock"){
        document.getElementById("results").style.color = "red";
        document.getElementById("results").innerHTML = "You lose";
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
      }
      else{
        document.getElementById("results").style.color = "green";
        document.getElementById("results").innerHTML = "You win";
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
      }
    }

  }, 2000, choice, computerText);
}

