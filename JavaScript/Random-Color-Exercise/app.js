const newH1 = document.createElement('h1');
const newButton = document.createElement('button');
const body = document.querySelector('body');

newH1.innerText = 'Click button for a random color!';
newButton.innerText = 'Click me!';

// Button Event Listener
newButton.addEventListener('click', () => {
  console.log('Clicked!');
});

// Function to Randomize Colors
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

body.appendChild(newH1);
body.appendChild(newButton);
