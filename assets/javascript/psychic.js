//create array of letter choices and answers
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	console.log(letters[9]);

//declare computerGuess var
var computerGuess = "";

//have computer choice random letter and store in variable computerGuess
function getRandomLetter() {
    var computerGuess = letters[Math.floor(Math.random() * (letters.length))];
    console.log(computerGuess);

      }  



//player guesses letter, var playerGuess, print this variable to "your guesses so far"



//if statement: if playerGuess != to computerGuess, decrease number of guess by 1



//if statement: if playerGuess === computerGuess, stop, increase wins +1



//

