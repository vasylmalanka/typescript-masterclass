class Person {
  public fullname: string;

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
  ) {
    if (age > 200 || age < 0) {
      throw new Error('The age must be a within the age range 0-200');
    }
    this.fullname = `${this.firstName} ${this.lastName}`;
  }
}

const john: Person = new Person('John', 'Doe', 45);
const mark: Person = new Person('Mark', 'Doe', 20);

console.log(john.fullname);
