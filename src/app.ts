interface Box<Type> {
  content: Type;
  size: number;
}

const stringBox: Box<string> = {
  content: 'Hello, TypeScript',
  size: 10
};

const numberBox: Box<number> = {
  content: 42,
  size: 10
};

interface LengthWise {
  length: number;
}

function logLength<T extends LengthWise>(arg: T): void {
  console.log(arg.length);
}

logLength('Hello');
logLength({length: 10, value: 65});
