import { Repository } from "typeorm";
import { Message } from "../../database/entities/Message";

export class GetLastMessageService {
  constructor(private messageRepository: Repository<Message>) { };

  async get({ chatId }: { chatId: string }) {
    try {
      console.log(chatId)
      const lastMessage = await this.messageRepository.query('SELECT * FROM messages WHERE "chatId" = $1 ORDER BY "time" DESC LIMIT 1', [chatId]);

      return lastMessage;
    }
    catch (err) {
      console.log(err);
    }
  };
}
