let city = "New York"; // string
let population = 8400000; // number
const age = 32; // number -- // 32
let oldAge = 79 as const; // number -- // 79
let newAge = oldAge; // number -- // 79
let data = new Map(); // Object -- // Map
let score = [90, 86, 100]; // Array // number[]
type Primitive = string | number | boolean; // string | number | boolean
type CustomName = "John" extends string ? string : "John"; // string
type CustomAge = typeof newAge extends number ? 79 : number; // 79
type CheckData = typeof data extends Object ? true : false; // true
type CheckScore = typeof score extends never ? {} : []; // Array

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85; // not valid
// score.push(10); // valid
// score.push("New Score"); // valid -- // not valid
// let customAge: CustomAge = 50; // not valid
// let primitive: Primitive = new Date(); // not valid
// let years: CheckScore = []; // valid
