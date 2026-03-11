namespace MathUtils {
  export function add(a: number, b: number) {
    return a + b;
  }

  export function subtract(a: number, b: number) {
    return a - b;
  }
}

namespace StringUtils {
  export function add(a: string, b: string) {
    return a + b;
  }

  export function subtract(a: string, b: string) {
    return a.replace(b, '');
  }
}

let sum = MathUtils.add(5, 2);
let combined = StringUtils.add('Hello ', 'World');

console.log(sum);
console.log(combined);
