function methodLogger(target: any, _context: any) {
  function replaceMethod(this: any, ...args: any[]) {
    target.call(this, args);
  }
  return replaceMethod;
}

function bound(_target: any, context: any) {
  const methodName = context.name;

  if (context.private) {
    throw new Error('Cannot decorate private property');
  }

  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });
}

class Person {
  constructor(public name: string) {}

  @bound
  @methodLogger
  greet(greeting: string) {
    console.log(`${greeting}, ${this.name}`);
  }
}

let user: Person = new Person('John');
user.greet('Hello');

const greet = user.greet;
greet('Hi');
