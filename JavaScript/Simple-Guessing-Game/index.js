document.addEventListener('DOMContentLoaded', () => {
  let answer, guess;

  const getRandomAnswer = (min, max) => {
    answer = Math.floor(Math.random() * (max - min) + min);
    return answer;
  };

  const guessingGame = () => {
    guess = parseInt(prompt('Guess a number!'));

    if (!guess) {
      while (!guess) {
        guess = parseInt(prompt('Not a valid number! Guess again.'));
      }
    }

    while (parseInt(guess) !== answer) {
      if (guess > answer) {
        alert("Too high. Guess again! (Enter 'q' to quit)");
      } else if (guess < answer) {
        alert("Too low. Guess again! (Enter 'q' to quit)");
      } else if (guess === 'q') {
        alert(
          'You quit the game. Better luck next time. Refresh to play again'
        );
        break;
    }
  };

  getRandomAnswer(1, 1000);
  guessingGame();
});
