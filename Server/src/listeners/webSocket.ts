import { ChatRepository } from "../repositories/ChatRepository";
import { MessageRepository } from "../repositories/MessageRepository";
import { UserRepository } from "../repositories/UserRepository";
import { CreateMessageService } from "../services/Message/CreateMessageService";

import { Message } from "../database/entities/Message";
import { io } from "../server";
import { genId } from "../utils/genId";
import { User } from "../database/entities/User";
import { Chat } from "../database/entities/Chat";
import { redisClient } from "../database/redis";

interface MessageBody {
  user: User,
  message: Message | string,
  room: Chat,
  to: string
};

io.on("connection", (socket) => {
  socket.on("get user online", async (username) => {
    await redisClient.connect()
    const userOnline = redisClient.get(username);

    return userOnline ? true : false;
  });

  socket.on("dashboard", (username) => {
    socket.join(username);

    redisClient.connect().then(client => {
      client.set(username, username);
    });
  });

  socket.on("join chat", chat => {
    socket.join(chat)
  });

  socket.on("message", async (msg: MessageBody) => {
    const messageService = new CreateMessageService(MessageRepository, UserRepository, ChatRepository);

    const time = new Date();
    const brazilDate = time.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });

    const messageCreated = MessageRepository.create({
      id: genId(10),
      user: msg.user,
      chatId: msg.room,
      content: msg.message as string,
      time: brazilDate
    });
    io.to(String(msg.room)).emit("message", messageCreated);

    await messageService.create(messageCreated);
    io.to(String(msg.room)).emit("new message")
    io.to(msg.to).to(msg.user.username).emit("new message");
  });
});
