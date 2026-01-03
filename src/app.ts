interface Ball {
  diameter: number;
}

interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;

interface Tube {
  diameter: number;
  length: number;
}

let tube: Tube = {
  diameter: 12,
  length: 3,
}

ball = tube;
// tube = ball;

type ValidatedInputString = string & { __brand: 'Validated Input' };

const validateUserInput = (input: string) => {
  const simpleValidatedInput = input.trim();
  return simpleValidatedInput as ValidatedInputString;
};

const printName = (name: ValidatedInputString) => {
  console.log(name);
}

printName(validateUserInput('John'));
printName('Mark');
