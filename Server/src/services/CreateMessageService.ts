import { Repository } from "typeorm";
import { Message } from "../database/entities/Message";
import { Chat } from "../database/entities/Chat";
import { User } from "../database/entities/User";


export class CreateMessageService{
  constructor(private messageRepositry: Repository<Message>, private userRepository: Repository<User>, private chatRepository: Repository<Chat>){};

  async create({ chatId ,sender }){
    try{
      const senderExists = await this.userRepository.findOne({ where: { username: sender } });
      if(!senderExists) return "Message sender doesn't exists";

      const chatExists = await this.chatRepository.findOne({ where: { id: chatId } });
      if(!chatExists) return "Chat doesn't exists";
      

    }
    catch(err){
      console.log(err)
    }
  };
};