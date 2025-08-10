type Events = {
  id: number;
  date: Date;
  type: 'indoor' | 'outdoor';
}

type UnionOfKeysOfEvents = keyof Events; // id | date | type

let idOfEvent: UnionOfKeysOfEvents = 'id';
let dateOfEvents: UnionOfKeysOfEvents = 'date';

// Index Signature
type Numeric = {
  [key: number]: string;
}

type NumericKeyof = keyof Numeric;

type NumberAndString = {
  [key: string]: string;
}

type NumberAndStringKeyf = keyof NumberAndString;

let stringObject: NumberAndString = {
  0: 'First',
  second: 'Second',
};

console.log(stringObject['0']);

type Person = {
  name: string;
  age: string;
  address: string;
}

type PartialPerson = {
  [K in keyof Person]?: Person[K];
}

let partial: PartialPerson = {
  name: 'John',
};
