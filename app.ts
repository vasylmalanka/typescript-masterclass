function methodLogger<This, Args extends any[], Return>(logPrefix: string) {
  return function (
    target: (this: This, ...args: Args) => Return,
    _context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >
  ) {
    return function (this: This, ...args: Args) {
      console.log(`${logPrefix} Inovocation Started`);
      target.call(this, ...args);
      console.log(`${logPrefix} Inovocation Ended`);
    }
  }
}

function bound(_target: Function, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

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
  @methodLogger<Person, [string], void>('LOG: ')
  greet(greeting: string): void {
    console.log(`${greeting}, ${this.name}`);
  }
}

let user: Person = new Person('John');
user.greet('Hello');

const greet = user.greet;
greet('Hi');
