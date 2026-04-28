import { Router, type Request, type Response } from 'express';
import { TasksController } from './tasks.controller.js';
import { injectable, inject } from 'inversify';
import type { IPartialTaskWithId, ITask } from './task.interface.js';
import { createTaskValidator } from './validators/createTask.validator.js';
import { validationResult } from 'express-validator';
import { getTaskValidator } from './validators/getTasks.validator.js';

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
        console.log(result);
        console.log(req.query);
        const allTasks = await this.tasksController.handleGetTasks(req, res);
        res.json(allTasks);
      }
    );

    this.router.post(
      '/create',
      createTaskValidator,
      async (req: Request<{}, {}, ITask>, res: Response) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
          const newTask = await this.tasksController.handlePostTasks(req, res);
          res.json(newTask);
        } else {
          res.json(result.array());
        }
      },
    );

    this.router.patch('/update', async (req: Request<{}, {}, IPartialTaskWithId>, res: Response) => {
      const updatedTask = await this.tasksController.handlePatchTasks(req, res);
      res.json(updatedTask);
    });
  }
}
