interface User {
  name: string;
  email: string;
  phone: number;
}

interface Greeting {
  greeting:() => void;
}

class RegistredUser implements User, Greeting {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
  ) {}

  public greeting() {
    console.log(`Hello ${this.name}`);
  }
}
