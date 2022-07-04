const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput==='bomb'){
    return userInput
  } else {
    console.log("Error");
  }
};

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return console.log("tie");
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return console.log("Computer won");
    } else {
      return console.log("User won");
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return console.log("Computer Won");
    } else {
      return console.log("User won");
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return console.log("Computer Won");
    } else if (userChoice === 'bomb'){
      return console.log('user won')
    } else {
      return console.log("User Won");
    }
  }
}

function playGame() {
  let userChoice = getUserChoice("Scissors");
  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  determineWinner(userChoice, computerChoice);
}

playGame()
