var prompt = require('prompt');

var answer = Math.floor( Math.random() * 100 ) + 1;
var attempts = 4;
console.log("Answer: " + answer);


prompt.start();
console.log("Guess a number from 0 to 100:");

getGuess();

//recursively gets user input
function getGuess () {
    prompt.get( ['guess'], function (err, result) {
        if (err) return err;
        attempts--;
        
        var guess = Number(result.guess);
        
        if (guess === answer) {
            console.log("You win!");
        } 
        //if guess is wrong but user still has attempts...
        else if (attempts > 0) {
            var hint = guess > answer ? 'too high' : 'too low';
            
            console.log("Your guess is " + hint + ". You have " + attempts + " attempts left. Try again.");
            
            getGuess();
        } 
        else {
            console.log("You lose! The answer was " + answer + ". Better luck next time.");
        }
    });
}