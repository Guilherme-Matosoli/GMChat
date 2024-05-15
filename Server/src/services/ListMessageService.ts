import { Repository } from "typeorm";
import { Message } from "../database/entities/Message";

export class ListMessageService{
  constructor(private messageRepoistory: Repository<Message>){};

  async list( { chatId }: { chatId: string } ){
    try{
      const messages = await this.messageRepoistory.query('SELECT * FROM messages WHERE "chatId" = $1', [chatId])
      return messages;
    }
    catch(err){
      console.log(err);
    }
  };
};