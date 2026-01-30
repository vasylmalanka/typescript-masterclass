type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User;
let key: UserKeys;
key = 'id';
key = 'name';
key = 'age';

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  id: 1,
  name: 'Alice',
  age: 30
};
console.log(getProperty(user, 'name'));
console.log(getProperty(user, 'age'));
