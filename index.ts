const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

let bigInt1: bigint = BigInt(1234);
let bigInt2: bigint = 123434543n;
console.log(bigInt1);

let c: bigint = bigInt1 - bigInt2;

let e: bigint = 123456n;

let f = Math.log(bigInt1);
