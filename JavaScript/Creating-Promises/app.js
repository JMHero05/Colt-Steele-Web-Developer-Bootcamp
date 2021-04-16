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
