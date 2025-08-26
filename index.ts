type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super('IT Department');
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super('Admin Department');
  }
}

const itHolidays: Holidays = [
  {
    date: new Date (2022, 11, 1),
    reason: 'IT Department Day',
  },
  {
    date: new Date (2022, 12, 25),
    reason: 'Christmas',
  },
];

const adminHolidays: Holidays = [
  {
    date: new Date (2022, 10, 1),
    reason: 'Admin Department Day',
  },
  {
    date: new Date (2022, 12, 25),
    reason: 'Christmas',
  },
];

const itDepartment: ItDepartment = new ItDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();

itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

console.log(itDepartment);
console.log(adminDepartment);
