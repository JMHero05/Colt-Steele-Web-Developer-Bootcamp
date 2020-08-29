document.addEventListener('DOMContentLoaded', () => {
  const age = prompt('How old are you?')

  const bouncer = () => {
    if (age < 0) {
      alert("You can't have a negative age. Get a better fake next time.")
    } else if (age < 18) {
      alert("Sorry, you are not old enough to enter the venue.")
    } else if (age < 21) {
      alert("You can enter, but cannot drink.")
    } else if (age == 21) {
      alert("Happy 21st birthday! LET'S RAGE!!!")
    } else {
      alert("Come on in. You can drink.")
    }
  }
  const mathNerd = () => {
    if (((age % 2) == 1) && ((Math.sqrt(age) % 1) === 0)) {
      alert("Also, your age is odd...are you?")
      alert("AND, your age is a perfect square! That's awesome! Wait...am I odd?")
    } else if (((age % 2) == 1)) {
      alert("Also, your age is odd...are you?")
    } else if (((Math.sqrt(age) % 1) === 0)) {
      alert("Also, your age is a perfect square and I'm a nerd!")
    }
  }

  bouncer()
  mathNerd()
})