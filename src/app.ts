function FirstDecorator(name: string) {
  return function (target: Function) {
    console.log(`${name} Invoked`);
    console.log(target);
  }
}

@FirstDecorator('First Decorator')
class Aircraft {
  constructor(
    public _aircraftModel: string,
    private pilot: string
  ) {}

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

new Aircraft('Airbus A380', 'John');
