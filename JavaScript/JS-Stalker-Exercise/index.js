document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const createDiv = document.createElement('div')

  const htmlFormat = () => {
    body.appendChild(createDiv)
    const div = body.querySelector('div')
    div.innerHTML = `
      <h1>JS Stalker Exercise</h1>
      <p>Variables, Strings, Prompt, Console.log</p>
      <ul>
        <li>Ask for the user's first name</li>
        <li>Ask for the user's last name</li>
        <li>Ask for the user's age</li>
        <li>Print out the user's full name in a sentence</li>
        <li>Print out the user's age in a sentence</li>
      </ul>
    `
  }

  const queries = () => {
    const userFirstName = prompt("What is your first name?")
    const userLastName = prompt("What is your last name?")
    const userAge = prompt("What is your age?")

    console.log(`Your full name is ${userFirstName} ${userLastName}.`)
    console.log(`You are ${userAge} years old.`)
    alert(`Your full name is ${userFirstName} ${userLastName}, and you are ${userAge} years old. I have all your information now and will be stealing your identity.`)
  }

  htmlFormat()
  queries()
})