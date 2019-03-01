var Word = require("./word.js");
var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var topMovies = ["Black Panther", "Lady Bird", "The Wizard of Oz", "Citizen Kane", "BlacKkKlansman", "Get Out", "Mad Max: Fury Road", "The Third Man", "Moonlight", "Inside Out", "Wonder Woman", "Metropolis", "E.T. The Extra-Terrestrial", "Coco", "Dunkirk"];

var randomIndex = Math.floor(Math.random() * topMovies.length);
var randomWord = topMovies[randomIndex];


var computerWord = new Word(randomWord);

var requireNewWord = false;
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function theLogic() {
    if (requireNewWord) {
        var randomIndex = Math.floor(Math.random() * topMovies.length);
        var randomWord = topMovies[randomIndex];

        computerWord = new Word(randomWord);
        requireNewWord = false;
    }

    var wordComplete = [];
    console.log(computerWord)
        // forEach(completeCheck));


    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Select a letter from A to Z",
                name: "userinput"
        }
    ]).then(function(input) {

        if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
            console.log ("\nPlease trey again");
            theLogic();
        } else {
            if (incorrectLetters.includes(input.userinput) || 
                correctLetters.includes(input.userinput) || 
                input.user === ""
                ) {
                    console.log("\n Already Guessed or Nothing was entered\n");
                    theLogic();
            } else {
                var wordCheckArr = [];

                computerWord.userGuess(input.userinput);

                computerWord.objArray.forEach(wordCheckArr)
                if (wordCheckArr.join("") === wordComplete.join("")) {
                    console.log("\nIncorrect!\n");

                    incorrectLetters.push(input.userinput);
                    guessesLeft --;
                } else {
                    console.log("\nCorrect!\n");

                    correctLetters.push(input.userinput);
                }
                computerWord.log();

                console.log ("Guesses Left: " + guessesLeft + "\n");

                console.log ("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                if (guessesLeft > 0) {
                    theLogic();
                } else {
                    console.log ("Sorry, you lost!!\n");

                    restartGame();
                }

                function wordCheckArr(key) {
                    wordCheckArr.push(key.guessed);
                }
            }
        }
    });

    } else {
        console.log("You Win!!\n");

        restartGame();
    }
    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }
}

function restartGame() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to:",
            choices: ["Play Agian", "Exit"],
            name: "restart"
    }]).then(function(input) {
        if (input.restart === "Play Again") {
            requireNewWord = true;
            incorrectLetters = [];
            correctLetters = [];
            guessesLeft = 10;
            theLogic();
        } else {
            return;
        }
    });
}

theLogic();














