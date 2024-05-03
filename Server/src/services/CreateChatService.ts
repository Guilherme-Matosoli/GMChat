import { Chat } from "../database/entities/Chat";
import { UserRepository } from "../repositories/UserRepository";
import { IChatRepository } from "../repositories/in-memory/ChatRepositoryTest";
import { genChatId } from "../utils/genChatId";

export class CreateChatService {
  static create: Chat | string;
  constructor(private chatRepository: Omit<IChatRepository, "chats">) { }

  async create({ userSender, userReceiver }: Omit<Chat, "id">): Promise<Chat | string> {
    try {
      const sender = await UserRepository.findOne({ where: { username: String(userSender) } });
      if(!sender) return "Can not find user sender";

      const receiver = await UserRepository.findOne({ where: { username: String(userSender) } });
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