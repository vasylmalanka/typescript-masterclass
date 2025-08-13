class User {
  public name: string;
  readonly email: string;
  lastName?: string;
  protected phone: number;

  constructor(name: string, email: string, phone: number, lastName?: string) {
    this.name = name;
    this.email = email;
    this.lastName = lastName;
    this.phone = phone;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(
    name: string,
    email: string,
    phone: number,
    usersReporting: number,
    lastName?: string
  ) {
    super(name, email, phone, lastName);
    this.usersReporting = usersReporting;
  }

  public printName() {
    console.log(this.name);
  }

  protected printPhone() {
    console.log(this.phone);
  }

  public useProtectedPhone() {
    this.printPhone();
  }
}

const user: User = new User('Mark', 'Mark@email.com', 123456);
const admin: Admin = new Admin('John', 'John@email.com', 123456, 11);

user.name = 'Alice';
admin.lastName = 'Doe';

// console.log(user.phone);
// console.log(admin.phone);
console.log(admin.name);
admin.useProtectedPhone();
