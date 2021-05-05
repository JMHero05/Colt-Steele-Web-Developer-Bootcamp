const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('WE GOT A NEW REQUEST!');
// });

app.get('/', (req, res) => {
  res.send('THIS IS THE HOMEPAGE');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>THIS IS A SUBREDDIT ABOUT...${subreddit}</h1>`);
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  q
    ? res.send(`THESE ARE THE SEARCH RESULTS FOR: ${q}`)
    : res.send('<h1>Nothing found if nothing searched</h1>');
});

app.get('/cats', (req, res) => {
  res.send('MEOW!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

app.get('*', (req, res) => {
  res.send(`I DON'T KNOW THAT PATH :(`);
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});
