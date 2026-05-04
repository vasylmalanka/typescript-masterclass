import { Router, type Request, type Response } from 'express';
import { TasksController } from './tasks.controller.js';
import { injectable, inject } from 'inversify';
import type { IPartialTaskWithId, ITask } from './task.interface.js';
import { createTaskValidator } from './validators/createTask.validator.js';
import { updateTaskValidator } from './validators/updateTask.calidator.js';
import { validationResult } from 'express-validator';
import { getTaskValidator } from './validators/getTasks.validator.js';
import { StatusCodes } from 'http-status-codes';

@injectable()
export class TasksRouter {
  public router: Router;

  constructor(@inject(TasksController) private tasksController: TasksController) {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      '/', 
      getTaskValidator, 
      async (req: Request, res: Response) => {
        const result =validationResult(req);
        if (result.isEmpty()) {
          const allTasks = await this.tasksController.handleGetTasks(req, res);
          res.status(StatusCodes.OK).json(allTasks);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(result.array());
        }
      }
    );

    this.router.post(
      '/create',
      createTaskValidator,
      async (req: Request<{}, {}, ITask>, res: Response) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
          const newTask = await this.tasksController.handlePostTasks(req, res);
          res.status(StatusCodes.CREATED).json(newTask);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(result.array());
        }
      },
    );

    this.router.patch(
      '/update',
      updateTaskValidator,
      async (req: Request<{}, {}, IPartialTaskWithId>, res: Response) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
          const updatedTask = await this.tasksController.handlePatchTasks(req);
          res.status(StatusCodes.OK).json(updatedTask);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(result.array());
        }
      }
  );
  }
}
