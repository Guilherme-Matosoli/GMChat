import { Repository } from "typeorm";
import { Chat } from "../../database/entities/Chat";
import { Message } from "../../database/entities/Message";
import { DeleteMessageService } from "../Message/DeleteMessageService";

interface DelChatProps {
  chatId: string,
  username: string
}

export class DeleteChatService {
  constructor(private chatRepository: Repository<Chat>, private messageRepository: Repository<Message>) { };

  async delete({ chatId, username }: DelChatProps) {
    try {
      const delMessages = await new DeleteMessageService(this.messageRepository, this.chatRepository).delete({ chatId, username });
      if (delMessages == "User is not in chat.") return delMessages;

      await this.chatRepository.delete({ id: chatId });
      return "Delete successfully"
    }
    catch (err) {
      console.log(err)
    }
  };
};
