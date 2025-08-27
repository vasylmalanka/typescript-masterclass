interface User {
  userName: string;
  email: string;
  login(): void;
}

class Admin implements User {
  constructor(
    public userName: string,
    public email: string,
    public adminLevel: number,
  ) {}

  public login(): void {
    console.log('Admin is now logged in');
  }
}

class Customer implements User {
  constructor(
    public userName: string,
    public email: string,
  ) {}

  public login(): void {
    console.log('User is now logged in');
  }
}

class Auth {
  public static login(user: User) {
    user.login();
  }
}

const admin: Admin = new Admin('mark', 'mark@email.com', 1);
const customer: Customer = new Customer('john', 'john@email.com');

Auth.login(admin);
Auth.login(customer);
