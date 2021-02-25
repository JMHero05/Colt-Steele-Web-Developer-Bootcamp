window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')

  const createLayout = () => {
    const createH1 = document.createElement('h1')
    const createP = document.createElement('p')

    body.appendChild(createH1)
    body.appendChild(createP)

    const h1 = document.querySelector('h1')
    h1.textContent = "Age Calculator"

    const p = document.querySelector('p')
    p.textContent = "Enter your age and find out how many days you've been alive."

  }

  const ageCalculator = () => {
    const age = prompt('How old are you?')
    const ageInDays = age * 365.25
    alert(`${age} years is roughly ${ageInDays} days old :)`)
  }

  ageCalculator()
  createLayout()
})