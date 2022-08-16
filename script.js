/*
Scissors Paper Stone

Info:
1. Scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw

Conditions:
1. 

Helper Function:
1. Randomise "scissors", "paper", "stone"
2. Winning function
3. Draw function

Input:
1. User inputs one of "scissors", "paper", or "stone"

Output:
1. User wins
2. Program wins
3. Or it's a draw

*/

// Global variables
var userWin = 0;
var computerWin = 0;
// Specify current game mode
var currentGameMode = `neutral`;
var userName = ``;

var main = function (input) {
  var output = ``;

  // Getting user to type in name
  if (currentGameMode == `neutral`) {
    userName = input;
    currentGameMode = `choose game mode`;
    output = `Hello ${userName}! <br><br> This is a game of scissors paper stone! <br><br> Type "reverse" to reverse the game logic. <br> You can change the mode back to normal by typing in "normal" if you wish to play the regular Scissors Paper Stone!`;
  }
  // If user types "reverse", set to reversed game mode to run reversedScissorsPaperStoneGame
  else if (input == `reverse`) {
    currentGameMode = `reversed`;
    return (output = `Game has been reversed! Start guessing and winning!`);
  }
  // If user types "normal", set to normal game mode to run scissorsPaperStoneGame
  else if (input == `normal`) {
    currentGameMode = `normal`;
    return (output = `Game back to normal`);
  }
  // Runs scissorsPaperStoneGame function NORMAL
  else if (currentGameMode == `normal`) {
    output = scissorsPaperStoneGame(userName, input);
    return output;
  }
  // Runs reversedScissorsPaperStoneGame function REVERSED
  else if (currentGameMode == `reversed`) {
    output = reversedScissorsPaperStoneGame(userName, input);
    return output;
  }
  // Runs scissorsPaperStoneGame if no condition stated
  else {
    output = scissorsPaperStoneGame(userName, input);
  }

  return output;
};

// Scissors Paper Stone Game
var scissorsPaperStoneGame = function (userName, userGuess) {
  var playerGuess = userGuess;
  console.log("playerGuess");
  console.log(playerGuess);

  // programGuess is from the helper function 3-sided dice
  var programGuess = randomNumber();
  console.log("programGuess");
  console.log(programGuess);

  // Setting output as an undefined string
  var message = "";

  // If input is not scissors, paper or stone
  if (
    playerGuess != "paper" &&
    playerGuess != "stone" &&
    playerGuess != "scissors"
  ) {
    message = `Please only type "scissors", "paper" or "stone". Try again!`;
    return message;
  }

  // If input == true, run the game
  else {
    // Winning Scenario
    if (playerWin(playerGuess, programGuess)) {
      // If user win, increase points
      userWin = userWin + 1;
      message = `You WIN! <br><br> You chose ${playerGuess} and the program generated ${programGuess}! <br><br> ${userName} won: ${userWin} times. <br> Program won ${computerWin} times.`;
      return message;
    }
    // Draw Scenario
    else if (playerDraw(playerGuess, programGuess)) {
      message = `You draw. <br><br> Both you and the program chose ${playerGuess}! <br><br> Please try again! <br><br> ${userName} won: ${userWin} times. <br> Program won ${computerWin} times.`;
      return message;
    }
    // Losing Scenario
    else {
      // if computer win, increase points
      computerWin = computerWin + 1;
      message = `You lose! <br><br> The program chose ${programGuess} but you chose ${playerGuess}! <br><br> Please try again! <br><br> ${userName} won: ${userWin} times. <br> Program won ${computerWin} times.`;
    }
  }
  return message;
};

// A 3-sided Dice (1, 2, 3)
var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNum = randomInteger + 1;

  // Determine integer for each generation
  if (randomNum == 1) {
    return "scissors";
  }
  if (randomNum == 2) {
    return "paper";
  }
  if (randomNum == 3) {
    return "stone";
  }
};

// Set Winning Function
var playerWin = function (playerGuess, programGuess) {
  return (
    (playerGuess == "scissors" && programGuess == "paper") ||
    (playerGuess == "paper" && programGuess == "stone") ||
    (playerGuess == "stone" && programGuess == "scissors")
  );
};

// Set Draw Function
var playerDraw = function (playerGuess, programGuess) {
  return playerGuess == programGuess;
};

// REVERSED Scissors Paper Stone Game
var reversedScissorsPaperStoneGame = function (userName, userGuess) {
  var playerGuess = userGuess;
  console.log("playerGuess");
  console.log(playerGuess);

  // programGuess is from the helper function 3-sided dice
  var programGuess = randomNumber();
  console.log("programGuess");
  console.log(programGuess);

  // Setting output as an undefined string
  var message = "";

  // If input is not scissors, paper or stone
  if (
    playerGuess != "paper" &&
    playerGuess != "stone" &&
    playerGuess != "scissors"
  ) {
    message = `Please only type "scissors", "paper" or "stone". Try again!`;
    return message;
  }

  // If input == true, run the game
  else {
    // Winning Scenario
    if (reversedPlayerWin(playerGuess, programGuess)) {
      // If user win, increase points
      userWin = userWin + 1;
      message = `You WIN! <br><br> You chose ${playerGuess} and the program generated ${programGuess}! <br><br> ${userName} won: ${userWin} times. <br> Program won ${computerWin} times.`;
      return message;
    }
    // Draw Scenario
    else if (playerDraw(playerGuess, programGuess)) {
      message = `You draw. <br><br> Both you and the program chose ${playerGuess}! <br><br> Please try again! <br><br> ${userName} won: ${userWin} times. <br> Program won ${computerWin} times.`;
      return message;
    }
    // Losing Scenario
    else {
      // if computer win, increase points
      computerWin = computerWin + 1;
      message = `You lose! <br><br> The program chose ${programGuess} but you chose ${playerGuess}! <br><br> Please try again! <br><br> ${userName} won: ${userWin} times. <br> Program won ${computerWin} times.`;
    }
  }
  return message;
};

// Set Reversed Winning Function
var reversedPlayerWin = function (playerGuess, programGuess) {
  return (
    (playerGuess == "paper" && programGuess == "scissors") ||
    (playerGuess == "stone" && programGuess == "paper") ||
    (playerGuess == "scissors" && programGuess == "stone")
  );
};

// switch case
