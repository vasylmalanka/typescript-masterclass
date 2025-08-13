class Person {
  private _age?: number;

  constructor(
    public firstName: string,
    public lastName: string,
  ) {
  }

  public set age(age: number) {
    if (age > 200 || age < 0) {
      throw new Error('The age must be a within the age range 0-200');
    }
    this._age = age;
  }

  public fullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john: Person = new Person('John', 'Doe');
const mark: Person = new Person('Mark', 'Doe');
john.age = 45;
console.log(john.age);

console.log(john.fullname());
console.log(mark.fullname());
