const map = <T, U>(array: T[], mapFunction: (item: T) => U): (U | T)[] => {
  if (array.length === 0) {
    return array;
  }

  let result: U[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(mapFunction(array[i]));
  }
  return result;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addFour(item: number) {
  return item + 4;
}

let animals = ['cat ', ' dog', ' rat   '];
function trimSpaces(item: string) {
  return item.trim();
}

function convertToString(item: number) {
  return item.toString();
}

console.log(map(numbers, addFour));
console.log(map(animals, trimSpaces));
console.log(map(numbers, convertToString));
