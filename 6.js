const input = `11 11 13 7 0 15 5 5 4 4 1 1 7 1 15 11`;
// const input = `0 2 7 0`;
let banks = input.split(' ');
banks = banks.map(n => parseInt(n));
let history = [];

const reAllocate = arr => {
  history.push(arr.join());
  let biggest = Math.max(...banks);
  let bigIndex = arr.indexOf(biggest);
  arr[bigIndex] = 0;

  while (biggest > 0) {
    if (bigIndex === arr.length - 1) {
      bigIndex = 0;
    } else {
      bigIndex++;
    }

    arr[bigIndex]++;
    biggest--;
  }
  return arr;
};

const findDuplicate = arr => {
  let found = false;
  let count = 0;
  while (found === false) {
    count++;
    let newArr = reAllocate(banks);
    if (history.indexOf(newArr.join()) > -1) {
      found = true;
    }
  }
  console.log(count);
};

findDuplicate(banks);
history = [];
findDuplicate(banks);
