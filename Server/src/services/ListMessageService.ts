import { Repository } from "typeorm";
import { Message } from "../database/entities/Message";
import { User } from "../database/entities/User";

export class ListMessageService{
  constructor(private messageRepoistory: Repository<Message>, private userRepository: Repository<User>){};

  async list( { chatId }: { chatId: string } ){
    try{
      const messages = await this.messageRepoistory.query('SELECT * FROM messages WHERE "chatId" = $1', [chatId]);

      const messagesWithUser = messages.map(async (msg: Message) => {
        const { password: _, ...restUser } = await this.userRepository.findOne({ where: { username: String(msg.user) } });

        msg.user = restUser;
        return msg;
      });

      return await Promise.all(messagesWithUser);
    }
    catch(err){
      console.log(err);
    }
  };
};