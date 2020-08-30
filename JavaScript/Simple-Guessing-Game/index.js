document.addEventListener('DOMContentLoaded', () => {
  const answer = 7

  const guessingGame = () => {
    let guess = Number(prompt('Guess a number!'))
    if (guess > answer) {
      alert('Too high. Refresh to guess again.')
    } else if (guess < answer) {
      alert('Too low. Refresh to guess again.')
    } else {
      alert('You guessed it!!!')
    }
  }

  guessingGame()
})