import { add } from "./calculator";

// (alias) add(a: number, b: number): number (+3 overloads)
// import add
const sum = add(5, 3);
// (alias) add(a: string, b: number): string (+3 overloads)
// import add
const concatenated = add('5', 3);
// (alias) add(a: string, b: string): string (+3 overloads)
// import add
const strings = add('Hello', 'World');
