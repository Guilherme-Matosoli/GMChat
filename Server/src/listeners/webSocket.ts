import { User } from "../database/entities/User";
import { io } from "../server";

interface Message {
  user: User,
  message: Message,
  room: string
};

io.on("connection", (socket) => {
  socket.on("join chat", chat => {
    socket.join(chat)
    console.log(chat)
  });

  socket.on("message", ( msg: Message ) => {


    io.to(msg.room).emit("message", msg);
  });
});