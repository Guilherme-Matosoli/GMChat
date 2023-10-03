import socket from 'socket.io-client'

const io = socket("http://localhost:4000/")

io.emit("k", "kkk")