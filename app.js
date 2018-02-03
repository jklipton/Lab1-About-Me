'use strict';

// // Define arrays
const yes = ['yes', 'y', 'yeah', 'yes!', 'sure'];
const no = ['no', 'n', 'nah', 'nope', 'no!',];
const wrong = ['Nope.', 'Nah.', 'Close, but no!', 'Sorry, that\'s not right.'];
const right = ['Yes!', 'Yep!', 'Right on.', 'Yeah, that\'s right!', 'You got it!'];

const blankQuestions = ['Do I drink coffee or tea?', 'What is my favorite color?','What month was I born?'];
const blankAnswers = ['coffee', 'purple', 'july'];
const ynQuestions = ['Am I a cat person?', 'Am I a dog person?', 'Am I a bird person?'];
const ynAnswers = ['1', '1', '0'];

let score = 0;

// functions
const userName = askName();
play();
loopQuestions();


// Welcome
function askName() {
    let userName = prompt('Hey, let\'s chat! What should I call you?');
    for (let i = 0; i <= 3; i++) {
        if ((userName === false || userName === '') && i < 3) {
            userName = prompt('Give me a name!  Any name!');
        } else if ((userName === false || userName === '') && i === 3){
            alert('Okay, smartie. I\'ll just call you Meryl.');
            userName = 'Meryl';
            break;
        } else {
            alert('Hi, ' + userName + ', nice to meet you!  My name is Jen.');
            break;
        }
    }
    console.log('Visitor\'s name is: ' + userName);
    return userName;
}
console.log('User\'s name is: ' + userName);

//Guessing Game?
function play() {
    const gameYN = prompt('You want to play a guessing game?').toLowerCase();
    console.log(userName + ' said ' + gameYN + ' to playing.');
    if (yes.includes(gameYN)) {
        alert('Yay!');
    } else if (no.includes(gameYN)) {
        alert('What? Of course you do!');
    } else {
        alert('Let\'s play with Yes or No answers.');
    }
}


// Questions 1-3, Fill in the blank

function loopQuestions() {
    for (let i = 0; i <= 2; i++){
        let guess = prompt(blankQuestions[i]).toLowerCase();
        if (guess != blankAnswers[i]){
            //Incorrect answer!
            switch (true){
            case guess === '' || guess === false:
                guess = prompt('Try answering the question! ' + blankQuestions[i]).toLowerCase();
                break;
            case guess != blankAnswers[i]:
                guess = prompt('Try once more, ' + userName + '! ' + blankQuestions[i]).toLowerCase();
                break;
            case guess == blankAnswers[i]:
                score++;
                alert(right[Math.floor(Math.random() * right.length)] + ' Next question!');
                console.log('After Question #' + (i + 1) + ', score: ' + score);
                break;
            }
            console.log('After Question #' + (i + 1) + ', score: ' + score);
        } else if (guess == blankAnswers[i]){
            //Correct answer!
            score++;
            alert(right[Math.floor(Math.random() * right.length)] + ' Next question!');
            console.log('After Question #' + (i + 1) + ', score: ' + score);
        }
    }

    //4+5 Y/N Questions

    for (let i = 0; i < 3; i++ ){
        let guess = prompt(ynQuestions[i]).toLowerCase();
        guess = convertGuess(guess);
        if (guess === ynAnswers[i]){
            alert(right[Math.floor(Math.random() * right.length)] + ' Of course I am, ' + userName + '!');
            score ++;
        } else {
            alert(wrong[Math.floor(Math.random() * wrong.length)] + ' Too bad, ' + userName + '!');
        }
    }


    // Question 6, Guess the number

    const numRandom = Math.floor(Math.random() * 10) + 1;
    console.log('The random number is: ' + numRandom);

    let numGuess = parseInt(prompt('I\'m thinking of a number between 1 and 10...'));
    console.log('User guessed: ' + numGuess);

    for (let g = 4; g >= 1; g--){
        if (numGuess === numRandom) {
            alert('You got it!  Nice.');
            score++;
            break;
        } else if (numGuess < numRandom){
            numGuess = parseInt(prompt('Think bigger! You have ' + g + ' more guesses.'));
            console.log('User guessed: ' + numGuess);
        } else if (numGuess > numRandom){
            numGuess = parseInt(prompt('Too high! You have ' + g + ' more guesses.'));
            console.log('User guessed: ' + numGuess);
        } else {
            numGuess = parseInt(prompt('Try a numeral between 1 and 10! You have ' + g + ' more guesses.'));
            console.log('User guessed: ' + numGuess);
        }
    }
    console.log('After Question #6, score: ' + score);

    // Question 8, Multiple Choice
    const states = ['massachusetts', 'new york', 'vermont', 'indiana'];

    const stateGuess = prompt('Here\s an easier one: name a state that I\'ve lived in, besides Oregon.').toLowerCase();
    if (states.includes(stateGuess)){
        alert('You\'re right!  I did live in ' + stateGuess + '.');
        score++;
    } else {
        alert('Sorry, never lived there!  Oh, well.');
    }
    console.log('After Question #7, score: ' + score);
    return score;
}

// Score!
if (score > 4) {
    alert('Good job, ' + userName + '! You scored ' + score + ' out of 7! Thanks for playing!');
} else {
    alert('Aw, too bad, ' + userName + '. You scored ' + score + ' out of 7.  Thanks for playing!');
}

// Define functions
function convertGuess (string){
    if (yes.includes(string)){
        string = '1';
    } else if (no.includes(string)){
        string = '0';
    } else {
        alert('Error, please response with yes or no.');
    }
    return string;
};
