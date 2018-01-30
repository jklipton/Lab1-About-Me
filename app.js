'use strict';

// Ask You questions:
    // User's Name
    const name = prompt('What\'s your name?');
    alert('Hey ' + name + ', let\'s talk travel!');
    console.log('This user\'s name is: ' + name);

    // User's Destination
    const userDest = prompt('Where do you most want to travel?');
    alert("Cool, " + name + "! I've heard good things about " + userDest + ".");
    console.log(name + ' wants to go to ' + userDest + '!');

    // User's Companion
    const userComp = prompt('Who would you take with you?');
    alert('Wow, ' + name + '! I bet ' + userDest + ' would be amazing with ' + userComp + '.');
    console.log(name + ' would travel with ' + userComp + '.');

    // User's Activity
    const userAct = prompt('What would you folks do first in ' + userDest + "?");
    alert("Well, " + name + ", I hope you get to " + userAct + " with " + userComp + " in " + userDest + " one day!");
    console.log(name + ' wants to ' + userAct + ' in ' + userDest + '!');

//Transition
alert("Guess my dream vacation!");

// Ask Me questions:

    //My dream exists?
    const myDream = prompt('Do you think I have an ultimate dream destination?');

    if (myDream.toLowerCase() === 'yes' || 'y'){
        console.log(name + ' thinks I have a dream destination! (They\'re right!');
        alert('Haha, yeah. I totally do.');
    } else {
        console.log(name + 'does not think I have a dream destination.');
        alert('Sorry, I definitely do!  Been dreaming about it forever.');
    }

    //Dream temperature
    const dreamTemp = prompt('Do you think my dream spot is in a hot climate?');

    if (dreamTemp.toLowerCase() === 'yes' || 'y'){
        console.log(name + ' thinks I should go where it\'s warm, instead. I probably should.');
        alert('Yeah, that would be smarter. But actually, my dream destination is usually really cold.')
    } else {
        console.log(name + ' knows my dream spot is a cold place!');
        alert('You\'re right!  Kind of crazy, but my dream spot is pretty cold, year round.');
    }

    //Dream Hemisphere
    const dreamHemi = prompt('Do you think my dream destination is in the Southern Hemisphere?')

    if (dreamHemi.toLowerCase() === 'yes' || 'y'){
        console.log(name + ' thinks my dream vacay is in the Southern Hemisphere!  Unfortunately, not.');
        alert('The Southern Hemisphere is full of great places!  But, my ultimate destination is actually in up North.')
    } else {
        console.log(name + ' knows my dream vacay is in the Northern Hemisphere!');
        alert('Hey, you\'re right!  As cool as it is down south, my first pick place is actually in the North!');
    }

    //Dream ski
    const dreamSki = prompt('Okay, so you know it\'s in the Northern Hemisphere.  Am I going on a ski trip?')

    if (dreamSki.toLowerCase() === 'yes' || 'y'){
        console.log(name + ' thinks I want to go skiing! Ew.');
        alert('Actually, ' + name + ', I really don\'t like to ski. My dream would be to see the Northern Lights!')
    } else {
        console.log(name + ' guessed that I\'m not into skiing!  Cool beans.');
        alert('Yeah.  I like the mountains, but what I really want to do is see the Northern Lights!');
    }
    
    //Join in
    const userJoin = prompt('Would you want to come too?');

    if (userJoin.toLowerCase() === 'yes' || 'y')    {
        console.log(name + ' is coming with me!');
        alert('Cool!  It would be such an amazing experience.')
    } else {
        console.log(name + ' doesn\'t want to join me, boo.');
        alert('I\'m going to assume it\'s because of the cold...');
    }

// Sign-Off

alert('Good chat, ' + name + '!');