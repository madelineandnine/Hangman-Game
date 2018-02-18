
var wordBank = ["jefferson", "lincoln", "democracy", "eagle",];
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 7;
var underScores = [];
var letters = [];
var userGuesses = [];
var previousGuesses = [];
var correctGuess;

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM locked and loaded");



    var message = document.getElementById("start-message");
    var blanks = document.getElementById("letter-input");
    console.log(blanks)
    var userWins = document.getElementById("wins");
    var remainingGuesses = document.getElementById("guesses-left");
    var lettersGuessed = document.getElementById("guessed");
    var winMessage = document.getElementById("update-message");


    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);

    

    message.textContent = ("There are " + randomWord.length + " letters in the word. Press any key to guess!");
    lettersGuessed.textContent = ("Guessed Letters: " + userGuesses);
    remainingGuesses.textContent = ("Remaining Guesses: " + guessesLeft);
    //userWins.textContent = ("Wins: " + wins);

    underScores.length = 0;
    wrongLetter = [];
    guessesLeft = 10;

    function setBlanks() {
        console.log("working")
        for (var i = 0; i < randomWord.length; i++) {
            underScores.push("_");
        }
        console.log(underScores[1])
    }
    setBlanks();

    blanks.textContent = (underScores.join(' '))

    function setLetters() {
        for (var i = 0; i < randomWord; i++) {
            letters.push(randomWord.charAt(i));
        }
    }

    setLetters();



    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        //userGuess is something besides a letter 
        if (userGuess.length !== 1 || userGuess < "a" || userGuess > "z") {
            return;
        }

       

        //if already guessed, stop here 
        //we know they have guessed a single lowercase letter
        lettersGuessed.append(userGuess + ",")
        //add to list of guessed letters 

        if (randomWord.indexOf(userGuess) === -1) {
            //guessed wrong letter 
            guessesLeft--;
            remainingGuesses.textContent = ("Remaining Guesses: " + guessesLeft);
        } else {
            //guessed correct letter
            for (var i = 0; i < underScores.length; i++) {
                if (userGuess == randomWord.charAt(i)) {
                    underScores[i] = userGuess;
                }

                if (guessesLeft == 0) {
                    console.log("you lose")
                    winMessage.textContent = ("You are a terrible patriot!");
                }

               

            }
            blanks.textContent = (underScores.join(' '));

        }
        //create alert with language about game being over when score remaining guesses equals 0
        //create alert if all letters are filled in correctly 
        //check on reset




    };

}); 
