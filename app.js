'use strict';
// To do, make questions lowercase

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

//Questions 2-4, Fill in the blank

// const questions = ['Do I drink coffee or tea?', 'What is my favorite color?','What month was I born?'];
// const answers = ['coffee', 'purple', 'july'];
// const wrong = ['Nope.', 'Nah.', 'Close, but no!', 'Sorry, that\'s not right.'];
// const right = ['Yes!', 'Yep!', 'Right on.', 'Yeah, that\'s right!', 'You got it!'];
 let score = 0;

// for (let i = 0; i <= 2; i++){
//     let guess = prompt(questions[i]);
//     if (guess != answers[i]){
//         //Incorrect answer!
//         for (let j = 0; j <= 1; j++) {
//             if (guess != answers[i]){
//                 alert(wrong[Math.floor(Math.random() * wrong.length)] + ' Try again!');
//                 guess = prompt(questions[i]);
//             } else {
//                 alert(right[Math.floor(Math.random() * right.length)] + ' Next question!');
//                 score++;
//                 break;
//             }
//         }
//         console.log('After Question #' + (i + 1) + ', score: ' + score);
//     } else if (guess == answers[i]){
//         //Correct answer!
//         score++;
//         alert(right[Math.floor(Math.random() * right.length)] + ' Next question!');
//         console.log('After Question #' + (i + 1) + ', score: ' + score);
//     }
// }

// Question 5 + 6, Yes or Nos
const yes = ['yes', 'y', 'yeah', 'yes!', 'sure'];
const no = ['no', 'n', 'nah', 'nope', 'no!',];

const dogPerson = prompt('Do you think I\'m a dog person?').toLowerCase();
if (yes.includes(dogPerson)){
    alert('Haha, yeah. I totally am. I have a big white thing at home.');
    console.log('Am I a dog person? ' + dogPerson);
    score++;
} else if (no.includes(dogPerson)) {
    alert('Sorry, I definitely am! I could never give up dogs.');
    console.log('Am I a dog person? ' + dogPerson);
} else {
    console.log('Error on Question #5.');
    alert('Try answering the question!');
}
console.log('After Question #5, score: ' + score);

const catPerson = prompt('Do you think I\'m a cat person?').toLowerCase();
if (yes.includes(catPerson)){
    alert('You\'re right, I\'m a cat person, too. Who can choose?');
    console.log('Am I a cat person? ' + catPerson);
    score++;
} else if (no.includes(catPerson)) {
    alert('Kind of a trick question, but I love cats too! My first love was an orange tom.');
    console.log('Am I a cat person? ' + catPerson);
} else {
    console.log('Error on Question #6.');
    alert('Try answering the question!');
}
console.log('After Question #6, score: ' + score);




