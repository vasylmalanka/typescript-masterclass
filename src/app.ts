function FirstDecorator(_target: Function) {
  console.log('Decorator Invoked');
  console.log(_target);
}

@FirstDecorator
class Aircraft {
  constructor(
    public _aircraftModel: string,
    private pilot: string
  ) {
    console.log('Aircraft Class Instantiated');
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

new Aircraft('Airbus A380', 'John');
