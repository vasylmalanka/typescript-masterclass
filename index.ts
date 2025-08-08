enum ShapeKind {
  Circle = 'circle',
  Square = 'square',
}
// Circle | Square

type Circle = {
  kind: ShapeKind.Circle;
  radius: number;
}

type Square = {
  kind: ShapeKind.Square;
  sideLength: number;
}

let  circle: Circle = {
  radius: 100,
  kind: ShapeKind.Square,
};

function printShape(shape: ShapeKind /** Circle | Square */) {
  console.log(shape);
}

printShape(ShapeKind.Circle);