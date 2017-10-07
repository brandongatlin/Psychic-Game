
//create array of letter choices and answers
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	console.log(letters[3]);

//have computer choice random letter and store in variable computerGuess
function getRandomLetter() {
    var computerGuess = letters[Math.floor(Math.random() * (letters.length))];
    console.log(computerGuess);
      }  
}

