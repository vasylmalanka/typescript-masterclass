function PropertyDecorator(
  classPrototype: Object,
  properyName: string,
) {
  console.log(classPrototype, properyName);
}

function AccessorDecorator(
  classPrototype: Object,
  accessorName: string,
  propertyDescriptor: PropertyDescriptor,
) {
  console.log(classPrototype, accessorName, propertyDescriptor);
}

class Airplane {
    @PropertyDecorator
    public _aircraftModel: string;

  constructor(
    aircraftModel: string,
  ) {
    this._aircraftModel = aircraftModel;
  }

  public static seatCount(): void {
    console.log('150 seats');
  }

  public pilotName(name: string, _lastName: string) {
    console.log(name);
  }

  @AccessorDecorator
  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane = new Airplane('Airbus A380');
