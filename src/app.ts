enum Manufacturers {
  boeing = 'boeing',
  airbus = 'airbus',
}

interface AircarfatInterface {
  _aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = 'United States of America';
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = 'Jet';
    } else {
      target.prototype.origin = 'France';
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = 'Helicopter';
    }
  }
}

@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements AircarfatInterface {
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

const airplane: AircarfatInterface = new Airplane('Airbus A380', 'John');

console.log(airplane.manufacturer);
