interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: 'John',
  age: 32,
}

user.name = 'Something Else';
// Cannot assign to 'name' because it is a read-only property.
