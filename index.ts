interface IUser {
  id: number;
  name: string;
}

interface IUser {
  passwordHash: string;
}

class User implements IUser {
  constructor(public id: number, public name: string) {}
}
