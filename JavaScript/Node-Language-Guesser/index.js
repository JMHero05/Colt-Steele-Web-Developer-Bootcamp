const franc = require('franc');
const langs = require('langs');
const langCode = franc(
  'Hello, World! Codecademy has helped tens of millions of learners upgrade their careers, build meaningful projects, and gain confidence in their skills with engaging, accessible, and flexible online coding education. We provide hands-on, interactive lessons ranging from Python to R to JavaScript and everything in between. Our learners have gone on to start companies, new jobs, and new lives thanks to what they’ve learned with Codecademy.'
);

const language = langs.where('3', langCode);
console.log(language.name);
