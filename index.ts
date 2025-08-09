type GreetFunction = (name?: string) => string;

const greet: GreetFunction = (name: string = 'Guest'): string => {
    return `Hello, ${name}!`;
};

console.log(greet());
console.log(greet('John'));


type AreaFunction = (width: number, height?: number) => number;

const calculateArea: AreaFunction = (width: number, height: number = 10): number => {
    return width * height;
};

console.log(calculateArea(5));
console.log(calculateArea(5, 20));


type StatusFunction = (isActive?: boolean) => string;

const checkStatus: StatusFunction = (isActive: boolean = true): string => {
    return isActive ? 'Active' : 'Inactive';
};

console.log(checkStatus());
console.log(checkStatus(false));