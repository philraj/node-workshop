var prompt = require('prompt');

var answer = Math.floor( Math.random() * 100 ) + 1;
console.log("Answer: " + answer);

console.log("Guess a number from 0 to 100:");

prompt.start();
prompt.get( ['guess'], function (err, result) {
    if (err) return err;

    var guess = Number(result.guess);
    
    if (guess === answer) {
        console.log("You win!");
    } else if (guess < answer) {
        console.log("Your guess is too low.")
    } else if (guess > answer) {
        console.log("Your guess is too high!")
    }
})