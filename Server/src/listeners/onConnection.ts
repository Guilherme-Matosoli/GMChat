import { io } from "../server";

io.on("connection", (socket) => {
  socket.on("join chat", chat => {
    const chatCr = io.of(`/${chat}`);

    chatCr.on("message", message => { })
  })
})

