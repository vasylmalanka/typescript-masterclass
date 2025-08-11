class User {
  name: string;
  readonly email: string;
  lastname?: string;

  constructor(name: string, email: string, lastname?: string) {
    this.name = name;
    this.email = email;
    this.lastname = lastname;
  }

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const user: User = new User('John', 'john@email.com');
const user2: User = new User('Mark', 'mark@email.com');
const user3: User = new User('Alice', 'alice@email.com', 'Doe');

user.lastname = 'last';
user.name = 123;
user.email = 'new@email.com';

console.log(user);
console.log(user.greet());
console.log(user2);
console.log(user2.greet());
console.log(user3);
