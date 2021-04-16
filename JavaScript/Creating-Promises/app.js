// PLAYING AROUND WITH THE PROMISE OBJECT

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const randNum = Math.random();
    setTimeout(() => {
      if (randNum < 0.7) {
        resolve('YOUR FAKE DATA HERE');
      }
      reject('Request Error!');
    }, 3000);
  });
};

fakeRequest('/dogs/1')
  .then((data) => {
    console.log('DONE WITH REQUEST!');
    console.log('data is:', data);
  })
  .catch((err) => {
    console.log('OH NO!', err);
  });

// MORE PLAYING, BUT WITH SOME CSS INVOLVED

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};
