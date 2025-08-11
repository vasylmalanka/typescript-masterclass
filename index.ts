class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const user: User = new User('John', 'john@email.com');
const user2: User = new User('Mark', 'mark@email.com');

user.lastname = 'last';
user.name = 123;

console.log(user);
console.log(user.greet());
console.log(user2);
console.log(user2.greet());
