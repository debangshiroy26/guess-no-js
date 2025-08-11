// // constants
// let score=0
// let highScore=0;
// let lifespan = 5; // initial lifespan
// // lifespan is the number of attempts allowed
// let secretNumber=Math.trunc(Math.random()*20)+1;

// // elements selectors
// const numberSegment = document.querySelector('.number');
// const messageSegment = document.querySelector('.message');
// const lifespanSegment = document.querySelector('.lifespan');
// const scoreSegment = document.querySelector('.score');
// const highScoreSegment = document.querySelector('.highscore');
// const guessSegment = document.querySelector('.guess');
// const checkButton = document.querySelector('.check');
// const againButton = document.querySelector('.again');

// // functions
// const displayMessage = function(message) {
//     messageSegment.textContent = message;
// }

// checkButton.addEventListener('click', function(){
//     // console.log("this button was clicked");
//     const guess = Number (guessSegment.value)
//     // console.log(guess)

//     if (!guess) {
//         displayMessage('⛔ No number!');
//     }
//     else if (guess === secretNumber) {
//         displayMessage('Correct Number! 🎉');
//         numberSegment.textContent = secretNumber
//         numberSegment.style.width = '30rem';
//         document.querySelector('body').style.backgroundColor = '#60b347';

//         if (score> highScore) {
//             highScore = score
//             highScoreSegment.textContent = highScore
//         }

//     }

//     else if (guess !== secretNumber) {
//         if (lifespan == 1) {
//             displayMessage('You lost the game! 😢');
//             lifespanSegment.textContent = 0;
//             document.querySelector('body').style.backgroundColor = '#ff0000';
//             numberSegment.textContent = secretNumber;
//             return; // exit the function if no lifespan left
//         }
        
//         if (score < 20){
//             displayMessage(guess > secretNumber ? "too high" : "too low");
//             lifespan--;
//             lifespanSegment.textContent = lifespan;
//             score++;
//             scoreSegment.textContent = score

//     }
//     else {
//         displayMessage("You lost the game!!!!")
//         lifespanSegment.textContent = 0;
//         document.querySelector('body').style.backgroundColor = '#ff0000';
//         numberSegment.textContent = secretNumber
//     }

// }
// });

// againButton.addEventListener('click', function(){
//     lifespan = 5; // reset lifespan
//     lifespanSegment.textContent = lifespan;
//     score = 0;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     displayMessage('Start guessing...');
//     scoreSegment.textContent = score;
//     numberSegment.textContent = '?';
//     guessSegment.value = '';
//     document.querySelector('body').style.backgroundColor = '#222';
//     numberSegment.style.width = '15rem';
// })






// constants
let score=0
let highScore=0;
let lifespan = 5; // initial lifespan
// lifespan is the number of attempts allowed
let secretNumber=Math.trunc(Math.random()*20)+1;

// elements selectors
const numberSegment = document.querySelector('.number');
const messageSegment = document.querySelector('.message');
const lifespanSegment = document.querySelector('.lifespan');
const scoreSegment = document.querySelector('.score');
const highScoreSegment = document.querySelector('.highscore');
const guessSegment = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

// functions
const displayMessage = function(message) {
    messageSegment.textContent = message;
}

checkButton.addEventListener('click', function(){
    // console.log("this button was clicked");
    const guess = Number (guessSegment.value)
    // console.log(guess)

    if (!guess) {
        displayMessage('⛔ No number!');
    }
    else if (guess === secretNumber) {
        displayMessage('Correct Number! 🎉');
        numberSegment.textContent = secretNumber
        numberSegment.style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score> highScore) {
            highScore = score
            highScoreSegment.textContent = highScore
        }

    }

    else if (guess !== secretNumber) {
        if (lifespan == 1) {
            displayMessage('You lost the game! 😢');
            lifespanSegment.textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff0000';
            numberSegment.textContent = secretNumber;
            return; // exit the function if no lifespan left
        }
        
        if (score < 20){
            displayMessage(guess > secretNumber ? "too high" : "too low");
            lifespan--;
            lifespanSegment.textContent = lifespan;
            score++;
            scoreSegment.textContent = score

    }
    else {
        displayMessage("You lost the game!!!!")
        lifespanSegment.textContent = 0;
        document.querySelector('body').style.backgroundColor = '#ff0000';
        numberSegment.textContent = secretNumber
    }

}
});

againButton.addEventListener('click', function(){
    lifespan = 5; // reset lifespan
    lifespanSegment.textContent = lifespan;
    score = 0;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    scoreSegment.textContent = score;
    numberSegment.textContent = '?';
    guessSegment.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    numberSegment.style.width = '15rem';
})
