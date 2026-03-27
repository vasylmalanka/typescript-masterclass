import 'reflect-metadata';

import express, { type Express } from 'express';
import { addRoutes } from './src/config/routes.config.js';

const app: Express = express();
const port = 3001;

addRoutes(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
