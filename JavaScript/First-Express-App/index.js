const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('WE GOT A NEW REQUEST!');
// });

app.get('/', (req, res) => {
  res.send('THIS IS THE HOMEPAGE');
});

app.get('/cats', (req, res) => {
  res.send('MEOW!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});
