var PlayerOneChoice = "Rock";
var PlayerTwoChoice = "Scissors";

if (PlayerOneChoice == PlayerTwoChoice) {
    console.log("It's a tie!");
} else if (PlayerOneChoice == "Rock" && PlayerTwoChoice == "Scissors") {
    console.log("Player One wins! Rock beats Scissors");
} else if (PlayerOneChoice == "Scissors" && PlayerTwoChoice == "Rock") {
    console.log("Player Two wins! Rock beats Scissors");
} else if (PlayerOneChoice == "Paper" && PlayerTwoChoice == "Rock") {
    console.log("Player One wins! Paper beats Rock");
} else if (PlayerOneChoice == "Rock" && PlayerTwoChoice == "Paper") {
    console.log("Player Two wins! Paper beats Rock");
} else if (PlayerOneChoice == "Paper" && PlayerTwoChoice == "Scissors") {
    console.log("Player Two wins! Scissors beats Paper");
} else if (PlayerOneChoice == "Scissors" && PlayerTwoChoice == "Paper") {
    console.log("Player One wins! Scissors beats Paper");
}