function getEightBallAnswer() {
  // randomNumber is a variable that will hold a random number between 0 and 7
  // Math.random() generates a random number between 0 and 1
  // Multiplying by 8 gives us a number between 0 and 8
  // Math.floor() rounds down to the nearest whole number
  // So randomNumber will be a number between 0 and 7
  let randomNumber = Math.floor(Math.random() * 8);

  // eightBallAnswer is a variable that will hold the answer
  let eightBallAnswer = "";

  switch (randomNumber) {
    case 0:
      eightBallAnswer = "It is certain";
      break;
    case 1:
      eightBallAnswer = "It is decidedly so";
      break;
    case 2:
      eightBallAnswer = "Cannot predict now";
      break;
    case 3:
      eightBallAnswer = "Reply hazy try again";
      break;
    case 4:
      eightBallAnswer = "Do not count on it";
      break;
    case 5:
      eightBallAnswer = "My sources say no";
      break;
    case 6:
      eightBallAnswer = "Outlook not so good";
      break;
    case 7:
      eightBallAnswer = "Signs point to yes";
      break;
    default:
      eightBallAnswer = "No answer...";
      break;
  }

  return eightBallAnswer;
}

// Example usage:
const userName = "Betsy";
const userQuestion = "Should I get another cat?";

if (userName) {
  console.log(`Hello ${userName}`);
} else {
  console.log("Hello");
}

console.log(`${userName} wants to ask: ${userQuestion}`);
console.log(`The eight ball answered: ${getEightBallAnswer()}`);
