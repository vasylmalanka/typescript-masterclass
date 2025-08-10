type GetFirstElement = <T>(arr: T[]) => T;

const getFirstElement: GetFirstElement = (arr) => {
  return arr[0];
};

const numbersArray = [1, 23, 4, 5];
const stringArray = ['a', 'v'];

let numberOutput = getFirstElement(numbersArray);
let stringArrayOutput = getFirstElement<string>(stringArray);

type FirstElement<T> = (arr: T[]) => T;

const firstElement: FirstElement<string> = (arr) => {
  return arr[0];
};

const firstElementNumber: FirstElement<number> = (arr) => {
  return arr[0];
};

firstElement(['123']);
