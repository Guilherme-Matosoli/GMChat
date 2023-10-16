import socket from "socket.io-client";

const io = socket("http://localhost:4000/")

io.emit("join chat", "test")
io.emit("messgae", "test",  "")