class User {
  constructor(
    public name: string,
    public readonly email: string,
    private phone: number,
    public lastName?: string
  ) {}

  greet(): string {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  public isAdmin: boolean = true;

  constructor(
    name: string,
    email: string,
    phone: number,
    public usersReporting: number,
    lastName?: string
  ) {
    super(name, email, phone, lastName);
  }

  public greet(): string {
    return `Hello ${this.name}! I am the admin`;
  }
}

const user: User = new User('Mark', 'Mark@email.com', 123456);
const admin: Admin = new Admin('John', 'John@email.com', 123456, 11);

console.log(user.greet());
console.log(admin.greet());
