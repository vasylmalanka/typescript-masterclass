class User {
  name = 'John';
  email = 'john@email.com';

  greet() {
    return 'Hello John';
  }
}

const user = new User();
const user2 = new User();

console.log(user);
console.log(user2);
console.log(user.greet());
