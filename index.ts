abstract class Person {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  public greeting() {
    console.log(`Hello ${this.name}`);
  }

  public static nameClass() {
    return 'Class name is Person';
  }
}

class RegistredPerson extends Person {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
  ) {
    super();
  }
}

const person: RegistredPerson = new RegistredPerson(
  'John',
  'john@email.com',
  988768787,
);

console.log(person);
console.log(Person.nameClass());
