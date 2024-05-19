import { Repository } from "typeorm";
import { Message } from "../../database/entities/Message";
import { genId } from "../../utils/genId";

interface IMessageRepository extends Repository<Message>{
  messages: Message[]
};


export const UserRepositoryTests= {
  messages: [],
  create({ chatId, user, content }: Message){
    const message = { id: genId(10),chatId, user, content, };
    return message;
  },

  save(message: Message){
    this.messages.push(message)
  },

  findOne({ where }: any){
    let exists = false;

    const objKey = Object.keys(where)[0];

    this.messages.map(message => {
      if(message[objKey] == where[objKey]) exists = message;
    });

    return exists;
  },

  find({ where }: any) {
    let exists = false;

    const objKey = Object.keys(where)[0];

    this.messages.map(message => {
      if(message[objKey] == where[objKey]) exists = message;
    });

    return exists;
  },

} as unknown as IMessageRepository; 
