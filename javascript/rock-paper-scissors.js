// Function to get the user's choice
const getUserChoice = (userInput) => {
  console.log("Choose rock, paper, or scissors. GO!");

  // Convert input to lowercase
  userInput = userInput.toLowerCase();

  // Validate the input
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log(
      "ERROR: Invalid choice. Please choose rock, paper, or scissors."
    );
    process.exit(1); // Exit the script with an error code  }
  }
};

// Computer choice
const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "User WINS!!";
  }
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The Computer Won!";
    } else return "You WON!";
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The Computer Won";
    } else return "You Won!";
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The Computer Won";
    } else return "You Won!";
  }
  return "ERROR: Something went wrong!";
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  console.log(`User = ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`Computer = ${computerChoice}`);
  return determineWinner(userChoice, computerChoice);
};
console.log(playGame());
