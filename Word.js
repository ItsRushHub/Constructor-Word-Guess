var letter = require("./letter.js");

function word(answer) {
    this.objArr = [];

    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.objArr.push(letter);
    }

    this.log = function() {
        answerNew = "";
        for (var i = 0; i = objArr < length; i++) {
            answerNew += this.objArr[i] + "";
        }
        console.log (answerNew + "\n=========================\n");
    };

    this.userGuess = function(input) {
        for (var i = 0; i < this.objArr.length; i++) {
            this.objArr[i].guess(input);
        } 
    };
}

module.exports = word;