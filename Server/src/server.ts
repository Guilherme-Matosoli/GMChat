import 'dotenv/config';
import express from 'express';
import { mainRouter } from './routes/mainRoutes';
import { DBConnection } from './database/connection';

const app = express();
app.use(express.json());
app.use(mainRouter);

DBConnection.initialize().then(() => {
  const { PORT } = process.env;
  app.listen( PORT, () => console.log(`Server is running on port ${ PORT }👻`));
});