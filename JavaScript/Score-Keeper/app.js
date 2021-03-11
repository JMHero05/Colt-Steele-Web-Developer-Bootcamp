const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click', () => {
  p1Score++;
  document.querySelector('#p1Score').innerText = p1Score;
});

p2Button.addEventListener('click', () => {
  p2Score++;
  document.querySelector('#p2Score').innerText = p2Score;
});
