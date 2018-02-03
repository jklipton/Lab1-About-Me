'use strict';

// Define arrays
const yes = ['yes', 'y', 'yeah', 'yes!', 'sure', 'totally'];
const no = ['no', 'n', 'nah', 'nope', 'no!', 'nah bro'];

const questions = ['Do I drink coffee or tea?', 'What is my favorite color?',
    'What month was I born?', 'Name one state I\'ve lived in, besides Oregon.',
    'Am I a cat person?', 'Am I a dog person?', 'Am I a bird person?'];
const states = ['massachusets', 'new york', 'vermont', 'indiana'];
const answers = ['coffee', 'purple', 'july', states, 'y', 'y', 'n'];
const posAnswer = ['Yes, I do! I don\'t do well without it.',
    'Wow, you\'re right! That was a hard one.',
    'Yep! I\'m a summer baby.', 'Yep!  I\'ve lived in Massachusetts, New York, Vermont, and Indiana.',
    'I totally am! Cats were my first love.',
    'Yeah, I love dogs, too! I live with two of them.',
    'Yeah, I\'m not. Birds freak me out.'];
const negAnswer = ['Well, sometimes. But my soul identifies with coffee',
    'Nope! My favorite, favorite color is purple.', 'Actually, I was born in July!',
    'I haven\'t lived there, yet! Maybe they have coding jobs?',
    'What? Of course I am. Cats are my jam.', 'Nope! Kind of a trick question, I know, but I love dogs, too.',
    'You might think so, but birds freak me out.'];

// Functions + variables
let score = 0;
const userName = askName ();
play();
loopQuestions();

// Score!
if (score > 4) {
    alert('Good job, ' + userName + '! You scored ' + score + ' out of 7! Thanks for playing!');
} else {
    alert('Aw, too bad, ' + userName + '. You only scored ' + score + ' out of 7. Thanks for playing!');
}

// Define functions
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
            alert('Hi, ' + userName + ', nice to meet you! My name is Jen.');
            break;
        }
    }
    console.log('Visitor\'s name is: ' + userName);
    return userName;
}
console.log('User\'s name is: ' + userName);

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

function loopQuestions() { 
    for (let i = 1; i < 7; i++){
        let guess = prompt(questions[i]).toLowerCase();
        if (i > 3){
            guess = convertGuess(guess);
        }
        switch(true){
        case guess === '' || guess === false:
            guess = prompt('Try answering the question! ' + questions[i]).toLowerCase();
            printScore(i);
            break;
        case guess === answers[i]:
            alert(posAnswer[i]);
            score++;
            printScore(i);
            break;
        case guess != answers[i]:
            alert(negAnswer[i]);
            printScore(i);
            break;
        }
    }
}

function convertGuess (string){
    if (yes.includes(string)){
        string = 'y';
    } else if (no.includes(string)){
        string = 'n';
    } else {
        alert('Please respond with \'Yes\' or \'No\'.');
    }
    return string;
}

function printScore (a){
    console.log('After Question #' + a + ', score: ' + score);
}
