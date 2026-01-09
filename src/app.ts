interface User {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
}

type RegisterUser = Required<Pick<User, 'email' | 'password'>>;
