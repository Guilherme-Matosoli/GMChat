import { Repository } from "typeorm";
import { Message } from "../../database/entities/Message";
import { Chat } from "../../database/entities/Chat";
import { User } from "../../database/entities/User";

export class CreateMessageService {
  constructor(private messageRepository: Repository<Message>, private userRepository: Repository<User>, private chatRepository: Repository<Chat>) { };

  async create(message: Message) {
    try {
      const userExists = await this.userRepository.findOne({ where: { username: message.user.username } });
      if (!userExists) return "Message sender doesn't exists";

      const chatExists = await this.chatRepository.findOne({ where: { id: message.chatId.id } });
      if (!chatExists) return "Chat doesn't exists";

      const { password: _, ...restUser } = userExists;

      this.messageRepository.save(message);

      return message;
    }
    catch (err) {
      console.log(err)
    }
  };
};
