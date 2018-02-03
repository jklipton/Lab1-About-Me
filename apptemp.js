for (let i = 0; i <= 2; i++){
    let guess = prompt(blankQuestions[i]).toLowerCase();
    if (guess != blankAnswers[i]){
    //Incorrect answer!
        for (let j = 0; j <= 1; j++) {
            switch (guess){
            // case guess === undefined || guess === '':
            //     guess = prompt('Try answering the question! ' + blankQuestions[i]).toLowerCase();
            //     break;
            case guess != blankAnswers[i]:
                guess = prompt('Try again, ' + userName + '! ' + blankQuestions[i]).toLowerCase();
                break;
            case guess == blankAnswers[i]:
                score++;
                alert(right[Math.floor(Math.random() * right.length)] + ' Next question!');
                console.log('After Question #' + (i + 1) + ', score: ' + score);
                break;
            }
            // if (guess != blankAnswers[i]){
            //     alert(wrong[Math.floor(Math.random() * wrong.length)] + ' Try again, ' + userName + '!');
            //     guess = prompt(blankQuestions[i]).toLowerCase();
            // } else {
            //     alert(right[Math.floor(Math.random() * right.length)] + ' Next question!');
            //     score++;
            //     break;
            // }
        }
        console.log('After Question #' + (i + 1) + ', score: ' + score);
    } else if (guess == blankAnswers[i]){
    //Correct answer!
        score++;
        alert(right[Math.floor(Math.random() * right.length)] + ' Next question!');
        console.log('After Question #' + (i + 1) + ', score: ' + score);
    }
}