function ParameterDecorator(
  classPrototype: Object,
  methodName: string,
  index: number,
) {
  console.log(classPrototype, methodName, index);
}

class Airplane {
  constructor(
    public _aircraftModel: string,
  ) {}

  public static seatCount(): void {
    console.log('150 seats');
  }

  public pilotName(name: string, @ParameterDecorator _lastName: string) {
    console.log(name);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane = new Airplane('Airbus A380');
