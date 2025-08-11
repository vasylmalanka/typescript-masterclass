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

class Admin extends User {
  isAdmin: boolean = true;
}

const user: User = new User('John', 'john@email.com');
const admin: Admin = new Admin('Mark', 'mark@email.com');

console.log(user);
console.log(admin);
