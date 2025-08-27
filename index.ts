interface Person {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void;
}

const person: Person = {
  name: 'john',
  email: 'john@email.com',
  age: 32,
};
