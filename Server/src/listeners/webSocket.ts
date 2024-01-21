import { io } from "../server";

interface Message {
  username: string,
  text: string,
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