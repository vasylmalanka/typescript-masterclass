type Circle = {
  kind: 'circle';
  radius: number;
};

type Square = {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea (shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}
