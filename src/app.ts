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
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = 'United States of America';
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = 'Jet';
      target.prototype.airbusMethod = () => {
        console.log('Function performed by airbus')
      }
    } else {
      target.prototype.origin = 'France';
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = 'Helicopter';
      target.prototype.boeingMethod = () => {
        console.log('Function performed by boeing')
      }
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

@AircraftManufacturer(Manufacturers.boeing)
class Helicopter implements AircarfatInterface {
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
const helicopter: AircarfatInterface = new Helicopter('H380', 'Mark');

console.log(airplane);
console.log(helicopter);

airplane.airbusMethod
  ? airplane.airbusMethod()
  : console.log('Method Does' + ' not Exist');
