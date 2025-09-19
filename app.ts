function addGreetMethod<T extends new (...args: any[]) => any>(
  target: T,
  _context: ClassDecoratorContext<T>
) {
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      this.greet = (greeting: string) => {
        console.log(`${greeting}, ${this.name}! Have a great day!`);
      }
    }
  };
}

class Greetable {
  constructor(public name: string) {}
  greet: (greeting: string) => void = () => {};
}

@addGreetMethod
class Author extends Greetable {
  constructor(public name: string) {
    super(name);
  }
}

const author = new Author('Mark');
author.greet('Hello');
