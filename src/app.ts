type Person = {
  name: string;
  age?: number;
};

function printAge(person: Person) {
  if (person.age) {
    console.log(person.age);
  } else {
    console.log('Age unknown');
  }
}

const user: Person = {
  name: 'John',
  age: 'John'
}

printAge({
  name: 'John',
  age: 'John'
});
