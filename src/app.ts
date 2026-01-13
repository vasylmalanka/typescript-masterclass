type Properties = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

const color = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [255, 255, 0],
} satisfies Record<Properties, RGB | string>;

const redComponent = color.red[0]; // 255

const greenValue = color.green.toUpperCase();
// '#00FF00'

const blueValue = color.blue.toUpperCase();
// Property 'toUpperCase' does not exist on type '[number, number, number]'.
