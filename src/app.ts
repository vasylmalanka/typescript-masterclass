type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
  department: string;
};

type Studen = Person & {
  studenId: number;
  major: string;
};

function greet(person: Person): string {
  return `Hello ${person.name}! You are ${person.age}`;
}

const employee: Employee = {
  name: 'Alice',
  age: 30,
  employeeId: 101,
  department: 'Engineering',
};

const student: Studen = {
  name: 'Bob',
  age: 22,
  studenId: 101,
  major: 'Computer Science',
};

console.log(greet(employee));
console.log(greet(student));

console.log(greet({
  name: 'Alice',
  age: 30,
  employeeId: 101,
  department: 'Engineering',
}));
// Object literal may only specify known properties, and 'employeeId' does not exist in type 'Person'.
