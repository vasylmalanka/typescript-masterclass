import 'reflect-metadata';

import express, { type Request, type Response, type Express } from 'express';
import { TasksController } from './tasks/tasks.controller.js';
import { container } from './src/config/container.js';

const app: Express = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Express application');
});

const task = container.get<TasksController>(TasksController);

app.post('/tasks', (req: Request, res: Response) => {
  const newTask = task.createTask();
  return res.json(newTask);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
