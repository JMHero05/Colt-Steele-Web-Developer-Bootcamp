const newH1 = document.createElement('h1');
const newButton = document.createElement('button');
const body = document.querySelector('body');

newH1.innerText = 'Click button for a random color!';
newButton.innerText = 'Change Color!';

// Button Event Listener
newButton.addEventListener('click', () => {
  const randomColor = randomizeColor();
  body.style.backgroundColor = randomColor;
  newH1.innerText = randomColor;
  whiteOrBlackFont(randomColor);
});

// Function to Randomize Numbers
const getRandomInt = () => {
  return Math.floor(Math.random() * 256);
};

// Function to Randomize Colors
const randomizeColor = () => {
  return `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
};

// Function to Total Randomized Numbers
const whiteOrBlackFont = (str) => {
  let numStr = str.split('(')[1].split(')')[0];
  let arr = numStr.split(',');

  let total = arr.map((num) => parseInt(num)).reduce((a, b) => a + b);

  return total > 300
    ? (newH1.style.color = 'black')
    : (newH1.style.color = 'white');
};

body.appendChild(newH1);
body.appendChild(newButton);
