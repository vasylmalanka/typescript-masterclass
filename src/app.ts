interface Person {
  name: string;
  age: number;
  address: string;
}

type NameAge = Readonly<Pick<Person, 'name' | 'age'>>;

const person: NameAge = {
  name: 'John',
  age: 32,
}

person.name = 'Else';
