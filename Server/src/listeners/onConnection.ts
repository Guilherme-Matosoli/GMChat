import { io } from "../server";

io.on("connection", (socket) => {
  console.log(socket.id)

  socket.on("message", message => {
    console.log(message)
  })
})