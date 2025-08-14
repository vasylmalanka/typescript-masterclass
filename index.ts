type Constructor = new(...args: any[]) => {};

function TimeStamp<T extends Constructor>(Base: T) {
  return class extends Base {
    protected timestamp: Date = new Date();

    getTimestamp() {
      return this.timestamp;
    }
  };
}

class User {
  constructor(public name: string) {}
}

class UserWithTimestamp extends TimeStamp(User) {
  constructor(name: string, public age: number) {
    super(name);
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`Timestamp: ${this.getTimestamp()}`);
  }
}

const user: UserWithTimestamp = new UserWithTimestamp('Alice', 30);
console.log(user);
user.displayInfo();
