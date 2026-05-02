import { injectable, inject } from 'inversify';
import type { Request, Response } from 'express';
import type { IPartialTaskWithId, ITask } from './task.interface.js';
import { Document } from 'mongoose';
import { TaskService } from './tasks.service.js';
import { UpdateTaskProvider } from './providers/updateTask.provider.js';

@injectable()
export class TasksController {
  constructor(
    @inject(TaskService) private taskService: TaskService,
    @inject(UpdateTaskProvider) private updateTaskProvider: UpdateTaskProvider,
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

  public async handlePatchTasks(
    req: Request<{}, {}, IPartialTaskWithId>,
  ): Promise<Document | never> {
    try {
      return await this.updateTaskProvider.updateTask(req.body);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
