interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

interface UserWithAddress extends User {
  address: string;
}

const user: User = {
  name: 'john',
  email: 'john@email.com',
  phone: 9876543,
  gender: 'male',
};

const userWithAddress: UserWithAddress = {
  name: 'john',
  email: 'john@email.com',
  phone: 9876543,
  gender: 'male',
  address: 'This is an address',
};

console.log(user);
console.log(userWithAddress);
