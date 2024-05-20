import { ChatRepository } from "../repositories/ChatRepository";
import { MessageRepository } from "../repositories/MessageRepository";
import { UserRepository } from "../repositories/UserRepository";
import { CreateMessageService } from "../services/Message/CreateMessageService";

import { Message } from "../database/entities/Message";
import { io } from "../server";
import { genId } from "../utils/genId";
import { User } from "../database/entities/User";

interface MessageBody {
  user: User,
  message: Message | string,
  room: string,
  to: string
};

io.on("connection", (socket) => {
  socket.on("newChat", (username) => {
    socket.join(username);
  });

  socket.on("join chat", chat => {
    socket.join(chat)
  });

  socket.on("message", (msg: MessageBody) => {
    const messageService = new CreateMessageService(MessageRepository, UserRepository, ChatRepository);

    const time = new Date();
    const brazilDate = time.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });

    io.to(msg.to).emit("new message");

    const messageCreated = MessageRepository.create({
      id: genId(10),
      user: msg.user,
      chatId: msg.room,
      content: msg.message as string,
      time: brazilDate
    });

    messageService.create(messageCreated);

    io.to(msg.room).emit("message", messageCreated);
  });
});
