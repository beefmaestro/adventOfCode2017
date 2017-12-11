const colors = require('colors');
let input = `225,171,131,2,35,5,0,13,1,246,54,97,255,98,254,110`;
// let input = `3, 4, 1, 5`;
input = input.split(',');

let position = 0;
let skipSize = 0;
let list = [];
const listSize = 255;
for (let i = 0; i <= listSize; i++) {
  list.push(i);
}

const reverse = length => {
  length = parseInt(length);
  // reverse order of all elements from the starting position to length
  if (position > listSize) {
    position = position - listSize - 1;
  }

  // console.log(`position ${position}, length ${length}, skipsize ${skipSize}`)
  // console.log(`selected position ${list[position]}`)

  let reversed = [];
  let isWrapping = false;
  if ((position + length) > listSize) {
    isWrapping = true;

      reversed = list.splice(position);

      let numberToCutFromStart = (position + length) - listSize - 1;
      let frontCut = list.splice(0, numberToCutFromStart);


      reversed = reversed.concat(frontCut).reverse();
      frontCut = reversed.splice(reversed.length - numberToCutFromStart);

      // frontCut = reversed.splice(0, numberToCutFromStart);

      list = frontCut.concat(list).concat(reversed);
  } else {
    let frontCut = list.splice(0, position)
    let reversed = list.splice(0, length);

    list = frontCut.concat(reversed.reverse()).concat(list);
  }

  position = position + length + skipSize;
  skipSize++;
};

input.forEach(length => {
  reverse(length);
});
console.log(list[0] * list[1])
