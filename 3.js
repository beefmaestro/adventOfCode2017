const input = 368078;

const steps = n => {
  const root = Math.ceil(Math.sqrt(n));
  const currentSideLength = root % 2 !== 0 ? root : root + 1;
  const numR = (currentSideLength - 1) / 2;
  const cycle = n - ((currentSideLength - 2) ** 2);
  const innerOffset = cycle % (currentSideLength - 1);

  return numR + Math.abs(innerOffset - numR);
};

console.log(steps(input));
