'use strict';

// Welcome

let userName = prompt('Hey, let\'s chat!  What do you want me to call you?');
if (userName == false) {
    do {
        userName = prompt('Come on, give me a name!  Any name!');

    } while (userName == false);
}
alert('Hey, ' + userName + ', nice to meet you!  I\'m Jen.');
console.log('Visitor\'s name is: ' + userName);

// Define arrays
const yes = ['yes', 'y', 'yeah', 'yes!', 'sure'];
const no = ['no', 'n', 'nah', 'nope', 'no!',];
