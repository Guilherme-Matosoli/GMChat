import { IChatRepository } from "../repositories/in-memory/ChatRepositoryTest";

export class ListChatService{
  constructor( private chatRepository: Omit<IChatRepository, "chats"> ){};

  async list( { username } ){

    const chats = await this.chatRepository
    .createQueryBuilder('chat')
    .leftJoinAndSelect('chat.userSender', 'userSender')
    .leftJoinAndSelect('chat.userReceiver', 'userReceiver')
    .where('chat.userReceiver = :username OR chat.userSender = :username', { username })
    .getMany();

    return chats

  }
}