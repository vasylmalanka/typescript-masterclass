class User {
  name = 'John';
  email = 'john@email.com';

  constructor(name: string, email: string) {
    console.log(name);
    console.log(email);
  }

  greet() {
    return 'Hello John';
  }
}

const user = new User('John', 'john@email.com');
const user2 = new User('Mark', 'mark@email.com');

console.log(user);
