type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;
type check3 = null extends any ? true : false;
type check4 = undefined extends void ? true : false;
type check5 = [] extends Object ? true : false;
type check6 = Function extends Object ? true : false;

// A function declaration that never completes returns a never type
const throwError = (errMessage: string) => {
  throw new Error(errMessage);
}

let strings: Object = ["a", "b"];
let myFunct: Object = () => 2;
