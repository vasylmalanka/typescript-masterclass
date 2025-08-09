function writeToDatabase(value: string): void {
  console.log('Writing to a database', value);
}

function throwError (error: string): never/** or void */ {
  throw new Error(error);
}

type check = never extends void ? true: false;
type check2 = void extends never ? true: false;
