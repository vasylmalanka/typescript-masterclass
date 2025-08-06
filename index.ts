// Duck Typing is used by TypeScript for inference of types.
//* "If it looks like a duck and quacks like a duck, it's a duck".
// Declaration
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

// Annotation
let firstname: CustomString = "Mark";
let age: CustomNumber = 32;
let today: CustomDate = new Date();
let unique: CustomSymbol = Symbol();

function addNumbers(a: number, b: number) {
  return a + b;
}

// Inference
let finalResult = addNumbers(10, 15);
