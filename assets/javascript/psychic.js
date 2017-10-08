//create array of letter choices and answers
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(letters[5]);

// counter variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var playerGuesses = [];
var computerGuess = "";

console.log(guessesLeft);

//set all to default
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    playerGuesses = [];

    updatecomputerGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

var updateGuessesLeft = function() {
        // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
        document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updatecomputerGuess = function() {
  this.computerGuess = this.computerGuess[Math.floor(Math.random() * this.letters.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector("#playerGuesses").innerHTML = "Your Guesses so far: " + playerGuesses.join(', ');
};


        //When key is released it becomes the users guess
        document.onkeyup = function(event) {
            guessesLeft--;
            var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

            playerGuesses.push(playerGuess);
            updateGuessesLeft();
            updateGuessesSoFar();

            if (guessesLeft > 0) {
                if (playerGuess === computerGuess) {
                    wins++;
                    document.querySelector("#wins").innerHTML = "Wins: " + wins;
                    reset();
                }
            } else if (guessesLeft === 0) {
                // Then we will loss and we'll update the html to display the loss 
                losses++;
                document.querySelector("#losses").innerHTML = "Losses: " + losses;
                // Then we'll call the reset. 
                reset();
            }
        };