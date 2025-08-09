enum AgeUnit {
  Years = 'years',
  Months = 'months',
}

type GreetingFunction = (greeting: string, /** add: string */) => string;

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  // greet: Function;
  greet: GreetingFunction;
};

let person: Person = {
  name: 'Scott',
  age: 30,
  ageUnit: AgeUnit.Years,
  greet: (greeting) => {
    return `${greeting} ${person.name}`;
  },
};

function convertAgeToMonths(person: Person): Person {
  if (person.ageUnit === AgeUnit.Years) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.Months;
  }
  return person;
}

console.log(convertAgeToMonths(person));
console.log(person.greet('Hello'));