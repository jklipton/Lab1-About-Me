'use strict';

// Define YN arrays
const yes = ['yes', 'y', 'yeah', 'yes!', 'sure'];
const no = ['no', 'n', 'nah', 'nope', 'no!',];

// Welcome
let userName = prompt('Hey, let\'s chat! What should I call you?');
for (let i = 0; i <= 3; i++) {
    if ((userName == false || userName == '') && i < 3) {
        userName = prompt('Give me a name!  Any name!');
    } else if ((userName == false || userName == '') && i === 3){
        alert('Okay, smartie.  I\'ll just call you Meryl.');
        userName = 'Meryl';
        break;
    } else {
        alert('Hi, ' + userName + ', nice to meet you!  My name is Jen.');
    }
}
console.log('Visitor\'s name is: ' + userName);

//Guessing Game?
const gameYN = prompt('You want to play a guessing game?').toLowerCase();
console.log(userName + ' said ' + gameYN + ' to playing.');
if (yes.includes(gameYN)) {
    alert('Yay!');
} else if (no.includes(gameYN)) {
    alert('What? Of course you do!');
} else {
    alert('Let\'s play with Yes or No answers.');
}

//Questions 2-5

const questions = ['What should I call you?',];
const answers = [];
const wrong = [];
const right = [];
