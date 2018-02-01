'use strict';

// Define YN arrays
const yes = ['yes', 'y', 'yeah', 'yes!', 'sure'];
const no = ['no', 'n', 'nah', 'nope', 'no!',];

// // Welcome
// let userName = prompt('Hey, let\'s chat! What should I call you?');
// for (let i = 0; i <= 3; i++) {
//     if ((userName == false || userName == '') && i < 3) {
//         userName = prompt('Give me a name!  Any name!');
//     } else if ((userName == false || userName == '') && i === 3){
//         alert('Okay, smartie.  I\'ll just call you Meryl.');
//         userName = 'Meryl';
//         break;
//     } else {
//         alert('Hi, ' + userName + ', nice to meet you!  My name is Jen.');
//         break;
//     }
// }
// console.log('Visitor\'s name is: ' + userName);

// //Guessing Game?
// const gameYN = prompt('You want to play a guessing game?').toLowerCase();
// console.log(userName + ' said ' + gameYN + ' to playing.');
// if (yes.includes(gameYN)) {
//     alert('Yay!');
// } else if (no.includes(gameYN)) {
//     alert('What? Of course you do!');
// } else {
//     alert('Let\'s play with Yes or No answers.');
// }

//Questions 2-5

const questions = ['Do I drink coffee or tea?', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];
const answers = ['coffee', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5'];
const wrong = ['Nope.', 'Nah.', 'Close, but no!', 'Sorry, that\'s not right.'];
const right = ['Yes!', 'Yep!', 'Right on.', 'Yeah, that\'s right!', 'You got it!'];
let score = 0;

for (let i = 0; i <= 4; i++){
    let guess = prompt(questions[i]).toLowerCase;
    if (guess != answers[i]){
        //Incorrect answer!
        for (let j = 0; j <= 1; j++) {
            if (guess != answers[i]){
                alert(wrong[Math.floor(Math.random() * wrong.length)] + ' Try again!');
                guess = prompt(questions[i]);
            } else {
                alert(right[Math.floor(Math.random() * right.length)] + ' Next question!');
                score++;
                console.log('After Question #' + (i + 1) + ', score: ' + score);
                break;
            }
        }
        console.log('After Question #' + (i + 1) + ', score: ' + score);
    } else if (guess == answers[i]){
        //Correct answer!
        score++;
        alert(right[Math.floor(Math.random() * right.length)] + ' Next question!');
        console.log('After Question #' + (i + 1) + ', score: ' + score);
    } 
}
