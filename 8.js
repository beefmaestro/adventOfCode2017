const colors = require('colors');
let {input} = require('./inputs/8');
input = input.split('\n');

let test = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;
test = test.split('\n');

const parseInstructions = row => {
  let parts = row.split(' ');
  let instruction = {
    register: parts[0],
    incDec: parts[1],
    ammount: parseInt(parts[2]),
    conditionRegister: parts[4],
    conditionTest: parts[5],
    conditionValue: parseInt(parts[6])
  };
  return instruction;
};

const getRegisters = inp => {
  inp = inp.map(v => v.split(' ')[0]);
  let filtered = inp.filter((val, index) => {
    return inp.indexOf(val) === index;
  });
  filtered.sort();
  let registers = {};
  filtered.forEach(v => {
    registers[v] = 0;
  });
  return registers;
};

let highestEver = 0;
const addOrSubtract = (i, reg) => {
  if (i.incDec === 'dec') {
    reg[i.register] -= i.ammount;
  } else if (i.incDec === 'inc') {
    reg[i.register] += i.ammount;
  } else {
    // console.log(`Unknown incDec ${i.incDec}`.red)
  }

  if (reg[i.register] > highestEver) {
    highestEver = reg[i.register];
  }
};

const getMax = obj => {
  let biggest = 0;
  let bigKey = '';
  for (key in obj) {
    if (obj[key] > biggest) {
      biggest = obj[key];
      bigKey = key;
    }
  }
  console.log(biggest, key)
};

const run = (inp) => {
  let registers = getRegisters(inp);
  let instructions = inp.map(r => parseInstructions(r));
  instructions.forEach(i => {
    let reg = i.conditionRegister;
    let cond = i.conditionTest;
    let val = i.conditionValue;

    if (cond === '>' && registers[reg] > val) {
      addOrSubtract(i, registers);
    } else if (cond === '<' && registers[reg] < val) {
      addOrSubtract(i, registers);
    } else if (cond === '==' && registers[reg] == val) {
      addOrSubtract(i, registers);
    } else if (cond === '>=' && registers[reg] >= val) {
      addOrSubtract(i, registers);
    } else if (cond === '<=' && registers[reg] <= val) {
      addOrSubtract(i, registers);
    } else if (cond === '!=' && registers[reg] != val) {
      addOrSubtract(i, registers);
    } else {
      // console.log(`Unknown or unmet condition : ${registers[reg]} ${cond} ${val}`.red)
    }
  });

  getMax(registers);
  console.log(highestEver);
};

run(input);
