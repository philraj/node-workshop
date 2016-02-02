var prompt = require('prompt');
var answer = 0;
var attempts = 4;

startGame();
prompt.start();
getGuess();




function startGame () {
    answer = Math.floor( Math.random() * 100 ) + 1;
    console.log("Answer: " + answer);
    console.log("Guess a number from 0 to 100:"); 
}

//recursively gets user input
function getGuess () {
    prompt.get( ['guess'], function (err, result) {
        if (err) return err;
        attempts--;
        
        var guess = Number(result.guess);
        
        if (guess === answer) {
            console.log("You win!");
            askToRestart();
        } 
        //if guess is wrong but user still has attempts...
        else if (attempts > 0) {
            var hint = guess > answer ? 'too high' : 'too low';
            
            console.log("Your guess is " + hint + ". You have " + attempts + " attempts left. Try again.");
            getGuess();
        } 
        else {
            console.log("You lose! The answer was " + answer + ".");
            askToRestart();
        }
    });
}

function askToRestart () {
    console.log("Play again? Enter 'y' to start over.");
    
    prompt.get(['input'], function (err, result) {
        if (err) return err;
        
        if (result.input === "y" || result.input === "Y") {
            attempts = 4;
            startGame();
            getGuess();
        }
    });
}