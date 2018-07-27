// Use an array for all available options
var computerChoice = ["Cloud", "Zidane", "Terra", "Squall", "Titus", "Warrior of Light"];
// var computerChoice = ["tennessee"];

//ideas, final fantasy protags
//hold variables for wins, letters already guessed and how many guesses left
var wins = 0;
var currentGuess = [];
var guessesLeft = 10;
var pick = []; //array for the pick to be held in.
var currentWord = []; //array to hold each letter of the selected word
var allowedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //Selected characters that are allowed in this game.

// pick a random choice from the array.
var computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// capitalize their name in order for the rest of the code to work
// create new variable so that the original content is untouched
var who = computerPick;
computerPick = computerPick.toUpperCase();

//push each character in the word as a blank "-"
for (var i = 0; i < computerPick.length; i++) {
    //if there is spaces in the word, skip it
    if (computerPick[i] === " ") {
        continue;
    } else {
        pick.push("-");

        currentWord.push(computerPick[i]);
    };
};

//Make sure both arrays are the same length
console.log(pick);
console.log(currentWord);

//create function that updates the html
function updateHTML() {

    if (guessesLeft === 0) {
        outcome("lose");
    }

    var win = wins; // updates the counter on winning
    var guess = guessesLeft; //Shows how many guesses are rmaining
    var current = currentGuess; // What the user already picked
    var choice = pick; //The array that contains the '-' and answer



    document.getElementById("wins").innerHTML = win; // replaces counter if winning
    document.getElementById("guess").innerHTML = guess; // shows how many guesses are remaining
    document.getElementById("currentGuess").innerHTML = current; //Updates what the user has already picked
    document.getElementById("currentWord").innerHTML = choice; //updates the selected word


    //If user runs out of guesses, they lose!

}

//Create the win and lose outcome properties
function outcome(result) {

    //If they win the game
    if (result === "win") {
        wins++;
        var choice = pick;
        //Want to update the winning word and then update the photo to the hero selected
        var replace = document.getElementById("currentWord").textContent;
        document.getElementById("currentWord").textContent = choice;

        //Call the div with the image function
        var img = document.getElementById("img");
        //replace the image with the src image connected by name
        img.setAttribute("src", "assets/images/" + who + ".jpg");
        //replace the name text with the character name
        var name = document.getElementById("who");
        name.textContent = who;
        //alert they won the game
        alert("You saved the world! Wanna try again?");
        console.log(img);
    }

    //If they lose the game
    else if (result === "lose") {
        alert("You failed to save the world, would you like to try again?");
    };

    // Then reset the brackets
    currentGuess = [];
    guessesLeft = 10;
    pick = []; //array for the pick to be held in.
    currentWord = [];

    //Computer picks out a new word
    computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    who = computerPick;
    computerPick = computerPick.toUpperCase();

    //push each character in the word as a blank "-"
    for (var i = 0; i < computerPick.length; i++) {
        if (computerPick[i] === " ") {
            continue;
        } else {
            pick.push("-");

            currentWord.push(computerPick[i]);
        };
        console.log(pick);
        console.log(currentWord);
        updateHTML();
    };
};

updateHTML(); //Updates the HTML to place the blank word

//Test function
document.onkeyup = function (e) {
    var userGuess = e.key;


    //Change lowercase letter to uppercase
    userGuess = userGuess.toUpperCase();

    console.log("User presses " + userGuess);
    console.log("Computer's choice is " + computerPick);

    // If user hits a key that they hit before
    if (currentGuess.includes(userGuess)) {
        alert("You already pressed " + userGuess)
        return;
    }

    //This checks if the user is actually hitting the alphabetical keys
    else if (allowedCharacters.includes(userGuess)) {

        //First puts user's guess into an array;
        currentGuess.push(userGuess);

        //If the key matches with any letter in the array
        if (currentWord.includes(userGuess)) {

            //Replace the blanks with the correct matched letter.
            for (var i = 0; i < currentWord.length; i++) {
                if (userGuess === currentWord[i]) {
                    pick[i] = userGuess;
                }
            };

            //After check if the array has no blanks, if they don't they win!
            if (!pick.includes("-")) {
                outcome("win");
            };
        }

        else {
            guessesLeft--;
        };

    };
    updateHTML(); //Updates the score counter
};
