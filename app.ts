function getter(target: any, context: ClassGetterDecoratorContext) {
  console.log(target);
  console.log(context);
}

function setter(target: any, context: ClassSetterDecoratorContext) {
  console.log(target);
  console.log(context);
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
