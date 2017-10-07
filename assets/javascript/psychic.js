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


//declare computerGuess var
//have computer choose random letter and store in variable computerGuess
var computerGuess = Math.floor(Math.random() * letters.length);

console.log(computerGuess);


//player guesses letter, var playerGuess, print this variable to "your guesses so far"
var playerGuess = document.getElementById("playerGuesses");

document.onkeyup = function(event) {
    playerGuess.textContent = event.key;
    console.log(playerGuess);
};



// make append
$("letters").on("click", function() {
    var buttonPressed = $(this).attr("value");
    $("#playerGuesses").append(playerGuess);
});