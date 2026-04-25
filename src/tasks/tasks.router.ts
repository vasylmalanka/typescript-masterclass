import { Router, type Request, type Response } from 'express';
import { TasksController } from './tasks.controller.js';
import { injectable, inject } from 'inversify';
import type { ITask } from './task.interface.js';

@injectable()
export class TasksRouter {
  public router: Router;

  constructor(@inject(TasksController) private tasksController: TasksController) {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', (req: Request, res: Response) => {
      const newTask = this.tasksController.handleGetTasks();
      return res.json(newTask);
    });

    this.router.post('/create', async (req: Request<{}, {}, ITask>, res: Response) => {
      const newTask = await this.tasksController.handlePostTasks(req, res);
      res.json(newTask);
    });

    this.router.patch('/update', (req: Request, res: Response) => {
      const newTask = this.tasksController.handlePatchTasks();
      return res.json(newTask);
    });
  }
}
