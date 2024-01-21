import { Chat } from "../database/entities/Chat";
import { IChatRepository } from "../repositories/in-memory/ChatRepositoryTest";
import { genChatId } from "../utils/genChatId";


export class CreateChatService{
  static create: Chat;
  constructor( private chatRepository: Omit<IChatRepository, "chats"> ){}

  async create({ userSender, userReceiver }: Omit<Chat, "id">): Promise<Chat> {
    try{
      const chat = this.chatRepository.create({ id: genChatId(), userSender, userReceiver});
      await this.chatRepository.save(chat);
      
      return chat;
    }
    catch(err){
      console.log(err)
    }
  }
} 