import { Repository } from "typeorm";
import { User } from "../../database/entities/User";
import { Chat } from "../../database/entities/Chat";
import { Message } from "../../database/entities/Message";

export class ListChatService {
  constructor(private chatRepository: Repository<Chat>, private userRepository: Repository<User>, private messageRepository: Repository<Message>) { };

  async list({ username }) {

    const subQuery = this.messageRepository
      .createQueryBuilder("message")
      .select("MAX(message.time)")
      .where("message.chatId = chats.id");

    const chats = await this.chatRepository
      .createQueryBuilder("chats")
      .leftJoin("chats.userSender", "userSender")
      .leftJoin("chats.userReceiver", "userReceiver")
      .addSelect("chats.id")
      .addSelect("userSender") // Retorna todos os campos de userSender
      .addSelect("userReceiver") // Retorna todos os campos de userReceiver
      .addSelect("(" + subQuery.getQuery() + ")", "last_message_time")
      .where("userSender.username = :username OR userReceiver.username = :username", { username })
      .groupBy("chats.id, userSender.id, userReceiver.id")
      .orderBy("last_message_time", "DESC", "NULLS LAST") // Ordena pelo timeStamp máximo das mensagens, com chats sem mensagens por último
      .getMany();


    const chatsPromises = chats.map(async (chat) => {
      function handleName() {
        if (chat.userSender.username == username) return chat.userReceiver.username;
        return chat.userSender.username;
      };

      const user = await this.userRepository.findOne({ where: { username: handleName() } });
      const { password: _, ...rest } = user;

      return { id: chat.id, user: rest };
    });

    const allChats = await Promise.all(chatsPromises);

    return allChats;
  };
};
