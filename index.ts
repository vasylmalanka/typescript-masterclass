type Numbers = {
  a: number;
  b: number;
  c: number;
};

let numbersObject: Numbers = {
  a: 2,
  b: 3,
  c: 4,
};

function sum({ a, b, c }: Numbers) {
  return a + b + c;
}

console.log(sum(numbersObject));
console.log(sum({a: 3, b: 4, c: 'string'}));
