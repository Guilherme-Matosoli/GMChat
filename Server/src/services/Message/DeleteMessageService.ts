import { Repository } from "typeorm";
import { Message } from "../../database/entities/Message";
import { Chat } from "../../database/entities/Chat";

export class DeleteMessageService {
  constructor(private messageRepository: Repository<Message>, private chatRepository: Repository<Chat>) { };

  async delete({ chatId, username }: { chatId: string, username: string }): Promise<string> {
    try {
      const userInChat = await this.chatRepository.findOne({ where: [{ userSender: { username } }, { userReceiver: { username } }] })
      if (!userInChat) {
        return "User is not in chat."
      };

      await this.messageRepository.delete({ chatId: { id: chatId } });

      return "Delete successfully"
    }
    catch (err) {
      console.log(err);
    };
  }
};
