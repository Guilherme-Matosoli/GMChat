import 'dotenv/config';
import express from 'express';
import http from 'http';

import { mainRouter } from './routes/mainRoutes';
import { AppDataSource } from './database/dataSource';

const app = express();
const serverHttp = http.createServer(app);

app.use(express.json());
app.use(mainRouter);

AppDataSource.initialize().then(() => {
  const { PORT } = process.env;
  serverHttp.listen( PORT, () => console.log(`Server is running on port ${ PORT }👻`));
});