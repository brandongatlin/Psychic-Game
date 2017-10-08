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

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

	console.log(computerGuess);

var updateGuessesLeft = function() {
    document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateComputerGuess = function() {
    this.computerGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector("#playerGuesses").innerHTML = playerGuesses.join(', ');
};

//set all to default
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    playerGuesses = [];

    updateComputerGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}



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
    }

    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset();
    }
};