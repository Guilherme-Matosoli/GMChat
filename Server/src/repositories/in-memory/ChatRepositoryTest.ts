import { Repository } from "typeorm"
import { genChatId } from "../../utils/genChatId";
import { Chat } from "../../database/entities/Chat";

export interface IChatRepository  extends Repository<Chat>{
  chats: Array<Chat>
};

export const ChatRepositoryTest = {
  chats: [],
  create({ userSender, userReceiver }: Chat){
    const chat = { id: genChatId(), userSender, userReceiver };
    return chat;
  },

  save(chat: Chat){
    this.chats.push(chat)
  },

  findOne( { where: { id } } : any ) {
    let exists = false;
    this.users.map(chat => {
      if(chat.id == id) exists = chat
    })

    return exists
  }

} as unknown as IChatRepository; 