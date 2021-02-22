document.addEventListener('DOMContentLoaded', () => {
  let answer, guess;

  const guessingGame = () => {
    guess = Number(prompt('Guess a number!'));
    if (guess > answer) {
      alert('Too high. Refresh to guess again.');
    } else if (guess < answer) {
      alert('Too low. Refresh to guess again.');
    } else {
      alert('You guessed it!!!');
    }
  };

  guessingGame();
});
