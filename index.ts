const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";

// STATUS_LOADING = "stopped";

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

console.log(Direction.Up);
Direction.Left = 5;

enum Direction2 {
  Up = 1, // 1
  Down, // 2
  Left, // 3
  Right, // 4
};

console.log(Direction2.Right);

enum Roles {
  ADMIN = "admin",
  AUTHOR = "author",
  EDITOR = "editor",
};

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const person: Person = {
  name: "John",
  email: "john@email.com",
  password: "123df",
  role: Roles.ADMIN,
};

console.log(person);

enum Direction3 {
  Up = 1, // 1
  Down = "down", // 2
  Left = 3, // 3
  Right, // 4
};
