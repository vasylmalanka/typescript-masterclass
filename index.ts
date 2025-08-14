class Employee {
  private static companyName: string;

  protected readonly id: number;
  private _salary: number | undefined;

  constructor(
    public readonly name: string,
    public readonly age: number,
    id: number,
  ) {
    this.id = id;
  }

  set salary(salary: number) {
    if (salary < 0) {
      throw new Error('Salary must be a positive number');
    }
    this._salary = salary;
  }

  get salary(): number {
    if (!this._salary) {
      throw new Error('Salary is not set');
    }
    return this._salary;
  }

  public static getCompanyName(): string {
    return Employee.companyName;
  }

  static {
    Employee.companyName = 'Adobe';
  }

  public getDetails(): string {
    return `Name: ${this.name} Age: ${this.age}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    id: number,
    public department: string,
  ) {
    super(name, age, id);
  }

  public getDetails(): string {
    return `Name: ${this.name} Age: ${this.age} Department: ${this.department}`;
  }
}

const employee: Employee = new Employee('John', 32, 1);
employee.salary = 10000;
console.log(employee.getDetails());
console.log(employee.salary);

const manager: Manager = new Manager('Alice', 22, 1, 'IT');
manager.salary = 20000;
console.log(manager.getDetails());
console.log(manager.salary);
