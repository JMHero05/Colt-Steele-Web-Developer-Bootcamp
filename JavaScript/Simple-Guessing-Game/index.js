document.addEventListener('DOMContentLoaded', () => {
  let answer, guess;

  const getRandomAnswer = (min, max) => {
    answer = Math.floor(Math.random() * (max - min) + min);
    return answer;
  };

  const guessingGame = () => {
    guess = parseInt(prompt('Guess a number!'));

    while (parseInt(guess) !== answer) {
      if (guess > answer) {
        alert('Too high. Guess again!');
      } else if (guess < answer) {
        alert('Too low. Guess again!');
      }
    }
  };

  getRandomAnswer(1, 1000);
  guessingGame();
});
