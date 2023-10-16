import 'dotenv/config';
import http from 'http';
import { Server } from 'socket.io';

import { AppDataSource } from './database/dataSource';
import { app } from './app';

const serverHttp = http.createServer(app);
export const io = new Server(serverHttp);

AppDataSource.initialize().then(() => {
  const { PORT } = process.env;
  serverHttp.listen( PORT, () => console.log(`Server is running on port ${ PORT }👻`));
});

import "./listeners/webSocket";