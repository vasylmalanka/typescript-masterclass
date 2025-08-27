enum AutomobileTypes {
  car = 'car',
  bus = 'bus',
  van = 'van',
  truck = 'truck',
  bike = 'bike',
}

enum AutomobileBrands {
  ferrari = 'ferrari',
  honda = 'honda',
  bmw = 'bmw',
  toyota = 'toyota',
}

enum AutomobileColors {
  red = 'red',
  blue = 'blue',
  white = 'white',
  black = 'black',
  silver = 'silver',
}

interface Automobile<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

interface CommercialVehicle {
  capacity: string;
  licenseRenewalDate: Date;
}

class Truck
  implements Automobile< string, AutomobileBrands, AutomobileColors>,
  CommercialVehicle
{
  public type: string = 'truck';

  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string,
    public capacity: string,
    public licenseRenewalDate: Date,
  ) {}
}

const toyotaTruck: Truck = new Truck(
  AutomobileBrands.toyota,
  [
    AutomobileColors.black,
    AutomobileColors.silver,
  ],
  'This is a Toyota truck',
  '15 Tonnes',
  new Date(),
);

console.log(toyotaTruck);
