import express, { type Request, type Response, type Express } from 'express';

const app: Express = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Express application');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
