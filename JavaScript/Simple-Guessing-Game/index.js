document.addEventListener('DOMContentLoaded', () => {
  let answer, guess;

  const getRandomAnswer = (min, max) => {
    answer = Math.floor(Math.random() * (max - min) + min);
    return answer;
  };

  const guessingGame = () => {
    guess = parseInt(prompt('Guess a number!'));

    while (parseInt(guess) !== answer) {
      if (!guess) {
        while (!guess) {
          guess = parseInt(prompt('Not a valid number! Guess again.'));
        }
      }

      if (guess > answer) {
        guess = prompt("Too high. Guess again! (Enter 'q' to quit)");
      } else if (guess < answer) {
        guess = prompt("Too low. Guess again! (Enter 'q' to quit)");
      } else if (guess === 'q') {
        alert(
          'You quit the game. Better luck next time. Refresh to play again'
        );
        break;
      } else if (!parseInt(guess)) {
        guess = parseInt(
          prompt(
            "OH COME ON! We've been through this before! That's not a valid number! Guess again."
          )
        );
      }
    }
  };

  getRandomAnswer(1, 1000);
  guessingGame();
});
