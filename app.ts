function methodLogger(logPrefix: string) {
  return function (target: any, _context: any) {
    return function (this: any, ...args: any[]) {
      console.log(`${logPrefix} Inovocation Started`);
      target.call(this, args);
      console.log(`${logPrefix} Inovocation Ended`);
    }
  }
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
  @methodLogger('LOG: ')
  greet(greeting: string) {
    console.log(`${greeting}, ${this.name}`);
  }
}

let user: Person = new Person('John');
user.greet('Hello');

const greet = user.greet;
greet('Hi');
