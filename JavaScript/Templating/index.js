const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  const name = 'Home';
  res.render('home.ejs', { name });
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  data
    ? res.render('subreddit', { ...data })
    : res.render('notfound', { subreddit });
});

app.get('/cats', (req, res) => {
  const cats = ['June', 'Pickle', 'Bug', 'Ducky', 'Diddy'];
  const name = 'Cats';
  res.render('cats.ejs', { cats, name });
});

app.get('/rand', (req, res) => {
  const randNum = Math.floor(Math.random() * 10) + 1;
  const name = 'Random';
  res.render('random.ejs', { randNum, name });
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});
