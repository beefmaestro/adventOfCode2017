const colors = require('colors');
const input = require('./inputs/5').input;

let steps = input.split('\n');
steps = steps.map(n => parseInt(n));
let length = steps.length - 1;
let count = 0;
let current = 0;

while (current <= length) {
  let move = steps[current];
  if (move >= 3) {
    steps[current]--;
  } else {
    steps[current]++;
  }
  count++;
  current += move;
}

console.log(count);
