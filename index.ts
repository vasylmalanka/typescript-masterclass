type LogMessage = (message: string) => void;

const log: LogMessage = (message: string): void => {
  console.log(message);
};

log('Hello TypeScript');

type ThrowError = (message: string) => never;

const throwError: ThrowError = (message: string): never => {
  throw new Error(message);
};

// throwError('Test error');

function processData(data: string): void {
  log(`Processing ${data}`);
}

processData('sample data');

function errorHandlingScenario(): never {
  throwError('An unexpected error occurred!');
}

errorHandlingScenario();