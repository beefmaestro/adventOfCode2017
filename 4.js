const colors = require('colors');
const input = require('./inputs/4').input;

const phrases = input.split('\n');
let validPhrases = 0;

const sortLetters = word => [...word].sort().join('');

phrases.forEach(phrase => {
  let hasDupe = false;
  let words = phrase.split(' ');
  let sortedWords = words.map(word => sortLetters(word));

  while (hasDupe === false && sortedWords.length > 0) {
    let word = sortedWords.splice(0,1)[0];
    if (sortedWords.includes(word)) {
      hasDupe = true;
    }
  }

  if (hasDupe === false) {
    validPhrases++;
  }
});

console.log(validPhrases);
