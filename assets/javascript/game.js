// Use an array for all available options
var computerChoice = ["cloud", "zidane", "hello", "mary", "martha"] 

//ideas, final fantasy protags
//hold variables for wins, letters already guessed and how many guesses left
var wins = 0;
var currentGuess = [];
var guessesLeft = 10;
var pick = []; //array for the pick to be held in.
var currentWord = []; //array to hold each letter of the selected word
var allowedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //Selected characters that are allowed in this game.

// pick a random choice from the array.
var computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//push each character in the word as a blank "-"
for (var i = 0; i < computerPick.length; i++) {
    pick.push("-");
    currentWord.push(computerPick[i]);
}
console.log(pick);
console.log(currentWord);

//create function that updates the html
function updateHTML() {
    var win = wins; // updates the counter on winning
    var guess = guessesLeft;
    var current = currentGuess;
    var choice = pick; // what the computer picked



    document.getElementById("wins").innerHTML = win; // replaces counter if winning
    document.getElementById("guess").innerHTML = guess; // shows how many guesses are remaining
    document.getElementById("currentGuess").innerHTML = current;
    document.getElementById("currentWord").innerHTML = choice;

}

updateHTML(); //Updates the HTML to place the blank word

//Test function
document.onkeyup = function (e) {
    var userGuess = e.key;
    console.log("User presses " + userGuess);
    console.log("Computer's choice is " + computerPick);



    //This checks if the user is actually hitting the alphabetical keys
    if (allowedCharacters.includes(userGuess)) {

        //First puts user's guess into an array;
        currentGuess.push(userGuess);


        if (currentWord.includes(userGuess)) {
            wins++;
        }

        else {
            guessesLeft--;
        }

    }
    updateHTML(); //Updates the score counter
}
