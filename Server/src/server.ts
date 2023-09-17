import 'dotenv/config';
import express from 'express';
import { mainRouter } from './routes/mainRoutes';
import { AppDataSource } from './database/dataSource';

const app = express();
app.use(express.json());
app.use(mainRouter);

AppDataSource.initialize().then(() => {
  const { PORT } = process.env;
  app.listen( PORT, () => console.log(`Server is running on port ${ PORT }👻`));
});