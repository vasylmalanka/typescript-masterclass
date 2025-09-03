function methodLogger(target: any, context: any) {
  function replaceMethod(this: any, ...args: any[]) {
    const result = target.call(this, args);
  }
  return replaceMethod;
}

class Person {
  constructor(public name: string) {}

  @methodLogger
  greet(greeting: string) {
    console.log(`${greeting}, ${this.name}`);
  }
}

let user: Person = new Person('John');
user.greet('Hello');
