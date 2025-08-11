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

const user = new User('John', 'john@email.com');
const user2 = new User('Mark', 'mark@email.com');

console.log(user);
console.log(user.greet());
console.log(user2);
console.log(user2.greet());
