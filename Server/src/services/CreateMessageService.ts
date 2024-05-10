import { Repository } from "typeorm";
import { Message } from "../database/entities/Message";
import { Chat } from "../database/entities/Chat";
import { User } from "../database/entities/User";
import { genChatId } from "../utils/genChatId";


export class CreateMessageService{
  constructor(private messageRepositry: Repository<Message>, private userRepository: Repository<User>, private chatRepository: Repository<Chat>){};

  async create({ chatId ,sender, content }: { chatId: string, sender: string, content: string }){
    try{
      const senderExists = await this.userRepository.findOne({ where: { username: sender } });
      if(!senderExists) return "Message sender doesn't exists";

      const chatExists = await this.chatRepository.findOne({ where: { id: chatId } });
      if(!chatExists) return "Chat doesn't exists";

      const time = new Date();
      const brazilDate = time.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })

      const message = await this.messageRepositry.create({
        id: genChatId(),
        sender,
        chatId,
        content,
        time: brazilDate
      });

      await this.messageRepositry.save(message);

      return message;
    }
    catch(err){
      console.log(err)
    }
  };
};