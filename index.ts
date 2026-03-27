import 'reflect-metadata';

import express, { type Request, type Response, type Express } from 'express';
import { Page } from './src/page.js'; 
import { container } from './src/config/container.js';

const app: Express = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Express application');
});

const pageClass = container.get<Page>(Page);
app.post('/create-page', (req: Request, res: Response) => {
  let page = pageClass.createPage('https://mypage.com'); 
  res.json(page);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
