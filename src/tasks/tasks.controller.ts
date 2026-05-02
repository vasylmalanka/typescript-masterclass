import { injectable, inject } from 'inversify';
import type { Request, Response } from 'express';
import type { IPartialTaskWithId, ITask } from './task.interface.js';
import { Document } from 'mongoose';
import { TaskService } from './tasks.service.js';

@injectable()
export class TasksController {
  constructor(
    @inject(TaskService) private taskService: TaskService,
  ) {}

  public async handleGetTasks(req: Request, res: Response) {
    const tasks = await this.taskService.findAll();
    return tasks;
  }

  public async handlePostTasks(req: Request<{}, {}, ITask>, res: Response) {
    const task: Document<unknown, any, ITask> = await this.taskService.createTask(req.body);
    await task.save();
    return task;
  }

  public async handlePatchTasks(req: Request<{}, {}, IPartialTaskWithId>, res: Response) {
    const task = await this.taskService.findById(req.body._id);
    if (task) {
      task.title = req.body.title ? req.body.title : task.title;
      task.description = req.body.description ? req.body.description : task.description;
      task.dueDate = req.body.dueDate ? req.body.dueDate : task.dueDate;
      task.status = req.body.status ? req.body.status : task.status;
      task.priority = req.body.priority ? req.body.priority : task.priority;

      await task.save();
    }

    return task;
  }
}
