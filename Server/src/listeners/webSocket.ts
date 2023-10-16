import { io } from "../server";

io.on("connection", (socket) => {
  socket.on("join chat", chat => socket.join(chat));
});