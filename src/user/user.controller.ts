import { injectable } from 'inversify';

@injectable()
export class UserController {
  constructor() {}

  public getUser() {
    return {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@doe.com',
    };
  }
}
