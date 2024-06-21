import 'dotenv/config';
import http from 'http';
import { Server } from 'socket.io';

import { AppDataSource } from './database/dataSource';
import { app } from './app';

const serverHttp = http.createServer(app);
export const io = new Server(serverHttp, {
  cors: {
    "origin": "*"
  }
});


const initialize = async () => {
  setInterval(() => {
    fetch("https://gmchat-jt88.onrender.com/antisleep")
  }, 30000)

  await AppDataSource.initialize();

  const { PORT } = process.env;
  serverHttp.listen(PORT, () => console.log(`Server is running on port ${PORT}👻`));
};

initialize();

import "./listeners/webSocket";
