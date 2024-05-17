import { Repository } from "typeorm"
import { Chat } from "../../database/entities/Chat";

export interface IChatRepository extends Repository<Chat>{
  chats: Array<Chat>
};

export const ChatRepositoryTest = {
  chats: [],
  create({ id, userSender, userReceiver }: Chat){
    const chat = { id, userSender, userReceiver };
    return chat;
  },

  save(chat: Chat){
    this.chats.push(chat)
  },

  findOne( { where } : any ) {
    let exists = false;
    const primaryKeys = Object.keys(where);

    this.chats.map(chat => {
      let allKeysMatch = 0;
     
      primaryKeys.map(primaryKey => {
        if(chat[primaryKey] == where[primaryKey]) allKeysMatch++;
      });

      if(allKeysMatch == primaryKeys.length) exists = chat;
      
    });

    return exists;
  }

} as unknown as IChatRepository; 