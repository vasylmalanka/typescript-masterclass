interface User {
  name: string;
  age: number;
  email: string;
  password: string;
};

type LimitedUser = Omit<User, 'password' | 'age'>;
