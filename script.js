'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!'; //we change the text in class message DOM Manipulation

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //method have a random number with no decimal

let score = 20;
let highSCore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//class name and event 'click

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('Not a Number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct a Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#699fe6';
    document.querySelector('.number').style.width = '30rem';

    //implementation of highscore
    if (score > highSCore) {
      highSCore = score;
      document.querySelector('.highscore').textContent = highSCore;
    }

    //when guess is too High
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--; //on decrement de -1 le score
      document.querySelector('.score').textContent = score; //read the information in DOM
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Initialize game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...'); //see the number
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
