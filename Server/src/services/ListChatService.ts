import { Repository } from "typeorm";
import { IChatRepository } from "../repositories/in-memory/ChatRepositoryTest";
import { User } from "../database/entities/User";

export class ListChatService{
  constructor( private chatRepository: Omit<IChatRepository, "chats">, private userRepository: Repository<User> ){};

  async list( { username } ){
    const chats = await this.chatRepository
    .createQueryBuilder('chat')
    .leftJoinAndSelect('chat.userSender', 'userSender')
    .leftJoinAndSelect('chat.userReceiver', 'userReceiver')
    .where('chat.userReceiver = :username OR chat.userSender = :username', { username })
    .getMany();

    const chatsPromises = chats.map(async (chat) => {
      function handleName() {
          if (chat.userSender.username === username) return chat.userReceiver.username;
          else return chat.userSender.username;
      };

      const user = await this.userRepository.findOne({ where: { username: handleName() } });
      const { password: _, ...rest } = user;
  
      return { id: chat.id, rest };
    });
    
    const allChats = await Promise.all(chatsPromises);
    return allChats;
  };
};