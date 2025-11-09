function getter<This, Value>(target: Function, _context: ClassGetterDecoratorContext<This, Value>) {
  return function(this: This) {
    const result = target.call(this);
    if (result > 18) {
      console.log('Person is an adult');
    }
    return result;
  };
}

function setter<This, Value, Return>(target: (arg: Value) => Return, _context: ClassSetterDecoratorContext<This, Value>) {
  return function(this: This, arg: Value) {
    console.log(`Setting the age to ${arg}`);
    return target.call(this, arg);
  }
}

class Person {
  constructor(public name: string, private _age: number = 10) {}

  greet() {
    console.log(`Hello ${this.name}`);
  }

  @getter
  public get age() {
    return this._age;
  }

  @setter
  public set age(value) {
    this._age = value;
  }
}

const person = new Person('Mark');
person.age = 20;
console.log(person.age);
