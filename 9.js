const colors = require('colors');
let {input} = require('./inputs/9');

const removeGarbage = stream => {
  //first remove all !!'s
  stream = stream.replace(/!!/g , '');
  //remove all cancelled characters
  stream = stream.replace(/!./g, '');
  //remove all garbage - part 1 only
  // stream = stream.replace(/<.*?>/g, '');
  return stream;
};

const countGroups = stream => {
  stream = removeGarbage(stream);

  let count = 0;
  let group = 0

  for (let char of stream) {
    if(char === '{') {
      group++;
    } else if(char === '}') {
      count += group;
      group--;
    }
  }

  console.log(count);
};

const countGarboCharacters = stream => {
  stream = removeGarbage(stream);

  let count = 0;
  let start = false;
  for (let char of stream) {
    if (char === '<' && !start) {
      start = true;
    } else if(char === '>' && start) {
      start = false;
    } else {
      if (start) {
        count++;
      }
    }
  }
  console.log(count);
};

countGarboCharacters(input);
// countGroups(input);
