import { injectable, inject } from 'inversify';
import { UserController } from '../user/user.controller.js';

@injectable()
export class TasksController {
  constructor(@inject(UserController) private userController: UserController) {}

  public createTask() {
    console.log(this.userController.getUser());
    return {
      title: 'This is a title',
      description: 'Tasks description',
    };
  }
}
