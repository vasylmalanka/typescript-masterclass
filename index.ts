// named function
function intro(name: string, age: number, country?: string): string {
  return `My name is ${name} and I am ${age} years old`;
}

intro ('John', 32);
intro ('John', 32, 'USA');
