'use strict';

// Define YN arrays
const yes = ['yes', 'y', 'yeah', 'yes!', 'sure'];
const no = ['no', 'n', 'nah', 'nope', 'no!',];

// Welcome

let userName = prompt('Hey, let\'s chat! What should I call you?');
if (userName == false) {
    do {
        userName = prompt('Come on, give me a name!  Any name!');

    } while (userName == false);
}
alert('Hey, ' + userName + ', nice to meet you!  I\'m Jen.');
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
