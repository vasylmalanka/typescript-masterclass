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
  usersReporting: Number;

  constructor(name: string, email: string, usersReporting: number, lastname?: string) {
    super(name, email, 'admin');
    this.usersReporting = usersReporting;
  }
}

const user: User = new User('John', 'john@email.com');
const admin: Admin = new Admin('Mark', 'mark@email.com', 11);

console.log(user);
console.log(admin);
