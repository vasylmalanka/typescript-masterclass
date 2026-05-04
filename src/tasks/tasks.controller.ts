import { injectable, inject } from 'inversify';
import type { Request, Response } from 'express';
import type { IPartialTaskWithId, ITask } from './task.interface.js';
import { Document } from 'mongoose';
import { TaskService } from './tasks.service.js';
import { UpdateTaskProvider } from './providers/updateTask.provider.js';
import { matchedData } from 'express-validator';
import type { ITaskPagination } from './interfaces/taskPagination.interface.js';
import { GetTasksProvider } from './providers/getTasks.provider.js';

@injectable()
export class TasksController {
  constructor(
    @inject(TaskService) private taskService: TaskService,
    @inject(UpdateTaskProvider) private updateTaskProvider: UpdateTaskProvider,
    @inject(GetTasksProvider) private getTaskProvider: GetTasksProvider,
  ) {}

  public async handleGetTasks(req: Request, res: Response) {
    const validatedData: Partial<ITaskPagination> = matchedData(req);
    try {
      const tasks: { data: ITask[], meta: {} } = await this.getTaskProvider.findAllTasks(validatedData);
      return tasks;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async handlePostTasks(req: Request<{}, {}, ITask>, res: Response) {
    const validatedData: ITask = matchedData(req);
    try {
      return await this.taskService.createTask(validatedData);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async handlePatchTasks(
    req: Request<{}, {}, IPartialTaskWithId>,
  ): Promise<Document | never> {
    const validatedData: IPartialTaskWithId = matchedData(req);

    try {
      return await this.updateTaskProvider.updateTask(validatedData);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
