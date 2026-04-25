import { injectable, inject } from 'inversify';
import { UserController } from '../user/user.controller.js';
import { Task } from './task.schema.js';
import type { Request, Response } from 'express';
import type { ITask } from './task.interface.js';
import { Document } from 'mongoose';

@injectable()
export class TasksController {
  constructor(@inject(UserController) private userController: UserController) {}

  public handleGetTasks() {
    return [
        {
        title: 'This is a title',
        description: 'Tasks description',
      }
    ];
  }

  public async handlePostTasks(req: Request<{}, {}, ITask>, res: Response) {
    const task: Document<unknown, any, ITask> = new Task(req.body);
    await task.save();

    return task;
  }

  public handlePatchTasks() {
    return {
      title: 'This is a title',
      description: 'Tasks description',
    };
  }
}
