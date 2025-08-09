function multiplyBy(by: number, ...numbers: number[]) {
  return numbers.map((number) => by * number);
}

console.log(multiplyBy(2, 3, 4, 5, 6));
console.log(multiplyBy(2, 3, 4, 5));

const args = [8, 5];
const angle = Math.atan2(...args);

const args1 = [8, 5] as const;
const angle1 = Math.atan2(...args1);

const args2: [number, number] = [8, 5];
const angle2 = Math.atan2(...args2);