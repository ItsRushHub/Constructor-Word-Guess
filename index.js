var word = require("./Word.js");
var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var topMovies = ["Black Panther", "Lady Bird", "The Wizard of Oz", "Citizen Kane", "BlacKkKlansman", "Get Out", "Mad Max: Fury Road", "The Third Man", "Moonlight", "Inside Out", "Wonder Woman", "Metropolis", "E.T. The Extra-Terrestrial", "Coco", "Dunkirk"];

var randomIndex = Math.floor(Math.random() * topMovies.length);
var randomWord = topMovies[randomIndex];


var computerWord = newWord (randomWord);
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;




