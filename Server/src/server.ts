import 'dotenv/config';
import http from 'http';
import { AppDataSource } from './database/dataSource';
import { app } from './app';

const serverHttp = http.createServer(app);

AppDataSource.initialize().then(() => {
  const { PORT } = process.env;
  serverHttp.listen( PORT, () => console.log(`Server is running on port ${ PORT }👻`));
});