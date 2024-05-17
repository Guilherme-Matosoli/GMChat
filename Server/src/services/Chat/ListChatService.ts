import { Repository } from "typeorm";
import { User } from "../../database/entities/User";
import { Chat } from "../../database/entities/Chat";

export class ListChatService{
  constructor( private chatRepository: Repository<Chat>, private userRepository: Repository<User> ){};

  async list( { username } ){
    const chats = await this.chatRepository.find({ where: [{ userSender: { username } }, { userReceiver: { username } }], relations: ["userSender", "userReceiver"] });

    const chatsPromises = chats.map(async (chat) => {
      function handleName() {
          if (chat.userSender.username == username) return chat.userReceiver.username;
          else return chat.userSender.username;
      };

      const user = await this.userRepository.findOne({ where: { username: handleName() } });
      const { password: _, ...rest } = user;
  
      return { id: chat.id, user: rest };
    });
    
    const allChats = await Promise.all(chatsPromises);

    return allChats;
  };
};