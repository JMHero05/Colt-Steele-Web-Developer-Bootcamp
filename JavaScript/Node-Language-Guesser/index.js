const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];
const langCode = franc(input);

function printLanguage() {
  const language = langs.where('3', langCode);
  language === undefined
    ? console.log(
        "Sorry, couldn't determine the language from the text provided. Try to enter different text or increase the length of previous text."
          .red
      )
    : console.log(`Our best guess is: ${language.name}`.green);
}

langCode === 'und'
  ? console.log(
      "Sorry, couldn't determine the language from the text provided. Try to enter different text or increase the length of previous text."
        .red
    )
  : printLanguage();
