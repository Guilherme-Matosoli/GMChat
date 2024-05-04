import { Repository } from "typeorm";
import { Chat } from "../database/entities/Chat";
import { IChatRepository } from "../repositories/in-memory/ChatRepositoryTest";
import { genChatId } from "../utils/genChatId";
import { User } from "../database/entities/User";

export class CreateChatService {
  static create: Chat | string;
  constructor(private chatRepository: Omit<IChatRepository, "chats">, private userRepository: Repository<User>) { }

  async create({ userSender, userReceiver }: Omit<Chat, "id">): Promise<Chat | string> {
    try {
      const sender = await this.userRepository.findOne({ where: { username: String(userSender) } });
      if(!sender) return "Can not find user sender";

      const receiver = await this.userRepository.findOne({ where: { username: String(userSender) } });
      if(!receiver) return "Can not find user receiver";

      const chat = this.chatRepository.create({ id: genChatId(), userSender, userReceiver });
      await this.chatRepository.save(chat);

      return chat;
    }
    catch (err) {
      console.log(err)
    }
  }
}